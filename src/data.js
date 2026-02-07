export const questions = [
  {
    id: 1,
    title: "주말의 연락",
    image: "/images/scenario_party.png",
    story: "평화로운 주말 저녁, 갑자기 친구에게서 연락이 왔다. '오늘 밤 완전 핫한 파티가 있는데 같이 갈래? 유명 인플루언서도 온대!'",
    question: "당신의 반응은?",
    options: [
      { text: "오! 대박! 당장 준비하고 나간다. (에너지 충전!)", type: "EI", value: "E" },
      { text: "음... 오늘은 집에서 쉬고 싶은데... 거절한다.", type: "EI", value: "I" }
    ]
  },
  {
    id: 2,
    title: "미술관 데이트",
    image: "/images/scenario_art.png",
    story: "친구와 함께 미술관에 갔다. 벽에는 난해한 추상화가 걸려있다. 소용돌이치는 색채와 알 수 없는 도형들...",
    question: "작품을 보며 드는 생각은?",
    options: [
      { text: "색감이 강렬하네. 붓터치가 아주 거칠어. (보이는 그대로 감상)", type: "SN", value: "S" },
      { text: "이 그림은 작가의 혼란스러운 내면세계를 표현한 것 같아. (숨겨진 의미 상상)", type: "SN", value: "N" }
    ]
  },
  {
    id: 3,
    title: "우울한 친구",
    image: "/images/scenario_comfort.png",
    story: "친구가 눈물을 흘리며 당신을 찾아왔다. '나... 오늘 면접 망쳤어... 너무 속상해...'",
    question: "당신이 친구에게 건넬 첫 마디는?",
    options: [
      { text: "어떡해... 많이 힘들지? 맛있는 거라도 먹으러 갈까? (감정 공감)", type: "TF", value: "F" },
      { text: "어떤 질문이 나왔는데? 대답은 어떻게 했어? (상황 분석 및 해결)", type: "TF", value: "T" }
    ]
  },
  {
    id: 4,
    title: "여행 계획",
    image: "/images/scenario_date.png",
    story: "다음 주에 연인과 해외여행을 가기로 했다. 비행기 표는 끊었고, 이제 세부 일정을 짤 차례다.",
    question: "당신의 여행 계획 스타일은?",
    options: [
      { text: "날짜별, 시간별로 엑셀에 쫙 정리한다. 맛집 예약까지 필수! (철저한 계획)", type: "JP", value: "J" },
      { text: "가고 싶은 곳 몇 개만 정해두고, 그날 기분에 따라 움직인다. (자유로운 영혼)", type: "JP", value: "P" }
    ]
  },
  {
    id: 5,
    title: "캠핑장 텐트 설치",
    image: "/images/scenario_camping.png",
    story: "친구들과 캠핑을 왔다. 텐트를 설치해야 하는데, 설명서가 조금 복잡해 보인다.",
    question: "당신의 행동은?",
    options: [
      { text: "일단 설명서를 꼼꼼히 읽고 순서대로 조립한다. (정석대로)", type: "SN", value: "S" },
      { text: "대충 이런 모양이니까... 감으로 일단 맞춰본다! (직관적으로)", type: "SN", value: "N" }
    ]
  },
  {
    id: 6,
    title: "지갑 분실 사건",
    image: "/images/scenario_lost.png",
    story: "친구가 길거리에서 지갑을 잃어버렸다고 당황해하며 전화를 했다.",
    question: "당신의 반응은?",
    options: [
      { text: "마지막으로 쓴 곳이 어디야? 카드 정지부터 했어? (해결책 제시)", type: "TF", value: "T" },
      { text: "어떡해! 진짜 놀랐겠다... 지금 어디야? (놀란 마음 위로)", type: "TF", value: "F" }
    ]
  },
  {
    id: 7,
    title: "노래방 데뷔",
    image: "/images/scenario_karaoke.png",
    story: "회식 2차로 노래방에 왔다. 분위기가 조금 어색한데 누군가 첫 곡을 불러야 한다.",
    question: "당신이라면?",
    options: [
      { text: "내가 먼저 나서서 분위기를 띄운다! (무대의 주인공)", type: "EI", value: "E" },
      { text: "누가 시키기 전까지는 조용히 탬버린만 흔든다. (관객 모드)", type: "EI", value: "I" }
    ]
  },
  {
    id: 8,
    title: "갑작스러운 소나기",
    image: "/images/scenario_rain.png",
    story: "약속 장소로 가는데 갑자기 비가 쏟아진다. 우산은 없다.",
    question: "이때 드는 생각은?",
    options: [
      { text: "아... 일기예보 확인할걸. 편의점에서 우산 사야겠다. (빠른 대처)", type: "JP", value: "J" },
      { text: "비 맞으니까 뭔가 영화 속 주인공 같은데? 오히려 좋아! (긍정적 수용)", type: "JP", value: "P" }
    ]
  },
  {
    id: 9,
    title: "서점에서의 선택",
    image: "/images/scenario_bookstore.png",
    story: "오랜만에 서점에 들렀다. 어떤 책을 고를까?",
    question: "당신의 손이 가는 책은?",
    options: [
      { text: "실용적인 자기계발서나 역사 관련 논픽션 (현실적 지식)", type: "SN", value: "S" },
      { text: "상상력을 자극하는 판타지 소설이나 SF (새로운 세계)", type: "SN", value: "N" }
    ]
  },
  {
    id: 10,
    title: "발표 시간",
    image: "/images/scenario_presentation.png",
    story: "많은 사람들 앞에서 프로젝트 발표를 하게 되었다.",
    question: "발표 직전 당신의 상태는?",
    options: [
      { text: "사람들의 시선이 즐겁다. 빨리 내 생각을 말하고 싶다! (에너지 발산)", type: "EI", value: "E" },
      { text: "너무 긴장된다... 실수하면 어쩌지? 주목받는 게 부담스럽다. (내면 집중)", type: "EI", value: "I" }
    ]
  },
  {
    id: 11,
    title: "요리 도전",
    image: "/images/scenario_cooking.png",
    story: "새로운 요리에 도전해보기로 했다. 재료는 다 준비되었다.",
    question: "당신의 요리 스타일은?",
    options: [
      { text: "레시피에 적힌 정량 그대로 계량해서 만든다. (정확성 중시)", type: "SN", value: "S" },
      { text: "레시피는 참고만 할 뿐, 내 감을 믿고 간을 맞춘다. (창의성 중시)", type: "SN", value: "N" }
    ]
  },
  {
    id: 12,
    title: "방 청소하는 날",
    image: "/images/scenario_cleaning.png",
    story: "방이 꽤 지저분해졌다. 청소를 해야 할 것 같다.",
    question: "당신의 청소 방식은?",
    options: [
      { text: "주말 오전 10시! 딱 정해두고 계획적으로 싹 치운다. (규칙적)", type: "JP", value: "J" },
      { text: "더 이상 미룰 수 없을 때 한 번에 몰아서 치운다. (충동적)", type: "JP", value: "P" }
    ]
  },
  {
    id: 13,
    title: "선물 고르기",
    image: "/images/scenario_gift.png",
    story: "친한 친구의 생일 선물을 고르고 있다.",
    question: "가장 중요하게 생각하는 기준은?",
    options: [
      { text: "친구가 평소에 필요하다고 했던 물건 (실용성)", type: "TF", value: "T" },
      { text: "내 마음이 담긴, 친구에게 감동을 줄 수 있는 물건 (의미)", type: "TF", value: "F" }
    ]
  },
  {
    id: 14,
    title: "야근 중",
    image: "/images/scenario_work.png",
    story: "오늘까지 끝내야 할 일이 있어 늦은 시간까지 사무실에 남아있다.",
    question: "일을 처리하는 당신의 방식은?",
    options: [
      { text: "우선순위에 따라 체계적으로 하나씩 끝낸다. (계획적)", type: "JP", value: "J" },
      { text: "마감 시간이 다가올수록 집중력이 올라가서 확 끝낸다. (임박형)", type: "JP", value: "P" }
    ]
  },
  {
    id: 15,
    title: "조선시대 선비",
    image: "/images/scenario_bookstore.png",
    story: "당신은 조선시대의 선비다. 과거 시험이 코앞인데 라이벌이 찾아와 술 한잔 하자고 한다.",
    question: "당신의 선택은?",
    options: [
      { text: "마음을 다잡고 정중히 거절한 후 공부에 집중한다. (목표 지향)", type: "JP", value: "J" },
      { text: "술 한잔 정도는 머리 식히는 데 좋지! 풍류를 즐긴다. (여유 지향)", type: "JP", value: "P" }
    ]
  },
  {
    id: 16,
    title: "로마 원로원 회의",
    image: "/images/scenario_presentation.png",
    story: "당신은 고대 로마의 원로원 의원이다. 격렬한 토론이 벌어지고 있다.",
    question: "당신의 행동은?",
    options: [
      { text: "논리적인 화술로 상대방의 허점을 찌르며 주장을 펼친다. (분석적)", type: "TF", value: "T" },
      { text: "사람들의 감정에 호소하며 지지를 이끌어낸다. (호소력)", type: "TF", value: "F" }
    ]
  },
  {
    id: 17,
    title: "그리스 신화의 제우스",
    image: "/images/scenario_rain.png",
    story: "당신은 제우스다. 인간들이 제물을 바치지 않아 화가 났다.",
    question: "어떻게 벌을 내릴까?",
    options: [
      { text: "번개를 내리쳐 본보기를 보인다! 즉각적인 응징! (행동파)", type: "EI", value: "E" },
      { text: "꿈에 나타나 엄중히 경고하고 지켜본다. (신중파)", type: "EI", value: "I" }
    ]
  },
  {
    id: 18,
    title: "지브리 세상의 비행",
    image: "/images/scenario_camping.png",
    story: "당신은 마법 빗자루를 타고 하늘을 날고 있다. 아래에는 평화로운 마을이 보인다.",
    question: "어떤 상상을 하는가?",
    options: [
      { text: "바람의 속도가 시원하다. 저 집 지붕 색깔 예쁘네. (감각적)", type: "SN", value: "S" },
      { text: "저 구름 너머에는 뭐가 있을까? 다른 세상으로 가는 문일까? (직관적)", type: "SN", value: "N" }
    ]
  },
  {
    id: 19,
    title: "마블 히어로의 등장",
    image: "/images/scenario_karaoke.png",
    story: "빌런이 도시를 파괴하고 있다. 당신은 슈퍼히어로다.",
    question: "어떻게 등장할 것인가?",
    options: [
      { text: "화려한 착지와 함께 멋진 대사를 날리며 등장! (관종형 히어로)", type: "EI", value: "E" },
      { text: "그림자 속에 숨어 있다가 결정적인 순간에 기습한다. (다크 히어로)", type: "EI", value: "I" }
    ]
  },
  {
    id: 20,
    title: "사이버펑크 해커",
    image: "/images/scenario_party.png",
    story: "네온 사인이 가득한 2077년, 당신은 기업의 기밀 정보를 해킹했다.",
    question: "이 정보를 어떻게 할까?",
    options: [
      { text: "돈을 가장 많이 주는 곳에 판다. 이득이 최고지. (실리 추구)", type: "TF", value: "T" },
      { text: "세상의 정의를 위해 인터넷에 무료로 공개한다. (가치 추구)", type: "TF", value: "F" }
    ]
  },
  {
    id: 21,
    title: "중세시대 드래곤",
    image: "/images/scenario_lost.png",
    story: "던전 깊은 곳에서 전설의 드래곤과 마주쳤다.",
    question: "당신의 첫 반응은?",
    options: [
      { text: "검을 뽑고 약점이 어디인지 관찰한다. (현실적 대응)", type: "SN", value: "S" },
      { text: "드래곤과 대화가 통하지 않을까? 전설 속 이야기를 떠올린다. (상상력)", type: "SN", value: "N" }
    ]
  },
  {
    id: 22,
    title: "서부의 무법자",
    image: "/images/scenario_work.png",
    story: "황야의 무법자가 되어 현상수배범을 쫓고 있다. 갈림길이 나왔다.",
    question: "어느 길로 갈까?",
    options: [
      { text: "미리 조사해둔 지도를 보고 확실한 길로 간다. (계획적)", type: "JP", value: "J" },
      { text: "말발굽 자국이 희미하게 보이는 쪽으로 느낌을 믿고 간다. (유동적)", type: "JP", value: "P" }
    ]
  },
  {
    id: 23,
    title: "느와르 탐정",
    image: "/images/scenario_rain.png",
    story: "비 내리는 밤, 의문의 의뢰인이 사무실을 찾아왔다.",
    question: "사건을 맡으면서 가장 먼저 하는 생각은?",
    options: [
      { text: "의뢰비는 얼마지? 사건의 승산은 있나? (이성적 판단)", type: "TF", value: "T" },
      { text: "저 사람의 눈빛이 너무 슬퍼 보여. 무슨 사연일까? (감성적 접근)", type: "TF", value: "F" }
    ]
  },
  {
    id: 24,
    title: "우주선 조종사",
    image: "/images/scenario_art.png",
    story: "우주 항해 중 미확인 행성을 발견했다. 착륙할 것인가?",
    question: "당신의 결정은?",
    options: [
      { text: "매뉴얼을 확인하고 본부의 지시를 기다린다. (신중함)", type: "JP", value: "J" },
      { text: "이건 운명이야! 당장 탐사선을 띄운다. (모험심)", type: "JP", value: "P" }
    ]
  }
];

export const results = {
  ESTJ: "현실적이고 추진력 있는 지도자",
  ESTP: "모험을 즐기는 사업가",
  ESFJ: "친절하고 사교적인 외교관",
  ESFP: "자유로운 영혼의 연예인",
  ENTJ: "대담한 통솔자",
  ENTP: "뜨거운 논쟁을 즐기는 변론가",
  ENFJ: "정의로운 사회운동가",
  ENFP: "재기발랄한 활동가",
  ISTJ: "청렴결백한 논리주의자",
  ISTP: "만능 재주꾼",
  ISFJ: "용감한 수호자",
  ISFP: "호기심 많은 예술가",
  INTJ: "용의주도한 전략가",
  INTP: "논리적인 사색가",
  INFJ: "선의의 옹호자",
  INFP: "열정적인 중재자"
};
