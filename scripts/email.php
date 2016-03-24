<?php
    // grab values passed by AJAX
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    $to = "zalandkhan1@gmail.com";
    $subject = "Social Enquiry";
    $from = "From: ".$email;

    if(mail($to, $subject, $comment, $from))
    {
        echo   "<div class='alert alert-success'>
	                <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
                    Successfully sent message
                </div>";
    }
?>