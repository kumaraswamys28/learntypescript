//  Define a Type (a blueprint for user objects)
// this is also called as type aliases
type User = {
 readonly name: string,
  isPaid: boolean,
};
type id= number| string;

//  Example 1: Passing individual parameters (not using the type)
const createUser = (name: string, isPaid: boolean) => {
  console.log(name, isPaid);
};

createUser("hitesh", false); //  works fine but not type-safe for bigger data

// Example 2: Passing an object that follows the User type
const createUserObj = (user: User): void => {
  console.log(user.name, user.isPaid);
};

createUserObj({ name: "hitesh", isPaid: false }); //  cleaner + scales better

/*
NOTES:
 `type User` → creates a reusable structure for your data.
 First version = manual typing for each arg.
 Second version = destructuring + type reference → better readability.
 `:void` → means function doesn’t return anything.
 Use the object-style approach when your function needs multiple related fields.
*/

type Course={
    name:string,
    price:number
}

function createCourse({name,price}:Course):Course {
  return { name: "reactjs", price: 399 };
}
const h=createCourse({name:"reactjs",price:399})
