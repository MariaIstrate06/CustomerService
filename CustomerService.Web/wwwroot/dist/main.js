(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _customers_customers_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/customers-grid.component */ "./src/app/customers/customers-grid.component.ts");
/* harmony import */ var _customers_customer_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers/customer-edit.component */ "./src/app/customers/customer-edit.component.ts");
/* harmony import */ var _customers_customer_edit_reactive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers/customer-edit-reactive.component */ "./src/app/customers/customer-edit-reactive.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");









// import { AddOrderComponent } from './add-order/add-order.component';
var routes = [
    { path: 'customers', component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"] },
    //{ path: 'customers/:id', component: CustomerEditComponent},
    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"] },
    { path: 'customers/:id', component: _customers_customer_edit_reactive_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditReactiveComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.components = [_customers_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"], _customers_customers_grid_component__WEBPACK_IMPORTED_MODULE_3__["CustomersGridComponent"], _customers_customer_edit_component__WEBPACK_IMPORTED_MODULE_4__["CustomerEditComponent"], _customers_customer_edit_reactive_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditReactiveComponent"]];
    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-component"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
        } }, encapsulation: 2 });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-component',
                template: "<router-outlet></router-outlet>"
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _customers_customers_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customers/customers-grid.component */ "./src/app/customers/customers-grid.component.ts");
/* harmony import */ var _customers_customer_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customers/customer-edit.component */ "./src/app/customers/customer-edit.component.ts");
/* harmony import */ var _customers_customer_edit_reactive_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customers/customer-edit-reactive.component */ "./src/app/customers/customer-edit-reactive.component.ts");












// import { AddOrderComponent } from './add-order/add-order.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"] //Shared (multi-instance) objects
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _customers_customers_component__WEBPACK_IMPORTED_MODULE_7__["CustomersComponent"], _customers_customers_grid_component__WEBPACK_IMPORTED_MODULE_8__["CustomersGridComponent"], _customers_customer_edit_component__WEBPACK_IMPORTED_MODULE_9__["CustomerEditComponent"], _customers_customer_edit_reactive_component__WEBPACK_IMPORTED_MODULE_10__["CustomerEditReactiveComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"] //Shared (multi-instance) objects
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"] //Shared (multi-instance) objects
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"].components, _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/ensureModuleLoadedOnceGuard */ "./src/app/shared/ensureModuleLoadedOnceGuard.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var CoreModule = /** @class */ (function (_super) {
    __extends(CoreModule, _super);
    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function CoreModule(parentModule) {
        return _super.call(this, parentModule) || this;
    }
    CoreModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CoreModule });
    CoreModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](CoreModule, 12)); }, imports: [[
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ]] });
    return CoreModule;
}(_shared_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_2__["EnsureModuleLoadedOnceGuard"]));

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CoreModule, { imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                ],
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/data-filter.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/data-filter.service.ts ***!
  \*********************************************/
/*! exports provided: DataFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterService", function() { return DataFilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_property_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/property-resolver */ "./src/app/shared/property-resolver.ts");



