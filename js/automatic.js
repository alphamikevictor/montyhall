$(function(){
    
    
    $("#simulate").click(function(){
        try {
            if (!parseInt($("#numbersimulations").val())){
                showMessageError("El número de simulaciones ha de ser un entero");
                return false;
            }
            else{
                iterations = parseInt($("#numbersimulations").val());
                var successOnSwapped = 0;
                var successOnNoSwapped = 0;
                for (i=0;i<iterations;i++){
                    mh = new MontyHall();
                    mh.pickRandomDoor();
                    if (mh.getPrizeSwap()) successOnSwapped++;
                    if (mh.getPrizeNoSwap()) successOnNoSwapped++;
                }
                $("#winSwap").text(successOnSwapped);
                $("#winNoSwap").text(successOnNoSwapped);
                $("#winSwapPercent").text(Math.floor(successOnSwapped*100/iterations));
                $("#winNoSwapPercent").text(Math.floor(successOnNoSwapped*100/iterations));
                $("#resultsSimulation").slideDown(1000);
            }
            return false;
        }
        catch (e){
            console.log(e);
            return false;
        }
        return false;
    });
    
});