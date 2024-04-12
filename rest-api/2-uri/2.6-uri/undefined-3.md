---
description: '작성자: 이성혁'
---

# 규칙: 컨트롤러 이름으로는 동사나 동사구를 사용해야 한다

프로그램에 사용하는 함수처럼, 컨트롤 리소스를 나타내는 URI는 동작을 포함하는 이름으로 지어야 한다. 예를 들면 다음과 같이 짓는다.

> http://api.college.restapi.org/students/morgan/register
>
> http://api.example.restapi.org/lists/4324/dedupe
>
> http://api.ognom.restapi.org/dbs/reindex
>
> http://api.build.restapi.org/qa/nightly/runTestSuite
