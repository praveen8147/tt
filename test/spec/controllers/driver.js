describe('Controller: projectController', function () {

  beforeEach(module('ToDoProjectList'));

  var projectController, scope;

  beforeEach(inject(function ($controller, $rootScope, $routeParams) {

    scope = $rootScope.$new();

    // Creating and initializing the mock routeparams object.
    routeParams = $routeParams;
    routeParams.id = "2";

    // Here, we actually initialize our controller, passing our new mock scope as parameter
    projectController = $controller('projectController', {
      $scope: scope,
      $routeParams : routeParams
    });

  }));


  // Now let's check the project Team Size
  it('should retrieve the team size of the project', function () {
    expect(scope.project.Status).toBe("InPro");
  });


  it('should retrieve the description of projecrt', function () {
    expect(scope.projectList[0].description).toBe("this project related to XYZ");
    expect(scope.projectList[1].description).toBe("this project related to ABC");
    expect(scope.projectList[2].description).toBe("this project related to PQR");
    expect(scope.projectList[3].description).toBe("this project related to MNR");
  });

});