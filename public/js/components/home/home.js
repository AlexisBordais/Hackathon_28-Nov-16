((app) => {
    'use strict'
    app.component('home', {
        templateUrl: 'js/components/home/home.html',
        controller: ['PostsService', '$state', function(PostsService, $state) {
            $('select').material_select();

            this.filter = (lieu) => { //j'essaie de cree ma fonction filtre par lieu'
                //ou dans la vue avec un a ui-sref="app.blog.list({lieu:$ctrl.lieu})"
                $state.go('app.blog.list', {
                    lieu: lieu
                })
            }
        }]
    })
})(angular.module('app.home'))
