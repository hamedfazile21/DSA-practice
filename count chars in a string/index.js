function isAlphaNumeric(char) {
    const code = char.charCodeAt(0)

    return (
        (code >= 48 && code <= 57) || (code >= 97 && code <= 122)
    )
}


function charCount (str)  {
    if(typeof str !== "string") return null
    
    let result = {};
    for (let i = 0; i < str.length ; i++) {
        const currentChar = str[i].toLowerCase() ;
        
        if(isAlphaNumeric(currentChar)) 
            result[currentChar] = (result[currentChar] || 0) + 1
    }

    return Object.keys(result).length === 0 ? null : result    
}



console.log(charCount("Hameda"))