var DataFilterService = /** @class */ (function () {
    function DataFilterService() {
    }
    DataFilterService.prototype.filter = function (datasource, filterProperties, filterData) {
        if (datasource && filterProperties && filterData) {
            filterData = filterData.toUpperCase();
            var filtered = datasource.filter(function (item) {
                var match = false;
                for (var _i = 0, filterProperties_1 = filterProperties; _i < filterProperties_1.length; _i++) {
                    var prop = filterProperties_1[_i];
                    var propVal = '';
                    //Account for nested properties like 'state.name'
                    if (prop.indexOf('.') > -1) {
                        propVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_1__["propertyResolver"].resolve(prop, item);
                        if (propVal) {
                            propVal = propVal.toString().toUpperCase();
                        }
                    }
                    else {
                        if (item[prop]) {
                            propVal = item[prop].toString().toUpperCase();
                        }
                    }
                    if (propVal.indexOf(filterData) > -1) {
                        match = true;
                        break;
                    }
                }
                ;
                return match;
            });
            return filtered;
        }
        else {
            return datasource;
        }
    };
    DataFilterService.??fac = function DataFilterService_Factory(t) { return new (t || DataFilterService)(); };
    DataFilterService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: DataFilterService, factory: DataFilterService.??fac, providedIn: 'root' });
    return DataFilterService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DataFilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.baseCustomersUrl = this.baseUrl + 'customers';
        this.baseStatesUrl = this.baseUrl + 'states';
        this.baseOrderUrl = this.baseUrl + 'orders';
    }
    DataService.prototype.getCustomers = function () {
        var _this = this;
        return this.http.get(this.baseCustomersUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (customers) {
            _this.calculateCustomersOrderTotal(customers);
            return customers;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.getOrders = function () {
        var _this = this;
        return this.http.get(this.baseOrderUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (orders) {
            _this.calculateOrdersTotal(orders);
            return orders;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.getCustomersPage = function (page, pageSize) {
        var _this = this;
        return this.http.get(this.baseCustomersUrl + "/page/" + page + "/" + pageSize, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            //Need to observe response in order to get to this header (see {observe: 'response'} above)
            var totalRecords = +res.headers.get('x-inlinecount');
            var customers = res.body;
            _this.calculateCustomersOrderTotal(customers);
            return {
                results: customers,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.getOrdersPage = function (page, pageSize) {
        var _this = this;
        return this.http.get(this.baseOrderUrl + "/page/" + page + "/" + pageSize, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            //Need to observe response in order to get to this header (see {observe: 'response'} above)
            var totalRecords = +res.headers.get('x-inlinecount');
            var orders = res.body;
            _this.calculateOrdersTotal(orders);
            return {
                results: orders,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.getCustomer = function (id) {
        return this.http.get(this.baseCustomersUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.getOrder = function (id) {
        return this.http.get(this.baseOrderUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.insertCustomer = function (customer) {
        return this.http.post(this.baseCustomersUrl + "/insert", customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log('insertCustomer status: ' + data.status);
            return data.customer;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.insertOrder = function (order) {
        return this.http.post(this.baseOrderUrl, order)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log('insertOrder status: ' + data.status);
            return data.order;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.updateCustomer = function (customer) {
        return this.http.put(this.baseCustomersUrl + '/' + customer.id, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log('updateCustomer status: ' + data.status);
            return data.customer;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.updateOrder = function (order) {
        return this.http.put(this.baseOrderUrl + '/' + order.product, order)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log('updateOrder status: ' + data.status);
            return data.order;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.deleteCustomer = function (id) {
        return this.http.delete(this.baseCustomersUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.deleteOrder = function (id) {
        return this.http.delete(this.baseOrderUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.getStates = function () {
        return this.http.get(this.baseStatesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.calculateCustomersOrderTotal = function (customers) {
        for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
            var customer = customers_1[_i];
            if (customer && customer.orders) {
                var total = 0;
                for (var _a = 0, _b = customer.orders; _a < _b.length; _a++) {
                    var order = _b[_a];
                    total += (order.price * order.quantity);
                }
                customer.orderTotal = total;
            }
        }
    };
    DataService.prototype.calculateOrdersTotal = function (orders) {
        for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
            var order = orders_1[_i];
            if (order) {
                var total = 0;
                order.orderTotal = total;
            }
        }
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMessage);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error || 'ASP.NET Core server error');
    };
    DataService.??fac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    DataService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: DataService, factory: DataService.??fac, providedIn: 'root' });
    return DataService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/sorter.ts":
/*!********************************!*\
  !*** ./src/app/core/sorter.ts ***!
  \********************************/
/*! exports provided: Sorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sorter", function() { return Sorter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_property_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/property-resolver */ "./src/app/shared/property-resolver.ts");



var Sorter = /** @class */ (function () {
    function Sorter() {
        this.property = null;
        this.direction = 1;
    }
    Sorter.prototype.sort = function (collection, prop) {
        var _this = this;
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;
        collection.sort(function (a, b) {
            var aVal;
            var bVal;
            //Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
                aVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_1__["propertyResolver"].resolve(prop, a);
                bVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_1__["propertyResolver"].resolve(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }
            //Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (_this.isString(aVal))
                aVal = aVal.trim().toUpperCase();
            if (_this.isString(bVal))
                bVal = bVal.trim().toUpperCase();
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return _this.direction * -1;
            }
            else {
                return _this.direction * 1;
            }
        });
    };
    Sorter.prototype.isString = function (val) {
        return (val && (typeof val === 'string' || val instanceof String));
    };
    Sorter.??fac = function Sorter_Factory(t) { return new (t || Sorter)(); };
    Sorter.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: Sorter, factory: Sorter.??fac, providedIn: 'root' });
    return Sorter;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Sorter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/trackby.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/trackby.service.ts ***!
  \*****************************************/
/*! exports provided: TrackByService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackByService", function() { return TrackByService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var TrackByService = /** @class */ (function () {
    function TrackByService() {
    }
    TrackByService.prototype.customer = function (index, customer) {
        return customer.id;
    };
    TrackByService.??fac = function TrackByService_Factory(t) { return new (t || TrackByService)(); };
    TrackByService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: TrackByService, factory: TrackByService.??fac, providedIn: 'root' });
    return TrackByService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TrackByService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/customers/customer-edit-reactive.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/customers/customer-edit-reactive.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomerEditReactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditReactiveComponent", function() { return CustomerEditReactiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _shared_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/validation.service */ "./src/app/shared/validation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function CustomerEditReactiveComponent_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var state_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", state_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](state_r3.name);
} }
function CustomerEditReactiveComponent_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Delete Customer?\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomerEditReactiveComponent_div_55_div_1_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r7.delete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomerEditReactiveComponent_div_55_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r9.deleteMessageEnabled = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerEditReactiveComponent_div_55_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomerEditReactiveComponent_div_55_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r10.deleteMessageEnabled = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerEditReactiveComponent_div_55_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomerEditReactiveComponent_div_55_div_4_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r12.cancel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r6.customerForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.operationText);
} }
function CustomerEditReactiveComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomerEditReactiveComponent_div_55_div_1_Template, 7, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CustomerEditReactiveComponent_div_55_button_2_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CustomerEditReactiveComponent_div_55_div_4_Template, 6, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.customer.id && ctx_r1.deleteMessageEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.customer.id && !ctx_r1.deleteMessageEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r1.deleteMessageEnabled);
} }
function CustomerEditReactiveComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r2.errorMessage);
} }
var CustomerEditReactiveComponent = /** @class */ (function () {
    function CustomerEditReactiveComponent(router, route, dataService, formBuilder) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.customer = {
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            email: '',
            city: '',
            stateId: 0,
            zip: 0
        };
        this.operationText = 'Insert';
    }
    CustomerEditReactiveComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id !== '0') {
            this.operationText = 'Update';
            this.getCustomer(id);
        }
        this.getStates();
        this.buildForm();
    };
    CustomerEditReactiveComponent.prototype.getCustomer = function (id) {
        var _this = this;
        this.dataService.getCustomer(id)
            .subscribe(function (customer) {
            _this.customer = customer;
            _this.buildForm();
        }, function (err) { return console.log(err); });
    };
    CustomerEditReactiveComponent.prototype.buildForm = function () {
        this.customerForm = this.formBuilder.group({
            firstName: [this.customer.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [this.customer.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: [this.customer.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [this.customer.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].emailValidator]],
            address: [this.customer.address, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: [this.customer.city, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            stateId: [this.customer.stateId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CustomerEditReactiveComponent.prototype.getStates = function () {
        var _this = this;
        this.dataService.getStates().subscribe(function (states) { return _this.states = states; });
    };
    CustomerEditReactiveComponent.prototype.submit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        value.id = this.customer.id;
        value.zip = this.customer.zip || 0;
        // var customer: ICustomer = {
        //   id: this.customer.id,
        // };
        if (value.id) {
            this.dataService.updateCustomer(value)
                .subscribe(function (customer) {
                if (customer) {
                    _this.router.navigate(['/customers']);
                }
                else {
                    _this.errorMessage = 'Unable to save customer';
                }
            }, function (err) { return console.log(err); });
        }
        else {
            this.dataService.insertCustomer(value)
                .subscribe(function (customer) {
                if (customer) {
                    _this.router.navigate(['/customers']);
                }
                else {
                    _this.errorMessage = 'Unable to add customer';
                }
            }, function (err) { return console.log(err); });
        }
    };
    CustomerEditReactiveComponent.prototype.cancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/customers']);
    };
    CustomerEditReactiveComponent.prototype.delete = function (event) {
        var _this = this;
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer.id)
            .subscribe(function (status) {
            if (status) {
                _this.router.navigate(['/customers']);
            }
            else {
                _this.errorMessage = 'Unable to delete customer';
            }
        }, function (err) { return console.log(err); });
    };
    CustomerEditReactiveComponent.??fac = function CustomerEditReactiveComponent_Factory(t) { return new (t || CustomerEditReactiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
    CustomerEditReactiveComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CustomerEditReactiveComponent, selectors: [["customer-edit-reactive"]], decls: 59, vars: 11, consts: [[1, "glyphicon", "glyphicon-user"], ["novalidate", "", 1, "editForm", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "firstName", 1, "form-control"], [1, "alert", "alert-danger", 3, "hidden"], ["type", "text", "formControlName", "lastName", 1, "form-control"], [1, "radio"], ["type", "radio", "name", "gender", "formControlName", "gender", "value", "Male"], ["type", "radio", "name", "gender", "formControlName", "gender", "value", "Female"], ["type", "email", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "address", 1, "form-control"], ["type", "text", "formControlName", "city", 1, "form-control"], ["formControlName", "stateId", 1, "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngValue"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], [1, "alert", "alert-warning"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-default", 3, "click"], [1, "pull-right"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "alert", "alert-danger"]], template: function CustomerEditReactiveComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function CustomerEditReactiveComponent_Template_form_ngSubmit_6_listener() { return ctx.submit(ctx.customerForm); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "First Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "First Name is required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Last Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Last Name is required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Gender");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Male ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Female ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Email is required and must be valid");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Address is required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "City");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "City is required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "State");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](53, CustomerEditReactiveComponent_option_53_Template, 2, 2, "option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, CustomerEditReactiveComponent_div_55_Template, 5, 3, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, CustomerEditReactiveComponent_div_58_Template, 2, 1, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx.customer.firstName, " ", ctx.customer.lastName, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.customerForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.customerForm.controls.firstName.untouched || ctx.customerForm.controls.firstName.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.customerForm.controls.lastName.untouched || ctx.customerForm.controls.lastName.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.customerForm.controls.email.untouched || ctx.customerForm.controls.email.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.customerForm.controls.address.untouched || ctx.customerForm.controls.address.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.customerForm.controls.city.untouched || ctx.customerForm.controls.city.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.states);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.customer);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.errorMessage != null);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_x"]], encapsulation: 2 });
    return CustomerEditReactiveComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomerEditReactiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'customer-edit-reactive',
                templateUrl: './customer-edit-reactive.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/customers/customer-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/customers/customer-edit.component.ts ***!
  \******************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function CustomerEditComponent_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var state_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", state_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](state_r11.name);
} }
function CustomerEditComponent_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Delete Customer?\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomerEditComponent_div_63_div_1_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r15.delete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomerEditComponent_div_63_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r17.deleteMessageEnabled = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerEditComponent_div_63_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomerEditComponent_div_63_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r18.deleteMessageEnabled = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerEditComponent_div_63_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomerEditComponent_div_63_div_4_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r20.cancel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r0.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r14.operationText);
} }
function CustomerEditComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomerEditComponent_div_63_div_1_Template, 7, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CustomerEditComponent_div_63_button_2_Template, 2, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CustomerEditComponent_div_63_div_4_Template, 6, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.customer.id && ctx_r9.deleteMessageEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.customer.id && !ctx_r9.deleteMessageEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r9.deleteMessageEnabled);
} }
function CustomerEditComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r10.errorMessage);
} }
var CustomerEditComponent = /** @class */ (function () {
    function CustomerEditComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.customer = {
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            email: '',
            city: '',
            zip: 0
        };
        this.operationText = 'Insert';
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id !== '0') {
            this.operationText = 'Update';
            this.getCustomer(id);
        }
        this.getStates();
    };
    CustomerEditComponent.prototype.getCustomer = function (id) {
        var _this = this;
        this.dataService.getCustomer(id)
            .subscribe(function (customer) {
            _this.customer = customer;
        }, function (err) { return console.log(err); });
    };
    CustomerEditComponent.prototype.getStates = function () {
        var _this = this;
        this.dataService.getStates().subscribe(function (states) { return _this.states = states; });
    };
    CustomerEditComponent.prototype.submit = function () {
        var _this = this;
        if (this.customer.id) {
            this.dataService.updateCustomer(this.customer)
                .subscribe(function (customer) {
                if (customer) {
                    _this.router.navigate(['/customers']);
                }
                else {
                    _this.errorMessage = 'Unable to save customer';
                }
            }, function (err) { return console.log(err); });
        }
        else {
            this.dataService.insertCustomer(this.customer)
                .subscribe(function (customer) {
                if (customer) {
                    _this.router.navigate(['/customers']);
                }
                else {
                    _this.errorMessage = 'Unable to add customer';
                }
            }, function (err) { return console.log(err); });
        }
    };
    CustomerEditComponent.prototype.cancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/']);
    };
    CustomerEditComponent.prototype.delete = function (event) {
        var _this = this;
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer.id)
            .subscribe(function (status) {
            if (status) {
                _this.router.navigate(['/customers']);
            }
            else {
                _this.errorMessage = 'Unable to delete customer';
            }
        }, function (err) { return console.log(err); });
    };
    CustomerEditComponent.??fac = function CustomerEditComponent_Factory(t) { return new (t || CustomerEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
    CustomerEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CustomerEditComponent, selectors: [["customer-edit"]], decls: 67, vars: 18, consts: [[1, "glyphicon", "glyphicon-user"], ["novalidate", "", 1, "editForm", 3, "ngSubmit"], ["customerForm", "ngForm"], [1, "form-group"], ["type", "text", "name", "firstName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["type", "text", "name", "lastName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], [1, "radio"], ["type", "radio", "name", "gender", "value", "Male", "required", "", 3, "ngModel", "ngModelChange"], ["gender", "ngModel"], ["type", "radio", "name", "gender", "value", "Female", "required", "", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "required", "", "pattern", "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "text", "name", "address", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["address", "ngModel"], ["type", "text", "name", "city", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], ["name", "state", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngValue"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], [1, "alert", "alert-warning"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-default", 3, "click"], [1, "pull-right"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "alert", "alert-danger"]], template: function CustomerEditComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function CustomerEditComponent_Template_form_ngSubmit_6_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "First Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_11_listener($event) { return ctx.customer.firstName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "First Name is required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Last Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_18_listener($event) { return ctx.customer.lastName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Last Name is required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Gender");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "input", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_28_listener($event) { return ctx.customer.gender = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Male ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "input", 12, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_33_listener($event) { return ctx.customer.gender = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Female ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "input", 13, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_39_listener($event) { return ctx.customer.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Email is required and must be valid");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "input", 15, 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_46_listener($event) { return ctx.customer.address = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Address is required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "City");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "input", 17, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomerEditComponent_Template_input_ngModelChange_53_listener($event) { return ctx.customer.city = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "City is required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "State");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "select", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CustomerEditComponent_Template_select_ngModelChange_60_listener($event) { return ctx.customer.stateId = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](61, CustomerEditComponent_option_61_Template, 2, 2, "option", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](63, CustomerEditComponent_div_63_Template, 5, 3, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](66, CustomerEditComponent_div_66_Template, 2, 1, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12);
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](19);
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](40);
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](47);
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx.customer.firstName, " ", ctx.customer.lastName, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.customer.firstName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", _r1.untouched || _r1.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.customer.lastName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", _r2.untouched || _r2.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.customer.gender);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.customer.gender);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.customer.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", _r5.untouched || _r5.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.customer.address);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", _r6.untouched || _r6.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.customer.city);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", _r7.untouched || _r7.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.customer.stateId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.states);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.customer);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.errorMessage != null);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_x"]], encapsulation: 2 });
    return CustomerEditComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomerEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'customer-edit',
                templateUrl: './customer-edit.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/customers/customers-grid.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-grid.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomersGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersGridComponent", function() { return CustomersGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_sorter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sorter */ "./src/app/core/sorter.ts");
