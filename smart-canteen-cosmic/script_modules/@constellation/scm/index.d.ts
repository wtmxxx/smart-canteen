/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.sdk.scm.common{
            interface SdkScmCommonModule_S {
            }
            type SdkScmCommonModule_ST = $.kd.sdk.module.Module & SdkScmCommonModule_S;
            interface SdkScmCommonModule_C extends SdkScmCommonModule_ST {
                new():SdkScmCommonModule;
            }
            interface SdkScmCommonModule$ {
            }
            type SdkScmCommonModule_T = $.kd.sdk.module.Module & SdkScmCommonModule_S & SdkScmCommonModule$;
            interface SdkScmCommonModule extends SdkScmCommonModule_T {
            }
        }
        namespace kd.sdk.scm.common.extpoint{
            interface ICreateUserNumberSupport_S {
                assembleCurrencyUserNumber():string;
                assembleISCProxyUserNumber():string;
            }
            interface ICreateUserNumberSupport$ {
                assembleCustomUserNumber(arg0:$.kd.bos.dataentity.entity.DynamicObject[]):string;
            }
            type ICreateUserNumberSupport_T = ICreateUserNumberSupport_S & ICreateUserNumberSupport$;
            interface ICreateUserNumberSupport extends ICreateUserNumberSupport_T {
            }
            interface IPurInstockCheckMappingService_S {
                readonly ISINSTOCK:string;
                readonly ISNOTINSTOCK:string;
                readonly PUR_EXTEND_CASE_NAME:string;
            }
            interface IPurInstockCheckMappingService$ {
                getCheckTypes():string;
                getConditionEntryKey(arg0:boolean):string;
                getEntityKey():string;
                getIsCheckorInvoiceKey():string;
                getLineTypeOrPurType(arg0:string):string;
                getMaterialKey():string;
                getOrderBys():string;
                getOrgKey():string;
                getSelectFieldString(arg0:$.java.lang.StringBuilder):string;
                getSettleorgKey():string;
                getSumCheckQtyKey():string;
                getSumCheckTaxAmountKey():string;
                getSupplierKey():string;
                getWriteOffFlagKey():string;
                isCenterSettleKey():string;
                showmatchedKey():string;
                wrapCustomFilterMap(arg0:$.java.util.Map,arg1:string):$.java.util.Map;
                wrapVmiFilterMap():$.java.util.Map;
            }
            type IPurInstockCheckMappingService_T = IPurInstockCheckMappingService_S & IPurInstockCheckMappingService$;
            interface IPurInstockCheckMappingService extends IPurInstockCheckMappingService_T {
            }
            interface ISupChgFilterService_S {
            }
            interface ISupChgFilterService$ {
                supplierChgFilter?(arg0:long):$.java.util.Map;
            }
            type ISupChgFilterService_T = ISupChgFilterService_S & ISupChgFilterService$;
            interface ISupChgFilterService extends ISupChgFilterService_T {
            }
            interface IMaterialGroupStandardService_S {
            }
            interface IMaterialGroupStandardService$ {
                getMaterialGroupStandard?(arg0:string):long;
            }
            type IMaterialGroupStandardService_T = IMaterialGroupStandardService_S & IMaterialGroupStandardService$;
            interface IMaterialGroupStandardService extends IMaterialGroupStandardService_T {
            }
            interface ISupplierGroupStandardService_S {
            }
            interface ISupplierGroupStandardService$ {
                getSupplierGroupStandard?():long;
            }
            type ISupplierGroupStandardService_T = ISupplierGroupStandardService_S & ISupplierGroupStandardService$;
            interface ISupplierGroupStandardService extends ISupplierGroupStandardService_T {
            }
            interface ISrmSupChgInfoTypeInter_S {
            }
            interface ISrmSupChgInfoTypeInter$ {
                getInfoType?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.kd.bos.dataentity.metadata.IDataEntityProperty):string;
                getPropValueByDataEntity?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.kd.bos.dataentity.metadata.IDataEntityProperty):any;
                handleDataByInfoType?(arg0:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type ISrmSupChgInfoTypeInter_T = ISrmSupChgInfoTypeInter_S & ISrmSupChgInfoTypeInter$;
            interface ISrmSupChgInfoTypeInter extends ISrmSupChgInfoTypeInter_T {
            }
            interface ITransferDataSupport_S {
            }
            interface ITransferDataSupport$ {
                assembleExtHeadPro?():$.java.util.Map;
                assembleExtPro?():$.java.util.Map;
            }
            type ITransferDataSupport_T = ITransferDataSupport_S & ITransferDataSupport$;
            interface ITransferDataSupport extends ITransferDataSupport_T {
            }
        }
        namespace kd.sdk.scm.mal{
            interface SdkScmMalModule_S {
            }
            type SdkScmMalModule_ST = $.kd.sdk.module.Module & SdkScmMalModule_S;
            interface SdkScmMalModule_C extends SdkScmMalModule_ST {
                new():SdkScmMalModule;
            }
            interface SdkScmMalModule$ {
            }
            type SdkScmMalModule_T = $.kd.sdk.module.Module & SdkScmMalModule_S & SdkScmMalModule$;
            interface SdkScmMalModule extends SdkScmMalModule_T {
            }
        }
        namespace kd.sdk.scm.pbd{
            interface SdkScmPbdModule_S {
            }
            type SdkScmPbdModule_ST = $.kd.sdk.module.Module & SdkScmPbdModule_S;
            interface SdkScmPbdModule_C extends SdkScmPbdModule_ST {
                new():SdkScmPbdModule;
            }
            interface SdkScmPbdModule$ {
            }
            type SdkScmPbdModule_T = $.kd.sdk.module.Module & SdkScmPbdModule_S & SdkScmPbdModule$;
            interface SdkScmPbdModule extends SdkScmPbdModule_T {
            }
        }
        namespace kd.sdk.scm.pbd.extpoint{
            interface IBusinessRulesFillParseService_S {
            }
            interface IBusinessRulesFillParseService$ {
                fillDyByResult(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:any):$.java.util.Map;
            }
            type IBusinessRulesFillParseService_T = IBusinessRulesRequestParseService & IBusinessRulesFillParseService_S & IBusinessRulesFillParseService$;
            interface IBusinessRulesFillParseService extends IBusinessRulesFillParseService_T {
            }
            interface IBusinessRulesCallBackService_S {
            }
            interface IBusinessRulesCallBackService$ {
                adapterByResult?(arg0:any):any;
                analysis(arg0:$.java.util.Map):any;
                setEntryName():string;
            }
            type IBusinessRulesCallBackService_T = IBusinessRulesCallBackService_S & IBusinessRulesCallBackService$;
            interface IBusinessRulesCallBackService extends IBusinessRulesCallBackService_T {
            }
            interface IBusinessRulesRequestParseService_S {
            }
            interface IBusinessRulesRequestParseService$ {
                assembelRequest(arg0:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.Map;
            }
            type IBusinessRulesRequestParseService_T = IBusinessRulesRequestParseService_S & IBusinessRulesRequestParseService$;
            interface IBusinessRulesRequestParseService extends IBusinessRulesRequestParseService_T {
            }
            interface IBusinessRulesCheckParseService_S {
            }
            interface IBusinessRulesCheckParseService$ {
                checkDyByResult(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:any):$.java.util.Map;
            }
            type IBusinessRulesCheckParseService_T = IBusinessRulesRequestParseService & IBusinessRulesCheckParseService_S & IBusinessRulesCheckParseService$;
            interface IBusinessRulesCheckParseService extends IBusinessRulesCheckParseService_T {
            }
        }
        namespace kd.sdk.scm.pds{
            interface SdkScmPdsModule_S {
            }
            type SdkScmPdsModule_ST = $.kd.sdk.module.Module & SdkScmPdsModule_S;
            interface SdkScmPdsModule_C extends SdkScmPdsModule_ST {
                new():SdkScmPdsModule;
            }
            interface SdkScmPdsModule$ {
            }
            type SdkScmPdsModule_T = $.kd.sdk.module.Module & SdkScmPdsModule_S & SdkScmPdsModule$;
            interface SdkScmPdsModule extends SdkScmPdsModule_T {
            }
        }
        namespace kd.sdk.scm.pmm{
            interface SdkScmPmmModule_S {
            }
            type SdkScmPmmModule_ST = $.kd.sdk.module.Module & SdkScmPmmModule_S;
            interface SdkScmPmmModule_C extends SdkScmPmmModule_ST {
                new():SdkScmPmmModule;
            }
            interface SdkScmPmmModule$ {
            }
            type SdkScmPmmModule_T = $.kd.sdk.module.Module & SdkScmPmmModule_S & SdkScmPmmModule$;
            interface SdkScmPmmModule extends SdkScmPmmModule_T {
            }
        }
        namespace kd.sdk.scm.pmm.extpoint{
            interface MonitorRuleServiceResult_S {
            }
            type MonitorRuleServiceResult_ST = $.java.io.Serializable & MonitorRuleServiceResult_S;
            interface MonitorRuleServiceResult_C extends MonitorRuleServiceResult_ST {
                new():MonitorRuleServiceResult;
            }
            interface MonitorRuleServiceResult$ {
                getActualVal():string;
                getBizOperate():string;
                getCompareObjId():long;
                getCompareSource():string;
                getCompareValue():$.java.math.BigDecimal;
                getCustomObj():string;
                getIsAutoDown():boolean;
                getRuleId():long;
                getThreshold():string;
                getThresholdType():string;
                isAutoDown():boolean;
                isMatch():boolean;
                setActualVal(arg0:string):void;
                setAutoDown(arg0:boolean):void;
                setBizOperate(arg0:string):void;
                setCompareObjId(arg0:long):void;
                setCompareSource(arg0:string):void;
                setCompareValue(arg0:$.java.math.BigDecimal):void;
                setCustomObj(arg0:string):void;
                setIsAutoDown(arg0:boolean):void;
                setMatch(arg0:boolean):void;
                setRuleId(arg0:long):void;
                setThreshold(arg0:string):void;
                setThresholdType(arg0:string):void;
            }
            type MonitorRuleServiceResult_T = $.java.io.Serializable & MonitorRuleServiceResult_S & MonitorRuleServiceResult$;
            interface MonitorRuleServiceResult extends MonitorRuleServiceResult_T {
            }
            interface IOperateMonitorRuleService_S {
            }
            interface IOperateMonitorRuleService$ {
                isMatchMonitorRule(arg0:MonitorRuleServiceParam,arg1:$.java.math.BigDecimal):MonitorRuleServiceResult;
            }
            type IOperateMonitorRuleService_T = IOperateMonitorRuleService_S & IOperateMonitorRuleService$;
            interface IOperateMonitorRuleService extends IOperateMonitorRuleService_T {
            }
            interface MonitorRuleServiceParam_S {
            }
            type MonitorRuleServiceParam_ST = $.java.io.Serializable & MonitorRuleServiceParam_S;
            interface MonitorRuleServiceParam_C extends MonitorRuleServiceParam_ST {
                new():MonitorRuleServiceParam;
            }
            interface MonitorRuleServiceParam$ {
                getExtrendParamMap():$.java.util.Map;
                getGoodsId():long;
                getGoodsPoolId():long;
                getPlatform():string;
                getPriceLogList():$.java.util.List;
                getSameGoodsMap():$.java.util.Map;
                getShopPirce():$.java.math.BigDecimal;
                getTaxPrice():$.java.math.BigDecimal;
                setExtrendParamMap(arg0:$.java.util.Map):void;
                setGoodsId(arg0:long):void;
                setGoodsPoolId(arg0:long):void;
                setPlatform(arg0:string):void;
                setPriceLogList(arg0:$.java.util.List):void;
                setSameGoodsMap(arg0:$.java.util.Map):void;
                setShopPirce(arg0:$.java.math.BigDecimal):void;
                setTaxPrice(arg0:$.java.math.BigDecimal):void;
            }
            type MonitorRuleServiceParam_T = $.java.io.Serializable & MonitorRuleServiceParam_S & MonitorRuleServiceParam$;
            interface MonitorRuleServiceParam extends MonitorRuleServiceParam_T {
            }
        }
        namespace kd.sdk.scm.pssc{
            interface SdkScmPsscModule_S {
            }
            type SdkScmPsscModule_ST = $.kd.sdk.module.Module & SdkScmPsscModule_S;
            interface SdkScmPsscModule_C extends SdkScmPsscModule_ST {
                new():SdkScmPsscModule;
            }
            interface SdkScmPsscModule$ {
            }
            type SdkScmPsscModule_T = $.kd.sdk.module.Module & SdkScmPsscModule_S & SdkScmPsscModule$;
            interface SdkScmPsscModule extends SdkScmPsscModule_T {
            }
        }
        namespace kd.sdk.scm.pssc.packagegroup{
            interface IPsscPackageGroupPrepareExecutor_S {
            }
            interface IPsscPackageGroupPrepareExecutor$ {
                prepareData(arg0:kd.sdk.scm.pssc.packagegroup.pojo.PsscPackageGroupContext):void;
            }
            type IPsscPackageGroupPrepareExecutor_T = IPsscPackageGroupPrepareExecutor_S & IPsscPackageGroupPrepareExecutor$;
            interface IPsscPackageGroupPrepareExecutor extends IPsscPackageGroupPrepareExecutor_T {
            }
        }
        namespace kd.sdk.scm.pssc.packagegroup.pojo{
            interface PsscMaterialGroupInfo_S {
            }
            interface PsscMaterialGroupInfo_C extends PsscMaterialGroupInfo_S {
                new(arg0:long,arg1:long,arg2:string):PsscMaterialGroupInfo;
            }
            interface PsscMaterialGroupInfo$ {
                getGroupId():long;
                getGroupName():string;
                getParentId():long;
                setGroupId(arg0:long):void;
                setGroupName(arg0:string):void;
                setParentId(arg0:long):void;
            }
            type PsscMaterialGroupInfo_T = PsscMaterialGroupInfo_S & PsscMaterialGroupInfo$;
            interface PsscMaterialGroupInfo extends PsscMaterialGroupInfo_T {
            }
            interface PsscPackageGroupContext_S {
                initContext(arg0:$.java.util.Map,arg1:long):PsscPackageGroupContext;
            }
            interface PsscPackageGroupContext_C extends PsscPackageGroupContext_S {
                new():PsscPackageGroupContext;
            }
            interface PsscPackageGroupContext$ {
                getCategoryToTag():$.java.util.Map;
                getCustomPrepareData():$.java.util.Map;
                getDealTask():$.java.util.Map;
                getFormId():string;
                getHandlers():$.java.util.Set;
                getLongNumMapByCategory():$.java.util.Map;
                getMaterialGroupInfoMap():$.java.util.Map;
                getMaterialHanderTag():$.java.util.Map;
                getMaterialNameCache():$.java.util.Map;
                getRules():$.java.util.Map;
                getSchema():$.java.util.Map;
                getSchemaId():long;
                getUnDealTask():$.java.util.Map;
                loadPackageGroupInfo(arg0:$.java.util.List):void;
                setCategoryToTag(arg0:$.java.util.Map):void;
                setCustomPrepareData(arg0:$.java.util.Map):void;
                setDealTask(arg0:$.java.util.Map):void;
                setFormId(arg0:string):void;
                setHandlers(arg0:$.java.util.Set):void;
                setLongNumMapByCategory(arg0:$.java.util.Map):void;
                setMaterialGroupInfoMap(arg0:$.java.util.Map):void;
                setMaterialHanderTag(arg0:$.java.util.Map):void;
                setMaterialNameCache(arg0:$.java.util.Map):void;
                setRules(arg0:$.java.util.Map):void;
                setSchema(arg0:$.java.util.Map):void;
                setSchemaId(arg0:long):void;
                setUnDealTask(arg0:$.java.util.Map):void;
            }
            type PsscPackageGroupContext_T = PsscPackageGroupContext_S & PsscPackageGroupContext$;
            interface PsscPackageGroupContext extends PsscPackageGroupContext_T {
            }
            interface PsscTagGroupRuleOrderInfo_S {
            }
            type PsscTagGroupRuleOrderInfo_ST = $.java.lang.Comparable & PsscTagGroupRuleOrderInfo_S;
            interface PsscTagGroupRuleOrderInfo_C extends PsscTagGroupRuleOrderInfo_ST {
                new():PsscTagGroupRuleOrderInfo;
            }
            interface PsscTagGroupRuleOrderInfo$ {
                compareTo(arg0:PsscTagGroupRuleOrderInfo):number;
                doMatch(arg0:PsscPackageGroupContext,arg1:$.java.util.Map$Entry):void;
                getContext():PsscPackageGroupContext;
                getPriority():number;
                getTagSplit():string;
                init(arg0:$.kd.bos.dataentity.entity.DynamicObject):void;
                setContext(arg0:PsscPackageGroupContext):void;
                setPriority(arg0:number):void;
            }
            type PsscTagGroupRuleOrderInfo_T = $.java.lang.Comparable & PsscTagGroupRuleOrderInfo_S & PsscTagGroupRuleOrderInfo$;
            interface PsscTagGroupRuleOrderInfo extends PsscTagGroupRuleOrderInfo_T {
            }
        }
        namespace kd.sdk.scm.pssc.task{
            interface IReqContactOrderHandler_S {
            }
            interface IReqContactOrderHandler$ {
                makeOrderRowKey(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:string):string;
                preContactProperties(arg0:$.java.util.Map):void;
                preDealContactQFilter(arg0:$.kd.bos.orm.query.QFilter):void;
                preReqProperties(arg0:$.java.util.Map):void;
                preTaskProperties(arg0:$.java.util.Map):void;
                test?(arg0:$.kd.bos.algo.Row):boolean;
                wrapBOTPParam(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.java.util.Map,arg2:$.java.util.Map):void;
            }
            type IReqContactOrderHandler_T = IReqContactOrderHandler_S & IReqContactOrderHandler$;
            interface IReqContactOrderHandler extends IReqContactOrderHandler_T {
            }
            interface IPsscTaskSplitBillBasis_S {
            }
            interface IPsscTaskSplitBillBasis$ {
                splitBillBasisProperties(arg0:string,arg1:$.java.util.List):void;
            }
            type IPsscTaskSplitBillBasis_T = IPsscTaskSplitBillBasis_S & IPsscTaskSplitBillBasis$;
            interface IPsscTaskSplitBillBasis extends IPsscTaskSplitBillBasis_T {
            }
        }
        namespace kd.sdk.scm.pur{
            interface SdkScmPurModule_S {
            }
            type SdkScmPurModule_ST = $.kd.sdk.module.Module & SdkScmPurModule_S;
            interface SdkScmPurModule_C extends SdkScmPurModule_ST {
                new():SdkScmPurModule;
            }
            interface SdkScmPurModule$ {
            }
            type SdkScmPurModule_T = $.kd.sdk.module.Module & SdkScmPurModule_S & SdkScmPurModule$;
            interface SdkScmPurModule extends SdkScmPurModule_T {
            }
        }
        namespace kd.sdk.scm.pur.extpoint{
            interface IPurOrderChangeSupport_S {
                readonly PUR_EXTEND_CASE_NAME:string;
            }
            interface IPurOrderChangeSupport$ {
                putOrderEntryFields?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.kd.bos.dataentity.entity.DynamicObject):void;
                setOrderHeadFields?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IPurOrderChangeSupport_T = IPurOrderChangeSupport_S & IPurOrderChangeSupport$;
            interface IPurOrderChangeSupport extends IPurOrderChangeSupport_T {
            }
            interface IPurHandCheckSupport_S {
                readonly PUR_EXTEND_CASE_NAME:string;
            }
            interface IPurHandCheckSupport$ {
                getEntityExtendFieldsMap?():$.java.util.Map;
                getExtendCheckGroups?():$.java.util.Map;
                getExtendFields?():$.java.util.List;
                getExtendParams?():$.java.util.List;
                getFilterMap?(arg0:$.java.util.Map,arg1:string):$.java.util.Map;
                getParamsMap?(arg0:$.java.util.Map):$.java.util.Map;
                putCheckEntryFields?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
                putCheckHeadFields?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
                removeCheckGroups?():$.java.util.List;
            }
            type IPurHandCheckSupport_T = IPurHandCheckSupport_S & IPurHandCheckSupport$;
            interface IPurHandCheckSupport extends IPurHandCheckSupport_T {
            }
            interface ICreateOrderSupport_S {
                readonly PUR_EXTEND_CASE_NAME:string;
            }
            interface ICreateOrderSupport$ {
            }
            type ICreateOrderSupport_T = kd.sdk.scm.common.extpoint.ITransferDataSupport & ICreateOrderSupport_S & ICreateOrderSupport$;
            interface ICreateOrderSupport extends ICreateOrderSupport_T {
            }
            interface ICreateAPBillSupport_S {
                readonly PUR_EXTEND_CASE_NAME:string;
            }
            interface ICreateAPBillSupport$ {
                assembleBillExtPro?(arg0:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.Map;
                assembleCQBillExtPro?(arg0:$.kd.bos.dataentity.entity.DynamicObject[]):$.java.util.Map;
            }
            type ICreateAPBillSupport_T = kd.sdk.scm.common.extpoint.ITransferDataSupport & ICreateAPBillSupport_S & ICreateAPBillSupport$;
            interface ICreateAPBillSupport extends ICreateAPBillSupport_T {
            }
            interface IBatchStockSupport_S {
                readonly PUR_EXTEND_CASE_NAME:string;
            }
            interface IBatchStockSupport$ {
            }
            type IBatchStockSupport_T = kd.sdk.scm.common.extpoint.ITransferDataSupport & IBatchStockSupport_S & IBatchStockSupport$;
            interface IBatchStockSupport extends IBatchStockSupport_T {
            }
        }
        namespace kd.sdk.scm.quo{
            interface SdkScmQuoModule_S {
            }
            type SdkScmQuoModule_ST = $.kd.sdk.module.Module & SdkScmQuoModule_S;
            interface SdkScmQuoModule_C extends SdkScmQuoModule_ST {
                new():SdkScmQuoModule;
            }
            interface SdkScmQuoModule$ {
            }
            type SdkScmQuoModule_T = $.kd.sdk.module.Module & SdkScmQuoModule_S & SdkScmQuoModule$;
            interface SdkScmQuoModule extends SdkScmQuoModule_T {
            }
        }
        namespace kd.sdk.scm.quo.extpoint{
            interface IQuoInquiryVerify_S {
            }
            interface IQuoInquiryVerify$ {
                getQuoMaxEntry(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.java.util.List):$.kd.bos.dataentity.entity.DynamicObject;
                getQuoMaxEntry(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.java.util.List,arg2:$.java.util.Map):$.kd.bos.dataentity.entity.DynamicObject;
                verifyQuote(arg0:$.java.util.Map,arg1:$.kd.bos.dataentity.entity.DynamicObject):void;
                verifyQuote(arg0:$.java.util.Map,arg1:$.kd.bos.dataentity.entity.DynamicObject,arg2:$.java.util.List):void;
            }
            type IQuoInquiryVerify_T = IQuoInquiryVerify_S & IQuoInquiryVerify$;
            interface IQuoInquiryVerify extends IQuoInquiryVerify_T {
            }
        }
        namespace kd.sdk.scm.scp{
            interface SdkScmScpModule_S {
            }
            type SdkScmScpModule_ST = $.kd.sdk.module.Module & SdkScmScpModule_S;
            interface SdkScmScpModule_C extends SdkScmScpModule_ST {
                new():SdkScmScpModule;
            }
            interface SdkScmScpModule$ {
            }
            type SdkScmScpModule_T = $.kd.sdk.module.Module & SdkScmScpModule_S & SdkScmScpModule$;
            interface SdkScmScpModule extends SdkScmScpModule_T {
            }
        }
        namespace kd.sdk.scm.scp.bean{
            interface InvoiceDataVo$StationPosition_S {
            }
            interface InvoiceDataVo$StationPosition_C extends InvoiceDataVo$StationPosition_S {
                new():InvoiceDataVo$StationPosition;
            }
            interface InvoiceDataVo$StationPosition$ {
                getArea():string;
                getCity():string;
                getProvince():string;
                setArea(arg0:string):void;
                setCity(arg0:string):void;
                setProvince(arg0:string):void;
            }
            type InvoiceDataVo$StationPosition_T = InvoiceDataVo$StationPosition_S & InvoiceDataVo$StationPosition$;
            interface InvoiceDataVo$StationPosition extends InvoiceDataVo$StationPosition_T {
            }
            interface InvoiceDataVo_S {
            }
            type InvoiceDataVo_ST = $.java.io.Serializable & InvoiceDataVo_S;
            interface InvoiceDataVo_C extends InvoiceDataVo_ST {
                new():InvoiceDataVo;
            }
            interface InvoiceDataVo$ {
                getAirportConstructionFee():$.java.math.BigDecimal;
                getAmount():$.java.math.BigDecimal;
                getAuthenticateFlag():number;
                getAuthenticateTime():string;
                getBillCreateTime():Date;
                getBuyerAccount():string;
                getBuyerAddressPhone():string;
                getBuyerName():string;
                getBuyerTaxNo():string;
                getCheckCode():string;
                getCheckFlag():number;
                getCheckStatus():string;
                getCheckTime():string;
                getCity():string;
                getCurrencyId():long;
                getCustomerIdentityNum():string;
                getDeparturePosition():InvoiceDataVo$StationPosition;
                getDestinationPosition():InvoiceDataVo$StationPosition;
                getDownloadUrl():string;
                getDrawer():string;
                getExpenseStatus():string;
                getFillingUnit():string;
                getFlightNum():string;
                getFuelSurcharge():$.java.math.BigDecimal;
                getInsurancePremium():$.java.math.BigDecimal;
                getInvoiceAmount():string;
                getInvoiceCode():string;
                getInvoiceDate():Date;
                getInvoiceMoney():string;
                getInvoiceNo():string;
                getInvoiceStatus():string;
                getInvoiceType():string;
                getIsRevise():string;
                getItems():$.java.util.List;
                getMileage():string;
                getOriginalGraphUrl():string;
                getOtherTotalTaxAmount():$.java.math.BigDecimal;
                getPassengerName():string;
                getPayee():string;
                getPixel():string;
                getProvince():string;
                getProxyMark():string;
                getRegion():string;
                getRemark():string;
                getReviewer():string;
                getSalerAccount():string;
                getSalerAddressPhone():string;
                getSalerName():string;
                getSalerTaxNo():string;
                getSeatGrade():string;
                getSeatGradeName():string;
                getSerialNo():string;
                getSnapshotUrl():string;
                getTaxAmount():$.java.math.BigDecimal;
                getTaxPaidProofNo():string;
                getTaxRate():$.java.math.BigDecimal;
                getThirdpartFieldMap():$.java.util.Map;
                getTicketChanges():string;
                getTimeGetOff():string;
                getTimeGetOn():string;
                getTotalAmount():$.java.math.BigDecimal;
                getTrainNum():string;
                getTrip():string;
                getValidateMessage():string;
                getVerifyResult():$.java.util.List;
                isPersonFlag():boolean;
                setAirportConstructionFee(arg0:$.java.math.BigDecimal):void;
                setAmount(arg0:$.java.math.BigDecimal):void;
                setAuthenticateFlag(arg0:number):void;
                setAuthenticateTime(arg0:string):void;
                setBillCreateTime(arg0:Date):void;
                setBuyerAccount(arg0:string):void;
                setBuyerAddressPhone(arg0:string):void;
                setBuyerName(arg0:string):void;
                setBuyerTaxNo(arg0:string):void;
                setCheckCode(arg0:string):void;
                setCheckFlag(arg0:number):void;
                setCheckStatus(arg0:string):void;
                setCheckTime(arg0:string):void;
                setCity(arg0:string):void;
                setCurrencyId(arg0:long):void;
                setCustomerIdentityNum(arg0:string):void;
                setDeparturePosition(arg0:InvoiceDataVo$StationPosition):void;
                setDestinationPosition(arg0:InvoiceDataVo$StationPosition):void;
                setDownloadUrl(arg0:string):void;
                setDrawer(arg0:string):void;
                setExpenseStatus(arg0:string):void;
                setFillingUnit(arg0:string):void;
                setFlightNum(arg0:string):void;
                setFuelSurcharge(arg0:$.java.math.BigDecimal):void;
                setInsurancePremium(arg0:$.java.math.BigDecimal):void;
                setInvoiceAmount(arg0:string):void;
                setInvoiceCode(arg0:string):void;
                setInvoiceDate(arg0:Date):void;
                setInvoiceMoney(arg0:string):void;
                setInvoiceNo(arg0:string):void;
                setInvoiceStatus(arg0:string):void;
                setInvoiceType(arg0:string):void;
                setIsRevise(arg0:string):void;
                setItems(arg0:$.java.util.List):void;
                setMileage(arg0:string):void;
                setOriginalGraphUrl(arg0:string):void;
                setOtherTotalTaxAmount(arg0:$.java.math.BigDecimal):void;
                setPassengerName(arg0:string):void;
                setPayee(arg0:string):void;
                setPersonFlag(arg0:boolean):void;
                setPixel(arg0:string):void;
                setProvince(arg0:string):void;
                setProxyMark(arg0:string):void;
                setRegion(arg0:string):void;
                setRemark(arg0:string):void;
                setReviewer(arg0:string):void;
                setSalerAccount(arg0:string):void;
                setSalerAddressPhone(arg0:string):void;
                setSalerName(arg0:string):void;
                setSalerTaxNo(arg0:string):void;
                setSeatGrade(arg0:string):void;
                setSeatGradeName(arg0:string):void;
                setSerialNo(arg0:string):void;
                setSnapshotUrl(arg0:string):void;
                setTaxAmount(arg0:$.java.math.BigDecimal):void;
                setTaxPaidProofNo(arg0:string):void;
                setTaxRate(arg0:$.java.math.BigDecimal):void;
                setThirdpartFieldMap(arg0:$.java.util.Map):void;
                setTicketChanges(arg0:string):void;
                setTimeGetOff(arg0:string):void;
                setTimeGetOn(arg0:string):void;
                setTotalAmount(arg0:$.java.math.BigDecimal):void;
                setTrainNum(arg0:string):void;
                setTrip(arg0:string):void;
                setValidateMessage(arg0:string):void;
                setVerifyResult(arg0:$.java.util.List):void;
            }
            type InvoiceDataVo_T = $.java.io.Serializable & InvoiceDataVo_S & InvoiceDataVo$;
            interface InvoiceDataVo extends InvoiceDataVo_T {
            }
        }
        namespace kd.sdk.scm.scp.extpoint{
            interface IAutoStockSupport_S {
                readonly PUR_EXTEND_CASE_NAME:string;
            }
            interface IAutoStockSupport$ {
            }
            type IAutoStockSupport_T = kd.sdk.scm.common.extpoint.ITransferDataSupport & IAutoStockSupport_S & IAutoStockSupport$;
            interface IAutoStockSupport extends IAutoStockSupport_T {
            }
            interface IScpOrderChangeSupport_S {
                readonly SCP_EXTEND_CASE_NAME:string;
            }
            interface IScpOrderChangeSupport$ {
                putOrderEntryFields?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.kd.bos.dataentity.entity.DynamicObject):void;
                setOrderHeadFields?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IScpOrderChangeSupport_T = IScpOrderChangeSupport_S & IScpOrderChangeSupport$;
            interface IScpOrderChangeSupport extends IScpOrderChangeSupport_T {
            }
            interface IScpInvoiceCloudSupport_S {
            }
            interface IScpInvoiceCloudSupport$ {
                getExtensionData?(arg0:kd.sdk.scm.scp.bean.InvoiceDataVo):$.java.util.Map;
            }
            type IScpInvoiceCloudSupport_T = IScpInvoiceCloudSupport_S & IScpInvoiceCloudSupport$;
            interface IScpInvoiceCloudSupport extends IScpInvoiceCloudSupport_T {
            }
            interface IScpHandCheckSupport_S {
                readonly SCP_EXTEND_CASE_NAME:string;
            }
            interface IScpHandCheckSupport$ {
                getEntityExtendFieldsMap?():$.java.util.Map;
                getExtendCheckGroups?():$.java.util.Map;
                getExtendFields?():$.java.util.List;
                getExtendParams?():$.java.util.List;
                getFilterMap?(arg0:$.java.util.Map,arg1:string):$.java.util.Map;
                getParamsMap?(arg0:$.java.util.Map):$.java.util.Map;
                putCheckEntryFields?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
                putCheckHeadFields?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
                removeCheckGroups?():$.java.util.List;
            }
            type IScpHandCheckSupport_T = IScpHandCheckSupport_S & IScpHandCheckSupport$;
            interface IScpHandCheckSupport extends IScpHandCheckSupport_T {
            }
        }
        namespace kd.sdk.scm.sou{
            interface SdkScmSouModule_S {
            }
            type SdkScmSouModule_ST = $.kd.sdk.module.Module & SdkScmSouModule_S;
            interface SdkScmSouModule_C extends SdkScmSouModule_ST {
                new():SdkScmSouModule;
            }
            interface SdkScmSouModule$ {
            }
            type SdkScmSouModule_T = $.kd.sdk.module.Module & SdkScmSouModule_S & SdkScmSouModule$;
            interface SdkScmSouModule extends SdkScmSouModule_T {
            }
        }
        namespace kd.sdk.scm.sou.entity{
            interface SouCompareAssistantDoingArgs_S {
            }
            interface SouCompareAssistantDoingArgs_C extends SouCompareAssistantDoingArgs_S {
                new(arg0:string,arg1:$.java.util.Map,arg2:string,arg3:$.java.util.Map,arg4:$.java.util.Set):SouCompareAssistantDoingArgs;
            }
            interface SouCompareAssistantDoingArgs$ {
                getEntityName():string;
                getOrderBys():string;
                getParams():$.java.util.Map;
                getQuoteOrderBy():string[];
                getResult():$.java.util.Map;
                getSelects():$.java.util.Set;
                getSupGroupBy():string[];
                getSupOrderBy():string[];
                getSupSumProperty():string;
                setQuoteOrderBy(arg0:string[]):void;
                setResult(arg0:$.java.util.Map):void;
                setSupGroupBy(arg0:string[]):void;
                setSupSumProperty(arg0:string):void;
            }
            type SouCompareAssistantDoingArgs_T = SouCompareAssistantDoingArgs_S & SouCompareAssistantDoingArgs$;
            interface SouCompareAssistantDoingArgs extends SouCompareAssistantDoingArgs_T {
            }
            interface SouCompareAssiRecentPriceArgs_S {
            }
            interface SouCompareAssiRecentPriceArgs_C extends SouCompareAssiRecentPriceArgs_S {
                new(arg0:$.java.util.List,arg1:string,arg2:$.java.util.Map,arg3:$.java.util.Set):SouCompareAssiRecentPriceArgs;
            }
            interface SouCompareAssiRecentPriceArgs$ {
                getBlackListMap():$.java.util.Map;
                getMaterialPkIds():$.java.util.List;
                getMonthnumStr():string;
                getResult():$.kd.bos.dataentity.entity.DynamicObjectCollection;
                getSelects():$.java.util.Set;
                setBlackListMap(arg0:$.java.util.Map):void;
                setMaterialPkIds(arg0:$.java.util.List):void;
                setMonthnumStr(arg0:string):void;
                setResult(arg0:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
                setSelects(arg0:$.java.util.Set):void;
            }
            type SouCompareAssiRecentPriceArgs_T = SouCompareAssiRecentPriceArgs_S & SouCompareAssiRecentPriceArgs$;
            interface SouCompareAssiRecentPriceArgs extends SouCompareAssiRecentPriceArgs_T {
            }
            interface AdoptionRule_S {
            }
            interface AdoptionRule_C extends AdoptionRule_S {
                new():AdoptionRule;
            }
            interface AdoptionRule$ {
                addCompareInfo(arg0:string,arg1:any):void;
                getAdoptSet():$.java.util.Set;
                getOrderByRule(arg0:string):string[];
                getQuoteEntry():$.kd.bos.dataentity.entity.DynamicObjectCollection;
                getRule(arg0:string):string;
                initRule(arg0:$.kd.bos.dataentity.entity.DynamicObjectCollection,arg1:$.java.util.Map):void;
                setRow(arg0:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type AdoptionRule_T = AdoptionRule_S & AdoptionRule$;
            interface AdoptionRule extends AdoptionRule_T {
            }
        }
        namespace kd.sdk.scm.sou.extpoint{
            interface ISouCompareToolAdopt_S {
            }
            interface ISouCompareToolAdopt$ {
                wrapAdoptRule():kd.sdk.scm.sou.entity.AdoptionRule;
            }
            type ISouCompareToolAdopt_T = ISouCompareToolAdopt_S & ISouCompareToolAdopt$;
            interface ISouCompareToolAdopt extends ISouCompareToolAdopt_T {
            }
            interface ISouCompareAssistantRecentPriceSource_S {
            }
            interface ISouCompareAssistantRecentPriceSource$ {
                doGetData(arg0:kd.sdk.scm.sou.entity.SouCompareAssiRecentPriceArgs):void;
            }
            type ISouCompareAssistantRecentPriceSource_T = ISouCompareAssistantRecentPriceSource_S & ISouCompareAssistantRecentPriceSource$;
            interface ISouCompareAssistantRecentPriceSource extends ISouCompareAssistantRecentPriceSource_T {
            }
            interface ISouCompareAssistantDataSource_S {
            }
            interface ISouCompareAssistantDataSource$ {
                doGetData(arg0:kd.sdk.scm.sou.entity.SouCompareAssistantDoingArgs):void;
            }
            type ISouCompareAssistantDataSource_T = ISouCompareAssistantDataSource_S & ISouCompareAssistantDataSource$;
            interface ISouCompareAssistantDataSource extends ISouCompareAssistantDataSource_T {
            }
            interface ISouComparePushNoticeVerify_S {
            }
            interface ISouComparePushNoticeVerify$ {
                validatePushNotice?(arg0:string):string;
            }
            type ISouComparePushNoticeVerify_T = ISouComparePushNoticeVerify_S & ISouComparePushNoticeVerify$;
            interface ISouComparePushNoticeVerify extends ISouComparePushNoticeVerify_T {
            }
            interface ISouCompareToEasXKOrder_S {
            }
            interface ISouCompareToEasXKOrder$ {
                dealEntry?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.kd.bos.dataentity.entity.DynamicObject,arg2:$.java.util.Map):void;
                dealHead?(arg0:$.java.util.Map,arg1:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type ISouCompareToEasXKOrder_T = ISouCompareToEasXKOrder_S & ISouCompareToEasXKOrder$;
            interface ISouCompareToEasXKOrder extends ISouCompareToEasXKOrder_T {
            }
            interface ISouCompareToolSupColumn_S {
            }
            interface ISouCompareToolSupColumn$ {
                buildInquirySumColumns(arg0:$.kd.bos.entity.datamodel.IDataModel,arg1:string,arg2:$.java.util.Map,arg3:$.java.util.List):void;
                dealSupColumn(arg0:$.java.util.List,arg1:$.java.util.Map,arg2:$.java.util.Map,arg3:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type ISouCompareToolSupColumn_T = ISouCompareToolSupColumn_S & ISouCompareToolSupColumn$;
            interface ISouCompareToolSupColumn extends ISouCompareToolSupColumn_T {
            }
            interface ISouBidBillToEasXKOrder_S {
            }
            interface ISouBidBillToEasXKOrder$ {
                dealEntry?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.kd.bos.dataentity.entity.DynamicObject,arg2:$.java.util.Map):void;
                dealHead?(arg0:$.java.util.Map,arg1:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type ISouBidBillToEasXKOrder_T = ISouBidBillToEasXKOrder_S & ISouBidBillToEasXKOrder$;
            interface ISouBidBillToEasXKOrder extends ISouBidBillToEasXKOrder_T {
            }
        }
        namespace kd.sdk.scm.srm{
            interface SdkScmSrmModule_S {
            }
            type SdkScmSrmModule_ST = $.kd.sdk.module.Module & SdkScmSrmModule_S;
            interface SdkScmSrmModule_C extends SdkScmSrmModule_ST {
                new():SdkScmSrmModule;
            }
            interface SdkScmSrmModule$ {
            }
            type SdkScmSrmModule_T = $.kd.sdk.module.Module & SdkScmSrmModule_S & SdkScmSrmModule$;
            interface SdkScmSrmModule extends SdkScmSrmModule_T {
            }
        }
        namespace kd.sdk.scm.srm.extpoint{
            interface ISrmEvaplanWritebackScoredService_S {
            }
            interface ISrmEvaplanWritebackScoredService$ {
                exec?(arg0:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type ISrmEvaplanWritebackScoredService_T = ISrmEvaplanWritebackScoredService_S & ISrmEvaplanWritebackScoredService$;
            interface ISrmEvaplanWritebackScoredService extends ISrmEvaplanWritebackScoredService_T {
            }
            interface ISrmAutoCalGroupOrgService_S {
            }
            interface ISrmAutoCalGroupOrgService$ {
                getGroupOrg?(arg0:long,arg1:long):long;
                getGroupOrgField?():string;
            }
            type ISrmAutoCalGroupOrgService_T = ISrmAutoCalGroupOrgService_S & ISrmAutoCalGroupOrgService$;
            interface ISrmAutoCalGroupOrgService extends ISrmAutoCalGroupOrgService_T {
            }
            interface ISrmSupChgInfoEffect_S {
            }
            interface ISrmSupChgInfoEffect$ {
                handleNewValue?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:any):any;
            }
            type ISrmSupChgInfoEffect_T = ISrmSupChgInfoEffect_S & ISrmSupChgInfoEffect$;
            interface ISrmSupChgInfoEffect extends ISrmSupChgInfoEffect_T {
            }
            interface ISrmCalEvaGradeService_S {
            }
            interface ISrmCalEvaGradeService$ {
                calGrade?(arg0:$.java.util.Map,arg1:long,arg2:long,arg3:$.java.math.BigDecimal):$.kd.bos.dataentity.entity.DynamicObject;
            }
            type ISrmCalEvaGradeService_T = ISrmCalEvaGradeService_S & ISrmCalEvaGradeService$;
            interface ISrmCalEvaGradeService extends ISrmCalEvaGradeService_T {
            }
            interface ISrmAllScorerScoredService_S {
            }
            interface ISrmAllScorerScoredService$ {
                doExecExt?(arg0:$.java.util.Map,arg1:long,arg2:$.java.math.BigDecimal):void;
            }
            type ISrmAllScorerScoredService_T = ISrmAllScorerScoredService_S & ISrmAllScorerScoredService$;
            interface ISrmAllScorerScoredService extends ISrmAllScorerScoredService_T {
            }
            interface ISrmRegisterSendMessageService_S {
            }
            interface ISrmRegisterSendMessageService$ {
                sendMessage?(arg0:$.kd.bos.entity.cache.IAppCache,arg1:string,arg2:string,arg3:string):void;
            }
            type ISrmRegisterSendMessageService_T = ISrmRegisterSendMessageService_S & ISrmRegisterSendMessageService$;
            interface ISrmRegisterSendMessageService extends ISrmRegisterSendMessageService_T {
            }
            interface ISrmAssignUserRoleService_S {
            }
            interface ISrmAssignUserRoleService$ {
                getSubOrgInfo?(arg0:string):$.java.util.Map;
                getUserRoleExt?(arg0:string):$.java.util.Map;
            }
            type ISrmAssignUserRoleService_T = ISrmAssignUserRoleService_S & ISrmAssignUserRoleService$;
            interface ISrmAssignUserRoleService extends ISrmAssignUserRoleService_T {
            }
            interface IMainPage1NoticeService_S {
            }
            interface IMainPage1NoticeService$ {
                getCompeteNoticeFilter?():$.kd.bos.orm.query.QFilter;
                getHelpNoticeFilter?():$.kd.bos.orm.query.QFilter;
                getNoticeFilter?(arg0:string):$.kd.bos.orm.query.QFilter;
                getQueryNoticeFilter?():$.kd.bos.orm.query.QFilter;
                getSourceNoticeFilter?():$.kd.bos.orm.query.QFilter;
                getSystemNoticeFilter?():$.kd.bos.orm.query.QFilter;
                getWinNoticeFilter?():$.kd.bos.orm.query.QFilter;
            }
            type IMainPage1NoticeService_T = IMainPage1NoticeService_S & IMainPage1NoticeService$;
            interface IMainPage1NoticeService extends IMainPage1NoticeService_T {
            }
            interface ISrmSupChgPurUserAdminModifyService_S {
            }
            interface ISrmSupChgPurUserAdminModifyService$ {
                changePurUser?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:any,arg2:string,arg3:string,arg4:string,arg5:string,arg6:string):void;
                setCombItem?(arg0:$.java.util.List,arg1:boolean):void;
            }
            type ISrmSupChgPurUserAdminModifyService_T = ISrmSupChgPurUserAdminModifyService_S & ISrmSupChgPurUserAdminModifyService$;
            interface ISrmSupChgPurUserAdminModifyService extends ISrmSupChgPurUserAdminModifyService_T {
            }
            interface ISrmSynBdSupplierService_S {
            }
            interface ISrmSynBdSupplierService$ {
                setSynFileds?():$.java.util.List;
            }
            type ISrmSynBdSupplierService_T = ISrmSynBdSupplierService_S & ISrmSynBdSupplierService$;
            interface ISrmSynBdSupplierService extends ISrmSynBdSupplierService_T {
            }
            interface ISupplierRegSetDefValueService_S {
            }
            interface ISupplierRegSetDefValueService$ {
                setFieldsDefValue?(arg0:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type ISupplierRegSetDefValueService_T = ISupplierRegSetDefValueService_S & ISupplierRegSetDefValueService$;
            interface ISupplierRegSetDefValueService extends ISupplierRegSetDefValueService_T {
            }
            interface ISrmAutoCalPluginService_S {
            }
            interface ISrmAutoCalPluginService$ {
                doAutoCal(arg0:kd.sdk.scm.srm.extpoint.dto.SrmAutoScoreReq):$.java.util.List;
            }
            type ISrmAutoCalPluginService_T = ISrmAutoCalPluginService_S & ISrmAutoCalPluginService$;
            interface ISrmAutoCalPluginService extends ISrmAutoCalPluginService_T {
            }
            interface ISrmAccessNodeService_S {
            }
            interface ISrmAccessNodeService$ {
                pushBill?(arg0:string,arg1:$.java.util.List):string;
                setAptitudeNodeStatus?(arg0:string,arg1:long,arg2:boolean,arg3:Date):string;
                setNodeBillnoAndStatus?(arg0:string,arg1:long,arg2:$.kd.bos.dataentity.entity.DynamicObject,arg3:$.kd.bos.dataentity.entity.DynamicObject):void;
                setSupapproveNodeStatus?(arg0:string,arg1:$.kd.bos.dataentity.entity.DynamicObject[],arg2:boolean):string;
                verifyAptitudeNo?(arg0:string,arg1:long):string;
            }
            type ISrmAccessNodeService_T = ISrmAccessNodeService_S & ISrmAccessNodeService$;
            interface ISrmAccessNodeService extends ISrmAccessNodeService_T {
            }
        }
        namespace kd.sdk.scm.srm.extpoint.dto{
            interface SrmAutoScoreReq_S {
            }
            type SrmAutoScoreReq_ST = $.java.io.Serializable & SrmAutoScoreReq_S;
            interface SrmAutoScoreReq_C extends SrmAutoScoreReq_ST {
                new():SrmAutoScoreReq;
            }
            interface SrmAutoScoreReq$ {
                getData():$.java.util.List;
                getEndDate():Date;
                getEvaDimension():string;
                getEvaplanId():long;
                getOrgId():long;
                getStartDate():Date;
                setData(arg0:$.java.util.List):void;
                setEndDate(arg0:Date):void;
                setEvaDimension(arg0:string):void;
                setEvaplanId(arg0:long):void;
                setOrgId(arg0:long):void;
                setStartDate(arg0:Date):void;
            }
            type SrmAutoScoreReq_T = $.java.io.Serializable & SrmAutoScoreReq_S & SrmAutoScoreReq$;
            interface SrmAutoScoreReq extends SrmAutoScoreReq_T {
            }
            interface SrmAutoScoreResp_S {
            }
            type SrmAutoScoreResp_ST = $.java.io.Serializable & SrmAutoScoreResp_S;
            interface SrmAutoScoreResp_C extends SrmAutoScoreResp_ST {
                new():SrmAutoScoreResp;
            }
            interface SrmAutoScoreResp$ {
                categoryId:long;
                getCategoryId():long;
                getEvaplanId():long;
                getIndexId():long;
                getIndexScoreDetailId():long;
                getMaterialId():long;
                getResult():$.java.math.BigDecimal;
                getScoreTaskId():long;
                getSupplierId():long;
                setCategoryId(arg0:long):void;
                setEvaplanId(arg0:long):void;
                setIndexId(arg0:long):void;
                setIndexScoreDetailId(arg0:long):void;
                setMaterialId(arg0:long):void;
                setResult(arg0:$.java.math.BigDecimal):void;
                setScoreTaskId(arg0:long):void;
                setSupplierId(arg0:long):void;
            }
            type SrmAutoScoreResp_T = $.java.io.Serializable & SrmAutoScoreResp_S & SrmAutoScoreResp$;
            interface SrmAutoScoreResp extends SrmAutoScoreResp_T {
            }
        }
        namespace kd.sdk.scm.srm.extpoint.dto.indicator{
            interface SrmPortraitContext_S {
            }
            type SrmPortraitContext_ST = $.java.io.Serializable & SrmPortraitContext_S;
            interface SrmPortraitContext_C extends SrmPortraitContext_ST {
                new():SrmPortraitContext;
            }
            interface SrmPortraitContext$ {
                getBdSupplierIds():$.java.util.List;
                getCurrId():long;
                getCustomParam():$.java.util.Map;
                getDateFrom():Date;
                getDateTo():Date;
                getOrgIds():$.java.util.List;
                getSupplierIds():$.java.util.List;
                setBdSupplierIds(arg0:$.java.util.List):void;
                setCurrId(arg0:long):void;
                setCustomParam(arg0:$.java.util.Map):void;
                setDateFrom(arg0:Date):void;
                setDateTo(arg0:Date):void;
                setOrgIds(arg0:$.java.util.List):void;
                setSupplierIds(arg0:$.java.util.List):void;
            }
            type SrmPortraitContext_T = $.java.io.Serializable & SrmPortraitContext_S & SrmPortraitContext$;
            interface SrmPortraitContext extends SrmPortraitContext_T {
            }
            interface SrmPortraitStatisticContainer_S {
            }
            interface SrmPortraitStatisticContainer_C extends SrmPortraitStatisticContainer_S {
                new():SrmPortraitStatisticContainer;
            }
            interface SrmPortraitStatisticContainer$ {
                combine(arg0:SrmPortraitStatisticContainer):void;
                getConfigs():$.kd.bos.dataentity.entity.DynamicObject[];
                getRealTimeStatisticInfoMap():$.java.util.Map;
                getStatisticInfoMap():$.java.util.Map;
                getTags(arg0:string):$.java.util.Set;
                setConfigs(arg0:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                setRealTimeStatisticInfoMap(arg0:$.java.util.Map):void;
                setStatisticInfoMap(arg0:$.java.util.Map):void;
            }
            type SrmPortraitStatisticContainer_T = SrmPortraitStatisticContainer_S & SrmPortraitStatisticContainer$;
            interface SrmPortraitStatisticContainer extends SrmPortraitStatisticContainer_T {
            }
            interface SrmPortraitStatisticInfo_S {
            }
            interface SrmPortraitStatisticInfo_C extends SrmPortraitStatisticInfo_S {
                new():SrmPortraitStatisticInfo;
            }
            interface SrmPortraitStatisticInfo$ {
                combine(arg0:SrmPortraitStatisticInfo):void;
                getAmount():$.java.math.BigDecimal;
                getBidNum():number;
                getContractAmount():$.java.math.BigDecimal;
                getContractNum():number;
                getCurrId():long;
                getOrderNum():number;
                getOrgId():long;
                getPaidAllAmount():$.java.math.BigDecimal;
                getPaidPreAllAmount():$.java.math.BigDecimal;
                getSupplierId():long;
                getUnConFirmOrderNum():number;
                getWinNum():number;
                setAmount(arg0:$.java.math.BigDecimal):void;
                setBidNum(arg0:number):void;
                setContractAmount(arg0:$.java.math.BigDecimal):void;
                setContractNum(arg0:number):void;
                setCurrId(arg0:long):void;
                setOrderNum(arg0:number):void;
                setOrgId(arg0:long):void;
                setPaidAllAmount(arg0:$.java.math.BigDecimal):void;
                setPaidPreAllAmount(arg0:$.java.math.BigDecimal):void;
                setSupplierId(arg0:long):void;
                setUnConFirmOrderNum(arg0:number):void;
                setWinNum(arg0:number):void;
            }
            type SrmPortraitStatisticInfo_T = SrmPortraitStatisticInfo_S & SrmPortraitStatisticInfo$;
            interface SrmPortraitStatisticInfo extends SrmPortraitStatisticInfo_T {
            }
        }
        namespace kd.sdk.scm.srm.extpoint.portait{
            interface AbstractSrmPortraitDataSetStatistic_S {
                dealQueryTime(arg0:kd.sdk.scm.srm.extpoint.dto.indicator.SrmPortraitContext,arg1:Date,arg2:Date):string;
                formatDate(arg0:Date):Date;
                setBeforeMonth(arg0:kd.sdk.scm.srm.extpoint.dto.indicator.SrmPortraitContext,arg1:Date,arg2:number):void;
                wrapCommonFilter(arg0:string,arg1:string,arg2:string,arg3:kd.sdk.scm.srm.extpoint.dto.indicator.SrmPortraitContext):$.kd.bos.orm.query.QFilter;
            }
            type AbstractSrmPortraitDataSetStatistic_ST = ISrmPortraitStatistic_S & AbstractSrmPortraitDataSetStatistic_S;
            interface AbstractSrmPortraitDataSetStatistic_C extends AbstractSrmPortraitDataSetStatistic_ST {
                new():AbstractSrmPortraitDataSetStatistic;
            }
            interface AbstractSrmPortraitDataSetStatistic$ {
            }
            type AbstractSrmPortraitDataSetStatistic_T = ISrmPortraitStatistic & AbstractSrmPortraitDataSetStatistic_S & AbstractSrmPortraitDataSetStatistic$;
            interface AbstractSrmPortraitDataSetStatistic extends AbstractSrmPortraitDataSetStatistic_T {
            }
            interface ISrmPortraitStatistic_S {
                getContextFromCache(arg0:$.kd.bos.form.IPageCache):kd.sdk.scm.srm.extpoint.dto.indicator.SrmPortraitContext;
                putContextToCache(arg0:$.kd.bos.form.IPageCache,arg1:kd.sdk.scm.srm.extpoint.dto.indicator.SrmPortraitContext):void;
                viewPortraitIndicatorDetail(arg0:string,arg1:$.kd.bos.form.IFormView,arg2:$.java.util.Map,arg3:$.kd.bos.form.CloseCallBack):void;
                viewSrmPortraitInfo(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.kd.bos.form.IFormView):void;
            }
            interface ISrmPortraitStatistic$ {
                isAsync?():boolean;
                process(arg0:kd.sdk.scm.srm.extpoint.dto.indicator.SrmPortraitContext,arg1:kd.sdk.scm.srm.extpoint.dto.indicator.SrmPortraitStatisticContainer):kd.sdk.scm.srm.extpoint.dto.indicator.SrmPortraitStatisticContainer;
                startStatistic(arg0:kd.sdk.scm.srm.extpoint.dto.indicator.SrmPortraitContext,arg1:kd.sdk.scm.srm.extpoint.dto.indicator.SrmPortraitStatisticContainer):void;
            }
            type ISrmPortraitStatistic_T = ISrmPortraitStatistic_S & ISrmPortraitStatistic$;
            interface ISrmPortraitStatistic extends ISrmPortraitStatistic_T {
            }
        }
    }
}
export {};