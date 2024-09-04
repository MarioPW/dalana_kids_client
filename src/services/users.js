
import { none } from '@cloudinary/url-gen/qualifiers/progressive';
import axios from 'axios';

export class UserServices {

    async login(email, password) {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`,
                new URLSearchParams({
                    username: email,
                    password: password
                }), { withCredentials: true });
            response.status == 200 && sessionStorage.setItem('dalanaKidsSession','logged');
            return true
        } catch (error) {
            console.error("Error logging in:", error.message);
            if (error.response) {
                console.log(error.response);
            }
            throw error;
        }
    }
    async register(email, password, password2) {
        const defaultName = "name";
        const request =
        {
            user_name: defaultName,
            email: email,
            password: password,
            password_confirm: password2
        }
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, request);
            console.log(response.data);
            return response;
        } catch (error) {
            console.error("Error registering:", error.message);
            if (error.response) {
                console.log(error.response.status);
                return false
            }
        }
    }
    async confirmRegister(code) {
        const req = {
            code: parseInt(code)
        }
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/confirm`, req)
            return response
        } catch (error) {
            console.error("Error registering:", error.message);
        }
    }
    async deleteUser(user_id) {
        axios
            .delete(`${import.meta.env.VITE_API_URL}/auth/delete/${user_id}`)
            .then((response) => {
                console.log(response.data);
            })
    }

    async logout() {
        sessionStorage.removeItem('dalanaKidsSession');
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/logout`, { withCredentials: true });
            response.status
        } catch (error) {
            console.error('Error during logout:', error.message)
        }
    }

    async checkAuthorization() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/check_authorization`, { withCredentials: true }).then(res => res.data)
            return res
        }catch (error) {
            console.error('Error during checkAuthorization:', error.message)
            return false
        }
    }

};
