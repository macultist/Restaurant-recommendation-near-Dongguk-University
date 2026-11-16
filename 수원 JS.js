// 이 파일은 공통 합본.html 맨 아래의 <script src="수원이 JS.js"></script>가 불러옴
// HTML을 다 읽은 뒤(맨 아래에서) 불러오기 때문에 querySelector(조건에 맞는 요소를 가져와주는 놈)가 화면 요소를 찾을 수 있음

// ===== 여러 함수가 같이 쓰는 변수 (함수 밖에 만들어서 어디서든 쓸 수 있음: 17-2 스코프) =====
let budget = 0; // 사용자가 입력한 예산(숫자). 처음엔 0
let resultText = ""; // 화면에 보여 줄 추천 목록(문자). 예산 안에 든 메뉴가 있는 식당마다 한 줄씩 뒤에 덧붙임. 처음엔 빈 글자
let count = 0; // 예산 안에 들어온 메뉴 개수. 처음엔 0
let note = ""; // 가격 정보가 없는 식당 안내 문구. 처음엔 빈 글자


// ===== [6회차 추가] 음식 종류 목록 (배열: 18-2) =====
// 배열 = 여러 값을 순서대로 담는 상자. 0번부터 번호가 매겨짐 → 0:"한식", 1:"중식", 2:"일식", 3:"양식", 4:"기타"
// 종류를 추가하고 싶으면(예: "분식") 이 배열에만 넣으면 선택창과 랜덤 추첨에 자동으로 반영됨
const categories = ["한식", "중식", "일식", "양식", "기타"]; // const: 나중에 다른 배열로 바꿔 끼우지 않을 변수


