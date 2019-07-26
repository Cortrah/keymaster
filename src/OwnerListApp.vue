<template>
    <div>
        <div id="ownerListPanel"
             class="col-sm-12 panel panel-primary">
            <div class="panel-heading panel-heading-menu">
                <span class="panel-title">
                    <router-link id="viewOwnerListBtn" :to="{'name': 'OwnerList'}">
                        <i class="fas fa-lock"></i>
                        Owners
                    </router-link>
                    <span v-if='this.$route.name === "EditOwner"'>
                        > Edit Owner
                    </span>
                </span>
                <ul class="panel-menu">
                    <li v-if='this.$route.name === "OwnerList"'>
                        <a id='addOwnerBtn' class="btn btn-link" href="#"
                           @click.stop.prevent="getOwnerName()">
                            <i class="fas fa-plus-circle"></i>
                            Owner
                        </a>
                    </li>
                </ul>
            </div>

            <div class="panel-body">
                <router-view></router-view>
            </div>
        </div>

        <modal id="ownerNameModal"
               title="Add Owner"
               v-model="gettingName"
               @show="onShowModal" @hide="onCloseModal"
               class="form-group"
               v-bind:class="{'has-error': errors.has('Owner Name')}"
               size="sm">
            <p>
                "What is the name of the new owner?"
            </p>
            <input id="nameInput" ref="nameInput" type="text"
                   v-model="newName"
                   name="Owner Name"
                   v-validate="'required'"
                   class="form-control"
                   v-bind:class="{ 'has-error' : errors.has('Owner Name') }"/>
            <div v-if="errors.has('Owner Name')"class="alert alert-danger text-center">
                {{ errors.first('Owner Name') }}
            </div>
        </modal>
    </div>
</template>
<script>
    import { Modal } from 'uiv';
    import OwnerList from './components/OwnerList.vue';
    import OwnerItem from "./components/OwnerItem";
    import EditOwner from "./components/EditOwner";
    import Owner from "./domain/Owner";

    import LoadOwners from "./commands/LoadOwners";
    import AddOwner from "./commands/AddOwner";

    export default {
        name: 'owner-list-app',

        components: {
            Modal,
            EditOwner,
            OwnerList,
            OwnerItem
        },

        created() {
            let startingOwners = [
                new Owner({
                    "id": '3',
                    "name": "FriendService",
                    "dateCreated": 1467950400000,
                    "createdBy": "hkphooey",
                    "dateArchived": null,
                    "archivedBy": null,
                    "apiKeys": [],
                    "ownerUsers": [
                        {
                            "id": '22',
                            "userId": "beagle3",
                            "dateCreated": 1539835200000,
                            "createdBy": "hkphooey",
                            "dateArchived": null,
                            "archivedBy": null
                        },
                        {
                            "id": 11,
                            "userId": "dogbowl",
                            "dateCreated": 1525998189000,
                            "createdBy": "courcat",
                            "dateArchived": null,
                            "archivedBy": null
                        },
                        {
                            "id": 65,
                            "userId": "maugli",
                            "dateCreated": 1543381200000,
                            "createdBy": "courcat",
                            "dateArchived": null,
                            "archivedBy": null
                        },
                        {
                            "id": 6,
                            "userId": "minmouse",
                            "dateCreated": 1525752000000,
                            "createdBy": "courcat",
                            "dateArchived": null,
                            "archivedBy": null
                        },
                        {
                            "id": 14,
                            "userId": "farkle1",
                            "dateCreated": 1526443200000,
                            "createdBy": "courcat",
                            "dateArchived": null,
                            "archivedBy": null
                        }
                    ]
                }),
                new Owner({
                    "id": '4',
                    "name": "PlaceService",
                    "dateCreated": 1493243454000,
                    "createdBy": "hkphooey",
                    "dateArchived": null,
                    "archivedBy": null,
                    "apiKeys": [
                        {
                            "id": '4',
                            "apiKey": "q6H9NfRgiq50O4N9nP2E5Alg678Ko9l2",
                            "dateCreated": 1493179200000,
                            "createdBy": "courcat",
                            "dateArchived": null,
                            "archivedBy": null
                        }
                    ],
                    "ownerUsers": [
                        {
                            "id": '22',
                            "userId": "beagle3",
                            "dateCreated": 1539835200000,
                            "createdBy": "hkphooey",
                            "dateArchived": null,
                            "archivedBy": null
                        },
                        {
                            "id": '66',
                            "userId": "whammo",
                            "dateCreated": 1543452858000,
                            "createdBy": "courcat",
                            "dateArchived": null,
                            "archivedBy": null
                        },
                        {
                            "id": '3',
                            "userId": "ren",
                            "dateCreated": 1524016106000,
                            "createdBy": "courcat",
                            "dateArchived": null,
                            "archivedBy": null
                        },
                        {
                            "id": '16',
                            "userId": "stimpy",
                            "dateCreated": 1526443200000,
                            "createdBy": "courcat",
                            "dateArchived": null,
                            "archivedBy": null
                        }
                    ]
                }),
                new Owner({
                    "id": '2',
                    "name": "GeoService",
                    "dateCreated": 1467980376000,
                    "createdBy": "hkphooey",
                    "dateArchived": null,
                    "archivedBy": null,
                    "apiKeys": [
                        {
                            "id": '2',
                            "apiKey": "VYnlTykriB2zM7LZz4C21xDRE4ytBTU8",
                            "dateCreated": 1467980413000,
                            "createdBy": "courcat",
                            "dateArchived": null,
                            "archivedBy": null
                        }
                    ],
                    "ownerUsers": [
                        {
                            "id": '22',
                            "userId": "beagle3",
                            "dateCreated": 1539835200000,
                            "createdBy": "hkphooey",
                            "dateArchived": null,
                            "archivedBy": null
                        },
                        {
                            "id": '15',
                            "userId": "minmouse",
                            "dateCreated": 1526443200000,
                            "createdBy": "courcat",
                            "dateArchived": null,
                            "archivedBy": null
                        }
                    ]
                })
            ];
            this.$store.dispatch(
                {
                    type:'onDispatch',
                    command: new LoadOwners(startingOwners)
                }
            ).then(
                result => {
                    // all's well
                    this.$notify({
                        type: 'success',
                        icon: '',
                        title: 'Victory:',
                        content: 'Initial loading of owners succeeded',
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
                        content: 'Initial loading of owner data failed',
                        placement: 'bottom-right',
                        duration: 0,
                    });
                }
            );
        },

        data () {
            return {
                newName: null,
                gettingName: false,
            }
        },

        methods: {
            onShowModal (msg) {
                this.$refs.nameInput.focus();
            },

            onCloseModal (msg) {
                if(msg === "ok"){
                    this.validateAndAddOwner();
                } else {
                    // The user canceled the creation
                    this.gettingName = false;
                    this.errors.clear();
                }
                document.getElementById("addOwnerBtn").focus();
            },

            getOwnerName () {
                this.gettingName = true;
            },

            validateAndAddOwner () {
                this.$validator.validateAll()
                    .then( result => {
                            if (result) {
                                // then validation passed
                                this.errors.clear();
                                this.$store.dispatch(
                                    {
                                        type: 'onDispatch',
                                        command: new AddOwner({
                                            name: this.newName
                                        })
                                    }
                                ).then(
                                    result => {
                                        this.$notify({
                                            type: 'success',
                                            icon: '',
                                            title: 'Owner Added',
                                            content: 'The new owner was successfully saved on the server',
                                            placement: 'bottom-right',
                                            duration: 2000,
                                        });
                                    }
                                ).catch(
                                    error => {
                                        this.$notify({
                                            type: 'danger',
                                            icon: '',
                                            title: 'Error',
                                            content: 'Adding owner failed - ' + error,
                                            placement: 'bottom-right',
                                            duration: 0,
                                        });
                                    }
                                );
                                this.gettingName = false;
                            } else {
                                // then validation failed and so we are still getting the name
                                this.gettingName = true;
                            }
                            return;
                        }
                    )
            },
        }
    }
</script>
