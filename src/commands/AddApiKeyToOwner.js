import Command from "./Command";
import {addApiKeyToOwner} from "../api/ApiKeyHttp";
import ApiKey from "../domain/ApiKey";
import {v4 as createUUId} from "uuid";

export default class AddApiKeyToOwner extends Command{

    constructor(data) {
        super('AddApiKeyToOwner', data);
    }

    // action
    async onDispatch(context, action) {
        if(context.rootState.isServerLive){
            await addApiKeyToOwner(action.command.owner)
                .then(
                    response => {
                        return context.commit('do', {action: action, results: response});
                    },
                    error => {
                        throw error;
                    }
                );
        } else {
            let mockResponse = {
                data: {
                    apiKey: new ApiKey({
                        id: createUUId(),
                        name: createUUId()
                    })
                }
            };
            return context.commit('do', {action: action, results: mockResponse});
        }
    }

    // mutation
    do(state, payload) {
        let ownerIndex = state.owners.findIndex( owner => owner.id == this.data.owner.id);
        state.owners[ownerIndex].apiKeys.push(payload.results.data.apiKey);
    }
}

