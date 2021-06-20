const Toggle = ({ isDark, setIsDark, themeSwitchHandler }) => {
  return (
    <>
      <input
        type='checkbox'
        checked={isDark}
        className='toggle toggle-secondary'
        onChange={() => setIsDark(!isDark)}
      />
      <span className='toggle-mark mx-4' onClick={themeSwitchHandler}></span>
    </>
  )
}

export default Toggle
