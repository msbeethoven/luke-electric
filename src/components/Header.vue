<template>
  <div id="the_header" class="header">
    <div class="ss_container header_share_wrap inline-list">
      <div class="share_icons-wrap share_icons">
        <div class="share_icons_list">
          <a
            href="tel:+1-908-246-8546"
            class="phone"
            data-icon="A"
            title="(908) 246-8546"
          ></a>
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
      </div>
    </div>

    <!-- <div class="mobile-triggers">
      <a href="#" class="trigger menu-trigger"><span>a</span></a>
      <a href="#" class="trigger share-trigger"><span>!</span></a>
    </div> -->

    <div
      id="_the_logo"
      class="_is_plugin header-logo"
      slug="_the_logo"
      data-extra-args='{"section":"header"}'
    >
      <h2 class="logo logo-v2">
        <div data-numslots="1" class="logo-variation logo-variation-header">
          <!-- <div class="logo-slot pct100 slot_0 slot-type-image align-center">
            <a
              href="https://lukeelectricnj.com"
              title="Luke Electric"
              rel="home"
              >
              <img src="/files/2020/11/logo_1.png"/>
            </a>
          </div> -->
        </div>
        <div data-numslots="1" class="logo-variation logo-variation-mobile">
          <div class="logo-slot pct100 slot_0 slot-type-image align-center">
            <router-link to="/"><img src="../assets/logo_1.png"/></router-link>
          </div>
        </div>
      </h2>
    </div>

    <div id="access" class="original_access">
      <div class="menu align-center" id="_the_navigation">
        <ul id="menu-primary-menu" rel="dennis" class="sf-menu sf-menu_bg">
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
            <router-link to="/panel-upgrades">Panel Upgrades</router-link>
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
            <router-link to="/outdoor-lighting">Outdoor Lighting</router-link>
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
  </div>
  <router-view />
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
/*
 * 
 * THEME FONTS
 *
 */

/*
 * 
 * LOCATION:
 * /var/www/production.townsquareinteractive.com/docs/current/wp-content/themes/beacon-theme_easton/
 */

/*
 * 
 * Theme Fonts:
 * Laravel Theme Design Option fonts for beacon-theme_easton
 */

/*
 * 
 * Font Types:
 * Laravel Theme Design Option fonts_list for beacon-theme_easton
 */

/* FONTS:
body: Array
(
    [label] => Lato
    [google] => Lato:300,400,700,900,300italic,400italic,700italic,900italic
    [font-family] => 'Lato'
    [is-body-font] => 1
    [is-feat-font] => 1
    [is-hdrs-font] => 1
    [is-logo-font] => 1
)
feat: Array
(
    [label] => Lato
    [google] => Lato:300,400,700,900,300italic,400italic,700italic,900italic
    [font-family] => 'Lato'
    [is-body-font] => 1
    [is-feat-font] => 1
    [is-hdrs-font] => 1
    [is-logo-font] => 1
)
hdrs: Array
(
    [label] => Lato
    [google] => Lato:300,400,700,900,300italic,400italic,700italic,900italic
    [font-family] => 'Lato'
    [is-body-font] => 1
    [is-feat-font] => 1
    [is-hdrs-font] => 1
    [is-logo-font] => 1
)
*/

@import url(
  https://fonts.googleapis.com/css?family=Lato:300,
  400,
  700,
  900,
  300italic,
  400italic,
  700italic,
  900italic&display=swap
);

body.beacon {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-weight: normal;
}
#wrapper h1,
#wrapper h2,
#wrapper h3,
#wrapper h4,
#wrapper h5,
#wrapper h6,
#wrapper dt,
#wrapper th,
#wrapper .gce-list-title,
.type_list .the_list_item li:before {
  font-family: "Lato", Helvetica, Arial, sans-serif;
}

#wrapper .type_gallery .hero .the_list_item_headline,
#wrapper .type_gallery .no_image .the_list_item_headline,
#wrapper .type_photo_grid .hero .the_list_item_headline,
#wrapper .type_photo_grid .no_image .the_list_item_headline {
  font-family: "Lato";
}

/*
 * 
 * THEME COLORS
 *
 */

