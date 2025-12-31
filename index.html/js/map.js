// 청주 지도 장소 정보
const locationData = {
    'city-hall': {
        title: '청주시청',
        icon: 'fa-building',
        description: '충청북도 청주시의 행정 중심지입니다.',
        details: [
            '청주시청은 청주 시민을 위한 행정 서비스를 제공합니다.',
            '서원구, 상당구, 흥덕구, 청원구를 관리합니다.',
            '시장님과 공무원들이 일하는 곳입니다.',
            '주민등록, 각종 민원 서비스를 제공합니다.',
            '청주 발전을 위한 정책을 만듭니다.'
        ]
    },
    'school': {
        title: '초등학교',
        icon: 'fa-school',
        description: '우리가 다니는 학교입니다.',
        details: [
            '청주에는 100개가 넘는 초등학교가 있습니다.',
            '많은 학생들이 꿈을 키우며 공부합니다.',
            '컴퓨터실, 과학실, 도서관 등이 잘 갖춰져 있습니다.',
            '선생님들이 우리를 가르쳐주십니다.',
            '친구들과 함께 즐겁게 배우는 곳입니다.'
        ]
    },
    'temple': {
        title: '상당산성',
        icon: 'fa-torii-gate',
        description: '조선시대부터 이어져온 역사적인 산성입니다.',
        details: [
            '백제시대에 처음 쌓인 산성입니다.',
            '둘레가 4.2km에 달하는 긴 성곽입니다.',
            '병자호란 때 의병들이 싸운 역사적인 장소입니다.',
            '사적 제212호로 지정된 문화재입니다.',
            '지금은 시민들의 산책과 운동 코스입니다.',
            '성곽을 따라 걸으며 역사를 느낄 수 있습니다.'
        ]
    },
    'market': {
        title: '육거리 종합시장',
        icon: 'fa-store',
        description: '70년 전통의 청주 대표 재래시장입니다.',
        details: [
            '1950년대 6·25 전쟁 후 형성된 시장입니다.',
            '6개의 길이 만나는 곳이라 육거리라 불립니다.',
            '신선한 농산물과 다양한 먹거리가 있습니다.',
            '떡볶이, 순대, 만두 등 맛있는 음식이 많습니다.',
            '청춘야시장이 열려 젊은이들도 많이 찾습니다.'
        ]
    },
    'park': {
        title: '무심천 수변공원',
        icon: 'fa-tree',
        description: '청주 시민들이 사랑하는 생태하천입니다.',
        details: [
            '청주를 가로지르는 무심천을 따라 조성되었습니다.',
            '봄에는 벚꽃이 아름답게 핍니다.',
            '산책로와 자전거 도로가 잘 만들어져 있습니다.',
            '음악분수와 바닥분수가 있어 더 즐겁습니다.',
            '가족들이 함께 산책하고 운동하는 곳입니다.'
        ]
    },
    'museum': {
        title: '국립청주박물관',
        icon: 'fa-landmark',
        description: '충북의 역사와 문화를 배울 수 있는 곳입니다.',
        details: [
            '충청북도의 역사와 문화를 전시합니다.',
            '선사시대부터 조선시대까지의 유물이 있습니다.',
            '어린이 박물관에서 체험 활동을 할 수 있습니다.',
            '야외 전시장에서 석조 문화재를 볼 수 있습니다.',
            '초등학생은 무료로 관람할 수 있습니다.'
        ]
    },
    'station': {
        title: 'KTX 오송역',
        icon: 'fa-train',
        description: '청주와 전국을 연결하는 고속철도역입니다.',
        details: [
            '2010년에 개통한 KTX 역입니다.',
            '서울까지 약 1시간이면 도착합니다.',
            '부산, 광주, 목포 등 전국으로 빠르게 이동할 수 있습니다.',
            '청주국제공항과 연결되는 교통의 중심지입니다.',
            '하루 수만 명의 승객이 이용합니다.'
        ]
    },
    'hanok': {
        title: '청주 한씨 고가',
        icon: 'fa-home',
        description: '조선시대 양반 가옥이 보존된 곳입니다.',
        details: [
            '조선시대 양반 집의 모습을 볼 수 있습니다.',
            '사랑채, 안채, 행랑채가 잘 보존되어 있습니다.',
            '충청북도 민속문화재로 지정되었습니다.',
            '한옥의 아름다운 건축미를 감상할 수 있습니다.',
            '옛날 사람들의 생활 모습을 상상해볼 수 있습니다.'
        ]
    }
};
    'city-hall': {
        title: '시청',
        icon: 'fa-building',
        description: '우리 지역의 행정 중심지입니다.',
        details: [
            '시청은 시의 정치와 행정을 담당하는 곳입니다.',
            '시민들의 불편사항을 해결하고 도시를 발전시키는 일을 합니다.',
            '주민등록, 여권 발급 등 다양한 민원 서비스를 제공합니다.',
            '시청 앞 광장에서는 다양한 문화 행사가 열립니다.'
        ]
    },
    'school': {
        title: '초등학교',
        icon: 'fa-school',
        description: '우리가 다니는 학교입니다.',
        details: [
            '1950년에 개교한 역사 깊은 학교입니다.',
            '약 500명의 학생들이 다니고 있습니다.',
            '컴퓨터실, 과학실, 도서관 등 다양한 시설이 있습니다.',
            '학교 앞 은행나무는 50년이 넘은 보호수입니다.'
        ]
    },
    'temple': {
        title: '전통 사찰',
        icon: 'fa-torii-gate',
        description: '조선시대부터 이어져온 사찰입니다.',
        details: [
            '조선 초기인 1420년에 창건된 사찰입니다.',
            '아름다운 단청과 목조 건축이 잘 보존되어 있습니다.',
            '시도 지정 문화재로 보호받고 있습니다.',
            '매년 봄에는 산사음악회가 열립니다.'
        ]
    },
    'market': {
        title: '전통시장',
        icon: 'fa-store',
        description: '70년 전통의 재래시장입니다.',
        details: [
            '1950년대부터 형성된 시장입니다.',
            '신선한 농산물과 수산물을 저렴하게 구입할 수 있습니다.',
            '떡볶이, 순대 등 다양한 먹거리가 있습니다.',
            '매달 5일과 10일에 큰 장이 섭니다.'
        ]
    },
    'park': {
        title: '시민 공원',
        icon: 'fa-tree',
        description: '가족들이 함께 즐기는 공원입니다.',
        details: [
            '10만 평방미터 규모의 넓은 공원입니다.',
            '산책로, 자전거 도로, 놀이터가 있습니다.',
            '계절마다 다른 꽃들이 피어 아름답습니다.',
            '주말에는 버스킹 공연이 열립니다.'
        ]
    },
    'museum': {
        title: '역사 박물관',
        icon: 'fa-landmark',
        description: '우리 지역의 역사를 배울 수 있는 곳입니다.',
        details: [
            '선사시대부터 현대까지의 역사를 전시합니다.',
            '고고학 유물, 역사 자료, 민속품 등을 볼 수 있습니다.',
            '체험 프로그램으로 전통 문화를 배울 수 있습니다.',
            '초등학생은 무료로 입장할 수 있습니다.'
        ]
    },
    'station': {
        title: '기차역',
        icon: 'fa-train',
        description: '다른 지역으로 이동하는 교통의 중심입니다.',
        details: [
            '1960년에 개통된 역으로 지역의 관문입니다.',
            'KTX와 일반 열차가 정차합니다.',
            '하루 평균 5,000명이 이용합니다.',
            '서울까지 2시간, 부산까지 3시간이 걸립니다.'
        ]
    },
    'hanok': {
        title: '한옥마을',
        icon: 'fa-home',
        description: '전통 한옥이 보존된 마을입니다.',
        details: [
            '조선시대 양반가의 한옥이 보존되어 있습니다.',
            '30여 채의 전통 한옥을 볼 수 있습니다.',
            '한복 체험, 전통 공예 체험이 가능합니다.',
            '외국인 관광객들이 많이 찾는 명소입니다.'
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // 네비게이션 토글
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // 마커 클릭 이벤트
    const markers = document.querySelectorAll('.marker');
    const infoPanel = document.getElementById('infoPanel');
    const infoPanelContent = document.getElementById('infoPanelContent');
    const closeInfo = document.getElementById('closeInfo');

    markers.forEach(marker => {
        marker.addEventListener('click', function() {
            const locationKey = this.getAttribute('data-location');
            const data = locationData[locationKey];

            if (data) {
                // 정보 패널 내용 업데이트
                let html = `
                    <div class="location-info">
                        <div class="location-header">
                            <i class="fas ${data.icon}"></i>
                            <h3>${data.title}</h3>
                        </div>
                        <p class="location-description">${data.description}</p>
                        <ul class="location-details">
                            ${data.details.map(detail => `<li>${detail}</li>`).join('')}
                        </ul>
                    </div>
                `;
                infoPanelContent.innerHTML = html;

                // 정보 패널 표시
                infoPanel.classList.add('active');

                // 모든 마커의 active 제거
                markers.forEach(m => m.classList.remove('active'));
                // 현재 마커 active 추가
                this.classList.add('active');
            }
        });

        // 마커 호버 효과
        marker.addEventListener('mouseenter', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1.2)';
        });

        marker.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        });
    });

    // 정보 패널 닫기
    closeInfo.addEventListener('click', function() {
        infoPanel.classList.remove('active');
        markers.forEach(m => {
            m.classList.remove('active');
            m.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    // 마커 애니메이션
    markers.forEach((marker, index) => {
        marker.style.opacity = '0';
        marker.style.transform = 'translate(-50%, -50%) scale(0)';
        setTimeout(() => {
            marker.style.transition = 'all 0.3s ease';
            marker.style.opacity = '1';
            marker.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 500 + index * 100);
    });

    // 나침반 회전 애니메이션
    const compass = document.querySelector('.compass-arrow');
    let rotation = 0;
    setInterval(() => {
        rotation += 0.5;
        if (rotation >= 360) rotation = 0;
        compass.style.transform = `rotate(${rotation}deg)`;
    }, 50);
});
