#!/usr/bin/env node

const fs = require( "fs" );
const inquirer = require( "inquirer" );

const buildComponent = require( "./buildComponent" );

const questions = [
	{
		  type: "input"
		, name: "name"
		, message: "Component name?"
		, validate( value ) {
			return value ? true : "Please enter a component name";
		}
	}
	, {
		  type: "list"
		, name: "cssLang"
		, message: "CSS language?"
		, choices: [ "css", "stylus", "scss", "less" ]
	}
	, {
		  type: "input"
		, name: "templateLang"
		, message: "Template language?"
		, default: "HTML"
	}
	, {
		  type: "confirm"
		, name: "scopedCSS"
		, message: "Should styles be component scoped?"
		, default: true
	}
];

inquirer.prompt( questions ).then( answers => fs.writeFile( `${ answers.name }.vue`, buildComponent( answers ) ) );


