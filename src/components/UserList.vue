<template>
    <div class="panel-secondary panel-heading">

        <div class="panel-heading panel-heading-menu">
            <span class="panel-title">
                <i class="fas fa-users"></i>
                Users
            </span>
            <ul class="panel-menu">
                <li>
                    <a class="btn btn-link" href="#"
                       @click.stop.prevent="getUserName()">
                        <i class="fas fa-plus-circle"></i>
                        User
                    </a>
                </li>
            </ul>
        </div>

        <span v-for='(user, index) in owner.ownerUsers' :key="index">
            <user-item
                    v-if="user.dateArchived == null"
                    :owner = "owner"
                    :user="owner.ownerUsers[index]">
            </user-item>
        </span>

        <modal id="userNameModal"
               title="Add User"
               v-model="gettingName"
               @show="setFocus" @hide="modalCallback"
               size="sm">
            <p>
                What is the LDAP userId/username of the new user?
            </p>
            <input ref="nameInput" type="text"
                   v-model="newName"
                   class="form-control"/>
        </modal>
    </div>
</template>

<script>
    import User from '../domain/User';
    import UserItem from "./UserItem";
    import AddUserToOwner from "../commands/AddUserToOwner";

    export default {
        name: "UserList",
        components: {UserItem},
        props: {
            owner: Object
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

            getUserName: function () {
                this.gettingName = true;
            },

            modalCallback (msg) {
                if(msg === "ok"){
                    this.addUser();
                } else {
                    // The user canceled the creation
                }
                this.gettingName = false;
            },

            // make a call to the server with the potential name of the new user
            addUser: function() {
                this.$store.dispatch(
                    {
                        type: 'onDispatch',
                        command: new AddUserToOwner({
                            owner: this.owner,
                            newUserName: this.newName,
                        }),
                    }
                ).then(
                    result => {
                        this.$notify({
                            type: 'success',
                            icon: '',
                            title: 'Success:',
                            content: 'User Successfully Added.',
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
                            content: 'Adding User Failed.',
                            placement: 'bottom-right',
                            duration: 0,
                        });
                    }
                )
            },
        }
    }
</script>
