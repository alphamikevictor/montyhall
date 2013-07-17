$(function(){
    start();
});
function start(){
    var mh = new MontyHall();
    var doors = mh.getDoors();
    challenge(doors);
    // $.ajax({
    //     method: 'POST',
    //     url: 'rest/some.php',
    //     success: function(data){
    //         doors = data;
    //         challenge();
    //         }
    // });
}
function challenge(doors){
    for (door in doors){
        $("#doors").append("<div class='span3'><img id='door"+door+"' class='door' src='images/Door.png'></div>");
    }
    showMessageInfo("There are 3 doors, behind 2 of them there are a goat, and behind one of them there is a car, choose one");
    $("img.door").click(function(){
        clickeddoor = this.id.match(/[0-9]+/)[0];
        discoverDoor = 0;
        theOtherDoor = 0;
        if (doors[clickeddoor] == 'car') {
            element = Math.floor((Math.random()*100))%2;
            for (i=0;i<3;i++){
                if ( (doors[i] == 'goat' ) && (element == 0) ){
                    discoverDoor = i; 
                }
                else if (doors[i] == 'goat') {
                    theOtherDoor=i;
                    element--;
                }
            }
        }
        else {
            for (i=0;i<3;i++){
                if ( ( i != clickeddoor ) && doors[i] == 'goat') discoverDoor=i;
                if ( ( i != clickeddoor ) && doors[i] == 'car') theOtherDoor=i;
            }
        }
        $("img.door").off();
        $(".swap").show();
        $(".maintain").show();
        $("#door" + discoverDoor).replaceWith("<img class='swapable' src='images/DoorWithGoat.png'>");
        $("#door" + clickeddoor).replaceWith("<img class='query' src='images/DoorQuery.png'>");
        showMessageInfo("Well, you chosed door number " + (parseInt(clickeddoor) +1) + ", I can discover you there is a Goat in door number " + (discoverDoor +1) +". Do you want to change your door?");
        $(".maintain").click(function(){
            if (doors[clickeddoor] == 'car'){
                showMessageOk("Well done, you WIN a car");
                $(".query").replaceWith("<img class='car' src='images/DoorCar.png'>");
            }
            else {
                showMessageError("Sorry, you win a goat");    
                $(".query").replaceWith("<img class='goat' src='images/DoorWithGoat.png'>");
            }
            $(".swap,.maintain").off();
            $(".restart").show();
        });
        $(".swap").click(function(){
            if (doors[clickeddoor] == 'goat'){
                showMessageOk("Well done, you WIN a car");
                $(".door").replaceWith("<img class='car' src='images/DoorCar.png'>");
            }
            else {
                showMessageError("Sorry, you win a goat");    
                $(".door").replaceWith("<img class='goat' src='images/DoorWithGoat.png'>");
            }
            $(".swap,.maintain").off();
            $(".restart").show();
        });
        $(".restart").click(function(){
            $(".restart,.swap,.maintain").hide();
            $(".restart").off();
            $("#doors").empty();
            $("#messages").empty();
            start();
        });
    });
}
