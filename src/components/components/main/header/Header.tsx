import header_scss from './Header.module.scss'
export const Header = () => {
    return (
        <header className={header_scss.route}>
            <div className={header_scss.title}>QPICK</div>
        </header>
    )
}