"use strict";

const swpath = "/ultraviolet/sw.js";

function register_uv() {
	if (!navigator.serviceWorker) {
		if (location.protocol != "https:" && !location.hostname.startsWith("localhost")) {
			throw new Error("Service workers only work over HTTPS");
		}

		throw new Error("Your browser does not support service workers");
	}

	return navigator.serviceWorker.register(swpath, { scope: __uv$config.prefix });
}

function start_uv(url) {
	location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
}