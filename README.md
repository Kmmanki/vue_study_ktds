
# VUE.js  2021-11-20

백명숙 강사님 블로그 : https://blog.naver.com/vega2k

 환경설정 : visual Studio code, node[v14.17.3]

vue cli  : npm install -g @vue/cli

- babel: javascript Compiler 
  vue는 ES6 사용 ES6는 호환성 문제가 있을 수 있으므로 ES5로 재컴파일 한다.
- WebPack: Module Bundler, Dev Server 제공
  번들: 여러개의 css를 하나로 묶어준다. 즉 하나의 파일만 import 하면 된다.

vue와 Spring의 다른점 : spring은 서버 사이드 이기 때문에 하나의 서버만 필요 하지만, vue는 Rest API 형태의 서버1개 클라이언트 컨트롤하는 서버1개가 필요 하다 .

1. Visual Studio Code Plug In 설치하기 1. Vue.js Extension Pack (https://marketplace.visualstudio.com/items?itemName=shekhardtu.vuejspack) Vetur 도움말 https://flaviocopes.com/vue-vscode/

2. Vue.js Auto Import ( https://marketplace.visualstudio.com/items?itemName=ishiyama.vue-autoimport ) 

3. Vue 2 Snippets https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets 

4. className Completion in CSS https://marketplace.visualstudio.com/items?itemName=zitup.classnametocss

---



## ES6 문법

var 은 스코프가 전체이나 let은 블럭단위의 스코프를 가진다.
교재 23p

`//map(function()), filter(), reduce(), foreach()`

`let my_arr = [10,20,30,40,50]`
`let result = my_arr.map(val => val*3)`
`console.log(result)) // [30,60,90,120,150]`

`let my_arr = [10,20,30,40,50]`
`let result = my_arr.map((val, idx) => val+idx)`
`console.log(result)//[10,21,32,43,54]`

`let my_arr = [10,20,30,40,50]`
`let result  = my_arr.filter(val => val % 3 === 0)`
`console.log(result) //[30]`



`let my_arr = [10,20,30,40,50]`
`let result  = my_arr.reduce((prev, curr) => prev + curr)`
`console.log(result) //150 즉 누계`

`let my_arr = [10,20,30,40,50]`
`let result  = my_arr.forEach(val => console.log(val))`



### Arrow 함수으 주의사항

`function BlackDog() {`
  `this.name = '흰둥이';`
  `return {`
    `name:'검둥이',`
    `bark: function() {`
      `console.log(this.name + ' 멍멍!');`
    `}`
  `}`
`}`

`const blackDog = new BlackDog();`
`blackDog.bark(); // 검둥이 멍멍! 현재 객체의 name을 가져옴`

`function WhiteDog() {`
  `this.name = '흰둥이';`
  `return {`
    `name:'검둥이',`
    `bark: () => {`
      `console.log(this.name + ' 멍멍!');`
    `}`
  `}`
`}`
`const whiteDog = new WhiteDog();`
`whiteDog.bark(); // 흰둥이 멍멍!`



### 반복분

`let my_arr = [10,20,30,40,50]`

`//val`
`for(let val of my_arr){`
  `console.log(val)`
`}`

`//val == index`
`for(let idx in my_arr){`
  `console.log(idx)`
`}`



### default value pram 

`let volume = (l, w = 3, h = 4 ) => (l * w * h);`
`console.log(volume(2)) //output: 2`

`let volume2 = (l=2, w, h = 4 ) => (l * w * h);`
`console.log(volume2(w =2)) //output: Nan`
`//디폴트가 아니라면 앞부터` 



### 동적 문자열 만들기

`let host = "aa.com"`
`let port = 8080`
`let database = "myDB"`

`ES5`
`const db1 = 'http://' + host + ':' + port + '/' + database;`

`ES6` 
`//template Literals`

`const db2 = "backtic" http://${host}:${port}/${database} "backtic";`
`console.log(db2)`



### 언패킹 (변수의 다중 할당, 비구조화 할당)


`//배열의 비구조화`
`let a,b;`
`[a,b] = [1,2]`
`//a =1 , b=2`

`let c,d,rest;`
`[c,d, ...rest] = [1,2,3,4,5,6,7]`
`console.log(rest) //[3,4,5,6,7]`

`//객체의 비구조화`
`let obj = {p:42, q:true}`
`let {p, q} = obj //property 이름은 반드시 같아야한다. let {a,b} 불가`
`console.log(p)`
`console.log(q)`



### Sprade 연산자


`//sprade를 사용한 리스트 추가`
`const odd = [1, 3, 5 ];` 
`const nums = [2, ...odd, 4 , 6];` 

`//sprade를 이용한 언패킹`
`let c,d,rest;`
`[c,d, ...rest] = [1,2,3,4,5,6,7]`

### slice vs splice
 `let my_arr = [10,20,30,40,50]`

`console.log(my_arr.slice(2))`
`console.log(my_arr) //[10, 20, 30, 40, 50]`
`// console.log(my_arr.splice(2))`
`console.log(my_arr) //[30, 40, 50]`
`
  ----

## VUE 

프로젝트 생성: vue create projactName

프로젝트 실행(개발모드 시작): npm run serve

배포를 위한 번들링: npm run build

localhost:8080을 접속하면 public/index.html 호출
`<div id="app"></div>`

/src/main.js
`new Vue({`
 `render: h => h(App),`
`}).$mount('#app')`

즉 index.html 의 id = app ---main.js를 통해 호출---> app.vue ----import---> helloworld.vue  

`//app.vue`
`<HelloWorld title-msg="o Your Vue.js App"/>// 부모가 msg 파리미터줌

`//helloworld.vue`
`//탬플릿``
``<1>{{ tilteMsg }}</1>`` //부모가 준 값 출력
``//탬플릿`

`스크립트`
``export default {`
  `name: 'HelloWorld',`
    `//부모가 전달해준 값을 받는 값들`
  `props: {`
    `//msg라는 키 값으로 문자열 받음` 
    `msg: String`
  `}`
`}`
`</스크립트>`

----



# 2021-11-21
# vue-todo
node moduls는 라이브러리 모음이기에 깃에 올리거나 할 때는 올리지 않고 받아서 npm install 필요 모듈들을 설치받는다.
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### computed vs methods
computed: 재연산 시 state가 변하지 않는다면 캐시의 값을 가져와 쓰고, 변하였다면 재연산
method: 항상 재연산

### express와 CORS
Express는 node의 경량화 프레임워크로 RestAPI역할을 위해 생성
CORS:
- 기본적으로 single origin Policy(동일한 서버, 포트로 주고 받는 정책) 때문에 Vue(prot 8080)가 Expess(prot 4500)로 데이터의 통신이 불가능하다 이를 해결하기위한 라이브러리 Spring Boot의 @crossorigin의 역할을 한다.

### RestAPI
PACH vs PUT
PACH : 데이터의 일부 항목만 변경
PUT: 데이터의 전체 변경

### Promise
아래의 변수(resolve, reject, finally)를 가지고 있는 객체 
- 작업이 성공하면 resolve함수를 호출하여 resolve의 인자값을 then으로 받게 되고
- 작업에 실패하면 reject 함수를 호출하여 reject의 인자값을 catch로 받게 된다.
- 성공, 실패 여부에 관계없이 항상 처리 되게 하려면 finally로 받아서 처리할 수도 있다

client(vue)가 vue-axios를 통해 axios를 관리하고 axios가 Express의 RestApi호출하는 구조

### dispacher vs commit
commit : mutation 내부에서 상태 바뀌었을 때 호출
dispach: action 서버에서 받아온 값을 변경할 때 호출 