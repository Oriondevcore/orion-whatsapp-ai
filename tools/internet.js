import fetch from "node-fetch";

export async function searchInternet(query){

const url =
`https://api.duckduckgo.com/?q=${query}&format=json`;

const res = await fetch(url);

return await res.json();

}