<template>
    <div id="ownerList">
        <div class="table-responsive">
            <table class="table table-bordered table-highlight table-hover margin-zero" >
                <thead>
                    <tr>
                        <th class="control-label col-sm-4">Owner</th>
                        <th class="control-label col-sm-2">Api Keys</th>
                        <th class="control-label col-sm-2">Users</th>
                        <td class="col-sm-4 center-block"></td>
                    </tr>
                </thead>
                <tbody v-for='(owner, index) in (ownerItems)' :key="owner.id">
                    <owner-item v-if="owner.dateArchived == null"
                                :id="owner.id"
                                :owner='ownerItems[index]'>
                    </owner-item>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { Modal } from 'uiv';
    import OwnerItem from "./OwnerItem";

    export default {
        name: "OwnerList",

        components: {
            Modal,
            OwnerItem
        },

        computed: {
            ownerItems () {
                return this.$store.state.owners
            }
        },
    }
</script>
