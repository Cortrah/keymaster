import {v4 as createUUId} from 'uuid';

export default class Permission {

    constructor(options) {
        if (options != null) {
            this.id = options.id || createUUId();
            this.name = options.name || createUUId();
            this.dateArchived = options.dateArchived || null;
        } else {
            this.id = createUUId();
            this.name = createUUId();
            this.dateArchived = null;
        }
    }

    isArchived(){
        return this.dateArchived != null;
    }

    isNotArchived(){
        return !this.isArchived();
    }
}