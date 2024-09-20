// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class postempdetails {
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
    this.serviceName = 'postempdetails';
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
      instance = new postempdetails(
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
    //appendnew_flow_postempdetails_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: postempdetails');
    //appendnew_flow_postempdetails_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: postempdetails');

    this.app['post'](
      `${this.serviceBasePath}/postEmpDetails`,
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
          bh = await this.sd_QMRq3qgWRPQ0wxkb(bh, parentSpanInst);
          //appendnew_next_sd_Ijt4ZFGZWqfgqjW0
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Ijt4ZFGZWqfgqjW0');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_postempdetails_HttpIn
  }
  //   service flows_postempdetails

  //appendnew_flow_postempdetails_start

  async sd_QMRq3qgWRPQ0wxkb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QMRq3qgWRPQ0wxkb',
      parentSpanInst
    );
    try {
      console.log('calling post employee details api');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_YpJBM6wqVYUsO5it(bh, parentSpanInst);
      //appendnew_next_sd_QMRq3qgWRPQ0wxkb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QMRq3qgWRPQ0wxkb',
        spanInst,
        'sd_QMRq3qgWRPQ0wxkb'
      );
    }
  }

  async sd_YpJBM6wqVYUsO5it(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'success', data: [] });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YpJBM6wqVYUsO5it');
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
  //appendnew_flow_postempdetails_Catch
}
