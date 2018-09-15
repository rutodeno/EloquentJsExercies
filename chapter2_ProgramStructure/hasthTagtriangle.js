
// Write a loop that makes seven calls to console.log to output the following
// triangle:

// write  a loop
// loop starts from 1 and ends at 7.
// log out the # sign


for (let i = 1; i < 8 ; i++ ) {

    let hashTag = "";   
    let j = i - 1;

    while(j >= 0 ) {

        hashTag += "#" ;        
        j--;
    } 
    console.log(hashTag);
}


