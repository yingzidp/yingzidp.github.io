/**
 * Created by apple on 17/3/23.
 */

(function (win) {
    //配置baseUrl
    var baseUrl = './';
    var config = {
        baseUrl: baseUrl,
        waitSeconds:0,
        paths: {
            director: 'js/framework/director.min',
            jquery: 'js/framework/jquery-3.2.0.min',
        },
        shim: {
            user: ['jquery'],
            jquery: {
                exports: '$'
            },
            director: {
                exports: 'Router'
            },
            underscore: {
                exports: '_'
            }
        }
    };

    require.config(config);
    require(['jquery', 'director'], function ($_, Backbone) {

        //$.support.cors = false;

        //全局视图容器元素
        win.appView = $('#homeFooterDiv');
        win.Backbone = Backbone;
        //加载页面js代码

        win.navs = {
            'home': '首页',
            'skill': '技能',
            'introduction': '简介',
            'life': '生活',
        };

        //路由器实例化
        win.router = initRouter();
    });

    function initRouter() {
        // top layer definition
        var routeIdArr = [
            'home',
            'skill',
            'vehicleSearch',
            'introduction',
            'life',
        ];

        var routes = {};
        for (var idx in routeIdArr) {
            routes['/' + routeIdArr[idx]] = 'js/controller/topRouteCtr.js';
        }

        var currentController = null;
        var routeHandler = function (url) {
            return function () {
                var path = url;
                var params = arguments;
                require([path], function (controller) {
                    if (currentController && currentController !== controller) {
                        currentController.onRouteChange && currentController.onRouteChange();
                    }
                    currentController = controller;
                    controller.apply(null, params);
                });
            };
        };
        for (var key in routes) {
            routes[key] = routeHandler(routes[key]);
        }
        var router = Router(routes);

        router.init('/home');
        return router;
    }
})(window);
