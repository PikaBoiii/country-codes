# Country Codes 🌍
find countries by their codes in multiple languages

Supported codes:  
* ISO 3166 (2 digits)

Supported languages:
* de - German
* en - English

# Installation
```js
npm install country-codes-multi-language
```
# Usage
```js
const lookup = require('country-codes-multi-language')

const code = 'CH'
const language = 'de'

const country = lookup.searchCode(code, language);
```

function will return either a null or an country object:
```js
{ name: 'Schweiz', code: 'CH' }
```
