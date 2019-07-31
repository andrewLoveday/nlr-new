(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/customer-support/cs.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/customer-support/cs.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Customer Support</h4>\r\n        <h6 class=\"card-subtitle\">24 new support ticket request generate</h6>\r\n    </div>\r\n    <div class=\"comment-widgets\">\r\n        <!-- Comment Row -->\r\n        <div class=\"d-flex flex-row comment-row\" *ngFor=\"let recentcomment of recentcomments\">\r\n            <div class=\"p-2\">\r\n                <span class=\"round\">\r\n                    <img src=\"{{recentcomment.image}}\" alt=\"user\" width=\"50\">\r\n                </span>\r\n            </div>\r\n            <div class=\"comment-text w-100\">\r\n                <h5>{{recentcomment.name}}</h5>\r\n                <p class=\"m-b-5 text-muted\">{{recentcomment.comment}}</p>\r\n                <div class=\"comment-footer\">\r\n                    <span class=\"text-muted pull-right\">{{recentcomment.date}}</span>\r\n                    <span class=\"badge {{recentcomment.labelcolor}} ml-2\">{{recentcomment.status}}</span>\r\n                    <span class=\"action-icons\">\r\n                        <a href=\"javascript:void(0)\">\r\n                            <i class=\"ti-pencil-alt\"></i>\r\n                        </a>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <i class=\"ti-check\"></i>\r\n                        </a>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <i class=\"ti-heart\"></i>\r\n                        </a>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/feeds/feeds.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/feeds/feeds.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Feeds</h4>\r\n        <div class=\"feed-widget scrollable\">\r\n            <ul class=\"list-style-none feed-body m-0 p-b-20\">\r\n                <li class=\"feed-item\">\r\n                    <div class=\"feed-icon text-dark bg-light-info\">\r\n                        <i class=\"far fa-bell\"></i>\r\n                    </div> You have 4 pending tasks.\r\n                    <span class=\"ml-auto font-12 text-muted\">Just Now</span>\r\n                </li>\r\n                <li class=\"feed-item\">\r\n                    <div class=\"feed-icon text-dark bg-light-success\">\r\n                        <i class=\"ti-server\"></i>\r\n                    </div> Server #1 overloaded.\r\n                    <span class=\"ml-auto font-12 text-muted\">2 Hours ago</span>\r\n                </li>\r\n                <li class=\"feed-item\">\r\n                    <div class=\"feed-icon text-dark bg-light-warning\">\r\n                        <i class=\"ti-shopping-cart\"></i>\r\n                    </div> New order received.\r\n                    <span class=\"ml-auto font-12 text-muted\">31 May</span>\r\n                </li>\r\n                <li class=\"feed-item\">\r\n                    <div class=\"feed-icon text-dark bg-light-danger\">\r\n                        <i class=\"ti-user\"></i>\r\n                    </div> New user registered.\r\n                    <span class=\"ml-auto font-12 text-muted\">30 May</span>\r\n                </li>\r\n                <li class=\"feed-item\">\r\n                    <div class=\"feed-icon text-dark bg-light-warning\">\r\n                        <i class=\"far fa-bell\"></i>\r\n                    </div> New Version just arrived.\r\n                    <span class=\"ml-auto font-12 text-muted\">27 May</span>\r\n                </li>\r\n                <li class=\"feed-item\">\r\n                    <div class=\"feed-icon text-dark bg-light-info\">\r\n                        <i class=\"far fa-bell\"></i>\r\n                    </div> You have 4 pending tasks.\r\n                    <span class=\"ml-auto font-12 text-muted\">Just Now</span>\r\n                </li>\r\n                <li class=\"feed-item\">\r\n                    <div class=\"feed-icon text-dark bg-light-danger\">\r\n                        <i class=\"ti-user\"></i>\r\n                    </div> New user registered.\r\n                    <span class=\"ml-auto font-12 text-muted\">30 May</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/income-counter/income-counter.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/income-counter/income-counter.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #popTitleFilter>Apply filters!</ng-template>\r\n<ng-template #popContentFilter>Click to filter the <b>Coaches</b> on display in the list below!</ng-template>\r\n<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"\">\r\n    <ngb-panel id=\"filter\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <ng-template ngbPanelTitle>\r\n                    <span class=\"open-coach-filters down text-info\" [ngbPopover]=\"popContentFilter\" [popoverTitle]=\"popTitleFilter\" triggers=\"mouseenter:mouseleave\" container=\"body\">\r\n                        Click to show <b>Coach</b> filters\r\n                        <i class=\"fa fas fa-angle-down coach-filter-arrow\"></i>\r\n                    </span>\r\n                </ng-template>\r\n            </div>\r\n        </div>\r\n        <ng-template ngbPanelContent>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 pl-0\">\r\n                    <div class=\"card filter-card\">\r\n                        <div class=\"card-body\">\r\n                            <ng-template #popTitleorder>Order of <b>Coaches</b> displayed below!</ng-template>\r\n                            <ng-template #popContentorder>Click to change the order of the <b>Coaches</b> in the list below!</ng-template>\r\n                            <h4 class=\"card-title\" [ngbPopover]=\"popContentorder\" [popoverTitle]=\"popTitleorder\" triggers=\"mouseenter:mouseleave\" container=\"body\">Showing in order of:</h4>\r\n                            <select class=\"browser-default custom-select order_coaches\">\r\n                                <option value=\"coach_name_a_z\">Coach name - A to Z</option>\r\n                                <option value=\"coach_name_z_a\">Coach name - Z to A</option>\r\n                                <option value=\"most_plans\" selected=\"selected\">Plans Registered - Most to Least</option>\r\n                                <option value=\"least_plans\">Plans Registered - Least to Most</option>\r\n                                <option value=\"most_active\">Plan Activity - Most to Least</option>\r\n                                <option value=\"least_active\">Plan Activity - Least to Most</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 pr-0\">\r\n                    <div class=\"card filter-card\">\r\n                        <div class=\"card-body\">\r\n                            <ng-template #popTitlecount>Number of <b>Coaches</b> on display!</ng-template>\r\n                            <ng-template #popContentcount>Change the number of <b>Coaches</b> to display in the list below!</ng-template>\r\n                            <h4 class=\"card-title\" [ngbPopover]=\"popContentcount\" [popoverTitle]=\"popTitlecount\" triggers=\"mouseenter:mouseleave\">\r\n                                Show these many Coaches:\r\n                            </h4>\r\n                            <div class=\"form-check form-check-inline\">\r\n                              <input type=\"radio\" class=\"form-check-input\" id=\"count2\" name=\"amount_of_coaches\" value=\"2\" mdbInput>\r\n                              <label class=\"form-check-label\" for=\"count2\">2</label>\r\n                            </div>\r\n                            <div class=\"form-check form-check-inline\">\r\n                              <input type=\"radio\" class=\"form-check-input\" id=\"count4\" name=\"amount_of_coaches\" value=\"4\" mdbInput>\r\n                              <label class=\"form-check-label\" for=\"count4\">4</label>\r\n                            </div>\r\n                            <div class=\"form-check form-check-inline\">\r\n                              <input type=\"radio\" class=\"form-check-input\" id=\"count6\" name=\"amount_of_coaches\" value=\"6\" mdbInput>\r\n                              <label class=\"form-check-label\" for=\"count6\">6</label>\r\n                            </div>\r\n                            <div class=\"form-check form-check-inline\">\r\n                              <input type=\"radio\" class=\"form-check-input\" id=\"count8\" name=\"amount_of_coaches\" value=\"8\" checked=\"checked\" mdbInput>\r\n                              <label class=\"form-check-label\" for=\"count8\">8</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            <h4 class=\"card-title\" [ngbPopover]=\"popContentpag\" [popoverTitle]=\"popTitlepag\" triggers=\"mouseenter:mouseleave\" container=\"body\">Showing <b>1</b> to <b>8</b> of <b>8</b> coaches!</h4>\r\n                            <ng-template #popTitlepag>Current listing!</ng-template>\r\n                            <ng-template #popContentpag>You are viewing <b>1</b> to <b>8</b> of <b>8</b> Coaches!</ng-template>\r\n                            <a href=\"#js\" class=\"pagination-btn btn btn-outline-success col-md-1 active\" data-offset=\"0\">1 to 8</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            -->\r\n        </ng-template>\r\n    </ngb-panel>\r\n</ngb-accordion>\r\n<div class=\"row coach-cards\">\r\n    <!-- Column -->\r\n    <div class=\"col-lg-3 col-md-6 coach-card\" data-coach=\"Andrew Duncan\" data-plan_activity=\"63\" data-plan_count=\"12\">\r\n        <div class=\"card\">\r\n            <ng-template #popTitleAndrewDuncan>\r\n                <b>Andrew Duncan</b>\r\n            </ng-template>\r\n            <ng-template #popContentAndrewDuncan>\r\n                <div class=\"profile-img-pop\">\r\n                    <img src=\"assets/images/users/andrew-duncan.jpg\" alt=\"Andrew Duncan\" />\r\n                </div>\r\n                <b>12</b> Plans\r\n            </ng-template>\r\n            <a href=\"/coaches/andrew-duncan\">\r\n                <div class=\"card-body\" [ngbPopover]=\"popContentAndrewDuncan\" [popoverTitle]=\"popTitleAndrewDuncan\" triggers=\"mouseenter:mouseleave\" container=\"body\">\r\n                    <h4 class=\"card-title\">Andrew Duncan</h4>\r\n                    <div class=\"user-profile pb-4 border-bottom\">\r\n                        <div class=\"profile-img\">\r\n                            <img src=\"assets/images/users/andrew-duncan.jpg\" alt=\"Andrew Duncan\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-right fifty\">\r\n                        <h2 class=\"font-light font-weight-normal m-b-0\">\r\n                            <i class=\"ti-arrow-up text-success\"></i> 12\r\n                        </h2>\r\n                        <span class=\"text-muted\">Plans </span>\r\n                    </div>\r\n                    <span class=\"text-success pa\">63% plan activity</span>\r\n                    <ngb-progressbar [showValue]=\"false\" type=\"success\" [value]=\"63\"></ngb-progressbar>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <!-- Column -->\r\n    <div class=\"col-lg-3 col-md-6 coach-card\" data-coach=\"Simon Teague\" data-plan_activity=\"77\" data-plan_count=\"11\">\r\n        <div class=\"card\">\r\n            <ng-template #popTitleSimonTeague>\r\n                <b>Simon Teague</b>\r\n            </ng-template>\r\n            <ng-template #popContentSimonTeague>\r\n                <div class=\"profile-img-pop\">\r\n                    <img src=\"assets/images/users/simon-teague.jpg\" alt=\"Simon Teague\" />\r\n                </div>\r\n                <b>11</b> Plans\r\n            </ng-template>\r\n            <a href=\"/coaches/simon-teague\">\r\n                <div class=\"card-body\" [ngbPopover]=\"popContentSimonTeague\" [popoverTitle]=\"popTitleSimonTeague\" triggers=\"mouseenter:mouseleave\" container=\"body\">\r\n                    <h4 class=\"card-title\">Simon Teague</h4>\r\n                    <div class=\"user-profile pb-4 border-bottom\">\r\n                        <div class=\"profile-img\">\r\n                            <img src=\"assets/images/users/simon-teague.jpg\" alt=\"Simon Teague\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-right fifty\">\r\n                        <h2 class=\"font-light font-weight-normal m-b-0\">\r\n                            <i class=\"ti-arrow-up text-success\"></i> 11\r\n                        </h2>\r\n                        <span class=\"text-muted\">Plans</span>\r\n                    </div>\r\n                    <span class=\"text-success pa\">77% plan activity</span>\r\n                    <ngb-progressbar [showValue]=\"false\" type=\"success\" [value]=\"77\"></ngb-progressbar>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <!-- Column -->\r\n    <div class=\"col-lg-3 col-md-6 coach-card\" data-coach=\"Debbie Brown\" data-plan_activity=\"88\" data-plan_count=\"8\">\r\n        <div class=\"card\">\r\n            <ng-template #popTitleDebbieBrown>\r\n                <b>Debbie Brown</b>\r\n            </ng-template>\r\n            <ng-template #popContentDebbieBrown>\r\n                <div class=\"profile-img-pop\">\r\n                    <img src=\"assets/images/users/no-pic.png\" alt=\"Debbie Brown\" />\r\n                </div>\r\n                <b>8</b> Plans\r\n            </ng-template>\r\n            <a href=\"/coaches/debbie-brown\">\r\n                <div class=\"card-body\" [ngbPopover]=\"popContentDebbieBrown\" [popoverTitle]=\"popTitleDebbieBrown\" triggers=\"mouseenter:mouseleave\" container=\"body\">\r\n                    <h4 class=\"card-title\">Debbie Brown</h4>\r\n                    <div class=\"user-profile pb-4 border-bottom\">\r\n                        <div class=\"profile-img\">\r\n                            <img src=\"assets/images/users/no-pic.png\" alt=\"Debbiw Brown\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-right fifty\">\r\n                        <h2 class=\"font-light font-weight-normal m-b-0\">\r\n                            <i class=\"ti-arrow-up text-success\"></i> 8\r\n                        </h2>\r\n                        <span class=\"text-muted\">Plans</span>\r\n                    </div>\r\n                    <span class=\"text-success pa\">88% plan activity</span>\r\n                    <ngb-progressbar [showValue]=\"false\" type=\"success\" [value]=\"88\"></ngb-progressbar>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <!-- Column -->\r\n    <div class=\"col-lg-3 col-md-6 coach-card\" data-coach=\"Paul Hayes\" data-plan_activity=\"46\" data-plan_count=\"6\">\r\n        <div class=\"card\">\r\n            <ng-template #popTitlePaulHayes>\r\n                <b>Paul Hayes</b>\r\n            </ng-template>\r\n            <ng-template #popContentPaulHayes>\r\n                <div class=\"profile-img-pop\">\r\n                    <img src=\"assets/images/users/no-pic.png\" alt=\"Paul Hayes\" />\r\n                </div>\r\n                <b>6</b> Plans\r\n            </ng-template>\r\n            <a href=\"/coaches/paul-hayes\">\r\n                <div class=\"card-body\" [ngbPopover]=\"popContentPaulHayes\" [popoverTitle]=\"popTitlePaulHayes\" triggers=\"mouseenter:mouseleave\" container=\"body\">\r\n                    <h4 class=\"card-title\">Paul Hayes</h4>\r\n                    <div class=\"user-profile pb-4 border-bottom\">\r\n                        <div class=\"profile-img\">\r\n                            <img src=\"assets/images/users/no-pic.png\" alt=\"Paul Hayes\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-right fifty\">\r\n                        <h2 class=\"font-light font-weight-normal m-b-0\">\r\n                            <i class=\"ti-arrow-up text-success\"></i> 6\r\n                        </h2>\r\n                        <span class=\"text-muted\">Plans</span>\r\n                    </div>\r\n                    <span class=\"text-success pa\">46% plan activity</span>\r\n                    <ngb-progressbar [showValue]=\"false\" type=\"success\" [value]=\"46\"></ngb-progressbar>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <!-- Column -->\r\n    <div class=\"col-lg-3 col-md-6 coach-card\" data-coach=\"Steve Mason\" data-plan_activity=\"92\" data-plan_count=\"5\">\r\n        <div class=\"card\">\r\n            <ng-template #popTitleSteveMason>\r\n                <b>Steve Mason</b>\r\n            </ng-template>\r\n            <ng-template #popContentSteveMason>\r\n                <div class=\"profile-img-pop\">\r\n                    <img src=\"assets/images/users/no-pic.png\" alt=\"Steve Mason\" />\r\n                </div>\r\n                <b>5</b> Plans\r\n            </ng-template>\r\n            <a href=\"/coaches/steve-mason\">\r\n                <div class=\"card-body\" [ngbPopover]=\"popContentSteveMason\" [popoverTitle]=\"popTitleSteveMason\" triggers=\"mouseenter:mouseleave\" container=\"body\">\r\n                    <h4 class=\"card-title\">Steve Mason</h4>\r\n                    <div class=\"user-profile pb-4 border-bottom\">\r\n                        <div class=\"profile-img\">\r\n                            <img src=\"assets/images/users/no-pic.png\" alt=\"Steve Mason\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-right fifty\">\r\n                        <h2 class=\"font-light font-weight-normal m-b-0\">\r\n                            <i class=\"ti-arrow-up text-success\"></i> 5\r\n                        </h2>\r\n                        <span class=\"text-muted\">Plans</span>\r\n                    </div>\r\n                    <span class=\"text-success pa\">92% plan activity</span>\r\n                    <ngb-progressbar [showValue]=\"false\" type=\"success\" [value]=\"92\"></ngb-progressbar>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <!-- Column -->\r\n    <div class=\"col-lg-3 col-md-6 coach-card\" data-coach=\"Katie Farrell\" data-plan_activity=\"68\" data-plan_count=\"4\">\r\n        <div class=\"card\">\r\n            <ng-template #popTitleKatieFarrell>\r\n                <b>Katie Farrell</b>\r\n            </ng-template>\r\n            <ng-template #popContentKatieFarrell>\r\n                <div class=\"profile-img-pop\">\r\n                    <img src=\"assets/images/users/no-pic.png\" alt=\"Katie Farrell\" />\r\n                </div>\r\n                <b>4</b> Plans\r\n            </ng-template>\r\n            <a href=\"/coaches/katie-farrell\">\r\n                <div class=\"card-body\" [ngbPopover]=\"popContentKatieFarrell\" [popoverTitle]=\"popTitleKatieFarrell\" triggers=\"mouseenter:mouseleave\" container=\"body\">\r\n                    <h4 class=\"card-title\">Katie Farrell</h4>\r\n                    <div class=\"user-profile pb-4 border-bottom\">\r\n                        <div class=\"profile-img\">\r\n                            <img src=\"assets/images/users/no-pic.png\" alt=\"Katie Farrell\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-right fifty\">\r\n                        <h2 class=\"font-light font-weight-normal m-b-0\">\r\n                            <i class=\"ti-arrow-up text-success\"></i> 4\r\n                        </h2>\r\n                        <span class=\"text-muted\">Plans</span>\r\n                    </div>\r\n                    <span class=\"text-success pa\">68% plan activity</span>\r\n                    <ngb-progressbar [showValue]=\"false\" type=\"success\" [value]=\"68\"></ngb-progressbar>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <!-- Column -->\r\n    <div class=\"col-lg-3 col-md-6 coach-card\" data-coach=\"Mike Alleyne\" data-plan_activity=\"22\" data-plan_count=\"4\">\r\n        <div class=\"card\">\r\n            <ng-template #popTitleMikeAlleyne>\r\n                <b>Mike Alleyne</b>\r\n            </ng-template>\r\n            <ng-template #popContentMikeAlleyne>\r\n                <div class=\"profile-img-pop\">\r\n                    <img src=\"assets/images/users/no-pic.png\" alt=\"Katie Farrell\" />\r\n                </div>\r\n                <b>4</b> Plans\r\n            </ng-template>\r\n            <a href=\"/coaches/mike-alleyne\">\r\n                <div class=\"card-body\" [ngbPopover]=\"popContentMikeAlleyne\" [popoverTitle]=\"popTitleMikeAlleyne\" triggers=\"mouseenter:mouseleave\" container=\"body\">\r\n                    <h4 class=\"card-title\">Mike Alleyne</h4>\r\n                    <div class=\"user-profile pb-4 border-bottom\">\r\n                        <div class=\"profile-img\">\r\n                            <img src=\"assets/images/users/no-pic.png\" alt=\"Mike Alleyne\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-right fifty\">\r\n                        <h2 class=\"font-light font-weight-normal m-b-0\">\r\n                            <i class=\"ti-arrow-up text-success\"></i> 4\r\n                        </h2>\r\n                        <span class=\"text-muted\">Plans</span>\r\n                    </div>\r\n                    <span class=\"text-success pa\">22% plan activity</span>\r\n                    <ngb-progressbar [showValue]=\"false\" type=\"success\" [value]=\"22\"></ngb-progressbar>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <!-- Column -->\r\n    <div class=\"col-lg-3 col-md-6 coach-card\" data-coach=\"Alison Stansfield\" data-plan_activity=\"23\" data-plan_count=\"3\">\r\n        <div class=\"card\">\r\n            <ng-template #popTitleAlisonStansfield>\r\n                <b>Alison Stansfield</b>\r\n            </ng-template>\r\n            <ng-template #popContentAlisonStansfield>\r\n                <div class=\"profile-img-pop\">\r\n                    <img src=\"assets/images/users/no-pic.png\" alt=\"Alison Stansfield\" />\r\n                </div>\r\n                <b>3</b> Plans\r\n            </ng-template>\r\n            <a href=\"/coaches/alison-stansfield\">\r\n                <div class=\"card-body\" [ngbPopover]=\"popContentAlisonStansfield\" [popoverTitle]=\"popTitleAlisonStansfield\" triggers=\"mouseenter:mouseleave\" container=\"body\">\r\n                    <h4 class=\"card-title\">Alison Stansfield</h4>\r\n                    <div class=\"user-profile pb-4 border-bottom\">\r\n                        <div class=\"profile-img\">\r\n                            <img src=\"assets/images/users/no-pic.png\" alt=\"Alison Stansfield\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-right fifty\">\r\n                        <h2 class=\"font-light font-weight-normal m-b-0\">\r\n                            <i class=\"ti-arrow-up text-success\"></i> 3\r\n                        </h2>\r\n                        <span class=\"text-muted\">Plans</span>\r\n                    </div>\r\n                    <span class=\"text-success pa\">23% plan activity</span>\r\n                    <ngb-progressbar [showValue]=\"false\" type=\"success\" [value]=\"23\"></ngb-progressbar>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/page-analyzer/pa.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/page-analyzer/pa.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <!-- Column -->\r\n    <div class=\"col-md-6 col-lg-3 col-xlg-3\">\r\n        <div class=\"card bg-info\">\r\n            <div class=\"box bg-info text-center\">\r\n                <h1 class=\"font-light text-white\">2,064</h1>\r\n                <h6 class=\"text-white\">Sessions</h6>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <div class=\"col-md-6 col-lg-3 col-xlg-3\">\r\n        <div class=\"card bg-primary\">\r\n            <div class=\"box text-center\">\r\n                <h1 class=\"font-light text-white\">1,738</h1>\r\n                <h6 class=\"text-white\">Users</h6>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <div class=\"col-md-6 col-lg-3 col-xlg-3\">\r\n        <div class=\"card bg-success\">\r\n            <div class=\"box text-center\">\r\n                <h1 class=\"font-light text-white\">5963</h1>\r\n                <h6 class=\"text-white\">Page Views</h6>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <div class=\"col-md-6 col-lg-3 col-xlg-3\">\r\n        <div class=\"card bg-warning\">\r\n            <div class=\"box text-center\">\r\n                <h1 class=\"font-light text-white\">10%</h1>\r\n                <h6 class=\"text-white\">Bounce Rate</h6>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/profile/profile.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/profile/profile.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div class=\"d-flex flex-row\">\r\n            <div class=\"\">\r\n                <img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"rounded-circle\" width=\"100\">\r\n            </div>\r\n            <div class=\"p-l-20\">\r\n                <h3 class=\"\">Daniel Kristeen</h3>\r\n                <h6>UIUX Designer</h6>\r\n                <button class=\"btn btn-success text-white\">\r\n                    <i class=\"ti-plus\"></i> Follow</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-t-40\">\r\n            <div class=\"col border-right\">\r\n                <h2 class=\"font-weight-normal\">14</h2>\r\n                <h6>Photos</h6>\r\n            </div>\r\n            <div class=\"col border-right\">\r\n                <h2 class=\"font-weight-normal\">54</h2>\r\n                <h6>Videos</h6>\r\n            </div>\r\n            <div class=\"col\">\r\n                <h2 class=\"font-weight-normal\">145</h2>\r\n                <h6>Tasks</h6>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <hr>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <p class=\"text-center aboutscroll\">\r\n            Lorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididunt adipisicing elit tempor.\r\n        </p>\r\n        <ul class=\"list-icons d-flex flex-item text-center list-unstyled mt-4\">\r\n            <li class=\"col\">\r\n                <a href=\"javascript:void(0)\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Website\">\r\n                    <i class=\"fa fa-globe font-16 text-muted\"></i>\r\n                </a>\r\n            </li>\r\n            <li class=\"col\">\r\n                <a href=\"javascript:void(0)\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"twitter\">\r\n                    <i class=\"fab fa-twitter font-16 text-muted\"></i>\r\n                </a>\r\n            </li>\r\n            <li class=\"col\">\r\n                <a href=\"javascript:void(0)\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Facebook\">\r\n                    <i class=\"fab fa-facebook-square font-16 text-muted\"></i>\r\n                </a>\r\n            </li>\r\n            <li class=\"col\">\r\n                <a href=\"javascript:void(0)\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Youtube\">\r\n                    <i class=\"fab fa-youtube font-16 text-muted\"></i>\r\n                </a>\r\n            </li>\r\n            <li class=\"col\">\r\n                <a href=\"javascript:void(0)\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Linkd-in\">\r\n                    <i class=\"fab fa-linkedin-in font-16 text-muted\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/project-counter/project-counter.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/project-counter/project-counter.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-group m-b-30\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <h2 class=\"m-b-0\">\r\n                        <i class=\"mdi mdi-briefcase-check text-info\"></i>\r\n                    </h2>\r\n                    <h3 class=\"\">2456</h3>\r\n                    <h6 class=\"card-subtitle\">New Projects</h6>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <ngb-progressbar [showValue]=\"false\" type=\"info\" [value]=\"50\"></ngb-progressbar>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <!-- Column -->\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <h2 class=\"m-b-0\">\r\n                        <i class=\"mdi mdi-alert-circle text-success\"></i>\r\n                    </h2>\r\n                    <h3 class=\"\">546</h3>\r\n                    <h6 class=\"card-subtitle\">Pending Project</h6>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <ngb-progressbar [showValue]=\"false\" type=\"success\" [value]=\"50\"></ngb-progressbar>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <!-- Column -->\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <h2 class=\"m-b-0\">\r\n                        <i class=\"mdi mdi-wallet text-purple\"></i>\r\n                    </h2>\r\n                    <h3 class=\"\">$24561</h3>\r\n                    <h6 class=\"card-subtitle\">Total Cost</h6>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <ngb-progressbar [showValue]=\"false\" type=\"primary\" [value]=\"50\"></ngb-progressbar>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <!-- Column -->\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <h2 class=\"m-b-0\">\r\n                        <i class=\"mdi mdi-buffer text-warning\"></i>\r\n                    </h2>\r\n                    <h3 class=\"\">$30010</h3>\r\n                    <h6 class=\"card-subtitle\">Total Earnings</h6>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                    <ngb-progressbar [showValue]=\"false\" type=\"warning\" [value]=\"50\"></ngb-progressbar>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/project/project.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/project/project.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Projects of the Month</h4>\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table stylish-table v-middle\">\r\n                <thead>\r\n                    <tr>\r\n                        <th colspan=\"2\">Assigned</th>\r\n                        <th>Name</th>\r\n                        <th>Priority</th>\r\n                        <th>Budget</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td style=\"width:50px;\">\r\n                            <button class=\"btn btn-circle btn-lg btn-success text-white\">S</button>\r\n                        </td>\r\n                        <td>\r\n                            <h6 class=\"mb-0\">Sunil Joshi</h6>\r\n                            <small class=\"text-muted\">Web Designer</small>\r\n                        </td>\r\n                        <td>Elite Admin</td>\r\n                        <td>\r\n                            <span class=\"badge badge-light-success text-success\">Low</span>\r\n                        </td>\r\n                        <td>$3.9K</td>\r\n                    </tr>\r\n                    <tr class=\"active\">\r\n                        <td>\r\n                            <span class=\"round\">\r\n                                <img src=\"assets/images/users/2.jpg\" alt=\"user\" width=\"50\" />\r\n                            </span>\r\n                        </td>\r\n                        <td>\r\n                            <h6 class=\"mb-0\">Andrew</h6>\r\n                            <small class=\"text-muted\">Project Manager</small>\r\n                        </td>\r\n                        <td>Real Homes</td>\r\n                        <td>\r\n                            <span class=\"badge badge-light-info text-info\">Medium</span>\r\n                        </td>\r\n                        <td>$23.9K</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <button class=\"btn btn-circle btn-lg btn-danger\">B</button>\r\n                        </td>\r\n                        <td>\r\n                            <h6 class=\"mb-0\">Bhavesh patel</h6>\r\n                            <small class=\"text-muted\">Developer</small>\r\n                        </td>\r\n                        <td>MedicalPro Theme</td>\r\n                        <td>\r\n                            <span class=\"badge badge-light-danger text-danger\">High</span>\r\n                        </td>\r\n                        <td>$12.9K</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            <button class=\"btn btn-circle btn-lg btn-info\">N</button>\r\n                        </td>\r\n                        <td>\r\n                            <h6 class=\"mb-0\">Nirav Joshi</h6>\r\n                            <small class=\"text-muted\">Frontend Eng</small>\r\n                        </td>\r\n                        <td>Elite Admin</td>\r\n                        <td>\r\n                            <span class=\"badge badge-light-success text-success\">Low</span>\r\n                        </td>\r\n                        <td>$10.9K</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Recent Comments</h4>\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- Comment widgets -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"comment-widgets\">\r\n        <!-- Comment Row -->\r\n        <div class=\"d-flex flex-row comment-row\" *ngFor=\"let recentcomment of recentcomments\">\r\n            <div class=\"p-2\">\r\n                <span class=\"round\">\r\n                    <img src=\"{{recentcomment.image}}\" alt=\"user\" width=\"50\">\r\n                </span>\r\n            </div>\r\n            <div class=\"comment-text w-100\">\r\n                <h5>{{recentcomment.name}}</h5>\r\n                <p class=\"m-b-5 text-muted\">{{recentcomment.comment}}</p>\r\n                <div class=\"comment-footer\">\r\n                    <span class=\"text-muted pull-right\">{{recentcomment.date}}</span>\r\n                    <span class=\"badge {{recentcomment.labelcolor}} ml-2\">{{recentcomment.status}}</span>\r\n                    <span class=\"action-icons\">\r\n                        <a href=\"javascript:void(0)\">\r\n                            <i class=\"ti-pencil-alt\"></i>\r\n                        </a>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <i class=\"ti-check\"></i>\r\n                        </a>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <i class=\"ti-heart\"></i>\r\n                        </a>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/recent-message/recent-message.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/recent-message/recent-message.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Message -->\r\n<a href=\"javascript:void(0)\" class=\"message-item\" *ngFor=\"let mymessage of mymessages\">\r\n    <span class=\"user-img\">\r\n        <img src=\"{{mymessage.useravatar}}\" alt=\"user\" class=\"rounded-circle\" width=\"60\">\r\n        <span class=\"profile-status {{mymessage.status}} pull-right\"></span>\r\n    </span>\r\n    <span class=\"mail-contnet\">\r\n        <h5 class=\"message-title\">{{mymessage.from}}</h5>\r\n        <span class=\"mail-desc\">{{mymessage.subject}}</span>\r\n        <span class=\"time\">{{mymessage.time}}</span>\r\n    </span>\r\n</a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/social-slider/social-slider.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/social-slider/social-slider.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\r\n<div class=\"row\">\r\n    <!-- Column -->\r\n    <div class=\"col-lg-4\">\r\n        <div class=\"card bg-success\">\r\n            <div class=\"card-body\">\r\n                <i class=\"fab fa-facebook fa-2x text-white\"></i>\r\n                <p class=\"text-white\">25th Jan</p>\r\n                <h3 class=\"text-white font-light\">Now Get\r\n                    <span class=\"font-medium\">50% Off</span>\r\n                    <br> on buy</h3>\r\n                <div class=\"text-white m-t-20\">\r\n                    <i>- post form wrap</i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <!-- Column -->\r\n    <div class=\"col-lg-4\">\r\n        <div class=\"card bg-danger\">\r\n            <div class=\"card-body\">\r\n                <i class=\"fab fa-google-plus fa-2x text-white\"></i>\r\n                <p class=\"text-white\">25th Jan</p>\r\n                <h3 class=\"text-white font-light\">Now Get\r\n                    <span class=\"font-medium\">50% Off</span>\r\n                    <br> on buy</h3>\r\n                <div class=\"text-white m-t-20\">\r\n                    <i>- Eric fandanc</i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <!-- Column -->\r\n    <div class=\"col-lg-4\">\r\n        <div class=\"card bg-info\">\r\n            <div class=\"card-body\">\r\n                <i class=\"fab fa-twitter fa-2x text-white\"></i>\r\n                <p class=\"text-white\">25th Jan</p>\r\n                <h3 class=\"text-white font-light\">Now Get\r\n                    <span class=\"font-medium\">50% Off</span>\r\n                    <br> on buy</h3>\r\n                <div class=\"text-white m-t-20\">\r\n                    <i>- @shoperstaff</i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n</div>\r\n<!-- Row -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/to-do/todo.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/to-do/todo.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Task List</h4>\r\n        <div class=\"todo-widget scrollable\">\r\n            <ul class=\"list-task todo-list list-group m-b-0\" data-role=\"tasklist\">\r\n                <li class=\"list-group-item todo-item\" data-role=\"task\">\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\">\r\n                        <label class=\"custom-control-label todo-label\" for=\"customCheck\">\r\n                            <span class=\"todo-desc\">Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                                industry.</span>\r\n                            <span class=\"badge badge-pill badge-light-danger text-danger float-right\">Today</span>\r\n                        </label>\r\n                    </div>\r\n                    <ul class=\"list-style-none assignedto\">\r\n                        <li class=\"assignee\">\r\n                            <img class=\"assignee-img\" src=\"assets/images/users/1.jpg\" alt=\"user\" data-toggle=\"tooltip\"\r\n                                data-placement=\"top\" title=\"\" data-original-title=\"Steave\">\r\n                        </li>\r\n                        <li class=\"assignee\">\r\n                            <img class=\"assignee-img\" src=\"assets/images/users/2.jpg\" alt=\"user\" data-toggle=\"tooltip\"\r\n                                data-placement=\"top\" title=\"\" data-original-title=\"Jessica\">\r\n                        </li>\r\n                        <li class=\"assignee\">\r\n                            <img class=\"assignee-img\" src=\"assets/images/users/3.jpg\" alt=\"user\" data-toggle=\"tooltip\"\r\n                                data-placement=\"top\" title=\"\" data-original-title=\"Priyanka\">\r\n                        </li>\r\n                        <li class=\"assignee\">\r\n                            <img class=\"assignee-img\" src=\"assets/images/users/4.jpg\" alt=\"user\" data-toggle=\"tooltip\"\r\n                                data-placement=\"top\" title=\"\" data-original-title=\"Selina\">\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"list-group-item todo-item\" data-role=\"task\">\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                        <label class=\"custom-control-label todo-label\" for=\"customCheck1\">\r\n                            <span class=\"todo-desc\">Lorem Ipsum is simply dummy text of the printing</span>\r\n                            <span class=\"badge badge-pill badge-light-success text-success float-right\">1 week </span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"item-date\"> 26 jun 2017</div>\r\n                </li>\r\n                <li class=\"list-group-item todo-item\" data-role=\"task\">\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\">\r\n                        <label class=\"custom-control-label todo-label\" for=\"customCheck2\">\r\n                            <span class=\"todo-desc\">Give Purchase report to</span>\r\n                            <span class=\"badge badge-pill badge-light-info text-info float-right\">Yesterday</span>\r\n                        </label>\r\n                    </div>\r\n                    <ul class=\"list-style-none assignedto\">\r\n                        <li class=\"assignee\">\r\n                            <img class=\"assignee-img\" src=\"assets/images/users/3.jpg\" alt=\"user\" data-toggle=\"tooltip\"\r\n                                data-placement=\"top\" title=\"\" data-original-title=\"Priyanka\">\r\n                        </li>\r\n                        <li class=\"assignee\">\r\n                            <img class=\"assignee-img\" src=\"assets/images/users/4.jpg\" alt=\"user\" data-toggle=\"tooltip\"\r\n                                data-placement=\"top\" title=\"\" data-original-title=\"Selina\">\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"list-group-item todo-item\" data-role=\"task\">\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck3\">\r\n                        <label class=\"custom-control-label todo-label\" for=\"customCheck3\">\r\n                            <span class=\"todo-desc\">Lorem Ipsum is simply dummy text of the printing </span>\r\n                            <span class=\"badge badge-pill badge-light-warning text-warning float-right\">2 weeks</span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"item-date\"> 26 jun 2017</div>\r\n                </li>\r\n                <li class=\"list-group-item todo-item\" data-role=\"task\">\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck4\">\r\n                        <label class=\"custom-control-label todo-label\" for=\"customCheck4\">\r\n                            <span class=\"todo-desc\">Give Purchase report to</span>\r\n                            <span class=\"badge badge-pill badge-light-info text-info float-right\">Yesterday</span>\r\n                        </label>\r\n                    </div>\r\n                    <ul class=\"list-style-none assignedto\">\r\n                        <li class=\"assignee\">\r\n                            <img class=\"assignee-img\" src=\"assets/images/users/3.jpg\" alt=\"user\" data-toggle=\"tooltip\"\r\n                                data-placement=\"top\" title=\"\" data-original-title=\"Priyanka\">\r\n                        </li>\r\n                        <li class=\"assignee\">\r\n                            <img class=\"assignee-img\" src=\"assets/images/users/4.jpg\" alt=\"user\" data-toggle=\"tooltip\"\r\n                                data-placement=\"top\" title=\"\" data-original-title=\"Selina\">\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/total-earnings/te.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/total-earnings/te.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card earning-widget\">\r\n    <div class=\"card-body\">\r\n        <div class=\"card-title\">\r\n            <h4 class=\"card-title m-b-0\">Total Earning</h4>\r\n            <h2 class=\"m-t-0\">$586</h2>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body border-top\">\r\n        <table class=\"table v-middle no-border\">\r\n            <tbody>\r\n                <tr *ngFor=\"let totalearning of totalearnings\">\r\n                    <td style=\"width:40px\">\r\n                        <img src=\"{{totalearning.image}}\" width=\"50\" class=\"rounded-circle\" alt=\"logo\">\r\n                    </td>\r\n                    <td>{{totalearning.name}}</td>\r\n                    <td class=\"text-right\">\r\n                        <span class=\"badge {{totalearning.labelcolor}}\">{{totalearning.amount}}</span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/widget/widget.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/widget/widget.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <!-- Column -->\r\n    <div class=\"col-lg-4\">\r\n        <div class=\"card\">\r\n            <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img1.jpg\" alt=\"Card\">\r\n            <div class=\"card-body\">\r\n                <ul class=\"list-inline d-flex font-14\">\r\n                    <li class=\"p-l-0 mr-3\">20 May 2016</li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\" class=\"link\">3 Comment</a>\r\n                    </li>\r\n                </ul>\r\n                <h3 class=\"font-normal\">Featured Hydroflora Pots Garden &amp; Outdoors</h3>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <!-- Column -->\r\n    <div class=\"col-lg-4\">\r\n        <div class=\"card\">\r\n            <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img2.jpg\" alt=\"Card\">\r\n            <div class=\"card-body\">\r\n                <ul class=\"list-inline d-flex font-14\">\r\n                    <li class=\"p-l-0 mr-3\">20 May 2016</li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\" class=\"link\">3 Comment</a>\r\n                    </li>\r\n                </ul>\r\n                <h3 class=\"font-normal\">Featured Hydroflora Pots Garden &amp; Outdoors</h3>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <!-- Column -->\r\n    <div class=\"col-lg-4\">\r\n        <div class=\"card\">\r\n            <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img4.jpg\" alt=\"Card\">\r\n            <div class=\"card-body\">\r\n                <ul class=\"list-inline d-flex font-14\">\r\n                    <li class=\"p-l-0  mr-3\">20 May 2016</li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\" class=\"link\">3 Comment</a>\r\n                    </li>\r\n                </ul>\r\n                <h3 class=\"font-normal\">Featured Hydroflora Pots Garden &amp; Outdoors</h3>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard1/dashboard1.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard1/dashboard1.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <!-- You can find this in the dashboard-component -->\r\n        <app-income-counter></app-income-counter>\r\n    </div>\r\n</div>\r\n<!-- Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 align-self-center\">\r\n      <h4 class=\"page-title\">Number of <b>Plans</b> each <b>Coach</b> has</h4>\r\n    </div>\r\n    <!-- Column -->\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <div class=\"d-flex flex-wrap\">\r\n                            <div>\r\n                                <h4>Plans registered in 2019</h4>\r\n                            </div>\r\n                            <!--\r\n                            <div class=\"ml-auto \">\r\n                                <ul class=\"list-inline\">\r\n                                    <li class=\"list-inline-item\">\r\n                                        <h6 class=\"text-muted\">\r\n                                            <i class=\"fa fa-circle m-r-5 text-success\"></i>\r\n                                            Andrew Duncan\r\n                                        </h6>\r\n                                    </li>\r\n                                    <li class=\"list-inline-item\">\r\n                                        <h6 class=\"text-muted\">\r\n                                            <i class=\"fa fa-circle m-r-5 text-info\"></i>\r\n                                            Simon Teague\r\n                                        </h6>\r\n                                    </li>\r\n                                    <li class=\"list-inline-item\">\r\n                                        <h6 class=\"text-muted\">\r\n                                            <i class=\"fa fa-circle m-r-5 text-warning\"></i>\r\n                                            Debbie Brown\r\n                                        </h6>\r\n                                    </li>\r\n                                    <li class=\"list-inline-item\">\r\n                                        <h6 class=\"text-muted\">\r\n                                            <i class=\"fa fa-circle m-r-5 text-primary\"></i>\r\n                                            Paul Hayes\r\n                                        </h6>\r\n                                    </li>\r\n                                    <li class=\"list-inline-item\">\r\n                                        <h6 class=\"text-muted\">\r\n                                            <i class=\"fa fa-circle m-r-5 text-secondary\"></i>\r\n                                            Katie Raffell\r\n                                        </h6>\r\n                                    </li>\r\n                                    <li class=\"list-inline-item\">\r\n                                        <h6 class=\"text-muted\">\r\n                                            <i class=\"fa fa-circle m-r-5 text-info\"></i>\r\n                                            Paul Alleyne\r\n                                        </h6>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                            -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <div style=\"height:370px;\">\r\n                            <canvas baseChart height=\"130\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\"\r\n                                [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\"\r\n                                [chartType]=\"lineChartType\">\r\n                            </canvas>\r\n                        </div>\r\n                    </div>\r\n                    <!--\r\n                    <div class=\"col-lg-3 col-md-6 m-b-30 m-t-20 text-center\">\r\n                        <h2 class=\" font-weight-normal\">$54578</h2>\r\n                        <h6 class=\"text-muted\">Total Revenue</h6>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-6 m-b-30 m-t-20 text-center\">\r\n                        <h2 class=\" font-weight-normal\">$43451</h2>\r\n                        <h6 class=\"text-muted\">Online Revenue</h6>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-6 m-b-30 m-t-20 text-center\">\r\n                        <h2 class=\" font-weight-normal\">$44578</h2>\r\n                        <h6 class=\"text-muted\">Product A</h6>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-6 m-b-30 m-t-20 text-center\">\r\n                        <h2 class=\" font-weight-normal\">$12578</h2>\r\n                        <h6 class=\"text-muted\">Product B</h6>\r\n                    </div>\r\n                    -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Sales of the Month</h4>\r\n                <div class=\"piechart\">\r\n                    <x-chartist class=\"\" [data]=\"donuteChart1.data\" [type]=\"donuteChart1.type\"\r\n                        [options]=\"donuteChart1.options\" [responsiveOptions]=\"donuteChart1.responsiveOptions\"\r\n                        [events]=\"donuteChart1.events\"> </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Sales Prediction</h4>\r\n                        <div class=\"d-flex flex-row\">\r\n                            <div class=\"align-self-center\">\r\n                                <span class=\"display-6 font-weight-normal\">$3528</span>\r\n                                <h6 class=\"text-muted\">(150-165 Sales)</h6>\r\n                            </div>\r\n                            <div class=\"ml-auto m-t-15\">\r\n                                <canvas baseChart width=\"120px\" height=\"120px\" [data]=\"doughnutChartData\"\r\n                                    [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\"\r\n                                    [legend]=\"lineChartLegend\"\r\n                                    [colors]=\"[{backgroundColor: ['#55ce63', '#009efb', '#90a4ae'], borderColor:['#fff', '#fff', '#fff']}]\">\r\n                                </canvas>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Sales Difference</h4>\r\n                        <div class=\"d-flex flex-row\">\r\n                            <div class=\"align-self-center\">\r\n                                <span class=\"display-6 font-weight-normal\">$4316</span>\r\n                                <h6 class=\"text-muted\">(150-165 Sales)</h6>\r\n                            </div>\r\n                            <div class=\"ml-auto m-t-15\">\r\n                                <canvas baseChart width=\"120px\" height=\"120px\" [data]=\"pieChartData\"\r\n                                    [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\" [legend]=\"lineChartLegend\"\r\n                                    [colors]=\"[{backgroundColor: ['#55ce63', '#009efb', '#90a4ae'], borderColor:['#fff', '#fff', '#fff'] }]\">\r\n                                </canvas>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-12\">\r\n        <!-- You can find this in the dashboard-component -->\r\n        <app-profile-box></app-profile-box>\r\n    </div>\r\n</div>\r\n<!-- Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Projects of the Month</h4>\r\n                <div class=\"table-responsive m-t-40\">\r\n                    <table class=\"table stylish-table v-middle no-wrap\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th colspan=\"2\">Assigned</th>\r\n                                <th>Name</th>\r\n                                <th>Priority</th>\r\n                                <th>Budget</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td style=\"width:50px;\">\r\n                                    <button class=\"btn btn-circle btn-lg text-white btn-success\">S</button>\r\n                                </td>\r\n                                <td>\r\n                                    <h6 class=\"mb-0 font-medium\">Sunil Joshi</h6>\r\n                                    <small class=\"text-muted\">Web Designer</small>\r\n                                </td>\r\n                                <td>Elite Admin</td>\r\n                                <td>\r\n                                    <span class=\"badge badge-light-success text-success\">Low</span>\r\n                                </td>\r\n                                <td>$3.9K</td>\r\n                            </tr>\r\n                            <tr class=\"active\">\r\n                                <td>\r\n                                    <span class=\"round\">\r\n                                        <img src=\"assets/images/users/2.jpg\" alt=\"user\" width=\"50\" />\r\n                                    </span>\r\n                                </td>\r\n                                <td>\r\n                                    <h6 class=\"mb-0 font-medium\">Andrew</h6>\r\n                                    <small class=\"text-muted\">Project Manager</small>\r\n                                </td>\r\n                                <td>Real Homes</td>\r\n                                <td>\r\n                                    <span class=\"badge badge-light-info text-info\">Medium</span>\r\n                                </td>\r\n                                <td>$23.9K</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <button class=\"btn btn-circle btn-lg btn-danger\">B</button>\r\n                                </td>\r\n                                <td>\r\n                                    <h6 class=\"mb-0 font-medium\">Bhavesh patel</h6>\r\n                                    <small class=\"text-muted\">Developer</small>\r\n                                </td>\r\n                                <td>MedicalPro Theme</td>\r\n                                <td>\r\n                                    <span class=\"badge badge-light-danger text-danger\">High</span>\r\n                                </td>\r\n                                <td>$12.9K</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <button class=\"btn btn-circle btn-lg btn-info\">N</button>\r\n                                </td>\r\n                                <td>\r\n                                    <h6 class=\"mb-0 font-medium\">Nirav Joshi</h6>\r\n                                    <small class=\"text-muted\">Frontend Eng</small>\r\n                                </td>\r\n                                <td>Elite Admin</td>\r\n                                <td>\r\n                                    <span class=\"badge badge-light-success text-success\">Low</span>\r\n                                </td>\r\n                                <td>$10.9K</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <button class=\"btn btn-circle btn-lg btn-warning\">M</button>\r\n                                </td>\r\n                                <td>\r\n                                    <h6 class=\"mb-0 font-medium\">Micheal Doe</h6>\r\n                                    <small class=\"text-muted\">Content Writer</small>\r\n                                </td>\r\n                                <td>Helping Hands</td>\r\n                                <td>\r\n                                    <span class=\"badge badge-light-danger text-danger\">High</span>\r\n                                </td>\r\n                                <td>$12.9K</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <button class=\"btn btn-circle btn-lg btn-dark\">P</button>\r\n                                </td>\r\n                                <td>\r\n                                    <h6 class=\"mb-0 font-medium\">Johnathan</h6>\r\n                                    <small class=\"text-muted\">Graphic</small>\r\n                                </td>\r\n                                <td>Digital Agency</td>\r\n                                <td>\r\n                                    <span class=\"badge badge-light-danger text-danger\">High</span>\r\n                                </td>\r\n                                <td>$2.6K</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body mailbox\">\r\n                <h4 class=\"card-title\">Recent Messages</h4>\r\n                <div class=\"message-center message-body\" [perfectScrollbar]=\"config\" style=\"height: 600px;\">\r\n                    <app-recent-message></app-recent-message>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Row -->\r\n<app-widget></app-widget>\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <app-recent-comment></app-recent-comment>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <app-to-do></app-to-do>\r\n    </div>\r\n</div>\r\n<!-- Row -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard2/dashboard2.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard2/dashboard2.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Start Page Content -->\r\n<!-- ============================================================== -->\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <!-- You can find this in the dashboard-component -->\r\n        <app-project-counter></app-project-counter>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- chart and stats -->\r\n<!-- ============================================================== -->\r\n<div class=\"row\">\r\n    <!-- chart component -->\r\n    <div class=\"col-lg-8\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex flex-wrap m-b-30\">\r\n                    <div>\r\n                        <h4 class=\"card-title\">Monthly Earning</h4>\r\n                    </div>\r\n                    <div class=\"ml-auto\">\r\n                        <ul class=\"list-inline\">\r\n                            <li class=\"list-inline-item\">\r\n                                <h6 class=\"text-muted text-success\">\r\n                                    <i class=\"fa fa-circle font-10 m-r-10 \"></i>Sales</h6>\r\n                            </li>\r\n                            <li class=\"list-inline-item\">\r\n                                <h6 class=\"text-muted  text-info\">\r\n                                    <i class=\"fa fa-circle font-10 m-r-10\"></i>Earning (k)</h6>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div style=\"height:345px;\">\r\n                    <canvas baseChart [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\"\r\n                        [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"> </canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- other chart component -->\r\n    <div class=\"col-lg-4\">\r\n        <div class=\"card bg-info\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex\">\r\n                    <div class=\"m-r-20 align-self-center\">\r\n                        <h1 class=\"text-white\">\r\n                            <i class=\"ti-light-bulb\"></i>\r\n                        </h1>\r\n                    </div>\r\n                    <div>\r\n                        <h3 class=\"card-title text-white\">Sales Analytics</h3>\r\n                        <h6 class=\"card-subtitle text-white\">March 2017</h6>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6 align-self-center\">\r\n                        <h2 class=\"font-light text-white\">\r\n                            <sup>\r\n                                <small>\r\n                                    <i class=\"ti-arrow-up\"></i>\r\n                                </small>\r\n                            </sup>35487</h2>\r\n                    </div>\r\n                    <div class=\"col- ml-auto p-r-20\">\r\n                        <canvas baseChart width=\"120px\" height=\"120px\" [data]=\"pieChartData\" [labels]=\"pieChartLabels\"\r\n                            [chartType]=\"pieChartType\" [legend]=\"lineChartLegend\"\r\n                            [colors]=\"[{backgroundColor: ['#fff', '#26dad2', '#ffb22b'], borderColor:['#009efb', '#009efb', '#009efb'] }]\">\r\n                        </canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card bg-success\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex\">\r\n                    <div class=\"m-r-20 align-self-center\">\r\n                        <h1 class=\"text-white\">\r\n                            <i class=\"ti-pie-chart\"></i>\r\n                        </h1>\r\n                    </div>\r\n                    <div>\r\n                        <h3 class=\"card-title text-white\">Bandwidth usage</h3>\r\n                        <h6 class=\"card-subtitle text-white\">March 2017</h6>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-6 align-self-center\">\r\n                        <h2 class=\"font-light text-white\">50 GB</h2>\r\n                    </div>\r\n                    <div class=\"col- ml-auto p-r-20 align-self-center\">\r\n                        <canvas baseChart width=\"120px\" height=\"120px\" [data]=\"doughnutChartData\"\r\n                            [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\" [legend]=\"lineChartLegend\"\r\n                            [colors]=\"[{backgroundColor: ['#1976d2', '#fff', '#2b2b2b'], borderColor:['#55ce63', '#55ce63', '#55ce63']}]\">\r\n                        </canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Report and Comments -->\r\n<!-- ============================================================== -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-8\">\r\n        <!-- You can find this in the dashboard-component -->\r\n        <app-project></app-project>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- You can find this in the dashboard-component -->\r\n        <app-profile-box></app-profile-box>\r\n    </div>\r\n</div>\r\n<!-- Row -->\r\n<!-- ============================================================== -->\r\n<!-- Carousel widgets -->\r\n<!-- You can find this in the dashboard-component -->\r\n<!-- ============================================================== -->\r\n<app-widget></app-widget>\r\n<!-- ============================================================== -->\r\n<!-- Activity widgets -->\r\n<!-- You can find this in the dashboard-component -->\r\n<!-- ============================================================== -->\r\n<div class=\"row\">\r\n    <!-- Column -->\r\n    <div class=\"col-lg-6 col-xlg-6\">\r\n        <app-recent-comment></app-recent-comment>\r\n    </div>\r\n    <div class=\"col-lg-6 col-xlg-6\">\r\n        <app-to-do></app-to-do>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard3/dashboard3.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard3/dashboard3.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <!-- You can find this in the dashboard-component -->\r\n        <app-pa></app-pa>\r\n    </div>\r\n</div>\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <!-- Column -->\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4 border-right\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body mailbox\">\r\n                            <h4 class=\"card-title\">Recent Messages</h4>\r\n                            <div class=\"message-center message-body\" [perfectScrollbar]=\"config\" style=\"height: 493px;\">\r\n                                <app-recent-message></app-recent-message>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-8 b-l\">\r\n                    <div class=\"card-body\">\r\n                        <h4>Product Calculation</h4>\r\n                        <ul class=\"list-inline\">\r\n                            <li class=\"p-l-0 list-inline-item\">\r\n                                <h6 class=\"text-muted\">\r\n                                    <i class=\"fa fa-circle m-r-5 text-success\"></i>2016</h6>\r\n                            </li>\r\n                            <li class=\"list-inline-item\">\r\n                                <h6 class=\"text-muted\">\r\n                                    <i class=\"fa fa-circle m-r-5 text-info\"></i>2017</h6>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                                <div style=\"height:370px;\">\r\n                                    <canvas baseChart height=\"130\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\"\r\n                                        [options]=\"lineChartOptions\" [colors]=\"lineChartColors\"\r\n                                        [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\">\r\n                                    </canvas>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-lg-3 col-md-6 m-b-30 m-t-20 text-center\">\r\n                                <h3 class=\"font-weight-normal\">$54578</h3>\r\n                                <h6 class=\"text-muted\">Total Revenue</h6>\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-md-6 m-b-30 m-t-20 text-center\">\r\n                                <h3 class=\"font-weight-normal\">$43451</h3>\r\n                                <h6 class=\"text-muted\">Online Revenue</h6>\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-md-6 m-b-30 m-t-20 text-center\">\r\n                                <h3 class=\"font-weight-normal\">$44578</h3>\r\n                                <h6 class=\"text-muted\">Product A</h6>\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-md-6 m-b-30 m-t-20 text-center\">\r\n                                <h3 class=\"font-weight-normal\">$12578</h3>\r\n                                <h6 class=\"text-muted\">Product B</h6>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n</div>\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Members Activity</h4>\r\n                <h6 class=\"card-subtitle\">what members preformance / weekly status</h6>\r\n                <div class=\"table-responsive m-t-40\">\r\n                    <table class=\"table table-hover v-middle\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th style=\"width: 60px;\"> Member </th>\r\n                                <th> Name </th>\r\n                                <th> Earnings </th>\r\n                                <th> Posts </th>\r\n                                <th> Reviews </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>\r\n                                    <img class=\"rounded-circle\" src=\"assets/images/users/1.jpg\" alt=\"user\" width=\"50\">\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"javascript:;\">Govinda</a>\r\n                                </td>\r\n                                <td> $325 </td>\r\n                                <td> 45 </td>\r\n                                <td>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"far fa-star text-warning\"></i>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <img class=\"rounded-circle\" src=\"assets/images/users/2.jpg\" alt=\"user\" width=\"50\">\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"javascript:;\">Genelia</a>\r\n                                </td>\r\n                                <td> $225 </td>\r\n                                <td> 35 </td>\r\n                                <td>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"far fa-star text-warning\"></i>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <img class=\"rounded-circle\" src=\"assets/images/users/3.jpg\" alt=\"user\" width=\"50\">\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"javascript:;\">Hrithik</a>\r\n                                </td>\r\n                                <td> $185 </td>\r\n                                <td> 28 </td>\r\n                                <td>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"far fa-star text-warning\"></i>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <img class=\"rounded-circle\" src=\"assets/images/users/4.jpg\" alt=\"user\" width=\"50\">\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"javascript:;\">Salman</a>\r\n                                </td>\r\n                                <td> $125 </td>\r\n                                <td> 25 </td>\r\n                                <td>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"far fa-star text-warning\"></i>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <img class=\"rounded-circle\" src=\"assets/images/users/2.jpg\" alt=\"user\" width=\"50\">\r\n                                </td>\r\n                                <td>\r\n                                    <a href=\"javascript:;\">Genelia</a>\r\n                                </td>\r\n                                <td> $225 </td>\r\n                                <td> 35 </td>\r\n                                <td>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"fa fa-star text-warning\"></i>\r\n                                    <i class=\"far fa-star text-warning\"></i>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <app-cs></app-cs>\r\n    </div>\r\n</div>\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Today's Schedule</h4>\r\n                <h6 class=\"card-subtitle\">check out your daily schedule</h6>\r\n                \r\n                <div class=\"steamline m-t-40\">\r\n                    <div class=\"sl-item\">\r\n                        <div class=\"sl-left bg-success\">\r\n                            <i class=\"ti-user\"></i>\r\n                        </div>\r\n                        <div class=\"sl-right\">\r\n                            <div class=\"font-normal\">Meeting today\r\n                                <span class=\"sl-date\"> 5pm</span>\r\n                            </div>\r\n                            <div class=\"desc text-muted\">you can write anything </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"sl-item\">\r\n                        <div class=\"sl-left bg-info\">\r\n                            <i class=\"fa fa-image\"></i>\r\n                        </div>\r\n                        <div class=\"sl-right\">\r\n                            <div class=\"font-normal\">Send documents to Clark</div>\r\n                            <div class=\"desc text-muted\">Lorem Ipsum is simply </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"sl-item\">\r\n                        <div class=\"sl-left\">\r\n                            <img class=\"rounded-circle\" alt=\"user\" src=\"assets/images/users/1.jpg\"> </div>\r\n                        <div class=\"sl-right\">\r\n                            <div>\r\n                                <a href=\"#\" class=\"link\">John Doe</a>\r\n                                <span class=\"sl-date ml-1\">5 minutes ago</span>\r\n                            </div>\r\n                            <div class=\"desc text-muted\">Call today with gohn doe </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"sl-item\">\r\n                        <div class=\"sl-left\">\r\n                            <img class=\"rounded-circle\" alt=\"user\" src=\"assets/images/users/2.jpg\"> </div>\r\n                        <div class=\"sl-right\">\r\n                            <div class=\"font-normal\">Go to the Doctor\r\n                                <span class=\"sl-date\">5 minutes ago</span>\r\n                            </div>\r\n                            <div class=\"desc text-muted\">Contrary to popular belief</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"sl-item\">\r\n                        <div class=\"sl-left\">\r\n                            <img class=\"rounded-circle\" alt=\"user\" src=\"assets/images/users/3.jpg\"> </div>\r\n                        <div class=\"sl-right\">\r\n                            <div>\r\n                                <a href=\"#\" class=\"link\">Tiger Sroff</a>\r\n                                <span class=\"sl-date ml-1\">5 minutes ago</span>\r\n                            </div>\r\n                            <div class=\"desc text-muted\">Approve meeting with tiger\r\n                                <br>\r\n                                <a href=\"javascript:void(0)\"\r\n                                    class=\"btn mt-4 mr-1 btn-rounded btn-outline-success\">Apporve</a>\r\n                                <a href=\"javascript:void(0)\" class=\"btn mt-4 btn-rounded btn-outline-danger\">Refuse</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n    <div class=\"col-lg-8\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Sales Overview</h4>\r\n                <h6 class=\"card-subtitle\">Check the monthly sales </h6>\r\n            </div>\r\n            <div class=\"card-body bg-light\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                        <h2 class=\"m-b-0\">March 2017</h2>\r\n                        <h4 class=\"font-light m-t-0\">Report for this month</h4>\r\n                    </div>\r\n                    <div class=\"col-6 align-self-center display-6 text-info text-right\">$3,690</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"text-center\">#</th>\r\n                            <th>NAME</th>\r\n                            <th>STATUS</th>\r\n                            <th>DATE</th>\r\n                            <th>PRICE</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td class=\"text-center\">1</td>\r\n                            <td class=\"txt-oflo\">Elite admin</td>\r\n                            <td>\r\n                                <span class=\"label label-success label-rouded\">SALE</span>\r\n                            </td>\r\n                            <td class=\"txt-oflo\">April 18, 2017</td>\r\n                            <td>\r\n                                <span class=\"text-success\">$24</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-center\">2</td>\r\n                            <td class=\"txt-oflo\">Real Homes WP Theme</td>\r\n                            <td>\r\n                                <span class=\"label label-info label-rouded\">EXTENDED</span>\r\n                            </td>\r\n                            <td class=\"txt-oflo\">April 19, 2017</td>\r\n                            <td>\r\n                                <span class=\"text-info\">$1250</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-center\">3</td>\r\n                            <td class=\"txt-oflo\">Ample Admin</td>\r\n                            <td>\r\n                                <span class=\"label label-info label-rouded\">EXTENDED</span>\r\n                            </td>\r\n                            <td class=\"txt-oflo\">April 19, 2017</td>\r\n                            <td>\r\n                                <span class=\"text-info\">$1250</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-center\">4</td>\r\n                            <td class=\"txt-oflo\">Medical Pro WP Theme</td>\r\n                            <td>\r\n                                <span class=\"label label-danger label-rouded\">TAX</span>\r\n                            </td>\r\n                            <td class=\"txt-oflo\">April 20, 2017</td>\r\n                            <td>\r\n                                <span class=\"text-danger\">-$24</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-center\">5</td>\r\n                            <td class=\"txt-oflo\">Hosting press html</td>\r\n                            <td>\r\n                                <span class=\"label label-warning label-rouded\">SALE</span>\r\n                            </td>\r\n                            <td class=\"txt-oflo\">April 21, 2017</td>\r\n                            <td>\r\n                                <span class=\"text-success\">$24</span>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-center\">6</td>\r\n                            <td class=\"txt-oflo\">Digital Agency PSD</td>\r\n                            <td>\r\n                                <span class=\"label label-success label-rouded\">SALE</span>\r\n                            </td>\r\n                            <td class=\"txt-oflo\">April 23, 2017</td>\r\n                            <td>\r\n                                <span class=\"text-danger\">-$14</span>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Column -->\r\n</div>\r\n<!-- Row -->\r\n<app-social-slider></app-social-slider>\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <app-te></app-te>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <app-feeds></app-feeds>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboards/dashboard-components/customer-support/cs.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/customer-support/cs.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomerSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSupportComponent", function() { return CustomerSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let CustomerSupportComponent = class CustomerSupportComponent {
    constructor() {
        this.recentcomments = [
            {
                image: 'assets/images/users/1.jpg',
                name: 'James Anderson',
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Pending',
                labelcolor: 'badge-light-info text-info'
            },
            {
                image: 'assets/images/users/2.jpg',
                name: 'Michael Jorden',
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Approved',
                labelcolor: 'badge-light-success text-success'
            },
            {
                image: 'assets/images/users/4.jpg',
                name: 'Johnathan Doeting',
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Rejected',
                labelcolor: 'badge-light-danger text-danger'
            },
            {
                image: 'assets/images/users/5.jpg',
                name: 'James Anderson',
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Pending',
                labelcolor: 'badge-light-info text-info'
            }
        ];
    }
};
CustomerSupportComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-cs',
        template: __webpack_require__(/*! raw-loader!./cs.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/customer-support/cs.component.html")
    }),
    __metadata("design:paramtypes", [])
], CustomerSupportComponent);



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/feeds/feeds.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/feeds/feeds.component.ts ***!
  \**************************************************************************/
/*! exports provided: FeedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedsComponent", function() { return FeedsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let FeedsComponent = class FeedsComponent {
    constructor() { }
};
FeedsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-feeds',
        template: __webpack_require__(/*! raw-loader!./feeds.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/feeds/feeds.component.html")
    }),
    __metadata("design:paramtypes", [])
], FeedsComponent);



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/income-counter/income-counter.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/income-counter/income-counter.component.ts ***!
  \********************************************************************************************/
/*! exports provided: IncomeCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeCounterComponent", function() { return IncomeCounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let IncomeCounterComponent = class IncomeCounterComponent {
    constructor() { }
};
IncomeCounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-income-counter',
        template: __webpack_require__(/*! raw-loader!./income-counter.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/income-counter/income-counter.component.html")
    }),
    __metadata("design:paramtypes", [])
], IncomeCounterComponent);



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/page-analyzer/pa.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/page-analyzer/pa.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PageAnalyzerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAnalyzerComponent", function() { return PageAnalyzerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PageAnalyzerComponent = class PageAnalyzerComponent {
    constructor() { }
};
PageAnalyzerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-pa',
        template: __webpack_require__(/*! raw-loader!./pa.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/page-analyzer/pa.component.html")
    }),
    __metadata("design:paramtypes", [])
], PageAnalyzerComponent);



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/profile/profile.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/profile/profile.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ProfileComponent = class ProfileComponent {
    constructor() { }
};
ProfileComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-profile-box',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/profile/profile.component.html")
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/project-counter/project-counter.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/project-counter/project-counter.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProjectCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCounterComponent", function() { return ProjectCounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ProjectCounterComponent = class ProjectCounterComponent {
    constructor() { }
};
ProjectCounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-project-counter',
        template: __webpack_require__(/*! raw-loader!./project-counter.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/project-counter/project-counter.component.html")
    }),
    __metadata("design:paramtypes", [])
], ProjectCounterComponent);



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/project/project.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/project/project.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ProjectComponent = class ProjectComponent {
    constructor() { }
};
ProjectComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-project',
        template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/project/project.component.html")
    }),
    __metadata("design:paramtypes", [])
], ProjectComponent);



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RecentcommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentcommentComponent", function() { return RecentcommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let RecentcommentComponent = class RecentcommentComponent {
    constructor() {
        this.recentcomments = [
            {
                image: 'assets/images/users/1.jpg',
                name: 'James Anderson',
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Pending',
                labelcolor: 'badge-light-info text-info'
            },
            {
                image: 'assets/images/users/2.jpg',
                name: 'Michael Jorden',
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Approved',
                labelcolor: 'badge-light-success text-success'
            },
            {
                image: 'assets/images/users/4.jpg',
                name: 'Johnathan Doeting',
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Rejected',
                labelcolor: 'badge-light-danger text-danger'
            },
            {
                image: 'assets/images/users/5.jpg',
                name: 'James Anderson',
                comment: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Pending',
                labelcolor: 'badge-light-info text-info'
            }
        ];
    }
};
RecentcommentComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-recent-comment',
        template: __webpack_require__(/*! raw-loader!./recent-comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.html")
    }),
    __metadata("design:paramtypes", [])
], RecentcommentComponent);



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/recent-message/recent-message.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/recent-message/recent-message.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RecentmessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentmessageComponent", function() { return RecentmessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let RecentmessageComponent = class RecentmessageComponent {
    constructor() {
        this.config = {};
        // This is for Mymessages
        this.mymessages = [
            {
                useravatar: 'assets/images/users/1.jpg',
                status: 'online',
                from: 'Pavan kumar',
                subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                time: '9:30 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'busy',
                from: 'Sonu Nigam',
                subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                time: '9:10 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'away',
                from: 'Arijit Sinh',
                subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                time: '9:08 AM'
            },
            {
                useravatar: 'assets/images/users/4.jpg',
                status: 'offline',
                from: 'Pavan kumar',
                subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                time: '9:00 AM'
            },
            {
                useravatar: 'assets/images/users/1.jpg',
                status: 'online',
                from: 'Pavan kumar',
                subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                time: '9:30 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'busy',
                from: 'Sonu Nigam',
                subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                time: '9:10 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'away',
                from: 'Arijit Sinh',
                subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                time: '9:08 AM'
            },
            {
                useravatar: 'assets/images/users/4.jpg',
                status: 'offline',
                from: 'Pavan kumar',
                subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                time: '9:00 AM'
            },
            {
                useravatar: 'assets/images/users/1.jpg',
                status: 'online',
                from: 'Pavan kumar',
                subject: 'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
                time: '9:30 AM'
            }
        ];
    }
};
RecentmessageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-recent-message',
        template: __webpack_require__(/*! raw-loader!./recent-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/recent-message/recent-message.component.html")
    }),
    __metadata("design:paramtypes", [])
], RecentmessageComponent);



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/social-slider/social-slider.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/social-slider/social-slider.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SocialSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSliderComponent", function() { return SocialSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let SocialSliderComponent = class SocialSliderComponent {
    constructor() { }
};
SocialSliderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-social-slider',
        template: __webpack_require__(/*! raw-loader!./social-slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/social-slider/social-slider.component.html")
    }),
    __metadata("design:paramtypes", [])
], SocialSliderComponent);



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/to-do/todo.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/to-do/todo.component.ts ***!
  \*************************************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let TodoComponent = class TodoComponent {
    constructor() { }
};
TodoComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-to-do',
        template: __webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/to-do/todo.component.html")
    }),
    __metadata("design:paramtypes", [])
], TodoComponent);



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/total-earnings/te.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/total-earnings/te.component.ts ***!
  \********************************************************************************/
/*! exports provided: TotalEarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalEarningComponent", function() { return TotalEarningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let TotalEarningComponent = class TotalEarningComponent {
    constructor() {
        this.totalearnings = [
            {
                image: 'assets/images/users/1.jpg',
                name: 'Andrew Simon',
                labelcolor: 'badge-light-info text-info',
                amount: '$2600'
            },
            {
                image: 'assets/images/users/2.jpg',
                name: 'Daniel Kristeen',
                labelcolor: 'badge-light-success text-success',
                amount: '$2300'
            },
            {
                image: 'assets/images/users/3.jpg',
                name: 'Dany John',
                labelcolor: 'badge-light-danger text-danger',
                amount: '$1200'
            },
            {
                image: 'assets/images/users/4.jpg',
                name: 'Chris gyle',
                labelcolor: 'badge-light-warning text-warning',
                amount: '$4400'
            },
            {
                image: 'assets/images/users/5.jpg',
                name: 'Jane Doe',
                labelcolor: 'badge-light-danger text-danger',
                amount: '$2500'
            }
        ];
    }
};
TotalEarningComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-te',
        template: __webpack_require__(/*! raw-loader!./te.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/total-earnings/te.component.html")
    }),
    __metadata("design:paramtypes", [])
], TotalEarningComponent);



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/widget/widget.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/widget/widget.component.ts ***!
  \****************************************************************************/
/*! exports provided: WidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetComponent", function() { return WidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let WidgetComponent = class WidgetComponent {
    constructor() { }
};
WidgetComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-widget',
        template: __webpack_require__(/*! raw-loader!./widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/widget/widget.component.html")
    }),
    __metadata("design:paramtypes", [])
], WidgetComponent);



/***/ }),

/***/ "./src/app/dashboards/dashboard.module.ts":
/*!************************************************!*\
  !*** ./src/app/dashboards/dashboard.module.ts ***!
  \************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboards/dashboard1/dashboard1.component.ts");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "./src/app/dashboards/dashboard2/dashboard2.component.ts");
/* harmony import */ var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard3/dashboard3.component */ "./src/app/dashboards/dashboard3/dashboard3.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboards/dashboard.routing.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _dashboard_components_income_counter_income_counter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard-components/income-counter/income-counter.component */ "./src/app/dashboards/dashboard-components/income-counter/income-counter.component.ts");
/* harmony import */ var _dashboard_components_project_counter_project_counter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard-components/project-counter/project-counter.component */ "./src/app/dashboards/dashboard-components/project-counter/project-counter.component.ts");
/* harmony import */ var _dashboard_components_project_project_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard-components/project/project.component */ "./src/app/dashboards/dashboard-components/project/project.component.ts");
/* harmony import */ var _dashboard_components_recent_comment_recent_comment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard-components/recent-comment/recent-comment.component */ "./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.ts");
/* harmony import */ var _dashboard_components_recent_message_recent_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard-components/recent-message/recent-message.component */ "./src/app/dashboards/dashboard-components/recent-message/recent-message.component.ts");
/* harmony import */ var _dashboard_components_social_slider_social_slider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard-components/social-slider/social-slider.component */ "./src/app/dashboards/dashboard-components/social-slider/social-slider.component.ts");
/* harmony import */ var _dashboard_components_to_do_todo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard-components/to-do/todo.component */ "./src/app/dashboards/dashboard-components/to-do/todo.component.ts");
/* harmony import */ var _dashboard_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard-components/profile/profile.component */ "./src/app/dashboards/dashboard-components/profile/profile.component.ts");
/* harmony import */ var _dashboard_components_page_analyzer_pa_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard-components/page-analyzer/pa.component */ "./src/app/dashboards/dashboard-components/page-analyzer/pa.component.ts");
/* harmony import */ var _dashboard_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard-components/widget/widget.component */ "./src/app/dashboards/dashboard-components/widget/widget.component.ts");
/* harmony import */ var _dashboard_components_customer_support_cs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard-components/customer-support/cs.component */ "./src/app/dashboards/dashboard-components/customer-support/cs.component.ts");
/* harmony import */ var _dashboard_components_total_earnings_te_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard-components/total-earnings/te.component */ "./src/app/dashboards/dashboard-components/total-earnings/te.component.ts");
/* harmony import */ var _dashboard_components_feeds_feeds_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard-components/feeds/feeds.component */ "./src/app/dashboards/dashboard-components/feeds/feeds.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
            ng_chartist__WEBPACK_IMPORTED_MODULE_10__["ChartistModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_9__["DashboardRoutes"])
        ],
        declarations: [
            _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_5__["Dashboard1Component"],
            _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_6__["Dashboard2Component"],
            _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_7__["Dashboard3Component"],
            _dashboard_components_income_counter_income_counter_component__WEBPACK_IMPORTED_MODULE_12__["IncomeCounterComponent"],
            _dashboard_components_project_counter_project_counter_component__WEBPACK_IMPORTED_MODULE_13__["ProjectCounterComponent"],
            _dashboard_components_project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectComponent"],
            _dashboard_components_recent_comment_recent_comment_component__WEBPACK_IMPORTED_MODULE_15__["RecentcommentComponent"],
            _dashboard_components_recent_message_recent_message_component__WEBPACK_IMPORTED_MODULE_16__["RecentmessageComponent"],
            _dashboard_components_social_slider_social_slider_component__WEBPACK_IMPORTED_MODULE_17__["SocialSliderComponent"],
            _dashboard_components_to_do_todo_component__WEBPACK_IMPORTED_MODULE_18__["TodoComponent"],
            _dashboard_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
            _dashboard_components_page_analyzer_pa_component__WEBPACK_IMPORTED_MODULE_20__["PageAnalyzerComponent"],
            _dashboard_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_21__["WidgetComponent"],
            _dashboard_components_customer_support_cs_component__WEBPACK_IMPORTED_MODULE_22__["CustomerSupportComponent"],
            _dashboard_components_total_earnings_te_component__WEBPACK_IMPORTED_MODULE_23__["TotalEarningComponent"],
            _dashboard_components_feeds_feeds_component__WEBPACK_IMPORTED_MODULE_24__["FeedsComponent"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/dashboards/dashboard.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboards/dashboard.routing.ts ***!
  \*************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboards/dashboard1/dashboard1.component.ts");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "./src/app/dashboards/dashboard2/dashboard2.component.ts");
/* harmony import */ var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard3/dashboard3.component */ "./src/app/dashboards/dashboard3/dashboard3.component.ts");



const DashboardRoutes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard1',
                component: _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_0__["Dashboard1Component"],
                data: {
                    title: 'Top performing Coaches',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Coaches with open plans' }
                    ]
                }
            },
            {
                path: 'dashboard2',
                component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_1__["Dashboard2Component"],
                data: {
                    title: 'Classic Dashboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Classic Dashboard' }
                    ]
                }
            },
            {
                path: 'dashboard3',
                component: _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_2__["Dashboard3Component"],
                data: {
                    title: 'Analytical Dashboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Analytical Dashboard' }
                    ]
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/dashboards/dashboard1/dashboard1.component.css":
/*!****************************************************************!*\
  !*** ./src/app/dashboards/dashboard1/dashboard1.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".piechart {\r\n  height: 360px;\r\n  width: 280px;\r\n  margin: 0 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkcy9kYXNoYm9hcmQxL2Rhc2hib2FyZDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkMS9kYXNoYm9hcmQxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGllY2hhcnQge1xyXG4gIGhlaWdodDogMzYwcHg7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboards/dashboard1/dashboard1.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboards/dashboard1/dashboard1.component.ts ***!
  \***************************************************************/
