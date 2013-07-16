<?php
class MontyHall{
    
    protected $doors;
    
    public function __construct(){
        for ($i=0;$i<3;$i++){
            $this->doors[$i] = 'goat';
        }
        $this->doors[rand(0,2)] = 'car';
    }

    public function getDoors(){
        return(json_encode($this->doors));
    }
    

}
?>