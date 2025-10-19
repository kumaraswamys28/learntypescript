// Abstract class for taking photos
// Unlike interfaces, abstract classes can have both implemented methods and abstract methods
abstract class TakePhoto {

    constructor(
        public cameraMode: string, // e.g., "portrait", "landscape"
        public filter: string      // e.g., "sepia", "black-white"
    ) { }

    // Abstract method: must be implemented by any derived class
    abstract getSepia(): void;

    // Regular method with default implementation
    getReelTime(): number {
        // some complex calculation (mocked here)
        return 8;
    }
}

// Instagram class extends abstract class TakePhoto
// Must implement all abstract methods from TakePhoto
class Instagram extends TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number // additional property specific to Instagram
    ) {
        super(cameraMode, filter); // call parent constructor
    }

    // Implementing abstract method
    getSepia(): void {
        console.log("sepia");
    }
}

// Create instance of Instagram
const test = new Instagram("portrait", "sepia", 5);
console.log(test);       // prints Instagram object with properties
test.getSepia();         // calls implemented abstract method
test.getReelTime();      // calls implemented method from abstract class

export {}

// ================= INTERVIEW NOTES =================

// 1. Abstract Class vs Interface:
//    - Interface: only defines "what" a class should do (method/property signatures), no implementation.
//    - Abstract class: can define "what" and also provide "how" (implementation).
//      You can have both abstract methods (must be implemented by child) and regular methods with logic.
//    - Use abstract class when you want to share code (common methods/properties) among multiple subclasses.
//    - Use interface when you just want to enforce a contract without dictating implementation details.

// 2. Example in this code:
//    - `getReelTime()` is implemented in abstract class, so any subclass automatically inherits it.
//    - `getSepia()` is abstract, so each subclass must define its own version.
//    - With interfaces, you would have to implement everything in each class; no default logic could be shared.

// 3. Key takeaway for interviews:
//    - Abstract class = partial implementation + enforced methods
//    - Interface = pure contract, can implement multiple interfaces (TypeScript allows multiple)  

