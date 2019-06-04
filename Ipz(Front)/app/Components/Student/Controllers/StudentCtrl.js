(function (ipzSite) {
    'use strict';

    ipzSite.controller('StudentCtrl', ['$scope',StudentCtrl]);


    function StudentCtrl($scope) {
        $scope.toPlan = function () {
                $('html, body').stop().animate({
                    scrollTop: $('#plan').offset().top
                }, 1000);
                $('#subjects').collapse();  
        }
    };
})(angular.module("ipzSite"));