//값 입력시 data 폴더에 파일 저장하기

var testFolder = './data';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})
