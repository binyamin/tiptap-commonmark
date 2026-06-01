import { Extension } from '@tiptap/core';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import Code from '@tiptap/extension-code';
import CodeBlock, { type CodeBlockOptions } from '@tiptap/extension-code-block';
import CodeBlockLowlight, {
	type CodeBlockLowlightOptions,
} from '@tiptap/extension-code-block-lowlight';
import HardBreak, { type HardBreakOptions } from '@tiptap/extension-hard-break';
import Heading, { type HeadingOptions } from '@tiptap/extension-heading';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Image, { type ImageOptions } from '@tiptap/extension-image';
import Italic from '@tiptap/extension-italic';
import Link, { type LinkOptions } from '@tiptap/extension-link';
import { BulletList, ListItem, OrderedList } from '@tiptap/extension-list';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

export interface CommonMarkOptions {
	/**
	 * @default false
	 */
	useLowlight?: boolean;
	heading: HeadingOptions;
	codeBlock: CodeBlockOptions | CodeBlockLowlightOptions;
	link: LinkOptions;
	image: ImageOptions;
	hardBreak: HardBreakOptions;
}

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
 *
 * @link See the CommonMark spec <https://spec.commonmark.org/0.31.2/#blocks-and-inlines>
 */
const CommonMark: Extension<CommonMarkOptions> = Extension.create({
	name: 'CommonMarkKit',

	addExtensions() {
		let extensions = [];

		/* Leaf Blocks */
		extensions.push(HorizontalRule);
		extensions.push(Heading.configure(this.options.heading));
		extensions.push(Paragraph);
		extensions.push(
			(this.options.useLowlight ? CodeBlockLowlight : CodeBlock).configure(
				this.options.codeBlock,
			),
		);

		/* Container Blocks */
		extensions.push(Blockquote);
		extensions.push(BulletList, OrderedList, ListItem);

		/* Inlines */
		extensions.push(Code);
		extensions.push(Italic, Bold);
		extensions.push(Link.configure(this.options.link));
		extensions.push(Image.configure(this.options.image));
		extensions.push(Text);
		extensions.push(HardBreak.configure(this.options.hardBreak));

		return extensions;
	},
});

export default CommonMark;
