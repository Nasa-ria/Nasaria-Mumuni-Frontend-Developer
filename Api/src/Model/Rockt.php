<?php
namespace App\Model;

class Rocket{

    
    public function findAll()
    {
        return $this->spaceXapi();
    }

}
