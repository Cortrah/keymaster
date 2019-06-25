<template>
    <span class="label-default spacer-loose">
        <span>
            {{permission.name}}
        </span>
        <a @click="archivePermission(permission)"
           class="text-danger">
            <i class="fas fa-minus-circle"></i>
        </a>
    </span>
</template>

<script>
    import ArchiveUserPermission from "../commands/ArchiveUserPermission";

    export default {
        name: "PermissionItem",
        props: {
            owner: Object,
            user: Object,
            permission: Object,
        },
        methods: {
            archivePermission: function(permission) {
                this.$store.dispatch(
                    {
                        type: 'onDispatch',
                        command: new ArchiveUserPermission({
                            owner: this.owner,
                            user: this.user,
                            permission: this.permission,
                        }),
                    }
                );
            }
        }
    }
</script>
