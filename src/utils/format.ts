export function formatCount(count: number) {
  if (count > 100000) {
    return Math.ceil(count / 10000) + '万'
  } else {
    return count
  }
}

export function getImageSize(imageUrl: string, width: number, height: number = width) {
  return imageUrl + `?param=${width}y${height}`
}

export function formatDuration(time: number) {
  const totalSecond = Math.floor(time / 1000)
  const minute = Math.floor(totalSecond / 60)
  const second = totalSecond % 60
  const minuteString = String(minute).padStart(2, '0')
  const secondString = String(second).padStart(2, '0')
  return `${minuteString}:${secondString}`
}
