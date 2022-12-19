<template><div><p><code v-pre>vuepress-theme-hope</code> provides footer feature for all pages <Badge text="Support page config" />.</p>
<!-- more -->
<h2 id="global-config" tabindex="-1"><a class="header-anchor" href="#global-config" aria-hidden="true">#</a> Global Config</h2>
<p>You can set the default footer content and copyright information globally using <code v-pre>footer</code> and <code v-pre>copyright</code> in theme options.</p>
<p>The footer is not displayed by default. To display the footer, you need to set <code v-pre>displayFooter: true</code> in theme options.</p>
<div class="custom-container info">
<p class="custom-container-title">Different Locales</p>
<p>You can set footers for each language individually under <code v-pre>locales</code> field in theme options.</p>
</div>
<h2 id="page-config" tabindex="-1"><a class="header-anchor" href="#page-config" aria-hidden="true">#</a> Page Config</h2>
<p>You can configure <code v-pre>footer</code> and <code v-pre>copyright</code> options in the frontmatter of the page to set footer content of a specific page.</p>
<h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3>
<ul>
<li>
<p>When setting <code v-pre>displayFooter: true</code> in theme options, you can set <code v-pre>footer: false</code> in frontmatter to disable footer in a specific page.</p>
</li>
<li>
<p>When the global display of footer is not enabled, setting <code v-pre>footer: true</code> means displaying the default footer.</p>
</li>
<li>
<p>If you fill in a string, it will be inserted into the footer as content with <code v-pre>v-html</code> command, so you can fill in HTMLString.</p>
</li>
</ul>
<h3 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h3>
<p>The <code v-pre>copyright</code> field is used as copyright information of a specific page. It also supports HTMLString (useful when you cite an article and the article uses a specific license).</p>
<p>When setting <code v-pre>displayFooter: true</code> in theme options, you can also set <code v-pre>copyright: false</code> to hide the copyright information in a specific page.</p>
<h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2>
<ul>
<li>
<p>Display default footer text:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>---
footer: true
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Customize footer text without displaying copyright information:</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> This site is served by GitHub Pages
<span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Customize footer content and copyright information:</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> &lt;a href="https<span class="token punctuation">:</span>//github.com/Mister<span class="token punctuation">-</span>Hope"<span class="token punctuation">></span> Mr.Hope &lt;/a<span class="token punctuation">></span>
<span class="token key atrule">copyright</span><span class="token punctuation">:</span> MIT LICENSE</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>When you set <code v-pre>displayFooter: true</code> in theme options, you can also disable it locally:</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>To remove the default footer content while keeping copyright information displayed, please use an empty string.</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token string">""</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


