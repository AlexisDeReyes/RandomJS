RandomJS
========

This is a repository for my random Work with JavaScript


CircularBuffer
========

CircularBuffer is pretty much just as it sounds. It is a buffer that workes as a circular array.

CircularBuffer will store values in an array of the length of the size of the buffer that is set with new CircularBuffer(n). Once the storage in the array is exceeded, CircularBuffer will overwrite the oldest value in the array and replace that value with the new value. 

Example Usage:


var example = new CircularBuffer(3);

example.push(1);

example.push(2);

example.push(3);

example.getArray();   // [1, 2, 3]

example.push(4);

example.push(5);

example.getArray();   // [3, 4, 5]

example._array;       // [4, 5, 3]
