<template>
  <div>
    <Breadcrumb title="Blog" />

    <section class="section-b-space blog-page ratio2_3">
      <div class="container">
        <div class="row">
          <!--Blog sidebar start-->
          <BlogSidebar />
          <!--Blog sidebar start-->
          <!--Blog List start-->
          <div class="col-xl-9 col-lg-8 col-md-7 order-sec">
            <BlogList />
          </div>
          <!--Blog List start-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BlogSidebar from './widgets/blog-sidebar.vue'
import BlogList from './widgets/blog-list.vue'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'

export default {
  components: {
    Breadcrumb,
    BlogSidebar,
    BlogList
  }
}
</script>
