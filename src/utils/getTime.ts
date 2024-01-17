/* 
获取当前时间 --- 判断显示什么时间段
 */
export const getTime = () => {
  let currentTime = new Date()
  // 获取当前的小时数
  let hour = currentTime.getHours()
  if (hour > 5 && hour <= 11) {
    return '早上好'
  } else if (hour > 11 && hour <= 13) {
    return '中午好'
  } else if (hour > 13 && hour <= 18) {
    return '下午好'
  } else if (hour > 18 && hour <= 24) {
    return '晚上好'
  } else {
    return '午夜时间，请注意休息哦！'
  }
}

// 获取时、分、秒
export const getCurrentTime = () => {
  const currentTime = new Date()
  // 小时
  let hour: string | number = currentTime.getHours()
  hour = hour < 10 ? '0' + hour : hour
  // 分
  let minutes: string | number = currentTime.getMinutes()
  minutes = minutes < 10 ? '0' + minutes : minutes
  // 秒
  let seconds: string | number = currentTime.getSeconds()
  seconds = seconds < 10 ? '0' + seconds : seconds
  return `${hour}:${minutes}:${seconds}`
}
