import Toggle from './Toggle'
import Logo from './Logo'

const Navbar = ({ isDark, setIsDark, themeSwitchHandler }) => {
  return (
    <nav className='navbar shadow-lg bg-base-100 text-neutral-content h-16'>
      <div className='flex-none'>
        <label
          htmlFor='my-drawer-2'
          className='btn btn-square btn-ghost drawer-button lg:hidden'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-6 h-6 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </label>
      </div>
      <div className='flex-1 px-2 mx-2 py-2.5'>
        <Logo />
      </div>
      <div className='flex-none'>
        <Toggle
          isDark={isDark}
          setIsDark={setIsDark}
          themeSwitchHandler={themeSwitchHandler}
        />
      </div>
    </nav>
  )
}

export default Navbar