/*
 * 
 * Theme Colors:
 * Laravel Theme Design Option colors for beacon-theme_easton
 */

/*
 * 
 * Theme CSS Colors:
 * /var/www/production.townsquareinteractive.com/docs/current/wp-content/themes/beacon-theme_easton/css/theme_colors.css
 */

/*
 * 
 * Theme Background:
 * Laravel Theme Design Option backgrounds for beacon-theme_easton
 */

/* main_bg Array
(
    [src] => /wp-content/uploads/b2b/backgrounds/beacon/no-bkg-img.gif
    [repeat] => repeat-x
    [position] => center top
    [attachment] => 
    [size] => 
    [bgcolor] => 
)
*/ /*Array
(
    [color_1] => #18336a
    [color_2] => #575757
    [color_3] => #18336a
    [color_4] => #ffffff
    [color_5] => #ffffff
    [color_6] => #fff
    [color_7] => #18336a
    [color_8] => #ecaf20
    [color_9] => #18336a
    [color_12] => #ffffff
    [color_13] => #ecaf20
    [color_14] => #ffffff
    [color_15] => #ecaf20
    [color_16] => #18336a
    [color_17] => rgba(255,255,255,1);background-color:#ffffff\9
    [color_18] => rgba(255,255,255,.55);background-color:#ffffff\9
    [color_20] => #18336a
    [color_21] => rgba(0,0,0,.2);background-color:#000000\9
    [color_3a] => #ecaf20
    [IMAGE_SRC] => /wp-content/uploads/b2b/backgrounds/beacon/no-bkg-img.gif
    [IMAGE_REP] => repeat-x
    [IMAGE_POS] => center top
    [IMAGE_ATT] => 
    [IMAGE_SIZE] => 
)
*/
:root {
  --heads: #18336a;
  --text: #575757;
  --links: #ecaf20;
  --accentBkg: #18336a;
  --accentTxt: #ffffff;
  --socialTxt: #ffffff;
  --navLinks: #fff;
  --navTabBkg: #18336a;
  --navTabTxt: #ecaf20;
  --logo: #18336a;
  --footTxt: #ffffff;
  --footLinks: #ecaf20;
  --imgBkg: rgba(0, 0, 0, 0.2);
  background-color: #000000\9;
  --mainBkg: #ffffff;
  --socialBkg: #ecaf20;
  --navBkg: #18336a;
  --headBkg: rgba(255, 255, 255, 1);
  background-color: #ffffff\9;
  --contentBkg: rgba(255, 255, 255, 0.55);
  background-color: #ffffff\9;
  --footBkg: #18336a;
}

/* EASTON - GENERAL COLORS*/
body {
  background-color: #ffffff;
}

html:not(.mobileview) body,
.no-mediaqueries body,
.mobileview .mobile-wrapper {
  background-image: url("/wp-content/uploads/b2b/backgrounds/beacon/no-bkg-img.gif");
  background-repeat: repeat-x;
  background-position: center top;
  background-attachment: ;
  background-size: ;
}

/*OVERRIDE BACKGROUND COLOR IF BACKGROUND IMAGE EXISTS WITH COLOR*/
body {
}

/*COLOR_1 / HEADLINES*/
#container h1,
#container h2,
#container h3,
#container h4,
#container h5,
#container h6,
#container dt,
#container th {
  color: #18336a;
}
::selection {
  background: #18336a;
}
::-moz-selection {
  background: #18336a;
}
#container #_the_contactfrm_wrapper .b2b-form label span.required-icon {
  color: #18336a;
}
#container .list_block .the_list_item .type-post .the_list_item_subheadline a {
  color: #18336a;
}

/*COLOR_2 / TEXT*/
#container {
  color: #575757;
}
#container #_the_contactfrm_wrapper label {
  color: #575757;
}

/*COLOR_3a / LINKS*/
#container a {
  color: #ecaf20;
}
#wrapper .mobile-abovepost a {
  color: #ecaf20;
}
#wrapper
  .type_photo_grid
  .the_list_item.not_hero
  .the_list_item_heads
  .the_list_item_action
  a {
  color: #ecaf20;
}

