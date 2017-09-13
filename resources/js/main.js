$('.button-collapse').sideNav({
    menuWidth: 200, // Default is 300
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true
});
function toggle(){
    $(document).ready(function(){
        $('#table-wrapper').toggleClass('display-none');
        $('#grid-wrapper').toggleClass('display-none');
    });

}


$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

});
$(document).ready(function() {
    $('select').material_select();
});
