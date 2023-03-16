

export class AddressTypeInvalid extends Error {
    constructor(public errorCode: number, message: string) {
        super(message);
        this.name = 'AddressTypeInvalid';
    }
}