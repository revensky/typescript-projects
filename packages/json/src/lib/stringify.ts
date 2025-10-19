/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 *
 * @param value A JavaScript value, usually an object or array, to be converted.
 * @param replacer A function that transforms the results.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text
 * to make it easier to read.
 * @returns Stringified object.
 * @throws {TypeError} If a circular reference or a BigInt value is found.
 */
export function stringify(
  value: unknown,
  replacer?: (this: unknown, key: string, value: unknown) => unknown,
  space?: string | number
): string;

/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 *
 * @param value A JavaScript value, usually an object or array, to be converted.
 * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties
 * that will be stringified.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text
 * to make it easier to read.
 * @returns Stringified object.
 * @throws {TypeError} If a circular reference or a BigInt value is found.
 */
export function stringify(value: unknown, replacer?: (number | string)[] | null, space?: string | number): string;

/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 *
 * @param value A JavaScript value, usually an object or array, to be converted.
 * @param replacer A function that transforms the results or an array of strings and numbers that acts
 * as an approved list for selecting the object properties that will be stringified.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text
 * to make it easier to read.
 * @returns Stringified object.
 * @throws {TypeError} If a circular reference or a BigInt value is found.
 */
export function stringify(value: unknown, replacer?: unknown, space?: string | number): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return JSON.stringify(value, <any>replacer, space);
}
