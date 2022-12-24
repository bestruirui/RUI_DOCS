import { PluginSimple, PluginWithOptions, Options } from 'markdown-it';
import Renderer, { RenderRule } from 'markdown-it/lib/renderer.js';
import { RequiredLocaleConfig } from 'vuepress-shared';
import { MarkdownEnv } from '@vuepress/markdown';
import { KatexOptions as KatexOptions$1 } from 'katex';
import { TeX } from 'mathjax-full/js/input/tex.js';
export { TeX } from 'mathjax-full/js/input/tex.js';
import { CHTML } from 'mathjax-full/js/output/chtml.js';
export { CHTML } from 'mathjax-full/js/output/chtml.js';
import { SVG } from 'mathjax-full/js/output/svg.js';
export { SVG } from 'mathjax-full/js/output/svg.js';
import { LiteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { LiteElement } from 'mathjax-full/js/adaptors/lite/Element.js';
import { MmlNode } from 'mathjax-full/js/core/MmlTree/MmlNode.js';
import TexError from 'mathjax-full/js/input/tex/TexError.js';
import { RuleCore } from 'markdown-it/lib/parser_core.js';
import { CompilerOptions } from 'typescript';
import Token from 'markdown-it/lib/token.js';
import { PageFrontmatter } from '@vuepress/shared';
import { SFCOptions } from '@vue/repl';
import { LocaleConfig, PluginFunction } from '@vuepress/core';
export { mathjax as MathJax } from 'mathjax-full/js/mathjax.js';

declare const align: PluginSimple;

interface AttrsOptions {
    /**
     * left delimiter
     *
     * 左分隔符
     *
     * @default '{'
     */
    left?: string;
    /**
     * right delimiter
     *
     * 右分隔符
     *
     * @default '}'
     */
    right?: string;
    /**
     * allowed attributes
     *
     * @description An empty list means allowing all attribute
     *
     * 允许的属性
     *
     * @description 设置空数组意味着允许所有属性
     *
     * @default []
     */
    allowed?: (string | RegExp)[];
}

interface FigureOptions {
    /**
     * @default true
     */
    focusable?: boolean;
}

interface MarkdownHintLocaleData {
    /**
     * Default Title text for info block
     *
     * 信息块的默认标题
     */
    info: string;
    /**
     * Default Title text for note block
     *
     * 注释块的默认标题
     */
    note: string;
    /**
     * Default Title text for tip block
     *
     * 提示块的默认标题
     */
    tip: string;
    /**
     * Default Title text for warning block
     *
     * 注意块的默认标题
     */
    warning: string;
    /**
     * Default Title text for danger block
     *
     * 警告块的默认标题
     */
    danger: string;
    /**
     * Default Title text for details block
     *
     * 详情块的默认标题
     */
    details: string;
}

interface ImageMarkOptions {
    /**
     * lightmode only ids
     *
     * 日间模式 ID
     */
    light?: string[];
    /**
     * darkmode only ids
     *
     * 夜间模式 ID
     */
    dark?: string[];
}

interface IncludeOptions {
    /**
     * handle include filePath
     *
     * 处理 include 文件路径
     *
     * @default (path) => path
     */
    getPath?: (path: string) => string;
    /**
     * Whether deep include files in included Markdown files
     *
     * 是否深度导入包含的 Markdown 文件
     *
     * @default false
     */
    deep?: boolean;
    /**
     * Whether resolve the image related path in the included Markdown file
     *
     * 是否解析包含的 Markdown 文件的里的相对图像路径
     *
     * @default true
     */
    resolveImagePath?: boolean;
    /**
     * Whether resolve the related file link path in the included Markdown file
     *
     * 是否解析包含的 Markdown 文件的里的文件相对路径
     *
     * @default true
     */
    resolveLinkPath?: boolean;
}

interface KatexOptions extends KatexOptions$1 {
    /**
     * Whether enable mhchem extension
     *
     * 是否启用 mhchem 扩展
     *
     * @default false
     */
    mhchem?: boolean;
}

type MarkdownEnhanceLocaleData = MarkdownHintLocaleData;
type MarkdownEnhanceLocaleConfig = RequiredLocaleConfig<MarkdownEnhanceLocaleData>;

interface MathJaxTexInputOptions {
    /**
     * extensions to use
     *
     * @default [
     *   'base',
     *   'action',
     *   'ams',
     *   'amscd',
     *   'bbox',
     *   'boldsymbol',
     *   'braket',
     *   'bussproofs',
     *   'cancel',
     *   'cases',
     *   'centernot',
     *   'color',
     *   'colortbl',
     *   'empheq',
     *   'enclose',
     *   'extpfeil',
     *   'gensymb',
     *   'html',
     *   'mathtools',
     *   'mhchem',
     *   'newcommand',
     *   'noerrors',
     *   'noundefined',
     *   'upgreek',
     *   'unicode',
     *   'verb',
     *   'configmacros',
     *   'tagformat',
     *   'textcomp',
     *   'textmacros'
     *  ]
     */
    packages?: string[];
    /**
     * pattern for recognizing numbers
     *
     * @default /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/
     */
    digits?: RegExp;
    tags?: "ams" | "all" | "none";
    /**
     * side for `\tag` macros
     */
    tagSide?: "left" | "right";
    /**
     * amount to indent tags
     *
     * @default "0.8em"
     */
    tagIndent: "0.8em";
    /**
     * use label name rather than tag for ids
     *
     * @default true;
     */
    useLabelIds?: boolean;
    /**
     *  maximum number of macro substitutions per expression
     *
     * @default 1000
     */
    maxMacros?: number;
    /**
     * maximum size for the internal TeX string (in bytes)
     *
     * @default 5120
     */
    maxBuffer?: number;
    formatError?: (jax: TeX<unknown, unknown, unknown>, error: typeof TexError) => MmlNode;
}
interface MathjaxCommonOutputOptions {
    /**
     * Global scaling factor for all expressions
     *
     * @default 1
     */
    scale?: number;
    /**
     * smallest scaling factor to use
     *
     * @default 0.5
     */
    minScale?: number;
    /**
     * make mtext elements use surrounding font
     *
     * @default false
     */
    mtextInheritFont?: boolean;
    /**
     * make merror text use surrounding font
     *
     * @default true
     */
    merrorInheritFont?: boolean;
    /**
     * font to use for mtext, if not inheriting (empty means use MathJax fonts)
     *
     * @default ""
     */
    mtextFont?: string;
    /**
     * font to use for merror, if not inheriting (empty means use MathJax fonts)
     *
     * @default "serif"
     */
    merrorFont?: string;
    /**
     * font to use for character that aren’t in MathJax's fonts
     *
     * @default "serif"
     */
    unknownFamily?: string;
    /**
     * @default "center"
     */
    displayAlign?: "left" | "center" | "right";
    /**
     * @default 0
     */
    displayIndent?: string;
    /**
     * - `true` for MathML spacing rules
     * - `false` for TeX rules
     *
     * @default false
     */
    mathmlSpacing?: boolean;
    /**
     * RFDa and other attributes NOT to copy to the output
     */
    skipAttributes?: Record<string, boolean>;
    /**
     * default size of ex in em units
     *
     * @default 0.5
     */
    exFactor?: number;
}
interface MathjaxCommonHTMLOutputOptions extends MathjaxCommonOutputOptions {
    /**
     * Whether match ex-height of surrounding font
     *
     * @default true
     */
    matchFontHeight?: boolean;
    /**
     * The URL where the fonts are found
     *
     * @default local form mathjax-full
     */
    fontURL?: string;
    /**
     * Whether only produce CSS that is used in the processed equations
     *
     * @default true
     */
    adaptiveCSS?: boolean;
}
interface MathjaxSVGOutputOptions extends MathjaxCommonOutputOptions {
    /**
     * @default "none"
     */
    fontCache?: "local" | "global" | "none";
    /**
     * ID to use for local font cache (for single equation processing)
     */
    localID?: string | null;
    /**
     * insert <title> tags with speech content
     *
     * @default true
     */
    internalSpeechTitles?: boolean;
    /**
     * initial id number to use for aria-labeledby titles
     */
    titleID?: number;
}
interface MathJaxOptions {
    /**
     * Output syntax
     *
     * @default 'svg'
     */
    output?: "chtml" | "svg";
    /**
     * Enable A11y
     *
     * @default true
     */
    a11y?: boolean;
    /**
     * Tex input options
     */
    tex?: MathJaxTexInputOptions;
    /**
     * Common HTML output options
     */
    chtml?: MathjaxCommonHTMLOutputOptions;
    /**
     * SVG output options
     */
    svg?: MathjaxSVGOutputOptions;
}

interface PlaygroundCodeConfig {
    /**
     * Code block extension
     *
     * @description It's based on filename, not code fence language
     *
     * 代码块扩展名
     *
     * @description 它基于文件名，而不是代码块语言
     */
    ext: string;
    /**
     * Code block content
     *
     * 代码块内容
     */
    content: string;
}
interface PlaygroundData {
    /**
     * Title of Playground
     *
     * 交互演示标题
     */
    title?: string;
    /**
     * Import map file name
     *
     * Import map 文件名
     *
     * @default 'import-map.json'
     */
    importMap?: string;
    /**
     * Playground files info
     *
     * 交互演示文件信息
     */
    files: Record<
    /**
     * File name
     *
     * 文件名
     */
    string, 
    /**
     * File detail
     *
     * 文件详情
     */
    PlaygroundCodeConfig>;
    /**
     * Playground settings
     *
     * @description It's parsed result of json content after setting directive
     *
     * 交互演示设置
     *
     * @description 它是设置指令后的 json 内容的解析结果
     */
    settings: Record<string, unknown>;
    /**
     * hash key based on playground content
     *
     * 根据交互演示内容生成的 hash key
     */
    key: string;
}
interface PlaygroundOptions {
    /**
     * Playground container name
     *
     * 交互演示容器名
     */
    name: string;
    /**
     * Playground component name
     *
     * 交互演示组件名称
     *
     * @default 'Playground'
     */
    component?: string;
    /**
     * Props getter
     *
     * 属性获取器
     */
    propsGetter: (data: PlaygroundData) => Record<string, string>;
}
interface TSPresetPlaygroundOptions extends CompilerOptions {
    /**
     * external playground service url
     *
     * 交互演示外部地址
     *
     * @default "https://www.typescriptlang.org/play"
     */
    service?: string;
}
interface VuePresetPlaygroundOptions {
    /**
     * external playground service url
     *
     * 交互演示外部地址
     *
     * @default "https://sfc.vuejs.org/"
     */
    service?: string;
    /**
     * Whether to use dev version
     *
     * 是否启用开发版本
     *
     * @default false
     */
    dev?: boolean;
    /**
     * Whether to enable SSR
     *
     * 是否启用 SSR
     *
     * @default false
     */
    ssr?: boolean;
}

/**
 * @description This is added just because reveal.js do not have official type declaration files
 */
interface RevealOptions {
    /**
     * The "normal" size of the presentation, aspect ratio will be preserved when the presentation is scaled to fit different resolutions.
     *
     * Can be specified using percentage units.
     */
    width: number;
    /**
     * The "normal" size of the presentation, aspect ratio will be preserved when the presentation is scaled to fit different resolutions.
     *
     * Can be specified using percentage units.
     */
    height: number;
    /** Factor of the display size that should remain empty around the content */
    margin: number;
    /** Bounds for smallest/largest possible scale to apply to content */
    minScale: number;
    maxScale: number;
    /** Display presentation control arrows */
    controls: boolean;
    /** Help the user learn the controls by providing hints, for example by bouncing the down arrow when they first encounter a vertical slide */
    controlsTutorial: boolean;
    /** Determines where controls appear */
    controlsLayout: "bottom-right" | "edges";
    /** Visibility rule for backwards navigation arrows */
    controlsBackArrows: "faded" | "hidden" | "visible";
    /** Display a presentation progress bar */
    progress: boolean;
    /**
     * Display the page number of the current slide
     * - true:    Show slide number
     * - false:   Hide slide number
     *
     * Can optionally be set as a string that specifies the number formatting:
     * - "h.v":   Horizontal . vertical slide number (default)
     * - "h/v":   Horizontal / vertical slide number
     * - "c":   Flattened slide number
     * - "c/t":   Flattened slide number / total slides
     *
     * Alternatively, you can provide a function that returns the slide
     * number for the current slide. The function should take in a slide
     * object and return an array with one string [slideNumber] or
     * three strings [n1,delimiter,n2]. See #formatSlideNumber().
     */
    slideNumber: boolean | "h.v" | "h/v" | "c" | "c/t" | ((slideObject: any) => [string] | [string, string, string]);
    /**
     * Can be used to limit the contexts in which the slide number appears
     *
     * - "all":      Always show the slide number
     * - "print":    Only when printing to PDF
     * - "speaker":  Only in the speaker view
     */
    showSlideNumber: "all" | "print" | "speaker";
    /**
     * Use 1 based indexing for # links to match slide number (default is zero based)
     */
    hashOneBasedIndex: boolean;
    /**
     * Add the current slide number to the URL hash
     * so that reloading the page/copying the URL will return you to the same slide
     */
    hash: boolean;
    /**
     * Flags if we should monitor the hash and change slides accordingly
     */
    respondToHashChanges: boolean;
    /**
     * Push each slide change to the browser history.  Implies `hash: true`
     */
    history: boolean;
    /** Enable keyboard shortcuts for navigation */
    keyboard: boolean;
    /**
     * Optional function that blocks keyboard events when retuning false
     *
     * If you set this to 'focused', we will only capture keyboard events
     * for embedded decks when they are in focus
     */
    keyboardCondition: null | "focused";
    /**
     * Disables the default reveal.js slide layout (scaling and centering)
     * so that you can use custom CSS layout
     */
    disableLayout: boolean;
    /**
     * Enable the slide overview mode
     */
    overview: boolean;
    /**
     * Vertical centering of slides
     */
    center: boolean;
    /**
     * Enables touch navigation on devices with touch input
     */
    touch: boolean;
    /**
     * Loop the presentation
     */
    loop: boolean;
    /**
     * Change the presentation direction to be RTL
     */
    rtl: boolean;
    /**
     * Changes the behavior of our navigation directions.
     *
     * "default"
     * Left/right arrow keys step between horizontal slides, up/down
     * arrow keys step between vertical slides. Space key steps through
     * all slides (both horizontal and vertical).
     *
     * "linear"
     * Removes the up/down arrows. Left/right arrows step through all
     * slides (both horizontal and vertical).
     *
     * "grid"
     * When this is enabled, stepping left/right from a vertical stack
     * to an adjacent vertical stack will land you at the same vertical
     * index.
     *
     * Consider a deck with six slides ordered in two vertical stacks:
     * 1.1    2.1
     * 1.2    2.2
     * 1.3    2.3
     *
     * If you’re on slide 1.3 and navigate right, you will normally move
     * from 1.3 -> 2.1. If "grid" is used, the same navigation takes you
     * from 1.3 -> 2.3.
     */
    navigationMode: "default" | "linear" | "grid";
    /**
     * Randomizes the order of slides each time the presentation loads
     */
    shuffle: boolean;
    /**
     * Turns fragments on and off globally
     */
    fragments: boolean;
    /**
     * Flags whether to include the current fragment in the URL,
     * so that reloading brings you to the same fragment position
     */
    fragmentInURL: boolean;
    /**
     * Flags if the presentation is running in an embedded mode,
     * i.e. contained within a limited portion of the screen
     */
    embedded: boolean;
    /**
     * Flags if we should show a help overlay when the question-mark key is pressed
     */
    help: boolean;
    /**
     * Flags if it should be possible to pause the presentation (blackout)
     */
    pause: boolean;
    /**
     * Flags if speaker notes should be visible to all viewers
     */
    showNotes: boolean;
    /**
     * Global override for auto playing embedded media (video/audio/iframe)
     *
     * - `null`: Media will only autoplay if data-autoplay is present
     * - `true`: All media will autoplay, regardless of individual setting
     * - `false`: No media will autoplay, regardless of individual setting
     */
    autoPlayMedia: null | boolean;
    /**
     * Global override for preloading lazy-loaded iframes
     *
     * - `null`: Iframes with data-src AND data-preload will be loaded when within the viewDistance,
     *   iframes with only data-src will be loaded when visible
     * - `true`: All iframes with data-src will be loaded when within the viewDistance
     * - `false`: All iframes with data-src will be loaded only when visible
     */
    preloadIframes: null | boolean;
    /**
     * Can be used to globally disable auto-animation
     */
    autoAnimate: boolean;
    /**
     * Optionally provide a custom element matcher
     * that will be used to dictate which elements we can animate between.
     */
    autoAnimateMatcher: null;
    /**
     * Default settings for our auto-animate transitions,
     * can be overridden per-slide or per-element via data arguments
     */
    autoAnimateEasing: "ease" | "ease-in" | "ease-out" | "linear";
    autoAnimateDuration: number;
    autoAnimateUnmatched: boolean;
    /**
     * CSS properties that can be auto-animated.
     *
     * Position & scale is matched separately
     * so there's no need to include styles like top/right/bottom/left, width/height or margin
     */
    autoAnimateStyles: string[];
    /**
     * Controls automatic progression to the next slide
     * - `0`: Auto-sliding only happens if the data-autoslide HTML attribute
     *  is present on the current slide or fragment
     * - `1+`: All slides will progress automatically at the given interval
     * - `false`: No auto-sliding, even if data-autoslide is present
     */
    autoSlide: number | false;
    /**
     * Stop auto-sliding after user input
     */
    autoSlideStoppable: boolean;
    /**
     * Use this method for navigation when auto-sliding (defaults to navigateNext)
     */
    autoSlideMethod: null | any;
    /**
     * Specify the average time in seconds that you think you will spend presenting each slide. This is used to show a pacing timer in the speaker view
     */
    defaultTiming: null | number;
    /**
     * Enable slide navigation via mouse wheel
     */
    mouseWheel: boolean;
    /**
     * Opens links in an iframe preview overlay
     *
     * Add `data-preview-link` and `data-preview-link="false"` to customize each link individually
     */
    previewLinks: boolean;
    /**
     * Exposes the reveal.js API through window.postMessage
     */
    postMessage: boolean;
    /**
     * Dispatches all reveal.js events to the parent window through postMessage
     */
    postMessageEvents: boolean;
    /**
     * Focuses body when page changes visibility to ensure keyboard shortcuts work
     */
    focusBodyOnPageVisibilityChange: boolean;
    /**
     * Transition style
     */
    transition: "none" | "slide" | "fade" | "convex" | "concave" | "zoom";
    /**
     * Transition speed
     */
    transitionSpeed: "default" | "fast" | "slow";
    /**
     * Transition style for full page slide backgrounds
     */
    backgroundTransition: "none" | "fade" | "slide" | "convex" | "concave" | "zoom";
    /**
     * The maximum number of pages a single slide can expand onto when printing to PDF, unlimited by default
     */
    pdfMaxPagesPerSlide: number;
    /**
     * Prints each fragment on a separate slide
     */
    pdfSeparateFragments: boolean;
    /**
     * Offset used to reduce the height of content within exported PDF pages.
     * This exists to account for environment differences based on how you
     * print to PDF. CLI printing options, like phantomjs and wkpdf, can end
     * on precisely the total height of the document whereas in-browser
     * printing has to end one pixel before.
     */
    pdfPageHeightOffset: number;
    /**
     * Number of slides away from the current that are visible
     */
    viewDistance: number;
    /**
     * Number of slides away from the current that are visible on mobile devices.
     *
     * It is advisable to set this to a lower number than viewDistance in order to save resources.
     */
    mobileViewDistance: number;
    /**
     * The display mode that will be used to show slides
     */
    display: "block";
    /**
     * Hide cursor if inactive
     */
    hideInactiveCursor: boolean;
    /**
     * Time before the cursor is hidden (in ms)
     */
    hideCursorTime: number;
    plugins: any[];
}

type RevealPlugin = "highlight" | "math" | "search" | "notes" | "zoom";
interface PresentationOptions {
    /**
     * Reveal plugins enabled
     *
     * 启用的 Reveal.js 插件
     */
    plugins?: RevealPlugin[];
    /**
     * Config options passed directly to reval.js
     *
     * 直接传入 reval.js 的配置项
     */
    revealConfig?: Partial<RevealOptions>;
}

interface TaskListOptions {
    /**
     * 是否禁用 checkbox
     *
     * Whether disable checkbox
     *
     * @default true
     */
    disabled?: boolean;
    /**
     * 是否使用 `<label>` 来包裹文字
     *
     * Whether use `<label>` to wrap text
     *
     * @default true
     */
    label?: boolean;
}

interface StylizeResult {
    /**
     * Tag name
     *
     * 渲染的标签名称
     */
    tag: string;
    /**
     * Attributes settings
     *
     * 属性设置
     */
    attrs: Record<string, string>;
    /**
     * Tag content
     *
     * 标签内容
     */
    content: string;
}
interface StylizeItem {
    /**
     * Inline token matcher
     *
     * 字符匹配
     */
    matcher: string | RegExp;
    /**
     * Content Replacer
     *
     * 内容替换
     */
    replacer: (options: {
        tag: string;
        content: string;
        attrs: Record<string, string>;
        env?: MarkdownEnv;
    }) => StylizeResult | void;
}
type StylizeOptions = StylizeItem[];

/**
 * Forked and modified from https://github.com/arve0/markdown-it-attrs/
 * The MIT License (MIT)
 *
 * Copyright (c) Arve Seljebu <arve.seljebu@gmail.com> (arve0.github.io)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

declare const attrs: PluginWithOptions<AttrsOptions>;

declare const chart: PluginSimple;

/**
 * Code demo options
 */
interface CodeDemoOptions {
    /**
     * Whether to use babel to transpile to es5
     *
     * 是否使用 Babel 转义到 ES5
     *
     * @default false
     */
    useBabel: boolean;
    /**
     * JS Library links
     *
     * 引入的 JS 外部库链接
     */
    jsLib: string[];
    /**
     * CSS Library links
     *
     * 引入的 CSS 外部库链接
     */
    cssLib: string[];
    /**
     * Whether to display JSFiddle button
     *
     * 是否显示 JSFiddle 按钮
     *
     * @default true
     */
    jsfiddle?: boolean;
    /**
     * Whether to display CodePen button
     *
     * 是否显示 CodePen 按钮
     *
     * @default true
     */
    codepen?: boolean;
    /**
     * CodePen editor layout
     *
     * CodePen 编辑器布局
     *
     * @default "left"
     */
    codepenLayout: "top" | "left" | "right";
    /**
     * CodePen Editor Display
     *
     * CodePen 编辑器显示情况
     *
     * @default "101"
     */
    codepenEditors: "101" | "100" | "110" | "111" | "011" | "001" | "010";
    /**
     * Babel lib address
     *
     * Babel 库的地址
     *
     * @default "https://unpkg.com/@babel/standalone/babel.min.js"
     */
    babel: string;
    /**
     * Vue lib address
     *
     * Vue 库的地址
     *
     * @default "https://unpkg.com/vue/dist/vue.global.prod.js"
     */
    vue: string;
    /**
     * React lib address
     *
     * React 库的地址
     *
     * @default "https://unpkg.com/react/umd/react.production.min.js"
     */
    react: string;
    /**
     * ReactDOM lib address
     *
     * ReactDOM 库的地址
     *
     * @default "https://unpkg.com/react-dom/umd/react-dom.production.min.js"
     */
    reactDOM: string;
}

/**
 * Vue Playground options
 *
 * @description Vue playground is using [`@vue/repl`](https://github.com/vuejs/repl)
 *
 * Vue 交互演示配置
 *
 * @description Vue playground 使用 [`@vue/repl`](https://github.com/vuejs/repl)
 */
interface VuePlaygroundOptions {
    /**
     * Whether to show code in playground
     *
     * 是否在交互演示中显示代码
     *
     * @default false
     */
    showCode?: boolean;
    /**
     * specify the version of vue
     *
     * 指定 vue 版本
     */
    vueVersion?: string;
    /**
     * specify default URL to import Vue runtime from in the sandbox
     *
     * 指定默认的 Vue 运行时
     *
     * @default "https://unpkg.com/@vue/runtime-dom@${version}/dist/runtime-dom.esm-browser.js"
     */
    defaultVueRuntimeURL?: string;
    /**
     * Specify default URL to import Vue Server Renderer from in the sandbox
     *
     * 指定默认的 Vue 服务端渲染器
     *
     * @default "https://unpkg.com/@vue/server-renderer@${version}/dist/server-renderer.esm-browser.js"
     */
    defaultVueServerRendererURL?: string;
    /**
     * Whether to enable repl's editor resizable
     *
     * 是否启用自动调整大小
     *
     * @default true
     */
    autoResize?: boolean;
    /**
     * Whether to show JS, CSS, SSR panel
     *
     * 是否显示 JS, CSS, SSR 面板
     *
     * @default false
     */
    showCompileOutput?: boolean;
    /**
     * Whether to show import map
     *
     * 是否显示 import map
     *
     * @default true
     */
    showImportMap?: boolean;
    /**
     * Whether to clear console
     *
     * 是否清空控制台
     *
     * @default false
     */
    clearConsole?: boolean;
    /**
     * Layout
     *
     * 布局
     *
     * @default 'vertical'
     */
    layout?: "vertical" | "horizontal";
    /**
     * Options to configure the `vue/compiler-sfc`
     *
     * `vue/compiler-sfc` 配置项
     */
    sfcOptions?: SFCOptions;
    /**
     * Whether to enable SSR
     *
     * 是否启用 SSR
     *
     * @default true
     */
    ssr?: boolean;
}

declare const CODE_DEMO_DEFAULT_SETTING: CodeDemoOptions;
declare const normalDemo: PluginSimple;
declare const vueDemo: PluginSimple;
declare const reactDemo: PluginSimple;

declare const codeTabs: PluginSimple;

/**
 * Forked and modified from https://github.com/markdown-it/markdown-it-container/blob/master/index.js
 *
 * Copyright (c) 2015 Vitaly Puzrin, Alex Kocharin.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

interface MarkdownItContainerOptions {
    /** container name */
    name: string;
    /** container marker */
    marker?: string;
    /** validate whether this should be regarded as a container */
    validate?: (params: string, markup: string) => boolean;
    /** open tag render function */
    openRender?: RenderRule;
    /** close tag render function */
    closeRender?: RenderRule;
}
declare const container: PluginWithOptions<MarkdownItContainerOptions>;

