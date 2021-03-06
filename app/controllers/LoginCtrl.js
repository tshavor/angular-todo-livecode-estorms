"use strict";

app.controller("LoginCtrl", function($scope, $window, AuthFactory) {
  $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () => {
    console.log("you clicked register");
    AuthFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    })
    .then ( (userData) => {
      console.log("newUser", userData);
      $scope.login();
    }, (error) => {
      console.log(`Error creating user: ${error}`);
      //how you deal with user data - rejext
    });
  };

  $scope.login = () => {
    console.log("you clicked login");
    AuthFactory.loginUser($scope.account)
    .then( (data) => {
      if (data) {
      $window.location.href = "#/items/list";
    } else {
      $window.location.href = "#/login";
    }
      console.log("data from login", data);
      }, (error) => {
      console.log("data from login", error);
    });
      //dont need anything back from the .then, but we want to wait until it's done
  };


});

//$window object - like usual, but angular can't access it, so it has it's own
