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
      bh.input.logincredentials = {
        userName: bh.input.userName,
        password: bh.input.password,
      };

      bh.input.userCheckstatus;
      bh.local.userNotAvailable;

      bh.input.checkuser = {
        userName: bh.input.userName,
        newpassword: bh.input.password,
      };

      bh.input.loginqurey = `INSERT INTO login (username, password) VALUES (
    '${username}', 
    '${password}'
    )`;
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
        bh.input.loginquery,
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
      console.log('login credencials...', bh.local.outputMapping);
      this.tracerService.sendData(spanInst, bh);
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
