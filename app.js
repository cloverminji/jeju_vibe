// 식재료 정의
const VEG_INGREDIENTS = [
    { id: 'potato', name: '감자', emoji: '🥔', type: 'veg' },
    { id: 'onion', name: '양파', emoji: '🧅', type: 'veg' },
    { id: 'cabbage', name: '양배추', image: 'images/cabbage.png', type: 'veg' },
    { id: 'carrot', name: '당근', emoji: '🥕', type: 'veg' },
    { id: 'zucchini', name: '호박', image: 'images/zucchini.png', type: 'veg' },
    { id: 'scallion', name: '파', image: 'images/scallion.png', type: 'veg' },
    { id: 'mushroom', name: '버섯', image: 'images/mushroom.png', type: 'veg' }
];

const MEAT_INGREDIENTS = [
    { id: 'pork', name: '돼지고기', emoji: '🥓', type: 'meat' },
    { id: 'chicken', name: '닭고기', emoji: '🍗', type: 'meat' },
    { id: 'beef', name: '소고기', emoji: '🥩', type: 'meat' }
];

const SEAFOOD_INGREDIENTS = [
    { id: 'shrimp', name: '새우', emoji: '🦐', type: 'seafood' },
    { id: 'squid', name: '오징어', emoji: '🦑', type: 'seafood' },
    { id: 'clam', name: '조개/바지락', emoji: '🦪', type: 'seafood' }
];

const BASIC_CONDIMENTS = ['식용유', '고추장', '된장', '간장'];

