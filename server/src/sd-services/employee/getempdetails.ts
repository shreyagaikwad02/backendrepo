// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class getempdetails {
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
    this.serviceName = 'getempdetails';
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
      instance = new getempdetails(
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
    //appendnew_flow_getempdetails_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getempdetails');
    //appendnew_flow_getempdetails_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: getempdetails');

    this.app['post'](
      `${this.serviceBasePath}/getEmpDetails`,
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
          bh = await this.sd_GFyD84lmcwHijvZ8(bh, parentSpanInst);
          //appendnew_next_sd_JXyuYOheHrjI4IN4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JXyuYOheHrjI4IN4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_getempdetails_HttpIn
  }
  //   service flows_getempdetails

  //appendnew_flow_getempdetails_start

  async sd_GFyD84lmcwHijvZ8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GFyD84lmcwHijvZ8',
      parentSpanInst
    );
    try {
      console.log('calling getempDetails');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_kS7gvIzAX2nagI0t(bh, parentSpanInst);
      //appendnew_next_sd_GFyD84lmcwHijvZ8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GFyD84lmcwHijvZ8',
        spanInst,
        'sd_GFyD84lmcwHijvZ8'
      );
    }
  }

  async sd_kS7gvIzAX2nagI0t(bh, parentSpanInst) {
    try {
      bh.web.res
        .status(200)
        .send({ message: 'employee details successfully mapped' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kS7gvIzAX2nagI0t');
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
  //appendnew_flow_getempdetails_Catch
}
