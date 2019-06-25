import Command from "./Command";
import {updateOwner} from "../api/OwnerHttp";
import {addApiKeyToOwner} from "../api/ApiKeyHttp";
import ApiKey from "../domain/ApiKey";
import {v4 as createUUId} from "uuid";

export default class UpdateOwner extends Command{

    constructor(data) {
        super('UpdateOwner', data);
    }

    // action
    async onDispatch(context, action) {
        if(context.rootState.isServerLive){
            return await updateOwner(action.command.data)
                .then(
                    response => {
                        return context.commit('do', {action: action, results: response});
                    },
                    error => {
                        throw error;
                    }
                );
        } else {
            return context.commit('do', {action: action, results: null});
        }
    }

    // mutation
    do(state, payload) {
        let startingIndex = state.owners.findIndex( owner => owner.id == this.data.id);
        let replacementItem = this.data;
        state.owners.splice(startingIndex, 1, replacementItem);
        return state;
    }
}

