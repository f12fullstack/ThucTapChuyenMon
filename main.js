function isEmailExist(email) {
    for (var key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            var value = JSON.parse(localStorage.getItem(key));
            if (value.email === email) {
                return true;
            }
        }
    }
    return false;
}
function register(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var user = {
        username : username,
        email : email,
        password : password,
        confirmPassword : confirmPassword,
    }
    var json = JSON.stringify(user);
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert("Vui lòng điền đầy đủ thông tin");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Mật khẩu khác nhau");
        return false;
    }
    if (username.length >= 2 && password.length >= 8) {
        if (isEmailExist(email)) {
            alert("Email đã được sử dụng. Vui lòng nhập email khác!");
            return false;
        }
        var json = JSON.stringify({username: username, email: email, password: password});
        localStorage.setItem(username, json);
        alert("Bạn đã đăng ký thành công!");
        return true;
    }  else {
        if (username.length < 2) {
            alert("Tên người dùng phải có ít nhất 2 kí tự");
        } else {
            alert("Mật khẩu phải có ít nhất 8 kí tự");
        }
        return false;
    }
}
function login(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (user == null){
        alert("Vui lòng nhập thông tin")
    }
    else if (username == data.username && email == data.email && password == data.password) {
        alert("Đăng nhập thành công!")
        window.location.href = "Leleshop.html"
    }
    else {
        alert("Đăng nhập thất bại!")
    }
}