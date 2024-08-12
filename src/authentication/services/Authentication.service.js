import {API_BASE_URL} from "../../shared/service/url-common";

export class AuthenticationService {

    async signIn(email, password) {
        try {
            const response = await fetch(`${API_BASE_URL}/users/sign-in?email=${email}&password=${password}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                },
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error('Authentication returned error.');
            }

            const data = await response.json();
            // Maneja la respuesta según sea necesario, por ejemplo, guardando el token en el estado de la aplicación o en un almacenamiento seguro
            return data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }

    async signUp(names, lastnames, email, telephone, password, repeatPassword) {
        if (password === repeatPassword) {
            const requestBody = {
                name: {
                    firstName: names,
                    lastName: lastnames
                },
                emailAddress: {
                    address: email
                },
                phoneNumber: {
                    countryCode: "+51",
                    number: telephone
                },
                password: password,
                roles: [
                    "ROLE_USER"
                ]
            };

            try {
                const response = await fetch(`${API_BASE_URL}/users/sign-up`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Accept': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify(requestBody)
                });

                if (!response.ok) {
                    throw new Error('Authentication returned error.');
                }

                const data = await response.json();
                return data;
            } catch (error) {
                console.error(error.message);
                throw error;
            }
        } else {
            throw new Error('Password does not match');
        }
    }

    async getUser() {
        try {
            const response = await fetch(`${API_BASE_URL}/users/get-user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                },
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error('Error with the JWT.');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
    
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