import { Badge } from "@/components/ui/badge"

const TANK_IMAGE = 'https://cdn.poehali.dev/projects/717a49ee-81b8-4429-bbd3-d692cf056611/files/77c42419-d081-4ea5-9059-b344dc09dd91.jpg'

export const sections = [
  {
    id: 'hero',
    subtitle: (
      <Badge
        variant="outline"
        className="text-sm tracking-widest uppercase"
        style={{ color: '#DAA520', borderColor: '#DAA520', fontFamily: 'Roboto, sans-serif' }}
      >
        ★ Портал уже в строю
      </Badge>
    ),
    title: "Blitz Hub — твой штаб.",
    content: 'Новости, гайды, турниры и лучшее сообщество игроков Tanks Blitz — всё в одном месте.',
    showButton: true,
    buttonText: 'В атаку',
    backgroundImage: TANK_IMAGE,
  },
  {
    id: 'about',
    title: 'Всё о Tanks Blitz.',
    content: 'Следи за патчами и обновлениями, изучай гайды от опытных игроков, участвуй в обсуждениях — Blitz Hub создан теми, кто живёт игрой.',
    backgroundImage: TANK_IMAGE,
  },
  {
    id: 'features',
    title: 'Новости. Гайды. Турниры.',
    content: 'Актуальные новости с фильтрами по категориям, тактические гайды по танкам и картам, календарь турниров с регистрацией и живой форум — всё под одной бронёй.',
    backgroundImage: TANK_IMAGE,
  },
  {
    id: 'video',
    title: 'Лучшие моменты.',
    content: 'Обзоры, разборы боёв, обучающие ролики и highlights турниров. Учись у лучших — смотри, анализируй, побеждай.',
    backgroundImage: TANK_IMAGE,
  },
  {
    id: 'join',
    title: 'Вступай в сообщество.',
    content: 'Десятки тысяч игроков уже на борту. Создай профиль, подпишись на любимые рубрики и никогда не пропускай важного.',
    showButton: true,
    buttonText: 'Присоединиться',
    backgroundImage: TANK_IMAGE,
  },
]