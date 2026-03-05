export interface ILyricLine {
  time: number
  content: string
}

const timeRegExp = /\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/g

export function parseLyric(lyricString: string) {
  const lyricList: ILyricLine[] = []
  const lines = lyricString.split('\n')

  for (const line of lines) {
    const matches: RegExpExecArray[] = []
    const regExp = new RegExp(timeRegExp.source, 'g')
    let match = regExp.exec(line)
    while (match) {
      matches.push(match)
      match = regExp.exec(line)
    }
    if (!matches.length) continue

    const content = line.replace(timeRegExp, '').trim()
    for (const item of matches) {
      const minute = Number(item[1] ?? 0)
      const second = Number(item[2] ?? 0)
      const millisecondRaw = item[3] ?? '0'
      const millisecond = millisecondRaw.length === 2 ? Number(millisecondRaw) * 10 : Number(millisecondRaw)
      const time = minute * 60 * 1000 + second * 1000 + millisecond
      lyricList.push({ time, content })
    }
  }

  return lyricList.sort((a, b) => a.time - b.time)
}
