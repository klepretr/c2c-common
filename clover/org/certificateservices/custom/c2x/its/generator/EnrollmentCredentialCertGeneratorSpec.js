var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":224,"id":10558,"methods":[{"el":79,"sc":2,"sl":63},{"el":50,"sc":2,"sl":50},{"el":50,"sc":2,"sl":50},{"el":51,"sc":2,"sl":51},{"el":51,"sc":2,"sl":51},{"el":52,"sc":2,"sl":52},{"el":52,"sc":2,"sl":52},{"el":54,"sc":2,"sl":54},{"el":54,"sc":2,"sl":54},{"el":55,"sc":2,"sl":55},{"el":55,"sc":2,"sl":55},{"el":57,"sc":2,"sl":57},{"el":57,"sc":2,"sl":57},{"el":58,"sc":2,"sl":58},{"el":58,"sc":2,"sl":58},{"el":60,"sc":2,"sl":60},{"el":60,"sc":2,"sl":60},{"el":61,"sc":2,"sl":61},{"el":61,"sc":2,"sl":61},{"el":120,"sc":2,"sl":81},{"el":156,"sc":2,"sl":122},{"el":167,"sc":2,"sl":158},{"el":215,"sc":2,"sl":169},{"el":222,"sc":2,"sl":217}],"name":"EnrollmentCredentialCertGeneratorSpec","sl":48}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_448":{"methods":[{"sl":52},{"sl":55},{"sl":60},{"sl":81}],"name":"Generate version 1 Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":84},{"sl":86},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":101},{"sl":102},{"sl":103},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":110},{"sl":111},{"sl":113},{"sl":114}]},"test_515":{"methods":[{"sl":51},{"sl":55},{"sl":60},{"sl":158}],"name":"Verify that version 2 EnrollmentCert throws IllegalArgumentException when using a certificate or certificate_chain as signer info","pass":true,"statements":[{"sl":160},{"sl":162},{"sl":164},{"sl":166}]},"test_723":{"methods":[{"sl":50},{"sl":52},{"sl":55},{"sl":58},{"sl":60},{"sl":169}],"name":"Generate version 1 Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":171},{"sl":173},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":189},{"sl":190},{"sl":191},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":198},{"sl":199},{"sl":201},{"sl":202},{"sl":205},{"sl":207},{"sl":209},{"sl":210},{"sl":211},{"sl":212},{"sl":213}]},"test_940":{"methods":[{"sl":50},{"sl":60},{"sl":217}],"name":"Verify that illegal argument exception is thrown for messages with unsupported subject type","pass":true,"statements":[{"sl":219},{"sl":221}]},"test_973":{"methods":[{"sl":52},{"sl":55},{"sl":60},{"sl":81}],"name":"Generate version 2 Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":84},{"sl":86},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":101},{"sl":102},{"sl":103},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":110},{"sl":111},{"sl":113},{"sl":114}]},"test_995":{"methods":[{"sl":50},{"sl":52},{"sl":60},{"sl":122}],"name":"Generate version 1 Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":124},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":134},{"sl":135},{"sl":136},{"sl":137},{"sl":138},{"sl":140},{"sl":141},{"sl":142},{"sl":144},{"sl":145},{"sl":146},{"sl":147},{"sl":149},{"sl":150},{"sl":153},{"sl":154}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [723, 940, 995], [515], [973, 448, 723, 995], [], [], [973, 515, 448, 723], [], [], [723], [], [973, 515, 448, 723, 940, 995], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [973, 448], [], [], [973, 448], [], [973, 448], [], [], [973, 448], [973, 448], [973, 448], [973, 448], [973, 448], [973, 448], [973, 448], [973, 448], [973, 448], [973, 448], [973, 448], [], [973, 448], [973, 448], [973, 448], [], [973, 448], [973, 448], [973, 448], [973, 448], [], [973, 448], [973, 448], [], [973, 448], [973, 448], [], [], [], [], [], [], [], [995], [], [995], [], [995], [], [995], [995], [995], [995], [995], [995], [995], [995], [995], [995], [995], [], [995], [995], [995], [], [995], [995], [995], [995], [], [995], [995], [], [], [995], [995], [], [], [], [515], [], [515], [], [515], [], [515], [], [515], [], [], [723], [], [723], [], [723], [], [723], [723], [723], [723], [723], [723], [723], [723], [723], [723], [723], [723], [723], [], [723], [723], [723], [], [723], [723], [723], [723], [], [723], [723], [], [723], [723], [], [], [723], [], [723], [], [723], [723], [723], [723], [723], [], [], [], [940], [], [940], [], [940], [], [], []]
