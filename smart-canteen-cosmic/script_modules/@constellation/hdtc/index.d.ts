/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.sdk.hdtc.hrdbs.model{
            interface ApiResponse_S {
                failed(arg0:string,arg1:string):ApiResponse;
                failed(arg0:string,arg1:string,arg2:$.java.util.Map):ApiResponse;
                success(arg0:string):ApiResponse;
            }
            type ApiResponse_ST = $.java.io.Serializable & ApiResponse_S;
            interface ApiResponse_C extends ApiResponse_ST {
                new():ApiResponse;
            }
            interface ApiResponse$ {
                getErrorMsg():$.java.util.Map;
                getFailCount():string;
                getSuccessCount():string;
                setErrorMsg(arg0:$.java.util.Map):void;
                setFailCount(arg0:string):void;
                setSuccessCount(arg0:string):void;
            }
            type ApiResponse_T = $.java.io.Serializable & ApiResponse_S & ApiResponse$;
            interface ApiResponse extends ApiResponse_T {
            }
        }
        namespace kd.sdk.hdtc.hrdi{
            interface SdkHdtcHrdiModule_S {
            }
            type SdkHdtcHrdiModule_ST = $.kd.sdk.module.Module & SdkHdtcHrdiModule_S;
            interface SdkHdtcHrdiModule_C extends SdkHdtcHrdiModule_ST {
                new():SdkHdtcHrdiModule;
            }
            interface SdkHdtcHrdiModule$ {
            }
            type SdkHdtcHrdiModule_T = $.kd.sdk.module.Module & SdkHdtcHrdiModule_S & SdkHdtcHrdiModule$;
            interface SdkHdtcHrdiModule extends SdkHdtcHrdiModule_T {
            }
        }
        namespace kd.sdk.hdtc.hrdi.adaptor.api{
            interface IBizSyncSceneAdaptor_S {
            }
            interface IBizSyncSceneAdaptor$ {
                sync(arg0:$.kd.bos.dataentity.entity.DynamicObject[]):$.java.util.Map;
            }
            type IBizSyncSceneAdaptor_T = IBizSyncSceneAdaptor_S & IBizSyncSceneAdaptor$;
            interface IBizSyncSceneAdaptor extends IBizSyncSceneAdaptor_T {
            }
        }
        namespace kd.sdk.hdtc.hrdi.adaptor.extend{
            interface IBaseDataBeforeInvokeApiExtend_S {
            }
            interface IBaseDataBeforeInvokeApiExtend$ {
                beforeInvokeApi(arg0:kd.sdk.hdtc.hrdi.adaptor.model.BaseDataBeforeInvokeApiArgs):void;
            }
            type IBaseDataBeforeInvokeApiExtend_T = IBaseDataBeforeInvokeApiExtend_S & IBaseDataBeforeInvokeApiExtend$;
            interface IBaseDataBeforeInvokeApiExtend extends IBaseDataBeforeInvokeApiExtend_T {
            }
            interface IPersonMainEntityExtend_S {
            }
            interface IPersonMainEntityExtend$ {
                getPersonMainExtEntity():$.java.util.Map;
            }
            type IPersonMainEntityExtend_T = IPersonMainEntityExtend_S & IPersonMainEntityExtend$;
            interface IPersonMainEntityExtend extends IPersonMainEntityExtend_T {
            }
            interface IBizSyncSceneExtendAdaptor_S {
            }
            interface IBizSyncSceneExtendAdaptor$ {
                afterSync(arg0:string,arg1:$.java.util.Map):void;
                afterSyncSuccess(arg0:$.java.util.List):void;
                beforeSync(arg0:$.kd.bos.dataentity.entity.DynamicObject[]):void;
            }
            type IBizSyncSceneExtendAdaptor_T = IBizSyncSceneExtendAdaptor_S & IBizSyncSceneExtendAdaptor$;
            interface IBizSyncSceneExtendAdaptor extends IBizSyncSceneExtendAdaptor_T {
            }
            interface IMidTableDataExtendValidator_S {
            }
            interface IMidTableDataExtendValidator$ {
                validate(arg0:$.java.util.List):$.java.util.Map;
            }
            type IMidTableDataExtendValidator_T = IMidTableDataExtendValidator_S & IMidTableDataExtendValidator$;
            interface IMidTableDataExtendValidator extends IMidTableDataExtendValidator_T {
            }
            interface IBaseDataUniqueFieldExtend_S {
            }
            interface IBaseDataUniqueFieldExtend$ {
                getUniqueField(arg0:string):string;
            }
            type IBaseDataUniqueFieldExtend_T = IBaseDataUniqueFieldExtend_S & IBaseDataUniqueFieldExtend$;
            interface IBaseDataUniqueFieldExtend extends IBaseDataUniqueFieldExtend_T {
            }
            interface IBizPersonDataMappingExtendUpdate_S {
            }
            interface IBizPersonDataMappingExtendUpdate$ {
                afterGenerateFourFloorPersonId(arg0:$.java.util.List):void;
            }
            type IBizPersonDataMappingExtendUpdate_T = IBizPersonDataMappingExtendUpdate_S & IBizPersonDataMappingExtendUpdate$;
            interface IBizPersonDataMappingExtendUpdate extends IBizPersonDataMappingExtendUpdate_T {
            }
        }
        namespace kd.sdk.hdtc.hrdi.adaptor.model{
            interface BaseDataBeforeInvokeApiArgs_S {
            }
            interface BaseDataBeforeInvokeApiArgs_C extends BaseDataBeforeInvokeApiArgs_S {
                new():BaseDataBeforeInvokeApiArgs;
            }
            interface BaseDataBeforeInvokeApiArgs$ {
                getDataList():$.java.util.List;
                getEntityNumber():string;
                getOperation():string;
                setDataList(arg0:$.java.util.List):void;
                setEntityNumber(arg0:string):void;
                setOperation(arg0:string):void;
            }
            type BaseDataBeforeInvokeApiArgs_T = BaseDataBeforeInvokeApiArgs_S & BaseDataBeforeInvokeApiArgs$;
            interface BaseDataBeforeInvokeApiArgs extends BaseDataBeforeInvokeApiArgs_T {
            }
        }
        namespace kd.sdk.hdtc.hrdi.adaptor.service{
            interface HrdiBizDataSyncServiceHelper_S {
                syncMidTableData(arg0:string,arg1:string,arg2:string,arg3:$.java.util.List):kd.sdk.hdtc.hrdbs.model.ApiResponse;
            }
            interface HrdiBizDataSyncServiceHelper_C extends HrdiBizDataSyncServiceHelper_S {
                new():HrdiBizDataSyncServiceHelper;
            }
            interface HrdiBizDataSyncServiceHelper$ {
            }
            type HrdiBizDataSyncServiceHelper_T = HrdiBizDataSyncServiceHelper_S & HrdiBizDataSyncServiceHelper$;
            interface HrdiBizDataSyncServiceHelper extends HrdiBizDataSyncServiceHelper_T {
            }
        }
    }
}
export {};