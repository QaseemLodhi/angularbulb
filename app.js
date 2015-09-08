/**
 * Created by Zia Khan on 9/8/2015.
 */

var app = angular.module("bulb",[]);
app.controller("myctrl",function(){
    var $scope = this;
    $scope.On = "http://pngimg.com/upload/bulb_PNG1247.png";
    $scope.Off = "http://blogs-images.forbes.com/jonathansalembaskin/files/2012/10/dim-bulb.jpg";
    $scope.isBulbOn = false;
    $scope.bulbText = function() { return $scope.isBulbOn ? "on" : "off" };
    $scope.bulbUrl = function() {
        return $scope.isBulbOn ? $scope.On : $scope.Off;
    };

});