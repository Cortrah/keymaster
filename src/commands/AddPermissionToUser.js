import Command from "./Command";
import {addPermissionToUser, archiveUserPermission} from "../api/PermissionHttp";

export default class AddPermissionToUser extends Command{

    constructor(data) {
        super('AddPermissionToUser', data);
    }

    // action
    async onDispatch(context, action) {
        if(context.rootState.isServerLive){
            await addPermissionToUser(action.command.data.user, action.command.data.permission.name)
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
        let userIndex = state.owners[ownerIndex].ownerUsers.findIndex( user => user.id == payload.action.command.data.user.id);
        state.owners[ownerIndex].ownerUsers[userIndex].permissions.push(payload.action.command.data.permission);
    }
}

