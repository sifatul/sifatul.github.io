import { peopleArr } from './components/leftSidebar/peopleList'
import create from 'zustand'

const initalState = {
  activeSidebarItem: {
    activeSidebarLabel: peopleArr[0].label,
    activeSidebarIcon: peopleArr[0].imgSrc
  }
}

const useStore = create(set => ({
  activeSidebarItem: initalState.activeSidebarItem,
  setActiveSidebar: (label, icon) => set(state => {
    const activeSidebarItem = {
      activeSidebarLabel: label,
      activeSidebarIcon: icon
    }
    return { ...state, activeSidebarItem }
  }),
}))

export { useStore }