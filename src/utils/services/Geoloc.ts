import axios from "axios";
import {GetLocInterface} from "../../interfaces/GetLoc.interface";

const BASE_URL = "https://ipapi.co/ip/json/"

async function getLoc(addr: string): Promise<GetLocInterface> {
    if(addr != null && addr.length > 0 && addr.includes(".")) {
        const result = await axios(BASE_URL.replace("ip", addr))
        return result.data
    }
}