/*! exports provided: Dashboard1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard1Component", function() { return Dashboard1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

const data = __webpack_require__(/*! ./data.json */ "./src/app/dashboards/dashboard1/data.json");
let Dashboard1Component = class Dashboard1Component {
    constructor() {
        this.config = {};
        // lineChart
        this.lineChartData = [
            { data: [4, 1, 3, 0, 2, 1, 1], label: 'Andrew Duncan' },
            { data: [3, 2, 1, 1, 2, 2, 0], label: 'Simon Teague' },
            { data: [1, 0, 1, 1, 0, 2, 0], label: 'Debbie Brown' },
            { data: [0, 3, 1, 1, 0, 2, 1], label: 'Paul Hayes' },
            { data: [1, 0, 0, 2, 1, 0, 1], label: 'Steve Mason' },
            { data: [1, 0, 0, 1, 1, 0, 1], label: 'Katie Farrell' },
            { data: [0, 1, 1, 0, 1, 0, 1], label: 'Mike Alleyne' },
            { data: [1, 0, 0, 1, 1, 0, 0], label: 'Katie Farrell' }
        ];
        this.lineChartLabels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
        ];
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.lineChartColors = [
            {
                // grey
                backgroundColor: 'rgba(0,158,251,0.1)',
                borderColor: '#009efb',
                pointBackgroundColor: '#009efb',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#009efb'
            },
            {
                // dark grey
                backgroundColor: 'rgba(85,206,99,0.1)',
                borderColor: '#55ce63',
                pointBackgroundColor: '#55ce63',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#55ce63'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        // This is for the donute chart
        this.donuteChart1 = {
            type: 'Pie',
            data: data['Pie'],
            options: {
                donut: true,
                showLabel: false,
                donutWidth: 30
            }
            // events: {
            //   draw(data: any): boolean {
            //     return data;
            //   }
            // }
        };
        // Doughnut
        this.doughnutChartLabels = ['Sales', 'Earning', 'Cost'];
        this.doughnutChartOptions = {
            responsive: false,
            maintainAspectRatio: false
        };
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Sales Analytics Pie chart
        this.pieChartLabels = ['Sales', 'Earning', 'Cost'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        this.subtitle = 'This is some text within a card block.';
    }
    ngAfterViewInit() { }
};
Dashboard1Component = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __webpack_require__(/*! raw-loader!./dashboard1.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard1/dashboard1.component.html"),
        styles: [__webpack_require__(/*! ./dashboard1.component.css */ "./src/app/dashboards/dashboard1/dashboard1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Dashboard1Component);



/***/ }),

/***/ "./src/app/dashboards/dashboard1/data.json":
/*!*************************************************!*\
  !*** ./src/app/dashboards/dashboard1/data.json ***!
  \*************************************************/
/*! exports provided: Bar, LineWithArea, Pie, default */
/***/ (function(module) {

module.exports = {"Bar":{"labels":["Jan","Feb","Mar","Apr","May","Jun"],"series":[[5,4,3,7,5,10],[3,2,9,5,4,6]]},"LineWithArea":{"labels":[1,2,3,4,5,6,7,8],"series":[[0,5000,15000,8000,15000,9000,30000,0],[0,3000,5000,2000,8000,1000,5000,0]]},"Pie":{"series":[20,10,30,40]}};

/***/ }),

/***/ "./src/app/dashboards/dashboard2/dashboard2.component.css":
/*!****************************************************************!*\
  !*** ./src/app/dashboards/dashboard2/dashboard2.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkMi9kYXNoYm9hcmQyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboards/dashboard2/dashboard2.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboards/dashboard2/dashboard2.component.ts ***!
  \***************************************************************/
/*! exports provided: Dashboard2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function() { return Dashboard2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let Dashboard2Component = class Dashboard2Component {
    constructor() {
        // This is for the dashboar line chart
        // lineChart
        this.lineChartData = [
            { data: [50, 130, 80, 70, 180, 105, 250], label: 'Sales' },
            { data: [80, 100, 60, 200, 150, 100, 150], label: 'Earnings' }
        ];
        this.lineChartLabels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
        ];
        this.lineChartOptions = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            color: '#f6f6f6'
                        }
                    }
                ],
                xAxes: [
                    {
                        gridLines: {
                            color: '#FFFFFF'
                        }
                    }
                ]
            },
            lineTension: 10,
            responsive: true,
            maintainAspectRatio: false
        };
        this.lineChartColors = [
            {
                // grey
                backgroundColor: 'rgba(0,158,251,0.0)',
                borderColor: '#009efb',
                pointBackgroundColor: '#009efb',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#009efb'
            },
            {
                // dark grey
                backgroundColor: 'rgba(85,206,99,0.0)',
                borderColor: '#55ce63',
                pointBackgroundColor: '#55ce63',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#55ce63'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        // Doughnut
        this.doughnutChartLabels = ['Sales', 'Earning', 'Cost'];
        this.doughnutChartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Sales Analytics Pie chart
        this.pieChartLabels = ['Sales', 'Earning', 'Cost'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        this.subtitle = 'This is some text within a card block.';
    }
    ngAfterViewInit() { }
};
Dashboard2Component = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __webpack_require__(/*! raw-loader!./dashboard2.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard2/dashboard2.component.html"),
        styles: [__webpack_require__(/*! ./dashboard2.component.css */ "./src/app/dashboards/dashboard2/dashboard2.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Dashboard2Component);



/***/ }),

