


var projectname = location.search;
// function you can use:
function getSecondPart(str) {
    return str.split('=')[1];
}

// use the function:
var slice =getSecondPart(projectname);







var client = slice + ".client"
document.write('<span class="client_span">' + eval(client) + '</span><br>');


var name = slice + ".name"
document.write('<span class="name_span">' + eval(name) + '</span><br><br>');


var project = slice + ".project"
document.write( eval(project) + '<br><br>');


var special = slice + ".special"
document.write(eval(special) + '<br>');
