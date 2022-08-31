import { peopleArr } from './components/leftSidebar/peopleList'
import create from 'zustand'

const useStore = create(set => ({
  activeSidebar: peopleArr[0].label,
  setActiveSidebar: (label) => set(state => ({ activeSidebar: label })),
  downvote: () => set(state => ({ vote: 'state.votes - 1' })),
}))

export { useStore }