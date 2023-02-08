# index

- props를 응용한 상세페이지 만들기

# React Blog Practice

어떤걸 컴포넌트로 만들면 좋은가

1. 반복적인 html 축약할때
2. 큰 페이지들
3. 자주변경되는 것들

컴포넌트의 단점

- state 가져다쓸 때 문제생김
- A 함수에 있던 변수는 B 함수에서 사용할 수 없다.

동적인 UI 만드는 step

1. html css로 미리 디자인 완성
2. UI의 현재 상태를 state로 저장
3. state에 따라 UI가 어떻게 보일지 작성

arr/object 특징

- array/object 담은 변수엔 화살표만 저장됨.
- state가 array/object면 shallow copy를 만들어서 수정해야함.

부모 => 자식 state 전송하는 법.

1. <자식컴포넌트 작명 = { state이름 }>
2. props 파라미터 등록 후 props.작명 사용
3. props 전송은 부모에서 -> 자식으로만 가능
