import {Converter} from "../../dist/utils/services/Converter";
import {AddressConverterType} from "../../dist/enums/AddressConverterType";

test("Conveter decimal IPv4: 0.0.0.0", () => {
    expect(Converter(AddressConverterType.Decimal, "0.0.0.0")).toBe("0.0.0.0")
})
