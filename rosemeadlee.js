        
// Function to check Whether both passwords 
// is same or not. 
document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    checkPassword();
})

function checkPassword() { 
    password = document.getElementById("pw").value; 
    // If password not entered 
    if (password == '') 
        alert ("Please enter Password"); 
 
    // If Not same return False.     
    else if (password != "8779") { 
        alert ("\nPassword did not match: Please try again...") 
        return false; 
    } 

    // If same return True. 
    else{ 
        showImage();
        return true; 
    } 
} 

function showImage(){
    var img = document.getElementById("scheduleImage");
    var headline = document.getElementById("headline")
    img.style.visibility = "visible";
    headline.style.visibility = "visible";
}