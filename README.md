# Intro

In order for Vue to work on Twitch we need to use the Vue runtime. That means the components will need to be compiled before uploading.

![image_1](images/image_1.png)

* Check out the [Webpack and vue-cli tutorial](https://laracasts.com/series/learn-vue-2-step-by-step/episodes/16)

# Setup

**Setup the Vue CLI**

```
npm i -g @vue/cli
```

**Setup Webpack**

* Get the [Vue Loader](https://vue-loader.vuejs.org/)

```
npm install -D vue-loader vue-template-compiler
```

* Create a new webpack project

```
vue init webpack-simple hello-vue
```

* Get started

```
To get started:

  cd hello-vue
  npm install
  npm run dev
```

* Migrate the [public](public) Vue files over to [hello-vue/src/App.vue](hello-vue/src/App.vue) and [hello-vue/src/components](hello-vue/src/components).

* Create the production build

```
npm run build
```

* For packaging to Twitch copy the output from `hello-vue/index.html` to `hello-vue/dist/panel.html` and update the body.

```
<body>
  <div id="app" class="full-height"></div>
  <script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"></script>
  <script src="build.js"></script>
</body>
```

* You can now zip the contents of the `hello-vue/dist` output folder and upload to the Twitch admin console to update your Twitch extension.
