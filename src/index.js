const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const { createElement: el } = wp.element;

registerBlockType('obi-custom-block/obi-block', {
    title: 'Obi Custom Block',
    icon: 'smiley',
    category: 'common',
    attributes: {
        content: {
            type: 'string',
            source: 'children',
            selector: 'p',
        },
    },
    edit: function(props) {
        return el(RichText, {
            tagName: 'p',
            className: props.className,
            onChange: function(content) {
                props.setAttributes({content: content});
            },
            value: props.attributes.content,
        });
    },
    save: function(props) {
        return el(RichText.Content, {
            tagName: 'p',
            value: props.attributes.content,
        });
    },
});
