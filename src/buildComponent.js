function buildComponent( {
	  componentName
	, cssLang = "css"
	, indentCount = 2
	, indentType = "tab"
	, quoteType = "double"
	, scopedCSS = true
	, templateLang = "HTML" } ) {

	let quote;
	switch ( quoteType ) {
		case "double":
			quote = "\"";
			break;
		case "single":
			quote = "'";
			break;
		case "template":
			quote = "`";
			break;
		default:
			quote = "\"";
	}

	return `<template${ templateLang === "HTML" ? "" : ` lang="${ templateLang }"` }>

</template>

<script>
export default {
${ indentType === "tab" ? "\t" : " ".repeat( indentCount ) }name: ${ quote + componentName + quote }
}
</script>

<style${ cssLang === "css" ? "" : ` lang="${ cssLang }"` }${ scopedCSS ? " scoped" : "" }>

</style>
`;
}

module.exports = buildComponent;
