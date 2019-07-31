(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n    <app-spinner></app-spinner>\r\n</router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/blank/blank.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/blank/blank.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Only router without any element -->\r\n<!-- ============================================================== -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/full/full.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<div id=\"main-wrapper\" [ngClass]=\"{'show-sidebar': showMobileMenu}\" [dir]=\"options.dir\"\r\n    [attr.data-theme]=\"options.theme\" [attr.data-layout]=\"options.layout\" [attr.data-sidebartype]=\"options.sidebartype\"\r\n    [attr.data-sidebar-position]=\"options.sidebarpos\" [attr.data-header-position]=\"options.headerpos\"\r\n    [attr.data-boxed-layout]=\"options.boxed\">\r\n    <!-- ============================================================== -->\r\n    <!-- Topbar header - style you can find in topbar.scss -->\r\n    <!-- ============================================================== -->\r\n    <header class=\"topbar\" [attr.data-navbarbg]=\"options.navbarbg\">\r\n        <nav class=\"d-flex top-navbar navbar-expand-md\"\r\n            [ngClass]=\"(options.navbarbg=='skin6')?'navbar-light':'navbar-dark'\">\r\n            <div class=\"navbar-header\" [ngClass]=\"(expandLogo)?'expand-logo':''\" [attr.data-logobg]=\"options.logobg\">\r\n                <!-- This is for the sidebar toggle which is visible on mobile only -->\r\n                <a (click)=\"showMobileMenu = !showMobileMenu\"\r\n                    class=\"nav-toggler waves-effect waves-light d-block d-md-none\" href=\"javascript:void(0)\">\r\n                    <i [ngClass]=\"(showMobileMenu)?'ti-close':'ti-menu'\"></i>\r\n                </a>\r\n                <!-- ============================================================== -->\r\n                <!-- Logo -->\r\n                <!-- ============================================================== -->\r\n                <a class=\"navbar-brand\" href=\"/\">\r\n                    <!-- Logo icon -->\r\n                    <b class=\"logo-icon\">\r\n                        <img src=\"assets/images/nlr-logo.png\" alt=\"New Level Results\" class=\"dark-logo\" />\r\n                        <img src=\"assets/images/nlr-logo.png\" alt=\"New Level Results\" class=\"light-logo\" />\r\n                    </b>\r\n                    <!--End Logo icon -->\r\n                    <!-- Logo text -->\r\n                    \r\n                    <span class=\"logo-text\">\r\n                        <h2 class=\"logo-title\">NEW LEVEL RESULTS<sup>TM</sup></h2>\r\n                        <h2 class=\"small\">The Results Experts</h2>\r\n                        <!--\r\n                        <img src=\"assets/images/nlr-logo-text.png\" alt=\"homepage\" class=\"dark-logo text\" />\r\n                        <img src=\"assets/images/nlr-logo-light-text.png\" class=\"light-logo\" alt=\"homepage\" />\r\n                        -->\r\n                    </span>\r\n                    \r\n                </a>\r\n                <!-- ============================================================== -->\r\n                <!-- End Logo -->\r\n                <!-- ============================================================== -->\r\n                <!-- ============================================================== -->\r\n                <!-- Toggle which is visible on mobile only -->\r\n                <!-- ============================================================== -->\r\n                <a class=\"topbartoggler d-block d-md-none waves-effect waves-light\" href=\"javascript:void(0)\"\r\n                    (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\"\r\n                    data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\">\r\n                    <i class=\"ti-more\"></i>\r\n                </a>\r\n            </div>\r\n            <!-- ============================================================== -->\r\n            <!-- End Logo -->\r\n            <!-- ============================================================== -->\r\n            <div class=\"navbar-collapse collapse\" id=\"navbarSupportedContent\" [attr.data-navbarbg]=\"options.navbarbg\"\r\n                [ngbCollapse]=\"!isCollapsed\">\r\n                <app-navigation (toggleSidebar)=\"toggleSidebarType()\" class=\"w-100\"></app-navigation>\r\n            </div>\r\n        </nav>\r\n    </header>\r\n    <!-- ============================================================== -->\r\n    <!-- Left Sidebar - style you can find in sidebar.scss  -->\r\n    <!-- ============================================================== -->\r\n    <aside class=\"left-sidebar\" [attr.data-sidebarbg]=\"options.sidebarbg\" (mouseover)=\"Logo()\" (mouseout)=\"Logo()\">\r\n        <!-- Sidebar scroll-->\r\n        <div class=\"scroll-sidebar\" [perfectScrollbar]=\"config\">\r\n            <app-sidebar></app-sidebar>\r\n        </div>\r\n        <!-- End Sidebar scroll-->\r\n    </aside>\r\n    <!-- ============================================================== -->\r\n    <!-- End Left Sidebar - style you can find in sidebar.scss  -->\r\n    <!-- ============================================================== -->\r\n    <!-- ============================================================== -->\r\n    <!-- Page wrapper  -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"page-wrapper\">\r\n        <app-breadcrumb></app-breadcrumb>\r\n        <!-- ============================================================== -->\r\n        <!-- Container fluid  -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"container-fluid\">\r\n            <!-- ============================================================== -->\r\n            <!-- Start Page Content -->\r\n            <!-- ============================================================== -->\r\n            <router-outlet></router-outlet>\r\n            <!-- ============================================================== -->\r\n            <!-- End Start Page Content -->\r\n            <!-- ============================================================== -->\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- End Container fluid  -->\r\n        <!-- ============================================================== -->\r\n        <!-- ============================================================== -->\r\n        <!-- footer -->\r\n        <!-- ============================================================== -->\r\n        <footer class=\"footer text-center\">\r\n            All Rights Reserved by Monster Admin Angular. Designed and Developed by\r\n            <a href=\"https://wrappixel.com\">WrapPixel</a>.\r\n        </footer>\r\n        <!-- ============================================================== -->\r\n        <!-- End footer -->\r\n        <!-- ============================================================== -->\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- End Page wrapper  -->\r\n    <!-- ============================================================== -->\r\n    <aside class=\"customizer\" [ngClass]=\"{'show-service-panel': showSettings}\">\r\n        <a href=\"javascript:void(0)\" class=\"service-panel-toggle\" (click)=\"showSettings = !showSettings\">\r\n            <i class=\"fa fa-spin fa-cog\"></i>\r\n        </a>\r\n        <div class=\"customizer-body custom-pills\" [perfectScrollbar]=\"config\">\r\n            <ngb-tabset type=\"pills\" [justify]=\"tabStatus\">\r\n                <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                        <i class=\"mdi mdi-wrench font-20\"></i>\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"p-15 border-bottom\">\r\n                            <!-- Sidebar -->\r\n                            <h5 class=\"m-b-20 m-t-10\">Layout Settings</h5>\r\n                            <div class=\"custom-control custom-checkbox m-t-10\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"theme-view\" id=\"theme-view\"\r\n                                    [attr.checked]=\"(options.theme=='dark') ? 'checked' : null\"\r\n                                    (change)=\"options.theme = (options.theme == 'light' ? 'dark' : 'light');\">\r\n                                <label class=\"custom-control-label font-normal\" for=\"theme-view\">Dark Theme</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox m-t-10\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"sidebar-position\"\r\n                                    id=\"sidebar-position\"\r\n                                    [attr.checked]=\"(options.sidebarpos=='fixed') ? 'checked' : null\"\r\n                                    (change)=\"options.sidebarpos = (options.sidebarpos == 'fixed' ? 'absolute' : 'fixed');\">\r\n                                <label class=\"custom-control-label font-normal\" for=\"sidebar-position\">Fixed\r\n                                    Sidebar</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox m-t-10\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"header-position\"\r\n                                    id=\"header-position\"\r\n                                    [attr.checked]=\"(options.headerpos=='fixed') ? 'checked' : null\"\r\n                                    (change)=\"options.headerpos = (options.headerpos == 'fixed' ? 'absolute' : 'fixed');\">\r\n                                <label class=\"custom-control-label font-normal\" for=\"header-position\">Fixed\r\n                                    Header</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox m-t-10\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"boxed-layout\"\r\n                                    id=\"boxed-layout\" [attr.checked]=\"(options.boxed=='boxed') ? 'checked' : null\"\r\n                                    (change)=\"options.boxed = (options.boxed == 'full' ? 'boxed' : 'full');\">\r\n                                <label class=\"custom-control-label font-normal\" for=\"boxed-layout\">Boxed Layout</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-checkbox m-t-10\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"rtl-layout\" id=\"rtl-layout\"\r\n                                    [attr.checked]=\"(options.dir=='rtl') ? 'checked' : null\"\r\n                                    (change)=\"options.dir = (options.dir == 'rtl' ? 'ltr' : 'rtl');\">\r\n                                <label class=\"custom-control-label font-normal\" for=\"rtl-layout\">RTL</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"p-15 border-bottom\">\r\n                            <!-- Sidebar -->\r\n                            <h5 class=\"m-b-20 m-t-10\">Sidebar Types</h5>\r\n                            <div class=\"custom-control custom-radio m-t-10\">\r\n                                <input type=\"radio\" class=\"custom-control-input\" name=\"sidebar\"\r\n                                    [(ngModel)]=\"options.sidebartype\" value=\"mini-sidebar\" id=\"minisidebar\"\r\n                                    (change)=\"options.sidebartype = 'mini-sidebar'\">\r\n                                <label class=\"custom-control-label font-normal\" for=\"minisidebar\">Mini Sidebar</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio m-t-10\">\r\n                                <input type=\"radio\" class=\"custom-control-input\" name=\"sidebar\"\r\n                                    [(ngModel)]=\"options.sidebartype\" value=\"iconbar\" id=\"iconsidebar\"\r\n                                    (change)=\"options.sidebartype = 'iconbar'\">\r\n                                <label class=\"custom-control-label font-normal\" for=\"iconsidebar\">Icon Sidebar</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio m-t-10\">\r\n                                <input type=\"radio\" class=\"custom-control-input\" name=\"sidebar\"\r\n                                    [(ngModel)]=\"options.sidebartype\" value=\"overlay\" id=\"overlaysidebar\"\r\n                                    (change)=\"options.sidebartype = 'overlay'\">\r\n                                <label class=\"custom-control-label font-normal\" for=\"overlaysidebar\">Overlay\r\n                                    Sidebar</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio m-t-10\">\r\n                                <input type=\"radio\" class=\"custom-control-input\" name=\"sidebar\"\r\n                                    [(ngModel)]=\"options.sidebartype\" value=\"full\" id=\"fullsidebar\"\r\n                                    (change)=\"options.sidebartype = 'full'\">\r\n                                <label class=\"custom-control-label font-normal\" for=\"fullsidebar\">Full Sidebar</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"p-15 border-bottom\">\r\n                            <!-- Logo BG -->\r\n                            <h5 class=\"m-b-20 m-t-10\">Logo Backgrounds</h5>\r\n                            <ul class=\"theme-color\">\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin1\"\r\n                                        (click)=\"options.logobg = 'skin1'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin2\"\r\n                                        (click)=\"options.logobg = 'skin2'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin3\"\r\n                                        (click)=\"options.logobg = 'skin3'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin4\"\r\n                                        (click)=\"options.logobg = 'skin4'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin5\"\r\n                                        (click)=\"options.logobg = 'skin5'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-logobg=\"skin6\"\r\n                                        (click)=\"options.logobg = 'skin6'\"></a>\r\n                                </li>\r\n                            </ul>\r\n                            <!-- Logo BG -->\r\n                        </div>\r\n                        <div class=\"p-15 border-bottom\">\r\n                            <!-- Navbar BG -->\r\n                            <h5 class=\"m-b-20 m-t-10\">Navbar Backgrounds</h5>\r\n                            <ul class=\"theme-color\">\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin1\"\r\n                                        (click)=\"options.navbarbg = 'skin1'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin2\"\r\n                                        (click)=\"options.navbarbg = 'skin2'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin3\"\r\n                                        (click)=\"options.navbarbg = 'skin3'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin4\"\r\n                                        (click)=\"options.navbarbg = 'skin4'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin5\"\r\n                                        (click)=\"options.navbarbg = 'skin5'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-navbarbg=\"skin6\"\r\n                                        (click)=\"options.navbarbg = 'skin6'\"></a>\r\n                                </li>\r\n                            </ul>\r\n                            <!-- Navbar BG -->\r\n                        </div>\r\n                        <div class=\"p-15 border-bottom\">\r\n                            <!-- Logo BG -->\r\n                            <h5 class=\"m-b-20 m-t-10\">Sidebar Backgrounds</h5>\r\n                            <ul class=\"theme-color\">\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin1\"\r\n                                        (click)=\"options.sidebarbg = 'skin1'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin2\"\r\n                                        (click)=\"options.sidebarbg = 'skin2'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin3\"\r\n                                        (click)=\"options.sidebarbg = 'skin3'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin4\"\r\n                                        (click)=\"options.sidebarbg = 'skin4'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin5\"\r\n                                        (click)=\"options.sidebarbg = 'skin5'\"></a>\r\n                                </li>\r\n                                <li class=\"theme-item\">\r\n                                    <a href=\"javascript:void(0)\" class=\"theme-link\" data-sidebarbg=\"skin6\"\r\n                                        (click)=\"options.sidebarbg = 'skin6'\"></a>\r\n                                </li>\r\n                            </ul>\r\n                            <!-- Logo BG -->\r\n                        </div>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                        <i class=\"mdi mdi-message-reply font-20\"></i>\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n                        <ul class=\"mailbox list-style-none m-t-20\">\r\n                            <li>\r\n                                <div class=\"message-center chat-scroll\" [perfectScrollbar]=\"config\">\r\n                                    <!-- Message -->\r\n                                    <a href=\"#\" class=\"message-item\" id='chat_user_1' data-user-id='1'>\r\n                                        <span class=\"user-img\">\r\n                                            <img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n                                            <span class=\"profile-status online pull-right\" data-status=\"online\"></span>\r\n                                        </span>\r\n                                        <span class=\"mail-contnet\">\r\n                                            <h5>Chris Evans</h5>\r\n                                            <span class=\"mail-desc\">Just see the my admin!</span>\r\n                                            <span class=\"time\">9:30 AM</span>\r\n                                        </span>\r\n                                    </a>\r\n                                    <!-- Message -->\r\n                                    <a href=\"#\" class=\"message-item\" id='chat_user_2' data-user-id='2'>\r\n                                        <span class=\"user-img\">\r\n                                            <img src=\"assets/images/users/2.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n                                            <span class=\"profile-status busy pull-right\" data-status=\"busy\"></span>\r\n                                        </span>\r\n                                        <span class=\"mail-contnet\">\r\n                                            <h5>Ray Hudson</h5>\r\n                                            <span class=\"mail-desc\">I've sung a song! See you at</span>\r\n                                            <span class=\"time\">9:10 AM</span>\r\n                                        </span>\r\n                                    </a>\r\n                                    <!-- Message -->\r\n                                    <a href=\"#\" class=\"message-item\" id='chat_user_3' data-user-id='3'>\r\n                                        <span class=\"user-img\">\r\n                                            <img src=\"assets/images/users/3.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n                                            <span class=\"profile-status away pull-right\" data-status=\"away\"></span>\r\n                                        </span>\r\n                                        <span class=\"mail-contnet\">\r\n                                            <h5>Lb James</h5>\r\n                                            <span class=\"mail-desc\">I am a singer!</span>\r\n                                            <span class=\"time\">9:08 AM</span>\r\n                                        </span>\r\n                                    </a>\r\n                                    <!-- Message -->\r\n                                    <a href=\"#\" class=\"message-item\" id='chat_user_4' data-user-id='4'>\r\n                                        <span class=\"user-img\">\r\n                                            <img src=\"assets/images/users/4.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n                                            <span class=\"profile-status offline pull-right\"\r\n                                                data-status=\"offline\"></span>\r\n                                        </span>\r\n                                        <span class=\"mail-contnet\">\r\n                                            <h5>Don Andres</h5>\r\n                                            <span class=\"mail-desc\">Just see the my admin!</span>\r\n                                            <span class=\"time\">9:02 AM</span>\r\n                                        </span>\r\n                                    </a>\r\n                                    <!-- Message -->\r\n                                    <a href=\"#\" class=\"message-item\" id='chat_user_5' data-user-id='5'>\r\n                                        <span class=\"user-img\">\r\n                                            <img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n                                            <span class=\"profile-status online pull-right\" data-status=\"online\"></span>\r\n                                        </span>\r\n                                        <span class=\"mail-contnet\">\r\n                                            <h5>Chris Evans</h5>\r\n                                            <span class=\"mail-desc\">Just see the my admin!</span>\r\n                                            <span class=\"time\">9:30 AM</span>\r\n                                        </span>\r\n                                    </a>\r\n                                    <!-- Message -->\r\n                                    <a href=\"#\" class=\"message-item\" id='chat_user_6' data-user-id='6'>\r\n                                        <span class=\"user-img\">\r\n                                            <img src=\"assets/images/users/2.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n                                            <span class=\"profile-status busy pull-right\" data-status=\"busy\"></span>\r\n                                        </span>\r\n                                        <span class=\"mail-contnet\">\r\n                                            <h5>Ray Hudson</h5>\r\n                                            <span class=\"mail-desc\">I've sung a song! See you at</span>\r\n                                            <span class=\"time\">9:10 AM</span>\r\n                                        </span>\r\n                                    </a>\r\n                                    <!-- Message -->\r\n                                    <a href=\"#\" class=\"message-item\" id='chat_user_7' data-user-id='7'>\r\n                                        <span class=\"user-img\">\r\n                                            <img src=\"assets/images/users/3.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n                                            <span class=\"profile-status away pull-right\" data-status=\"away\"></span>\r\n                                        </span>\r\n                                        <span class=\"mail-contnet\">\r\n                                            <h5>Lb James</h5>\r\n                                            <span class=\"mail-desc\">I am a singer!</span>\r\n                                            <span class=\"time\">9:08 AM</span>\r\n                                        </span>\r\n                                    </a>\r\n                                    <!-- Message -->\r\n                                    <a href=\"#\" class=\"message-item\" id='chat_user_8' data-user-id='8'>\r\n                                        <span class=\"user-img\">\r\n                                            <img src=\"assets/images/users/4.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n                                            <span class=\"profile-status offline pull-right\"\r\n                                                data-status=\"offline\"></span>\r\n                                        </span>\r\n                                        <span class=\"mail-contnet\">\r\n                                            <h5>Don Andres</h5>\r\n                                            <span class=\"mail-desc\">Just see the my admin!</span>\r\n                                            <span class=\"time\">9:02 AM</span>\r\n                                        </span>\r\n                                    </a>\r\n                                    <!-- Message -->\r\n                                    <a href=\"#\" class=\"message-item\" id='chat_user_9' data-user-id='9'>\r\n                                        <span class=\"user-img\">\r\n                                            <img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n                                            <span class=\"profile-status online pull-right\" data-status=\"online\"></span>\r\n                                        </span>\r\n                                        <span class=\"mail-contnet\">\r\n                                            <h5>Chris Evans</h5>\r\n                                            <span class=\"mail-desc\">Just see the my admin!</span>\r\n                                            <span class=\"time\">9:30 AM</span>\r\n                                        </span>\r\n                                    </a>\r\n                                    <!-- Message -->\r\n                                    <a href=\"#\" class=\"message-item\" id='chat_user_10' data-user-id='10'>\r\n                                        <span class=\"user-img\">\r\n                                            <img src=\"assets/images/users/2.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n                                            <span class=\"profile-status busy pull-right\" data-status=\"busy\"></span>\r\n                                        </span>\r\n                                        <span class=\"mail-contnet\">\r\n                                            <h5>Ray Hudson</h5>\r\n                                            <span class=\"mail-desc\">I've sung a song! See you at</span>\r\n                                            <span class=\"time\">9:10 AM</span>\r\n                                        </span>\r\n                                    </a>\r\n                                    <!-- Message -->\r\n                                    <a href=\"#\" class=\"message-item\" id='chat_user_11' data-user-id='11'>\r\n                                        <span class=\"user-img\">\r\n                                            <img src=\"assets/images/users/3.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n                                            <span class=\"profile-status away pull-right\" data-status=\"away\"></span>\r\n                                        </span>\r\n                                        <span class=\"mail-contnet\">\r\n                                            <h5>Lb James</h5>\r\n                                            <span class=\"mail-desc\">I am a singer!</span>\r\n                                            <span class=\"time\">9:08 AM</span>\r\n                                        </span>\r\n                                    </a>\r\n                                    <!-- Message -->\r\n                                    <a href=\"#\" class=\"message-item\" id='chat_user_12' data-user-id='12'>\r\n                                        <span class=\"user-img\">\r\n                                            <img src=\"assets/images/users/4.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n                                            <span class=\"profile-status offline pull-right\"\r\n                                                data-status=\"offline\"></span>\r\n                                        </span>\r\n                                        <span class=\"mail-contnet\">\r\n                                            <h5>Don Andres</h5>\r\n                                            <span class=\"mail-desc\">Just see the my admin!</span>\r\n                                            <span class=\"time\">9:02 AM</span>\r\n                                        </span>\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                        <i class=\"mdi mdi-star-circle font-20\"></i>\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"p-15\">\r\n                            <h6 class=\"m-t-20 m-b-20\">Activity Timeline</h6>\r\n                            <div class=\"steamline\">\r\n                                <div class=\"sl-item\">\r\n                                    <div class=\"sl-left bg-success\">\r\n                                        <i class=\"ti-user\"></i>\r\n                                    </div>\r\n                                    <div class=\"sl-right\">\r\n                                        <div class=\"\">Meeting today\r\n                                            <span class=\" sl-date\"> 5pm</span>\r\n                                        </div>\r\n                                        <div class=\"desc\">you can write anything </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sl-item\">\r\n                                    <div class=\"sl-left bg-info\">\r\n                                        <i class=\"fas fa-image\"></i>\r\n                                    </div>\r\n                                    <div class=\"sl-right\">\r\n                                        <div class=\"\">Send documents to Clark</div>\r\n                                        <div class=\" desc\">Lorem Ipsum is simply </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sl-item\">\r\n                                    <div class=\"sl-left\">\r\n                                        <img class=\"rounded-circle\" alt=\"user\" src=\"assets/images/users/2.jpg\"> </div>\r\n                                    <div class=\"sl-right\">\r\n                                        <div class=\"\">Go to the Doctor\r\n                                            <span class=\" sl-date\">5 minutes ago</span>\r\n                                        </div>\r\n                                        <div class=\"desc\">Contrary to popular belief</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sl-item\">\r\n                                    <div class=\"sl-left\">\r\n                                        <img class=\"rounded-circle\" alt=\"user\" src=\"assets/images/users/1.jpg\"> </div>\r\n                                    <div class=\"sl-right\">\r\n                                        <div>\r\n                                            <a href=\"javascript:void(0)\">Stephen</a>\r\n                                            <span class=\"sl-date\">5 minutes ago</span>\r\n                                        </div>\r\n                                        <div class=\"desc\">Approve meeting with tiger</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sl-item\">\r\n                                    <div class=\"sl-left bg-primary\">\r\n                                        <i class=\"ti-user\"></i>\r\n                                    </div>\r\n                                    <div class=\"sl-right\">\r\n                                        <div class=\"\">Meeting today\r\n                                            <span class=\" sl-date\"> 5pm</span>\r\n                                        </div>\r\n                                        <div class=\"desc\">you can write anything </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sl-item\">\r\n                                    <div class=\"sl-left bg-info\">\r\n                                        <i class=\"fas fa-image\"></i>\r\n                                    </div>\r\n                                    <div class=\"sl-right\">\r\n                                        <div class=\"\">Send documents to Clark</div>\r\n                                        <div class=\" desc\">Lorem Ipsum is simply </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sl-item\">\r\n                                    <div class=\"sl-left\">\r\n                                        <img class=\"rounded-circle\" alt=\"user\" src=\"assets/images/users/4.jpg\"> </div>\r\n                                    <div class=\"sl-right\">\r\n                                        <div class=\"\">Go to the Doctor\r\n                                            <span class=\" sl-date\">5 minutes ago</span>\r\n                                        </div>\r\n                                        <div class=\"desc\">Contrary to popular belief</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"sl-item\">\r\n                                    <div class=\"sl-left\">\r\n                                        <img class=\"rounded-circle\" alt=\"user\" src=\"assets/images/users/6.jpg\"> </div>\r\n                                    <div class=\"sl-right\">\r\n                                        <div>\r\n                                            <a href=\"javascript:void(0)\">Stephen</a>\r\n                                            <span class=\"sl-date\">5 minutes ago</span>\r\n                                        </div>\r\n                                        <div class=\"desc\">Approve meeting with tiger</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n            </ngb-tabset>\r\n        </div>\r\n    </aside>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->\r\n<div class=\"page-breadcrumb\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 align-self-center\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <nav aria-label=\"breadcrumb\">\r\n                    <ol class=\"breadcrumb\">\r\n                        <ng-template ngFor let-url [ngForOf]=\"pageInfo?.urls\" let-last=\"last\">\r\n                            <li class=\"breadcrumb-item\" *ngIf=\"!last\" [routerLink]=\"url.url\">\r\n                                <a href='javascript:void(0)'>{{url.title}}</a>\r\n                            </li>\r\n                            <li class=\"breadcrumb-item active\" *ngIf=\"last\">{{url.title}}</li>\r\n                        </ng-template>\r\n                    </ol>\r\n                </nav>\r\n            </div>\r\n            <h4 class=\"page-title\">{{pageInfo?.title}}</h4>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- End Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header-navigation/navigation.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header-navigation/navigation.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- toggle and nav items -->\r\n<!-- ============================================================== -->\r\n<ul class=\"navbar-nav float-left mr-auto\">\r\n    <li class=\"nav-item d-none d-md-block\">\r\n        <a (click)=\"toggleSidebar.emit()\" class=\"nav-link sidebartoggler waves-effect waves-light\"\r\n            href=\"javascript:void(0)\">\r\n            <i class=\"icon-arrow-left-circle font-18\"></i>\r\n        </a>\r\n    </li>\r\n    <!-- ============================================================== -->\r\n    <!-- Comment -->\r\n    <!-- ============================================================== -->\r\n    <li class=\"nav-item dropdown\" ngbDropdown>\r\n        <a ngbDropdownToggle class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"javascript:void(0)\"\r\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"mdi mdi-message font-18\"></i>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right mailbox\" ngbDropdownMenu>\r\n            <span class=\"with-arrow\">\r\n                <span class=\"bg-primary\"></span>\r\n            </span>\r\n            <ul class=\"list-style-none\">\r\n                <li>\r\n                    <div class=\"drop-title bg-primary text-white\">\r\n                        <h4 class=\"m-b-0 m-t-5\">4 New</h4>\r\n                        <span class=\"font-light\">Notifications</span>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"message-center notifications\" [perfectScrollbar]=\"config\">\r\n                        <!-- Message -->\r\n                        <a href=\"javascript:void(0)\" class=\"message-item\" *ngFor=\"let notification of notifications\">\r\n                            <span class=\"btn btn-circle {{notification.btn}}\">\r\n                                <i class=\"{{notification.icon}}\"></i>\r\n                            </span>\r\n                            <span class=\"mail-contnet\">\r\n                                <h5 class=\"message-title\">{{notification.title}}</h5>\r\n                                <span class=\"mail-desc\">{{notification.subject}}</span>\r\n                                <span class=\"time\">{{notification.time}}</span>\r\n                            </span>\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <a class=\"nav-link text-center m-b-5 text-muted\" href=\"javascript:void(0);\">\r\n                        <strong>Check all notifications</strong>\r\n                        <i class=\"fa fa-angle-right\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </li>\r\n    <!-- ============================================================== -->\r\n    <!-- End Comment -->\r\n    <!-- ============================================================== -->\r\n    <!-- ============================================================== -->\r\n    <!-- Messages -->\r\n    <!-- ============================================================== -->\r\n    <li class=\"nav-item dropdown\" ngbDropdown>\r\n        <a ngbDropdownToggle class=\"nav-link dropdown-toggle waves-effect waves-dark\" href=\"javascript:void(0)\" id=\"2\"\r\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"mdi mdi-email font-18\"></i>\r\n\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right mailbox\" aria-labelledby=\"2\" ngbDropdownMenu>\r\n            <span class=\"with-arrow\">\r\n                <span class=\"bg-danger\"></span>\r\n            </span>\r\n            <ul class=\"list-style-none\">\r\n                <li>\r\n                    <div class=\"drop-title text-white bg-danger\">\r\n                        <h4 class=\"m-b-0 m-t-5\">5 New</h4>\r\n                        <span class=\"font-light\">Messages</span>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"message-center message-body\" [perfectScrollbar]=\"config\">\r\n                        <!-- Message -->\r\n                        <a href=\"javascript:void(0)\" class=\"message-item\" *ngFor=\"let mymessage of mymessages\">\r\n                            <span class=\"user-img\">\r\n                                <img src=\"{{mymessage.useravatar}}\" alt=\"user\" class=\"rounded-circle\">\r\n                                <span class=\"profile-status {{mymessage.status}} pull-right\"></span>\r\n                            </span>\r\n                            <span class=\"mail-contnet\">\r\n                                <h5 class=\"message-title\">{{mymessage.from}}</h5>\r\n                                <span class=\"mail-desc\">{{mymessage.subject}}</span>\r\n                                <span class=\"time\">{{mymessage.time}}</span>\r\n                            </span>\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <a class=\"nav-link text-center text-muted\" href=\"javascript:void(0);\">\r\n                        <b>See all e-Mails</b>\r\n                        <i class=\"fa fa-angle-right\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </li>\r\n    <!-- ============================================================== -->\r\n    <!-- End Messages -->\r\n    <!-- ============================================================== -->\r\n    <!-- ============================================================== -->\r\n    <!-- mega menu -->\r\n    <!-- ============================================================== -->\r\n    <li class=\"nav-item mega-dropdown\" ngbDropdown [autoClose]=\"false\">\r\n        <a ngbDropdownToggle class=\"nav-link waves-effect waves-dark\" href=\"javascript:void(0)\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <span class=\"d-none d-md-block\">\r\n                <i class=\"mdi mdi-view-grid font-18\"></i>\r\n            </span>\r\n            <span class=\"d-block d-md-none\">\r\n                <i class=\"mdi mdi-dialpad font-24\"></i>\r\n            </span>\r\n        </a>\r\n        <a class=\"nav-link waves-effect waves-dark fullscreen-mode\" href=\"javascript:void(0)\" aria-expanded=\"false\">\r\n            <span class=\"d-none d-md-block\">\r\n                <i class=\"mdi mdi-arrow-expand-all font-18\"></i>\r\n            </span>\r\n            <span class=\"d-block d-md-none\">\r\n                <i class=\"mdi mdi-arrow-expand-all font-24\"></i>\r\n            </span>\r\n        </a>      \r\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\r\n            <div class=\"mega-dropdown-menu row\">\r\n                <div class=\"col-lg-3 col-xlg-2 m-b-30\">\r\n                    <h4 class=\"m-b-20\">CAROUSEL</h4>\r\n                    <!-- CAROUSEL -->\r\n                    <ngb-carousel>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"assets/images/big/img1.jpg\" class=\"img-fluid\" alt=\"Random first slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"text-white font-bold\">First slide label</h3>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"assets/images/big/img2.jpg\" class=\"img-fluid\" alt=\"Random second slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"text-white font-bold\">Second slide label</h3>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"assets/images/big/img3.jpg\" class=\"img-fluid\" alt=\"Random third slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <h3 class=\"text-white font-bold\">Third slide label</h3>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-carousel>\r\n                    <!-- End CAROUSEL -->\r\n                </div>\r\n                <div class=\"col-lg-3 m-b-30\">\r\n                    <h4 class=\"m-b-20\">ACCORDION</h4>\r\n                    <!-- Accordian -->\r\n                    <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\" class=\"accordion nav-accordion\">\r\n                        <ngb-panel id=\"static-1\" title=\"Simple\">\r\n                            <ng-template ngbPanelContent>\r\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad\r\n                                squid.\r\n                            </ng-template>\r\n                        </ngb-panel>\r\n                        <ngb-panel id=\"static-2\">\r\n                            <ng-template ngbPanelTitle>\r\n                                <span>&#9733;\r\n                                    <b>Fancy</b> title &#9733;</span>\r\n                            </ng-template>\r\n                            <ng-template ngbPanelContent>\r\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad\r\n                                squid.\r\n                            </ng-template>\r\n                        </ngb-panel>\r\n                        <ngb-panel id=\"static-3\" title=\"Disabled\" [disabled]=\"true\">\r\n                            <ng-template ngbPanelContent>\r\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad\r\n                                squid.\r\n                            </ng-template>\r\n                        </ngb-panel>\r\n                    </ngb-accordion>\r\n                </div>\r\n                <div class=\"col-lg-3  m-b-30\">\r\n                    <h4 class=\"m-b-20\">CONTACT US</h4>\r\n                    <!-- Contact -->\r\n                    <form>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"exampleInputname1\" placeholder=\"Enter Name\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\"> </div>\r\n                        <div class=\"form-group\">\r\n                            <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"\r\n                                placeholder=\"Message\"></textarea>\r\n                        </div>\r\n                        <button type=\"submit\" class=\"btn btn-info\">Submit</button>\r\n                    </form>\r\n                </div>\r\n                <div class=\"col-lg-3 col-xlg-4 m-b-30\">\r\n                    <h4 class=\"m-b-20\">List style</h4>\r\n                    <!-- List style -->\r\n                    <ul class=\"list-style-none\">\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <i class=\"fa fa-check text-success\"></i> You can give link</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <i class=\"fa fa-check text-success\"></i> Give link</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <i class=\"fa fa-check text-success\"></i> Another Give link</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <i class=\"fa fa-check text-success\"></i> Forth link</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <i class=\"fa fa-check text-success\"></i> Another fifth link</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n    <!-- ============================================================== -->\r\n    <!-- End mega menu -->\r\n    <!-- ============================================================== -->\r\n</ul>\r\n<!-- ============================================================== -->\r\n<!-- Right side toggle and nav items -->\r\n<!-- ============================================================== -->\r\n<ul class=\"navbar-nav float-right\">\r\n    <li class=\"nav-item d-lg-block\">\r\n        <form class=\"app-search\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\r\n            <a class=\"srh-btn\">\r\n                <i class=\"ti-search\"></i>\r\n            </a>\r\n        </form>\r\n    </li>\r\n    <!-- ============================================================== -->\r\n    <!-- User profile and search -->\r\n    <!-- ============================================================== -->\r\n    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n        <a ngbDropdownToggle class=\"nav-link text-muted waves-effect waves-dark pro-pic\" href=\"javascript:void(0)\"\r\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"rounded-circle\" width=\"31\">\r\n        </a>\r\n        <div class=\"dropdown-menu-right user-dd\" ngbDropdownMenu>\r\n            <span class=\"with-arrow\">\r\n                <span class=\"bg-primary\"></span>\r\n            </span>\r\n            <div class=\"d-flex no-block align-items-center p-15 bg-primary text-white m-b-10\">\r\n                <div class=\"\">\r\n                    <img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"img-circle\" width=\"60\">\r\n                </div>\r\n                <div class=\"m-l-10\">\r\n                    <h4 class=\"m-b-0\">Steave Jobs</h4>\r\n                    <p class=\" m-b-0\">varun@gmail.com</p>\r\n                </div>\r\n            </div>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                <i class=\"ti-user m-r-5 m-l-5\"></i> My Profile</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                <i class=\"ti-wallet m-r-5 m-l-5\"></i> My Balance</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                <i class=\"ti-email m-r-5 m-l-5\"></i> Inbox</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                <i class=\"ti-settings m-r-5 m-l-5\"></i> Account Setting</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                <i class=\"fa fa-power-off m-r-5 m-l-5\"></i> Logout</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <div class=\"p-l-30 p-10\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-success btn-rounded\">View Profile</a>\r\n            </div>\r\n        </div>\r\n    </li>\r\n    <!-- ============================================================== -->\r\n    <!-- User profile and search -->\r\n    <!-- ============================================================== -->\r\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar-nav\">\r\n    <ul id=\"sidebarnav\">\r\n        <!-- User Profile-->\r\n        <li class=\"mt-4\">\r\n            <div class=\"user-profile pb-4 border-bottom logo\">\r\n                <!-- coach-logo -->\r\n                <div class=\"coach-logo\">\r\n                    <img src=\"assets/images/nlr-logo.png\" alt=\"NLR Curve\" />\r\n                </div>\r\n                <!-- User profile text-->\r\n                <div class=\"profile-text\" ngbDropdown display=\"static\">\r\n                    <h1>New Level Results<br><em>\"The Curve\"</em></h1>\r\n\r\n                    <!--\r\n                    <a href=\"javascript: void(0);\" class=\"dropdown-toggle link u-dropdown\" ngbDropdownToggle>Andrew Duncan\r\n                        <span class=\"caret\"></span>\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" ngbDropdownMenu>\r\n                        <a href=\"javascript: void(0);\" class=\"dropdown-item\">\r\n                            <i class=\"ti-user\"></i> My Profile</a>\r\n                        <a href=\"javascript: void(0);\" class=\"dropdown-item\">\r\n                            <i class=\"ti-wallet\"></i> My Balance</a>\r\n                        <a href=\"javascript: void(0);\" class=\"dropdown-item\">\r\n                            <i class=\"ti-email\"></i> Inbox</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a href=\"javascript: void(0);\" class=\"dropdown-item\">\r\n                            <i class=\"ti-settings\"></i> Account Setting</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a href=\"javascript: void(0);\" class=\"dropdown-item\">\r\n                            <i class=\"fa fa-power-off\"></i> Logout</a>\r\n                    </div>\r\n                    -->\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <!-- First level menu -->\r\n        <li class=\"sidebar-item\" [class.active]=\"showMenu === sidebarnavItem.title\"\r\n            *ngFor=\"let sidebarnavItem of sidebarnavItems\"\r\n            [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\">\r\n            <div class=\"nav-small-cap\" *ngIf=\"sidebarnavItem.extralink === true\"><i\r\n                    [ngClass]=\"[sidebarnavItem.icon]\"></i><span class=\"hide-menu\">{{sidebarnavItem.title}}</span></div>\r\n            <a class=\"sidebar-link waves-effect waves-dark\"\r\n                [routerLink]=\"sidebarnavItem.class === '' ? [sidebarnavItem.path] : null\"\r\n                [ngClass]=\"[sidebarnavItem.class]\" *ngIf=\"!sidebarnavItem.extralink;\"\r\n                (click)=\"addExpandClass(sidebarnavItem.title)\"\r\n                [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\">\r\n                <i [ngClass]=\"[sidebarnavItem.icon]\"></i>\r\n                <span class=\"hide-menu\">{{sidebarnavItem.title}}</span>\r\n            </a>\r\n            <!-- Second level menu -->\r\n            <ul aria-expanded=\"false\" class=\"collapse first-level\" *ngIf=\"sidebarnavItem.submenu.length > 0\"\r\n                [ngClass]=\"{'in' : showMenu === sidebarnavItem.title }\">\r\n                <li class=\"sidebar-item\" *ngFor=\"let sidebarnavSubItem of sidebarnavItem.submenu\"\r\n                    [class.active]=\"showSubMenu === sidebarnavSubItem.title\"\r\n                    [routerLinkActive]=\"sidebarnavSubItem.submenu.length > 0 ? '' : 'active'\">\r\n                    <a class=\"sidebar-link\"\r\n                        [routerLink]=\"sidebarnavSubItem.submenu.length > 0 ? null : [sidebarnavSubItem.path]\"\r\n                        [routerLinkActive]=\"sidebarnavSubItem.submenu.length > 0 ? '' : 'router-link-active'\"\r\n                        [ngClass]=\"[sidebarnavSubItem.class]\" *ngIf=\"!sidebarnavSubItem.extralink;\"\r\n                        (click)=\"addActiveClass(sidebarnavSubItem.title)\">\r\n                        <i [ngClass]=\"[sidebarnavSubItem.icon]\"></i>\r\n                        <span class=\"hide-menu\">{{sidebarnavSubItem.title}}</span>\r\n                    </a>\r\n                    <!-- Third level menu -->\r\n                    <ul aria-expanded=\"false\" class=\"collapse Second-level\" *ngIf=\"sidebarnavSubItem.submenu.length > 0\"\r\n                        [ngClass]=\"{'in' : showSubMenu === sidebarnavSubItem.title }\">\r\n                        <li class=\"sidebar-item\" *ngFor=\"let sidebarnavSubsubItem of sidebarnavSubItem.submenu\"\r\n                            routerLinkActive=\"active\" [ngClass]=\"[sidebarnavSubsubItem.class]\">\r\n                            <a class=\"sidebar-link\" [routerLink]=\"[sidebarnavSubsubItem.path]\"\r\n                                *ngIf=\"!sidebarnavSubsubItem.extralink;\"\r\n                                [routerLinkActive]=\"sidebarnavSubsubItem.submenu.length > 0 ? '' : 'router-link-active'\">\r\n                                <i [ngClass]=\"[sidebarnavSubsubItem.icon]\"></i>\r\n                                <span class=\"hide-menu\">{{sidebarnavSubsubItem.title}}</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n</nav>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: Approutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approutes", function() { return Approutes; });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "./src/app/layouts/blank/blank.component.ts");


const Approutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [
            { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() | dashboards-dashboard-module */[__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module"), __webpack_require__.e("dashboards-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboards/dashboard.module */ "./src/app/dashboards/dashboard.module.ts")).then(m => m.DashboardModule)
            },
            {
                path: 'starter',
                loadChildren: () => __webpack_require__.e(/*! import() | starter-starter-module */ "starter-starter-module").then(__webpack_require__.bind(null, /*! ./starter/starter.module */ "./src/app/starter/starter.module.ts")).then(m => m.StarterModule)
            },
            {
                path: 'component',
                loadChildren: () => __webpack_require__.e(/*! import() | component-component-module */ "component-component-module").then(__webpack_require__.bind(null, /*! ./component/component.module */ "./src/app/component/component.module.ts")).then(m => m.ComponentsModule)
            },
            { path: 'cards', loadChildren: () => __webpack_require__.e(/*! import() | cards-cards-module */ "cards-cards-module").then(__webpack_require__.bind(null, /*! ./cards/cards.module */ "./src/app/cards/cards.module.ts")).then(m => m.CardsModule) },
            { path: 'icons', loadChildren: () => __webpack_require__.e(/*! import() | icons-icons-module */ "icons-icons-module").then(__webpack_require__.bind(null, /*! ./icons/icons.module */ "./src/app/icons/icons.module.ts")).then(m => m.IconsModule) },
            { path: 'forms', loadChildren: () => __webpack_require__.e(/*! import() | form-forms-module */ "form-forms-module").then(__webpack_require__.bind(null, /*! ./form/forms.module */ "./src/app/form/forms.module.ts")).then(m => m.FormModule) },
            { path: 'tables', loadChildren: () => Promise.all(/*! import() | table-tables-module */[__webpack_require__.e("common"), __webpack_require__.e("table-tables-module")]).then(__webpack_require__.bind(null, /*! ./table/tables.module */ "./src/app/table/tables.module.ts")).then(m => m.TablesModule) },
            { path: 'charts', loadChildren: () => Promise.all(/*! import() | charts-charts-module */[__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null, /*! ./charts/charts.module */ "./src/app/charts/charts.module.ts")).then(m => m.ChartModule) },
            {
                path: 'widgets',
                loadChildren: () => __webpack_require__.e(/*! import() | widgets-widgets-module */ "widgets-widgets-module").then(__webpack_require__.bind(null, /*! ./widgets/widgets.module */ "./src/app/widgets/widgets.module.ts")).then(m => m.WidgetsModule)
            },
            { path: 'ecom', loadChildren: () => __webpack_require__.e(/*! import() | ecommerce-ecom-module */ "ecommerce-ecom-module").then(__webpack_require__.bind(null, /*! ./ecommerce/ecom.module */ "./src/app/ecommerce/ecom.module.ts")).then(m => m.EcomModule) },
            {
                path: 'timeline',
                loadChildren: () => __webpack_require__.e(/*! import() | timeline-timeline-module */ "timeline-timeline-module").then(__webpack_require__.bind(null, /*! ./timeline/timeline.module */ "./src/app/timeline/timeline.module.ts")).then(m => m.TimelineModule)
            },
            {
                path: 'extra-component',
                loadChildren: () => Promise.all(/*! import() | extra-component-extra-component-module */[__webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module"), __webpack_require__.e("extra-component-extra-component-module")]).then(__webpack_require__.bind(null, /*! ./extra-component/extra-component.module */ "./src/app/extra-component/extra-component.module.ts")).then(m => m.ExtraComponentModule)
            },
            { path: 'apps', loadChildren: () => Promise.all(/*! import() | apps-apps-module */[__webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module"), __webpack_require__.e("apps-apps-module")]).then(__webpack_require__.bind(null, /*! ./apps/apps.module */ "./src/app/apps/apps.module.ts")).then(m => m.AppsModule) },
            { path: 'apps/email', loadChildren: () => Promise.all(/*! import() | apps-email-mail-module */[__webpack_require__.e("common"), __webpack_require__.e("apps-email-mail-module")]).then(__webpack_require__.bind(null, /*! ./apps/email/mail.module */ "./src/app/apps/email/mail.module.ts")).then(m => m.MailModule) },
            { path: 'maps', loadChildren: () => __webpack_require__.e(/*! import() | maps-maps-module */ "maps-maps-module").then(__webpack_require__.bind(null, /*! ./maps/maps.module */ "./src/app/maps/maps.module.ts")).then(m => m.MapsModule) },
            {
                path: 'sample-pages',
                loadChildren: () => __webpack_require__.e(/*! import() | sample-pages-sample-pages-module */ "sample-pages-sample-pages-module").then(__webpack_require__.bind(null, /*! ./sample-pages/sample-pages.module */ "./src/app/sample-pages/sample-pages.module.ts")).then(m => m.SamplePagesModule)
            }
        ]
    },
    {
        path: '',
        component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__["BlankComponent"],
        children: [
            {
                path: 'authentication',
                loadChildren: () => __webpack_require__.e(/*! import() | authentication-authentication-module */ "authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts")).then(m => m.AuthenticationModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/authentication/404'
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "./src/app/layouts/blank/blank.component.ts");
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/header-navigation/navigation.component */ "./src/app/shared/header-navigation/navigation.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
            _shared_spinner_component__WEBPACK_IMPORTED_MODULE_18__["SpinnerComponent"],
            _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_11__["FullComponent"],
            _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_12__["BlankComponent"],
            _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"],
            _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbComponent"],
            _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_16__["Approutes"]),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"].forRoot(),
            _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyDoliAneRffQDyA7Ul9cDk3tLe7vaU4yP8' })
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/layouts/blank/blank.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.ts ***!
  \**************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let BlankComponent = class BlankComponent {
};
BlankComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-blank-layout',
        template: __webpack_require__(/*! raw-loader!./blank.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/blank/blank.component.html")
    })
], BlankComponent);



/***/ }),

/***/ "./src/app/layouts/full/full.component.scss":
/*!**************************************************!*\
  !*** ./src/app/layouts/full/full.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/full/full.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let FullComponent = class FullComponent {
    constructor(router) {
        this.router = router;
        this.config = {};
        this.tabStatus = 'justified';
        this.isCollapsed = false;
        this.showSettings = false;
        this.showMobileMenu = false;
        this.expandLogo = false;
        this.options = {
            theme: 'light',
            dir: 'ltr',
            layout: 'vertical',
            sidebartype: 'full',
            sidebarpos: 'fixed',
            headerpos: 'fixed',
            boxed: 'full',
            navbarbg: 'skin1',
            sidebarbg: 'skin1',
            logobg: 'skin1' // six possible values: skin(1/2/3/4/5/6)
        };
    }
    Logo() {
        this.expandLogo = !this.expandLogo;
    }
    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard/dashboard1']);
        }
        this.defaultSidebar = this.options.sidebartype;
        this.handleSidebar();
    }
    onResize(event) {
        this.handleSidebar();
    }
    handleSidebar() {
        this.innerWidth = window.innerWidth;
        switch (this.defaultSidebar) {
            case 'full':
            case 'iconbar':
                if (this.innerWidth < 1170) {
                    this.options.sidebartype = 'mini-sidebar';
                }
                else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;
            case 'overlay':
                if (this.innerWidth < 767) {
                    this.options.sidebartype = 'mini-sidebar';
                }
                else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;
            default:
        }
    }
    toggleSidebarType() {
        switch (this.options.sidebartype) {
            case 'full':
            case 'iconbar':
                this.options.sidebartype = 'mini-sidebar';
                break;
            case 'overlay':
                this.showMobileMenu = !this.showMobileMenu;
                break;
            case 'mini-sidebar':
                if (this.defaultSidebar === 'mini-sidebar') {
                    this.options.sidebartype = 'full';
                }
                else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;
            default:
        }
    }
};
FullComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FullComponent.prototype, "onResize", null);
FullComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-full-layout',
        template: __webpack_require__(/*! raw-loader!./full.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full.component.html"),
        styles: [__webpack_require__(/*! ./full.component.scss */ "./src/app/layouts/full/full.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], FullComponent);



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this.activatedRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(route => route.outlet === 'primary'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(route => route.data))
            .subscribe(event => {
            this.titleService.setTitle(event['title']);
            this.pageInfo = event;
        });
    }
    ngOnInit() { }
};
BreadcrumbComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], BreadcrumbComponent.prototype, "layout", void 0);
BreadcrumbComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-breadcrumb',
        template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/breadcrumb/breadcrumb.component.html")
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
], BreadcrumbComponent);



