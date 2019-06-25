<template>
    <div id="editOwner">
        <!-- Owner Name -->
        <div class="row">
            <div class="col-sm-12">
                <div class="input-group form-group"
                     v-bind:class="{ 'has-error' : errors.has('Owner Name') }">
                    <input id="ownerNameInput" type="text"
                           name="Owner Name"
                           v-validate="'required'"
                           v-model="owner.name"
                           class="form-control"
                           placeholder="Owner Name">
                    <span class="input-group-btn">
                        <button id="saveOwnerNameBtn"
                                type="button"
                                class="btn btn-success"
                                @click.stop.prevent="saveOwnerName()">
                            Save
                        </button>
                    </span>
                </div>
                <div  v-if="errors.has('Owner Name')" class="alert alert-danger text-center">
                    {{ errors.first('Owner Name') }}
                </div>
            </div>
        </div>

        <!-- Api Keys -->
        <api-key-list :owner="owner"></api-key-list>

        <!-- Users -->
        <user-list :owner="owner"></user-list>

        <!-- Action Buttons -->
        <btn id="doneBtn" type="success" size="sm" class="pull-right"
             @click.stop.prevent="doneEditing()">
            Done
        </btn>
    </div>
</template>

<script>
    import ApiKeyList from './ApiKeyList';
    import UserList from './UserList';
    import Goto from '../commands/Goto';
    import Owner from '../domain/Owner';
    import UpdateOwner from "../commands/UpdateOwner";

    export default {
        name: "EditOwner",
        components: {ApiKeyList, UserList},
        computed: {
            owner: function() {
                return new Owner(this.$store.getters.editingOwner( this.$route.params.id ));
            }
        },
        methods: {
            saveOwnerName: function() {
                this.$store.dispatch({
                    type: 'onDispatch',
                    command: new UpdateOwner(this.owner)
                }).then (
                    result => {
                        this.$notify({
                            type: 'success',
                            icon: '',
                            title: 'Saved:',
                            content: 'Owner Saved Successfully',
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
                            content: 'Error saving owner name',
                            placement: 'bottom-right',
                            duration: 0,
                        });
                    }
                );
            },

            doneEditing: function() {
                this.$store.dispatch({
                    type: 'onDispatch',
                    command: new Goto({
                        name:'OwnerList',
                    })
                });
            }
        }
    }
</script>
