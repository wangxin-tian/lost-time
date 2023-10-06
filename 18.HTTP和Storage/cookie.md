# cookie

写入和使用
document.cookie
删除
将存在时间设置为0即可

cookie属性
  name  
  value 值是非英文字符在存储的时候需要编码
    encodeURIComponent
    decodeURIComponent
  失效时间
    session
    expires=${new Date('2030-3-8')}
    max-age=10 (second)
  domain
    限制访问cookie的范围
  path
    路径
  Secure
    针对https

  cookie的唯一标识是，name domain path同时一致时

封装cookie

```js
  const set = (name, value, { maxAge, domain, path, secure } = {}) => {
    const cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    typeof maxAge === 'number' && cookieText += `; max-age=${maxAge}`;
    domain && cookieText += `; domain=${domain}`;
    path && cookieText += `; path=${path}`;
    secure && cookieText += `; secure`;

    document.cookie = cookieText;
  }

  const get = name => {
    name = `${decodeURIComponent(name)}`
    const cookies = document.cookie.split('; ');

    for( item of cookie ) {
      if (name === `${item.name}`) {
        return `${decodeURIComponent(item.value)}`;
      }
      return ;
    }
  }

  const remove = (name, {domain, path} = {}) => {
    set(name, '', {domain, path, maxAge: -1});
  }

  export cookie = {
    set,
    get,
    remove
  }
```

前后端都可以操纵cookie
