import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import sections from './components/sections'

export default function App() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        UI Test
      </Typography>
      {sections.map(({ id, component: Section }) => (
        <Section key={id} />
      ))}
    </Container>
  )
}
