import Command from "./Command";
import {updateUser} from "../api/UserHttp";
import User from "../domain/User";

export default class UpdateUserName extends Command{

    constructor(data) {
        super('UpdateUserName', data);
    }

    // action
    async onDispatch(context, action) {
        if(context.rootState.isServerLive){
            return await updateUser(action.command.data.owner, action.command.data.user)
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
        let ownerIndex = state.owners.findIndex( owner => owner.id == payload.action.command.data.owner.id);
        let ownerUserIndex = state.owners[ownerIndex].ownerUsers.findIndex( user => user.id == payload.action.command.data.user.id);
        let replacementItem = new User(payload.action.command.data.user);
        state.owners[ownerIndex].ownerUsers.splice(ownerUserIndex, 1, replacementItem);
    }
}

