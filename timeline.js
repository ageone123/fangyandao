window.onload = function () {
    const years = [1995, 2000, 2005, 2010, 2015, 2020, 2025];
    const timelineLine = document.getElementById('timeline-line');
    const timelineInner = timelineLine.parentElement;
    const lineWidth = timelineLine.offsetWidth;
    const numYears = years.length;
    const spacingFactor = 1.02;
    const offset = 100;

    for (let i = 0; i < numYears; i++) {
        const point = document.createElement('div');
        point.classList.add('timeline-point');
        const leftOffset = (i / (numYears - 1)) * lineWidth * spacingFactor + offset;
        point.style.left = `${leftOffset - 12}px`;

        const yearElement = document.createElement('div');
        yearElement.classList.add('timeline-year');
        yearElement.textContent = years[i];
        yearElement.style.left = `${leftOffset}px`;

        timelineInner.appendChild(point);
        timelineInner.appendChild(yearElement);

        // 使用闭包确保i的值正确传递
        (function (index) {
            point.addEventListener('click', function () {
                const selectedYear = years[index];
                updateData(selectedYear);
                console.log('Clicked year:', selectedYear);
            });
        })(i);
    }

    // 模拟不同年份的数据，结构与tubiao.js中图表数据结构匹配
    const dataByYear = {
        1995: {
            mapData: [
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
                { name: '澳门', value: 3 }
            ],
            barChartData: {
                labels: ['官话', '吴语', '闽语', '客家', '粤语', '少数民族岛', '混合型'],
                datasets: [{
                    label: '1995 Data',
                    data: [40, 15, 30, 22, 12, 10, 20],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            pieChartData: {
                data: [
                    { value: 77, name: '天津方言岛' },
                    { value: 61, name: '杭州方言岛' },
                    { value: 52, name: '新疆杨柳青方言岛' }
                ].sort(function (a, b) {
                    return a.value - b.value;
                })
            }
        },
        2000: {
            mapData: [
                { name: '河北', value: 28 },
                { name: '山西', value: 18 },
                { name: '辽宁', value: 14 },
                { name: '吉林', value: 14 },
                { name: '黑龙江', value: 15 },
                { name: '江苏', value: 15 },
                { name: '浙江', value: 20 },
                { name: '安徽', value: 25 },
                { name: '福建', value: 43 },
                { name: '江西', value: 25 },
                { name: '山东', value: 25 },
                { name: '河南', value: 11 },
                { name: '湖北', value: 10 },
                { name: '湖南', value: 20 },
                { name: '广东', value: 50 },
                { name: '海南', value: 15 },
                { name: '四川', value: 30 },
                { name: '贵州', value: 18 },
                { name: '云南', value: 25 },
                { name: '陕西', value: 12 },
                { name: '甘肃', value: 8 },
                { name: '青海', value: 8 },
                { name: '台湾', value: 15 },
                { name: '内蒙古', value: 12 },
                { name: '广西', value: 20 },
                { name: '西藏', value: 5 },
                { name: '宁夏', value: 8 },
                { name: '新疆', value: 20 },
                { name: '北京', value: 3 },
                { name: '天津', value: 3 },
                { name: '上海', value: 5 },
                { name: '重庆', value: 5 },
                { name: '香港', value: 4 },
                { name: '澳门', value: 2 },
            ],
            barChartData: {
                labels: ['官话', '吴语', '闽语', '客家', '粤语', '少数民族岛', '混合型'],
                datasets: [{
                    label: '2000 Data',
                    data: [35, 12, 25, 18, 10, 8, 15],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            pieChartData: {
                data: [
                    { value: 67, name: '天津方言岛' },
                    { value: 53, name: '杭州方言岛' },
                    { value: 43, name: '新疆杨柳青方言岛' }
                ].sort(function (a, b) {
                    return a.value - b.value;
                })
            }
        },
        2005: {
            mapData: [
                { name: '河北', value: 20 },
                { name: '山西', value: 16 },
                { name: '辽宁', value: 10 },
                { name: '吉林', value: 11 },
                { name: '黑龙江', value: 11 },
                { name: '江苏', value: 12 },
                { name: '浙江', value: 18 },
                { name: '安徽', value: 20 },
                { name: '福建', value: 30 },
                { name: '江西', value: 20 },
                { name: '山东', value: 18 },
                { name: '河南', value: 8 },
                { name: '湖北', value: 8 },
                { name: '湖南', value: 18 },
                { name: '广东', value: 45 },
                { name: '海南', value: 12 },
                { name: '四川', value: 25 },
                { name: '贵州', value: 15 },
                { name: '云南', value: 22 },
                { name: '陕西', value: 10 },
                { name: '甘肃', value: 6 },
                { name: '青海', value: 6 },
                { name: '台湾', value: 12 },
                { name: '内蒙古', value: 10 },
                { name: '广西', value: 18 },
                { name: '西藏', value: 4 },
                { name: '宁夏', value: 6 },
                { name: '新疆', value: 15 },
                { name: '北京', value: 2 },
                { name: '天津', value: 2 },
                { name: '上海', value: 4 },
                { name: '重庆', value: 4 },
                { name: '香港', value: 3 },
                { name: '澳门', value: 1 },
            ],
            barChartData: {
                labels: ['官话', '吴语', '闽语', '客家', '粤语', '少数民族岛', '混合型'],
                datasets: [{
                    label: '2000 Data',
                    data: [28, 10, 20, 15, 8, 7, 12],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            pieChartData: {
                data: [
                    { value: 53, name: '天津方言岛' },
                    { value: 43, name: '杭州方言岛' },
                    { value: 33, name: '新疆杨柳青方言岛' }
                ].sort(function (a, b) {
                    return a.value - b.value;
                })
            }
        },
        2010: {
            mapData: [
                { name: '河北', value: 17 },
                { name: '山西', value: 13 },
                { name: '辽宁', value: 7 },
                { name: '吉林', value: 8 },
                { name: '黑龙江', value: 9 },
                { name: '江苏', value: 8 },
                { name: '浙江', value: 12 },
                { name: '安徽', value: 15 },
                { name: '福建', value: 25 },
                { name: '江西', value: 18 },
                { name: '山东', value: 15 },
                { name: '河南', value: 6 },
                { name: '湖北', value: 6 },
                { name: '湖南', value: 12 },
                { name: '广东', value: 35 },
                { name: '海南', value: 10 },
                { name: '四川', value: 18 },
                { name: '贵州', value: 12 },
                { name: '云南', value: 16 },
                { name: '陕西', value: 8 },
                { name: '甘肃', value: 4 },
                { name: '青海', value: 4 },
                { name: '台湾', value: 10 },
                { name: '内蒙古', value: 8 },
                { name: '广西', value: 15 },
                { name: '西藏', value: 3 },
                { name: '宁夏', value: 4 },
                { name: '新疆', value: 10 },
                { name: '北京', value: 1 },
                { name: '天津', value: 2 },
                { name: '上海', value: 3 },
                { name: '重庆', value: 3 },
                { name: '香港', value: 2 },
                { name: '澳门', value: 1 },
            ],
            barChartData: {
                labels: ['官话', '吴语', '闽语', '客家', '粤语', '少数民族岛', '混合型'],
                datasets: [{
                    label: '2000 Data',
                    data: [20, 8, 15, 12, 6, 5, 9],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            pieChartData: {
                data: [
                    { value: 42, name: '天津方言岛' },
                    { value: 32, name: '杭州方言岛' },
                    { value: 23, name: '新疆杨柳青方言岛' }
                ].sort(function (a, b) {
                    return a.value - b.value;
                })
            }
        },
        2015: {
            mapData: [
                { name: '河北', value: 15 },
                { name: '山西', value: 9 },
                { name: '辽宁', value: 5 },
                { name: '吉林', value: 6 },
                { name: '黑龙江', value: 6 },
                { name: '江苏', value: 6 },
                { name: '浙江', value: 8 },
                { name: '安徽', value: 10 },
                { name: '福建', value: 20 },
                { name: '江西', value: 15 },
                { name: '山东', value: 12 },
                { name: '河南', value: 4 },
                { name: '湖北', value: 4 },
                { name: '湖南', value: 8 },
                { name: '广东', value: 30 },
                { name: '海南', value: 8 },
                { name: '四川', value: 15 },
                { name: '贵州', value: 8 },
                { name: '云南', value: 10 },
                { name: '陕西', value: 5 },
                { name: '甘肃', value: 3 },
                { name: '青海', value: 3 },
                { name: '台湾', value: 8 },
                { name: '内蒙古', value: 5 },
                { name: '广西', value: 10 },
                { name: '西藏', value: 2 },
                { name: '宁夏', value: 2 },
                { name: '新疆', value: 7 },
                { name: '北京', value: 1 },
                { name: '天津', value: 1 },
                { name: '上海', value: 2 },
                { name: '重庆', value: 2 },
                { name: '香港', value: 2 },
                { name: '澳门', value: 1 },
            ],
            barChartData: {
                labels: ['官话', '吴语', '闽语', '客家', '粤语', '少数民族岛', '混合型'],
                datasets: [{
                    label: '2000 Data',
                    data: [15, 6, 10, 8, 4, 3, 6],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            pieChartData: {
                data: [
                    { value: 33, name: '天津方言岛' },
                    { value: 28, name: '杭州方言岛' },
                    { value: 18, name: '新疆杨柳青方言岛' }
                ].sort(function (a, b) {
                    return a.value - b.value;
                })
            }
        },
        2020: {
            mapData: [
                { name: '河北', value: 10 },
                { name: '山西', value: 6 },
                { name: '辽宁', value: 4 },
                { name: '吉林', value: 4 },
                { name: '黑龙江', value: 4 },
                { name: '江苏', value: 4 },
                { name: '浙江', value: 5 },
                { name: '安徽', value: 6 },
                { name: '福建', value: 15 },
                { name: '江西', value: 12 },
                { name: '山东', value: 8 },
                { name: '河南', value: 2 },
                { name: '湖北', value: 3 },
                { name: '湖南', value: 5 },
                { name: '广东', value: 28 },
                { name: '海南', value: 6 },
                { name: '四川', value: 10 },
                { name: '贵州', value: 5 },
                { name: '云南', value: 7 },
                { name: '陕西', value: 3 },
                { name: '甘肃', value: 2 },
                { name: '青海', value: 2 },
                { name: '台湾', value: 6 },
                { name: '内蒙古', value: 3 },
                { name: '广西', value: 7 },
                { name: '西藏', value: 1 },
                { name: '宁夏', value: 1 },
                { name: '新疆', value: 5 },
                { name: '北京', value: 1 },
                { name: '天津', value: 1 },
                { name: '上海', value: 1 },
                { name: '重庆', value: 2 },
                { name: '香港', value: 1 },
                { name: '澳门', value: 0 },
            ],
            barChartData: {
                labels: ['官话', '吴语', '闽语', '客家', '粤语', '少数民族岛', '混合型'],
                datasets: [{
                    label: '2000 Data',
                    data: [10, 4, 7, 5, 2, 2, 3],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            pieChartData: {
                data: [
                    { value: 24, name: '天津方言岛' },
                    { value: 16, name: '杭州方言岛' },
                    { value: 12, name: '新疆杨柳青方言岛' }
                ].sort(function (a, b) {
                    return a.value - b.value;
                })
            }
        },
        2025: {
            mapData: [
                { name: '河北', value: 8 },
                { name: '山西', value: 3 },
                { name: '辽宁', value: 2 },
                { name: '吉林', value: 3 },
                { name: '黑龙江', value: 2 },
                { name: '江苏', value: 2 },
                { name: '浙江', value: 3 },
                { name: '安徽', value: 3 },
                { name: '福建', value: 12 },
                { name: '江西', value: 10 },
                { name: '山东', value: 5 },
                { name: '河南', value: 1 },
                { name: '湖北', value: 2 },
                { name: '湖南', value: 3 },
                { name: '广东', value: 30 },
                { name: '海南', value: 5 },
                { name: '四川', value: 5 },
                { name: '贵州', value: 3 },
                { name: '云南', value: 4 },
                { name: '陕西', value: 1 },
                { name: '甘肃', value: 2 },
                { name: '青海', value: 1 },
                { name: '台湾', value: 5 },
                { name: '内蒙古', value: 1 },
                { name: '广西', value: 5 },
                { name: '西藏', value: 0 },
                { name: '宁夏', value: 0 },
                { name: '新疆', value: 3 },
                { name: '北京', value: 1 },
                { name: '天津', value: 1 },
                { name: '上海', value: 1 },
                { name: '重庆', value: 1 },
                { name: '香港', value: 1 },
                { name: '澳门', value: 0 },
            ],
            barChartData: {
                labels: ['官话', '吴语', '闽语', '客家', '粤语', '少数民族岛', '混合型'],
                datasets: [{
                    label: '2000 Data',
                    data: [5, 2, 4, 3, 1, 0, 1],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            pieChartData: {
                data: [
                    { value: 16, name: '天津方言岛' },
                    { value: 11, name: '杭州方言岛' },
                    { value: 7, name: '新疆杨柳青方言岛' }
                ].sort(function (a, b) {
                    return a.value - b.value;
                })
            }
        },
        // 可以继续添加其他年份的数据
    };

    function updateData(year) {
        const yearData = dataByYear[year];
        if (!yearData) return;

        // 更新地图
        if (window.mapChart) {
            window.mapChart.setOption({
                series: [{
                    data: yearData.mapData
                }]
            });
        }

        // 更新柱状图
        if (window.barChart) {
            window.barChart.setOption({
                xAxis: [{
                    data: yearData.barChartData.labels
                }],
                series: [{
                    data: yearData.barChartData.datasets[0].data,
                    itemStyle: {
                        color: '#804595' // 设置条形颜色为蓝色  
                    },
                }]
            });
        }
        // 更新饼图（修正：需要完整的option结构）
        if (window.pieChart) {
            window.pieChart.setOption({
                series: [{
                    data: yearData.pieChartData.data,
                    itemStyle: {
                        color: '#9c539c' // 保持颜色一致
                    }
                }]
            });
        }
    }

    updateData(years[0]);
};