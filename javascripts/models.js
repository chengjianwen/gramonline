var models = [
{ name: "loop",
  value: { "class": "GraphLinksModel",
  "linkFromPortIdProperty": "fromPort",
  "linkToPortIdProperty": "toPort",
  "nodeDataArray": [ 
{"key":-1, "category":"Start", "loc":"265.78459999999995 -66.1384", "text":"开始", "fill":null},
{"key":-2, "category":"End", "loc":"14.20599999999979 312.76900000000006", "text":"终止", "fill":null},
{"category":"Procedure", "text":"n = 100", "key":-3, "loc":"266.37108427447936 11.6451243041992", "fill":null},
{"category":"Procedure", "text":"sum = 0\ni = 0", "key":-4, "loc":"266.3923 97.9907", "fill":null},
{"category":"Function", "text":"i < n", "key":-5, "loc":"266.8564 197.23940000000005", "fill":"red"},
{"category":"Procedure", "text":"sum += Math.sqrt(n*n-i*i)\ni = i + 1", "key":-6, "loc":"266.07179999999994 329.4547999999999", "fill":null},
{"category":"Procedure", "text":"pi = 4 * sum/n/n\nalert(pi)", "key":-7, "loc":"14.64100000000002 197.74500625000007"}
 ],
  "linkDataArray": [ 
{"from":-6, "to":-5, "fromPort":"R", "toPort":"R", "points":[334.862586743164,329.45479999999986,344.862586743164,329.45479999999986,344.862586743164,197.23940000000005,334.6020699707031,197.23940000000005,324.3415531982422,197.23940000000005,314.3415531982422,197.23940000000005]},
{"from":-5, "to":-6, "fromPort":"B", "toPort":"T", "visible":true, "points":[266.8564,230.86484860839846,266.8564,240.86484860839846,266.8564,263.3782378479003,266.07179999999994,263.3782378479003,266.07179999999994,285.89162708740224,266.07179999999994,295.89162708740224], "text":"true"},
{"from":-1, "to":-3, "fromPort":"B", "toPort":"T", "points":[265.78459999999995,-44.388400000000004,265.78459999999995,-34.388400000000004,265.78459999999995,-25.215500000000013,266.37108427447936,-25.215500000000013,266.37108427447936,-16.042600000000018,266.37108427447936,-6.042600000000018]},
{"from":-3, "to":-4, "fromPort":"B", "toPort":"T", "points":[266.37108427447936,29.332848608398418,266.37108427447936,39.33284860839842,266.37108427447936,50.84904999999999,266.3923,50.84904999999999,266.3923,62.36525139160156,266.3923,72.36525139160156]},
{"from":-4, "to":-5, "fromPort":"B", "toPort":"T", "points":[266.3923,123.61614860839843,266.3923,133.61614860839842,266.3923,143.61505,266.8564,143.61505,266.8564,153.6139513916016,266.8564,163.6139513916016]},
{"from":-5, "to":-7, "fromPort":"L", "toPort":"R", "visible":true, "points":[219.37124680175782,197.23940000000005,209.37124680175782,197.23940000000005,148.86573872680665,197.23940000000005,148.86573872680665,197.74500625000007,88.36023065185549,197.74500625000007,78.36023065185549,197.74500625000007], "text":"false"},
{"from":-7, "to":-2, "fromPort":"B", "toPort":"T", "points":[14.64100000000002,223.3704548583985,14.64100000000002,233.3704548583985,14.64100000000002,258.44472742919925,14.20599999999979,258.44472742919925,14.20599999999979,283.51900000000006,14.20599999999979,293.51900000000006]}
 ]
  },
},
{
  name: "pi",
  value: { "class": "GraphLinksModel",
  "linkFromPortIdProperty": "fromPort",
  "linkToPortIdProperty": "toPort",
  "nodeDataArray": [ 
{"key":-1, "category":"Start", "loc":"265.78459999999995 -66.1384", "text":"开始", "fill":null},
{"key":-2, "category":"End", "loc":"14.20599999999979 312.76900000000006", "text":"终止", "fill":null},
{"category":"Procedure", "text":"n = 100", "key":-3, "loc":"266.37108427447936 11.6451243041992", "fill":null},
{"category":"Procedure", "text":"sum = 0\ni = 0", "key":-4, "loc":"266.3923 97.9907", "fill":null},
{"category":"Function", "text":"i < n", "key":-5, "loc":"266.8564 197.23940000000005", "fill":"red"},
{"category":"Procedure", "text":"sum += Math.sqrt(n*n-i*i)\ni = i + 1", "key":-6, "loc":"266.07179999999994 329.4547999999999", "fill":null},
{"category":"Procedure", "text":"pi = 4 * sum/n/n\nalert(pi)", "key":-7, "loc":"14.64100000000002 197.74500625000007"}
 ],
  "linkDataArray": [ 
{"from":-6, "to":-5, "fromPort":"R", "toPort":"R", "points":[334.862586743164,329.45479999999986,344.862586743164,329.45479999999986,344.862586743164,197.23940000000005,334.6020699707031,197.23940000000005,324.3415531982422,197.23940000000005,314.3415531982422,197.23940000000005]},
{"from":-5, "to":-6, "fromPort":"B", "toPort":"T", "visible":true, "points":[266.8564,230.86484860839846,266.8564,240.86484860839846,266.8564,263.3782378479003,266.07179999999994,263.3782378479003,266.07179999999994,285.89162708740224,266.07179999999994,295.89162708740224], "text":"true"},
{"from":-1, "to":-3, "fromPort":"B", "toPort":"T", "points":[265.78459999999995,-44.388400000000004,265.78459999999995,-34.388400000000004,265.78459999999995,-25.215500000000013,266.37108427447936,-25.215500000000013,266.37108427447936,-16.042600000000018,266.37108427447936,-6.042600000000018]},
{"from":-3, "to":-4, "fromPort":"B", "toPort":"T", "points":[266.37108427447936,29.332848608398418,266.37108427447936,39.33284860839842,266.37108427447936,50.84904999999999,266.3923,50.84904999999999,266.3923,62.36525139160156,266.3923,72.36525139160156]},
{"from":-4, "to":-5, "fromPort":"B", "toPort":"T", "points":[266.3923,123.61614860839843,266.3923,133.61614860839842,266.3923,143.61505,266.8564,143.61505,266.8564,153.6139513916016,266.8564,163.6139513916016]},
{"from":-5, "to":-7, "fromPort":"L", "toPort":"R", "visible":true, "points":[219.37124680175782,197.23940000000005,209.37124680175782,197.23940000000005,148.86573872680665,197.23940000000005,148.86573872680665,197.74500625000007,88.36023065185549,197.74500625000007,78.36023065185549,197.74500625000007], "text":"false"},
{"from":-7, "to":-2, "fromPort":"B", "toPort":"T", "points":[14.64100000000002,223.3704548583985,14.64100000000002,233.3704548583985,14.64100000000002,258.44472742919925,14.20599999999979,258.44472742919925,14.20599999999979,283.51900000000006,14.20599999999979,293.51900000000006]}
 ]
 }
}]
