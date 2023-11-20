<?php

namespace App\Controller;

use App\Model\Rocket;
use Nyholm\Psr7\Response;
use Nyholm\Psr7\ServerRequest;

class RocketController{


    private $rocketModel;

    public function __construct(Rocket $rocketModel)
    {
        $this->rocketModel = $rocketModel;
    }

    public function jsonResponse($data, $statusCode = 200)
    {
        $body = json_encode($data);

        return new Response($statusCode, ['Content-Type' => 'application/json'], $body);
    }


    public function listRockets(ServerRequest $request, Response $response)
    {
        try {
            $rocketData = $this->rocketModel->findAll();
            return $this->jsonResponse(['message' => 'Data fetched successfully','success' => true, 'data' => $rocketData]);
        } catch (\Exception $e) {
            // Handle the exception, log, and return an error response
            return $this->jsonResponse(['error' => $e->getMessage()], 500);
        }
    }

    
    public function getRocket(ServerRequest $request, Response $response, $rocket_id)
    {

        try {
            $rocketData = $this->rocketModel->findOne($rocket_id);
            // Use your custom jsonResponse method
            return $this->jsonResponse(['message' => 'Data fetched successfully','success' => true, 'data' => $rocketData]);
        } catch (\Exception $e) {
            // Handle the exception, log, and return an error response
            return $this->jsonResponse(['error' => $e->getMessage()], 500);
        }
    }



    public function searchRocket(ServerRequest $request, Response $response)
    {   
        $queryParams = $request->getQueryParams();
        // Extract filters from query parameters
        $status = isset($queryParams['status']) ? $queryParams['status'] : null;
        $originalLaunch = isset($queryParams['original_launch']) ? $queryParams['original_launch'] : null;
        $type = isset($queryParams['type']) ? $queryParams['type'] : null;
    try {

        $rocketData = $this->rocketModel->search($status, $originalLaunch, $type);
        // Send JSON response
        return $this->jsonResponse(['message' => 'Data fetched successfully', 'data' => $rocketData]);
    } catch (\Exception $e) {
        // Handle the exception, log, and return an error response
        return $this->jsonResponse(['error' => $e->getMessage()], 500);
    }
    }

   
   


}