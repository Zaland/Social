$(document).ready(function() {
    /* On button click, validate the form */
    $('.contactus-btn').click(function() {
       var form = $('#contactus-form');
       form.validate({
           rules: {
               fullname: {
                   required: true,
                   lettersonly: true
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
           unhighligh: function(element) {
               $(element).closest('.form-group').removeClass('has-error');
           },
           errorElement: 'span',
           errorClass: 'help-block',
           submitHandler: function(form) {
               alert('test');
           }
       });
   });
});