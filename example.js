const getCurrentSeason = require('.'); // require the `index.js` file from the same directory.

getCurrentSeason((err, resp) => {
    if(err){
        console.log(err);
    }
        console.log(resp);
    });