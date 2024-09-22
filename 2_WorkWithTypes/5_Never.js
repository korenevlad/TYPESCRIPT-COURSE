"use strict";
// 5.Never
function throwError(message) {
    throw new Error(message);
}
function loop() {
    while (true) { }
}
function rec() {
    return rec();
}
