<!doctype>
<html>
<head>
<script src="js/jquery.js"></script>
<title>The Monty Hall game simulator</title>
<link href="css/style.css" rel="stylesheet" media="screen">
</head>
<body>
</body>
<div id="doors"></div>
<script>
$(function(){
    doors = [];
    $.ajax({
        method: 'POST',
        url: 'rest/getSome.php',
        success: function(data){
            doors = data;
            challenge();
            }
    });
    function challenge(){
        for (door in doors){
            $("#doors").append("<img src='images/Door.png'>");
        }
    }
});
</script>
</html>