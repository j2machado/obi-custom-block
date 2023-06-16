/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText;
var el = wp.element.createElement;
registerBlockType('obi-custom-block/obi-block', {
  title: 'Obi Custom Block',
  icon: 'smiley',
  category: 'common',
  attributes: {
    content: {
      type: 'string',
      source: 'children',
      selector: 'p'
    }
  },
  edit: function edit(props) {
    return el(RichText, {
      tagName: 'p',
      className: props.className,
      onChange: function onChange(content) {
        props.setAttributes({
          content: content
        });
      },
      value: props.attributes.content
    });
  },
  save: function save(props) {
    return el(RichText.Content, {
      tagName: 'p',
      value: props.attributes.content
    });
  }
});
/******/ })()
;
//# sourceMappingURL=index.js.map