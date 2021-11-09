<template>
  <div>
    <div
      v-for="(blog,index) in bloglist"
      v-show="setPaginate(index)"
      :key="index"
      class="row blog-media"
    >
      <div class="col-xl-6">
        <div class="blog-left">
          <nuxt-link :to="{ path: '/blog/blog-detail'}">
            <img :src="blog.imageURL" class="img-fluid" alt>
          </nuxt-link>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="blog-right">
          <div>
            <h6>{{ blog.dateCreated }}</h6>
            <nuxt-link :to="{ path: '/blog/blog-detail'}">
              <h4>{{ blog.title }}</h4>
            </nuxt-link>
            <ul class="post-social">
              <li>Posted By : {{ blog.author }}</li>
              <li>
                <i class="fa fa-heart" /> {{blog.views}} Hits
              </li>
              <li>
                <i class="fa fa-comments" /> {{blog.comments}} Comment
              </li>
            </ul>
            <p>{{ blog.shortContent }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="bloglist.length > paginate" class="product-pagination border-cls-blog mb-0">
      <div class="theme-paggination-block">
        <div class="row">
          <div class="col-sm-12">
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current-1)">
                    <span aria-hidden="true">
                      <i class="fa fa-chevron-left" aria-hidden="true" />
                    </span>
                  </a>
                </li>
                <li
                  v-for="(page_index, index) in pages"
                  :key="index"
                  class="page-item"
                  :class="{'active': page_index == current}"
                >
                  <a
                    class="page-link"
                    href="javascrip:void(0)"
                    @click.prevent="updatePaginate(page_index)"
                  >{{ page_index }}</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current+1)">
                    <span aria-hidden="true">
                      <i class="fa fa-chevron-right" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      current: 1,
      paginate: 6,
      paginateRange: 3,
      pages: [],
      paginates: ''
    }
  },
  computed: mapState({
    bloglist: state => state.blog.bloglist
  }),
  mounted () {
    this.getPaginate()
    this.updatePaginate(1)
  },
  methods: {
    getImgUrl (path) {
      return require('@/assets/images/' + path)
    },
    getPaginate () {
      this.paginates = Math.round(this.bloglist.length / this.paginate)
      this.pages = []
      for (let i = 0; i < this.paginates; i++) {
        this.pages.push(i + 1)
      }
    },
    setPaginate (i) {
      if (this.current === 1) {
        return i < this.paginate
      } else {
        return (
          i >= this.paginate * (this.current - 1) &&
          i < this.current * this.paginate
        )
      }
    },
    updatePaginate (i) {
      this.current = i
      let start = 0
      let end = 0
      if (this.current < this.paginateRange - 1) {
        start = 1
        end = start + this.paginateRange - 1
      } else {
        start = this.current - 1
        end = this.current + 1
      }
      if (start < 1) {
        start = 1
      }
      if (end > this.paginates) {
        end = this.paginates
      }
      this.pages = []
      for (let i = start; i <= end; i++) {
        this.pages.push(i)
      }
      return this.pages
    }
  }
}
</script>
