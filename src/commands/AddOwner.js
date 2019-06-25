import {v4 as createUUId} from "uuid";
import Owner from "../domain/Owner";
import Command from "../commands/Command";
import {addOwner} from "../api/OwnerHttp";

export default class AddOwner extends Command{

    constructor(data) {
        super('AddOwner', data);
    }

    // action
    async onDispatch(context, action) {
        let localOwner = new Owner({
            id: createUUId(),
            name: action.command.data.name
        });

        if(context.rootState.isServerLive){
            return await addOwner(localOwner)
                .then(
                    response => {
                        // if successful update the local view
                        let responseOwner = new Owner(response.data);
                        context.commit('do', {
                            action: action,
                            results: responseOwner
                        });
                    },
                    error => {
                        throw error;
                    }
                );
        } else {
            // throw error;
            // for now stub a result
            return context.commit('do', {
                action: action,
                results: localOwner
            });
        }
    }

    // mutation
    do(state, payload) {
        state.owners.push(payload.results);
    }
}

