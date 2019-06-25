import Command from "./Command";
import {archiveUserPermission} from "../api/PermissionHttp";

export default class ArchiveUserPermission extends Command{

    constructor(data) {
        super('ArchiveUserPermission', data);
    }

    // action
    async onDispatch(context, action) {
        if(context.rootState.isServerLive){
            await archiveUserPermission(action.command.data.permission.id)
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
        let userIndex =  state.owners[ownerIndex].ownerUsers.findIndex( user => user.id == payload.action.command.data.user.id);
        let permissionIndex = state.owners[ownerIndex].ownerUsers[userIndex].permissions.findIndex(
            permission => permission.id == payload.action.command.data.permission.id
        );
        state.owners[ownerIndex].ownerUsers[userIndex].permissions.splice(permissionIndex, 1);

    }
}

