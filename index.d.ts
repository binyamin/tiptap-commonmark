export default CommonMark;
export type CommonMarkOptions = {
	useLowlight?: boolean;
	heading: HeadingOptions;
	codeBlock: CodeBlockOptions | CodeBlockLowlightOptions;
	link: LinkOptions;
	image: ImageOptions;
	hardBreak: HardBreakOptions;
};
/**
 * @typedef CommonMarkOptions
 * @property {boolean} [useLowlight=false]
 * @property {HeadingOptions} heading
 * @property {CodeBlockOptions | CodeBlockLowlightOptions} codeBlock
 * @property {LinkOptions} link
 * @property {ImageOptions} image
 * @property {HardBreakOptions} hardBreak
 */
/**
 * CommonMark for Tiptap
 *
 * Note that editor commands have not been altered. They may not be compatible with CommonMark syntax.
 * @type {Extension<CommonMarkOptions>}
 *
 * @link See the CommonMark spec <https://spec.commonmark.org/0.30/#blocks-and-inlines>
 */
declare const CommonMark: Extension<CommonMarkOptions>;
import { HeadingOptions } from "@tiptap/extension-heading/dist/packages/extension-heading/src/heading";
import { CodeBlockOptions } from "@tiptap/extension-code-block/dist/packages/extension-code-block/src/code-block";
import { CodeBlockLowlightOptions } from "@tiptap/extension-code-block-lowlight/dist/packages/extension-code-block-lowlight/src/code-block-lowlight";
import { LinkOptions } from "@tiptap/extension-link/dist/packages/extension-link/src/link";
import { ImageOptions } from "@tiptap/extension-image/dist/packages/extension-image/src/image";
import { HardBreakOptions } from "@tiptap/extension-hard-break/dist/packages/extension-hard-break/src/hard-break";
import { Extension } from "@tiptap/core/dist/packages/core/src/Extension";
