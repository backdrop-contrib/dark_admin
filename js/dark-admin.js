javascript: (
function () { 
// the css we are going to inject
var css = 'html {-webkit-filter: invert(100%) hue-rotate(180deg);' +
    '-moz-filter: invert(100%) hue-rotate(180deg);' + 
    '-o-filter: invert(100%) hue-rotate(180deg);' + 
    '-ms-filter: invert(100%) hue-rotate(180deg); }',

head = document.getElementsByTagName('head')[0],
style = document.createElement('style');



style.type = 'text/css';
if (style.styleSheet){
style.styleSheet.cssText = css;
} else {
style.appendChild(document.createTextNode(css));
}

//injecting the css to the head
head.appendChild(style);
}());