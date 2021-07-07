const finalPassword = document.querySelector(".result");
const copyButton =document.querySelector(".copy-btn");
const range = document.querySelector("#range");
const passwordLength = document.querySelector(".lengt-value");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const generateButton = document.querySelector(".btn-secondary");

const conteiner = document.querySelector(".result-conteiner");
const title = document.querySelector(".secondary-title");




range.oninput = function (){
    passwordLength.innerHTML = this.value;      //password length
}


//getPasswordLogic
generateButton.addEventListener('click', () => {
    conteiner.style.boxShadow = "none";
    if(uppercase.checked || lowercase.checked || numbers.checked || symbols.checked){
        title.style.color = "rgb(83, 86, 108)";

        let result = [];

        if(uppercase.checked){
            result = result.concat(getRandUpperArr(parseInt(range.value)));
        }
        if(lowercase.checked){
            result = result.concat(getRandLowerArr(parseInt(range.value)));
        }
        if(numbers.checked){
            result = result.concat(getRandNumberArr(parseInt(range.value)));
        }
        if(symbols.checked){
            result = result.concat(getRandSymbolArr(parseInt(range.value)));
        }
    
        result.sort(compareRandom);
    
        finalPassword.innerText = getPassword(result);
    }else{
        title.style.color = "red";
    }
})


// copy password
copyButton.addEventListener('click', () => {
    const textarea = document.createElement("textarea");
    const password = finalPassword.innerText;
    boxShadow(!password);
    if(!password){
        return;
    }


    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
})



function getRandUpperArr(length){
    let upperArr = [];
    for(let i = 0; i <= length-1; i++){

        upperArr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    
    }

    return upperArr;
}

function getRandLowerArr(length){
    let lowerArr = [];
    for(let i = 0; i <= length-1; i++){

        lowerArr.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
    
    }

    return lowerArr;
}

function getRandNumberArr(length){
    let numberArr = [];
    for(let i = 0; i <= length-1; i++){

        numberArr.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
    
    }

    return numberArr;
}

function getRandSymbolArr(length){
    let symbolArr = [];
    for(let i = 0; i <= length-1; i++){

        symbolArr.push(String.fromCharCode(Math.floor(Math.random() * 15) + 33));
    
    }

    return symbolArr;
}

function getPassword(arr){
    let password = "";
    for(let i = 0; i < range.value; i++){
        let random = Math.round(Math.random() * (arr.length-1));
        password += arr[random];
        arr.splice(random,1);
    }

    return password
}

function compareRandom(a,b){
    return Math.random() - 0.5;
}

function boxShadow(item){
    if(item){
        conteiner.style.boxShadow = "8px 8px 10px red";
    }
    else{
        conteiner.style.boxShadow = "8px 8px 10px green";
    }
}