# hello-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

* For packing to Twitch rename `index.html` to `panel.html` and update the body.

```
<body>
  <div id="app" class="full-height"></div>
  <script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"></script>
  <script src="build.js"></script>
</body>
```
