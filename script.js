function animate(id){
  console.log(id);
  switch(id){
    case "main_about":
      document.getElementById("main_home").style.display = "none";
      document.getElementById("main_about").style.display = "";
      var id_build = '#' + id;
    break;
    case "main_home":
      document.getElementById("main_about").style.display = "none";
      document.getElementById("main_home").style.display = "";
      var id_build = '#' + id;
    break;
    case "main_contact":
      document.getElementById("main_about").style.display = "none";
      document.getElementById("main_home").style.display = "none";
      
      var id_build = '#' + id;
    break;
    default:
      console.log("none");
   }
 
}

document.getElementById('menu_home').addEventListener('click', function(){animate('main_home');}, false);
document.getElementById('menu_about').addEventListener('click', function(){animate("main_about");}, false);

