function generatePassword() {
    var length = 16; // Password length
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"; // Characters to include in the password
    var password = "";
  
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    document.getElementById("password").value = password;
  }
  
  function copyPassword() {
    var passwordInput = document.getElementById("password");
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  }
  