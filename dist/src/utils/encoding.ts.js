export function string2Uint8Array(str) {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}
export function uint8Array2String(uint8Array) {
  const decoder = new TextDecoder();
  return decoder.decode(uint8Array);
}
