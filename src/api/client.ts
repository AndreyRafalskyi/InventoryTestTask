import {ROUTES} from "./routes";
import axios from "axios";

export class Client<T> {
    private baseURL: string;
    constructor() {
        this.baseURL = "https://5474-83-24-150-181.ngrok-free.app/api/v1/app-service";
    }

    async request(url: typeof ROUTES[keyof typeof ROUTES], method = "GET", parameters = {}): Promise<T>{
        const data = await axios.request({
            url: this.baseURL + url,
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "69420",
            },
            data: parameters,
        } );
        return data.data;
    }
}