---
description: '작성자: 이성혁'
---

# 규칙: GET 메서드는 리소스의 상태 표현을 얻는 데 사용해야 한다

REST API 클라이언트는 특정한 형식의 GET 메서드를 요청 메시지에 추가하여 리소스의 상태 정보를 요청한다. 클라이언트의 GET 요청 메시지는 바디 없이 헤더로만 구성된다.

웹은 구조상 GET 메서드의 특성에 많이 의존한다. 클라이언트에서 GET 요청을 반복해도 문제가 없어야 하며, 캐시는 리소스를 제공하는 원래 서버와 통신하지 않고도 캐시된 내용을 제공할 수 있어야 한다.

다음 예제는 클라이언트 개발자가 명령 셀에서 curl을 사용하여 'greeting'이라는 리소스의 현재 상태 표현을 GET하는 것이다.&#x20;

> $curl -v http://api.example.restapi.org/greeting 1️⃣
>
> > GET /greeting HTTP/1.1 2️⃣
> >
> > User-Agent: curl/7.20.1 3️⃣
> >
> > Host: api.example.restapi.org
> >
> > Accept: \*/\*
> >
> > < HTTP/1.1 200 OK 4️⃣
> >
> > Date: Sat, 20 Aug 2011 16:02:40 GMT 5️⃣
> >
> > Server: Apache
> >
> > Expires: Sat, 20 Aug 2011 16:03:40 GMT
> >
> > Cache-Control: max-age=60, must-revalidate
> >
> > ETag: text/html:hello world
> >
> > Content-Length: 130
> >
> > Last-Modified: Sat,20 Aug 2011 16:02:17 GMT
> >
> > Vary: Accept-Encoding
> >
> > Content-Type: text/html
> >
> > \<!doctype html>\<head>\<meta charset="utf-8">\<title>Greeting\</title>\</head>\<body>\<div id="greeting">Hello World!\</div>\</body>\</html> 6️⃣

1️⃣ curl 명령을 나타낸다. GET은 curl의 기본 메서드이기 때문에 명시적으로 입력하지 않아도 된다. -v 옵션은 curl 명령의 결과를 자세히 표시하기 위해 사용한다.

2️⃣ 요청 메시지의 Request-Line은 greeting 리소스에 대해 GET 메서드를 사용한 것을 나타낸다.

3️⃣ 요청 메시지의 헤더 리스트의 시작 부분이다. HTTP 요청과 응답 헤더에 대해서는 4장에서 다룬다.

4️⃣ 응답 메시지의 시작 부분이다. Stattus-Line은 '응답 상태 코드' 부분에서 설명한다. '200 OK' 상태 코드는 요청이 성공했음을 알리는 코드다.

5️⃣ 응답 메시지 헤더 리스트의 시작 부분이다.

6️⃣ 응답 메시지 바디의 시작 부분이다. 이 예제에서 body는 greeting 메시지의 HTML 형태로 작성된 표현이다.
