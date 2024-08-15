import { API_BASE_URL } from "../../shared/service/url-common";
import axios from 'axios';

export class DataUpdateService {

    async updatePassword(currentPassword, newPassword) {
        if (currentPassword !== newPassword) {
            const requestBody = {
                password: newPassword
            };

            try {
                const response = await axios.put(`${API_BASE_URL}/users/update-password`, requestBody, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    withCredentials: true
                });

                return response.data;

            } catch (error) {
                if (error.response) {
                    throw new Error('Failed to update password.');
                } else if (error.request) {
                    throw new Error('No response from server.');
                } else {
                    throw new Error('Error occurred while setting up the request.');
                }
            }
        } else {
            throw new Error('New password should not be the same as the current password.');
        }
    }
}
