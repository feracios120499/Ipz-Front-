(function (ipzSite) {
    'use strict';

    ipzSite.controller('TraineeshipCtrl', ['$scope',TraineeshipCtrl]);


    function TraineeshipCtrl($scope) {
        $scope.toAbout = function () {
                $('html, body').stop().animate({
                    scrollTop: $('#about').offset().top
                }, 1000);
        }
        $scope.toServices = function () {
            $('html, body').stop().animate({
                scrollTop: $('#services').offset().top
            }, 1000);
    }
    };
})(angular.module("ipzSite"));