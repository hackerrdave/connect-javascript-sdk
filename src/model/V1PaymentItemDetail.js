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
 * The V1PaymentItemDetail model module.
 * @module model/V1PaymentItemDetail
 */

/**
 * Constructs a new <code>V1PaymentItemDetail</code>.
 * @alias module:model/V1PaymentItemDetail
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>V1PaymentItemDetail</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1PaymentItemDetail} obj Optional instance to populate.
 * @return {module:model/V1PaymentItemDetail} The populated <code>V1PaymentItemDetail</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('category_name')) {
      obj['category_name'] = ApiClient.convertToType(data['category_name'], 'String');
    }
      if (data.hasOwnProperty('sku')) {
      obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
    }
      if (data.hasOwnProperty('item_id')) {
      obj['item_id'] = ApiClient.convertToType(data['item_id'], 'String');
    }
      if (data.hasOwnProperty('item_variation_id')) {
      obj['item_variation_id'] = ApiClient.convertToType(data['item_variation_id'], 'String');
    }
    }
  return obj;
}

/**
 * The name of the item's merchant-defined category, if any.
 * @member {String} category_name
 */
exports.prototype['category_name'] = undefined;
/**
 *  The item's merchant-defined SKU, if any.
 * @member {String} sku
 */
exports.prototype['sku'] = undefined;
/**
 * The unique ID of the item purchased, if any.
 * @member {String} item_id
 */
exports.prototype['item_id'] = undefined;
/**
 * The unique ID of the item variation purchased, if any.
 * @member {String} item_variation_id
 */
exports.prototype['item_variation_id'] = undefined;



module.exports = exports;



