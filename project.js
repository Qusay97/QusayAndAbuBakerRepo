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


function eachRefactored(array,variable,variable2,id,tag1,tag2){
	each(array, function(element,i){
		var variable = $(tag1).text(array[i].name)
		$(variable).appendTo(id)
		var variable2 = $(tag2).text("Food: " + array[i].food)
		$(variable2).appendTo(id)
});
}



eachRefactored(chefs,"chef","p","#chefs","<h3></h3>","<p id='pfood'></p>");
eachRefactored(foodtype,"type","food","#type","<h3></h3>","<p id='pfood'></p>");

each(foods, function(element,i){
	var food = $("<p id='pfood'></p>").text(foods[i]);
	$(food).appendTo("#foods")
});


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

function fade(id, time){
	$(id).hide()
setTimeout(function(){
	$(id).show()
},time)
}

fade('#intro', 1000)
fade('#chefs', 2000)
fade('#foods', 3000)
fade('#type', 4000)

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

$("#input").hide()
$("#btn").hide()

var btn2 = $("<button id='btn2'>Order From Us</button>");
btn2.click(function(){
	$("#input").show()
	$("#btn").show()
	btn2.hide()
})
btn2.appendTo("#btn3")

function order(){
	var input = $("#input").val()
	alert(input + " will be ready to be delivered in 30 minutes")
}