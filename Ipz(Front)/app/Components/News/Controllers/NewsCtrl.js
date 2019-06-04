(function (ipzSite) {
    'use strict';
    ipzSite.controller('NewsCtrl', ['$scope', "$http", "appSetting", '$sce', '$timeout', NewsCtrl]);
    function NewsCtrl($scope, $http, appSetting, $sce, $timeout) {

    $scope.colors = ['#f05d22', '#8bc63e', '#fcba30', '#1ccfc9', '#493224'];
    $scope.news;
    $scope.isMobile;
    function myFunction(x) {
        $scope.isMobile = x.matches;
    };
    $scope.init = function () {
        
        $http({
            url: appSetting.apiBaseUrl + 'api/news',
            method: 'GET'
        }).then(function (response) {
            response.data.forEach(function (x) { x.Date = new Date(x.Date) });
            $scope.news = response.data
        });

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


    $scope.getShortName = function (name) {
        var fam = name.substr(0, name.indexOf(' '));
        name = name.substr(fam.length + 1);
        var nam = name[0] + '.';
        var otch = name.substr(name.indexOf(' ') + 1)[0] + '.';
        return fam + ' ' + nam + ' ' + otch;
    }
};
})(angular.module("ipzSite"));