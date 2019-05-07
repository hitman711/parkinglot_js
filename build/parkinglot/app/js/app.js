!function(t){"use strict";window.angular.module("parkinglot",["ui.router","ui.router.state.events","ui.bootstrap","toaster","ngAnimate"])}(),window.angular,function(t){"use strict";window.angular.module("parkinglot").config(["$stateProvider","$urlRouterProvider","$httpProvider","$locationProvider","$provide",function(t,n,e,o,a){o.html5Mode({enabled:!0,requireBase:!1}),e.defaults.xsrfCookieName="csrftoken",e.defaults.xsrfHeaderName="X-CSRFToken",n.when("","/"),n.otherwise("/404"),t.state("login",{url:"/",templateUrl:"app/user/login.html",controller:"userCtrl",controllerAs:"vm"}).state("signup",{url:"/signup",templateUrl:"app/user/signup.html",controller:"userCtrl",controllerAs:"vm"}).state("venue",{url:"/venue",templateUrl:"app/venue/venue.html",controller:"venueCtrl",controllerAs:"vm"}).state("404",{url:"/404",templateUrl:"app/404.html"})}])}(),function(t){"use strict";window.angular.module("parkinglot").service("serviceApi",["$http","$q","$state","$window",function(a,t,n,r){var i={};this.getData=function(t,n){var e=r.localStorage.getItem("token");return n&&(i={Authorization:"Token "+e}),a({method:"GET",url:t,headers:i})},this.postData=function(t,n,e){var o=r.localStorage.getItem("token");return e&&(i={Authorization:"Token "+o}),a({method:"POST",url:t,data:n,headers:i})},this.putData=function(t,n,e){var o=r.localStorage.getItem("token");return e&&(i={Authorization:"Token "+o}),a({method:"PUT",url:t,data:n,headers:i})},this.deleteData=function(t,n){var e=r.localStorage.getItem("token");return n&&(i={Authorization:"Token "+e}),a({method:"DELETE",url:t,headers:i})}}])}(),function(t){"use strict";window.angular.module("parkinglot").run(["$state","$rootScope","$window","$location",function(e,t,o,n){var a=["venue"],r=["login","signup"];t.$on("$stateChangeStart",function(t,n){o.localStorage.getItem("token")?-1==a.indexOf(n.name)&&(t.preventDefault(),e.transitionTo("venue")):-1==r.indexOf(n.name)&&(t.preventDefault(),e.transitionTo("login"))})}])}(),function(t){"use strict";window.angular.module("parkinglot").constant("DOMAIN","http://127.0.0.1:8000/v1/").constant("SIGNIN","login").constant("REGISTRATION","register").constant("COMPANY","company").constant("COMPANY_DETAIL","company/{company_id}").constant("ARCHITECTURE","company/{company_id}/venue").constant("VENUE","venue/{venue_id}/venue").constant("RESERVATION","reservation").constant("VENUE_SEARCH","venue").constant("PRICE","company/{company_id}/price").constant("PRICE_DETAIL","company/{company_id}/price/{price_id}").constant("RESERVATION_DETAIL","reservation/{reservation_id}")}(),function(u){"use strict";u.module("parkinglot").controller("userCtrl",["$state","$window","$filter","toaster","DOMAIN","SIGNIN","REGISTRATION","serviceApi",function(n,e,t,o,a,r,i,s){var l=this;l.sign_in={username:"",password:""},l.sign_in_error={username:"",password:""},l.field_error=!1,l.sign_up={first_name:"",last_name:"",password:"",username:"",email:""},l.sign_up_error={first_name:"",last_name:"",password:"",username:"",email:""},l.signIn=function(){l.field_error=!1,s.postData(a+r,l.sign_in,!1).then(function(t){console.info(t.data),e.localStorage.setItem("token",t.data.authentication_code),e.localStorage.setItem("email",t.data.email),e.localStorage.setItem("full_name",""),e.localStorage.setItem("company_count",t.data.company_count),n.transitionTo("venue")},function(t){var n=t.data;"non_field_errors"in n?o.pop("error",n.non_field_errors[0]):u.forEach(n,function(t,n){l.field_error=!0,l.sign_in_error[n]=t[0]})})},l.registration=function(){s.postData(a+i,l.sign_up,!1).then(function(t){n.transitionTo("login")},function(t){var n=t.data;"non_field_errors"in n?o.pop("error",n.non_field_errors[0]):u.forEach(n,function(t,n){l.field_error=!0,l.sign_up_error[n]=t[0]})})}}])}(window.angular),function(_){"use strict";_.module("parkinglot").controller("venueCtrl",["$state","$window","$filter","toaster","DOMAIN","COMPANY","COMPANY_DETAIL","ARCHITECTURE","VENUE","PRICE","PRICE_DETAIL","RESERVATION","VENUE_SEARCH","RESERVATION_DETAIL","serviceApi",function(t,n,e,o,a,r,i,s,l,u,c,d,p,f,m){var g=this;g.venue_list={},g.company_list=[],g.SignOut=function(){n.localStorage.clear(),t.transitionTo("login")},g.CompanyList=function(){m.getData(a+r,{},!0).then(function(t){g.company_list=t.data.results},function(t){var n=t.data;"non_field_errors"in n?o.pop("error",n.non_field_errors[0]):_.forEach(n,function(t,n){g.field_error=!0,g.sign_up_error[n]=t[0]})})},n.localStorage.getItem("company_count")&&g.CompanyList(),g.VenueList=function(){print("hello world"),m.getData(a+p,{},!0).then(function(t){g.venue_list=t.data},function(t){t.data})},g.VenueList(),g.PriceList=function(t){var n=u.replace("{company_id}",t.toString());m.getData(a+n,{},!0).then(function(t){g.price_list=t.data},function(t){t.data})},g.PriceDetail=function(t,n){var e=c.replace("{company_id}",t.toString());e=e.replace("{price_id}",n.toString()),m.getData(a+c,{},!0).then(function(t){g.price_detail=t.data},function(t){t.data})},g.CreateReservation=function(){m.postData(a+d,g.reservation_data,!0).then(function(t){g.reservation_detail=t.data},function(t){t.data})},g.ReservationDetail=function(t){m.getData(a+f,{},!0).then(function(t){g.reservation_detail=t.data},function(t){t.data})}}])}(window.angular);