# 🛠️ toolphin

A collection of commonly used utility functions for JavaScript/TypeScript projects — packaged and ready to supercharge your development experience.

[![npm version](https://badge.fury.io/js/toolphin.svg)](https://badge.fury.io/js/toolphin)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## ✨ Features

- 📅 Date formatting
- 📧 Email masking and validation
- 🧹 Object cleaning
- 🆔 Random ID generation
- 🔗 URL validation
- 📭 Empty value detection
- ⏳ Relative time calculation

---

## 📦 Installation

```bash
npm install toolphin
# or
yarn add toolphin

```

## 📚 Usage

```
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

```

## 🧰 Utilities

### formatDate(date: Date | string, format: string = "YYYY-MM-DD"): string

Formats a date string or object into a custom format.

```ts
formatDate("2023-05-20", "DD/MM/YYYY"); // "20/05/2023"
```

### validateEmail(email: string): boolean

Checks if an email is valid.

```ts
validateEmail("user@example.com"); // true
```

### isEmpty(value: any): boolean

Returns true if the value is null, empty string, empty object, or empty array.

```ts
isEmpty(""); // true
isEmpty({}); // true
isEmpty(["hi"]); // false
```

### generateRandomId(length: number = 8): string

Generates a random alphanumeric ID.

```ts
generateRandomId(); // "x9a2bc1d"
gerateRandomId(10); // "32sdf323423"
```

### isValidURL(url: string): boolean

Checks if a URL is valid.

```ts
isValidURL("https://example.com"); // true
isValidURL("hts://example.com"); // false
```

### cleanObject(obj: object): object

Removes null and undefined values from an object.

```ts
cleanObject({ a: 1, b: undefined, c: null, d: 2 }); // { a: 1, d:2 }
```

### maskEmail(email: string): string

Hides the email address by replacing the first 3 characters with asterisks.

```ts
maskEmail("abdullah@example.com"); 
// ab******@example.com
```

### timeAgo(date: Date | string): string
Returns a relative time string from a past date.

```ts
timeAgo("2025-04-05T09:00:00"); 
// e.g. "7 hours ago"
```

## 🧑‍💻 Author 

- Md Abdullah  (mdabdullah.dev@gmail.com)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

