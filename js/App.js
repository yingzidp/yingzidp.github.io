/**
 * Created by apple on 17/3/23.
 */

var App = {};

App.selectNav = function (eleLi) {
    $(eleLi).css('color', '#C4B16F');

    $(eleLi).siblings()
        .css('color', '#C0C0C0');
};
