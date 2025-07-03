const fieldContainer = document.getElementById("fieldContainer");
const fieldSelect = document.getElementById("fieldSelect");
const addFieldBtn = document.getElementById("addFieldBtn");

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 필드 템플릿
const fieldTemplates = {
  name: { label: "이름", list: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] },
  age: { label: "나이", list: ["아기", "어린이", "청소년", "성인", "중년", "장년", "노인"] },
  trait: {
    label: "성격",
    isTrait: true,
    list: ["감성이 풍부한", "감정과잉인", "강박적인", "강압적인", "개인적인", "객관적인", "거만한", "건전한", "게으른", "격정적인", "결단력 있는", "겸손한", "경계심이 강한", "경박함", "고마워할 줄 모르는", "고마워할 줄 아는", "고집불통인", "공감을 잘하는", "과민한", "관능적인", "관대한", "관용적인", "관찰력이 뛰어난", "광적인", "교양 있는", "교태를 부리는", "기만적인", "기발한", "깐깐한", "꼼꼼한", "끈기 있는", "낙천적인", "남의 말을 하기 좋아하는", "낭비벽이 있는", "내성적인", "냉담함", "냉소적인", "놀기 좋아하는", "눈치 없는", "느긋한", "다정한", "다혈질인", "대담한", "대립을 일삼는", "대범한", "독립적인", "마초적인", "말썽을 피우는", "매력적인", "명예를 중시하는", "모험심이 강한", "몰입하는", "무관심한", "무례한", "무모한", "무식한", "무책임한", "문란한", "물질만능주의인", "뭐든 아는 체하는", "미신을 믿는", "반사회적인", "반항적인", "방어적인", "방종하는", "변덕스러운", "별난", "병적으로 내성적인", "병적인", "보수적인", "보호본능이 강한", "부주의한", "부지런한", "분석적인", "불안정한", "불충한", "불평이 많은", "비겁한", "비관적인", "비굴한", "비윤리적인", "비이성적인", "비판적인", "비협조적인", "사색적인", "사서 걱정하는", "사심이 없는", "사회적 인식이 높은", "산만한", "상상력이 풍부한", "상스러운", "설득력 있는", "성마름", "소박한", "소심한", "소유욕이 강한", "순수한", "순종적인", "신경과민인", "신중한", "심술궂음", "아니꼬운", "악독한", "알뜰한", "앙갚음을 하는", "애국적인", "애정결핍인", "야심만만한", "양식 있는", "어른스러운", "어리석은", "어린아이 같은", "얼버무리며 회피하는", "엉뚱한", "열정적인", "영감을 주는", "영적인", "예의 바른", "오만한", "오지랖이 넓은", "온화한", "완벽주의인", "외향적인", "용기 있는", "우둔한", "우유부단한", "우호적인", "움츠러드는", "원망하는", "위선적인", "융통성이 없는", "응석을 부리는", "의심이 많은", "의지박약인", "이기적인", "이상주의적인", "인색한", "일중독인", "자기파괴적인", "자비로운", "자신감 있는", "자연주의적인", "자유분방한", "잔소리가 심한", "잔인한", "잘 믿는", "잘 보살피는", "잘 속는", "잘 잊어버리는", "잘 적응하는", "재능 있는", "재미없는", "재미있는", "재치 있는", "적대적인", "전문적인", "절제력이 있는", "정의로운", "정직하지 못한", "정직한", "정확한", "조력적인", "조심성이 많은", "조종하는", "조직적인", "주도적인", "중독에 빠지는", "중심이 잡힌", "즉흥적인", "지나치게 말수가 적은", "지나치게 말이 많은", "지략이 풍부한", "지배욕이 강한", "지적인", "질투심이 강한", "집착이 강한", "짓궂은", "참을성이 많은", "창조적인", "책임감 있는", "철학적인", "체계적이지 못한", "추잡함", "충동적인", "충직한", "친절한", "침착한", "탐욕스러운", "통찰력 있는", "퉁명스러운", "편파적인", "폭력적인", "피해망상이 심한", "학구적인", "행복해하는", "허세를 부리는", "허영심이 강한", "현명한", "혈기가 왕성한", "협상에 능한", "협조적인", "호기심이 많은", "환대하는", "효율적인", "희생양인 척하는"]
  },
  hobby: { label: "취미", list: ["3D 모델링", "가계부 쓰기", "가구 조립", "가드닝", "가죽 공예", "검도", "게임 개발", "고민 상담", "골프", "공연", "과학 실험", "구두닦이", "궁도", "그래픽 디자인", "기계 수리", "꽃꽂이", "낚시", "네일아트", "노래방 가기", "농구", "다림질", "다트", "달리기", "데생", "데이터 분석", "도감 읽기", "도배", "도시락 만들기", "도예", "독서", "동물 사육", "동영상 편집", "드라이브", "등산", "디지털 아트", "노래", "뜨개질", "라떼아트", "럭비", "레슬링", "롤러스케이트", "리듬 체조", "리폼", "마술", "마케팅 분석", "만담", "만화 그리기", "명상", "문헌 정독", "미식축구", "바둑", "바이크", "박물관 순례", "배구", "배드민턴", "번역·통역", "복싱", "볼링", "빵 만들기", "사진 촬영", "서바이벌 게임", "서예", "서평 집필", "서핑", "성대모사", "세탁", "소설 집필", "소프트볼", "속독", "수영", "수제양초 제작", "수채화", "스노보드", "스카이다이빙", "스케이트보드", "스키", "스피드 스케이팅", "승마", "식물 재배", "신문 읽기", "십자말풀이", "쓰레기 줍기", "아이스하키", "악기 연주", "암기", "암벽등반", "암산", "애니 감상", "애니메이션 제작", "야구", "양궁", "어학 공부", "에어로빅", "여행", "역사 연구", "연극", "영상 제작", "요가", "요리", "웨이트리프팅", "웹디자인", "윈드서핑", "유도", "유리 공예", "유화", "인간 관찰", "인터넷 방송", "인터뷰", "인테리어 디자인", "일러스트 그리기", "자격증 취득", "자동차 정비", "자수", "자원봉사", "자전거", "작곡", "장기", "장신구 만들기", "절약", "정리 정돈", "조각", "종이 공예", "지식 쌓기", "청소", "체조", "축구", "취재", "친구 사귀기", "카드 게임", "캠프", "커피 내리기", "코스프레", "콜라주", "퀴즈", "클래식 감상", "탁구", "태권도", "텃밭", "테니스", "투자·주식", "트라이애슬론", "트램펄린", "파쿠르", "패션 디자인", "퍼즐", "펜싱", "편지 쓰기", "풋살", "프라모델 제작", "프로그래밍", "피겨 스케이팅", "필라테스", "춤", "DIY", "SNS 운영"] },
  skill: { label: "특기", list: ["3D 모델링", "가계부 쓰기", "가구 조립", "가드닝", "가죽 공예", "검도", "게임 개발", "고민 상담", "골프", "공연", "과학 실험", "구두닦이", "궁도", "그래픽 디자인", "기계 수리", "꽃꽂이", "낚시", "네일아트", "노래방 가기", "농구", "다림질", "다트", "달리기", "데생", "데이터 분석", "도감 읽기", "도배", "도시락 만들기", "도예", "독서", "동물 사육", "동영상 편집", "드라이브", "등산", "디지털 아트", "노래", "뜨개질", "라떼아트", "럭비", "레슬링", "롤러스케이트", "리듬 체조", "리폼", "마술", "마케팅 분석", "만담", "만화 그리기", "명상", "문헌 정독", "미식축구", "바둑", "바이크", "박물관 순례", "배구", "배드민턴", "번역·통역", "복싱", "볼링", "빵 만들기", "사진 촬영", "서바이벌 게임", "서예", "서평 집필", "서핑", "성대모사", "세탁", "소설 집필", "소프트볼", "속독", "수영", "수제양초 제작", "수채화", "스노보드", "스카이다이빙", "스케이트보드", "스키", "스피드 스케이팅", "승마", "식물 재배", "신문 읽기", "십자말풀이", "쓰레기 줍기", "아이스하키", "악기 연주", "암기", "암벽등반", "암산", "애니 감상", "애니메이션 제작", "야구", "양궁", "어학 공부", "에어로빅", "여행", "역사 연구", "연극", "영상 제작", "요가", "요리", "웨이트리프팅", "웹디자인", "윈드서핑", "유도", "유리 공예", "유화", "인간 관찰", "인터넷 방송", "인터뷰", "인테리어 디자인", "일러스트 그리기", "자격증 취득", "자동차 정비", "자수", "자원봉사", "자전거", "작곡", "장기", "장신구 만들기", "절약", "정리 정돈", "조각", "종이 공예", "지식 쌓기", "청소", "체조", "축구", "취재", "친구 사귀기", "카드 게임", "캠프", "커피 내리기", "코스프레", "콜라주", "퀴즈", "클래식 감상", "탁구", "태권도", "텃밭", "테니스", "투자·주식", "트라이애슬론", "트램펄린", "파쿠르", "패션 디자인", "퍼즐", "펜싱", "편지 쓰기", "풋살", "프라모델 제작", "프로그래밍", "피겨 스케이팅", "필라테스", "춤", "DIY", "SNS 운영"] },
  mbti: { label: "MBTI", list: ["ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFJ", "ENFJ", "ENTJ", "ESTJ", "ESFP", "ENFP", "ENTP"] },
  secret: { label: "비밀", list: ["출생의 비밀", "신체의 비밀", "과거의 범죄", "이중 정체성", "억누른 감정", "망각·도피", "말할 수 없는 진실"] },
  race: { label: "종족", list: ["거인", "고블린", "늑대인간", "다크엘프", "담피르", "데이터", "동물", "드래곤", "드워프", "라미아", "라이칸슬로프", "로봇", "리치", "마수", "마족", "몽마", "미노타우로스", "반요마", "뱀파이어", "사신", "세이렌", "수인", "슬라임", "식물", "신", "아인", "악마", "안드로이드", "어인", "엘프", "여우", "오크", "외계인", "요괴", "요마", "요정", "용족", "유령", "인간", "인어", "인형", "정령", "천사", "코볼트", "타천사", "페어리", "하프엘프", "하피", "호문쿨루스", "호빗"] },
  birthplace: { label: "출생지", list: ["강", "길거리", "늪", "도시", "동굴", "마계", "마을", "바다", "사막", "산", "삼림", "샘", "설원", "섬", "시설", "언덕", "지하", "천계", "초원", "호수", "황무지"] },
  stat: { label: "주스탯", list: ["근력", "민첩", "체력", "지력", "정신", "매력", "재주", "행운"] },
  weapon: { label: "주무기", list: ["낫", "단검", "대검", "도(刀)", "도끼", "메이스", "빗자루", "삼절곤", "삽", "새총", "석궁", "세검", "손톱", "쇠사슬", "쌍검", "쌍절곤", "악기", "암기", "와이어", "이빨", "장검", "주먹", "중화기", "지팡이", "창", "채찍", "총", "톤파", "투척", "폭탄", "해머", "활"] },
  body: { label: "체격", list: ["거구", "건장", "근육질", "늘씬", "땅꼬마", "뚱보", "마른", "빈약", "수척", "아담", "왜소", "장신", "통통", "풍만"] },
  blemish: { label: "점/흉터 위치", list: ["가슴", "겨드랑이", "귀", "등", "목", "발등", "발목", "발바닥", "배", "손가락", "손등", "손바닥", "쇄골", "양쪽 눈 옆", "엉덩이", "오른쪽 눈 옆", "왼쪽 눈 옆", "이마", "입술 옆", "종아리", "팔", "팔목", "허벅지"] },
  eat: { label: "식성", list: ["고양이 혀", "괴식 취향", "단맛 선호", "대식가", "뜨거움 선호", "매운맛 선호", "미각치", "미식가", "비건", "소식가", "식사 거부", "식탐 많음", "신맛 선호", "쓴맛 선호", "알코올 중독", "육식주의", "주당", "짠맛 선호", "차가움 선호", "채식주의", "카페인 중독", "편식 안함", "편식쟁이", "후각 예민"] },
  abstract: { label: "추상", isTrait: true, list: ["가라앉는 감정", "가련미의 극치", "가련한 애정", "가련함", "가변하는 사고", "가슴 속의 생각", "가정의 덕", "가정의 평화", "가족의 화합", "각양각색", "감사", "감정의 조정", "감화", "강인한 힘", "강인함", "강한 신념", "강한 인내심", "강한 자제력", "강화", "개안", "개척", "거절", "거짓과 진실", "건강한 아름다움", "견고한 우정", "견디는 마음", "견디는 사랑", "견식", "결단과 전진", "결단력", "결심", "겸손", "겸양과 성의", "겸허", "겹치는 행운", "경계", "경고", "경애", "경쟁심", "계획", "고결", "고결한 마음", "고결한 이성", "고결함", "고귀한", "고독", "고상함", "고차원적인 의식", "고통을 위로하다", "고통의 구원", "고통의 완화", "공격과 방어", "공격적", "공평", "공훈", "과거로부터의 해방", "과거와 미래", "과거의 추억", "관용", "광대함", "광명", "광채", "광휘", "괴롭히지 말아요", "교양과 학문", "구애의 예감", "구원", "규율과 수호", "그대를 위해 살다", "그대에게 바친다", "그윽한 마음", "극찬", "근면", "긍지 높은 사람", "기대", "기지", "기품", "기회를 잡다", "깊은 신뢰", "깊은 애정", "까다로움", "깨달음", "꾸준한 노력", "꿈", "꿈길의 애정", "꿈꾸는 마음", "꿈의 실현", "꿰뚫어 보는 마음", "끈기", "나는 당신의 것", "나를 생각해요", "나의 행복", "난관을 이기다", "날 건드리지 마", "날 잊지 말아요", "내면의 충실함", "내면의 힘", "내성적", "냉정한 기지", "냉정한 사고", "냉정한 애정", "너무 많은 대화", "넓은 사고", "넘치는 기쁨", "노동", "노력", "높은 영적 능력", "능력 발휘", "다감한 마음", "다면성", "다시 만날 날까지", "다채로운 매력", "단아함", "단정한 사랑", "달성", "달콤한 추억", "담백", "대담", "대립", "대지의 은혜", "대칭과 조화", "덕", "덧없는 사랑", "도도함", "도움", "독과 정화", "독립", "돌보지 않는 아름다움", "동감", "동정", "두 얼굴의 매력", "두뇌 명석", "두려움 소거", "따뜻한 고백", "떠나가는 고통", "떠올린 추억", "마음의 눈", "마음의 성장", "마음의 영양", "만남", "만물을 향한 비상", "만전", "만족스러운 사랑", "만족스러운 성장", "맑은 마음", "망각", "망설임과 선택", "매력", "맺어지는 사랑", "멋진 결혼", "면밀한 조사", "명랑", "명상", "명석한 사고", "명성", "명예", "모든 것을 걸고", "모성애", "목적 달성", "몽상", "몽상", "묘약", "무관심", "무한의 사랑", "미덕", "미래 지향", "미래의 예감", "미래의 행운", "미묘한 아름다움", "믿는 마음", "믿는 사랑", "믿는 자의 행복", "믿음직한 사랑", "밀회", "박애", "반드시 올 행복", "반항심", "방어", "방향", "배려", "번민하는 마음", "변덕스런 사랑", "변신", "변신과 도전", "변치 않는 마음", "변치 않는 사랑", "변하지 않는", "변혁", "변화", "변화하는 평화", "보호", "복종하는 마음", "봄의 방문", "부부애", "부활", "불가사의", "불굴의 신념", "불노불사", "불로장생", "불로장수", "불멸", "불명", "불타는 마음", "불타는 애정", "불행", "불행막이", "붙임성이 좋음", "비밀", "비밀스러운 사랑", "비밀스러운 애정", "빛과 그림자", "빛나는 마음", "빛나는 매력", "빛나는 미래", "빛나는 지성", "빛나는 진리", "빛을 찾다", "빛의 꽃", "빼어난 미모", "사랑", "사랑과 성", "사랑과 존경", "사랑과 지성", "사랑스러움", "사랑에 답하여", "사랑을 전해요", "사랑의 기회", "사랑의 노예", "사랑의 달성", "사랑의 도래", "사랑의 만남", "사랑의 망각", "사랑의 속삭임", "사랑의 수호", "사랑의 슬픔", "사랑의 싹", "사랑의 예감", "사랑의 유지", "사랑의 의혹", "사랑의 인연", "사랑의 자극", "사랑의 적령기", "사랑의 촉진", "사랑의 충전", "사랑의 표시", "사랑의 행동력", "사랑의 화살", "사랑의 희열", "사랑하는 사람", "사모", "사무치는 그리움", "사색", "사악함", "사치", "상냥하고 따뜻한", "상상력", "상쾌한", "새로운 만남", "새로운 사랑", "새로운 출발", "새벽의 소식", "새봄을 기다림", "새색시의 기뿜", "생명", "생명과 번영", "생명력", "생명의 영속성", "생명의 재생", "생명의 탄생", "선견지명", "선언", "선조의 가호", "설렘", "섬세한 아름다움", "섬세함", "성공", "성공의 찬스", "성숙", "성스러운 계약", "성스러운 사랑", "성스러운 실행력", "성스러운 업적", "성스러운 힘", "성실", "성인의 사랑", "세계를 보는 눈", "소극적인 사랑", "소심함", "소악마의 매력", "소원", "소원 성취", "솔직", "수줍은 사랑", "수호", "순결", "순박함", "순수", "순수한 마음", "순수한 정의감", "순애", "순종", "순진", "순진무구", "순진무구한 사랑", "숨은 미덕", "숨은 본능", "숨은 비밀", "숭고한 상징", "숭배", "슬픈 그대가 좋아", "슬픈 아름다움", "슬픔", "승리", "승리를 가져오다", "승리의 맹세", "승리의 인도", "승부", "시간의 흐름", "시기 도래", "시선의 매력", "시종일관", "신뢰", "신명", "신비", "신성한 사랑", "신앙", "신의 수호", "신탁", "신희", "실연", "실제적인 사람", "실행력의 승리", "쌍극", "아가씨의 수줍음", "아름다운 맹세", "아름다운 인격", "아름다움", "아름답게 빛나는", "악의", "안식", "안심", "애국심", "애모", "애정", "애정의 증거", "애타는 사랑", "약간의 소문", "약속", "약속된 사랑", "양자택일의 결단", "어린 마음", "억측", "얼음", "엄격", "업화", "여행의 안전", "연인", "열렬한 마음", "열렬한 사랑", "열렬한 연애", "열심", "열혈", "염려", "영광", "영능력", "영력의 상징", "영원불변한 사랑", "영원한 생명", "영원한 아름다움", "영원한 애정", "영원한 행복", "영적인 통찰력", "영향력", "영혼과의 교류", "영혼의 움직임", "영혼의 재래", "영혼의 정화", "영화와 번영", "예민한 마음", "예상", "예술성", "예술적 센스", "온화", "온화한 애정", "올바른 방향성", "올바른 판단", "완전무결", "완전한 직선", "외로움", "욕망", "용감", "용기", "용맹", "우수", "우아", "우아한 마음", "우아한 추억", "우정", "우주적 의사 소통", "운명", "운명적 인연", "웅대", "원숙", "원점 회귀", "위기 극복", "위대한 힘", "위로", "위안", "위엄", "위험한 사랑", "위험한 쾌락", "위협", "유복", "유일한 사랑", "유쾌한 마음", "유혹", "융합", "융합과 동조", "융합과 변화", "은총", "은햬", "의식의 도달", "의협심", "의혹", "의혹", "이끄시는대로", "이면성", "이별의 슬픔", "이지적", "인기", "인내", "인생의 전개", "인생의 출발", "인정 욕구", "일시적인 휴식", "일치단결", "자기 암시의 힘", "자기 인식", "자기 제어", "자기애", "자기의식", "자비로운 사랑", "자신을 높임", "자애", "자연미", "자연에 대한 사랑", "자연의 숙성", "자연의 지식", "자연의 행방", "자유", "자유로운 삶", "자유스러운 마음", "자제", "자존심", "자중", "잠재의식", "잡념의 제거", "장수, 심원", "장엄", "재보", "재생", "재현", "재회", "쟁취하는 사랑", "적극적인 행동", "전원의 행복", "절도의미", "절실한 사랑", "절실한 애정", "젊은 날의 슬픔", "젊은 시절의 고뇌", "젊음의 주장", "정결", "정과 동", "정념", "정복", "정숙", "정신미", "정신의 안정", "정신의 위안", "정열", "정열적인 사랑", "정의", "정절", "정화", "정화된 영혼", "정확한 간격", "조역부터 출발", "조용한 강인함", "조용한 관찰", "조용히 타오르는", "조화로운 애정", "조화와 중용", "존경", "존중과 애정", "종교", "좋은 소문", "좋은 소식", "좋은 희망", "주야의 변모", "주저", "죽음보다 강한", "죽음을 불사함", "중심", "즐거운 추억", "증오의 완화", "지도", "지식의 인도", "지혜와 논리", "진실", "진실의 위안", "진실한 사랑", "진실한 애정", "진심", "진혼", "질주", "집중력", "차분한 사랑", "찬란했던 좋은 날", "참고 견뎌냄", "참을 수 없어", "처녀의 연심", "천재", "천재", "천진난만", "첫사랑", "첫사랑의 추억", "청명", "청정", "청초", "청춘의 환희", "초능력과의 융합", "초조함의 해방", "추상", "추억", "추억과 동경", "출발", "충성심", "치밀한 계획", "친근한 정", "친숙한 자연", "침착한 용기", "커다란 희망", "쾌활", "탁월한 힘", "탄생의 기쁨", "탄생의 비밀", "탄생의 슬픔", "태만", "통찰력과 상상력", "통합", "투명", "투쟁", "파괴와 창조", "평범", "평안", "평화", "평화의 소원", "포식", "포용", "폭넓은 지상", "품격", "품위", "풍부", "풍부한 향기", "풍요로운 대지", "한없는 즐거움", "합체", "해방된 마음", "행복", "행복의 시작", "행복한 결혼", "행복한 연애", "행운과 번영", "행운과 천명", "행운의 승리", "행운의 이정표", "현명", "협조성", "호기심", "혼동", "화려한 변신", "화려함", "화해", "확실한 조언", "환각", "환상적", "환영", "환영", "황금의 눈동자", "회복", "회전", "후회 없는 청춘", "후회스런 청춘", "훌륭한", "흥분", "희망", "희망과 신앙", "희망의 상징"] },
  color: { label: "이미지 컬러", list: ["빨간색", "주황색", "노란색", "연두색", "초록색", "하늘색", "파란색", "보라색", "분홍색", "흰색", "검은색", "갈색", "회색"] },
  tarot: { label: "타로 카드", list: ["마술사", "여교황", "여제", "황제", "교황", "연인", "전차", "힘", "은자", "운명의 바퀴", "정의", "매달린 사람", "죽음", "절제", "악마", "탑", "별", "달", "태양", "심판", "세계", "바보"] },
  zodiac: { label: "황도12궁", list: ["양", "황소", "쌍둥이", "게", "사자", "처녀", "천칭", "전갈", "사수", "염소", "물병", "물고기"] },
  plant: { label: "식물", list: ["가는동자꽃", "가막살 나무", "가막살나무", "가지", "갈대", "갈풀", "감", "갓", "갓개매취", "개암나무", "개옻나무", "검은미루나무", "겨우살이", "겹벚꽃", "고비", "골고사리", "골든 로드", "공작고사리", "과꽃", "과꽃", "괭이밥", "국화", "귀고리꽃", "글라디올어스", "금사슬나무", "금어초", "금영화", "금작화", "금작화", "금잔화", "꼬리풀", "꽃고비", "꽃담배", "꽃아카시아나무", "꽃창포", "꽈리", "나무딸기", "나팔꽃", "나팔수선화", "낙엽, 마른풀", "낙엽송", "납매", "넌출월귤", "네모필라", "노란 사프란", "노랑 붓꽃", "노랑 수선화", "노랑 제비꽃", "노랑 튤립", "노랑 히아신스", "노랑장미", "노루귀", "노송나무", "논냉이", "느릅나무", "능소화", "다알리아", "단양쑥부쟁이", "단풍나무", "단풍나무", "달맞이꽃", "담쟁이덩굴", "담홍색 참제비고깔", "당아욱", "덩굴성 식물", "데이지", "도라지", "독당근", "독일창포", "동백나무", "들장미", "등골나물", "디기탈리스", "딸기", "떡갈나무", "뚜껑별꽃", "라벤더", "라일락", "레몬", "레몬 버베나", "레제다 오도라타", "로벨리아", "로사 캠피온", "로즈메리", "루피너스", "마", "마가목", "마거리트", "마르멜로", "말오줌나무", "매발톱꽃", "매쉬메리골드", "매자나무", "매화", "머위", "메귀리", "메리골드", "멕시칸 아이비", "멜론", "멜리사", "모과", "목화", "무궁화", "무룻", "무화과", "물망초", "물약의 꽃", "미나리아재비", "미모사", "민들레", "바베나", "바위솔", "바위취", "바카리스", "박하", "밤꽃", "배나무", "백리향", "백부자", "백일홍", "뱀무", "버드나무", "버드푸트", "범의귀", "벗풀", "벚꽃난", "벚나무", "보라색 튤립", "보랏빛 라일락", "보랏빛 제비꽃", "보리", "복사꽃", "부들", "부용", "부처꽃", "붉나무", "뷰글라스", "브리오니아", "비단향꽃무", "비단향나무 꽃", "빙카", "빨간 앵초", "빨간 양귀비", "빨강 국화", "빨강 동백", "빨강 매발톱꽃", "빨강 봉선화", "빨강 아네모네", "빨강 제라늄", "사과", "사양호랑가시나무", "사초", "사프란", "사향장미", "산나리", "산사나무", "산옥잠화", "살구", "살구꽃", "삼나무", "삼색제비꽃", "색비름", "서양까치밥나무", "서양모과", "서양종 보리수", "서양톱풀", "서향", "석류", "선인장", "세이지", "소나무", "수레국화", "수련", "수명패랭이꽃", "수박풀", "수선화", "수양버들", "수영", "슈미트티아나", "스노 플레이크", "스노드롭", "스위트 바즐", "스위트 알리섬", "스위트피", "스피리아", "시계꽃", "시스터스", "시클라멘", "쑥국화", "씀바귀", "아네모네", "아도니스", "아라비아의 별", "아르메리아", "아리스타타", "아마", "아몬드", "아스파라거스", "아스포델", "아이비 제라늄", "안스륨", "알로에", "암브로시아", "앨리카", "앵초", "야생화", "양치", "어저귀", "엉겅퀴", "에리카", "에린지움", "연령초", "오렌지", "오리나무", "옥수수", "옥슬립 앵초", "올리브나무", "용담", "우엉", "월계수", "월귤", "은매화", "은방울꽃", "이끼", "이끼 장미", "인동", "자목련", "자운영", "자홍색 국화", "잡초", "장미", "저먼더", "전나무", "점나도나물", "접시", "접시꽃", "제라늄", "제스민", "조팝나무", "좁은입배풍등", "종려나무", "주목", "중국 패모", "쥐꼬리망초", "진달래", "짚신나불", "참제비고깔", "초롱꽃", "측백나무", "치자나무", "카네이션", "카모밀레", "카우슬립 앵초", "칼라", "칼미아", "칼세올라리아", "콩꽃", "퀘이킹 그라스", "크리스마스 로즈", "클레마티스", "타마린드", "토끼풀", "튜베로즈", "튤립", "파슬리", "파인애플", "패랭이꽃", "페르시아 국화", "펜 오키드", "포도", "프록스", "프리지아", "플라타너스", "하이포시스 오리어", "한련", "해당화", "해바라기", "향쑥", "헬리오토로프", "협죽도", "호랑이꽃", "호박", "홉", "황금싸리", "황새냉이", "회양목", "흑종초", "희향", "흰 라일락", "흰나팔꽃", "흰독말풀", "흰동백", "흰색 과꽃", "흰색 국화", "흰색 양귀비", "흰색장미", "흰앵초", "흰제비꽃", "히아신스"] }
};

