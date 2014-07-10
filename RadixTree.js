function RadixTree(n){
	this.t = [];
	this.height = n;
	this.digits = n+1;

	function BuildTree(a, n)
	{
	    if(n > 0){
	        for(var x = 0; x < 10; x++){
	            a.push([]);
	            if(n > 1){
	            	BuildTree(a[x], n-1);
	            }
	        }
	    }
	}

	BuildTree(this.t, this.height);
}

RadixTree.prototype.Insert = function(value){
    var valuestring = value.toString();
    var diff = this.digits - valuestring.length;
    if(diff >= 0){
    	if(diff > 0){
	    	for(var x = 0; x<diff; x++){
	    		valuestring = "0" + valuestring;
	    	}
	    }
	    this.t[valuestring[0]][valuestring[1]].push(value);
    }
    else{
    	console.error("Cannot insert value,", value, "which is greater than", this.digits, "digits");
    }
}
