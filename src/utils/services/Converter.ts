import {AddressConverterType} from "../../enums/AddressConverterType";
import {AddressTypeInvalid} from "../../exceptions/AddressTypeInvalid.ex";

export function Converter(address: string, converter: AddressConverterType) {
    if(converter.toLowerCase() == "hexa") {
        
    } else if (converter.toLowerCase() == "decimal") {
        
    } else if (converter.toLowerCase() == "binary") {
        
    } else {
        throw new AddressTypeInvalid(500, "Invalid Converter Type, use the AddressConverterType enum")
    }
}