import {API_BASE_URL} from "../../shared/service/url-common";

export class AuthenticationService {

    async updatePassword(currentPassword, newPassword) {
        if (currentPassword !== newPassword) {
            const requestBody = {
                password: newPassword
            }
            const response = await fetch(`${API_BASE_URL}/users/update-password`,
                {method: 'PUT',
                    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                    credentials: 'include',
                    body: JSON.stringify(requestBody)
                });
            if (!response.ok) {throw new Error('Failed to update password.');}
            return response.json();
        }
        else { throw new Error('New password should not be same as current password.'); }
    }
}