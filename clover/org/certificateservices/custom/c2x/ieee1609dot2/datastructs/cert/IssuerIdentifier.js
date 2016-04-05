var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":110,"id":3573,"methods":[{"el":69,"sc":2,"sl":67},{"el":76,"sc":2,"sl":74},{"el":83,"sc":2,"sl":81},{"el":90,"sc":2,"sl":88},{"el":97,"sc":2,"sl":92},{"el":108,"sc":2,"sl":99}],"name":"IssuerIdentifier","sl":43},{"el":62,"id":3573,"methods":[{"el":61,"sc":3,"sl":52}],"name":"IssuerIdentifier.IssuerIdentifierChoices","sl":48}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_1":{"methods":[{"sl":74},{"sl":81}],"name":"Verify that getSignedDataStore returns an empty map if SignerIdentifier is digest","pass":true,"statements":[{"sl":75},{"sl":82}]},"test_120":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_123":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that getSignedDataStore returns a populate map of all certificate if SignerIdentifier is certificate","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_128":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that getType and getPublicKey works for both implicit and explicit certificates for alg ecdsaNistP256Signature","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_144":{"methods":[{"sl":52},{"sl":81}],"name":"Verify that Ieee1609dot2Peer2PeerPDUContent is correctly encoded for type caCerts","pass":true,"statements":[{"sl":54},{"sl":57},{"sl":59},{"sl":82}]},"test_146":{"methods":[{"sl":74},{"sl":81}],"name":"Verify that getSignerIdentifier returns correct hash value for type HASH_ONLY","pass":true,"statements":[{"sl":75},{"sl":82}]},"test_16":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that return first certificates public key of enroll cert and enroll ca consists of implicit certificates","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_167":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_168":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_238":{"methods":[{"sl":81}],"name":"Verify that IllegalArgumentException is thrown if none of required premissions doesn't exists for implicit certificate","pass":true,"statements":[{"sl":82}]},"test_250":{"methods":[{"sl":52},{"sl":81}],"name":"Verify that constructor and getters are correct and it is correctly encoded for explicit certificates","pass":true,"statements":[{"sl":54},{"sl":57},{"sl":59},{"sl":82}]},"test_257":{"methods":[{"sl":74},{"sl":81}],"name":"Verify that getSignerId returns the included HashedId8 if type is digest","pass":true,"statements":[{"sl":75},{"sl":82}]},"test_290":{"methods":[{"sl":67},{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that Ieee1609Dot2 Authorization Cert is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82},{"sl":89}]},"test_298":{"methods":[{"sl":52},{"sl":81}],"name":"Verify that constructor and getters are correct and it is correctly encoded for implicit certificates","pass":true,"statements":[{"sl":54},{"sl":57},{"sl":59},{"sl":82}]},"test_307":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that getSignerIdentifier returns first signing certificate from a chain for type SIGNER_CERTIFICATE","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_309":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that Ieee1609Dot2 Short term CA is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_321":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_325":{"methods":[{"sl":67},{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that signed Ieee1609Dot2Data with signed data is generated correctly for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82},{"sl":89}]},"test_332":{"methods":[{"sl":81},{"sl":88},{"sl":92},{"sl":99}],"name":"Verify toString","pass":true,"statements":[{"sl":82},{"sl":89},{"sl":93},{"sl":94},{"sl":101},{"sl":104},{"sl":106}]},"test_364":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that getType and getPublicKey works for both implicit and explicit certificates for alg ecdsaBrainpoolP256r1Signature","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_367":{"methods":[{"sl":67},{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82},{"sl":89}]},"test_40":{"methods":[{"sl":67},{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that signed Ieee1609Dot2Data with hashed reference is generated correctly for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82},{"sl":89}]},"test_412":{"methods":[{"sl":67},{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that signed Ieee1609Dot2Data with signed data is generated correctly for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82},{"sl":89}]},"test_421":{"methods":[{"sl":52},{"sl":81}],"name":"Verify that SignerIdentifier is correctly encoded for type certificate","pass":true,"statements":[{"sl":54},{"sl":57},{"sl":59},{"sl":82}]},"test_433":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that findFromStores finds certificate from stores","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_44":{"methods":[{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that Ieee1609Dot2 Root CA is generated correctly for explicit certificate (only type supported) for alg: ecdsaNistP256","pass":true,"statements":[{"sl":75},{"sl":82},{"sl":89}]},"test_447":{"methods":[{"sl":67},{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that signed Ieee1609Dot2Data with hashed reference is generated correctly for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82},{"sl":89}]},"test_470":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_471":{"methods":[{"sl":81},{"sl":88},{"sl":92},{"sl":99}],"name":"Verify toString","pass":true,"statements":[{"sl":82},{"sl":89},{"sl":93},{"sl":94},{"sl":101},{"sl":104},{"sl":106}]},"test_473":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that getSignedDataStore returns the HashedId8 of the first certificate if type is certificate","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_479":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_523":{"methods":[{"sl":67},{"sl":74},{"sl":88},{"sl":92},{"sl":99}],"name":"Verify toString","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":89},{"sl":93},{"sl":94},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":106}]},"test_549":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_57":{"methods":[{"sl":67},{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82},{"sl":89}]},"test_577":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_58":{"methods":[{"sl":67},{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that signed SecuredCrl with signed data is generated correctly","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82},{"sl":89}]},"test_585":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that getPublicKey throws IllegalArgumentException if invalid parameters was given","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_590":{"methods":[{"sl":81}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":82}]},"test_60":{"methods":[{"sl":52},{"sl":74},{"sl":81},{"sl":88},{"sl":92}],"name":"Verify that IssuerIdentifier is correctly encoded for type self","pass":true,"statements":[{"sl":54},{"sl":57},{"sl":59},{"sl":75},{"sl":82},{"sl":89},{"sl":93},{"sl":94}]},"test_61":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that getSignerIdentifier returns first signing certificate from a chain for type CERT_CHAIN","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_614":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that Ieee1609Dot2 Short term CA is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_66":{"methods":[{"sl":74},{"sl":81}],"name":"Verify that buildRecieverStore generates a correct HashedId8 to Receiver Map","pass":true,"statements":[{"sl":75},{"sl":82}]},"test_660":{"methods":[{"sl":67},{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that Ieee1609Dot2 Authorization Cert is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82},{"sl":89}]},"test_674":{"methods":[{"sl":67},{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82},{"sl":89}]},"test_687":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_698":{"methods":[{"sl":52},{"sl":81}],"name":"Verify that SequenceOfCertificate is initialized properly","pass":true,"statements":[{"sl":54},{"sl":57},{"sl":59},{"sl":82}]},"test_711":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that return first certificates public key of complete chain consists of explicit certificates","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_713":{"methods":[{"sl":52},{"sl":67},{"sl":81},{"sl":88}],"name":"Verify that IssuerIdentifier is correctly encoded for type sha256AndDigest","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":68},{"sl":82},{"sl":89}]},"test_719":{"methods":[{"sl":52},{"sl":81}],"name":"Verify that CaCertP2pPDU is initialized properly","pass":true,"statements":[{"sl":54},{"sl":57},{"sl":59},{"sl":82}]},"test_778":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that return first certificates public key of enroll cert only consists of implicit certificates","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_806":{"methods":[{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that Ieee1609Dot2 Root CA is generated correctly for explicit certificate (only type supported) for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":75},{"sl":82},{"sl":89}]},"test_815":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_825":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_836":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_850":{"methods":[{"sl":67},{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82},{"sl":89}]},"test_856":{"methods":[{"sl":88},{"sl":92},{"sl":99}],"name":"Verify toString()","pass":true,"statements":[{"sl":89},{"sl":93},{"sl":94},{"sl":101},{"sl":104},{"sl":106}]},"test_869":{"methods":[{"sl":88},{"sl":92},{"sl":99}],"name":"Verify toString","pass":true,"statements":[{"sl":89},{"sl":93},{"sl":94},{"sl":101},{"sl":104},{"sl":106}]},"test_870":{"methods":[{"sl":81},{"sl":88},{"sl":92},{"sl":99}],"name":"Verify toString","pass":true,"statements":[{"sl":82},{"sl":89},{"sl":93},{"sl":94},{"sl":101},{"sl":104},{"sl":106}]},"test_871":{"methods":[{"sl":67},{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82},{"sl":89}]},"test_876":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_877":{"methods":[{"sl":52},{"sl":81},{"sl":88},{"sl":99}],"name":"Verify that it is possible to parse the reference implicit certificate","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":82},{"sl":89},{"sl":101},{"sl":102},{"sl":103}]},"test_894":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_945":{"methods":[{"sl":74},{"sl":81}],"name":"Verify getCertID generates a correct HashedId8","pass":true,"statements":[{"sl":75},{"sl":82}]},"test_949":{"methods":[{"sl":52},{"sl":81},{"sl":88},{"sl":99}],"name":"Verify that reference structure from D.5.2.2 of P1909.2_D12 is parsed and regenerated correctly","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":82},{"sl":89},{"sl":101},{"sl":102},{"sl":103}]},"test_953":{"methods":[{"sl":88},{"sl":92},{"sl":99}],"name":"Verify toString","pass":true,"statements":[{"sl":89},{"sl":93},{"sl":94},{"sl":101},{"sl":104},{"sl":106}]},"test_96":{"methods":[{"sl":67},{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that buildCertStore() generates certificate store maps correctly and buildChain generates correct certificate chain","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82},{"sl":89}]},"test_966":{"methods":[{"sl":81}],"name":"Verify that IllegalArgumentException is thrown if none of required premissions doesn't exists for explicit certificate","pass":true,"statements":[{"sl":82}]},"test_979":{"methods":[{"sl":67},{"sl":74},{"sl":81}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82}]},"test_991":{"methods":[{"sl":67},{"sl":74},{"sl":81},{"sl":88}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":68},{"sl":75},{"sl":82},{"sl":89}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [421, 298, 250, 877, 60, 713, 144, 698, 719, 949], [], [421, 298, 250, 877, 60, 713, 144, 698, 719, 949], [877, 713, 949], [877, 713, 949], [421, 298, 250, 60, 144, 698, 719], [], [421, 298, 250, 60, 144, 698, 719], [], [], [], [], [], [], [], [815, 687, 549, 309, 979, 123, 447, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 523, 167, 660, 473, 577, 778, 290, 876, 470, 325, 711, 128, 825, 321, 61, 57, 585, 0, 713, 433, 40, 871, 367, 364, 96, 836, 614, 894], [815, 687, 549, 309, 979, 123, 447, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 523, 167, 660, 473, 577, 778, 290, 876, 470, 325, 711, 128, 825, 321, 61, 57, 585, 0, 713, 433, 40, 871, 367, 364, 96, 836, 614, 894], [], [], [], [], [], [815, 687, 549, 309, 979, 123, 447, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 523, 806, 945, 167, 660, 473, 1, 146, 577, 60, 778, 290, 876, 470, 325, 711, 128, 825, 321, 257, 61, 57, 585, 0, 433, 40, 871, 367, 364, 96, 836, 66, 614, 894, 44], [815, 687, 549, 309, 979, 123, 447, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 523, 806, 945, 167, 660, 473, 1, 146, 577, 60, 778, 290, 876, 470, 325, 711, 128, 825, 321, 257, 61, 57, 585, 0, 433, 40, 871, 367, 364, 96, 836, 66, 614, 894, 44], [], [], [], [], [], [815, 687, 549, 309, 979, 123, 447, 120, 16, 238, 850, 412, 307, 991, 421, 479, 58, 168, 674, 590, 806, 945, 167, 298, 660, 250, 473, 1, 146, 577, 877, 60, 778, 870, 290, 876, 470, 325, 711, 128, 825, 321, 257, 61, 57, 585, 0, 713, 433, 40, 871, 367, 332, 364, 96, 836, 144, 966, 698, 66, 614, 719, 949, 894, 44, 471], [815, 687, 549, 309, 979, 123, 447, 120, 16, 238, 850, 412, 307, 991, 421, 479, 58, 168, 674, 590, 806, 945, 167, 298, 660, 250, 473, 1, 146, 577, 877, 60, 778, 870, 290, 876, 470, 325, 711, 128, 825, 321, 257, 61, 57, 585, 0, 713, 433, 40, 871, 367, 332, 364, 96, 836, 144, 966, 698, 66, 614, 719, 949, 894, 44, 471], [], [], [], [], [], [447, 850, 412, 991, 58, 674, 523, 806, 660, 877, 60, 870, 290, 325, 869, 57, 713, 40, 871, 367, 332, 856, 953, 96, 949, 44, 471], [447, 850, 412, 991, 58, 674, 523, 806, 660, 877, 60, 870, 290, 325, 869, 57, 713, 40, 871, 367, 332, 856, 953, 96, 949, 44, 471], [], [], [523, 60, 870, 869, 332, 856, 953, 471], [523, 60, 870, 869, 332, 856, 953, 471], [523, 60, 870, 869, 332, 856, 953, 471], [], [], [], [], [523, 877, 870, 869, 332, 856, 953, 949, 471], [], [523, 877, 870, 869, 332, 856, 953, 949, 471], [523, 877, 949], [523, 877, 949], [523, 870, 869, 332, 856, 953, 471], [], [523, 870, 869, 332, 856, 953, 471], [], [], [], []]
