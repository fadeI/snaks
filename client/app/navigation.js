"use strict";
var page1_component_1 = require("./page1.component");
var page2_component_1 = require("./page2.component");
exports.routes = [
    {
        path: 'page1',
        component: page1_component_1.Page1Component
    },
    {
        path: 'page2/:id',
        component: page2_component_1.Page2Component
    },
    { path: '',
        component: page1_component_1.Page1Component
    }
];
exports.APP_ROUTER_PROVIDERS = [
    provideRouter(exports.routes)
];
//# sourceMappingURL=navigation.js.map