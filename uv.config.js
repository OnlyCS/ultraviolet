/*global Ultraviolet*/
const ultraviolet_config = {
	prefix: '/ultraviolet/service/',
	bare: 'https://uvbare.onlycs.net/',
	encodeUrl: Ultraviolet.codec.xor.encode,
	decodeUrl: Ultraviolet.codec.xor.decode,
	handler: '/ultraviolet/uv.handler.js',
	client: '/ultraviolet/uv.client.js',
	bundle: '/ultraviolet/uv.bundle.js',
	config: '/ultraviolet/uv.config.js',
	sw: '/ultraviolet/uv.sw.js',
}

self.__uv$config = ultraviolet_config;
