$(document).ready(function(){
  $("#signupform").validate({
    rules:{
        fullName:{
            required:true,
            minlength:4
        },
        emailAddress:{
            required:true,
            email:true
        }

    }
  })

})