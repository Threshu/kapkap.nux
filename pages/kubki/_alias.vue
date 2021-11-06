<template>
   <section class="section-b-space ratio_asos">
        <div class="collection-wrapper">
           <div class="container">
              <div class="row">
                 <div class="col-lg-3">
                    <div>
                       <div class="row">
                          <div class="col-xl-12">
                             <div class="filter-main-btn"><span class="filter-btn btn btn-theme"><i aria-hidden="true" class="fa fa-filter"></i> Filter
                                </span>
                             </div>
                          </div>
                       </div>
                       <div class="collection-filter">
                          <div class="collection-filter-block">
                             <div class="collection-mobile-back"><span class="filter-back"><i aria-hidden="true" class="fa fa-angle-left"></i> back
                                </span>
                             </div>
                             <div class="collection-collapse-block open">
                                <h3 class="collapse-block-title not-collapsed" role="button" tabindex="0" aria-expanded="true" aria-controls="category" style="overflow-anchor: none;">Kategorie</h3>
                                <div id="category" class="collapse show" role="tabpanel">
                                   <div class="collection-collapse-block-content">
                                      <div class="collection-brand-filter">
                                         <ul class="category-list">
                                            <li v-for="(item, index) in cat.categories" :key="index">
                                                <NuxtLink :to="item.path" class="nuxt-link-exact-active nuxt-link-active">
                                                  {{item.title}}
                                                </NuxtLink>
                                            </li>
                                         </ul>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
 
                          <div class="theme-card">
                             <h5 class="title-border">new products</h5>
                             <div class="offer-slider slide-1">
                                <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
                                   <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                                      <div class="swiper-slide swiper-slide-active" style="width: 320px;">
                                         <div>
                                            <div class="media">
                                               <a href="/multikart/product/sidebar/1" class=""><img src="/images/multicart/1.jpg" alt="" class="img-fluid"></a> 
                                               <div class="media-body align-self-center">
                                                  <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></div>
                                                  <a href="/multikart/product/sidebar/1" class="">
                                                     <h6>trim dress</h6>
                                                  </a>
                                                  <h4>
                                                     $87.00
                                                     <del>$145.00</del>
                                                  </h4>
                                               </div>
                                            </div>
                                            <div class="media">
                                               <a href="/multikart/product/sidebar/4" class=""><img src="/images/multicart/1.jpg" alt="" class="img-fluid"></a> 
                                               <div class="media-body align-self-center">
                                                  <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></div>
                                                  <a href="/multikart/product/sidebar/4" class="">
                                                     <h6>belted top</h6>
                                                  </a>
                                                  <h4>$98.00</h4>
                                               </div>
                                            </div>
                                            <div class="media">
                                               <a href="/multikart/product/sidebar/8" class=""><img src="/images/multicart/1.jpg" alt="" class="img-fluid"></a> 
                                               <div class="media-body align-self-center">
                                                  <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></div>
                                                  <a href="/multikart/product/sidebar/8" class="">
                                                     <h6>v-neck dress</h6>
                                                  </a>
                                                  <h4>
                                                     $94.50
                                                     <del>$315.00</del>
                                                  </h4>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div class="swiper-slide swiper-slide-next" style="width: 320px;">
                                         <div>
                                            <div class="media">
                                               <a href="/multikart/product/sidebar/11" class=""><img src="/images/multicart/1.jpg" alt="" class="img-fluid"></a> 
                                               <div class="media-body align-self-center">
                                                  <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></div>
                                                  <a href="/multikart/product/sidebar/11" class="">
                                                     <h6>maxi dress</h6>
                                                  </a>
                                                  <h4>$266.00</h4>
                                               </div>
                                            </div>
                                            <div class="media">
                                               <a href="/multikart/product/sidebar/13" class=""><img src="/images/multicart/1.jpg" alt="" class="img-fluid"></a> 
                                               <div class="media-body align-self-center">
                                                  <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></div>
                                                  <a href="/multikart/product/sidebar/13" class="">
                                                     <h6>fit-flare dress</h6>
                                                  </a>
                                                  <h4>$148.00</h4>
                                               </div>
                                            </div>
                                            <div class="media">
                                               <a href="/multikart/product/sidebar/17" class=""><img src="/images/multicart/1.jpg" alt="" class="img-fluid"></a> 
                                               <div class="media-body align-self-center">
                                                  <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></div>
                                                  <a href="/multikart/product/sidebar/17" class="">
                                                     <h6>midi dress</h6>
                                                  </a>
                                                  <h4>
                                                     $240.00
                                                     <del>$400.00</del>
                                                  </h4>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div class="collection-sidebar-banner"><a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAScAAAG+BAMAAAAjHd/5AAAAG1BMVEXg4OAeHh6vr69/f39mZmY2NjZOTk7Hx8eXl5chZ5wZAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADYUlEQVR4nO3XzVPaQBzG8TXEJEcjL3oMWGuPpS9jj9DqvUwVe4TOqD2iHeSaaB39s7uvCVhFx66nfj8HsiFs8vDbZBeEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAkwYe9d6b1a+9Lphu32sNdksy1Lu32au99du9Hn+dVOjxOT1XrIj0Zt/SpU+3hPt2RbdRaZls0TwZNj6EOd+U3b05kxZq5ENfr6r368i5B6kK1TaiwkQmx5TFUpk8urzI9ko14IOPFm8u7rB67UMOh3vRzj4FK4YY8s4nXk5V4JFR/OnLddKjgkco+k4phR2JN7q0v/XCyuWpDFbkOFX19kVBx3ZUnkZtkeaizng0VN4QOdfb2RULJAbDlkfFEsjF/bDvXm+vMvXEsbChZIR2qmLxIKFkbV56GfNAXQkW6hEnL7dfWXahuZkLtC/HmNhO+yTvJDl8sL15bC64uq28/zuVLMXK77bc2lLq/daiDuN8cqAnFr7OeukEUVZGwPjgcNMpUqlRVoWKZw4RSz6AO1dj+PhGvW8Kz/kTdKjqBCtW8EXH3qDwqS1UVKjxyofYnLtSBeu32/GbSE02hT1rIggW5bMSH5eFosyqUKDIbSt+EKlRsJvhw4U78d1M10YQqWW2zUV49L4+Py8VOP50mlJ4ITCg90nHZ04+xPmv/W2drkJez80qvPB5VhYpGLtSJcKHs0aq0PkRmNgj6aXO3Wvfm5ukizV2zO7GhzLxh7ilzaN9rqPn1tFpiqlBJ68JFDeozaXo6m7R3VWs4m7kFSvR9Zgrn199aGaUKJR+9sc1dS621rmvZgXSPryfugtpqr2yNbEM9epENHneU7R+d7Fy3hp2OmVCEHUpPLhaW3yJzrbZbZvUctZjc5TVBzCd9/oCJB9n8XvV1x3ZKN3NUND/Gd0JFG9WrH9Oj+b1ttZeoVui+eNskGGcPhgpaKr/Hn59B+kn9c5H/SsKfO7Pf6se6WDm4mW0N3OglC5v7Qol2fef8o8fRS8wjJIcoGadpUyeJ9+U7n5d0uhsq7qep+u/wEs47k79aT+7qPQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPiP/QE/M3ask3xnbAAAAABJRU5ErkJggg==" class="img-fluid"></a></div>
                       </div>
                    </div>
                 </div>
                 <div class="collection-content col">
                    <div class="page-main-content">
                       <div class="row">
                          <div class="col-sm-12">
                             <div class="top-banner-wrapper">
                                <a href="#"><img src="/images/multicart/mega-menu/2.jpg" class="img-fluid"></a> 
                                <div class="top-banner-content small-section">
                                   <h4>fashion</h4>
                                   <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                             </div>
                             <ul class="product-filter-tags">
                                <!---->
                             </ul>
                             <div class="collection-product-wrapper">
                                <div class="product-top-filter">
                                   <div class="row">
                                      <div class="col-12">
                                         <div class="product-filter-content">
                                            <div class="search-count">
                                               <h5>Showing Products 1-12 of 199 Result</h5>
                                            </div>
                                            <div class="collection-view">
                                               <ul>
                                                  <li><i class="fa fa-th grid-layout-view"></i></li>
                                                  <li><i class="fa fa-list-ul list-layout-view"></i></li>
                                               </ul>
                                            </div>
                                            <div class="collection-grid-view">
                                               <ul>
                                                  <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3RTVFMDIwQzZFRDMxMUU4OEUwRkJGODM0QzlEOEMyQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3RTVFMDIwRDZFRDMxMUU4OEUwRkJGODM0QzlEOEMyQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdFNUUwMjBBNkVEMzExRTg4RTBGQkY4MzRDOUQ4QzJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdFNUUwMjBCNkVEMzExRTg4RTBGQkY4MzRDOUQ4QzJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+aawbRwAAAChJREFUeNpi/O9jzUAMYIHS/5HEGLGJMTEQCUYVEhXgjFjkUMQAAgwA1dUDot3XPXwAAAAASUVORK5CYII=" class="product-2-layout-view"></li>
                                                  <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAYAAACgR9dcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MTdCQTc3MTZFRDMxMUU4ODY2RUQxNEE4NTg2RDU3RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MTdCQTc3MjZFRDMxMUU4ODY2RUQxNEE4NTg2RDU3RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgxN0JBNzZGNkVEMzExRTg4NjZFRDE0QTg1ODZENTdGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgxN0JBNzcwNkVEMzExRTg4NjZFRDE0QTg1ODZENTdGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GjdbGgAAACxJREFUeNpi/O9jzUAuYIHS/5HEGIkVY2KgAIxqHjKaWdASAQOWhIFTDCDAAPN5BKPQTV51AAAAAElFTkSuQmCC" class="product-3-layout-view"></li>
                                                  <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NkZEMTg5MzZFRDMxMUU4OTY5QUE1QjA4NDk4NzIzMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NkZEMTg5NDZFRDMxMUU4OTY5QUE1QjA4NDk4NzIzMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg2RkQxODkxNkVEMzExRTg5NjlBQTVCMDg0OTg3MjMwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg2RkQxODkyNkVEMzExRTg5NjlBQTVCMDg0OTg3MjMwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9SdPNAAAACtJREFUeNpi/O9jzUBNwAKl/yOJMVIixsRAZTBq4KiBFCRsRixyZIkBBBgAjU8FpEqHnOUAAAAASUVORK5CYII=" class="product-4-layout-view"></li>
                                                  <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAALCAYAAABoKz2KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4QTgwN0MxMTZFRDMxMUU4QUZCNUZCQ0YyNTU5NDAyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4QTgwN0MxMjZFRDMxMUU4QUZCNUZCQ0YyNTU5NDAyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhBODA3QzBGNkVEMzExRThBRkI1RkJDRjI1NTk0MDIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhBODA3QzEwNkVEMzExRThBRkI1RkJDRjI1NTk0MDIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+z4uoxgAAAC5JREFUeNpi/O9jzTAQgAVK/0cSY6SHGBPDAIFRi0ctHrWY6gUIIxY5mooBBBgANXMHprRYLDsAAAAASUVORK5CYII=" class="product-6-layout-view"></li>
                                               </ul>
                                            </div>
                                            <div class="product-page-filter">
                                               <select>
                                                  <option value="all">Sorting Items</option>
                                                  <option value="a-z">Alphabetically, A-Z</option>
                                                  <option value="z-a">Alphabetically, Z-A</option>
                                                  <option value="low">price, low to high</option>
                                                  <option value="high">price, high to low</option>
                                               </select>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div class="product-wrapper-grid">
                                   <div class="row">
                                      <div class="col-sm-12">
                                         <!---->
                                      </div>
                                      <div class="col-grid-box col-lg-3" v-for="(item, index) in products" :key="index">
                                         <div class="product-box">
                                            <div>
                                               <div class="img-wrapper">
                                                  <div class="lable-block">
                                                    <span class="lable3">new</span> 
                                                    <span class="lable4">on sale</span>
                                                  </div>
                                                  <div class="front">
                                                    <img :src="item.imageURL" id="1" :alt="item.title" class="img-fluid bg-img">
                                                </div>
                                               </div>
                                               <div class="product-detail">
                                                  <div class="rating">
                                                    <i class="fa fa-star"></i> 
                                                    <i class="fa fa-star"></i> 
                                                    <i class="fa fa-star"></i> 
                                                    <i class="fa fa-star"></i> 
                                                    <i class="fa fa-star"></i>
                                                  </div>
                                                  <a :href="item.name">
                                                     <h6>{{ item.title }}</h6>
                                                  </a>
                                                  <h4>{{ item.price }}</h4>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
   </section>
