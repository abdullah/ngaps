
/**
 * Created by abdullahmara on 05/04/16.
 */

'use strict';


var ngaps = function ngaps(str) {
			var starray = str.split("");
			var str = "";
			var ch = starray.filter(function(elem,i) {
				var c = starray[i].charCodeAt(0)
				var n = null;
				if (i+1 != starray.length) {
					 n = starray[i+1].charCodeAt(0)
				}
				if (c != 10) {
					if (c == 32) {
						if (n != 32 && n != 9) {
							str+=elem;
							return elem ;
						}
					}
					if (c != 32 && c != 9) {
						str+=elem;
						return elem ;
					}
				}
				else{
					if (n != 9 && n != 32 && n != 10) {
						str+=" ";	
						return elem ;
					}
				}
			});	

			return str
		}

module.exports =  ngaps
