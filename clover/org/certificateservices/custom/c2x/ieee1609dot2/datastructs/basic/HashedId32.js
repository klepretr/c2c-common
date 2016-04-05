var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":62,"id":2660,"methods":[{"el":41,"sc":2,"sl":39},{"el":50,"sc":2,"sl":48},{"el":55,"sc":2,"sl":52},{"el":60,"sc":2,"sl":57}],"name":"HashedId32","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_390":{"methods":[{"sl":48},{"sl":52},{"sl":57}],"name":"Verify toString","pass":true,"statements":[{"sl":49},{"sl":54},{"sl":59}]},"test_533":{"methods":[{"sl":39},{"sl":48},{"sl":52}],"name":"Verify that HashedId32 only stores the 32 least significant bytes","pass":true,"statements":[{"sl":40},{"sl":49},{"sl":54}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [533], [533], [], [], [], [], [], [], [], [390, 533], [390, 533], [], [], [390, 533], [], [390, 533], [], [], [390], [], [390], [], [], []]
