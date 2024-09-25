// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class loginService {
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
    this.serviceName = 'loginService';
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
      instance = new loginService(
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
    //appendnew_flow_loginService_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: loginService');
    //appendnew_flow_loginService_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: loginService');
    //appendnew_flow_loginService_HttpIn
  }
  //   service flows_loginService

  async loginService(
    parentSpanInst,
    userName: any = undefined,
    password: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'loginService',
      parentSpanInst
    );
    let bh: any = {
      input: {
        userName,
        password,
      },
      local: {
        outputMapping: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jyU275KmmvR25nAM(bh, parentSpanInst);
      //appendnew_next_loginService
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
        'sd_0y3q6x4frKdNe5LU',
        spanInst,
        'loginService'
      );
    }
  }
  //appendnew_flow_loginService_start

  async sd_jyU275KmmvR25nAM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jyU275KmmvR25nAM',
      parentSpanInst
    );
    try {
      bh.input.logincredentials = `INSERT INTO empdetails (userName, password) VALUES (
    '${bh.input.userName}', 
    '${bh.input.password}'
    )`;

      bh.input.userCheckstatus;
      bh.local.userNotAvailable;

      bh.input.checkuser = {
        userName: bh.input.userName,
        newpassword: bh.input.password,
      };

      // bh.input.loginquery=`INSERT INTO empdetails (userName, password) VALUES (
      //     '${bh.input.userName}',
      //     '${bh.input.password}'
      //     )`;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rWxIR5Z50Iqn736s(bh, parentSpanInst);
      //appendnew_next_sd_jyU275KmmvR25nAM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jyU275KmmvR25nAM',
        spanInst,
        'sd_jyU275KmmvR25nAM'
      );
    }
  }

  async sd_rWxIR5Z50Iqn736s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rWxIR5Z50Iqn736s',
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
        bh.loginquery,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TJugx2Mv3E4Dx3bP(bh, parentSpanInst);
      //appendnew_next_sd_rWxIR5Z50Iqn736s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rWxIR5Z50Iqn736s',
        spanInst,
        'sd_rWxIR5Z50Iqn736s'
      );
    }
  }

  async sd_TJugx2Mv3E4Dx3bP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TJugx2Mv3E4Dx3bP',
      parentSpanInst
    );
    try {
      console.log('userCheckstatus', bh.local.userCheckstatus);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_g1Db57ouNomZKC6b(bh, parentSpanInst);
      //appendnew_next_sd_TJugx2Mv3E4Dx3bP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TJugx2Mv3E4Dx3bP',
        spanInst,
        'sd_TJugx2Mv3E4Dx3bP'
      );
    }
  }

  async sd_g1Db57ouNomZKC6b(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_g1Db57ouNomZKC6b',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.userCheckstatus,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_R3ONnZMilxLgejuc(bh, parentSpanInst);
      } else {
        bh = await this.sd_yI3zzpfxeTyVLhFo(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g1Db57ouNomZKC6b',
        spanInst,
        'sd_g1Db57ouNomZKC6b'
      );
    }
  }

  async sd_R3ONnZMilxLgejuc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R3ONnZMilxLgejuc',
      parentSpanInst
    );
    try {
      bh.local.userNotAvailable = 'Your account not exist, try to signup';
      this.tracerService.sendData(spanInst, bh);
      await this.sd_hPiXAhvk6wpR17wW(bh, parentSpanInst);
      //appendnew_next_sd_R3ONnZMilxLgejuc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R3ONnZMilxLgejuc',
        spanInst,
        'sd_R3ONnZMilxLgejuc'
      );
    }
  }

  async sd_hPiXAhvk6wpR17wW(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.userNotAvailable);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hPiXAhvk6wpR17wW');
    }
  }

  async sd_yI3zzpfxeTyVLhFo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yI3zzpfxeTyVLhFo',
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
      bh.local.checkloginstatus = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.input.logincredentials,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MqqsTKLH5I5WUe4f(bh, parentSpanInst);
      //appendnew_next_sd_yI3zzpfxeTyVLhFo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yI3zzpfxeTyVLhFo',
        spanInst,
        'sd_yI3zzpfxeTyVLhFo'
      );
    }
  }

  async sd_MqqsTKLH5I5WUe4f(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MqqsTKLH5I5WUe4f',
      parentSpanInst
    );
    try {
      console.log('Checkloginstatus', bh.local.checkloginstatus);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NReBALKRUWhAanoM(bh, parentSpanInst);
      //appendnew_next_sd_MqqsTKLH5I5WUe4f
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MqqsTKLH5I5WUe4f',
        spanInst,
        'sd_MqqsTKLH5I5WUe4f'
      );
    }
  }

  async sd_NReBALKRUWhAanoM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NReBALKRUWhAanoM',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.checkloginstatus,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_VUarNB5mzG9r1g0n(bh, parentSpanInst);
      } else {
        bh = await this.sd_GKOPeBfKI8canl4T(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NReBALKRUWhAanoM',
        spanInst,
        'sd_NReBALKRUWhAanoM'
      );
    }
  }

  async sd_VUarNB5mzG9r1g0n(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VUarNB5mzG9r1g0n',
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
      bh.local.emploginresponse = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.input.logincredentials,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UeZ5wBGAHezQ3YiT(bh, parentSpanInst);
      //appendnew_next_sd_VUarNB5mzG9r1g0n
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VUarNB5mzG9r1g0n',
        spanInst,
        'sd_VUarNB5mzG9r1g0n'
      );
    }
  }

  async sd_UeZ5wBGAHezQ3YiT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UeZ5wBGAHezQ3YiT',
      parentSpanInst
    );
    try {
      bh.local.outputMapping = bh.local.emploginresponse;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_UeZ5wBGAHezQ3YiT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UeZ5wBGAHezQ3YiT',
        spanInst,
        'sd_UeZ5wBGAHezQ3YiT'
      );
    }
  }

  async sd_GKOPeBfKI8canl4T(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GKOPeBfKI8canl4T',
      parentSpanInst
    );
    try {
      console.log('user already registered');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_GKOPeBfKI8canl4T
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GKOPeBfKI8canl4T',
        spanInst,
        'sd_GKOPeBfKI8canl4T'
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
  //appendnew_flow_loginService_Catch
}
