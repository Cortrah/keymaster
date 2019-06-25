<template>
    <div class="panel-secondary panel-heading">

        <div class="panel-heading panel-heading-menu">
            <span class="panel-title">
                <i class="fas fa-key"></i>
                Api Keys
            </span>
            <ul class="panel-menu">
                <li>
                    <a class="btn btn-link" href="#"
                       @click.stop.prevent="addApiKey()">
                            <i class="fas fa-plus-circle"></i>
                            Key
                    </a>
                </li>
            </ul>
        </div>

        <div class="api-key-item">
            <div v-for='(keyObj, index) in owner.apiKeys' :key="keyObj.id" class="spacer-bottom-sm">
                <ApiKeyItem
                        v-if="keyObj.dateArchived == null"
                        :owner="owner"
                        :apiKey="owner.apiKeys[index]">
                </ApiKeyItem>
            </div>
        </div>
    </div>
</template>

<script>
    import ApiKeyItem from "./ApiKeyItem";
    import AddApiKeyToOwner from "../commands/AddApiKeyToOwner";
    export default {
        name: "ApiKeyList",
        components: {
            ApiKeyItem
        },
        props: {
           owner: Object,
        },
        methods: {
            addApiKey: function() {
                this.$store.dispatch(
                    {
                        type: 'onDispatch',
                        command: new AddApiKeyToOwner({
                            owner: this.owner
                        })
                    }
                ).then(
                    result => {
                        this.$notify({
                            type: 'success',
                            icon: '',
                            title: 'Success:',
                            content: 'ApiKey Successfully Added.',
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
                            content: 'Adding ApiKey Failed.',
                            placement: 'bottom-right',
                            duration: 0,
                        });
                    }
                )
            },
        }
    }
</script>
