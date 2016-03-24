<?php
    require("content/header.html");
    require("content/navbar.html");
?>

        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4">
                    <h2 class="text-center"> Meet our team! </h2>
                    <img src="img/person.png" class="img-circle img-responsive" alt="ZK">
                    <p class="text-center"> <br> Zaland Khan </p>
                    <p class="text-center"> Lead Developer </p>
                </div>
            </div>
            
            <hr>
            
            <div class="row">
                <div class="col-lg-6 col-lg-offset-3">
                    <form id="contactus-form">
                        <h2 class="text-center"> Contact Us </h2>
                        <div class="form-group">
                            <label class="control-label" for="fullname"> Full Name </label>
                            <input type="text" class="form-control" name="fullname" placeholder="Enter Full Name">
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="email"> Email </label>
                            <input type="text" class="form-control" name="email" placeholder="Enter Email">
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="comment"> Comment </label>
                            <textarea class="form-control" name="comment" rows="3" placeholder="Enter Comment"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-default btn-block contactus-btn"> Send Message </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

<?php require("content/footer.html"); ?>