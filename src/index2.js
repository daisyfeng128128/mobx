import { observable, computed, autorun, when, action } from 'mobx';
// import { observable, isArrayLike, computed, autorun, when, reaction, action, runInAction } from 'mobx';
// const arr = observable(['aa', 'bb', 'cc']);
// const obj = observable({ a: 1, b: 2 });
// const map = observable(new Map());
// const bool = observable.box(true);
// const num = observable.box(11);
// const str = observable.box('hello');

// console.log(arr, Array.isArray(arr), isArrayLike(arr));
// console.log(obj);
// console.log(map);
// bool.set(false);
// num.set(20);
// str.set('world');
// console.log(bool.get());
// console.log(num.get());
// console.log(str.get());
class Store {
  @observable array = [];
  @observable obj = {};
  @observable map = new Map();
  @observable str = 'hello';
  @observable num = 10;
  @observable bool = true;
  // computed
  @computed get mixed () {
    return store.str + '/' + store.num;
  }
  // @action
  // Bar = () => {
  //   this.str = 'aa';
  //   this.num = 100;
  // }
}

var store = new Store();
// var foo = computed(function () {
//   return store.str + '/' + store.num;
// });
// console.log(foo.get())
// foo.observe(function (change) {
//   // console.log(change);
// });
// store.str = 'world';
// store.num = 30;
// console.log(foo.get());
autorun(() => {
  console.log('&&&&&&&&&&&&&&')
  // console.log(store.str + '/' + store.num);
  console.log(store.mixed)
});

// store.str = 'world';
// store.num = 30;
// --------------
when(() => store.bool, () => console.log('this is true'));
// store.bool = true;

// reaction(() => [store.str, store.bool], arr => console.log(arr));
// store.str = 'world';
// store.num = 30;

// var bar = store.bar;
// bar();

// runInAction('modify', () => {
//   store.str = 'haha';
//   store.num = 200;
// });
