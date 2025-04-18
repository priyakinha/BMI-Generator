const form=document.querySelector("form");
//this usecase will give empty value
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector("#in1").value);
    const weight=parseInt(document.querySelector("#in2").value);
    const results=document.querySelector("#results");
    if(height==="" || height<0 || isNaN(height)){
        results.style.color="red";
        results.innerHTML="Please give a valid height! "
    }
    else if(weight==="" || weight<0 || isNaN(weight)){
        results.style.color="red";
        results.innerHTML="Please give a valid weight!"
    }
    else{
       const bmi= (weight/((height*height)/10000)).toFixed(2);
       //show the result
       results.style.color="black";
       let msg="";
    //    results.innerHTML=`<span>${bmi}</span>`;
       if(bmi<18.6){
        msg=`<span>You are UnderWeight</span>`
       }
       else if(bmi>=18.6 && bmi<=24.9){
        msg=`<span>You are Normal Weight</span>`
       }
     else if(bmi>=24.9){
        msg=`<span>You are OverWeight</span>`
       }
       results.innerHTML=`<span>${bmi} </span><br><br> <span> ${msg}</span>`;
    }
    

})