/*COLOR_3 & COLOR_4 / HERO COLORS*/
#wrapper #_the_map_wrapper .b2b-location h2,
#wrapper #_the_map_wrapper a,
#wrapper #_the_map_wrapper .b2b-location-see-more {
  color: #ffffff;
}
#wrapper #_the_map_wrapper .b2b-location.wide ul,
#wrapper #_the_map_wrapper .b2b-location .b2b-location-items-container {
  background: #18336a;
  color: #ffffff;
}
#wrapper #_the_map_wrapper .b2b-location.wide .b2b-location-items ul li:hover,
#wrapper #_the_map_wrapper .b2b-location .b2b-location-expand-icon {
  background: #ffffff;
  color: #18336a;
}
#wrapper
  #_the_map_wrapper
  .b2b-location.wide
  .b2b-location-items
  ul
  li:hover
  * {
  color: #18336a;
}
#wrapper
  #_the_map_wrapper
  .b2b-location.wide
  .b2b-location-items.show-details
  ul
  li:hover
  * {
  color: #ffffff;
}
#wrapper
  #_the_map_wrapper
  .b2b-location
  .b2b-location-items
  ul
  li:hover
  .b2b-location-expand-icon {
  background: #18336a;
  color: #ffffff;
}

#wrapper #container #_the_contactfrm_wrapper .b2b-form .b2b-form-submit,
#container .section .g_color .slidesjs-pagination a.accent_color_bg,
.slick-dots li.slick-active button {
  background-color: #18336a;
  color: #ffffff;
}
#wrapper #_the_contactfrm_wrapper .b2b-form .b2b-form-submit span {
  color: #ffffff;
}

#wrapper .the_list_item .the_list_item_action {
  background-color: #18336a;
}
#wrapper .the_list_item .read-more.the_list_item_action span,
#wrapper .the_list_item .the_list_item_action a {
  color: #ffffff;
}

#container .the_list_item .gform_wrapper .gform_page_footer input.button {
  background-color: #ffffff;
  color: #18336a;
}
#container .the_list_item.hero .gform_wrapper .gform_page_footer input.button {
  background-color: #18336a;
  color: #ffffff;
}

#container .tsI_page-login .tsI_form-button,
#container .the_list_item .gform_wrapper .percentbar_blue,
#container
  .the_list_item
  .gform_wrapper
  .gform_page_footer
  input[type="submit"],
#container .the_list_item .gform_wrapper .gform_footer input.button,
#container .the_list_item .gform_footer input[type="submit"] {
  background-color: #18336a;
  color: #ffffff;
}

#container .tsI_page-login .tsI_form-button:hover,
#container .the_list_item.hero .gform_wrapper .gf_progressbar_percentage,
#container
  .the_list_item.hero
  .gform_wrapper
  .gform_page_footer
  input[type="submit"],
#container .the_list_item.hero .gform_wrapper .gform_footer input.button,
#container .the_list_item.hero .gform_footer input[type="submit"] {
  background-color: #ffffff;
  color: #18336a;
}

/*#container .section .list_block.type_article.a3 .the_list_item.not_hero.yes_link .banner_bkg{background-color: #18336a;}*/
#container .type_article.a3 .the_list_item.no_image .the_list_item_action,
#wrapper .the_list_item.hero .the_list_item_action,
#wrapper .type_photo_grid .the_list_item.no_image .the_list_item_action,
#wrapper .g_color .the_list_item.no_image .the_list_item_action {
  background-color: #ffffff;
}
#container .type_article.a3 .the_list_item.no_image .the_list_item_action a,
#wrapper .the_list_item.hero .the_list_item_action a,
#wrapper .type_photo_grid .the_list_item.no_image .the_list_item_action a,
#wrapper
  .type_photo_grid
  .the_list_item.not_hero
  .the_list_item_heads
  .the_list_item_action
  a,
#wrapper .g_color .the_list_item.no_image .the_list_item_action a {
  color: #18336a;
}

#container .type_article.a3 .banner_link a,
#container .the_list_item.hero a {
  color: #ffffff;
}
#container .type_article.a3.well .type-post,
#container .type_article.a3 .the_list_item,
#container .type_article.a3.well .the_list_item.not_hero:nth-of-type(1n),
#container .type_article .the_list_item.hero,
#container .type_menu .the_list_item.hero,
/*#container .list_block tr.the_list_item.hero:nth-child(odd),*/
#container .type_services .the_list_item.hero,
#container .type_testimonials .hero .the_list_item_desc,
#container .g_color .no_image {
  background-color: #18336a;
  color: #ffffff;
}

