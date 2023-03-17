import {Converter} from "../../dist/utils/services/Converter";
import {AddressConverterType} from "../../dist/enums/AddressConverterType";

test("Conveter hexadecimal IPv4: 0.0.0.0", () => {
    expect(Converter(AddressConverterType.Hexadecimal, "0.0.0.0")).toBe("00:00:00:00")
})
