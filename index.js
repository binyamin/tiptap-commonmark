import {Extension} from '@tiptap/core';
import Heading, {HeadingOptions} from '@tiptap/extension-heading';
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Paragraph from '@tiptap/extension-paragraph';
import CodeBlock, {CodeBlockOptions} from '@tiptap/extension-code-block';
import CodeBlockLowlight, {CodeBlockLowlightOptions} from '@tiptap/extension-code-block-lowlight';
import Blockquote from '@tiptap/extension-blockquote';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Code from '@tiptap/extension-code';
import Italic from '@tiptap/extension-italic'
import Bold from '@tiptap/extension-bold'
import Link, {LinkOptions} from '@tiptap/extension-link';
import Image, {ImageOptions} from  "@tiptap/extension-image";
import HardBreak, {HardBreakOptions} from '@tiptap/extension-hard-break';
import Text from '@tiptap/extension-text';

/**
 * @typedef CommonMarkOptions
 * @property {boolean} [useLowlight=false]
 * @property {HeadingOptions} heading
 * @property {CodeBlockOptions | CodeBlockLowlightOptions} codeBlock
 * @property {LinkOptions} link
 * @property {ImageOptions} image
 * @property {HardBreakOptions} hardBreak
 */


/*
    The following CommonMark syntax-rules are definitely not supported:
      - setext headings
      - idented code-blocks
      - link references
      - ignoring blank lines
    Others may be partially or even fully supported.
*/

/**
 * CommonMark for Tiptap
 *
 * Note that editor commands have not been altered. They may not be compatible with CommonMark syntax.
 * @type {Extension<CommonMarkOptions>}
 *
 * @link See the CommonMark spec <https://spec.commonmark.org/0.30/#blocks-and-inlines>
 */
const CommonMark = Extension.create({
    name: "CommonMarkKit",

    addExtensions() {
        let extensions = [];

        /* Leaf Blocks */
        extensions.push(HorizontalRule)
        extensions.push(Heading.configure(this.options.heading))
        extensions.push(Paragraph)
        extensions.push((this.options.useLowlight ? CodeBlockLowlight : CodeBlock).configure(this.options.codeBlock))

        /* Container Blocks */
        extensions.push(Blockquote)
        extensions.push(BulletList, OrderedList, ListItem)

        /* Inlines */
        extensions.push(Code)
        extensions.push(Italic, Bold)
        extensions.push(Link.configure(this.options.link))
        extensions.push(Image.configure(this.options.image))
        extensions.push(Text)
        extensions.push(HardBreak.configure(this.options.hardBreak))

        return extensions;
    }
})


export default CommonMark;
