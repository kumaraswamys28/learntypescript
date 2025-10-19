// ===============================================
//  INTERFACE BASICS IN TYPESCRIPT
// ===============================================

//  'interface' defines the *shape* or *structure* of an object.
// It can describe properties, methods, and even optional behavior.

interface User {
  readonly _id: string;   //  can't be modified after creation
  name: string;           // required string field
  email: string;          // required string field
  userId: number;         // required number field

  googleid?: string;      // optional property → may or may not exist

  //  METHOD SIGNATURES
  startTrail(): string;   // required method returning string
  // Optional method version (only if you want to allow missing implementations)
  // startTrail?: () => string;

  getCoupon(couponName: string, value: number): number; // method with params + return type
}

// ===============================================
//  IMPLEMENTING AN INTERFACE
// ===============================================

const normalUser: User = {
  _id: "123",            //  readonly, so can only be set here
  name: "Kumar",
  githubtoken:"token",
  email: "kumar@example.com",
  userId: 101,

  startTrail: () => {
    return "Trial started!";
  },

  getCoupon: (couponName: string, value: number): number => {
    console.log(`Applying coupon: ${couponName}, value: ${value}`);
    return value;
  }
};

//  Trying to reassign readonly property → Error
// normalUser._id = "456"; //  Cannot assign to '_id' because it is a read-only property

/*
NOTES:
- `readonly` prevents modification after initialization.
- `?` marks properties or methods as optional.
- Interfaces help enforce structure in objects (especially useful for APIs or models).
- You can define method signatures directly inside interfaces.
- Function implementations inside objects must match those signatures exactly.
*/

// ===============================================
//  INTERFACE EXTENSION (LIKE INHERITANCE)
// ===============================================

interface Admin extends User {
  role: "admin" | "superadmin";
}

const adminUser: Admin = {
  _id: "999",
  name: "Hitesh",
  email: "hitesh@domain.com",
  userId: 999,
  role: "superadmin",
  startTrail: () => "Admin trial started!",
  getCoupon: (code, value) => value * 2
};
console.log(adminUser);

/*
 NOTES:
- Interfaces can *extend* other interfaces — like inheritance.
- Useful for role-based models, layered APIs, or modular designs.
*/

// ===============================================
//  ADVANCED TIP: Interface vs Type
// ===============================================
/*
interface — extendable, merges declarations
type — can do unions, intersections, primitives, etc.

 When to use:
- Use 'interface' for object shapes, models, and classes.
- Use 'type' for unions/intersections or when mixing primitives.

Example:
type CouponResponse = string | number;
*/

// Export to make this a module
export {};

//reopening of the interface
interface User{
    githubtoken?:string
}
