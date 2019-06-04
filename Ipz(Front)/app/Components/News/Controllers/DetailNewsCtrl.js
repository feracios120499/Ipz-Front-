(function (ipzSite) {
    'use strict';
    ipzSite.controller('DetailNewsCtrl', ['$scope', '$stateParams', "$http", "appSetting", '$sce', '$timeout', DetailNewsCtrl]);
    function DetailNewsCtrl($scope, $stateParams, $http, appSetting, $sce, $timeout) {

        $scope.colors = ['#f05d22', '#8bc63e', '#fcba30', '#1ccfc9', '#493224'];
        $scope.news;
        $scope.init = function () {
            $('html, body').animate({
                scrollTop: $("#title").offset().top
            }, 2000);
            $http({
                url: appSetting.apiBaseUrl + 'api/news/' + $stateParams.id,
                method: 'GET'
            }).then(function (response) {
                $scope.news = response.data
            });     
        };
        
        $scope.init();

        $scope.trustAsHtml = function (string) {
            return $sce.trustAsHtml(string);
        };
    };
})(angular.module("ipzSite"));