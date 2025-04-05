"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskEmail = void 0;
const maskEmail = (email) => {
    const [user, domain] = email.split("@");
    const maskedUser = user.slice(0, 2) + "*".repeat(Math.max(0, user.length - 2));
    return `${maskedUser}@${domain}`;
};
exports.maskEmail = maskEmail;
