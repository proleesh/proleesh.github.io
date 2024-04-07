---
description: '작성자: 이성혁'
---

# 규칙: URI 경로에는 소문자가 적합하다

URI 경로에 대문자를 사용하면 문제가 될 수 있으므로 소문자를 사용한다. RFC 3986은 URI 스키마와 호스트 제외하고는 대소문자를 구별하도록 규정한다. 예를 들면 다음과 같다.

> http://api.example.restapi.org/my-folder/my-doc 1️⃣
>
> HTTP://API.EXAMPLE.RESTAPI.ORG/my-folder/my-doc 2️⃣
>
> http://api.example.restapi.org/My-Folder/my-doc 3️⃣

1️⃣ 은 괜찮다.

2️⃣ 는 URI 포맷 스펙(RFC 3986)에서 1️⃣과 같은 것으로 간주한다.

3️⃣ 은 1️⃣, 2️⃣와 다른 URI다. 대소문자를 섞어 사용하게 되면 때로 혼란을 일으킬 수 있다.
