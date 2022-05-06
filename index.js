module.exports.searchCode = function (countryCode, language) {
    let lang;
    let country;

    //check if language is available
    try {
        lang = require('./languages/' + language + '.json');
    } catch {
        lang = require('./languages/en.json');
    }

    //search for country code
    country = lang.find(country => country.code === countryCode.toUpperCase());
    if (country) {
        return country;
    }

    //fallback if country is not found in that language
    lang = require('./languages/en.json');
    country = lang.find(country => country.code === countryCode.toUpperCase());
    if (country) {
        return country;
    } else {
        return null;
    }

}