function showMessage(type,message){
    $("#messages").append('<div class="alert alert-'+type+'" style="display:none"><button type="button" class="close" data-dismiss="alert">&times;</button>' + message + '</div>');
    $("#messages .alert").last().show(1000);
}

function showMessageInfo(message){
    showMessage('info',message);
}

function showMessageOk(message){
    showMessage('success',message);
}

function showMessageError(message){
    showMessage('error',message);
}

function MontyHall() {
    this.doors = [];
    for (var i=0;i<3;i++){
        this.doors[i]='goat';
    }
    var i=Math.floor((Math.random()*100))%3
    this.doors[i]='car';
}

MontyHall.prototype.getDoors = function(){
    return this.doors;
};



$(function(){
    $("li.interactive").click(function(){
        if (!($("li.interactive").hasClass("active"))){
            $("li.interactive").addClass("active");
            $("li.automatic").removeClass("active");
            $("#automatic").hide();
            $("#interactive").show();
         $("#messages").empty();
        }
    });
    $("li.automatic").click(function(){
        if (!($("li.automatic").hasClass("active"))){
            $("li.automatic").addClass("active");
            $("li.interactive").removeClass("active");
            $("#interactive").hide();
            $("#automatic").show();
         $("#messages").empty();
        }
    });
});