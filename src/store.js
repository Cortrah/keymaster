import Vue from 'vue';
import Vuex from 'vuex';

Vue.config.devtools = true;
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isServerLive: false,
        owners: [],
    },
    getters: {
        editingOwner: state => (ownerId) =>{
            let indexById = state.owners.findIndex( owner => owner.id == ownerId);
            return state.owners[indexById];
        },
        getUserOwners: state => (userId) => {
            let userOwners = [];
            state.owners.filter( owner => {
                owner.ownerUsers.find( user => {
                    if(user.userId === userId){
                        userOwners.push(owner);
                    }
                    return user.userId === userId;
                });
            });
            return userOwners;
        }
    },
    actions: {
        onInit(context, payload){
            context.commit("init", payload);
        },
        async onDispatch(context, action) {
            // console.log("--- store onDispatch action called ---");
            // console.log(context);
            // console.log(action);
            // console.log(action.command.thing1());
            // console.log(await action.command.thing2());
            return await action.command.onDispatch(context, action);
        },
    },
    mutations: {
        do(state, payload) {
            // console.log("=== store do mutation called ===");
            // console.log(state);
            // console.log(payload);
            // console.log(payload.action);
            // console.log(payload.action.type);
            // console.log(payload.action.command.name);
            // console.log(payload.action.command.data);
            return payload.action.command.do(state, payload);
        },
        init(state, payload){
            state.appView = payload;
        },
    }
});
