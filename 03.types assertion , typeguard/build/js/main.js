"use strict";
// typeassert
// const bodyElement = document.querySelector("body") as HTMLBodyElement;
const bodyElement = document.querySelector("body");
bodyElement.innerText = "helo";
// typeguard
const bodyElement2 = document.querySelector("body");
if (bodyElement2) {
    bodyElement2.innerText = "helo2";
}
