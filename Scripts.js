var converter = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    "'": '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    '=': '-...-',
    '+': '.-.-.',
    '-': '-....-',
    '_': '..--.-',
    '"': '.-..-.',
    '$': '...-..-',
    '@': '.--.-.',
    ' ': '    '
  }
const englishinput = document.getElementById("english-input")
const morseoutput = document.getElementById("morse-output")
const morseinput = document.getElementById("morse-input")
const englishoutput = document.getElementById("english-output")

englishinput.addEventListener('keyup', convertToMorse)
englishinput.addEventListener('keydown', deleteChar)
morseinput.addEventListener('keyup', convertToEnglish)
morseinput.addEventListener('keydown', deleteMorse)


function convertToMorse() {
let value = englishinput.value;
let output = '';
for (let i = 0; i < value.length; i++){
    output += converter[value.charAt(i).toLowerCase()] + ' '
    console.log(output)
    morseoutput.value = output
    }
}

function deleteChar(){
if(englishinput.value){
    morseoutput.value = '';
}
}

function convertToEnglish(){
    let translatedObj = translate();
    let value = morseinput.value;
    translatedObj[""] = "  "
    let output = '';
    for (let i = 0; i < value.length; i++){
        const strSplit = value.split(" ");
        const map = strSplit.map(n => translatedObj[n])
        const strJoin = map.join("");
        output = strJoin.toUpperCase();
        console.log(output)
        console.log("Current String", strSplit)
        console.log("Current Join String", strJoin)
        englishoutput.value = output
        }
}


function deleteMorse(){
    if(morseinput.value){
        englishoutput.value = '';
    }
    }

function translate(){
    const reverse = Object.entries(converter).reduce((acc, [key,value]) => {
        acc[value] = key;;
        return acc;
    },{})
    return reverse;
}

console.log(translate());



