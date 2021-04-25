'use strict';

let typeN = prompt('Do you love Space? yes or no');
console.log(typeN);



let stu1= parseInt(prompt('please enter number of student 1:'));
let stu2 = parseInt(prompt('please enter number of student 2:'));

let sum = stu1 + stu2;
console.log('sum= ' , sum);

let NF = prompt('please enter type: (Space of the moon ,Intergalactic space)?');


document.writeln()

if(NF == 'Space of the moon')
    {
      let image1 ='<img src="https://th.bing.com/th/id/OIP.Sd2GZNfifzyv2LvnPSAPTwHaH4?w=177&h=189&c=7&o=5&pid=1.7"/>' ;
      document.writeln('This is Space of the moon' + image1  + "<br>");
    }
    else if(NF == 'Intergalactic space'){
        var image2 = '<img src="https://th.bing.com/th/id/OIP.6rrlxMr4EMKe0v16gNvjWgHaEo?w=297&h=185&c=7&o=5&pid=1.7" /> ';
        document.writeln("This is Intergalactic spacebr" + image2+ "<br>");
    }
    console.log(NF);
  
