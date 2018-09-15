// create a chess board that runs an 8 by 8 grid.

// loop eight times
// loop again eight times this time alternating between a # and space.
// log out the output


for (let j = 0; j < 8 ; j++) {
    let hashSpace = "";

    if (j % 2 === 0){
     
        for (let i = 0; i < 8  ; i++) {

            if ( i % 2 === 0) {

                hashSpace += "#";
            } else {

                hashSpace += " ";
            }
        }

    } else {

        
        for (let i = 0; i < 8  ; i++) {

            if ( i % 2 === 0) {

                hashSpace += " ";
            } else {

                hashSpace += "#";
            }
        }

    }
    
    console.log(hashSpace);

}