// random 자동 생성
for (const key in fieldTemplates) {
  const tpl = fieldTemplates[key];
  if (tpl.list && !tpl.random) {
    tpl.random = () => pick(tpl.list);
  }
}

const basicFields = ["name", "age", "trait", "hobby", "skill"];

// 항목 추가
function createField(key) {
  const tpl = fieldTemplates[key];
  const wrapper = document.createElement("div");
  wrapper.className = "field";
  wrapper.dataset.key = key;

  if (tpl.isTrait) {
    wrapper.innerHTML = `
      <div class="label-row">
      <span class="handle">::</span>
      <label>${tpl.label}</label>
      <button class="remove-btn">❌</button></div>
      <div class="trait-block">
      <div class="trait-container"></div>
      <button class="random-btn" data-key="${key}">🎲</button></div>
    `;

    const container = wrapper.querySelector(".trait-container");
    for (let i = 0; i < 3; i++) {
      const slot = document.createElement("div");
      slot.className = "trait-slot";
      slot.innerHTML = '<input type="text" class="trait-input">';
      container.appendChild(slot);

      const input = slot.querySelector("input");
      const awesomplete = new Awesomplete(input, {
        list: tpl.list,
        minChars: 0,
        autoFirst: true,
        maxItems: 1000,
        sort: false
      });

      input.addEventListener("focus", () => {
        awesomplete.list = tpl.list;
        awesomplete.evaluate();
      });

      input.addEventListener("awesomplete-selectcomplete", () => {
        const value = input.value.trim();
        const allVals = [...container.querySelectorAll("input")].map(i => i.value);
        const duplicates = allVals.filter(v => v === value);
        if (duplicates.length > 1) {
          input.value = "";
          alert("이미 선택한 성격입니다.");
        }
      });
    }
} else {
  wrapper.innerHTML = `
    <div class="label-row">
      <span class="handle">::</span>
      <label>${tpl.label}</label>
      <button class="remove-btn">❌</button>
    </div>
    <div class="field-row">
    <input type="text" data-key="${key}">
    <button class="random-btn" data-key="${key}">🎲</button></div>
  `;
  const input = wrapper.querySelector("input");
  const awesomplete = new Awesomplete(input, {
    list: tpl.list || [],
    minChars: 0,
    autoFirst: true,
    maxItems: 1000,
    sort: false
  });
  input.addEventListener("focus", () => {
    awesomplete.list = tpl.list || [];
    awesomplete.evaluate();
  });
}


  fieldContainer.appendChild(wrapper);
  updateDisabledOptions();
}

