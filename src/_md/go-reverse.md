### 反向代理
> 反向代理是一种网络架构，它将客户端请求转发至后端服务器，然后将响应返回至客户端。与正向代理不同的是，反向代理隐藏了后端的服务器的身份，并对客户端提供一些额外的服务，例如负载均衡、缓存和安全性增强等。

### Golang实现反向代理
> 使用Golang实现反向代理是非常简单的。Golang提供了一个标准库"net/http/httputil",其中包含了一些有用的函数和结构体，可以方便地实现反向代理。

```go
package main

import (
	"fmt"
	"net/http"
	"net/http/httputil"
	"net/url"
)

func main() {
    // 目标服务器地址
	target, err := url.Parse("http://localhost:9091")
	if err != nil {
		panic(err)
	}

    // 设置代理
	proxy := httputil.NewSingleHostReverseProxy(target)

    // 自定义的请求处理函数
	proxy.Director = func(req *http.Request) {
		fmt.Printf("Request: %v %v %v \n", req.Method, req.Host, req.URL)

		req.Header.Add("X-Forwarded-Host", req.Host)
		req.URL.Host = target.Host
		req.URL.Scheme = target.Scheme
	}

	// 自定义的错误处理函数
	proxy.ErrorHandler = func(w http.ResponseWriter, r *http.Request, err error) {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

    // 启动服务
	http.ListenAndServe(":9000", proxy)
}

```

### Golang反向代理tls
> 基于https的反向代理tls,代码如下：
```go
package main

import (
	"crypto/tls"
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
)

func main() {
	// 目标地址
	target, err := url.Parse("http://localhost:9091")
	if err != nil {
		panic(err)
	}

	// 设置代理
	proxy := httputil.NewSingleHostReverseProxy(target)

	// 忽略证书验证
	transport := &http.Transport{
		TLSClientConfig: &tls.Config{
			InsecureSkipVerify: true, // 忽略证书验证
		},
	}
	proxy.Transport = transport

	// 自定义的请求处理函数
	proxy.Director = func(req *http.Request) {
		fmt.Printf("Request: %v %v %v \n", req.Method, req.Host, req.URL)

		req.Header.Add("X-Forwarded-Host", req.Host)
		req.URL.Host = target.Host
		req.URL.Scheme = target.Scheme
	}

	// 自定义的错误处理函数
	proxy.ErrorHandler = func(w http.ResponseWriter, r *http.Request, err error) {
		fmt.Printf("Error: %v \n", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	//	启动服务
	// http.ListenAndServe(":9000", proxy)
	go func() {
		server := &http.Server{
			Addr:      ":9000",
			Handler:   proxy,
			TLSConfig: &tls.Config{},
		}
		log.Println("ListenAndServe: 9000")
		if err := server.ListenAndServeTLS("server.crt", "server.key"); err != nil {
			log.Printf("ListenAndServeTLS: %v", err)
		}
	}()

	// 等待退出
	select {}
}
```