if (self.CavalryLogger) { CavalryLogger.start_js(["LHtZx"]); }

__d("FeedReactComposerBootloadPerfTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerBootloadPerfLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerBootloadPerfLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FeedReactComposerBootloadPerfLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setBootloadDurationMillis=function(a){this.$1.bootload_duration_millis=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={bootload_duration_millis:!0,vc:!0};e.exports=a}),null);
__d("UserScheduledPostsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:UserScheduledPostsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:UserScheduledPostsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:UserScheduledPostsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAction=function(a){this.$1.action=a;return this};a.prototype.setAppID=function(a){this.$1.app_id=a;return this};a.prototype.setContent=function(a){this.$1.content=a;return this};a.prototype.setJobInstance=function(a){this.$1.job_instance=a;return this};a.prototype.setPostAttachmentType=function(a){this.$1.post_attachment_type=a;return this};a.prototype.setPostID=function(a){this.$1.post_id=a;return this};a.prototype.setPublishTime=function(a){this.$1.publish_time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={action:!0,app_id:!0,content:!0,job_instance:!0,post_attachment_type:!0,post_id:!0,publish_time:!0,vc:!0};e.exports=a}),null);
__d("ReactComposerAttachmentActionType",["keyMirrorRecursive"],(function(a,b,c,d,e,f){e.exports=b("keyMirrorRecursive")({REGISTER_ATTACHMENT:null,INITIALIZE_ATTACHMENT:null,SELECT_ATTACHMENT:null,SET_ATTACHMENT_MARKUP:null,SET_INITIALIZED:null,SET_BOOTLOADED:null,SET_BOOTSTRAPPED:null,UPLOAD_ATTACHMENT:null},"ReactComposerAttachmentActionType")}),null);
__d("ReactComposerMediaUploadType",[],(function(a,b,c,d,e,f){e.exports={PHOTO:"PHOTO",VIDEO:"VIDEO"}}),null);
__d("ReactComposerScrapedAttachmentActionType",["keyMirrorRecursive"],(function(a,b,c,d,e,f){e.exports=b("keyMirrorRecursive")({ATTACHMENT_SCRAPE_ENABLED:null,ATTACHMENT_PERMISSIVE_MATCH_SETTED:null,ATTACHMENT_SCRAPE_INTENDED:null,ATTACHMENT_SCRAPED:null,ATTACHMENT_CAROUSEL_UPLOAD:null,ATTACHMENT_SELECT_COLLECTION:null,ATTACHMENT_SHARE_SELECTED:null,ATTACHMENT_TITLE_EDITED:null,ATTACHMENT_DESCRIPTION_EDITED:null,ATTACHMENT_IMAGE_DESELECTED:null,ATTACHMENT_BREAKING_CONFIG_SET:null,CLOSE_WHITELIST_DEPRECATION_NUX:null},"ReactComposerScrapedAttachmentActionType")}),null);
__d("ReactComposerAttachmentType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADVERTISE:"ADVERTISE",STATUS:"STATUS",MEDIA:"MEDIA",ALBUM:"ALBUM",MILESTONE:"MILESTONE",MLE:"MLE",NOTES:"NOTES",QANDA:"QANDA",PAGES_EXTRA:"PAGES_EXTRA",FILE:"FILE",QUESTION:"QUESTION",VISUAL_POLL:"VISUAL_POLL",LIST:"LIST",SELL:"SELL",WORK_HEADER:"WORK_HEADER",WORK_FOOTER:"WORK_FOOTER",SEND_GIFT:"SEND_GIFT",LIVE_BROADCAST:"LIVE_BROADCAST",PHOTO_ZOOM_CROP:"PHOTO_ZOOM_CROP",PROFILE_PIC_DESCRIPTION:"PROFILE_PIC_DESCRIPTION",PROFILE_PIC_FRAME:"PROFILE_PIC_FRAME",LIVE_VIDEO:"LIVE_VIDEO",DOC:"DOC",EVENT:"EVENT",GAME:"GAME",CTA:"CTA",QA:"QA",MESSAGE:"MESSAGE",GET_DIRECTIONS:"GET_DIRECTIONS",CALL:"CALL",PLACE_LIST:"PLACE_LIST",QUIZ:"QUIZ",TASK:"TASK",ADD_MENTIONED:"ADD_MENTIONED",AUDIENCE_SELECTOR:"AUDIENCE_SELECTOR",LEARNING_COURSE:"LEARNING_COURSE",LEARNING_THIRD_PARTY_LINK:"LEARNING_THIRD_PARTY_LINK",PAGE_RECOMMENDATION:"PAGE_RECOMMENDATION",GROUP_MEET_UP:"GROUP_MEET_UP",EMPLOYEE_QUESTION_SUGGESTIONS:"EMPLOYEE_QUESTION_SUGGESTIONS",POST_TO_GROUP:"POST_TO_GROUP",MEDIA_EFFECT_SHARE:"MEDIA_EFFECT_SHARE",FIND_PLAYERS:"FIND_PLAYERS",SALES_PROMO:"SALES_PROMO",JOB_SEARCH:"JOB_SEARCH",SHARING_SPACES_SELECTOR:"SHARING_SPACES_SELECTOR",UICE_EXAMPLE_ATTACHMENT:"UICE_EXAMPLE_ATTACHMENT",EVENT_CREATION:"EVENT_CREATION",ASSET_3D:"ASSET_3D",LIVING_ROOM:"LIVING_ROOM",VIDEO_SUGGESTIONS:"VIDEO_SUGGESTIONS",APP_INTEGRATION_AODOCS:"APP_INTEGRATION_AODOCS",APP_INTEGRATION_BOX:"APP_INTEGRATION_BOX",APP_INTEGRATION_CORNERSTONE:"APP_INTEGRATION_CORNERSTONE",APP_INTEGRATION_DROPBOX:"APP_INTEGRATION_DROPBOX",APP_INTEGRATION_EGNYTE:"APP_INTEGRATION_EGNYTE",APP_INTEGRATION_GDRIVE:"APP_INTEGRATION_GDRIVE",APP_INTEGRATION_JIRA:"APP_INTEGRATION_JIRA",APP_INTEGRATION_ONEDRIVE:"APP_INTEGRATION_ONEDRIVE",APP_INTEGRATION_QUIP:"APP_INTEGRATION_QUIP",APP_INTEGRATION_SHAREPOINT:"APP_INTEGRATION_SHAREPOINT"})}),null);
__d("ReactComposerFocusInit",["csx","invariant","DOM","DOMContainer.react","Parent","React","ReactDOM"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a={handler:function(a,c,d,e,f,g,i,j){var k=b("DOM").create("div"),l=a.parentNode;if(g){g=b("Parent").bySelector(a,"._3u13");g&&(l=g.parentNode.parentNode)}b("ReactDOM").render(b("React").createElement(f,{composerID:c,actorID:d,gks:e,ReactComposerFocusExtraConfigData:i,enableFocusBehavior:!0,onFirstFocus:j},b("React").createElement(b("DOMContainer.react"),{display:"block"},a)),k);l||h(0);l.firstChild?l.replaceChild(k,l.firstChild):l.appendChild(k)},preload:function(){}};e.exports=a}),null);
__d("SharesheetDestination",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MESSENGER:"MESSENGER",STORIES:"STORIES",TIMELINE:"TIMELINE",NONE:"NONE"})}),null);
__d("XReactFeedSproutsComposerXBootloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/react_composer/feedx_sprouts/bootload/",{composer_id:{type:"String",required:!0},composer_type:{type:"Enum",required:!0,enumType:1},friend_list_id:{type:"String"},target_id:{type:"String",required:!0}})}),null);
__d("ReactFeedSproutsComposerX",["csx","cx","invariant","Arbiter","AsyncRequest","Bootloader","Button","CSS","DOM","Event","FeedComposerIDStore","FeedReactComposerBootloadPerfTypedLogger","ReactComposerAttachmentType","ReactComposerEvents","ReactComposerFocusInit","Run","SharesheetDestination","SubscriptionsHandler","XReactFeedSproutsComposerXBootloadController","$"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();function a(a){__p&&__p();this.$38=function(a){if(!this.$12)return;b("Button").setEnabled(this.$23,this.$21.size!=0&&this.$19.value.length!=0);this.$12.sharingSpacesDestinationPicker&&b("Button").setEnabled(this.$24,this.$19.value.length!=0);if(!this.$12.textEligibleForStory)return;this.$12.maxTextLengthForStory!==undefined&&this.$19.value.length>this.$12.maxTextLengthForStory?(b("CSS").addClass(this.$28,"_ru-"),this.$21["delete"](b("SharesheetDestination").STORIES)&&(b("CSS").removeClass(this.$28,"_1sfg"),this.$22.add(b("SharesheetDestination").STORIES))):(b("CSS").removeClass(this.$28,"_ru-"),this.$22["delete"](b("SharesheetDestination").STORIES)&&(b("CSS").addClass(this.$28,"_1sfg"),this.$21.add(b("SharesheetDestination").STORIES)));b("Button").setEnabled(this.$23,this.$21.size!=0&&this.$19.value.length!=0)}.bind(this);this.$39=function(a){a.preventDefault(),b("DOM").setContent(this.$7,this.$2.children),b("CSS").addClass(this.$13,"_2-q9")}.bind(this);this.$40=function(a){a.preventDefault(),b("DOM").setContent(this.$2,this.$7.children),b("CSS").removeClass(this.$13,"_2-q9")}.bind(this);this.$31=function(a){a.preventDefault();b("Button").setEnabled(this.$23,!1);if(this.$21&&this.$21.has(b("SharesheetDestination").STORIES)&&this.$25){a={composerID:this.$5,targetID:this.$18,actorID:this.$1,text:this.$19.value,successHandler:this.$30};this.$25.postToStory(a)}return this.$21&&this.$21.has(b("SharesheetDestination").TIMELINE)?!0:!1}.bind(this);this.$35=function(a){__p&&__p();a=a.getTarget();var c=null;while(a){if(a.nodeType===1&&a.nodeName==="A"){c=a;break}a=a.parentNode}c!==null||i(0);a=b("CSS").hasClass(c,"._5qtn");if(a)return;this.$14.forEach(function(a){return b("CSS").removeClass(a,"_5qtn")});b("CSS").addClass(c,"_5qtn");a=b("DOM").find(this.$13,"._559p");var d=b("DOM").find(this.$13,"._559q");switch(c.getAttribute("data-attachment-type")){case b("ReactComposerAttachmentType").STATUS:b("CSS").hide(d);b("CSS").show(a);break;case b("ReactComposerAttachmentType").MEDIA:case b("ReactComposerAttachmentType").LIVE_VIDEO:b("CSS").show(d);b("CSS").hide(a);break;case b("ReactComposerAttachmentType").ALBUM:this.$12&&this.$12.albumTabUsesSelector&&this.$41();break;case b("ReactComposerAttachmentType").POST_TO_GROUP:b("Bootloader").loadModules(["XReactComposerPostToGroupLoggingODSController","ReactComposerPostToGroupLoggingEvent"],function(a,c){a=a.getURIBuilder().setString("event",c.CLICK_OUTER_TAB).getURI();new(b("AsyncRequest"))(a).send()},"ReactFeedSproutsComposerX");break}}.bind(this);this.$29=function(a){this.$12&&this.$12.lazySproutsExpand||this.$42();if(this.$4)return;this.$20=Date.now();this.$4=!0;a=b("XReactFeedSproutsComposerXBootloadController").getURIBuilder().setString("composer_id",this.$5).setString("target_id",this.$18).setEnum("composer_type",this.$6).setString("friend_list_id",this.$9).getURI();new(b("AsyncRequest"))(a).send()}.bind(this);this.$34=function(){b("CSS").removeClass(this.$13,"_4qr4"),b("CSS").addClass(this.$13,"_4a8c")}.bind(this);this.$33=function(){this.$34(),this.$19.value="",b("CSS").removeClass(this.$13,"_2-q9")}.bind(this);this.$32=function(){this.$17.release()}.bind(this);this.$30=function(){b("Button").setEnabled(this.$23,!0),b("Arbiter").inform(b("ReactComposerEvents").POST_SUCCEEDED+this.$5),this.$33()}.bind(this);this.$26=!1;this.$1=a.actorID;this.$13=a.root;this.$5=a.composerID;this.$18=a.targetID;this.$6=a.composerType;this.$9=a.friendListID;this.$10=a.largeTextThreshold;this.$12=a.gks;this.$25=a.jsModules.postModule;this.$11=!1;this.$4=!1;this.$8=b("DOM").find(this.$13,"form");this.$19=b("DOM").find(this.$13,"._3en1");this.$16=b("DOM").find(this.$13,"._16ve");this.$21=new Set();this.$22=new Set();b("FeedComposerIDStore").set(this.$5);this.$17=new(b("SubscriptionsHandler"))();this.$17.addSubscriptions(b("Event").listen(this.$19,"focus",this.$29),b("Event").listen(this.$13,"click",this.$29),b("Event").listen(this.$8,"success",this.$30),b("Event").listen(this.$8,"submit",this.$31),b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/bootload/"+this.$5,function(){new(b("FeedReactComposerBootloadPerfTypedLogger"))().setBootloadDurationMillis(Date.now()-this.$20).log(),this.$32()}.bind(this)),b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/selectcomposer/"+this.$5,this.$29),b("Arbiter").subscribe("ReactComposerFocus/reset/"+this.$5,this.$33),b("Arbiter").subscribe("ReactComposerFocus/collapse/"+this.$5,this.$34),b("Arbiter").subscribe(b("ReactComposerEvents").TEXT_PREFILL_BEFORE_BOOTLOAD+this.$5,function(a,b){this.$19.value=b,this.$19.selectionEnd=0}.bind(this)),b("Arbiter").subscribe("ReactFeedSproutsComposerXBody/onDrop",this.$29));this.$14=b("DOM").scry(this.$13,"._4-h7");this.$14.forEach(function(a){return this.$17.addSubscriptions(b("Event").listen(a,"click",this.$35))}.bind(this));this.$15=b("DOM").scry(this.$13,"._m_1");this.$12&&this.$12.prefillSprouts&&this.$15.forEach(function(a){return this.$17.addSubscriptions(b("Event").listen(a,"click",function(){this.$36(a)}.bind(this)))}.bind(this));var c=b("DOM").scry(this.$13,"._2mo4");c.length===1&&this.$17.addSubscriptions(b("Event").listen(c[0],"click",function(){if(this.$11)return;this.$11=!0;b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/bootload/"+this.$5,function(a,c){b("Bootloader").loadModules(["LiveVideoBroadcastUtils"],function(a){a.startPreviewUI(c.contextConfig,c.config),this.$11=!1}.bind(this),"ReactFeedSproutsComposerX")}.bind(this));b("Bootloader").loadModules(["LiveVideoBroadcastUtils"],function(){},"ReactFeedSproutsComposerX")}.bind(this)));this.$12&&(this.$12.sharingSpacesDestinationPicker||this.$12.oneStepDestinationPicker)&&this.$37();c=a.reactComposerFocusExtraConfigData;c&&c.showDialogForP2PAdminsMetadata&&c.showDialogForP2PAdminsMetadata.showDialogForP2PAdmins&&a.jsModules.P2PNewAdminComposerFocus?b("ReactComposerFocusInit").handler(b("$")("feedx_sprouts_container"),this.$5,this.$1,this.$12,a.jsModules.P2PNewAdminComposerFocus,!1,a.reactComposerFocusExtraConfigData):a.jsModules&&a.jsModules.composerFocus&&b("ReactComposerFocusInit").handler(b("$")("feedx_sprouts_container"),this.$5,this.$1,this.$12,a.jsModules.composerFocus,!1,a.reactComposerFocusExtraConfigData);b("Run").onLeave(this.$32)}a.prototype.$41=function(){var a=b("DOM").find(this.$13,"._559p"),c=b("DOM").find(this.$13,"._559q");b("Arbiter").subscribeOnce("ReactFeedComposerXBootloader/bootload/"+this.$5,function(){b("Bootloader").loadModules(["ReactComposerCollectionsActions","ReactComposerLoggingName"],function(a,b){a.showCollectionsSelector(this.$5,b.ALBUM_TAB_SELECTOR)}.bind(this),"ReactFeedSproutsComposerX"),this.$32()}.bind(this));b("CSS").show(c);b("CSS").hide(a)};a.prototype.$36=function(a,c){c=a.getAttribute("data-sprout-tagger-id");if(c){var d=b("DOM").find(this.$16,"._16vl");d=b("DOM").find(d,'*[data-sprout-tagger-id="'+c+'"]');b("CSS").addClass(d,"_30lm");this.$16.setAttribute("data-selected-sprout-id",c)}else b("CSS").matchesSelector(a,"._1gr3")&&(this.$12&&this.$12.lazySproutsExpand&&this.$42())};a.prototype.$37=function(){__p&&__p();this.$27=b("DOM").find(this.$13,"._3h0d");this.$17.addSubscriptions(b("Event").listen(this.$19,"input",this.$38));this.$23=b("DOM").find(this.$13,"._ej1");b("Button").setEnabled(this.$23,!1);if(this.$12&&this.$12.sharingSpacesDestinationPicker){this.$2=b("DOM").find(this.$13,"._3ifg");this.$7=b("DOM").find(this.$13,"._26c- ._3-wg");this.$24=b("DOM").find(this.$13,"._1-pl");b("Button").setEnabled(this.$24,!1);this.$17.addSubscriptions(b("Event").listen(this.$24,"click",this.$39));var a=b("DOM").find(this.$13,"._1-pm");this.$17.addSubscriptions(b("Event").listen(a,"click",this.$40));this.$3=a}a=b("DOM").scry(this.$13,"._66-n");a.forEach(function(a){return this.$43(a)}.bind(this));this.$17.addSubscriptions(b("Event").listen(this.$27,"click",function(){this.$44()}.bind(this)));this.$12&&this.$12.defaultDestination===b("SharesheetDestination").STORIES?this.$21.add(b("SharesheetDestination").STORIES):this.$21.add(b("SharesheetDestination").TIMELINE)};a.prototype.$44=function(a){this.$26=!0};a.prototype.$43=function(a){a.getAttribute("data-destination")==b("SharesheetDestination").STORIES&&(this.$28=a,this.$12&&!this.$12.textEligibleForStory&&b("CSS").addClass(a,"_ru-")),this.$17.addSubscriptions(b("Event").listen(a,"click",function(){this.$45(a)}.bind(this)))};a.prototype.$45=function(a,c){if(this.$26){this.$26=!1;return}b("CSS").toggleClass(a,"_1sfg");c=a.dataset.destination;this.$21.has(c)?this.$21["delete"](c):this.$21.add(c);b("Button").setEnabled(this.$23,this.$21.size!=0&&this.$19.value.length!=0)};a.prototype.$42=function(){b("CSS").addClass(this.$13,"_4qr4"),b("CSS").removeClass(this.$13,"_4a8c")};e.exports=a}),null);
__d("ReactComposerActionStore",["Arbiter","AsyncResponse","ReactComposerActionTypes","ReactComposerEvents","ReactComposerStoreBase","requireWeak"],(function(a,b,c,d,e,f){__p&&__p();var g,h=void 0;b("requireWeak")("ReactComposerStatusStore",function(a){return h=a});c=babelHelpers.inherits(a,b("ReactComposerStoreBase"));g=c&&c.prototype;function a(a,c){"use strict";__p&&__p();a=a?a:function(){return null};var d=void 0;g.constructor.call(this,a,function(a){__p&&__p();if(!(d&&d.__shouldIgnoreAction(a)))switch(a.type){case b("ReactComposerActionTypes").POST_STARTED:d&&d.$ReactComposerActionStore2(a);break;case b("ReactComposerActionTypes").POST_INTENDED:d&&d.$ReactComposerActionStore3(a);break;case b("ReactComposerActionTypes").POST_SUCCEEDED:d&&d.$ReactComposerActionStore4(a);break;case b("ReactComposerActionTypes").POST_ERROR:d&&d.$ReactComposerActionStore5(a);break;case b("ReactComposerActionTypes").POST_FINALLY:d&&d.$ReactComposerActionStore6(a);break;case b("ReactComposerActionTypes").POST_PREPROCESSING:d&&d.$ReactComposerActionStore7(a);break;default:}c&&c(a)});d=this;this.$ReactComposerActionStore1=new Set()}a.prototype.registerComposerID=function(a){"use strict";this.$ReactComposerActionStore1.add(a)};a.prototype.$ReactComposerActionStore2=function(a){"use strict";var c=this.validateAction(a,"composerID");this.__onPostStarted&&this.__onPostStarted(a);b("Arbiter").inform(b("ReactComposerEvents").POST_STARTED+c)};a.prototype.$ReactComposerActionStore3=function(a){"use strict";this.validateAction(a,["composerID","actorID","config","targetID"]),(!this.__canPost||this.__canPost(a))&&this.$ReactComposerActionStore2(a)};a.prototype.$ReactComposerActionStore4=function(a){"use strict";var c=this.validateAction(a,"composerID");h&&h.getMessage(c);this.__onPostSucceeded&&this.__onPostSucceeded(a);b("Arbiter").inform(b("ReactComposerEvents").POST_SUCCEEDED+c)};a.prototype.$ReactComposerActionStore5=function(a){"use strict";if(this.__onPostError)return this.__onPostError(a);a.response&&b("AsyncResponse").defaultErrorHandler(a.response)};a.prototype.$ReactComposerActionStore6=function(a){"use strict";this.__onPostFinally&&this.__onPostFinally(a),b("Arbiter").inform(b("ReactComposerEvents").POST_FINALLY)};a.prototype.$ReactComposerActionStore7=function(a){"use strict";this.__onPostPreprocessing&&this.__onPostPreprocessing(a)};a.prototype.__shouldIgnoreAction=function(a){"use strict";a=this.validateAction(a,"composerID");return!this.$ReactComposerActionStore1.has(a)};e.exports=a}),null);
__d("ReactComposerSproutsDisplayState",["keyMirrorRecursive"],(function(a,b,c,d,e,f){e.exports=b("keyMirrorRecursive")({INLINE:null,EXPANDED:null},"ReactComposerSproutsDisplayState")}),null);
__d("ReactComposerStore",["Bootloader","ReactComposerActionStore","ReactComposerActionTypes","ReactComposerAttachmentActionType","ReactComposerInit","ReactComposerScrapedAttachmentActionType","ReactComposerSproutsDisplayState","UserScheduledPostsTypedLogger"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("ReactComposerActionStore"));g=c&&c.prototype;function a(){"use strict";__p&&__p();var a=void 0;g.constructor.call(this,function(){return{isActive:!1,orderedSprouts:[],serverErrorResponse:null,posting:!1,postSucceeded:!1,publishing:!1,rankerRequestID:null,sproutSurface:null,ref:null,targetType:null,sproutsDisplayState:b("ReactComposerSproutsDisplayState").INLINE,scheduledPublishTime:null,hasLoggedSproutPromotionView:!1,hasFinishedSproutPromotion:!1,shouldShowVoiceSwitcherNux:!1}},function(c){__p&&__p();switch(c.type){case b("ReactComposerActionTypes").INIT_CONFIG:a&&a.$ReactComposerStore1(c);break;case b("ReactComposerActionTypes").PUBLISH_STARTED:a&&a.$ReactComposerStore2(c);break;case b("ReactComposerAttachmentActionType").SELECT_ATTACHMENT:a&&a.$ReactComposerStore3(c);break;case b("ReactComposerActionTypes").EXPAND_SPROUTS:a&&a.$ReactComposerStore4(c);break;case b("ReactComposerActionTypes").COLLAPSE_SPROUTS:a&&a.$ReactComposerStore5(c);break;case b("ReactComposerAttachmentActionType").UPLOAD_ATTACHMENT:case b("ReactComposerScrapedAttachmentActionType").ATTACHMENT_SCRAPED:a&&a.$ReactComposerStore6(c);break;case b("ReactComposerActionTypes").SCHEDULE:a&&a.$ReactComposerStore7(c);break;case b("ReactComposerActionTypes").SET_LOGGED_SPROUT_PROMOTION_VIEW:a&&a.$ReactComposerStore8(c);break;case b("ReactComposerActionTypes").SET_FINISHED_SPROUT_PROMOTION:a&&a.$ReactComposerStore9(c);break;case b("ReactComposerActionTypes").SET_QUEUE_FINISHED_SPROUT_PROMOTION:a&&a.$ReactComposerStore10(c);break;case b("ReactComposerActionTypes").SET_SHOULD_SHOW_VOICE_SWITCHER_NUX:a&&a.$ReactComposerStore11(c);break}});a=this}a.prototype.$ReactComposerStore7=function(a){"use strict";this.getRef(a.composerID)==="timeline"&&this.getTargetType(a.composerID)==="feed"&&new(b("UserScheduledPostsTypedLogger"))().setAction("scheduled_post_submit").log();var c=this.getComposerData(a.composerID);c.scheduledPublishTime=a.scheduleDate};a.prototype.getScheduledPublishTime=function(a){"use strict";return this.getComposerData(a).scheduledPublishTime};a.prototype.getServerErrorResponse=function(a){"use strict";return this.getComposerData(a).serverErrorResponse};a.prototype.getRef=function(a){"use strict";return this.getComposerData(a).ref};a.prototype.getTargetType=function(a){"use strict";return this.getComposerData(a).targetType};a.prototype.getOrderedSprouts=function(a){"use strict";return this.getComposerData(a).orderedSprouts};a.prototype.getRankerRequestID=function(a){"use strict";return this.getComposerData(a).rankerRequestID};a.prototype.isPosting=function(a){"use strict";return this.getComposerData(a).posting};a.prototype.hasPostSucceeded=function(a){"use strict";return this.getComposerData(a).postSucceeded};a.prototype.isActive=function(a){"use strict";return this.getComposerData(a).isActive};a.prototype.isPublishing=function(a){"use strict";return this.getComposerData(a).publishing};a.prototype.getSproutsDisplayState=function(a){"use strict";return this.getComposerData(a).sproutsDisplayState};a.prototype.getSproutSurface=function(a){"use strict";a=this.getComposerData(a);return a.sproutsDisplayState===b("ReactComposerSproutsDisplayState").INLINE?a.inlineSproutSurface:a.sproutSurface};a.prototype.hasLoggedSproutPromotionView=function(a){"use strict";return this.getComposerData(a).hasLoggedSproutPromotionView};a.prototype.hasFinishedSproutPromotion=function(a){"use strict";return this.getComposerData(a).hasFinishedSproutPromotion};a.prototype.getClearSproutPromotionOnNewComposer=function(a){"use strict";return this.getComposerData(a).clearSproutPromotionOnNewComposer};a.prototype.isUploading=function(a){"use strict";return this.getComposerData(a).uploading};a.prototype.shouldShowVoiceSwitcherNux=function(a){"use strict";return this.getComposerData(a).shouldShowVoiceSwitcherNux};a.prototype.__shouldIgnoreAction=function(a){"use strict";return!1};a.prototype.__onPostStarted=function(a){"use strict";var b=this.validateAction(a,"composerID");a=this.getComposerData(a.composerID);a.posting=!0;this.emitChange(b)};a.prototype.__onPostPreprocessing=function(a){"use strict";this.__onPostStarted(a)};a.prototype.__onPostSucceeded=function(a){"use strict";var b=this.validateAction(a,"composerID");a=this.getComposerData(a.composerID);a.serverErrorResponse=null;a.posting=!1;a.postSucceeded=!0;a.publishing=!1;this.emitChange(b)};a.prototype.__onPostError=function(a){"use strict";var b=this.validateAction(a,"composerID"),c=this.getComposerData(a.composerID);c.serverErrorResponse=a.response;c.posting=!1;c.postSucceeded=!1;c.publishing=!1;this.emitChange(b)};a.prototype.__onPostFinally=function(a){"use strict";var b=this.validateAction(a,"composerID");a=this.getComposerData(a.composerID);a.posting=!1;a.publishing=!1;this.emitChange(b)};a.prototype.$ReactComposerStore1=function(a){"use strict";__p&&__p();var b=this.validateAction(a,["composerID","loggingConfig","activateOnInit"]),c=b[0],d=b[1];b=b[2];var e=this.getComposerData(c);e.ref=d.ref;e.composerVersion=d.composerVersion;e.targetType=d.targetType;e.rankerRequestID=d.rankerRequestID||null;e.sproutSurface=d.sproutSurface||null;e.inlineSproutSurface=d.inlineSproutSurface||null;e.lazySproutsExpand=a.lazySproutsExpand||!1;e.orderedSprouts=[];d=a.sproutsConfig;a=a.promotedSprout;if(d){a&&e.orderedSprouts.push(a);for(var f in d)d[f].enabled&&f!==a&&e.orderedSprouts.push(f)}b&&(this.$ReactComposerStore12(c),this.emitChange(c))};a.prototype.$ReactComposerStore8=function(a){"use strict";var b=this.validateAction(a,"composerID");a=this.getComposerData(a.composerID);a.hasLoggedSproutPromotionView=!0;this.emitChange(b)};a.prototype.$ReactComposerStore9=function(a){"use strict";var b=this.validateAction(a,"composerID");a=this.getComposerData(a.composerID);a.hasFinishedSproutPromotion=!0;a.clearSproutPromotionOnNewComposer=!0;this.emitChange(b)};a.prototype.$ReactComposerStore10=function(a){"use strict";var b=this.validateAction(a,"composerID");a=this.getComposerData(a.composerID);a.clearSproutPromotionOnNewComposer=!0;this.emitChange(b)};a.prototype.$ReactComposerStore11=function(a){"use strict";var b=this.validateAction(a,"composerID"),c=this.getComposerData(a.composerID);c.shouldShowVoiceSwitcherNux=a.value;this.emitChange(b)};a.prototype.$ReactComposerStore2=function(a){"use strict";var b=this.validateAction(a,"composerID");a=this.getComposerData(a.composerID);a.publishing=!0;this.emitChange(b)};a.prototype.$ReactComposerStore6=function(a){"use strict";var b=this.validateAction(a,"composerID"),c=this.getComposerData(a.composerID);c.uploading=a.uploading;this.emitChange(b)};a.prototype.$ReactComposerStore3=function(a){"use strict";a=this.validateAction(a,"composerID");var c=this.getComposerData(a);c.lazySproutsExpand||(c.sproutsDisplayState=b("ReactComposerSproutsDisplayState").EXPANDED);this.$ReactComposerStore12(a);this.emitChange(a)};a.prototype.$ReactComposerStore4=function(a){"use strict";a=this.validateAction(a,"composerID");var c=this.getComposerData(a);c.sproutsDisplayState=b("ReactComposerSproutsDisplayState").EXPANDED;this.emitChange(a)};a.prototype.$ReactComposerStore5=function(a){"use strict";a=this.validateAction(a,"composerID");var c=this.getComposerData(a);c.sproutsDisplayState=b("ReactComposerSproutsDisplayState").INLINE;this.emitChange(a)};a.prototype.$ReactComposerStore12=function(a){"use strict";var c=this.getComposerData(a);c.isActive||(c.isActive=!0,b("Bootloader").loadModules(["curry","Run","ReactComposerHandleUnsavedChanges","URI"],function(b,c,d,e){return c.onBeforeUnload(b(d.handler,a,e.getNextURI()))},"ReactComposerStore"))};a.prototype.__cleanup=function(a){"use strict";setTimeout(b("ReactComposerInit").resetComposer.bind(null,a.composerID),0)};e.exports=new a()}),null);
__d("ReactComposerInit",["invariant","Arbiter","React","ReactComposerEvents","ReactComposerStore","ReactComposerIDGenerator","ReactDOM"],(function(a,b,c,d,e,f,g){__p&&__p();var h={_isUnmounting:!1,instances:new Map(),changeProps:function(a,b){var c=h._getCurrentInstance(a);c.props=b;h.resetComposer(a,!0)},normalizeComposerID:function(a){a.contextConfig.composerID||(a.contextConfig.composerID=b("ReactComposerIDGenerator").getID());return a.contextConfig.composerID},init:function(a,c,d){var e=h.normalizeComposerID(c);a={ComposerModule:a,props:c,container:d,hidden:!1};this._render(a);h.instances.set(e,a);b("Arbiter").inform(b("ReactComposerEvents").INSTANCE_MOUNTED+e)},_render:function(a){var c=a.ComposerModule,d=a.props;a=a.container;b("ReactDOM").render(b("React").createElement(c,d),a)},_createNewComposer:function(a,c){a.props.config.sproutsPromotionConfig&&a.props.config.sproutsPromotionConfig.promotionID&&(b("ReactComposerStore").getClearSproutPromotionOnNewComposer(a.props.contextConfig.composerID)&&(a.props.config.sproutsPromotionConfig={})),a.props.contextConfig.composerID=b("ReactComposerIDGenerator").getID(),a.props.prefillConfig={},h.init(a.ComposerModule,a.props,c)},resetComposer:function(a){var c=h._getCurrentInstance(a);h.unmountInstance(a);c.hidden?c.container.parentNode&&c.container.parentNode.removeChild(c.container):h._createNewComposer(c,c.container);b("Arbiter").inform(b("ReactComposerEvents").COMPOSER_RESET+a,{newComposerID:c.props.contextConfig.composerID})},hideComposer:function(a){a=h._getCurrentInstance(a);a.container.style.display="none";a.hidden=!0},showComposer:function(a){a=h._getCurrentInstance(a);a.container.style.display="block";a.hidden=!1},hideAndReplaceComposer:function(a){var c=h._getCurrentInstance(a),d=c.container.cloneNode(!1);c.container.removeAttribute("id");c.container.parentNode&&c.container.parentNode.appendChild(d);this.hideComposer(a);h._createNewComposer(c,d);b("Arbiter").inform(b("ReactComposerEvents").COMPOSER_RESET+a,{newComposerID:c.props.contextConfig.composerID})},isInstanceMounted:function(a){return!!h.instances.get(a)},unmountInstance:function(a){h.isInstanceMounted(a)&&!h._isUnmounting&&(h._isUnmounting=!0,h._unmountReact(a),h._isUnmounting=!1,h.instances["delete"](a))},_unmountReact:function(a){var c=h._getCurrentInstance(a);b("ReactDOM").unmountComponentAtNode(c.container);b("Arbiter").inform(b("ReactComposerEvents").COMPOSER_UNMOUNT+a);return c},_getCurrentInstance:function(a){a=h.instances.get(a);a||g(0);return a}};e.exports=h}),null);
__d("ReactComposerFocusActions",["ReactComposerDispatcher","ReactComposerFocusActionTypes","ReactComposerStore"],(function(a,b,c,d,e,f){"use strict";b("ReactComposerStore");a={subscribe:function(a,c,d){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerFocusActionTypes").SUBSCRIBE,onFocusAcquiredCallback:c,onFocusLostCallback:d})},unsubscribe:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerFocusActionTypes").UNSUBSCRIBE})},notifyFocusAcquired:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerFocusActionTypes").FOCUS_ACQUIRED})},notifyFocusLost:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerFocusActionTypes").FOCUS_LOST})}};e.exports=a}),null);
__d("ReactComposerFocusHandleScrollAway",["Event","getActiveElement","throttle"],(function(a,b,c,d,e,f){"use strict";var g=-400,h=300;a={handler:function(a,c){var d=b("Event").listen(window,"scroll",b("throttle")(function(){var e=a.getBoundingClientRect().bottom;e<g&&(c(),b("getActiveElement")().blur(),d.remove())},h))}};e.exports=a}),null);
__d("ReactComposerFocusWrapperCore.react",["ix","cssVar","cx","fbt","Arbiter","Bootloader","CurrentUser","DOM","DOMTraverser","Event","Focus","Image.react","Keys","Link.react","React","ReactComponentWithPureRenderMixin","ReactComposerEvents","ReactComposerFocusActions","ReactComposerMediaUploadType","ReactDOM","Run","ShimButton.react","SubscriptionsHandler","TabbableElements","TabIsolation","URI","fbglyph","ifRequired","isKeyActivation","ReactComposerFocusStore"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();a=b("React").PropTypes;b("ReactComposerFocusStore");var k=parseInt("10px",10);c=b("React").createClass({displayName:"ReactComposerFocusWrapperCore",_composerID:"",_fixedHeight:0,_subscriptions:b("SubscriptionsHandler"),_firstFocus:!0,_onLeaveHandle:null,_root:null,_tabIsolation:null,mixins:[b("ReactComponentWithPureRenderMixin")],propTypes:{composerID:a.string.isRequired,ariaLabel:a.string,onDismiss:a.func.isRequired,onFocus:a.func.isRequired,focused:a.bool.isRequired,gks:a.object,onFirstFocus:a.func,fixHeight:a.bool},getDefaultProps:function(){return{focused:!1,fixHeight:!1}},UNSAFE_componentWillMount:function(){this._composerID=this.props.composerID},UNSAFE_componentWillReceiveProps:function(a){if(this.props.fixHeight&&!this.props.focused&&a.focused){a=b("ReactDOM").findDOMNode(this.refs.container);this._fixedHeight=a.offsetHeight+k}},componentDidMount:function(){this._subscriptions=new(b("SubscriptionsHandler"))(),this._subscribeComposerEvents(),this._onLeaveHandle=b("Run").onLeave(this._onLeave),this._root&&(this._tabIsolation=new(b("TabIsolation"))(this._root),this.props.focused&&this._tabIsolation.enable())},componentDidUpdate:function(a){if(!a.focused&&this.props.focused){try{var c=document.createEvent("HTMLEvents");c.initEvent&&(c.initEvent("resize",!0,!1),window.dispatchEvent(new(b("Event"))("resize")))}catch(a){}this._tabIsolation&&this._tabIsolation.enable()}else a.focused&&!this.props.focused&&(this._tabIsolation&&this._tabIsolation.disable())},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release(),this._onLeave(),this._onLeaveHandle&&this._onLeaveHandle.remove(),this._tabIsolation&&this._tabIsolation.disable(),this._tabIsolation=null},render:function(){var a=this.props.fixHeight&&this.props.focused?{height:this._fixedHeight}:null,c=this.props.focused?this._renderDismissButton():null,d=this.props.focused?this._renderBugNub():null,e=this.props.label||j._("Create a post");return b("React").createElement("div",{role:this.props.focused?"dialog":"region","aria-label":e,className:"_3u13 _3e9r"+(this.props.focused?" _3u14":"")+(this.props.focused?" _1b3n":""),ref:function(a){this._root=a}.bind(this),style:a,onKeyDown:this._onKeyDown},b("React").createElement("div",{className:"_3u15",onClick:this._onDismiss,role:"presentation"}),b("React").createElement("div",{className:"_3u16",ref:"container",onFocus:this._onFocus},this.props.children,c),d)},getComposerID:function(){return this._composerID},getComposer:function(){return this.refs.container},_renderDismissButton:function(){return b("React").createElement(b("ShimButton.react"),{className:"_3u17"+(this.props.gks&&this.props.gks.topPostButton?" _nse":"")+(this.props.gks&&this.props.gks.hasHeader?" _356d":"")+(this.props.gks&&this.props.gks.isSproutsComposer?" _3_fz":"")+(this.props.gks&&this.props.gks.wideHeader?" _37nh":""),onClick:this._onClickDismissButton,onKeyDown:this._onDismissKeyDown,role:"button","aria-label":j._("Dismiss"),tabIndex:"0"},b("React").createElement(b("Image.react"),{src:g("125922")}))},_renderBugNub:function(){if(!b("CurrentUser").isEmployee())return null;var a=new(b("URI"))("/ajax/bugs/report");return b("React").createElement("div",{className:"_t95"},b("React").createElement(b("Link.react"),{href:"#",ajaxify:a,className:"_t97",rel:"dialog"}))},_subscribeComposerEvents:function(){var a=b("Arbiter").subscribe(b("ReactComposerEvents").OPTIMISTIC_POSTING_STARTED+this._composerID,function(){this.props.onDismiss(!0)}.bind(this)),c=b("Arbiter").subscribe(b("ReactComposerEvents").POST_SUCCEEDED+this._composerID,function(){this.props.onDismiss(!0)}.bind(this)),d=b("Arbiter").subscribe("ReactFeedComposerXBootloader/focuscomposer/"+this._composerID,function(){return this._onFocus(null)}.bind(this)),e=b("Arbiter").subscribe(b("ReactComposerEvents").COMPOSER_RESET+this._composerID,function(a,c){c&&c.newComposerID&&(this.props.onDismiss(),this._composerID=c.newComposerID,this._subscriptions.release(),this._subscriptions=new(b("SubscriptionsHandler"))(),this._subscribeComposerEvents())}.bind(this));this._subscriptions.addSubscriptions(a,c,d,e)},_onFocus:function(a){if(this.props.focused||a&&a.nativeEvent.isPropagationStopped)return;this._firstFocus&&(this.props.onFirstFocus&&this.props.onFirstFocus(),this._firstFocus=!1);this.props.onFocus();b("ReactComposerFocusActions").notifyFocusAcquired(this.getComposerID())},_onKeyDown:function(a){a.keyCode===b("Keys").ESC&&!a.nativeEvent.isPropagationStopped&&this._onDismiss()},_onDismissKeyDown:function(a){b("isKeyActivation")(a)&&this._onDismiss()},_onClickDismissButton:function(){b("ifRequired")("ReactComposerMediaUploadStore",function(a){var c=a.getUploadsCount(this._composerID,b("ReactComposerMediaUploadType").VIDEO);a=a.getUploadsCount(this._composerID,b("ReactComposerMediaUploadType").PHOTO);c>0&&a===0&&b("Bootloader").loadModules(["ReactComposerVideoSurvey"],function(a){return a.showDismissalSurvey(this._composerID,c)}.bind(this),"ReactComposerFocusWrapperCore.react")}.bind(this)),this._onDismiss()},_onDismiss:function(){this._onLeave();if(this._root&&document.body){var a=b("DOMTraverser").nextFilteredNode(document.body,this._root,function(a){return!b("DOM").contains(this._root,a)&&b("TabbableElements").isTabbable(a)}.bind(this));b("Focus").set(a)}},_onLeave:function(){this.props.onDismiss(),b("ReactComposerFocusActions").notifyFocusLost(this.props.composerID)}});e.exports=c}),null);
__d("ReactComposerTaggerType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CAMERA:"CAMERA",PEOPLE:"PEOPLE",OG:"OG",CALL:"CALL",LOCATION:"LOCATION",ACTIVITY:"ACTIVITY",BACKDATE:"BACKDATE",TARGETING:"TARGETING",PUBLISHER_ABTEST_HOLDOUT:"PUBLISHER_ABTEST_HOLDOUT",SPONSOR:"SPONSOR",VAULTPHOTO:"VAULTPHOTO",MARKDOWN:"MARKDOWN",CONTENT_WARNINGS:"CONTENT_WARNINGS",PRODUCT:"PRODUCT",PAGE_CTA:"PAGE_CTA",FORMATTED_TEXT:"FORMATTED_TEXT",FORMATTED_TEXT_TRAY:"FORMATTED_TEXT_TRAY",STICKER:"STICKER",MESSAGING:"MESSAGING",POLITICAL_INFO:"POLITICAL_INFO",ISSUE_TAG:"ISSUE_TAG",CONTACT_YOUR_REPRESENTATIVE:"CONTACT_YOUR_REPRESENTATIVE",FUN_FACT:"FUN_FACT",ALBUM:"ALBUM",GIF:"GIF",FIND_PLAYERS:"FIND_PLAYERS",FUNDRAISER:"FUNDRAISER",LIST:"LIST",VISUAL_POLL:"VISUAL_POLL",RECOMMENDATION:"RECOMMENDATION",SALES_PROMO:"SALES_PROMO",TAG_EVENT:"TAG_EVENT",TAG_EVENT_TICKET:"TAG_EVENT_TICKET",BREAKING_NEWS:"BREAKING_NEWS",GROUP_MEET_UP:"GROUP_MEET_UP",ASSET_3D:"ASSET_3D",PLAY_WITH_FRIENDS:"PLAY_WITH_FRIENDS",STORIES:"STORIES",VIDEO_SUGGESTIONS:"VIDEO_SUGGESTIONS",LOCAL_ALERTS:"LOCAL_ALERTS"})}),null);
__d("ReactComposerFocusInline.react",["Arbiter","React","ReactComposerFocusHandleScrollAway","ReactComposerFocusWrapperCore.react","ReactComposerTaggerType","ReactDOM","ifRequired"],(function(a,b,c,d,e,f){__p&&__p();var g;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);g=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.state={focused:!1},this.$2=function(){var a=b("ReactDOM").findDOMNode(this.refs.focus.getComposer());b("ReactComposerFocusHandleScrollAway").handler(a,this.$1);b("ifRequired")("ReactComposerActions",function(a){this.props.gks&&this.props.gks.lazySproutsExpand||a.expandSprouts(this.$3())}.bind(this));b("ifRequired")("ReactComposerGroupPostTagsTaggerActions",function(a){a.setShowState(this.$3(),!0)}.bind(this));b("ifRequired")("ReactComposerTaggerActions",function(a){a.handleSetTaggerShowNUX(this.$3(),b("ReactComposerTaggerType").GROUP_MEET_UP,!1),a.handleSetTaggerShowNUX(this.$3(),b("ReactComposerTaggerType").VISUAL_POLL,!1)}.bind(this));this.setState({focused:!0})}.bind(this),this.$1=function(){b("Arbiter").inform("ReactComposerFocus/collapse/"+this.$3()),setTimeout(function(){this.refs.focus&&(b("ifRequired")("ReactComposerFocusActions",function(a){a.notifyFocusLost(this.$3())}.bind(this)),b("ifRequired")("ReactComposerActions",function(a){a.collapseSprouts(this.$3())}.bind(this)),b("ifRequired")("ReactComposerGroupPostTagsTaggerActions",function(a){a.setShowState(this.$3(),!1)}.bind(this)),b("ifRequired")("ReactComposerTaggerActions",function(a){b("ifRequired")("ReactComposerLoggingName",function(b){a.deselectCurrentTagger(this.$3(),b.INLINE_COMPOSER)}.bind(this))}.bind(this)))}.bind(this),0),this.setState({focused:!1})}.bind(this),c}a.prototype.componentWillUnmount=function(){"use strict";this.$1()};a.prototype.render=function(){"use strict";return b("React").createElement(b("ReactComposerFocusWrapperCore.react"),{composerID:this.props.composerID,focused:this.state.focused&&this.props.enableFocusBehavior,onFocus:this.$2,onDismiss:this.$1,onFirstFocus:this.props.onFirstFocus,gks:this.props.gks,ref:"focus"},this.props.children)};a.prototype.$3=function(){"use strict";return this.refs.focus&&this.refs.focus.getComposerID()};a.propTypes={composerID:c.string.isRequired,gks:c.object};e.exports=a}),null);