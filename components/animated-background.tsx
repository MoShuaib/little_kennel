'use client'

import { useEffect, useState } from 'react'

interface AnimatedBackgroundProps {
  className?: string
  intensity?: 'subtle' | 'medium' | 'strong'
}

export function AnimatedBackground({ 
  className = '', 
  intensity = 'medium' 
}: AnimatedBackgroundProps) {
  const [mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    setMounted(true)
    // Generate random particles only on client
    const newParticles = Array.from({ length: intensity === 'strong' ? 20 : intensity === 'medium' ? 12 : 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [intensity])

  // Don't render particles during SSR to prevent hydration mismatch
  if (!mounted) return null

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Floating Orbs */}
      <div className="bg-orb bg-orb-1 animate-float-bubble" />
      <div className="bg-orb bg-orb-2 animate-float-bubble" style={{ animationDelay: '-2s' }} />
      <div className="bg-orb bg-orb-3 animate-float-bubble" style={{ animationDelay: '-4s' }} />
      
      {/* Additional orbs for stronger intensity */}
      {intensity !== 'subtle' && (
        <>
          <div 
            className="bg-orb animate-float-bubble" 
            style={{ 
              width: '200px', 
              height: '200px', 
              background: 'var(--accent)',
              top: '40%',
              left: '60%',
              animationDelay: '-3s',
              opacity: 0.3
            }} 
          />
        </>
      )}

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle animate-diagonal-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            opacity: intensity === 'strong' ? 0.8 : intensity === 'medium' ? 0.5 : 0.3,
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-linear-to-br from-background/80 via-transparent to-background/80"
      />
    </div>
  )
}

// 3D Card Component with hover effects
interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  enableTilt?: boolean
}

export function AnimatedCard({ children, className = '', enableTilt = true }: AnimatedCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10
    
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <div
      className={`perspective-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})`,
        transition: 'transform 0.3s ease',
      }}
    >
      {children}
    </div>
  )
}

// Floating Element Component
interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  animation?: 'float' | 'bounce' | 'pulse' | 'wave' | 'orbit'
  delay?: number
}

export function FloatingElement({ 
  children, 
  className = '', 
  animation = 'float',
  delay = 0 
}: FloatingElementProps) {
  const animationClass = {
    float: 'animate-float-3d',
    bounce: 'animate-bounce-3d',
    pulse: 'animate-pulse-3d',
    wave: 'animate-wave-3d',
    orbit: 'animate-orbit-3d',
  }[animation]

  return (
    <div 
      className={`${animationClass} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

// 3D Button Component
interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'glow'
}

export function AnimatedButton({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary' 
}: AnimatedButtonProps) {
  const variantClass = {
    primary: '',
    secondary: 'border-2 border-primary hover:bg-primary/10',
    glow: 'glow-primary hover:glow-accent',
  }[variant]

  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden
        px-6 py-3 rounded-lg font-semibold
        bg-primary text-primary-foreground
        hover:animate-pulse-3d
        transition-all duration-300
        ${variantClass}
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 animate-shimmer" />
    </button>
  )
}