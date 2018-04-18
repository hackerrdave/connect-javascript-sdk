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
 * The BatchRetrieveCatalogObjectsRequest model module.
 * @module model/BatchRetrieveCatalogObjectsRequest
 */

/**
 * Constructs a new <code>BatchRetrieveCatalogObjectsRequest</code>.
 * 
 * @alias module:model/BatchRetrieveCatalogObjectsRequest
 * @class
 * @param objectIds {Array.<String>} The IDs of the [CatalogObject](#type-catalogobject)s to be retrieved.
 */
var exports = function(objectIds) {
  var _this = this;

  _this['object_ids'] = objectIds;

};

/**
 * Constructs a <code>BatchRetrieveCatalogObjectsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/BatchRetrieveCatalogObjectsRequest} obj Optional instance to populate.
 * @return {module:model/BatchRetrieveCatalogObjectsRequest} The populated <code>BatchRetrieveCatalogObjectsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('object_ids')) {
      obj['object_ids'] = ApiClient.convertToType(data['object_ids'], ['String']);
    }
      if (data.hasOwnProperty('include_related_objects')) {
      obj['include_related_objects'] = ApiClient.convertToType(data['include_related_objects'], 'Boolean');
    }
    }
  return obj;
}

/**
 * The IDs of the [CatalogObject](#type-catalogobject)s to be retrieved.
 * @member {Array.<String>} object_ids
 */
exports.prototype['object_ids'] = undefined;
/**
 * If `true`, the response will include additional objects that are related to the requested objects, as follows:  If the `objects` field of the response contains a [CatalogItem](#type-catalogitem), its associated [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, and [CatalogModifierList](#type-catalogmodifierlist)s will be returned in the `related_objects` field of the response. If the `objects` field of the response contains a [CatalogItemVariation](#type-catalogitemvariation), its parent [CatalogItem](#type-catalogitem) will be returned in the `related_objects` field of the response.
 * @member {Boolean} include_related_objects
 */
exports.prototype['include_related_objects'] = undefined;



module.exports = exports;



