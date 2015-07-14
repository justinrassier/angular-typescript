var HomeCtrl = (function () {
    function HomeCtrl(myService) {
        this.message = "start";
        this.myService = myService;
    }
    HomeCtrl.prototype.updateMessage = function () {
        this.message = "Congrats, you clicked me!!!!";
        this.myService.doSomething();
        this.myService.doAnotherThing();
    };
    return HomeCtrl;
})();
exports.default = HomeCtrl;
//# sourceMappingURL=HomeCtrl.js.map