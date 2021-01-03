"use strict";
var seattle= {
    minCust: 23,
    maxCust:65,
    AvgCookieSale:6.3,
    randNumCust: function(){
        return Math.floor( Math.random()*(this.maxCust- this.minCust)+this.minCust);
    },
    CookieArray:[]
};
var tokyo= {
    minCust:3,
    maxCust:24,
    AvgCookieSale:1.2,
    randNumCust: function(){
        return Math.floor( Math.random()*(this.maxCust- this.minCust)+this.minCust);
    },
    CookieArray:[]
    
};
var dubai= {
    minCust: 11,
    maxCust:38,
    AvgCookieSale:3.7,
    randNumCust: function(){
        return Math.floor( Math.random()*(this.maxCust- this.minCust)+this.minCust);
    },
    CookieArray:[]
};

var paris= {
    minCust: 20,
    maxCust:38,
    AvgCookieSale:2.3,
    randNumCust: function(){
        return Math.floor( Math.random()*(this.maxCust- this.minCust)+this.minCust);
    },
    CookieArray:[]
};
var lima= {
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
    console.log(CookieArray);
    var hourArray=[' 6am: ',' 7am: ',' 8am: ', ' 9am: ',' 10am: ',' 11am: ',' 12pm: ',' 1pm: ',' 2pm: ',' 3pm: ',' 4pm: ', '5pm: ',' 6pm:',' Total '];
    console.log(hourArray);
    var cityArray= [seattle,tokyo,dubai,paris,lima];
    var counter = 0;
    console.log(counter);
    for(var i=0;i<5;i++){
    for(var j=0;j<14;j++){
    if (j==13){
        CookieArray[13]=hourArray[13] +counter;

    }else{
    var randNum =   Math.floor(cityArray[i].randNumCust()*cityArray[i].AvgCookieSale);  
    CookieArray[j]=hourArray[j] + randNum;
    counter=randNum+randNum;
    }
    
    cityArray[i].CookieArray=CookieArray;}



    var article = document.getElementById('citylist');
    var para= document.createElement('article');
    article.appendChild(para);

    var listItem= document.createElement("li");
    listItem.textContent=cityArray[i].CookieArray;
    article.appendChild(listItem);

    
    }
    
    
}

servedCookiePerHour();