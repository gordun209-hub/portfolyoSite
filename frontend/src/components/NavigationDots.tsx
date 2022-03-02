interface IProps {
  active: string
}
export const NavigationDots: React.FC<IProps> = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
        (item, index) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            key={item + index}
            style={active === item ? { backgroundColor: '$313BAC' } : {}}
            className='app__navigation-dot'
            href={`#${item}`}
          />
        )
      )}
    </div>
  )
}

export default NavigationDots