// ===== [6회차 추가] 식당 목록 (배열 + 객체: 18-1, 18-2) =====
// 배열 restaurants 안에 식당 한 곳 = 객체 { } 하나씩 들어 있음
// 객체 = 이름표(속성)가 붙은 정보 묶음 → category(종류), name(식당 이름), menus(메뉴 목록)
// menus도 배열이고, 그 안에 메뉴 하나 = 객체 { menu: 메뉴 이름, price: 가격 } 하나씩 들어 있음
// price: null → 가격 정보가 없다는 뜻 (null = "값이 비어 있음")
// 식당을 추가하거나 가격을 고칠 때는 이 목록만 고치면 됨
const restaurants = [ // 식당 목록 배열 시작. 아래 한 줄 = 식당 한 곳
    { category: "한식", name: "필동면옥", menus: [{ menu: "평양냉면", price: 15000 }] }, // 0번 식당: 한식, 메뉴 1개
    { category: "한식", name: "등나무집", menus: [{ menu: "닭한마리(33,000원짜리도 있음)", price: 30000 }] }, // 1번: 한식, 메뉴 1개
    { category: "한식", name: "산정", menus: [{ menu: "사골배추탕", price: 13000 }, { menu: "제주오겹살(150g)", price: 18000 }, { menu: "갈비살(150g)", price: 19000 }] }, // 2번: 한식, 메뉴 3개
    { category: "한식", name: "한사리 충무로점", menus: [{ menu: "뼈해장국(공깃밥 1,000원 별도)", price: 10000 }] }, // 3번: 한식, 메뉴 1개
    { category: "한식", name: "온의미반", menus: [{ menu: "꼬막솥밥", price: 14000 }, { menu: "명란관자솥밥", price: 15000 }, { menu: "스테이크/도미관자솥밥", price: 17000 }] }, // 4번: 한식, 메뉴 3개
    { category: "한식", name: "옥돌정", menus: [{ menu: "옛날삼겹살(200g)", price: 11000 }, { menu: "생삼겹살(180g)", price: 17000 }, { menu: "생오겹/생목살(180g)", price: 18000 }] }, // 5번: 한식, 메뉴 3개
    { category: "한식", name: "호반정", menus: [{ menu: "한식 백반(약 10,000원 안팎)", price: 10000 }] }, // 6번: 한식, 메뉴 1개
    { category: "한식", name: "든든별식", menus: [{ menu: "고기완자전", price: 9500 }, { menu: "아롱차돌 곰국수", price: 11000 }, { menu: "미나리전(8장)", price: 18000 }] }, // 7번: 한식, 메뉴 3개
    { category: "한식", name: "남도복국 장충동점", menus: [{ menu: "밀복전골(1인)", price: 10000 }, { menu: "까치복전골(1인)", price: 13000 }, { menu: "국내산참복전골(1인)", price: 20000 }] }, // 8번: 한식, 메뉴 3개
    { category: "한식", name: "장충전복", menus: [{ menu: "전복떡국", price: 10000 }, { menu: "전복죽(보통)", price: 12000 }, { menu: "전복삼계탕(보통)", price: 20000 }] }, // 9번: 한식, 메뉴 3개
    { category: "한식", name: "크랩회피쉬 장충본점", menus: [{ menu: "특선세트A(2~3인)", price: 69000 }, { menu: "대게세트B(2~3인)", price: 180000 }] }, // 10번: 한식, 메뉴 2개
    { category: "중식", name: "전자방", menus: [{ menu: "곱창탕면", price: 12000 }, { menu: "꽃게한마리 짬뽕", price: 15000 }, { menu: "베리베리탕수육(평일 점심)", price: 20000 }] }, // 11번: 중식, 메뉴 3개
    { category: "일식", name: "오이드킨", menus: [{ menu: "부타동", price: 12000 }, { menu: "매운 부타동", price: 12500 }, { menu: "마늘/점보 부타동", price: 15000 }] }, // 12번: 일식, 메뉴 3개
    { category: "일식", name: "낙원의소바", menus: [{ menu: "레몬소바", price: 13000 }] }, // 13번: 일식, 메뉴 1개
    { category: "일식", name: "카츠공방 충무로역점", menus: [{ menu: "돈카츠", price: 12000 }] }, // 14번: 일식, 메뉴 1개
    { category: "일식", name: "팔팔식당", menus: [{ menu: "가츠동", price: 10000 }, { menu: "가츠에비동", price: 12000 }, { menu: "김치가츠나베", price: 13000 }] }, // 15번: 일식, 메뉴 3개
    { category: "일식", name: "핵밥", menus: [{ menu: "덮밥", price: null }] }, // 16번: 일식, 가격 확인 불가라서 price가 null
    { category: "양식", name: "필동함박", menus: [{ menu: "투움바/까르보 함박", price: 12500 }] }, // 17번: 양식, 메뉴 1개
    { category: "양식", name: "도치피자 장충점", menus: [{ menu: "화덕 피자/파스타(메뉴당 약 20,000원)", price: 20000 }] }, // 18번: 양식, 메뉴 1개
    { category: "기타", name: "홍호아", menus: [{ menu: "불고기 반미", price: 8500 }, { menu: "양지쌀국수", price: 10000 }, { menu: "차돌쌀국수", price: 13000 }, { menu: "분짜", price: 15000 }] } // 19번: 기타, 메뉴 4개 (마지막 줄이라 끝에 쉼표 없음)
];


// ===== [6회차 추가] 선택창에 음식 종류 option을 반복문으로 채워 넣기 (16-5 반복문) =====
let categorySelect = document.querySelector('#category'); // id가 category인 선택창을 찾아와 categorySelect에 담음
for (let i = 0; i < categories.length; i++) { // i = 0, 1, 2, 3, 4 (categories.length = 5라서 i가 5가 되면 멈춤)
    // 선택창 안쪽 HTML 뒤에 option 태그 하나를 덧붙임 (+= 는 "원래 내용 뒤에 이어 붙이기")
    categorySelect.innerHTML += `<option value="${categories[i]}">${categories[i]}</option>`; // 예: i가 0이면 <option value="한식">한식</option>
}




// ===== 1. 선택창에서 종류를 골랐을 때 실행되는 함수 =====

function chooseCategory() { // chooseCategory 함수 시작 (매개변수 없음)
    let select = document.querySelector('#category'); // id가 category인 선택창을 찾아옴
    let category = select.value; // 선택창에서 고른 option의 value (예: "한식")

    if (category === "") // "-- 골라 주세요 --"를 고르면(value가 빈칸이면)
        return; // return: 함수를 여기서 바로 끝냄 → 아무것도 안 함

    askBudget(category); // 고른 종류를 들고 예산 물어보는 단계(askBudget 함수)로 넘어감
} 



// ===== 2. 랜덤 추첨 버튼을 눌렀을 때 실행되는 함수 =====

