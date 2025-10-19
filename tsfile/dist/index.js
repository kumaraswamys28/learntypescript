console.log("hello");
const root = document.getElementById("root");
class User {
    id;
    email;
    name;
    coursecount;
    city;
    constructor(id, email, name, coursecount) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.coursecount = coursecount;
    }
    getId() {
        return this.id;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        if (this.coursecount) {
            return this.coursecount;
        }
        throw new Error("Course count not set");
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this.coursecount = courseNum;
    }
}
const kumar = new User(1, "kumar@2sdf8003", "kumar");
kumar.courseCount = 10;
kumar.city = "delhi";
root
    ? (root.innerHTML = `<h1>${kumar.getId()}test</h1><br><h1>User is ${kumar.name}<br>Email is ${kumar.email}<br>City is ${kumar.city}</h1>
  <br><p>${kumar.getAppleEmail}</p>
  <br><p>${kumar.courseCount}</p>`)
    : console.log("root not found");
