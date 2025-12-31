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

// 퀴즈 문제 데이터 - 청주시 특화
        title: "1. 우리 지역의 위치와 특성",
        sections: [
            {
                title: "지도로 우리 지역 찾기",
                content: "지도는 넓은 땅을 작게 줄여서 그린 그림입니다. 지도를 보면 우리 지역이 어디에 있는지 쉽게 찾을 수 있어요.",
                points: [
                    "지도에서 방위 확인하기 (동, 서, 남, 북) - 위쪽이 북쪽입니다",
                    "우리 지역의 위치 찾기 - 도(道)와 시(市)의 이름을 확인해요",
                    "주변 지역과의 관계 파악하기 - 이웃한 지역들이 어디인지 알아봐요",
                    "범례 읽기 - 지도의 기호가 무엇을 의미하는지 배워요",
                    "축척 이해하기 - 실제 거리와 지도상의 거리 비교하기"
                ]
            },
            {
                title: "우리 지역의 자연환경",
                content: "우리 지역에는 산, 강, 바다 등 다양한 자연환경이 있습니다. 이러한 자연환경은 사람들의 생활 모습에 큰 영향을 미칩니다.",
                points: [
                    "산이 많은 지역: 계단식 밭농사, 임업, 등산, 맑은 공기",
                    "강이 흐르는 지역: 논농사, 물놀이, 수상 교통, 친수 공원",
                    "바다와 가까운 지역: 어업, 양식업, 해수욕, 항구 발달",
                    "평야 지역: 대규모 농사, 도시 발달, 교통 편리",
                    "자연환경과 주민 생활의 관계 이해하기"
                ]
            },
            {
                title: "우리 지역의 특색",
                content: "각 지역은 자연환경과 역사에 따라 다른 특색을 가지고 있습니다. 이것이 지역의 정체성을 만듭니다.",
                points: [
                    "지역의 대표적인 특산물 조사하기",
                    "지역의 유명한 축제와 그 의미",
                    "지역의 전통 문화와 예술",
                    "지역의 상징물 (꽃, 새, 나무 등)",
                    "지역 사람들의 자부심과 애향심"
                ]
            },
            {
                title: "지역의 기후와 생활",
                content: "기후는 그 지역 사람들의 생활 방식에 큰 영향을 줍니다.",
                points: [
                    "따뜻한 지역과 추운 지역의 집 모양 차이",
                    "비가 많이 오는 지역의 특징",
                    "계절에 따른 지역의 변화",
                    "기후를 고려한 옷차림과 음식"
                ]
            }
        ]
    },
    2: {
        title: "2. 우리 지역의 역사",
        sections: [
            {
                title: "우리 지역의 옛이야기",
                content: "우리 지역에는 옛날부터 전해 내려오는 재미있는 이야기들이 많습니다. 이 이야기들에는 조상들의 지혜와 가치관이 담겨 있어요.",
                points: [
                    "지역과 관련된 전설과 설화 알아보기",
                    "역사적 인물의 업적과 삶 배우기",
                    "옛날 사람들의 생활 모습 상상하기",
                    "구전으로 전해지는 이야기의 가치",
                    "할아버지, 할머니께 옛날이야기 듣기"
                ]
            },
            {
                title: "역사적 장소 탐방",
                content: "우리 지역에 있는 역사적 장소를 방문하여 과거의 모습을 알아봅시다. 직접 보고 느끼는 것이 중요해요.",
                points: [
                    "문화재와 유적지 방문하기",
                    "역사 박물관에서 유물 관찰하기",
                    "전통 건축물의 특징 알아보기",
                    "역사적 사건이 일어난 장소의 의미",
                    "문화해설사의 설명 듣기",
                    "사진으로 기록하고 보고서 작성하기"
                ]
            },
            {
                title: "문화유산 보존",
                content: "우리 지역의 소중한 문화유산을 어떻게 보호하고 보존할 수 있을까요? 우리 모두의 책임입니다.",
                points: [
                    "문화유산이 왜 중요한지 이해하기",
                    "유형 문화재와 무형 문화재의 차이",
                    "문화유산 보호 방법 실천하기",
                    "문화재를 훼손하지 않는 관람 예절",
                    "우리가 할 수 있는 일: 관심 갖기, 알리기, 존중하기",
                    "문화유산 지킴이 활동 참여하기"
                ]
            },
            {
                title: "역사 인물과 사건",
                content: "우리 지역과 관련된 중요한 역사 인물과 사건을 알아봅시다.",
                points: [
                    "독립운동가와 그들의 활동",
                    "지역 발전에 기여한 인물들",
                    "중요한 역사적 사건의 배경과 결과",
                    "역사 인물에게 배우는 교훈"
                ]
            }
        ]
    },
    3: {
        title: "3. 우리 지역의 생활과 변화",
        sections: [
            {
                title: "옛날과 오늘날의 생활 비교",
                content: "시간이 지나면서 우리 지역 사람들의 생활 모습이 많이 달라졌습니다. 무엇이 어떻게 변했을까요?",
                points: [
                    "옛날의 집(한옥, 초가집)과 오늘날의 집(아파트, 빌라)",
                    "옛날의 교통수단(우마차, 인력거)과 오늘날(자동차, 지하철)",
                    "옛날의 의복(한복)과 오늘날(양복, 캐주얼)",
                    "옛날의 놀이(연날리기, 제기차기)와 오늘날(컴퓨터 게임, 스마트폰)",
                    "옛날의 통신(편지)과 오늘날(휴대전화, 인터넷)",
                    "변화의 장점과 단점 생각해보기"
                ]
            },
            {
                title: "우리 지역의 발전",
                content: "우리 지역은 어떻게 발전해 왔을까요? 발전 과정을 살펴봅시다.",
                points: [
                    "도시의 발달과 변화: 인구 증가, 건물 증가",
                    "교통의 발달: 도로 확충, 대중교통 발달",
                    "통신의 발달: 전화, 인터넷 보급",
                    "산업의 발달: 공장 건설, 일자리 증가",
                    "교육 시설의 확충: 학교, 도서관, 문화센터",
                    "발전에 따른 문제점: 환경 오염, 교통 혼잡",
                    "문제 해결을 위한 노력"
                ]
            },
            {
                title: "미래의 우리 지역",
                content: "앞으로 우리 지역이 어떻게 발전하면 좋을지 생각해봅시다. 우리가 꿈꾸는 지역의 모습은?",
                points: [
                    "살기 좋은 지역 만들기: 깨끗한 환경, 편리한 시설",
                    "환경을 보호하는 방법: 재활용, 에너지 절약",
                    "전통과 현대의 조화",
                    "주민이 함께 참여하는 마을 만들기",
                    "미래 기술을 활용한 스마트 도시",
                    "나의 꿈과 지역 발전 연결하기"
                ]
            },
            {
                title: "어르신들의 경험 듣기",
                content: "할아버지, 할머니의 경험담을 통해 옛날 생활을 생생하게 알아봅시다.",
                points: [
                    "인터뷰 준비하고 질문 만들기",
                    "옛날 학교생활과 놀이 이야기",
                    "어렸을 때의 꿈과 추억",
                    "시대별 변화의 경험담",
                    "후손들에게 전하고 싶은 메시지"
                ]
            }
        ]
    },
    4: {
        title: "4. 다양한 지역과 교류",
        sections: [
            {
                title: "다른 지역의 생활 모습",
                content: "우리나라의 다양한 지역은 각각 특색 있는 생활 모습을 가지고 있습니다. 서로 다른 점을 이해하고 존중해요.",
                points: [
                    "도시와 농촌의 생활 비교: 직업, 생활 방식, 환경",
                    "산간 지역과 해안 지역의 생활 비교",
                    "각 지역의 특산물과 주요 산업",
                    "지역별 주택과 교통 시설의 차이",
                    "지역의 특징이 생활에 미치는 영향",
                    "다양성 속에서 공통점 찾기"
                ]
            },
            {
                title: "지역 간 교류의 필요성",
                content: "지역들은 서로 도움을 주고받으며 함께 발전합니다. 왜 교류가 필요할까요?",
                points: [
                    "물자 교류: 농산물, 수산물, 공산품 교환",
                    "경제 활동: 시장, 무역, 관광",
                    "문화 교류: 축제, 공연, 전시회",
                    "교통과 통신의 역할: 빠른 이동과 소통",
                    "지역 간 협력 사례: 자매결연, 공동 프로젝트",
                    "교류를 통한 상생과 발전"
                ]
            },
            {
                title: "더불어 사는 지역 사회",
                content: "각 지역의 특색을 존중하고 서로 협력하는 것이 중요합니다. 함께 살아가는 지혜를 배워요.",
                points: [
                    "지역의 다양성 이해하고 인정하기",
                    "편견과 차별 없애기: 서로 다름을 인정하기",
                    "함께 발전하는 방법 찾기",
                    "지역 간 갈등을 대화로 해결하기",
                    "공정한 교류와 거래의 중요성",
                    "우리가 실천할 수 있는 일들"
                ]
            },
            {
                title: "세계 속의 우리나라",
                content: "우리나라도 세계 여러 나라와 교류하며 발전하고 있습니다.",
                points: [
                    "다른 나라와의 무역과 경제 협력",
                    "문화 교류: K-POP, 한식, 한글의 세계화",
                    "국제 행사와 협력 사례",
                    "세계 시민으로서의 자세"
                ]
            }
        ]
    }
};

