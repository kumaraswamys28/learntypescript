//  Type with optional & readonly properties
type User = {
  readonly _id: string;  // can only be set once, not reassigned later
  name: string;
  isActive: boolean;
  email?: string;         // optional property (can be undefined)
};

// Creating an object using the 'User' type
let user: User = {
  _id: "123",
  name: "test",
  isActive: true,
  email: "h3js"
};

//  Allowed — updating mutable fields
user.email = "SDf"; // OK

//  Not allowed — '_id' is readonly
// user._id = "dsf0"; //  Error: Cannot assign to '_id' because it is a read-only property

/*
 NOTES:
- `readonly` = prevents modification after initialization.
- `?` = optional key; can be missing.
- Always prefer `readonly` for IDs, tokens, or constants that should never change.
*/

// ----------------------------------------------------
//  Type Composition (Intersection types using &)
// ----------------------------------------------------
type CardNumber = {
  numb: number;
};

type CardDate = {
  date: string;
};

// Combine multiple types + extend inline
type CardDetails = CardNumber & CardDate & {
  cvv: number;
};

//  Object following the composed type
let cards: CardDetails = {
  numb: 1,
  date: "S",
  cvv: 1
};

console.log(cards);

/*
 NOTES:
- `&` merges multiple types → all properties become required.
- Great for combining small reusable types.
- Similar to “interfaces merging”, but with more control.
*/

// exporting to mark this as a module (avoid global scope conflicts)
export {};
