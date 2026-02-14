
// pune

// u -1 , e -3

function test(){

    let str = 'pune'

    let vowels = 'aeiou'

    for(let i = 0 ; i < str.length ; i++){
        if(vowels.includes(str[i])){
            console.log(`${str[i]} - ${i}`)
        }
    }
}

test()