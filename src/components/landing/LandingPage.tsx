import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import Layout from './Layout'
import { sections } from './sections'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.floor(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Layout>
      {/* Хедер с логотипом */}
      <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div
            className="w-8 h-8 flex items-center justify-center text-lg font-bebas"
            style={{
              background: 'linear-gradient(135deg, #8B0000, #DAA520)',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          >
            B
          </div>
          <span
            className="font-bebas text-2xl tracking-widest"
            style={{ color: '#fff', letterSpacing: '0.15em' }}
          >
            BLITZ{' '}
            <span style={{ color: '#DAA520' }}>HUB</span>
          </span>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center gap-6"
        >
          {['Новости', 'Гайды', 'Турниры', 'Видео', 'Форум'].map((item) => (
            <span
              key={item}
              className="text-sm tracking-widest cursor-pointer transition-colors duration-200 uppercase"
              style={{ color: '#9a9a9a', fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#DAA520')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9a9a9a')}
            >
              {item}
            </span>
          ))}
        </motion.nav>
      </header>

      {/* Навигация по точкам */}
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className="w-2.5 h-2.5 rounded-full my-2 transition-all duration-300"
            style={{
              backgroundColor: index === activeSection ? '#DAA520' : '#3d1010',
              transform: index === activeSection ? 'scale(1.6)' : 'scale(1)',
              boxShadow: index === activeSection ? '0 0 10px rgba(218,165,32,0.7)' : 'none',
            }}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </nav>

      {/* Прогресс-бар */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 origin-left z-30"
        style={{ scaleX, background: 'linear-gradient(90deg, #8B0000, #DAA520)' }}
      />

      {/* Секции */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        {sections.map((section, index) => (
          <Section
            key={section.id}
            {...section}
            isActive={index === activeSection}
          />
        ))}
      </div>
    </Layout>
  )
}
