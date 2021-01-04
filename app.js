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
        this.CookieArray.push(this.AvgCookieSale*this.randNumCust());
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

var locations=[seattle,tokyo,dubai,paris,lime,'Total'];


var dive=document.getElementById('citylist');
var table= document.createElement('table');
div.appendChild(table);


//caling function :

time();
locationRows();
totalRow();


function time(){
    
    for(var i=0;i<17;i++){
        var rowOne=document.createElement('tr');
        table.appendChild(rowOne);
        var hd=document.createElement('th');
        var c = 6; 
        if(i=0){
            hd1.textContent='';
            rowOne.appendChild(hd);

        }else if(i=16){
            hd1.textContent= 'Daily Location Total';
            rowOne.appendChild(hd);
        }else{
            hd1.textContent= c+':00';
            rowOne.appendChild(hd); 
        }
        c++
    }
}

function locationRows(){
            
    for(j=0;j<6;j++){
    

        for( var i=0;i<17;i++){
            var rowX= document.createElement('tr');
            table.appendChild(rowX);
            if (i==0){
                var td = document.createElement("td");
                td.textContent = locations[j.name];
                rowX.appendChild(td); 
             
            }else {
                var td = document.createElement("td");
                td.textContent =
                rowX.appendChild(td);       
            }
        
         }

    }
}

function totalRow(){


    for( var i=0;i<17;i++){
        var totalRow=document.createElement('tr');
        table.appendChild(totalRow);
        
        var Total=0;

        if (i==0){
            
            var td = document.createElement("td");
            td.textContent = 'Total';
            totalRow.appendChild(td); 
     
        }else {
            var td = document.createElement("td");
            td.textContent =
            totalRow.appendChild(td);
        }           
    }

}

