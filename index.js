"use strict";

module.exports = function getCurrentSeason(callback) {
    return new Promise((resolve, reject) => {
        try {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
        }catch(err){
            reject('Problem with getting current date occurs.')
            return callback('Problem with getting current date occurs.')
        }

        if (mm >= 3 && mm <= 6 ) {
            resolve();
            if ( mm === 3 && dd >= 21 )
                return callback(null, 'Spring');
            if ( mm === 3 && dd < 21 )
                return callback(null, 'Winter');
            if ( mm === 6 && dd <= 20 )
                return callback(null, 'Spring');
            if ( mm === 6 && dd > 20 )
                return callback(null, 'Summer');
            return callback(null, 'Spring');
        } else if (mm >= 7 && mm <=9 ) {
            resolve();
            if ( mm === 9 && dd <= 20 )
                return callback(null, 'Summer');
            if ( mm === 9 && dd > 20 )
                return callback(null, 'Autumn');
            return callback('Summer');
        } else if ( mm >= 10 && mm <= 12 ) {
            resolve();
            if ( mm === 12 && dd <=20 )
                return callback(null, 'Autumn');
            if(mm===12 && dd > 20) 
                return callback(null, 'Winter');
            return callback(null, 'Autumn');
        } else {
            resolve();
            return callback(null, 'Winter');
        }
    })
}