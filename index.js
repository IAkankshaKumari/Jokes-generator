const btnEl= document.getElementById("btn");
const apiKey= "nnCe0GmUA3BIFxUbi6EUaQ==ELDqbguj66l2l7ms";
const jokeEl= document.getElementById("joke");
const options= {
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    }
};

const apiURL= "https://api.api-ninjas.com/v1/jokes?limit=1"

async function getJoke(){

    try {
        jokeEl.innerText="Updating...";
        btnEl.disable= true;
        btnEl.innerText="Loading";
      const response=await fetch(apiURL, options)
      const data= await response.json();
      jokeEl.innerText= data[0].joke;
      btnEl.disabled=false;
      btnEl.innerText= "Tell me a joke";
    
        
    } catch (error) {
        jokeEl.innerText="An error happened, Try again later";
        btnEl.disabled= false;
        btnEl.innerText= "Tell me a joke";
    }
   
}

btnEl.addEventListener("click", getJoke);

