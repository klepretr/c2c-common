var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":94,"id":3386,"methods":[{"el":41,"sc":2,"sl":38},{"el":56,"sc":2,"sl":48},{"el":66,"sc":2,"sl":64},{"el":74,"sc":2,"sl":72},{"el":80,"sc":2,"sl":77},{"el":85,"sc":2,"sl":82},{"el":92,"sc":2,"sl":90}],"name":"UncompressedEccPoint","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_111":{"methods":[{"sl":48},{"sl":77},{"sl":90}],"name":"Verify that IOException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":78},{"sl":79},{"sl":91}]},"test_132":{"methods":[{"sl":38},{"sl":48},{"sl":64},{"sl":72},{"sl":77},{"sl":90}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":65},{"sl":73},{"sl":78},{"sl":79},{"sl":91}]},"test_144":{"methods":[{"sl":38},{"sl":77}],"name":"Verify that Ieee1609dot2Peer2PeerPDUContent is correctly encoded for type caCerts","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":78},{"sl":79}]},"test_175":{"methods":[{"sl":38},{"sl":77}],"name":"Verify that PublicVerificationKey is correctly encoded for type ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":78},{"sl":79}]},"test_194":{"methods":[{"sl":48},{"sl":64},{"sl":72},{"sl":77},{"sl":90}],"name":"Verify that decodeEccPoint decodes the ieee EccPoints correctly for public key scheme: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":65},{"sl":73},{"sl":78},{"sl":79},{"sl":91}]},"test_250":{"methods":[{"sl":38},{"sl":77}],"name":"Verify that constructor and getters are correct and it is correctly encoded for explicit certificates","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":78},{"sl":79}]},"test_298":{"methods":[{"sl":38},{"sl":77}],"name":"Verify that constructor and getters are correct and it is correctly encoded for implicit certificates","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":78},{"sl":79}]},"test_304":{"methods":[{"sl":38},{"sl":77}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":78},{"sl":79}]},"test_332":{"methods":[{"sl":64},{"sl":72},{"sl":82}],"name":"Verify toString","pass":true,"statements":[{"sl":65},{"sl":73},{"sl":84}]},"test_366":{"methods":[{"sl":64},{"sl":72},{"sl":82}],"name":"Verify toString","pass":true,"statements":[{"sl":65},{"sl":73},{"sl":84}]},"test_421":{"methods":[{"sl":38},{"sl":77}],"name":"Verify that SignerIdentifier is correctly encoded for type certificate","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":78},{"sl":79}]},"test_454":{"methods":[{"sl":48},{"sl":64},{"sl":72},{"sl":77},{"sl":90}],"name":"Verify that ieee encodeEccPoint encodes ec public keys properly for algorithm: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":65},{"sl":73},{"sl":78},{"sl":79},{"sl":91}]},"test_471":{"methods":[{"sl":64},{"sl":72},{"sl":82}],"name":"Verify toString","pass":true,"statements":[{"sl":65},{"sl":73},{"sl":84}]},"test_526":{"methods":[{"sl":48},{"sl":64},{"sl":72},{"sl":77},{"sl":82},{"sl":90}],"name":"Verify toString","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":65},{"sl":73},{"sl":78},{"sl":79},{"sl":84},{"sl":91}]},"test_527":{"methods":[{"sl":38},{"sl":77}],"name":"Verify that PublicVerificationKey is correctly encoded for type ecdsaNistP256","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":78},{"sl":79}]},"test_583":{"methods":[{"sl":38},{"sl":64},{"sl":72},{"sl":77}],"name":"Verify that EccP256CurvePoint is correctly encoded for type uncompressed","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":65},{"sl":73},{"sl":78},{"sl":79}]},"test_606":{"methods":[{"sl":48},{"sl":64},{"sl":72},{"sl":77},{"sl":82},{"sl":90}],"name":"Verify toString","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":65},{"sl":73},{"sl":78},{"sl":79},{"sl":84},{"sl":91}]},"test_607":{"methods":[{"sl":38},{"sl":77}],"name":"Verify that VerificationKeyIndicator is correctly encoded for type reconstructionValue","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":78},{"sl":79}]},"test_698":{"methods":[{"sl":38},{"sl":77}],"name":"Verify that SequenceOfCertificate is initialized properly","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":78},{"sl":79}]},"test_719":{"methods":[{"sl":38},{"sl":77}],"name":"Verify that CaCertP2pPDU is initialized properly","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":78},{"sl":79}]},"test_822":{"methods":[{"sl":64},{"sl":72},{"sl":82}],"name":"Verify toString","pass":true,"statements":[{"sl":65},{"sl":73},{"sl":84}]},"test_851":{"methods":[{"sl":38},{"sl":77}],"name":"Verify that encode and decode to byte array is correct","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":78},{"sl":79}]},"test_856":{"methods":[{"sl":64},{"sl":72},{"sl":82}],"name":"Verify toString()","pass":true,"statements":[{"sl":65},{"sl":73},{"sl":84}]},"test_869":{"methods":[{"sl":64},{"sl":72},{"sl":82}],"name":"Verify toString","pass":true,"statements":[{"sl":65},{"sl":73},{"sl":84}]},"test_870":{"methods":[{"sl":64},{"sl":72},{"sl":82}],"name":"Verify toString","pass":true,"statements":[{"sl":65},{"sl":73},{"sl":84}]},"test_879":{"methods":[{"sl":64},{"sl":72},{"sl":82}],"name":"Verify toString","pass":true,"statements":[{"sl":65},{"sl":73},{"sl":84}]},"test_900":{"methods":[{"sl":48},{"sl":64},{"sl":72},{"sl":77},{"sl":90}],"name":"Verify that ieee encodeEccPoint encodes ec public keys properly for algorithm: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":65},{"sl":73},{"sl":78},{"sl":79},{"sl":91}]},"test_905":{"methods":[{"sl":48},{"sl":64},{"sl":72},{"sl":77},{"sl":90}],"name":"Verify that decodeEccPoint decodes the ieee EccPoints correctly for public key scheme: ecdsaNistP256","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":65},{"sl":73},{"sl":78},{"sl":79},{"sl":91}]},"test_953":{"methods":[{"sl":64},{"sl":72},{"sl":82}],"name":"Verify toString","pass":true,"statements":[{"sl":65},{"sl":73},{"sl":84}]},"test_960":{"methods":[{"sl":38},{"sl":77}],"name":"Verify that VerificationKeyIndicator is correctly encoded for type verificationKey","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":78},{"sl":79}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [960, 527, 132, 421, 175, 583, 851, 144, 298, 250, 698, 304, 719, 607], [960, 527, 132, 421, 175, 583, 851, 144, 298, 250, 698, 304, 719, 607], [960, 527, 132, 421, 175, 583, 851, 144, 298, 250, 698, 304, 719, 607], [], [], [], [], [], [], [], [905, 606, 132, 526, 111, 194, 900, 454], [905, 606, 132, 526, 111, 194, 900, 454], [905, 606, 132, 526, 111, 194, 900, 454], [905, 606, 132, 526, 111, 194, 900, 454], [905, 606, 132, 526, 111, 194, 900, 454], [905, 606, 132, 526, 111, 194, 900, 454], [905, 606, 132, 526, 111, 194, 900, 454], [], [], [], [], [], [], [], [], [], [905, 870, 606, 132, 869, 366, 526, 332, 856, 953, 583, 879, 822, 194, 900, 471, 454], [905, 870, 606, 132, 869, 366, 526, 332, 856, 953, 583, 879, 822, 194, 900, 471, 454], [], [], [], [], [], [], [905, 870, 606, 132, 869, 366, 526, 332, 856, 953, 583, 879, 822, 194, 900, 471, 454], [905, 870, 606, 132, 869, 366, 526, 332, 856, 953, 583, 879, 822, 194, 900, 471, 454], [], [], [], [905, 606, 960, 527, 132, 421, 526, 111, 175, 583, 851, 144, 194, 298, 250, 698, 900, 304, 719, 454, 607], [905, 606, 960, 527, 132, 421, 526, 111, 175, 583, 851, 144, 194, 298, 250, 698, 900, 304, 719, 454, 607], [905, 606, 960, 527, 132, 421, 526, 111, 175, 583, 851, 144, 194, 298, 250, 698, 900, 304, 719, 454, 607], [], [], [870, 606, 869, 366, 526, 332, 856, 953, 879, 822, 471], [], [870, 606, 869, 366, 526, 332, 856, 953, 879, 822, 471], [], [], [], [], [], [905, 606, 132, 526, 111, 194, 900, 454], [905, 606, 132, 526, 111, 194, 900, 454], [], [], []]