/***/ }),

/***/ "./src/app/shared/header-navigation/navigation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
  \******************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let NavigationComponent = class NavigationComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = {};
        this.showSearch = false;
        // This is for Notifications
        this.notifications = [
            {
                btn: 'btn-danger',
                icon: 'ti-link',
                title: 'Luanch Admin',
                subject: 'Just see the my new admin!',
                time: '9:30 AM'
            },
            {
                btn: 'btn-success',
                icon: 'ti-calendar',
                title: 'Event today',
                subject: 'Just a reminder that you have event',
                time: '9:10 AM'
            },
            {
                btn: 'btn-info',
                icon: 'ti-settings',
                title: 'Settings',
                subject: 'You can customize this template as you want',
                time: '9:08 AM'
            },
            {
                btn: 'btn-primary',
                icon: 'ti-user',
                title: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }
        ];
        // This is for Mymessages
        this.mymessages = [
            {
                useravatar: 'assets/images/users/1.jpg',
                status: 'online',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:30 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'busy',
                from: 'Sonu Nigam',
                subject: 'I have sung a song! See you at',
                time: '9:10 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'away',
                from: 'Arijit Sinh',
                subject: 'I am a singer!',
                time: '9:08 AM'
            },
            {
                useravatar: 'assets/images/users/4.jpg',
                status: 'offline',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }
        ];
    }
    ngAfterViewInit() { }
};
NavigationComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], NavigationComponent.prototype, "toggleSidebar", void 0);
NavigationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header-navigation/navigation.component.html")
    }),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
], NavigationComponent);



