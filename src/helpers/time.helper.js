const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
}
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
function slackTimelineformat(date) {
  const d = new Date(date)
  const year = d.getFullYear() // 2019
  const monthIdx = d.getMonth() // 2019
  const dateIdx = d.getDate() // 2019
  const monthName = months[monthIdx]
  let postFix = 'th'
  if (dateIdx == 1) postFix = 'st'
  if (dateIdx == 2) postFix = 'nd'
  if (dateIdx == 3) postFix = 'rd'
  return `${monthName} ${year}, ${dateIdx + postFix}`
}
export { formatAMPM, slackTimelineformat }