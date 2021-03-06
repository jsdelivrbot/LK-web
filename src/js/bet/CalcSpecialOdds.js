CalcSpecialOdds = {
	LT:{
		TSHM_odds:[
			'S3SF',
			'S3SM',
			'S3SL'
		],
		ZXHZ_odds:[
			'G3TF',
			'G3TM',
			'G3TL',
			'A3G3T'
		],
		LHH_odds:[
			'LH54',
			'LH53',
			'LH52',
			'LH51',
			'LH43',
			'LH42',
			'LH41',
			'LH32',
			'LH31',
			'LH21'
		]
	},
	HL11x5:{
		BDW_odds:[
			'FOEC',
			'FMN'
		]
	},


	setSpecialOdds :function(it,gameCode){
		var functionName = "";
		for (var i in CalcSpecialOdds[gameCode]) {
			if ($.inArray(it.betType, CalcSpecialOdds[gameCode][i]) > -1) {
				functionName = i;
				break;
			}
		}
		functionName = functionName.replace('_odds','');
		if(functionName)
			this[functionName](it);
	},
	//龙虎和
	LHH: function(it){
		var betType = it.betType;
		var oddsList = [];
		var odds,maxCount,comm;
		var filterData = Global.betSetting.LT[Global.betSetting.currentOddsGroup[it.gameCode]].filter(function(item,index){
			return item.betType == betType;
		});
		//虎
		var Tie = filterData.filter(function(item,index){
			return item.betItem == 'T';
		})[0];
		//龙
		var Long = filterData.filter(function(item,index){
			return item.betItem == 'L';
		})[0];
		//和
		var He = filterData.filter(function(item,index){
			return item.betItem == 'H';
		})[0];
		if(it.result[0].indexOf('T') >= 0)oddsList.push({odds:Tie.odds,maxCount:Tie.maxCount,comm:Tie.comm});
		if(it.result[0].indexOf('L') >= 0)oddsList.push({odds:Long.odds,maxCount:Long.maxCount,comm:Long.comm});
		if(it.result[0].indexOf('H') >= 0)oddsList.push({odds:He.odds,maxCount:He.maxCount,comm:He.comm});
		if(oddsList.length > 0){
			odds = oddsList[0].odds;
			maxCount = oddsList[0].maxCount;
			comm = oddsList[0].comm;
		}
		if(oddsList.length > 1){
			for(var i = 1; i < oddsList.length; i++){
				if(odds < oddsList[i].odds){
					odds = oddsList[i].odds;
					maxCount = oddsList[i].maxCount;
					comm = oddsList[i].comm;
				}
			}
		}
		it.odds = odds;
		it.maxCount = maxCount;
		it.comm = comm;
	},

	/*前三，中三，后三和值尾数,前三，中三，后三特殊号码*/
	TSHM:function(it){
		var betType = it.betType;
		var filterData = Global.betSetting.LT[Global.betSetting.currentOddsGroup[it.gameCode]].filter(function(item,index){
			return item.betType == betType
		});
		var PN = filterData.filter(function(item,index){
			return item.betItem == 'PAIR'
		})[0];
		var SN = filterData.filter(function(item,index){
			return item.betItem == 'SN'
		})[0];
		var TN = filterData.filter(function(item,index){
			return item.betItem == 'TRI'
		})[0];

		if(it.result[0].join(' ').indexOf('TRI')>=0){
			it.maxCount = TN.maxCount;
			it.odds = TN.odds;
			it.comm = TN.comm;
		}else if(it.result[0].join(' ').indexOf('SN') >=0){
			it.maxCount = SN.maxCount;
			it.odds = SN.odds;
			it.comm = SN.comm;
		}else{
			it.maxCount = PN.maxCount;
			it.odds = PN.odds;
			it.comm = PN.comm;
		}

	},
	//组选和值
	ZXHZ:function(it){
		var betType = it.betType;
		var filterData = Global.betSetting.LT[Global.betSetting.currentOddsGroup[it.gameCode]].filter(function(item,index){
			return item.betType == betType
		});
		var list;
		if(it.result[0].length == 0) return false;
		for(var i = 0; i < it.result[0].length; i++){
			var data = filterData.filter(function(item,index){
				return item.betItem == it.result[0][i]
			})[0];
			if(!list ||　data.odds > list.odds){
				list = {
					maxCount:data.maxCount,
					odds:data.odds,
					comm:data.comm
				}
			}
		}
		it.maxCount = list.maxCount;
		it.odds = list.odds;
		it.comm = list.comm;

	},
	K3_getOdds:function(data,betType){
		var it = BetRuleInstance;
		var filterData = Global.betSetting.K3[Global.betSetting.currentOddsGroup[it.gameCode]].filter(function(item,index){
			return item.betType == betType
		});
		if(it.result[0].length == 1){
			var oneData =  filterData.filter(function(item,index){
				return item.betItem == it.result[0][0]
			})[0];
			it.odds = oneData.odds;
			it.maxCount = oneData.maxCount;
			it.comm = oneData.comm;
		}else if(it.result[0].length > 1){
			var allData = [];
			for(var i = 0; i < it.result[0].length;i++){
				var listData = filterData.filter(function(item,index){
					return item.betItem == it.result[0][i]
				})[0];
				allData.push({odds:listData.odds,maxCount:listData.maxCount,comm:listData.comm})
			}
			allData.sort(Util.sortNumber('desc','odds'));
			it.odds = allData[0].odds;
			it.maxCount = allData[0].odds;
			it.comm = allData[0].odds;
		}
	},
	BDW:function(it){
		var betType = it.betType;
		var filterData = Global.betSetting.HL11x5[Global.betSetting.currentOddsGroup[it.gameCode]].filter(function(item,index){
			return item.betType == betType
		});
		if(it.result[0].length == 1){
			var oneData =  filterData.filter(function(item,index){
				return item.betItem == it.result[0][0]
			})[0];
			it.odds = oneData.odds
		}else if(it.result[0].length > 1){
			var allData = [];
			for(var i = 0; i < it.result[0].length;i++){
				var listData = filterData.filter(function(item,index){
					return item.betItem == it.result[0][i]
				})[0];
				allData.push({odds:listData.odds,maxCount:listData.maxCount,comm:listData.comm})
			}
			allData.sort(Util.sortNumber('desc','odds'));
			it.odds = allData[0].odds;
			it.maxCount = allData[0].odds;
			it.comm = allData[0].odds;
		}
	}
};