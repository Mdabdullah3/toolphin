import {
    formatDate,
    validateEmail,
    isEmpty,
    generateRandomId,
    isValidURL,
    cleanObject,
    maskEmail,
    timeAgo,
} from 'toolphin';

// Testing formatDate
console.log("🗓️ formatDate:", formatDate(new Date())); // Default format
console.log("🗓️ formatDate (custom):", formatDate("2023-05-20", "DD/MM/YYYY"));

// Testing validateEmail
console.log("📧 validateEmail (valid):", validateEmail("botor@example.com")); // true
console.log("📧 validateEmail (invalid):", validateEmail("invalid@com")); // false

// Testing isEmpty
console.log("📭 isEmpty (array):", isEmpty([])); // true
console.log("📭 isEmpty (object):", isEmpty({})); // true
console.log("📭 isEmpty (string):", isEmpty("")); // true
console.log("📭 isEmpty (value):", isEmpty("hello")); // false

// Testing generateRandomId
console.log("🆔 generateRandomId:", generateRandomId()); // e.g., 'a1b2c3...'

// Testing isValidURL
console.log("🔗 isValidURL (valid):", isValidURL("https://google.com")); // true
console.log("🔗 isValidURL (invalid):", isValidURL("htp:/bad_url")) // false
// Testing cleanObject
const messyObject = {
    name: "Abdullah",
    age: null,
    location: undefined,
    email: "abdullah@example.com",
};
console.log("🧼 cleanObject:", cleanObject(messyObject));
// Output: { name: "Abdullah", email: "abdullah@example.com" }

// Testing maskEmail
console.log("🎭 maskEmail:", maskEmail("abdullah@example.com"));
// Output: a*******@example.com

// Testing timeAgo
const pastDate = new Date(Date.now() - 3 * 60 * 60 * 1000); // 3 hours ago
console.log("⏳ timeAgo:", timeAgo(pastDate));
// Output: "3 hours ago"
