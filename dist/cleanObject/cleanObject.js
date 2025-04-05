"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanObject = void 0;
const cleanObject = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
        const value = obj[key];
        if (value !== null && value !== undefined) {
            acc[key] = value;
        }
        return acc;
    }, {});
};
exports.cleanObject = cleanObject;
