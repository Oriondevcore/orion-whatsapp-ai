import fs from "fs";

export function saveNote(text){

fs.appendFileSync(
"./knowledge/personal/graham-notes.md",
"\n" + text
);

}