import {v4 as createUUId} from 'uuid';

export default class ApiKey {

    constructor(options) {
        if (options != null) {
            this.id = options.id || null;
            this.apiKey = options.apiKey || createUUId();
            this.dateArchived = options.dateArchived || null;
        } else {
            this.id = null;
            this.apiKey = createUUId();
            this.dateArchived = null;
        }
    }

    getValue() {
        return this.apiKey;
    }

    getTruncatedValue () {
        if(typeof this.apiKey != 'undefined'){
            return "... "  + this.apiKey.substring(this.apiKey.length - 4);
        } else {
            return '';
        }
    }

    isArchived(){
        return this.dateArchived != null;
    }

    isNotArchived(){
        return !this.isArchived();
    }
}