/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.sdk.swc.hcdm{
            interface SdkHcdmModule_S {
            }
            type SdkHcdmModule_ST = $.kd.sdk.module.Module & SdkHcdmModule_S;
            interface SdkHcdmModule_C extends SdkHcdmModule_ST {
                new():SdkHcdmModule;
            }
            interface SdkHcdmModule$ {
            }
            type SdkHcdmModule_T = $.kd.sdk.module.Module & SdkHcdmModule_S & SdkHcdmModule$;
            interface SdkHcdmModule extends SdkHcdmModule_T {
            }
        }
        namespace kd.sdk.swc.hcdm.business.extpoint.adjapprbill{
            interface ExtensionCfg_S {
            }
            interface ExtensionCfg_C extends ExtensionCfg_S {
                new():ExtensionCfg;
            }
            interface ExtensionCfg$ {
                getExtFieldSetOfAdjType():$.java.util.Set;
                getExtFieldSetOfDecType():$.java.util.Set;
                setExtFieldSetOfAdjType(extFieldSetOfAdjType:$.java.util.Set):void;
                setExtFieldSetOfDecType(extFieldSetOfDecType:$.java.util.Set):void;
            }
            type ExtensionCfg_T = ExtensionCfg_S & ExtensionCfg$;
            interface ExtensionCfg extends ExtensionCfg_T {
            }
            interface IDecAdjApprSyncAdjFileExtPlugin_S {
            }
            interface IDecAdjApprSyncAdjFileExtPlugin$ {
                beforeSynDecRecord?(event:kd.sdk.swc.hcdm.business.extpoint.adjapprbill.event.BeforeSynDecRecordEvent):void;
            }
            type IDecAdjApprSyncAdjFileExtPlugin_T = IDecAdjApprSyncAdjFileExtPlugin_S & IDecAdjApprSyncAdjFileExtPlugin$;
            interface IDecAdjApprSyncAdjFileExtPlugin extends IDecAdjApprSyncAdjFileExtPlugin_T {
            }
            interface IAdjConfirmPrintExtPlugin_S {
            }
            interface IAdjConfirmPrintExtPlugin$ {
                /**
                 * 修改调薪确认模板下载打印数据信息
                 * @param event 调薪确认打印事件
                 *
                 * <pre><code>
                 * import kd.bos.orm.util.CollectionUtils;
                 * import kd.sdk.swc.hcdm.business.extpoint.adjapprbill.IAdjConfirmPrintExtPlugin;
                 * import kd.sdk.swc.hcdm.business.extpoint.adjapprbill.event.AdjConfirmPrintEvent;
                 * import kd.swc.hsbp.common.constants.SWCBaseConstants;
                 * import java.util.HashMap;
                 * import java.util.List;
                 * import java.util.Map;
                 *
                 * public class AdjConfirmPrintExtPluginDemoImpl implements IAdjConfirmPrintExtPlugin {
                 *
                 *     public void modifyDataRowValue(AdjConfirmPrintEvent arg) {
                 *         Map<String, Object> parameterMap = arg.getParameterMap();
                 *         if (CollectionUtils.isEmpty(parameterMap)) {
                 *             return;
                 *         }
                 *
                 *         Map<Long, Map<String, String>> dataRowMap = new HashMap<>(SWCBaseConstants.INITCAPACITY_HASHMAP);
                 *         Map<String, String> personDataRowMap = new HashMap<>(SWCBaseConstants.INITCAPACITY_HASHMAP);
                 *         // Map<Long, List<Long>> 调薪确认模板对应调薪确认人员信息
                 *         Object adjConfirmTplAndPersonMapObj = parameterMap.get("adjConfirmPersonIds");
                 *         if (adjConfirmTplAndPersonMapObj != null) {
                 *             List<Long> adjConfirmPersonIds = (List<Long>)adjConfirmTplAndPersonMapObj;
                 *             personDataRowMap.put("personname", "zhangsan");
                 *             personDataRowMap.put("personnumber", "zhangsan_001");
                 *             personDataRowMap.put("company", "company_001");
                 *             personDataRowMap.put("depempadminorg", "dept_001");
                 *             personDataRowMap.put("phone", "12345678999");
                 *             for (Long adjConfirmPersonId : adjConfirmPersonIds) {
                 *                 dataRowMap.put(adjConfirmPersonId, personDataRowMap);
                 *             }
                 *             arg.setDataRowMap(dataRowMap);
                 *         }
                 *     }
                 *
                 * }
                 * </code></pre>
                 */
                modifyDataRowValue(event:kd.sdk.swc.hcdm.business.extpoint.adjapprbill.event.AdjConfirmPrintEvent):void;
            }
            type IAdjConfirmPrintExtPlugin_T = IAdjConfirmPrintExtPlugin_S & IAdjConfirmPrintExtPlugin$;
            interface IAdjConfirmPrintExtPlugin extends IAdjConfirmPrintExtPlugin_T {
            }
            interface IAdjConfirmPrintExtService_S {
            }
            interface IAdjConfirmPrintExtService$ {
                /**
                 * 修改调薪确认模板下载打印调薪内容
                 * @param event 调薪确认打印事件
                 *
                 * <pre><code>
                 * import java.util.HashMap;
                 * import java.util.Map;
                 * import kd.bos.dataentity.resource.ResManager;
                 * import kd.sdk.swc.hcdm.business.extpoint.adjapprbill.IAdjConfirmPrintExtService;
                 * import kd.sdk.swc.hcdm.business.extpoint.adjapprbill.event.AdjConfirmPrintEvent;
                 * import kd.swc.hsbp.common.constants.SWCBaseConstants;
                 *
                 * public class AdjConfirmPrintExtServiceDemoImpl implements IAdjConfirmPrintExtService {
                 *
                 *     public void getLastPrintContent(AdjConfirmPrintEvent event) {
                 *         // 调薪确认模板存储的文本内容 对{}里面的内容进行替换即可
                 *         //{person.name}（{person.number}）你好，感谢您对公司的辛勤付出，本次调薪结果已出炉，当前[{standarditem.name}薪酬为{currentsalary}，本次调薪幅度为{actualrange}%，调薪金额为{actualamount}，最终薪酬为{finalamount}]，请及时进行确认！
                 *         String message = ResManager.loadKDString("zhangsan（zhangsan_001）你好，感谢您对公司的辛勤付出，本次调薪结果已出炉，当前[基本工资薪酬为5000，本次调薪幅度为10%，调薪金额为500，最终薪酬为5500]，请及时进行确认！","AdjConfirmPrintExtServiceDemoImpl_1", "swc-hsba-formplugin");
                 *         Map<Long, String> textContentMap = new HashMap<>(SWCBaseConstants.INITCAPACITY_HASHMAP);
                 *         // event参数里有告诉当前处理人员id
                 *         textContentMap.put(1682625424628175872L,message);
                 *         // 设置结果信息
                 *         event.setTextContentMap(textContentMap);
                 *     }
                 *
                 * }
                 * </code></pre>
                 */
                getLastPrintContent?(event:kd.sdk.swc.hcdm.business.extpoint.adjapprbill.event.AdjConfirmPrintEvent):void;
                /**
                 * 修改调薪确认模板下载打印文件名
                 * @param event 调薪确认打印事件
                 *
                 * <pre><code>
                 * import kd.bos.dataentity.resource.ResManager;
                 * import kd.sdk.swc.hcdm.business.extpoint.adjapprbill.IAdjConfirmPrintExtService;
                 * import kd.sdk.swc.hcdm.business.extpoint.adjapprbill.event.AdjConfirmPrintEvent;
                 *
                 * public class AdjConfirmPrintExtServiceDemoImpl implements IAdjConfirmPrintExtService {
                 *
                 *     public void setDownLoadFileName(AdjConfirmPrintEvent arg) {
                 *         String fileName = ResManager.loadKDString("调薪确认单下载名称通过埋点设置.pdf", "AdjConfirmPrintExtServiceDemoImpl_4", "swc-hsba-formplugin");
                 *         // 设置结果信息
                 *         arg.setFileName(fileName);
                 *     }
                 *
                 * }
                 *
                 * </code></pre>
                 */
                setDownLoadFileName?(event:kd.sdk.swc.hcdm.business.extpoint.adjapprbill.event.AdjConfirmPrintEvent):void;
            }
            type IAdjConfirmPrintExtService_T = IAdjConfirmPrintExtService_S & IAdjConfirmPrintExtService$;
            interface IAdjConfirmPrintExtService extends IAdjConfirmPrintExtService_T {
            }
            interface IDecAdjApprExtPlugin_S {
            }
            interface IDecAdjApprExtPlugin$ {
                /**
                 * 添加项目后设置事件
                 */
                disablePropertyChange?(event:kd.sdk.swc.hcdm.business.extpoint.adjapprbill.event.DecAdjPropertyChangeEvent):void;
                /**
                 * 添加人员后设置明细事件
                 * @param event
                 */
                onAfterF7PersonSelect?(event:kd.sdk.swc.hcdm.business.extpoint.adjapprbill.event.AfterF7PersonSelectEvent):void;
                /**
                 * 获取调薪确认催办时可发送短信的总次数
                 * @param event
                 */
                onGetAdjConfirmSmsSendNum?(event:kd.sdk.swc.hcdm.business.extpoint.adjapprbill.event.OnGetAdjConfirmSmsSendNumEvent):void;
                /**
                 * 获取单据扩展配置
                 * @param event
                 */
                onGetExtensionCfg?(event:OnGetExtensionCfgEvent):void;
                /**
                 * 引入时字段校验事件
                 * @param event
                 */
                onImportValidate?(event:kd.sdk.swc.hcdm.business.extpoint.adjapprbill.event.ImportValidateEvent):void;
                /**
                 * 引入时写入明细事件
                 * @param event
                 */
                onImportWriteEntry?(event:kd.sdk.swc.hcdm.business.extpoint.adjapprbill.event.ImportWriteEntryEvent):void;
                /**
                 * 隐藏列事件
                 */
                setColumnHiddenStatus?(event:kd.sdk.swc.hcdm.business.extpoint.adjapprbill.event.AfterBuildEntryGridEvent):void;
            }
            type IDecAdjApprExtPlugin_T = IDecAdjApprExtPlugin_S & IDecAdjApprExtPlugin$;
            interface IDecAdjApprExtPlugin extends IDecAdjApprExtPlugin_T {
            }
            interface OnGetExtensionCfgEvent_S {
            }
            type OnGetExtensionCfgEvent_ST = $.java.util.EventObject & OnGetExtensionCfgEvent_S;
            interface OnGetExtensionCfgEvent_C extends OnGetExtensionCfgEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):OnGetExtensionCfgEvent;
            }
            interface OnGetExtensionCfgEvent$ {
                getCfg():ExtensionCfg;
                setCfg(cfg:ExtensionCfg):void;
            }
            type OnGetExtensionCfgEvent_T = $.java.util.EventObject & OnGetExtensionCfgEvent_S & OnGetExtensionCfgEvent$;
            interface OnGetExtensionCfgEvent extends OnGetExtensionCfgEvent_T {
            }
        }
        namespace kd.sdk.swc.hcdm.business.extpoint.adjapprbill.event{
            interface BeforeSynDecRecordEvent_S {
            }
            type BeforeSynDecRecordEvent_ST = $.java.io.Serializable & BeforeSynDecRecordEvent_S;
            interface BeforeSynDecRecordEvent_C extends BeforeSynDecRecordEvent_ST {
                new(adjApprPersonList:$.java.util.List,decAdjSalaryEntityList:$.java.util.List):BeforeSynDecRecordEvent;
            }
            interface BeforeSynDecRecordEvent$ {
                getAdjApprPersonList():$.java.util.List;
                getDecAdjSalaryEntityList():$.java.util.List;
                setAdjApprPersonList(adjApprPersonList:$.java.util.List):void;
                setDecAdjSalaryEntityList(decAdjSalaryEntityList:$.java.util.List):void;
            }
            type BeforeSynDecRecordEvent_T = $.java.io.Serializable & BeforeSynDecRecordEvent_S & BeforeSynDecRecordEvent$;
            interface BeforeSynDecRecordEvent extends BeforeSynDecRecordEvent_T {
            }
            interface AfterF7PersonSelectEvent_S {
            }
            type AfterF7PersonSelectEvent_ST = $.java.util.EventObject & AfterF7PersonSelectEvent_S;
            interface AfterF7PersonSelectEvent_C extends AfterF7PersonSelectEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):AfterF7PersonSelectEvent;
            }
            interface AfterF7PersonSelectEvent$ {
                getAdjAttributionType():string;
                getAdjPersonDyObjList():$.java.util.List;
                setAdjAttributionType(adjAttributionType:string):void;
                setAdjPersonDyObjList(adjPersonDyObjList:$.java.util.List):void;
            }
            type AfterF7PersonSelectEvent_T = $.java.util.EventObject & AfterF7PersonSelectEvent_S & AfterF7PersonSelectEvent$;
            interface AfterF7PersonSelectEvent extends AfterF7PersonSelectEvent_T {
            }
            interface OnGetAdjConfirmSmsSendNumEvent_S {
            }
            type OnGetAdjConfirmSmsSendNumEvent_ST = $.java.util.EventObject & OnGetAdjConfirmSmsSendNumEvent_S;
            interface OnGetAdjConfirmSmsSendNumEvent_C extends OnGetAdjConfirmSmsSendNumEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):OnGetAdjConfirmSmsSendNumEvent;
            }
            interface OnGetAdjConfirmSmsSendNumEvent$ {
                getSmsSendNum():number;
                setSmsSendNum(smsSendNum:number):void;
            }
            type OnGetAdjConfirmSmsSendNumEvent_T = $.java.util.EventObject & OnGetAdjConfirmSmsSendNumEvent_S & OnGetAdjConfirmSmsSendNumEvent$;
            interface OnGetAdjConfirmSmsSendNumEvent extends OnGetAdjConfirmSmsSendNumEvent_T {
            }
            interface ImportWriteEntryEvent_S {
            }
            type ImportWriteEntryEvent_ST = $.java.util.EventObject & ImportWriteEntryEvent_S;
            interface ImportWriteEntryEvent_C extends ImportWriteEntryEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):ImportWriteEntryEvent;
            }
            interface ImportWriteEntryEvent$ {
                getAdjAttributionType():string;
                getApprPersonEntityType():$.kd.bos.dataentity.metadata.dynamicobject.DynamicObjectType;
                getDataList():$.java.util.List;
                getMatchResult():$.java.util.Map;
                getRows():number[];
                getView():$.kd.bos.form.IFormView;
                isRowUpdate():boolean;
                setAdjAttributionType(adjAttributionType:string):void;
                setApprPersonEntityType(apprPersonEntityType:$.kd.bos.dataentity.metadata.dynamicobject.DynamicObjectType):void;
                setDataList(dataList:$.java.util.List):void;
                setMatchResult(matchResult:$.java.util.Map):void;
                setRowUpdate(rowUpdate:boolean):void;
                setRows(rows:number[]):void;
                setView(view:$.kd.bos.form.IFormView):void;
            }
            type ImportWriteEntryEvent_T = $.java.util.EventObject & ImportWriteEntryEvent_S & ImportWriteEntryEvent$;
            interface ImportWriteEntryEvent extends ImportWriteEntryEvent_T {
            }
            interface AdjConfirmPrintEvent_S {
            }
            type AdjConfirmPrintEvent_ST = $.java.util.EventObject & AdjConfirmPrintEvent_S;
            interface AdjConfirmPrintEvent_C extends AdjConfirmPrintEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):AdjConfirmPrintEvent;
            }
            interface AdjConfirmPrintEvent$ {
                /**
                 * 获取数据源信息 Map<调薪确认人员id,Map<属性标识,value>>
                 */
                getDataRowMap():$.java.util.Map;
                /**
                 * 获取文件名
                 */
                getFileName():string;
                /**
                 * 获取参数信息
                 */
                getParameterMap():$.java.util.Map;
                /**
                 * 获取调薪确认模板打印富文本的内容
                 */
                getTextContentMap():$.java.util.Map;
                /**
                 * 设置数据源信息
                 *
                 * @param dataRowMap 数据信息 Map<调薪确认人员id,Map<属性,value>> 属性包括personname：姓名，personnumber：工号， company:公司，
                 *        depempadminorg：挂靠行政组织，job：职位，phone：电话，peremail：个人电子邮箱，joblevel：职级，jobgrade：职等,feedbackstatus:设置调薪反馈状态,
                 *        confirmtext:调薪确认模板配置里正文配置调薪确认内容
                 */
                setDataRowMap(dataRowMap:$.java.util.Map):void;
                /**
                 * 设置下载调薪确认文件名
                 *
                 * @param fileName 调薪确认文件名
                 */
                setFileName(fileName:string):void;
                /**
                 * 设置参数信息
                 *
                 * @param parameterMap 参数信息 map<参数key,参数类型> 参数key1: "queryResultParam" ,value: Map<Long, Map<String, String>>
                 *        dataRowMap就是AdjConfirmPrintEvent#dataRowMap数据源属性信息 参数key2: "adjConfirmPersonIds" ,value: List<Long>
                 *        当前处理调薪确认人员id集合
                 */
                setParameterMap(parameterMap:$.java.util.Map):void;
                /**
                 * 设置调薪确认模板打印富文本的内容
                 *
                 * @param textContentMap 调薪人员id对应模板调薪确认模板打印富文本内容 map<调薪确认人员id,调薪确认模板打印富文本的内容>
                 */
                setTextContentMap(textContentMap:$.java.util.Map):void;
            }
            type AdjConfirmPrintEvent_T = $.java.util.EventObject & AdjConfirmPrintEvent_S & AdjConfirmPrintEvent$;
            interface AdjConfirmPrintEvent extends AdjConfirmPrintEvent_T {
            }
            interface AfterBuildEntryGridEvent_S {
            }
            type AfterBuildEntryGridEvent_ST = $.java.io.Serializable & AfterBuildEntryGridEvent_S;
            interface AfterBuildEntryGridEvent_C extends AfterBuildEntryGridEvent_ST {
                new():AfterBuildEntryGridEvent;
            }
            interface AfterBuildEntryGridEvent$ {
                getParamMap():$.java.util.Map;
                setParamMap(paramMap:$.java.util.Map):void;
            }
            type AfterBuildEntryGridEvent_T = $.java.io.Serializable & AfterBuildEntryGridEvent_S & AfterBuildEntryGridEvent$;
            interface AfterBuildEntryGridEvent extends AfterBuildEntryGridEvent_T {
            }
            interface ImportValidateEvent_S {
            }
            type ImportValidateEvent_ST = $.java.util.EventObject & ImportValidateEvent_S;
            interface ImportValidateEvent_C extends ImportValidateEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):ImportValidateEvent;
            }
            interface ImportValidateEvent$ {
                getAdjAttributionType():string;
                getBaseDataMap():$.java.util.Map;
                getColIdMap():$.java.util.Map;
                getDataRows():$.java.util.List;
                getErrorMsg():$.java.util.Map;
                getGradeRankMap():$.java.util.Map;
                getMatchResult():$.java.util.Map;
                getView():$.kd.bos.form.IFormView;
                setAdjAttributionType(adjAttributionType:string):void;
                setBaseDataMap(baseDataMap:$.java.util.Map):void;
                setColIdMap(colIdMap:$.java.util.Map):void;
                setDataRows(dataRows:$.java.util.List):void;
                setErrorMsg(errorMsg:$.java.util.Map):void;
                setGradeRankMap(gradeRankMap:$.java.util.Map):void;
                setMatchResult(matchResult:$.java.util.Map):void;
                setView(view:$.kd.bos.form.IFormView):void;
            }
            type ImportValidateEvent_T = $.java.util.EventObject & ImportValidateEvent_S & ImportValidateEvent$;
            interface ImportValidateEvent extends ImportValidateEvent_T {
            }
            interface DecAdjPropertyChangeEvent_S {
            }
            type DecAdjPropertyChangeEvent_ST = $.java.util.EventObject & DecAdjPropertyChangeEvent_S;
            interface DecAdjPropertyChangeEvent_C extends DecAdjPropertyChangeEvent_ST {
                new(source:any):DecAdjPropertyChangeEvent;
            }
            interface DecAdjPropertyChangeEvent$ {
                getDisableColumns():$.java.util.Set;
                setDisableColumns(disableColumns:$.java.util.Set):void;
            }
            type DecAdjPropertyChangeEvent_T = $.java.util.EventObject & DecAdjPropertyChangeEvent_S & DecAdjPropertyChangeEvent$;
            interface DecAdjPropertyChangeEvent extends DecAdjPropertyChangeEvent_T {
            }
        }
        namespace kd.sdk.swc.hcdm.business.extpoint.adjsalsyn{
            interface IAdjSalSynRecordExtService_S {
            }
            interface IAdjSalSynRecordExtService$ {
                /**
                 * 对定调薪同步记录在创建后进行增强
                 *
                 * @param event 定调薪同步记录事件
                 */
                extDealAfterCreate?(event:kd.sdk.swc.hcdm.business.extpoint.adjsalsyn.event.AdjSalSynRecordEvent):void;
            }
            type IAdjSalSynRecordExtService_T = IAdjSalSynRecordExtService_S & IAdjSalSynRecordExtService$;
            interface IAdjSalSynRecordExtService extends IAdjSalSynRecordExtService_T {
            }
            interface IAdjSalSynExtService_S {
            }
            interface IAdjSalSynExtService$ {
                /**
                 * 定调薪同步数据删除前二开拓展接口
                 * @param event
                 */
                beforeSalaryAdjSyncDelete?(event:kd.sdk.swc.hcdm.business.extpoint.adjsalsyn.event.BeforeSalaryAdjSyncDeleteEvent):void;
                /**
                 * 定调薪同步数据更新同步记录详情
                 * @param event
                 */
                beforeUpdateSyncDetailStatus?(event:kd.sdk.swc.hcdm.business.extpoint.adjsalsyn.event.BeforeUpdateSyncDetailStatusEvent):void;
            }
            type IAdjSalSynExtService_T = IAdjSalSynExtService_S & IAdjSalSynExtService$;
            interface IAdjSalSynExtService extends IAdjSalSynExtService_T {
            }
            interface IAdjSalSynTmplSetExtService_S {
            }
            interface IAdjSalSynTmplSetExtService$ {
                getF7BizItemFilter(event:kd.sdk.swc.hcdm.business.extpoint.adjsalsyn.event.AdjSalSynTmplSetEvent):void;
            }
            type IAdjSalSynTmplSetExtService_T = IAdjSalSynTmplSetExtService_S & IAdjSalSynTmplSetExtService$;
            interface IAdjSalSynTmplSetExtService extends IAdjSalSynTmplSetExtService_T {
            }
        }
        namespace kd.sdk.swc.hcdm.business.extpoint.adjsalsyn.event{
            interface BeforeSalaryAdjSyncDeleteEvent_S {
            }
            interface BeforeSalaryAdjSyncDeleteEvent_C extends BeforeSalaryAdjSyncDeleteEvent_S {
                new():BeforeSalaryAdjSyncDeleteEvent;
            }
            interface BeforeSalaryAdjSyncDeleteEvent$ {
                getParams():$.java.util.Map;
                getSyncDetails():$.kd.bos.dataentity.entity.DynamicObject[];
                getSyncRecord():$.kd.bos.dataentity.entity.DynamicObject;
                setParams(params:$.java.util.Map):void;
                setSyncDetails(syncDetails:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                setSyncRecord(syncRecord:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type BeforeSalaryAdjSyncDeleteEvent_T = BeforeSalaryAdjSyncDeleteEvent_S & BeforeSalaryAdjSyncDeleteEvent$;
            interface BeforeSalaryAdjSyncDeleteEvent extends BeforeSalaryAdjSyncDeleteEvent_T {
            }
            interface BeforeUpdateSyncDetailStatusEvent_S {
            }
            interface BeforeUpdateSyncDetailStatusEvent_C extends BeforeUpdateSyncDetailStatusEvent_S {
                new():BeforeUpdateSyncDetailStatusEvent;
            }
            interface BeforeUpdateSyncDetailStatusEvent$ {
                getDetails():$.java.util.List;
                getSyncRecord():$.kd.bos.dataentity.entity.DynamicObject;
                setDetails(details:$.java.util.List):void;
                setSyncRecord(syncRecord:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type BeforeUpdateSyncDetailStatusEvent_T = BeforeUpdateSyncDetailStatusEvent_S & BeforeUpdateSyncDetailStatusEvent$;
            interface BeforeUpdateSyncDetailStatusEvent extends BeforeUpdateSyncDetailStatusEvent_T {
            }
            interface AdjSalSynTmplSetEvent_S {
            }
            type AdjSalSynTmplSetEvent_ST = $.java.util.EventObject & AdjSalSynTmplSetEvent_S;
            interface AdjSalSynTmplSetEvent_C extends AdjSalSynTmplSetEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):AdjSalSynTmplSetEvent;
            }
            interface AdjSalSynTmplSetEvent$ {
                getAdjSalSynTmplSetDy():$.kd.bos.dataentity.entity.DynamicObject;
                getRowIndex():number;
                getqFilters():$.java.util.List;
                setAdjSalSynTmplSetDy(adjSalSynTmplSetDy:$.kd.bos.dataentity.entity.DynamicObject):void;
                setRowIndex(rowIndex:number):void;
                setqFilters(qFilters:$.java.util.List):void;
            }
            type AdjSalSynTmplSetEvent_T = $.java.util.EventObject & AdjSalSynTmplSetEvent_S & AdjSalSynTmplSetEvent$;
            interface AdjSalSynTmplSetEvent extends AdjSalSynTmplSetEvent_T {
            }
            interface AdjSalSynRecordEvent_S {
            }
            type AdjSalSynRecordEvent_ST = $.java.util.EventObject & AdjSalSynRecordEvent_S;
            interface AdjSalSynRecordEvent_C extends AdjSalSynRecordEvent_ST {
                new(adjSyncRecord:$.kd.bos.dataentity.entity.DynamicObject):AdjSalSynRecordEvent;
            }
            interface AdjSalSynRecordEvent$ {
                getAdjSyncRecord():$.kd.bos.dataentity.entity.DynamicObject;
                isNewCreated():boolean;
                setNewCreated(newCreated:boolean):void;
            }
            type AdjSalSynRecordEvent_T = $.java.util.EventObject & AdjSalSynRecordEvent_S & AdjSalSynRecordEvent$;
            interface AdjSalSynRecordEvent extends AdjSalSynRecordEvent_T {
            }
        }
        namespace kd.sdk.swc.hcdm.business.extpoint.candsetsalapply{
            interface ICandSetSalApplySyncFileExtPlugin_S {
            }
            interface ICandSetSalApplySyncFileExtPlugin$ {
                /**
                 * 候选人定薪申请单下推档案增加字段
                 *
                 * @Param: event 增加下推字段事件
                 * @Return:  void
                 */
                addSyncFields?(event:kd.sdk.swc.hcdm.business.extpoint.candsetsalapply.event.AddSyncFieldsEvent):void;
            }
            type ICandSetSalApplySyncFileExtPlugin_T = ICandSetSalApplySyncFileExtPlugin_S & ICandSetSalApplySyncFileExtPlugin$;
            interface ICandSetSalApplySyncFileExtPlugin extends ICandSetSalApplySyncFileExtPlugin_T {
            }
            interface IHcdmCandidateSetSalApplExtPlugin_S {
            }
            interface IHcdmCandidateSetSalApplExtPlugin$ {
                /**
                 * 添加候选人定薪申请单逻辑字段和物理字段映射
                 * @param map key是逻辑字段，value是物理字段
                 */
                addFields?(map:$.java.util.Map):void;
            }
            type IHcdmCandidateSetSalApplExtPlugin_T = IHcdmCandidateSetSalApplExtPlugin_S & IHcdmCandidateSetSalApplExtPlugin$;
            interface IHcdmCandidateSetSalApplExtPlugin extends IHcdmCandidateSetSalApplExtPlugin_T {
            }
        }
        namespace kd.sdk.swc.hcdm.business.extpoint.candsetsalapply.event{
            interface AddSyncFieldsEvent_S {
            }
            interface AddSyncFieldsEvent_C extends AddSyncFieldsEvent_S {
                new(paraMap:$.java.util.Map,applyDyn:$.kd.bos.dataentity.entity.DynamicObject,personDyn:$.kd.bos.dataentity.entity.DynamicObject):AddSyncFieldsEvent;
            }
            interface AddSyncFieldsEvent$ {
                getApplyDyn():$.kd.bos.dataentity.entity.DynamicObject;
                getParaMap():$.java.util.Map;
                getPersonDyn():$.kd.bos.dataentity.entity.DynamicObject;
                setParaMap(paraMap:$.java.util.Map):void;
            }
            type AddSyncFieldsEvent_T = AddSyncFieldsEvent_S & AddSyncFieldsEvent$;
            interface AddSyncFieldsEvent extends AddSyncFieldsEvent_T {
            }
        }
        namespace kd.sdk.swc.hcdm.business.extpoint.person{
            interface IHCDMPersonExtService_S {
            }
            interface IHCDMPersonExtService$ {
                /**
                 * 计薪人员修改工号服务
                 *
                 * <pre><code>
                 *
                 * public class HCDMPersonExtDemoService implements IHCDMPersonExtService {
                 *
                 *     public void modifyPersonNumber(Map<String, Object> param) {
                 *         List<Map<String, Object>> datas = (List<Map<String, Object>>) param.get("data");
                 *         //旧工号集合-备查
                 *         Set<String> oriNumbers = new HashSet<>(SWCBaseConstants.INITCAPACITY_HSAHSET);
                 *         //KEY:旧工号,VALUE=新工号
                 *         Map<String, String> numberMap = new HashMap<>(SWCBaseConstants.INITCAPACITY_HASHMAP);
                 *
                 *         for (Map<String, Object> data : datas) {
                 *             String oriNumber = String.valueOf(data.get("oriNumber"));
                 *             String newNumber = String.valueOf(data.get("newNumber"));
                 *
                 *             oriNumbers.add(oriNumber);
                 *
                 *             numberMap.put(oriNumber, newNumber);
                 *         }
                 *
                 *         //测试修改薪酬管理扩展案例测试的工号
                 *         dealModifyPersonNumberForEntityRel(param, oriNumbers, numberMap, "kdtest_hcdm_extdemotest", "number", "number");
                 *
                 *         //无返回值，若是失败直接抛异常
                 *         if (param.containsKey("testerrorhcdm")) {
                 *             throw new RuntimeException("This deal fail hcdm!!!");
                 *         }
                 *     }
                 *
                 *     private DynamicObject[] dealModifyPersonNumberForEntityRel(Map<String, Object> param, Set<String> oriNumbers, Map<String, String> numberMap, String entityNumber, String propertyName, String relPropertyName) {
                 *         QFilter qFilter = new QFilter(relPropertyName, QFilter.in, oriNumbers);
                 *
                 *         SWCDataServiceHelper empHelper = new SWCDataServiceHelper(entityNumber);
                 *         DynamicObject[] dataDys = empHelper.query(SWCHisBaseDataHelper.getSelectProperties(entityNumber), new QFilter[]{qFilter});
                 *         for (DynamicObject empDy : dataDys) {
                 *             //待更新的字段值
                 *             String propertyVal = empDy.getString(propertyName);
                 *             //原工号
                 *             String oriNumber = empDy.getString(relPropertyName);
                 *             //新工号
                 *             String newNumber = numberMap.get(oriNumber);
                 *             //旧工号字符串替换为新字符串, 此处认为原工号是精确的
                 *             empDy.set(propertyName, propertyVal.replace(oriNumber, newNumber));
                 *         }
                 *         empHelper.update(dataDys);
                 *
                 *         Map<String, Object> resultMap = (Map<String, Object>) param.get("dealInfo");
                 *         resultMap.put(entityNumber + "#" + propertyName, dataDys.length);
                 *         return dataDys;
                 *     }
                 *
                 * }
                 *
                 * </code></pre>
                 *
                 * @param param 待修改的工号信息，{"data": [{"oriNumber":"1234567-R", "newNumber":"1234567"}]}
                 * @return 无返回值，若是失败直接抛异常
                 */
                modifyPersonNumber?(param:$.java.util.Map):void;
            }
            type IHCDMPersonExtService_T = IHCDMPersonExtService_S & IHCDMPersonExtService$;
            interface IHCDMPersonExtService extends IHCDMPersonExtService_T {
            }
        }
        namespace kd.sdk.swc.hcdm.business.extpoint.report{
            interface IAdjDetailRptExtService_S {
            }
            interface IAdjDetailRptExtService$ {
                addExtFilter?(args:kd.sdk.swc.hcdm.business.extpoint.report.event.AdjDetailQueryParamEvent):void;
            }
            type IAdjDetailRptExtService_T = IAdjDetailRptExtService_S & IAdjDetailRptExtService$;
            interface IAdjDetailRptExtService extends IAdjDetailRptExtService_T {
            }
        }
        namespace kd.sdk.swc.hcdm.business.extpoint.report.event{
            interface AdjDetailQueryParamEvent_S {
            }
            interface AdjDetailQueryParamEvent_C extends AdjDetailQueryParamEvent_S {
                new(queryParam:$.kd.bos.entity.report.ReportQueryParam,filters:$.java.util.List):AdjDetailQueryParamEvent;
            }
            interface AdjDetailQueryParamEvent$ {
                addFilter(filter:$.kd.bos.orm.query.QFilter):void;
                getFilters():$.java.util.List;
                getQueryParam():$.kd.bos.entity.report.ReportQueryParam;
            }
            type AdjDetailQueryParamEvent_T = AdjDetailQueryParamEvent_S & AdjDetailQueryParamEvent$;
            interface AdjDetailQueryParamEvent extends AdjDetailQueryParamEvent_T {
            }
        }
        namespace kd.sdk.swc.hcdm.business.extpoint.salarystd{
            interface IHcdmContrastPropForCandExtPlugin_S {
            }
            interface IHcdmContrastPropForCandExtPlugin$ {
                /**
                 * 加载对照属性值
                 * @param candContrastPropLoadEvent
                 */
                loadContrastPropValueForCand?(candContrastPropLoadEvent:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.CandContrastPropLoadEvent):void;
            }
            type IHcdmContrastPropForCandExtPlugin_T = IHcdmContrastPropForCandExtPlugin_S & IHcdmContrastPropForCandExtPlugin$;
            interface IHcdmContrastPropForCandExtPlugin extends IHcdmContrastPropForCandExtPlugin_T {
            }
            interface IStdTableExtPlugin_S {
            }
            interface IStdTableExtPlugin$ {
                /**
                 *  <h5>标准表计算之后的处理逻辑</h5>
                 *  执行完计算逻辑后，会触发调用该方法，如果存在额外的计算，可以实现该方法
                 *  1、标准表计算之后执行的后置逻辑，在执行完doCalculate后会触发该方法的执行，该方法的主要目的服务于那些沿用标品计算且一些扩展计算的业务，
                 *  在实现该方法补充扩展计算的逻辑。计算逻辑会给currentData#stdDataEntities集合中填入计算结果，本方法可以修正这个结果集
                 *  <b>实现案例：</b>
                 *  <pre><code>
                 *      public void afterCalculate(StdTableCalculateEvent evt) {
                 *      SalaryStandardEntryData currentData = evt.getCurrentData();
                 *      List<SalaryStdDataEntity> calcResultAdd = Lists.newArrayList();
                 *      for (SalaryStdItemEntity itemEntity : currentData.getItemEntities()) {
                 *          //如果存在指定的变量或预测类项目给指定项目的所有等、档都设置计算结果
                 *          if(itemEntity.getItemIdentity() == 10000000001L){
                 *              for (SalaryGradeEntity gradeEntity : currentData.getGradeEntities()) {
                 *                  for (SalaryRankEntity rankEntity : currentData.getRankEntities()) {
                 *                      SalaryStdDataEntity data = new SalaryStdDataEntity();
                 *                      data.setItemIdentity(itemEntity.getItemIdentity());
                 *                      data.setGradeIdentity(gradeEntity.getGradeIdentity());
                 *                      data.setRankIdentity(rankEntity.getRankIdentity());
                 *                      //如果该项目启用了薪点，将计算出来的薪点值设置到该属性
                 *                      data.setSalaryCount(BigDecimal.valueOf(20));
                 *                      //将计算出来的档值设置到min属性中，注 middle、max属性是预留给区间类型标准表的字段
                 *                      data.setMin(BigDecimal.valueOf(10000));
                 *                      calcResultAdd.add(data);
                 *                  }
                 *              }
                 *          }
                 *      }
                 *      //将计算结果设置到数据集中（可以遍历该集合，在设置前将旧项目数据值移除）
                 *      currentData.getStdDataEntities().addAll(calcResultAdd);
                 * </code></pre>
                 *  @param evt 需要计算的标准表信息
                 */
                afterCalculate?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.StdTableCalculateEvent):void;
                /**
                 *  <h5>根据标准表表格输入的数据，执行计算逻辑得到各计算字段的值</h5>
                 *  需要实现此方法后会替换标品逻辑，如果要沿用标品计算逻辑，不需要实现该方法
                 *  1、当标准表触发保存计算时，会执行该方法。标品提供了默认实现，如果需要扩展计算逻辑，需要重写该方法，重写后标品的默认计算逻辑不会执行，只会执行扩展的方法。
                 *  2、入参会将标准表的面板及分录字段数据实例化为PO设置到SalaryStandardEntryData中，计算逻辑主要对currentData#stdDataEntities 属性放入计算结果，框架自动进行数据处理将其渲染到表格内
                 *  <b>实现案例：</b> 计算宽带表的中位值档、幅宽档
                 *  <pre><code>
                 *  public void doCalculate(StdTableCalculateEvent evt) {
                 *       SalaryStandardEntryData stdData = calcContext.getCurrentData();
                 *       List<SalaryStdDataEntity> stdDataEntities = stdData.getStdDataEntities();
                 *       // 1、将数据按照薪等、项目分组
                 *       	Map<Long, Map<Long, List<SalaryStdDataEntity>>> dataMap = groupByGradeItem(stdDataEntities);
                 *       // 2、遍历外层
                 *       for (Map.Entry<Long, Map<Long, List<SalaryStdDataEntity>>> item : dataMap.entrySet()) {
                 *           Long gradeId = item.getKey();
                 *           int gradeIndex = gradeMap.get(gradeId).getGradeIndex();
                 *           SalaryGradeEntity downGrade = getGradeByIndex(gradeIndex - 1, gradeList);
                 *           for (Map.Entry<Long, List<SalaryStdDataEntity>> entry : item.getValue().entrySet()) {
                 *               Long itemId = entry.getKey();
                 *               List<SalaryStdDataEntity> dataList = entry.getValue();
                 *                // 计算中位值档、幅宽档、档差档
                 *               SalaryStdDataEntity midEntity = dataList.stream().filter(entity -> 1000000000001L == entity.getRankIdentity()).findFirst().orElse(null);
                 *               SalaryStdDataEntity gearDiffEntity = dataList.stream().filter(entity -> 1000000000004L == entity.getRankIdentity()).findFirst().orElse(null);
                 *               // 最小值或最大值为null时，中位值为null
                 *               if (null == minEntity.getMin() || null == maxEntity.getMin()){
                 *                   midEntity.setMin(null);
                 *                   gearDiffEntity.setMin(null);
                 *               }else {
                 *                   midEntity.setMin(5000); // 中位值档
                 *                   gearDiffEntity.setMin(2000);// 档差
                 *               }
                 *           }
                 *       }
                 *  }
                 * </code></pre>
                 *  @param evt 需要计算的标准表信息
                 */
                doCalculate?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.StdTableCalculateEvent):void;
                /**
                 *  <h5>标准表的显示方式允许二开设置默认显示方式</h5>
                 *  标准表第二步显示方式，
                 *       薪点薪酬： 仅薪点（开启薪点时才显示，默认不勾选）、固薪占比（默认勾选）、固薪合计（默认勾选）、合计（默认勾选）
                 *       宽带薪酬： 递增系数（默认勾选）、幅宽（默认勾选）、档差（默认勾选）、重叠度（默认勾选）、等差（默认勾选）、固薪占比、固薪合计、合计（默认勾选）
                 * 标准表第四步显示方式，
                 *       薪点薪酬： 固薪占比（默认勾选）、固薪合计（默认勾选）、合计（默认勾选）
                 *       宽带薪酬： 固薪占比（默认勾选）、固薪合计（默认勾选）、合计（默认勾选）
                 *  如果需要修改标品显示方式的默认显示逻辑或隐藏样式，可以实现该方法
                 *  <b>实现案例：</b>
                 *  <pre><code>
                 *      @Override
                 *      public void onGetDisplayParam(OnGetDefaultDisplayParamEvent evt) {
                 *          log.info("go demo StdTableExtPluginExtImpl onGetDisplayParam");
                 *          SalaryStandardBaseEntity standardBaseEntity = evt.getStandardBaseEntity();
                 *          SalaryStandardTypeEnum type = standardBaseEntity.getType();
                 *          DisplayParamNew param = evt.getDisplayParam();
                 *          // 如果是薪点薪酬
                 *          if (SalaryStandardTypeEnum.SALARYCOUNT == type) {
                 *              // 比如：薪点薪酬想设置固薪占比默认不勾选，固薪合计不可见，合计使用标品默认
                 *              param.setItemLevelValueById(1000000000001L, 2);
                 *              param.setItemLevelValueById(1000000000002L, -1);
                 *          }else if (SalaryStandardTypeEnum.BROADBAND == type) {
                 *              // 如果是宽带薪酬
                 *              // 比如：宽带薪酬想设置幅宽默认不勾选，递增系数不可见，其余使用标品默认
                 *              param.setRankLevelValueById(1000000000003L, 2);
                 *              param.setRankLevelValueById(1000000000002L, -1);
                 *              // 比如：宽带薪酬想设置固薪占比默认勾选，固薪合计不可见，合计使用标品默认
                 *              param.setItemLevelValueById(1000000000001L, 1);
                 *              param.setItemLevelValueById(1000000000002L, -1);
                 *          }
                 *          // 设置值返回
                 *          evt.setDisplayParam(param);
                 *      }
                 *  </code></pre>
                 *  @param evt 预览样式相关参数
                 */
                onGetDisplayParam?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetDefaultDisplayParamEvent):void;
                /**
                 * <h5>根据标准表类型、项目实体、薪档实体、区间实体的组合条件获取字段的宽度用于展示项目下</h5>
                 * 1、标准表渲染表格时触发，在默认实现执行完后进来。根据标准表类型、项目实体、薪档实体、区间实体的组合条件获取字段的宽度，
                 * 当字段以项目名命名、以薪档命名、以区间属性名命名时，字段的默认宽度应该会有所区别，该接口支持对扩展的预测及变量类项目、
                 * 特殊薪档增加的新字段提供宽度设置。
                 * <b>实现案例：</b>
                 * <pre><code>
                 * public void onGetFieldColumnWidth(OnGetFieldParamEvent evt) {
                 *     if(evt.getItemEntity().getItemIdentity() == 200000001L){
                 * 	//如果是年薪总收入
                 *  	evt.setFieldWidth(“150”);//给下面所有字段都定150px宽
                 *        }
                 * }
                 * </code></pre>
                 * @param evt 字段宽度获取事件
                 */
                onGetFieldColumnWidth?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetFieldParamEvent):void;
                /**
                 * <h5>根据项目实体、薪档实体、区间字段、计算方式、表格视图模式的组合条件获取底层字段默认的锁定态</h5>
                 * 用于展示项目下，默认锁定态的字段会被锁定，不允许页面输入。非锁定态的字段支持页面输入，并同时会生成到引入模板中
                 * 1、标准表渲染表格时触发，在默认实现执行完后进来。根据项目实体、薪档实体、区间字段、计算方式、表格视图模式的组合条件获取底层字段默认的锁定态，
                 * 用于展示项目下，默认锁定态的字段会被锁定，不允许页面输入。非锁定态的字段支持页面输入，并同时会生成到引入模板中。默认会根据预测类项目设置为锁定态，
                 * 对变量类项目设置为非锁定态
                 * 2、入参携带了标准表基本信息、项目实体、薪档实体、区间序号，还会携带页面用到的计算方式（CalculationMethodEnum 总共三种）、表格模式，
                 * 尽管标准表第二步目前只用了SalaryStdGridDisplayTypeEnum#GROUPITEMS模式，但将来可能会支持其他模式，模式的变化决定了字段维度的调整，
                 * 因此在实现层面上要综合这些因素给定字段的默认锁定态
                 * 3、比如这里：组合判断条件为 当 标准表类型为薪点时 and 项目是固薪合计 and 薪档不限 ，可以确定底层字段需要锁定
                 * <b>实现案例：</b>
                 * <pre><code>
                 * public void onGetFieldLockStatus(OnGetFieldLockStatusEvent evt) {
                 *     if(evt.getGridType().equals(SalaryStdGridDisplayTypeEnum.TABULAR)){
                 *         //列表式下所有字段锁定
                 *         evt.setLockStatus(Boolean.TRUE);
                 *     }
                 *     if(evt.getGridType().equals(SalaryStdGridDisplayTypeEnum.GROUPITEMS)){
                 *         If(evt.getItemEntity().getItemIdentity() == 10000000002L){
                 * 		        //如果是固薪占比，则字段可编辑
                 * 		        evt.setLockStatus(Boolean.FALSE);
                 *        }
                 *     }
                 * }
                 * </code></pre>
                 * @param evt 字段锁定态获取事件
                 */
                onGetFieldLockStatus?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetFieldLockStatusEvent):void;
                /**
                 * <h5>根据标准表类型、项目实体、薪档实体、区间字段序号的组合条件获取聚合项目模式下底层字段的字段类型</h5>
                 * 用于展示聚合项目下字段，聚合项目模式表示 项目-薪档为父子的层级结构
                 * 1、标准表渲染表格时触发，在默认实现执行完后进来。根据标准表类型、项目实体、薪档实体、区间字段序号的组合条件获取底层字段的字段类型，用于展示聚合项目下字段，区分字段是小数类型、金额类型（金额类型会绑定标准表币别）
                 * 2、聚合项目表格模式代表的是以 项目-薪档-区间列为父子的层级结构。还有另一种模式是列表表格模式，代表的是薪档独立出一列&项目-区间列为父子的层级结构，类型可查看SalaryStdGridDisplayTypeEnum。
                 * 3、聚合项目表格模式中确定一个字段需要三个维度包括项目、薪档、区间字段【比如变量类项目下默认挂最低档，字段类型为数值类型、预测类项目各档的字段默认为金额类型】。
                 * 实现者需要参考入参中的所有或部分信息，来决定底层字段的字段类型
                 * 4、入参中携带的参数包括：标准表类型、项目、薪档、区间字段序号，按照这几个组合条件得到字段类型、字段宽度，将值设置到fieldType、fieldWidth属性中
                 * <b>实现案例：</b>
                 * <pre><code>
                 * public void onGetFieldTypeForGroupItem(OnGetFieldParamEvent evt) {
                 *     If(evt.getItemEntity().getItemIdentity() == 10000000002L){
                 * 		    //如果是固薪占比，则使用数值类型
                 * 		    evt.setFieldType(“decimalfield”)
                 *     }
                 * }
                 * </code></pre>
                 * @param evt 字段类型取值范围为： decimalfield、amountfield
                 */
                onGetFieldTypeForGroupItem?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetFieldParamEvent):void;
                /**
                 * <h5>根据标准表类型、项目实体、区间字段序号的组合条件获取列表式模式下底层字段的字段类型</h5>
                 * 用于展示列表式下字段，列表式模式表示 项目-区间字段为父子的层级结构
                 * 1、同onGetFieldTypeForGroupItem，区别点在于该方法是在列表式模式下绘制表格会调用
                 * 2、列表式表格模式下，参数中的rankEntity为空
                 * <b>实现案例：</b>
                 * <pre><code>
                 * public void onGetFieldTypeForTabular(OnGetFieldParamEvent evt) {
                 *     If(evt.getItemEntity().getItemIdentity() == 10000000002L){
                 * 		    //如果是固薪占比，则使用数值类型
                 * 		    evt.setFieldType(“decimalfield”)
                 *      }
                 * }
                 * </code></pre>
                 * @param evt 字段类型取值范围为： decimalfield、amountfield
                 */
                onGetFieldTypeForTabular?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetFieldParamEvent):void;
                /**
                 *  <h5>根据标准表类型、项目实体、薪点显示类型的组合条件获取区间属性列表</h5>
                 *  1、标准表渲染表格时触发，在默认实现执行完后进来。根据标准表类型、项目实体、薪点显示类型的组合条件获取区间属性列表。区间属性共四个，
                 *  对应到标准表数据分录结构中的薪点、最小值、中位值、最大值的字段可根据不同类型的标准表，给不同项目的不同薪档展示不同的区间列。
                 *  2、区间属性共四个，对应到标准表数据分录结构中的薪点、最小值、中位值、最大值的字段，可根据不同类型的标准表，给不同项目的不同薪档展示不同的区间列
                 *  需要注意的是：
                 *  (1)薪点值字段只有当标准表为薪点类型时才会用到。
                 *  (2)宽带标准表下一个档只会有一个值，所以只会用到最小值字段。
                 *  (3)中位值、最大值字段是当区间类型标准表时，才会用到。
                 *  <b>实现案例：</b>
                 *  <pre><code>
                 *  public void onGetIntervalProp(OnGetIntervalPropEvent evt) {
                 *       originalPropList = evt.getOriginalIntervalPropList;
                 *       If(evt.getStdBaseEntity().getType() == SalaryStandardTypeEnum.SALARYCOUNT){
                 *       	If(evt.getItemEntity().getItemIdentity() == 10000000002L){
                 *       		//如果是固薪占比，则下面展示薪点、值列
                 *               //创建薪点项和最小项加入
                 *       	    IntervalPropEntity salaryCount =new IntervalPropEntity(0L, "薪点","薪点",0);
                 *       	    IntervalPropEntity min =new IntervalPropEntity(0L, "值","值",1);
                 *       evt.getIntervalPropList.add(salaryCount);
                 *       evt.getIntervalPropList.add(min);
                 *       }
                 * }
                 *  </code></pre>
                 *  @param evt 区间属性获取事件
                 */
                onGetIntervalProp?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetIntervalPropEvent):void;
                /**
                 * <h5>根据标准表类型、项目实体、薪档实体、区间实体的组合条件获取字段的数据范围、长度、小数位要求</h5>
                 * 1、标准表渲染表格时触发，在默认实现执行完后进来。根据标准表类型、项目实体、薪档实体、区间实体的组合条件获取字段的数据范围、
                 * 长度、小数位要求，同前几个接口一样，前四个属性决定一个字段，并确定了特定的业务含义。该接口的调用结果会用来设置字段控件的属性，
                 * 保证在数据录入、数据展示上、数据引入校验的场景中进行控制。dataScope属性取值格式和苍穹数值控件的dataScope属性取值格式要求保持一致
                 * 2、比如 薪点表下、固薪占比项目下、第一档下、最小值列 决定了录入的是一个数值类型百分比含义的信息，那字段的约束范围是0~100，字段的精度为19.6
                 * 3、入参携带了几个决定字段含义的关键信息，实现者需要根据字段的业务含义将字段的数值范围、数值长度、小数位长度提供返回，目前字段类型只支持数值、
                 * 金额类型，dataScope、precision、scale需要返回给调用框架完成表格绘制
                 * <b>实现案例：</b>
                 * <pre><code>
                 * public void onGetNumberConstraint(OnGetNumberConstraintEvent evt) {
                 * 	if(evt.getItemEntity().getItemIdentity() == 1000000000001L){
                 * 	//如果是固薪占比，给范围[0,100],小数位 2位，总长度15
                 *  	evt.setDataScope(“[0,100]”);
                 *         evt.setPrecision(15);
                 *         evt.setScale(2);
                 *        }
                 * }
                 * </code></pre>
                 * @param evt 字段约束获取事件
                 */
                onGetNumberConstraint?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetNumberConstraintEvent):void;
                /**
                 * <h5>标准表的仅薪点展示默认值允许二开设值</h5>
                 * 当薪酬标准表类型为 薪点薪酬时 开启薪档开后标准表设置的仅薪点默认显示并且不勾选
                 * 如果需要修改仅薪点的默认显示逻辑，可以实现改方法设置仅薪点的默认显示方式
                 * 参数需要传入 标准表的类型 和  是否开启薪档开关值
                 * <b>实现案例：</b>
                 * <pre><code>
                 * public void onGetOnlySalaryCount(OnGetOnlySalaryCountEvent evt) {
                 *         SalaryStandardTypeEnum type = evt.getType();
                 *         // 如果薪酬标准表类型为非薪点薪酬时默认不显示
                 *         if (null == type || !SalaryStandardTypeEnum.SALARYCOUNT.equals(type)) {
                 *             evt.setDisplayOnlySalaryCount(-1);
                 *             return;
                 *         }
                 *         // 当启用薪点时薪点默认显示且不勾选
                 *         // 1 仅显示薪点; 2 显示薪点和值 ;-1 选项不存在(不显示)
                 *         if (evt.getIsUseSalaryCount() > 0) {
                 *             evt.setDisplayOnlySalaryCount(1);
                 *         } else {
                 *             evt.setDisplayOnlySalaryCount(-1);
                 *         }
                 *     }
                 * </code></pre>
                 * @param evt 仅薪点显示相关参数
                 */
                onGetOnlySalaryCount?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetOnlySalaryCountEvent):void;
                /**
                 * <h5>标准表的预览样式允许二开设置默认样式和隐藏其他样式</h5>
                 * 标准表第三步和第四步页面的预览样式是默认显示样式1，不隐藏其他样式
                 * 如果需要修改标品预览样式的默认显示逻辑或隐藏其他样式，可以实现该方法
                 * 注意：默认展示的样式不能够设置成为隐藏
                 * <b>实现案例：</b>
                 * <pre><code>
                 * public void onGetPreviewStyle(OnGetPreviewStyleEvent evt) {
                 *         String index = evt.getIndex();
                 *         if (SWCBaseConstants.STR_THREE.equals(index)){
                 *             //设置第三步的预览样式
                 *             evt.setDefaultPrivewStyle(PreviewStyleEnum.LIST);// 标品默认展示样式1
                 *             evt.setNeedHiddenPrivewStyleSet(Sets.newHashSet());//隐藏样式
                 *         }
                 *         if (SWCBaseConstants.STR_FOUR.equals(index)){
                 *             //设置第四步的预览样式
                 *             evt.setDefaultPrivewStyle(PreviewStyleEnum.LIST);// 标品默认展示样式1
                 *             evt.setNeedHiddenPrivewStyleSet(Sets.newHashSet());//无隐藏样式
                 *         }
                 *     }
                 * </code></pre>
                 * @param evt 预览样式相关参数
                 */
                onGetPreviewStyle?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetPreviewStyleEvent):void;
                /**
                 * <h5>获取项目下要用到的薪档列表</h5>
                 * 渲染或计算标准表时，可实现在不同的项目下使用不同的薪档集合
                 * 可根据不同标准表类型、不同项目（标准项目、变量及预测类项目）提供不同薪档集
                 * 1、标准表渲染表格时触发，在默认实现执行完后进来。获取项目下要用到的薪档列表，用于渲染或计算场景时，可以给不同项目提供不同的薪档，如果是渲染场景，
                 * 提供的薪档会作为字段挂在项目下。如果是计算场景，会将提供的薪档读写对应的表格数据完成计算。
                 * 2、入参会携带标准表的面板主要字段信息、薪档全量分录信息（标准档+特殊档）、项目实体、使用类型（1 用于表格展示 2 用于计算）
                 * <b>实现案例：</b>
                 * <pre><code>
                 * public void onGetRankListOfItem(OnGetItemRankEvent evt) {
                 *     if(StringUtils.equals(evt.getUseType() , "1")){//如果使用场景是用于显示
                 *         //返回用于项目下要显示的薪档
                 * 	        SalaryItemLabelEnum itemLabel = item.getItemLabel();
                 * 	        if(itemLabel.equals(SalaryItemLabelEnum.SPECIAL)){
                 * 	        If(item.getItemIdentity() == 1000000000002L ){
                 * 	                //给固薪合计只挂一个档
                 * 	                evt.getReturnDisplayRankList.addAll(standardRankList.get(0));
                 *           }
                 *      }
                 *      if(StringUtils.equals(evt.getUseType() , "2")){//如果使用场景是用于计算
                 *             If(item.getItemIdentity() == 1000000000002L ){
                 *  	                //给固薪合计只挂所有档
                 *  	                evt.getReturnDisplayRankList.addAll(standardRankList);
                 *            }
                 * }
                 * </code></pre>
                 * @param evt 薪档获取的事件
                 */
                onGetRankListOfItem?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetItemRankEvent):void;
                /**
                 *  <h5>获取标准表项目在表格上展示的tip内容</h5>
                 *  如果某字段需要提供特殊说明，可以实现该方法，对特定项目的字段设置tips
                 *  1、标准表渲染表格时触发，在默认实现执行完后进来。获取标准表项目在表格上展示的tip内容，当以项目名作为字段标题时，可以通过该接口给字段提供特殊说明，
                 *  框架会通过该方法将信息设置到字段控件的tips中。
                 *  <b>实现案例：</b>
                 *  <pre><code>
                 *  public void onGetSalaryStdItemTips(OnGetItemTipsEvent evt) {
                 *      if(evt.getItemEntity().getItemIdentity() == 1000000000001L){
                 *          evt.setTips(ResManager.loadKDString("根据“固薪合计/固薪占比”得出的合计值","SalaryStdGridTips_0","swc-hcdm-common"));
                 *       }
                 * }
                 *  </code></pre>
                 *  @param evt 提示信息获取事件
                 */
                onGetSalaryStdItemTips?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetItemTipsEvent):void;
                /**
                 * <h5>获取根据标准表实体获取特殊薪档列表</h5>
                 * 标准表第二步初始化时调用，在默认实现执行完后进来。获取到的特殊薪档会用来渲染表格字段、分组以及渲染显示方式。页面可以通过显示方式
                 * 开关控制特殊薪档列的展示或隐藏。实现者可以根据标准表的类型以及使用场景 来决定返回哪些特殊薪档集合，需要注意的是：
                 * (1)特殊薪档的顺序决定了字段渲染的顺序，也决定了显示方式中排列顺序，
                 * (2)薪档的名称决定了字段的名称和显示方式中的名称，因此可以调整薪档的名称在不同的标准表、使用场景下展示不同
                 * (3)特殊薪档的数据默认来源于实体hcdm_specialrank中的预置数据中审核、启用的数据，
                 * 实现者可通过调整预置数据来扩展，特殊情况下重写该方法执行特殊逻辑即可，该方法会先执行标品的默认实现，再执行扩展实现，因此参数中会携带默认的特殊档。
                 * <b>实现案例：</b>
                 * <pre><code>
                 * public void onGetSpecialRankList(OnGetSpecialRankEvent evt) {
                 *      DynamicObject[] result = queryAllSpecialRank();
                 *     //如果是薪点，则没有特殊薪档
                 *      if(type.equals(SalaryStandardTypeEnum.SALARYCOUNT)){
                 *          return new DynamicObject[0];
                 *      }
                 *      //如果是宽带，则根据使用类型返回
                 *      if(type.equals(SalaryStandardTypeEnum.BROADBAND)){
                 *          if(useScene == 2){
                 *              //如果用于设置字段数据，给递增系数名称追加（%），显示在字段标题上
                 *              for (DynamicObject object : result) {
                 *                  long id = object.getLong(SWCBaseConstants.ID);
                 *                  if(id == 1000000000002L){
                 *                      object.set("name",new LocaleString("name" + "(%)"));
                 *                  }
                 *              }
                 *              return result;
                 *          }
                 *          if(useScene == 1){
                 *              //如果用于显示参数，给将中位值移除
                 *              result = Arrays.stream(result).filter(o -> o.getLong(SWCBaseConstants.ID) != 1000000000001L).collect(Collectors.toList()).toArray(new DynamicObject[0]);
                 *              return result;
                 *          }
                 *      }
                 *          evt.setSpecialRankList(result);
                 * }
                 * </code></pre>
                 * @param evt 特殊薪档获取事件
                 */
                onGetSpecialRankList?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetSpecialRankEvent):void;
                /**
                 * <h5>获取根据标准表实体获取支持项目列表</h5>
                 * 1、标准表第二步初始化时调用，在默认实现执行完后进来。获取变量及预测类项目，取到的项目会用来渲染表格字段以及渲染显示方式，
                 * 一般变量及预测类项目会通过显示方式开关来展示和隐藏项目。实现者可以根据标准表的类型以及使用场景 来决定返回哪些项目集合，需要注意的是：
                 * (1)项目的顺序决定了字段渲染的顺序，也决定了显示方式中项目的展示顺序，
                 * (2)项目的名称决定了字段的名称和显示方式中的名称，因此可以调整项目的名称在不同的使用场景下展示不同
                 * (3)项目的数据默认来源于实体hcdm_varpredictitem中的预置数据中审核、启用的数据
                 * 2、实现者可通过调整预置数据来扩展，特殊情况下重写该方法执行特殊逻辑即可，该方法会先执行标品的默认实现，再执行扩展实现，因此参数中会携带默认的项目。
                 * 3、实现者需要将使用的预测及变量项目设置到varPredictItemList 属性中
                 * <b>实现案例：</b>
                 * <pre><code>
                 * 实现案例：
                 * public void onGetVarPredictItemList(OnGetVarPredictItemEvent evt) {
                 *     DynamicObject[] result = queryAllVarPredictItem();
                 *      if(useScene == "2"){ //如果用于设置数据，则字段标题要调整一下
                 *      //给固薪占比项目名称追加（%）
                 *          for (DynamicObject object : result) {
                 *              if(object.getLong(SWCBaseConstants.ID) == 1000000000001L){
                 *                  object.set("name",new LocaleString(object.getString("name")+("(%)")));
                 *              }
                 *          }
                 *      }
                 *     evt.setVarPredictItemList(result);
                 * }
                 * </code></pre>
                 * @param evt 预测及变量类项目获取事件
                 */
                onGetVarPredictItemList?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetVarPredictItemEvent):void;
            }
            type IStdTableExtPlugin_T = IStdTableExtPlugin_S & IStdTableExtPlugin$;
            interface IStdTableExtPlugin extends IStdTableExtPlugin_T {
            }
            interface IHcdmContrastPropExtPlugin_S {
            }
            interface IHcdmContrastPropExtPlugin$ {
                /**
                 * <h5>加载对照属性值</h5>
                 * <b>实现案例：</b>
                 * <pre><code>
                 * public void loadContrastPropValue(ContrastPropLoadEvent event) {
                 *         List<ContrastPropConfigEntity> propCfg = event.getPropCfgList()；
                 *         List<Long> fileIds = event.getAdjFileIdList()；
                 *         boolean isVersion = event.isVersion()；
                 *         Map<Long, Map<Long,Object>> propValues = event.getPropValues();
                 *         for (ContrastPropConfigEntity cfg : propCfg) {
                 *             switch (cfg.getNumber()){
                 *                 case "1000_S"://	职位体系方案
                 *                     for (Long fileId : fileIds) {
                 *                         DynamicObject job = fileIdToJobMap.get(fileId);
                 *                         if(job != null && job.getLong("jobscm.id") > 0){
                 *                             propValues.get(fileId).putIfAbsent(cfg.getId(),job.getLong("jobscm.id"));
                 *                         }
                 *                     }
                 *                     break;
                 *                 case "1010_S"://	职位序列
                 *                     for (Long fileId : fileIds) {
                 *                         DynamicObject job = fileIdToJobMap.get(fileId);
                 *                         if(job != null && job.getLong("jobseq.id") > 0){
                 *                             propValues.get(fileId).putIfAbsent(cfg.getId(),job.getLong("jobseq.id"));
                 *                         }
                 *                     }
                 *                     break;
                 *             }
                 *       }
                 * }
                 * </code></pre>
                 * @param contrastPropLoadEvent
                 */
                loadContrastPropValue?(contrastPropLoadEvent:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.ContrastPropLoadEvent):void;
                /**
                 * <h5>根据标准表信息，给每个对照属性返回自定义过滤条件</h5>
                 * 用来支持对照属性在f7打开或引入模板下载以及对照关系引入校验时，可以对实体进行状态、权限等数据范围的限制
                 * <b>实现案例：</b>
                 * <pre><code>
                 * public void onGetCustomerQFilter(OnGetCustomerQFilterEvent event) {
                 *         String scene = event.getScene();
                 *         switch (scene){
                 *             case "beforeF7Select":
                 *                 prepareQFilterForBeforeF7(event);
                 *                 break;
                 *             case "downloadTemplate":
                 *                 prepareQFilterForBeforeDownloadTplxxx(event);
                 *                 break;
                 *             case "importValidate":
                 *                 prepareQFilterForBeforeImportValidatexxx(event);
                 *                 break;
                 *             default:break;
                 *         }
                 *     }
                 *
                 *     private void prepareQFilterForBeforeF7(OnGetCustomerQFilterEvent event) {
                 *         for (ContrastPropConfigEntity configEntity : event.getPropCfgList()) {
                 *             ArrayList<QFilter> qFilters = Lists.newArrayList();
                 *
                 *             if(configEntity.getId().equals(1050L)){//	职级
                 *                 //查询职级方案的数据
                 *                 QFilter enableQfilter = new QFilter("enable", QFilter.equals, "1");
                 *                 QFilter statusQfilter = new QFilter("status", QFilter.equals, "C");
                 *                 QFilter curQfilter = new QFilter("iscurrentversion", QFilter.equals, "1");
                 *                 DynamicObject[] objects = BusinessDataServiceHelper.load(""hbjm_joblevelscmhr","id", new QFilter[]{enableQfilter, statusQfilter, curQfilter});
                 *                 Set<Long> scmIds = Arrays.stream(objects).map(o -> o.getLong("id")).collect(Collectors.toSet());
                 *                 qFilters.add(new QFilter("joblevelscm", QFilter.in, scmIds));
                 *             }
                 *             if(!qFilters.isEmpty()){
                 *                 event.getCustomerQFilter().put(configEntity.getId(),qFilters);
                 *             }
                 *         }
                 *     }
                 * </code></pre>
                 * @param evt
                 */
                onGetCustomerQFilter?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetCustomerQFilterEvent):void;
                /**
                 * <h5>获取标准表预览时，每个对照属性返回的自定义过滤</h5>
                 * 获取标准表预览时，每个对照属性返回的自定义过滤，用来在标准表预览时，过滤出指定范围的对照行
                 *
                 * <b>实现案例：</b>
                 * <pre><code>
                 *    public void onGetCustomerQFilterForStdPreview(OnGetCustomerQFilterEvent evt) {
                 *         Set<Long> propValueIds;
                 *         evt.getCustomerQFilter().put(1010L,Lists.newArrayList(new QFilter("id",QFilter.in,propValueIds)));
                 *     }
                 * </code></pre>
                 * @param evt 提示信息获取事件
                 */
                onGetCustomerQFilterForStdPreview?(evt:kd.sdk.swc.hcdm.business.extpoint.salarystd.event.OnGetCustomerQFilterEvent):void;
            }
            type IHcdmContrastPropExtPlugin_T = IHcdmContrastPropExtPlugin_S & IHcdmContrastPropExtPlugin$;
            interface IHcdmContrastPropExtPlugin extends IHcdmContrastPropExtPlugin_T {
            }
        }
        namespace kd.sdk.swc.hcdm.business.extpoint.salarystd.event{
            interface ContrastPropLoadEvent_S {
            }
            type ContrastPropLoadEvent_ST = $.java.util.EventObject & ContrastPropLoadEvent_S;
            interface ContrastPropLoadEvent_C extends ContrastPropLoadEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):ContrastPropLoadEvent;
            }
            interface ContrastPropLoadEvent$ {
                getAdjFileIdList():$.java.util.List;
                getPersonQueryParams():$.java.util.List;
                getPropCfgList():$.java.util.List;
                getPropValues():$.java.util.Map;
                isVersion():boolean;
                setAdjFileIdList(adjFileIdList:$.java.util.List):void;
                setPersonQueryParams(personQueryParams:$.java.util.List):void;
                setPropCfgList(propCfgList:$.java.util.List):void;
                setPropValues(propValues:$.java.util.Map):void;
                setVersion(version:boolean):void;
            }
            type ContrastPropLoadEvent_T = $.java.util.EventObject & ContrastPropLoadEvent_S & ContrastPropLoadEvent$;
            interface ContrastPropLoadEvent extends ContrastPropLoadEvent_T {
            }
            interface OnGetIntervalPropEvent_S {
            }
            type OnGetIntervalPropEvent_ST = $.java.util.EventObject & OnGetIntervalPropEvent_S;
            interface OnGetIntervalPropEvent_C extends OnGetIntervalPropEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):OnGetIntervalPropEvent;
            }
            interface OnGetIntervalPropEvent$ {
                getDisplayOnlySalaryCount():number;
                getIntervalPropList():$.java.util.List;
                getItemEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryStdItemEntity;
                getOriginalIntervalPropList():$.java.util.List;
                getSpecialRank():kd.sdk.swc.hcdm.common.stdtab.SalaryRankEntity;
                getStdBaseEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryStandardBaseEntity;
                setDisplayOnlySalaryCount(displayOnlySalaryCount:number):void;
                setIntervalPropList(intervalPropList:$.java.util.List):void;
                setItemEntity(itemEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryStdItemEntity):void;
                setOriginalIntervalPropList(originalIntervalPropList:$.java.util.List):void;
                setSpecialRank(specialRank:kd.sdk.swc.hcdm.common.stdtab.SalaryRankEntity):void;
                setStdBaseEntity(stdBaseEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryStandardBaseEntity):void;
            }
            type OnGetIntervalPropEvent_T = $.java.util.EventObject & OnGetIntervalPropEvent_S & OnGetIntervalPropEvent$;
            interface OnGetIntervalPropEvent extends OnGetIntervalPropEvent_T {
            }
            interface OnGetFieldParamEvent_S {
            }
            type OnGetFieldParamEvent_ST = $.java.util.EventObject & OnGetFieldParamEvent_S;
            interface OnGetFieldParamEvent_C extends OnGetFieldParamEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):OnGetFieldParamEvent;
            }
            interface OnGetFieldParamEvent$ {
                getFieldType():string;
                getFieldWidth():string;
                getItemEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryStdItemEntity;
                getRankEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryRankEntity;
                getSeq():number;
                getType():kd.sdk.swc.hcdm.common.stdtab.SalaryStandardTypeEnum;
                setFieldType(fieldType:string):void;
                setFieldWidth(fieldWidth:string):void;
                setItemEntity(itemEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryStdItemEntity):void;
                setRankEntity(rankEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryRankEntity):void;
                setSeq(seq:number):void;
                setType(type_arg:kd.sdk.swc.hcdm.common.stdtab.SalaryStandardTypeEnum):void;
            }
            type OnGetFieldParamEvent_T = $.java.util.EventObject & OnGetFieldParamEvent_S & OnGetFieldParamEvent$;
            interface OnGetFieldParamEvent extends OnGetFieldParamEvent_T {
            }
            interface OnGetItemRankEvent_S {
            }
            type OnGetItemRankEvent_ST = $.java.util.EventObject & OnGetItemRankEvent_S;
            interface OnGetItemRankEvent_C extends OnGetItemRankEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):OnGetItemRankEvent;
            }
            interface OnGetItemRankEvent$ {
                getItemEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryStdItemEntity;
                getRankEntities():$.java.util.List;
                getReturnDisplayRankList():$.java.util.List;
                getStdBaseEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryStandardBaseEntity;
                getUseType():string;
                setItemEntity(itemEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryStdItemEntity):void;
                setRankEntities(rankEntities:$.java.util.List):void;
                setReturnDisplayRankList(returnDisplayRankList:$.java.util.List):void;
                setStdBaseEntity(stdBaseEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryStandardBaseEntity):void;
                setUseType(useType:string):void;
            }
            type OnGetItemRankEvent_T = $.java.util.EventObject & OnGetItemRankEvent_S & OnGetItemRankEvent$;
            interface OnGetItemRankEvent extends OnGetItemRankEvent_T {
            }
            interface OnGetDefaultDisplayParamEvent_S {
            }
            type OnGetDefaultDisplayParamEvent_ST = $.java.util.EventObject & OnGetDefaultDisplayParamEvent_S;
            interface OnGetDefaultDisplayParamEvent_C extends OnGetDefaultDisplayParamEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):OnGetDefaultDisplayParamEvent;
            }
            interface OnGetDefaultDisplayParamEvent$ {
                getDisplayParam():kd.sdk.swc.hcdm.common.stdtab.DisplayParamNew;
                getStandardBaseEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryStandardBaseEntity;
                setDisplayParam(displayParam:kd.sdk.swc.hcdm.common.stdtab.DisplayParamNew):void;
                setStandardBaseEntity(standardBaseEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryStandardBaseEntity):void;
            }
            type OnGetDefaultDisplayParamEvent_T = $.java.util.EventObject & OnGetDefaultDisplayParamEvent_S & OnGetDefaultDisplayParamEvent$;
            interface OnGetDefaultDisplayParamEvent extends OnGetDefaultDisplayParamEvent_T {
            }
            interface StdTableCalculateEvent_S {
            }
            type StdTableCalculateEvent_ST = $.java.util.EventObject & StdTableCalculateEvent_S;
            interface StdTableCalculateEvent_C extends StdTableCalculateEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):StdTableCalculateEvent;
            }
            interface StdTableCalculateEvent$ {
                getCurrentData():kd.sdk.swc.hcdm.common.stdtab.SalaryStandardEntryData;
                getLastData():kd.sdk.swc.hcdm.common.stdtab.SalaryStandardEntryData;
                setCurrentData(currentData:kd.sdk.swc.hcdm.common.stdtab.SalaryStandardEntryData):void;
                setLastData(lastData:kd.sdk.swc.hcdm.common.stdtab.SalaryStandardEntryData):void;
            }
            type StdTableCalculateEvent_T = $.java.util.EventObject & StdTableCalculateEvent_S & StdTableCalculateEvent$;
            interface StdTableCalculateEvent extends StdTableCalculateEvent_T {
            }
            interface OnGetFieldLockStatusEvent_S {
            }
            type OnGetFieldLockStatusEvent_ST = $.java.util.EventObject & OnGetFieldLockStatusEvent_S;
            interface OnGetFieldLockStatusEvent_C extends OnGetFieldLockStatusEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):OnGetFieldLockStatusEvent;
            }
            interface OnGetFieldLockStatusEvent$ {
                getCalculationMethod():kd.sdk.swc.hcdm.common.stdtab.CalculationMethodEnum;
                getGridType():kd.sdk.swc.hcdm.common.stdtab.SalaryStdGridDisplayTypeEnum;
                getItemEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryStdItemEntity;
                getLockStatus():boolean;
                getRankEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryRankEntity;
                getSeq():number;
                getStdBaseEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryStandardBaseEntity;
                setCalculationMethod(calculationMethod:kd.sdk.swc.hcdm.common.stdtab.CalculationMethodEnum):void;
                setGridType(gridType:kd.sdk.swc.hcdm.common.stdtab.SalaryStdGridDisplayTypeEnum):void;
                setItemEntity(itemEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryStdItemEntity):void;
                setLockStatus(lockStatus:boolean):void;
                setRankEntity(rankEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryRankEntity):void;
                setSeq(seq:number):void;
                setStdBaseEntity(stdBaseEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryStandardBaseEntity):void;
            }
            type OnGetFieldLockStatusEvent_T = $.java.util.EventObject & OnGetFieldLockStatusEvent_S & OnGetFieldLockStatusEvent$;
            interface OnGetFieldLockStatusEvent extends OnGetFieldLockStatusEvent_T {
            }
            interface OnGetCustomerQFilterEvent_S {
            }
            type OnGetCustomerQFilterEvent_ST = $.java.util.EventObject & OnGetCustomerQFilterEvent_S;
            interface OnGetCustomerQFilterEvent_C extends OnGetCustomerQFilterEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):OnGetCustomerQFilterEvent;
            }
            interface OnGetCustomerQFilterEvent$ {
                getCustomerQFilter():$.java.util.Map;
                getPropCfgList():$.java.util.List;
                getScene():string;
                setCustomerQFilter(customerQFilter:$.java.util.Map):void;
                setPropCfgList(propCfgList:$.java.util.List):void;
                setScene(scene:string):void;
            }
            type OnGetCustomerQFilterEvent_T = $.java.util.EventObject & OnGetCustomerQFilterEvent_S & OnGetCustomerQFilterEvent$;
            interface OnGetCustomerQFilterEvent extends OnGetCustomerQFilterEvent_T {
            }
            interface CandContrastPropLoadEvent_S {
                getSerialVersionUID():long;
            }
            type CandContrastPropLoadEvent_ST = $.java.util.EventObject & CandContrastPropLoadEvent_S;
            interface CandContrastPropLoadEvent_C extends CandContrastPropLoadEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):CandContrastPropLoadEvent;
            }
            interface CandContrastPropLoadEvent$ {
                getCandidateToDysMap():$.java.util.Map;
                getPropCfg():$.java.util.List;
                getPropValues():$.java.util.Map;
                isVersion():boolean;
                setCandidateToDysMap(candidateToDysMap:$.java.util.Map):void;
                setPropCfg(propCfg:$.java.util.List):void;
                setPropValues(propValues:$.java.util.Map):void;
                setVersion(version:boolean):void;
            }
            type CandContrastPropLoadEvent_T = $.java.util.EventObject & CandContrastPropLoadEvent_S & CandContrastPropLoadEvent$;
            interface CandContrastPropLoadEvent extends CandContrastPropLoadEvent_T {
            }
            interface OnGetSpecialRankEvent_S {
            }
            type OnGetSpecialRankEvent_ST = $.java.util.EventObject & OnGetSpecialRankEvent_S;
            interface OnGetSpecialRankEvent_C extends OnGetSpecialRankEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):OnGetSpecialRankEvent;
            }
            interface OnGetSpecialRankEvent$ {
                getOriginalSpecialRankList():$.kd.bos.dataentity.entity.DynamicObject[];
                getSpecialRankList():$.kd.bos.dataentity.entity.DynamicObject[];
                getType():kd.sdk.swc.hcdm.common.stdtab.SalaryStandardTypeEnum;
                getUseScene():number;
                setOriginalSpecialRankList(originalSpecialRankList:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                setSpecialRankList(specialRankList:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                setType(type_arg:kd.sdk.swc.hcdm.common.stdtab.SalaryStandardTypeEnum):void;
                setUseScene(useScene:number):void;
            }
            type OnGetSpecialRankEvent_T = $.java.util.EventObject & OnGetSpecialRankEvent_S & OnGetSpecialRankEvent$;
            interface OnGetSpecialRankEvent extends OnGetSpecialRankEvent_T {
            }
            interface OnGetNumberConstraintEvent_S {
            }
            type OnGetNumberConstraintEvent_ST = $.java.util.EventObject & OnGetNumberConstraintEvent_S;
            interface OnGetNumberConstraintEvent_C extends OnGetNumberConstraintEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):OnGetNumberConstraintEvent;
            }
            interface OnGetNumberConstraintEvent$ {
                getDataScope():string;
                getItemEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryStdItemEntity;
                getPrecision():number;
                getRankEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryRankEntity;
                getScale():number;
                getSeq():number;
                getStdBaseEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryStandardBaseEntity;
                setDataScope(dataScope:string):void;
                setItemEntity(itemEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryStdItemEntity):void;
                setPrecision(precision:number):void;
                setRankEntity(rankEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryRankEntity):void;
                setScale(scale:number):void;
                setSeq(seq:number):void;
                setStdBaseEntity(stdBaseEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryStandardBaseEntity):void;
            }
            type OnGetNumberConstraintEvent_T = $.java.util.EventObject & OnGetNumberConstraintEvent_S & OnGetNumberConstraintEvent$;
            interface OnGetNumberConstraintEvent extends OnGetNumberConstraintEvent_T {
            }
            interface OnGetPreviewStyleEvent_S {
            }
            type OnGetPreviewStyleEvent_ST = $.java.util.EventObject & OnGetPreviewStyleEvent_S;
            interface OnGetPreviewStyleEvent_C extends OnGetPreviewStyleEvent_ST {
                new(source:any):OnGetPreviewStyleEvent;
            }
            interface OnGetPreviewStyleEvent$ {
                getDefaultPrivewStyle():kd.sdk.swc.hcdm.common.stdtab.PreviewStyleEnum;
                getIndex():string;
                getNeedHiddenPrivewStyleSet():$.java.util.Set;
                setDefaultPrivewStyle(defaultPrivewStyle:kd.sdk.swc.hcdm.common.stdtab.PreviewStyleEnum):void;
                setIndex(index:string):void;
                setNeedHiddenPrivewStyleSet(needHiddenPrivewStyleSet:$.java.util.Set):void;
            }
            type OnGetPreviewStyleEvent_T = $.java.util.EventObject & OnGetPreviewStyleEvent_S & OnGetPreviewStyleEvent$;
            interface OnGetPreviewStyleEvent extends OnGetPreviewStyleEvent_T {
            }
            interface OnGetVarPredictItemEvent_S {
            }
            type OnGetVarPredictItemEvent_ST = $.java.util.EventObject & OnGetVarPredictItemEvent_S;
            interface OnGetVarPredictItemEvent_C extends OnGetVarPredictItemEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):OnGetVarPredictItemEvent;
            }
            interface OnGetVarPredictItemEvent$ {
                getType():kd.sdk.swc.hcdm.common.stdtab.SalaryStandardTypeEnum;
                getUseScene():number;
                getVarPredictItemList():$.kd.bos.dataentity.entity.DynamicObject[];
                setType(type_arg:kd.sdk.swc.hcdm.common.stdtab.SalaryStandardTypeEnum):void;
                setUseScene(useScene:number):void;
                setVarPredictItemList(varPredictItemList:$.kd.bos.dataentity.entity.DynamicObject[]):void;
            }
            type OnGetVarPredictItemEvent_T = $.java.util.EventObject & OnGetVarPredictItemEvent_S & OnGetVarPredictItemEvent$;
            interface OnGetVarPredictItemEvent extends OnGetVarPredictItemEvent_T {
            }
            interface OnGetItemTipsEvent_S {
            }
            type OnGetItemTipsEvent_ST = $.java.util.EventObject & OnGetItemTipsEvent_S;
            interface OnGetItemTipsEvent_C extends OnGetItemTipsEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):OnGetItemTipsEvent;
            }
            interface OnGetItemTipsEvent$ {
                getItemEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryStdItemEntity;
                getStdBaseEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryStandardBaseEntity;
                getTips():string;
                setItemEntity(itemEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryStdItemEntity):void;
                setStdBaseEntity(stdBaseEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryStandardBaseEntity):void;
                setTips(tips:string):void;
            }
            type OnGetItemTipsEvent_T = $.java.util.EventObject & OnGetItemTipsEvent_S & OnGetItemTipsEvent$;
            interface OnGetItemTipsEvent extends OnGetItemTipsEvent_T {
            }
            interface OnGetOnlySalaryCountEvent_S {
            }
            type OnGetOnlySalaryCountEvent_ST = $.java.util.EventObject & OnGetOnlySalaryCountEvent_S;
            interface OnGetOnlySalaryCountEvent_C extends OnGetOnlySalaryCountEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):OnGetOnlySalaryCountEvent;
            }
            interface OnGetOnlySalaryCountEvent$ {
                getDisplayOnlySalaryCount():number;
                getIsUseSalaryCount():number;
                getType():kd.sdk.swc.hcdm.common.stdtab.SalaryStandardTypeEnum;
                setDisplayOnlySalaryCount(displayOnlySalaryCount:number):void;
                setIsUseSalaryCount(isUseSalaryCount:number):void;
                setType(type_arg:kd.sdk.swc.hcdm.common.stdtab.SalaryStandardTypeEnum):void;
            }
            type OnGetOnlySalaryCountEvent_T = $.java.util.EventObject & OnGetOnlySalaryCountEvent_S & OnGetOnlySalaryCountEvent$;
            interface OnGetOnlySalaryCountEvent extends OnGetOnlySalaryCountEvent_T {
            }
            interface OnGetFieldColumnWidthEvent_S {
            }
            type OnGetFieldColumnWidthEvent_ST = $.java.util.EventObject & OnGetFieldColumnWidthEvent_S;
            interface OnGetFieldColumnWidthEvent_C extends OnGetFieldColumnWidthEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):OnGetFieldColumnWidthEvent;
            }
            interface OnGetFieldColumnWidthEvent$ {
                getCalculationMethod():kd.sdk.swc.hcdm.common.stdtab.CalculationMethodEnum;
                getItemEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryStdItemEntity;
                getRankEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryRankEntity;
                getSeq():number;
                getStdBaseEntity():kd.sdk.swc.hcdm.common.stdtab.SalaryStandardBaseEntity;
                getWidthPx():number;
                setCalculationMethod(calculationMethod:kd.sdk.swc.hcdm.common.stdtab.CalculationMethodEnum):void;
                setItemEntity(itemEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryStdItemEntity):void;
                setRankEntity(rankEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryRankEntity):void;
                setSeq(seq:number):void;
                setStdBaseEntity(stdBaseEntity:kd.sdk.swc.hcdm.common.stdtab.SalaryStandardBaseEntity):void;
                setWidthPx(widthPx:number):void;
            }
            type OnGetFieldColumnWidthEvent_T = $.java.util.EventObject & OnGetFieldColumnWidthEvent_S & OnGetFieldColumnWidthEvent$;
            interface OnGetFieldColumnWidthEvent extends OnGetFieldColumnWidthEvent_T {
            }
        }
        namespace kd.sdk.swc.hcdm.business.mservice.helper{
            interface AdjConfirmBillServiceHelper_S {
                /**
                 * 下载调薪确认单
                 *
                 * @param parameterMap<String, Object> 参数集合,parameterMap的Key参数列表如下:
                 *        <p>
                 *        参数名称 参数 参数类型 是否必传
                 *        <p>
                 *        打印模板id printTemplateId String 否
                 *        <p>
                 *        是否需要填充数据 isFillDataFlag boolean 否
                 *        <p>
                 *        调薪确认人员对应主实体信息 dataRowMainMap Map<调薪确认人员id-String类型, Map<属性标识-String类型, 值>> 否
                 *        <p>
                 *        调薪确认人员对应项目信息 dataRowItemMap Map <调薪确认人员id-String类型, List< Map<属性标识-String类型, 值>>> 否
                 *        <p>
                 *        调薪确认模板对应调薪确认人员信息 adjConfirmTplAndPersonMap Map<调薪确认人员id-String类型, List<调薪确认人员id-Long类型>> 是
                 *        <p>
                 * @return Map<String, Object> {success=true, message=下载成功。, url=http:XXX}
                 */
                downloadAdjConfirmBill(parameterMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 打印调薪确认单
                 *
                 * @param parameterMap<String, Object> 参数集合,parameterMap的Key参数列表如下:
                 *        <p>
                 *        参数名称 参数 参数类型 是否必传
                 *        <p>
                 *        打印机id printerId String 是
                 *        <p>
                 *        打印模板id printTemplateId String 否
                 *        <p>
                 *        是否需要填充数据 isFillDataFlag boolean 否
                 *        <p>
                 *        调薪确认人员对应主实体信息 dataRowMainMap Map<调薪确认人员id-String类型, Map<属性标识-String类型, 值>> 否
                 *        <p>
                 *        调薪确认人员对应项目信息 dataRowItemMap Map <调薪确认人员id-String类型, List< Map<属性标识-String类型, 值>>> 否
                 *        <p>
                 *        调薪确认模板对应调薪确认人员信息 adjConfirmTplAndPersonMap Map<调薪确认人员id-String类型, List<调薪确认人员id-Long类型>> 是
                 *        <p>
                 * @return Map<String, Object> {success=true, message=打印成功，请去打印机查看。, url=""}
                 */
                printAdjConfirmBill(parameterMap:$.java.util.Map):$.java.util.Map;
            }
            interface AdjConfirmBillServiceHelper_C extends AdjConfirmBillServiceHelper_S {
                new():AdjConfirmBillServiceHelper;
            }
            interface AdjConfirmBillServiceHelper$ {
            }
            type AdjConfirmBillServiceHelper_T = AdjConfirmBillServiceHelper_S & AdjConfirmBillServiceHelper$;
            interface AdjConfirmBillServiceHelper extends AdjConfirmBillServiceHelper_T {
            }
            interface SalaryStdServiceHelper_S {
                /**
                 * 根据标准表id获取对照属性(包含应用范围)
                 * @param stdTableIdList 标准表id集合
                 * @return key:标准表id,value: 对照属性实体
                 */
                getContrastProp(stdTableIdList:$.java.util.List):$.java.util.Map;
                /**
                 * 根据标准表和对照属性及金额匹配薪等薪档范围
                 * @param params
                 * @return key:uniqueCode,value:标准表匹配薪等薪档结果实体
                 */
                matchTableRange(params:$.java.util.List):$.java.util.Map;
            }
            interface SalaryStdServiceHelper_C extends SalaryStdServiceHelper_S {
                new():SalaryStdServiceHelper;
            }
            interface SalaryStdServiceHelper$ {
            }
            type SalaryStdServiceHelper_T = SalaryStdServiceHelper_S & SalaryStdServiceHelper$;
            interface SalaryStdServiceHelper extends SalaryStdServiceHelper_T {
            }
            interface AdjFileInfoServiceHelper_S {
                /**
                 * @param uuid       如果进行了分批调用，相同批次的数据uuid维持一致。
                 * @param endOperate 是否完成全部传输
                 * @param paramsList Map整体代表一个要废弃的定调薪档案对象
                 * @return
                 */
                abandonAdjFile(uuid:string,endOperate:boolean,paramsList:$.java.util.List):$.java.util.Map;
                /**
                 * 获取对应档案下项目的最大日期
                 * 调薪申请单保存时需要大于上一次项目的可用版本的最大生效日期
                 * 业务使用场景：保证项目的版本切割往后切割。
                 *
                 * @param fileItemIdMap
                 * @return
                 */
                getMaxDateByFileAndItemId(fileItemIdMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 定薪类型时，根据档案id获取该档案下最大的日期
                 * 判断逻辑：1. 该档案下若没有定调薪信息且档案基本信息没有发生禁用过时，则返回系统最早生效日期
                 * 2.档案下有定调薪信息，档案生效中版本之前发生过禁用版本，则返回档案失效日期+1 和定调薪信息中的最大可用版本生效日期的最大值
                 * 业务使用场景：保证项目的版本切割往后切割。如：当发起定薪类型的定薪申请单时，项目的生效日期要大于该档案下的最大生效日期
                 *
                 * @param fileBOIds 档案BOID集合
                 * @return
                 */
                getMaxDateByFileBOId(fileBOIds:$.java.util.Set):$.java.util.Map;
                /**
                 * 生成或更新定调薪档案（包括定调薪信息），定调薪数据信息同步等
                 *
                 * @param paramsList 定调薪档案信息集合
                 * @return {data:[{档案信息}],"success"：true/false，"message":消息提示}
                 */
                saveAdjFile(uuid:string,endOperate:boolean,paramsList:$.java.util.List):$.java.util.Map;
                /**
                 * 按照入参指定切割规则进行定调薪信息数据的版本切割，入参为项目维度
                 * 此接口适用于单个单据下的大数据量要归档定调薪信息
                 * @param uuid    如果进行了分批调用，相同批次的数据uuid维持一致。
                 * @param endOperate  是否完成全部传输
                 * @param paramsList 定调薪项目对象
                 * @return
                 */
                saveBatchDecAdjData(uuid:string,endOperate:boolean,paramsList:$.java.util.List):$.java.util.Map;
                /**
                 * 定调薪记录原子化接口，对入参项目进行版本变更或版本切断操作，适用于大数据场景下的分批操作
                 *
                 *  @param uuid       如果进行了分批调用，相同批次的数据uuid维持一致。
                 *  @param endOperate 是否完成全部传输，是：结束事件并将定调薪数据进行推送算薪，否：生成同步批次，未推送算薪
                 *  @param paramsList Map整体代表项目维度入参
                 *  @return
                 */
                saveBatchDecAdjRecord(uuid:string,endOperate:boolean,paramsList:$.java.util.List):$.java.util.Map;
                /**
                 * 按照入参指定切割规则进行定调薪信息数据的版本切割，入参为项目维度
                 *
                 * @param paramsList 项目维度入参集合
                 * @return {data:[{项目信息}],"success"：true/false，"message":消息提示}
                 */
                saveDecAdjData(paramsList:$.java.util.List):$.java.util.Map;
                /**
                 * 定调薪记录原子化接口，对入参项目进行版本变更或版本切断操作
                 *
                 * @param paramsList 项目数据集
                 * @return
                 */
                saveDecAdjRecord(paramsList:$.java.util.List):$.java.util.Map;
                /**
                 * @param uuid       如果进行了分批调用，相同批次的数据uuid维持一致。
                 * @param endOperate 是否完成全部传输
                 * @param paramsList Map整体代表一个要失效的定调薪档案对象
                 * @return
                 */
                unableAdjFile(uuid:string,endOperate:boolean,paramsList:$.java.util.List):$.java.util.Map;
            }
            interface AdjFileInfoServiceHelper_C extends AdjFileInfoServiceHelper_S {
                new():AdjFileInfoServiceHelper;
            }
            interface AdjFileInfoServiceHelper$ {
            }
            type AdjFileInfoServiceHelper_T = AdjFileInfoServiceHelper_S & AdjFileInfoServiceHelper$;
            interface AdjFileInfoServiceHelper extends AdjFileInfoServiceHelper_T {
            }
            interface AdjConfirmTplServiceHelper_S {
                /**
                 * 查询调薪确认模板相关信息集合
                 *
                 * @param adjConfirmTplQueryFields 调薪确认模板字段属性集合
                 * @param qFilters 过滤器
                 * @param orderBys 排序
                 * @return 调薪确认模板集合
                 */
                getAdjConfirmTplInfos(adjConfirmTplQueryFields:$.java.util.List,qFilters:$.kd.bos.orm.query.QFilter[],orderBys:string):$.java.util.List;
            }
            interface AdjConfirmTplServiceHelper_C extends AdjConfirmTplServiceHelper_S {
                new():AdjConfirmTplServiceHelper;
            }
            interface AdjConfirmTplServiceHelper$ {
            }
            type AdjConfirmTplServiceHelper_T = AdjConfirmTplServiceHelper_S & AdjConfirmTplServiceHelper$;
            interface AdjConfirmTplServiceHelper extends AdjConfirmTplServiceHelper_T {
            }
        }
        namespace kd.sdk.swc.hcdm.common.stdtab{
            enum VarPredictItemType {
                predict,
                variable
            }
            enum SalaryStdGridDisplayTypeEnum {
                GROUPITEMS,
                GROUPRANK,
                TABULAR
            }
            interface StdTableDataQueryParam_S {
            }
            type StdTableDataQueryParam_ST = $.java.io.Serializable & StdTableDataQueryParam_S;
            interface StdTableDataQueryParam_C extends StdTableDataQueryParam_ST {
                new():StdTableDataQueryParam;
            }
            interface StdTableDataQueryParam$ {
                getGradeId():long;
                getGradeNextOffset():number;
                getGradePreOffset():number;
                getItemId():long;
                getNeedRankType():string;
                getStdTabId():long;
                getUnionId():string;
                getVarPredictItemId():long;
                setGradeId(gradeId:long):void;
                setGradeNextOffset(gradeNextOffset:number):void;
                setGradePreOffset(gradePreOffset:number):void;
                setItemId(itemId:long):void;
                setNeedRankType(needRankType:string):void;
                setStdTabId(stdTabId:long):void;
                setUnionId(unionId:string):void;
                setVarPredictItemId(varPredictItemId:long):void;
            }
            type StdTableDataQueryParam_T = $.java.io.Serializable & StdTableDataQueryParam_S & StdTableDataQueryParam$;
            interface StdTableDataQueryParam extends StdTableDataQueryParam_T {
            }
            interface SalaryStdItemEntity_S {
            }
            type SalaryStdItemEntity_ST = $.java.io.Serializable & SalaryStdItemEntity_S;
            interface SalaryStdItemEntity_C extends SalaryStdItemEntity_ST {
                new():SalaryStdItemEntity;
                new(salaryStandardId:long,itemIdentity:long,itemIndex:number,salaryItemId:long,itemType:SalaryStandardTypeEnum,itemIsUseSalaryRank:number,itemIsUseSalaryCount:number):SalaryStdItemEntity;
            }
            interface SalaryStdItemEntity$ {
                getEntryid():long;
                getIsFixedItem():number;
                getItemIdentity():long;
                getItemIndex():number;
                getItemIsUseSalaryCount():number;
                getItemIsUseSalaryRank():number;
                getItemLabel():SalaryItemLabelEnum;
                getItemName():string;
                getItemType():SalaryStandardTypeEnum;
                getSalaryItemId():long;
                getSalaryStandardId():long;
                getVarPredictItemType():VarPredictItemType;
                setEntryid(entryid:long):void;
                setIsFixedItem(isFixedItem:number):void;
                setItemIdentity(itemIdentity:long):void;
                setItemIndex(itemIndex:number):void;
                setItemIsUseSalaryCount(itemIsUseSalaryCount:number):void;
                setItemIsUseSalaryRank(itemIsUseSalaryRank:number):void;
                setItemLabel(itemLabel:SalaryItemLabelEnum):void;
                setItemName(itemName:string):void;
                setItemType(itemType:SalaryStandardTypeEnum):void;
                setSalaryItemId(salaryItemId:long):void;
                setSalaryStandardId(salaryStandardId:long):void;
                setVarPredictItemType(varPredictItemType:VarPredictItemType):void;
            }
            type SalaryStdItemEntity_T = $.java.io.Serializable & SalaryStdItemEntity_S & SalaryStdItemEntity$;
            interface SalaryStdItemEntity extends SalaryStdItemEntity_T {
            }
            interface ViewControlParam_S {
            }
            interface ViewControlParam_C extends ViewControlParam_S {
                new():ViewControlParam;
            }
            interface ViewControlParam$ {
                getCanEdit():number;
                setCanEdit(canEdit:number):void;
            }
            type ViewControlParam_T = ViewControlParam_S & ViewControlParam$;
            interface ViewControlParam extends ViewControlParam_T {
            }
            interface SimpleStdRangeMatchResult_S {
            }
            interface SimpleStdRangeMatchResult_C extends SimpleStdRangeMatchResult_S {
                new():SimpleStdRangeMatchResult;
            }
            interface SimpleStdRangeMatchResult$ {
                getNoMatchProp():$.java.util.Map;
                getRangeData():$.java.util.Map;
                getStdTableVid():long;
                getUnionId():string;
                setNoMatchProp(noMatchProp:$.java.util.Map):void;
                setRangeData(rangeData:$.java.util.Map):void;
                setStdTableVid(stdTableVid:long):void;
                setUnionId(unionId:string):void;
            }
            type SimpleStdRangeMatchResult_T = SimpleStdRangeMatchResult_S & SimpleStdRangeMatchResult$;
            interface SimpleStdRangeMatchResult extends SimpleStdRangeMatchResult_T {
            }
            enum SalaryStandardTypeEnum {
                SALARYCOUNT,
                INTERVAL,
                BROADBAND
            }
            enum SalaryItemLabelEnum {
                STANDARD,
                FIXEDSALARYSCALE,
                SPECIAL,
                FIXEDSALARYTOTAL,
                TOTAL,
                UNFIXEDSALARYTOTAL
            }
            enum SalaryRankLabelEnum {
                STANDARD,
                SPECIAL,
                MEDIANVALUE,
                INCREASINGCOEFFICIENT,
                WIDTH,
                GEARDIFFERENCE,
                OVERLAP,
                ISOMETRIC
            }
            interface SalaryStandardEntryData_S {
                instance():SalaryStandardEntryData;
            }
            type SalaryStandardEntryData_ST = $.java.io.Serializable & SalaryStandardEntryData_S;
            interface SalaryStandardEntryData_C extends SalaryStandardEntryData_ST {
                new():SalaryStandardEntryData;
            }
            interface SalaryStandardEntryData$ {
                buildAppliedRange(appliedRangeEntities:$.java.util.List):this;
                buildBase(stdBaseEntity:SalaryStandardBaseEntity):this;
                buildContrastProp(contrastPropEntities:$.java.util.List):this;
                buildContrastRowData(contrastRowEntities:$.java.util.List):this;
                buildDisplayParamNew(displayParam:DisplayParamNew):this;
                buildDisplayParamProp(displayParamPropEntities:$.java.util.List):this;
                buildGrade(gradeEntities:$.java.util.List):this;
                buildIntervalProp(propEntities:$.java.util.List):this;
                buildItem(itemEntities:$.java.util.List):this;
                buildRank(rankEntities:$.java.util.List):this;
                buildStdData(stdDataEntities:$.java.util.List):this;
                buildStdDataStrs(stdDataStrs:$.java.util.Map):this;
                buildViewControlParam(param:ViewControlParam):this;
                getAppliedRangeEntities():$.java.util.List;
                getContrastPropEntities():$.java.util.List;
                getContrastRowEntities():$.java.util.List;
                getDisplayParam():DisplayParamNew;
                getDisplayParamPropEntities():$.java.util.List;
                getGradeEntities():$.java.util.List;
                getItemEntities():$.java.util.List;
                getPropEntities():$.java.util.List;
                getRankEntities():$.java.util.List;
                getStdBaseEntity():SalaryStandardBaseEntity;
                getStdDataEntities():$.java.util.List;
                getStdDataStrs():$.java.util.Map;
                getViewControlParam():ViewControlParam;
            }
            type SalaryStandardEntryData_T = $.java.io.Serializable & SalaryStandardEntryData_S & SalaryStandardEntryData$;
            interface SalaryStandardEntryData extends SalaryStandardEntryData_T {
            }
            interface SalaryRankEntity_S {
            }
            type SalaryRankEntity_ST = $.java.io.Serializable & SalaryRankEntity_S;
            interface SalaryRankEntity_C extends SalaryRankEntity_ST {
                new():SalaryRankEntity;
                new(rankIdentity:long,rankName:string,rankIsUserSet:number,id:long):SalaryRankEntity;
                new(salaryStandardId:long,rankIdentity:long,rankIndex:number,rankName:string,rankLabel:SalaryRankLabelEnum,rankIsUserSet:number,rankIsSysPreSet:number):SalaryRankEntity;
            }
            interface SalaryRankEntity$ {
                getId():long;
                getRankIdentity():long;
                getRankIndex():number;
                getRankIsSysPreSet():number;
                getRankIsUserSet():number;
                getRankLabel():SalaryRankLabelEnum;
                getRankName():string;
                getRankNumber():string;
                getSalaryStandardId():long;
                setId(id:long):void;
                setRankIdentity(rankIdentity:long):void;
                setRankIndex(rankIndex:number):void;
                setRankIsSysPreSet(rankIsSysPreSet:number):void;
                setRankIsUserSet(rankIsUserSet:number):void;
                setRankLabel(rankLabel:SalaryRankLabelEnum):void;
                setRankName(rankName:string):void;
                setRankNumber(rankNumber:string):void;
                setSalaryStandardId(salaryStandardId:long):void;
            }
            type SalaryRankEntity_T = $.java.io.Serializable & SalaryRankEntity_S & SalaryRankEntity$;
            interface SalaryRankEntity extends SalaryRankEntity_T {
            }
            interface SalaryStandardBaseEntity_S {
                getSerialversionuid():long;
            }
            type SalaryStandardBaseEntity_ST = $.java.io.Serializable & SalaryStandardBaseEntity_S;
            interface SalaryStandardBaseEntity_C extends SalaryStandardBaseEntity_ST {
                new():SalaryStandardBaseEntity;
            }
            interface SalaryStandardBaseEntity$ {
                getCalcMethod():CalculationMethodEnum;
                getCountryId():long;
                getCurrencyEntity():CurrencyEntity;
                getCurrencyId():long;
                getFrequencyId():long;
                getGradeRankSeqMapEntity():GradeRankSeqMapEntity;
                getId():long;
                getIsUseSalaryCount():number;
                getIsUseSalaryRank():number;
                getJobScmId():long;
                getMonetaryUnit():string;
                getSalaryCountAmount():$.java.math.BigDecimal;
                getType():SalaryStandardTypeEnum;
                isUseSalaryCount():boolean;
                isUseSalaryRank():boolean;
                setCalcMethod(calcMethod:CalculationMethodEnum):void;
                setCountryId(countryId:long):void;
                setCurrencyEntity(currencyEntity:CurrencyEntity):void;
                setCurrencyId(currencyId:long):void;
                setFrequencyId(frequencyId:long):void;
                setGradeRankSeqMapEntity(gradeRankSeqMapEntity:GradeRankSeqMapEntity):void;
                setId(id:long):void;
                setIsUseSalaryCount(isUseSalaryCount:number):void;
                setIsUseSalaryRank(isUseSalaryRank:number):void;
                setJobScmId(jobScmId:long):void;
                setMonetaryUnit(monetaryUnit:string):void;
                setSalaryCountAmount(salaryCountAmount:$.java.math.BigDecimal):void;
                setType(type_arg:SalaryStandardTypeEnum):void;
            }
            type SalaryStandardBaseEntity_T = $.java.io.Serializable & SalaryStandardBaseEntity_S & SalaryStandardBaseEntity$;
            interface SalaryStandardBaseEntity extends SalaryStandardBaseEntity_T {
            }
            interface StdRangeNameFormatParam_S {
            }
            type StdRangeNameFormatParam_ST = $.java.io.Serializable & StdRangeNameFormatParam_S;
            interface StdRangeNameFormatParam_C extends StdRangeNameFormatParam_ST {
                new():StdRangeNameFormatParam;
            }
            interface StdRangeNameFormatParam$ {
                getRangeData():$.java.util.Map;
                getStdTableId():long;
                getUnionId():string;
                isSplitWithGradeName():boolean;
                isUseRank():boolean;
                setRangeData(rangeData:$.java.util.Map):void;
                setSplitWithGradeName(splitWithGradeName:boolean):void;
                setStdTableId(stdTableId:long):void;
                setUnionId(unionId:string):void;
                setUseRank(useRank:boolean):void;
            }
            type StdRangeNameFormatParam_T = $.java.io.Serializable & StdRangeNameFormatParam_S & StdRangeNameFormatParam$;
            interface StdRangeNameFormatParam extends StdRangeNameFormatParam_T {
            }
            enum CalculationMethodEnum {
                GRADE_RANK,
                MEDIAN_WIDTH,
                MEDIAN_GEAR
            }
            enum PreviewStyleEnum {
                LIST,
                PREVIEW,
                LISTSECOND
            }
            interface DisplayParamNew_S {
            }
            type DisplayParamNew_ST = $.java.io.Serializable & DisplayParamNew_S;
            interface DisplayParamNew_C extends DisplayParamNew_ST {
                new():DisplayParamNew;
            }
            interface DisplayParamNew$ {
                getDisplayGradeStyle():number;
                getDisplayOnlySalaryCount():number;
                getDisplaySalaryGradeSort():number;
                getDisplaySalaryRankSort():number;
                getItemLevelParam():$.java.util.LinkedHashMap;
                /**
                 * 根据id获取Item级的value
                 *
                 * @param id
                 * @return
                 */
                getItemLevelValueById(id:long):number;
                getRankLevelParam():$.java.util.LinkedHashMap;
                /**
                 * 根据id获取Rank级的value
                 *
                 * @param id
                 * @return
                 */
                getRankLevelValueById(id:long):number;
                getSalaryStandardEntryData():SalaryStandardEntryData;
                setDisplayGradeStyle(displayGradeStyle:number):void;
                setDisplayOnlySalaryCount(displayOnlySalaryCount:number):void;
                setDisplaySalaryGradeSort(displaySalaryGradeSort:number):void;
                setDisplaySalaryRankSort(displaySalaryRankSort:number):void;
                setItemLevelParam(itemLevelParam:$.java.util.LinkedHashMap):void;
                /**
                 * 根据id设置Item级的value
                 *
                 * @param id
                 * @return
                 */
                setItemLevelValueById(id:long,value:number):void;
                setRankLevelParam(rankLevelParam:$.java.util.LinkedHashMap):void;
                /**
                 * 根据id设置Rank级的value
                 *
                 * @param id
                 * @return
                 */
                setRankLevelValueById(id:long,value:number):void;
                setSalaryStandardEntryData(salaryStandardEntryData:SalaryStandardEntryData):void;
            }
            type DisplayParamNew_T = $.java.io.Serializable & DisplayParamNew_S & DisplayParamNew$;
            interface DisplayParamNew extends DisplayParamNew_T {
            }
            interface SimpleStdRangeMatchParam_S {
            }
            type SimpleStdRangeMatchParam_ST = $.java.io.Serializable & SimpleStdRangeMatchParam_S;
            interface SimpleStdRangeMatchParam_C extends SimpleStdRangeMatchParam_ST {
                new():SimpleStdRangeMatchParam;
            }
            interface SimpleStdRangeMatchParam$ {
                getBsed():Date;
                getPropInfo():$.java.util.Map;
                getStdTableId():long;
                getUnionId():string;
                setBsed(bsed:Date):void;
                setPropInfo(propInfo:$.java.util.Map):void;
                setStdTableId(stdTableId:long):void;
                setUnionId(unionId:string):void;
            }
            type SimpleStdRangeMatchParam_T = $.java.io.Serializable & SimpleStdRangeMatchParam_S & SimpleStdRangeMatchParam$;
            interface SimpleStdRangeMatchParam extends SimpleStdRangeMatchParam_T {
            }
            interface CurrencyEntity_S {
            }
            interface CurrencyEntity_C extends CurrencyEntity_S {
                new():CurrencyEntity;
                new(id:long,number_arg:string,name:string):CurrencyEntity;
                new(id:long,number_arg:string,name:string,sign:string):CurrencyEntity;
            }
            interface CurrencyEntity$ {
                getAmtPrecision():number;
                getId():long;
                getName():string;
                getNumber():string;
                getSign():string;
                setAmtPrecision(amtPrecision:number):void;
                setId(id:long):void;
                setName(name:string):void;
                setNumber(number_arg:string):void;
                setSign(sign:string):void;
            }
            type CurrencyEntity_T = CurrencyEntity_S & CurrencyEntity$;
            interface CurrencyEntity extends CurrencyEntity_T {
            }
            interface GradeRankSeqMapEntity_S {
            }
            type GradeRankSeqMapEntity_ST = $.java.io.Serializable & GradeRankSeqMapEntity_S;
            interface GradeRankSeqMapEntity_C extends GradeRankSeqMapEntity_ST {
                new():GradeRankSeqMapEntity;
            }
            interface GradeRankSeqMapEntity$ {
                getDbValue():string;
                getGradeSeqMap():$.java.util.Map;
                getRankSeqMap():$.java.util.Map;
                setDbValue(dbValue:string):void;
                setGradeSeqMap(gradeSeqMap:$.java.util.Map):void;
                setRankSeqMap(rankSeqMap:$.java.util.Map):void;
            }
            type GradeRankSeqMapEntity_T = $.java.io.Serializable & GradeRankSeqMapEntity_S & GradeRankSeqMapEntity$;
            interface GradeRankSeqMapEntity extends GradeRankSeqMapEntity_T {
            }
        }
        namespace kd.sdk.swc.hcdm.service.spi{
            interface AdjFileInfoService_S {
                get():AdjFileInfoService;
            }
            interface AdjFileInfoService$ {
                /**
                 * @param uuid       如果进行了分批调用，相同批次的数据uuid维持一致。
                 * @param endOperate 是否完成全部传输
                 * @param paramsList Map整体代表一个要废弃的定调薪档案对象
                 * @return
                 */
                abandonAdjFile?(uuid:string,endOperate:boolean,paramsList:$.java.util.List):$.java.util.Map;
                /**
                 * 按条件查询定调薪记录相关信息集合
                 *
                 * @param selectProperties 查询属性，基于查询配置hcdm_salaryadjrecordquery
                 * @param qFilters        查询过滤条件，基于查询配置hcdm_salaryadjrecordquery，传入相关查询条件
                 * @param orderBys        排序条件，基于查询配置hcdm_salaryadjrecordquery，传入相关排序字段
                 * @param start           分页参数，开始行数
                 * @param limit           分页参数，每页行数，传入-1时不分页
                 * @return DynamicObjectCollection
                 */
                getDecAdjInfos?(selectProperties:$.java.util.List,qFilters:$.kd.bos.orm.query.QFilter[],orderBys:string,start:number,limit:number):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                /**
                 * 生成或更新定调薪档案（包括定调薪信息）
                 *
                 * @param paramsList 定调薪档案信息集合
                 * @return {data:[{档案信息}],"success"：true/false，"message":消息提示}
                 */
                saveAdjFile?(uuid:string,endOperate:boolean,paramsList:$.java.util.List):$.java.util.Map;
                /**
                 * 定调薪记录原子化接口，对入参项目进行版本变更或版本切断操作，适用于大数据场景下的分批操作
                 *
                 *  @param uuid       如果进行了分批调用，相同批次的数据uuid维持一致。
                 *  @param endOperate 是否完成全部传输，是：结束事件并将定调薪数据进行推送算薪，否：生成同步批次，未推送算薪
                 *  @param paramsList Map整体代表项目维度入参
                 *  @return
                 */
                saveBatchDecAdjRecord?(uuid:string,endOperate:boolean,paramsList:$.java.util.List):$.java.util.Map;
                /**
                 * 定调薪记录原子化接口，对入参项目进行版本变更或版本切断操作
                 *
                 * @param paramsList 项目数据集
                 * @return
                 */
                saveDecAdjRecord?(paramsList:$.java.util.List):$.java.util.Map;
                /**
                 * @param uuid       如果进行了分批调用，相同批次的数据uuid维持一致。
                 * @param endOperate 是否完成全部传输
                 * @param paramsList Map整体代表一个要失效的定调薪档案对象
                 * @return
                 */
                unableAdjFile?(uuid:string,endOperate:boolean,paramsList:$.java.util.List):$.java.util.Map;
            }
            type AdjFileInfoService_T = AdjFileInfoService_S & AdjFileInfoService$;
            interface AdjFileInfoService extends AdjFileInfoService_T {
            }
            interface SalaryStdQueryService_S {
                get():SalaryStdQueryService;
            }
            interface SalaryStdQueryService$ {
                /**
                 * 根据标准表+对照属性值匹配薪等薪档范围（有薪酬体系、薪酬结构）
                 *  @param params
                 *  @return
                 */
                batchMatchStdTableWithDepEmp?(params:$.java.util.List):$.java.util.List;
                /**
                 * 获取标准表下的对照属性和值
                 * @param stdTableIdList 标准表id集合
                 * @return key:标准表id,value: 对照属性实体
                 */
                getContrastProp?(stdTableIdList:$.java.util.List):$.java.util.Map;
                /**
                 * 获取标准表的薪等信息（名称、id、顺序号）
                 * 获取标准表的薪等信息，返回标准表中薪等的id、名称、薪等数据标识、顺序号信息，按顺序号递增
                 * @param stdTableIds 标准表id
                 * @return 薪等信息列表 key：stdTableId，value：薪等信息（包含id、名称、gradeIdentity、序号）
                 */
                getGradeInfo?(stdTableIds:$.java.util.Collection):$.java.util.Map;
                /**
                 * 获取标准表的薪档信息（名称、id、顺序号）
                 * 获取标准表的薪档信息，返回标准表中薪档的id、名称、薪档数据标识、顺序号信息，按顺序号递增
                 * @param stdTableIds 标准表id
                 * @return 薪档信息列表 key：stdTableId，value：薪档信息（包含id、名称、rankIdentity、序号）
                 */
                getRankInfo?(stdTableIds:$.java.util.Collection):$.java.util.Map;
                /**
                 * 根据标准表+定调薪项目获取是否启用薪档
                 * 获取标准表中每个项目是否启用了薪档,在薪点表中，会对部分项目启用薪档，部分不启用薪档，宽带表中所有项目都是启用薪档的。
                 * 业务上会根据此配置控制前端交互是否展示薪档，该接口返回每个项目是否启用薪档的标识
                 * @param stdItemMap key:标准表id，value：定调薪项目id集合
                 * @return 启用标识， key：标准表id，subKey：定调薪项目id，subValue：是否启用（False代表未启用）
                 */
                getSalaryItemUseRankFlag?(stdItemMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 根据薪等薪档范围ID获取薪等薪档范围名称
                 * 获取标准表的薪等薪档范围的格式化名称（如 1A~2B 这样的文本串）,在标准匹配接口中拿到的薪等薪档范围，如果需要进行格式化显示名称，需要调用该接口
                 * @param params
                 * @return key：unionId，value：薪等薪档范围名称（比如1A~2B）
                 */
                getStdRangeNameByRangeId?(params:$.java.util.List):$.java.util.Map;
                /**
                 * 根据标准表+薪等查金额、薪点数
                 * 获取标准表的第二步表格中指定项目中的表格数据，用于业务上自行查询金额或查询薪等薪档位置的场景，考虑到会存在大数据量问题，采用的offset机制按需返回需要的表格数据
                 * @param tableDataQueryParams 批量查询参数
                 * @return 标准表设置的表格数据 key：unionId，subKey：薪等id，subValue：当前薪等下所有档的数据（按薪档顺序从低到高，未启用薪档时只有一条数据，如果某个档没设置数据，则size会小于薪档数）
                 */
                getStdTableData?(tableDataQueryParams:$.java.util.List):$.java.util.Map;
                /**
                 * 根据标准表+对照属性值匹配薪等薪档范围（无薪酬体系、薪酬结构）
                 * 基于标准表第三步的对照关系设置，用传入的对照属性值进行匹配，将匹配行的薪等薪档范围合并后返回
                 * @param matchParams 批量匹配参数
                 * @return 匹配结果 key：unionId ，value：匹配结果
                 */
                matchRangeWithStdTableId?(matchParams:$.java.util.List):$.java.util.Map;
                /**
                 * 根据标准表和对照属性及金额匹配薪等薪档范围
                 * @param params
                 * @return key:uniqueCode,value:标准表匹配薪等薪档结果实体
                 */
                matchTableRange?(params:$.java.util.List):$.java.util.Map;
                /**
                 * 通过薪点或者金额查询所在标准表的薪等薪档位置
                 * @param params
                 * @return
                 */
                matchTableRangeBySalaryCountOrAmount?(params:$.java.util.List):$.java.util.List;
                /**
                 * 根据薪等+薪档查询对应在标准表中的金额、薪点数
                 * @param params
                 * @return
                 */
                queryAmountAndSalaryCount?(params:$.java.util.List):$.java.util.List;
            }
            type SalaryStdQueryService_T = SalaryStdQueryService_S & SalaryStdQueryService$;
            interface SalaryStdQueryService extends SalaryStdQueryService_T {
            }
        }
        namespace kd.sdk.swc.hpdi{
            interface SdkHpdiModule_S {
            }
            type SdkHpdiModule_ST = $.kd.sdk.module.Module & SdkHpdiModule_S;
            interface SdkHpdiModule_C extends SdkHpdiModule_ST {
                new():SdkHpdiModule;
            }
            interface SdkHpdiModule$ {
            }
            type SdkHpdiModule_T = $.kd.sdk.module.Module & SdkHpdiModule_S & SdkHpdiModule$;
            interface SdkHpdiModule extends SdkHpdiModule_T {
            }
        }
        namespace kd.sdk.swc.hpdi.business.extpoint.bizdatabill{
            interface IBizDataBillEntryExtService_S {
            }
            interface IBizDataBillEntryExtService$ {
                /**
                 *  在分录容器构造完成之后，可在此增加自定义扩展分录列
                 *
                 *  <pre><code>
                 *
                 *  public class BizDataBillEntryDemoExtService implements IBizDataBillEntryExtService {
                 *
                 *      //container参数-字段标识
                 *      private static final String  PARAM_KEY = "key";
                 *
                 *      //container参数-字段名
                 *      private static final String  PARAM_NAME = "name";
                 *
                 *      //container参数-是否锁定
                 *      private static final String  PARAM_LOCK = "lock";
                 *
                 *      //container参数-宽度
                 *      private static final String  PARAM_WIDTH = "width";
                 *
                 *      //container参数-对齐方式
                 *      private static final String  PARAM_TEXTALIGN = "textAlign";
                 *
                 *      //container参数-是否必输
                 *      private static final String  PARAM_MUSTINPUT = "mustInput";
                 *
                 *      //container参数-基础资料展示详情
                 *      private static final String  PARAM_VIEWDETAIL = "viewDetail";
                 *
                 *      //container参数-小数位限制
                 *      private static final String  PARAM_SCALELIMIT = "scaleLimit";
                 *
                 *      //container参数-最小日期
                 *      private static final String  PARAM_MINDATE = "minDate";
                 *
                 *      //container参数-最大日期
                 *      private static final String  PARAM_MAXDATE = "maxDate";
                 *
                 *      //container参数-基础资料标识
                 *      private static final String  PARAM_BASEENTITYID = "baseEntityId";
                 *
                 *      //container参数-基础资料-显示属性
                 *      private static final String  PARAM_DISPLAYPROP = "displayProp";
                 *
                 *      //container参数-下拉列表项
                 *      private static final String  PARAM_PAIRS = "pairs";
                 *
                 *      //container参数-数据类型
                 *      private static final String  PARAM_DATATYPE = "datatype";
                 *
                 *      //值类型：数字
                 *      private static final String  KEY_FIELDNUM = "1010_S";
                 *
                 *      //值类型：金额
                 *      private static final String  KEY_FIELDAMOUNT = "1020_S";
                 *
                 *      //值类型：文本
                 *      private static final String  KEY_FIELDTEXT = "1030_S";
                 *
                 *      //值类型：日期
                 *      private static final String  KEY_FIELDDATE = "1050_S";
                 *
                 *      //类型：基础数据
                 *      private static final String  KEY_FIELDBASEDATA = "BASEDATA";
                 *
                 *      //类型：下拉列表
                 *      private static final String  KEY_FIELDCOMBO = "COMBO";
                 *
                 *      public void afterAddFieldContainer(AfterAddFieldContainerEvent args) {
                 *
                 *          //"ywjextdemo1"
                 *          String oneColKey = "ywjextdemo1";
                 *          //"ywjextdemo2"
                 *          String twoColKey = "ywjextdemo2";
                 *
                 *         //案例是根据模板名称动态添加扩展列的实现。
                 *          //  如果扩展列是固定的，则直接按下面的设置即可，就不用那么多判断了。主要是设置FieldParamMaps、SelectProps、FieldRelationMap
                 *
                 *          Map<String, Object> customParams = args.getCustomParams();
                 *          Long bizItemGroupId = (Long) customParams.get("bizItemGroupId");
                 *
                 *          SWCDataServiceHelper bigHelper = new SWCDataServiceHelper("hsbs_bizitemgroup");
                 *          // 业务数据模板基础资料
                 *          DynamicObject bizItemGroup = bigHelper.queryOne(bizItemGroupId);
                 *
                 *          if(bizItemGroup == null){
                 *              //如果为空，则有2出调用，这时是为了查询数据、传递数据使用，使用的是selectProps和fieldRelationMap
                 *              // 且此时涉及的不仅仅是一个单据，所以将所有的字段都加上
                 *
                 *              //增加查询字段，若是业务数据分录基础资料本身的字段可不写，标品会自动加载。
                 *              args.getSelectProps().add(oneColKey);
                 *              args.getSelectProps().add(twoColKey);
                 *
                 *              return;
                 *          }
                 *
                 *          String name = bizItemGroup.getString("name");
                 *
                 *          if(name.contains(oneColKey)){
                 *              Map<String , Object> itemMap = new HashMap<>();
                 *
                 *              itemMap.put(PARAM_KEY, oneColKey);//小写
                 *              itemMap.put(PARAM_NAME, oneColKey + "-name"); //名称
                 *              itemMap.put(PARAM_LOCK, "view,submit,audit");//锁定性
                 *              itemMap.put(PARAM_MUSTINPUT, Boolean.TRUE);//是否必填
                 *              itemMap.put(PARAM_SCALELIMIT, 2);//小数位
                 *              itemMap.put(PARAM_WIDTH, "150"); //宽度
                 *              itemMap.put(PARAM_DATATYPE, KEY_FIELDTEXT); //数据类型-文本
                 *              itemMap.put(PARAM_MINDATE, SWCDateTimeUtils.format(new Date())); //最小日期和最晚日期需格式化为 yyyy-MM-dd HH:mm:ss
                 *              itemMap.put(PARAM_MAXDATE, SWCDateTimeUtils.format(SWCDateTimeUtils.getDateWithoutTime(2023, 12, 31))); //最晚日期
                 *
                 *              args.getFieldParamMaps().add(itemMap);
                 *
                 *              //增加查询字段，若是业务数据分录基础资料本身的字段可不写，标品会自动加载。
                 *              args.getSelectProps().add(oneColKey);
                 *
                 *              //增加映射字段，设置成一样即可，key:业务数据提报的分录字段标识，value:分录基础资料的字段标识，key->from
                 *              args.getFieldRelationMap().put(oneColKey, oneColKey);
                 *          }
                 *
                 *          if(name.contains(twoColKey)){
                 *              Map<String , Object> itemMap2 = new HashMap<>();
                 *
                 *              itemMap2.put(PARAM_KEY, twoColKey);//小写
                 *              itemMap2.put(PARAM_NAME, twoColKey + "-name"); //名称
                 *              itemMap2.put(PARAM_LOCK, "view,submit,audit");//锁定性
                 *              itemMap2.put(PARAM_MUSTINPUT, Boolean.FALSE);//是否必填
                 *              itemMap2.put(PARAM_SCALELIMIT, 2);//小数位
                 *              itemMap2.put(PARAM_WIDTH, "150"); //宽度
                 *              itemMap2.put(PARAM_DATATYPE, KEY_FIELDAMOUNT); //数据类型-金额
                 *
                 *              args.getFieldParamMaps().add(itemMap2);
                 *
                 *              args.getSelectProps().add(twoColKey);
                 *
                 *              args.getFieldRelationMap().put(twoColKey, twoColKey);
                 *          }
                 *
                 *      }
                 *
                 *  }
                 *
                 * </code></pre>
                 *
                 *  @param args 业务数据分录添加列参数; 返回信息均设置到入参中返回。
                 */
                afterAddFieldContainer?(args:kd.sdk.swc.hpdi.common.events.bizdatabill.AfterAddFieldContainerEvent):void;
                /**
                 * 新增提报-填充分录数据
                 */
                setAddEntryFieldValue?(args:kd.sdk.swc.hpdi.common.events.bizdatabill.BizDataAddEntryFieldArgs):void;
            }
            type IBizDataBillEntryExtService_T = IBizDataBillEntryExtService_S & IBizDataBillEntryExtService$;
            interface IBizDataBillEntryExtService extends IBizDataBillEntryExtService_T {
            }
        }
        namespace kd.sdk.swc.hpdi.business.extpoint.collarule{
            interface ICollaRuleExtService_S {
            }
            interface ICollaRuleExtService$ {
                /**
                 * 协作规则自定义结果配置实体扩展事件,可在此事件中增减支持配置自定义结果的实体编码
                 *
                 * 扩展代码示例：
                 * <pre><code>
                 * </code></pre>
                 *
                 * @param event 协作规则自定义结果配置实体扩展事件,可在此事件中增减支持配置自定义结果的实体编码
                 */
                afterGetCustomResult?(event:kd.sdk.swc.hpdi.common.events.collarule.AfterGetCustomResultEvent):void;
            }
            type ICollaRuleExtService_T = ICollaRuleExtService_S & ICollaRuleExtService$;
            interface ICollaRuleExtService extends ICollaRuleExtService_T {
            }
        }
        namespace kd.sdk.swc.hpdi.business.extpoint.msgreceive{
            interface ICollaReviseMsgExtService_S {
            }
            interface ICollaReviseMsgExtService$ {
                /**
                 *  薪酬业务事件日志新建后置处理扩展点，因为业务事件日志存在重试机制，所以此扩展场景的扩展代码需要自己保证实现的幂等性，避免出现异常数据。
                 *  扩展代码示例：
                 *  <pre><code>
                 * public class CollaMsgReceiveExtServiceImpl implements ICollaMsgReceiveExtServiceImpl {
                 *
                 *     public void afterReviseMsg(AfterReviseMsgEvent event) {
                 *         String entityNumber = event.getEntityNumber();
                 *         Map<String, Object> param = event.getParam();
                 *     }
                 * }
                 *  </code></pre>
                 *
                 *  @param event 人员信息修订后置扩展事件
                 */
                afterReviseMsg?(event:kd.sdk.swc.hpdi.common.events.msgreceive.AfterReviseMsgEvent):void;
            }
            type ICollaReviseMsgExtService_T = ICollaReviseMsgExtService_S & ICollaReviseMsgExtService$;
            interface ICollaReviseMsgExtService extends ICollaReviseMsgExtService_T {
            }
        }
        namespace kd.sdk.swc.hpdi.business.mservice.helper{
            interface BizDataServiceHelper_S {
                /**
                 * 修改业务数据“推送算薪组织人”
                 *
                 * @param param 修改推送算薪组织人参数，业务数据识别号，企业人id，推送算薪组织人id
                 * @return 结果返回信息，分批处理，支持部分成功。
                 */
                changeDepemp(param:$.java.util.Map):$.java.util.Map;
                /**
                 * 保存业务数据
                 *
                 * @param param 业务数据各属性信息
                 * @return 结果返回信息，分批处理，支持部分成功。
                 */
                saveBizData(param:$.java.util.Map):$.java.util.Map;
            }
            interface BizDataServiceHelper_C extends BizDataServiceHelper_S {
                new():BizDataServiceHelper;
            }
            interface BizDataServiceHelper$ {
            }
            type BizDataServiceHelper_T = BizDataServiceHelper_S & BizDataServiceHelper$;
            interface BizDataServiceHelper extends BizDataServiceHelper_T {
            }
        }
        namespace kd.sdk.swc.hpdi.business.msgreceive{
            interface ICollaMsgReceiveExtService_S {
            }
            interface ICollaMsgReceiveExtService$ {
                /**
                 * 业务事件日期消息内容解析后置处理事件，可以在这个事件中处理解析后的消息数据
                 *
                 * @param event 消息内容解析后置事件对象
                 */
                afterParseMsgContent?(event:kd.sdk.swc.hpdi.common.events.msgreceive.AfterParseMsgContentEvent):void;
                /**
                 *  薪酬业务事件日志新建后置处理扩展点，因为业务事件日志存在重试机制，所以此扩展场景的扩展代码需要自己保证实现的幂等性，避免出现异常数据。
                 *  扩展代码示例：
                 *  <pre><code>
                 * public class CollaMsgReceiveExtServiceDemoTrueImpl implements ICollaMsgReceiveExtService {
                 *
                 *     public void afterSaveReceiveMsg(AfterSaveReceiveMsgEvent event) {
                 *         Long msgReceiveId = event.getMsgReceiveId();
                 *         DynamicObject msgReceiveObject = BusinessDataServiceHelper.loadSingle(msgReceiveId, "hpdi_msgreceive",
                 *             "id,name,number,msgcontent,taskcreatestatus,errormsg");
                 *         try {
                 *             // 解析消息等自定义扩展逻辑
                 *             DynamicObject object = BusinessDataServiceHelper.newDynamicObject("kdtest_msgreceive_ext");
                 *             object.set("number", msgReceiveObject.getString("number"));
                 *             object.set("name", msgReceiveObject.getString("name"));
                 *             object.set("kdtest_msgreceive", msgReceiveObject);
                 *             object.set("enable", "1");
                 *             object.set("status", "C");
                 *             SaveServiceHelper.save(new DynamicObject[] {object});
                 *             // 更新业务事件日志状态为协作成功
                 *             msgReceiveObject.set("taskcreatestatus", "B");
                 *         } catch (Exception ex) {
                 *             // 若处理失败测回写错误消息
                 *             msgReceiveObject.set("taskcreatestatus", "C");
                 *             msgReceiveObject.set("errormsg", ex.getMessage());
                 *         }
                 *         // 更新业务事件日志状态
                 *         SaveServiceHelper.save(new DynamicObject[] {msgReceiveObject});
                 *         // 设置返回值
                 *         event.setResult(true);
                 *     }
                 * }
                 *  </code></pre>
                 *
                 *  @param event 业务事件日志后置扩展事件，result 为扩展埋点事件处理结果，是否继续执行标品逻辑，true-继续执行标品逻辑，false-不继续执行标品逻辑。
                 */
                afterSaveReceiveMsg?(event:kd.sdk.swc.hpdi.common.events.msgreceive.AfterSaveReceiveMsgEvent):void;
            }
            type ICollaMsgReceiveExtService_T = ICollaMsgReceiveExtService_S & ICollaMsgReceiveExtService$;
            interface ICollaMsgReceiveExtService extends ICollaMsgReceiveExtService_T {
            }
        }
        namespace kd.sdk.swc.hpdi.common.events.bizdata{
            interface BizDataTransSalaryArgs_S {
            }
            interface BizDataTransSalaryArgs_C extends BizDataTransSalaryArgs_S {
                new():BizDataTransSalaryArgs;
            }
            interface BizDataTransSalaryArgs$ {
                getBizDataList():$.java.util.List;
                getErrorMap():$.java.util.Map;
                getReturnBizDataList():$.java.util.List;
                setBizDataList(bizDataList:$.java.util.List):void;
                setErrorMap(errorMap:$.java.util.Map):void;
                setReturnBizDataList(returnBizDataList:$.java.util.List):void;
            }
            type BizDataTransSalaryArgs_T = BizDataTransSalaryArgs_S & BizDataTransSalaryArgs$;
            interface BizDataTransSalaryArgs extends BizDataTransSalaryArgs_T {
            }
            interface BizDataMatchSalaryFileArgs_S {
            }
            interface BizDataMatchSalaryFileArgs_C extends BizDataMatchSalaryFileArgs_S {
                new():BizDataMatchSalaryFileArgs;
            }
            interface BizDataMatchSalaryFileArgs$ {
                getBizDataList():$.java.util.List;
                getErrorMap():$.java.util.Map;
                setBizDataList(bizDataList:$.java.util.List):void;
                setErrorMap(errorMap:$.java.util.Map):void;
            }
            type BizDataMatchSalaryFileArgs_T = BizDataMatchSalaryFileArgs_S & BizDataMatchSalaryFileArgs$;
            interface BizDataMatchSalaryFileArgs extends BizDataMatchSalaryFileArgs_T {
            }
            interface BizDataBillEntryImportArgs_S {
            }
            interface BizDataBillEntryImportArgs_C extends BizDataBillEntryImportArgs_S {
                new():BizDataBillEntryImportArgs;
            }
            interface BizDataBillEntryImportArgs$ {
                getBizDataBill():$.kd.bos.dataentity.entity.DynamicObject;
                getColKeyIndexMap():$.java.util.Map;
                getDataRow():$.java.util.List;
                getEmpCol():$.kd.bos.dataentity.entity.DynamicObjectCollection;
                getEmpFilter():$.kd.bos.orm.query.QFilter;
                getErrorMap():$.java.util.Map;
                setBizDataBill(bizDataBill:$.kd.bos.dataentity.entity.DynamicObject):void;
                setColKeyIndexMap(colKeyIndexMap:$.java.util.Map):void;
                setDataRow(dataRow:$.java.util.List):void;
                setEmpCol(empCol:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
                setEmpFilter(empFilter:$.kd.bos.orm.query.QFilter):void;
                setErrorMap(errorMap:$.java.util.Map):void;
            }
            type BizDataBillEntryImportArgs_T = BizDataBillEntryImportArgs_S & BizDataBillEntryImportArgs$;
            interface BizDataBillEntryImportArgs extends BizDataBillEntryImportArgs_T {
            }
            interface BizDataHyperLinkClickArgs_S {
            }
            interface BizDataHyperLinkClickArgs_C extends BizDataHyperLinkClickArgs_S {
                new():BizDataHyperLinkClickArgs;
            }
            interface BizDataHyperLinkClickArgs$ {
                getArgs():$.kd.bos.form.events.HyperLinkClickArgs;
                getView():$.kd.bos.form.IFormView;
                setArgs(args:$.kd.bos.form.events.HyperLinkClickArgs):void;
                setView(view:$.kd.bos.form.IFormView):void;
            }
            type BizDataHyperLinkClickArgs_T = BizDataHyperLinkClickArgs_S & BizDataHyperLinkClickArgs$;
            interface BizDataHyperLinkClickArgs extends BizDataHyperLinkClickArgs_T {
            }
        }
        namespace kd.sdk.swc.hpdi.common.events.bizdatabill{
            interface BizDataAddEntryFieldArgs_S {
            }
            interface BizDataAddEntryFieldArgs_C extends BizDataAddEntryFieldArgs_S {
                new():BizDataAddEntryFieldArgs;
            }
            interface BizDataAddEntryFieldArgs$ {
                getBizDataBill():$.kd.bos.dataentity.entity.DynamicObject;
                getDataList():$.java.util.List;
                getDepempMappingList():$.java.util.List;
                setBizDataBill(bizDataBill:$.kd.bos.dataentity.entity.DynamicObject):void;
                setDataList(dataList:$.java.util.List):void;
                setDepempMappingList(depempMappingList:$.java.util.List):void;
            }
            type BizDataAddEntryFieldArgs_T = BizDataAddEntryFieldArgs_S & BizDataAddEntryFieldArgs$;
            interface BizDataAddEntryFieldArgs extends BizDataAddEntryFieldArgs_T {
            }
            interface AfterAddFieldContainerEvent_S {
            }
            interface AfterAddFieldContainerEvent_C extends AfterAddFieldContainerEvent_S {
                new():AfterAddFieldContainerEvent;
            }
            interface AfterAddFieldContainerEvent$ {
                getCustomParams():$.java.util.Map;
                getFieldAnnotation():$.java.util.Map;
                getFieldParamMaps():$.java.util.List;
                getFieldRelationMap():$.java.util.Map;
                getHideFields():$.java.util.List;
                getSelectProps():$.java.util.List;
                getStdFieldParamMaps():$.java.util.List;
                getTemplateWarningInfo():string;
                setCustomParams(customParams:$.java.util.Map):void;
                setFieldAnnotation(fieldAnnotation:$.java.util.Map):void;
                setFieldParamMaps(fieldParamMaps:$.java.util.List):void;
                setFieldRelationMap(fieldRelationMap:$.java.util.Map):void;
                setHideFields(hideFields:$.java.util.List):void;
                setSelectProps(selectProps:$.java.util.List):void;
                setStdFieldParamMaps(stdFieldParamMaps:$.java.util.List):void;
                setTemplateWarningInfo(templateWarningInfo:string):void;
            }
            type AfterAddFieldContainerEvent_T = AfterAddFieldContainerEvent_S & AfterAddFieldContainerEvent$;
            interface AfterAddFieldContainerEvent extends AfterAddFieldContainerEvent_T {
            }
        }
        namespace kd.sdk.swc.hpdi.common.events.collarule{
            interface AfterGetCustomResultEvent_S {
            }
            interface AfterGetCustomResultEvent_C extends AfterGetCustomResultEvent_S {
                new():AfterGetCustomResultEvent;
            }
            interface AfterGetCustomResultEvent$ {
                getEntitySet():$.java.util.Set;
                setEntitySet(entitySet:$.java.util.Set):void;
            }
            type AfterGetCustomResultEvent_T = AfterGetCustomResultEvent_S & AfterGetCustomResultEvent$;
            interface AfterGetCustomResultEvent extends AfterGetCustomResultEvent_T {
            }
        }
        namespace kd.sdk.swc.hpdi.common.events.msgreceive{
            interface AfterParseMsgContentEvent_S {
            }
            interface AfterParseMsgContentEvent_C extends AfterParseMsgContentEvent_S {
                new():AfterParseMsgContentEvent;
            }
            interface AfterParseMsgContentEvent$ {
                /**
                 * 获取事件中的业务事件日志解析后的数据
                 *
                 * @return 业务事件日志解析后的数据
                 */
                getMsgContentList():$.java.util.List;
                /**
                 * 获取扩展点处理结果
                 *
                 * @return 扩展点的处理结果
                 */
                getResult():$.java.util.List;
                /**
                 * 设置业务事件日志解析后的数据
                 *
                 * @param msgContentList 业务事件日志解析后的数据
                 */
                setMsgContentList(msgContentList:$.java.util.List):void;
                /**
                 * 设置扩展点的处理结果
                 *
                 * @param result 返回处理结果
                 */
                setResult(result:$.java.util.List):void;
            }
            type AfterParseMsgContentEvent_T = AfterParseMsgContentEvent_S & AfterParseMsgContentEvent$;
            interface AfterParseMsgContentEvent extends AfterParseMsgContentEvent_T {
            }
            interface AfterSaveReceiveMsgEvent_S {
            }
            interface AfterSaveReceiveMsgEvent_C extends AfterSaveReceiveMsgEvent_S {
                new():AfterSaveReceiveMsgEvent;
            }
            interface AfterSaveReceiveMsgEvent$ {
                /**
                 * 获取 业务事件日志ID
                 *
                 * @return 业务事件日志ID
                 */
                getMsgReceiveId():long;
                /**
                 * 获取结果数据
                 *
                 * @return 结果数据
                 */
                getResult():boolean;
                /**
                 * 设置业务事件日志ID
                 *
                 * @param msgReceiveId 业务事件日志ID
                 */
                setMsgReceiveId(msgReceiveId:long):void;
                /**
                 * 设置结果数据
                 *
                 * @param result 结果数据
                 */
                setResult(result:boolean):void;
            }
            type AfterSaveReceiveMsgEvent_T = AfterSaveReceiveMsgEvent_S & AfterSaveReceiveMsgEvent$;
            interface AfterSaveReceiveMsgEvent extends AfterSaveReceiveMsgEvent_T {
            }
            interface AfterReviseMsgEvent_S {
            }
            interface AfterReviseMsgEvent_C extends AfterReviseMsgEvent_S {
                new():AfterReviseMsgEvent;
            }
            interface AfterReviseMsgEvent$ {
                getEntityNumber():string;
                getParam():$.java.util.Map;
                setEntityNumber(entityNumber:string):void;
                setParam(param:$.java.util.Map):void;
            }
            type AfterReviseMsgEvent_T = AfterReviseMsgEvent_S & AfterReviseMsgEvent$;
            interface AfterReviseMsgEvent extends AfterReviseMsgEvent_T {
            }
        }
        namespace kd.sdk.swc.hpdi.formplugin.extpoint.bizdata{
            interface IBizDataBillEntryImportExtPlugin_S {
            }
            interface IBizDataBillEntryImportExtPlugin$ {
                /**
                 * 获取任职经历前添加过滤条件
                 *
                 * @param args 业务数据提报分录引入参数（empFilter）
                 */
                addFilterBeforeGetEmp?(args:kd.sdk.swc.hpdi.common.events.bizdata.BizDataBillEntryImportArgs):void;
                /**
                 * 读取excel数据后处理
                 *
                 * @param args 业务数据提报分录引入参数
                 */
                afterReadData?(args:kd.sdk.swc.hpdi.common.events.bizdata.BizDataBillEntryImportArgs):void;
                /**
                 * 设置下载引入模板的字段默认值
                 *
                 * @param args 业务数据提报分录引入参数（empCol）
                 */
                setFieldDefaultValue?(args:kd.sdk.swc.hpdi.common.events.bizdata.BizDataBillEntryImportArgs):void;
            }
            type IBizDataBillEntryImportExtPlugin_T = IBizDataBillEntryImportExtPlugin_S & IBizDataBillEntryImportExtPlugin$;
            interface IBizDataBillEntryImportExtPlugin extends IBizDataBillEntryImportExtPlugin_T {
            }
            interface IBizDataTransSalaryExtPlugin_S {
            }
            interface IBizDataTransSalaryExtPlugin$ {
                /**
                 * 业务数据推送算薪前，可在此更新”推送算薪组织人“，或者增加自定义校验拦截。
                 *
                 * <pre><code>
                 *
                 * public class BizDataTransSalaryExtDemoPlugin implements IBizDataTransSalaryExtPlugin {
                 *
                 *     //成功：ture，失败：false
                 *     private static final String KEY_SUCCESS = "success";
                 *
                 *     //错误信息
                 *     private static final String KEY_MESSAGE = "message";
                 *
                 *     //批次号
                 *     private static final String KEY_BATCHNUM = "batchnum";
                 *
                 *     //数据
                 *     private static final String KEY_DATA = "data";
                 *
                 *     //业务数据识别号
                 *     private static final String KEY_BIZDATACODE = "bizdatacode";
                 *
                 *     //企业人
                 *     private static final String KEY_EMPLOYEEID = "employeeid";
                 *
                 *     //组织人
                 *     private static final String KEY_DEPEMPID = "depempid";
                 *
                 *     //业务数据推送算薪前更新”推送算薪组织人“
                 *     public void beforeAddTransSalary(BizDataTransSalaryArgs args) {
                 *         List<DynamicObject> bizDatas = args.getBizDataList();
                 *         if (CollectionUtils.isEmpty(bizDatas)) {
                 *             return;
                 *         }
                 *
                 *         Map<String, Object> param = assembleParam(bizDatas);
                 *         List<Map<String, Object>> paramData = (List<Map<String, Object>>) param.get(KEY_DATA);
                 *         if (CollectionUtils.isEmpty(paramData)) {
                 *             return;
                 *         }
                 *         // 调用更新算发薪管理组织人接口
                 *         Map<String, Object> result = BizDataServiceHelper.changeDepemp(param);
                 *
                 *         //接口调用失败
                 *         if (!MapUtils.getBoolean(result, KEY_SUCCESS)) {
                 *             Map<Long, String> errorMap = new HashMap<>(bizDatas.size());
                 *             for (DynamicObject bizData : bizDatas) {
                 *                 errorMap.put(bizData.getLong(SWCBaseConstants.ID), MapUtils.getString(result, KEY_MESSAGE));
                 *             }
                 *             // errorMap用作更新业务数据为“推送算薪失败”状态，项目上按实际情况决定是否需要返回
                 *             args.setErrorMap(errorMap);
                 *             // returnBizDataList用作继续执行转算薪
                 *             // 这里表示校验失败时无需继续执行转算薪操作
                 *             args.setReturnBizDataList(null);
                 *             return;
                 *         }
                 *
                 *         // 返回业务数据
                 *         List<Map<String, Object>> returnData = (List<Map<String, Object>>) ((Map<String, Object>) result.get(KEY_DATA)).get(KEY_DATA);
                 *         // 更新“推送算薪组织人”失败的业务数据map
                 *         // key：bizdatacode  value：失败信息
                 *         Map<String, String> failMap = new HashMap<>(SWCBaseConstants.INITCAPACITY_HASHMAP);
                 *         // 更新“推送算薪组织人”失败的业务数据识别号集合
                 *         Set<String> changeFailBizDataCodes = new HashSet<>(SWCBaseConstants.INITCAPACITY_HSAHSET);
                 *         for (Map<String, Object> rMap : returnData) {
                 *             if (!((Boolean) rMap.getOrDefault(KEY_SUCCESS, Boolean.TRUE))) {
                 *                 changeFailBizDataCodes.add(MapUtils.getString(rMap, KEY_BIZDATACODE));
                 *                 failMap.put(MapUtils.getString(rMap, KEY_BIZDATACODE), MapUtils.getString(rMap, KEY_MESSAGE));
                 *             }
                 *         }
                 *
                 *         //全部更新成功
                 *         if (CollectionUtils.isEmpty(changeFailBizDataCodes)) {
                 *             // 无需修改业务数据为“推送算薪失败”
                 *             args.setErrorMap(null);
                 *             // 所有数据继续执行推送算薪
                 *             args.setReturnBizDataList(bizDatas);
                 *             return;
                 *         }
                 *
                 *         //部分更新成功
                 *         // 返回业务数据
                 *         List<DynamicObject> returnBizDataList = new ArrayList<>(SWCBaseConstants.INITCAPACITY_ARRAYLIST);
                 *         // 错误信息map， key：业务数据id，value：错误信息
                 *         Map<Long, String> errorMap = new HashMap<>(bizDatas.size());
                 *         for (DynamicObject bizData : bizDatas) {
                 *             // 更新失败记录错误信息
                 *             if (changeFailBizDataCodes.contains(bizData.getString(KEY_BIZDATACODE))) {
                 *                 errorMap.put(bizData.getLong(SWCBaseConstants.ID), failMap.get(bizData.getString(KEY_BIZDATACODE)));
                 *                 continue;
                 *             }
                 *
                 *             // 更新成功
                 *             returnBizDataList.add(bizData);
                 *         }
                 *         args.setErrorMap(errorMap);
                 *         args.setReturnBizDataList(returnBizDataList);
                 *     }
                 *
                 *     //组装更新业务数据推送算薪组织人接口入参
                 *     private Map<String, Object> assembleParam(List<DynamicObject> bizDatas) {
                 *         Map<String, Object> param = new HashMap<>(SWCBaseConstants.INITCAPACITY_HASHMAP);
                 *         param.put(KEY_BATCHNUM, "1111111111");  // 批次号，唯一
                 *
                 *         String key = ResManager.loadKDString("关方", "", "");
                 *         List<Map<String, Object>> data = new ArrayList<>(bizDatas.size());
                 *         for (DynamicObject bizData : bizDatas) {
                 *             String personName = bizData.getString("depemp.person.name");
                 *             // 推送算薪组织人名字包含“关方”，则更新组织人为“关方十号”
                 *             if (SWCStringUtils.isNotEmpty(personName) && !personName.contains(key)) {
                 *                 continue;
                 *             }
                 *             Map<String, Object> rec = new HashMap<>(SWCBaseConstants.INITCAPACITY_HASHMAP);
                 *             rec.put(KEY_BIZDATACODE, bizData.getString("bizdatacode"));
                 *             rec.put(KEY_EMPLOYEEID, bizData.getLong("depemp.employee.id"));
                 *             rec.put(KEY_DEPEMPID, 1399272555331728384L);  // 推送算薪组织人id，自定义取值来源；这里给默认值 关方十号：1399272555331728384
                 *             data.add(rec);
                 *         }
                 *         param.put(KEY_DATA, data);
                 *
                 *         return param;
                 *     }
                 * }
                 *
                 * </code></pre>
                 *
                 * @param args 业务数据推送算薪参数
                 */
                beforeAddTransSalary?(args:kd.sdk.swc.hpdi.common.events.bizdata.BizDataTransSalaryArgs):void;
            }
            type IBizDataTransSalaryExtPlugin_T = IBizDataTransSalaryExtPlugin_S & IBizDataTransSalaryExtPlugin$;
            interface IBizDataTransSalaryExtPlugin extends IBizDataTransSalaryExtPlugin_T {
            }
            interface IBizDataMatchSalaryFileExtPlugin_S {
            }
            interface IBizDataMatchSalaryFileExtPlugin$ {
                /**
                 * 匹配并设置业务数据的薪资档案
                 *
                 * @param args 业务数据匹配薪资档案参数
                 */
                matchAndSetSalaryFile?(args:kd.sdk.swc.hpdi.common.events.bizdata.BizDataMatchSalaryFileArgs):void;
            }
            type IBizDataMatchSalaryFileExtPlugin_T = IBizDataMatchSalaryFileExtPlugin_S & IBizDataMatchSalaryFileExtPlugin$;
            interface IBizDataMatchSalaryFileExtPlugin extends IBizDataMatchSalaryFileExtPlugin_T {
            }
            interface IBizDataListExtPlugin_S {
            }
            interface IBizDataListExtPlugin$ {
                /**
                 *  列表的超链接，可重写，打开指定的页面或者不打开。
                 *
                 *  对于通过接口入库的业务数据，在业务数据列表展示的时候，单据编号那一列，标品提供了超链接到提报单据，
                 *  而对于接口数据则无对应的单据，此时需要二开自己制定打开方案。
                 *
                 *  <pre><code>
                 *
                 *  public class BizDataListExtDemoPlugin implements IBizDataListExtPlugin {
                 *
                 *      public void billListHyperLinkClick(BizDataHyperLinkClickArgs args){
                 *
                 *          //必须先判断列名再写扩展代码，否则可能导致其他单元格的超链接也被覆盖。
                 *          // 若是单据编号字段
                 *          if (SWCStringUtils.equals(BizDataConstants.KEY_APPLY_NO, args.getArgs().getHyperLinkClickEvent().getFieldName())) {
                 *
                 *              IListView listView = (IListView) args.getView();
                 *              Long id = (Long) listView.getFocusRowPkId();
                 *
                 *              DynamicObject bizData = HPDIDataServiceHelper.HPDI_BIZDATA_HELPER.queryOne("submission", id);
                 *              if (SWCObjectUtils.isEmpty(bizData)) {
                 *                  args.getView().showErrorNotification(ResManager.loadKDString("关联单据不存在", "BizDataList_0", "swc-hpdi-formplugin"));
                 *                  return;
                 *              }
                 *
                 *              //若是数据集成的数据
                 *              if("1".equals(bizData.getString("submission"))){
                 *                  return;
                 *              }
                 *
                 *              //满足自定义的条件后，取消标品的连接，再打开自己的连接
                 *              args.getArgs().setCancel(true);
                 *
                 *              BaseShowParameter parameter = new BaseShowParameter();
                 *              parameter.setFormId(SWCEntityConstants.HPDI_BIZDATA);
                 *              parameter.setPkId(id);
                 *              parameter.getOpenStyle().setShowType(ShowType.Modal);
                 *              parameter.setStatus(OperationStatus.VIEW);
                 *              args.getView().showForm(parameter);
                 *          }
                 *
                 *      }
                 *  }
                 *
                 * </code></pre>
                 *
                 *  @param args 业务数据列表超链接参数；
                 *  @return 无出参，信息均设置到入参中返回。
                 */
                billListHyperLinkClick?(args:kd.sdk.swc.hpdi.common.events.bizdata.BizDataHyperLinkClickArgs):void;
            }
            type IBizDataListExtPlugin_T = IBizDataListExtPlugin_S & IBizDataListExtPlugin$;
            interface IBizDataListExtPlugin extends IBizDataListExtPlugin_T {
            }
        }
        namespace kd.sdk.swc.hsas{
            interface SdkHsasModule_S {
            }
            type SdkHsasModule_ST = $.kd.sdk.module.Module & SdkHsasModule_S;
            interface SdkHsasModule_C extends SdkHsasModule_ST {
                new():SdkHsasModule;
            }
            interface SdkHsasModule$ {
            }
            type SdkHsasModule_T = $.kd.sdk.module.Module & SdkHsasModule_S & SdkHsasModule$;
            interface SdkHsasModule extends SdkHsasModule_T {
            }
        }
        namespace kd.sdk.swc.hsas.business.extpoint.approve{
            interface IApproveBillExtService_S {
            }
            interface IApproveBillExtService$ {
                /**
                 *  @param event BankOfferExportSplitEvent
                 *
                 * <pre><code>
                 * public class CreateApproveBillSetValueTest implements IApproveBillExtService {
                 *      @Override
                 *      public void afterSetApproveBillData(CreateApproveBillSetValueEvent event) {
                 *          // 生成审批单关联核算任务id集合
                 *          List<Long> calTaskIdList = event.getCalTaskIdList();
                 *          // 审批单实体
                 *          DynamicObject approveBillDy = event.getApproveBillDy();
                 *          // 属性赋值
                 *          approveBillDy.set("billname",approveBillDy.getString("billname")+"_test");
                 *          approveBillDy.set("testvalue","test");
                 *      }
                 *  }
                 *  </code></pre>
                 */
                afterSetApproveBillData?(event:kd.sdk.swc.hsas.common.events.approve.CreateApproveBillSetValueEvent):void;
            }
            type IApproveBillExtService_T = IApproveBillExtService_S & IApproveBillExtService$;
            interface IApproveBillExtService extends IApproveBillExtService_T {
            }
        }
        namespace kd.sdk.swc.hsas.business.extpoint.attinteg{
            interface IAttIntegrateExtPlugin_S {
            }
            interface IAttIntegrateExtPlugin$ {
                /**
                 * <h5>创建完业务数据后执行，允许扩展干预业务数据的生成机制</h5>
                 * 此处针对单条考勤项目汇总数据 向  业务数据 转换，扩展时需要注意不要执行数据库相关IO操作
                 * <b>实现案例：</b>
                 * <pre><code>
                 *  public void afterCreateBizData(AfterCreateBizDataEvent evt){
                 *             DynamicObject originalBizData = evt.getBizData();
                 *             Map<String, Object> itemData = evt.getItemData();
                 *             //重新设置生效日期
                 *             Date startDate = new Date( Long.parseLong((String)itemData.get("startdate")));
                 *             originalBizData.set("bsed",startDate);
                 *         }
                 * </code></pre>
                 * @param evt 创建完业务数据后置事件
                 */
                afterCreateBizData?(evt:kd.sdk.swc.hsas.common.events.attinteg.AfterCreateBizDataEvent):void;
            }
            type IAttIntegrateExtPlugin_T = IAttIntegrateExtPlugin_S & IAttIntegrateExtPlugin$;
            interface IAttIntegrateExtPlugin extends IAttIntegrateExtPlugin_T {
            }
        }
        namespace kd.sdk.swc.hsas.business.extpoint.bizdata{
            interface IBizDataSynExtService_S {
            }
            interface IBizDataSynExtService$ {
                /**
                 *  前端业务数据同步数据服务增加业务数据扩展修改场景
                 *
                 *  <pre><code>
                 *  public class RecurBizDataPropDemoExtService implements IBizDataSynExtService {
                 *
                 *      public void afterBizDataList(AfterBizDataListEvent event){
                 *           List<DynamicObject> bizDataList = event.getBizDataList();
                 *           if(bizDataList == null || bizDataList.size() == 0) {
                 *               return;
                 *           }
                 *
                 *          // 获取循环项业务数据的业务项目id
                 *           List<Long> recurBizItemIdList = new ArrayList<Long>(bizDataList.size());
                 *           for (DynamicObject bizDataObj : bizDataList) {
                 *               String entityName = bizDataObj.getDynamicObjectType().getName();
                 *               if(SWCStringUtils.equals(entityName, SWCEntityConstants.HSAS_RECURBIZDATA)) {
                 *                   // 只处理循环项业务数据
                 *                   recurBizItemIdList.add(bizDataObj.getLong("bizitem"));
                 *               }
                 *          }
                 *
                 *          if(recurBizItemIdList.size() == 0) {
                 *              return;
                 *          }
                 *
                 *          // 通过循环项业务数据的业务项目id，查询业务项目多值属性信息
                 *          Map<Long, List<Map<String, Object>>> bizItemPropInfo = BizItemServiceHelper.getBizItemPropInfo(recurBizItemIdList);
                 *          if(bizItemPropInfo == null || bizItemPropInfo.size() == 0) {
                 *              return;
                 *          }
                 *
                 *          // 遍历业务数据，组装业务项目多值属性数据
                 *          for (DynamicObject bizDataObj : bizDataList) {
                 *              String entityName = bizDataObj.getDynamicObjectType().getName();
                 *              if(!SWCStringUtils.equals(entityName, SWCEntityConstants.HSAS_RECURBIZDATA)) {
                 *                  // 只处理循环项业务数据
                 *                  continue;
                 *              }
                 *
                 *              Long bizItemId = bizDataObj.getLong("bizitem");
                 *              // 获取业务项目下多值业务项目属性信息
                 *              List<Map<String, Object>> bizItemPropList = bizItemPropInfo.get(bizItemId);
                 *              if(bizItemPropList == null || bizItemPropList.size() == 0) {
                 *                  continue;
                 *              }
                 *
                 *              // 如果循环项业务数据中存在业务项目属性值，则不需要写入值，视具体业务而定
                 *              DynamicObjectCollection propColl = bizDataObj.getDynamicObjectCollection("recurbizpropentry");
                 *              if(propColl != null && propColl.size() > 0) {
                 *                  continue;
                 *              }
                 *
                 *              // 生成空的分录
                 *              SWCDataServiceHelper helper = new SWCDataServiceHelper(entityName);
                 *              DynamicObjectCollection propValEntry = helper.generateEmptyEntryCollection(bizDataObj, "recurbizpropentry");
                 *              // 组装属性值
                 *              StringBuilder propSb = new StringBuilder();
                 *              // 根据获取到的属性值，写入属性值数据
                 *              int size = bizItemPropList.size();
                 *              for(int i = 0; i < size; i++) {
                 *                  Map<String, Object> bizItemPropMap = bizItemPropList.get(i);
                 *                  DynamicObject propValObj = new DynamicObject(propValEntry.getDynamicObjectType());
                 *                  Long bizItemPropId = (Long)bizItemPropMap.get("bizItemPropId");
                 *                  String propDataType = (String)bizItemPropMap.get("dataType");
                 *                  String propVal = "";
                 *                  if(SWCStringUtils.equals(propDataType, "text")) {
                 *                      // 文本
                 *                      propValObj.set("bizitemprop", bizItemPropId);
                 *                      propVal = "text test";
                 *                      propValObj.set("propdatavalue", propVal);
                 *                  } else if(SWCStringUtils.equals(propDataType, "decimal")) {
                 *                      // 数值
                 *                      propValObj.set("bizitemprop", bizItemPropId);
                 *                      propVal = "1.01";
                 *                      propValObj.set("propdatavalue", propVal);
                 *                  } else if(SWCStringUtils.equals(propDataType, "date")) {
                 *                      // 日期
                 *                      propValObj.set("bizitemprop", bizItemPropId);
                 *                      propVal = "2023-05-31";
                 *                      propValObj.set("propdatavalue", propVal);
                 *                  }
                 *                  propValEntry.add(propValObj);
                 *
                 *                  propSb.append(bizItemPropMap.get("bizItemPropName")).append('：').append(propVal);
                 *                  if(i != (size - 1)) {
                 *                      propSb.append('；') ;
                 *                  }
                 *              }
                 *
                 *              if(propValEntry.size() > 0) {
                 *                  bizDataObj.set("recurbizpropentry", propValEntry);
                 *                  bizDataObj.set("propval", propSb.toString());
                 *              }
                 *          }
                 *      }
                 *  }
                 * </code></pre>
                 *
                 *  @param args 前端业务数据同步数据服务增加业务数据扩展修改场景。
                 */
                afterBizDataList?(event:kd.sdk.swc.hsas.common.events.bizdata.AfterBizDataListEvent):void;
            }
            type IBizDataSynExtService_T = IBizDataSynExtService_S & IBizDataSynExtService$;
            interface IBizDataSynExtService extends IBizDataSynExtService_T {
            }
        }
        namespace kd.sdk.swc.hsas.business.extpoint.insurancedata{
            interface ISaveInsuranceDataSynExtService_S {
            }
            interface ISaveInsuranceDataSynExtService$ {
                beforeSaveInsuranceDataList?(event:kd.sdk.swc.hsas.common.events.insurancedata.BeforeSaveInsuranceDataListEvent):void;
            }
            type ISaveInsuranceDataSynExtService_T = ISaveInsuranceDataSynExtService_S & ISaveInsuranceDataSynExtService$;
            interface ISaveInsuranceDataSynExtService extends ISaveInsuranceDataSynExtService_T {
            }
        }
        namespace kd.sdk.swc.hsas.business.extpoint.paydetail{
            interface IBankOfferExtService_S {
            }
            interface IBankOfferExtService$ {
                /**
                 *  @param event BankOfferExportSplitEvent
                 *
                 * <pre><code>
                 * public class BankOfferSplitTest implements IBankOfferExtService {
                 *      @Override
                 *      public void beforeBankOfferSplit(BankOfferExportSplitEvent event) {
                 *          // 获取勾选可银行报盘发放明细list
                 *          List<Long> payDetailIds = event.getPayDetailIds();
                 *          QFilter filter = new QFilter("id", QFilter.in, payDetailIds);
                 *          // 查询对应明细信息
                 *          SWCDataServiceHelper helper = new SWCDataServiceHelper("hsas_paydetail");
                 *          DynamicObject[] payDetailArray = helper.query("id,paysubjecthis.number", filter.toArray());
                 *          // 获取最新的银行报盘模板
                 *          helper = new SWCDataServiceHelper("hsas_bankoffertpl");
                 *          QFilter enableFilter = new QFilter(SWCBaseConstants.ENABLE, QFilter.equals, SWCBaseConstants.ENABLED);
                 *          QFilter auditFilter = new QFilter(SWCBaseConstants.STATUS, QFilter.equals, SWCBaseConstants.STATUS_AUDIT);
                 *          QFilter hisCurrFilter = new QFilter("iscurrentversion", QFilter.equals, Boolean.TRUE);
                 *          DynamicObject[] tplDataArray = helper.query("id", new QFilter[]{enableFilter, auditFilter, hisCurrFilter}, "createtime desc");
                 *          // 按照支付主体编码分批
                 *          Map<String, List<Long>> payDetailSplitMap = new HashMap<>(payDetailArray.length);
                 *          for (DynamicObject payDetail : payDetailArray) {
                 *              String paySubjectNumber = payDetail.getString("paysubjecthis.number");
                 *              List<Long> splitIdList = payDetailSplitMap.getOrDefault(paySubjectNumber, new ArrayList<>(10));
                 *              splitIdList.add(payDetail.getLong("id"));
                 *              payDetailSplitMap.put(paySubjectNumber, splitIdList);
                 *          }
                 *          int index = 0;
                 *          List<BankOfferExportSplitResult> splitResultList = new ArrayList<>(payDetailSplitMap.size());
                 *          Map<Long, String> payDetailErrorMap = new HashMap<>(16);
                 *
                 *          for (Map.Entry<String, List<Long>> entry : payDetailSplitMap.entrySet()) {
                 *              List<Long> ids = entry.getValue();
                 *              //超过2条明细，取最后一条作为异常明细
                 *              if (ids.size() > 2) {
                 *                  Long id = ids.get(ids.size() - 1);
                 *                  ids.remove(ids.size() - 1);
                 *                  payDetailErrorMap.put(id, "this is last error id : " + id);
                 *              }
                 *              //构建银行报盘分批对象
                 *              BankOfferExportSplitResult splitResult = new BankOfferExportSplitResult();
                 *              //银行报盘模板
                 *              splitResult.setBankOfferTplId(tplDataArray[index].getLong("id"));
                 *              splitResult.setSplitPayDetailIdList(ids);
                 *              splitResult.setBankOfferDesc("test desc");
                 *              //报盘银行 可填可不填
                 *              splitResult.setBankCgSettingId(0L);
                 *              splitResultList.add(splitResult);
                 *
                 *              index = tplDataArray.length < ++index ? 0 : index;
                 *          }
                 *          // 分批是否成功标识
                 *          event.setSuccessSplit(Boolean.TRUE);
                 *          event.setExportSplitResultList(splitResultList);
                 *          event.setPayDetailErrorMap(payDetailErrorMap);
                 *
                 *      }
                 *  }
                 *  </code></pre>
                 */
                beforeBankOfferSplit?(event:kd.sdk.swc.hsas.common.events.paydetail.BankOfferExportSplitEvent):void;
            }
            type IBankOfferExtService_T = IBankOfferExtService_S & IBankOfferExtService$;
            interface IBankOfferExtService extends IBankOfferExtService_T {
            }
            interface IBankAccountService_S {
            }
            interface IBankAccountService$ {
                /**
                 *  @param event BankAccountModifyFilterEvent
                 *
                 * <pre><code>
                 * public class BankAccountModifyFilterTest implements IBankAccountService {
                 *      @Override
                 *      public void beforeBankAccountModifyFilter(BankAccountModifyFilterEvent event) {
                 *          // 添加付款状态为付款失败数据的过滤条件
                 *          QFilter payStateFilter = new QFilter("paystate", QFilter.in, Arrays.asList("1","4"));
                 *          // 添加到过滤事件中
                 *          event.addFieldFilter(payStateFilter);
                 *          // 添加银行报盘状态为测试位数据的过滤条件
                 *          QFilter bankOfferFilter = new QFilter("bankofferstatus", QFilter.in, Arrays.asList("1","4","5"));
                 *          // 添加到过滤事件中
                 *          event.addFieldFilter(bankOfferFilter);
                 *          // 添加代发单状态为测试位数据的过滤条件
                 *          QFilter agencyPayFilter = new QFilter("agencypaystate", QFilter.in, Arrays.asList("0","2"));
                 *          // 添加到过滤事件中
                 *          event.addFieldFilter(agencyPayFilter);
                 *          // 添加停缓发状态为测试位数据的过滤条件
                 *          QFilter onHoldFilter = new QFilter("onholdstatus", QFilter.in, Arrays.asList(" ","1","5"));
                 *          // 添加到过滤事件中
                 *          event.addFieldFilter(onHoldFilter);
                 *      }
                 *  }
                 *  </code></pre>
                 */
                beforeBankAccountModifyFilter?(event:kd.sdk.swc.hsas.common.events.paydetail.BankAccountModifyFilterEvent):void;
            }
            type IBankAccountService_T = IBankAccountService_S & IBankAccountService$;
            interface IBankAccountService extends IBankAccountService_T {
            }
        }
        namespace kd.sdk.swc.hsas.business.extpoint.person{
            interface IPersonExtService_S {
            }
            interface IPersonExtService$ {
                /**
                 * 计薪人员修改工号服务
                 *
                 * <pre><code>
                 *
                 * public class PersonExtService implements IPersonExtService {
                 *
                 *     public void modifyPersonNumber(Map<String, Object> param) {
                 *         List<Map<String, Object>> datas = (List<Map<String, Object>>) param.get("data");
                 *         //旧工号集合-备查
                 *         Set<String> oriNumbers = new HashSet<>(SWCBaseConstants.INITCAPACITY_HSAHSET);
                 *         //KEY:旧工号,VALUE=新工号
                 *         Map<String, String> numberMap = new HashMap<>(SWCBaseConstants.INITCAPACITY_HASHMAP);
                 *
                 *         for (Map<String, Object> data : datas) {
                 *             String oriNumber = String.valueOf(data.get("oriNumber"));
                 *             String newNumber = String.valueOf(data.get("newNumber"));
                 *
                 *             oriNumbers.add(oriNumber);
                 *
                 *             numberMap.put(oriNumber, newNumber);
                 *         }
                 *
                 *         //测试修改技能人才的工号
                 *         dealModifyPersonNumberForEntityRel(param, oriNumbers, numberMap, "kdtest_hrpi_jinengrencai", "number", "number");
                 *
                 *         //无返回值，若是失败直接抛异常
                 *         if(param.containsKey("testerror")){
                 *             throw new RuntimeException("This deal fail!!!");
                 *         }
                 *
                 *     }
                 *
                 *     private DynamicObject[] dealModifyPersonNumberForEntityRel(Map<String, Object> param, Set<String> oriNumbers, Map<String, String> numberMap, String entityNumber, String propertyName, String relPropertyName) {
                 *         QFilter qFilter = new QFilter(relPropertyName, QFilter.in, oriNumbers);
                 *
                 *         SWCDataServiceHelper empHelper = new SWCDataServiceHelper(entityNumber);
                 *         DynamicObject[] dataDys = empHelper.query(SWCHisBaseDataHelper.getSelectProperties(entityNumber), new QFilter[]{qFilter});
                 *         for (DynamicObject empDy : dataDys) {
                 *             //待更新的字段值
                 *             String propertyVal = empDy.getString(propertyName);
                 *             //原工号
                 *             String oriNumber = empDy.getString(relPropertyName);
                 *             //新工号
                 *             String newNumber = numberMap.get(oriNumber);
                 *             //旧工号字符串替换为新字符串, 此处认为原工号是精确的
                 *             empDy.set(propertyName, propertyVal.replace(oriNumber, newNumber));
                 *         }
                 *         empHelper.update(dataDys);
                 *
                 *         Map<String, Object> resultMap = (Map<String, Object>) param.get("dealInfo");
                 *         resultMap.put(entityNumber + "#" + propertyName, dataDys.length);
                 *         return dataDys;
                 *     }
                 *
                 * }
                 *
                 * </code></pre>
                 *
                 * @param param 待修改的工号信息，{"data": [{"oriNumber":"1234567-R", "newNumber":"1234567"}]}
                 * @return 无返回值，若是失败直接抛异常
                 */
                modifyPersonNumber?(param:$.java.util.Map):void;
            }
            type IPersonExtService_T = IPersonExtService_S & IPersonExtService$;
            interface IPersonExtService extends IPersonExtService_T {
            }
            interface ISyncPersonExtService_S {
            }
            interface ISyncPersonExtService$ {
                /**
                 * 计薪人员同步复制数据后未入库前处理，将数据destDyList传给二开做处理，可能二开会增加自定义字段，而此字段并非从核心人力同步过来
                 *
                 * <pre><code>
                 *
                 * public class SyncPersonExtDemoService implements ISyncPersonExtService {
                 *
                 *     public void afterSyncPersonCopy(AfterSyncPersonCopyEvent afterSyncPersonCopyEvent) {
                 *         String destEntity = afterSyncPersonCopyEvent.getDestEntity();
                 *         //需要先判断实体，所有实体都会调用这个接口
                 *         if ("hsas_personhr".equals(destEntity)) {
                 *             //获取到即将入库的数据，做自己想做的事即可。
                 *             List<DynamicObject> destDyList = afterSyncPersonCopyEvent.getDestDyList();
                 *             for (DynamicObject destDy : destDyList) {
                 *                 destDy.set("name", destDy.getString("name") + "_ext");
                 *             }
                 *         }
                 *     }
                 *
                 * }
                 *
                 * </code></pre>
                 *
                 * @param afterSyncPersonCopyEvent 待入库的薪酬实体数据集合
                 * @return 修改入参数据
                 */
                afterSyncPersonCopy?(afterSyncPersonCopyEvent:kd.sdk.swc.hsas.common.events.person.AfterSyncPersonCopyEvent):void;
                /**
                 * 计薪人员同步初始化处理，支持客户新增同步实体。
                 *
                 * <pre><code>
                 *
                 * public class SyncPersonExtDemoService implements ISyncPersonExtService {
                 *
                 *     public void initSyncPerson(InitSyncPersonEvent initSyncPersonEvent) {
                 *         //案例：同步扩展的技能人才信息
                 *         initSyncPersonEvent.getFormIdMap().put("kdtest_hrpi_jinengrencai", "kdtest_hsas_jinengrencai");
                 *     }
                 *
                 * }
                 *
                 * </code></pre>
                 *
                 * @param initSyncPersonEvent 待同步的实体映射关系，key=中台人员实体，value=对应的薪酬实体
                 * @return 设置到入参中的formIdMap返回， 待同步的实体映射关系，key=中台人员实体，value=对应的薪酬实体
                 */
                initSyncPerson?(initSyncPersonEvent:kd.sdk.swc.hsas.common.events.person.InitSyncPersonEvent):void;
            }
            type ISyncPersonExtService_T = ISyncPersonExtService_S & ISyncPersonExtService$;
            interface ISyncPersonExtService extends ISyncPersonExtService_T {
            }
        }
        namespace kd.sdk.swc.hsas.business.extpoint.salaryfile{
            interface ISalaryFileBeforeValidateDepEmpDateService_S {
            }
            interface ISalaryFileBeforeValidateDepEmpDateService$ {
                /**
                 * 判断是否进行校验
                 *
                 * @param event 事件
                 */
                isValidate(event:kd.sdk.swc.hsas.common.events.salaryfile.SalaryFileBeforeValidateDepEmpDateEvent):void;
            }
            type ISalaryFileBeforeValidateDepEmpDateService_T = ISalaryFileBeforeValidateDepEmpDateService_S & ISalaryFileBeforeValidateDepEmpDateService$;
            interface ISalaryFileBeforeValidateDepEmpDateService extends ISalaryFileBeforeValidateDepEmpDateService_T {
            }
            interface ISalaryFileExportExtService_S {
            }
            interface ISalaryFileExportExtService$ {
                /**
                 * 获取发薪与个税引出实体关系：同时引出发薪与个税
                 *
                 * <pre><code>
                 *
                 * public class SalaryFileExportDemoExtService implements ISalaryFileExportExtService {
                 *
                 *     //二开扩展的字段属性标识 注意：如果是基础资料字段,需要在后面加上.number或.name,kdtest_textfield.number
                 *     private String EXT_FIELD = "kdtest_textfield";
                 *
                 *     //获取薪资档案引出实体信息：仅引出发薪
                 *     public void afterBuildSalaryFileExportEntityRel(SalaryFileExportEvent event){
                 *         //添加1个主实体扩展字段
                 *         addExtField(event, EXT_FIELD);
                 *     }
                 *
                 *     //获取发薪与个税引出实体关系：同时引出发薪与个税
                 *     public void afterBuildSalaryAndTaxExportEntityRel(SalaryFileExportEvent event){
                 *         //添加1个主实体扩展字段
                 *         addExtField(event, EXT_FIELD);
                 *     }
                 *
                 *     //添加1个主实体扩展字段
                 *     private void addExtField(SalaryFileExportEvent event, String extField) {
                 *         //字段标识集合数组
                 *         String[] fieldKeyOld = event.getImportEntityRel().getMainEntity().getFieldKey();
                 *         //添加二开的字段到模板中，则修改字段数组，如下是加1个字段到最后一个，若是需要加在中间，则调整数组顺序即可
                 *         String[] fieldKeyNew = Arrays.copyOf(fieldKeyOld, fieldKeyOld.length + 1);
                 *         fieldKeyNew[fieldKeyOld.length] = extField;
                 *         //再设置覆盖
                 *         event.getImportEntityRel().getMainEntity().setFieldKey(fieldKeyNew);
                 *     }
                 *
                 * }
                 *
                 * </code></pre>
                 *
                 * @param event 薪资档案引出事件,可设置引出字段
                 */
                afterBuildSalaryAndTaxExportEntityRel?(event:kd.sdk.swc.hsas.common.events.salaryfile.SalaryFileExportEvent):void;
                /**
                 * 获取薪资档案引出实体信息：仅引出发薪
                 *
                 * <pre><code>
                 *
                 * public class SalaryFileExportDemoExtService implements ISalaryFileExportExtService {
                 *
                 *     //二开扩展的字段属性标识 注意：如果是基础资料字段,需要在后面加上.number或.name,kdtest_textfield.number
                 *     private String EXT_FIELD = "kdtest_textfield";
                 *
                 *     //获取薪资档案引出实体信息：仅引出发薪
                 *     public void afterBuildSalaryFileExportEntityRel(SalaryFileExportEvent event){
                 *         //添加1个主实体扩展字段
                 *         addExtField(event, EXT_FIELD);
                 *     }
                 *
                 *     //获取发薪与个税引出实体关系：同时引出发薪与个税
                 *     public void afterBuildSalaryAndTaxExportEntityRel(SalaryFileExportEvent event){
                 *         //添加1个主实体扩展字段
                 *         addExtField(event, EXT_FIELD);
                 *     }
                 *
                 *     //添加1个主实体扩展字段
                 *     private void addExtField(SalaryFileExportEvent event, String extField) {
                 *         //字段标识集合数组
                 *         String[] fieldKeyOld = event.getImportEntityRel().getMainEntity().getFieldKey();
                 *         //添加二开的字段到模板中，则修改字段数组，如下是加1个字段到最后一个，若是需要加在中间，则调整数组顺序即可
                 *         String[] fieldKeyNew = Arrays.copyOf(fieldKeyOld, fieldKeyOld.length + 1);
                 *         fieldKeyNew[fieldKeyOld.length] = extField;
                 *         //再设置覆盖
                 *         event.getImportEntityRel().getMainEntity().setFieldKey(fieldKeyNew);
                 *     }
                 *
                 * }
                 *
                 * </code></pre>
                 *
                 * @param event 薪资档案引出事件,可设置引出字段
                 */
                afterBuildSalaryFileExportEntityRel?(event:kd.sdk.swc.hsas.common.events.salaryfile.SalaryFileExportEvent):void;
                /**
                 * 获取发薪与个税临时表引出实体信息：仅引入个税
                 *
                 * @param event 薪资档案引出事件,可设置引出字段
                 */
                afterBuildTaxTempExportEntityRel?(event:kd.sdk.swc.hsas.common.events.salaryfile.SalaryFileExportEvent):void;
            }
            type ISalaryFileExportExtService_T = ISalaryFileExportExtService_S & ISalaryFileExportExtService$;
            interface ISalaryFileExportExtService extends ISalaryFileExportExtService_T {
            }
            interface ISalaryFileImportExtService_S {
            }
            interface ISalaryFileImportExtService$ {
                /**
                 * 获取发薪与个税临时表引入实体关系：同时引入发薪与个税
                 *
                 * <pre><code>
                 *
                 * public class SalaryFileImportDemoExtService implements ISalaryFileImportExtService {
                 *
                 *     //二开扩展的字段属性标识 注意：如果是基础资料字段,需要在后面加上.number或.name,kdtest_textfield.number
                 *     private String EXT_FIELD = "kdtest_textfield";
                 *
                 *     //获取发薪引入实体关系:仅引入发薪
                 *     public void afterBuildSalaryFileImportEntityRel(SalaryFileImportEvent event){
                 *         //添加1个主实体扩展字段
                 *         addExtField(event, EXT_FIELD);
                 *     }
                 *
                 *     //获取发薪与个税临时表引入实体关系：同时引入发薪与个税
                 *     public void afterBuildSalaryAndTaxTempImportEntityRel(SalaryFileImportEvent event){
                 *         //添加1个主实体扩展字段
                 *         addExtField(event, EXT_FIELD);
                 *     }
                 *
                 *     //添加1个主实体扩展字段
                 *     private void addExtField(SalaryFileImportEvent event, String extField) {
                 *         //字段标识集合数组
                 *         String[] fieldKeyOld = event.getImportEntityRel().getMainEntity().getFieldKey();
                 *         //添加二开的字段到模板中，则修改字段数组，如下是加1个字段到最后一个，若是需要加在中间，则调整数组顺序即可
                 *         String[] fieldKeyNew = Arrays.copyOf(fieldKeyOld, fieldKeyOld.length + 1);
                 *         fieldKeyNew[fieldKeyOld.length] = extField;
                 *         //再设置覆盖
                 *         event.getImportEntityRel().getMainEntity().setFieldKey(fieldKeyNew);
                 *     }
                 * }
                 *
                 * </code></pre>
                 *
                 * @param event 薪资档案引入事件,可设置引入字段
                 */
                afterBuildSalaryAndTaxTempImportEntityRel?(event:kd.sdk.swc.hsas.common.events.salaryfile.SalaryFileImportEvent):void;
                /**
                 * 获取发薪引入实体关系:仅引入发薪
                 *
                 * <pre><code>
                 *
                 * public class SalaryFileImportDemoExtService implements ISalaryFileImportExtService {
                 *
                 *     //二开扩展的字段属性标识 注意：如果是基础资料字段,需要在后面加上.number或.name,kdtest_textfield.number
                 *     private String EXT_FIELD = "kdtest_textfield";
                 *
                 *     //获取发薪引入实体关系:仅引入发薪
                 *     public void afterBuildSalaryFileImportEntityRel(SalaryFileImportEvent event){
                 *         //添加1个主实体扩展字段
                 *         addExtField(event, EXT_FIELD);
                 *     }
                 *
                 *     //获取发薪与个税临时表引入实体关系：同时引入发薪与个税
                 *     public void afterBuildSalaryAndTaxTempImportEntityRel(SalaryFileImportEvent event){
                 *         //添加1个主实体扩展字段
                 *         addExtField(event, EXT_FIELD);
                 *     }
                 *
                 *     //添加1个主实体扩展字段
                 *     private void addExtField(SalaryFileImportEvent event, String extField) {
                 *         //字段标识集合数组
                 *         String[] fieldKeyOld = event.getImportEntityRel().getMainEntity().getFieldKey();
                 *         //添加二开的字段到模板中，则修改字段数组，如下是加1个字段到最后一个，若是需要加在中间，则调整数组顺序即可
                 *         String[] fieldKeyNew = Arrays.copyOf(fieldKeyOld, fieldKeyOld.length + 1);
                 *         fieldKeyNew[fieldKeyOld.length] = extField;
                 *         //再设置覆盖
                 *         event.getImportEntityRel().getMainEntity().setFieldKey(fieldKeyNew);
                 *     }
                 * }
                 *
                 * </code></pre>
                 *
                 * @param event 薪资档案引入事件,可设置引入字段
                 */
                afterBuildSalaryFileImportEntityRel?(event:kd.sdk.swc.hsas.common.events.salaryfile.SalaryFileImportEvent):void;
                /**
                 * 获取个税临时表引入实体信息：仅引入个税
                 * 使用方法参考发薪,个税字段存放在 event.getImportEntityRel().getOtherEntities()
                 *
                 * @param event 薪资档案引入事件,可设置引入字段
                 */
                afterBuildTaxTempImportEntityRel?(event:kd.sdk.swc.hsas.common.events.salaryfile.SalaryFileImportEvent):void;
            }
            type ISalaryFileImportExtService_T = ISalaryFileImportExtService_S & ISalaryFileImportExtService$;
            interface ISalaryFileImportExtService extends ISalaryFileImportExtService_T {
            }
            interface ISalaryFileMatchExtService_S {
            }
            interface ISalaryFileMatchExtService$ {
                /**
                 * 人员薪资档案匹配服务扩展
                 *
                 * <pre><code>
                 *
                 * public class SalaryFileMatchDemoExtService implements ISalaryFileMatchExtService {
                 *   public void afterMatchSalaryFile(List<Map<String, Object>> params) {
                 *       for (Map<String, Object> param : params) {
                 *           boolean success = (boolean) param.get("success");
                 *           if(!success){
                 *               continue;
                 *           }
                 *
                 *           int queryRowCount = (int) param.get("queryRowCount");
                 *           List<Long> matchSalaryFileIds = (List) param.get("matchSalaryFileIds");
                 *           List<DynamicObject> matchSalaryFileVers = (List) param.get("matchSalaryFileVers");
                 *           if(queryRowCount >= 2){
                 *               //只取第一个
                 *               param.put("sdkExtModify", "true");
                 *
                 *               param.put("queryRowCount", 1);
                 *               param.put("matchSalaryFileId", matchSalaryFileIds.get(0));
                 *               param.put("matchSalaryFileIds", matchSalaryFileIds.subList(0, 1));
                 *               param.put("matchSalaryFileVers", matchSalaryFileVers.subList(0, 1));
                 *
                 *           }
                 *       }
                 *   }
                 * }
                 *
                 * </code></pre>
                 *
                 * @param params 薪资档案匹配结果信息，Map即为入参，新增属性说明：
                 *               success false则失败，比如组织人必填校验，失败了则后面四个值就不会有值。
                 *               queryRowCount 匹配到的档案个数
                 *               matchSalaryFileId 匹配到1个档案时存放档案boid
                 *               matchSalaryFileIds 匹配到1个或多个档案是存放档案的boid集合
                 *               matchSalaryFileVers 匹配到1个或多个档案是存放档案的当前动态对象集合
                 */
                afterMatchSalaryFile?(params:$.java.util.List):void;
            }
            type ISalaryFileMatchExtService_T = ISalaryFileMatchExtService_S & ISalaryFileMatchExtService$;
            interface ISalaryFileMatchExtService extends ISalaryFileMatchExtService_T {
            }
        }
        namespace kd.sdk.swc.hsas.business.mservice.helper{
            interface CalPayrollTaskServiceHelper_S {
                /**
                 * 添加指定人员
                 * @param params
                 * @return
                 */
                addPerson(params:$.java.util.List):$.java.util.Map;
                /**
                 * 创建核算任务、自动添加名单
                 * @param params
                 * @return
                 */
                createAndAutoAddPerson(params:$.java.util.List):$.java.util.Map;
                /**
                 * 创建核算任务、自动添加指定档案的名单并计算
                 * @param params
                 * @return
                 */
                createTask(params:$.java.util.List):$.java.util.Map;
            }
            interface CalPayrollTaskServiceHelper_C extends CalPayrollTaskServiceHelper_S {
                new():CalPayrollTaskServiceHelper;
            }
            interface CalPayrollTaskServiceHelper$ {
            }
            type CalPayrollTaskServiceHelper_T = CalPayrollTaskServiceHelper_S & CalPayrollTaskServiceHelper$;
            interface CalPayrollTaskServiceHelper extends CalPayrollTaskServiceHelper_T {
            }
            interface PayDetailServiceHelper_S {
                /**
                 * 根据发放明细及变更信息变更银行卡
                 *
                 * @param param
                 * @return 返回信息
                 */
                modifyPayDetailBankCard(param:$.java.util.List):$.java.util.Map;
            }
            interface PayDetailServiceHelper_C extends PayDetailServiceHelper_S {
                new():PayDetailServiceHelper;
            }
            interface PayDetailServiceHelper$ {
            }
            type PayDetailServiceHelper_T = PayDetailServiceHelper_S & PayDetailServiceHelper$;
            interface PayDetailServiceHelper extends PayDetailServiceHelper_T {
            }
            interface SalaryCalculationServiceHelper_S {
                /**
                 * 薪资计算（同步）
                 * @param param
                 * @return
                 */
                salaryCalForSync(param:$.java.util.Map):$.java.util.Map;
            }
            interface SalaryCalculationServiceHelper_C extends SalaryCalculationServiceHelper_S {
                new():SalaryCalculationServiceHelper;
            }
            interface SalaryCalculationServiceHelper$ {
            }
            type SalaryCalculationServiceHelper_T = SalaryCalculationServiceHelper_S & SalaryCalculationServiceHelper$;
            interface SalaryCalculationServiceHelper extends SalaryCalculationServiceHelper_T {
            }
            interface PaySettingServiceHelper_S {
                /**
                 * 根据人员更新发放设置
                 *
                 * @param param
                 * @return 返回信息
                 */
                updatePaySetting(param:$.java.util.Map):$.java.util.Map;
            }
            interface PaySettingServiceHelper_C extends PaySettingServiceHelper_S {
                new():PaySettingServiceHelper;
            }
            interface PaySettingServiceHelper$ {
            }
            type PaySettingServiceHelper_T = PaySettingServiceHelper_S & PaySettingServiceHelper$;
            interface PaySettingServiceHelper extends PaySettingServiceHelper_T {
            }
            interface PersonServiceHelper_S {
                /**
                 * 同步数据，可根据工号进行同步数据
                 *
                 * @param param {"empnumbers": ["DTX0406134-R","DTX0406134"]}
                 * @return 返回信息 {"success": true, "message": "", "data": 入参param}
                 */
                syncData(param:$.java.util.Map):$.java.util.Map;
            }
            interface PersonServiceHelper_C extends PersonServiceHelper_S {
                new():PersonServiceHelper;
            }
            interface PersonServiceHelper$ {
            }
            type PersonServiceHelper_T = PersonServiceHelper_S & PersonServiceHelper$;
            interface PersonServiceHelper extends PersonServiceHelper_T {
            }
            interface OnHoldServiceHelper_S {
                /**
                 * 通过接口创建停缓发数据
                 * @param params
                 * @return
                 */
                addOnHoldData(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 通过接口解薪停缓发数据
                 * @param params
                 * @return
                 */
                releaseOnHoldData(params:$.java.util.Map):$.java.util.Map;
            }
            interface OnHoldServiceHelper_C extends OnHoldServiceHelper_S {
                new():OnHoldServiceHelper;
            }
            interface OnHoldServiceHelper$ {
            }
            type OnHoldServiceHelper_T = OnHoldServiceHelper_S & OnHoldServiceHelper$;
            interface OnHoldServiceHelper extends OnHoldServiceHelper_T {
            }
            interface BizDataServiceHelper_S {
                /**
                 * 前端业务数据删除/废弃
                 * @param params
                 * @return
                 */
                delBizData(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 前端业务数据-生成业务数据唯一识别码
                 * @param params
                 * @return
                 */
                getBizDataCodes(codePrefix:string,count:number):$.java.util.List;
                /**
                 * 前端业务数据-业务数据模板查询
                 * @param params
                 * @return
                 */
                getBizItemGroupData(params:$.java.util.List):$.java.util.Map;
                /**
                 * 前端业务数据-业务项目属性查询
                 * @param params
                 * @return
                 */
                getBizItemPropInfo(params:$.java.util.List):$.java.util.Map;
                /**
                 * 根据自然人+薪资组匹配档案
                 * @param params
                 * @return
                 */
                getSalaryFileIdByPayRollGrpId(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 前端业务数据-组织人匹配薪资档案
                 * @param params
                 * @return
                 */
                matchSalaryFile(params:$.java.util.List):$.java.util.List;
                /**
                 * 前端业务数据使用次数查询
                 * @param params
                 * @return
                 */
                queryUsageCount(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 前端业务数据使用期间查询
                 * @param params
                 * @return
                 */
                queryUsagePeriod(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 前端业务数据撤回
                 * @param params
                 * @return
                 */
                rollBackBizData(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 前端业务数据新增by组织人
                 * @param params
                 * @return
                 */
                synBizData(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 前端业务数据新增by薪资档案
                 * @param params
                 * @return
                 */
                synBizDataBySalaryFile(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 前端业务数据循环项更新失效日期
                 * @param params
                 * @return
                 */
                updateBlsed(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 前端业务数据值校验
                 * @param params
                 * @return
                 */
                validateDataValue(params:$.java.util.List):$.java.util.Map;
            }
            interface BizDataServiceHelper_C extends BizDataServiceHelper_S {
                new():BizDataServiceHelper;
            }
            interface BizDataServiceHelper$ {
            }
            type BizDataServiceHelper_T = BizDataServiceHelper_S & BizDataServiceHelper$;
            interface BizDataServiceHelper extends BizDataServiceHelper_T {
            }
            interface SalaryFileServiceHelper_S {
                /**
                 * 根据企业人查询人员薪资档案
                 *
                 * @param param 查询参数
                 *              企业人员	employees	List<Long>		是	基础资料，传多个id。单个和多个必传一个
                 *              查询属性	selectProperties	String	500	否	不传则查询所有字段，主表的字段
                 *              状态	status	List<String>		否	默认只查询已审核
                 * @return 返回信息
                 * 结果判断    success		Boolean	是	success - 成功, false - 失败
                 * 错误信息	message		String	否	若程序处理异常则有值
                 * 信息详细返回	data		List<Map<String, Object>>
                 * 	是
                 * 企业人员		employee_id	Long	是	基础资料id
                 * 算发薪组织		org_name	String	是	基础资料名称
                 * 薪资核算组		payrollgroup_name	String	是
                 * 修改人		modifier_name	String	否	不是administrator，则返回修改人
                 */
                querySalaryFileBoByEmp(param:$.java.util.Map):$.java.util.Map;
                /**
                 * 保存或者更新薪资档案&人员个税档案关联关系
                 *
                 * @param params 参数 {data: [{ salaryFileId: 人员薪资档案ID long taxFileId: 人员个税档案ID long oldRelId: 旧的关联关系ID【新增时为空】 long
                 *        }]}
                 *
                 * @return 处理结果 { success: 是否成功 status: 状态码 message: 消息 data: [{success: 是否成功, salaryFileId: 薪资档案ID, taxFileId:
                 *         个税档案ID, newRelId: 新的关联关系ID}] }
                 *
                 * @author Quinn
                 * @since 2021-01-20
                 */
                relateSalaryWithTaxFile(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 保存档案，根据入参数据生成档案、修改档案、变更档案。
                 *
                 * @param params 薪资档案 各属性的值，值的key和基础资料的值保持一致。
                 * @return 返回入参，保证个数一致，增加部分返回属性，success：true/false、message:错误信息
                 */
                saveSalaryFile(params:$.java.util.List):$.java.util.Map;
            }
            interface SalaryFileServiceHelper_C extends SalaryFileServiceHelper_S {
                new():SalaryFileServiceHelper;
            }
            interface SalaryFileServiceHelper$ {
            }
            type SalaryFileServiceHelper_T = SalaryFileServiceHelper_S & SalaryFileServiceHelper$;
            interface SalaryFileServiceHelper extends SalaryFileServiceHelper_T {
            }
        }
        namespace kd.sdk.swc.hsas.common.dto.salaryfile{
            interface InitPageDataDTO_S {
            }
            interface InitPageDataDTO_C extends InitPageDataDTO_S {
                new():InitPageDataDTO;
            }
            interface InitPageDataDTO$ {
                getHidePages():$.java.util.List;
                setHidePages(hidePages:$.java.util.List):void;
            }
            type InitPageDataDTO_T = InitPageDataDTO_S & InitPageDataDTO$;
            interface InitPageDataDTO extends InitPageDataDTO_T {
            }
        }
        namespace kd.sdk.swc.hsas.common.entity{
            interface ImportEntityRel_S {
            }
            interface ImportEntityRel_C extends ImportEntityRel_S {
                new(mainEntity:ImportEntity):ImportEntityRel;
                new(mainEntity:ImportEntity,isReverseRef:boolean):ImportEntityRel;
                new(mainEntity:ImportEntity,otherEntities:$.java.util.List):ImportEntityRel;
                new(mainEntity:ImportEntity,otherEntities:$.java.util.List,isReverseRef:boolean):ImportEntityRel;
            }
            interface ImportEntityRel$ {
                /**
                 * 把实体拉平 便于查找与遍历
                 *
                 * @return
                 */
                getAllEntity():$.java.util.Map;
                /**
                 * 获取实体名和对应的op
                 *
                 * @return
                 */
                getEntityOpRel():$.java.util.Map;
                /**
                 * 获取引入实体的字段标识集合
                 *
                 * @param entityId
                 * @return
                 */
                getImportEntityFieldIds(entityId:string):string[];
                getMainEntity():ImportEntity;
                /**
                 * 把实体与DyobjType拉平 便于查找与遍历
                 *
                 * @return
                 */
                getMultiEntityDyobjType():$.java.util.Map;
                /**
                 * 获取所有实体的ID
                 *
                 * @return
                 */
                getMultiEntityIds():$.java.util.List;
                /**
                 * 获取实体名和对应的父实体开关字段
                 *
                 * @return
                 */
                getOnOffMaps():$.java.util.Map;
                getOtherEntities():$.java.util.List;
                /**
                 * 获取实体名和对应的父实体名
                 *
                 * @return
                 */
                getParentEntityIdRel():$.java.util.Map;
                /**
                 * 获取实体名和对应的父实体引用的字段
                 *
                 * @return
                 */
                getParentFieldIdRel():$.java.util.Map;
                isReverseRef():boolean;
                setMainEntity(mainEntity:ImportEntity):void;
                setOtherEntities(otherEntities:$.java.util.List):void;
                setReverseRef(isReverseRef:boolean):void;
            }
            type ImportEntityRel_T = ImportEntityRel_S & ImportEntityRel$;
            interface ImportEntityRel extends ImportEntityRel_T {
            }
            interface ImportEntity_S {
            }
            interface ImportEntity_C extends ImportEntity_S {
                new(entityId:string,appId:string,fieldKey:string[]):ImportEntity;
                new(entityId:string,appId:string,fieldKey:string[],entityOp:string):ImportEntity;
                new(entityId:string,appId:string,fieldKey:string[],parentEntityId:string,parentFieldId:string):ImportEntity;
                new(entityId:string,appId:string,fieldKey:string[],parentEntityId:string,parentFieldId:string,entityOp:string):ImportEntity;
                new(entityId:string,appId:string,fieldKey:string[],parentEntityId:string,parentFieldId:string,parentOnOffField:string,entityOp:string):ImportEntity;
            }
            interface ImportEntity$ {
                getAppId():string;
                getEntityId():string;
                getEntityOp():string;
                getFieldKey():string[];
                getParentEntityId():string;
                getParentFieldId():string;
                getParentOnOffField():string;
                setAppId(appId:string):void;
                setEntityId(entityId:string):void;
                setEntityOp(entityOp:string):void;
                setFieldKey(fieldKey:string[]):void;
                setParentEntityId(parentEntityId:string):void;
                setParentFieldId(parentFieldId:string):void;
                setParentOnOffField(parentOnOffField:string):void;
                /**
                 * 实体转换为map
                 *
                 * @return
                 */
                toMap():$.java.util.Map;
            }
            type ImportEntity_T = ImportEntity_S & ImportEntity$;
            interface ImportEntity extends ImportEntity_T {
            }
            interface ItemTreeNode_S {
            }
            type ItemTreeNode_ST = $.java.io.Serializable & ItemTreeNode_S;
            interface ItemTreeNode_C extends ItemTreeNode_ST {
                new():ItemTreeNode;
                new(itemId:long,itemName:string,itemNumber:string):ItemTreeNode;
            }
            interface ItemTreeNode$ {
                getItemId():long;
                getItemName():string;
                getItemNumber():string;
                getParentName():string;
                getParentNumber():string;
                setParentName(parentName:string):void;
                setParentNumber(parentNumber:string):void;
            }
            type ItemTreeNode_T = $.java.io.Serializable & ItemTreeNode_S & ItemTreeNode$;
            interface ItemTreeNode extends ItemTreeNode_T {
            }
        }
        namespace kd.sdk.swc.hsas.common.events.approve{
            interface ApproveInvokeReportFormEvent_S {
            }
            type ApproveInvokeReportFormEvent_ST = $.java.io.Serializable & ApproveInvokeReportFormEvent_S;
            interface ApproveInvokeReportFormEvent_C extends ApproveInvokeReportFormEvent_ST {
                new(approveBillDynamicObject:$.kd.bos.dataentity.entity.DynamicObject,calPersonIds:$.java.util.List,payDetailIds:$.java.util.List,pageType:string,reportType:string):ApproveInvokeReportFormEvent;
            }
            interface ApproveInvokeReportFormEvent$ {
                getApproveBillDynamicObject():$.kd.bos.dataentity.entity.DynamicObject;
                getCalPersonIds():$.java.util.List;
                getPageType():string;
                getPayDetailIds():$.java.util.List;
                getReportType():string;
                setApproveBillDynamicObject(approveBillDynamicObject:$.kd.bos.dataentity.entity.DynamicObject):void;
                setCalPersonIds(calPersonIds:$.java.util.List):void;
                setPageType(pageType:string):void;
                setPayDetailIds(payDetailIds:$.java.util.List):void;
                setReportType(reportType:string):void;
            }
            type ApproveInvokeReportFormEvent_T = $.java.io.Serializable & ApproveInvokeReportFormEvent_S & ApproveInvokeReportFormEvent$;
            interface ApproveInvokeReportFormEvent extends ApproveInvokeReportFormEvent_T {
            }
            interface ApproveReferReportDownEvent_S {
            }
            interface ApproveReferReportDownEvent_C extends ApproveReferReportDownEvent_S {
                new(approveBillDynamicObject:$.kd.bos.dataentity.entity.DynamicObject,parentView:$.kd.bos.form.IFormView,referReport:string,downView:$.kd.bos.form.IFormView):ApproveReferReportDownEvent;
            }
            interface ApproveReferReportDownEvent$ {
                getApproveBillDynamicObject():$.kd.bos.dataentity.entity.DynamicObject;
                getDownView():$.kd.bos.form.IFormView;
                getParentView():$.kd.bos.form.IFormView;
                getReferReport():string;
            }
            type ApproveReferReportDownEvent_T = ApproveReferReportDownEvent_S & ApproveReferReportDownEvent$;
            interface ApproveReferReportDownEvent extends ApproveReferReportDownEvent_T {
            }
            interface ApproveReferReportDealEvent_S {
            }
            interface ApproveReferReportDealEvent_C extends ApproveReferReportDealEvent_S {
                new(approveBillDynamicObject:$.kd.bos.dataentity.entity.DynamicObject,calPersonIdList:$.java.util.List,schemeDy:$.kd.bos.dataentity.entity.DynamicObject):ApproveReferReportDealEvent;
            }
            interface ApproveReferReportDealEvent$ {
                getApproveBillDynamicObject():$.kd.bos.dataentity.entity.DynamicObject;
                getCalPersonIdList():$.java.util.List;
                getSchemeDy():$.kd.bos.dataentity.entity.DynamicObject;
                getShowParameter():$.kd.bos.form.FormShowParameter;
                setShowParameter(showParameter:$.kd.bos.form.FormShowParameter):void;
            }
            type ApproveReferReportDealEvent_T = ApproveReferReportDealEvent_S & ApproveReferReportDealEvent$;
            interface ApproveReferReportDealEvent extends ApproveReferReportDealEvent_T {
            }
            interface AfterVerifySpecialRuleEvent_S {
            }
            interface AfterVerifySpecialRuleEvent_C extends AfterVerifySpecialRuleEvent_S {
                new(approve:$.kd.bos.dataentity.entity.DynamicObject,isConformRule:boolean):AfterVerifySpecialRuleEvent;
            }
            interface AfterVerifySpecialRuleEvent$ {
                getApprove():$.kd.bos.dataentity.entity.DynamicObject;
                getConformRule():boolean;
                getSpecialDy():$.kd.bos.dataentity.entity.DynamicObject;
                setApprove(approve:$.kd.bos.dataentity.entity.DynamicObject):void;
                setConformRule(conformRule:boolean):void;
                setSpecialDy(specialDy:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type AfterVerifySpecialRuleEvent_T = AfterVerifySpecialRuleEvent_S & AfterVerifySpecialRuleEvent$;
            interface AfterVerifySpecialRuleEvent extends AfterVerifySpecialRuleEvent_T {
            }
            interface CreateApproveBillCalPersonDealEvent_S {
            }
            interface CreateApproveBillCalPersonDealEvent_C extends CreateApproveBillCalPersonDealEvent_S {
                new():CreateApproveBillCalPersonDealEvent;
            }
            interface CreateApproveBillCalPersonDealEvent$ {
                getCalPersonSet():$.java.util.Set;
                getErrorCustomMsg():string;
                getView():$.kd.bos.form.IFormView;
                setCalPersonSet(calPersonSet:$.java.util.Set):void;
                setErrorCustomMsg(errorCustomMsg:string):void;
                setView(view:$.kd.bos.form.IFormView):void;
            }
            type CreateApproveBillCalPersonDealEvent_T = CreateApproveBillCalPersonDealEvent_S & CreateApproveBillCalPersonDealEvent$;
            interface CreateApproveBillCalPersonDealEvent extends CreateApproveBillCalPersonDealEvent_T {
            }
            interface CreateApproveBillSetValueEvent_S {
            }
            interface CreateApproveBillSetValueEvent_C extends CreateApproveBillSetValueEvent_S {
                new():CreateApproveBillSetValueEvent;
            }
            interface CreateApproveBillSetValueEvent$ {
                getApproveBillDy():$.kd.bos.dataentity.entity.DynamicObject;
                getCalTaskIdList():$.java.util.List;
                setApproveBillDy(approveBillDy:$.kd.bos.dataentity.entity.DynamicObject):void;
                setCalTaskIdList(calTaskIdList:$.java.util.List):void;
            }
            type CreateApproveBillSetValueEvent_T = CreateApproveBillSetValueEvent_S & CreateApproveBillSetValueEvent$;
            interface CreateApproveBillSetValueEvent extends CreateApproveBillSetValueEvent_T {
            }
            interface ApproveOverViewDealEvent_S {
            }
            type ApproveOverViewDealEvent_ST = $.java.io.Serializable & ApproveOverViewDealEvent_S;
            interface ApproveOverViewDealEvent_C extends ApproveOverViewDealEvent_ST {
                /**
                 * 构造器
                 *
                 * @param type
                 * @param calPersonIds
                 * @param value
                 * @param overViewEntry
                 */
                new(type_arg:string,calPersonIds:$.java.util.List,value:string,overViewEntry:$.java.util.Map):ApproveOverViewDealEvent;
            }
            interface ApproveOverViewDealEvent$ {
                getCalPersonIds():$.java.util.List;
                getOverViewEntry():$.java.util.Map;
                getType():string;
                getValue():string;
                setCalPersonIds(calPersonIds:$.java.util.List):void;
                setOverViewEntry(overViewEntry:$.java.util.Map):void;
                setType(type_arg:string):void;
                setValue(value:string):void;
            }
            type ApproveOverViewDealEvent_T = $.java.io.Serializable & ApproveOverViewDealEvent_S & ApproveOverViewDealEvent$;
            interface ApproveOverViewDealEvent extends ApproveOverViewDealEvent_T {
            }
            interface CreateApproveBillValidateEvent_S {
            }
            interface CreateApproveBillValidateEvent_C extends CreateApproveBillValidateEvent_S {
                new(calPayRollTasks:$.java.util.List):CreateApproveBillValidateEvent;
            }
            interface CreateApproveBillValidateEvent$ {
                getCalPayRollTasks():$.java.util.List;
                getErrorMessage():string;
                getValidateResult():$.java.util.Map;
                isCancel():boolean;
                setCalPayRollTasks(calPayRollTasks:$.java.util.List):void;
                setCancel(cancel:boolean):void;
                setErrorMessage(errorMessage:string):void;
                setValidateResult(validateResult:$.java.util.Map):void;
            }
            type CreateApproveBillValidateEvent_T = CreateApproveBillValidateEvent_S & CreateApproveBillValidateEvent$;
            interface CreateApproveBillValidateEvent extends CreateApproveBillValidateEvent_T {
            }
        }
        namespace kd.sdk.swc.hsas.common.events.attinteg{
            interface AfterCreateBizDataEvent_S {
            }
            type AfterCreateBizDataEvent_ST = $.java.util.EventObject & AfterCreateBizDataEvent_S;
            interface AfterCreateBizDataEvent_C extends AfterCreateBizDataEvent_ST {
                /**
                 * Constructs a prototypical Event.
                 *
                 * @param source The object on which the Event initially occurred.
                 * @throws IllegalArgumentException if source is null.
                 */
                new(source:any):AfterCreateBizDataEvent;
            }
            interface AfterCreateBizDataEvent$ {
                getBizData():$.kd.bos.dataentity.entity.DynamicObject;
                getBizItemId():long;
                getItemData():$.java.util.Map;
                getPeriodObj():$.kd.bos.dataentity.entity.DynamicObject;
                getPeriodTypeObj():$.kd.bos.dataentity.entity.DynamicObject;
                getSalaryFileId():long;
                setBizData(bizData:$.kd.bos.dataentity.entity.DynamicObject):void;
                setBizItemId(bizItemId:long):void;
                setItemData(itemData:$.java.util.Map):void;
                setPeriodObj(periodObj:$.kd.bos.dataentity.entity.DynamicObject):void;
                setPeriodTypeObj(periodTypeObj:$.kd.bos.dataentity.entity.DynamicObject):void;
                setSalaryFileId(salaryFileId:long):void;
            }
            type AfterCreateBizDataEvent_T = $.java.util.EventObject & AfterCreateBizDataEvent_S & AfterCreateBizDataEvent$;
            interface AfterCreateBizDataEvent extends AfterCreateBizDataEvent_T {
            }
        }
        namespace kd.sdk.swc.hsas.common.events.bizdata{
            interface AfterBizDataListEvent_S {
            }
            interface AfterBizDataListEvent_C extends AfterBizDataListEvent_S {
                new(bizDataList:$.java.util.List,bizDataRecordList:$.java.util.List):AfterBizDataListEvent;
            }
            interface AfterBizDataListEvent$ {
                getBizDataList():$.java.util.List;
                getBizDataRecordList():$.java.util.List;
                setBizDataList(bizDataList:$.java.util.List):void;
                setBizDataRecordList(bizDataRecordList:$.java.util.List):void;
            }
            type AfterBizDataListEvent_T = AfterBizDataListEvent_S & AfterBizDataListEvent$;
            interface AfterBizDataListEvent extends AfterBizDataListEvent_T {
            }
        }
        namespace kd.sdk.swc.hsas.common.events.calperson{
            interface CalResultCoverSalaryItemEvent_S {
            }
            interface CalResultCoverSalaryItemEvent_C extends CalResultCoverSalaryItemEvent_S {
                new():CalResultCoverSalaryItemEvent;
            }
            interface CalResultCoverSalaryItemEvent$ {
                getCalTaskId():long;
                getExcludeItemIdList():$.java.util.List;
                setCalTaskId(calTaskId:long):void;
                setExcludeItemIdList(excludeItemIdList:$.java.util.List):void;
            }
            type CalResultCoverSalaryItemEvent_T = CalResultCoverSalaryItemEvent_S & CalResultCoverSalaryItemEvent$;
            interface CalResultCoverSalaryItemEvent extends CalResultCoverSalaryItemEvent_T {
            }
        }
        namespace kd.sdk.swc.hsas.common.events.formula{
            interface BeforeBuildItemTreeEvent_S {
            }
            interface BeforeBuildItemTreeEvent_C extends BeforeBuildItemTreeEvent_S {
                new(itemTreeNodeList:$.java.util.List):BeforeBuildItemTreeEvent;
            }
            interface BeforeBuildItemTreeEvent$ {
                getItemTreeNodeList():$.java.util.List;
            }
            type BeforeBuildItemTreeEvent_T = BeforeBuildItemTreeEvent_S & BeforeBuildItemTreeEvent$;
            interface BeforeBuildItemTreeEvent extends BeforeBuildItemTreeEvent_T {
            }
        }
        namespace kd.sdk.swc.hsas.common.events.insurancedata{
            interface BeforeSaveInsuranceDataListEvent_S {
            }
            interface BeforeSaveInsuranceDataListEvent_C extends BeforeSaveInsuranceDataListEvent_S {
                new(saveInsuranceDataList:$.java.util.List,queryResultList:$.java.util.List):BeforeSaveInsuranceDataListEvent;
            }
            interface BeforeSaveInsuranceDataListEvent$ {
                getQueryResultList():$.java.util.List;
                getSaveInsuranceDataList():$.java.util.List;
                setQueryResultList(queryResultList:$.java.util.List):void;
                setSaveInsuranceDataList(saveInsuranceDataList:$.java.util.List):void;
            }
            type BeforeSaveInsuranceDataListEvent_T = BeforeSaveInsuranceDataListEvent_S & BeforeSaveInsuranceDataListEvent$;
            interface BeforeSaveInsuranceDataListEvent extends BeforeSaveInsuranceDataListEvent_T {
            }
        }
        namespace kd.sdk.swc.hsas.common.events.paydetail{
            interface BankOfferFilterEvent_S {
            }
            interface BankOfferFilterEvent_C extends BankOfferFilterEvent_S {
                new(fieldFilterMap:$.java.util.Map):BankOfferFilterEvent;
            }
            interface BankOfferFilterEvent$ {
                /**
                 * 字段添加/修改其过滤条件
                 * @param filter
                 */
                addFieldFilter(filter:$.kd.bos.orm.query.QFilter):void;
                getFieldFilterMap():$.java.util.Map;
                isPayFailEffect():boolean;
                setPayFailEffect(payFailEffect:boolean):void;
            }
            type BankOfferFilterEvent_T = BankOfferFilterEvent_S & BankOfferFilterEvent$;
            interface BankOfferFilterEvent extends BankOfferFilterEvent_T {
            }
            interface BankOfferExportSplitEvent_S {
            }
            interface BankOfferExportSplitEvent_C extends BankOfferExportSplitEvent_S {
                new(payDetailIds:$.java.util.List):BankOfferExportSplitEvent;
            }
            interface BankOfferExportSplitEvent$ {
                getExportSplitResultList():$.java.util.List;
                getPayDetailErrorMap():$.java.util.Map;
                getPayDetailIds():$.java.util.List;
                getSuccessSplit():boolean;
                setExportSplitResultList(exportSplitResultList:$.java.util.List):void;
                setPayDetailErrorMap(payDetailErrorMap:$.java.util.Map):void;
                setSuccessSplit(successSplit:boolean):void;
            }
            type BankOfferExportSplitEvent_T = BankOfferExportSplitEvent_S & BankOfferExportSplitEvent$;
            interface BankOfferExportSplitEvent extends BankOfferExportSplitEvent_T {
            }
            interface BankAccountModifyFilterEvent_S {
            }
            interface BankAccountModifyFilterEvent_C extends BankAccountModifyFilterEvent_S {
                new(fieldFilterMap:$.java.util.Map):BankAccountModifyFilterEvent;
            }
            interface BankAccountModifyFilterEvent$ {
                /**
                 * 字段添加/修改其过滤条件
                 * @param filter
                 */
                addFieldFilter(filter:$.kd.bos.orm.query.QFilter):void;
                getFieldFilterMap():$.java.util.Map;
                getInvalidMessage():string;
                isPayFailEffect():boolean;
                setInvalidMessage(invalidMessage:string):void;
                setPayFailEffect(payFailEffect:boolean):void;
            }
            type BankAccountModifyFilterEvent_T = BankAccountModifyFilterEvent_S & BankAccountModifyFilterEvent$;
            interface BankAccountModifyFilterEvent extends BankAccountModifyFilterEvent_T {
            }
        }
        namespace kd.sdk.swc.hsas.common.events.person{
            interface InitSyncPersonEvent_S {
            }
            interface InitSyncPersonEvent_C extends InitSyncPersonEvent_S {
                new():InitSyncPersonEvent;
            }
            interface InitSyncPersonEvent$ {
                getFormIdMap():$.java.util.Map;
                getParams():$.java.util.Map;
                setFormIdMap(formIdMap:$.java.util.Map):void;
                setParams(params:$.java.util.Map):void;
            }
            type InitSyncPersonEvent_T = InitSyncPersonEvent_S & InitSyncPersonEvent$;
            interface InitSyncPersonEvent extends InitSyncPersonEvent_T {
            }
            interface AfterSyncPersonCopyEvent_S {
            }
            interface AfterSyncPersonCopyEvent_C extends AfterSyncPersonCopyEvent_S {
                new():AfterSyncPersonCopyEvent;
            }
            interface AfterSyncPersonCopyEvent$ {
                getDestDyList():$.java.util.List;
                getDestEntity():string;
                getParams():$.java.util.Map;
                setDestDyList(destDyList:$.java.util.List):void;
                setDestEntity(destEntity:string):void;
                setParams(params:$.java.util.Map):void;
            }
            type AfterSyncPersonCopyEvent_T = AfterSyncPersonCopyEvent_S & AfterSyncPersonCopyEvent$;
            interface AfterSyncPersonCopyEvent extends AfterSyncPersonCopyEvent_T {
            }
        }
        namespace kd.sdk.swc.hsas.common.events.salarydetailresultexport{
            interface AfterBuildHeadEvent_S {
            }
            interface AfterBuildHeadEvent_C extends AfterBuildHeadEvent_S {
                new(sheet:any,taskInfo:$.kd.bos.dataentity.entity.DynamicObject,gridItemInfo:$.java.util.Map,headers:$.java.util.Map,currRowIndex:number):AfterBuildHeadEvent;
            }
            interface AfterBuildHeadEvent$ {
                /**
                 * 获取当前行索引号
                 * @return 当前行索引号
                 */
                getCurrRowIndex():number;
                /**
                 * 获取项目信息集
                 * @return 项目信息集(一级key为项目的唯一编码；二级key为字段信息，包括：number、name、uniquecode、dataLength、dataType、scale、seq)
                 */
                getGridItemInfo():$.java.util.Map;
                /**
                 * 获取表头信息
                 * @return 表头信息键值对, key:表头中文名，包括核算名单字段和项目的唯一编码；value：表头显示值
                 */
                getHeaders():$.java.util.Map;
                /**
                 * 获取Sheet页签
                 * @return Sheet页签
                 */
                getSheet():any;
                /**
                 * 获取核算任务信息
                 * @return 核算任务信息
                 */
                getTaskInfo():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 设置当前行索引号
                 * @param currRowIndex 当前行索引号
                 */
                setCurrRowIndex(currRowIndex:number):void;
                /**
                 * 设置项目信息集
                 * @param gridItemInfo 项目信息集(一级key为项目的唯一编码；二级key为字段信息，包括：number、name、uniquecode、dataLength、dataType、scale、seq)
                 */
                setGridItemInfo(gridItemInfo:$.java.util.Map):void;
                /**
                 * 设置表头信息
                 * @param headers 表头信息键值对, key:表头中文名，包括核算名单字段和项目的唯一编码；value：表头显示值
                 */
                setHeaders(headers:$.java.util.Map):void;
                /**
                 * 设置Sheet页签
                 * @param sheet Sheet页签
                 */
                setSheet(sheet:any):void;
                /**
                 * 设置核算任务信息
                 * @param taskInfo 核算任务信息
                 */
                setTaskInfo(taskInfo:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type AfterBuildHeadEvent_T = AfterBuildHeadEvent_S & AfterBuildHeadEvent$;
            interface AfterBuildHeadEvent extends AfterBuildHeadEvent_T {
            }
        }
        namespace kd.sdk.swc.hsas.common.events.salaryfile{
            interface SalaryFileImportEvent_S {
            }
            interface SalaryFileImportEvent_C extends SalaryFileImportEvent_S {
                new(importEntityRel:kd.sdk.swc.hsas.common.entity.ImportEntityRel):SalaryFileImportEvent;
            }
            interface SalaryFileImportEvent$ {
                getImportEntityRel():kd.sdk.swc.hsas.common.entity.ImportEntityRel;
                setImportEntityRel(importEntityRel:kd.sdk.swc.hsas.common.entity.ImportEntityRel):void;
            }
            type SalaryFileImportEvent_T = SalaryFileImportEvent_S & SalaryFileImportEvent$;
            interface SalaryFileImportEvent extends SalaryFileImportEvent_T {
            }
            interface InitEmbedChildPageEvent_S {
            }
            interface InitEmbedChildPageEvent_C extends InitEmbedChildPageEvent_S {
                new(salaryFileBoId:long,customParams:$.java.util.Map,pageList:$.java.util.List,initPageDataDTO:kd.sdk.swc.hsas.common.dto.salaryfile.InitPageDataDTO):InitEmbedChildPageEvent;
            }
            interface InitEmbedChildPageEvent$ {
                getCustomParams():$.java.util.Map;
                getInitPageDataDTO():kd.sdk.swc.hsas.common.dto.salaryfile.InitPageDataDTO;
                getPageList():$.java.util.List;
                getSalaryFileBoId():long;
                setCustomParams(customParams:$.java.util.Map):void;
                setInitPageDataDTO(initPageDataDTO:kd.sdk.swc.hsas.common.dto.salaryfile.InitPageDataDTO):void;
                setPageList(pageList:$.java.util.List):void;
                setSalaryFileBoId(salaryFileBoId:long):void;
            }
            type InitEmbedChildPageEvent_T = InitEmbedChildPageEvent_S & InitEmbedChildPageEvent$;
            interface InitEmbedChildPageEvent extends InitEmbedChildPageEvent_T {
            }
            interface SalaryFileBeforeValidateDepEmpDateEvent_S {
            }
            interface SalaryFileBeforeValidateDepEmpDateEvent_C extends SalaryFileBeforeValidateDepEmpDateEvent_S {
                new():SalaryFileBeforeValidateDepEmpDateEvent;
            }
            interface SalaryFileBeforeValidateDepEmpDateEvent$ {
                getValidate():boolean;
                setValidate(validate:boolean):void;
            }
            type SalaryFileBeforeValidateDepEmpDateEvent_T = SalaryFileBeforeValidateDepEmpDateEvent_S & SalaryFileBeforeValidateDepEmpDateEvent$;
            interface SalaryFileBeforeValidateDepEmpDateEvent extends SalaryFileBeforeValidateDepEmpDateEvent_T {
            }
            interface AfterEmbedChildPageEvent_S {
            }
            interface AfterEmbedChildPageEvent_C extends AfterEmbedChildPageEvent_S {
                new(view:$.kd.bos.form.IFormView,salaryFileBoId:long,customParams:$.java.util.Map,pageIds:$.java.util.Map):AfterEmbedChildPageEvent;
            }
            interface AfterEmbedChildPageEvent$ {
                getCustomParams():$.java.util.Map;
                getPageIds():$.java.util.Map;
                getSalaryFileBoId():long;
                getView():$.kd.bos.form.IFormView;
                setCustomParams(customParams:$.java.util.Map):void;
                setPageIds(pageIds:$.java.util.Map):void;
                setSalaryFileBoId(salaryFileBoId:long):void;
                setView(view:$.kd.bos.form.IFormView):void;
            }
            type AfterEmbedChildPageEvent_T = AfterEmbedChildPageEvent_S & AfterEmbedChildPageEvent$;
            interface AfterEmbedChildPageEvent extends AfterEmbedChildPageEvent_T {
            }
            interface SalaryFileExportEvent_S {
            }
            interface SalaryFileExportEvent_C extends SalaryFileExportEvent_S {
                new(importEntityRel:kd.sdk.swc.hsas.common.entity.ImportEntityRel):SalaryFileExportEvent;
            }
            interface SalaryFileExportEvent$ {
                getImportEntityRel():kd.sdk.swc.hsas.common.entity.ImportEntityRel;
                setImportEntityRel(importEntityRel:kd.sdk.swc.hsas.common.entity.ImportEntityRel):void;
            }
            type SalaryFileExportEvent_T = SalaryFileExportEvent_S & SalaryFileExportEvent$;
            interface SalaryFileExportEvent extends SalaryFileExportEvent_T {
            }
        }
        namespace kd.sdk.swc.hsas.formplugin.calperson{
            interface ICalPersonListAutoSumPlugin_S {
            }
            interface ICalPersonListAutoSumPlugin$ {
                /**
                 * 获取薪资明细结果是否自动合计
                 *
                 *  <pre><code>
                 *   @Override
                 *   public boolean isAutoSum() {
                 *       //true 为自动合计
                 *       return true;
                 *   }
                 *  </code></pre>
                 */
                isAutoSum?():boolean;
                isShowSum?():boolean;
            }
            type ICalPersonListAutoSumPlugin_T = ICalPersonListAutoSumPlugin_S & ICalPersonListAutoSumPlugin$;
            interface ICalPersonListAutoSumPlugin extends ICalPersonListAutoSumPlugin_T {
            }
        }
        namespace kd.sdk.swc.hsas.formplugin.extpoint.approve{
            interface ICreateApproveBillExtService_S {
            }
            interface ICreateApproveBillExtService$ {
                /**
                 *  @param createApproveBillValidateEvent
                 *  <pre><code>
                 * @Override
                 *      public void doValidate(CreateApproveBillValidateEvent createApproveBillValidateEvent) {
                 *          List<DynamicObject> calPayRollTasks = createApproveBillValidateEvent.getCalPayRollTasks();
                 *          //根据校验设置提示语可以分为以下四种情况
                 *          //1、全部失败，取消当前操作，设置统一提示语
                 *          createApproveBillValidateEvent.setCancel(true);
                 *          createApproveBillValidateEvent.setErrorMessage("全部失败，取消当前操作，设置统一提示语");
                 *          //2、全部失败，取消当前操作，未设置统一提示语，那就需要每一条都要设置提示语
                 *          createApproveBillValidateEvent.setCancel(true);
                 *          Map<Long, String> validateResult = createApproveBillValidateEvent.getValidateResult();
                 *          for (DynamicObject calPayRollTask : calPayRollTasks) {
                 *              validateResult.put(calPayRollTask.getLong("id"), "错误原因");
                 *          }
                 *          //3、部分失败且继续生成
                 *          for (int i = 0; i < calPayRollTasks.size(); i++) {
                 *              if (i / 2 == 0) {//模拟部分失败
                 *                  DynamicObject calPayRollTask = calPayRollTasks.get(i);
                 *                  validateResult.put(calPayRollTask.getLong("id"), "错误原因");
                 *              }
                 *          }
                 *          //4、全部失败不需要设置取消当前操作
                 *          for (DynamicObject calPayRollTask : calPayRollTasks) {
                 *              validateResult.put(calPayRollTask.getLong("id"), "错误原因");
                 *          }
                 *      }
                 *  </code></pre>
                 */
                doPreValidate(createApproveBillValidateEvent:kd.sdk.swc.hsas.common.events.approve.CreateApproveBillValidateEvent):void;
                /**
                 *  @param approveBillCalPersonDealEvent CreateApproveBillCalPersonDealEvent
                 *
                 *  <pre><code>
                 * public class CreateApproveBillExtPluginDemoImpl implements ICreateApproveBillExtService {
                 *      @Override
                 *      public void setCalPersonSet(CreateApproveBillCalPersonDealEvent approveBillCalPersonDealEvent) {
                 *          IFormView view = approveBillCalPersonDealEvent.getView();
                 *          // 获取当前符合条件的核算名单集合
                 *          Set<Long> calPersonSet = approveBillCalPersonDealEvent.getCalPersonSet();
                 *          // 增加二次过滤校验
                 *          DynamicObjectCollection salaryfile = view.getModel().getDataEntity().getDynamicObjectCollection("salaryfile");
                 *          if(!CollectionUtils.isEmpty(salaryfile)){
                 *              Set<Long> fileSet = salaryfile.stream().map(data -> data.getLong("fbasedataid_id")).collect(Collectors.toSet());
                 *              SWCDataServiceHelper helper = new SWCDataServiceHelper("hsas_calperson");
                 *              QFilter filter = new QFilter("id",QFilter.in,calPersonSet);
                 *              filter.and(new QFilter("salaryfile",QFilter.in,fileSet));
                 *              DynamicObjectCollection collection = helper.queryOriginalCollection("id", new QFilter[]{filter});
                 *              calPersonSet = collection.stream().map(data -> data.getLong("id")).collect(Collectors.toSet());
                 *              //设置二次过滤的核算名单集合
                 *              approveBillCalPersonDealEvent.setCalPersonSet(calPersonSet);
                 *              if(!RequestContext.get().getUserName().contains("test")){
                 *                  // 设置错误提示
                 *                  approveBillCalPersonDealEvent.setErrorCustomMsg("error is test");
                 *              }
                 *          }
                 *      }
                 *  }
                 *  </code></pre>
                 */
                setCalPersonSet(approveBillCalPersonDealEvent:kd.sdk.swc.hsas.common.events.approve.CreateApproveBillCalPersonDealEvent):void;
            }
            type ICreateApproveBillExtService_T = ICreateApproveBillExtService_S & ICreateApproveBillExtService$;
            interface ICreateApproveBillExtService extends ICreateApproveBillExtService_T {
            }
            interface IApproveOverViewDealExtService_S {
            }
            interface IApproveOverViewDealExtService$ {
                /**
                 * 处理审批单概览数据
                 *
                 * @param approveOverViewDealEvent
                 * <pre><code>
                 * @Override
                 *     public void dealOverViewValue(ApproveOverViewDealEvent approveOverViewDealEvent) {
                 *         String type = approveOverViewDealEvent.getType();
                 *         if (SWCStringUtils.equals(type, "preview")) {
                 *             //审批单模板预览设置默认值即可
                 *             approveOverViewDealEvent.setValue("88.88%");
                 *         } else if (SWCStringUtils.equals(type, "hsas_approvebill")) {
                 *             //审批单页面
                 *             List<Long> calPersonIds = approveOverViewDealEvent.getCalPersonIds();
                 *             //审批单模板中的配置
                 *             Map<String, Object> overViewEntry = approveOverViewDealEvent.getOverViewEntry();
                 *             //根据审批单模板中的配置进行数据查询和组装
                 *             approveOverViewDealEvent.setValue("88.88%");
                 *         }
                 *
                 *     }
                 *  </code></pre>
                 */
                dealOverViewValue(approveOverViewDealEvent:kd.sdk.swc.hsas.common.events.approve.ApproveOverViewDealEvent):void;
            }
            type IApproveOverViewDealExtService_T = IApproveOverViewDealExtService_S & IApproveOverViewDealExtService$;
            interface IApproveOverViewDealExtService extends IApproveOverViewDealExtService_T {
            }
            interface IApproveInvokeReportFormExtService_S {
            }
            interface IApproveInvokeReportFormExtService$ {
                /**
                 *  @param approveInvokeReportFormEvent
                 *  <pre><code>
                 * @Override
                 *      public void filter(ApproveInvokeReportFormEvent approveInvokeReportFormEvent) {
                 *          //示例中演示了过滤掉一半的核算名单或发放明细
                 *          DynamicObject approveBillDynamicObject = approveInvokeReportFormEvent.getApproveBillDynamicObject();
                 *          //可从薪资审批单上获取薪资审批单中的属性：例如，审批单模板，审批单模板版本，管理组织，薪资核算组
                 *          //获取审批单模板版本对象
                 *          DynamicObject approveBillTplv = approveBillDynamicObject.getDynamicObject("approvebilltplv");
                 *          //获取薪资核算组对象
                 *          DynamicObject payrollGroup = approveBillDynamicObject.getDynamicObject("payrollgroup");
                 *          String reportType = approveInvokeReportFormEvent.getReportType();
                 *          if ("3".equals(reportType)) {
                 *              //发放明细表
                 *              String pageType = approveInvokeReportFormEvent.getPageType();
                 *              if (SWCStringUtils.equals(HSAS_APPROVEBILLPREVIEW, pageType)) {
                 *                  List<Long> calPersonIds = approveInvokeReportFormEvent.getCalPersonIds();
                 *                  if (calPersonIds != null && calPersonIds.size() > 1) {
                 *                      List<List<Long>> partition = Lists.partition(calPersonIds, calPersonIds.size() / 2);
                 *                      approveInvokeReportFormEvent.setCalPersonIds(partition.get(1));
                 *                  }
                 *                  //对名单进行过滤
                 *              } else {
                 *                  List<Long> payDetailIds = approveInvokeReportFormEvent.getPayDetailIds();
                 *                  //对发放明细进行过滤
                 *                  if (payDetailIds != null && payDetailIds.size() > 1) {
                 *                      List<List<Long>> partition = Lists.partition(payDetailIds, payDetailIds.size() / 2);
                 *                      approveInvokeReportFormEvent.setCalPersonIds(partition.get(1));
                 *                  }
                 *              }
                 *          } else {
                 *              //薪资明细表 薪资汇总表
                 *              List<Long> calPersonIds = approveInvokeReportFormEvent.getCalPersonIds();
                 *              //对名单进行过滤
                 *              if (calPersonIds != null && calPersonIds.size() > 1) {
                 *                  List<List<Long>> partition = Lists.partition(calPersonIds, calPersonIds.size() / 2);
                 *                  approveInvokeReportFormEvent.setCalPersonIds(partition.get(1));
                 *              }
                 *  // 最终会根据 approveInvokeReportFormEvent 中的calPersonIds 进行薪资数据的过滤
                 *          }
                 *      }
                 *  </code></pre>
                 */
                filter?(approveInvokeReportFormEvent:kd.sdk.swc.hsas.common.events.approve.ApproveInvokeReportFormEvent):void;
                /**
                 * @param dealEvent
                 * <code><pre>
                 *     @Override
                 *     public void referReportDeal(ApproveReferReportDealEvent dealEvent) {
                 *         // 获取审批单模板审批视图对象
                 *         DynamicObject schemeDy = dealEvent.getSchemeDy();
                 *         // 获取数据源
                 *         String referReport = schemeDy.getString("referreport");
                 *         if("4".equals(referReport)) {
                 *             //打开列表页面
                 *             ListShowParameter listShowParameter = new ListShowParameter();
                 *             listShowParameter.setHasRight(true);
                 *             listShowParameter.setBillFormId("hsas_paydetail");
                 *             ListFilterParameter listFilterParameter = new ListFilterParameter();
                 *             //设置数据过滤条件
                 *             listFilterParameter.setFilter(new QFilter("calpersonid", QFilter.in, dealEvent.getCalPersonIdList()));
                 *             listShowParameter.setListFilterParameter(listFilterParameter);
                 *             dealEvent.setShowParameter(listShowParameter);
                 *         }else {
                 *             //打开报表页面
                 *             ReportShowParameter showParameter = new ReportShowParameter();
                 *             // 小计
                 *             String sumtype = schemeDy.getString("sumtype");
                 *             // 是否显示总计
                 *             boolean isdisplaytotal = schemeDy.getBoolean("isdisplaytotal");
                 *             String schemename = schemeDy.getString("schemename");
                 *             // 报表打开方式，1=原页面，2=引用
                 *             showParameter.setCustomParam("openway", "2");
                 *             QFilter filter = new QFilter("id",QFilter.in, dealEvent.getCalPersonIdList());
                 *             String idList = SerializationUtils.toJsonString(filter);
                 *             // 过滤器
                 *             showParameter.setCustomParam("filter", idList);
                 *             showParameter.setFormId("hsas_salarydetailrpt_inh");
                 *             // 小计类型 0仅显示小计 ；1仅显示明细 ；2显示明细和小计
                 *             showParameter.setCustomParam("sumtypesign", sumtype);
                 *             SWCDataServiceHelper reportschemeHelper =
                 *                     new SWCDataServiceHelper(SWCEntityConstants.HSAS_SALARYRPTDISPLAYSCHM);
                 *             QFilter filterScheme = new QFilter("1",QFilter.equals,1);
                 *             DynamicObject reportScheme = reportschemeHelper.queryOne("id", filterScheme.toArray(), "createtime desc");
                 *             // 显示方案
                 *             showParameter.setCustomParam("displayscheme", reportScheme.getLong("id"));
                 *             // 显示总计行
                 *             showParameter.setCustomParam("isshowtotal", isdisplaytotal);
                 *             showParameter.setCustomParam("isExportByParentMethod", Boolean.TRUE);
                 *             showParameter.setCustomParam("schemename", schemename);
                 *             // 修改Caption = 修改引出文件名称
                 *             FormConfig formConfig = FormMetadataCache.getFormConfig(showParameter.getFormId());
                 *             formConfig.setCaption(new LocaleString(schemename));
                 *             showParameter.setFormConfig(formConfig);
                 *
                 *             SWCDataServiceHelper serviceHelper = new SWCDataServiceHelper("bd_currency");
                 *             QFilter currencyFilter = new QFilter(ID, QFilter.equals, SWCBaseConstants.INT_ONE);
                 *             DynamicObject currencyDy =
                 *                     serviceHelper.queryOne("id,name,amtprecision,priceprecision,sign", new QFilter[]{currencyFilter});
                 *             showParameter.setCustomParam("calcurrency", SerializationUtils.serializeToBase64(currencyDy));
                 *
                 *             dealEvent.setShowParameter(showParameter);
                 *
                 *         }
                 *     }
                 * </pre></code>
                 */
                referReportDeal?(dealEvent:kd.sdk.swc.hsas.common.events.approve.ApproveReferReportDealEvent):void;
                /**
                 * @param downEvent
                 * <code><pre>
                 *      @Override
                 *     public void referReportDown(ApproveReferReportDownEvent downEvent) {
                 *         //审批单下载页面
                 *         IFormView parentView = downEvent.getParentView();
                 *         //当前下载数据页面
                 *         IFormView downView = downEvent.getDownView();
                 *         //数据源
                 *         String referReport = downEvent.getReferReport();
                 *         if ("4".equals(referReport)) {
                 *             //列表下载
                 *             OperateOption option = OperateOption.create();
                 *             option.setVariableValue(OperateOptionConst.ISHASRIGHT, "true");
                 *             downView.invokeOperation("exportlist", option);
                 *             parentView.sendFormAction(downView);
                 *         } else {
                 *             //报表下载
                 *             ReportList reportList = downView.getControl("reportlistap");
                 *             if (null != reportList) {
                 *                 AbstractReportListModel model = (AbstractReportListModel) reportList.getReportModel();
                 *                 ReportTaskResult result = model.getReportTaskResult();
                 *                 if (result == null) {
                 *                     // 如果不刷新，会导致当前列表引出时取到结果对象为空报错
                 *                     ((ReportView) downView).refresh();
                 *                 }
                 *                 String url = reportList.exportExcel();
                 *                 // 平台新加权限参数，审批单中报表权限参数有问题，直接替换不影响下载
                 *                 if (url.contains("attachId=")) {
                 *                     url = url.replace("attachId=", "noattachId=");
                 *                 }
                 *                 parentView.download(url);
                 *                 parentView.sendFormAction(downView);
                 *             }
                 *         }
                 *     }
                 * </pre></code>
                 */
                referReportDown?(downEvent:kd.sdk.swc.hsas.common.events.approve.ApproveReferReportDownEvent):void;
            }
            type IApproveInvokeReportFormExtService_T = IApproveInvokeReportFormExtService_S & IApproveInvokeReportFormExtService$;
            interface IApproveInvokeReportFormExtService extends IApproveInvokeReportFormExtService_T {
            }
            interface IApproveSpecialRuleVerifyExtPlugin_S {
            }
            interface IApproveSpecialRuleVerifyExtPlugin$ {
                /**
                 *  @param event AfterSalaryCalEvent
                 *
                 *  <pre><code>
                 * public class ApproveSpecialRuleVerifyExtPluginDemoImpl implements IApproveSpecialRuleVerifyExtPlugin {
                 *
                 *      @Override
                 *      public void afterVerifySpecialRule(AfterVerifySpecialRuleEvent event) {
                 *          //当前审批单动态实体
                 *          DynamicObject approve = event.getApprove();
                 *          //当前审批单使用审批单模板特殊规则分录行
                 *          DynamicObject specialDy = event.getSpecialDy();
                 *          //是否匹配当前规则 true - 匹配 false - 不匹配
                 *          Boolean conformRule = event.getConformRule();
                 *          event.setConformRule(Boolean.TRUE);
                 *      }
                 *  }
                 *  </code></pre>
                 */
                afterVerifySpecialRule?(event:kd.sdk.swc.hsas.common.events.approve.AfterVerifySpecialRuleEvent):void;
            }
            type IApproveSpecialRuleVerifyExtPlugin_T = IApproveSpecialRuleVerifyExtPlugin_S & IApproveSpecialRuleVerifyExtPlugin$;
            interface IApproveSpecialRuleVerifyExtPlugin extends IApproveSpecialRuleVerifyExtPlugin_T {
            }
        }
        namespace kd.sdk.swc.hsas.formplugin.extpoint.formula{
            interface IFormulaItemTreeExtPlugin_S {
            }
            interface IFormulaItemTreeExtPlugin$ {
                /**
                 * 重置薪酬项目父节点
                 * @param event
                 */
                resetSalaryItemParentNode?(event:kd.sdk.swc.hsas.common.events.formula.BeforeBuildItemTreeEvent):void;
            }
            type IFormulaItemTreeExtPlugin_T = IFormulaItemTreeExtPlugin_S & IFormulaItemTreeExtPlugin$;
            interface IFormulaItemTreeExtPlugin extends IFormulaItemTreeExtPlugin_T {
            }
        }
        namespace kd.sdk.swc.hsas.formplugin.extpoint.paydetail{
            interface IBankOfferExtPlugin_S {
            }
            interface IBankOfferExtPlugin$ {
                /**
                 *  @param event BankOfferFilterEvent
                 *
                 * <pre><code>
                 * public class BankOfferFilterTest implements IBankOfferExtPlugin {
                 *
                 *      @Override
                 *      public void beforeBankOfferFilter(BankOfferFilterEvent event) {
                 *          // 添加付款状态为暂存数据的过滤条件
                 *          QFilter payStateFilter = new QFilter("paystate", QFilter.equals, "0");
                 *          // 添加到过滤事件中
                 *          event.addFieldFilter(payStateFilter);
                 *      }
                 *  }
                 *  </code></pre>
                 */
                beforeBankOfferFilter?(event:kd.sdk.swc.hsas.common.events.paydetail.BankOfferFilterEvent):void;
            }
            type IBankOfferExtPlugin_T = IBankOfferExtPlugin_S & IBankOfferExtPlugin$;
            interface IBankOfferExtPlugin extends IBankOfferExtPlugin_T {
            }
        }
        namespace kd.sdk.swc.hsas.formplugin.extpoint.resultcover{
            interface ICalResultCoverSalaryItemExtPlugin_S {
            }
            interface ICalResultCoverSalaryItemExtPlugin$ {
                /**
                 * @param event
                 *
                 * <pre><code>
                 * public class CalResultCoverSalaryItemExtPlugin implements ICalResultCoverSalaryItemExtPlugin {
                 *
                 *     private static final Log log = LogFactory.getLog(CalResultCoverSalaryItemExtPlugin.class);
                 *
                 *     @Override
                 *     public void fillExtSalaryItem(CalResultCoverSalaryItemEvent event) {
                 *         log.info("进入计算结果覆盖薪酬项目扩展埋点");
                 *         List<Long> salaryItemList = new ArrayList<>(1);
                 *         salaryItemList.add(1389815057520536576L);
                 *         event.setExcludeItemIdList(salaryItemList);
                 *         event.setCalTaskId(1924753424348462080L);
                 *     }
                 * }
                 * </code></pre>
                 */
                fillExtSalaryItem?(event:kd.sdk.swc.hsas.common.events.calperson.CalResultCoverSalaryItemEvent):void;
            }
            type ICalResultCoverSalaryItemExtPlugin_T = ICalResultCoverSalaryItemExtPlugin_S & ICalResultCoverSalaryItemExtPlugin$;
            interface ICalResultCoverSalaryItemExtPlugin extends ICalResultCoverSalaryItemExtPlugin_T {
            }
        }
        namespace kd.sdk.swc.hsas.formplugin.extpoint.salarydetailresult{
            interface ISalaryDetailResultExportExtPlugin_S {
            }
            interface ISalaryDetailResultExportExtPlugin$ {
                /**
                 * @param args
                 *
                 * <pre><code>
                 * import kd.sdk.swc.hsas.formplugin.extpoint.salarydetailresult.ISalaryDetailResultExportPlugin;
                 * import kd.sdk.swc.hsas.common.events.salarydetailresultexport.AfterBuildHeadEvent;
                 *
                 * public class SalaryDetailResultExportExtPlugin_demo implements ISalaryDetailResultExportPlugin {
                 *
                 *     public void afterBuildHead(AfterBuildHeadEvent arg) {
                 *         // 创建一个新行
                 *         arg.getSheet().createRow(arg.getCurrRowIndex());
                 *
                 *         //对新行进行处理，如合并单元格等 TODO
                 *
                 *         //设置excel数据填充起始行
                 *         arg.setCurrRowIndex(arg.getCurrRowIndex()+1);
                 *     }
                 * }
                 * </code></pre>
                 */
                afterBuildHead?(args:kd.sdk.swc.hsas.common.events.salarydetailresultexport.AfterBuildHeadEvent):void;
            }
            type ISalaryDetailResultExportExtPlugin_T = ISalaryDetailResultExportExtPlugin_S & ISalaryDetailResultExportExtPlugin$;
            interface ISalaryDetailResultExportExtPlugin extends ISalaryDetailResultExportExtPlugin_T {
            }
        }
        namespace kd.sdk.swc.hsas.formplugin.extpoint.salaryfile{
            interface ISalaryFileEditExtPlugin_S {
            }
            interface ISalaryFileEditExtPlugin$ {
                /**
                 * 初始化子页面后，新增基础资料附表页面
                 *
                 * <pre><code>
                 *
                 * public class JnrcEditDemoExtPlugin implements ISalaryFileEditExtPlugin {
                 *
                 *     public void initEmbedChildPage(InitEmbedChildPageEvent args) {
                 *         args.getInitPageDataDTO().getHidePages().add(SalaryFileConstants.PAGE_HSAS_ITEMGRPCFG);
                 *     }
                 *
                 *     //设置面板的展开状态，空页面时展开，嵌入业务页面的时候不展开
                 *     private static void setParentAdvCollapsible(IFormView formView, String flexKey, Boolean collapsible) {
                 *         Map<String, Object> map = new HashMap<>(1);
                 *         map.put(ClientProperties.Collapsible, collapsible);
                 *         formView.updateControlMetadata(flexKey, map);
                 *     }
                 *
                 *     public void afterEmbedChildPage(AfterEmbedChildPageEvent args) {
                 *         String pageNumber = "kdtest_hsas_jinengrencai"; //页面元数据标识
                 *         String flexNumber = "kdtest_jl_flex_jineng"; //档案详情待嵌入的flex信息块控件标识
                 *
                 *         Map<String, String> pageIds = args.getPageIds();
                 *         Map<String, Object> customParams = args.getCustomParams();
                 *         //salaryfileid -> 1677432333910672384
                 *         Long salaryfileid = Long.parseLong(String.valueOf(customParams.get("salaryfileid")));
                 *
                 *         Long relatedPkId = 0L;//技能人才数据id,没有数据传0
                 *
                 *         SWCDataServiceHelper helper = new SWCDataServiceHelper(pageNumber);
                 *         QFilter fileIdFilter = new QFilter(getFileProp(pageNumber), QFilter.equals, salaryfileid);
                 *         QFilter hisCurrFilter = BaseDataHisHelper.getHisCurrFilter();
                 *         //如果有数据，应该只有1个
                 *         DynamicObject[] datas = helper.query("id", new QFilter[]{fileIdFilter, hisCurrFilter});
                 *         if (datas != null && datas.length >= 1) {
                 *             relatedPkId = datas[0].getLong("id");
                 *         }
                 *
                 *         String showMessage = ResManager.loadKDString("暂无技能人才二开案例设置", "JnrcEditExtPlugin_90", "swc-hsas-business");
                 *         customParams.put(SalaryFileConstants.EMPTY_PAGE_SHOW_MSG, showMessage);
                 *
                 *         // 验权
                 *         boolean hasPerm = checkPermission(SWCPermissionConstants.PERMISSION_QUERY, pageNumber);
                 *         if (hasPerm) {
                 *             if (null == relatedPkId || relatedPkId.compareTo(0L) == 0) {
                 *                 // 附表无数据
                 *                 showDefaultEmptyPage(args.getView(), customParams, pageNumber, flexNumber);
                 *             } else {
                 *                 // 附表有数据
                 *                 String pageId = asyncEmbedPage(args.getView(), flexNumber, pageNumber, relatedPkId, customParams);
                 *                 pageIds.put(pageNumber, pageId);
                 *             }
                 *
                 *         } else {
                 *             //没有权限则隐藏此信息块
                 *             args.getView().setVisible(Boolean.FALSE, flexNumber);
                 *         }
                 *     }
                 *
                 *     //获取档案属性，默认应该salaryfile，二开可能自己定义，如果没有档案字段就不用过滤了
                 *     private String getFileProp(String pageName) {
                 *         String fileProp = null;
                 *
                 *         Map<String, IDataEntityProperty> mainEntityType = EntityMetadataCache.getDataEntityType(pageName).getFields();
                 *         for(Map.Entry<String, IDataEntityProperty> entry: mainEntityType.entrySet()){
                 *             if(entry.getValue() instanceof BasedataProp){
                 *                 BasedataProp prop = ((BasedataProp) entry.getValue());
                 *                 if (SWCEntityConstants.HSAS_SALARYFILE.equals(prop.getBaseEntityId())) {
                 *                     fileProp = entry.getKey();
                 *                     break;
                 *                 }
                 *             }
                 *         }
                 *
                 *         return fileProp;
                 *     }
                 *
                 *     //异步嵌入页面
                 *     private String asyncEmbedPage(IFormView view, String targetKey, String pageNumber, Long pkId, Map<String, Object> customParams) {
                 *         //设置面板的展开状态
                 *         setParentAdvCollapsible(view, targetKey, Boolean.FALSE);
                 *
                 *         BaseShowParameter showParameter = new BaseShowParameter();
                 *         showParameter.getOpenStyle().setShowType(ShowType.InContainer);
                 *         showParameter.getOpenStyle().setTargetKey(targetKey);
                 *         showParameter.setFormId(pageNumber);
                 *         showParameter.setCustomParams(customParams);
                 *         showParameter.setSendToClient(true);
                 *         if (null != pkId && !pkId.equals(0L)) {
                 *             showParameter.setPkId(pkId);
                 *             showParameter.setStatus(OperationStatus.VIEW);
                 *         }
                 *
                 *         view.showForm(showParameter);
                 *         return showParameter.getPageId();
                 *     }
                 *
                 *     //验证权限
                 *     private boolean checkPermission(String permItemId, String entityName) {
                 *         Long userId = RequestContext.get().getCurrUserId();
                 *         boolean hasPerm = SWCPermissionServiceHelper.hasPerm(userId, "/UHMBBGZQ65X", entityName, permItemId);
                 *         return hasPerm;
                 *     }
                 *
                 *     //显示空页面
                 *     private void showDefaultEmptyPage(IFormView view, Map<String, Object> customParams, String pageNumber, String targetFlex) {
                 *         //空页面时展开
                 *         setParentAdvCollapsible(view, targetFlex, Boolean.TRUE);
                 *
                 *         String status = (String) customParams.get(SWCBaseConstants.STATUS);
                 *         String isOnlyView = (String) customParams.get("isOnlyView");
                 *
                 *         // 档案状态为已废弃和已提交时，不可编辑
                 *         DefaultEmptyPageEnum pageType = DefaultEmptyPageEnum.NEW_DATA_PAGE_TYPE;
                 *         if (SWCBaseConstants.STATUS_ABANDONED.equals(status) || SWCBaseConstants.STATUS_SUBMIT.equals(status) || "true".equals(isOnlyView)) {
                 *             pageType = DefaultEmptyPageEnum.VIEW_DATA_PAGE_TYPE;
                 *         }
                 *
                 *         DefaultEmptyPage defaultEmptyPage = new DefaultEmptyPage(pageType, targetFlex, ShowType.InContainer);
                 *         Map<String, Object> params = defaultEmptyPage.getCustomParams();
                 *         params.put(SalaryFileConstants.PAGE_NUMBER, pageNumber);
                 *         params.put(SalaryFileConstants.TARGET_FLEX, targetFlex);
                 *         params.putAll(customParams);
                 *
                 *         defaultEmptyPage.setShowMessage(String.valueOf(customParams.get(SalaryFileConstants.EMPTY_PAGE_SHOW_MSG)));
                 *
                 *         view.showForm(defaultEmptyPage.getFormShowParameter());
                 *     }
                 * }
                 *
                 * </code></pre>
                 *
                 * @param args 嵌入子页面之后的事件，包含档案id，页面视图等信息
                 */
                afterEmbedChildPage?(args:kd.sdk.swc.hsas.common.events.salaryfile.AfterEmbedChildPageEvent):void;
                /**
                 * 初始化子页面时，隐藏标品的附表页面
                 *
                 * <pre><code>
                 *
                 *     public void initEmbedChildPage(InitEmbedChildPageEvent args) {
                 *         //例如隐藏标品的项目资格组设置附表： SalaryFileConstants.PAGE_HSAS_ITEMGRPCFG
                 *         args.getInitPageDataDTO().getHidePages().add(SalaryFileConstants.PAGE_HSAS_ITEMGRPCFG);
                 *     }
                 *
                 * </code></pre>
                 *
                 * @param args 初始化处理事件，包含档案id，页面参数等信息
                 */
                initEmbedChildPage?(args:kd.sdk.swc.hsas.common.events.salaryfile.InitEmbedChildPageEvent):void;
            }
            type ISalaryFileEditExtPlugin_T = ISalaryFileEditExtPlugin_S & ISalaryFileEditExtPlugin$;
            interface ISalaryFileEditExtPlugin extends ISalaryFileEditExtPlugin_T {
            }
        }
        namespace kd.sdk.swc.hsas.formplugin.extpoint.salaryrpt{
            interface ISalaryDisplaySchemeExtPlugin_S {
            }
            interface ISalaryDisplaySchemeExtPlugin$ {
                /**
                 * 是否自动添加薪酬项目的二级表头，为true值时，显示方案添加薪酬项目时，自动将薪酬项目类别名称设置为二级表头
                 * @return
                 */
                isAutoAddSalaryItemType?():boolean;
            }
            type ISalaryDisplaySchemeExtPlugin_T = ISalaryDisplaySchemeExtPlugin_S & ISalaryDisplaySchemeExtPlugin$;
            interface ISalaryDisplaySchemeExtPlugin extends ISalaryDisplaySchemeExtPlugin_T {
            }
        }
        namespace kd.sdk.swc.hsas.service.spi{
            interface CalResultQueryService_S {
                /**
                 * 获取CalPersonQueryService实例对象
                 *
                 * @return
                 */
                get():CalResultQueryService;
            }
            interface CalResultQueryService$ {
                /**
                 * 获取指定项目的项目信息集（薪资项目ITEMSL、取数项目ITEMFT、业务项目ITEMBS、支持项目ITEMSP，分别获取）
                 *
                 * @param itemType   项目类型，kd.sdk.swc.hsas.common.enums.SalaryItemTypeEnum.XXX.getCode()
                 * @param itemIdList 指定类型项目ID集合
                 * @return Map<项目ID ， Map < 属性 ， 值>>
                 * 项目属性包括number：项目编码，name：项目名称，
                 * storageType:存储类型（文本text，数值num，日期date，金额amount），
                 * showType：显示类型（文本text,小数num,整数int,金额amount,日期date,复选框bool），
                 * uniqueCode：项目唯一编码
                 * --以下属性业务项目不返回
                 * scale:数据精度
                 * dataround:舍位方式（1010：四舍五入，1020：向下舍入数字（舍位），1030：向上舍入数字（进位））
                 * datalength:数据长度
                 */
                getCalItemMap?(itemType:string,itemIdList:$.java.util.List):$.java.util.Map;
                /**
                 * 按条件查询核算名单ID集合
                 *
                 * @param qFilters 查询过滤条件，基于查询配置hsas_salarycalresultquery，传入相关查询条件
                 * @param orderBys 排序条件，基于查询配置hsas_salarycalresultquery，传入相关查询条件
                 * @param start    分页参数，开始行数
                 * @param limit    分页参数，每页行数，传入-1时不分页
                 * @return List<Long>
                 */
                getCalPersonIds?(qFilters:$.kd.bos.orm.query.QFilter[],orderBys:string,start:number,limit:number):$.java.util.List;
                /**
                 * 指定核算名单ID集合,查询核算名单相关信息集合
                 *
                 * @param calPersonFields 查询属性，基于查询配置hsas_salarycalresultquery
                 * @param pkList          核算名单ID集合
                 * @param orderBys        排序条件，基于查询配置hsas_salarycalresultquery，传入相关排序字段
                 * @return DynamicObjectCollection
                 */
                getCalPersonInfos(calPersonFields:$.java.util.List,pkList:$.java.util.List,orderBys:string,start:number,limit:number):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                /**
                 * 按条件查询核算名单相关信息集合
                 *
                 * @param calPersonFields 查询属性，基于查询配置hsas_salarycalresultquery
                 * @param qFilters        查询过滤条件，基于查询配置hsas_salarycalresultquery，传入相关查询条件
                 * @param orderBys        排序条件，基于查询配置hsas_salarycalresultquery，传入相关排序字段
                 * @param start           分页参数，开始行数
                 * @param limit           分页参数，每页行数，传入-1时不分页
                 * @return DynamicObjectCollection
                 */
                getCalPersonInfos(calPersonFields:$.java.util.List,qFilters:$.kd.bos.orm.query.QFilter[],orderBys:string,start:number,limit:number):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                /**
                 * 获取指定项目薪资明细结果（薪资项目ITEMSL、取数项目ITEMFT、业务项目ITEMBS、支持项目ITEMSP，分别获取）
                 *
                 * @param calPersonIdList 核算名单ID集合
                 * @param itemType        项目类型，如kd.sdk.swc.hsas.common.enums.SalaryItemTypeEnum.ITEMSL.getCode()
                 * @param itemIdList      指定类型项目ID集合
                 * @return Map<核算名单ID ， Map < 项目ID ， 值>>
                 */
                getCalResult(calPersonIdList:$.java.util.List,itemType:string,itemIdList:$.java.util.List):$.java.util.Map;
                /**
                 * 获取指定项目薪资明细结果（薪资项目ITEMSL、取数项目ITEMFT、业务项目ITEMBS、支持项目ITEMSP，分别获取）
                 *
                 * @param calPersonIdList 核算名单ID集合
                 * @param itemType        项目类型，如kd.sdk.swc.hsas.common.enums.SalaryItemTypeEnum.ITEMSL.getCode()
                 * @param itemInfoMap      指定类型项目集合
                 * @return Map<核算名单ID ， Map < 项目ID ， 值>>
                 */
                getCalResult(calPersonIdList:$.java.util.List,itemType:string,itemInfoMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 获取指定项目薪资明细结果（薪资项目ITEMSL、取数项目ITEMFT、业务项目ITEMBS、支持项目ITEMSP，分别获取）
                 *
                 * @param calTableIdList 核算列表ID集合
                 * @param itemType       项目类型，如kd.sdk.swc.hsas.common.enums.SalaryItemTypeEnum.ITEMSL.getCode()
                 * @param itemInfoMap     指定类型项目集合
                 * @return Map<核算名单ID ， Map < 项目ID ， 值>>
                 */
                getCalResultByCalTableId(calTableIdList:$.java.util.List,itemType:string,itemInfoMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 获取指定项目薪资明细结果（薪资项目ITEMSL、取数项目ITEMFT、业务项目ITEMBS、支持项目ITEMSP，分别获取）
                 *
                 * @param calTableIdList 核算列表ID集合
                 * @param itemType       项目类型，如kd.sdk.swc.hsas.common.enums.SalaryItemTypeEnum.ITEMSL.getCode()
                 * @param itemIdList     指定类型项目ID集合
                 * @return Map<核算名单ID ， Map < 项目ID ， 值>>
                 */
                getCalResultByCalTableId(calTableIdList:$.java.util.List,itemType:string,itemIdList:$.java.util.List):$.java.util.Map;
                /**
                 * 获取薪资项目公式中实际使用的业务项目对应的业务数据
                 * @param requestMap
                 * @return
                 */
                getSalaryItemRelBizItemResult?(requestMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 获取薪资项目薪资明细结果（薪资项目）
                 *
                 * @param calPersonIdList  核算名单ID集合
                 * @param salaryItemIdList 薪酬项目ID集合
                 * @return Map<核算名单ID ， Map < 项目ID ， 值>>
                 */
                getSalaryResult(calPersonIdList:$.java.util.List,salaryItemIdList:$.java.util.List):$.java.util.Map;
                /**
                 * 获取薪资项目薪资明细结果（薪资项目）
                 *
                 * @param calPersonIdList  核算名单ID集合
                 * @param salaryItemInfoMap 薪酬项目集合
                 * @return Map<核算名单ID ， Map < 项目ID ， 值>>
                 */
                getSalaryResult(calPersonIdList:$.java.util.List,salaryItemInfoMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 获取薪资项目薪资明细结果（薪资项目）
                 *
                 * @param calTableIdList   核算列表ID集合
                 * @param salaryItemInfoMap 薪酬项目集合
                 * @return Map<核算名单ID ， Map < 项目ID ， 值>>
                 */
                getSalaryResultByCalTableId(calTableIdList:$.java.util.List,salaryItemInfoMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 获取薪资项目薪资明细结果（薪资项目）
                 *
                 * @param calTableIdList   核算列表ID集合
                 * @param salaryItemIdList 薪酬项目ID集合
                 * @return Map<核算名单ID ， Map < 项目ID ， 值>>
                 */
                getSalaryResultByCalTableId(calTableIdList:$.java.util.List,salaryItemIdList:$.java.util.List):$.java.util.Map;
            }
            type CalResultQueryService_T = CalResultQueryService_S & CalResultQueryService$;
            interface CalResultQueryService extends CalResultQueryService_T {
            }
            interface CalPersonListService_S {
                /**
                 * 获取CalPersonListService实例对象
                 *
                 * @return
                 */
                get():CalPersonListService;
            }
            interface CalPersonListService$ {
                /**
                 * 获取核算任务可更新的信息
                 *
                 * @param id 核算任务的主键id
                 * @return 返回信息 {"addFileHisIds": [111], "updateFileIds": [11111], "delFileIds": [11001]}
                 * addFileHisIds-待添加的档案版本id集合
                 * updateFileIds-待更新的档案boid集合
                 * delFileIds-待删除的档案boid集合
                 */
                getUpdateInfoByTaskId?(id:long):$.java.util.Map;
            }
            type CalPersonListService_T = CalPersonListService_S & CalPersonListService$;
            interface CalPersonListService extends CalPersonListService_T {
            }
        }
        namespace kd.sdk.swc.hsbp{
            interface SdkHsbpModule_S {
            }
            type SdkHsbpModule_ST = $.kd.sdk.module.Module & SdkHsbpModule_S;
            interface SdkHsbpModule_C extends SdkHsbpModule_ST {
                new():SdkHsbpModule;
            }
            interface SdkHsbpModule$ {
            }
            type SdkHsbpModule_T = $.kd.sdk.module.Module & SdkHsbpModule_S & SdkHsbpModule$;
            interface SdkHsbpModule extends SdkHsbpModule_T {
            }
        }
        namespace kd.sdk.swc.hsbp.business.spi{
            interface SWCFilterCalSalaryFile_S {
                /**
                 * 获取SWCFilterCalSalaryFile实例对象
                 *
                 * @return
                 */
                get():SWCFilterCalSalaryFile;
            }
            interface SWCFilterCalSalaryFile$ {
                /**
                 * 根据核算任务Id, 对满足核算名单过滤条件的档案BoID或者核算名单中的档案BoId，做过滤；过滤出仅仅从前端业务数据来的档案BoId
                 *
                 * @param taskId 核算任务Id
                 * @param currUserId 当前用户Id, 如果传空，则不对档案做数据权限过滤
                 * @param salaryFileIdList 满足核算名单过滤条件的档案BoID或者核算名单中的档案BoId
                 * @return 过滤出仅仅从前端业务数据来的档案BoId
                 */
                filterSalaryFileBoIdsOnlyInBizData?(taskId:long,currUserId:long,salaryFileIdList:$.java.util.List):$.java.util.List;
            }
            type SWCFilterCalSalaryFile_T = SWCFilterCalSalaryFile_S & SWCFilterCalSalaryFile$;
            interface SWCFilterCalSalaryFile extends SWCFilterCalSalaryFile_T {
            }
            interface SWCSalaryParameterService_S {
                /**
                 * 获取SWCSalaryParameterService实例对象
                 *
                 * @return
                 */
                get():SWCSalaryParameterService;
            }
            interface SWCSalaryParameterService$ {
                /**
                 * 通过参数编码获取薪酬领域参数
                 *
                 * @param paramCfgNmber
                 * @return
                 */
                getSalaryParam(paramCfgNmber:string):$.java.util.Map;
                /**
                 * 通过参数编码获取薪酬领域参数的指定值
                 *
                 * @param paramCfgNmber
                 * @param paramKey
                 * @return
                 */
                getSalaryParam(paramCfgNmber:string,paramKey:string):any;
            }
            type SWCSalaryParameterService_T = SWCSalaryParameterService_S & SWCSalaryParameterService$;
            interface SWCSalaryParameterService extends SWCSalaryParameterService_T {
            }
        }
        namespace kd.sdk.swc.hsbs{
            interface SdkHsbsModule_S {
            }
            type SdkHsbsModule_ST = $.kd.sdk.module.Module & SdkHsbsModule_S;
            interface SdkHsbsModule_C extends SdkHsbsModule_ST {
                new():SdkHsbsModule;
            }
            interface SdkHsbsModule$ {
            }
            type SdkHsbsModule_T = $.kd.sdk.module.Module & SdkHsbsModule_S & SdkHsbsModule$;
            interface SdkHsbsModule extends SdkHsbsModule_T {
            }
        }
        namespace kd.sdk.swc.hsbs.business.mservice.helper{
            interface BizItemServiceHelper_S {
                /**
                 * 批量获取业务项目下业务项目属性信息
                 *
                 * @param paramList 业务项目id List
                 * @return
                 */
                getBizItemPropInfo(paramList:$.java.util.List):$.java.util.Map;
            }
            interface BizItemServiceHelper_C extends BizItemServiceHelper_S {
                new():BizItemServiceHelper;
            }
            interface BizItemServiceHelper$ {
            }
            type BizItemServiceHelper_T = BizItemServiceHelper_S & BizItemServiceHelper$;
            interface BizItemServiceHelper extends BizItemServiceHelper_T {
            }
        }
        namespace kd.sdk.swc.hscs{
            interface SdkHscsModule_S {
            }
            type SdkHscsModule_ST = $.kd.sdk.module.Module & SdkHscsModule_S;
            interface SdkHscsModule_C extends SdkHscsModule_ST {
                new():SdkHscsModule;
            }
            interface SdkHscsModule$ {
            }
            type SdkHscsModule_T = $.kd.sdk.module.Module & SdkHscsModule_S & SdkHscsModule$;
            interface SdkHscsModule extends SdkHscsModule_T {
            }
        }
        namespace kd.sdk.swc.hscs.business.extpoint{
            interface ISalaryCalExtService_S {
            }
            interface ISalaryCalExtService$ {
                /**
                 *  @param event AfterSalaryCalEvent
                 *
                 *  <pre><code>
                 * public class SalaryCalExtService_demo implements ISalaryCalExtService {
                 *      private static Log log = LogFactory.getLog(SalaryCalExtServiceDemoImpl.class);
                 *
                 *      public void afterSalaryCal(AfterSalaryCalEvent event) {
                 *  	 //@param event 薪资计算完成后事件，其中属性包括：
                 *          //       Long taskId 核算任务ID，用于获取核算任务信息
                 *          //       Long recordId 计算会话ID
                 *          //       Long batchId 核算批次ID
                 *          //       String calType  计算类型（"onlyPreTaxCal"：仅计算税前， "preTaxCal":计算税前，"afterTaxCal"：计算税后）计算保存埋点在分段计算时或进来两次，计算税前和计算税后，可以通过计算类型进行判断是否需要进行业务处理
                 *          //       List<Long> calPersonIdList  当前批次核算名单Id集合，用于获取需要处理的明细结果信息
                 *          //       boolean isFinished 是否计算完成，判断当前次计算是否完成
                 *          //       String traceId 日志跟踪ID，可用于日志打印
                 *          log.info("SalaryCalExtServiceDemoImpl start,params:"+event.toString());
                 *      }
                 *  }
                 *  </code></pre>
                 */
                afterSalaryCal?(event:kd.sdk.swc.hscs.common.events.AfterSalaryCalEvent):void;
            }
            type ISalaryCalExtService_T = ISalaryCalExtService_S & ISalaryCalExtService$;
            interface ISalaryCalExtService extends ISalaryCalExtService_T {
            }
            interface IHisDataCheckExtService_S {
            }
            interface IHisDataCheckExtService$ {
                /**
                 *  数据校验
                 *  @param evt
                 *  <pre><code>
                 * public class HisDataCheckExtServiceImpl implements IHisDataCheckExtService {
                 *
                 *     @Override
                 *     public void dataCheck(HisDataTaskCheckEvent evt) {
                 *          Map<Long, DynamicObject> dataMap = evt.getDataMap();
                 *          Map<Long, DataCheckFailDTO> checkFailDTOMap = new HashMap<>();
                 *          // 判断任务类型是否为历史数据引入类型，如果不是，则返回，因为只有历史数据引入类型，引入模板才有薪资核算场景和挂靠行政组织
                 *          if (!"1".equals(evt.getWriteTaskType())) {
                 *              return;
                 *          }
                 *          DynamicObject dataObj = null;
                 *          for (Map.Entry<Long, DynamicObject> entry : dataMap.entrySet()) {
                 *               dataObj = entry.getValue();
                 *              // 校验薪资核算场景是否填写
                 *              DynamicObject payrollsceneObj = dataObj.getDynamicObject("payrollscene");
                 *              if (payrollsceneObj == null) {
                 *                  DataCheckFailDTO failDTO = new DataCheckFailDTO();
                 *                  failDTO.setFailType("0"); // 存在性校验失败类型
                 *                  failDTO.setFailMsgValue("kd001"); // 薪资核算场景为空
                 *                  failDTO.setErrorElement(ResManager.loadKDString("薪资核算场景", "HisDataCheckExtServiceImpl_0", "swc-hsba-business"));
                 *                  checkFailDTOMap.put(entry.getKey(), failDTO);
                 *                  continue;
                 *              }
                 *              //校验挂靠行政组织是否填写
                 *              String adminOrgName = dataObj.getString("adminorgname");
                 *              if (adminOrgName == null || adminOrgName.trim().length() == 0) {
                 *                    DataCheckFailDTO failDTO = new DataCheckFailDTO();
                 *                    failDTO.setFailType("0"); // 存在性校验失败类型
                 *                    failDTO.setFailMsgValue("kd002"); // 挂靠行政组织为空
                 *                    failDTO.setErrorElement(ResManager.loadKDString("人员薪资档案", "HisDataCheckExtServiceImpl_0", "swc-hsba-business"));
                 *                    checkFailDTOMap.put(entry.getKey(), failDTO);
                 *                }
                 *           }
                 *           evt.setCheckFailMap(checkFailDTOMap);
                 *     }
                 *
                 * }
                 *  </pre></code>
                 */
                dataCheck?(evt:kd.sdk.swc.hscs.common.events.HisDataTaskCheckEvent):void;
            }
            type IHisDataCheckExtService_T = IHisDataCheckExtService_S & IHisDataCheckExtService$;
            interface IHisDataCheckExtService extends IHisDataCheckExtService_T {
            }
            interface ICalRollBackExtService_S {
            }
            interface ICalRollBackExtService$ {
                /**
                 * @param event CalRollBackEvent
                 *
                 * <pre><code>
                 *  public class CalRollBackExtServiceDemoImpl implements ICalRollBackExtService {
                 *     private static Log log = LogFactory.getLog(CalRollBackExtServiceDemoImpl.class);
                 *
                 *     @Override
                 *     public void calRollBack(CalRollBackEvent event) {
                 *         log.info("CalRollBackExtServiceDemoImpl_calrollback_begin");
                 *         // 获取当前回滚的任务id
                 *         Long calTaskId = event.getCalTaskId();
                 *         // 获取当前回滚的名单id集合
                 *         List<Long> calPersonIdList = event.getCalPersonIdList();
                 *
                 *         // 根据任务和名单，处理自定义业务逻辑
                 *
                 *     }
                 * }
                 *
                 * </code></pre>
                 */
                calRollBack?(event:kd.sdk.swc.hscs.common.events.CalRollBackEvent):void;
            }
            type ICalRollBackExtService_T = ICalRollBackExtService_S & ICalRollBackExtService$;
            interface ICalRollBackExtService extends ICalRollBackExtService_T {
            }
            interface IFetchResultCoverDataExtService_S {
            }
            interface IFetchResultCoverDataExtService$ {
                /**
                 *  获取结果覆盖数据
                 *  @param event
                 *  <pre><code>
                 * public class FetchResultCoverDataExtServiceDemo implements IFetchResultCoverDataExtService{
                 *
                 *      private static final Log LOGGER = LogFactory.getLog(FetchResultCoverDataExtServiceDemo.class);
                 *
                 *      @Override
                 *      public void fetchCalResultCoverData(FetchResultCoverEvent event) {
                 *          // 获取当前计算的核算名单id集合
                 *          List<Long> calPersonIdList = event.getCalPersonIdList();
                 *          // 获取允许结果覆盖的薪酬项目id集合
                 *          List<Long> salaryItemIdList = event.getSalaryItemIdList();
                 *          // 获取结果覆盖薪酬项目汇总结果值集合对象
                 *          // key:核算名单id, value:[key:薪酬项目唯一编码，value:结果值]
                 *          Map<Long, Map<String, Object>> slItemResultMap = event.getSlItemResultMap();
                 *          // 获取分段结果覆盖薪酬项目各分段区间结果值集合
                 *          // key:核算名单，value:[key:薪酬项目唯一编码，value:<key:日期区间,value:结果值>] ,日期区间组成：开始日期（yyyy-MM-dd）+"@"+结束日期(yyyy-MM-dd)，如："2023-01-01@2023-01-15"
                 *          Map<Long,Map<String, Map<String, Object>>> slItemSectionResultMap = event.getSlItemSectionResultMap();
                 *
                 *          // 通过自定义业务逻辑，重新组装结果覆盖数据到两个结果对象中
                 *
                 *          event.setSlItemResultMap(slItemResultMap);
                 *          event.setSlItemSectionResultMap(slItemSectionResultMap);
                 *      }
                 *  }
                 *  </code></pre>
                 */
                fetchCalResultCoverData?(event:kd.sdk.swc.hscs.common.events.FetchResultCoverEvent):void;
            }
            type IFetchResultCoverDataExtService_T = IFetchResultCoverDataExtService_S & IFetchResultCoverDataExtService$;
            interface IFetchResultCoverDataExtService extends IFetchResultCoverDataExtService_T {
            }
            interface IQueryInsuranceDataExtService_S {
            }
            interface IQueryInsuranceDataExtService$ {
                setFilter?(evt:kd.sdk.swc.hscs.common.events.QueryInsuranceDataEvent):void;
            }
            type IQueryInsuranceDataExtService_T = IQueryInsuranceDataExtService_S & IQueryInsuranceDataExtService$;
            interface IQueryInsuranceDataExtService extends IQueryInsuranceDataExtService_T {
            }
        }
        namespace kd.sdk.swc.hscs.business.mservice.helper{
            interface HSCSCostAllotDetailServiceHelper_S {
                /**
                 * 生成分摊明细
                 *
                 * @param param 入参
                 * @return 返回结果，支持部分成功
                 */
                generateAllotDetails(param:$.java.util.Map):$.java.util.Map;
            }
            interface HSCSCostAllotDetailServiceHelper_C extends HSCSCostAllotDetailServiceHelper_S {
                new():HSCSCostAllotDetailServiceHelper;
            }
            interface HSCSCostAllotDetailServiceHelper$ {
            }
            type HSCSCostAllotDetailServiceHelper_T = HSCSCostAllotDetailServiceHelper_S & HSCSCostAllotDetailServiceHelper$;
            interface HSCSCostAllotDetailServiceHelper extends HSCSCostAllotDetailServiceHelper_T {
            }
        }
        namespace kd.sdk.swc.hscs.common.events{
            interface QueryInsuranceDataEvent_S {
            }
            interface QueryInsuranceDataEvent_C extends QueryInsuranceDataEvent_S {
                new(calTaskId:long):QueryInsuranceDataEvent;
            }
            interface QueryInsuranceDataEvent$ {
                addFilter(filter:$.kd.bos.orm.query.QFilter):void;
                getCalTaskId():long;
                getFilters():$.java.util.List;
                setCalTaskId(calTaskId:long):void;
                setFilters(filters:$.java.util.List):void;
            }
            type QueryInsuranceDataEvent_T = QueryInsuranceDataEvent_S & QueryInsuranceDataEvent$;
            interface QueryInsuranceDataEvent extends QueryInsuranceDataEvent_T {
            }
            interface FetchResultCoverEvent_S {
            }
            interface FetchResultCoverEvent_C extends FetchResultCoverEvent_S {
                new(calTaskId:long,calPersonIdList:$.java.util.List,salaryItemIdList:$.java.util.List,slItemResultMap:$.java.util.Map,slItemSectionResultMap:$.java.util.Map):FetchResultCoverEvent;
            }
            interface FetchResultCoverEvent$ {
                /**
                 * 获取核算名单id集合
                 * @return
                 */
                getCalPersonIdList():$.java.util.List;
                /**
                 * 获取核算任务id
                 * @return
                 */
                getCalTaskId():long;
                /**
                 * 获取计算规则中设置允许结果覆盖的薪酬项目id集合
                 * @return
                 */
                getSalaryItemIdList():$.java.util.List;
                /**
                 * 获取结果覆盖薪酬项目汇总结果值集合
                 * @return
                 */
                getSlItemResultMap():$.java.util.Map;
                /**
                 * 获取分段结果覆盖薪酬项目各分段区间结果值集合
                 * @return
                 */
                getSlItemSectionResultMap():$.java.util.Map;
                /**
                 * 设置核算名单id集合
                 * @param calPersonIdList
                 */
                setCalPersonIdList(calPersonIdList:$.java.util.List):void;
                /**
                 * 设置核算任务id
                 * @param calTaskId
                 */
                setCalTaskId(calTaskId:long):void;
                /**
                 * 设置计算规则中设置允许结果覆盖的薪酬项目id集合
                 * @param salaryItemIdList
                 */
                setSalaryItemIdList(salaryItemIdList:$.java.util.List):void;
                /**
                 * 设置结果覆盖薪酬项目汇总结果值集合
                 * @param slItemResultMap
                 */
                setSlItemResultMap(slItemResultMap:$.java.util.Map):void;
                /**
                 * 设置分段结果覆盖薪酬项目各分段区间结果值集合
                 * @param slItemSectionResultMap
                 */
                setSlItemSectionResultMap(slItemSectionResultMap:$.java.util.Map):void;
            }
            type FetchResultCoverEvent_T = FetchResultCoverEvent_S & FetchResultCoverEvent$;
            interface FetchResultCoverEvent extends FetchResultCoverEvent_T {
            }
            interface HisDataTaskCheckEvent_S {
            }
            interface HisDataTaskCheckEvent_C extends HisDataTaskCheckEvent_S {
                new(dataMap:$.java.util.Map,checkFailMap:$.java.util.Map,writeTaskType:string):HisDataTaskCheckEvent;
            }
            interface HisDataTaskCheckEvent$ {
                getCheckFailMap():$.java.util.Map;
                getDataMap():$.java.util.Map;
                getWriteTaskType():string;
                setCheckFailMap(checkFailMap:$.java.util.Map):void;
            }
            type HisDataTaskCheckEvent_T = HisDataTaskCheckEvent_S & HisDataTaskCheckEvent$;
            interface HisDataTaskCheckEvent extends HisDataTaskCheckEvent_T {
            }
            interface CalRollBackEvent_S {
            }
            interface CalRollBackEvent_C extends CalRollBackEvent_S {
                new(calTaskId:long,calPersonIdList:$.java.util.List,calRecordId:long,cancelType:string):CalRollBackEvent;
            }
            interface CalRollBackEvent$ {
                getCalPersonIdList():$.java.util.List;
                getCalRecordId():long;
                getCalTaskId():long;
                getCancelType():string;
                setCalPersonIdList(calPersonIdList:$.java.util.List):void;
                setCalRecordId(calRecordId:long):void;
                setCalTaskId(calTaskId:long):void;
                setCancelType(cancelType:string):void;
            }
            type CalRollBackEvent_T = CalRollBackEvent_S & CalRollBackEvent$;
            interface CalRollBackEvent extends CalRollBackEvent_T {
            }
            interface AfterSalaryCalEvent_S {
            }
            interface AfterSalaryCalEvent_C extends AfterSalaryCalEvent_S {
                new(taskId:long,recordId:long,batchId:long,calType:string,calPersonIdList:$.java.util.List,isFinished:boolean,traceId:string):AfterSalaryCalEvent;
            }
            interface AfterSalaryCalEvent$ {
                /**
                 * 获取核算批次ID
                 * @return 核算批次ID
                 */
                getBatchId():long;
                /**
                 * 获取当前批次核算名单Id集合
                 * @return 当前批次核算名单Id集合，用于获取需要处理的明细结果信息
                 */
                getCalPersonIdList():$.java.util.List;
                /**
                 * 获取计算类型
                 * @return 计算类型（"onlyPreTaxCal"：仅计算税前， "preTaxCal":计算税前，"afterTaxCal"：计算税后）
                 *      计算保存埋点在分段计算时或进来两次，计算税前和计算税后，可以通过计算类型进行判断是否需要进行业务处理
                 */
                getCalType():string;
                /**
                 * 获取计算会话ID
                 * @return 计算会话ID
                 */
                getRecordId():long;
                /**
                 * 获取核算任务ID
                 * @return 核算任务ID，用于获取核算任务信息
                 */
                getTaskId():long;
                /**
                 * 日志跟踪ID
                 * @return 日志跟踪ID，可用于日志打印
                 */
                getTraceId():string;
                /**
                 * 是否计算完成
                 * @return 是否计算完成，判断当前次计算是否完成
                 */
                isFinished():boolean;
                /**
                 * 设置核算批次ID
                 * @param batchId 核算批次ID
                 */
                setBatchId(batchId:long):void;
                /**
                 * 设置当前批次核算名单Id集合
                 * @param calPersonIdList 当前批次核算名单Id集合，用于获取需要处理的明细结果信息
                 */
                setCalPersonIdList(calPersonIdList:$.java.util.List):void;
                /**
                 * 设置计算类型
                 * @param calType 计算类型（"onlyPreTaxCal"：仅计算税前， "preTaxCal":计算税前，"afterTaxCal"：计算税后）
                 *      计算保存埋点在分段计算时或进来两次，计算税前和计算税后，可以通过计算类型进行判断是否需要进行业务处理
                 */
                setCalType(calType:string):void;
                /**
                 * 是否计算完成
                 * @param finished 是否计算完成，判断当前次计算是否完成
                 */
                setFinished(finished:boolean):void;
                /**
                 * 设置计算会话ID
                 * @param recordId 计算会话ID
                 */
                setRecordId(recordId:long):void;
                /**
                 * 设置核算任务ID
                 * @param taskId 核算任务ID，用于获取核算任务信息
                 */
                setTaskId(taskId:long):void;
                /**
                 * 日志跟踪ID
                 * @param traceId 日志跟踪ID，可用于日志打印
                 */
                setTraceId(traceId:string):void;
            }
            type AfterSalaryCalEvent_T = AfterSalaryCalEvent_S & AfterSalaryCalEvent$;
            interface AfterSalaryCalEvent extends AfterSalaryCalEvent_T {
            }
            interface CostAllotDetailArgs_S {
            }
            interface CostAllotDetailArgs_C extends CostAllotDetailArgs_S {
                new(saveAllotDetailColl:$.kd.bos.dataentity.entity.DynamicObjectCollection):CostAllotDetailArgs;
            }
            interface CostAllotDetailArgs$ {
                getSaveAllotDetailColl():$.kd.bos.dataentity.entity.DynamicObjectCollection;
                setSaveAllotDetailColl(saveAllotDetailColl:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
            }
            type CostAllotDetailArgs_T = CostAllotDetailArgs_S & CostAllotDetailArgs$;
            interface CostAllotDetailArgs extends CostAllotDetailArgs_T {
            }
            interface CostCfgTypeDeptArgs_S {
            }
            interface CostCfgTypeDeptArgs_C extends CostCfgTypeDeptArgs_S {
                new():CostCfgTypeDeptArgs;
            }
            interface CostCfgTypeDeptArgs$ {
                getCheckPass():boolean;
                getCostCfgDeptMap():$.java.util.Map;
                getCostCfgIdList():$.java.util.List;
                getSelectedId():long;
                setCheckPass(checkPass:boolean):void;
                setCostCfgDeptMap(costCfgDeptMap:$.java.util.Map):void;
                setCostCfgIdList(costCfgIdList:$.java.util.List):void;
                setSelectedId(selectedId:long):void;
            }
            type CostCfgTypeDeptArgs_T = CostCfgTypeDeptArgs_S & CostCfgTypeDeptArgs$;
            interface CostCfgTypeDeptArgs extends CostCfgTypeDeptArgs_T {
            }
        }
        namespace kd.sdk.swc.hscs.common.hisdatacheck{
            interface DataCheckFailDTO_S {
            }
            interface DataCheckFailDTO_C extends DataCheckFailDTO_S {
                new():DataCheckFailDTO;
            }
            interface DataCheckFailDTO$ {
                getErrorElement():string;
                getFailMsgValue():string;
                getFailType():string;
                setErrorElement(errorElement:string):void;
                setFailMsgValue(failMsgValue:string):void;
                setFailType(failType:string):void;
            }
            type DataCheckFailDTO_T = DataCheckFailDTO_S & DataCheckFailDTO$;
            interface DataCheckFailDTO extends DataCheckFailDTO_T {
            }
        }
        namespace kd.sdk.swc.hscs.service.api{
            interface ICostAllotDetailService_S {
            }
            interface ICostAllotDetailService$ {
                /**
                 * 设置成本分摊明细字段值
                 *
                 * @param args
                 */
                setCostAllotDetailFields?(args:kd.sdk.swc.hscs.common.events.CostAllotDetailArgs):void;
            }
            type ICostAllotDetailService_T = ICostAllotDetailService_S & ICostAllotDetailService$;
            interface ICostAllotDetailService extends ICostAllotDetailService_T {
            }
            interface ICustFetchService_S {
            }
            interface ICustFetchService$ {
                /**
                 * 核算对象取数维度的取数方法
                 *
                 * @param calPersonIdList 核算名单id集合
                 * @param paramsMap 人员级别取数项目数据集合
                 *                  key:核算名单id,value:[key:入参字段，value:入参值]
                 * @return key:核算名单id, value:[key:出参字段，value:出参值]
                 */
                fetchDataCalPerson(calPersonIdList:$.java.util.List,paramsMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 核算任务取数维度的取数方法
                 *
                 * @param calTaskId 核算任务的id
                 * @param paramsMap       任务级别取数项目数据集合
                 *                  key:入参字段，value:入参字段值
                 * @return key:出参字段，value:出参值
                 */
                fetchDataCalTask(calTaskId:long,paramsMap:$.java.util.Map):$.java.util.Map;
            }
            type ICustFetchService_T = ICustFetchService_S & ICustFetchService$;
            interface ICustFetchService extends ICustFetchService_T {
            }
            interface ICostSetUpService_S {
            }
            interface ICostSetUpService$ {
                /**
                 * 校验组织薪酬成本设置
                 * <p>本方法在循环里执行，禁止在本方法操作数据库</p>
                 *
                 * @param args
                 */
                checkCostTypeDept?(args:kd.sdk.swc.hscs.common.events.CostCfgTypeDeptArgs):void;
                /**
                 * 获取组织薪酬成本设置信息
                 *
                 * @param args
                 */
                setCostTypeDeptInfo?(args:kd.sdk.swc.hscs.common.events.CostCfgTypeDeptArgs):void;
            }
            type ICostSetUpService_T = ICostSetUpService_S & ICostSetUpService$;
            interface ICostSetUpService extends ICostSetUpService_T {
            }
        }
        namespace kd.sdk.swc.hspp{
            interface SdkHsppModule_S {
            }
            type SdkHsppModule_ST = $.kd.sdk.module.Module & SdkHsppModule_S;
            interface SdkHsppModule_C extends SdkHsppModule_ST {
                new():SdkHsppModule;
            }
            interface SdkHsppModule$ {
            }
            type SdkHsppModule_T = $.kd.sdk.module.Module & SdkHsppModule_S & SdkHsppModule$;
            interface SdkHsppModule extends SdkHsppModule_T {
            }
        }
        namespace kd.sdk.swc.hspp.business.extpoint.salaryslip{
            interface ISalarySlipQueryExtService_S {
            }
            interface ISalarySlipQueryExtService$ {
                /**
                 * @param verifyEvent
                 * <pre><code>
                 *     public class SalarySlipQueryExtServiceImpl implements ISalarySlipQueryExtService {
                 *
                 *     @Override
                 *     public void salarySlipQueryPersonVerify(SalarySlipPersonVerifyEvent verifyEvent) {
                 *         // 获取被查询人员id
                 *         Long queriedPersonId = verifyEvent.getQueriedPersonId();
                 *         // 获取当前查询人员id
                 *         Long currentPersonId = verifyEvent.getCurrentPersonId();
                 *         // 判断是否有权限查询
                 *         String userName = RequestContext.get().getUserName();
                 *         verifyEvent.setHavePerm(!"gff".contains(userName));
                 *         // 无权提示语
                 *         verifyEvent.setErrorMessage("test error");
                 *
                 *     }
                 * }
                 * </code></pre>
                 */
                salarySlipQueryPersonVerify?(verifyEvent:kd.sdk.swc.hspp.common.events.SalarySlipPersonVerifyEvent):void;
            }
            type ISalarySlipQueryExtService_T = ISalarySlipQueryExtService_S & ISalarySlipQueryExtService$;
            interface ISalarySlipQueryExtService extends ISalarySlipQueryExtService_T {
            }
        }
        namespace kd.sdk.swc.hspp.common.events{
            interface SalarySlipPersonVerifyEvent_S {
            }
            interface SalarySlipPersonVerifyEvent_C extends SalarySlipPersonVerifyEvent_S {
                new():SalarySlipPersonVerifyEvent;
            }
            interface SalarySlipPersonVerifyEvent$ {
                getCurrentPersonId():long;
                getErrorMessage():string;
                getHavePerm():boolean;
                getQueriedPersonId():long;
                setCurrentPersonId(currentPersonId:long):void;
                setErrorMessage(errorMessage:string):void;
                setHavePerm(havePerm:boolean):void;
                setQueriedPersonId(queriedPersonId:long):void;
            }
            type SalarySlipPersonVerifyEvent_T = SalarySlipPersonVerifyEvent_S & SalarySlipPersonVerifyEvent$;
            interface SalarySlipPersonVerifyEvent extends SalarySlipPersonVerifyEvent_T {
            }
        }
        namespace kd.sdk.swc.hspp.common.events.mobile{
            interface SalaryLabelApEvent_S {
            }
            interface SalaryLabelApEvent_C extends SalaryLabelApEvent_S {
                new():SalaryLabelApEvent;
            }
            interface SalaryLabelApEvent$ {
                getLabelAps():$.java.util.List;
                getType():string;
                setAllLabelAps(labelAps:$.java.util.List):void;
                setLabelAps(labelAps:$.java.util.List):void;
                setType(type_arg:string):void;
            }
            type SalaryLabelApEvent_T = SalaryLabelApEvent_S & SalaryLabelApEvent$;
            interface SalaryLabelApEvent extends SalaryLabelApEvent_T {
            }
        }
        namespace kd.sdk.swc.hspp.formplugin.mobile{
            interface ISalaryBaseExtService_S {
            }
            interface ISalaryBaseExtService$ {
                /**
                 * @param salaryLabelApEvent
                 * <pre><code>
                 *         @Override
                 *     public void redrawSalaryLabelAp(SalaryLabelApEvent salaryLabelApEvent) {
                 *         List<ControlAp<?>> labelAps = salaryLabelApEvent.getLabelAps();
                 *         for (ControlAp<?> labelAp : labelAps) {
                 *             String key = labelAp.getKey();
                 *             String currencyId = key.substring(key.lastIndexOf('-') + 1);
                 *             //可根据币别设置不同的样式
                 *             labelAp.setFontSize(10);
                 *             labelAp.setForeColor("#77c404");
                 *         }
                 *     }
                 * </code></pre>
                 */
                redrawSalaryLabelAp(salaryLabelApEvent:kd.sdk.swc.hspp.common.events.mobile.SalaryLabelApEvent):void;
            }
            type ISalaryBaseExtService_T = ISalaryBaseExtService_S & ISalaryBaseExtService$;
            interface ISalaryBaseExtService extends ISalaryBaseExtService_T {
            }
        }
        namespace kd.sdk.swc.hspp.mservice.helper{
            interface SalarySlipServiceHelper_S {
                /**
                 * 当前人员使用密码登录
                 *
                 * @param paramMap 登录map
                 * @return 结果值
                 */
                authenticatePassword(paramMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 查询当前人员是否已设置密码
                 *
                 * @param personId 人员id
                 * @return 结果值
                 */
                isHavePassWordByPersonId(personId:long):$.java.util.Map;
                /**
                 * 根据中台人员查询某一时间范围的工资条信息
                 *
                 * @param paramMap 查询map
                 * @return 结果值
                 */
                querySalarySlipDetail(paramMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 根据中台人员与汇总显示方案查询某一时间范围的工资条汇总信息
                 *
                 * @param paramMap
                 * @return
                 */
                querySalarySlipSumDetail(paramMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 根据中台人员查询可用的工资条汇总显示方案
                 *
                 * @param paramMap
                 * @return
                 */
                querySalarySlipSumView(paramMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 当前人员保存或者更新密码
                 *
                 * @param paramMap 密码map
                 * @return 结果值
                 */
                saveOrUpdatePassword(paramMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 当前人员发送手机验证码
                 *
                 * @param paramMap 验证码map
                 * @return 结果值
                 */
                sendCodeMessage(paramMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 校验当前人员验证码是否正确
                 *
                 * @param paramMap 验证码map
                 * @return 结果值
                 */
                validPhoneCode(paramMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 校验密码是否符合规范
                 *
                 * @param paramMap 密码map
                 * @return 结果值
                 */
                verifyPassword(paramMap:$.java.util.Map):$.java.util.Map;
            }
            interface SalarySlipServiceHelper_C extends SalarySlipServiceHelper_S {
                new():SalarySlipServiceHelper;
            }
            interface SalarySlipServiceHelper$ {
            }
            type SalarySlipServiceHelper_T = SalarySlipServiceHelper_S & SalarySlipServiceHelper$;
            interface SalarySlipServiceHelper extends SalarySlipServiceHelper_T {
            }
        }
        namespace kd.sdk.swc.pcs{
            interface SdkPcsModule_S {
            }
            type SdkPcsModule_ST = $.kd.sdk.module.Module & SdkPcsModule_S;
            interface SdkPcsModule_C extends SdkPcsModule_ST {
                new():SdkPcsModule;
            }
            interface SdkPcsModule$ {
            }
            type SdkPcsModule_T = $.kd.sdk.module.Module & SdkPcsModule_S & SdkPcsModule$;
            interface SdkPcsModule extends SdkPcsModule_T {
            }
        }
        namespace kd.sdk.swc.pcs.business.extpoint.costcfg{
            interface ICostCfgExportExtService_S {
            }
            interface ICostCfgExportExtService$ {
                /**
                 *  成本核算设置引出事件,可设置引出字段，和引出值
                 *
                 *  <pre>
                 *  <code>
                 *      public class CosCfgExportServiceDemo implements ICostCfgExportExtService {
                 *
                 *      Override
                 *      public void setCostCfgExportFieldAndValue(CostCfgEvent args) {
                 *          String billFormId = args.getBillFormId();
                 *          List<DynamicObject> costCfgDyList = args.getCostCfgColl();
                 *          Map<String, String> costCfgHeaders = args.getCostCfgHeaders();
                 *          if (SWCStringUtils.isEmpty(billFormId) || CollectionUtils.isEmpty(costCfgDyList) || costCfgHeaders == null) {
                 *              // 页面标识为空、数据为空、表头为空，退出
                 *              return;
                 *          }
                 *
                 *          SWCDataServiceHelper helper = new SWCDataServiceHelper(billFormId);
                 *          DynamicObject costCfgDy = helper.generateEmptyDynamicObject();
                 *          // 取成本设置属性
                 *          DataEntityPropertyCollection properties = costCfgDy.getDynamicObjectType().getProperties();
                 *          // 主实体已有字段
                 *          boolean enableContainsKey = properties.containsKey("enable");
                 *          // 主实体二开添加基础资料字段，以lcs_costcenter成本中心为例
                 *          boolean baseDataContainsKey = properties.containsKey("testaddbasedata");
                 *          // 主实体二开添加文本字段
                 *          boolean textContainsKey = properties.containsKey("testaddtext");
                 *          boolean baseDataEntContainsKey = false;
                 *          boolean textEntContainsKey = false;
                 *          boolean entryContainsKey = properties.containsKey("costcfgentryentity");
                 *          if (entryContainsKey) {
                 *              DynamicObject entryDy = helper.generateEmptyEntryDynamicObject("costcfgentryentity");
                 *              if (entryDy != null) {
                 *                  DataEntityPropertyCollection entryProperties = entryDy.getDataEntityType().getProperties();
                 *                  // 普通成本设置分录二开添加的基础资料字段
                 *                  baseDataEntContainsKey = entryProperties.containsKey("testaddentbasedata");
                 *                  // 普通成本设置分录二开添加的文本字段
                 *                  textEntContainsKey = entryProperties.containsKey("testaddenttext");
                 *              }
                 *          }
                 *
                 *          boolean baseDataEntTypeContainsKey = false;
                 *          boolean textEntTypeContainsKey = false;
                 *          boolean entryTypeContainsKey = properties.containsKey("costcfgtypeentryentity");
                 *          if (entryTypeContainsKey) {
                 *              DynamicObject entryTypeDy = helper.generateEmptyEntryDynamicObject("costcfgtypeentryentity");
                 *              if (entryTypeDy != null) {
                 *                  DataEntityPropertyCollection entryProperties = entryTypeDy.getDataEntityType().getProperties();
                 *                  // 兜底成本设置分录二开添加的基础资料字段
                 *                  baseDataEntTypeContainsKey = entryProperties.containsKey("testaddenttypebasedata");
                 *                  // 兜底成本设置分录二开添加的文本字段
                 *                  textEntTypeContainsKey = entryProperties.containsKey("testaddenttypetext");
                 *              }
                 *          }
                 *
                 *          LinkedHashMap<String, String> costCfgLinkHeaders = new LinkedHashMap<>(SWCBaseConstants.INITCAPACITY_HASHMAP);
                 *          Iterator<Map.Entry<String, String>> iterator = costCfgHeaders.entrySet().iterator();
                 *          while (iterator.hasNext()) {
                 *              Map.Entry<String, String> next = iterator.next();
                 *              String key = next.getKey();
                 *              String value = next.getValue();
                 *              costCfgLinkHeaders.put(key, value);
                 *              // 如放在生效日期后面
                 *              if ("bsed".equals(key)) {
                 *                  if (enableContainsKey) {
                 *                      costCfgLinkHeaders.put("enable", "testenable");
                 *                  }
                 *                  if (baseDataContainsKey) {
                 *                      costCfgLinkHeaders.put("testaddbasedata", "testbasedata");
                 *                  }
                 *                  if (textContainsKey) {
                 *                      costCfgLinkHeaders.put("testaddtext", "testtext");
                 *                  }
                 *              }
                 *          }
                 *          if (baseDataEntContainsKey) {
                 *              costCfgLinkHeaders.put("testaddentbasedata", "testentbasedata");
                 *          }
                 *          if (textEntContainsKey) {
                 *              costCfgLinkHeaders.put("testaddenttext", "testenttext");
                 *          }
                 *          if (baseDataEntTypeContainsKey) {
                 *              costCfgLinkHeaders.put("testaddenttypebasedata", "testenttypebasedata");
                 *          }
                 *          if (textEntTypeContainsKey) {
                 *              costCfgLinkHeaders.put("testaddenttypetext", "testenttypetext");
                 *          }
                 *          args.setCostCfgHeaders(costCfgLinkHeaders);
                 *
                 *          // 新增的基础资料字段引出的类型，1编码，2名称，默认显示编码
                 *          Map<String, String> baseDataExportType = args.getBaseDataExportType();
                 *          if (baseDataExportType == null) {
                 *              baseDataExportType = new HashMap<>();
                 *          }
                 *          baseDataExportType.put("testaddbasedata", SWCBaseConstants.STR_ONE);
                 *          baseDataExportType.put("testaddentbasedata", SWCBaseConstants.STR_TWO);
                 *          baseDataExportType.put("testaddenttypebasedata", SWCBaseConstants.STR_ONE);
                 *          baseDataExportType.put("testaddenttypetext", SWCBaseConstants.STR_TWO);
                 *          args.setBaseDataExportType(baseDataExportType);
                 *
                 *          DynamicObject costCenterD1y =
                 *              BusinessDataServiceHelper.loadSingleFromCache(785232921668617216L, "lcs_costcenter");
                 *          DynamicObject costCenter2Dy =
                 *              BusinessDataServiceHelper.loadSingleFromCache(785232921668617216L, "lcs_costcenter");
                 *
                 *          for (DynamicObject allotBill : costCfgDyList) {
                 *              // 设置二开主实体字段的值
                 *              if (enableContainsKey) {
                 *                  allotBill.set("enable", SWCBaseConstants.ENABLE_ENABLE);
                 *              }
                 *              if (baseDataContainsKey) {
                 *                  allotBill.set("testaddbasedata", costCenterD1y);
                 *              }
                 *              if (textContainsKey) {
                 *                  allotBill.set("testaddtext", "text value");
                 *              }
                 *              // 设置二开成本设置分录字段的值
                 *              if (entryContainsKey) {
                 *                  DynamicObjectCollection costCfgEntryColl = allotBill.getDynamicObjectCollection("costcfgentryentity");
                 *                  for (DynamicObject costCfgEntryDy : costCfgEntryColl) {
                 *                      if (baseDataEntContainsKey) {
                 *                          costCfgEntryDy.set("testaddentbasedata", costCenter2Dy);
                 *                      }
                 *                      if (textEntContainsKey) {
                 *                          costCfgEntryDy.set("testaddenttext", "enttext value");
                 *                      }
                 *                  }
                 *              }
                 *
                 *              // 设置二开兜底分录字段的值
                 *              if (entryTypeContainsKey) {
                 *                  DynamicObjectCollection costCfgEntryTypeColl =
                 *                      allotBill.getDynamicObjectCollection("costcfgtypeentryentity");
                 *                  for (DynamicObject costCfgEntryTypeDy : costCfgEntryTypeColl) {
                 *                      if (baseDataEntTypeContainsKey) {
                 *                          costCfgEntryTypeDy.set("testaddenttypebasedata", costCenter2Dy);
                 *                      }
                 *                      if (textEntTypeContainsKey) {
                 *                          costCfgEntryTypeDy.set("testaddenttypetext", "enttypetext value");
                 *                      }
                 *                  }
                 *              }
                 *          }
                 *      }
                 *  }
                 *
                 * </code>
                 *  </pre>
                 *
                 *  @param event 成本核算设置引出事件
                 */
                setCostCfgExportFieldAndValue?(event:kd.sdk.swc.pcs.common.events.CostCfgEvent):void;
            }
            type ICostCfgExportExtService_T = ICostCfgExportExtService_S & ICostCfgExportExtService$;
            interface ICostCfgExportExtService extends ICostCfgExportExtService_T {
            }
            interface ICostCfgImportExtService_S {
            }
            interface ICostCfgImportExtService$ {
                /**
                 * 成本核算设置引入事件,可设置引入字段
                 *
                 * <pre>
                 * <code>
                 * public class CosCfgImportServiceDemo implements ICostCfgImportExtService {
                 *
                 *     &#64;Override
                 *     public void setCostCfgImportField(CostCfgEvent args) {
                 *         String billFormId = args.getBillFormId();
                 *         Map<String, String> costCfgHeaders = args.getCostCfgHeaders();
                 *         if (SWCStringUtils.isEmpty(billFormId) || costCfgHeaders == null) {
                 *             // 页面标识为空、表头为空，退出
                 *             return;
                 *         }
                 *
                 *         SWCDataServiceHelper helper = new SWCDataServiceHelper(billFormId);
                 *         DynamicObject costCfgDy = helper.generateEmptyDynamicObject();
                 *         // 取成本设置属性
                 *         DataEntityPropertyCollection properties = costCfgDy.getDynamicObjectType().getProperties();
                 *         // 主实体已有字段
                 *         boolean enableContainsKey = properties.containsKey("enable");
                 *         // 主实体二开添加基础资料字段，以lcs_costcenter成本中心为例
                 *         boolean baseDataContainsKey = properties.containsKey("testaddbasedata");
                 *         // 主实体二开添加文本字段
                 *         boolean textContainsKey = properties.containsKey("testaddtext");
                 *         boolean baseDataEntContainsKey = false;
                 *         boolean textEntContainsKey = false;
                 *         boolean entryContainsKey = properties.containsKey("costcfgentryentity");
                 *         if (entryContainsKey) {
                 *             DynamicObject entryDy = helper.generateEmptyEntryDynamicObject("costcfgentryentity");
                 *             if (entryDy != null) {
                 *                 DataEntityPropertyCollection entryProperties = entryDy.getDataEntityType().getProperties();
                 *                 // 普通成本设置分录二开添加的基础资料字段
                 *                 baseDataEntContainsKey = entryProperties.containsKey("testaddentbasedata");
                 *                 // 普通成本设置分录二开添加的文本字段
                 *                 textEntContainsKey = entryProperties.containsKey("testaddenttext");
                 *             }
                 *         }
                 *
                 *         boolean baseDataEntTypeContainsKey = false;
                 *         boolean textEntTypeContainsKey = false;
                 *         boolean entryTypeContainsKey = properties.containsKey("costcfgtypeentryentity");
                 *         if (entryTypeContainsKey) {
                 *             DynamicObject entryTypeDy = helper.generateEmptyEntryDynamicObject("costcfgtypeentryentity");
                 *             if (entryTypeDy != null) {
                 *                 DataEntityPropertyCollection entryProperties = entryTypeDy.getDataEntityType().getProperties();
                 *                 // 兜底成本设置分录二开添加的基础资料字段
                 *                 baseDataEntTypeContainsKey = entryProperties.containsKey("testaddenttypebasedata");
                 *                 // 兜底成本设置分录二开添加的文本字段
                 *                 textEntTypeContainsKey = entryProperties.containsKey("testaddenttypetext");
                 *             }
                 *         }
                 *
                 *         LinkedHashMap<String, String> costCfgLinkHeaders = new LinkedHashMap<>(SWCBaseConstants.INITCAPACITY_HASHMAP);
                 *         Iterator<Map.Entry<String, String>> iterator = costCfgHeaders.entrySet().iterator();
                 *         while (iterator.hasNext()) {
                 *             Map.Entry<String, String> next = iterator.next();
                 *             String key = next.getKey();
                 *             String value = next.getValue();
                 *             costCfgLinkHeaders.put(key, value);
                 *             // 如放在生效日期后面
                 *             if ("bsed".equals(key)) {
                 *                 if (enableContainsKey) {
                 *                     costCfgLinkHeaders.put("enable", "testenable");
                 *                 }
                 *                 if (baseDataContainsKey) {
                 *                     costCfgLinkHeaders.put("testaddbasedata", "testbasedata");
                 *                 }
                 *                 if (textContainsKey) {
                 *                     costCfgLinkHeaders.put("testaddtext", "testtext");
                 *                 }
                 *             }
                 *         }
                 *         if (baseDataEntContainsKey) {
                 *             costCfgLinkHeaders.put("testaddentbasedata", "testentbasedata");
                 *         }
                 *         if (textEntContainsKey) {
                 *             costCfgLinkHeaders.put("testaddenttext", "testenttext");
                 *         }
                 *         if (baseDataEntTypeContainsKey) {
                 *             costCfgLinkHeaders.put("testaddenttypebasedata", "testenttypebasedata");
                 *         }
                 *         if (textEntTypeContainsKey) {
                 *             costCfgLinkHeaders.put("testaddenttypetext", "testenttypetext");
                 *         }
                 *         args.setCostCfgHeaders(costCfgLinkHeaders);
                 *     }
                 * }
                 * </code>
                 * </pre>
                 *
                 * @param event 成本核算设置引入事件
                 */
                setCostCfgImportField?(event:kd.sdk.swc.pcs.common.events.CostCfgEvent):void;
                /**
                 * 成本核算设置引入事件,可设置引入字段值
                 *
                 * <pre>
                 * <code>
                 * public class CosCfgImportServiceDemo implements ICostCfgImportExtService {
                 *
                 *     &#64;Override
                 *     public void setCostCfgImportValue(CostCfgEvent args) {
                 *         List<DynamicObject> costCfgDyList = args.getCostCfgColl();
                 *         if (CollectionUtils.isEmpty(costCfgDyList)) {
                 *             // 数据为空为空，退出
                 *             return;
                 *         }
                 *
                 *         // 取成本设置属性
                 *         DynamicObject dynamicObject = costCfgDyList.get(0);
                 *         String billFormId = dynamicObject.getDataEntityType().getName();
                 *         SWCDataServiceHelper helper = new SWCDataServiceHelper(billFormId);
                 *         DynamicObject costCfgDy = helper.generateEmptyDynamicObject();
                 *         DataEntityPropertyCollection properties = costCfgDy.getDynamicObjectType().getProperties();
                 *         boolean enableContainsKey = properties.containsKey("enable");
                 *         boolean baseDataContainsKey = properties.containsKey("testaddbasedata");
                 *         boolean textContainsKey = properties.containsKey("testaddtext");
                 *         boolean baseDataEntContainsKey = false;
                 *         boolean textEntContainsKey = false;
                 *         boolean entryContainsKey = properties.containsKey("costcfgentryentity");
                 *         if (entryContainsKey) {
                 *             DynamicObject entryDy = helper.generateEmptyEntryDynamicObject("costcfgentryentity");
                 *             if (entryDy != null) {
                 *                 DataEntityPropertyCollection entryProperties = entryDy.getDataEntityType().getProperties();
                 *                 baseDataEntContainsKey = entryProperties.containsKey("testaddentbasedata");
                 *                 textEntContainsKey = entryProperties.containsKey("testaddenttext");
                 *             }
                 *         }
                 *
                 *         boolean baseDataEntTypeContainsKey = false;
                 *         boolean textEntTypeContainsKey = false;
                 *         boolean entryTypeContainsKey = properties.containsKey("costcfgtypeentryentity");
                 *         if (entryTypeContainsKey) {
                 *             DynamicObject entryTypeDy = helper.generateEmptyEntryDynamicObject("costcfgtypeentryentity");
                 *             if (entryTypeDy != null) {
                 *                 DataEntityPropertyCollection entryProperties = entryTypeDy.getDataEntityType().getProperties();
                 *                 baseDataEntTypeContainsKey = entryProperties.containsKey("testaddenttypebasedata");
                 *                 textEntTypeContainsKey = entryProperties.containsKey("testaddenttypetext");
                 *             }
                 *         }
                 *
                 *         DynamicObject costCenterD1y =
                 *             BusinessDataServiceHelper.loadSingleFromCache(785232921668617216L, "lcs_costcenter");
                 *         DynamicObject costCenter2Dy =
                 *             BusinessDataServiceHelper.loadSingleFromCache(785232921668617216L, "lcs_costcenter");
                 *
                 *         for (DynamicObject allotBill : costCfgDyList) {
                 *             // 设置二开主实体字段的值
                 *             if (enableContainsKey) {
                 *                 allotBill.set("enable", SWCBaseConstants.ENABLE_ENABLE);
                 *             }
                 *             if (baseDataContainsKey) {
                 *                 allotBill.set("testaddbasedata", costCenterD1y);
                 *             }
                 *             if (textContainsKey) {
                 *                 allotBill.set("testaddtext", "text value");
                 *             }
                 *             // 设置二开成本设置分录字段的值
                 *             if (entryContainsKey) {
                 *                 DynamicObjectCollection costCfgEntryColl = allotBill.getDynamicObjectCollection("costcfgentryentity");
                 *                 for (DynamicObject costCfgEntryDy : costCfgEntryColl) {
                 *                     if (baseDataEntContainsKey) {
                 *                         costCfgEntryDy.set("testaddentbasedata", costCenter2Dy);
                 *                     }
                 *                     if (textEntContainsKey) {
                 *                         costCfgEntryDy.set("testaddenttext", "enttext value");
                 *                     }
                 *                 }
                 *             }
                 *
                 *             // 设置二开兜底分录字段的值
                 *             if (entryTypeContainsKey) {
                 *                 DynamicObjectCollection costCfgEntryTypeColl =
                 *                     allotBill.getDynamicObjectCollection("costcfgtypeentryentity");
                 *                 for (DynamicObject costCfgEntryTypeDy : costCfgEntryTypeColl) {
                 *                     if (baseDataEntTypeContainsKey) {
                 *                         costCfgEntryTypeDy.set("testaddenttypebasedata", costCenter2Dy);
                 *                     }
                 *                     if (textEntTypeContainsKey) {
                 *                         costCfgEntryTypeDy.set("testaddenttypetext", "enttypetext value");
                 *                     }
                 *                 }
                 *             }
                 *         }
                 *     }
                 *
                 * }
                 * </code>
                 * </pre>
                 *
                 * @param event 成本核算设置引入事件
                 */
                setCostCfgImportValue?(event:kd.sdk.swc.pcs.common.events.CostCfgEvent):void;
            }
            type ICostCfgImportExtService_T = ICostCfgImportExtService_S & ICostCfgImportExtService$;
            interface ICostCfgImportExtService extends ICostCfgImportExtService_T {
            }
        }
        namespace kd.sdk.swc.pcs.business.mservice.helper{
            interface PCSCostCfgServiceHelper_S {
                /**
                 * 新增/修改成本设置
                 *
                 * @param param 单次最大处理1w条
                 * @return 返回入参，保证个数一致，增加部分返回属性，success：true/false、message:错误信息
                 */
                saveCostCfg(param:$.java.util.Map):$.java.util.Map;
            }
            interface PCSCostCfgServiceHelper_C extends PCSCostCfgServiceHelper_S {
                new():PCSCostCfgServiceHelper;
            }
            interface PCSCostCfgServiceHelper$ {
            }
            type PCSCostCfgServiceHelper_T = PCSCostCfgServiceHelper_S & PCSCostCfgServiceHelper$;
            interface PCSCostCfgServiceHelper extends PCSCostCfgServiceHelper_T {
            }
            interface PCSCostAllotBillServiceHelper_S {
                /**
                 * 生成成本分配单
                 *
                 * @param param 入参
                 * @return 返回结果，支持部分成功
                 */
                generateAllotBills(param:$.java.util.Map):$.java.util.Map;
            }
            interface PCSCostAllotBillServiceHelper_C extends PCSCostAllotBillServiceHelper_S {
                new():PCSCostAllotBillServiceHelper;
            }
            interface PCSCostAllotBillServiceHelper$ {
            }
            type PCSCostAllotBillServiceHelper_T = PCSCostAllotBillServiceHelper_S & PCSCostAllotBillServiceHelper$;
            interface PCSCostAllotBillServiceHelper extends PCSCostAllotBillServiceHelper_T {
            }
        }
        namespace kd.sdk.swc.pcs.common.events{
            interface CostAllotBillArgs_S {
            }
            interface CostAllotBillArgs_C extends CostAllotBillArgs_S {
                new(costAllotBillColl:$.java.util.List):CostAllotBillArgs;
            }
            interface CostAllotBillArgs$ {
                getCostAllotBillColl():$.java.util.List;
                setCostAllotBillColl(costAllotBillColl:$.java.util.List):void;
            }
            type CostAllotBillArgs_T = CostAllotBillArgs_S & CostAllotBillArgs$;
            interface CostAllotBillArgs extends CostAllotBillArgs_T {
            }
            interface CostCfgEvent_S {
            }
            interface CostCfgEvent_C extends CostCfgEvent_S {
                new():CostCfgEvent;
                new(costCfgColl:$.java.util.List):CostCfgEvent;
                new(billFormId:string,costCfgHeaders:$.java.util.LinkedHashMap):CostCfgEvent;
                new(billFormId:string,costCfgColl:$.java.util.List,costCfgHeaders:$.java.util.LinkedHashMap):CostCfgEvent;
            }
            interface CostCfgEvent$ {
                getBaseDataExportType():$.java.util.Map;
                getBillFormId():string;
                getCostCfgColl():$.java.util.List;
                getCostCfgHeaders():$.java.util.LinkedHashMap;
                setBaseDataExportType(baseDataExportType:$.java.util.Map):void;
                setBillFormId(billFormId:string):void;
                setCostCfgColl(costCfgColl:$.java.util.List):void;
                setCostCfgHeaders(costCfgHeaders:$.java.util.LinkedHashMap):void;
            }
            type CostCfgEvent_T = CostCfgEvent_S & CostCfgEvent$;
            interface CostCfgEvent extends CostCfgEvent_T {
            }
        }
        namespace kd.sdk.swc.pcs.service.api{
            interface ICostAllotBillService_S {
            }
            interface ICostAllotBillService$ {
                /**
                 * 设置成本分配单的字段值
                 *
                 * @param args
                 */
                setCostAllotBillFields?(args:kd.sdk.swc.pcs.common.events.CostAllotBillArgs):void;
            }
            type ICostAllotBillService_T = ICostAllotBillService_S & ICostAllotBillService$;
            interface ICostAllotBillService extends ICostAllotBillService_T {
            }
        }
    }
}
export {};