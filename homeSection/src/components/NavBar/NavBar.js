import NavItem from '../NavItem/NavItem'

const NavBar = () => {

    const featuresItems = ['Todo List', 'Calendar', 'Reminders', 'Planning']
    const featuresLogos = ['/icon-todo.svg', '/icon-calendar.svg', '/icon-reminders.svg', '/icon-planning.svg']

    const companyItems = ['History', 'Our Team', 'Blog']

    return (
        <a>
            <NavItem name='Features' dropdown={true} arrayItems={featuresItems} arrayIcons={featuresLogos} />
            <NavItem name='Company' dropdown={true} arrayItems={companyItems}/>
        </a>
    )

}

export default NavBar