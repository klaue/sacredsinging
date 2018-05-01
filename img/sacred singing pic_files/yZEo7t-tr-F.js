if (self.CavalryLogger) { CavalryLogger.start_js(["c0owU"]); }

__d("legacy:Pager",["Pager"],(function(a,b,c,d,e,f){a.Pager=b("Pager")}),3);
__d("ClientServiceWorkerMessage",[],(function(a,b,c,d,e,f){__p&&__p();function a(a,b,c){"use strict";this.$1=a,this.$2=b,this.$3=c}a.prototype.sendViaController=function(){"use strict";if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var a=new self.MessageChannel();this.$3&&(a.port1.onmessage=this.$3);navigator.serviceWorker.controller.postMessage({command:this.$1,data:this.$2},[a.port2])};e.exports=a}),null);