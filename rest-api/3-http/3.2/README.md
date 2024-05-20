---
description: '작성자: 이성혁'
---

# 3.2 요청 메서드

클라이언트는 상호작용하려는 메서드를 HTTP 요청 메시지의 Request-Line 부분에 명시한다. [RFC 2616](https://datatracker.ietf.org/doc/html/rfc2616)에서는 Request-Line 문법을 다음과 같이 정의한다.

> Request-Line = Method SP Request-URI SP HTTP-Version CRLF
>
> (SP: Space, CRLF: Carriage Return Line Feed)

REST API 리소스 모델에서 각 HTTP 메서드는 잘 정의된 고유한 의미가 있다. GET 메서드는 리소스 상태의 표현(리소스의 상태가 어떤지를 나타내는 값)을 얻을 때 사용하며, HEAD 메서드는 리소스 상태에 대한 메타데이터를 얻을 때 사용한다. PUT 메서드는 새로운 리소스를 스토어에 추가하거나 기존 리소스를 갱신할 때 사용한다. DELETE 메서드는 부모에서 리소스를 제거한다. POST 메서드는 컬렉션에 새로운 리소스를 만들거나 컨트롤러 실행할 때 사용한다.

[규칙: GET 메서드나 POST 메서드를 사용하여 다른 요청 메서드를 처리해서는 안 된다](get-post.md)

[규칙: GET 메서드는 리소스의 상태 표현을 얻는 데 사용해야 한다](get.md)

[규칙: 응답 헤더를 가져올 때는 반드시 HEAD 메서드를 사용해야 한다](head.md)

[규칙: PUT 메서드는 리소스를 삽입하거나 저장된 리소스를 갱신하는 데 사용해야 한다](put.md)

[규칙: PUT 메서드는 변경 가능한 리소스를 갱신하는 데 사용해야 한다](put-1.md)

[규칙: POST 메서드는 컬렉션에 새로운 리소스를 만드는 데 사용해야 한다](post.md)

[규칙: POST 메서드는 컨트롤러를 실행하는 데 사용해야 한다](post-1.md)

[규칙: DELETE 메서드는 그 부모에서 리소스에 삭제하는 데 사용해야 한다](delete.md)

[규칙: OPTIONS 메서드는 리소스의 사용 가능한 인터랙션을 기술한 메타데이터를 가져오는 데 사용해야 한다](options.md)
