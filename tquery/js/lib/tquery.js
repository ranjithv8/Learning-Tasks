
(function(){
	"use strict";
	
	var tQuery = function(element) {
		var t_ele = new $t_element(element);
		return t_ele;
	},
	
	$t_element = function(element){
		this.element = element;
	};

	$t_element.prototype = {
		split : function(splitter){
			if(typeof this.element === "string") {
				this.element = this.element.split(splitter);
			} else if(Object.prototype.toString.call(this.element) === "[object Array]") {
				var length = this.element.length,
					splitArray = [];
				for(var i = 0; i< length; ++i) {
					splitArray = splitArray.concat(this.element[i].split(splitter));
				}		
				this.element = splitArray;
			} 
			return this;		
		},

		reverse : function(){
			if(Object.prototype.toString.call(this.element) === "[object Array]") {
				var length = this.element.length;
				for(var i = 0; i< length; ++i) {
					this.element[i] = this.element[i].split("").reverse().join("");
				}		
			} 
			return this;	
		},

		join : function(str){
			if(Object.prototype.toString.call(this.element) === "[object Array]") {
				this.element = this.element.join(str);	
			} 
			return this;	
		},

		get : function(){
			return this.element;
		}
	}
	window.tQuery = tQuery;
})();