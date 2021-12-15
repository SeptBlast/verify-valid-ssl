const { startsWith } = require("ramda");

const validator = require("./validator");

const toExport = {};

Object.keys(validator).forEach((fnName) => {
    if (!startsWith("validate", fnName)) {
        throw Error("Validator function name must start with validate");
    }

    const fn = validator[fnName];
    toExport[fnName] = validator[fnName];

    const isFnName = fnName.replace("validate", "isValid");
    toExport[isFnName] = async (...args) => {
        try {
            await fn(...args);
            return true;
        } catch (err) {
            return false;
        }
    };
});

module.exports = toExport;