declare const echarts: PluginSimple;

/**
 * Forked and modified from https://github.com/Antonio-Laguna/markdown-it-image-figures
 * The MIT License (MIT)
 *
 * Copyright (c) 2020 Antonio Laguna
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

declare const figure: PluginWithOptions<FigureOptions>;

declare const flowchart: PluginSimple;

/**
 * Forked from https://github.com/markdown-it/markdown-it-footnote/blob/master/index.js
 *
 * Copyright (c) 2014-2015 Vitaly Puzrin, Alex Kocharin.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

declare const footnote: PluginSimple;

type MarkdownItHintOptions = RequiredLocaleConfig<MarkdownHintLocaleData>;
type MarkdownHintBoxName = keyof MarkdownHintLocaleData;
declare const hint: PluginWithOptions<MarkdownItHintOptions>;

declare const imageLazyload: PluginSimple;

declare const imageMark: PluginWithOptions<ImageMarkOptions>;

interface MarkdownReference {
    href: string;
    title?: string;
}
interface ImageEnv extends MarkdownEnv {
    references?: Record<string, MarkdownReference>;
}
declare const imageSize: PluginSimple;

/**
 * Forked from https://github.com/waylonflinn/markdown-it-katex/blob/master/index.js
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Waylon Flinn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

declare const katex: PluginWithOptions<KatexOptions>;

/**
 * Forked from https://github.com/tani/markdown-it-mathjax3/blob/master/index.ts
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Waylon Flinn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

interface DocumentOptions {
    InputJax: TeX<LiteElement, string, HTMLElement>;
    OutputJax: CHTML<LiteElement, string, HTMLElement> | SVG<LiteElement, string, HTMLElement>;
    enableAssistiveMml: boolean;
}
declare const getDocumentOptions: (options: MathJaxOptions) => DocumentOptions;
interface MathJaxUtils {
    adaptor: LiteAdaptor;
    documentOptions: DocumentOptions;
}
declare const initMathjax: (options?: MathJaxOptions | boolean) => MathJaxUtils | null;
declare const mathjax: PluginWithOptions<MathJaxUtils>;

/**
 * Forked from https://github.com/markdown-it/markdown-it-mark/blob/master/index.js
 *
 * Copyright (c) 2014-2015 Vitaly Puzrin, Alex Kocharin.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

declare const mark: PluginSimple;

interface ImportFileInfo {
    filePath: string;
    lineStart: number;
    lineEnd: number | undefined;
}
interface IncludeInfo {
    cwd: string | null;
    includedFiles: string[];
    resolvedPath?: boolean;
}
declare const handleInclude: ({ filePath, lineStart, lineEnd }: ImportFileInfo, { cwd, includedFiles, resolvedPath }: IncludeInfo) => string;
declare const resolveInclude: (content: string, options: Required<IncludeOptions>, { cwd, includedFiles }: IncludeInfo) => string;
declare const createIncludeCoreRule: (options: Required<IncludeOptions>) => RuleCore;
declare const include: PluginWithOptions<IncludeOptions>;

declare const mermaid: PluginSimple;

declare const playground: PluginWithOptions<PlaygroundOptions>;

/** Gets a query string representation (hash + queries) */
declare const getURL: (code: string, compilerOptions?: CompilerOptions) => string;
declare const getTSPlaygroundPreset: ({ service, ...compilerOptions }?: TSPresetPlaygroundOptions) => PlaygroundOptions;

