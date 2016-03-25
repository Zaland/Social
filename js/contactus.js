/* Custom fullname validator */
$.validator.addMethod( "fullname", function( value, element ) {
	return this.optional( element ) || /^[a-z ]+$/i.test( value );
}, "Full name only please" );

$(document).ready(function() {$.validator.addMethod( "lettersonly", function( value, element ) {
	return this.optional( element ) || /^[a-z]+$/i.test( value );
}, "Letters only please" );
    /* On button click, validate the form */
    $('.contactus-btn').click(function() {
       var form = $('#contactus-form');
       form.validate({
           rules: {
               fullname: {
                   required: true,
                   fullname: true
               },
               email: {
                   required: true,
                   email: true
               },
               comment: {
                   required: true
               }
           },
           highlight: function(element) {
               $(element).closest('.form-group').addClass('has-error');
           },
           unhighlight: function(element) {
               $(element).closest('.form-group').removeClass('has-error');
           },
           errorElement: 'span',
           errorClass: 'help-block',
           submitHandler: function(form) {
               /* When the form has been validated, use AJAX to communicated with
                  a php script that sends the email */
               
               var name = $('#fullname').val();
               var email = $('#email').val();
               var comment = $('#comment').val();
               
               var request = $.ajax({
                   method: 'POST',
                   url: 'scripts/email.php',
                   data: {name: name, email: email, comment: comment}
               });
               
               request.done(function(msg){
                   $('#alert').html(msg);
                   $('#fullname').val('');
                   $('#email').val('');
                   $('#comment').val('');
               });
               
               request.fail(function(jqXHR, textStatus) {
                   alert("Request failed: " + textStatus);
               }); 
           }
       });
   });
});