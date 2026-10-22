import Button from '@mui/material/Button'
import SectionLayout from '../ui/SectionLayout'

// 섹션 작성 예시 (실제 섹션 추가 후 삭제해도 됨)
export default function SampleSection() {
  return (
    <SectionLayout
      id="sample"
      title="01. Sample"
      description="섹션 구조 확인용 예시입니다."
    >
      <Button variant="contained">Button</Button>
    </SectionLayout>
  )
}
