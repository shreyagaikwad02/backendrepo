// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class emplogin {
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
    this.serviceName = 'emplogin';
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
      instance = new emplogin(
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
    //appendnew_flow_emplogin_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: emplogin');
    //appendnew_flow_emplogin_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: emplogin');

    this.app['post'](
      `${this.serviceBasePath}/emplogin`,
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
          bh = await this.sd_TtzEjayuFAFCFPUq(bh, parentSpanInst);
          //appendnew_next_sd_VQzhTssOUDl1QR3U
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VQzhTssOUDl1QR3U');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/empWrongUser`,
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
          await this.sd_5DlOiRMngotQTuAP(bh, parentSpanInst);
          //appendnew_next_sd_L6PBuQDFWyUB4PTy
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_L6PBuQDFWyUB4PTy');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_emplogin_HttpIn
  }
  //   service flows_emplogin

  //appendnew_flow_emplogin_start

  async sd_TtzEjayuFAFCFPUq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TtzEjayuFAFCFPUq',
      parentSpanInst
    );
    try {
      console.log('calling login api');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RXHogr3dOq3dS24o(bh, parentSpanInst);
      //appendnew_next_sd_TtzEjayuFAFCFPUq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TtzEjayuFAFCFPUq',
        spanInst,
        'sd_TtzEjayuFAFCFPUq'
      );
    }
  }

  async sd_RXHogr3dOq3dS24o(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'success' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RXHogr3dOq3dS24o');
    }
  }

  async sd_5DlOiRMngotQTuAP(bh, parentSpanInst) {
    try {
      bh.web.res.status(400).send({ message: 'Bad request' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5DlOiRMngotQTuAP');
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
  //appendnew_flow_emplogin_Catch
}
