---
description: '작성자: 이성혁'
---

# 규칙: 파일 확장자는 URI에 포함시키지 않는다

웹에서 점(.) 문자는 URI에서 파일 이름과 확장자를 구분하는 데 사용한다. 하지만 REST API에서는 메시지 바디 내용의 포맷을 나타내기 위한 파일 확장자를 URI 안에 포함하지 않아도 된다. 대신 이 확장자는 미디어 타입에 의존하는데, Content-Type 헤더를 통해 전달된고 메시지 바디의 내용을 어떻게 처리할지 결정한다. 미디어 타입은 4장 '미디어 타입'에서 더 자세히 다룰 것이다.

> http://api.college.restapi.org/students/3248234/transcripts/2005/fall.json 1️⃣
>
> http://api.college.restapi.org/students/3248234/transcripts/2005/fall 2️⃣

1️⃣ 파일 확장자를 포맷에 나타내는 용도로 사용해서는 안 된다.

2️⃣ REST API 클라이언트에서 권장하는 방법은 HTTP에서 제공하는 포맷 선택 메커니즘을 이용하는 것이다. 4장의 "규칙: 리소스의 표현이 여러 가지 가능할 경우 미디어 타입 협상을 지원해야 한다" 에서 다룰 Accept 요청 헤더와 같은 것이다.

> NOTE\_ REST API는 간단한 링크나 쉬운 디버깅을 위해 쿼리 파라미터를 통한 미디어 타입 선택을 지원한다. 4장의 "규칙: query 변수를 사용한 미디어 타입 선택을 지원할 수 있다"에서 알아볼 것이다.