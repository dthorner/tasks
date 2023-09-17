/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const nums = [...numbers];
    if (nums.length < 1) {
        return [];
    }
    return [nums[0], nums[nums.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const nums = numbers.map((current: number): number => {
        return current * 3;
    });
    return nums;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const nums = numbers.map((current: string): number => {
        return Number.isNaN(+current) ? 0 : +current;
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
    const ams = amounts.map((current: string): string => {
        return current.replaceAll("$", "");
    });
    return stringsToIntegers(ams);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQues = messages.filter((s: string): boolean => {
        return !s.endsWith("?");
    });
    const shout = noQues.map((str: string): string => {
        return str.endsWith("!") ? str.toUpperCase() : str;
    });
    return shout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const ltf = words.filter((s: string): boolean => {
        return s.length < 4;
    });
    return ltf.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const c = [...colors];
    if (c.length == 0) {
        return true;
    }
    return c.every((s: string): boolean => {
        return s == "red" || s == "blue" || s == "green";
    });
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const strings = addends.map((n: number): string => {
        return n.toString();
    });
    const total = addends.reduce(
        (currTotal: number, currVal: number): number => currTotal + currVal,
        0
    );
    const strRep = strings.join("+");
    return total.toString() + "=" + (strRep == "" ? "0" : strRep);
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
    /* const vals = [...values];
    const index = vals.findIndex((num: number): boolean => num < 0);
    const sum = [...vals];
    sum.splice(index, sum.length - index);
    const total = sum.reduce(
        (total: number, curr: number) => (total += curr),
        0
    );
    sum.splice(index, 0, total);
    */
    const vals = [...values];
    const index = vals.findIndex((num: number): boolean => num < 0);
    if (index == -1) {
        const t = vals.reduce((tot: number, cur: number) => (tot += cur), 0);
        vals.push(t);
        return vals;
    }
    const subset = [...vals];
    subset.splice(index, subset.length - index);
    const total = subset.reduce((t: number, c: number) => (t += c), 0);
    vals.splice(index + 1, 0, total);
    return vals;
}
