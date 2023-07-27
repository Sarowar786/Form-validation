document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const postalCodeInput = document.getElementById("postalCode");
    const password = document.getElementById("password").value.trim();

    // Validate name field (required)
    if (name === "") {
      alert("Name field is required.");
      return;
    }

    // Validate email field (required and valid email format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      alert("Email field is required.");
      return;
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }



      const postalCode = postalCodeInput.value.trim();

      // Regular expression to check for 5 digits
      const postalCodePattern = /^\d{4}$/;

      if (!postalCodePattern.test(postalCode)) {
        alert("Please enter a valid 4-digit postal code.");
        postalCodeInput.focus();
      } else {
        // alert("Postal code is valid!");
        // return;
      }



    // Validate password (required and at least 6 characters long)
    if (password === "") {
      alert("Password field is required.");
      return;
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    // Form is valid; submit the data
    alert("Form submitted successfully!");
  });
 