var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":84,"id":2405,"methods":[{"el":55,"sc":2,"sl":53},{"el":62,"sc":2,"sl":60},{"el":70,"sc":2,"sl":68},{"el":77,"sc":2,"sl":75},{"el":82,"sc":2,"sl":79}],"name":"Duration","sl":30},{"el":48,"id":2405,"methods":[{"el":46,"sc":3,"sl":43}],"name":"Duration.DurationChoices","sl":34}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_1":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that getSignedDataStore returns an empty map if SignerIdentifier is digest","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_120":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_123":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that getSignedDataStore returns a populate map of all certificate if SignerIdentifier is certificate","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_128":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that getType and getPublicKey works for both implicit and explicit certificates for alg ecdsaNistP256Signature","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_144":{"methods":[{"sl":43},{"sl":60}],"name":"Verify that Ieee1609dot2Peer2PeerPDUContent is correctly encoded for type caCerts","pass":true,"statements":[{"sl":45},{"sl":61}]},"test_146":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that getSignerIdentifier returns correct hash value for type HASH_ONLY","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_148":{"methods":[{"sl":43},{"sl":53},{"sl":60},{"sl":68},{"sl":75}],"name":"Verify that Duration is correctly encoded for type milliseconds and value 10","pass":true,"statements":[{"sl":45},{"sl":54},{"sl":61},{"sl":69},{"sl":76}]},"test_16":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that return first certificates public key of enroll cert and enroll ca consists of implicit certificates","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_167":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_168":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_201":{"methods":[{"sl":43},{"sl":53},{"sl":60},{"sl":68},{"sl":75}],"name":"Verify that Duration is correctly encoded for type sixtyHours and value 10","pass":true,"statements":[{"sl":45},{"sl":54},{"sl":61},{"sl":69},{"sl":76}]},"test_207":{"methods":[{"sl":60}],"name":"Verify that IllegalArgumentException is thrown if none of required premissions doesn't exists","pass":true,"statements":[{"sl":61}]},"test_238":{"methods":[{"sl":60}],"name":"Verify that IllegalArgumentException is thrown if none of required premissions doesn't exists for implicit certificate","pass":true,"statements":[{"sl":61}]},"test_250":{"methods":[{"sl":43},{"sl":60}],"name":"Verify that constructor and getters are correct and it is correctly encoded for explicit certificates","pass":true,"statements":[{"sl":45},{"sl":61}]},"test_257":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that getSignerId returns the included HashedId8 if type is digest","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_290":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Authorization Cert is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_298":{"methods":[{"sl":43},{"sl":60}],"name":"Verify that constructor and getters are correct and it is correctly encoded for implicit certificates","pass":true,"statements":[{"sl":45},{"sl":61}]},"test_304":{"methods":[{"sl":43},{"sl":60}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":45},{"sl":61}]},"test_307":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that getSignerIdentifier returns first signing certificate from a chain for type SIGNER_CERTIFICATE","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_309":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Short term CA is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_321":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_325":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that signed Ieee1609Dot2Data with signed data is generated correctly for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_330":{"methods":[{"sl":43},{"sl":60}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":45},{"sl":61}]},"test_332":{"methods":[{"sl":60},{"sl":79}],"name":"Verify toString","pass":true,"statements":[{"sl":61},{"sl":81}]},"test_343":{"methods":[{"sl":43},{"sl":53},{"sl":60},{"sl":68},{"sl":75}],"name":"Verify that Duration is correctly encoded for type seconds and value 10","pass":true,"statements":[{"sl":45},{"sl":54},{"sl":61},{"sl":69},{"sl":76}]},"test_347":{"methods":[{"sl":60},{"sl":79}],"name":"Verify toString","pass":true,"statements":[{"sl":61},{"sl":81}]},"test_364":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that getType and getPublicKey works for both implicit and explicit certificates for alg ecdsaBrainpoolP256r1Signature","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_367":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_40":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that signed Ieee1609Dot2Data with hashed reference is generated correctly for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_41":{"methods":[{"sl":43},{"sl":53},{"sl":60},{"sl":68},{"sl":75}],"name":"Verify that Duration is correctly encoded for type microseconds and value 10","pass":true,"statements":[{"sl":45},{"sl":54},{"sl":61},{"sl":69},{"sl":76}]},"test_412":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that signed Ieee1609Dot2Data with signed data is generated correctly for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_421":{"methods":[{"sl":43},{"sl":60}],"name":"Verify that SignerIdentifier is correctly encoded for type certificate","pass":true,"statements":[{"sl":45},{"sl":61}]},"test_433":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that findFromStores finds certificate from stores","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_44":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Root CA is generated correctly for explicit certificate (only type supported) for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_447":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that signed Ieee1609Dot2Data with hashed reference is generated correctly for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_462":{"methods":[{"sl":60}],"name":"Verify that both start and duration have to be set or IllegalArgumentException is thrown when encoding","pass":true,"statements":[{"sl":61}]},"test_470":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_471":{"methods":[{"sl":60},{"sl":79}],"name":"Verify toString","pass":true,"statements":[{"sl":61},{"sl":81}]},"test_473":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that getSignedDataStore returns the HashedId8 of the first certificate if type is certificate","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_479":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_485":{"methods":[{"sl":43},{"sl":53},{"sl":60},{"sl":68},{"sl":75}],"name":"Verify that Duration is correctly encoded for type hours and value 10","pass":true,"statements":[{"sl":45},{"sl":54},{"sl":61},{"sl":69},{"sl":76}]},"test_549":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_57":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_577":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_58":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that signed SecuredCrl with signed data is generated correctly","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_585":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that getPublicKey throws IllegalArgumentException if invalid parameters was given","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_590":{"methods":[{"sl":60}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":61}]},"test_61":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that getSignerIdentifier returns first signing certificate from a chain for type CERT_CHAIN","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_614":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Short term CA is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_647":{"methods":[{"sl":43},{"sl":53},{"sl":60},{"sl":68},{"sl":75}],"name":"Verify that Duration is correctly encoded for type years and value 10","pass":true,"statements":[{"sl":45},{"sl":54},{"sl":61},{"sl":69},{"sl":76}]},"test_66":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that buildRecieverStore generates a correct HashedId8 to Receiver Map","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_660":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Authorization Cert is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_674":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_68":{"methods":[{"sl":60}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":61}]},"test_687":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_698":{"methods":[{"sl":43},{"sl":60}],"name":"Verify that SequenceOfCertificate is initialized properly","pass":true,"statements":[{"sl":45},{"sl":61}]},"test_711":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that return first certificates public key of complete chain consists of explicit certificates","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_719":{"methods":[{"sl":43},{"sl":60}],"name":"Verify that CaCertP2pPDU is initialized properly","pass":true,"statements":[{"sl":45},{"sl":61}]},"test_771":{"methods":[{"sl":43},{"sl":53},{"sl":60},{"sl":68},{"sl":75}],"name":"Verify that Duration is correctly encoded for type minutes and value 10","pass":true,"statements":[{"sl":45},{"sl":54},{"sl":61},{"sl":69},{"sl":76}]},"test_778":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that return first certificates public key of enroll cert only consists of implicit certificates","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_806":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Root CA is generated correctly for explicit certificate (only type supported) for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_815":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_822":{"methods":[{"sl":60},{"sl":79}],"name":"Verify toString","pass":true,"statements":[{"sl":61},{"sl":81}]},"test_825":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_836":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_85":{"methods":[{"sl":53},{"sl":79}],"name":"Verify toString","pass":true,"statements":[{"sl":54},{"sl":81}]},"test_850":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_851":{"methods":[{"sl":43},{"sl":60}],"name":"Verify that encode and decode to byte array is correct","pass":true,"statements":[{"sl":45},{"sl":61}]},"test_856":{"methods":[{"sl":79}],"name":"Verify toString()","pass":true,"statements":[{"sl":81}]},"test_869":{"methods":[{"sl":79}],"name":"Verify toString","pass":true,"statements":[{"sl":81}]},"test_870":{"methods":[{"sl":60},{"sl":79}],"name":"Verify toString","pass":true,"statements":[{"sl":61},{"sl":81}]},"test_871":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_876":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_877":{"methods":[{"sl":43},{"sl":60},{"sl":79}],"name":"Verify that it is possible to parse the reference implicit certificate","pass":true,"statements":[{"sl":45},{"sl":61},{"sl":81}]},"test_894":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_924":{"methods":[{"sl":43},{"sl":53},{"sl":60},{"sl":68},{"sl":75}],"name":"Verify that Duration is correctly encoded for type microseconds and value 0","pass":true,"statements":[{"sl":45},{"sl":54},{"sl":61},{"sl":69},{"sl":76}]},"test_945":{"methods":[{"sl":53},{"sl":60}],"name":"Verify getCertID generates a correct HashedId8","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_949":{"methods":[{"sl":43},{"sl":60},{"sl":79}],"name":"Verify that reference structure from D.5.2.2 of P1909.2_D12 is parsed and regenerated correctly","pass":true,"statements":[{"sl":45},{"sl":61},{"sl":81}]},"test_953":{"methods":[{"sl":79}],"name":"Verify toString","pass":true,"statements":[{"sl":81}]},"test_96":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that buildCertStore() generates certificate store maps correctly and buildChain generates correct certificate chain","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_966":{"methods":[{"sl":60}],"name":"Verify that IllegalArgumentException is thrown if none of required premissions doesn't exists for explicit certificate","pass":true,"statements":[{"sl":61}]},"test_979":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":54},{"sl":61}]},"test_991":{"methods":[{"sl":53},{"sl":60}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":54},{"sl":61}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [148, 330, 421, 250, 41, 647, 343, 144, 949, 924, 298, 485, 877, 771, 201, 851, 698, 304, 719], [], [148, 330, 421, 250, 41, 647, 343, 144, 949, 924, 298, 485, 877, 771, 201, 851, 698, 304, 719], [], [], [], [], [], [], [], [815, 123, 148, 447, 120, 16, 307, 991, 479, 58, 674, 806, 945, 167, 146, 577, 778, 876, 470, 325, 711, 825, 321, 41, 61, 647, 585, 0, 40, 871, 367, 364, 343, 96, 836, 66, 614, 44, 687, 549, 309, 979, 924, 850, 412, 168, 85, 660, 473, 1, 485, 290, 128, 257, 57, 771, 201, 433, 894], [815, 123, 148, 447, 120, 16, 307, 991, 479, 58, 674, 806, 945, 167, 146, 577, 778, 876, 470, 325, 711, 825, 321, 41, 61, 647, 585, 0, 40, 871, 367, 364, 343, 96, 836, 66, 614, 44, 687, 549, 309, 979, 924, 850, 412, 168, 85, 660, 473, 1, 485, 290, 128, 257, 57, 771, 201, 433, 894], [], [], [], [], [], [815, 123, 148, 447, 120, 16, 238, 307, 991, 330, 421, 479, 58, 674, 347, 590, 806, 945, 167, 250, 146, 577, 778, 870, 876, 470, 325, 711, 825, 321, 41, 61, 647, 585, 0, 40, 871, 367, 364, 343, 96, 836, 822, 144, 462, 66, 614, 949, 44, 471, 687, 549, 309, 979, 924, 850, 412, 168, 298, 660, 473, 1, 485, 877, 290, 128, 257, 57, 207, 771, 201, 433, 332, 68, 851, 966, 698, 304, 719, 894], [815, 123, 148, 447, 120, 16, 238, 307, 991, 330, 421, 479, 58, 674, 347, 590, 806, 945, 167, 250, 146, 577, 778, 870, 876, 470, 325, 711, 825, 321, 41, 61, 647, 585, 0, 40, 871, 367, 364, 343, 96, 836, 822, 144, 462, 66, 614, 949, 44, 471, 687, 549, 309, 979, 924, 850, 412, 168, 298, 660, 473, 1, 485, 877, 290, 128, 257, 57, 207, 771, 201, 433, 332, 68, 851, 966, 698, 304, 719, 894], [], [], [], [], [], [], [148, 41, 647, 343, 924, 485, 771, 201], [148, 41, 647, 343, 924, 485, 771, 201], [], [], [], [], [], [148, 41, 647, 343, 924, 485, 771, 201], [148, 41, 647, 343, 924, 485, 771, 201], [], [], [347, 870, 869, 953, 822, 949, 471, 85, 877, 332, 856], [], [347, 870, 869, 953, 822, 949, 471, 85, 877, 332, 856], [], [], []]