function randomCategory() { // randomCategory 함수 시작 (매개변수 없음)
    // [6회차 변경] 숫자를 뽑아서 if/else로 종류를 바꾸던 부분을, 배열에서 바로 꺼내는 한 줄로 줄임
    // Math.random(): 0 이상 1 미만의 아무 소수 (예: 0.37) → Math는 18-2 내장 객체
    // * categories.length(5)를 하면 0 이상 5 미만 (예: 1.85) → Math.floor로 소수점을 버리면 0~4 중 하나
    // categories[그 번호] → 배열에서 그 번호 칸에 든 종류를 꺼냄 (예: 1번 → "중식")
    let category = categories[Math.floor(Math.random() * categories.length)]; // 뽑힌 종류를 category에 담음

    document.querySelector('#category').value = category; // 선택창도 뽑힌 종류로 바꿔서 보여 줌
    alert(`랜덤 추첨 결과는 "${category}"! 🎉`); // 알림창 띄우기. 템플릿 리터럴: ${ } 자리에 변수 값이 들어감

    askBudget(category); // 뽑힌 종류를 들고 예산 물어보는 단계(3번 함수 askBudget)로 넘어감
} 



// ===== 3. 예산을 입력받는 함수 (매개변수 category: 고른 음식 종류) =====

function askBudget(category) { // askBudget 함수 시작. 부를 때 넣어 준 종류가 category에 들어옴
    document.querySelector('#chosen').innerText = category; // 화면의 "고른 종류" 글자를 고른 종류로 바꿈

    // prompt로 예산 입력받기 (prompt로 받은 값은 항상 '문자'!). 두 번째 "15000"은 입력칸에 미리 적혀 있는 값
    let budgetText = prompt(`${category}을(를) 골랐어요! 점심 예산을 입력하세요. (쉼표 없이 숫자만, 예: 15000)`, "15000"); // 입력한 글자가 budgetText에 들어감
    let result = document.querySelector('#result'); // 결과를 보여 줄 상자(id="result")를 찾아옴
    let budgetSpan = document.querySelector('#budget-text'); // 화면의 "내 예산" 글자 자리를 찾아옴

    if (budgetText === null) { // 취소 버튼을 누르면 prompt 결과가 null
        result.innerText = "예산 입력을 취소했어요. 종류를 다시 골라 주세요!"; // 결과 상자에 안내 문구 표시
        budgetSpan.innerText = "아직 입력 안 함"; // 이전 예산이 남아 있지 않게 되돌림
    } // if 끝
    else { // 취소가 아니라 뭔가 입력했을 때
        budget = parseInt(budgetText); // parseInt: 문자를 숫자로 바꿔 줌 ("15000" → 15000)

        // 숫자가 아닌 걸 입력하면 parseInt 결과가 NaN(숫자 아님)이 되는데,
        // NaN > 0 은 false라서 else로 감. 0이나 음수도 else로 감
        if (budget > 0) { // 예산이 0보다 큰 제대로 된 숫자일 때
            budgetSpan.innerText = budget + "원"; // 화면의 "내 예산" 자리에 예산 표시 (예: 15000원)
            showRestaurants(category); // 다음 단계: 예산에 맞는 식당 찾기 (4번 함수 showRestaurants 실행)
        } // if 끝
        else { // 숫자가 아니거나 0 이하일 때
            result.innerText = "예산은 0보다 큰 숫자로 입력해 주세요!"; // 결과 상자에 안내 문구 표시
            budgetSpan.innerText = "아직 입력 안 함"; // 예산 칸을 처음 상태로 되돌림
        } // else 끝
    } // 바깥 else 끝

    // 선택창을 "-- 골라 주세요 --"로 되돌림
    // → 다음에 같은 종류를 또 골라도 onchange가 다시 실행되게 하려고
    document.querySelector('#category').value = ""; // value가 빈칸인 option = "-- 골라 주세요 --"
} 



// ===== 4. 고른 종류의 식당들을 하나씩 검사해서 화면에 보여 주는 함수 =====