#container .the_list_item.hero .gform_wrapper h2.gsection_title,
#container .type_article.a3 .the_list_item .the_list_item_headline,
#container .type_article.a3 .the_list_item .the_list_item_subheadline,
#container .type_article .the_list_item.hero .the_list_item_headline,
#container .type_article .the_list_item.hero .the_list_item_subheadline,
#container .type_services.s1 .the_list_item.hero .the_list_item_headline,
#container .type_services.s1 .the_list_item.hero .the_list_item_subheadline,
#container .type_services.s2 .the_list_item.hero .the_list_item_headline,
#container .type_services.s2 .the_list_item.hero .the_list_item_subheadline,
#container .type_services.s3 .the_list_item.hero .the_list_item_headline,
#container .type_services.s3 .the_list_item.hero .the_list_item_subheadline,
#container .list_block tr.the_list_item.hero th,
#container .type_menu .the_list_item.hero .the_list_item_headline,
#container .type_menu .the_list_item.hero .the_list_item_subheadline,
#container .g_color .the_list_item.no_image .the_list_item_headline,
#container .g_color .the_list_item.no_image .the_list_item_subheadline,
#container .type_article.a3 .the_list_item .the_list_item_headline a,
#container .type_article.a3 .the_list_item .the_list_item_subheadline a,
#container .type_article .the_list_item.hero .the_list_item_headline a,
#container .type_article .the_list_item.hero .the_list_item_subheadline a,
#container .type_services.s1 .the_list_item.hero .the_list_item_headline a,
#container .type_services.s1 .the_list_item.hero .the_list_item_subheadline a,
#container .type_services.s2 .the_list_item.hero .the_list_item_headline a,
#container .type_services.s2 .the_list_item.hero .the_list_item_subheadline a,
#container .type_services.s3 .the_list_item.hero .the_list_item_headline a,
#container .type_services.s3 .the_list_item.hero .the_list_item_subheadline a,
#container .list_block tr.the_list_item.hero th a,
#container .type_menu .the_list_item.hero .the_list_item_headline a,
#container .type_menu .the_list_item.hero .the_list_item_subheadline a,
#container .g_color .the_list_item.no_image .the_list_item_headline a,
#container .g_color .the_list_item.no_image .the_list_item_subheadline a,
#container .g_color .the_list_item.no_image .the_list_item_desc * {
  color: #ffffff;
}
#container .type_testimonials .hero .the_list_item_heads:after {
  border-right-color: #18336a;
}

#container .type_testimonials .the_list_item.not_hero .the_list_item_desc p *,
#container .type_testimonials .the_list_item .the_list_item_headline,
#container .type_testimonials .the_list_item .the_list_item_subheadline,
#container .type_testimonials .the_list_item .the_list_item_headline a,
#container .type_testimonials .the_list_item .the_list_item_subheadline a {
  color: #575757;
}

#container .type_services.s2 .the_list_item .the_services_number {
  background-color: #18336a;
  color: #ffffff;
}
#container .type_services.s2 .the_list_item.hero .the_services_number {
  background-color: #ffffff;
  color: #18336a;
}
#container .type_services.s1 .the_services_number:before {
  color: #18336a;
}
#container .type_services.s1 .the_services_number:after {
  text-shadow: 2px 1px 0 #18336a;
  color: #ffffff;
}

#container .list_block_headline {
  background-color: #18336a;
}
#container .list_block_headline span,
#container .type_photo_grid .the_list_item .the_list_item_image:before,
#container .g_color.pg_v2 .the_list_item .caption:before,
#container .g_color .slides .the_list_item .caption:before {
  background-color: #18336a;
  color: #ffffff;
}
#container .type_services.s1 .the_list_item_subheadline,
#container .type_services.s3 .the_list_item_subheadline {
  background-color: #18336a;
  color: #ffffff;
}
#container .type_photo_grid .the_list_item_image {
  background-color: #18336a;
}
#container .type_photo_grid .the_list_item.no_image .the_list_item_headline a,
#container .type_photo_grid .the_list_item.no_image .the_list_item_headline,
#container
  .type_photo_grid
  .the_list_item.no_image
  .the_list_item_subheadline
  a,
