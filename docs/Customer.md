# SquareConnect.Customer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The customer&#39;s unique ID. | 
**createdAt** | **String** | The time when the customer was created, in RFC 3339 format. | 
**updatedAt** | **String** | The time when the customer was last updated, in RFC 3339 format. | 
**cards** | [**[Card]**](Card.md) | The non-confidential details of the customer&#39;s cards on file. | [optional] 
**givenName** | **String** | The customer&#39;s given (i.e., first) name. | [optional] 
**familyName** | **String** | The customer&#39;s family (i.e., last) name. | [optional] 
**nickname** | **String** | The customer&#39;s nickname. | [optional] 
**companyName** | **String** | The name of the customer&#39;s company. | [optional] 
**emailAddress** | **String** | The customer&#39;s email address. | [optional] 
**address** | [**Address**](Address.md) | The customer&#39;s physical address. | [optional] 
**phoneNumber** | **String** | The customer&#39;s phone number. | [optional] 
**referenceId** | **String** | A second ID you can set to associate the customer with an entity in another system. | [optional] 
**note** | **String** | A note to associate with the customer. | [optional] 
**preferences** | [**CustomerPreferences**](CustomerPreferences.md) | The customer&#39;s preferences. | [optional] 
**groups** | [**[CustomerGroupInfo]**](CustomerGroupInfo.md) | The groups the customer belongs to. | [optional] 
**creationSource** | **String** | A creation source represents the method used to create the customer profile. | [optional] 


<a name="CreationSourceEnum"></a>
## Enum: CreationSourceEnum


* `OTHER` (value: `"OTHER"`)

* `APPOINTMENTS` (value: `"APPOINTMENTS"`)

* `COUPON` (value: `"COUPON"`)

* `DELETION_RECOVERY` (value: `"DELETION_RECOVERY"`)

* `DIRECTORY` (value: `"DIRECTORY"`)

* `EGIFTING` (value: `"EGIFTING"`)

* `EMAIL_COLLECTION` (value: `"EMAIL_COLLECTION"`)

* `FEEDBACK` (value: `"FEEDBACK"`)

* `IMPORT` (value: `"IMPORT"`)

* `INVOICES` (value: `"INVOICES"`)

* `LOYALTY` (value: `"LOYALTY"`)

* `MARKETING` (value: `"MARKETING"`)

* `MERGE` (value: `"MERGE"`)

* `ONLINE_STORE` (value: `"ONLINE_STORE"`)

* `INSTANT_PROFILE` (value: `"INSTANT_PROFILE"`)

* `TERMINAL` (value: `"TERMINAL"`)

* `THIRD_PARTY` (value: `"THIRD_PARTY"`)

* `THIRD_PARTY_IMPORT` (value: `"THIRD_PARTY_IMPORT"`)

* `UNMERGE_RECOVERY` (value: `"UNMERGE_RECOVERY"`)




