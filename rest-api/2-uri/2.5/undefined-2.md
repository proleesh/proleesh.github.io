---
description: '작성자: 이성혁'
---

# 스토어

스토어는 클라이언트에서 관리하는 리소스 저장소다. 스토어 리소스는 API 클라이언트가 리소스를 넣거나 빼는 것, 지우는 것에 관여한다. 스토어 스스로 새로운 리소스를 생성하지 못하기 때문에, 새로운 URI를 만들지는 못한다. 대신 리소스는 스토어에 처음 저장될 때, 클라이언트가 선택한 URI를 가진다. 다음은 클라이언트 프로그램에서 ID가 1234인 사용자를 보여주고, 가상의 Soccer REST API를 사용하여 favorites라는 스토어에 alonso라는 도큐먼트 리소스를 넣는 예다.

> PUT /users/1234/favorites/alonso