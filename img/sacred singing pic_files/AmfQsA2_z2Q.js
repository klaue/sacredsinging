if (self.CavalryLogger) { CavalryLogger.start_js(["u797T"]); }

__d("ReactSelectorUtils",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={processMenuItems:function(a,c){var d=arguments.length<=2||arguments[2]===undefined?!1:arguments[2],e=void 0,f=b("React").Children.map(a,function(a){if(a){var d=a.props.value===c;a=b("React").cloneElement(a,{selected:d});d&&(e=a);return a}});return{items:f,selectedItem:e}},processMultiMenuItems:function(a,c){__p&&__p();var d=arguments.length<=2||arguments[2]===undefined?!1:arguments[2],e=[],f=a;c&&(f=b("React").Children.map(a,function(a){if(a){var d=c.some(function(b){return b===a.props.value});a=b("React").cloneElement(a,{selected:d});d&&e.push(a);return a}}));return{items:f,selectedItems:e}}};e.exports=a}),null);
__d("Alignment",["invariant","DOMVector","Style","containsNode"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a,b,c){"use strict";this.$1=b,this.$2=c,this.$3=a}h.prototype.getElement=function(){"use strict";return this.$3};h.prototype.getX=function(){"use strict";return this.$1};h.prototype.getY=function(){"use strict";return this.$2};h.prototype.isCorner=function(){"use strict";return(this.$1===h.LEFT||this.$1===h.RIGHT)&&(this.$2===h.TOP||this.$2===h.BOTTOM)};h.prototype.getPosition=function(a){"use strict";return b("DOMVector").getElementPosition(this.$3,a).add(this.getX()*this.$3.offsetWidth,this.getY()*this.$3.offsetHeight)};Object.assign(h,{LEFT:0,CENTER:.5,RIGHT:1,TOP:0,MIDDLE:.5,BOTTOM:1});function i(a,c,d){"use strict";this.$1=a,this.$2=c,this.$3=d,b("containsNode")(a.getElement(),c.getElement())||g(0),a.isCorner()||g(0)}i.prototype.align=function(){"use strict";i.$4(this.$1,function(){return i.measure(this.$2,this.$3)}.bind(this))};i.$4=function(a,c){"use strict";var d=a.getElement();b("Style").apply(d,{left:a.getX()===h.LEFT?"0":"",right:a.getX()===h.RIGHT?"0":"",top:a.getY()===h.TOP?"0":"",bottom:a.getY()===h.BOTTOM?"0":""});c=c();a.getX()===h.LEFT?b("Style").set(d,"left",c.x+"px"):a.getX()===h.RIGHT&&b("Style").set(d,"right",-c.x+"px");a.getY()===h.TOP?b("Style").set(d,"top",c.y+"px"):a.getY()===h.BOTTOM&&b("Style").set(d,"bottom",-c.y+"px")};i.position=function(a,c){"use strict";i.$4(a,function(){var d=b("DOMVector").getElementPosition(a.getElement());return c.convertTo("document").sub(d)})};i.measure=function(a,b){"use strict";a=a.getPosition("document");b=b.getPosition("document");return b.sub(a)};i.Anchor=h;e.exports=i}),null);
__d("SingleSelectorBase",["csx","cx","invariant","ArbiterMixin","Alignment","BehaviorsMixin","Button","CSS","DOM","DOMQuery","Event","Layer","LayerBounds","Locale","Rect","ParameterizedPopover","PopoverMenu","Scroll","SelectableMenuUtils","Style","getOverlayZIndex","mixin","throttle"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j,k=b("Alignment").Anchor,l=b("Locale").isRTL()?k.RIGHT:k.LEFT,m={},n=16;c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin"),b("BehaviorsMixin")));j=c&&c.prototype;function a(a,c,d,e){"use strict";j.constructor.call(this),this.$SingleSelectorBase1=a,this.$SingleSelectorBase2=null,this.$SingleSelectorBase3=m,this.$SingleSelectorBase4=b("DOM").create("div",{}),this.$SingleSelectorBase5=new(b("Layer"))({classNames:["_5xew"]},this.$SingleSelectorBase4),this.$SingleSelectorBase6=new(b("ParameterizedPopover"))(a.parentNode,a,[],babelHelpers["extends"]({},d,{layer:this.$SingleSelectorBase5})),this.$SingleSelectorBase6.subscribe("show",this.$SingleSelectorBase7.bind(this)),this.$SingleSelectorBase6.subscribe("hide",this.$SingleSelectorBase8.bind(this)),this.$SingleSelectorBase9=new(b("PopoverMenu"))(this.$SingleSelectorBase6,a,c,[]),this.setMenu(c),e&&e.behaviors&&this.enableBehaviors(e.behaviors)}a.prototype.$SingleSelectorBase7=function(){"use strict";__p&&__p();this.$SingleSelectorBase10();this.$SingleSelectorBase11();b("CSS").conditionClass(this.$SingleSelectorBase5.getRoot(),"_5xex",this.$SingleSelectorBase12());b("Style").set(this.$SingleSelectorBase5.getRoot(),"min-width",this.$SingleSelectorBase1.offsetWidth+n+"px");var a=b("DOM").scry(this.$SingleSelectorBase4,"div.uiScrollableAreaWrap")[0];if(a){var c=b("Alignment").measure(new k(this.$SingleSelectorBase13(),l,k.MIDDLE),new k(this.$SingleSelectorBase2.getRoot(),l,k.MIDDLE));b("Scroll").setTop(a,b("Scroll").getTop(a)-c.y)}this.align();this.getMenu().focusAnItem();this.$SingleSelectorBase14||(this.$SingleSelectorBase14=b("Event").listen(window,"resize",b("throttle")(this.align.bind(this))));this.inform("show")};a.prototype.$SingleSelectorBase8=function(){"use strict";this.$SingleSelectorBase14&&(this.$SingleSelectorBase14.remove(),this.$SingleSelectorBase14=null),this.inform("hide")};a.prototype.$SingleSelectorBase15=function(a,b){"use strict";this.$SingleSelectorBase16=null,this.$SingleSelectorBase17||this.inform("change",b)};a.prototype.isShown=function(){"use strict";return this.$SingleSelectorBase6.isShown()};a.prototype.setValue=function(a){"use strict";this.isShown()?this.$SingleSelectorBase18(a,!1):(this.$SingleSelectorBase3=a,this.$SingleSelectorBase19=!1)};a.prototype.setValueWithoutChange=function(a){"use strict";this.isShown()?this.$SingleSelectorBase18(a,!0):(this.$SingleSelectorBase3=a,this.$SingleSelectorBase19=!0)};a.prototype.$SingleSelectorBase11=function(){"use strict";this.$SingleSelectorBase3!==m&&(this.$SingleSelectorBase18(this.$SingleSelectorBase3,this.$SingleSelectorBase19),this.$SingleSelectorBase3=m)};a.prototype.$SingleSelectorBase18=function(a,b){"use strict";this.$SingleSelectorBase17=b,this.$SingleSelectorBase2.setValue(a),this.$SingleSelectorBase17=null};a.prototype.getValue=function(){"use strict";return this.getSelectedItem().getValue()};a.prototype.getLayer=function(){"use strict";return this.$SingleSelectorBase5};a.prototype.getButton=function(){"use strict";return this.$SingleSelectorBase1};a.prototype.setMenu=function(a){"use strict";this.isShown()?this.$SingleSelectorBase20(a):this.$SingleSelectorBase21=a};a.prototype.$SingleSelectorBase10=function(){"use strict";this.$SingleSelectorBase21&&(this.$SingleSelectorBase20(this.$SingleSelectorBase21),this.$SingleSelectorBase21=null)};a.prototype.$SingleSelectorBase20=function(a){"use strict";a!==this.$SingleSelectorBase2&&(this.$SingleSelectorBase2=a,this.$SingleSelectorBase22&&this.$SingleSelectorBase22.unsubscribe(),this.$SingleSelectorBase22=this.$SingleSelectorBase2.subscribe("change",this.$SingleSelectorBase15.bind(this)),b("DOM").setContent(this.$SingleSelectorBase4,a.getRoot()),this.$SingleSelectorBase9.setMenu(a),this.$SingleSelectorBase16=null)};a.prototype.getMenu=function(){"use strict";return this.$SingleSelectorBase21||this.$SingleSelectorBase2};a.prototype.enable=function(){"use strict";b("Button").setEnabled(this.$SingleSelectorBase1,!0),this.$SingleSelectorBase6.enable()};a.prototype.disable=function(){"use strict";b("Button").setEnabled(this.$SingleSelectorBase1,!1),this.$SingleSelectorBase6.disable()};a.prototype.$SingleSelectorBase12=function(){"use strict";return b("Style").isFixed(this.$SingleSelectorBase1)&&!b("Style").isFixed(this.$SingleSelectorBase5.getRoot().parentNode)};a.prototype.align=function(){"use strict";__p&&__p();this.$SingleSelectorBase16||(this.$SingleSelectorBase16=this.getAlignment());this.$SingleSelectorBase16.align();var a=b("Rect").getElementBounds(this.$SingleSelectorBase2.getRoot()),c=b("LayerBounds").getViewportRectForContext(this.$SingleSelectorBase1),d=a.t-c.t,e=c.b-a.b,f=a.l-c.l;c=c.r-a.r;a=this.$SingleSelectorBase5.getRoot();d<10?o(a,"top",-d+10):e<10&&o(a,"top",e-10);f<10?o(a,"left",-f+10):c<10&&o(a,"left",c-10);d=b("getOverlayZIndex")(this.$SingleSelectorBase1,this.$SingleSelectorBase5.getInsertParent());b("Style").set(this.$SingleSelectorBase5.getRoot(),"z-index",d>200?d:"")};a.prototype.getAlignment=function(){"use strict";return new(b("Alignment"))(new k(this.$SingleSelectorBase5.getRoot(),k.TOP,k.LEFT),new k(this.$SingleSelectorBase13(),l,k.MIDDLE),new k(this.$SingleSelectorBase23(),l,k.MIDDLE))};a.prototype.$SingleSelectorBase23=function(){"use strict";return b("DOMQuery").find(this.$SingleSelectorBase1,"._55pe")};a.prototype.getSelectedItem=function(){"use strict";var a=null;this.$SingleSelectorBase3!==m?this.getMenu().forEachItem(function(b){b.getValue()===this.$SingleSelectorBase3&&(a===null||i(0),a=b)}.bind(this)):this.getMenu().forEachItem(function(c){b("SelectableMenuUtils").isSelected(c)&&(a===null||i(0),a=c)});a!==null||i(0);return a};a.prototype.$SingleSelectorBase13=function(){"use strict";return b("DOMQuery").find(this.getSelectedItem().getRoot(),"._54nh")};a.prototype.destroy=function(){"use strict";this.$SingleSelectorBase2&&this.$SingleSelectorBase2.destroy(),this.$SingleSelectorBase9.destroy(),this.$SingleSelectorBase6.destroy(),this.$SingleSelectorBase5.destroy()};function o(a,c,d){b("Style").set(a,c,b("Style").getFloat(a,c)+d+"px")}e.exports=a}),null);
__d("XUISingleSelectorButton.react",["ix","Image.react","React","XUIPopoverButton.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("XUIPopoverButton.react"),babelHelpers["extends"]({},this.props,{chevron:b("React").createElement(b("Image.react"),{src:g("101343")})}))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("XUISingleSelector.react",["InlineBlock.react","React","ReactDOM","ReactSelectorUtils","ReactXUIMenu","SingleSelectorBase","SubscriptionsHandler","XUISingleSelectorButton.react","areEqual","cloneWithProps_DEPRECATED"],(function(a,b,c,d,e,f){__p&&__p();var g;c=b("React").PropTypes;var h=b("ReactXUIMenu").SelectableMenu;d=b("ReactXUIMenu").SelectableItem;f=babelHelpers.inherits(a,b("React").Component);g=f&&f.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=null,this.$2=null,this.$3=null,this.flattenMenuItems=function(){return b("React").Children.toArray(this.props.children).filter(function(a){return a})}.bind(this),this.processMenuItems=function(){return b("ReactSelectorUtils").processMenuItems(this.flattenMenuItems(),this.getValue())}.bind(this),this.setMenuValue=function(a){this.$2.setValueWithoutChange(a)}.bind(this),this.getValue=function(){return this.props.value!==undefined?this.props.value:this.state.value}.bind(this),this.onChange=function(a,b){this.props.value===undefined?this.setState({value:b.value}):this.setMenuValue(this.props.value),this.props.onChange&&this.props.onChange(b)}.bind(this),this.$4=function(){var a=b("React").createElement(h,{className:this.props.menuClassName,maxheight:this.props.maxheight},this.processMenuItems().items);return new a.type(a.props)}.bind(this),this.state={value:this.props.value!==undefined?this.props.value:this.props.defaultValue!==undefined?this.props.defaultValue:this.flattenMenuItems()[0].props.value},c}a.prototype.UNSAFE_componentWillReceiveProps=function(){"use strict";this.props.value!==undefined&&this.setState({value:this.props.value})};a.prototype.componentDidMount=function(){"use strict";var a=b("ReactDOM").findDOMNode(this.refs.button);this.$2=new(b("SingleSelectorBase"))(a,this.$4(),{disabled:this.props.disabled},{behaviors:this.props.behaviors});this.$3=new(b("SubscriptionsHandler"))();this.$3.addSubscriptions(this.$2.subscribe("change",this.onChange));this.props.onShow&&this.$3.addSubscriptions(this.$2.subscribe("show",this.props.onShow));this.props.onHide&&this.$3.addSubscriptions(this.$2.subscribe("hide",this.props.onHide))};a.prototype.componentDidUpdate=function(a){"use strict";(!b("areEqual")(a.children,this.props.children)||a.maxheight!==this.props.maxheight)&&this.$2.setMenu(this.$4()),a.disabled!==this.props.disabled&&(!this.props.disabled?this.$2.enable():this.$2.disable()),this.setMenuValue(this.getValue())};a.prototype.componentWillUnmount=function(){"use strict";this.$2.destroy(),this.$3&&(this.$3.release(),this.$3=null)};a.prototype.render=function(){"use strict";var a=this.processMenuItems().selectedItem,c;a=a?a.props:{};a.icon&&(c=b("cloneWithProps_DEPRECATED")(a.icon,{}));var d={ref:"button",label:a.label||a.children,image:c},e=void 0;this.props.customButton?e=b("React").cloneElement(this.props.customButton,d):e=b("React").createElement(b("XUISingleSelectorButton.react"),babelHelpers["extends"]({},d,{disabled:this.props.disabled,size:this.props.size,suppressed:this.props.suppressed,maxwidth:this.props.maxwidth}));return b("React").createElement(b("InlineBlock.react"),babelHelpers["extends"]({},this.props,{alignv:"middle"}),b("React").createElement("input",{type:"hidden",autoComplete:"off",name:this.props.name,value:a.value}),e)};a.propTypes={name:c.string,maxheight:c.number,maxwidth:c.number,menuClassName:c.string,defaultValue:c.any,disabled:c.bool,size:c.oneOf(["small","medium","large","xlarge","xxlarge"]),suppressed:c.bool,value:c.any,onChange:c.func,onShow:c.func,onHide:c.func,behaviors:c.array,customButton:c.element};a.defaultProps={disabled:!1,size:"medium"};a.Option=d;e.exports=a}),null);
__d("DeviceBasedLoginWWWQP",["CSS","Event","tidyEvent"],(function(a,b,c,d,e,f){"use strict";a={swapWithShadowMessageOnClick:function(a,c,d){b("tidyEvent")(b("Event").listen(a,"click",function(a){b("CSS").hide(c),b("CSS").show(d)}))}};e.exports=a}),null);
__d("XAsyncRequest",["AsyncRequest"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=new(b("AsyncRequest"))(a)}a.prototype.setURI=function(a){"use strict";this.$1.setURI(a);return this};a.prototype.setMethod=function(a){"use strict";this.$1.setMethod(a);return this};a.prototype.setData=function(a){"use strict";this.$1.setData(a);return this};a.prototype.setHandler=function(a){"use strict";this.$1.setHandler(a);return this};a.prototype.setPayloadHandler=function(a){"use strict";this.setHandler(function(b){return a(b.payload)});return this};a.prototype.setErrorHandler=function(a){"use strict";this.$1.setErrorHandler(a);return this};a.prototype.send=function(){"use strict";this.$1.send();return this};a.prototype.abort=function(){"use strict";this.$1.abort()};a.prototype.setReadOnly=function(a){"use strict";this.$1.setReadOnly(a);return this};a.prototype.setAllowCrossOrigin=function(a){"use strict";this.$1.setAllowCrossOrigin(a);return this};e.exports=a}),null);
__d("unmountComponentOnTransition",["Arbiter","BanzaiODS","ContextualComponent","PageEvents","ReactDOM","emptyFunction","gkx","requestIdleCallbackAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=null;function i(a){g.unshift(a),j()}function j(){if(h!==null)return;h=b("requestIdleCallbackAcrossTransitions")(function(a){h=null;while(g.length>0&&a.timeRemaining()>0)b("ReactDOM").unmountComponentAtNode(g.pop());g.length>0&&j()})}function k(a,c){b("BanzaiODS").bumpEntityKey("core.www.react_component_register_unmount",a+"."+c)}function a(a,c){__p&&__p();function d(){a!=null&&Object.prototype.hasOwnProperty.call(a,"setState")&&(a.setState=b("emptyFunction"),a.shouldComponentUpdate=b("emptyFunction").thatReturnsFalse),i(c)}var e=!1;if(b("gkx")("AT4euSAb9ucJ-mvy2B4qCIEzHbi9fPt5oSZg-HycySob9uDymhk4Q221DQFX6AUkUEJeKX-5Rgkee7LOxtDiqS_-95bd8aqBbEX2gulgx_9dTw")){var f=b("ContextualComponent").closestToNode(c);if(f!=null){k("contextual_component","found");f.onUnmount(function(){d()});return}e=!0}e?k("contextual_component","not_found_fallback"):k("arbiter","default");var g=b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,function(a,b){a=b.canvasID;if(a!=="content"&&a!=="content_container")return;d();g.unsubscribe()})}e.exports=a}),null);
__d("QPEventHandling",[],(function(a,b,c,d,e,f){"use strict";a={registerClickListener:function(a,b,c){a.addEventListener("click",c)}};e.exports=a}),null);
__d("LayerFadeOnHide",["invariant","CSSFade","Layer","SubscriptionsHandler","UserAgent_DEPRECATED","clearTimeout","emptyFunction","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){"use strict";this._layer=a,this._subscriptionsHandler=new(b("SubscriptionsHandler"))()}h.prototype.enable=function(){"use strict";if(b("UserAgent_DEPRECATED").ie()<9)return;this._subscription=this._layer.subscribe("starthide",this._handleStartHide.bind(this))};h.prototype.disable=function(){"use strict";this._subscription&&(this._subscription.unsubscribe(),this._subscription=null),this._subscriptionsHandler.release()};h.prototype._getDuration=function(){"use strict";return 150};h.prototype._handleStartHide=function(){"use strict";__p&&__p();var a=!0,c=b("Layer").subscribe("show",function(){c.unsubscribe(),a=!1}),d=b("setTimeoutAcrossTransitions")(function(){c.unsubscribe();c=null;var b=function(){this._layer.finishHide()}.bind(this);a?this._animate(b):b()}.bind(this),0);this._subscriptionsHandler.addSubscriptions({remove:function(){b("clearTimeout")(d)}});return!1};h.prototype._animate=function(a){"use strict";var c=this._layer.getRoot();c!=null||g(0);b("CSSFade").hide(c,{callback:function(){a()},duration:this._getDuration()})};h.forDuration=function(a){var c;c=babelHelpers.inherits(d,h);c&&c.prototype;function d(){c.apply(this,arguments)}d.prototype._getDuration=b("emptyFunction").thatReturns(a);return d};Object.assign(h.prototype,{_subscription:null});e.exports=h}),null);
__d("VideoStateDirectory",["EventEmitter","VideoPlayerExperiments"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("EventEmitter"));g=c&&c.prototype;function a(){"use strict";g.constructor.call(this),this.$VideoStateDirectory1=new Map()}a.prototype.setPlaybackState=function(a,c,d){"use strict";var e=this.$VideoStateDirectory1.get(a)||{};e.currentTimePosition=c;e.playbackDuration=d;e.watched=e.currentTimePosition/e.playbackDuration>=b("VideoPlayerExperiments").watchedPercentage/100||!!e.watched;this.$VideoStateDirectory1.set(a,e);this.emit(a,e)};a.prototype.setSaveState=function(a,b){"use strict";var c=this.$VideoStateDirectory1.get(a)||{};c.saved=b;this.emit(a,c)};a.prototype.setSubscriptionState=function(a,b){"use strict";var c=this.$VideoStateDirectory1.get(a)||{};c.subscribed=b;this.emit(a,c)};a.prototype.getState=function(a){"use strict";return this.$VideoStateDirectory1.get(a)};e.exports=new a()}),null);
__d("VideoPlayerOrigins",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:"unknown",NEWSFEED:"newsfeed",USER_TIMELINE:"user_timeline",PAGE_TIMELINE:"page_timeline",PARENT_PAGE_TIMELINE:"parent_page_timeline",PERMALINK:"permalink",GROUP:"group",CONNECTED_TV:"connected_tv",CONNECTED_TV_DISCOVERY:"connected_tv_discovery",CONNECTED_TV_PLAYER:"connected_tv_player",CONNECTED_TV_PROFILE:"connected_tv_profile",CONNECTED_TV_SAMSUNG_EDEN_TILE:"connected_tv_samsung_eden_tile",CONNECTED_TV_SAMSUNG_LC:"connected_tv_samsung_lc",SOCIAL_PLAYER:"social_player",VIDEO_HOME:"video_home",VIDEO_HOME_FEED:"video_home_feed",VIDEO_HOME_REACTION:"video_home_reaction",VIDEO_HOME_MAIN:"video_home_main",VIDEO_HOME_GUIDE:"video_home_guide",VIDEO_TAB:"video_tab",EXTERNAL:"external",INSTANT_ARTICLES:"instant_articles",INTERN:"intern",BACKSTAGE:"backstage",INSTANT_SHOPPING:"instant_shopping",REDSPACE:"redspace",SAVED:"saved",SEARCH:"search",NOTIFICATIONS:"notifications",LIVE_CONTROL_PANEL:"live_control_panel",LIVE_DISCOVERY:"live_discovery",LIVE_MAP:"live_map",LIVE_REDIRECT:"live_redirect",LIVE_EMBED_REDIRECT:"live_embed_redirect",LOCAL_NEWS:"local_news",MOVIE_CHECKOUT_FLOW:"movie_checkout_flow",PAGES_MODULE:"pages_module",PAGES_VIDEO_TAB:"pages_video_tab",BUSINESS_PAGE_VIDEO_EDUCATION_UNIT:"business_page_video_education_unit",BUSINESS_PAGE_VIDEO_EDUCATION_DIALOG:"business_page_video_education_dialog",PROMOTIONS_MANAGER_INSPIRATION_GALLERY:"promotions_manager_inspiration_gallery",BACKGROUND_PLAY:"background_play",QUICK_PROMOTION:"quick_promotion",CULTURAL_MOMENTS_SHARE:"cultural_moments_share",CULTURAL_MOMENTS_PROMOTION:"cm_promotion",DAILY_DIALOGUE_PINNED_UNIT:"dd_pinned",SPHERIAL_VIDEO_EDITING:"spherial_video_editing",EXPLORE_FEED:"explorefeed",RHC:"rhc",ADS:"ads",CANVAS:"canvas",COMMERCE:"commerce",COMPOSER:"composer",DASH:"dash",FACEWEB:"faceweb",FEEDBACK:"feedback",FRIENDS:"friends",EVENTS:"events",HELP:"help",INFRASTRUCTURE:"infrastructure",LOGIN:"login",MARKETING:"marketing",MESSAGING:"messaging",NAVIGATION:"navigation",PHOTOS:"photos",PRIVACY:"privacy",SETTINGS:"settings",STORY_VIEW:"story_view",WEBVIEW:"webview",TRENDING:"trending",FACECAST_NUX:"facecast_nux",PIXELCLOUD:"pixelcloud",PROTON:"proton",TAROT:"tarot",GAMEROOM:"gameroom",GAMES_VIDEO_HUB:"games_video_hub",LEARN:"learn",BEEPER:"beeper",FACECAST_BEEPER:"facecast_beeper",JOB_SEARCH:"job_search",TOP_LIVE_BOOKMARK:"top_live_bookmark",AUTODOWNLOAD:"autodownload",FB_STORIES:"fb_stories",DIRECT_INBOX:"direct_inbox",COMMENT:"comment",LIVE_VIDEO_END_SCREEN:"live_video_end_screen",MEDIA_GALLERY:"media_gallery",MOMENTS:"moments",PHOTOSFEED:"photosfeed",SIMPLE_PICKER:"simple_picker",VIDEO_EDITING_GALLERY:"video_editing_gallery",ALBUM:"album",OFFERS:"offers",MESSENGER_THREAD:"messenger_thread",MESSENGER_MONTAGE:"messenger_montage",MESSENGER_GIF:"messenger_gif",SHARED_VIDEO:"shared_video",VISUAL_POLL_GIF:"visual_poll_gif",LIVING_ROOM:"living_room",LIVE_CHAINING:"live_chaining",BRANDED_CONTENT:"branded_content",LIVING_ROOM_RECAP:"living_room_recap",POLITICAL_AD_ARCHIVE:"political_ad_archive"})}),null);
__d("ReactRenderer",["invariant","React","ReactDOM","$","nullthrows","unmountComponentOnTransition"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=8;function i(a,c,d){a=b("ReactDOM").render(a,c,d);b("unmountComponentOnTransition")(a,c);return a}function j(a,c,d,e){a=b("React").createElement(a,c);return i(a,d,e)}function k(a,c,d,e){a=b("React").createElement(a,c);return l(a,d,e)}function l(a,c,d){return b("ReactDOM").render(a,c,d)}function a(a,c,d,e){return j(a,c,b("$")(d),e)}function c(a,c,d,e){return k(a,c,b("$")(d),e)}function d(a){__p&&__p();var c=a.constructor,d=a.props,e=a.bigPipeContext,f=a.dummyDeferredElement,g=a.acrossTransitions,h=a.preloader,i=e?e.registerToBlockDisplayUntilDone_DONOTUSE():function(){},j=document.createElement("div");g||(d.ref=function(a){b("unmountComponentOnTransition")(a,j)});var k=b("React").createElement(c,d);a=b("ReactDOM").unstable_createRoot(j);var l=a.createBatch(),m=function(){return l.render(k)};h!=null?(function(){var a=h.getContextProvider();a&&(m=function(){l.render(b("React").createElement(a,{value:h},k))});h.onLoaded(m).onError(m)})():m();l.then(function(){f.then(function(a){n(a,j),l.commit()}),i()})}function m(a,c,d,e,f){__p&&__p();var g=f?f.getContextProvider():null;g&&(a=b("React").createElement(g,{value:f},a));g=d?l:i;if(e){f=b("nullthrows")(c.parentNode,"Error: container doesn't have a parent");return g(a,f)}d=document.createComment(" react-mount-point-unstable ");n(c,d);return g(a,d)}function f(a){var c=a.constructor,d=a.props,e=a.dummyElem,f=a.acrossTransitions,g=a.clobberSiblings;a=a.preloader;return m(b("React").createElement(c,d),e,f,g,a)}function n(a,c){a.tagName==="NOSCRIPT"||g(0);var d=b("nullthrows")(a.parentNode,"Error: container doesn't have a parent"),e=a.previousSibling;if(e&&e.nodeType===h&&e.nodeValue===" end-react-placeholder "){do d.removeChild(e),e=b("nullthrows")(a.previousSibling,"Error: malformed placeholder");while(!(e.nodeType===h&&e.nodeValue===" begin-react-placeholder "));d.removeChild(e)}d.replaceChild(c,a)}e.exports={renderComponent:i,constructAndRenderAsyncComponentIntoComment_DO_NOT_USE:d,constructAndRenderComponent:j,constructAndRenderComponentByID:a,constructAndRenderComponentAcrossTransitions:k,constructAndRenderComponentByIDAcrossTransitions:c,constructAndRenderComponentIntoComment_DO_NOT_USE:f,constructAndRenderElementIntoComment_DO_NOT_USE:m,constructAndRenderComponent_DEPRECATED:k,constructAndRenderComponentByID_DEPRECATED:c}}),null);
__d("XQuickPromotionSimpleLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/qp/action/log/",{qp_id:{type:"Int",required:!0},qp_action:{type:"Enum",enumType:1},qp_instance_log_data:{type:"StringToStringMap",defaultValue:{}},qp_event:{type:"String"}})}),null);
__d("QPRenderer",["csx","CSS","FBLogger","Parent","QPEventHandling","XAsyncRequest","XQuickPromotionSimpleLoggingController","ge"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,event,c){a=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setString("qp_event",event).setStringToStringMap("qp_instance_log_data",c).getURI();new(b("XAsyncRequest"))(a).send()}function a(a,c,d){a=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setEnum("qp_action",c).setStringToStringMap("qp_instance_log_data",d).getURI();new(b("XAsyncRequest"))(a).send()}function c(a,c,d,e,f,g){e=b("ge")(e);e!==null?i(a,d,e,g,function(){f&&b("CSS").hide(c)}):b("FBLogger")("quick_promotion").mustfix("Quick Promotion %s is missing %s action element.",a,d)}function d(a,c,d,e,f){i(a,c,d,f,function(){if(e){var a=b("Parent").bySelector(d,"._5jmm");a instanceof HTMLElement&&b("CSS").hide(a)}})}function e(a,c,d){c.show();h(a,"view",{});c.subscribe("cancel",function(){h(a,"dialog_cancel",{})});for(var e=0;e<d.length;e++){var f=d[e],g=b("ge")(f.element_id);g!==null?(i(a,f.action,g,f.extra_log_data,f.should_close?function(){c.hide()}:function(){}),f.action=="primary"&&g.focus()):b("FBLogger")("quick_promotion").mustfix("Quick Promotion %s is missing %s action element.",a,f.action)}}function i(a,c,d,e,f){b("QPEventHandling").registerClickListener(d,c,function(){var d=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setEnum("qp_action",c).setStringToStringMap("qp_instance_log_data",e).getURI();new(b("XAsyncRequest"))(d).send();f()})}f.setAction=c;f.setComponentActionForFeedUnitQP=d;f.setDialogActionsAndShow=e;f.logAction=a;f.logEvent=h}),null);
__d("XVanityURLController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{vanity}/",{and:{type:"String"},filter:{type:"Int"},sk:{type:"String",defaultValue:"timeline"},v:{type:"String"},vanity:{type:"String",required:!0},__xts__:{type:"StringVector"},__tn__:{type:"String"}})}),null);