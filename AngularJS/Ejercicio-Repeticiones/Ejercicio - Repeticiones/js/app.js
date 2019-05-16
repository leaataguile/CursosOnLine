(function () {

    var app = angular.module('universidadApp', []);

    app.controller('listadoCtrl', ['$scope', function ($scope) {

        $scope.listado = ["Gonza Pistone", "Leo Monteleone", "Turko Maza"];

        $scope.listadoProfesores = {
            profesores: [{
                nombre: "Gonza Pistone",
                edad: 32,
                clase: "matematicas"
            }, {
                nombre: "Leo Monteleone",
                edad: 30,
                clase: "medicina",
            }, {
                nombre: "Turko Maza",
                edad: 35,
                clase: "birra"
            }
            ]
        }




    }]);




    s
})();
