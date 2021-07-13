document.addEventListener("click", function(event){
    if(!event.target.matches("#button"))return;
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then((response) => response.json())
    .then((data)=>renderJoke(data))
    .catch(()=>renderError);
});

function renderJoke(data){
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    setup.innerText=data.setup;
    punchline.innerText=data.punchline;
}

function renderError(){
    const error = document.getElementById("error");
    // const punchline = document.getElementById("punchline");
    error.innerText="There has been some error";
    // punchline.innerText=" ";
}