// [7회차 준비 변경] 같은 식당의 메뉴가 여러 개여도 식당 이름은 한 번만 나오게 바꿈
// → 예: "오이드킨 - 부타동 (12000원) · 매운 부타동 (12500원)" (예전엔 "오이드킨 - ..." 줄이 메뉴마다 반복됐음)
// → 그래서 메뉴 하나씩 목록에 넣던 checkMenu 함수는 더 이상 필요 없어서 지웠음
function showRestaurants(category) { // showRestaurants 함수 시작. category: 고른 음식 종류
    // 새로 검사하기 전에 이전 결과를 비움 (안 비우면 전에 찾은 결과가 계속 쌓임)
    resultText = ""; // 추천 목록 글자를 빈 글자로 되돌림
    count = 0; // 찾은 메뉴 개수를 0으로 되돌림
    note = ""; // 가격 없는 식당 안내 문구를 빈 글자로 되돌림

    // 바깥 for문: 식당 목록(restaurants)을 0번부터 끝까지 한 곳씩 꺼냄
    for (let i = 0; i < restaurants.length; i++) { // i = 0, 1, 2, ... 19 (식당 20곳이라 i가 20이 되면 멈춤)
        let r = restaurants[i]; // i번째 식당 객체 하나를 r에 담음 (예: { category: "한식", name: "필동면옥", menus: [...] })

        if (r.category === category) { // 이 식당의 종류가 내가 고른 종류와 같을 때만 메뉴를 검사함
            let menuText = ""; // 이 식당에서 예산 안에 들어온 메뉴들을 모아 둘 글자. 식당이 바뀔 때마다 빈 글자로 새로 시작

            // 안쪽 for문: 그 식당의 메뉴 목록(r.menus)을 0번부터 끝까지 하나씩 꺼냄 (구구단 예제와 같은 이중 반복)
            for (let j = 0; j < r.menus.length; j++) { // j = 0, 1, 2, ... (그 식당의 메뉴 개수만큼)
                let m = r.menus[j]; // j번째 메뉴 객체 하나를 m에 담음 (예: { menu: "평양냉면", price: 15000 })

                if (m.price === null) // 가격 정보가 없는 메뉴는 예산과 비교할 수 없으니
                    note = `<p>※ <b>${r.name}</b>(${m.menu})은 가격 정보가 없어서 비교에서 빠졌어요.</p>`; // 안내 문구만 만듦
                else if (m.price <= budget) { // 가격이 있고, 예산 이하일 때만 (<=: 예산이랑 딱 맞아도 OK)
                    if (menuText !== "") // 이미 앞에 메뉴가 하나 이상 들어가 있으면 (!== : 같지 않으면)
                        menuText = menuText + " · "; // 메뉴 사이에 구분 점(·)을 먼저 붙임
                    menuText = menuText + `${m.menu} (${m.price}원)`; // 메뉴 이름과 가격을 뒤에 이어 붙임
                    count = count + 1; // 찾은 메뉴 개수를 1 늘림
                } // else if 끝
            } // 안쪽 for문 끝

            if (menuText !== "") // 이 식당에서 예산 안에 들어온 메뉴가 하나라도 있으면
                resultText = resultText + `<li><b>${r.name}</b> - ${menuText}</li>`; // 식당 이름은 한 번만 쓰고, 뒤에 모은 메뉴들을 붙여 목록에 한 줄 추가
        } // if 끝
    } // 바깥 for문 끝



    let result = document.querySelector('#result'); // 결과를 보여 줄 상자(id="result")를 찾아옴

    
    // innerHTML: 태그(<p>, <ul>, <li>, <b>)까지 진짜 태그로 넣어 줌 (innerText였으면 태그가 글자 그대로 보임)
    if (count === 0) // 예산 안에 들어온 메뉴가 하나도 없을 때
        result.innerHTML = `<p>${budget}원으로 먹을 수 있는 ${category} 메뉴가 없어요😢 예산을 조금 올려 보세요!</p>` + note; // 없다는 안내 + (있으면) 가격 없는 식당 안내
    else // 메뉴를 하나 이상 찾았을 때
        result.innerHTML = `<p>${budget}원으로 먹을 수 있는 ${category} 메뉴 <b>${count}개</b>를 찾았어요!</p>` // 찾은 개수 안내
            + "<ul>" + resultText + "</ul>" + note; // <ul>(목록. 수영이 CSS에서 점은 숨김)로 감싼 추천 목록 + (있으면) 가격 없는 식당 안내
}