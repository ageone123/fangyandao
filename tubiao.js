document.addEventListener('DOMContentLoaded', function () {
    (function () {
        window.pieChart = echarts.init(document.querySelector(".right-box .line .chart"));
        var option = {
            title: {
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 77, name: '天津方言岛' },
                        { value: 61, name: '杭州方言岛' },
                        { value: 52, name: '新疆杨柳青方言岛' },
                    ].sort(function (a, b) {
                        return a.value - b.value;
                    }),
                    roseType: 'radius',
                    label: {
                        color: 'rgba(0, 0, 0, 0.8)',
                        // 使用富文本格式化
                        formatter: function (params) {
                            return [
                                // 名称部分（保持原大小）
                                `{name|${params.name}}`,
                                // 百分数部分（放大）
                                `{percent|${params.value}%}`
                            ].join('\n'); // 换行显示
                        },
                        rich: {
                            name: {
                                fontSize: 14,  // 名称字体大小
                                color: '#333',
                                padding: [0, 0, 5, 0] // 调整名称和百分数间距
                            },
                            percent: {
                                fontSize: 30,  // 百分数字体大小
                                color: '#804595',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        lineStyle: {
                            color: 'rgba(0, 0,0, 0.8)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    },
                    itemStyle: {
                        color: '#9c539c',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };
        window.pieChart.setOption(option); // 改为使用全局变量
        window.addEventListener("resize", function () {
            window.pieChart.resize(); // 改为使用全局变量
        });
    }
    )();
});
document.addEventListener('DOMContentLoaded', function () {
    // 初始化地图  
    window.mapChart = echarts.init(document.querySelector('.chart-container .left-box .map'));
    var data = [
        { name: '河北', value: 34 },
        { name: '山西', value: 20 },
        { name: '辽宁', value: 16 },
        { name: '吉林', value: 16 },
        { name: '黑龙江', value: 18 },
        { name: '江苏', value: 18 },
        { name: '浙江', value: 25 },
        { name: '安徽', value: 30 },
        { name: '福建', value: 52 },
        { name: '江西', value: 27 },
        { name: '山东', value: 28 },
        { name: '河南', value: 13 },
        { name: '湖北', value: 15 },
        { name: '湖南', value: 25 },
        { name: '广东', value: 55 },
        { name: '海南', value: 20 },
        { name: '四川', value: 35 },
        { name: '贵州', value: 22 },
        { name: '云南', value: 30 },
        { name: '陕西', value: 13 },
        { name: '甘肃', value: 9 },
        { name: '青海', value: 10 },
        { name: '台湾', value: 17 },
        { name: '内蒙古', value: 15 },
        { name: '广西', value: 25 },
        { name: '西藏', value: 7 },
        { name: '宁夏', value: 9 },
        { name: '新疆', value: 24 },
        { name: '北京', value: 4 },
        { name: '天津', value: 5 },
        { name: '上海', value: 7 },
        { name: '重庆', value: 6 },
        { name: '香港', value: 5 },
        { name: '澳门', value: 3 },
        // 更多省份的数据...  
    ];

    // 配置项  
    var option = {
        title: {
            text: '中国各个省近30年方言岛数量分布图',
            left: 'center',
            textStyle: {
                fontSize: 16, // 设置标题字体大小  
                color: '#333'  // 可选：设置标题颜色  
            }
        },
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            min: 0,
            max: 100,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: true,
            inRange: {
                color: ['#c1adff', '#784390'] // 修改颜色范围的渐变色  
            }
        },
        series: [
            {
                name: '方言岛数量',
                type: 'map',
                mapType: 'china',
                label: {
                    show: true,             // 显示省份名称  
                    formatter: function (params) {
                        return `{name|${params.name}}\n{value|${params.value}}`;
                    },
                    rich: {
                        name: {
                            fontSize: 9,  // 省份名称字体大小
                            color: '#333'
                        },
                        value: {
                            fontSize: 18, // 数量字体大小
                            fontWeight: 'bold',
                            color: '#333'
                        }
                    },
                },
                data: data,  // 这里可以添加你的数据  
                zoom: 1.24,  // 放大倍数  
                scaleLimit: {
                    min: 1,  // 最小缩放比例  
                    max: 3   // 最大缩放比例  
                },
                itemStyle: {
                    emphasis: {
                        areaColor: '#f5e7ef', // 悬浮时区域的颜色  
                        borderColor: '#fff',  // 悬浮时边框颜色  
                        borderWidth: 0.8      // 悬浮时边框宽度  
                    }
                }
            }
        ]
    };

    window.mapChart.setOption(option); // 改为使用全局变量
    window.addEventListener("resize", function () {
        window.mapChart.resize(); // 改为使用全局变量
    });
});  
