let budget = 0;
let resultText = "";
let count = 0;
let note = "";
 
const categories = ["한식", "중식", "일식", "양식", "기타"];

const restaurants = [
    { category: "한식", name: "필동면옥", tags: ["혼밥"], menus: [{ menu: "평양냉면", subcategories: ["면류"], tags: [], price: 15000 }] },
    { category: "한식", name: "산정", tags: ["단체석"], menus: [{ menu: "사골배추탕", subcategories: ["국/탕/찌개류"], tags: [], price: null, previousPrice: 13000 }, { menu: "제주오겹살(150g)", subcategories: ["고기/구이류"], tags: [], price: null, previousPrice: 18000 }, { menu: "갈비살(150g)", subcategories: ["고기/구이류"], tags: [], price: null, previousPrice: 19000 }] },
    { category: "한식", name: "한사리 충무로점", tags: ["혼밥"], menus: [{ menu: "뼈해장국", subcategories: ["기타"], tags: [], price: null, previousPrice: 10000 }] },
    { category: "한식", name: "온의미반", tags: ["데이트", "분위기맛집"], menus: [{ menu: "꼬막솥밥", subcategories: ["밥류"], tags: [], price: null, previousPrice: 14000 }, { menu: "명란관자 솥밥", subcategories: ["밥류"], tags: [], price: 15000 }, { menu: "숯불 스테이크 솥밥", subcategories: ["밥류", "고기/구이류"], tags: [], price: 18000 }, { menu: "도미관자 솥밥", subcategories: ["밥류"], tags: [], price: 17000 }] },
    { category: "한식", name: "옥돌정", tags: [], menus: [{ menu: "옛날삼겹살(200g)", subcategories: ["고기/구이류"], tags: [], price: null, previousPrice: 11000 }, { menu: "생삼겹살(180g)", subcategories: ["고기/구이류"], tags: [], price: null, previousPrice: 17000 }, { menu: "생오겹/생목살(180g)", subcategories: ["고기/구이류"], tags: [], price: null, previousPrice: 18000 }] },
    { category: "한식", name: "호반정", tags: ["혼밥"], menus: [{ menu: "김치볶음밥", subcategories: ["밥류"], tags: [], price: 9000 }, { menu: "돌솥비빔밥", subcategories: ["밥류"], tags: [], price: 9000 }, { menu: "열무비빔밥", subcategories: ["밥류"], tags: [], price: 9000 }] },
    { category: "한식", name: "든든별식", tags: ["혼밥", "단체석"], menus: [{ menu: "고기완자전", subcategories: ["기타"], tags: [], price: 9000 }, { menu: "아롱차돌 곰국수", subcategories: ["면류"], tags: [], price: 11000 }, { menu: "미나리전", subcategories: ["기타"], tags: [], price: 9000 }] },
    { category: "한식", name: "남도복국 장충동점", tags: ["단체석"], menus: [{ menu: "밀복국", subcategories: ["국/탕/찌개류"], tags: [], price: 10000 }, { menu: "까치복국", subcategories: ["국/탕/찌개류"], tags: [], price: 13000 }, { menu: "참복국", subcategories: ["국/탕/찌개류"], tags: [], price: 20000 }] },
    { category: "한식", name: "장충전복", tags: [], menus: [{ menu: "전복떡국", subcategories: ["국/탕/찌개류"], tags: [], price: null, previousPrice: 10000 }, { menu: "전복죽(보통)", subcategories: ["샐러드/가벼운 식사"], tags: [], price: null, previousPrice: 12000 }, { menu: "전복삼계탕", subcategories: ["국/탕/찌개류"], tags: [], price: 20000 }] },
    { category: "한식", name: "크랩회피쉬 장충본점", tags: ["데이트", "분위기맛집"], menus: [{ menu: "특선세트A(2~3인)", subcategories: ["기타"], tags: [], price: null, previousPrice: 69000 }, { menu: "대게세트B(2~3인)", subcategories: ["기타"], tags: [], price: null, previousPrice: 180000 }] },
    { category: "중식", name: "전자방", tags: ["혼밥"], menus: [{ menu: "곱창탕면", subcategories: ["면류", "국/탕/찌개류"], tags: [], price: 18000 }, { menu: "꽃게한마리 짬뽕", subcategories: ["기타"], tags: [], price: null, previousPrice: 15000 }, { menu: "베리베리 탕수육", subcategories: ["돈가스/튀김류"], tags: [], price: 24000 }] },
    { category: "중식", name: "진더미엔", tags: ["혼밥"], menus: [{ menu: "우육면/우육밥", subcategories: ["밥류", "면류"], tags: [], price: 11000 }, { menu: "마라곱창국수/마라곱창밥", subcategories: ["밥류", "면류"], tags: [], price: 11000 }, { menu: "마라우육면/마라우육밥", subcategories: ["밥류", "면류"], tags: [], price: 11000 }] },
    { category: "중식", name: "충푸", tags: ["대화하기좋은", "분위기맛집", "혼밥", "단체석", "야장"], menus: [{ menu: "뱡뱡면 (점심·저녁)", subcategories: ["면류"], tags: [], price: 11000 }, { menu: "홍소육 (저녁, 한정)", subcategories: ["고기/구이류"], tags: [], price: 33000 }, { menu: "유린기 (저녁)", subcategories: ["돈가스/튀김류"], tags: [], price: 19000 }] },
    { category: "중식", name: "마탄", tags: ["혼밥"], menus: [{ menu: "마제소바", subcategories: ["면류"], tags: [], price: 10900 }, { menu: "마파두부", subcategories: ["기타"], tags: [], price: 10900 }, { menu: "어향가지", subcategories: ["기타"], tags: [], price: 5500 }] },
    { category: "중식", name: "음꺼이", tags: ["이국적인"], menus: [{ menu: "치킨 볶음면", subcategories: ["면류"], tags: [], price: null }, { menu: "음꺼이 플레터", subcategories: ["기타"], tags: [], price: null }] },
    { category: "중식", name: "사천약방", tags: ["분위기맛집", "이국적인", "인스타감성"], menus: [{ menu: "마라탕", subcategories: ["국/탕/찌개류"], tags: [], price: null }] },
    { category: "일식", name: "오이드킨", tags: ["밥약", "단체석", "혼밥"], menus: [{ menu: "숯불 부타동", subcategories: ["밥류"], tags: [], price: 13000 }, { menu: "매운 부타동", subcategories: ["밥류"], tags: [], price: null, previousPrice: 12500 }, { menu: "마늘듬뿍 부타동", subcategories: ["밥류"], tags: [], price: 16000 }, { menu: "점보 부타동", subcategories: ["밥류"], tags: [], price: null, previousPrice: 15000 }] },
    { category: "일식", name: "낙원의소바", tags: ["데이트"], menus: [{ menu: "레몬소바", subcategories: ["면류"], tags: [], price: 13000 }] },
    { category: "일식", name: "카츠공방 충무로역점", tags: ["혼밥"], menus: [{ menu: "메뉴 가격 확인 필요", subcategories: ["기타"], tags: [], price: null }] },
    { category: "일식", name: "팔팔식당", tags: ["혼밥", "데이트"], menus: [{ menu: "가츠동", subcategories: ["밥류"], tags: [], price: null, previousPrice: 10000 }, { menu: "가츠에비동", subcategories: ["밥류"], tags: [], price: null, previousPrice: 12000 }, { menu: "김치가츠나베", subcategories: ["국/탕/찌개류"], tags: [], price: null, previousPrice: 13000 }] },
    { category: "일식", name: "핵밥 동국대점", tags: ["혼밥", "단체석"], menus: [{ menu: "매운부타덮밥", subcategories: ["밥류"], tags: [], price: 11900 }, { menu: "큐브스테이크덮밥", subcategories: ["밥류", "고기/구이류"], tags: [], price: 13900 }, { menu: "항정살덮밥", subcategories: ["밥류"], tags: [], price: 11900 }] },
    { category: "일식", name: "희희카츠 충무로점", tags: ["혼밥"], menus: [{ menu: "소바등심세트", subcategories: ["면류", "돈가스/튀김류"], tags: [], price: 15500 }, { menu: "소바안심세트", subcategories: ["면류", "돈가스/튀김류"], tags: [], price: 16000 }, { menu: "소바치즈세트", subcategories: ["면류", "돈가스/튀김류"], tags: [], price: 16000 }] },
    { category: "일식", name: "우메돈", tags: ["혼밥"], menus: [{ menu: "모듬", subcategories: ["돈가스/튀김류"], tags: [], price: 22000 }, { menu: "안심", subcategories: ["돈가스/튀김류"], tags: [], price: 17000 }, { menu: "등심", subcategories: ["돈가스/튀김류"], tags: [], price: 16000 }] },
    { category: "일식", name: "츠야카츠 충무로 본점", tags: ["혼밥", "데이트"], menus: [{ menu: "안심돈까스정식 (포장)", subcategories: ["돈가스/튀김류"], tags: [], price: 13900 }, { menu: "모듬돈까스정식 (포장)", subcategories: ["돈가스/튀김류"], tags: [], price: 14900 }, { menu: "안심치즈돈까스정식 (포장)", subcategories: ["돈가스/튀김류"], tags: [], price: 15900 }] },
    { category: "일식", name: "남산 서울카츠", tags: ["데이트", "단체석"], menus: [{ menu: "등심카츠", subcategories: ["돈가스/튀김류"], tags: [], price: 14500 }, { menu: "안심카츠", subcategories: ["돈가스/튀김류"], tags: [], price: 15500 }, { menu: "치킨카츠", subcategories: ["돈가스/튀김류"], tags: [], price: 13000 }] },
    { category: "일식", name: "도우또 을지로", tags: ["데이트", "분위기맛집", "혼밥"], menus: [{ menu: "가츠동", subcategories: ["밥류"], tags: [], price: 15900 }, { menu: "에비동", subcategories: ["밥류"], tags: [], price: 15900 }, { menu: "사바동", subcategories: ["밥류"], tags: [], price: 14900 }] },
    { category: "일식", name: "멘츠루 을지로점", tags: ["혼밥", "데이트", "인스타감성"], menus: [{ menu: "모츠라멘", subcategories: ["면류"], tags: [], price: 15000 }, { menu: "토리파이탄", subcategories: ["면류"], tags: [], price: 12000 }, { menu: "쇼유라멘", subcategories: ["면류"], tags: [], price: 11000 }] },
    { category: "일식", name: "온도온 충무로본점", tags: ["혼밥", "단체석", "데이트", "분위기맛집"], menus: [{ menu: "튀김어묵 우동&돈카츠 세트", subcategories: ["면류", "돈가스/튀김류"], tags: [], price: 13000 }, { menu: "뚝배기 물돈까스 정식", subcategories: ["돈가스/튀김류"], tags: [], price: 12500 }, { menu: "김막국수&돈가스 세트", subcategories: ["면류", "돈가스/튀김류"], tags: [], price: 15000 }] },
    { category: "일식", name: "포치카", tags: ["혼밥", "데이트"], menus: [{ menu: "카이센동 (포장)", subcategories: ["밥류"], tags: [], price: 25000 }, { menu: "참치연어동 (포장)", subcategories: ["밥류"], tags: [], price: 23000 }, { menu: "장어덮밥 (포장)", subcategories: ["밥류"], tags: [], price: 23000 }] },
    { category: "일식", name: "양산도 충무로점", tags: ["혼밥", "데이트"], menus: [{ menu: "히츠마부시", subcategories: ["밥류"], tags: [], price: 27000 }, { menu: "가지장어덮밥", subcategories: ["밥류"], tags: [], price: 23000 }, { menu: "묵은지 장어전골", subcategories: ["국/탕/찌개류"], tags: [], price: 48000 }] },
    { category: "일식", name: "백소정 약수역점", tags: ["혼밥", "데이트"], menus: [{ menu: "마제소바+돈카츠 세트 (배달)", subcategories: ["면류", "돈가스/튀김류"], tags: [], price: 15900 }, { menu: "1등급 생등심 돈카츠 (배달)", subcategories: ["돈가스/튀김류"], tags: [], price: 11900 }, { menu: "모짜렐라 치즈카츠 4pcs (배달)", subcategories: ["돈가스/튀김류"], tags: [], price: 14500 }] },
    { category: "일식", name: "을지돈가스 명동본점", tags: ["혼밥"], menus: [{ menu: "을지대왕돈가스", subcategories: ["돈가스/튀김류"], tags: [], price: 18000 }, { menu: "을지왕돈가스", subcategories: ["돈가스/튀김류"], tags: [], price: 14000 }, { menu: "매운왕돈가스", subcategories: ["돈가스/튀김류"], tags: [], price: 15000 }] },
    { category: "일식", name: "치소우다이닝 신당점", tags: ["혼밥", "분위기맛집", "데이트"], menus: [{ menu: "에비텐동", subcategories: ["밥류"], tags: [], price: null }, { menu: "아나고텐동", subcategories: ["밥류"], tags: [], price: null }] },
    { category: "양식", name: "필동함박 충무로 본점", tags: ["데이트"], menus: [{ menu: "투움바 함박 스테이크", subcategories: ["고기/구이류"], tags: [], price: 13500 }, { menu: "까르보함박", subcategories: ["고기/구이류"], tags: [], price: 13500 }, { menu: "정통 클래식 함박", subcategories: ["고기/구이류"], tags: [], price: 13500 }] },
    { category: "양식", name: "도치피자 장충점", tags: ["데이트", "분위기맛집"], menus: [{ menu: "스타 피자", subcategories: ["피자/빵류"], tags: [], price: 28000 }, { menu: "프리마베라", subcategories: ["피자/빵류"], tags: [], price: 28000 }, { menu: "디아볼라", subcategories: ["피자/빵류"], tags: [], price: 25000 }] },
    { category: "양식", name: "바로 파스타마켓", tags: ["분위기맛집", "데이트", "이국적인"], menus: [{ menu: "스테이크 크림빠네", subcategories: ["면류", "고기/구이류"], tags: [], price: 24900 }, { menu: "스테이크 스파이시 로제", subcategories: ["면류", "고기/구이류"], tags: [], price: 21900 }, { menu: "청양 버섯 크림 파스타", subcategories: ["면류"], tags: [], price: 15900 }] },
    { category: "양식", name: "더 시옷", tags: ["분위기맛집", "인스타감성", "데이트", "단체석"], menus: [{ menu: "생트러플파스타 시즌2", subcategories: ["면류"], tags: [], price: 34000 }, { menu: "토마토라구파스타", subcategories: ["면류"], tags: [], price: 22000 }, { menu: "버섯크림 리조또", subcategories: ["밥류"], tags: [], price: 18000 }] },
    { category: "양식", name: "떼르세로 코스테스", tags: ["데이트", "이국적인", "분위기맛집"], menus: [{ menu: "고사리오일파스타", subcategories: ["면류"], tags: [], price: 18000 }, { menu: "레몬 꿀대구", subcategories: ["기타"], tags: [], price: 22000 }, { menu: "해산물빠에야", subcategories: ["밥류"], tags: [], price: 26000 }] },
    { category: "양식", name: "피클피클 장충", tags: ["단체석", "데이트", "분위기맛집"], menus: [{ menu: "치킨 랜치 빤제로띠", subcategories: ["피자/빵류"], tags: [], price: 16000 }, { menu: "로메스코 대파 파스타", subcategories: ["면류"], tags: [], price: 19500 }, { menu: "고르곤졸라 뇨끼", subcategories: ["면류"], tags: [], price: 26000 }] },
    { category: "양식", name: "콘드에뻬뻬", tags: ["야장", "이국적인", "분위기맛집", "인스타감성", "데이트"], menus: [{ menu: "프렌치토스트", subcategories: ["피자/빵류"], tags: [], price: 15000 }, { menu: "단호박스프", subcategories: ["국/탕/찌개류"], tags: [], price: 15000 }, { menu: "토마토부라타샐러드", subcategories: ["샐러드/가벼운 식사"], tags: [], price: 19000 }] },
    { category: "양식", name: "호관", tags: ["분위기맛집", "데이트"], menus: [{ menu: "로사뇨끼", subcategories: ["면류"], tags: [], price: 20900 }, { menu: "레몬버터 대구 파스타", subcategories: ["면류"], tags: [], price: 20900 }, { menu: "호관 라자냐", subcategories: ["면류"], tags: [], price: 21900 }] },
    { category: "양식", name: "양키스그릴 신당점", tags: ["데이트", "분위기맛집", "이국적인"], menus: [{ menu: "기버터 안심 스테이크", subcategories: ["고기/구이류"], tags: [], price: 43500 }, { menu: "트러플 화이트 라구 파스타", subcategories: ["면류"], tags: [], price: 17500 }, { menu: "뉴욕스테이크", subcategories: ["고기/구이류"], tags: [], price: 29500 }] },
    { category: "양식", name: "20 어클락 모먼트", tags: ["데이트", "분위기맛집"], menus: [{ menu: "상하이 파스타", subcategories: ["면류"], tags: [], price: null }, { menu: "까르보나라", subcategories: ["면류"], tags: [], price: null }, { menu: "라구파스타", subcategories: ["면류"], tags: [], price: null }] },
    { category: "양식", name: "을지로 이멜다분식", tags: ["분위기맛집", "야장", "데이트"], menus: [{ menu: "로얄돈가스", subcategories: ["돈가스/튀김류"], tags: [], price: null }, { menu: "함박웃음덮밥", subcategories: ["밥류", "고기/구이류"], tags: [], price: null }] },
    { category: "양식", name: "충무로 기몽 비스트로", tags: ["데이트", "분위기맛집", "단체석"], menus: [{ menu: "루꼴라피자", subcategories: ["피자/빵류"], tags: [], price: 12900 }, { menu: "마르게리따", subcategories: ["피자/빵류"], tags: [], price: 9900 }, { menu: "카치오페페 (점심, 저녁 19000원)", subcategories: ["면류"], tags: [], price: 12000 }] },
    { category: "일식", name: "산타돈부리", tags: ["혼밥"], menus: [{ menu: "가츠동", subcategories: ["밥류"], tags: [], price: 9000 }, { menu: "사케동", subcategories: ["밥류"], tags: [], price: 13500 }, { menu: "규동", subcategories: ["밥류"], tags: [], price: 9500 }] },
    { category: "한식", name: "동대닭한마리 본점", tags: ["단체석"], menus: [{ menu: "닭한마리", subcategories: ["국/탕/찌개류"], tags: [], price: 32000 }, { menu: "칼국수사리 (닭한마리 추가)", subcategories: ["면류"], tags: [], price: 2000, mainPrice: 32000 }, { menu: "볶음밥 사리 (닭한마리 추가)", subcategories: ["밥류"], tags: [], price: 2000, mainPrice: 32000 }] },
    { category: "한식", name: "김치만선생 동대필동점", tags: ["혼밥"], menus: [{ menu: "김치찌개", subcategories: ["국/탕/찌개류"], tags: [], price: 8000 }, { menu: "촉촉계란말이", subcategories: ["기타"], tags: [], price: 6000 }, { menu: "치즈스팸왕계란말이", subcategories: ["기타"], tags: [], price: 10000 }] },
    { category: "기타", name: "죠티인도레스토랑", tags: ["이국적인"], menus: [{ menu: "치킨버터마살라", subcategories: ["커리류"], tags: [], price: 12000 }, { menu: "팔락퍼니르", subcategories: ["커리류"], tags: [], price: 12000 }, { menu: "비건 케이티 롤", subcategories: ["피자/빵류"], tags: ["비건"], price: 6000 }] },
    { category: "기타", name: "홍호아", tags: ["단체석"], menus: [{ menu: "불고기 반미", subcategories: ["피자/빵류"], tags: [], price: 8500 }, { menu: "양지쌀국수", subcategories: ["면류"], tags: [], price: 10000 }, { menu: "차돌쌀국수", subcategories: ["면류"], tags: [], price: 13000 }, { menu: "분짜", subcategories: ["면류"], tags: [], price: 15000 }] }
];

