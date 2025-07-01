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
  color: { label: "이미지 컬러", list: ["빨간색", "주황색", "노란색", "연두색", "초록색", "하늘색", "파란색", "보라색", "분홍색", "흰색", "검은색", "갈색", "회색"] },
  stat: { label: "주스탯", list: ["근력", "민첩", "체력", "지력", "정신", "매력", "재주", "행운"] },
  weapon: { label: "주무기", list: ["낫", "단검", "대검", "도(刀)", "도끼", "메이스", "빗자루", "삼절곤", "삽", "새총", "석궁", "세검", "손톱", "쇠사슬", "쌍검", "쌍절곤", "악기", "암기", "와이어", "이빨", "장검", "주먹", "중화기", "지팡이", "창", "채찍", "총", "톤파", "투척", "폭탄", "해머", "활"] },
  body: { label: "체격", list: ["거구", "건장", "근육질", "늘씬", "땅꼬마", "뚱보", "마른", "빈약", "수척", "아담", "왜소", "장신", "통통", "풍만"] },
  eat: { label: "식성", list: ["고양이 혀", "괴식 취향", "단맛 선호", "대식가", "뜨거움 선호", "매운맛 선호", "미각치", "미식가", "비건", "소식가", "식사 거부", "식탐 많음", "신맛 선호", "쓴맛 선호", "알코올 중독", "육식주의", "주당", "짠맛 선호", "차가움 선호", "채식주의", "카페인 중독", "편식 안함", "편식쟁이", "후각 예민"] }
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
        autoFirst: true
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
    autoFirst: true
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


// 결과 이미지 저장 버튼
document.getElementById("saveImageBtn").addEventListener("click", () => {
  const node = document.querySelector(".result-wrapper");
  if (!node) return;

  html2canvas(node, {
    scale: window.devicePixelRatio || 2,
    useCORS: true,
    scrollX: 0,
    scrollY: 0,
    windowWidth: document.body.scrollWidth,
    windowHeight: document.body.scrollHeight
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "character.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});


