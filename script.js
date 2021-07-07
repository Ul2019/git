


function Username(users){

    var users = document.getElementById("user").value;
    
    var pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
      );
      if (!users || users.length === 0) {
        document.write("username is required" + "<br>");
        return;
      }
      if (!users || users.length >= 14) {
        document.write("Username must be less than 20 characters" + "<br>");
        return;
      }
      if (!users || users.length <= 4) {
        document.write("Username must not be less than 4 characters" + "<br>");
        return;
      }
    
      if (pattern.test(users)) {
        document.write("Yes" + "<br>");
      } else {
        document.write("No" + "<br>");
      }
      return;
    
    
    
    }
    Username(users);
   
    