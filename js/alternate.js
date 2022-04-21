
  let frame2 = document.getElementById('frame2')
  let card2 = document.getElementById('card2')
  let light2 = document.getElementById('light2')
  
  let { x, y, width, height } = frame2.getBoundingClientRect()
  
  function mouseMove2(f) {
    let left = f.clientX - x
    let top = f.clientY - y
    let centerX = left - width / 2
    let centerY = top - height / 2
    let d = Math.sqrt(centerX**2 + centerY**2)
  
    card2.style.boxShadow = `
      ${-centerX / 5}px ${-centerY / 10}px 10px rgba(0, 0, 0, 0.2)
    `
  
    card2.style.transform = `
      rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 8}deg)
    `
  
    light2.style.backgroundImage = `
      radial-gradient(circle at ${left}px ${top}px, #00000040, #ffffff00, #ffffff99)
      `
  }
  
  frame2.addEventListener('mouseenter2', () => {
    frame2.addEventListener('mousemove2', mouseMove2)
  })
  
  frame2.addEventListener('mouseleave2', () => {
    frame2.removeEventListener('mousemove2', mouseMove2)
    card2.style.boxShadow = ''
    card2.style.transform = ''
    light2.style.backgroundImage = ''
  })
  
  window.addEventListener('resize', () => {
    rect = frame2.getBoundingClientRect()
    x = rect.x
    y = rect.y
    width = rect.width
    height = rect.height
  })