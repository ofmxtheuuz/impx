import {GetIPAddressAsync} from "../../src/utils/services/GetIPAddress";
import {AddressType} from "../../src/enums/AddressType.enum";

GetIPAddressAsync(AddressType.IPv6).then(result => {
    console.log(result)
})

// fe80::9ef1:28c7:6411:dc87