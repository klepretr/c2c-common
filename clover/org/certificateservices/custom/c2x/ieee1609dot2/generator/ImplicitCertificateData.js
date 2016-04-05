var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":87,"id":5028,"methods":[{"el":41,"sc":2,"sl":39},{"el":48,"sc":2,"sl":46},{"el":58,"sc":2,"sl":55},{"el":68,"sc":2,"sl":65},{"el":76,"sc":2,"sl":74},{"el":84,"sc":2,"sl":82}],"name":"ImplicitCertificateData","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":65},{"sl":82}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":67},{"sl":83}]},"test_120":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_123":{"methods":[{"sl":65},{"sl":82}],"name":"Verify that getSignedDataStore returns a populate map of all certificate if SignerIdentifier is certificate","pass":true,"statements":[{"sl":67},{"sl":83}]},"test_128":{"methods":[{"sl":65},{"sl":82}],"name":"Verify that getType and getPublicKey works for both implicit and explicit certificates for alg ecdsaNistP256Signature","pass":true,"statements":[{"sl":67},{"sl":83}]},"test_16":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that return first certificates public key of enroll cert and enroll ca consists of implicit certificates","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_167":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_168":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_325":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that signed Ieee1609Dot2Data with signed data is generated correctly for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_364":{"methods":[{"sl":65},{"sl":82}],"name":"Verify that getType and getPublicKey works for both implicit and explicit certificates for alg ecdsaBrainpoolP256r1Signature","pass":true,"statements":[{"sl":67},{"sl":83}]},"test_40":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that signed Ieee1609Dot2Data with hashed reference is generated correctly for alg: ecdsaNistP256","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_412":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that signed Ieee1609Dot2Data with signed data is generated correctly for alg: ecdsaNistP256","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_433":{"methods":[{"sl":65},{"sl":82}],"name":"Verify that findFromStores finds certificate from stores","pass":true,"statements":[{"sl":67},{"sl":83}]},"test_447":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that signed Ieee1609Dot2Data with hashed reference is generated correctly for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_470":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_473":{"methods":[{"sl":65},{"sl":82}],"name":"Verify that getSignedDataStore returns the HashedId8 of the first certificate if type is certificate","pass":true,"statements":[{"sl":67},{"sl":83}]},"test_479":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_577":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_58":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that signed SecuredCrl with signed data is generated correctly","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_585":{"methods":[{"sl":65},{"sl":82}],"name":"Verify that getPublicKey throws IllegalArgumentException if invalid parameters was given","pass":true,"statements":[{"sl":67},{"sl":83}]},"test_687":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_778":{"methods":[{"sl":65},{"sl":82}],"name":"Verify that return first certificates public key of enroll cert only consists of implicit certificates","pass":true,"statements":[{"sl":67},{"sl":83}]},"test_836":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_876":{"methods":[{"sl":65},{"sl":82}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":67},{"sl":83}]},"test_894":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]},"test_979":{"methods":[{"sl":65},{"sl":74},{"sl":82}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":67},{"sl":75},{"sl":83}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [876, 470, 325, 687, 979, 123, 447, 120, 128, 16, 412, 585, 0, 479, 58, 168, 433, 40, 364, 836, 167, 473, 577, 894, 778], [], [876, 470, 325, 687, 979, 123, 447, 120, 128, 16, 412, 585, 0, 479, 58, 168, 433, 40, 364, 836, 167, 473, 577, 894, 778], [], [], [], [], [], [], [470, 325, 687, 979, 447, 120, 16, 412, 479, 58, 168, 40, 836, 167, 577, 894], [470, 325, 687, 979, 447, 120, 16, 412, 479, 58, 168, 40, 836, 167, 577, 894], [], [], [], [], [], [], [876, 470, 325, 687, 979, 123, 447, 120, 128, 16, 412, 585, 0, 479, 58, 168, 433, 40, 364, 836, 167, 473, 577, 894, 778], [876, 470, 325, 687, 979, 123, 447, 120, 128, 16, 412, 585, 0, 479, 58, 168, 433, 40, 364, 836, 167, 473, 577, 894, 778], [], [], [], []]
