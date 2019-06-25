import Command from "./Command";
import {addUserToOwner} from "../api/UserHttp";
import User from "../domain/User";
import {v4 as createUUId} from "uuid";

export default class AddUserToOwner extends Command{

    constructor(data) {
        super('AddUserToOwner', data);
    }

    // action
    async onDispatch(context, action) {
        if(context.rootState.isServerLive){
            await addUserToOwner(action.command.owner, action.command.newUserName)
                .then(
                    response => {
                        return context.commit('do', {action: action, results: response});
                    },
                    error => {
                        throw error;
                    }
                );
        } else {
            let mockResponse = new User({
                id: createUUId(),
                userId: action.command.data.newUserName
            });
            return context.commit('do', {action: action, results: mockResponse});
        }
    }

    // mutation
    do(state, payload){
        let ownerIndex = state.owners.findIndex( owner => owner.id == payload.action.command.data.owner.id);
        state.owners[ownerIndex].ownerUsers.push(payload.results);
    }
}

