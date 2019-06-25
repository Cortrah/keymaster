
export default class Command {

    constructor(name, data) {
        this.name = name;
        this.data = data;
    };

    // actions
    async onDispatch(context, action) {
        // we don't create a key value pair object named the payload,
        // we just create an object with an action and results and use it in the mutation
        return await context.commit('do', {action: action, results: null});
    }

    // mutation
    do(state, payload) {
        // console.log('in command payload');
        // console.log(state);
        // console.log(payload);
        // console.log(payload.action);
        // console.log(payload.results);
        // console.log(this.data);

        // by default return the state for chaining
        return state;
    }
}
