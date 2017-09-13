hr.run(function ($rootScope, $location,$route) {

    $rootScope.config = {};
    $rootScope.config.app_url = $location.url();
    $rootScope.config.app_path = $location.path();
    $rootScope.layout = {};
    $rootScope.layout.loading = false;

    $rootScope.$on('$routeChangeStart', function () {

        //show loading gif
        console.log('Must be visible');
        $rootScope.layout.loading = true;

    });
    $rootScope.$on('$routeChangeSuccess', function () {

        //hide loading gif
        console.log('Must not be visible');
        $rootScope.layout.loading = false;

    });
    $rootScope.$on('$routeChangeError', function () {

        //hide loading gif
        alert('wtff');
        $rootScope.layout.loading = false;

    });
});