let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "    " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }
];

const outputEncrypted = document.querySelector(".output-encrypted");
const outputExplanation = document.querySelector(".output-explanation");

let newLetterArray = [];

morseAlphabet.forEach(character => {
    newLetterArray.push(character.letter);
});

console.log(newLetterArray);


const encrypt = () => {
    outputEncrypted.innerHTML = "";
    outputExplanation.innerHTML = `<h1>Explanation:</h1>`

    const textInput = document.querySelector("#text-input").value.toUpperCase();
    console.log({textInput});

    for(let i = 0; i < textInput.length; i++){
        console.log(textInput[i]);

        if(newLetterArray.includes(textInput[i])){
            let letterIndex = newLetterArray.indexOf(textInput[i]);

            if(letterIndex == 10){
                outputEncrypted.innerHTML += ` / `;
                outputExplanation.innerHTML += `<p class="spacer"></p>`
            } else {
                console.log({letterIndex});
                console.log(morseAlphabet[letterIndex].morseCode);
    
                outputEncrypted.innerHTML += `  ${morseAlphabet[letterIndex].morseCode}  `;
                outputExplanation.innerHTML += `<p>${textInput[i].toLowerCase()} = ${morseAlphabet[letterIndex].morseCode}</p>`
            }
        }
        else {
            outputEncrypted.innerHTML = `Zeichen nicht erkannt`;
            outputExplanation.innerHTML = ``;
            return;
        }
    }
}

