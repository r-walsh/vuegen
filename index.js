#!/usr/bin/env node

const fs = require( "fs" );
const inquirer = require( "inquirer" );

const buildComponent = require( "./src/buildComponent" );
const questions = require( "./src/questions" );

function buildWithOptions( options ) {

	const template = buildComponent( options );
	const path = `${ options.outDir || "./" }${ options.componentName }.vue`;

	try {
		fs.writeFile( path, template );
		console.log( `Created ${ path }` );
	} catch ( err ) {
		console.error( `There was an error creating the file: ${ err }` );
	}
}

try {
	const options = require( `${ process.cwd() }/.vuegen.js` );

	if ( process.argv[ 2 ] ) {
		options.componentName = process.argv[ 2 ];
		buildWithOptions( options );
	} else {
		inquirer
			.prompt( [ questions.componentName ] )
			.then( answers => {
				options.componentName = answers.componentName;
				buildWithOptions( options );
			} );
	}

} catch ( err ) {
	console.log( ".vuegen.js not found, prompting." );
	inquirer
		.prompt( Object.keys( questions ).map( q => questions[ q ] ) )
		.then( answers => {
			const path = process.argv[ 2 ] ? `${ process.argv[ 2 ] }${ answers.componentName }.vue` : `${ answers.componentName }.vue`;
			try {
				fs.writeFile( path, buildComponent( answers ) );
				console.log( `Created ${ path }` );
			} catch ( err ) {
				console.error( `There was an error creating the file: ${ err }` );
			}
		} );
}
