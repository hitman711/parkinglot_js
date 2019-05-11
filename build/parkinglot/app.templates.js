angular.module('parkinglot').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/user/login.html',
    "<div class=\"form-center\">\n" +
    "	<form class=\"form-signin\" ng-submit=\"vm.signIn()\">\n" +
    "		<h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n" +
    "		<label for=\"username\" class=\"sr-only\">Username</label>\n" +
    "		<input type=\"text\" id=\"username\" class=\"form-control\" placeholder=\"username\" required=\"\" autofocus=\"\" ng-model=\"vm.sign_in.username\">\n" +
    "		<small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.sign_in_error.username}}</small>\n" +
    "		<br />\n" +
    "		<label for=\"inputPassword\" class=\"sr-only\">Password</label>\n" +
    "		<input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\" ng-model=\"vm.sign_in.password\">\n" +
    "		<small small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.sign_in_error.password}}</small>\n" +
    "		<div class=\"checkbox mb-3\">\n" +
    "		</div>\n" +
    "		<button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n" +
    "	</form>\n" +
    "</div>\n" +
    "<h4 class=\"text-center\">\n" +
    "	<a ui-sref=\"signup\">Registration</a>\n" +
    "</h4>"
  );


  $templateCache.put('app/user/signup.html',
    "<div class=\"form-center\">\n" +
    "  <form class=\"form-signuo\" ng-submit=\"vm.registration()\">\n" +
    "    <h1 class=\"h3 mb-3 font-weight-normal\">Sign Up</h1>\n" +
    "    <label for=\"first_name\" class=\"sr-only\">First Name</label>\n" +
    "    <input type=\"text\" id=\"first_name\" class=\"form-control\" placeholder=\"First Name\" required=\"\" autofocus=\"\" ng-model=\"vm.sign_up.first_name\">\n" +
    "    <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.sign_up_error.first_name}}</small>\n" +
    "    <br />\n" +
    "    <label for=\"last_name\" class=\"sr-only\">Last Name</label>\n" +
    "    <input type=\"text\" id=\"last_name\" class=\"form-control\" placeholder=\"Last Name\" required=\"\" autofocus=\"\" ng-model=\"vm.sign_up.last_name\">\n" +
    "    <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.sign_up_error.last_name}}</small>\n" +
    "    <br />\n" +
    "    <label for=\"email\" class=\"sr-only\">Email Address</label>\n" +
    "    <input type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email Address\" required=\"\" autofocus=\"\" ng-model=\"vm.sign_up.email\">\n" +
    "    <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.sign_up_error.email}}</small>\n" +
    "    <br />\n" +
    "    <label for=\"username\" class=\"sr-only\">Username</label>\n" +
    "    <input type=\"text\" id=\"username\" class=\"form-control\" placeholder=\"Username\" required=\"\" autofocus=\"\" ng-model=\"vm.sign_up.username\">\n" +
    "    <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.sign_up_error.username}}</small>\n" +
    "    <br />\n" +
    "    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n" +
    "    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\" ng-model=\"vm.sign_up.password\">\n" +
    "    <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.sign_up_error.password}}</small>\n" +
    "    <div class=\"checkbox mb-3\">\n" +
    "    </div>\n" +
    "    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign Up</button>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<h4 class=\"text-center\">\n" +
    "  <a ui-sref=\"login\">Sign In</a>\n" +
    "</h4>"
  );


  $templateCache.put('app/venue/company.html',
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <ul class='nav-header'>\n" +
    "                <li class=\"nav-field\"><a class=\"active\" ng-href='venue'>Parking List</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"company\">My Venue</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"reservations\">Reservations</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"prices\">Prices</a></li>\n" +
    "                <li ng-hide='vm.reservation_count==0' class=\"nav-field\"><a ng-href=\"my-reservation\">My Reservations</a></li>\n" +
    "                <li class=\"nav-field\" style=\"float:right\"><a class=\"active btn btn-md btn-danger\" style='color: white'\n" +
    "                        ng-click=\"vm.SignOut()\">Sign\n" +
    "                        Out</a></li>\n" +
    "                <li class=\"nav-field\" style=\"float:right; padding-right: 10px\"><a class=\"btn btn-md btn-success\" style='color: white'\n" +
    "                        data-toggle=\"modal\" ng-show='vm.company_id==0' data-target=\"#company\">Create Company</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <br />\n" +
    "            <ul class='search-header'>\n" +
    "                <li class=\"nav-field col-sm-4\">\n" +
    "                    <form class=\"form-group\" ng-submit='vm.call_initial_function()'>\n" +
    "                        <input type='text' class='form-control' ng-model=\"vm.my_venue_search.search\" placeholder=\"Parking no. floor no., building name etc\" />\n" +
    "                    </form>\n" +
    "\n" +
    "                </li>\n" +
    "                <li class=\"nav-field\">\n" +
    "                    <button class='btn btn-md btn-danger' ng-click=\"vm.Reset()\">Reset</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-6 text-right\">\n" +
    "                    <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addvenue\" ng-click=\"vm.AddVenueDetail(company.id)\">\n" +
    "                        Add Venue\n" +
    "                    </button>\n" +
    "                    <button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#addprice\">\n" +
    "                        Add Price\n" +
    "                    </button>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <br />\n" +
    "            <ul class='info-header'>\n" +
    "                <li class=\"nav-field col-xs-2\">\n" +
    "                    <button class='btn btn-primary' ng-disabled=\"!vm.venue_list.previous\" ng-click='vm.call_initial_function(vm.venue_list.previous)'>Previous</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-xs-2\">\n" +
    "                    &nbsp;\n" +
    "                    <button class='btn btn-primary' ng-disabled=\"!vm.venue_list.next\" ng-click='vm.call_initial_function(vm.venue_list.next)'>Next</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-4\">\n" +
    "                    <p class=\"text-center\">\n" +
    "                        Current record:-{{vm.my_venue_list.results.length}}\n" +
    "                    </p>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-4\">\n" +
    "                    <p class=\"text-right\">\n" +
    "                        Total record found:-{{vm.my_venue_list.count}}\n" +
    "                    </p>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <br />\n" +
    "            <table class=\"table table-striped\">\n" +
    "                <tr>\n" +
    "                    <th></th>\n" +
    "                    <th>Name</th>\n" +
    "                    <th>Parking count</th>\n" +
    "                    <th>Venue Type</th>\n" +
    "                    <th>Action</th>\n" +
    "                </tr>\n" +
    "                <tr ng-repeat='company in vm.my_venue_list.results'>\n" +
    "                    <td ng-click=\"venueArch(company.id)\" data-toggle=\"modal\" data-target=\"#architectureview\">{{company.id}}</td>\n" +
    "                    <td ng-click=\"venueArch(company.id)\" data-toggle=\"modal\" data-target=\"#architectureview\">{{company.name}}</td>\n" +
    "                    <td>{{company.available_lot}}</td>\n" +
    "                    <td>{{company.venue_type}}</td>\n" +
    "                    <td>\n" +
    "                        <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addvenue\" ng-click=\"vm.AddVenueDetail(company.id)\">\n" +
    "                            Add Venue\n" +
    "                        </button>\n" +
    "                        <button class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#addvenue\" ng-click=\"vm.UpdateVenueDetail(company.id)\">\n" +
    "                            Update Venue\n" +
    "                        </button>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"addvenue\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addvenue\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog modal-md\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                Add Venue\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <input class='form-control' type='text' ng-model='vm.venue_detail.name' placeholder=\"Venue name*\"\n" +
    "                            required />\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <br />\n" +
    "                        <select class='form-control' ng-model='vm.venue_detail.category'>\n" +
    "                            <option value=\"\" selected disabled hidden required>Select category*</option>\n" +
    "                            <option ng-repeat=\"item in vm.venue_category\" value=\"{{item.key}}\">{{item.value}}</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <br />\n" +
    "                        <select class='form-control' ng-model='vm.venue_detail.price'>\n" +
    "                            <option value=\"\" selected disabled hidden>Select price Set</option>\n" +
    "                            <option ng-repeat=\"item in vm.price_list.results\" value=\"{{item.id}}\">{{item.name}}</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <br />\n" +
    "                        <select class='form-control' ng-model='vm.venue_detail.venue_type'>\n" +
    "                            <option value=\"\" selected disabled hidden>Available parking type</option>\n" +
    "                            <option ng-repeat=\"item in vm.venue_type\" value=\"{{item.key}}\">{{item.value}}</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class='col-md-12 text-center'>\n" +
    "                        <br />\n" +
    "                        <button class=\"btn btn-success\" ng-hide=\"vm.venue_id || vm.venue_detail.id\" ng-click='vm.API_SERVICE_CALL(\"company\", \"post\")'>Create\n" +
    "                            Venue</button>\n" +
    "                        <button class=\"btn btn-success\" ng-show=\"vm.venue_id && !vm.venue_detail.id\" ng-click='vm.API_SERVICE_CALL(\"venue\", \"post\")'>Sub\n" +
    "                            Venue</button>\n" +
    "                        <button class=\"btn btn-info\" ng-show=\"vm.venue_id && vm.venue_detail.id\" ng-click='vm.API_SERVICE_CALL(\"venue\", \"update\")'>Update\n" +
    "                            Venue</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- /.modal-content -->\n" +
    "    </div>\n" +
    "    <!-- /.modal-dialog -->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"addprice\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addprice\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog modal-md\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                Add Price\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <input class='form-control' type='text' ng-model='vm.price_detail.name' placeholder=\"Price name\" />\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.name}}</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <br />\n" +
    "                        <input class='form-control' type='text' ng-model='vm.price_detail.duration' placeholder=\"Set booking duration\" />\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.duration}}</small>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <br />\n" +
    "                        <select class='form-control' ng-model='vm.price_detail.duration_unit' placeholder=\"Set booking duration unit\">\n" +
    "                            <option ng-repeat=\"item in vm.duration_unit\" value=\"{{item.key}}\">{{item.key}}</option>\n" +
    "                        </select>\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.duration_unit}}</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                        <br />\n" +
    "                        <input type='text' ng-model='vm.price_detail.pre_paid_amount' placeholder=\"Pre paid amount\"\n" +
    "                            class=\"form-control\" />\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.pre_paid_amount}}</small>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                        <br />\n" +
    "                        <input type='text' ng-model='vm.price_detail.amount' placeholder=\"Total amount\" class=\"form-control\" />\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.amount}}</small>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                        <br />\n" +
    "                        <input type='text' ng-model='vm.price_detail.overdue_amount' placeholder=\"Overdue amount\" class=\"form-control\" />\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.overdue_amount}}</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class='col-md-12 text-center'>\n" +
    "                        <br />\n" +
    "                        <button class=\"btn btn-success\" ng-click=\"vm.API_SERVICE_CALL('prices', 'post')\">Create Price</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- /.modal-content -->\n" +
    "    </div>\n" +
    "    <!-- /.modal-dialog -->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"company\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"company\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog modal-md\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                Create Company\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <form class='form-group' ng-submit=\"vm.CreateCompany()\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <input class='form-control' type='text' ng-model='vm.company_detail.name' placeholder=\"Company name\" />\n" +
    "                            <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.sign_in_error.name}}</small>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class='col-md-12 text-center'>\n" +
    "                            <br />\n" +
    "                            <button class=\"btn btn-success\" ng-click='vm.CreateCompany()\n" +
    "                                '>Create\n" +
    "                                Company</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "            </div>\n" +
    "            </form>\n" +
    "\n" +
    "        </div>\n" +
    "        <!-- /.modal-content -->\n" +
    "    </div>\n" +
    "    <!-- /.modal-dialog -->\n" +
    "</div>"
  );


  $templateCache.put('app/venue/my-reservation.html',
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <ul class='nav-header'>\n" +
    "                <li class=\"nav-field\"><a class=\"active\" ng-href='venue'>Parking List</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"company\">My Venue</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"reservations\">Reservations</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"prices\">Prices</a></li>\n" +
    "                <li ng-hide='vm.reservation_count==0' class=\"nav-field\"><a ng-href=\"my-reservation\">My Reservations</a></li>\n" +
    "                <li class=\"nav-field\" style=\"float:right\"><a class=\"active btn btn-md btn-danger\" style='color: white'\n" +
    "                        ng-click=\"vm.SignOut()\">Sign\n" +
    "                        Out</a></li>\n" +
    "                <li class=\"nav-field\" ng-show='vm.company_id==0' style=\"float:right; padding-right: 10px\"><a class=\"btn btn-md btn-success\"\n" +
    "                        style='color: white' data-toggle=\"modal\" data-target=\"#company\">Create Company</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <br />\n" +
    "            <ul class='search-header'>\n" +
    "                <li class=\"nav-field col-sm-4\">\n" +
    "                    <form class=\"form-group\" ng-submit='vm.Search()'>\n" +
    "                        <input type='text' class='form-control' ng-model=\"vm.my_reservation_search.search\" placeholder=\"Parking name..\" />\n" +
    "                    </form>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-2\">\n" +
    "                    <div class=\"input-group\" moment-picker=\"vm.my_reservation_search.book_from\" change=\"vm.Search()\"\n" +
    "                        format=\"YYYY-MM-DD hh:mm:ss A\">\n" +
    "                        <span class=\"input-group-addon\">\n" +
    "                            <i class=\"octicon octicon-calendar\"></i>\n" +
    "                        </span>\n" +
    "                        <input class=\"form-control\" placeholder=\"Select a date\" ng-model='vm.my_reservation_search.book_from'\n" +
    "                            ng-model-options=\"{ updateOn: 'blur' }\">\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "\n" +
    "                <li class=\"nav-field col-sm-2\">\n" +
    "                    <div class=\"input-group\" moment-picker=\"vm.my_reservation_search.book_to\" change=\"vm.Search()\"\n" +
    "                        format=\"YYYY-MM-DD hh:mm:ss A\" change='vm.Search()'>\n" +
    "                        <span class=\"input-group-addon\">\n" +
    "                            <i class=\"octicon octicon-calendar\"></i>\n" +
    "                        </span>\n" +
    "                        <input class=\"form-control\" placeholder=\"Select a date\" ng-model='vm.my_reservation_search.book_to'\n" +
    "                            ng-model-options=\"{ updateOn: 'blur' }\">\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "\n" +
    "                <li class=\"nav-field\">\n" +
    "                    <button class='btn btn-md btn-danger' ng-click=\"vm.Reset()\">Reset</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field\">\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <br />\n" +
    "            <ul class='info-header'>\n" +
    "                <li class=\"nav-field col-xs-2\">\n" +
    "                    <button class='btn btn-primary' ng-disabled=\"!vm.my_reservation_list.previous\" ng-click='vm.MyReservationList(vm.my_reservation_list.previous)'>Previous</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-xs-2\">\n" +
    "                    &nbsp;\n" +
    "                    <button class='btn btn-primary' ng-disabled=\"!vm.my_reservation_list.next\" ng-click='vm.MyReservationList(vm.reservation_list.next)'>Next</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-4\">\n" +
    "                    <p class=\"text-center\">\n" +
    "                        Current record:-{{vm.my_reservation_list.results.length}}\n" +
    "                    </p>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-6\">\n" +
    "                    <p class=\"text-right\">\n" +
    "                        Total record found:-{{vm.my_reservation_list.count}}\n" +
    "                    </p>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <br />\n" +
    "            <table class=\"table table-striped\">\n" +
    "                <tr>\n" +
    "                    <th></th>\n" +
    "                    <th>Venue Name</th>\n" +
    "                    <th>From</th>\n" +
    "                    <th>To</th>\n" +
    "                    <th>Contact no</th>\n" +
    "                    <th>Status</th>\n" +
    "                    <th class=\"text-center\">Action</th>\n" +
    "                </tr>\n" +
    "                <tr ng-repeat='reservation in vm.my_reservation_list.results'>\n" +
    "                    <td></td>\n" +
    "                    <td>{{reservation.venue.name}}</td>\n" +
    "                    <td>{{reservation.book_from | date:'yyyy-MM-dd HH:mm a'}}</td>\n" +
    "                    <td>{{reservation.book_to | date:'yyyy-MM-dd HH:mm a'}}</td>\n" +
    "                    <td>{{reservation.phone_number}}</td>\n" +
    "                    <td>{{reservation.status}}</td>\n" +
    "                    <td>\n" +
    "                        <button ng-hide=\"reservation.payment_status === 'closed' || reservation.status === 'canceled'\"\n" +
    "                            class=\"btn btn-primary\">Pay</button>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('app/venue/prices.html',
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <ul class='nav-header'>\n" +
    "                <li class=\"nav-field\"><a class=\"active\" ng-href='venue'>Parking List</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"company\">My Venue</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"reservations\">Reservations</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"prices\">Prices</a></li>\n" +
    "                <li ng-hide='vm.reservation_count==0' class=\"nav-field\"><a ng-href=\"my-reservation\">My Reservations</a></li>\n" +
    "                <li class=\"nav-field\" style=\"float:right\"><a class=\"active btn btn-md btn-danger\" style='color: white'\n" +
    "                        ng-click=\"vm.SignOut()\">Sign\n" +
    "                        Out</a></li>\n" +
    "                <li class=\"nav-field\" style=\"float:right; padding-right: 10px\"><a class=\"btn btn-md btn-success\" style='color: white'\n" +
    "                        data-toggle=\"modal\" ng-show='vm.company_count==0' data-target=\"#company\">Create Company</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <br />\n" +
    "            <ul class='search-header'>\n" +
    "                <li class=\"nav-field col-sm-4\">\n" +
    "                    <form class=\"form-group\" ng-submit='vm.Search()'>\n" +
    "                        <input type='text' class='form-control' ng-model=\"vm.price_search.search\" placeholder=\"Company name, price name \" />\n" +
    "                    </form>\n" +
    "\n" +
    "                </li>\n" +
    "                <li class=\"nav-field\">\n" +
    "                    <button class='btn btn-md btn-danger' ng-click=\"vm.Reset()\">Reset</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-6 text-right\">\n" +
    "                    <button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#addprice\">\n" +
    "                        Add Price\n" +
    "                    </button>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <br />\n" +
    "            <ul class='info-header'>\n" +
    "                <li class=\"nav-field col-xs-2\">\n" +
    "                    <button class='btn btn-primary' ng-disabled=\"!vm.price_list.previous\" ng-click='vm.PriceList(vm.price_list.previous)'>Previous</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-xs-2\">\n" +
    "                    &nbsp;\n" +
    "                    <button class='btn btn-primary' ng-disabled=\"!vm.price_list.next\" ng-click='vm.PriceList(vm.price_list.next)'>Next</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-4\">\n" +
    "                    <p class=\"text-center\">\n" +
    "                        Current record:-{{vm.price_list.results.length}}\n" +
    "                    </p>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-6\">\n" +
    "                    <p class=\"text-right\">\n" +
    "                        Total record found:-{{vm.price_list.count}}\n" +
    "                    </p>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <br />\n" +
    "            <table class=\"table table-striped\">\n" +
    "                <tr>\n" +
    "                    <th></th>\n" +
    "                    <th>Name</th>\n" +
    "                    <th>Duration</th>\n" +
    "                    <th>Duration Type</th>\n" +
    "                    <th>Amount</th>\n" +
    "                    <th>Pre paid amount</th>\n" +
    "                    <th>Over due charge</th>\n" +
    "                    <th class=\"text-center\">Action</th>\n" +
    "                </tr>\n" +
    "                <tr ng-repeat='price in vm.price_list.results'>\n" +
    "                    <td></td>\n" +
    "                    <td>{{price.name}}</td>\n" +
    "                    <td>{{price.duration}}</td>\n" +
    "                    <td>{{price.duration_unit}}</td>\n" +
    "                    <td>{{price.amount}}</td>\n" +
    "                    <td>{{price.pre_paid_amount}}</td>\n" +
    "                    <td>{{price.overdue_amount}}</td>\n" +
    "                    <td>\n" +
    "                        <button class=\"btn btn-primary\" data-toggle=\"modal\" ng-click='vm.PriceDetail(price.id)'\n" +
    "                            data-target=\"#addprice\">\n" +
    "                            update\n" +
    "                        </button>\n" +
    "                        <button class=\"btn btn-danger\" data-toggle=\"modal\" ng-click='vm.PriceDetail(price.id)'\n" +
    "                            data-target=\"#deleteprice\">\n" +
    "                            delete\n" +
    "                        </button>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"addprice\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addprice\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog modal-md\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                Add Price\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <input class='form-control' type='text' ng-model='vm.price_detail.name' placeholder=\"Price name\" />\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.name}}</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <br />\n" +
    "                        <input class='form-control' type='text' ng-model='vm.price_detail.duration' placeholder=\"Set booking duration\" />\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.duration}}</small>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <br />\n" +
    "                        <select class='form-control' ng-model='vm.price_detail.duration_unit' placeholder=\"Set booking duration unit\">\n" +
    "                            <option ng-repeat=\"item in vm.duration_unit\" value=\"{{item.key}}\">{{item.key}}</option>\n" +
    "                        </select>\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.duration_unit}}</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                        <br />\n" +
    "                        <input type='text' ng-model='vm.price_detail.pre_paid_amount' placeholder=\"Pre paid amount\"\n" +
    "                            class=\"form-control\" />\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.pre_paid_amount}}</small>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                        <br />\n" +
    "                        <input type='text' ng-model='vm.price_detail.amount' placeholder=\"Total amount\" class=\"form-control\" />\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.amount}}</small>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-4\">\n" +
    "                        <br />\n" +
    "                        <input type='text' ng-model='vm.price_detail.overdue_amount' placeholder=\"Overdue amount\" class=\"form-control\" />\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.overdue_amount}}</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class='col-md-12 text-center'>\n" +
    "                        <br />\n" +
    "                        <button class=\"btn btn-success\" ng-show=\"vm.price_detail.id\" ng-click=\"vm.API_SERVICE_CALL('prices', 'update')\">Update\n" +
    "                            Price</button>\n" +
    "                        <button class=\"btn btn-success\" ng-hide=\"vm.price_detail.id\" ng-click=\"vm.API_SERVICE_CALL('prices', 'post')\">Create\n" +
    "                            Price</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- /.modal-content -->\n" +
    "    </div>\n" +
    "    <!-- /.modal-dialog -->\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"deleteprice\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteprice\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog modal-md\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                Add Price\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <p>Are you sure you want to delete?</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class='col-md-12 text-center'>\n" +
    "                        <br />\n" +
    "                        <button class=\"btn btn-success\" ng-show=\"vm.price_detail.id\" ng-click=\"vm.API_SERVICE_CALL('prices', 'delete')\">Yes</button>\n" +
    "                        <button class=\"btn btn-danger\" ng-show=\"vm.price_detail.id\" data-dismiss=\"modal\">No</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- /.modal-content -->\n" +
    "    </div>\n" +
    "    <!-- /.modal-dialog -->\n" +
    "</div>"
  );


  $templateCache.put('app/venue/reservation.html',
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <ul class='nav-header'>\n" +
    "                <li class=\"nav-field\"><a class=\"active\" ng-href='venue'>Parking List</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"company\">My Venue</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"reservations\">Reservations</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"prices\">Prices</a></li>\n" +
    "                <li ng-hide='vm.reservation_count==0' class=\"nav-field\"><a ng-href=\"my-reservation\">My Reservations</a></li>\n" +
    "                <li class=\"nav-field\" style=\"float:right\"><a class=\"active btn btn-md btn-danger\" style='color: white'\n" +
    "                        ng-click=\"vm.SignOut()\">Sign\n" +
    "                        Out</a></li>\n" +
    "                <li class=\"nav-field\" ng-show='vm.company_id==0' style=\"float:right; padding-right: 10px\"><a class=\"btn btn-md btn-success\"\n" +
    "                        style='color: white' data-toggle=\"modal\" data-target=\"#company\">Create Company</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <br />\n" +
    "            <ul class='search-header'>\n" +
    "                <li class=\"nav-field col-sm-4\">\n" +
    "                    <form class=\"form-group\" ng-submit='vm.Search()'>\n" +
    "                        <input type='text' class='form-control' ng-model=\"vm.reservation_search.search\" placeholder=\"Parking name, user name, license no., mobile no...\" />\n" +
    "                    </form>\n" +
    "                </li>\n" +
    "\n" +
    "                <li class=\"nav-field col-sm-2\">\n" +
    "                    <div class=\"input-group\" moment-picker=\"vm.reservation_search.book_from\" format=\"YYYY-MM-DD hh:mm:ss A\">\n" +
    "                        <span class=\"input-group-addon\">\n" +
    "                            <i class=\"octicon octicon-calendar\"></i>\n" +
    "                        </span>\n" +
    "                        <input class=\"form-control\" placeholder=\"Select a date\" ng-model='vm.reservation_search.book_from'\n" +
    "                            ng-model-options=\"{ updateOn: 'blur' }\">\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "\n" +
    "                <li class=\"nav-field col-sm-2\">\n" +
    "                    <div class=\"input-group\" moment-picker=\"vm.reservation_search.book_to\" format=\"YYYY-MM-DD hh:mm:ss A\">\n" +
    "                        <span class=\"input-group-addon\">\n" +
    "                            <i class=\"octicon octicon-calendar\"></i>\n" +
    "                        </span>\n" +
    "                        <input class=\"form-control\" placeholder=\"Select a date\" ng-change='vm.Search()' ng-model='vm.reservation_search.book_to'\n" +
    "                            ng-model-options=\"{ updateOn: 'blur' }\">\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-2\">\n" +
    "                    <select class=\"form-control\" ng-model=\"vm.reservation_search.status\" ng-change='vm.Search()'>\n" +
    "                        <option hidden>Select reservation status</option>\n" +
    "                        <option ng-repeat=\"item in vm.reservation_status_type\" value='{{item.key}}'>{{item.value}}</option>\n" +
    "                    </select>\n" +
    "                </li>\n" +
    "\n" +
    "                <li class=\"nav-field\">\n" +
    "                    <button class='\n" +
    "                        btn btn-md btn-success' ng-click=\"vm.Search()\">Search</button>\n" +
    "                    <button class='\n" +
    "                        btn btn-md btn-danger' ng-click=\"vm.Reset()\">Reset</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field\">\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <br />\n" +
    "            <ul class='info-header'>\n" +
    "                <li class=\"nav-field col-xs-2\">\n" +
    "                    <button class='btn btn-primary'\n" +
    "                    ng-disabled=\"!vm.reservation_list.previous\" \n" +
    "                    ng-click='vm.API_SERVICE_CALL(\"reservations\", \"get\",vm.reservation_list.previous)'>Previous</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-xs-2\">\n" +
    "                    &nbsp;\n" +
    "                    <button class='btn btn-primary' ng-disabled=\"!vm.reservation_list.next\" \n" +
    "                    ng-click='vm.API_SERVICE_CALL(\"reservations\", \"get\",vm.reservation_list.next)'>Next</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-4\">\n" +
    "                    <p class=\"text-center\">\n" +
    "                        Current record:-{{vm.reservation_list.results.length}}\n" +
    "                    </p>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-6\">\n" +
    "                    <p class=\"text-right\">\n" +
    "                        Total record found:-{{vm.reservation_list.count}}\n" +
    "                    </p>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <br />\n" +
    "            <table class=\"table table-striped\">\n" +
    "                <tr>\n" +
    "                    <th></th>\n" +
    "                    <th>Venue Name</th>\n" +
    "                    <th>From</th>\n" +
    "                    <th>To</th>\n" +
    "                    <th>Contact no</th>\n" +
    "                    <th>Status</th>\n" +
    "                    <th>Payment Status</th>\n" +
    "                    <th class=\"text-center\">Action</th>\n" +
    "                </tr>\n" +
    "                <tr ng-repeat='reservation in vm.reservation_list.results'>\n" +
    "                    <td></td>\n" +
    "                    <td>{{reservation.venue.name}}</td>\n" +
    "                    <td>{{reservation.book_from | date:'yyyy-MM-dd HH:mm a'}}</td>\n" +
    "                    <td>{{reservation.book_to | date:'yyyy-MM-dd HH:mm a'}}</td>\n" +
    "                    <td>{{reservation.phone_number}}</td>\n" +
    "                    <td>\n" +
    "                        {{reservation.status}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{reservation.payment_status}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <button class=\"btn btn-success\" data-title=\"reservation_update\" data-toggle=\"modal\" data-target=\"#reservation_update\"\n" +
    "                            ng-click=\"vm.ReservationDetail(reservation.id)\">Update</button>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"reservation_update\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"reservation_update\"\n" +
    "    aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog modal-md\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                Update Reservation\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <br />\n" +
    "                        <select class=\"form-control\" ng-model='vm.reservation_detail.status'>\n" +
    "                            <option hidden>Update parking status</option>\n" +
    "                            <option ng-repeat=\"item in vm.reservation_status_type\" value=\"{{item.key}}\">{{item.value}}</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class='col-md-12 text-center'>\n" +
    "                        <br />\n" +
    "                        <button class=\"btn btn-success\" ng-click='vm.API_SERVICE_CALL(\"reservations\", \"update\")'>Update\n" +
    "                            Reservation</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- /.modal-content -->\n" +
    "    </div>\n" +
    "    <!-- /.modal-dialog -->"
  );


  $templateCache.put('app/venue/venue.html',
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <ul class='nav-header'>\n" +
    "                <li class=\"nav-field\"><a class=\"active\" ng-href='venue'>Parking List</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"company\">My Venue</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"reservations\">Reservations</a></li>\n" +
    "                <li ng-hide='vm.company_id==0' class=\"nav-field\"><a ng-href=\"prices\">Prices</a></li>\n" +
    "                <li ng-hide='vm.reservation_count==0' class=\"nav-field\"><a ng-href=\"my-reservation\">My Reservations</a></li>\n" +
    "                <li class=\"nav-field\" style=\"float:right\"><a class=\"active btn btn-md btn-danger\" style='color: white'\n" +
    "                        ng-click=\"vm.SignOut()\">Sign\n" +
    "                        Out</a></li>\n" +
    "                <li class=\"nav-field\" style=\"float:right; padding-right: 10px\"><a class=\"btn btn-md btn-success\"\n" +
    "                        ng-show='vm.company_id==0' style='color: white' data-toggle=\"modal\" data-target=\"#company\">Create\n" +
    "                        Company</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <br />\n" +
    "            <ul class='search-header'>\n" +
    "                <li class=\"nav-field col-sm-4\">\n" +
    "                    <form class=\"form-group\" ng-submit=\"vm.Search()\">\n" +
    "                        <input type='text' class='form-control' ng-model=\"vm.venue_search.search\" placeholder=\"Parking no. floor no., building name etc\" />\n" +
    "                    </form>\n" +
    "\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-4\">\n" +
    "                    <div class=\"input-group\" moment-picker=\"vm.venue_search.available\" format=\"YYYY-MM-DD hh:mm:ss A\"\n" +
    "                        change='vm.VenueList()'>\n" +
    "                        <span class=\"input-group-addon\">\n" +
    "                            <i class=\"octicon octicon-calendar\"></i>\n" +
    "                        </span>\n" +
    "                        <input class=\"form-control\" placeholder=\"Select a date\" ng-model='vm.venue_search.available'\n" +
    "                            ng-model-options=\"{ updateOn: 'blur' }\">\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field\">\n" +
    "                    <button class='btn btn-md btn-danger' ng-click=\"vm.Reset()\">Reset</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field\">\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <br />\n" +
    "            <ul class='info-header'>\n" +
    "                <li class=\"nav-field col-xs-2\">\n" +
    "                    <button class='btn btn-primary' ng-disabled=\"!vm.venue_list.previous\" \n" +
    "                    ng-click='vm.API_SERVICE_CALL(\"venue\", \"get\", vm.venue_list.previous)'>Previous</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-xs-2\">\n" +
    "                    &nbsp;\n" +
    "                    <button class='btn btn-primary' ng-disabled=\"!vm.venue_list.next\" \n" +
    "                    ng-click='vm.API_SERVICE_CALL(\"venue\", \"get\", vm.venue_list.next)'>Next</button>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-4\">\n" +
    "                    <p class=\"text-center\">\n" +
    "                        Current record:-{{vm.venue_list.results.length}}\n" +
    "                    </p>\n" +
    "                </li>\n" +
    "                <li class=\"nav-field col-sm-4\">\n" +
    "                    <p class=\"text-center\">\n" +
    "                        Total record found:-{{vm.venue_list.count}}\n" +
    "                    </p>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <div class=\"row\">\n" +
    "            <div ng-repeat=\"task in vm.venue_list.results\" class='col-xs-1 parking-available'>\n" +
    "                <h5 class='text-left' ng-show='task.company_name'>{{task.company_name}}</h5>\n" +
    "                <h5 class='text-left'>{{task.name}}</h5>\n" +
    "                <button class=\"btn btn-primary\" data-title=\"Booking\" data-toggle=\"modal\" data-target=\"#booking\"\n" +
    "                    ng-click=\"vm.VenueDetail(task.id)\">\n" +
    "                    Booking\n" +
    "                </button>\n" +
    "                <br/>\n" +
    "                <p>Type: {{task.venue_type}}</p>                \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"booking\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"booking\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <p>{{vm.venue_detail.name}}</p>\n" +
    "                <p>Location: {{vm.venue_detail.location}} </p>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <div class=\"row\" ng-show='vm.venue_detail.price'>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <label class=\"form-control\" style=\"border:none !important\">\n" +
    "                            Parking price : {{vm.venue_detail.price.amount}}\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <label class=\"form-control\" style=\"border:none !important\">\n" +
    "                            For {{vm.venue_detail.price.duration}} {{vm.venue_detail.price.duration_unit}}\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <br />\n" +
    "                </div>\n" +
    "                <div class=\"row\" ng-show='vm.venue_detail.price'>\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <p class=\"danger\">\n" +
    "                            Overdue charges {{vm.venue_detail.price.overdue_amount}} /\n" +
    "                            {{vm.venue_detail.price.duration_unit}}\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <br />\n" +
    "                </div>\n" +
    "\n" +
    "                <div class='row'>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <input class=\"form-control\" type=\"text\" ng-model=\"vm.reservation_detail.license\" placeholder=\"Vehicle license no.\" />\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.license}}</small>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <input class='form-control' type='text' ng-model='vm.reservation_detail.phone_number'\n" +
    "                            placeholder=\"Contact no.\" />\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.phone_number}}</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <br />\n" +
    "                </div>\n" +
    "\n" +
    "                <div class='row'>\n" +
    "                    <div class=\"input-group col-md-6\" moment-picker=\"vm.reservation_detail.book_from\" format=\"YYYY-MM-DD hh:mm:ss A\">\n" +
    "                        <span class=\"input-group-addon\">\n" +
    "                            <i class=\"octicon octicon-clock\"></i>\n" +
    "                        </span>\n" +
    "                        <input class=\"form-control\" required placeholder=\"Start time\" ng-model=\"vm.reservation_detail.book_from\"\n" +
    "                            ng-model-options=\"{ updateOn: 'blur' }\" />\n" +
    "\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.book_from}}</small>\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                    <div class=\"input-group col-md-6\" moment-picker=\"vm.reservation_detail.book_to\" format=\"YYYY-MM-DD hh:mm:ss A\">\n" +
    "                        <span class=\"input-group-addon\">\n" +
    "                            <i class=\"octicon octicon-clock\"></i>\n" +
    "                        </span>\n" +
    "                        <input class=\"form-control\" required placeholder=\"End time\" ng-model=\"vm.reservation_detail.book_to\"\n" +
    "                            ng-model-options=\"{ updateOn: 'blur' }\" />\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.book_from}}</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <br />\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <input class='form-control' \n" +
    "                        type='number' \n" +
    "                        ng-model='vm.reservation_detail.payments[0].amount' \n" +
    "                        placeholder=\"Pre paid amount\"/>\n" +
    "                    </div>\n" +
    "                    <div class='col-md-6'>\n" +
    "                        <select class=\"form-control\" ng-model='vm.reservation_detail.payments[0].payment_type'>\n" +
    "                                <option value=\"\" selected disabled hidden required>Select payment type</option>\n" +
    "                            <option ng-repeat=\"item in vm.payment_type\" value=\"{{item.key}}\">{{item.value}}</option>\n" +
    "                        </select>\n" +
    "                        <small ng-if=\"vm.field_error\" class=\"form-text text-muted\">{{vm.key_error.payment_type}}</small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class='col-md-12 text-center'>\n" +
    "                        <br />\n" +
    "                        <button class=\"btn btn-success\" ng-disabled='\n" +
    "                        !vm.reservation_detail.book_from && !vm.reservation_detail.book_to && !vm.reservation_detail.phone_number && !vm.reservation_detail.license'\n" +
    "                            ng-click='vm.API_SERVICE_CALL(\"reservations\", \"post\")'>Booked</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- /.modal-content -->\n" +
    "    </div>\n" +
    "    <!-- /.modal-dialog -->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"company\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"company\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog modal-md\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                Create Company\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <input class='form-control' type='text' ng-model='vm.company_detail.name' placeholder=\"Company name\" />\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class='col-md-12 text-center'>\n" +
    "                        <br />\n" +
    "                        <button class=\"btn btn-success\" ng-click='vm.CreateCompany()'>Create Company</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- /.modal-content -->\n" +
    "    </div>\n" +
    "    <!-- /.modal-dialog -->"
  );

}]);
