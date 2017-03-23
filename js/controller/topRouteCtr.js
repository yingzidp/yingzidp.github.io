/**
 * Created by apple on 17/3/23.
 */

define(function () {
    return function () {
        var locator = window.location.hash.replace('#/', '');

        var pageUrl = 'html/' + locator.split('?')[0] + '.html';

        console.log(pageUrl);

        console.log(locator);

        App.selectNav(document.getElementById(locator));

        appView.load(pageUrl);

        $('body').scrollTop(0);
    };
});
