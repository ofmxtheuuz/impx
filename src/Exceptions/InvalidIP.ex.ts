

export class InvalidIP extends Error {
    constructor(public errorCode: number, message: string) {
        super(message);
        this.name = 'InvalidIP';
    }
}