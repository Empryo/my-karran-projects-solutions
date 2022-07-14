//calculate monhtly payments of a mortgage 
 function calc(price,years,interest){
	 var finalPrice = price * (1 +((interest / 100) * years));
	 var  monthlyPay = finalPrice / (years * 12);
        var payPeriod = finalPrice / monthlyPay ;
 return ["Monthly Payments Would be " + monthlyPay + "$ Payment Period Would Be " + payPeriod + " Months"]
 }
console.log(calc(12, 2, 100))
	


// first quick interest calculator checkm 
  /* function interest(price,intt,period){
      return price * (1 +((intt / 100) * period))}
     
   console.log(interest(10, 60, 3)) */
// the code is correct it calcuatw the profit margin correctly
// aight good now it gives the overall price after interest calculated 
