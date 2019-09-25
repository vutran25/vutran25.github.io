        
// Function to check Whether both passwords 
// is same or not. 
let employees = ['vu','dung','hoa','phuong','linh'];
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
    else if (!employees.includes(password)) { 
        alert ("\nPassword did not match: Please try again...") 
        return false; 
    } 

    // If same return True. 
    else{ 
        showImage();
        hidePassWord();
        return true; 
    } 
} 

function showImage(){
    var img = document.getElementById("scheduleImage");
    img.style.visibility = "visible";  
}

function hidePassWord(){
    var password = document.getElementById("pw"); 
    var btn = document.getElementById("submitbutton");
    password.style.visibility = "hidden";
    btn.style.visibility = "hidden";  

}
