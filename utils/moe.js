const Moe={initialize:e=>{var a=e.app_id,d=e.debug_logs||0,o=e.cluster||"DC_1",n=e.disable_onsite||!1,i=e.enableSPA||!1,t=e.cards,s=e.swPath||"/serviceworker.js";if(window&&document&&!window.Moengage){var _=document.createElement("script");_.type="text/javascript",_.text=`(function(i,s,o,g,r,a,m,n){i.moengage_object=r;t={};q=function(f){return function(){(i.moengage_q=i.moengage_q||[]).push({f:f,a:arguments})}};f=['track_event','add_user_attribute','add_first_name','add_last_name','add_email','add_mobile','add_user_name','add_gender','add_birthday','destroy_session','add_unique_user_id','moe_events','call_web_push','track','location_type_attribute', 'setDebugLevel'],h={onsite:["getData","registerCallback"]};for(k\n        in f){t[f[k]]=q(f[k])}for(k in h)for(l in h[k]){null==t[k]&&(t[k]={}),t[k][h[k][l]]=q(k+"."+h[k][l])}a=s.createElement(o);m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);i.moe=i.moe||function(){n=arguments[0];return t};a.onload=function(){if(n){i[r]=moe(n)}}})(window,document,'script','https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js','Moengage')\n        Moengage = moe({\n          app_id: "${a}",\n          debug_logs: ${d},\n          swPath: "${s}",\n          cluster: "${o}",\n          disableOnsite: ${n},\n          enableSPA: ${i},\n          cards: ${t||null}\n        });\n      `,document.head.appendChild(_)}},isMoeLoaded:()=>{try{if(window&&document&&window.Moengage)return!0}catch(e){return!1}return!1},track_event:(e,a)=>Moe.isMoeLoaded()&&window.Moengage.track_event(e,a),getSdkVersion:()=>Moe.isMoeLoaded()&&window.Moengage.getSdkVersion(),setDebugLevel:e=>Moe.isMoeLoaded()&&window.Moengage.setDebugLevel(e),add_unique_user_id:e=>Moe.isMoeLoaded()&&window.Moengage.add_unique_user_id(e),update_unique_user_id:e=>Moe.isMoeLoaded()&&window.Moengage.update_unique_user_id(e),add_user_attribute:(e,a)=>Moe.isMoeLoaded()&&window.Moengage.add_user_attribute(e,a),add_first_name:e=>Moe.isMoeLoaded()&&window.Moengage.add_first_name(e),add_last_name:e=>Moe.isMoeLoaded()&&window.Moengage.add_last_name(e),add_email:e=>Moe.isMoeLoaded()&&window.Moengage.add_email(e),add_mobile:e=>Moe.isMoeLoaded()&&window.Moengage.add_mobile(e),add_user_name:e=>Moe.isMoeLoaded()&&window.Moengage.add_user_name(e),add_gender:e=>Moe.isMoeLoaded()&&window.Moengage.add_gender(e),add_birthday:e=>Moe.isMoeLoaded()&&window.Moengage.add_birthday(e),destroy_session:()=>Moe.isMoeLoaded()&&window.Moengage.destroy_session(),call_web_push:e=>Moe.isMoeLoaded()&&window.Moengage.call_web_push(e),track_page_view:()=>Moe.isMoeLoaded()&&window.Moengage.track_page_view(),push_to_q:()=>{(window.moengage_q=window.moengage_q||[]).push({f:"track_event",a:[CONSTANTS.EVENTS.IMPRESSION,{campaign_id:campaign.id,...campaign.context}]})}};

export default Moe;