"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressTypeInvalid = void 0;
class AddressTypeInvalid extends Error {
    constructor(errorCode, message) {
        super(message);
        this.errorCode = errorCode;
        this.name = 'AddressTypeInvalid';
    }
}
exports.AddressTypeInvalid = AddressTypeInvalid;
