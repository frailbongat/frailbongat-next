import Link from 'next/link'

const Menu = () => {
  const menus = [
    {
      id: 0,
      title: 'Introduction',
      link: '/',
    },
    {
      id: 1,
      title: 'Work',
      link: '/work',
    },
    {
      id: 2,
      title: 'Contact',
      link: '/contact',
    },
  ]

  return (
    <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
      {menus.map(menu => (
        <li key={menu.id}>
          <Link href={menu.link}>
            <a>{menu.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu
