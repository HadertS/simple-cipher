export function encipher (plaintext:string,shift:number,direction:string="+",maintainCase:boolean=false,ignoreForeignChars:boolean=true,ignoreWhitespace:boolean=true){
    let ciphertext:string = ""
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for (let i = 0; i < shift; i++) { 
        if (direction === "+") {
            const tempCharacter: string = alphabet.shift()!
            alphabet.push(tempCharacter)
        } else if (direction === "-") {
            const tempCharacter: string = alphabet.pop()!
            alphabet.unshift(tempCharacter)
        }
    }

    for (let i = 0; i < plaintext.length; i++){
        if ((plaintext.charCodeAt(i)>96)&&(plaintext.charCodeAt(i)<123)){
            if (maintainCase){
                ciphertext += alphabet[plaintext.charCodeAt(i) - 97].toLowerCase()
            } else{
                ciphertext += alphabet[plaintext.charCodeAt(i) - 97]
            }
        } else if ((plaintext.charCodeAt(i)>64)&&(plaintext.charCodeAt(i)<91)){
            ciphertext += alphabet[plaintext.charCodeAt(i) - 65]
        } else if ((plaintext.charCodeAt(i)==32)||((plaintext.charCodeAt(i)>=9)&&(plaintext.charCodeAt(i)<=13))) {
            if (!ignoreWhitespace){
                ciphertext += plaintext[i]
            }
        } else if (!ignoreForeignChars){
            ciphertext += plaintext[i]
        }
    }

    return ciphertext
}