/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');




/**
 * The CustomerPreferences model module.
 * @module model/CustomerPreferences
 */

/**
 * Constructs a new <code>CustomerPreferences</code>.
 * Represents a particular customer&#39;s preferences.
 * @alias module:model/CustomerPreferences
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>CustomerPreferences</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CustomerPreferences} obj Optional instance to populate.
 * @return {module:model/CustomerPreferences} The populated <code>CustomerPreferences</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('email_unsubscribed')) {
      obj['email_unsubscribed'] = ApiClient.convertToType(data['email_unsubscribed'], 'Boolean');
    }
    }
  return obj;
}

/**
 * The customer has unsubscribed from receiving marketing campaign emails.
 * @member {Boolean} email_unsubscribed
 */
exports.prototype['email_unsubscribed'] = undefined;



module.exports = exports;



