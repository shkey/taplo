import{_ as e,o,c as a,a as i}from"./app.3f800dbf.js";const h=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[{"level":2,"title":"Log Level","slug":"log-level"},{"level":2,"title":"Configuration File","slug":"configuration-file"}],"relativePath":"cli/usage/configuration.md","lastUpdated":1655552391000}'),l={name:"cli/usage/configuration.md"},n=i(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h1><h2 id="log-level" tabindex="-1">Log Level <a class="header-anchor" href="#log-level" aria-hidden="true">#</a></h2><p>Taplo uses the Rust <code>tracing</code> library for configurable logging features and respects the <code>RUST_LOG</code> environment variable. All logs regardless of log level are printed to the standard error output.</p><p>In most cases you might wish to disable logging below a certain log level. As an example if you wish to only see error messages, you can do the following:</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">RUST_LOG=error taplo lint foo.toml</span></span>
<span class="line"></span></code></pre></div><p>The available log levels:</p><ul><li><code>trace</code></li><li><code>debug</code></li><li><code>info</code></li><li><code>warn</code></li><li><code>error</code></li></ul><h2 id="configuration-file" tabindex="-1">Configuration File <a class="header-anchor" href="#configuration-file" aria-hidden="true">#</a></h2><p>Taplo CLI by default searches for a Taplo config file in the current working directory, this behaviour can be disabled by either supplying <code>--no-auto-config</code> or <code>--config &lt;path&gt;</code> flags.</p>`,9),r=[n];function t(s,c,d,g,p,u){return o(),a("div",null,r)}var _=e(l,[["render",t]]);export{h as __pageData,_ as default};