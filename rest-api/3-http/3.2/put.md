---
description: '작성자: 이성혁'
---

# 규칙: PUT 메서드는 리소스를 삽입하거나 저장된 리소스를 갱신하는 데 사용해야 한다

PUT 메서드는 클라이언트가 기술한 URI로 스토어에 새로운 리소스를 추가하는데 사용한다. 이미 스토어에 저장된 리소스를 갱신하거나 다른 것으로 대체하는 데도 PUT 메서드를 사용한다.

다음 예제는 클라이언트 애플리케이션에서 애플리케이션의 데이터를 서버에 객체로 저장할 수 있는 스토어 리소스를 제공하는 REST API를 나타낸다.

> PUT /accounts/4ef2d5d0-cb7e-11e0-9572-0800200c9a66/buckets/objects/4321

PUT 요청 메시지에는 클라이언트에서 저장하려는 리소스를 표현하는 부분이 포함되어야 한다. 그러나 요청 메시지의 바디에 포함된 리소스에 대한 표현이 GET요청을 통해서 받는 리소스에 대한 표현과 같을 수도 있고 같지 않을 수도 있다. 예를 들어, REST API의 스토어 리소스에서 요청 메시지에 리소스 상태 표현 중 변경되는 부분만 표현하는 것을 허용할 수도 있다.

4장 "규칙: 스토어는 조건부 PUT 요청을 지원해야 한다"에서, REST API가 HTTP헤더를 사용하여 PUT 메서드를 리소스에 삽입하거나 갱신할 때 오버로딩하는 방법을 설명할 것이다.