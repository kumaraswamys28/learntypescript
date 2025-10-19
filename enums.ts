//  Enum — Named constants grouped together
enum SeatChoice {
  AISLE = 10,  // manually start at 10
  MIDDLE,      // auto-increments → 11
  WINDOW,      // 12
  FOURTH       // 13
}

const hcSeat = SeatChoice.FOURTH;
console.log(hcSeat); // 13

/*
 NOTES:
- Enums map friendly names (AISLE, MIDDLE...) to numeric or string values.
- If you set one value, the next ones auto-increment.
- Helps you write readable, maintainable code instead of raw constants.
*/

// ----------------------------
//  String Enum Example
// ----------------------------
enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT"
}

console.log(Direction.LEFT); // "LEFT"

/*
 When to use:
- Number enums → for compact, memory-friendly internal logic.
- String enums → for clarity in API responses, logs, or UI text.
*/

// ----------------------------
// ⚡ Const Enum (optimized)
// ----------------------------
const enum ResponseStatus {
  SUCCESS = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500
}

const status = ResponseStatus.SUCCESS; //  inlined by compiler
console.log(status);

/*
 NOTES:
- `const enum` removes runtime object creation.
- Faster + smaller JS output.
- But you can’t iterate or access it dynamically at runtime.
*/

export {};
