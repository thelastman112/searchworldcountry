// const button = document.querySelector("button")
// // const notif = new Notification()

// button.addEventListener("click", () => {
//     // alert("hi")
//     Notification.requestPermission().then(perm => {
//         // alert(perm)
//         if (perm === "granted") {
//             new Notification("Ex notif", {
//                 // tag: "country notification",
//                 body: "this is more text",
//             })
//         }
//     })
// })

const button  = document.querySelector("button") 
let permission = Notification.permission;

button.addEventListener("click", () => {
    if(permission === "granted"){
        showNotification();
    } else if(permission === "default"){
        requestAndShowPermission();
    } else {
        alert("Use normal alert");
    }

    function requestAndShowPermission() {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                showNotification();
            }
        });
    }
    function showNotification() {
        //  if(document.visibilityState === "visible") {
        //      return;
        //  }
        let tag = "PWA notification";
        let title = "PWA Notification";
        let icon = 'image/icon-144.png'; //this is a large image may take more time to show notifiction, replace with small size icon
        // let body = innerHTML ;
        let body = `Someone Search`;
        // let innerHTML = `<h2>${data[0].name.common}</h2>`;
        
        let notification = new Notification(title, { tag, body, icon });
        
        notification.onclick = () => {
            notification.close();
            window.open('.');
        }
    }
})



