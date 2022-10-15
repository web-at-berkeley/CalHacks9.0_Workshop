function submission_confirmation(e) {
    // This e.preventDefault() line is optional. I'm keeping it here for debugging and demo purposes 
    // so that Form submission does not reset the console. App will still work without this line 
    // you just can't see the values being sent or anything printed in console when form submitted
    e.preventDefault();

    // Get the value from each input object in index.html
    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    var incident = document.getElementById("incident").value;

    // print msg sent to Spiderman in console 
    console.log('Hi Spiderman. ')
    console.log(name + ' needs your help at location: ' + location);
    console.log(incident);

    // Alert your user that the text msg to Spiderman is sent
    alert("Your request has been sent to Spiderman!")
}