#container .type_photo_grid .the_list_item.no_image .the_list_item_subheadline,
#container .type_photo_grid .the_list_item.no_image .the_list_item_desc {
  color: #ffffff;
}
#container .type_photo_grid .the_list_item.no_image .the_list_item_desc {
  background-color: #18336a;
}
#container .type_photo_grid .the_list_item.no_image .the_list_item_image:before,
#container .type_photo_grid .the_list_item.hero .the_list_text:before {
  background-color: #ffffff;
  color: #18336a;
}
#container .type_photo_grid .the_list_item.no_image .accent_color_bg {
  background-color: #ffffff;
  color: #18336a;
}
#container .list_block_headline span.cat-title {
  background: none;
  color: #18336a;
}

#container .the_list_item .type-post .the_list_item_desc blockquote {
  border-color: #18336a;
  background: #ffffff;
  color: #18336a;
}
#container .the_list_item .type-post .the_list_item_desc blockquote:before,
#container .the_list_item .type-post .the_list_item_desc blockquote:after {
  color: #18336a;
}

#container
  .list_block.type_menu.m3
  .the_list_item.hero
  .the_list_item_headline
  span {
  background-color: #18336a;
}
#container
  .list_block.type_menu.m3
  .the_list_item.hero
  .the_list_item_subheadline {
  background-color: #18336a;
}

#wrapper .contact_column #searchsubmit,
#container .contact_column a.at300b,
#wrapper .contact_column .the_list_item_headline {
  background-color: #ffffff;
  color: #18336a;
}
#wrapper .contact_column #_the_contactfrm_wrapper .b2b-form .b2b-form-submit {
  background-color: #18336a;
  color: #ffffff;
}
#wrapper
  .contact_column
  #_the_contactfrm_wrapper
  .b2b-form
  .b2b-form-submit
  span {
  color: #ffffff;
}
#container .contact_column #_the_map_wrapper * {
  color: #ffffff;
}

#container .gce-list li {
  color: #18336a;
}
#container .calendar-list-event {
  background-color: #18336a;
  color: #ffffff;
}
.gce-list li {
  color: #18336a;
}
#container .calendar-list-event .the_list_item_headline,
#container .calendar-list-event .the_list_item_subheadline,
#container .calendar-list-event a {
  color: #ffffff;
}

/*COLOR_5 / SOCIAL TEXT*/
.header_share_wrap {
  color: #ffffff;
}
.mobile-triggers .trigger span {
  color: #ffffff;
}
.header_share_wrap a {
  color: #ffffff;
}

/*COLOR_6 / NAV LINKS*/
#the_header .menu {
  background-color: #18336a;
}
#the_header .menu a {
  color: #fff;
}
#the_header .menu a:hover,
#the_header .menu .current-menu-item a,
#menu-holder li a:hover {
  color: #ecaf20;
  background-color: #18336a;
}
#menu-holder {
  background-color: #18336a;
  color: #fff;
}
#menu-holder-topBorder {
  background-color: #18336a;
}
#menu-holder li a {
  color: #fff;
}

.mediaqueries.mobileview #access {
  background-color: #18336a;
}
.mediaqueries.mobileview #access .menu a {
  color: #fff;
}
.mediaqueries.mobileview #access .menu a:hover,
.mediaqueries.mobileview #access .menu .current-menu-item > a {
  color: #ecaf20;
  background-color: #18336a;
}

/*COLOR_9 / LOGO*/
#wrapper #_the_logo,
#wrapper #_the_logo a {
  color: #18336a;
}
#wrapper #_the_logo {
  color: #18336a;
}

/*COLOR_10 / RIGHT RAIL TEXT*/
#wrapper .contact_column * {
  color: ;
}

/*COLOR_11 / RIGHT RAIL LINKS*/
#wrapper .contact_column a {
  color: ;
}

/*COLOR_12 / FOOTER TEXT*/
#wrapper .footer {
  color: #ffffff;
}