// 항목 선택 드롭다운 갱신
function updateDisabledOptions() {
  const selected = [...fieldContainer.children].map(div => div.dataset.key);
  fieldSelect.innerHTML = '<option value="">항목을 선택하세요</option>';
  Object.keys(fieldTemplates).forEach(key => {
    if (selected.includes(key)) return; // 선택된 항목은 스킵
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = fieldTemplates[key].label;
    fieldSelect.appendChild(opt);
  });
  fieldSelect.value = "";
}


// 기본 필드 로드
basicFields.forEach(createField);

// 항목 추가 버튼
addFieldBtn.addEventListener("click", () => {
  const key = fieldSelect.value;
  if (key) createField(key);
});

// 랜덤/삭제 버튼
fieldContainer.addEventListener("click", e => {
  const key = e.target.dataset.key;
  const field = e.target.closest(".field");
  const tpl = fieldTemplates[key];

  if (e.target.classList.contains("random-btn")) {
    if (tpl.isTrait) {
      const inputs = field.querySelectorAll(".trait-input");
      const picked = [];
      while (picked.length < 3) {
        const val = tpl.random();
        if (!picked.includes(val)) picked.push(val);
      }
      inputs.forEach((input, i) => input.value = picked[i]);
    } else {
      const input = field.querySelector("input");
      input.value = tpl.random();
    }
  }

  if (e.target.classList.contains("remove-btn")) {
    field.remove();
    updateDisabledOptions();
  }
});

