$(document).ready(function () {

    onDeviceReady();

    function onDeviceReady() {

        //KAPAG LOCAL ETO PATHusername
        var dir = "/ParkKing_Ratchet/www";

        //KAPAG  NASA MOBILE ETO PATHusername
        //var dir = "/android_asset/www";


        var checkuusername = window.localStorage.getItem('username');

        //Display and append


        //check if may nakalogin
        if (location.pathusername == dir + '/login.html') {
            var checkuusername = window.localStorage.getItem('username');
            if (checkuusername == '' || checkuusername == null) {} else {
                window.location = "menu.html";
            }

            $("#username").focus();
        }


        if (location.pathusername == dir + '/menu.html') {
            if (checkuusername == "" || checkuusername == null || checkuusername == undefined || checkuusername == " ") {
                window.location = "login.html"; //Redirection
            }


        }



        //button login

        $("#btnlogin").click(function () {
            //alert('btnlogin')
            //            alert($("#username").val())
            //            alert($("#password").val())
            $("#btnlogin").attr("style", "display: none;");
            $("#btnloading").attr("style", "display: block;");
            //ajax select sa registration db ung username at password
            $.ajax({
                    url: "http://superprogrammer.tech/mobile_api.php",
                    type: "GET",
                    dataType: "json",
                    data: {
                        type: "login",
                        username: $("#username").val(),
                        password: $("#password").val()
                    },
                    ContentType: "application/json",
                    success: function (result) {
                        alert(JSON.stringify(result));
                        alert('good job')
                        $("#btnlogin").attr("style", "display: block;");
                        $("#btnloading").attr("style", "display: none;");
                        var jsonArray = JSON.parse(JSON.stringify(result));
                        $.each(jsonArray, function (index, value) {
                            var username = value.username;
                            var password = value.password;

                            window.localStorage.setItem("username", username);
                            window.localStorage.setItem("password", password);

                        })

                       
                        ///
                           
        
						// swal("success","You are now logged in", "success"),
      //                      function (isConfirm) {
      //                        if (isConfirm) {
      //                        	alert("good")
      //                              window.location.href = "index.html"; //Redirection
      //                          }
      //                       } 

     					 swal({
  							title: "Success!",
  							text: "You are now logged in.",
  							type: "success",
  							timer: 2000,
  							showConfirmButton: false
							}, function(){
     						 window.location.href = "search.html";
							});  


                    },
                    error: function (err) {
                        alert(JSON.stringify(err) + "error toh")
                        $("#btnlogin").attr("style", "display: block;");
                        $("#btnloading").attr("style", "display: none;");
                                             

                                             // swal("Oops!", "Something went wrong. username or Password maybe incorrect. Please try again!", "error"),
                                             //        function (isConfirm) {
                                             //            if (isConfirm) {

                                             //                window.location.href = "index.html"; //Redirection
                                             //            }
                                             //        }

                            swal({
  							title:'Warning!',
                			text: 'Invalid user or password!',
                			type:'warning',
  							timer: 1000,
  							showConfirmButton: false
							}, function(){
     						 window.location.href = "index.html";
							});  

                    }
                }) //ajax end
                // Stop default behaviour until ajax request has been done
                //e.preventDefault();
        });
    }
});