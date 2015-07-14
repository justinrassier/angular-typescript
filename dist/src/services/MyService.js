var MyService = (function () {
    function MyService() {
    }
    MyService.prototype.doSomething = function () {
        console.log("service is doing something");
    };
    MyService.prototype.doAnotherThing = function () {
        console.log('service is doing yet another thing');
    };
    return MyService;
})();
exports.default = MyService;
//# sourceMappingURL=MyService.js.map