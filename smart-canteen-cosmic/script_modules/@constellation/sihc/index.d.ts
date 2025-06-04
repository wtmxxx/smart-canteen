/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.sdk.sihc.soebs.business.service.cadrefile{
            interface CadreSnapReportExtHisQueryDateDTO_S {
            }
            interface CadreSnapReportExtHisQueryDateDTO_C extends CadreSnapReportExtHisQueryDateDTO_S {
                new():CadreSnapReportExtHisQueryDateDTO;
                new(filterInfo:$.kd.bos.entity.report.FilterInfo):CadreSnapReportExtHisQueryDateDTO;
            }
            interface CadreSnapReportExtHisQueryDateDTO$ {
                /**
                 * 获取查询过滤详细信息
                 *
                 * @return filterInfo
                 */
                getFilterInfo():$.kd.bos.entity.report.FilterInfo;
            }
            type CadreSnapReportExtHisQueryDateDTO_T = CadreSnapReportExtHisQueryDateDTO_S & CadreSnapReportExtHisQueryDateDTO$;
            interface CadreSnapReportExtHisQueryDateDTO extends CadreSnapReportExtHisQueryDateDTO_T {
            }
            interface CadreFileReportExtRelationFilterDTO_S {
            }
            interface CadreFileReportExtRelationFilterDTO_C extends CadreFileReportExtRelationFilterDTO_S {
                new():CadreFileReportExtRelationFilterDTO;
                new(filterInfo:$.kd.bos.entity.report.FilterInfo,reletionMap:$.java.util.Map):CadreFileReportExtRelationFilterDTO;
            }
            interface CadreFileReportExtRelationFilterDTO$ {
                /**
                 * 获取查询过滤详细信息
                 *
                 * @return filterInfo
                 */
                getFilterInfo():$.kd.bos.entity.report.FilterInfo;
                /**
                 * 获取已经拼接的on条件
                 *
                 * @return reletionMap
                 */
                getReletionMap():$.java.util.Map;
            }
            type CadreFileReportExtRelationFilterDTO_T = CadreFileReportExtRelationFilterDTO_S & CadreFileReportExtRelationFilterDTO$;
            interface CadreFileReportExtRelationFilterDTO extends CadreFileReportExtRelationFilterDTO_T {
            }
        }
        namespace kd.sdk.sihc.soecadm{
            interface SdkSihcSoecadmModule_S {
            }
            type SdkSihcSoecadmModule_ST = $.kd.sdk.module.Module & SdkSihcSoecadmModule_S;
            interface SdkSihcSoecadmModule_C extends SdkSihcSoecadmModule_ST {
                new():SdkSihcSoecadmModule;
            }
            interface SdkSihcSoecadmModule$ {
            }
            type SdkSihcSoecadmModule_T = $.kd.sdk.module.Module & SdkSihcSoecadmModule_S & SdkSihcSoecadmModule$;
            interface SdkSihcSoecadmModule extends SdkSihcSoecadmModule_T {
            }
        }
        namespace kd.sdk.sihc.soecadm.business.service.activity{
            interface ActivityGroupInsCommonService_S {
            }
            type ActivityGroupInsCommonService_ST = kd.sdk.sihc.soecadm.common.ActivityGroupInsCommConstants_S & ActivityGroupInsCommonService_S;
            interface ActivityGroupInsCommonService_C extends ActivityGroupInsCommonService_ST {
                new():ActivityGroupInsCommonService;
            }
            interface ActivityGroupInsCommonService$ {
                /**
                 * 删除活动组实例-单个
                 * @param bizBillId  业务单据ID
                 * @return
                 */
                deleteActivityGroupInsById(bizBillId:long):number;
                /**
                 * 删除活动组实例-批量
                 * @param bizBillIds  业务单据ID集合
                 * @return
                 */
                deleteActivityGroupInsByIds(bizBillIds:$.java.util.List):number;
                /**
                 * 根据传入的活动id集合排除掉活动组实例中的活动
                 * @param activityGroupInsList           活动实例集合
                 * @param excludeActivityIds             需要排除的活动id集合
                 * @return  活动实例集合(activity:活动ID,status:活动实例状态,activitytype:活动类型,1必备活动0非必备活动)
                 */
                excludeActivityGroupInsList(activityGroupInsList:$.java.util.List,excludeActivityIds:$.java.util.List):void;
                /**
                 * 生成活动组实例
                 * @param bizBillId             业务单据ID
                 * @param activityGroupIns      活动实例集合(activity:活动ID,status:活动实例状态,activitytype:活动类型,1必备活动0非必备活动)
                 * @return 活动组实例ID
                 */
                generateActivityGroupIns(bizBillId:long,activityGroupIns:$.java.util.List):long;
                /**
                 * 生成活动组实例-先匹配后生成
                 * @param bizBillId             业务单据ID
                 * @param sechemeId             活动方案ID
                 * @param data                  业务参数集合
                 * @param souActivityId         单据来源活动的id
                 * @return 活动组实例ID
                 */
                generateActivityGroupIns(bizBillId:long,sechemeId:long,data:$.kd.bos.dataentity.entity.DynamicObject,souActivityId:long):long;
                /**
                 * 查询活动人单对象中的活动实例id 按照单维度构建map
                 * 此方法会访问微服务接口，如果要判断活动单据是否包含多个活动节点，使用 queryActivityGroupInsByActivityObjs 拿到结果单独判断
                 *
                 * @param activityObj  活动人单对象
                 * @param activityInsId 要判断是否包含某个活动
                 * @return key: 活动单据id value： true 包含入参的活动 false 不包含入参的活动
                 */
                getActivityContainsNodeByActivityObj(activityObj:$.kd.bos.dataentity.entity.DynamicObject,activityInsId:long):boolean;
                /**
                 * 根据单据属性匹配活动组
                 * @param sechemeId             活动方案ID
                 * @param data                  业务动态对象
                 * @return                      活动实例集合(activity:活动ID,status:活动实例状态,activitytype:活动类型,1必备活动0非必备活动)
                 */
                mateActivityGroup(sechemeId:long,data:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.List;
                /**
                 * 查询活动人单对象中的活动实例id 按照单维度构建map
                 * 此方法会访问微服务接口，如果要判断活动单据是否包含多个活动节点，使用 queryActivityGroupInsByActivityObjs 拿到结果单独判断
                 *
                 * @param activityObjs  活动人单对象集合
                 * @param activityInsId 要判断是否包含某个活动
                 * @return key: 活动单据id value： true 包含入参的活动 false 不包含入参的活动
                 */
                queryActivityContainsNodeByActivityObjs(activityObjs:$.java.util.List,activityInsId:long):$.java.util.Map;
                /**
                 * 查询活动人单对象中的活动实例id 按照单维度构建map
                 *
                 * @param activityObjs 活动人单对象集合
                 * @return key: 活动单据id value： 活动单据中任职分录中的任免单对应的活动实例的节点id聚合
                 */
                queryActivityGroupInsByActivityObjs(activityObjs:$.java.util.List):$.java.util.Map;
                /**
                 * 查询活动人单对象中的活动实例id 按照单维度构建map
                 *
                 * @param activityObjs 活动人单对象集合
                 * @param filterFun  自定义过滤规则函数 比如可以控制只判断必备活动
                 * @return key: 活动单据id value： 活动单据中任职分录中的任免单对应的活动实例的节点id聚合
                 */
                queryActivityGroupInsByActivityObjs(activityObjs:$.java.util.List,func1:(t:any)=>any):$.java.util.Map;
                /**
                 * 查询活动组实例
                 * @param bizBillId  业务单据ID
                 * @return
                 */
                queryActivityGroupInsById(bizBillId:long):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 查询活动组实例
                 * @param  bizBillIds  业务单据ID集合
                 * @return 以业务单据为key的map，value为活动List，包括活动id和活动类型：1必备活动0非必备活动
                 */
                queryActivityGroupInsByIds(bizBillIds:$.java.util.List):$.java.util.Map;
                /**
                 * 修改活动组实例
                 * @param bizBillId             业务单据ID
                 * @param activityGroupIns      活动实例集合(activity:活动ID,status:活动实例状态,activitytype:活动类型,1必备活动0非必备活动)
                 * @return 活动组实例ID
                 */
                updateActivityGroupIns(bizBillId:long,activityGroupIns:$.java.util.List):long;
            }
            type ActivityGroupInsCommonService_T = kd.sdk.sihc.soecadm.common.ActivityGroupInsCommConstants & ActivityGroupInsCommonService_S & ActivityGroupInsCommonService$;
            interface ActivityGroupInsCommonService extends ActivityGroupInsCommonService_T {
            }
        }
        namespace kd.sdk.sihc.soecadm.business.service.auth{
            interface AuthOrgService_S {
            }
            interface AuthOrgService_C extends AuthOrgService_S {
                new():AuthOrgService;
            }
            interface AuthOrgService$ {
                /**
                 * 收集任免登记单鉴权数据
                 *
                 * @param appRemReg
                 * @return
                 */
                getAppRemRegAuthOrgs(appRemReg:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.Set;
                /**
                 * 活动鉴权数据处理
                 *
                 * @param activity 活动
                 */
                handleActivityAuthEntry(activity:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 任免登记单鉴权数据处理
                 *
                 * @param appRemReg 任免登记单
                 */
                handleAppRemRegAuthEntry(appRemReg:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type AuthOrgService_T = AuthOrgService_S & AuthOrgService$;
            interface AuthOrgService extends AuthOrgService_T {
            }
        }
        namespace kd.sdk.sihc.soecadm.common{
            interface ActivityGroupInsCommConstants_S {
                readonly FIELD_ACTIVITY:string;
                readonly FIELD_ACTIVITYTYPE:string;
                readonly FIELD_ACTIVITY_ID:string;
                readonly FIELD_BIZBILLID:string;
                readonly FIELD_ENTRYENTITY:string;
                readonly FIELD_SOUACTIVITYID:string;
                readonly FIELD_STATUS:string;
            }
            interface ActivityGroupInsCommConstants$ {
            }
            type ActivityGroupInsCommConstants_T = ActivityGroupInsCommConstants_S & ActivityGroupInsCommConstants$;
            interface ActivityGroupInsCommConstants extends ActivityGroupInsCommConstants_T {
            }
        }
        namespace kd.sdk.sihc.soecadm.extpoint{
            interface AbstractActivityBillCommonService_S {
            }
            interface AbstractActivityBillCommonService_C extends AbstractActivityBillCommonService_S {
                new():AbstractActivityBillCommonService;
            }
            interface AbstractActivityBillCommonService$ {
                /**
                 * 生成活动单据
                 *
                 * @param appremId   任免单id
                 * @param activityId 活动id
                 * @param instanceId 流程实例id
                 * @param sla        处理时长
                 * @return 活动单id，如果返回0，说明生成失败了
                 */
                assembleActivityBill(appremId:long,activityId:long,instanceId:long,sla:number):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 批量终止进行中的活动-任免登记单终止时调用
                 *
                 * @param appremregIds 任免单id集合
                 */
                batchTerminateTask(appremregIds:$.java.util.List):void;
                /**
                 * 设置鉴权分录数据
                 *
                 * @param activityBillDyn 活动单据对象
                 */
                generateAuthEntry(activityBillDyn:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 组装职位拼接内容
                 *
                 * @param positionNameSB 职位拼接
                 * @param positionEntry  职位信息分录
                 */
                generatePositionName(positionNameSB:$.java.lang.StringBuilder,positionEntry:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 组装职位拼接内容
                 *
                 * @param positionNameSB 职位拼接
                 * @param dispMainInfo   维护拟任职信息
                 */
                generatePositionNameFromDispMainInfo(positionNameSB:$.java.lang.StringBuilder,dispMainInfo:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 处理拟任职、拟免职拼接
                 *
                 * @param activityBillDyn 活动单据对象
                 */
                handlePositionName(activityBillDyn:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 处理拟任职、拟免职拼接
                 *
                 * @param positionColl 活动单据对象
                 */
                handlePositionName4Appremcoll(positionColl:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 根据任免登记单查询进行中的活动数据集合
                 *
                 * @param appremregIds 任免登记单id集合
                 * @return
                 */
                queryProceActivityByAppRemRegIds(appremregIds:$.java.util.List):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 批量处理进行中的活动数据-任免登记单终止时调用
                 *
                 * @param appremregIds 任免申请单ID
                 */
                stop(appremregIds:$.java.util.List):void;
                /**
                 * 修改进行中活动状态为已终止
                 *
                 * @param dynamicObjects 活动单据集合
                 */
                updateActivityStatus(dynamicObjects:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                /**
                 * 更新人员职位分录
                 *
                 * @param appremregId 任免登记单id
                 * @param entryColl   人员职位分录集合
                 */
                updatePersonPosition(appremregId:long,entryColl:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
            }
            type AbstractActivityBillCommonService_T = AbstractActivityBillCommonService_S & AbstractActivityBillCommonService$;
            interface AbstractActivityBillCommonService extends AbstractActivityBillCommonService_T {
            }
        }
    }
}
export {};