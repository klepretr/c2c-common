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
package org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic

import org.certificateservices.custom.c2x.common.BaseStructSpec;

/**
 * Test for Time32
 * 
 * @author Philip Vendil, p.vendil@cgi.com
 *
 */
class Time32Spec extends BaseStructSpec {


	Calendar cal = Calendar.getInstance();
	Calendar calEpoch = Calendar.getInstance(TimeZone.getTimeZone("UTC"));
	
	def setup(){
		cal.setTimeInMillis(0);
		cal.set(2010, 01, 02, 02, 04, 30);

		calEpoch.setTimeInMillis(0);
		calEpoch.set(2004, Calendar.JANUARY, 01, 00, 00, 00);
	}

	def "Verify that Time32 epoch is correct"(){
		setup:
		Date time = calEpoch.getTime()
		when:
		def t = new Time32(time)

		then:
		t.asElapsedTime() == 0L

		when:
		def m = new Time32(0L)

		then:
		m.asDate() == time
	}

	def "Verify that Time32 converts date correctly"(){
		setup:
		Date time = cal.getTime()
		when:
		def t = new Time32(time)
		
		then:
		t.asElapsedTime() == 192157472L
		
		when:
		Time32 t2 = deserializeFromHex(new Time32(), serializeToHex(t))
		then:
		t2.asDate() == time
		

		when:
		def t3 = new Time32(123L) // test long constructor
		then:
		t3.asElapsedTime() == 123L
		
	}
	
	def "Verify toString"(){
		expect:
		new Time32(cal.getTime()).toString() == "Time32 [timeStamp=Tue Feb 02 02:04:30 CET 2010 (192157472)]"
	}


}
