import axios from "axios";
import {GetLocInterface} from "../../interfaces/GetLoc.interface";
import {InvalidIP} from "../../exceptions/InvalidIP.ex";

const BASE_URL = "https://ipapi.co/0.0.0.0/json/"

export async function getIPLocation(addr: string): Promise<GetLocInterface> {
    if(addr != null && addr.length > 0 && addr.includes(".") ) {
        const result = await axios(BASE_URL.replace("0.0.0.0", addr))
        return result.data 
    } else {
        throw new InvalidIP(500, "An invalid IP was gave!")
    }
}