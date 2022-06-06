import decode from 'jwt-decode';

class AuthService {

    getUserProfile() {
        return decode(this.getToken());
    }

    //check to see if token is expired 
    loggedIn() {
        const token = this.getToken();

        return token && !this.isTokenExpired(token) ? true : false;

    }

    // decode token and check to see if token is less than current time 
    isTokenExpired(token) {
        const decoded = decode(token);

        if (decoded.exp < Date.now() / 10000) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }

    // get token from local storage
    getToken() {
        return localStorage.getItem('id_token');
    }

    // set token in local storage
    login(idToken) {
        localStorage.setItem('id_token', idToken);
        // window.location.assign('/');
    }

    // remove token in local storage
    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('username');
        window.location.reload();
    }

}

export default new AuthService();