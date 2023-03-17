"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetIPAddressAsync = void 0;
const os_1 = require("os");
const AddressTypeInvalid_ex_1 = require("../../exceptions/AddressTypeInvalid.ex");
async function getIPv6andIPv4() {
    const interfaces = (0, os_1.networkInterfaces)();
    let IPv4, IPv6;
    Object.values(interfaces).forEach(iface => {
        iface.forEach(addr => {
            if (!addr.internal) {
                if (addr.family === 'IPv4') {
                    IPv4 = addr.address;
                }
                else if (addr.family === 'IPv6') {
                    IPv6 = addr.address;
                }
            }
        });
    });
    return { IPv4, IPv6 };
}
async function GetIPAddressAsync(IPAddressType) {
    const { IPv4, IPv6 } = await getIPv6andIPv4();
    if (IPAddressType.toLowerCase() == "v4") {
        return IPv4;
    }
    else if (IPAddressType.toLowerCase() == "v6") {
        return IPv6;
    }
    else {
        throw new AddressTypeInvalid_ex_1.AddressTypeInvalid(500, "Invalid IP Address, use 'v4' or 'v6' (or the AddressType enum)");
    }
}
exports.GetIPAddressAsync = GetIPAddressAsync;
