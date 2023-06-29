function clicking_button1(){
    document.getElementById('button1').style.display='none';
    document.getElementById('button2').style.display='none';
    window.alert("Welcome back.")
}

function clicking_button2(){
    var Username = prompt("Could you kindly provide your full name ?");
    document.getElementById('button1').style.display='none';
    document.getElementById('button2').style.display='none';
    window.alert("Welcome to Focus, "+  Username +".")
}