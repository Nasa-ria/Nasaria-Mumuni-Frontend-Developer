<?php

use Firebase\JWT\JWT;

$secretKey = 'your-secret-key';

$userData = [
    'sub' => 'anonymous', 
];

// Create a token
$token = JWT::encode( $userData,$secretKey, 'HS256');
