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

// 조미료는 기본 구비 식재료
const BASIC_CONDIMENTS = ['식용유', '고추장', '간장', '마늘', '설탕', '소금', '밥', '굴소스', '부침가루', '된장'];

// 메뉴 정보 정의
// 날씨 조건: 'rainy', 'cold_snowy', 'hot', 'normal'
const MENU_DATABASE = [
    // Rainy (비 오는 날)
    {
        name: '감자전',
        weather: 'rainy',
        requiredVeg: ['감자', '파'],
        requiredMeat: [],
        others: ['부침가루', '식용유'],
        score: 0
    },
    {
        name: '돼지고기 김치찌개',
        weather: 'rainy',
        requiredVeg: ['파', '양파'],
        requiredMeat: ['돼지고기'],
        others: ['김치', '두부'],
        score: 0
    },
    {
        name: '버섯 전골',
        weather: 'rainy',
        requiredVeg: ['버섯', '파', '양파'],
        requiredMeat: ['소고기'],
        others: ['육수팩', '국간장'],
        score: 0
    },
    {
        name: '소고기 샤브샤브',
        weather: 'rainy',
        requiredVeg: ['버섯', '양배추', '파'],
        requiredMeat: ['소고기'],
        others: ['샤브샤브육수', '칠리소스'],
        score: 0
    },
    {
        name: '모둠 부대찌개',
        weather: 'rainy',
        requiredVeg: ['양파', '파'],
        requiredMeat: ['돼지고기'],
        others: ['햄', '소시지', '김치', '사골육수'],
        score: 0
    },
    {
        name: '맑은 오뎅탕',
        weather: 'rainy',
        requiredVeg: ['파', '버섯'],
        requiredMeat: [],
        others: ['모둠어묵', '무', '국장국물'],
        score: 0
    },
    {
        name: '가쓰오 어묵 우동',
        weather: 'rainy',
        requiredVeg: ['파', '버섯'],
        requiredMeat: [],
        others: ['우동면', '어묵', '가쓰오장국'],
        score: 0
    },
    {
        name: '바지락 칼국수',
        weather: 'rainy',
        requiredVeg: ['호박', '파', '감자'],
        requiredMeat: [],
        others: ['칼국수면', '바지락', '소금'],
        score: 0
    },
    {
        name: '명란 계란찜',
        weather: 'rainy',
        requiredVeg: ['파'],
        requiredMeat: [],
        others: ['계란', '명란젓', '참기름'],
        score: 0
    },
    {
        name: '새우 계란탕',
        weather: 'rainy',
        requiredVeg: ['파', '양파'],
        requiredMeat: [],
        others: ['계란', '칵테일새우', '전분가루'],
        score: 0
    },
    {
        name: '바삭 김치전',
        weather: 'rainy',
        requiredVeg: ['파', '양파'],
        requiredMeat: ['돼지고기'],
        others: ['김치', '부침가루', '식용유'],
        score: 0
    },
    {
        name: '스팸마요 덮밥',
        weather: 'rainy',
        requiredVeg: ['양파', '파'],
        requiredMeat: [],
        others: ['밥', '스팸', '계란', '마요네즈'],
        score: 0
    },
    {
        name: '돼지고기 가지덮밥',
        weather: 'rainy',
        requiredVeg: ['파', '양파'],
        requiredMeat: ['돼지고기'],
        others: ['가지', '굴소스', '전분'],
        score: 0
    },
    
    // Cold & Snowy (춥거나 눈 오는 날)
    {
        name: '소고기 무국',
        weather: 'cold_snowy',
        requiredVeg: ['파'],
        requiredMeat: ['소고기'],
        others: ['무', '마늘'],
        score: 0
    },
    {
        name: '닭볶음탕',
        weather: 'cold_snowy',
        requiredVeg: ['감자', '당근', '양파', '파'],
        requiredMeat: ['닭고기'],
        others: ['고추장', '마늘'],
        score: 0
    },
    {
        name: '돼지고기 고추장불고기',
        weather: 'cold_snowy',
        requiredVeg: ['양파', '파', '버섯'],
        requiredMeat: ['돼지고기'],
        others: ['고추장', '간장'],
        score: 0
    },
    {
        name: '버섯 들깨탕',
        weather: 'cold_snowy',
        requiredVeg: ['버섯', '파'],
        requiredMeat: [],
        others: ['들깨가루', '국간장'],
        score: 0
    },
    {
        name: '얼큰 김치우동',
        weather: 'cold_snowy',
        requiredVeg: ['파', '양파', '버섯'],
        requiredMeat: [],
        others: ['우동면', '신김치', '어묵', '고춧가루'],
        score: 0
    },
    {
        name: '차돌박이 된장찌개',
        weather: 'cold_snowy',
        requiredVeg: ['호박', '파', '양파', '버섯'],
        requiredMeat: ['소고기'],
        others: ['된장', '두부'],
        score: 0
    },
    {
        name: '소고기 찹스테이크',
        weather: 'cold_snowy',
        requiredVeg: ['양파', '버섯', '당근'],
        requiredMeat: ['소고기'],
        others: ['스테이크소스', '케첩', '버터'],
        score: 0
    },
    {
        name: '고등어 감자조림',
        weather: 'cold_snowy',
        requiredVeg: ['감자', '양파', '파'],
        requiredMeat: [],
        others: ['고등어캔', '간장', '고춧가루'],
        score: 0
    },
    {
        name: '돼지고기 짜글이',
        weather: 'cold_snowy',
        requiredVeg: ['양파', '파', '감자'],
        requiredMeat: ['돼지고기'],
        others: ['고추장', '고춧가루', '간장'],
        score: 0
    },
    {
        name: '부드러운 감자스프',
        weather: 'cold_snowy',
        requiredVeg: ['감자', '양파'],
        requiredMeat: [],
        others: ['우유', '생크림', '소금', '후추'],
        score: 0
    },
    {
        name: '보글보글 청국장',
        weather: 'cold_snowy',
        requiredVeg: ['호박', '파', '양파', '버섯'],
        requiredMeat: ['돼지고기'],
        others: ['청국장', '두부'],
        score: 0
    },

    // Hot (더운 날)
    {
        name: '닭고기 겨자 냉채',
        weather: 'hot',
        requiredVeg: ['양배추', '당근'],
        requiredMeat: ['닭고기'],
        others: ['오이', '겨자소스'],
        score: 0
    },
    {
        name: '시원한 냉소바',
        weather: 'hot',
        requiredVeg: ['파'],
        requiredMeat: [],
        others: ['메밀면', '쯔유', '무강', '와사비'],
        score: 0
    },
    {
        name: '새콤달콤 비빔국수',
        weather: 'hot',
        requiredVeg: ['양파', '당근'],
        requiredMeat: [],
        others: ['소면', '초고추장', '오이', '참기름'],
        score: 0
    },
    {
        name: '닭가슴살 샐러드',
        weather: 'hot',
        requiredVeg: ['양배추', '당근'],
        requiredMeat: ['닭고기'],
        others: ['방울토마토', '오리엔탈드레싱'],
        score: 0
    },
    {
        name: '간장 계란간편밥',
        weather: 'hot',
        requiredVeg: ['파'],
        requiredMeat: [],
        others: ['밥', '계란프라이', '간장', '참기름'],
        score: 0
    },
    {
        name: '돼지고기 샐러드',
        weather: 'hot',
        requiredVeg: ['양배추', '양파'],
        requiredMeat: ['돼지고기'],
        others: ['참깨드레싱'],
        score: 0
    },
    {
        name: '한입 소고기 유부초밥',
        weather: 'hot',
        requiredVeg: [],
        requiredMeat: ['소고기'],
        others: ['유부피', '밥', '단무지'],
        score: 0
    },
    {
        name: '토마토 냉파스타',
        weather: 'hot',
        requiredVeg: ['양파'],
        requiredMeat: [],
        others: ['파스타면', '방울토마토', '발사믹드레싱'],
        score: 0
    },
    {
        name: '매콤 두부김치',
        weather: 'hot',
        requiredVeg: ['양파', '파'],
        requiredMeat: ['돼지고기'],
        others: ['두부', '배추김치', '설탕', '참기름'],
        score: 0
    },

    // Normal (맑고 무난한 날)
    {
        name: '춘천식 닭갈비',
        weather: 'normal',
        requiredVeg: ['양배추', '양파', '파', '감자'],
        requiredMeat: ['닭고기'],
        others: ['고추장', '깻잎'],
        score: 0
    },
    {
        name: '소고기 버섯볶음',
        weather: 'normal',
        requiredVeg: ['버섯', '파', '양파'],
        requiredMeat: ['소고기'],
        others: ['굴소스', '식용유'],
        score: 0
    },
    {
        name: '돼지고기 야채 볶음밥',
        weather: 'normal',
        requiredVeg: ['당근', '파', '양파'],
        requiredMeat: ['돼지고기'],
        others: ['굴소스', '계란'],
        score: 0
    },
    {
        name: '호박 버섯전',
        weather: 'normal',
        requiredVeg: ['호박', '버섯', '양파'],
        requiredMeat: [],
        others: ['부침가루', '식용유'],
        score: 0
    },
    {
        name: '베이컨 크림 파스타',
        weather: 'normal',
        requiredVeg: ['양파', '버섯'],
        requiredMeat: [],
        others: ['스파게티면', '베이컨', '크림소스'],
        score: 0
    },
    {
        name: '양파 얹은 연어초밥',
        weather: 'normal',
        requiredVeg: ['양파'],
        requiredMeat: [],
        others: ['훈제연어', '초밥용 밥', '홀스래디쉬소스'],
        score: 0
    },
    {
        name: '소고기 야채 비빔밥',
        weather: 'normal',
        requiredVeg: ['당근', '호박', '버섯'],
        requiredMeat: ['소고기'],
        others: ['밥', '계란프라이', '고추장', '참기름'],
        score: 0
    },
    {
        name: '매콤 국물 떡볶이',
        weather: 'normal',
        requiredVeg: ['파', '양파'],
        requiredMeat: [],
        others: ['떡볶이떡', '어묵', '고추장', '설탕'],
        score: 0
    },
    {
        name: '얼큰 순두부찌개',
        weather: 'normal',
        requiredVeg: ['파', '양파', '호박'],
        requiredMeat: ['돼지고기'],
        others: ['순두부', '계란', '고추기름'],
        score: 0
    },
    {
        name: '바삭 떡꼬치',
        weather: 'normal',
        requiredVeg: [],
        requiredMeat: [],
        others: ['떡볶이떡', '고추장소스', '식용유'],
        score: 0
    },
    {
        name: '마늘 오일파스타',
        weather: 'normal',
        requiredVeg: ['파'],
        requiredMeat: [],
        others: ['파스타면', '올리브오일', '마늘', '페페론치노'],
        score: 0
    },
    {
        name: '바지락 봉골레 파스타',
        weather: 'normal',
        requiredVeg: ['파', '버섯'],
        requiredMeat: [],
        others: ['파스타면', '바지락', '올리브오일', '마늘'],
        score: 0
    },
    {
        name: '닭고기 또띠아 랩',
        weather: 'normal',
        requiredVeg: ['양배추', '양파'],
        requiredMeat: ['닭고기'],
        others: ['또띠아', '머스터드소스', '토마토'],
        score: 0
    }
];

