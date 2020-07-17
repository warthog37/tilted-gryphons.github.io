if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
	console.log('Dark mode is not supported');
} else {
	console.log('🎉 Dark mode is supported');
	console.log('Mode: ' + window.matchMedia('(prefers-color-scheme: dark)').media);
	if (window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
		console.log('Dark mode is preferred');
	}
}

//var rulesEndIndex = document.styleSheets[0].cssRules.length;

//var rule = ".masthead {background-color: #ABC;}";
//document.styleSheets[0].insertRule(rule, rulesEndIndex);
