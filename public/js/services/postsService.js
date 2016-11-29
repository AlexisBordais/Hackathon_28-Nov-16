/*
Create Angular service PostsService in app.services module
*/
((app) => {
    'use strict'
    app.service('PostsService', function($http) {
        return {
            get() {
                // HTTP Request method GET to our express API
                return $http.get('/api/posts')
            },
            filter(lieu){
              return $http.get('/api/posts' + '?lieu='+ lieu) //je cree mon service filtre qui correpond a ma requette http n'affichant que les users selon leur age
            },

            filter(lieu,langage){
              return $http.get('/api/posts' + '?lieu='+ '?langage')
            },

            // $stateProvider.state('page', {
            //   url: '/page/:x/:y',
            //   params: {
            //     x: 5,  // default value of x is 5
            //     y: 100 // default value of y is 100
            //   }
            // })


            getById(id) {
                // HTTP Request method GET with param (post id) to our express API
                return $http.get('/api/posts/' + id)
            },
            save(post) {
                if (post._id) {
                    // HTTP Request method PUT (update) with param and data (post) to our express API
                    return $http.put('/api/posts/' + post._id, post)
                } else {
                    // HTTP Request method POST (create) with data (post) to our express API
                    return $http.post('/api/posts', post)
                }
            },
            delete(post) {
                // HTTP Request method DELETE (delete) with param (post id) to our express API
                return $http.delete('/api/posts/' + post._id)
            }
        }
    })
})(require('angular').module('app.services'))
