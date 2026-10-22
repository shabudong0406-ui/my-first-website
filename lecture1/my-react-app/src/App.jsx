import { useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Slider from '@mui/material/Slider'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import { useSwipeable } from 'react-swipeable'
import ButtonBase from '@mui/material/ButtonBase'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MailIcon from '@mui/icons-material/Mail'
import LogoutIcon from '@mui/icons-material/Logout'
import Fade from '@mui/material/Fade'
import Grow from '@mui/material/Grow'
import Slide from '@mui/material/Slide'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import './App.css'

const hoverEffects = [
  { className: 'hover-color', label: '색상 변화' },
  { className: 'hover-scale', label: '크기 확대' },
  { className: 'hover-shadow', label: '그림자' },
  { className: 'hover-lift', label: '위로 떠오름' },
  { className: 'hover-rotate', label: '회전' },
  { className: 'hover-border', label: '테두리 강조' },
]

const sidebarLinks = [
  { label: 'Navigation', href: '#navigation' },
  { label: 'Input', href: '#inputs' },
  { label: 'Card', href: '#cards' },
  { label: 'Button', href: '#buttons' },
]

const iconMenus = [
  { label: '홈', icon: <HomeIcon fontSize="small" /> },
  { label: '프로필', icon: <PersonIcon fontSize="small" /> },
  { label: '설정', icon: <SettingsIcon fontSize="small" /> },
  { label: '알림', icon: <NotificationsIcon fontSize="small" /> },
  { label: '메일', icon: <MailIcon fontSize="small" /> },
  { label: '로그아웃', icon: <LogoutIcon fontSize="small" /> },
]

const scrollLines = Array.from({ length: 50 }, (_, i) => `스크롤 콘텐츠 ${i + 1}번째 줄`)

const dragZones = [
  { id: 'source', title: '목록' },
  { id: 'target', title: '드롭 영역' },
]

const initialDragItems = [
  { id: 1, label: '아이템 1', zone: 'source' },
  { id: 2, label: '아이템 2', zone: 'source' },
  { id: 3, label: '아이템 3', zone: 'source' },
  { id: 4, label: '아이템 4', zone: 'source' },
]

const cards = [
  { title: 'React', image: reactLogo, text: 'UI를 만들기 위한 JavaScript 라이브러리입니다.' },
  { title: 'Vite', image: viteLogo, text: '빠른 개발 서버와 빌드를 제공하는 도구입니다.' },
  { title: 'Hero', image: heroImg, text: '프로젝트의 대표 이미지를 보여주는 카드입니다.' },
]

const sliderMarks = [0, 25, 50, 75, 100].map((value) => ({
  value,
  label: `${value}`,
}))

const sizes = ['Small', 'Medium', 'Large', 'Extra Large']

const hobbies = ['독서', '운동', '음악', '여행']

const fruits = ['사과', '바나나', '포도', '딸기', '오렌지', '수박']

const menus = ['홈', '소개', '서비스', '연락처']

const inputVariants = ['standard', 'outlined', 'filled']

const variants = ['contained', 'outlined', 'text']
const colors = ['primary', 'secondary', 'error']

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [menuAnchor, setMenuAnchor] = useState(null)
  const [fruit, setFruit] = useState('')
  const [checked, setChecked] = useState([])
  const [size, setSize] = useState('')
  const [sliderValue, setSliderValue] = useState(30)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)
  const prevSlide = () => setSlideIndex((i) => Math.max(i - 1, 0))
  const nextSlide = () =>
    setSlideIndex((i) => Math.min(i + 1, cards.length - 1))
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarSide, setSidebarSide] = useState('left')
  const [iconMenuAnchor, setIconMenuAnchor] = useState(null)
  const [selectedMenu, setSelectedMenu] = useState('')
  const slideContainerRef = useRef(null)
  const [fadeIn, setFadeIn] = useState(true)
  const [growIn, setGrowIn] = useState(true)
  const [slideIn, setSlideIn] = useState(true)
  const [shakeKey, setShakeKey] = useState(0)
  const scrollRef = useRef(null)
  const [showTop, setShowTop] = useState(false)
  const [dragItems, setDragItems] = useState(initialDragItems)
  const [draggingId, setDraggingId] = useState(null)
  const [overZone, setOverZone] = useState(null)

  const handleDrop = (zone) => {
    setDragItems((prev) =>
      prev.map((item) => (item.id === draggingId ? { ...item, zone } : item)),
    )
    setDraggingId(null)
    setOverZone(null)
  }

  const toggleChecked = (name) =>
    setChecked((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    )

  const handleMenuClick = (name) => {
    setMenuAnchor(null)
    alert(name)
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="navigation">
        <h2>Navigation</h2>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'left' }}>
              My App
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {menus.map((name) => (
                <Button
                  key={name}
                  color="inherit"
                  onClick={() => handleMenuClick(name)}
                >
                  {name}
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="메뉴 열기"
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              onClick={(e) => setMenuAnchor(e.currentTarget)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={() => setMenuAnchor(null)}
            >
              {menus.map((name) => (
                <MenuItem key={name} onClick={() => handleMenuClick(name)}>
                  {name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </section>

      <div className="ticks"></div>

      <section id="dropdown">
        <h2>Dropdown</h2>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="fruit-label">과일</InputLabel>
          <Select
            labelId="fruit-label"
            label="과일"
            value={fruit}
            onChange={(e) => setFruit(e.target.value)}
          >
            {fruits.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <p>선택된 값: {fruit || '없음'}</p>
      </section>

      <div className="ticks"></div>

      <section id="checkbox">
        <h2>Checkbox</h2>
        <FormControlLabel
          label="전체 선택"
          control={
            <Checkbox
              checked={checked.length === hobbies.length}
              indeterminate={
                checked.length > 0 && checked.length < hobbies.length
              }
              onChange={(e) => setChecked(e.target.checked ? hobbies : [])}
            />
          }
        />
        <div className="checkbox-row">
          {hobbies.map((name) => (
            <FormControlLabel
              key={name}
              label={name}
              control={
                <Checkbox
                  checked={checked.includes(name)}
                  onChange={() => toggleChecked(name)}
                />
              }
            />
          ))}
        </div>
        <p>
          선택된 항목: {checked.length} / {hobbies.length}개
        </p>
      </section>

      <div className="ticks"></div>

      <section id="radio">
        <h2>Radio</h2>
        <RadioGroup row value={size} onChange={(e) => setSize(e.target.value)}>
          {sizes.map((name) => (
            <FormControlLabel
              key={name}
              value={name}
              control={<Radio />}
              label={name}
            />
          ))}
        </RadioGroup>
        <p>선택된 옵션: {size || '없음'}</p>
      </section>

      <div className="ticks"></div>

      <section id="slider">
        <h2>Slider</h2>
        <Slider
          min={0}
          max={100}
          step={5}
          marks={sliderMarks}
          value={sliderValue}
          onChange={(_, value) => setSliderValue(value)}
          aria-label="슬라이더"
        />
        <p>현재 값: {sliderValue}</p>
      </section>

      <div className="ticks"></div>

      <section id="modal">
        <h2>Modal</h2>
        <Button variant="contained" onClick={() => setDialogOpen(true)}>
          모달 열기
        </Button>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle sx={{ pr: 6 }}>
            확인
            <IconButton
              aria-label="닫기"
              onClick={() => setDialogOpen(false)}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              이 작업을 진행하시겠습니까? 배경을 클릭하거나 닫기 버튼으로도
              닫을 수 있습니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>취소</Button>
            <Button variant="contained" onClick={() => setDialogOpen(false)}>
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </section>

      <div className="ticks"></div>

      <section id="cards">
        <h2>Card</h2>
        <Grid container spacing={2} sx={{ width: '100%' }}>
          {cards.map((card) => (
            <Grid key={card.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'box-shadow 0.3s',
                  '&:hover': { boxShadow: 12 },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                  sx={{ objectFit: 'contain', p: 2 }}
                />
                <CardContent>
                  <Typography variant="h6">{card.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.text}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button size="small" onClick={() => alert(card.title)}>
                    자세히
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      <div className="ticks"></div>

      <section id="dragdrop">
        <h2>Drag &amp; Drop</h2>
        <div className="drop-zones">
          {dragZones.map((zone) => (
            <div
              key={zone.id}
              className={`drop-zone${overZone === zone.id ? ' over' : ''}`}
              onDragOver={(e) => {
                e.preventDefault()
                setOverZone(zone.id)
              }}
              onDragLeave={() => setOverZone(null)}
              onDrop={(e) => {
                e.preventDefault()
                handleDrop(zone.id)
              }}
            >
              <h3>{zone.title}</h3>
              {dragItems
                .filter((item) => item.zone === zone.id)
                .map((item) => (
                  <div
                    key={item.id}
                    className={`drag-item${draggingId === item.id ? ' dragging' : ''}`}
                    draggable
                    onDragStart={() => setDraggingId(item.id)}
                    onDragEnd={() => {
                      setDraggingId(null)
                      setOverZone(null)
                    }}
                  >
                    {item.label}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </section>

      <div className="ticks"></div>

      <section id="scroll">
        <h2>Scroll</h2>
        <Box sx={{ position: 'relative', width: 'min(500px, 100%)' }}>
          <Paper
            ref={scrollRef}
            variant="outlined"
            sx={{ height: 300, overflowY: 'auto', p: 2, textAlign: 'left' }}
            onScroll={(e) => setShowTop(e.currentTarget.scrollTop > 100)}
          >
            {scrollLines.map((line) => (
              <Typography key={line} sx={{ py: 0.5 }}>
                {line}
              </Typography>
            ))}
          </Paper>
          {showTop && (
            <Button
              variant="contained"
              size="small"
              sx={{ position: 'absolute', right: 24, bottom: 12 }}
              onClick={() =>
                scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' })
              }
            >
              Top
            </Button>
          )}
        </Box>
      </section>

      <div className="ticks"></div>

      <section id="animation">
        <h2>Animation</h2>
        <div className="anim-buttons">
          <Button variant="outlined" onClick={() => setFadeIn((v) => !v)}>
            Fade
          </Button>
          <Button variant="outlined" onClick={() => setGrowIn((v) => !v)}>
            Grow
          </Button>
          <Button variant="outlined" onClick={() => setSlideIn((v) => !v)}>
            Slide
          </Button>
          <Button variant="outlined" onClick={() => setShakeKey((k) => k + 1)}>
            Shake (CSS)
          </Button>
        </div>
        <div className="anim-stage">
          <Fade in={fadeIn} timeout={600}>
            <Paper className="anim-box">Fade</Paper>
          </Fade>
          <Grow in={growIn} timeout={600}>
            <Paper className="anim-box">Grow</Paper>
          </Grow>
          <Box ref={slideContainerRef} className="anim-slide-container">
            <Slide
              in={slideIn}
              direction="up"
              container={slideContainerRef.current}
              timeout={600}
            >
              <Paper className="anim-box">Slide</Paper>
            </Slide>
          </Box>
          <Fade in={fadeIn} timeout={600}>
            <Paper
              key={shakeKey}
              className={`anim-box${shakeKey ? ' shake' : ''}`}
            >
              Fade + CSS
            </Paper>
          </Fade>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="menu">
        <h2>Menu</h2>
        <Button
          variant="contained"
          onClick={(e) => setIconMenuAnchor(e.currentTarget)}
        >
          메뉴 열기
        </Button>
        <Menu
          anchorEl={iconMenuAnchor}
          open={Boolean(iconMenuAnchor)}
          onClose={() => setIconMenuAnchor(null)}
        >
          {iconMenus.map(({ label, icon }) => (
            <MenuItem
              key={label}
              onClick={() => {
                setSelectedMenu(label)
                setIconMenuAnchor(null)
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>{label}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
        <p>선택된 메뉴: {selectedMenu || '없음'}</p>
      </section>

      <div className="ticks"></div>

      <section id="sidebar">
        <h2>Sidebar</h2>
        <RadioGroup
          row
          value={sidebarSide}
          onChange={(e) => setSidebarSide(e.target.value)}
        >
          <FormControlLabel value="left" control={<Radio />} label="왼쪽" />
          <FormControlLabel value="right" control={<Radio />} label="오른쪽" />
        </RadioGroup>
        <Button variant="contained" onClick={() => setSidebarOpen((v) => !v)}>
          사이드바 {sidebarOpen ? '닫기' : '열기'}
        </Button>
        <Drawer
          anchor={sidebarSide}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        >
          <Box sx={{ width: 240 }} role="navigation">
            <Typography variant="h6" sx={{ p: 2 }}>
              메뉴
            </Typography>
            <List>
              {sidebarLinks.map(({ label, href }) => (
                <ListItem key={label} disablePadding>
                  <ListItemButton
                    component="a"
                    href={href}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </section>

      <div className="ticks"></div>

      <section id="hover">
        <h2>Hover</h2>
        <div className="hover-grid">
          {hoverEffects.map(({ className, label }) => (
            <ButtonBase key={className} className={`hover-card ${className}`}>
              {label}
            </ButtonBase>
          ))}
        </div>
      </section>

      <div className="ticks"></div>

      <section id="swipe">
        <h2>Swipe</h2>
        <div className="swipe-viewport" {...swipeHandlers}>
          <div
            className="swipe-track"
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          >
            {cards.map((card) => (
              <div key={card.title} className="swipe-slide">
                <img src={card.image} alt={card.title} draggable={false} />
              </div>
            ))}
          </div>
        </div>
        <div className="swipe-controls">
          <Button onClick={prevSlide} disabled={slideIndex === 0}>
            이전
          </Button>
          <span>
            {slideIndex + 1} / {cards.length}
          </span>
          <Button onClick={nextSlide} disabled={slideIndex === cards.length - 1}>
            다음
          </Button>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="buttons">
        <h2>Button</h2>
        {variants.map((variant) => (
          <div key={variant} className="button-row">
            {colors.map((color) => (
              <Button
                key={color}
                variant={variant}
                color={color}
                onClick={() => alert(`${variant} / ${color} 버튼 클릭`)}
              >
                {variant} {color}
              </Button>
            ))}
          </div>
        ))}
      </section>

      <div className="ticks"></div>

      <section id="inputs">
        <h2>Input</h2>
        <div className="input-row">
          {inputVariants.map((variant) => (
            <TextField
              key={variant}
              variant={variant}
              label={`${variant} 라벨`}
              placeholder={`${variant} 입력`}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          ))}
        </div>
        <p>입력값: {text}</p>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
