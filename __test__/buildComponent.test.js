const test = require( "ava" );
const buildComponent = require( "../src/buildComponent" );

test( "buildComponent provides default options", t => {
	const expected = `<template>

</template>

<script>
export default {
	name: "Test"
}
</script>

<style scoped>

</style>
`;
	t.is( buildComponent( { componentName: "Test" } ), expected );
} );

test( "buildComponent leaves off the 'lang' attribute from <template> when passed 'HTML'", t => {
	const options = {
		  componentName: "Test"
		, cssLang: "css"
		, scopedCSS: false
		, templateLang: "HTML"
	};

	const expected = `<template>

</template>

<script>
export default {
	name: "Test"
}
</script>

<style>

</style>
`;
	t.is( buildComponent( options ), expected );
} );

test( "buildComponent supports adding any given template language", t => {
	const options = {
		  componentName: "Test"
		, cssLang: "css"
		, scopedCSS: false
		, templateLang: "pug"
	};
	const expected = `<template lang="pug">

</template>

<script>
export default {
	name: "Test"
}
</script>

<style>

</style>
`;

	t.is( buildComponent( options ), expected );
} );

test( "buildComponent takes in a 'name' and assigns that to the component's JS", t => {
	const options = {
		  componentName: "ComponentName"
		, cssLang: "css"
		, scopedCSS: false
		, templateLang: "HTML"
	};
	const expected = `<template>

</template>

<script>
export default {
	name: "ComponentName"
}
</script>

<style>

</style>
`;

	t.is( buildComponent( options ), expected );
} );

test( "buildComponent leaves off 'lang' attribute on styles when passed 'css'", t => {
	const options = {
		  componentName: "Test"
		, cssLang: "css"
		, scopedCSS: false
		, templateLang: "HTML"
	};
	const expected = `<template>

</template>

<script>
export default {
	name: "Test"
}
</script>

<style>

</style>
`;

	t.is( buildComponent( options ), expected );
} );

test( "buildComponent allows for a 'lang' to be added", t => {
	const options = {
		  componentName: "Test"
		, cssLang: "stylus"
		, scopedCSS: false
		, templateLang: "HTML"
	};
	const expected = `<template>

</template>

<script>
export default {
	name: "Test"
}
</script>

<style lang="stylus">

</style>
`;

	t.is( buildComponent( options ), expected );
} );

test( "buildComponent allows for styles to be scoped", t => {
	const options = {
		  componentName: "Test"
		, cssLang: "css"
		, scopedCSS: true
		, templateLang: "HTML"
	};
	const expected = `<template>

</template>

<script>
export default {
	name: "Test"
}
</script>

<style scoped>

</style>
`;

	t.is( buildComponent( options ), expected );
} );

test( "buildComponent allows for styles to have a set lang and be scoped", t => {
	const options = {
		  componentName: "Test"
		, cssLang: "stylus"
		, scopedCSS: true
		, templateLang: "HTML"
	};
	const expected = `<template>

</template>

<script>
export default {
	name: "Test"
}
</script>

<style lang="stylus" scoped>

</style>
`;

	t.is( buildComponent( options ), expected );
} );

test( "buildComponent allows for single quotes", t => {
	const options = {
		  componentName: "Test"
		, cssLang: "stylus"
		, quoteType: "single"
		, scopedCSS: true
		, templateLang: "HTML"
	};
	const expected = `<template>

</template>

<script>
export default {
	name: 'Test'
}
</script>

<style lang="stylus" scoped>

</style>
`;

	t.is( buildComponent( options ), expected );
} );

test( "buildComponent allows for spaces", t => {
	const options = {
		  componentName: "Test"
		, cssLang: "stylus"
		, indentType: "space"
		, scopedCSS: true
		, templateLang: "HTML"
	};
	const expected = `<template>

</template>

<script>
export default {
  name: "Test"
}
</script>

<style lang="stylus" scoped>

</style>
`;

	t.is( buildComponent( options ), expected );
} );

test( "buildComponent allows setting number of spaces", t => {
	const options = {
		  componentName: "Test"
		, cssLang: "stylus"
		, indentCount: 4
		, indentType: "space"
		, scopedCSS: true
		, templateLang: "HTML"
	};
	const expected = `<template>

</template>

<script>
export default {
    name: "Test"
}
</script>

<style lang="stylus" scoped>

</style>
`;

	t.is( buildComponent( options ), expected );
} );
