'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "abb72016b8d1a019345deb6e95124f00",
"/": "abb72016b8d1a019345deb6e95124f00",
"main.dart.js": "55e5c8c75e82a9a5825447a7311749f9",
"README.md": "82aca13eed1379367e23b0b7673e16be",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0cd4c9d954c3e172e7515a3c1053e4e0",
".git/config": "f964f983d042a4d41f01daa0c289a960",
".git/objects/61/c5fdeee4cc273788512bf1fd30d170d1fb7727": "5c9d0f057858c02dbdf829a25a51fe58",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/0c/7482b60b9d291ce5dab9fc7933033f40ed4ae0": "8d22d2e0a61ce46327cd2074e4b457be",
".git/objects/9b/e9ef1208dfb4e7e7c1babfcf3e6e4e1efa650f": "41b4784dec5c724ce83aea7bd25fac78",
".git/objects/9e/301be3a61df94a469ab7d0abf434a529a63647": "66839b3ae1de77ff46f5f27a9db09fc3",
".git/objects/9e/77772283cfd6547c96e923e9de457b95c91530": "3c5e404abd54a12fe7dbfeccc71c3917",
".git/objects/56/cdc1c3d28eadd450492c893f2f603ae6b578b2": "d5d4bb610ae443e4f7abf680489b2640",
".git/objects/93/73d74a63544a4f8c81bb76d780466f13ed1a83": "5a2b0673cb08a1c63155a5d229d05673",
".git/objects/94/ef254238305522fc22f29503679c0e8b5ac01b": "d66f172b954735231f2da4331a477557",
".git/objects/60/73d8a62a83c5a0b5141e0c8a6052ea0d7511e9": "313e1f21f625f4f31ec4fd6c54a796ce",
".git/objects/9d/4edebeaee895a7c29bbde7bfc47ae4968800bf": "63c3863b8ebb706abf8b5df267e622ac",
".git/objects/d9/d2dd44fba8c7fd21ffa94b3b3ab143ee04c7f6": "0e688995057a9f51642405404c4f5ef5",
".git/objects/ad/4cda58a5ee7e76991c0ec538de9ff2e5bde220": "56cf28797495fa228478351e18dae221",
".git/objects/f4/726a5fbb0c0ae9290d688f873095b4ed02e640": "d2a025bd9cc3f7088aca05d9beda6048",
".git/objects/ee/8e856a554fc7106211fd136d385551ecbedde4": "685e433b1ea48792d34caa5c439bbb96",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/f2/0a1e2363debef2356f6836605d1629333536ad": "f033476ef022c450e57b7524d3b90d1e",
".git/objects/ec/82e5140a20f55bb2d10dbb1c2d5fd574fd9137": "c9cf7e9ba16bd6013f4be560e0466317",
".git/objects/20/3dfbfb60bf4617d944dde86b0fe48650dfe592": "bb21e66d43b64577f3a83bfbaf22fada",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7d/e89adb1a6aa11accb9573b52d73a3d81075313": "e00e13c83c3d2185dcacb5d2cfb30840",
".git/objects/7c/fee67494b620e2a1c9175296fd163f9acd7ef6": "b495f5f827456234b9e7db00c821e903",
".git/objects/73/ba2edc67a79c2618ba8e61005b870e1af59730": "1a6e659643875816b857c63d9234e7b5",
".git/objects/87/a08b22cdb47275f8c1c1f686f2b05650ca3309": "460f217a78b6a0042aaf90d1ea320ceb",
".git/objects/7b/2a3795324134b60f5355b2cd9351ab1eab229c": "a44e8a2c0b426baf8faee96b6c832f2d",
".git/objects/8a/700b86e3a4e1c5506e4fb957a1fa4e1af299ba": "f3724e3827380f597c22845dc3b300b9",
".git/objects/19/fea5b06297682200706fa617707b01f5740a91": "d59a20aa114533dc788e11ee940d9b32",
".git/objects/81/7076e4c5237a543edca654d4b29d3934b5c9bf": "19512071da9e84dfa4da9e59f72c3c31",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/8b3cb58f7ff27ab5187aa192ef71cfc3d5f96e": "0d2a29822424446baa0fbec636df78dc",
".git/objects/53/3c42b22c49d69da41e653fb834f1d126012158": "ce3ada2d2ad16ada52601c674ea3a5bc",
".git/objects/08/08e7624bf0ca940b77a39ee26a846f5527717b": "d14fc67182fb07e33ac7758509abadcc",
".git/objects/08/feb3d78a2b56eed65fb95ba57ab38dbdc64391": "5efe067a38507d17835d3c21ae091db1",
".git/objects/52/9821809fcaf4c9f37291c7fa5a7b68cab3f76a": "c53ca0393475886c8be85575a0166a25",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/a7/101de07a1ee9a65f2632011eb82aa5db6f2cae": "1335aa7b8c7556da2b8afb783c95200d",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/dd/0864558d6355041733484e76a13b59f5922bd3": "8f53fc330d267dd229022fdd282bc176",
".git/objects/af/a9055713b33906714b1a0f09d543b881fd05cc": "6fde3ee9378c89fad8fabeafe42d6f2d",
".git/objects/af/963b155160a410552bb0b70c8463c3159e6bd6": "84939938188451dee9b0ede4428b198b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ea/6ff545a246caa64074ba809bbc86fcb8589071": "b2fdd5c59953cf2b34eb306ea074c8f7",
".git/objects/cd/9f5284b3ae63366ca3c9d6e1b0bc60c22ae24d": "97d61d88795d60ad1f8821ccee97cbbd",
".git/objects/f9/6f681fcee033b5a4d1a572e80861888baa924a": "35ecd5c154cde0e9fda4f8b85ca1222a",
".git/objects/f7/8c0c4dfce96ef12b1db156188cc95d560d809f": "d48fa21958bb025b227aa67cca9a7bc0",
".git/objects/f6/d6b1cecde82b3c5342a815754889bd29ac2657": "bf9a2106ade183c7385624eb1bb915ed",
".git/objects/2c/7ae93005e735bfe2e940e34cc2b7db278e5402": "dfde2cb724026f394c53fb0430307871",
".git/objects/79/5aabdca7e42b55c95bd3808e16821cd80717b1": "2f1ac196496704a1c63d9413e7e9366f",
".git/objects/1e/6b18fe8049e4c6b85ee54919759714758db21c": "906e6cd3d2bf4596e9f3d7919cf9aa2c",
".git/objects/84/3b8a86d04c4bcc87926ad18d6c3a16bd1e13c3": "79fd430b209847c96a50f8fd02f1a7a5",
".git/objects/23/d618e0b5c6cbf477439ab627dce4aa23629d68": "660fa3e883d9861eb1fb0936c56f4a47",
".git/objects/8d/dc45d6c3271cbf82c91dcc1a27e3cc96f60d2f": "7be14e074531f00b57dbe155ebf53326",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/12/c5e01911ac56efb2a23d4fdf0abab053206951": "31b93fc93e58f366f615c002fe1c1915",
".git/objects/40/ce7714242c248ea7b0203b36804ad7cd9079ac": "f031dbe772dacdf6eef58961195a8921",
".git/objects/2e/1ebabd5015881d91158f048e7e2b979fbc834e": "7dd3d63079551ef47be1186659aa0ffc",
".git/objects/47/1911f1771610df01b78f78548613f6802fdc97": "7877478df03d50fd32b3d7e5ae85a52e",
".git/objects/8b/c2d53ce28288d1004a2ea9670fa4571b0343dc": "96cc8c1bdfea4a759dffd59bfb526f8b",
".git/objects/7f/f2da50426e778e583fb5710a4865e9cc1637e5": "747804207a5307ae98a828c72343d8fa",
".git/objects/22/66b7664a15c2aea63b1cadb73a413763d083f4": "475daa592ceedb074aa8caf4a3393914",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b2456b960f88aba676e0e70434bd06c4",
".git/logs/refs/heads/gh-pages": "a9a3179149b6b350a142b0f86cff90e7",
".git/logs/refs/heads/master": "4dcf949b837b5e88019531a511cf63de",
".git/logs/refs/remotes/origin/gh-pages": "cc7e4f73e7946f82257878bd82d8b25f",
".git/logs/refs/remotes/origin/master": "cafc57d92c881245dab03c49612e4fda",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/gh-pages": "0b7c0379250c723319eea554f0e0fed5",
".git/refs/heads/master": "a4f4c3a1a74d4b21398ed2a0e8a05b42",
".git/refs/remotes/origin/gh-pages": "0b7c0379250c723319eea554f0e0fed5",
".git/refs/remotes/origin/master": "a4f4c3a1a74d4b21398ed2a0e8a05b42",
".git/index": "fc3cc8ef6bdb9b604658b5cac4993d93",
".git/COMMIT_EDITMSG": "3532d11855ca175f717185077d3ca4ca",
"assets/LICENSE": "d74bb323a25cc8df326f745f64c8f452",
"assets/AssetManifest.json": "87e64ccb9dedb03e5d213f89c3bcef8f",
"assets/NOTICES": "7e91f832f05149e2e603607b960f335e",
"assets/FontManifest.json": "f90dc4e504658485a2cec090aba9b322",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/github.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/assets/images/linkedin.png": "1b18d461ce75c75fdb4d7b6ec08b3e65",
"assets/assets/fonts/Merriweather-Light.ttf": "9341552d8cbfd150ac426cbd065c51a0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