// 전체 랜덤
document.getElementById("randomAllBtn").addEventListener("click", () => {
  fieldContainer.querySelectorAll(".field").forEach(field => {
    const key = field.dataset.key;
    const tpl = fieldTemplates[key];
    if (tpl.isTrait) {
      field.querySelector(".random-btn").click();
    } else {
      field.querySelector("input").value = tpl.random();
    }
  });
});

// 전체 초기화
document.getElementById("resetAllBtn").addEventListener("click", () => {
  fieldContainer.querySelectorAll(".field").forEach(field => {
    const key = field.dataset.key;
    const tpl = fieldTemplates[key];
    if (tpl.isTrait) {
      field.querySelectorAll(".trait-input").forEach(input => input.value = "");
    } else {
      field.querySelector("input").value = "";
    }
  });
  document.getElementById("result").innerHTML = "";
});

// 결과 출력
document.getElementById("showResultBtn").addEventListener("click", () => {
  document.getElementById("resultSection").style.display = "block";
  showResult();
});

document.getElementById("colorPicker").addEventListener("input", showResult);
document.querySelectorAll('input[name="textColor"]').forEach(radio => {
  radio.addEventListener("change", showResult);
});

// 드래그 정렬
new Sortable(fieldContainer, {
  animation: 150,
  handle: '.handle'
});

