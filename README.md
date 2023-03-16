# Impx 😎

A simple library for you to work with IPv4 and IPv6 in a simple way...

## Features
<ul>
    <li>
        IPv4 and IPv6 geolocation 
    </li>
    <li>
        IPv4 and IPv6 validator
    </li>
    <li>
        IPv4 and IPv6 converter (hexadecimal, binary, decimal)
    </li>
    <li>
        Find computer's IPv4 and IPv6
    </li>
</ul>

## How to use
### Geolocation example
This function allows you to obtain geographic information from an IP through it.

```ts
import { getIPLocation } from "impx";

getIPLocation("8.8.8.8").then(result => {
    console.log(result)
})
```

and will return:
```ts
{
    ip: '8.8.8.8',
    network: '8.8.8.0/24',
    version: 'IPv4',
    city: 'Mountain View',
    region: 'California',
    region_code: 'CA',
    country: 'US',
    country_name: 'United States',
    country_code: 'US',
    country_code_iso3: 'USA',
    country_capital: 'Washington',
    country_tld: '.us',
    continent_code: 'NA',
    in_eu: false,
    postal: '94043',
    latitude: 37.42301,
    longitude: -122.083352,
    timezone: 'America/Los_Angeles',
    utc_offset: '-0700',
    country_calling_code: '+1',
    currency: 'USD',
    currency_name: 'Dollar',
    languages: 'en-US,es-US,haw,fr',
    country_area: 9629091,
    country_population: 327167434,
    asn: 'AS15169',
    org: 'GOOGLE'
}
```

### Get computer's IPv4 and IPv6
````ts
import {GetIPAddressAsync} from "impx";
import {AddressType} from "impx";

const ipv4: string = GetIPAddressAsync(AddressType.IPv4)
// 192.168.1.17

const ipv6: string = GetIPAddressAsync(AddressType.IPv6)
// fe80::9ef1:28c7:6411:dc87
````
### Validate
````ts
import {ValidateIP} from "impx";
import {AddressType} from "impx";

console.log(ValidateIP(AddressType.IPv4, "0.0.0.0"))
// true

console.log(ValidateIP(AddressType.IPv6, "0.0.0.0"))
// false
````

### Converter
````ts
import {Converter} from "impx";
import {AddressConverterType} from "impx";

console.log(Converter(AddressConverterType.Binary, "0.0.1.1"))
````