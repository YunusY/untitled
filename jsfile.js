/**
 * Created by YeniBalik on 04.12.2015.
 */



var Yunusbranch;
var fs = require('fs');
var LineByLineReader = require('line-by-line');

var page = "";
var pageList = [];
var xStart =[];
var yStart =[];
var xEnd =[];
var yEnd =[];
var type =[];
var possiblePoints =[];
var taskNumber =[];
var taskcounter = 1;
var taskpartcounter =0;
var path ="C:/Users/YeniBalik/Documents/visual studio 2015/Projects/exascan/61341";
var typeincoming= false;
var examIds = [];
var scanfiles =[];



examIds = fs.readdirSync(path);
for (var i =0; i< examIds.length;i++){
    scanfiles.push(fs.readdirSync(path+"/"+examIds[i]))
}
for (var i =0; i< scanfiles.length ; i++ ) {
    for (var j = 0; j < scanfiles[i].length; j++) {
        if (scanfiles[i][j].indexOf("_") == -1) {
            scanfiles[i].splice(j, 1);
            j--;
        }
    }
}
for (var i =0; i< scanfiles.length ; i++ ){
    for (var j=0; j< scanfiles[i].length;j++){
        console.log(scanfiles[i][j]);
    }
}
function createSolution(taskID, type, lang, path){

}
function createAnswer(taskID, type, randomKey, studentID, page, lang, path){

}
function createTask(lectureid, tasknumber, type, possiblePoints){

}
/*
lr = new LineByLineReader('./data/exam.log');


lr.on('error', function (err) {
    console.log(err)
    console.log("Unable to open file");
});

lr.on('line', function (line) {
    // 'line' contains the current line without the trailing newline character.

    for (var i = 0; i < line.length; i++) {
        var subs = line.substr(i, 8);
        if (subs == "abeStart"){
            taskcounter++;
            break;
        }

        if (subs == "Punkte':"){
            //possiblePoints.push(line.char)
        //    hier schleife machen bis ' kommt und die zahl in den array speichern
            var points ="";

            for (var j=10;line.charAt(i+j)!="'"; j++) {
                console.log(line.charAt(i+j));
                points += line.charAt(i + j);
            }
            possiblePoints.push(points);
        }
        if( typeincoming){
            if (subs == "{'Typ':'"){
                var typesubs = line.substr(i+8,6);
                if(typesubs == "MCStar" || typesubs == "MCLine" || typesubs == "PropLi"){
                    type.push(0);
                }
                if(typesubs == "Freite"){
                    type.push(1);
                }
                if(typesubs == "BildAu"){
                    type.push(2);
                }
                typeincoming= false;
            }
        }
        "l', 'P"
        if (subs == "Seite':'") {
            page = line.charAt(i + 8);
        }
        if (subs == "edgeStar") {
            taskpartcounter++;
            pageList.push(page);
            taskNumber.push(  taskcounter+"."+taskpartcounter);
            readText(xStart, yStart, line, i);
            typeincoming=true;
        }
        if (subs == "edgeEnd'") {
            readText(xEnd, yEnd, line, i);
        }
    }


});

lr.on('end', function () {
    for(var i=0; i<pageList.length;i++){

        console.log("Page: "+pageList[i]);
        console.log("Coordinates:");
        console.log(xStart[i]);
        console.log(yStart[i]);
        console.log(xEnd[i]);
        console.log(yEnd[i]);
        console.log("Task Type: "+type[i]);
        console.log("task Number: "+ taskNumber[i]);
        console.log("possPoints: "+possiblePoints[i]);
        console.log();
    }
    //consoleCall();
});


function readText(x, y, s, i) {
    var xtemp = "";
    var ytemp = "";
    var temp = "";
    var apcounter = 0;

    for (var j = i + 8; j < s.length; j++) {

        if (s.charAt(j) == '\'') {
            apcounter++;
        }
        else if (s.charAt(j) == 'X') {
            apcounter = 0;
            temp = "x";
        }
        else if (s.charAt(j) == 'Y') {
            apcounter = 0;
            temp = "y";
        }
        else if (s.charAt(j) == '.') {
            if (temp == "x") {
                xtemp += s.charAt(j);
            }
            else if (temp == "y") {
                ytemp += s.charAt(j);
            }
        }
        else if (s.charAt(j) == '}') {
            x.push(xtemp);
            y.push(ytemp);
        }
        else {
            if (temp == "x") {
                if (isDigit(s.charAt(j))) {
                    xtemp += s.charAt(j);
                }
            }
            else if (temp == "y") {
                if (isDigit(s.charAt(j))) {
                    ytemp += s.charAt(j);
                }
            }
        }

    }

}
function isDigit(n){
    return n > -1;
}


// CONSOLE CALL WITH PARAMETER PASTE
function consoleCall(){
var cppparam = [];
for(var i = 0; i<pageList.length; i++){
    cppparam.push(pageList[i]);
    cppparam.push(xStart[i]);
    cppparam.push(yStart[i]);
    cppparam.push(xEnd[i]);
    cppparam.push(yEnd[i]);
}
var execFile = require('child_process').exec;
var cmd = '"C:/Users/YeniBalik/Documents/Visual Studio 2015/Projects/exascan/x64/Debug/exascan.exe"';
    //adding parameter amount as parameter because idk how to do it in cpp
for(var i = 0; i<pageList.length; i++){
    cmd = cmd + " "+ pageList[i];
    cmd = cmd + " "+ xStart[i];
    cmd = cmd + " "+ yStart[i];
    cmd = cmd + " "+ xEnd[i];
    cmd = cmd + " "+ yEnd[i];
}

execFile(cmd, function(err, stdout, stderr) {
    // command output is in stdout
    console.log(cmd);
    console.log("START")

    console.log(stdout.toString());
    if (err){
        throw err;
    }

    //console.log(stderr.toString());
    console.log("END");
});
}
*/