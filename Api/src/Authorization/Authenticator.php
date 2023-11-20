<?php

namespace App\Authorization;

use stdClass;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Authenticator
{
    public function generateToken()         
    {
     
            return bin2hex(random_bytes(16));         
    }


    public function handleRequest($authorizationHeader)
    {
   // Check if a token is available
   if (empty($authorizationHeader)) {
    return false;
}
$authorizationHeader= substr($authorizationHeader, 7);
// Check if the token begins with a specific prefix (e.g., "hex")
$tokenPrefix = "zaCELgL.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx";
if ($authorizationHeader === $tokenPrefix)  {
    return false;
}

return true;
}
    

}
