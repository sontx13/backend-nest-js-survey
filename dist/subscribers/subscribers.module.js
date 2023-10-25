"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribersModule = void 0;
const common_1 = require("@nestjs/common");
const subscribers_service_1 = require("./subscribers.service");
const subscribers_controller_1 = require("./subscribers.controller");
const mongoose_1 = require("@nestjs/mongoose");
const subscriber_schema_1 = require("./schemas/subscriber.schema");
const rxjs_1 = require("rxjs");
let SubscribersModule = class SubscribersModule {
};
exports.SubscribersModule = SubscribersModule;
exports.SubscribersModule = SubscribersModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: rxjs_1.Subscriber.name, schema: subscriber_schema_1.SubscriberSchema }])],
        controllers: [subscribers_controller_1.SubscribersController],
        providers: [subscribers_service_1.SubscribersService]
    })
], SubscribersModule);
//# sourceMappingURL=subscribers.module.js.map