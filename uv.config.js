/*global Ultraviolet*/
self.__uv$config = {
	prefix: '/ultraviolet/service/',
	bare: 'https://bare.backends.onlycs.net/',
	encodeUrl: Ultraviolet.codec.xor.encode,
	decodeUrl: Ultraviolet.codec.xor.decode,
	handler: '/ultraviolet/uv.handler.js',
	client: '/ultraviolet/uv.client.js',
	bundle: '/ultraviolet/uv.bundle.js',
	config: '/ultraviolet/uv.config.js',
	sw: '/ultraviolet/uv.sw.js',
};
