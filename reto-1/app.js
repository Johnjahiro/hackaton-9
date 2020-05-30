let text = prompt("Ingrese texto a cifrar")
let mayus = text.toUpperCase()
let cifrado = ""

function cifrar(str) {
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i].charCodeAt())
        let numAscii = str[i].charCodeAt()
        if(numAscii >= 65 && numAscii <= 77) {
            cifrado += String.fromCharCode(numAscii + 13)
        } else if (numAscii >= 78 && numAscii <= 90) {
            cifrado += String.fromCharCode(numAscii - 13)
        }
    }
    return cifrado
}

console.log("La palabra cifrada es", cifrar(mayus))
