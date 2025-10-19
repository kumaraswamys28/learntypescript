function getid(id) {
    if (typeof id === "number") {
        return 1;
    }
    else {
        return "string";
    }
}
console.log(getid("12"));
