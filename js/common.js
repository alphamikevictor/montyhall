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