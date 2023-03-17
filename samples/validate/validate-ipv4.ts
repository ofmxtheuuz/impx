import {ValidateIP} from "../../src/utils/services/Validator";
import {AddressType} from "../../src/enums/AddressType.enum";

console.log(ValidateIP(AddressType.IPv4, "0.0.0.0"))
// true

console.log(ValidateIP(AddressType.IPv4, "0.0.0.0.0.0"))
// false