/*COLOR_13 / FOOTER LINKS*/
#wrapper .footer a {
  color: #ecaf20;
}
#wrapper .footer #searchsubmit {
  background-color: #ecaf20;
}
#the_footer #_the_contactfrm_wrapper .b2b-form .b2b-form-submit {
  background-color: #ffffff;
  color: #18336a;
}
#the_footer #_the_contactfrm_wrapper .b2b-form .b2b-form-submit span {
  color: #18336a;
}
#the_footer #_the_contactfrm_wrapper .b2b-form label span.required-icon {
  color: #ecaf20;
}
#the_footer .menu a {
  color: #ffffff;
}
#the_footer .menu a:hover {
  color: #ecaf20;
}
#the_footer .menu .current-menu-item > a {
  color: #ecaf20;
}
#the_footer .social-media-links a {
  color: #ffffff;
}
#the_footer .social-media-links a:hover {
  color: #ecaf20;
}

/*COLOR_15 / SOCIAL BAR BKG*/
.header_share_wrap,
.mobile-triggers .trigger span,
.header_share_wrap a:after {
  background-color: #ecaf20;
}

/*COLOR_16 / NAV BKG*/
#_the_navigation .sf-menu {
  background-color: #18336a;
}
#menu-holder {
  background-color: #18336a;
}
.mediaqueries.mobileview #access {
  background-color: #18336a;
}
.mediaqueries.mobileview #_the_navigation .sf-menu {
  background: none;
}

/*COLOR_17 / FOOTER BRAND*/
#wrapper .footer_brand {
  background-color: rgba(255, 255, 255, 1);
  background-color: #ffffff\9;
}
#wrapper .header {
  background-color: rgba(255, 255, 255, 1);
  background-color: #ffffff\9;
}

/*COLOR_18 / CONTENT BKG*/
/*#container .list_block tr.the_list_item{border-bottom:1px solid rgba(255,255,255,.55);background-color:#ffffff\9;}*/
#wrapper .page_title,
#wrapper .content {
  background-color: rgba(255, 255, 255, 0.55);
  background-color: #ffffff\9;
}
#wrapper .full_width_content {
  background-color: rgba(255, 255, 255, 0.55);
  background-color: #ffffff\9;
}
#wrapper .content {
  background-color: rgba(255, 255, 255, 0.55);
  background-color: #ffffff\9;
}
#wrapper .mobile-abovepost {
  background-color: rgba(255, 255, 255, 0.55);
  background-color: #ffffff\9;
}
#container .type_menu.m3 .the_list_item .the_list_item_headline span {
  background-color: rgba(255, 255, 255, 0.55);
  background-color: #ffffff\9;
}
#container .type_menu.m3 .the_list_item .the_list_item_subheadline {
  background-color: rgba(255, 255, 255, 0.55);
  background-color: #ffffff\9;
}

/*COLOR_19 / RIGHT RAIL BKG*/
#container .section .well .type-post,
#wrapper .contact_column {
  background-color: ;
}

/*COLOR_20 / FOOTER*/
#wrapper .footer {
  background-color: #18336a;
  background-image: none;
}
#wrapper .footer #searchsubmit {
  background-color: #ffffff;
  color: #18336a;
}

/*ITEM COLORS*/
#container .g_color .the_list_item_desc *,
#container .g_color .the_list_item_headline,
#container .g_color .the_list_item_subheadline,
#container .g_color .the_list_item_headline a,
#container .g_color .the_list_item_subheadline a {
  color: #f7f7f7;
}

/*FOOTER COLORS*/
#wrapper .footer input,
#wrapper .footer select,
#wrapper .footer option,
#wrapper .footer textarea {
  color: #333;
}
#wrapper .contact_column input,
#wrapper .contact_column select,
#wrapper .contact_column option,
#wrapper .contact_column textarea {
  color: #333;
}

/*MODAL*/
.modal_wrap .modal_content {
  background-color: #18336a;
}
.modal_list_wrap {
  background-color: #ffffff;
}
.modal_list .tsi-address a {
  background-color: #ffffff;
}
.modal_list a {
  color: #18336a;
}
.modal_content .modal_title,
.modal_content .modal_title {
  background: #18336a;
  color: #ffffff;
}
#wrapper .modal_content .modal_close {
  background: #ffffff;
  color: #18336a;
}
#wrapper .modal_content .modal_close:hover {
  background: #18336a;
  color: #ffffff;
}

