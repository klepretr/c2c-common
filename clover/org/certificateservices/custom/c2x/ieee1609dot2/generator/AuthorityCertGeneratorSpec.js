var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":301,"id":13322,"methods":[{"el":132,"sc":2,"sl":76},{"el":209,"sc":2,"sl":134},{"el":252,"sc":2,"sl":211},{"el":286,"sc":2,"sl":254},{"el":298,"sc":2,"sl":288}],"name":"AuthorityCertGeneratorSpec","sl":74}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_113":{"methods":[{"sl":288}],"name":"Verify that getPublicVerificationAlgorithm returns correct PublicVerificationKeyChoice ecdsaBrainpoolP256r1 for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":291}]},"test_309":{"methods":[{"sl":254}],"name":"Verify that Ieee1609Dot2 Short term CA is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":257},{"sl":258},{"sl":260},{"sl":261},{"sl":262},{"sl":263},{"sl":264},{"sl":265},{"sl":266},{"sl":268},{"sl":277},{"sl":279},{"sl":280},{"sl":281}]},"test_44":{"methods":[{"sl":76}],"name":"Verify that Ieee1609Dot2 Root CA is generated correctly for explicit certificate (only type supported) for alg: ecdsaNistP256","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":84},{"sl":86},{"sl":88},{"sl":90},{"sl":92},{"sl":94},{"sl":95},{"sl":97},{"sl":98},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":108},{"sl":110},{"sl":111},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":120},{"sl":123},{"sl":125},{"sl":126},{"sl":127}]},"test_469":{"methods":[{"sl":288}],"name":"Verify that getPublicVerificationAlgorithm returns correct PublicVerificationKeyChoice ecdsaBrainpoolP256r1 for alg: eciesBrainpoolP256r1","pass":true,"statements":[{"sl":291}]},"test_541":{"methods":[{"sl":288}],"name":"Verify that getPublicVerificationAlgorithm returns correct PublicVerificationKeyChoice ecdsaNistP256 for alg: ecdsaNistP256","pass":true,"statements":[{"sl":291}]},"test_577":{"methods":[{"sl":211}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of implicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":214},{"sl":215},{"sl":217},{"sl":218},{"sl":219},{"sl":220},{"sl":221},{"sl":222},{"sl":223},{"sl":225},{"sl":234},{"sl":235},{"sl":237},{"sl":240},{"sl":241},{"sl":243},{"sl":245},{"sl":247}]},"test_614":{"methods":[{"sl":254}],"name":"Verify that Ieee1609Dot2 Short term CA is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":257},{"sl":258},{"sl":260},{"sl":261},{"sl":262},{"sl":263},{"sl":264},{"sl":265},{"sl":266},{"sl":268},{"sl":277},{"sl":279},{"sl":280},{"sl":281}]},"test_649":{"methods":[{"sl":288}],"name":"Verify that getPublicVerificationAlgorithm returns correct PublicVerificationKeyChoice ecdsaNistP256 for alg: eciesNistP256","pass":true,"statements":[{"sl":291}]},"test_674":{"methods":[{"sl":134}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of explicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":137},{"sl":138},{"sl":139},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":146},{"sl":147},{"sl":149},{"sl":158},{"sl":160},{"sl":162},{"sl":163},{"sl":164},{"sl":166},{"sl":167},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":179},{"sl":181},{"sl":182},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":191},{"sl":200},{"sl":202},{"sl":203},{"sl":204}]},"test_806":{"methods":[{"sl":76}],"name":"Verify that Ieee1609Dot2 Root CA is generated correctly for explicit certificate (only type supported) for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":84},{"sl":86},{"sl":88},{"sl":90},{"sl":92},{"sl":94},{"sl":95},{"sl":97},{"sl":98},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":108},{"sl":110},{"sl":111},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":120},{"sl":123},{"sl":125},{"sl":126},{"sl":127}]},"test_850":{"methods":[{"sl":134}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of explicit certificate for alg: ecdsaNistP256","pass":true,"statements":[{"sl":137},{"sl":138},{"sl":139},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":145},{"sl":146},{"sl":147},{"sl":149},{"sl":158},{"sl":160},{"sl":162},{"sl":163},{"sl":164},{"sl":166},{"sl":167},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":179},{"sl":181},{"sl":182},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":191},{"sl":200},{"sl":202},{"sl":203},{"sl":204}]},"test_894":{"methods":[{"sl":211}],"name":"Verify that Ieee1609Dot2 Long term CA is generated correctly of implicit certificate for alg: ecdsaBrainpoolP256r1","pass":true,"statements":[{"sl":214},{"sl":215},{"sl":217},{"sl":218},{"sl":219},{"sl":220},{"sl":221},{"sl":222},{"sl":223},{"sl":225},{"sl":234},{"sl":235},{"sl":237},{"sl":240},{"sl":241},{"sl":243},{"sl":245},{"sl":247}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [806, 44], [], [], [806, 44], [806, 44], [], [806, 44], [806, 44], [806, 44], [], [806, 44], [], [806, 44], [], [806, 44], [], [806, 44], [], [806, 44], [806, 44], [], [806, 44], [806, 44], [], [806, 44], [806, 44], [806, 44], [806, 44], [806, 44], [806, 44], [806, 44], [], [806, 44], [], [806, 44], [806, 44], [], [806, 44], [806, 44], [806, 44], [806, 44], [806, 44], [], [], [806, 44], [], [], [806, 44], [], [806, 44], [806, 44], [806, 44], [], [], [], [], [], [], [674, 850], [], [], [674, 850], [674, 850], [674, 850], [], [674, 850], [674, 850], [674, 850], [674, 850], [674, 850], [674, 850], [674, 850], [], [674, 850], [], [], [], [], [], [], [], [], [674, 850], [], [674, 850], [], [674, 850], [674, 850], [674, 850], [], [674, 850], [674, 850], [], [674, 850], [674, 850], [674, 850], [674, 850], [674, 850], [674, 850], [674, 850], [674, 850], [674, 850], [], [674, 850], [], [674, 850], [674, 850], [], [674, 850], [674, 850], [674, 850], [674, 850], [674, 850], [], [], [674, 850], [], [], [], [], [], [], [], [], [674, 850], [], [674, 850], [674, 850], [674, 850], [], [], [], [], [], [], [577, 894], [], [], [577, 894], [577, 894], [], [577, 894], [577, 894], [577, 894], [577, 894], [577, 894], [577, 894], [577, 894], [], [577, 894], [], [], [], [], [], [], [], [], [577, 894], [577, 894], [], [577, 894], [], [], [577, 894], [577, 894], [], [577, 894], [], [577, 894], [], [577, 894], [], [], [], [], [], [], [309, 614], [], [], [309, 614], [309, 614], [], [309, 614], [309, 614], [309, 614], [309, 614], [309, 614], [309, 614], [309, 614], [], [309, 614], [], [], [], [], [], [], [], [], [309, 614], [], [309, 614], [309, 614], [309, 614], [], [], [], [], [], [], [541, 113, 469, 649], [], [], [541, 113, 469, 649], [], [], [], [], [], [], [], [], [], []]
