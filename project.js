// each function for abstraction
function each(coll, func) { 
 if (Array.isArray(coll)) { 
   for (var i = 0; i < coll.length; i++) { 
         func(coll[i], i); 
   } 
 } else { 
     for (var key in coll) { 
        func(coll[key], key); 
       } 
 } 
}





//data we use in the website
var chefs = [
{name: 'Zaid', food: [ 'Mansaf', 'magluba', 'salat', 'Kabab', 'Mutabal' ]},
{name: 'Kushi', food: [ 'Chaat', 'Dal', 'Biryni', 'Roti', 'Naan'] },
{name: 'Umed', food: [ 'Pide', 'Kofta', 'Baklava', 'Kabab', 'Lahmajoun']},
{name: 'Esra', food: [ 'Houmous', 'Kibbeh', 'Zaattar', 'Sujuk', 'Pastirma']}
] 


var foods = ['Mansaf', 'magluba', 'salat', 'Kabab', 'Mutabal', 'Chaat', 'Dal', 'Biryni', 'Roti', 'Naan', 
'Pide', 'Kofta', 'Baklava', 'Kabab', 'Lahmajoun', 'Houmous', 'Kibbeh', 'Zaattar', 'Sujuk', 'Pastirma']


var foodtype = [
{name: 'Jordanian', food: [ 'Mansaf', 'magluba', 'salat', 'Kabab', 'Mutabal' ]},
{name: 'Indian', food: [ 'Chaat', 'Dal', 'Biryni', 'Roti', 'Naan'] },
{name: 'Turkish', food: [ 'Pide', 'Kofta', 'Baklava', 'Kabab', 'Lahmajoun']},
{name: 'Syrian', food: [ 'Houmous', 'Kibbeh', 'Zaattar', 'Sujuk', 'Pastirma']}
] 


//older code
// var h3 = $("<h3></h3>")
// var p = $("<p></p>")
// var name1 = $("<h3></h3>").text(chefs[0].name)
// var p1 = p.text("Food: " + chefs[0].food)
// var name2 = $("<h3></h3>").text(chefs[1].name)
// var p2 = p.text("Food: " + chefs[1].food)
// $(name1).appendTo('#chefs')
// $(p1).appendTo('#chefs')
// $(name2).appendTo('#chefs')
// $(p2).appendTo('#chefs')


// for (var i = 0; i < chefs.length; i++) {
// var chef = $("<h3></h3>").text(chefs[i].name)
// $(chef).appendTo('#chefs')
// var p = $("<p id='p'></p>").text("Food: " + chefs[i].food)
// $(p).appendTo('#chefs')
// }

//abstraction function for each
function eachRefactored(array,variable,variable2,id,tag1,tag2){
	each(array, function(element,i){
		var variable = $(tag1).text(array[i].name)
		$(variable).appendTo(id)
		var variable2 = $(tag2).text("Food: " + array[i].food)
		$(variable2).appendTo(id)
});
}


//used refacored each
eachRefactored(chefs,"chef","p","#chefs","<h3></h3>","<p id='pfood'></p>");
eachRefactored(foodtype,"type","food","#type","<h3></h3>","<p id='pfood'></p>");
// each for array
each(foods, function(element,i){
	var food = $("<p id='pfood'></p>").text(foods[i]);
	$(food).appendTo("#foods")
});

// older code
// each(chefs, function(element,i){
// 	var chef = $("<h3></h3>").text(chefs[i].name)
// 	$(chef).appendTo('#chefs')
// 	var p = $("<p id='pfood'></p>").text("Food: " + chefs[i].food)
// 	$(p).appendTo('#chefs')
// });




// each(foodtype, function(element,i){
// 	var type = $("<h3></h3>").text(foodtype[i].type)
// 	$(type).appendTo('#type')
// 	var food = $("<p id='pfood'></p>").text("Food: " + foodtype[i].food)
// 	$(food).appendTo('#type')
// });
// the fade effect function
function fade(id, time){
	$(id).hide()
setTimeout(function(){
	$(id).show()
},time)
}
// calling the function
fade('#intro', 1000)
fade('#chefs', 2000)
fade('#foods', 3000)
fade('#type', 4000)

//older code
// $('#intro').hide()
// setTimeout(function(){
// 	$('#intro').show()
// },1000)

// $('#chefs').hide()
// setTimeout(function(){
// 	$('#chefs').show()
// },2000)

// $('#foods').hide()
// setTimeout(function(){
// 	$('#foods').show()
// },3000)

// $('#type').hide()
// setTimeout(function(){
// 	$('#type').show()
// },4000)
//hiding the elements
$("#input").hide()
$("#btn").hide()
//making the button function
var btn2 = $("<button id='btn2'>Order From Us</button>");
btn2.click(function(){
	$("#input").show()
	$("#btn").show()
	btn2.hide()
})
btn2.appendTo("#btn3")

//the order function for the button
function order(){
	var input = $("#input").val()
	alert(input + " will be ready to be delivered in 30 minutes")
}