.type_modal .the_list_item {
  color: #ffffff;
  background-color: #18336a;
}
.type_modal .the_list_item .the_list_item_heads *,
.type_modal .the_list_item .gform_title {
  color: #18336a;
}

/*PHONES /////////////////////// */
.isMobile
  #container
  .g_color:not(.pg_v2).scaled_to_fit_2-4_1
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_headline,
.isMobile
  #container
  .g_color:not(.pg_v2).scaled_to_fit_2-4_1
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_headline
  a,
.isMobile
  #container
  .g_color:not(.pg_v2).scaled_to_fit_2-4_1
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_subheadline,
.isMobile
  #container
  .g_color:not(.pg_v2).scaled_to_fit_2-4_1
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_subheadline
  a,
.isMobile
  #container
  .g_color:not(.pg_v2).scaled_to_fit_2-4_1
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_desc
  *,
.isMobile
  #container
  .g_color:not(.pg_v2).widescreen_16_9
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_headline,
.isMobile
  #container
  .g_color:not(.pg_v2).widescreen_16_9
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_headline
  a,
.isMobile
  #container
  .g_color:not(.pg_v2).widescreen_16_9
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_subheadline,
.isMobile
  #container
  .g_color:not(.pg_v2).widescreen_16_9
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_subheadline
  a,
.isMobile
  #container
  .g_color:not(.pg_v2).widescreen_16_9
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_desc
  *,
.isMobile
  #container
  .g_color:not(.pg_v2).widescreen_2-4_1
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_headline,
.isMobile
  #container
  .g_color:not(.pg_v2).widescreen_2-4_1
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_headline
  a,
.isMobile
  #container
  .g_color:not(.pg_v2).widescreen_2-4_1
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_subheadline,
.isMobile
  #container
  .g_color:not(.pg_v2).widescreen_2-4_1
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_subheadline
  a,
.isMobile
  #container
  .g_color:not(.pg_v2).widescreen_2-4_1
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_desc
  * {
  color: #575757;
}
.isMobile
  #container
  .g_color:not(.pg_v2).scaled_to_fit_2-4_1
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_action,
.isMobile
  #container
  .g_color:not(.pg_v2).widescreen_16_9
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_action,
.isMobile
  #container
  .g_color:not(.pg_v2).widescreen_2-4_1
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_action {
  background-color: #18336a;
}
.isMobile
  #container
  .g_color:not(.pg_v2).scaled_to_fit_2-4_1
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_action
  a,
.isMobile
  #container
  .g_color:not(.pg_v2).widescreen_16_9
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_action
  a,
.isMobile
  #container
  .g_color:not(.pg_v2).widescreen_2-4_1
  .the_list_item:not(.no_image)
  .caption
  .the_list_item_action
  a {
  color: #ffffff;
}

@media only screen and (max-width: 568px) {
  .mobileview
    #container
    .g_color.pg_v2.yResize
    .the_list_item:not(.no_image)
    .caption
    * {
    color: #575757;
  }
  .mobileview
    #container
    .g_color.pg_v2.yResize
    .the_list_item:not(.no_image)
    .the_list_item_action {
    background-color: #18336a;
  }
  .mobileview
    #container
    .g_color.pg_v2.yResize
    .the_list_item:not(.no_image)
    .the_list_item_action
    a {
    color: #ffffff;
  }
}

/*REVIEWS*/
#container .type_reviews .hero .the_list_item_desc {
  background-color: #18336a;
  color: #ffffff;
}
#container .type_reviews .hero .the_list_item_heads:after {
  border-right-color: #18336a;
}
#container .type_reviews .hero .the_list_item_subheadline .icon-star {
  color: #ffffff;
}

/*NEW GALLERIES*/
#container
  .section
  .g_color.g2
  .the_gallery_item.yes_image
  .the_list_item_action {
  color: #ecaf20;
}
#container
  .section
  .g_color.g2
  .the_gallery_item.no_image
  .the_list_item_action {
  background-color: #ffffff;
  color: #18336a;
}
#container .section .g_color.g2 .caption:before {
  background-color: #ffffff;
  color: #18336a;
}
#container
  .section
  .g_color.g2
  .slick-nav
  .the_gallery_item.slick-slide:hover
  .caption,