function showResult() {
  const result = document.getElementById("result");
  const accent = document.getElementById("colorPicker").value;
  const textColor = document.querySelector('input[name="textColor"]:checked')?.value || "#ffffff";

  let html = `
    <div class="result-wrapper" style="--accent-color: ${accent}; --text-on-accent: ${textColor}">
      <div class="styled-result">
        <br>
  `;

  fieldContainer.querySelectorAll(".field").forEach(field => {
    const key = field.dataset.key;
    const label = fieldTemplates[key].label;
    let value = "-";

    if (fieldTemplates[key].isTrait) {
      const traits = [...field.querySelectorAll(".trait-input")]
        .map(i => i.value.trim())
        .filter(Boolean);
      value = traits.join(", ") || "-";
    } else {
      value = field.querySelector("input").value.trim() || "-";
    }

    html += `
      <div class="result-row">
        <span class="result-label">${label}</span>
        <span class="result-value">${value}</span>
      </div>
    `;
  });

  html += `
      </div>
      <div class="result-credit">팽팽 캐릭터 메이커 ⓒSilliN</div>
    </div>
  `;
  result.innerHTML = html;
}

// 결과 텍스트 복사 버튼
document.getElementById("copyTextBtn").addEventListener("click", () => {
  const rows = document.querySelectorAll(".result-row");
  let text = "";

  rows.forEach(row => {
    const label = row.querySelector(".result-label")?.textContent.trim().replace(/:$/, "");
    const value = row.querySelector(".result-value")?.textContent.trim();
    if (label && value) {
      text += `${label} : ${value}\n`;
    }
  });

  if (text) {
    navigator.clipboard.writeText(text)
      .then(() => alert("결과 텍스트가 클립보드에 복사되었습니다!"))
      .catch(err => alert("복사에 실패했습니다: " + err));
  }
});


