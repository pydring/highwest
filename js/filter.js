/**
 * Created by Peter on 5/11/18.
 */
$(document).ready(function() {
    $('#filternav button').click(function() {
        // fetch the class of the clicked item
        var ourClass = $(this).attr('class');
        // reset the active class on all the buttons
        $('#filternav button').removeClass('active');
        // update the active state on our clicked button
        $(this).parent().addClass('active');
        if(ourClass == 'all') {
            // show all our items
            $('#productsection').children('div.item').show();
        }
        else {
            // hide all elements that don't share ourClass
            $('#productsection').children('div:not(.' + ourClass + ')').hide();
            // show all elements that do share ourClass
            $('#productsection').children('div.' + ourClass).show();
        }
        return false;
    });
});