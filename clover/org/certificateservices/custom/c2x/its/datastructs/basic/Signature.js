var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":102,"id":1526,"methods":[{"el":52,"sc":2,"sl":46},{"el":61,"sc":2,"sl":60},{"el":68,"sc":2,"sl":66},{"el":75,"sc":2,"sl":73},{"el":84,"sc":2,"sl":78},{"el":93,"sc":2,"sl":86},{"el":99,"sc":2,"sl":95}],"name":"Signature","sl":34}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":60},{"sl":78},{"sl":86}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_1":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_119":{"methods":[{"sl":60},{"sl":66},{"sl":73},{"sl":86}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":67},{"sl":74},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_121":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate Authorization Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_123":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_124":{"methods":[{"sl":60},{"sl":78},{"sl":86}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_129":{"methods":[{"sl":60},{"sl":66}],"name":"Verify calculateSignatureLength throws exception for #pubAlg","pass":true,"statements":[{"sl":67}]},"test_133":{"methods":[{"sl":66},{"sl":73}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with compressed_lsb_y_0 ecc point","pass":true,"statements":[{"sl":67},{"sl":74}]},"test_139":{"methods":[{"sl":46},{"sl":66},{"sl":73}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType x_coordinate_only","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74}]},"test_14":{"methods":[{"sl":46},{"sl":60},{"sl":66},{"sl":73},{"sl":78},{"sl":86}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_142":{"methods":[{"sl":78}],"name":"Verify serialization","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82}]},"test_143":{"methods":[{"sl":66},{"sl":73}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly no signature trailer field","pass":true,"statements":[{"sl":67},{"sl":74}]},"test_144":{"methods":[{"sl":66},{"sl":73}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with uncompressed ecc point","pass":true,"statements":[{"sl":67},{"sl":74}]},"test_148":{"methods":[{"sl":60},{"sl":86}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_150":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_162":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_173":{"methods":[{"sl":66}],"name":"Verify attachSignature","pass":true,"statements":[{"sl":67}]},"test_198":{"methods":[{"sl":46},{"sl":95}],"name":"Verify toString","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":97}]},"test_20":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_203":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_206":{"methods":[{"sl":60},{"sl":66},{"sl":86}],"name":"Verify deserialization ofSignature","pass":true,"statements":[{"sl":67},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_207":{"methods":[{"sl":46},{"sl":66},{"sl":73}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74}]},"test_216":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_231":{"methods":[{"sl":60},{"sl":86}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_252":{"methods":[{"sl":60},{"sl":86}],"name":"Verify deserialization","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_258":{"methods":[{"sl":46},{"sl":66}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":50},{"sl":51},{"sl":67}]},"test_26":{"methods":[{"sl":78}],"name":"Verify serialization","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82}]},"test_261":{"methods":[{"sl":46},{"sl":66},{"sl":73}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType compressed_lsb_y_1","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74}]},"test_262":{"methods":[{"sl":46},{"sl":66},{"sl":73}],"name":"Test to generate ECDSA Signature and then verify the signature for algorithm: ecdsa_nistp256_with_sha256","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74}]},"test_265":{"methods":[{"sl":46},{"sl":60},{"sl":66},{"sl":73},{"sl":78},{"sl":86}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_266":{"methods":[{"sl":60},{"sl":86}],"name":"Verify deserialization","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_28":{"methods":[{"sl":78}],"name":"Verify serialization","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82}]},"test_281":{"methods":[{"sl":66}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":67}]},"test_283":{"methods":[{"sl":95}],"name":"Verify toString","pass":true,"statements":[{"sl":97}]},"test_288":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_289":{"methods":[{"sl":46},{"sl":60},{"sl":66},{"sl":73},{"sl":78},{"sl":86}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_296":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate Authorization CA v1 for interoperability testing","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_297":{"methods":[{"sl":78}],"name":"Verify serialization of RecipientInfo","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82}]},"test_336":{"methods":[{"sl":46},{"sl":66},{"sl":73}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType uncompressed","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74}]},"test_341":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_350":{"methods":[{"sl":60},{"sl":66},{"sl":73},{"sl":78},{"sl":86}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_365":{"methods":[{"sl":46},{"sl":66},{"sl":73}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType compressed_lsb_y_0","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74}]},"test_366":{"methods":[{"sl":78}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82}]},"test_37":{"methods":[{"sl":95}],"name":"Verify toString","pass":true,"statements":[{"sl":97}]},"test_373":{"methods":[{"sl":60},{"sl":86}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_387":{"methods":[{"sl":78}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82}]},"test_394":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_395":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_399":{"methods":[{"sl":95}],"name":"Verify toString","pass":true,"statements":[{"sl":97}]},"test_403":{"methods":[{"sl":66},{"sl":73}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with x_coordinate_only ecc point","pass":true,"statements":[{"sl":67},{"sl":74}]},"test_49":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_56":{"methods":[{"sl":60},{"sl":86}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_57":{"methods":[{"sl":60},{"sl":78},{"sl":86}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_63":{"methods":[{"sl":60},{"sl":86}],"name":"Verify deserialization","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_68":{"methods":[{"sl":46},{"sl":78}],"name":"Verify serialization of Signature","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":80},{"sl":81},{"sl":82}]},"test_69":{"methods":[{"sl":66},{"sl":73}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with compressed_lsb_y_1 ecc point","pass":true,"statements":[{"sl":67},{"sl":74}]},"test_71":{"methods":[{"sl":46},{"sl":66},{"sl":73}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74}]},"test_80":{"methods":[{"sl":46},{"sl":66},{"sl":73},{"sl":78}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":51},{"sl":67},{"sl":74},{"sl":80},{"sl":81},{"sl":82}]},"test_82":{"methods":[{"sl":78}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [288, 123, 139, 395, 289, 261, 336, 258, 203, 68, 207, 162, 71, 1, 265, 216, 80, 262, 365, 121, 20, 14, 296, 341, 394, 150, 49, 198], [288, 123, 139, 395, 289, 261, 336, 258, 203, 68, 207, 162, 71, 1, 265, 216, 80, 262, 365, 121, 20, 14, 296, 341, 394, 150, 49, 198], [258], [], [288, 123, 139, 395, 289, 261, 336, 258, 203, 68, 207, 162, 71, 1, 265, 216, 80, 262, 365, 121, 20, 14, 296, 341, 394, 150, 49, 198], [288, 123, 139, 395, 289, 261, 336, 258, 203, 68, 207, 162, 71, 1, 265, 216, 80, 262, 365, 121, 20, 14, 296, 341, 394, 150, 49, 198], [], [], [], [], [], [], [], [], [266, 289, 252, 148, 57, 206, 56, 231, 350, 373, 119, 265, 0, 14, 124, 63, 129], [], [], [], [], [], [288, 123, 139, 403, 143, 395, 289, 261, 336, 258, 206, 203, 144, 69, 133, 207, 281, 350, 162, 71, 119, 1, 265, 216, 80, 262, 365, 121, 20, 14, 296, 341, 394, 173, 150, 129, 49], [288, 123, 139, 403, 143, 395, 289, 261, 336, 258, 206, 203, 144, 69, 133, 207, 281, 350, 162, 71, 119, 1, 265, 216, 80, 262, 365, 121, 20, 14, 296, 341, 394, 173, 150, 129, 49], [], [], [], [], [], [288, 123, 139, 403, 143, 395, 289, 261, 336, 203, 144, 69, 133, 207, 350, 162, 71, 119, 1, 265, 216, 80, 262, 365, 121, 20, 14, 296, 341, 394, 150, 49], [288, 123, 139, 403, 143, 395, 289, 261, 336, 203, 144, 69, 133, 207, 350, 162, 71, 119, 1, 265, 216, 80, 262, 365, 121, 20, 14, 296, 341, 394, 150, 49], [], [], [], [288, 123, 395, 289, 57, 203, 387, 68, 350, 297, 162, 1, 82, 265, 216, 80, 0, 366, 121, 20, 142, 14, 28, 296, 124, 341, 394, 150, 26, 49], [], [288, 123, 395, 289, 57, 203, 387, 68, 350, 297, 162, 1, 82, 265, 216, 80, 0, 366, 121, 20, 142, 14, 28, 296, 124, 341, 394, 150, 26, 49], [288, 123, 395, 289, 57, 203, 387, 68, 350, 297, 162, 1, 82, 265, 216, 80, 0, 366, 121, 20, 142, 14, 28, 296, 124, 341, 394, 150, 26, 49], [288, 123, 395, 289, 57, 203, 387, 68, 350, 297, 162, 1, 82, 265, 216, 80, 0, 366, 121, 20, 142, 14, 28, 296, 124, 341, 394, 150, 26, 49], [], [], [], [266, 289, 252, 148, 57, 206, 56, 231, 350, 373, 119, 265, 0, 14, 124, 63], [], [266, 289, 252, 148, 57, 206, 56, 231, 350, 373, 119, 265, 0, 14, 124, 63], [266, 289, 252, 148, 57, 206, 56, 231, 350, 373, 119, 265, 0, 14, 124, 63], [266, 289, 252, 148, 57, 206, 56, 231, 350, 373, 119, 265, 0, 14, 124, 63], [266, 289, 252, 148, 57, 206, 56, 231, 350, 373, 119, 265, 0, 14, 124, 63], [], [], [], [399, 283, 37, 198], [], [399, 283, 37, 198], [], [], [], [], []]