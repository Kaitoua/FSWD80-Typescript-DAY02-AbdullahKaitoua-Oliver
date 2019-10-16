class Person {
   name:string;
   age:number;
   jobTitle:string;

   constructor(name, age,jobTitle) {
       this.name = name;
       this.age = age;
       this.jobTitle = jobTitle;
   }

 myfunction() {
        console.log("Hello there, My name is " + this.name + " and I am "+ this.age + " years old, and I am a "+this.jobTitle);
    }

}

var serri = new Person("serri",30,"debugger");
serri.myfunction();


//basic 2
class extra extends Person{
	salary:number;
	jobLocation:string;

	constructor(age,name,jobTitle,salary, jobLocation) {
       super (age, name, jobTitle);
       this.salary = salary;
       this.jobLocation = jobLocation;
   }

   basic2() {
        console.log("Hello there, My name is " + this.name + " and I am "+ this.age + " years old, and I am a "+this.jobTitle + " and I get " + this.salary + "every month, and I work in " + this.jobLocation);
    }
}

var basicTwo = new extra(18, "Oliver", "WebDeveloper" ,880,"Vienna");
basicTwo.basic2();
// let howard = new Employee("Howard", "Sales");

// console.log(howard.getElevatorPitch());

// console.log(howard.name);









/*  
class Person {

   protected name: string;

   constructor(name: string) { this.name = name; }

}

 

class Employee extends Person {

   private department: string;

 

   constructor(name: string, department: string) {

       super(name);

       this.department = department;

   }

 

   public getElevatorPitch() {

       return `Hello, my name is ${this.name} and I work in ${this.department}.`;

   }

}

 

let howard = new Employee("Howard", "Sales");

console.log(howard.getElevatorPitch());

console.log(howard.name);

 

what will be the result for this code?

Hint : check the property type






  
/*

for (let i=1; i <= 10; ++i){


	var divRight = document.createElement('div');
	divRight.setAttribute('class', 'mydiv');

	for (let j=1; j <= 10; ++j){

	var result2 : any = i * j;



var output = document.createElement('p');

let text =` ${i} × ${j} = ${result2} `;


	
	divRight.appendChild(output);
	output.innerHTML += text;

	div.appendChild(divRight);

	}


}


/*var div =document.getElementById('math');
div.innerHTML = '';

  var divLeft = document.createElement('div');
  var divRight = document.createElement('div');

for (let i=1; i <= 10; ++i){

	var result1 : any = i * 1;



var output1 = document.createElement('p');

let text =`${result1} × 1 =${result1}`;


	
	divLeft.appendChild(output1);
	output1.innerHTML += text;

	div.appendChild(divLeft);


}


for (let i=1; i <= 10; ++i){

	var result1 : any = i * 1;
	var result2 : any = i * 2;



var output2 = document.createElement('p');

let text =`${result1} × 2 =${result2}`;


	
	divRight.appendChild(output2);
	output2.innerHTML += text;

	div.appendChild(divRight);


}



      /*   var div = document.getElementById('myteam');     // The parent <div>.
	    //        div.innerHTML = '';



			//  for (var i =0;i< teamMembers.length ; i++) {

			    var divLeft = document.createElement('div');
			                divLeft.innerHTML = teamMembers[i].name + '<br>' + teamMembers[i].email;

      			var img = document.createElement('img');    // Create an <img> element.
                img.src = teamMembers[i].image;                // The image source from JSON array.


                var divRight = document.createElement('div');
                divRight.setAttribute('style', 'border-left: solid 1px #ddd;');
                divRight.appendChild(img);

               
               
                // Add the child DIVs to parent DIV.
                div.appendChild(divLeft);
                div.appendChild(divRight);



                
             

   
  }*/
