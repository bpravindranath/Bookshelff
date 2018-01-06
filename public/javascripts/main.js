var toggle = false;
var panelstate =  'closed';
var main = function() {
            // $('.hamburger').click(function () {

            //     if(panelstate ==='closed'){   //opens hamburger menu

            //         $(this).addClass('is-active');
                    

            //         $('.wrapper').toggleClass('open');


            //         panelstate = 'opened';

            //         setTimeout(function () {

            //             $('#nav-display').toggle();
            //             $(".nav-panel").css( "border-right", "1px solid #d9d9d9" );

            //         }, 400); //toggles nav-panel wrapper between position: block or none
            //     }

            //     else { //closes hamburger menu


            //         $('#nav-display').toggle();


            //         setTimeout(function () {

            //             $('.wrapper').toggleClass('open');
            //             $(".nav-panel").css( "border-right", "" );


            //         }, 50); //toggles nav-panel wrapper between position: block or none

            //         $(this).removeClass('is-active');



            //         panelstate = 'closed';
            //     }

            // });

        // $(".clickable-row").click(function() {
        //     window.location = $(this).data("href");
        // });


        $('#addResource').submit(function (e){

            $('.alert').hide();

            if(!$('input#title').val() || !$('input#category').val() || !$('select#type').val() ||
               !$('input#source').val()|| !$('select#rating').val()  || !$('textarea#description').val()){
                
               alert("All Fields required, please try again.");
                return false;
            }
            
        });


        $('#toggle').click(function() {
            $(this).toggleClass('active');
            $('#overlay').toggleClass('open');
           });


        }; //end of main function


$(document).ready(main);


 

////////////////////////////////////////////////////////////////////////////////////
