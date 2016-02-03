/************************************************************************
 *                                                                       *
 *  Certificate Service -  Car2Car Core                                  *
 *                                                                       *
 *  This software is free software; you can redistribute it and/or       *
 *  modify it under the terms of the GNU Affero General Public License   *
 *  License as published by the Free Software Foundation; either         *
 *  version 3   of the License, or any later version.                    *
 *                                                                       *
 *  See terms of license at gnu.org.                                     *
 *                                                                       *
 *************************************************************************/
package org.certificateservices.custom.c2x.ieee1609dot2.crl.basic

import org.bouncycastle.util.encoders.Hex;
import org.certificateservices.custom.c2x.asn1.coer.COEREncodeHelper;
import org.certificateservices.custom.c2x.asn1.coer.COERSequenceOf
import org.certificateservices.custom.c2x.common.BaseStructSpec;
import org.certificateservices.custom.c2x.common.crypto.DefaultCryptoManagerParams;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.BasePublicEncryptionKey;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.CrlSeries
import org.certificateservices.custom.c2x.ieee1609dot2.basic.Duration
import org.certificateservices.custom.c2x.ieee1609dot2.basic.Duration.DurationChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.EccP256CurvePoint;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.EccP256CurvePoint.EccP256CurvePointChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.EcdsaP256Signature;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.HashAlgorithm;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.HashedId3
import org.certificateservices.custom.c2x.ieee1609dot2.basic.Hostname
import org.certificateservices.custom.c2x.ieee1609dot2.basic.LaId;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.LinkageSeed;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.Psid
import org.certificateservices.custom.c2x.ieee1609dot2.basic.PsidSsp
import org.certificateservices.custom.c2x.ieee1609dot2.basic.PublicVerificationKey
import org.certificateservices.custom.c2x.ieee1609dot2.basic.ServiceSpecificPermissions.ServiceSpecificPermissionsChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.Signature;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.PublicVerificationKey.PublicVerificationKeyChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.SequenceOfPsidSsp
import org.certificateservices.custom.c2x.ieee1609dot2.basic.Signature.SignatureChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.Time32
import org.certificateservices.custom.c2x.ieee1609dot2.basic.ValidityPeriod
import org.certificateservices.custom.c2x.ieee1609dot2.basic.IdentifiedRegion.IdentifiedRegionChoices;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.ServiceSpecificPermissions;
import org.certificateservices.custom.c2x.ieee1609dot2.cert.SubjectPermissions.SubjectPermissionsChoices;

import spock.lang.IgnoreRest;
import spock.lang.Specification;
import spock.lang.Unroll;

/**
 * Test for all SequenceOfJMaxGroup class
 * 
 * @author Philip Vendil, p.vendil@cgi.com
 *
 */
class SequenceOfJMaxGroupSpec extends BaseStructSpec {


	JMaxGroup jmg1 = genJMaxGroup(9)
	JMaxGroup jmg2 = genJMaxGroup(10)
	
