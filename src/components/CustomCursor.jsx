import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  const pos      = useRef({ x: 0, y: 0 })
  const ringPos  = useRef({ x: 0, y: 0 })
  const rafId    = useRef(null)

  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    // Hide default cursor globally
    document.body.style.cursor = 'none'

    const onMove = e => {
      pos.current = { x: e.clientX, y: e.clientY }
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const onMouseDown = () => setClicked(true)
    const onMouseUp   = () => setClicked(false)

    // Hover detection on interactive elements
    const addHover = () => setHovered(true)
    const removeHover = () => setHovered(false)

    const interactives = document.querySelectorAll(
      'a, button, input, textarea, [role="button"]'
    )
    interactives.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
      el.style.cursor = 'none'
    })

    // Ring follows with smooth lerp
    const lerp = (a, b, t) => a + (b - a) * t
    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.12)
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.12)
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      }
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      cancelAnimationFrame(rafId.current)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ willChange: 'transform' }}
      >
        <div
          className="transition-all duration-150"
          style={{
            width:  hovered ? '50px' : '36px',
            height: hovered ? '50px' : '36px',
            marginLeft: hovered ? '-25px' : '-18px',
            marginTop:  hovered ? '-25px' : '-18px',
            border: `1.5px solid ${hovered ? '#4DFFA4' : 'rgba(77,255,164,0.5)'}`,
            borderRadius: '50%',
            transform: clicked ? 'scale(0.8)' : 'scale(1)',
            backgroundColor: hovered ? 'rgba(77,255,164,0.08)' : 'transparent',
          }}
        />
      </div>

      {/* Instant dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ willChange: 'transform' }}
      >
        <div
          className="transition-all duration-100"
          style={{
            width:  hovered ? '6px' : '8px',
            height: hovered ? '6px' : '8px',
            marginLeft: hovered ? '-3px' : '-4px',
            marginTop:  hovered ? '-3px' : '-4px',
            borderRadius: '50%',
            backgroundColor: '#4DFFA4',
            transform: clicked ? 'scale(0.6)' : 'scale(1)',
            boxShadow: '0 0 8px rgba(77,255,164,0.8)',
          }}
        />
      </div>
    </>
  )
}
