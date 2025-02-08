/**
 * # setResizeEvent
 *
 * リサイズイベントをセットするための関数です。<br/>
 * リサイズ時に関数が連続で発火しないように制御できます
 *
 * @param {throttlingMsTime} - リサイズイベントの間引き時間。デフォルトで0.5秒
 * @param {onResize} - リサイズ時に発火させる関数
 */
export const setResizeEvent = ({
  throttlingMsTime = 0.5 * 1000,
  onResize = () => {}
}: {
  throttlingMsTime?: number
  onResize: Function
}) => {
  let timer = 0
  window.addEventListener('resize', () => {
    if (timer > 0) {
      clearTimeout(timer)
    }
    timer = window.setTimeout(onResize, throttlingMsTime)
  })
}
