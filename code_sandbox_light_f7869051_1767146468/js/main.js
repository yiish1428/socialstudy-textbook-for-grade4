// 전역 변수
let currentQuestion = 0;
let score = 0;
let quizQuestions = [];

// 단원별 상세 내용 - 청주시 특화
const unitContents = {
    1: {
        title: "1. 청주의 위치와 특성",
        sections: [
            {
                title: "지도로 청주 찾기",
                content: "청주는 충청북도의 중심 도시입니다. 지도를 보면 우리 청주가 어디에 있는지 쉽게 찾을 수 있어요.",
                points: [
                    "지도에서 방위 확인하기 (동, 서, 남, 북) - 위쪽이 북쪽입니다",
                    "충청북도 청주시 찾기 - 충북의 중앙에 위치해요",
                    "주변 도시 알아보기 - 세종, 대전, 보은, 진천, 괴산",
                    "서원구, 상당구, 흥덕구, 청원구 - 청주의 4개 구",
                    "무심천 찾기 - 청주를 가로지르는 중심 하천"
                ]
            },
            {
                title: "청주의 자연환경",
                content: "청주에는 무심천이 흐르고 주변에 상당산성이 있는 산들이 있습니다. 이러한 자연환경은 청주 사람들의 생활에 큰 영향을 미칩니다.",
                points: [
                    "상당산: 상당산성이 있는 청주의 명산",
                    "무심천: 청주를 가로지르는 하천, 벚꽃 명소",
                    "대청호: 청주 근처의 큰 호수, 맑은 물 공급",
                    "평야 지역: 논농사에 유리한 넓은 평야",
                    "온화한 기후: 살기 좋은 사계절 날씨"
                ]
            },
            {
                title: "청주의 특색",
                content: "청주는 직지의 고장으로 유명하며, 다양한 특색을 가지고 있습니다.",
                points: [
                    "직지의 고장: 세계 최초 금속활자 인쇄본",
                    "육거리시장: 70년 전통의 재래시장",
                    "청주국제공항: 충북의 관문",
                    "교통의 중심: 경부고속도로, 중부고속도로 교차",
                    "교육과 문화의 도시: 많은 대학과 박물관"
                ]
            },
            {
                title: "청주 시민의 생활",
                content: "청주는 충북에서 가장 많은 인구가 사는 도시로, 다양한 사람들이 모여 살고 있습니다.",
                points: [
                    "충북의 행정·경제·문화 중심지",
                    "아파트와 주택이 조화로운 주거 환경",
                    "다양한 직업: 공무원, 회사원, 상인, 교사 등",
                    "풍부한 문화 시설: 박물관, 미술관, 공연장"
                ]
            }
        ]
    },
    2: {
        title: "2. 청주의 역사",
        sections: [
            {
                title: "청주의 옛이야기",
                content: "청주는 오랜 역사를 가진 도시입니다. 삼국시대부터 중요한 지역이었어요.",
                points: [
                    "삼국시대: 백제와 신라가 차지하려 했던 중요한 땅",
                    "고려시대: 청주목이 설치되어 지역의 중심지로 발전",
                    "조선시대: 충청도의 중요한 도시",
                    "근대: 일제강점기 독립운동의 중심지",
                    "현대: 1946년 청주시로 승격, 2014년 청원군과 통합"
                ]
            },
            {
                title: "직지와 인쇄 문화",
                content: "청주는 세계 최초의 금속활자 인쇄본 '직지'가 만들어진 곳입니다. 이것은 청주의 가장 큰 자랑이에요!",
                points: [
                    "직지(1377년): 세계에서 가장 오래된 금속활자 인쇄본",
                    "흥덕사: 직지가 인쇄된 절터",
                    "청주고인쇄박물관: 직지와 인쇄 문화를 배우는 곳",
                    "구텐베르크보다 78년 앞선 기술",
                    "유네스코 세계기록유산 등재"
                ]
            },
            {
                title: "상당산성의 역사",
                content: "상당산성은 청주의 역사를 지켜온 산성입니다.",
                points: [
                    "백제시대에 처음 쌓인 산성",
                    "길이 4.2km의 긴 성곽",
                    "병자호란 때 의병들이 싸운 장소",
                    "사적 제212호로 지정된 문화재",
                    "현재는 시민들의 산책 코스",
                    "성곽을 따라 걸으며 역사를 느낄 수 있어요"
                ]
            },
            {
                title: "청주의 문화유산",
                content: "청주에는 다양한 문화유산이 있습니다.",
                points: [
                    "용두사지 철당간: 국보 제41호, 고려시대 유물",
                    "청주 한씨 고가: 조선시대 양반 가옥",
                    "우암산: 시민들의 사랑을 받는 산",
                    "국립청주박물관: 충북의 역사를 한눈에",
                    "청주 문화재 보호 활동: 우리가 지켜야 할 유산"
                ]
            }
        ]
    },
    3: {
        title: "3. 청주의 생활과 변화",
        sections: [
            {
                title: "옛날 청주와 오늘날 청주",
                content: "시간이 지나면서 청주는 작은 읍에서 큰 도시로 발전했습니다.",
                points: [
                    "옛날의 청주: 작은 시골 마을, 낮은 기와집들",
                    "1970년대: 공업단지 조성, 인구 증가 시작",
                    "1980-90년대: 아파트 단지 건설, 도시 확장",
                    "2000년대: 청주국제공항 개항",
                    "2014년: 청원군과 통합, 대도시로 성장",
                    "현재: 85만 명이 사는 충북 최대 도시"
                ]
            },
            {
                title: "육거리시장의 변화",
                content: "육거리시장은 70년 전통을 가진 청주의 대표 재래시장입니다.",
                points: [
                    "1950년대: 6·25 전쟁 후 형성",
                    "이름의 유래: 6개의 길이 만나는 곳",
                    "전성기: 청주 최대의 시장",
                    "현대: 대형마트와 경쟁",
                    "문화관광형 시장: 새로운 변신",
                    "청춘야시장: 젊은이들이 찾는 시장"
                ]
            },
            {
                title: "무심천의 변신",
                content: "무심천은 청주 시민들의 휴식처로 다시 태어났습니다.",
                points: [
                    "옛날: 홍수가 나고 더러운 하천",
                    "1990년대: 복개 논의가 있었음",
                    "2000년대: 생태하천 복원 사업",
                    "현재: 벚꽃 명소, 산책로, 자전거 도로",
                    "음악분수와 조명: 야간 명소",
                    "시민들의 사랑: 청주의 자랑"
                ]
            },
            {
                title: "미래의 청주",
                content: "청주는 더욱 살기 좋은 도시가 되기 위해 노력하고 있습니다.",
                points: [
                    "혁신도시: 공공기관 이전으로 일자리 증가",
                    "친환경 도시: 전기버스, 자전거 도로 확충",
                    "스마트 시티: 첨단 기술 도입",
                    "문화 도시: 직지 문화 진흥",
                    "교통 개선: 도시철도 추진",
                    "시민 참여: 함께 만드는 청주"
                ]
            }
        ]
    },
    4: {
        title: "4. 청주와 다른 지역의 교류",
        sections: [
            {
                title: "충북의 다른 지역들",
                content: "충청북도에는 청주 외에도 다양한 지역이 있습니다.",
                points: [
                    "충주: 탄금대가 있는 역사의 도시",
                    "제천: 의림지와 약초가 유명한 곳",
                    "진천: 농업이 발달한 평야 지역",
                    "음성: 산업단지가 많은 곳",
                    "괴산: 유기농 농산물의 고장",
                    "각 지역의 특색을 이해하고 존중하기"
                ]
            },
            {
                title: "청주와 주변 지역의 교류",
                content: "청주는 충북의 중심으로서 다른 지역과 활발히 교류합니다.",
                points: [
                    "농산물 교류: 괴산 고추, 진천 쌀, 청주 공산품",
                    "교통의 중심: 충북 각지에서 청주로 모이는 길",
                    "교육 교류: 청주의 대학에서 공부하는 충북 학생들",
                    "의료 서비스: 청주의 큰 병원 이용",
                    "문화 교류: 충북문화의전당, 공연과 전시",
                    "상생 협력: 함께 발전하는 충북"
                ]
            },
            {
                title: "청주와 전국",
                content: "청주는 전국 각지와도 활발하게 교류합니다.",
                points: [
                    "청주국제공항: 중국, 일본 등과 연결",
                    "경부고속도로: 서울, 부산과 빠른 교통",
                    "KTX 오송역: 전국 어디든 빠르게",
                    "산업 교류: 전국의 기업들과 협력",
                    "관광 교류: 전국에서 찾아오는 관광객",
                    "자매결연: 다른 지역 도시들과 협력"
                ]
            },
            {
                title: "세계 속의 청주",
                content: "청주는 세계와도 교류하는 국제 도시입니다.",
                points: [
                    "직지 세계화: 직지를 세계에 알리기",
                    "국제 교류: 중국, 일본 등과 자매도시",
                    "청주국제공항: 외국과의 연결 통로",
                    "외국인 근로자: 함께 살아가는 이웃",
                    "국제 행사: 청주국제공예비엔날레",
                    "글로벌 시민: 세계를 이해하는 청주 시민"
                ]
            }
        ]
    }
};

// 모달 열기 함수
function openUnit(unitNumber) {
    const modal = document.getElementById('unitModal');
    const modalContent = document.getElementById('modalContent');
    const unit = unitContents[unitNumber];
    
    if (!unit) {
        alert('준비 중인 콘텐츠입니다.');
        return;
    }
    
    let html = `
        <div class="modal-header">
            <h2>${unit.title}</h2>
        </div>
        <div class="modal-body">
    `;
    
    unit.sections.forEach((section, index) => {
        html += `
            <div class="lesson-section">
                <h3>${section.title}</h3>
                <p>${section.content}</p>
                <ul>
                    ${section.points.map(point => `<li>${point}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    
    html += `
            <div style="margin-top: 2rem; text-align: center;">
                <button class="btn btn-primary" onclick="closeModal()">닫기</button>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = html;
    modal.style.display = 'block';
    
    // 모달 외부 클릭 시 닫기
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

// 모달 닫기 함수
function closeModal() {
    const modal = document.getElementById('unitModal');
    modal.style.display = 'none';
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// 네비게이션 토글
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // 모바일 메뉴 링크 클릭 시 메뉴 닫기
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});
