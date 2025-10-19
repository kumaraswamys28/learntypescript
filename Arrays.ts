//  Array of strings
const superHeros: string[] = []; // same as Array<string>
superHeros.push("spiderman"); //  OK
// superHeros.push(123) //  Error: number not assignable to string

// ⚡ Array of numbers (generic style)
const heroPower: Array<number> = [];
heroPower.push(100); // ✅ OK

/*
 NOTES:
- `string[]` and `Array<string>` are equivalent.
- Use `Array<T>` when you’re working with complex generic types (like `Promise<string[]>`).
*/

//  Custom Type
type User = {
  name: string;
  isActive?: boolean; // optional property
};

//  Array of objects following the 'User' type
const allUsers: User[] = [];

allUsers.push({ name: "treset", isActive: true }); //  OK
allUsers.push({ name: "miles" });                  //  OK (isActive optional)

/*
 NOTES:
- `User[]` → array where every element must match the User type.
- Optional properties make objects flexible.
- Perfect for things like DB user lists, API responses, etc.
*/

export {};
