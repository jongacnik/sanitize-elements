# sanitize-elements

Makes sure you've got dom elements, if dom elements are what you want

Accepts a dom node, a node list, a jQuery object, an array of dom nodes, etc. Will return dom elements as a plain array. Single dom elements can be wrapped in an array if optional wrap param is passed as true. If dom element(s) aren't passed in, returns false.

## Install

	npm install sanitize-elements

## Usage

sanitize-elements is meant to be consumed in a [CommonJS](http://www.commonjs.org/), [Browserify](http://browserify.org/) environment (though you can also use a pre-bundled version, more below):
	
	var sanitizeElements = require('sanitize-elements');

	sanitizeElements(elements, wrap)
	// elements: elements to sanitize
	// wrap: wrap single dom elements in array, default false

Some simple (abstracted) examples:

	sanitizeElements(document.querySelector('.element'))
	// returns $element

	sanitizeElements(document.querySelector('.element'), true)
	// returns [$element]

	sanitizeElements(document.querySelectorAll('.elements'))
	// returns [$element, $element, ...]

	sanitizeElements($('.elements'))
	// returns [$element, $element, ...]

	sanitizeElements(window)
	// returns false

	sanitizeElements('iWannaBeAnElement')
	// returns false

In the context of a function:

	var something = function($elements) {
		
		if ($elements = sanitizeElements($elements)) {
			// do something
		} else {
			console.warn('Pass in some elements please!')
			return
		}

	}

## Bundled Version

If you don't want to mess with a build process you can also include the pre-bundled version found in `dist/sanitize-elements.bundled.js` in your project which exposes `sanitizeElements()` globally.

## Todo

- Tests