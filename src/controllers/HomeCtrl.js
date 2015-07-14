var HomeCtrl = (function () {
    function HomeCtrl() {
        console.log('asdf');
        this.message = "start";
    }
    HomeCtrl.prototype.updateMessage = function () {
        this.message = "Congrats, you clicked me!!!!";
    };
    return HomeCtrl;
})();
exports.default = HomeCtrl;
//# sourceMappingURL=HomeCtrl.js.map