function validateRegistration() {
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;
    let phone = document.getElementById("Phone").value;
    let city = document.getElementById("City").value;
    let gender = document.querySelector('input[name="Gender"]:checked').value;
    let hobbies = [];
    document.querySelectorAll('input[name="Hobbies"]:checked').forEach(hobby => {
        hobbies.push(hobby.value);
    });

    // Validate name
    let nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(name)) {
        alert("Name must only contain alphabets");
        return false;
    }

    // Validate phone number
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be 10 digits");
        return false;
    }

    // Store data in localStorage
    let userData = {
        name,
        email,
        password,
        phone,
        gender,
        hobbies: hobbies.join(", "),
        city
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to data.html
    alert("Successfully Registered");
    window.location.href = "data.html";
    return false;
}

document.addEventListener("DOMContentLoaded", function () {
    let userData = localStorage.getItem("userData");
    if (userData) {
        userData = JSON.parse(userData);
        document.getElementById("userData").innerHTML = `
            <p><strong>Name:</strong> ${userData.name}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Phone:</strong> ${userData.phone}</p>
            <p><strong>Gender:</strong> ${userData.gender}</p>
            <p><strong>Hobbies:</strong> ${userData.hobbies}</p>
            <p><strong>City:</strong> ${userData.city}</p>
        `;
    } else {
        document.getElementById("userData").innerHTML = "<p>No user data found.</p>";
    }
});

// Phone input validation
document.getElementById("Phone").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
});
