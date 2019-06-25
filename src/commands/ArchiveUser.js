import Command from "./Command";
import {archiveUser} from "../api/UserHttp";

export default class ArchiveUser extends Command{

    constructor(data) {
        super('ArchiveUser', data);
    }

    // action
    async onDispatch(context, action) {
        if(context.rootState.isServerLive){
            await archiveUser(action.command.data.user.id, action.command.data.owner.id)
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
        state.owners[ownerIndex].ownerUsers.splice(userIndex, 1);
    }
}

