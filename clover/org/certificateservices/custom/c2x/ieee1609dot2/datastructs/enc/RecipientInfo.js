var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":106,"id":4471,"methods":[{"el":70,"sc":2,"sl":68},{"el":77,"sc":2,"sl":75},{"el":84,"sc":2,"sl":82},{"el":92,"sc":2,"sl":90},{"el":99,"sc":2,"sl":97},{"el":104,"sc":2,"sl":101}],"name":"RecipientInfo","sl":40},{"el":63,"id":4471,"methods":[{"el":62,"sc":3,"sl":52}],"name":"RecipientInfo.RecipientInfoChoices","sl":45}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":82},{"sl":90},{"sl":97}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":83},{"sl":91},{"sl":98}]},"test_127":{"methods":[{"sl":90},{"sl":101}],"name":"Verify toString","pass":true,"statements":[{"sl":91},{"sl":103}]},"test_157":{"methods":[{"sl":52},{"sl":90}],"name":"Verify that SequenceOfRecipientInfo is initialized properly","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":91}]},"test_182":{"methods":[{"sl":68},{"sl":90}],"name":"Verify that fullfillsRequirements verifies all required fields","pass":true,"statements":[{"sl":69},{"sl":91}]},"test_213":{"methods":[{"sl":68},{"sl":75},{"sl":82},{"sl":101}],"name":"Verify EncryptedDataEncryptionKey","pass":true,"statements":[{"sl":69},{"sl":76},{"sl":83},{"sl":103}]},"test_237":{"methods":[{"sl":52},{"sl":90}],"name":"Verify that  Ieee1609Dot2Content is correctly encoded for type encryptedData","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":91}]},"test_25":{"methods":[{"sl":52},{"sl":90}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":91}]},"test_254":{"methods":[{"sl":52},{"sl":90},{"sl":97}],"name":"Verify that RecipientInfo is correctly encoded for type certRecipInfo","pass":true,"statements":[{"sl":54},{"sl":59},{"sl":60},{"sl":91},{"sl":98}]},"test_321":{"methods":[{"sl":82},{"sl":90},{"sl":97}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaNistP256","pass":true,"statements":[{"sl":83},{"sl":91},{"sl":98}]},"test_344":{"methods":[{"sl":90},{"sl":101}],"name":"Verify toString","pass":true,"statements":[{"sl":91},{"sl":103}]},"test_345":{"methods":[{"sl":52},{"sl":90},{"sl":97}],"name":"Verify that RecipientInfo is correctly encoded for type rekRecipInfo","pass":true,"statements":[{"sl":54},{"sl":59},{"sl":60},{"sl":91},{"sl":98}]},"test_352":{"methods":[{"sl":90}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":91}]},"test_354":{"methods":[{"sl":75},{"sl":90},{"sl":97}],"name":"Verify that symmetric key envelope encryption works correctly","pass":true,"statements":[{"sl":76},{"sl":91},{"sl":98}]},"test_367":{"methods":[{"sl":52},{"sl":82},{"sl":90},{"sl":97}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":59},{"sl":60},{"sl":83},{"sl":91},{"sl":98}]},"test_378":{"methods":[{"sl":68},{"sl":90},{"sl":97}],"name":"Verify that preshared key encryption works correctly","pass":true,"statements":[{"sl":69},{"sl":91},{"sl":98}]},"test_496":{"methods":[{"sl":52},{"sl":90},{"sl":97}],"name":"Verify that RecipientInfo is correctly encoded for type pskRecipInfo","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":91},{"sl":98}]},"test_549":{"methods":[{"sl":82},{"sl":90},{"sl":97}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":83},{"sl":91},{"sl":98}]},"test_57":{"methods":[{"sl":52},{"sl":82},{"sl":90},{"sl":97}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":59},{"sl":60},{"sl":83},{"sl":91},{"sl":98}]},"test_587":{"methods":[{"sl":52},{"sl":90},{"sl":97}],"name":"Verify that RecipientInfo is correctly encoded for type symmRecipInfo","pass":true,"statements":[{"sl":54},{"sl":57},{"sl":58},{"sl":91},{"sl":98}]},"test_815":{"methods":[{"sl":82},{"sl":90},{"sl":97}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":83},{"sl":91},{"sl":98}]},"test_825":{"methods":[{"sl":82},{"sl":90},{"sl":97}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":83},{"sl":91},{"sl":98}]},"test_843":{"methods":[{"sl":52},{"sl":90},{"sl":97}],"name":"Verify that RecipientInfo is correctly encoded for type signedDataRecipInfo","pass":true,"statements":[{"sl":54},{"sl":59},{"sl":60},{"sl":91},{"sl":98}]},"test_876":{"methods":[{"sl":82},{"sl":90},{"sl":97}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":83},{"sl":91},{"sl":98}]},"test_882":{"methods":[{"sl":68},{"sl":90}],"name":"Verify that fullfillsRequirements verifies all required fields","pass":true,"statements":[{"sl":69},{"sl":91}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [25, 157, 367, 587, 496, 345, 843, 57, 237, 254], [], [25, 157, 367, 587, 496, 345, 843, 57, 237, 254], [25, 157, 496, 237], [25, 157, 496, 237], [587], [587], [367, 345, 843, 57, 254], [367, 345, 843, 57, 254], [], [], [], [], [], [], [], [882, 182, 378, 213], [882, 182, 378, 213], [], [], [], [], [], [354, 213], [354, 213], [], [], [], [], [], [367, 876, 815, 549, 825, 321, 57, 0, 213], [367, 876, 815, 549, 825, 321, 57, 0, 213], [], [], [], [], [], [], [25, 157, 367, 876, 815, 587, 127, 496, 882, 549, 344, 345, 825, 321, 182, 843, 354, 352, 57, 378, 237, 0, 254], [25, 157, 367, 876, 815, 587, 127, 496, 882, 549, 344, 345, 825, 321, 182, 843, 354, 352, 57, 378, 237, 0, 254], [], [], [], [], [], [367, 876, 815, 587, 496, 549, 345, 825, 321, 843, 354, 57, 378, 0, 254], [367, 876, 815, 587, 496, 549, 345, 825, 321, 843, 354, 57, 378, 0, 254], [], [], [127, 344, 213], [], [127, 344, 213], [], [], []]
