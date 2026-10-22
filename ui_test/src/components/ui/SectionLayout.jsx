import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// 모든 섹션이 공통으로 사용하는 래퍼 (제목 + 설명 + 내용)
export default function SectionLayout({ id, title, description, children }) {
  return (
    <Box component="section" id={id} sx={{ py: 5 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      {description && (
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
      )}
      <Box sx={{ mt: 2 }}>{children}</Box>
      <Divider sx={{ mt: 5 }} />
    </Box>
  )
}
