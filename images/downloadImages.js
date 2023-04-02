const fs = require('fs');
const https = require('https');

// read txt file and download images 

// download function
let download = function(url, dest, cb) {
  let file = fs.createWriteStream(dest);
  let request = https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb); 
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest); // removes the file
    if (cb) cb(err.message);
  });
};

fs.readFile('imageUrls.txt', 'utf8', function (err, data) {
  if (err) {
    // handle possible error
    console.error(err);
    process.exit(1);
  }

  let dataList = data.toString().split(',');
  const downloadLocation = '';

  for (let i = 0; i < dataList.length; i++) {
    let newFileName = '';

    download(dataList[i], `${downloadLocation}/${newFileName}.png`, console.log(`downloaded ${newFileName}.png`))
  }
});

console.log('reading file');
