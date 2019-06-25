import User from "./User";
import ApiKey from "./ApiKey";

export default class Owner {

    constructor(options) {
        if (options != null) {
            this.id = options.id || null;
            this.name = options.name || "";
            this.apiKeys = [];
            if(options.hasOwnProperty('apiKeys')&& options.apiKeys !== null) {
                options.apiKeys.forEach(item => {
                    let apiKey = new ApiKey(item);
                    if(apiKey.isNotArchived()){
                        this.apiKeys.push(apiKey);
                    }
                })
            }
            this.ownerUsers = [];
            if(options.hasOwnProperty('ownerUsers')&& options.ownerUsers !== null){
                options.ownerUsers.forEach(item => {
                    let user = new User(item);
                    if(user.isNotArchived()){
                        this.ownerUsers.push(user);
                    }
                })
            }
            this.dateArchived = options.dateArchived || null;
        } else {
            this.id = null;
            this.name = "";
            this.apiKeys = [];
            this.ownerUsers = [];
            this.dateArchived = null;
        }
    }

    updateOwnerName(newOwnerName){
        this.name = newOwnerName;
    }

    addApiKey(apiKey) {
        this.apiKeys.push(apiKey);
    }

    archiveApiKey(apiKeyId) {
        let apiKeyIndex = this.apiKeys.findIndex( key => key.id == apiKeyId);
        this.apiKeys.splice(apiKeyIndex, 1);
    }

    addUser(user) {
        this.ownerUsers.push(user);
    }

    archiveUser(userId) {
        let userIndex = this.ownerUsers.findIndex( user => user.id == userId);
        this.ownerUsers.splice(userIndex, 1);
    }

    getApiKeyById(apiKeyId) {
        let itemIndex = this.apiKeys.findIndex(
            item => item.id == apiKeyId
        );
        return this.apiKeys[itemIndex];
    }

    getUserById(userId) {
        let itemIndex = this.ownerUsers.findIndex(
            item => item.id == userId
        );
        return this.ownerUsers[itemIndex];
    }

    isArchived(){
        return this.dateArchived != null;
    }

    isNotArchived(){
        return !this.isArchived();
    }
}