// 앱 상태 객체
const state = {
    currentWeather: 'normal', // 'rainy' | 'cold_snowy' | 'hot' | 'normal'
    weatherInfo: { temp: 20, description: '맑음' },
    selectedIngredients: new Set(),
    shoppingList: [] // { id, name, menu, checked }
};

// DOM 로딩 완료 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    initIngredients();
    loadLocalStorage();
    initWeather();
    initEventListeners();
    
    // Lucide 아이콘 초기화
    lucide.createIcons();
});

// 야채 및 육류 체크리스트 그리드 구성
function initIngredients() {
    const vegGrid = document.getElementById('veg-grid');
    const meatGrid = document.getElementById('meat-grid');

    VEG_INGREDIENTS.forEach(ing => {
        vegGrid.appendChild(createIngredientCard(ing));
    });

    MEAT_INGREDIENTS.forEach(ing => {
        meatGrid.appendChild(createIngredientCard(ing));
    });
}

// 개별 식재료 카드 생성
function createIngredientCard(ing) {
    const card = document.createElement('div');
    card.className = `ingredient-item ${ing.type}`;
    card.dataset.id = ing.id;
    card.dataset.name = ing.name;

    let mediaHtml = '';
    if (ing.image) {
        mediaHtml = `<img src="${ing.image}" class="ingredient-img" alt="${ing.name}">`;
    } else {
        mediaHtml = `<span class="ingredient-emoji">${ing.emoji}</span>`;
    }

    card.innerHTML = `
        ${mediaHtml}
        <span class="ingredient-name">${ing.name}</span>
    `;

    card.addEventListener('click', () => {
        toggleIngredient(ing.id, card);
    });

    return card;
}

