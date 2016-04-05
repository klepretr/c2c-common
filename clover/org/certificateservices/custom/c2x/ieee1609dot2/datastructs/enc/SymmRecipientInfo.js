var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":81,"id":4512,"methods":[{"el":40,"sc":2,"sl":37},{"el":51,"sc":2,"sl":45},{"el":59,"sc":2,"sl":57},{"el":67,"sc":2,"sl":65},{"el":74,"sc":2,"sl":71},{"el":79,"sc":2,"sl":76}],"name":"SymmRecipientInfo","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_197":{"methods":[{"sl":37},{"sl":45},{"sl":57},{"sl":65},{"sl":71}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":38},{"sl":39},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":58},{"sl":66},{"sl":72},{"sl":73}]},"test_213":{"methods":[{"sl":57},{"sl":65},{"sl":76}],"name":"Verify EncryptedDataEncryptionKey","pass":true,"statements":[{"sl":58},{"sl":66},{"sl":78}]},"test_313":{"methods":[{"sl":45},{"sl":57},{"sl":65},{"sl":71},{"sl":76}],"name":"Verify toString","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":58},{"sl":66},{"sl":72},{"sl":73},{"sl":78}]},"test_354":{"methods":[{"sl":45},{"sl":57},{"sl":65},{"sl":71}],"name":"Verify that symmetric key envelope encryption works correctly","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":58},{"sl":66},{"sl":72},{"sl":73}]},"test_528":{"methods":[{"sl":45},{"sl":71}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":72},{"sl":73}]},"test_587":{"methods":[{"sl":37},{"sl":71}],"name":"Verify that RecipientInfo is correctly encoded for type symmRecipInfo","pass":true,"statements":[{"sl":38},{"sl":39},{"sl":72},{"sl":73}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [587, 197], [587, 197], [587, 197], [], [], [], [], [], [354, 313, 528, 197], [354, 313, 528, 197], [354, 313, 528, 197], [354, 313, 528, 197], [354, 313, 528, 197], [], [], [], [], [], [], [], [354, 313, 197, 213], [354, 313, 197, 213], [], [], [], [], [], [], [354, 313, 197, 213], [354, 313, 197, 213], [], [], [], [], [587, 354, 313, 528, 197], [587, 354, 313, 528, 197], [587, 354, 313, 528, 197], [], [], [313, 213], [], [313, 213], [], [], []]
