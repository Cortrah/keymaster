import axios from "axios";

/**
 * Add a new user to an owner
 */
export function addUserToOwner(owner, userName) {
    return axios.post("/users", {
        ownerId: owner.id,
        userName: userName,
    });
}

/**
 * Update an owners user by its id
 */
export function updateUser( owner, user) {
    return axios.put("/users/" + user.id, {
        ownerId: owner.id,
        userName: user.userId,
    });
}

/**
 * Soft delete an owners user by the users id
 */
export function archiveUser(userId, ownerId) {
    return axios({
        data:  {
            ownerId: ownerId,
        },
        headers: {
            "Content-Type": "application/json",
        },
        method: "delete",
        url: "/users/" + userId,
    });
}
