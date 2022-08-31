import { peopleArr } from './components/leftSidebar/peopleList'
import create from 'zustand'

const useStore = create(set => ({
  activeSidebarLabel: peopleArr[0].label,
  activeSidebarIcon: peopleArr[0].imgSrc,
  setActiveSidebar: (label, icon) => set(state => ({ activeSidebarLabel: label, activeSidebarIcon: icon })),
  downvote: () => set(state => ({ vote: 'state.votes - 1' })),
}))

export { useStore }