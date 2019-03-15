var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":94,"id":2533,"methods":[{"el":42,"sc":2,"sl":40},{"el":67,"sc":2,"sl":48},{"el":75,"sc":2,"sl":73},{"el":88,"sc":2,"sl":81},{"el":93,"sc":2,"sl":90}],"name":"ElevInt","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_110":{"methods":[{"sl":40}],"name":"Verify that encode and decode to byte array is correct","pass":true,"statements":[{"sl":41}]},"test_17":{"methods":[{"sl":40},{"sl":48},{"sl":73},{"sl":81}],"name":"Verify that ElevInt encodes -5000 to f001 and decodes back correctly","pass":true,"statements":[{"sl":41},{"sl":49},{"sl":50},{"sl":53},{"sl":54},{"sl":64},{"sl":74},{"sl":82},{"sl":83},{"sl":87}]},"test_182":{"methods":[{"sl":40}],"name":"Verify that fullfillsRequirements verifies all required fields","pass":true,"statements":[{"sl":41}]},"test_19":{"methods":[{"sl":40},{"sl":48},{"sl":73},{"sl":81}],"name":"Verify that ElevInt encodes 61439 to efff and decodes back correctly","pass":true,"statements":[{"sl":41},{"sl":49},{"sl":50},{"sl":51},{"sl":64},{"sl":74},{"sl":82},{"sl":83},{"sl":84}]},"test_270":{"methods":[{"sl":48},{"sl":73},{"sl":81}],"name":"Verify Elevation toString","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":53},{"sl":56},{"sl":59},{"sl":64},{"sl":74},{"sl":82},{"sl":83},{"sl":84}]},"test_310":{"methods":[{"sl":40}],"name":"Verify toString","pass":true,"statements":[{"sl":41}]},"test_325":{"methods":[{"sl":40}],"name":"Verify that signed Ieee1609Dot2Data with signed data is generated correctly for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":41}]},"test_35":{"methods":[{"sl":40}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":41}]},"test_367":{"methods":[{"sl":40}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaNistP256","pass":true,"statements":[{"sl":41}]},"test_372":{"methods":[{"sl":40},{"sl":48},{"sl":73},{"sl":81}],"name":"Verify that ElevInt encodes 99999 to efff and decodes back correctly","pass":true,"statements":[{"sl":41},{"sl":49},{"sl":50},{"sl":51},{"sl":64},{"sl":74},{"sl":82},{"sl":83},{"sl":84}]},"test_377":{"methods":[{"sl":40}],"name":"Verify that IllegalArgumentException is thrown if both data and exthash is null","pass":true,"statements":[{"sl":41}]},"test_386":{"methods":[{"sl":40},{"sl":48},{"sl":73},{"sl":81}],"name":"Verify that genHeaderInfo generates correct header info","pass":true,"statements":[{"sl":41},{"sl":49},{"sl":50},{"sl":53},{"sl":56},{"sl":59},{"sl":64},{"sl":74},{"sl":82},{"sl":83},{"sl":84}]},"test_40":{"methods":[{"sl":40}],"name":"Verify that signed Ieee1609Dot2Data with hashed reference is generated correctly for alg: ecdsaNistP256","pass":true,"statements":[{"sl":41}]},"test_401":{"methods":[{"sl":40}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":41}]},"test_412":{"methods":[{"sl":40}],"name":"Verify that signed Ieee1609Dot2Data with signed data is generated correctly for alg: ecdsaNistP256","pass":true,"statements":[{"sl":41}]},"test_445":{"methods":[{"sl":40}],"name":"Verify that  Ieee1609Dot2Content is correctly encoded for type signedData","pass":true,"statements":[{"sl":41}]},"test_447":{"methods":[{"sl":40}],"name":"Verify that signed Ieee1609Dot2Data with hashed reference is generated correctly for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":41}]},"test_509":{"methods":[{"sl":40}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":41}]},"test_549":{"methods":[{"sl":40}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":41}]},"test_55":{"methods":[{"sl":40},{"sl":48},{"sl":73},{"sl":81}],"name":"Verify that ElevInt encodes 0 to 0000 and decodes back correctly","pass":true,"statements":[{"sl":41},{"sl":49},{"sl":50},{"sl":53},{"sl":56},{"sl":59},{"sl":64},{"sl":74},{"sl":82},{"sl":83},{"sl":84}]},"test_57":{"methods":[{"sl":40}],"name":"Verify that signAndEncryptData and decryptAndVerifySignedData generates encrypted and signed data structures for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":41}]},"test_58":{"methods":[{"sl":40}],"name":"Verify that signed SecuredCrl with signed data is generated correctly","pass":true,"statements":[{"sl":41}]},"test_596":{"methods":[{"sl":40},{"sl":48},{"sl":73},{"sl":81}],"name":"Verify that ElevInt encodes 61440 to efff and decodes back correctly","pass":true,"statements":[{"sl":41},{"sl":49},{"sl":50},{"sl":51},{"sl":64},{"sl":74},{"sl":82},{"sl":83},{"sl":84}]},"test_600":{"methods":[{"sl":40},{"sl":48},{"sl":73},{"sl":81}],"name":"Verify constructors","pass":true,"statements":[{"sl":41},{"sl":49},{"sl":50},{"sl":53},{"sl":56},{"sl":57},{"sl":64},{"sl":74},{"sl":82},{"sl":83},{"sl":87}]},"test_633":{"methods":[{"sl":40}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all required fields are set","pass":true,"statements":[{"sl":41}]},"test_653":{"methods":[{"sl":48},{"sl":73},{"sl":81},{"sl":90}],"name":"Verify ElevInt toString","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":53},{"sl":56},{"sl":59},{"sl":64},{"sl":74},{"sl":82},{"sl":83},{"sl":84},{"sl":92}]},"test_656":{"methods":[{"sl":40}],"name":"Verify that constructor contains Ieee1609Dot2Data  if content  fullfill requirements","pass":true,"statements":[{"sl":41}]},"test_66":{"methods":[{"sl":40}],"name":"Verify that buildRecieverStore generates a correct HashedId8 to Receiver Map","pass":true,"statements":[{"sl":41}]},"test_667":{"methods":[{"sl":40}],"name":"Verify that IllegalArgumentException is thrown when encoding if not all fields are set","pass":true,"statements":[{"sl":41}]},"test_726":{"methods":[{"sl":40},{"sl":48},{"sl":73},{"sl":81}],"name":"Verify that ElevInt encodes 1000 to 03e8 and decodes back correctly","pass":true,"statements":[{"sl":41},{"sl":49},{"sl":50},{"sl":53},{"sl":56},{"sl":59},{"sl":64},{"sl":74},{"sl":82},{"sl":83},{"sl":84}]},"test_740":{"methods":[{"sl":40}],"name":"Verify toString","pass":true,"statements":[{"sl":41}]},"test_744":{"methods":[{"sl":40}],"name":"Verify that constructor contains Ieee1609Dot2Data  if content  fullfill requirements","pass":true,"statements":[{"sl":41}]},"test_790":{"methods":[{"sl":40}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":41}]},"test_81":{"methods":[{"sl":40}],"name":"Verify that constructor and getters are correct and it is correctly encoded","pass":true,"statements":[{"sl":41}]},"test_815":{"methods":[{"sl":40}],"name":"Verify that encryption works with secured data public encryption key for alg: ecdsaNistP256","pass":true,"statements":[{"sl":41}]},"test_820":{"methods":[{"sl":40},{"sl":73},{"sl":81}],"name":"Verify toString","pass":true,"statements":[{"sl":41},{"sl":74},{"sl":82},{"sl":83},{"sl":84}]},"test_882":{"methods":[{"sl":40}],"name":"Verify that fullfillsRequirements verifies all required fields","pass":true,"statements":[{"sl":41}]},"test_901":{"methods":[{"sl":40},{"sl":48},{"sl":73},{"sl":81}],"name":"Verify that ElevInt encodes -1 to ffff and decodes back correctly","pass":true,"statements":[{"sl":41},{"sl":49},{"sl":50},{"sl":53},{"sl":56},{"sl":57},{"sl":64},{"sl":74},{"sl":82},{"sl":83},{"sl":87}]},"test_949":{"methods":[{"sl":40}],"name":"Verify that reference structure from D.5.2.2 of P1909.2_D12 is parsed and regenerated correctly","pass":true,"statements":[{"sl":41}]},"test_981":{"methods":[{"sl":40},{"sl":73},{"sl":81}],"name":"Verify toString","pass":true,"statements":[{"sl":41},{"sl":74},{"sl":82},{"sl":83},{"sl":84}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [815, 17, 310, 325, 882, 549, 447, 110, 55, 35, 509, 820, 182, 445, 726, 412, 901, 57, 401, 58, 633, 40, 367, 386, 744, 981, 667, 81, 19, 377, 66, 596, 949, 656, 372, 790, 740, 600], [815, 17, 310, 325, 882, 549, 447, 110, 55, 35, 509, 820, 182, 445, 726, 412, 901, 57, 401, 58, 633, 40, 367, 386, 744, 981, 667, 81, 19, 377, 66, 596, 949, 656, 372, 790, 740, 600], [], [], [], [], [], [], [270, 17, 653, 55, 726, 901, 386, 19, 596, 372, 600], [270, 17, 653, 55, 726, 901, 386, 19, 596, 372, 600], [270, 17, 653, 55, 726, 901, 386, 19, 596, 372, 600], [19, 596, 372], [], [270, 17, 653, 55, 726, 901, 386, 600], [17], [], [270, 653, 55, 726, 901, 386, 600], [901, 600], [], [270, 653, 55, 726, 386], [], [], [], [], [270, 17, 653, 55, 726, 901, 386, 19, 596, 372, 600], [], [], [], [], [], [], [], [], [270, 17, 653, 55, 820, 726, 901, 386, 981, 19, 596, 372, 600], [270, 17, 653, 55, 820, 726, 901, 386, 981, 19, 596, 372, 600], [], [], [], [], [], [], [270, 17, 653, 55, 820, 726, 901, 386, 981, 19, 596, 372, 600], [270, 17, 653, 55, 820, 726, 901, 386, 981, 19, 596, 372, 600], [270, 17, 653, 55, 820, 726, 901, 386, 981, 19, 596, 372, 600], [270, 653, 55, 820, 726, 386, 981, 19, 596, 372], [], [], [17, 901, 600], [], [], [653], [], [653], [], []]