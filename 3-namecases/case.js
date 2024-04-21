"use strict";
let personname = "samra NAWAZ";
console.log("lowercase:", personname.toLowerCase());
console.log("uppercase:", personname.toUpperCase());
console.log("titlecase:", personname.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "));
