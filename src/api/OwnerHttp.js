import axios from "axios";

/**
 * Get a list of owners
 */
export function getOwners() {
    return axios.get("/owners");
}

/**
 * Add a new owner
 */
export function addOwner(owner) {
    return axios.post("/owners/", owner);
}

/**
 * Update an owner
 */
export function updateOwner(owner) {
    return axios.put("/owners/" + owner.id, owner);
}

/**
 * Soft delete an owner by its id
 */
export function archiveOwner(id) {
    return axios({
        data: null,
        headers: {
            "Content-Type": "application/json",
        },
        method: "delete",
        url: "/owners/" + id,
    });
}

/**
 * Revive an archived owner by its id
 */
export function reviveOwner(id) {
    return axios({
        data: null,
        headers: {
            "Content-Type": "application/json",
        },
        method: "put",
        url: "/owners/" + id,
    });
}
