<?php
// Define path for uploads
$uploadDir = __DIR__ . '/uploads/';

// Ensure directory exists
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

// Check for valid requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST' || empty($_FILES['image'])) {
    http_response_code(400);
    echo json_encode(['error' => 'No image uploaded or invalid request.']);
    exit;
}

$file = $_FILES['image'];

// Verify there were no errors during upload
if ($file['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['error' => 'Upload failed with error code: ' . $file['error']]);
    exit;
}

// Validate file size (e.g., max 5MB)
$maxSize = 5 * 1024 * 1024;
if ($file['size'] > $maxSize) {
    http_response_code(400);
    echo json_encode(['error' => 'File size exceeds the 5MB limit.']);
    exit;
}

// Validate file type (allow only images)
$allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
$fileMimeType = mime_content_type($file['tmp_name']);
if (!in_array($fileMimeType, $allowedMimeTypes)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid file type. Only JPG, PNG, GIF, and WEBP are allowed.']);
    exit;
}

// Generate a unique filename
$extension = pathinfo($file['name'], PATHINFO_EXTENSION);
$filename = uniqid('img_', true) . '.' . $extension;
$destination = $uploadDir . $filename;

// Move the file
if (move_uploaded_file($file['tmp_name'], $destination)) {
    // Return relative URL for frontend usage
    $imageUrl = '/uploads/' . $filename;
    echo json_encode([
        'success' => true,
        'url' => $imageUrl
    ]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to move uploaded file.']);
}
