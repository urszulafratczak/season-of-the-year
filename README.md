# season-of-the-year
> Get the current season for the northen hemisphere.
## Install
```
$ npm install --save season-of-the-year
```
## Usage
```js
const getCurrentSeason = require('season-of-the-year')
getCurrentSeason((err, resp) => {
    if(err){
        console.log(err);
    }
        console.log(resp);
    });
```