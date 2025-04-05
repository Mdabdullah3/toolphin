"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const formatDate = (date, format = "YYYY-MM-DD") => {
    const d = new Date(date);
    return format
        .replace(/YYYY/g, d.getFullYear().toString())
        .replace(/MM/g, (d.getMonth() + 1).toString().padStart(2, "0"))
        .replace(/DD/g, d.getDate().toString().padStart(2, "0"));
};
exports.formatDate = formatDate;
