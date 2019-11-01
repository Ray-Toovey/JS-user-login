//log in

//event listener
document.getElementById('button').addEventListener('click', logon);

//event func

function logon() {

    let username = document.getElementById('username').value;

    let password = document.getElementById('password').value;

    if (username == 'one' && password == 'two') {
        console.log('usename and password are correct');
        document.getElementById("log-text").innerHTML = " Welcome back, Bob Vance, Vance refrigeration";
        document.getElementById('logo').src = "images/bobvance.jpg";
        document.getElementById("wronguser").innerHTML = "";
        document.getElementById('wrongpass').innerHTML = "";
        document.getElementById('link').innerHTML = "continue to site..."
        document.getElementById('link').href = "https://theoffice.fandom.com/wiki/Bob_Vance,_Vance_Refrigeration"
    } else if (password =='two' && username !='one' ) {
        console.log('username is incorrect')
        document.getElementById('logo').src = "images/criminal_scum.jpg";
        document.getElementById("log-text").innerHTML = "Stop right there, CRIMINAL SCUM!!";
        alert('Login Unsucessful');
        document.getElementById('wronguser').innerHTML = "wrong username";
        document.getElementById('wrongpass').innerHTML = "";
    } else if (username =='one' && password != 'two'){
        console.log('password is incorrect')
        document.getElementById('logo').src = "images/criminal_scum.jpg";
        document.getElementById("log-text").innerHTML = "Stop right there, CRIMINAL SCUM!!";
        alert('Login Unsucessful');
        document.getElementById('wrongpass').innerHTML = "wrong password";
        document.getElementById('wronguser').innerHTML = "";
    } else {
        console.log('username and password are incorrect')
        document.getElementById('logo').src = "images/criminal_scum.jpg";
        document.getElementById("log-text").innerHTML = "Stop right there, CRIMINAL SCUM!!";
        alert('Login Unsucessful');
        document.getElementById('wronguser').innerHTML = "wrong username";
        document.getElementById('wrongpass').innerHTML = "wrong password"
    }
}