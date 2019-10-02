let fs = require('fs');

let { group,name,data } = require("./TipaFrontUser18");
// let { group,name,data } = require("./TipaFrontUser20");
let func = require("./SortStudents");

fs.mkdir('./Group1800', ()=> console.log("Done18"));
fs.mkdir('./Group2000', ()=> console.log("Done20"));

let sortIt = func(group, name, data);