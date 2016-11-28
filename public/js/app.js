/*
This file is the entry point of Angular application.
There are all depedencies (module)
*/
((app) => {
  'use strict'
})(require('angular').module('app', [
  require('angular-ui-router'),
  'app.config',
  'naif.base64',
  'app.services',
  'app.home',
  'app.blog'
]))
