// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_rcOv6fz249JvyeYM from './signupService'; //_splitter_
//append_imports_end
export class signup_api {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'signup_api';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new signup_api(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_signup_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: signup_api');
    //appendnew_flow_signup_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: signup_api');

    this.app['post'](
      `${this.serviceBasePath}/user/register`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_32gt8o9GJV3WvD0l(bh, parentSpanInst);
          //appendnew_next_sd_lIH7PZxWSzySY5jg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lIH7PZxWSzySY5jg');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_signup_api_HttpIn
  }
  //   service flows_signup_api

  //appendnew_flow_signup_api_start

  async sd_32gt8o9GJV3WvD0l(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_32gt8o9GJV3WvD0l',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_rcOv6fz249JvyeYMInstance: SSD_SERVICE_ID_sd_rcOv6fz249JvyeYM.signupService =
        SSD_SERVICE_ID_sd_rcOv6fz249JvyeYM.signupService.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_rcOv6fz249JvyeYMInstance.userService(
          spanInst,
          bh.input.body.password,
          bh.input.body.confirmpassword,
          undefined,
          bh.input.body.userName
        );
      bh.local.isError = outputVariables.input.isError;
      bh.local.outputMapping = outputVariables.local.outputMapping;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QtJeygKObMWyUFlE(bh, parentSpanInst);
      //appendnew_next_sd_32gt8o9GJV3WvD0l
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_32gt8o9GJV3WvD0l',
        spanInst,
        'sd_32gt8o9GJV3WvD0l'
      );
    }
  }

  async sd_QtJeygKObMWyUFlE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QtJeygKObMWyUFlE',
      parentSpanInst
    );
    try {
      bh.local.resultMapping = {
        code: 200,
        data: bh.local.outputMapping,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TjpGYP7jUjskyFDJ(bh, parentSpanInst);
      //appendnew_next_sd_QtJeygKObMWyUFlE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QtJeygKObMWyUFlE',
        spanInst,
        'sd_QtJeygKObMWyUFlE'
      );
    }
  }

  async sd_TjpGYP7jUjskyFDJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TjpGYP7jUjskyFDJ',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.outputMapping,
          'Already Exist',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_H25EG2jNqcUcYwbw(bh, parentSpanInst);
      } else {
        bh = await this.sd_pbYBL2xmrF2p3eW8(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TjpGYP7jUjskyFDJ',
        spanInst,
        'sd_TjpGYP7jUjskyFDJ'
      );
    }
  }

  async sd_pbYBL2xmrF2p3eW8(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.resultMapping);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pbYBL2xmrF2p3eW8');
    }
  }

  async sd_H25EG2jNqcUcYwbw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H25EG2jNqcUcYwbw',
      parentSpanInst
    );
    try {
      bh.local.resultMapping = 'This username is taken. Try another';
      this.tracerService.sendData(spanInst, bh);
      await this.sd_P5BKQWWlAzNH6TXY(bh, parentSpanInst);
      //appendnew_next_sd_H25EG2jNqcUcYwbw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H25EG2jNqcUcYwbw',
        spanInst,
        'sd_H25EG2jNqcUcYwbw'
      );
    }
  }

  async sd_P5BKQWWlAzNH6TXY(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.local.resultMapping);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P5BKQWWlAzNH6TXY');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_signup_api_Catch
}
