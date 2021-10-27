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
    </div>
    `,
    data() {
        return {};
    }
});
// list: thing
Vue.component(
    'thing-list', {
    props: ['things'],
    methods: {
    },
    template: `
    <div>
      <thing-item v-for="(item, index) in things"
        :key="index"
        :name="item.name"
        :type="item.type">
      </thing-item>
    </div>
    `,
    data() {
        return {};
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
      <thing-list :things="$root._data.things">
      </thing-list>
    </div>
    `,
    data() {
        return {};
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
