"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Converter = void 0;
const AddressTypeInvalid_ex_1 = require("../../exceptions/AddressTypeInvalid.ex");
function converterHexa(addr) {
    return addr.split('.')
        .map(octet => parseInt(octet).toString(16).padStart(2, '0'))
        .join(':');
}
function converterDecimal(addr) {
    return addr.split('.')
        .map(octet => parseInt(octet).toString(10))
        .join('.');
}
function converterBinary(addr) {
    return addr.split('.')
        .map(octet => parseInt(octet).toString(2).padStart(8, '0'))
        .join('.');
}
function Converter(converter, address) {
    if (converter.toLowerCase() == "hexa") {
        return converterHexa(address);
    }
    else if (converter.toLowerCase() == "decimal") {
        return converterDecimal(address);
    }
    else if (converter.toLowerCase() == "binary") {
        return converterBinary(address);
    }
    else {
        throw new AddressTypeInvalid_ex_1.AddressTypeInvalid(500, "Invalid Converter Type, use the AddressConverterType enum");
    }
}
exports.Converter = Converter;
