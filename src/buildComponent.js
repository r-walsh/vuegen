function buildComponent( {
	  componentName
	, cssLang = "css"
	, indentCount = 2
	, indentType = "tab"
	, quoteType = "double"
	, scopedCSS = true
	, templateLang = "HTML" } ) {

	const quote = quoteType === "double" ? "\"" : "'";

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
