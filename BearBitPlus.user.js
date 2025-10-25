// ==UserScript==
// @name         BearBitPlus
// @namespace    http://tampermonkey.net/
// @version      1.05
// @description  Tampermonkey BearBitPlus
// @author       PINKYPIE20
// @icon         https://i.imgur.com/VfAfy3s.jpeg
// @match        https://bearbit.co/viewno18sb.php*
// @match        https://bearbit.co/viewbrsb.php*
// @match        https://bearbit.co/index.php*
// @match        https://bearbit.co/details.php*
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @require      https://raw.githubusercontent.com/pinkypie20/BearBitPlus/main/src/BearBitPlus.js
// @resource     IMPORTED_CSS https://raw.githubusercontent.com/pinkypie20/BearBitPlus/main/src/BearBitPlus.css
// @updateURL    https://raw.githubusercontent.com/pinkypie20/BearBitPlus/main/BearBitPlus.user.js
// @downloadURL  https://raw.githubusercontent.com/pinkypie20/BearBitPlus/main/BearBitPlus.user.js
// @supportURL   https://github.com/pinkypie20/BearBitPlus/issues
// @connect      img.in.th
// @connect      bpicc.cc
// @connect      imgtrue.com
// @connect      imdb.com
// @connect      55xo.co
// @connect      imgur.com
// @connect      in.th
// @connect      postto.me
// @connect      javstore.net
// @connect      i-pic.info
// @connect      picstate.com
// @connect      bpicc.com
// @connect      roop.xyz
// @connect      mpic.ws
// @connect      img.live
// @connect      shotcan.com
// @connect      ibb.co
// @connect      lmgbb.me
// @connect      4shared.com
// @connect      lookimg.com
// @connect      gstatic.com
// @connect      wp.com
// @connect      steamstatic.com
// @connect      tokopedia.net
// @connect      4gamers.com.tw
// @connect      imgbb.me
// @connect      clip18zeed.com
// @connect      mx7.com
// @connect      youtube.com
// @connect      youtube.be
// @connect      8e88.in.th
// @connect      clipxxx.live
// @connect      i-pic.info
// @connect      thaibuzz.com
// @connect      imgmak.com
// @connect      imgbb.me
// @connect      picz.in.th
// @connect      234.in.th
// @connect      best-story.net
// @connect      uppic.cc
// @connect      uppicimg.com
// @connect      uppic.xyz
// @connect      gifyu.com
// @connect      imgvb.com
// @connect      up-pic.com
// @connect      pic.4th.in
// @connect      imagenetz.de
// @connect      www.imagenetz.de
// @connect      51.79.160.193
// @connect      *
// ==/UserScript==

const my_css = GM_getResourceText("IMPORTED_CSS");
GM_addStyle(my_css);