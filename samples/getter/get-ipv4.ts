import {GetIPAddressAsync} from "../../src/utils/services/GetIPAddress";
import {AddressType} from "../../src/enums/AddressType.enum";

GetIPAddressAsync(AddressType.IPv4).then(result => {
    console.log(result)
})

// 192.168.1.17