/* harmony import */ var _core_trackby_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/trackby.service */ "./src/app/core/trackby.service.ts");






var _c0 = function (a1) { return ["/customers", a1]; };
function CustomersGridComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "capitalize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "trim");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var customer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "assets/images/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 8, customer_r2.gender), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](20, _c0, customer_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 10, customer_r2.firstName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 12, customer_r2.lastName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](15, 14, customer_r2.city));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r2.state.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](20, 16, customer_r2.orderTotal, "USD", "symbol"));
} }
function CustomersGridComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "No Records Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
var CustomersGridComponent = /** @class */ (function () {
    function CustomersGridComponent(sorter, trackby) {
        this.sorter = sorter;
        this.trackby = trackby;
        this.customers = [];
    }
    CustomersGridComponent.prototype.ngOnInit = function () {
    };
    CustomersGridComponent.prototype.sort = function (prop) {
        this.sorter.sort(this.customers, prop);
    };
    CustomersGridComponent.??fac = function CustomersGridComponent_Factory(t) { return new (t || CustomersGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_sorter__WEBPACK_IMPORTED_MODULE_1__["Sorter"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_trackby_service__WEBPACK_IMPORTED_MODULE_2__["TrackByService"])); };
    CustomersGridComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CustomersGridComponent, selectors: [["customers-grid"]], inputs: { customers: "customers" }, decls: 24, vars: 3, consts: [[1, "container"], [1, "row", "grid-container"], [1, "col-md-10"], [1, "table"], [1, "table", "table-striped", "table-hover"], [3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["alt", "Customer Image", 1, "card-image", 3, "src"], [3, "routerLink"], ["colspan", "6"]], template: function CustomersGridComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "table", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersGridComponent_Template_th_click_9_listener() { return ctx.sort("firstName"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "First Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersGridComponent_Template_th_click_11_listener() { return ctx.sort("lastName"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Last Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersGridComponent_Template_th_click_13_listener() { return ctx.sort("address"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersGridComponent_Template_th_click_15_listener() { return ctx.sort("city"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "City");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersGridComponent_Template_th_click_17_listener() { return ctx.sort("state.name"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "State");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomersGridComponent_Template_th_click_19_listener() { return ctx.sort("orderTotal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Order Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, CustomersGridComponent_tr_22_Template, 21, 22, "tr", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, CustomersGridComponent_tr_23_Template, 5, 0, "tr", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.customers)("ngForTrackBy", ctx.trackby.customer);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.customers.length);
        } }, encapsulation: 2, changeDetection: 0 });
    return CustomersGridComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomersGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'customers-grid',
                templateUrl: './customers-grid.component.html',
                //When using OnPush detectors, then the framework will check an OnPush 
                //component when any of its input properties changes, when it fires 
                //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _core_sorter__WEBPACK_IMPORTED_MODULE_1__["Sorter"] }, { type: _core_trackby_service__WEBPACK_IMPORTED_MODULE_2__["TrackByService"] }]; }, { customers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_data_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data-filter.service */ "./src/app/core/data-filter.service.ts");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _shared_filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/filter-textbox/filter-textbox.component */ "./src/app/shared/filter-textbox/filter-textbox.component.ts");
