import SectionLayout from '../ui/SectionLayout'
import FlexNav from '../ui/FlexNav'

export default function FlexNavigationSection() {
  return (
    <SectionLayout
      id="flex-nav"
      title="02. Flex Navigation"
      description="flexbox로 로고와 메뉴를 양 끝에 정렬한 네비게이션입니다."
    >
      <FlexNav />
    </SectionLayout>
  )
}
