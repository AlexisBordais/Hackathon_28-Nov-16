
/*
This file define document schema for post
*/
'use strict'
let mongoose = require('mongoose')

// Create du schema Post
module.exports = mongoose.model('Post', new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    langage: {
      type: String
    },
    lieu: {
      type: String
    },
    title: {
        type: String
    },
    imageprofil: {
        type: String,
        required: true
    },
    nomeleve: {
      type: String
    },
    prenomeleve: {
      type: String
    },
    promotion: {
      type: String
    },

    imageprofil2: {
        type: String,
        required: true
    },
    nomeleve2: {
      type: String
    },
    prenomeleve2: {
      type: String
    },
    promotion2: {
      type: String
    },

    content: {
        type: String
    }
}, {
    timestamps: true
}))
