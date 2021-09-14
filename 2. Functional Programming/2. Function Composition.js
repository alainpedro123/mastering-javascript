// 2. FUNCTION COMPOSITION

let input = "    JavaScript ";
let output = "<p>" + input.trim() + "</p>"
console.log(output);

// With compostion
// 1) trim the string
const trim = string => string.trim();

// 2 convert the string to lower case
const lowerCase = string => string.toLowerCase();

// 3) wrap this string in a P tag
const wrapInPtag = string => `<p>${string}</p>`;

// composition
const result = wrapInPtag(lowerCase(trim(input)));
console.log(result)
const result2 = compose(wrapInPtag, lowerCase, trim); // the order is from right to left: 1) trim, 2)lowerCase, wrapInPtag,
console.log(result2);


// 2.1. FUNCTION COMPOSITION + LODASH

import { compose, pipe } from 'lodash/fp';

const result = wrapInPtag(lowerCase(trim(input)));
const result2 = compose(wrapInPtag, lowerCase, trim); // the order is from right to left: 1) trim, 2)lowerCase, wrapInPtag,
console.log(result2);

const result3 = pipe(trim, lowerCase, wrapInPtag); // the order is from right to left
console.log(result3);