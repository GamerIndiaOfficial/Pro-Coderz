var naam = prompt("Enter your name pls");

document.getElementById("nameInput").setAttribute("placeholder",naam);

if(naam==""){
    alert("pls enter name")
    var naam = prompt("Enter your name pls");
    document.getElementById("nameInput").setAttribute("placeholder",naam);
    alert(""+ naam +"! nice name")
    confirm("all right your name has benn saved temporarly")
} else{
    alert(""+ naam +"! nice name")
    confirm("all right your name has benn saved temporarly")
}
