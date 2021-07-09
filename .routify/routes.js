
/**
 * @roxi/routify 2.18.0
 * File generated Sat Jul 10 2021 02:16:30 GMT+0800 (Waktu Indonesia Tengah)
 */

export const __version = "2.18.0"
export const __timestamp = "2021-07-09T18:16:30.308Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isFallback": true,
      "path": "/_fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/guide/index",
          "id": "_guide_index",
          "component": () => import('../src/pages/guide/index.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/guide/routify",
          "id": "_guide_routify",
          "component": () => import('../src/pages/guide/routify.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/guide/vite",
          "id": "_guide_vite",
          "component": () => import('../src/pages/guide/vite.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "ownMeta": {
        "index": 50
      },
      "meta": {
        "index": 50,
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/guide",
      "id": "_guide__layout",
      "component": () => import('../src/pages/guide/_layout.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

