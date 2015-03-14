(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('TopbarController', TopbarController);

    TopbarController.$inject = [];

    /* @ngInject */
    function TopbarController() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'TopbarController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();