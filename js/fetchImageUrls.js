const axios = require('axios');
const util = require('util')
const fs = require('fs');

/**
 * fetch image urls from site 
 * write image urls to txt file
 */

let content = ''
let targetUrl = ''

axios.get(targetUrl).then(function(resp) {
  let pattern = /https:\/\/oyster.+?\/animal-crossing-new-horizons\/.+?\.(?:jpg|gif|png)/g;
  content = resp.data.match(pattern);
  let unique = new Set(content);

  fs.writeFile('./imageUrls.txt', util.inspect(unique), "utf8", function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('Successfully wrote to file!');
  });

  console.log('Writing file...');
});