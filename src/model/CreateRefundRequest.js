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
var Money = require('./Money');




/**
 * The CreateRefundRequest model module.
 * @module model/CreateRefundRequest
 */

/**
 * Constructs a new <code>CreateRefundRequest</code>.
 * Defines the body parameters that can be included in a request to the [CreateRefund](#endpoint-createrefund) endpoint.
 * @alias module:model/CreateRefundRequest
 * @class
 * @param idempotencyKey {String} A value you specify that uniquely identifies this refund among refunds you've created for the tender.  If you're unsure whether a particular refund succeeded, you can reattempt it with the same idempotency key without worrying about duplicating the refund.  See [Idempotency keys](#idempotencykeys) for more information.
 * @param tenderId {String} The ID of the tender to refund.  A [`Transaction`](#type-transaction) has one or more `tenders` (i.e., methods of payment) associated with it, and you refund each tender separately with the Connect API.
 * @param amountMoney {module:model/Money} The amount of money to refund.  Note that you specify the amount in the __smallest denomination of the applicable currency__. For example, US dollar amounts are specified in cents. See [Working with monetary amounts](#workingwithmonetaryamounts) for details.  This amount cannot exceed the amount that was originally charged to the tender that corresponds to `tender_id`.
 */
var exports = function(idempotencyKey, tenderId, amountMoney) {
  var _this = this;

  _this['idempotency_key'] = idempotencyKey;
  _this['tender_id'] = tenderId;

  _this['amount_money'] = amountMoney;
};

/**
 * Constructs a <code>CreateRefundRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateRefundRequest} obj Optional instance to populate.
 * @return {module:model/CreateRefundRequest} The populated <code>CreateRefundRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('tender_id')) {
      obj['tender_id'] = ApiClient.convertToType(data['tender_id'], 'String');
    }
      if (data.hasOwnProperty('reason')) {
      obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
    }
  return obj;
}

/**
 * A value you specify that uniquely identifies this refund among refunds you've created for the tender.  If you're unsure whether a particular refund succeeded, you can reattempt it with the same idempotency key without worrying about duplicating the refund.  See [Idempotency keys](#idempotencykeys) for more information.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The ID of the tender to refund.  A [`Transaction`](#type-transaction) has one or more `tenders` (i.e., methods of payment) associated with it, and you refund each tender separately with the Connect API.
 * @member {String} tender_id
 */
exports.prototype['tender_id'] = undefined;
/**
 * A description of the reason for the refund.  Default value: `Refund via API`
 * @member {String} reason
 */
exports.prototype['reason'] = undefined;
/**
 * The amount of money to refund.  Note that you specify the amount in the __smallest denomination of the applicable currency__. For example, US dollar amounts are specified in cents. See [Working with monetary amounts](#workingwithmonetaryamounts) for details.  This amount cannot exceed the amount that was originally charged to the tender that corresponds to `tender_id`.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;



module.exports = exports;



