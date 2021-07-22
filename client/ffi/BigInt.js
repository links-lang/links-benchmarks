
function bigIntDiv(x, y) {
    return (BigInt(x) / BigInt(y));
}

function bigIntAdd(x, y) {
    return (BigInt(x) + BigInt(y));
}

function bigIntMult(x, y) {
    return (BigInt(x) * BigInt(y));
}

var div = LINKS.kify(bigIntDiv);
var add = LINKS.kify(bigIntAdd);
var mult = LINKS.kify(bigIntMult);