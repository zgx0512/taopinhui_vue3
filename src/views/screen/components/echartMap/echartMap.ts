export default () => {
  const mapRender = (data: any = []) => {
    //特殊城市
    const city = ['北京', '重庆', '上海', '天津']
    const area: any = {
      内蒙古: '内蒙古自治区',
      新疆: '新疆维吾尔自治区',
      广西: '广西壮族自治区',
      宁夏: '宁夏回族自治区',
      西藏: '西藏自治区',
      澳门: '俺们特别行政区',
      香港: '香港特别行政区'
    }
    // 便利处理字典
    const result = data.map((i: any) => {
      let name = ''
      if (city.find((x: any) => x === i.properties.name)) {
        name = i.properties.name + '市'
      } else if (area[i.properties.name]) {
        name = area[i.properties.name]
      } else {
        name = i.properties.name + '省'
      }
      return {
        name: i.properties.name,
        value: Math.round(Math.random() * 40)
      }
    })
    // echarts 的数据配置选项
    const option = {
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: (param: any) => {
            return param.data ? `${param.data.name}<br/>销售额：${param.data.value}万` : ''
        },
        textStyle: {
            fontSize: 10
        }
      },
      //数据分段
      visualMap: {
        type: 'piecewise',
        top: '150px',
        show: true,
        pieces: [
          { min: 30, label: '>30万', color: '#5475f5' },
          { min: 20, max: 30, label: '20-30万', color: '#9feaa5' },
          { min: 15, max: 20, label: '15-20万', color: '#85daef' },
          { min: 10, max: 15, label: '10-15万', color: '#74e2ca' },
          { min: 5, max: 10, label: '5-10万', color: '#e6ac53' },
          { min: 0, max: 5, label: '0-5万', color: '#9fb5ea' }
        ],
        itemWidth: 6,
        itemHeight: 6,
        textStyle: {
          color: '#fff',
          fontSize: 8
        },
        calculable: true
      },
      series: [
        {
          type: 'map',
          map: 'china',
          roam: true,
          top: '15px',
          label: {
            color: '#fff',
            fontSize: 6,
            show: true //省份名称,
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 0.8
          },
          zoom: 1, // 控制地图的放大缩小
          emphasis: {
            //高亮状态下的多边形和标签样式
            // 控制地图滑过后的颜色
            label: {
              color: '#fff',
              fontSize: 8
            },
            itemStyle: {
              areaColor: '#1bc1ad',
              borderColor: 'blue'
            }
          },
          data: result
        }
      ]
    }
    return option
  }
  return mapRender
}
