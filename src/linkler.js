document.addEventListener('DOMContentLoaded', function() {
  const mesut=document.getElementById("mesut");
  const ramazan=document.getElementById("ramazan");
  const wiki=document.getElementById("p-logo");
    mesut.addEventListener('click', function() {openInNewTab(0);});
    ramazan.addEventListener('click', function() {openInNewTab(1);});
    wiki.addEventListener('click', function() {openInNewTab(2);});
});



function openInNewTab(id) {
  var links=["http://www.mesutpiskin.com","https://github.com/RamazanM","https://tr.0wikipedia.org"];
  var win = window.open(links[id], '_blank');
  win.focus();

}
