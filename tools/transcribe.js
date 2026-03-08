import { execSync } from "child_process";

export function transcribe(audioFile){

const result = execSync(
`whisper ${audioFile} --model small`
);

return result.toString();

}