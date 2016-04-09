'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors.server.controller'),
  Categoria = mongoose.model('Categoria'),
  _ = require('lodash');

/**
 * Create a categoria
 */
exports.create = function(req, res) {
  var categoria = new Categoria(req.body);
  categoria.user = req.user;

  categoria.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(categoria);
    }
  });
};

/**
 * Show the current categoria
 */
exports.read = function(req, res) {
  res.jsonp(req.categoria);
};

/**
 * Update a categoria
 */
exports.update = function(req, res) {
  var categoria = req.categoria;

  categoria = _.extend(categoria, req.body);

  categoria.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(categoria);
    }
  });
};

/**
 * Delete an categoria
 */
exports.delete = function(req, res) {
  var categoria = req.categoria;

  categoria.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(categoria);
    }
  });
};

/**
 * List of Categories
 */
exports.list = function(req, res) {
  Categoria.find().sort('-created').populate('user', 'displayName').exec(function(err, categorias) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(categorias);
    }
  });
};

/**
 * Categoria middleware
 */
exports.categoriaByID = function(req, res, next, id) {
  Categoria.findById(id).populate('user', 'displayName').exec(function(err, categoria) {
    if (err) return next(err);
    if (!categoria) return next(new Error('Failed to load categoria ' + id));
    req.categoria = categoria;
    next();
  });
};

/**
 * Categoria authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
  if (req.categoria.user.id !== req.user.id) {
    return res.status(403).send({
      message: 'User is not authorized'
    });
  }
  next();
};
