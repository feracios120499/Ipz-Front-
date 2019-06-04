(function (ipzSite) {
    'use strict';

    ipzSite.controller('TeacherCtrl', ['$scope', "$http", "appSetting", '$sce', '$timeout',TeacherCtrl]);


    function TeacherCtrl($scope, $http, appSetting, $sce, $timeout) {
    window.addEventListener("load", function (event) {
        $('#page-loading')
            .fadeOut('slow');
    });
    $scope.colors = ['#f05d22', '#8bc63e', '#fcba30', '#1ccfc9', '#493224'];
    $scope.teachers;
    $scope.isMobile;
    function myFunction(x) {
        $scope.isMobile = x.matches;
    };
    $scope.init = function () {
        $http({
            url: appSetting.apiBaseUrl + 'api/teacher',
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        }).then(function (response) { $scope.teachers = response.data });

        var x = window.matchMedia("(max-width: 700px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes
    };
    $scope.init();

    $scope.collapsed = function (teacher) {
        if (teacher.collapse) {
            teacher.collapse = false;
        }
        else {
            teacher.collapse = true;
        }
    }
    $scope.trustAsHtml = function (string) {
        return $sce.trustAsHtml(string);
    };
    $scope.getRandomColor = function () {
        return $scope.colors[getRandomInt(5)];
    }
    $scope.goToComment = function (teacher) {
        window.location.hash = null;
        $scope.collapsed(teacher);
        $timeout(function () {
            window.location.hash = '#comment' + teacher.Id;
        }, 300);
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    $scope.getShortName = function (name) {
        var fam = name.substr(0, name.indexOf(' '));
        name = name.substr(fam.length + 1);
        var nam = name[0] + '.';
        var otch = name.substr(name.indexOf(' ') + 1)[0] + '.';
        return fam + ' ' + nam + ' ' + otch;
    }
    };
})(angular.module("ipzSite"));