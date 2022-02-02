<template>
  <div class="product-top-filter">
    <div class="row">
      <div class="col-12">
        <div class="product-filter-content">
          <div class="search-count">
            <h5>Showing Products 1-12 of 199 Result</h5>
          </div>
          <div class="collection-view">
            <ul>
              <li><i class="fa fa-th grid-layout-view" /></li>
              <li><i class="fa fa-list-ul list-layout-view" /></li>
            </ul>
          </div>
          <div class="collection-grid-view">
            <ul>
              <li>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3RTVFMDIwQzZFRDMxMUU4OEUwRkJGODM0QzlEOEMyQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3RTVFMDIwRDZFRDMxMUU4OEUwRkJGODM0QzlEOEMyQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdFNUUwMjBBNkVEMzExRTg4RTBGQkY4MzRDOUQ4QzJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdFNUUwMjBCNkVEMzExRTg4RTBGQkY4MzRDOUQ4QzJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+aawbRwAAAChJREFUeNpi/O9jzUAMYIHS/5HEGLGJMTEQCUYVEhXgjFjkUMQAAgwA1dUDot3XPXwAAAAASUVORK5CYII="
                  class="product-2-layout-view"
                >
              </li>
              <li>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAYAAACgR9dcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MTdCQTc3MTZFRDMxMUU4ODY2RUQxNEE4NTg2RDU3RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MTdCQTc3MjZFRDMxMUU4ODY2RUQxNEE4NTg2RDU3RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgxN0JBNzZGNkVEMzExRTg4NjZFRDE0QTg1ODZENTdGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgxN0JBNzcwNkVEMzExRTg4NjZFRDE0QTg1ODZENTdGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GjdbGgAAACxJREFUeNpi/O9jzUAuYIHS/5HEGIkVY2KgAIxqHjKaWdASAQOWhIFTDCDAAPN5BKPQTV51AAAAAElFTkSuQmCC"
                  class="product-3-layout-view"
                >
              </li>
              <li>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NkZEMTg5MzZFRDMxMUU4OTY5QUE1QjA4NDk4NzIzMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NkZEMTg5NDZFRDMxMUU4OTY5QUE1QjA4NDk4NzIzMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg2RkQxODkxNkVEMzExRTg5NjlBQTVCMDg0OTg3MjMwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg2RkQxODkyNkVEMzExRTg5NjlBQTVCMDg0OTg3MjMwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9SdPNAAAACtJREFUeNpi/O9jzUBNwAKl/yOJMVIixsRAZTBq4KiBFCRsRixyZIkBBBgAjU8FpEqHnOUAAAAASUVORK5CYII="
                  class="product-4-layout-view"
                >
              </li>
              <li>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAALCAYAAABoKz2KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4QTgwN0MxMTZFRDMxMUU4QUZCNUZCQ0YyNTU5NDAyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4QTgwN0MxMjZFRDMxMUU4QUZCNUZCQ0YyNTU5NDAyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhBODA3QzBGNkVEMzExRThBRkI1RkJDRjI1NTk0MDIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhBODA3QzEwNkVEMzExRThBRkI1RkJDRjI1NTk0MDIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+z4uoxgAAAC5JREFUeNpi/O9jzTAQgAVK/0cSY6SHGBPDAIFRi0ctHrWY6gUIIxY5mooBBBgANXMHprRYLDsAAAAASUVORK5CYII="
                  class="product-6-layout-view"
                >
              </li>
            </ul>
          </div>
          <div class="product-page-filter">
            <OrderBy @change="handleOrderChange" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import OrderBy from '~/components/Category/OrderBy.vue'

@Component({
  components: {
    OrderBy
  }
})
export default class ProductTopFilters extends Vue {
  handleOrderChange (): void {
  }
}
</script>

<style scoped>

</style>
