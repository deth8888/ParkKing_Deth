$(document).ready(function () {

    onDeviceReady();

    function onDeviceReady() {

        //KAPAG LOCAL ETO PATHNAME
        var dir = "/ParkKing_Ratchet/www";

        //KAPAG  NASA MOBILE ETO PATHNAME
        //var dir = "/android_asset/www";


        var checkuname = window.localStorage.getItem('backup_email');

        //Display and append


        //check if may nakalogin
        if (location.pathname == dir + '/login.html') {
            var checkuname = window.localStorage.getItem('backup_email');
            if (checkuname == '' || checkuname == null) {} else {
                window.location = "menu.html";
            }

            $("#backup_email").focus();
        }


        if (location.pathname == dir + '/menu.html') {
            if (checkuname == "" || checkuname == null || checkuname == undefined || checkuname == " ") {
                window.location = "index.html"; //Redirection
            }


        }



        //button login

        $("#btnlogin2").click(function () {
            //alert('btnlogin')
            //            alert($("#username").val())
            //            alert($("#password").val())
            $("#btnlogin2").attr("style", "display: none;");
            $("#btnloading").attr("style", "display: block;");
            //ajax select sa registration db ung username at password
            $.ajax({
                    url: "http://superprogrammer.tech/mobile_api.php",
                    type: "GET",
                    dataType: "json",
                    data: {
                        type: "login2",
                        backup_email: $("#backup_email").val(),
                        password: $("#password").val()
                    },
                    ContentType: "application/json",
                    success: function (result) {
                        alert(JSON.stringify(result));
                        alert('good job')
                        $("#btnlogin2").attr("style", "display: block;");
                        $("#btnloading").attr("style", "display: none;");
                        var jsonArray = JSON.parse(JSON.stringify(result));
                        $.each(jsonArray, function (index, value) {
                            var backup_email = value.backup_email;
                            var password = value.password;

                            window.localStorage.setItem("backup_email", backup_email);
                            window.localStorage.setItem("password", password);

                        })

                       
                        ///
                           
        
                        // swal("success","You are now logged in", "success"),
                        //    function (isConfirm) {
                        //      if (isConfirm) {
                        //         alert("good")
                        //            window.location.href = "login2.html"; //Redirection
                        //        }


                        //     }    

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
                        $("#btnlogin2").attr("style", "display: block;");
                        $("#btnloading").attr("style", "display: none;");
                                             
                                             // swal("Oops!", "Something went wrong. Username or Password maybe incorrect. Please try again!", "error"),
                                             //        function (isConfirm) {
                                             //            if (isConfirm) {

                                             //                window.location.href = "login2.html"; //Redirection
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