declare const getVuePlaygroundPreset: (options?: VuePresetPlaygroundOptions) => PlaygroundOptions;

declare const presentation: PluginSimple;

/**
 * Forked from https://github.com/markdown-it/markdown-it-sub/blob/master/index.js
 *
 * Copyright (c) 2014-2015 Vitaly Puzrin, Alex Kocharin.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

declare const sub: PluginSimple;

/**
 * Forked from https://github.com/markdown-it/markdown-it-sup/blob/master/index.js
 *
 * Copyright (c) 2014-2015 Vitaly Puzrin, Alex Kocharin.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

declare const sup: PluginSimple;

interface TabOptions {
    name: string;
    component: string;
    getter: (tokens: Token[], index: number, options: Options, env: unknown, self: Renderer) => Record<string, unknown>[];
}
declare const tabs: PluginWithOptions<TabOptions>;

/**
 * Forked from https://github.com/linsir/markdown-it-task-checkbox/blob/master/index.js
 *
 * Copyright (c) 2016, Revin Guillen
 * Modified code Copyright (c) 2016, linsir, MIT License
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

declare const tasklist: PluginWithOptions<TaskListOptions>;

/**
 * Forked from https://github.com/waylonflinn/markdown-it-katex/blob/master/index.js
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Waylon Flinn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

interface TexOptions {
    render: (content: string, displayMode: boolean) => string;
}
declare const tex: PluginWithOptions<TexOptions>;

declare const vPre: PluginSimple;

interface StylizeFrontmatter {
    /**
     * Content to be skipped in this page
     */
    noStylize?: string[];
}
interface StylizeMarkdownEnv extends MarkdownEnv {
    frontmatter: PageFrontmatter<StylizeFrontmatter>;
}
declare const stylize: PluginWithOptions<StylizeOptions>;

