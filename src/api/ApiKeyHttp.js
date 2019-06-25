import axios from "axios";

/**
 * Add an apiKey to an Owner
 */
export function addApiKeyToOwner(owner) {
    return axios.post("/apikeys", {
        ownerId: owner.id,
    });
}

/**
 * Soft delete an apiKey of an Owner
 */
export function archiveApiKey(id) {
    return axios({
        data: null,
        headers: {
            "Content-Type": "application/json",
        },
        method: "delete",
        url: "/apikeys/" + id,
    });
}
