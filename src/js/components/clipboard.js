(function copy(win, doc) {
	const clipboard = new ClipboardJS('.btn-copy');
	clipboard.on('success', function (e) {
		console.info('Action:', e.action);
		alert('Código copiado', e.text);
		console.info('Trigger:', e.trigger);
		e.clearSelection();
	});

	clipboard.on('error', function (e) {
		console.error('Action:', e.action);
		console.error('Trigger:', e.trigger);
	});
})(window, document);
