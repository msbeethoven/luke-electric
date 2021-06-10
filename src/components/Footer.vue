<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <body style="margin: 0;">
      <div class="the_footer">
        <div class="footer">
          <div class="section w988">
            <div class="list_block type_article column_amt_4 small">
              <!-- Start of composite -->
              <div
                rel="1"
                class="widget the_list_item ftr_txt_color tsI_footer_tmpl_cls"
              >
                <h2 class="list_block_headline"><span>Menu</span></h2>
                <div class="menu-footer-menu-container">
                  <ul id="menu-primary-menu" class="menu">
                    <li
                      class=" menu-item menu-item-431039 menu-item-object-page menu-item-type- current-menu-item current_page_item page_item page-item-401860"
                      id="menu-item-431039"
                    >
                      <router-link to="/">Home</router-link>
                    </li>
                    <li
                      class=" menu-item menu-item-431044 menu-item-object-page menu-item-type-post_type "
                      id="menu-item-431044"
                    >
                      <router-link to="/panel-upgrades"
                        >Panel Upgrades</router-link
                      >
                    </li>
                    <li
                      class=" menu-item menu-item-431045 menu-item-object-page menu-item-type-post_type "
                      id="menu-item-431045"
                    >
                      <router-link to="/new-construction-electrical"
                        >New Construction Electrical
                      </router-link>
                    </li>
                    <li
                      class=" menu-item menu-item-431046 menu-item-object-page menu-item-type-post_type "
                      id="menu-item-431046"
                    >
                      <router-link to="/electrical-repairs"
                        >Electrical Repairs</router-link
                      >
                    </li>
                    <li
                      class=" menu-item menu-item-431047 menu-item-object-page menu-item-type-post_type "
                      id="menu-item-431047"
                    >
                      <router-link to="/outdoor-lighting"
                        >Outdoor Lighting</router-link
                      >
                    </li>
                    <li
                      class=" menu-item menu-item-431049 menu-item-object-page menu-item-type-post_type "
                      id="menu-item-431049"
                    >
                      <router-link to="/testimonials">Testimonials</router-link>
                    </li>
                    <li
                      class=" menu-item menu-item-431050 menu-item-object-page menu-item-type-post_type "
                      id="menu-item-431050"
                    >
                      <router-link to="/contact">Contact</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                rel="1"
                class="widget the_list_item ftr_txt_color tsI_footer_tmpl_cls"
              >
                <h2 class="list_block_headline"><span>Social</span></h2>
                <ul class="social-media-links">
                  <li class="custom-social-1">
                    <a
                      href="https://www.google.com/maps/place/Luke+Electric+LLC/@40.7005691,-74.9635502,15z/data=!4m5!3m4!1s0x0:0x935b5fafd5a5016a!8m2!3d40.7005691!4d-74.9635502"
                      title="Google"
                      target="_blank"
                    ></a>
                  </li>
                  <li class="sendtofriend">
                    <a
                      href="mailto:?subject=Check out Luke Electric&amp;body=I thought you%27d be interested in this site%3A%0Ahttp%3A%2F%2Flukeelectricnj.com%2F"
                      title="Send to a Friend"
                      target="_blank"
                      class="email_icon"
                    ></a>
                  </li>
                  <li class="printthispage">
                    <a
                      href="javascript:window.print()"
                      title="Print This Page"
                      class="print_icon"
                    ></a>
                  </li>
                </ul>
              </div>
              <!-- End of composite -->
            </div>
          </div>
        </div>
        <!-- closed class="footer" -->
        <div class="footer_brand">
          <div
            id="_the_logo"
            class="_is_plugin footer-logo"
            slug="_the_logo"
            data-extra-args='{"section":"footer"}'
          >
            <h2 class="logo logo-v2">
              <div
                data-numslots="1"
                class="logo-variation logo-variation-footer"
              >
                <div
                  class="logo-slot pct100 slot_0 slot-type-image align-center"
                >
                  <router-link to="/"
                    ><img src="../assets/logo_1.png"
                  /></router-link>
                </div>
              </div>
            </h2>
          </div>
        </div>
        <!-- closed class="footer_brand" -->
        <div class="footer">
          <div id="_the_copyright">
            <div class="copy">
              <ul rel="1">
                <li>
                  Copyright ©{{ new Date().getFullYear() }} Luke Electric, all
                  rights reserved.
                </li>
                <li>
                  <span class="footer-street-address footer-address"
                    >59 Blossom Road, &nbsp;</span
                  ><span class="footer-city-state-zip-address footer-address"
                    ><span>Hampton</span
                    >,&nbsp;<span>NJ</span>&nbsp;<span>08827</span>&nbsp;&nbsp;</span
                  >
                  <span class="footer-phone-address footer-address">
                    (908) 246-8546
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- closed class="footer" with copyright-->
      </div>
    </body>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.the_footer {
  max-width: 100% !important;
}
/* 
.the_footer {
    max-width: 100% !important;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
} */

#wrapper .footer {
  background-color: #18336a;
  background-image: none;
}

.footer {
  background-color: #18336a;
  background-image: none;
  color: #ffffff;
  width: inherit;
}

.the_footer .section {
  display: table;
  margin: 0;
  width: 100%;
  float: none;
}

.footer_brand {
  margin: 0;
  padding: 0.4rem 2.6rem;
  clear: both;
  display: inline-block;
  font-size: 0;
}

.the_footer #_the_copyright .copy {
  display: block;
  text-align: left;
  font-size: small;
  padding: 5px;
}

.the_footer .list_block {
  display: table-row;
  float: none;
}

.the_footer .list_block .list_block_headline {
  height: auto;
  margin: 0;
}

.widget .menu a,
.widget.the_list_item {
  font-size: 12px;
  color: white;
  text-decoration: none;
}

.the_footer .widget {
  display: table-cell;
  float: none;
}

.the_footer .the_list_item {
  padding: 5rem 2.025% 3rem;
  width: 25%;
}

.the_footer .list_block .list_block_headline {
  height: auto;
  margin: 0;
}

.the_footer .menu {
  column-count: 2;
  column-gap: 0.5rem;
}

/* #wrapper .widget .menu a {
    line-height: 1.25;
    font-weight: 700;
    padding: 4px 6px 8px;
    padding: .4rem .6rem .8rem;
    display: inline-block;
    width: 100%;
} */

li {
  list-style-type: none;
}

.footer_brand .logo-variation-footer .logo-slot.slot-type-image img {
  width: auto;
  max-height: 6rem;
  max-width: 100%;
  margin: 0.6rem 0;
}
</style>
