/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    //checks array length to see if empty or not... then proceeds to get accquired result
    if (numbers.length === 0 || numbers === null || numbers.length === null) {
        return [];
    } else if (numbers.length !== 1) {
        return [numbers[0], numbers[numbers.length - 1]];
    } else {
        return [...numbers, ...numbers];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const num = numbers.map((x) => x * 3);
    return num;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const nums = numbers.map((num) => {
        const n = parseInt(<string>num, undefined);
        return Number.isNaN(+n) ? 0 : +n;
    });
    return nums;
}
/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const money = amounts.map((string: string): string =>
        string.includes("$") ? (string = string.slice(1)) : string
    );
    const noMoney = stringsToIntegers(money);
    return noMoney;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .map((message) => {
            //uses maps into recrusion
            if (message.endsWith("!")) {
                //checks if message string has !
                return message.toUpperCase();
            } else {
                return message;
            }
        })
        .filter((message) => !message.endsWith("?")); //filters out any message with ?
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((word) => word.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true; // Return true for an empty list
    }
    return colors.every((color) => ["red", "blue", "green"].includes(color));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((acc, currentValue) => acc + currentValue, 0);
    const numbersString = addends.join("+");
    const result = `${sum}=${numbersString}`;
    if (addends.length === 0) {
        return "0=0";
    }
    return result;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const result = values.reduce(
        (acc, num) => {
            if (num < 0 && !acc.foundNegative) {
                acc.foundNegative = true;
                acc.result.push(num, acc.sum);
            } else {
                acc.sum += num;
                acc.result.push(num);
            }
            return acc;
        },
        { sum: 0, foundNegative: false, result: [] as number[] }
    );

    if (!result.foundNegative) {
        result.result.push(result.sum);
    }

    return result.result;
}
//functions were not needed
function isEmptyArray(numbers: number[]) {
    throw new Error("Function not implemented.");
}

function firstElementOfAnArray(numbers: number[]): number {
    throw new Error("Function not implemented.");
}
