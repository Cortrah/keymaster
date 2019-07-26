import Command from "./Command";
import {reviveOwner} from "../api/OwnerHttp";
import Owner from "../domain/Owner";

export default class ReviveOwner extends Command{

    constructor(data) {
        super('ReviveOwner', data);
    }

    // action
    async onDispatch(context, action) {
        if(context.rootState.isServerLive){
            await reviveOwner(action.command.data.id)
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
        console.log("reviving");
        console.log(state);
        console.log(payload);
        let ownerIndex = state.owners.findIndex( owner => owner.id == payload.action.command.data.owner.id);
        let replacementItem = new Owner(payload.action.command.data.owner);
        replacementItem.dateArchived = null;
        state.owners[ownerIndex].splice(ownerIndex, 1, replacementItem);
    }
}