	def "Verify that SequenceOfJMaxGroup is initialized properly"(){
		when:
		def u1 = deserializeFromHex(new SequenceOfJMaxGroup(),"0102000901020102030501020000070102000102030405060708091011121314151611121314151617181911212223242526002102030405060708091011121314151621121314151617181911212223242526000008010200210203040506070809101112131415162112131415161718191121222324252600310203040506070809101112131415163112131415161718191121222324252611021305010200000701020001020304050607080910111213141516111213141516171819112122232425260021020304050607080910111213141516211213141516171819112122232425260000080102002102030405060708091011121314151621121314151617181911212223242526003102030405060708091011121314151631121314151617181911212223242526000a01020102030501020000070102000102030405060708091011121314151611121314151617181911212223242526002102030405060708091011121314151621121314151617181911212223242526000008010200210203040506070809101112131415162112131415161718191121222324252600310203040506070809101112131415163112131415161718191121222324252611021305010200000701020001020304050607080910111213141516111213141516171819112122232425260021020304050607080910111213141516211213141516171819112122232425260000080102002102030405060708091011121314151621121314151617181911212223242526003102030405060708091011121314151631121314151617181911212223242526")
		then:
		u1.getSequenceValues()[0] == jmg1
		u1.getSequenceValues()[1] == jmg2
		when:
		def u2 = new SequenceOfJMaxGroup([jmg1,jmg2] as JMaxGroup[])
		then:
		u2.getSequenceValues()[0] == jmg1
		u2.getSequenceValues()[1] == jmg2
		
		when:
		def u3 = new SequenceOfJMaxGroup([jmg1,jmg2])
		then:
		u3.getSequenceValues()[0] == jmg1
		u3.getSequenceValues()[1] == jmg2
	}
	
	
	def "Verify toString"(){
		expect:
		new SequenceOfJMaxGroup([jmg1,jmg2]).toString() == """SequenceOfJMaxGroup [
  [imax=9, contents=[
      [la1Id=[0102], la2Id=[0305], contents=[
          [imax=7, contents=[
              [linkage-seed1=[01020304050607080910111213141516], linkage-seed2=[11121314151617181911212223242526]],
              [linkage-seed1=[21020304050607080910111213141516], linkage-seed2=[21121314151617181911212223242526]]
            ]
          ],
          [imax=8, contents=[
              [linkage-seed1=[21020304050607080910111213141516], linkage-seed2=[21121314151617181911212223242526]],
              [linkage-seed1=[31020304050607080910111213141516], linkage-seed2=[31121314151617181911212223242526]]
            ]
          ]
        ]
      ],
      [la1Id=[1102], la2Id=[1305], contents=[
          [imax=7, contents=[
              [linkage-seed1=[01020304050607080910111213141516], linkage-seed2=[11121314151617181911212223242526]],
              [linkage-seed1=[21020304050607080910111213141516], linkage-seed2=[21121314151617181911212223242526]]
            ]
          ],
          [imax=8, contents=[
              [linkage-seed1=[21020304050607080910111213141516], linkage-seed2=[21121314151617181911212223242526]],
              [linkage-seed1=[31020304050607080910111213141516], linkage-seed2=[31121314151617181911212223242526]]
            ]
          ]
        ]
      ]
    ]
  ],
  [imax=10, contents=[
      [la1Id=[0102], la2Id=[0305], contents=[
          [imax=7, contents=[
              [linkage-seed1=[01020304050607080910111213141516], linkage-seed2=[11121314151617181911212223242526]],
              [linkage-seed1=[21020304050607080910111213141516], linkage-seed2=[21121314151617181911212223242526]]
            ]
          ],
          [imax=8, contents=[
              [linkage-seed1=[21020304050607080910111213141516], linkage-seed2=[21121314151617181911212223242526]],
              [linkage-seed1=[31020304050607080910111213141516], linkage-seed2=[31121314151617181911212223242526]]
            ]
          ]
        ]
      ],
      [la1Id=[1102], la2Id=[1305], contents=[
          [imax=7, contents=[
              [linkage-seed1=[01020304050607080910111213141516], linkage-seed2=[11121314151617181911212223242526]],
              [linkage-seed1=[21020304050607080910111213141516], linkage-seed2=[21121314151617181911212223242526]]
            ]
          ],
          [imax=8, contents=[
              [linkage-seed1=[21020304050607080910111213141516], linkage-seed2=[21121314151617181911212223242526]],
              [linkage-seed1=[31020304050607080910111213141516], linkage-seed2=[31121314151617181911212223242526]]
            ]
          ]
        ]
      ]
    ]
  ]
]"""
		new SequenceOfJMaxGroup().toString() == "SequenceOfJMaxGroup []"
		new SequenceOfJMaxGroup([jmg1]).toString() == """SequenceOfJMaxGroup [
  [imax=9, contents=[
      [la1Id=[0102], la2Id=[0305], contents=[
          [imax=7, contents=[
              [linkage-seed1=[01020304050607080910111213141516], linkage-seed2=[11121314151617181911212223242526]],
              [linkage-seed1=[21020304050607080910111213141516], linkage-seed2=[21121314151617181911212223242526]]
            ]
          ],
          [imax=8, contents=[
              [linkage-seed1=[21020304050607080910111213141516], linkage-seed2=[21121314151617181911212223242526]],
              [linkage-seed1=[31020304050607080910111213141516], linkage-seed2=[31121314151617181911212223242526]]
            ]
          ]
        ]
      ],
      [la1Id=[1102], la2Id=[1305], contents=[
          [imax=7, contents=[
              [linkage-seed1=[01020304050607080910111213141516], linkage-seed2=[11121314151617181911212223242526]],
              [linkage-seed1=[21020304050607080910111213141516], linkage-seed2=[21121314151617181911212223242526]]
            ]
          ],
          [imax=8, contents=[
              [linkage-seed1=[21020304050607080910111213141516], linkage-seed2=[21121314151617181911212223242526]],
              [linkage-seed1=[31020304050607080910111213141516], linkage-seed2=[31121314151617181911212223242526]]
            ]
          ]
        ]
      ]
    ]
  ]
]"""
		
	
	}
	