// 식재료 클릭 시 토글 처리
function toggleIngredient(id, cardElement) {
    if (state.selectedIngredients.has(id)) {
        state.selectedIngredients.delete(id);
        cardElement.classList.remove('selected');
    } else {
        state.selectedIngredients.add(id);
        cardElement.classList.add('selected');
    }
    saveIngredientsToLocalStorage();
}

// 주소 변환 (역지오코딩)
async function getAddressFromCoords(lat, lon) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&accept-language=ko`, {
            headers: {
                'User-Agent': 'JejuVibeApp/1.0 (cloverminji@github.com)'
            }
        });
        if (!response.ok) return null;
        const data = await response.json();
        const addr = data.address;
        if (addr) {
            const part1 = addr.province || addr.state || '';
            const part2 = addr.city || addr.town || addr.borough || addr.county || '';
            const part3 = addr.suburb || addr.neighbourhood || addr.village || '';
            const parts = [part1, part2, part3].filter(p => p !== '');
            if (parts.length > 1) {
                return `${parts[parts.length-2]} ${parts[parts.length-1]}`;
            } else if (parts.length === 1) {
                return parts[0];
            }
        }
    } catch (e) {
        console.warn('주소 변환 실패:', e);
    }
    return null;
}

// 날씨 코드에 매칭되는 아이콘 및 설명 반환
function getWeatherMeta(code, temp) {
    const rainyCodes = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99];
    const snowyCodes = [71, 73, 75, 77, 85, 86];

    let type = 'normal';
    let iconClass = 'cloudy';
    let iconHtml = '<i data-lucide="cloud-sun"></i>';
    let desc = '맑음/흐림';

    if (rainyCodes.includes(code)) {
        type = 'rainy';
        iconClass = 'rainy';
        iconHtml = '<i data-lucide="cloud-rain"></i>';
        desc = '비';
    } else if (snowyCodes.includes(code)) {
        type = 'cold_snowy';
        iconClass = 'snowy';
        iconHtml = '<i data-lucide="cloud-snow"></i>';
        desc = '눈';
    } else if (temp !== undefined && temp < 5) {
        type = 'cold_snowy';
        iconClass = 'snowy';
        iconHtml = '<i data-lucide="thermometer-snowflake"></i>';
        desc = '매우 추움';
    } else if (temp !== undefined && temp > 25) {
        type = 'hot';
        iconClass = 'sunny';
        iconHtml = '<i data-lucide="flame"></i>';
        desc = '무더위';
    } else {
        type = 'normal';
        iconClass = 'cloudy';
        iconHtml = '<i data-lucide="cloud-sun"></i>';
        desc = '선선한 날';
    }

    return { type, iconClass, iconHtml, desc };
}

// 날씨 정보 초기화 (위치 기반 조회)
function initWeather() {
    if (!navigator.geolocation) {
        // Geolocation을 지원하지 않는 경우 서울 날씨를 기본값으로 세팅
        fetchWeather(37.5665, 126.9780, '서울');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            let locationLabel = '현재 내 위치';
            
            // 좌표를 한글 주소로 변환
            const resolvedAddr = await getAddressFromCoords(lat, lon);
            if (resolvedAddr) {
                locationLabel = resolvedAddr;
            }
            
            fetchWeather(lat, lon, locationLabel);
        },
        (error) => {
            console.warn('Geolocation 권한이 거부되었거나 획득에 실패했습니다. 기본 위치로 날씨를 조회합니다.', error);
            // 권한 거부 시 서울로 대체 및 안내 메시지 제공
            fetchWeather(37.5665, 126.9780, '서울 (위치 권한 미승인)');
        },
        { timeout: 8000 }
    );
}

// Open-Meteo API 호출하여 날씨 데이터 연동
async function fetchWeather(lat, lon, locationLabel) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`);
        if (!response.ok) throw new Error('날씨 데이터를 가져오는 중 서버 에러가 발생했습니다.');
        
        const data = await response.json();
        const current = data.current_weather;
        
        const temp = Math.round(current.temperature);
        const code = current.weathercode;
        
        // 오늘 날씨 룰 해석
        const currentMeta = getWeatherMeta(code, temp);

        state.currentWeather = currentMeta.type;
        state.weatherInfo = { temp, description: currentMeta.desc };

        // 3일 예보 HTML 생성
        let dailyForecastHtml = '';
        if (data.daily) {
            const daily = data.daily;
            dailyForecastHtml = '<div class="weather-forecast-3day">';
            const labels = ['오늘', '내일', '모레'];
            for (let i = 0; i < 3; i++) {
                if (daily.time[i] !== undefined) {
                    const dayCode = daily.weathercode[i];
                    const minTemp = Math.round(daily.temperature_2m_min[i]);
                    const maxTemp = Math.round(daily.temperature_2m_max[i]);
                    const dayMeta = getWeatherMeta(dayCode);

                    dailyForecastHtml += `
                        <div class="forecast-day">
                            <span class="forecast-label">${labels[i]}</span>
                            <div class="forecast-icon ${dayMeta.iconClass}">
                                ${dayMeta.iconHtml}
                            </div>
                            <span class="forecast-temp">${minTemp}°/${maxTemp}°</span>
                        </div>
                    `;
                }
            }
            dailyForecastHtml += '</div>';
        }

        renderWeatherCard(locationLabel, temp, currentMeta.desc, currentMeta.iconClass, currentMeta.iconHtml, dailyForecastHtml);
    } catch (err) {
        console.error('날씨 API 오류:', err);
        renderWeatherError();
    }
}

