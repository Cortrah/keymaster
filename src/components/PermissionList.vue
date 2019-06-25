<template>
    <div class="row col-sm-12 spacer-left spacer-loose">
        <span v-for='(permission, index) in user.permissions' :key="index">
            <permission-item :owner="owner" :user="user" :permission="permission"></permission-item>
        </span>
    </div>
</template>

<script>
    import PermissionItem from "./PermissionItem";
    export default {
        name: "PermissionList",
        components: {PermissionItem},
        props: {
            owner: Object,
            user: Object,
        },
    }
</script>
