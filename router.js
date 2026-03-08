export function route(message){

const text = message.toLowerCase();

if(
text.includes("room") ||
text.includes("booking") ||
text.includes("spa")
){
return "bolt";
}

return "mintaka";

}