import '../../styles/flex-nav.css'

const menus = ['홈', '소개', '상품', '연락처', '설정']

// flexbox 네비게이션: 로고(왼쪽) + 메뉴들(오른쪽) 양 끝 정렬
export default function FlexNav() {
  return (
    <nav className="flex-nav">
      <div className="flex-nav__logo">MyWebsite</div>
      <ul className="flex-nav__menus">
        {menus.map((name) => (
          <li key={name}>
            <a href="#flex-nav" className="flex-nav__item">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
