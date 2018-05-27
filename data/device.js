"use strict";
exports.__esModule = true;
var Device;
(function (Device) {
    Device.Part = {
        "hood": {
            "file": "cl_2d_1",
            "3d_base_file": "cl_3d_base_1",
            "3d_part_file": "cl_3d_1",
            "left": 16,
            "top": 8,
            "right": 134,
            "bottom": 94,
            "touch_left": 16,
            "touch_top": 8,
            "touch_right": 134,
            "touch_bottom": 94,
            "name": "후드",
            "desc": "차체앞 엔진실을 덮고 있는 패널",
            "accident": 0
        },
        "front_fender_left": {
            "file": "cl_2d_2",
            "3d_base_file": "cl_3d_base_1",
            "3d_part_file": "cl_3d_2",
            "left": 31,
            "top": 0,
            "right": 81,
            "bottom": 94,
            "touch_left": 32,
            "touch_top": 5,
            "touch_right": 80,
            "touch_bottom": 91,
            "name": "펜더",
            "desc": "전면부 왼쪽 타이어를 덮고 있는 부분",
            "accident": 0
        },
        "front_fender_right": {
            "file": "cl_2d_3",
            "3d_base_file": "cl_3d_base_2",
            "3d_part_file": "cl_3d_3",
            "left": 199,
            "top": 0,
            "right": 249,
            "bottom": 95,
            "touch_left": 200,
            "touch_top": 5,
            "touch_right": 248,
            "touch_bottom": 91,
            "name": "펜더",
            "desc": "전면부 오른쪽 타이어를 덮고 있는 부분",
            "accident": 0
        },
        "front_door_left": {
            "file": "cl_2d_4",
            "3d_base_file": "cl_3d_base_1",
            "3d_part_file": "cl_3d_4",
            "left": 31,
            "top": 94,
            "right": 84,
            "bottom": 163,
            "touch_left": 32,
            "touch_top": 95,
            "touch_right": 80,
            "touch_bottom": 162,
            "name": "도어",
            "desc": "운전석 문",
            "accident": 0
        },
        "front_door_right": {
            "file": "cl_2d_5",
            "3d_base_file": "cl_3d_base_2",
            "3d_part_file": "cl_3d_5",
            "left": 196,
            "top": 94,
            "right": 249,
            "bottom": 163,
            "touch_left": 200,
            "touch_top": 95,
            "touch_right": 248,
            "touch_bottom": 162,
            "name": "도어",
            "desc": "조수석 문",
            "accident": 0
        },
        "rear_door_left": {
            "file": "cl_2d_6",
            "3d_base_file": "cl_3d_base_1",
            "3d_part_file": "cl_3d_6",
            "left": 31,
            "top": 162,
            "right": 84,
            "bottom": 223,
            "touch_left": 32,
            "touch_top": 163,
            "touch_right": 80,
            "touch_bottom": 222,
            "name": "도어",
            "desc": "뒷좌석 왼쪽 문",
            "accident": 0
        },
        "rear_door_right": {
            "file": "cl_2d_7",
            "3d_base_file": "cl_3d_base_2",
            "3d_part_file": "cl_3d_7",
            "left": 196,
            "top": 162,
            "right": 249,
            "bottom": 223,
            "touch_left": 200,
            "touch_top": 163,
            "touch_right": 248,
            "touch_bottom": 222,
            "name": "도어",
            "desc": "뒷좌석 오른쪽 문",
            "accident": 0
        },
        "trunk_lid": {
            "file": "cl_2d_8",
            "3d_base_file": "cl_3d_base_2",
            "3d_part_file": "cl_3d_8",
            "left": 16,
            "top": 230,
            "right": 134,
            "bottom": 294,
            "touch_left": 16,
            "touch_top": 230,
            "touch_right": 134,
            "touch_bottom": 294,
            "name": "트렁크리드",
            "desc": "트렁크 룸을 여닫는 덮개",
            "accident": 0
        },
        "radiator_support": {
            "file": "cl_2d_9",
            "3d_base_file": "cl_3d_base_3",
            "3d_part_file": "cl_3d_9",
            "left": 189,
            "top": 4,
            "right": 221,
            "bottom": 18,
            "touch_left": 189,
            "touch_top": 4,
            "touch_right": 221,
            "touch_bottom": 18,
            "name": "라디에이터서포트",
            "desc": "라디에이터를 지지하는 패널",
            "accident": 0
        },
        "roof_panel": {
            "file": "cl_2d_10",
            "3d_base_file": "cl_3d_base_1",
            "3d_part_file": "cl_3d_10",
            "left": 25,
            "top": 114,
            "right": 125,
            "bottom": 214,
            "touch_left": 25,
            "touch_top": 114,
            "touch_right": 125,
            "touch_bottom": 214,
            "name": "루프패널",
            "desc": "자동차의 윗부분에 씌우는 덮개",
            "accident": 1
        },
        "quarter_panel_left": {
            "file": "cl_2d_11",
            "3d_base_file": "cl_3d_base_1",
            "3d_part_file": "cl_3d_11",
            "left": 32,
            "top": 222,
            "right": 85,
            "bottom": 300,
            "touch_left": 32,
            "touch_top": 223,
            "touch_right": 80,
            "touch_bottom": 299,
            "name": "쿼터패널",
            "desc": "왼편 뒤 타이어 상단 패널",
            "accident": 1
        },
        "quarter_panel_right": {
            "file": "cl_2d_12",
            "3d_base_file": "cl_3d_base_2",
            "3d_part_file": "cl_3d_12",
            "left": 195,
            "top": 222,
            "right": 248,
            "bottom": 300,
            "touch_left": 200,
            "touch_top": 223,
            "touch_right": 248,
            "touch_bottom": 299,
            "name": "쿼터패널",
            "desc": "오른편 뒤 타이어 상단 패널",
            "accident": 1
        },
        "side_sill_panel_left": {
            "file": "cl_2d_13",
            "3d_base_file": "cl_3d_base_1",
            "3d_part_file": "cl_3d_13",
            "left": 15,
            "top": 85,
            "right": 31,
            "bottom": 215,
            "touch_left": 32,
            "touch_top": 223,
            "touch_right": 80,
            "touch_bottom": 299,
            "name": "사이드실패널",
            "desc": "차량 왼쪽 하단부의 프레임을 대신하는 패널",
            "accident": 1
        },
        "side_sill_panel_right": {
            "file": "cl_2d_14",
            "3d_base_file": "cl_3d_base_2",
            "3d_part_file": "cl_3d_14",
            "left": 249,
            "top": 85,
            "right": 265,
            "bottom": 115,
            "touch_left": 200,
            "touch_top": 223,
            "touch_right": 248,
            "touch_bottom": 299,
            "name": "사이드실패널",
            "desc": "차량 오른쪽 하단부의 프레임을 대신하는 패널",
            "accident": 1
        },
        "front_panel": {
            "file": "cl_2d_15",
            "3d_base_file": "cl_3d_base_3",
            "3d_part_file": "cl_3d_15",
            "left": 160,
            "top": 24,
            "right": 250,
            "bottom": 38,
            "touch_left": 160,
            "touch_top": 24,
            "touch_right": 250,
            "touch_bottom": 38,
            "name": "프런트패널",
            "desc": "라이트, 그릴 등이 부착되는 패널",
            "accident": 1
        },
        "cross_member": {
            "file": "cl_2d_16",
            "3d_base_file": "cl_3d_base_4",
            "3d_part_file": "cl_3d_16",
            "left": 160,
            "top": 106,
            "right": 250,
            "bottom": 120,
            "touch_left": 160,
            "touch_top": 106,
            "touch_right": 250,
            "touch_bottom": 120,
            "name": "크로스멤버",
            "desc": "차체의 뒤틀림과 구부러짐을 막는 프레임",
            "accident": 1
        },
        "inside_panel_left": {
            "file": "cl_2d_17",
            "3d_base_file": "cl_3d_base_5",
            "3d_part_file": "cl_3d_17",
            "left": 152,
            "top": 44,
            "right": 170,
            "bottom": 69,
            "touch_left": 152,
            "touch_top": 44,
            "touch_right": 170,
            "touch_bottom": 69,
            "name": "인사이드패널",
            "desc": "왼쪽 펜더와 맞닿는 패널",
            "accident": 1
        },
        "inside_panel_right": {
            "file": "cl_2d_18",
            "3d_base_file": "cl_3d_base_5",
            "3d_part_file": "cl_3d_18",
            "left": 240,
            "top": 44,
            "right": 258,
            "bottom": 69,
            "touch_left": 240,
            "touch_top": 44,
            "touch_right": 258,
            "touch_bottom": 69,
            "name": "인사이드패널",
            "desc": "오른쪽 펜더와 맞닿는 패널",
            "accident": 1
        },
        "front_side_member_left": {
            "file": "cl_2d_19",
            "3d_base_file": "cl_3d_base_4",
            "3d_part_file": "cl_3d_19",
            "left": 175,
            "top": 44,
            "right": 193,
            "bottom": 100,
            "touch_left": 175,
            "touch_top": 44,
            "touch_right": 193,
            "touch_bottom": 100,
            "name": "사이드멤버",
            "desc": "차체의 뒤틀림과 구부러짐을 막는 앞, 왼쪽 프레임",
            "accident": 1
        },
        "front_side_member_right": {
            "file": "cl_2d_20",
            "3d_base_file": "cl_3d_base_4",
            "3d_part_file": "cl_3d_20",
            "left": 217,
            "top": 44,
            "right": 235,
            "bottom": 100,
            "touch_left": 217,
            "touch_top": 44,
            "touch_right": 235,
            "touch_bottom": 100,
            "name": "사이드멤버",
            "desc": "차체의 뒤틀림과 구부러짐을 막는 앞, 오른쪽 프레임",
            "accident": 1
        },
        "rear_side_member_left": {
            "file": "cl_2d_21",
            "3d_base_file": "cl_3d_base_6",
            "3d_part_file": "cl_3d_21",
            "left": 175,
            "top": 224,
            "right": 193,
            "bottom": 265,
            "touch_left": 175,
            "touch_top": 224,
            "touch_right": 193,
            "touch_bottom": 265,
            "name": "사이드멤버",
            "desc": "차체의 뒤틀림과 구부러짐을 막는 뒤, 왼쪽 프레임",
            "accident": 1
        },
        "rear_side_member_right": {
            "file": "cl_2d_22",
            "3d_base_file": "cl_3d_base_6",
            "3d_part_file": "cl_3d_22",
            "left": 217,
            "top": 224,
            "right": 235,
            "bottom": 265,
            "touch_left": 217,
            "touch_top": 224,
            "touch_right": 235,
            "touch_bottom": 265,
            "name": "사이드멤버",
            "desc": "차체의 뒤틀림과 구부러짐을 막는 뒤, 오른쪽 프레임",
            "accident": 1
        },
        "front_wheel_house_left": {
            "file": "cl_2d_23",
            "3d_base_file": "cl_3d_base_7",
            "3d_part_file": "cl_3d_23",
            "left": 152,
            "top": 75,
            "right": 170,
            "bottom": 100,
            "touch_left": 152,
            "touch_top": 75,
            "touch_right": 170,
            "touch_bottom": 100,
            "name": "휠하우스",
            "desc": "앞, 왼쪽 바퀴를 덮고 있는 이너 보디 하우징",
            "accident": 1
        },
        "front_wheel_house_right": {
            "file": "cl_2d_24",
            "3d_base_file": "cl_3d_base_7",
            "3d_part_file": "cl_3d_24",
            "left": 240,
            "top": 75,
            "right": 258,
            "bottom": 100,
            "touch_left": 240,
            "touch_top": 75,
            "touch_right": 258,
            "touch_bottom": 100,
            "name": "휠하우스",
            "desc": "앞, 오른쪽 바퀴를 덮고 있는 이너 보디 하우징",
            "accident": 1
        },
        "rear_wheel_house_left": {
            "file": "cl_2d_25",
            "3d_base_file": "cl_3d_base_8",
            "3d_part_file": "cl_3d_25",
            "left": 152,
            "top": 240,
            "right": 170,
            "bottom": 265,
            "touch_left": 152,
            "touch_top": 240,
            "touch_right": 170,
            "touch_bottom": 265,
            "name": "휠하우스",
            "desc": "뒤, 왼쪽 바퀴를 덮고 있는 이너 보디 하우징",
            "accident": 1
        },
        "rear_wheel_house_right": {
            "file": "cl_2d_26",
            "3d_base_file": "cl_3d_base_6",
            "3d_part_file": "cl_3d_26",
            "left": 240,
            "top": 240,
            "right": 258,
            "bottom": 265,
            "touch_left": 240,
            "touch_top": 240,
            "touch_right": 258,
            "touch_bottom": 265,
            "name": "휠하우스",
            "desc": "뒤, 오른쪽 바퀴를 덮고 있는 이너 보디 하우징",
            "accident": 1
        },
        "front_dash_panel": {
            "file": "cl_2d_27",
            "3d_base_file": "cl_3d_base_5",
            "3d_part_file": "cl_3d_27",
            "left": 160,
            "top": 126,
            "right": 250,
            "bottom": 140,
            "touch_left": 160,
            "touch_top": 126,
            "touch_right": 250,
            "touch_bottom": 140,
            "name": "프런트대시패널",
            "desc": "실내와 엔진룸을 격리하는 패널",
            "accident": 1
        },
        "rear_dash_panel": {
            "file": "cl_2d_28",
            "3d_base_file": "cl_3d_base_6",
            "3d_part_file": "cl_3d_28",
            "left": 160,
            "top": 203,
            "right": 250,
            "bottom": 217,
            "touch_left": 160,
            "touch_top": 203,
            "touch_right": 250,
            "touch_bottom": 217,
            "name": "패키지트레이",
            "desc": "실내와 뒷트렁크을 격리하는 패널",
            "accident": 1
        },
        "floor_panel": {
            "file": "cl_2d_29",
            "3d_base_file": "cl_3d_base_9",
            "3d_part_file": "cl_3d_29",
            "left": 176,
            "top": 146,
            "right": 234,
            "bottom": 198,
            "touch_left": 176,
            "touch_top": 146,
            "touch_right": 234,
            "touch_bottom": 198,
            "name": "플로어패널",
            "desc": "차실 바닥 부분의 패널",
            "accident": 1
        },
        "pillar_left": {
            "file": "cl_2d_30",
            "3d_base_file": "cl_3d_base_10",
            "3d_part_file": "cl_3d_30",
            "left": 80,
            "top": 80,
            "right": 118,
            "bottom": 254,
            "touch_left": 82,
            "touch_top": 80,
            "touch_right": 118,
            "touch_bottom": 244,
            "name": "필러",
            "desc": "자동차의 지붕과 하부를 연결하는 운전석쪽 기둥",
            "accident": 1
        },
        "pillar_right": {
            "file": "cl_2d_31",
            "3d_base_file": "cl_3d_base_11",
            "3d_part_file": "cl_3d_31",
            "left": 162,
            "top": 80,
            "right": 200,
            "bottom": 254,
            "touch_left": 162,
            "touch_top": 80,
            "touch_right": 198,
            "touch_bottom": 244,
            "name": "필러",
            "desc": "자동차의 지붕과 하부를 연결하는 조수석쪽 기둥",
            "accident": 1
        },
        "rear_panel": {
            "file": "cl_2d_32",
            "3d_base_file": "cl_3d_base_6",
            "3d_part_file": "cl_3d_32",
            "left": 160,
            "top": 271,
            "right": 250,
            "bottom": 285,
            "touch_left": 160,
            "touch_top": 271,
            "touch_right": 250,
            "touch_bottom": 285,
            "name": "리어패널",
            "desc": "뒷범퍼 안쪽에 위치한 패널",
            "accident": 1
        },
        "trunk_floor": {
            "file": "cl_2d_33",
            "3d_base_file": "cl_3d_base_6",
            "3d_part_file": "cl_3d_33",
            "left": 196,
            "top": 224,
            "right": 214,
            "bottom": 265,
            "touch_left": 196,
            "touch_top": 224,
            "touch_right": 214,
            "touch_bottom": 265,
            "name": "트렁크플로어",
            "desc": "트렁크룸 바닥 부분의 패널",
            "accident": 1
        }
    };
})(Device = exports.Device || (exports.Device = {}));