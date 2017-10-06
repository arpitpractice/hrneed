var hr  = angular.module('hr' , ['ngRoute' , 'ngSanitize', 'ui.materialize']);

hr.config([ '$routeProvider' , '$locationProvider'  , function($routeProvider , $locationProvider){
    $routeProvider
        .when('/companyProfile' , {
        templateUrl : 'public/organisation/companyProfile.html',
        controller : 'companyProfileController'
    })
        .when('/departments' , {
        templateUrl : 'public/organisation/departments.html',
        controller : 'departmentsController'
    })
        .when('/designations' , {
        templateUrl : 'public/organisation/designations.html',
        controller : 'designationsController'
    })
        .when('/locations' , {
        templateUrl : 'public/organisation/locations.html',
        controller : 'locationsController'
    })
        .when('/groups' , {
        templateUrl : 'public/organisation/groups.html',
        controller : 'groupsController'
    })
        .when('/domain' , {
        templateUrl : 'public/organisation/domain.html',
        controller : 'domainController'
    })
        .when('/rebranding' , {
        templateUrl : 'public/organisation/rebranding.html',
        controller : 'rebrandingController'
    })
        .when('/holiday' , {
        templateUrl : 'public/organisation/holiday.html',
        controller : 'holidayController'
    })
        .when('/addEmployee' , {
        templateUrl : 'public/employee/addEmployee.html',
        controller : 'addEmployeeController'
    })
        .when('/employeeProfile' , {
        templateUrl : 'public/employee/employeeProfile.html',
        controller : 'employeeProfileController'
    })
        .when('/addJob' , {
        templateUrl : 'public/recruitment/addJob.html',
        controller : 'addJobController'
    })
        .when('/profileSources' , {
        templateUrl : 'public/recruitment/profileSources.html',
        controller : 'profileSourcesController'
    })
        .when('/skillSet' , {
        templateUrl : 'public/recruitment/skillSet.html',
        controller : 'skillSetController'
    })
        .when('/viewResume' , {
        templateUrl : 'public/recruitment/resumes.html',
        controller : 'resumeController'
    })
        .otherwise({
        redirectTo :  '/companyProfile'
    }); 
    $locationProvider.hashPrefix('');
}]);