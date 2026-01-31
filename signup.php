<?php
require_once 'connection.php';

// Simple sanitizer helper
function clean($v){
    return trim(strip_tags($v));
}

$errors = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? clean($_POST['name']) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    $confirm = isset($_POST['confirmpassword']) ? $_POST['confirmpassword'] : '';

    // Basic validation
    if (!$name) $errors[] = 'Name is required.';
    if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Valid email is required.';
    if (!$password) $errors[] = 'Password is required.';
    if ($password !== $confirm) $errors[] = 'Passwords do not match.';
    if (strlen($password) < 6) $errors[] = 'Password must be at least 6 characters.';

    if (empty($errors)) {
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $insert = $conn->prepare('INSERT INTO user_details (name,email,password) VALUES (?,?,?)');
        $insert->bind_param('sss', $name, $email, $hash);
        if ($insert->execute()) {
            // On success redirect to simple success page (pass name safely URL-encoded)
            header('Location: dashboard.html');
            exit;
        } else {
            $errors[] = 'Failed to create account. Please try again.';
        }
    }
}

// If we reach here show errors (very simple)
?>