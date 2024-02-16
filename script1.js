function submitForm() {
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Display success message
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("successMessage").innerHTML = "<p>Your message has been sent successfully!</p>";
  
    // You can send the form data to the server using AJAX or other methods.
    // Here, we're just simulating a successful form submission.
  }
  