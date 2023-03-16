import {AddressType} from "../../enums/AddressType.enum";
import {AddressTypeInvalid} from "../../exceptions/AddressTypeInvalid.ex";

const ipv4Regex = new RegExp(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/);
const ipv6Regex = new RegExp(/^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/);


function validate(address: string, type: AddressType): boolean {
    if(type.toLowerCase() == "v4") {
        return ipv4Regex.test(address)
    } else if(type.toLowerCase() == "v6") {
        return ipv6Regex.test(address)
    } else {
        throw new AddressTypeInvalid(500, "Invalid IP Address, use 'v4' or 'v6' (or the AddressType enum)")
    }
}
export function ValidateIP(IPAddressType: AddressType, address: string): boolean {
    if(IPAddressType.toLowerCase() == "v4") {
        return validate(address, IPAddressType)
    } else if (IPAddressType.toLowerCase() == "v6") {
        return  validate(address, IPAddressType)
    } else {
        throw new AddressTypeInvalid(500, "Invalid IP Address, use 'v4' or 'v6' (or the AddressType enum)")
    }
}