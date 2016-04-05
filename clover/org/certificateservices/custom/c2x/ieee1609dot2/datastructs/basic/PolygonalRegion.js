var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":82,"id":2790,"methods":[{"el":41,"sc":2,"sl":39},{"el":50,"sc":2,"sl":47},{"el":59,"sc":2,"sl":56},{"el":65,"sc":2,"sl":61},{"el":81,"sc":2,"sl":68}],"name":"PolygonalRegion","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_399":{"methods":[{"sl":39},{"sl":47},{"sl":56},{"sl":61}],"name":"Verify that PolygonalRegion is initialized properly","pass":true,"statements":[{"sl":40},{"sl":48},{"sl":49},{"sl":57},{"sl":58},{"sl":62}]},"test_796":{"methods":[{"sl":56},{"sl":61}],"name":"Verify that plygonalRegion of length less than 3 throws IllegalArgumentException","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":62},{"sl":63}]},"test_865":{"methods":[{"sl":56},{"sl":61},{"sl":68}],"name":"Verify toString","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":62},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":75},{"sl":76},{"sl":79},{"sl":80}]},"test_949":{"methods":[{"sl":39}],"name":"Verify that reference structure from D.5.2.2 of P1909.2_D12 is parsed and regenerated correctly","pass":true,"statements":[{"sl":40}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [399, 949], [399, 949], [], [], [], [], [], [], [399], [399], [399], [], [], [], [], [], [], [796, 399, 865], [796, 399, 865], [796, 399, 865], [], [], [796, 399, 865], [796, 399, 865], [796], [], [], [], [], [865], [], [865], [865], [865], [865], [], [865], [865], [], [], [865], [865], [], []]