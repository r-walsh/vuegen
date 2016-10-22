function buildComponent( { componentName, cssLang, indentCount, indentType, quoteType, scopedCSS, templateLang } ) {
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
