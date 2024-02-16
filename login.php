<?php
// Your database connection parameters
$host = "localhost";
$username = "root";
$password = "dipesh";
$database = "nodemysql";

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch user name from the database (you may need to modify this query based on your schema)
$sql = "SELECT username FROM users WHERE id = 1"; // Assuming you want to retrieve the username for user with ID 1
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $username = $row["root"];
} else {
    $username = "Guest"; // Default to "Guest" if no user found
}

$conn->close();
?>
