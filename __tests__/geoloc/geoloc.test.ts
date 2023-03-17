import {getIPLocation} from "../../dist/utils/services/Geoloc";

test("Geoloc corret: 1.2.3.4", () => {
    getIPLocation("1.2.3.4").then(data => {
        const result: any = data
        const loc = expect(result.city)
        loc.toBe("Brisbane")
    })
})

test("Geoloc incorret: 1.2.3.4.5", () => {
    getIPLocation("1.2.3.4.5").then(data => {
        const loc = expect(data)
        loc.toBe(false)
    })
})

