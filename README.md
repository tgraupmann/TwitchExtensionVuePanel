# Intro

In order for Vue to work on Twitch we need to use the Vue runtime. That means the components will need to be compiled before uploading.

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

* Migrate the [public](public) Vue files over to [hello-vue/src/components/App.vue](hello-vue/src/components/App.vue) and [hello-vue/src/components](hello-vue/src/components).

* Create the production build

```
npm run build
```