#container
  .section
  .g_color.g2
  .slick-nav
  .the_gallery_item.slick-current
  .caption {
  box-shadow: 0 0 0 2px #ecaf20;
}
#container .section .g_color.g2 .slick-arrow {
  color: #ecaf20;
}
#container .section .g_color.g2 .slick-slides .the_gallery_item.no_image {
  background-color: #18336a;
}
#container
  .section
  .g_color.g2
  .slick-nav
  .the_gallery_item.no_image
  .the_list_text {
  background-color: #18336a;
}
#container
  .section
  .g_color.g2
  .the_gallery_item.no_image
  .the_list_item_action {
  background-color: #ffffff;
}
#container
  .section
  .g_color.g2
  .the_gallery_item.no_image
  .the_list_item_action
  a {
  color: #18336a;
}

#container .section .type_testimonials.t2 .slick-prev,
#container .section .type_testimonials.t2 .slick-next {
  background-color: #ffffff;
  color: #18336a;
}

#container .no_set_width_4_3 .the_list_item_image,
#container .no_set_width_1_1 .the_list_item_image {
  background-color: rgba(0, 0, 0, 0.2);
  background-color: #000000\9;
}

body.mce-content-body div {
  background-color: rgba(255, 255, 255, 1);
  background-color: #ffffff\9;
  color: #18336a;
}

/* SECTION ---------------------------------------------------------- */

/* TABS 1 */
.type_section .tsI_tabs_wrp.sec-tabs-1 .tsI_tabs {
  border-color: #ffffff;
}
.type_section .tsI_tabs_wrp.sec-tabs-1 .tsI_tabs .tab-link {
  color: #ffffff;
  border-color: transparent;
}
.type_section .tsI_tabs_wrp.sec-tabs-1 .tsI_tabs .tab-link:hover {
  border-color: #ffffff;
}
.type_section .tsI_tabs_wrp.sec-tabs-1 .tsI_tabs .tab-link.current {
  background-color: #ffffff;
  color: #18336a;
}

/* TABS 2 */
.type_section .tsI_tabs_wrp.sec-tabs-2 .tsI_tabs {
  background: ;
}
.type_section .tsI_tabs_wrp.sec-tabs-2 .tsI_tabs .tab-link {
  color: #ecaf20;
}
.type_section .tsI_tabs_wrp.sec-tabs-2 .tsI_tabs .tab-link:hover {
  color: #ffffff;
}
.type_section .tsI_tabs_wrp.sec-tabs-2 .tsI_tabs .tab-link.current {
  background-color: #ffffff;
  color: #18336a;
}

/* TABS 3 */
.type_section .tsI_tabs_wrp.sec-tabs-3 .tsI_tabs .tab-link {
  color: #ecaf20;
  border-color: ;
}
.type_section .tsI_tabs_wrp.sec-tabs-3 .tsI_tabs .tab-link:hover {
  background-color: #ffffff;
  color: #18336a;
}
.type_section .tsI_tabs_wrp.sec-tabs-3 .tsI_tabs .tab-link.current {
  background: #ffffff;
  color: #18336a;
} /* >>> <<< */

a {
  text-decoration: none;
}

html:not(.mobileview) #access .menu ul {
  display: inline-block;
  width: 100%;
  padding: 0.5rem 1rem 1rem;
}

html:not(.mobileview) #access .menu li {
  display: inline-block !important;
  position: relative;
  margin: 0.5rem 0 0;
}

html:not(.mobileview) #access .align-center {
  text-align: center;
}

html:not(.mobileview) #access .menu ul {
  display: inline-block;
  width: 100%;
  padding: 0.5rem 1rem 1rem;
}

html:not(.mobileview) #access .menu ul li a {
  border-radius: 2px;
  display: inline-block;
  padding: 0.7rem 1rem;
  margin: 0;
  position: relative;
}

.logo-slot img {
  max-height: 7rem !important;
}

.logo {
  margin: 0;
}
</style>