/* harmony import */ var _customers_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers-grid.component */ "./src/app/customers/customers-grid.component.ts");
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");











var _c0 = function () { return ["/customers", "0"]; };
var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(router, dataService, dataFilter) {
        this.router = router;
        this.dataService = dataService;
        this.dataFilter = dataFilter;
        this.customers = [];
        this.filteredCustomers = [];
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.title = 'Customers';
        this.getCustomersPage(1);
    };
    CustomersComponent.prototype.filterChanged = function (filterText) {
        if (filterText && this.customers) {
            var props = ['firstName', 'lastName', 'address', 'city', 'state.name', 'orderTotal'];
            this.filteredCustomers = this.dataFilter.filter(this.customers, props, filterText);
        }
        else {
            this.filteredCustomers = this.customers;
        }
    };
    CustomersComponent.prototype.pageChanged = function (page) {
        this.getCustomersPage(page);
    };
    CustomersComponent.prototype.getCustomersPage = function (page) {
        var _this = this;
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.customers = _this.filteredCustomers = response.results;
            _this.totalRecords = response.totalRecords;
        }, function (err) { return console.log(err); }, function () { return console.log('getCustomersPage() retrieved customers'); });
    };
    CustomersComponent.??fac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_data_filter_service__WEBPACK_IMPORTED_MODULE_2__["DataFilterService"])); };
    CustomersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CustomersComponent, selectors: [["customers"]], decls: 16, vars: 6, consts: [[1, "customers", "view", "indent"], [1, "container"], [1, "glyphicon", "glyphicon-user"], [1, "row"], [1, "col-md-8"], [1, "navbar"], [3, "changed"], [1, "col-md-4"], [1, "btn", "btn-default", 3, "routerLink"], [3, "customers"], [3, "totalItems", "pageSize", "pageChanged"]], template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "filter-textbox", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("changed", function CustomersComponent_Template_filter_textbox_changed_10_listener($event) { return ctx.filterChanged($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Add New Customer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "customers-grid", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "pagination", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChanged", function CustomersComponent_Template_pagination_pageChanged_15_listener($event) { return ctx.pageChanged($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("customers", ctx.filteredCustomers);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("totalItems", ctx.totalRecords)("pageSize", ctx.pageSize);
        } }, directives: [_shared_filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_4__["FilterTextboxComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _customers_grid_component__WEBPACK_IMPORTED_MODULE_5__["CustomersGridComponent"], _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"]], encapsulation: 2 });
    return CustomersComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'customers',
                templateUrl: './customers.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _core_data_filter_service__WEBPACK_IMPORTED_MODULE_2__["DataFilterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_data_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data-filter.service */ "./src/app/core/data-filter.service.ts");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _shared_filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/filter-textbox/filter-textbox.component */ "./src/app/shared/filter-textbox/filter-textbox.component.ts");
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");










