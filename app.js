"use strict";
var locations=[];
function City(passName,passMin,passMax,passAvg,passArray){
    this.name=passName;
    this.minCust=passMin;
    this.maxCust=passMax;
    this.AvgCookieSale=passAvg;
    this.CookieArray=passArray;
    locations.push(this);
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

function totalRow() {
    var parentElement = document.getElementsByTagName('table');
    var tablefinalRow = document.createElement('tr');
    parentElement[0].appendChild(tablefinalRow);
    var dataCell = document.createElement('td');
    dataCell.textContent = 'Totals';
    tablefinalRow.appendChild(dataCell);

    var finalTotal = 0;
    
    for (var i = 0; i < hourArray.length; i++) {
        var dataCell = document.createElement('td');
        var hourlyTotal =0;
        hourlyTotal= Math.floor(seattle.CookieArray[i] + tokyo.CookieArray[i] + paris.CookieArray[i] + dubai.CookieArray[i] + lima.CookieArray[i]);
        console.log(hourlyTotal);
        dataCell.textContent = hourlyTotal;
        tablefinalRow.appendChild(dataCell);
        finalTotal += hourlyTotal;
    }
    var dataCell = document.createElement('td');
    dataCell.textContent = finalTotal;
    tablefinalRow.appendChild(dataCell);
}

console.log(locations);

function locationRows(){
            
    for(var j=0;j<locations.length;j++){
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




//caling function :

time();
locationRows();
totalRow();
newBranch();
function newBranch(){
    var newBranch=document.getElementById('add-branch');
    newBranch.addEventListener('submit',eventLocation);
}

function eventLocation(event){
    event.preventDefault();

    
    var brach =event.target.branch.value;
    var minCust =parseInt(event.target.minCust.value);
    var maxCust= parseInt(event.target.maxCust.value);
    var cookiesPerSale= event.target.cookiesPerSale.value;
    console.log(event.target.minCust.value);

    var newlocation= new City(brach,minCust,maxCust,cookiesPerSale,[]);
    newlocation.fillCookiArray();
    
    locationRows();
    
}