const subcategories = ["밥류", "면류", "돈가스/튀김류", "국/탕/찌개류", "고기/구이류", "피자/빵류", "샐러드/가벼운 식사", "커리류", "기타"];
const hashtagGroups = {
    "분위기": ["대화하기좋은", "분위기맛집", "인스타감성", "데이트", "야장", "이국적인"],
    "함께하는 사람": ["혼밥", "밥약", "단체석"],
    "취향": ["스트레스해소", "숙취해소", "가성비"],
    "식단": ["다이어트", "비건"]
};
let selectedCategory = "";
const selectedHashtags = new Set();

function menuTags(restaurant, menu) {
    const tags = new Set([...(restaurant.tags || []), ...(menu.tags || [])]);
    const total = menu.price + (menu.mainPrice || 0);
    if (Number.isFinite(menu.price) && menu.price > 0 && total <= 10000) tags.add("가성비");
    return tags;
}

function filterRestaurants({ category = "", subcategory = "", hashtags = [], maxBudget }, source = restaurants) {
    if (!Number.isSafeInteger(maxBudget) || maxBudget <= 0) return { matches: [], unknownPrices: 0 };
    const matches = [];
    let unknownPrices = 0;
    for (const restaurant of source) {
        if (category && restaurant.category !== category) continue;
        const menus = restaurant.menus.filter(menu => {
            if (subcategory && !(menu.subcategories || []).includes(subcategory)) return false;
            const tags = menuTags(restaurant, menu);
            if (!hashtags.every(tag => tags.has(tag))) return false;
            if (!Number.isFinite(menu.price) || menu.price <= 0) {
                unknownPrices++;
                return false;
            }
            return menu.price + (menu.mainPrice || 0) <= maxBudget;
        });
        if (menus.length) matches.push({ ...restaurant, menus });
    }
    return { matches, unknownPrices };
}