	public static JMaxGroup genJMaxGroup(int jMax){
		LaId laid1_1 = new LaId(Hex.decode("0102"))
		LaId laid2_1 = new LaId(Hex.decode("0305"))
		
		LaId laid1_2 = new LaId(Hex.decode("1102"))
		LaId laid2_2 = new LaId(Hex.decode("1305"))
		
		LinkageSeed ls1_1_1 = new LinkageSeed(Hex.decode("01020304050607080910111213141516"))
		LinkageSeed ls2_1_1 = new LinkageSeed(Hex.decode("11121314151617181911212223242526"))
		LinkageSeed ls1_2_1 = new LinkageSeed(Hex.decode("21020304050607080910111213141516"))
		LinkageSeed ls2_2_1 = new LinkageSeed(Hex.decode("21121314151617181911212223242526"))
		
		
		IndividualRevocation ir1_1 = new IndividualRevocation( ls1_1_1, ls2_1_1)
		IndividualRevocation ir2_1 = new IndividualRevocation( ls1_2_1, ls2_2_1)
		
		LinkageSeed ls1_1_2 = new LinkageSeed(Hex.decode("21020304050607080910111213141516"))
		LinkageSeed ls2_1_2 = new LinkageSeed(Hex.decode("21121314151617181911212223242526"))
		LinkageSeed ls1_2_2 = new LinkageSeed(Hex.decode("31020304050607080910111213141516"))
		LinkageSeed ls2_2_2 = new LinkageSeed(Hex.decode("31121314151617181911212223242526"))
		
		
		IndividualRevocation ir1_2 = new IndividualRevocation( ls1_1_2, ls2_1_2)
		IndividualRevocation ir2_2 = new IndividualRevocation( ls1_2_2, ls2_2_2)
		
		IMaxGroup img1 = new IMaxGroup(7, new SequenceOfIndividualRevocation(ir1_1,ir2_1))
		IMaxGroup img2 = new IMaxGroup(8, new SequenceOfIndividualRevocation(ir1_2,ir2_2))
		
		SequenceOfIMaxGroup simg = new SequenceOfIMaxGroup([img1,img2])
		
		LAGroup lag1 = new LAGroup(laid1_1, laid2_1, simg)
		LAGroup lag2 = new LAGroup(laid1_2, laid2_2, simg)
		
		SequenceOfLAGroup contents = new SequenceOfLAGroup([lag1,lag2])
		return new JMaxGroup(jMax, contents)
	}
	


}
