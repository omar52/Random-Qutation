// Api link
const api = 'https://api.quotable.io/random';

// accessing all elements
let qutation = document.querySelector("p");
let author = document.querySelector("h3");
let button = document.querySelector("button")

async function getQuot(){
    let response= await fetch(api);
    let data = await response.json();
    console.log(data);
    qutation.innerText=`" ${data.content} "`;
    author.innerHTML=`<i class="fa-solid fa-wand-magic-sparkles fa-fade"></i> ${data.author}`;
}

button.onclick=getQuot;
onload=getQuot;
