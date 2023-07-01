'use strict';

/**
 * customer-complaint service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-complaint.customer-complaint');
