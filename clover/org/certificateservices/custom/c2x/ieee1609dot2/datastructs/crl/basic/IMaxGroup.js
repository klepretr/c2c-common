var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":87,"id":3961,"methods":[{"el":45,"sc":2,"sl":42},{"el":55,"sc":2,"sl":50},{"el":63,"sc":2,"sl":61},{"el":71,"sc":2,"sl":69},{"el":78,"sc":2,"sl":75},{"el":85,"sc":2,"sl":81}],"name":"IMaxGroup","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_12":{"methods":[{"sl":42},{"sl":61},{"sl":69},{"sl":75},{"sl":81}],"name":"Verify toString","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":62},{"sl":70},{"sl":76},{"sl":77},{"sl":83}]},"test_177":{"methods":[{"sl":42},{"sl":50},{"sl":61},{"sl":69},{"sl":75}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":62},{"sl":70},{"sl":76},{"sl":77}]},"test_212":{"methods":[{"sl":42},{"sl":75}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":76},{"sl":77}]},"test_222":{"methods":[{"sl":42},{"sl":61},{"sl":69},{"sl":75},{"sl":81}],"name":"Verify toString","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":62},{"sl":70},{"sl":76},{"sl":77},{"sl":83}]},"test_232":{"methods":[{"sl":42},{"sl":75}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":76},{"sl":77}]},"test_26":{"methods":[{"sl":42},{"sl":75}],"name":"Verify that CrlContentsType is correctly encoded for type fullLinkedCrl","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":76},{"sl":77}]},"test_284":{"methods":[{"sl":42},{"sl":75}],"name":"Verify that SequenceOfIMaxGroup is initialized properly","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":76},{"sl":77}]},"test_3":{"methods":[{"sl":42},{"sl":75}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":76},{"sl":77}]},"test_323":{"methods":[{"sl":50},{"sl":75}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":76},{"sl":77}]},"test_327":{"methods":[{"sl":42},{"sl":75}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":76},{"sl":77}]},"test_335":{"methods":[{"sl":61},{"sl":69},{"sl":81}],"name":"Verify toString","pass":true,"statements":[{"sl":62},{"sl":70},{"sl":83}]},"test_36":{"methods":[{"sl":42},{"sl":75}],"name":"Verify that CrlContentsType is correctly encoded for type deltaLinkedCrl","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":76},{"sl":77}]},"test_481":{"methods":[{"sl":42},{"sl":75}],"name":"Verify that SequenceOfLAGroup is initialized properly","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":76},{"sl":77}]},"test_521":{"methods":[{"sl":42},{"sl":75}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":76},{"sl":77}]},"test_550":{"methods":[{"sl":42},{"sl":75}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":76},{"sl":77}]},"test_58":{"methods":[{"sl":42},{"sl":50},{"sl":75}],"name":"Verify that signed SecuredCrl with signed data is generated correctly","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":76},{"sl":77}]},"test_610":{"methods":[{"sl":42},{"sl":61},{"sl":69},{"sl":75},{"sl":81}],"name":"Verify toString","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":62},{"sl":70},{"sl":76},{"sl":77},{"sl":83}]},"test_620":{"methods":[{"sl":42},{"sl":61},{"sl":69},{"sl":75},{"sl":81}],"name":"Verify toString","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":62},{"sl":70},{"sl":76},{"sl":77},{"sl":83}]},"test_629":{"methods":[{"sl":42},{"sl":61},{"sl":69},{"sl":75},{"sl":81}],"name":"Verify toString","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":62},{"sl":70},{"sl":76},{"sl":77},{"sl":83}]},"test_645":{"methods":[{"sl":50},{"sl":61},{"sl":69},{"sl":75},{"sl":81}],"name":"Verify toString","pass":true,"statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":62},{"sl":70},{"sl":76},{"sl":77},{"sl":83}]},"test_70":{"methods":[{"sl":61},{"sl":69},{"sl":81}],"name":"Verify toString()","pass":true,"statements":[{"sl":62},{"sl":70},{"sl":83}]},"test_80":{"methods":[{"sl":42},{"sl":61},{"sl":69},{"sl":75},{"sl":81}],"name":"Verify toString","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":62},{"sl":70},{"sl":76},{"sl":77},{"sl":83}]},"test_911":{"methods":[{"sl":42},{"sl":75}],"name":"Verify that SequenceOfJMaxGroup is initialized properly","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":76},{"sl":77}]},"test_963":{"methods":[{"sl":42},{"sl":75}],"name":"Verify that IllegalArgumentException is thrown if both individual and groups are null","pass":true,"statements":[{"sl":43},{"sl":44},{"sl":76},{"sl":77}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [284, 232, 521, 481, 963, 3, 212, 177, 911, 26, 80, 327, 58, 620, 550, 36, 12, 610, 222, 629], [284, 232, 521, 481, 963, 3, 212, 177, 911, 26, 80, 327, 58, 620, 550, 36, 12, 610, 222, 629], [284, 232, 521, 481, 963, 3, 212, 177, 911, 26, 80, 327, 58, 620, 550, 36, 12, 610, 222, 629], [], [], [], [], [], [323, 177, 58, 645], [323, 177, 58, 645], [323, 177, 58, 645], [323, 177, 58, 645], [323, 177, 58, 645], [], [], [], [], [], [], [177, 80, 335, 620, 645, 12, 610, 222, 70, 629], [177, 80, 335, 620, 645, 12, 610, 222, 70, 629], [], [], [], [], [], [], [177, 80, 335, 620, 645, 12, 610, 222, 70, 629], [177, 80, 335, 620, 645, 12, 610, 222, 70, 629], [], [], [], [], [284, 232, 521, 481, 323, 963, 3, 212, 177, 911, 26, 80, 327, 58, 620, 550, 645, 36, 12, 610, 222, 629], [284, 232, 521, 481, 323, 963, 3, 212, 177, 911, 26, 80, 327, 58, 620, 550, 645, 36, 12, 610, 222, 629], [284, 232, 521, 481, 323, 963, 3, 212, 177, 911, 26, 80, 327, 58, 620, 550, 645, 36, 12, 610, 222, 629], [], [], [], [80, 335, 620, 645, 12, 610, 222, 70, 629], [], [80, 335, 620, 645, 12, 610, 222, 70, 629], [], [], [], []]
