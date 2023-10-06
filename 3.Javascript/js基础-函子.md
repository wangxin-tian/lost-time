#

## 函子

### 容器函子


```javascript

/**
  
*/
class Container {
	static of (value) {
		return new Container(value)
	}

	constructor (value) {
		this._value = value;
	}

	map (fn) {
		return new Container(fn(this._value));
	}
}
```

实例： `Container.of(null).map(x => x.toUpperCase())`
注意如果Container的值不是字符串，那么就会导致`x => x.toUpperCase`这个函数变得不纯，此时null就是所说的副作用

### maybe函子

作用：对外部值进行处理，将副作用控制在允许的范围

```javascript

class MayBe {
	static of (value) {
		return new MayBe(value);
	}

	constructor (value) {
		this._value = value;
	}

	map (fn) {
		return this.isNothing() ? MayBe.of(null); MayBe.of(fn(this._value))
	}

	isNothing () {
		return this._value === null || this._value === undefined;
	}
}
```

MayBe只是单纯解决了空值问题，但是不能解决导致空值的流程

### Either函子

异常会让函数变得不纯,either函子可以用来做异常处理

```javascript
class Left {
	static of (value) {
		return new Left(value);
	}

	constructor (value) {
		this._value = value;
	}

	map (fn) {
		return this;
	}	
}

class Right {
	static of (value) {
		return new Right(value);
	}

	constructor (value) {
		this._value = value;
	}

	map (fn) {
		return Right.of(fn(this._value));
	}	
}

function parseJSON(str) {
  // 接下来把传入的JSON转化成字符串,并且返回
  // 因为创建JSON.parse的时候可能会出现异常,所以给他加上try catch
  try {
    // 我们会把我们处理的结果交给这个函子,将来在这个函子的内部去处理
    return Right.of(JSON.parse(str))
    // 传入错误项
  } catch (e) {
    // 如果发生异常不进行处理的话,就不是纯函数
    // 传递错误信息,把这个错误信息记录下来
    return Left.of({error: e.message})
  }
}
```

### IO函子

- _value保存一个函数
- 惰性执行
- 将不纯的操作交给调用者来处理和执行

```javascript
const fp = require('lodash/fp');

class IO {
	static of (value) {
		return new IO (function() {
			return value;
		});
	}

	constructor (fn) {
		this._value = fn;
	}

	map (fn) {
		return new IO(fp.flowRight(fn, this._value));
	}
}
```

_value会合并很多函数，导致他可能不是一个纯函数，我们需要把他的操作延迟到调用的时候，目的是将副作用控制在可控的范围中

### Point函子

of方法是为了避免使用new来创建对象,更深层的涵义是of方法用来把值放到上下文Context(把值放到容器中,使用map来处理值)

### Monad单子 (单细胞动物)

- 一个函子如果具有of和join两个方法,并遵守一些定律就是monad函子

### 总结

函数式编程范式中常常使用函子，目的是保证过程的纯粹，让副作用只出现在最终调用的过程中



**参考资料: **
[](https://blog.csdn.net/weixin_45137565/article/details/114991940?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169632897716800182173591%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=169632897716800182173591&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-114991940-null-null.142^v94^control&utm_term=%E9%9D%A2%E5%90%91%E5%87%BD%E6%95%B0%E7%BC%96%E7%A8%8B&spm=1018.2226.3001.4187)

下面是单子的示例代码，直接拷贝过来
```javascript
//改造一下
const fp = require('lodash/fp')
const fs = require('fs')

// 将IO改造成monad方法 === IO Monad
class IO {
  static of (value) {
    return new IO(function () {
      return value
    })
  }

  constructor (fn) {
    this._value = fn
  }

  map (fn) {
    return new IO(fp.flowRight(fn, this._value))
  }

  // join方法不需要任何参数,他会在这个方法里面调用这个value,并且把他的值返回
  join () {
    return this._value()
  }

  // 使用monad的时候,经常会把map和join联合起来使用; map的作用是把当前这个函数和我们的value组合起来,他返回一个新的函子,map在组合他们的时候,也会返回一个新的函子
  // 所以我们调用join,是把他拍平,变扁
  // flatmap的作用就是同事去调用map和join
  flatMap (fn) {
    // 在flatMap最终执行之后,我们去调用这个join,最终把join的结果,也就是这个函子返回
    // return this.map(fn)
    // 当我们调用map的时候,就会把value和fn合并,合并完成之后会返回一个新的函子(IO()),在这个函子中包裹的这个函数也会返回一个函子,所以我们要调用一下join
    return this.map(fn).join()
  }
}

let readFile = function(filename) {
  return new IO(function() {
    return fs.readFileSync(filename, 'utf-8')
  })
}

let print = function(x) {
  return new IO(function() {
    console.log(x)
    return x
  })
}

// 调用,读取文件
let r = readFile('package.json')
  // 将读取的内容变成大写
  // .map(x => x.toUpperCase())
  .map(fp.toUpper)

  // 返回的是指用map,返回的是函子用flatMap
  .flatMap(print)
  // 只需要调用API实现相应功能,不需要了解内部的实现过程(可讲解)
  // join就是在调用内部的value
  .join()
// console.log(r)
// => 读取的内容

// 当我们想要编辑读取的内容(将读取的内容变成大写): 只需要在调用时候通过map方法来执行
console.log(r)
// => 读取的内容(大写)

```