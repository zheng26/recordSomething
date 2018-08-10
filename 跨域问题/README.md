# IE9 以上
### ajax
使用 CORS 

# IE9 跨域
### 上传文件
使用flash上传， 需要在服务器配置crossdomain.xml（根据具体情况配置）
```xml
<?xml version="1.0"?>
<cross-domain-policy>
        <allow-access-from domain="*" />
</cross-domain-policy>
```

### ajax
使用xdomain
A pure JavaScript CORS alternative. No server configuration required - **just add a proxy**.html on the domain you wish to communicate with. This library utilizes XHook to hook all XHR, so XDomain will work seamlessly with any library.

