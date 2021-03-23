function notifications(phnum){
  var OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "96758eee-30a2-4e8b-ad14-07e0a87173ac",
    });
    OneSignal.sendTag("user_name", "+91"+phnum)
  });
}