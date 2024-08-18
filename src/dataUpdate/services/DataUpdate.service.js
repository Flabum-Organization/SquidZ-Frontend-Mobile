import { API_BASE_URL } from "../../shared/service/url-common";
import axios from 'axios';

export class DataUpdateService {
    async getUser() {
        try {
            const response = await axios.get(`${API_BASE_URL}/users/get-user`, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('Error al obtener los datos del usuario.');
        }
    }

    async updateUser(userData) {
        try {
            const response = await axios.put(`${API_BASE_URL}/users/update-user-data`, userData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            return response;
        } catch (error) {
            throw new Error('Error al actualizar los datos del usuario.');
        }
    }
}