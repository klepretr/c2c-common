var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":97,"id":3601,"methods":[{"el":43,"sc":2,"sl":40},{"el":54,"sc":2,"sl":48},{"el":62,"sc":2,"sl":60},{"el":70,"sc":2,"sl":68},{"el":78,"sc":2,"sl":76},{"el":87,"sc":2,"sl":82},{"el":95,"sc":2,"sl":89}],"name":"LinkageData","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_163":{"methods":[{"sl":40},{"sl":48},{"sl":60},{"sl":68},{"sl":76},{"sl":82}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":61},{"sl":69},{"sl":77},{"sl":83},{"sl":84},{"sl":85}]},"test_286":{"methods":[{"sl":40},{"sl":82}],"name":"Verify that CertificateId is correctly encoded for type linkageData","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":83},{"sl":84},{"sl":85}]},"test_329":{"methods":[{"sl":60},{"sl":68},{"sl":76},{"sl":89}],"name":"Verify toString","pass":true,"statements":[{"sl":61},{"sl":69},{"sl":77},{"sl":91},{"sl":92},{"sl":93}]},"test_732":{"methods":[{"sl":48},{"sl":60},{"sl":68},{"sl":76},{"sl":82},{"sl":89}],"name":"Verify toString","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":61},{"sl":69},{"sl":77},{"sl":83},{"sl":84},{"sl":85},{"sl":91},{"sl":92},{"sl":93}]},"test_87":{"methods":[{"sl":48},{"sl":82}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":83},{"sl":84},{"sl":85}]},"test_877":{"methods":[{"sl":40},{"sl":60},{"sl":68},{"sl":76},{"sl":82},{"sl":89}],"name":"Verify that it is possible to parse the reference implicit certificate","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":61},{"sl":69},{"sl":77},{"sl":83},{"sl":84},{"sl":85},{"sl":91},{"sl":92},{"sl":93}]},"test_949":{"methods":[{"sl":40},{"sl":60},{"sl":68},{"sl":76},{"sl":82},{"sl":89}],"name":"Verify that reference structure from D.5.2.2 of P1909.2_D12 is parsed and regenerated correctly","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":61},{"sl":69},{"sl":77},{"sl":83},{"sl":84},{"sl":85},{"sl":91},{"sl":92},{"sl":93}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [163, 877, 286, 949], [163, 877, 286, 949], [163, 877, 286, 949], [], [], [], [], [], [732, 87, 163], [732, 87, 163], [732, 87, 163], [732, 87, 163], [732, 87, 163], [732, 163], [], [], [], [], [], [], [732, 163, 877, 329, 949], [732, 163, 877, 329, 949], [], [], [], [], [], [], [732, 163, 877, 329, 949], [732, 163, 877, 329, 949], [], [], [], [], [], [], [732, 163, 877, 329, 949], [732, 163, 877, 329, 949], [], [], [], [], [732, 87, 163, 877, 286, 949], [732, 87, 163, 877, 286, 949], [732, 87, 163, 877, 286, 949], [732, 87, 163, 877, 286, 949], [], [], [], [732, 877, 329, 949], [], [732, 877, 329, 949], [732, 877, 329, 949], [732, 877, 329, 949], [], [], [], []]
