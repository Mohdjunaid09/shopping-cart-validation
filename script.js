// Registration Validation
function validateRegister() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        document.getElementById("error").innerText = "All fields are required!";
        return false;
    }

    if (password.length < 6) {
        document.getElementById("error").innerText = "Password must be at least 6 characters!";
        return false;
    }

    if (password !== confirmPassword) {
        document.getElementById("error").innerText = "Passwords do not match!";
        return false;
    }

    alert("Registration Successful!");
    return true;
}

// Login Validation
function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        document.getElementById("loginError").innerText = "All fields are required!";
        return false;
    }

    alert("Login Successful!");
    return true;
}

// Cart Validation
function validateCart() {
    let product = document.getElementById("product").value;
    let quantity = document.getElementById("quantity").value;

    if (product === "" || quantity === "") {
        document.getElementById("cartError").innerText = "Fill all fields!";
        return false;
    }

    if (quantity <= 0) {
        document.getElementById("cartError").innerText = "Quantity must be greater than 0!";
        return false;
    }

    alert("Item added to cart!");
    return true;
}