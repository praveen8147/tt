angular.module('ToDoProjectList.controllers').

  /* project controller */
  controller('projectControllernew', function($scope, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.project = null;

    var data = [{
        'Serial': 1,
        'ProjectName': 'XYZ',
        'Status': 'Finished',
        'Description': 'this project related to XTZ',
        'TeamSize': '4'
    }, {
        'Serial': 2,
        'ProjectName': 'ABC',
        'Status': 'Pending',
        'Description': 'this project related to ABC',
        'TeamSize': '10'
    }, {
        'Serial': 3,
        'ProjectName': 'PQR',
        'Status': 'InProgress',
        'Description': 'this project related to PQR',
        'TeamSize': '2'
    }, {
        'Serial': 4,
        'ProjectName': 'MNR',
        'Status': 'Finished',
        'Description': 'this project related to MNR',
        'TeamSize': '5'
    }];

    $scope.project = data[$scope.id];
    $scope.projectList = data;

  });