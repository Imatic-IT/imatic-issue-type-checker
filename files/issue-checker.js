!function(e){var t={};function n(u){if(t[u])return t[u].exports;var s=t[u]={i:u,l:!1,exports:{}};return e[u].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,u){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:u})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var u=Object.create(null);if(n.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(u,s,function(t){return e[t]}.bind(null,s));return u},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){window.onload=function(){let e=function(){const e=document.querySelector("#imaticIssueType");if(null!=e)return JSON.parse(e.dataset.data)}();e.issue_view_state=parseInt(e.issue_view_state);const t=document.querySelector("#bugnoteadd"),n=t.querySelector('input[type="submit"]'),u=document.querySelector("#add_public_bugnote"),s=document.querySelector("#bugnote_add_view_status"),o=document.querySelector("#bugnote_text"),i=document.getElementById("loader"),r=document.getElementById("confirm_bugnote");function c(){i.style.display="block"}function a(n=!1,u=null){const s=document.getElementById("close_bugnote_congirm_modal"),o=document.getElementById("public_issue_send_bugnote"),a=document.getElementById("send_bugnote");if(s.addEventListener("click",(function(){r.classList.remove("show"),r.classList.add("fade")})),n&&o&&function(t){e.allow_set_public_issue.allow||t.remove();e.allow_set_public_issue.change_status_access||t.remove();10==e.issue_view_state&&t.remove()}(o),n)return;r.classList.add("show"),r.classList.remove("fade");document.getElementById("bugnote_modal_confirm_message").textContent=u,o&&o.addEventListener("click",(function(n){n.target.value;$.ajax({url:e.set_issue_public_url,type:"POST",dataType:"json",success:function(e){e.affected_row&&(i.style.display="none",t.submit())},error:function(e,t,n){console.error(n)}}),c()})),a.addEventListener("click",(function(e){e.target.value;t.submit(),c()}))}a(!0),u.addEventListener("click",(function(n){switch(s.checked=!1,n.preventDefault(),o.classList.remove("bugnote-private"),e.issue_view_state){case 10:t.submit(),c();break;case 50:a(!1,e.warning_private_issue_public_bugnote.message);break;default:t.submit(),c()}})),n.addEventListener("click",(function(n){switch(n.preventDefault(),e.issue_view_state){case 10:s.checked&&e.warning_public_issue_private_bugnote.allow?a(!1,e.warning_public_issue_private_bugnote.message):(t.submit(),c());break;case 50:s.checked?(t.submit(),c()):e.warning_private_issue_public_bugnote.allow?a(!1,e.warning_private_issue_public_bugnote.message):(t.submit(),c());break;default:t.submit(),c()}})),n.insertAdjacentElement("afterend",u)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJ3aW5kb3ciLCJvbmxvYWQiLCJzZXR0aW5ncyIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiSlNPTiIsInBhcnNlIiwiZGF0YXNldCIsImRhdGEiLCJnZXRTZXR0aW5ncyIsImlzc3VlX3ZpZXdfc3RhdGUiLCJwYXJzZUludCIsImJ1Z0Zvcm0iLCJhZGRCdXR0b24iLCJhZGRQdWJsaWNCdXR0b24iLCJjaGVja0JveFZpZXdTdGF0dXMiLCJidXRub3RlVGV4dEFyZWEiLCJsb2FkZXIiLCJnZXRFbGVtZW50QnlJZCIsImNvbmZpcm1CdWdub3RlIiwic2hvd0xvYWRlciIsInN0eWxlIiwiZGlzcGxheSIsImJ1Z25vdGVDb25maXJtIiwiYWNjZXNzX2J1dHRvbnMiLCJtc2ciLCJjbG9zZUJ1dHRvbiIsInB1YmxpY0lzc3VlU2VuZEJ1Z25vdGUiLCJzZW5kQnVnbm90ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJidG4iLCJhbGxvd19zZXRfcHVibGljX2lzc3VlIiwiYWxsb3ciLCJjaGFuZ2Vfc3RhdHVzX2FjY2VzcyIsInNldFB1YmxpY0lzc3VlQnV0dG9uQWNjZXNzIiwidGV4dENvbnRlbnQiLCJlIiwidGFyZ2V0IiwiJCIsImFqYXgiLCJ1cmwiLCJzZXRfaXNzdWVfcHVibGljX3VybCIsInR5cGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJhZmZlY3RlZF9yb3ciLCJzdWJtaXQiLCJlcnJvciIsInhociIsInN0YXR1cyIsImNvbnNvbGUiLCJjaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJ3YXJuaW5nX3ByaXZhdGVfaXNzdWVfcHVibGljX2J1Z25vdGUiLCJtZXNzYWdlIiwid2FybmluZ19wdWJsaWNfaXNzdWVfcHJpdmF0ZV9idWdub3RlIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Il0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0Us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LFNBQVMsU0FBVVUsR0FNbEQsT0FMQXhCLEVBQW1CdUMsU0FBVSxFQUM3QmYsRUFBRWdCLGlCQUVGdkMsRUFBZ0JjLFVBQVVDLE9BQU8sbUJBRXpCOUIsRUFBU1Msa0JBQ2YsS0FBSyxHQUNIRSxFQUFRcUMsU0FDUjdCLElBQ0EsTUFDRixLQUFLLEdBQ0hHLEdBQ0UsRUFDQXRCLEVBQVN1RCxxQ0FBcUNDLFNBRWhELE1BQ0YsUUFDRTdDLEVBQVFxQyxTQUNSN0IsUUFNTlAsRUFBVWdCLGlCQUFpQixTQUFTLFNBQVVVLEdBRTVDLE9BREFBLEVBQUVnQixpQkFDTXRELEVBQVNTLGtCQUNmLEtBQUssR0FDQ0ssRUFBbUJ1QyxTQUNqQnJELEVBQVN5RCxxQ0FBcUN2QixNQUNoRFosR0FDRSxFQUNBdEIsRUFBU3lELHFDQUFxQ0QsVUFPbEQ3QyxFQUFRcUMsU0FDUjdCLEtBRUYsTUFDRixLQUFLLEdBQ0VMLEVBQW1CdUMsU0FXdEIxQyxFQUFRcUMsU0FDUjdCLEtBWEluQixFQUFTdUQscUNBQXFDckIsTUFDaERaLEdBQ0UsRUFDQXRCLEVBQVN1RCxxQ0FBcUNDLFVBR2hEN0MsRUFBUXFDLFNBQ1I3QixLQU1KLE1BQ0YsUUFDRVIsRUFBUXFDLFNBQ1I3QixRQUtOUCxFQUFVOEMsc0JBQXNCLFdBQVk3QyIsImZpbGUiOiJpc3N1ZS1jaGVja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZ2V0U2V0dGluZ3MoKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYXRpY0lzc3VlVHlwZVwiKTtcbiAgICBpZiAoZWwgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnBhcnNlKGVsLmRhdGFzZXQuZGF0YSk7XG4gIH1cblxuICBsZXQgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuICBzZXR0aW5ncy5pc3N1ZV92aWV3X3N0YXRlID0gcGFyc2VJbnQoc2V0dGluZ3MuaXNzdWVfdmlld19zdGF0ZSk7XG4gIGNvbnN0IGJ1Z0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1Z25vdGVhZGRcIik7XG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGJ1Z0Zvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xuICBjb25zdCBhZGRQdWJsaWNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZF9wdWJsaWNfYnVnbm90ZVwiKTtcbiAgY29uc3QgY2hlY2tCb3hWaWV3U3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWdub3RlX2FkZF92aWV3X3N0YXR1c1wiKTtcbiAgY29uc3QgYnV0bm90ZVRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWdub3RlX3RleHRcIik7XG4gIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyXCIpO1xuICBjb25zdCBjb25maXJtQnVnbm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybV9idWdub3RlXCIpO1xuXG4gIGJ1Z25vdGVDb25maXJtKHRydWUpO1xuXG4gIGFkZFB1YmxpY0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBjaGVja0JveFZpZXdTdGF0dXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGJ1dG5vdGVUZXh0QXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwiYnVnbm90ZS1wcml2YXRlXCIpO1xuXG4gICAgc3dpdGNoIChzZXR0aW5ncy5pc3N1ZV92aWV3X3N0YXRlKSB7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICBidWdGb3JtLnN1Ym1pdCgpO1xuICAgICAgICBzaG93TG9hZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1MDpcbiAgICAgICAgYnVnbm90ZUNvbmZpcm0oXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgc2V0dGluZ3Mud2FybmluZ19wcml2YXRlX2lzc3VlX3B1YmxpY19idWdub3RlLm1lc3NhZ2VcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBidWdGb3JtLnN1Ym1pdCgpO1xuICAgICAgICBzaG93TG9hZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gTGVmdCBidXR0b24sIGRlZmF1bHQgbWFudGlzIGFkZCBidWdub3RlIGJ1dHRvblxuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN3aXRjaCAoc2V0dGluZ3MuaXNzdWVfdmlld19zdGF0ZSkge1xuICAgICAgY2FzZSAxMDpcbiAgICAgICAgaWYgKGNoZWNrQm94Vmlld1N0YXR1cy5jaGVja2VkKSB7XG4gICAgICAgICAgaWYgKHNldHRpbmdzLndhcm5pbmdfcHVibGljX2lzc3VlX3ByaXZhdGVfYnVnbm90ZS5hbGxvdykge1xuICAgICAgICAgICAgYnVnbm90ZUNvbmZpcm0oXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICBzZXR0aW5ncy53YXJuaW5nX3B1YmxpY19pc3N1ZV9wcml2YXRlX2J1Z25vdGUubWVzc2FnZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVnRm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICAgIHNob3dMb2FkZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnVnRm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICBzaG93TG9hZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDUwOlxuICAgICAgICBpZiAoIWNoZWNrQm94Vmlld1N0YXR1cy5jaGVja2VkKSB7XG4gICAgICAgICAgaWYgKHNldHRpbmdzLndhcm5pbmdfcHJpdmF0ZV9pc3N1ZV9wdWJsaWNfYnVnbm90ZS5hbGxvdykge1xuICAgICAgICAgICAgYnVnbm90ZUNvbmZpcm0oXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICBzZXR0aW5ncy53YXJuaW5nX3ByaXZhdGVfaXNzdWVfcHVibGljX2J1Z25vdGUubWVzc2FnZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVnRm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICAgIHNob3dMb2FkZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnVnRm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICBzaG93TG9hZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBidWdGb3JtLnN1Ym1pdCgpO1xuICAgICAgICBzaG93TG9hZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG5cbiAgYWRkQnV0dG9uLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGFkZFB1YmxpY0J1dHRvbik7XG5cbiAgZnVuY3Rpb24gc2V0SXNzdWVQdWJsaWMoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogZ2V0VXJsKCksXG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmFmZmVjdGVkX3Jvdykge1xuICAgICAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgYnVnRm9ybS5zdWJtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dMb2FkZXIoKSB7XG4gICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRVcmwoKSB7XG4gICAgY29uc3QgdXJsID0gc2V0dGluZ3Muc2V0X2lzc3VlX3B1YmxpY191cmw7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1Z25vdGVDb25maXJtKGFjY2Vzc19idXR0b25zID0gZmFsc2UsIG1zZyA9IG51bGwpIHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VfYnVnbm90ZV9jb25naXJtX21vZGFsXCIpO1xuICAgIGNvbnN0IHB1YmxpY0lzc3VlU2VuZEJ1Z25vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwicHVibGljX2lzc3VlX3NlbmRfYnVnbm90ZVwiXG4gICAgKTtcbiAgICBjb25zdCBzZW5kQnVnbm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VuZF9idWdub3RlXCIpO1xuXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGlmIChhY2Nlc3NfYnV0dG9ucykge1xuICAgICAgaWYgKHB1YmxpY0lzc3VlU2VuZEJ1Z25vdGUpIHtcbiAgICAgICAgc2V0UHVibGljSXNzdWVCdXR0b25BY2Nlc3MocHVibGljSXNzdWVTZW5kQnVnbm90ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjY2Vzc19idXR0b25zKSByZXR1cm47XG5cbiAgICBzaG93TW9kYWwoKTtcblxuICAgIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVnbm90ZV9tb2RhbF9jb25maXJtX21lc3NhZ2VcIik7XG4gICAgbW9kYWxCb2R5LnRleHRDb250ZW50ID0gbXNnO1xuXG4gICAgaWYgKHB1YmxpY0lzc3VlU2VuZEJ1Z25vdGUpIHtcbiAgICAgIHB1YmxpY0lzc3VlU2VuZEJ1Z25vdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRCdXR0b25WYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBzZXRJc3N1ZVB1YmxpYygpO1xuICAgICAgICBzaG93TG9hZGVyKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZW5kQnVnbm90ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IGNsaWNrZWRCdXR0b25WYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgYnVnRm9ybS5zdWJtaXQoKTtcbiAgICAgIHNob3dMb2FkZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBzZXQgcHVibGljIGJ1dHRvbiBpZiB1c2VyIGRvIG5vdCBoYXZlIHBlcm1pc2lvbiB0byAgY2hhbmdlIHN0YXR1cyBvciBpdCBpcyB0dXJuIG9mZlxuICBmdW5jdGlvbiBzZXRQdWJsaWNJc3N1ZUJ1dHRvbkFjY2VzcyhidG4pIHtcbiAgICBpZiAoIXNldHRpbmdzLmFsbG93X3NldF9wdWJsaWNfaXNzdWUuYWxsb3cpIHtcbiAgICAgIGJ0bi5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYgKCFzZXR0aW5ncy5hbGxvd19zZXRfcHVibGljX2lzc3VlLmNoYW5nZV9zdGF0dXNfYWNjZXNzKSB7XG4gICAgICBidG4ucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmIChzZXR0aW5ncy5pc3N1ZV92aWV3X3N0YXRlID09IDEwKSB7XG4gICAgICBidG4ucmVtb3ZlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd01vZGFsKCkge1xuICAgIGNvbmZpcm1CdWdub3RlLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgIGNvbmZpcm1CdWdub3RlLmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBjb25maXJtQnVnbm90ZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICBjb25maXJtQnVnbm90ZS5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=