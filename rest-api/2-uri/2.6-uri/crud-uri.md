---
description: '작성자: 이성혁'
---

# 규칙: CRUD 기능을 나타내는 것은 URI에 사용하지 않는다

CRUD 기능을 수행하는 내용은 URI에 나타내지 않는다. URI는 리소스를 식별하는 데만 사용해야 하고, 위에서 설명한 내용을 바탕으로 설계되어야 한다. 3장 '요청 메서드'에서 언급하겠지만, HTTP 리퀘스트 메서드는 CRUD 기능을 수행하는 것을 의미할 때 사용한다. 예를 들어 다음과 같은 API 디자인 패턴이 그 아래에 있는 패턴보다 더 좋은 디자인이다.

> DELETE /users/1234

다음 예는 사용해서는 안 되는 디자인이다.

> GET /deleteUser?id=1234
>
> GET /deleteUser/1234
>
> DELETE /deleteUser/1234
>
> POST /users/1234/delete
