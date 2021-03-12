//command line takes in a URL as an command line arguements and local file path and downland the resource to the specific path
const fs = require('fs');
const request = require('request');

const urlInput = process.argv[2];
const path = process.argv[3];

const fetchAndSave = function(urlInput, path) {
  request(urlInput, (error, response, body) => {
    if (error) {
      console.log('error:', error);
    }
    fs.writeFile(path, body, (error) => {
      if (error) {
        console.log(`Error: ${path}`);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
      }; 
    });
  });
};

fetchAndSave(urlInput, path);