// 퀴즈 문제 데이터 - 청주시 특화
const allQuizQuestions = [
    // 1단원: 청주의 위치와 특성
    {
        question: "청주는 어느 도(道)에 속해 있나요?",
        options: ["경기도", "강원도", "충청북도", "충청남도"],
        correct: 2,
        explanation: "청주는 충청북도의 도청 소재지이자 가장 큰 도시입니다."
    },
    {
        question: "청주를 가로지르는 중심 하천의 이름은?",
        options: ["한강", "무심천", "금강", "낙동강"],
        correct: 1,
        explanation: "무심천은 청주의 중심을 가로지르며, 현재는 벚꽃 명소이자 시민들의 휴식처입니다."
    },
    {
        question: "청주시는 몇 개의 구로 이루어져 있나요?",
        options: ["2개", "3개", "4개", "5개"],
        correct: 2,
        explanation: "청주시는 서원구, 상당구, 흥덕구, 청원구 4개의 구로 이루어져 있습니다."
    },
    {
        question: "청주 근처에 있는 큰 호수의 이름은?",
        options: ["소양호", "대청호", "충주호", "팔당호"],
        correct: 1,
        explanation: "대청호는 청주 근처에 있는 큰 호수로, 청주 시민들에게 깨끗한 물을 공급합니다."
    },
    {
        question: "청주가 교통의 중심인 이유로 맞는 것은?",
        options: ["바다가 가까워서", "고속도로가 교차해서", "산이 많아서", "인구가 적어서"],
        correct: 1,
        explanation: "청주는 경부고속도로와 중부고속도로가 교차하는 곳에 있어 교통의 중심지입니다."
    },
    {
        question: "청주의 대표적인 재래시장은?",
        options: ["남대문시장", "광장시장", "육거리시장", "통인시장"],
        correct: 2,
        explanation: "육거리시장은 70년 전통을 가진 청주의 대표적인 재래시장입니다."
    },
    {
        question: "상당산성이 있는 산의 이름은?",
        options: ["상당산", "우암산", "부모산", "무심산"],
        correct: 0,
        explanation: "상당산에는 조선시대에 쌓은 상당산성이 있으며, 현재는 시민들의 산책 코스입니다."
    },

    // 2단원: 청주의 역사
    {
        question: "청주의 가장 큰 자랑인 '직지'는 무엇인가요?",
        options: ["도자기", "그림", "금속활자 인쇄본", "동상"],
        correct: 2,
        explanation: "직지는 1377년 청주 흥덕사에서 만들어진 세계 최초의 금속활자 인쇄본입니다."
    },
    {
        question: "직지가 구텐베르크 금속활자보다 몇 년 앞섰나요?",
        options: ["38년", "58년", "78년", "98년"],
        correct: 2,
        explanation: "직지(1377년)는 구텐베르크(1455년)보다 78년이나 앞선 금속활자 인쇄본입니다."
    },
    {
        question: "직지가 인쇄된 절의 이름은?",
        options: ["흥덕사", "용두사", "직지사", "봉은사"],
        correct: 0,
        explanation: "직지는 1377년 청주 흥덕사에서 인쇄되었습니다. 현재 흥덕사터가 남아있어요."
    },
    {
        question: "청주고인쇄박물관에서 주로 볼 수 있는 것은?",
        options: ["공룡 화석", "인쇄 문화와 직지", "현대 미술", "우주 과학"],
        correct: 1,
        explanation: "청주고인쇄박물관은 직지를 비롯한 인쇄 문화의 역사를 보여주는 박물관입니다."
    },
    {
        question: "상당산성은 언제 처음 만들어졌나요?",
        options: ["삼국시대", "고려시대", "조선시대", "현대"],
        correct: 0,
        explanation: "상당산성은 백제시대에 처음 쌓였고, 그 후 여러 번 보수되었습니다."
    },
    {
        question: "용두사지 철당간은 어느 시대의 문화재인가요?",
        options: ["삼국시대", "고려시대", "조선시대", "일제강점기"],
        correct: 1,
        explanation: "용두사지 철당간은 고려시대에 만들어진 국보 제41호 문화재입니다."
    },
    {
        question: "청주시는 언제 청원군과 통합되었나요?",
        options: ["2004년", "2009년", "2014년", "2019년"],
        correct: 2,
        explanation: "청주시는 2014년 7월 1일 청원군과 통합하여 큰 도시가 되었습니다."
    },

    // 3단원: 청주의 생활과 변화
    {
        question: "육거리시장의 '육거리'는 무엇을 의미하나요?",
        options: ["고기 파는 곳", "6개의 길이 만나는 곳", "6월에 열리는 시장", "6개 상점"],
        correct: 1,
        explanation: "육거리는 6개의 길이 만나는 곳이라는 의미입니다."
    },
    {
        question: "무심천이 현재 청주 시민들에게 사랑받는 이유는?",
        options: ["고기가 많이 잡혀서", "벚꽃 명소이자 산책로가 되어서", "수영할 수 있어서", "배를 탈 수 있어서"],
        correct: 1,
        explanation: "무심천은 생태하천으로 복원되어 벚꽃 명소이자 시민들의 산책로가 되었습니다."
    },
    {
        question: "청주의 인구는 약 몇 명인가요?",
        options: ["15만 명", "35만 명", "55만 명", "85만 명"],
        correct: 3,
        explanation: "청주는 약 85만 명이 사는 충청북도에서 가장 큰 도시입니다."
    },
    {
        question: "옛날 무심천의 모습이 아닌 것은?",
        options: ["홍수가 자주 났다", "물이 더러웠다", "벚꽃이 많았다", "복개 논의가 있었다"],
        correct: 2,
        explanation: "옛날 무심천은 홍수가 나고 더러웠지만, 복원 사업 후 현재는 벚꽃 명소가 되었습니다."
    },
    {
        question: "청주국제공항은 언제 개항했나요?",
        options: ["1990년대", "2000년대", "2010년대", "2020년대"],
        correct: 1,
        explanation: "청주국제공항은 2000년대에 개항하여 충북과 세계를 연결하고 있습니다."
    },
    {
        question: "청주의 혁신도시에 들어온 것은?",
        options: ["놀이공원", "공공기관", "공장", "농장"],
        correct: 1,
        explanation: "청주 혁신도시에는 여러 공공기관이 이전하여 일자리가 늘어났습니다."
    },
    {
        question: "청주 육거리시장의 청춘야시장은 언제 열리나요?",
        options: ["아침", "점심", "저녁", "새벽"],
        correct: 2,
        explanation: "청춘야시장은 저녁 시간에 열리는 야시장으로, 젊은이들이 많이 찾습니다."
    },

    // 4단원: 청주와 다른 지역의 교류
    {
        question: "충청북도의 도청은 어디에 있나요?",
        options: ["충주", "제천", "청주", "음성"],
        correct: 2,
        explanation: "충청북도청은 청주에 있으며, 청주는 충북의 행정 중심지입니다."
    },
    {
        question: "괴산이 유명한 이유는?",
        options: ["공업단지", "유기농 농산물", "해산물", "자동차 공장"],
        correct: 1,
        explanation: "괴산은 깨끗한 자연환경에서 생산되는 유기농 농산물로 유명합니다."
    },
    {
        question: "청주가 충북의 중심 도시로서 하는 역할이 아닌 것은?",
        options: ["의료 서비스 제공", "교육 기회 제공", "문화 행사 개최", "농사만 짓기"],
        correct: 3,
        explanation: "청주는 의료, 교육, 문화 등 다양한 서비스를 제공하는 중심 도시입니다."
    },
    {
        question: "KTX 오송역이 청주에 중요한 이유는?",
        options: ["경치가 좋아서", "전국 어디든 빠르게 갈 수 있어서", "공짜로 탈 수 있어서", "역사가 오래되어서"],
        correct: 1,
        explanation: "KTX 오송역 덕분에 청주에서 서울, 부산 등 전국 어디든 빠르게 갈 수 있습니다."
    },
    {
        question: "청주국제공항을 통해 갈 수 있는 나라가 아닌 것은?",
        options: ["중국", "일본", "베트남", "미국"],
        correct: 3,
        explanation: "청주국제공항은 중국, 일본, 베트남 등 아시아 국가들과 연결되어 있습니다."
    },
    {
        question: "청주국제공예비엔날레는 무엇을 하는 행사인가요?",
        options: ["스포츠 대회", "공예 작품 전시", "음악 축제", "요리 대회"],
        correct: 1,
        explanation: "청주국제공예비엔날레는 세계 각국의 공예 작품을 전시하는 국제 행사입니다."
    },
    {
        question: "지역 간 교류가 중요한 이유는?",
        options: ["경쟁하기 위해", "서로 돕고 함께 발전하기 위해", "자기 지역만 발전하기 위해", "구경하기 위해"],
        correct: 1,
        explanation: "지역 간 교류는 서로 협력하고 함께 발전하기 위해 중요합니다."
    }
];
    // 1단원: 우리 지역의 위치와 특성
    {
        question: "지도에서 위쪽은 어느 방향을 나타내나요?",
        options: ["동쪽", "서쪽", "남쪽", "북쪽"],
        correct: 3,
        explanation: "지도에서는 일반적으로 위쪽이 북쪽, 아래쪽이 남쪽, 오른쪽이 동쪽, 왼쪽이 서쪽을 나타냅니다."
    },
    {
        question: "산이 많은 지역의 특징으로 알맞은 것은?",
        options: ["평평한 논이 많다", "계단식 밭이 많다", "바다에서 고기를 잡는다", "높은 건물이 많다"],
        correct: 1,
        explanation: "산이 많은 지역은 경사가 급해서 계단식으로 밭을 만들어 농사를 짓습니다."
    },
    {
        question: "지도를 볼 때 사용하는 기호를 무엇이라고 하나요?",
        options: ["범례", "나침반", "축척", "방위표"],
        correct: 0,
        explanation: "범례는 지도에서 사용하는 각종 기호와 그 의미를 설명한 것입니다."
    },
    {
        question: "바다와 가까운 지역에서 주로 하는 일은?",
        options: ["논농사", "목축업", "어업", "과수원 경영"],
        correct: 2,
        explanation: "바다와 가까운 지역에서는 고기를 잡거나 양식하는 어업이 발달합니다."
    },
    {
        question: "평야 지역의 특징이 아닌 것은?",
        options: ["땅이 평평하다", "논농사에 유리하다", "교통이 편리하다", "인구가 매우 적다"],
        correct: 3,
        explanation: "평야 지역은 농사짓기 좋고 교통이 편리해서 인구가 많이 모입니다."
    },
    {
        question: "우리 지역의 특산물이란 무엇인가요?",
        options: ["다른 지역에서 수입하는 물건", "그 지역에서 특별히 많이 나는 물건", "공장에서 만드는 물건", "외국에서 들여오는 물건"],
        correct: 1,
        explanation: "특산물은 그 지역의 자연환경과 기후에 맞아 특별히 많이 생산되는 물건입니다."
    },

    // 2단원: 우리 지역의 역사
    {
        question: "우리 지역의 문화유산을 보호해야 하는 이유는?",
        options: ["예쁘기 때문에", "돈이 되기 때문에", "역사와 문화를 알 수 있기 때문에", "관광객이 많이 오기 때문에"],
        correct: 2,
        explanation: "문화유산은 조상들의 삶과 지혜가 담긴 소중한 자료로, 우리의 역사와 문화를 이해하는 데 중요합니다."
    },
    {
        question: "향교는 조선시대에 무엇을 하던 곳인가요?",
        options: ["물건을 사고 파는 곳", "공부를 하던 곳", "음식을 만드는 곳", "병을 치료하는 곳"],
        correct: 1,
        explanation: "향교는 조선시대 지방에서 교육을 담당하던 국립 교육기관입니다."
    },
    {
        question: "문화재를 잘 보존하기 위해 우리가 할 수 있는 일이 아닌 것은?",
        options: ["문화재에 낙서하지 않기", "문화재 주변을 깨끗이 하기", "문화재를 함부로 만지지 않기", "문화재에 이름을 새기기"],
        correct: 3,
        explanation: "문화재에 낙서를 하거나 이름을 새기는 것은 문화재를 훼손하는 행위입니다."
    },
    {
        question: "역사 박물관에서 볼 수 있는 것이 아닌 것은?",
        options: ["옛날 사람들이 사용한 도구", "역사적 사건 자료", "미래 로봇", "옛날 그림과 책"],
        correct: 2,
        explanation: "역사 박물관은 과거의 유물과 자료를 전시하는 곳입니다."
    },
    {
        question: "우리 지역의 역사를 알아보는 방법으로 알맞지 않은 것은?",
        options: ["역사책 읽기", "박물관 방문하기", "어르신께 여쭤보기", "텔레비전 드라마만 보기"],
        correct: 3,
        explanation: "드라마는 재미를 위해 각색된 경우가 많으므로, 역사책, 박물관, 어르신의 경험담 등 다양한 방법으로 알아보는 것이 좋습니다."
    },
    {
        question: "옛날 이야기나 전설을 알아보는 것이 중요한 이유는?",
        options: ["재미있기 때문에", "시험에 나오기 때문에", "조상들의 생각과 지혜를 알 수 있기 때문에", "친구들에게 자랑하기 위해"],
        correct: 2,
        explanation: "옛날 이야기와 전설에는 조상들의 생각, 가치관, 삶의 지혜가 담겨 있습니다."
    },

    // 3단원: 우리 지역의 생활과 변화
    {
        question: "옛날과 비교하여 오늘날 교통수단이 발달한 이유는?",
        options: ["더 빨리 이동하기 위해", "운동하기 위해", "재미있게 놀기 위해", "옛날 방식을 잊지 않기 위해"],
        correct: 0,
        explanation: "교통수단의 발달로 우리는 더 빠르고 편리하게 먼 거리를 이동할 수 있게 되었습니다."
    },
    {
        question: "옛날 사람들이 물을 얻던 방법은?",
        options: ["수돗물", "우물", "정수기", "생수"],
        correct: 1,
        explanation: "옛날에는 우물을 파서 물을 길어 사용했습니다."
    },
    {
        question: "옛날과 오늘날의 집 모습 비교로 알맞은 것은?",
        options: ["옛날: 아파트, 오늘날: 한옥", "옛날: 한옥, 오늘날: 아파트", "옛날과 오늘날 모두 같다", "옛날: 빌라, 오늘날: 초가집"],
        correct: 1,
        explanation: "옛날에는 주로 한옥이나 초가집에 살았고, 오늘날에는 아파트, 빌라 등 다양한 형태의 집에 살고 있습니다."
    },
    {
        question: "생활이 편리해진 이유로 알맞지 않은 것은?",
        options: ["전기의 발달", "과학 기술의 발달", "교통과 통신의 발달", "날씨가 좋아져서"],
        correct: 3,
        explanation: "생활이 편리해진 것은 전기, 과학 기술, 교통, 통신 등의 발달 덕분입니다."
    },
    {
        question: "옛날 사람들의 주요 연락 방법은?",
        options: ["휴대전화", "인터넷", "편지", "이메일"],
        correct: 2,
        explanation: "옛날에는 주로 편지를 써서 소식을 전했습니다."
    },
    {
        question: "우리 지역이 발전하면서 생긴 문제가 아닌 것은?",
        options: ["교통 혼잡", "환경 오염", "인구 증가", "전통 문화 증가"],
        correct: 3,
        explanation: "지역이 발전하면서 교통 혼잡, 환경 오염 등의 문제가 생기고, 오히려 전통 문화는 사라질 위험이 있습니다."
    },
    {
        question: "옛날 어린이들의 놀이가 아닌 것은?",
        options: ["연날리기", "제기차기", "비디오 게임", "팽이치기"],
        correct: 2,
        explanation: "비디오 게임은 현대에 등장한 놀이입니다. 옛날에는 연날리기, 제기차기 같은 전통 놀이를 즐겼습니다."
    },

    // 4단원: 다양한 지역과 교류
    {
        question: "서로 다른 지역이 교류하는 좋은 점이 아닌 것은?",
        options: ["필요한 물건을 교환할 수 있다", "다른 지역의 문화를 배울 수 있다", "서로 도움을 주고받을 수 있다", "자기 지역만 발전할 수 있다"],
        correct: 3,
        explanation: "지역 간 교류는 서로 협력하고 함께 발전하기 위한 것으로, 모든 지역이 함께 발전하는 것이 중요합니다."
    },
    {
        question: "도시와 농촌이 교류하는 방법으로 알맞은 것은?",
        options: ["도시는 농산물을 사고, 농촌은 공산품을 산다", "교류하지 않는다", "도시만 물건을 판다", "농촌만 물건을 산다"],
        correct: 0,
        explanation: "도시와 농촌은 서로 필요한 물건을 교환하며 상호 협력합니다."
    },
    {
        question: "지역 축제를 여는 이유로 알맞지 않은 것은?",
        options: ["지역 특산물을 알리기 위해", "다른 지역 사람들과 교류하기 위해", "지역 문화를 보존하기 위해", "다른 지역을 비난하기 위해"],
        correct: 3,
        explanation: "지역 축제는 특산물과 문화를 알리고, 다른 지역과 교류하며 함께 즐기기 위한 것입니다."
    },
    {
        question: "교통과 통신이 발달하면 지역 간 교류가 어떻게 되나요?",
        options: ["더 활발해진다", "더 어려워진다", "변화가 없다", "불가능해진다"],
        correct: 0,
        explanation: "교통과 통신이 발달하면 지역 간 이동과 소통이 쉬워져 교류가 더 활발해집니다."
    },
    {
        question: "다른 지역의 특징을 존중해야 하는 이유는?",
        options: ["법으로 정해져 있어서", "각 지역마다 고유한 가치가 있기 때문에", "선생님이 시켜서", "시험에 나오기 때문에"],
        correct: 1,
        explanation: "각 지역은 그 지역만의 역사와 문화, 자연환경에 따른 고유한 가치와 특징이 있기 때문에 존중해야 합니다."
    },
    {
        question: "지역 간 협력이 필요한 분야가 아닌 것은?",
        options: ["환경 보호", "재난 대응", "문화 교류", "지역 간 경쟁 심화"],
        correct: 3,
        explanation: "지역 간에는 환경 보호, 재난 대응, 문화 교류 등에서 협력이 필요하며, 경쟁보다는 협력이 중요합니다."
    },
    {
        question: "우리나라 지역들의 공통점은?",
        options: ["모두 바다가 있다", "모두 같은 특산물이 난다", "모두 대한민국이라는 같은 나라이다", "모두 산이 없다"],
        correct: 2,
        explanation: "우리나라의 모든 지역은 각자 다른 특징을 가지고 있지만, 대한민국이라는 같은 나라의 일부입니다."
    },
    {
        question: "지역의 다양성을 인정하는 태도는?",
        options: ["우리 지역이 최고라고 생각한다", "다른 지역을 무시한다", "각 지역의 특색을 이해하고 존중한다", "다른 지역에 관심이 없다"],
        correct: 2,
        explanation: "각 지역의 특색을 이해하고 존중하는 것이 올바른 태도입니다."
    }
];