function makeElement(tag, text, className) {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (className) element.className = className;
    return element;
}

function initializeRestaurantFilters() {
    const categorySelect = document.querySelector('#category');
    const result = document.querySelector('#result');
    if (!categorySelect || !result || document.querySelector('#restaurant-filters')) return;
    for (const category of categories) {
        if (![...categorySelect.options].some(option => option.value === category)) {
            const option = makeElement('option', category);
            option.value = category;
            categorySelect.append(option);
        }
    }
    const style = makeElement('style');
    style.textContent = `
        #restaurant-filters { box-sizing: border-box; width: 90%; max-width: 720px; margin: 20px auto; padding: 18px 20px; border: 1px solid #efdfd0; border-radius: 18px; background: #fffaf4; color: #38291f; text-align: left; }
        main > #restaurant-filters { width: 100%; }
        #restaurant-filters * { box-sizing: border-box; }
        #restaurant-filters .filter-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 4px; }
        #restaurant-filters h3 { margin: 0; font-size: 15px; font-weight: 700; }
        #restaurant-filters .filter-hint { margin: 0 0 8px; font-size: 12px; color: #7c695b; }
        #restaurant-filters .filter-tags { display: flex; flex-wrap: nowrap; align-items: center; gap: 7px; overflow-x: auto; overscroll-behavior-x: contain; padding: 5px 3px 10px; margin: 0 -3px 12px; scrollbar-width: thin; scrollbar-color: #e7c6af transparent; }
        #restaurant-filters button { margin: 0; box-shadow: none; background-image: none; cursor: pointer; font-family: inherit; }
        #restaurant-filters .filter-tags button { flex: 0 0 auto; min-height: 34px; height: 34px; padding: 0 12px; border: 1px solid #ead9ca; border-radius: 999px; background: #fff; color: #6d5545; font-size: 12px; font-weight: 500; line-height: 1; white-space: nowrap; transition: background-color .15s, border-color .15s, color .15s; }
        #restaurant-filters .filter-tags button:hover { border-color: #d77a42; background: #fff0e3; }
        #restaurant-filters .filter-tags button[aria-pressed="true"] { background: #bf4b16; border-color: #bf4b16; color: white; }
        #restaurant-filters .filter-reset { flex-shrink: 0; min-height: 32px; padding: 4px 0 4px 8px; border: 0; background: transparent; color: #8b6851; font-size: 12px; font-weight: 400; }
        #restaurant-filters .filter-reset:hover { color: #a23d0c; text-decoration: underline; }
        #restaurant-filters .filter-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding-top: 14px; border-top: 1px solid #efdfd0; }
        #restaurant-filters .filter-fields > div { min-width: 0; }
        #restaurant-filters label { display: block; font-size: 12px; font-weight: 600; color: #765c49; }
        #restaurant-filters select, #restaurant-filters input { display: block; width: 100%; min-height: 42px; margin: 6px 0 0; padding: 9px 10px; font: inherit; font-size: 16px; background: white; color: #38291f; border: 1px solid #e4d5c7; border-radius: 10px; }
        #restaurant-filters :focus-visible { outline: 2px solid #a74615; outline-offset: 2px; }
        #restaurant-filters details { margin-top: 12px; color: #7c695b; font-size: 12px; }
        #restaurant-filters summary { cursor: pointer; width: fit-content; padding: 4px 0; }
        #restaurant-filters .filter-help { margin: 6px 0 0; line-height: 1.7; }
        #result .restaurant-menu-list { padding-left: 22px; }
        #result .restaurant-menu-list li { margin: 12px 0; line-height: 1.7; }
        #result .restaurant-tags { color: #934012; font-size: 0.9rem; }
        @media (max-width: 480px) { #restaurant-filters { padding: 14px; } #restaurant-filters .filter-fields { gap: 8px; } }
        @media (prefers-reduced-motion: reduce) { #restaurant-filters .filter-tags button { transition: none; } }
    `;
    document.head.append(style);
    const panel = makeElement('section');
    panel.id = 'restaurant-filters';
    panel.setAttribute('aria-label', '식당 상세 검색 조건');
    const heading = makeElement('div', '', 'filter-heading');
    heading.append(makeElement('h3', '오늘의 취향'));
    panel.append(heading, makeElement('p', '여러 개 선택 가능 · 옆으로 넘겨보세요', 'filter-hint'));
    const tagRow = makeElement('div', '', 'filter-tags');
    tagRow.setAttribute('role', 'group');
    tagRow.setAttribute('aria-label', '해시태그 선택');
    panel.append(tagRow);
    const fields = makeElement('div', '', 'filter-fields');
    panel.append(fields);
    const budgetLabel = makeElement('label', '예산 (원)');
    budgetLabel.htmlFor = 'restaurant-budget';
    const budgetInput = makeElement('input');
    budgetInput.id = 'restaurant-budget';
    budgetInput.type = 'number';
    budgetInput.min = '1';
    budgetInput.step = '1';
    budgetInput.inputMode = 'numeric';
    budgetInput.value = '15000';
    budgetInput.addEventListener('input', refreshRestaurantResults);
    budgetInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') { event.preventDefault(); chooseCategory(); }
    });
    const budgetField = makeElement('div');
    budgetField.append(budgetLabel, budgetInput);
    fields.append(budgetField);
    const label = makeElement('label', '메뉴 종류');
    label.htmlFor = 'restaurant-subcategory';
    const select = makeElement('select');
    select.id = 'restaurant-subcategory';
    for (const value of ['', ...subcategories]) {
        const option = makeElement('option', value || '전체 메뉴');
        option.value = value;
        select.append(option);
    }
    select.addEventListener('change', refreshRestaurantResults);
    const menuField = makeElement('div');
    menuField.append(label, select);
    fields.append(menuField);
    for (const tag of Object.values(hashtagGroups).flat()) {
        const button = makeElement('button', '#' + tag);
        button.type = 'button';
        button.dataset.tag = tag;
        button.setAttribute('aria-pressed', 'false');
        button.addEventListener('click', () => {
            if (selectedHashtags.has(tag)) selectedHashtags.delete(tag);
            else selectedHashtags.add(tag);
            button.setAttribute('aria-pressed', String(selectedHashtags.has(tag)));
            refreshRestaurantResults();
        });
        tagRow.append(button);
    }
    const help = makeElement('details');
    help.append(makeElement('summary', '태그 선택 기준'));
    help.append(makeElement('p', '선택한 태그를 모두 만족하는 메뉴를 찾아요. 가성비는 필수 주문을 포함한 금액 1만 원 이하이며, 분위기·이용 목적 태그는 네이버 후기 기반이에요.', 'filter-help'));
    panel.append(help);
    const reset = makeElement('button', '초기화', 'filter-reset');
    reset.setAttribute('aria-label', '상세 조건 초기화');
    reset.type = 'button';
    reset.addEventListener('click', () => {
        select.value = '';
        selectedHashtags.clear();
        panel.querySelectorAll('[data-tag]').forEach(button => button.setAttribute('aria-pressed', 'false'));
        refreshRestaurantResults();
    });
    heading.append(reset);
    const anchor = categorySelect.closest('form') || document.querySelector('label[for="category"]') || result;
    anchor.before(panel);
    result.setAttribute('aria-live', 'polite');
}

