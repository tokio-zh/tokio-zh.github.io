(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{146:function(t,e,r){"use strict";r.r(e);var n=r(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("它花了比我最初希望的更长的时间（一如既往），但是新的\nTokio版本已经发布。此版本包括其他功能，a\n新的[API集] "),r("a",{attrs:{href:"https://docs.rs/tokio/0.1/tokio/fs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("fs"),r("OutboundLink")],1),t._v("允许从一个执行文件系统操作\n异步上下文。")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("与文件（和其他文件系统类型）交互需要\\ *阻塞系统\n调用，我们都知道阻塞和异步不混合。所以，\n从历史上看，当人们问“我如何读取和写入文件？”时，\n答案是使用线程池。这个想法是，当阻止读取或\n必须执行write，它是在线程池上完成的，因此它不会阻塞\n异步反应堆。")]),t._v(" "),r("p",[t._v("需要单独的线程池来执行文件操作需要消息\n通过。异步任务必须向线程池发送消息，询问它\n要从文件中读取，线程池会执行读取并填充缓冲区\n结果。然后线程池将缓冲区发送回异步\n任务。这不仅增加了调度消息的开销，而且还增加了\n需要分配缓冲区来回发送数据。")]),t._v(" "),r("p",[t._v("现在，使用Tokio的新[filesystem APIs] "),r("a",{attrs:{href:"https://docs.rs/tokio/0.1/tokio/fs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("fs"),r("OutboundLink")],1),t._v("，这个消息传递开销是没有的\n需要更久。添加了一个新的"),r("a",{attrs:{href:"https://docs.rs/tokio/0.1/tokio/fs/struct.File.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("File")]),r("OutboundLink")],1),t._v("类型。这种类型看起来非常相似\n由"),r("code",[t._v("std")]),t._v("提供的类型，但它实现了"),r("code",[t._v("AsyncRead")]),t._v("和"),r("code",[t._v("AsyncWrite")]),t._v("\n直接使用*来自在Tokio上运行的异步任务是安全的\n运行。")]),t._v(" "),r("p",[t._v("因为"),r("a",{attrs:{href:"https://docs.rs/tokio/0.1/tokio/fs/struct.File.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("File")]),r("OutboundLink")],1),t._v("类型实现了'AsyncRead"),r("code",[t._v("和")]),t._v("AsyncWrite`，所以它可以\n使用的方式与从Tokio使用TCP套接字的方式大致相同。")]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("\\ *是的，有一些操作系统提供完全异步\n文件系统API，但这些API不完整或不可移植。")]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("此版本的Tokio还包括异步[标准输入] "),r("a",{attrs:{href:"https://docs.rs/tokio/0.1/tokio/io/fn.stdin.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("in"),r("OutboundLink")],1),t._v("和\n[标准输出] "),r("a",{attrs:{href:"https://docs.rs/tokio/0.1/tokio/io/fn.stdout.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("out"),r("OutboundLink")],1),t._v(" API。因为很难提供真实的\nTokio版本使用便携式方式的异步标准输入和输出\n与阻止文件操作API类似的策略。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("通过告知Tokio运行时当前线程将阻塞运行时\n能够将事件循环从当前线程移动到另一个线程，\n释放当前线程以允许阻塞。")]),t._v(" "),r("p",[t._v("这与使用消息传递在a上运行阻塞操作相反\n线程池。而不是将阻塞操作移动到另一个线程，\n整个事件循环被移动。")]),t._v(" "),r("p",[t._v("实际上，将事件循环移动到另一个线程比移动便宜得多\n阻止操作。这样做只需要几个原子操作。该\nTokio运行时还保持备用线程池准备好允许移动\n事件循环尽可能快。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("该版本还包括运行时的[“当前线程”] "),r("a",{attrs:{href:"https://docs.rs/tokio/0.1/tokio/runtime/current_thread/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("rt"),r("OutboundLink")],1),t._v("版本\n（感谢[kpp]（https://github.com/kpp））。这类似于现有的运行时，\n但是在当前线程上运行所有组件。这允许运行期货\n不要实现["),r("code",[t._v("Send")]),t._v("]。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"新的tokio版本，现在支持文件系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新的tokio版本，现在支持文件系统","aria-hidden":"true"}},[this._v("#")]),this._v(" 新的Tokio版本，现在支持文件系统")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"filesystem-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filesystem-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Filesystem API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("截至今天，文件系统API非常简单。还有许多其他API\n需要实现以使Tokio文件系统API符合\n"),e("code",[this._v("std")]),this._v("，但这些留给读者作为PRs提交的练习！")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"标准进出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标准进出","aria-hidden":"true"}},[this._v("#")]),this._v(" 标准进出")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"阻止"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#阻止","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("阻止")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("由于允许使用新的["),e("code",[this._v("bl​​ocking")]),this._v("] API，这些新API成为可能\n注释将阻止当前线程的代码段。这些阻塞\n部分可以包括阻止系统调用，等待互斥锁或CPU繁重\n计算。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这也意味着必须使用"),e("code",[this._v("blocking")]),this._v("注释和"),e("code",[this._v("tokio-fs")]),this._v("\n来自Tokio运行时的上下文而不是其他期货感知执行者。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"当前线程运行时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#当前线程运行时","aria-hidden":"true"}},[this._v("#")]),this._v(" 当前线程运行时")])}],!1,null,null,null);e.default=s.exports}}]);