function stringLen(string) {
    if(string.length > 10 ) {
        throw new Error("String is too Long");
    } 
    else if(string.length < 1) {
        throw new Error("String is too short");
    }

    return string.length;
}

module.exports = stringLen;