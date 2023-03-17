import {Converter} from "../../dist/utils/services/Converter";
import {AddressConverterType} from "../../dist/enums/AddressConverterType";

test("Conveter binary IPv4: 0.0.0.0", () => {
    expect(Converter(AddressConverterType.Binary, "0.0.0.0")).toBe("00000000.00000000.00000000.00000000")
})
