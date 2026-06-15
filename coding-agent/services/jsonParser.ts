export function tryParseToolCall(
  text: string
) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}