$(document).ready(function () {

    onDeviceReady();

    function onDeviceReady() {

        //KAPAG LOCAL ETO PATHNAME
        var dir = "/ParkKing_Ratchet/www";

        //KAPAG  NASA MOBILE ETO PATHNAME
        //var dir = "/android_asset/www";


        var checkuname = window.localStorage.getItem('username');

        //Display and append


        //check if may nakalogin
        if (location.pathname == dir + '/login.html') {
            var checkuname = window.localStorage.getItem('username');
            if (checkuname == '' || checkuname == null) {} else {
                window.location = "search.html";
            }

            $("#username").focus();
        }


        if (location.pathname == dir + '/search.html') {
            if (checkuname == "" || checkuname == null || checkuname == undefined || checkuname == " ") {
                window.location = "index.html"; //Redirection
            }

        }



        //button login

        $("#btnsignup").click(function () {

            

            $("#btnsignup").attr("style", "display: none;");
            $("#btnloading").attr("style", "display: block;");

            // alert($("#name").val())
            // alert($("#username").val())
            // alert($("#backup_email").val())
            // alert($("#password").val())
            // alert($("#contactnum").val())
        
            var name =$("#name").val();
            var username = $("#username").val();
            var backup_email =$("#backup_email").val();
            var password = $("#password").val();
            var contactnum =$("#contactnum").val();
            //ajax select sa registration db ung username at password
            $.ajax({
                    beforeSend: function() { },
                    url: "http://superprogrammer.tech/mobile_api.php",
                    type: "GET",
                    // dataType: "json",
                    data: {
                        type: "signup",
                        name: $("#name").val(),
                        username: $("#username").val(),
                        backup_email: $("#backup_email").val(),
                        password: $("#password").val(),
                        contactnum: $("#contactnum").val()
                    },
                    // ContentType: "application/json",
                    success: function (result) {
                        var res = JSON.stringify(result);

                        if(res == '"exist"')
                        {
                             swal({
                            title:'Warning!',
                            text: 'Exist!',
                            type:'error',
                            timer: 1500,
                            showConfirmButton: false
                            }, function(){
                             window.location.href = "signup.html";
                            });  

                        }
                        else
                        {
                            alert ("Thank you for Registering with us! you can login now")
                            $("#btnsignup").attr("style", "display: block;");
                            $("#btnloading").attr("style", "display: none;");
                            var jsonArray = JSON.parse(JSON.stringify(result));

                            swal({
                            title: "Success!",
                            text: "Thank you for registering with us! You can now log in to your account.",
                            type: "success",
                            timer: 2000,
                            showConfirmButton: false
                            }, function(){
                             window.location.href = "index.html";
                            });
                        }
                        // $.each(jsonArray, function (index, value) {
                        //     var name = value.name;
                        //     var username = value.username;
                        //     var backup_email = value.backup_email;
                        //     var password = value.password;
                        //     var contactnum =value.contactnum;

                        //     window.localStorage.setItem("name",name);
                        //     window.localStorage.setItem("username", username);
                        //     window.localStorage.setItem("backup_email", backup_email);
                        //     window.localStorage.setItem("password", password);
                        //     window.localStorage.stemItem("contactnum", contactnum);

                        // })

                       
                        ///
                      	// swal("Thank you for Registering with us! you can login now", "success"),
                       //     function (isConfirm) {
                       //       if (isConfirm) {
                       //       	alert("good")
                       //             window.location.href = "index.html"; //Redirection
                       //         }


                       //      }
                            

                    },
                    error: function (err) {
                        alert(JSON.stringify(err) + "error toh")
                        $("#btnsignup").attr("style", "display: block;");
                        $("#btnloading").attr("style", "display: none;");
                                             
                                             // swal("Oops!", "Something went wrong. Please fill up the required fields!", "error"),
                                             //        function (isConfirm) {
                                             //            if (isConfirm) {

                                             //                window.location.href = "signup.html"; //Redirection
                                             //            }
                                             //        }

                            swal({
                            title:'Warning!',
                            text: 'Something went wrong. Please fill up the required fields!',
                            type:'error',
                            timer: 1500,
                            showConfirmButton: false
                            }, function(){
                             window.location.href = "signup.html";
                            });  


                    }
                }) //ajax end
                // Stop default behaviour until ajax request has been done
                //e.preventDefault();
        });
    }
});