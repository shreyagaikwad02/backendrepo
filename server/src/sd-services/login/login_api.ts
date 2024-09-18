// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_z9qNdaMuIxfdDfzE from './loginService'; //_splitter_
//append_imports_end
export class login_api {
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
    this.serviceName = 'login_api';
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
      instance = new login_api(
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
    //appendnew_flow_login_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: login_api');
    //appendnew_flow_login_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: login_api');

    this.app['post'](
      `${this.serviceBasePath}/emp/login`,
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
          bh = await this.sd_ijldkMGPim3yVaMM(bh, parentSpanInst);
          //appendnew_next_sd_GUNAZinzDwfQmLMS
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GUNAZinzDwfQmLMS');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_login_api_HttpIn
  }
  //   service flows_login_api

  //appendnew_flow_login_api_start

  async sd_ijldkMGPim3yVaMM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ijldkMGPim3yVaMM',
      parentSpanInst
    );
    try {
      bh.local.logincredentials = {
        userName: bh.input.body.userName,
        password: bh.input.body.password,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_At5I0snDQy2qtMFG(bh, parentSpanInst);
      //appendnew_next_sd_ijldkMGPim3yVaMM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ijldkMGPim3yVaMM',
        spanInst,
        'sd_ijldkMGPim3yVaMM'
      );
    }
  }

  async sd_At5I0snDQy2qtMFG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_At5I0snDQy2qtMFG',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_z9qNdaMuIxfdDfzEInstance: SSD_SERVICE_ID_sd_z9qNdaMuIxfdDfzE.loginService =
        SSD_SERVICE_ID_sd_z9qNdaMuIxfdDfzE.loginService.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_z9qNdaMuIxfdDfzEInstance.loginService(
          spanInst,
          bh.input.body.userName,
          bh.input.body.password
        );
      bh.local.outputMapping = outputVariables.local.outputMapping;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bF3VHgFFbFN9Xxm0(bh, parentSpanInst);
      //appendnew_next_sd_At5I0snDQy2qtMFG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_At5I0snDQy2qtMFG',
        spanInst,
        'sd_At5I0snDQy2qtMFG'
      );
    }
  }

  async sd_bF3VHgFFbFN9Xxm0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bF3VHgFFbFN9Xxm0',
      parentSpanInst
    );
    try {
      bh.local.resultMapping = {
        code: 200,
        data: bh.local.outputMapping,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_7AJ12X5C1XV9X4kF(bh, parentSpanInst);
      //appendnew_next_sd_bF3VHgFFbFN9Xxm0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bF3VHgFFbFN9Xxm0',
        spanInst,
        'sd_bF3VHgFFbFN9Xxm0'
      );
    }
  }

  async sd_7AJ12X5C1XV9X4kF(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.resultMapping);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7AJ12X5C1XV9X4kF');
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
  //appendnew_flow_login_api_Catch
}
