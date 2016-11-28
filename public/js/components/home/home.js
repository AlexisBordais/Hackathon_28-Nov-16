((app) => {
    'use strict'
    app.component('home', {
        templateUrl: 'js/components/home/home.html',
        controller: function() {
            $('select').material_select();
        }
    })
})(angular.module('app.home'))
