console.log("hello");

// Get the root element from the DOM
const root = document.getElementById("root");

// If root exists, apply some flex styling and set innerHTML

// ------------------------
// TypeScript class examples
// ------------------------

// Original commented out version (classic way)
/*
class User {
  private readonly id: number;
  email: string;
  name: string;
  city?: string;
  // private and also JS has #id
  constructor(id: number, email: string, name: string) {
    this.id = id;
    this.email = email;
    this.name = name;
  }
}
*/

// Cleaner TS shorthand version
class User {
  public city?: string; // optional property (can be undefined)
  // Constructor shorthand: TS will automatically create class properties from parameters
  constructor(
    private readonly id: number, // readonly = cannot be modified outside class
    public email: string,        // public = default, accessible outside
    public name: string ,
      private coursecount?: number
         // public
  ){
    // No need to manually assign 'this.id = id' etc.
    // TS does it automatically
  }

  // Optional: method to get the readonly id if needed
  getId(): number {
    return this.id; // can access readonly private inside class
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }


  get courseCount(): number | never{
    if(this.coursecount){
    return this.coursecount;
    }
    throw new Error("Course count not set");
  }

  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this.coursecount = courseNum;
  }


}



class subusr extends User{
    //child class can not inherit private variable so we use isFamily
    isFamily:boolean=true;
    changecoursecount(num:number){
        this.courseCount=num;
}
}



















// Create an instance
const kumar = new subusr(1, "kumar@2sdf8003", "kumar");
// kumar.courseCount=10;
kumar.city = "delhi"; // optional property can be added after creation
kumar.changecoursecount(10);

// Update DOM with user info if root exists
root
  ? (root.innerHTML = `<h1>${kumar.getId()}test</h1><br><h1>User is ${kumar.name}<br>Email is ${kumar.email}<br>City is ${kumar.city}</h1>
  <br><p>${kumar.getAppleEmail}</p>
  <br><p>${kumar.courseCount}</p>`)
  : console.log("root not found");

// ------------------------
// Extra knowledge / tips
// ------------------------

// 1. Optional chaining:
// You could replace 'root ? ...' with `root?.innerHTML = "..."`
// Example: root?.innerHTML = `<h1>something</h1>`;

// 2. Readonly vs private:
//   - readonly: cannot modify outside class
//   - private: cannot access outside class
//   - combining both (private readonly) = internal read-only property

// 3. Flexbox quick tips:
//   - display: flex makes children inline-flex by default
//   - alignItems centers vertically
//   - justifyContent centers horizontally

// 4. Template literals:
//   - Using backticks ` allows multi-line strings and variable interpolation
//   - Example: `${kumar.name}` injects variable inside string

// 5. Constructor shorthand in TS:
//   - Any parameter prefixed with `public/private/protected/readonly` automatically becomes a class property
//   - Saves boilerplate of assigning each property manually
