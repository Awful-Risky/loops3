var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];	

function loop1 (Array) {
	for (i=0; i<Array.length; i++) {
		console.log(Array[i].age);
	}
}
loop1(students);


function loop2 (Array) {
	for (i=0; i<Array.length; i++) {
		console.log(Array[i].name +', ' + Array[i].city);
	}
}
loop2(students);



function loop3 (Array) {
	for (i=0; i<Array.length; i++) {
		if (Array[i].city === "Boulder") {
			console.log(Array[i].name +' is from ' + Array[i].city);
		}
	}
}
loop3(students);



function loop4 (Array) {
	for (i=0; i<Array.length; i++) {
		if (Array[i].age > 25) {
			console.log(Array[i].name +' is older than 25');
		}
	}
}
loop4(students);






