(function(){
  "use strict";

  var body = document.body;

  function getParams(){
    var params = decodeURIComponent(window.location.search)
      .replace(/^\?/, "") // remove leading ?
      .replace(/\/$/, "") // remove trailing /
      .replace(/\+/g, " ") // replace +'s with spaces
      .split("&"),

    i = params.length,
    rv = {},
    item;

    while(i--){
      item = params[i];
      item = item.split("=");
      // must be key=value format in url
      if(item.length === 2){
        rv[item[0]] = item[1];
      }
    }

    return rv;
  }

  function applyStyles(params){
    for(var key in params){
      body.style[key] = params[key];
    }
  }

  function addText(text){
    var p = document.createElement("p");
    p.innerHTML = text;
    body.appendChild(p);
  }

  function addLink(link){
    var p = document.createElement("p"),
      a = document.createElement("a");
    a.href = link;
    a.innerHTML = link;
    p.appendChild(a);
    body.appendChild(p);
  }

  function addImg(src, animate){
    var img = document.createElement("img");
    img.src = src;
    if(animate){
      img.className = "animate";
    }
    body.appendChild(img);
  }

  function init(){
    var params = getParams(),
      text = params.text;

    if(!text){
      document.querySelector(".instructions").style.display = "block";
      return;
    }

    document.title = text;
    addText(text);
    delete params.text;

    if(params.img){
      addImg(params.img, params.animate !== "false");
      delete params.img;
    }

    if(params.link){
      addLink(params.link);
      delete params.link;
    }

    // assuming anything else is a style...
    applyStyles(params);
  }

  init();

})();
