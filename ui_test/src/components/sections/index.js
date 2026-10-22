// 새 섹션을 추가하는 방법:
// 1. src/components/sections/ 에 XxxSection.jsx 생성 (SectionLayout 사용)
// 2. 아래 배열에 import 하고 항목 추가
// 필요한 UI 요소 컴포넌트는 src/components/ui/ 에 만든다.
import SampleSection from './01_SampleSection'
import FlexNavigationSection from './02_FlexNavigationSection'

const sections = [
  { id: 'sample', component: SampleSection },
  { id: 'flex-nav', component: FlexNavigationSection },
  // 16개 UI 요소 섹션을 여기에 순서대로 추가
]

export default sections
