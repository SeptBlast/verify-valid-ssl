# Verify valid SSL Certs

[![npm version](https://badge.fury.io/js/@imdevesh%2Fverify-valid-ssl.svg)](https://badge.fury.io/js/@imdevesh%2Fverify-valid-ssl)

This module is a validator for SSL Certificates using the [PEM node module](https://www.npmjs.com/package/pem). You can validate SSL Keys, SSL Certificates, SSL Certificate Domains, SSL Certificate Bundles, etc.

-   [Installation](#installation)
-   [API Documentation](#api-documentation)
    -   [validateSSL](#validate-ssl)
    -   [validateSSLCert](#validate-ssl-cert)
    -   [validateSSLKey](#validate-ssl-key)
    -   [validateCertBundle](#validate-cert-bundle)
    -   [validateCertKeyPair](#validate-cert-key-pair)
    -   [validateCertToDomain](#validate-cert-to-domain)
    -   [isValid Functions](#isvalid-functions)
-   [License](#license)

## Installation

```bash
npm i @imdevesh/verify-valid-ssl
```

or

```bash
yarn add @imdevesh/verify-valid-ssl
```

## API Documentation

All of these functions will throw an error if something is invalid, except the [`isValid functions`](#isvalid-functions), which will return `true` or `false`.

### Validate SSL

```javascript
const { validateSSL } = require("@imdevesh/verify-valid-ssl");

await validateSSL(cert, options);
```

| Option             | Type    | Default | Description                                                                                                                                                       |
| :----------------- | :------ | ------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| skipDateValidation | Boolean | false   | Skip verifying the [certificate's](https://en.wikipedia.org/wiki/Public_key_certificate) and/or bundle's validity period.                                         |
| key                | String  |         | When given, validates that the key and certificate are a pair.                                                                                                    |
| domain             | String  |         | When given, verifies the certificate is valid for this domain. e.g. `'github.com'`                                                                                |
| bundle             | String  |         | When given, verifies the [certificate bundle](https://www.namecheap.com/support/knowledgebase/article.aspx/986/69/what-is-ca-bundle) and certificate go together. |

### Validate SSL Cert

This function validates that the certificate is an SSL certificate and checks the validity period.

```javascript
const { validateSSLCert } = require("@imdevesh/verify-valid-ssl");
await validateSSLCert(cert, options);
```

| Option             | Type    | Default | Description                                             |
| :----------------- | :------ | ------- | :------------------------------------------------------ |
| skipDateValidation | Boolean | false   | Skip verifying the given certificate's validity period. |

### Validate SSL Key

This function validates that the certificate is an SSL certificate and checks the validity period.

```javascript
const { validateSSLKey } = require("@imdevesh/verify-valid-ssl");
await validateSSLKey(key);
```

### Validate Cert Bundle

This function validates that the certificate and the bundle are certificates, and ensures that the bundle and certificate go together.

```javascript
const { validateCertBundle } = require("@imdevesh/verify-valid-ssl";
await validateCertBundle(cert, bundle, options);
```

| Option             | Type    | Default | Description                                                    |
| :----------------- | :------ | ------- | :------------------------------------------------------------- |
| skipDateValidation | Boolean | false   | Skip verifying the certificate's and bundle's validity period. |

### Validate Cert Key Pair

This function validates that the given certificate and key are a matching pair.

```javascript
const { validateCertKeyPair } = require("@imdevesh/verify-valid-ssl");
await validateCertKeyPair(cert, key, options);
```

| Option             | Type    | Default | Description                                             |
| :----------------- | :------ | ------- | :------------------------------------------------------ |
| skipDateValidation | Boolean | false   | Skip verifying the given certificate's validity period. |

### Validate Cert To Domain

This function validates the given certificate and that it matches the given domain.

```javascript
const { validateCertToDomain } = require("@imdevesh/verify-valid-ssl");
await validateCertToDomain(cert, domain, options);
```

| Option             | Type    | Default | Description                                             |
| :----------------- | :------ | ------- | :------------------------------------------------------ |
| skipDateValidation | Boolean | false   | Skip verifying the given certificate's validity period. |

### IsValid Functions

Each of the functions listed above (validateSSL, validateSSLCert, etc.) has a counterpart that will not throw any errors but will return `true` when valid and `false` when not valid. All arguments and options are listed above are valid.

| Original Function Name | Predicate Function Name |
| :--------------------- | :---------------------- |
| validateSSL            | isValidSSL              |
| validateSSLCert        | isValidSSLCert          |
| validateSSLKey         | isValidSSLKey           |
| validateCertBundle     | isValidCertBundle       |
| validateCertKeyPair    | isValidCertKeyPair      |
| validateCertToDomain   | isValidCertToDomain     |

<br/>

```javascript
const { isValidSSL } = require("@imdevesh/verify-valid-ssl");
if (!(await isValidSSL(cert))) {
    return { message: "Sorry, the certificate supplied is not valid." };
}
```

## License

The module is available as open source under the terms of the [Apache v2.0](./LICENSE).
