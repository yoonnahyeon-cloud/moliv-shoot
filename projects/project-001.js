/* MOLIV CONTENT PLANNER · PROJECT 001 (schema 4): 2026-10-05 촬영 당일 동선만 남긴 버전. 이전 기획 데이터는 git 기록에 있습니다. */
(window.MOLIV_PROJECTS=window.MOLIV_PROJECTS||[]).push({
 "schema": 4,
 "id": "001",
 "code": "PROJECT 001",
 "brand": "MOLIV",
 "title": "여자 모발이식 모델 촬영",
 "date": "2026-10-05",
 "dateLabel": "2026.10.05",
 "model": "여자 모델 1명",
 "crewLine": [
  [
   "나현",
   "아이폰"
  ],
  [
   "호창",
   "오즈모"
  ]
 ],
 "note": "촬영은 3~6번만 합니다. 모든 컷을 사진과 영상으로 찍습니다.",
 "phases": [
  {
   "id": "today",
   "name": "오늘 동선"
  }
 ],
 "steps": [
  {
   "id": "d1",
   "phase": "today",
   "no": "1",
   "name": "수술 전 안내",
   "short": "안내",
   "place": "9층 상담실",
   "owner": "호창",
   "shoot": false
  },
  {
   "id": "d2",
   "phase": "today",
   "no": "2",
   "name": "계약서 작성",
   "short": "계약",
   "place": "9층 상담실",
   "owner": "나현",
   "shoot": false
  },
  {
   "id": "d3",
   "phase": "today",
   "no": "3",
   "name": "비포 사진·영상",
   "short": "비포",
   "place": "9층 촬영실",
   "owner": "나현, 호창",
   "detail": "앞 / 옆 / 대각선 / 뒤",
  "note": "수술 후에는 다시 찍을 수 없습니다. 헤어밴드로 머리를 넘겨 헤어라인이 다 보이게 합니다.",
   "shoot": true
  },
  {
   "id": "d4",
   "phase": "today",
   "no": "4",
   "name": "디자인",
   "short": "디자인",
   "place": "9층 상담실",
   "owner": "나현, 호창",
   "detail": "디자인 & 디자인하는 모습",
  "note": "실제 디자인이라 다시 그릴 수 없습니다.",
   "shoot": true
  },
  {
   "id": "d5",
   "phase": "today",
   "no": "5",
   "name": "디자인 후 촬영",
   "short": "디자인 후",
   "place": "",
   "owner": "나현, 호창",
   "detail": "앞 / 옆 / 대각선",
  "note": "비포와 같은 위치, 같은 구도로 찍습니다.",
   "shoot": true
  },
  {
   "id": "d6",
   "phase": "today",
   "no": "6",
   "name": "수술 후",
   "short": "수술 후",
   "place": "10층 시술실",
   "owner": "나현, 호창",
   "detail": "수술 부위 헤어라인과 뒤통수",
   "shoot": true
  }
 ],
 "shots": [
  {
   "id": "T1",
   "stepId": "d1",
   "sort": 10,
   "title": "민증 찍어서 나현 카톡으로 전달",
   "usage": "",
   "devices": [],
   "assignee": null,
   "content": "수술 전 안내 중 주민등록증을 찍어 나현에게 카톡으로 보냅니다.",
   "angle": "",
   "action": "",
   "method": "",
   "caution": "개인정보입니다. 전달 후 촬영 기기에서 지우고 콘텐츠에 쓰지 않습니다.",
   "use": "",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "T1"
   }
  },
  {
   "id": "T2",
   "stepId": "d2",
   "sort": 10,
   "title": "계약서 작성",
   "usage": "",
   "devices": [],
   "assignee": null,
   "content": "",
   "angle": "",
   "action": "",
   "method": "",
   "caution": "",
   "use": "",
   "required": false,
   "retakeable": true,
   "memo": "",
   "origin": {
    "code": "T2"
   }
  },
  {
   "id": "B1",
   "stepId": "d3",
   "sort": 10,
   "title": "앞",
   "usage": "",
   "devices": [],
   "assignee": null,
   "content": "정면",
   "angle": "",
   "action": "",
   "method": "사진과 영상 모두",
   "caution": "",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B1"
   }
  },
  {
   "id": "B2",
   "stepId": "d3",
   "sort": 20,
   "title": "옆 (좌·우)",
   "usage": "",
   "devices": [],
   "assignee": null,
   "content": "좌측, 우측 90도",
   "angle": "",
   "action": "",
   "method": "사진과 영상 모두",
   "caution": "",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B2"
   }
  },
  {
   "id": "B3",
   "stepId": "d3",
   "sort": 30,
   "title": "대각선 (좌·우)",
   "usage": "",
   "devices": [],
   "assignee": null,
   "content": "좌측, 우측 45도",
   "angle": "",
   "action": "",
   "method": "사진과 영상 모두",
   "caution": "",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B3"
   }
  },
  {
   "id": "B4",
   "stepId": "d3",
   "sort": 40,
   "title": "뒤",
   "usage": "",
   "devices": [],
   "assignee": null,
   "content": "뒤통수 전체",
   "angle": "",
   "action": "",
   "method": "사진과 영상 모두",
   "caution": "",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "B4"
   }
  },
  {
   "id": "G1",
   "stepId": "d4",
   "sort": 10,
   "title": "디자인하는 모습",
   "usage": "",
   "devices": [],
   "assignee": null,
   "content": "원장님이 헤어라인을 그리는 과정과 모델 얼굴",
   "angle": "",
   "action": "",
   "method": "사진과 영상 모두",
   "caution": "",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "G1"
   }
  },
  {
   "id": "G2",
   "stepId": "d4",
   "sort": 20,
   "title": "디자인 라인 근접",
   "usage": "",
   "devices": [],
   "assignee": null,
   "content": "그려진 라인 클로즈업",
   "angle": "",
   "action": "",
   "method": "사진과 영상 모두",
   "caution": "",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "G2"
   }
  },
  {
   "id": "A1",
   "stepId": "d5",
   "sort": 10,
   "title": "앞",
   "usage": "",
   "devices": [],
   "assignee": null,
   "content": "디자인 라인이 보이는 정면",
   "angle": "비포와 같은 위치",
   "action": "",
   "method": "사진과 영상 모두",
   "caution": "",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "A1"
   }
  },
  {
   "id": "A2",
   "stepId": "d5",
   "sort": 20,
   "title": "옆 (좌·우)",
   "usage": "",
   "devices": [],
   "assignee": null,
   "content": "좌측, 우측 90도",
   "angle": "비포와 같은 위치",
   "action": "",
   "method": "사진과 영상 모두",
   "caution": "",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "A2"
   }
  },
  {
   "id": "A3",
   "stepId": "d5",
   "sort": 30,
   "title": "대각선 (좌·우)",
   "usage": "",
   "devices": [],
   "assignee": null,
   "content": "좌측, 우측 45도",
   "angle": "비포와 같은 위치",
   "action": "",
   "method": "사진과 영상 모두",
   "caution": "",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "A3"
   }
  },
  {
   "id": "S1",
   "stepId": "d6",
   "sort": 10,
   "title": "수술 부위 헤어라인",
   "usage": "",
   "devices": [],
   "assignee": null,
   "content": "수술 후 이식한 헤어라인",
   "angle": "",
   "action": "",
   "method": "사진과 영상 모두",
   "caution": "노출 범위는 병원 가이드를 따릅니다.",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "S1"
   }
  },
  {
   "id": "S2",
   "stepId": "d6",
   "sort": 20,
   "title": "뒤통수",
   "usage": "",
   "devices": [],
   "assignee": null,
   "content": "수술 후 모낭을 채취한 뒤통수",
   "angle": "",
   "action": "",
   "method": "사진과 영상 모두",
   "caution": "",
   "use": "",
   "required": true,
   "retakeable": false,
   "memo": "",
   "origin": {
    "code": "S2"
   }
  }
 ],
 "refs": [
  {
   "id": "ref-1",
   "shotId": "B1",
   "kind": "video",
   "src": "ref/clips/K4.mp4",
   "poster": "ref/clips/K4.jpg",
   "label": "레퍼런스 · 수술 전 앞·대각선·옆",
   "builtIn": true
  },
  {
   "id": "ref-2",
   "shotId": "B3",
   "kind": "video",
   "src": "ref/clips/K1.mp4",
   "poster": "ref/clips/K1.jpg",
   "label": "레퍼런스 · 헤어밴드 대각선·옆",
   "builtIn": true
  },
  {
   "id": "ref-3",
   "shotId": "G1",
   "kind": "video",
   "src": "ref/clips/E17.mp4",
   "poster": "ref/clips/E17.jpg",
   "label": "레퍼런스 · 라인 그리는 과정",
   "builtIn": true
  },
  {
   "id": "ref-4",
   "shotId": "S1",
   "kind": "video",
   "src": "ref/clips/R19.mp4",
   "poster": "ref/clips/R19.jpg",
   "label": "레퍼런스 · 수술 직후 헤어라인",
   "builtIn": true
  }
 ]
});
