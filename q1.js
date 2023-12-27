function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;

    var namePattern = /^[a-zA-Z]+$/;

    // Validate First Name
    if (!namePattern.test(firstName)) {
        document.getElementById("firstNameError").innerHTML = "First name should contain only alphabets";
        return false;
    } else {
        document.getElementById("firstNameError").innerHTML = "";
    }

    // Validate Last Name
    if (!namePattern.test(lastName)) {
        document.getElementById("lastNameError").innerHTML = "Last name should contain only alphabets";
        return false;
    } else {
        document.getElementById("lastNameError").innerHTML = "";
    }

    // Validate Age
    if (isNaN(age) || age < 18 || age > 50) {
        document.getElementById("ageError").innerHTML = "Age should be between 18 and 50";
        return false;
    } else {
        document.getElementById("ageError").innerHTML = "";
    }

    return true;
}