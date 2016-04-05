var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":124,"id":3626,"methods":[{"el":60,"sc":2,"sl":57},{"el":77,"sc":2,"sl":70},{"el":85,"sc":2,"sl":83},{"el":93,"sc":2,"sl":91},{"el":101,"sc":2,"sl":99},{"el":109,"sc":2,"sl":107},{"el":116,"sc":2,"sl":111},{"el":122,"sc":2,"sl":118}],"name":"PsidGroupPermissions","sl":44}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_1":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that getSignedDataStore returns an empty map if SignerIdentifier is digest","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_120":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_123":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that getSignedDataStore returns a populate map of all certificate if SignerIdentifier is certificate","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_128":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that getType and getPublicKey works for both implicit and explicit certificates for alg ecdsaNistP256Signature","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_144":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that Ieee1609dot2Peer2PeerPDUContent is correctly encoded for type caCerts","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_146":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that getSignerIdentifier returns correct hash value for type HASH_ONLY","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_16":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that return first certificates public key of enroll cert and enroll ca consists of implicit certificates","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_167":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_168":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_207":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that IllegalArgumentException is thrown if none of required premissions doesn't exists","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_238":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that IllegalArgumentException is thrown if none of required premissions doesn't exists for implicit certificate","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_250":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that constructor and getters are correct and it is correctly encoded for explicit certificates","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_257":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that getSignerId returns the included HashedId8 if type is digest","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_261":{"methods":[{"sl":70},{"sl":111}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_290":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that Ieee1609Dot2 Authorization Cert is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_298":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that constructor and getters are correct and it is correctly encoded for implicit certificates","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_304":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_307":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that getSignerIdentifier returns first signing certificate from a chain for type SIGNER_CERTIFICATE","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_309":{"methods":[{"sl":57},{"sl":70},{"sl":107},{"sl":111}],"name":"Verify that Ieee1609Dot2 Short term CA is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":108},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_321":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_325":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that signed Ieee1609Dot2Data with signed data is generated correctly for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_332":{"methods":[{"sl":57},{"sl":83},{"sl":91},{"sl":99},{"sl":107},{"sl":111},{"sl":118}],"name":"Verify toString","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":84},{"sl":92},{"sl":100},{"sl":108},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":120}]},"test_364":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that getType and getPublicKey works for both implicit and explicit certificates for alg ecdsaBrainpoolP256r1Signature","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_367":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_397":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that SequenceOfPsidGroupPermissions is initialized properly","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_40":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that signed Ieee1609Dot2Data with hashed reference is generated correctly for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_412":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that signed Ieee1609Dot2Data with signed data is generated correctly for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_421":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that SignerIdentifier is correctly encoded for type certificate","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_433":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that findFromStores finds certificate from stores","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_44":{"methods":[{"sl":57},{"sl":70},{"sl":83},{"sl":91},{"sl":99},{"sl":107},{"sl":111}],"name":"Verify that Ieee1609Dot2 Root CA is generated correctly for explicit certificate (only type supported) for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":84},{"sl":92},{"sl":100},{"sl":108},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_447":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that signed Ieee1609Dot2Data with hashed reference is generated correctly for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_470":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_471":{"methods":[{"sl":57},{"sl":111}],"name":"Verify toString","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_473":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that getSignedDataStore returns the HashedId8 of the first certificate if type is certificate","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_479":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_549":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_57":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_577":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_58":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that signed SecuredCrl with signed data is generated correctly","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_585":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that getPublicKey throws IllegalArgumentException if invalid parameters was given","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_590":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_61":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that getSignerIdentifier returns first signing certificate from a chain for type CERT_CHAIN","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_614":{"methods":[{"sl":57},{"sl":70},{"sl":107},{"sl":111}],"name":"Verify that Ieee1609Dot2 Short term CA is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":108},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_623":{"methods":[{"sl":57},{"sl":83},{"sl":91},{"sl":99},{"sl":107},{"sl":111},{"sl":118}],"name":"Verify toString","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":84},{"sl":92},{"sl":100},{"sl":108},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":120}]},"test_66":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that buildRecieverStore generates a correct HashedId8 to Receiver Map","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_660":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that Ieee1609Dot2 Authorization Cert is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_674":{"methods":[{"sl":57},{"sl":70},{"sl":83},{"sl":91},{"sl":99},{"sl":107},{"sl":111}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":84},{"sl":92},{"sl":100},{"sl":108},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_68":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_687":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_698":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that SequenceOfCertificate is initialized properly","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_711":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that return first certificates public key of complete chain consists of explicit certificates","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_719":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that CaCertP2pPDU is initialized properly","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_72":{"methods":[{"sl":57},{"sl":70},{"sl":83},{"sl":91},{"sl":99},{"sl":107},{"sl":111}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":84},{"sl":92},{"sl":100},{"sl":108},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_734":{"methods":[{"sl":70},{"sl":83},{"sl":91},{"sl":99},{"sl":107},{"sl":111},{"sl":118}],"name":"Verify toString","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":84},{"sl":92},{"sl":100},{"sl":108},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":120}]},"test_778":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that return first certificates public key of enroll cert only consists of implicit certificates","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_806":{"methods":[{"sl":57},{"sl":70},{"sl":83},{"sl":91},{"sl":99},{"sl":107},{"sl":111}],"name":"Verify that Ieee1609Dot2 Root CA is generated correctly for explicit certificate (only type supported) for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":84},{"sl":92},{"sl":100},{"sl":108},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_815":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_822":{"methods":[{"sl":57},{"sl":83},{"sl":91},{"sl":99},{"sl":107},{"sl":111},{"sl":118}],"name":"Verify toString","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":84},{"sl":92},{"sl":100},{"sl":108},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":120}]},"test_825":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that encryption works with RekReceipient for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_836":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly for implicit CA certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_850":{"methods":[{"sl":57},{"sl":70},{"sl":83},{"sl":91},{"sl":99},{"sl":107},{"sl":111}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":84},{"sl":92},{"sl":100},{"sl":108},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_851":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that encode and decode to byte array is correct","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_870":{"methods":[{"sl":57},{"sl":111}],"name":"Verify toString","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_871":{"methods":[{"sl":57},{"sl":70},{"sl":83},{"sl":91},{"sl":99},{"sl":107},{"sl":111}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":84},{"sl":92},{"sl":100},{"sl":108},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_876":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that encryption works with certificate public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_877":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that it is possible to parse the reference implicit certificate","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_894":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_945":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify getCertID generates a correct HashedId8","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_949":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that reference structure from D.5.2.2 of P1909.2_D12 is parsed and regenerated correctly","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_96":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that buildCertStore() generates certificate store maps correctly and buildChain generates correct certificate chain","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_966":{"methods":[{"sl":57},{"sl":111}],"name":"Verify that IllegalArgumentException is thrown if none of required premissions doesn't exists for explicit certificate","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_979":{"methods":[{"sl":57},{"sl":70},{"sl":111}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]},"test_991":{"methods":[{"sl":57},{"sl":70},{"sl":83},{"sl":91},{"sl":99},{"sl":107},{"sl":111}],"name":"Verify that Ieee1609Dot2 Enrollment Cert is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":84},{"sl":92},{"sl":100},{"sl":108},{"sl":112},{"sl":113},{"sl":114},{"sl":115}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [815, 687, 549, 309, 979, 123, 447, 120, 16, 238, 850, 412, 307, 991, 421, 479, 58, 168, 674, 590, 806, 945, 167, 298, 660, 250, 473, 1, 146, 577, 877, 778, 870, 290, 876, 470, 325, 711, 128, 825, 321, 257, 623, 397, 61, 57, 585, 0, 207, 433, 40, 871, 367, 332, 364, 68, 96, 836, 851, 822, 144, 966, 698, 66, 304, 614, 719, 949, 72, 894, 44, 471], [815, 687, 549, 309, 979, 123, 447, 120, 16, 238, 850, 412, 307, 991, 421, 479, 58, 168, 674, 590, 806, 945, 167, 298, 660, 250, 473, 1, 146, 577, 877, 778, 870, 290, 876, 470, 325, 711, 128, 825, 321, 257, 623, 397, 61, 57, 585, 0, 207, 433, 40, 871, 367, 332, 364, 68, 96, 836, 851, 822, 144, 966, 698, 66, 304, 614, 719, 949, 72, 894, 44, 471], [815, 687, 549, 309, 979, 123, 447, 120, 16, 238, 850, 412, 307, 991, 421, 479, 58, 168, 674, 590, 806, 945, 167, 298, 660, 250, 473, 1, 146, 577, 877, 778, 870, 290, 876, 470, 325, 711, 128, 825, 321, 257, 623, 397, 61, 57, 585, 0, 207, 433, 40, 871, 367, 332, 364, 68, 96, 836, 851, 822, 144, 966, 698, 66, 304, 614, 719, 949, 72, 894, 44, 471], [], [], [], [], [], [], [], [], [], [], [815, 687, 549, 309, 979, 123, 447, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 806, 945, 167, 660, 473, 734, 1, 146, 577, 261, 778, 290, 876, 470, 325, 711, 128, 825, 321, 257, 61, 57, 585, 0, 433, 40, 871, 367, 364, 96, 836, 66, 614, 72, 894, 44], [815, 687, 549, 309, 979, 123, 447, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 806, 945, 167, 660, 473, 734, 1, 146, 577, 261, 778, 290, 876, 470, 325, 711, 128, 825, 321, 257, 61, 57, 585, 0, 433, 40, 871, 367, 364, 96, 836, 66, 614, 72, 894, 44], [815, 687, 549, 309, 979, 123, 447, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 806, 945, 167, 660, 473, 734, 1, 146, 577, 261, 778, 290, 876, 470, 325, 711, 128, 825, 321, 257, 61, 57, 585, 0, 433, 40, 871, 367, 364, 96, 836, 66, 614, 72, 894, 44], [815, 687, 549, 309, 979, 123, 447, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 806, 945, 167, 660, 473, 734, 1, 146, 577, 261, 778, 290, 876, 470, 325, 711, 128, 825, 321, 257, 61, 57, 585, 0, 433, 40, 871, 367, 364, 96, 836, 66, 614, 72, 894, 44], [815, 687, 549, 309, 979, 123, 447, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 806, 945, 167, 660, 473, 734, 1, 146, 577, 261, 778, 290, 876, 470, 325, 711, 128, 825, 321, 257, 61, 57, 585, 0, 433, 40, 871, 367, 364, 96, 836, 66, 614, 72, 894, 44], [815, 687, 549, 309, 979, 123, 447, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 806, 945, 167, 660, 473, 734, 1, 146, 577, 261, 778, 290, 876, 470, 325, 711, 128, 825, 321, 257, 61, 57, 585, 0, 433, 40, 871, 367, 364, 96, 836, 66, 614, 72, 894, 44], [815, 687, 549, 309, 979, 123, 447, 120, 16, 850, 412, 307, 991, 479, 58, 168, 674, 806, 945, 167, 660, 473, 734, 1, 146, 577, 261, 778, 290, 876, 470, 325, 711, 128, 825, 321, 257, 61, 57, 585, 0, 433, 40, 871, 367, 364, 96, 836, 66, 614, 72, 894, 44], [], [], [], [], [], [], [850, 991, 674, 806, 734, 623, 871, 332, 822, 72, 44], [850, 991, 674, 806, 734, 623, 871, 332, 822, 72, 44], [], [], [], [], [], [], [850, 991, 674, 806, 734, 623, 871, 332, 822, 72, 44], [850, 991, 674, 806, 734, 623, 871, 332, 822, 72, 44], [], [], [], [], [], [], [850, 991, 674, 806, 734, 623, 871, 332, 822, 72, 44], [850, 991, 674, 806, 734, 623, 871, 332, 822, 72, 44], [], [], [], [], [], [], [309, 850, 991, 674, 806, 734, 623, 871, 332, 822, 614, 72, 44], [309, 850, 991, 674, 806, 734, 623, 871, 332, 822, 614, 72, 44], [], [], [815, 687, 549, 309, 979, 123, 447, 120, 16, 238, 850, 412, 307, 991, 421, 479, 58, 168, 674, 590, 806, 945, 167, 298, 660, 250, 473, 734, 1, 146, 577, 877, 261, 778, 870, 290, 876, 470, 325, 711, 128, 825, 321, 257, 623, 397, 61, 57, 585, 0, 207, 433, 40, 871, 367, 332, 364, 68, 96, 836, 851, 822, 144, 966, 698, 66, 304, 614, 719, 949, 72, 894, 44, 471], [815, 687, 549, 309, 979, 123, 447, 120, 16, 238, 850, 412, 307, 991, 421, 479, 58, 168, 674, 590, 806, 945, 167, 298, 660, 250, 473, 734, 1, 146, 577, 877, 261, 778, 870, 290, 876, 470, 325, 711, 128, 825, 321, 257, 623, 397, 61, 57, 585, 0, 207, 433, 40, 871, 367, 332, 364, 68, 96, 836, 851, 822, 144, 966, 698, 66, 304, 614, 719, 949, 72, 894, 44, 471], [815, 687, 549, 309, 979, 123, 447, 120, 16, 238, 850, 412, 307, 991, 421, 479, 58, 168, 674, 590, 806, 945, 167, 298, 660, 250, 473, 734, 1, 146, 577, 877, 261, 778, 870, 290, 876, 470, 325, 711, 128, 825, 321, 257, 623, 397, 61, 57, 585, 0, 207, 433, 40, 871, 367, 332, 364, 68, 96, 836, 851, 822, 144, 966, 698, 66, 304, 614, 719, 949, 72, 894, 44, 471], [815, 687, 549, 309, 979, 123, 447, 120, 16, 238, 850, 412, 307, 991, 421, 479, 58, 168, 674, 590, 806, 945, 167, 298, 660, 250, 473, 734, 1, 146, 577, 877, 261, 778, 870, 290, 876, 470, 325, 711, 128, 825, 321, 257, 623, 397, 61, 57, 585, 0, 207, 433, 40, 871, 367, 332, 364, 68, 96, 836, 851, 822, 144, 966, 698, 66, 304, 614, 719, 949, 72, 894, 44, 471], [815, 687, 549, 309, 979, 123, 447, 120, 16, 238, 850, 412, 307, 991, 421, 479, 58, 168, 674, 590, 806, 945, 167, 298, 660, 250, 473, 734, 1, 146, 577, 877, 261, 778, 870, 290, 876, 470, 325, 711, 128, 825, 321, 257, 623, 397, 61, 57, 585, 0, 207, 433, 40, 871, 367, 332, 364, 68, 96, 836, 851, 822, 144, 966, 698, 66, 304, 614, 719, 949, 72, 894, 44, 471], [], [], [734, 623, 332, 822], [], [734, 623, 332, 822], [], [], [], []]
