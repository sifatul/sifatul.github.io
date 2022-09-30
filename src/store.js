import create from 'zustand'
import { MY_INFO } from "./constants/index"

const initalState = {
  activeSidebarItem: {
    activeSidebarLabel: MY_INFO.name,
    activeSidebarIcon: MY_INFO.avatar,
    open: null
  },
  profileVisible: null,
  introMessages: [],
  sifatulInfo: {
    name: MY_INFO.name,
    imgSrc: MY_INFO.avatar,
    extraLabel: '',
    userId: 'sifatul'
  },
  myInfo: null,
  users: {
    'sifatul': {
      name: MY_INFO.name,
      avatar: MY_INFO.avatar,
      extraLabel: '',
      userId: 'sifatul'
    }
  }
}

const useStore = create(set => ({
  ...initalState,
  setActiveSidebar: (label, icon) => set(state => {
    const activeSidebarItem = {
      activeSidebarLabel: label,
      activeSidebarIcon: icon,
      open: null
    }

    return { ...state, activeSidebarItem }
  }),
  hideSidebar: () => set(state => {
    if (!state.activeSidebarItem.open) return state
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
    console.log("activeSidebarItem: ", activeSidebarItem)
    return { ...state, activeSidebarItem }
  }),

  hideUserProfile: () => set(state => {

    return { ...state, profileVisible: null }
  }),
  showUserProfile: (activeProfileName) => set(state => {

    return { ...state, profileVisible: activeProfileName }
  }),
  addNewIntroMessage: (message) => set(state => {
    const allmessage = [...state.introMessages, message]

    return { ...state, introMessages: allmessage }
  }),

  addUsers: (userList) => set(state => {
    const guestUserId = Object.keys(userList).filter(userId => userList[userId]?.extraLabel !== '')
    const myInfo = userList[guestUserId] || state.myInfo
    console.log("myInfo:", myInfo)
    return { ...state, users: { ...userList, ...state.users }, myInfo }
  }),

}))

export { useStore }
