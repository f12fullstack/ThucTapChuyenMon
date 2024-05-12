document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var addressInput = document.getElementById('address');

        // Kiểm tra xem các trường nhập liệu có được điền đầy đủ không
        if (nameInput.value === '' || emailInput.value === '' || addressInput.value === '') {
            alert('Vui lòng điền đầy đủ thông tin.');
            event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu nếu thông tin chưa được điền đầy đủ
        }
    });
});
// 1. **Đăng ký người dùng**:


// Import thư viện MongoDB
const MongoClient = require('mongoose').MongoClient;

// Đường dẫn kết nối đến cơ sở dữ liệu MongoDB
const url = 'mongodb+srv://phuonganhhh2711:leleshop@phuonganh.0swtqos.mongodb.net/';
const dbName = 'user_profiles';

// Hàm đăng ký người dùng
function registerUser(user, callback) {
    // Kết nối đến cơ sở dữ liệu MongoDB
    MongoClient.connect(url, function(err, client) {
        if (err) throw err;

        const db = client.db(dbName);

        // Lưu thông tin người dùng vào cơ sở dữ liệu
        db.collection('users').insertOne(user, function(err, result) {
            if (err) throw err;
            console.log("User registered successfully");
            client.close(); // Đóng kết nối đến MongoDB
            callback(result); // Gọi lại hàm callback khi hoàn thành
        });
    });
}

// Sử dụng hàm đăng ký người dùng
const user = { username: 'example', email: 'example@example.com', password: 'password' };
registerUser(user, function(result) {
    console.log(result);
});

// 2. **Cập nhật thông tin cá nhân**:

// Hàm cập nhật thông tin cá nhân của người dùng

function updateProfile(username, updatedInfo, callback) {
    MongoClient.connect(url, function(err, client) {
        if (err) throw err;

        const db = client.db(dbName);

        // Tìm và cập nhật thông tin cá nhân của người dùng
        db.collection('users').updateOne({ username: username }, { $set: updatedInfo }, function(err, result) {
            if (err) throw err;
            console.log("User profile updated successfully");
            client.close();
            callback(result); 
            // Gọi lại hàm callback khi hoàn thành
        });
    });
}

// Sử dụng hàm cập nhật thông tin cá nhân
const updatedInfo = { email: 'newemail@example.com', address: 'New Address' };
updateProfile('example', updatedInfo, function(result) {
    console.log(result);
});