var _c0 = function () { return ["/add-order"]; };
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(router, dataService, dataFilter) {
        this.router = router;
        this.dataService = dataService;
        this.dataFilter = dataFilter;
        this.orders = [];
        this.filteredOrders = [];
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.getOrderPage(1);
    };
    OrdersComponent.prototype.filterChanged = function (filterText) {
        if (filterText && this.orders) {
            var props = ['Product', 'Quantity', 'Price'];
            this.filteredOrders = this.dataFilter.filter(this.orders, props, filterText);
        }
        else {
            this.filteredOrders = this.orders;
        }
    };
    OrdersComponent.prototype.pageChanged = function (page) {
        this.getOrderPage(page);
    };
    OrdersComponent.prototype.getOrderPage = function (page) {
        var _this = this;
        this.dataService.getOrdersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.orders = _this.filteredOrders = response.results;
            _this.totalRecords = response.totalRecords;
        }, function (err) { return console.log(err); }, function () { return console.log('getCustomersPage() retrieved customers'); });
    };
    OrdersComponent.??fac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_core_data_filter_service__WEBPACK_IMPORTED_MODULE_2__["DataFilterService"])); };
    OrdersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OrdersComponent, selectors: [["cm-orders"]], decls: 15, vars: 4, consts: [[1, "customers", "view", "indent"], [1, "container"], [1, "glyphicon", "glyphicon-user"], [1, "row"], [1, "col-md-8"], [1, "navbar"], [3, "changed"], [1, "col-md-4"], [1, "btn", "btn-default", 3, "routerLink"], [3, "totalItems", "pageSize", "pageChanged"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Orders ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "filter-textbox", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("changed", function OrdersComponent_Template_filter_textbox_changed_10_listener($event) { return ctx.filterChanged($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Add New Order");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "pagination", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChanged", function OrdersComponent_Template_pagination_pageChanged_14_listener($event) { return ctx.pageChanged($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("totalItems", ctx.totalRecords)("pageSize", ctx.pageSize);
        } }, directives: [_shared_filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_4__["FilterTextboxComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"] });
    return OrdersComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cm-orders',
                templateUrl: './orders.component.html',
                styleUrls: ['./orders.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _core_data_filter_service__WEBPACK_IMPORTED_MODULE_2__["DataFilterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/ensureModuleLoadedOnceGuard.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/ensureModuleLoadedOnceGuard.ts ***!
  \*******************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
var EnsureModuleLoadedOnceGuard = /** @class */ (function () {
    function EnsureModuleLoadedOnceGuard(targetModule) {
        if (targetModule) {
            throw new Error(targetModule.constructor.name + " has already been loaded. Import this module in the AppModule only.");
        }
    }
    return EnsureModuleLoadedOnceGuard;
}());



/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.component.ts ***!
  \*******************************************************************/
/*! exports provided: FilterTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxComponent", function() { return FilterTextboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



var FilterTextboxComponent = /** @class */ (function () {
    function FilterTextboxComponent() {
        this.model = { filter: null };
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FilterTextboxComponent.prototype.filterChanged = function (event) {
        event.preventDefault();
        this.changed.emit(this.model.filter); //Raise changed event
    };
    FilterTextboxComponent.??fac = function FilterTextboxComponent_Factory(t) { return new (t || FilterTextboxComponent)(); };
    FilterTextboxComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FilterTextboxComponent, selectors: [["filter-textbox"]], outputs: { changed: "changed" }, decls: 3, vars: 1, consts: [["type", "text", "name", "filter", 3, "ngModel", "ngModelChange", "keyup"]], template: function FilterTextboxComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Filter: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "input", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function FilterTextboxComponent_Template_input_ngModelChange_2_listener($event) { return ctx.model.filter = $event; })("keyup", function FilterTextboxComponent_Template_input_keyup_2_listener($event) { return ctx.filterChanged($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.filter);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], encapsulation: 2 });
    return FilterTextboxComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FilterTextboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'filter-textbox',
                template: "\n    <form>\n         Filter:\n         <input type=\"text\" name=\"filter\"\n                [(ngModel)]=\"model.filter\" \n                (keyup)=\"filterChanged($event)\"  />\n    </form>\n  "
            }]
    }], null, { changed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function PaginationComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaginationComponent_li_6_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); var page_r1 = ctx.$implicit; var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.changePage(page_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var page_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("active", ctx_r0.currentPage === page_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](page_r1);
} }
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pages = [];
        this.currentPage = 1;
        this.isVisible = false;
        this.previousEnabled = false;
        this.nextEnabled = true;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(PaginationComponent.prototype, "pageSize", {
        get: function () {
            return this.pagerPageSize;
        },
        set: function (size) {
            this.pagerPageSize = size;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        get: function () {
            return this.pagerTotalItems;
        },
        set: function (itemCount) {
            this.pagerTotalItems = itemCount;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.update = function () {
        if (this.pagerTotalItems && this.pagerPageSize) {
            this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
            this.isVisible = true;
            if (this.totalItems >= this.pageSize) {
                for (var i = 1; i < this.totalPages + 1; i++) {
                    this.pages.push(i);
                }
            }
            return;
        }
        this.isVisible = false;
    };
    PaginationComponent.prototype.previousNext = function (direction, event) {
        var page = this.currentPage;
        if (direction == -1) {
            if (page > 1)
                page--;
        }
        else {
            if (page < this.totalPages)
                page++;
        }
        this.changePage(page, event);
    };
    PaginationComponent.prototype.changePage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page)
            return;
        this.currentPage = page;
        this.previousEnabled = this.currentPage > 1;
        this.nextEnabled = this.currentPage < this.totalPages;
        this.pageChanged.emit(page);
    };
    PaginationComponent.??fac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
    PaginationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PaginationComponent, selectors: [["pagination"]], inputs: { pageSize: "pageSize", totalItems: "totalItems" }, outputs: { pageChanged: "pageChanged" }, decls: 11, vars: 6, consts: [[3, "hidden"], [1, "pagination"], [3, "click"], ["aria-label", "Previous"], ["aria-hidden", "true"], [3, "active", "click", 4, "ngFor", "ngForOf"], ["aria-label", "Next"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaginationComponent_Template_li_click_2_listener($event) { return ctx.previousNext(0 - 1, $event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00AB");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, PaginationComponent_li_6_Template, 3, 3, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PaginationComponent_Template_li_click_7_listener($event) { return ctx.previousNext(1, $event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\u00BB");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.isVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("disabled", !ctx.previousEnabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.pages);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("disabled", !ctx.nextEnabled);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:focus, .pagination[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:hover {\r\n  background-color: #027FF4;\r\n  border-color: #027FF4;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbj4uYWN0aXZlPmEsIC5wYWdpbmF0aW9uPi5hY3RpdmU+YTpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmhvdmVyLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW4sIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3RkY0O1xyXG4gIGJvcmRlci1jb2xvcjogIzAyN0ZGNDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });
    return PaginationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pagination',
                templateUrl: './pagination.component.html',
                styleUrls: ['./pagination.component.css']
            }]
    }], function () { return []; }, { pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    CapitalizePipe.??fac = function CapitalizePipe_Factory(t) { return new (t || CapitalizePipe)(); };
    CapitalizePipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "capitalize", type: CapitalizePipe, pure: true });
    return CapitalizePipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CapitalizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'capitalize' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/trim.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/trim.pipe.ts ***!
  \*******************************************/
/*! exports provided: TrimPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var TrimPipe = /** @class */ (function () {
    function TrimPipe() {
    }
    TrimPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        return value.trim();
    };
    TrimPipe.??fac = function TrimPipe_Factory(t) { return new (t || TrimPipe)(); };
    TrimPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "trim", type: TrimPipe, pure: true });
    return TrimPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TrimPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'trim' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/property-resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/property-resolver.ts ***!
  \*********************************************/
/*! exports provided: propertyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertyResolver", function() { return propertyResolver; });
var propertyResolver = /** @class */ (function () {
    function propertyResolver() {
    }
    propertyResolver.resolve = function (path, obj) {
        return path.split('.').reduce(function (prev, curr) {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    };
    return propertyResolver;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");
/* harmony import */ var _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/trim.pipe */ "./src/app/shared/pipes/trim.pipe.ts");
/* harmony import */ var _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-textbox/filter-textbox.component */ "./src/app/shared/filter-textbox/filter-textbox.component.ts");








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: SharedModule });
    SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SharedModule, { declarations: [_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_5__["TrimPipe"], _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_6__["FilterTextboxComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_5__["TrimPipe"], _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_6__["FilterTextboxComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
                declarations: [_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_5__["TrimPipe"], _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_6__["FilterTextboxComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_5__["TrimPipe"], _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_6__["FilterTextboxComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/validation.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/validation.service.ts ***!
  \**********************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (code) {
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
        };
        return config[code];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());



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
var environment = {
    production: false,
    apiUrl: '/api/'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\my-project\CustomerService\CustomerService.Web\Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map