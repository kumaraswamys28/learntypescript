"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Class Instagram implements TakePhoto
// Can take photos but does NOT have story functionality by default
var Instagram = /** @class */ (function () {
    // constructor shorthand: automatically creates & assigns properties
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
// Class Youtube implements both TakePhoto and Story
// Can take photos AND create stories
var Youtube = /** @class */ (function () {
    // constructor shorthand
    function Youtube(cameraMode, filter, burst, short // extra property specific to Youtube, maybe for short videos
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    // Implementation of Story interface
    Youtube.prototype.createStory = function () {
        console.log("story created"); // mock implementation
    };
    return Youtube;
}());
var youuser = new Youtube("portrait", "sepia", 5, "short");
youuser.createStory();
console.log(youuser);
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