// DOM이 로드되면 실행
document.addEventListener('DOMContentLoaded', function() {
    // 네비게이션 토글
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // 네비게이션 링크 클릭 시
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 모바일 메뉴 닫기
            navMenu.classList.remove('active');
            
            // active 클래스 업데이트
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // 부드러운 스크롤
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 스크롤 시 active 네비게이션 업데이트
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // 단원 카드 호버 효과
    const unitCards = document.querySelectorAll('.unit-card');
    unitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// 단원 상세 보기 함수
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

// 퀴즈 시작 함수
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    
    // 문제를 섞어서 5개 선택
    quizQuestions = shuffleArray([...allQuizQuestions]).slice(0, 5);
    
    // UI 전환
    document.querySelector('.quiz-intro').style.display = 'none';
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';
    
    // 첫 문제 표시
    showQuestion();
}

// 배열 섞기 함수
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 문제 표시 함수
function showQuestion() {
    const question = quizQuestions[currentQuestion];
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const questionTitle = document.getElementById('questionTitle');
    const answerOptions = document.getElementById('answerOptions');
    
    // 진행률 업데이트
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = `문제 ${currentQuestion + 1} / ${quizQuestions.length}`;
    
    // 문제 표시
    questionTitle.textContent = question.question;
    
    // 답안 선택지 생성
    answerOptions.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'answer-option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => checkAnswer(index);
        answerOptions.appendChild(optionDiv);
    });
    
    // 결과 숨기기
    document.querySelector('.question-card').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';
}

