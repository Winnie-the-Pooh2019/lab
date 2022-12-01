(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-client-core-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './ktor-ktor-http-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'lab'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'lab'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'lab'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'lab'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'lab'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'lab'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'lab'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'lab'.");
    }
    root.lab = factory(typeof lab === 'undefined' ? {} : lab, this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-client-core-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['ktor-ktor-http-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_client_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_http) {
  'use strict';
  //region block: imports
  var objectMeta = kotlin_kotlin.$_$.s6;
  var println = kotlin_kotlin.$_$.r5;
  var to = kotlin_kotlin.$_$.o9;
  var hashMapOf = kotlin_kotlin.$_$.y3;
  var CoroutineImpl = kotlin_kotlin.$_$.l5;
  var Unit_getInstance = kotlin_kotlin.$_$.x2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v4;
  var bodyAsText$default = kotlin_io_ktor_ktor_client_core.$_$.a;
  var classMeta = kotlin_kotlin.$_$.z5;
  var SuspendFunction0 = kotlin_kotlin.$_$.m5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var Pair = kotlin_kotlin.$_$.w8;
  var THROW_CCE = kotlin_kotlin.$_$.y8;
  var Iterable = kotlin_kotlin.$_$.a3;
  var isInterface = kotlin_kotlin.$_$.l6;
  var Map = kotlin_kotlin.$_$.d3;
  var copyToArray = kotlin_kotlin.$_$.q3;
  var json = kotlin_kotlin.$_$.p6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.p3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var isArray = kotlin_kotlin.$_$.i6;
  var isObject = kotlin_kotlin.$_$.m6;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.p2;
  var startCoroutine = kotlin_kotlin.$_$.p5;
  var Continuation = kotlin_kotlin.$_$.e5;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var async$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var HttpClient$default = kotlin_io_ktor_ktor_client_core.$_$.b;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.c;
  var url = kotlin_io_ktor_ktor_client_core.$_$.d;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.e;
  var SuspendFunction1 = kotlin_kotlin.$_$.n5;
  //endregion
  //region block: pre-declaration
  main$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  main$lambda$slambda.prototype.constructor = main$lambda$slambda;
  fetchAsync$slambda.prototype = Object.create(CoroutineImpl.prototype);
  fetchAsync$slambda.prototype.constructor = fetchAsync$slambda;
  //endregion
  function Fetch() {
    Fetch_instance = this;
    this.fetch_1 = require('node-fetch');
  }
  Fetch.prototype.get_fetch_irbedt_k$ = function () {
    return this.fetch_1;
  };
  Fetch.$metadata$ = objectMeta('Fetch');
  var Fetch_instance;
  function Fetch_getInstance() {
    if (Fetch_instance == null)
      new Fetch();
    return Fetch_instance;
  }
  function main() {
    println(greeting('untitled'));
    var express = require('express');
    var http = require('http');
    var path = require('path');
    var app = express();
    var router = express.Router();
    router.get('/', main$lambda());
    router.get('/async', main$lambda_0());
    app.set('views', path.join(__dirname, '../../../../../src/main/resources'));
    app.set('view engine', 'ejs');
    http.createServer(app);
    app.listen(3000);
    app.use('/', router);
  }
  function greeting(name) {
    return 'Hello, ' + name;
  }
  function main$lambda() {
    return function (_anonymous_parameter_0__qggqh8, res) {
      return res.send(UJSON_getInstance().stringify_6t4kzm_k$(hashMapOf([to('hello', 'world')])));
    };
  }
  function main$lambda$slambda($resp, $res, resultContinuation) {
    this.$resp_1 = $resp;
    this.$res_1 = $res;
    CoroutineImpl.call(this, resultContinuation);
  }
  main$lambda$slambda.prototype.invoke_pbb09x_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  main$lambda$slambda.prototype.invoke_34if6s_k$ = function ($cont) {
    return this.invoke_pbb09x_k$($cont);
  };
  main$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.state_1 = 1;
            suspendResult = fetchAsync(this.$resp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.d0__1 = suspendResult;
            this.$res_1.send;
            this.state_1 = 2;
            suspendResult = bodyAsText$default(this.d0__1, null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 3) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  main$lambda$slambda.prototype.create_lvr374_k$ = function (completion) {
    var i = new main$lambda$slambda(this.$resp_1, this.$res_1, completion);
    return i;
  };
  main$lambda$slambda.$metadata$ = classMeta('main$lambda$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function main$lambda$slambda_0($resp, $res, resultContinuation) {
    var i = new main$lambda$slambda($resp, $res, resultContinuation);
    var l = function ($cont) {
      return i.invoke_pbb09x_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function main$lambda_0() {
    return function (_anonymous_parameter_0__qggqh8, res) {
      println('async-get route pinged!');
      var resp = 'https://jsonplaceholder.typicode.com/todos/1';
      async(main$lambda$slambda_0(resp, res, null));
      return Unit_getInstance();
    };
  }
  function UJSON() {
    UJSON_instance = this;
  }
  UJSON.prototype.stringify_6t4kzm_k$ = function (data) {
    var tmp$ret$5;
    {
      var tmp$ret$4;
      {
        var tmp$ret$3;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(data.get_size_woubt6_k$());
          var tmp$ret$0;
          {
            tmp$ret$0 = data.get_entries_p20ztl_k$().iterator_jk1svi_k$();
          }
          var tmp0_iterator = tmp$ret$0;
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            var tmp$ret$2;
            {
              var tmp0_subject = item.get_value_j01efc_k$();
              var tmp;
              if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
                var tmp_0 = item.get_key_18j28a_k$();
                var tmp_1 = UJSON_getInstance();
                var tmp_2 = item.get_value_j01efc_k$();
                tmp = new Pair(tmp_0, tmp_1.stringify_6t4kzm_k$((!(tmp_2 == null) ? isInterface(tmp_2, Map) : false) ? tmp_2 : THROW_CCE()));
              } else {
                if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Iterable) : false) {
                  var tmp_3 = item.get_key_18j28a_k$();
                  var tmp_4 = UJSON_getInstance();
                  var tmp_5 = item.get_value_j01efc_k$();
                  tmp = new Pair(tmp_3, tmp_4.stringify_fjjuy2_k$((!(tmp_5 == null) ? isInterface(tmp_5, Iterable) : false) ? tmp_5 : THROW_CCE()));
                } else {
                  var tmp$ret$1;
                  {
                    tmp$ret$1 = new Pair(item.get_key_18j28a_k$(), item.get_value_j01efc_k$());
                  }
                  tmp = tmp$ret$1;
                }
              }
              tmp$ret$2 = tmp;
            }
            tmp0_mapTo.add_1j60pz_k$(tmp$ret$2);
          }
          tmp$ret$3 = tmp0_mapTo;
        }
        tmp$ret$4 = tmp$ret$3;
      }
      var tmp0_toTypedArray = tmp$ret$4;
      tmp$ret$5 = copyToArray(tmp0_toTypedArray);
    }
    var arrayOfPairs = tmp$ret$5;
    return json(arrayOfPairs.slice());
  };
  UJSON.prototype.stringify_fjjuy2_k$ = function (data) {
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(data, 10));
          var tmp0_iterator = data.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            var tmp$ret$0;
            {
              var tmp;
              if (!(item == null) ? isInterface(item, Map) : false) {
                var tmp_0 = UJSON_getInstance();
                tmp = tmp_0.stringify_6t4kzm_k$((!(item == null) ? isInterface(item, Map) : false) ? item : THROW_CCE());
              } else {
                tmp = item;
              }
              tmp$ret$0 = tmp;
            }
            tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
          }
          tmp$ret$1 = tmp0_mapTo;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      var tmp0_toTypedArray = tmp$ret$2;
      tmp$ret$3 = copyToArray(tmp0_toTypedArray);
    }
    var array = tmp$ret$3;
    return array;
  };
  UJSON.prototype.toMap_s0mjyb_k$ = function (json) {
    if (!(typeof json === 'object')) {
      return null;
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
    }
    var map = tmp$ret$0;
    var tmp = Object.keys(json);
    var keys = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var indexedObject = keys;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var key = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (typeof json[key] == 'object') {
        {
          var tmp_0 = json[key];
          var tmp0_set = this.toMap_s0mjyb_k$(isObject(tmp_0) ? tmp_0 : THROW_CCE());
          map.put_3mhbri_k$(key, tmp0_set);
        }
      } else {
        {
          var tmp_1 = json[key];
          var tmp1_set = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE();
          map.put_3mhbri_k$(key, tmp1_set);
        }
      }
    }
    return map;
  };
  UJSON.$metadata$ = objectMeta('UJSON');
  var UJSON_instance;
  function UJSON_getInstance() {
    if (UJSON_instance == null)
      new UJSON();
    return UJSON_instance;
  }
  function async(block) {
    startCoroutine(block, new StandaloneCoroutine(EmptyCoroutineContext_getInstance()));
  }
  function StandaloneCoroutine(context) {
    this.context_1 = context;
  }
  StandaloneCoroutine.prototype.get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  StandaloneCoroutine.prototype.resume_55omby_k$ = function (value) {
  };
  StandaloneCoroutine.prototype.resumeWithException_codgcl_k$ = function (error) {
  };
  StandaloneCoroutine.prototype.resumeWith_k14j9i_k$ = function (result) {
  };
  StandaloneCoroutine.prototype.resumeWith_s3a3yh_k$ = function (result) {
    return this.resumeWith_k14j9i_k$(result);
  };
  StandaloneCoroutine.$metadata$ = classMeta('StandaloneCoroutine', [Continuation]);
  function fetchAsync(url, $cont) {
    var tmp = GlobalScope_getInstance();
    var tmp_0 = Dispatchers_getInstance().Default_1;
    var response = async$default(tmp, tmp_0, null, fetchAsync$slambda_0(url, null), 2, null);
    return response.await_xhs9og_k$($cont);
  }
  function fetchAsync$slambda($url, resultContinuation) {
    this.$url_1 = $url;
    CoroutineImpl.call(this, resultContinuation);
  }
  fetchAsync$slambda.prototype.invoke_nqr9r6_k$ = function ($this$async, $cont) {
    var tmp = this.create_b6qu53_k$($this$async, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  fetchAsync$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_nqr9r6_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  fetchAsync$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            var tmp_0 = this;
            tmp_0.client0__1 = HttpClient$default(null, 1, null);
            var tmp_1 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.$url_1);
            ;
            tmp_1.tmp1_get1__1 = tmp0_apply;
            this.tmp1_get1__1.method_1 = Companion_getInstance().Get_1;
            this.state_1 = 1;
            suspendResult = (new HttpStatement(this.tmp1_get1__1, this.client0__1)).execute_t7l9ha_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var data = suspendResult;
            this.client0__1.close_ymq55z_k$();
            return data;
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  fetchAsync$slambda.prototype.create_b6qu53_k$ = function ($this$async, completion) {
    var i = new fetchAsync$slambda(this.$url_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  fetchAsync$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  fetchAsync$slambda.$metadata$ = classMeta('fetchAsync$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function fetchAsync$slambda_0($url, resultContinuation) {
    var i = new fetchAsync$slambda($url, resultContinuation);
    var l = function ($this$async, $cont) {
      return i.invoke_nqr9r6_k$($this$async, $cont);
    };
    l.$arity = 1;
    return l;
  }
  main();
  return _;
}));

//# sourceMappingURL=lab.js.map