import fs from "fs";
import path from "path";

export function searchKnowledge(query) {

const files = fs.readdirSync("./knowledge/hotel");

let content = "";

for(const file of files){

content += fs.readFileSync(
`./knowledge/hotel/${file}`,
"utf8"
);

}

return content;

}