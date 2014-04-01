var fs = require('fs');


function get_line(filename, line_no, callback) {
    fs.readFile(filename, function (err, data) {
		      if (err) throw err;
		        var lines = data.toString('utf-8').split("\n");
		      if(+line_no > lines.length){
					        return callback('File end reached without finding line', null); // if no lines
					      }
		      callback(null, lines[+line_no]); // call back
		    });
}
// need to nest this function in a for loop to get all the numbers
get_line('sampleNumbers.txt', 2, function(err, line){ // calls the function on the defined file
  console.log('The line: ' + line);
})