interface MarkdownItUMLOptions {
    /** name */
    name: string;
    /** open marker */
    open: string;
    /** close marker */
    close: string;
    /** render function */
    render: RenderRule;
}
declare const uml: PluginWithOptions<MarkdownItUMLOptions>;

declare const DEFAULT_VUE_PLAYGROUND_OPTIONS: VuePlaygroundOptions;
declare const vuePlayground: PluginSimple;

declare const markdownEnhanceLocales: MarkdownEnhanceLocaleConfig;

/**
 * md-enhance plugin configuration
 */
interface MarkdownEnhanceOptions {
    /**
     * Whether check dead links in markdown
     *
     * @description `true` equals to `'always'`, `false` equals to `'never'`
     *
     * @default 'dev'
     */
    linkCheck?: "always" | "dev" | "build" | "never" | boolean;
    /**
     * Whether enable standard GFM support
     *
     * 是否启用标准的 GitHub Favor Markdown 支持
     *
     * @default false
     */
    gfm?: boolean;
    /**
     * Whether to enable custom container including
     *
     * - info
     * - note
     * - tip
     * - warning
     * - danger
     * - details
     *
     * ⚠ The last 4 items conflict with default theme and will override it’s style.
     *
     * 是否启用自定义容器
     *
     * - info
     * - note
     * - tip
     * - warning
     * - danger
     * - details
     *
     * ⚠ 最后四个会和默认主题冲突，且会覆盖默认主题的样式与行为。
     *
     * @default false
     */
    container?: boolean;
    /**
     * Whether to enable v-pre wrapper.
     *
     * 是否启用 v-pre 容器。
     *
     * @default false
     */
    vPre?: boolean;
    /**
     * Whether to enable tabs.
     *
     * 是否启用标签页分组。
     *
     * @default false
     */
    tabs?: boolean;
    /**
     * Whether to enable codetabs.
     *
     * 是否启用代码组。
     *
     * @default false
     */
    codetabs?: boolean;
    /**
     * Whether to enable align support
     *
     * 是否启用自定义对齐支持。
     *
     * @default false
     */
    align?: boolean;
    /**
     * Whether to enable attr support
     *
     * 是否启用属性支持。
     *
     * @default false
     */
    attrs?: AttrsOptions | boolean;
    /**
     * Whether to enable superscript format support
     *
     * 是否启用上角标格式支持。
     *
     * @default false
     */
    sup?: boolean;
    /**
     * Whether to enable subscript format support
     *
     * 是否启用下角标格式支持。
     *
     * @default false
     */
    sub?: boolean;
    /**
     * Whether to enable footnote format support
     *
     * 是否启用脚注格式支持。
     *
     * @default false
     */
    footnote?: boolean;
    /**
     * Whether enable native image lazy loading
     *
     * 是否启用原生的图片懒加载。
     *
     * @default false
     */
    imageLazyload?: boolean;
    /**
     * Whether render figure with standalone imag
     *
     * 是否将单独的图片渲染为 figure
     *
     * @default false
     */
    figure?: FigureOptions | boolean;
    /**
     * Whether to enable gfm image id mark support
     *
     * 是否启用 GFM 图片 ID 标记。
     *
     * @default false
     */
    imageMark?: ImageMarkOptions | boolean;
    /**
     * Whether to enable image size mark support
     *
     * 是否启用图片大小标记支持。
     *
     * @default false
     */
    imageSize?: ImageMarkOptions | boolean;
    /**
     * Whether to enable mark format support
     *
     * 是否启用标注支持。
     *
     * @default false
     */
    mark?: boolean;
    /**
     * Whether to enable tasklist format support
     *
     * 是否启用任务列表支持
     *
     * @default false
     */
    tasklist?: TaskListOptions | boolean;
    /**
     * Whether to enable include syntax support
     *
     * 是否启用导入语法支持
     *
     * @default false
     */
    include?: IncludeOptions | boolean;
    /**
     * Whether to enable katex support
     *
     * @see https://katex.org/docs/options.html
     *
     * 是否启用 katex 语法支持
     *
     * @see https://katex.org/docs/options.html
     *
     * @default false
     */
    katex?: KatexOptions | boolean;
    /**
     * Whether to enable mathjax support
     *
     * @see http://docs.mathjax.org/en/latest/options/index.html
     *
     * 是否启用 mathjax 语法支持
     *
     * @see http://docs.mathjax.org/en/latest/options/index.html
     *
     * @default false
     */
    mathjax?: MathJaxOptions | boolean;
    /**
     * Whether to enable chart support
     *
     * 是否启用 chart 图表支持
     *
     * @default false
     */
    chart?: boolean;
    /**
     * Whether to enable echarts support
     *
     * 是否启用 echarts 图表支持
     *
     * @default false
     */
    echarts?: boolean;
    /**
     * Whether to enable flowchart support
     *
     * 是否启用 flowchart 流程图支持
     *
     * @default false
     */
    flowchart?: boolean;
    /**
     * Whether to enable mermaid support
     *
     * 是否启用 Mermaid 流程图支持
     *
     * @default false
     */
    mermaid?: boolean;
    /**
     * Whether to enable code-demo support
     *
     * 是否启用代码示例功能
     *
     * @default false
     */
    demo?: Partial<CodeDemoOptions> | boolean;
    /**
     * Whether to enable presentation support
     *
     * 是否启用幻灯片支持
     *
     * @default false
     */
    presentation?: PresentationOptions | boolean;
    /**
     * Keyword enhancement
     *
     * 关键词显示增强选项
     */
    stylize?: StylizeOptions;
    /**
     * Whether to enable playground support
     *
     * 是否启用 playground 支持
     */
    playground?: {
        /** Playground presets */
        presets: ("ts" | "vue" | PlaygroundOptions)[];
        /** Playground config */
        config?: {
            ts?: TSPresetPlaygroundOptions;
            vue?: VuePresetPlaygroundOptions;
        };
    };
    /**
     * Whether to enable vue playground support
     *
     * 是否启用 Vue Playground 支持
     *
     * @default false
     */
    vuePlayground?: VuePlaygroundOptions | boolean;
    /**
     * The delay of operating dom, in ms
     *
     * If the theme you are using has a switching animation, it is recommended to configure this option to `Switch animation duration + 200`
     *
     * 操作页面 DOM 的延时，单位 ms
     *
     * 如果你使用的主题有切换动画，建议配置此选项为 `切换动画时长 + 200`
     *
     * @default 500
     */
    delay?: number;
    /**
     * Locale config
     *
     * 国际化配置选项
     */
    locales?: LocaleConfig<MarkdownEnhanceLocaleData>;
}

