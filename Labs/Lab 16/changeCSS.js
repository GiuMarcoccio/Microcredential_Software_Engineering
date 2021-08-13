function styleD(){
    /* We are going to create buttons to chancs css style sheets */

        if (document.getElementsByTagName("link")[0].getAttribute("href") === "style.css"){
            document.getElementsByTagName("link")[0].setAttribute("href", "style1.css");
        }

        else if (document.getElementsByTagName("link")[0].getAttribute("href") === "style1.css"){
            document.getElementsByTagName("link")[0].setAttribute("href", "style2.css");
        }

        else if (document.getElementsByTagName("link")[0].getAttribute("href") === "style2.css"){
            document.getElementsByTagName("link")[0].setAttribute("href", "style3.css");
        }

        else {
            document.getElementsByTagName("link")[0].setAttribute("href", "style.css");
        }
}

function infoUser() {
    // Get First Name
    let firstName = document.getElementById("fname").value;
    // Get Last Name
    let lastName = document.getElementById("lname").value;
    // Get Birthday
    let birthDay = document.getElementById("bday").value;
    // Get Eye Color
    let eyeColor = document.getElementById("ecolor").value;
    // Get Super Power
    let superPower = document.getElementById("spower").value;

    let text = "Your name is " + firstName + " " + lastName + " and your were born on the " + birthDay + " . Your world is trying to tell you that due to your superpower... " + superPower + "... The love of your life is right in front of your eyes.";

    alert(text);

}