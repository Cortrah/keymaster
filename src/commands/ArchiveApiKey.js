import Command from "./Command";
import {archiveApiKey} from "../api/ApiKeyHttp";

export default class ArchiveApiKey extends Command{

    constructor(data) {
        super('ArchiveApiKey', data);
    }

    // action
    async onDispatch(context, action) {
        if(context.rootState.isServerLive){
            await archiveApiKey(action.command.data.apiKey.id)
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
        let ownerItem = state.owners.filter( owner => owner.id == this.data.owner.id);
        let apiKeyIndex = ownerItem[0].apiKeys.findIndex( key => key.id == this.data.apiKey.id);
        ownerItem.apiKeys = ownerItem[0].apiKeys.splice(apiKeyIndex, 1);
    }
}

