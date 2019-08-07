<template>
    <tr :id="'ownerItem_' + owner.id" >
        <td class="col-md-2">
            <span>
                {{ owner.name }}
            </span>
        </td>
        <td class="col-md-1">
            {{ owner.apiKeys.length }}
        </td>
        <td class="col-md-1">
            {{ owner.ownerUsers.length }}
        </td>
        <td class="col-md-2">
            <button :id="'editOwnerItemBtn_' + id"
                    @click="editOwner()"
                    class="btn btn-sm btn-info spacer-right"
                    v-bind:class="{ disabled: owner.dateArchived !== null }">
                <i class="fas fa-edit"></i>
                Edit
            </button>

            <button v-if="owner.dateArchived === null"
                    :id="'archiveOwnerItemBtn_' + id"
                    @click="archiveOwner()"
                    class="btn btn-sm btn-danger spacer-right">
                <i class="fas fa-minus-circle"></i>
                Archive
            </button>
        </td>
    </tr>
</template>

<script>
    import Goto from '../commands/Goto';
    import ArchiveOwner from "../commands/ArchiveOwner";
    export default {
        name: 'OwnerItem',
        props: {
            id: String,
            owner: Object,
            showArchived: Boolean,
        },
        methods: {

            editOwner: function() {
                // if it's archived don't allow editing
                if(this.owner.dateArchived === null){
                    // otherwise go to the edit page
                    this.$store.dispatch({
                        type: 'onDispatch',
                        command: new Goto({
                            name:'EditOwner',
                            params: this.owner,
                        })
                    });
                }
            },

            archiveOwner: function() {
                this.$store.dispatch({
                    type: 'onDispatch',
                    command: new ArchiveOwner(this.owner)
                }).then(
                    result => {
                        this.$notify({
                            type: 'success',
                            icon: '',
                            title: 'Success:',
                            content: 'Successfully Archived Owner',
                            placement: 'bottom-right',
                            duration: 2000,
                        });
                    }
                ).catch(
                    error => {
                        this.$notify({
                            type: 'danger',
                            icon: '',
                            title: 'Error:',
                            content: 'Archiving Owner Failed.',
                            placement: 'bottom-right',
                            duration: 0,
                        });
                    }
                );
            },
        }
    }
</script>

