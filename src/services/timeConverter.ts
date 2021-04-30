export const formatAMPM = (date: Date) => {
  var hours = date.getHours();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  var strTime = hours + ampm;
  return strTime;
}
