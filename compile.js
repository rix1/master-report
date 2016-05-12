'use strict';

const fs = require('fs');
const concat = require('concat-files');

const dir = "./out/";
const prefix = 'out_';


function writeFile(writeObject, outputFilename){
	if (!fs.existsSync(dir)){
		fs.mkdirSync(dir);
	}
	fs.writeFile(dir.concat(outputFilename), JSON.stringify(writeObject, null, 4), function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log("File saved to " + dir.concat(outputFilename));
			concat(outFiles, dir.concat("allesammen.md"), () =>{
				console.log('done...');
			});
		}
	});
}


function readFile(filename, callback){
	fs.readFile(filename, 'utf8', function (err, data) {
		if (err) throw err;
		callback(data);
	});
}


const files = ["0_Preface.md", "1_Introduction.md", "2_Method.md", "3_Interviews.md", "3_Literature Review.md", "5_Proposed_Design.md", "6_Discussion.md", "7_Conclusion.md", "8_Bibliography.md"];
// const files = ["0_Preface.md"];

let outFiles = [];


let counter = 1;
files.forEach((file) => {
	
	readFile(file, (res) => {
		console.log(`Reading file ${file}`);

		let pattern = /\[CITE\]\[[a-z_0-9A-Z\s.;:-]+\]/g;
		let single = /\[CITE\]\[[a-z_0-9A-Z\s.;:-]+\]/;
		let comment = /\/\/([^
])+(
|$)/g;

		let match = res.match(pattern);
		res = res.replace(comment, "");

		if(match && match.length > 0){
			match.forEach((item) => {
				res = res.replace(single, `[${counter}]`);
				counter++;
			})
		}
			// console.log(res)
			outFiles.push(dir.concat(prefix.concat(file)));
			writeFile(res, prefix.concat(file));
		});
})