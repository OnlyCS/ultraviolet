"use strict";

const swpath = "/ultraviolet/sw.js";

async function register_uv() {
	if (!navigator.serviceWorker) {
		if (location.protocol != "https:" && !location.hostname.startsWith("localhost")) {
			throw new Error("Service workers only work over HTTPS");
		}

		throw new Error("Your browser does not support service workers");
	}

	await navigator.serviceWorker.register(swpath, { scope: __uv$config.prefix });
}

async function start_uv(url) {
	try {
		await register_uv();
	} catch (err) {
		alert(err.message);
		throw err;
	}

	location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
}