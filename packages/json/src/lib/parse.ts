/**
 * JSON Reviver function that prevents prototype and constructor pollution.
 */
function stripForbiddenProperties(
  key: string,
  value: unknown,
  reviver?: (this: unknown, key: string, value: unknown) => unknown
): unknown {
  if (key === '__proto__' || key === 'constructor') {
    return;
  }

  return typeof reviver === 'function' ? reviver(key, value) : value;
}

/**
 * Converts a JavaScript Object Notation (JSON) string into an object.
 *
 * @param text A valid JSON string.
 * @param reviver A function that transforms the results. This function is called for each member of the object.
 * If a member contains nested objects, the nested objects are transformed before the parent object is.
 * @returns Parsed object from the JSON string.
 * @throws {SyntaxError} If text is not valid JSON.
 */
export function parse(text: string, reviver?: (this: unknown, key: string, value: unknown) => unknown): unknown {
  return JSON.parse(text, (key, value) => stripForbiddenProperties(key, value, reviver));
}
