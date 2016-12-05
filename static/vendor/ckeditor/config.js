/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	config.language = 'en';
	config.uiColor = '#FFFFFF';
	config.skin = 'minimalist';
	config.enterMode = CKEDITOR.ENTER_BR;
	config.height = 360;
	config.forcePasteAsPlainText = true;
	config.extraPlugins = 'youtube';
	config.allowedContent = true;

	config.toolbar = [
		{ name: 'basicstyles', groups: [], items: [ 'Bold', 'Italic', 'Underline', 'Strike', '-', 'Styles' ] },
		{ name: 'paragraph', groups: [], items: [ 'NumberedList', 'BulletedList', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
		{ name: 'links', items: [ 'Link', 'Unlink' ] },
		{ name: 'insert', items: [ 'Image', 'Youtube', 'HorizontalRule' ] },
		{ name: 'tools', items: [ 'Maximize' ] }
	];
};