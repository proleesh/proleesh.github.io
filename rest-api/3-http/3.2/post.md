---
description: '작성자: 이성혁'
---

# 규칙: POST 메서드는 컬렉션에 새로운 리소스를 만드는 데 사용해야 한다

클라이언트는 POST 메서드를 사용해서 컬렉션 안에 새로운 리소스를 만든다. POST 요청 바디는 새로운 리소스를 위해 제안된 상태 표현을 포함하는데, 이것은 서버 소유의 컬렉션에 추가된다.

다음 예제는 클라이언트가 POST를 사용해서 컬렉션에 새로운 추가 사항을 요청하는 것을 보여준다.

> POST /leagues/seattle/teams/trebuchet/players
>
> \#요청 메시지는 만들어질 플레이어의 초기 상태를 제안하는 상태를 포함할 수 있다.

이것은 REST API 설계할 때 POST 메서드를 사용하는 두 가지 방법 중 첫 번째에 해당한다. 이렇게 POST 메서드를 사용하는 것은 게시판에 새로운 메시지를 등록하는 것과 비슷하다.