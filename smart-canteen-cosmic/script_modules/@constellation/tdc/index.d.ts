/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.bos.ext.hr.ruleengine.enums{
            enum ParamTypeEnum {
                BOOLEAN,
                DATE,
                STRING,
                NUMBER,
                ENUM,
                MUL_ENUM,
                DYNAMICOBJECT,
                MUL_DYNAMICOBJECT,
                ADMINORG,
                MUL_ADMINORG,
                BASEDATA,
                OTHER
            }
        }
        namespace kd.sdk.tdc.cadm{
            interface SdkTdcCadmModule_S {
            }
            type SdkTdcCadmModule_ST = $.kd.sdk.module.Module & SdkTdcCadmModule_S;
            interface SdkTdcCadmModule_C extends SdkTdcCadmModule_ST {
                new():SdkTdcCadmModule;
            }
            interface SdkTdcCadmModule$ {
            }
            type SdkTdcCadmModule_T = $.kd.sdk.module.Module & SdkTdcCadmModule_S & SdkTdcCadmModule$;
            interface SdkTdcCadmModule extends SdkTdcCadmModule_T {
            }
        }
        namespace kd.sdk.tdc.caqm{
            interface SdkTdcCaqmModule_S {
            }
            type SdkTdcCaqmModule_ST = $.kd.sdk.module.Module & SdkTdcCaqmModule_S;
            interface SdkTdcCaqmModule_C extends SdkTdcCaqmModule_ST {
                new():SdkTdcCaqmModule;
            }
            interface SdkTdcCaqmModule$ {
            }
            type SdkTdcCaqmModule_T = $.kd.sdk.module.Module & SdkTdcCaqmModule_S & SdkTdcCaqmModule$;
            interface SdkTdcCaqmModule extends SdkTdcCaqmModule_T {
            }
        }
        namespace kd.sdk.tdc.caqm.qualistand{
            interface IQualiStandExtendService_S {
            }
            interface IQualiStandExtendService$ {
                setCapItemId(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.java.util.Set):void;
                setFamilyAndClassQFilter(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.java.util.List):void;
                setScmAndSeqQFilter(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.java.util.List):void;
                setSeqAndFamilyQFilter(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.java.util.List):void;
            }
            type IQualiStandExtendService_T = IQualiStandExtendService_S & IQualiStandExtendService$;
            interface IQualiStandExtendService extends IQualiStandExtendService_T {
            }
        }
        namespace kd.sdk.tdc.oatr{
            interface SdkTdcOatrModule_S {
            }
            type SdkTdcOatrModule_ST = $.kd.sdk.module.Module & SdkTdcOatrModule_S;
            interface SdkTdcOatrModule_C extends SdkTdcOatrModule_ST {
                new():SdkTdcOatrModule;
            }
            interface SdkTdcOatrModule$ {
            }
            type SdkTdcOatrModule_T = $.kd.sdk.module.Module & SdkTdcOatrModule_S & SdkTdcOatrModule$;
            interface SdkTdcOatrModule extends SdkTdcOatrModule_T {
            }
        }
        namespace kd.sdk.tdc.oatr.activity{
            interface IReviewTalentMapExtendService_S {
            }
            interface IReviewTalentMapExtendService$ {
                setTalentMapDefaultValue():$.java.util.Map;
            }
            type IReviewTalentMapExtendService_T = IReviewTalentMapExtendService_S & IReviewTalentMapExtendService$;
            interface IReviewTalentMapExtendService extends IReviewTalentMapExtendService_T {
            }
        }
        namespace kd.sdk.tdc.oatr.onlinecalibrate{
            interface IValidateOnlineCalibration_S {
            }
            interface IValidateOnlineCalibration$ {
                validateCalibrationPerson(arg0:long,arg1:long,arg2:long):string;
            }
            type IValidateOnlineCalibration_T = IValidateOnlineCalibration_S & IValidateOnlineCalibration$;
            interface IValidateOnlineCalibration extends IValidateOnlineCalibration_T {
            }
            interface IOnlineCalibrationMapExtService_S {
            }
            interface IOnlineCalibrationMapExtService$ {
                modifyCalibrationMapData(arg0:$.java.util.Map):void;
            }
            type IOnlineCalibrationMapExtService_T = IOnlineCalibrationMapExtService_S & IOnlineCalibrationMapExtService$;
            interface IOnlineCalibrationMapExtService extends IOnlineCalibrationMapExtService_T {
            }
        }
        namespace kd.sdk.tdc.oatr.reviewobject{
            interface IReviewObjectTreeListExtendService_S {
            }
            interface IReviewObjectTreeListExtendService$ {
                enableTreeListNumberFilter(arg0:long,arg1:long,arg2:boolean):boolean;
                getTreeListNumberFilterReviewObjectId(arg0:long,arg1:long,arg2:boolean):$.java.util.List;
            }
            type IReviewObjectTreeListExtendService_T = IReviewObjectTreeListExtendService_S & IReviewObjectTreeListExtendService$;
            interface IReviewObjectTreeListExtendService extends IReviewObjectTreeListExtendService_T {
            }
            interface IEvalImportExtendService_S {
            }
            interface IEvalImportExtendService$ {
                evalImportConvertor(arg0:any,arg1:$.java.util.List):void;
                isUseEvalImportConvertor(arg0:any):boolean;
            }
            type IEvalImportExtendService_T = IEvalImportExtendService_S & IEvalImportExtendService$;
            interface IEvalImportExtendService extends IEvalImportExtendService_T {
            }
            interface IDimResultImportExtendService_S {
            }
            interface IDimResultImportExtendService$ {
                dimResultImportConvertor(arg0:any,arg1:$.java.util.List):void;
                isUseDimResultImportConvertor(arg0:any):boolean;
            }
            type IDimResultImportExtendService_T = IDimResultImportExtendService_S & IDimResultImportExtendService$;
            interface IDimResultImportExtendService extends IDimResultImportExtendService_T {
            }
            interface IDimensionOriginalValueExtendService_S {
            }
            interface IDimensionOriginalValueExtendService$ {
                dimValueConvertor(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:string):string;
                isEnableDimValueValidator():boolean;
                isShowOriginalColumn():boolean;
                setColumnName(arg0:$.java.util.List):void;
            }
            type IDimensionOriginalValueExtendService_T = IDimensionOriginalValueExtendService_S & IDimensionOriginalValueExtendService$;
            interface IDimensionOriginalValueExtendService extends IDimensionOriginalValueExtendService_T {
            }
            interface IReviewObjectTalentFileExtService_S {
            }
            interface IReviewObjectTalentFileExtService$ {
                addReviewObjValidate(arg0:$.kd.bos.dataentity.entity.DynamicObject[],arg1:$.java.util.Map,arg2:$.kd.bos.dataentity.entity.DynamicObject,arg3:$.java.util.Map):void;
                setQueryTalentFileQFilter(arg0:$.java.util.Map,arg1:$.java.util.List):void;
            }
            type IReviewObjectTalentFileExtService_T = IReviewObjectTalentFileExtService_S & IReviewObjectTalentFileExtService$;
            interface IReviewObjectTalentFileExtService extends IReviewObjectTalentFileExtService_T {
            }
        }
        namespace kd.sdk.tdc.sucp{
            interface SdkTdcSucpModule_S {
            }
            type SdkTdcSucpModule_ST = $.kd.sdk.module.Module & SdkTdcSucpModule_S;
            interface SdkTdcSucpModule_C extends SdkTdcSucpModule_ST {
                new():SdkTdcSucpModule;
            }
            interface SdkTdcSucpModule$ {
            }
            type SdkTdcSucpModule_T = $.kd.sdk.module.Module & SdkTdcSucpModule_S & SdkTdcSucpModule$;
            interface SdkTdcSucpModule extends SdkTdcSucpModule_T {
            }
        }
        namespace kd.sdk.tdc.tala.portrait{
            interface IRuleConditionComparator_S {
            }
            interface IRuleConditionComparator$ {
                compare(arg0:kd.bos.ext.hr.ruleengine.enums.ParamTypeEnum,arg1:$.java.util.List,arg2:$.java.util.Map,arg3:$.java.util.List,arg4:$.java.util.Map):boolean;
            }
            type IRuleConditionComparator_T = IRuleConditionComparator_S & IRuleConditionComparator$;
            interface IRuleConditionComparator extends IRuleConditionComparator_T {
            }
            interface ITalentPortraitService_S {
            }
            interface ITalentPortraitService$ {
                getExtendedInputParam(arg0:$.java.util.Map):$.java.util.Map;
            }
            type ITalentPortraitService_T = ITalentPortraitService_S & ITalentPortraitService$;
            interface ITalentPortraitService extends ITalentPortraitService_T {
            }
        }
        namespace kd.sdk.tdc.talp{
            interface SdkTdcTalpModule_S {
            }
            type SdkTdcTalpModule_ST = $.kd.sdk.module.Module & SdkTdcTalpModule_S;
            interface SdkTdcTalpModule_C extends SdkTdcTalpModule_ST {
                new():SdkTdcTalpModule;
            }
            interface SdkTdcTalpModule$ {
            }
            type SdkTdcTalpModule_T = $.kd.sdk.module.Module & SdkTdcTalpModule_S & SdkTdcTalpModule$;
            interface SdkTdcTalpModule extends SdkTdcTalpModule_T {
            }
        }
        namespace kd.sdk.tdc.tdcs{
            interface SdkTdcTdcsModule_S {
            }
            type SdkTdcTdcsModule_ST = $.kd.sdk.module.Module & SdkTdcTdcsModule_S;
            interface SdkTdcTdcsModule_C extends SdkTdcTdcsModule_ST {
                new():SdkTdcTdcsModule;
            }
            interface SdkTdcTdcsModule$ {
            }
            type SdkTdcTdcsModule_T = $.kd.sdk.module.Module & SdkTdcTdcsModule_S & SdkTdcTdcsModule$;
            interface SdkTdcTdcsModule extends SdkTdcTdcsModule_T {
            }
        }
        namespace kd.sdk.tdc.tjga{
            interface SdkTdcTjgaModule_S {
            }
            type SdkTdcTjgaModule_ST = $.kd.sdk.module.Module & SdkTdcTjgaModule_S;
            interface SdkTdcTjgaModule_C extends SdkTdcTjgaModule_ST {
                new():SdkTdcTjgaModule;
            }
            interface SdkTdcTjgaModule$ {
            }
            type SdkTdcTjgaModule_T = $.kd.sdk.module.Module & SdkTdcTjgaModule_S & SdkTdcTjgaModule$;
            interface SdkTdcTjgaModule extends SdkTdcTjgaModule_T {
            }
        }
        namespace kd.sdk.tdc.tjga.eligibility{
            interface IEligibilityExtendService_S {
            }
            interface IEligibilityExtendService$ {
                prepareData(arg0:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                updateShowTextMap(arg0:$.java.util.Map):void;
            }
            type IEligibilityExtendService_T = IEligibilityExtendService_S & IEligibilityExtendService$;
            interface IEligibilityExtendService extends IEligibilityExtendService_T {
            }
        }
        namespace kd.sdk.tdc.tlmg{
            interface SdkTdcTlmgModule_S {
            }
            type SdkTdcTlmgModule_ST = $.kd.sdk.module.Module & SdkTdcTlmgModule_S;
            interface SdkTdcTlmgModule_C extends SdkTdcTlmgModule_ST {
                new():SdkTdcTlmgModule;
            }
            interface SdkTdcTlmgModule$ {
            }
            type SdkTdcTlmgModule_T = $.kd.sdk.module.Module & SdkTdcTlmgModule_S & SdkTdcTlmgModule$;
            interface SdkTdcTlmgModule extends SdkTdcTlmgModule_T {
            }
        }
    }
}
export {};