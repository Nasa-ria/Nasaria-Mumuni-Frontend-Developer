<?php

namespace App;

use App\Model\Rocket;
use App\Controller\RocketController;
use Nyholm\Psr7\Factory\Psr17Factory;

require_once './vendor/autoload.php';

$psr17Factory = new Psr17Factory();
$request = $psr17Factory->createServerRequest('GET', $_SERVER['REQUEST_URI']);
$response = $psr17Factory->createResponse();

$uri = $request->getUri()->getPath();

$rocketModel = new Rocket();
$controller = new RocketController($rocketModel);


$segments = explode('/', trim($uri, '/'));

if ($segments[0] == 'rockets') {
    switch ($segments[1] ?? null) {
        case 'search':
            $response = $controller->searchRocket($request, $response);
            break;
        case null:
            $response = $controller->listRockets($request, $response);
            break;
        default:
            $rocket_id = $segments[1];
            $response = $controller->getRocket($request, $response, $rocket_id);
            break;
    }
} else {
    // Handle other routes or return a default response if needed
    echo 'Invalid endpoint';
}

// Output the response
echo $response->getBody();