var Branch = (function(w){

  var routes = [];
  var paths = [];

  function route(path, template) {

    if(typeof path === "object")
    {
      for(var p in path) {
        routes[p] = {template: path[p]}
        paths.push(p);
      }
    }else {
      throw "You must provide object.";
    }


  }

  function init() {
    url = location.hash.slice(1) || "about";
    var tmplContent = document.getElementById(routes[url].template).innerHTML;
    document.getElementById("content").innerHTML = tmplContent;
  }

  w.addEventListener('hashchange', init);
  w.addEventListener('load', init);

  return{
    route: route
  };
})(window);
