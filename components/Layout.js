import { useState } from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' && localStorage.getItem('isDark') === 'true'
  )

  const themeSwitchHandler = () => {
    setIsDark(!isDark)
    localStorage.setItem('isDark', !isDark)
  }

  return (
    <div
      data-theme={isDark ? 'dark' : 'light'}
      className='text-center'
      style={{ color: isDark ? '#e4e4e7' : '#1f2937' }}
    >
      {/* <title>Frail Bongat | Front End Developer</title> */}

      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        themeSwitchHandler={themeSwitchHandler}
      />
      <div
        className='shadow bg-base-200 drawer drawer-mobile'
        style={{ height: 'Calc(100vh - 64px)' }}
      >
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <Main>{children}</Main>
        <Sidebar />
      </div>
    </div>
  )
}

export default Layout
