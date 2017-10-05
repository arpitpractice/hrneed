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
    $('.modal').modal();
});

$(document).ready(function() {
    $('select').material_select();
});

$(document).ready(function(){
    $('ul.tabs').tabs();
});

setInterval(function(){
    function doNotification(){
        var myNotification = new Notify('Yo dawg!', {
            body: 'This is an awesome notification',
            icon : '../img/m_logo.png',
            notifyShow: onNotifyShow
        });
        function onNotifyShow() {
            console.log('notification was shown!');
        } 
        myNotification.show(); 
    }

    if (!Notify.needsPermission) {
        doNotification();
    } else if (Notify.isSupported()) {
        Notify.requestPermission(onPermissionGranted, onPermissionDenied);
    }

    function onPermissionGranted() {
        console.log('Permission has been granted by the user');
        doNotification();
    }

    function onPermissionDenied() {
        console.warn('Permission has been denied by the user');
    }
} , 1000000);  


$('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false,
    belowOrigin : true
});