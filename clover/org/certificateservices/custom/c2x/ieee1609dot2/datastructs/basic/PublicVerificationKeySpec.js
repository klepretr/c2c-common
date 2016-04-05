var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":97,"id":14184,"methods":[{"el":66,"sc":2,"sl":44},{"el":82,"sc":2,"sl":68},{"el":89,"sc":2,"sl":84},{"el":94,"sc":2,"sl":91}],"name":"PublicVerificationKeySpec","sl":39}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_175":{"methods":[{"sl":44}],"name":"Verify that PublicVerificationKey is correctly encoded for type ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":53},{"sl":56},{"sl":57},{"sl":58}]},"test_366":{"methods":[{"sl":91}],"name":"Verify toString","pass":true,"statements":[{"sl":93}]},"test_527":{"methods":[{"sl":44}],"name":"Verify that PublicVerificationKey is correctly encoded for type ecdsaNistP256","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":53},{"sl":56},{"sl":57},{"sl":58}]},"test_580":{"methods":[{"sl":68}],"name":"Verify correct algorithms indicator is returned for ecdsaNistP256","pass":true,"statements":[{"sl":71},{"sl":73},{"sl":74},{"sl":75},{"sl":76}]},"test_915":{"methods":[{"sl":84}],"name":"Verify that xonly ecc curve points throws IllegalArgumentException","pass":true,"statements":[{"sl":86},{"sl":88}]},"test_997":{"methods":[{"sl":68}],"name":"Verify correct algorithms indicator is returned for ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":71},{"sl":73},{"sl":74},{"sl":75},{"sl":76}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [175, 527], [], [], [175, 527], [], [], [175, 527], [], [], [175, 527], [], [], [175, 527], [175, 527], [175, 527], [], [], [], [], [], [], [], [], [], [997, 580], [], [], [997, 580], [], [997, 580], [997, 580], [997, 580], [997, 580], [], [], [], [], [], [], [], [915], [], [915], [], [915], [], [], [366], [], [366], [], [], [], []]
