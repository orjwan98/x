webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/StartMenu.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Taskbar/StartMenu.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".StartMenu_start__m2gfe {\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 36px;\\n  height: 30px;\\n  border: none;\\n  background-color: transparent;\\n}\\n.StartMenu_start__m2gfe svg {\\n  font-size: 19px;\\n  color: #e1e1e1;\\n}\\n.StartMenu_start__m2gfe:hover {\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\\n.StartMenu_start__m2gfe:hover svg {\\n  color: #76b9ed;\\n}\\n.StartMenu_start__m2gfe.StartMenu_menuOpen__1Cs37 {\\n  background-color: rgba(64, 64, 64, 0.75);\\n}\\n\\n.StartMenu_menu__3rMGD {\\n  position: absolute;\\n  bottom: 30px;\\n  left: 0;\\n  width: 275px;\\n  height: 300px;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  -webkit-backdrop-filter: blur(10px);\\n          backdrop-filter: blur(10px);\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO {\\n  z-index: 99999;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  -webkit-backdrop-filter: blur(15px);\\n          backdrop-filter: blur(15px);\\n  position: relative;\\n  bottom: 0;\\n  left: 0;\\n  width: 200px;\\n  height: 300px;\\n  padding-top: 4px;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO > :last-child {\\n  position: absolute;\\n  bottom: 0;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO .StartMenu_buttonSelected__2fRqQ {\\n  border-left: solid 4px #3296e4;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO figure svg {\\n  position: absolute;\\n  width: 48px;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO .StartMenu_buttonSelected__2fRqQ svg {\\n  color: #3296e4;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO figure {\\n  font-size: 16px;\\n  display: flex;\\n  align-items: center;\\n  width: 200px;\\n  height: 48px;\\n  color: rgba(225, 225, 225, 0.8);\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO figure figcaption {\\n  position: relative;\\n  left: 48px;\\n}\\n.StartMenu_menu__3rMGD .StartMenu_buttons__2EzaO figure:hover {\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/System/Taskbar/StartMenu.module.scss\",\"webpack://styles/variables.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,WAAA;EACA,YAAA;EAEA,YAAA;EACA,6BAAA;AALF;AAOE;EACE,eAAA;EAEA,cCfO;ADSX;AASE;EACE,uCAAA;AAPJ;AAcI;EACE,cCjCW;ADqBjB;AAgBE;EACE,wCAAA;AAdJ;;AAkBA;EACE,kBAAA;EACA,YAAA;EACA,OAAA;EAEA,YAAA;EACA,aAAA;EAEA,oCAAA;EAEA,mCAAA;UAAA,2BAAA;AAlBF;AAoBE;EACE,cAAA;EACA,oCAAA;EACA,mCAAA;UAAA,2BAAA;EAEA,kBAAA;EACA,SAAA;EACA,OAAA;EAEA,YAAA;EACA,aAAA;EACA,gBAAA;AApBJ;AAsBI;EACE,kBAAA;EACA,SAAA;AApBN;AAuBI;EACE,8BAAA;AArBN;AAwBI;EACE,kBAAA;EACA,WAAA;AAtBN;AAyBI;EACE,cAAA;AAvBN;AA0BI;EACE,eAAA;EAEA,aAAA;EACA,mBAAA;EAEA,YAAA;EACA,YAAA;EAEA,+BAAA;AA3BN;AA6BM;EACE,kBAAA;EACA,UAAA;AA3BR;AA8BM;EACE,uCAAA;AA5BR\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/variables';\\n\\n.start {\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n\\n  width: map-get($startmenu, width);\\n  height: map-get($taskbar, height);\\n\\n  border: none;\\n  background-color: transparent;\\n\\n  svg {\\n    font-size: 19px;\\n\\n    color: $offWhite;\\n  }\\n\\n  &:hover {\\n    background-color: hsla(\\n      0,\\n      0%,\\n      map-get($taskbar, hover-lightness),\\n      map-get($taskbar, opacity)\\n    );\\n\\n    svg {\\n      color: $highlightColor;\\n    }\\n  }\\n\\n  &.menuOpen {\\n    background-color: hsla(0, 0%, map-get($taskbar, hover-lightness), 0.75);\\n  }\\n}\\n\\n.menu {\\n  position: absolute;\\n  bottom: map-get($taskbar, height);\\n  left: 0;\\n\\n  width: 275px;\\n  height: 300px;\\n\\n  background-color: hsla(0, 0%, map-get($taskbar, base-lightness), 60%);\\n\\n  backdrop-filter: blur(map-get($taskbar, blur) * 2);\\n\\n  .buttons {\\n    z-index: 99999; // on hovered\\n    background-color: hsla(0, 0%, map-get($taskbar, base-lightness), 60%); // on hovered\\n    backdrop-filter: blur(15px); // on hovered\\n\\n    position: relative;\\n    bottom: 0;\\n    left: 0;\\n\\n    width: 200px; // 200px on animation\\n    height: 300px;\\n    padding-top: 4px;\\n\\n    > :last-child {\\n      position: absolute;\\n      bottom: 0;\\n    }\\n\\n    .buttonSelected {\\n      border-left: solid 4px darken($highlightColor, 15%);\\n    }\\n\\n    figure svg {\\n      position: absolute;\\n      width: 48px;\\n    }\\n\\n    .buttonSelected svg {\\n      color: darken($highlightColor, 15%);\\n    }\\n\\n    figure {\\n      font-size: 16px;\\n\\n      display: flex;\\n      align-items: center;\\n\\n      width: 200px; // 200px on animation\\n      height: 48px;\\n\\n      color: rgba($offWhite, 80%);\\n\\n      figcaption {\\n        position: relative;\\n        left: 48px;\\n      }\\n\\n      &:hover {\\n        background-color: hsla(\\n          0,\\n          0%,\\n          map-get($taskbar, hover-lightness),\\n          map-get($taskbar, opacity)\\n        );\\n      }\\n    }\\n  }\\n}\\n\",\"$highlightColor: #76b9ed;\\n$highlightColor2: rgb(200, 200, 200);\\n\\n$uiColor1: rgb(55, 55, 55);\\n$uiColor2: black;\\n\\n$offWhite: rgb(225, 225, 225);\\n\\n$minimize: rgb(255, 190, 47);\\n$minimize_active: rgb(191, 142, 35);\\n$minimize_text: rgb(153, 87, 0);\\n$maximize: rgb(40, 202, 65);\\n$maximize_active: rgb(31, 153, 49);\\n$maximize_text: rgb(0, 99, 0);\\n$close: rgb(255, 85, 78);\\n$close_active: rgb(191, 64, 59);\\n$close_text: rgb(153, 0, 0);\\n\\n$textShadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5),\\n  0 1px 2px rgba(0, 0, 0, 0.75), 0 1px 2px rgba(0, 0, 0, 0.75),\\n  0 1px 3px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0);\\n\\n$thickLine: 2px;\\n\\n$fontSize: 12.5px;\\n\\n$baseZindex: 1000;\\n$zindexLevelSize: 100;\\n$iconsZindexLevel: 1;\\n$windowsZindexLevel: 2;\\n$taskbarZindexLevel: 3;\\n$foregroundZindex: ($baseZindex + $windowsZindexLevel * $zindexLevelSize) +\\n  ($zindexLevelSize / 2);\\n\\n$taskbarEntryWidth: 160px;\\n$titlebarHeight: 22px;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"start\": \"StartMenu_start__m2gfe\",\n\t\"menuOpen\": \"StartMenu_menuOpen__1Cs37\",\n\t\"menu\": \"StartMenu_menu__3rMGD\",\n\t\"buttons\": \"StartMenu_buttons__2EzaO\",\n\t\"buttonSelected\": \"StartMenu_buttonSelected__2fRqQ\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzcz84ZjEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw0QkFBNEIsdUJBQXVCLGNBQWMsWUFBWSxrQkFBa0Isd0JBQXdCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLGlCQUFpQixrQ0FBa0MsR0FBRywrQkFBK0Isb0JBQW9CLG1CQUFtQixHQUFHLGlDQUFpQyw0Q0FBNEMsR0FBRyxxQ0FBcUMsbUJBQW1CLEdBQUcscURBQXFELDZDQUE2QyxHQUFHLDRCQUE0Qix1QkFBdUIsaUJBQWlCLFlBQVksaUJBQWlCLGtCQUFrQix5Q0FBeUMsd0NBQXdDLHdDQUF3QyxHQUFHLG9EQUFvRCxtQkFBbUIseUNBQXlDLHdDQUF3Qyx3Q0FBd0MsdUJBQXVCLGNBQWMsWUFBWSxpQkFBaUIsa0JBQWtCLHFCQUFxQixHQUFHLGtFQUFrRSx1QkFBdUIsY0FBYyxHQUFHLHFGQUFxRixtQ0FBbUMsR0FBRywrREFBK0QsdUJBQXVCLGdCQUFnQixHQUFHLHlGQUF5RixtQkFBbUIsR0FBRywyREFBMkQsb0JBQW9CLGtCQUFrQix3QkFBd0IsaUJBQWlCLGlCQUFpQixvQ0FBb0MsR0FBRyxzRUFBc0UsdUJBQXVCLGVBQWUsR0FBRyxpRUFBaUUsNENBQTRDLEdBQUcsT0FBTyw4SUFBOEksV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLGtEQUFrRCwrQkFBK0IsWUFBWSx1QkFBdUIsY0FBYyxZQUFZLG9CQUFvQix3QkFBd0IsNEJBQTRCLHdDQUF3QyxzQ0FBc0MsbUJBQW1CLGtDQUFrQyxXQUFXLHNCQUFzQix5QkFBeUIsS0FBSyxlQUFlLHVJQUF1SSxhQUFhLCtCQUErQixPQUFPLEtBQUssa0JBQWtCLDhFQUE4RSxLQUFLLEdBQUcsV0FBVyx1QkFBdUIsc0NBQXNDLFlBQVksbUJBQW1CLGtCQUFrQiw0RUFBNEUseURBQXlELGdCQUFnQixxQkFBcUIsMEZBQTBGLGdEQUFnRCx5Q0FBeUMsZ0JBQWdCLGNBQWMscUJBQXFCLDBDQUEwQyx1QkFBdUIsdUJBQXVCLDJCQUEyQixrQkFBa0IsT0FBTyx5QkFBeUIsNERBQTRELE9BQU8sb0JBQW9CLDJCQUEyQixvQkFBb0IsT0FBTyw2QkFBNkIsNENBQTRDLE9BQU8sZ0JBQWdCLHdCQUF3Qix3QkFBd0IsNEJBQTRCLHVCQUF1QiwyQ0FBMkMsc0NBQXNDLHNCQUFzQiw2QkFBNkIscUJBQXFCLFNBQVMsbUJBQW1CLCtKQUErSixTQUFTLE9BQU8sS0FBSyxHQUFHLDhCQUE4Qix1Q0FBdUMsK0JBQStCLG1CQUFtQixrQ0FBa0MsaUNBQWlDLHNDQUFzQyxrQ0FBa0MsOEJBQThCLHFDQUFxQyxnQ0FBZ0MsMkJBQTJCLGtDQUFrQyw4QkFBOEIsZ01BQWdNLG9CQUFvQixzQkFBc0Isc0JBQXNCLHdCQUF3Qix1QkFBdUIseUJBQXlCLHlCQUF5Qix3R0FBd0csOEJBQThCLHdCQUF3QixxQkFBcUI7QUFDbHZMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1N0YXJ0TWVudS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5TdGFydE1lbnVfc3RhcnRfX20yZ2ZlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDM2cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLlN0YXJ0TWVudV9zdGFydF9fbTJnZmUgc3ZnIHtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG4gIGNvbG9yOiAjZTFlMWUxO1xcbn1cXG4uU3RhcnRNZW51X3N0YXJ0X19tMmdmZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA2NCwgNjQsIDAuNSk7XFxufVxcbi5TdGFydE1lbnVfc3RhcnRfX20yZ2ZlOmhvdmVyIHN2ZyB7XFxuICBjb2xvcjogIzc2YjllZDtcXG59XFxuLlN0YXJ0TWVudV9zdGFydF9fbTJnZmUuU3RhcnRNZW51X21lbnVPcGVuX18xQ3MzNyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA2NCwgNjQsIDAuNzUpO1xcbn1cXG5cXG4uU3RhcnRNZW51X21lbnVfXzNyTUdEIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMzBweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMjc1cHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG59XFxuLlN0YXJ0TWVudV9tZW51X18zck1HRCAuU3RhcnRNZW51X2J1dHRvbnNfXzJFemFPIHtcXG4gIHotaW5kZXg6IDk5OTk5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG59XFxuLlN0YXJ0TWVudV9tZW51X18zck1HRCAuU3RhcnRNZW51X2J1dHRvbnNfXzJFemFPID4gOmxhc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbn1cXG4uU3RhcnRNZW51X21lbnVfXzNyTUdEIC5TdGFydE1lbnVfYnV0dG9uc19fMkV6YU8gLlN0YXJ0TWVudV9idXR0b25TZWxlY3RlZF9fMmZScVEge1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDRweCAjMzI5NmU0O1xcbn1cXG4uU3RhcnRNZW51X21lbnVfXzNyTUdEIC5TdGFydE1lbnVfYnV0dG9uc19fMkV6YU8gZmlndXJlIHN2ZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNDhweDtcXG59XFxuLlN0YXJ0TWVudV9tZW51X18zck1HRCAuU3RhcnRNZW51X2J1dHRvbnNfXzJFemFPIC5TdGFydE1lbnVfYnV0dG9uU2VsZWN0ZWRfXzJmUnFRIHN2ZyB7XFxuICBjb2xvcjogIzMyOTZlNDtcXG59XFxuLlN0YXJ0TWVudV9tZW51X18zck1HRCAuU3RhcnRNZW51X2J1dHRvbnNfXzJFemFPIGZpZ3VyZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNDhweDtcXG4gIGNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuOCk7XFxufVxcbi5TdGFydE1lbnVfbWVudV9fM3JNR0QgLlN0YXJ0TWVudV9idXR0b25zX18yRXphTyBmaWd1cmUgZmlnY2FwdGlvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA0OHB4O1xcbn1cXG4uU3RhcnRNZW51X21lbnVfXzNyTUdEIC5TdGFydE1lbnVfYnV0dG9uc19fMkV6YU8gZmlndXJlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsIDY0LCA2NCwgMC41KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci9TdGFydE1lbnUubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7RUFDQSw2QkFBQTtBQUxGO0FBT0U7RUFDRSxlQUFBO0VBRUEsY0NmTztBRFNYO0FBU0U7RUFDRSx1Q0FBQTtBQVBKO0FBY0k7RUFDRSxjQ2pDVztBRHFCakI7QUFnQkU7RUFDRSx3Q0FBQTtBQWRKOztBQWtCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLG9DQUFBO0VBRUEsbUNBQUE7VUFBQSwyQkFBQTtBQWxCRjtBQW9CRTtFQUNFLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQXBCSjtBQXNCSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQXBCTjtBQXVCSTtFQUNFLDhCQUFBO0FBckJOO0FBd0JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBdEJOO0FBeUJJO0VBQ0UsY0FBQTtBQXZCTjtBQTBCSTtFQUNFLGVBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLCtCQUFBO0FBM0JOO0FBNkJNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBM0JSO0FBOEJNO0VBQ0UsdUNBQUE7QUE1QlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnQC9zdHlsZXMvbWFwcyc7XFxuQGltcG9ydCAnQC9zdHlsZXMvdmFyaWFibGVzJztcXG5cXG4uc3RhcnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICB3aWR0aDogbWFwLWdldCgkc3RhcnRtZW51LCB3aWR0aCk7XFxuICBoZWlnaHQ6IG1hcC1nZXQoJHRhc2tiYXIsIGhlaWdodCk7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gIHN2ZyB7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG5cXG4gICAgY29sb3I6ICRvZmZXaGl0ZTtcXG4gIH1cXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKFxcbiAgICAgIDAsXFxuICAgICAgMCUsXFxuICAgICAgbWFwLWdldCgkdGFza2JhciwgaG92ZXItbGlnaHRuZXNzKSxcXG4gICAgICBtYXAtZ2V0KCR0YXNrYmFyLCBvcGFjaXR5KVxcbiAgICApO1xcblxcbiAgICBzdmcge1xcbiAgICAgIGNvbG9yOiAkaGlnaGxpZ2h0Q29sb3I7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYubWVudU9wZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCBtYXAtZ2V0KCR0YXNrYmFyLCBob3Zlci1saWdodG5lc3MpLCAwLjc1KTtcXG4gIH1cXG59XFxuXFxuLm1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiBtYXAtZ2V0KCR0YXNrYmFyLCBoZWlnaHQpO1xcbiAgbGVmdDogMDtcXG5cXG4gIHdpZHRoOiAyNzVweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCBtYXAtZ2V0KCR0YXNrYmFyLCBiYXNlLWxpZ2h0bmVzcyksIDYwJSk7XFxuXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIobWFwLWdldCgkdGFza2JhciwgYmx1cikgKiAyKTtcXG5cXG4gIC5idXR0b25zIHtcXG4gICAgei1pbmRleDogOTk5OTk7IC8vIG9uIGhvdmVyZWRcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgbWFwLWdldCgkdGFza2JhciwgYmFzZS1saWdodG5lc3MpLCA2MCUpOyAvLyBvbiBob3ZlcmVkXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTsgLy8gb24gaG92ZXJlZFxcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgd2lkdGg6IDIwMHB4OyAvLyAyMDBweCBvbiBhbmltYXRpb25cXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG5cXG4gICAgPiA6bGFzdC1jaGlsZCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uU2VsZWN0ZWQge1xcbiAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA0cHggZGFya2VuKCRoaWdobGlnaHRDb2xvciwgMTUlKTtcXG4gICAgfVxcblxcbiAgICBmaWd1cmUgc3ZnIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDQ4cHg7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvblNlbGVjdGVkIHN2ZyB7XFxuICAgICAgY29sb3I6IGRhcmtlbigkaGlnaGxpZ2h0Q29sb3IsIDE1JSk7XFxuICAgIH1cXG5cXG4gICAgZmlndXJlIHtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgIHdpZHRoOiAyMDBweDsgLy8gMjAwcHggb24gYW5pbWF0aW9uXFxuICAgICAgaGVpZ2h0OiA0OHB4O1xcblxcbiAgICAgIGNvbG9yOiByZ2JhKCRvZmZXaGl0ZSwgODAlKTtcXG5cXG4gICAgICBmaWdjYXB0aW9uIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGxlZnQ6IDQ4cHg7XFxuICAgICAgfVxcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYShcXG4gICAgICAgICAgMCxcXG4gICAgICAgICAgMCUsXFxuICAgICAgICAgIG1hcC1nZXQoJHRhc2tiYXIsIGhvdmVyLWxpZ2h0bmVzcyksXFxuICAgICAgICAgIG1hcC1nZXQoJHRhc2tiYXIsIG9wYWNpdHkpXFxuICAgICAgICApO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIiRoaWdobGlnaHRDb2xvcjogIzc2YjllZDtcXG4kaGlnaGxpZ2h0Q29sb3IyOiByZ2IoMjAwLCAyMDAsIDIwMCk7XFxuXFxuJHVpQ29sb3IxOiByZ2IoNTUsIDU1LCA1NSk7XFxuJHVpQ29sb3IyOiBibGFjaztcXG5cXG4kb2ZmV2hpdGU6IHJnYigyMjUsIDIyNSwgMjI1KTtcXG5cXG4kbWluaW1pemU6IHJnYigyNTUsIDE5MCwgNDcpO1xcbiRtaW5pbWl6ZV9hY3RpdmU6IHJnYigxOTEsIDE0MiwgMzUpO1xcbiRtaW5pbWl6ZV90ZXh0OiByZ2IoMTUzLCA4NywgMCk7XFxuJG1heGltaXplOiByZ2IoNDAsIDIwMiwgNjUpO1xcbiRtYXhpbWl6ZV9hY3RpdmU6IHJnYigzMSwgMTUzLCA0OSk7XFxuJG1heGltaXplX3RleHQ6IHJnYigwLCA5OSwgMCk7XFxuJGNsb3NlOiByZ2IoMjU1LCA4NSwgNzgpO1xcbiRjbG9zZV9hY3RpdmU6IHJnYigxOTEsIDY0LCA1OSk7XFxuJGNsb3NlX3RleHQ6IHJnYigxNTMsIDAsIDApO1xcblxcbiR0ZXh0U2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxcbiAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC43NSksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNzUpLFxcbiAgMCAxcHggM3B4IHJnYigwLCAwLCAwKSwgMCAxcHggM3B4IHJnYigwLCAwLCAwKTtcXG5cXG4kdGhpY2tMaW5lOiAycHg7XFxuXFxuJGZvbnRTaXplOiAxMi41cHg7XFxuXFxuJGJhc2VaaW5kZXg6IDEwMDA7XFxuJHppbmRleExldmVsU2l6ZTogMTAwO1xcbiRpY29uc1ppbmRleExldmVsOiAxO1xcbiR3aW5kb3dzWmluZGV4TGV2ZWw6IDI7XFxuJHRhc2tiYXJaaW5kZXhMZXZlbDogMztcXG4kZm9yZWdyb3VuZFppbmRleDogKCRiYXNlWmluZGV4ICsgJHdpbmRvd3NaaW5kZXhMZXZlbCAqICR6aW5kZXhMZXZlbFNpemUpICtcXG4gICgkemluZGV4TGV2ZWxTaXplIC8gMik7XFxuXFxuJHRhc2tiYXJFbnRyeVdpZHRoOiAxNjBweDtcXG4kdGl0bGViYXJIZWlnaHQ6IDIycHg7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic3RhcnRcIjogXCJTdGFydE1lbnVfc3RhcnRfX20yZ2ZlXCIsXG5cdFwibWVudU9wZW5cIjogXCJTdGFydE1lbnVfbWVudU9wZW5fXzFDczM3XCIsXG5cdFwibWVudVwiOiBcIlN0YXJ0TWVudV9tZW51X18zck1HRFwiLFxuXHRcImJ1dHRvbnNcIjogXCJTdGFydE1lbnVfYnV0dG9uc19fMkV6YU9cIixcblx0XCJidXR0b25TZWxlY3RlZFwiOiBcIlN0YXJ0TWVudV9idXR0b25TZWxlY3RlZF9fMmZScVFcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/StartMenu.module.scss\n");

/***/ })

})