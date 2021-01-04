"use strict";


//function City(){
   // this.name=passedname;
    //this.minCust=passedminCust;
    //this.maxCust=passedmaxCust;
    //this.AvgCookieSale=passedavg;
    //this.CookieArray
//}
//City.prototype.randNumCust=function(){
  //  return Math.floor( Math.random()*(this.maxCust- this.minCust)+this.minCust);  
//}
//var seattle=

var seattle= {
    name: 'Seatlle',
    minCust: 23,
    maxCust:65,
    AvgCookieSale:6.3,
    randNumCust: function(){
        return Math.floor( Math.random()*(this.maxCust- this.minCust)+this.minCust);
    },
    CookieArray:[]
};


var tokyo= {
    name: 'Tokyo',
    minCust:3,
    maxCust:24,
    AvgCookieSale:1.2,
    randNumCust: function(){
        return Math.floor( Math.random()*(this.maxCust- this.minCust)+this.minCust);
    },
    CookieArray:[]
    
};


var dubai= {
    name: 'Dubai',
    minCust: 11,
    maxCust:38,
    AvgCookieSale:3.7,
    randNumCust: function(){
        return Math.floor( Math.random()*(this.maxCust- this.minCust)+this.minCust);
    },
    CookieArray:[]
};


var paris= {
    name: 'Paris',
    minCust: 20,
    maxCust:38,
    AvgCookieSale:2.3,
    randNumCust: function(){
        return Math.floor( Math.random()*(this.maxCust- this.minCust)+this.minCust);
    },
    CookieArray:[]
};


var lima= {
    name:'Lima',
    minCust: 2,
    maxCust:16,
    AvgCookieSale:4.6,
    randNumCust: function(){
        return Math.floor( Math.random()*(this.maxCust- this.minCust)+this.minCust);
    },
    CookieArray:[]
};


function servedCookiePerHour(){
    var CookieArray= [];
    var hourArray=[' 6am: ',' 7am: ',' 8am: ', ' 9am: ',' 10am: ',' 11am: ',' 12pm: ',' 1pm: ',' 2pm: ',' 3pm: ',' 4pm: ', '5pm: ',' 6pm:',' Total '];
    var cityArray= [seattle,tokyo,dubai,paris,lima];
    

    console.log(CookieArray);
    console.log(hourArray);
    console.log(counter);


    for(var i=0;i<5;i++){
        var counter = 0;
       for(var j=0;j<14;j++){


        var div = document.getElementById('citylist');
        var listItem= document.createElement("li");
        
         if (j==0){
           CookieArray[0]= cityArray[i].name;
           console.log(CookieArray[0]);
        }else if(j==13){

            console.log(counter);
            cityArray[i].CookieArray[j]=hourArray[j]+ counter;
        }
       else{
        var randNum =   Math.floor(cityArray[i].randNumCust()*cityArray[i].AvgCookieSale);  
        CookieArray[j]=hourArray[j] + randNum;
        counter=counter+randNum;
         }
         
    cityArray[i].CookieArray=CookieArray;
    listItem.textContent=cityArray[i].CookieArray[j];
    div.appendChild(listItem);}
    
    
        }
    
    
}

servedCookiePerHour();

