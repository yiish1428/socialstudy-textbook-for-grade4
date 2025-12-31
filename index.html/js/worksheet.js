// 워크시트 기능
document.addEventListener('DOMContentLoaded', function() {
    // 네비게이션 토글
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // 입력 필드 자동 저장 (로컬 스토리지)
    const inputs = document.querySelectorAll('input[type="text"], textarea, input[type="checkbox"]');
    
    // 저장된 데이터 불러오기
    inputs.forEach((input, index) => {
        const savedValue = localStorage.getItem(`worksheet_input_${index}`);
        if (savedValue) {
            if (input.type === 'checkbox') {
                input.checked = savedValue === 'true';
            } else {
                input.value = savedValue;
            }
        }

        // 입력 시 자동 저장
        input.addEventListener('input', function() {
            if (this.type === 'checkbox') {
                localStorage.setItem(`worksheet_input_${index}`, this.checked);
            } else {
                localStorage.setItem(`worksheet_input_${index}`, this.value);
            }
        });

        input.addEventListener('change', function() {
            if (this.type === 'checkbox') {
                localStorage.setItem(`worksheet_input_${index}`, this.checked);
            }
        });
    });

    // 워크시트 카드 애니메이션
    const worksheetCards = document.querySelectorAll('.worksheet-card');
    worksheetCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// 워크시트 인쇄 함수
function printWorksheet(unitNumber) {
    // 인쇄 전 확인
    if (confirm(`${unitNumber}단원 워크시트를 인쇄하시겠습니까?`)) {
        // 인쇄 스타일 적용을 위한 새 창 열기
        const printContent = document.querySelectorAll('.worksheet-card')[unitNumber - 1].innerHTML;
        const printWindow = window.open('', '', 'height=600,width=800');
        
        printWindow.document.write('<html><head><title>워크시트 ' + unitNumber + '단원</title>');
        printWindow.document.write('<style>');
        printWindow.document.write(`
            body {
                font-family: 'Noto Sans KR', sans-serif;
                padding: 20px;
                line-height: 1.8;
            }
            .worksheet-header {
                text-align: center;
                margin-bottom: 30px;
                border-bottom: 3px solid #4A90E2;
                padding-bottom: 15px;
            }
            .worksheet-header i {
                font-size: 2rem;
                color: #4A90E2;
            }
            .worksheet-header h3 {
                margin: 10px 0;
                font-size: 1.5rem;
            }
            .activity-box {
                margin: 20px 0;
                padding: 15px;
                border: 1px solid #ddd;
                border-radius: 5px;
            }
            h4 {
                color: #4A90E2;
                margin-top: 25px;
                margin-bottom: 15px;
            }
            ol, ul {
                margin-left: 20px;
            }
            li {
                margin-bottom: 10px;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
            }
            th, td {
                border: 1px solid #ddd;
                padding: 10px;
                text-align: left;
            }
            th {
                background-color: #f5f5f5;
            }
            input[type="text"], textarea {
                width: 100%;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 3px;
            }
            textarea {
                min-height: 60px;
            }
            .form-group {
                margin: 15px 0;
            }
            .form-group label {
                display: block;
                font-weight: bold;
                margin-bottom: 5px;
            }
            .checkbox-group {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .btn {
                display: none; /* 인쇄 시 버튼 숨김 */
            }
            @media print {
                body {
                    padding: 0;
                }
                .btn {
                    display: none !important;
                }
            }
        `);
        printWindow.document.write('</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(printContent);
        printWindow.document.write('</body></html>');
        
        printWindow.document.close();
        printWindow.focus();
        
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 250);
    }
}

// 모든 데이터 초기화 함수
function resetAllData() {
    if (confirm('모든 작성 내용을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
        localStorage.clear();
        location.reload();
    }
}
