import Command from "./Command";
import Owner from "../domain/Owner";
import {getOwners} from "../api/OwnerHttp";

export default class LoadOwners extends Command{

    constructor(data) {
        super('LoadOwners', data);
    }

    // actions
    async onDispatch(context, action) {
        if(context.rootState.isServerLive){
            await getOwners()
                .then(
                    response => {
                        return context.commit('do', {action: action, results: response});
                    },
                    error => {
                        throw error;
                    }
                );
        } else {
            let mockResponse = {
                data:[
                    new Owner({
                        "id": '20',
                        "name": "TestService",
                        "dateCreated": 1539835200000,
                        "createdBy": "hkphooey",
                        "dateArchived": null,
                        "archivedBy": null,
                        "apiKeys": [
                            {
                                "id": '666',
                                "apiKey": "ANl-PF2n-7ftV-Z6Nl-PF2n-7ftV-Z68n-8n-Y",
                                "dateCreated": 1525124713000,
                                "createdBy": "hkphooey",
                                "dateArchived": 1540904866000,
                                "archivedBy": "anonymousUser"
                            },
                            {
                                "id": '6',
                                "apiKey": "Tn-7ftV-Z68n-Nl-PF2nNl-PF2n-7ftV-Z68n-V-Z68n-EY",
                                "dateCreated": 1525124713000,
                                "createdBy": "hkphooey",
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
                                "id": '20',
                                "userId": "beagle2",
                                "dateCreated": 1539835200000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '21',
                                "userId": "beagle1",
                                "dateCreated": 1539835200000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '23',
                                "userId": "scrooge",
                                "dateCreated": 1539835200000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '24',
                                "userId": "gyro",
                                "dateCreated": 1539835200000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            }
                        ]
                    }),
                    new Owner({
                        "id": '7',
                        "name": "ArchivedService",
                        "dateCreated": 1539835200000,
                        "createdBy": "courcat",
                        "dateArchived": 1539835200000,
                        "archivedBy": "minmouse",
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
                                "id": '29',
                                "userId": "goofy",
                                "dateCreated": 1539835200000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '20',
                                "userId": "bluto",
                                "dateCreated": 1539835200000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id":'21',
                                "userId": "whammo",
                                "dateCreated": 1539835200000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '23',
                                "userId": "ren",
                                "dateCreated": 1539835200000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '24',
                                "userId": "stimpy",
                                "dateCreated": 1539835200000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            }
                        ]
                    }),
                    new Owner({
                        "id": '1',
                        "name": "ReportService",
                        "dateCreated": 1455744691000,
                        "createdBy": "hkphooey",
                        "dateArchived": null,
                        "archivedBy": null,
                        "apiKeys": [
                            {
                                "id": '3',
                                "apiKey": "mBosNl-PF2n-7ftV-Z68n-3JJJmmbooQB",
                                "dateCreated": 1455685200000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '1',
                                "apiKey": "Nl-PF2nNl-PF2n-7ftV-Z68n--7ftV-Z68n-Y",
                                "dateCreated": 1455744711000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            }
                        ],
                        "ownerUsers": [
                            {
                                "id": '10',
                                "userId": "ren",
                                "dateCreated": 1525998187000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '64',
                                "userId": "whammo",
                                "dateCreated": 1543381200000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '2',
                                "userId": "minmouse",
                                "dateCreated": 1520295239000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '13',
                                "userId": "minmouse",
                                "dateCreated": 1526943511000,
                                "createdBy": "maugli",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '12',
                                "userId": "farkle1",
                                "dateCreated": 1526491257000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            }
                        ]
                    }),
                    new Owner({
                        "id": '6',
                        "name": "AlertService",
                        "dateCreated": 1525124684000,
                        "createdBy": "hkphooey",
                        "dateArchived": null,
                        "archivedBy": null,
                        "apiKeys": [
                            {
                                "id": '6',
                                "apiKey": "Nl-PF2n-7ftV-Z68n-",
                                "dateCreated": 1525124713000,
                                "createdBy": "hkphooey",
                                "dateArchived": 1540904866000,
                                "archivedBy": "anonymousUser"
                            },
                            {
                                "id": '5',
                                "apiKey": "vs8QSNl-PF2n-7ftV-Z68n-KjvJ9f23wh9T",
                                "dateCreated": 1525124713000,
                                "createdBy": "hkphooey",
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
                                "id": '19',
                                "userId": "minmouse",
                                "dateCreated": 1534353593000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '9',
                                "userId": "maugli",
                                "dateCreated": 1525752000000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            },
                            {
                                "id": '18',
                                "userId": "dogbowl",
                                "dateCreated": 1526443200000,
                                "createdBy": "hkphooey",
                                "dateArchived": null,
                                "archivedBy": null
                            }
                        ]
                    })
                ]
            };
            return context.commit('do', {action: action, results: mockResponse});
        }
    }

    // mutation
    do(state, payload) {
        state.owners = [];
        // first add any owners that were sent in via the constructor
        this.data.forEach(owner => {
            state.owners.push(new Owner(owner));
        });
        // then add any owners that were fetched during the onDispatch action
        payload.results.data.forEach(owner => {
            state.owners.push(new Owner(owner));
        });
    }
}

