<?php

namespace App;


use Dotenv\Dotenv;
use App\Model\Rocket;
use App\Authorization\Authenticator;
use App\Controller\RocketController;
use Nyholm\Psr7\Factory\Psr17Factory;

require_once './vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Access the secret key
$secretKey = $_ENV['SECRET_KEY'] ?? null;
$authenticator = new Authenticator($secretKey );


$psr17Factory = new Psr17Factory();
$request = $psr17Factory->createServerRequest('GET', $_SERVER['REQUEST_URI']);
$response = $psr17Factory->createResponse();

$uri = $request->getUri()->getPath();


// Get the Authorization header from the request
$authorizationHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
// var_dump($authorizationHeader );

// Pass the token to the handleRequest method in the Authenticator
$userData = $authenticator->handleRequest($authorizationHeader);

if ($userData) {
    // Instantiate Rocket model and controller
    $rocketModel = new Rocket($authenticator);
    $controller = new RocketController($rocketModel);

    // Process the request based on the URI
    $uri = $request->getUri()->getPath();
    $segments = explode('/', trim($uri, '/'));

    if ($segments[0] == 'rockets') {
        switch ($segments[1] ?? null) {
            case 'search':
                $controller->searchRocket($request, $response);
                break;
            case null:
                $controller->listRockets($request, $response);
                break;
            default:
                $rocket_id = $segments[1];
                $controller->getRocket($request, $response, $rocket_id);
                break;
        }
    } else {
        echo 'Invalid endpoint';
    }
} else {
    // Handle the case where the token is invalid or missing
    echo 'Invalid or missing authorization token';
}

// Output the response
echo $response->getBody();