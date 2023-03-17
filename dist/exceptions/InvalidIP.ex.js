"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidIP = void 0;
class InvalidIP extends Error {
    constructor(errorCode, message) {
        super(message);
        this.errorCode = errorCode;
        this.name = 'InvalidIP';
    }
}
exports.InvalidIP = InvalidIP;
