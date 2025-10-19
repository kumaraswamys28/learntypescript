in tsconfig.json "outDir": "./dist",

tsc -w 

set coursename(nume:number){
    this.coursenumber=nume
}
get coursename():number{
    return this.coursenumber
}


obj.coursename=456 set
console.log(obj.coursename) get 


public private protected readonly
// -----------------------------------
// Access Modifiers
// -----------------------------------
//
// public = accessible everywhere
// private = accessible only within class
// protected = accessible within class and subclasses
// readonly = can be read but not modified after initialization
//
// By default, properties and methods are public
class User {
    // Properties
    public name: string; // accessible everywhere
    private email: string; // accessible only within class
    protected city: string; // accessible within class and subclasses
    readonly id: number; // can be read but not modified after initialization

    // Constructor      
    constructor(id: number, email: string, name: string) {
        this.id = id;
        this.email = email;
        this.name = name;
    }}

class User{
    private city?:string
    constructor(private readonlyid:number,public email:string,public name :string ){
    }
    get getid():number{
        return this.id;
    }
    set setcity(city:string){
        this.city=city;
    } 
    get getcity():string | undefined{
        return this.city;
    }    
}