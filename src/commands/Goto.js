import Command from "./Command";

export default class Goto extends Command{

    constructor(data) {
        super('Goto', data);
    }

    // action
    async onDispatch(context, action){
        //console.log(this.name + ' command dispatched');
        return await context.commit('do', {action: action, results: null});
    }

    // mutation
    do(state, payload){
        // console.log(state);
        // console.log('goto payload');
        // console.log(payload);
        // console.log(payload.action);
        // console.log(payload.results);
        // console.log(this.data);
        let paramId = null;
        if(this.data.params){
            paramId = this.data.params.id;
        }
        return state.appView.$router.push({name: this.data.name, params: {id: paramId}});
    }
}

