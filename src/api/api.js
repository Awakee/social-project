import * as axios from "axios";

const baseUrl = 'https://localhost:5001';
const token = sessionStorage.getItem('accessToken');

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 5) {
        return instance.get(`/api/users/filter/${currentPage}/${pageSize}`).then(response => response.data)
    },
    follow (userId)  {
        return instance.post(`/api/users/follow/`, {Id: 0, FollowUserId: userId})
            .then(response => response.data)
    },
    unfollow (userId)  {
        return instance.post(`/api/users/unfollow/`, {Id: 0, FollowUserId: userId}).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`api/users/user/${userId}`)
    },
    updateStatus (newStatus) {
        return instance.post(`api/users/user/updatestatus`, {status: newStatus});
    },
    getStatus (userId) {
        return instance.get(`api/users/user/status/${userId}`).then(response => response);
    }
}

export const authAPI = {
    checkAuth()  {
        return instance.get(`${baseUrl}/getlogin`).then(response => response.data)
    },

    authLogin (username, password) {
        let formData = new FormData();
        formData.set("grant_type", "password");
        formData.set("username", username);
        formData.set("password", password);
        return instance.post(`/token`, formData).then(response => response.data)
    }
}





