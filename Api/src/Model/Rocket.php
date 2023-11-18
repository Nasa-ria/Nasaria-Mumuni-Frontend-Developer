<?php
namespace App\Model;

class Rocket{

    private $apiUrl;
    
    public function __construct()
    {
       $this->apiUrl = 'https://api.spacexdata.com/v3/rockets';
    }


    private function spaceXapi($param=""){
        $ch = curl_init($this->apiUrl  .$param);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $data = curl_exec($ch);
        // Check for cURL errors
        if (curl_errno($ch)) {
            throw new \Exception('Failed to fetch data from SpaceX API');
        }
        curl_close($ch);
        return json_decode($data, true);
    }



    public function findAll()
    {
        return $this->spaceXapi();
    }

    public function findOne($rocket_id)
    {   
        $concat = '/'.$rocket_id;
        return $this->spaceXapi($concat);
     }


     
    public function search($status, $originalLaunch, $type)
    {
        $queryParams = [
            'status' => $status,
            'original_launch' => $originalLaunch,
            'type' => $type,
        ];
    
        $queryString = http_build_query(array_filter($queryParams));
        $queryString = $queryString ? '?' . $queryString : '';
    
        return $this->spaceXapi($queryString);
    }
}
