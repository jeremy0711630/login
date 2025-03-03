document.getElementById("deleteform").addEventListener("submit", function(event){
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    

     
    let user = {
        username: username,
        password: password,
        
    }
     let confirm = prompt("you want to delete yes/no")  
      if(confirm == "yes"){
        
    localStorage.removeItem(username, JSON.stringify(user));
    alert("DELETE SUCCESSFUL!");
}
if(confirm == "no"){
    alert("DELETE CANELED")
    return;
}
});
