"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidURL = void 0;
const isValidURL = (url) => {
    try {
        const parsed = new URL(url);
        return ["http:", "https:", "ftp:"].includes(parsed.protocol);
    }
    catch (_) {
        return false;
    }
};
exports.isValidURL = isValidURL;
