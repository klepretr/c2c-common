var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":166,"id":6859,"methods":[{"el":69,"sc":2,"sl":61},{"el":78,"sc":2,"sl":76},{"el":87,"sc":2,"sl":84},{"el":106,"sc":2,"sl":98},{"el":114,"sc":2,"sl":112},{"el":120,"sc":2,"sl":117},{"el":127,"sc":2,"sl":122},{"el":132,"sc":2,"sl":129},{"el":141,"sc":2,"sl":139},{"el":149,"sc":2,"sl":143},{"el":163,"sc":2,"sl":151}],"name":"Time32","sl":46}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1010":{"methods":[{"sl":117}],"name":"Verify that multiple payload works for version 1 of secured DENM message","pass":true,"statements":[{"sl":119}]},"test_102":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 2 Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":67},{"sl":113},{"sl":119}]},"test_105":{"methods":[{"sl":84},{"sl":117},{"sl":122}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":119},{"sl":124},{"sl":125},{"sl":126}]},"test_13":{"methods":[{"sl":84},{"sl":98},{"sl":117},{"sl":122},{"sl":139}],"name":"Verify interoperability with version 2 certificates generated by ETSI TS 10309603 test suite.","pass":true,"statements":[{"sl":99},{"sl":100},{"sl":103},{"sl":105},{"sl":119},{"sl":124},{"sl":125},{"sl":126},{"sl":140}]},"test_134":{"methods":[{"sl":84},{"sl":122}],"name":"Verify deserialization","pass":true,"statements":[{"sl":124},{"sl":125},{"sl":126}]},"test_15":{"methods":[{"sl":84},{"sl":117},{"sl":122}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":119},{"sl":124},{"sl":125},{"sl":126}]},"test_158":{"methods":[{"sl":117}],"name":"Verify that multiple payload works for version 1 of secured CAM message","pass":true,"statements":[{"sl":119}]},"test_159":{"methods":[{"sl":117}],"name":"Verify serialization","pass":true,"statements":[{"sl":119}]},"test_161":{"methods":[{"sl":76},{"sl":117}],"name":"Verify serialization","pass":true,"statements":[{"sl":77},{"sl":119}]},"test_189":{"methods":[{"sl":76},{"sl":98}],"name":"Make sure asDate converts the date correctly[1]","pass":true,"statements":[{"sl":77},{"sl":99},{"sl":100},{"sl":103},{"sl":105}]},"test_208":{"methods":[{"sl":61}],"name":"Verify that addHeader adds the header value in correct order","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":67}]},"test_22":{"methods":[{"sl":98},{"sl":139}],"name":"Verify toString","pass":true,"statements":[{"sl":99},{"sl":100},{"sl":103},{"sl":105},{"sl":140}]},"test_226":{"methods":[{"sl":117}],"name":"Verify serialization","pass":true,"statements":[{"sl":119}]},"test_242":{"methods":[{"sl":84},{"sl":117},{"sl":122}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":119},{"sl":124},{"sl":125},{"sl":126}]},"test_28":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 1 RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":113},{"sl":119}]},"test_283":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 1 Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":113},{"sl":119}]},"test_295":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 1 Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":113},{"sl":119}]},"test_306":{"methods":[{"sl":84},{"sl":117},{"sl":122}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":119},{"sl":124},{"sl":125},{"sl":126}]},"test_350":{"methods":[{"sl":84},{"sl":122}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":124},{"sl":125},{"sl":126}]},"test_353":{"methods":[{"sl":76},{"sl":98}],"name":"Make sure asDate converts the date correctly[0]","pass":true,"statements":[{"sl":77},{"sl":99},{"sl":100},{"sl":101},{"sl":105}]},"test_361":{"methods":[{"sl":84},{"sl":117},{"sl":122}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":119},{"sl":124},{"sl":125},{"sl":126}]},"test_368":{"methods":[{"sl":84},{"sl":117},{"sl":122}],"name":"Verify that certificate signature R point normalises signature r value to X only","pass":true,"statements":[{"sl":119},{"sl":124},{"sl":125},{"sl":126}]},"test_37":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 2 Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":67},{"sl":113},{"sl":119}]},"test_38":{"methods":[{"sl":84},{"sl":122}],"name":"Verify deserialization","pass":true,"statements":[{"sl":124},{"sl":125},{"sl":126}]},"test_438":{"methods":[{"sl":117}],"name":"Verify serialization","pass":true,"statements":[{"sl":119}]},"test_448":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 1 Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":113},{"sl":119}]},"test_457":{"methods":[{"sl":117}],"name":"Verify that version 2 Signed CAM Unrecognized Certificates Message  certificate, certificate_chain and certificate_digest_with_ecdsap256","pass":true,"statements":[{"sl":119}]},"test_505":{"methods":[{"sl":129}],"name":"Verify toString","pass":true,"statements":[{"sl":131}]},"test_544":{"methods":[{"sl":61},{"sl":112}],"name":"Verify the constructors and asElapsedTime[0]","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":113}]},"test_545":{"methods":[{"sl":84},{"sl":122}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":124},{"sl":125},{"sl":126}]},"test_569":{"methods":[{"sl":117}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":119}]},"test_572":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 1 Authorization Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":113},{"sl":119}]},"test_576":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 1 RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":113},{"sl":119}]},"test_579":{"methods":[{"sl":117}],"name":"Generate version 2 Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":119}]},"test_599":{"methods":[{"sl":61},{"sl":143},{"sl":151}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":145},{"sl":146},{"sl":147},{"sl":148},{"sl":153},{"sl":155},{"sl":156},{"sl":157},{"sl":159},{"sl":160},{"sl":162}]},"test_601":{"methods":[{"sl":61}],"name":"Verify that findHeader finds the correct header in a SecureMessage","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":67}]},"test_637":{"methods":[{"sl":84},{"sl":117},{"sl":122}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":119},{"sl":124},{"sl":125},{"sl":126}]},"test_652":{"methods":[{"sl":98}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":99},{"sl":100},{"sl":101},{"sl":105}]},"test_670":{"methods":[{"sl":117}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.[1]","pass":true,"statements":[{"sl":119}]},"test_683":{"methods":[{"sl":61},{"sl":112}],"name":"Verify the constructors and asElapsedTime[1]","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":67},{"sl":113}]},"test_685":{"methods":[{"sl":98},{"sl":129},{"sl":139}],"name":"Verify toString","pass":true,"statements":[{"sl":99},{"sl":100},{"sl":103},{"sl":105},{"sl":131},{"sl":140}]},"test_686":{"methods":[{"sl":117}],"name":"Generate version 2 Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":119}]},"test_699":{"methods":[{"sl":117}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":119}]},"test_715":{"methods":[{"sl":84},{"sl":122}],"name":"Verify deserialization","pass":true,"statements":[{"sl":124},{"sl":125},{"sl":126}]},"test_723":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 1 Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":113},{"sl":119}]},"test_74":{"methods":[{"sl":84},{"sl":98},{"sl":122}],"name":"Verify deserialization","pass":true,"statements":[{"sl":99},{"sl":100},{"sl":101},{"sl":105},{"sl":124},{"sl":125},{"sl":126}]},"test_746":{"methods":[{"sl":84},{"sl":122}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":124},{"sl":125},{"sl":126}]},"test_754":{"methods":[{"sl":61},{"sl":143},{"sl":151}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":145},{"sl":146},{"sl":147},{"sl":148},{"sl":153},{"sl":155},{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":162}]},"test_764":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 1 Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":113},{"sl":119}]},"test_798":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 2 RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":67},{"sl":113},{"sl":119}]},"test_804":{"methods":[{"sl":84},{"sl":98},{"sl":122}],"name":"Verify deserialization","pass":true,"statements":[{"sl":99},{"sl":100},{"sl":101},{"sl":103},{"sl":105},{"sl":124},{"sl":125},{"sl":126}]},"test_809":{"methods":[{"sl":61},{"sl":98},{"sl":129},{"sl":139}],"name":"Verify toString","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":99},{"sl":100},{"sl":101},{"sl":103},{"sl":105},{"sl":131},{"sl":140}]},"test_819":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 2 Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":67},{"sl":113},{"sl":119}]},"test_852":{"methods":[{"sl":117}],"name":"Generate version 1 Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":119}]},"test_853":{"methods":[{"sl":84},{"sl":117},{"sl":122}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":119},{"sl":124},{"sl":125},{"sl":126}]},"test_855":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 1 Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":113},{"sl":119}]},"test_860":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 2 RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":67},{"sl":113},{"sl":119}]},"test_884":{"methods":[{"sl":98},{"sl":139}],"name":"Verify toString","pass":true,"statements":[{"sl":99},{"sl":100},{"sl":103},{"sl":105},{"sl":140}]},"test_899":{"methods":[{"sl":117}],"name":"Generate version 1 Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":119}]},"test_90":{"methods":[{"sl":117}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.[0]","pass":true,"statements":[{"sl":119}]},"test_932":{"methods":[{"sl":76},{"sl":117}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":77},{"sl":119}]},"test_950":{"methods":[{"sl":117}],"name":"Verify serialization","pass":true,"statements":[{"sl":119}]},"test_957":{"methods":[{"sl":98},{"sl":129},{"sl":139}],"name":"Verify toString","pass":true,"statements":[{"sl":99},{"sl":100},{"sl":101},{"sl":103},{"sl":105},{"sl":131},{"sl":140}]},"test_973":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 2 Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":67},{"sl":113},{"sl":119}]},"test_995":{"methods":[{"sl":61},{"sl":112},{"sl":117}],"name":"Generate version 1 Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":113},{"sl":119}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [448, 102, 973, 754, 723, 855, 798, 544, 295, 764, 819, 860, 28, 283, 601, 683, 599, 995, 809, 37, 572, 576, 208], [448, 102, 973, 754, 723, 855, 798, 544, 295, 764, 819, 860, 28, 283, 601, 683, 599, 995, 809, 37, 572, 576, 208], [448, 102, 973, 754, 723, 855, 798, 544, 295, 764, 819, 860, 28, 283, 601, 683, 599, 995, 809, 37, 572, 576, 208], [448, 102, 973, 754, 723, 855, 798, 544, 295, 764, 819, 860, 28, 283, 601, 683, 599, 995, 809, 37, 572, 576, 208], [448, 754, 723, 855, 544, 295, 764, 28, 283, 599, 995, 809, 572, 576], [], [102, 973, 798, 819, 860, 601, 683, 809, 37, 208], [], [], [], [], [], [], [], [], [353, 189, 932, 161], [353, 189, 932, 161], [], [], [], [], [], [], [74, 306, 134, 853, 361, 13, 242, 105, 15, 804, 746, 38, 350, 637, 715, 545, 368], [], [], [], [], [], [], [], [], [], [], [], [], [], [74, 353, 22, 189, 652, 13, 884, 685, 804, 957, 809], [74, 353, 22, 189, 652, 13, 884, 685, 804, 957, 809], [74, 353, 22, 189, 652, 13, 884, 685, 804, 957, 809], [74, 353, 652, 804, 957, 809], [], [22, 189, 13, 884, 685, 804, 957, 809], [], [74, 353, 22, 189, 652, 13, 884, 685, 804, 957, 809], [], [], [], [], [], [], [448, 102, 973, 723, 855, 798, 544, 295, 764, 819, 860, 28, 283, 683, 995, 37, 572, 576], [448, 102, 973, 723, 855, 798, 544, 295, 764, 819, 860, 28, 283, 683, 995, 37, 572, 576], [], [], [], [306, 448, 102, 90, 569, 438, 973, 853, 158, 852, 686, 361, 723, 855, 13, 798, 950, 242, 699, 1010, 457, 105, 159, 15, 670, 295, 764, 932, 819, 226, 860, 899, 28, 283, 161, 579, 995, 637, 37, 572, 576, 368], [], [306, 448, 102, 90, 569, 438, 973, 853, 158, 852, 686, 361, 723, 855, 13, 798, 950, 242, 699, 1010, 457, 105, 159, 15, 670, 295, 764, 932, 819, 226, 860, 899, 28, 283, 161, 579, 995, 637, 37, 572, 576, 368], [], [], [74, 306, 134, 853, 361, 13, 242, 105, 15, 804, 746, 38, 350, 637, 715, 545, 368], [], [74, 306, 134, 853, 361, 13, 242, 105, 15, 804, 746, 38, 350, 637, 715, 545, 368], [74, 306, 134, 853, 361, 13, 242, 105, 15, 804, 746, 38, 350, 637, 715, 545, 368], [74, 306, 134, 853, 361, 13, 242, 105, 15, 804, 746, 38, 350, 637, 715, 545, 368], [], [], [505, 685, 957, 809], [], [505, 685, 957, 809], [], [], [], [], [], [], [], [22, 13, 884, 685, 957, 809], [22, 13, 884, 685, 957, 809], [], [], [754, 599], [], [754, 599], [754, 599], [754, 599], [754, 599], [], [], [754, 599], [], [754, 599], [], [754, 599], [599], [754, 599], [], [754, 599], [754, 599], [754], [754, 599], [], [], [], []]
