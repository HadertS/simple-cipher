export function encipher (plaintext:string,direction:string,shift:number){
    let ciphertext:string = ""
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    for (let i = 0; i < shift; i++) { 
        if (direction = "+") {
            let tempCharacter: unknown = alphabet.shift
            alphabet.push(tempCharacter as string)
        } else if (direction = "-") {
            let tempCharacter: unknown = alphabet.pop
            alphabet.unshift(tempCharacter as string)
        }
    }

    plaintext = plaintext.toLowerCase()

    for (let i = 0; i < plaintext.length; i++){
        if ((plaintext.charCodeAt(i)>96)&&(plaintext.charCodeAt(i)<123)){
            ciphertext += alphabet[plaintext.charCodeAt(i) - 96]
        }
        else {
            ciphertext += plaintext[i]
        }
    }

    return ciphertext
}