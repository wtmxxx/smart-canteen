/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.sdk.sit.hcsi{
            interface SdkHcsiModule_S {
            }
            type SdkHcsiModule_ST = $.kd.sdk.module.Module & SdkHcsiModule_S;
            interface SdkHcsiModule_C extends SdkHcsiModule_ST {
                new():SdkHcsiModule;
            }
            interface SdkHcsiModule$ {
            }
            type SdkHcsiModule_T = $.kd.sdk.module.Module & SdkHcsiModule_S & SdkHcsiModule$;
            interface SdkHcsiModule extends SdkHcsiModule_T {
            }
        }
        namespace kd.sdk.sit.hcsi.business.cal{
            interface IBeforeExportCalPersonExtService_S {
            }
            interface IBeforeExportCalPersonExtService$ {
                /**
                 * 标品社保明细引出前，对列表字段排序
                 * 扩展接口使用方法：
                 * 当标品社保明细引出前，通过BeforeExportCalPersonEvent的columnFieldKeyList属性，拿到引出明细的所有列字段，二开对列字段排序完后，标品再根据排好序的顺序，对引出列表做排序。
                 * 扩展代码示例：
                 * <pre><code>
                 * public class BeforeExportCalPersonExtServiceDemo implements IBeforeExportCalPersonExtService {
                 *
                 *     private static Log log = LogFactory.getLog(BeforeExportCalPersonExtServiceDemo.class);
                 *
                 *     @Override
                 *     public void sortColumnsBeforeExport(BeforeExportCalPersonEvent event) {
                 *         List<String> columnFieldKeyList = event.getColumnFieldKeyList();
                 *         log.info("BeforeExportCalPersonExtServiceDemo.sortColumnsBeforeExport: columnFieldKeyList is {}", JSONObject.toJSONString(columnFieldKeyList));
                 *         Map<String, Boolean> userListColumnsVisibleMap = event.getUserListColumnsVisibleMap();
                 *         HashSet<String> tmpColumnFieldKeySet = new HashSet<>(columnFieldKeyList);
                 *         HRBaseServiceHelper helper = HRBaseServiceHelper.create("hsba_hcsicalpersonexport");
                 *         QFilter filter = new QFilter(HRBaseConstants.NUMBER, QFilter.equals, "1010_S");
                 *         filter.and(HRBaseConstants.ENABLE, QFilter.equals, HRBaseConstants.ENABLED);
                 *         DynamicObject testDy = helper.queryOne("entryentity.fixedcolumn,sinsuritem.id,sumitem.id", filter.toArray());
                 *         if (testDy == null) {
                 *             log.info("BeforeExportCalPersonExtServiceDemo.sortColumnsBeforeExport: testDy is null.");
                 *             return;
                 *         }
                 *         DynamicObjectCollection entryColl = testDy.getDynamicObjectCollection(HRBaseConstants.ENTRYENTITY);
                 *         if (entryColl == null || entryColl.isEmpty()) {
                 *             log.info("BeforeExportCalPersonExtServiceDemo.sortColumnsBeforeExport: entryColl is empty.");
                 *             return;
                 *         }
                 *         Set<String> columnFieldKeys = new LinkedHashSet<>(entryColl.size());
                 *         for (DynamicObject entryEntity : entryColl) {
                 *             if (checkFieldValid(entryEntity.getString("fixedcolumn"), columnFieldKeys)
                 *                     || checkFieldValid(entryEntity.getString("sinsuritem.id"), columnFieldKeys)
                 *                     || checkFieldValid(entryEntity.getString("sumitem.id"), columnFieldKeys)) {
                 *             }
                 *         }
                 *         List<String> sortColumnFieldKeys = columnFieldKeys.stream().filter(tmpColumnFieldKeySet::contains).collect(Collectors.toList());
                 *         log.info("BeforeExportCalPersonExtServiceDemo.sortColumnsBeforeExport: sortColumnFieldKeys is {}", JSONObject.toJSONString(sortColumnFieldKeys));
                 *         event.setColumnFieldKeyList(sortColumnFieldKeys);
                 *     }
                 *
                 *     private boolean checkFieldValid(String columnFieldKey, Set<String> columnFieldKeys) {
                 *         return HRStringUtils.isNotEmpty(columnFieldKey) && !"0".equals(columnFieldKey) && columnFieldKeys.add(columnFieldKey);
                 *     }
                 * }
                 * </code></pre>
                 *
                 * @param event 标品社保明细引出前，对列表字段排序
                 */
                sortColumnsBeforeExport?(event:kd.sdk.sit.hcsi.common.events.cal.BeforeExportCalPersonEvent):void;
            }
            type IBeforeExportCalPersonExtService_T = IBeforeExportCalPersonExtService_S & IBeforeExportCalPersonExtService$;
            interface IBeforeExportCalPersonExtService extends IBeforeExportCalPersonExtService_T {
            }
        }
        namespace kd.sdk.sit.hcsi.business.extpoint{
            interface ITruncationDealExtService_S {
            }
            interface ITruncationDealExtService$ {
                /**
                 *  按舍位方式处理数据
                 *  @param event
                 *  <code><pre>
                 *
                 *  public class TruncationDealExtServiceDemo implements ITruncationDealExtService {
                 *
                 *      @Override
                 *      public void dataTruncationDeal(ItemDataEvent event) {
                 *          // 获取舍位方式
                 *          String truncationCode = event.getTruncationCode();
                 *          // 获取结果值
                 *          BigDecimal resultValue = event.getResultValue();
                 *          if (resultValue == null) {
                 *               return;
                 *           }
                 *          // 判断是否是四舍五入，保留两位小数
                 *          if ("12".equals(truncationCode)) {
                 *              // 按舍位方式处理数据
                 *              resultValue = resultValue.setScale(2, BigDecimal.ROUND_HALF_UP);
                 *              // 将处理好的数据重新设置到事件对象中
                 *              event.setResultValue(resultValue);
                 *          }
                 *      }
                 *  }
                 * <pre/><code/>
                 */
                dataTruncationDeal?(event:kd.sdk.sit.hcsi.common.events.cal.ItemDataEvent):void;
            }
            type ITruncationDealExtService_T = ITruncationDealExtService_S & ITruncationDealExtService$;
            interface ITruncationDealExtService extends ITruncationDealExtService_T {
            }
            interface IInsuranceDataSynExtService_S {
            }
            interface IInsuranceDataSynExtService$ {
                afterInsuranceDataList?(event:kd.sdk.sit.hcsi.common.events.insurancedata.AfterInsuranceDataListEvent):void;
                beforeBuildSelectFields?(event:kd.sdk.sit.hcsi.common.events.insurancedata.AfterInsuranceDataListEvent):void;
            }
            type IInsuranceDataSynExtService_T = IInsuranceDataSynExtService_S & IInsuranceDataSynExtService$;
            interface IInsuranceDataSynExtService extends IInsuranceDataSynExtService_T {
            }
        }
        namespace kd.sdk.sit.hcsi.business.mservice.helper{
            interface CalResultServiceHelper_S {
                /**
                 * @param params - map包含3个key和对应的值，每个key的参数信息如下：<br/>
                 *               &lt;key是sinSurTaskIds，value是社保计算id集合，数据类型是Collection<Long>，必填&gt; <br/>
                 *               &lt;key是operationKey，value是donothing_audit（审核）/donothing_unaudit（反审核）必填&gt; <br/>
                 * @return Map<String,Object> - 接口是否调用成功，整体消息，接口状态信息及返回数据的Map
                 */
                auditOrUnauditSinsurTask(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 根据期间、档案，以及查询字段，获取社保明细数据
                 *
                 * @param params - map包含3个key和对应的值，每个key的参数信息如下：<br/>
                 *               &lt;key是periodIds，value是社保期间id集合，数据类型是Collection<Long>，必填&gt; <br/>
                 *               &lt;key是sinsurFileIds，value社保档案id集合，数据类型是Collection<Long>，必填&gt; <br/>
                 *               &lt;key是selectFields，value是社保明细查询字段,如果多个字段要用“,”逗号分隔，如果查询分录数据，字段前要加分录标识，数据类型是String，必填&gt; <br/>
                 * @return Map<String, Object> - 接口是否调用成功，整体消息，接口状态信息及返回数据的Map
                 */
                getSocInsurancePersons(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 社保明细数据推送算薪
                 *
                 * @param params - map包含3个key和对应的值，每个key的参数信息如下：<br/>
                 *               &lt;key是socInsurancePersonIds，value是社保明细id，数据类型是Collection<Long>，必填&gt; <br/>
                 *               &lt;key是推送类型pushType，value如果填"1", 则推送数据到算薪，如果填"2"；则从算薪撤回推送数据；数据类型是String，必填&gt; <br/>
                 *               &lt;key是entityNumber，value是当前操作所在实体，用于记录操作日志, 数据类型是Map，必填&gt; <br/>
                 * @return Map<String, Object> - 接口是否调用成功，整体消息，接口状态信息及返回数据的Map
                 */
                pushSocInsuranceToSalary(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 更新社保人员并计算
                 *
                 * @param params - map包含4个key和对应的值，每个key的参数信息如下：<br/>
                 *               &lt;key是periodId，value是社保期间id，数据类型是Long，必填&gt; <br/>
                 *               &lt;key是insuredCompanyIds，value参保单位id集合，数据类型是Collection<Long>，必填&gt; <br/>
                 *               &lt;key是更新类型calType，value如果填"1", 则新增任务并计算，如果填"3"；则更新任务并计算；数据类型是String，必填&gt; <br/>
                 *               &lt;key是extendParams，value是拓展入参map, 用户计算完后，调用二开埋点，做自定义处理，数据类型是Map，必填&gt; <br/>
                 * @return Map<String, Object> - 接口是否调用成功，整体消息，接口状态信息及返回数据的Map
                 */
                updateSocInsurancePersonAndCal(params:$.java.util.Map):$.java.util.Map;
            }
            interface CalResultServiceHelper_C extends CalResultServiceHelper_S {
                new():CalResultServiceHelper;
            }
            interface CalResultServiceHelper$ {
            }
            type CalResultServiceHelper_T = CalResultServiceHelper_S & CalResultServiceHelper$;
            interface CalResultServiceHelper extends CalResultServiceHelper_T {
            }
        }
        namespace kd.sdk.sit.hcsi.common.events.cal{
            interface OnSetInsuredSumItemDataEvent_S {
            }
            type OnSetInsuredSumItemDataEvent_ST = $.java.io.Serializable & OnSetInsuredSumItemDataEvent_S;
            interface OnSetInsuredSumItemDataEvent_C extends OnSetInsuredSumItemDataEvent_ST {
                new():OnSetInsuredSumItemDataEvent;
                new(detailMap:$.java.util.Map,resultCol:$.kd.bos.dataentity.entity.DynamicObjectCollection,type_arg:string):OnSetInsuredSumItemDataEvent;
                new(detailDy:$.kd.bos.dataentity.entity.DynamicObject,resultCol:$.kd.bos.dataentity.entity.DynamicObjectCollection,type_arg:string):OnSetInsuredSumItemDataEvent;
            }
            interface OnSetInsuredSumItemDataEvent$ {
                getDetailDy():$.kd.bos.dataentity.entity.DynamicObject;
                getDetailMap():$.java.util.Map;
                getResultCol():$.kd.bos.dataentity.entity.DynamicObjectCollection;
                getType():string;
                setDetailDy(detailDy:$.kd.bos.dataentity.entity.DynamicObject):void;
                setDetailMap(detailMap:$.java.util.Map):void;
                setResultCol(resultCol:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
                setType(type_arg:string):void;
            }
            type OnSetInsuredSumItemDataEvent_T = $.java.io.Serializable & OnSetInsuredSumItemDataEvent_S & OnSetInsuredSumItemDataEvent$;
            interface OnSetInsuredSumItemDataEvent extends OnSetInsuredSumItemDataEvent_T {
            }
            interface OnGetInsuredStandardListEvent_S {
            }
            type OnGetInsuredStandardListEvent_ST = $.java.io.Serializable & OnGetInsuredStandardListEvent_S;
            interface OnGetInsuredStandardListEvent_C extends OnGetInsuredStandardListEvent_ST {
                new():OnGetInsuredStandardListEvent;
            }
            interface OnGetInsuredStandardListEvent$ {
                getInsureItemIds():$.java.util.List;
                getInsuredStandards():$.java.util.List;
                getListView():$.kd.bos.form.IFormView;
                setInsureItemIds(insureItemIds:$.java.util.List):void;
                setInsuredStandards(insuredStandards:$.java.util.List):void;
                setListView(listView:$.kd.bos.form.IFormView):void;
            }
            type OnGetInsuredStandardListEvent_T = $.java.io.Serializable & OnGetInsuredStandardListEvent_S & OnGetInsuredStandardListEvent$;
            interface OnGetInsuredStandardListEvent extends OnGetInsuredStandardListEvent_T {
            }
            interface ItemDataEvent_S {
            }
            type ItemDataEvent_ST = $.java.io.Serializable & ItemDataEvent_S;
            interface ItemDataEvent_C extends ItemDataEvent_ST {
                new(resultValue:$.java.math.BigDecimal,truncationCode:string):ItemDataEvent;
            }
            interface ItemDataEvent$ {
                getResultValue():$.java.math.BigDecimal;
                getTruncationCode():string;
                setResultValue(resultValue:$.java.math.BigDecimal):void;
                setTruncationCode(truncationCode:string):void;
            }
            type ItemDataEvent_T = $.java.io.Serializable & ItemDataEvent_S & ItemDataEvent$;
            interface ItemDataEvent extends ItemDataEvent_T {
            }
            interface OnGetInsuredSumItemListEvent_S {
            }
            type OnGetInsuredSumItemListEvent_ST = $.java.io.Serializable & OnGetInsuredSumItemListEvent_S;
            interface OnGetInsuredSumItemListEvent_C extends OnGetInsuredSumItemListEvent_ST {
                new():OnGetInsuredSumItemListEvent;
            }
            interface OnGetInsuredSumItemListEvent$ {
                getListView():$.kd.bos.form.IFormView;
                getSumItemList():$.java.util.List;
                setListView(listView:$.kd.bos.form.IFormView):void;
                setSumItemList(sumItemList:$.java.util.List):void;
            }
            type OnGetInsuredSumItemListEvent_T = $.java.io.Serializable & OnGetInsuredSumItemListEvent_S & OnGetInsuredSumItemListEvent$;
            interface OnGetInsuredSumItemListEvent extends OnGetInsuredSumItemListEvent_T {
            }
            interface BeforeExportCalPersonEvent_S {
            }
            type BeforeExportCalPersonEvent_ST = $.java.io.Serializable & BeforeExportCalPersonEvent_S;
            interface BeforeExportCalPersonEvent_C extends BeforeExportCalPersonEvent_ST {
                /**
                 * 无参构造器
                 */
                new():BeforeExportCalPersonEvent;
                /**
                 * 有参数构造器
                 *
                 * @param columnFieldKeyList 列表字段key
                 * @param userListColumnsVisibleMap       列表小齿轮中列表字段可见性， ture可见， false不可见
                 */
                new(columnFieldKeyList:$.java.util.List,userListColumnsVisibleMap:$.java.util.Map):BeforeExportCalPersonEvent;
            }
            interface BeforeExportCalPersonEvent$ {
                /**
                 * @return 获取列表字段key
                 */
                getColumnFieldKeyList():$.java.util.List;
                /**
                 * @return 列表小此轮，字段可见性， ture可见
                 */
                getUserListColumnsVisibleMap():$.java.util.Map;
                /**
                 * 设置排序后的列表字段key
                 *
                 * @param columnFieldKeyList 列表字段key与对应的列信息
                 */
                setColumnFieldKeyList(columnFieldKeyList:$.java.util.List):void;
            }
            type BeforeExportCalPersonEvent_T = $.java.io.Serializable & BeforeExportCalPersonEvent_S & BeforeExportCalPersonEvent$;
            interface BeforeExportCalPersonEvent extends BeforeExportCalPersonEvent_T {
            }
        }
        namespace kd.sdk.sit.hcsi.common.events.insurancedata{
            interface AfterInsuranceDataListEvent_S {
            }
            interface AfterInsuranceDataListEvent_C extends AfterInsuranceDataListEvent_S {
                new(selectFieldSet:$.java.util.Set,insuranceDataList:$.java.util.List,queryInsuranceDatas:$.kd.bos.dataentity.entity.DynamicObject[]):AfterInsuranceDataListEvent;
            }
            interface AfterInsuranceDataListEvent$ {
                getInsuranceDataList():$.java.util.List;
                getQueryInsuranceDatas():$.kd.bos.dataentity.entity.DynamicObject[];
                getSelectFieldSet():$.java.util.Set;
                setInsuranceDataList(insuranceDataList:$.java.util.List):void;
                setQueryInsuranceDatas(queryInsuranceDatas:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                setSelectFieldSet(selectFieldSet:$.java.util.Set):void;
            }
            type AfterInsuranceDataListEvent_T = AfterInsuranceDataListEvent_S & AfterInsuranceDataListEvent$;
            interface AfterInsuranceDataListEvent extends AfterInsuranceDataListEvent_T {
            }
        }
        namespace kd.sdk.sit.hcsi.common.events.sinsurfilebase{
            interface SinSurFileBaseAddPageAttributeEvent_S {
            }
            type SinSurFileBaseAddPageAttributeEvent_ST = $.java.io.Serializable & SinSurFileBaseAddPageAttributeEvent_S;
            interface SinSurFileBaseAddPageAttributeEvent_C extends SinSurFileBaseAddPageAttributeEvent_ST {
                /**
                 * 构造器
                 *
                 * @param tableValueSetter
                 * @param attribute
                 * @param index
                 */
                new(tableValueSetter:$.kd.bos.entity.datamodel.TableValueSetter,attribute:$.java.util.Map,index:number):SinSurFileBaseAddPageAttributeEvent;
            }
            interface SinSurFileBaseAddPageAttributeEvent$ {
                /**
                 * 获取二开字段映射
                 *
                 * @return
                 */
                getAttribute():$.java.util.Map;
                /**
                 * 获取分录行号
                 *
                 * @return
                 */
                getIndex():number;
                /**
                 * 获取分录对象
                 *
                 * @return
                 */
                getTableValueSetter():$.kd.bos.entity.datamodel.TableValueSetter;
                /**
                 * 设置二开字段映射
                 *
                 * @param attribute
                 */
                setAttribute(attribute:$.java.util.Map):void;
                /**
                 * 设置分录行号
                 *
                 * @param index
                 */
                setIndex(index:number):void;
                /**
                 * 设置分录对象
                 *
                 * @param tableValueSetter
                 */
                setTableValueSetter(tableValueSetter:$.kd.bos.entity.datamodel.TableValueSetter):void;
            }
            type SinSurFileBaseAddPageAttributeEvent_T = $.java.io.Serializable & SinSurFileBaseAddPageAttributeEvent_S & SinSurFileBaseAddPageAttributeEvent$;
            interface SinSurFileBaseAddPageAttributeEvent extends SinSurFileBaseAddPageAttributeEvent_T {
            }
            interface SinSurFileBaseAddAttributeEvent_S {
            }
            type SinSurFileBaseAddAttributeEvent_ST = $.java.io.Serializable & SinSurFileBaseAddAttributeEvent_S;
            interface SinSurFileBaseAddAttributeEvent_C extends SinSurFileBaseAddAttributeEvent_ST {
                /**
                 * 构造器
                 *
                 * @param sinSurFileBase
                 * @param attribute
                 */
                new(sinSurFileBase:$.kd.bos.dataentity.entity.DynamicObject,attribute:$.java.util.Map):SinSurFileBaseAddAttributeEvent;
            }
            interface SinSurFileBaseAddAttributeEvent$ {
                /**
                 * 二开字段
                 * 获取
                 *
                 * @return
                 */
                getAttribute():$.java.util.Map;
                /**
                 * 获取错误信息
                 *
                 * @return
                 */
                getMessage():string;
                /**
                 * 获取社保基数设置对象
                 *
                 * @return
                 */
                getSinSurFileBase():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取属性是否设置成功
                 *
                 * @return
                 */
                isStatus():boolean;
                /**
                 * 设置二开字段
                 *
                 * @param attribute
                 */
                setAttribute(attribute:$.java.util.Map):void;
                /**
                 * 设置错误信息
                 *
                 * @param message
                 */
                setMessage(message:string):void;
                /**
                 * 设置社保基数设置对象
                 *
                 * @param sinSurFileBase
                 */
                setSinSurFileBase(sinSurFileBase:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 设置属性是否设置成功
                 *
                 * @param status
                 */
                setStatus(status:boolean):void;
            }
            type SinSurFileBaseAddAttributeEvent_T = $.java.io.Serializable & SinSurFileBaseAddAttributeEvent_S & SinSurFileBaseAddAttributeEvent$;
            interface SinSurFileBaseAddAttributeEvent extends SinSurFileBaseAddAttributeEvent_T {
            }
            interface SinSurFileBaseHisChangeEvent_S {
            }
            type SinSurFileBaseHisChangeEvent_ST = $.java.io.Serializable & SinSurFileBaseHisChangeEvent_S;
            interface SinSurFileBaseHisChangeEvent_C extends SinSurFileBaseHisChangeEvent_ST {
                /**
                 * 构造器
                 *
                 * @param sinSurFileBase 社保基数设置对象
                 * @param attribute      二开字段
                 */
                new(sinSurFileBase:$.kd.bos.dataentity.entity.DynamicObject,attribute:$.java.util.Map):SinSurFileBaseHisChangeEvent;
            }
            interface SinSurFileBaseHisChangeEvent$ {
                /**
                 * 获取二开字段
                 *
                 * @return
                 */
                getAttribute():$.java.util.Map;
                /**
                 * 获取社保基数设置对象
                 *
                 * @return
                 */
                getSinSurFileBase():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取标识位
                 *
                 * @return
                 */
                isFlag():boolean;
                /**
                 * 设置二开字段
                 *
                 * @param attribute
                 */
                setAttribute(attribute:$.java.util.Map):void;
                /**
                 * 设置标识位
                 *
                 * @param flag
                 */
                setFlag(flag:boolean):void;
                /**
                 * 设置社保基数设置对象
                 *
                 * @param sinSurFileBase
                 */
                setSinSurFileBase(sinSurFileBase:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type SinSurFileBaseHisChangeEvent_T = $.java.io.Serializable & SinSurFileBaseHisChangeEvent_S & SinSurFileBaseHisChangeEvent$;
            interface SinSurFileBaseHisChangeEvent extends SinSurFileBaseHisChangeEvent_T {
            }
            interface SinSurFileBaseImportAddExcelColumnEvent_S {
            }
            type SinSurFileBaseImportAddExcelColumnEvent_ST = $.java.io.Serializable & SinSurFileBaseImportAddExcelColumnEvent_S;
            interface SinSurFileBaseImportAddExcelColumnEvent_C extends SinSurFileBaseImportAddExcelColumnEvent_ST {
                new(headerList:$.java.util.List):SinSurFileBaseImportAddExcelColumnEvent;
            }
            interface SinSurFileBaseImportAddExcelColumnEvent$ {
                getHeaderList():$.java.util.List;
                setHeaderList(headerList:$.java.util.List):void;
            }
            type SinSurFileBaseImportAddExcelColumnEvent_T = $.java.io.Serializable & SinSurFileBaseImportAddExcelColumnEvent_S & SinSurFileBaseImportAddExcelColumnEvent$;
            interface SinSurFileBaseImportAddExcelColumnEvent extends SinSurFileBaseImportAddExcelColumnEvent_T {
            }
        }
        namespace kd.sdk.sit.hcsi.formplugin.cal.detail{
            interface ICalPersonListAutoSumPlugin_S {
            }
            interface ICalPersonListAutoSumPlugin$ {
                /**
                 * 获取社保明细列表是否自动合计
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
            }
            type ICalPersonListAutoSumPlugin_T = ICalPersonListAutoSumPlugin_S & ICalPersonListAutoSumPlugin$;
            interface ICalPersonListAutoSumPlugin extends ICalPersonListAutoSumPlugin_T {
            }
            interface ICalPersonListDisplayPlugin_S {
            }
            interface ICalPersonListDisplayPlugin$ {
                /**
                 * 获取社保明细列表动态显示的动态列险种项目信息
                 *
                 * @param event
                 */
                onGetInsuredStandardList?(event:kd.sdk.sit.hcsi.common.events.cal.OnGetInsuredStandardListEvent):void;
                /**
                 * 获取社保明细合并项信息
                 * @param event
                 */
                onGetInsuredSumItemList?(event:kd.sdk.sit.hcsi.common.events.cal.OnGetInsuredSumItemListEvent):void;
                /**
                 * 设置社保明细合并项数据
                 * @param event
                 */
                onSetInsuredSumItemData?(event:kd.sdk.sit.hcsi.common.events.cal.OnSetInsuredSumItemDataEvent):void;
            }
            type ICalPersonListDisplayPlugin_T = ICalPersonListDisplayPlugin_S & ICalPersonListDisplayPlugin$;
            interface ICalPersonListDisplayPlugin extends ICalPersonListDisplayPlugin_T {
            }
        }
        namespace kd.sdk.sit.hcsi.formplugin.sinsurfilebase{
            interface ISinSurFileBaseAddAttributePlugin_S {
            }
            interface ISinSurFileBaseAddAttributePlugin$ {
                /**
                 * 社保基数设置添加二开属性
                 *
                 * @param sinSurFileBaseAddPageAttributeEvent 为社保基数设置页面添加二开属性并赋值入参
                 *   <pre><code>
                 *
                 *     //需要处理的二开字段
                 *     private static final List<String> FIELDS = Arrays.asList("datefield", "basedatafield", "combofield");
                 *
                 *     @Override
                 *     public void addAttribute(SinSurFileBaseAddPageAttributeEvent sinSurFileBaseAddPageAttributeEvent) {
                 *         Map<String, Object> attribute = sinSurFileBaseAddPageAttributeEvent.getAttribute();
                 *         TableValueSetter tableValueSetter = sinSurFileBaseAddPageAttributeEvent.getTableValueSetter();
                 *         for (Map.Entry<String, Object> entry : attribute.entrySet()) {
                 *             String key = entry.getKey();
                 *             Object value = entry.getValue();
                 *             if (FIELDS.contains(key)) {
                 *                 if ("basedatafield".equals(key)) {
                 *                     //特殊处理，如果字段是基础资料，需要获取基础资料的主键在赋值
                 *                     if (value != null) {
                 *                         tableValueSetter.set(key, ((DynamicObject) value).getPkValue(), sinSurFileBaseAddPageAttributeEvent.getIndex());
                 *                     }
                 *                 } else {
                 *                     tableValueSetter.set(key, value, sinSurFileBaseAddPageAttributeEvent.getIndex());
                 *                 }
                 *             }
                 *         }
                 *     }
                 *  </code></pre>
                 */
                addAttribute(sinSurFileBaseAddPageAttributeEvent:kd.sdk.sit.hcsi.common.events.sinsurfilebase.SinSurFileBaseAddPageAttributeEvent):void;
            }
            type ISinSurFileBaseAddAttributePlugin_T = ISinSurFileBaseAddAttributePlugin_S & ISinSurFileBaseAddAttributePlugin$;
            interface ISinSurFileBaseAddAttributePlugin extends ISinSurFileBaseAddAttributePlugin_T {
            }
            interface ISinSurFileBaseImportAddExcelColumnPlugin_S {
            }
            interface ISinSurFileBaseImportAddExcelColumnPlugin$ {
                /**
                 * 为Excel模板添加二开字段列
                 *
                 * @param sinSurFileBaseImportAddExcelColumnEvent 社保基数设置仅更新险种基数设置引入时模板添加二开字段入参
                 * <pre><code>
                 *   //模板中的第3行
                 *     private static final List<String> NUMBERS = Arrays.asList("datefield", "basedatafield", "combofield");
                 *     //模板中的第4行 要遵循字段映射 datefield：日期6，basedatafield：国家和地区，combofield：下拉列表3
                 *     private static final List<String> NAMES = Arrays.asList("日期6", "国家和地区", "下拉列表3");
                 *     //下拉值
                 *     private static final List<String> DROP_DOWN_LIST = Arrays.asList("测试1", "测试2");
                 *
                 *     @Override
                 *     public void addExcelColumn(SinSurFileBaseImportAddExcelColumnEvent sinSurFileBaseImportAddExcelColumnEvent) {
                 *         List<List<Map<String, Object>>> headerLists = sinSurFileBaseImportAddExcelColumnEvent.getHeaderList();
                 *         List<Map<String, Object>> numberRowLists = headerLists.get(0);
                 *         List<Map<String, Object>> nameRowLists = headerLists.get(1);
                 *         List<Map<String, Object>> numberRowList = new ArrayList<>(10);
                 *         List<Map<String, Object>> nameRowList = new ArrayList<>(10);
                 *         for (int i = numberRowLists.size(); i < NUMBERS.size() + numberRowLists.size(); i++) {
                 *             Map<String, Object> numberCellMap = new HashMap<>(3);
                 *             //index、value、header为必填
                 *             numberCellMap.put("index", i);
                 *             numberCellMap.put("value", NUMBERS.get(i - numberRowLists.size()));
                 *             numberCellMap.put("header", Boolean.FALSE);
                 *             numberRowList.add(numberCellMap);
                 *         }
                 *         List<Integer> isDropDownColumn = Collections.singletonList(2);
                 *         List<Integer> mustInputColumn = Arrays.asList(0, 2);
                 *         for (int j = nameRowLists.size(); j < NAMES.size() + nameRowLists.size(); j++) {
                 *             Map<String, Object> nameCellMap = new HashMap<>(4);
                 *             //index、value、header为必填
                 *             nameCellMap.put("index", j);
                 *             nameCellMap.put("value", NAMES.get(j - nameRowLists.size()));
                 *             nameCellMap.put("header", Boolean.TRUE);
                 *             if (mustInputColumn.contains(j - nameRowLists.size())) {
                 *                 //红色标记
                 *                 nameCellMap.put("color", Boolean.TRUE);
                 *                 //必填
                 *                 nameCellMap.put("mustInput", Boolean.TRUE);
                 *             }
                 *             if (isDropDownColumn.contains(j - nameRowLists.size())) {
                 *                 //代表下拉
                 *                 nameCellMap.put("isDropDown", Boolean.TRUE);
                 *                 nameCellMap.put("dropDownList", DROP_DOWN_LIST);
                 *             }
                 *             nameRowList.add(nameCellMap);
                 *         }
                 *         numberRowLists.addAll(numberRowList);
                 *         nameRowLists.addAll(nameRowList);
                 *     }
                 *  </code></pre>
                 */
                addExcelColumn(sinSurFileBaseImportAddExcelColumnEvent:kd.sdk.sit.hcsi.common.events.sinsurfilebase.SinSurFileBaseImportAddExcelColumnEvent):void;
            }
            type ISinSurFileBaseImportAddExcelColumnPlugin_T = ISinSurFileBaseImportAddExcelColumnPlugin_S & ISinSurFileBaseImportAddExcelColumnPlugin$;
            interface ISinSurFileBaseImportAddExcelColumnPlugin extends ISinSurFileBaseImportAddExcelColumnPlugin_T {
            }
        }
        namespace kd.sdk.sit.hcsi.oppplugin.sinsurfile{
            interface ISinSurFileBsedValidatorPlugin_S {
            }
            interface ISinSurFileBsedValidatorPlugin$ {
                /**
                 * 社保档案正常参保时变更的生效日期可越过用工结束日期插件
                 *
                 *  <pre><code>
                 *   @Override
                 *   public boolean isNotValidator() {
                 *       //true 可越过结束日期检验
                 *       return true;
                 *   }
                 *  </code></pre>
                 */
                isNotValidator?():boolean;
            }
            type ISinSurFileBsedValidatorPlugin_T = ISinSurFileBsedValidatorPlugin_S & ISinSurFileBsedValidatorPlugin$;
            interface ISinSurFileBsedValidatorPlugin extends ISinSurFileBsedValidatorPlugin_T {
            }
        }
        namespace kd.sdk.sit.hcsi.oppplugin.sinsurfilebase{
            interface ISinSurFileBaseAddAttributeService_S {
            }
            interface ISinSurFileBaseAddAttributeService$ {
                /**
                 * 社保基数设置添加二开属性
                 *
                 * @param sinSurFileBaseAddAttributeEvent 社保基数设置添加二开属性入参
                 *  <pre><code>
                 *    private static final List<String> FIELDS = Arrays.asList("datefield", "basedatafield", "combofield");
                 *
                 *     @Override
                 *     public void addAttribute(SinSurFileBaseAddAttributeEvent sinSurFileBaseAddAttributeEvent) {
                 *         DynamicObject sinSurFileBase = sinSurFileBaseAddAttributeEvent.getSinSurFileBase();
                 *         Map<String, Object> attribute = sinSurFileBaseAddAttributeEvent.getAttribute();
                 *         for (Map.Entry<String, Object> entry : attribute.entrySet()) {
                 *             //判断是否是二开字段
                 *             String key = entry.getKey();
                 *             if (FIELDS.contains(key)) {
                 *                 Object value = entry.getValue();
                 *                 //最好判断一下value值是否符合字段类型
                 *                 sinSurFileBase.set(key, value);
                 *             }
                 *         }
                 *     }
                 *  </code></pre>
                 */
                addAttribute(sinSurFileBaseAddAttributeEvent:kd.sdk.sit.hcsi.common.events.sinsurfilebase.SinSurFileBaseAddAttributeEvent):void;
            }
            type ISinSurFileBaseAddAttributeService_T = ISinSurFileBaseAddAttributeService_S & ISinSurFileBaseAddAttributeService$;
            interface ISinSurFileBaseAddAttributeService extends ISinSurFileBaseAddAttributeService_T {
            }
            interface ISinSurFileBaseHisChangeService_S {
            }
            interface ISinSurFileBaseHisChangeService$ {
                /**
                 * 判断二开字段是否发生了变化，以此判断是否变更基数设置
                 *
                 * @param sinSurFileBaseHisChangeEvent  社保基数设置是否需要变更接口入参
                 *  <pre><code>
                 *   @Override
                 *     public void isChange(SinSurFileBaseHisChangeEvent sinSurFileBaseHisChangeEvent) {
                 *         DynamicObject sinSurFileBase = sinSurFileBaseHisChangeEvent.getSinSurFileBase();
                 *         //attribute 的来源经过缓存处理后value变成了string或map类型，在使用时需要按需转换类型
                 *         Map<String, Object> attribute = sinSurFileBaseHisChangeEvent.getAttribute();
                 *         Date dateField = sinSurFileBase.getDate("datefield");
                 *         String dbDateField = (String) attribute.get("datefield");
                 *         if ((dateField == null && dbDateField != null) || (dateField != null && dbDateField == null)) {
                 *             sinSurFileBaseHisChangeEvent.setFlag(true);
                 *             return;
                 *         }
                 *         try {
                 *             if (dateField != null && !dateField.equals(HRDateTimeUtils.parseDate(dbDateField, "yyyy-MM-dd"))) {
                 *                 sinSurFileBaseHisChangeEvent.setFlag(true);
                 *                 return;
                 *             }
                 *         } catch (ParseException e) {
                 *             e.printStackTrace();
                 *         }
                 *         String comboField = sinSurFileBase.getString("combofield");
                 *         String dbComboField = (String) attribute.get("combofield");
                 *         if ((comboField == null && dbComboField != null) || (comboField != null && dbComboField == null)) {
                 *             sinSurFileBaseHisChangeEvent.setFlag(true);
                 *             return;
                 *         }
                 *         if (comboField != null && !comboField.equals(dbComboField)) {
                 *             sinSurFileBaseHisChangeEvent.setFlag(true);
                 *             return;
                 *         }
                 *         Long baseDataFieldId = sinSurFileBase.getLong("basedatafield.id");
                 *         Map basedatafield = (Map) attribute.get("basedatafield");
                 *         if ((baseDataFieldId == 0 && basedatafield != null) || (baseDataFieldId != 0 && basedatafield == null)) {
                 *             sinSurFileBaseHisChangeEvent.setFlag(true);
                 *             return;
                 *         }
                 *         if (baseDataFieldId != 0 && !baseDataFieldId.equals(Long.valueOf((basedatafield).get("id").toString()))) {
                 *             sinSurFileBaseHisChangeEvent.setFlag(true);
                 *         }
                 *     }
                 *
                 *  </code></pre>
                 */
                isChange(sinSurFileBaseHisChangeEvent:kd.sdk.sit.hcsi.common.events.sinsurfilebase.SinSurFileBaseHisChangeEvent):void;
            }
            type ISinSurFileBaseHisChangeService_T = ISinSurFileBaseHisChangeService_S & ISinSurFileBaseHisChangeService$;
            interface ISinSurFileBaseHisChangeService extends ISinSurFileBaseHisChangeService_T {
            }
        }
        namespace kd.sdk.sit.hcsi.service.sinsurfile{
            interface SinSurFileHelper_S {
            }
            interface SinSurFileHelper_C extends SinSurFileHelper_S {
                new():SinSurFileHelper;
            }
            interface SinSurFileHelper$ {
                /**
                 * 社保档案写入
                 *
                 * @param params
                 * @return
                 */
                syncFileAndPersonInfo(params:$.java.util.List):$.java.util.Map;
                /**
                 * 社保档案写入
                 *
                 * @param params
                 * @return
                 */
                syncFileAndPersonInfoByEmployeeId(params:$.java.util.List):$.java.util.Map;
            }
            type SinSurFileHelper_T = SinSurFileHelper_S & SinSurFileHelper$;
            interface SinSurFileHelper extends SinSurFileHelper_T {
            }
        }
        namespace kd.sdk.sit.hcsi.service.sinsurfilebase{
            interface ISinSurFileBaseImportAddAttributeService_S {
            }
            interface ISinSurFileBaseImportAddAttributeService$ {
                /**
                 * 社保基数设置添加二开属性
                 *
                 * @param sinSurFileBaseAddAttributeEvent
                 *  <pre><code>
                 *
                 *     //需要处理的二开字段
                 *     private static final List<String> FIELDS = Arrays.asList("datefield", "basedatafield", "combofield");
                 *
                 *     @Override
                 *     public void addImportAttribute(SinSurFileBaseAddAttributeEvent sinSurFileBaseAddAttributeEvent) {
                 *         DynamicObject sinSurFileBase = sinSurFileBaseAddAttributeEvent.getSinSurFileBase();
                 *         Map<String, Object> attribute = sinSurFileBaseAddAttributeEvent.getAttribute();
                 *         for (Map.Entry<String, Object> entry : attribute.entrySet()) {
                 *             //解析Excel时value值都是字符串，需要判断一下value值是否符合字段类型，如果不符合需要自行转换，例如引入时日期字段传递过来的是一个字符串，需要转换成日期格式
                 *             String key = entry.getKey();
                 *             switch (key) {
                 *                 case "datefield":
                 *                     try {
                 *                         sinSurFileBase.set(key, HRDateTimeUtils.parseDate((String) entry.getValue(), "yyyy-MM-dd"));
                 *                     } catch (ParseException e) {
                 *                         e.printStackTrace();
                 *                         sinSurFileBaseAddAttributeEvent.setStatus(false);
                 *                         sinSurFileBaseAddAttributeEvent.setMessage("日期转换失败");
                 *                     }
                 *                     break;
                 *                 case "basedatafield":
                 *                     //如果扩展字段是基础资料，Excel上传时传递的是编码，需要查询到对应的数据在进行赋值
                 *                     HRBaseServiceHelper hrBaseServiceHelper = new HRBaseServiceHelper("bd_country");
                 *                     sinSurFileBase.set(key, hrBaseServiceHelper.queryOne(new QFilter[]{new QFilter("number", QCP.equals, entry.getValue())}));
                 *                     break;
                 *                 case "combofield":
                 *                     //如果是下拉选项，Excel填写的是【显示标题】，入库需要转换为【下拉值】
                 *                     String comboFieldValue = (String) entry.getValue();
                 *                     if (HRStringUtils.equals("测试1", comboFieldValue)) {
                 *                         sinSurFileBase.set(key, 1);
                 *                     } else if (HRStringUtils.equals("测试2", comboFieldValue)) {
                 *                         sinSurFileBase.set(key, 2);
                 *                     } else {
                 *                         sinSurFileBaseAddAttributeEvent.setStatus(false);
                 *                         sinSurFileBaseAddAttributeEvent.setMessage("非下拉选项值");
                 *                     }
                 *                     break;
                 *                 default:
                 *                     break;
                 *             }
                 *         }
                 *     }
                 * </code></pre>
                 */
                addImportAttribute(sinSurFileBaseAddAttributeEvent:kd.sdk.sit.hcsi.common.events.sinsurfilebase.SinSurFileBaseAddAttributeEvent):void;
            }
            type ISinSurFileBaseImportAddAttributeService_T = ISinSurFileBaseImportAddAttributeService_S & ISinSurFileBaseImportAddAttributeService$;
            interface ISinSurFileBaseImportAddAttributeService extends ISinSurFileBaseImportAddAttributeService_T {
            }
            interface SinSurFileBaseHelper_S {
            }
            interface SinSurFileBaseHelper_C extends SinSurFileBaseHelper_S {
                new():SinSurFileBaseHelper;
            }
            interface SinSurFileBaseHelper$ {
                /**
                 * 仅变更社保基数设置
                 *
                 * @param params
                 * @return
                 */
                hisChangeSinSurBases(params:$.java.util.List):$.java.util.Map;
                /**
                 * 社保基数设置变更（变更参保标准和社保基数设置）
                 *
                 * @param params
                 * @return
                 */
                hisChangeSinSurFileStdAndBases(params:$.java.util.List):$.java.util.Map;
                /**
                 * 仅变更档案关联参保标准
                 *
                 * @param params
                 * @return
                 */
                hisChangeSinSurFileStds(params:$.java.util.List):$.java.util.Map;
                /**
                 * 新增或更新社保基数设置
                 *
                 * @param params
                 * @return
                 */
                saveSinSurFileStdAndBases(params:$.java.util.List):$.java.util.Map;
            }
            type SinSurFileBaseHelper_T = SinSurFileBaseHelper_S & SinSurFileBaseHelper$;
            interface SinSurFileBaseHelper extends SinSurFileBaseHelper_T {
            }
        }
        namespace kd.sdk.sit.iit{
            interface SdkIitModule_S {
            }
            type SdkIitModule_ST = $.kd.sdk.module.Module & SdkIitModule_S;
            interface SdkIitModule_C extends SdkIitModule_ST {
                new():SdkIitModule;
            }
            interface SdkIitModule$ {
            }
            type SdkIitModule_T = $.kd.sdk.module.Module & SdkIitModule_S & SdkIitModule$;
            interface SdkIitModule extends SdkIitModule_T {
            }
        }
        namespace kd.sdk.sit.iit.business.mservice.helper{
            interface TaxFileServiceHelper_S {
                /**
                 * 查询个税档案信息
                 *
                 * @param params - 参数Map的如下：<br/>
                 *               &lt;key是data，value是人员个税档案ID-管理属地集合，数据类型是List，必填&gt; <br/>
                 *               &lt;key是props，value是要查询的属性集合，数据类型是Set，必填&gt; <br/>
                 *               &lt;key是includeStop，value是是否包含停止算税的档案，数据类型是Boolean，非必填&gt; <br/>
                 *               &lt;key是useHis，value是历史基础资料匹配模式，数据类型是Integer，非必填&gt; <br/>
                 *               &lt;key是includeAbandon，value是是否包含废弃档案模式，数据类型是Integer，非必填&gt; <br/>
                 *               &lt;key是dataStatus，value是数据状态匹配模式，数据类型是Integer，非必填&gt; <br/>
                 * @return Map<String, Object> - 接口是否调用成功，整体消息，接口状态信息及返回数据的Map
                 */
                findPropOfTaxFile(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 同步个税档案数据包含子模块信息，通过status字段可以控制档案数据的 新增 、 修改 、 审核生效
                 *
                 * @param params - 多个Map组成的列表，其中，每个Map的参数列表如下：<br/>
                 *               &lt;key是sourceid，value是请求单据的id或协作核定单id，数据溯源使用，数据类型是Long，必填&gt; <br/>
                 *               &lt;key是taxfile，value是个税档案基本信息Map<属性标识，值>，数据类型是Map，必填&gt; <br/>
                 *               &lt;key是taxcontact，value是联系信息Map<属性标识，值>，数据类型是Map，必填&gt; <br/>
                 *               &lt;key是employment，value是任职受雇从业信息Map<属性标识，值>，数据类型是Map，必填&gt; <br/>
                 *               &lt;key是overseasperson，value是境外人员信息Map<属性标识，值>，数据类型是Map，非必填&gt; <br/>
                 *               &lt;key是investor，value是股东投资者信息Map<属性标识，值>，数据类型是Map，非必填&gt; <br/>
                 *               &lt;key是bankcard，value是银行卡信息Map<属性标识，值>，数据类型是Map，非必填&gt; <br/>
                 *               &lt;key是specialinfo，value是其他减免税信息Map<属性标识，值>，数据类型是Map，非必填&gt; <br/>
                 *
                 * @return Map<String, Object> - 接口是否调用成功，整体消息，接口状态信息及返回数据的Map
                 */
                synTaxFileData(params:$.java.util.List):$.java.util.Map;
                /**
                 * 同步个税档案数据包含子模块信息，通过status字段可以控制档案数据的 新增 、 修改 、 审核生效
                 *
                 * @param params - 多个Map组成的列表，其中，每个Map的参数列表如下：<br/>
                 *               &lt;key是sourceid，value是请求单据的id或协作核定单id，数据溯源使用，数据类型是Long，必填&gt; <br/>
                 *               &lt;key是taxfile，value是个税档案基本信息Map<属性标识，值>，数据类型是Map，必填&gt; <br/>
                 *               &lt;key是taxcontact，value是联系信息Map<属性标识，值>，数据类型是Map，必填&gt; <br/>
                 *               &lt;key是employment，value是任职受雇从业信息Map<属性标识，值>，数据类型是Map，必填&gt; <br/>
                 *               &lt;key是overseasperson，value是境外人员信息Map<属性标识，值>，数据类型是Map，非必填&gt; <br/>
                 *               &lt;key是investor，value是股东投资者信息Map<属性标识，值>，数据类型是Map，非必填&gt; <br/>
                 *               &lt;key是bankcard，value是银行卡信息Map<属性标识，值>，数据类型是Map，非必填&gt; <br/>
                 *               &lt;key是specialinfo，value是其他减免税信息Map<属性标识，值>，数据类型是Map，非必填&gt; <br/>
                 * @param actionWay - 0 – 页面新增，1 – 发薪引入，2 – 个税引入，-1 – 其他
                 * @param action - 1 – 仅校验，2 – 仅保存， 3 – 校验并保存
                 *
                 * @return Map<String, Object> - 接口是否调用成功，整体消息，接口状态信息及返回数据的Map
                 */
                synTaxFileData(params:$.java.util.List,actionWay:string,action:string):$.java.util.Map;
                /**
                 * 同步个税档案数据包含子模块信息，通过status字段可以控制档案数据的 新增 、 修改 、 审核生效
                 *
                 * @param params - 多个Map组成的列表，其中，每个Map的参数列表如下：<br/>
                 *        &lt;key是sourceid，value是请求单据的id或协作核定单id，数据溯源使用，数据类型是Long，必填&gt; <br/>
                 *        &lt;key是taxfile，value是个税档案基本信息Map<属性标识，值>，数据类型是Map，必填&gt; <br/>
                 *        &lt;key是taxcontact，value是联系信息Map<属性标识，值>，数据类型是Map，必填&gt; <br/>
                 *        &lt;key是employment，value是任职受雇从业信息Map<属性标识，值>，数据类型是Map，必填&gt; <br/>
                 *        &lt;key是overseasperson，value是境外人员信息Map<属性标识，值>，数据类型是Map，非必填&gt; <br/>
                 *        &lt;key是investor，value是股东投资者信息Map<属性标识，值>，数据类型是Map，非必填&gt; <br/>
                 *        &lt;key是bankcard，value是银行卡信息Map<属性标识，值>，数据类型是Map，非必填&gt; <br/>
                 *        &lt;key是specialinfo，value是其他减免税信息Map<属性标识，值>，数据类型是Map，非必填&gt; <br/>
                 * @param actionWay - 0 – 页面新增，1 – 发薪引入，2 – 个税引入，-1 – 其他
                 * @param action - 1 – 仅校验，2 – 仅保存， 3 – 校验并保存
                 *
                 * @return Map<String, Object> - 接口是否调用成功，整体消息，接口状态信息及返回数据的Map
                 */
                synTaxFileData(params:$.java.util.List,actionWay:string,action:string,skipPermCheck:string):$.java.util.Map;
            }
            interface TaxFileServiceHelper_C extends TaxFileServiceHelper_S {
                new():TaxFileServiceHelper;
            }
            interface TaxFileServiceHelper$ {
            }
            type TaxFileServiceHelper_T = TaxFileServiceHelper_S & TaxFileServiceHelper$;
            interface TaxFileServiceHelper extends TaxFileServiceHelper_T {
            }
        }
        namespace kd.sdk.sit.iit.business.tax.person{
            interface TaxPersonQueryService_S {
                /**
                 * 获取SitbsCommonService实例对象
                 *
                 * @return
                 */
                get():TaxPersonQueryService;
            }
            interface TaxPersonQueryService$ {
                /**
                 * 根据人员ID获取人员信息当前版本值
                 *
                 * @param personIds 人员ID
                 * @param selectProperties 查找属性
                 * @return 人员ID - 人员属性名 - 属性值
                 */
                queryPersonInfos(personIds:$.java.util.Collection,selectProperties:$.java.util.Collection):$.java.util.Map;
                /**
                 * 根据人员信息ID（不同信息块有不同的ID）获取人员信息当前版本值
                 *
                 * @param hisIds 人员信息历史版本ID
                 * @param selectProperties 查找属性
                 * @return 人员信息标识 - 人员属性名 - 属性值
                 */
                queryPersonInfosHis(hisIds:$.java.util.List,selectProperties:$.java.util.Collection):$.java.util.Map;
            }
            type TaxPersonQueryService_T = TaxPersonQueryService_S & TaxPersonQueryService$;
            interface TaxPersonQueryService extends TaxPersonQueryService_T {
            }
        }
        namespace kd.sdk.sit.itc{
            interface SdkItcModule_S {
            }
            type SdkItcModule_ST = $.kd.sdk.module.Module & SdkItcModule_S;
            interface SdkItcModule_C extends SdkItcModule_ST {
                new():SdkItcModule;
            }
            interface SdkItcModule$ {
            }
            type SdkItcModule_T = $.kd.sdk.module.Module & SdkItcModule_S & SdkItcModule$;
            interface SdkItcModule extends SdkItcModule_T {
            }
        }
        namespace kd.sdk.sit.itc.business.tax.data{
            interface TaxDataQueryService_S {
                /**
                 * 获取TaxDataQueryService实例对象
                 *
                 * @return
                 */
                get():TaxDataQueryService;
            }
            interface TaxDataQueryService$ {
                /**
                 * 根据人员个税档案ID获取人员信息当前版本值
                 *
                 * @param taxFileIds 个税档案的boid
                 * @param selectProperties 查找属性
                 * @return 人员ID - 人员属性名 - 属性值
                 */
                queryCurrentPersonInfos(taxFileIds:$.java.util.Collection,selectProperties:$.java.util.Collection):$.java.util.Map;
                /**
                 * 根据个税数据ID获取人员信息当时版本值
                 *
                 * @param taxDataIds 个税数据ID
                 * @param selectProperties 查找属性
                 * @return 个税数据id - 人员属性名 - 属性值
                 */
                queryHisPersonInfos(taxDataIds:$.java.util.Collection,selectProperties:$.java.util.Collection):$.java.util.Map;
                /**
                 * 根据个税数据ID获取个税数据项目值
                 *
                 * @param taxDataIds 个税数据ID
                 * @param taxItems 个项目ID
                 * @return 个税数据ID - 个税项目 - 个税项目值
                 */
                queryTaxDataItems(taxDataIds:$.java.util.Collection,taxItems:$.java.util.Collection):$.java.util.Map;
                /**
                 * 根据个税数据ID获取个税数据项目值
                 *
                 * @param taxDataIds 个税数据ID
                 * @param taxItems 个项目ID
                 * @param queryItemValue true查询itemvalue  false查询calvalue
                 * @return 个税数据ID - 个税项目 - 个税项目值
                 */
                queryTaxDataItems(taxDataIds:$.java.util.Collection,taxItems:$.java.util.Collection,queryItemValue:boolean):$.java.util.Map;
                /**
                 * 根据条件查找个税数据维度信息（分组相关，按照维度分组决定了报表有多少条记录）
                 *
                 * @param selectProperties（查找属性）
                 * @param filters （条件）
                 * @param orderBy （排序）
                 * @return 个税数据动态对象列表
                 */
                queryTaxDataList(selectProperties:$.java.util.Collection,filters:$.java.util.Collection,orderBy:string):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                /**
                 * 根据条件查找个税数据维度信息（分组相关，按照维度分组决定了报表有多少条记录）
                 *
                 * @param selectProperties（查找属性）
                 * @param filters （条件）
                 * @param orderBy （排序）
                 * @param originalQuery （originalQuery查询）
                 * @return 个税数据动态对象列表
                 */
                queryTaxDataList(selectProperties:$.java.util.Collection,filters:$.java.util.Collection,orderBy:string,originalQuery:boolean):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                /**
                 * 根据id查找个税数据信息
                 *
                 * @param selectProperties（查找属性）
                 * @param taxDataIds 个税数据ID
                 * @param orderBy （排序）
                 * @return 个税数据动态对象列表
                 */
                queryTaxDataListById(selectProperties:$.java.util.Collection,taxDataIds:$.java.util.Collection,orderBy:string):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                /**
                 * 根据id查找个税数据信息
                 *
                 * @param selectProperties（查找属性）
                 * @param taxDataIds 个税数据ID
                 * @param orderBy （排序）
                 * @param originalQuery （originalQuery查询）
                 * @return 个税数据动态对象列表
                 */
                queryTaxDataListById(selectProperties:$.java.util.Collection,taxDataIds:$.java.util.Collection,orderBy:string,originalQuery:boolean):$.kd.bos.dataentity.entity.DynamicObjectCollection;
            }
            type TaxDataQueryService_T = TaxDataQueryService_S & TaxDataQueryService$;
            interface TaxDataQueryService extends TaxDataQueryService_T {
            }
        }
        namespace kd.sdk.sit.sitbp{
            interface SdkSitbpModule_S {
            }
            type SdkSitbpModule_ST = $.kd.sdk.module.Module & SdkSitbpModule_S;
            interface SdkSitbpModule_C extends SdkSitbpModule_ST {
                new():SdkSitbpModule;
            }
            interface SdkSitbpModule$ {
            }
            type SdkSitbpModule_T = $.kd.sdk.module.Module & SdkSitbpModule_S & SdkSitbpModule$;
            interface SdkSitbpModule extends SdkSitbpModule_T {
            }
        }
        namespace kd.sdk.sit.sitbp.service.spi{
            interface SitbpCommonService_S {
                /**
                 * 获取SitbsCommonService实例对象
                 *
                 * @return
                 */
                get():SitbpCommonService;
            }
            interface SitbpCommonService$ {
                /**
                 * 根据舍位方式进行数值取舍
                 *
                 * @param valBeforeRound 做舍位之前的值
                 * @param roundTypeEnum 参保标准，舍位方式枚举值
                 * @return BigDecimal 做舍位后的值
                 */
                getBigDecimalValue?(valBeforeRound:$.java.math.BigDecimal,roundTypeEnum:string):$.java.math.BigDecimal;
            }
            type SitbpCommonService_T = SitbpCommonService_S & SitbpCommonService$;
            interface SitbpCommonService extends SitbpCommonService_T {
            }
        }
        namespace kd.sdk.sit.sitbs{
            interface SdkSitbsModule_S {
            }
            type SdkSitbsModule_ST = $.kd.sdk.module.Module & SdkSitbsModule_S;
            interface SdkSitbsModule_C extends SdkSitbsModule_ST {
                new():SdkSitbsModule;
            }
            interface SdkSitbsModule$ {
            }
            type SdkSitbsModule_T = $.kd.sdk.module.Module & SdkSitbsModule_S & SdkSitbsModule$;
            interface SdkSitbsModule extends SdkSitbsModule_T {
            }
        }
        namespace kd.sdk.sit.sitbs.business.extpoint.person{
            interface ISITBSPersonExtService_S {
            }
            interface ISITBSPersonExtService$ {
                /**
                 * 计薪人员修改工号服务
                 *
                 * <pre><code>
                 *
                 * public class SITBSPersonExtDemoService implements ISITBSPersonExtService {
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
                 *         //测试修改扩展案例的工号
                 *         dealModifyPersonNumberForEntityEqual(param, oriNumbers, numberMap, "kdtest_sitbs_extdemotest", "number");
                 *
                 *         //无返回值，若是失败直接抛异常
                 *         if (param.containsKey("testerrorsitbs")) {
                 *             throw new RuntimeException("This deal fail sitbs!!!");
                 *         }
                 *     }
                 *
                 *     private DynamicObject[] dealModifyPersonNumberForEntityEqual(Map<String, Object> param, Set<String> oriNumbers, Map<String, String> numberMap, String entityNumber, String propertyName) {
                 *         HRBaseServiceHelper logHelper = new HRBaseServiceHelper("sitbs_dataupdatelog");
                 *         List<DynamicObject> logDys = new ArrayList<>(SITBaseConstants.INITCAPACITY_ARRAYLIST);
                 *
                 *         QFilter qFilter = new QFilter(propertyName, QFilter.in, oriNumbers);
                 *
                 *         HRBaseServiceHelper empHelper = new HRBaseServiceHelper(entityNumber);
                 *         DynamicObject[] dataDys = empHelper.query(propertyName, new QFilter[]{qFilter});
                 *         for (DynamicObject empDy : dataDys) {
                 *             String oriVal = empDy.getString(propertyName);
                 *             String newVal = numberMap.get(empDy.get(propertyName));
                 *             empDy.set(propertyName, newVal);
                 *
                 *             //记录日志
                 *             DynamicObject logDy = logHelper.generateEmptyDynamicObject();
                 *             logDy.set("batchnum", param.get("batchnum"));
                 *             logDy.set("mainop", "modifyPersonNumber");
                 *             logDy.set("childop", "sitbs");
                 *             logDy.set("entityNumber", entityNumber);
                 *             logDy.set("field", propertyName);
                 *             logDy.set("updatestatus", "S");//成功
                 *             logDy.set("logdatatype", "D");//明细
                 *             logDy.set("dataid", empDy.get("id"));
                 *             logDy.set("orivalue", oriVal);
                 *             logDy.set("newvalue", newVal);
                 *             logDys.add(logDy);
                 *         }
                 *         empHelper.update(dataDys);
                 *
                 *         logHelper.save(logDys.toArray(new DynamicObject[0]));
                 *
                 *         Map<String, Object> resultMap = (Map<String, Object>) param.get("dealInfo");
                 *         resultMap.put(entityNumber + "#" + propertyName, dataDys.length);
                 *
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
            type ISITBSPersonExtService_T = ISITBSPersonExtService_S & ISITBSPersonExtService$;
            interface ISITBSPersonExtService extends ISITBSPersonExtService_T {
            }
        }
        namespace kd.sdk.sit.sitbs.business.tax.basic{
            interface TaxBasicInfoQueryService_S {
                /**
                 * 获取TaxDataQueryService实例对象
                 *
                 * @return
                 */
                get():TaxBasicInfoQueryService;
            }
            interface TaxBasicInfoQueryService$ {
                /**
                 * 根据个税项目ID获取个税项目
                 *
                 * @param itemIds 个税项目ID列表
                 * @return 个税项目动态对象列表
                 */
                queryTaxItems(itemIds:$.java.util.List):$.java.util.Map;
                /**
                 * 个税期间类型ID + 起止时间查找个税期间
                 *
                 * @param periodType 期间类型
                 * @param startDate 开始时间
                 * @param endDate 结束时间
                 * @return 个税期间动态对象列表
                 */
                queryTaxPeriods(periodType:long,startDate:Date,endDate:Date):$.kd.bos.dataentity.entity.DynamicObjectCollection;
            }
            type TaxBasicInfoQueryService_T = TaxBasicInfoQueryService_S & TaxBasicInfoQueryService$;
            interface TaxBasicInfoQueryService extends TaxBasicInfoQueryService_T {
            }
        }
        namespace kd.sdk.sit.sitcs{
            interface SdkSitcsModule_S {
            }
            type SdkSitcsModule_ST = $.kd.sdk.module.Module & SdkSitcsModule_S;
            interface SdkSitcsModule_C extends SdkSitcsModule_ST {
                new():SdkSitcsModule;
            }
            interface SdkSitcsModule$ {
            }
            type SdkSitcsModule_T = $.kd.sdk.module.Module & SdkSitcsModule_S & SdkSitcsModule$;
            interface SdkSitcsModule extends SdkSitcsModule_T {
            }
        }
        namespace kd.sdk.sit.sitcs.business.extpoint.sinsurcal{
            interface ISocialCalDataSave_S {
            }
            interface ISocialCalDataSave$ {
                /**
                 * 标品计算完成入库之后，调用此方法，实现定制化业务逻辑
                 * 扩展接口使用方法：
                 * 入参会传计算完成的社保计算任务ID，和从社保计算接口传过来的拓展参数extendParams，放在AfterSocialCalDataSaveEvent 中；
                 * 用户在afterSocialCalDataSave方法中实现自定义逻辑。
                 * 扩展代码示例：
                 * <pre><code>
                 * public class SocialCalDataSaveExtServiceDemo implements ISocialCalDataSave {
                 *
                 *     private static Log log = LogFactory.getLog(SocialCalDataSaveExtServiceDemo.class);
                 *
                 *     @Override
                 *     public void afterSocialCalDataSave(AfterSocialCalDataSaveEvent event) {
                 *         // 社保计算任务
                 *         Long taskId = event.getCalTaskId();
                 *         // 客户调用计算接口，传过来的参数
                 *         Map<String, Object> extendParams = event.getExtendParams();
                 *         HRBaseServiceHelper helper = new HRBaseServiceHelper("hcsi_sinsurtask");
                 *         String selectFields = "id,number,sinsurperiod.id,sinsurperiod.name,sinsurperiod.number,welfarepayer.id,welfarepayer.name,welfarepayer.number";
                 *         DynamicObject taskDy = helper.queryOne(selectFields, taskId);
                 *         if (taskDy != null) {
                 *             log.info("SocialCalDataSaveExtServiceDemo.afterSocialCalDataSave: taskId is {}, taskNumber is {}, " +
                 *                             "sinsurperiod.name is {}, sinsurperiod.number is {}," +
                 *                             "welfarepayer.name is {}, welfarepayer.number is {}",
                 *                     taskDy.getLong("id"), taskDy.getString("number"),
                 *                     taskDy.getString("sinsurperiod.name"), taskDy.getString("sinsurperiod.number"),
                 *                     taskDy.getString("welfarepayer.name"), taskDy.getString("welfarepayer.number"));
                 *         } else {
                 *             log.info("SocialCalDataSaveExtServiceDemo.afterSocialCalDataSave: task is empty.");
                 *         }
                 *         log.info("SocialCalDataSaveExtServiceDemo.afterSocialCalDataSave: extendParams info is {}.", JSON.toString(extendParams));
                 *     }
                 * }
                 * </code></pre>
                 *
                 * @param event 社保计算拓展接口入参
                 */
                afterSocialCalDataSave?(event:kd.sdk.sit.sitcs.common.events.sinsurcal.AfterSocialCalDataSaveEvent):void;
            }
            type ISocialCalDataSave_T = ISocialCalDataSave_S & ISocialCalDataSave$;
            interface ISocialCalDataSave extends ISocialCalDataSave_T {
            }
            interface IBeforeSocialCalDataSaveExtService_S {
            }
            interface IBeforeSocialCalDataSaveExtService$ {
                /**
                 * 标品社保明细入库之前，调用此方法，实现定制化业务逻辑
                 * 扩展接口使用方法：
                 * 实现接口IBeforeSocialCalDataSaveExtService，从BeforeSocialCalDataSaveEvent入参中拿到社保明细calPersonDys数据，往里面添加拓展的字段和数据
                 * 扩展代码示例：
                 * <pre><code>
                 * public class BeforeSocialCalDataSaveExtServiceDemo implements IBeforeSocialCalDataSaveExtService {
                 *
                 *     private static Log log = LogFactory.getLog(BeforeSocialCalDataSaveExtServiceDemo.class);
                 *
                 *     @Override
                 *     public void beforeSocialCalDataSave(BeforeSocialCalDataSaveEvent event) {
                 *         // 这里拿到入库前的社保明细数据，往里面添加拓展的字段和数据
                 *         List<DynamicObject> calPersonDys = event.getCalPersonDys();
                 *         @SuppressWarnings("unchecked")
                 *         List<Map> calPersonsInfo = calPersonDys.stream().map(HRDynamicObjectUtils::convertDynamicObjectToMap).collect(Collectors.toList());
                 *         log.info("BeforeSocialCalDataSaveExtServiceDemo.beforeSocialCalDataSave: calPersonsInfo are {}.", JSON.toString(calPersonsInfo));
                 *     }
                 * }
                 * </code></pre>
                 * @param event 社保计算入库前，拓展接口入参
                 */
                beforeSocialCalDataSave?(event:kd.sdk.sit.sitcs.common.events.sinsurcal.BeforeSocialCalDataSaveEvent):void;
            }
            type IBeforeSocialCalDataSaveExtService_T = IBeforeSocialCalDataSaveExtService_S & IBeforeSocialCalDataSaveExtService$;
            interface IBeforeSocialCalDataSaveExtService extends IBeforeSocialCalDataSaveExtService_T {
            }
        }
        namespace kd.sdk.sit.sitcs.business.extpoint.sinsurdcl{
            interface IDclPersonDataSaveBeforeExtService_S {
            }
            interface IDclPersonDataSaveBeforeExtService$ {
                /**
                 * 标品社保申报名单入库之前，调用此方法，实现定制化业务逻辑
                 * 扩展接口使用方法：
                 * 实现接口IDclPersonDataSaveBeforeExtService，从DclPersonDataSaveBeforeEvent入参中拿到社保申报名单dclPersonDys数据，往里面添加拓展的字段和数据
                 * 扩展代码示例：
                 * <pre><code>
                 * public class DclPersonDataSaveBeforeExtServiceDemo implements IDclPersonDataSaveBeforeExtService {
                 *
                 *     private final static Log log = LogFactory.getLog(DclPersonDataSaveBeforeExtServiceDemo.class);
                 *
                 *     @Override
                 *     public void dclPersonDataSaveBefore(DclPersonDataSaveBeforeEvent event) {
                 *         // 这里拿到入库前的社保申报名单数据，往里面添加拓展的字段和数据
                 *         List<DynamicObject> dclPersonDys = event.getDclPersonDys();
                 *         @SuppressWarnings("unchecked")
                 *         List<Map> dclPersonsInfo = dclPersonDys.stream().map(HRDynamicObjectUtils::convertDynamicObjectToMap).collect(Collectors.toList());
                 *         log.info("DclPersonDataSaveBeforeExtServiceDemo.dclPersonDataSaveBefore: dclPersonsInfo are {}.", JSON.toString(dclPersonsInfo));
                 *         // 查询险种项目
                 *         HRBaseServiceHelper helper = HRBaseServiceHelper.create("sitbs_basefetchitem");
                 *         DynamicObjectCollection itemDys = helper.queryOriginalCollection("id", new QFilter("1", QFilter.equals, 1).toArray());
                 *         if (itemDys != null && itemDys.size() != 0) {
                 *             int minSize = Math.min(itemDys.size(), dclPersonDys.size());
                 *             for (int i = 0; i < minSize; i++) {
                 *                 DynamicObject itemDy = itemDys.get(i);
                 *                 DynamicObject dclPersonDy = dclPersonDys.get(i);
                 *                 // 设置项目信息
                 *                 dclPersonDy.set("kdtest_item", itemDy.getLong(HRBaseConstants.ID));
                 *             }
                 *         }
                 *     }
                 * }
                 * </code></pre>
                 * @param event 社保申报名单入库前，拓展接口入参
                 */
                dclPersonDataSaveBefore?(event:kd.sdk.sit.sitcs.common.events.sinsurdcl.DclPersonDataSaveBeforeEvent):void;
            }
            type IDclPersonDataSaveBeforeExtService_T = IDclPersonDataSaveBeforeExtService_S & IDclPersonDataSaveBeforeExtService$;
            interface IDclPersonDataSaveBeforeExtService extends IDclPersonDataSaveBeforeExtService_T {
            }
        }
        namespace kd.sdk.sit.sitcs.common.events.sinsurcal{
            interface BeforeSocialCalDataSaveEvent_S {
            }
            type BeforeSocialCalDataSaveEvent_ST = $.java.io.Serializable & BeforeSocialCalDataSaveEvent_S;
            interface BeforeSocialCalDataSaveEvent_C extends BeforeSocialCalDataSaveEvent_ST {
                /**
                 * 无参构造器
                 */
                new():BeforeSocialCalDataSaveEvent;
                /**
                 * 带有社保明细动态对象的构造器
                 *
                 * @param calPersonDys 社保明细数据
                 */
                new(calPersonDys:$.java.util.List):BeforeSocialCalDataSaveEvent;
            }
            interface BeforeSocialCalDataSaveEvent$ {
                /**
                 * @return 获取社保明细数据
                 */
                getCalPersonDys():$.java.util.List;
                /**
                 * 设置社保明细数据
                 *
                 * @param calPersonDys 社保明细数据
                 */
                setCalPersonDys(calPersonDys:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
            }
            type BeforeSocialCalDataSaveEvent_T = $.java.io.Serializable & BeforeSocialCalDataSaveEvent_S & BeforeSocialCalDataSaveEvent$;
            interface BeforeSocialCalDataSaveEvent extends BeforeSocialCalDataSaveEvent_T {
            }
            interface AfterSocialCalDataSaveEvent_S {
            }
            type AfterSocialCalDataSaveEvent_ST = $.java.io.Serializable & AfterSocialCalDataSaveEvent_S;
            interface AfterSocialCalDataSaveEvent_C extends AfterSocialCalDataSaveEvent_ST {
                /**
                 * 无参构造器
                 */
                new():AfterSocialCalDataSaveEvent;
                /**
                 * 带参数构造器
                 *
                 * @param calTaskId    社保计算任务ID
                 * @param extendParams 用户调用社保计算微服务接口，透传过来的参数，用于自定义业务逻辑处理
                 */
                new(calTaskId:long,extendParams:$.java.util.Map):AfterSocialCalDataSaveEvent;
            }
            interface AfterSocialCalDataSaveEvent$ {
                /**
                 * 获取社保计算任务id
                 */
                getCalTaskId():long;
                /**
                 * @return 获取社保计算透传过来的参数，如果用户调用社保计算微服务接口时传null，则这里返回一个empty的map
                 */
                getExtendParams():$.java.util.Map;
                /**
                 * @param calTaskId 设置社保计算任务id
                 */
                setCalTaskId(calTaskId:long):void;
                /**
                 * @param extendParams 设置社保计算透传过来的参数
                 */
                setExtendParams(extendParams:$.java.util.Map):void;
            }
            type AfterSocialCalDataSaveEvent_T = $.java.io.Serializable & AfterSocialCalDataSaveEvent_S & AfterSocialCalDataSaveEvent$;
            interface AfterSocialCalDataSaveEvent extends AfterSocialCalDataSaveEvent_T {
            }
        }
        namespace kd.sdk.sit.sitcs.common.events.sinsurdcl{
            interface DclPersonDataSaveBeforeEvent_S {
            }
            type DclPersonDataSaveBeforeEvent_ST = $.java.io.Serializable & DclPersonDataSaveBeforeEvent_S;
            interface DclPersonDataSaveBeforeEvent_C extends DclPersonDataSaveBeforeEvent_ST {
                /**
                 * 无参构造器
                 */
                new():DclPersonDataSaveBeforeEvent;
                /**
                 * 带有社保申报名单动态对象的构造器
                 *
                 * @param dclPersonDys 社保申报名单数据
                 */
                new(dclPersonDys:$.java.util.List):DclPersonDataSaveBeforeEvent;
            }
            interface DclPersonDataSaveBeforeEvent$ {
                /**
                 * @return 获取社保申报名单数据
                 */
                getDclPersonDys():$.java.util.List;
                /**
                 * 设置社保申报名单数据
                 *
                 * @param dclPersonDys 社保申报名单数据
                 */
                setDclPersonDys(dclPersonDys:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
            }
            type DclPersonDataSaveBeforeEvent_T = $.java.io.Serializable & DclPersonDataSaveBeforeEvent_S & DclPersonDataSaveBeforeEvent$;
            interface DclPersonDataSaveBeforeEvent extends DclPersonDataSaveBeforeEvent_T {
            }
        }
    }
}
export {};