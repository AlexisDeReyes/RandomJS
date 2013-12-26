function CircularBuffer(n) {
this._array = new Array(n);
this.offset = 0;
this.origLength = n;
}

CircularBuffer.prototype.push = function (v) {
    this._array[this.offset%this.origLength] = v;
    this.offset++;
}

CircularBuffer.prototype.getArray = function () {
    var resultLength = Math.min(this.offset, this.origLength);
    var result = [];
	if(this.offset <= this.origLength) {
	    for(var x=0;x<resultLength;x++) {
	 	    result.push(this._array[x]);
		}
	}
	else {
		for(var x=0;x<resultLength;x++) {
			result.push(this._array[(this.offset+x)%this.origLength]);
		}
    }
	return result;
}

CircularBuffer.prototype.foreach = function(func) {
    var resultLength = Math.min(this.offset, this.origLength);
    for(var x=0;x<resultLength;x++) {
        if(this.offset <= this.origLength) {
            func(this._array[x]);
        }
        else {
            func(this._array[(this.offset+x)%this.origLength]);
        }
    }
}