// 답안 확인 함수
function checkAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestion];
    const answerOptions = document.querySelectorAll('.answer-option');
    const resultDiv = document.getElementById('quizResult');
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    
    // 답안 체크 비활성화
    answerOptions.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // 정답 표시
    answerOptions[question.correct].classList.add('correct');
    
    // 오답 처리
    if (selectedIndex !== question.correct) {
        answerOptions[selectedIndex].classList.add('incorrect');
        resultIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
        resultIcon.className = 'result-icon incorrect';
        resultTitle.textContent = '아쉬워요!';
        resultTitle.style.color = 'var(--error-color)';
    } else {
        score++;
        resultIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        resultIcon.className = 'result-icon correct';
        resultTitle.textContent = '정답이에요!';
        resultTitle.style.color = 'var(--success-color)';
    }
    
    resultMessage.textContent = question.explanation;
    
    // 결과 표시
    setTimeout(() => {
        document.querySelector('.question-card').style.display = 'none';
        resultDiv.style.display = 'block';
    }, 1000);
}

// 다음 문제 함수
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        showFinalResult();
    }
}

// 최종 결과 표시 함수
function showFinalResult() {
    const resultDiv = document.getElementById('quizResult');
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    
    const percentage = (score / quizQuestions.length) * 100;
    
    if (percentage >= 80) {
        resultIcon.innerHTML = '<i class="fas fa-trophy"></i>';
        resultIcon.className = 'result-icon';
        resultIcon.style.color = '#FFD700';
        resultTitle.textContent = '훌륭해요!';
        resultTitle.style.color = '#FFD700';
        resultMessage.textContent = `${quizQuestions.length}문제 중 ${score}문제를 맞혔어요! 정말 잘했어요!`;
    } else if (percentage >= 60) {
        resultIcon.innerHTML = '<i class="fas fa-smile"></i>';
        resultIcon.className = 'result-icon correct';
        resultTitle.textContent = '잘했어요!';
        resultTitle.style.color = 'var(--success-color)';
        resultMessage.textContent = `${quizQuestions.length}문제 중 ${score}문제를 맞혔어요! 조금만 더 노력하면 완벽해요!`;
    } else {
        resultIcon.innerHTML = '<i class="fas fa-book-reader"></i>';
        resultIcon.className = 'result-icon';
        resultIcon.style.color = 'var(--primary-color)';
        resultTitle.textContent = '다시 한번 도전해봐요!';
        resultTitle.style.color = 'var(--primary-color)';
        resultMessage.textContent = `${quizQuestions.length}문제 중 ${score}문제를 맞혔어요! 교과서를 다시 읽고 도전해보세요!`;
    }
    
    // 버튼 변경
    const nextButton = resultDiv.querySelector('.btn');
    nextButton.textContent = '다시 풀기';
    nextButton.onclick = () => {
        document.querySelector('.quiz-intro').style.display = 'block';
        document.getElementById('quizContent').style.display = 'none';
    };
    
    resultDiv.style.display = 'block';
}

// 페이지 로드 애니메이션
window.addEventListener('load', function() {
    // 요소들에 fade-in 효과 추가
    const elements = document.querySelectorAll('.unit-card, .resource-card');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
