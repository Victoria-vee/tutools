<?php
session_start();
include "connection.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST["email"]);
    $pass  = $_POST["password"];

    if (empty($email) || empty($pass)) {
        die("All fields are required");
    }

    $stmt = mysqli_prepare(
        $conn,
        "SELECT id, name, password FROM user_details WHERE email = ?"
    );
    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);

    $result = mysqli_stmt_get_result($stmt);
    $user   = mysqli_fetch_assoc($result);

    if ($user && password_verify($pass, $user["password"])) {
        $_SESSION["user_id"] = $user["id"];
        $_SESSION["name"]    = $user["name"];

        echo "Login successful";
        header("Location: dashboard.html");
    } else {
        echo "Invalid email or password";
    }
}
?>
