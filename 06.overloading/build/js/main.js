"use strict";
// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
function saySomething(word) {
    if (typeof word === "string") {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join(" ");
    }
    throw new Error("unable to say something");
}
saySomething(["hello", "world"]);
