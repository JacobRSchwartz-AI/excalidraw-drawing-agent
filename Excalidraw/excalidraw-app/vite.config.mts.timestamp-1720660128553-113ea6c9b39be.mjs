// vite.config.mts
import { defineConfig, loadEnv } from "file:///C:/Users/manag/Documents/GitHub/Magiscribe2/Excalidraw/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/manag/Documents/GitHub/Magiscribe2/Excalidraw/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgrPlugin from "file:///C:/Users/manag/Documents/GitHub/Magiscribe2/Excalidraw/node_modules/vite-plugin-svgr/dist/index.mjs";
import { ViteEjsPlugin } from "file:///C:/Users/manag/Documents/GitHub/Magiscribe2/Excalidraw/node_modules/vite-plugin-ejs/index.js";
import { VitePWA } from "file:///C:/Users/manag/Documents/GitHub/Magiscribe2/Excalidraw/node_modules/vite-plugin-pwa/dist/index.js";
import checker from "file:///C:/Users/manag/Documents/GitHub/Magiscribe2/Excalidraw/node_modules/vite-plugin-checker/dist/esm/main.js";
import { createHtmlPlugin } from "file:///C:/Users/manag/Documents/GitHub/Magiscribe2/Excalidraw/node_modules/vite-plugin-html/dist/index.mjs";
import { nodePolyfills } from "file:///C:/Users/manag/Documents/GitHub/Magiscribe2/Excalidraw/node_modules/vite-plugin-node-polyfills/dist/index.js";
var envVars = loadEnv("", `../`);
var vite_config_default = defineConfig({
  server: {
    port: Number(envVars.VITE_APP_PORT || 3001),
    // open the browser
    open: true
  },
  // We need to specify the envDir since now there are no
  //more located in parallel with the vite.config.ts file but in parent dir
  envDir: "../",
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        // Creating separate chunk for locales except for en and percentages.json so they
        // can be cached at runtime and not merged with
        // app precache. en.json and percentages.json are needed for first load
        // or fallback hence not clubbing with locales so first load followed by offline mode works fine. This is how CRA used to work too.
        manualChunks(id) {
          if (id.includes("packages/excalidraw/locales") && id.match(/en.json|percentages.json/) === null) {
            const index = id.indexOf("locales/");
            return `locales/${id.substring(index + 8)}`;
          }
        }
      }
    },
    sourcemap: true
  },
  plugins: [
    nodePolyfills(),
    react(),
    checker({
      typescript: true,
      eslint: envVars.VITE_APP_ENABLE_ESLINT === "false" ? void 0 : { lintCommand: 'eslint "./**/*.{js,ts,tsx}"' },
      overlay: {
        initialIsOpen: envVars.VITE_APP_COLLAPSE_OVERLAY === "false",
        badgeStyle: "margin-bottom: 4rem; margin-left: 1rem"
      }
    }),
    svgrPlugin(),
    ViteEjsPlugin(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        /* set this flag to true to enable in Development mode */
        enabled: false
      },
      workbox: {
        // Don't push fonts and locales to app precache
        globIgnores: ["fonts.css", "**/locales/**", "service-worker.js"],
        runtimeCaching: [
          {
            urlPattern: new RegExp("/.+.(ttf|woff2|otf)"),
            handler: "CacheFirst",
            options: {
              cacheName: "fonts",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 90
                // <== 90 days
              }
            }
          },
          {
            urlPattern: new RegExp("fonts.css"),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "fonts",
              expiration: {
                maxEntries: 50
              }
            }
          },
          {
            urlPattern: new RegExp("locales/[^/]+.js"),
            handler: "CacheFirst",
            options: {
              cacheName: "locales",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30
                // <== 30 days
              }
            }
          }
        ]
      },
      manifest: {
        short_name: "Excalidraw",
        name: "Excalidraw",
        description: "Excalidraw is a whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "apple-touch-icon.png",
            type: "image/png",
            sizes: "180x180"
          },
          {
            src: "favicon-32x32.png",
            sizes: "32x32",
            type: "image/png"
          },
          {
            src: "favicon-16x16.png",
            sizes: "16x16",
            type: "image/png"
          }
        ],
        start_url: "/",
        display: "standalone",
        theme_color: "#121212",
        background_color: "#ffffff",
        file_handlers: [
          {
            action: "/",
            accept: {
              "application/vnd.excalidraw+json": [".excalidraw"]
            }
          }
        ],
        share_target: {
          action: "/web-share-target",
          method: "POST",
          enctype: "multipart/form-data",
          params: {
            files: [
              {
                name: "file",
                accept: [
                  "application/vnd.excalidraw+json",
                  "application/json",
                  ".excalidraw"
                ]
              }
            ]
          }
        },
        screenshots: [
          {
            src: "/screenshots/virtual-whiteboard.png",
            type: "image/png",
            sizes: "462x945"
          },
          {
            src: "/screenshots/wireframe.png",
            type: "image/png",
            sizes: "462x945"
          },
          {
            src: "/screenshots/illustration.png",
            type: "image/png",
            sizes: "462x945"
          },
          {
            src: "/screenshots/shapes.png",
            type: "image/png",
            sizes: "462x945"
          },
          {
            src: "/screenshots/collaboration.png",
            type: "image/png",
            sizes: "462x945"
          },
          {
            src: "/screenshots/export.png",
            type: "image/png",
            sizes: "462x945"
          }
        ]
      }
    }),
    createHtmlPlugin({
      minify: true
    })
  ],
  publicDir: "../public"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbWFuYWdcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxNYWdpc2NyaWJlMlxcXFxFeGNhbGlkcmF3XFxcXGV4Y2FsaWRyYXctYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtYW5hZ1xcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXE1hZ2lzY3JpYmUyXFxcXEV4Y2FsaWRyYXdcXFxcZXhjYWxpZHJhdy1hcHBcXFxcdml0ZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9tYW5hZy9Eb2N1bWVudHMvR2l0SHViL01hZ2lzY3JpYmUyL0V4Y2FsaWRyYXcvZXhjYWxpZHJhdy1hcHAvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBzdmdyUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCI7XG5pbXBvcnQgeyBWaXRlRWpzUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLWVqc1wiO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcbmltcG9ydCBjaGVja2VyIGZyb20gXCJ2aXRlLXBsdWdpbi1jaGVja2VyXCI7XG5pbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLWh0bWxcIjtcbmltcG9ydCB7IG5vZGVQb2x5ZmlsbHMgfSBmcm9tICd2aXRlLXBsdWdpbi1ub2RlLXBvbHlmaWxscyc7XG5cbi8vIFRvIGxvYWQgLmVudi5sb2NhbCB2YXJpYWJsZXNcbmNvbnN0IGVudlZhcnMgPSBsb2FkRW52KFwiXCIsIGAuLi9gKTtcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiBOdW1iZXIoZW52VmFycy5WSVRFX0FQUF9QT1JUIHx8IDMwMDEpLFxuICAgIC8vIG9wZW4gdGhlIGJyb3dzZXJcbiAgICBvcGVuOiB0cnVlLFxuICB9LFxuICAvLyBXZSBuZWVkIHRvIHNwZWNpZnkgdGhlIGVudkRpciBzaW5jZSBub3cgdGhlcmUgYXJlIG5vXG4gIC8vbW9yZSBsb2NhdGVkIGluIHBhcmFsbGVsIHdpdGggdGhlIHZpdGUuY29uZmlnLnRzIGZpbGUgYnV0IGluIHBhcmVudCBkaXJcbiAgZW52RGlyOiBcIi4uL1wiLFxuICBidWlsZDoge1xuICAgIG91dERpcjogXCJidWlsZFwiLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBDcmVhdGluZyBzZXBhcmF0ZSBjaHVuayBmb3IgbG9jYWxlcyBleGNlcHQgZm9yIGVuIGFuZCBwZXJjZW50YWdlcy5qc29uIHNvIHRoZXlcbiAgICAgICAgLy8gY2FuIGJlIGNhY2hlZCBhdCBydW50aW1lIGFuZCBub3QgbWVyZ2VkIHdpdGhcbiAgICAgICAgLy8gYXBwIHByZWNhY2hlLiBlbi5qc29uIGFuZCBwZXJjZW50YWdlcy5qc29uIGFyZSBuZWVkZWQgZm9yIGZpcnN0IGxvYWRcbiAgICAgICAgLy8gb3IgZmFsbGJhY2sgaGVuY2Ugbm90IGNsdWJiaW5nIHdpdGggbG9jYWxlcyBzbyBmaXJzdCBsb2FkIGZvbGxvd2VkIGJ5IG9mZmxpbmUgbW9kZSB3b3JrcyBmaW5lLiBUaGlzIGlzIGhvdyBDUkEgdXNlZCB0byB3b3JrIHRvby5cbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaWQuaW5jbHVkZXMoXCJwYWNrYWdlcy9leGNhbGlkcmF3L2xvY2FsZXNcIikgJiZcbiAgICAgICAgICAgIGlkLm1hdGNoKC9lbi5qc29ufHBlcmNlbnRhZ2VzLmpzb24vKSA9PT0gbnVsbFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZC5pbmRleE9mKFwibG9jYWxlcy9cIik7XG4gICAgICAgICAgICAvLyBUYWtpbmcgdGhlIHN1YnN0cmluZyBhZnRlciBcImxvY2FsZXMvXCJcbiAgICAgICAgICAgIHJldHVybiBgbG9jYWxlcy8ke2lkLnN1YnN0cmluZyhpbmRleCArIDgpfWA7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIG5vZGVQb2x5ZmlsbHMoKSwgXG4gICAgcmVhY3QoKSxcbiAgICBjaGVja2VyKHtcbiAgICAgIHR5cGVzY3JpcHQ6IHRydWUsXG4gICAgICBlc2xpbnQ6XG4gICAgICAgIGVudlZhcnMuVklURV9BUFBfRU5BQkxFX0VTTElOVCA9PT0gXCJmYWxzZVwiXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IHsgbGludENvbW1hbmQ6ICdlc2xpbnQgXCIuLyoqLyoue2pzLHRzLHRzeH1cIicgfSxcbiAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgaW5pdGlhbElzT3BlbjogZW52VmFycy5WSVRFX0FQUF9DT0xMQVBTRV9PVkVSTEFZID09PSBcImZhbHNlXCIsXG4gICAgICAgIGJhZGdlU3R5bGU6IFwibWFyZ2luLWJvdHRvbTogNHJlbTsgbWFyZ2luLWxlZnQ6IDFyZW1cIixcbiAgICAgIH0sXG4gICAgfSksXG4gICAgc3ZnclBsdWdpbigpLFxuICAgIFZpdGVFanNQbHVnaW4oKSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZTogXCJhdXRvVXBkYXRlXCIsXG4gICAgICBkZXZPcHRpb25zOiB7XG4gICAgICAgIC8qIHNldCB0aGlzIGZsYWcgdG8gdHJ1ZSB0byBlbmFibGUgaW4gRGV2ZWxvcG1lbnQgbW9kZSAqL1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgLy8gRG9uJ3QgcHVzaCBmb250cyBhbmQgbG9jYWxlcyB0byBhcHAgcHJlY2FjaGVcbiAgICAgICAgZ2xvYklnbm9yZXM6IFtcImZvbnRzLmNzc1wiLCBcIioqL2xvY2FsZXMvKipcIiwgXCJzZXJ2aWNlLXdvcmtlci5qc1wiXSxcbiAgICAgICAgcnVudGltZUNhY2hpbmc6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiBuZXcgUmVnRXhwKFwiLy4rLih0dGZ8d29mZjJ8b3RmKVwiKSxcbiAgICAgICAgICAgIGhhbmRsZXI6IFwiQ2FjaGVGaXJzdFwiLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBjYWNoZU5hbWU6IFwiZm9udHNcIixcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDUwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDkwLCAvLyA8PT0gOTAgZGF5c1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IG5ldyBSZWdFeHAoXCJmb250cy5jc3NcIiksXG4gICAgICAgICAgICBoYW5kbGVyOiBcIlN0YWxlV2hpbGVSZXZhbGlkYXRlXCIsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogXCJmb250c1wiLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogNTAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsUGF0dGVybjogbmV3IFJlZ0V4cChcImxvY2FsZXMvW14vXSsuanNcIiksXG4gICAgICAgICAgICBoYW5kbGVyOiBcIkNhY2hlRmlyc3RcIixcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiBcImxvY2FsZXNcIixcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDUwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDMwLCAvLyA8PT0gMzAgZGF5c1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIHNob3J0X25hbWU6IFwiRXhjYWxpZHJhd1wiLFxuICAgICAgICBuYW1lOiBcIkV4Y2FsaWRyYXdcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJFeGNhbGlkcmF3IGlzIGEgd2hpdGVib2FyZCB0b29sIHRoYXQgbGV0cyB5b3UgZWFzaWx5IHNrZXRjaCBkaWFncmFtcyB0aGF0IGhhdmUgYSBoYW5kLWRyYXduIGZlZWwgdG8gdGhlbS5cIixcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYXBwbGUtdG91Y2gtaWNvbi5wbmdcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxODB4MTgwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiZmF2aWNvbi0zMngzMi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjMyeDMyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImZhdmljb24tMTZ4MTYucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxNngxNlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBzdGFydF91cmw6IFwiL1wiLFxuICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgdGhlbWVfY29sb3I6IFwiIzEyMTIxMlwiLFxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgZmlsZV9oYW5kbGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFjdGlvbjogXCIvXCIsXG4gICAgICAgICAgICBhY2NlcHQ6IHtcbiAgICAgICAgICAgICAgXCJhcHBsaWNhdGlvbi92bmQuZXhjYWxpZHJhdytqc29uXCI6IFtcIi5leGNhbGlkcmF3XCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBzaGFyZV90YXJnZXQ6IHtcbiAgICAgICAgICBhY3Rpb246IFwiL3dlYi1zaGFyZS10YXJnZXRcIixcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGVuY3R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgZmlsZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgIGFjY2VwdDogW1xuICAgICAgICAgICAgICAgICAgXCJhcHBsaWNhdGlvbi92bmQuZXhjYWxpZHJhdytqc29uXCIsXG4gICAgICAgICAgICAgICAgICBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgIFwiLmV4Y2FsaWRyYXdcIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzY3JlZW5zaG90czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvc2NyZWVuc2hvdHMvdmlydHVhbC13aGl0ZWJvYXJkLnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjQ2Mng5NDVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvc2NyZWVuc2hvdHMvd2lyZWZyYW1lLnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjQ2Mng5NDVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvc2NyZWVuc2hvdHMvaWxsdXN0cmF0aW9uLnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjQ2Mng5NDVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvc2NyZWVuc2hvdHMvc2hhcGVzLnBuZ1wiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjQ2Mng5NDVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvc2NyZWVuc2hvdHMvY29sbGFib3JhdGlvbi5wbmdcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI0NjJ4OTQ1XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL3NjcmVlbnNob3RzL2V4cG9ydC5wbmdcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI0NjJ4OTQ1XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgY3JlYXRlSHRtbFBsdWdpbih7XG4gICAgICBtaW5pZnk6IHRydWUsXG4gICAgfSksXG4gIF0sXG4gIHB1YmxpY0RpcjogXCIuLi9wdWJsaWNcIixcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtWixTQUFTLGNBQWMsZUFBZTtBQUN6YixPQUFPLFdBQVc7QUFDbEIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sYUFBYTtBQUNwQixTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHFCQUFxQjtBQUc5QixJQUFNLFVBQVUsUUFBUSxJQUFJLEtBQUs7QUFFakMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTSxPQUFPLFFBQVEsaUJBQWlCLElBQUk7QUFBQTtBQUFBLElBRTFDLE1BQU07QUFBQSxFQUNSO0FBQUE7QUFBQTtBQUFBLEVBR0EsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFLTixhQUFhLElBQUk7QUFDZixjQUNFLEdBQUcsU0FBUyw2QkFBNkIsS0FDekMsR0FBRyxNQUFNLDBCQUEwQixNQUFNLE1BQ3pDO0FBQ0Esa0JBQU0sUUFBUSxHQUFHLFFBQVEsVUFBVTtBQUVuQyxtQkFBTyxXQUFXLEdBQUcsVUFBVSxRQUFRLENB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