// 날씨 정보 카드 렌더링
function renderWeatherCard(location, temp, desc, iconClass, iconHtml, dailyForecastHtml = '') {
    const weatherCard = document.getElementById('weather-card');
    weatherCard.className = 'weather-card';
    weatherCard.innerHTML = `
        <div class="weather-info">
            <div class="weather-icon-container ${iconClass}">
                ${iconHtml}
            </div>
            <div class="weather-text">
                <div class="weather-location">
                    <i data-lucide="map-pin" style="width: 14px; height: 14px;"></i>
                    <span>${location}</span>
                </div>
                <div class="weather-main">${desc}</div>
            </div>
        </div>
        <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
            <div class="weather-temp">
                ${temp}<span>°C</span>
            </div>
            ${dailyForecastHtml}
        </div>
    `;
    lucide.createIcons();
}

// 날씨 로딩 실패 또는 에러 시 수동 날씨 모의 선택 가능하도록 제공
function renderWeatherError() {
    const weatherCard = document.getElementById('weather-card');
    weatherCard.className = 'weather-card';
    weatherCard.innerHTML = `
        <div class="weather-error-container">
            <div class="weather-error-message">
                <i data-lucide="alert-circle" style="color: var(--meat-color); vertical-align: middle; margin-right: 4px;"></i>
                실시간 날씨를 불러오지 못했습니다. 날씨를 선택해 주세요:
            </div>
            <div class="weather-select-manual">
                <select id="weather-manual-select">
                    <option value="normal" ${state.currentWeather === 'normal' ? 'selected' : ''}>맑음/보통</option>
                    <option value="rainy" ${state.currentWeather === 'rainy' ? 'selected' : ''}>비 옴</option>
                    <option value="cold_snowy" ${state.currentWeather === 'cold_snowy' ? 'selected' : ''}>춥고 눈 옴</option>
                    <option value="hot" ${state.currentWeather === 'hot' ? 'selected' : ''}>매우 더움</option>
                </select>
            </div>
        </div>
    `;
    lucide.createIcons();

    // 수동 선택 이벤트 추가
    const select = document.getElementById('weather-manual-select');
    select.addEventListener('change', (e) => {
        state.currentWeather = e.target.value;
    });
}

