import Command from "./Command";
import {archiveOwner} from "../api/OwnerHttp";

export default class ArchiveOwner extends Command{

    constructor(data) {
        super('ArchiveOwner', data);
    }

    // action
    async onDispatch(context, action) {
        if(context.rootState.isServerLive){
            await archiveOwner(action.command.data.id)
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
        state.owners = state.owners.filter( owner => owner.id != this.data.id);
    }
}

