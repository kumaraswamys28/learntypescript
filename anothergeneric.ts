function another<T, U>(valOne: T, valTwo: U extends String ): object {
    return {
        valOne,
        valTwo
    }
}
another(3,"4");
 4:05:58