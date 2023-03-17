import {ValidateIP} from "../../dist/utils/services/Validator";
import {AddressType} from "../../dist/enums/AddressType.enum";

test("Validate IPv6: 2001:db8:3333:4444:5555:6666:7777:8888", () => {
    expect(ValidateIP(AddressType.IPv6, "2001:db8:3333:4444:5555:6666:7777:8888")).toBe(true)
})

test("Validate IPv6: 2001:db8:3333:4444:5555:6666:7777:8888:0", () => {
    expect(ValidateIP(AddressType.IPv6, "2001:db8:3333:4444:5555:6666:7777:8888:0")).toBe(false)
})