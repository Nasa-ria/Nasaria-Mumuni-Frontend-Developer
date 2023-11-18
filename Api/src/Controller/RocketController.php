<?php

namespace App\Controller;
class RocketController{

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