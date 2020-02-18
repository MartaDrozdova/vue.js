export default {
  bind (el, { value }) {
    window.M.Tooltip.init(el, { html: value, position: 'top' })
  },
  unbind (el) {
    const tooltip = window.M.Tooltip.getInstance(el)
    if (tooltip && tooltip.destroy) {
      tooltip.destroy()
    }
  }
}
