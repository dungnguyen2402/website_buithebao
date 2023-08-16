document.getElementById("send-button").addEventListener("click", function () {
    return alert('slxyhet');
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    emailjs.init("user_your_emailjs_user_id"); // Thay thế bằng User ID của bạn

    const params = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send("service_your_emailjs_service_id", "template_your_emailjs_template_id", params)
        .then(function (response) {
            console.log("Email đã được gửi:", response);
        })
        .catch(function (error) {
            console.error("Lỗi gửi email:", error);
        });
});