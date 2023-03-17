import {ValidateIP} from "../../dist/utils/services/Validator";
import {AddressType} from "../../dist/enums/AddressType.enum";

test("Validate IPv4: 0.0.0.0", () => {
    expect(ValidateIP(AddressType.IPv4, "0.0.0.0")).toBe(true)
})

test("Validate IPv4: 0.0.0.0.0.0.0.0.0.0", () => {
    expect(ValidateIP(AddressType.IPv4, "0.0.0.0.0.0.0.0")).toBe(false)
})

