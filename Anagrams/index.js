

function anagrams(str1 , str2) {

	if(str1.length !== str2.length) return false

	const freStr1 = {};
	const freStr2 = {};

	for(let val of str1) freStr1[val] = ++freStr1[val]  || 1
	for(let val of str2) freStr2[val] = ++freStr2[val] || 1

	 for(let key in freStr1) {
		if(!(key in freStr2)) return false
		if(freStr1[key] !== freStr2[key]) return false
	}

	return true

	console.log(freStr1 , freStr2)
}


console.log(anagrams("" , ""))
