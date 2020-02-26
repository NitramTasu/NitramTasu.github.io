'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "abb72016b8d1a019345deb6e95124f00",
"/main.dart.js": "892cbd14f0aad67b7a8e6d94e407c679",
"/README.md": "82aca13eed1379367e23b0b7673e16be",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "0cd4c9d954c3e172e7515a3c1053e4e0",
"/.git/config": "f964f983d042a4d41f01daa0c289a960",
"/.git/objects/61/c5fdeee4cc273788512bf1fd30d170d1fb7727": "5c9d0f057858c02dbdf829a25a51fe58",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/9b/e9ef1208dfb4e7e7c1babfcf3e6e4e1efa650f": "41b4784dec5c724ce83aea7bd25fac78",
"/.git/objects/9e/301be3a61df94a469ab7d0abf434a529a63647": "66839b3ae1de77ff46f5f27a9db09fc3",
"/.git/objects/56/cdc1c3d28eadd450492c893f2f603ae6b578b2": "d5d4bb610ae443e4f7abf680489b2640",
"/.git/objects/93/73d74a63544a4f8c81bb76d780466f13ed1a83": "5a2b0673cb08a1c63155a5d229d05673",
"/.git/objects/94/ef254238305522fc22f29503679c0e8b5ac01b": "d66f172b954735231f2da4331a477557",
"/.git/objects/9d/4edebeaee895a7c29bbde7bfc47ae4968800bf": "63c3863b8ebb706abf8b5df267e622ac",
"/.git/objects/ad/4cda58a5ee7e76991c0ec538de9ff2e5bde220": "56cf28797495fa228478351e18dae221",
"/.git/objects/f4/726a5fbb0c0ae9290d688f873095b4ed02e640": "d2a025bd9cc3f7088aca05d9beda6048",
"/.git/objects/ee/8e856a554fc7106211fd136d385551ecbedde4": "685e433b1ea48792d34caa5c439bbb96",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/f2/0a1e2363debef2356f6836605d1629333536ad": "f033476ef022c450e57b7524d3b90d1e",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/7d/e89adb1a6aa11accb9573b52d73a3d81075313": "e00e13c83c3d2185dcacb5d2cfb30840",
"/.git/objects/7c/fee67494b620e2a1c9175296fd163f9acd7ef6": "b495f5f827456234b9e7db00c821e903",
"/.git/objects/87/a08b22cdb47275f8c1c1f686f2b05650ca3309": "460f217a78b6a0042aaf90d1ea320ceb",
"/.git/objects/7b/2a3795324134b60f5355b2cd9351ab1eab229c": "a44e8a2c0b426baf8faee96b6c832f2d",
"/.git/objects/81/7076e4c5237a543edca654d4b29d3934b5c9bf": "19512071da9e84dfa4da9e59f72c3c31",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/08/feb3d78a2b56eed65fb95ba57ab38dbdc64391": "5efe067a38507d17835d3c21ae091db1",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/a7/101de07a1ee9a65f2632011eb82aa5db6f2cae": "1335aa7b8c7556da2b8afb783c95200d",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/ea/6ff545a246caa64074ba809bbc86fcb8589071": "b2fdd5c59953cf2b34eb306ea074c8f7",
"/.git/objects/f9/6f681fcee033b5a4d1a572e80861888baa924a": "35ecd5c154cde0e9fda4f8b85ca1222a",
"/.git/objects/f6/d6b1cecde82b3c5342a815754889bd29ac2657": "bf9a2106ade183c7385624eb1bb915ed",
"/.git/objects/1e/6b18fe8049e4c6b85ee54919759714758db21c": "906e6cd3d2bf4596e9f3d7919cf9aa2c",
"/.git/objects/84/3b8a86d04c4bcc87926ad18d6c3a16bd1e13c3": "79fd430b209847c96a50f8fd02f1a7a5",
"/.git/objects/23/d618e0b5c6cbf477439ab627dce4aa23629d68": "660fa3e883d9861eb1fb0936c56f4a47",
"/.git/objects/8d/dc45d6c3271cbf82c91dcc1a27e3cc96f60d2f": "7be14e074531f00b57dbe155ebf53326",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/40/ce7714242c248ea7b0203b36804ad7cd9079ac": "f031dbe772dacdf6eef58961195a8921",
"/.git/objects/2e/1ebabd5015881d91158f048e7e2b979fbc834e": "7dd3d63079551ef47be1186659aa0ffc",
"/.git/objects/8b/c2d53ce28288d1004a2ea9670fa4571b0343dc": "96cc8c1bdfea4a759dffd59bfb526f8b",
"/.git/objects/7f/f2da50426e778e583fb5710a4865e9cc1637e5": "747804207a5307ae98a828c72343d8fa",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "7a8e59c6dbd794a2bc5e5d15f96bc6a0",
"/.git/logs/refs/heads/gh-pages": "a9a3179149b6b350a142b0f86cff90e7",
"/.git/logs/refs/heads/master": "4be1cbd62e436ab7f7e2ade34ae1613d",
"/.git/logs/refs/remotes/origin/gh-pages": "cc7e4f73e7946f82257878bd82d8b25f",
"/.git/logs/refs/remotes/origin/master": "f55345bbd8149d38df36ffbb11b4686a",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/refs/heads/gh-pages": "0b7c0379250c723319eea554f0e0fed5",
"/.git/refs/heads/master": "af2f8db219a5947939deff57bacd6294",
"/.git/refs/remotes/origin/gh-pages": "0b7c0379250c723319eea554f0e0fed5",
"/.git/refs/remotes/origin/master": "af2f8db219a5947939deff57bacd6294",
"/.git/index": "53c9b0e6ef94d9dc6b81f20cd05b5393",
"/.git/COMMIT_EDITMSG": "3532d11855ca175f717185077d3ca4ca",
"/assets/LICENSE": "d74bb323a25cc8df326f745f64c8f452",
"/assets/AssetManifest.json": "87e64ccb9dedb03e5d213f89c3bcef8f",
"/assets/FontManifest.json": "f90dc4e504658485a2cec090aba9b322",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/github.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"/assets/assets/images/linkedin.png": "1b18d461ce75c75fdb4d7b6ec08b3e65",
"/assets/assets/fonts/Merriweather-Light.ttf": "9341552d8cbfd150ac426cbd065c51a0"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
