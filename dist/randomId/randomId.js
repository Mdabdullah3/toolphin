"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomId = void 0;
const generateRandomId = (length = 8) => {
    return Math.random().toString(36).substr(2, length);
};
exports.generateRandomId = generateRandomId;