function refreshRestaurantResults() {
    askBudget(document.querySelector('#category').value);
}

function chooseCategory() {
    const category = document.querySelector('#category').value;
    askBudget(category);
}

function randomCategory() {
    const category = categories[Math.floor(Math.random() * categories.length)];
    document.querySelector('#category').value = category;
    alert(`랜덤 추첨 결과는 "${category}"! 🎉`);
    askBudget(category);
}

function askBudget(category) {
    const inlineBudget = document.querySelector('#restaurant-budget');
    const budgetText = inlineBudget ? inlineBudget.value : prompt(`${category}을(를) 골랐어요! 점심 예산을 입력하세요. (쉼표 없이 숫자만, 예: 15000)`, '15000');
    const result = document.querySelector('#result');
    budget = budgetText !== null && /^\d+$/.test(budgetText.trim()) ? Number(budgetText.trim()) : 0;
    if (!Number.isSafeInteger(budget) || budget <= 0) {
        budget = 0;
        selectedCategory = '';
        document.querySelector('#chosen').textContent = '아직 선택 안 함';
        document.querySelector('#budget-text').textContent = '아직 입력 안 함';
        result.textContent = budgetText === null ? '예산 입력을 취소했어요. 음식 종류를 다시 골라 주세요.' : '예산은 0보다 큰 정수로 입력해 주세요.';
        return;
    }
    selectedCategory = category;
    document.querySelector('#chosen').textContent = category || '전체 음식';
    document.querySelector('#budget-text').textContent = budget.toLocaleString('ko-KR') + '원';
    showRestaurants(category);
}