declare const mdEnhancePlugin: (options?: MarkdownEnhanceOptions, legacy?: boolean) => PluginFunction;

export { AttrsOptions, CODE_DEMO_DEFAULT_SETTING, DEFAULT_VUE_PLAYGROUND_OPTIONS, DocumentOptions, FigureOptions, ImageEnv, ImageMarkOptions, IncludeOptions, KatexOptions, MarkdownEnhanceLocaleConfig, MarkdownEnhanceLocaleData, MarkdownEnhanceOptions, MarkdownHintBoxName, MarkdownHintLocaleData, MarkdownItContainerOptions, MarkdownItHintOptions, MarkdownItUMLOptions, MathJaxOptions, MathJaxTexInputOptions, MathJaxUtils, MathjaxCommonHTMLOutputOptions, MathjaxCommonOutputOptions, MathjaxSVGOutputOptions, PlaygroundCodeConfig, PlaygroundData, PlaygroundOptions, PresentationOptions, RevealPlugin, StylizeFrontmatter, StylizeItem, StylizeMarkdownEnv, StylizeOptions, StylizeResult, TSPresetPlaygroundOptions, TabOptions, TaskListOptions, TexOptions, VuePresetPlaygroundOptions, align, attrs, chart, codeTabs, container, createIncludeCoreRule, echarts, figure, flowchart, footnote, getDocumentOptions, getTSPlaygroundPreset, getURL, getVuePlaygroundPreset, handleInclude, hint, imageLazyload, imageMark, imageSize, include, initMathjax, katex, mark, markdownEnhanceLocales, mathjax, mdEnhancePlugin, mermaid, normalDemo, playground, presentation, reactDemo, resolveInclude, stylize, sub, sup, tabs, tasklist, tex, uml, vPre, vueDemo, vuePlayground };
