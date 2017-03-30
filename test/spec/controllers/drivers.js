describe('Controller: projectController', function () {

  // First, we load the app's module
  beforeEach(module('ToDoProjectList'));

  var projectController, scope;

  beforeEach(inject(function ($controller, $rootScope) {

    scope = $rootScope.$new();

    // Here, we actually initialize our controller, passing our new mock scope as parameter
    projectController = $controller('projectController', {
      $scope: scope
    });

  }));


  // Now, for the actual test, let's check if the projectList is actually retrieving the mock project array
  it('should return a list with three projects', function () {
    expect(scope.projectList.length).toBe(3);
  });


});

it('should retrieve the description of projecrt', function () {
    expect(scope.project.length).toBe(4);
  });