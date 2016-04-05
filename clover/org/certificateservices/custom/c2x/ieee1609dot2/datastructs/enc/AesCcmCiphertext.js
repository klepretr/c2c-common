var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":93,"id":4378,"methods":[{"el":46,"sc":2,"sl":43},{"el":63,"sc":2,"sl":51},{"el":71,"sc":2,"sl":69},{"el":79,"sc":2,"sl":77},{"el":86,"sc":2,"sl":83},{"el":91,"sc":2,"sl":88}],"name":"AesCcmCiphertext","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":51},{"sl":69},{"sl":77},{"sl":83}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":61},{"sl":70},{"sl":78},{"sl":84},{"sl":85}]},"test_127":{"methods":[{"sl":69},{"sl":77},{"sl":88}],"name":"Verify toString","pass":true,"statements":[{"sl":70},{"sl":78},{"sl":90}]},"test_182":{"methods":[{"sl":51},{"sl":83}],"name":"Verify that fullfillsRequirements verifies all required fields","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":61},{"sl":84},{"sl":85}]},"test_197":{"methods":[{"sl":43},{"sl":83}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":84},{"sl":85}]},"test_213":{"methods":[{"sl":69},{"sl":77},{"sl":88}],"name":"Verify EncryptedDataEncryptionKey","pass":true,"statements":[{"sl":70},{"sl":78},{"sl":90}]},"test_237":{"methods":[{"sl":43},{"sl":83}],"name":"Verify that  Ieee1609Dot2Content is correctly encoded for type encryptedData","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":84},{"sl":85}]},"test_25":{"methods":[{"sl":43},{"sl":83}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":84},{"sl":85}]},"test_313":{"methods":[{"sl":69},{"sl":77},{"sl":88}],"name":"Verify toString","pass":true,"statements":[{"sl":70},{"sl":78},{"sl":90}]},"test_320":{"methods":[{"sl":51},{"sl":83}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":58},{"sl":84},{"sl":85}]},"test_321":{"methods":[{"sl":51},{"sl":69},{"sl":77},{"sl":83}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaNistP256","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":61},{"sl":70},{"sl":78},{"sl":84},{"sl":85}]},"test_351":{"methods":[{"sl":69},{"sl":77},{"sl":88}],"name":"Verify SymmetricCiphertext","pass":true,"statements":[{"sl":70},{"sl":78},{"sl":90}]},"test_354":{"methods":[{"sl":51},{"sl":69},{"sl":77},{"sl":83}],"name":"Verify that symmetric key envelope encryption works correctly","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":61},{"sl":70},{"sl":78},{"sl":84},{"sl":85}]},"test_367":{"methods":[{"sl":43},{"sl":51},{"sl":69},{"sl":77},{"sl":83}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaNistP256","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":61},{"sl":70},{"sl":78},{"sl":84},{"sl":85}]},"test_378":{"methods":[{"sl":51},{"sl":69},{"sl":77},{"sl":83}],"name":"Verify that preshared key encryption works correctly","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":61},{"sl":70},{"sl":78},{"sl":84},{"sl":85}]},"test_402":{"methods":[{"sl":43},{"sl":83}],"name":"Verify that SymmetricCiphertext is correctly encoded for type aes128ccm","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":84},{"sl":85}]},"test_549":{"methods":[{"sl":51},{"sl":69},{"sl":77},{"sl":83}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":61},{"sl":70},{"sl":78},{"sl":84},{"sl":85}]},"test_57":{"methods":[{"sl":43},{"sl":51},{"sl":69},{"sl":77},{"sl":83}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":61},{"sl":70},{"sl":78},{"sl":84},{"sl":85}]},"test_587":{"methods":[{"sl":43},{"sl":83}],"name":"Verify that RecipientInfo is correctly encoded for type symmRecipInfo","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":84},{"sl":85}]},"test_815":{"methods":[{"sl":51},{"sl":69},{"sl":77},{"sl":83}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":61},{"sl":70},{"sl":78},{"sl":84},{"sl":85}]},"test_825":{"methods":[{"sl":51},{"sl":69},{"sl":77},{"sl":83}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":61},{"sl":70},{"sl":78},{"sl":84},{"sl":85}]},"test_876":{"methods":[{"sl":51},{"sl":69},{"sl":77},{"sl":83}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":61},{"sl":70},{"sl":78},{"sl":84},{"sl":85}]},"test_882":{"methods":[{"sl":51},{"sl":83}],"name":"Verify that fullfillsRequirements verifies all required fields","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":61},{"sl":84},{"sl":85}]},"test_889":{"methods":[{"sl":51},{"sl":69},{"sl":77},{"sl":83},{"sl":88}],"name":"Verify toString","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":61},{"sl":70},{"sl":78},{"sl":84},{"sl":85},{"sl":90}]},"test_9":{"methods":[{"sl":43},{"sl":51},{"sl":69},{"sl":77},{"sl":83}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":52},{"sl":53},{"sl":54},{"sl":57},{"sl":60},{"sl":61},{"sl":70},{"sl":78},{"sl":84},{"sl":85}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [25, 57, 197, 9, 367, 587, 402, 237], [25, 57, 197, 9, 367, 587, 402, 237], [25, 57, 197, 9, 367, 587, 402, 237], [], [], [], [], [], [876, 815, 882, 549, 825, 321, 182, 354, 57, 378, 0, 9, 367, 889, 320], [876, 815, 882, 549, 825, 321, 182, 354, 57, 378, 0, 9, 367, 889, 320], [876, 815, 882, 549, 825, 321, 182, 354, 57, 378, 0, 9, 367, 889, 320], [876, 815, 882, 549, 825, 321, 182, 354, 57, 378, 0, 9, 367, 889, 320], [320], [], [876, 815, 882, 549, 825, 321, 182, 354, 57, 378, 0, 9, 367, 889, 320], [320], [], [876, 815, 882, 549, 825, 321, 182, 354, 57, 378, 0, 9, 367, 889], [876, 815, 882, 549, 825, 321, 182, 354, 57, 378, 0, 9, 367, 889], [], [], [], [], [], [], [], [876, 815, 549, 825, 321, 354, 57, 378, 313, 0, 9, 367, 127, 889, 351, 213], [876, 815, 549, 825, 321, 354, 57, 378, 313, 0, 9, 367, 127, 889, 351, 213], [], [], [], [], [], [], [876, 815, 549, 825, 321, 354, 57, 378, 313, 0, 9, 367, 127, 889, 351, 213], [876, 815, 549, 825, 321, 354, 57, 378, 313, 0, 9, 367, 127, 889, 351, 213], [], [], [], [], [25, 876, 815, 882, 549, 825, 321, 182, 354, 57, 378, 197, 0, 9, 367, 587, 889, 402, 320, 237], [25, 876, 815, 882, 549, 825, 321, 182, 354, 57, 378, 197, 0, 9, 367, 587, 889, 402, 320, 237], [25, 876, 815, 882, 549, 825, 321, 182, 354, 57, 378, 197, 0, 9, 367, 587, 889, 402, 320, 237], [], [], [313, 127, 889, 351, 213], [], [313, 127, 889, 351, 213], [], [], []]
