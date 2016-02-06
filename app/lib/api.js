import 'exports?self.fetch!whatwg-fetch';
import config from '../config/config'

class API {

    static setSession(loggedIn, token) {

        API.session.loggedIn = loggedIn;
        API.session.authToken = token;

    }

    static request(endpoint, method, data) {

        let jsondata = !!data ? JSON.stringify(data) : undefined;

        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        if (API.session.loggedIn) {
            headers.Authorization = API.session.authToken
        }

        return fetch(config.api.backend.url + endpoint, {
            method: method,
            headers: headers,
            body: jsondata
        }).then(function(response) {

            if (response.status >= 200 && response.status < 300) {
                return response.json()
            } else {
                let error = new Error(response.statusText)
                error.response = response
                throw error
            }

        });
    }

    static get(endpoint) {
        return API.request(endpoint, 'get', null)
    }

    static post(endpoint, data) {
        return API.request(endpoint, 'post', data)
    }


}

API.session = {
    loggedIn: false,
    authToken: null
}

export default API;