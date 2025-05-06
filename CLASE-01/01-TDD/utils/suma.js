export function suma(a, b) {
  // console.log("--->", a, b);
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error";
  }
  return a + b;
}

export function sumaPro(...args) {}
