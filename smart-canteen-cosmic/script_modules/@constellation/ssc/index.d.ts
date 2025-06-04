/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.sdk.fi.ssc.extpoint.achieve{
            interface ICustomAchieveFactorPlugin_S {
            }
            interface ICustomAchieveFactorPlugin$ {
                /**
                 * 单个考核对象的计算因子计算
                 *
                 * @param mainOrg 主业务组织（绩效指标/绩效方案中的共享中心；意为增加该共享中心约束条件）
                 * @param accessType 考核对象类型  1-用户组（暂不支持） 2-表示员工
                 * @param accessObject 考核对象 用户组id 或者 用户id
                 * @param startDate 开始日期 考核周期的开始时间
                 * @param endDate 结束日期 考核周期的结束时间
                 * @return 计算因子的值
                 */
                getCustomAchieveFactor(mainOrg:long,accessType:string,accessObject:long,startDate:Date,endDate:Date):any;
                /**
                 * 多个考核对象的同一个计算因子计算
                 *
                 * @param mainOrg 主业务组织 （绩效指标/绩效方案中的共享中心；意为增加该共享中心约束条件）
                 * @param accessType 考核对象类型
                 * @param accessObjectList  考核对象集合
                 * @param startDate 开始日期
                 * @param endDate 结束日期
                 * @return 考核对象结果map，key为考核对象，value为计算因子的值
                 */
                getCustomAchieveFactorBatch(mainOrg:long,accessType:string,accessObjectList:$.java.util.Set,startDate:Date,endDate:Date):$.java.util.Map;
            }
            type ICustomAchieveFactorPlugin_T = ICustomAchieveFactorPlugin_S & ICustomAchieveFactorPlugin$;
            interface ICustomAchieveFactorPlugin extends ICustomAchieveFactorPlugin_T {
            }
        }
        namespace kd.sdk.fi.ssc.extpoint.approve{
            interface ITaskApproveService_S {
            }
            interface ITaskApproveService$ {
                /**
                 * 共享任务审批-审批后扩展
                 *
                 * @param hisTaskId 已完成任务Id（处理环节：已完成），task_taskhistory实体
                 * @param key 审批操作
                 * @param map 审批参数
                 */
                afterApproveOperation(hisTaskId:long,key:string,map:$.java.util.Map):void;
                /**
                 * 共享任务审批-审批前扩展
                 *
                 * @param taskId 任务Id（处理环节：非已完成），task_task实体
                 * @param key 审批操作
                 * @param map 审批参数
                 */
                beforeApproveOperation(taskId:long,key:string,map:$.java.util.Map):void;
            }
            type ITaskApproveService_T = ITaskApproveService_S & ITaskApproveService$;
            interface ITaskApproveService extends ITaskApproveService_T {
            }
            interface ITaskCancelPendService_S {
            }
            interface ITaskCancelPendService$ {
                /**
                 * 共享任务-取消暂挂后扩展
                 *
                 * @param taskId   共享任务Id
                 * @param paramMap  取消暂挂微服务接口，请求参数
                 * @param resultMap 取消暂挂微服务接口，响应结果
                 */
                afterCancelPend(taskId:long,paramMap:$.java.util.Map,resultMap:$.java.util.Map):void;
                /**
                 * 共享任务-取消暂挂前扩展（常用于校验）
                 *
                 * @param taskId   共享任务Id
                 * @param paramMap 取消暂挂微服务接口，请求参数
                 *
                 * @return 扩展结果
                 * 例如校验失败返回以下提示语信息，触发接口失败响应
                 */
                beforeCancelPend(taskId:long,paramMap:$.java.util.Map):$.java.util.Map;
            }
            type ITaskCancelPendService_T = ITaskCancelPendService_S & ITaskCancelPendService$;
            interface ITaskCancelPendService extends ITaskCancelPendService_T {
            }
        }
        namespace kd.sdk.fi.ssc.extpoint.create{
            interface ITaskCreateService_S {
            }
            interface ITaskCreateService$ {
                /**
                 * 创建任务成功后调用此方法。可在此增加二开业务逻辑，例如通知某个管理员、第三方系统等。
                 * @param taskDyo 共享任务中心--任务动态对象
                 * @param billTypeDyo 共享任务中心--业务单据基础资料
                 * @param taskTypeDyo 共享任务中心--任务类型基础资料
                 * @param assignID 工作流id
                 * @param billDataDyo  单据动态对象
                 */
                afterCreateTask?(taskDyo:$.kd.bos.dataentity.entity.DynamicObject,billTypeDyo:$.kd.bos.dataentity.entity.DynamicObject,taskTypeDyo:$.kd.bos.dataentity.entity.DynamicObject,assignID:string,billDataDyo:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 任务动态对象构建完成，保存入库之前调用此方法。可在此增加二开业务逻辑，例如对任务二开字段赋值
                 * @param taskDyo 共享任务中心--任务动态对象
                 * @param billTypeDyo 共享任务中心--业务单据基础资料
                 * @param taskTypeDyo 共享任务中心--任务类型基础资料
                 * @param assignID 工作流id
                 * @param billDataDyo  单据动态对象
                 */
                beforeSaveTask?(taskDyo:$.kd.bos.dataentity.entity.DynamicObject,billTypeDyo:$.kd.bos.dataentity.entity.DynamicObject,taskTypeDyo:$.kd.bos.dataentity.entity.DynamicObject,assignID:string,billDataDyo:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type ITaskCreateService_T = ITaskCreateService_S & ITaskCreateService$;
            interface ITaskCreateService extends ITaskCreateService_T {
            }
        }
        namespace kd.sdk.fi.ssc.extpoint.disRebuild{
            interface INotifyWfService_S {
            }
            interface INotifyWfService$ {
                /**
                 * 通知工作流
                 *
                 * @param disType   任务分配类型
                 * @param disTask   待分配任务
                 * @param isSuccess 分配是否成功
                 */
                notifyWf(disType:kd.sdk.fi.ssc.extpoint.disRebuild.disenum.DisTypeEnum,disTask:$.kd.bos.dataentity.entity.DynamicObject,isSuccess:boolean):void;
            }
            type INotifyWfService_T = INotifyWfService_S & INotifyWfService$;
            interface INotifyWfService extends INotifyWfService_T {
            }
            interface IStateChangeService_S {
            }
            interface IStateChangeService$ {
                /**
                 * 修改任务状态变更记录
                 *
                 * @param disType         任务分配类型
                 * @param disTask         待分配任务
                 * @param isSuccess       分配是否成功
                 * @param disTaskOldValue 待分配的任务分配成功后，旧值
                 */
                stateChange(disType:kd.sdk.fi.ssc.extpoint.disRebuild.disenum.DisTypeEnum,disTask:$.kd.bos.dataentity.entity.DynamicObject,isSuccess:boolean,disTaskOldValue:$.java.util.Map):void;
            }
            type IStateChangeService_T = IStateChangeService_S & IStateChangeService$;
            interface IStateChangeService extends IStateChangeService_T {
            }
            interface IAfterDisService_S {
            }
            interface IAfterDisService$ {
                /**
                 * 分配后，批处理执行
                 *
                 * @param disType     任务分配类型
                 * @param disTaskList 待分配任务List
                 */
                afterDisBatch(disType:kd.sdk.fi.ssc.extpoint.disRebuild.disenum.DisTypeEnum,disTaskList:$.java.util.List):void;
                /**
                 * 分配后，单任务处理执行
                 *
                 * @param disType   任务分配类型
                 * @param disTask   待分配任务
                 * @param isSuccess 分配是否成功
                 */
                afterDisSingle(disType:kd.sdk.fi.ssc.extpoint.disRebuild.disenum.DisTypeEnum,disTask:$.kd.bos.dataentity.entity.DynamicObject,isSuccess:boolean):void;
            }
            type IAfterDisService_T = IAfterDisService_S & IAfterDisService$;
            interface IAfterDisService extends IAfterDisService_T {
            }
            interface IDataPrepareService_S {
            }
            interface IDataPrepareService$ {
                /**
                 * 加载待分配任务数据
                 *
                 * @param unDisFilter   待分配任务，过滤条件
                 * @param disTaskSource 加载待分配任务数据扩展接口，调用来源
                 */
                prepareData(unDisFilter:$.kd.bos.orm.query.QFilter,disTaskSource:kd.sdk.fi.ssc.extpoint.disRebuild.disenum.DisTaskSourceEnum):$.java.util.List;
            }
            type IDataPrepareService_T = IDataPrepareService_S & IDataPrepareService$;
            interface IDataPrepareService extends IDataPrepareService_T {
            }
            interface ITaskSaveService_S {
            }
            interface ITaskSaveService$ {
                /**
                 * 保存任务
                 *
                 * @param disType   任务分配类型
                 * @param disTask   待分配任务
                 * @param isSuccess 分配是否成功
                 */
                saveTask(disType:kd.sdk.fi.ssc.extpoint.disRebuild.disenum.DisTypeEnum,disTask:$.kd.bos.dataentity.entity.DynamicObject,isSuccess:boolean):void;
            }
            type ITaskSaveService_T = ITaskSaveService_S & ITaskSaveService$;
            interface ITaskSaveService extends ITaskSaveService_T {
            }
        }
        namespace kd.sdk.fi.ssc.extpoint.disRebuild.disenum{
            enum DisTaskSourceEnum {
                AUTO_DIS_1,
                AUTO_DIS_2,
                AUTO_DIS_3,
                GET_DIS_1
            }
            enum DisTypeEnum {
                AUTO_DIS,
                MANUAL_DIS,
                MANUAL_GET,
                NOPASS_DIS
            }
        }
        namespace kd.sdk.fi.ssc.util.task{
            interface PartaskUniversalUtil_S {
                /**
                 * 根据已完成任务id，判断是否是多级任务
                 *
                 * @param taskId
                 *            任务id
                 * @return true：多级任务，false：非多级任务
                 * @throws KDBizException
                 *             是否是多级任务判断错误
                 *
                 *             <pre>
                 * <code>调用示例:kd.sdk.fi.ssc.util.task.PartaskUniversalUtil.isParTaskCompleted(123456789L)</code>
                 *             </pre>
                 */
                isParTaskCompleted(taskId:long):boolean;
                /**
                 * 根据在途任务id，判断是否是多级任务
                 *
                 * @param taskId
                 *            任务id
                 * @return true：多级任务，false：非多级任务
                 * @throws KDBizException
                 *             是否是多级任务判断错误
                 *
                 *             <pre>
                 * <code>调用示例:kd.sdk.fi.ssc.util.task.PartaskUniversalUtil.isParTaskOnProcessing
                 * (123456789L)</code>
                 *             </pre>
                 */
                isParTaskOnProcessing(taskId:long):boolean;
                /**
                 * 根据在途任务id，判断处理中任务是否是初审任务
                 *
                 * @param taskId
                 *            任务id
                 * @return true：初审任务，false：非初审任务
                 * @throws KDBizException
                 *             是否是初审任务判断错误
                 *
                 *             <pre>
                 * <code>调用示例:kd.sdk.fi.ssc.util.task.PartaskUniversalUtil.isStartInProcessing(123456789L)</code>
                 *             </pre>
                 */
                isStartInProcessing(taskId:long):boolean;
            }
            interface PartaskUniversalUtil_C extends PartaskUniversalUtil_S {
                new():PartaskUniversalUtil;
            }
            interface PartaskUniversalUtil$ {
            }
            type PartaskUniversalUtil_T = PartaskUniversalUtil_S & PartaskUniversalUtil$;
            interface PartaskUniversalUtil extends PartaskUniversalUtil_T {
            }
        }
    }
}
export {};