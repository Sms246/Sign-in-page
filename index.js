function validateform()
{
    var retval=true;   // Making return variable
    var name=document.forms['myform']['iname'].value;      // Making input variable name      
    var email=document.forms['myform']['iemail'].value;      // Making input variable email
    var phone=document.forms['myform']['iphone'].value;      // Making input variable phone number
    var password=document.forms['myform']['ipass'].value;      // Making input variable password
    var confirm=document.forms['myform']['iconf'].value;      // Making input variable confirm password
    if(name.length<5)  // Name condition
    {
        seterror('name','*Name length should be greater than 5');
        retval=false;
    }
    if(email < 10)  //Email condition
    {
        seterror('email','*Enter correct email id');
        retval=false;
    }
    if(phone.length != 10 || phone == 123456789)  // Phone number condition
    {
        seterror('phone','*Enter correct phone number');
        retval=false;
    }
    if(password < 8)  // Password condition
    {
        seterror('password','*Password is not strong');
        retval=false;
    }
    else if(password == 'password')
    {
        seterror('password','*Password is not strong');
        retval=false;
    }
    else if(password == name)
    {
        seterror('password','*Password is not strong');
        retval=false;
    }
    if(confirm != password)  //Confirm password condition
    {
        seterror('confirm','*Does not match password');
        retval=false;
    }
    return retval;
}

function seterror(id,error)  // Function which shows error
{
    element = document.getElementById(id);
    element.getElementsByClassName('ferror')[0].innerHTML=error;
}