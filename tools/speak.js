import { execSync } from "child_process";

export function speak(text){

execSync(`voicebox speak "${text}"`);

}