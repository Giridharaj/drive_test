function check_drive(){
    const age=document.getElementById('userAge').value;
    const message=document.getElementById('message');
    // convert input to a number
    const a=Number(age);
    //Validation: Check if input is empty or negative
    if(age===""||a<0){
        message.innerText="Please enter a valid age";
        message.className="";
        return;
    }
    //logic: The threshold(18)
    if(age>=18){
        message.innerText=`✅ you are eligible to drive! Buckle up.`;
        message.className="eligible";
    }
    else{
        const yearsleft=18-a;
        message.innerText=`❌ Too young! wait another{yearsleft} year(s)`;
        message.className="non-eligible";
    }
}