"use strict";

function City(passName,passMin,passMax,passAvg,passArray){
    this.name=passName;
    this.minCust=passMin;
    this.maxCust=passMax;
    this.AvgCookieSale=passAvg;
    this.CookieArray=passArray;
}
City.prototype.randNumCust=function(){
    return Math.floor( Math.random()*(this.maxCust- this.minCust)+this.minCust);
}

City.prototype.fillCookiArray=function(){
    for(var i=0;i<14;i++){
        this.CookieArray.push( Math.floor(this.AvgCookieSale*this.randNumCust()));
    }
}

var seattle= new City('Seatle',23,65,6.3,[]);
var tokyo= new City('Tokyo',3,24,1.2,[]);
var dubai= new City('Dubai',11,38,3.7,[]);
var paris= new City('Paris',20,38,2.3,[]);
var lima= new City('Lima',2,16,4.6,[]);

seattle.fillCookiArray();
tokyo.fillCookiArray();
dubai.fillCookiArray();
paris.fillCookiArray();
lima.fillCookiArray();

var locations=[seattle,tokyo,dubai,paris,lima,'Total'];


var div=document.getElementById('citylist');
var table= document.createElement('table');
document.body.appendChild(table);

 var hourArray=[' 6:00am ',' 7:00am ',' 8:00am ', ' 9:00am ',' 10:00am ',' 11:00am ',' 12:00pm ',' 1:00pm',' 2:00pm ',' 3:00pm ',' 4:00pm ', '5:00pm ',' 6:00pm','7:00pm'];



function time(){
    var rowOne=document.createElement('tr');
    table.appendChild(rowOne);
    for(var i=0;i<16;i++){
       
        var th1=document.createElement('th')
        if(i==0){
            th1.textContent='';
            rowOne.appendChild(th1);

        }else if(i==15){
             th1.textContent='Daily Location Total';
              rowOne.appendChild(th1);
        }else{
            th1.textContent=hourArray[i-1];
            rowOne.appendChild(th1);   
        }
    }
}

function locationRows(){
            
    for(var j=0;j<6;j++){
        var rowX= document.createElement('tr');
        table.appendChild(rowX);
        var Totalatday=0;
        for( var i=0;i<16;i++){
            
            var td = document.createElement("td");
            if (i==0){
                td.textContent = locations[j].name;
                rowX.appendChild(td); 
            }else if (i==15){
                td.textContent =Number(Totalatday);
                rowX.appendChild(td);
       
            }else {
                td.textContent =locations[j].CookieArray[i-1];
                rowX.appendChild(td); 
                Totalatday=Totalatday+locations[j].CookieArray[i-1];      
            }
        
         }

    }
}

function totalRow(){
    var rowX= document.createElement('tr');
    table.appendChild(rowX); 
    var td = document.createElement("td");
    td.textContent='Totals';
    table.appendChild(td);

    var finaltot=0;

    
    for( var i=0;i<hourArray.length;i++){

        totalocationPerHour=0;
        var hourtd = document.createElement("td");
        for(var j=0;j<locations.length;j++){
            if (j==5){
                var td = document.createElement("td");
                td.textContent=locations[j];
                table.appendChild(td);
            }
            totalocationPerHour+=locations[j].CookieArray[i];
        }
        hourtd.textContent=totalocationPerHour;
        rowX.appendChild(hourtd);
        finaltot += totalocationPerHour;
    }
    var totaltd = document.createElement("td");
    totaltd.textContent=totalocHour;
    rowX.appendChild(totaltd);
}


console.log(locations);
//caling function :

time();
locationRows();
totalRow();
