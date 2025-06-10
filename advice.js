const adviceBtn= document.getElementById('adviceBtn');
const advice = document.getElementById('advice');

async function getAdvice(){
//     try{
  advice.textContent= "give me a second...";
  fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data =>{
    advice.textContent = data.slip.advice;
  })
  .catch(error =>{
    advice.textContent= "Try again later"
  });

//     const response = await fetch("https://api.adviceslip.com/advice",{
//         headers: {
//             Accept: "application/json"
//         }
//     });
//     const data = await response.json();
//     advice.textContent = data.slip.advice;
//     }catch(error){
//         advice.textContent= "Try again later"
//         console.log(error);
//     }
   
   
}
adviceBtn.addEventListener("click", getAdvice)
