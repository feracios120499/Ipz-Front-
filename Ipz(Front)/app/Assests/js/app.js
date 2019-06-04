'use strict';
// Define the `phonecatApp` module
var ipzSite = angular.module('ipzSite', ['ui.router', "oc.lazyLoad"]);
angular.module('ipzSite').run(['$state', '$stateParams',
    function ($state, $stateParams) {
        //this solves page refresh and getting back to state
    }]);
ipzSite.constant("appSetting", {
    apiBaseUrl: "/Ipz/"
});
ipzSite.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //$urlRouterProvider.otherwise('/home');
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({enabled:true,rewriteLinks: false});


    $stateProvider.state('default', {
        url: '/',
        templateUrl: '/app/components/home/views/home.html',
        controller: 'HomeCtrl'
    })
    .state('home', {
        url: '/home',
        templateUrl: '/app/components/home/views/home.html',
        controller: 'HomeCtrl'
    })
    .state('traineeship', {
        url: '/traineeship',
        templateUrl: '/app/components/traineeship/views/traineeship.html',
        controller: 'TraineeshipCtrl'
    })
    .state('news', {
        url: '/news',
        templateUrl: '/app/components/news/views/news.html',
        controller: 'NewsCtrl'
    })
    .state('newsDetail', {
        url: '/news/{id}',
        templateUrl: '/app/components/news/views/detailNews.html',
        controller: 'DetailNewsCtrl'
    })
    .state('applicant', {
        url: '/applicant',
        templateUrl: '/app/components/applicant/views/applicant.html',
        controller: 'ApplicantCtrl'
    })
    .state('student', {
        url: '/student',
        templateUrl: '/app/components/student/views/student.html',
        controller: 'StudentCtrl'
    })
    .state('achievements', {
        url: '/achievements',
        templateUrl: '/app/components/achievement/views/achievements.html',
        controller: 'AchievementCtrl',
        onEnter: function () {
            $("head").append('<link href="app/assests/css/achiv.css" rel="stylesheet">');
            $("head").append('<link href="app/assests/css/nicepage.css" rel="stylesheet">');
        },
        onExit: function () {
            $('link[href="app/assests/css/achiv.css"]').remove();
            $('link[href="app/assests/css/nicepage.css"]').remove();
        }
    })
        .state('teachers', {
            url: '/teachers',
            templateUrl: '/app/components/teacher/views/teachers.html',
            controller: 'TeacherCtrl'
        })
        .state('services', {
            url: '/services',
            templateUrl: '/app/components/services/views/services.html',
            controller: 'ServiceCtrl'
        });
}]);
ipzSite.controller('studentController', function studentController($scope) {
    $scope.phones = [
        {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola XOOM� with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name: 'MOTOROLA XOOM�',
            snippet: 'The Next, Next Generation tablet.'
        }
    ];
});
ipzSite.controller('teacherController', ['$scope', "$http", "appSetting", '$sce', '$timeout', teacherController]);
function teacherController($scope, $http, appSetting, $sce, $timeout) {

};