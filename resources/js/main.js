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

$('#modal1').modal('open');

$(document).ready(function() {
    $('select').material_select();
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
} , 500000);
