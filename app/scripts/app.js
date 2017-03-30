angular.module('ToDoProjectList.controllers', []);

angular.module('ToDoProjectList', [
  'ToDoProjectList.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/projects", {templateUrl: "views/projects.html", controller: "projectController"}).
  when("/projects/:id", {templateUrl: "views/project.html", controller: "projectControllernew"}).
  otherwise({redirectTo: '/projects'});
}]);