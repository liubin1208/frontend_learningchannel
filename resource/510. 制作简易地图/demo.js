/**
 * 使用地图需要两部分数据：
 * 1. GEOJSON格式的地理信息，该信息将作为地图背景板
 * 2. 在地图背景板上要进行显示或交互的数据
 */
(async function () {
  const myChart = echarts.init(document.querySelector('.geo')); // 初始化，获得echart实例
  myChart.showLoading();
  const resp = await fetch('./china.geojson.json').then((resp) => resp.json()); // 获取中国GEOJSON数据
  const users = await fetch('./user.json').then((resp) => resp.json()); // 获取用户数据
  // 注册地图数据
  echarts.registerMap('China', resp);
  myChart.setOption({
    title: {
      text: '注册用户分布图', // 图表标题
    },
    // 配置了该项，则鼠标移动上去后会有提示
    // formatter 为文字提示格式，在此例中，{b}表示数据名，{c}表示数据值
    tooltip: { formatter: '{b} 注册用户 {c}人' },
    visualMap: {
      // 可视地图，一般用户设置不同颜色来展现数据的差异
      left: 'left', // 可视地图显示的位置
      top: 'center', // 可视地图显示的位置
      min: 0, // 区间的最小值
      max: 10000, // 区间数据的最大值
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true, // 是否允许控制区间
      inRange: {
        color: [
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026',
        ],
      },
    },
    series: [
      {
        type: 'map', // 图表类型：地图
        map: 'China', // 使用注册的地图
        roam: true, // 是否开启鼠标缩放和平移漫游
        scaleLimit: {
          // 缩放比例控制
          min: 0.7, // 最小缩放到0.7倍
          max: 3, // 最大缩放到3倍
        },
        data: users,
      },
    ],
  });
  myChart.hideLoading();
})();
