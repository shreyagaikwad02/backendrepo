// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_alB9U5sYkG6DoYPy from './empDetails_service'; //_splitter_
//append_imports_end
export class empdetails_api {
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
    this.serviceName = 'empdetails_api';
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
      instance = new empdetails_api(
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
    //appendnew_flow_empdetails_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: empdetails_api');
    //appendnew_flow_empdetails_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: empdetails_api');

    this.app['post'](
      `${this.serviceBasePath}/empDetails/save`,
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
          bh = await this.sd_QjkqJ9Ro9uEd8dpj(bh, parentSpanInst);
          //appendnew_next_sd_uQhe6Ynzu8IFQABe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uQhe6Ynzu8IFQABe');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/get/empDetails`,
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
          bh = await this.sd_TQIuRQyvbif5FT7e(bh, parentSpanInst);
          //appendnew_next_sd_qMdkgBRdvpy5iLrM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qMdkgBRdvpy5iLrM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_empdetails_api_HttpIn
  }
  //   service flows_empdetails_api

  //appendnew_flow_empdetails_api_start

  async sd_QjkqJ9Ro9uEd8dpj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QjkqJ9Ro9uEd8dpj',
      parentSpanInst
    );
    try {
      bh.local.saveEmpDetails = {
        fname: bh.input.body.fname,
        lname: bh.input.body.lname,
        qualification: bh.input.body.qualification,
        dob: bh.input.body.dob,
        gender: bh.input.body.gender,
        phone: bh.input.body.phone,
        referencephone: bh.input.body.referencephone,
        address: bh.input.body.address,
        email: bh.input.body.email,
        previousEmployer: bh.input.body.previousEmployer,
        passbook: bh.input.body.passbook,
        identycard: bh.input.body.identycard,
        experienceLetter: bh.input.body.experienceLetter,
        educationCertificates: bh.input.body.educationCertificates,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jDmHGGbn8mvimsay(bh, parentSpanInst);
      //appendnew_next_sd_QjkqJ9Ro9uEd8dpj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QjkqJ9Ro9uEd8dpj',
        spanInst,
        'sd_QjkqJ9Ro9uEd8dpj'
      );
    }
  }

  async sd_jDmHGGbn8mvimsay(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jDmHGGbn8mvimsay',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_alB9U5sYkG6DoYPyInstance: SSD_SERVICE_ID_sd_alB9U5sYkG6DoYPy.empDetails_service =
        SSD_SERVICE_ID_sd_alB9U5sYkG6DoYPy.empDetails_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_alB9U5sYkG6DoYPyInstance.saveEmpdetails(
          spanInst,
          bh.input.body.fname,
          bh.input.body.lname,
          bh.input.body.dob,
          bh.input.body.qualification,
          bh.input.body.gender,
          bh.input.body.address,
          bh.input.body.phone,
          bh.input.body.referencephone,
          bh.input.body.email
        );
      bh.local.outputMapping = outputVariables.local.outputMapping;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iCHwONu35oeHjlen(bh, parentSpanInst);
      //appendnew_next_sd_jDmHGGbn8mvimsay
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jDmHGGbn8mvimsay',
        spanInst,
        'sd_jDmHGGbn8mvimsay'
      );
    }
  }

  async sd_iCHwONu35oeHjlen(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iCHwONu35oeHjlen',
      parentSpanInst
    );
    try {
      bh.local.resultMapping = {
        code: 200,
        data: bh.local.outputMapping,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5gXnq3nxDc6qBpSB(bh, parentSpanInst);
      //appendnew_next_sd_iCHwONu35oeHjlen
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iCHwONu35oeHjlen',
        spanInst,
        'sd_iCHwONu35oeHjlen'
      );
    }
  }

  async sd_5gXnq3nxDc6qBpSB(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.resultMapping);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5gXnq3nxDc6qBpSB');
    }
  }

  async sd_TQIuRQyvbif5FT7e(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TQIuRQyvbif5FT7e',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Q2vtTA0ZiCFXVj10(bh, parentSpanInst);
      //appendnew_next_sd_TQIuRQyvbif5FT7e
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TQIuRQyvbif5FT7e',
        spanInst,
        'sd_TQIuRQyvbif5FT7e'
      );
    }
  }

  async sd_Q2vtTA0ZiCFXVj10(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Q2vtTA0ZiCFXVj10',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_alB9U5sYkG6DoYPyInstance: SSD_SERVICE_ID_sd_alB9U5sYkG6DoYPy.empDetails_service =
        SSD_SERVICE_ID_sd_alB9U5sYkG6DoYPy.empDetails_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_alB9U5sYkG6DoYPyInstance.getempdetails(
          spanInst,
          bh.input.body
        );
      bh.local.outputMapping = outputVariables.local.outputMapping;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CLJBdr6QTMuyTLLi(bh, parentSpanInst);
      //appendnew_next_sd_Q2vtTA0ZiCFXVj10
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q2vtTA0ZiCFXVj10',
        spanInst,
        'sd_Q2vtTA0ZiCFXVj10'
      );
    }
  }

  async sd_CLJBdr6QTMuyTLLi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CLJBdr6QTMuyTLLi',
      parentSpanInst
    );
    try {
      bh.local.resultMapping = {
        code: 200,
        data: bh.local.outputMapping,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5v32RaolFY4pZSUC(bh, parentSpanInst);
      //appendnew_next_sd_CLJBdr6QTMuyTLLi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CLJBdr6QTMuyTLLi',
        spanInst,
        'sd_CLJBdr6QTMuyTLLi'
      );
    }
  }

  async sd_5v32RaolFY4pZSUC(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.resultMapping);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5v32RaolFY4pZSUC');
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
  //appendnew_flow_empdetails_api_Catch
}
