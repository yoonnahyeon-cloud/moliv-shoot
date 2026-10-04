# MOLIV CONTENT PLANNER

촬영 현장용 디지털 콜시트. 정적 사이트(GitHub Pages)로 배포되며 빌드 과정이 없습니다.

## 파일 구성

| 파일 | 역할 |
| --- | --- |
| `index.html` | 화면 뼈대 |
| `app.css` | 디자인 |
| `app.js` | 화면과 기능 (브리핑, 촬영팀, 단계별 업무 지시, 필수컷, 편집, 레퍼런스) |
| `store.js` | 저장 계층. 지금은 localStorage + IndexedDB, 나중에 서버 API로 교체하는 지점 |
| `projects/project-001.js` | PROJECT 001의 처음 기획 데이터 |
| `ref/` | 레퍼런스 원본 영상, 이미지, 필수컷용 짧은 반복 클립(`ref/clips/`) |
| `vendor/Sortable.min.js` | 드래그 앤 드롭 (SortableJS 1.15.2, MIT) |

## 새 프로젝트 추가

1. `projects/project-001.js`를 복사해 `projects/project-002.js`를 만들고 `id`, 제목, 결과물, 촬영팀, 단계, 컷을 바꿉니다.
2. `index.html`에 `<script src="projects/project-002.js"></script>`를 추가합니다.
3. `?p=002`로 열면 그 프로젝트가 열립니다. 주소에 `p`가 없으면 마지막에 등록한 프로젝트가 열립니다.

프로젝트마다 저장 공간이 분리됩니다 (`moliv.planner.v2.<id>`).

## 데이터 구조 (schema 2)

현장에서 편집한 내용은 처음 기획 파일과 분리된 상태(state)에 저장됩니다. 모든 레코드는 id와 외래키를 가진 평평한 구조라 그대로 DB 테이블로 옮길 수 있습니다.

- `shots`: id, projectId, stepId, sort, title, usage, devices[], assignee(crew id 또는 null이면 장비 기준 자동), content, method, angle, action, caution, use, required, retakeable, memo, status(todo/done/retake), statusAt, origin(처음 기획의 컷 코드 등)
- `refs`: id, projectId, shotId, kind(video/image/gif/url), src 또는 blobKey, poster, label
- `crew`: id, name
- `notes`: id, stepId, text (단계별 현장 메모)
- `trash`: 삭제한 컷과 레퍼런스 (복구용)

업로드한 레퍼런스 파일은 IndexedDB `moliv-media/blobs`에 `blobKey`로 저장됩니다. 서버로 전환할 때는 `store.js`의 `LocalAdapter`(load/save/reset)와 `Blobs`(put/get)를 API 호출로 바꾸면 됩니다.
