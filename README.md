### vuegen - Easy CLI for building `.vue` components.

#### Usage
**Simple**: 

* `npm i vuegen -g`
* `vuegen` or `vuegen ./path/to/outdir/`
* Follow prompts.

**Advanced**:

vuegen supports an options file (`.vuegen.js`) allowing for more stylistic output control. With an options file you can simply run `vuegen __COMPONENT_NAME__` and a component will be generated according to your preferences.

`cssLang`
The language in which you are writing styles in. Default `"css"`.

`indentCount`
The number of spaces to indent with. Does not apply to tabs. Default `2`

`indentType`
Desired indentation type. Options are `"space"` and `"tab"`. Default `"tab"`.

`outDir`
Destination directory for created component. Must end in a `"/"`. Default `"./"`.

`quoteType`
Desired quote type. Options are `"single"`, `"double"`, and `"template"`. Default `"double"`.

`scopedCSS`
Whether or not the `scoped` attribute should be added to style tag. Default `true`.

`semiColons`
Whether or not semi-colons should be included. Default `true`.

`templateLang`
The language in which you are writing templates in. Default `"HTML"`.

```
// .vuegen.js
module.exports = {
      cssLang: "css"
    , indentCount: 2
    , indentType: "tab"
    , outDir: "./"
    , quoteType: "double"
    , scopedCSS: true
    , semiColons: true
    , templateLang: "HTML"
}
```

___

Example outputs:
```
/*
? Component name? Login
? CSS language? css
? Template language? HTML
? Should styles be component scoped? Yes
*/

<template>

</template>

<script>
export default {
	name: "Login"
};
</script>

<style scoped>

</style>
```

```
/*
? Component name? Header
? CSS language? stylus
? Template language? pug
? Should styles be component scoped? Yes
*/

<template lang="pug">

</template>

<script>
export default {
	name: "Header"
};
</script>

<style lang="stylus" scoped>

</style>
```

```
/*
{
	  cssLang: "scss"
	, indentCount: 2
	, indentType: "space"
	, quoteType: "single"
	, scopedCSS: true
	, semiColons: false
};

*/

<template>

</template>

<script>
export default {
  name: 'Test'
}
</script>

<style lang="scss" scoped>

</style>

```