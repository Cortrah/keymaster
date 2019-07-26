<template>

    <span class="row spacer-trim">

         <div class="input-group">
            <input type="text"
                   class="form-control" placeholder="LDAP userId/Username"
                   v-model="user.userId">
            <span class="input-group-btn">
                <button type="button"
                        class="btn btn-success spacer-right"
                        @click.stop.prevent="updateUserName()">
                    Save
                </button>

                <dropdown id="otherOwners">
                  <btn type="default">
                      Other Owners
                  </btn>
                  <btn type="default" class="dropdown-toggle"><span class="caret"></span></btn>
                  <template slot="dropdown">
                    <li v-for='(owner, index) in this.$store.getters.getUserOwners(user.userId)' :key="index">
                        <a role="button" @click="editOwner(owner)">
                            {{ owner.name }}
                        </a>
                    </li>
                  </template>
                </dropdown>
            </span>

            <span class="pull-right">
                <button @click.stop.prevent="addPermission()"
                        class="btn btn-info spacer-right">
                    <i class="fas fa-plus-circle"></i>
                    Permission
                </button>
                <button @click.stop.prevent="archiveUser()"
                        class="btn btn-danger spacer-left-sm">
                    <i class="fas fa-minus-circle"></i>
                    Archive
                </button>
            </span>
        </div>

        <permission-list :owner="owner" :user="user"></permission-list>

        <modal id="permissionModal"
               title="Add Permission"
               v-model="gettingName"
               @show="setFocus" @hide="modalCallback"
               size="sm">
            <p>
                "What is the Name of the new permission?"
            </p>
            <input ref="nameInput" type="text"
                   v-model="newName"
                   class="form-control"/>
        </modal>
    </span>
</template>

<script>
    import PermissionList from "./PermissionList";
    import Permission from "../domain/Permission";
    import UpdateUserName from "../commands/UpdateUserName";
    import ArchiveUser from "../commands/ArchiveUser";
    import AddPermissionToUser from "../commands/AddPermissionToUser";
    import Goto from "../commands/Goto";

    export default {

        name: "UserItem",

        components: {
            PermissionList,
        },

        props: {
            owner: Object,
            user: Object,
        },

        data () {
            return {
                newName: null,
                gettingName: false,
            }
        },

        methods: {

            setFocus (msg) {
                this.$refs.nameInput.focus();
            },

            addPermission: function() {
                this.gettingName = true;
            },

            updateUserName: function() {
                this.$store.dispatch(
                    {
                        type: 'onDispatch',
                        command: new UpdateUserName({
                            owner: this.owner,
                            user: this.user,
                        }),
                    }
                ).then(
                    result => {
                        this.$notify({
                            type: 'success',
                            icon: '',
                            title: 'Success:',
                            content: 'User Successfully Updated.',
                            placement: 'bottom-right',
                        });
                    }
                ).catch(
                    error => {
                        this.$notify({
                            type: 'danger',
                            icon: '',
                            title: 'Error:',
                            content: 'Updating User Failed.',
                            placement: 'bottom-right',
                        });
                    }
                )
            },

            editOwner: function(owner) {
                this.$store.dispatch({
                    type: 'onDispatch',
                    command: new Goto({
                        name:'EditOwner',
                        params: owner,
                    })
                });
            },

            modalCallback (msg) {
                if(msg === "ok"){
                    this.$store.dispatch(
                        {
                            type: 'onDispatch',
                            command: new AddPermissionToUser({
                                owner: this.owner,
                                user: this.user,
                                permission: new Permission({name: this.newName}),
                            }),
                        }
                    );
                    this.newName = '';
                } else {
                    // The user canceled the creation
                }
                this.gettingName = false;
            },

            archiveUser: function() {
                this.$store.dispatch(
                    {
                        type: 'onDispatch',
                        command: new ArchiveUser({
                            owner: this.owner,
                            user: this.user,
                        }),
                    }
                ).then(
                    result => {
                        this.$notify({
                            type: 'success',
                            icon: '',
                            title: 'Success:',
                            content: 'User Successfully Archived.',
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
                            content: 'Archiving User Failed.',
                            placement: 'bottom-right',
                            duration: 0,
                        });
                    }
                )
            },
        }
    }
</script>
