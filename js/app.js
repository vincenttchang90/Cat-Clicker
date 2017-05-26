'use strict'
var names = ["Cat 1", "Cat 2"];
$('#cat').append("<section id='cat1'><h2>"+names[0]+"</h2><img src='https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426' alt='cat1'></section>");
$('#cat').append("<section id='cat2'><h2>"+names[1]+"</h2><img src='https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496' alt='cat2'></section>")

var cat1 = 0;
$('#cat1').click(function(){
	$('#clicks1').remove();
	cat1 +=1;
	$('#cat1').append("<h3 id='clicks1'>Clicks: "+ cat1 +"</h3>");
})

var cat2 = 0;
$('#cat2').click(function(){
	$('#clicks2').remove();
	cat2 +=1;
	$('#cat2').append("<h3 id='clicks2'>Clicks: "+ cat2 +"</h3>");
})
