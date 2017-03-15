app.directive('chartForm', function(){
    return {
        restrict: 'E',
        replace: true,
        controller: function AppCtrl ($scope) {
        $scope.update = function() {
            $scope.data = [1,3,4,1];
        };
    }
}
    // template: '<div>' +
    // '<br /><button ng-click="update()">Update Data</button>' +
    // '<br />Movie Rating: {{barValue}}</div>'
    // }
});