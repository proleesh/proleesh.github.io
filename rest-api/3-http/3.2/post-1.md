---
description: '작성자: 이성혁'
---

# 규칙: POST 메서드는 컨트롤러를 실행하는 데 사용해야 한다

클라이언트는 POST 메서드를 사용해서 기능 지향적인 컨트롤러 리소스를 동작시킨다. POST 요청 메시지는 컨트롤러 리소스 기능의 입력 값을 헤더나 바디에 포함할 수 있다.

HTTP 표준에서는 POST 메서드에 의미상의 제한을 두지 않으며, 반복이나 부작용과 상관없이 어떤 액션도 수행할 수 있다. 이런 특징 때문에, POST 메서드를 제한 없는 컨트롤러 리소스로 사용할 수 있다.

REST API 디자인은 컨트롤러 리소스로 모든 동작 실행하기 위해 POST 메서드를 사용하는데, 각 기능 및 동작은 직관적으로 HTTP 메서드들과 매핑되지 않는다. 다시 말해, POST 메서드는 리소스를 가지고 오거나, 저장하거나, 지우는 데 사용하지는 않는다(HTTP는 이런 기능에 대해서는 각각 다른 메서드를 사용한다).

POST 요청 메서드는 안전하지도 않고 사용할 때마다 리소스의 상태 값이 계속 바뀔 수 있다. 즉, POST의 결과를 예측할 수도, 부작용 없이 반복적으로 사용하는 것을 보장할 수도 없다는 의미다. 예를 들어, POST 메서드를 사용하여 웹 폼을 두 번 제출하면, 사용자의 신용카드가 두 번 결제되는 상황이 발생할 수도 있다. 컨트롤러 리소스는 유연성을 높이기 위해 투명도와 강건성을 조정해야 한다.

다음 예제는 POST 요청 메서드를 사용하여 컨트롤러가 수행되는 것을 보여준다.

> POST /alerts/245743/resend

이것이 REST API 디자인에서 POST 메서드를 사용하는 두 번째 방법이다. 이 예는 널리 알려진 콘셉트인 런타임 시스템의 PostMessage 메커니즘과 유사한데, 어떤 경계를 넘어야 기능들이 실행된다.