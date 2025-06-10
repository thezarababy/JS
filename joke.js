const getJokeBtn=document.getElementById("getJokeBtn");
const joke = document.getElementById("joke");

async function fetchJoke(){
    try{
joke.textContent= "Loading joke...";
 const response = await fetch("https://icanhazdadjoke.com/", {
   headers: {
     Accept: "application/json"
   }
 });
 const data = await response.json();
 joke.textContent = data.joke;
    }catch(error){
        joke.textContent= "Oops! Something went wrong. Please try again later.";
        console.log(error);
    }

}

getJokeBtn.addEventListener("click",fetchJoke)