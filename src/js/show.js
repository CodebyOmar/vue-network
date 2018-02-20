export const showStatus = (mode) => {
  let app = document.body;
  let my_notification = document.getElementById("v-ntwrk-notificatn-by-codebyomar");

  if(mode === false && !my_notification){
    let notification = document.createElement("div")
    notification.setAttribute("id", "v-ntwrk-notificatn-by-codebyomar")
    notification.innerHTML = "Your computer seems to be offline!"

    notification.style.width = "100%";
    notification.style.textAlign = "center";
    notification.style.backgroundColor = "indianred";
    notification.style.color = "#fff";
    notification.style.fontWeight = 500;
    notification.style.zIndex = 999999999999;
    //insert in the body as first node
    app.insertBefore(notification, app.childNodes[0]);
  }else if (mode === true){
  
    return (my_notification)
      ? app.removeChild(my_notification)
      : null;
  }
}