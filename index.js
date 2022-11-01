const url ="https://api.adviceslip.com/advice";


var titleElement = document.getElementById("title");
var adviceElement = document.getElementById("advice");


async function getAdvice(){
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);

    titleElement.innerHTML=`ADVICE #${data.slip.id}`;
    adviceElement.innerHTML=`"${data.slip.advice}"`;

}
getAdvice()