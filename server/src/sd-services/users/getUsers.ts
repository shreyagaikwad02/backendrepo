// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class getUsers {
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
    this.serviceName = 'getUsers';
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
      instance = new getUsers(
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
    //appendnew_flow_getUsers_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getUsers');
    //appendnew_flow_getUsers_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: getUsers');

    this.app['get'](
      `${this.serviceBasePath}/users`,
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
          bh = await this.sd_aQWe1ystVk6gTf36(bh, parentSpanInst);
          //appendnew_next_sd_jBc4PtW1maPIQITK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jBc4PtW1maPIQITK');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_getUsers_HttpIn
  }
  //   service flows_getUsers

  //appendnew_flow_getUsers_start

  async sd_aQWe1ystVk6gTf36(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aQWe1ystVk6gTf36',
      parentSpanInst
    );
    try {
      bh.local.result = {
        data: 'success',
        statusCode: 200,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.getUsersResponse(bh, parentSpanInst);
      //appendnew_next_sd_aQWe1ystVk6gTf36
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aQWe1ystVk6gTf36',
        spanInst,
        'sd_aQWe1ystVk6gTf36'
      );
    }
  }

  async getUsersResponse(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6D5Cgn8ETNBbbKU0');
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
  //appendnew_flow_getUsers_Catch
}
