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















// const getPage = (url, callback) {
//   request(url, (error, response, body) => {
//     if (error) {
//       callback('Sorry there was an error');
//     } else {
//       callback(null, body);
//     }
//   })
// }

// getPage('http://www.whatever.com', (err, result) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(result)
//   }
// })


// const request = require('request');
// const fs = require('fs');
// let givenURL;
// let givenPath;
// const fetcher = (givenURL, givenPath) => {
//    givenURL = process.argv[2];
//    givenPath = process.argv[3];
//   // fileWrite(givenPath, request(givenURL));
//   console.log("URL>>>", givenURL);
//   console.log("Path>>>", givenPath);
// };
// // request(givenURL, (error, response, body) => {
// //   // console.log('error:', error); // Print the error if one occurred
// //   // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   // console.log('body:', body); // Print the HTML for the Google homepage.
// //   let storedWebsite = ('body:', body);
// //   return storedWebsite;
// // });
// // const fileWrite = (givenPath, data) => {
// //   fs.readFile(givenPath, 'utf8', function (err, data) {
// //     fs.writeFile(givenPath, data);
// //   })
// // }
// fetcher(process.argv[2], process.argv[3]);