// 이벤트 리스너 등록
function initEventListeners() {
    // 추천 버튼 클릭
    document.getElementById('btn-recommend').addEventListener('click', recommendMenus);
    
    // 장보기 비우기 버튼 클릭
    document.getElementById('btn-clear-shopping').addEventListener('click', clearShoppingList);
}

// 메뉴 추천 알고리즘 (2~3일 메뉴 목록 도출)
function recommendMenus() {
    const recListDiv = document.getElementById('recommendation-list');
    const recPlaceholder = document.getElementById('recommendation-placeholder');
    
    // 사용자가 체크한 보유 재료 한글 이름 배열 구하기
    const ownedNames = [];
    state.selectedIngredients.forEach(id => {
        const item = [...VEG_INGREDIENTS, ...MEAT_INGREDIENTS].find(i => i.id === id);
        if (item) ownedNames.push(item.name);
    });

    // 1. 현재 날씨 테마에 부합하는 메뉴들 우선 필터링
    const weatherMenus = MENU_DATABASE.filter(m => m.weather === state.currentWeather);
    
    // 2. 각 메뉴별로 보유 재료 매칭율 스코어링
    // 보유한 재료가 많을수록 매칭 스코어가 높아짐
    weatherMenus.forEach(menu => {
        let matchCount = 0;
        const totalReq = [...menu.requiredVeg, ...menu.requiredMeat];
        
        totalReq.forEach(req => {
            if (ownedNames.includes(req)) {
                matchCount += 2; // 보유한 필수 재료는 2점 가중치
            }
        });
        menu.score = matchCount;
    });

    // 점수 높은 순 정렬
    weatherMenus.sort((a, b) => b.score - a.score);

    // 2~3일치 메뉴 제안을 위해 최대 3개 아이템 선택 (메뉴 데이터가 부족할 경우 전체 메뉴에서 서브 매칭)
    let finalRecommendations = [...weatherMenus];
    
    if (finalRecommendations.length < 3) {
        // 날씨가 다른 메뉴 중에서도 보유 재료와 가장 잘 맞는 품목을 채워서 3일을 만듦
        const remainingMenus = MENU_DATABASE.filter(m => m.weather !== state.currentWeather);
        remainingMenus.forEach(menu => {
            let matchCount = 0;
            const totalReq = [...menu.requiredVeg, ...menu.requiredMeat];
            totalReq.forEach(req => {
                if (ownedNames.includes(req)) matchCount += 1.5; // 날씨가 다른 메뉴는 가중치 조금 낮춤
            });
            menu.score = matchCount;
        });
        remainingMenus.sort((a, b) => b.score - a.score);
        
        while (finalRecommendations.length < 3 && remainingMenus.length > 0) {
            finalRecommendations.push(remainingMenus.shift());
        }
    }

    // 최종 3개만 추천
    finalRecommendations = finalRecommendations.slice(0, 3);

    // 화면 렌더링
    recPlaceholder.classList.add('hide');
    recListDiv.classList.remove('hide');
    recListDiv.innerHTML = '';

    finalRecommendations.forEach((menu, index) => {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-card';
        
        // 보유중인 재료와 구매해야 할 식재료 분류
        const totalVegAndMeat = [...menu.requiredVeg, ...menu.requiredMeat];
        const ownedInMenu = totalVegAndMeat.filter(name => ownedNames.includes(name));
        const missingInMenu = totalVegAndMeat.filter(name => !ownedNames.includes(name));

        // 레시피 아웃링크 생성 (만개의 레시피, 새미네부엌)
        const recipeUrl10000 = `https://www.10000recipe.com/recipe/list.html?q=${encodeURIComponent(menu.name)}`;
        const recipeUrlSemie = `https://semie.cooking/search?q=${encodeURIComponent(menu.name)}`;

        // 결정 유무 체크
        const isDecided = state.shoppingList.some(item => item.menu === menu.name);

        menuCard.innerHTML = `
            <div class="menu-card-header">
                <div>
                    <div class="menu-day">${index + 1}일차 저녁 추천</div>
                    <div class="menu-title">${menu.name}</div>
                </div>
                <button class="btn-decide ${isDecided ? 'decided' : ''}" data-menu="${menu.name}">
                    <i data-lucide="${isDecided ? 'check-circle-2' : 'circle'}"></i> 
                    <span>${isDecided ? '선택 완료' : '식단 결정'}</span>
                </button>
            </div>
            
            <div class="menu-ingredients">
                ${ownedInMenu.map(n => `<span class="ing-badge owned">${n} (있음)</span>`).join('')}
                ${missingInMenu.map(n => `<span class="ing-badge missing">${n} (필요)</span>`).join('')}
                ${menu.others.map(n => `<span class="ing-badge condiment">${n}</span>`).join('')}
            </div>

            <div class="recipe-links-container" style="display: flex; flex-direction: column; gap: 6px; margin-top: 4px;">
                <a href="${recipeUrl10000}" target="_blank" rel="noopener noreferrer" class="recipe-link">
                    <i data-lucide="external-link" style="width: 14px; height: 14px;"></i> 
                    '만개의 레시피'에서 레시피 확인하기
                </a>
                <a href="${recipeUrlSemie}" target="_blank" rel="noopener noreferrer" class="recipe-link">
                    <i data-lucide="external-link" style="width: 14px; height: 14px;"></i> 
                    '새미네부엌'에서 레시피 확인하기
                </a>
            </div>
        `;

        // 식단 결정 버튼 이벤트
        menuCard.querySelector('.btn-decide').addEventListener('click', (e) => {
            const btn = e.currentTarget;
            toggleMenuDecision(menu, btn, missingInMenu);
        });

        recListDiv.appendChild(menuCard);
    });

    lucide.createIcons();
}

