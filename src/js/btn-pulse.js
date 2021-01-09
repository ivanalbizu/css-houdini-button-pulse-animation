if (typeof registerPaint !== 'undefined') {
  class BtnPulse {
    static get inputProperties() {
      return ['--x', '--y', '--rad', '--pulse-rad', '--fill', '--pulse-stroke-color']
    }

    _paintCircles(ctx, fillStyle, strokeStyle, x, y, rad) {
      ctx.beginPath()
      ctx.fillStyle = fillStyle
      ctx.strokeStyle = strokeStyle
      ctx.arc(x, y, rad, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
    }

    paint(ctx, size, props) {
      const x = props.get('--x')
      const y = props.get('--y')
      const rad = props.get('--rad')
      const fill = (props.get('--fill')).toString()
      const pulseRad = props.get('--pulse-rad')
      const pulseStrokeColor = (props.get('--pulse-stroke-color')).toString()

      this._paintCircles(ctx, fill, '#fff', x.value, y.value, rad.value)
      this._paintCircles(ctx, 'transparent', pulseStrokeColor, x.value, y.value, pulseRad.value + rad.value)
    }
  }

  registerPaint('btn-pulse', BtnPulse)
}