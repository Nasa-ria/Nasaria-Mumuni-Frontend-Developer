<?php

namespace App\Controller;

use Nyholm\Psr7\Response;
use Nyholm\Psr7\ServerRequest;

class RocketController{

    public function jsonResponse($data, $statusCode = 200)
    {
        $body = json_encode($data);

        return new Response($statusCode, ['Content-Type' => 'application/json'], $body);
    }

    
    public function listRockets(ServerRequest $request, Response $response)
    {
        try {
            $rocketData = $this->rocketModel->findAll();
            return $this->jsonResponse(['message' => 'Data fetched successfully', 'data' => $rocketData]);
        } catch (\Exception $e) {
            // Handle the exception, log, and return an error response
            return $this->jsonResponse(['error' => $e->getMessage()], 500);
        }
    }







}