function showRestaurants(category) {
    selectedCategory = category;
    const subcategory = document.querySelector('#restaurant-subcategory')?.value || '';
    const hashtags = [...selectedHashtags];
    const { matches, unknownPrices } = filterRestaurants({ category, subcategory, hashtags, maxBudget: budget });
    const result = document.querySelector('#result');
    result.replaceChildren();
    const summary = [category || '전체 음식', `${budget.toLocaleString('ko-KR')}원 이하`, subcategory, ...hashtags.map(tag => '#' + tag)].filter(Boolean);
    result.append(makeElement('p', summary.join(' · ')));
    count = matches.reduce((sum, restaurant) => sum + restaurant.menus.length, 0);
    if (!count) {
        result.append(makeElement('p', '선택한 조건에 맞는 메뉴가 없어요. 메뉴 종류나 해시태그를 줄이거나 예산을 바꿔 보세요.'));
    } else {
        result.append(makeElement('p', `${matches.length}곳에서 메뉴 ${count}개를 찾았어요.`));
        const list = makeElement('ul', '', 'restaurant-menu-list');
        for (const restaurant of matches) {
            const item = makeElement('li');
            item.append(makeElement('strong', restaurant.name));
            for (const menu of restaurant.menus) {
                const total = menu.price + (menu.mainPrice || 0);
                const priceText = menu.mainPrice ? `${menu.price.toLocaleString('ko-KR')}원 · 필수 주문 포함 ${total.toLocaleString('ko-KR')}원` : `${menu.price.toLocaleString('ko-KR')}원`;
                item.append(makeElement('div', `${menu.menu} (${priceText})`));
                const tags = [...menuTags(restaurant, menu)];
                if (tags.length) item.append(makeElement('div', tags.map(tag => '#' + tag).join(' '), 'restaurant-tags'));
            }
            list.append(item);
        }
        result.append(list);
    }
    if (hashtags.some(tag => tag !== '가성비')) {
        result.append(makeElement('p', '태그가 등록되지 않은 식당·메뉴는 검색에서 제외돼요. 검색 결과가 없다고 해당 식당이 그 특성을 갖지 않는다는 뜻은 아니에요.'));
    }
    if (unknownPrices) result.append(makeElement('p', `가격 정보가 없는 메뉴 ${unknownPrices}개는 예산 비교에서 제외했어요.`));
}

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeRestaurantFilters);
    else initializeRestaurantFilters();
}
