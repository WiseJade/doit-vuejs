// 할일 #1
// sibling-component 를 이름으로 갖는 새로운 컴포넌트를 아래에 등록해보세요.
// options : template, props
var cmp1 = Vue.component("sibling-component", {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p><button v-on:click="go">button</button>',
  methods: {
    go: function () {
      eventBus.$emit("eventBus1", 40);
    },
  },
});

var cmp2 = Vue.component("child-component", {
  props: ["propsdata"],
  template: "<p>{{ propsdata }}</p>",
  methods: {
    created: function () {
      eventBus.$on("eventBus2", function (e) {
        this.template = '<p>modified</p>'
      });
    },
  },
});

var eventBus = new Vue();

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue! passed from Parent Component",

    // 할일 #2
    // data 속성을 1개 더 지정하고 (예: anotherMessage) 임의의 문자열을 값으로 대입해보세요.
    // 새로 지정한 data 속성은 위 sibling-component에 props로 전달합니다.
    anotherMessage: "I'm another message",
  },
});