/***/ }),

/***/ "./src/app/shared/sidebar/menu-items.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/sidebar/menu-items.ts ***!
  \**********************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
const ROUTES = [
    {
        path: '',
        title: 'Andrew Loveday',
        icon: 'mdi mdi-account',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'My Pages',
        icon: 'mdi mdi-face-profile',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/dashboard/dashboard1',
                title: 'My Profile',
                icon: 'mdi mdi-account-edit',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard2',
                title: 'My Messages',
                icon: 'mdi mdi-mailbox',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard2',
                title: 'My Settings',
                icon: 'mdi mdi-settings',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Main Pages',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'Dashboards',
        icon: 'mdi mdi-gauge',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/dashboard/dashboard1',
                title: 'Coaches',
                icon: 'mdi mdi-account-box',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard2',
                title: 'Clients',
                icon: 'mdi mdi-account-multiple-outline',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard3',
                title: 'Plans',
                icon: 'mdi mdi-trending-up',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Annual Plans',
        icon: 'mdi mdi-table-large',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'My Plans',
        icon: 'mdi mdi-table-edit',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/dashboard/dashboard3',
                title: 'Andrews 2019 Plan with a really long name',
                icon: 'mdi mdi-trending-up',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard1',
                title: 'Andrews 2018 Plan',
                icon: 'mdi mdi-trending-up',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard2',
                title: 'Craftee Cohort Plan',
                icon: 'mdi mdi-trending-up',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Apps',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '/apps/email',
        title: 'Email',
        icon: 'mdi mdi-email',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'Ticket',
        icon: 'mdi mdi-bookmark-plus-outline',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/apps/ticketlist',
                title: 'Ticket List',
                icon: 'mdi mdi-book-multiple',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/ticketdetails',
                title: 'Ticket Details',
                icon: 'mdi mdi-book-plus',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Extra',
        icon: 'mdi mdi-gradient',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/apps/chat',
                title: 'Chat App',
                icon: 'mdi mdi-comment-processing-outline',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/fullcalendar',
                title: 'Calendar',
                icon: 'mdi mdi-calendar',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/taskboard',
                title: 'Taskboard',
                icon: 'mdi mdi-bulletin-board',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'UI',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'UI Elements',
        icon: 'mdi mdi-widgets',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/component/accordion',
                title: 'Accordion',
                icon: 'mdi mdi-equal',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/alert',
                title: 'Alert',
                icon: 'mdi mdi-message-bulleted',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/carousel',
                title: 'Carousel',
                icon: 'mdi mdi-view-carousel',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/dropdown',
                title: 'Dropdown',
                icon: 'mdi mdi-arrange-bring-to-front',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/modal',
                title: 'Modal',
                icon: 'mdi mdi-tablet',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/pagination',
                title: 'Pagination',
                icon: 'mdi mdi-backburger',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/poptool',
                title: 'Popover & Tooltip',
                icon: 'mdi mdi-image-filter-vintage',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/progressbar',
                title: 'Progressbar',
                icon: 'mdi mdi-poll',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/rating',
                title: 'Ratings',
                icon: 'mdi mdi-bandcamp',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/tabs',
                title: 'Tabs',
                icon: 'mdi mdi-sort-variant',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/timepicker',
                title: 'Timepicker',
                icon: 'mdi mdi-calendar-clock',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/buttons',
                title: 'Button',
                icon: 'mdi mdi-toggle-switch',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/notifier',
                title: 'Notifier',
                icon: 'mdi mdi-bandcamp',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Cards',
        icon: 'mdi mdi-credit-card-multiple',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/cards/basiccards',
                title: 'Basic Cards',
                icon: 'mdi mdi-layers',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/cards/customcards',
                title: 'Custom Cards',
                icon: 'mdi mdi-credit-card-scan',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/cards/weathercards',
                title: 'Weather Cards',
                icon: 'mdi mdi-weather-fog',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Extra Components',
        icon: 'mdi mdi-cube-send',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/extra-component/toastr',
                title: 'Toastr',
                icon: 'mdi mdi-poll',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/upload',
                title: 'File Upload',
                icon: 'mdi mdi-arrow-up-box',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/editor',
                title: 'Editor',
                icon: 'mdi mdi-dns',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/dragndrop',
                title: 'Drag n Drop',
                icon: 'mdi mdi-arrow-expand-all',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Widgets',
        icon: 'mdi mdi-chemical-weapon',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/widgets/apps',
                title: 'Widget Apps',
                icon: 'mdi mdi-comment-processing-outline',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/widgets/data',
                title: 'Widget Data',
                icon: 'mdi mdi-calendar',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Forms',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'Form Elements',
        icon: 'mdi mdi-collage',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/forms/forminputs',
                title: 'Form Inputs',
                icon: 'mdi mdi-priority-low',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/inputgroups',
                title: 'Input Groups',
                icon: 'mdi mdi-rounded-corner',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/inputgrid',
                title: 'Input Grid',
                icon: 'mdi mdi-select-all',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/checkboxandradio',
                title: 'Checkbox & Radio',
                icon: 'mdi mdi-shape-plus',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/multiselect',
                title: 'Multiselect',
                icon: 'mdi mdi-select-inverse',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Form Layouts',
        icon: 'mdi mdi-receipt',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/forms/formbasic',
                title: 'Basic Forms',
                icon: 'mdi mdi-vector-difference-ba',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formhorizontal',
                title: 'Horizontal Forms',
                icon: 'mdi mdi-file-document-box',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formactions',
                title: 'Form Actions',
                icon: 'mdi mdi-code-greater-than',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formrowseparator',
                title: 'Row Separator',
                icon: 'mdi mdi-code-equal',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formstripedrows',
                title: 'Striped Rows',
                icon: 'mdi mdi-content-duplicate',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formdetail',
                title: 'Detail Forms',
                icon: 'mdi mdi-cards-outline',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Form Addons',
        icon: 'mdi mdi-code-equal',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/forms/formvalidation',
                title: 'Form Validation',
                icon: 'mdi mdi-alert-box',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/typehead',
                title: 'Form Typehead',
                icon: 'mdi mdi-backburger',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/datepicker',
                title: 'Datepicker',
                icon: 'mdi mdi-calendar-check',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/language-datepicker',
                title: 'Language Datepicker',
                icon: 'mdi mdi-calendar-check',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/ngx',
                title: 'Form Wizard / Steps',
                icon: 'mdi mdi-select-inverse',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Tables',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'Bootstrap Tables',
        icon: 'mdi mdi-border-none',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/tables/basictables',
                title: 'Basic Tables',
                icon: 'mdi mdi-border-all',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/tables/darktables',
                title: 'Dark Basic Tables',
                icon: 'mdi mdi-border-all',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/tables/colortables',
                title: 'Colored Tables',
                icon: 'mdi mdi-border-all',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/tables/tablesizing',
                title: 'Table Sizing',
                icon: 'mdi mdi-border-all',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '/tables/smarttable',
        title: 'Smart Tables',
        icon: 'mdi mdi-border-left',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/tables/datatable',
        title: 'Data Tables',
        icon: 'mdi mdi-border-vertical',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'Charts',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'Charts',
        icon: 'mdi mdi-image-filter-tilt-shift',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/charts/chartjs',
                title: 'Chart Js',
                icon: 'mdi mdi-svg',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/charts/chartistjs',
                title: 'Chartist Js',
                icon: 'mdi mdi-blur',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/charts/ngxchart',
                title: 'Ngx Charts',
                icon: 'mdi mdi-blur',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Maps',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '/maps/google',
        title: 'Google Maps',
        icon: 'mdi mdi-google-maps',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'Pages',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'Ecommerce Pages',
        icon: 'mdi mdi-cart-outline',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/ecom/products',
                title: 'Products',
                icon: 'mdi mdi-cards-variant',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/cart',
                title: 'Cart',
                icon: 'mdi mdi-cart',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/edit',
                title: 'Edit Products',
                icon: 'mdi mdi-cart-plus',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/details',
                title: 'Product Details',
                icon: 'mdi mdi-camera-burst',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/orders',
                title: 'Orders',
                icon: 'mdi mdi-chart-pie',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/checkout',
                title: 'Checkout',
                icon: 'mdi mdi-clipboard-check',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Authentication',
        icon: 'mdi mdi-account-circle',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/authentication/login',
                title: 'Login',
                icon: 'mdi mdi-account-key',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/login2',
                title: 'Login 2',
                icon: 'mdi mdi-account-key',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/signup',
                title: 'Register',
                icon: 'mdi mdi-account-plus',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/signup2',
                title: 'Register 2',
                icon: 'mdi mdi-account-plus',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/404',
                title: '404',
                icon: 'mdi mdi-alert-outline',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/lock',
                title: 'Lockscreen',
                icon: 'mdi mdi-account-off',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Sample Pages',
        icon: 'mdi mdi-file',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/sample-pages/profile',
                title: 'Profile',
                icon: 'mdi mdi-account-network',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/sample-pages/pricing',
                title: 'Pricing',
                icon: 'mdi mdi-file-export',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/sample-pages/invoice',
                title: 'Invoice',
                icon: 'mdi mdi-ungroup',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/sample-pages/helperclasses',
                title: 'Helper Classes',
                icon: 'mdi mdi-tune',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/starter',
                title: 'Starter Page',
                icon: 'mdi mdi-crop-free',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Timeline',
        icon: 'mdi mdi-apple-safari',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/timeline/left',
                title: 'Left Timeline',
                icon: 'mdi mdi-clock-fast',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/timeline/right',
                title: 'Right Timeline',
                icon: 'mdi mdi-clock-end',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/timeline/center',
                title: 'Center Timeline',
                icon: 'mdi mdi-clock-in',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Icons',
        icon: 'mdi mdi-face',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/icons/fontawesome',
                title: 'Fontawesome',
                icon: 'mdi mdi-emoticon-cool',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/icons/simpleline',
                title: 'Simple Line Icons',
                icon: 'mdi mdi mdi-image-broken-variant',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/icons/material',
                title: 'Material Icons',
                icon: 'mdi mdi-emoticon',
                class: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Menu Levels',
        icon: 'mdi mdi-notification-clear-all',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '',
                title: 'Second Level',
                icon: 'mdi mdi-octagram',
                class: '',
                extralink: true,
                submenu: []
            },
            {
                path: '',
                title: 'Second Child',
                icon: 'mdi mdi-octagram',
                class: 'has-arrow',
                extralink: false,
                submenu: [
                    {
                        path: '',
                        title: 'Third 1.1',
                        icon: 'mdi mdi-playlist-plus',
                        class: '',
                        extralink: false,
                        submenu: []
                    },
                    {
                        path: '',
                        title: 'Third 1.2',
                        icon: 'mdi mdi-playlist-plus',
                        class: '',
                        extralink: false,
                        submenu: []
                    }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items */ "./src/app/shared/sidebar/menu-items.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let SidebarComponent = class SidebarComponent {
    constructor(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.showMenu = '';
        this.showSubMenu = '';
    }
    // this is for the open close
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
    addActiveClass(element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        }
        else {
            this.showSubMenu = element;
        }
    }
    // End open close
    ngOnInit() {
        this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(sidebarnavItem => sidebarnavItem);
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SidebarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html")
    }),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let SpinnerComponent = class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
};
SpinnerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "backgroundColor", void 0);
SpinnerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-spinner',
        template: `<div class="preloader" *ngIf="isSpinnerVisible">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
    </div>`,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        Document])
], SpinnerComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\nlr-new\main\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map