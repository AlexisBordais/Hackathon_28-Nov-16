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
            filter(filtre) {
                // Il faut verifier chaque valeur de notre filtre si la valeur est vide ou null supprimer la clé de ce filtre
                // ex:
                if (!filtre.langage)
                    delete filtre.langage

                else if (!filtre.lieu) {
                  delete filtre.lieu
                }
                  
                return $http.get('/api/posts', {
                        params: filtre
                    }) //je cree mon service filtre qui correpond a ma requette http n'affichant que les users selon leur age
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