const MENU_DATABASE = [
    // 국/탕
    {
        name: '맑은 소고기 무국',
        tags: { type: '국/탕', situation: '일상', method: '끓이기', ingredient: '소고기' },
        requiredVeg: ['파', '양파'],
        requiredMeat: ['소고기'],
        requiredSeafood: [],
        others: ['무', '마늘', '국간장'],
        score: 0
    },
    {
        name: '얼큰 닭개장',
        tags: { type: '국/탕', situation: '해장', method: '끓이기', ingredient: '닭고기' },
        requiredVeg: ['파', '버섯', '양파'],
        requiredMeat: ['닭고기'],
        requiredSeafood: [],
        others: ['고춧가루', '국간장', '마늘'],
        score: 0
    },
    {
        name: '뜨끈한 버섯 들깨탕',
        tags: { type: '국/탕', situation: '영양식', method: '끓이기', ingredient: '채소류' },
        requiredVeg: ['버섯', '파'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['들깨가루', '찹쌀가루', '국간장'],
        score: 0
    },
    {
        name: '맑은 감자국',
        tags: { type: '국/탕', situation: '초스피드', method: '끓이기', ingredient: '채소류' },
        requiredVeg: ['감자', '양파', '파'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['마늘', '국간장', '다시마'],
        score: 0
    },
    {
        name: '맑은 소고기 미역국',
        tags: { type: '국/탕', situation: '영양식', method: '끓이기', ingredient: '소고기' },
        requiredVeg: [],
        requiredMeat: ['소고기'],
        requiredSeafood: [],
        others: ['미역', '참기름', '마늘', '국간장'],
        score: 0
    },
    {
        name: '맑은 닭곰탕',
        tags: { type: '국/탕', situation: '영양식', method: '끓이기', ingredient: '닭고기' },
        requiredVeg: ['파', '양파'],
        requiredMeat: ['닭고기'],
        requiredSeafood: [],
        others: ['마늘', '소금', '후추'],
        score: 0
    },
    {
        name: '두부 버섯 전골',
        tags: { type: '국/탕', situation: '영양식', method: '끓이기', ingredient: '채소류' },
        requiredVeg: ['버섯', '양파', '파'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['두부', '국간장', '고춧가루'],
        score: 0
    },
    {
        name: '시원한 홍합 바지락탕',
        tags: { type: '국/탕', situation: '해장', method: '끓이기', ingredient: '해물류' },
        requiredVeg: ['파'],
        requiredMeat: [],
        requiredSeafood: ['조개/바지락'],
        others: ['청양고추', '마늘', '소금'],
        score: 0
    },
    {
        name: '얼큰 해물 짬뽕탕',
        tags: { type: '국/탕', situation: '술안주', method: '끓이기', ingredient: '해물류' },
        requiredVeg: ['양배추', '파', '양파', '버섯'],
        requiredMeat: [],
        requiredSeafood: ['새우', '오징어'],
        others: ['고춧가루', '굴소스', '마늘'],
        score: 0
    },

    // 찌개
    {
        name: '돼지고기 김치찌개',
        tags: { type: '찌개', situation: '일상', method: '끓이기', ingredient: '돼지고기' },
        requiredVeg: ['양파', '파'],
        requiredMeat: ['돼지고기'],
        requiredSeafood: [],
        others: ['김치', '두부', '마늘'],
        score: 0
    },
    {
        name: '얼큰 버섯 고추장찌개',
        tags: { type: '찌개', situation: '술안주', method: '끓이기', ingredient: '돼지고기' },
        requiredVeg: ['버섯', '감자', '양파', '파'],
        requiredMeat: ['돼지고기'],
        requiredSeafood: [],
        others: ['고추장', '고춧가루', '두부'],
        score: 0
    },
    {
        name: '소고기 된장찌개',
        tags: { type: '찌개', situation: '일상', method: '끓이기', ingredient: '소고기' },
        requiredVeg: ['호박', '양파', '파', '버섯'],
        requiredMeat: ['소고기'],
        requiredSeafood: [],
        others: ['된장', '두부', '마늘'],
        score: 0
    },
    {
        name: '돼지고기 짜글이',
        tags: { type: '찌개', situation: '일상', method: '끓이기', ingredient: '돼지고기' },
        requiredVeg: ['감자', '양파', '파'],
        requiredMeat: ['돼지고기'],
        requiredSeafood: [],
        others: ['고추장', '고춧가루', '간장'],
        score: 0
    },
    {
        name: '바지락 순두부찌개',
        tags: { type: '찌개', situation: '일상', method: '끓이기', ingredient: '해물류' },
        requiredVeg: ['파', '양파'],
        requiredMeat: [],
        requiredSeafood: ['조개/바지락'],
        others: ['순두부', '달걀', '고춧가루'],
        score: 0
    },

    // 메인반찬
    {
        name: '돼지고기 양배추 볶음',
        tags: { type: '메인반찬', situation: '일상', method: '볶음', ingredient: '돼지고기' },
        requiredVeg: ['양배추', '양파', '파'],
        requiredMeat: ['돼지고기'],
        requiredSeafood: [],
        others: ['굴소스', '식용유', '통깨'],
        score: 0
    },
    {
        name: '닭볶음탕',
        tags: { type: '메인반찬', situation: '영양식', method: '조림', ingredient: '닭고기' },
        requiredVeg: ['감자', '양파', '파', '당근'],
        requiredMeat: ['닭고기'],
        requiredSeafood: [],
        others: ['고춧가루', '간장', '마늘', '설탕'],
        score: 0
    },
    {
        name: '돼지고기 제육볶음',
        tags: { type: '메인반찬', situation: '일상', method: '볶음', ingredient: '돼지고기' },
        requiredVeg: ['양파', '파'],
        requiredMeat: ['돼지고기'],
        requiredSeafood: [],
        others: ['고추장', '고춧가루', '간장', '설탕'],
        score: 0
    },
    {
        name: '소불고기',
        tags: { type: '메인반찬', situation: '손님접대', method: '볶음', ingredient: '소고기' },
        requiredVeg: ['양파', '파', '버섯', '당근'],
        requiredMeat: ['소고기'],
        requiredSeafood: [],
        others: ['간장', '설탕', '참기름', '마늘'],
        score: 0
    },
    {
        name: '매콤 닭갈비',
        tags: { type: '메인반찬', situation: '술안주', method: '볶음', ingredient: '닭고기' },
        requiredVeg: ['닭고기', '양배추', '양파', '파'],
        requiredMeat: ['닭고기'],
        requiredSeafood: [],
        others: ['고추장', '고춧가루', '설탕', '간장'],
        score: 0
    },
    {
        name: '안동 찜닭',
        tags: { type: '메인반찬', situation: '손님접대', method: '조림', ingredient: '닭고기' },
        requiredVeg: ['감자', '당근', '양파', '파', '버섯'],
        requiredMeat: ['닭고기'],
        requiredSeafood: [],
        others: ['간장', '설탕', '당면', '마늘'],
        score: 0
    },
    {
        name: '오징어 볶음',
        tags: { type: '메인반찬', situation: '일상', method: '볶음', ingredient: '해물류' },
        requiredVeg: ['양배추', '양파', '파'],
        requiredMeat: [],
        requiredSeafood: ['오징어'],
        others: ['고추장', '고춧가루', '물엿'],
        score: 0
    },
    {
        name: '백종원 오삼불고기',
        tags: { type: '메인반찬', situation: '술안주', method: '볶음', ingredient: '돼지고기' },
        requiredVeg: ['양파', '파'],
        requiredMeat: ['돼지고기'],
        requiredSeafood: ['오징어'],
        others: ['고추장', '고춧가루', '설탕'],
        score: 0
    },
    {
        name: '중국식 양배추 볶음',
        tags: { type: '메인반찬', situation: '초스피드', method: '볶음', ingredient: '채소류' },
        requiredVeg: ['양배추', '파'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['건고추', '굴소스', '식용유'],
        score: 0
    },

    // 부침/튀김
    {
        name: '바삭한 감자전',
        tags: { type: '부침', situation: '술안주', method: '부침', ingredient: '채소류' },
        requiredVeg: ['감자', '양파'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['부침가루', '식용유'],
        score: 0
    },
    {
        name: '돼지고기 육전',
        tags: { type: '부침', situation: '일상', method: '부침', ingredient: '돼지고기' },
        requiredVeg: ['파'],
        requiredMeat: ['돼지고기'],
        requiredSeafood: [],
        others: ['부침가루', '달걀', '식용유'],
        score: 0
    },
    {
        name: '호박전 & 버섯전',
        tags: { type: '부침', situation: '술안주', method: '부침', ingredient: '채소류' },
        requiredVeg: ['호박', '버섯'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['부침가루', '달걀', '식용유'],
        score: 0
    },
    {
        name: '해물 파전',
        tags: { type: '부침', situation: '술안주', method: '부침', ingredient: '해물류' },
        requiredVeg: ['파'],
        requiredMeat: [],
        requiredSeafood: ['새우', '오징어'],
        others: ['부침가루', '식용유', '청양고추'],
        score: 0
    },
    {
        name: '모둠 야채 튀김',
        tags: { type: '튀김류', situation: '간식', method: '튀김', ingredient: '채소류' },
        requiredVeg: ['당근', '감자', '양파'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['튀김가루', '식용유'],
        score: 0
    },

    // 면/만두
    {
        name: '뜨끈한 닭칼국수',
        tags: { type: '면/만두', situation: '영양식', method: '끓이기', ingredient: '닭고기' },
        requiredVeg: ['호박', '파', '양파'],
        requiredMeat: ['닭고기'],
        requiredSeafood: [],
        others: ['칼국수면', '다시마', '마늘'],
        score: 0
    },
    {
        name: '새콤달콤 비빔국수',
        tags: { type: '면/만두', situation: '초스피드', method: '비빔', ingredient: '채소류' },
        requiredVeg: ['양파', '당근'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['소면', '초고추장', '참기름', '오이'],
        score: 0
    },
    {
        name: '소고기 궁중잡채',
        tags: { type: '면/만두', situation: '손님접대', method: '볶음', ingredient: '소고기' },
        requiredVeg: ['당근', '양파', '버섯', '파'],
        requiredMeat: ['소고기'],
        requiredSeafood: [],
        others: ['당면', '간장', '설탕', '참기름'],
        score: 0
    },
    {
        name: '새콤달콤 골뱅이 소면',
        tags: { type: '면/만두', situation: '술안주', method: '무침', ingredient: '채소류' },
        requiredVeg: ['양배추', '양파', '파'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['골뱅이캔', '소면', '고추장', '고춧가루'],
        score: 0
    },
    {
        name: '얼큰 감자 수제비',
        tags: { type: '면/만두', situation: '일상', method: '끓이기', ingredient: '채소류' },
        requiredVeg: ['감자', '호박', '양파', '파'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['밀가루', '국간장', '멸치육수'],
        score: 0
    },

    // 밥/죽/떡
    {
        name: '소고기 야채 비빔밥',
        tags: { type: '밥/죽/떡', situation: '일상', method: '비빔', ingredient: '소고기' },
        requiredVeg: ['당근', '호박', '버섯'],
        requiredMeat: ['소고기'],
        requiredSeafood: [],
        others: ['밥', '계란프라이', '고추장', '참기름'],
        score: 0
    },
    {
        name: '초스피드 계란 간장비빔밥',
        tags: { type: '밥/죽/떡', situation: '초스피드', method: '비빔', ingredient: '달걀/유제품' },
        requiredVeg: ['파'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['참치캔', '김', '계란프라이', '밥', '간장'],
        score: 0
    },
    {
        name: '돼지고기 양배추 덮밥',
        tags: { type: '밥/죽/떡', situation: '초스피드', method: '볶음', ingredient: '돼지고기' },
        requiredVeg: ['양배추', '양파', '파'],
        requiredMeat: ['돼지고기'],
        requiredSeafood: [],
        others: ['밥', '굴소스', '달걀'],
        score: 0
    },
    {
        name: '치킨 카레라이스',
        tags: { type: '밥/죽/떡', situation: '초스피드', method: '끓이기', ingredient: '닭고기' },
        requiredVeg: ['감자', '당근', '양파'],
        requiredMeat: ['닭고기'],
        requiredSeafood: [],
        others: ['밥', '카레가루', '식용유'],
        score: 0
    },
    {
        name: '닭가슴살 양배추 쌈밥',
        tags: { type: '밥/죽/떡', situation: '영양식', method: '삶기', ingredient: '닭고기' },
        requiredVeg: ['양배추'],
        requiredMeat: ['닭고기'],
        requiredSeafood: [],
        others: ['밥', '쌈장'],
        score: 0
    },
    {
        name: '참치 양배추 쌈장밥',
        tags: { type: '밥/죽/떡', situation: '초스피드', method: '비빔', ingredient: '채소류' },
        requiredVeg: ['양배추'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['참치캔', '고추장', '참기름', '밥'],
        score: 0
    },
    {
        name: '새우 볶음밥',
        tags: { type: '밥/죽/떡', situation: '초스피드', method: '볶음', ingredient: '해물류' },
        requiredVeg: ['당근', '파', '양파'],
        requiredMeat: [],
        requiredSeafood: ['새우'],
        others: ['밥', '굴소스', '달걀'],
        score: 0
    },

    // 퓨전/양식
    {
        name: '소고기 찹스테이크',
        tags: { type: '퓨전', situation: '손님접대', method: '볶음', ingredient: '소고기' },
        requiredVeg: ['양파', '버섯', '당근'],
        requiredMeat: ['소고기'],
        requiredSeafood: [],
        others: ['스테이크소스', '식용유', '버터'],
        score: 0
    },
    {
        name: '베이컨 크림 파스타',
        tags: { type: '퓨전', situation: '일상', method: '볶음', ingredient: '가공식품류' },
        requiredVeg: ['양파', '버섯'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['스파게티면', '베이컨', '크림소스'],
        score: 0
    },
    {
        name: '마늘 오일파스타',
        tags: { type: '퓨전', situation: '초스피드', method: '볶음', ingredient: '채소류' },
        requiredVeg: ['파'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['파스타면', '올리브오일', '마늘', '페페론치노'],
        score: 0
    },
    {
        name: '소고기 궁중떡볶이',
        tags: { type: '퓨전', situation: '손님접대', method: '끓이기', ingredient: '소고기' },
        requiredVeg: ['양파', '당근', '파', '버섯'],
        requiredMeat: ['소고기'],
        requiredSeafood: [],
        others: ['떡볶이떡', '간장', '설탕'],
        score: 0
    },
    {
        name: '돼지고기 목살 스테이크',
        tags: { type: '퓨전', situation: '손님접대', method: '굽기', ingredient: '돼지고기' },
        requiredVeg: ['양파', '버섯'],
        requiredMeat: ['돼지고기'],
        requiredSeafood: [],
        others: ['스테이크 소스', '버터', '마늘'],
        score: 0
    },
    {
        name: '길거리 토스트',
        tags: { type: '퓨전', situation: '초스피드', method: '부침', ingredient: '채소류' },
        requiredVeg: ['양배추', '당근', '파'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['식빵', '계란', '설탕', '케첩'],
        score: 0
    },
    {
        name: '매콤 새우 감바스',
        tags: { type: '퓨전', situation: '술안주', method: '볶음', ingredient: '해물류' },
        requiredVeg: ['버섯'],
        requiredMeat: [],
        requiredSeafood: ['새우'],
        others: ['올리브유', '마늘', '페페론치노', '바게트'],
        score: 0
    },
    {
        name: '토마토 해물 스파게티',
        tags: { type: '퓨전', situation: '일상', method: '볶음', ingredient: '해물류' },
        requiredVeg: ['양파', '버섯'],
        requiredMeat: [],
        requiredSeafood: ['새우', '오징어'],
        others: ['스파게티면', '토마토소스', '올리브유'],
        score: 0
    },

    // 샐러드
    {
        name: '닭가슴살 샐러드',
        tags: { type: '샐러드', situation: '다이어트', method: '무침', ingredient: '닭고기' },
        requiredVeg: ['양배추', '당근', '양파'],
        requiredMeat: ['닭고기'],
        requiredSeafood: [],
        others: ['샐러드드레싱', '방울토마토', '올리브유'],
        score: 0
    },
    {
        name: '돈까스 샐러드',
        tags: { type: '샐러드', situation: '다이어트', method: '튀김', ingredient: '채소류' },
        requiredVeg: ['양배추', '당근', '양파'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['돈까스', '샐러드드레싱'],
        score: 0
    },
    {
        name: '상큼한 오리엔탈 버섯 샐러드',
        tags: { type: '샐러드', situation: '다이어트', method: '데치기', ingredient: '채소류' },
        requiredVeg: ['버섯', '양배추', '양파'],
        requiredMeat: [],
        requiredSeafood: [],
        others: ['오리엔탈드레싱', '참기름'],
        score: 0
    },
    {
        name: '새우 아보카도 샐러드',
        tags: { type: '샐러드', situation: '다이어트', method: '무침', ingredient: '해물류' },
        requiredVeg: ['양배추', '양파'],
        requiredMeat: [],
        requiredSeafood: ['새우'],
        others: ['아보카도', '샐러드드레싱', '올리브유'],
        score: 0
    },
    {
        name: '토마토 바질 냉파스타',
        tags: { type: '퓨전', situation: '초스피드', method: '무침', ingredient: '채소류' },
        requiredVeg: ['양파', '버섯'],
        requiredMeat: [],
        requiredSeafood: ['새우'],
        others: ['푸실리/스파게티면', '방울토마토', '바질페스토', '올리브유'],
        score: 0
    },
    {
        name: '닭가슴살 겨자 냉무침',
        tags: { type: '샐러드', situation: '다이어트', method: '무침', ingredient: '닭고기' },
        requiredVeg: ['양배추', '당근', '양파'],
        requiredMeat: ['닭고기'],
        requiredSeafood: [],
        others: ['겨자소스', '식초', '설탕'],
        score: 0
    },
    {
        name: '오징어 미나리 냉무침',
        tags: { type: '메인반찬', situation: '술안주', method: '무침', ingredient: '해물류' },
        requiredVeg: ['양파', '파'],
        requiredMeat: [],
        requiredSeafood: ['오징어'],
        others: ['미나리/오이', '초고추장', '통깨'],
        score: 0
    }
];

const WEATHER_TAG_RULES = {
    rainy: {
        types: ['국/탕', '찌개', '부침', '튀김류', '퓨전'],
        situations: ['해장', '술안주', '야식', '일상'],
        methods: ['부침', '튀김', '조림', '끓이기'],
        weights: { type: 6.0, situation: 2.0, method: 4.0 }
    },
    cold_snowy: {
        types: ['국/탕', '찌개', '밥/죽/떡', '퓨전'],
        situations: ['영양식', '일상', '손님접대'],
        methods: ['끓이기', '삶기', '굽기', '조림'],
        weights: { type: 2.0, situation: 1.0, method: 1.5 }
    },
    hot: {
        types: ['샐러드', '면/만두', '기타', '퓨전'],
        situations: ['초스피드', '다이어트', '간식', '일상'],
        methods: ['무침', '비빔', '회', '데치기', '볶음'],
        weights: { type: 1.5, situation: 2.0, method: 1.0 }
    },
    normal: {
        types: ['메인반찬', '퓨전', '샐러드', '밥/죽/떡', '면/만두'],
        situations: ['일상', '도시락', '간식', '초스피드', '손님접대'],
        methods: ['볶음', '굽기', '비빔', '무침'],
        weights: { type: 1.0, situation: 1.0, method: 1.0 }
    }
};

const state = {
    currentWeather: 'normal',
    weatherInfo: { temp: 20, description: '맑음' },
    dailyForecastWeathers: ['normal', 'normal', 'normal'],
    selectedIngredients: new Set(),
    shoppingList: [],
    recommendedMenus: []
};

document.addEventListener('DOMContentLoaded', () => {
    initIngredients();
    loadLocalStorage();
    initWeather();
    initEventListeners();
    lucide.createIcons();
});

function initIngredients() {
    const vegGrid = document.getElementById('veg-grid');
    const meatGrid = document.getElementById('meat-grid');
    const seafoodGrid = document.getElementById('seafood-grid');
    VEG_INGREDIENTS.forEach(ing => {
        vegGrid.appendChild(createIngredientCard(ing));
    });
    MEAT_INGREDIENTS.forEach(ing => {
        meatGrid.appendChild(createIngredientCard(ing));
    });
    SEAFOOD_INGREDIENTS.forEach(ing => {
        seafoodGrid.appendChild(createIngredientCard(ing));
    });
}
function createIngredientCard(ing) {
    const card = document.createElement("div");
    card.className = "ingredient-item " + ing.type;
    card.dataset.id = ing.id;
    card.dataset.name = ing.name;

    let mediaHtml = "";
    if (ing.image) {
        mediaHtml = "<img src=\"" + ing.image + "\" class=\"ingredient-img\" alt=\"" + ing.name + "\">";
    } else {
        mediaHtml = "<span class=\"ingredient-emoji\">" + ing.emoji + "</span>";
    }

    card.innerHTML = mediaHtml + " <span class=\"ingredient-name\">" + ing.name + "</span>";

    card.addEventListener("click", () => {
        toggleIngredient(ing.id, card);
    });

    return card;
}

function toggleIngredient(id, cardElement) {
    if (state.selectedIngredients.has(id)) {
        state.selectedIngredients.delete(id);
        cardElement.classList.remove("selected");
    } else {
        state.selectedIngredients.add(id);
        cardElement.classList.add("selected");
    }
    saveIngredientsToLocalStorage();
}

async function getAddressFromCoords(lat, lon) {
    try {
        const response = await fetch("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + lat + "&lon=" + lon + "&accept-language=ko", {
            headers: {
                "User-Agent": "JejuVibeApp/1.0"
            }
        });
        if (!response.ok) return null;
        const data = await response.json();
        const addr = data.address;
        if (addr) {
            const part1 = addr.province || addr.state || "";
            const part2 = addr.city || addr.town || addr.borough || addr.county || "";
            const part3 = addr.suburb || addr.neighbourhood || addr.village || "";
            const parts = [part1, part2, part3].filter(p => p !== "");
            if (parts.length > 1) {
                return parts[parts.length-2] + " " + parts[parts.length-1];
            } else if (parts.length === 1) {
                return parts[0];
            }
        }
    } catch (e) {
        console.warn("주소 변환 실패:", e);
    }
    return null;
}function getWeatherMeta(code, temp) {
    const rainyCodes = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99];
    const snowyCodes = [71, 73, 75, 77, 85, 86];

    const currentMonth = new Date().getMonth() + 1;
    const isSummer = currentMonth >= 6 && currentMonth <= 8;
    const isWinter = currentMonth === 12 || currentMonth === 1 || currentMonth === 2;

    let type = "normal";
    let iconClass = "cloudy";
    let iconHtml = "<i data-lucide=\"cloud-sun\"></i>";
    let desc = "선선한 날";

    if (rainyCodes.includes(code)) {
        type = "rainy";
        iconClass = "rainy";
        iconHtml = "<i data-lucide=\"cloud-rain\"></i>";
        desc = "비";
    } else if (snowyCodes.includes(code)) {
        if (isSummer) {
            type = "rainy";
            iconClass = "rainy";
            iconHtml = "<i data-lucide=\"cloud-rain\"></i>";
            desc = "비/소나기";
        } else {
            type = "cold_snowy";
            iconClass = "snowy";
            iconHtml = "<i data-lucide=\"cloud-snow\"></i>";
            desc = "눈";
        }
    } else if (temp !== undefined && temp < 5) {
        if (isSummer) {
            type = "normal";
            iconClass = "cloudy";
            iconHtml = "<i data-lucide=\"cloud-sun\"></i>";
            desc = "선선한 날";
        } else {
            type = "cold_snowy";
            iconClass = "snowy";
            iconHtml = "<i data-lucide=\"thermometer-snowflake\"></i>";
            desc = "매우 추움";
        }
    } else if (temp !== undefined && temp > 25) {
        if (isWinter) {
            type = "normal";
            iconClass = "cloudy";
            iconHtml = "<i data-lucide=\"cloud-sun\"></i>";
            desc = "선선한 날";
        } else {
            type = "hot";
            iconClass = "sunny";
            iconHtml = "<i data-lucide=\"flame\"></i>";
            desc = "무더위";
        }
    } else {
        type = "normal";
        iconClass = "cloudy";
        iconHtml = "<i data-lucide=\"cloud-sun\"></i>";
        desc = "선선한 날";
    }

    return { type, iconClass, iconHtml, desc };
}

function initWeather() {
    if (!navigator.geolocation) {
        fetchWeather(37.5665, 126.9780, "서울");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            let locationLabel = "현재 내 위치";
            const resolvedAddr = await getAddressFromCoords(lat, lon);
            if (resolvedAddr) {
                locationLabel = resolvedAddr;
            }
            fetchWeather(lat, lon, locationLabel);
        },
        (error) => {
            console.warn("Geolocation 실패", error);
            fetchWeather(37.5665, 126.9780, "서울 (위치 권한 미승인)");
        },
        { timeout: 8000 }
    );
}

async function fetchWeather(lat, lon, locationLabel) {
    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto");
        if (!response.ok) throw new Error("날씨 에러");
        const data = await response.json();
        const current = data.current_weather;
        const temp = Math.round(current.temperature);
        const code = current.weathercode;
        const currentMeta = getWeatherMeta(code, temp);
        state.currentWeather = currentMeta.type;
        state.weatherInfo = { temp, description: currentMeta.desc };

        let dailyForecastHtml = "";
        if (data.daily) {
            const daily = data.daily;
            dailyForecastHtml = "<div class=\"weather-forecast-3day\">";
            const labels = ["오늘", "내일", "모레"];
            const newDailyWeathers = [];
            for (let i = 0; i < 3; i++) {
                if (daily.time[i] !== undefined) {
                    const dayCode = daily.weathercode[i];
                    const minTemp = Math.round(daily.temperature_2m_min[i]);
                    const maxTemp = Math.round(daily.temperature_2m_max[i]);
                    // 최고 기온 기준이나 날씨 코드에 맞춰 메타를 계산
                    const dayMeta = getWeatherMeta(dayCode, maxTemp);
                    newDailyWeathers.push(dayMeta.type);
                    dailyForecastHtml += "<div class=\"forecast-day\"><span class=\"forecast-label\">" + labels[i] + "</span><div class=\"forecast-icon " + dayMeta.iconClass + "\">" + dayMeta.iconHtml + "</div><span class=\"forecast-temp\">" + minTemp + "°/" + maxTemp + "°</span></div>";
                } else {
                    newDailyWeathers.push('normal');
                }
            }
            state.dailyForecastWeathers = newDailyWeathers;
            dailyForecastHtml += "</div>";
        }
        renderWeatherCard(locationLabel, temp, currentMeta.desc, currentMeta.iconClass, currentMeta.iconHtml, dailyForecastHtml);
    } catch (err) {
        console.error(err);
        renderWeatherError();
    }
}function renderWeatherCard(location, temp, desc, iconClass, iconHtml, dailyForecastHtml = "") {
    const weatherCard = document.getElementById("weather-card");
    weatherCard.className = "weather-card";
    weatherCard.innerHTML = "<div class=\"weather-info\"><div class=\"weather-icon-container " + iconClass + "\">" + iconHtml + "</div><div class=\"weather-text\"><div class=\"weather-location\"><i data-lucide=\"map-pin\" style=\"width: 14px; height: 14px;\"></i><span>" + location + "</span></div><div class=\"weather-main\">" + desc + "</div></div></div><div style=\"display: flex; align-items: center; gap: 16px; flex-wrap: wrap;\"><div class=\"weather-temp\">" + temp + "<span>°C</span></div>" + dailyForecastHtml + "</div>";
    lucide.createIcons();
}

function renderWeatherError() {
    const weatherCard = document.getElementById("weather-card");
    weatherCard.className = "weather-card";
    weatherCard.innerHTML = "<div class=\"weather-error-container\"><div class=\"weather-error-message\"><i data-lucide=\"alert-circle\" style=\"color: var(--meat-color); vertical-align: middle; margin-right: 4px;\"></i>실시간 날씨를 불러오지 못했습니다. 날씨를 선택해 주세요:</div><div class=\"weather-select-manual\"><select id=\"weather-manual-select\"><option value=\"normal\">맑음/보통</option><option value=\"rainy\">비 옴</option><option value=\"cold_snowy\">춥고 눈 옴</option><option value=\"hot\">매우 더움</option></select></div></div>";
    lucide.createIcons();
    const select = document.getElementById("weather-manual-select");
    select.addEventListener("change", (e) => {
        state.currentWeather = e.target.value;
        state.dailyForecastWeathers = [e.target.value, e.target.value, e.target.value];
    });
}

function initEventListeners() {
    document.getElementById("btn-recommend").addEventListener("click", recommendMenus);
    document.getElementById("btn-clear-shopping").addEventListener("click", clearShoppingList);
}function recommendMenus() {
    const ownedNames = [];
    state.selectedIngredients.forEach(id => {
        const item = [...VEG_INGREDIENTS, ...MEAT_INGREDIENTS, ...SEAFOOD_INGREDIENTS].find(i => i.id === id);
        if (item) ownedNames.push(item.name);
    });

    const finalRecommendations = [];
    const chosenNames = new Set();

    for (let day = 0; day < 3; day++) {
        const dayWeather = state.dailyForecastWeathers[day] || 'normal';
        const rule = WEATHER_TAG_RULES[dayWeather] || WEATHER_TAG_RULES['normal'];

        const candidates = MENU_DATABASE
            .filter(menu => !chosenNames.has(menu.name))
            .map(menu => {
                let tagScore = 0;
                if (rule.types.includes(menu.tags.type)) tagScore += rule.weights.type;
                if (rule.situations.includes(menu.tags.situation)) tagScore += rule.weights.situation;
                if (rule.methods.includes(menu.tags.method)) tagScore += rule.weights.method;

                let weatherAdjustment = 0;
                if (dayWeather === 'rainy') {
                    // 비 오는 날: 전/부침 요리 최우선 가중치 부여 (완화: +12)
                    if (menu.tags.type === '부침' || menu.tags.method === '부침') {
                        weatherAdjustment += 12.0;
                    }
                } else if (dayWeather === 'hot') {
                    // 무더운 날: 국/탕/찌개 요리 및 끓이기 조리법에 디버프 부여 (완화: -10)
                    if (['국/탕', '찌개'].includes(menu.tags.type) || menu.tags.method === '끓이기') {
                        weatherAdjustment -= 10.0;
                    }
                    // 무더운 날: 부침(전) 요리도 제외/축소 (완화: -8)
                    if (menu.tags.type === '부침' || menu.tags.method === '부침') {
                        weatherAdjustment -= 8.0;
                    }
                    // 무더운 날: 샐러드, 면/만두(비빔/무침) 요리 선호 가중치 (완화: +6)
                    if (['샐러드', '면/만두'].includes(menu.tags.type) || ['비빔', '무침'].includes(menu.tags.method)) {
                        weatherAdjustment += 6.0;
                    }
                    // 무더운 날: 명사/형용사 '냉'이 이름에 들어간 시원한 요리에 특별 보너스 부여 (완화: +8)
                    if (menu.name.includes('냉')) {
                        weatherAdjustment += 8.0;
                    }
                    // 무더운 날: 볶음 요리이면서 술안주 또는 초스피드 요리인 경우 보너스 부여 (국/탕/찌개 감점인 -10의 1.5배인 +15.0)
                    if (menu.tags.method === '볶음' && (menu.tags.situation === '술안주' || menu.tags.situation === '초스피드')) {
                        weatherAdjustment += 15.0;
                    }
                }

                let ingredientScore = 0;
                const totalReq = [...menu.requiredVeg, ...menu.requiredMeat, ...(menu.requiredSeafood || [])];
                totalReq.forEach(req => {
                    if (ownedNames.includes(req)) ingredientScore += 2.0;
                });

                const recentMenus = JSON.parse(localStorage.getItem('recentRecommendedMenus') || '[]');
                const isRecent = recentMenus.includes(menu.name);
                const penaltyScore = isRecent ? -15.0 : 0.0;

                return {
                    ...menu,
                    score: tagScore + weatherAdjustment + ingredientScore + penaltyScore
                };
            });

        const sortedCandidates = candidates
            .sort(() => Math.random() - 0.5)
            .sort((a, b) => b.score - a.score);

        if (sortedCandidates.length > 0) {
            const chosen = sortedCandidates[0];
            finalRecommendations.push(chosen);
            chosenNames.add(chosen.name);
        }
    }

    state.recommendedMenus = finalRecommendations;

    const recentMenus = JSON.parse(localStorage.getItem('recentRecommendedMenus') || '[]');
    finalRecommendations.forEach(m => {
        if (!recentMenus.includes(m.name)) {
            recentMenus.push(m.name);
        }
    });
    if (recentMenus.length > 6) {
        recentMenus.splice(0, recentMenus.length - 6);
    }
    localStorage.setItem('recentRecommendedMenus', JSON.stringify(recentMenus));

    renderRecommendations();
}

function replaceOneMenu(index) {
    const ownedNames = [];
    state.selectedIngredients.forEach(id => {
        const item = [...VEG_INGREDIENTS, ...MEAT_INGREDIENTS, ...SEAFOOD_INGREDIENTS].find(i => i.id === id);
        if (item) ownedNames.push(item.name);
    });

    const dayWeather = state.dailyForecastWeathers[index] || 'normal';
    const rule = WEATHER_TAG_RULES[dayWeather] || WEATHER_TAG_RULES['normal'];
    const currentMenuNames = state.recommendedMenus.map(m => m.name);

    const candidates = MENU_DATABASE
        .filter(m => !currentMenuNames.includes(m.name))
        .map(menu => {
            let tagScore = 0;
            if (rule.types.includes(menu.tags.type)) tagScore += rule.weights.type;
            if (rule.situations.includes(menu.tags.situation)) tagScore += rule.weights.situation;
            if (rule.methods.includes(menu.tags.method)) tagScore += rule.weights.method;

            let weatherAdjustment = 0;
            if (dayWeather === 'rainy') {
                // 비 오는 날: 전/부침 요리 최우선 가중치 부여 (완화: +12)
                if (menu.tags.type === '부침' || menu.tags.method === '부침') {
                    weatherAdjustment += 12.0;
                }
            } else if (dayWeather === 'hot') {
                // 무더운 날: 국/탕/찌개 요리 및 끓이기 조리법에 디버프 부여 (완화: -10)
                if (['국/탕', '찌개'].includes(menu.tags.type) || menu.tags.method === '끓이기') {
                    weatherAdjustment -= 10.0;
                }
                // 무더운 날: 부침(전) 요리도 제외/축소 (완화: -8)
                if (menu.tags.type === '부침' || menu.tags.method === '부침') {
                    weatherAdjustment -= 8.0;
                }
                // 무더운 날: 샐러드, 면/만두(비빔/무침) 요리 선호 가중치 (완화: +6)
                if (['샐러드', '면/만두'].includes(menu.tags.type) || ['비빔', 'mu침', '무침'].includes(menu.tags.method)) {
                    weatherAdjustment += 6.0;
                }
                // 무더운 날: 명사/형용사 '냉'이 이름에 들어간 시원한 요리에 특별 보너스 부여 (완화: +8)
                if (menu.name.includes('냉')) {
                    weatherAdjustment += 8.0;
                }
                // 무더운 날: 볶음 요리이면서 술안주 또는 초스피드 요리인 경우 보너스 부여 (국/탕/찌개 감점인 -10의 1.5배인 +15.0)
                if (menu.tags.method === '볶음' && (menu.tags.situation === '술안주' || menu.tags.situation === '초스피드')) {
                    weatherAdjustment += 15.0;
                }
            }

            let ingredientScore = 0;
            const totalReq = [...menu.requiredVeg, ...menu.requiredMeat, ...(menu.requiredSeafood || [])];
            totalReq.forEach(req => {
                if (ownedNames.includes(req)) ingredientScore += 2.0;
            });

            const recentMenus = JSON.parse(localStorage.getItem('recentRecommendedMenus') || '[]');
            const isRecent = recentMenus.includes(menu.name);
            const penaltyScore = isRecent ? -15.0 : 0.0;

            return {
                ...menu,
                score: tagScore + weatherAdjustment + ingredientScore + penaltyScore
            };
        });

    const sortedCandidates = candidates
        .sort(() => Math.random() - 0.5)
        .sort((a, b) => b.score - a.score);

    if (sortedCandidates.length > 0) {
        const oldMenu = state.recommendedMenus[index];
        state.shoppingList = state.shoppingList.filter(item => item.menu !== oldMenu.name);
        saveShoppingToLocalStorage();
        renderShoppingList();

        const newMenu = sortedCandidates[0];
        state.recommendedMenus[index] = newMenu;

        const recentMenus = JSON.parse(localStorage.getItem('recentRecommendedMenus') || '[]');
        if (!recentMenus.includes(newMenu.name)) {
            recentMenus.push(newMenu.name);
        }
        if (recentMenus.length > 6) {
            recentMenus.shift();
        }
        localStorage.setItem('recentRecommendedMenus', JSON.stringify(recentMenus));

        renderRecommendations();
        updateDecideButtons();
    }
}

function renderRecommendations() {
    const recListDiv = document.getElementById('recommendation-list');
    const recPlaceholder = document.getElementById('recommendation-placeholder');
    
    const ownedNames = [];
    state.selectedIngredients.forEach(id => {
        const item = [...VEG_INGREDIENTS, ...MEAT_INGREDIENTS, ...SEAFOOD_INGREDIENTS].find(i => i.id === id);
        if (item) ownedNames.push(item.name);
    });

    recPlaceholder.classList.add('hide');
    recListDiv.classList.remove('hide');
    recListDiv.innerHTML = '';

    state.recommendedMenus.forEach((menu, index) => {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-card';
        const totalVegMeatSeafood = [...menu.requiredVeg, ...menu.requiredMeat, ...(menu.requiredSeafood || [])];
        const ownedInMenu = totalVegMeatSeafood.filter(name => ownedNames.includes(name));
        const missingInMenu = totalVegMeatSeafood.filter(name => !ownedNames.includes(name));

        const recipeUrl10000 = "https://www.10000recipe.com/recipe/list.html?q=" + encodeURIComponent(menu.name);
        const isDecided = state.shoppingList.some(item => item.menu === menu.name);

        menuCard.innerHTML = "<div class=\"menu-card-header\" style=\"display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;\"><div><div class=\"menu-day\">" + (index + 1) + "일차 저녁 추천</div><div class=\"menu-title\">" + menu.name + "</div></div><div style=\"display: flex; gap: 8px; align-items: center;\"><button class=\"btn-change-one btn-secondary\" data-index=\"" + index + "\" style=\"padding: 6px; border-radius: var(--sketch-radius-sm); cursor: pointer; display: inline-flex; align-items: center; justify-content: center; box-shadow: 2px 2px 0px 0px var(--border-color); border: 2px solid var(--border-color); background: #f1f5f9;\" title=\"이 날의 메뉴 변경하기\"><i data-lucide=\"refresh-cw\" style=\"width: 16px; height: 16px;\"></i></button><button class=\"btn-decide " + (isDecided ? "decided" : "") + "\" data-menu=\"" + menu.name + "\"><i data-lucide=\"" + (isDecided ? "check-circle-2" : "circle") + "\"></i><span>" + (isDecided ? "선택 완료" : "메뉴결정") + "</span></button></div></div><div class=\"menu-ingredients\">" + ownedInMenu.map(n => "<span class=\"ing-badge owned\">" + n + " (있음)</span>").join("") + " " + missingInMenu.map(n => "<span class=\"ing-badge missing\">" + n + " (필요)</span>").join("") + " " + menu.others.map(n => "<span class=\"ing-badge condiment\">" + n + "</span>").join("") + "</div><div class=\"recipe-links-container\" style=\"display: flex; flex-direction: column; gap: 6px; margin-top: 4px;\"><a href=\"" + recipeUrl10000 + "\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"recipe-link\"><i data-lucide=\"external-link\" style=\"width: 14px; height: 14px;\"></i>'만개의 레시피'에서 레시피 확인하기</a></div>";

        menuCard.querySelector('.btn-change-one').addEventListener('click', () => {
            replaceOneMenu(index);
        });
        menuCard.querySelector('.btn-decide').addEventListener('click', (e) => {
            toggleMenuDecision(menu, e.currentTarget, missingInMenu);
        });
        recListDiv.appendChild(menuCard);
    });
    lucide.createIcons();
}

function toggleMenuDecision(menu, buttonElement, missingIngredients) {
    const isCurrentlyDecided = buttonElement.classList.contains('decided');
    if (isCurrentlyDecided) {
        state.shoppingList = state.shoppingList.filter(item => item.menu !== menu.name);
        buttonElement.classList.remove('decided');
        buttonElement.querySelector('span').textContent = '메뉴결정';
        const iconEl = buttonElement.querySelector('i, svg');
        if (iconEl) {
            const newIcon = document.createElement('i');
            newIcon.setAttribute('data-lucide', 'circle');
            iconEl.parentNode.replaceChild(newIcon, iconEl);
        }
    } else {
        missingIngredients.forEach(name => {
            const exists = state.shoppingList.some(item => item.name === name && item.menu === menu.name);
            if (!exists) {
                state.shoppingList.push({
                    id: menu.name + '-' + name + '-' + Date.now(),
                    name: name,
                    menu: menu.name,
                    checked: false
                });
            }
        });
        buttonElement.classList.add('decided');
        buttonElement.querySelector('span').textContent = '선택 완료';
        const iconEl = buttonElement.querySelector('i, svg');
        if (iconEl) {
            const newIcon = document.createElement('i');
            newIcon.setAttribute('data-lucide', 'check-circle-2');
            iconEl.parentNode.replaceChild(newIcon, iconEl);
        }
    }
    lucide.createIcons();
    saveShoppingToLocalStorage();
    renderShoppingList();
}

function renderShoppingList() {
    const shoppingListDiv = document.getElementById('shopping-list');
    const shoppingPlaceholder = document.getElementById('shopping-placeholder');
    const shoppingWrapper = document.getElementById('shopping-list-wrapper');

    if (state.shoppingList.length === 0) {
        shoppingPlaceholder.classList.remove('hide');
        shoppingWrapper.classList.add('hide');
        return;
    }

    shoppingPlaceholder.classList.add('hide');
    shoppingWrapper.classList.remove('hide');
    shoppingListDiv.innerHTML = '';

    state.shoppingList.forEach(item => {
        const li = document.createElement('li');
        li.className = 'shopping-item ' + (item.checked ? 'checked' : '');
        li.innerHTML = "<div class=\"shopping-item-left\"><div class=\"shopping-checkbox " + (item.checked ? "checked" : "") + "\">" + (item.checked ? "<i data-lucide=\"check\" style=\"width: 12px; height: 12px;\"></i>" : "") + "</div><div><span class=\"shopping-item-name\">" + item.name + "</span><span class=\"shopping-item-menu\">(" + item.menu + ")</span></div></div><i data-lucide=\"x\" class=\"shopping-item-delete\" style=\"cursor: pointer; width: 16px; height: 16px; color: var(--text-muted);\"></i>";

        li.querySelector('.shopping-checkbox').addEventListener('click', () => {
            item.checked = !item.checked;
            saveShoppingToLocalStorage();
            renderShoppingList();
        });

        li.querySelector('.shopping-item-delete').addEventListener('click', () => {
            state.shoppingList = state.shoppingList.filter(i => i.id !== item.id);
            saveShoppingToLocalStorage();
            renderShoppingList();
            updateDecideButtons();
        });

        shoppingListDiv.appendChild(li);
    });
    lucide.createIcons();
}function updateDecideButtons() {
    const buttons = document.querySelectorAll('.btn-decide');
    buttons.forEach(btn => {
        const menuName = btn.dataset.menu;
        const stillInList = state.shoppingList.some(item => item.menu === menuName);
        if (!stillInList) {
            btn.classList.remove('decided');
            btn.querySelector('span').textContent = '메뉴결정';
            const iconEl = btn.querySelector('i, svg');
            if (iconEl) {
                const newIcon = document.createElement('i');
                newIcon.setAttribute('data-lucide', 'circle');
                iconEl.parentNode.replaceChild(newIcon, iconEl);
            }
        }
    });
    lucide.createIcons();
}

function clearShoppingList() {
    state.shoppingList = [];
    saveShoppingToLocalStorage();
    renderShoppingList();
    updateDecideButtons();
}

function saveIngredientsToLocalStorage() {
    const array = Array.from(state.selectedIngredients);
    localStorage.setItem('selectedIngredients', JSON.stringify(array));
}

function saveShoppingToLocalStorage() {
    localStorage.setItem('shoppingList', JSON.stringify(state.shoppingList));
}

function loadLocalStorage() {
    const savedIngs = localStorage.getItem('selectedIngredients');
    if (savedIngs) {
        try {
            const array = JSON.parse(savedIngs);
            array.forEach(id => {
                state.selectedIngredients.add(id);
                const card = document.querySelector('.ingredient-item[data-id="' + id + '"]');
                if (card) card.classList.add('selected');
            });
        } catch (e) {
            console.error(e);
        }
    }

    const savedShopping = localStorage.getItem('shoppingList');
    if (savedShopping) {
        try {
            state.shoppingList = JSON.parse(savedShopping);
            renderShoppingList();
        } catch (e) {
            console.error(e);
        }
    }
}