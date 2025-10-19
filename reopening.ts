// ===============================================
//  INTERFACE REOPENING (Declaration Merging)
// ===============================================

// Initial interface definition
interface User {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
}

//  Reopening the same interface (adds new fields!)
interface User {
  githubtoken: string;
}

//  Now the merged 'User' interface looks like this:
// interface User {
//   readonly _id: string;
//   name: string;
//   email: string;
//   isActive: boolean;
//   githubtoken: string;
// }

const newUser: User = {
  _id: "123",
  name: "Kumar",
  email: "kumar@example.com",
  isActive: true,
  githubtoken: "gh_123xyz"
};

console.log(newUser.githubtoken);

/*
 NOTES:
- When you declare an interface with the same name multiple times,
  TypeScript *merges* them into a single interface.
- This is called **declaration merging**.
- Great for adding new properties to third-party types
  (e.g., extending built-in `Window` or `Express.Request`).
*/

// ===============================================
// ⚡ Example: Extending built-in types via reopening
// ===============================================

// Example: adding custom field to the global Window object
interface Window {
  appVersion?: string;
}

// window.appVersion = "1.0.0"; //  works after merging

/*
 This technique is often used in:
- Adding custom fields to `Express.Request` in Node.js
- Augmenting libraries without editing their source
- Patching type definitions in third-party packages
*/

// ===============================================
//  Interface vs Type — Why reopening only works with Interface
// ===============================================
/*
- 'interface' supports declaration merging
- 'type' does NOT — redeclaring a type name causes an error

Example:
  interface A { x: number }
  interface A { y: number }   Merges to { x: number; y: number }

  type B = { x: number }
  type B = { y: number }       Error: Duplicate identifier 'B'
*/

export {};