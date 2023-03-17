"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateIP = void 0;
const AddressTypeInvalid_ex_1 = require("../../exceptions/AddressTypeInvalid.ex");
const ipv4Regex = new RegExp(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/);
const ipv6Regex = new RegExp(/^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/);
function validate(address, type) {
    if (type.toLowerCase() == "v4") {
        return ipv4Regex.test(address);
    }
    else if (type.toLowerCase() == "v6") {
        return ipv6Regex.test(address);
    }
    else {
        throw new AddressTypeInvalid_ex_1.AddressTypeInvalid(500, "Invalid IP Address, use 'v4' or 'v6' (or the AddressType enum)");
    }
}
function ValidateIP(IPAddressType, address) {
    if (IPAddressType.toLowerCase() == "v4") {
        return validate(address, IPAddressType);
    }
    else if (IPAddressType.toLowerCase() == "v6") {
        return validate(address, IPAddressType);
    }
    else {
        throw new AddressTypeInvalid_ex_1.AddressTypeInvalid(500, "Invalid IP Address, use 'v4' or 'v6' (or the AddressType enum)");
    }
}
exports.ValidateIP = ValidateIP;
