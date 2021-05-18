var btntranslate = document.querySelector("#translate");
btntranslate.addEventListener("click",clickEventHandler);

var translateinput = document.querySelector("#txtinput");

var translateoutput = document.querySelector("#translate-box");

var url = "https://api.funtranslations.com/translate/minion.json"

function clickEventHandler()
{
    console.log("button is clicked !");
    var input = translateinput.nodeValue;
    var finalURL = constuctURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response=>response.json)
        .then(json=>{
                translateoutput.innerText = json.contents.translated;
        })
        .catch(()=>alert("something went wrong!"))
}

function constuctURL(i)
{
    var encodeURL = url + "?text=" + i ;
    return encodeURL;
}



