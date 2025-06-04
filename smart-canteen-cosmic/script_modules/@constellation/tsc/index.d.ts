/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.sdk.tsc.common.vo{
            interface CustomMessageParamBo_S {
            }
            interface CustomMessageParamBo_C extends CustomMessageParamBo_S {
                new(arg0:long,arg1:$.java.util.List,arg2:string):CustomMessageParamBo;
                new(arg0:long,arg1:$.java.util.List,arg2:string,arg3:any):CustomMessageParamBo;
            }
            interface CustomMessageParamBo$ {
                getBusinessObject():any;
                getFromType():string;
                getParam():$.java.util.List;
                getTemplateId():long;
                setBusinessObject(arg0:any):void;
                setFromType(arg0:string):void;
                setParam(arg0:$.java.util.List):void;
                setTemplateId(arg0:long):void;
            }
            type CustomMessageParamBo_T = CustomMessageParamBo_S & CustomMessageParamBo$;
            interface CustomMessageParamBo extends CustomMessageParamBo_T {
            }
            interface KResumeBO_S {
            }
            type KResumeBO_ST = $.java.io.Serializable & KResumeBO_S;
            interface KResumeBO_C extends KResumeBO_ST {
                new():KResumeBO;
            }
            interface KResumeBO$ {
                getData():$.kd.bos.dataentity.entity.DynamicObject;
                getDynCollMap():$.java.util.Map;
                getId():long;
                putDynColl(arg0:string,arg1:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
                setData(arg0:$.kd.bos.dataentity.entity.DynamicObject):void;
                setDynCollMap(arg0:$.java.util.Map):void;
                setId(arg0:long):void;
            }
            type KResumeBO_T = $.java.io.Serializable & KResumeBO_S & KResumeBO$;
            interface KResumeBO extends KResumeBO_T {
            }
            interface BizResult_S {
                readonly SUCCESS_CODE:number;
            }
            type BizResult_ST = $.java.io.Serializable & BizResult_S;
            interface BizResult_C extends BizResult_ST {
                new():BizResult;
            }
            interface BizResult$ {
                getCode():number;
                getData():any;
                getErrorCode():number;
                getErrorMsg():string;
                getMessage():string;
                getSuccess():boolean;
                setCode(arg0:number):void;
                setData(arg0:any):void;
                setErrorCode(arg0:number):void;
                setErrorMsg(arg0:string):void;
                setMessage(arg0:string):void;
                setSuccess(arg0:boolean):void;
            }
            type BizResult_T = $.java.io.Serializable & BizResult_S & BizResult$;
            interface BizResult extends BizResult_T {
            }
        }
        namespace kd.sdk.tsc.tsirm{
            interface SdkTscTsirmModule_S {
            }
            type SdkTscTsirmModule_ST = $.kd.sdk.module.Module & SdkTscTsirmModule_S;
            interface SdkTscTsirmModule_C extends SdkTscTsirmModule_ST {
                new():SdkTscTsirmModule;
            }
            interface SdkTscTsirmModule$ {
            }
            type SdkTscTsirmModule_T = $.kd.sdk.module.Module & SdkTscTsirmModule_S & SdkTscTsirmModule$;
            interface SdkTscTsirmModule extends SdkTscTsirmModule_T {
            }
        }
        namespace kd.sdk.tsc.tsirm.extpoint.appfile{
            interface IChangeStageStatusService_S {
            }
            interface IChangeStageStatusService$ {
                filterStage(arg0:$.java.util.List):$.java.util.List;
                filterStatus(arg0:$.java.util.List,arg1:string):$.java.util.List;
            }
            type IChangeStageStatusService_T = IChangeStageStatusService_S & IChangeStageStatusService$;
            interface IChangeStageStatusService extends IChangeStageStatusService_T {
            }
        }
        namespace kd.sdk.tsc.tsirm.extpoint.cv{
            enum EmpDeliveryTypeEnum {
                DELIVTYPE_POSITION,
                DELIVTYPE_OPENCV,
                DELIVTYPE_UPDATE,
                RESUME_CREATE
            }
            interface IEmpCVdeliveryValidator_S {
            }
            interface IEmpCVdeliveryValidator$ {
                deleveryCVValidator(arg0:DeliveryParam):kd.sdk.tsc.common.vo.BizResult;
                shouldCreateDeliveryBill(arg0:DeliveryParam,arg1:kd.sdk.tsc.common.vo.KResumeBO):boolean;
            }
            type IEmpCVdeliveryValidator_T = IEmpCVdeliveryValidator_S & IEmpCVdeliveryValidator$;
            interface IEmpCVdeliveryValidator extends IEmpCVdeliveryValidator_T {
            }
            interface IEmpFileQueryService_S {
            }
            interface IEmpFileQueryService$ {
                afterLoadEmpFile(arg0:long,arg1:kd.sdk.tsc.common.vo.KResumeBO):void;
            }
            type IEmpFileQueryService_T = IEmpFileQueryService_S & IEmpFileQueryService$;
            interface IEmpFileQueryService extends IEmpFileQueryService_T {
            }
            interface IEmpCVService_S {
            }
            interface IEmpCVService$ {
                afterBindAccount(arg0:long,arg1:kd.sdk.tsc.common.vo.BizResult):kd.sdk.tsc.common.vo.BizResult;
                afterCreateCandidate(arg0:DeliveryParam,arg1:kd.sdk.tsc.common.vo.KResumeBO,arg2:kd.sdk.tsc.common.vo.BizResult):kd.sdk.tsc.common.vo.BizResult;
                afterDeliveryCV(arg0:DeliveryParam,arg1:kd.sdk.tsc.common.vo.BizResult):kd.sdk.tsc.common.vo.BizResult;
                afterGetEmpCV(arg0:long,arg1:kd.sdk.tsc.common.vo.KResumeBO):kd.sdk.tsc.common.vo.KResumeBO;
                afterGetEmpCVs(arg0:long,arg1:$.kd.bos.dataentity.entity.DynamicObject[]):$.kd.bos.dataentity.entity.DynamicObject[];
                afterUnPublishedCV(arg0:long,arg1:kd.sdk.tsc.common.vo.BizResult):kd.sdk.tsc.common.vo.BizResult;
                afterUpdateCV(arg0:kd.sdk.tsc.common.vo.KResumeBO,arg1:kd.sdk.tsc.common.vo.BizResult):kd.sdk.tsc.common.vo.BizResult;
                afterUpdateCVFormPersonInfo(arg0:long,arg1:kd.sdk.tsc.common.vo.BizResult):kd.sdk.tsc.common.vo.BizResult;
                beforeBindAccount(arg0:long):kd.sdk.tsc.common.vo.BizResult;
                beforeCreateCandidate(arg0:DeliveryParam,arg1:kd.sdk.tsc.common.vo.KResumeBO):kd.sdk.tsc.common.vo.BizResult;
                beforeDeliveryCV(arg0:DeliveryParam):kd.sdk.tsc.common.vo.BizResult;
                beforeUnPublishedCV(arg0:long):kd.sdk.tsc.common.vo.BizResult;
                beforeUpdateCV(arg0:kd.sdk.tsc.common.vo.KResumeBO):kd.sdk.tsc.common.vo.BizResult;
                beforeUpdateCVFormPersonInfo(arg0:long):kd.sdk.tsc.common.vo.BizResult;
            }
            type IEmpCVService_T = IEmpCVService_S & IEmpCVService$;
            interface IEmpCVService extends IEmpCVService_T {
            }
            interface IEmpCVdeliveryService_S {
            }
            interface IEmpCVdeliveryService$ {
                deliveryBillHandler(arg0:DeliveryParam,arg1:kd.sdk.tsc.common.vo.KResumeBO,arg2:$.kd.bos.dataentity.entity.DynamicObject):kd.sdk.tsc.common.vo.BizResult;
            }
            type IEmpCVdeliveryService_T = IEmpCVdeliveryService_S & IEmpCVdeliveryService$;
            interface IEmpCVdeliveryService extends IEmpCVdeliveryService_T {
            }
            interface DeliveryParam_S {
            }
            type DeliveryParam_ST = $.java.io.Serializable & DeliveryParam_S;
            interface DeliveryParam_C extends DeliveryParam_ST {
                new():DeliveryParam;
                new(arg0:long,arg1:long):DeliveryParam;
                new(arg0:EmpDeliveryTypeEnum,arg1:long):DeliveryParam;
                new(arg0:long,arg1:long,arg2:long,arg3:long,arg4:EmpDeliveryTypeEnum):DeliveryParam;
                new(arg0:long,arg1:long,arg2:long,arg3:EmpDeliveryTypeEnum,arg4:Date,arg5:long):DeliveryParam;
            }
            interface DeliveryParam$ {
                getAdvertId():long;
                getApplytime():Date;
                getCVId():long;
                getCustomParam():$.java.util.Map;
                getDeliveryBillId():long;
                getDeliveryCVId():long;
                getDeliveryPerId():long;
                getDeliveryType():EmpDeliveryTypeEnum;
                getPositionId():long;
                getUserId():long;
                setAdvertId(arg0:long):void;
                setApplytime(arg0:Date):void;
                setCustomParam(arg0:$.java.util.Map):void;
                setCvId(arg0:long):void;
                setDeliveryBillId(arg0:long):void;
                setDeliveryCVId(arg0:long):void;
                setDeliveryPerId(arg0:long):void;
                setDeliveryType(arg0:EmpDeliveryTypeEnum):void;
                setPositionId(arg0:long):void;
                setUserId(arg0:long):void;
            }
            type DeliveryParam_T = $.java.io.Serializable & DeliveryParam_S & DeliveryParam$;
            interface DeliveryParam extends DeliveryParam_T {
            }
        }
        namespace kd.sdk.tsc.tsirm.extpoint.home{
            interface HomeViewService_S {
            }
            interface HomeViewService$ {
                setCustomOrgIds(arg0:$.java.util.List):void;
            }
            type HomeViewService_T = HomeViewService_S & HomeViewService$;
            interface HomeViewService extends HomeViewService_T {
            }
        }
        namespace kd.sdk.tsc.tsirm.service.appfile{
            interface AppFileServiceHelper_S {
                changeAppFileStageStatusById(arg0:$.java.util.List):$.java.util.List;
                eliminateAppFile(arg0:$.java.util.List):$.java.util.List;
            }
            interface AppFileServiceHelper_C extends AppFileServiceHelper_S {
                new():AppFileServiceHelper;
            }
            interface AppFileServiceHelper$ {
            }
            type AppFileServiceHelper_T = AppFileServiceHelper_S & AppFileServiceHelper$;
            interface AppFileServiceHelper extends AppFileServiceHelper_T {
            }
        }
        namespace kd.sdk.tsc.tsirm.service.cv{
            interface EmpCVServiceHelper_S {
                getEmpCVIdByUserId(arg0:long):long;
                saveEmpCV(arg0:kd.sdk.tsc.common.vo.KResumeBO):long;
                saveResumeByDeliveryBillId(arg0:long):kd.sdk.tsc.common.vo.BizResult;
            }
            interface EmpCVServiceHelper_C extends EmpCVServiceHelper_S {
                new():EmpCVServiceHelper;
            }
            interface EmpCVServiceHelper$ {
                bindAccountByUserId(arg0:long):kd.sdk.tsc.common.vo.BizResult;
                deliveryCVByAdId(arg0:long):kd.sdk.tsc.common.vo.BizResult;
                getEmpCVById(arg0:long):kd.sdk.tsc.common.vo.KResumeBO;
                getEmployeeByUserId(arg0:long):kd.sdk.tsc.common.vo.BizResult;
            }
            type EmpCVServiceHelper_T = EmpCVServiceHelper_S & EmpCVServiceHelper$;
            interface EmpCVServiceHelper extends EmpCVServiceHelper_T {
            }
        }
        namespace kd.sdk.tsc.tsirm.service.rsm{
            interface ResumeServiceHelper_S {
                getResumeCollection(arg0:kd.sdk.tsc.common.vo.KResumeBO):kd.sdk.tsc.common.vo.KResumeBO;
            }
            interface ResumeServiceHelper_C extends ResumeServiceHelper_S {
                new():ResumeServiceHelper;
            }
            interface ResumeServiceHelper$ {
            }
            type ResumeServiceHelper_T = ResumeServiceHelper_S & ResumeServiceHelper$;
            interface ResumeServiceHelper extends ResumeServiceHelper_T {
            }
        }
        namespace kd.sdk.tsc.tso{
            interface SdkTscTsoModule_S {
            }
            type SdkTscTsoModule_ST = $.kd.sdk.module.Module & SdkTscTsoModule_S;
            interface SdkTscTsoModule_C extends SdkTscTsoModule_ST {
                new():SdkTscTsoModule;
            }
            interface SdkTscTsoModule$ {
            }
            type SdkTscTsoModule_T = $.kd.sdk.module.Module & SdkTscTsoModule_S & SdkTscTsoModule$;
            interface SdkTscTsoModule extends SdkTscTsoModule_T {
            }
        }
        namespace kd.sdk.tsc.tso.extpoint{
            interface IOfferCustomFieldValidate_S {
            }
            interface IOfferCustomFieldValidate$ {
                doValidateField(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.java.util.List,arg2:$.java.util.List):void;
            }
            type IOfferCustomFieldValidate_T = IOfferCustomFieldValidate_S & IOfferCustomFieldValidate$;
            interface IOfferCustomFieldValidate extends IOfferCustomFieldValidate_T {
            }
            interface OfferListService_S {
            }
            interface OfferListService$ {
                getPermFilter(arg0:$.kd.bos.form.events.SetFilterEvent):$.kd.bos.orm.query.QFilter;
            }
            type OfferListService_T = OfferListService_S & OfferListService$;
            interface OfferListService extends OfferListService_T {
            }
            interface IMkProcessService_S {
            }
            interface IMkProcessService$ {
                doDepInduction(arg0:$.java.util.List):string;
                doSendOffer(arg0:$.java.util.List):string;
                doTerminateInduction(arg0:$.java.util.List):string;
            }
            type IMkProcessService_T = IMkProcessService_S & IMkProcessService$;
            interface IMkProcessService extends IMkProcessService_T {
            }
        }
        namespace kd.sdk.tsc.tso.service{
            interface OfferBasicServiceHelper_S {
                replyOffer(arg0:$.java.util.List):void;
            }
            interface OfferBasicServiceHelper_C extends OfferBasicServiceHelper_S {
                new():OfferBasicServiceHelper;
            }
            interface OfferBasicServiceHelper$ {
            }
            type OfferBasicServiceHelper_T = OfferBasicServiceHelper_S & OfferBasicServiceHelper$;
            interface OfferBasicServiceHelper extends OfferBasicServiceHelper_T {
            }
            interface OfferInductionServiceHelper_S {
                launchToInduction(arg0:$.java.util.List):string;
            }
            interface OfferInductionServiceHelper_C extends OfferInductionServiceHelper_S {
                new():OfferInductionServiceHelper;
            }
            interface OfferInductionServiceHelper$ {
            }
            type OfferInductionServiceHelper_T = OfferInductionServiceHelper_S & OfferInductionServiceHelper$;
            interface OfferInductionServiceHelper extends OfferInductionServiceHelper_T {
            }
        }
        namespace kd.sdk.tsc.tspr{
            interface SdkTscTsprModule_S {
            }
            type SdkTscTsprModule_ST = $.kd.sdk.module.Module & SdkTscTsprModule_S;
            interface SdkTscTsprModule_C extends SdkTscTsprModule_ST {
                new():SdkTscTsprModule;
            }
            interface SdkTscTsprModule$ {
            }
            type SdkTscTsprModule_T = $.kd.sdk.module.Module & SdkTscTsprModule_S & SdkTscTsprModule$;
            interface SdkTscTsprModule extends SdkTscTsprModule_T {
            }
        }
        namespace kd.sdk.tsc.tspr.openservicehelper{
            interface HcfServiceHelper_S {
                updateRsmToCandidate(arg0:long):any;
            }
            interface HcfServiceHelper_C extends HcfServiceHelper_S {
                new():HcfServiceHelper;
            }
            interface HcfServiceHelper$ {
            }
            type HcfServiceHelper_T = HcfServiceHelper_S & HcfServiceHelper$;
            interface HcfServiceHelper extends HcfServiceHelper_T {
            }
        }
        namespace kd.sdk.tsc.tsrbd{
            interface SdkTscTsrbdModule_S {
            }
            type SdkTscTsrbdModule_ST = $.kd.sdk.module.Module & SdkTscTsrbdModule_S;
            interface SdkTscTsrbdModule_C extends SdkTscTsrbdModule_ST {
                new():SdkTscTsrbdModule;
            }
            interface SdkTscTsrbdModule$ {
            }
            type SdkTscTsrbdModule_T = $.kd.sdk.module.Module & SdkTscTsrbdModule_S & SdkTscTsrbdModule$;
            interface SdkTscTsrbdModule extends SdkTscTsrbdModule_T {
            }
        }
        namespace kd.sdk.tsc.tsrbd.extpoint.gpt{
            interface IGptCustomParamService_S {
            }
            interface IGptCustomParamService$ {
                addOrUpdateCustomParam(arg0:long,arg1:$.java.util.Map,arg2:$.kd.bos.dataentity.entity.DynamicObject):void;
                setCustomGptId(arg0:$.kd.bos.dataentity.entity.DynamicObject):long;
                setCustomPositionJdTitle(arg0:$.java.util.Map):void;
            }
            type IGptCustomParamService_T = IGptCustomParamService_S & IGptCustomParamService$;
            interface IGptCustomParamService extends IGptCustomParamService_T {
            }
        }
        namespace kd.sdk.tsc.tsrbd.extpoint.message{
            interface IMessageCustomParamService_S {
            }
            interface IMessageCustomParamService$ {
                setMessageCustomParam(arg0:kd.sdk.tsc.common.vo.CustomMessageParamBo):void;
                setMessageCustomParamForPreview(arg0:kd.sdk.tsc.common.vo.CustomMessageParamBo):void;
            }
            type IMessageCustomParamService_T = IMessageCustomParamService_S & IMessageCustomParamService$;
            interface IMessageCustomParamService extends IMessageCustomParamService_T {
            }
        }
        namespace kd.sdk.tsc.tsrsc{
            interface SdkTscTsrscModule_S {
            }
            type SdkTscTsrscModule_ST = $.kd.sdk.module.Module & SdkTscTsrscModule_S;
            interface SdkTscTsrscModule_C extends SdkTscTsrscModule_ST {
                new():SdkTscTsrscModule;
            }
            interface SdkTscTsrscModule$ {
            }
            type SdkTscTsrscModule_T = $.kd.sdk.module.Module & SdkTscTsrscModule_S & SdkTscTsrscModule$;
            interface SdkTscTsrscModule extends SdkTscTsrscModule_T {
            }
        }
        namespace kd.sdk.tsc.tsrsc.extpoint{
            interface IUserMappingService_S {
            }
            interface IUserMappingService$ {
                findMappingUser(arg0:$.java.util.Map):string;
            }
            type IUserMappingService_T = IUserMappingService_S & IUserMappingService$;
            interface IUserMappingService extends IUserMappingService_T {
            }
        }
        namespace kd.sdk.tsc.tsrsc.openservicehelper{
            interface HcfServiceHelper_S {
                updateArfToCandidate(arg0:long):any;
            }
            interface HcfServiceHelper_C extends HcfServiceHelper_S {
                new():HcfServiceHelper;
            }
            interface HcfServiceHelper$ {
            }
            type HcfServiceHelper_T = HcfServiceHelper_S & HcfServiceHelper$;
            interface HcfServiceHelper extends HcfServiceHelper_T {
            }
        }
        namespace kd.sdk.tsc.tstpm{
            interface SdkTscTstpmModule_S {
            }
            type SdkTscTstpmModule_ST = $.kd.sdk.module.Module & SdkTscTstpmModule_S;
            interface SdkTscTstpmModule_C extends SdkTscTstpmModule_ST {
                new():SdkTscTstpmModule;
            }
            interface SdkTscTstpmModule$ {
            }
            type SdkTscTstpmModule_T = $.kd.sdk.module.Module & SdkTscTstpmModule_S & SdkTscTstpmModule$;
            interface SdkTscTstpmModule extends SdkTscTstpmModule_T {
            }
        }
        namespace kd.sdk.tsc.tstpm.openservicehelper{
            interface CandidateServiceHelper_S {
                addArf(arg0:$.java.util.Map,arg1:long,arg2:string,arg3:number):long;
                addCandidate(arg0:$.java.util.Map,arg1:long,arg2:$.java.util.Map,arg3:$.java.util.Map):long;
            }
            interface CandidateServiceHelper_C extends CandidateServiceHelper_S {
                new():CandidateServiceHelper;
            }
            interface CandidateServiceHelper$ {
            }
            type CandidateServiceHelper_T = CandidateServiceHelper_S & CandidateServiceHelper$;
            interface CandidateServiceHelper extends CandidateServiceHelper_T {
            }
        }
    }
}
export {};