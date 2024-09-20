// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class empDetails_service {
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
    this.serviceName = 'empDetails_service';
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
      instance = new empDetails_service(
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
    //appendnew_flow_empDetails_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: empDetails_service');
    //appendnew_flow_empDetails_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: empDetails_service');
    //appendnew_flow_empDetails_service_HttpIn
  }
  //   service flows_empDetails_service

  async saveEmpdetails(
    parentSpanInst,
    fname: any = undefined,
    lname: any = undefined,
    dob: any = undefined,
    qualification: any = undefined,
    gender: any = undefined,
    address: any = undefined,
    phone: any = undefined,
    referencephone: any = undefined,
    email: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'saveEmpdetails',
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
        email,
      },
      local: {
        outputMapping: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ITPhb2foDv7UXhea(bh, parentSpanInst);
      //appendnew_next_saveEmpdetails
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
        'saveEmpdetails'
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
  //appendnew_flow_empDetails_service_start

  async sd_ITPhb2foDv7UXhea(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ITPhb2foDv7UXhea',
      parentSpanInst
    );
    try {
      // bh.input.empDetails = `INSERT INTO empDetails (fname, lname, qualification, dob, gender, phone, referencephone, address, email, passbook, identycard, experienceLetter, educationCertificates)
      // VALUES ('${bh.input.fname}','${bh.input.lname}','${bh.input.qualification}','${bh.input.dob}','${bh.input.gender}','${bh.input.phone},'${bh.input.referencephone}','${bh.input.address}','${bh.input.email}','iiuiu','34545','34454','33322')`;

      bh.input.empDetails = `INSERT INTO empDetails (fname, lname, qualification, dob, gender, phone, referencephone, address, email, passbook, identycard, experienceLetter, educationCertificates) VALUES ('harish123','porwal','MCA','2000/02/02','male',23456789 ,9876543768,'nsajhd hknsd nsa', 'hd1@gmail.com','23456','23456','345678','5678');`;

      //   '${bh.input.identycard}',
      //${bh.input.passbook}
      //  '${bh.input.experienceLetter}',
      //  '${bh.input.educationCertificates}')`;

      console.log('----------->', bh.input.empDetails);
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
        userName: 'harish',
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
      let params = undefined;
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
  //appendnew_flow_empDetails_service_Catch
}
