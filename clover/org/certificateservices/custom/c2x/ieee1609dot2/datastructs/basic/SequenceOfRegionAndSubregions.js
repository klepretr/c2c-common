var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":66,"id":3083,"methods":[{"el":35,"sc":2,"sl":33},{"el":42,"sc":2,"sl":40},{"el":49,"sc":2,"sl":47},{"el":65,"sc":2,"sl":52}],"name":"SequenceOfRegionAndSubregions","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_225":{"methods":[{"sl":33}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":34}]},"test_265":{"methods":[{"sl":33},{"sl":47},{"sl":52}],"name":"Verify toString","pass":true,"statements":[{"sl":34},{"sl":48},{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":63},{"sl":64}]},"test_613":{"methods":[{"sl":33},{"sl":40},{"sl":47}],"name":"Verify that SequenceOfRegionAndSubregions is initialized properly","pass":true,"statements":[{"sl":34},{"sl":41},{"sl":48}]},"test_747":{"methods":[{"sl":33}],"name":"Verify that all fields must be set or IllegalArgumentException is thrown when encoding","pass":true,"statements":[{"sl":34}]},"test_86":{"methods":[{"sl":33}],"name":"Verify toString","pass":true,"statements":[{"sl":34}]},"test_949":{"methods":[{"sl":33}],"name":"Verify that reference structure from D.5.2.2 of P1909.2_D12 is parsed and regenerated correctly","pass":true,"statements":[{"sl":34}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [613, 949, 225, 265, 747, 86], [613, 949, 225, 265, 747, 86], [], [], [], [], [], [613], [613], [], [], [], [], [], [613, 265], [613, 265], [], [], [], [265], [], [265], [265], [265], [265], [], [265], [265], [], [], [265], [265], [], []]
