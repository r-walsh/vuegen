const test = require( "ava" );
const buildComponent = require( "../src/buildComponent" );

test( "buildComponent leaves off the 'lang' attribute from <template> when passed 'HTML'", t => {
	const answers = {
		  cssLang: "css"
		, name: "Test"
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
	t.is( buildComponent( answers ), expected );
} );

test( "buildComponent supports adding any given template language", t => {
	const answers = {
		  cssLang: "css"
		, name: "Test"
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

	t.is( buildComponent( answers ), expected );
} );

test( "buildComponent takes in a 'name' and assigns that to the component's JS", t => {
	const answers = {
		  cssLang: "css"
		, name: "ComponentName"
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

	t.is( buildComponent( answers ), expected );
} );

test( "buildComponent leaves off 'lang' attribute on styles when passed 'css'", t => {
	const answers = {
		  cssLang: "css"
		, name: "Test"
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

	t.is( buildComponent( answers ), expected );
} );

test( "buildComponent allows for a 'lang' to be added", t => {
	const answers = {
		  cssLang: "stylus"
		, name: "Test"
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

	t.is( buildComponent( answers ), expected );
} );

test( "buildComponent allows for styles to be scoped", t => {
	const answers = {
		  cssLang: "css"
		, name: "Test"
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

	t.is( buildComponent( answers ), expected );
} );

test( "buildComponent allows for styles to have a set lang and be scoped", t => {
	const answers = {
		  cssLang: "stylus"
		, name: "Test"
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

	t.is( buildComponent( answers ), expected );
} );

test( "additional test, all args", t => {
	const answers = {
		  cssLang: "stylus"
		, name: "MyComponent"
		, scopedCSS: true
		, templateLang: "pug"
	};
	const expected = `<template lang="pug">

</template>

<script>
export default {
	name: "MyComponent"
}
</script>

<style lang="stylus" scoped>

</style>
`;

	t.is( buildComponent( answers ), expected );
} );
