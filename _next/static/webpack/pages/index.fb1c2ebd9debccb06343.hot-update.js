webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/StartMenu.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Taskbar/StartMenu.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".StartMenu_start__m2gfe {\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 36px;\\n  height: 30px;\\n  border: none;\\n  background-color: transparent;\\n}\\n.StartMenu_start__m2gfe svg {\\n  font-size: 19px;\\n  color: #e1e1e1;\\n}\\n.StartMenu_start__m2gfe:hover {\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\\n.StartMenu_start__m2gfe:hover svg {\\n  color: #76b9ed;\\n}\\n.StartMenu_start__m2gfe.StartMenu_menuOpen__1Cs37 {\\n  background-color: rgba(64, 64, 64, 0.75);\\n}\\n\\n.StartMenu_menu__3rMGD {\\n  position: absolute;\\n  bottom: 30px;\\n  left: 0;\\n  width: 275px;\\n  height: 300px;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  -webkit-backdrop-filter: blur(10px);\\n          backdrop-filter: blur(10px);\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO {\\n  position: relative;\\n  bottom: 0;\\n  left: 0;\\n  width: 48px;\\n  height: 300px;\\n  padding-top: 4px;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO > :last-child {\\n  position: absolute;\\n  bottom: 0;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO .StartMenu_buttonSelected__2fRqQ {\\n  border-left: solid 4px #3296e4;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO figure svg {\\n  position: absolute;\\n  width: 48px;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO .StartMenu_buttonSelected__2fRqQ svg {\\n  color: #3296e4;\\n  position: relative;\\n  left: 4px;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO figure {\\n  font-size: 16px;\\n  display: flex;\\n  align-items: center;\\n  width: 200px;\\n  height: 48px;\\n  color: rgba(225, 225, 225, 0.8);\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO figure figcaption {\\n  position: relative;\\n  left: 48px;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO figure:hover {\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/System/Taskbar/StartMenu.module.scss\",\"webpack://styles/variables.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,WAAA;EACA,YAAA;EAEA,YAAA;EACA,6BAAA;AALF;AAOE;EACE,eAAA;EAEA,cCfO;ADSX;AASE;EACE,uCAAA;AAPJ;AAcI;EACE,cCjCW;ADqBjB;AAgBE;EACE,wCAAA;AAdJ;;AAkBA;EACE,kBAAA;EACA,YAAA;EACA,OAAA;EAEA,YAAA;EACA,aAAA;EAEA,oCAAA;EAEA,mCAAA;UAAA,2BAAA;AAlBF;AAoBE;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EAEA,WAAA;EACA,aAAA;EACA,gBAAA;AAnBJ;AAqBI;EACE,kBAAA;EACA,SAAA;AAnBN;AAsBI;EACE,8BAAA;AApBN;AAuBI;EACE,kBAAA;EACA,WAAA;AArBN;AAwBI;EACE,cAAA;EAEA,kBAAA;EACA,SAAA;AAvBN;AA0BI;EACE,eAAA;EAEA,aAAA;EACA,mBAAA;EAEA,YAAA;EACA,YAAA;EAEA,+BAAA;AA3BN;AA6BM;EACE,kBAAA;EACA,UAAA;AA3BR;AA8BM;EACE,uCAAA;AA5BR\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/variables';\\n\\n.start {\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  width: map-get($startmenu, width);\\n  height: map-get($taskbar, height);\\n\\n  border: none;\\n  background-color: transparent;\\n\\n  svg {\\n    font-size: 19px;\\n\\n    color: $offWhite;\\n  }\\n\\n  &:hover {\\n    background-color: hsla(\\n      0,\\n      0%,\\n      map-get($taskbar, hover-lightness),\\n      map-get($taskbar, opacity)\\n    );\\n\\n    svg {\\n      color: $highlightColor;\\n    }\\n  }\\n\\n  &.menuOpen {\\n    background-color: hsla(0, 0%, map-get($taskbar, hover-lightness), 0.75);\\n  }\\n}\\n\\n.menu {\\n  position: absolute;\\n  bottom: map-get($taskbar, height);\\n  left: 0;\\n\\n  width: 275px;\\n  height: 300px;\\n\\n  background-color: hsla(0, 0%, map-get($taskbar, base-lightness), 60%);\\n\\n  backdrop-filter: blur(map-get($taskbar, blur) * 2);\\n\\n  .buttons {\\n    position: relative;\\n    bottom: 0;\\n    left: 0;\\n\\n    width: 48px;\\n    height: 300px;\\n    padding-top: 4px;\\n\\n    > :last-child {\\n      position: absolute;\\n      bottom: 0;\\n    }\\n\\n    .buttonSelected {\\n      border-left: solid 4px darken($highlightColor, 15%);\\n    }\\n\\n    figure svg {\\n      position: absolute;\\n      width: 48px;\\n    }\\n\\n    .buttonSelected svg {\\n      color: darken($highlightColor, 15%);\\n\\n      position: relative;\\n      left: 4px;\\n    }\\n\\n    figure {\\n      font-size: 16px;\\n\\n      display: flex;\\n      align-items: center;\\n\\n      width: 200px; // 200px on animation\\n      height: 48px;\\n\\n      color: rgba($offWhite, 80%);\\n\\n      figcaption {\\n        position: relative;\\n        left: 48px;\\n      }\\n\\n      &:hover {\\n        background-color: hsla(\\n          0,\\n          0%,\\n          map-get($taskbar, hover-lightness),\\n          map-get($taskbar, opacity)\\n        );\\n      }\\n    }\\n  }\\n}\\n\",\"$highlightColor: #76b9ed;\\n$highlightColor2: rgb(200, 200, 200);\\n\\n$uiColor1: rgb(55, 55, 55);\\n$uiColor2: black;\\n\\n$offWhite: rgb(225, 225, 225);\\n\\n$minimize: rgb(255, 190, 47);\\n$minimize_active: rgb(191, 142, 35);\\n$minimize_text: rgb(153, 87, 0);\\n$maximize: rgb(40, 202, 65);\\n$maximize_active: rgb(31, 153, 49);\\n$maximize_text: rgb(0, 99, 0);\\n$close: rgb(255, 85, 78);\\n$close_active: rgb(191, 64, 59);\\n$close_text: rgb(153, 0, 0);\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\\n$fontSize: 12.5px;\\n\\n$baseZindex: 1000;\\n$zindexLevelSize: 100;\\n$iconsZindexLevel: 1;\\n$windowsZindexLevel: 2;\\n$taskbarZindexLevel: 3;\\n$foregroundZindex: ($baseZindex + $windowsZindexLevel * $zindexLevelSize) +\\n  ($zindexLevelSize / 2);\\n\\n$taskbarEntryWidth: 160px;\\n$titlebarHeight: 22px;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"start\": \"StartMenu_start__m2gfe\",\n\t\"menuOpen\": \"StartMenu_menuOpen__1Cs37\",\n\t\"menu\": \"StartMenu_menu__3rMGD\",\n\t\"buttons\": \"StartMenu_buttons__2EzaO\",\n\t\"buttonSelected\": \"StartMenu_buttonSelected__2fRqQ\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzcz84ZjEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw0QkFBNEIsdUJBQXVCLGNBQWMsWUFBWSxrQkFBa0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLGlCQUFpQixrQ0FBa0MsR0FBRywrQkFBK0Isb0JBQW9CLG1CQUFtQixHQUFHLGlDQUFpQyw0Q0FBNEMsR0FBRyxxQ0FBcUMsbUJBQW1CLEdBQUcscURBQXFELDZDQUE2QyxHQUFHLDRCQUE0Qix1QkFBdUIsaUJBQWlCLFlBQVksaUJBQWlCLGtCQUFrQix5Q0FBeUMsd0NBQXdDLHdDQUF3QyxHQUFHLG9EQUFvRCx1QkFBdUIsY0FBYyxZQUFZLGdCQUFnQixrQkFBa0IscUJBQXFCLEdBQUcsa0VBQWtFLHVCQUF1QixjQUFjLEdBQUcscUZBQXFGLG1DQUFtQyxHQUFHLCtEQUErRCx1QkFBdUIsZ0JBQWdCLEdBQUcseUZBQXlGLG1CQUFtQix1QkFBdUIsY0FBYyxHQUFHLDJEQUEyRCxvQkFBb0Isa0JBQWtCLHdCQUF3QixpQkFBaUIsaUJBQWlCLG9DQUFvQyxHQUFHLHNFQUFzRSx1QkFBdUIsZUFBZSxHQUFHLGlFQUFpRSw0Q0FBNEMsR0FBRyxPQUFPLDhJQUE4SSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxrREFBa0QsK0JBQStCLFlBQVksdUJBQXVCLGNBQWMsWUFBWSxvQkFBb0Isd0JBQXdCLDRCQUE0Qix3Q0FBd0Msc0NBQXNDLG1CQUFtQixrQ0FBa0MsV0FBVyxzQkFBc0IseUJBQXlCLEtBQUssZUFBZSx1SUFBdUksYUFBYSwrQkFBK0IsT0FBTyxLQUFLLGtCQUFrQiw4RUFBOEUsS0FBSyxHQUFHLFdBQVcsdUJBQXVCLHNDQUFzQyxZQUFZLG1CQUFtQixrQkFBa0IsNEVBQTRFLHlEQUF5RCxnQkFBZ0IseUJBQXlCLGdCQUFnQixjQUFjLG9CQUFvQixvQkFBb0IsdUJBQXVCLHVCQUF1QiwyQkFBMkIsa0JBQWtCLE9BQU8seUJBQXlCLDREQUE0RCxPQUFPLG9CQUFvQiwyQkFBMkIsb0JBQW9CLE9BQU8sNkJBQTZCLDRDQUE0Qyw2QkFBNkIsa0JBQWtCLE9BQU8sZ0JBQWdCLHdCQUF3Qix3QkFBd0IsNEJBQTRCLHVCQUF1QiwyQ0FBMkMsc0NBQXNDLHNCQUFzQiw2QkFBNkIscUJBQXFCLFNBQVMsbUJBQW1CLCtKQUErSixTQUFTLE9BQU8sS0FBSyxHQUFHLDhCQUE4Qix1Q0FBdUMsK0JBQStCLG1CQUFtQixrQ0FBa0MsaUNBQWlDLHNDQUFzQyxrQ0FBa0MsOEJBQThCLHFDQUFxQyxnQ0FBZ0MsMkJBQTJCLGtDQUFrQyw4QkFBOEIsZ01BQWdNLG9CQUFvQixzQkFBc0Isc0JBQXNCLHdCQUF3Qix1QkFBdUIseUJBQXlCLHlCQUF5Qix3R0FBd0csOEJBQThCLHdCQUF3QixxQkFBcUI7QUFDNzlLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5TdGFydE1lbnVfc3RhcnRfX20yZ2ZlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLlN0YXJ0TWVudV9zdGFydF9fbTJnZmUgc3ZnIHtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG4gIGNvbG9yOiAjZTFlMWUxO1xcbn1cXG4uU3RhcnRNZW51X3N0YXJ0X19tMmdmZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA2NCwgNjQsIDAuNSk7XFxufVxcbi5TdGFydE1lbnVfc3RhcnRfX20yZ2ZlOmhvdmVyIHN2ZyB7XFxuICBjb2xvcjogIzc2YjllZDtcXG59XFxuLlN0YXJ0TWVudV9zdGFydF9fbTJnZmUuU3RhcnRNZW51X21lbnVPcGVuX18xQ3MzNyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA2NCwgNjQsIDAuNzUpO1xcbn1cXG5cXG4uU3RhcnRNZW51X21lbnVfXzNyTUdEIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMzBweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMjc1cHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG59XFxuLlN0YXJ0TWVudV9tZW51X18zck1HRCAuU3RhcnRNZW51X2J1dHRvbnNfXzJFemFPIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogNDhweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBwYWRkaW5nLXRvcDogNHB4O1xcbn1cXG4uU3RhcnRNZW51X21lbnVfXzNyTUdEIC5TdGFydE1lbnVfYnV0dG9uc19fMkV6YU8gPiA6bGFzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxufVxcbi5TdGFydE1lbnVfbWVudV9fM3JNR0QgLlN0YXJ0TWVudV9idXR0b25zX18yRXphTyAuU3RhcnRNZW51X2J1dHRvblNlbGVjdGVkX18yZlJxUSB7XFxuICBib3JkZXItbGVmdDogc29saWQgNHB4ICMzMjk2ZTQ7XFxufVxcbi5TdGFydE1lbnVfbWVudV9fM3JNR0QgLlN0YXJ0TWVudV9idXR0b25zX18yRXphTyBmaWd1cmUgc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA0OHB4O1xcbn1cXG4uU3RhcnRNZW51X21lbnVfXzNyTUdEIC5TdGFydE1lbnVfYnV0dG9uc19fMkV6YU8gLlN0YXJ0TWVudV9idXR0b25TZWxlY3RlZF9fMmZScVEgc3ZnIHtcXG4gIGNvbG9yOiAjMzI5NmU0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNHB4O1xcbn1cXG4uU3RhcnRNZW51X21lbnVfXzNyTUdEIC5TdGFydE1lbnVfYnV0dG9uc19fMkV6YU8gZmlndXJlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC44KTtcXG59XFxuLlN0YXJ0TWVudV9tZW51X18zck1HRCAuU3RhcnRNZW51X2J1dHRvbnNfXzJFemFPIGZpZ3VyZSBmaWdjYXB0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDQ4cHg7XFxufVxcbi5TdGFydE1lbnVfbWVudV9fM3JNR0QgLlN0YXJ0TWVudV9idXR0b25zX18yRXphTyBmaWd1cmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwgNjQsIDY0LCAwLjUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLDZCQUFBO0FBTEY7QUFPRTtFQUNFLGVBQUE7RUFFQSxjQ2ZPO0FEU1g7QUFTRTtFQUNFLHVDQUFBO0FBUEo7QUFjSTtFQUNFLGNDakNXO0FEcUJqQjtBQWdCRTtFQUNFLHdDQUFBO0FBZEo7O0FBa0JBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBRUEsb0NBQUE7RUFFQSxtQ0FBQTtVQUFBLDJCQUFBO0FBbEJGO0FBb0JFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFuQko7QUFxQkk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFuQk47QUFzQkk7RUFDRSw4QkFBQTtBQXBCTjtBQXVCSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQXJCTjtBQXdCSTtFQUNFLGNBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7QUF2Qk47QUEwQkk7RUFDRSxlQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFFQSwrQkFBQTtBQTNCTjtBQTZCTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQTNCUjtBQThCTTtFQUNFLHVDQUFBO0FBNUJSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ0Avc3R5bGVzL21hcHMnO1xcbkBpbXBvcnQgJ0Avc3R5bGVzL3ZhcmlhYmxlcyc7XFxuXFxuLnN0YXJ0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgd2lkdGg6IG1hcC1nZXQoJHN0YXJ0bWVudSwgd2lkdGgpO1xcbiAgaGVpZ2h0OiBtYXAtZ2V0KCR0YXNrYmFyLCBoZWlnaHQpO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICBzdmcge1xcbiAgICBmb250LXNpemU6IDE5cHg7XFxuXFxuICAgIGNvbG9yOiAkb2ZmV2hpdGU7XFxuICB9XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYShcXG4gICAgICAwLFxcbiAgICAgIDAlLFxcbiAgICAgIG1hcC1nZXQoJHRhc2tiYXIsIGhvdmVyLWxpZ2h0bmVzcyksXFxuICAgICAgbWFwLWdldCgkdGFza2Jhciwgb3BhY2l0eSlcXG4gICAgKTtcXG5cXG4gICAgc3ZnIHtcXG4gICAgICBjb2xvcjogJGhpZ2hsaWdodENvbG9yO1xcbiAgICB9XFxuICB9XFxuXFxuICAmLm1lbnVPcGVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgbWFwLWdldCgkdGFza2JhciwgaG92ZXItbGlnaHRuZXNzKSwgMC43NSk7XFxuICB9XFxufVxcblxcbi5tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogbWFwLWdldCgkdGFza2JhciwgaGVpZ2h0KTtcXG4gIGxlZnQ6IDA7XFxuXFxuICB3aWR0aDogMjc1cHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgbWFwLWdldCgkdGFza2JhciwgYmFzZS1saWdodG5lc3MpLCA2MCUpO1xcblxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKG1hcC1nZXQoJHRhc2tiYXIsIGJsdXIpICogMik7XFxuXFxuICAuYnV0dG9ucyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICB3aWR0aDogNDhweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG5cXG4gICAgPiA6bGFzdC1jaGlsZCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uU2VsZWN0ZWQge1xcbiAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA0cHggZGFya2VuKCRoaWdobGlnaHRDb2xvciwgMTUlKTtcXG4gICAgfVxcblxcbiAgICBmaWd1cmUgc3ZnIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDQ4cHg7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvblNlbGVjdGVkIHN2ZyB7XFxuICAgICAgY29sb3I6IGRhcmtlbigkaGlnaGxpZ2h0Q29sb3IsIDE1JSk7XFxuXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGxlZnQ6IDRweDtcXG4gICAgfVxcblxcbiAgICBmaWd1cmUge1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgd2lkdGg6IDIwMHB4OyAvLyAyMDBweCBvbiBhbmltYXRpb25cXG4gICAgICBoZWlnaHQ6IDQ4cHg7XFxuXFxuICAgICAgY29sb3I6IHJnYmEoJG9mZldoaXRlLCA4MCUpO1xcblxcbiAgICAgIGZpZ2NhcHRpb24ge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbGVmdDogNDhweDtcXG4gICAgICB9XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKFxcbiAgICAgICAgICAwLFxcbiAgICAgICAgICAwJSxcXG4gICAgICAgICAgbWFwLWdldCgkdGFza2JhciwgaG92ZXItbGlnaHRuZXNzKSxcXG4gICAgICAgICAgbWFwLWdldCgkdGFza2Jhciwgb3BhY2l0eSlcXG4gICAgICAgICk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiJGhpZ2hsaWdodENvbG9yOiAjNzZiOWVkO1xcbiRoaWdobGlnaHRDb2xvcjI6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG5cXG4kdWlDb2xvcjE6IHJnYig1NSwgNTUsIDU1KTtcXG4kdWlDb2xvcjI6IGJsYWNrO1xcblxcbiRvZmZXaGl0ZTogcmdiKDIyNSwgMjI1LCAyMjUpO1xcblxcbiRtaW5pbWl6ZTogcmdiKDI1NSwgMTkwLCA0Nyk7XFxuJG1pbmltaXplX2FjdGl2ZTogcmdiKDE5MSwgMTQyLCAzNSk7XFxuJG1pbmltaXplX3RleHQ6IHJnYigxNTMsIDg3LCAwKTtcXG4kbWF4aW1pemU6IHJnYig0MCwgMjAyLCA2NSk7XFxuJG1heGltaXplX2FjdGl2ZTogcmdiKDMxLCAxNTMsIDQ5KTtcXG4kbWF4aW1pemVfdGV4dDogcmdiKDAsIDk5LCAwKTtcXG4kY2xvc2U6IHJnYigyNTUsIDg1LCA3OCk7XFxuJGNsb3NlX2FjdGl2ZTogcmdiKDE5MSwgNjQsIDU5KTtcXG4kY2xvc2VfdGV4dDogcmdiKDE1MywgMCwgMCk7XFxuXFxuJHRleHRTaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksXFxuICAwIDFweCAzcHggcmdiKDAsIDAsIDApLCAwIDFweCAzcHggcmdiKDAsIDAsIDApO1xcblxcbiR0aGlja0xpbmU6IDJweDtcXG5cXG4kZm9udFNpemU6IDEyLjVweDtcXG5cXG4kYmFzZVppbmRleDogMTAwMDtcXG4kemluZGV4TGV2ZWxTaXplOiAxMDA7XFxuJGljb25zWmluZGV4TGV2ZWw6IDE7XFxuJHdpbmRvd3NaaW5kZXhMZXZlbDogMjtcXG4kdGFza2JhclppbmRleExldmVsOiAzO1xcbiRmb3JlZ3JvdW5kWmluZGV4OiAoJGJhc2VaaW5kZXggKyAkd2luZG93c1ppbmRleExldmVsICogJHppbmRleExldmVsU2l6ZSkgK1xcbiAgKCR6aW5kZXhMZXZlbFNpemUgLyAyKTtcXG5cXG4kdGFza2JhckVudHJ5V2lkdGg6IDE2MHB4O1xcbiR0aXRsZWJhckhlaWdodDogMjJweDtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzdGFydFwiOiBcIlN0YXJ0TWVudV9zdGFydF9fbTJnZmVcIixcblx0XCJtZW51T3BlblwiOiBcIlN0YXJ0TWVudV9tZW51T3Blbl9fMUNzMzdcIixcblx0XCJtZW51XCI6IFwiU3RhcnRNZW51X21lbnVfXzNyTUdEXCIsXG5cdFwiYnV0dG9uc1wiOiBcIlN0YXJ0TWVudV9idXR0b25zX18yRXphT1wiLFxuXHRcImJ1dHRvblNlbGVjdGVkXCI6IFwiU3RhcnRNZW51X2J1dHRvblNlbGVjdGVkX18yZlJxUVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/StartMenu.module.scss\n");

/***/ })

})