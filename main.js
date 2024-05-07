function register(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username : username,
        email : email,
        password : password,
    }
    var json = JSON.stringify(user);
    if (username.length >= 2 && password.length >= 8) {
        localStorage.setItem(username, json);
        alert("Bạn đã đăng ký thành công!");
        return true;
    } else {
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