</template>

<script lang="ts">
import { Action, Component, Getter, Mutation, Vue } from 'nuxt-property-decorator'
import { useBrowserLocation } from '@vueuse/core'
import { Jsonld } from 'nuxt-jsonld'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import catJSON from '~/data/categories.json'

@Jsonld
@Component({
  components: { Breadcrumb }
})

export default class Cups extends Vue {
  @Getter('defaults/isLoaded') isLoaded!: boolean
  @Getter('categories/categories') cat!: any
  @Action('categories/getCategories') getCategories!: any
  @Mutation('categories/setCategories') setCategories!: any
  products: any = []

  asyncData ({ params }: any) {
    const alias = params.alias
    return { alias }
  }

  created () {
    this.setCategories(catJSON);
    if (this.alias) {
      const selectedCat = this.cat.categories.filter((item1) => {
        return item1.path.includes(this.alias)
      })

      this.products = this.cat.products.filter((item) => {
        if (item.categories) {
          return item.categories.includes(selectedCat[0].id)
        }
      })
    } else {
      this.products = this.cat.products
    }
  }

  head () {
    const location = useBrowserLocation()

    return {
      title: 'Kubki klasy premium - Sklep KapKap.eu',
      meta: [],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: location.value.href
        },
        {
          hid: 'shortcut icon',
          rel: 'shortcut icon',
          href: '/favicon.ico',
          type: 'image/x-icon'
        }
      ]
    }
  }
}
</script>
