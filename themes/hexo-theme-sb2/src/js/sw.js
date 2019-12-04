// constants
const CACHE_NAME = 'sb-cache-v1.4'

const FILES_TO_CACHE = [

]

// load workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// output successful message
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`)
} else {
  console.log(`Boo! Workbox didn't load 😬`)
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "d137bfd8d110c72b614ec9eb38a1191f"
  },
  {
    "url": "about-me/index.html",
    "revision": "24d4670f4b95a706cc76120acb0b132a"
  },
  {
    "url": "archive.html",
    "revision": "cbdfcb5102a5fae60764cc7b31d200b8"
  },
  {
    "url": "archives/2016/08/index.html",
    "revision": "d7a439ac12a4cf5c00dd127668dbb266"
  },
  {
    "url": "archives/2016/09/index.html",
    "revision": "dca893a82318a724bad7e94cb3582030"
  },
  {
    "url": "archives/2016/10/index.html",
    "revision": "ce1248bb9a8db9cd434042140725a0db"
  },
  {
    "url": "archives/2016/11/index.html",
    "revision": "2ec0db53b19bdb1cc9a895df57ac1b1e"
  },
  {
    "url": "archives/2016/index.html",
    "revision": "14dc2b90b4ccc8e5596b6cd63585aa6e"
  },
  {
    "url": "archives/2017/01/index.html",
    "revision": "086bc64a9e840f8c9473a4c60e206373"
  },
  {
    "url": "archives/2017/02/index.html",
    "revision": "c6c10da7ebca24765203887bc4774e3b"
  },
  {
    "url": "archives/2017/05/index.html",
    "revision": "e8e57e1619e45169deca2b97cdc47b2a"
  },
  {
    "url": "archives/2017/07/index.html",
    "revision": "237482879b39c5293a61b4fd69439653"
  },
  {
    "url": "archives/2017/09/index.html",
    "revision": "148fe110597d5e93a7dc9c139137c72c"
  },
  {
    "url": "archives/2017/10/index.html",
    "revision": "048437ca4a26c6be3a98c4845f905355"
  },
  {
    "url": "archives/2017/11/index.html",
    "revision": "8dea998bb492f621f2d4c64aa089a08f"
  },
  {
    "url": "archives/2017/index.html",
    "revision": "878a730dd30f6085a896234808b548a6"
  },
  {
    "url": "archives/2018/03/index.html",
    "revision": "9c22e5bedb873b6cdeaa5c2ca7c31844"
  },
  {
    "url": "archives/2018/04/index.html",
    "revision": "b66bb7cfeb4fe28419819c34e652da5f"
  },
  {
    "url": "archives/2018/05/index.html",
    "revision": "afd8d4cedba32288af57bdb8dfe004db"
  },
  {
    "url": "archives/2018/06/index.html",
    "revision": "fcad4d54199956e4d2fd09b2454eca8e"
  },
  {
    "url": "archives/2018/08/index.html",
    "revision": "abdd6f34544a1900eefe1446a37b76e4"
  },
  {
    "url": "archives/2018/09/index.html",
    "revision": "08fc88bd53c7c4488b9eecf7960cb42f"
  },
  {
    "url": "archives/2018/10/index.html",
    "revision": "1287ff9ae7c535fa18f743f23f99d841"
  },
  {
    "url": "archives/2018/11/index.html",
    "revision": "eaa6b99d1895a5ce0b48441322fdecdc"
  },
  {
    "url": "archives/2018/12/index.html",
    "revision": "1e53df8a8d688a66416911d127d044b8"
  },
  {
    "url": "archives/2018/index.html",
    "revision": "66dad3dd6280858b4058cd4cfd4b3335"
  },
  {
    "url": "archives/2019/01/index.html",
    "revision": "1bda63e1b3500a989b121c12832190db"
  },
  {
    "url": "archives/2019/02/index.html",
    "revision": "551db2c2ff5d4fdb4e93c21e090d16f7"
  },
  {
    "url": "archives/2019/03/index.html",
    "revision": "87fa3c31575d91c3630d91e380ac2051"
  },
  {
    "url": "archives/2019/04/index.html",
    "revision": "909631d1482df610828bff0f034df256"
  },
  {
    "url": "archives/2019/05/index.html",
    "revision": "5bdc2afd762268bf8da9a2a873dcf0a7"
  },
  {
    "url": "archives/2019/08/index.html",
    "revision": "b9b94b0ded1f1fe795fb2f5d67ffe7fb"
  },
  {
    "url": "archives/2019/09/index.html",
    "revision": "612e8cc14dd4fa6990b4c947cd56b2b9"
  },
  {
    "url": "archives/2019/10/index.html",
    "revision": "3f5c3238c9f615f4d9607f83d0e2180e"
  },
  {
    "url": "archives/2019/11/index.html",
    "revision": "997fb21e3423eba620fe2ed22d6d34d4"
  },
  {
    "url": "archives/2019/index.html",
    "revision": "26454c06b683bcb7a9c88e4027c0777a"
  },
  {
    "url": "archives/index.html",
    "revision": "5befae93f4360267893b62a8d2d9b1bf"
  },
  {
    "url": "articles/2018-lookback/index.html",
    "revision": "16e6fdd3cac361a2312a27139cceb701"
  },
  {
    "url": "articles/5-things-to-consider-when-creating-your-css-style-guide/index.html",
    "revision": "327692aeb99a5a89f800151161f37e1d"
  },
  {
    "url": "articles/a-comparison-of-static-form-providers/index.html",
    "revision": "92572f348281741fdefc2d3d7c6c3302"
  },
  {
    "url": "articles/a-guide-to-static-site-generators-using-hexo-and-wordpress/index.html",
    "revision": "2807993018e62b5dfe84d85c9a4c5a69"
  },
  {
    "url": "articles/alpha-beta-gamma-naming-convention/index.html",
    "revision": "96bb05cdbf873196d5417af83daa5c1e"
  },
  {
    "url": "articles/angular-dragtable/index.html",
    "revision": "54af4c8dbaa254ecec75dc8869da8aef"
  },
  {
    "url": "articles/announcing-code-line-daily/index.html",
    "revision": "79d978ec4179b86f5dcf577c06a95d14"
  },
  {
    "url": "articles/bem-wordpress-theme/index.html",
    "revision": "874369bec4082db040ea6f06d1553c0e"
  },
  {
    "url": "articles/bookmarks-saves-hearts-stars-claps/index.html",
    "revision": "7ab3a02e86e06540c944be7b741370b7"
  },
  {
    "url": "articles/building-an-animated-sticky-header-with-custom-offset/index.html",
    "revision": "56f743b4379eac506a8ccaf202456fad"
  },
  {
    "url": "articles/classily-js-toggling-classes-more-classily/index.html",
    "revision": "f1e2cd7789049e0b5c8cb6a2a3d7091b"
  },
  {
    "url": "articles/css-sidebar-toggle/index.html",
    "revision": "0378e5487bc027776527f1ec40a1fc78"
  },
  {
    "url": "articles/css-tabs-part-ii-accessibility/index.html",
    "revision": "1128b82b03fa9f6e653fa380cb3f96b6"
  },
  {
    "url": "articles/custom-wordpress-theme-development-with-spro/index.html",
    "revision": "8e9d4a42fc63f2f91af4e6a9d1ca7feb"
  },
  {
    "url": "articles/fixing-google-analytics-caching-issue/index.html",
    "revision": "352bc3add96320d6a72157d3591a7af9"
  },
  {
    "url": "articles/github-atom-first-steps/index.html",
    "revision": "ceb12732f56aa4e254dc453916e1dc5e"
  },
  {
    "url": "articles/github-atom-git-packages/index.html",
    "revision": "c7ef52b3e85685549fed96894927668f"
  },
  {
    "url": "articles/github-atom-minimap-packages/index.html",
    "revision": "7002348afa035de0b5283f1ec1a751ad"
  },
  {
    "url": "articles/how-i-built-my-first-progressive-web-app-pwa/index.html",
    "revision": "0cf5c064577aeef7a64b272b2f082592"
  },
  {
    "url": "articles/how-to-add-a-contact-form-to-a-static-website/index.html",
    "revision": "a7c61e5f17b92cbf3217385707e48913"
  },
  {
    "url": "articles/how-to-automate-development-with-atom/index.html",
    "revision": "75dd85f0b97d2997b49d5546746dbdab"
  },
  {
    "url": "articles/how-to-create-crooked-shadow/index.html",
    "revision": "08134959dd682b0a3fa577e23e3ca182"
  },
  {
    "url": "articles/how-to-handle-keybindings-in-atom/index.html",
    "revision": "bcb35dbb64d88384f4205971a2a0ef43"
  },
  {
    "url": "articles/how-to-lint-inside-atom/index.html",
    "revision": "b6fd3866a789608aa75e824d954c618b"
  },
  {
    "url": "articles/how-to-make-tabs-using-only-css/index.html",
    "revision": "65bbd061911071b0978fe6fb1d4911b2"
  },
  {
    "url": "articles/interview-for-remote-working-hub/index.html",
    "revision": "d7728e6da029e970b1209c472a3af17e"
  },
  {
    "url": "articles/introducing-spro/index.html",
    "revision": "b04dd999fec81734ed549961880e0105"
  },
  {
    "url": "articles/making-a-website-with-hugo/index.html",
    "revision": "94ca664488aa0605c7a7cb561d436845"
  },
  {
    "url": "articles/modern-frontend-developer-skills-and-tools/index.html",
    "revision": "e7d96ca47860c5cd5a164baeccdf5aba"
  },
  {
    "url": "articles/my-favorite-chrome-extensions-for-web-development-mostly/index.html",
    "revision": "5e071e22cd569b882d0150ab8f82abbb"
  },
  {
    "url": "articles/my-favorite-netlify-features/index.html",
    "revision": "d03d3e5c0608ba2c76b9db86c5663ff1"
  },
  {
    "url": "articles/my-first-year-of-freelancing/index.html",
    "revision": "c02a42cf00d9780c5ec79d331c846c15"
  },
  {
    "url": "articles/my-second-year-of-freelancing/index.html",
    "revision": "991523fa92dbada1a968ec6d2e0065e1"
  },
  {
    "url": "articles/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/index.html",
    "revision": "c8ccba74fb2d1a9596eb1ff93197e7a5"
  },
  {
    "url": "articles/overviev-of-popular-static-site-generators/index.html",
    "revision": "5cec9851241ec67eb666146c2423f21d"
  },
  {
    "url": "articles/perfect-local-server-with-atom/index.html",
    "revision": "48d5810935d5c275462e9f150e9bb0d2"
  },
  {
    "url": "articles/recursively-includible-angular-directive/index.html",
    "revision": "f121b3cd12db93ede74dcd7f2c4468db"
  },
  {
    "url": "articles/remote-worker-routine/index.html",
    "revision": "e8fd25fdc016c01b44ecdf563c6663ac"
  },
  {
    "url": "articles/roadmap-september-2018/index.html",
    "revision": "0885a996282ed768656cb3bd18dd9dec"
  },
  {
    "url": "articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/index.html",
    "revision": "e73d3c0f7661b5efa8a6ca84c8b0eb25"
  },
  {
    "url": "articles/starter-project-gulp-tasks-for-css/index.html",
    "revision": "9a2a9803fd0c8de24d1a84d83956e9f6"
  },
  {
    "url": "articles/using-css-grid-where-appropriate-revisited/index.html",
    "revision": "4f17dd497fc83862eaf4a2a0a8aa6268"
  },
  {
    "url": "articles/using-css-grid-where-appropriate/index.html",
    "revision": "9de8ed4ca2dd20fb0938faf92871f6b2"
  },
  {
    "url": "articles/what-i-learned-from-my-github-profile/index.html",
    "revision": "dd45296f18b15f0e6ddf715f67414cdd"
  },
  {
    "url": "bookmarks/browser/index.html",
    "revision": "308a307b8d704983c165a1b23a41b251"
  },
  {
    "url": "bookmarks/pocket/index.html",
    "revision": "e4e924900fea784d770b6694f9168ce9"
  },
  {
    "url": "categories/articles/index.html",
    "revision": "e85db91f6a8101788780ef0356b9bb87"
  },
  {
    "url": "contact/index.html",
    "revision": "970be85dea2d99c25597ae8932f77f0b"
  },
  {
    "url": "css/foft.css",
    "revision": "4aa42f8e4398b76df858b21f32dbf4f2"
  },
  {
    "url": "css/foft.min.css",
    "revision": "a37811359e46e97337e6183085fd6f7f"
  },
  {
    "url": "css/offline.css",
    "revision": "5dd3cf48cdf471e8052f916f85c46275"
  },
  {
    "url": "css/offline.min.css",
    "revision": "bd8c8df8210f4de88b318bc11a111fe9"
  },
  {
    "url": "css/style.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style.critical.min.css",
    "revision": "e4a21ec373e686b8eedd94ba27d7eb63"
  },
  {
    "url": "css/style.css",
    "revision": "8468ef3688e8220629e9bf29ca1f7d24"
  },
  {
    "url": "css/style.min.css",
    "revision": "01b1326df4c1b204a5c745acb76a9e43"
  },
  {
    "url": "css/style2.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style2.critical.min.css",
    "revision": "c82922f4b3b0ce94d2e4bbd6357aa7c9"
  },
  {
    "url": "css/style3.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style3.critical.min.css",
    "revision": "c950271c3a344268d3456d16a3af3c1d"
  },
  {
    "url": "css/style4.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style4.critical.min.css",
    "revision": "50307291921540a65c859420375c72c5"
  },
  {
    "url": "css/style5.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style5.critical.min.css",
    "revision": "8cde7e581597e99a4d1bbc5cf0971c5f"
  },
  {
    "url": "css/style6.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style6.critical.min.css",
    "revision": "1498d6dfe18ac2f1a589079eb15796da"
  },
  {
    "url": "css/style7.critical.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/style7.critical.min.css",
    "revision": "99513dad07f452267ccf64d0a96a3c4c"
  },
  {
    "url": "favicon/android-chrome-144x144.png",
    "revision": "af5af163b9b82135328fc16d4543c83c"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "363184d66256d2e991c09dc60a0494c9"
  },
  {
    "url": "favicon/android-chrome-256x256.png",
    "revision": "19c47793024a13bca773719bbffd9184"
  },
  {
    "url": "favicon/android-chrome-36x36.png",
    "revision": "6baca5c8bd944ccb21dfc70ed3a624cc"
  },
  {
    "url": "favicon/android-chrome-384x384.png",
    "revision": "33789775cef1c695768ef10da5cf32b5"
  },
  {
    "url": "favicon/android-chrome-48x48.png",
    "revision": "8ca32da31bd4b4c2f167d25059f200f4"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "7daf981aa3ab5b62fda2198dbd924bbe"
  },
  {
    "url": "favicon/android-chrome-72x72.png",
    "revision": "a0f5f976afd10f9132a701d42b131518"
  },
  {
    "url": "favicon/android-chrome-96x96.png",
    "revision": "13f1618ba2acee6437ce39101dbb2d19"
  },
  {
    "url": "favicon/apple-touch-icon-114x114-precomposed.png",
    "revision": "e4079b7707f143c77af5688e279b7b0e"
  },
  {
    "url": "favicon/apple-touch-icon-114x114.png",
    "revision": "afc8b2a05ef7509f5c152e8a50d22440"
  },
  {
    "url": "favicon/apple-touch-icon-120x120-precomposed.png",
    "revision": "64d6b7235ecb4a5a8edffd8d1ef3842b"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "3bb11c8f9a7d1206c617ae47d9dfcf3f"
  },
  {
    "url": "favicon/apple-touch-icon-144x144-precomposed.png",
    "revision": "c63e424e7d3ef15077c673900a4c7f3f"
  },
  {
    "url": "favicon/apple-touch-icon-144x144.png",
    "revision": "b300d23613c47c65df2ea0aa872d481b"
  },
  {
    "url": "favicon/apple-touch-icon-152x152-precomposed.png",
    "revision": "03bfe0f36d4fc4a7dd91b62cb1524c87"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "b58be291457e4a0cdd11d0e94ad32b15"
  },
  {
    "url": "favicon/apple-touch-icon-180x180-precomposed.png",
    "revision": "0970d02cf84e3aa940fb84782a982868"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "c39ba43872cc149ebc791061490ff9ca"
  },
  {
    "url": "favicon/apple-touch-icon-57x57-precomposed.png",
    "revision": "09c12cb9c7ead1131ca91d6064c8e7ec"
  },
  {
    "url": "favicon/apple-touch-icon-57x57.png",
    "revision": "27442626a193ae4abc8b4a3f03754df5"
  },
  {
    "url": "favicon/apple-touch-icon-60x60-precomposed.png",
    "revision": "d4268359aa3712ce7637054b45f662eb"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "e52ca96f765f4da069c2bda0958ae9b2"
  },
  {
    "url": "favicon/apple-touch-icon-72x72-precomposed.png",
    "revision": "d3537549d57207e9d2a3bd665e4e2a19"
  },
  {
    "url": "favicon/apple-touch-icon-72x72.png",
    "revision": "6bc65d2aefe00bcd7ccbc8ee849ceb29"
  },
  {
    "url": "favicon/apple-touch-icon-76x76-precomposed.png",
    "revision": "9c126919fa3c787deb55d0cfc3f0ffa1"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "6718be95d9ff5070be135a9bb0d4cd1d"
  },
  {
    "url": "favicon/apple-touch-icon-precomposed.png",
    "revision": "0970d02cf84e3aa940fb84782a982868"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "c39ba43872cc149ebc791061490ff9ca"
  },
  {
    "url": "favicon/browserconfig.xml",
    "revision": "500cd12b71054ffa66ef84542fed3019"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "7c0d46f5e8df1b134ddcf4ce696257d9"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "2ab0ffdeba122d4ab6f94fa4569a43db"
  },
  {
    "url": "favicon/favicon.ico",
    "revision": "fb9727c105797a1e436d4a3efaacbff2"
  },
  {
    "url": "favicon/mstile-144x144.png",
    "revision": "14e024611a3cb2f79a25c2beb23a3fc5"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "7fef7ae3165ae8795b35395c838483c5"
  },
  {
    "url": "favicon/mstile-310x150.png",
    "revision": "f81377684bd8e6476bbf1fdfb9177363"
  },
  {
    "url": "favicon/mstile-310x310.png",
    "revision": "fd81b7bd51bc1aacd79dbf57358e3c4b"
  },
  {
    "url": "favicon/mstile-70x70.png",
    "revision": "47833b245955b6c0b80923791ea90551"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "5bcb129bd33cd65851617d1bf2de5ac2"
  },
  {
    "url": "fonts/Barlow/Barlow-Bold.woff",
    "revision": "9d96ad1f52bf5254cd7e02442ce8d145"
  },
  {
    "url": "fonts/Barlow/Barlow-Bold.woff2",
    "revision": "6769edd8ac286df063fa1044a5c13325"
  },
  {
    "url": "fonts/Barlow/Barlow-BoldItalic.woff",
    "revision": "3e6a8c8edfbde5dfc479ed0feefd169c"
  },
  {
    "url": "fonts/Barlow/Barlow-BoldItalic.woff2",
    "revision": "6333b268decc729a6c20324732dc3983"
  },
  {
    "url": "fonts/Barlow/Barlow-Italic.woff",
    "revision": "8110db90b0da9c8b4c3153fa261ed128"
  },
  {
    "url": "fonts/Barlow/Barlow-Italic.woff2",
    "revision": "a8f686eefd186c67b90224d2301fb98d"
  },
  {
    "url": "fonts/Barlow/Barlow-Light.woff",
    "revision": "7ec36638390630d197ff8e3d5a489a47"
  },
  {
    "url": "fonts/Barlow/Barlow-Light.woff2",
    "revision": "2d47a0d0c594bc6b41784d36376af3a6"
  },
  {
    "url": "fonts/Barlow/Barlow-LightItalic.woff",
    "revision": "ed116915869d7225e249933c7b8e9504"
  },
  {
    "url": "fonts/Barlow/Barlow-LightItalic.woff2",
    "revision": "74391a2504b51fa29e4ec81d9e21b2d6"
  },
  {
    "url": "fonts/Barlow/Barlow-Regular.woff",
    "revision": "97dc703e0368de91cc18f3f603c0189b"
  },
  {
    "url": "fonts/Barlow/Barlow-Regular.woff2",
    "revision": "e614dcb9efaddbe686e237f0281de010"
  },
  {
    "url": "fonts/PlayfairDisplay/PlayfairDisplay-Bold.woff",
    "revision": "b5b066b5208b59419a409686fef330db"
  },
  {
    "url": "fonts/PlayfairDisplay/PlayfairDisplay-Bold.woff2",
    "revision": "8a7bbb7396a7e4262bea0cd82c1d9bc0"
  },
  {
    "url": "gfx/jpg/cover.jpg",
    "revision": "2510332f98d86da228631b62691f6012"
  },
  {
    "url": "gfx/jpg/logo.jpg",
    "revision": "2927fe832d9abb55b45474ca982b022c"
  },
  {
    "url": "gfx/jpg/starter-project.jpg",
    "revision": "0e10002acd2b03c15c002acec8929dac"
  },
  {
    "url": "gfx/logo.png",
    "revision": "7ceea3fa98fc4fa1aeea75aff7a3e2a3"
  },
  {
    "url": "gfx/png/avatar.png",
    "revision": "bd2a2367a8c5a00d72051ef5ed0ecbd0"
  },
  {
    "url": "gfx/png/logo.png",
    "revision": "02ff5621ef9d17936bdf71632fba5c30"
  },
  {
    "url": "gfx/png/starter-project.png",
    "revision": "ed58850db4f670d96ceb9d9d8a0cd218"
  },
  {
    "url": "gfx/svg/logo-favicon.svg",
    "revision": "c5f1e6b1489382292d52693c24e68855"
  },
  {
    "url": "gfx/svg/logo-footer.svg",
    "revision": "80e6c211966cca8bba5ac5bc17be477d"
  },
  {
    "url": "gfx/svg/logo-header.svg",
    "revision": "80e6c211966cca8bba5ac5bc17be477d"
  },
  {
    "url": "gfx/svg/logo.svg",
    "revision": "80e6c211966cca8bba5ac5bc17be477d"
  },
  {
    "url": "gfx/svg/starter-project.svg",
    "revision": "dc8c8d2f815b7e2f1c3846f6a81184fb"
  },
  {
    "url": "hire-me-2018/index.html",
    "revision": "6080953450dab6c3f683a34f82189005"
  },
  {
    "url": "hire-me/index.html",
    "revision": "d5410840e8221a9b41ad72194f2e3f85"
  },
  {
    "url": "how/index.html",
    "revision": "30f664307320f5b90976b8ba6c416cca"
  },
  {
    "url": "index.html",
    "revision": "d1e787b961df05f762c86c2ad5f46f02"
  },
  {
    "url": "js/index.js",
    "revision": "9eb452c142e140c7fb53f354d746fc7e"
  },
  {
    "url": "js/index.min.js",
    "revision": "685f6c48335d5fbf9414cb270ed853ca"
  },
  {
    "url": "js/sw.min.js",
    "revision": "c0d658eefe30dfe197be2510f5a9f2e6"
  },
  {
    "url": "links/index.html",
    "revision": "f1a4ee24cdab35595f9fd2cf63c9f1af"
  },
  {
    "url": "offline.html",
    "revision": "c34281bbb2c9063ac90f0bf84f00918c"
  },
  {
    "url": "page.html",
    "revision": "e33a8ea8c09470dedd09a683a54e2f5d"
  },
  {
    "url": "portfolio/atika-interijeri/index.html",
    "revision": "1d8c3a5b677f00faa07d60e0a7d8616d"
  },
  {
    "url": "portfolio/borninjune/index.html",
    "revision": "9181dcf1a164509e6970058e3bbd60dd"
  },
  {
    "url": "portfolio/bozzuto/index.html",
    "revision": "54628bfdf79da286963db95ec478c1c8"
  },
  {
    "url": "portfolio/calvert/index.html",
    "revision": "3b19e827cb88cb63c0d359e69ce3f405"
  },
  {
    "url": "portfolio/contiamo/index.html",
    "revision": "3fba7706e993cb275035cd98da750443"
  },
  {
    "url": "portfolio/creditcardinsider/index.html",
    "revision": "905b485236ad48860ecd96a84cde48a9"
  },
  {
    "url": "portfolio/dominodatalab-pop-up/index.html",
    "revision": "9f2a8d44aea1bad832fb7f4ee1b430e1"
  },
  {
    "url": "portfolio/dominodatalab-rev/index.html",
    "revision": "2c6e698e1632061e29d2b19f403bfa26"
  },
  {
    "url": "portfolio/dominodatalab/index.html",
    "revision": "dda92e22da60495c9414f0ca784f469c"
  },
  {
    "url": "portfolio/empirical/index.html",
    "revision": "54ce0dc4480f9a4e0ade6bce911ab6a6"
  },
  {
    "url": "portfolio/franciscanchildrens/index.html",
    "revision": "28e8356b894f3c2bb8da2278667e169a"
  },
  {
    "url": "portfolio/hanhanxue/index.html",
    "revision": "309c74ffeb67ad49610a7a5f56323271"
  },
  {
    "url": "portfolio/index.html",
    "revision": "f06d27b7e2fb8013bbf3ea28e642be9a"
  },
  {
    "url": "portfolio/irinaandmatej/index.html",
    "revision": "101edce92360161adf552d935d770053"
  },
  {
    "url": "portfolio/machine-learning-libraries/index.html",
    "revision": "451943ea80010f556d49a73023890b91"
  },
  {
    "url": "portfolio/marcijusweddings/index.html",
    "revision": "b98058ddd906ff654c11da174480cc5b"
  },
  {
    "url": "portfolio/moodings/index.html",
    "revision": "7b080119c5116a2702fa4aad7e4ecf70"
  },
  {
    "url": "portfolio/netki/index.html",
    "revision": "512bdcad2d1e1ab3a027b7ac54137d62"
  },
  {
    "url": "portfolio/page-speed/index.html",
    "revision": "8739e171500e715540c98e1c6f5e9cb0"
  },
  {
    "url": "portfolio/thegrio/index.html",
    "revision": "faf8ff4012dd7d0fb8bde032d5834f04"
  },
  {
    "url": "portfolio/westwing/index.html",
    "revision": "2d34814be0be73470b20ff358060e6b7"
  },
  {
    "url": "portfolio/yearbook-trase/index.html",
    "revision": "914b411126d40567b9d0c85609dd91f3"
  },
  {
    "url": "post.html",
    "revision": "e33a8ea8c09470dedd09a683a54e2f5d"
  },
  {
    "url": "rss2.xml",
    "revision": "7a4e86f03076a1cdf2b1c8d112c6a493"
  },
  {
    "url": "services/index.html",
    "revision": "db7ccc44838377b3c705295cc4ad8bae"
  },
  {
    "url": "sitemap.xml",
    "revision": "12ba98803caee0ca137640733cbd6157"
  },
  {
    "url": "sw.min.js",
    "revision": "c0d658eefe30dfe197be2510f5a9f2e6"
  },
  {
    "url": "tags/accessibility/index.html",
    "revision": "f2042dce86c32f4e6d7a36171fdabf7d"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "5d46dc32f5e4c720632f3e44f7ed60b0"
  },
  {
    "url": "tags/atom/index.html",
    "revision": "eef849a82981b5d2c043c6f407889942"
  },
  {
    "url": "tags/bem/index.html",
    "revision": "f4716cc1ce0cf2656f2a40ba04b06196"
  },
  {
    "url": "tags/box-shadow/index.html",
    "revision": "a76c5d25193cd9d6e2b153e06e9d4b12"
  },
  {
    "url": "tags/breadcrumb/index.html",
    "revision": "33259d0e80e86d59e5fce35518f3911c"
  },
  {
    "url": "tags/cld/index.html",
    "revision": "c07fa2e5db744c2e9fe511dd90d29595"
  },
  {
    "url": "tags/css/index.html",
    "revision": "b05c9433be79d153ba6396856a394ce1"
  },
  {
    "url": "tags/devtools/index.html",
    "revision": "80bc50dfb5ddbf5b8aee431a9ea980d2"
  },
  {
    "url": "tags/freelance/index.html",
    "revision": "d8356217dcb8ceeb0a512a295389718f"
  },
  {
    "url": "tags/frontend/index.html",
    "revision": "3396d0e8b17830cf5678f634e8f0ff18"
  },
  {
    "url": "tags/git/index.html",
    "revision": "dad4e289dd5eb117787886a458fb68e6"
  },
  {
    "url": "tags/grid/index.html",
    "revision": "8b6e0a74fdd41e4fbda152b328b5599d"
  },
  {
    "url": "tags/gulp/index.html",
    "revision": "4cb5b22b1e819855e928a4645dc4fbb0"
  },
  {
    "url": "tags/hexo/index.html",
    "revision": "bee5998b6c0e8c450130330025a2ad86"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "c75515a35f1c53870fd19fdb8b9c0ddb"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "d0748781a015eea20a4546f2c16c2390"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "497701e547ef66d579618d5e98ebdb89"
  },
  {
    "url": "tags/keybindings/index.html",
    "revision": "b1bf9a1b579c8265d6b142042bd17dc5"
  },
  {
    "url": "tags/linter/index.html",
    "revision": "e7d8632b0e9c7e1e7900706be087c9b8"
  },
  {
    "url": "tags/middleman/index.html",
    "revision": "584f9c8942c01d63ae0d4d03c1b5d887"
  },
  {
    "url": "tags/minimap/index.html",
    "revision": "f5ab5be2c2ba06525adab553ce13881f"
  },
  {
    "url": "tags/netlify/index.html",
    "revision": "73f78dd17aa19863d8c77b1ca8444099"
  },
  {
    "url": "tags/open-source/index.html",
    "revision": "20e1c10d387930e05a14e5b80a1baa4e"
  },
  {
    "url": "tags/optimization/index.html",
    "revision": "8d6a299fe66b742592cc0ab4eeb1ed4e"
  },
  {
    "url": "tags/pagespeed/index.html",
    "revision": "23fa6f2f1201432a3ae8e5b3ec987e78"
  },
  {
    "url": "tags/plugin/index.html",
    "revision": "2a4ba606ec74d3d9d1854cf65bce3c52"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "285cfd31d33ec05979cfc6672e6c0b87"
  },
  {
    "url": "tags/pwa/index.html",
    "revision": "fef53105763cdd451541503becf186da"
  },
  {
    "url": "tags/remote-work/index.html",
    "revision": "1a8617f022132559c74dbe3dc91789ad"
  },
  {
    "url": "tags/ribbon/index.html",
    "revision": "767ca99556d2252b34593e042f028d41"
  },
  {
    "url": "tags/server/index.html",
    "revision": "ab9b227b034409ad321bc7e1d471f42b"
  },
  {
    "url": "tags/serverless/index.html",
    "revision": "768b160fe60f03f8f5ca28b91ff17c5e"
  },
  {
    "url": "tags/sidebar/index.html",
    "revision": "ed7ce618239277402c26c0140f931e2a"
  },
  {
    "url": "tags/spg/index.html",
    "revision": "2b70fa93ca2b74e2ccf014b666840986"
  },
  {
    "url": "tags/ssg/index.html",
    "revision": "9acdd4c7a05deb7b7afb053e194cd8d1"
  },
  {
    "url": "tags/starter-project/index.html",
    "revision": "81d13ad651e2dda1eb923296dd3e0dd0"
  },
  {
    "url": "tags/styleguide/index.html",
    "revision": "5786807406f9544d34847df83026c852"
  },
  {
    "url": "tags/tabs/index.html",
    "revision": "f854428fba5d6b99edc332df44a48bd6"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "6cd143ffdeb48992a1724fbad89e69ed"
  },
  {
    "url": "uses/index.html",
    "revision": "d34d4dfae065090715b1c57055631f66"
  }
])

// serve all js files with NetworkFirst strategy
workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'js-cache'
  })
)

// serve all css files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.css$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'css-cache'
  })
)

// serve all image files with CacheFirst strategy
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
)
