var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cars = /** @class */ (function () {
    function cars(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
    }
    return cars;
}());
var extra = /** @class */ (function (_super) {
    __extends(extra, _super);
    function extra(name, price, img, ps, model) {
        var _this = _super.call(this, name, price, img) || this;
        _this.ps = ps;
        _this.model = model;
        return _this;
    }
    extra.prototype.mydata = function () {
        document.getElementById('math').innerHTML += " <div class=\"card\">\n                <img class=\"card-img-top\" src=\"" + this.img + "\" alt=\"\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.name + "</h5>\n                    <p>Details:</p>\n                    <ul class=\"card-text text-success\">\n                        <li>" + this.model + "</li>\n                        <li>" + this.ps + "</li>\n                        <li>" + this.price + "</li>\n                    </ul>\n                </div>\n                <div class=\"card-footer\">\n                    <button class=\"btn-block btn-info\" data-toggle=\"modal\" data-target=\"#exampleModal\">Show Price</button>\n                </div>\n            </div>";
    };
    return extra;
}(cars));
var x1 = new extra("BMW", 30000, "img/img1.jpg", 240, "I8");
x1.mydata();
var x2 = new extra("BMW", 30000, "img/img2.jpg", 200, "X5");
x2.mydata();
var x2 = new extra("BMW", 30000, "img/img3.jpg", 200, "x3");
x2.mydata();
var x2 = new extra("BMW", 30000, "img/img4.jpg", 200, "x1");
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