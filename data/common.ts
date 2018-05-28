export namespace Common {
  export const LeafletType = {
    none: { key: 'none', name: '사진만 표시', },
    vehicle: { key: 'vehicle', name: '자동차 이동' },
    hotdeal: { key: 'hotdeal', name: '핫딜 이동' },
    url: { key: 'url', name: 'URL 이동' },
    used: { key: 'used', name: '중고차 입력으로 이동' },
    board: { key: 'board', name: 'board로 이동' },
  };

  export const Brand = {
    bmw: { key: 'bmw', name: 'BMW', isDomestic: false },
    volkswagen: { key: 'volkswagen', name: '폭스바겐', isDomestic: false },
    kia: { key: 'kia', name: '기아', isDomestic: true },
    ssangyong: { key: 'ssangyong', name: '쌍용', isDomestic: true },
    infiniti: { key: 'infiniti', name: '인피니티', isDomestic: false },
    toyota: { key: 'toyota', name: '토요타', isDomestic: false },
    maserati: { key: 'maserati', name: '마세라티', isDomestic: false },
    volvo: { key: 'volvo', name: '볼보', isDomestic: false },
    ford: { key: 'ford', name: '포드', isDomestic: false },
    benz: { key: 'benz', name: '벤츠', isDomestic: false },
    chevrolet: { key: 'chevrolet', name: '쉐보레', isDomestic: true },
    renaultsamsung: { key: 'renaultsamsung', name: '르노삼성', isDomestic: true },
    peugeot: { key: 'peugeot', name: '푸조', isDomestic: false },
    honda: { key: 'honda', name: '혼다', isDomestic: false },
    mini: { key: 'mini', name: '미니', isDomestic: false },
    nissan: { key: 'nissan', name: '닛산', isDomestic: false },
    landrover: { key: 'landrover', name: '랜드로버', isDomestic: false },
    lexus: { key: 'lexus', name: '렉서스', isDomestic: false },
    jaguar: { key: 'jaguar', name: '재규어', isDomestic: false },
    audi: { key: 'audi', name: '아우디', isDomestic: false },
    hyundai: { key: 'hyundai', name: '현대', isDomestic: true },
    cadillac: { key: 'cadillac', name: '캐딜락', isDomestic: false },
    porsche: { key: 'porsche', name: '포르쉐', isDomestic: false },
    jeep: { key: 'jeep', name: '지프', isDomestic: false },
    fiat: { key: 'fiat', name: '피아트', isDomestic: false },
    citroen: { key: 'citroen', name: '시트로엥', isDomestic: false },
    chrysler: { key: 'chrysler', name: '크라이슬러', isDomestic: false },
    lincoln: { key: 'lincoln', name: '링컨', isDomestic: false },
    genesis: { key: 'genesis', name: '제네시스', isDomestic: true },
    trive: { key: 'trive', name: '트라이브', isDomestic: true }
  };

  export const Appearance = {
    sedan: { key: 'sedan', name: '세단' },
    coupe: { key: 'coupe', name: '쿠페' },
    wagon: { key: 'wagon', name: '왜건' },
    hatchback: { key: 'hatchback', name: '해치백' },
    suv: { key: 'suv', name: 'SUV' },
    convertible: { key: 'convertible', name: '컨버터블' },
    rv: { key: 'rv', name: 'RV' },
  };

  export const UserType = {
    guest: { key: 'guest', name: '게스트' },
    customer: { key: 'customer', name: '소비자' },
    dealer: { key: 'dealer', name: '신차판매자' },
    agent: { key: 'agent', name: '중고판매자' },
    admin: { key: 'admin', name: '관리자' },
  }

  export const Gender = {
    female: { key: 'female', name: '여성' },
    male: { key: 'male', name: '남성' },
  };

  export const Active = {
    pending: { key: 'pending', name: '생성후 대기' },
    active: { key: 'active', name: '활동' },
    inactive: { key: 'inactive', name: '비활동' },
    inspecting: { key: 'inspecting', name: '조사중' }
  };

  export const Province = {
    seoul: { key: 'seoul', name: '서울' },
    gyeonggi: { key: 'gyeonggi', name: '경기' },
    inchen: { key: 'inchen', name: '인천' },
    jeolla_north: { key: 'jeolla_north', name: '전북' },
    jeolla_south: { key: 'jeolla_south', name: '전남' },
    chungcheong_north: { key: 'chungcheong_north', name: '충북' },
    chungcheong_south: { key: 'chungcheong_south', name: '충남' },
    guengsang_north: { key: 'guengsang_north', name: '경북' },
    gyengsang_south: { key: 'gyengsang_south', name: '경남' },
    busan: { key: 'busan', name: '부산' },
    jeju: { key: 'jeju', name: '제주' },
    daegu: { key: 'daegu', name: '대구' },
    daejeon: { key: 'daejeon', name: '대전' },
    gwangju: { key: 'gwangju', name: '광주' },
    ulsan: { key: 'ulsan', name: '울산' },
    gangwon: { key: 'gangwon', name: '강원' },
    sejong: { key: 'sejong', name: '세종' },
    unknown: { key: 'unknown', name: '알수없음' }
  };

  export const Post = {
    dealer: { key: 'dealer', name: '딜러 메시지' },
    qa: { key: 'qa', name: '고객센터' },
    board: { key: 'board', name: 'Board' },
    notice: { key: 'notice', name: '공지사항' },
    privacy: { key: 'privacy', name: '개인정보' },
    use: { key: 'use', name: '약관' },
    agent: { key: 'agent', name: '딜러 매물 등록 서비스 약관' }
  };

  export const QAType = {
    signup: { key: 'signup', name: '가입 문의' },
    dealer: { key: 'dealer', name: '딜러 문의' },
    drive: { key: 'drive', name: '시승 서비스' },
    estimate: { key: 'estimate', name: '견적 서비스' },
    misc: { key: 'misc', name: '기타' },
    faq: { key: 'faq', name: '자주 묻는 질문' }
  };

  export const PostBoard = {
    routine: { key: 'routine', name: '일상' },
    info: { key: 'info', name: '정보' },
    event: { key: 'event', name: '이벤트' }
  };

  export const PostDealer = {
    promotion: { key: 'promotion', name: 'Promotion' },
    event: { key: 'event', name: 'Event' },
    ad: { key: 'ad', name: 'AD' }
  };

  export const Financial = {
    cash: { key: 'cash', name: '현금' },
    installment: { key: 'installment', name: '할부' },
    lease: { key: 'lease', name: '리스' }
  };

  export const When = {
    month1: { key: 'month1', name: '한달 이내' },
    month6: { key: 'month6', name: '6개월 이내' },
    later: { key: 'later', name: '추후 구매' }
  };

  export const Fuel = {
    gasoline: { value: 'gasoline', name: '가솔린' },
    diesel: { value: 'diesel', name: '디젤' },
    diesel_electric: { value: 'diesel_electric', name: '디젤+전기' },
    lpg: { value: 'lpg', name: 'LPG' },
    gasoline_electric: { value: 'gasoline_electric', name: '가솔린+전기' },
    gasoline_lpg: { value: 'gasoline_lpg', name: '가솔린+LPG' },
    lpg_electric: { value: 'lpg_electric', name: 'LPG+전기' },
    electric: { value: 'electric', name: '전기' }
  };

  export const Transmission = {
    automatic_: { key: 'automatic_', name: '자동' },
    manual_: { key: 'manual_', name: '수동' },
    semi_: { key: 'semi_', name: '세미오토' },
    continuously_: { key: 'continuously_', name: '무단 변속' },
    others_: { key: 'others_', name: '기타' }
  };

  export const DriveType = {
    wheel2: { key: 'wheel2', name: '2륜' },
    wheel4: { key: 'wheel4', name: '4륜' }
  }

  export const HowToBuy = {
    individual: { key: 'individual', name: '개인' },
    corporation: { key: 'corporation', name: '법인' },
    operating_lease: { key: 'operating_lease', name: '운용 리스' },
    finance_lease: { key: 'finance_lease', name: '금융 리스' }
  };

  export const Checklist = {
    hood: { key: 'hood', name: '후드' },
    front_frender_left: { key: 'front_frender_left', name: '프론트 펜더_좌' }
  };

  export const Option = {
    navi: { key: 'navi', name: '네비게이션' },
    bbox: { key: 'bbox', name: '블랙박스' },
    sunroof: { key: 'sunroof', name: '선루프' },
    hipass: { key: 'hipass', name: '하이패스' },
    rsensor: { key: 'rsensor', name: '후방감지센서' },
    rcam: { key: 'rcam', name: '후방카메라' },
    hotseat: { key: 'hotseat', name: '열선시트' },
    smartkey: { key: 'smartkey', name: '스마트키' }
  };

  export const SellType = {
    a: { key: 'a', name: '타상사 알선' },
    b: { key: 'b', name: '원상사 알선' },
    c: { key: 'c', name: '직접 판매' }
  };

  export const Status = {
    good: { key: 'good', name: '양호' },
    error: { key: 'error', name: '작동 불량' },
    exist: { key: 'exist', name: '있음' },
    none: { key: 'none', name: '없음' },
    mnt: { key: 'mnt', name: '정비요' }
  };

  export const Guaranty = {
    a: { key: 'a', name: '자가 보증' },
    b: { key: 'b', name: '보험사 보증' }
  };

  export const Check = {
    good: { key: 'good', name: '양호' },
    diff: { key: 'diff', name: '상이' },
    corrosion: { key: 'corrosion', name: '부식' },
    damage: { key: 'damage', name: '훼손(오손)' },
    change: { key: 'change', name: '변조(변타)' },
    painting: { key: 'painting', name: '도말' }
  };

  export const UsedStatus = {
    none: { key: 'none', name: '임시 저장' },
    review: { key: 'review', name: '심사중' },
    ready: { key: 'ready', name: '준비중' },
    bidding: { key: 'bidding', name: '경매중' },
    waiting: { key: 'waiting', name: '경매대기증' },
    request: { key: 'request', name: '판매요청중' },
    'review-first': { key: 'review-first', name: '1차검수중' },
    'review-second': { key: 'review-second', name: ' 2차검수중' },
    'in-market': { key: 'in-market', name: '마켓에 공개중' },
    trading: { key: 'trading', name: '트레이드 진행중' },
    booking: { key: 'booking', name: '판매 진행중' },
    winning: { key: 'winning', name: '낙찰 진행중' },
    complete: { key: 'complete', name: '판매완료' },
    'in-ad': { key: 'in-ad', name: '광고중' },
    'bid-hold': { key: 'bid-hold', name: '처리중' },
    'wait-hold': { key: 'wait-hold', name: '처리중' }
  };

  export const MachineStatus = {
    good: { key: 'good', name: '양호' },
    noise: { key: 'noise', name: '소음' },
    mnt: { key: 'mnt', name: '정비요' },
    bad: { key: 'bad', name: '불량' },
    none: { key: 'none', name: '없음' },
    little: { key: 'little', name: '미세누유' },
    leak: { key: 'leak', name: '누유' },
    optimal: { key: 'optimal', name: '적정' },
    short: { key: 'short', name: '부족' },
    polluted: { key: 'polluted', name: '오염' },
    chng: { key: 'chng', name: '교환요' },
    glut: { key: 'glut', name: '과다' },
    shocked: { key: 'shocked', name: '충격' },
    delay: { key: 'delay', name: '지연' },
    fallout: { key: 'fallout', name: '물림/빠짐' },
    disorder: { key: 'disorder', name: '이상' },
    damage: { key: 'damage', name: '고무부트손상' },
    gap: { key: 'gap', name: '유격' },
    exist: { key: 'exist', name: '있음' }
  };

  export const RepairStatus = {
    none: { key: 'none', name: '없음' },
    exchange: { key: 'exchange', name: '교환' },
    sheet: { key: 'sheet', name: '판금' },
    corrosion: { key: 'corrosion', name: '부식' }
  };

  export const CSStatus = {
    doing: { key: 'doing', name: '처리중' },
    done: { key: 'done', name: '완료' },
    cancel: { key: 'cancel', name: '취소' }
  };

  export const ServiceTypes = {
    publish: { key: 'publish', name: '발송' },
    fail: { key: 'fail', name: '실패' },
    stop: { key: 'stop', name: '중지' },
    finish: { key: 'finish', name: '완료' }
  };


  export const BasicOptions = {
    motor: {
      ops: { key: 'ops', name: '작동상태(공회전)' },
      oil: { key: 'oil', name: '오일유량 및 오염' },
      cylinderhead: { key: 'cylinderhead', name: '실린더헤드' },
      cylinderblock: { key: 'cylinderblock', name: '실린더블럭' },
      oil_status: { key: 'oil_status', name: '오일유량 및 오염' },
      cylinderblock2: { key: 'cylinderblock2', name: '실린더블럭' },
      gasket: { key: 'gasket', name: '실린더헤드/가스켓' },
      pump: { key: 'pump', name: '워터펌프' },
      cooler: { key: 'cooler', name: '냉각수쿨러(라디에이터)' },
      water_status: { key: 'water_status', name: '냉각수량 및 오염' },
      cmn_rail: { key: 'cmn_rail', name: '고압펌프(커먼레일)' }
    },
    trans: {
      at_oil_leak: { key: 'at_oil_leak', name: '오일누유' },
      at_oil_status: { key: 'at_oil_status', name: '오일유량 및 상태' },
      at_ops: { key: 'at_ops', name: '작동상태(공회전)' },
      mt_oil_leak: { key: 'mt_oil_leak', name: '오일누유' },
      mt_shift: { key: 'mt_shift', name: '기어변속장치' },
      mt_oil_status: { key: 'mt_oil_status', name: '오일유량 및 상태' },
      mt_ops: { key: 'mt_ops', name: '작동상태(공회전)' }
    },
    pts: {
      clutch: { key: 'clutch', name: '클러치 어셈블리' },
      joint: { key: 'joint', name: '등록죠인트' },
      shaft: { key: 'shaft', name: '추친축 및 베어링' },
    },
    steering: {
      oil_leak: { key: 'oil_leak', name: '동력조향 작동 오일 누유' },
      ops: { key: 'ops', name: '작동상태' },
      gear: { key: 'gear', name: '스티어링 기어' },
      pump: { key: 'pump', name: '스티어링 펌프' },
      tierodend: { key: 'tierodend', name: '타이로드엔드' }
    },
    brake: {
      oil_status: { key: 'oil_status', name: '브레이크 오일 유량상태' },
      oil_leak: { key: 'oil_leak', name: '브레이크 오일 누유' },
      booster: { key: 'booster', name: '배력장치 상태' },
    },
    electric: {
      output: { key: 'output', name: '발전기 출력' },
      starting: { key: 'starting', name: '시동 모터' },
      wiper: { key: 'wiper', name: '와이퍼 모터 기능' },
      fan: { key: 'fan', name: '실내송풍 모터' },
      radiator: { key: 'radiator', name: '라디에이터 팬 모터' }
    },
    misc: {
      fuel_leak: { key: 'fuel_leak', name: '연료 누출' },
      window_motor: { key: 'window_motor', name: '윈도우 모터 작동' }
    }
  };

  export const Options = {
    'HID': {
      'name': '제논 헤드 램프',
      'description': '기존 램프에 비해 적은 전력에도 더 밝고 좋은 가시성을 가지며, 자연광에 가까워 눈의 피로를 줄인 전면 램프',
      'file': 'opt_1_1',
      'category': 'exterior'
    },
    'PowerMirror': {
      'name': '전동 접이 사이드 미러',
      'description': '모터가 내장되어 버튼 조작으로 접고 펼 수 있는 사이드 미러',
      'file': 'opt_1_2',
      'category': 'exterior'
    },
    'Sunroof': {
      'name': '선루프',
      'description': '여름철 내부 공기를 빠르게 순환시켜 온도를 낮추거나, 겨울철 혼탁해진 실내를 환기시켜 주는 장치',
      'file': 'opt_1_3',
      'category': 'exterior'
    },
    'RoofRack': {
      'name': '루프랙',
      'description': '자전거, 스키용품 등과 같이 부피가 커서 트렁크나 내부에 실을 수 없는 짐을 차량의 지붕 위에 고정시켜 운반할 수 있는 장치',
      'file': 'opt_1_4',
      'category': 'exterior'
    },
    'AlloyWheel': {
      'name': '알루미늄휠',
      'description': '일반 스틸 휠보다 가벼워 연료소비가 적고, 주행 성능을 향상시키는 알루미늄 합금 재질로 만들어진 휠',
      'file': 'opt_1_5',
      'category': 'exterior'
    },
    'SteeringRemo': {
      'name': '스티어링 휠 리모컨',
      'description': '운전대에 장착된 버튼으로 오디오, 핸즈프리 등의 각종 장치를 편리하게 조작할 수 있는 시스템',
      'file': 'opt_2_1',
      'category': 'interior'
    },
    'PowerSteering': {
      'name': '파워 스티어링',
      'description': '유압, 공기압 등을 이용하여 핸들 조작을 쉽게 해주는 장치',
      'file': 'opt_2_2',
      'category': 'interior'
    },
    'ECM': {
      'name': 'ECM',
      'description': '룸미러에 들어오는 뒤쪽 차량의 빛을 자동으로 감지해 눈부심 현상을 없애주는 장치',
      'file': 'opt_2_3',
      'category': 'interior'
    },
    'LeatherSeat': {
      'name': '가죽 시트',
      'description': '직물시트에 비해 고급스럽고, 먼지를 빨아들이지 않아 청결 유지에 좋은 천연 혹은 인조가죽 재질의 시트 커버',
      'file': 'opt_2_4',
      'category': 'interior'
    },
    'PowerSeat_D': {
      'name': '전동 시트 운전석',
      'description': '전동 펌프에 의한 유압 또는 전기 모터를 이용해 위아래 또는 앞뒤로 조절할 수 있도록 설계된 운전자 좌석',
      'file': 'opt_2_5',
      'category': 'interior'
    },
    'PowerSeat_P': {
      'name': '전동 시트 동승석',
      'description': '전동 펌프에 의한 유압 또는 전기 모터를 이용해 위아래 또는 앞뒤로 조절할 수 있도록 설계된 동승자 좌석',
      'file': 'opt_2_6',
      'category': 'interior'
    },
    'HeatedSeat_F': {
      'name': '열선 시트 앞좌석',
      'description': '앞좌석의 시트 커버 속에 열선을 넣어 보온을 유지하는 형태로 추운 겨울을 대비한 난방용 시트',
      'file': 'opt_2_7',
      'category': 'interior'
    },
    'HeatedSeat_R': {
      'name': '열선 시트 뒷좌석',
      'description': '뒷좌석의 시트 커버속에 열선을 넣어 보온을 유지하는 형태로 추운 겨울을 대비한 난방용 시트',
      'file': 'opt_2_8',
      'category': 'interior'
    },
    'MemorySeat': {
      'name': '메모리 시트',
      'description': '전동시트에서 버튼을 누르면 미리 저장한 좌석의 위치와 각도 등을 복원해 주는 장치',
      'file': 'opt_2_9',
      'category': 'interior'
    },
    'SeatVentilation': {
      'name': '통풍시트',
      'description': '시트 내부에 장착된 팬으로 공기를 순환시켜 주는 시스템',
      'file': 'opt_2_10',
      'category': 'interior'
    },
    'Airbag_D': {
      'name': '에어백 운전석',
      'description': '차량 충돌 시 순간적으로 운전대에서 공기주머니가 부풀어 나와 운전자의 충격과 부상을 최소한으로 줄여주는 보호 장치',
      'file': 'opt_3_1',
      'category': 'safety'
    },
    'Airbag_P': {
      'name': '에어백 등승석',
      'description': '차량 충돌 시 순간적으로 대시보드에서 공기주머니가 부풀어 나와 동승자의 충격과 부상을 최소한으로 줄여주는 보호 장치',
      'file': 'opt_3_2',
      'category': 'safety'
    },
    'Airbag_S': {
      'name': '에어백 사이드',
      'description': '차량 충돌 시 순간적으로 운전석과 동승석의 측면에서 공기주머니가 부풀어 나와 탑승자의 충격과 부상을 최소한으로 줄여주는 보호 장치',
      'file': 'opt_3_3',
      'category': 'safety'
    },
    'Airbag_C': {
      'name': '커튼 에어백',
      'description': '차량 충돌 시 순간적으로 천장에서 공기주머니가 커튼처럼 옆쪽으로 부풀어 나와 탑승자의 머리, 목 부분을 보호 해주고 밖으로 튕겨 나가지 않도록 해주는 장치',
      'file': 'opt_3_4',
      'category': 'safety'
    },
    'ParkingSensor': {
      'name': '후방 감지센서',
      'description': '차량 주차 시 운전자의 후방 사각지대에 놓인 장애물을 알려주어 충돌을 예방해 주는 장치',
      'file': 'opt_3_5',
      'category': 'safety'
    },
    'BackupCamera': {
      'name': '후방 카메라',
      'description': '후방 주차 시 실내 모니터를 통해 뒤쪽의 장애물과 단계별 진도 등을 확인할 있도록 하는 장치',
      'file': 'opt_3_6',
      'category': 'safety'
    },
    'ABS': {
      'name': 'ABS',
      'description': '급제동 시 바퀴에 달린 센서가 각 바퀴의 잠김을 감지하여 자동차가 미끄러지는 현상을 방지하고, 제동거리를 짧게 만들어주는 브레이크 조절 시스템',
      'file': 'opt_3_7',
      'category': 'safety'
    },
    'TCS': {
      'name': '미끄럼 방지',
      'description': '눈길, 빗길 등 미끄러지기 쉬운 노면에서 차량을 출발하거나 가속할 때 과잉의 구동력이 발생하여 타이어가 공회전하지 않도록 차량의 구동력을 제어하는 시스템',
      'file': 'opt_3_8',
      'category': 'safety'
    },
    'ESP': {
      'name': '차체 자세 제어 컨트롤',
      'description': 'ABS와 미끄럼 방지 계통을 통합 제어. 차량이 좌우로 미끄러지는 것을 방지하는 시스템',
      'file': 'opt_3_9',
      'category': 'safety'
    },
    'ECS': {
      'name': '전자 제어 서스펜션',
      'description': '노면 상태와 운전 조건에 따라 차체 높이를 변화시켜, 주행 안전성과 승차감을 동시에 확보하기 위한 장치',
      'file': 'opt_3_10',
      'category': 'safety'
    },
    'TPMS': {
      'name': '타이어 공기압 감지',
      'description': '타이어에 부착된 자동감지센서를 통해, 타이어의 공기압과 온도 등의 정보를 제공하는 장치',
      'file': 'opt_3_11',
      'category': 'safety'
    },
    'PowerDoorLock': {
      'name': '파워 도어록',
      'description': '차량이 달리고 있을 때는 모든 도어가 자동적으로 잠겨서 열리지 않도록 제어하는 차량 안전장치',
      'file': 'opt_3_12',
      'category': 'safety'
    },
    'AutomaticAC': {
      'name': '자동 에어컨',
      'description': '실내 온도를 설정 온도에 가깝게 자동으로 조절하는 장치',
      'file': 'opt_4_1',
      'category': 'convenience'
    },
    'KeylessEntrySys': {
      'name': '무선 도어잠금장치',
      'description': '차량의 문을 열쇠로 열고 닫는 것이 아니라, 원거리에서 리모컨 버튼을 눌러 열고 닫을 수 있는 장치',
      'file': 'opt_4_2',
      'category': 'convenience'
    },
    'SmartKey': {
      'name': '스마트키',
      'description': '키를 몸에 지니는 것만으로도 잠금장치를 해제할 수 있고 시동까지 걸 수 있는 시스템',
      'file': 'opt_4_3',
      'category': 'convenience'
    },
    'PowerTrunk': {
      'name': '파워 트렁크',
      'description': '차량 내부의 버튼이나 무선 리모컨 장치를 이용해 트렁크 덮개를 쉽게 열거나 닫을 수 있는 전동식 장치',
      'file': 'opt_4_4',
      'category': 'convenience'
    },
    'PowerWindows': {
      'name': '파워 윈도우',
      'description': '스위치를 누르면 전기모터를 이용해 자동차 창문을 자동으로 올리거나 내릴 수 있게 해주는 편의장치',
      'file': 'opt_4_5',
      'category': 'convenience'
    },
    'CruiseControl': {
      'name': '크루즈 컨트롤',
      'description': '운전자가 희망하는 속도로 고정하면 가속 페달을 밟지 않아도 그 속도를 유지하면서 주행하는 장치',
      'file': 'opt_4_6',
      'category': 'convenience'
    },
    'Navigation': {
      'name': '네비게이션',
      'description': '목적지까지의 거리 및 소요시간을 확인하고, 길을 안내하는 시스템',
      'file': 'opt_4_7',
      'category': 'convenience'
    },
    'HandsFree': {
      'name': '핸즈프리',
      'description': '휴대전화를 차량에 유무선으로 연결하면 휴대전화를 손으로 들지 않고도 차량 내부에 장착된 스피커와 마이크로 통화할 수 있는 편의장치',
      'file': 'opt_4_8',
      'category': 'convenience'
    },
    'Hipass': {
      'name': '하이패스',
      'description': '유료 도로 진/출입시 정차없이 통행료를 자동으로 결제해주는 장치',
      'file': 'opt_4_9',
      'category': 'convenience'
    },
    'CDplayer': {
      'name': 'CD 플레이어',
      'description': '오디오 CD 재생 장치',
      'file': 'opt_5_1',
      'category': 'multimedia'
    },
    'AVsystem': {
      'name': 'AV 시스템',
      'description': '차량 내부에서 액정 모니터를 통하여 TV, DVD, 음악 CD 등을 감상할 수 있는 시스템',
      'file': 'opt_5_2',
      'category': 'multimedia'
    },
    'RearSeatMonitor': {
      'name': '뒷좌석 TV',
      'description': '뒷좌석의 동승자를 위한 편의 장치',
      'file': 'opt_5_3',
      'category': 'multimedia'
    },
    'AUXport': {
      'name': 'AUX 단자',
      'description': '휴대용 음악 장비를 차량의 스피커를 통해 재생할 수 있게 하는 아날로그 연결 단자',
      'file': 'opt_5_4',
      'category': 'multimedia'
    },
    'USBport': {
      'name': 'USB 포트',
      'description': '휴대용 음악 장비를 차량의 스피커를 통해 재생할 수 있게 하는 디지털 연결 단자',
      'file': 'opt_5_5',
      'category': 'multimedia'
    }
  };
}