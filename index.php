<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>.:: Monty Hall game simulation ::.</title>
<link href="css/bootstrap.css" rel="stylesheet">
<script src="js/jquery.js"></script>
<script src="js/common.js"></script>
<script src="js/interactive.js"></script>
<script src="js/bootstrap.js"></script>
<style type="text/css">
body {
    padding-top: 60px;
	padding-bottom: 40px;
}

.sidebar-nav {
	padding: 9px 0;
}

@media ( max-width : 980px) { /* Enable use of floated navbar text */
	.navbar-text.pull-right {
		float: none;
		padding-left: 5px;
		padding-right: 5px;
	}
}
</style>
</head>

<body>
</body>
<!--  Menu Start -->
<div class="navbar navbar-inverse navbar-fixed-top">
	<div class="navbar-inner">
		<div class="container-fluid">
			<a class="brand" href="index.jsp">.:: Quiero Ganar La Primitiva	::.</a>
			<div class="nav-collapse collapse">
				<ul class="nav">
					<li><a href="index.jsp">Inicio</a></li>
					<li><a href="apuesta.jsp">Realizar apuesta</a></li>
				</ul>
    <!--  Menu Start -->
	<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container-fluid">
				<a class="brand" href="index.jsp">.::   Monty Hall Game Simulation	::.</a>
				<div class="nav-collapse collapse">
					<ul class="nav">
						<li class="active"><a>Interactive</a></li>
						<li><a>Automatic Simulation</a></li>
                        <li><a href="https://github.com/alphamikevictor/montyhall">Browse code on GitHub</a></li>
					</ul>
				</div>
				<!--/.nav-collapse -->
			</div>
		</div>
	</div>
	<!--  Menu End -->				
			</div>
			<!--/.nav-collapse -->
		</div>
	</div>
</div>
<!--  Menu End -->
<div class="row-fluid">
    <div class="span1"></div>
    <div class="span10">
        <div id="messages">
        </div>
    </div>
    <div class="span1"></div>
</div>

<div class="container-fluid">
    <div class="row-fluid">
        <div class="span3">
            <div class="well sidebar-nav">
            <ul class="nav nav-list">
            <li><a href="http://alosfogones.com">A Los Fogones</a></li>
            <li><a href="http://recipesfromspain.com">Recipes from Spain</a></li>
            <li><a href="http://github.com/alphamikevictor">My projects on GitHub</a></li>
            </ul>
            </div><!--/.well -->
        </div><!--/span-->
        <div class="span9">
            <div class="hero-unit">
                <div class="row-fluid" id="doors">
                </div>
                <div class="row-fluid"><div class="span9"></div></div>
                <div class="row-fluid">
                    <div class="span3"><a class="btn btn-large btn-primary swap" style="display:none">Swap</a></div>
                    <div class="span3"><a class="btn btn-large btn-primary maintain" style="display:none">Don't swap</a></div>
                    <div class="span3"><a class="btn btn-large btn-primary restart" style="display:none">Restart</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
</html>