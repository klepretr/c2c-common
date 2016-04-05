var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":185,"id":8632,"methods":[{"el":58,"sc":2,"sl":54},{"el":73,"sc":2,"sl":69},{"el":135,"sc":2,"sl":98},{"el":181,"sc":2,"sl":162}],"name":"EnrollmentCredentialCertGenerator","sl":40}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_448":{"methods":[{"sl":98}],"name":"Generate version 1 Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":112},{"sl":113},{"sl":114},{"sl":121},{"sl":122},{"sl":123},{"sl":131}]},"test_515":{"methods":[{"sl":98},{"sl":162}],"name":"Verify that version 2 EnrollmentCert throws IllegalArgumentException when using a certificate or certificate_chain as signer info","pass":true,"statements":[{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":176},{"sl":177}]},"test_723":{"methods":[{"sl":162}],"name":"Generate version 1 Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":176},{"sl":179},{"sl":180}]},"test_940":{"methods":[{"sl":98}],"name":"Verify that illegal argument exception is thrown for messages with unsupported subject type","pass":true,"statements":[{"sl":112},{"sl":133}]},"test_973":{"methods":[{"sl":98}],"name":"Generate version 2 Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":112},{"sl":113},{"sl":114},{"sl":121},{"sl":122},{"sl":123},{"sl":131}]},"test_995":{"methods":[{"sl":98}],"name":"Generate version 1 Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":118},{"sl":131}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [448, 995, 973, 515, 940], [], [], [], [], [], [], [], [], [], [], [], [], [], [448, 995, 973, 515, 940], [448, 995, 973, 515], [448, 995, 973, 515], [995, 515], [515], [], [995], [], [], [448, 973], [448, 973], [448, 973], [], [], [], [], [], [], [], [448, 995, 973], [], [940], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [723, 515], [], [], [], [], [], [], [], [], [], [], [], [], [], [723, 515], [515], [], [723], [723], [], [], [], [], []]
