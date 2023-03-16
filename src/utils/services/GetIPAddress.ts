import {AddressType} from "../../enums/AddressType.enum";
import {networkInterfaces} from "os"
import GetIPs from "../../interfaces/GetIPs.interface";
import {AddressTypeInvalid} from "../../Exceptions/AddressTypeInvalid.ex";

async function getIPv6andIPv4(): Promise<GetIPs> {
    const interfaces = networkInterfaces();
    let IPv4, IPv6;
    Object.values(interfaces).forEach(iface => {
        iface.forEach(addr => {
            if (!addr.internal) {
                if (addr.family === 'IPv4') {
                    IPv4 = addr.address;
                } else if (addr.family === 'IPv6') {
                    IPv6 = addr.address;
                }
            }
        });
    });
    return {IPv4, IPv6}
}
export async function GetIPAddressAsync(IPAddressType: AddressType): Promise<string> {
    const {IPv4,IPv6} = await getIPv6andIPv4()
    if(IPAddressType.toLowerCase() == "v4") {
        return IPv4 
    } else if (IPAddressType.toLowerCase() == "v6") {
        return IPv6
    } else {
        throw new AddressTypeInvalid(500, "Invalid IP Address, use 'v4' or 'v6' (or the AddressType enum)")
    }
}