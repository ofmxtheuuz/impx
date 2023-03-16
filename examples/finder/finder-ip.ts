import { getLoc } from "../../src/utils/services/Geoloc";

getLoc("8.8.8.8").then(result => {
    console.log(result)
})

getLoc("1.2.3.4").then(result => {
    console.log(result)
})

/*

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

 */