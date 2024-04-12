---
description: '작성자: 이성혁'
---

# 규칙: 경로 부분 중 변하는 부분은 유일한 값으로 대체한다

URI 경로 부분은 REST API 디자이너가 정해준 이름만 사용하기도 하지만, 어떤 경로 부분은 변수처럼 변환하며 유일한 식별자로 자동적으로 채워지기도 한다. 디자이너는 URI 템플릿 문법을 이용하여 변하지 않는 부분과 변하는 부분 모두를 명확하게 설계할 수 있다. [URI 템플릿](http://tools.ietf.org/html/draft-gregorio-uritemplate)에 포함된 변수는 최종적으로 유일한 값으로 대체되어야 한다. 다음 템플릿 예는 변수를 세 개(leagueId, teamId, playerId)가지고 있다.

> http://api.soccer.restapi.org/leagues/{leagueId}/teams/{teamId}/players/{playerId}

REST API 자체나 클라이언트가 URI 템플릿에 있는 변수를 실제 값으로 대체한다. 대체되는 각 실제 값은 숫자나 알파벳으로 나타낸다. 다음 예를 보자.

> http://api.soccer.restapi.org/leagues/seattle/teams/trebuchet/players/21 1️⃣
>
> http://api.soccer.restapi.org/games/3fd65a60-db8b011e00957200800200c9a66 2️⃣

1️⃣ 21이라는 값이 playerId를 대체하고 있다.

2️⃣ UUID값이 gameId를 대체하고 있다.

REST API의 클라이언트에서는 URI가 하나의 유의미한 리소스 식별자임을 고려해야 한다. 백엔드 시스템의 식별자(이를 테면, 데이터베이스의 ID와 같은)가 URI 경로에 표시될 수 있지만, 이는 클라이언트 코드 입장에서 별로 의미가 없다. URI를 유일한 ID로 사용해야만 기존 클라이언트에 영향을 미치지 않고, REST API 백엔드 시스템을 개선할 수 있다.
