"use strict";
module.exports = {
	artemis_listAppGroupProductsByAppGroup: {
		"errorMsg": null,
		"errorCode": null,
		"result": [{
			"policyLiabilities": [{
				"id": 0,
				"haAppGroupId": null,
				"haAppGroupNo": null,
				"haAppGroupProductId": 1000,
				"wjsLiabilityCode": "L2002",
				"wjsLiabilityName": "伤残保险金",
				"premium": null,
				"sumInsured": null,
				"currencyCode": null,
				"operator": null,
				"isCheck": null
			}, {
				"id": 1000,
				"haAppGroupId": 987654321,
				"haAppGroupNo": null,
				"haAppGroupProductId": 1000,
				"wjsLiabilityCode": "L2001",
				"wjsLiabilityName": "身故保险金",
				"premium": 0.00,
				"sumInsured": 0.00,
				"currencyCode": "1",
				"operator": "sunshine",
				"isCheck": null
			}],
			"id": 1000,
			"wjsProductId": 1300300017,
			"haAppGroupId": 987654321,
			"haAppGroupNo": null,
			"countWay": null,
			"productNum": 100,
			"baseWjsProductName": null,
			"baseWjsProductId": null,
			"wjsProductName": "团体疾病身故与伤残保险",
			"discountRate": 0E-8,
			"sumInsured": 0.00,
			"coveragePeriodType": null,
			"coverageYear": 10,
			"chargePeriodType": null,
			"chargeYear": 10,
			"paymentFrequency": null,
			"commissionRate": 0E-8
		}, {
			"policyLiabilities": [{
				"id": 1001,
				"haAppGroupId": 987654321,
				"haAppGroupNo": null,
				"haAppGroupProductId": 1001,
				"wjsLiabilityCode": "L2010",
				"wjsLiabilityName": "轻症重疾（含原位癌）",
				"premium": 0.00,
				"sumInsured": 0.00,
				"currencyCode": "1",
				"operator": "sunshine",
				"isCheck": null
			}],
			"id": 1001,
			"wjsProductId": 1300300014,
			"haAppGroupId": 987654321,
			"haAppGroupNo": null,
			"countWay": null,
			"productNum": 100,
			"baseWjsProductName": null,
			"baseWjsProductId": null,
			"wjsProductName": "附加团体轻症重大疾病保险",
			"discountRate": 0E-8,
			"sumInsured": 0.00,
			"coveragePeriodType": null,
			"coverageYear": 10,
			"chargePeriodType": null,
			"chargeYear": 10,
			"paymentFrequency": null,
			"commissionRate": 0E-8
		}],
		"success": true
	}
}