var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":67,"id":2275,"methods":[{"el":21,"sc":2,"sl":15},{"el":27,"sc":2,"sl":23},{"el":32,"sc":2,"sl":29},{"el":37,"sc":2,"sl":34},{"el":42,"sc":2,"sl":39},{"el":48,"sc":2,"sl":44},{"el":57,"sc":2,"sl":50},{"el":62,"sc":2,"sl":59}],"name":"Mac1","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":15},{"sl":23},{"sl":34},{"sl":44},{"sl":50}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":16},{"sl":19},{"sl":20},{"sl":25},{"sl":36},{"sl":47},{"sl":53},{"sl":54},{"sl":55},{"sl":56}]},"test_242":{"methods":[{"sl":15},{"sl":23},{"sl":34},{"sl":44},{"sl":50}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":16},{"sl":19},{"sl":20},{"sl":25},{"sl":36},{"sl":47},{"sl":53},{"sl":54},{"sl":55},{"sl":56}]},"test_321":{"methods":[{"sl":15},{"sl":23},{"sl":34},{"sl":44},{"sl":50}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaNistP256","pass":true,"statements":[{"sl":16},{"sl":19},{"sl":20},{"sl":25},{"sl":36},{"sl":47},{"sl":53},{"sl":54},{"sl":55},{"sl":56}]},"test_367":{"methods":[{"sl":15},{"sl":23},{"sl":34},{"sl":44},{"sl":50}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaNistP256","pass":true,"statements":[{"sl":16},{"sl":19},{"sl":20},{"sl":25},{"sl":36},{"sl":47},{"sl":53},{"sl":54},{"sl":55},{"sl":56}]},"test_549":{"methods":[{"sl":15},{"sl":23},{"sl":34},{"sl":44},{"sl":50}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":16},{"sl":19},{"sl":20},{"sl":25},{"sl":36},{"sl":47},{"sl":53},{"sl":54},{"sl":55},{"sl":56}]},"test_57":{"methods":[{"sl":15},{"sl":23},{"sl":34},{"sl":44},{"sl":50}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":16},{"sl":19},{"sl":20},{"sl":25},{"sl":36},{"sl":47},{"sl":53},{"sl":54},{"sl":55},{"sl":56}]},"test_699":{"methods":[{"sl":15},{"sl":23},{"sl":34},{"sl":44},{"sl":50}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":16},{"sl":19},{"sl":20},{"sl":25},{"sl":36},{"sl":47},{"sl":53},{"sl":54},{"sl":55},{"sl":56}]},"test_707":{"methods":[{"sl":15},{"sl":23},{"sl":34},{"sl":44},{"sl":50}],"name":"Verify that eCEISEncryptSymmetricKey and eCEISDecryptSymmetricKey encrypts and decrypts symmetric key correcly.","pass":true,"statements":[{"sl":16},{"sl":19},{"sl":20},{"sl":25},{"sl":36},{"sl":47},{"sl":53},{"sl":54},{"sl":55},{"sl":56}]},"test_815":{"methods":[{"sl":15},{"sl":23},{"sl":34},{"sl":44},{"sl":50}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":16},{"sl":19},{"sl":20},{"sl":25},{"sl":36},{"sl":47},{"sl":53},{"sl":54},{"sl":55},{"sl":56}]},"test_825":{"methods":[{"sl":15},{"sl":23},{"sl":34},{"sl":44},{"sl":50}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":16},{"sl":19},{"sl":20},{"sl":25},{"sl":36},{"sl":47},{"sl":53},{"sl":54},{"sl":55},{"sl":56}]},"test_876":{"methods":[{"sl":15},{"sl":23},{"sl":34},{"sl":44},{"sl":50}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":16},{"sl":19},{"sl":20},{"sl":25},{"sl":36},{"sl":47},{"sl":53},{"sl":54},{"sl":55},{"sl":56}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [], [], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [], [], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [], [], [], [], [], [], [], [], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [], [], [], [], [], [], [], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [], [], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [], [], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [], [], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [321, 367, 876, 815, 707, 57, 549, 242, 0, 825, 699], [], [], [], [], [], [], [], [], [], [], []]