// 메뉴 결정 토글
function toggleMenuDecision(menu, buttonElement, missingIngredients) {
    const isCurrentlyDecided = buttonElement.classList.contains('decided');
    
    if (isCurrentlyDecided) {
        // 이미 결정된 메뉴이면 구매 리스트에서 이 메뉴로 인해 추가된 항목 제거
        state.shoppingList = state.shoppingList.filter(item => item.menu !== menu.name);
        buttonElement.classList.remove('decided');
        buttonElement.querySelector('span').textContent = '식단 결정';
        
        const iconEl = buttonElement.querySelector('i, svg');
        if (iconEl) {
            const newIcon = document.createElement('i');
            newIcon.setAttribute('data-lucide', 'circle');
            iconEl.parentNode.replaceChild(newIcon, iconEl);
        }
    } else {
        // 결정되지 않은 메뉴이면 부족한 식재료를 장보기 목록에 추가
        missingIngredients.forEach(name => {
            // 중복 방지 (같은 재료가 다른 메뉴 때문에 이미 담겨있을 수도 있음)
            const exists = state.shoppingList.some(item => item.name === name && item.menu === menu.name);
            if (!exists) {
                state.shoppingList.push({
                    id: `${menu.name}-${name}-${Date.now()}`,
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

// 장보기 목록 렌더링
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
        li.className = `shopping-item ${item.checked ? 'checked' : ''}`;
        li.innerHTML = `
            <div class="shopping-item-left">
                <div class="shopping-checkbox ${item.checked ? 'checked' : ''}">
                    ${item.checked ? '<i data-lucide="check" style="width: 12px; height: 12px;"></i>' : ''}
                </div>
                <div>
                    <span class="shopping-item-name">${item.name}</span>
                    <span class="shopping-item-menu">(${item.menu})</span>
                </div>
            </div>
            <i data-lucide="x" class="shopping-item-delete" style="cursor: pointer; width: 16px; height: 16px; color: var(--text-muted);"></i>
        `;

        // 체크박스 클릭 토글
        li.querySelector('.shopping-checkbox').addEventListener('click', () => {
            item.checked = !item.checked;
            saveShoppingToLocalStorage();
            renderShoppingList();
        });

        // 삭제 아이콘 클릭
        li.querySelector('.shopping-item-delete').addEventListener('click', () => {
            state.shoppingList = state.shoppingList.filter(i => i.id !== item.id);
            // 만약 해당 메뉴의 모든 구매 재료를 삭제했거나 수동으로 지웠는데 메뉴 카드의 체크를 갱신하고 싶다면 추천 리스트를 리렌더링
            saveShoppingToLocalStorage();
            renderShoppingList();
            
            // 만약 현재 추천된 메뉴 카드들 중 이 메뉴와 연결된 것들의 선택완료 버튼 활성화 상태를 업데이트
            updateDecideButtons();
        });

        shoppingListDiv.appendChild(li);
    });

    lucide.createIcons();
}

// 결정 버튼 상태 동기화
function updateDecideButtons() {
    const buttons = document.querySelectorAll('.btn-decide');
    buttons.forEach(btn => {
        const menuName = btn.dataset.menu;
        const stillInList = state.shoppingList.some(item => item.menu === menuName);
        if (!stillInList) {
            btn.classList.remove('decided');
            btn.querySelector('span').textContent = '식단 결정';
            
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

// 장보기 목록 전체 초기화
function clearShoppingList() {
    state.shoppingList = [];
    saveShoppingToLocalStorage();
    renderShoppingList();
    updateDecideButtons();
}

// 로컬 스토리지 데이터 저장 (재료)
function saveIngredientsToLocalStorage() {
    const array = Array.from(state.selectedIngredients);
    localStorage.setItem('selectedIngredients', JSON.stringify(array));
}

// 로컬 스토리지 데이터 저장 (장보기)
function saveShoppingToLocalStorage() {
    localStorage.setItem('shoppingList', JSON.stringify(state.shoppingList));
}

// 로컬 스토리지 데이터 복구
function loadLocalStorage() {
    // 1. 재료 복구
    const savedIngs = localStorage.getItem('selectedIngredients');
    if (savedIngs) {
        try {
            const array = JSON.parse(savedIngs);
            array.forEach(id => {
                state.selectedIngredients.add(id);
                const card = document.querySelector(`.ingredient-item[data-id="${id}"]`);
                if (card) card.classList.add('selected');
            });
        } catch (e) {
            console.error('재료 로컬스토리지 복구 에러:', e);
        }
    }

    // 2. 장보기 목록 복구
    const savedShopping = localStorage.getItem('shoppingList');
    if (savedShopping) {
        try {
            state.shoppingList = JSON.parse(savedShopping);
            renderShoppingList();
        } catch (e) {
            console.error('장보기 로컬스토리지 복구 에러:', e);
        }
    }
}
