---
description: '작성자: 이성혁'
---

# 규칙: GET 메서드나 POST 메서드를 사용하여 다른 요청 메서드를 처리해서는 안 된다

터널링(tunneling)은 메시지의 원래 의도를 감추거나 잘못 표현하는 것, 프로토콜의 투명성을 훼손하는 것 등의 HTTP 오용을 의미한다. 한정된 HTTP 문법으로 클라이언트에 대응하기 위해서 HTTP 요청 메서드를 원래의 의미와 다르게 사용하는 REST API를 설계해서는 안 된다. 이 부분에서 소개하는 규칙에 따라, 항상 명확하게 기술한 올바른 HTTP 메서드를 사용해야 한다.