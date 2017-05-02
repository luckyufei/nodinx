'use strict';

/**
 * @namespace Egg
 */

/**
 * Start egg application with cluster mode
 * @since 1.0.0
 */
exports.startCluster = require('egg-cluster').startCluster;

exports.startApp = require('egg-cluster').startApp;

/**
 * @member {Application} Egg#Application
 * @since 1.0.0
 */
exports.Application = require('./lib/application');

/**
 * @member {Agent} Egg#Agent
 * @since 1.0.0
 */
exports.Agent = require('./lib/agent');

/**
 * @member {AppWorkerLoader} Egg#AppWorkerLoader
 * @since 1.0.0
 */
exports.AppWorkerLoader = require('./lib/loader').AppWorkerLoader;

/**
 * @member {AgentWorkerLoader} Egg#AgentWorkerLoader
 * @since 1.0.0
 */
exports.AgentWorkerLoader = require('./lib/loader').AgentWorkerLoader;

/**
 * @member {Controller} Egg#Controller
 * @since 1.1.0
 */
exports.Controller = require('./lib/core/base_context_class');

/**
 * @member {Service} Egg#Service
 * @since 1.1.0
 */
exports.Service = require('./lib/core/base_context_class');

/**
 * @member {Service} Egg#BaseContextClass
 * @since 1.2.0
 */
exports.BaseContextClass = require('./lib/core/base_context_class');
