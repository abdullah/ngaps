/*
 * Created by abdullahmara on 05/04/16.
 */

'use strict';

var ngaps = require('./index.js')

var str = `
	Sevda gibi bir gizli emel ruhuna sinmiş; 
	Bir haz ki hayalden bile üstün ve derinmiş. 
	Gökten gelerek gönlüne rüzgar gibi inmiş, 
	Bir sır ki bu,ölsen bile açamazsın... 

	Anlatması imkansız olan öyle bir an ki, 
	Hülyadaki ses varlığının gayesi sanki... 
	Bak emrediyor:Daldığın alemden uyan ki, 
	Mutlak seveceksin beni, bundan kaçamazsın... 

	Kalbin benim olsun diyorum,çünkü mukadder... 
	Cismin sana yetmez mi? Çabuk kalbini sök,ver! 
	Yoktur öte alemde de kurtulmaya bir yer! 
	Mutlak seveceksin beni,bundan kaçamazsın... 

	Ram ol bana,ruhun yeni bir aleme girsin... 
	Yazmış kaderin:Aşkıma ömrünce esirsin! 
	Aklınla,şuurunla,hayalinle bilirsin. 
	Mutlak seveceksin beni,bundan kaçamazsın...
`
var result = ngaps(str)

console.log(result) 

