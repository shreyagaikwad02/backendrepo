// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class signupService {
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
    this.serviceName = 'signupService';
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
      instance = new signupService(
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
    //appendnew_flow_signupService_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: signupService');
    //appendnew_flow_signupService_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: signupService');
    //appendnew_flow_signupService_HttpIn
  }
  //   service flows_signupService

  async userService(
    parentSpanInst,
    newpassword: any = undefined,
    confirmPassword: any = undefined,
    isError: any = undefined,
    userName: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'userService',
      parentSpanInst
    );
    let bh: any = {
      input: {
        newpassword,
        confirmPassword,
        isError,
        userName,
      },
      local: {
        outputMapping: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wm1DGbhnjyKmlQOA(bh, parentSpanInst);
      //appendnew_next_userService
      return (
        // formatting output variables
        {
          input: {
            isError: bh.input.isError,
          },
          local: {
            outputMapping: bh.local.outputMapping,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lDWUQsxmaYzT5q92',
        spanInst,
        'userService'
      );
    }
  }
  //appendnew_flow_signupService_start

  async sd_wm1DGbhnjyKmlQOA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wm1DGbhnjyKmlQOA',
      parentSpanInst
    );
    try {
      // bh.input.credentials=`INSERT INTO empdetails (userName, password) VALUES (
      //     '${bh.input.userName}',
      //     '${bh.input.confirmPassword}')`;

      bh.input.checkcondition = {
        userName: bh.input.userName,
      };

      bh.input.signup = `INSERT INTO empdetails (userName, password) VALUES (
    '${bh.input.userName}', 
    '${bh.input.confirmPassword}'
    )`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_elQwBoDHnm6AYC6w(bh, parentSpanInst);
      //appendnew_next_sd_wm1DGbhnjyKmlQOA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wm1DGbhnjyKmlQOA',
        spanInst,
        'sd_wm1DGbhnjyKmlQOA'
      );
    }
  }

  async sd_elQwBoDHnm6AYC6w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_elQwBoDHnm6AYC6w',
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
      bh.local.outputMapping = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.input.signup,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0DiKKHjn3g5CsFrA(bh, parentSpanInst);
      //appendnew_next_sd_elQwBoDHnm6AYC6w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_elQwBoDHnm6AYC6w',
        spanInst,
        'sd_elQwBoDHnm6AYC6w'
      );
    }
  }

  async sd_0DiKKHjn3g5CsFrA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0DiKKHjn3g5CsFrA',
      parentSpanInst
    );
    try {
      console.log('result', bh.local.outputMapping);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NCF7x6UpaBQrrwkp(bh, parentSpanInst);
      //appendnew_next_sd_0DiKKHjn3g5CsFrA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0DiKKHjn3g5CsFrA',
        spanInst,
        'sd_0DiKKHjn3g5CsFrA'
      );
    }
  }

  async sd_NCF7x6UpaBQrrwkp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NCF7x6UpaBQrrwkp',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.outputMapping,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_N71c3cdFh2mfe34T(bh, parentSpanInst);
      } else {
        bh = await this.sd_X9eTtVetJpJxnmSE(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NCF7x6UpaBQrrwkp',
        spanInst,
        'sd_NCF7x6UpaBQrrwkp'
      );
    }
  }

  async sd_N71c3cdFh2mfe34T(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N71c3cdFh2mfe34T',
      parentSpanInst
    );
    try {
      bh.local.outputMapping = 'Already Exist';
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_N71c3cdFh2mfe34T
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N71c3cdFh2mfe34T',
        spanInst,
        'sd_N71c3cdFh2mfe34T'
      );
    }
  }

  async sd_X9eTtVetJpJxnmSE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_X9eTtVetJpJxnmSE',
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
      bh.local.empResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.input.credentials,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Gylu5Tdgxp1hfrtu(bh, parentSpanInst);
      //appendnew_next_sd_X9eTtVetJpJxnmSE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X9eTtVetJpJxnmSE',
        spanInst,
        'sd_X9eTtVetJpJxnmSE'
      );
    }
  }

  async sd_Gylu5Tdgxp1hfrtu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Gylu5Tdgxp1hfrtu',
      parentSpanInst
    );
    try {
      bh.local.outputMapping = bh.local.empResult;

      console.log('outputmapping', bh.local.outputMapping);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Gylu5Tdgxp1hfrtu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Gylu5Tdgxp1hfrtu',
        spanInst,
        'sd_Gylu5Tdgxp1hfrtu'
      );
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
  //appendnew_flow_signupService_Catch
}
