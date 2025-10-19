// Interface for taking photos
// Defines a blueprint for any class that wants to have photo-taking capabilities
interface TakePhoto {
    cameraMode: string; // e.g., "portrait", "landscape", "night"
    filter: string;     // e.g., "sepia", "black-white", "vivid"
    burst: number;      // number of pictures in burst mode
}

// Interface for creating a story
// Any class implementing this must have createStory method
interface Story extends TakePhoto{
    createStory(): void; // method to create a story
}

// Class Instagram implements TakePhoto
// Can take photos but does NOT have story functionality by default
class Instagram implements TakePhoto {

    // constructor shorthand: automatically creates & assigns properties
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){}

    // NOTE: Instagram class currently does NOT implement Story interface,
    // so it cannot call createStory method
}

// Class Youtube implements both TakePhoto and Story
// Can take photos AND create stories
class Youtube implements  Story {

    // constructor shorthand
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string // extra property specific to Youtube, maybe for short videos
    ){}
    
    // Implementation of Story interface
    createStory(): void {
        console.log("story created"); // mock implementation
    }

}

const youuser=new Youtube("portrait","sepia",5,"short")
youuser.createStory()
console.log(youuser);



// Export statement to treat this file as a module
export{}

// ================= EXTRA NOTES FOR INTERVIEW =================
// 1. Interfaces:
//    - They define contracts for classes.
//    - Classes can implement multiple interfaces (TS supports multiple, unlike classes inheritance which is single).  
// 2. Public constructor shorthand:
//    - `public cameraMode: string` in constructor automatically creates and assigns the property.  
// 3. Why use interfaces over classes here:
//    - Interfaces enforce structure without implementation. Classes can implement multiple interfaces.  
// 4. Difference between Instagram & Youtube in this code:
//    - Instagram: only photo-taking capabilities (TakePhoto)
//    - Youtube: photo-taking + story-making capabilities (TakePhoto + Story)  
// 5. Quick trick:
//    - If you try `new Instagram("portrait","sepia",5).createStory()` → TS will throw an error because Instagram doesn’t implement Story  
// 6. Possible interview question hint:
//    - "Explain how you can achieve multiple inheritance in TypeScript" → Answer: Use multiple interfaces, as shown with `Youtube`.  

