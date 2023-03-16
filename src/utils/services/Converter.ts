import {AddressConverterType} from "../../enums/AddressConverterType";
import {AddressTypeInvalid} from "../../exceptions/AddressTypeInvalid.ex";

function converterHexa(addr: string): string {
    return addr.split('.')
        .map(octet => parseInt(octet).toString(16).padStart(2, '0'))
        .join(':');
}
function converterDecimal(addr: string): string {
    return addr.split('.')
        .map(octet => parseInt(octet).toString(10))
        .join('.');
}
function converterBinary(addr: string) {
    return addr.split('.')
        .map(octet => parseInt(octet).toString(2).padStart(8, '0'))
        .join('.');
}

export function Converter(converter: AddressConverterType, address: string) {
    if(converter.toLowerCase() == "hexa") {
        return converterHexa(address)
    } else if (converter.toLowerCase() == "decimal") {
        return converterDecimal(address)
    } else if (converter.toLowerCase() == "binary") {
        return converterBinary(address)
    } else {
        throw new AddressTypeInvalid(500, "Invalid Converter Type, use the AddressConverterType enum")
    }
}