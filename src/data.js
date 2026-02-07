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
