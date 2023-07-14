import getBuffer from '../getBuffer'

const data = getBuffer();

const buffer16View = new Int16Array(data);

class ArrayBufferConverter {
	constructor(buffer) {
		this.buffer = buffer;
	}

	load(buffer) {
		return new Int16Array(buffer)
	}

	toString() {
		return String.fromCharCode.apply(null, this.buffer);
	}
}

const conv = new ArrayBufferConverter(buffer16View);
console.log(conv.load(data))

