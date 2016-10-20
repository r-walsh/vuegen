function buildComponent( { name, cssLang, templateLang, scopedCSS } ) {
	return `<template${ templateLang === "HTML" ? "" : ` lang="${ templateLang }"` }>

</template>

<script>
export default {
	name: "${ name }"
}
</script>

<style${ cssLang === "css" ? "" : ` lang="${ cssLang }"` }${ scopedCSS ? " scoped" : "" }>

</style>
`;
}

module.exports = buildComponent;
