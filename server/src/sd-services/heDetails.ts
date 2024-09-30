// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class heDetails {
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
    this.serviceName = 'heDetails';
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
      instance = new heDetails(
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
    //appendnew_flow_heDetails_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: heDetails');
    //appendnew_flow_heDetails_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: heDetails');

    this.app['get'](
      `${this.serviceBasePath}/employeeName`,
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
          bh = await this.sd_VHSOQc6ju4IXC49Y(bh, parentSpanInst);
          //appendnew_next_sd_bNBEos72OdXHFkDa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bNBEos72OdXHFkDa');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/employeeDetails/:fname`,
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
          bh = await this.sd_E76ZfRlYdobhoCoT(bh, parentSpanInst);
          //appendnew_next_sd_R2B9BwKeAIRyZkh9
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_R2B9BwKeAIRyZkh9');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/itDetails/:fname`,
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
          bh = await this.sd_FpgbiDrjxhW81dyB(bh, parentSpanInst);
          //appendnew_next_sd_nZvELxSrt0UqOkYJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nZvELxSrt0UqOkYJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/bgDetails/:fname`,
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
          bh = await this.sd_ZfWoSD3qjqdTRAS1(bh, parentSpanInst);
          //appendnew_next_sd_3SBEvLZgY8bLgo39
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3SBEvLZgY8bLgo39');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_heDetails_HttpIn
  }
  //   service flows_heDetails

  //appendnew_flow_heDetails_start

  async sd_VHSOQc6ju4IXC49Y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VHSOQc6ju4IXC49Y',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_GE6Vsx1TRqmkFScc'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        'SELECT fname from employees',
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.getemployeeNameapiout(bh, parentSpanInst);
      //appendnew_next_sd_VHSOQc6ju4IXC49Y
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VHSOQc6ju4IXC49Y',
        spanInst,
        'sd_VHSOQc6ju4IXC49Y'
      );
    }
  }

  async getemployeeNameapiout(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z97DC8w6tranw4sJ');
    }
  }

  async sd_E76ZfRlYdobhoCoT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_E76ZfRlYdobhoCoT',
      parentSpanInst
    );
    try {
      bh.query = `SELECT fname, lname, gender, dob, phone, referencePhone, email, address FROM employees WHERE fname = '${bh.input.params.fname}' `;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BTPLqAAy2bhlq8Ik(bh, parentSpanInst);
      //appendnew_next_sd_E76ZfRlYdobhoCoT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_E76ZfRlYdobhoCoT',
        spanInst,
        'sd_E76ZfRlYdobhoCoT'
      );
    }
  }

  async sd_BTPLqAAy2bhlq8Ik(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BTPLqAAy2bhlq8Ik',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_GE6Vsx1TRqmkFScc'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.getEployeeDetailsapiout(bh, parentSpanInst);
      //appendnew_next_sd_BTPLqAAy2bhlq8Ik
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BTPLqAAy2bhlq8Ik',
        spanInst,
        'sd_BTPLqAAy2bhlq8Ik'
      );
    }
  }

  async getEployeeDetailsapiout(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dFifVKPf7xrUc9Qc');
    }
  }

  async sd_FpgbiDrjxhW81dyB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FpgbiDrjxhW81dyB',
      parentSpanInst
    );
    try {
      bh.query = `SELECT employeeStatus, employeeID, department, companyEmail, jobRole, manager, deviceAllocated, project, comments FROM employees WHERE fname = '${bh.input.params.fname}'`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yJ0jyx9fn3LPTSnJ(bh, parentSpanInst);
      //appendnew_next_sd_FpgbiDrjxhW81dyB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FpgbiDrjxhW81dyB',
        spanInst,
        'sd_FpgbiDrjxhW81dyB'
      );
    }
  }

  async sd_yJ0jyx9fn3LPTSnJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yJ0jyx9fn3LPTSnJ',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_GE6Vsx1TRqmkFScc'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.getitDetailsapiout(bh, parentSpanInst);
      //appendnew_next_sd_yJ0jyx9fn3LPTSnJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yJ0jyx9fn3LPTSnJ',
        spanInst,
        'sd_yJ0jyx9fn3LPTSnJ'
      );
    }
  }

  async getitDetailsapiout(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bKhjmalZSM4pM3Vo');
    }
  }

  async sd_ZfWoSD3qjqdTRAS1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZfWoSD3qjqdTRAS1',
      parentSpanInst
    );
    try {
      bh.query = `SELECT employeeStatus, fname, lname, gender, dob, phone, referencePhone, email, address, previousEmployer, jobTitle, companyLocation, reasonForLeaving, signature, commentsBg FROM employees WHERE fname = '${bh.input.params.fname}'`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_X6dFoFK395FAY2Sw(bh, parentSpanInst);
      //appendnew_next_sd_ZfWoSD3qjqdTRAS1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZfWoSD3qjqdTRAS1',
        spanInst,
        'sd_ZfWoSD3qjqdTRAS1'
      );
    }
  }

  async sd_X6dFoFK395FAY2Sw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X6dFoFK395FAY2Sw',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_GE6Vsx1TRqmkFScc'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.query,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      await this.getitbgDetailsapiout(bh, parentSpanInst);
      //appendnew_next_sd_X6dFoFK395FAY2Sw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X6dFoFK395FAY2Sw',
        spanInst,
        'sd_X6dFoFK395FAY2Sw'
      );
    }
  }

  async getitbgDetailsapiout(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lda6w2SZb09cbxRN');
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
  //appendnew_flow_heDetails_Catch
}
