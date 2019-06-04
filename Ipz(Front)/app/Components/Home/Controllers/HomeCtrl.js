(function (ipzSite) {
    'use strict';

    ipzSite.controller('HomeCtrl', ['$scope', 'appSetting', '$http', HomeCtrl]);


    function HomeCtrl($scope, appSetting, $http) {
        $scope.news;
        $scope.init = function () {
            $http({
                url: appSetting.apiBaseUrl + 'api/news',
                method: 'GET'
            }).then(function (response) {
                response.data.forEach(function (x) { x.Date = new Date(x.Date) });
                $scope.news = response.data
            });
        };
        $scope.init();
        $scope.goToAbout=function(){
            $('html, body').stop().animate({
                scrollTop: $('#about').offset().top
            }, 1000);
        };
        $scope.goToContact=function(){
            $('html, body').stop().animate({
                scrollTop: $('#contact').offset().top
            }, 1000);
        };
    };
})(angular.module("ipzSite"));