import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

interface ExtendedSectionProps extends SectionProps {
  backgroundImage?: string
  customContent?: (isActive: boolean) => React.ReactNode
}

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, backgroundImage, customContent }: ExtendedSectionProps) {
  return (
    <section
      id={id}
      className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-hidden"
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
          }}
        />
      )}

      {/* Декоративная линия сверху */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #8B0000, #DAA520, #8B0000, transparent)' }}
      />

      <div className="relative z-10">
        {subtitle && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {subtitle}
          </motion.div>
        )}

        <motion.h2
          className="font-bebas leading-none tracking-wide max-w-4xl text-white"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        {content && (
          <motion.p
            className="text-base md:text-xl max-w-2xl mt-5 leading-relaxed"
            style={{ color: '#C0C0C0', fontFamily: 'Roboto, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content}
          </motion.p>
        )}

        {customContent && customContent(isActive)}

        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 md:mt-14"
          >
            <Button
              variant="outline"
              size="lg"
              className="font-bebas tracking-widest text-lg px-10 py-6 transition-all duration-300 active:scale-95"
              style={{
                color: '#DAA520',
                borderColor: '#DAA520',
                backgroundColor: 'transparent',
                boxShadow: '0 0 12px rgba(218,165,32,0.15)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#DAA520'
                ;(e.currentTarget as HTMLButtonElement).style.color = '#1A1A1A'
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 24px rgba(218,165,32,0.4)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
                ;(e.currentTarget as HTMLButtonElement).style.color = '#DAA520'
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 12px rgba(218,165,32,0.15)'
              }}
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </div>

      {/* Декоративная линия снизу */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #8B0000, transparent)' }}
      />
    </section>
  )
}
