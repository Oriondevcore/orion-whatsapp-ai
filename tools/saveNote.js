import fs from "fs";

export function saveNote(note){

fs.appendFileSync(
"./knowledge/personal/graham-notes.md",
"\n" + note
);

}