import axios from "axios";

/**
 * Add a permission to an Owner User
 */
export function addPermissionToUser(user, newPermissionName) {
    return axios.post("/permissions/",{
        userId: user.id,
        newPermissionName: newPermissionName
    });
}

/**
 * Soft delete the permission of an Owners User
 */
export function archiveUserPermission(id) {
    return axios({
        data: null,
        headers: {
            "Content-Type": "application/json",
        },
        method: "delete",
        url: "/permissions/" + id,
    });
}
