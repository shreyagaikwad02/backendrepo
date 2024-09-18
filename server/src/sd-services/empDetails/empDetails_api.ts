// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class empDetails_api {
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
    this.serviceName = 'empDetails_api';
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
      instance = new empDetails_api(
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
    //appendnew_flow_empDetails_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: empDetails_api');
    //appendnew_flow_empDetails_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: empDetails_api');
    //appendnew_flow_empDetails_api_HttpIn
  }
  //   service flows_empDetails_api

  async saveempdetails(
    parentSpanInst,
    fname: any = undefined,
    lname: any = undefined,
    dob: any = undefined,
    qualification: any = undefined,
    gender: any = undefined,
    address: any = undefined,
    phone: any = undefined,
    referencephone: any = undefined,
    identycard: any = undefined,
    email: any = undefined,
    passbook: any = undefined,
    experienceletter: any = undefined,
    educationcertificate: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'saveempdetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        fname,
        lname,
        dob,
        qualification,
        gender,
        address,
        phone,
        referencephone,
        identycard,
        email,
        passbook,
        experienceletter,
        educationcertificate,
      },
      local: {
        outputMapping: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ITPhb2foDv7UXhea(bh, parentSpanInst);
      //appendnew_next_saveempdetails
      return (
        // formatting output variables
        {
          input: {},
          local: {
            outputMapping: bh.local.outputMapping,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SzTdhiBVBTE6yjHJ',
        spanInst,
        'saveempdetails'
      );
    }
  }

  async getempdetails(parentSpanInst, username: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getempdetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        username,
      },
      local: {
        outputMapping: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_T2BHwvl9yJlAE7iW(bh, parentSpanInst);
      //appendnew_next_getempdetails
      return (
        // formatting output variables
        {
          input: {},
          local: {
            outputMapping: bh.local.outputMapping,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X5KxqUhGLBHAOKNb',
        spanInst,
        'getempdetails'
      );
    }
  }
  //appendnew_flow_empDetails_api_start

  async sd_ITPhb2foDv7UXhea(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ITPhb2foDv7UXhea',
      parentSpanInst
    );
    try {
      bh.input.empDetails = `INSERT INTO empDetails 
(fname, lname, qualification, dob, gender, phone, referencephone, address, email, passbook, identycard, experienceLetter, educationCertificates)
VALUES ('${bh.input.email}', 
    '${bh.input.address}',
    '${bh.input.dob}', 
    '${bh.input.passbook}',
    '${bh.input.qualification}', 
    '${bh.input.referencephone},
    '${bh.input.phone}', 
    '${bh.input.gender}',
    '${bh.input.fname}', 
    '${bh.input.lname}',
    '${bh.input.educationCertificates}',
    '${bh.input.identycard}',
    '${bh.input.experienceLetter}')`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_T9E9cTaDF0yzSJWV(bh, parentSpanInst);
      //appendnew_next_sd_ITPhb2foDv7UXhea
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ITPhb2foDv7UXhea',
        spanInst,
        'sd_ITPhb2foDv7UXhea'
      );
    }
  }

  async sd_T9E9cTaDF0yzSJWV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T9E9cTaDF0yzSJWV',
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
        bh.input.empDetails,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_T9E9cTaDF0yzSJWV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T9E9cTaDF0yzSJWV',
        spanInst,
        'sd_T9E9cTaDF0yzSJWV'
      );
    }
  }

  async sd_T2BHwvl9yJlAE7iW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T2BHwvl9yJlAE7iW',
      parentSpanInst
    );
    try {
      bh.local.data = {
        empID: 110,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mtBqwGqLpO7n3Z4l(bh, parentSpanInst);
      //appendnew_next_sd_T2BHwvl9yJlAE7iW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T2BHwvl9yJlAE7iW',
        spanInst,
        'sd_T2BHwvl9yJlAE7iW'
      );
    }
  }

  async sd_mtBqwGqLpO7n3Z4l(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mtBqwGqLpO7n3Z4l',
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
        bh.local.data,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_mtBqwGqLpO7n3Z4l
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mtBqwGqLpO7n3Z4l',
        spanInst,
        'sd_mtBqwGqLpO7n3Z4l'
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
  //appendnew_flow_empDetails_api_Catch
}
