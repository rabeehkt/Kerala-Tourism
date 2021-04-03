$('button[data-slide-to]').on('click', function(){
    $('#carouselExampleControls').carousel($(this).data('slide-to'));
});

var x= document.getElementById("mail");
var a=document.getElementById("mob");
var p=document.getElementById("pass");
var q=document.getElementById("pass1");

var Regmail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
var Regmob= /^([0-9]{3})([-. ])?([0-9]{3})([-. ])?([0-9]{4})$/;
var Regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
function validate()
{
 
 if(Regmail.test(x.value)!="1")
 {
    window.alert("Email Is Invalid");
    return false
 }
else if (Regmob.test(a.value)!="1")
{
    window.alert("Please enter a valid phone number");
    return false
}
else if(Regpass.test(p.value)!="1")
{
    window.alert("Password Is Invalid");
    window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
    window.alert("try again");
  return false
}

else if(p.value!=q.value)
{
    window.alert("Passwords Doesnt Match, Please Re-enter");
    return false
}
else{
    window.alert("validation Success");
    return true
}
}


var e = document.getElementById("mailid");
var g = document.getElementById("pswd");


function logvalidate()
{
    if(Regmail.test(e.value)!="1")
    {
       window.alert("Email Is Invalid");
       return false
    }
    else if(Regpass.test(g.value)!="1")
    {
        window.alert("Password Is Invalid");
        window.alert("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
        window.alert("try again");
      return false
    } 
    else{
        window.alert("validation Success");
        return true
    }
}


$(document).ready(function () {

    $('#pass').on('keyup', function () {

        let textElement = $(this).val()
        let strength = 0

        $('#typepass').find('h4').html(`Your Password: ${textElement}`)

        if (textElement.length > 0) {
            let sizeElements = textElement.length

            if (sizeElements > 10) {

                strength += 30

            } else {
                let calcMath = (sizeElements * 2)

                strength += calcMath

            }

        }

        let lowerCase = new RegExp(/[a-z]/)
        if (lowerCase.test(textElement)) {
            strength += 16
        }

        let upperCase = new RegExp(/[A-Z]/)
        if (upperCase.test(textElement)) {
            strength += 18
        }

        let regularNumber = new RegExp(/[0-9]/i)
        if (regularNumber.test(textElement)) {
            strength += 16
        }

        let specialChars = new RegExp(/[^a-z0-9]/i)
        if (specialChars.test(textElement)) {
            strength += 20
        }
        
        //Function to produce result
        let renderResult = (strengthData, color) => {
            return $('#strengthResult').html(
                `
                          
            <div class="progress" style="height: 40px;">
                <div class="progress-bar bg-${color}" role="progressbar" style="width: ${strengthData}%" aria-valuenow="${strengthData}" aria-valuemin="0" aria-valuemax="100"><strong style="font-size: 15px">${strength}%</strong></div>
            </div>`
            )
        }

        if (strength < 21) {
            renderResult(strength, 'danger')//red very weak password
        } else
            if (strength > 20 && strength < 41) {
                renderResult(strength, 'warning')//orange weak password
            } else
                if (strength > 40 && strength < 61) {
                    renderResult(strength, 'secondary')//medium password
                } else
                    if (strength > 60 && strength < 81) {
                        renderResult(strength, 'info')// strong password
                    } else {
                        renderResult(strength, 'success')//very strong password
                    }

        

    });

});