// 결과 이미지 저장 버튼
document.getElementById("saveImageBtn").addEventListener("click", () => {
  const node = document.querySelector(".result-wrapper");
  if (!node) return;

  // 저장 버튼 비활성화 (중복 클릭 방지)
  const saveBtn = document.getElementById("saveImageBtn");
  saveBtn.disabled = true;
  saveBtn.textContent = "저장 중...";

  // 모바일 환경 감지
  const isMobile = window.innerWidth <= 768;
  
  // 요소가 완전히 보이도록 스크롤 조정
  node.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
  // 약간의 지연 후 캡처 (스크롤 완료 대기)
  setTimeout(() => {
    // 요소의 실제 크기 정확히 계산
    const computedStyle = window.getComputedStyle(node);
    const rect = node.getBoundingClientRect();
    
    // 패딩 포함한 실제 크기
    const paddingLeft = parseInt(computedStyle.paddingLeft) || 0;
    const paddingRight = parseInt(computedStyle.paddingRight) || 0;
    const paddingTop = parseInt(computedStyle.paddingTop) || 0;
    const paddingBottom = parseInt(computedStyle.paddingBottom) || 0;
    
    const actualWidth = node.scrollWidth;
    const actualHeight = node.scrollHeight;
    
    // 모바일에서 더 보수적인 설정
    const scale = isMobile ? 2 : Math.min(window.devicePixelRatio || 2, 3);
    
    html2canvas(node, {
      scale: scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: computedStyle.backgroundColor || '#ffffff',
      width: actualWidth,
      height: actualHeight,
      scrollX: 0,
      scrollY: 0,
      x: 0,
      y: 0,
      windowWidth: Math.max(document.documentElement.clientWidth, actualWidth),
      windowHeight: Math.max(document.documentElement.clientHeight, actualHeight),
      logging: false,
      imageTimeout: 15000,
      removeContainer: false,
      onclone: function(clonedDoc) {
        // 클론된 문서에서 요소 스타일 최적화
        const clonedNode = clonedDoc.querySelector(".result-wrapper");
        if (clonedNode) {
          // 위치 및 크기 명시적 설정
          clonedNode.style.position = 'static';
          clonedNode.style.transform = 'none';
          clonedNode.style.margin = '0';
          clonedNode.style.float = 'none';
          clonedNode.style.display = 'block';
          clonedNode.style.width = actualWidth + 'px';
          clonedNode.style.height = 'auto';
          clonedNode.style.maxWidth = 'none';
          clonedNode.style.minWidth = 'none';
          clonedNode.style.overflow = 'visible';
          
          // 내부 요소들도 최적화
          const styledResult = clonedNode.querySelector(".styled-result");
          if (styledResult) {
            styledResult.style.width = '100%';
            styledResult.style.maxWidth = 'none';
            styledResult.style.minWidth = 'none';
            styledResult.style.overflow = 'visible';
            styledResult.style.wordWrap = 'break-word';
          }
          
          // 모든 텍스트 요소의 줄바꿈 처리
          const textElements = clonedNode.querySelectorAll(".result-value");
          textElements.forEach(el => {
            el.style.wordWrap = 'break-word';
            el.style.wordBreak = 'keep-all';
            el.style.whiteSpace = 'normal';
          });
        }
      }
    }).then(canvas => {
      // 캔버스 크기 확인
      console.log('캔버스 크기:', canvas.width, 'x', canvas.height);
      
      // 이미지 다운로드
      const nameField = document.querySelector('[data-key="name"] input');
      const rawName = nameField?.value?.trim() || "캐릭터";
      const safeName = rawName.replace(/[\\/:*?"<>|]/g, "");  // 파일명에서 문제되는 특수문자 제거
      const today = new Date().toISOString().slice(0, 10);
      const filename = `팽팽_${safeName}_${today}.png`;

      const link = document.createElement("a");
      link.download = filename;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();

      // 다운로드 실행
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // 버튼 상태 복원
      saveBtn.disabled = false;
      saveBtn.textContent = "이미지 저장";
      
    }).catch(error => {
      console.error('이미지 저장 오류:', error);
      alert('이미지 저장에 실패했습니다. 잠시 후 다시 시도해주세요.');
      
      // 버튼 상태 복원
      saveBtn.disabled = false;
      saveBtn.textContent = "이미지 저장";
    });
  }, 300); // 300ms 지연
});