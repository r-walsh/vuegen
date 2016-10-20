### vuegen - Simple CLI for building `.vue` components.

Usage: Just `npm install vuegen -g`, then run `vuegen` and follow the prompts.

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
}
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
}
</script>

<style lang="stylus" scoped>

</style>
```
