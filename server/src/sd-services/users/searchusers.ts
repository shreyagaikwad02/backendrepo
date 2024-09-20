// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class searchusers {
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
    this.serviceName = 'searchusers';
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
      instance = new searchusers(
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
    //appendnew_flow_searchusers_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: searchusers');
    //appendnew_flow_searchusers_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: searchusers');

    this.app['post'](
      `${this.serviceBasePath}/users/search/:userId`,
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
          bh = await this.sd_bVD3fDo3n8aygyNe(bh, parentSpanInst);
          //appendnew_next_sd_PAuuB3KYBffrJ2Jb
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_PAuuB3KYBffrJ2Jb');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_searchusers_HttpIn
  }
  //   service flows_searchusers

  //appendnew_flow_searchusers_start

  async sd_bVD3fDo3n8aygyNe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bVD3fDo3n8aygyNe',
      parentSpanInst
    );
    try {
      console.log(JSON.stringify(bh.input));
      this.tracerService.sendData(spanInst, bh);
      await this.sd_uqnSMToGpxyWVRUl(bh, parentSpanInst);
      //appendnew_next_sd_bVD3fDo3n8aygyNe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bVD3fDo3n8aygyNe',
        spanInst,
        'sd_bVD3fDo3n8aygyNe'
      );
    }
  }

  async sd_uqnSMToGpxyWVRUl(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'success', data: [] });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uqnSMToGpxyWVRUl');
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
  //appendnew_flow_searchusers_Catch
}
