webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/StartMenu.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Taskbar/StartMenu.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".StartMenu_start__m2gfe {\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 36px;\\n  height: 30px;\\n  border: none;\\n  background-color: transparent;\\n}\\n.StartMenu_start__m2gfe svg {\\n  font-size: 19px;\\n  color: #e1e1e1;\\n}\\n.StartMenu_start__m2gfe:hover {\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\\n.StartMenu_start__m2gfe:hover svg {\\n  color: #76b9ed;\\n}\\n.StartMenu_start__m2gfe.StartMenu_menuOpen__1Cs37 {\\n  background-color: rgba(64, 64, 64, 0.75);\\n}\\n\\n.StartMenu_menu__3rMGD {\\n  position: absolute;\\n  bottom: 30px;\\n  left: 0;\\n  width: 275px;\\n  height: 300px;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  -webkit-backdrop-filter: blur(10px);\\n          backdrop-filter: blur(10px);\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO {\\n  position: relative;\\n  bottom: 0;\\n  left: 0;\\n  width: 48px;\\n  height: 300px;\\n  padding-top: 4px;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO > :last-child {\\n  bottom: 0;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO .StartMenu_buttonSelected__2fRqQ {\\n  border-left: solid 4px #3296e4;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO .StartMenu_buttonSelected__2fRqQ svg {\\n  position: absolute;\\n  left: 16px;\\n  color: #3296e4;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO li {\\n  font-size: 16px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 48px;\\n  height: 48px;\\n  color: rgba(225, 225, 225, 0.8);\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO li:hover {\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/System/Taskbar/StartMenu.module.scss\",\"webpack://styles/variables.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,WAAA;EACA,YAAA;EAEA,YAAA;EACA,6BAAA;AALF;AAOE;EACE,eAAA;EAEA,cCfO;ADSX;AASE;EACE,uCAAA;AAPJ;AAcI;EACE,cCjCW;ADqBjB;AAgBE;EACE,wCAAA;AAdJ;;AAkBA;EACE,kBAAA;EACA,YAAA;EACA,OAAA;EAEA,YAAA;EACA,aAAA;EAEA,oCAAA;EAEA,mCAAA;UAAA,2BAAA;AAlBF;AAoBE;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EAEA,WAAA;EACA,aAAA;EACA,gBAAA;AAnBJ;AAqBI;EACE,SAAA;AAnBN;AAsBI;EACE,8BAAA;AApBN;AAsBM;EACE,kBAAA;EACA,UAAA;EAEA,cAAA;AArBR;AAyBI;EACE,eAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,WAAA;EACA,YAAA;EAEA,+BAAA;AA1BN;AA4BM;EACE,uCAAA;AA1BR\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/variables';\\n\\n.start {\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  width: map-get($startmenu, width);\\n  height: map-get($taskbar, height);\\n\\n  border: none;\\n  background-color: transparent;\\n\\n  svg {\\n    font-size: 19px;\\n\\n    color: $offWhite;\\n  }\\n\\n  &:hover {\\n    background-color: hsla(\\n      0,\\n      0%,\\n      map-get($taskbar, hover-lightness),\\n      map-get($taskbar, opacity)\\n    );\\n\\n    svg {\\n      color: $highlightColor;\\n    }\\n  }\\n\\n  &.menuOpen {\\n    background-color: hsla(0, 0%, map-get($taskbar, hover-lightness), 0.75);\\n  }\\n}\\n\\n.menu {\\n  position: absolute;\\n  bottom: map-get($taskbar, height);\\n  left: 0;\\n\\n  width: 275px;\\n  height: 300px;\\n\\n  background-color: hsla(0, 0%, map-get($taskbar, base-lightness), 60%);\\n\\n  backdrop-filter: blur(map-get($taskbar, blur) * 2);\\n\\n  .buttons {\\n    position: relative;\\n    bottom: 0;\\n    left: 0;\\n\\n    width: 48px;\\n    height: 300px;\\n    padding-top: 4px;\\n\\n    > :last-child {\\n      bottom: 0;\\n    }\\n\\n    .buttonSelected {\\n      border-left: solid 4px darken($highlightColor, 15%);\\n\\n      svg {\\n        position: absolute;\\n        left: 16px;\\n\\n        color: darken($highlightColor, 15%);\\n      }\\n    }\\n\\n    li {\\n      font-size: 16px;\\n\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n\\n      width: 48px;\\n      height: 48px;\\n\\n      color: rgba($offWhite, 80%);\\n\\n      &:hover {\\n        background-color: hsla(\\n          0,\\n          0%,\\n          map-get($taskbar, hover-lightness),\\n          map-get($taskbar, opacity)\\n        );\\n      }\\n    }\\n  }\\n}\\n\",\"$highlightColor: #76b9ed;\\n$highlightColor2: rgb(200, 200, 200);\\n\\n$uiColor1: rgb(55, 55, 55);\\n$uiColor2: black;\\n\\n$offWhite: rgb(225, 225, 225);\\n\\n$minimize: rgb(255, 190, 47);\\n$minimize_active: rgb(191, 142, 35);\\n$minimize_text: rgb(153, 87, 0);\\n$maximize: rgb(40, 202, 65);\\n$maximize_active: rgb(31, 153, 49);\\n$maximize_text: rgb(0, 99, 0);\\n$close: rgb(255, 85, 78);\\n$close_active: rgb(191, 64, 59);\\n$close_text: rgb(153, 0, 0);\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\\n$fontSize: 12.5px;\\n\\n$baseZindex: 1000;\\n$zindexLevelSize: 100;\\n$iconsZindexLevel: 1;\\n$windowsZindexLevel: 2;\\n$taskbarZindexLevel: 3;\\n$foregroundZindex: ($baseZindex + $windowsZindexLevel * $zindexLevelSize) +\\n  ($zindexLevelSize / 2);\\n\\n$taskbarEntryWidth: 160px;\\n$titlebarHeight: 22px;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"start\": \"StartMenu_start__m2gfe\",\n\t\"menuOpen\": \"StartMenu_menuOpen__1Cs37\",\n\t\"menu\": \"StartMenu_menu__3rMGD\",\n\t\"buttons\": \"StartMenu_buttons__2EzaO\",\n\t\"buttonSelected\": \"StartMenu_buttonSelected__2fRqQ\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzcz84ZjEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw0QkFBNEIsdUJBQXVCLGNBQWMsWUFBWSxrQkFBa0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLGlCQUFpQixrQ0FBa0MsR0FBRywrQkFBK0Isb0JBQW9CLG1CQUFtQixHQUFHLGlDQUFpQyw0Q0FBNEMsR0FBRyxxQ0FBcUMsbUJBQW1CLEdBQUcscURBQXFELDZDQUE2QyxHQUFHLDRCQUE0Qix1QkFBdUIsaUJBQWlCLFlBQVksaUJBQWlCLGtCQUFrQix5Q0FBeUMsd0NBQXdDLHdDQUF3QyxHQUFHLG9EQUFvRCx1QkFBdUIsY0FBYyxZQUFZLGdCQUFnQixrQkFBa0IscUJBQXFCLEdBQUcsa0VBQWtFLGNBQWMsR0FBRyxxRkFBcUYsbUNBQW1DLEdBQUcseUZBQXlGLHVCQUF1QixlQUFlLG1CQUFtQixHQUFHLHVEQUF1RCxvQkFBb0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQixvQ0FBb0MsR0FBRyw2REFBNkQsNENBQTRDLEdBQUcsT0FBTyw4SUFBOEksV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxrREFBa0QsK0JBQStCLFlBQVksdUJBQXVCLGNBQWMsWUFBWSxvQkFBb0Isd0JBQXdCLDRCQUE0Qix3Q0FBd0Msc0NBQXNDLG1CQUFtQixrQ0FBa0MsV0FBVyxzQkFBc0IseUJBQXlCLEtBQUssZUFBZSx1SUFBdUksYUFBYSwrQkFBK0IsT0FBTyxLQUFLLGtCQUFrQiw4RUFBOEUsS0FBSyxHQUFHLFdBQVcsdUJBQXVCLHNDQUFzQyxZQUFZLG1CQUFtQixrQkFBa0IsNEVBQTRFLHlEQUF5RCxnQkFBZ0IseUJBQXlCLGdCQUFnQixjQUFjLG9CQUFvQixvQkFBb0IsdUJBQXVCLHVCQUF1QixrQkFBa0IsT0FBTyx5QkFBeUIsNERBQTRELGVBQWUsNkJBQTZCLHFCQUFxQixnREFBZ0QsU0FBUyxPQUFPLFlBQVksd0JBQXdCLHdCQUF3Qiw0QkFBNEIsZ0NBQWdDLHNCQUFzQixxQkFBcUIsc0NBQXNDLG1CQUFtQiwrSkFBK0osU0FBUyxPQUFPLEtBQUssR0FBRyw4QkFBOEIsdUNBQXVDLCtCQUErQixtQkFBbUIsa0NBQWtDLGlDQUFpQyxzQ0FBc0Msa0NBQWtDLDhCQUE4QixxQ0FBcUMsZ0NBQWdDLDJCQUEyQixrQ0FBa0MsOEJBQThCLGdNQUFnTSxvQkFBb0Isc0JBQXNCLHNCQUFzQix3QkFBd0IsdUJBQXVCLHlCQUF5Qix5QkFBeUIsd0dBQXdHLDhCQUE4Qix3QkFBd0IscUJBQXFCO0FBQzFnSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuU3RhcnRNZW51X3N0YXJ0X19tMmdmZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5TdGFydE1lbnVfc3RhcnRfX20yZ2ZlIHN2ZyB7XFxuICBmb250LXNpemU6IDE5cHg7XFxuICBjb2xvcjogI2UxZTFlMTtcXG59XFxuLlN0YXJ0TWVudV9zdGFydF9fbTJnZmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwgNjQsIDY0LCAwLjUpO1xcbn1cXG4uU3RhcnRNZW51X3N0YXJ0X19tMmdmZTpob3ZlciBzdmcge1xcbiAgY29sb3I6ICM3NmI5ZWQ7XFxufVxcbi5TdGFydE1lbnVfc3RhcnRfX20yZ2ZlLlN0YXJ0TWVudV9tZW51T3Blbl9fMUNzMzcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwgNjQsIDY0LCAwLjc1KTtcXG59XFxuXFxuLlN0YXJ0TWVudV9tZW51X18zck1HRCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDMwcHg7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDI3NXB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxufVxcbi5TdGFydE1lbnVfbWVudV9fM3JNR0QgLlN0YXJ0TWVudV9idXR0b25zX18yRXphTyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG59XFxuLlN0YXJ0TWVudV9tZW51X18zck1HRCAuU3RhcnRNZW51X2J1dHRvbnNfXzJFemFPID4gOmxhc3QtY2hpbGQge1xcbiAgYm90dG9tOiAwO1xcbn1cXG4uU3RhcnRNZW51X21lbnVfXzNyTUdEIC5TdGFydE1lbnVfYnV0dG9uc19fMkV6YU8gLlN0YXJ0TWVudV9idXR0b25TZWxlY3RlZF9fMmZScVEge1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDRweCAjMzI5NmU0O1xcbn1cXG4uU3RhcnRNZW51X21lbnVfXzNyTUdEIC5TdGFydE1lbnVfYnV0dG9uc19fMkV6YU8gLlN0YXJ0TWVudV9idXR0b25TZWxlY3RlZF9fMmZScVEgc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDE2cHg7XFxuICBjb2xvcjogIzMyOTZlNDtcXG59XFxuLlN0YXJ0TWVudV9tZW51X18zck1HRCAuU3RhcnRNZW51X2J1dHRvbnNfXzJFemFPIGxpIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNDhweDtcXG4gIGhlaWdodDogNDhweDtcXG4gIGNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuOCk7XFxufVxcbi5TdGFydE1lbnVfbWVudV9fM3JNR0QgLlN0YXJ0TWVudV9idXR0b25zX18yRXphTyBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA2NCwgNjQsIDAuNSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvU3RhcnRNZW51Lm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsNkJBQUE7QUFMRjtBQU9FO0VBQ0UsZUFBQTtFQUVBLGNDZk87QURTWDtBQVNFO0VBQ0UsdUNBQUE7QUFQSjtBQWNJO0VBQ0UsY0NqQ1c7QURxQmpCO0FBZ0JFO0VBQ0Usd0NBQUE7QUFkSjs7QUFrQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFFQSxvQ0FBQTtFQUVBLG1DQUFBO1VBQUEsMkJBQUE7QUFsQkY7QUFvQkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQW5CSjtBQXFCSTtFQUNFLFNBQUE7QUFuQk47QUFzQkk7RUFDRSw4QkFBQTtBQXBCTjtBQXNCTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLGNBQUE7QUFyQlI7QUF5Qkk7RUFDRSxlQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLCtCQUFBO0FBMUJOO0FBNEJNO0VBQ0UsdUNBQUE7QUExQlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnQC9zdHlsZXMvbWFwcyc7XFxuQGltcG9ydCAnQC9zdHlsZXMvdmFyaWFibGVzJztcXG5cXG4uc3RhcnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICB3aWR0aDogbWFwLWdldCgkc3RhcnRtZW51LCB3aWR0aCk7XFxuICBoZWlnaHQ6IG1hcC1nZXQoJHRhc2tiYXIsIGhlaWdodCk7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gIHN2ZyB7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG5cXG4gICAgY29sb3I6ICRvZmZXaGl0ZTtcXG4gIH1cXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKFxcbiAgICAgIDAsXFxuICAgICAgMCUsXFxuICAgICAgbWFwLWdldCgkdGFza2JhciwgaG92ZXItbGlnaHRuZXNzKSxcXG4gICAgICBtYXAtZ2V0KCR0YXNrYmFyLCBvcGFjaXR5KVxcbiAgICApO1xcblxcbiAgICBzdmcge1xcbiAgICAgIGNvbG9yOiAkaGlnaGxpZ2h0Q29sb3I7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYubWVudU9wZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCBtYXAtZ2V0KCR0YXNrYmFyLCBob3Zlci1saWdodG5lc3MpLCAwLjc1KTtcXG4gIH1cXG59XFxuXFxuLm1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiBtYXAtZ2V0KCR0YXNrYmFyLCBoZWlnaHQpO1xcbiAgbGVmdDogMDtcXG5cXG4gIHdpZHRoOiAyNzVweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCBtYXAtZ2V0KCR0YXNrYmFyLCBiYXNlLWxpZ2h0bmVzcyksIDYwJSk7XFxuXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIobWFwLWdldCgkdGFza2JhciwgYmx1cikgKiAyKTtcXG5cXG4gIC5idXR0b25zIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcblxcbiAgICA+IDpsYXN0LWNoaWxkIHtcXG4gICAgICBib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvblNlbGVjdGVkIHtcXG4gICAgICBib3JkZXItbGVmdDogc29saWQgNHB4IGRhcmtlbigkaGlnaGxpZ2h0Q29sb3IsIDE1JSk7XFxuXFxuICAgICAgc3ZnIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDE2cHg7XFxuXFxuICAgICAgICBjb2xvcjogZGFya2VuKCRoaWdobGlnaHRDb2xvciwgMTUlKTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgbGkge1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgd2lkdGg6IDQ4cHg7XFxuICAgICAgaGVpZ2h0OiA0OHB4O1xcblxcbiAgICAgIGNvbG9yOiByZ2JhKCRvZmZXaGl0ZSwgODAlKTtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoXFxuICAgICAgICAgIDAsXFxuICAgICAgICAgIDAlLFxcbiAgICAgICAgICBtYXAtZ2V0KCR0YXNrYmFyLCBob3Zlci1saWdodG5lc3MpLFxcbiAgICAgICAgICBtYXAtZ2V0KCR0YXNrYmFyLCBvcGFjaXR5KVxcbiAgICAgICAgKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIkaGlnaGxpZ2h0Q29sb3I6ICM3NmI5ZWQ7XFxuJGhpZ2hsaWdodENvbG9yMjogcmdiKDIwMCwgMjAwLCAyMDApO1xcblxcbiR1aUNvbG9yMTogcmdiKDU1LCA1NSwgNTUpO1xcbiR1aUNvbG9yMjogYmxhY2s7XFxuXFxuJG9mZldoaXRlOiByZ2IoMjI1LCAyMjUsIDIyNSk7XFxuXFxuJG1pbmltaXplOiByZ2IoMjU1LCAxOTAsIDQ3KTtcXG4kbWluaW1pemVfYWN0aXZlOiByZ2IoMTkxLCAxNDIsIDM1KTtcXG4kbWluaW1pemVfdGV4dDogcmdiKDE1MywgODcsIDApO1xcbiRtYXhpbWl6ZTogcmdiKDQwLCAyMDIsIDY1KTtcXG4kbWF4aW1pemVfYWN0aXZlOiByZ2IoMzEsIDE1MywgNDkpO1xcbiRtYXhpbWl6ZV90ZXh0OiByZ2IoMCwgOTksIDApO1xcbiRjbG9zZTogcmdiKDI1NSwgODUsIDc4KTtcXG4kY2xvc2VfYWN0aXZlOiByZ2IoMTkxLCA2NCwgNTkpO1xcbiRjbG9zZV90ZXh0OiByZ2IoMTUzLCAwLCAwKTtcXG5cXG4kdGV4dFNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KSxcXG4gIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjc1KSxcXG4gIDAgMXB4IDNweCByZ2IoMCwgMCwgMCksIDAgMXB4IDNweCByZ2IoMCwgMCwgMCk7XFxuXFxuJHRoaWNrTGluZTogMnB4O1xcblxcbiRmb250U2l6ZTogMTIuNXB4O1xcblxcbiRiYXNlWmluZGV4OiAxMDAwO1xcbiR6aW5kZXhMZXZlbFNpemU6IDEwMDtcXG4kaWNvbnNaaW5kZXhMZXZlbDogMTtcXG4kd2luZG93c1ppbmRleExldmVsOiAyO1xcbiR0YXNrYmFyWmluZGV4TGV2ZWw6IDM7XFxuJGZvcmVncm91bmRaaW5kZXg6ICgkYmFzZVppbmRleCArICR3aW5kb3dzWmluZGV4TGV2ZWwgKiAkemluZGV4TGV2ZWxTaXplKSArXFxuICAoJHppbmRleExldmVsU2l6ZSAvIDIpO1xcblxcbiR0YXNrYmFyRW50cnlXaWR0aDogMTYwcHg7XFxuJHRpdGxlYmFySGVpZ2h0OiAyMnB4O1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInN0YXJ0XCI6IFwiU3RhcnRNZW51X3N0YXJ0X19tMmdmZVwiLFxuXHRcIm1lbnVPcGVuXCI6IFwiU3RhcnRNZW51X21lbnVPcGVuX18xQ3MzN1wiLFxuXHRcIm1lbnVcIjogXCJTdGFydE1lbnVfbWVudV9fM3JNR0RcIixcblx0XCJidXR0b25zXCI6IFwiU3RhcnRNZW51X2J1dHRvbnNfXzJFemFPXCIsXG5cdFwiYnV0dG9uU2VsZWN0ZWRcIjogXCJTdGFydE1lbnVfYnV0dG9uU2VsZWN0ZWRfXzJmUnFRXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/StartMenu.module.scss\n");

/***/ })

})