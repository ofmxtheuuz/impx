import {AddressType} from "../../enums/AddressType.enum";
import {AddressTypeInvalid} from "../../exceptions/AddressTypeInvalid.ex";

const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
const ipv6Regex = /^(?:(?:(?:[a-fA-F0-9]{1,4}:){6}|(?=(?:[a-fA-F0-9]{0,4}:){2,6}(?:(?:25[0-5])|(?:[a-fA-F0-9]{1,4}))(?5:((?5:){0,1}:(?5:)){0,4})))((25[0-5])|(?:[a-fA-F0-9]{1,4}))?(?1:(?2:((?3:((?4:((?5:((?6:((?7:((?8:((?9:[a-fA-F0-9]{1,4}|(?2))|(?3))|(?4))|(?5))|(?6))|(?7))|(?8))|(?9)))|(?10)):)|(?11)):)|(?12))|(?13))$/;


function validate(address: string, type: AddressType): boolean {
    if(type.toLowerCase() == "v4") {
        return ipv4Regex.test(address)
    } else if(type.toLowerCase() == "v6") {
        return ipv6Regex.test(address)
    } else {
        throw new AddressTypeInvalid(500, "Invalid IP Address, use 'v4' or 'v6' (or the AddressType enum)")
    }
}
export function Validate(IPAddressType: AddressType, address: string): boolean {
    if(IPAddressType.toLowerCase() == "v4") {
        return validate(address, IPAddressType)
    } else if (IPAddressType.toLowerCase() == "v6") {
        return  validate(address, IPAddressType)
    } else {
        throw new AddressTypeInvalid(500, "Invalid IP Address, use 'v4' or 'v6' (or the AddressType enum)")
    }
}