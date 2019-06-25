<template>
    <span class="row input-group" v-bind:style="{ maxWidth: itemWidth +'px'}">
        <input :id="'keyText_' + itemId"
               type="text"
               v-model="displayApiKey"
               class="input-group form-control spacer-trim" readonly/>
        <span :id="'apiKeyBtn_' + itemId"
              @click="hidingKey = !hidingKey"
              class="input-group-addon btn btn-info">
            <i v-bind:class="[hidingKey ? 'fas fa-angle-double-right' : 'fas fa-angle-double-left']"></i>
        </span>
        <button :id="'archiveKeyBtn_' + itemId"
                @click="archiveApiKey()"
                class="btn btn-danger spacer-left">
                <i class="fas fa-minus-circle"></i>
                Archive
        </button>
    </span>
</template>

<script>
    import ApiKey from '../domain/ApiKey';
    import ArchiveApiKey from "../commands/ArchiveApiKey";

    export default {
        name: "ApiKeyItem",
        props: {
            owner: Object,
            apiKey: ApiKey
        },

        data () {
            return {
                hidingKey: true,
            }
        },

        methods: {
            archiveApiKey: function(key) {
                this.$store.dispatch(
                    {
                        type: 'onDispatch',
                        command: new ArchiveApiKey({
                            owner: this.owner,
                            apiKey: this.apiKey,
                        })
                    }
                ).then(
                    result => {
                        this.$notify({
                            type: 'success',
                            icon: '',
                            title: 'Success:',
                            content: 'ApiKey Successfully Archived.',
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
                            content: 'Archiving ApiKey Failed.',
                            placement: 'bottom-right',
                            duration: 0,
                        });
                    }
                );
            },
        },

        computed: {
            itemId: function(){
                if(typeof this.apiKey != 'undefined') {
                    return this.apiKey.id;
                } else {
                    '';
                }
            },
            itemWidth: function(){
                return this.hidingKey ? '240' : '560';
            },
            displayApiKey: function(){
                if(typeof this.apiKey != 'undefined'){
                    if(this.hidingKey){
                        return this.apiKey.getTruncatedValue();
                    } else {
                        return this.apiKey.getValue();
                    }
                } else {
                    return '';
                }
            },
        }
    }
</script>
