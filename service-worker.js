/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f0379f663e3f71b7c62d0f85f778b24c"
  },
  {
    "url": "assets/css/1.styles.729a41a7.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/2.styles.6f2df653.css",
    "revision": "65e6d21851de2816aab194ef187805a0"
  },
  {
    "url": "assets/css/styles.8bade797.css",
    "revision": "20e8f601997a9d1091a5c58da0327644"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.729a41a7.js",
    "revision": "e3954103683fc2ee9311810fd67af62b"
  },
  {
    "url": "assets/js/10.f4dee4dc.js",
    "revision": "b789a23631ebd1cdf20298d1c33d621b"
  },
  {
    "url": "assets/js/11.0a79d276.js",
    "revision": "bebadb0784af3c74aab8ff254127de74"
  },
  {
    "url": "assets/js/12.9a1ecca2.js",
    "revision": "5fc3c5098ab9ee845fc9d699007887ea"
  },
  {
    "url": "assets/js/13.f323aedb.js",
    "revision": "1b5aec8efdad6a4b49e4c43f09c58209"
  },
  {
    "url": "assets/js/14.f94ed1c8.js",
    "revision": "e2f8fc5638812e08f969e81c14ba456f"
  },
  {
    "url": "assets/js/15.2e17eed0.js",
    "revision": "4e9e076b5c2dcbb5d4edd8c776fff508"
  },
  {
    "url": "assets/js/16.5f7f0fb0.js",
    "revision": "f3625268f82b0e9c8f9a7625a5cc9c38"
  },
  {
    "url": "assets/js/17.a804f778.js",
    "revision": "2ade3e3915e38ee1844ec71434713db9"
  },
  {
    "url": "assets/js/18.917a7b15.js",
    "revision": "f3aa075eb6b37f11806fe5521011c2e2"
  },
  {
    "url": "assets/js/19.515a2278.js",
    "revision": "530ad2a8f5da19671b8eeacc4af806b9"
  },
  {
    "url": "assets/js/2.6f2df653.js",
    "revision": "28ccad9192c4218b644f623b5beeb50b"
  },
  {
    "url": "assets/js/20.773272da.js",
    "revision": "4d8307df6deb11931bf708e15bad8c34"
  },
  {
    "url": "assets/js/21.40aff844.js",
    "revision": "602158b52a8b4a380fafd1a52a6fb1b2"
  },
  {
    "url": "assets/js/22.0786618d.js",
    "revision": "e38bad3d6e818a844d4da158d590ee89"
  },
  {
    "url": "assets/js/23.c63536e4.js",
    "revision": "ebd5bb06b5fdcd43009e265abbf592d5"
  },
  {
    "url": "assets/js/24.9c06a2f7.js",
    "revision": "86ab8048798bc33ce467ffb776bf2e8a"
  },
  {
    "url": "assets/js/25.4a194b57.js",
    "revision": "2c9effd43f252df56157fa2372455ec2"
  },
  {
    "url": "assets/js/26.40c11936.js",
    "revision": "0d612b135eb74303e23a3d423d554c5c"
  },
  {
    "url": "assets/js/27.9e35a1f5.js",
    "revision": "b6606bcced6c86655e533015f4a49337"
  },
  {
    "url": "assets/js/28.f007bc19.js",
    "revision": "d0f8e49cf860b6a74181a6d36af11723"
  },
  {
    "url": "assets/js/29.b2b6291e.js",
    "revision": "d500ad2417bbb2043e9570b0170dbacc"
  },
  {
    "url": "assets/js/3.6ae31a5f.js",
    "revision": "1460b25bd3da2fd345d65dc8ee6c5be6"
  },
  {
    "url": "assets/js/30.f37829da.js",
    "revision": "09b9aeba1ec4ec0f7b13f410c2aa91c8"
  },
  {
    "url": "assets/js/31.a71b9216.js",
    "revision": "ff2789bb2ef8c1c5a64ee70095a79cd4"
  },
  {
    "url": "assets/js/32.33337511.js",
    "revision": "bc20a4b267bf4f8a517f798dbbe865b9"
  },
  {
    "url": "assets/js/33.2eb4488f.js",
    "revision": "a83d4740b0043ffb35b8fb042ebac04f"
  },
  {
    "url": "assets/js/34.967d43ee.js",
    "revision": "4cbd2526ef24333c889770897fdfb84b"
  },
  {
    "url": "assets/js/35.95be69d9.js",
    "revision": "d235b621039c6cf57d799a34f6b6a422"
  },
  {
    "url": "assets/js/36.9c0eb4ef.js",
    "revision": "5624ece930616fe9179f610e47bc1df2"
  },
  {
    "url": "assets/js/37.8fba8c6a.js",
    "revision": "ec9540aed4139473973058c6781503b7"
  },
  {
    "url": "assets/js/38.6f18dc3e.js",
    "revision": "a9fd6e08dec2fac7b6ba87ee9b66bcc1"
  },
  {
    "url": "assets/js/39.1064e57f.js",
    "revision": "e457e1918b0b9305a9cf4a7f2ab388d2"
  },
  {
    "url": "assets/js/4.4178ba81.js",
    "revision": "5c22464bf2fe8f4696bba76ac6ab3c71"
  },
  {
    "url": "assets/js/40.0122edd7.js",
    "revision": "62d3d4eea4085cd851b7d8d7afe3b698"
  },
  {
    "url": "assets/js/41.c85cb408.js",
    "revision": "3a46a609a085ff3562f8fbaafe13ff5e"
  },
  {
    "url": "assets/js/42.f08452f5.js",
    "revision": "8fe462593c48bc119d0372052090912f"
  },
  {
    "url": "assets/js/43.923b63dc.js",
    "revision": "4e42b71b4f5573b2ca64ad43f763c8b1"
  },
  {
    "url": "assets/js/44.fe42b200.js",
    "revision": "226f54d82e758a98c4847f038eedbe25"
  },
  {
    "url": "assets/js/45.fbe2b9fb.js",
    "revision": "87a1cb402114b0ed6874d46617480367"
  },
  {
    "url": "assets/js/5.9ab7d2a6.js",
    "revision": "2d490c7f50bb1be9c991cf8e5cfb6a88"
  },
  {
    "url": "assets/js/6.e89b2efe.js",
    "revision": "4e0dff2df6083530a6115a27e8d10f91"
  },
  {
    "url": "assets/js/7.2ef1920d.js",
    "revision": "cd3538930506da629798df3636e5460f"
  },
  {
    "url": "assets/js/8.60746b2b.js",
    "revision": "d6f7770ebace7d8f42d5072126a38c2a"
  },
  {
    "url": "assets/js/9.740f1fa8.js",
    "revision": "e2d50093174b0028d34182fc560f5938"
  },
  {
    "url": "assets/js/app.8bade797.js",
    "revision": "e0145e40ce4d5c3be489e74ea684f9c7"
  },
  {
    "url": "blog/2017-01-tokio-0-1.html",
    "revision": "7cbbc723983a142e423bf39a5a572e40"
  },
  {
    "url": "blog/2017-03-tokio-io.html",
    "revision": "2543c3f166716e4bf916c7871a18f25b"
  },
  {
    "url": "blog/2017-09-tokio-reform.html",
    "revision": "2b3d8a5a49b07de125042876d31f5fa1"
  },
  {
    "url": "blog/2018-02-tokio-reform-shipped.html",
    "revision": "7c092de64eb1385f0a6f2581b5297fc9"
  },
  {
    "url": "blog/2018-03-timers.html",
    "revision": "161d65449a084124faf388c5cd5da288"
  },
  {
    "url": "blog/2018-03-tokio-runtime.html",
    "revision": "d49bd2865c67765d4312f5f7e0fd14e1"
  },
  {
    "url": "blog/2018-05-tokio-fs.html",
    "revision": "8fa32756d2dd946c8835d11cd44424c1"
  },
  {
    "url": "blog/2018-08-async-await.html",
    "revision": "d0abd903013e262fdffb3989f27d5534"
  },
  {
    "url": "blog/2018-08-incremental-improvements.html",
    "revision": "51c5ece19dcb36b981dfde09da4bf12a"
  },
  {
    "url": "blog/2018-10-tokio-doc-push.html",
    "revision": "3ad0920317534912fe1d1a7f00345144"
  },
  {
    "url": "blog/index.html",
    "revision": "66cfc4dc98c960b88991635ccbc9285d"
  },
  {
    "url": "community/index.html",
    "revision": "27710e7ccdbe5bdce83ceee25e77a479"
  },
  {
    "url": "document/api.html",
    "revision": "a2ae00428fd82613ee9f1dc03e08a460"
  },
  {
    "url": "document/futures-streams-sinks/futures.html",
    "revision": "c7cdad948e493f23bdf70352e37e3eb1"
  },
  {
    "url": "document/futures-streams-sinks/overview.html",
    "revision": "ba134b4facfb4a871668f8f98db9d15a"
  },
  {
    "url": "document/futures-streams-sinks/putting-it-together.html",
    "revision": "56f9cc556da6302c3e6798beb76b95ce"
  },
  {
    "url": "document/futures-streams-sinks/sink.html",
    "revision": "c4397a0d67efedbcd3a9f45c06d6775b"
  },
  {
    "url": "document/futures-streams-sinks/streams.html",
    "revision": "31b3ab2d8e92561f88fdd18a2216ff5e"
  },
  {
    "url": "document/getting-started/echo.html",
    "revision": "10a55e839a0f8f63cb4ca931c82ec7b5"
  },
  {
    "url": "document/getting-started/futures.html",
    "revision": "0e9f23196bf76cfee3579255ef208464"
  },
  {
    "url": "document/getting-started/hello-world.html",
    "revision": "f9f056cb50a02222d7ef6ad10bb1a681"
  },
  {
    "url": "document/getting-started/runtime.html",
    "revision": "a50c05164b2bb503a61ac4ef6210092a"
  },
  {
    "url": "document/going-deeper/building-runtime.html",
    "revision": "f116ae0b94496525efafb68b934efd9a"
  },
  {
    "url": "document/going-deeper/chat.html",
    "revision": "ad183ccc3149c199305264780845358f"
  },
  {
    "url": "document/going-deeper/frames.html",
    "revision": "13d30b757d8b3458b8d5245956a24e3f"
  },
  {
    "url": "document/going-deeper/futures-mechanics.html",
    "revision": "cbbee363e64dba885bac7313e6443a1d"
  },
  {
    "url": "document/going-deeper/futures.html",
    "revision": "7d07eb22b8cf6a94925191092a8188d3"
  },
  {
    "url": "document/going-deeper/io.html",
    "revision": "6e83541f214fef2037363b03f8667c30"
  },
  {
    "url": "document/going-deeper/returning.html",
    "revision": "0b5798058a9505118f05ddb8a628ef23"
  },
  {
    "url": "document/going-deeper/runtime-model.html",
    "revision": "9f73091e197e7d0dc6b1dd5f85be985a"
  },
  {
    "url": "document/going-deeper/tasks.html",
    "revision": "a85427aaa960237fb86b067b437ed975"
  },
  {
    "url": "document/going-deeper/timers.html",
    "revision": "a1490396824e8fc13edb0e01f1ef5f69"
  },
  {
    "url": "document/index.html",
    "revision": "4091d3723496c544edaf7e94f7ca391c"
  },
  {
    "url": "document/internals/intro.html",
    "revision": "d7ebb94ebd5d57eb86485423c073e902"
  },
  {
    "url": "document/internals/net.html",
    "revision": "704e64c71abb361ea78a4066a579a8af"
  },
  {
    "url": "document/internals/runtime-model.html",
    "revision": "0ad8cdf6e03b10ecf37e7bd2d1bf0c1e"
  },
  {
    "url": "document/io/async_read_write.html",
    "revision": "485353c4ef55ff667b3f4855fcd2a2b9"
  },
  {
    "url": "document/io/datagrams.html",
    "revision": "818a62a42843df3df63d846baf12cc0f"
  },
  {
    "url": "document/io/filesystem.html",
    "revision": "c7014ae8f472c9ac77036bab5e43c66d"
  },
  {
    "url": "document/io/overview.html",
    "revision": "f12383d5d35f13dc94c67dc79dd4fbab"
  },
  {
    "url": "document/io/poll.html",
    "revision": "ac2987da931c9d0c3f101578fdcb2593"
  },
  {
    "url": "document/io/reading_writing_data.html",
    "revision": "217e60ad1adfd9bbcb3ccddbd8533916"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "cf6ef1942e4f95b64ee2b9aa80d28bc4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "cf6ef1942e4f95b64ee2b9aa80d28bc4"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "cf6ef1942e4f95b64ee2b9aa80d28bc4"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "cf6ef1942e4f95b64ee2b9aa80d28bc4"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "cf6ef1942e4f95b64ee2b9aa80d28bc4"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "cf6ef1942e4f95b64ee2b9aa80d28bc4"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "cf6ef1942e4f95b64ee2b9aa80d28bc4"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "cf6ef1942e4f95b64ee2b9aa80d28bc4"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "cf6ef1942e4f95b64ee2b9aa80d28bc4"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "cf6ef1942e4f95b64ee2b9aa80d28bc4"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "cf6ef1942e4f95b64ee2b9aa80d28bc4"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "cf6ef1942e4f95b64ee2b9aa80d28bc4"
  },
  {
    "url": "imgs/sky.jpg",
    "revision": "af7d5aea59f3e9c7d947e210a06c9403"
  },
  {
    "url": "imgs/tokio.png",
    "revision": "7736f93e91ccd6ca7fc31848888bebcd"
  },
  {
    "url": "index.html",
    "revision": "074fb4a4c020e67d414dad972bc9e6ea"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
