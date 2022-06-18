import{_ as s,o as a,c as n,a as e}from"./app.3f800dbf.js";const u=JSON.parse('{"title":"Conversion and Extraction","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Converting to JSON","slug":"converting-to-json"},{"level":2,"title":"Extracting Specific Values","slug":"extracting-specific-values"},{"level":3,"title":"More Examples","slug":"more-examples"}],"relativePath":"cli/usage/conversion-and-extraction.md","lastUpdated":1655402809000}'),l={name:"cli/usage/conversion-and-extraction.md"},o=e(`<h1 id="conversion-and-extraction" tabindex="-1">Conversion and Extraction <a class="header-anchor" href="#conversion-and-extraction" aria-hidden="true">#</a></h1><p>Taplo makes it easy to convert TOML files to JSON and also extract specific values via the <code>get</code> command.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><p>The following examples use the TOML file below:</p><div class="language-toml"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># foo.toml</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">foo</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">bar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[[</span><span style="color:#FFCB6B;">baz</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"><span style="color:#A6ACCD;">baz_field </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">baz 1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[[</span><span style="color:#FFCB6B;">baz</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"><span style="color:#A6ACCD;">baz_field </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">baz 2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="converting-to-json" tabindex="-1">Converting to JSON <a class="header-anchor" href="#converting-to-json" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">taplo get -f foo.toml -o json</span></span>
<span class="line"></span></code></pre></div><p>This will yield the following output:</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">bar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">baz</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">baz_field</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">baz 1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">baz_field</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">baz 2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="extracting-specific-values" tabindex="-1">Extracting Specific Values <a class="header-anchor" href="#extracting-specific-values" aria-hidden="true">#</a></h2><p>It is possible to extract specific values via a simple query expressions.</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">taplo get -f foo.toml </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">baz[1].baz_field</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p>This will yield:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">baz 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Expressions with array patterns <code>[]</code> might need to be put between quotation marks for some shells.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>List indexing is 0-based.</p></div><p>By default the value will be &quot;parsed&quot;, so that no strings will contain escape sequences or quotation marks.</p><p>However it is also possible to change the output format to JSON:</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">taplo get -f foo.toml -o json baz</span></span>
<span class="line"></span></code></pre></div><p>will yield:</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">baz_field</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">baz 1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">baz_field</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">baz 2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="more-examples" tabindex="-1">More Examples <a class="header-anchor" href="#more-examples" aria-hidden="true">#</a></h3><p>More examples for query expressions using the same document above:</p><table><thead><tr><th style="text-align:center;">expression</th><th style="text-align:center;">output format</th><th style="text-align:center;">output</th></tr></thead><tbody><tr><td style="text-align:center;"><code>baz.0.baz_field</code></td><td style="text-align:center;">json</td><td style="text-align:center;"><code>&quot;baz 1&quot;</code></td></tr><tr><td style="text-align:center;"><code>baz.*.baz_field</code></td><td style="text-align:center;">json</td><td style="text-align:center;"><code>[ &quot;baz 1&quot;, &quot;baz 2&quot; ]</code></td></tr><tr><td style="text-align:center;"><code>baz.1.baz_field</code></td><td style="text-align:center;">value</td><td style="text-align:center;"><code>baz 2</code></td></tr><tr><td style="text-align:center;"><code>baz.1</code></td><td style="text-align:center;">toml</td><td style="text-align:center;"><code>baz_field = &quot;baz 2&quot;</code></td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The outputs have been slightly modified to fit into the table format.</p></div>`,25),p=[o];function t(c,r,i,D,d,y){return a(),n("div",null,p)}var C=s(l,[["render",t]]);export{u as __pageData,C as default};