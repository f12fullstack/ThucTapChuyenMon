// $(function(){
//     //Năm tự động điền vào select
//         var seYear = $('#year');
//         var date = new Date();
//         var cur = date.getFullYear();
    
//         seYear.append('<option value="">-- Year --</option>');
//         for (i = cur; i >= 1900; i--) {
//             seYear.append('<option value="'+i+'">'+i+'</option>');
//         };
        
//         //Tháng tự động điền vào select
//         var seMonth = $('#month');
//         var date = new Date();
        
//         var month=new Array();
//         month[1]="January";
//         month[2]="February";
//         month[3]="March";
//         month[4]="April";
//         month[5]="May";
//         month[6]="June";
//         month[7]="July";
//         month[8]="August";
//         month[9]="September";
//         month[10]="October";
//         month[11]="November";
//         month[12]="December";
    
//         seMonth.append('<option value="">-- Month --</option>');
//         for (i = 12; i > 0; i--) {
//             seMonth.append('<option value="'+i+'">'+month[i]+'</option>');
//         };
        
//         //Ngày tự động điền vào select
//         function dayList(month,year) {
//             var day = new Date(year, month, 0);
//             return day.getDate();
//         }    
        
//         $('#year, #month').change(function(){
//             //Đoạn code lấy id không viết bằng jQuery để phù hợp với đoạn code bên dưới
//             var y = document.getElementById('year');
//             var m = document.getElementById('month');
//             var d = document.getElementById('day');
            
//             var year = y.options[y.selectedIndex].value;
//             var month = m.options[m.selectedIndex].value;
//             var day = d.options[d.selectedIndex].value;
//             if (day == ' ') {
//                 var days = (year == ' ' || month == ' ')? 31 : dayList(month,year);
//                 d.options.length = 0;
//                 d.options[d.options.length] = new Option('-- Day --',' ');
//                 for (var i = 1; i <= days; i++)
//                 d.options[d.options.length] = new Option(i,i);
//             }
//         });
//     });

// Load image from local storage if available
window.onload = function() {
    const imgSrc = localStorage.getItem('uploadedImage');
    if (imgSrc) {
        document.getElementById('preview').src = imgSrc;
    }
}

// Handle image selection
document.getElementById('upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            const preview = document.getElementById('preview');
            preview.src = reader.result;
            // Save image to local storage
            localStorage.setItem('uploadedImage', reader.result);
        }
        reader.readAsDataURL(file);
    }
});

// Clear image from local storage and preview
function clearImage() {
    localStorage.removeItem('uploadedImage');
    document.getElementById('preview').src = '';
}

// Change email
function changeEmail() {
    const newEmail = prompt('Enter new email:');

    if (newEmail && isValidEmail(newEmail)) {
        // Load user data from local storage
        const userData = JSON.parse(localStorage.getItem('userData')) || {};

        // Check if new email is different from the current email
        if (newEmail !== userData.email) {
            // Update email in local storage
            userData.email = newEmail;
            localStorage.setItem('userData', JSON.stringify(userData));

            // Update input field
            document.getElementById('email').value = newEmail;

            alert('Email changed successfully!');
        } else {
            alert('New email cannot be the same as the current email.');
        }
    } else {
        alert('Please enter a valid email.');
    }
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


// Change phone number
function changePhone() {
    const newPhone = prompt('Enter new phone number:');
    
    if (newPhone && /^[0-9]{10,11}$/.test(newPhone)) {
        // Load user data from local storage
        const userData = JSON.parse(localStorage.getItem('userData')) || {};

        // Check if new phone number is different from the current phone number
        if (newPhone !== userData.phone) {
            // Update phone number in local storage
            userData.phone = newPhone;
            localStorage.setItem('userData', JSON.stringify(userData));

            // Update input field
            document.getElementById('phone').value = newPhone;

            alert('Phone number changed successfully!');
        } else {
            alert('New phone number cannot be the same as the current phone number.');
        }
    } else {
        alert('Please enter a valid phone number with 10 to 11 digits.');
    }
}

// Load user data from local storage if available
window.onload = function() {
    const userData = JSON.parse(localStorage.getItem('userData')) || {};
    document.getElementById('username').value = userData.username || '';
    document.getElementById('fullname').value = userData.fullname || '';
    document.getElementById('email').value = userData.email || '';
    document.getElementById('phone').value = userData.phone || '';
    if (userData.gender) {
        document.getElementById(userData.gender).checked = true;
    }
    if (userData.birthdate) {
        const parts = userData.birthdate.split('-');
        document.getElementById('day').value = parts[2];
        document.getElementById('month').value = parts[1];
        document.getElementById('year').value = parts[0];
    }
    // Populate day, month, year select options
    const daySelect = document.getElementById('day');
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
    const monthSelect = document.getElementById('month');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement('option');
        option.value = i + 1;
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
    const yearSelect = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

// Save user data to local storage
function saveData() {
    const username = document.getElementById('username').value;
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const birthdate = `${year}-${month}-${day}`;

    const userData = {
        username: username,
        fullname: fullname,
        email: email,
        phone: phone,
        gender: gender,
        birthdate: birthdate,
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Data saved successfully!');
}
