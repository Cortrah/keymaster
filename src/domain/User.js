import Permission from "./Permission";
import {updateUser} from "../api/UserHttp";

export default class User {

    constructor(options) {
        if (options !== null) {
            this.id = options.id || null;
            this.userId = options.userId || "";
            this.permissions = [];
            if(options.hasOwnProperty('permissions')&& options.permissions !== null) {
                options.permissions.forEach(item => {
                    let permission = new Permission(item);
                    if(permission.isNotArchived()){
                        this.permissions.push(permission);
                    }
                })
            }
            this.dateArchived = options.dateArchived || null;
        } else {
            this.id = null;
            this.userId = "";
            this.permissions = [];
            this.dateArchived = null;
        }
    }

    getUserId() {
        return this.userId;
    }

    onUpdateUser(context, payload) {
        return updateUser( payload.data.owner, payload.data.user)
            .then(
                response => {
                    // if successful update the user locally
                    context.commit('updateUser', payload);
                },
                error => {
                    throw error;
                }
            );
    }

    updateUser(payload) {
        this.id = payload.data.user.id;
        this.userId = payload.data.user.userId;
        this.permissions = payload.data.user.permissions;
        this.dateArchived = payload.data.user.dateArchived;
    }

    addPermission(permission){
        this.permissions.push(permission);
    }

    archivePermission(permission){
        let permissionIndex = this.permissions.findIndex(
            perm => perm.id == permission.id
        );
        this.permissions.splice(permissionIndex, 1);
    }

    isArchived(){
        return this.dateArchived != null;
    }

    isNotArchived(){
        return !this.isArchived();
    }
}