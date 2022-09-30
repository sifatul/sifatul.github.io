import { slackTimelineformat } from "./time.helper"
function mapUsersAndMessage(users, message) {
  const updateMessages = message.map(singleMessage => {
    const { sender: senderUserId } = singleMessage
    if (!senderUserId) {
      singleMessage.senderInfo = users.sifatul
    } else {
      singleMessage.senderInfo = users[senderUserId]
    }
    return singleMessage
  })
  return updateMessages


}
function timeFormat(created_at) {
  let time = created_at ? slackTimelineformat(created_at) : ''
  const today = slackTimelineformat(new Date().toISOString())
  if (time == today) time = "Today"
  return time
}
export { mapUsersAndMessage, timeFormat }