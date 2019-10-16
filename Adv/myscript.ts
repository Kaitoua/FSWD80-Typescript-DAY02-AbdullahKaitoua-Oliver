class cars {
   name:string;
   price:number;
   img:string;

   constructor(name, price,img) {
       this.name = name;
       this.price = price;
       this.img = img;
   }

}

class extra extends cars{
	ps:number;
	model:string;

	constructor(name, price,img,ps, model) {
       super (name, price,img);
       this.ps = ps;
       this.model = model;
   }

   mydata() {

     document.getElementById('math').innerHTML += ` <div class="card">
                <img class="card-img-top" src="${this.img}" alt="">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p>Details:</p>
                    <ul class="card-text text-success">
                        <li>${this.model}</li>
                        <li>${this.ps}</li>
                        <li>${this.price}</li>
                    </ul>
                </div>
                <div class="card-footer">
                    <button class="btn-block btn-info" data-toggle="modal" data-target="#exampleModal">Show Price</button>
                </div>
            </div>`;
    }
}

var x1 = new extra("BMW",30000, "img/img1.jpg" ,240,"I8");
x1.mydata();
var x2 = new extra("BMW", 30000, "img/img2.jpg" ,200,"X5");
x2.mydata();
var x2 = new extra("BMW", 30000, "img/img3.jpg" ,200,"x3");
x2.mydata();
var x2 = new extra("BMW", 30000, "img/img4.jpg" ,200,"x1");
x2.mydata();



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
