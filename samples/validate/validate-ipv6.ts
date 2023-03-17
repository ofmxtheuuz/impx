import {ValidateIP} from "../../src/utils/services/Validator";
import {AddressType} from "../../src/enums/AddressType.enum";

console.log(ValidateIP(AddressType.IPv6, "2804:30c:d71:4000:5169:6e5b:8554:d60b"))
// true

console.log(ValidateIP(AddressType.IPv6, "fe80::9ef1:28c7:6411:dc87:213:423"))
// false