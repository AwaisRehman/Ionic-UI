"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.OrderPage = void 0;
var core_1 = require("@angular/core");
var order_menu_page_1 = require("../popup/order-menu/order-menu.page");
var OrderPage = /** @class */ (function () {
    function OrderPage(popoverController) {
        this.popoverController = popoverController;
        this.orders = [{
                "date": "Today, 19 June 2022",
                "order": [{
                        "id": "01",
                        "image": "001.jpg",
                        "title": "Hamburger",
                        "amount": "55.40",
                        "transId": "12344321",
                        "time": "20 Min",
                        "status": "CONFIRM"
                    },
                    {
                        "id": "02",
                        "image": "002.jpg",
                        "title": "Deep dish pizza",
                        "amount": "48.50",
                        "transId": "43211234",
                        "time": "45 Min",
                        "status": "CANCELLED"
                    },
                    {
                        "id": "03",
                        "image": "003.jpg",
                        "title": "Bacon wrapped shrimp",
                        "amount": "23.80",
                        "transId": "12122323",
                        "time": "10 Min",
                        "status": "CONFIRM"
                    }
                ]
            },
            {
                "date": "1 July 1982",
                "order": [{
                        "id": "04",
                        "image": "001.jpg",
                        "title": "Hamburger",
                        "amount": "55.40",
                        "transId": "11112222",
                        "time": "20 Min",
                        "status": "CONFIRM"
                    },
                    {
                        "id": "05",
                        "image": "002.jpg",
                        "title": "Deep dish pizza",
                        "amount": "48.50",
                        "transId": "43211234",
                        "time": "45 Min",
                        "status": "CANCELLED"
                    },
                    {
                        "id": "06",
                        "image": "003.jpg",
                        "title": "Bacon wrapped shrimp",
                        "amount": "23.80",
                        "transId": "12122323",
                        "time": "10 Min",
                        "status": "CONFIRM"
                    }
                ]
            },
            {
                "date": "30 Dec 1993",
                "order": [{
                        "id": "07",
                        "image": "001.jpg",
                        "title": "Hamburger",
                        "amount": "55.40",
                        "transId": "11112222",
                        "time": "20 Min",
                        "status": "CONFIRM"
                    },
                    {
                        "id": "08",
                        "image": "002.jpg",
                        "title": "Deep dish pizza",
                        "amount": "48.50",
                        "transId": "43211234",
                        "time": "45 Min",
                        "status": "CANCELLED"
                    },
                    {
                        "id": "09",
                        "image": "003.jpg",
                        "title": "Bacon wrapped shrimp",
                        "amount": "23.80",
                        "transId": "12122323",
                        "time": "10 Min",
                        "status": "CONFIRM"
                    }
                ]
            }
        ];
    }
    OrderPage.prototype.ngOnInit = function () {
    };
    OrderPage.prototype.segmentChanged = function (ev) {
        console.log(ev.detail.value);
    };
    OrderPage.prototype.presentPopover = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: order_menu_page_1.OrderMenuPage,
                            event: ev,
                            mode: 'ios',
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderPage = __decorate([
        core_1.Component({
            selector: 'app-order',
            templateUrl: './order.page.html',
            styleUrls: ['./order.page.scss']
        })
    ], OrderPage);
    return OrderPage;
}());
exports.OrderPage = OrderPage;
