---
description: '작성자: 이성혁'
---

# 도큐먼트

도큐먼트 리소스는 객체 인스턴스나 데이터베이스 레코드와 유사한 단일 개념이다. 일반적으로 도큐먼트의 상태 표현은 값을 가진 필드와 다른 관련 리소스와의 링크 둘 다를 가지게 된다. 기본적인 필드와 링크 기반 구조로 인해, 도큐먼트 타입은 다른 리소스 원형들의 기반 원형이 된다. 즉, 서로 다른 리소스 원형 세 개는 도큐머트 원형에서 분리된 것이라 볼 수 있다.

다음 URI는 각각 도큐먼트 리소스를 나타낸다.

> http://api.soccer.restapi.org/leagues/seattle
>
> http://api.soccer.restapi.org/leagues/seattle/teams/trebuchet
>
> http://api.soccer.restapi.org/leagues/seattle/teams/trebuchet/players/mike

도큐먼트 리소스는 자식 리소스를 가질 수 있는데, 이 자식 리소스는 특정한 종속 개념을 표현한다. 단일 부모 하나는 여러 가지 다른 리소스 타입을 가질 수 있어서, 논리적으로 도큐먼트는 docroot로 알려진 REST API 루트 리소스 후보에 해당한다. 다음 예로 든 URI는 docroot를 나타내는데, Soccer REST API의 공개된 진입점(entry point)을 의미한다.

> http://api.soccer.restapi.org
