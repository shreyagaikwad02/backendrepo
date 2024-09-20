// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class signupApi {
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
    this.serviceName = 'signupApi';
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
      instance = new signupApi(
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
    //appendnew_flow_signupApi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: signupApi');
    //appendnew_flow_signupApi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: signupApi');

    this.app['post'](
      `${this.serviceBasePath}/signup`,
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
          bh = await this.sd_ka7lN0gvWcO90FqF(bh, parentSpanInst);
          //appendnew_next_sd_hkuEmcPrJ6IFM7go
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hkuEmcPrJ6IFM7go');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_signupApi_HttpIn
  }
  //   service flows_signupApi

  //appendnew_flow_signupApi_start

  async sd_ka7lN0gvWcO90FqF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ka7lN0gvWcO90FqF',
      parentSpanInst
    );
    try {
      console.log('calling signup api');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_MqLtCvacZKMDC303(bh, parentSpanInst);
      //appendnew_next_sd_ka7lN0gvWcO90FqF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ka7lN0gvWcO90FqF',
        spanInst,
        'sd_ka7lN0gvWcO90FqF'
      );
    }
  }

  async sd_MqLtCvacZKMDC303(bh, parentSpanInst) {
    try {
      bh.web.res
        .status(200)
        .send({ message: ' successfully signup into your account' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MqLtCvacZKMDC303');
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
  //appendnew_flow_signupApi_Catch
}
