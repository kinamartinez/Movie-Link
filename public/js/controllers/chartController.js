app.controller('chartCtrl', function AppCtrl ($scope) {
        $scope.options = {width: 500, height: 300, 'bar': 'aaa'};
        $scope.data = [1,2,3,4,5,6];
        $scope.hovered = function(d){
            $scope.barValue = d;
            $scope.$apply();
        };
        $scope.barValue = 'None';
})