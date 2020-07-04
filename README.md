# Media Timer App

## 설명
- Youtube Music, Youtube 등 타이머 종료 기능이 없는 미디어 재생 앱을 위한 유틸리티 앱입니다.
- 시간(분)을 입력하면 해당 시간 이후에 자동으로 재생 중이던 음악이 정지됩니다. (디바이스 내에서 미디어 재생 중이던 것은 전부 정지)
- Android OS 5.0 이상만 지원합니다.
- React Native(v0.62.2)로 구현되었으며, 미디어 관련 기능은 Native Module을 제작하여 사용합니다.

## TODO
- [x] Native Module을 만들어 RN에서 타이머 기능 구현
- [x] 타이머 실행 중에 앱에서 진행 상황을 원형 프로그레스바로 표시
- [x] 백그라운드에서 타이머 동작 구현
- [ ] UI 개선
- [ ] 타이머 일시정지 구현
- [ ] 미디어 볼륨을 단계별로 낮추어 재생 중지 옵션 구현
- [ ] 타이머 시작 시 상단 알림(Notification)으로 몇분 남았는지 체크할 수 있도록 구현
