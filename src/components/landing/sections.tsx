import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"
import { motion } from "framer-motion"

const TANK_IMAGE = 'https://cdn.poehali.dev/projects/717a49ee-81b8-4429-bbd3-d692cf056611/files/77c42419-d081-4ea5-9059-b344dc09dd91.jpg'
const CAMO_IMAGE = 'https://cdn.poehali.dev/projects/717a49ee-81b8-4429-bbd3-d692cf056611/files/d9532afb-47d6-4a64-8b8a-9cc8a4abb4e4.jpg'

const features = [
  { icon: "Newspaper", label: "Новости", desc: "Патчи, анонсы, обновления — первым узнай обо всём" },
  { icon: "BookOpen", label: "Гайды", desc: "Тактики по танкам, картам и снаряжению" },
  { icon: "Trophy", label: "Турниры", desc: "Календарь событий, регистрация, результаты" },
  { icon: "Play", label: "Видео", desc: "Обзоры, highlights и обучающие ролики" },
  { icon: "MessageSquare", label: "Форум", desc: "Обсуждения, кланы, советы и дискуссии" },
  { icon: "User", label: "Кабинет", desc: "Профиль, подписки и история активности" },
]

const stats = [
  { value: "50 000+", label: "Игроков" },
  { value: "1 200+", label: "Статей и гайдов" },
  { value: "300+", label: "Турниров" },
  { value: "24/7", label: "Актуальные новости" },
]

function FeaturesGrid({ isActive }: { isActive: boolean }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-8 max-w-4xl">
      {features.map((f, i) => (
        <motion.div
          key={f.label}
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
          className="group flex flex-col gap-2 p-4 rounded border transition-all duration-300 cursor-pointer"
          style={{
            borderColor: '#3d1010',
            backgroundColor: 'rgba(139,0,0,0.08)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = '#DAA520'
            ;(e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(218,165,32,0.08)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = '#3d1010'
            ;(e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(139,0,0,0.08)'
          }}
        >
          <Icon name={f.icon as "Newspaper"} size={20} style={{ color: '#DAA520' }} />
          <span className="font-bebas tracking-wider text-lg text-white">{f.label}</span>
          <span className="text-xs leading-snug" style={{ color: '#9a9a9a', fontFamily: 'Roboto, sans-serif' }}>{f.desc}</span>
        </motion.div>
      ))}
    </div>
  )
}

function StatsRow({ isActive }: { isActive: boolean }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
          className="flex flex-col"
        >
          <span className="font-bebas text-4xl md:text-5xl" style={{ color: '#DAA520' }}>{s.value}</span>
          <span className="text-sm uppercase tracking-widest mt-1" style={{ color: '#C0C0C0', fontFamily: 'Roboto, sans-serif' }}>{s.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

export const sections = [
  {
    id: 'hero',
    subtitle: (
      <Badge
        variant="outline"
        className="text-xs tracking-widest uppercase"
        style={{ color: '#DAA520', borderColor: '#DAA520', fontFamily: 'Roboto, sans-serif' }}
      >
        ★ Портал уже в строю
      </Badge>
    ),
    title: "Blitz Hub — твой штаб.",
    content: 'Всё о Tanks Blitz: новости, гайды, турниры и лучшее сообщество — в одном месте.',
    showButton: true,
    buttonText: 'В атаку',
    backgroundImage: TANK_IMAGE,
  },
  {
    id: 'features',
    title: 'Шесть орудий портала.',
    backgroundImage: CAMO_IMAGE,
    customContent: (isActive: boolean) => <FeaturesGrid isActive={isActive} />,
  },
  {
    id: 'news',
    title: 'Новости без промедления.',
    content: 'Следи за патчами, анонсами и событиями в реальном времени. Фильтрация по категориям, архив и возможность поделиться — у нас нет устаревших данных.',
    backgroundImage: TANK_IMAGE,
  },
  {
    id: 'tournaments',
    title: 'Турниры. Слава. Победа.',
    content: 'Календарь предстоящих соревнований, регистрация команд, таблицы результатов и видеофрагменты лучших боёв. Командные, индивидуальные, клановые.',
    backgroundImage: CAMO_IMAGE,
  },
  {
    id: 'stats',
    title: 'Сообщество в цифрах.',
    backgroundImage: TANK_IMAGE,
    customContent: (isActive: boolean) => <StatsRow isActive={isActive} />,
  },
  {
    id: 'join',
    title: 'Вступай в сообщество.',
    content: 'Создай профиль, подпишись на любимые рубрики и никогда не пропускай важного. Авторизация через соцсети или учётную запись игры.',
    showButton: true,
    buttonText: 'Присоединиться',
    backgroundImage: CAMO_IMAGE,
  },
]
