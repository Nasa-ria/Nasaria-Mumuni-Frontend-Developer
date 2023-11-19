<?php

namespace App\Authorization;

use stdClass;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

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
    //    $decoded = JWT::decode($token, new Key(getenv('SECRET_KEY'), 'RS256'));
    //    return $decoded;
        // return JWT::decode($token, $this->secretKey,array('HS256'));

        
$key = 'example_key';
$payload = [
    'iss' => 'http://example.org',
    'aud' => 'http://example.com',
    'iat' => 1356999524,
    'nbf' => 1357000000
];

/**
 * IMPORTANT:
 * You must specify supported algorithms for your application. See
 * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40
 * for a list of spec-compliant algorithms.
 */
$jwt = JWT::encode($payload, $key, 'HS256');
$decoded = JWT::decode($jwt, new Key($key, 'HS256'));
// var_dump( $decoded);


// Pass a stdClass in as the third parameter to get the decoded header values
// $decoded = JWT::decode($jwt, new Key($key, 'HS256'), $headers = new stdClass());
// print_r($headers);

/*
 NOTE: This will now be an object instead of an associative array. To get
 an associative array, you will need to cast it as such:
*/
$myArray = json_decode(json_encode($decoded), true);
// $decoded_array = (array) $decoded;
var_dump($myArray);
    }

    // Other methods...

}
