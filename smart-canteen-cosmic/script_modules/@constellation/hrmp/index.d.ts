/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.hr.hbp.business.application.common{
            interface ISortingArrayService_S {
            }
            interface ISortingArrayService$ {
                /**
                 * 比较两个对象，如果obj1等于 ojb2，则返回true, 否则返回false
                 * @param obj1
                 * @param obj2
                 * @return
                 */
                compareEqual(obj1:any,obj2:any):boolean;
                /**
                 * 比较两个对象，  要实现升序，如果 obj1 > ojb2，则返回true, 否则返回false
                 *              要实现降序，如果 obj1 < ojb2，则返回true, 否则返回false
                 * @param obj1
                 * @param obj2
                 * @return
                 */
                compareLarge(obj1:any,obj2:any):boolean;
                /**
                 * 数组排序
                 * @param arr
                 */
                quickSort(arr:any[]):void;
                /**
                 * 数组排序
                 * @param arr
                 * @param start 起始位置,一般为0
                 * @param end   结束位置
                 */
                quickSort(arr:any[],start:number,end:number):void;
            }
            type ISortingArrayService_T = ISortingArrayService_S & ISortingArrayService$;
            interface ISortingArrayService extends ISortingArrayService_T {
            }
            interface ICompareDiffController_S {
            }
            interface ICompareDiffController$ {
                /**
                 * 批量比较动态对象是否在数据库中，是否存在相同的数据
                 * @param compareDiffApiBatchInputParam 批量比较 数据差异接口入参
                 * @return 比较 数据差异接口 出参
                 */
                batchIsNewData(compareDiffApiBatchInputParam:kd.hr.hbp.business.domain.model.newhismodel.api.comparediff.CompareDiffApiBatchInputParam):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 比较动态对象是否在数据库中，是否存在相同的数据
                 * @param compareDiffApiParam 比较 数据差异接口入参
                 * @return 比较 数据差异接口 出参
                 */
                isNewData(compareDiffApiParam:kd.hr.hbp.business.domain.model.newhismodel.api.comparediff.CompareDiffApiInputParam):kd.hr.hbp.common.api.HrApiResponse;
            }
            type ICompareDiffController_T = ICompareDiffController_S & ICompareDiffController$;
            interface ICompareDiffController extends ICompareDiffController_T {
            }
            interface IDynamicObjectCommonService_S {
            }
            interface IDynamicObjectCommonService$ {
                /**
                 * 设置 master ID
                 * @param dynamicObject
                 */
                setMastId(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 批量设置 master ID
                 * @param dynamicObjects
                 */
                setMastId(dynamicObjects:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                /**
                 * 修改信息： 修改人、修改时间
                 * @param dynamicObject
                 */
                setSimpleModifyInfo(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 创建信息: 创建人，创建时间、 修改人、修改时间
                 * @param dynamicObject
                 */
                setSimpleNewInfo(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 创建信息: 创建人，创建时间、 修改人、修改时间, 指定的创建时间，修改时间
                 * @param dynamicObject
                 * @param date  指定的创建时间，修改时间
                 */
                setSimpleNewInfoByTime(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject,date:Date):void;
                /**
                 * 操作用户信息： 操作人、操作时间
                 *
                 * @param dynamicObject
                 */
                setSimpleOperateInfo(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 *  操作用户信息： 操作人、操作时间，指定的创建时间
                 * @param dynamicObject
                 * @param date 指定的创建时间
                 */
                setSimpleOperateInfoByTime(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject,date:Date):void;
            }
            type IDynamicObjectCommonService_T = IDynamicObjectCommonService_S & IDynamicObjectCommonService$;
            interface IDynamicObjectCommonService extends IDynamicObjectCommonService_T {
            }
        }
        namespace kd.hr.hbp.business.application.impl.common{
            interface CompareDiffController_S {
            }
            type CompareDiffController_ST = kd.hr.hbp.business.application.common.ICompareDiffController_S & CompareDiffController_S;
            interface CompareDiffController_C extends CompareDiffController_ST {
                new():CompareDiffController;
            }
            interface CompareDiffController$ {
            }
            type CompareDiffController_T = kd.hr.hbp.business.application.common.ICompareDiffController & CompareDiffController_S & CompareDiffController$;
            interface CompareDiffController extends CompareDiffController_T {
            }
            interface AbstractSortingArrayService_S {
            }
            type AbstractSortingArrayService_ST = kd.hr.hbp.business.application.common.ISortingArrayService_S & AbstractSortingArrayService_S;
            interface AbstractSortingArrayService_C extends AbstractSortingArrayService_ST {
                new():AbstractSortingArrayService;
            }
            interface AbstractSortingArrayService$ {
            }
            type AbstractSortingArrayService_T = kd.hr.hbp.business.application.common.ISortingArrayService & AbstractSortingArrayService_S & AbstractSortingArrayService$;
            interface AbstractSortingArrayService extends AbstractSortingArrayService_T {
            }
            interface DynamicObjectCommonService_S {
                /**
                 * 双重检查加锁 懒汉式
                 *
                 * @return 对象单例
                 */
                getInstance():DynamicObjectCommonService;
            }
            type DynamicObjectCommonService_ST = kd.hr.hbp.business.application.common.IDynamicObjectCommonService_S & DynamicObjectCommonService_S;
            interface DynamicObjectCommonService_C extends DynamicObjectCommonService_ST {
                new():DynamicObjectCommonService;
            }
            interface DynamicObjectCommonService$ {
            }
            type DynamicObjectCommonService_T = kd.hr.hbp.business.application.common.IDynamicObjectCommonService & DynamicObjectCommonService_S & DynamicObjectCommonService$;
            interface DynamicObjectCommonService extends DynamicObjectCommonService_T {
            }
        }
        namespace kd.hr.hbp.business.application.impl.newhismodel{
            interface HRHisModelModule_S {
            }
            type HRHisModelModule_ST = $.kd.sdk.module.Module & HRHisModelModule_S;
            interface HRHisModelModule_C extends HRHisModelModule_ST {
                new():HRHisModelModule;
            }
            interface HRHisModelModule$ {
            }
            type HRHisModelModule_T = $.kd.sdk.module.Module & HRHisModelModule_S & HRHisModelModule$;
            interface HRHisModelModule extends HRHisModelModule_T {
            }
            interface HisModelController_S {
                /**
                 * 双重检查加锁 懒汉式
                 *
                 * @return 对象单例
                 */
                getInstance():HisModelController;
            }
            type HisModelController_ST = kd.hr.hbp.business.application.newhismodel.IHisModelController_S & HisModelController_S;
            interface HisModelController_C extends HisModelController_ST {
                new():HisModelController;
            }
            interface HisModelController$ {
            }
            type HisModelController_T = kd.hr.hbp.business.application.newhismodel.IHisModelController & HisModelController_S & HisModelController$;
            interface HisModelController extends HisModelController_T {
            }
            interface HisModelAttachController_S {
                /**
                 * 双重检查加锁 懒汉式
                 *
                 * @return 对象单例
                 */
                getInstance():HisModelAttachController;
            }
            type HisModelAttachController_ST = kd.hr.hbp.business.application.newhismodel.IHisModelAttachController_S & HisModelAttachController_S;
            interface HisModelAttachController_C extends HisModelAttachController_ST {
                new():HisModelAttachController;
            }
            interface HisModelAttachController$ {
            }
            type HisModelAttachController_T = kd.hr.hbp.business.application.newhismodel.IHisModelAttachController & HisModelAttachController_S & HisModelAttachController$;
            interface HisModelAttachController extends HisModelAttachController_T {
            }
            interface HisModelInitController_S {
                /**
                 * 双重检查加锁 懒汉式
                 *
                 * @return 对象单例
                 */
                getInstance():HisModelInitController;
            }
            type HisModelInitController_ST = kd.hr.hbp.business.application.newhismodel.IHisModelInitController_S & HisModelInitController_S;
            interface HisModelInitController_C extends HisModelInitController_ST {
                new():HisModelInitController;
            }
            interface HisModelInitController$ {
            }
            type HisModelInitController_T = kd.hr.hbp.business.application.newhismodel.IHisModelInitController & HisModelInitController_S & HisModelInitController$;
            interface HisModelInitController extends HisModelInitController_T {
            }
        }
        namespace kd.hr.hbp.business.application.newhismodel{
            interface IHisModelController_S {
            }
            interface IHisModelController$ {
                /**
                 * 批量废弃数据服务
                 *
                 * @param hisBatchDiscardApiBo
                 */
                batchDiscardBoData(hisBatchDiscardApiBo:kd.hr.hbp.business.domain.model.newhismodel.api.HisBatchDiscardApiBo):void;
                /**
                 * 批量历史版本修订，包括时序性，非时序性版本变更
                 *
                 * @param hisVersionParamListBo
                 */
                batchHisVersionChange(hisVersionParamListBo:kd.hr.hbp.business.domain.model.newhismodel.HisVersionParamListBo):kd.hr.hbp.business.domain.model.newhismodel.HisResponse;
                /**
                 * 根据实体编码和F7字段，判断F7 是否是 历史版本F7
                 *
                 * @param mainEntityNumber 主实体
                 * @param f7FieldName      主实体F7字段
                 * @param baseEntityNumber F7字段的实体编码
                 * @return HisImportBo
                 */
                buildImportFilter(mainEntityNumber:string,f7FieldName:string,baseEntityNumber:string):kd.hr.hbp.business.domain.model.newhismodel.HisInitReturnBo;
                /**
                 * 删除 bo数据
                 *
                 * @param hisBaseBo
                 */
                deleteBo(hisBaseBo:kd.hr.hbp.business.domain.model.newhismodel.HisBaseBo):void;
                /**
                 * 启用禁用
                 *
                 * @param hisEnableParamBo
                 */
                disableOrEnableBo(hisEnableParamBo:kd.hr.hbp.business.domain.model.newhismodel.enable.HisEnableParamBo):void;
                /**
                 * 废弃数据服务
                 *
                 * @param hisDiscardApiBo
                 */
                discardBoData(hisDiscardApiBo:kd.hr.hbp.business.domain.model.newhismodel.api.HisDiscardApiBo):void;
                /**
                 * 判断实体继承关系：普通实体、历史时序型实体、历史非时序型实体
                 *
                 * @param entityNumber
                 * @return enum EnumEntityTpl {
                 * COMMON_TPL("0"),    // 普通实体
                 * LINETIMESEQ_TPL("1"),   // 继承历史时序型实体
                 * NONLINETIMESEQ_TPL("2");    // 继承历史非时序型实体
                 */
                entityInhRelation(entityNumber:string):string;
                /**
                 * 获取修订记录
                 *
                 * @param hisVersionReviseParamBo 版本修订参数
                 */
                getReviseRecord(hisVersionReviseParamBo:kd.hr.hbp.business.domain.model.newhismodel.api.revise.HisReviseRecordParamBo):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 时序性导入操作接口
                 *
                 * @param hisImportBo 导入bo
                 * @return 接口响应结果
                 */
                hisLineImportData(hisImportBo:kd.hr.hbp.business.domain.model.newhismodel.HisImportBo):kd.hr.hbp.business.domain.model.newhismodel.HisResponse;
                /**
                 * 非时序性导入操作接口
                 *
                 * @param hisImportBo 导入bo
                 */
                hisNonLineImportData(hisImportBo:kd.hr.hbp.business.domain.model.newhismodel.HisImportBo):kd.hr.hbp.business.domain.model.newhismodel.HisResponse;
                /**
                 * 时序性历史版本修订，包括保存版本，立即生效版本，修改生效日期等服务
                 *
                 * @param hisVersionParamBo
                 */
                hisVersionChange(hisVersionParamBo:kd.hr.hbp.business.domain.model.newhismodel.HisVersionParamBo):kd.hr.hbp.business.domain.model.newhismodel.HisResponse;
                /**
                 * 版本保存计算
                 *
                 * @param hisVersionCalcApiParam 版本切割计算入参
                 * @return
                 */
                hisVersionSaveCalc(hisVersionCalcApiParam:kd.hr.hbp.business.domain.model.newhismodel.calc.api.HisVersionCalcApiParam):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 非序性历史版本修订，包括保存版本，立即生效版本
                 *
                 * @param hisVersionParamBo
                 * @return HisResponse<VersionChangeRespData>
                 */
                noLineTimeHisVersionChange(hisVersionParamBo:kd.hr.hbp.business.domain.model.newhismodel.HisVersionParamBo):kd.hr.hbp.business.domain.model.newhismodel.HisResponse;
                /**
                 * 版本修订服务
                 *
                 * @param hisVersionReviseParamBo
                 */
                reviseVersion(hisVersionReviseParamBo:kd.hr.hbp.business.domain.model.newhismodel.HisVersionReviseParamBo):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * @param hisTransRevocationListBo 全量/部分撤销事务集合
                 */
                revocationEvent(hisTransRevocationListBo:kd.hr.hbp.business.domain.model.newhismodel.HisTransRevocationListBo):void;
                /**
                 * 查询更晚事务
                 *
                 * @param hisSearchLaterEventParam
                 * @return
                 */
                searchLaterEvent(hisSearchLaterEventParam:kd.hr.hbp.business.domain.model.newhismodel.event.HisSearchLaterEventParam):kd.hr.hbp.common.api.HrApiResponse;
            }
            type IHisModelController_T = IHisModelController_S & IHisModelController$;
            interface IHisModelController extends IHisModelController_T {
            }
            interface IHisModelAttachController_S {
            }
            interface IHisModelAttachController$ {
                /**
                 * 查询数据库中的附件数据，并组装成历史模型需要的附件格式
                 * @param hisAttachmentParamBo 附件对外API入参
                 * @return
                 */
                generateAttachmentMap(hisAttachmentParamBo:kd.hr.hbp.business.domain.model.newhismodel.api.attachment.HisAttachmentParamBo):kd.hr.hbp.business.domain.model.newhismodel.HisResponse;
                /**
                 * 附件上传数据库
                 *
                 * @param hisAttachmentDataBo  历史摸摸要求的入参格式
                 * @return
                 */
                uploadAttachmentMap(hisAttachmentDataBo:kd.hr.hbp.business.domain.model.newhismodel.api.attachment.HisAttachmentDataBo):void;
            }
            type IHisModelAttachController_T = IHisModelAttachController_S & IHisModelAttachController$;
            interface IHisModelAttachController extends IHisModelAttachController_T {
            }
            interface IHisModelInitController_S {
            }
            interface IHisModelInitController$ {
                /**
                 * 新增BO
                 *
                 * @param hisInitBoApiParam 初始化新增参数入库
                 * @return 数据及错误信息
                 */
                initBo(hisInitBoApiParam:kd.hr.hbp.business.domain.model.newhismodel.calc.api.HisInitBoApiParam):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 新增BO校验服务
                 *
                 * @param hisInitBoApiParam 初始化新增参数
                 * @return 数据及错误信息
                 */
                initBoValidate(hisInitBoApiParam:kd.hr.hbp.business.domain.model.newhismodel.calc.api.HisInitBoApiParam):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 初始化新增版本，确认变更
                 *
                 * @param hisInitVersionApiParam 初始化新增版本参数
                 * @return 数据及错误信息
                 */
                initVersionConfirm(hisInitVersionApiParam:kd.hr.hbp.business.domain.model.newhismodel.calc.api.HisInitVersionApiParam):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 初始化新增版本
                 *
                 * @param hisInitVersionApiParam 初始化新增版本参数
                 * @return 数据及错误信息
                 */
                initVersionSave(hisInitVersionApiParam:kd.hr.hbp.business.domain.model.newhismodel.calc.api.HisInitVersionApiParam):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 初始化新增版本校验
                 *
                 * @param hisInitVersionApiParam 初始化新增版本参数
                 * @return 数据及错误信息
                 */
                initVersionValidate(hisInitVersionApiParam:kd.hr.hbp.business.domain.model.newhismodel.calc.api.HisInitVersionApiParam):kd.hr.hbp.common.api.HrApiResponse;
            }
            type IHisModelInitController_T = IHisModelInitController_S & IHisModelInitController$;
            interface IHisModelInitController extends IHisModelInitController_T {
            }
        }
        namespace kd.hr.hbp.business.domain.model.newhismodel{
            interface HisVersionReviseParamBo_S {
            }
            interface HisVersionReviseParamBo_C extends HisVersionReviseParamBo_S {
                new():HisVersionReviseParamBo;
            }
            interface HisVersionReviseParamBo$ {
                /**
                 * 获取 实体编码
                 *
                 * @return entityNumber 实体编码
                 */
                getEntityNumber():string;
                /**
                 * 获取 要处理的附件信息
                 *
                 * @return mapHisAttachmentBos 要处理的附件信息
                 */
                getMapHisAttachmentBos():$.java.util.Map;
                /**
                 * 获取 操作前的附件信息
                 *
                 * @return preHisAttachmentBos 操作前的附件信息
                 */
                getPreHisAttachmentBos():$.java.util.Map;
                /**
                 * 获取 动态对象数组 (支持同一个实体，多条数据批量，例如个性化数据的源数据修改，可能影响多个个性化的版本，批量导入场景)
                 *
                 * @return reviseDys 动态对象数组 (支持同一个实体，多条数据批量，例如个性化数据的源数据修改，可能影响多个个性化的版本，批量导入场景)
                 */
                getReviseDys():$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 获取 是否是同步个性化数据
                 *
                 * @return isPersonalDataSyn 是否是同步个性化数据
                 */
                isPersonalDataSyn():boolean;
                /**
                 * 设置 实体编码
                 *
                 * @param entityNumber 实体编码
                 */
                setEntityNumber(entityNumber:string):void;
                /**
                 * 设置 要处理的附件信息
                 *
                 * @param mapHisAttachmentBos 要处理的附件信息
                 */
                setMapHisAttachmentBos(mapHisAttachmentBos:$.java.util.Map):void;
                /**
                 * 设置 是否是同步个性化数据
                 *
                 * @param isPersonalDataSyn 是否是同步个性化数据
                 */
                setPersonalDataSyn(isPersonalDataSyn:boolean):void;
                /**
                 * 设置 操作前的附件信息
                 *
                 * @param preHisAttachmentBos 操作前的附件信息
                 */
                setPreHisAttachmentBos(preHisAttachmentBos:$.java.util.Map):void;
                /**
                 * 设置 动态对象数组 (支持同一个实体，多条数据批量，例如个性化数据的源数据修改，可能影响多个个性化的版本，批量导入场景)
                 *
                 * @param reviseDys 动态对象数组 (支持同一个实体，多条数据批量，例如个性化数据的源数据修改，可能影响多个个性化的版本，批量导入场景)
                 */
                setReviseDys(reviseDys:$.kd.bos.dataentity.entity.DynamicObject[]):void;
            }
            type HisVersionReviseParamBo_T = HisVersionReviseParamBo_S & HisVersionReviseParamBo$;
            interface HisVersionReviseParamBo extends HisVersionReviseParamBo_T {
            }
            interface ImportRespData_S {
            }
            type ImportRespData_ST = VersionChangeRespData_S & ImportRespData_S;
            interface ImportRespData_C extends ImportRespData_ST {
                new():ImportRespData;
            }
            interface ImportRespData$ {
                /**
                 * 获取 导入方式
                 *
                 * @return importType 导入方式
                 */
                getImportType():string;
                /**
                 * 获取 导入成功的数据id
                 *
                 * @return pkIds 导入成功的数据id
                 */
                getPkIds():$.java.util.List;
                /**
                 * 设置 导入方式
                 *
                 * @param importType 导入方式
                 */
                setImportType(importType:string):void;
                /**
                 * 设置 导入成功的数据id
                 *
                 * @param pkIds 导入成功的数据id
                 */
                setPkIds(pkIds:$.java.util.List):void;
            }
            type ImportRespData_T = VersionChangeRespData & ImportRespData_S & ImportRespData$;
            interface ImportRespData extends ImportRespData_T {
            }
            interface HisBaseBo_S {
            }
            interface HisBaseBo_C extends HisBaseBo_S {
                new():HisBaseBo;
            }
            interface HisBaseBo$ {
                /**
                 * 获取 业务实体 boId 列表
                 *
                 * @return boIdList 业务实体 boId 列表
                 */
                getBoIdList():$.java.util.List;
                /**
                 * 获取 当前业务实体动态对象  boIdList与 dyCurrents共存时，优先取 dyCurrents ，不再用 dyCurrents 查询当前数据.      增加参数目的， 启用时有需求要传入修改的数据，而不是通过id去查询
                 *
                 * @return dyCurrents 当前业务实体动态对象  boIdList与 dyCurrents共存时，优先取 dyCurrents ，不再用 dyCurrents 查询当前数据.      增加参数目的， 启用时有需求要传入修改的数据，而不是通过id去查询
                 */
                getDyCurrents():$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 获取 来源实体编码
                 *
                 * @return entityNumber 来源实体编码
                 */
                getEntityNumber():string;
                /**
                 * 设置 业务实体 boId 列表
                 *
                 * @param boIdList 业务实体 boId 列表
                 */
                setBoIdList(boIdList:$.java.util.List):void;
                /**
                 * 设置 当前业务实体动态对象  boIdList与 dyCurrents共存时，优先取 dyCurrents ，不再用 dyCurrents 查询当前数据.  增加参数目的， 启用时有需求要传入修改的数据，而不是通过id去查询
                 *
                 * @param dyCurrents 当前业务实体动态对象  boIdList与 dyCurrents共存时，优先取 dyCurrents ，不再用 dyCurrents 查询当前数据.  增加参数目的， 启用时有需求要传入修改的数据，而不是通过id去查询
                 */
                setDyCurrents(dyCurrents:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                /**
                 * 设置 来源实体编码
                 *
                 * @param entityNumber 来源实体编码
                 */
                setEntityNumber(entityNumber:string):void;
            }
            type HisBaseBo_T = HisBaseBo_S & HisBaseBo$;
            interface HisBaseBo extends HisBaseBo_T {
            }
            interface HisVersionParamBo_S {
            }
            interface HisVersionParamBo_C extends HisVersionParamBo_S {
                new():HisVersionParamBo;
            }
            interface HisVersionParamBo$ {
                /**
                 * 获取 业务自定义字段值
                 *
                 * @return customizedFiledValue 业务自定义字段值
                 */
                getCustomizedFiledValue():$.java.util.List;
                /**
                 * 获取 实体编码
                 *
                 * @return entityNumber 实体编码
                 */
                getEntityNumber():string;
                /**
                 * 获取 事务ID 返回此次生成的事务ID
                 *
                 * @return eventId 事务ID 返回此次生成的事务ID
                 */
                getEventId():long;
                /**
                 * 获取 首个复制版本ID 调用者可以自定义首个数据版本ID，如果为空，默认自动生成ID跟动态对象 hisDyns 必须顺序对应上 hisDyns 个数与 firstVersionIds 个数必须相等才生效
                 *
                 * @return firstVersionIds 首个复制版本ID 调用者可以自定义首个数据版本ID，如果为空，默认自动生成ID跟动态对象 hisDyns 必须顺序对应上 hisDyns 个数与 firstVersionIds 个数必须相等才生效
                 */
                getFirstVersionIds():long[];
                /**
                 * 获取 动态对象数组 (支持同一个实体，多条数据批量，例如批量导入场景)
                 *
                 * @return hisDyns 动态对象数组 (支持同一个实体，多条数据批量，例如批量导入场景)
                 */
                getHisDyns():$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 获取 业务事务主实体id(entityData为多条时，且为原子事务时，必填)
                 *
                 * @return mainBoId 业务事务主实体id(entityData为多条时，且为原子事务时，必填)
                 */
                getMainBoId():long;
                /**
                 * 获取 要处理的附件信息
                 *
                 * @return mapHisAttachmentBos 要处理的附件信息
                 */
                getMapHisAttachmentBos():$.java.util.Map;
                /**
                 * 获取 接口调用类型
                 *
                 * @return operateType 接口调用类型
                 */
                getOperateType():string;
                /**
                 * 获取 是否包含个性化数据，  1:仅包含原始数据; 0: 两种兼有，或未可知，需查库校验4 不处理;
                 *
                 * @return personalDataType 是否包含个性化数据，  1:仅包含原始数据; 0: 两种兼有，或未可知，需查库校验4 不处理;
                 */
                getPersonalDataType():number;
                /**
                 * 获取 是否原子事务
                 *
                 * @return atomicTrans 是否原子事务
                 */
                isAtomicTrans():boolean;
                /**
                 * 获取 查询版本号 取消挂起事务标志
                 *
                 * @return cancel_notSupported 查询版本号 取消挂起事务标志
                 */
                isCancel_notSupported():boolean;
                /**
                 * 获取 变更是否立即生效
                 *
                 * @return effImmediately 变更是否立即生效
                 */
                isEffImmediately():boolean;
                /**
                 * 获取 是否处理附件 导入、启用、禁用不需要处理附件
                 *
                 * @return needProcessAttachment 是否处理附件 导入、启用、禁用不需要处理附件
                 */
                isNeedProcessAttachment():boolean;
                /**
                 * 获取 是否需要校验时间区间是否正确.  默认需要校验。 如果用了校验器校验，则无需再次校验(中台历史模型校验器 kd.hr.hbp.opplugin.web.hismodel.validator.HisSaveValidator)
                 *
                 * @return needValidateDate 是否需要校验时间区间是否正确.  默认需要校验。 如果用了校验器校验，则无需再次校验(中台历史模型校验器 kd.hr.hbp.opplugin.web.hismodel.validator.HisSaveValidator)
                 */
                isNeedValidateDate():boolean;
                /**
                 * 设置 是否原子事务
                 *
                 * @param atomicTrans 是否原子事务
                 */
                setAtomicTrans(atomicTrans:boolean):void;
                /**
                 * 设置 查询版本号 取消挂起事务标志
                 *
                 * @param cancel_notSupported 查询版本号 取消挂起事务标志
                 */
                setCancel_notSupported(cancel_notSupported:boolean):void;
                /**
                 * 设置 业务自定义字段值
                 *
                 * @param customizedFiledValue 业务自定义字段值
                 */
                setCustomizedFiledValue(customizedFiledValue:$.java.util.List):void;
                /**
                 * 设置 变更是否立即生效
                 *
                 * @param effImmediately 变更是否立即生效
                 */
                setEffImmediately(effImmediately:boolean):void;
                /**
                 * 设置 实体编码
                 *
                 * @param entityNumber 实体编码
                 */
                setEntityNumber(entityNumber:string):void;
                /**
                 * 设置 事务ID 返回此次生成的事务ID
                 *
                 * @param eventId 事务ID 返回此次生成的事务ID
                 */
                setEventId(eventId:long):void;
                /**
                 * 设置 首个复制版本ID 调用者可以自定义首个数据版本ID，如果为空，默认自动生成ID跟动态对象 hisDyns 必须顺序对应上 hisDyns 个数与 firstVersionIds 个数必须相等才生效
                 *
                 * @param firstVersionIds 首个复制版本ID 调用者可以自定义首个数据版本ID，如果为空，默认自动生成ID跟动态对象 hisDyns 必须顺序对应上 hisDyns 个数与 firstVersionIds 个数必须相等才生效
                 */
                setFirstVersionIds(firstVersionIds:long[]):void;
                /**
                 * 设置 动态对象数组 (支持同一个实体，多条数据批量，例如批量导入场景)
                 *
                 * @param hisDyns 动态对象数组 (支持同一个实体，多条数据批量，例如批量导入场景)
                 */
                setHisDyns(hisDyns:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                /**
                 * 设置 业务事务主实体id(entityData为多条时，且为原子事务时，必填)
                 *
                 * @param mainBoId 业务事务主实体id(entityData为多条时，且为原子事务时，必填)
                 */
                setMainBoId(mainBoId:long):void;
                /**
                 * 设置 要处理的附件信息
                 *
                 * @param mapHisAttachmentBos 要处理的附件信息
                 */
                setMapHisAttachmentBos(mapHisAttachmentBos:$.java.util.Map):void;
                /**
                 * 设置 是否处理附件 导入、启用、禁用不需要处理附件
                 *
                 * @param needProcessAttachment 是否处理附件 导入、启用、禁用不需要处理附件
                 */
                setNeedProcessAttachment(needProcessAttachment:boolean):void;
                /**
                 * 设置 是否需要校验时间区间是否正确.  默认需要校验。 如果用了校验器校验，则无需再次校验(中台历史模型校验器 kd.hr.hbp.opplugin.web.hismodel.validator.HisSaveValidator)
                 *
                 * @param needValidateDate 是否需要校验时间区间是否正确.  默认需要校验。 如果用了校验器校验，则无需再次校验(中台历史模型校验器 kd.hr.hbp.opplugin.web.hismodel.validator.HisSaveValidator)
                 */
                setNeedValidateDate(needValidateDate:boolean):void;
                /**
                 * 设置 接口调用类型
                 *
                 * @param operateType 接口调用类型
                 */
                setOperateType(operateType:string):void;
                /**
                 * 设置 是否包含个性化数据，  1:仅包含原始数据; 0: 两种兼有，或未可知，需查库校验4 不处理;
                 *
                 * @param personalDataType 是否包含个性化数据，  1:仅包含原始数据; 0: 两种兼有，或未可知，需查库校验4 不处理;
                 */
                setPersonalDataType(personalDataType:number):void;
            }
            type HisVersionParamBo_T = HisVersionParamBo_S & HisVersionParamBo$;
            interface HisVersionParamBo extends HisVersionParamBo_T {
            }
            interface HisVersionReviseReturnDataBo_S {
            }
            interface HisVersionReviseReturnDataBo_C extends HisVersionReviseReturnDataBo_S {
                new():HisVersionReviseReturnDataBo;
            }
            interface HisVersionReviseReturnDataBo$ {
                /**
                 * 获取 要处理的附件信息
                 *
                 * @return attachmentMap 要处理的附件信息
                 */
                getAttachmentMap():$.java.util.Map;
                /**
                 * 获取 实体编码
                 *
                 * @return entityNumber 实体编码
                 */
                getEntityNumber():string;
                /**
                 * 获取 动态对象数组 (支持同一个实体，多条数据批量，例如个性化数据的源数据修改，可能影响多个个性化的版本，批量导入场景)
                 *
                 * @return returnData 动态对象数组 (支持同一个实体，多条数据批量，例如个性化数据的源数据修改，可能影响多个个性化的版本，批量导入场景)
                 */
                getReturnData():$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 设置 要处理的附件信息
                 *
                 * @param attachmentMap 要处理的附件信息
                 */
                setAttachmentMap(attachmentMap:$.java.util.Map):void;
                /**
                 * 设置 实体编码
                 *
                 * @param entityNumber 实体编码
                 */
                setEntityNumber(entityNumber:string):void;
                /**
                 * 设置 动态对象数组 (支持同一个实体，多条数据批量，例如个性化数据的源数据修改，可能影响多个个性化的版本，批量导入场景)
                 *
                 * @param returnData 动态对象数组 (支持同一个实体，多条数据批量，例如个性化数据的源数据修改，可能影响多个个性化的版本，批量导入场景)
                 */
                setReturnData(returnData:$.kd.bos.dataentity.entity.DynamicObject[]):void;
            }
            type HisVersionReviseReturnDataBo_T = HisVersionReviseReturnDataBo_S & HisVersionReviseReturnDataBo$;
            interface HisVersionReviseReturnDataBo extends HisVersionReviseReturnDataBo_T {
            }
            interface BatchVersionChangeRespData_S {
            }
            interface BatchVersionChangeRespData_C extends BatchVersionChangeRespData_S {
                new():BatchVersionChangeRespData;
            }
            interface BatchVersionChangeRespData$ {
                /**
                 * 获取 事务ID
                 *
                 * @return eventId 事务ID
                 */
                getEventId():long;
                /**
                 * 获取 新的版本实体编码、数据集合
                 *
                 * @return versionChangeRespDataList 新的版本实体编码、数据集合
                 */
                getVersionChangeRespDataList():$.java.util.List;
                /**
                 * 设置 事务ID
                 *
                 * @param eventId 事务ID
                 */
                setEventId(eventId:long):void;
                /**
                 * 设置 新的版本实体编码、数据集合
                 *
                 * @param versionChangeRespDataList 新的版本实体编码、数据集合
                 */
                setVersionChangeRespDataList(versionChangeRespDataList:$.java.util.List):void;
            }
            type BatchVersionChangeRespData_T = BatchVersionChangeRespData_S & BatchVersionChangeRespData$;
            interface BatchVersionChangeRespData extends BatchVersionChangeRespData_T {
            }
            interface HisTransRevocationListBo_S {
            }
            interface HisTransRevocationListBo_C extends HisTransRevocationListBo_S {
                new():HisTransRevocationListBo;
            }
            interface HisTransRevocationListBo$ {
                /**
                 * 获取 事务组编码(优先从此获取事务组， 如果为空，则从应用ID中获取配置的事务组)
                 *
                 * @return eventGroupNumber 事务组编码(优先从此获取事务组， 如果为空，则从应用ID中获取配置的事务组)
                 */
                getEventGroupNumber():string;
                /**
                 * 获取 事务ID
                 *
                 * @return eventId 事务ID
                 */
                getEventId():long;
                /**
                 * 获取 事务撤销bo
                 *
                 * @return listHisTransRevocationBo 事务撤销bo
                 */
                getListHisTransRevocationBo():$.java.util.List;
                /**
                 * 获取 注册了事务组的应用ID  (如果为空，则从HisTransRevocationBo中获取实体编码，获取事务组，兼容第一次提供出去的接口参数定义)
                 *
                 * @return resisterEventGroupAppId 注册了事务组的应用ID  (如果为空，则从HisTransRevocationBo中获取实体编码，获取事务组，兼容第一次提供出去的接口参数定义)
                 */
                getResisterEventGroupAppId():string;
                /**
                 * 获取 注册了事务组的实体编码，没有实体注册事务，也可以通过实体所在的应用找到事务组 (如果为空，则从entityNumber获取配置的事务组 )
                 *
                 * @return resisterEventGroupEntityNumber 注册了事务组的实体编码，没有实体注册事务，也可以通过实体所在的应用找到事务组 (如果为空，则从entityNumber获取配置的事务组 )
                 */
                getResisterEventGroupEntityNumber():string;
                /**
                 * 设置 事务组编码(优先从此获取事务组， 如果为空，则从应用ID中获取配置的事务组)
                 *
                 * @param eventGroupNumber 事务组编码(优先从此获取事务组， 如果为空，则从应用ID中获取配置的事务组)
                 */
                setEventGroupNumber(eventGroupNumber:string):void;
                /**
                 * 设置 事务ID
                 *
                 * @param eventId 事务ID
                 */
                setEventId(eventId:long):void;
                /**
                 * 设置 事务撤销bo
                 *
                 * @param listHisTransRevocationBo 事务撤销bo
                 */
                setListHisTransRevocationBo(listHisTransRevocationBo:$.java.util.List):void;
                /**
                 * 设置 注册了事务组的应用ID  (如果为空，则从HisTransRevocationBo中获取实体编码，获取事务组，兼容第一次提供出去的接口参数定义)
                 *
                 * @param resisterEventGroupAppId 注册了事务组的应用ID  (如果为空，则从HisTransRevocationBo中获取实体编码，获取事务组，兼容第一次提供出去的接口参数定义)
                 */
                setResisterEventGroupAppId(resisterEventGroupAppId:string):void;
                /**
                 * 设置 注册了事务组的实体编码，没有实体注册事务，也可以通过实体所在的应用找到事务组 (如果为空，则从entityNumber获取配置的事务组 )
                 *
                 * @param resisterEventGroupEntityNumber 注册了事务组的实体编码，没有实体注册事务，也可以通过实体所在的应用找到事务组 (如果为空，则从entityNumber获取配置的事务组 )
                 */
                setResisterEventGroupEntityNumber(resisterEventGroupEntityNumber:string):void;
            }
            type HisTransRevocationListBo_T = HisTransRevocationListBo_S & HisTransRevocationListBo$;
            interface HisTransRevocationListBo extends HisTransRevocationListBo_T {
            }
            interface HisResponse_S {
            }
            interface HisResponse_C extends HisResponse_S {
                new():HisResponse;
            }
            interface HisResponse$ {
                /**
                 * 获取 返回编码 默认200
                 *
                 * @return code 返回编码 默认200
                 */
                getCode():string;
                /**
                 * 获取 返回数据
                 *
                 * @return data 返回数据
                 */
                getData():any;
                /**
                 * 获取 错误信息
                 *
                 * @return errorMessage 错误信息
                 */
                getErrorMessage():string;
                /**
                 * 设置 返回编码 默认200
                 *
                 * @param code 返回编码 默认200
                 */
                setCode(code:string):void;
                setData(arg0:any):void;
                /**
                 * 设置 错误信息
                 *
                 * @param errorMessage 错误信息
                 */
                setErrorMessage(errorMessage:string):void;
            }
            type HisResponse_T = HisResponse_S & HisResponse$;
            interface HisResponse extends HisResponse_T {
            }
            interface HisTransRevocationBo_S {
            }
            interface HisTransRevocationBo_C extends HisTransRevocationBo_S {
                new():HisTransRevocationBo;
            }
            interface HisTransRevocationBo$ {
                /**
                 * 获取 业务id
                 *
                 * @return boId 业务id
                 */
                getBoId():$.java.util.List;
                /**
                 * 获取 实体编码（用于一个事务影响多个实体的部分撤销）
                 *
                 * @return entityNumber 实体编码（用于一个事务影响多个实体的部分撤销）
                 */
                getEntityNumber():string;
                /**
                 * 设置 业务id
                 *
                 * @param boId 业务id
                 */
                setBoId(boId:$.java.util.List):void;
                /**
                 * 设置 实体编码（用于一个事务影响多个实体的部分撤销）
                 *
                 * @param entityNumber 实体编码（用于一个事务影响多个实体的部分撤销）
                 */
                setEntityNumber(entityNumber:string):void;
            }
            type HisTransRevocationBo_T = HisTransRevocationBo_S & HisTransRevocationBo$;
            interface HisTransRevocationBo extends HisTransRevocationBo_T {
            }
            interface HisVersionParamListBo_S {
            }
            interface HisVersionParamListBo_C extends HisVersionParamListBo_S {
                new():HisVersionParamListBo;
            }
            interface HisVersionParamListBo$ {
                /**
                 * 获取 事务ID
                 *
                 * @return eventId 事务ID
                 */
                getEventId():long;
                /**
                 * 获取 批量参数列表
                 *
                 * @return listHisVersionParamBo 批量参数列表
                 */
                getListHisVersionParamBo():$.java.util.List;
                /**
                 * 获取 业务事务主实体id(目前未用上，可不填)
                 *
                 * @return mainBoId 业务事务主实体id(目前未用上，可不填)
                 */
                getMainBoId():long;
                /**
                 * 获取 实体编码(entityData为多条时，且为原子事务时，必填)
                 *
                 * @return mainEntityNumber 实体编码(entityData为多条时，且为原子事务时，必填)
                 */
                getMainEntityNumber():string;
                /**
                 * 获取 是否原子事务
                 *
                 * @return atomicTrans 是否原子事务
                 */
                isAtomicTrans():boolean;
                /**
                 * 获取 变更是否立即生效
                 *
                 * @return effImmediately 变更是否立即生效
                 */
                isEffImmediately():boolean;
                /**
                 * 设置 是否原子事务
                 *
                 * @param atomicTrans 是否原子事务
                 */
                setAtomicTrans(atomicTrans:boolean):void;
                /**
                 * 设置 变更是否立即生效
                 *
                 * @param effImmediately 变更是否立即生效
                 */
                setEffImmediately(effImmediately:boolean):void;
                /**
                 * 设置 事务ID
                 *
                 * @param eventId 事务ID
                 */
                setEventId(eventId:long):void;
                /**
                 * 设置 批量参数列表
                 *
                 * @param listHisVersionParamBo 批量参数列表
                 */
                setListHisVersionParamBo(listHisVersionParamBo:$.java.util.List):void;
                /**
                 * 设置 业务事务主实体id(目前未用上，可不填)
                 *
                 * @param mainBoId 业务事务主实体id(目前未用上，可不填)
                 */
                setMainBoId(mainBoId:long):void;
                /**
                 * 设置 实体编码(entityData为多条时，且为原子事务时，必填)
                 *
                 * @param mainEntityNumber 实体编码(entityData为多条时，且为原子事务时，必填)
                 */
                setMainEntityNumber(mainEntityNumber:string):void;
            }
            type HisVersionParamListBo_T = HisVersionParamListBo_S & HisVersionParamListBo$;
            interface HisVersionParamListBo extends HisVersionParamListBo_T {
            }
            interface HisImportBo_S {
            }
            interface HisImportBo_C extends HisImportBo_S {
                new():HisImportBo;
            }
            interface HisImportBo$ {
                /**
                 * 获取 导入数据集
                 *
                 * @return dataEntities 导入数据集
                 */
                getDataEntities():$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 获取 导入方式
                 *
                 * @return importType 导入方式
                 */
                getImportType():string;
                /**
                 * 设置 导入数据集
                 *
                 * @param dataEntities 导入数据集
                 */
                setDataEntities(dataEntities:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                /**
                 * 设置 导入方式
                 *
                 * @param importType 导入方式
                 */
                setImportType(importType:string):void;
            }
            type HisImportBo_T = HisImportBo_S & HisImportBo$;
            interface HisImportBo extends HisImportBo_T {
            }
            interface HisInitReturnBo_S {
            }
            interface HisInitReturnBo_C extends HisInitReturnBo_S {
                new():HisInitReturnBo;
            }
            interface HisInitReturnBo$ {
                /**
                 * 获取 导入Filter
                 *
                 * @return qFilter 导入Filter
                 */
                getqFilter():$.kd.bos.orm.query.QFilter;
                /**
                 * 获取 是否版本F7
                 *
                 * @return isF7Version 是否版本F7
                 */
                isF7Version():boolean;
                /**
                 * 获取 是否历史模型
                 *
                 * @return hisModel 是否历史模型
                 */
                isHisModel():boolean;
                /**
                 * 设置 是否版本F7
                 *
                 * @param f7Version 是否版本F7
                 */
                setF7Version(f7Version:boolean):void;
                /**
                 * 设置 是否历史模型
                 *
                 * @param hisModel 是否历史模型
                 */
                setHisModel(hisModel:boolean):void;
                /**
                 * 设置 导入Filter
                 *
                 * @param qFilter 导入Filter
                 */
                setqFilter(qFilter:$.kd.bos.orm.query.QFilter):void;
            }
            type HisInitReturnBo_T = HisInitReturnBo_S & HisInitReturnBo$;
            interface HisInitReturnBo extends HisInitReturnBo_T {
            }
            interface VersionChangeRespData_S {
            }
            interface VersionChangeRespData_C extends VersionChangeRespData_S {
                new():VersionChangeRespData;
            }
            interface VersionChangeRespData$ {
                /**
                 * 获取 实体编码
                 *
                 * @return entityNumber 实体编码
                 */
                getEntityNumber():string;
                /**
                 * 获取 事务ID
                 *
                 * @return eventId 事务ID
                 */
                getEventId():long;
                /**
                 * 获取 新的版本数据
                 *
                 * @return newDynamicObjects 新的版本数据
                 */
                getNewDynamicObjects():$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 设置 实体编码
                 *
                 * @param entityNumber 实体编码
                 */
                setEntityNumber(entityNumber:string):void;
                /**
                 * 设置 事务ID
                 *
                 * @param eventId 事务ID
                 */
                setEventId(eventId:long):void;
                /**
                 * 设置 新的版本数据
                 *
                 * @param newDynamicObjects 新的版本数据
                 */
                setNewDynamicObjects(newDynamicObjects:$.kd.bos.dataentity.entity.DynamicObject[]):void;
            }
            type VersionChangeRespData_T = VersionChangeRespData_S & VersionChangeRespData$;
            interface VersionChangeRespData extends VersionChangeRespData_T {
            }
        }
        namespace kd.hr.hbp.business.domain.model.newhismodel.api{
            interface HisBatchDiscardApiBo_S {
            }
            interface HisBatchDiscardApiBo_C extends HisBatchDiscardApiBo_S {
                new():HisBatchDiscardApiBo;
            }
            interface HisBatchDiscardApiBo$ {
                /**
                 * 获取 事务ID 如果有已存在的事务ID则把事务数据存到该事务ID下
                 *
                 * @return eventId 事务ID 如果有已存在的事务ID则把事务数据存到该事务ID下
                 */
                getEventId():long;
                /**
                 * 获取 废弃数据参数
                 *
                 * @return hisDiscardApiBoList 废弃数据参数
                 */
                getHisDiscardApiBoList():$.java.util.List;
                /**
                 * 设置 事务ID 如果有已存在的事务ID则把事务数据存到该事务ID下
                 *
                 * @param eventId 事务ID 如果有已存在的事务ID则把事务数据存到该事务ID下
                 */
                setEventId(eventId:long):void;
                /**
                 * 设置 废弃数据参数
                 *
                 * @param hisDiscardApiBoList 废弃数据参数
                 */
                setHisDiscardApiBoList(hisDiscardApiBoList:$.java.util.List):void;
            }
            type HisBatchDiscardApiBo_T = HisBatchDiscardApiBo_S & HisBatchDiscardApiBo$;
            interface HisBatchDiscardApiBo extends HisBatchDiscardApiBo_T {
            }
            interface HisDiscardApiBo_S {
            }
            interface HisDiscardApiBo_C extends HisDiscardApiBo_S {
                new():HisDiscardApiBo;
            }
            interface HisDiscardApiBo$ {
                /**
                 * 获取 业务id列表
                 *
                 * @return boIdSet 业务id列表
                 */
                getBoIdSet():$.java.util.Set;
                /**
                 * 获取 实体编码
                 *
                 * @return entityNumber 实体编码
                 */
                getEntityNumber():string;
                /**
                 * 获取 事务ID 如果有已存在的事务ID则把事务数据存到该事务ID下 批量的事务id如果有值，则单个的事务id无效
                 *
                 * @return eventId 事务ID 如果有已存在的事务ID则把事务数据存到该事务ID下 批量的事务id如果有值，则单个的事务id无效
                 */
                getEventId():long;
                /**
                 * 设置 业务id列表
                 *
                 * @param boIdSet 业务id列表
                 */
                setBoIdSet(boIdSet:$.java.util.Set):void;
                /**
                 * 设置 实体编码
                 *
                 * @param entityNumber 实体编码
                 */
                setEntityNumber(entityNumber:string):void;
                /**
                 * 设置 事务ID 如果有已存在的事务ID则把事务数据存到该事务ID下 批量的事务id如果有值，则单个的事务id无效
                 *
                 * @param eventId 事务ID 如果有已存在的事务ID则把事务数据存到该事务ID下 批量的事务id如果有值，则单个的事务id无效
                 */
                setEventId(eventId:long):void;
            }
            type HisDiscardApiBo_T = HisDiscardApiBo_S & HisDiscardApiBo$;
            interface HisDiscardApiBo extends HisDiscardApiBo_T {
            }
        }
        namespace kd.hr.hbp.business.domain.model.newhismodel.api.attachment{
            interface HisAttachmentDataBo_S {
            }
            interface HisAttachmentDataBo_C extends HisAttachmentDataBo_S {
                new():HisAttachmentDataBo;
            }
            interface HisAttachmentDataBo$ {
                getEntityNumber():string;
                getMapHisAttachmentBos():$.java.util.Map;
                setEntityNumber(entityNumber:string):void;
                setMapHisAttachmentBos(mapHisAttachmentBos:$.java.util.Map):void;
            }
            type HisAttachmentDataBo_T = HisAttachmentDataBo_S & HisAttachmentDataBo$;
            interface HisAttachmentDataBo extends HisAttachmentDataBo_T {
            }
            interface HisAttachmentParamBo_S {
            }
            interface HisAttachmentParamBo_C extends HisAttachmentParamBo_S {
                new():HisAttachmentParamBo;
            }
            interface HisAttachmentParamBo$ {
                getEntityNumber():string;
                getIdSet():$.java.util.Set;
                setEntityNumber(entityNumber:string):void;
                setIdSet(idSet:$.java.util.Set):void;
            }
            type HisAttachmentParamBo_T = HisAttachmentParamBo_S & HisAttachmentParamBo$;
            interface HisAttachmentParamBo extends HisAttachmentParamBo_T {
            }
        }
        namespace kd.hr.hbp.business.domain.model.newhismodel.api.comparediff{
            interface CompareDiffApiOutPutParam_S {
            }
            interface CompareDiffApiOutPutParam_C extends CompareDiffApiOutPutParam_S {
                new():CompareDiffApiOutPutParam;
            }
            interface CompareDiffApiOutPutParam$ {
                /**
                 * 获取 数据库找到的相同数据
                 *
                 * @return dyFromDatabase 数据库找到的相同数据
                 */
                getDyFromDatabase():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取 入参传入的原始数据
                 *
                 * @return dyOriginal 入参传入的原始数据
                 */
                getDyOriginal():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取 实体编码
                 *
                 * @return entityNumber 实体编码
                 */
                getEntityNumber():string;
                /**
                 * 设置 数据库找到的相同数据
                 *
                 * @param dyFromDatabase 数据库找到的相同数据
                 */
                setDyFromDatabase(dyFromDatabase:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 设置 入参传入的原始数据
                 *
                 * @param dyOriginal 入参传入的原始数据
                 */
                setDyOriginal(dyOriginal:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 设置 实体编码
                 *
                 * @param entityNumber 实体编码
                 */
                setEntityNumber(entityNumber:string):void;
            }
            type CompareDiffApiOutPutParam_T = CompareDiffApiOutPutParam_S & CompareDiffApiOutPutParam$;
            interface CompareDiffApiOutPutParam extends CompareDiffApiOutPutParam_T {
            }
            interface CompareDiffApiInputParam_S {
            }
            interface CompareDiffApiInputParam_C extends CompareDiffApiInputParam_S {
                new():CompareDiffApiInputParam;
            }
            interface CompareDiffApiInputParam$ {
                /**
                 * 获取 动态对象数组 (支持同一个实体，多条数据批量传入)
                 *
                 * @return dynamicObjects 动态对象数组 (支持同一个实体，多条数据批量传入)
                 */
                getDynamicObjects():$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 获取 实体编码
                 *
                 * @return entityNumber 实体编码
                 */
                getEntityNumber():string;
                /**
                 * 获取 要比较差异忽略的字段， 默认字段要累加此忽略的字段
                 *
                 * @return ignoreFields 要比较差异忽略的字段， 默认字段要累加此忽略的字段
                 */
                getIgnoreFields():$.java.util.Set;
                /**
                 * 获取 要比对差异的唯一性标识字段，通过此字段去查找数据库中的数据行 非历史模型默认 用 id 历史模型默认用 boId;
                 *
                 * @return keyField 要比对差异的唯一性标识字段，通过此字段去查找数据库中的数据行 非历史模型默认 用 id 历史模型默认用 boId;
                 */
                getKeyField():string;
                /**
                 * 获取 字符型字段 null与 ""或者" " 是否相等， true：相等  false: 不相等
                 * @return
                 */
                isStringNullEqualsEmpty():boolean;
                /**
                 * 设置 动态对象数组 (支持同一个实体，多条数据批量传入)
                 *
                 * @param dynamicObjects 动态对象数组 (支持同一个实体，多条数据批量传入)
                 */
                setDynamicObjects(dynamicObjects:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                /**
                 * 设置 实体编码
                 *
                 * @param entityNumber 实体编码
                 */
                setEntityNumber(entityNumber:string):void;
                /**
                 * 设置 要比较差异忽略的字段， 默认字段要累加此忽略的字段
                 *
                 * @param ignoreFields 要比较差异忽略的字段， 默认字段要累加此忽略的字段
                 */
                setIgnoreFields(ignoreFields:$.java.util.Set):void;
                /**
                 * 设置 要比对差异的唯一性标识字段，通过此字段去查找数据库中的数据行 非历史模型默认 用 id 历史模型默认用 boId;
                 *
                 * @param keyField 要比对差异的唯一性标识字段，通过此字段去查找数据库中的数据行 非历史模型默认 用 id 历史模型默认用 boId;
                 */
                setKeyField(keyField:string):void;
                /**
                 * 设置 字符型字段 null与 ""或者" " 是否相等， true：相等  false: 不相等
                 * @param stringNullEqualsEmpty 字符型字段 null, ""或者" " 是否相等， true：相等  false: 不相等
                 */
                setStringNullEqualsEmpty(stringNullEqualsEmpty:boolean):void;
            }
            type CompareDiffApiInputParam_T = CompareDiffApiInputParam_S & CompareDiffApiInputParam$;
            interface CompareDiffApiInputParam extends CompareDiffApiInputParam_T {
            }
            interface CompareDiffApiBatchInputParam_S {
            }
            interface CompareDiffApiBatchInputParam_C extends CompareDiffApiBatchInputParam_S {
                new():CompareDiffApiBatchInputParam;
            }
            interface CompareDiffApiBatchInputParam$ {
                /**
                 * 获取 数据差异接口入参列表
                 *
                 * @return compareDiffApiInputParamList 数据差异接口入参列表
                 */
                getCompareDiffApiInputParamList():$.java.util.List;
                /**
                 * 设置 数据差异接口入参列表
                 *
                 * @param compareDiffApiInputParamList 数据差异接口入参列表
                 */
                setCompareDiffApiInputParamList(compareDiffApiInputParamList:$.java.util.List):void;
            }
            type CompareDiffApiBatchInputParam_T = CompareDiffApiBatchInputParam_S & CompareDiffApiBatchInputParam$;
            interface CompareDiffApiBatchInputParam extends CompareDiffApiBatchInputParam_T {
            }
        }
        namespace kd.hr.hbp.business.domain.model.newhismodel.api.revise{
            interface HisReviseRecordParamBo_S {
            }
            interface HisReviseRecordParamBo_C extends HisReviseRecordParamBo_S {
                new():HisReviseRecordParamBo;
            }
            interface HisReviseRecordParamBo$ {
                /**
                 * 获取业务id
                 * @return
                 */
                getBoId():long;
                /**
                 * 获取实体编码
                 * @return
                 */
                getEntityNumber():string;
                /**
                 * 获取版本主键列表
                 * @return
                 */
                getVersionIds():$.java.util.List;
                /**
                 * 设置业务id
                 * @param boId
                 */
                setBoId(boId:long):void;
                /**
                 * 设置
                 * @param entityNumber
                 */
                setEntityNumber(entityNumber:string):void;
                /**
                 * 设置版本主键列表
                 * @param versionIds
                 */
                setVersionIds(versionIds:$.java.util.List):void;
            }
            type HisReviseRecordParamBo_T = HisReviseRecordParamBo_S & HisReviseRecordParamBo$;
            interface HisReviseRecordParamBo extends HisReviseRecordParamBo_T {
            }
        }
        namespace kd.hr.hbp.business.domain.model.newhismodel.calc.api{
            interface HisInitBoApiParam_S {
            }
            interface HisInitBoApiParam_C extends HisInitBoApiParam_S {
                new():HisInitBoApiParam;
            }
            interface HisInitBoApiParam$ {
                getBoGroupFields():any;
                getDynamicObjects():$.kd.bos.dataentity.entity.DynamicObject[];
                isSkipBusinessValidate():boolean;
                isSkipDbValidate():boolean;
                isSkipHisFieldValidate():boolean;
                setBoGroupFields(boGroupFields:any):void;
                setDynamicObjects(dynamicObjects:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                setSkipBusinessValidate(skipBusinessValidate:boolean):void;
                setSkipDbValidate(skipDbValidate:boolean):void;
                setSkipHisFieldValidate(skipHisFieldValidate:boolean):void;
            }
            type HisInitBoApiParam_T = HisInitBoApiParam_S & HisInitBoApiParam$;
            interface HisInitBoApiParam extends HisInitBoApiParam_T {
            }
            interface HisVersionCalcApiParam_S {
            }
            interface HisVersionCalcApiParam_C extends HisVersionCalcApiParam_S {
                new():HisVersionCalcApiParam;
            }
            interface HisVersionCalcApiParam$ {
                getDynamicObject():$.kd.bos.dataentity.entity.DynamicObject;
                isValidateContinuity():boolean;
                setDynamicObject(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject):void;
                setValidateContinuity(validateContinuity:boolean):void;
            }
            type HisVersionCalcApiParam_T = HisVersionCalcApiParam_S & HisVersionCalcApiParam$;
            interface HisVersionCalcApiParam extends HisVersionCalcApiParam_T {
            }
            interface HisInitVersionApiParam_S {
            }
            interface HisInitVersionApiParam_C extends HisInitVersionApiParam_S {
                new():HisInitVersionApiParam;
            }
            interface HisInitVersionApiParam$ {
                getBoGroupFields():any;
                getDynamicObjects():$.kd.bos.dataentity.entity.DynamicObject[];
                isEffImmediately():boolean;
                isSkipBusinessValidate():boolean;
                isSkipHisFieldValidate():boolean;
                setBoGroupFields(boGroupFields:any):void;
                setDynamicObjects(dynamicObjects:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                setEffImmediately(effImmediately:boolean):void;
                setSkipBusinessValidate(skipBusinessValidate:boolean):void;
                setSkipHisFieldValidate(skipHisFieldValidate:boolean):void;
            }
            type HisInitVersionApiParam_T = HisInitVersionApiParam_S & HisInitVersionApiParam$;
            interface HisInitVersionApiParam extends HisInitVersionApiParam_T {
            }
        }
        namespace kd.hr.hbp.business.domain.model.newhismodel.enable{
            interface HisEnableParamBo_S {
            }
            interface HisEnableParamBo_C extends HisEnableParamBo_S {
                new():HisEnableParamBo;
            }
            interface HisEnableParamBo$ {
                /**
                 * 获取 启用、禁用生效时间 可以不填，默认为当天
                 *
                 * @return effectDate 启用、禁用生效时间 可以不填，默认为当天
                 */
                getEffectDate():Date;
                /**
                 * 获取 事务ID
                 *
                 * @return eventId 事务ID
                 */
                getEventId():long;
                /**
                 * 获取 实体编码 + 业务实体id列表
                 *
                 * @return hisBaseBo 实体编码 + 业务实体id列表
                 */
                getHisBaseBo():HisBaseBo;
                /**
                 * 获取 处理附件信息
                 *
                 * @return mapHisAttachmentBos 处理附件信息
                 */
                getMapHisAttachmentBos():$.java.util.Map;
                /**
                 * 获取 是否原子事务，默认为true
                 *
                 * @return atomicTrans 是否原子事务，默认为true
                 */
                isAtomicTrans():boolean;
                /**
                 * 获取 true 禁用  false 启用
                 *
                 * @return isDisabled true 禁用  false 启用
                 */
                isDisabled():boolean;
                /**
                 * 设置 是否原子事务，默认为true
                 *
                 * @param atomicTrans 是否原子事务，默认为true
                 */
                setAtomicTrans(atomicTrans:boolean):void;
                /**
                 * 设置 true 禁用  false 启用
                 *
                 * @param disabled true 禁用  false 启用
                 */
                setDisabled(disabled:boolean):void;
                /**
                 * 设置 启用、禁用生效时间 可以不填，默认为当天
                 *
                 * @param effectDate 启用、禁用生效时间 可以不填，默认为当天
                 */
                setEffectDate(effectDate:Date):void;
                /**
                 * 设置 事务ID
                 *
                 * @param eventId 事务ID
                 */
                setEventId(eventId:long):void;
                /**
                 * 设置 实体编码 + 业务实体id列表
                 *
                 * @param hisBaseBo 实体编码 + 业务实体id列表
                 */
                setHisBaseBo(hisBaseBo:HisBaseBo):void;
                /**
                 * 设置 处理附件信息
                 *
                 * @param mapHisAttachmentBos 处理附件信息
                 */
                setMapHisAttachmentBos(mapHisAttachmentBos:$.java.util.Map):void;
            }
            type HisEnableParamBo_T = HisEnableParamBo_S & HisEnableParamBo$;
            interface HisEnableParamBo extends HisEnableParamBo_T {
            }
        }
        namespace kd.hr.hbp.business.domain.model.newhismodel.event{
            interface HisSearchLaterEventParam_S {
            }
            interface HisSearchLaterEventParam_C extends HisSearchLaterEventParam_S {
                new():HisSearchLaterEventParam;
            }
            interface HisSearchLaterEventParam$ {
                getEventGroupNumber():string;
                getEventId():long;
                getResisterEventGroupAppId():string;
                getResisterEventGroupEntityNumber():string;
                setEventGroupNumber(eventGroupNumber:string):void;
                setEventId(eventId:long):void;
                setResisterEventGroupAppId(resisterEventGroupAppId:string):void;
                setResisterEventGroupEntityNumber(resisterEventGroupEntityNumber:string):void;
            }
            type HisSearchLaterEventParam_T = HisSearchLaterEventParam_S & HisSearchLaterEventParam$;
            interface HisSearchLaterEventParam extends HisSearchLaterEventParam_T {
            }
        }
        namespace kd.hr.hbp.business.extpoint.permission.dyna{
            interface RuleMatchBO_S {
            }
            interface RuleMatchBO_C extends RuleMatchBO_S {
                new():RuleMatchBO;
            }
            interface RuleMatchBO$ {
                getBizDataMap():$.java.util.Map;
                getConditionMap():$.java.util.Map;
                getRuleParamMap():$.java.util.Map;
                setBizDataMap(bizDataMap:$.java.util.Map):void;
                setConditionMap(conditionMap:$.java.util.Map):void;
                setRuleParamMap(ruleParamMap:$.java.util.Map):void;
            }
            type RuleMatchBO_T = RuleMatchBO_S & RuleMatchBO$;
            interface RuleMatchBO extends RuleMatchBO_T {
            }
            interface IPermRuleMatchPlugin_S {
            }
            interface IPermRuleMatchPlugin$ {
                /**
                 * 匹配规则
                 *
                 * @param ruleMatchBO bo
                 * @return {key:方案id,value:{key:业务数据id,value:BO}}
                 */
                matchRule(ruleMatchBO:RuleMatchBO):$.java.util.Map;
            }
            type IPermRuleMatchPlugin_T = IPermRuleMatchPlugin_S & IPermRuleMatchPlugin$;
            interface IPermRuleMatchPlugin extends IPermRuleMatchPlugin_T {
            }
        }
        namespace kd.hr.hbp.business.extpoint.permission.hradmi{
            interface IAdminGroupListSubPlugin_S {
            }
            interface IAdminGroupListSubPlugin$ {
                /**
                 * 插件事件方法：业务逻辑执行时触发，重写此方法，可为用户F7添加自定义过滤器
                 *
                 * @param lsp 列表展示参数
                 */
                customUserF7ShowParameter?(lsp:$.kd.bos.list.ListShowParameter):void;
            }
            type IAdminGroupListSubPlugin_T = IAdminGroupListSubPlugin_S & IAdminGroupListSubPlugin$;
            interface IAdminGroupListSubPlugin extends IAdminGroupListSubPlugin_T {
            }
            interface AdminGroupPermSubBO_S {
            }
            interface AdminGroupPermSubBO_C extends AdminGroupPermSubBO_S {
                new():AdminGroupPermSubBO;
                new(model:$.kd.bos.entity.datamodel.IDataModel,view:$.kd.bos.form.IFormView):AdminGroupPermSubBO;
            }
            interface AdminGroupPermSubBO$ {
                getModel():$.kd.bos.entity.datamodel.IDataModel;
                getView():$.kd.bos.form.IFormView;
                setModel(model:$.kd.bos.entity.datamodel.IDataModel):void;
                setView(view:$.kd.bos.form.IFormView):void;
            }
            type AdminGroupPermSubBO_T = AdminGroupPermSubBO_S & AdminGroupPermSubBO$;
            interface AdminGroupPermSubBO extends AdminGroupPermSubBO_T {
            }
            interface IAdminGroupPermSubPlugin_S {
                readonly FLAG_SAVE_VALIDATE:string;
            }
            interface IAdminGroupPermSubPlugin$ {
                /**
                 * 插件事件方法：业务逻辑执行完后触发，同步处理其他数据
                 */
                afterSave?(bo:AdminGroupPermSubBO):void;
                /**
                 * 插件事件方法：业务逻辑执行前触发，提前准备参数，检查数据
                 *
                 * @param bo bean
                 * @return 是否通过校验
                 */
                beforeSave?(bo:AdminGroupPermSubBO):boolean;
                /**
                 * 插件事件方法：业务逻辑执行时触发，重写此方法，可改写业务实现逻辑
                 */
                doSave?(bo:AdminGroupPermSubBO):void;
            }
            type IAdminGroupPermSubPlugin_T = IAdminGroupPermSubPlugin_S & IAdminGroupPermSubPlugin$;
            interface IAdminGroupPermSubPlugin extends IAdminGroupPermSubPlugin_T {
            }
        }
        namespace kd.hr.hbp.business.extpoint.permission.role{
            interface IRoleAssignMemCusPlugin_S {
            }
            interface IRoleAssignMemCusPlugin$ {
                customPermFileF7?(lsp:$.kd.bos.list.ListShowParameter):void;
            }
            type IRoleAssignMemCusPlugin_T = IRoleAssignMemCusPlugin_S & IRoleAssignMemCusPlugin$;
            interface IRoleAssignMemCusPlugin extends IRoleAssignMemCusPlugin_T {
            }
            interface IMemAssignRoleCusPlugin_S {
            }
            interface IMemAssignRoleCusPlugin$ {
                customRoleF7?(showParameter:$.kd.bos.list.ListShowParameter):void;
            }
            type IMemAssignRoleCusPlugin_T = IMemAssignRoleCusPlugin_S & IMemAssignRoleCusPlugin$;
            interface IMemAssignRoleCusPlugin extends IMemAssignRoleCusPlugin_T {
            }
            interface IExportRolePermCusPlugin_S {
            }
            interface IExportRolePermCusPlugin$ {
                buildPermFileFilter():$.kd.bos.orm.query.QFilter;
            }
            type IExportRolePermCusPlugin_T = IExportRolePermCusPlugin_S & IExportRolePermCusPlugin$;
            interface IExportRolePermCusPlugin extends IExportRolePermCusPlugin_T {
            }
            interface IRoleDimF7CustomFilterPlugin_S {
            }
            interface IRoleDimF7CustomFilterPlugin$ {
                /**
                 *  @param evt
                 * @param currentHRbuCaFunc 当前职能
                 * @param dimId
                 */
                addBDDimCustomFilters(evt:$.kd.bos.form.field.events.BeforeF7SelectEvent,currentHRbuCaFunc:string,dimId:string):void;
                /**
                 * +
                 *
                 *  @param currentHRbuFunc 当前职能
                 *  @param dimId     维度id
                 *  @param enumMap      枚举值分录
                 */
                addEnumDimCustomFilters(currentHRbuFunc:string,dimId:string,enumMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 是否启用{不限}复选框
                 *
                 * @param currentHRbuFunc 职能
                 * @param dimId 维度
                 * @param originalValue 标品中复选框是否启用(查看状态下=false 编辑状态下=true)
                 * @return true=启用 false=禁用
                 */
                enableNotLimitCheckBox(currentHRbuFunc:string,dimId:string,originalValue:boolean):boolean;
                /**
                 * 业务组织、行政类组织团队、职能类型维度、通用树形 后处理器
                 * @param treeNodes 树形结构数据模型
                 * @return 处理后的数据模型
                 */
                postProcessTreeNode?(treeNodes:$.java.util.List,customParams:$.java.util.Map):$.java.util.List;
            }
            type IRoleDimF7CustomFilterPlugin_T = IRoleDimF7CustomFilterPlugin_S & IRoleDimF7CustomFilterPlugin$;
            interface IRoleDimF7CustomFilterPlugin extends IRoleDimF7CustomFilterPlugin_T {
            }
            interface IRoleMemCusListPlugin_S {
            }
            interface IRoleMemCusListPlugin$ {
                /**
                 * @return 角色成员过滤器，按照hrcs_userrolerelat中属性进行过滤
                 */
                filterRoleMemList():$.java.util.List;
            }
            type IRoleMemCusListPlugin_T = IRoleMemCusListPlugin_S & IRoleMemCusListPlugin$;
            interface IRoleMemCusListPlugin extends IRoleMemCusListPlugin_T {
            }
            interface ISchemeParamRuleCustomFilterPlugin_S {
            }
            interface ISchemeParamRuleCustomFilterPlugin$ {
                /**
                 * 枚举结果值支持二开过滤范围值
                 * @return map key:规则参数number ,value:对应枚举信息的key List
                 */
                addParamRuleEnumValueCustomFilters():$.java.util.Map;
                /**
                 * 基础资料及组织结果值支持二开过滤范围值
                 *  @return map key:规则参数number ,value:QFilter
                 */
                addParamRuleF7ValueCustomFilters():$.java.util.Map;
            }
            type ISchemeParamRuleCustomFilterPlugin_T = ISchemeParamRuleCustomFilterPlugin_S & ISchemeParamRuleCustomFilterPlugin$;
            interface ISchemeParamRuleCustomFilterPlugin extends ISchemeParamRuleCustomFilterPlugin_T {
            }
        }
        namespace kd.hr.hbp.business.function_{
            interface HRDefineFunction_S {
            }
            type HRDefineFunction_ST = $.java.lang.Cloneable & HRDefineFunction_S;
            interface HRDefineFunction_C extends HRDefineFunction_ST {
                new():HRDefineFunction;
            }
            interface HRDefineFunction$ {
                /**
                 * Overrides Cloneable
                 */
                clone():any;
                /**
                 * 两个整数相除
                 *
                 * @param param1
                 * @param param2
                 * @return
                 * @throws Exception
                 */
                divide(param1:number,param2:number):$.java.math.BigDecimal;
                /**
                 * 两个数值相除
                 *
                 * @param param1
                 * @param param2
                 * @return
                 * @throws Exception
                 */
                divide(param1:$.java.math.BigDecimal,param2:$.java.math.BigDecimal):$.java.math.BigDecimal;
                /**
                 * 将对象转换为逻辑数组
                 *
                 * @param obj: 对象
                 * @return java.lang.Boolean[]
                 * @throw
                 */
                getBooleanArray(obj:any):boolean[];
                /**
                 * 将对象转换为日期数组
                 *
                 * @param obj: 对象
                 * @return java.util.Date[]
                 * @throw
                 */
                getDateArray(obj:any):Date[];
                /**
                 * 将对象转换为整数数组
                 *
                 * @param obj: 对象
                 * @return java.lang.Integer[]
                 * @throw
                 */
                getIntArray(obj:any):number[];
                gt(date1:Date,date2:Date):boolean;
                gt(param1:$.java.util.Calendar,param2:$.java.util.Calendar):boolean;
                gt(value1:number,value2:number):boolean;
                gt(value1:$.java.math.BigDecimal,value2:$.java.math.BigDecimal):boolean;
                /**
                 * 日期1是否大于日期2
                 *
                 * @param date1:                  日期1
                 * @param date2:                  日期2
                 * @param checkHourMinSec:是否比较时分秒
                 * @return boolean
                 */
                gt(date1:Date,date2:Date,checkHourMinSec:boolean):boolean;
                gtOrEqual(date1:Date,date2:Date):boolean;
                gtOrEqual(value1:number,value2:number):boolean;
                gtOrEqual(value1:$.java.math.BigDecimal,value2:$.java.math.BigDecimal):boolean;
                /**
                 * 日期1是否大于等于日期2
                 *
                 * @param date1:           日期1
                 * @param date2:           日期2
                 * @param checkHourMinSec: 是否比较时分秒
                 * @return boolean
                 */
                gtOrEqual(date1:Date,date2:Date,checkHourMinSec:boolean):boolean;
                /**
                 * 判断两个日期是否相等
                 *
                 * @param date1
                 * @param date2
                 * @return
                 */
                isEqual(date1:Date,date2:Date):boolean;
                /**
                 * 判断两个字符串是否相等
                 *
                 * @param string1
                 * @param string2
                 * @return
                 */
                isEqual(string1:string,string2:string):boolean;
                /**
                 * 判断两个对象是否相等
                 *
                 * @param value1
                 * @param value2
                 * @return
                 */
                isEqual(value1:any,value2:any):boolean;
                /**
                 * 判断两个布尔值是否相等
                 *
                 * @param value1
                 * @param value2
                 * @return
                 */
                isEqual(value1:boolean,value2:boolean):boolean;
                /**
                 * 判断两个整数是否相等
                 *
                 * @param value1
                 * @param value2
                 * @return
                 */
                isEqual(value1:number,value2:number):boolean;
                /**
                 * 判断两个数值是否相等
                 *
                 * @param value1
                 * @param value2
                 * @return
                 */
                isEqual(value1:$.java.math.BigDecimal,value2:$.java.math.BigDecimal):boolean;
                /**
                 * 判断两个动态对象是否相等
                 *
                 * @param value1
                 * @param value2
                 * @return
                 */
                isEqual(value1:$.kd.bos.dataentity.entity.DynamicObject,value2:$.kd.bos.dataentity.entity.DynamicObject):boolean;
                /**
                 * 判断两个日期是否相等
                 *
                 * @param date1           日期1
                 * @param date2           日期2
                 * @param checkHourMinSec 是否比较时分秒
                 * @return
                 */
                isEqual(date1:Date,date2:Date,checkHourMinSec:boolean):boolean;
                lt(date1:Date,date2:Date):boolean;
                lt(param1:$.java.util.Calendar,param2:$.java.util.Calendar):boolean;
                lt(value1:number,value2:number):boolean;
                lt(value1:$.java.math.BigDecimal,value2:$.java.math.BigDecimal):boolean;
                /**
                 * 比较日期1是否小于日期2
                 *
                 * @param date1:           日期1
                 * @param date2:           日期2
                 * @param checkHourMinSec: 是否比较时分秒
                 * @return boolean
                 */
                lt(date1:Date,date2:Date,checkHourMinSec:boolean):boolean;
                ltOrEqual(date1:Date,date2:Date):boolean;
                ltOrEqual(param1:$.java.util.Calendar,param2:$.java.util.Calendar):boolean;
                ltOrEqual(value1:number,value2:number):boolean;
                ltOrEqual(value1:$.java.math.BigDecimal,value2:$.java.math.BigDecimal):boolean;
                /**
                 * 日期1是否小于等于日期2
                 *
                 * @param date1:           日期1
                 * @param date2:           日期2
                 * @param checkHourMinSec: 是否比较时分秒
                 * @return boolean
                 */
                ltOrEqual(date1:Date,date2:Date,checkHourMinSec:boolean):boolean;
                /**
                 * 两个整数相乘
                 *
                 * @param param1
                 * @param param2
                 * @return
                 */
                multiply(param1:number,param2:number):$.java.math.BigDecimal;
                /**
                 * 两个数值相乘
                 *
                 * @param param1
                 * @param param2
                 * @return
                 */
                multiply(param1:$.java.math.BigDecimal,param2:$.java.math.BigDecimal):$.java.math.BigDecimal;
                /**
                 * 字符串类型转日期类型
                 *
                 * @param dateStr: 字符串
                 * @return java.util.Date
                 * @throw
                 */
                parseDate(dateStr:string):Date;
                /**
                 * 两个整数相加
                 *
                 * @param param1
                 * @param param2
                 * @return
                 * @throws Exception
                 */
                plus(param1:number,param2:number):number;
                /**
                 * 两个数值相加
                 *
                 * @param param1
                 * @param param2
                 * @return
                 */
                plus(param1:$.java.math.BigDecimal,param2:$.java.math.BigDecimal):$.java.math.BigDecimal;
                /**
                 * 数值精度处理
                 *
                 * @param value
                 * @param scale
                 * @return
                 */
                rounding(value:$.java.math.BigDecimal,scale:number):$.java.math.BigDecimal;
                /**
                 * 两个整数相减
                 *
                 * @param param1
                 * @param param2
                 * @return
                 * @throws Exception
                 */
                subtract(param1:number,param2:number):number;
                /**
                 * 两个数值相减
                 *
                 * @param param1
                 * @param param2
                 * @return
                 */
                subtract(param1:$.java.math.BigDecimal,param2:$.java.math.BigDecimal):$.java.math.BigDecimal;
                unEqual(date1:Date,date2:Date):boolean;
                unEqual(string1:string,string2:string):boolean;
                unEqual(value1:any,value2:any):boolean;
                unEqual(value1:boolean,value2:boolean):boolean;
                unEqual(value1:number,value2:number):boolean;
                unEqual(value1:$.java.math.BigDecimal,value2:$.java.math.BigDecimal):boolean;
                unEqual(value1:$.kd.bos.dataentity.entity.DynamicObject,value2:$.kd.bos.dataentity.entity.DynamicObject):boolean;
                /**
                 * 比较日期是否相等
                 *
                 * @param date1:                  日期1
                 * @param date2:                  日期2
                 * @param checkHourMinSec:是否检查时分秒
                 * @return boolean
                 */
                unEqual(date1:Date,date2:Date,checkHourMinSec:boolean):boolean;
            }
            type HRDefineFunction_T = $.java.lang.Cloneable & HRDefineFunction_S & HRDefineFunction$;
            interface HRDefineFunction extends HRDefineFunction_T {
            }
        }
        namespace kd.hr.hbp.business.init{
            interface ITransferConfPostMicroService_S {
            }
            interface ITransferConfPostMicroService$ {
                /**
                 * 业务后置同步传输配置迁移后的数据
                 *
                 * @param entityNumber 实体编码
                 * @param entityDataIdVsNumMap 实体数据id与number映射关系<id值,编码值>
                 * @return 数据同步结果
                 *      返回结果说明：
                 *      HRMServiceResult.success : 是否成功标识
                 *      HRMServiceResult.message : 异常场景，则为异常信息，非异常场景，则为空
                 *      HRMServiceResult.returnCode : 同步数据全部成功，则为success，如果有同步失败数据，则为fail
                 *      HRMServiceResult.returnData : 如果returnCode为success，则为空，如果returnCode为fail，
                 *                                  则为失败数据ID和失败信息的Map<Object,String>，格式为<ID,失败信息>
                 */
                postSync(entityNumber:string,entityDataIdVsNumMap:$.java.util.Map):kd.hr.hbp.common.mservice.HRMServiceResult;
            }
            type ITransferConfPostMicroService_T = ITransferConfPostMicroService_S & ITransferConfPostMicroService$;
            interface ITransferConfPostMicroService extends ITransferConfPostMicroService_T {
            }
        }
        namespace kd.hr.hbp.business.openservicehelper.activity{
            interface HRActivityServiceHelper_S {
                /**
                 * 分配活动实例处理人
                 *
                 * @param requestMap 请求参数
                 * @return 分配活动实例处理人结果
                 */
                assignActivityIns(requestMap:$.java.util.Map):$.kd.bos.entity.operate.result.OperationResult;
                /**
                 * 同意活动实例
                 *
                 * @param requestMap 请求参数
                 * @return 同意活动实例结果
                 */
                consentActivityIns(requestMap:$.java.util.Map):$.kd.bos.entity.operate.result.OperationResult;
                /**
                 * 查询单个活动实例信息
                 *
                 * @param requestMap 请求参数
                 * @return 活动实例信息
                 */
                getActivityIns(requestMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 查询多个活动实例信息
                 *
                 * @param requestMap 请求参数
                 * @return 活动实例信息集合
                 */
                getActivityInstances(requestMap:$.java.util.Map):$.java.util.List;
                /**
                 * 查询活动方案信息
                 *
                 * @param requestMap 请求参数
                 * @return 活动方案信息
                 */
                getActivityScheme(requestMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 查询最新活动实例
                 *
                 * @param requestMap 请求参数
                 * @return 活动实例
                 */
                getLatestActivityIns(requestMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 驳回活动实例
                 *
                 * @param requestMap 请求参数
                 * @return 驳回活动实例结果
                 */
                rejectActivityIns(requestMap:$.java.util.Map):$.kd.bos.entity.operate.result.OperationResult;
                /**
                 * 终止活动
                 *
                 * @param requestMap 请求参数
                 * @return 终止活动结果
                 */
                terminateActivityIns(requestMap:$.java.util.Map):$.kd.bos.entity.operate.result.OperationResult;
                /**
                 * 转交活动实例
                 *
                 * @param requestMap 请求参数
                 * @return 转交活动实例结果
                 */
                transferActivityIns(requestMap:$.java.util.Map):$.kd.bos.entity.operate.result.OperationResult;
                /**
                 * 更新活动实例关联的业务单据的信息
                 *
                 * @param requestMap 请求参数
                 */
                updateActivityInsBindInfo(requestMap:$.java.util.Map):void;
            }
            interface HRActivityServiceHelper_C extends HRActivityServiceHelper_S {
                new():HRActivityServiceHelper;
            }
            interface HRActivityServiceHelper$ {
            }
            type HRActivityServiceHelper_T = HRActivityServiceHelper_S & HRActivityServiceHelper$;
            interface HRActivityServiceHelper extends HRActivityServiceHelper_T {
            }
            interface HRActivityModule_S {
            }
            type HRActivityModule_ST = $.kd.sdk.module.Module & HRActivityModule_S;
            interface HRActivityModule_C extends HRActivityModule_ST {
                new():HRActivityModule;
            }
            interface HRActivityModule$ {
            }
            type HRActivityModule_T = $.kd.sdk.module.Module & HRActivityModule_S & HRActivityModule$;
            interface HRActivityModule extends HRActivityModule_T {
            }
        }
        namespace kd.hr.hbp.business.openservicehelper.basedata{
            interface HRBaseDataModelModule_S {
            }
            type HRBaseDataModelModule_ST = $.kd.sdk.module.Module & HRBaseDataModelModule_S;
            interface HRBaseDataModelModule_C extends HRBaseDataModelModule_ST {
                new():HRBaseDataModelModule;
            }
            interface HRBaseDataModelModule$ {
            }
            type HRBaseDataModelModule_T = $.kd.sdk.module.Module & HRBaseDataModelModule_S & HRBaseDataModelModule$;
            interface HRBaseDataModelModule extends HRBaseDataModelModule_T {
            }
        }
        namespace kd.hr.hbp.business.openservicehelper.hrpi{
            interface HPRIPerBankCardServiceHelper_S {
                /**
                 * 新增银行卡
                 *
                 * @param mapList 银行卡列表map
                 * @return true-成功，false-失败
                 */
                addPerBankCard(mapList:$.java.util.List):boolean;
                /**
                 * 新增银行卡没有控权
                 *
                 * @param mapList 银行卡列表map
                 * @return true-成功，false-失败
                 */
                addPerBankCardNoPer(mapList:$.java.util.List):boolean;
                /**
                 * 删除银行卡
                 *
                 * @param mapList 银行卡列表map
                 * @return true-成功，false-失败
                 */
                deletePerBankCard(isHasRight:boolean,mapList:$.java.util.List):boolean;
                /**
                 * 变更银行卡
                 *
                 * @param mapList 银行卡列表map
                 * @return true-成功，false-失败
                 */
                modifyPerBankCard(mapList:$.java.util.List):boolean;
            }
            interface HPRIPerBankCardServiceHelper_C extends HPRIPerBankCardServiceHelper_S {
                new():HPRIPerBankCardServiceHelper;
            }
            interface HPRIPerBankCardServiceHelper$ {
            }
            type HPRIPerBankCardServiceHelper_T = HPRIPerBankCardServiceHelper_S & HPRIPerBankCardServiceHelper$;
            interface HPRIPerBankCardServiceHelper extends HPRIPerBankCardServiceHelper_T {
            }
            interface HRPIChargePersonServiceHelper_S {
            }
            interface HRPIChargePersonServiceHelper_C extends HRPIChargePersonServiceHelper_S {
                new():HRPIChargePersonServiceHelper;
            }
            interface HRPIChargePersonServiceHelper$ {
                /**
                 * 根据组织id和架构方案id查询某日期组织和父层组织负责人信息
                 *
                 * @param orgIds        组织id
                 * @param queryDate     查询日期
                 * @param structProject 架构方案id
                 * @return 负责人信息
                 */
                queryChargeWithParentByOrgId(orgIds:$.java.util.List,queryDate:Date,structProject:long):$.java.util.Map;
            }
            type HRPIChargePersonServiceHelper_T = HRPIChargePersonServiceHelper_S & HRPIChargePersonServiceHelper$;
            interface HRPIChargePersonServiceHelper extends HRPIChargePersonServiceHelper_T {
            }
            interface HRPIOrgWorkFlowServiceHelper_S {
                /**
                 * 负责人
                 *
                 * @param referencePersons
                 * @param businessKey
                 * @param entityNumber
                 * @param params
                 * @return List<Long> 负责人id集合
                 */
                getLeaderId(referencePersons:$.java.util.List,businessKey:string,entityNumber:string,params:$.java.util.Map):$.java.util.List;
                /**
                 * 上级负责人
                 *
                 * @param referencePersons
                 * @param businessKey
                 * @param entityNumber
                 * @param params
                 * @return List<Long> 上级负责人id集合
                 */
                getSuperiorLeaderId(referencePersons:$.java.util.List,businessKey:string,entityNumber:string,params:$.java.util.Map):$.java.util.List;
            }
            interface HRPIOrgWorkFlowServiceHelper_C extends HRPIOrgWorkFlowServiceHelper_S {
                new():HRPIOrgWorkFlowServiceHelper;
            }
            interface HRPIOrgWorkFlowServiceHelper$ {
            }
            type HRPIOrgWorkFlowServiceHelper_T = HRPIOrgWorkFlowServiceHelper_S & HRPIOrgWorkFlowServiceHelper$;
            interface HRPIOrgWorkFlowServiceHelper extends HRPIOrgWorkFlowServiceHelper_T {
            }
            interface HRPIModule_S {
            }
            type HRPIModule_ST = $.kd.sdk.module.Module & HRPIModule_S;
            interface HRPIModule_C extends HRPIModule_ST {
                new():HRPIModule;
            }
            interface HRPIModule$ {
            }
            type HRPIModule_T = $.kd.sdk.module.Module & HRPIModule_S & HRPIModule$;
            interface HRPIModule extends HRPIModule_T {
            }
            interface HRPIPersonGenericServiceHelper_S {
                /**
                 * 批量保存接口，默认将校验通过的数据进行写入
                 *
                 * @param paramMap 保存数据的入参<br/><br/>
                 *  <pre>{<br/>
                 *     "caller": 调用方来源：initialize-初始化，hfps-事物变动<br/>
                 *     "mustAllSuccess": 允许部分成功标记：true-全部成功，false-部分成功<br/>
                 *     "eventId": 事物ID-批量接口的所有数据都放在这一个事物里,<br/>
                 *     "data": [<br/>
                 *                {  // 第一个需要保存的对象<br/>
                 *     		"hisDyns": [{  // hisDyns = DynamicObjectCollection数据类型<br/>
                 *                 "bsed": 版本计划生效日期（时序性历史实体）,<br/>
                 *                 "bsled": 版本计划失效日期（时序性历史实体）,<br/>
                 *                 "id": 主键,<br/>
                 *                 "boid": 业务主键（如果是更新数据需要传，否则默认新增）<br/>
                 *                 ...(业务字段)<br/>
                 *             }]<br/>
                 * 		},<br/>
                 * 		{  // 第二个需要保存的对象<br/>
                 *     		"hisDyns": [{<br/>
                 *                 "bsed": 版本计划生效日期（时序性历史实体）,<br/>
                 *                 "bsled": 版本计划失效日期（时序性历史实体）,<br/>
                 *                 "id": 主键,<br/>
                 *                 "boid": 业务主键（如果是更新数据需要传，否则默认新增）<br/>
                 *                 ...(业务字段)<br/>
                 *             }]<br/>
                 * 		},<br/>
                 * 		{...}<br/>
                 *     ]<br/>
                 * }</pre>
                 * @return Map<String, Object> 保存结果<br/>
                 * <pre><br/>
                 * {<br/>
                 *     "success": 是否成功标记：true-接口全部成功，false-接口执行失败，包括数据校验失败、写入失败等异常场景<br/>
                 *     "message": 返回信息说明<br/>
                 *     "data": [<br/>
                 *                {<br/>
                 *     		"code": 200, // 历史模型接口返回成功编码<br/>
                 *     		"errorMessage": 历史模型接口返回错误信息<br/>
                 *     		"data" : {<br/>
                 *                 "eventId": 事物ID，<br/>
                 *                 "versionChangeRespDataList": [<br/>
                 *                     {<br/>
                 *                         "eventId": 事物ID,<br/>
                 *                         "entityNumber": 实体编码<br/>
                 *                         "newDynamicObjects": [新的版本数据] // dynamicObject数组<br/>
                 *                     }<br/>
                 *                 ]<br/>
                 *             }<br/>
                 * 		}<br/>
                 *     ],<br/>
                 * 	"errInfos": [<br/>
                 *         {<br/>
                 *             "entityNumber": 实体编码,<br/>
                 *             "exceptionMessage": 实体操作异常返回的错误信息（不能精确到哪一条数据）<br/>
                 *             "errorDatas": [<br/>
                 *                 {<br/>
                 *                     "id": 主键ID,<br/>
                 *                     "errMsg": 错误信息。<br/>
                 *                 }<br/>
                 *             ]<br/>
                 *         }<br/>
                 *     ]<br/>
                 * }<br/>
                 * </pre>
                 */
                saveBatch(paramMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 校验接口
                 *
                 * @param paramMap 待校验数据的入参
                 * @return Map<String, Object> 校验结果
                 */
                validate(paramMap:$.java.util.Map):$.java.util.Map;
            }
            interface HRPIPersonGenericServiceHelper_C extends HRPIPersonGenericServiceHelper_S {
                new():HRPIPersonGenericServiceHelper;
            }
            interface HRPIPersonGenericServiceHelper$ {
            }
            type HRPIPersonGenericServiceHelper_T = HRPIPersonGenericServiceHelper_S & HRPIPersonGenericServiceHelper$;
            interface HRPIPersonGenericServiceHelper extends HRPIPersonGenericServiceHelper_T {
            }
            interface HRPIWorkRoleServiceHelper_S {
                /**
                 * 新增汇报关系
                 *
                 * @param addSuperiorList 汇报关系数据
                 * @return HrApiResponse<Map<String, Object>> code： 200成功 202：部分校验失败   success：true、false   data:错误信息
                 */
                addSuperior(addSuperiorList:$.java.util.List):$.java.util.List;
                /**
                 * 删除汇报关系
                 *
                 * @param delSuperiorList 汇报关系数据
                 * @return HrApiResponse<Map<String, Object>> code： 200成功 202：部分校验失败   success：true、false   data:错误信息
                 */
                delSuperior(delSuperiorList:$.java.util.List):$.java.util.List;
                /**
                 * 失效汇报关系
                 *
                 * @param expireSuperiorList 汇报关系数据
                 * @return HrApiResponse<Map<String, Object>> code： 200成功 202：部分校验失败   success：true、false   data:错误信息
                 */
                expireSuperior(expireSuperiorList:$.java.util.List):$.java.util.List;
                /**
                 * 综合查询汇报人上级
                 *
                 * @param personIds 自然人id
                 * @return Map<Long, List<Map<String, Object>>> 汇报人上级
                 */
                getDirectSuperior(personIds:$.java.util.List):$.java.util.Map;
                /**
                 * 通过组织人综合查询汇报人上级
                 *
                 * @param depempIds 组织人
                 * @return Map<Long, List<Map<String, Object>>> 汇报人上级
                 */
                getDirectSuperiorByDepempId(depempIds:$.java.util.List):$.java.util.Map;
                /**
                 * 获取生效中行政组织主负责人信息
                 *
                 * @param orgIdList 组织集合
                 * @return List<Map<String, Object>> 生效中行政组织主负责人信息
                 */
                getMainChargeByOrg(orgIdList:$.java.util.List):$.java.util.List;
                /**
                 * 根据查询时间获取行政组织主负责人信息
                 *
                 * @param orgIdList 组织集合
                 * @return List<Map<String, Object>> 行政组织主负责人信息
                 */
                getMainChargeInfoByOrg(orgIdList:$.java.util.List,queryDate:Date):$.java.util.List;
                /**
                 * 上级行政组织汇报人
                 *
                 * @param orgIds 行政组织
                 * @return List<Map<String, Object>> 上级行政组织汇报人
                 */
                getSuperiorByOrg(orgIds:$.java.util.List):$.java.util.List;
                /**
                 * 查找上级工作角色的汇报人
                 *
                 * @param roles 角色id集合
                 * @return List<Map<String, Object>> 上级工作角色的汇报人
                 */
                getSuperiorByRole(roles:$.java.util.List):$.java.util.List;
                /**
                 * 上级工作角色汇报人
                 *
                 * @param roleIds 角色id
                 * @return Map<Long, List<Map<String, Object>>> 上级工作角色汇报人
                 */
                listSuperiorByOrg(roleIds:$.java.util.List):$.java.util.Map;
                /**
                 * 变更汇报关系
                 *
                 * @param updateSuperiorList 汇报关系数据
                 * @return HrApiResponse<Map<String, Object>> code： 200成功 202：部分校验失败   success：true、false   data:错误信息
                 */
                updateSuperior(updateSuperiorList:$.java.util.List):$.java.util.List;
            }
            interface HRPIWorkRoleServiceHelper_C extends HRPIWorkRoleServiceHelper_S {
                new():HRPIWorkRoleServiceHelper;
            }
            interface HRPIWorkRoleServiceHelper$ {
            }
            type HRPIWorkRoleServiceHelper_T = HRPIWorkRoleServiceHelper_S & HRPIWorkRoleServiceHelper$;
            interface HRPIWorkRoleServiceHelper extends HRPIWorkRoleServiceHelper_T {
            }
            interface HRPIEmployeeServiceHelper_S {
                /**
                 * 是否离职
                 *
                 * @param checkList
                 * @param checkProp number personid employeeid
                 * @return Map
                 */
                checkEmployeeStatus(checkList:$.java.util.List,checkProp:string):$.java.util.Map;
                /**
                 * 根据用工关系类型分类和用工关系状态分类查询生效的职业信息数
                 *
                 * @param labreltypeclsList   用工关系类型分类ID列表（必填）
                 * @param labrelstatusclsList 用工关系状态分类ID列表（必填）
                 * @return int 生效的职业信息数
                 */
                countEmpentrelByByTypeclsAndStatusCls(labreltypeclsList:$.java.util.List,labrelstatusclsList:$.java.util.List):number;
                /**
                 * 获取职业信息
                 *
                 * @param employeeId 企业人id
                 * @return Map<String, Object> 职业信息
                 */
                getEmpentrel(employeeId:long):$.java.util.Map;
                /**
                 * 获取企业人信息
                 *
                 * @param employeeId 企业人id
                 * @return Map<String, Object>企业人信息
                 */
                getEmployee(employeeId:long):$.java.util.Map;
                /**
                 * 获取用工状态信息
                 *
                 * @param employeeIds 企业人id集合
                 * @return Map<Long, DynamicObject> 用工状态信息
                 */
                getEmployeeStatus(employeeIds:$.java.util.List):$.java.util.Map;
                /**
                 * 组织结构图显示当前和历史时间的岗位下的人员数
                 *
                 * @param queryDate   查询日期
                 * @param positionIds 岗位id
                 * @return List<Map<String, Object>> 查询到的人员信息
                 */
                getOrgHisPerson(queryDate:Date,positionIds:$.java.util.List):$.java.util.List;
                /**
                 * 批量获取企业人附表信息
                 *
                 * @param employeeIds 企业人id集合
                 * @param qFilter          自定义条件
                 * @param attachEntityName
                 * @return List<Map<String, Object>>
                 */
                listBatchEmployeeAttachs(employeeIds:$.java.util.List,qFilter:$.kd.bos.orm.query.QFilter,attachEntityName:string):$.java.util.List;
                /**
                 * 通过自然人批量获取企业人附表信息
                 *
                 * @param personIds 自然人id
                 * @param qFilter
                 * @param attachEntityName
                 * @return List<Map<String, Object>> 企业人附表信息
                 */
                listBatchEmployeeByPerson(personIds:$.java.util.List,qFilter:$.kd.bos.orm.query.QFilter,attachEntityName:string):$.java.util.List;
                /**
                 * 企业人附表
                 *
                 * @param employeeIds 企业人id
                 * @param selectProps
                 * @param attachEntityName
                 * @return List<Map<String, Object>> 企业人附表
                 */
                listBatchPropEmployeeAttachs(employeeIds:$.java.util.List,selectProps:string,attachEntityName:string):$.java.util.List;
                /**
                 * 根据用工关系类型分类和用工关系状态分类查询生效的职业信息
                 *
                 * @param labreltypeclsList   用工关系类型分类ID列表（必填）
                 * @param labrelstatusclsList 用工关系状态分类ID列表（必填）
                 * @param start               分页条件
                 * @param limit               分页条件
                 * @return List<Map<String, Object>> 生效的职业信息
                 */
                listEmpentrelByByTypeclsAndStatusCls(labreltypeclsList:$.java.util.List,labrelstatusclsList:$.java.util.List,start:number,limit:number):$.java.util.List;
                /**
                 * 企业人附表
                 *
                 * @param employeeId 企业人id
                 * @param attachEntityName
                 * @return List<Map<String, Object>> 企业人附表
                 */
                listEmployeeAttachs(employeeId:long,attachEntityName:string):$.java.util.List;
                /**
                 * 获取企业人信息
                 *
                 * @param employeeIds 企业人id集合
                 * @return 企业人信息
                 */
                listEmployees(employeeIds:$.java.util.List):$.java.util.List;
                /**
                 * 工号查询企业人
                 *
                 * @param numbers 工号集合
                 * @return List<Map<String, Object>> 企业人
                 */
                listEmployeesByNumber(numbers:$.java.util.List):$.java.util.List;
            }
            interface HRPIEmployeeServiceHelper_C extends HRPIEmployeeServiceHelper_S {
                new():HRPIEmployeeServiceHelper;
            }
            interface HRPIEmployeeServiceHelper$ {
            }
            type HRPIEmployeeServiceHelper_T = HRPIEmployeeServiceHelper_S & HRPIEmployeeServiceHelper$;
            interface HRPIEmployeeServiceHelper extends HRPIEmployeeServiceHelper_T {
            }
            interface HRPIPersonServiceHelper_S {
                /**
                 * 校验是否存在指定人员的信息
                 *
                 * @param checkList
                 * @return List<Map<String, Object>>
                 */
                checkPerson(checkList:$.java.util.List):$.java.util.List;
                /**
                 * 校验员工是否存在 查询bos或者hr
                 *
                 * @param checkList 查询信息
                 * @param queryType 查询类型 0:所有包括平台和hr，1：只校验bos,2:只校验hr
                 * @return 成功失败
                 */
                checkPersonByOpt(checkList:$.java.util.List,queryType:string):$.java.util.List;
                /**
                 * 获取当前组织下生效的在职人员信息
                 *
                 * @param adminOrgId 行政组织Id
                 * @return Map<String, Object> 当前组织下生效的在职人员信息
                 */
                getActivePersonByOrg(adminOrgId:long):$.java.util.Map;
                /**
                 * 获取当前组织团队下生效的在职人员信息
                 *
                 * @param orgteamId 组织团队Id
                 * @return Map<String, Object> 当前组织团队下生效的在职人员信息
                 */
                getActivePersonByOrgteam(orgteamId:long):$.java.util.Map;
                /**
                 * 获取指定职责分工角色下人员信息
                 *
                 * @param posType     1：1：获取全部类型； 其他：根据传入的任职类型编码查询
                 * @param dutyworkrolesIds 职责分工角色ids
                 * @return 员工信息集合
                 */
                getAllUsersOfDutyworkroles(posType:string,dutyworkrolesIds:$.java.util.List):$.java.util.Map;
                /**
                 * 获取指定组织下所有生效的人员信息
                 *
                 * @param posType       1：获取全部类型； 其他：根据传入的任职类型编码查询
                 * @param orgIds        组织IDS
                 * @param includeSubOrg 是否包含下级
                 * @return Map<Long, Set<Long>>
                 */
                getAllUsersOfOrg(posType:string,orgIds:$.java.util.List,includeSubOrg:boolean):$.java.util.Map;
                /**
                 * 获取指定组织团队下所有生效的人员信息
                 *
                 * @param posType       1：获取全部类型； 其他：根据传入的任职类型编码查询
                 * @param orgteamIds    组织团队IDS
                 * @param includeSubOrg 是否包含下级
                 * @return Map<Long, Set<Long>>
                 */
                getAllUsersOfOrgteam(posType:string,orgteamIds:$.java.util.List,includeSubOrg:boolean):$.java.util.Map;
                /**
                 * 获取指定岗位下人员信息
                 *
                 * @param posType     1：1：获取全部类型； 其他：根据传入的任职类型编码查询
                 * @param positionIds 岗位ids
                 * @return Map<Long, Set<Long>> 员工信息集合
                 */
                getAllUsersOfPosition(posType:string,positionIds:$.java.util.List):$.java.util.Map;
                /**
                 * 查询自然人基本信息
                 *
                 * @param personId 自然人id
                 * @return Map<String, Object>
                 */
                getPersonBaseInfo(personId:long):$.java.util.Map;
                /**
                 * 获取当前组织下在职人员信息
                 *
                 * @param adminOrgIds 行政组织Id
                 * @return List<Map<String, Object>> 当前组织下在职人员信息
                 */
                getPersonByOrgs(adminOrgIds:$.java.util.List,queryDate:Date):$.java.util.List;
                /**
                 * 获取当前组织团队下在职人员信息
                 *
                 * @param orgteamIds 组织团队Id
                 * @return List<Map<String, Object>> 当前组织团队下在职人员信息
                 */
                getPersonByOrgteams(orgteamIds:$.java.util.List,queryDate:Date):$.java.util.List;
                /**
                 * 主负责人信息
                 *
                 * @param adminOrgIds 组织
                 * @param queryDate 查询日期
                 * @return List<Map<String, Object>>
                 */
                getPersonChargeInfo(adminOrgIds:$.java.util.List,queryDate:Date):$.java.util.List;
                /**
                 * 获取当前组织下在职人员信息数量和负责人信息
                 *
                 * @param adminOrgIds 行政组织Id
                 * @return List<Map<String, Object>>
                 */
                getPersonCountAndChargeInfo(adminOrgIds:$.java.util.List,queryDate:Date):$.java.util.List;
                /**
                 * 查询自然人基本信息(包含任职信息)
                 *
                 * @param personId 自然人id
                 * @return Map<String, Object>
                 */
                getPersonInfo(personId:long):$.java.util.Map;
                /**
                 * 获取人员的主任职部门ID
                 *
                 * @param personId 自然人id
                 * @return Long 主任职部门ID
                 */
                getPersonMainOrgId(personId:long):long;
                /**
                 * 通过用户id获取自然人和企业人信息
                 *
                 * @param userId 用户id
                 * @return 用户信息
                 */
                getPersonModelIdByUserId(userId:long):$.java.util.Map;
                /**
                 * 获取人员的主任职信息
                 *
                 * @param personId 自然人id
                 * @return Map<String, Object> 主任职信息
                 */
                getPrimaryEmpposorgrel(personId:long):$.java.util.Map;
                /**
                 * 通过自然人或者企业人id查询系统用户
                 *
                 * @return 系统用户
                 */
                getUserIdByPersonInfo(idMaps:$.java.util.Map):$.java.util.Map;
                /**
                 * 主任职部门是否属于指定行政组织
                 *
                 * @param personId    人员ID
                 * @param orgId       行政组织ID
                 * @param checkSubOrg 是否校验下级
                 * @return boolean 是否属于指定行政组织
                 */
                isBelongOrg(personId:long,orgId:long,checkSubOrg:boolean):boolean;
                /**
                 * 主任职岗位是否属于指定岗位
                 *
                 * @param personId   人员ID
                 * @param positionId 岗位ID
                 * @return boolean 是否属于指定岗位
                 */
                isBelongPosition(personId:long,positionId:long):boolean;
                /**
                 * 获取指定自然人附表信息
                 *
                 * @param personIds
                 * @param qFilter
                 * @param attachEntityName
                 * @return List<Map<String, Object>> 自然人附表信息
                 */
                listBatchPersonAttachs(personIds:$.java.util.List,qFilter:$.kd.bos.orm.query.QFilter,attachEntityName:string):$.java.util.List;
                /**
                 * 获取指定自然人附表信息
                 *
                 * @param personIds
                 * @param qFilter
                 * @param attachEntityName
                 * @return List<Map<String, Object>>
                 */
                listBatchPropHisPersonAttachs(personIds:$.java.util.List,selectProps:string,qFilter:$.kd.bos.orm.query.QFilter,attachEntityName:string):$.java.util.List;
                /**
                 * 获取指定自然人附表信息
                 *
                 * @param personIds
                 * @param qFilter
                 * @param attachEntityName
                 * @return List<Map<String, Object>>
                 */
                listBatchPropPersonAttachs(personIds:$.java.util.List,selectProps:string,qFilter:$.kd.bos.orm.query.QFilter,attachEntityName:string):$.java.util.List;
                /**
                 * 获取人员的全部任职信息
                 *
                 * @param personId 自然人id
                 * @return List<Map < String, Object>> 任职信息
                 */
                listEmpposorgrels(personId:long):$.java.util.List;
                /**
                 * 根据任职类型批量获取人员的全部任职信息
                 *
                 * @param postType  任职类型
                 * @param personIds 自然人ids
                 * @return List<Map < String, Object>> 任职信息
                 */
                listEmpposorgrels(postType:string,personIds:$.java.util.List):$.java.util.List;
                /**
                 * 获取指定自然人附表信息
                 *
                 * @param personId 自然人id
                 * @return List<Map<String, Object>>  附表信息
                 */
                listPersonAttachs(personId:long,attachEntityName:string):$.java.util.List;
                /**
                 * 批量获取人员基本信息
                 *
                 * @param personIds 人员ids
                 * @return List<Map<String, Object>> 人员基本信息集合
                 */
                listPersonInfos(personIds:$.java.util.List):$.java.util.List;
                /**
                 * 获取人员模型ID
                 *
                 * @param personId 人员id
                 * @param isAll    是否获取全部(包含业务状态为已失效)
                 * @return List<Map<String, Long>> 人员的各层模型ID
                 */
                listPersonModelIds(personId:long,isAll:boolean):$.java.util.List;
                /**
                 * 获取人员的全部部门ID
                 *
                 * @param personId 自然人id
                 * @return List<Long> 全部部门ID
                 */
                listPersonOrgIds(personId:long):$.java.util.List;
                /**
                 * 通过用户id获取自然人和企业人信息批量
                 *
                 * @param userIds 用户id
                 * @return Map<String, Object>用户信息
                 */
                queryPersonInfoByUserIds(userIds:$.java.util.List):$.java.util.Map;
                /**
                 * 附件删除
                 *
                 * @param formId
                 * @param pkId
                 * @return void
                 */
                removeTempAttachments(formId:string,pkId:any,fileUid:any):void;
                /**
                 * 批量保存人员附表信息
                 *
                 * @param attachMap
                 * @return Map<String, Object>
                 */
                saveOrUpdateInfo(attachMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 附件保存
                 *
                 * @param formId
                 * @param pkId
                 * @param appid
                 * @param att
                 * @return DynamicObjectCollection
                 */
                saveTempAttachments(formId:string,pkId:any,appid:string,att:$.java.util.Map):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                /**
                 * HR人员同步平台
                 *
                 * @param userList 用户信息 map的key 为工号、同步类型
                 * @return Map<String, Object>
                 */
                syncPersonToSysUer(userList:$.java.util.List):$.java.util.Map;
                /**
                 * 更新用工关系记录
                 *
                 * @param updateList
                 *          personid:自然人id
                 *          orgid:用工组织id
                 *          lawentityid:法律实体id
                 *          startdate：开始日期
                 * @return Map<String, Object> 成功失败
                 */
                updateLaborRelRecord(updateList:$.java.util.List):$.java.util.Map;
            }
            interface HRPIPersonServiceHelper_C extends HRPIPersonServiceHelper_S {
                new():HRPIPersonServiceHelper;
            }
            interface HRPIPersonServiceHelper$ {
            }
            type HRPIPersonServiceHelper_T = HRPIPersonServiceHelper_S & HRPIPersonServiceHelper$;
            interface HRPIPersonServiceHelper extends HRPIPersonServiceHelper_T {
            }
            interface HRPIApplyServiceHelper_S {
                /**
                 * 通过接口新增HR人员<br/>
                 * 新增员工信息示例入参格式<br/>
                 * | 参数名                   | 参数类型                     | 是否必填     | 说明                                             |<br/>
                 * | ------------------------ | ---------------------------- | ------------ | ------------------------------------------------ |<br/>
                 * | person                   | Long                         | 是           | 自然人ID                                         |<br/>
                 * | number                   | String                       | 是           | 工号                                             |<br/>
                 * | name                     | String                       | 是           | 姓名                                             |<br/>
                 * | phone                    | String                       | 是           | 手机号码(格式 +86-15000000000)                   |<br/>
                 * | oldperson                | Long                         | 否           | 上一个自然人id                                   |<br/>
                 * | **\*baseinfo\***         | ***\*Map<String,Object>\**** | 是           | ***\*员工基本信息\****                           |<br/>
                 * | >employee                | Long                         | 是           | 企业人ID                                         |<br/>
                 * | >depemp                  | Long                         | 是           | 组织人ID                                         |<br/>
                 * | >cepmp                   | Long                         | 是           | 所属管理范围ID                                   |<br/>
                 * | >oldempnumber            | String                       | 否           | 前工号                                           |<br/>
                 * | >inheritnumber           | String                       | 否           | 是否继承工号(1:否;2:是)用于再入职相关的业务      |<br/>
                 * | >startdate               | Date                         | 是           | 入职日期                                         |<br/>
                 * | >enterprise              | Long                         | 是           | 用人单位ID                                       |<br/>
                 * | >laborreltype            | Long                         | 是           | 用工关系类型ID                                   |<br/>
                 * | >laborrelstatus          | Long                         | 是           | 用工关系状态ID                                   |<br/>
                 * | >labrelstatusprd         | Long                         | 是           | 用工关系阶段ID(由laborrelstatus基础资料带出)     |<br/>
                 * | >isprobation             | Boolean                      | 是           | 是否有试用期                                     |<br/>
                 * | >managingscope           | Long                         | 是           | 所属管理范围ID                                   |<br/>
                 * | >***\*empposorgrels\**** | ***\*List\****               | 是           | ***\*任职经历\*(目前仅支持传一条任职经历数据)*** |<br/>
                 * | >>adminorg               | Long                         | 是           | 行政组织ID                                       |<br/>
                 * | >>posstatus              | Long                         | 是           | 任职状态                                         |<br/>
                 * | >>postype                | Long                         | 是           | 任职类型                                         |<br/>
                 * | >>startdate              | Date                         | 是           | 任期开始日期                                     |<br/>
                 * | >>enddate                | Date                         | 否           | 任职结束日期(不传则默认系统最大日期2999-12-31)   |<br/>
                 * | >>isprimary              | Boolean                      | 是           | 是否主任职                                       |<br/>
                 * | >>position               | Long                         | 是           | 岗位(岗位/标准岗位/职位 至少一个)                |<br/>
                 * | >>stdposition            | Long                         | 是           | 标准岗位(岗位/标准岗位/职位 至少一个)            |<br/>
                 * | >>job                    | Long                         | 是           | 职位(岗位/标准岗位/职位 至少一个)                |<br/>
                 * | >>workplace              | Long                         | 否           | 工作地                                           |<br/>
                 * | >>variationtype          | Long                         | 否           | 变动类型                                         |<br/>
                 * | ***\*pertsprop\****      | Map<String,Object>           | 否           | ***\*人员时序信息(对应人员时序性属性表)\****     |<br/>
                 * | >healthstatus            | Long                         | 否           | 健康状况ID                                       |<br/>
                 * | >marriagestatus          | Long                         | 否           | 婚姻状况ID                                       |<br/>
                 * | >procreatstatus          | Long                         | 否           | 生育状况ID                                       |<br/>
                 * | >childrennumber          | Int                          | 否           | 子女数                                           |<br/>
                 * | ***\*pernontsprop\****   | Map                          | 是           | ***\*人员基本信息(对应人员非时序性属性表)\****   |<br/>
                 * | >gender                  | Long                         | 是           | 性别ID                                           |<br/>
                 * | >nationality             | Long                         | 是           | 国籍ID                                           |<br/>
                 * | >birthday                | Date                         | 否           | 出生日期 **(在6.0版本由必填修改为非必填)**       |<br/>
                 * | >folk                    | Long                         | 否           | 民族ID                                           |<br/>
                 * | >constellation           | Long                         | 否           | 星座ID                                           |<br/>
                 * | >bloodtype               | String                       | 否           | 血型                                             |<br/>
                 * | >height                  | Int                          | 否           | 身高(cm)                                         |<br/>
                 * | >lunarcalendarbirthday   | Date                         | 否           | 农历生日                                         |<br/>
                 * | >***\*formername\****    | Map<String,Object>           | 否           | ***\*曾用名\*(多语言字段)***                     |<br/>
                 * | >>zh_CN                  | String                       | 否           | 简体中文                                         |<br/>
                 * | >>zh_TW                  | String                       | 否           | 繁体中文                                         |<br/>
                 * | >>en_US                  | String                       | 否           | English                                          |<br/>
                 * | >***\*title\****         | Map                          | 否           | ***\*头衔\*(多语言字段)***                       |<br/>
                 * | >>zh_CN                  | String                       | 否           | 简体中文                                         |<br/>
                 * | >>zh_TW                  | String                       | 否           | 繁体中文                                         |<br/>
                 * | >>en_US                  | String                       | 否           | English                                          |<br/>
                 * | >enname                  | String                       | 否           | 英文名                                           |<br/>
                 * | >julianbirthday          | Date                         | 否           | 公历生日                                         |<br/>
                 * | >symbolicanimals         | Long                         | 否           | 生肖ID                                           |<br/>
                 * | >nameen                  | String                       | 否           | 拼音名                                           |<br/>
                 * | >nativelngname           | String                       | 否           | 本地语言姓名                                     |<br/>
                 * | >displayname             | String                       | 否           | 显示名                                           |<br/>
                 * | >marriageregistdate      | Date                         | 否           | 结婚登记日期                                     |<br/>
                 * | ***\*percontact\****     | ***\*Map\****                | ***\*否\**** | ***\*联系信息(对应人员联系方式基础页面表)\****   |<br/>
                 * | >otherphone              | String                       | 否           | 其他手机(格式 +86-15000000000)                   |<br/>
                 * | >peremail                | String                       | 否           | 个人邮箱                                         |<br/>
                 * | ***\*perregion\****      | Map                          | 否           | ***\*人员其他信息(对应人员区域信息表)\****       |<br/>
                 * | >politicalstatus         | Long                         | 否           | 政治面貌ID                                       |<br/>
                 * | >party                   | Long                         | 否           | 所属党派ID                                       |<br/>
                 * | >joinpartydate           | Date                         | 否           | 入党日期                                         |<br/>
                 * | >***\*nativeplace\****   | Map                          | 否           | ***\*籍贯\*(多语言字段)***                       |<br/>
                 * | >>zh_CN                  | String                       | 否           | 简体中文                                         |<br/>
                 * | >>zh_TW                  | String                       | 否           | 繁体中文                                         |<br/>
                 * | >>en_US                  | String                       | 否           | English                                          |<br/>
                 * | >***\*birthplace\****    | Map                          | 否           | ***\*出生地\*(多语言字段)***                     |<br/>
                 * | >>zh_CN                  | String                       | 否           | 简体中文                                         |<br/>
                 * | >>zh_TW                  | String                       | 否           | 繁体中文                                         |<br/>
                 * | >>en_US                  | String                       | 否           | English                                          |<br/>
                 *
                 * @param employeeListInfo 参数列表 构造见上述示例
                 * @return 处理的返回结果 <br/>
                 * | 参数名       | 参数类型                  | 说明                                                       |<br/>
                 * | ------------ | ------------------------- | ---------------------------------------------------------- |<br/>
                 * | data         | Map<String, Object>       | 通用接口返回的保存结果                                     |<br/>
                 * | success      | boolean                   | 成功的标识；true：成功；false：失败                        |<br/>
                 * | errorInfoMsg | List<Map<String, Object>> | 错误信息集合（校验的错误信息不包含调用保存接口的错误返回） |<br/>
                 * | successInfo  | Map<String, Object>       | 包含成功的四层人id相关的信息                               |<br/>
                 */
                addEmployee(employeeListInfo:$.java.util.List):$.java.util.Map;
                /**
                 * 废弃任职经历
                 *
                 * @param param 入参
                 * @return Map<String, Object>
                 */
                discardEmpExp(param:$.java.util.Map):$.java.util.Map;
                /**
                 *  任职经历维护<br/>
                 *  传入的depemp 为当前系统中已存在的id则走更新;否则新增<br/>
                 *  入参示例<br/>
                 *  | 参数名        | 参数类型 | 是否必填 | 说明                                    |<br/>
                 *  | ------------- | -------- | -------- | --------------------------------------- |<br/>
                 *  | depemp        | Long     | 是       | 组织人ID                                |<br/>
                 *  | number        | String   | 是       | 工号                                    |<br/>
                 *  | adminorg      | Long     | 是       | 行政组织ID                              |<br/>
                 *  | posstatus     | Long     | 是       | 任职状态ID                              |<br/>
                 *  | postype       | Long     | 是       | 任职类型ID                              |<br/>
                 *  | position      | Long     | 是       | 岗位ID (岗位/标准岗位/职位 至少一个)    |<br/>
                 *  | stdposition   | Long     | 是       | 标准岗位ID(岗位/标准岗位/职位 至少一个) |<br/>
                 *  | job           | Long     | 是       | 职位ID(岗位/标准岗位/职位 至少一个)     |<br/>
                 *  | workplace     | Long     | 是       | 工作地ID                                |<br/>
                 *  | startdate     | Date     | 是       | 任职开始日期                            |<br/>
                 *  | enddate       | Date     | 是       | 任职结束日期                            |<br/>
                 *  | isprimary     | Boolean  | 是       | 是否主任职                              |<br/>
                 *  | variationtype | Long     | 否       | 变动类型                                |<br/>
                 * <br/>
                 *  @param empOrgrels 参数列表 构造见上述示例
                 *  @return 处理的返回结果 <br/>
                 *  | 参数名       | 参数类型                  | 说明                                                       |<br/>
                 *  | ------------ | ------------------------- | ---------------------------------------------------------- |<br/>
                 *  | data         | Map<String, Object>       | 通用接口返回的保存结果                                     |<br/>
                 *  | success      | boolean                   | 成功的标识；true：成功；false：失败                        |<br/>
                 *  | errorInfoMsg | List<Map<String, Object>> | 错误信息集合（校验的错误信息不包含调用保存接口的错误返回） |<br/>
                 *  | successInfo  | Map<String, Object>       | 包含成功的四层人id相关的信息                               |<br/>
                 */
                saveEmpOrgrels(empOrgrels:$.java.util.List):$.java.util.Map;
                /**
                 * 职业信息维护,仅支持职业信息更新,无法单独新增职业信息<br/>
                 * 入参参数结构:<br/>
                 * | 参数名          | 参数类型 | 是否必填                             | 说明                                         |<br/>
                 * | --------------- | -------- | ------------------------------------ | -------------------------------------------- |<br/>
                 * | employee        | Long     | 是                                   | 企业人ID                                     |<br/>
                 * | number          | String   | 是                                   | 工号                                         |<br/>
                 * | inheritnumber   | String   | 否                                   | 是否继承工号(1：是；2：否)                   |<br/>
                 * | enterprise      | Long     | 否                                   | 用人单位ID                                   |<br/>
                 * | laborreltype    | Long     | 否                                   | 用工关系类型ID                               |<br/>
                 * | laborrelstatus  | Long     | 否                                   | 用工关系状态ID                               |<br/>
                 * | labrelstatusprd | Long     | 否  (laborrelstatus如果传值，则必传) | 用工关系阶段ID(由laborrelstatus基础资料带出) |<br/>
                 * | isprobation     | Boolean  | 否                                   | 是否有试用期                                 |<br/>
                 * | startdate       | Date     | 否                                   | 开始日期                                     |<br/>
                 * | enddate         | Date     | 否                                   | 结束日期                                     |<br/>
                 * | adjustlength    | Double   | 否                                   | 调整年限                                     |<br/>
                 *
                 * @param empenTrels 参数列表 构造见上述示例
                 * @return 处理的返回结果 <br/>
                 * | 参数名       | 参数类型                  | 说明                                                       |<br/>
                 * | ------------ | ------------------------- | ---------------------------------------------------------- |<br/>
                 * | data         | Map<String, Object>       | 通用接口返回的保存结果                                     |<br/>
                 * | success      | boolean                   | 成功的标识；true：成功；false：失败                        |<br/>
                 * | errorInfoMsg | List<Map<String, Object>> | 错误信息集合（校验的错误信息不包含调用保存接口的错误返回） |<br/>
                 * | successInfo  | Map<String, Object>       | 包含成功的四层人id相关的信息                               |<br/>
                 */
                saveEmpentrels(empenTrels:$.java.util.List):$.java.util.Map;
                /**
                 *  基本信息维护 更新自然人相关的信息 <br/>
                 *  入参参数结构示例:<br/>
                 *  | 参数名                 | 参数类型           | 是否必填     | 说明                                           |<br/>
                 *  | ---------------------- | ------------------ | ------------ | ---------------------------------------------- |<br/>
                 *  | person                 | Long               | 是           | 自然人ID                                       |<br/>
                 *  | number                 | String             | 是           | 工号                                           |<br/>
                 *  | name                   | String             | 是           | 姓名                                           |<br/>
                 *  | phone                  | String             | 是           | 手机号码(格式 +86-15000000000)                 |<br/>
                 *  | ***\*pertsprop\****    | Map<String,Object> | 否           | ***\*人员时序信息(对应人员时序性属性表)\****   |<br/>
                 *  | >healthstatus          | Long               | 否           | 健康状况ID                                     |<br/>
                 *  | >marriagestatus        | Long               | 否           | 婚姻状况ID                                     |<br/>
                 *  | >procreatstatus        | Long               | 否           | 生育状况ID                                     |<br/>
                 *  | >childrennumber        | Int                | 否           | 子女数                                         |<br/>
                 *  | ***\*pernontsprop\**** | Map                | 是           | ***\*人员基本信息(对应人员非时序性属性表)\**** |<br/>
                 *  | >gender                | Long               | 是           | 性别ID                                         |<br/>
                 *  | >nationality           | Long               | 是           | 国籍ID                                         |<br/>
                 *  | >birthday              | Date               | 否           | 出生日期 **(在6.0版本由必填修改为非必填)**     |<br/>
                 *  | >folk                  | Long               | 否           | 民族ID                                         |<br/>
                 *  | >constellation         | Long               | 否           | 星座ID                                         |<br/>
                 *  | >bloodtype             | String             | 否           | 血型                                           |<br/>
                 *  | >height                | Int                | 否           | 身高(cm)                                       |<br/>
                 *  | >lunarcalendarbirthday | Date               | 否           | 农历生日                                       |<br/>
                 *  | >***\*formername\****  | Map<String,Object> | 否           | ***\*曾用名\*(多语言字段)***                   |<br/>
                 *  | >>zh_CN                | String             | 否           | 简体中文                                       |<br/>
                 *  | >>zh_TW                | String             | 否           | 繁体中文                                       |<br/>
                 *  | >>en_US                | String             | 否           | English                                        |<br/>
                 *  | >***\*title\****       | Map                | 否           | ***\*头衔\*(多语言字段)***                     |<br/>
                 *  | >>zh_CN                | String             | 否           | 简体中文                                       |<br/>
                 *  | >>zh_TW                | String             | 否           | 繁体中文                                       |<br/>
                 *  | >>en_US                | String             | 否           | English                                        |<br/>
                 *  | >enname                | String             | 否           | 英文名                                         |<br/>
                 *  | >julianbirthday        | Date               | 否           | 公历生日                                       |<br/>
                 *  | >symbolicanimals       | Long               | 否           | 生肖ID                                         |<br/>
                 *  | >nameen                | String             | 否           | 拼音名                                         |<br/>
                 *  | >nativelngname         | String             | 否           | 本地语言姓名                                   |<br/>
                 *  | >displayname           | String             | 否           | 显示名                                         |<br/>
                 *  | >marriageregistdate    | Date               | 否           | 结婚登记日期                                   |<br/>
                 *  | ***\*percontact\****   | ***\*Map\****      | ***\*否\**** | ***\*联系信息(对应人员联系方式基础页面表)\**** |<br/>
                 *  | >otherphone            | String             | 否           | 其他手机(格式 +86-15000000000)                 |<br/>
                 *  | >peremail              | String             | 否           | 个人邮箱                                       |<br/>
                 *  | ***\*perregion\****    | Map                | 否           | ***\*人员其他信息(对应人员区域信息表)\****     |<br/>
                 *  | >politicalstatus       | Long               | 否           | 政治面貌ID                                     |<br/>
                 *  | >party                 | Long               | 否           | 所属党派ID                                     |<br/>
                 *  | >joinpartydate         | Date               | 否           | 入党日期                                       |<br/>
                 *  | >***\*nativeplace\**** | Map                | 否           | ***\*籍贯\*(多语言字段)***                     |<br/>
                 *  | >>zh_CN                | String             | 否           | 简体中文                                       |<br/>
                 *  | >>zh_TW                | String             | 否           | 繁体中文                                       |<br/>
                 *  | >>en_US                | String             | 否           | English                                        |<br/>
                 *  | >***\*birthplace\****  | Map                | 否           | ***\*出生地\*(多语言字段)***                   |<br/>
                 *  | >>zh_CN                | String             | 否           | 简体中文                                       |<br/>
                 *  | >>zh_TW                | String             | 否           | 繁体中文                                       |<br/>
                 *  | >>en_US                | String             | 否           | English                                        |<br/>
                 * <br/>
                 *  @param personInfos 参数列表 构造见上述示例
                 *  @return 处理的返回结果 <br/>
                 *  | 参数名       | 参数类型                  | 说明                                                       |<br/>
                 *  | ------------ | ------------------------- | ---------------------------------------------------------- |<br/>
                 *  | data         | Map<String, Object>       | 通用接口返回的保存结果                                     |<br/>
                 *  | success      | boolean                   | 成功的标识；true：成功；false：失败                        |<br/>
                 *  | errorInfoMsg | List<Map<String, Object>> | 错误信息集合（校验的错误信息不包含调用保存接口的错误返回） |<br/>
                 *  | successInfo  | Map<String, Object>       | 包含成功的四层人id相关的信息                               |<br/>
                 */
                savePersonInfo(personInfos:$.java.util.List):$.java.util.Map;
            }
            interface HRPIApplyServiceHelper_C extends HRPIApplyServiceHelper_S {
                new():HRPIApplyServiceHelper;
            }
            interface HRPIApplyServiceHelper$ {
            }
            type HRPIApplyServiceHelper_T = HRPIApplyServiceHelper_S & HRPIApplyServiceHelper$;
            interface HRPIApplyServiceHelper extends HRPIApplyServiceHelper_T {
            }
            interface HRPIDepempServiceHelper_S {
                /**
                 * 传入非主任职的全职任职和结束时间，修改为主任职的全职任职，将原主任职的全职任职,切换为非主任职全职任职
                 *
                 * @param changeParams 参数 id :任职经历主键   depempid : 组织人id (其中id 和 depempid 传其中一个即可，都传则用id)  updatedate:更新时间
                 * @return 状态码：200：成功  201：全部数据校验异常 202：部分数据校验异常，部分成功 203：保存有误 500：程序异常
                 */
                changePrimaryEmpPosOrgRel(changeParams:$.java.util.List):$.java.util.Map;
                /**
                 * 组织的编制维度更改，需全量检查该组织的人员占编情况。
                 * 查询时间交集的数据：
                 * 1.startdate >= gteDate and startdate <= lteDate or
                 * 2.startdate <= gteDate and enddate >= lteDate or
                 * 3.enddate >= gteDate and enddate <= lteDate or
                 * 4.startdate >= gteDate and enddate <= lteDate
                 *
                 * @param gteDate   查询起始日期（含）
                 * @param lteDate   查询截止日期（含）
                 * @param paramMap: -- orgteamIdList 组织团队ID集合
                 *                  -- postypeIdList 任职类型ID集合
                 *                  -- postcategoryIdList 任职类型分类ID集合
                 * @return 业务版本数据集合
                 */
                countIntersectEmpOrgrels(gteDate:Date,lteDate:Date,paramMap:$.java.util.Map):number;
                /**
                 * 获取任职信息(历史模型生效数据)
                 *
                 * @param depempId 组织人id
                 * @return Map<String, Object> 任职信息
                 */
                getDataEmpOrgrel(depempId:long):$.java.util.Map;
                /**
                 * 获取组织人信息
                 *
                 * @param depempId 组织人id
                 * @return Map<String, Object> 组织人信息
                 */
                getDepemp(depempId:long):$.java.util.Map;
                /**
                 * 获取四层人员ID
                 *
                 * @param depempId 组织人id
                 * @return Map<String, Long> 四层人员ID
                 */
                getDepempIds(depempId:long):$.java.util.Map;
                /**
                 * 获取任职信息
                 *
                 * @param depempId 组织人id
                 * @return Map<String, Object> 任职信息
                 */
                getEmpOrgrel(depempId:long):$.java.util.Map;
                /**
                 * 获取任职信息(历史模型生效数据)
                 *
                 * @param depempIds 组织人id集合
                 * @return List<DynamicObject> 任职信息
                 */
                listDataEmpOrgrelDys(depempIds:$.java.util.List):$.java.util.List;
                /**
                 * 获取任职信息(历史模型生效数据)
                 *
                 * @param depempIds 组织人id集合
                 * @return List<Map<String, Object>> 任职信息
                 */
                listDataEmpOrgrels(depempIds:$.java.util.List):$.java.util.List;
                /**
                 * 获取任职信息
                 *
                 * @param depempIds 组织人id集合
                 * @return List<DynamicObject> 任职信息
                 */
                listEmpOrgrelDys(depempIds:$.java.util.List):$.java.util.List;
                /**
                 * 获取任职信息
                 *
                 * @param depempIds 组织人id集合
                 * @return List<Map<String, Object>>
                 */
                listEmpOrgrels(depempIds:$.java.util.List):$.java.util.List;
                /**
                 * 根据职责分工角色ID查询目前该职责分工角色上的人员信息
                 *
                 * @param dutyworkrolesIdList 职责分工角色ID列表
                 * @return List<Map<String, Object>>  人员信息：头像、姓名、工号、年龄、性别、工龄、司龄、职级、任职类型、岗位
                 */
                listEmpersonByDutyworkroles(dutyworkrolesIdList:$.java.util.List):$.java.util.List;
                /**
                 * 组织的编制维度更改，需全量检查该组织的人员占编情况。
                 * 查询时间交集的数据：
                 * 1.startdate >= gteDate and startdate <= lteDate or
                 * 2.startdate <= gteDate and enddate >= lteDate or
                 * 3.enddate >= gteDate and enddate <= lteDate or
                 * 4.startdate >= gteDate and enddate <= lteDate
                 *
                 * @param gteDate   查询起始日期（含）
                 * @param lteDate   查询截止日期（含）
                 * @param paramMap: -- orgteamIdList 组织团队ID集合
                 *                  -- postypeIdList 任职类型ID集合
                 * @param id        ID的大于条件
                 * @param top       查询条数
                 * @return List<Map<String, Object>> 业务版本数据集合
                 */
                listIntersectEmpOrgrels(gteDate:Date,lteDate:Date,paramMap:$.java.util.Map,id:long,top:number):$.java.util.List;
            }
            interface HRPIDepempServiceHelper_C extends HRPIDepempServiceHelper_S {
                new():HRPIDepempServiceHelper;
            }
            interface HRPIDepempServiceHelper$ {
            }
            type HRPIDepempServiceHelper_T = HRPIDepempServiceHelper_S & HRPIDepempServiceHelper$;
            interface HRPIDepempServiceHelper extends HRPIDepempServiceHelper_T {
            }
            interface HRPICmpempServiceHelper_S {
                /**
                 * 获取所属管理范围
                 *
                 * @param cmpempId
                 * @return
                 */
                getCmpemp(cmpempId:long):$.java.util.Map;
                /**
                 * 获取管理范围记录
                 *
                 * @param cmpempId
                 * @return
                 */
                getManagingScope(cmpempId:long):$.java.util.Map;
            }
            interface HRPICmpempServiceHelper_C extends HRPICmpempServiceHelper_S {
                new():HRPICmpempServiceHelper;
            }
            interface HRPICmpempServiceHelper$ {
            }
            type HRPICmpempServiceHelper_T = HRPICmpempServiceHelper_S & HRPICmpempServiceHelper$;
            interface HRPICmpempServiceHelper extends HRPICmpempServiceHelper_T {
            }
            interface HRPTMMServiceHelper_S {
                /**
                 * 根据人员的企业人id，查询出对应人员的所有项目团队任职履历信息
                 *
                 * @param inParam 请求参数，企业人id集合
                 * @return 任职履历详情
                 */
                listTeamMemberRole(inParam:$.java.util.Map):$.java.util.Map;
            }
            interface HRPTMMServiceHelper_C extends HRPTMMServiceHelper_S {
                new():HRPTMMServiceHelper;
            }
            interface HRPTMMServiceHelper$ {
            }
            type HRPTMMServiceHelper_T = HRPTMMServiceHelper_S & HRPTMMServiceHelper$;
            interface HRPTMMServiceHelper extends HRPTMMServiceHelper_T {
            }
        }
        namespace kd.hr.hbp.business.openservicehelper.lcs{
            interface LCSCostCenterModule_S {
            }
            type LCSCostCenterModule_ST = $.kd.sdk.module.Module & LCSCostCenterModule_S;
            interface LCSCostCenterModule_C extends LCSCostCenterModule_ST {
                new():LCSCostCenterModule;
            }
            interface LCSCostCenterModule$ {
            }
            type LCSCostCenterModule_T = $.kd.sdk.module.Module & LCSCostCenterModule_S & LCSCostCenterModule$;
            interface LCSCostCenterModule extends LCSCostCenterModule_T {
            }
            interface LCSCostCenterServiceHelper_S {
                /**
                 * 新增/修改成本中心
                 *
                 * @param param 单次最大处理1w条
                 * @return 返回入参，保证个数一致，增加部分返回属性，success：true/false  message:错误信息
                 */
                saveCostCenters(param:$.java.util.Map):$.java.util.Map;
            }
            interface LCSCostCenterServiceHelper_C extends LCSCostCenterServiceHelper_S {
                new():LCSCostCenterServiceHelper;
            }
            interface LCSCostCenterServiceHelper$ {
            }
            type LCSCostCenterServiceHelper_T = LCSCostCenterServiceHelper_S & LCSCostCenterServiceHelper$;
            interface LCSCostCenterServiceHelper extends LCSCostCenterServiceHelper_T {
            }
        }
        namespace kd.hr.hbp.business.openservicehelper.msgcollaboration{
            interface HRMsgCollaborationModule_S {
            }
            type HRMsgCollaborationModule_ST = $.kd.sdk.module.Module & HRMsgCollaborationModule_S;
            interface HRMsgCollaborationModule_C extends HRMsgCollaborationModule_ST {
                new():HRMsgCollaborationModule;
            }
            interface HRMsgCollaborationModule$ {
            }
            type HRMsgCollaborationModule_T = $.kd.sdk.module.Module & HRMsgCollaborationModule_S & HRMsgCollaborationModule$;
            interface HRMsgCollaborationModule extends HRMsgCollaborationModule_T {
            }
            interface HRMsgCollaborationServiceHelper_S {
                /**
                 * 获取已订阅/生效的API信息
                 *
                 * @param msgSubNo 订阅方唯一识别码
                 * @return 已订阅/生效的API信息
                 */
                getAPIInfoByMsgSubNo(msgSubNo:string):$.java.util.List;
                /**
                 * 订阅方通过中台获取消息变动信息
                 *
                 * @param apiId   api id
                 * @param qFilter 过滤器
                 * @param orderBy 排序
                 * @return 人员信息
                 */
                getDataBySub(apiId:long,qFilter:$.kd.bos.orm.query.QFilter,orderBy:string):$.java.util.List;
                /**
                 * 根据消息中心编号获取消息中心消费者消费反馈信息
                 *
                 * @param msgNumber: 消息中心编号
                 * @param actionId:  活动id
                 * @return 消息中心消费者消息反馈信息
                 */
                getMsgCenterInfo(msgNumber:string,actionId:long):$.java.util.List;
                /**
                 * 根据消息中心编号获取消息中心消费者消费反馈信息
                 *
                 * @param paramsList 消息编号和活动id列表
                 * @return 消息中心消费者消息反馈信息
                 */
                getMsgCenterListInfo(paramsList:$.java.util.List):$.java.util.List;
                /**
                 * 根据活动ID获取发布方信息
                 *
                 * @param actionId 活动ID
                 * @return 发布方信息
                 */
                getPubByActionId(actionId:long):$.java.util.List;
                /**
                 * 根据发布方唯一识别码获取简单活动信息
                 *
                 * @param msgPubNo 发布方唯一识别码
                 * @return 简单活动信息
                 */
                getSimpleActionInfo(msgPubNo:string):$.java.util.Map;
                /**
                 * 根据 API模板配置 ID, 获取对应的XML描述信息
                 *
                 * @param id 模板配置ID
                 * @return 对应的XML描述信息
                 */
                getXMLDescById(id:long):string;
                /**
                 * 业务领域将需要协作的活动信息推送至中台服务 （1）校验活动的合法性 （2）根据活动信息获取活动发布信息、活动订阅信息 （3）将活动信息、活动发布信息推送消息中心 （3）将活动信息、活动发布信息、活动订阅信息均写入生产者队列
                 * 将发布者需要发送给订阅方的消息通过MQ发送到中台
                 *
                 * @param actionInfo 活动信息
                 */
                publishAction(actionInfo:$.java.util.Map):void;
                /**
                 * 将发布者需要发送给订阅方的消息，以批量方式通过MQ发送到中台
                 *
                 * @param actionInfoList:
                 * @return 消息发送结果
                 */
                publishAction(actionInfoList:$.java.util.List):kd.hr.hbp.common.mservice.HRMSendMsgResult;
                /**
                 * 新增活动基础资料数据
                 *
                 * @param actionDy: 活动动态对象
                 * @return 新增后的actionId
                 */
                saveActionDy(actionDy:$.kd.bos.dataentity.entity.DynamicObject):long;
                /**
                 * 新增活动类型基础资料数据
                 *
                 * @param actionTypeDy: 活动类型动态对象
                 * @return 新增后的actionTypeId
                 */
                saveActionTypeDy(actionTypeDy:$.kd.bos.dataentity.entity.DynamicObject):long;
                /**
                 * 新增/修改发布中心数据
                 *
                 * @param publisherMap: 发布者map
                 * @param isModify: 是否修改
                 * @return long 新增后的发布者唯一识别码
                 */
                saveMsgPublisher(publisherMap:$.java.util.Map,isModify:boolean):string;
                /**
                 * 将消费方反馈的消费信息更新到消费中心的消息中
                 *
                 * @param consumeMsgMap:反馈的消费信息(msgCenterId:消息中心id,businessTypeId:业务类型id,consumeMsg:消费方反馈的文本消息,handleStatus:消费方业务处理的状态)
                 */
                updateConsumeMsgInfo(consumeMsgMap:$.java.util.Map):void;
            }
            interface HRMsgCollaborationServiceHelper_C extends HRMsgCollaborationServiceHelper_S {
                new():HRMsgCollaborationServiceHelper;
            }
            interface HRMsgCollaborationServiceHelper$ {
            }
            type HRMsgCollaborationServiceHelper_T = HRMsgCollaborationServiceHelper_S & HRMsgCollaborationServiceHelper$;
            interface HRMsgCollaborationServiceHelper extends HRMsgCollaborationServiceHelper_T {
            }
        }
        namespace kd.hr.hbp.business.openservicehelper.multientityquery{
            interface HRQueryEntityModule_S {
            }
            type HRQueryEntityModule_ST = $.kd.sdk.module.Module & HRQueryEntityModule_S;
            interface HRQueryEntityModule_C extends HRQueryEntityModule_ST {
                new():HRQueryEntityModule;
            }
            interface HRQueryEntityModule$ {
            }
            type HRQueryEntityModule_T = $.kd.sdk.module.Module & HRQueryEntityModule_S & HRQueryEntityModule$;
            interface HRQueryEntityModule extends HRQueryEntityModule_T {
            }
        }
        namespace kd.hr.hbp.business.openservicehelper.odc{
            interface AdminOrgServiceHelper_S {
                /**
                 * 行政组织 - 新增
                 * @param adminOrgs
                 * @return resultMap
                 */
                addAdminOrg(adminOrgs:$.java.util.ArrayList):$.java.util.Map;
                /**
                 * 行政组织基本信息查询（按照BOID）
                 * @param orgIdList 业务组织 BOID
                 * @param date 查询日期
                 * @return
                 */
                adminOrgInfoQuery(orgIdList:$.java.util.List,date:Date):$.java.util.Map;
                /**
                 * 行政组织 - 信息变更
                 * @param adminOrgs
                 * @return
                 */
                change(adminOrgs:$.java.util.List):$.java.util.Map;
                /**
                 * 行政组织 - 上级调整
                 * @param adminOrgs
                 * @return
                 */
                changeParent(adminOrgs:$.java.util.List):$.java.util.Map;
                /**
                 * 行政组织 - 禁用
                 * @return
                 */
                disable(disableParams:$.java.util.Map):$.java.util.Map;
                /**
                 * 行政组织 - 禁用
                 * @param idList 行政组织BOID
                 * @param buId 业务组织
                 * @param effectDate 生效日期
                 * @return
                 */
                disable(idList:$.java.util.List,buId:long,effectDate:Date):$.java.util.Map;
                /**
                 * 行政组织 - 启用
                 * @param idList 行政组织BOID
                 * @param buId 业务组织
                 * @param effectDate 生效日期
                 * @return
                 */
                enable(idList:$.java.util.List,buId:long,effectDate:Date):$.java.util.Map;
                /**
                 * 行政组织基本信息查询（按照编码）
                 * @param orgNumberList 行政组织编码
                 * @param date 查询日期
                 * @return
                 */
                getAdminOrgInfoByNumber(orgNumberList:$.java.util.List,date:Date):$.java.util.Map;
                /**
                 * 根据boId或编码查询指定层级的组织信息
                 *
                 * @param orgIds 组织boId
                 * @param orgNumbers 组织编码
                 * @param level 指定层级
                 * @param date 查询日期
                 * @return 组织信息
                 */
                getAdminOrgInfoByNumber(orgIds:$.java.util.List,orgNumbers:$.java.util.List,level:number,date:Date):$.java.util.Map;
                /**
                 * 组织合并接口
                 *
                 * @param billDy   单据对象
                 * @param dyList   需要新增，信息变更，上级调整的动态对象
                 * @param mergeMap key为合并后组织编码，value为合并组织动态对象
                 */
                merge(billDy:$.kd.bos.dataentity.entity.DynamicObject,dyList:$.java.util.List,mergeMap:$.java.util.Map):$.java.util.Map;
            }
            interface AdminOrgServiceHelper_C extends AdminOrgServiceHelper_S {
                new():AdminOrgServiceHelper;
            }
            interface AdminOrgServiceHelper$ {
            }
            type AdminOrgServiceHelper_T = AdminOrgServiceHelper_S & AdminOrgServiceHelper$;
            interface AdminOrgServiceHelper extends AdminOrgServiceHelper_T {
            }
            interface HROdcModule_S {
            }
            type HROdcModule_ST = $.kd.sdk.module.Module & HROdcModule_S;
            interface HROdcModule_C extends HROdcModule_ST {
                new():HROdcModule;
            }
            interface HROdcModule$ {
            }
            type HROdcModule_T = $.kd.sdk.module.Module & HROdcModule_S & HROdcModule$;
            interface HROdcModule extends HROdcModule_T {
            }
            interface PositionServiceHelper_S {
                /**
                 *  新增岗位信息
                 * 入参为岗位基本信息动态对象集合
                 *
                 *  @param   positions      岗位基本信息动态对象集合
                 *  @return  Map<String, Object>
                 */
                addPosition(positions:$.java.util.List):$.java.util.Map;
                /**
                 * 变更岗位信息
                 * 入参为岗位基本信息动态对象集合，对象中只需要传入岗位Id和需要变更的属性
                 *
                 * @param           positions      岗位基本信息动态对象集合
                 * @return          Map<String, Object>
                 */
                changePosition(positions:$.java.util.List):$.java.util.Map;
                /**
                 * 禁用岗位
                 *
                 * @param   ids      岗位ID集合
                 * @return  Map<String, Object>
                 */
                disablePosition(ids:$.java.util.List):$.java.util.Map;
                /**
                 * 启用岗位
                 *
                 * @param   ids      岗位ID集合
                 * @return  Map<String, Object>
                 */
                enablePosition(ids:$.java.util.List):$.java.util.Map;
            }
            interface PositionServiceHelper_C extends PositionServiceHelper_S {
                new():PositionServiceHelper;
            }
            interface PositionServiceHelper$ {
            }
            type PositionServiceHelper_T = PositionServiceHelper_S & PositionServiceHelper$;
            interface PositionServiceHelper extends PositionServiceHelper_T {
            }
        }
        namespace kd.hr.hbp.business.openservicehelper.permission{
            interface HRPermissionModule_S {
            }
            type HRPermissionModule_ST = $.kd.sdk.module.Module & HRPermissionModule_S;
            interface HRPermissionModule_C extends HRPermissionModule_ST {
                new():HRPermissionModule;
            }
            interface HRPermissionModule$ {
            }
            type HRPermissionModule_T = $.kd.sdk.module.Module & HRPermissionModule_S & HRPermissionModule$;
            interface HRPermissionModule extends HRPermissionModule_T {
            }
            interface HRPermissionServiceHelper_S {
                /**
                 * 获取列表上有权限的行政组织范围，ID明细列表
                 * @param userId       :用户ID
                 * @param appId        :应用ID
                 * @param entityNumber :实体编码
                 * @param permItemId   :权限项，可参考PermissionStatus
                 * @param propKey      :属性key
                 * @return 有权限的组织结果集
                 */
                getAuthorizedAdminOrgSet(userId:long,appId:string,entityNumber:string,permItemId:string,propKey:string):kd.hr.hbp.common.model.AuthorizedOrgResult;
                /**
                 * 获取F7上有权限的行政组织范围，ID明细列表
                 *
                 * @param userId       用户ID
                 * @param appId        应用ID
                 * @param entityNumber 实体编码
                 * @param permItemId   权限项
                 * @param propKey      基础资料属性key
                 * @return 有权限的组织结果集
                 */
                getAuthorizedAdminOrgsF7(userId:long,appId:string,entityNumber:string,permItemId:string,propKey:string):kd.hr.hbp.common.model.AuthorizedOrgResult;
                /**
                 * 获取F7上有权限的行政组织范围，带包含下级信息
                 *
                 * @param userId       用户ID
                 * @param appId        应用ID
                 * @param entityNumber 实体编码
                 * @param permItemId   权限项
                 * @param propKey      基础资料属性key
                 * @return 有权限的组织结果集
                 */
                getAuthorizedAdminOrgsF7WithSubInfo(userId:long,appId:string,entityNumber:string,permItemId:string,propKey:string):kd.hr.hbp.common.model.AuthorizedOrgResultWithSub;
                /**
                 * 获取列表上有权限的行政组织范围，带包含下级信息
                 *
                 * @param userId       用户ID
                 * @param appId        应用ID
                 * @param entityNumber 实体编码
                 * @param permItemId   权限项
                 * @param propKey      基础资料属性key
                 * @return 有权限的组织结果集
                 */
                getAuthorizedAdminOrgsWithSub(userId:long,appId:string,entityNumber:string,permItemId:string,propKey:string):kd.hr.hbp.common.model.AuthorizedOrgResultWithSub;
            }
            interface HRPermissionServiceHelper_C extends HRPermissionServiceHelper_S {
                new():HRPermissionServiceHelper;
            }
            interface HRPermissionServiceHelper$ {
                /**
                 * 删除用户在当前角色上的所有权限+
                 *
                 * @param userId     用户id
                 * @param roleNumber 角色编码
                 * @return 操作返回结果
                 */
                deleteUserRole(userId:long,roleNumber:string):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 获取列表上有权限的组织团队，ID明细列表
                 * @param userId       :用户ID
                 * @param appId        :应用ID
                 * @param entityNumber :实体编码
                 * @param permItemId   :权限项
                 * @param propKey      :f7属性key
                 * @return 有权限的组织结果集
                 */
                getAuthorizedOrgTeams(userId:long,appId:string,entityNumber:string,permItemId:string,propKey:string):kd.hr.hbp.common.model.AuthorizedOrgTeamResult;
                /**
                 * 获取F7上有权限的组织团队, ID明细列表
                 *
                 * @param userId       :用户ID
                 * @param appId        :应用ID
                 * @param entityNumber :实体编码
                 * @param permItemId   :权限项
                 * @param propKey      :f7属性key
                 * @return 有权限的组织结果集
                 */
                getAuthorizedOrgTeamsF7(userId:long,appId:string,entityNumber:string,permItemId:string,propKey:string):kd.hr.hbp.common.model.AuthorizedOrgTeamResult;
                /**
                 * 用户分配角色（不包含高级配置及字段权限）
                 *
                 * @param userId       用户id
                 * @param roleNumber   角色编码
                 * @param validStart   有效期开始日期
                 * @param validEnd     有效期结束日期
                 * @param isCustomData 用户是否自定义范围
                 * @param bucaPermData 用户是否自定义范围
                 * @param creatorId    业务管理视图id：职能数据范围
                 * @return 操作返回结果
                 */
                userAssignRole(userId:long,roleNumber:string,validStart:Date,validEnd:Date,isCustomData:boolean,bucaPermData:$.java.util.Map,creatorId:long):kd.hr.hbp.common.api.HrApiResponse;
            }
            type HRPermissionServiceHelper_T = HRPermissionServiceHelper_S & HRPermissionServiceHelper$;
            interface HRPermissionServiceHelper extends HRPermissionServiceHelper_T {
            }
        }
        namespace kd.hr.hbp.business.openservicehelper.prompt{
            interface HRPromptModule_S {
            }
            type HRPromptModule_ST = $.kd.sdk.module.Module & HRPromptModule_S;
            interface HRPromptModule_C extends HRPromptModule_ST {
                new():HRPromptModule;
            }
            interface HRPromptModule$ {
            }
            type HRPromptModule_T = $.kd.sdk.module.Module & HRPromptModule_S & HRPromptModule$;
            interface HRPromptModule extends HRPromptModule_T {
            }
            interface PromptServiceHelper_S {
                /**
                 * 获取提示语纯文本和html
                 *
                 * @param id 提示语id
                 * @return 结果
                 */
                getContentAndHtml(id:long):$.java.util.Map;
                /**
                 * 获取提示语富文本
                 *
                 * @param promptId 提示语id
                 * @return 富文本
                 */
                getPromptContent(promptId:long):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * id列表获取提示语
                 *
                 * @param PromptPks 主键
                 * @return DynamicObject[]
                 */
                getPrompts(PromptPks:$.java.util.List):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 提示语是否存在
                 *
                 * @param promptId promptId
                 * @return 是否存在
                 */
                isExists(promptId:long):boolean;
                /**
                 * 获取提示语
                 *
                 * @param entityId  实体编码
                 * @param controlId 控件编码
                 * @return 提示语字段
                 */
                promptServiceHelper(entityId:string,controlId:string):$.java.util.List;
                /**
                 * 根据当前控件及数据模型获取对应规则下的提示语
                 *
                 * @param entityId   实体编码
                 * @param controlKey 控件编码
                 * @param dataModel  动态对象
                 * @return 符合条件的提示语内容
                 */
                queryPromptContent(entityId:string,controlKey:string,dataModel:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.List;
                /**
                 * 查询规则下提示语纯文本内容
                 *
                 * @param entityId   实体编码
                 * @param controlKey 控件标识
                 * @param dataModel  数据对象
                 * @return 提示语Map集合
                 */
                queryPromptForString(entityId:string,controlKey:string,dataModel:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.List;
                /**
                 * 查询规则下提示语id和内容
                 *
                 * @param entityId   实体编码
                 * @param controlKey 控件标识
                 * @param dataModel  数据对象
                 * @return 提示语Map集合
                 */
                queryPromptIdAndContent(entityId:string,controlKey:string,dataModel:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.Map;
            }
            interface PromptServiceHelper_C extends PromptServiceHelper_S {
                new():PromptServiceHelper;
            }
            interface PromptServiceHelper$ {
            }
            type PromptServiceHelper_T = PromptServiceHelper_S & PromptServiceHelper$;
            interface PromptServiceHelper extends PromptServiceHelper_T {
            }
        }
        namespace kd.hr.hbp.business.openservicehelper.ruleengine{
            interface RuleEngineServiceHelper_S {
                /**
                 * 新增一个策略
                 *
                 * @param policyMap 策略
                 * @return 结果
                 */
                addPolicyWithStatus(policyMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 批量新增策略
                 *
                 * @param policyMapList 策略列表
                 * @return 结果
                 */
                batchAddPolicyWithStatus(policyMapList:$.java.util.List):$.java.util.Map;
                /**
                 * 批量执行规则引擎
                 *
                 * @param requestMapList 请求参数列表
                 * @return 执行结果列表（如果出参中有配置动态对象会转换为动态对象，调用方可以直接用DynamicObject；如果没有配置动态对象，则不会有任何转换）
                 */
                batchCallRuleEngine(requestMapList:$.java.util.List):$.java.util.List;
                /**
                 * 批量修改策略
                 *
                 * @param policyMapList 策略列表
                 * @return 结果
                 */
                batchModifyPolicyWithStatus(policyMapList:$.java.util.List):$.java.util.Map;
                /**
                 * 根据输入参数，单次执行规则引擎
                 *
                 * @param requestMap 请求参数
                 * @return 执行结果（如果出参中有配置动态对象会转换为动态对象，调用方可以直接用DynamicObject；如果没有配置动态对象，则不会有任何转换）
                 */
                callRuleEngine(requestMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 根据输入参数，单次执行规则引擎
                 *
                 * @param requestMap 请求参数
                 * @return 执行原始结果（如果出参中有配置动态对象不会转换，需要调用方自己转换为DynamicObject）
                 */
                callRuleEngineForOriginal(requestMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 根据id删除策略
                 * @param policyIds 策略id集合
                 * @return 被删除的策略数量
                 */
                deletePolicy(policyIds:$.java.util.List):number;
                /**
                 * 修改一个策略
                 *
                 * @param policyMap 策略对象
                 * @return 结果
                 */
                modifyPolicyWithStatus(policyMap:$.java.util.Map):$.java.util.Map;
            }
            interface RuleEngineServiceHelper_C extends RuleEngineServiceHelper_S {
                new():RuleEngineServiceHelper;
            }
            interface RuleEngineServiceHelper$ {
            }
            type RuleEngineServiceHelper_T = RuleEngineServiceHelper_S & RuleEngineServiceHelper$;
            interface RuleEngineServiceHelper extends RuleEngineServiceHelper_T {
            }
            interface HRRuleEngineModule_S {
            }
            type HRRuleEngineModule_ST = $.kd.sdk.module.Module & HRRuleEngineModule_S;
            interface HRRuleEngineModule_C extends HRRuleEngineModule_ST {
                new():HRRuleEngineModule;
            }
            interface HRRuleEngineModule$ {
            }
            type HRRuleEngineModule_T = $.kd.sdk.module.Module & HRRuleEngineModule_S & HRRuleEngineModule$;
            interface HRRuleEngineModule extends HRRuleEngineModule_T {
            }
        }
        namespace kd.hr.hbp.business.service.formula{
            interface HRFormulaPlatformModule_S {
            }
            type HRFormulaPlatformModule_ST = $.kd.sdk.module.Module & HRFormulaPlatformModule_S;
            interface HRFormulaPlatformModule_C extends HRFormulaPlatformModule_ST {
                new():HRFormulaPlatformModule;
            }
            interface HRFormulaPlatformModule$ {
            }
            type HRFormulaPlatformModule_T = $.kd.sdk.module.Module & HRFormulaPlatformModule_S & HRFormulaPlatformModule$;
            interface HRFormulaPlatformModule extends HRFormulaPlatformModule_T {
            }
            interface FormulaParseService_S {
                /**
                 * 在数据库查询构建selectItem表达式
                 *
                 * @param node:    节点对象
                 * @param calItem: 计算项目对象
                 * @return kd.hr.hbp.business.service.formula.entity.expression.Expression
                 */
                getBaseDataOrStrExpression(node:kd.hr.hbp.business.service.formula.entity.node.OriginalNode,calItem:kd.hr.hbp.business.service.formula.entity.item.CalItem):kd.hr.hbp.business.service.formula.entity.expression.Expression;
                /**
                 * 去元数据缓存获取枚举类型的selectItem对象
                 *
                 * @param node:    节点对象
                 * @param calItem: 计算项目对象
                 * @return kd.hr.hbp.business.service.formula.entity.expression.Expression
                 */
                getEnumOrStrExpression(node:kd.hr.hbp.business.service.formula.entity.node.OriginalNode,calItem:kd.hr.hbp.business.service.formula.entity.item.CalItem):kd.hr.hbp.business.service.formula.entity.expression.Expression;
            }
            interface FormulaParseService_C extends FormulaParseService_S {
                new():FormulaParseService;
            }
            interface FormulaParseService$ {
                /**
                 * 获取表达式的具体类型
                 *
                 * @param conditionExpression: 当前条件表达式
                 * @param nodes: 节点集合
                 * @param formula: 公式解析上下文
                 * @return java.util.List<kd.hr.hbp.business.service.formula.entity.expression.Expression>解析式集合
                 */
                getExpression(conditionExpression:kd.hr.hbp.business.service.formula.entity.expression.ConditionExpression,nodes:$.java.util.List,formula:kd.hr.hbp.business.service.formula.entity.FormulaInfo):$.java.util.List;
                /**
                 * 解析公式方法入口
                 *
                 * @param formula:   公式页面动态对象
                 * @param formulaId: 公式对象主键
                 * @param view:      当前页面视图对象
                 * @return kd.hr.hbp.business.service.formula.entity.FormulaInfo
                 */
                parseFormula(formula:$.kd.bos.dataentity.entity.DynamicObject,formulaId:long,view:$.kd.bos.form.IFormView):kd.hr.hbp.business.service.formula.entity.FormulaInfo;
                /**
                 * 公式解析sdk
                 *
                 * @param formula:                公式页面动态对象
                 * @param formulaId:              公式id
                 * @param bizAppNumber:           公式所在应用编码
                 * @param treeNodeItems:          计算项目集合
                 * @param resultItems:            结果项目集合
                 * @param dataGradeItems:         分级数据集合
                 * @param isParseByUniqueCodeExp: 是否根据uniqueCodeeExp解析
                 * @return kd.bos.dataentity.entity.DynamicObject
                 */
                parseFormulaDy(formula:$.kd.bos.dataentity.entity.DynamicObject,formulaId:long,bizAppNumber:string,treeNodeItems:$.java.util.List,resultItems:$.java.util.List,dataGradeItems:$.java.util.List,isParseByUniqueCodeExp:boolean):$.kd.bos.dataentity.entity.DynamicObject;
            }
            type FormulaParseService_T = FormulaParseService_S & FormulaParseService$;
            interface FormulaParseService extends FormulaParseService_T {
            }
        }
        namespace kd.hr.hbp.business.service.formula.cal.service{
            interface AbsHRMPCalcService_S {
            }
            type AbsHRMPCalcService_ST = IHRMPCalcService_S & AbsHRMPCalcService_S;
            interface AbsHRMPCalcService_C extends AbsHRMPCalcService_ST {
                new():AbsHRMPCalcService;
            }
            interface AbsHRMPCalcService$ {
                calc(paramVO:kd.hr.hbp.business.service.formula.cal.vo.CalAllParamVO,paramIdList:$.java.util.List):$.java.util.Map;
            }
            type AbsHRMPCalcService_T = IHRMPCalcService & AbsHRMPCalcService_S & AbsHRMPCalcService$;
            interface AbsHRMPCalcService extends AbsHRMPCalcService_T {
            }
            interface IHRMPCalcService_S {
            }
            interface IHRMPCalcService$ {
                /**
                 * 计算入口
                 *
                 * @param formulaParse       公式计算实现类
                 * @param calProportionClass 占比公式计算实现类
                 * @param paramVO            输入参数
                 * @param paramIdList        参数Id集合
                 * @return java.util.Map<java.lang.String, CalResultDetailVO> <key:paramId,value:结果详情>
                 */
                calc(formulaParse:kd.hr.hbp.business.service.formula.cal.template.FormulaParse,calProportionClass:kd.hr.hbp.business.service.formula.cal.template.FormulaParse,paramVO:kd.hr.hbp.business.service.formula.cal.vo.CalAllParamVO,paramIdList:$.java.util.List):$.java.util.Map;
                /**
                 * 回收动态生成的计算类
                 *
                 * @param formulaCode 计算类代码
                 */
                clear(formulaCode:string):void;
                /**
                 * 创建计算类，业务实现实现可选。
                 *
                 * @param className: 公式类名称标识
                 * @param paramVO:  参数集合（包含公式详情和函数详情集合）
                 * @return FormulaParse
                 * @throw
                 */
                createBizClassImpl(className:string,paramVO:kd.hr.hbp.business.service.formula.cal.vo.CalAllParamVO):kd.hr.hbp.business.service.formula.cal.template.FormulaParse;
                /**
                 * 创建占比类，业务实现实现可选。
                 *
                 * @param className: 公式类名称标识
                 * @param paramVO:  参数集合（包含公式详情和函数详情集合）
                 * @return FormulaParse
                 * @throw
                 */
                createBizProportionClassImpl(className:string,paramVO:kd.hr.hbp.business.service.formula.cal.vo.CalAllParamVO):kd.hr.hbp.business.service.formula.cal.template.FormulaParse;
                /**
                 * 动态创建计算类
                 *
                 * @param className:       公式类名称标识
                 * @param formulaInfoList: 公式详情集合
                 * @param fcDetailList:    函数详情集合
                 * @return FormulaParse
                 * @throw
                 */
                createClassImpl(className:string,formulaInfoList:$.java.util.List,fcDetailList:$.java.util.List):kd.hr.hbp.business.service.formula.cal.template.FormulaParse;
                /**
                 * 3.计算取数
                 *
                 * @param paramVO 取数请求参数
                 */
                getCalItemData(paramVO:kd.hr.hbp.business.service.formula.cal.vo.CalAllParamVO):void;
                /**
                 * 4.执行计算
                 *
                 * @param formulaParse:       公式计算实现类对象
                 * @param calProportionClass: 占比公式计算实现类对象
                 * @param paramVO             取数请求参数
                 * @param paramIdList:        参数Id集合
                 * @return CalResultDetailVO <结果详情对象>
                 */
                handleCal(formulaParse:kd.hr.hbp.business.service.formula.cal.template.FormulaParse,calProportionClass:kd.hr.hbp.business.service.formula.cal.template.FormulaParse,paramVO:kd.hr.hbp.business.service.formula.cal.vo.CalAllParamVO,paramIdList:$.java.util.List):$.java.util.Map;
                /**
                 * 2.处理分段
                 *
                 * @param paramVO 分段参数
                 */
                handleCalProportion(paramVO:kd.hr.hbp.business.service.formula.cal.vo.CalAllParamVO):void;
            }
            type IHRMPCalcService_T = IHRMPCalcService_S & IHRMPCalcService$;
            interface IHRMPCalcService extends IHRMPCalcService_T {
            }
        }
        namespace kd.hr.hbp.business.service.formula.cal.template{
            interface FormulaParse_S {
            }
            type FormulaParse_ST = ParentFormulaParse_S & FormulaParse_S;
            interface FormulaParse_C extends FormulaParse_ST {
                new():FormulaParse;
            }
            interface FormulaParse$ {
                /**
                 * 添加全局类型项目的数据到Map中
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value      项目值
                 */
                addCustomCalItemValue(uniqueCode:string,value:any):void;
                /**
                 * 添加自定义项目的数据到最后输出的Map中
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value      项目值
                 */
                addOutputCustomCalItemValue(uniqueCode:string,value:any):void;
                /**
                 * 添加对象类型的计算项目值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value
                 */
                addResultValue(uniqueCode:string,value:any):void;
                /**
                 * 添加逻辑类型的计算项目值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value      项目值
                 */
                addResultValue(uniqueCode:string,value:boolean):void;
                /**
                 * 添加整数类型的计算项目值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value      项目值
                 */
                addResultValue(uniqueCode:string,value:number):void;
                /**
                 * 添加日期类型的计算项目值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value      项目值
                 */
                addResultValue(uniqueCode:string,value:Date):void;
                /**
                 * 添加动态类型的计算项目值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value
                 */
                addResultValue(uniqueCode:string,value:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 添加数值或金额类型的计算项目值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value      项目值
                 */
                addResultValue(uniqueCode:string,value:$.java.math.BigDecimal):void;
                /**
                 * 添加文本类型的计算项目值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value
                 */
                addResultValue(uniqueCode:string,value:string):void;
                /**
                 * 添加数值或金额类型的计算项目值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value      项目值
                 * @param sectionKey 项目分段期间key
                 */
                addResultValue(uniqueCode:string,value:any,sectionKey:string):void;
                /**
                 * 添加逻辑类型的计算项目值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value      项目值
                 * @param sectionKey 项目分段期间key
                 */
                addResultValue(uniqueCode:string,value:boolean,sectionKey:string):void;
                /**
                 * 添加整数类型的计算项目值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value      项目值
                 * @param sectionKey 项目分段期间key
                 */
                addResultValue(uniqueCode:string,value:number,sectionKey:string):void;
                /**
                 * 添加动态类型的计算项目值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value      项目值
                 * @param sectionKey 项目分段期间key
                 */
                addResultValue(uniqueCode:string,value:$.kd.bos.dataentity.entity.DynamicObject,sectionKey:string):void;
                /**
                 * 添加数值或金额类型的计算项目值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value      项目值
                 * @param sectionKey 项目分段期间key
                 */
                addResultValue(uniqueCode:string,value:$.java.math.BigDecimal,sectionKey:string):void;
                /**
                 * 添加日期类型的计算项目值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value      项目值
                 * @param sectionKey 项目分段期间key
                 */
                addResultValue(uniqueCode:string,value:Date,sectionKey:string):void;
                /**
                 * 添加文本类型的计算项目值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value      项目值
                 * @param sectionKey 项目分段期间key
                 */
                addResultValue(uniqueCode:string,value:string,sectionKey:string):void;
                /**
                 * 在计算结束后计算累加器的值
                 *
                 * @return void
                 * @throw
                 */
                calAddSumValueAfterAllCal():void;
                getAddSumMap():$.java.util.Map;
                getClassNameKey():string;
                getCustomCalItemMap():$.java.util.Map;
                /**
                 * 取支持项目中全局变量的支持项目的值
                 *
                 * @param uniqueCode
                 * @return
                 */
                getCustomCalItemValue(uniqueCode:string):string;
                /**
                 * 取支持项目中全局变量的支持项目的值并转成动态对象
                 *
                 * @param uniqueCode
                 * @return
                 */
                getCustomCalItemValueAsDynamicObj(uniqueCode:string):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 从数据分级对象中获取对应的分级结果并转换成BigDecimal
                 *
                 * @param dataGradeUniqueCode: 数据分级对象唯一编码
                 * @param resultKey:           数据分级获取的结果key
                 * @param params:              数据分级入参数组
                 * @return java.math.BigDecimal
                 */
                getDataGradeResultToBigDecimal(dataGradeUniqueCode:string,resultKey:string,...params:any[]):$.java.math.BigDecimal;
                /**
                 * 从数据分级对象中获取对应的分级结果并转换成日期
                 *
                 * @param dataGradeUniqueCode: 数据分级对象唯一编码
                 * @param resultKey:           数据分级获取的结果key
                 * @param params:              数据分级入参数组
                 * @return java.util.Date
                 */
                getDataGradeResultToDate(dataGradeUniqueCode:string,resultKey:string,...params:any[]):Date;
                /**
                 * 从数据分级对象中获取对应的分级结果并转换成动态对象
                 *
                 * @param dataGradeUniqueCode: 数据分级对象唯一编码
                 * @param resultKey:           数据分级获取的结果key
                 * @param params:              数据分级入参数组
                 * @return kd.bos.dataentity.entity.DynamicObject
                 */
                getDataGradeResultToDynamicObject(dataGradeUniqueCode:string,resultKey:string,...params:any[]):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 从数据分级对象中获取对应的分级结果并转换成整数
                 *
                 * @param dataGradeUniqueCode: 数据分级对象唯一编码
                 * @param resultKey:           数据分级获取的结果key
                 * @param params:              数据分级入参数组
                 * @return java.lang.Integer
                 */
                getDataGradeResultToInteger(dataGradeUniqueCode:string,resultKey:string,...params:any[]):number;
                /**
                 * 从数据分级对象中获取对应的分级结果并转换成字符串
                 *
                 * @param dataGradeUniqueCode: 数据分级对象唯一编码
                 * @param resultKey:           数据分级获取的结果key
                 * @param params:              数据分级入参数组
                 * @return java.lang.String
                 */
                getDataGradeResultToString(dataGradeUniqueCode:string,resultKey:string,...params:any[]):string;
                getDynamicObjectByEntityNumberAndId(entityNumber:string,id:any):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取数值类型公式引入项目字段值
                 *
                 * @param uniqueCode        公式依赖项目字段唯一编码
                 * @param sectionKey        日期区间key
                 * @param calItemUniqueCode 计算项目唯一编码
                 * @return
                 */
                getFieldValueAsBigDecimal(uniqueCode:string,sectionKey:string,calItemUniqueCode:string):$.java.math.BigDecimal;
                /**
                 * 获取数字数组类型公式依赖项目字段值
                 *
                 * @param uniqueCode:        公式依赖项目字段唯一编码
                 * @param sectionKey:        日期区间key
                 * @param calItemUniqueCode: 计算项目唯一编码
                 * @return java.math.BigDecimal[]
                 * @throw
                 */
                getFieldValueAsBigDecimalArray(uniqueCode:string,sectionKey:string,calItemUniqueCode:string):$.java.math.BigDecimal[];
                /**
                 * 获取逻辑类型公式引入项目字段值
                 *
                 * @param uniqueCode        公式依赖项目字段唯一编码
                 * @param sectionKey        日期区间key
                 * @param calItemUniqueCode 计算项目唯一编码
                 * @return
                 */
                getFieldValueAsBoolean(uniqueCode:string,sectionKey:string,calItemUniqueCode:string):boolean;
                /**
                 * 获取逻辑类型公式引入项目字段值
                 *
                 * @param uniqueCode:        公式依赖项目字段唯一编码
                 * @param sectionKey:        日期区间key
                 * @param calItemUniqueCode: 计算项目唯一编码
                 * @return java.lang.Boolean[]
                 * @throw
                 */
                getFieldValueAsBooleanArray(uniqueCode:string,sectionKey:string,calItemUniqueCode:string):boolean[];
                /**
                 * 获取日期类型公式引入项目字段值
                 *
                 * @param uniqueCode        公式依赖项目字段唯一编码
                 * @param sectionKey        日期区间key
                 * @param calItemUniqueCode 计算项目唯一编码
                 * @return
                 */
                getFieldValueAsDate(uniqueCode:string,sectionKey:string,calItemUniqueCode:string):Date;
                /**
                 * 获取日期数组类型公式引入项目字段值
                 *
                 * @param uniqueCode        公式依赖项目字段唯一编码
                 * @param sectionKey        日期区间key
                 * @param calItemUniqueCode 计算项目唯一编码
                 * @return
                 */
                getFieldValueAsDateArray(uniqueCode:string,sectionKey:string,calItemUniqueCode:string):Date[];
                /**
                 * 从参数中获取动态对象类型的参数并转换为动态对象返回
                 *
                 * @param uniqueCode:        计算项目唯一编码
                 * @param sectionKey:        分段Key
                 * @param calItemUniqueCode: 计算结果项目唯一编码
                 * @return kd.bos.dataentity.entity.DynamicObject
                 */
                getFieldValueAsDynamicObject(uniqueCode:string,sectionKey:string,calItemUniqueCode:string):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取整数类型公式引入项目字段值
                 *
                 * @param uniqueCode        公式依赖项目字段唯一编码
                 * @param sectionKey        日期区间key
                 * @param calItemUniqueCode 计算项目唯一编码
                 * @return
                 */
                getFieldValueAsInteger(uniqueCode:string,sectionKey:string,calItemUniqueCode:string):number;
                /**
                 * 获取整数类型公式引入项目字段值
                 *
                 * @param uniqueCode:        公式依赖项目字段唯一编码
                 * @param sectionKey:        日期区间key
                 * @param calItemUniqueCode: 计算项目唯一编码
                 * @return java.lang.Integer[]
                 * @throw
                 */
                getFieldValueAsIntegerArray(uniqueCode:string,sectionKey:string,calItemUniqueCode:string):number[];
                /**
                 * 获取Object类型公式依赖项目字段值
                 *
                 * @param uniqueCode:        公式依赖项目字段唯一编码
                 * @param sectionKey:        日期区间key
                 * @param calItemUniqueCode: 计算项目唯一编码
                 * @return java.lang.Object
                 */
                getFieldValueAsObject(uniqueCode:string,sectionKey:string,calItemUniqueCode:string):any;
                /**
                 * 获取字符数组类型公式依赖项目字段值
                 *
                 * @param uniqueCode:        公式依赖项目字段唯一编码
                 * @param sectionKey:        日期区间key
                 * @param calItemUniqueCode: 计算项目唯一编码
                 * @return java.lang.String[]
                 * @throw
                 */
                getFieldValueAsObjectArray(uniqueCode:string,sectionKey:string,calItemUniqueCode:string):any[];
                /**
                 * 获取字符类型公式依赖项目字段值
                 *
                 * @param uniqueCode        公式依赖项目字段唯一编码
                 * @param sectionKey        日期区间key
                 * @param calItemUniqueCode 计算项目唯一编码
                 * @return
                 */
                getFieldValueAsString(uniqueCode:string,sectionKey:string,calItemUniqueCode:string):string;
                /**
                 * 获取字符数组类型公式依赖项目字段值
                 *
                 * @param uniqueCode:        公式依赖项目字段唯一编码
                 * @param sectionKey:        日期区间key
                 * @param calItemUniqueCode: 计算项目唯一编码
                 * @return java.lang.String[]
                 * @throw
                 */
                getFieldValueAsStringArray(uniqueCode:string,sectionKey:string,calItemUniqueCode:string):string[];
                /**
                 * 获取当前项目分段段数
                 *
                 * @param uniqueCode 项目唯一编码
                 * @return
                 */
                getItemSectionList(uniqueCode:string):$.java.util.List;
                getItemSectionMap():$.java.util.Map;
                getItemSectionResultMap():$.java.util.Map;
                getOutputCustomCalItemValueMap():$.java.util.Map;
                getProportionMap():$.java.util.Map;
                getSectionParamMap():$.java.util.Map;
                getSectionPriorResultMap():$.java.util.Map;
                getUniqueCodeCalItemMap():$.java.util.Map;
                isCalProportion():boolean;
                isSection():boolean;
                setAddSumMap(addSumMap:$.java.util.Map):void;
                setCalProportion(isCalProration:boolean):void;
                setClassNameKey(classNameKey:string):void;
                setCustomCalItemMap(customCalItemMap:$.java.util.Map):void;
                setDataGradeMap(dataGradeMap:$.java.util.Map):void;
                setItemSectionMap(itemSectionMap:$.java.util.Map):void;
                setItemSectionResultMap(itemSectionResultMap:$.java.util.Map):void;
                setOutputCustomCalItemValueMap(outputCustomCalItemValueMap:$.java.util.Map):void;
                setProportionMap(proportionMap:$.java.util.Map):void;
                setSection(isSection:boolean):void;
                setSectionParamMap(sectionParamMap:$.java.util.Map):void;
                setSectionPriorResultMap(sectionPriorResultMap:$.java.util.Map):void;
                setUniqueCodeCalItemMap(uniqueCodeCalItemMap:$.java.util.Map):void;
                /**
                 * 汇总项目分段结果值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 */
                sumItemResultValue(uniqueCode:string):void;
                /**
                 * 更新计算项目的值
                 *
                 * @param uniqueCode 计算项目唯一编码
                 * @param value      项目值
                 */
                updateCalItemValue(uniqueCode:string,value:any):void;
                /**
                 * 更新计算项目的值
                 *
                 * @param uniqueCode        计算项目唯一编码
                 * @param value             项目值
                 * @param sectionKey        项目分段期间key
                 * @param calItemUniqueCode 结果项目唯一编码
                 */
                updateCalItemValue(uniqueCode:string,value:any,sectionKey:string,calItemUniqueCode:string):void;
            }
            type FormulaParse_T = ParentFormulaParse & FormulaParse_S & FormulaParse$;
            interface FormulaParse extends FormulaParse_T {
            }
            interface ParentFormulaParse_S {
            }
            type ParentFormulaParse_ST = kd.hr.hbp.business.function_.HRDefineFunction_S & ParentFormulaParse_S;
            interface ParentFormulaParse_C extends ParentFormulaParse_ST {
                new():ParentFormulaParse;
            }
            interface ParentFormulaParse$ {
                /**
                 * 计算入口，子类重写此方法
                 */
                calculate():void;
                /**
                 * 获取数值类型公式引入项目字段值
                 *
                 * @param uniqueCode 公式依赖项目字段唯一编码
                 * @return
                 */
                getFieldValueAsBigDecimal(uniqueCode:string):$.java.math.BigDecimal;
                /**
                 * 获取数值数组类型公式引入项目字段值
                 *
                 * @param uniqueCode: 公式依赖项目字段唯一编码
                 * @return java.math.BigDecimal[]
                 * @throw
                 */
                getFieldValueAsBigDecimalArray(uniqueCode:string):$.java.math.BigDecimal[];
                /**
                 * 获取逻辑类型公式引入项目字段值
                 *
                 * @param uniqueCode 公式依赖项目字段唯一编码
                 * @return
                 */
                getFieldValueAsBoolean(uniqueCode:string):boolean;
                /**
                 * 获取逻辑数组类型公式引入项目字段值
                 *
                 * @param uniqueCode: 公式依赖项目字段唯一编码
                 * @return java.lang.Boolean[]
                 * @throw
                 */
                getFieldValueAsBooleanArray(uniqueCode:string):boolean[];
                /**
                 * 获取日期类型公式引入项目字段值
                 *
                 * @param uniqueCode 公式依赖项目字段唯一编码
                 * @return
                 */
                getFieldValueAsDate(uniqueCode:string):Date;
                /**
                 * 获取日期数组类型公式引入项目字段值
                 *
                 * @param uniqueCode: 公式依赖项目字段唯一编码
                 * @return java.util.Date[]
                 * @throw
                 */
                getFieldValueAsDateArray(uniqueCode:string):Date[];
                /**
                 * 获取日期类型公式引入项目字段值
                 *
                 * @param uniqueCode 公式依赖项目字段唯一编码
                 * @return
                 */
                getFieldValueAsDynamicObject(uniqueCode:string):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取整数类型公式引入项目字段值
                 *
                 * @param uniqueCode 公式依赖项目字段唯一编码
                 * @return
                 */
                getFieldValueAsInteger(uniqueCode:string):number;
                /**
                 * 获取整数数组类型公式引入项目字段值
                 *
                 * @param uniqueCode: 公式依赖项目字段唯一编码
                 * @return java.lang.Integer[]
                 * @throw
                 */
                getFieldValueAsIntegerArray(uniqueCode:string):number[];
                /**
                 * 获取Object类型公式依赖项目字段值
                 *
                 * @param uniqueCode: 公式依赖项目字段唯一编码
                 * @return java.lang.Object
                 */
                getFieldValueAsObject(uniqueCode:string):any;
                /**
                 * 获取对象数组类型公式依赖项目字段值
                 *
                 * @param uniqueCode: 公式依赖项目字段唯一编码
                 * @return java.lang.String[]
                 * @throw
                 */
                getFieldValueAsObjectArray(uniqueCode:string):any[];
                /**
                 * 获取字符类型公式依赖项目字段值
                 *
                 * @param uniqueCode 公式依赖项目字段唯一编码
                 * @return
                 */
                getFieldValueAsString(uniqueCode:string):string;
                /**
                 * 获取字符数组类型公式依赖项目字段值
                 *
                 * @param uniqueCode: 公式依赖项目字段唯一编码
                 * @return java.lang.String[]
                 * @throw
                 */
                getFieldValueAsStringArray(uniqueCode:string):string[];
                getLoopLimit():number;
                getParams():$.java.util.Map;
                getResultLog():$.java.util.Map;
                getResultMap():$.java.util.Map;
                /**
                 * 获取数值或金额类型的项目值
                 *
                 * @param uniqueCode 项目唯一编码
                 * @return
                 */
                getResultValueAsBigDecimal(uniqueCode:string):$.java.math.BigDecimal;
                /**
                 * 获取逻辑类型的项目值
                 *
                 * @param uniqueCode 项目唯一编码
                 * @return
                 */
                getResultValueAsBoolean(uniqueCode:string):boolean;
                /**
                 * 获取日期类型的项目值
                 *
                 * @param uniqueCode 项目唯一编码
                 * @return
                 */
                getResultValueAsDate(uniqueCode:string):Date;
                /**
                 * 获取整数类型的项目值
                 *
                 * @param uniqueCode 项目唯一编码
                 * @return
                 */
                getResultValueAsInteger(uniqueCode:string):number;
                /**
                 * 获取文本类型的项目值
                 *
                 * @param uniqueCode 项目唯一编码
                 * @return
                 */
                getResultValueAsString(uniqueCode:string):string;
                isOpenLog():boolean;
                /**
                 * 记录计算日志
                 *
                 * formulaLog:公式计算日志对象
                 */
                logResult(formulaLog:FormulaLog):void;
                setLoopLimit(loopLimit:number):void;
                setOpenLog(openLog:boolean):void;
                setParams(params:$.java.util.Map):void;
                setResultLog(resultLog:$.java.util.Map):void;
                setResultMap(resultMap:$.java.util.Map):void;
                throwLoopException():void;
            }
            type ParentFormulaParse_T = kd.hr.hbp.business.function_.HRDefineFunction & ParentFormulaParse_S & ParentFormulaParse$;
            interface ParentFormulaParse extends ParentFormulaParse_T {
            }
            interface FormulaLog_S {
            }
            type FormulaLog_ST = $.java.io.Serializable & FormulaLog_S;
            interface FormulaLog_C extends FormulaLog_ST {
                new(id:string,name:string,param:string,result:string,msg:string):FormulaLog;
                new(id:string,name:string,param:string,result:string,msg:string,exception:$.java.lang.Exception):FormulaLog;
            }
            interface FormulaLog$ {
                getException():$.java.lang.Exception;
                getId():string;
                getMsg():string;
                getName():string;
                getParam():string;
                getResult():string;
                getTraceInfo():string;
                setException(exception:$.java.lang.Exception):void;
                setId(id:string):void;
                setMsg(msg:string):void;
                setName(name:string):void;
                setParam(param:string):void;
                setResult(result:string):void;
                setTraceInfo(traceInfo:string):void;
            }
            type FormulaLog_T = $.java.io.Serializable & FormulaLog_S & FormulaLog$;
            interface FormulaLog extends FormulaLog_T {
            }
        }
        namespace kd.hr.hbp.business.service.formula.cal.vo{
            interface CalAllParamVO_S {
            }
            type CalAllParamVO_ST = $.java.io.Serializable & CalAllParamVO_S;
            interface CalAllParamVO_C extends CalAllParamVO_ST {
                new():CalAllParamVO;
            }
            interface CalAllParamVO$ {
                getCalParamIdRelationMap():$.java.util.Map;
                getCalParamMap():$.java.util.Map;
                getCustomCalItemMap():$.java.util.Map;
                getDataGradeVOMap():$.java.util.Map;
                getFormulaVOList():$.java.util.List;
                getFunctionVOList():$.java.util.List;
                getItemSectionMap():$.java.util.Map;
                getItemSectionProportionRuleMap():$.java.util.Map;
                getLoopLimit():number;
                getParamIdAddSumMap():$.java.util.Map;
                getParamIdToConvertSectionMap():$.java.util.Map;
                getParamIdToParamMap():$.java.util.Map;
                getParamIdToSectionParamMap():$.java.util.Map;
                getProportionFormulaVOList():$.java.util.List;
                getSectionPriorResultMap():$.java.util.Map;
                getTraceId():string;
                getUniqueCodeCalItemMap():$.java.util.Map;
                isOpenLog():boolean;
                setCalParamIdRelationMap(calParamIdRelationMap:$.java.util.Map):void;
                setCalParamMap(calParamMap:$.java.util.Map):void;
                setCustomCalItemMap(customCalItemMap:$.java.util.Map):void;
                setDataGradeVOMap(dataGradeVOMap:$.java.util.Map):void;
                setFormulaVOList(formulaVOList:$.java.util.List):void;
                setFunctionVOList(functionVOList:$.java.util.List):void;
                setItemSectionMap(itemSectionMap:$.java.util.Map):void;
                setItemSectionProportionRuleMap(itemSectionProportionRuleMap:$.java.util.Map):void;
                setLoopLimit(loopLimit:number):void;
                setOpenLog(openLog:boolean):void;
                setParamIdAddSumMap(paramIdAddSumMap:$.java.util.Map):void;
                setParamIdToConvertSectionMap(paramIdToConvertSectionMap:$.java.util.Map):void;
                setParamIdToParamMap(paramIdToParamMap:$.java.util.Map):void;
                setParamIdToSectionParamMap(paramIdToSectionParamMap:$.java.util.Map):void;
                setProportionFormulaVOList(proportionFormulaVOList:$.java.util.List):void;
                setSectionPriorResultMap(sectionPriorResultMap:$.java.util.Map):void;
                setTraceId(traceId:string):void;
                setUniqueCodeCalItemMap(uniqueCodeCalItemMap:$.java.util.Map):void;
            }
            type CalAllParamVO_T = $.java.io.Serializable & CalAllParamVO_S & CalAllParamVO$;
            interface CalAllParamVO extends CalAllParamVO_T {
            }
        }
        namespace kd.hr.hbp.business.service.formula.entity{
            interface FormulaInfo_S {
            }
            type FormulaInfo_ST = $.java.io.Serializable & FormulaInfo_S;
            interface FormulaInfo_C extends FormulaInfo_ST {
                new():FormulaInfo;
            }
            interface FormulaInfo$ {
                /**
                 * 添加公式依赖的基础资料唯一编码
                 *
                 * @param uniqueCode: 唯一编码
                 * @return void
                 */
                addBaseDataUniqueCodeSet(uniqueCode:string):void;
                /**
                 * 添加当前node到自定义计算项目映射map中
                 *
                 * @param calItem: 自定义计算项目对象
                 * @return void
                 */
                addCalCustomItemInfoToMap(calItem:kd.hr.hbp.business.service.formula.entity.item.CalItem):void;
                /**
                 * 添加自定义计算项目唯一编码
                 *
                 * @param uniqueCode: 唯一编码
                 * @return void
                 */
                addCalCustomUniqueCode(uniqueCode:string):void;
                /**
                 * 添加数据分级依赖的计算项目
                 *
                 * @param calItem: 计算项目
                 * @return void
                 */
                addCalDependForDataGrade(calItem:kd.hr.hbp.business.service.formula.entity.item.CalItem):void;
                /**
                 * 添加函数依赖的计算项目
                 *
                 * @param calItem: 计算项目
                 * @return void
                 */
                addCalDependForFunc(calItem:kd.hr.hbp.business.service.formula.entity.item.CalItem):void;
                /**
                 * 添加被重新赋值的计算项目
                 *
                 * @param calItem: 计算项目
                 * @return void
                 */
                addCalItemValueChange(calItem:kd.hr.hbp.business.service.formula.entity.item.CalItem):void;
                /**
                 * 添加数据分级唯一编码
                 *
                 * @param uniqueCode: 唯一编码
                 * @return void
                 */
                addDataGradeUniqueCode(uniqueCode:string):void;
                /**
                 * 添加依赖的计算项目
                 *
                 * @param calItem: 计算项目
                 * @return void
                 */
                addDependCalItem(calItem:kd.hr.hbp.business.service.formula.entity.item.CalItem):void;
                /**
                 * 添加公式依赖的枚举唯一编码
                 *
                 * @param uniqueCode: 唯一编码
                 * @return void
                 */
                addEnumUniqueCodeSet(uniqueCode:string):void;
                /**
                 * 添加函数唯一编码
                 *
                 * @param uniqueCode: 唯一编码
                 * @return void
                 */
                addFcUniqueCode(uniqueCode:string):void;
                addKey(key:kd.hr.hbp.business.service.formula.entity.node.OriginalNode):void;
                addOriginalKey(originalKey:kd.hr.hbp.business.service.formula.entity.node.OriginalNode):void;
                /**
                 * 添加需要输出的计算项目
                 *
                 * @param calItem: 计算项目
                 * @return void
                 */
                addOutputCalItem(calItem:kd.hr.hbp.business.service.formula.entity.item.CalItem):void;
                /**
                 * 添加需要输出的自定义计算项目
                 *
                 * @param calItem: 计算项目
                 * @return void
                 */
                addOutputCustomCalItem(calItem:kd.hr.hbp.business.service.formula.entity.item.CalItem):void;
                addResultCount():void;
                /**
                 * 添加临时变量到map映射中
                 *
                 * @param tempVariable: 临时变量
                 * @param node:         节点
                 * @return void
                 */
                addTempVariable(tempVariable:string,node:kd.hr.hbp.business.service.formula.entity.node.OriginalNode):void;
                getBaseDataUniqueCodeSet():$.java.util.Set;
                getCalCustomItemMap():$.java.util.Map;
                getCalCustomUniqueCodeSet():$.java.util.Set;
                getCalForDataGradeUniqueCodeKeyMap():$.java.util.Map;
                getCalForFuncUniqueCodeKeyMap():$.java.util.Map;
                getCalItemMap():$.java.util.Map;
                getCalItemValueChangeMap():$.java.util.Map;
                getCalUniqueCodeKeyMap():$.java.util.Map;
                getDataGradeMap():$.java.util.Map;
                getDataGradeUniqueCodeSet():$.java.util.Set;
                getEntityNumberBaseDataCalItemMap():$.java.util.Map;
                getEnumUniqueCodeSet():$.java.util.Set;
                getEnumValueToCalItemMap():$.java.util.Map;
                getExecuteCode():string;
                getFcMap():$.java.util.Map;
                getFcUniqueCodeSet():$.java.util.Set;
                getId():string;
                getItemCategorySet():$.java.util.Set;
                getKeys():$.java.util.List;
                getLines():string[];
                getLocaleCodes():$.java.util.Map;
                getName():string;
                getOriginalCode():string;
                getOriginalKeys():$.java.util.List;
                getOriginalLines():string[];
                getOriginalNodes():$.java.util.List;
                getOutputCalItemMap():$.java.util.Map;
                getOutputCustomCalItemMap():$.java.util.Map;
                getResultCount():number;
                getResultItem():kd.hr.hbp.business.service.formula.entity.item.ResultItem;
                getResultItemMap():$.java.util.Map;
                getResultItemPropertyName():string;
                getTempVariableMap():$.java.util.Map;
                getUniqueKeyCode():string;
                isProrateItemFormula():boolean;
                setBaseDataUniqueCodeSet(baseDataUniqueCodeSet:$.java.util.Set):void;
                setCalCustomUniqueCodeSet(calCustomUniqueCodeSet:$.java.util.Set):void;
                setCalItemMap(calItemMap:$.java.util.Map):void;
                setDataGradeMap(dataGradeMap:$.java.util.Map):void;
                setEntityNumberBaseDataCalItemMap(entityNumberBaseDataCalItemMap:$.java.util.Map):void;
                setEnumUniqueCodeSet(enumUniqueCodeSet:$.java.util.Set):void;
                setEnumValueToCalItemMap(enumValueToCalItemMap:$.java.util.Map):void;
                setExecuteCode(executeCode:string):void;
                setFcMap(fcMap:$.java.util.Map):void;
                setId(id:string):void;
                setItemCategorySet(itemCategorySet:$.java.util.Set):void;
                setKeys(keys:$.java.util.List):void;
                setLines(lines:string[]):void;
                setLocaleCodes(localeCodes:$.java.util.Map):void;
                setName(name:string):void;
                setOriginalCode(originalCode:string):void;
                setOriginalKeys(originalKeys:$.java.util.List):void;
                setOriginalLines(originalLines:string[]):void;
                setOriginalNodes(originalNodes:$.java.util.List):void;
                setProrateItemFormula(isProrateItemFormula:boolean):void;
                setResultItem(resultItem:kd.hr.hbp.business.service.formula.entity.item.ResultItem):void;
                setResultItemMap(resultItemMap:$.java.util.Map):void;
                setResultItemPropertyName(resultItemPropertyName:string):void;
                setTempVariableMap(tempVariableMap:$.java.util.Map):void;
                setUniqueKeyCode(uniqueKeyCode:string):void;
            }
            type FormulaInfo_T = $.java.io.Serializable & FormulaInfo_S & FormulaInfo$;
            interface FormulaInfo extends FormulaInfo_T {
            }
        }
        namespace kd.hr.hbp.business.service.formula.entity.expression{
            interface Expression_S {
            }
            type Expression_ST = $.java.io.Serializable & Expression_S;
            interface Expression_C extends Expression_ST {
                new():Expression;
            }
            interface Expression$ {
                getNode():kd.hr.hbp.business.service.formula.entity.node.OriginalNode;
                getType():kd.hr.hbp.business.service.formula.enums.ExpressionNodeTypeEnum;
                setNode(node:kd.hr.hbp.business.service.formula.entity.node.OriginalNode):void;
                setType(type_arg:kd.hr.hbp.business.service.formula.enums.ExpressionNodeTypeEnum):void;
            }
            type Expression_T = $.java.io.Serializable & Expression_S & Expression$;
            interface Expression extends Expression_T {
            }
            interface ConditionExpression_S {
            }
            type ConditionExpression_ST = Expression_S & ConditionExpression_S;
            interface ConditionExpression_C extends ConditionExpression_ST {
                new(condition:kd.hr.hbp.business.service.formula.entity.node.OriginalNode):ConditionExpression;
            }
            interface ConditionExpression$ {
                addExpression(expression:kd.hr.hbp.business.service.formula.entity.node.OriginalNode):void;
                getChildConditionExpressions():$.java.util.List;
                getConditionEnum():kd.hr.hbp.business.service.formula.enums.ConditionEnum;
                getExpressions():$.java.util.List;
                getIsResult():boolean;
                setChildConditionExpressions(childConditionExpressions:$.java.util.List):void;
                setConditionEnum(conditionEnum:kd.hr.hbp.business.service.formula.enums.ConditionEnum):void;
                setExpressionNodes(expressions:$.java.util.List):void;
                setIsResult(isResult:boolean):void;
            }
            type ConditionExpression_T = Expression & ConditionExpression_S & ConditionExpression$;
            interface ConditionExpression extends ConditionExpression_T {
            }
        }
        namespace kd.hr.hbp.business.service.formula.entity.item{
            interface Item_S {
            }
            type Item_ST = $.java.io.Serializable & Item_S;
            interface Item_C extends Item_ST {
                new():Item;
                /**
                 * @param itemCategory: itemCategory
                 * @param id:           id
                 * @param name:         名称
                 * @param uniqueCode:   uniqueCode
                 */
                new(itemCategory:string,id:string,name:string,uniqueCode:string):Item;
            }
            interface Item$ {
                getId():string;
                getItemCategory():string;
                getName():string;
                getUniqueCode():string;
                isCheckUniqueCode():boolean;
                setCheckUniqueCode(checkUniqueCode:boolean):void;
                setId(id:string):void;
                setItemCategory(itemCategory:string):void;
                setName(name:string):void;
                setUniqueCode(uniqueCode:string):void;
            }
            type Item_T = $.java.io.Serializable & Item_S & Item$;
            interface Item extends Item_T {
            }
            interface TreeNodeItem_S {
            }
            type TreeNodeItem_ST = Item_S & TreeNodeItem_S;
            interface TreeNodeItem_C extends TreeNodeItem_ST {
                new():TreeNodeItem;
                /**
                 * @param itemCategory: itemCategory
                 * @param id:           id
                 * @param parentId:     父id
                 * @param name:         名称
                 */
                new(itemCategory:string,id:string,parentId:string,name:string):TreeNodeItem;
                /**
                 * @param itemCategory: itemCategory
                 * @param id:           id
                 * @param parentId:     父id
                 * @param name:         名称
                 * @param uniqueCode:   uniqueCode
                 */
                new(itemCategory:string,id:string,parentId:string,name:string,uniqueCode:string):TreeNodeItem;
                /**
                 * @param itemCategory: itemCategory
                 * @param id:           id
                 * @param parentId:     父id
                 * @param name:         名称
                 * @param hasChild:     是否有子节点
                 */
                new(itemCategory:string,id:string,parentId:string,name:string,hasChild:boolean):TreeNodeItem;
            }
            interface TreeNodeItem$ {
                getParentId():string;
                getParentName():string;
                isExpand():boolean;
                isHasChild():boolean;
                isShow():boolean;
                setExpand(expand:boolean):void;
                setHasChild(hasChild:boolean):void;
                setParentId(parentId:string):void;
                setParentName(parentName:string):void;
                setShow(show:boolean):void;
            }
            type TreeNodeItem_T = Item & TreeNodeItem_S & TreeNodeItem$;
            interface TreeNodeItem extends TreeNodeItem_T {
            }
            interface ResultItem_S {
                /**
                 * 判断结果item部分属性是否为空
                 *
                 * @param resultItem: 结果item
                 * @return void
                 */
                checkValueIsNull(resultItem:ResultItem,resultItemPropertyName:string):void;
                /**
                 * 将结果item转换为动态对象
                 *
                 * @param resultItem: 结果item
                 * @param type:       动态对象类型
                 * @return kd.bos.dataentity.entity.DynamicObject
                 */
                getDyByResultItem(resultItem:ResultItem,type_arg:$.kd.bos.dataentity.metadata.dynamicobject.DynamicObjectType):$.kd.bos.dataentity.entity.DynamicObject;
            }
            type ResultItem_ST = CalItem_S & ResultItem_S;
            interface ResultItem_C extends ResultItem_ST {
                new():ResultItem;
            }
            interface ResultItem$ {
                getDataLength():number;
                getScale():number;
                isCalProportionItem():boolean;
                setCalProportionItem(calProportionItem:boolean):void;
                setDataLength(dataLength:number):void;
                setScale(scale:number):void;
            }
            type ResultItem_T = CalItem & ResultItem_S & ResultItem$;
            interface ResultItem extends ResultItem_T {
            }
            interface CalItem_S {
            }
            type CalItem_ST = TreeNodeItem_S & CalItem_S;
            interface CalItem_C extends CalItem_ST {
                new():CalItem;
                /**
                 * @param itemCategory: itemCategory
                 * @param id:           id
                 * @param parentId:     父id
                 * @param name:         名称
                 * @param uniqueCode:   uniqueCode
                 * @param dataType:     数据类型枚举
                 */
                new(itemCategory:string,id:string,parentId:string,name:string,uniqueCode:string,dataType:kd.hr.hbp.business.service.formula.enums.DataTypeEnum):CalItem;
                /**
                 * @param itemCategory: itemCategory
                 * @param id:           id
                 * @param parentId:     父id
                 * @param name:         名称
                 * @param uniqueCode:   uniqueCode
                 * @param dataType:     数据类型枚举
                 * @param isCustomItem: 是否自定义计算项目
                 */
                new(itemCategory:string,id:string,parentId:string,name:string,uniqueCode:string,dataType:kd.hr.hbp.business.service.formula.enums.DataTypeEnum,isCustomItem:boolean):CalItem;
                /**
                 * @param itemCategory:   itemCategory
                 * @param id:             id
                 * @param parentId:       父id
                 * @param name:           名称
                 * @param uniqueCode:     uniqueCode
                 * @param isCustomItem:   是否自定义计算项目
                 * @param isGlobalEffect: 如果是自定义计算项目,该项目是否全局生效
                 * @param dataType:       数据类型枚举
                 */
                new(itemCategory:string,id:string,parentId:string,name:string,uniqueCode:string,isCustomItem:boolean,isGlobalEffect:boolean,dataType:kd.hr.hbp.business.service.formula.enums.DataTypeEnum):CalItem;
                /**
                 * @param itemCategory:   itemCategory
                 * @param id:             id
                 * @param parentId:       父id
                 * @param name:           名称
                 * @param uniqueCode:     uniqueCode
                 * @param dataType:       数据类型枚举
                 * @param isCustomItem:   是否自定义计算项目
                 * @param isGlobalEffect: 如果是自定义计算项目,该项目是否全局生效
                 */
                new(itemCategory:string,id:string,parentId:string,name:string,uniqueCode:string,dataType:kd.hr.hbp.business.service.formula.enums.DataTypeEnum,isCustomItem:boolean,isGlobalEffect:boolean):CalItem;
            }
            interface CalItem$ {
                getDataType():kd.hr.hbp.business.service.formula.enums.DataTypeEnum;
                getEntityNumber():string;
                getItemType():kd.hr.hbp.business.service.formula.enums.CalItemTypeEnum;
                getOrders():string;
                getPropertyField():string;
                getSerializeQFilters():$.java.util.List;
                getqFilters():$.kd.bos.orm.query.QFilter[];
                isCanAssignment():boolean;
                isCheckHourMinSec():boolean;
                isCustomItem():boolean;
                isGlobalEffect():boolean;
                setCanAssignment(canAssignment:boolean):void;
                setCheckHourMinSec(checkHourMinSec:boolean):void;
                setCustomItem(customItem:boolean):void;
                setDataType(dataType:kd.hr.hbp.business.service.formula.enums.DataTypeEnum):void;
                setEntityNumber(entityNumber:string):void;
                setGlobalEffect(globalEffect:boolean):void;
                setItemType(itemType:kd.hr.hbp.business.service.formula.enums.CalItemTypeEnum):void;
                setOrders(orders:string):void;
                setPropertyField(propertyField:string):void;
                setSerializeQFilters(serializeQFilters:$.java.util.List):void;
                setqFilters(qFilters:$.kd.bos.orm.query.QFilter[]):void;
            }
            type CalItem_T = TreeNodeItem & CalItem_S & CalItem$;
            interface CalItem extends CalItem_T {
            }
        }
        namespace kd.hr.hbp.business.service.formula.entity.node{
            interface OriginalNode_S {
            }
            type OriginalNode_ST = $.java.lang.Comparable & OriginalNode_S;
            interface OriginalNode_C extends OriginalNode_ST {
                new():OriginalNode;
            }
            interface OriginalNode$ {
                compareTo(o:OriginalNode):number;
                getDataType():kd.hr.hbp.business.service.formula.enums.DataTypeEnum;
                getEndColumnIndex():number;
                getKeyType():kd.hr.hbp.business.service.formula.enums.ExpressionNodeTypeEnum;
                getLineIndex():number;
                getNodeText():string;
                getStartColumnIndex():number;
                getUniqueKey():string;
                isAnnotation():boolean;
                setAnnotation(annotation:boolean):void;
                setDataType(dataType:kd.hr.hbp.business.service.formula.enums.DataTypeEnum):void;
                setEndColumnIndex(endColumnIndex:number):void;
                setKeyType(keyType:kd.hr.hbp.business.service.formula.enums.ExpressionNodeTypeEnum):void;
                setLineIndex(lineIndex:number):void;
                setNodeText(nodeText:string):void;
                setStartColumnIndex(startColumnIndex:number):void;
                setUniqueKey(uniqueKey:string):void;
            }
            type OriginalNode_T = $.java.lang.Comparable & OriginalNode_S & OriginalNode$;
            interface OriginalNode extends OriginalNode_T {
            }
        }
        namespace kd.hr.hbp.business.service.formula.enums{
            enum DataTypeEnum {
                OBJECT,
                NUM,
                TEXT,
                BOOLEAN,
                INT,
                DATE,
                MONEY,
                ARRAY_NUM,
                ARRAY_STRING,
                ARRAY_BOOLEAN,
                ARRAY_INT,
                ARRAY_DATE,
                ARRAY_OBJECT,
                BASE,
                NULL,
                DATETIME
            }
            enum ExpressionNodeTypeEnum {
                CONDITION,
                FUN,
                STR,
                NUM,
                INT,
                ITEM,
                OPERATOR,
                CAL,
                ANNO,
                RESULT,
                BOOLEAN,
                ASS,
                ARRAY_INDEX,
                INVOKE_METHOD,
                ARRAY_INT,
                ARRAY_NUM,
                DATE,
                DATETIME,
                ARRAY_DATE,
                DATA_GRADE,
                DATA_GRADE_RESULT,
                SELECT_ITEM,
                NULL,
                EXIT,
                EXPORT
            }
            enum CalItemTypeEnum {
                BASIC,
                BASE_DATA,
                ENUM
            }
            enum ConditionEnum {
                IF,
                WHILE,
                THEN,
                ELSEIF,
                ELSE,
                ENDIF,
                END_WHILE
            }
        }
        namespace kd.hr.hbp.business.service.message{
            interface IHRMsgTplService_S {
            }
            interface IHRMsgTplService$ {
                /**
                 * 消费者保存消费信息的api接口
                 *
                 * @param tplDy: 默认是hbp模板hbp_msgcenterinputtpl的动态对象
                 */
                consumerSaveMsg(tplDy:$.kd.bos.dataentity.entity.DynamicObject):kd.hr.hbp.common.mservice.HRMServiceResult;
            }
            type IHRMsgTplService_T = IHRMsgTplService_S & IHRMsgTplService$;
            interface IHRMsgTplService extends IHRMsgTplService_T {
            }
        }
        namespace kd.hr.hbp.business.service.perm.dyna.condhandler{
            interface IDynaCondParser_S {
            }
            interface IDynaCondParser$ {
                parseDynaCond(propType:string,userId:long,customParam:$.java.util.Map):$.java.util.List;
            }
            type IDynaCondParser_T = IDynaCondParser_S & IDynaCondParser$;
            interface IDynaCondParser extends IDynaCondParser_T {
            }
        }
        namespace kd.hr.hbp.business.service.smartsearch{
            interface HRSmartSearchService_S {
                /**
                 * 搜索数据（返回前10000条数据）
                 *
                 * @param searchParam 搜索请求参数
                 * @return 搜索结果
                 */
                search(searchParam:kd.hr.hbp.common.model.smartsearch.search.SearchParam):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 搜索数据（返回前10000条数据）
                 *
                 * @param searchParam 搜索请求参数
                 * @param searchField 搜索字段别名集合
                 * @param qFilters    精确过滤条件
                 * @return 搜索结果
                 */
                search(searchParam:kd.hr.hbp.common.model.smartsearch.search.SearchParam,searchField:$.java.util.List,qFilters:$.kd.bos.orm.query.QFilter[]):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 搜索数据（最多返回10000条数据）
                 *
                 * @param searchParam 搜索请求参数
                 * @param qFilters    精确过滤条件
                 * @param searchField 搜索字段别名集合
                 * @param start       开始查询下标
                 * @param limit       查询数据条数（最多返回10000条数据）
                 * @return 搜索结果
                 */
                search(searchParam:kd.hr.hbp.common.model.smartsearch.search.SearchParam,searchField:$.java.util.List,qFilters:$.kd.bos.orm.query.QFilter[],start:number,limit:number):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 搜索数据（最多返回10000条数据）
                 *
                 * @param searchParam      搜索请求参数
                 * @param qFilters         精确过滤条件
                 * @param searchField      搜索字段别名集合
                 * @param highLightPreTag  高亮开标签(示例："<p class='highLignt' style='color: var(--theme-color);display: inline'>")
                 * @param highLightPostTag 高亮闭标签（示例："</p>"）
                 * @param start            开始查询下标
                 * @param limit            查询数据条数（最多返回10000条数据）
                 * @return 搜索结果
                 */
                search(searchParam:kd.hr.hbp.common.model.smartsearch.search.SearchParam,searchField:$.java.util.List,qFilters:$.kd.bos.orm.query.QFilter[],highLightPreTag:string,highLightPostTag:string,start:number,limit:number):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 搜索数据（最多返回10000条数据）
                 *
                 * @param searchParam      搜索请求参数
                 * @param qFilters         精确过滤条件
                 * @param searchField      搜索字段别名集合
                 * @param highLightPreTag  高亮开标签(示例："<p class="highLignt" style="color: var(--theme-color);display: inline">)
                 * @param highLightPostTag 高亮闭标签（示例："</p>"）
                 * @param objSortValues    排序字段
                 * @param limit            查询数据条数（最多返回10000条数据）
                 * @return 搜索结果
                 */
                searchAfter(searchParam:kd.hr.hbp.common.model.smartsearch.search.SearchParam,searchField:$.java.util.List,qFilters:$.kd.bos.orm.query.QFilter[],highLightPreTag:string,highLightPostTag:string,objSortValues:any[],limit:number):kd.hr.hbp.common.api.HrApiResponse;
            }
            interface HRSmartSearchService_C extends HRSmartSearchService_S {
                new():HRSmartSearchService;
            }
            interface HRSmartSearchService$ {
            }
            type HRSmartSearchService_T = HRSmartSearchService_S & HRSmartSearchService$;
            interface HRSmartSearchService extends HRSmartSearchService_T {
            }
            interface SearchSceneService_S {
                /**
                 * 根据搜索场景ID和字段别名获取控权QFilter
                 *
                 * @param sceneId            场景ID
                 * @param fieldAlias         字段别名
                 * @param searchEntityNumber 搜索页面编码（HR中台注册的搜索动态页面）
                 * @return 控权QFilter
                 */
                getPermQFilters(sceneId:long,fieldAlias:string,searchEntityNumber:string):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 根据搜索场景ID和字段别名获取控权QFilter
                 *
                 * @param sceneId            场景ID
                 * @param fieldAlias         字段别名
                 * @param searchEntityNumber 搜索页面编码（HR中台注册的搜索动态页面）
                 * @param appNumber          权限控制应用编码（为null时按searchEntityNumber所在应用控权）
                 * @return 控权QFilter
                 */
                getPermQFilters(sceneId:long,fieldAlias:string,searchEntityNumber:string,appNumber:string):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 根据搜索对象获取搜索对象上所有模型标签字段信息
                 *
                 * @param searchObjId 搜索对象ID
                 * @return 所有模型标签字段信息
                 */
                queryAllLabelFields(searchObjId:long):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 根据搜索场景查询搜索场景信息
                 * (搜素场景配置，精准搜索项目，二次过滤条件，搜索字段等)
                 *
                 * @param sceneId 搜索场景ID
                 * @return 搜索场景
                 * @see kd.hr.hbp.common.model.smartsearch.scene.SearchSceneBo
                 */
                querySearchScene(sceneId:long):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 根据搜索页面编码查询搜索场景信息
                 * (搜素场景配置，精准搜索项目，二次过滤条件，搜索字段等)
                 *
                 * @param searchEntityNumber 搜索页面编码（HR中台注册的搜索动态页面）
                 * @return 搜索场景
                 * @see kd.hr.hbp.common.model.smartsearch.scene.SearchSceneBo
                 */
                querySearchScene(searchEntityNumber:string):kd.hr.hbp.common.api.HrApiResponse;
                /**
                 * 根据搜索页面编码查询搜索场景信息
                 * (搜素场景配置，精准搜索项目，二次过滤条件，搜索字段等)
                 *
                 * @param searchEntityNumber 搜索页面编码（HR中台注册的搜索动态页面）
                 * @param appNumber          权限控制应用编码（为null时按searchEntityNumber所在应用控权）
                 * @return 搜索场景
                 * @see kd.hr.hbp.common.model.smartsearch.scene.SearchSceneBo
                 */
                querySearchScene(searchEntityNumber:string,appNumber:string):kd.hr.hbp.common.api.HrApiResponse;
            }
            interface SearchSceneService_C extends SearchSceneService_S {
                new():SearchSceneService;
            }
            interface SearchSceneService$ {
            }
            type SearchSceneService_T = SearchSceneService_S & SearchSceneService$;
            interface SearchSceneService extends SearchSceneService_T {
            }
        }
        namespace kd.hr.hbp.business.servicehelper{
            interface HRQueryEntityHelper$QueryEntityParamInfo_S {
            }
            interface HRQueryEntityHelper$QueryEntityParamInfo_C extends HRQueryEntityHelper$QueryEntityParamInfo_S {
                new():HRQueryEntityHelper$QueryEntityParamInfo;
            }
            interface HRQueryEntityHelper$QueryEntityParamInfo$ {
                isMulBaseDataCollectionToString():boolean;
                setMulBaseDataCollectionToString(arg0:boolean):void;
            }
            type HRQueryEntityHelper$QueryEntityParamInfo_T = HRQueryEntityHelper$QueryEntityParamInfo_S & HRQueryEntityHelper$QueryEntityParamInfo$;
            interface HRQueryEntityHelper$QueryEntityParamInfo extends HRQueryEntityHelper$QueryEntityParamInfo_T {
            }
            interface HRQueryEntityHelper_S {
                getCurrentRequestParam():HRQueryEntityHelper$QueryEntityParamInfo;
                /**
                 * 获取查询实体数据查询工具类实例对象
                 *
                 * @return 当前类实体对象
                 */
                getInstance():HRQueryEntityHelper;
                setCurrentRequestParam(queryEntityParamInfo:HRQueryEntityHelper$QueryEntityParamInfo):void;
            }
            interface HRQueryEntityHelper_C extends HRQueryEntityHelper_S {
                new():HRQueryEntityHelper;
            }
            interface HRQueryEntityHelper$ {
                /**
                 * 查询数据，返回DataSet（默认不分页）
                 *
                 * @param queryEntityType 查询实体模型
                 * @param queryFileds     查询字段，多个字段通过“,”分割
                 * @param qFilters        查询过滤条件
                 * @param orderBys        排序字段，多个字段之间用英文","分开，排序方式和排序字段之间用空格分割，例如："name desc,number"
                 * @return DataSet
                 */
                getQueryDataSet(queryEntityType:$.kd.bos.entity.QueryEntityType,queryFileds:string,qFilters:$.kd.bos.orm.query.QFilter[],orderBys:string):$.kd.bos.algo.DataSet;
                /**
                 * 查询数据，返回DataSet（默认分页）
                 *
                 * @param queryEntityType 查询实体模型
                 * @param queryFileds     查询字段，多个字段通过“,”分割
                 * @param qFilters        查询过滤条件
                 * @param orderBys        排序字段，多个字段之间用英文","分开，排序方式和排序字段之间用空格分割，例如："name desc,number"
                 * @param start           分页开始下标
                 * @param limit           每页条数
                 * @return DataSet
                 */
                getQueryDataSet(queryEntityType:$.kd.bos.entity.QueryEntityType,queryFileds:string,qFilters:$.kd.bos.orm.query.QFilter[],orderBys:string,start:number,limit:number):$.kd.bos.algo.DataSet;
                /**
                 * 查询数据，返回DynamicObjectCollection（默认不分页）
                 *
                 * @param queryEntityType 查询实体模型
                 * @param queryFileds     查询字段，多个字段通过“,”分割
                 * @param qFilters        查询过滤条件
                 * @param orderBys        排序字段，多个字段之间用英文","分开，排序方式和排序字段之间用空格分割，例如："name desc,number"
                 * @return DynamicObjectCollection
                 */
                getQueryDyoColl(queryEntityType:$.kd.bos.entity.QueryEntityType,queryFileds:string,qFilters:$.kd.bos.orm.query.QFilter[],orderBys:string):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                /**
                 * 查询数据，返回DynamicObjectCollection（默认分页）
                 *
                 * @param queryEntityType 查询实体模型
                 * @param queryFileds     查询字段，多个字段通过“,”分割
                 * @param qFilters        查询过滤条件
                 * @param orderBys        排序字段，多个字段之间用英文","分开，排序方式和排序字段之间用空格分割，例如："name desc,number"
                 * @param start           分页开始下标
                 * @param limit           每页条数
                 * @return DynamicObjectCollection
                 */
                getQueryDyoColl(queryEntityType:$.kd.bos.entity.QueryEntityType,queryFileds:string,qFilters:$.kd.bos.orm.query.QFilter[],orderBys:string,start:number,limit:number):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                /**
                 * 查询所有主实体主键
                 *
                 * @param queryEntityType 查询实体模型
                 * @param qFilters        查询过滤条件
                 * @param orderBys        排序字段，多个字段之间用英文","分开，排序方式和排序字段之间用空格分割，例如："name desc,number"
                 * @return 所有主实体主键集合
                 */
                queryAllPkByKSql(queryEntityType:$.kd.bos.entity.QueryEntityType,qFilters:$.kd.bos.orm.query.QFilter[],orderBys:string):$.java.util.List;
                /**
                 * 分页查询主实体主键
                 *
                 * @param queryEntityType 查询实体模型
                 * @param qFilters        查询过滤条件
                 * @param orderBys        排序字段，多个字段之间用英文","分开，排序方式和排序字段之间用空格分割，例如："name desc,number"
                 * @param start           分页开始下标
                 * @param limit           每页条数
                 * @return 主实体主键集合
                 */
                queryAllPkByKSql(queryEntityType:$.kd.bos.entity.QueryEntityType,qFilters:$.kd.bos.orm.query.QFilter[],orderBys:string,start:number,limit:number):$.java.util.List;
            }
            type HRQueryEntityHelper_T = HRQueryEntityHelper_S & HRQueryEntityHelper$;
            interface HRQueryEntityHelper extends HRQueryEntityHelper_T {
            }
        }
        namespace kd.hr.hbp.common.api{
            interface HrApiResponse_S {
                fail(arg0:any):HrApiResponse;
                fail(arg0:string):HrApiResponse;
                fail(arg0:string,arg1:string):HrApiResponse;
                success():HrApiResponse;
                success(arg0:any):HrApiResponse;
            }
            type HrApiResponse_ST = $.java.io.Serializable & HrApiResponse_S;
            interface HrApiResponse_C extends HrApiResponse_ST {
                new():HrApiResponse;
                new(arg0:boolean,arg1:string,arg2:string,arg3:any):HrApiResponse;
            }
            interface HrApiResponse$ {
                getCode():string;
                getData():any;
                getErrorMessage():string;
                isSuccess():boolean;
                setCode(arg0:string):void;
                setData(arg0:any):void;
                setErrorMessage(arg0:string):void;
                setSuccess(arg0:boolean):void;
            }
            type HrApiResponse_T = $.java.io.Serializable & HrApiResponse_S & HrApiResponse$;
            interface HrApiResponse extends HrApiResponse_T {
            }
        }
        namespace kd.hr.hbp.common.enums.smartsearch{
            enum SearchCategoryEnum {
                WORD_SEG_SEARCH,
                PHRASE_SEARCH
            }
            enum SearchKeyLogicEnum {
                AND,
                OR
            }
            enum SearchTargetTypeEnum {
                FIELDS,
                ENTITY
            }
        }
        namespace kd.hr.hbp.common.model{
            interface AuthorizedOrgTeamResult_S {
                allOrg():AuthorizedOrgTeamResult;
            }
            type AuthorizedOrgTeamResult_ST = $.java.io.Serializable & AuthorizedOrgTeamResult_S;
            interface AuthorizedOrgTeamResult_C extends AuthorizedOrgTeamResult_ST {
                new():AuthorizedOrgTeamResult;
                new(arg0:boolean):AuthorizedOrgTeamResult;
                new(arg0:boolean,arg1:$.java.util.Map):AuthorizedOrgTeamResult;
            }
            interface AuthorizedOrgTeamResult$ {
                getHasPermOrgTeamMap():$.java.util.Map;
                isHasAllOrgPerm():boolean;
                setHasAllOrgPerm(arg0:boolean):void;
                setHasPermOrgTeamMap(arg0:$.java.util.Map):void;
            }
            type AuthorizedOrgTeamResult_T = $.java.io.Serializable & AuthorizedOrgTeamResult_S & AuthorizedOrgTeamResult$;
            interface AuthorizedOrgTeamResult extends AuthorizedOrgTeamResult_T {
            }
            interface AuthorizedOrgResultWithSub_S {
                allOrg():AuthorizedOrgResultWithSub;
            }
            type AuthorizedOrgResultWithSub_ST = $.java.io.Serializable & AuthorizedOrgResultWithSub_S;
            interface AuthorizedOrgResultWithSub_C extends AuthorizedOrgResultWithSub_ST {
                new():AuthorizedOrgResultWithSub;
                new(arg0:boolean):AuthorizedOrgResultWithSub;
                new(arg0:boolean,arg1:$.java.util.List):AuthorizedOrgResultWithSub;
            }
            interface AuthorizedOrgResultWithSub$ {
                getHasPermOrgsWithSub():$.java.util.List;
                isHasAllOrgPerm():boolean;
                setHasAllOrgPerm(arg0:boolean):void;
                setHasPermOrgsWithSub(arg0:$.java.util.List):void;
            }
            type AuthorizedOrgResultWithSub_T = $.java.io.Serializable & AuthorizedOrgResultWithSub_S & AuthorizedOrgResultWithSub$;
            interface AuthorizedOrgResultWithSub extends AuthorizedOrgResultWithSub_T {
            }
            interface AuthorizedOrgResult_S {
                allOrg():AuthorizedOrgResult;
            }
            type AuthorizedOrgResult_ST = $.java.io.Serializable & AuthorizedOrgResult_S;
            interface AuthorizedOrgResult_C extends AuthorizedOrgResult_ST {
                new():AuthorizedOrgResult;
                new(arg0:boolean):AuthorizedOrgResult;
                new(arg0:boolean,arg1:$.java.util.List):AuthorizedOrgResult;
            }
            interface AuthorizedOrgResult$ {
                getHasPermOrgs():$.java.util.List;
                isHasAllOrgPerm():boolean;
                setHasAllOrgPerm(arg0:boolean):void;
                setHasPermOrgs(arg0:$.java.util.List):void;
            }
            type AuthorizedOrgResult_T = $.java.io.Serializable & AuthorizedOrgResult_S & AuthorizedOrgResult$;
            interface AuthorizedOrgResult extends AuthorizedOrgResult_T {
            }
        }
        namespace kd.hr.hbp.common.model.smartsearch.search{
            interface SearchParam_S {
            }
            type SearchParam_ST = $.java.io.Serializable & SearchParam_S;
            interface SearchParam_C extends SearchParam_ST {
                new():SearchParam;
                new(arg0:long,arg1:long,arg2:kd.hr.hbp.common.enums.smartsearch.SearchCategoryEnum,arg3:kd.hr.hbp.common.enums.smartsearch.SearchKeyLogicEnum):SearchParam;
                new(arg0:long,arg1:long,arg2:kd.hr.hbp.common.enums.smartsearch.SearchCategoryEnum,arg3:kd.hr.hbp.common.enums.smartsearch.SearchKeyLogicEnum,arg4:string):SearchParam;
            }
            interface SearchParam$ {
                getCategory():kd.hr.hbp.common.enums.smartsearch.SearchCategoryEnum;
                getLabelValCompSelList():$.java.util.List;
                getPageId():string;
                getPermCtlAppNum():string;
                getPermCtlDymNum():string;
                getSceneId():long;
                getSceneVersion():long;
                getSearchContent():string;
                getSearchKeyLogic():kd.hr.hbp.common.enums.smartsearch.SearchKeyLogicEnum;
                getSearchObjId():long;
                getSearchRangFieldList():$.java.util.List;
                getSearchTargetType():kd.hr.hbp.common.enums.smartsearch.SearchTargetTypeEnum;
                isRecordSearchLog():boolean;
                setCategory(arg0:kd.hr.hbp.common.enums.smartsearch.SearchCategoryEnum):void;
                setLabelValCompSelList(arg0:$.java.util.List):void;
                setPageId(arg0:string):void;
                setPermCtlAppNum(arg0:string):void;
                setPermCtlDymNum(arg0:string):void;
                setRecordSearchLog(arg0:boolean):void;
                setSceneId(arg0:long):void;
                setSceneVersion(arg0:long):void;
                setSearchContent(arg0:string):void;
                setSearchKeyLogic(arg0:kd.hr.hbp.common.enums.smartsearch.SearchKeyLogicEnum):void;
                setSearchObjId(arg0:long):void;
                setSearchRangFieldList(arg0:$.java.util.List):void;
                setSearchTargetType(arg0:kd.hr.hbp.common.enums.smartsearch.SearchTargetTypeEnum):void;
            }
            type SearchParam_T = $.java.io.Serializable & SearchParam_S & SearchParam$;
            interface SearchParam extends SearchParam_T {
            }
        }
        namespace kd.hr.hbp.common.mservice{
            interface HRMSendMsgResult_S {
                readonly CODE_ALL_FAILED:string;
                readonly CODE_ALL_SUCCESSED:string;
                readonly CODE_SOME_SUCCESSED:string;
                readonly IS_SUCCESS_FALSE:number;
                readonly IS_SUCCESS_TRUE:number;
            }
            type HRMSendMsgResult_ST = HRMServiceResult_S & HRMSendMsgResult_S;
            interface HRMSendMsgResult_C extends HRMSendMsgResult_ST {
                new():HRMSendMsgResult;
            }
            interface HRMSendMsgResult$ {
                getFailedCnt():number;
                getSuccessedCnt():number;
                getTotalCnt():number;
                setErrorResult(arg0:boolean,arg1:string,arg2:string):void;
                setFailedCnt(arg0:number):void;
                setResult(arg0:boolean,arg1:string,arg2:number,arg3:number,arg4:string):void;
                setSuccessedCnt(arg0:number):void;
                setTotalCnt(arg0:number):void;
            }
            type HRMSendMsgResult_T = HRMServiceResult & HRMSendMsgResult_S & HRMSendMsgResult$;
            interface HRMSendMsgResult extends HRMSendMsgResult_T {
            }
            interface HRMServiceResult_S {
                readonly DEFAULT_ERROR_CODE:string;
                readonly DEFAULT_SUCCESS_CODE:string;
                fail(arg0:string):HRMServiceResult;
                fail(arg0:string,arg1:string):HRMServiceResult;
                success():HRMServiceResult;
                success(arg0:any):HRMServiceResult;
                success(arg0:any,arg1:string):HRMServiceResult;
            }
            type HRMServiceResult_ST = $.java.io.Serializable & HRMServiceResult_S;
            interface HRMServiceResult_C extends HRMServiceResult_ST {
                new():HRMServiceResult;
            }
            interface HRMServiceResult$ {
                getMessage():string;
                getReturnCode():string;
                getReturnData():any;
                isSuccess():boolean;
                setMessage(arg0:string):void;
                setReturnCode(arg0:string):void;
                setReturnData(arg0:any):void;
                setSuccess(arg0:boolean):void;
            }
            type HRMServiceResult_T = $.java.io.Serializable & HRMServiceResult_S & HRMServiceResult$;
            interface HRMServiceResult extends HRMServiceResult_T {
            }
        }
        namespace kd.sdk.hr.hrmp.haos.extpoint{
            interface IStaffExtDimFilterExtend_S {
            }
            interface IStaffExtDimFilterExtend$ {
                /**
                 * 获取扩展维度的自定义的过滤条件，用于打开F7以及导入数据时
                 * 接口入参为 扩展维度的基础资料编码
                 * @return 自定义过滤条件
                 */
                getCustomExtDimQfilter(extDimBaseDataNumber:string,dataModel:$.kd.bos.entity.datamodel.IDataModel):$.kd.bos.orm.query.QFilter;
            }
            type IStaffExtDimFilterExtend_T = IStaffExtDimFilterExtend_S & IStaffExtDimFilterExtend$;
            interface IStaffExtDimFilterExtend extends IStaffExtDimFilterExtend_T {
            }
            interface HROdcModule_S {
            }
            type HROdcModule_ST = $.kd.sdk.module.Module & HROdcModule_S;
            interface HROdcModule_C extends HROdcModule_ST {
                new():HROdcModule;
            }
            interface HROdcModule$ {
            }
            type HROdcModule_T = $.kd.sdk.module.Module & HROdcModule_S & HROdcModule$;
            interface HROdcModule extends HROdcModule_T {
            }
            interface IStaffRuleConfigExtend_S {
            }
            interface IStaffRuleConfigExtend$ {
                /**
                 * 是否可以跳过编制计划设置BU重复的校验
                 * @return
                 */
                skipBURepeatConfigValidator():boolean;
            }
            type IStaffRuleConfigExtend_T = IStaffRuleConfigExtend_S & IStaffRuleConfigExtend$;
            interface IStaffRuleConfigExtend extends IStaffRuleConfigExtend_T {
            }
        }
        namespace kd.sdk.hr.hrmp.hbjm.extpoint{
            interface HROdcModule_S {
            }
            type HROdcModule_ST = $.kd.sdk.module.Module & HROdcModule_S;
            interface HROdcModule_C extends HROdcModule_ST {
                new():HROdcModule;
            }
            interface HROdcModule$ {
            }
            type HROdcModule_T = $.kd.sdk.module.Module & HROdcModule_S & HROdcModule$;
            interface HROdcModule extends HROdcModule_T {
            }
            interface IJobTreeSortConditionExtend_S {
            }
            interface IJobTreeSortConditionExtend$ {
                /**
                 * 获取左树排序的规则
                 * @return 排序规则
                 */
                getJobTreeAndJobClassTreeSortCondition():string;
            }
            type IJobTreeSortConditionExtend_T = IJobTreeSortConditionExtend_S & IJobTreeSortConditionExtend$;
            interface IJobTreeSortConditionExtend extends IJobTreeSortConditionExtend_T {
            }
        }
        namespace kd.sdk.hr.hrmp.hbpm.extpoint{
            interface IPositionCompareEntryServiceExtend_S {
            }
            interface IPositionCompareEntryServiceExtend$ {
                /**
                 * 岗位分录对比
                 * @param before 变动前的版本
                 * @param after  变动后的版本
                 * @param entryKey 分录标识
                 * @return 对比结果
                 */
                getEntryComparentResult(before:$.kd.bos.dataentity.entity.DynamicObject,after:$.kd.bos.dataentity.entity.DynamicObject,entryKey:string):PositionCompareEntryResult;
            }
            type IPositionCompareEntryServiceExtend_T = IPositionCompareEntryServiceExtend_S & IPositionCompareEntryServiceExtend$;
            interface IPositionCompareEntryServiceExtend extends IPositionCompareEntryServiceExtend_T {
            }
            interface IPositionF7OrgTreeOrgIdsServiceExtend_S {
            }
            interface IPositionF7OrgTreeOrgIdsServiceExtend$ {
                /**
                 * F7左树的需要展示的组织数据的boid
                 * @return
                 */
                getPositionF7TreeOrgIds():$.java.util.List;
            }
            type IPositionF7OrgTreeOrgIdsServiceExtend_T = IPositionF7OrgTreeOrgIdsServiceExtend_S & IPositionF7OrgTreeOrgIdsServiceExtend$;
            interface IPositionF7OrgTreeOrgIdsServiceExtend extends IPositionF7OrgTreeOrgIdsServiceExtend_T {
            }
            interface IBosPositionValidateServiceExt_S {
            }
            interface IBosPositionValidateServiceExt$ {
                /**
                 * 平台岗位校验
                 *
                 * @param reqs HR岗位相关字段入参
                 * @return 校验结果集合（与入参顺序保持一致）
                 */
                bosPositionValidate(reqs:$.java.util.List):$.java.util.List;
            }
            type IBosPositionValidateServiceExt_T = IBosPositionValidateServiceExt_S & IBosPositionValidateServiceExt$;
            interface IBosPositionValidateServiceExt extends IBosPositionValidateServiceExt_T {
            }
            interface HROdcModule_S {
            }
            type HROdcModule_ST = $.kd.sdk.module.Module & HROdcModule_S;
            interface HROdcModule_C extends HROdcModule_ST {
                new():HROdcModule;
            }
            interface HROdcModule$ {
            }
            type HROdcModule_T = $.kd.sdk.module.Module & HROdcModule_S & HROdcModule$;
            interface HROdcModule extends HROdcModule_T {
            }
            interface PositionCompareEntryResult_S {
            }
            interface PositionCompareEntryResult_C extends PositionCompareEntryResult_S {
                new():PositionCompareEntryResult;
            }
            interface PositionCompareEntryResult$ {
                getAfterValue():string;
                getBeforeValue():string;
                isSame():boolean;
                setAfterValue(afterValue:string):void;
                setBeforeValue(beforeValue:string):void;
                setSame(same:boolean):void;
            }
            type PositionCompareEntryResult_T = PositionCompareEntryResult_S & PositionCompareEntryResult$;
            interface PositionCompareEntryResult extends PositionCompareEntryResult_T {
            }
            interface IPositionSkipValidateServiceExtend_S {
            }
            interface IPositionSkipValidateServiceExtend$ {
                /**
                 * 获取需要跳过的校验的方法名称
                 * @return 需要跳过的校验的方法名称
                 */
                getSkipValidateMethods():$.java.util.List;
            }
            type IPositionSkipValidateServiceExtend_T = IPositionSkipValidateServiceExtend_S & IPositionSkipValidateServiceExtend$;
            interface IPositionSkipValidateServiceExtend extends IPositionSkipValidateServiceExtend_T {
            }
            interface IValidatorExtend_S {
            }
            interface IValidatorExtend$ {
                getExtendValidator():$.java.util.List;
            }
            type IValidatorExtend_T = IValidatorExtend_S & IValidatorExtend$;
            interface IValidatorExtend extends IValidatorExtend_T {
            }
        }
        namespace kd.sdk.hr.hrmp.hrdi{
            interface HRHdtcModule_S {
            }
            type HRHdtcModule_ST = $.kd.sdk.module.Module & HRHdtcModule_S;
            interface HRHdtcModule_C extends HRHdtcModule_ST {
                new():HRHdtcModule;
            }
            interface HRHdtcModule$ {
            }
            type HRHdtcModule_T = $.kd.sdk.module.Module & HRHdtcModule_S & HRHdtcModule$;
            interface HRHdtcModule extends HRHdtcModule_T {
            }
            interface IHRCommonIntegrationService_S {
            }
            interface IHRCommonIntegrationService$ {
                /**
                 * 业务数据集成方法
                 *
                 * @param dataList 业务动态对象数据
                 * @param bizScene 业务场景：新增 1，启用 2， 禁用 3， 变更 4， 删除 5
                 * @param extParamMap 预留扩展入参
                 * @return 数据同步结果
                 * 返回结果说明：
                 * HRMServiceResult.success : 是否成功标识
                 * HRMServiceResult.message : 异常场景，则为异常信息，非异常场景，则为空
                 * HRMServiceResult.returnCode : 同步数据全部成功，则为success，如果有同步失败数据，则为fail
                 * HRMServiceResult.returnData : 如果returnCode为success，则为空，如果returnCode为fail，
                 *                             则为失败数据ID和失败信息的Map<Long,String>，格式为<ID,失败信息>
                 */
                sync(dataList:$.java.util.List,bizScene:string,extParamMap:$.java.util.Map):kd.hr.hbp.common.mservice.HRMServiceResult;
            }
            type IHRCommonIntegrationService_T = IHRCommonIntegrationService_S & IHRCommonIntegrationService$;
            interface IHRCommonIntegrationService extends IHRCommonIntegrationService_T {
            }
        }
    }
}
export {};