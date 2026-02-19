'use client'

import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []
    let gridLines = []
    let floatingIcons = []
    let time = 0

    // Grid Lines for organized parking aesthetic
    class GridLine {
      constructor(isVertical, position) {
        this.isVertical = isVertical
        this.position = position
        this.offset = Math.random() * Math.PI * 2
        this.opacity = 0.03 + Math.random() * 0.02
      }

      draw(time) {
        const wave = Math.sin(time * 0.001 + this.offset) * 0.01
        ctx.strokeStyle = `rgba(22, 163, 74, ${this.opacity + wave})`
        ctx.lineWidth = 1
        ctx.beginPath()
        
        if (this.isVertical) {
          ctx.moveTo(this.position, 0)
          ctx.lineTo(this.position, canvas.height)
        } else {
          ctx.moveTo(0, this.position)
          ctx.lineTo(canvas.width, this.position)
        }
        ctx.stroke()
      }
    }

    // Floating parking-related icons
    class FloatingIcon {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = 15 + Math.random() * 10
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.005
        this.opacity = 0.05 + Math.random() * 0.05
        this.type = Math.floor(Math.random() * 4) // Different icon types
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        if (this.x > canvas.width + 50) this.x = -50
        if (this.x < -50) this.x = canvas.width + 50
        if (this.y > canvas.height + 50) this.y = -50
        if (this.y < -50) this.y = canvas.height + 50
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.strokeStyle = `rgba(22, 163, 74, ${this.opacity})`
        ctx.fillStyle = `rgba(22, 163, 74, ${this.opacity * 0.5})`
        ctx.lineWidth = 2

        switch(this.type) {
          case 0: // Car shape
            this.drawCar()
            break
          case 1: // Parking P
            this.drawParkingSign()
            break
          case 2: // Location pin
            this.drawLocationPin()
            break
          case 3: // Check mark (service excellence)
            this.drawCheckMark()
            break
        }

        ctx.restore()
      }

      drawCar() {
        ctx.beginPath()
        // Car body
        ctx.roundRect(-this.size, -this.size * 0.5, this.size * 2, this.size, 3)
        ctx.stroke()
        // Wheels
        ctx.beginPath()
        ctx.arc(-this.size * 0.5, this.size * 0.5, this.size * 0.2, 0, Math.PI * 2)
        ctx.arc(this.size * 0.5, this.size * 0.5, this.size * 0.2, 0, Math.PI * 2)
        ctx.fill()
      }

      drawParkingSign() {
        ctx.beginPath()
        ctx.roundRect(-this.size * 0.6, -this.size * 0.6, this.size * 1.2, this.size * 1.2, 3)
        ctx.stroke()
        ctx.font = `${this.size}px Arial`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('P', 0, 0)
      }

      drawLocationPin() {
        ctx.beginPath()
        ctx.moveTo(0, -this.size)
        ctx.bezierCurveTo(-this.size * 0.6, -this.size, -this.size * 0.6, -this.size * 0.3, -this.size * 0.6, -this.size * 0.3)
        ctx.bezierCurveTo(-this.size * 0.6, 0, 0, this.size * 0.5, 0, this.size * 0.5)
        ctx.bezierCurveTo(0, this.size * 0.5, this.size * 0.6, 0, this.size * 0.6, -this.size * 0.3)
        ctx.bezierCurveTo(this.size * 0.6, -this.size * 0.3, this.size * 0.6, -this.size, 0, -this.size)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(0, -this.size * 0.5, this.size * 0.2, 0, Math.PI * 2)
        ctx.fill()
      }

      drawCheckMark() {
        ctx.beginPath()
        ctx.arc(0, 0, this.size * 0.6, 0, Math.PI * 2)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(-this.size * 0.3, 0)
        ctx.lineTo(-this.size * 0.1, this.size * 0.3)
        ctx.lineTo(this.size * 0.4, -this.size * 0.3)
        ctx.stroke()
      }
    }

    // Particle class for subtle tech effect
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.3 - 0.15
        this.speedY = Math.random() * 0.3 - 0.15
        this.opacity = Math.random() * 0.3 + 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = `rgba(22, 163, 74, ${this.opacity * 0.4})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize grid lines
    const initGridLines = () => {
      gridLines = []
      const spacing = 120
      
      for (let x = spacing; x < canvas.width; x += spacing) {
        gridLines.push(new GridLine(true, x))
      }
      for (let y = spacing; y < canvas.height; y += spacing) {
        gridLines.push(new GridLine(false, y))
      }
    }

    // Initialize floating icons
    const initFloatingIcons = () => {
      floatingIcons = []
      const numberOfIcons = Math.floor((canvas.width * canvas.height) / 80000)
      for (let i = 0; i < numberOfIcons; i++) {
        floatingIcons.push(new FloatingIcon())
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = []
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 20000)
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
      }
    }

    // Gradient waves
    const drawGradientWaves = (time) => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, 'rgba(22, 163, 74, 0.02)')
      gradient.addColorStop(0.5, 'rgba(21, 128, 61, 0.01)')
      gradient.addColorStop(1, 'rgba(22, 163, 74, 0.02)')

      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2)
        
        for (let x = 0; x < canvas.width; x += 10) {
          const y = Math.sin((x + time * 0.5 + i * 100) * 0.005) * 30 + canvas.height / 2 + i * 50
          ctx.lineTo(x, y)
        }
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()
      }
    }

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initGridLines()
      initFloatingIcons()
      initParticles()
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 1

      // Draw gradient waves
      drawGradientWaves(time)

      // Draw grid lines
      gridLines.forEach(line => line.draw(time))

      // Draw and update floating icons
      floatingIcons.forEach(icon => {
        icon.update()
        icon.draw()
      })

      // Draw and update particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  )
}

export default AnimatedBackground
