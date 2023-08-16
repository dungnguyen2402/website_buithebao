<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "dungdungnguyen2402@gmail.com";
    $subject = "Email từ trang web";
    $headers = "From: $email";

    $mailBody = "Từ: $name\nEmail: $email\n\n$message";

    if (mail($to, $subject, $mailBody, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "Lỗi gửi email"]);
    }
}
?>