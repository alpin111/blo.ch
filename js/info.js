


var projectname = location.search;
// function you can use:
function getSecondPart(str) {
    return str.split('=')[1];
}

// use the function:
var slice =getSecondPart(projectname);







var client = slice + ".client"
document.write('<p>Client: ' + eval(client) + '</p>');


var name = slice + ".name"
document.write('<p><h1>' + eval(name) + '</h1></p>');


var project = slice + ".project"
document.write('<p>' + eval(project) + '</p>');


var special = slice + ".special"
document.write('<p>' + eval(special) + '</p>');
