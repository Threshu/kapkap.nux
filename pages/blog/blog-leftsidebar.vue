<template>
  <div>
    <Breadcrumb title="Blog" />

    <section class="section-b-space blog-page ratio2_3">
      <div class="container">
        <div class="row">
          <BlogSidebar />
          <div class="col-xl-9 col-lg-8 col-md-7 order-sec">
            <BlogList />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    Breadcrumb: () => import(/* webpackChunkName: "Breadcrumb" */ '~/components/Common/Breadcrumb.vue'),
    BlogSidebar: () => import(/* webpackChunkName: "BlogSidebar" */ './widgets/blog-sidebar.vue'),
    BlogList: () => import(/* webpackChunkName: "BlogList" */ './widgets/blog-list.vue')
  }
}
</script>
