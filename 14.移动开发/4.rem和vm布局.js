/*

优先使用vw 视口宽

使用rem，js动态变化对于html的字体大小
(function () {
  const docEl = document.documentElement;
  const setHtmlFontSize = () => {
    cosnt viewWidth = docEl.clientWidth;
    docEl.style.fontsize = `${viewWidth/75}px`;
  }
  setHtmlFontSize();
  window.addEventListener('resize', setHtmlFontSize, false);
})();

推荐插件：px2vm px2em

注意：更换布局单位时，需要静止缩放 flex-shrink: 0;
*/