/***/ "./src/app/dashboards/dashboard3/dashboard3.component.css":
/*!****************************************************************!*\
  !*** ./src/app/dashboards/dashboard3/dashboard3.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkMy9kYXNoYm9hcmQzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboards/dashboard3/dashboard3.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboards/dashboard3/dashboard3.component.ts ***!
  \***************************************************************/
/*! exports provided: Dashboard3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard3Component", function() { return Dashboard3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let Dashboard3Component = class Dashboard3Component {
    constructor() {
        this.config = {};
        // This is for the dashboar line chart
        // lineChart
        this.lineChartData = [
            { data: [0, 2, 3, 0, 13, 1, 4, 1], label: 'Product A' },
            { data: [0, 4, 0, 4, 0, 4, 0, 4], label: 'Product B' }
        ];
        this.lineChartLabels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
        ];
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.lineChartColors = [
            {
                // grey
                backgroundColor: 'rgba(0,158,251,0.1)',
                borderColor: '#009efb',
                pointBackgroundColor: '#009efb',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#009efb'
            },
            {
                // dark grey
                backgroundColor: 'rgba(85,206,99,0.1)',
                borderColor: '#55ce63',
                pointBackgroundColor: '#55ce63',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#55ce63'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        this.subtitle = 'This is some text within a card block.';
    }
    ngAfterViewInit() { }
};
Dashboard3Component = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __webpack_require__(/*! raw-loader!./dashboard3.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard3/dashboard3.component.html"),
        styles: [__webpack_require__(/*! ./dashboard3.component.css */ "./src/app/dashboards/dashboard3/dashboard3.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Dashboard3Component);



/***/ })

}]);
//# sourceMappingURL=dashboards-dashboard-module-es2015.js.map