(function () {
  emailjs.init("_mhqywnpS7t_3HMwp"); // from EmailJS dashboard
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_f9sckgq", "template_9w4zubw", params)
    .then(function () {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch(function (error) {
      alert("Failed to send message. Try again!");
      console.error(error);
    });
});
