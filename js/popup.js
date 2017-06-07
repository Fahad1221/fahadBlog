// header                
                document.addEventListener('DOMContentLoaded', function() {
                    var link = document.getElementById('open-nav');
                    // onClick's logic below:
                    link.addEventListener('click', function() {
                        openNav();
                    });
                });


                document.addEventListener('DOMContentLoaded', function() {
                    var links = document.getElementById('close-nav');
                    // onClick's logic below:
                    links.addEventListener('click', function() {
                        closeNav();
                    });
                });





                /* Set the width of the side navigation to 25% */
                function openNav() {
                    var stupid = document.getElementById("mySidenav");
                    stupid.style.width = "250px";
                }

                /* Set the width of the side navigation to 0 */
                function closeNav() {
                    var fool = document.getElementById("mySidenav");
                    fool.style.width = "0px";
                }
//end header  



                document.addEventListener('DOMContentLoaded',function() {
                    var open = document.getElementById('open-email');
                    // onClick's logic below:
                    open.addEventListener('click', function() {
                        openEmail();
                    });
                });



                function openEmail() {
                    var side = document.getElementById('email-side');
                    
                    if (side.style.width == "250px"){
                    side.style.width= "22px";
                    side.textContent="";
                    }else {
                        side.style.width= "250px";
                        side.textContent="us.fahadblog@gmail.com";
                        
                    }
                }





                document.addEventListener('DOMContentLoaded',function() {
                    var open = document.getElementById('open-linkedin');
                    // onClick's logic below:
                    open.addEventListener('click', function() {
                        openlinkedin();
                    });
                });



                function openlinkedin() {
                    var side = document.getElementById('linkedin-side');
                    
                    if (side.style.width == "250px"){
                    side.style.width= "22px";
                    side.textContent="";
                    }else {
                        side.style.width= "250px";
                        side.textContent="linkedin.com/in/fahad11";
                        
                    }
                }



                document.addEventListener('DOMContentLoaded',function() {
                    var open = document.getElementById('open-github');
                    // onClick's logic below:
                    open.addEventListener('click', function() {
                        opengithub();
                    });
                });



                function opengithub() {
                    var side = document.getElementById('github-side');
                    
                    if (side.style.width == "250px"){
                    side.style.width= "22px";
                    side.textContent="";
                    }else {
                        side.style.width= "250px";
                        side.textContent="github.com/Fahad1221";
                        
                    }
                }




                document.addEventListener('DOMContentLoaded',function() {
                    var open = document.getElementById('open-site');
                    // onClick's logic below:
                    open.addEventListener('click', function() {
                        opensite();
                    });
                });



                function opensite() {
                    var side = document.getElementById('site-side');
                    
                    if (side.style.width == "250px"){
                    side.style.width= "22px";
                    side.textContent="";
                    }else {
                        side.style.width= "250px";
                        side.textContent="fahadblog.com";
                        
                    }
                }