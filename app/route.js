hr.config([ '$routeProvider' , '$locationProvider' ,  function($routeProvider , $locationProvider){
    $routeProvider
        .when('/companyProfile' , {
        templateUrl : 'public/companyProfile.html',
        controller : 'companyProfileController'
    })
        .when('/departments' , {
        templateUrl : 'public/departments',
        controller : 'departmentsController'
    })
        .when('/designations' , {
        templateUrl : 'public/designations.html',
        controller : 'designationsController'
    })
        .when('/locations' , {
        templateUrl : 'public/locations.html',
        controller : 'locationsController'
    })
        .when('/groups' , {
        templateUrl : 'public/groups.html',
        controller : 'groupsController'
    })
        .when('/domain' , {
        templateUrl : 'public/domain.html',
        controller : 'domainController'
    })
        .when('/rebranding' , {
        templateUrl : 'public/rebranding.html',
        controller : 'rebrandingController'
    })
        .when('/holiday' , {
        templateUrl : 'public/holiday.html',
        controller : 'holidayController'
    })
        .when('/addEmployee' , {
        templateUrl : 'public/addEmployee.html',
        controller : 'addEmployeeController'
    })
        .when('/employeeProfile' , {
        templateUrl : 'public/employeeProfile.html',
        controller : 'employeeProfileController'
    })
        .when('/addJob' , {
        templateUrl : 'public/addJob.html',
        controller : 'addJobController'
    })
        .when('/profileSources' , {
        templateUrl : 'public/profileSources.html',
        controller : 'profileSourcesController'
    })
        .when('/skillSet' , {
        templateUrl : 'public/skillSet.html',
        controller : 'skillSetController'
    })
        .when('/viewResume' , {
        templateUrl : 'public/resumes.html',
        controller : 'resumeController'
    })
        .otherwise({
        redirectTo :  '/addJob'
    }); 

    $locationProvider.hashPrefix('');
}]);