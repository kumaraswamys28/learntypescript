type pt=3.14;
function another<T extends pt, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}
another(3.14,32);
//  4:05:58