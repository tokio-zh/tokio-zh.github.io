(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{148:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("它花了比我最初希望的更长的时间（一如既往），但是新的\nTokio版本已经发布。此版本包括其他功能，a\n新的[API集] "),a("router-link",{attrs:{to:"./https：//docs.rs/tokio/0.1.8/tokio/fs/index.html"}},[t._v("fs")]),t._v("允许从一个执行文件系统操作\n异步上下文，并发改进，计时器改进等\n（包括错误修复，所以一定要更新！）。")],1),t._v(" "),a("p",[t._v("自上一篇文章以来已经有点了。没有什么大事\n功能发布，但这并不意味着我们已经闲置。新的板条箱有\n在过去的几个月中，已经发布了许多渐进式的改进。许多\n这些改进是由社区贡献的，所以我想了一个\n小亮点是有序的。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("最新版本包括大多数文件系统的[非阻塞版本] "),a("router-link",{attrs:{to:"./https：//docs.rs/tokio/0.1.8/tokio/fs/index.html"}},[t._v("fs")]),t._v("\n蜜蜂。这个惊人的作品主要是由"),a("a",{attrs:{href:"https://github.com/griff",target:"_blank",rel:"noopener noreferrer"}},[t._v("@griff"),a("OutboundLink")],1),t._v("在[史诗公关] [公关]中提供的。\n和"),a("a",{attrs:{href:"https://github.com/lnicola",target:"_blank",rel:"noopener noreferrer"}},[t._v("@lnicola"),a("OutboundLink")],1),t._v("在一系列较小的公关中，但许多其他人参与了帮助\n审查并改进箱子。")],1),t._v(" "),a("p",[t._v("谢谢：[@ dekellum]，[@ matsadler]，[@ debris]，[@ mati865]，[@ lovebug356]，\n"),a("a",{attrs:{href:"https://github.com/bryanburgers",target:"_blank",rel:"noopener noreferrer"}},[t._v("@bryanburgers"),a("OutboundLink")],1),t._v("，[@ shepmaster]。")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("在过去的几个月里，"),a("a",{attrs:{href:"https://github.com/stjepang",target:"_blank",rel:"noopener noreferrer"}},[t._v("@stjepang"),a("OutboundLink")],1),t._v("一直在努力改善\n与Tokio相关的并发比特。一些亮点：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/tokio-rs/tokio/issues/459",target:"_blank",rel:"noopener noreferrer"}},[t._v("#459"),a("OutboundLink")],1),t._v(" - 修复线程唤醒中的竞争")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tokio-rs/tokio/issues/470",target:"_blank",rel:"noopener noreferrer"}},[t._v("#470"),a("OutboundLink")],1),t._v(" - 改善工人纺纱")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tokio-rs/tokio/issues/517",target:"_blank",rel:"noopener noreferrer"}},[t._v("#517"),a("OutboundLink")],1),t._v(" - 提高反应堆中使用的RW锁的可扩展性。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tokio-rs/tokio/issues/534",target:"_blank",rel:"noopener noreferrer"}},[t._v("#534"),a("OutboundLink")],1),t._v(" - 改进工作窃取运行时的窃取部分。")])]),t._v(" "),a("p",[t._v("我在城里为Rustconf做了很好的聊天，我很兴奋\n他的工作尚未到来。")]),t._v(" "),a("p",[t._v("当然，感谢所有"),a("a",{attrs:{href:"https://github.com/crossbeam-rs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("crossbeam"),a("OutboundLink")],1),t._v("的工作。 Tokio在很大程度上取决于它。")]),t._v(" "),t._m(4),t._v(" "),a("p",[a("code",[t._v("current_thread :: Runtime")]),t._v("也收到了一些增量\n因为它最初是由"),a("a",{attrs:{href:"https://github.com/vorner",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vorner"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://github.com/kpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("@kpp"),a("OutboundLink")],1),t._v("引入的。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/sdroege",target:"_blank",rel:"noopener noreferrer"}},[t._v("@sdroege"),a("OutboundLink")],1),t._v("添加了一个"),a("code",[t._v("Handle")]),t._v("，允许将生成任务生成到运行时\n其他线程（[＃340]）。这是使用通道将任务发送到的\n运行时线程（类似'tokio-core`使用的策略）。")]),t._v(" "),a("p",[t._v("并且"),a("a",{attrs:{href:"https://github.com/jonhoo",target:"_blank",rel:"noopener noreferrer"}},[t._v("@jonhoo"),a("OutboundLink")],1),t._v("实现了"),a("code",[t._v("block_on_all")]),t._v("函数（[＃477]）并修复了一个错误\n跟踪活跃期货的数量并协调关闭（[＃478]）")]),t._v(" "),t._m(5),t._v(" "),a("p",[a("code",[t._v("tokio :: timer")]),t._v("确实得到了一个新功能："),a("a",{attrs:{href:"https://docs.rs/tokio-timer/0.2.6/tokio_timer/struct.DelayQueue.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("DelayQueue")]),a("OutboundLink")],1),t._v("。这种类型允许用户\n存储一段时间后返回的值。这很有用\n用于支持更复杂的时间相关案例。")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("使用"),a("a",{attrs:{href:"https://docs.rs/tokio-timer/0.2.6/tokio_timer/struct.DelayQueue.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("DelayQueue")]),a("OutboundLink")],1),t._v("，实现变得更有效：")]),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("除了上面列出的内容之外，Tokio还获得了许多小改进\n并修复了大多数板条箱的错误。 这些都是由我们惊人的提供\n社区。 我希望随着时间的推移，越来越多的人会加入这项努力\n建立Tokio并帮助它继续发展。")]),t._v(" "),a("p",[t._v("所以，非常感谢"),a("a",{attrs:{href:"https://github.com/tokio-rs/tokio/graphs/contributors",target:"_blank",rel:"noopener noreferrer"}},[t._v("你们所有人"),a("OutboundLink")],1),t._v("迄今为止对Tokio贡献。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"tokio-0-1-8有许多增量改进"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tokio-0-1-8有许多增量改进","aria-hidden":"true"}},[this._v("#")]),this._v(" Tokio 0.1.8有许多增量改进")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"filesystem-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filesystem-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Filesystem API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("tokio-fs")]),this._v("的初始版本更像是一个存根，而不是一个完整的实现。\n它只包括基本的文件系统操作。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"并发改进"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发改进","aria-hidden":"true"}},[this._v("#")]),this._v(" 并发改进")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"current-thread-runtime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#current-thread-runtime","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("current_thread :: Runtime")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"计时器改进"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计时器改进","aria-hidden":"true"}},[this._v("#")]),this._v(" 计时器改进")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("让我们以缓存为例。缓存的目标是保存值\n在一定时间内与密钥相关联。经过一段时间后，\n价值下降。一直有可能实现这一点\n["),s("code",[this._v("tokio :: timer :: Delay")]),this._v("] [延迟]，但有点挑战。当缓存有很多\n必须扫描所有条目以检查是否需要删除它们。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[macro_use]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extern")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("crate")]),t._v(" futures"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extern")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("crate")]),t._v(" tokio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" tokio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("delay_queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DelayQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" futures"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Async"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Poll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("HashMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Duration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" Cache "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HashMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CacheKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay_queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    expirations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DelayQueue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CacheKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" TTL_SECS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" u64 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" Cache "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CacheKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" delay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expirations\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Duration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from_secs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TTL_SECS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("CacheKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" Option"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("Value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ref")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("CacheKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Some")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cache_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expirations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("cache_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll_purge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" Poll"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Error"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Some")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("try_ready!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("expirations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Ok")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Async"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Ready")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"many-other-small-improvements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#many-other-small-improvements","aria-hidden":"true"}},[this._v("#")]),this._v(" Many other small improvements")])}],!1,null,null,null);s.default=e.exports}}]);