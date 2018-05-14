$(window).ready(function() {
    var age = {};

    var modal = document.getElementById('myModal');

    onload = function() {
        modal.style.display = "block";
    }

    // For use without cookies
    $('#myModal').modal('show');
    initAge();

    /*  // check if cookie for validAge exists..
     if (cookie.get('validAge') == 'true') {
     return true;
     } else {
     // doesn't exist so lets make them enter a birthday...
     $('#ageModal').modal('show');
     initAge();
     }*/

    // starts the age verification process
    function initAge() {
        var month = 0;
        var day = 0;
        var year = 0;

        $("#enter").on("click", function() {
            age['month'] = $("#month").val();
            age['day'] = $("#day").val();
            age['year'] = $("#year").val();
            checkDate();
        });
    }

    // Check to see if user entered a valid date...
    function checkDate() {
        if (age.month == 'none' || age.day == 'none' || age.year == 'none') {

            // Fade in the error...
            $('#modal-error').css('visibility', 'visible').hide().fadeIn('slow');

            // changes the background color of the select if invalid
            if (age.month == 'none') {
                $("#month").css('background', 'rgba(223,32,44,0.5)');

                // Look for change of value and change background color when valid
                $("#month").on('change', function() {
                    if ($("#month").val() == 'none') {
                        $("#month").css('background', 'rgba(223,32,44,0.5)');
                    } else {
                        $("#month").css('background', 'white');
                    }
                });
            }

            // changes the background color of the select if invalid
            if (age.day == 'none') {
                $("#day").css('background', 'rgba(223,32,44,0.5)');

                // Look for change of value and change background color when valid
                $("#day").on('change', function() {
                    if ($("#day").val() == 'none') {
                        $("#day").css('background', 'rgba(223,32,44,0.5)');
                    } else {
                        $("#day").css('background', 'white');
                    }
                });
            }

            // changes the background color of the select if invalid
            if (age.year == 'none') {
                $("#year").css('background', 'rgba(223,32,44,0.5)');
                // Look for change of value and change background color when valid
                $("#year").on('change', function() {
                    if ($("#year").val() == 'none') {
                        $("#year").css('background', 'rgba(223,32,44,0.5)');
                    } else {
                        $("#year").css('background', 'white');
                    }
                });
            }
        } else {
            oldEnough();
        }
    }

    // Compares age entered with todays date 21 years ago...
    function oldEnough() {
        var ageLimit = moment().subtract(21, 'years').calendar();
        var birthDate = age.month + " " + age.day + " " + age.year;
        var oldEnough = moment(birthDate, "MM DD YYYY").isBefore(ageLimit, 'day');

        if (oldEnough) {

            //cookie.set('validAge', 'true');
            $('#myModal').modal('hide');
        } else {

            //cookie.set('validAge', 'false');
            console.log("it is false");
        }
    }
});
/**
 * Created by Peter on 4/30/18.
 */
