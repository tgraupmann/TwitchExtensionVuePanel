// item: panel
Vue.component(
    'thing-item', {
    props: ['name', 'type'],
    methods: {
    },
    template: `
    <div class="item-thing">
      <span class="item-thing-name">Name: {{name}}</span>
      <span class="item-thing-type">Type: {{type}}</span>
    </span>
    `,
    data() {
        return this.$root;
    }
});
// list: thing
Vue.component(
    'thing-list', {
    props: ['children'],
    methods: {
    },
    template: `
    <div>
      <thing-item v-for="item in children"
        :name="item.name"
        :type="item.type">
      </thing-item>
    </div>
    `,
    data() {
        return this.$root;
    }
});

// section: panel
Vue.component(
    'panel-section', {
    props: [],
    methods: {
    },
    template: `
    <div>
      <thing-list :children="$root._data.things">
      </thing-list>
    </div>
    `,
    data() {
        return this.$root;
    }
});

var vue = undefined;
$(document).ready(function () {
    vue = new Vue({
        el: '#root',
        data: {
            things: [
                {
                    "name": "hello",
                    "type": "world"
                },
                {
                    "name": "thing1",
                    "type": "thing2"
                }
            ]
        }
    });
});
