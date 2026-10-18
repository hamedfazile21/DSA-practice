
// throw writing this js code I don't use any code editor, I just use nano from linux command line 



function same(arr1 , arr2) {

	if(arr1.length !== arr2.length) return false

	const freqencyCounter1 = {};
	const freqencyCounter2 = {};


	for (let val of arr2){
		freqencyCounter2[val] = (freqencyCounter2[val] || 0) + 1

	}


        for(let val of arr1){
                freqencyCounter1[val] = (freqencyCounter1[val] || 0) + 1
        }


	for(let key in freqencyCounter1){
	        if(!(key ** 2 in freqencyCounter2)) {
                        return false
                }

               if(freqencyCounter1[key] !== freqencyCounter2[key ** 2]) {
                        return false
                }

	}

	return true
}


console.log(same([1,2,2,3 , 4] , [1,4,4,9,16]))
