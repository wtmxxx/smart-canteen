/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.sdk.mpscmm.msbd{
            interface SdkMsbdModule_S {
            }
            type SdkMsbdModule_ST = $.kd.sdk.module.Module & SdkMsbdModule_S;
            interface SdkMsbdModule_C extends SdkMsbdModule_ST {
                new():SdkMsbdModule;
            }
            interface SdkMsbdModule$ {
            }
            type SdkMsbdModule_T = $.kd.sdk.module.Module & SdkMsbdModule_S & SdkMsbdModule$;
            interface SdkMsbdModule extends SdkMsbdModule_T {
            }
        }
        namespace kd.sdk.mpscmm.msbd.algorithm.service{
            interface AlgorithmService_S {
                get():AlgorithmService;
            }
            interface AlgorithmService$ {
                /**
                 * 多分录计算
                 */
                batchEntryCalculate(dataEntity:string,entries:$.java.util.List,changeProp:string):$.java.util.List;
                /**
                 * 分录计算
                 */
                entryCalculate(dataEntity:string,entry:$.kd.bos.dataentity.entity.DynamicObject,changeProp:string):$.java.util.Map;
            }
            type AlgorithmService_T = AlgorithmService_S & AlgorithmService$;
            interface AlgorithmService extends AlgorithmService_T {
            }
        }
        namespace kd.sdk.mpscmm.msbd.expoint{
            interface MsbdExpandCaseCodes_S {
                readonly MPSCMM_MSBD_DATACONTROL:string;
                readonly MPSCMM_MSBD_QUOTE:string;
                readonly MPSCMM_MSBD_WORKBENCH:string;
            }
            interface MsbdExpandCaseCodes_C extends MsbdExpandCaseCodes_S {
                new():MsbdExpandCaseCodes;
            }
            interface MsbdExpandCaseCodes$ {
            }
            type MsbdExpandCaseCodes_T = MsbdExpandCaseCodes_S & MsbdExpandCaseCodes$;
            interface MsbdExpandCaseCodes extends MsbdExpandCaseCodes_T {
            }
        }
        namespace kd.sdk.mpscmm.msbd.expoint.datacontrol{
            interface IDataCtrlCasePlugin_S {
            }
            interface IDataCtrlCasePlugin$ {
                /**
                 * 计算前，在数据控制方案取值结果和返回值字段不一致的情况下对数据集进行转换
                 * @param schemeNum 数据控制方案
                 * @param resultMap 取值结果字段对应的值
                 * @return
                 */
                beforeCalculate?(schemeNum:string,resultMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 查找控制数据前，对数据控制方案中的数据源进行特殊过滤
                 * @param schemeNum 数据控制方案
                 * @param conditionMap 取值条件字段对应的值
                 * @return
                 */
                beforeQuery?(schemeNum:string,conditionMap:$.java.util.Map):$.java.util.Map;
            }
            type IDataCtrlCasePlugin_T = IDataCtrlCasePlugin_S & IDataCtrlCasePlugin$;
            interface IDataCtrlCasePlugin extends IDataCtrlCasePlugin_T {
            }
        }
        namespace kd.sdk.mpscmm.msbd.expoint.quote{
            interface QuoteDoParam_S {
            }
            interface QuoteDoParam_C extends QuoteDoParam_S {
                /**
                 * 数据集参数构造方法
                 *
                 * @param quoteDataSet  取价单据数据集
                 */
                new(quoteDataSet:$.kd.bos.algo.DataSet,quoteScheme:$.kd.bos.dataentity.entity.DynamicObject):QuoteDoParam;
            }
            interface QuoteDoParam$ {
                getPriceSourceFields():$.java.util.List;
                getQuoteDataSet():$.kd.bos.algo.DataSet;
                getQuoteScheme():$.kd.bos.dataentity.entity.DynamicObject;
                getResultSet():$.kd.bos.algo.DataSet;
                getRowKeyFields():$.java.util.List;
                getTerminateField():string;
                setPriceSourceFields(priceSourceFields:$.java.util.List):void;
                setQuoteDataSet(quoteDataSet:$.kd.bos.algo.DataSet):void;
                setQuoteScheme(quoteScheme:$.kd.bos.dataentity.entity.DynamicObject):void;
                setResultSet(resultSet:$.kd.bos.algo.DataSet):void;
                setRowKeyFields(rowKeyFields:$.java.util.List):void;
                setTerminateField(terminateField:string):void;
            }
            type QuoteDoParam_T = QuoteDoParam_S & QuoteDoParam$;
            interface QuoteDoParam extends QuoteDoParam_T {
            }
            interface QuoteFilterParam_S {
            }
            interface QuoteFilterParam_C extends QuoteFilterParam_S {
                /**
                 * @param quotePreFilter 取价前置条件
                 * @param sourceFilter 价格来源条件
                 * @param quoteScheme 取价方案
                 * @param calcStratege 计算策略
                 */
                new(quotePreFilter:$.kd.bos.orm.query.QFilter,sourceFilter:$.kd.bos.orm.query.QFilter,quoteScheme:$.kd.bos.dataentity.entity.DynamicObject,calcStratege:$.kd.bos.dataentity.entity.DynamicObject):QuoteFilterParam;
            }
            interface QuoteFilterParam$ {
                getCalcStratege():$.kd.bos.dataentity.entity.DynamicObject;
                getQuotePreFilter():$.kd.bos.orm.query.QFilter;
                getQuotePreFilterDesc():string;
                getQuoteScheme():$.kd.bos.dataentity.entity.DynamicObject;
                getSourceFilter():$.kd.bos.orm.query.QFilter;
                getSourceFilterDesc():$.kd.bos.orm.query.QFilter;
                setCalcStratege(calcStratege:$.kd.bos.dataentity.entity.DynamicObject):void;
                setQuotePreFilter(quotePreFilter:$.kd.bos.orm.query.QFilter):void;
                setQuotePreFilterDesc(quotePreFilterDesc:string):void;
                setQuoteScheme(quoteScheme:$.kd.bos.dataentity.entity.DynamicObject):void;
                setSourceFilter(sourceFilter:$.kd.bos.orm.query.QFilter):void;
                setSourceFilterDesc(sourceFilterDesc:$.kd.bos.orm.query.QFilter):void;
            }
            type QuoteFilterParam_T = QuoteFilterParam_S & QuoteFilterParam$;
            interface QuoteFilterParam extends QuoteFilterParam_T {
            }
            interface IQuoteCasePlugin_S {
            }
            interface IQuoteCasePlugin$ {
                /**
                 * 该方法可用于重置取价数据集，
                 * 说明：参数中的数据集对象都是经过取价服务梳理过的带别名的数据集，请参考原有梳理过的数据集进行数据集补充或重置逻辑
                 *
                 * @param  e 查询条件参数
                 * @return boolean 返回boolean true：需要回收原始取价单据数据集  false：不回收取价单据数据集
                 */
                doQuote?(e:QuoteDoParam):boolean;
                /**
                 * 是否完全自定义替代取价过程逻辑
                 *
                 * @param quoteScheme 取价方案
                 * @return true: 由插件自定义取价数据集匹配和整理逻辑  false:沿用标准产品逻辑
                 */
                isReplaceQuote?(quoteScheme:$.kd.bos.dataentity.entity.DynamicObject):boolean;
                /**
                 * 该方法可用于重置取价前置条件
                 * @param  e 查询条件参数
                 * @return true: 成功  false:失败
                 */
                preQuote?(e:QuoteFilterParam):boolean;
            }
            type IQuoteCasePlugin_T = IQuoteCasePlugin_S & IQuoteCasePlugin$;
            interface IQuoteCasePlugin extends IQuoteCasePlugin_T {
            }
        }
        namespace kd.sdk.mpscmm.msbd.expoint.workbench{
            interface IWorkBenchPlugin_S {
            }
            interface IWorkBenchPlugin$ {
                /**
                 * 获取业务员和业务组
                 *
                 * @param bizData        整体数据
                 * @param entryRowData   一行分录的数据，如任务不是按分录行生成，该值为null
                 * @param genTaskByEntry 是否按分录行生成任务，true-是 false-否
                 * @return 业务员和业务组
                 */
                getBizOperatorAndGroup?(bizData:$.kd.bos.dataentity.entity.DynamicObject,entryRowData:$.kd.bos.dataentity.entity.DynamicObject,genTaskByEntry:boolean):BizOperatorAndGroup;
                /**
                 * 字段准备，输出工作台计算业务员和业务组需要用到的字段
                 *
                 * @param entityNumber 实体标识
                 * @param domainNumber 领域标识
                 * @return 需要用到的字段set
                 */
                preparePropertys?(entityNumber:string,domainNumber:string):$.java.util.Set;
            }
            type IWorkBenchPlugin_T = IWorkBenchPlugin_S & IWorkBenchPlugin$;
            interface IWorkBenchPlugin extends IWorkBenchPlugin_T {
            }
            interface BizOperatorAndGroup_S {
            }
            interface BizOperatorAndGroup_C extends BizOperatorAndGroup_S {
                new():BizOperatorAndGroup;
            }
            interface BizOperatorAndGroup$ {
                getGroup():$.kd.bos.dataentity.entity.DynamicObject;
                getOperator():$.kd.bos.dataentity.entity.DynamicObject;
                setGroup(group:$.kd.bos.dataentity.entity.DynamicObject):void;
                setOperator(operator:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type BizOperatorAndGroup_T = BizOperatorAndGroup_S & BizOperatorAndGroup$;
            interface BizOperatorAndGroup extends BizOperatorAndGroup_T {
            }
        }
        namespace kd.sdk.mpscmm.mscon{
            interface SdkMsconModule_S {
            }
            type SdkMsconModule_ST = $.kd.sdk.module.Module & SdkMsconModule_S;
            interface SdkMsconModule_C extends SdkMsconModule_ST {
                new():SdkMsconModule;
            }
            interface SdkMsconModule$ {
            }
            type SdkMsconModule_T = $.kd.sdk.module.Module & SdkMsconModule_S & SdkMsconModule$;
            interface SdkMsconModule extends SdkMsconModule_T {
            }
        }
        namespace kd.sdk.mpscmm.mscon.extpoint.documentedit{
            interface IDocumentPlugin_S {
            }
            interface IDocumentPlugin$ {
                /**
                 * @Description 文档 “另存为”后处理事件
                 */
                afterSaveAsDocument?(event:kd.sdk.mpscmm.mscon.extpoint.documentedit.events.AfterSaveAsDocumentEvent):void;
                /**
                 * @Description 文档列表“初始化”前处理事件
                 */
                beforeOpenDocumentList?(event:kd.sdk.mpscmm.mscon.extpoint.documentedit.events.BeforeOpenDocumentListEvent):void;
                /**
                 * @Description 文档“另存为”页面打开前处理事件
                 */
                beforeOpenSaveAsForm?(event:kd.sdk.mpscmm.mscon.extpoint.documentedit.events.BeforeOpenSaveAsFormEvent):void;
                /**
                 * @Description “变量替换”前处理事件
                 */
                beforeReplaceVariable?(event:kd.sdk.mpscmm.mscon.extpoint.documentedit.events.BeforeReplaceVariableEvent):void;
                /**
                 * @Description 文档 “另存为”前处理事件
                 */
                beforeSaveAsDocument?(event:kd.sdk.mpscmm.mscon.extpoint.documentedit.events.BeforeSaveAsDocumentEvent):void;
            }
            type IDocumentPlugin_T = IDocumentPlugin_S & IDocumentPlugin$;
            interface IDocumentPlugin extends IDocumentPlugin_T {
            }
        }
        namespace kd.sdk.mpscmm.mscon.extpoint.documentedit.events{
            interface BeforeOpenSaveAsFormEvent_S {
            }
            interface BeforeOpenSaveAsFormEvent_C extends BeforeOpenSaveAsFormEvent_S {
                new(dataEntity:$.kd.bos.dataentity.entity.DynamicObject):BeforeOpenSaveAsFormEvent;
            }
            interface BeforeOpenSaveAsFormEvent$ {
                getCustomParam():$.java.util.Map;
                getDataEntity():$.kd.bos.dataentity.entity.DynamicObject;
                getDocType():string;
                getDocTypeList():$.java.util.List;
                getFileName():string;
                getPosition():string;
                getPositionList():$.java.util.List;
                getSaveAsFormId():string;
                setCustomParam(customParam:$.java.util.Map):void;
                setDocType(docType:string):void;
                setDocTypeList(docTypeList:$.java.util.List):void;
                setFileName(fileName:string):void;
                setPosition(position:string):void;
                setPositionList(positionList:$.java.util.List):void;
                setSaveAsFormId(saveAsFormId:string):void;
            }
            type BeforeOpenSaveAsFormEvent_T = BeforeOpenSaveAsFormEvent_S & BeforeOpenSaveAsFormEvent$;
            interface BeforeOpenSaveAsFormEvent extends BeforeOpenSaveAsFormEvent_T {
            }
            interface AfterSaveAsDocumentEvent_S {
            }
            interface AfterSaveAsDocumentEvent_C extends AfterSaveAsDocumentEvent_S {
                new():AfterSaveAsDocumentEvent;
            }
            interface AfterSaveAsDocumentEvent$ {
                dataEntity:$.kd.bos.dataentity.entity.DynamicObject;
                document:$.java.util.Map;
                getCustomParam():$.java.util.Map;
                getDataEntity():$.kd.bos.dataentity.entity.DynamicObject;
                getDocument():$.java.util.Map;
                setCustomParam(customParam:$.java.util.Map):void;
                setDataEntity(dataEntity:$.kd.bos.dataentity.entity.DynamicObject):void;
                setDocument(document:$.java.util.Map):void;
            }
            type AfterSaveAsDocumentEvent_T = AfterSaveAsDocumentEvent_S & AfterSaveAsDocumentEvent$;
            interface AfterSaveAsDocumentEvent extends AfterSaveAsDocumentEvent_T {
            }
            interface BeforeReplaceVariableEvent_S {
            }
            interface BeforeReplaceVariableEvent_C extends BeforeReplaceVariableEvent_S {
                new(dataEntity:$.kd.bos.dataentity.entity.DynamicObject):BeforeReplaceVariableEvent;
            }
            interface BeforeReplaceVariableEvent$ {
                getCustomParam():$.java.util.Map;
                getDataEntity():$.kd.bos.dataentity.entity.DynamicObject;
                getMark():string;
                getValue():any;
                setCustomParam(customParam:$.java.util.Map):void;
                setMark(mark:string):void;
                setValue(value:any):void;
            }
            type BeforeReplaceVariableEvent_T = BeforeReplaceVariableEvent_S & BeforeReplaceVariableEvent$;
            interface BeforeReplaceVariableEvent extends BeforeReplaceVariableEvent_T {
            }
            interface BeforeOpenDocumentListEvent_S {
            }
            interface BeforeOpenDocumentListEvent_C extends BeforeOpenDocumentListEvent_S {
                new(dataEntity:$.kd.bos.dataentity.entity.DynamicObject):BeforeOpenDocumentListEvent;
            }
            interface BeforeOpenDocumentListEvent$ {
                getCustomParam():$.java.util.Map;
                getDataEntity():$.kd.bos.dataentity.entity.DynamicObject;
                getDocuments():$.java.util.List;
                isShowListForm():boolean;
                setCustomParam(customParam:$.java.util.Map):void;
                setDataEntity(dataEntity:$.kd.bos.dataentity.entity.DynamicObject):void;
                setDocuments(documents:$.java.util.List):void;
                setShowListForm(showListForm:boolean):void;
            }
            type BeforeOpenDocumentListEvent_T = BeforeOpenDocumentListEvent_S & BeforeOpenDocumentListEvent$;
            interface BeforeOpenDocumentListEvent extends BeforeOpenDocumentListEvent_T {
            }
            interface BeforeSaveAsDocumentEvent_S {
            }
            interface BeforeSaveAsDocumentEvent_C extends BeforeSaveAsDocumentEvent_S {
                new():BeforeSaveAsDocumentEvent;
            }
            interface BeforeSaveAsDocumentEvent$ {
                dataEntity:$.kd.bos.dataentity.entity.DynamicObject;
                document:$.java.util.Map;
                getCustomParam():$.java.util.Map;
                getDataEntity():$.kd.bos.dataentity.entity.DynamicObject;
                getDocument():$.java.util.Map;
                isCancel():boolean;
                setCancel(cancel:boolean):void;
                setCustomParam(customParam:$.java.util.Map):void;
                setDataEntity(dataEntity:$.kd.bos.dataentity.entity.DynamicObject):void;
                setDocument(document:$.java.util.Map):void;
            }
            type BeforeSaveAsDocumentEvent_T = BeforeSaveAsDocumentEvent_S & BeforeSaveAsDocumentEvent$;
            interface BeforeSaveAsDocumentEvent extends BeforeSaveAsDocumentEvent_T {
            }
        }
        namespace kd.sdk.mpscmm.msmob{
            interface SdkMsmobModule_S {
            }
            type SdkMsmobModule_ST = $.kd.sdk.module.Module & SdkMsmobModule_S;
            interface SdkMsmobModule_C extends SdkMsmobModule_ST {
                new():SdkMsmobModule;
            }
            interface SdkMsmobModule$ {
            }
            type SdkMsmobModule_T = $.kd.sdk.module.Module & SdkMsmobModule_S & SdkMsmobModule$;
            interface SdkMsmobModule extends SdkMsmobModule_T {
            }
        }
        namespace kd.sdk.mpscmm.msmob.expoint{
            interface IMobOpenApiUrlMapping_S {
            }
            interface IMobOpenApiUrlMapping$ {
                /**
                 * 返回原厂接口跟二开接口的地址映射关系
                 * @return key=原厂的接口地址是,value=二开的接口地址
                 */
                urlMapping?():$.java.util.Map;
            }
            type IMobOpenApiUrlMapping_T = IMobOpenApiUrlMapping_S & IMobOpenApiUrlMapping$;
            interface IMobOpenApiUrlMapping extends IMobOpenApiUrlMapping_T {
            }
            interface IMobOperationDataTransferPlugin_S {
            }
            interface IMobOperationDataTransferPlugin$ {
                /**
                 * 插件的beforeDoOperation中会调用这个方法
                 * @param plugIn  传个plugIn作为参数可能让你觉得有点奇怪。这样的目的是考虑到这个方法里可能需要读取pageCache之类的东西。
                 * @param args
                 */
                beforeDoOperation?(plugIn:$.kd.bos.bill.AbstractMobBillPlugIn,args:$.kd.bos.form.events.BeforeDoOperationEventArgs):void;
                /**
                 * 返回PC实体对象。
                 * @param operationKey
                 * @param pcEntityKey
                 * @param mobDataEntity
                 * @return
                 */
                executeWithEntity?(operationKey:string,pcEntityKey:string,mobDataEntity:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
            }
            type IMobOperationDataTransferPlugin_T = IMobOperationDataTransferPlugin_S & IMobOperationDataTransferPlugin$;
            interface IMobOperationDataTransferPlugin extends IMobOperationDataTransferPlugin_T {
            }
            interface IMobHomePageCustomDataPlugin_S {
            }
            interface IMobHomePageCustomDataPlugin$ {
                /**
                 * 删除二开无权待办业务模块
                 * 注意 ：
                 * 不要修改对单据视图对象
                 * 不用操作操作对应的二开菜单项标识集合
                 *
                 * @param view    对应的表单视图
                 * @param extKeys 二开待办块标识集合
                 * @return 返回需要删除待办业务模块标识集
                 */
                deleteWithoutPermissionCard?(view:$.kd.bos.form.IFormView,extKeys:$.java.util.Set):$.java.util.Set;
                /**
                 * 返回需要删除的二开菜单标识
                 * 注意 ：
                 * 不要修改对单据视图对象
                 * 不用操作操作对应的二开菜单项标识集合
                 *
                 * @param view    对应的表单视图
                 * @param extKeys 二开菜单项标识集合
                 * @return 需要删除无权的菜单模块标识
                 */
                deleteWithoutPermissionMenu?(view:$.kd.bos.form.IFormView,extKeys:$.java.util.Set):$.java.util.Set;
                /**
                 * 获取需要二开项的appId
                 * 只能删除对应应用的二开项
                 *
                 * @return
                 */
                getAppId():string;
            }
            type IMobHomePageCustomDataPlugin_T = IMobHomePageCustomDataPlugin_S & IMobHomePageCustomDataPlugin$;
            interface IMobHomePageCustomDataPlugin extends IMobHomePageCustomDataPlugin_T {
            }
            interface IMobBotpResultHandlerPlugin_S {
            }
            interface IMobBotpResultHandlerPlugin$ {
                /**
                 * 用于供应链移动端客户现场自己处理BOTP下推过程中产生的异常信息
                 * 二开实现onBotpFailed方法，并处理异常信息。
                 * 如果要弹出异常信息并阻断后续程序运行，一般可以使用：throw new KDBizException(messageStr);
                 * 当二开没有抛出异常，将异常信息的处理权交回给原厂代码处理。
                 * 当二开抛出异常，异常信息由二开处理，原厂的代码不处理。
                 * 注意：这里的扩展插件的作用范围是供应链移动端项目组开发的全部下推场景。因此如果二开只想处理某些特定单据的下推异常信息，最好是在代码中根据单据类型做判断。
                 */
                onBotpFailed?(convertResult:$.kd.bos.entity.botp.runtime.ConvertOperationResult):void;
            }
            type IMobBotpResultHandlerPlugin_T = IMobBotpResultHandlerPlugin_S & IMobBotpResultHandlerPlugin$;
            interface IMobBotpResultHandlerPlugin extends IMobBotpResultHandlerPlugin_T {
            }
            interface MsmobExpandCaseCodes_S {
                readonly SCMC_MSMOB_CUSTOM_DELETE_REGION:string;
                readonly SCMC_MSMOB_MOB_LIST_EXPAND_FITER:string;
            }
            interface MsmobExpandCaseCodes_C extends MsmobExpandCaseCodes_S {
                new():MsmobExpandCaseCodes;
            }
            interface MsmobExpandCaseCodes$ {
            }
            type MsmobExpandCaseCodes_T = MsmobExpandCaseCodes_S & MsmobExpandCaseCodes$;
            interface MsmobExpandCaseCodes extends MsmobExpandCaseCodes_T {
            }
        }
        namespace kd.sdk.mpscmm.msrcs{
            interface SdkMsrcsModule_S {
            }
            type SdkMsrcsModule_ST = $.kd.sdk.module.Module & SdkMsrcsModule_S;
            interface SdkMsrcsModule_C extends SdkMsrcsModule_ST {
                new():SdkMsrcsModule;
            }
            interface SdkMsrcsModule$ {
            }
            type SdkMsrcsModule_T = $.kd.sdk.module.Module & SdkMsrcsModule_S & SdkMsrcsModule$;
            interface SdkMsrcsModule extends SdkMsrcsModule_T {
            }
        }
        namespace kd.sdk.mpscmm.msrcs.extpoint{
            interface IRebatePlugin_S {
            }
            interface IRebatePlugin$ {
                /**
                 * 自定义 政策目标分组的标识
                 * 用于返利计算的目标解析性能优化，二开可以根据具体情况进行定制化分组来优化返利计算性能：
                 * 举例：
                 * 每条目标单独进行解析，不分组优化 						return String.valueOf(target.getLong("id"));
                 * 标准产品按返利政策+开始时间+结束时间+修改时间 进行分组优化	return String.join("#",
                 *  			  									String.valueOf(DynamicObjectUtils.getDynamicObjectLPkValue(target, MsrcsRebateTarget.F_POLICY)),
                 *   			  									DateUtil.getDateTimeFormat(target.getDate( MsrcsRebateTarget.F_STARTTIME)),
                 *   			  									DateUtil.getDateTimeFormat(target.getDate( MsrcsRebateTarget.F_ENDTIME)),
                 *   			  									DateUtil.getDateTimeFormat(target.getDate( MsrcsRebateTarget.F_MODIFYTIME)));
                 * @param target		政策目标
                 * @return				政策目标分组key字符串
                 */
                buildTargetGroupKey?(target:$.kd.bos.dataentity.entity.DynamicObject):string;
            }
            type IRebatePlugin_T = IRebatePlugin_S & IRebatePlugin$;
            interface IRebatePlugin extends IRebatePlugin_T {
            }
        }
        namespace kd.sdk.scmc.conm{
            interface SdkScmcConmModule_S {
            }
            type SdkScmcConmModule_ST = $.kd.sdk.module.Module & SdkScmcConmModule_S;
            interface SdkScmcConmModule_C extends SdkScmcConmModule_ST {
                new():SdkScmcConmModule;
            }
            interface SdkScmcConmModule$ {
            }
            type SdkScmcConmModule_T = $.kd.sdk.module.Module & SdkScmcConmModule_S & SdkScmcConmModule$;
            interface SdkScmcConmModule extends SdkScmcConmModule_T {
            }
        }
        namespace kd.sdk.scmc.conm.extpoint{
            interface IWebOfficePlugin_S {
            }
            interface IWebOfficePlugin$ {
                /**
                 * 变量替换时，针对不同的书签变量可以自定义对应的值
                 * @param bill 当前单据对象
                 * @param mark 书签名称
                 * @return 变量值
                 */
                replaceMark(bill:$.kd.bos.dataentity.entity.DynamicObject,mark:string):any;
            }
            type IWebOfficePlugin_T = IWebOfficePlugin_S & IWebOfficePlugin$;
            interface IWebOfficePlugin extends IWebOfficePlugin_T {
            }
            interface IXContractPlugin_S {
            }
            interface IXContractPlugin$ {
                /**
                 * 合同变更单生效，同步修改原合同分录和单头状态
                 * @param srcBills  原单数据，采购合同、销售合同
                 * @param xBills    变更单数据，采购合同变更单、销售合同变更单
                 * @return 同步结果，默认返回true, 要求同步成功返回：true 失败返回：false
                 */
                activeSynContractStatus?(srcBills:$.kd.bos.dataentity.entity.DynamicObject[],xBills:$.kd.bos.dataentity.entity.DynamicObject[]):boolean;
            }
            type IXContractPlugin_T = IXContractPlugin_S & IXContractPlugin$;
            interface IXContractPlugin extends IXContractPlugin_T {
            }
        }
        namespace kd.sdk.scmc.im{
            interface SdkScmcImModule_S {
            }
            type SdkScmcImModule_ST = $.kd.sdk.module.Module & SdkScmcImModule_S;
            interface SdkScmcImModule_C extends SdkScmcImModule_ST {
                new():SdkScmcImModule;
            }
            interface SdkScmcImModule$ {
            }
            type SdkScmcImModule_T = $.kd.sdk.module.Module & SdkScmcImModule_S & SdkScmcImModule$;
            interface SdkScmcImModule extends SdkScmcImModule_T {
            }
        }
        namespace kd.sdk.scmc.im.acct{
            interface DateHelper_S {
                /**
                 * 某组织的最后关账日期
                 */
                getCloseDate(orgID:long):Date;
                /**
                 * 获得库存组织的启用日期
                 */
                getInvStartedDate(orgID:long):Date;
                /**
                 * 从仓库设置中，获得某个仓库的初始化日期
                 */
                getWarehouseInitDate(warehouseIDs:long[]):$.java.util.Map;
            }
            interface DateHelper_C extends DateHelper_S {
                new():DateHelper;
            }
            interface DateHelper$ {
            }
            type DateHelper_T = DateHelper_S & DateHelper$;
            interface DateHelper extends DateHelper_T {
            }
            interface InvSchemeHelper_S {
                /**
                 * 根据库存事务获取默认入库库存类型
                 */
                getDefaltInvtype(invScheme:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 根据库存事务获取默认出库库存类型
                 */
                getDefaltOutInvtype(invScheme:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 根据库存事务获取默认入库库存状态
                 */
                getDefaultInvStatus(invScheme:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 根据库存事务获取默认入库库存状态
                 */
                getDefaultOutInvStatus(invScheme:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 根据单据和业务类型获得库存事务定义
                 */
                getInvSchemeByEntityAndBizType(billFormID:string,bizTypeID:long):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 根据单据获得库存事务定义，仅用于打开时校验
                 */
                getInvSchemeByEntityID(entityID:string):$.java.util.List;
                /**
                 * 根据库存事务获取默认入库库存类型集合
                 */
                getInvtypes(invScheme:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.List;
                /**
                 * 根据库存事务获取默认出库库存类型集合
                 */
                getOutInvtypes(invScheme:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.List;
                /**
                 * 设置特殊库存事务相关控制
                 *
                 * @author rd_qirui_chen
                 */
                setSpecialEnable(view:$.kd.bos.form.IFormView,invScheme:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 设置库存事务相关展示信息
                 *
                 * @param view
                 * @param isInUpdate
                 * @param isOutUpdate
                 */
                setViewByUpdate(view:$.kd.bos.form.IFormView,isInUpdate:boolean,isOutUpdate:boolean):void;
            }
            interface InvSchemeHelper_C extends InvSchemeHelper_S {
                new():InvSchemeHelper;
            }
            interface InvSchemeHelper$ {
            }
            type InvSchemeHelper_T = InvSchemeHelper_S & InvSchemeHelper$;
            interface InvSchemeHelper extends InvSchemeHelper_T {
            }
            interface InverseBillHelper_S {
                /**
                 * 获取红字字段，统一维护，在操作插件，表单插件，值改变事件中统一获取
                 */
                getNeedInverseColumns(billEntity:string):string[];
                /**
                 * 是否红字单，库存事务关联的收发类型，收发类型方向为反向时
                 *
                 * @return
                 */
                isNegativeBill(model:$.kd.bos.entity.datamodel.IDataModel):boolean;
                /**
                 * 设置红单需要相反数字为正数
                 */
                setInverseValues(model:$.kd.bos.entity.datamodel.IDataModel,needInverseColumns:string[]):void;
                /**
                 * 根据（是否红蓝单）类型展示行颜色
                 */
                setNegativeColumnColor(view:$.kd.bos.form.IFormView,redColumns:string[]):void;
            }
            interface InverseBillHelper_C extends InverseBillHelper_S {
                new():InverseBillHelper;
            }
            interface InverseBillHelper$ {
            }
            type InverseBillHelper_T = InverseBillHelper_S & InverseBillHelper$;
            interface InverseBillHelper extends InverseBillHelper_T {
            }
            interface BillQtyAndUnitHelper_S {
                /**
                 * 描述：计算数量
                 * 已知：物料、基本数量、基本单位、计价单位、计价单位换算率
                 * 计算：计量数量、计量单位、计量换算率、业务数量、业务单位、业务换算率、计价数量
                 */
                getQty(material:$.kd.bos.dataentity.entity.DynamicObject,baseQty:$.java.math.BigDecimal,baseUnit:$.kd.bos.dataentity.entity.DynamicObject,unit:$.kd.bos.dataentity.entity.DynamicObject,unitRate:$.java.math.BigDecimal,bizUnit:$.kd.bos.dataentity.entity.DynamicObject,bizUnitRate:$.java.math.BigDecimal,priceUnit:$.kd.bos.dataentity.entity.DynamicObject,priceUnitRate:$.java.math.BigDecimal):$.java.util.Map;
                /**
                 * 描述： 获取两个单位的换算率
                 */
                getUnitRateConv(materialId:long,srcUnitId:long,desUnitId:long):$.java.math.BigDecimal;
                /**
                 * 数据和计量单位的变化，
                 * 引发基本单位、基本数量、业务单位、业务数量、换算率、业务单位换算率的变化 - TODO 盘点表未改造，使用中，盘点表改造后可删除
                 */
                setBizQtyAndUnit(bill:$.kd.bos.entity.datamodel.IDataModel,rowindex:number,fieldName:string,newValue:any):void;
                /**
                 * 判断数量大于系统预制数据的最大值9999999999999
                 *
                 * @param amount 数量
                 */
                showAmountErrorTip(amount:$.java.math.BigDecimal):void;
            }
            interface BillQtyAndUnitHelper_C extends BillQtyAndUnitHelper_S {
                new():BillQtyAndUnitHelper;
            }
            interface BillQtyAndUnitHelper$ {
            }
            type BillQtyAndUnitHelper_T = BillQtyAndUnitHelper_S & BillQtyAndUnitHelper$;
            interface BillQtyAndUnitHelper extends BillQtyAndUnitHelper_T {
            }
            interface BillUnitAndQtytHelper_S {
                getDesQtyConv(material:$.kd.bos.dataentity.entity.DynamicObject,srcUnit:$.kd.bos.dataentity.entity.DynamicObject,srcQty:$.java.math.BigDecimal,desUnit:$.kd.bos.dataentity.entity.DynamicObject):$.java.math.BigDecimal;
                /**
                 * 数据和计量单位的变化，
                 * 引发审核数量，基本单位、基本数量、业务单位、业务数量、换算率、业务单位换算率的变化
                 */
                setBizQtyAndUnitWithAuditQty(bill:$.kd.bos.entity.datamodel.IDataModel,rowindex:number,fieldName:string,newValue:any):void;
            }
            interface BillUnitAndQtytHelper_C extends BillUnitAndQtytHelper_S {
                new():BillUnitAndQtytHelper;
            }
            interface BillUnitAndQtytHelper$ {
            }
            type BillUnitAndQtytHelper_T = BillUnitAndQtytHelper_S & BillUnitAndQtytHelper$;
            interface BillUnitAndQtytHelper extends BillUnitAndQtytHelper_T {
            }
            interface SettleBillHelper_S {
                getGenerateSettleBills(billids:$.java.util.List):$.java.util.Map;
            }
            interface SettleBillHelper_C extends SettleBillHelper_S {
                new():SettleBillHelper;
            }
            interface SettleBillHelper$ {
            }
            type SettleBillHelper_T = SettleBillHelper_S & SettleBillHelper$;
            interface SettleBillHelper extends SettleBillHelper_T {
            }
            interface AuxQtyAndUnitHelper_S {
            }
            interface AuxQtyAndUnitHelper_C extends AuxQtyAndUnitHelper_S {
                new():AuxQtyAndUnitHelper;
            }
            interface AuxQtyAndUnitHelper$ {
                /**
                 * 批量获取物料计量单位
                 *
                 * @param materialIds
                 * @param convertType
                 * @return
                 * @author liuxian_liu
                 * @data 2019-12-19 15:57
                 */
                getAssistMUListResult(materialIds:$.java.util.List,convertType:string):$.java.util.Map;
                /**
                 * 获取物料辅助换算率
                 *
                 * @param pageCache
                 * @param material
                 * @return
                 * @author liuxian_liu
                 * @data 2020-03-10 21:30
                 */
                getAuxptyRateCache(pageCache:$.kd.bos.form.IPageCache,material:$.kd.bos.dataentity.entity.DynamicObject):$.java.math.BigDecimal;
                /**
                 * 处理主（次）辅计量单位、数量
                 *
                 * @param pageCache 页面缓存
                 * @param bill      单据数据模型
                 * @param rowindex  行号
                 * @param fieldName 改变字段
                 * @param newValue  新值
                 */
                setAuxBizQtyAndUnit(pageCache:$.kd.bos.form.IPageCache,bill:$.kd.bos.entity.datamodel.IDataModel,rowindex:number,fieldName:string,newValue:any):any;
                /**
                 * 判断数量换算大于系统预制数据的最大值9999999999999
                 *
                 * @param qtyAmount
                 */
                showQtyErrorTip(qtyAmount:$.java.math.BigDecimal):any;
            }
            type AuxQtyAndUnitHelper_T = AuxQtyAndUnitHelper_S & AuxQtyAndUnitHelper$;
            interface AuxQtyAndUnitHelper extends AuxQtyAndUnitHelper_T {
            }
            interface InvBillCalcHelper_S {
                /**
                 * BOTP 使用计算辅助数量
                 *
                 * @param entrycoll
                 * @param entityID
                 * @param cacheMap
                 * @return
                 */
                entryAuxptyQtyCalc(entry:$.kd.bos.dataentity.entity.DynamicObject,entityID:string,cacheMap:$.java.util.Map):void;
            }
            interface InvBillCalcHelper_C extends InvBillCalcHelper_S {
                new():InvBillCalcHelper;
            }
            interface InvBillCalcHelper$ {
            }
            type InvBillCalcHelper_T = InvBillCalcHelper_S & InvBillCalcHelper$;
            interface InvBillCalcHelper extends InvBillCalcHelper_T {
            }
            interface SdkAppParameterHelper_S {
                /**
                 * @param formId
                 * @param orgId
                 * @param key
                 * @return
                 */
                getAppParameterByFormId(formId:string,orgId:long,key:string):any;
            }
            interface SdkAppParameterHelper_C extends SdkAppParameterHelper_S {
                new():SdkAppParameterHelper;
            }
            interface SdkAppParameterHelper$ {
                /**
                 * 描述：获取应用参数。不知什么时候，上面的getAppParameter被平台标记为已过时...导致单据校验时获取不到参数...
                 *
                 * @author:RD_longger_yang 创建时间：2019年7月4日 <p>
                 */
                getAppParameter(appId:string,viewType:string,orgId:long,key:string):any;
                /**
                 * 按应用编码对应的应用参数
                 */
                getAppParameterByAppNumber(appNumber:string,orgViewType:string,orgId:long,key:string):any;
                /**
                 * 按实体获得实体所在的应用参数
                 */
                getBatchAppParameterByFormId(formId:string,orgIds:$.java.util.List):$.java.util.Map;
            }
            type SdkAppParameterHelper_T = SdkAppParameterHelper_S & SdkAppParameterHelper$;
            interface SdkAppParameterHelper extends SdkAppParameterHelper_T {
            }
        }
        namespace kd.sdk.scmc.im.extpoint{
            interface IInvCountSchemeAuditExpand_S {
            }
            interface IInvCountSchemeAuditExpand$ {
                /**
                 * 获取盘点方案-盘点表扩展字段的映射
                 * @return 盘点方案-盘点表扩展字段的映射集合
                 */
                getFieldMap():$.java.util.Map;
            }
            type IInvCountSchemeAuditExpand_T = IInvCountSchemeAuditExpand_S & IInvCountSchemeAuditExpand$;
            interface IInvCountSchemeAuditExpand extends IInvCountSchemeAuditExpand_T {
            }
            interface IInvEntrustExpand_S {
            }
            interface IInvEntrustExpand$ {
                /**
                 * 填充销售出库单单体字段
                 * @param salOutBillEntry 分录对象
                 */
                fillSaloutBillEntryField(salOutBillEntry:$.kd.bos.dataentity.entity.DynamicObject,entrustEntry:$.java.util.Map):void;
                /**
                 * 填充销售出库单单头字段
                 * @param salOutBill 单据对象
                 */
                fillSaloutBillHeadField(salOutBill:$.kd.bos.dataentity.entity.DynamicObject,entrustEntry:$.java.util.Map):void;
                /**
                 * 扩展查询委托代销清单字段
                 * @return 查询字段数组
                 */
                selectSaleAgencyField():string[];
            }
            type IInvEntrustExpand_T = IInvEntrustExpand_S & IInvEntrustExpand$;
            interface IInvEntrustExpand extends IInvEntrustExpand_T {
            }
            interface ImExpandCaseCodes_S {
                readonly INVQUERY_FILTERANDRETURN:string;
                readonly INV_COUNTSCHEMEAUDIT:string;
                readonly INV_ENTRUST:string;
                readonly INV_FILLBATCH:string;
                readonly INV_GROUPBILL:string;
                readonly INV_MATCHRULEOUT:string;
            }
            interface ImExpandCaseCodes_C extends ImExpandCaseCodes_S {
                new():ImExpandCaseCodes;
            }
            interface ImExpandCaseCodes$ {
            }
            type ImExpandCaseCodes_T = ImExpandCaseCodes_S & ImExpandCaseCodes$;
            interface ImExpandCaseCodes extends ImExpandCaseCodes_T {
            }
            interface IInvQueryExpand_S {
                readonly FILTER:string;
            }
            interface IInvQueryExpand$ {
                /**
                 * 库存查询返回行后的处理,常用于在库存查询返回后再对界面数据做一些额外处理，例如希望触发某些值的值改变，以及返回值后需要再对某些值进行更新且取值逻辑比较复杂(不是来自于即时库存查询字段或固定值)
                 * @param view 界面视图对象
                 * @param entrykey 选中的单据分录标识
                 * @param chooseRow 用户选中的行号(如未选中行,则值等于-1)
                 * @param currentRow 当前处理的行号
                 * @param operatekey 操作代码(如直接调拨单的调入和调出库存查询对应不同的操作代码)
                 */
                afterReturnRow?(view:$.kd.bos.form.IFormView,entrykey:string,chooseRow:number,currentRow:number,operatekey:string):void;
                /**
                 * 库存查询返回新增行前的处理,常用于在库存查询返回新增行前对新增行赋默认值,且默认值取值逻辑比较复杂(不是来自于即时库存查询字段或固定值)
                 * @param view 界面视图对象
                 * @param entrykey 选中的单据分录标识
                 * @param chooseRow 用户选中的行号(如未选中行,则值等于-1)
                 * @param currentRow 当前新增的行号
                 * @param operatekey 操作代码(如直接调拨单的调入和调出库存查询对应不同的操作代码)
                 */
                beforeCreateRow?(view:$.kd.bos.form.IFormView,entrykey:string,chooseRow:number,currentRow:number,operatekey:string):void;
                /**
                 * 加工库存查询处理返回值
                 * @param view 当前单据的view对象
                 * @param returnData 库存查询返回值
                 */
                dealReturnData?(view:$.kd.bos.form.IFormView,returnData:any):void;
                /**
                 * 获取库存查询扩展QFilter,此部分扩展的过滤条件来自于打开库存查询前的单据页面<br/>
                 *  用于当标准库存查询配置设置的字段映射不足以满足的特殊业务需求,例如某些特殊单据,需要控制只能选择特定属性的物料/仓库等(例如,希望只能选择"可资产"类型的物料)
                 * @param view 打开库存查询前的单据页面视图对象
                 * @param entrykey 选中的单据分录标识
                 * @param row 选中的行号(如当前未选中行,则row值等于-1)
                 * @param operatekey 操作代码(如直接调拨单的调入和调出库存查询对应不同的操作代码)
                 * @param filterMap 处理后的filter对象(使用key="filter"获取),可在后续插件中叠加处理上一个插件返回的QFilter<br/>
                 * 可以通过QFilter filter = filterMap.get(FILTER)得到当前的扩展QFilter对象,对filter处理完毕后,再使用filterMap.put(FILTER, filter)写回至map中,以改写扩展的过滤条件<br/>
                 * 注意,不可以改写通过库存查询配置中字段映射设置的过滤条件,如有需要请直接在规则中进行配置，本扩展仅可对无法通过库存查询配置进行配置的过滤条件进行扩展
                 */
                getExpandFilter?(view:$.kd.bos.form.IFormView,entrykey:string,row:number,operatekey:string,filterMap:$.java.util.Map):void;
                /**
                 * 获取库存查询扩展QFilter,此部分扩展的过滤条件来自于"物料即时库存查询"页面本身扩展的查询条件字段
                 * @param view "物料即时库存查询"页面视图对象
                 * @return "物料即时库存查询"页面上扩展查询条件字段所增加的过滤条件
                 */
                getExpandFilterFromQueryView?(view:$.kd.bos.form.IFormView):$.kd.bos.orm.query.QFilter;
                /**
                 *  获取库存查询扩展返回单据字段逻辑集合<br/>
                 *  用于当标准库存查询配置设置的返回单据字段不足以满足的特殊业务需求<br/>
                 *  例如,希望返回数据时固定将某个字段赋值,希望将一个即时库存查询字段返回到多个单据字段上(标准配置只支持一个字段返回到一个单据字段)<br/>
                 *  @param view 界面视图对象
                 *  @param entrykey 选中的单据分录标识
                 *  @param row 选中的行号(如当前未选中行,则row值等于-1)
                 *  @param operatekey 操作代码(如直接调拨单的调入和调出库存查询对应不同的操作代码)
                 *  @return 需要返回到单据的字段逻辑集合(如果没有扩展则返回一个空集合,如Collections.emptyList())<br/>
                 *  返回对象是一个Map<String,String>集合,支持返回固定值和从即时库存字段取值两种形式,示例如下：<br/>
                 *  如果需要在返回数据时,将价格字段固定设置为"1000",以及库存查询的批号字段除了返回到单据上的批号字段(已在标准规则中配置)以外,还希望同时返回到备注上<br/>
                 * 则返回 [{key="billentry.entrycomment", type="acc",formula="lotnum"}, <br/>
                 *  {key="billentry.price", type="fix",formula="1000"}]<br/>
                 * 其中,key代表单据字段,type当前支持acc(从库存查询字段返回)和fix(固定值)。<br/>
                 * 当type="acc"时,formula代表对应的库存查询字段;当type="fix"时,formula代表当前的固定值
                 */
                getExpandUpdateFields?(view:$.kd.bos.form.IFormView,entrykey:string,row:number,operatekey:string):$.java.util.List;
            }
            type IInvQueryExpand_T = IInvQueryExpand_S & IInvQueryExpand$;
            interface IInvQueryExpand extends IInvQueryExpand_T {
            }
            interface IInvBatchFillExpand_S {
            }
            interface IInvBatchFillExpand$ {
                /**
                 * 获取批量填充可用字段
                 * @param entity 表单标识
                 * @return 需要扩展填充的字段集合
                 */
                getFieldKey(entity:string):$.java.util.List;
            }
            type IInvBatchFillExpand_T = IInvBatchFillExpand_S & IInvBatchFillExpand$;
            interface IInvBatchFillExpand extends IInvBatchFillExpand_T {
            }
            interface IInvMatchruleoutExpand_S {
                readonly RETURNROW_EXPENDVALUES:string;
                readonly RETURNROW_QTY:string;
                readonly RETURNROW_QTYCOL:string;
                readonly RETURNROW_ROWINDEX:string;
                readonly RETURNROW_ROWNUMS:string;
            }
            interface IInvMatchruleoutExpand$ {
                /**
                 * 扩展匹配规则出库时的库存即时余额过滤条件
                 *
                 * @param getValue 获取单据值方法，通过getEntryValue.apply(分录.分录字段)，即可获取当前行的分录值，getEntryValue.apply(单头字段)，可获取单头字段值
                 * @param formId 单据实体
                 * @param entryKey 分录键值
                 * @return 库存即时余额过滤条件集合
                 */
                getFilter?(func0:(t:any)=>any,formId:string,entryKey:string):$.java.util.List;
                /**
                 * 指定额外需要传递到handleAfter方法中的、执行匹配规则出库操作前的字段原值的字段标识。<br/>
                 * 例如，二开扩展希望在拆分后对新增的扩展字段“重量”进行重新计算，计算时需要使用到拆分前的重量的原值,可在本方法中指定该字段标识，字段原值会额外添加到handleAfter的returnRows中
                 * @param billtype 单据类型
                 * @param entrykey 分录标识
                 * @return 需要额外需要传递到后续handleAfter方法中的、执行匹配规则出库操作前的字段原值的字段标识
                 */
                getHandleNeedFields?(billtype:string,entrykey:string):$.java.util.List;
                /**
                 *  库存单据匹配规则出库后处理扩展,本扩展方法用于支持在标准匹配规则出库返回单据字段处理完成后、页面执行刷新显示以前,二开场景可对其它字段进行额外赋值处理
                 *  @param view 界面视图对象
                 *  @param entrykey 分录标识
                 *  @param returnRows 匹配规则出库后涉及的行信息<br/>
                 *  returnRows传参示例如下:<br/>
                 *  假设分录下已有5个分录行,操作用户选择了第1,2,4行(index分别为0,1,3),点击匹配规则出库,此三行分别匹配返回了2行/0行(没有匹配到库存)/1行<br/>
                 *  返回后,将在原第1行(原index=0)后新增1行(返回2行,1行匹配,1行在对应选中行后新增),变成6个分录行，由于在第一行后插入了行.原index=1之后的行index将逐个加1<br/>
                 * returnRows中的信息即包括了匹配拆行后,对应的行标识和匹配行数信息以及相应的字段拆分前原值,如上例,将返回一个长度为3的List<br/>
                 * [{returnRowNums=2, returnRowIndex=0, qty=5.0000, qtyCol="qty", expandNeedFieldValues={weight=30,volumn=12} }, <br/>
                 *  {returnRowNums=0, returnRowIndex=2, qty=10.0000, qtyCol="qty", expandNeedFieldValues={} }, <br/>
                 *  {returnRowNums=1, returnRowIndex=4, qty=3.0000, qtyCol="qty", expandNeedFieldValues={weight=50,volumn=15} }]<br/>
                 *  其中,returnRowNums代表原第一个选中行匹配到的返回行数,分别为2/0/1<br/>
                 * returnRowIndex代表,匹配后的原选中行新的index，分别为0/2/4(即第1/3/5行,因中间插入了一行,原选中的第2和4行匹配后变成了第3和第5行) <br/>
                 * qty代表,匹配前原选中行的数量,即拆分前的数量 <br/>
                 * qtyCol代表,该行匹配时使用的数量字段标识,通常是"qty" <br/>
                 * expandNeedFieldValues代表,匹配前原选中行的其它额外需要的字段的原值(需要的字段在getHandleNeedFields中指定，如getHandleNeedFields中指定了"weight"和"volumn",则会将这两个字段拆分前的值传递到returnRows中)<br/>
                 * 此外,returnRowNums=0时,expandNeedFieldValues为空集合(无匹配行，无需拆分行)
                 */
                handleAfter?(view:$.kd.bos.form.IFormView,entrykey:string,returnRows:$.java.util.List):void;
            }
            type IInvMatchruleoutExpand_T = IInvMatchruleoutExpand_S & IInvMatchruleoutExpand$;
            interface IInvMatchruleoutExpand extends IInvMatchruleoutExpand_T {
            }
        }
        namespace kd.sdk.scmc.im.service{
            interface MatchingRuleOutService_S {
                readonly OUTRULE_CALLBACK:string;
                /**
                 * 获取MatchingRuleOutService实例对象
                 *  @return MatchingRuleOutService实例对象
                 */
                get():MatchingRuleOutService;
            }
            interface MatchingRuleOutService$ {
                /**
                 * 当匹配规则出库存在匹配不足的情况时，可能弹出用户确认的窗口，此方法用于匹配规则出库弹窗处理(界面插件confirmCallBack调用), 需要与execMatchingFromView同时使用
                 *  @param view 单据页面视图对象
                 *  @param e 消息弹窗关闭事件对象
                 * <p>示例：接execMatchingFromView示例,在formPlugin的confirmCallBack方法中调用本api
                 * 	 <pre><code>
                 * 	 public void confirmCallBack(MessageBoxClosedEvent e) {
                 *         super.confirmCallBack(e);
                 *         String callBackId = e.getCallBackId();
                 *         if (MatchingRuleOutService.OUTRULE_CALLBACK.equals(callBackId)) {
                 *             kd.sdk.scmc.im.service.MatchingRuleOutService matchingRuleOutService = kd.sdk.scmc.im.service.MatchingRuleOutService.get();
                 *             matchingRuleOutService.confirmCallBack(getView(), e);
                 *         }
                 *     }
                 * 	 </code></pre>
                 */
                confirmCallBack(view:$.kd.bos.form.IFormView,e:$.kd.bos.form.events.MessageBoxClosedEvent):void;
                /**
                 *  将某行分录匹配到的数量，从缓存数据中删除。在删除分录时需调用此方法（在页面插件的beforeDeleteRow方法中调用），将缓存的数量退回。
                 *  @param index 分录行号，从0开始
                 *  @param view 页面view对象
                 *  @param entry 分录属性名
                 *  <p>示例，在界面插件的beforeDeleteRow()方法中调用此接口方法：
                 * 	 <pre><code>
                 * 	  public void beforeDeleteRow(BeforeDeleteRowEventArgs e) {
                 * 		  super.beforeDeleteRow(e);
                 * 		  int[] rowIndexs = e.getRowIndexs();
                 * 		  //调用api
                 * 		  kd.sdk.scmc.im.service.MatchingRuleOutService matchingRuleOutService = kd.sdk.scmc.im.service.MatchingRuleOutService.get();
                 * 		  for (int index : rowIndexs) {
                 * 			//删除数量缓存
                 * 			matchingRuleOutService.deleteMatchInfoPageCache(index, getView(), "billentry");
                 * 		  }
                 * 	  }
                 * 	  </code></pre>
                 */
                deleteMatchInfoPageCache(index:number,view:$.kd.bos.form.IFormView,entry:string):void;
                /**
                 *  执行匹配规则出库过程(从单据页面"匹配规则出库"按钮点击调用)
                 *  @param formPlugin 单据页面插件类
                 *  @param formid 单据实体元数据id
                 *  @param entry 匹配规则出库功能对应的分录标识
                 *  @param operatekey 匹配规则出库按钮的操作代码
                 *  @param view 单据页面视图对象
                 *  @param selectRows 选中行序号
                 * <p>示例：假设在二开单据元数据上增加了一个“匹配规则出库”按钮（按钮的操作代码为matchingruleout），若要调用标准的匹配规则出库功能，应在其formPlugin的beforeDoOperation方法中调用本api
                 * 	 <pre><code>
                 * 	 public void beforeDoOperation(BeforeDoOperationEventArgs args) {
                 *         super.beforeDoOperation(args);
                 *         String opKey = ((AbstractOperate) e.getSource()).getOperateKey();
                 *         switch (opKey) {
                 *             case "matchingruleout" :
                 *             	IFormView view = getView();
                 *             	String formid = getModel().getDataEntityType().getName();
                 *             	try {
                 *                     String msg = ResManager.loadKDString("正在匹配库存，请稍候", "XXXXXX", "XXXXXX");
                 *                     LocaleString info = new LocaleString(msg);
                 *                     view.showLoading(info);
                 *
                 *                     //取分录上选中行
                 *                     String entry = "billentry";
                 * 			        EntryGrid control = getControl(entry);
                 * 			        int[] selectRows = control.getSelectRows();
                 * 			        if (selectRows.length == 0) {
                 * 			            view.showTipNotification(ResManager.loadKDString("请选择要执行的数据。", "XXXXXX", "XXXXXX"));
                 * 			            return;
                 * 			        }
                 *
                 * 			        List<Integer> selectRowList = new ArrayList<>(selectRows.length);
                 * 			        for(int i = 0; i < selectRows.length; i++) {
                 * 			        	selectRowList.add(selectRows[i]);
                 * 			        }
                 *
                 * 			        //调用api
                 * 			        kd.sdk.scmc.im.service.MatchingRuleOutService matchingRuleOutService = kd.sdk.scmc.im.service.MatchingRuleOutService.get();
                 * 			        matchingRuleOutService.execMatchingFromView(this, formid, entry, opKey, view, selectRowList);
                 *                 } finally {
                 *                 	view.hideLoading();
                 *                 }
                 *                 break;
                 *         }
                 *     }
                 * 	 </code></pre>
                 */
                execMatchingFromView(formPlugin:$.kd.bos.form.plugin.IFormPlugin,formid:string,entry:string,operatekey:string,view:$.kd.bos.form.IFormView,selectRows:$.java.util.List):void;
                /**
                 * 得到匹配规则出库的拆分信息
                 * 如果需要在后台过程中，如自动生成的单据后，希望执行一次匹配规则出库过程，可以使用本api，根据返回的List<Map<String, Object>>对象上的拆分信息，对单据分录的DynamicObject进行拆分、复制
                 *  @param formid 单据实体元数据id
                 *  @param entry 匹配规则出库功能对应的分录标识
                 *  @param operatekey 匹配规则出库按钮的操作代码
                 *  @param billDynObj 单据动态实体对象
                 *  @param entriesDynObj 需要进行匹配的单据分录动态对象集合
                 *  @return 匹配结果
                 * <p>示例
                 * 	 <pre><code>
                 * 	 kd.sdk.scmc.im.service.MatchingRuleOutService matchingRuleOutService = kd.sdk.scmc.im.service.MatchingRuleOutService.get();
                 * 	 List<Map<String, Object>> entryInfoList = matchingRuleOutService.getMatchingResultFromDynobj(formid, "billentry", "matchingruleout", view.getModel().getDataEntity(), view.getModel().getEntryEntity("billentry"));
                 * 	 根据entryInfoList中的信息对entriesDynObj进行需要的处理
                 *
                 * 	 api返回值的详细解析如下，假设分录一共3行，第1行匹配了4行余额记录，第2行匹配错误，第3行匹配了5行余额记录
                 * 	 [
                 * 		{materialmasterid=1510860254529869824, materialname=cqr_test_00003, qtyCol=qty, qty=34.0000000000, plusQty=0.00, rulename=按近效期, orgid=100000, entryInfo=[
                 * 			{entryId=1510945563619637248, invaccId=1510867016268135425, material=1510860254529869824, warehouse=1194939339558420480, outownertype=bos_org, outkeepertype=bos_org, auxpty=0, outinvtype=688884005529250816, outinvstatus=691928582720825344, baseunit=1357068589710010368, location=0, outowner=100000, outkeeper=100000, lotnumber=MATCHOUT_001, project=0, configuredcode=0, tracknumber=0, unit=1357068589710010368, unit2nd=0, producedate=2022-09-16 00:00:00.0, expirydate=2024-09-16 00:00:00.0, baseqty=10.0000000000, qty=10.0000000000, qtyunit2nd=0E-10, lot=1510866578642844674, entrycomment=},
                 * 			{entryId=1513917845556415488, invaccId=1510867016268135427, material=1510860254529869824, warehouse=1194939339558420480, outownertype=bos_org, outkeepertype=bos_org, auxpty=0, outinvtype=688884005529250816, outinvstatus=691928582720825344, baseunit=1357068589710010368, location=0, outowner=100000, outkeeper=100000, lotnumber=MATCHOUT_002, project=0, configuredcode=0, tracknumber=0, unit=1357068589710010368, unit2nd=0, producedate=2022-09-17 00:00:00.0, expirydate=2024-09-17 00:00:00.0, baseqty=10.0000000000, qty=10.0000000000, qtyunit2nd=0E-10, lot=1510866578642844675, entrycomment=},
                 * 			{entryId=1513917845556536320, invaccId=1510867016268135428, material=1510860254529869824, warehouse=1194939339558420480, outownertype=bos_org, outkeepertype=bos_org, auxpty=0, outinvtype=688884005529250816, outinvstatus=691928582720825344, baseunit=1357068589710010368, location=0, outowner=100000, outkeeper=100000, lotnumber=MATCHOUT_003, project=0, configuredcode=0, tracknumber=0, unit=1357068589710010368, unit2nd=0, producedate=2022-09-18 00:00:00.0, expirydate=2024-09-18 00:00:00.0, baseqty=10.0000000000, qty=10.0000000000, qtyunit2nd=0E-10, lot=1510866578642844676, entrycomment=},
                 * 			{entryId=1513917845556415489, invaccId=1510867016268135426, material=1510860254529869824, warehouse=1194939339558420480, outownertype=bos_org, outkeepertype=bos_org, auxpty=0, outinvtype=688884005529250816, outinvstatus=691928582720825344, baseunit=1357068589710010368, location=0, outowner=100000, outkeeper=100000, lotnumber=MATCHOUT_004, project=0, configuredcode=0, tracknumber=0, unit=1357068589710010368, unit2nd=0, producedate=2022-09-19 00:00:00.0, expirydate=2024-09-19 00:00:00.0, baseqty=10.0000000000, qty=4.0000000000, qtyunit2nd=0E-10, lot=1510866578642844672, entrycomment=}
                 * 		 ]
                 * 		},
                 *
                 * 		{
                 * 		 errMsg=具体错误信息
                 * 		},
                 *
                 * 		{materialmasterid=1510860254529869824, materialname=cqr_test_00003, qtyCol=qty, qty=40.0000000000, plusQty=0.00, rulename=按近效期, orgid=100000, entryInfo=[
                 * 			{entryId=1511429027150382080, invaccId=1510867016268135425, material=1510860254529869824, warehouse=1194939339558420480, outownertype=bos_org, outkeepertype=bos_org, auxpty=0, outinvtype=688884005529250816, outinvstatus=691928582720825344, baseunit=1357068589710010368, location=0, outowner=100000, outkeeper=100000, lotnumber=MATCHOUT_001, project=0, configuredcode=0, tracknumber=0, unit=1357068589710010368, unit2nd=0, producedate=2022-09-16 00:00:00.0, expirydate=2024-09-16 00:00:00.0, baseqty=10.0000000000, qty=10.0000000000, qtyunit2nd=0E-10, lot=1510866578642844674, entrycomment=},
                 * 			{entryId=1513917845816583168, invaccId=1510867016268135427, material=1510860254529869824, warehouse=1194939339558420480, outownertype=bos_org, outkeepertype=bos_org, auxpty=0, outinvtype=688884005529250816, outinvstatus=691928582720825344, baseunit=1357068589710010368, location=0, outowner=100000, outkeeper=100000, lotnumber=MATCHOUT_002, project=0, configuredcode=0, tracknumber=0, unit=1357068589710010368, unit2nd=0, producedate=2022-09-17 00:00:00.0, expirydate=2024-09-17 00:00:00.0, baseqty=10.0000000000, qty=10.0000000000, qtyunit2nd=0E-10, lot=1510866578642844675, entrycomment=},
                 * 			{entryId=1513917845816462336, invaccId=1510867016268135428, material=1510860254529869824, warehouse=1194939339558420480, outownertype=bos_org, outkeepertype=bos_org, auxpty=0, outinvtype=688884005529250816, outinvstatus=691928582720825344, baseunit=1357068589710010368, location=0, outowner=100000, outkeeper=100000, lotnumber=MATCHOUT_003, project=0, configuredcode=0, tracknumber=0, unit=1357068589710010368, unit2nd=0, producedate=2022-09-18 00:00:00.0, expirydate=2024-09-18 00:00:00.0, baseqty=10.0000000000, qty=10.0000000000, qtyunit2nd=0E-10, lot=1510866578642844676, entrycomment=},
                 * 			{entryId=1513917845816583169, invaccId=1510867016268135426, material=1510860254529869824, warehouse=1194939339558420480, outownertype=bos_org, outkeepertype=bos_org, auxpty=0, outinvtype=688884005529250816, outinvstatus=691928582720825344, baseunit=1357068589710010368, location=0, outowner=100000, outkeeper=100000, lotnumber=MATCHOUT_004, project=0, configuredcode=0, tracknumber=0, unit=1357068589710010368, unit2nd=0, producedate=2022-09-19 00:00:00.0, expirydate=2024-09-19 00:00:00.0, baseqty=10.0000000000, qty=10.0000000000, qtyunit2nd=0E-10, lot=1510866578642844672, entrycomment=}
                 * 		 ]
                 * 		}
                 * 	 ]
                 * 	 （A）List的size和拆分前分录的行数一致，每一条目依次对应该分录需要拆分为多少行
                 * 	（B）每一条目Map<String,Object>包括以下几个key，如果map.isEmpty为真，说明物料没有配置出库规则，依照业务确定该行无需处理或报错(前台当前视为跳过,故无返回错误信息)：
                 * 		（1）错误信息errMsg, 如果get(‘errMsg’)不为空说明本行存在字段必填校验错误，如果存在errMsg，其它信息均不存在
                 * 		（2）物料mastid，materialmasterid=1510860254529869824
                 * 		（3）物料名称，materialname=cqr_test_00003,
                 * 		（4）该分录配置的数量字段标识，qtyCol=qty,
                 * 		（5）拆分前原数量 qty=34.0000000000,
                 * 		（6）匹配后剩余数量(已保留精度)，plusQty=0.00,
                 * 		（7）该行的匹配规则名称，rulename=按近效期
                 * 		（8）库存组织id，orgid=100000
                 * 		（9）具体拆行信息，entryInfo=一个子层List<Map<String, Object>>对象，后台处理一般只需要关心（9）
                 * 	（C）关于（9）entryInfo的详细说明：包含该分录需要被拆分为多少行的具体信息，List的size即为需要拆分为多少行（如果size为0，说明一条可用的库存都没有，依照业务场景一般是跳过无需处理即可，也可以提示），每一行的Map<String, Object>，包括2+N个key，其中2个字段固定：
                 * 		（1）entryId：分录id，每行的首个entryId即是拆分前的entryId，第2行开始为api自动预生成entryId，调用方应使用这些entryId，无需自行重复生成；
                 * 		（2）invaccId：对应的余额明细id，一般调用方不需要使用
                 * 		（3）其它所有字段：对应单据分录上的字段标识应该被更新的值，包括了匹配规则出库设置了返回单据的字段，以及批号主档自动带出的扩展字段（如果启用了批号主档且为批号控制的物料）
                 * 	另外，除了匹配规则返回的余额字段外，可能还有其它额外处理，如，数据可能需要先复制源行前的字段（例如设置为允许复制的字段，来源单据等），再填入（3）的字段；此外如有非余额字段的特殊控制，如总价（如有），需要自行计算
                 * 	</code></pre>
                 */
                getMatchingResultFromDynobj(formid:string,entry:string,operatekey:string,billDynObj:$.kd.bos.dataentity.entity.DynamicObject,entriesDynObj:$.kd.bos.dataentity.entity.DynamicObjectCollection):$.java.util.List;
            }
            type MatchingRuleOutService_T = MatchingRuleOutService_S & MatchingRuleOutService$;
            interface MatchingRuleOutService extends MatchingRuleOutService_T {
            }
            interface LotnumService_S {
                readonly EXPIRYDATE:string;
                readonly PRODUCEDATE:string;
                /**
                 * 获取LotnumService实例对象
                 *  @return LotnumService实例对象
                 */
                get():LotnumService;
            }
            interface LotnumService$ {
                /**
                 * 根据库存组织ID、物料库存信息ID和批号的集合，查询批号入库跟踪表，返回查询范围的生产日期和到期日期信息集合
                 *  @param orgIds 库存组织ID集合
                 *  @param materialIds 物料库存信息ID集合
                 *  @param lotNumbers 批号集合
                 *  @return 查询到的生产日期和到期日期信息集合
                 * <p>示例如下
                 * 	 <pre><code>
                 * 	 kd.sdk.scmc.im.service.LotnumService lotnumService = kd.sdk.scmc.im.service.LotnumService.get();
                 * 	 List<Object> orgIds = ArrayList<>();
                 * 	 orgIds.add(100000L);
                 * 	 List<Object> materialIds = new ArrayList<>();
                 * 	 materialIds.add(1159348455517429760L);
                 * 	 materialIds.add(1158762107278304256L);
                 * 	 List<String> lotNumbers = new ArrayList<>();
                 * 	 lotNumbers.add("PH-10061");
                 * 	 lotNumbers.add("123");
                 * 	 lotNumbers.add("121");
                 * 	 Map<String, Map<String, Date>> lifeDateMaps = lotnumService.getLifeDateFromLotIntrack(orgIds,materialIds,lotNumbers);
                 * 	 </code></pre>
                 * 返回结果lifeDateMaps的结构为:{key:库存组织ID_物料库存信息ID_批号,value:{LotnumService.PRODUCEDATE=Date对象,LotnumService.EXPIRYDATE=Date对象}<br/>
                 *  如:{100000_1159348455517429760_121={producedate=Mon May 17 00:00:00 CST 2021, expirydate=Sat Nov 13 00:00:00 CST 2021}, <br/>
                 *    100000_1159348455517429760_123={producedate=Thu May 20 00:00:00 CST 2021, expirydate=null}}
                 */
                getLifeDateFromLotIntrack(orgIds:$.java.util.List,materialIds:$.java.util.List,lotNumbers:$.java.util.List):$.java.util.Map;
            }
            type LotnumService_T = LotnumService_S & LotnumService$;
            interface LotnumService extends LotnumService_T {
            }
        }
        namespace kd.sdk.scmc.mobim{
            interface SdkMobImModule_S {
            }
            type SdkMobImModule_ST = $.kd.sdk.module.Module & SdkMobImModule_S;
            interface SdkMobImModule_C extends SdkMobImModule_ST {
                new():SdkMobImModule;
            }
            interface SdkMobImModule$ {
            }
            type SdkMobImModule_T = $.kd.sdk.module.Module & SdkMobImModule_S & SdkMobImModule$;
            interface SdkMobImModule extends SdkMobImModule_T {
            }
        }
        namespace kd.sdk.scmc.mobim.extpoint{
            interface MobImExpandCaseCodes_S {
                readonly INVQUERY_EXPAND_AFTER_RETURN_DATA:string;
                readonly INVQUERY_EXPAND_DETAIL_ENTRY_FIELDS:string;
                readonly INVQUERY_EXPAND_DETAIL_HEAD_FIELDS:string;
                readonly INVQUERY_EXPAND_LIST_FIELDS:string;
                readonly INVQUERY_FILTERANDRETURN:string;
            }
            interface MobImExpandCaseCodes_C extends MobImExpandCaseCodes_S {
                new():MobImExpandCaseCodes;
            }
            interface MobImExpandCaseCodes$ {
            }
            type MobImExpandCaseCodes_T = MobImExpandCaseCodes_S & MobImExpandCaseCodes$;
            interface MobImExpandCaseCodes extends MobImExpandCaseCodes_T {
            }
            interface IInvQueryExpand_S {
                readonly FILTER:string;
            }
            interface IInvQueryExpand$ {
                /**
                 * 即时库存查询添加单据体字段字段扩展点
                 *
                 * @param allQueryFieldSet 库存查询的字段，<String String> 表字段名，别名
                 * @param showFieldSet     移动单页面字段
                 */
                getExpandDetailEntryFields?(allQueryFieldSet:$.java.util.Set,showFieldSet:$.java.util.Set):void;
                /**
                 * 获取库存查询扩展QFilter,此部分扩展的过滤条件来自于打开库存查询前的单据页面<br/>
                 * 用于当标准库存查询配置设置的字段映射不足以满足的特殊业务需求,例如某些特殊单据,需要控制只能选择特定属性的物料/仓库等(例如,希望只能选择"可资产"类型的物料)
                 *
                 * @param entity     打开库存查询前的单据实体对象
                 * @param entryKey   选中的单据分录标识
                 * @param row        选中的行号(如当前未选中行,则row值等于-1)
                 * @param operateKey 操作代码(如直接调拨单的调入和调出库存查询对应不同的操作代码)
                 * @param filterMap  处理后的filter对象(使用key="filter"获取),可在后续插件中叠加处理上一个插件返回的QFilter<br/>
                 *                   可以通过QFilter filter = filterMap.get(FILTER)得到当前的扩展QFilter对象,对filter处理完毕后,再使用filterMap.put(FILTER, filter)写回至map中,以改写扩展的过滤条件<br/>
                 *                   注意,不可以改写通过库存查询配置中字段映射设置的过滤条件,如有需要请直接在规则中进行配置，本扩展仅可对无法通过库存查询配置进行配置的过滤条件进行扩展
                 */
                getExpandFilter?(entity:$.kd.bos.dataentity.entity.DynamicObject,entryKey:string,row:number,operateKey:string,filterMap:$.java.util.Map):void;
                /**
                 * 即时库存查询添加单据头字段字段扩展点
                 *
                 * @param groupByFields 库存查询字段
                 *                      key：表单页面字段标识，value：数据库中字段名
                 */
                getExpandHeadFields?(groupByFields:$.java.util.Map):void;
                /**
                 * 即时库存列表查询添加字段扩展点
                 *
                 * @param groupByFields 库存查询字段
                 *                      key是列表上的字段标识，value是对应数据库的中字段名称
                 */
                getExpandListFields?(groupByFields:$.java.util.Map):void;
            }
            type IInvQueryExpand_T = IInvQueryExpand_S & IInvQueryExpand$;
            interface IInvQueryExpand extends IInvQueryExpand_T {
            }
        }
        namespace kd.sdk.scmc.pm{
            interface SdkScmcPmModule_S {
            }
            type SdkScmcPmModule_ST = $.kd.sdk.module.Module & SdkScmcPmModule_S;
            interface SdkScmcPmModule_C extends SdkScmcPmModule_ST {
                new():SdkScmcPmModule;
            }
            interface SdkScmcPmModule$ {
            }
            type SdkScmcPmModule_T = $.kd.sdk.module.Module & SdkScmcPmModule_S & SdkScmcPmModule$;
            interface SdkScmcPmModule extends SdkScmcPmModule_T {
            }
        }
        namespace kd.sdk.scmc.pm.extpoint{
            interface IXPurApplyCasePlugin_S {
            }
            interface IXPurApplyCasePlugin$ {
                /**
                 * 采购申请单变更生效同步订单单据分录和单头状态
                 * @return 同步结果，默认返回true, 要求同步成功返回：true 失败返回：false<br/>
                 */
                activeSynApplyBillStatus?(srcBill:$.kd.bos.dataentity.entity.DynamicObject):boolean;
            }
            type IXPurApplyCasePlugin_T = IXPurApplyCasePlugin_S & IXPurApplyCasePlugin$;
            interface IXPurApplyCasePlugin extends IXPurApplyCasePlugin_T {
            }
            interface IPurQuotaCasePlugin_S {
            }
            interface IPurQuotaCasePlugin$ {
                /**
                 * 配额下单，获取想带到采购订单中的客户化信息
                 * @param quotaInfos 配额计算结果信息
                 * @return
                 */
                getCustomPushOrderInfos?(quotaInfos:$.java.util.Collection):$.java.util.Map;
            }
            type IPurQuotaCasePlugin_T = IPurQuotaCasePlugin_S & IPurQuotaCasePlugin$;
            interface IPurQuotaCasePlugin extends IPurQuotaCasePlugin_T {
            }
            interface IForecastPlanCasePlugin_S {
            }
            interface IForecastPlanCasePlugin$ {
                /**
                 * 采购预测计划解析日期列
                 *  @param schemeId 备货计划方案ID
                 *  @param startDate 开始执行日期
                 *  @return 同步结果，默认返回List<String></>  <br/>
                 */
                getDateColumnList?(schemeId:long,startDate:Date):$.java.util.List;
            }
            type IForecastPlanCasePlugin_T = IForecastPlanCasePlugin_S & IForecastPlanCasePlugin$;
            interface IForecastPlanCasePlugin extends IForecastPlanCasePlugin_T {
            }
            interface IXPurOrderCasePlugin_S {
                readonly CANCEL_AMOUNTCHECKKEY:string;
                readonly CANCEL_QTYCHECKKEY:string;
            }
            interface IXPurOrderCasePlugin$ {
                /**
                 * 采购变更生效同步上游单据客户化定制插件接口,接口调用时机：采购变更生效操作插件生效前触发，进行上游单据信息同步
                 *
                 * @param changeBillIds  采购变更单据ID集合<br/>
                 * 可以通过ID集合查询到发生变更的详细信息，进而继续进行上游单据信息同步<br/>
                 * @param changeBillEntity  采购变更单单据实体标识，可根据该参数区分处理不同变更单据的对应逻辑
                 *
                 * @return 同步结果，默认返回true, 要求同步成功返回：true 失败返回：false  <br/>
                 */
                activeSynBillInfo?(changeBillIds:$.java.util.List,changeBillEntity:string):boolean;
                /**
                 * 采购变更生效同步订单单据分录和单头状态
                 *
                 * @return 同步结果，默认返回true, 要求同步成功返回：true 失败返回：false  <br/>
                 */
                activeSynOrderBillStatus?(srcBill:$.kd.bos.dataentity.entity.DynamicObject):boolean;
                /**
                 * 采购变更生效取消校验，接口调用时机：采购变更生效操作插件生效时触发，用于取消生效校验
                 *
                 * @return  取消结果，默认返回空Map，要求返回检验取消结果，如 entryCheckCancel：true  <br/>
                 */
                cancelCheck?():$.java.util.Map;
            }
            type IXPurOrderCasePlugin_T = IXPurOrderCasePlugin_S & IXPurOrderCasePlugin$;
            interface IXPurOrderCasePlugin extends IXPurOrderCasePlugin_T {
            }
            interface PmExpandCaseCodes_S {
                readonly SCMC_PM_FORECASTPLAN_DATECOLUMN:string;
                readonly SCMC_PM_PURAPPLYBCBILL_ACTIVE_MODIFYSRCBILL:string;
                readonly SCMC_PM_PURORDERBCBILL_ACTIVE_MODIFYSRCBILL:string;
                readonly SCMC_PM_PURQUOTA:string;
                readonly SCMC_PM_VMIMANMALSETTLE_ADDCUSTOMPARAM:string;
                readonly SCMC_PM_VMISETTLE_ADJUSTSETTLEMODEL:string;
                readonly SCMC_PM_XSPURAPPLYBILL_ACTIVE_SYNCSTATUS:string;
                readonly SCMC_PM_XSPURORDERBILL_ACTIVE_CANCELCHECK:string;
                readonly SCMC_PM_XSPURORDERBILL_ACTIVE_SYNCBILL:string;
                readonly SCMC_PM_XSPURORDERBILL_ACTIVE_SYNCSTATUS:string;
            }
            interface PmExpandCaseCodes_C extends PmExpandCaseCodes_S {
                new():PmExpandCaseCodes;
            }
            interface PmExpandCaseCodes$ {
            }
            type PmExpandCaseCodes_T = PmExpandCaseCodes_S & PmExpandCaseCodes$;
            interface PmExpandCaseCodes extends PmExpandCaseCodes_T {
            }
            interface IPurBatChangeCasePlugin_S {
            }
            interface IPurBatChangeCasePlugin$ {
                /**
                 * 添加查询原单必要的属性
                 * @return 原单属性集合
                 */
                addSrcBillProps?():$.java.util.List;
                /**
                 * 根据二开需求修改反写后的原单数据，主要用于处理批量变更的字段值改变引起的二开字段的联动改变
                 * @param srcBills 原单集合
                 * @param selectRows 批量变更单中选中并且通过校验的行
                 * @return 修改后的原单集合
                 */
                modifySrcBills?(srcBills:$.java.util.List,selectRows:$.java.util.Set):$.java.util.List;
            }
            type IPurBatChangeCasePlugin_T = IPurBatChangeCasePlugin_S & IPurBatChangeCasePlugin$;
            interface IPurBatChangeCasePlugin extends IPurBatChangeCasePlugin_T {
            }
            interface IVMISettleCasePlugin_S {
            }
            interface IVMISettleCasePlugin$ {
                /**
                 *  调整一批物权转移单结算时使用的结算模型中对应的BOTP
                 *  @param transferBills 物权转移单信息
                 *  @param settleModels 结算模型
                 *  @return 修改后的结算模型
                 */
                adjustSettleModel?(transferBills:$.kd.bos.dataentity.entity.DynamicObject[],settleModels:$.java.util.List):$.java.util.List;
                /**
                 * VMI采购结算，获取想带到结算虚单的客户化信息
                 * @param vmisettleinfos VMI采购结算待结算信息
                 * @return
                 */
                getManualSettleCustomParam?(vmisettleinfos:$.java.util.List):$.java.util.Map;
            }
            type IVMISettleCasePlugin_T = IVMISettleCasePlugin_S & IVMISettleCasePlugin$;
            interface IVMISettleCasePlugin extends IVMISettleCasePlugin_T {
            }
        }
        namespace kd.sdk.scmc.pm.helper{
            interface PurApplyHelper_S {
                /**
                 * 整单金额计算
                 * @param bill 采购申请单
                 * @return 采购申请单
                 * @since 2023/05/31
                 */
                calcAllAmount(bill:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 补充单据默认值，包括金额计算
                 * @param bills 采购申请单
                 * @return 采购申请单
                 * @since 2023/05/31
                 */
                completeBillInfo(bills:$.java.util.List):$.java.util.List;
            }
            interface PurApplyHelper_C extends PurApplyHelper_S {
                new():PurApplyHelper;
            }
            interface PurApplyHelper$ {
            }
            type PurApplyHelper_T = PurApplyHelper_S & PurApplyHelper$;
            interface PurApplyHelper extends PurApplyHelper_T {
            }
            interface PmCommonHelper_S {
                /**
                 * 指定参数标识获取采购管理应用参数值
                 * @param orgId 组织id
                 * @param key 参数标识
                 * @return 参数值
                 * @since 2023/05/31
                 */
                getAppParameter(orgId:long,key:string):any;
                /**
                 * 获取全量采购管理应用参数
                 * @param orgId 组织id
                 * @return 应用参数map
                 * @since 2023/05/31
                 */
                getAppParameterMap(orgId:long):$.java.util.Map;
                /**
                 * 根据业务类型判断当前单据是是否为VMI业务
                 * @param bizTypeId 业务类型
                 * @return true/false
                 * @since 2023/05/31
                 */
                isVmi(bizTypeId:long):boolean;
            }
            interface PmCommonHelper_C extends PmCommonHelper_S {
                new():PmCommonHelper;
            }
            interface PmCommonHelper$ {
            }
            type PmCommonHelper_T = PmCommonHelper_S & PmCommonHelper$;
            interface PmCommonHelper extends PmCommonHelper_T {
            }
            interface PurOrderHelper_S {
                /**
                 * 整单金额计算，包括付款计划分录
                 * @param bill 采购订单
                 * @return 采购订单
                 * @since 2023/05/31
                 */
                calcAllAmount(bill:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 计算付款金额分录金额
                 * @param bill 采购订单
                 * @return 采购订单
                 * @since 2023/05/31
                 */
                calcAmountPlan(bill:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 计算单头金额、税额、价税合计
                 * @param bill 采购订单
                 * @return 采购订单
                 * @since 2023/05/31
                 */
                calcTotalAmount(bill:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 补充默认值，包括所有数量金额计算
                 * @param bills 采购订单
                 * @return 采购订单
                 * @since 2023/05/31
                 */
                completeBillInfo(bills:$.java.util.List):$.java.util.List;
            }
            interface PurOrderHelper_C extends PurOrderHelper_S {
                new():PurOrderHelper;
            }
            interface PurOrderHelper$ {
            }
            type PurOrderHelper_T = PurOrderHelper_S & PurOrderHelper$;
            interface PurOrderHelper extends PurOrderHelper_T {
            }
        }
        namespace kd.sdk.scmc.sbs{
            interface SdkScmcSbsModule_S {
            }
            type SdkScmcSbsModule_ST = $.kd.sdk.module.Module & SdkScmcSbsModule_S;
            interface SdkScmcSbsModule_C extends SdkScmcSbsModule_ST {
                new():SdkScmcSbsModule;
            }
            interface SdkScmcSbsModule$ {
            }
            type SdkScmcSbsModule_T = $.kd.sdk.module.Module & SdkScmcSbsModule_S & SdkScmcSbsModule$;
            interface SdkScmcSbsModule extends SdkScmcSbsModule_T {
            }
        }
        namespace kd.sdk.scmc.sbs.extpoint{
            interface ISbsSelectSNExpand_S {
                readonly SELECTMAP_KEY_ENTITY:string;
                readonly SELECTMAP_KEY_RETURNCOL:string;
                readonly SELECTMAP_KEY_SELECTCOL:string;
                readonly SELECTMAP_VAL_SNMAINFILE:string;
                readonly SELECTMAP_VAL_SNTRACK:string;
            }
            interface ISbsSelectSNExpand$ {
                /**
                 *  用于扩展希望添加到sql中的查询字段以及查询字段与界面返回字段的对应关系
                 *  @param view 界面视图对象，通过view可得到页面上用户输入的各字段值,以及通过getFormShowParameter().getCustomParams()得到所属单据的类型和id等信息
                 *  @return 希望添加到sql中的查询字段以及查询字段与界面返回字段的对应关系<br/>
                 *  （1）假设用户扩展了序列号主档,增加了二开字段"项目"(标识project)，扩展了序列号轨迹,增加二开字段"行类型"，且均已经通过序列号单据配置往其中写入了值,<br/>
                 *  （2）在"选择已有序列号"页面的查询结果单据体中添加字段"项目"(标识project_return)和"行类型"(标识linetype_return)，希望将查询序列号主档的项目和当前轨迹的行类型返回到查询结果新增字段中<br/>
                 *  基于此需求,返回值的对象示例如下:<br/>
                 * [{entity:"bd_snmainfile",selectcol:"fproject",returncol:"project_return"},   <br/>
                 * {entity:"bd_snmovetrack",selectcol:"flinetype",returncol:"linetype_return"}]  <br/>
                 * 其中,（1）entity代表查询的元数据对象,当前支持序列号主档（bd_snmainfile）和序列号轨迹（bd_snmovetrack）<br/>
                 * （2）selectcol代表在序列号主档或轨迹上的字段的数据库字段标识<br/>
                 * （3）returncol代表在"选择已有序列号"页面的查询结果单据体中用户扩展的字段"项目"(标识project_return)和"行类型"(标识linetype_return)
                 */
                getExpandSelectMaps?(view:$.kd.bos.form.IFormView):$.java.util.List;
                /**
                 *  用于扩展希望添加到sql中的where条件内容
                 *  @param view 界面视图对象，通过view可得到页面上用户输入的各字段值,以及通过getFormShowParameter().getCustomParams()得到所属单据的类型和id等信息
                 *  @return 希望添加到sql中的where条件内容<br/>
                 *  假设用户在"选择已有序列号"页面也同样添加过滤条件字段"项目"(标识project_head)和"行类型"(标识linetype_head)，并希望用户填写的该字段值作为查询序列号时的过滤条件<br/>
                 *  基于此需求,用户可首先通过传参view得到用户在界面上选择的值,假设project_head的值为10001234，linetype_head为20004567<br/>
                 * 将返回值赋值为字符串 "bd_snmainfile.fproject = 10001234 and bd_snmovetrack.flinetype = 20004567"即可<br/>
                 * 注：（1）字段名前需要添加前缀"bd_snmainfile."或"bd_snmovetrack.",用于区分是序列号主档还是序列号轨迹的对应字段标识<br/>
                 * （2）如无需要扩展此部分内容,返回空字符串即可<br/>
                 * （3）该扩展并不局限于界面添加过滤字段,可以从view得到任意可得到的内容组装为额外的过滤条件,例如用户如果希望提供小漏斗支持（不直接支持小漏斗，需扩展处理）,也可通过view对象得到小漏斗中的填选内容,并转换为String对象返回;
                 */
                getExpandWhere?(view:$.kd.bos.form.IFormView):string;
            }
            type ISbsSelectSNExpand_T = ISbsSelectSNExpand_S & ISbsSelectSNExpand$;
            interface ISbsSelectSNExpand extends ISbsSelectSNExpand_T {
            }
            interface SbsExpandCaseCodes_S {
                readonly SELECTSN_QUERY:string;
            }
            interface SbsExpandCaseCodes_C extends SbsExpandCaseCodes_S {
                new():SbsExpandCaseCodes;
            }
            interface SbsExpandCaseCodes$ {
            }
            type SbsExpandCaseCodes_T = SbsExpandCaseCodes_S & SbsExpandCaseCodes$;
            interface SbsExpandCaseCodes extends SbsExpandCaseCodes_T {
            }
        }
        namespace kd.sdk.scmc.scmdi{
            interface SdkScmcDiModule_S {
            }
            type SdkScmcDiModule_ST = $.kd.sdk.module.Module & SdkScmcDiModule_S;
            interface SdkScmcDiModule_C extends SdkScmcDiModule_ST {
                new():SdkScmcDiModule;
            }
            interface SdkScmcDiModule$ {
            }
            type SdkScmcDiModule_T = $.kd.sdk.module.Module & SdkScmcDiModule_S & SdkScmcDiModule$;
            interface SdkScmcDiModule extends SdkScmcDiModule_T {
            }
        }
        namespace kd.sdk.scmc.sm{
            interface SdkScmcSmModule_S {
            }
            type SdkScmcSmModule_ST = $.kd.sdk.module.Module & SdkScmcSmModule_S;
            interface SdkScmcSmModule_C extends SdkScmcSmModule_ST {
                new():SdkScmcSmModule;
            }
            interface SdkScmcSmModule$ {
            }
            type SdkScmcSmModule_T = $.kd.sdk.module.Module & SdkScmcSmModule_S & SdkScmcSmModule$;
            interface SdkScmcSmModule extends SdkScmcSmModule_T {
            }
        }
        namespace kd.sdk.scmc.sm.extpoint{
            interface IXSalOrderCasePlugin_S {
                readonly CANCEL_AMOUNTCHECKKEY:string;
                readonly CANCEL_QTYCHECKKEY:string;
            }
            interface IXSalOrderCasePlugin$ {
                /**
                 * 销售变更生效同步订单单据分录和单头状态
                 *
                 * @return 同步结果，默认返回true, 要求同步成功返回：true 失败返回：false  <br/>
                 */
                activeSynOrderBillStatus?(srcBill:$.kd.bos.dataentity.entity.DynamicObject):boolean;
                /**
                 * 销售变更生效取消校验，接口调用时机：销售变更生效操作插件生效时触发，用于取消生效校验
                 *
                 * @return  取消结果，默认返回空Map，要求返回检验取消结果，如 entryCheckCancel：true  <br/>
                 */
                cancelCheck?():$.java.util.Map;
            }
            type IXSalOrderCasePlugin_T = IXSalOrderCasePlugin_S & IXSalOrderCasePlugin$;
            interface IXSalOrderCasePlugin extends IXSalOrderCasePlugin_T {
            }
            interface IAmountCalculateCasePlugin_S {
            }
            interface IAmountCalculateCasePlugin$ {
                /**
                 * 设置分录价税合计后处理计算时默认加载的单据字段
                 *
                 * @param entityName 单据实体标识，可根据该参数区分处理不同销售单据的对应逻辑
                 * @return  要加载的单据属性，属性只需要写字段名即可<br/>
                 * 返回set中只可以添加单据自身的字段，包括单头字段和分录字段，如币别：currency，物料：material，二开字段名等，分录字段不需要传递分录前缀<br/>
                 */
                beforeCalculte?(entityName:string):$.java.util.Set;
                /**
                 * 分录价税合计后处理，在标准产品的价税合计过程中，得到价税合计得数后，可以继续对价税合计得数进行加工处理，处理完毕后回填到页面中，只支持金额正算的场景<br/>
                 *
                 * @param amountAndTax   标准产品金额计算逻辑得到的分录上的价税合计
                 * @param entityName   单据实体标识，可根据该参数区分处理不同销售单据的对应逻辑，需要将所有不同的单据处理逻辑写在同一个实现插件中
                 * @param entryInfo  附带的单据字段信息通过Map传递，使用Map是因为轻量化且更灵活<br/>
                 *    例：[{material:物料动态对象, currency:币别动态对象, qty:100, price:10，二开字段名：二开字段值} <br/>
                 *
                 * @return  处理后的价税合计  标准产品将根据返回的数值继续金额处理逻辑，如单头汇总等
                 */
                calculteAmountAndTax?(amountAndTax:$.java.math.BigDecimal,entityName:string,entryInfo:$.java.util.Map):$.java.math.BigDecimal;
            }
            type IAmountCalculateCasePlugin_T = IAmountCalculateCasePlugin_S & IAmountCalculateCasePlugin$;
            interface IAmountCalculateCasePlugin extends IAmountCalculateCasePlugin_T {
            }
            interface SmExpandCaseCodes_S {
                readonly SCMC_SM_BILL_CALCULTEAMOUNTANDTAX:string;
                readonly SCMC_SM_BILL_ISCLEANPRICEFIELD:string;
                readonly SCMC_SM_XSSALORDERBILL_ACTIVE_CANCELCHECK:string;
                readonly SCMC_SM_XSSALORDERBILL_ACTIVE_SYNCSTATUS:string;
            }
            interface SmExpandCaseCodes_C extends SmExpandCaseCodes_S {
                new():SmExpandCaseCodes;
            }
            interface SmExpandCaseCodes$ {
            }
            type SmExpandCaseCodes_T = SmExpandCaseCodes_S & SmExpandCaseCodes$;
            interface SmExpandCaseCodes extends SmExpandCaseCodes_T {
            }
            interface ICleanFieldsCasePlugin_S {
            }
            interface ICleanFieldsCasePlugin$ {
                /**
                 *  销售单据页面切换物料是否清除价格相关字段信息
                 *
                 * @param newMaterial  分录行物料切换后新物料，可能为空需要判空
                 * @param oldMaterial  分录行物料切换前旧物料，可能为空需要判空
                 * @param entityName   单据实体标识,可根据该参数区分处理不同销售单据的对应逻辑
                 * @param entryInfo  附带的分录行字段信息通过Map传递，此参数为预留参数
                 *
                 * @return 是否需要清除  默认为：true 需要：true  不需要：false <br/>
                 * 	通过客开判断逻辑，决定是否清除价格价格字段，<br/>
                 */
                isCleanPriceField?(newMaterial:$.kd.bos.dataentity.entity.DynamicObject,oldMaterial:$.kd.bos.dataentity.entity.DynamicObject,entityName:string,entryInfo:$.java.util.Map):boolean;
            }
            type ICleanFieldsCasePlugin_T = ICleanFieldsCasePlugin_S & ICleanFieldsCasePlugin$;
            interface ICleanFieldsCasePlugin extends ICleanFieldsCasePlugin_T {
            }
        }
        namespace kd.sdk.scmc.upm{
            interface SdkScmcUpmModule_S {
            }
            type SdkScmcUpmModule_ST = $.kd.sdk.module.Module & SdkScmcUpmModule_S;
            interface SdkScmcUpmModule_C extends SdkScmcUpmModule_ST {
                new():SdkScmcUpmModule;
            }
            interface SdkScmcUpmModule$ {
            }
            type SdkScmcUpmModule_T = $.kd.sdk.module.Module & SdkScmcUpmModule_S & SdkScmcUpmModule$;
            interface SdkScmcUpmModule extends SdkScmcUpmModule_T {
            }
        }
        namespace kd.sdk.scmc.upm.extpoint{
            interface UpmExpandCaseCodes_S {
                readonly SCMC_UPM_WORKBENCH_EXTDATA:string;
            }
            interface UpmExpandCaseCodes_C extends UpmExpandCaseCodes_S {
                new():UpmExpandCaseCodes;
            }
            interface UpmExpandCaseCodes$ {
            }
            type UpmExpandCaseCodes_T = UpmExpandCaseCodes_S & UpmExpandCaseCodes$;
            interface UpmExpandCaseCodes extends UpmExpandCaseCodes_T {
            }
        }
    }
}
export {};