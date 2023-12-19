(()=>{"use strict";let e=document.documentElement.scrollWidth;const t=new Swiper(".swiper",{pagination:{el:".swiper-pagination",type:"bullets"}});e>=768?((()=>{for(let e=0;e<2;e++)t[e].hostEl.classList.replace("swiper","tablet-screen"),t[e].slides.forEach((e=>e.classList.replace("swiper-slide","slider-list__item"))),t[e].wrapperEl.classList.replace("swiper-wrapper","slider-list");t[2].hostEl.classList.replace("swiper","table-slider"),t[2].slides.forEach((e=>e.classList.replace("swiper-slide","slider-three"))),t[2].wrapperEl.classList.replace("swiper-wrapper","slider-list-three")})(),document.querySelectorAll(".header-mobile").forEach((e=>e.classList.replace("header-mobile","header-tablet"))),document.querySelectorAll(".slide--anchor-big-view").forEach((e=>{e.classList.contains("slide--anchor-big-view")&&e.classList.add("view-window-only")})),window.addEventListener("resize",(()=>{innerWidth<=768?document.querySelectorAll(".wrap-border").forEach((e=>e.style.cssText="width: 85vw;")):document.querySelectorAll(".wrap-border").forEach((e=>e.style.cssText="width: 60%;"))}))):(document.querySelectorAll(".show-content").forEach((e=>e.remove())),document.querySelectorAll(".hide-tablet").forEach((e=>e.classList.remove("hide-tablet"))),document.querySelectorAll(".view-window-only").forEach((e=>e.classList.remove("view-window-only"))));const l=document.querySelectorAll(".button__show-more"),s=document.querySelectorAll(".hide-tablet");s.forEach((e=>{e.style.cssText="display: none;"}));e>768&&(l[0].addEventListener("click",(()=>{for(let t=0;t<3;t++)"none"===s[t].style.display?(s[t].style.display="block",e<1440&&(document.querySelectorAll(".view-window-only")[1].style.display="block"),l[0].innerHTML='<button class="button__read-more button__show-more "><img class="image-expand" src="./images/expand2.svg" alt="expand" title="expand" /><b>Скрыть все</b></button>'):(s[t].style.display="block")&&(e<1440&&(document.querySelectorAll(".view-window-only")[1].style.display="none"),s[t].style.display="none",l[0].innerHTML='<button class="button__read-more button__show-more"><img class="image-expand" src="./images/expand.svg" alt="expand" title="expand" /><b>Показать все</b></button>')})),l[1].addEventListener("click",(()=>{for(let t=3;t<6;t++)"none"===s[t].style.display?(s[t].style.display="block",e<1440&&(document.querySelectorAll(".view-window-only")[3].style.display="block"),l[1].innerHTML='<button class="button__read-more button__show-more "><img class="image-expand" src="./images/expand2.svg" alt="expand" title="expand" /><b>Скрыть все</b></button>'):(s[t].style.display="block")&&(e<1440&&(document.querySelectorAll(".view-window-only")[3].style.display="none"),s[t].style.display="none",l[1].innerHTML='<button class="button__read-more button__show-more"><img class="image-expand" src="./images/expand.svg" alt="expand" title="expand" /><b>Показать все</b></button>')})));const n=document.querySelector(".btn-burger"),o=document.querySelector(".burger-menu"),r=document.querySelector(".close-btn-burger"),c=document.querySelector(".main"),i=document.querySelector(".header"),a=document.querySelector(".content"),d=document.querySelector(".body"),u=document.querySelectorAll(".lang-item"),y=()=>{(o.style.display="block")&&(o.style.cssText="position: absolute;\n        transform: translateX(-360px);\n        top: 0%;\n        z-index: 100;\n        ")};n.addEventListener("click",(()=>{(o.style.display="none")&&(o.style.cssText="min-height: 100%;\n        z-index: 100;\n        top: 0%;\n        position: absolute;\n        transform: translateX(0px);\n        ",c.style.cssText="opacity: 0.1;",i.style.cssText="opacity: 0.1;")})),r.addEventListener("click",y),innerWidth<1440&&document.addEventListener("click",(e=>{e.composedPath().includes(o)||y()}),{capture:!0});const m=document.querySelector(".modal-menu"),p=document.querySelector(".close-btn-menu"),h=(document.querySelectorAll(".form__input--delete"),document.querySelector(".menu__form-title")),b=document.querySelectorAll(".button-call"),x=document.querySelectorAll(".button-chat"),w=()=>{m.style.cssText="min-height: 100%;\n    z-index: 100;\n    transform: translateX(0px);\n    right: 0%;\n    ",c.style.cssText="opacity: 0.1;",i.style.cssText="opacity: 0.1;"},g=()=>{m.style.cssText="\n    transform: translateX(540px);\n    ",c.style.cssText="opacity: 1;",i.style.cssText="opacity: 1;"};document.addEventListener("click",(e=>{const t=e.composedPath().includes(m),l=e.composedPath().includes(o);t||l||g()}),{capture:!0}),x.forEach((e=>{e.addEventListener("click",(t=>{t.currentTarget===e&&(w(),document.querySelectorAll(".form__input--delete").forEach((e=>e.style.display="block")),h.textContent="ОБРАТНАЯ СВЯЗЬ")}))})),p.addEventListener("click",g),b.forEach((e=>{e.addEventListener("click",(()=>{w(),document.querySelectorAll(".form__input--delete").forEach((e=>e.style.display="none")),h.textContent="ЗАКАЗАТЬ ЗВОНОК"}))}));const v=document.querySelectorAll(".nav-list__link");document.querySelectorAll(".nav--anchor").forEach((e=>{e.addEventListener("click",(()=>{document.querySelector(".nav--anchor").classList.remove("active-switcher")}))}));for(let e=0;e<v.length;e++)v[e].addEventListener("click",(function(){let e=document.querySelectorAll(".nav-list__link--active");e[0].className=e[0].className.replace(" nav-list__link--active",""),this.className+=" nav-list__link--active"}));e>1439?(a.before(o),d.style.cssText="width: 1440px; display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: 1fr; margin: 0 auto;",a.style.cssText="width:1120px;  justify-content: center;",o.style.cssText="z-index: 0; box-shadow: none; height: 100vh;",window.addEventListener("resize",(e=>{innerWidth<1440?(o.style.display="none",d.style.cssText="min-width: 100%; display: flex; flex-direction: row; margin: auto;",a.style.cssText="width:100%;  justify-content: center;"):innerWidth>1439&&(d.style.cssText="width: 1440px; display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: 1fr; margin: 0 auto;",a.style.cssText="width:1120px; margin: 0 auto; justify-content: center;",o.style.cssText="z-index: 0; box-shadow: none; height: 100%;")}))):o.style.cssText="z-index: 0; box-shadow: none; height: 100%;";const _=document.querySelector(".button__show-more-text"),f=document.querySelector(".cuttedText"),S=document.querySelector(".switcher-content");S.style.display="none",_.addEventListener("click",(()=>{"none"===S.style.display?(f.style.cssText="height: 270px;\n        overflow: visible;",_.innerHTML='<button class="button__read-more button__show-more-text">\n            <img class="image-expand img--rotate" src="./images/expand2.svg" alt="expand" title="expand" /><b>Cвернуть текст</b>\n        </button>',S.style.display="block"):(S.style.display="block")&&(f.style.cssText="height: 90px;\n        overflow: hidden;",_.innerHTML='<button class="button__read-more button__show-more-text">\n            <img class="image-expand img--rotate" src="./images/expand.svg" alt="expand" title="expand" /><b>Читать далее</b>\n        </button>',S.style.display="none")}));for(let e=0;e<u.length;e++)u[e].addEventListener("click",(function(){let e=document.querySelectorAll(".lang-item--active");e[0].className=e[0].className.replace(" lang-item--active",""),this.className+=" lang-item--active"}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Njc3MvaW5kZXguc2NzcydcclxubGV0IHBhZ2VXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aFxyXG5cclxuLy8gc3dpcGVyXHJcbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgIH0sXHJcbn0pXHJcblxyXG5jb25zdCByZXNpemVXaWR0aCA9ICgpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgc3dpcGVyW2ldLmhvc3RFbC5jbGFzc0xpc3QucmVwbGFjZSgnc3dpcGVyJywgJ3RhYmxldC1zY3JlZW4nKVxyXG4gICAgICAgIHN3aXBlcltpXS5zbGlkZXMuZm9yRWFjaCgoZWxlbSkgPT4gZWxlbS5jbGFzc0xpc3QucmVwbGFjZSgnc3dpcGVyLXNsaWRlJywgJ3NsaWRlci1saXN0X19pdGVtJykpXHJcbiAgICAgICAgc3dpcGVyW2ldLndyYXBwZXJFbC5jbGFzc0xpc3QucmVwbGFjZSgnc3dpcGVyLXdyYXBwZXInLCAnc2xpZGVyLWxpc3QnKVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXBlclsyXS5ob3N0RWwuY2xhc3NMaXN0LnJlcGxhY2UoJ3N3aXBlcicsICd0YWJsZS1zbGlkZXInKVxyXG4gICAgc3dpcGVyWzJdLnNsaWRlcy5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLmNsYXNzTGlzdC5yZXBsYWNlKCdzd2lwZXItc2xpZGUnLCAnc2xpZGVyLXRocmVlJykpXHJcbiAgICBzd2lwZXJbMl0ud3JhcHBlckVsLmNsYXNzTGlzdC5yZXBsYWNlKCdzd2lwZXItd3JhcHBlcicsICdzbGlkZXItbGlzdC10aHJlZScpXHJcbn1cclxuXHJcbmlmIChwYWdlV2lkdGggPj0gNzY4KSB7XHJcbiAgICByZXNpemVXaWR0aCgpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLW1vYmlsZScpLmZvckVhY2goKGVsZW0pID0+IGVsZW0uY2xhc3NMaXN0LnJlcGxhY2UoJ2hlYWRlci1tb2JpbGUnLCAnaGVhZGVyLXRhYmxldCcpKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlLS1hbmNob3ItYmlnLXZpZXcnKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS0tYW5jaG9yLWJpZy12aWV3JykpIHtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCd2aWV3LXdpbmRvdy1vbmx5JylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICBpZiAoaW5uZXJXaWR0aCA8PSA3NjgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndyYXAtYm9yZGVyJykuZm9yRWFjaCgoZWxlbSkgPT4gKGVsZW0uc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDogODV2dztgKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3JhcC1ib3JkZXInKS5mb3JFYWNoKChlbGVtKSA9PiAoZWxlbS5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOiA2MCU7YCkpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSBlbHNlIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG93LWNvbnRlbnQnKS5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLnJlbW92ZSgpKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZGUtdGFibGV0JykuZm9yRWFjaCgoZWxlbSkgPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLXRhYmxldCcpKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZXctd2luZG93LW9ubHknKS5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3ZpZXctd2luZG93LW9ubHknKSlcclxufVxyXG5cclxuY29uc3QgYnRuU2hvd01vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uX19zaG93LW1vcmUnKSxcclxuICAgIGhpZGVUYWJsZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlkZS10YWJsZXQnKVxyXG5cclxuaGlkZVRhYmxldC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBlbGVtLnN0eWxlLmNzc1RleHQgPSBgZGlzcGxheTogbm9uZTtgXHJcbn0pXHJcblxyXG5jb25zdCBzaG93U2xpZGVyQ29udGVudCA9ICgpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGhpZGVUYWJsZXRbaV0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIGhpZGVUYWJsZXRbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICAgICAgaWYgKHBhZ2VXaWR0aCA8IDE0NDApIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWV3LXdpbmRvdy1vbmx5JylbKDAsIDEpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ0blNob3dNb3JlWzBdLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uX19yZWFkLW1vcmUgYnV0dG9uX19zaG93LW1vcmUgXCI+PGltZyBjbGFzcz1cImltYWdlLWV4cGFuZFwiIHNyYz1cIi4vaW1hZ2VzL2V4cGFuZDIuc3ZnXCIgYWx0PVwiZXhwYW5kXCIgdGl0bGU9XCJleHBhbmRcIiAvPjxiPtCh0LrRgNGL0YLRjCDQstGB0LU8L2I+PC9idXR0b24+YFxyXG4gICAgICAgIH0gZWxzZSBpZiAoKGhpZGVUYWJsZXRbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jaycpKSB7XHJcbiAgICAgICAgICAgIGlmIChwYWdlV2lkdGggPCAxNDQwKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlldy13aW5kb3ctb25seScpWygwLCAxKV0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhpZGVUYWJsZXRbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICBidG5TaG93TW9yZVswXS5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbl9fcmVhZC1tb3JlIGJ1dHRvbl9fc2hvdy1tb3JlXCI+PGltZyBjbGFzcz1cImltYWdlLWV4cGFuZFwiIHNyYz1cIi4vaW1hZ2VzL2V4cGFuZC5zdmdcIiBhbHQ9XCJleHBhbmRcIiB0aXRsZT1cImV4cGFuZFwiIC8+PGI+0J/QvtC60LDQt9Cw0YLRjCDQstGB0LU8L2I+PC9idXR0b24+YFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc2hvd1NsaWRlckNvbnRlbnQyID0gKCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDM7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICBpZiAoaGlkZVRhYmxldFtpXS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgaGlkZVRhYmxldFtpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgICAgICBpZiAocGFnZVdpZHRoIDwgMTQ0MCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZXctd2luZG93LW9ubHknKVsoMiwgMyldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnRuU2hvd01vcmVbMV0uaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJidXR0b25fX3JlYWQtbW9yZSBidXR0b25fX3Nob3ctbW9yZSBcIj48aW1nIGNsYXNzPVwiaW1hZ2UtZXhwYW5kXCIgc3JjPVwiLi9pbWFnZXMvZXhwYW5kMi5zdmdcIiBhbHQ9XCJleHBhbmRcIiB0aXRsZT1cImV4cGFuZFwiIC8+PGI+0KHQutGA0YvRgtGMINCy0YHQtTwvYj48L2J1dHRvbj5gXHJcbiAgICAgICAgfSBlbHNlIGlmICgoaGlkZVRhYmxldFtpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJykpIHtcclxuICAgICAgICAgICAgaWYgKHBhZ2VXaWR0aCA8IDE0NDApIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWV3LXdpbmRvdy1vbmx5JylbKDIsIDMpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGlkZVRhYmxldFtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIGJ0blNob3dNb3JlWzFdLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uX19yZWFkLW1vcmUgYnV0dG9uX19zaG93LW1vcmVcIj48aW1nIGNsYXNzPVwiaW1hZ2UtZXhwYW5kXCIgc3JjPVwiLi9pbWFnZXMvZXhwYW5kLnN2Z1wiIGFsdD1cImV4cGFuZFwiIHRpdGxlPVwiZXhwYW5kXCIgLz48Yj7Qn9C+0LrQsNC30LDRgtGMINCy0YHQtTwvYj48L2J1dHRvbj5gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pZiAocGFnZVdpZHRoID4gNzY4KSB7XHJcbiAgICBidG5TaG93TW9yZVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dTbGlkZXJDb250ZW50KVxyXG4gICAgYnRuU2hvd01vcmVbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U2xpZGVyQ29udGVudDIpXHJcbn1cclxuLy8gZW5kIHN3aXBlclxyXG5cclxuLy8gYnVyZ2VyLW1lbnVcclxuY29uc3QgYnRuQnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1idXJnZXInKSxcclxuICAgIGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLW1lbnUnKSxcclxuICAgIGNsb3NlQnRuQnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bi1idXJnZXInKSxcclxuICAgIG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKSxcclxuICAgIGhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyksXHJcbiAgICBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSxcclxuICAgIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keScpLFxyXG4gICAgbGFuZ0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGFuZy1pdGVtJylcclxuXHJcbmNvbnN0IHNob3dCdXJnZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoKGJ1cmdlck1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJykpIHtcclxuICAgICAgICBidXJnZXJNZW51LnN0eWxlLmNzc1RleHQgPSBgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICAgICAgYFxyXG4gICAgICAgIG1haW5Db250ZW50LnN0eWxlLmNzc1RleHQgPSBgb3BhY2l0eTogMC4xO2BcclxuICAgICAgICBoZWFkZXJDb250ZW50LnN0eWxlLmNzc1RleHQgPSBgb3BhY2l0eTogMC4xO2BcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY2xvc2VCdXJnZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoKGJ1cmdlck1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpKSB7XHJcbiAgICAgICAgYnVyZ2VyTWVudS5zdHlsZS5jc3NUZXh0ID0gYHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM2MHB4KTtcclxuICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICBgXHJcbiAgICB9XHJcbn1cclxuXHJcbmJ0bkJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dCdXJnZXIpXHJcbmNsb3NlQnRuQnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VCdXJnZXIpXHJcblxyXG5pZiAoaW5uZXJXaWR0aCA8IDE0NDApIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjbGljayA9IGUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoYnVyZ2VyTWVudSlcclxuXHJcbiAgICAgICAgICAgIGlmICghY2xpY2spIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlQnVyZ2VyKClcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgY2FwdHVyZTogdHJ1ZSB9XHJcbiAgICApXHJcbn1cclxuLy8gZW5kIGJ1cmdlci1tZW51XHJcblxyXG4vLyBtb2RhbC1mb3JtLW1lbnVcclxuY29uc3QgbW9kYWxNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW1lbnUnKSxcclxuICAgIGJ0bkNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuLW1lbnUnKSxcclxuICAgIGlucHV0RGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1fX2lucHV0LS1kZWxldGUnKSxcclxuICAgIGZvcm1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19mb3JtLXRpdGxlJyksXHJcbiAgICBidXR0b25DYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1jYWxsJyksXHJcbiAgICBidXR0b25DaGF0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1jaGF0JylcclxuXHJcbmNvbnN0IG9wZW5Nb2RhbE1lbnUgPSAoKSA9PiB7XHJcbiAgICBtb2RhbE1lbnUuc3R5bGUuY3NzVGV4dCA9IGBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICBgXHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5jc3NUZXh0ID0gYG9wYWNpdHk6IDAuMTtgXHJcbiAgICBoZWFkZXJDb250ZW50LnN0eWxlLmNzc1RleHQgPSBgb3BhY2l0eTogMC4xO2BcclxufVxyXG5cclxuY29uc3QgY2xvc2VNb2RhbE1lbnUgPSAoKSA9PiB7XHJcbiAgICBtb2RhbE1lbnUuc3R5bGUuY3NzVGV4dCA9IGBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NDBweCk7XHJcbiAgICBgXHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5jc3NUZXh0ID0gYG9wYWNpdHk6IDE7YFxyXG4gICAgaGVhZGVyQ29udGVudC5zdHlsZS5jc3NUZXh0ID0gYG9wYWNpdHk6IDE7YFxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgJ2NsaWNrJyxcclxuICAgIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xpY2sgPSBlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKG1vZGFsTWVudSlcclxuICAgICAgICBjb25zdCBjbGljazIgPSBlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGJ1cmdlck1lbnUpXHJcblxyXG4gICAgICAgIGlmICghY2xpY2sgJiYgIWNsaWNrMikge1xyXG4gICAgICAgICAgICBjbG9zZU1vZGFsTWVudSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHsgY2FwdHVyZTogdHJ1ZSB9XHJcbilcclxuXHJcbmJ1dHRvbkNoYXQuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldCA9PT0gZWxlbSkge1xyXG4gICAgICAgICAgICBvcGVuTW9kYWxNZW51KClcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1fX2lucHV0LS1kZWxldGUnKS5mb3JFYWNoKChlbGVtKSA9PiAoZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJykpXHJcbiAgICAgICAgICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICfQntCR0KDQkNCi0J3QkNCvINCh0JLQr9CX0KwnXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuYnRuQ2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWxNZW51KVxyXG5cclxuYnV0dG9uQ2FsbC5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG9wZW5Nb2RhbE1lbnUoKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtX19pbnB1dC0tZGVsZXRlJykuZm9yRWFjaCgoZWxlbSkgPT4gKGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJykpXHJcbiAgICAgICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gJ9CX0JDQmtCQ0JfQkNCi0Kwg0JfQktCe0J3QntCaJ1xyXG4gICAgfSlcclxufSlcclxuLy8gZW5kIG1vZGFsIGZvcm0gbWVudVxyXG5cclxuLy8gY2hhbmdlIGFjdGl2ZS1jbGFzcyBpbiBsaW5rc1xyXG5jb25zdCBoZWFkZXJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGlzdF9fbGluaycpXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LS1hbmNob3InKS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtLWFuY2hvcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1zd2l0Y2hlcicpXHJcbiAgICB9KVxyXG59KVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBoZWFkZXJMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaGVhZGVyTGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpc3RfX2xpbmstLWFjdGl2ZScpXHJcbiAgICAgICAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKCcgbmF2LWxpc3RfX2xpbmstLWFjdGl2ZScsICcnKVxyXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lICs9ICcgbmF2LWxpc3RfX2xpbmstLWFjdGl2ZSdcclxuICAgIH0pXHJcbn1cclxuLy8gZW5kIGNoYW5nZSBhY3RpdmUtY2xhc3MgaW4gbGlua3NcclxuXHJcbi8vIG1lbnUgYmlnIHNjcmVlbiBmb3JtYXR0ZXJcclxuaWYgKHBhZ2VXaWR0aCA+IDE0MzkpIHtcclxuICAgIGNvbnRlbnQuYmVmb3JlKGJ1cmdlck1lbnUpXHJcbiAgICBib2R5LnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6IDE0NDBweDsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7IG1hcmdpbjogMCBhdXRvO2BcclxuICAgIGNvbnRlbnQuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoxMTIwcHg7ICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtgXHJcbiAgICBidXJnZXJNZW51LnN0eWxlLmNzc1RleHQgPSBgei1pbmRleDogMDsgYm94LXNoYWRvdzogbm9uZTsgaGVpZ2h0OiAxMDB2aDtgXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoaW5uZXJXaWR0aCA8IDE0NDApIHtcclxuICAgICAgICAgICAgYnVyZ2VyTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuY3NzVGV4dCA9IGBtaW4td2lkdGg6IDEwMCU7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IG1hcmdpbjogYXV0bztgXHJcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoxMDAlOyAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7YFxyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5uZXJXaWR0aCA+IDE0MzkpIHtcclxuICAgICAgICAgICAgYm9keS5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOiAxNDQwcHg7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7IGdyaWQtdGVtcGxhdGUtcm93czogMWZyOyBtYXJnaW46IDAgYXV0bztgXHJcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoxMTIwcHg7IG1hcmdpbjogMCBhdXRvOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtgXHJcbiAgICAgICAgICAgIGJ1cmdlck1lbnUuc3R5bGUuY3NzVGV4dCA9IGB6LWluZGV4OiAwOyBib3gtc2hhZG93OiBub25lOyBoZWlnaHQ6IDEwMCU7YFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0gZWxzZSB7XHJcbiAgICBidXJnZXJNZW51LnN0eWxlLmNzc1RleHQgPSBgei1pbmRleDogMDsgYm94LXNoYWRvdzogbm9uZTsgaGVpZ2h0OiAxMDAlO2BcclxufVxyXG4vLyBlbmQgbWVudSBiaWcgc2NyZWVuIGZvcm1hdHRlclxyXG5cclxuLy8gY2xvc2Uvb3BlbiBcInJlYWQtbW9yZVwiIG1haW4gdGV4dCBjb250ZW50XHJcbmNvbnN0IGJ0blNob3dNb3JlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fX3Nob3ctbW9yZS10ZXh0JyksXHJcbiAgICBjdXR0ZWRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1dHRlZFRleHQnKSxcclxuICAgIHN3aXRjaGVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hlci1jb250ZW50JylcclxuXHJcbnN3aXRjaGVyQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblxyXG5idG5TaG93TW9yZVRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoc3dpdGNoZXJDb250ZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgIGN1dHRlZFRleHQuc3R5bGUuY3NzVGV4dCA9IGBoZWlnaHQ6IDI3MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO2BcclxuICAgICAgICBidG5TaG93TW9yZVRleHQuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJidXR0b25fX3JlYWQtbW9yZSBidXR0b25fX3Nob3ctbW9yZS10ZXh0XCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWFnZS1leHBhbmQgaW1nLS1yb3RhdGVcIiBzcmM9XCIuL2ltYWdlcy9leHBhbmQyLnN2Z1wiIGFsdD1cImV4cGFuZFwiIHRpdGxlPVwiZXhwYW5kXCIgLz48Yj5D0LLQtdGA0L3Rg9GC0Ywg0YLQtdC60YHRgjwvYj5cclxuICAgICAgICA8L2J1dHRvbj5gXHJcbiAgICAgICAgc3dpdGNoZXJDb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICB9IGVsc2UgaWYgKChzd2l0Y2hlckNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpKSB7XHJcbiAgICAgICAgY3V0dGVkVGV4dC5zdHlsZS5jc3NUZXh0ID0gYGhlaWdodDogOTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO2BcclxuICAgICAgICBidG5TaG93TW9yZVRleHQuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJidXR0b25fX3JlYWQtbW9yZSBidXR0b25fX3Nob3ctbW9yZS10ZXh0XCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWFnZS1leHBhbmQgaW1nLS1yb3RhdGVcIiBzcmM9XCIuL2ltYWdlcy9leHBhbmQuc3ZnXCIgYWx0PVwiZXhwYW5kXCIgdGl0bGU9XCJleHBhbmRcIiAvPjxiPtCn0LjRgtCw0YLRjCDQtNCw0LvQtdC1PC9iPlxyXG4gICAgICAgIDwvYnV0dG9uPmBcclxuICAgICAgICBzd2l0Y2hlckNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG59KVxyXG4vLyBlbmQgY2xvc2Uvb3BlbiBcInJlYWQtbW9yZVwiIG1haW4gdGV4dCBjb250ZW50XHJcblxyXG4vLyBsYW5ncyBhY3RpdmVcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBsYW5nSXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgbGFuZ0l0ZW1baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGFuZy1pdGVtLS1hY3RpdmUnKVxyXG4gICAgICAgIGN1cnJlbnRbMF0uY2xhc3NOYW1lID0gY3VycmVudFswXS5jbGFzc05hbWUucmVwbGFjZSgnIGxhbmctaXRlbS0tYWN0aXZlJywgJycpXHJcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgKz0gJyBsYW5nLWl0ZW0tLWFjdGl2ZSdcclxuICAgIH0pXHJcbn1cclxuLy8gZW5kIGxhbmdzXHJcbiJdLCJuYW1lcyI6WyJwYWdlV2lkdGgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFdpZHRoIiwic3dpcGVyIiwiU3dpcGVyIiwicGFnaW5hdGlvbiIsImVsIiwidHlwZSIsImkiLCJob3N0RWwiLCJjbGFzc0xpc3QiLCJyZXBsYWNlIiwic2xpZGVzIiwiZm9yRWFjaCIsImVsZW0iLCJ3cmFwcGVyRWwiLCJyZXNpemVXaWR0aCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250YWlucyIsImFkZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lcldpZHRoIiwic3R5bGUiLCJjc3NUZXh0IiwicmVtb3ZlIiwiYnRuU2hvd01vcmUiLCJoaWRlVGFibGV0IiwiZGlzcGxheSIsImlubmVySFRNTCIsImJ0bkJ1cmdlciIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJNZW51IiwiY2xvc2VCdG5CdXJnZXIiLCJtYWluQ29udGVudCIsImhlYWRlckNvbnRlbnQiLCJjb250ZW50IiwiYm9keSIsImxhbmdJdGVtIiwiY2xvc2VCdXJnZXIiLCJlIiwiY29tcG9zZWRQYXRoIiwiaW5jbHVkZXMiLCJjYXB0dXJlIiwibW9kYWxNZW51IiwiYnRuQ2xvc2VNb2RhbCIsImZvcm1UaXRsZSIsImJ1dHRvbkNhbGwiLCJidXR0b25DaGF0Iiwib3Blbk1vZGFsTWVudSIsImNsb3NlTW9kYWxNZW51IiwiY2xpY2siLCJjbGljazIiLCJjdXJyZW50VGFyZ2V0IiwidGV4dENvbnRlbnQiLCJoZWFkZXJMaW5rcyIsImxlbmd0aCIsImN1cnJlbnQiLCJjbGFzc05hbWUiLCJ0aGlzIiwiYmVmb3JlIiwiYnRuU2hvd01vcmVUZXh0IiwiY3V0dGVkVGV4dCIsInN3aXRjaGVyQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=