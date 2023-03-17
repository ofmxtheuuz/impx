"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIPLocation = void 0;
const axios_1 = require("axios");
const InvalidIP_ex_1 = require("../../exceptions/InvalidIP.ex");
const BASE_URL = "https://ipapi.co/0.0.0.0/json/";
async function getIPLocation(addr) {
    if (addr != null && addr.length > 0 && addr.includes(".")) {
        const result = await (0, axios_1.default)(BASE_URL.replace("0.0.0.0", addr));
        const data = result.data;
        if (data.error == true) {
            return false;
        }
        return data;
    }
    else {
        throw new InvalidIP_ex_1.InvalidIP(500, "An invalid IP was gave!");
    }
}
exports.getIPLocation = getIPLocation;
