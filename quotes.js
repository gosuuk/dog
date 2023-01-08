const quotes = [
  {
    quote: "INTJ : 용의주도한 전략가형 / ",
    author: "고집셈 융통성 부족 자기 관심 분야 외 신경 쓰지 않음.",
  },
  {
    quote: "INTP : 논리적인 사색가 / ",
    author: "게으른 천재 많음, 상처 안받음, 비 논리적이고 어리석은 사람보면 화남.",
  },
  {
    quote:
      "ENTJ : 대담한 통솔자 / ",
    author: "선척적 리더, 끈기 책임감이 뛰어남, 감성팔이 안통함, 비효율적 제일 싫어함.",
  },
  {
    quote: "ENTP : 뜨거운 논쟁을 즐기는 변론가 / ",
    author: "완벽주의자와 거리가 멀고 관대, 느긋한 삶을 가짐, 일단 저지르고 생각은 나중에.",
  },
  {
    quote: "INFJ : 선의의 옹호자 / ",
    author: "겉으로는 이상적인 우정이나 사랑은 없다며 냉소적, 속으로는 순수한 소통을 갈망.",
  },
  {
    quote: "INFP : 열정적인 중재자 / ",
    author: "대체적으로 적응력 종고 관대하고 개방적 이해심 많음, 나만의 신념, 가치관이 있음.",
  },
  {
    quote: "ENFJ : 정의로운 사회운동가 / ",
    author: "사람들을 이끄는 것에 타고난 기질 인류애, 정의감 넘침 오지랖 심함, 싫은 소리 못함.",
  },
  {
    quote: "ENFP : 재기발랄한 활동가 / ",
    author: "긍적적이며 낙천적임 인싸인 경우가 많음 새로운 인관관계에 두려움이 없음 계획 세우기 귀찮아함, 충동구매 활동 잘함",
  },
  {
    quote: "ISTJ : 청렴결백한 논리주의자 / ",
    author: "현실 감각이 뛰어나고 말투도 직설적이라 가끔 딱딱함 다른 사람일에 신경 안씀.",
  },
  {
    quote: "ISFJ : 용감한 수호자 / ",
    author: "내향형인데 상황에 따라 외향 코스프레 가능 나서는 거 싫어하는데 관심받는 것 좋음",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;