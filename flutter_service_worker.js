'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4e7143c0ecfa83ba2df375e67cc56151",
"assets/AssetManifest.bin.json": "9e65a169778b3b3aac60683f69db925c",
"assets/AssetManifest.json": "ae7525a56c8dbd2f9f7af4ce7bf7baab",
"assets/assets/font/Poppins-black-italic.otf": "242874089c5dd06f4746659b06e98f51",
"assets/assets/font/Poppins-black.ttf": "2638325e100a2c1c5411c267da4d79b9",
"assets/assets/font/Poppins-bold-italic.otf": "39e02f68500b45efdf9d87f5770ca2cc",
"assets/assets/font/Poppins-bold.ttf": "53f5bf25fd339d41aded7b8a6181196e",
"assets/assets/font/Poppins-italic.otf": "64e838b9ef3275db2341f1b023caf63a",
"assets/assets/font/Poppins-light-italic.otf": "8dc38b6da4179fb6fbd123d815240bb7",
"assets/assets/font/Poppins-light.ttf": "4f5ac5006e88c6bd33ba44bdd71d2c16",
"assets/assets/font/Poppins-medium-italic.otf": "d11c31441864d4a8048a9763160f561b",
"assets/assets/font/Poppins-medium.ttf": "b1f91231be5d2704de64eb59f32c9213",
"assets/assets/font/Poppins-regular.ttf": "cfdac3e045c683955e6bd3afabbb8a60",
"assets/assets/font/Poppins-semi-bold-italic.otf": "9582ae7be5223034f369a722f052e448",
"assets/assets/font/Poppins-semi-bold.ttf": "65f6fb50aafbcd361fc0bfb5b5712f31",
"assets/assets/font/VNM%2520Sans%2520Std.otf": "e2855e21f3d74a54a2f9e904fb5dd74a",
"assets/assets/images/about/background.png": "e5e0ccc504b300bc36c3a3c6c7b02af6",
"assets/assets/images/about/bottom.png": "d5b3171bbe63532f9905fb337d4c8804",
"assets/assets/images/about/mobile_model.png": "45528626c5e0eadd5e8671e7767d3bcf",
"assets/assets/images/about/model.png": "2ccbb1f26477c2dba0452c8e912bdd4d",
"assets/assets/images/career/background.png": "2da2b56ef27753e4cea4a6df8d6f1ad4",
"assets/assets/images/career/dropdown.png": "be9b9e3b5c13d57a7a6330ccad89e889",
"assets/assets/images/career/it_data.png": "75c67af89f084ba5ef3f3aee2b3ecfc6",
"assets/assets/images/career/it_privacy.png": "c7a472dbc4eb7fa213ba06faa36cdc55",
"assets/assets/images/career/model.png": "97651b27268660a2ecb97d897391f18d",
"assets/assets/images/career/off_premise.png": "e6aea0dc1d9af6cba1d117dca745461e",
"assets/assets/images/career/on_premise.png": "e090c106bbfe49b3f5fe30c5d2c025fd",
"assets/assets/images/career/procurement.png": "d06aa2c40682bc780bf6309b96a85cd3",
"assets/assets/images/career/rtm.png": "08ca78f85245ce6b77fc34aecffb76d7",
"assets/assets/images/career/sales.png": "4a76430527176e2fb53d2695dd290a5d",
"assets/assets/images/career/trade-mkt.png": "6dbc9deb2dfad94e5ba2291abdb17703",
"assets/assets/images/coke_fresh.png": "683ff17271cb4b67a591540d94554eb4",
"assets/assets/images/countdown/background.png": "d082c0ab5697ce23838572c05ee93e63",
"assets/assets/images/countdown/bottom.png": "39e562b0cce18f84a7bd686210bb6b39",
"assets/assets/images/en.png": "e667999048e9c8c5c5610d1d33908e52",
"assets/assets/images/essence/background.png": "35d4b5b41bd19a52b3fa0b556b6d85aa",
"assets/assets/images/essence/bottom.png": "536a6a51a86317eef5a3280125666b54",
"assets/assets/images/essence/en1.png": "26cc3d43cbc01eaf03fd131add6d9510",
"assets/assets/images/essence/en2.png": "ad19c9e89c49bbad6aa16df4020117b0",
"assets/assets/images/essence/en2_mobile.png": "9b51ecd2f28b837d02f51b723e0f8887",
"assets/assets/images/essence/mobile_model.png": "04d635080fa90a1f4f09059f7a07aa6c",
"assets/assets/images/essence/mobile_nonsale.png": "bbc086023ecfcf87b8e069dd7f92480b",
"assets/assets/images/essence/mobile_nonsale_vi.png": "aca5379ba4b2b5b1b80d10b7d86d797b",
"assets/assets/images/essence/mobile_sale.png": "2f7f9193e77c3f7bc05530cdfebf56af",
"assets/assets/images/essence/mobile_sale_vi.png": "1745b611b8ec5d933020cf4c9a923ce7",
"assets/assets/images/essence/Model.png": "8c238d62ad8a5597b16a140fd09e0096",
"assets/assets/images/essence/vi1.png": "212b9922cd5ed5e736ce5ea1005ae784",
"assets/assets/images/essence/vi2.png": "191d81970b3f6db141df032ee96015cc",
"assets/assets/images/essence/vi2_mobile.png": "c47b9d96f7e0ac10e285f198e80cd523",
"assets/assets/images/essence/winning.png": "b4cf52ce558111bff1c7c13241b7053d",
"assets/assets/images/essence/winning_mobile.png": "062b0666b341191722cf07e77042f26e",
"assets/assets/images/essence/winning_mobile_vi.png": "a3da18b9f3f3241aa47171f20b156679",
"assets/assets/images/essence/winning_vi.png": "17012586c2a561e2d886475869663156",
"assets/assets/images/fizz_up.png": "e6286d288d9e2d77b1c9889ee643b20a",
"assets/assets/images/footer/facebook.png": "79a461c401a80304d4b0424c7c0e2ea7",
"assets/assets/images/footer/group.png": "6b388bddcd3d5ad7066163fb5ba33ce9",
"assets/assets/images/footer/linkedin.png": "049666eff9682f1076b26f5dcd393ccf",
"assets/assets/images/footer/mail.png": "d7b3ebe706229ecd4d68129bb58662d0",
"assets/assets/images/header.png": "92e7f47ac0a7c457b838a15e39d29b08",
"assets/assets/images/header1.png": "471b3674a165b151d9633bb53a16af02",
"assets/assets/images/image1.png": "ac654f0947172a41263d8ef0e715aa92",
"assets/assets/images/journey/en.png": "bb53aebbb8699fb300d1f8d062f632f1",
"assets/assets/images/journey/vi.png": "4b141084581721ccde0b4231851ecaeb",
"assets/assets/images/key_visual.png": "485d2eb7aca9c4185c835df0676bb467",
"assets/assets/images/landing_page_background.png": "ca01d917a458c5bf28699145a41d7c86",
"assets/assets/images/logo.png": "cee5c644a2d64ec262e2968e25c3d5a3",
"assets/assets/images/logo1.png": "27b37624ae91441b57f8c4fd2fbc4780",
"assets/assets/images/logo_white.png": "cee5c644a2d64ec262e2968e25c3d5a3",
"assets/assets/images/logo_white1.png": "4064814ec67960b1ba0671c11bee7542",
"assets/assets/images/model.png": "415e002326f686915693c7b92913a0da",
"assets/assets/images/overview/background.png": "3b0dc21e1ffb346ea56e7b7744d89368",
"assets/assets/images/overview/light.png": "f4cf2258698cadddc0e2da30531abf4d",
"assets/assets/images/overview/mobile.png": "d060cf9a837750e96718e1eadc9e2eed",
"assets/assets/images/overview/overview1.png": "a726b845a625aa5b7c6d23bdcb0d6bc3",
"assets/assets/images/overview/tag_line.png": "c1c4c7db6206811570edecb81748c937",
"assets/assets/images/overview/title.png": "5ed1a51b09b472f02445befb0d4216a2",
"assets/assets/images/progress/background.png": "07674af7930535d46a5e57af3f44fc4e",
"assets/assets/images/progress/background_mobile.png": "bfb1fae207456d95fc0deb826152e7b7",
"assets/assets/images/progress/bottom.png": "39e562b0cce18f84a7bd686210bb6b39",
"assets/assets/images/progress/model.png": "91452f669868c02ffaf2898c0225040e",
"assets/assets/images/progress/transition.png": "c6c91d4afc4404cbfd7a4ca541ff2223",
"assets/assets/images/vi.png": "7080ff7096fb7e0607b0569e1e2f518f",
"assets/assets/resources/cities.json": "1d8a88d9e04a50822bd658fbddbd5189",
"assets/assets/resources/districts.json": "360e556addc9490d8a2b0e473cdbd11a",
"assets/assets/resources/wards.json": "5ba312848bc13c113988e6fc8cd020ce",
"assets/FontManifest.json": "668befd284eb8d5548a758f0a0bf21fd",
"assets/fonts/MaterialIcons-Regular.otf": "ef5567f948c97d5ada42447e896f2bf8",
"assets/NOTICES": "b2a073655c4abfad1781a40ff965f4c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "cee5c644a2d64ec262e2968e25c3d5a3",
"favicon1.png": "a0408baed6ce7923925f987dcc77b942",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a9788c0ee4b9226a933e4673a9cd2708",
"icons/Icon-192.png": "eb773635e96e6d4c6a778e295b05f147",
"icons/Icon-512.png": "eb773635e96e6d4c6a778e295b05f147",
"icons/Icon-maskable-192.png": "eb773635e96e6d4c6a778e295b05f147",
"icons/Icon-maskable-512.png": "eb773635e96e6d4c6a778e295b05f147",
"index.html": "f4174776130ed449d89997eb668fc358",
"/": "f4174776130ed449d89997eb668fc358",
"main.dart.js": "7dd8684d618fae94478013625216fbeb",
"manifest.json": "ed8fe3a0ceefcd2170d1809d84d6b1a2",
"version.json": "c499922e1a7fc6a98875f5741dc76947"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
