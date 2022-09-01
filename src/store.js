import { peopleArr } from './components/leftSidebar/peopleList'
import create from 'zustand'

const initalState = {
  activeSidebarItem: {
    activeSidebarLabel: peopleArr[0].label,
    activeSidebarIcon: peopleArr[0].imgSrc,
    open: null
  }
}

const useStore = create(set => ({
  activeSidebarItem: initalState.activeSidebarItem,
  setActiveSidebar: (label, icon) => set(state => {
    const activeSidebarItem = {
      activeSidebarLabel: label,
      activeSidebarIcon: icon,
      open: null
    }

    return { ...state, activeSidebarItem }
  }),
  hideSidebar: () => set(state => {
    const activeSidebarItem = {
      ...state.activeSidebarItem,
      open: null
    }
    return { ...state, activeSidebarItem }
  }),
  showSidebar: () => set(state => {
    const activeSidebarItem = {
      ...state.activeSidebarItem,
      open: true
    }
    return { ...state, activeSidebarItem }
  }),
}))

export { useStore }