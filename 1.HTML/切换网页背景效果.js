// js
/*
  <script>
    const urls = []; // iframe放底层展示动画背景, 切换动态背景即是切换iframe的src属性
    $('button').each((index, Element) => {
      Element.click(function () {
        $('iframe').attr('src', urls[index]);
      })
    })
  </script>
*/

// css
/*
<style>
    :root {
      --bg-color: #2333;
    }
    body {
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 0;
      position: relative;
    }
    iframe {
      position: fixed;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      z-index: -1;
    }
  </style>
*/

// html
/*
  <div class="main"></div>
  <iframe src="./"></iframe>
*/