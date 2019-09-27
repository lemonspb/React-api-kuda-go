export default class Services {


filmUrl(url){
const  regExp = /(=)\w+/;
return url.match(regExp)[0].slice(1)
} 
 


 timeConverter(UNIX_timestamp){
  const a = new Date(UNIX_timestamp * 1000);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const time = `${date} ${month} ${year}`;
  return time;
}
  }
