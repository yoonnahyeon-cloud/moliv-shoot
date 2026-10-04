/* MOLIV CONTENT PLANNER · PROJECT 001 seed data (schema 3). Edits made on site are stored separately; this file is the original plan. */
(window.MOLIV_PROJECTS=window.MOLIV_PROJECTS||[]).push({
 "schema": 3,
 "id": "001",
 "code": "PROJECT 001",
 "brand": "MOLIV",
 "title": "여자 모발이식 모델 촬영",
 "date": "2026-10-05",
 "dateLabel": "2026.10.05",
 "model": "여자 모델 1명",
 "summary": [
  "영상 2종",
  "사진"
 ],
 "outputs": [
  {
   "id": "review",
   "no": "01",
   "name": "후기형",
   "usage": "후기형",
   "desc": "모델 본인이 직접 촬영하고 기록한 것처럼 보이는 자연스러운 모발이식 후기 콘텐츠",
   "keys": [
    "개인 SNS 후기 느낌",
    "셀프캠 같은 자연스러운 구도",
    "헤어라인 고민",
    "상담 및 디자인",
    "수술",
    "수술 직후 변화"
   ],
   "note": "촬영팀이 촬영하지만 광고 촬영처럼 보이지 않게 한다.",
   "refs": [
    {
     "type": "video",
     "src": "ref/review-ref.mp4",
     "poster": "ref/review-ref.jpg",
     "label": "REF · 후기형",
     "title": "차 안 셀카 후기 (7초)",
     "points": [
      "전면 카메라를 직접 든 30~50cm 거리",
      "손으로 머리를 쓸어넘겨 헤어라인을 보여주는 동작",
      "고개를 돌려 측면 헤어라인을 보여주는 턴",
      "엄지척, 표정 리액션으로 마무리",
      "자연광, 일상 공간(차 안), 짧은 자막 한 줄"
     ],
     "note": "엔딩 컷(수술 후 일상)과 머리 넘기는 컷의 톤 기준으로 사용합니다."
    },
    {
     "type": "video",
     "src": "ref/review-ref2.mp4",
     "poster": "ref/review-ref2.jpg",
     "label": "REF 2 · 후기형",
     "title": "수술 당일 셀카 후기 (26초)",
     "points": [
      "환자복 차림으로 찍는 수술 직후 셀카",
      "고개를 돌려 헤어라인을 보여주는 근접 셀카",
      "머리를 쓸어넘긴 근접 컷과 혼잣말 같은 짧은 자막",
      "수술 전과 후를 위아래로 나눈 비교 화면",
      "포니테일처럼 앞으로 하고 싶은 것을 말하는 감정 포인트"
     ],
     "note": "수술 전후 그룹(R16~R22) 기준입니다. 비교 화면에 쓰려면 R01·R07과 R18·R19를 같은 거리와 각도로 맞춰 찍습니다."
    }
   ],
   "legacy": {
    "purpose": "모델 본인이 실제 모발이식을 받고 자신의 경험을 직접 기록한 것처럼 보이는 자연스러운 후기 콘텐츠. 의료진이나 병원 설명보다 모델 개인의 경험과 감정이 중심입니다.",
    "tone": [
     "광고처럼 보이지 않는 개인 SNS 후기",
     "셀프캠 같은 가까운 거리감",
     "포즈보다 실제 행동",
     "얼굴과 헤어라인이 예쁜 각도",
     "본인이나 지인이 찍어준 느낌"
    ],
    "defaults": {
     "k": "아이폰 핸드헬드, 셀카 거리 30~60cm. 짐벌 없이 자연스러운 손떨림을 남깁니다.",
     "u": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
     "w": "조명과 반사판이 화면에 걸리지 않게. 연기 지시보다 실제 행동을 시키고 길게 롤링합니다."
    },
    "groups": [
     {
      "name": "수술 전",
      "note": "수술 후에는 절대 다시 찍을 수 없습니다. 메이크업과 헤어 세팅 직후 가장 먼저 촬영합니다."
     },
     {
      "name": "상담 및 디자인",
      "note": "수술이 시작되면 다시 만들 수 없는 장면입니다. 체험형 상담·디자인과 같은 시간에 진행되므로 컷마다 어느 카메라가 먼저 찍을지 정하고 들어갑니다."
     },
     {
      "name": "수술 전후",
      "note": "수술 직전 두 컷은 수술실 이동 전에 반드시 확보합니다."
     }
    ]
   }
  },
  {
   "id": "experience",
   "no": "02",
   "name": "체험형",
   "usage": "체험형",
   "desc": "모발이식을 고민하는 사람이 실제 병원을 방문해 수술을 받기까지의 전체 과정을 따라가는 콘텐츠",
   "flow": [
    "고민",
    "병원 방문",
    "상담",
    "디자인",
    "수술",
    "수술 직후"
   ],
   "note": "후기형보다 제3자가 모델을 따라가는 관찰형 및 브이로그 촬영에 가깝다.",
   "refs": [
    {
     "type": "video",
     "src": "ref/experience-ref.mp4",
     "poster": "ref/experience-ref.jpg",
     "label": "REF · 체험형",
     "title": "상담부터 디자인까지 따라가는 영상 (21초)",
     "points": [
      "모델이 카메라를 보지 않는 관찰자 시점",
      "거울로 헤어라인을 확인하는 장면",
      "헤어라인 초근접, 손으로 머리를 들춰 보여주는 인서트",
      "헤어밴드를 하고 펜으로 라인을 그리는 측면 컷",
      "자막으로 이야기를 이어가는 구성"
     ],
     "note": "레퍼런스는 남성 모델입니다. 동선과 컷 구성만 참고하고 여성 모델의 얼굴 각도에 맞춰 조정합니다."
    }
   ],
   "legacy": {
    "purpose": "모발이식에 관심 있는 사람이 실제 병원을 방문하면 어떤 과정을 겪는지 보여주는 콘텐츠. 제3자의 카메라가 모델의 전체 경험을 따라가며, 시작부터 끝까지 하나의 스토리로 이어지게 찍습니다.",
    "tone": [
     "제3자 관찰 시점",
     "모델은 카메라를 보지 않음",
     "장면과 장면이 이어지는 동선",
     "의료진과의 상호작용",
     "완결된 스토리"
    ],
    "defaults": {
     "k": "삼각대와 짐벌 혼용. 제3자 관찰 시점을 유지합니다.",
     "u": "체험형 영상 (병원 방문 스토리)",
     "w": "다음 장면과 이어지도록 동작의 앞뒤로 3초씩 여유를 둡니다."
    },
    "groups": [
     {
      "name": "1. 현재 고민",
      "note": "수술 전에만 찍을 수 있습니다. 후기형 수술 전 컷과 같은 시간대에 이어서 찍습니다."
     },
     {
      "name": "2. 병원 방문",
      "note": "수술 후에는 모습이 달라지므로 방문 장면도 수술 전에 찍어야 합니다."
     },
     {
      "name": "3. 상담",
      "note": ""
     },
     {
      "name": "4. 헤어라인 디자인",
      "note": "DSLR BEFORE를 디자인 시작 전에 끝냈는지 먼저 확인합니다."
     },
     {
      "name": "5. 수술",
      "note": "촬영 가능 범위와 노출 수위는 병원 가이드를 먼저 확인합니다."
     },
     {
      "name": "6. 수술 직후",
      "note": "1. 현재 고민과 같은 앵글로 맞춰 전후가 대비되게 찍습니다."
     }
    ]
   }
  },
  {
   "id": "photo",
   "no": "03",
   "name": "사진",
   "usage": "사진",
   "desc": "수술 전, 디자인, 수술 직후, 그리고 이후 경과까지 같은 구도로 남기는 기록",
   "note": "BEFORE와 AFTER 비교가 가능하도록 동일한 구도와 조건으로 촬영한다.",
   "refs": [
    {
     "type": "image",
     "src": "ref/dslr-ref.jpg",
     "label": "REF · DSLR",
     "title": "전후 비교 광고 소재",
     "points": [
      "헤어밴드로 머리를 고정해 헤어라인 전체 노출",
      "무지 그레이 배경, 정면 눈높이",
      "BEFORE와 AFTER가 같은 크기와 위치로 나란히 놓임",
      "이마부터 눈썹 아래까지 크롭해도 쓸 수 있는 해상도"
     ],
     "note": "AFTER는 BEFORE와 구도가 같아야 이렇게 쓸 수 있습니다. 바닥 마킹, 삼각대 높이, 조명 위치를 기록해 두세요."
    },
    {
     "type": "video",
     "src": "ref/progress-ref1.mp4",
     "poster": "ref/progress-ref1.jpg",
     "title": "경과 기록 레퍼런스 1 (26초)"
    },
    {
     "type": "video",
     "src": "ref/progress-ref2.mp4",
     "poster": "ref/progress-ref2.jpg",
     "title": "경과 기록 레퍼런스 2 (14초)"
    }
   ],
   "legacy": {
    "purpose": "영상과 별도로 DSLR로 촬영합니다. 모발이식 전후 기록과 경과 비교, 광고 소재, 병원 콘텐츠, 상세페이지와 SNS에 사용합니다.",
    "tone": [
     "전후 기록",
     "경과 비교",
     "광고 소재",
     "병원 콘텐츠",
     "상세페이지·SNS"
    ],
    "defaults": {
     "k": "삼각대 고정. 같은 거리, 같은 높이, 같은 조명. 85mm(풀프레임 환산), f/8, ISO 100~200 권장",
     "u": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
     "w": "헤어밴드로 잔머리를 정리하고 무지 배경 앞 바닥 마킹 위치에 앉힙니다."
    },
    "groups": [
     {
      "name": "BEFORE",
      "note": "수술 후 재촬영 불가. 헤어라인 디자인 전에 끝냅니다. 삼각대 높이와 바닥 마킹을 메모에 기록하세요."
     },
     {
      "name": "DESIGN",
      "note": "헤어라인 디자인 직후, 수술 전에 찍습니다."
     },
     {
      "name": "AFTER",
      "note": "BEFORE와 최대한 같은 위치와 구도로 찍습니다. BEFORE 사진을 옆에 띄워 대조하세요."
     }
    ]
   }
  }
 ],
 "steps": [
  {
   "id": "d1",
   "phase": "today",
   "no": "1",
   "name": "계약",
   "short": "계약",
   "place": "9층 상담실",
   "owner": "미정",
   "detail": "계약, 주민등록증 사진 촬영",
   "note": "병원 도착부터 계약까지 이어서 찍습니다."
  },
  {
   "id": "d2",
   "phase": "today",
   "no": "2",
   "name": "수술 전 안내",
   "short": "안내",
   "place": "9층 상담실",
   "owner": "호창",
   "detail": "수술 전 안내사항 안내",
   "note": "의료진 설명보다 모델의 표정과 질문, 리액션 위주로 찍습니다."
  },
  {
   "id": "d3",
   "phase": "today",
   "no": "3",
   "name": "비포 사진",
   "short": "비포",
   "place": "9층 촬영실",
   "owner": "원장님",
   "detail": "앞, 옆, 대각선, 뒤",
   "note": "수술 후에는 다시 찍을 수 없습니다. 같은 공간에서 수술 전 영상도 함께 확보합니다. 위치와 카메라 높이를 메모해 두세요."
  },
  {
   "id": "d4",
   "phase": "today",
   "no": "4",
   "name": "디자인",
   "short": "디자인",
   "place": "9층 상담실",
   "owner": "",
   "detail": "상담 후 실제로 디자인하는 모습",
   "note": "실제 디자인이라 다시 그릴 수 없습니다. 헤어밴드 위치를 비포 사진과 같게 맞춥니다."
  },
  {
   "id": "d5",
   "phase": "today",
   "no": "5",
   "name": "디자인 후 촬영",
   "short": "디자인 후",
   "place": "9층 촬영실",
   "owner": "",
   "detail": "앞, 옆, 대각선",
   "note": "비포 사진과 같은 위치, 같은 구도로 찍습니다."
  },
  {
   "id": "d6",
   "phase": "today",
   "no": "6",
   "name": "수술 후",
   "short": "수술 후",
   "place": "10층 시술실",
   "owner": "",
   "detail": "수술 부위 촬영 · 헤어라인과 뒤통수",
   "note": "수술 들어가기 전 컷과 촬영이 허용된 수술 중 컷도 여기에 있습니다. 노출 수위는 병원 가이드를 따릅니다."
  },
  {
   "id": "f1",
   "phase": "after",
   "no": "2",
   "name": "경과 사진 받기",
   "short": "경과 받기",
   "place": "환자 집",
   "owner": "호창 또는 하련",
   "when": "수술 이후",
   "detail": "환자가 집에서 직접 찍어 보내는 경과",
   "note": "수술 당일 환자에게 레퍼런스를 보여주고 같은 벽, 같은 거리, 같은 각도로 찍도록 안내합니다."
  },
  {
   "id": "f2",
   "phase": "after",
   "no": "3",
   "name": "다음 날 경과",
   "short": "다음 날",
   "place": "병원",
   "owner": "",
   "when": "수술 다음 날",
   "detail": "경과 확인 촬영과 헤드스파(머리 감겨주는 모습)",
   "note": ""
  },
  {
   "id": "f3",
   "phase": "after",
   "no": "4",
   "name": "실밥 제거",
   "short": "2주 후",
   "place": "병원",
   "owner": "",
   "when": "2주 후",
   "detail": "실밥 제거하러 와서 촬영",
   "note": ""
  },
  {
   "id": "f4",
   "phase": "after",
   "no": "5",
   "name": "6개월 · 12개월",
   "short": "6·12개월",
   "place": "병원",
   "owner": "",
   "when": "6개월, 12개월 후",
   "detail": "같은 방식으로 동일하게 촬영",
   "note": "BEFORE와 같은 위치, 같은 구도, 같은 조명으로 찍습니다."
  }
 ],
 "shots": [
  {
   "id": "E06",
   "stepId": "d1",
   "sort": 10,
   "title": "병원 들어오는 모습",
   "usage": "체험형",
   "devices": [
    "OSMO"
   ],
   "assignee": null,
   "content": "병원 문을 열고 들어오는 장면",
   "angle": "내부에서 문 정면 와이드 또는 외부에서 뒤따르기",
   "action": "자연스럽게 걸어 들어와 주변을 둘러봄",
   "method": "팔로우 또는 고정 와이드",
   "caution": "다른 환자와 간판 노출을 확인합니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "E06",
    "section": "체험형 영상",
    "group": "2. 병원 방문",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E07",
   "stepId": "d1",
   "sort": 20,
   "title": "복도를 이동하는 모습",
   "usage": "체험형",
   "devices": [
    "OSMO"
   ],
   "assignee": null,
   "content": "안내를 받아 복도를 이동",
   "angle": "뒤 또는 옆",
   "action": "안내 직원을 따라 걷기",
   "method": "짐벌 팔로우",
   "caution": "복도 끝에서 다음 장면(대기)으로 이어지게 프레임 아웃합니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "E07",
    "section": "체험형 영상",
    "group": "2. 병원 방문",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E08",
   "stepId": "d1",
   "sort": 30,
   "title": "대기하는 모습",
   "usage": "체험형",
   "devices": [
    "OSMO"
   ],
   "assignee": null,
   "content": "대기실 소파에 앉아 기다림",
   "angle": "와이드와 손 디테일",
   "action": "휴대폰 보기, 문진표 작성",
   "method": "고정 와이드 후 디테일 인서트",
   "caution": "긴장감이 살짝 보이게 연출합니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "E08",
    "section": "체험형 영상",
    "group": "2. 병원 방문",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "N01",
   "title": "계약 · 주민등록증 사진 촬영",
   "usage": "",
   "devices": [],
   "assignee": null,
   "content": "계약 진행 중 주민등록증을 사진으로 남깁니다.",
   "angle": "",
   "action": "",
   "method": "",
   "caution": "개인정보입니다. 내부 기록용으로만 보관하고 콘텐츠에 쓰지 않습니다.",
   "use": "",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "N01",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "d1",
   "sort": 40
  },
  {
   "id": "E09",
   "stepId": "d2",
   "sort": 10,
   "title": "상담실 들어가는 모습",
   "usage": "체험형",
   "devices": [
    "OSMO"
   ],
   "assignee": null,
   "content": "상담실 문을 열고 들어감",
   "angle": "상담실 안에서 문 쪽",
   "action": "노크하고 들어와 인사",
   "method": "고정",
   "caution": "다음 장면(상담 투샷)과 이어지도록 같은 축을 유지합니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "E09",
    "section": "체험형 영상",
    "group": "2. 병원 방문",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E10",
   "stepId": "d2",
   "sort": 20,
   "title": "의료진과 모델 투샷",
   "usage": "체험형",
   "devices": [
    "OSMO",
    "CANON"
   ],
   "assignee": null,
   "content": "상담 테이블의 의료진과 모델",
   "angle": "테이블 측면 와이드, 두 사람 모두 보이게",
   "action": "상담 대화",
   "method": "고정 후 느린 슬라이드",
   "caution": "후기형(R10)은 모델 시점, 여기는 관찰 시점입니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E10",
    "section": "체험형 영상",
    "group": "3. 상담",
    "tag": "별도 촬영",
    "pair": "R10"
   }
  },
  {
   "id": "R10",
   "stepId": "d2",
   "sort": 30,
   "title": "상담받는 자연스러운 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "상담 테이블에 앉아 이야기를 듣는 모델",
   "angle": "모델 옆자리 시점, 의료진은 손이나 어깨만",
   "action": "고개 끄덕임, 자료 보기",
   "method": "테이블에 폰을 올려둔 듯한 낮은 앵글 또는 지인 시점 핸드헬드",
   "caution": "의료진 얼굴과 설명이 중심이 되지 않게 모델 표정 위주로 찍습니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R10",
    "section": "후기형 영상",
    "group": "상담 및 디자인",
    "tag": "별도 촬영",
    "pair": "E10"
   }
  },
  {
   "id": "E13",
   "stepId": "d2",
   "sort": 40,
   "title": "설명을 듣는 모습",
   "usage": "체험형",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "설명을 듣는 모델의 단독 리액션",
   "angle": "의료진 어깨 걸고 모델 정면",
   "action": "고개 끄덕임, 집중",
   "method": "고정",
   "caution": "편집에서 설명 음성 위에 얹을 리액션 컷입니다. 넉넉하게 찍습니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E13",
    "section": "체험형 영상",
    "group": "3. 상담",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E14",
   "stepId": "d2",
   "sort": 50,
   "title": "자연스러운 질문과 리액션",
   "usage": "체험형",
   "devices": [
    "OSMO",
    "CANON"
   ],
   "assignee": null,
   "content": "모델이 질문하고 답을 듣는 흐름",
   "angle": "투샷과 단독 컷 교차",
   "action": "실제로 궁금한 질문하기",
   "method": "2캠이면 투샷과 단독을 동시에",
   "caution": "통증, 회복 기간, 티가 나는지 같은 질문 2~3개를 미리 정해 둡니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E14",
    "section": "체험형 영상",
    "group": "3. 상담",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "R15",
   "stepId": "d2",
   "sort": 60,
   "title": "자연스러운 표정과 리액션",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "상담과 디자인 중 웃음, 놀람, 안도 같은 반응",
   "angle": "얼굴 위주 미디엄",
   "action": "연기 지시 없이 대화로 반응 유도",
   "method": "컷을 나누지 않고 길게 롤링",
   "caution": "촬영팀이 질문을 던져 실제 반응을 끌어냅니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R15",
    "section": "후기형 영상",
    "group": "상담 및 디자인",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E11",
   "stepId": "d2",
   "sort": 70,
   "title": "의료진이 헤어라인을 확인하는 모습",
   "usage": "공통",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "의료진이 손으로 머리를 들춰 헤어라인을 확인",
   "angle": "근접, 손과 헤어라인",
   "action": "정면을 보고 가만히 앉아 있기",
   "method": "근접 고정",
   "caution": "레퍼런스 중반의 손으로 머리를 들추는 인서트를 참고합니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E11",
    "section": "체험형 영상",
    "group": "3. 상담",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E12",
   "stepId": "d2",
   "sort": 80,
   "title": "모델이 거울을 보는 모습",
   "usage": "체험형",
   "devices": [
    "OSMO"
   ],
   "assignee": null,
   "content": "상담 중 거울로 본인 헤어라인 확인",
   "angle": "거울에 비친 얼굴과 옆모습",
   "action": "손거울을 들고 의료진 설명에 맞춰 확인",
   "method": "고정",
   "caution": "레퍼런스의 거울 컷 구도를 참고합니다. 거울에 카메라가 비치지 않게 합니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E12",
    "section": "체험형 영상",
    "group": "3. 상담",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "B01",
   "stepId": "d3",
   "sort": 10,
   "title": "정면",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "정면 기준 컷",
   "angle": "렌즈 높이는 눈높이, 정수리부터 쇄골까지",
   "action": "무표정, 턱 수평, 정면 응시",
   "method": "",
   "caution": "레퍼런스처럼 헤어밴드로 머리를 고정하고 화면 정중앙에 둡니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B01",
    "section": "DSLR 사진",
    "group": "BEFORE",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "B02",
   "stepId": "d3",
   "sort": 20,
   "title": "좌측 45도",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "좌측 45도",
   "angle": "눈높이",
   "action": "바닥 마킹 45도로 몸을 돌리고 시선은 벽 마크",
   "method": "",
   "caution": "마킹 각도를 정확히 지킵니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B02",
    "section": "DSLR 사진",
    "group": "BEFORE",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "B03",
   "stepId": "d3",
   "sort": 30,
   "title": "우측 45도",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "우측 45도",
   "angle": "눈높이",
   "action": "바닥 마킹 45도로 몸을 돌리고 시선은 벽 마크",
   "method": "",
   "caution": "마킹 각도를 정확히 지킵니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B03",
    "section": "DSLR 사진",
    "group": "BEFORE",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "B04",
   "stepId": "d3",
   "sort": 40,
   "title": "좌측 측면",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "좌측 90도 측면",
   "angle": "눈높이",
   "action": "90도로 앉아 정면 벽 응시",
   "method": "",
   "caution": "귀와 관자놀이 헤어라인이 보이게 귀 뒤로 머리를 넘깁니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B04",
    "section": "DSLR 사진",
    "group": "BEFORE",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "B05",
   "stepId": "d3",
   "sort": 50,
   "title": "우측 측면",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "우측 90도 측면",
   "angle": "눈높이",
   "action": "90도로 앉아 정면 벽 응시",
   "method": "",
   "caution": "귀와 관자놀이 헤어라인이 보이게 귀 뒤로 머리를 넘깁니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B05",
    "section": "DSLR 사진",
    "group": "BEFORE",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "B06",
   "stepId": "d3",
   "sort": 60,
   "title": "머리를 완전히 넘긴 정면",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "헤어밴드로 머리를 완전히 넘긴 정면",
   "angle": "정면 눈높이",
   "action": "이마 전체 노출, 정면 응시",
   "method": "",
   "caution": "잔머리가 이마를 덮지 않게 정리합니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B06",
    "section": "DSLR 사진",
    "group": "BEFORE",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "B07",
   "stepId": "d3",
   "sort": 70,
   "title": "상단에서 내려다본 헤어라인",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "정수리 쪽에서 내려다본 헤어라인",
   "angle": "위에서 수직",
   "action": "고개를 살짝 숙임",
   "method": "스텝이나 사다리 사용, 카메라 높이를 기록",
   "caution": "AFTER(A06)에서 같은 높이를 재현해야 합니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B07",
    "section": "DSLR 사진",
    "group": "BEFORE",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "B08",
   "stepId": "d3",
   "sort": 80,
   "title": "정면 헤어라인 클로즈업",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "정면 헤어라인 근접",
   "angle": "정면",
   "action": "정면 응시, 정지",
   "method": "100mm 매크로 또는 근접",
   "caution": "모발 한 올이 보일 만큼 초점을 확인합니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B08",
    "section": "DSLR 사진",
    "group": "BEFORE",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "B09",
   "stepId": "d3",
   "sort": 90,
   "title": "좌측 헤어라인 클로즈업",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "좌측 헤어라인 근접",
   "angle": "좌측 45도",
   "action": "정지",
   "method": "근접",
   "caution": "초점 확인",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B09",
    "section": "DSLR 사진",
    "group": "BEFORE",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "B10",
   "stepId": "d3",
   "sort": 100,
   "title": "우측 헤어라인 클로즈업",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "우측 헤어라인 근접",
   "angle": "우측 45도",
   "action": "정지",
   "method": "근접",
   "caution": "초점 확인",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B10",
    "section": "DSLR 사진",
    "group": "BEFORE",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "B11",
   "stepId": "d3",
   "sort": 110,
   "title": "고민 부위 클로즈업",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "모델이 가장 신경 쓰는 부위 근접",
   "angle": "부위에 맞춰",
   "action": "정지",
   "method": "근접",
   "caution": "어느 부위인지 메모에 남겨 AFTER(A10)와 맞춥니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B11",
    "section": "DSLR 사진",
    "group": "BEFORE",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "B12",
   "title": "뒤 (뒤통수)",
   "usage": "사진",
   "devices": [],
   "assignee": null,
   "content": "뒤에서 본 뒤통수 전체. 모낭 채취 부위(공여부) 기준 사진",
   "angle": "뒤 정면, 눈높이",
   "action": "카메라를 등지고 앉아 고개 수평",
   "method": "",
   "caution": "수술 후와 6·12개월 후 같은 구도로 비교합니다. 위치를 메모해 두세요.",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B12",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "d3",
   "sort": 120
  },
  {
   "id": "R01",
   "stepId": "d3",
   "sort": 130,
   "title": "현재 얼굴 정면",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "현재 얼굴을 셀카 화면처럼 정면으로 담습니다.",
   "angle": "눈높이보다 살짝 위에서 정면, 얼굴이 화면의 2/3",
   "action": "카메라를 보며 숨을 고르고 손으로 머리를 한 번 정리",
   "method": "",
   "caution": "체험형 정면(E01)과 겹치지 않게 반드시 손에 든 셀카 구도로 찍습니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R01",
    "section": "후기형 영상",
    "group": "수술 전",
    "tag": "별도 촬영",
    "pair": "E01"
   }
  },
  {
   "id": "R02",
   "stepId": "d3",
   "sort": 140,
   "title": "자연스럽게 머리를 내린 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "평소 스타일대로 앞머리와 옆머리를 내린 상태",
   "angle": "정면 또는 15도 사선, 바스트샷",
   "action": "머리를 가볍게 털고 평소처럼 정리",
   "method": "",
   "caution": "헤어라인이 가려진 평소 모습이 이후 노출 컷의 기준점입니다. 충분히 길게 찍습니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R02",
    "section": "후기형 영상",
    "group": "수술 전",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "R03",
   "stepId": "d3",
   "sort": 150,
   "title": "머리를 넘기는 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "손으로 머리를 뒤로 쓸어넘기며 이마가 드러나는 순간",
   "angle": "정면~사선 30도, 얼굴 가까이",
   "action": "손가락으로 앞머리를 쓸어넘기고 1~2초 유지",
   "method": "셀카 거리 고정, 넘기는 동안 흔들림 최소",
   "caution": "레퍼런스 영상 0~2초 구간 참고. 체험형(E03)은 제3자 시점이라 반드시 따로 찍습니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R03",
    "section": "후기형 영상",
    "group": "수술 전",
    "tag": "별도 촬영",
    "pair": "E03"
   }
  },
  {
   "id": "R04",
   "stepId": "d3",
   "sort": 160,
   "title": "이마를 드러내는 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "머리를 완전히 넘겨 이마 전체가 보이는 상태",
   "angle": "정면, 이마부터 턱까지",
   "action": "한 손으로 머리를 잡고 카메라를 응시",
   "method": "",
   "caution": "머리를 잡은 손이 헤어라인을 가리지 않게 합니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R04",
    "section": "후기형 영상",
    "group": "수술 전",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "R05",
   "stepId": "d3",
   "sort": 170,
   "title": "헤어라인을 손으로 보여주는 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "손가락으로 헤어라인을 따라 짚으며 보여줍니다.",
   "angle": "정면 근접, 이마 상단 위주",
   "action": "검지로 이마 라인을 천천히 따라 그림",
   "method": "",
   "caution": "손톱, 반지 등 시선을 뺏는 요소를 미리 정리합니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R05",
    "section": "후기형 영상",
    "group": "수술 전",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "R06",
   "stepId": "d3",
   "sort": 180,
   "title": "본인이 고민하는 부위를 가리키는 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "가장 신경 쓰이는 부위를 손으로 가리킵니다.",
   "angle": "고민 부위가 화면 중앙",
   "action": "가리키며 \"여기가 고민이었어요\" 같은 짧은 혼잣말 (자막용)",
   "method": "",
   "caution": "후기의 동기가 되는 컷입니다. 표정을 함께 담습니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R06",
    "section": "후기형 영상",
    "group": "수술 전",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "R07",
   "stepId": "d3",
   "sort": 190,
   "title": "헤어라인 근접",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "정면 헤어라인 클로즈업",
   "angle": "정면, 이마 상단과 헤어라인이 화면 가득",
   "action": "머리를 넘기고 정지",
   "method": "15~20cm 근접, 초점 확인 후 3초 이상 정지",
   "caution": "공통 컷이므로 셀카 느낌이 과하지 않은 중립 앵글로 찍고 손떨림을 줄입니다. 수술 직후(R19)와 같은 위치로 맞춥니다.",
   "use": "후기형과 체험형 공통 인서트",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R07",
    "section": "후기형 영상",
    "group": "수술 전",
    "tag": "공통 촬영",
    "pair": "E04"
   }
  },
  {
   "id": "R08",
   "stepId": "d3",
   "sort": 200,
   "title": "좌우 헤어라인",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "좌우 관자놀이 쪽 헤어라인",
   "angle": "좌우 각각 측면 45~90도",
   "action": "고개를 천천히 좌에서 우로 돌림 (레퍼런스 측면 턴)",
   "method": "카메라 고정, 모델이 회전",
   "caution": "좌우 모두 확보했는지 확인합니다.",
   "use": "후기형과 체험형 공통 인서트",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R08",
    "section": "후기형 영상",
    "group": "수술 전",
    "tag": "공통 촬영",
    "pair": "E05"
   }
  },
  {
   "id": "R09",
   "stepId": "d3",
   "sort": 210,
   "title": "거울로 현재 모습을 보는 장면",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "거울 앞에서 헤어라인을 들춰보는 모습",
   "angle": "어깨 너머로 거울 속 얼굴",
   "action": "거울을 보며 머리를 넘겨보고 살짝 한숨",
   "method": "어깨 너머 핸드헬드, 거울 속 얼굴에 초점",
   "caution": "거울에 촬영팀과 장비가 비치지 않게 합니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R09",
    "section": "후기형 영상",
    "group": "수술 전",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E01",
   "stepId": "d3",
   "sort": 220,
   "title": "모델 정면",
   "usage": "공통",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "인터뷰 자리에서 모델 정면",
   "angle": "눈높이 정면, 바스트샷",
   "action": "카메라 옆 인터뷰어를 보며 고민 이야기",
   "method": "삼각대 고정",
   "caution": "후기형 셀카(R01)와 달리 고정되고 안정된 프레임으로 찍습니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E01",
    "section": "체험형 영상",
    "group": "1. 현재 고민",
    "tag": "별도 촬영",
    "pair": "R01"
   }
  },
  {
   "id": "E02",
   "stepId": "d3",
   "sort": 230,
   "title": "현재 헤어라인",
   "usage": "공통",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "머리를 내린 상태의 헤어라인 미디엄샷",
   "angle": "정면 약간 위",
   "action": "자연스럽게 앉아 있기",
   "method": "고정 후 느린 푸시인",
   "caution": "후기형과 다르게 셀카 느낌이 나지 않게 합니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E02",
    "section": "체험형 영상",
    "group": "1. 현재 고민",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E03",
   "stepId": "d3",
   "sort": 240,
   "title": "머리를 넘겨 고민 부위 노출",
   "usage": "체험형",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "모델이 직접 머리를 넘겨 고민 부위를 보여줍니다.",
   "angle": "사선 30도, 제3자 시점",
   "action": "카메라가 아닌 거울이나 인터뷰어를 보며 넘김",
   "method": "천천히 푸시인",
   "caution": "레퍼런스 첫 컷처럼 시선은 카메라 밖에 둡니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E03",
    "section": "체험형 영상",
    "group": "1. 현재 고민",
    "tag": "별도 촬영",
    "pair": "R03"
   }
  },
  {
   "id": "E04",
   "stepId": "d3",
   "sort": 250,
   "title": "헤어라인 클로즈업",
   "usage": "공통",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "정면 헤어라인 클로즈업",
   "angle": "정면, 헤어라인이 화면 가득",
   "action": "머리를 넘기고 정지",
   "method": "근접 고정",
   "caution": "R07과 한 번에 찍습니다.",
   "use": "후기형·체험형 공통 인서트",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E04",
    "section": "체험형 영상",
    "group": "1. 현재 고민",
    "tag": "공통 촬영",
    "pair": "R07"
   }
  },
  {
   "id": "E05",
   "stepId": "d3",
   "sort": 260,
   "title": "좌우 모습",
   "usage": "공통",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "좌우 측면 얼굴과 헤어라인",
   "angle": "좌우 각각 45~90도",
   "action": "고개를 천천히 돌림",
   "method": "카메라 고정 또는 측면 이동",
   "caution": "R08과 한 번에 찍습니다. 수술 직후(E29) 같은 앵글 비교용입니다.",
   "use": "후기형·체험형 공통 인서트",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E05",
    "section": "체험형 영상",
    "group": "1. 현재 고민",
    "tag": "공통 촬영",
    "pair": "R08"
   }
  },
  {
   "id": "E15",
   "stepId": "d4",
   "sort": 10,
   "title": "디자인 시작",
   "usage": "체험형",
   "devices": [
    "OSMO"
   ],
   "assignee": null,
   "content": "헤어밴드 착용, 펜 준비",
   "angle": "미디엄",
   "action": "헤어밴드를 하고 자세 잡기",
   "method": "고정",
   "caution": "헤어밴드 위치를 DSLR과 동일하게 맞춥니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E15",
    "section": "체험형 영상",
    "group": "4. 헤어라인 디자인",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E16",
   "stepId": "d4",
   "sort": 20,
   "title": "의료진 손 클로즈업",
   "usage": "공통",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "펜을 든 의료진 손",
   "angle": "근접",
   "action": "움직임 없이 앉아 있기",
   "method": "근접 고정",
   "caution": "장갑 착용 여부를 병원과 확인합니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E16",
    "section": "체험형 영상",
    "group": "4. 헤어라인 디자인",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E17",
   "stepId": "d4",
   "sort": 30,
   "title": "라인을 그리는 과정",
   "usage": "체험형",
   "devices": [
    "OSMO",
    "CANON"
   ],
   "assignee": null,
   "content": "펜이 라인을 따라 그려지는 과정",
   "angle": "측면 45도 (레퍼런스 마지막 구간)",
   "action": "정면을 보고 정지",
   "method": "느린 푸시인",
   "caution": "후기형(R11)은 모델 감정 중심, 여기는 손과 라인 중심입니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E17",
    "section": "체험형 영상",
    "group": "4. 헤어라인 디자인",
    "tag": "별도 촬영",
    "pair": "R11"
   }
  },
  {
   "id": "R11",
   "stepId": "d4",
   "sort": 40,
   "title": "헤어라인 디자인 받는 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "펜으로 라인을 그리는 동안의 모델 얼굴",
   "angle": "모델 정면 약간 아래, 근접",
   "action": "눈을 감거나 살짝 긴장한 표정, 의료진 손이 프레임에 들어옴",
   "method": "지인이 찍어주는 느낌의 핸드헬드",
   "caution": "체험형(E17)은 의료진 손 중심, 여기는 모델 감정 중심입니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R11",
    "section": "후기형 영상",
    "group": "상담 및 디자인",
    "tag": "별도 촬영",
    "pair": "E17"
   }
  },
  {
   "id": "R12",
   "stepId": "d4",
   "sort": 50,
   "title": "디자인 중 거울을 보는 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "디자인 도중 손거울로 라인을 확인",
   "angle": "거울에 비친 얼굴, 사선",
   "action": "손거울을 들고 고개를 기울이며 확인",
   "method": "",
   "caution": "거울 각도에 펜 라인이 보이도록 조정합니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R12",
    "section": "후기형 영상",
    "group": "상담 및 디자인",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E18",
   "stepId": "d4",
   "sort": 60,
   "title": "모델 얼굴과 디자인이 함께 보이는 장면",
   "usage": "체험형",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "얼굴 전체와 디자인 라인이 함께 보임",
   "angle": "정면 미디엄",
   "action": "정면 응시",
   "method": "고정",
   "caution": "라인이 잘 보이도록 조명 반사를 확인합니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E18",
    "section": "체험형 영상",
    "group": "4. 헤어라인 디자인",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E19",
   "stepId": "d4",
   "sort": 70,
   "title": "디자인 완료",
   "usage": "체험형",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "완성된 라인 정면",
   "angle": "정면",
   "action": "정지",
   "method": "고정",
   "caution": "편집 전환점이 되는 컷입니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E19",
    "section": "체험형 영상",
    "group": "4. 헤어라인 디자인",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E20",
   "stepId": "d4",
   "sort": 80,
   "title": "거울로 최종 확인",
   "usage": "체험형",
   "devices": [
    "OSMO",
    "CANON"
   ],
   "assignee": null,
   "content": "거울로 완성된 라인을 확인",
   "angle": "관찰 시점 와이드",
   "action": "거울을 보며 의료진과 대화",
   "method": "고정",
   "caution": "후기형(R13)은 셀카 거리, 여기는 관찰 시점입니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E20",
    "section": "체험형 영상",
    "group": "4. 헤어라인 디자인",
    "tag": "별도 촬영",
    "pair": "R13"
   }
  },
  {
   "id": "R13",
   "stepId": "d4",
   "sort": 90,
   "title": "디자인 완료 후 직접 확인하는 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "완성된 라인을 보고 반응하는 모습",
   "angle": "거울과 얼굴이 함께, 근접",
   "action": "거울을 보며 신기하거나 만족스러운 리액션",
   "method": "",
   "caution": "체험형(E20)은 관찰 시점 와이드, 여기는 셀카 거리로 감정 위주입니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R13",
    "section": "후기형 영상",
    "group": "상담 및 디자인",
    "tag": "별도 촬영",
    "pair": "E20"
   }
  },
  {
   "id": "R14",
   "stepId": "d4",
   "sort": 100,
   "title": "카메라에 디자인된 헤어라인을 보여주는 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "셀카처럼 카메라를 향해 디자인 라인을 보여줍니다.",
   "angle": "정면 근접",
   "action": "머리를 넘겨 라인을 보여주고 웃음",
   "method": "",
   "caution": "레퍼런스 4~6초 구간(머리를 넘겨 보여주기) 톤으로 찍습니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R14",
    "section": "후기형 영상",
    "group": "상담 및 디자인",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "D01",
   "stepId": "d5",
   "sort": 10,
   "title": "디자인 완료 정면",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "디자인 라인이 그려진 정면",
   "angle": "B01과 같은 위치",
   "action": "정면 응시",
   "method": "",
   "caution": "펜 라인이 조명에 번쩍이지 않게 합니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "D01",
    "section": "DSLR 사진",
    "group": "DESIGN",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "D02",
   "stepId": "d5",
   "sort": 20,
   "title": "좌측 45도",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "디자인 좌측 45도",
   "angle": "B02와 같은 위치",
   "action": "마킹 45도",
   "method": "",
   "caution": "BEFORE와 같은 세팅 유지",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "D02",
    "section": "DSLR 사진",
    "group": "DESIGN",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "D03",
   "stepId": "d5",
   "sort": 30,
   "title": "우측 45도",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "디자인 우측 45도",
   "angle": "B03과 같은 위치",
   "action": "마킹 45도",
   "method": "",
   "caution": "BEFORE와 같은 세팅 유지",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "D03",
    "section": "DSLR 사진",
    "group": "DESIGN",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "D04",
   "stepId": "d5",
   "sort": 40,
   "title": "헤어라인 디자인 클로즈업",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "디자인 라인 근접",
   "angle": "정면",
   "action": "정지",
   "method": "근접",
   "caution": "라인 전체가 한 컷에 들어오게 합니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "D04",
    "section": "DSLR 사진",
    "group": "DESIGN",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "D05",
   "stepId": "d5",
   "sort": 50,
   "title": "얼굴 전체와 디자인 라인이 함께 보이는 사진",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "얼굴 전체와 라인",
   "angle": "정면 바스트",
   "action": "자연스러운 표정",
   "method": "",
   "caution": "광고 소재용이므로 표정이 자연스러운 컷을 여러 장 확보합니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "D05",
    "section": "DSLR 사진",
    "group": "DESIGN",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "D06",
   "title": "좌측 측면",
   "usage": "사진",
   "devices": [],
   "assignee": null,
   "content": "디자인 라인이 보이는 좌측 측면",
   "angle": "B04와 같은 위치",
   "action": "90도로 앉아 정면 벽 응시",
   "method": "",
   "caution": "BEFORE와 같은 세팅",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "D06",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "d5",
   "sort": 60
  },
  {
   "id": "D07",
   "title": "우측 측면",
   "usage": "사진",
   "devices": [],
   "assignee": null,
   "content": "디자인 라인이 보이는 우측 측면",
   "angle": "B05와 같은 위치",
   "action": "90도로 앉아 정면 벽 응시",
   "method": "",
   "caution": "BEFORE와 같은 세팅",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "D07",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "d5",
   "sort": 70
  },
  {
   "id": "R16",
   "stepId": "d6",
   "sort": 10,
   "title": "수술 직전 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "가운과 캡을 착용하고 대기하며 찍는 셀카",
   "angle": "정면 셀카",
   "action": "\"이제 들어가요\" 같은 짧은 한마디",
   "method": "",
   "caution": "시간을 놓치기 쉬운 컷입니다. 수술실 이동 전에 반드시 찍습니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R16",
    "section": "후기형 영상",
    "group": "수술 전후",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "R17",
   "stepId": "d6",
   "sort": 20,
   "title": "수술 준비 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "준비실에서 준비하는 모델",
   "angle": "중거리 사선",
   "action": "가운 정리, 의료진 안내 듣기",
   "method": "안정적인 핸드헬드",
   "caution": "공통 컷이므로 셀카처럼 보이지 않는 중립 프레이밍으로 찍습니다.",
   "use": "후기형과 체험형 공통",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R17",
    "section": "후기형 영상",
    "group": "수술 전후",
    "tag": "공통 촬영",
    "pair": "E21"
   }
  },
  {
   "id": "E21",
   "stepId": "d6",
   "sort": 30,
   "title": "수술 준비",
   "usage": "체험형",
   "devices": [
    "OSMO"
   ],
   "assignee": null,
   "content": "준비실에서 준비하는 모델",
   "angle": "중거리",
   "action": "가운 정리, 안내 듣기",
   "method": "안정적인 핸드헬드",
   "caution": "R17과 한 번에 찍습니다.",
   "use": "후기형·체험형 공통",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E21",
    "section": "체험형 영상",
    "group": "5. 수술",
    "tag": "공통 촬영",
    "pair": "R17"
   }
  },
  {
   "id": "E22",
   "stepId": "d6",
   "sort": 40,
   "title": "수술실 이동",
   "usage": "체험형",
   "devices": [
    "OSMO"
   ],
   "assignee": null,
   "content": "복도에서 수술실로 이동하는 뒷모습",
   "angle": "뒤에서 팔로우",
   "action": "의료진 안내를 따라 걷기",
   "method": "짐벌 팔로우",
   "caution": "문이 닫히는 장면까지 찍으면 전환 컷으로 좋습니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E22",
    "section": "체험형 영상",
    "group": "5. 수술",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E23",
   "stepId": "d6",
   "sort": 50,
   "title": "수술 전 준비 과정",
   "usage": "체험형",
   "devices": [
    "OSMO"
   ],
   "assignee": null,
   "content": "소독, 준비 과정 (촬영 가능한 범위)",
   "angle": "와이드와 디테일",
   "action": "누워서 편안하게",
   "method": "고정",
   "caution": "의료진 동의와 노출 범위를 확인합니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "E23",
    "section": "체험형 영상",
    "group": "5. 수술",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E24",
   "stepId": "d6",
   "sort": 60,
   "title": "촬영 가능한 범위의 의료진 움직임",
   "usage": "체험형",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "수술실 분위기와 의료진 동선",
   "angle": "와이드",
   "action": "—",
   "method": "고정 와이드",
   "caution": "의료진 얼굴 노출 동의를 확인합니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "E24",
    "section": "체험형 영상",
    "group": "5. 수술",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E25",
   "stepId": "d6",
   "sort": 70,
   "title": "의료진 손",
   "usage": "공통",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "장갑 낀 손, 도구",
   "angle": "근접",
   "action": "—",
   "method": "근접 고정",
   "caution": "출혈이 보이지 않는 각도를 찾습니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "E25",
    "section": "체험형 영상",
    "group": "5. 수술",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E26",
   "stepId": "d6",
   "sort": 80,
   "title": "수술 과정 디테일",
   "usage": "공통",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "모낭 채취·이식 디테일 (허용 범위)",
   "angle": "근접",
   "action": "—",
   "method": "근접 고정",
   "caution": "혈흔과 절개 노출 수위는 의료광고 심의 기준에 맞춰야 합니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "E26",
    "section": "체험형 영상",
    "group": "5. 수술",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E27",
   "stepId": "d6",
   "sort": 90,
   "title": "모델 모습",
   "usage": "체험형",
   "devices": [
    "OSMO"
   ],
   "assignee": null,
   "content": "수술 중 편안한 모델의 모습",
   "angle": "얼굴 위주",
   "action": "편안하게 누워 있기",
   "method": "고정",
   "caution": "불편해 보이는 표정은 피합니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "E27",
    "section": "체험형 영상",
    "group": "5. 수술",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "A01",
   "stepId": "d6",
   "sort": 100,
   "title": "정면",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "정면",
   "angle": "B01과 동일",
   "action": "B01과 같은 자세",
   "method": "",
   "caution": "BEFORE와 같은 마킹, 높이, 조명인지 확인합니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "A01",
    "section": "DSLR 사진",
    "group": "AFTER",
    "tag": "",
    "pair": "B01"
   }
  },
  {
   "id": "A02",
   "stepId": "d6",
   "sort": 110,
   "title": "좌측 45도",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "좌측 45도",
   "angle": "B02와 동일",
   "action": "B02와 같은 자세",
   "method": "",
   "caution": "BEFORE와 같은 세팅",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "A02",
    "section": "DSLR 사진",
    "group": "AFTER",
    "tag": "",
    "pair": "B02"
   }
  },
  {
   "id": "A03",
   "stepId": "d6",
   "sort": 120,
   "title": "우측 45도",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "우측 45도",
   "angle": "B03과 동일",
   "action": "B03과 같은 자세",
   "method": "",
   "caution": "BEFORE와 같은 세팅",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "A03",
    "section": "DSLR 사진",
    "group": "AFTER",
    "tag": "",
    "pair": "B03"
   }
  },
  {
   "id": "A04",
   "stepId": "d6",
   "sort": 130,
   "title": "좌측 측면",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "좌측 측면",
   "angle": "B04와 동일",
   "action": "B04와 같은 자세",
   "method": "",
   "caution": "BEFORE와 같은 세팅",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "A04",
    "section": "DSLR 사진",
    "group": "AFTER",
    "tag": "",
    "pair": "B04"
   }
  },
  {
   "id": "A05",
   "stepId": "d6",
   "sort": 140,
   "title": "우측 측면",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "우측 측면",
   "angle": "B05와 동일",
   "action": "B05와 같은 자세",
   "method": "",
   "caution": "BEFORE와 같은 세팅",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "A05",
    "section": "DSLR 사진",
    "group": "AFTER",
    "tag": "",
    "pair": "B05"
   }
  },
  {
   "id": "A06",
   "stepId": "d6",
   "sort": 150,
   "title": "상단",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "상단에서 내려다본 헤어라인",
   "angle": "B07과 동일 높이",
   "action": "B07과 같은 자세",
   "method": "",
   "caution": "B07에 기록한 카메라 높이를 재현합니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "A06",
    "section": "DSLR 사진",
    "group": "AFTER",
    "tag": "",
    "pair": "B07"
   }
  },
  {
   "id": "A07",
   "stepId": "d6",
   "sort": 160,
   "title": "정면 헤어라인 클로즈업",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "정면 헤어라인 근접",
   "angle": "B08과 동일",
   "action": "정지",
   "method": "근접",
   "caution": "BEFORE와 같은 배율",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "A07",
    "section": "DSLR 사진",
    "group": "AFTER",
    "tag": "",
    "pair": "B08"
   }
  },
  {
   "id": "A08",
   "stepId": "d6",
   "sort": 170,
   "title": "좌측 헤어라인 클로즈업",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "좌측 헤어라인 근접",
   "angle": "B09와 동일",
   "action": "정지",
   "method": "근접",
   "caution": "BEFORE와 같은 배율",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "A08",
    "section": "DSLR 사진",
    "group": "AFTER",
    "tag": "",
    "pair": "B09"
   }
  },
  {
   "id": "A09",
   "stepId": "d6",
   "sort": 180,
   "title": "우측 헤어라인 클로즈업",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "우측 헤어라인 근접",
   "angle": "B10과 동일",
   "action": "정지",
   "method": "근접",
   "caution": "BEFORE와 같은 배율",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "A09",
    "section": "DSLR 사진",
    "group": "AFTER",
    "tag": "",
    "pair": "B10"
   }
  },
  {
   "id": "A10",
   "stepId": "d6",
   "sort": 190,
   "title": "이식 부위 디테일",
   "usage": "사진",
   "devices": [
    "DSLR"
   ],
   "assignee": null,
   "content": "이식된 부위 디테일",
   "angle": "B11과 같은 부위",
   "action": "정지",
   "method": "근접 매크로",
   "caution": "노출 수위는 병원 가이드를 따릅니다.",
   "use": "전후 기록, 경과 비교, 광고 소재, 상세페이지·SNS",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "A10",
    "section": "DSLR 사진",
    "group": "AFTER",
    "tag": "",
    "pair": "B11"
   }
  },
  {
   "id": "A11",
   "title": "뒤통수 (공여부)",
   "usage": "사진",
   "devices": [],
   "assignee": null,
   "content": "수술 직후 모낭을 채취한 뒤통수",
   "angle": "B12와 동일",
   "action": "B12와 같은 자세",
   "method": "",
   "caution": "노출 수위는 병원 가이드를 따릅니다.",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "A11",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "d6",
   "sort": 200
  },
  {
   "id": "E30",
   "stepId": "d6",
   "sort": 210,
   "title": "헤어라인 근접",
   "usage": "공통",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "이식 직후 헤어라인 근접",
   "angle": "E04와 같은 위치",
   "action": "정면 정지",
   "method": "근접 고정",
   "caution": "R19와 한 번에 찍습니다.",
   "use": "후기형·체험형 공통, 전후 비교",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E30",
    "section": "체험형 영상",
    "group": "6. 수술 직후",
    "tag": "공통 촬영",
    "pair": "R19"
   }
  },
  {
   "id": "R19",
   "stepId": "d6",
   "sort": 220,
   "title": "수술 직후 헤어라인",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "이식 직후 헤어라인 근접",
   "angle": "R07과 같은 위치와 거리",
   "action": "정면 정지",
   "method": "근접 고정",
   "caution": "R07과 같은 앵글로 맞춰 전후 비교가 되게 합니다.",
   "use": "후기형·체험형 공통, 전후 비교",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R19",
    "section": "후기형 영상",
    "group": "수술 전후",
    "tag": "공통 촬영",
    "pair": "E30"
   }
  },
  {
   "id": "E28",
   "stepId": "d6",
   "sort": 230,
   "title": "수술 직후 정면",
   "usage": "공통",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "수술 직후 정면",
   "angle": "E01과 같은 위치",
   "action": "인터뷰어를 보며 소감",
   "method": "삼각대 고정",
   "caution": "후기형(R18)은 셀카, 여기는 고정 프레임입니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E28",
    "section": "체험형 영상",
    "group": "6. 수술 직후",
    "tag": "별도 촬영",
    "pair": "R18"
   }
  },
  {
   "id": "R18",
   "stepId": "d6",
   "sort": 240,
   "title": "수술 직후 얼굴",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "수술 직후 셀카 정면",
   "angle": "정면 셀카 거리",
   "action": "피곤하지만 편안한 표정, 짧은 소감",
   "method": "",
   "caution": "붓기와 상처 노출 범위는 병원과 먼저 확인합니다. 레퍼런스 2처럼 환자복 셀카로 찍고, R01과 같은 거리로 맞추면 전후 비교 화면에 쓸 수 있습니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "R18",
    "section": "후기형 영상",
    "group": "수술 전후",
    "tag": "별도 촬영",
    "pair": "E28"
   }
  },
  {
   "id": "E29",
   "stepId": "d6",
   "sort": 250,
   "title": "좌우",
   "usage": "공통",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "좌우 측면",
   "angle": "E05와 같은 앵글",
   "action": "고개를 천천히 돌림",
   "method": "고정",
   "caution": "E05와 나란히 편집할 수 있게 거리를 맞춥니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "E29",
    "section": "체험형 영상",
    "group": "6. 수술 직후",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "R20",
   "stepId": "d6",
   "sort": 260,
   "title": "헤어라인을 직접 보여주는 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "손으로 머리를 들어 이식부를 카메라에 보여줍니다.",
   "angle": "정면 근접",
   "action": "머리카락만 살짝 들어 올림",
   "method": "",
   "caution": "위생상 이식부를 손으로 만지지 않게 합니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "R20",
    "section": "후기형 영상",
    "group": "수술 전후",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "R21",
   "stepId": "d6",
   "sort": 270,
   "title": "거울로 확인하는 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "거울로 결과를 확인하는 모습",
   "angle": "거울과 얼굴 함께",
   "action": "거울을 보며 리액션",
   "method": "",
   "caution": "체험형(E31)과 시점이 달라야 합니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "R21",
    "section": "후기형 영상",
    "group": "수술 전후",
    "tag": "별도 촬영",
    "pair": "E31"
   }
  },
  {
   "id": "E31",
   "stepId": "d6",
   "sort": 280,
   "title": "거울로 확인",
   "usage": "체험형",
   "devices": [
    "OSMO",
    "CANON"
   ],
   "assignee": null,
   "content": "거울로 결과를 확인",
   "angle": "관찰 시점",
   "action": "거울을 보며 의료진과 이야기",
   "method": "고정",
   "caution": "후기형(R21)과 시점이 달라야 합니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "E31",
    "section": "체험형 영상",
    "group": "6. 수술 직후",
    "tag": "별도 촬영",
    "pair": "R21"
   }
  },
  {
   "id": "E32",
   "stepId": "d6",
   "sort": 290,
   "title": "의료진과 대화",
   "usage": "체험형",
   "devices": [
    "CANON"
   ],
   "assignee": null,
   "content": "주의사항 안내를 받는 투샷",
   "angle": "E10과 같은 축",
   "action": "고개 끄덕임, 질문",
   "method": "고정",
   "caution": "상담 장면과 대칭이 되게 찍습니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "E32",
    "section": "체험형 영상",
    "group": "6. 수술 직후",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "R22",
   "stepId": "d6",
   "sort": 300,
   "title": "수술이 끝난 뒤 자연스러운 모습",
   "usage": "후기형",
   "devices": [
    "PHONE"
   ],
   "assignee": null,
   "content": "회복 후 병원을 나서며 일상으로 돌아가는 모습",
   "angle": "자유",
   "action": "가방 챙기기, 엘리베이터, 차 안 셀카 (레퍼런스처럼)",
   "method": "",
   "caution": "엔딩 컷입니다. 엄지척 같은 마무리 제스처를 유도해도 좋습니다.",
   "use": "후기형 숏폼(릴스, 쇼츠), SNS 후기 게시물",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "R22",
    "section": "후기형 영상",
    "group": "수술 전후",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "E33",
   "stepId": "d6",
   "sort": 310,
   "title": "병원에서 나가는 모습",
   "usage": "체험형",
   "devices": [
    "OSMO"
   ],
   "assignee": null,
   "content": "인사하고 병원을 나서는 엔딩",
   "angle": "E06과 반대 방향 구도",
   "action": "인사하고 문을 나섬",
   "method": "고정 와이드 또는 팔로우",
   "caution": "들어오는 장면(E06)과 수미상관이 되게 찍습니다.",
   "use": "체험형 영상 (병원 방문 스토리)",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "E33",
    "section": "체험형 영상",
    "group": "6. 수술 직후",
    "tag": "",
    "pair": null
   }
  },
  {
   "id": "F01",
   "title": "매일 같은 각도 경과 사진",
   "usage": "사진",
   "devices": [],
   "assignee": null,
   "content": "환자가 집에서 정면, 대각선, 옆을 매일 같은 각도로 찍어 보내기",
   "angle": "헤어밴드로 머리를 넘기고 같은 벽 앞, 같은 거리",
   "action": "헤어밴드 착용, 무표정",
   "method": "",
   "caution": "촬영 방법을 수술 당일 환자에게 레퍼런스로 보여주고 안내합니다.",
   "use": "",
   "required": true,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "F01",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "f1",
   "sort": 10
  },
  {
   "id": "F02",
   "title": "헤어라인 근접 셀카",
   "usage": "후기형",
   "devices": [],
   "assignee": null,
   "content": "이식한 헤어라인을 가까이 찍은 셀카 사진이나 짧은 영상",
   "angle": "정면 위에서 살짝 내려다보는 셀카",
   "action": "머리를 넘겨 헤어라인 노출",
   "method": "",
   "caution": "",
   "use": "",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "F02",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "f1",
   "sort": 20
  },
  {
   "id": "F03",
   "title": "정면 셀카 영상",
   "usage": "후기형",
   "devices": [],
   "assignee": null,
   "content": "일상 공간에서 찍은 짧은 정면 셀카 영상 (2주차 전후)",
   "angle": "셀카 거리 정면",
   "action": "머리를 쓸어넘기며 헤어라인 보여주기",
   "method": "",
   "caution": "",
   "use": "",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "F03",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "f1",
   "sort": 30
  },
  {
   "id": "G01",
   "title": "다음 날 경과 사진",
   "usage": "사진",
   "devices": [],
   "assignee": null,
   "content": "정면, 대각선, 옆, 뒤를 BEFORE와 같은 구도로",
   "angle": "촬영실 같은 위치",
   "action": "헤어밴드 착용",
   "method": "",
   "caution": "붓기 노출 범위는 병원과 확인합니다.",
   "use": "",
   "required": true,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "G01",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "f2",
   "sort": 10
  },
  {
   "id": "G02",
   "title": "헤드스파 · 머리 감겨주는 모습",
   "usage": "체험형",
   "devices": [],
   "assignee": null,
   "content": "경과 확인 후 머리를 감겨주는 헤드스파 과정",
   "angle": "측면 미디엄과 손 디테일",
   "action": "편안하게 누워 있기",
   "method": "",
   "caution": "이식부를 직접 문지르지 않는 장면인지 확인합니다.",
   "use": "",
   "required": true,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "G02",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "f2",
   "sort": 20
  },
  {
   "id": "G03",
   "title": "헤드스파 후 헤어라인",
   "usage": "후기형",
   "devices": [],
   "assignee": null,
   "content": "헤드스파 후 정리된 헤어라인",
   "angle": "정면 근접",
   "action": "머리를 넘겨 헤어라인 보여주기",
   "method": "",
   "caution": "",
   "use": "",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "G03",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "f2",
   "sort": 30
  },
  {
   "id": "H01",
   "title": "실밥 제거하는 모습",
   "usage": "체험형",
   "devices": [],
   "assignee": null,
   "content": "2주 후 실밥 제거 과정",
   "angle": "측면, 의료진 손 디테일",
   "action": "편안하게 앉아 있기",
   "method": "",
   "caution": "노출 수위는 병원 가이드를 따릅니다.",
   "use": "",
   "required": true,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "H01",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "f3",
   "sort": 10
  },
  {
   "id": "H02",
   "title": "실밥 제거 후 뒤통수",
   "usage": "사진",
   "devices": [],
   "assignee": null,
   "content": "제거 후 공여부",
   "angle": "B12와 동일",
   "action": "B12와 같은 자세",
   "method": "",
   "caution": "",
   "use": "",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "H02",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "f3",
   "sort": 20
  },
  {
   "id": "H03",
   "title": "2주 경과 사진",
   "usage": "사진",
   "devices": [],
   "assignee": null,
   "content": "정면, 대각선, 옆, 뒤를 BEFORE와 같은 구도로",
   "angle": "BEFORE와 동일",
   "action": "헤어밴드 착용",
   "method": "",
   "caution": "",
   "use": "",
   "required": true,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "H03",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "f3",
   "sort": 30
  },
  {
   "id": "I01",
   "title": "6개월 경과 사진",
   "usage": "사진",
   "devices": [],
   "assignee": null,
   "content": "정면, 대각선, 옆, 뒤를 BEFORE와 같은 구도로",
   "angle": "BEFORE와 동일",
   "action": "헤어밴드 착용",
   "method": "",
   "caution": "",
   "use": "",
   "required": true,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "I01",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "f4",
   "sort": 10
  },
  {
   "id": "I02",
   "title": "12개월 경과 사진",
   "usage": "사진",
   "devices": [],
   "assignee": null,
   "content": "정면, 대각선, 옆, 뒤를 BEFORE와 같은 구도로",
   "angle": "BEFORE와 동일",
   "action": "헤어밴드 착용",
   "method": "",
   "caution": "",
   "use": "",
   "required": true,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "I02",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "f4",
   "sort": 20
  },
  {
   "id": "I03",
   "title": "전후 이마 길이 비교",
   "usage": "공통",
   "devices": [],
   "assignee": null,
   "content": "자로 눈썹부터 헤어라인까지 길이를 재서 전후 비교",
   "angle": "측면 45도 근접",
   "action": "정면 응시",
   "method": "",
   "caution": "수술 전에도 같은 방법으로 재 두면 비교가 됩니다.",
   "use": "",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "I03",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "f4",
   "sort": 30
  },
  {
   "id": "I04",
   "title": "후기 영상",
   "usage": "후기형",
   "devices": [],
   "assignee": null,
   "content": "머리를 넘기며 결과를 보여주는 셀카 영상",
   "angle": "셀카 거리",
   "action": "머리를 쓸어넘기고 소감 한마디",
   "method": "",
   "caution": "",
   "use": "",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "I04",
    "addedIn": "2026-10-04 동선 개편"
   },
   "stepId": "f4",
   "sort": 40
  }
 ],
 "refs": [
  {
   "id": "ref-1",
   "shotId": "R01",
   "kind": "video",
   "src": "ref/clips/R01.mp4",
   "poster": "ref/clips/R01.jpg",
   "label": "후기형 레퍼런스 2 · 0:01–0:03",
   "builtIn": true
  },
  {
   "id": "ref-2",
   "shotId": "R03",
   "kind": "video",
   "src": "ref/clips/R03.mp4",
   "poster": "ref/clips/R03.jpg",
   "label": "후기형 레퍼런스 1 · 0:03–0:05",
   "builtIn": true
  },
  {
   "id": "ref-3",
   "shotId": "R04",
   "kind": "video",
   "src": "ref/clips/R04.mp4",
   "poster": "ref/clips/R04.jpg",
   "label": "후기형 레퍼런스 2 · 0:04–0:07",
   "builtIn": true
  },
  {
   "id": "ref-4",
   "shotId": "R07",
   "kind": "video",
   "src": "ref/clips/E04.mp4",
   "poster": "ref/clips/E04.jpg",
   "label": "체험형 레퍼런스 · 0:09–0:12",
   "builtIn": true
  },
  {
   "id": "ref-5",
   "shotId": "R08",
   "kind": "video",
   "src": "ref/clips/R08.mp4",
   "poster": "ref/clips/R08.jpg",
   "label": "후기형 레퍼런스 1 · 0:01–0:03",
   "builtIn": true
  },
  {
   "id": "ref-6",
   "shotId": "E03",
   "kind": "video",
   "src": "ref/clips/E03.mp4",
   "poster": "ref/clips/E03.jpg",
   "label": "체험형 레퍼런스 · 0:06–0:09",
   "builtIn": true
  },
  {
   "id": "ref-7",
   "shotId": "E04",
   "kind": "video",
   "src": "ref/clips/E04.mp4",
   "poster": "ref/clips/E04.jpg",
   "label": "체험형 레퍼런스 · 0:09–0:12",
   "builtIn": true
  },
  {
   "id": "ref-8",
   "shotId": "E11",
   "kind": "video",
   "src": "ref/clips/E11.mp4",
   "poster": "ref/clips/E11.jpg",
   "label": "체험형 레퍼런스 · 0:13–0:15",
   "builtIn": true
  },
  {
   "id": "ref-9",
   "shotId": "E12",
   "kind": "video",
   "src": "ref/clips/E12.mp4",
   "poster": "ref/clips/E12.jpg",
   "label": "체험형 레퍼런스 · 0:04–0:06",
   "builtIn": true
  },
  {
   "id": "ref-10",
   "shotId": "E16",
   "kind": "video",
   "src": "ref/clips/E17.mp4",
   "poster": "ref/clips/E17.jpg",
   "label": "체험형 레퍼런스 · 0:16–0:20",
   "builtIn": true
  },
  {
   "id": "ref-11",
   "shotId": "E17",
   "kind": "video",
   "src": "ref/clips/E17.mp4",
   "poster": "ref/clips/E17.jpg",
   "label": "체험형 레퍼런스 · 0:16–0:20",
   "builtIn": true
  },
  {
   "id": "ref-12",
   "shotId": "R14",
   "kind": "video",
   "src": "ref/clips/R14.mp4",
   "poster": "ref/clips/R14.jpg",
   "label": "후기형 레퍼런스 1 · 0:04–0:06",
   "builtIn": true
  },
  {
   "id": "ref-13",
   "shotId": "R18",
   "kind": "video",
   "src": "ref/clips/R18.mp4",
   "poster": "ref/clips/R18.jpg",
   "label": "후기형 레퍼런스 2 · 0:12–0:14",
   "builtIn": true
  },
  {
   "id": "ref-14",
   "shotId": "R19",
   "kind": "video",
   "src": "ref/clips/R19.mp4",
   "poster": "ref/clips/R19.jpg",
   "label": "후기형 레퍼런스 2 · 0:09–0:11",
   "builtIn": true
  },
  {
   "id": "ref-15",
   "shotId": "R19",
   "kind": "video",
   "src": "ref/clips/R19b.mp4",
   "poster": "ref/clips/R19b.jpg",
   "label": "후기형 레퍼런스 2 · 0:23–0:26 전후 비교",
   "builtIn": true
  },
  {
   "id": "ref-16",
   "shotId": "B01",
   "kind": "image",
   "src": "ref/dslr-ref.jpg",
   "poster": null,
   "label": "DSLR 레퍼런스 · 전후 비교 사진",
   "builtIn": true
  },
  {
   "id": "ref-17",
   "shotId": "B06",
   "kind": "image",
   "src": "ref/dslr-ref.jpg",
   "poster": null,
   "label": "DSLR 레퍼런스 · 전후 비교 사진",
   "builtIn": true
  },
  {
   "id": "ref-18",
   "shotId": "A01",
   "kind": "image",
   "src": "ref/dslr-ref.jpg",
   "poster": null,
   "label": "DSLR 레퍼런스 · 전후 비교 사진",
   "builtIn": true
  },
  {
   "id": "ref-19",
   "shotId": "B01",
   "kind": "video",
   "src": "ref/clips/K4.mp4",
   "poster": "ref/clips/K4.jpg",
   "label": "경과 레퍼런스 1 · 0:00–0:04 수술 전 앞·대각선·옆",
   "builtIn": true
  },
  {
   "id": "ref-20",
   "shotId": "B04",
   "kind": "video",
   "src": "ref/clips/K1.mp4",
   "poster": "ref/clips/K1.jpg",
   "label": "경과 레퍼런스 2 · 0:00–0:03 헤어밴드 대각선·옆",
   "builtIn": true
  },
  {
   "id": "ref-21",
   "shotId": "F01",
   "kind": "video",
   "src": "ref/clips/K2.mp4",
   "poster": "ref/clips/K2.jpg",
   "label": "경과 레퍼런스 2 · 0:03–0:10 2일, 7일, 2주 같은 각도",
   "builtIn": true
  },
  {
   "id": "ref-22",
   "shotId": "F01",
   "kind": "video",
   "src": "ref/clips/K5.mp4",
   "poster": "ref/clips/K5.jpg",
   "label": "경과 레퍼런스 1 · 0:13–0:16 4일차, 6일차, 3주차",
   "builtIn": true
  },
  {
   "id": "ref-23",
   "shotId": "F03",
   "kind": "video",
   "src": "ref/clips/K3.mp4",
   "poster": "ref/clips/K3.jpg",
   "label": "경과 레퍼런스 2 · 0:10–0:14 2주 후 셀카",
   "builtIn": true
  },
  {
   "id": "ref-24",
   "shotId": "G01",
   "kind": "video",
   "src": "ref/clips/K1.mp4",
   "poster": "ref/clips/K1.jpg",
   "label": "경과 레퍼런스 2 · 같은 각도 기준",
   "builtIn": true
  },
  {
   "id": "ref-25",
   "shotId": "H03",
   "kind": "video",
   "src": "ref/clips/K7.mp4",
   "poster": "ref/clips/K7.jpg",
   "label": "경과 레퍼런스 1 · 0:17–0:19 2주차 비교",
   "builtIn": true
  },
  {
   "id": "ref-26",
   "shotId": "I01",
   "kind": "video",
   "src": "ref/clips/K4.mp4",
   "poster": "ref/clips/K4.jpg",
   "label": "경과 레퍼런스 1 · 수술 전 구도 기준",
   "builtIn": true
  },
  {
   "id": "ref-27",
   "shotId": "I03",
   "kind": "video",
   "src": "ref/clips/K6.mp4",
   "poster": "ref/clips/K6.jpg",
   "label": "경과 레퍼런스 1 · 0:19–0:23 자로 이마 길이 비교",
   "builtIn": true
  },
  {
   "id": "ref-28",
   "shotId": "I04",
   "kind": "video",
   "src": "ref/clips/K3.mp4",
   "poster": "ref/clips/K3.jpg",
   "label": "경과 레퍼런스 2 · 셀카 영상 톤",
   "builtIn": true
  }
 ],
 "legacyStepMap": {
  "s1": "d3",
  "s2": "d2",
  "s3": "d4",
  "s4": "d6",
  "s5": "d6",
  "s6": "d6"
 },
 "phases": [
  {
   "id": "today",
   "name": "수술 당일",
   "label": "오늘 동선"
  },
  {
   "id": "after",
   "name": "수술 이후",
   "label": "수술 이후 경과"
  }
 ],
 "legacy": {
  "crew": [
   {
    "id": "c1",
    "label": "촬영자 1",
    "devices": [
     "PHONE"
    ],
    "equip": "핸드폰",
    "focus": "후기형 중심",
    "roles": [
     "셀프캠 느낌",
     "모델 얼굴",
     "헤어라인",
     "자연스러운 리액션",
     "개인 SNS처럼 보이는 장면",
     "근접 디테일"
    ],
    "name": ""
   },
   {
    "id": "c2",
    "label": "촬영자 2",
    "devices": [
     "OSMO"
    ],
    "equip": "DJI Osmo",
    "focus": "체험형 중심",
    "roles": [
     "모델 동선",
     "병원 방문",
     "상담",
     "디자인",
     "수술 과정",
     "이동 장면",
     "전체적인 상황과 흐름"
    ],
    "name": ""
   },
   {
    "id": "c3",
    "label": "촬영자 3",
    "devices": [
     "CANON",
     "DSLR"
    ],
    "equip": "Canon",
    "focus": "메인 영상 및 DSLR 사진",
    "roles": [
     "안정적인 메인 영상",
     "고화질 디테일",
     "헤어라인",
     "의료진",
     "수술 과정",
     "BEFORE 사진",
     "DESIGN 사진",
     "AFTER 사진"
    ],
    "name": ""
   }
  ],
  "devices": {
   "PHONE": {
    "label": "PHONE",
    "equip": "핸드폰",
    "method": "아이폰 핸드헬드, 셀카 거리 30~60cm. 짐벌 없이 자연스러운 손떨림을 남깁니다."
   },
   "OSMO": {
    "label": "OSMO",
    "equip": "DJI Osmo",
    "method": "짐벌 팔로우. 모델이 카메라를 보지 않는 관찰 시점을 유지합니다."
   },
   "CANON": {
    "label": "CANON",
    "equip": "Canon",
    "method": "삼각대 또는 슬라이더로 고정. 안정적인 메인 프레임과 고화질 디테일."
   },
   "DSLR": {
    "label": "DSLR",
    "equip": "Canon (사진)",
    "method": "삼각대 고정. 같은 거리, 같은 높이, 같은 조명. 85mm(풀프레임 환산), f/8, ISO 100~200 권장"
   }
  },
  "steps": [
   {
    "id": "s1",
    "no": "01",
    "name": "수술 전",
    "short": "수술 전",
    "note": "수술 후에는 다시 찍을 수 없습니다. DSLR BEFORE는 헤어라인 디자인 전에 끝냅니다.",
    "brief": {
     "PHONE": {
      "head": "모델 중심",
      "text": "모델이 직접 자신의 헤어라인을 보여주는 느낌",
      "usage": "후기형"
     },
     "OSMO": {
      "head": "동선 중심",
      "text": "병원 도착부터 대기, 상담실 이동까지 따라가기",
      "usage": "체험형"
     },
     "CANON": {
      "head": "메인",
      "text": "정면, 좌우, 헤어라인 디테일을 안정적으로",
      "usage": "공통"
     },
     "DSLR": {
      "head": "BEFORE",
      "text": "정면부터 고민 부위까지. 디자인 전에 끝낸다",
      "usage": "사진"
     }
    }
   },
   {
    "id": "s2",
    "no": "02",
    "name": "상담",
    "short": "상담",
    "note": "수술이 시작되면 다시 만들 수 없는 장면입니다.",
    "brief": {
     "PHONE": {
      "head": "모델 중심",
      "text": "옆자리 지인 시점으로 표정과 리액션",
      "usage": "후기형"
     },
     "OSMO": {
      "head": "흐름 중심",
      "text": "거울 보는 모습과 질문, 리액션",
      "usage": "체험형"
     },
     "CANON": {
      "head": "메인",
      "text": "투샷과 의료진이 헤어라인을 확인하는 장면",
      "usage": "체험형"
     }
    }
   },
   {
    "id": "s3",
    "no": "03",
    "name": "헤어라인 디자인",
    "short": "디자인",
    "note": "헤어밴드 위치를 DSLR과 같게 맞춥니다.",
    "brief": {
     "PHONE": {
      "head": "모델 중심",
      "text": "후기형용 자연스러운 리액션과 거울 확인",
      "usage": "후기형"
     },
     "OSMO": {
      "head": "과정 중심",
      "text": "의료진이 디자인하는 전체 과정과 모델 움직임",
      "usage": "체험형"
     },
     "CANON": {
      "head": "디테일 중심",
      "text": "헤어라인 디자인 과정과 의료진 손",
      "usage": "공통"
     },
     "DSLR": {
      "head": "DESIGN",
      "text": "디자인 완료 후 사진 촬영",
      "usage": "사진"
     }
    }
   },
   {
    "id": "s4",
    "no": "04",
    "name": "수술 준비",
    "short": "수술 준비",
    "note": "수술실 이동 전에 수술 직전 컷을 반드시 확보합니다.",
    "brief": {
     "PHONE": {
      "head": "모델 중심",
      "text": "가운을 입고 대기하는 셀카와 준비 모습",
      "usage": "후기형"
     },
     "OSMO": {
      "head": "동선 중심",
      "text": "준비 과정과 수술실 이동",
      "usage": "체험형"
     }
    }
   },
   {
    "id": "s5",
    "no": "05",
    "name": "수술",
    "short": "수술",
    "note": "촬영 가능 범위와 노출 수위는 병원 가이드를 먼저 확인합니다.",
    "brief": {
     "OSMO": {
      "head": "흐름 중심",
      "text": "준비 과정과 수술 중 모델 모습",
      "usage": "체험형"
     },
     "CANON": {
      "head": "디테일 중심",
      "text": "의료진 움직임과 손, 허용 범위의 수술 디테일",
      "usage": "공통"
     }
    }
   },
   {
    "id": "s6",
    "no": "06",
    "name": "수술 직후",
    "short": "수술 직후",
    "note": "수술 전과 같은 위치와 앵글로 맞춰 전후가 비교되게 찍습니다.",
    "brief": {
     "PHONE": {
      "head": "모델 중심",
      "text": "결과를 직접 보여주고 일상으로 돌아가는 엔딩",
      "usage": "후기형"
     },
     "OSMO": {
      "head": "흐름 중심",
      "text": "거울 확인과 병원을 나서는 엔딩",
      "usage": "체험형"
     },
     "CANON": {
      "head": "메인",
      "text": "수술 전과 같은 앵글로 정면, 좌우, 헤어라인",
      "usage": "공통"
     },
     "DSLR": {
      "head": "AFTER",
      "text": "BEFORE와 같은 위치, 같은 구도",
      "usage": "사진"
     }
    }
   }
  ]
 }
});
