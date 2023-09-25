export function encipher (plaintext:string,shift:number,direction:string="+",maintainCase:boolean=false,ignoreForeignChars:boolean=false){
    let ciphertext:string = ""
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for (let i = 0; i < shift; i++) { 
        if (direction === "+") {
            let tempCharacter: string = alphabet.shift()!
            alphabet.push(tempCharacter)
        } else if (direction === "-") {
            let tempCharacter: string = alphabet.pop()!
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
        } else if (!ignoreForeignChars){
            ciphertext += plaintext[i]
        }
    }

    return ciphertext
}