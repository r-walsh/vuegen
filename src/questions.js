module.exports = {
	componentName: {
		  message: "Component name?"
		, name: "componentName"
		, type: "input"
		, validate( value ) {
			return value ? true : "Please enter a component name";
		}
	}

	, cssLang: {
		  choices: [ "css", "stylus", "scss", "less" ]
		, message: "CSS language?"
		, name: "cssLang"
		, type: "list"
	}

	, scopedCSS: {
		  default: true
		, message: "Should styles be component scoped?"
		, name: "scopedCSS"
		, type: "confirm"
	}

	, templateLang: {
		  default: "HTML"
		, message: "Template language?"
		, name: "templateLang"
		, type: "input"
	}
};
