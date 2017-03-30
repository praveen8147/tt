angular.module('ToDoProjectList.controllers').

/* projects controller */
controller('projectController', function($scope) {
    $scope.nameFilter = null;
    $scope.projectList = [];
    $scope.searchFilter = function(project) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(project.ProjectName) || re.test(project.Status);
    };

    //Digging into the response to get the relevant data
    $scope.projectList = [{
        'Serial': 1,
        'ProjectName': 'XYZ',
        'Status': 'Finished'
    }, {
        'Serial': 2,
        'ProjectName': 'ABC',
        'Status': 'Pending'
    }, {
        'Serial': 3,
        'ProjectName': 'PQR',
        'Status': 'InProgress'
    }, {
        'Serial': 4,
        'ProjectName': 'MNR',
        'Status': 'Finished'
    }]

});