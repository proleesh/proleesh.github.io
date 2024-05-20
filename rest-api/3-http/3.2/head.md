---
description: '작성자: 이성혁'
---

# 규칙: 응답 헤더를 가져올 때는 반드시 HEAD 메서드를 사용해야 한다

클라이언트는 HEAD 메서드를 사용하여 헤더 정보만 가져온다. 즉, HEAD 메서드는 GET메서드와 동일한 응답을 주지만, 바디가 없다. 클라이언트는 HEAD 메서드를 사용하여 리소스 존재 여부를 확인하거나 메타데이터만 읽을 수 있다.

다음 예제는 HEAD 메서드를 이용하여 헤더 정보를 요청하는 curl 명령어이다.

> $ curl -head http://api.example.restapi.org/greeting

> HTTP/1.1 200 OK 1️⃣
>
> Date: Sat, 20 Aug 2011 16:02:40 GMT 2️⃣
>
> Server: Apache
>
> Expires: Sat, 20 Aug 2011 16:03:40 GMT
>
> Cache-Control: max-age=60, must-revalidate
>
> ETag: text/html:hello world
>
> Content-Length: 130
>
> Last-Modified: Sat, 20 Aug 2011 16:02:17 GMT
>
> Vary: Accept-Encoding
>
> Content-Type: text/html

1️⃣ 응답 메시지의 시작 부분이다. Status-Line은 '응답 상태 코드' 에서 설명할 것이다. '200 OK' 상태 코드는 요청이 성공했음을 알려준다.

2️⃣ 응답 메시지의 헤더 리스트의 시작 부분이다. GET 메서드처럼 HEAD 메서드 요청도 헤더를 포함하지만, 바디 부분은 없다.
