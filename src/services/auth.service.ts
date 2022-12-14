import axios from "axios";
class AuthService {
    serverUrl = process.env.SERVER_APP_URL || "http:localhost:5000/api";

    async login(accessToken: string) {
        try {
            console.log(process.env.SERVER_APP_URL);
            
            var user = await axios.get(`https://frozen-caverns-53350.herokuapp.com/api/users/profile`, {
                headers: { authorization: accessToken as string },
            });
            return user;
        } catch (e) {
            
        }
    }
}

export default new AuthService();
