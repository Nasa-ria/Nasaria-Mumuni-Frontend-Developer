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
        // $token = JWT::encode($userData, $this->secretKey, 'HS256');

        // return $token;
    }

    public function handleRequest($authorizationHeader)
    {
        if (!empty($authorizationHeader) && strpos($authorizationHeader, 'Bearer ') === 0) {
            $token = substr($authorizationHeader, 7);
    
            try {
                // Decode the token
                $decoded = $this->decodeToken($token);
    
                // Access headers separately if needed
                // $headers = $this->extractHeaders($token);
    
                return $decoded;
            } catch (\Exception $e) {
                // Log the error or handle it in an appropriate way
                // For example, you can return a custom error response
                return null;
            }
        } else {
            // Handle the case where the token is empty or doesn't start with 'Bearer '
            return null;
        }
    }
    
    private function decodeToken($token)
    {
        // Decode the token without passing $headers by reference
        return JWT::decode($token, $this->secretKey, ['HS256']);
    }

    // Other methods...

}
