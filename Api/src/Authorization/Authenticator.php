<?php

namespace App\Authorization;

use Firebase\JWT\JWT;

class Authenticator
{
    private $secretKey;

    public function __construct($secretKey)
    {
        $this->secretKey = $secretKey;
    }

    public function generateToken()
    {
        $userData = [
            'sub' => 'anonymous',
        ];

        // Create a token
        $token = JWT::encode($userData, $this->secretKey, 'HS256');

        return $token;
    }

    public function handleRequest($request)
    {
        $authorizationHeader = $request->getHeaderLine('Authorization');

        if (empty($authorizationHeader)) {
            // Authorization header is missing
            throw new \Exception('Authorization header is missing.');
        }

        $token = str_replace('Bearer ', '', $authorizationHeader);

        try {
            $decoded = JWT::decode($token, $this->secretKey, ['HS256']);
            return $decoded;
        } catch (\Exception $e) {
            // Handle invalid or expired token (throwing an exception is recommended)
            throw new \Exception('Invalid or expired token: ' . $e->getMessage());
        }
    }
}
