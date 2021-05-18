var btntranslate = document.querySelector("#translate");
btntranslate.addEventListener("click",clickEventHandler);

var translateinput = document.querySelector("#txtinput");

var translateoutput = document.querySelector("#translate-box");

var url = "https://api.funtranslations.com/translate/minion.json"
//var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function clickEventHandler()
{
    
    console.log("input:",translateinput.value);
    var input = translateinput.value;
    var finalURL = constuctURL(input);
    console.log(finalURL);
    console.log("button is clicked !");
        fetch(finalURL)
            .then(response=>response.json())
            .then(json=>{
                translateoutput.innerText = json.contents.translated;
            })
        
            .catch(()=>alert("something went wrong!"))
}

function constuctURL(inputText)
{
    var encodedURL = encodeURI(inputText) ;
    var actualURl = url + "?text=" + encodedURL;
    return actualURl;
}



