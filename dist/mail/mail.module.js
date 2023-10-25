"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const common_1 = require("@nestjs/common");
const mail_service_1 = require("./mail.service");
const mail_controller_1 = require("./mail.controller");
const mailer_1 = require("@nestjs-modules/mailer");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const mongoose_1 = require("@nestjs/mongoose");
const rxjs_1 = require("rxjs");
const subscriber_schema_1 = require("../subscribers/schemas/subscriber.schema");
const job_schemas_1 = require("../jobs/schemas/job.schemas");
let MailModule = class MailModule {
};
exports.MailModule = MailModule;
exports.MailModule = MailModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                useFactory: async (configService) => ({
                    transport: {
                        host: configService.get("EMAIL_HOST"),
                        secure: false,
                        auth: {
                            user: configService.get("EMAIL_AUTH_USER"),
                            pass: configService.get("EMAIL_AUTH_PASS"),
                        },
                    },
                    template: {
                        dir: (0, path_1.join)(__dirname, 'templates'),
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                        options: {
                            strict: true,
                        },
                    },
                    preview: configService.get("EMAIL_PREVIEW") === 'true' ? true : false,
                }),
                inject: [config_1.ConfigService],
            }),
            mongoose_1.MongooseModule.forFeature([{ name: rxjs_1.Subscriber.name, schema: subscriber_schema_1.SubscriberSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: job_schemas_1.Job.name, schema: job_schemas_1.JobSchema }])
        ],
        controllers: [mail_controller_1.MailController],
        providers: [mail_service_1.MailService]
    })
], MailModule);
//# sourceMappingURL=mail.module.js.map