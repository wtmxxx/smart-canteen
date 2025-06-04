/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.sdk.fi{
            interface SdkFiModule_S {
            }
            type SdkFiModule_ST = $.kd.sdk.module.Module & SdkFiModule_S;
            interface SdkFiModule_C extends SdkFiModule_ST {
                new():SdkFiModule;
            }
            interface SdkFiModule$ {
            }
            type SdkFiModule_T = $.kd.sdk.module.Module & SdkFiModule_S & SdkFiModule$;
            interface SdkFiModule extends SdkFiModule_T {
            }
        }
        namespace kd.sdk.fi.ap.extpoint.dap{
            interface IAfterGenerateVoucherExt_S {
            }
            interface IAfterGenerateVoucherExt$ {
                afterGenerateVoucher(voucherOpValue:string,billEntityNumber:string,billPkMap:$.java.util.Map):void;
            }
            type IAfterGenerateVoucherExt_T = IAfterGenerateVoucherExt_S & IAfterGenerateVoucherExt$;
            interface IAfterGenerateVoucherExt extends IAfterGenerateVoucherExt_T {
            }
        }
        namespace kd.sdk.fi.ap.extpoint.importext{
            interface IAfterImportDataExt_S {
            }
            interface IAfterImportDataExt$ {
                afterImportData(e:$.kd.bos.entity.datamodel.events.ImportDataEventArgs,model:$.kd.bos.entity.datamodel.IDataModel):void;
            }
            type IAfterImportDataExt_T = IAfterImportDataExt_S & IAfterImportDataExt$;
            interface IAfterImportDataExt extends IAfterImportDataExt_T {
            }
        }
        namespace kd.sdk.fi.ap.extpoint.invoice{
            interface IInvoiceImport_S {
            }
            interface IInvoiceImport$ {
                /**
                 * 采集发票处理收票单
                 * @param invoiceVOsJson 发票回传的json报文
                 * @param downloadInvs 对应生成的收票单
                 * @return
                 * <p>扩展示例如下
                 * <pre><code>
                 *  @Override
                 * public void afterImportInvoice(String invoesJson, List<DynamicObject> list) {
                 * 	 List<JSONObject> jsonList = JSONObject.parseObject(invoesJson, List.class);
                 * 	 List<InvoiceVO> InvoiceList = new ArrayList<>();
                 * 	 for (JSONObject json : jsonList) {
                 * 	 InvoiceList.add(JSONObject.parseObject(json.toJSONString(), InvoiceVO.class));
                 *     }
                 *     }
                 * </code></pre>
                 */
                afterImportInvoice(invoiceVOsJson:string,downloadInvs:$.java.util.List):void;
            }
            type IInvoiceImport_T = IInvoiceImport_S & IInvoiceImport$;
            interface IInvoiceImport extends IInvoiceImport_T {
            }
        }
        namespace kd.sdk.fi.ap.extpoint.list{
            interface IAfterBizProcess_S {
            }
            interface IAfterBizProcess$ {
                /**
                 * @param view    列表或者表单view
                 * @param bizName 当前业务标识，用于判断走对应哪个sdk
                 *
                 * <p>扩展示例如下
                 * <pre><code>
                 * public void afterBizProcess(IFormView view, String bizName) {
                 * // 只处理应付有源采集场景
                 * if (!AfterBizExtendConst.FINAP_COLLECT_INVOICE.equals(bizName)) return;
                 * // Demo样例，把有源采集的票发票代码赋值给表头的备注字段
                 * IDataModel model = view.getModel();
                 * DynamicObjectCollection inventry = model.getEntryEntity("inventry");
                 * if (!inventry.isEmpty()){
                 * String invoiceCode = inventry.get(0).getString("i_invoicecode");
                 * model.setValue("remark",invoiceCode);
                 * }
                 * }
                 *    </code></pre>
                 */
                afterBizProcess(view:$.kd.bos.form.IFormView,bizName:string):void;
            }
            type IAfterBizProcess_T = IAfterBizProcess_S & IAfterBizProcess$;
            interface IAfterBizProcess extends IAfterBizProcess_T {
            }
            interface IApproverSetting_S {
            }
            interface IApproverSetting$ {
                /**
                 * 列表展示当前处理人自定义字段名称
                 *
                 * @return String: 自定义的列表字段名
                 * <p>扩展示例如下
                 * <pre><code>
                 * public String showApproverCaptionExt() {
                 * return "当前审核人";
                 * }
                 * </code></pre>
                 */
                showApproverCaptionExt():string;
                /**
                 * 列表展示当前处理人自定义显示内容
                 *
                 * @return 自定义的显示内容 Map<String, String> key: 单据id(转成String类型) value: 这张单据列表上字段显示的值
                 * <p>扩展示例如下
                 * <pre><code>
                 * public Map<String, String> showApproverExt() {
                 * // key: 单据id(转成String类型) value: 这张单据列表上字段显示的值
                 * Map<String, String> nodeMap = new HashMap<>(8);
                 * // 若需要查询 请在这里批量查询
                 * for (String billId : billIds) {
                 * // 请在这里构造nodeMap 自定义每一张单据当前处理人的值
                 * if ("1782516835053234176".equals(billId)) {
                 * nodeMap.put(billId, "测试人");
                 * }
                 * }
                 * }
                 * </code></pre>
                 */
                showApproverExt?(billIds:$.java.util.List):$.java.util.Map;
            }
            type IApproverSetting_T = IApproverSetting_S & IApproverSetting$;
            interface IApproverSetting extends IApproverSetting_T {
            }
            interface IPayeeBankInfoFilter_S {
            }
            interface IPayeeBankInfoFilter$ {
                /**
                 * 供应商收款账号过滤条件扩展插件
                 * @param view 单据页面view对象
                 * @return
                 * <p>扩展示例如下
                 * <pre><code>
                 *  @Override
                 * default void setIFilters(ListFilterParameter lfp, IFormView view ) {
                 *         //ListFilterParameter lfp 打开列表界面的过来参数
                 *         //view 编辑界面的view对象
                 *         DynamicObject bill=view.getModel().getDataEntity();
                 *         bill.getLong("id");
                 *         QFilter filter=new QFilter("id", QCP.in,100000L);
                 *         return filter;
                 *
                 *     }
                 * </code></pre>
                 */
                setIFilters?(lfp:$.kd.bos.list.ListFilterParameter,view:$.kd.bos.form.IFormView):void;
            }
            type IPayeeBankInfoFilter_T = IPayeeBankInfoFilter_S & IPayeeBankInfoFilter$;
            interface IPayeeBankInfoFilter extends IPayeeBankInfoFilter_T {
            }
        }
        namespace kd.sdk.fi.ap.extpoint.payapply{
            interface ICasPayBillPayCallback_S {
            }
            interface ICasPayBillPayCallback$ {
                /**
                 * 开票回调后处理
                 * @param params 付款单付款之后调用付款申请单反写接口json
                 * @return
                 *
                 * <p>扩展示例如下
                 *     <pre><code>
                 *    package kd.fi.arapcommon.customer;
                 *
                 *    import kd.bos.dataentity.entity.DynamicObject;
                 *    import kd.bos.db.tx.TX;
                 *    import kd.bos.db.tx.TXHandle;
                 *    import kd.bos.orm.query.QCP;
                 *    import kd.bos.orm.query.QFilter;
                 *    import kd.bos.servicehelper.BusinessDataServiceHelper;
                 *    import kd.fi.arapcommon.consts.EntityConst;
                 *    import kd.sdk.fi.ap.extpoint.payapply.ICasPayBillPayCallback;
                 *
                 *    import java.util.List;
                 *    import java.util.Map;
                 *    import java.util.Set;
                 *    import java.util.stream.Collectors;
                 *
                 *    public class CasPayBillPayCallbaclImpl_Demo implements ICasPayBillPayCallback {
                 *        @Override
                 *        public void afterProcess(Object params) {
                 *            List<Map<String, Object>> paramList = (List<Map<String, Object>>) params;
                 *            Set<Long> sourceIds = paramList.stream().map(param -> (Long) param.get("sourcepk")).collect(Collectors.toSet());//源单id集合
                 *            //可能跨库操作，开启新事务处理
                 *            try (TXHandle tx = TX.requiresNew("CasPayBillPayCallback.afterProcess")) {
                 *                try {
                 *                    //获取付款申请单
                 *                    DynamicObject[] payApplyBills = BusinessDataServiceHelper.load(EntityConst.AP_PAYAPPLY, "id", new QFilter[]{new QFilter("id", QCP.in, sourceIds)});
                 *                    for (DynamicObject payApplyBill : payApplyBills){
                 *                        //二开操作....
                 *                    }
                 *                } catch(Exception ex) {
                 *                    tx.markRollback();
                 *                    throw ex;
                 *                }
                 *            }
                 *        }
                 *    }
                 *    </code></pre>
                 */
                afterProcess(params:any):void;
            }
            type ICasPayBillPayCallback_T = ICasPayBillPayCallback_S & ICasPayBillPayCallback$;
            interface ICasPayBillPayCallback extends ICasPayBillPayCallback_T {
            }
        }
        namespace kd.sdk.fi.ap.extpoint.push{
            interface IPushAssignField_S {
            }
            interface IPushAssignField$ {
                /**
                 * @return key:下推单据目标单业务标识，如ap_finapbill value:需要支持的扩展字段 [{pushfinap=[salesman, salesorg], pushfinar=[purchaser, purorg]}]
                 *
                 * 样例：
                 * <pre><code>
                 * public class PushAssignFieldDemo implements IPushAssignField {
                 *     public Map<String, List<String>> getAfterPushAssignField() {
                 *         Map<String, List<String>> assignMap = new HashMap<>(2);
                 *         // 调用应付转付的API接口
                 *         IPushBillService pushBillService = ArApServiceAPIFactory.getPushBillService(ServiceNameEnum.FINAPTRANSFER.getValue());
                 *         List<String> apExtendField = new ArrayList<>(2);
                 *         apExtendField.add("purchaser"); // 采购员
                 *         apExtendField.add("purorg"); // 采购组织
                 *         // key 就是对应实现的ServiceName标识
                 *         assignMap.put(pushBillService.getServiceName(), apExtendField);
                 *         return assignMap;
                 *     }
                 * }
                 * </code></pre>
                 */
                getAfterPushAssignField():$.java.util.Map;
            }
            type IPushAssignField_T = IPushAssignField_S & IPushAssignField$;
            interface IPushAssignField extends IPushAssignField_T {
            }
        }
        namespace kd.sdk.fi.ap.extpoint.settle{
            interface IPreSettleFilter_S {
            }
            interface IPreSettleFilter$ {
                /**
                 * @return 扩展增加的期初预付单过滤条件
                 * <p>
                 * <pre><code>
                 * @Override
                 * public QFilter getPaidExtFilter(IFormView view) {
                 * QFilter filter = null;
                 * IDataModel model = view.getModel();
                 * DynamicObject department = (DynamicObject) model.getValue("department");
                 * if (!ObjectUtils.isEmpty(department)) {
                 * filter = new QFilter("department_ext", QCP.equals, department.getLong("id"));
                 * }
                 * return filter;
                 * }
                 * </code></pre>
                 * </p>
                 */
                getPaidExtFilter?(view:$.kd.bos.form.IFormView):$.kd.bos.orm.query.QFilter;
                /**
                 * @return 扩展增加的付款单过滤条件
                 * <p>
                 * <pre><code>
                 * @Override
                 * public QFilter getPayExtFilter(IFormView view) {
                 * QFilter filter = null;
                 * IDataModel model = view.getModel();
                 * DynamicObject department = (DynamicObject) model.getValue("department");
                 * if (!ObjectUtils.isEmpty(department)) {
                 * filter = new QFilter("department_ext", QCP.equals, department.getLong("id"));
                 * }
                 * return filter;
                 * }
                 * </code></pre>
                 * </p>
                 */
                getPayExtFilter?(view:$.kd.bos.form.IFormView):$.kd.bos.orm.query.QFilter;
                /**
                 * @return 扩展增加的收款单过滤条件
                 * <p>
                 * <pre><code>
                 * @Override
                 * public QFilter getRecExtFilter(IFormView view) {
                 * QFilter filter = null;
                 * IDataModel model = view.getModel();
                 * DynamicObject department = (DynamicObject) model.getValue("department");
                 * if (!ObjectUtils.isEmpty(department)) {
                 * filter = new QFilter("department_ext", QCP.equals, department.getLong("id"));
                 * }
                 * return filter;
                 * }
                 * </code></pre>
                 * </p>
                 */
                getRecExtFilter?(view:$.kd.bos.form.IFormView):$.kd.bos.orm.query.QFilter;
                /**
                 * @return 扩展增加的期初预收单过滤条件
                 * <p>
                 * <pre><code>
                 * @Override
                 * public QFilter getReceivedExtFilter(IFormView view) {
                 * QFilter filter = null;
                 * IDataModel model = view.getModel();
                 * DynamicObject department = (DynamicObject) model.getValue("department");
                 * if (!ObjectUtils.isEmpty(department)) {
                 * filter = new QFilter("department_ext", QCP.equals, department.getLong("id"));
                 * }
                 * return filter;
                 * }
                 * </code></pre>
                 * </p>
                 */
                getReceivedExtFilter?(view:$.kd.bos.form.IFormView):$.kd.bos.orm.query.QFilter;
            }
            type IPreSettleFilter_T = IPreSettleFilter_S & IPreSettleFilter$;
            interface IPreSettleFilter extends IPreSettleFilter_T {
            }
            interface IAfterSettleProcess_S {
            }
            interface IAfterSettleProcess$ {
                /**
                 * 类描述:应收应付结算后处理扩展
                 * @param recordJson  SettleRecordVO 对象kd.fi.arapcommon.vo.SettleRecordVO的json
                 * @param schemeJson  SettleSchemeVO 对象kd.fi.arapcommon.vo.SettleSchemeVO的json
                 *
                 * <p>扩展示例如下
                 *    <pre><code>
                 *    import com.alibaba.fastjson.JSONObject;
                 *    import kd.bos.db.tx.TX;
                 *    import kd.bos.db.tx.TXHandle;
                 *    import kd.fi.arapcommon.vo.SettleRecordVO;
                 *    import kd.fi.arapcommon.vo.SettleSchemeVO;
                 *    import kd.sdk.fi.ap.extpoint.settle.ArApAfterSettleProcess;
                 *
                 *    import java.util.ArrayList;
                 *    import java.util.List;
                 *
                 *    // 类描述:应收应付结算后处理扩展
                 *    public class AfterSettleDemoDemo implements ArApAfterSettleProcess {
                 *        public void afterProcess(String schemeJson, String recordJson) {
                 *            // Json转换成 SettleRecordVO 对象，里面存储着结算记录所有信息
                 *            List<JSONObject> jsonList = JSONObject.parseObject(recordJson, List.class);
                 *            List<SettleRecordVO> recordList = new ArrayList<>();
                 *            for (JSONObject json : jsonList) {
                 *                recordList.add(JSONObject.parseObject(json.toJSONString(), SettleRecordVO.class));
                 *            }
                 *            // Json转换成 SettleSchemeVO ，里面存储了进行结算反结算需要的逻辑参数
                 *            SettleSchemeVO scheme = JSONObject.parseObject(schemeJson, SettleSchemeVO.class);
                 *            // 可能跨库操作，开启新事务处理
                 *            try (TXHandle tx = TX.requiresNew("invokeAfterSettleCallback.afterProcess")) {
                 *                try {
                 *                    // 处理结算后处理，现场根据场景进行个性化开发
                 *                } catch(Exception ex) {
                 *                    tx.markRollback();
                 *                    throw ex;
                 *                }
                 *            }
                 *        }
                 *    }
                 *    </code></pre>
                 */
                afterProcess(schemeJson:string,recordJson:string):void;
            }
            type IAfterSettleProcess_T = IAfterSettleProcess_S & IAfterSettleProcess$;
            interface IAfterSettleProcess extends IAfterSettleProcess_T {
            }
            interface ISettleMatchExt_S {
            }
            interface ISettleMatchExt$ {
                /**
                 * 结算前匹配条件扩展
                 * @param mainBillSettleVoJson 主方结算信息
                 * @param asstBillSettleVoJson 辅方结算信息
                 * @param schemeJson 结算相关参数信息
                 * @return 匹配通过还是失败
                 * <p>
                 * <pre><code>
                 * package kd.fi.arapcommon.writeback;
                 *
                 * import com.alibaba.fastjson.JSONObject;
                 * import kd.fi.arapcommon.vo.BillSettleVO;
                 * import kd.fi.arapcommon.vo.SettleSchemeVO;
                 * import kd.sdk.fi.ap.extpoint.settle.ISettleMatchExt;
                 *
                 * public class settleExtMatchService implements ISettleMatchExt {
                 * @Override
                 * public boolean match(String mainBillSettleVoJson, String asstBillSettleVoJson, String schemeJson) {
                 * // Json转换成 BillSettleVO 对象，里面存储着主方，辅方结算所需信息
                 * BillSettleVO mainBillSettleVo = SerializationUtils.fromJsonString(mainBillSettleVoJson, BillSettleVO.class);
                 * BillSettleVO asstBillSettleVo = SerializationUtils.fromJsonString(asstBillSettleVoJson, BillSettleVO.class);
                 * // Json转换成 SettleSchemeVO ，里面存储了进行结算反结算需要的逻辑参数
                 * SettleSchemeVO scheme = SerializationUtils.fromJsonString(schemeJson, SettleSchemeVO.class);
                 * // 结算前数据匹配，现场根据场景进行个性化开发
                 * boolean result = false;
                 * return result;
                 * }
                 * }
                 *
                 * </code></pre>
                 * </p>
                 */
                match(mainBillSettleVoJson:string,asstBillSettleVoJson:string,schemeJson:string):boolean;
            }
            type ISettleMatchExt_T = ISettleMatchExt_S & ISettleMatchExt$;
            interface ISettleMatchExt extends ISettleMatchExt_T {
            }
            interface IPaySettleWarnFilter_S {
            }
            interface IPaySettleWarnFilter$ {
                /**
                 *  描述：预付款结算提醒-付款单
                 *  "预付款结算提醒过滤条件扩展
                 *  @param model 页面模型对象
                 *  @return 扩展增加的付款单过滤条件
                 * <p>
                 *     <pre><code>
                 *      @Override
                 *      public QFilter addPaidFilter(IDataModel iDataModel) {
                 *         Object asstacttype = iDataModel.getValue("asstacttype");
                 *         return new QFilter("itempayeetype", QCP.not_equals,asstacttype);
                 *      }
                 *      </code></pre>
                 *      </p>
                 */
                addPaidFilter(model:$.kd.bos.entity.datamodel.IDataModel):$.kd.bos.orm.query.QFilter;
                /**
                 *  描述：预付款结算提醒-付款单
                 *  "预付款结算提醒过滤条件扩展
                 *  @param model 页面模型对象
                 *  @return 扩展增加的付款单过滤条件
                 * <p>
                 *     <pre><code>
                 *      @Override
                 *      public QFilter addPayFilter(IDataModel iDataModel) {
                 *         Object asstacttype = iDataModel.getValue("asstacttype");
                 *         return new QFilter("itempayeetype", QCP.not_equals,asstacttype);
                 *      }
                 *     </code></pre>
                 *     </p>
                 */
                addPayFilter(model:$.kd.bos.entity.datamodel.IDataModel):$.kd.bos.orm.query.QFilter;
            }
            type IPaySettleWarnFilter_T = IPaySettleWarnFilter_S & IPaySettleWarnFilter$;
            interface IPaySettleWarnFilter extends IPaySettleWarnFilter_T {
            }
            interface IManualSettleCheck_S {
            }
            interface IManualSettleCheck$ {
                /**
                 *  手工结算点击结算按钮前的校验扩展
                 *  @param view  页面模型对象
                 *  @return   校验通过还是失败
                 * <p>
                 *      <pre><code>
                 *     package kd.fi.arapcommon.customer.ext;
                 *
                 *     import kd.bos.dataentity.entity.DynamicObject;
                 *     import kd.bos.dataentity.resource.ResManager;
                 *     import kd.bos.form.IFormView;
                 *     import kd.bos.form.control.EntryGrid;
                 *     import kd.sdk.fi.ap.extpoint.settle.IManualSettleCheck;
                 *
                 *     import java.util.HashSet;
                 *     import java.util.Set;
                 *
                 *     public class ManualSettleCheck_Demo implements IManualSettleCheck {
                 *         public boolean check(IFormView view) {
                 *             EntryGrid mainGrid = view.getControl("mainbill");//主方表格
                 *             int[] mainSelectRows = mainGrid.getSelectRows();//主方选中行
                 *             EntryGrid asstGrid = view.getControl("asstbill");//辅方表格
                 *             int[] asstSelectRows = asstGrid.getSelectRows();//辅方选中行
                 *
                 *             Set<String> mainContactSet = new HashSet<>(1);
                 *             for (int mainSelectRow : mainSelectRows) {
                 *                 DynamicObject mainRow = view.getModel().getEntryRowEntity("mainbill", mainSelectRow);
                 *                 mainContactSet.add(mainRow.getString("maincontact"));
                 *             }
                 *             if (mainContactSet.size() > 1){
                 *                 //ResManager.loadKDString()多语言支持
                 *                 view.showTipNotification(ResManager.loadKDString("主方的合同号必须相同", "ManualSettleCheck_Demo_1", "fi-arapcommon"));
                 *                 return false;
                 *             }
                 *
                 *             Set<String> asstContactSet = new HashSet<>(1);
                 *             for (int asstSelectRow : asstSelectRows) {
                 *                 DynamicObject asstRow = view.getModel().getEntryRowEntity("asstbill", asstSelectRow);
                 *                 asstContactSet.add(asstRow.getString("asstcontact"));
                 *             }
                 *             if (asstContactSet.size() > 1){
                 *                 //ResManager.loadKDString()多语言支持
                 *                 view.showTipNotification(ResManager.loadKDString("辅方的合同号必须相同", "ManualSettleCheck_Demo_2", "fi-arapcommon"));
                 *                 return false;
                 *             }
                 *
                 *             if(mainContactSet.size() == 1 && asstContactSet.size() == 1 &&
                 *                     mainContactSet.iterator().next().equals(asstContactSet.iterator().next())){
                 *                 return true;
                 *             }else{
                 *                 //ResManager.loadKDString()多语言支持
                 *                 view.showTipNotification(ResManager.loadKDString("主方和辅方的合同号必须一致才能结算", "ManualSettleCheck_Demo_3", "fi-arapcommon"));
                 *                 return false;
                 *             }
                 *
                 *         }
                 *     }
                 *      </code></pre>
                 *      </p>
                 */
                check(view:$.kd.bos.form.IFormView):boolean;
            }
            type IManualSettleCheck_T = IManualSettleCheck_S & IManualSettleCheck$;
            interface IManualSettleCheck extends IManualSettleCheck_T {
            }
        }
        namespace kd.sdk.fi.ap.extpoint.woff{
            interface IAfterWoffProcess_S {
            }
            interface IAfterWoffProcess$ {
                /**
                 * @param isWoff true代表冲回，false代表取消冲回
                 * @param woffMode 冲回模式，WoffModeEnum.value
                 * @param finBillIds 触发单到冲回的财务单ID
                 * @param srcBusBillIds 最初被冲回的源暂估单ID
                 * @param woffBillIds 生成的冲回单ID
                 *
                 * <p>扩展示例如下
                 *    <pre><code>
                 *    public class AfterWoffProcessDemo implements IAfterWoffProcess {
                 *    @Override
                 *    public void afterProcess(boolean isWoff, String woffMode, Set<Long> finBillIds, Set<Long> srcBusBillIds, List<Object> woffBillIds) {
                 *        // 非核心单据冲回直接返回不处理
                 *        if(!WoffModeEnum.COREBILL.getValue().equals(woffMode))  return;
                 *        // 不跨库，需要使用TX.required和原有事务保持一致；若需要跨库操作，需要开启新事务处理TX.requiresNew；
                 *        try (TXHandle tx = TX.required("invokeAfterWoffProcess.afterWoffProcess")) {
                 *            try {
                 *                // 处理冲回后处理，现场根据场景进行个性化开发
                 *                if(isWoff) {
                 *                    // 冲回扩展逻辑
                 *                } else {
                 *                    // 取消冲回扩展逻辑
                 *                }
                 *            } catch (Exception ex) {
                 *                tx.markRollback();
                 *                throw ex;
                 *            }
                 *       }
                 *    }
                 *    }
                 *    </code></pre>
                 */
                afterProcess(isWoff:boolean,woffMode:string,finBillIds:$.java.util.Set,srcBusBillIds:$.java.util.Set,woffBillIds:$.java.util.List):void;
            }
            type IAfterWoffProcess_T = IAfterWoffProcess_S & IAfterWoffProcess$;
            interface IAfterWoffProcess extends IAfterWoffProcess_T {
            }
            interface IWoffMatchExt_S {
            }
            interface IWoffMatchExt$ {
                /**
                 * 对冲回匹配条件追加个性化匹配条件，支持表头和物料明细属性，物料明细属性请携带分录标识
                 * @param woffMode 冲回模式，WoffModeEnum.value
                 * @param finEntityKey 财务单单据标识，可用于应收应付区分及标识处理
                 * @return <财务单字段标识, 暂估单字段标识>
                 *
                 * <p>扩展示例如下
                 *    <pre><code>
                 *    public class WoffMatchExtDemo implements IWoffMatchExt {
                 *    @Override
                 *    public Map<String, String> moreMatchField(String woffMode, String finEntityKey) {
                 *        Map<String, String> matchField = new HashMap<>(2);
                 *        // 核心单据冲回追加匹配条件
                 *        if(WoffModeEnum.COREBILL.getValue().equals(woffMode)) {
                 *            if("ap_finapbill".equals(finEntityKey)) {
                 *                // 若财务应收应付单字段标识不同请区分处理，物料明细属性请携带分录标识
                 *                matchField.put("paycond", "paycond");// 付款条件
                 *                matchField.put("detailentry.tracknumber", "entry.tracknumber");// 跟踪号
                 *            }
                 *        }
                 *        return matchField;
                 *    }
                 *    }
                 *    </code></pre>
                 */
                moreMatchField(woffMode:string,finEntityKey:string):$.java.util.Map;
            }
            type IWoffMatchExt_T = IWoffMatchExt_S & IWoffMatchExt$;
            interface IWoffMatchExt extends IWoffMatchExt_T {
            }
        }
        namespace kd.sdk.fi.ar.extpoint.invoice{
            interface IInvIssueCallback_S {
            }
            interface IInvIssueCallback$ {
                /**
                 *  开票回调后处理
                 *  @param callBackVoJson 对象kd.imc.bdm.common.dto.FiBotpCallBackVo.class的json
                 *  @return
                 *
                 *  <p>扩展示例如下
                 * 	 <pre><code>
                 * 	 import java.util.*
                 * 	 import java.util.stream.Collectors;
                 * 	 import com.alibaba.fastjson.JSONObject;
                 *
                 * 	 import kd.bos.db.tx.TX;
                 * 	 import kd.bos.db.tx.TXHandle;
                 * 	 import kd.bos.servicehelper.botp.BFTrackerServiceHelper;
                 * 	 import kd.fi.arapcommon.consts.EntityConst;
                 * 	 import kd.fi.arapcommon.util.EmptyUtils;
                 * 	 import kd.imc.bdm.common.dto.FiBotpCallBackArBillVo;
                 * 	 import kd.imc.bdm.common.dto.FiBotpCallBackVo;
                 * 	 import kd.sdk.fi.ar.extpoint.invoice.IInvIssueCallback;
                 *
                 * 	 public class InvIssueCallbackImpl_Demo implements IInvIssueCallback {
                 *
                 * 		public void afterProcess(String callBackVoJson) {
                 * 			FiBotpCallBackVo callBackVo = JSONObject.parseObject(callBackVoJson, FiBotpCallBackVo.class);
                 * 			String invoiceCode = callBackVo.getInvoiceCode(); //发票代码
                 * 			String invoiceNo = callBackVo.getInvoiceNo(); //发票号码
                 * 			List<FiBotpCallBackArBillVo> arBillVos = callBackVo.getArs(); //应收单据集合
                 * 			List<Long> finPks = arBillVos.stream().map(FiBotpCallBackArBillVo::getArBillPk).collect(Collectors.toList());
                 * 			//可能跨库操作，开启新事务处理
                 * 			try (TXHandle tx = TX.requiresNew("InvIssueCallback.afterProcess")) {
                 * 			    try {
                 * 			    	//找上游单据
                 * 			    	Map<String, HashSet<Long>> linkBills = BFTrackerServiceHelper.findSourceBills(EntityConst.ENTITY_FINARBILL, finPks.toArray(new Long[]{}));
                 * 			    	//上游单据
                 * 			    	Set<Long> srcPks = linkBills.get("sm_xxxbill");
                 * 			    	if (EmptyUtils.isNotEmpty(srcPks)) {
                 * 			    		// 查询上游单据，并更新上游单据
                 * 			    		// ...
                 * 			    	}
                 * 			    } catch(Exception ex) {
                 * 			        tx.markRollback();
                 * 			        throw ex;
                 * 			    }
                 * 			}
                 * 		}
                 * 	}
                 * 	</code></pre>
                 */
                afterProcess(callBackVoJson:string):void;
            }
            type IInvIssueCallback_T = IInvIssueCallback_S & IInvIssueCallback$;
            interface IInvIssueCallback extends IInvIssueCallback_T {
            }
        }
        namespace kd.sdk.fi.ar.extpoint.plan{
            interface IPlanRowSplit_S {
            }
            interface IPlanRowSplit$ {
                /**
                 *  计划行拆分扩展点，支持可覆盖
                 *  @param view 表单视图模型
                 *
                 *  <p>扩展示例如下
                 *  <pre><code>
                 * 	 public class PlanRowSplitImpl_Demo implements IPlanRowSplit {
                 *
                 * 		public void splitPlanEntry(IFormView view) {
                 * 			IDataModel m = view.getModel();
                 * 	        m.beginInit();
                 * 	        DynamicObject dataEntity = m.getDataEntity(true);//获取页面模型的整个值对象
                 * 	        String entityName = dataEntity.getDataEntityType().getName();//单据标识
                 * 	        BillModel bm = BillModelFactory.getModel(entityName);//单据字段标识对象
                 *
                 * 	        //1、删除计划行的所有数据
                 * 	        m.deleteEntryData(bm.P_ENTRY);
                 *
                 * 	        //2、根据业务处理计划行
                 * 	        for (int i = 0; i < 2; i++) {
                 * 	        	//创建计划行
                 * 	        	int iRow = m.createNewEntryRow(bm.P_ENTRY, i, null);
                 * 	        	//计划行赋值
                 * 	        	m.setValue(bm.P_PLANDUEDATE, m.getValue(bm.HEAD_DUEDATE), iRow);
                 * 	        	m.setValue(bm.P_PLANSETTLETYPE, m.getValue(bm.HEAD_SETTLEMENTTYPE), iRow);
                 * 	        	BigDecimal priceTaxTotal = new BigDecimal("100");
                 * 	        	m.setValue(bm.P_PLANPRICETAX, priceTaxTotal, iRow);
                 * 	        	// ...
                 * 			}
                 * 			m.endInit();
                 * 			view.updateView(bm.P_ENTRY);
                 * 		}
                 * 	}
                 *     </code></pre>
                 */
                splitPlanEntry(view:$.kd.bos.form.IFormView):void;
            }
            type IPlanRowSplit_T = IPlanRowSplit_S & IPlanRowSplit$;
            interface IPlanRowSplit extends IPlanRowSplit_T {
            }
        }
        namespace kd.sdk.fi.arapcommon.helper{
            interface SettleServiceSDKHelper_S {
                /**
                 * 应付冲应收指定金额结算
                 * @param assignSettleParam  指定结算参数
                 * @return 结算返回结果
                 */
                apArAssignSettle(assignSettleParam:kd.sdk.fi.arapcommon.param.AssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 应付冲应收非指定金额结算
                 * @param noAssignSettleParam  非指定结算参数
                 * @return 结算返回结果
                 */
                apArNoAssignSettle(noAssignSettleParam:kd.sdk.fi.arapcommon.param.NoAssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 应付付款指定金额结算
                 * @param assignSettleParam  指定结算参数
                 * @return 结算返回结果
                 */
                apPayAssignSettle(assignSettleParam:kd.sdk.fi.arapcommon.param.AssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 应付付款非指定金额结算
                 * @param noAssignSettleParam  非指定结算参数
                 * @return 结算返回结果
                 */
                apPayNoAssignSettle(noAssignSettleParam:kd.sdk.fi.arapcommon.param.NoAssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 应付红蓝对冲指定金额结算
                 * @param assignSettleParam  指定结算参数
                 * @return 结算返回结果
                 */
                apSelfAssignSettle(assignSettleParam:kd.sdk.fi.arapcommon.param.AssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 应付红蓝对冲非指定金额结算
                 * @param noAssignSettleParam  非指定结算参数
                 * @return 结算返回结果
                 */
                apSelfNoAssignSettle(noAssignSettleParam:kd.sdk.fi.arapcommon.param.NoAssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 应收冲应付指定金额结算
                 * @param assignSettleParam  指定结算参数
                 * @return 结算返回结果
                 */
                arApAssignSettle(assignSettleParam:kd.sdk.fi.arapcommon.param.AssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 应收冲应付非指定金额结算
                 * @param noAssignSettleParam  非指定结算参数
                 * @return 结算返回结果
                 */
                arApNoAssignSettle(noAssignSettleParam:kd.sdk.fi.arapcommon.param.NoAssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 应收收款指定金额结算
                 * @param assignSettleParam  指定结算参数
                 * @return 结算返回结果
                 */
                arRecAssignSettle(assignSettleParam:kd.sdk.fi.arapcommon.param.AssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 应收收款非指定金额结算
                 * @param noAssignSettleParam  非指定结算参数
                 * @return 结算返回结果
                 */
                arRecNoAssignSettle(noAssignSettleParam:kd.sdk.fi.arapcommon.param.NoAssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 应收红蓝对冲指定金额结算
                 * @param assignSettleParam  指定结算参数
                 * @return 结算返回结果
                 */
                arSelfAssignSettle(assignSettleParam:kd.sdk.fi.arapcommon.param.AssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 应收红蓝对冲非指定金额结算
                 * @param noAssignSettleParam  非指定结算参数
                 * @return 结算返回结果
                 */
                arSelfNoAssignSettle(noAssignSettleParam:kd.sdk.fi.arapcommon.param.NoAssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 付款冲收款指定金额结算
                 * @param assignSettleParam  指定结算参数
                 * @return 结算返回结果
                 */
                payRecAssignSettle(assignSettleParam:kd.sdk.fi.arapcommon.param.AssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 付款冲收款非指定金额结算
                 * @param noAssignSettleParam  非指定结算参数
                 * @return 结算返回结果
                 */
                payRecNoAssignSettle(noAssignSettleParam:kd.sdk.fi.arapcommon.param.NoAssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 付款红蓝对冲指定金额结算
                 * @param assignSettleParam  指定结算参数
                 * @return 结算返回结果
                 */
                paySelfAssignSettle(assignSettleParam:kd.sdk.fi.arapcommon.param.AssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 付款红蓝对冲非指定金额结算
                 * @param noAssignSettleParam  非指定结算参数
                 * @return 结算返回结果
                 */
                paySelfNoAssignSettle(noAssignSettleParam:kd.sdk.fi.arapcommon.param.NoAssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 收款冲付款指定金额结算
                 * @param assignSettleParam  指定结算参数
                 * @return 结算返回结果
                 */
                recPayAssignSettle(assignSettleParam:kd.sdk.fi.arapcommon.param.AssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 收款冲付款非指定金额结算
                 * @param noAssignSettleParam  非指定结算参数
                 * @return 结算返回结果
                 */
                recPayNoAssignSettle(noAssignSettleParam:kd.sdk.fi.arapcommon.param.NoAssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 收款红蓝对冲指定金额结算
                 * @param assignSettleParam  指定结算参数
                 * @return 结算返回结果
                 */
                recSelfAssignSettle(assignSettleParam:kd.sdk.fi.arapcommon.param.AssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
                /**
                 * 收款红蓝对冲非指定金额结算
                 * @param noAssignSettleParam  非指定结算参数
                 * @return 结算返回结果
                 */
                recSelfNoAssignSettle(noAssignSettleParam:kd.sdk.fi.arapcommon.param.NoAssignSettleParam):kd.sdk.fi.arapcommon.param.SettleResult;
            }
            interface SettleServiceSDKHelper_C extends SettleServiceSDKHelper_S {
                new():SettleServiceSDKHelper;
            }
            interface SettleServiceSDKHelper$ {
            }
            type SettleServiceSDKHelper_T = SettleServiceSDKHelper_S & SettleServiceSDKHelper$;
            interface SettleServiceSDKHelper extends SettleServiceSDKHelper_T {
            }
        }
        namespace kd.sdk.fi.arapcommon.param{
            interface NoAssignSettleParam_S {
            }
            type NoAssignSettleParam_ST = BaseSettleParam_S & $.java.io.Serializable & NoAssignSettleParam_S;
            interface NoAssignSettleParam_C extends NoAssignSettleParam_ST {
                new():NoAssignSettleParam;
                /**
                 * 构造方法
                 * @param orgId  组织id
                 * @param settleType   结算方式
                 */
                new(orgId:long,settleType:string):NoAssignSettleParam;
            }
            interface NoAssignSettleParam$ {
                getAsstBillIds():$.java.util.Set;
                getMainBillIds():$.java.util.Set;
                isMainOp():boolean;
                isOnlyByBotp():boolean;
                setAsstBillIds(asstBillIds:$.java.util.Set):void;
                setMainBillIds(mainBillIds:$.java.util.Set):void;
                setMainOp(mainOp:boolean):void;
                setOnlyByBotp(onlyByBotp:boolean):void;
            }
            type NoAssignSettleParam_T = BaseSettleParam & $.java.io.Serializable & NoAssignSettleParam_S & NoAssignSettleParam$;
            interface NoAssignSettleParam extends NoAssignSettleParam_T {
            }
            interface AssignSettleParam_S {
            }
            type AssignSettleParam_ST = BaseSettleParam_S & AssignSettleParam_S;
            interface AssignSettleParam_C extends AssignSettleParam_ST {
                new():AssignSettleParam;
                /**
                 * 构造方法
                 * @param orgId  组织id
                 * @param settleType  结算方式
                 * @param settleDetailType  明细结算方式（按单据头或者按分录）
                 */
                new(orgId:long,settleType:string,settleDetailType:string):AssignSettleParam;
            }
            interface AssignSettleParam$ {
                getAsstDetailParamList():$.java.util.List;
                getMainDetailParamList():$.java.util.List;
                getSettleDetailType():string;
                setAsstDetailParamList(asstDetailParamList:$.java.util.List):void;
                setMainDetailParamList(mainDetailParamList:$.java.util.List):this;
                setSettleDetailType(settleDetailType:string):void;
            }
            type AssignSettleParam_T = BaseSettleParam & AssignSettleParam_S & AssignSettleParam$;
            interface AssignSettleParam extends AssignSettleParam_T {
            }
            interface BaseSettleParam_S {
            }
            type BaseSettleParam_ST = $.java.io.Serializable & BaseSettleParam_S;
            interface BaseSettleParam_C extends BaseSettleParam_ST {
                new():BaseSettleParam;
            }
            interface BaseSettleParam$ {
                getAsstEntity():string;
                getMainEntity():string;
                getMatchServiceClass():string;
                getOrgId():long;
                getSettleDate():Date;
                getSettleType():string;
                isClaim():boolean;
                isContainPre():boolean;
                isDiffCurrencySettle():boolean;
                isLockWait():boolean;
                isMatchDiffCurrency():boolean;
                isNotNeedLock():boolean;
                isOnlyByConBill():boolean;
                isOnlyByCoreBill():boolean;
                isRefundAndRenote():boolean;
                isRefundByBotp():boolean;
                setAsstEntity(asstEntity:string):void;
                setClaim(claim:boolean):void;
                setContainPre(containPre:boolean):void;
                setDiffCurrencySettle(diffCurrencySettle:boolean):void;
                setLockWait(lockWait:boolean):void;
                setMainEntity(mainEntity:string):void;
                setMatchDiffCurrency(matchDiffCurrency:boolean):void;
                setMatchServiceClass(matchServiceClass:string):void;
                setNotNeedLock(notNeedLock:boolean):void;
                setOnlyByConBill(onlyByConBill:boolean):void;
                setOnlyByCoreBill(onlyByCoreBill:boolean):void;
                setOrgId(orgId:long):void;
                setRefundAndRenote(refundAndRenote:boolean):void;
                setRefundByBotp(refundByBotp:boolean):void;
                setSettleDate(settleDate:Date):void;
                setSettleType(settleType:string):void;
            }
            type BaseSettleParam_T = $.java.io.Serializable & BaseSettleParam_S & BaseSettleParam$;
            interface BaseSettleParam extends BaseSettleParam_T {
            }
            interface SettleResult_S {
            }
            type SettleResult_ST = $.java.io.Serializable & SettleResult_S;
            interface SettleResult_C extends SettleResult_ST {
                new():SettleResult;
            }
            interface SettleResult$ {
                getData():any;
                getSettleRecordPKs():$.java.util.List;
                setData(data:any):void;
                setSettleRecordPKs(settleRecordPKs:$.java.util.List):void;
            }
            type SettleResult_T = $.java.io.Serializable & SettleResult_S & SettleResult$;
            interface SettleResult extends SettleResult_T {
            }
        }
        namespace kd.sdk.fi.bd.service.balance{
            interface QueryParam_S {
            }
            type QueryParam_ST = $.java.io.Serializable & QueryParam_S;
            interface QueryParam_C extends QueryParam_ST {
                new():QueryParam;
            }
            interface QueryParam$ {
                getAccountFilter():$.kd.bos.orm.query.QFilter;
                getAccountVersionPeriodId():long;
                getAssGrpIds():$.java.util.Set;
                getCurrencyIds():long[];
                getCustomFilter():$.java.util.List;
                getMeasureUnitIds():long[];
                isAddAmountFilter():boolean;
                isOnlyLeafAcctBal():boolean;
                isSpecialAccount():boolean;
                isSubstractPL():boolean;
                isSumAssgrp():boolean;
                isZeroAmtNoDisplay():boolean;
                isZeroBalNoDisplay():boolean;
                setAccountFilter(accountFilter:$.kd.bos.orm.query.QFilter):void;
                setAccountVersionPeriodId(accountVersionPeriodId:long):void;
                setAddAmountFilter(isAddAmountFilter:boolean):void;
                setAssGrpIds(assGrpIds:$.java.util.Set):void;
                setCurrencyIds(currencyIds:long[]):void;
                setCustomFilter(customFilter:$.java.util.List):void;
                setMeasureUnitIds(measureUnitIds:long[]):void;
                setOnlyLeafAcctBal(isOnlyLeafAcctBal:boolean):void;
                setSpecialAccount(isSpecialAccount:boolean):void;
                setSubstractPL(isSubstractPL:boolean):void;
                setSumAssgrp(sumAssgrp:boolean):void;
                setZeroAmtNoDisplay(zeroAmtNoDisplay:boolean):void;
                setZeroBalNoDisplay(zeroBalNoDisplay:boolean):void;
            }
            type QueryParam_T = $.java.io.Serializable & QueryParam_S & QueryParam$;
            interface QueryParam extends QueryParam_T {
            }
            interface BalanceExecutorSdk_S {
                /**
                 * 根据参数查询科目余额表,返回不限制数据量的DataSet
                 *
                 * @param selector 需要查询的字段 例："org,booktype,account,assgrp,endlocal"  如果查询字段包含period则只查询条件范围内有发生额的科目余额数据
                 *
                 * @param orgIds 核算组织id
                 * @param bookTypeId 账簿类型id
                 * @param accountTableId 科目表id
                 * @param beginPeriodId 查询的开始期间
                 * @param endPeriodId 查询的结束期间 查询一个期间的数据则与开始期间一致即可
                 * @param param 其他查询参数
                 *
                 * @return 科目余额Dataset数据
                 *
                 * <pre> <code>
                 * 调用示例:
                 *
                 * 构造相关参数
                 *  String selector="org,booktype,account,assgrp,endlocal";
                 *  Long[] orgIds=new Long[]{0001};
                 *  long bookTypeId =1L;
                 *  long accountTableId = 1L;
                 *  long beginPeriodId = 120220080L;
                 *  long endPeriodId =120220080L;
                 *  QueryParam param =new QueryParam();
                 *  调用接口查询 并对返回的DataSet进行处理
                 *  try(DataSet ds= kd.sdk.fi.bd.service.balance.BalanceExecutorSdk.getBalance(selector,orgIds,bookTypeId,accountTableId,beginPeriodId,endPeriodId,param)){
                 *     for(Row row:ds){
                 *         BigDecimal endlocal=row.getBigDecimal("endlocal");
                 *         ...
                 *     }
                 *  };
                 *
                 * </code></pre>
                 */
                getBalance(selector:string,orgIds:long[],bookTypeId:long,accountTableId:long,beginPeriodId:long,endPeriodId:long,param:QueryParam):$.kd.bos.algo.DataSet;
            }
            interface BalanceExecutorSdk_C extends BalanceExecutorSdk_S {
                new():BalanceExecutorSdk;
            }
            interface BalanceExecutorSdk$ {
            }
            type BalanceExecutorSdk_T = BalanceExecutorSdk_S & BalanceExecutorSdk$;
            interface BalanceExecutorSdk extends BalanceExecutorSdk_T {
            }
        }
        namespace kd.sdk.fi.bd.service.cdc{
            interface CDCServiceGLIntegratorSDK_S {
                /**
                 * 触发凭证摘要集成
                 * <p>
                 * 凭证更新事务提交后，请求同步ES，内部异步实现，无需关注结果
                 *
                 * @param operationType 变动类型
                 * @param voucherIdColl 凭证ID集合
                 * @return 触发成功？
                 */
                raiseCDCEvent(operationType:CDCRecOperationTypeEnum,voucherIdColl:$.java.util.Collection):boolean;
            }
            interface CDCServiceGLIntegratorSDK_C extends CDCServiceGLIntegratorSDK_S {
                new():CDCServiceGLIntegratorSDK;
            }
            interface CDCServiceGLIntegratorSDK$ {
                /**
                 * 注册凭证摘要变动记录
                 * <p>
                 * 凭证更新事务中,凭证保存执行完毕，调用同步注册凭证变动记录
                 *
                 * @param operationType 变动类型
                 * @param voucherIdColl 凭证ID集合
                 * @return 注册成功？
                 */
                registerCDCChangedRecord(operationType:CDCRecOperationTypeEnum,voucherIdColl:$.java.util.Collection):boolean;
            }
            type CDCServiceGLIntegratorSDK_T = CDCServiceGLIntegratorSDK_S & CDCServiceGLIntegratorSDK$;
            interface CDCServiceGLIntegratorSDK extends CDCServiceGLIntegratorSDK_T {
            }
            enum CDCRecOperationTypeEnum {
                New,
                Update,
                Delete
            }
        }
        namespace kd.sdk.fi.cal.extpoint.bal{
            interface CalBalDataSDK_S {
                getBalDataForCache(qFilter:$.kd.bos.orm.query.QFilter):string;
            }
            interface CalBalDataSDK_C extends CalBalDataSDK_S {
                new():CalBalDataSDK;
            }
            interface CalBalDataSDK$ {
            }
            type CalBalDataSDK_T = CalBalDataSDK_S & CalBalDataSDK$;
            interface CalBalDataSDK extends CalBalDataSDK_T {
            }
        }
        namespace kd.sdk.fi.cal.extpoint.calintime{
            interface ICalMoveGroupCost_S {
            }
            interface ICalMoveGroupCost$ {
                /**
                 *  @function 缓冲池计算实时移动成组成本加价处理
                 *  @param acctRecIdEleCostMap
                 *  分项：key：成本账簿ID+ "|" + 成本记录分录id + "|" + 成本子要素ID
                 *  不分项：key：成本账簿ID+ "|" + 成本记录分录id + "|" + “materialcost”（材料成本）
                 *   或 “processcost”（加工费） 或  “fee”（费用） 或 “manufacturecost”（制造费用） 或  “RESOURCE”（资源费用）
                 *  value：对应金额
                 *  @param entity 库存业务对象编码
                 *  @param bizBillIds 业务单据id
                 *  @return   void
                 * <pre><code>
                 *  package kd.sdk.fi.cal.extpoint.calintime;
                 *
                 *  import kd.bos.algo.DataSet;
                 *  import kd.bos.algo.Row;
                 *  import kd.bos.orm.query.QCP;
                 *  import kd.bos.orm.query.QFilter;
                 *  import kd.bos.servicehelper.QueryServiceHelper;
                 *
                 *  import java.math.BigDecimal;
                 *  import java.util.HashSet;
                 *  import java.util.Map;
                 *  import java.util.Set;
                 *
                 *  public class CalMoveGroupCostTest implements ICalMoveGroupCost{
                 *      @Override
                 *      public void doCalGroupCostEx(Map<String, BigDecimal> acctRecIdEleCostMap, String entity, Set<Long> bizBillIds) {
                 *          String splitStr = "|";
                 *          DataSet costRecordDs = getCostRecordDs(acctRecIdEleCostMap, bizBillIds);
                 *          for (Row row : costRecordDs) {
                 *              Long costAcctId = row.getLong("costaccount");
                 *              Long costRecEid = row.getLong("entryid");
                 *              Long costSubelEment = row.getLong("costsubelement");
                 *              //key：成本账簿ID+ "|" + 成本记录分录id + "|" + 成本子要素ID，value：对应金额
                 *              String key;
                 *              //成本账簿-核算政策-启用分项结转
                 *              if(row.getBoolean("calbycostelement")){
                 *                  key = costAcctId + splitStr + costRecEid + splitStr + costSubelEment;
                 *              }else {
                 *                  //不分项材料成本单价增加一块钱 材料成本（materialcost）加工费（processcost）费用（fee）制造费用（manufacturecost）资源费用（resource）
                 *                  key = costAcctId + splitStr + costRecEid + splitStr + "materialcost";
                 *              }
                 *              //源单成本
                 *              BigDecimal srcCost = acctRecIdEleCostMap.get(key);
                 *              if(srcCost == null){
                 *                  continue;
                 *              }
                 *              BigDecimal baseqty = row.getBigDecimal("baseqty");
                 *              //单价增加一块钱
                 *              BigDecimal addCost = srcCost.add(BigDecimal.ONE.multiply(baseqty));
                 *              //返回数据
                 *              acctRecIdEleCostMap.put(key, addCost);
                 *          }
                 *      }
                 *
                 *      private DataSet getCostRecordDs(Map<String, BigDecimal> acctRecIdEleCostMap, Set<Long> bizBillIds) {
                 *          //成本账簿id
                 *          Set<Long> costAcctIds = new HashSet<>(16);
                 *          //成本记录分录id
                 *          Set<Long> recEids = new HashSet<>(16);
                 *          for (Map.Entry<String, BigDecimal> entry : acctRecIdEleCostMap.entrySet()) {
                 *              String key = entry.getKey();
                 *              String[] keySplit = key.split("\\|");
                 *              //成本账簿
                 *              String costAcctIdStr = keySplit[0];
                 *              //成本记录分录id
                 *              String calEidStr = keySplit[1];
                 *              costAcctIds.add(Long.valueOf(costAcctIdStr));
                 *              recEids.add(Long.valueOf(calEidStr));
                 *          }
                 *          //业务单据id（库存单据id）
                 *          QFilter bizBillIdFilter = new QFilter("bizbillid", QCP.in, bizBillIds);
                 *          QFilter eIdFilter = new QFilter("entry.id", QCP.in, recEids);
                 *          String sels = "bizentityobject,bizbillid,costaccount,entry.calentryid as calentryid,entry.id as entryid,entry.baseqty as baseqty,entry.subentrycostelement.costsubelement as costsubelement,costaccount.calpolicy.calbycostelement as calbycostelement";
                 *          //查询成本记录信息
                 *          DataSet costRecordDs = QueryServiceHelper.queryDataSet(this.getClass().getName(),
                 *                  "cal_costrecord_subentity", sels, new QFilter[]{bizBillIdFilter, eIdFilter}, null);
                 *          return costRecordDs;
                 *      }
                 *
                 *  }
                 *
                 *  </code></pre>
                 */
                doCalGroupCostEx(acctRecIdEleCostMap:$.java.util.Map,entity:string,bizBillIds:$.java.util.Set):void;
            }
            type ICalMoveGroupCost_T = ICalMoveGroupCost_S & ICalMoveGroupCost$;
            interface ICalMoveGroupCost extends ICalMoveGroupCost_T {
            }
        }
        namespace kd.sdk.fi.cal.extpoint.costrecord{
            interface IQueueTypeMatch_S {
            }
            interface IQueueTypeMatch$ {
                /**
                 *  获取序列类型
                 *  @param costAccountId  成本账簿ID
                 *  @param bizEntityObject 业务对象
                 *  @param billId  业务单据ID
                 *  @return queueType: "0"为入库序列，"1"为出库序列，其余结果无效
                 *
                 *  <p>扩展示例如下
                 *  <pre><code>
                 *  package kd.sdk.fi.cal.extpoint.costrecord;
                 *
                 * import kd.bos.dataentity.entity.DynamicObject;
                 * import kd.bos.orm.query.QFilter;
                 * import kd.bos.servicehelper.QueryServiceHelper;
                 * import kd.bos.util.StringUtils;
                 * import kd.sdk.fi.cal.extpoint.costrecord.IQueueTypeMatch;
                 *
                 * public class SrcBill4QueuePlugin_Test implements IQueueTypeMatch {
                 *
                 * 	public String getQueueType(Long costAccountId, String bizEntityObject, Long billId) {
                 * 		//非销售出库单 或者 账簿不等于指定账簿，直接返回
                 * 		if(!bizEntityObject.equals("im_saloutbill") || costAccountId != 88888888L){
                 * 			return null;
                 * 		}
                 * 		QFilter q = new QFilter("bizbillid", "=", billId);
                 * 		q.and("costaccount.ismainaccount", "=", true);
                 * 		DynamicObject info = QueryServiceHelper.queryOne("cal_costrecord", "id,period,entry.srcbillentity,entry.srcbillid", q.toArray());
                 * 		//没有成本记录，则无需判断插件逻辑，直接返回
                 * 		if(info == null){
                 * 			return null;
                 * 		}
                 * 		String srcMainEntity = info.getString("entry.srcbillentity");
                 * 		//来源单类型为空，直接返回
                 * 		if(StringUtils.isEmpty(srcMainEntity)){
                 * 			return null;
                 * 		}
                 * 		long period = info.getLong("period");
                 * 		long srcBillId = info.getLong("entry.srcbillid");
                 * 		DynamicObject srcInfo = null;
                 * 		//源单类型相同，都是销售出库单
                 * 		if(bizEntityObject.equals(srcMainEntity)){
                 * 			q = new QFilter("bizbillid", "=", srcBillId);
                 * 			q.and("costaccount.ismainaccount", "=", true);
                 * 			//源单
                 * 			srcInfo = QueryServiceHelper.queryOne("cal_costrecord", "id,period,entry.srcbillentity,entry.srcbillid", q.toArray());
                 * 			//VMI红字销售出库单源单蓝字销售出库单为物流单不进核算
                 * 			if(srcInfo == null){
                 * 				return null;
                 * 			}
                 * 			long srcPeriod = srcInfo.getLong("period");
                 * 			//源单类型=销售出库单且源单为往期（期间不等）
                 * 			if(period != srcPeriod){
                 * 				//返回为入库序列
                 * 				return "0";
                 * 			}
                 * 		}
                 * 		return null;
                 * 	}
                 * }
                 * </code></pre>
                 */
                getQueueType(costAccountId:long,bizEntityObject:string,billId:long):string;
            }
            type IQueueTypeMatch_T = IQueueTypeMatch_S & IQueueTypeMatch$;
            interface IQueueTypeMatch extends IQueueTypeMatch_T {
            }
        }
        namespace kd.sdk.fi.cas.extpoint.claimbill{
            interface IClaimcenterHote_S {
                readonly logger:$.kd.bos.logging.Log;
            }
            interface IClaimcenterHote$ {
                setNewRecBillField?(recBill:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IClaimcenterHote_T = IClaimcenterHote_S & IClaimcenterHote$;
            interface IClaimcenterHote extends IClaimcenterHote_T {
            }
            interface IClaimbillFilter_S {
            }
            interface IClaimbillFilter$ {
                /**
                 * 收款认领处理单过滤条件扩展
                 * 用于认领处理单分录行选择核心单据F7页面过滤条件扩展
                 *
                 * @param lfp  过滤条件，用于二开自定义扩展
                 * @param dataModel  认领处理单数据模型，用于二开获取当前认领处理单据页面数据
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.fi.cas.formplugin.recclaim.claimhandle
                 *
                 * import kd.bos.dataentity.entity.DynamicObject;
                 * import kd.bos.entity.datamodel.IDataModel;
                 * import kd.bos.list.ListFilterParameter;
                 * import kd.bos.orm.query.QCP;
                 * import kd.bos.orm.query.QFilter;
                 * import kd.fi.cas.consts.RecClaimBillModel;
                 * import kd.sdk.fi.cas.extpoint.claimbill.IClaimbillFilter;
                 *
                 * public class ClaimbillFilter implements IClaimbillFilter
                 *
                 *      public void setIFilters(ListFilterParameter lfp, IDataModel dataModel) {
                 *         // 获取当前点击分录行行号
                 *         int currrow = dataModel.getEntryCurrentRowIndex(RecClaimBillModel.ENTRYENTITY);
                 *         // 获取分录行核心单据类型
                 *         String coreBillType = (String) dataModel.getValue(RecClaimBillModel.E_COREBILLTYPE, currentRowIndex);
                 *         // 获取当前单据实体
                 *         DynamicObject claimBill = dataModel.getDataEntity();
                 *         // 通过认领处理单数据添加自定义过滤条件
                 *         lfp.setFilter(new QFilter("accountingorg", QCP.equals, claimBill.getString("billstatus")));
                 *      }
                 * }
                 * </pre></code>
                 * </p>
                 */
                setIFilters(lfp:$.kd.bos.list.ListFilterParameter,dataModel:$.kd.bos.entity.datamodel.IDataModel):void;
                /**
                 * 收款认领单过滤条件扩展插件,用于二开项目扩展过滤条件
                 * @param lfp 列表过滤条件参数
                 * @param claimBill 页面单据
                 * @return void
                 *
                 * <p>扩展示例如下
                 *    <pre><code>
                 *    import kd.bos.dataentity.entity.DynamicObject;
                 *    import kd.bos.list.ListFilterParameter;
                 *
                 *    public class ClaimbillFilter implements IClaimbillFilter {
                 *        public void setIFilters(ListFilterParameter lfp, DynamicObject claimBill) {
                 *            IClaimbillFilter.super.setIFilters(lfp, claimBill);
                 *            lfp.setFilter(new QFilter("accountingorg", QCP.equals, claimBill.getString("billstatus")));
                 *        }
                 *    }
                 *
                 *    </code></pre>
                 */
                setIFilters(lfp:$.kd.bos.list.ListFilterParameter,claimBill:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IClaimbillFilter_T = IClaimbillFilter_S & IClaimbillFilter$;
            interface IClaimbillFilter extends IClaimbillFilter_T {
            }
            interface BankAutoMatchCheck_S {
                readonly logger:$.kd.bos.logging.Log;
            }
            interface BankAutoMatchCheck$ {
                setBankAutoMatchCheck?(ruleList:$.java.util.List):void;
            }
            type BankAutoMatchCheck_T = BankAutoMatchCheck_S & BankAutoMatchCheck$;
            interface BankAutoMatchCheck extends BankAutoMatchCheck_T {
            }
            interface IClaimHandlePluginSDK_S {
            }
            interface IClaimHandlePluginSDK$ {
                /**
                 *  处理数据集，此为步骤3，将idValue集合中的数据赋值到rowData中，相当于给界面分录数据进行赋值
                 *  @param idValue 存放查询的id及对应数据集
                 *  @param rowData 分录数据对象
                 *
                 * <p>扩展示例如下
                 * <pre><code>
                 *       public void dealResult(Map<Long, Map<String, Object>> idValue, DynamicObject rowData) {
                 *                 Long id = (Long)rowData.get("e_corebillid");
                 *                 rowData.set("e_fee", idValue.get(id).get("e_fee"));
                 *      }</code></pre>
                 */
                dealResult(idValue:$.java.util.Map,rowData:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 *  填充数据集，此为步骤2，允许针对选择的核心单据根据id去获取单据头属性或其他属性，存储到idValue中以便步骤3使用
                 *  @param coreBillType 核心单据类型
                 *  @param ids 选择的核心单据id
                 *  @param idValue 存放查询的id及对应数据集
                 *
                 * <p>扩展示例如下
                 * <pre><code>
                 *      public void fillResult(String coreBillType, Set<Long> ids, Map<Long, Map<String, Object>> idValue) {
                 *          DynamicObject obj = QueryServiceHelper.queryOne(coreBillType,"e_fee",new QFiter("id",QCP.in,ids));
                 *          Map<String,Object> s = new HashMap<>();
                 *          s.put("e_fee", obj.get("e_fee"));
                 *          idValue.put(obj.getLong("id"),s);
                 *      }</code></pre>
                 */
                fillResult(coreBillType:string,ids:$.java.util.Set,idValue:$.java.util.Map):void;
                /**
                 *  此为步骤1，二开属性查询出来的数据将在后面步骤使用
                 *  @param coreBillType 核心单据类型
                 *  @param entryEntityKey 分录标识
                 *  @param srcSelectField 标品原始查询属性
                 *  @return 添加二开查询属性
                 *
                 * <p>扩展示例如下
                 *  <pre><code>
                 *  pubilc String getSelectFieldWithEntry(String coreBillType, String entryEntityKey,String srcSelectField){
                 *      String field = ",amt,entry.e_fee";// 可以根据coreBillType、entryEntityKey返回二开需要查询的属性
                 *      return field;
                 *  }</code></pre>
                 */
                getSelectFieldWithEntry(coreBillType:string,entryEntityKey:string,srcSelectField:string):$.java.util.Set;
            }
            type IClaimHandlePluginSDK_T = IClaimHandlePluginSDK_S & IClaimHandlePluginSDK$;
            interface IClaimHandlePluginSDK extends IClaimHandlePluginSDK_T {
            }
        }
        namespace kd.sdk.fi.cas.extpoint.closeperiod{
            interface ICheckArchiveBillTypeInterface_S {
            }
            interface ICheckArchiveBillTypeInterface$ {
                /**
                 *  期末结账反结账时需要校验是否已经归档的单据类型，已归档的不允许反结账
                 *  默认有银行日记账和现金日记账两种单据类型，其他需要在此接口中扩展添加
                 *
                 *  <p>扩展示例如下</p>
                 *  <pre><code>
                 *  package kd.sdk.fi.cas.extpoint.closeperiod;
                 *
                 *  import java.util.Arrays;
                 *  import java.util.List;
                 *
                 *  public class CheckArchiveBillType implements ICheckArchiveBillTypeInterface{
                 *  @Override
                 *    public List<String> getOtherBillTypes() {
                 *        // 返回需要判断是否已经归档的单据类型
                 *        return Arrays.asList("单据类型一","单据类型一");
                 *    }
                 * }</code></pre>
                 */
                getOtherBillTypes():$.java.util.List;
            }
            type ICheckArchiveBillTypeInterface_T = ICheckArchiveBillTypeInterface_S & ICheckArchiveBillTypeInterface$;
            interface ICheckArchiveBillTypeInterface extends ICheckArchiveBillTypeInterface_T {
            }
        }
        namespace kd.sdk.fi.cas.extpoint.journal{
            interface IJournalVoucherBookInterface_S {
            }
            interface IJournalVoucherBookInterface$ {
                /**
                 * 现金日记账-凭证登账扩展
                 * @return  extFieldName 凭证分录现金账户id扩展字段标识
                 *
                 * <p>扩展示例如下
                 * <pre><code>
                 * package kd.fi.cas.helper;
                 *
                 * import kd.sdk.fi.cas.extpoint.journal.IJournalVoucherBookInterface;
                 *
                 * public class voucherBookCashAccountExtPlugin implements IJournalVoucherBookInterface {
                 *     public String cashJournalBookExt() {
                 *         return "kdtest_accountCashId_ext";
                 *     }
                 * }
                 * </code></pre>
                 */
                cashJournalBookExt?():string;
            }
            type IJournalVoucherBookInterface_T = IJournalVoucherBookInterface_S & IJournalVoucherBookInterface$;
            interface IJournalVoucherBookInterface extends IJournalVoucherBookInterface_T {
            }
        }
        namespace kd.sdk.fi.cas.extpoint.noticeclaim{
            interface INoticeClaimSchemeInterface_S {
            }
            interface INoticeClaimSchemeInterface$ {
                /**
                 * 通知认领对象拓展
                 * 扩展调用时机：
                 * 1.【通知规则】界面选择“自定义”时触发扩展
                 * 2.点击“通知认领”操作且检测到未匹配到通知规则后在“通知认领”弹出框重新选择“自定义”时触发扩展
                 *
                 * @param noticeObjectMap
                 * @return Map<String, Object> key:"userids", value:userIdList
                 *
                 * <p>拓展示例如下
                 * <pre><code> package kd.fi.cas.formplugin.recclaim.extpoint;
                 *
                 * import kd.sdk.fi.cas.extpoint.noticeclaim.INoticeClaimSchemeInterface;
                 *
                 * import java.util.ArrayList;
                 * import java.util.List;
                 * import java.util.Map;
                 *
                 * public class NoticeClaimSchemesDefaultExt implements INoticeClaimSchemeInterface {
                 *
                 *     public Map<String, Object> noticeObjectExt(Map<String, Object> noticeObjectMap) {
                 *         // 自定义通知对象用户ID
                 *         List<Object> userIds = new ArrayList<>(2);
                 *         userIds.add(1540672005563544576L);
                 *         noticeObjectMap.put("userids", userIds);
                 *
                 *         return noticeObjectMap;
                 *     }
                 * }</code></pre>
                 */
                noticeObjectExt?(noticeObjectMap:$.java.util.Map):$.java.util.Map;
            }
            type INoticeClaimSchemeInterface_T = INoticeClaimSchemeInterface_S & INoticeClaimSchemeInterface$;
            interface INoticeClaimSchemeInterface extends INoticeClaimSchemeInterface_T {
            }
        }
        namespace kd.sdk.fi.cas.extpoint.paybill{
            interface IGenBankBillSDKService_S {
            }
            interface IGenBankBillSDKService$ {
                /**
                 * @param entityName 单据实体名
                 * @param billList 业务单据集合
                 * @return Map< Long, Map< String, Object>>: key->银行单据id；value->二开字段名和值的键值对
                 *
                 * <p>扩展示例如下
                 * <pre><code>package kd.sdk.tmc.ext.extpoint.committobe;
                 *
                 * import kd.bos.dataentity.entity.DynamicObject;
                 *
                 * import java.util.HashMap;
                 * import java.util.List;
                 * import java.util.Map;
                 *
                 * public class GenBankBillService implements IGenBankBillSDKService{
                 *
                 *     public Map< Long, Map< String, Object>> extFillBankBill(String entityName, List< DynamicObject> billList) {
                 *         Map< Long, Map< String, Object>> result = new HashMap<>();
                 *         switch (entityName){
                 *             case "付款单":
                 *                 Map< String,Object> prop = new HashMap<>();
                 *                 for(DynamicObject bill:billList) {
                 *                     prop.put("exfield", "二开字段");
                 *                     result.put(bill.getLong("id"), prop);
                 *                 }
                 *                 break;
                 *         }
                 *         return result;
                 *     }
                 * }</code></pre>
                 */
                extFillBankBill(entityName:string,billList:$.java.util.List):$.java.util.Map;
            }
            type IGenBankBillSDKService_T = IGenBankBillSDKService_S & IGenBankBillSDKService$;
            interface IGenBankBillSDKService extends IGenBankBillSDKService_T {
            }
            interface IPayeeBankInfoFilter_S {
            }
            interface IPayeeBankInfoFilter$ {
                /**
                 * 付款处理客商收款账号过滤条件扩展插件
                 * @param lfp 列表过滤条件参数
                 * @param payBill 页面单据
                 * @return void
                 *
                 * <b>扩展示例如下
                 *        <pre><code>
                 *          import kd.bos.dataentity.entity.DynamicObject;
                 *          import kd.bos.list.ListFilterParameter;
                 *
                 *          public class PayeeBankInfoFilter implements IPayeeBankInfoFilter {
                 *
                 *              public void setIFilters(ListFilterParameter lfp, DynamicObject payBill) {
                 *                  IPayeeBankInfoFilter.super.setIFilters(lfp, payBill);
                 *                  lfp.setFilter(new QFilter("accountingorg", QCP.equals, payBill.getString("billstatus")));
                 *              }
                 *
                 *          }
                 *
                 *        </code></pre>
                 */
                setIFilters?(lfp:$.kd.bos.list.ListFilterParameter,payBill:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IPayeeBankInfoFilter_T = IPayeeBankInfoFilter_S & IPayeeBankInfoFilter$;
            interface IPayeeBankInfoFilter extends IPayeeBankInfoFilter_T {
            }
            interface IPaybillWriteback_S {
            }
            interface IPaybillWriteback$ {
                /**
                 * 付款单反写参数扩展属性返回,用于二开项目返回扩展字段反写
                 *
                 * @param payBillId 付款单id
                 * @return Map<Long, Map < String, Object>> key:分录ID value:扩展属性 (以键值对形式返回)
                 *
                 * <p>扩展示例如下</p>
                 *    <pre><code>
                 *        public class PaybillWritebackImpl implements IPaybillWriteback{
                 *           public Map<Long, Map<String, Object>> loadExtendInfo(Long payBillId) {
                 *                Map<Long, Map<String, Object>> extendInfoMap = new HashMap<>();
                 *                try {
                 *                DynamicObject payWriteConfig = ExtendConfigHelper.getExtendConfig(ExtendConfigHelper.CONFIG_WRITEBACK_PAY);
                 *                if(payWriteConfig != null && StringUtils.isNotBlank(payWriteConfig.getString("configvalue"))){
                 *                    IPaybillWriteback iPaybillWriteback = (IPaybillWriteback) Class.forName(payWriteConfig.getString("configvalue")).newInstance();
                 *                    extendInfoMap.putAll(iPaybillWriteback.loadExtendInfo(payBillId));
                 *                }
                 *                } catch (Exception e) {
                 *                    logger.info("加载扩展服务异常，%s",e.toString());
                 *                }
                 *                return extendInfoMap;
                 *            }
                 *        }
                 *    </code></pre>
                 */
                loadExtendInfo(payBillId:long):$.java.util.Map;
            }
            type IPaybillWriteback_T = IPaybillWriteback_S & IPaybillWriteback$;
            interface IPaybillWriteback extends IPaybillWriteback_T {
            }
        }
        namespace kd.sdk.fi.cas.extpoint.paysche{
            interface IPayScheSecondaryFieldFill_S {
            }
            interface IPayScheSecondaryFieldFill$ {
                /**
                 * 开票回调后处理
                 * @param secondaryFields 付款排程单下带的二开字段与值 Map 集合
                 * @param paybill 付款处理单动态对象
                 * @return
                 *
                 * <p>扩展示例如下
                 *         <pre><code>
                 *         import kd.bos.dataentity.entity.DynamicObject;
                 *         import kd.bos.ext.fi.botp.consts.PaymentBillModel;
                 *         import java.util.Map;
                 *         public class IPayScheSecondaryFieldFill_Demo implements IPayScheSecondaryFieldFill {
                 *             public void fillSecondaryFields(Map<String, Object> secondaryFields, DynamicObject paybill) {
                 *                 IPayScheSecondaryFieldFill.super.fillSecondaryFields(secondaryFields, paybill);
                 *                 paybill.set(PaymentBillModel.HEAD_USAGE, secondaryFields.get("a1"));
                 *             }
                 *         }
                 *         </code></pre>
                 */
                fillSecondaryFields?(secondaryFields:$.java.util.Map,paybill:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IPayScheSecondaryFieldFill_T = IPayScheSecondaryFieldFill_S & IPayScheSecondaryFieldFill$;
            interface IPayScheSecondaryFieldFill extends IPayScheSecondaryFieldFill_T {
            }
        }
        namespace kd.sdk.fi.cas.extpoint.recbill{
            interface IAgentPayField_S {
            }
            interface IAgentPayField$ {
                setAgentPayField?(info:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IAgentPayField_T = IAgentPayField_S & IAgentPayField$;
            interface IAgentPayField extends IAgentPayField_T {
            }
            interface IRecbillFilter_S {
            }
            interface IRecbillFilter$ {
                /**
                 * 收款单过滤条件扩展插件,用于二开项目扩展过滤条件
                 * @param lfp 列表过滤条件参数
                 * @param recBill 页面单据
                 * @return void
                 *
                 * <b>扩展示例如下
                 *    <pre><code>
                 *    import kd.bos.dataentity.entity.DynamicObject;
                 *    import kd.bos.list.ListFilterParameter;
                 *
                 *    public class RecbillFilter implements IRecbillFilter {
                 *        public void setIFilters(ListFilterParameter lfp, DynamicObject recBill) {
                 *            IRecbillFilter.super.setIFilters(lfp, recBill);
                 *            lfp.setFilter(new QFilter("accountingorg", QCP.equals, recBill.getString("billstatus")));
                 *        }
                 *    }
                 *
                 *    </code></pre>
                 */
                setIFilters?(lfp:$.kd.bos.list.ListFilterParameter,recBill:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IRecbillFilter_T = IRecbillFilter_S & IRecbillFilter$;
            interface IRecbillFilter extends IRecbillFilter_T {
            }
        }
        namespace kd.sdk.fi.dhc.extpoint{
            interface ISynchronizationDataExtPlugin_S {
            }
            interface ISynchronizationDataExtPlugin$ {
                /**
                 * 接口调用时机：各场景下同步数据前获取映射配置关系时
                 *
                 * @param billType 要同步数据的单据类型。接入报账工作台的单据的实体编码
                 * @return 自定义增加的{billType}单与{dhc_mybilllist}的同步映射关系
                 *
                 * <p>扩展示例如下</p>
                 *    <pre><code>
                 *     public class SynchronizationDataExtTestPlugin implements ISynchronizationDataExtPlugin {
                 *
                 *        @Override
                 *        public Map<String, String> addMappingFields(String billType) {
                 *            Map<String, String> mappingFields = new HashMap<>();
                 *            switch (billType) {
                 *                case "dhc_reimorder":
                 *                    mappingFields.put("extField", "biztype");
                 *                    break;
                 *                case "ssc_tallyapplybill":
                 *                    mappingFields.put("extField", "mainbiztype");
                 *                    mappingFields.put("entryentity.extEntryField", "tallyentryentity.bizdetailtype");
                 *                    break;
                 *                default:
                 *                    break;
                 *            }
                 *            return mappingFields;
                 *        }
                 *     }
                 *    </code></pre>
                 */
                addMappingFields?(billType:string):$.java.util.Map;
            }
            type ISynchronizationDataExtPlugin_T = ISynchronizationDataExtPlugin_S & ISynchronizationDataExtPlugin$;
            interface ISynchronizationDataExtPlugin extends ISynchronizationDataExtPlugin_T {
            }
        }
        namespace kd.sdk.fi.er.extpoint.ai{
            interface IAIReimburseService_S {
                readonly BIZCODE:string;
            }
            interface IAIReimburseService$ {
                /**
                 * 创建view和model后执行，用于修改model便于二开赋值
                 * @param view
                 * @param params 对话平台传进来的参数
                 * @return
                 */
                afterCreateView?(view:$.kd.bos.form.IFormView,params:$.java.util.Map):void;
                /**
                 * 初始化时修改实体标识、appid。
                 * @param plugin 智能语音报销的插件对象
                 * @return
                 */
                initDataMember?(plugin:$.kd.bos.bill.AbstractBillWebApiPlugin,params:$.java.util.Map):void;
                /**
                 * 生成返回给对话平台的结果集后触发，便于修改结果集
                 * @param view
                 * @param responseModel 返回给对话平台的结果
                 * @param params 对话平台传进来的参数
                 * @return
                 */
                responseModelExt?(view:$.kd.bos.form.IFormView,responseModel:any,params:$.java.util.Map):void;
            }
            type IAIReimburseService_T = IAIReimburseService_S & IAIReimburseService$;
            interface IAIReimburseService extends IAIReimburseService_T {
            }
        }
        namespace kd.sdk.fi.er.extpoint.dailyreimbursebill{
            interface IEntryMustInput_S {
            }
            interface IEntryMustInput$ {
                /**
                 * 返回true时，校验资产报账单资产分录必填，false不校验
                 * @param bill
                 * @return
                 *
                 * <p>扩展示例如下</p>
                 *    <pre><code>
                 *    public class AssetentryMustInput implements IEntryMustInput {
                 *    @Override
                 *    public Boolean checkAssetEntryMustInput(DynamicObject bill) {
                 *    return Boolean.FALSE;
                 *    }
                 *    }
                 *    </code></pre>
                 */
                checkAssetEntryMustInput(bill:$.kd.bos.dataentity.entity.DynamicObject):boolean;
            }
            type IEntryMustInput_T = IEntryMustInput_S & IEntryMustInput$;
            interface IEntryMustInput extends IEntryMustInput_T {
            }
            interface ITripStandardControl_S {
            }
            interface ITripStandardControl$ {
                /**
                 * 提交时是否要启用差旅标准
                 * @param DynamicObject 单据页面提交时的元数据
                 * @return boolean
                 *
                 * <p>扩展示例如下</p>
                 *    <pre><code>
                 *            public class TripStandardControl implements ITripStandardControl {
                 *                    public Boolean controlTripStandard(DynamicObject dynamicObject) {
                 *                    return true;
                 *                }
                 *            }
                 *        </code></pre>
                 */
                controlTripStandard(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject):boolean;
            }
            type ITripStandardControl_T = ITripStandardControl_S & ITripStandardControl$;
            interface ITripStandardControl extends ITripStandardControl_T {
            }
            interface ISuperClosedCallBack_S {
            }
            interface ISuperClosedCallBack$ {
                /**
                 * 在标准逻辑的 ClosedCallBack 执行之后进行个性处理
                 */
                afterClosedCallBack?(clazz:$.java.lang.Class,actionId:string,isPc:boolean,...params:any[]):void;
                /**
                 * 为true，执行标准逻辑；为false，则执行完此方法跳过标准逻辑
                 * @return 是否执行标准的closedCallBack
                 */
                beforeClosedCallBack?(clazz:$.java.lang.Class,actionId:string,isPc:boolean,...params:any[]):boolean;
                /**
                 * @param clazz      ShowFrom 所在的插件
                 * @param foromid    ShowFrom 即将打开的界面标识
                 * @param isPc       是否为PC端
                 * @param params     可变传参，
                 * @return 是否执行标准的view.showfrom; 为true，执行标准逻辑；为false，则执行完此方法跳过标准逻辑
                 */
                beforeShowFrom?(clazz:$.java.lang.Class,foromid:string,isPc:boolean,...params:any[]):boolean;
            }
            type ISuperClosedCallBack_T = ISuperClosedCallBack_S & ISuperClosedCallBack$;
            interface ISuperClosedCallBack extends ISuperClosedCallBack_T {
            }
            interface IWriteBackService_S {
            }
            interface IWriteBackService$ {
                /**
                 * 出纳付款单反写
                 * @return Object 必须实现kd.fi.er.mservice.botp.writeback.AbstractWriteBackServcie
                 *
                 * <p>扩展示例如下</p>
                 *    <pre><code>
                 *    public class WriteBackService implements IWriteBackService {
                 *    public Object getSelfBackService() {
                 *    return new DailyLoanBillWriteBackService();
                 *    }
                 *    }
                 *    </code></pre>
                 */
                getSelfBackService():any;
            }
            type IWriteBackService_T = IWriteBackService_S & IWriteBackService$;
            interface IWriteBackService extends IWriteBackService_T {
            }
            interface IInitBillInfo_S {
            }
            interface IInitBillInfo$ {
                /**
                 * 费用报销单据新增初始化单据信息
                 * @param view 单据页面
                 * @return void
                 *
                 * <p>扩展示例如下</p>
                 *       <pre><code>
                 *        public class InitBillInfo implements IInitBillInfo{
                 *            public void initBillInfo(IFormView view) {
                 *                if (view == null){
                 *                    return;
                 *                }
                 *                Long companyId = 1247657405731330048L;//根据具体业务获取公司id
                 *                view.getModel().setValue("company", companyId);
                 *            }
                 *        }
                 *       </code></pre>
                 */
                initBillInfo(view:$.kd.bos.form.IFormView):void;
            }
            type IInitBillInfo_T = IInitBillInfo_S & IInitBillInfo$;
            interface IInitBillInfo extends IInitBillInfo_T {
            }
            interface IPayAmountCal_S {
            }
            interface IPayAmountCal$ {
                /**
                 * @param view 单据及界面
                 * @return 付现金额 返回类型为kd.fi.er.business.daily.reimburse.AmountObject 否则标准逻辑获取不到
                 *
                 * <p>扩展示例如下</p>
                 *          <pre><code>
                 *                public Object payAmountCalc(IFormView view) {
                 *                    if (view == null) {
                 *                        return null;
                 *                    }
                 *                    BigDecimal orgiPayAmount = (BigDecimal) view.getModel().getValue("orgiPayAmount");
                 *                    BigDecimal currPayAmount = (BigDecimal) view.getModel().getValue("orgiPayAmount");
                 *                    AmountObject result = new AmountObject(orgiPayAmount, currPayAmount);
                 *                    return result;
                 *                }
                 *         </code></pre>
                 */
                payAmountCalc(view:$.kd.bos.form.IFormView):any;
            }
            type IPayAmountCal_T = IPayAmountCal_S & IPayAmountCal$;
            interface IPayAmountCal extends IPayAmountCal_T {
            }
            interface IWriteOffMoney_S {
                readonly BIZCODE:string;
            }
            interface IWriteOffMoney$ {
                afterWriteoffWithholdingByCurrcy(dataModel:$.kd.bos.entity.datamodel.IDataModel):void;
                /**
                 * 冲预提分录联动 按原币冲销：费用明细 冲预提 相同币种冲销
                 * @param
                 */
                afterWriteoffWithholdingByOrgiCurrcy(dataModel:$.kd.bos.entity.datamodel.IDataModel):void;
            }
            type IWriteOffMoney_T = IWriteOffMoney_S & IWriteOffMoney$;
            interface IWriteOffMoney extends IWriteOffMoney_T {
            }
            interface IAmountControl_S {
            }
            interface IAmountControl$ {
                /**
                 * 提交时是否要超额判断逻辑
                 * @param DynamicObject 单据页面提交时的元数据
                 * @return boolean
                 *
                 * <p>扩展示例如下</p>
                 *    <pre><code>
                 *        public class AmountControl implements IAmountControl {
                 *            public boolean cancelAmountControl(DynamicObject dynamicObject) {
                 *            //要超额判断
                 *            return true;
                 *            }
                 *        }
                 *    </code></pre>
                 */
                cancelAmountControl(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject):boolean;
            }
            type IAmountControl_T = IAmountControl_S & IAmountControl$;
            interface IAmountControl extends IAmountControl_T {
            }
            interface IChangeReceiveAmount_S {
            }
            interface IChangeReceiveAmount$ {
                /**
                 * 允许二开在收款信息分录联动结束后，重新计算收款信息分录金额
                 * 作用于 kd.fi.er.formplugin.daily.web.util.WriteOffMoneyUtils.refreshReceiveAmount
                 *      kd.fi.er.formplugin.daily.web.util.WriteOffMoneyUtils#refreshReceiveAmount
                 * @param dataModel 页面model
                 * @param writeOffType 冲销方式
                 * @return kd.fi.er.business.daily.reimburse.AmountObject对象
                 */
                afterChangeReciveAmount?(dataModel:$.kd.bos.entity.datamodel.IDataModel,writeOffType:string):any;
                /**
                 * @param view 单据界面
                 * @return 是否联动收款金额
                 *
                 * <p>扩展示例如下</p>
                 *        <pre><code>
                 *            public boolean isChangeReceiveAmount(IFormView iFormView) {
                 *                return false;
                 *            }
                 *        </code></pre>
                 */
                isChangeReceiveAmount(view:$.kd.bos.form.IFormView):boolean;
            }
            type IChangeReceiveAmount_T = IChangeReceiveAmount_S & IChangeReceiveAmount$;
            interface IChangeReceiveAmount extends IChangeReceiveAmount_T {
            }
            interface IReimburseAmount_S {
            }
            interface IReimburseAmount$ {
                /**
                 * 获取获取在途的已用部门额度
                 * @param param
                 * @return
                 */
                getDeptCurrentInReimbursedAmountBetween(param:$.java.util.Map):$.java.util.List;
                /**
                 * 获取已报销的部门额度
                 * @param param
                 * @return
                 */
                getDeptReimbursedAmountBetween(param:$.java.util.Map):$.java.math.BigDecimal;
                /**
                 * 获取某个部门，某项费用项目，在某个时间区间内已报销的额度详情
                 * @param param
                 * @return
                 */
                getDeptReimbursedAmountDetailBetween(param:$.java.util.Map):$.java.util.List;
                /**
                 * 获取某个员工，某项费用项目，在某个时间区间内 正在报销流程中的单据金额（状态：已提交B，审核中C）
                 * @param param 额度处理参数key分别为 company 公司 dept/userid 部门或人员id expenseitem 费用项目
                 *              currency 本位币 begindate 开始时间 enddate 结束时间 existids
                 * @return 额度
                 *
                 * <p>扩展示例如下</p>
                 *        <pre><code>
                 *            public BigDecimal getEmployeeCurrentInReimbursedAmountBetween(Map<String, Object> map) {
                 *                BigDecimal result = BigDecimal.ZERO;
                 *                String amount = ErStdConfig.get("Amont.Ctrl.Ext.Dept");
                 *                result = new BigDecimal(amount);
                 *                if(result == null) {
                 *                    result = BigDecimal.ZERO;
                 *                }
                 *                return result;
                 *            }
                 *        </code></pre>
                 */
                getEmployeeCurrentInReimbursedAmountBetween(param:$.java.util.Map):$.java.math.BigDecimal;
                /**
                 * 获取某个员工，某项费用项目，在某个时间区间内已报销的额度
                 * @param param
                 * @return
                 */
                getEmployeeReimbursedAmountBetween(param:$.java.util.Map):$.java.math.BigDecimal;
                /**
                 * 获取某个员工，某项费用项目，在某个时间区间内已报销的额度详情
                 * @param param
                 * @return
                 */
                getEmployeeReimbursedAmountDetailBetween(param:$.java.util.Map):$.java.math.BigDecimal;
            }
            type IReimburseAmount_T = IReimburseAmount_S & IReimburseAmount$;
            interface IReimburseAmount extends IReimburseAmount_T {
            }
            interface IAssetentryMustInput_S {
            }
            interface IAssetentryMustInput$ {
                /**
                 * 返回true时，校验资产报账单资产分录必填，false不校验
                 * @param bill
                 * @return
                 *
                 * <p>扩展示例如下</p>
                 *    <pre><code>
                 *    public class AssetentryMustInput implements IAssetentryMustInput {
                 *        @Override
                 *        public Boolean checkAssetEntryMustInput(DynamicObject bill) {
                 *        return Boolean.FALSE;
                 *        }
                 *    }
                 *    </code></pre>
                 */
                checkAssetEntryMustInput(bill:$.kd.bos.dataentity.entity.DynamicObject):boolean;
            }
            type IAssetentryMustInput_T = IAssetentryMustInput_S & IAssetentryMustInput$;
            interface IAssetentryMustInput extends IAssetentryMustInput_T {
            }
        }
        namespace kd.sdk.fi.er.extpoint.draw{
            interface IDrawRuleService_S {
            }
            interface IDrawRuleService$ {
                /**
                 *  对于标准产品代码里写死的ruleid，允许现场通过此方法修改掉。
                 *  @param srcEntity 上拉的实体
                 *  @param tarEntity 目标实体
                 *  @param tarView  目标view
                 *  @param rows  选择的数据
                 *  @param ruleId 现有的ruleId
                 *  @return  期望的ruleId
                 *
                 *  <p>扩展示例如下</p>
                 *         <pre><code>
                 *             public String getRuleId(String srcEntity, String tarEntity, IFormView tarView, ListSelectedRowCollection rows,
                 * 			String ruleId) {
                 * 		//如果是二开的报销单上拉二开的借款单
                 * 		if("4b3z_er_dailyloanbill_inh".equals(srcEntity) && "4b3z_er_dailyreimbursebill_inh".equals(tarEntity)){
                 * 			return "123622523888";
                 * 		}
                 * 		//其他情况走原有规则不动
                 * 		return ruleId;
                 * 	}
                 *         </code></pre>
                 */
                getRuleId(srcEntity:string,tarEntity:string,tarView:$.kd.bos.form.IFormView,rows:$.kd.bos.entity.datamodel.ListSelectedRowCollection,ruleId:string):string;
            }
            type IDrawRuleService_T = IDrawRuleService_S & IDrawRuleService$;
            interface IDrawRuleService extends IDrawRuleService_T {
            }
        }
        namespace kd.sdk.fi.er.extpoint.invoicecloud{
            interface IAfterHandleBillPool_S {
                readonly BIZCODE:string;
            }
            interface IAfterHandleBillPool$ {
                /**
                 * 金额回写账单池后根据扩展参数二开处理
                 *
                 * @param extMap      扩展参数
                 * @param billingPool 目标账单池对象
                 */
                handleExtMapAfterAmountBack?(extMap:$.java.util.Map,billingPool:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 账单池对象生成后根据扩展参数二开处理
                 *
                 * @param extMap      扩展参数
                 * @param billingPool 目标账单池对象
                 * @return void
                 *
                 * <p>扩展示例如下</p>
                 *    <pre><code>
                 *    public class Test2 implements IAfterHandleBillPool{
                 *        public void handleExtMapAfterGenBillPool(Map<String, Object> extMap, DynamicObject billingPool) {
                 *            String tt =  extMap.get("testKey").toString();
                 *            billingPool.set("testKey",tt);
                 *        }
                 *
                 *        public void handleExtMapAfterAmountBack(Map<String, Object> extMap, DynamicObject billingPool) {
                 *            String tt =  extMap.get("testKey").toString();
                 *            billingPool.set("testKey",tt);
                 *        }
                 *    }
                 *    </code></pre>
                 */
                handleExtMapAfterGenBillPool?(extMap:$.java.util.Map,billingPool:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IAfterHandleBillPool_T = IAfterHandleBillPool_S & IAfterHandleBillPool$;
            interface IAfterHandleBillPool extends IAfterHandleBillPool_T {
            }
            interface IBeforeHandleBillPoolParamPrepare_S {
                readonly BIZCODE:string;
            }
            interface IBeforeHandleBillPoolParamPrepare$ {
                /**
                 * 金额回写账单池前扩展参数准备处理
                 *
                 * @param sourceBill 来源报销单对象
                 * @param extMap     扩展参数Map
                 */
                prepareExtParamBeforeAmountBack?(sourceBill:$.kd.bos.dataentity.entity.DynamicObject,extMap:$.java.util.Map):void;
                /**
                 * 生成账单池前扩展参数准备处理
                 *
                 * @param sourceBill 来源报销单对象
                 * @param extMap     扩展参数Map
                 * @return void
                 *
                 * <p>扩展示例如下</p>
                 *        <pre><code>
                 *        public class Test1 implements IBeforeHandleBillPoolParamPrepare{
                 *
                 *            public void prepareExtParamBeforeGenBillPool(DynamicObject sourceBill, Map<String, Object> extMap) {
                 *                extMap.put("testKey","prepareExtParamBeforeGenBillPool");
                 *            }
                 *
                 *            public void prepareExtParamBeforeAmountBack(DynamicObject sourceBill, Map<String, Object> extMap) {
                 *                extMap.put("testKey","prepareExtParamBeforeAmountBack");
                 *            }
                 *
                 *            public String prepareSelectPropertiesBeforeAmountBack(Map<String, Object> extMap) {
                 *                return ",testKey,usage";
                 *            }
                 *        }
                 *        </code></pre>
                 */
                prepareExtParamBeforeGenBillPool?(sourceBill:$.kd.bos.dataentity.entity.DynamicObject,extMap:$.java.util.Map):void;
                /**
                 * 金额回写账单池补充需要处理的账单池字段
                 *
                 * @param extMap     扩展参数Map
                 */
                prepareSelectPropertiesBeforeAmountBack?(extMap:$.java.util.Map):string;
            }
            type IBeforeHandleBillPoolParamPrepare_T = IBeforeHandleBillPoolParamPrepare_S & IBeforeHandleBillPoolParamPrepare$;
            interface IBeforeHandleBillPoolParamPrepare extends IBeforeHandleBillPoolParamPrepare_T {
            }
            interface AfterSelectInvoice_S {
                readonly BIZCODE:string;
            }
            interface AfterSelectInvoice$ {
                /**
                 *  选择发票后，缓存发票云传回的原始的发票json信息。
                 *  @param jsonFromInvoiceCloud 选择发票后，发票云传回的原始的发票json信息。
                 *  @return
                 *
                 *  <p>扩展示例如下
                 *  <pre><code>
                 * 	public class AfterSelectInvoiceDemo implements AfterSelectInvoice {
                 *
                 * 	private String jsonFromInvoiceCloud = null;
                 *
                 * 	@Override
                 * 	public void cacheJsonFromInvoiceCloud(String jsonFromInvoiceCloud){
                 * 		this.jsonFromInvoiceCloud = jsonFromInvoiceCloud;
                 * 	}
                 *
                 * }
                 *  </code></pre>
                 */
                cacheJsonFromInvoiceCloud?(jsonFromInvoiceCloud:string):void;
                /**
                 *  标准产品的代码根据发票信息完成发票信息分录、发票明细分录、费用/差旅明细分录等一切界面字段的填充后，调用此方法。<p>
                 *  @param view 单据界面的view
                 *  @return
                 *
                 *  <p>扩展示例如下
                 *
                 *  <pre><code>
                 * public class AfterSelectInvoiceDemo implements AfterSelectInvoice {
                 * 	private static final Log logger = LogFactory.getLog(AfterSelectInvoiceDemo.class);
                 *
                 * 	// 定义成员变量，缓存cacheJsonFromInvoiceCloud所传入的参数
                 * 	private String jsonFromInvoiceCloud = null;
                 *
                 * 	@Override
                 * 	public void cacheJsonFromInvoiceCloud(String jsonFromInvoiceCloud){
                 * 		logger.info("sdk: 选择发票后，缓存发票云传回的原始的发票json信息: " + jsonFromInvoiceCloud);
                 * 		this.jsonFromInvoiceCloud = jsonFromInvoiceCloud;
                 * 	}
                 *
                 * 	@Override
                 * 	public void finish(IFormView view){
                 * 		logger.info("sdk: 标准产品的代码根据发票信息完成发票信息分录、发票明细分录、费用/差旅明细分录等一切界面字段的填充后，调用此方法。");
                 * 		// 单据上的发票信息分录
                 * 		IDataModel model = view.getModel();
                 * 		DynamicObjectCollection invoiceentries = model.getEntryEntity("invoiceentry");
                 *
                 * 		// 发票云返回的原始发票信息
                 * 		Map<String, Object> mapFromInvoiceCloud = SerializationUtils.fromJsonString(this.jsonFromInvoiceCloud, Map.class);
                 * 		List<Map> invoiceInfos = (List)mapFromInvoiceCloud.get("data");
                 * 	}
                 * }
                 *  </code></pre>
                 */
                finish?(view:$.kd.bos.form.IFormView):void;
            }
            type AfterSelectInvoice_T = AfterSelectInvoice_S & AfterSelectInvoice$;
            interface AfterSelectInvoice extends AfterSelectInvoice_T {
            }
        }
        namespace kd.sdk.fi.er.extpoint.trip{
            interface ITripCheckReqBillCloseService_S {
                readonly BIZCODE:string;
            }
            interface ITripCheckReqBillCloseService$ {
                /**
                 * 校验出差申请单是否可以关闭
                 * @param reqBill 出差申请单
                 * @param operateKey 操作类型
                 * @return true 可关闭，false 不可关闭
                 */
                checkReqBillClose(reqBill:$.kd.bos.dataentity.entity.DynamicObject,operateKey:string):boolean;
            }
            type ITripCheckReqBillCloseService_T = ITripCheckReqBillCloseService_S & ITripCheckReqBillCloseService$;
            interface ITripCheckReqBillCloseService extends ITripCheckReqBillCloseService_T {
            }
            interface ITripOrderUpdateReimService_S {
                readonly BIZCODE:string;
            }
            interface ITripOrderUpdateReimService$ {
                /**
                 * 订单追加差旅报销单扩展
                 * @param reim 差旅报销单
                 */
                orderUpdateReim(reim:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type ITripOrderUpdateReimService_T = ITripOrderUpdateReimService_S & ITripOrderUpdateReimService$;
            interface ITripOrderUpdateReimService extends ITripOrderUpdateReimService_T {
            }
            interface ITripCheckOrderUserStatusService_S {
                readonly BIZCODE:string;
            }
            interface ITripCheckOrderUserStatusService$ {
                /**
                 * 校验订单是否已使用
                 * @param dynamicObject orderbill
                 * @return true 已使用，false 未使用
                 */
                checkOrderUserStatus(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject):boolean;
            }
            type ITripCheckOrderUserStatusService_T = ITripCheckOrderUserStatusService_S & ITripCheckOrderUserStatusService$;
            interface ITripCheckOrderUserStatusService extends ITripCheckOrderUserStatusService_T {
            }
        }
        namespace kd.sdk.fi.fatvs.extpoint.skill{
            interface ISkillRunnableExtPlugin_S {
            }
            interface ISkillRunnableExtPlugin$ {
                /**
                 * 获取技能运行数据
                 *
                 * @param runExtContext
                 *            技能运行数据入参
                 * @return 技能运行数据
                 */
                pullData?(runExtContext:SkillRunExtContext):SkillRunExtResult;
                /**
                 * 展示技能使用情况指标
                 *
                 * @param indicatorParam
                 *            技能使用情况指标入参
                 */
                showSkillIndicator?(indicatorParam:SkillIndicatorParam):void;
                /**
                 * 展示技能运行分析页
                 *
                 * @param pageParam
                 *            技能分析页入参
                 */
                showSkillRunAnalysisPage?(pageParam:SkillRunAnalysisPageParam):void;
            }
            type ISkillRunnableExtPlugin_T = ISkillRunnableExtPlugin_S & ISkillRunnableExtPlugin$;
            interface ISkillRunnableExtPlugin extends ISkillRunnableExtPlugin_T {
            }
            interface SkillRunExtResult_S {
            }
            interface SkillRunExtResult_C extends SkillRunExtResult_S {
                new():SkillRunExtResult;
            }
            interface SkillRunExtResult$ {
                getData():$.java.util.List;
                getDate():Date;
                getEndTime():Date;
                getFailCount():number;
                getSkillNum():string;
                getStartTime():Date;
                getTotalCount():number;
                setData(data:$.java.util.List):void;
                setDate(date:Date):void;
                setEndTime(endTime:Date):void;
                setFailCount(failCount:number):void;
                setSkillNum(skillNum:string):void;
                setStartTime(startTime:Date):void;
                setTotalCount(totalCount:number):void;
            }
            type SkillRunExtResult_T = SkillRunExtResult_S & SkillRunExtResult$;
            interface SkillRunExtResult extends SkillRunExtResult_T {
            }
            interface SkillRunAnalysisPageParam_S {
            }
            interface SkillRunAnalysisPageParam_C extends SkillRunAnalysisPageParam_S {
                new():SkillRunAnalysisPageParam;
            }
            interface SkillRunAnalysisPageParam$ {
                getExtParam():$.java.util.Map;
                getSkillId():long;
                getSkillNum():string;
                getView():$.kd.bos.form.IFormView;
                setExtParam(extParam:$.java.util.Map):void;
                setSkillId(skillId:long):void;
                setSkillNum(skillNum:string):void;
                setView(view:$.kd.bos.form.IFormView):void;
            }
            type SkillRunAnalysisPageParam_T = SkillRunAnalysisPageParam_S & SkillRunAnalysisPageParam$;
            interface SkillRunAnalysisPageParam extends SkillRunAnalysisPageParam_T {
            }
            interface SkillIndicatorParam_S {
            }
            interface SkillIndicatorParam_C extends SkillIndicatorParam_S {
                new():SkillIndicatorParam;
            }
            interface SkillIndicatorParam$ {
                getExtParam():$.java.util.Map;
                getIndicatorNum():string;
                getSkillId():long;
                getSkillNum():string;
                getView():$.kd.bos.form.IFormView;
                setExtParam(extParam:$.java.util.Map):void;
                setIndicatorNum(indicatorNum:string):void;
                setSkillId(skillId:long):void;
                setSkillNum(skillNum:string):void;
                setView(view:$.kd.bos.form.IFormView):void;
            }
            type SkillIndicatorParam_T = SkillIndicatorParam_S & SkillIndicatorParam$;
            interface SkillIndicatorParam extends SkillIndicatorParam_T {
            }
            interface SkillRunExtContext_S {
            }
            interface SkillRunExtContext_C extends SkillRunExtContext_S {
                new():SkillRunExtContext;
            }
            interface SkillRunExtContext$ {
                getEndTime():Date;
                getSkillId():long;
                getSkillNum():string;
                getSkillResult():SkillRunExtResult;
                getStartTime():Date;
                setEndTime(endTime:Date):void;
                setSkillId(skillId:long):void;
                setSkillNum(skillNum:string):void;
                setSkillResult(skillResult:SkillRunExtResult):void;
                setStartTime(startTime:Date):void;
            }
            type SkillRunExtContext_T = SkillRunExtContext_S & SkillRunExtContext$;
            interface SkillRunExtContext extends SkillRunExtContext_T {
            }
        }
        namespace kd.sdk.fi.fca.extpoint{
            interface ITranSupBillVoucher_S {
            }
            interface ITranSupBillVoucher$ {
                /**
                 * 上划处理单凭证号扩展插件
                 * @param rows 列表数据
                 * @return void
                 *
                 * <b>扩展示例如下
                 *    <pre><code>
                 *    package kd.tmc.fca.formplugin.transbill;
                 *
                 *    import kd.bos.dataentity.entity.DynamicObject;
                 *    import kd.bos.dataentity.entity.DynamicObjectCollection;
                 *    import kd.sdk.fi.fca.extpoint.ITranSupBillVoucher;
                 *
                 *    public class TranSupBillVoucher implements ITranSupBillVoucher {
                 *    @Override
                 *    public void setIVoucher(DynamicObjectCollection rows) {
                 *    ITranSupBillVoucher.super.setIVoucher(rows);
                 *    for(DynamicObject row :rows){
                 *    row.set("description","123456");
                 *    }
                 *    }
                 *    }
                 *    </code></pre>
                 */
                setIVoucher?(rows:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
            }
            type ITranSupBillVoucher_T = ITranSupBillVoucher_S & ITranSupBillVoucher$;
            interface ITranSupBillVoucher extends ITranSupBillVoucher_T {
            }
        }
        namespace kd.sdk.fi.fcm.extpoint.checkitem{
            interface CheckContext_S {
            }
            type CheckContext_ST = $.java.io.Serializable & CheckContext_S;
            interface CheckContext_C extends CheckContext_ST {
            }
            interface CheckContext$ {
                /**
                 * 当前业务应用系统简码(非必须)
                 */
                getBizAppId():string;
                /**
                 * 核算组织ID
                 */
                getOrgId():long;
                /**
                 * 自定义期间结束时间, 一定不为null
                 */
                getPeriodEndDate():Date;
                /**
                 * 会计期间ID - 对于具体的应用可能不存在， 视调用方传参而定
                 */
                getPeriodId():long;
                /**
                 * 自定义期间开始时间, 一定不为null
                 */
                getPeriodStartDate():Date;
                /**
                 * 插件配置参数 - 用户在配置检查项时进行设置
                 */
                getPluginDefineParams():$.java.util.Map;
                /**
                 * 结账子业务类型，根据不同的业务系统有不同的主账簿类型
                 *     总账是账簿类型
                 *     资产是资产用途
                 *     应收是政策类型
                 *     库存是账簿类别
                 */
                setBizAppId(bizAppId:string):void;
            }
            type CheckContext_T = $.java.io.Serializable & CheckContext_S & CheckContext$;
            interface CheckContext extends CheckContext_T {
            }
            interface IClosePeriodCheckPlugin_S {
            }
            interface IClosePeriodCheckPlugin$ {
                /**
                 * 根据指定的结账检查上下文 context，实现特定的业务检查。
                 *
                 * Note: 插件必须提供一个无参构造函数，由执行程序通过反射进行调用
                 *
                 * @param context 结账检查上下文， 包含检查项定义的信息
                 * @return 结账检查结果
                 * @throws Throwable 检查项的逻辑异常
                 *
                 *     <p>扩展示例如下
                 *
                 *     <pre><code>
                 *         public class PostChecker implements IClosePeriodCheckPlugin {
                 *                &#64;Override
                 *                public CheckResult execute(CheckContext context) throws Throwable {
                 *     	        	CheckResult result = new CheckResult();
                 *     	        	QFilter post = new QFilter("ispost", "=", "0");
                 *     	        	boolean ispost = checkPost();
                 *     	        	if (!ispost) {
                 *     	        		result.setIsSuccess(true);
                 *                    } else {
                 *     	        		QFilter qf = new QFilter("booktype", QCP.equals, Long.valueOf(context.getSubBizAppId()));
                 *     	        		qf.and("ispost", QCP.equals, '0');
                 *     	        		qf.and("period", QCP.equals, context.getPeriodId());
                 *     	        		qf.and("org, QCP.equals, context.getOrgId());
                 *     	        		result.setIsSuccess(false);
                 *     	        		result.setOnlineQueryParams(qf.toSerializedString());
                 *     	        		result.setOnlineViewId("gl_voucher);
                 *     	        		List<String> errorMsg = new ArrayList<String>(1);
                 *     	        		errorMsg.add(ResManager.loadKDString("存在未过账", "VoucherPostChecker_0", "fi-gl-common"));
                 *     	        		result.setMessages(errorMsg);
                 *                    }
                 *     	        	return result;
                 *                }
                 *          }
                 *     </code></pre>
                 */
                execute(context:CheckContext):CheckResult;
            }
            type IClosePeriodCheckPlugin_T = IClosePeriodCheckPlugin_S & IClosePeriodCheckPlugin$;
            interface IClosePeriodCheckPlugin extends IClosePeriodCheckPlugin_T {
            }
            interface CheckResult_S {
            }
            type CheckResult_ST = $.java.io.Serializable & CheckResult_S;
            interface CheckResult_C extends CheckResult_ST {
                new():CheckResult;
            }
            interface CheckResult$ {
                /**
                 * 是否检查成功, 如果不成功，将会提供联查页面给客户联查
                 */
                setIsSuccess(success:boolean):void;
                /**
                 * 插件执行过程中返回的消息列表
                 */
                setMessages(messages:$.java.util.List):void;
                /**
                 * 联查页面数据过滤条件(参数), 该值做为联查页面视图的过滤条件，请确保该联查参数跟联查页面视图是匹配的
                 *
                 * 该参数的可能取值类型为:
                 * 1. 该参数可以为外部URL的查询参数，在<code>onlineViewId</code> 为URL协议开头时， 该参数会拼接到其后面，构成整个联查页面的
                 * URL， 参见 kd.bos.ext.fi.fcm.mservice.CheckItemDetail#buildExternalUrl()
                 * 2. 该参数如果为应用内的过滤条件，其为QFilter的序列化字符串
                 */
                setOnlineQueryParams(onlineQueryParams:string):void;
                /**
                 * 联查页面视图ID, 如果该值为null或empty, 将不会提供联查页面
                 * 既可以为应用内部的实体entityname, 也可以是外部URL，以http:// 或者https://开头
                 */
                setOnlineViewId(onlineViewId:string):void;
            }
            type CheckResult_T = $.java.io.Serializable & CheckResult_S & CheckResult$;
            interface CheckResult extends CheckResult_T {
            }
        }
        namespace kd.sdk.fi.fgptas.extpoint.attachment{
            interface IPictureAnalysis_S {
            }
            interface IPictureAnalysis$ {
                /**
                 * 把图片转换后的文本转化成自然语言，并放入提示词中
                 * @param pictureAnalysisResult
                 * @return
                 */
                toPrompt?(pictureAnalysisResult:string):string;
                /**
                 * 把图片转换成文本
                 * @param attachInfos 所有需要处理的图片信息<br/>
                 *                    数据来源附件面板服务，键值对参考附件面板服务的返回值 kd.bos.servicehelper.AttachmentServiceHelper#getAttachments<br/>
                 *                    在此扩展点可能用到的键：relativeUrl/url/previewurl: 相对路径/全路径/预览路径
                 * @return PictureAnalysisResult集合
                 *
                 * @see kd.bos.servicehelper.AttachmentServiceHelper#getAttachments(String, Object[], String, boolean)
                 * @see PictureAnalysisResult
                 */
                toText(attachInfos:$.java.util.List):$.java.util.List;
            }
            type IPictureAnalysis_T = IPictureAnalysis_S & IPictureAnalysis$;
            interface IPictureAnalysis extends IPictureAnalysis_T {
            }
            enum AttachmentType {
                PICTURE,
                TEXT
            }
            interface IAttachmentHandler_S {
            }
            interface IAttachmentHandler$ {
                /**
                 * 对附件进行分类，示例
                 * <pre>
                 *      AttachmentType clarifyAttachmentType(Map<String, Object> attachInfo) {
                 *          if ("txt".equalsIgnoreCase(attachInfo.get("type")) {
                 *               return AttachmentType.TEXT;
                 *           }
                 *           if ("jpg".equalsIgnoreCase(attachInfo.get("type")) {
                 *              return AttachmentType.PICTURE;
                 *           }
                 *           return null;
                 *      }
                 * </pre>
                 * @param attachInfo 图片信息<br/>
                 *                   数据来源附件面板服务，键值对参考附件面板服务的返回值 kd.bos.servicehelper.AttachmentServiceHelper#getAttachments<br/>
                 *                   在此扩展点可能用到的键：name/type: 附件名称/附件扩展名
                 * @return AttachmentType.PICTURE 或者 AttachmentType.TEXT，如果忽略这个附件返回null
                 * @see AttachmentType
                 */
                clarifyAttachmentType(attachInfo:$.java.util.Map):AttachmentType;
            }
            type IAttachmentHandler_T = IAttachmentHandler_S & IAttachmentHandler$;
            interface IAttachmentHandler extends IAttachmentHandler_T {
            }
        }
        namespace kd.sdk.fi.fr.extpoint{
            interface IBankInfoF7Service_S {
            }
            interface IBankInfoF7Service$ {
                setBankF7Filter(listShowParameter:$.kd.bos.list.ListShowParameter,extArgs:string):$.kd.bos.list.ListShowParameter;
            }
            type IBankInfoF7Service_T = IBankInfoF7Service_S & IBankInfoF7Service$;
            interface IBankInfoF7Service extends IBankInfoF7Service_T {
            }
        }
        namespace kd.sdk.fi.gl.extpoint.amort{
            interface IAmountAllocate_S {
                readonly BIZCODE:string;
            }
            interface IAmountAllocate$ {
                /**
                 * 根据待摊凭证分录自定义转入的凭证分录
                 * @param destEntries   转入凭证分录，可进行自定义修改
                 * @param targetEntries 待摊凭证分录，对其的修改将无效
                 * @param schemeDyn     凭证摊销方案对象，可用来判断参数，对其的修改将无效
                 *
                 * <pre><code>
                 *  public class AmortExtTest implements IAmountAllocate {
                 *
                 *      public void dealDestEntries(List>DynamicObject< destEntries, List<DynamicObject> targetEntries, DynamicObject schemeDyn) {
                 *          destEntries.forEach(destRow->{
                 *              for (DynamicObject targetRow: targetEntries){
                 *                  if (destRow.getLong("assgrp_id") == targetRow.getLong("assgrp_id")){
                 *                      destRow.set("debitori", targetRow.getBigDecimal("creditori"));
                 *                      destRow.set("debitlocal", targetRow.getBigDecimal("creditlocal"));
                 *                  }
                 *              }
                 *          });
                 *      }
                 *  }
                 * </code></pre>
                 */
                dealDestEntries(destEntries:$.java.util.List,targetEntries:$.java.util.List,schemeDyn:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IAmountAllocate_T = IAmountAllocate_S & IAmountAllocate$;
            interface IAmountAllocate extends IAmountAllocate_T {
            }
        }
        namespace kd.sdk.fi.gl.extpoint.bal{
            interface ICFBalCalculator_S {
                readonly BIZ_CODE:string;
            }
            interface ICFBalCalculator$ {
                /**
                 * 删除时事件触发，比如
                 * ID startperiod endperiod
                 * 1  120210020   120210040
                 * 2  120210040   120220050
                 * 3  120210050   99999999999 当删除ID为1的数据时，会把对应的余额数据的开始期间和结束期间作为参数传递
                 * @param orgId
                 * @param bookTypeId
                 * @param delDemension 被删除的维度
                 */
                deleteBal(orgId:long,bookTypeId:long,delDemension:$.java.util.List):void;
                /**
                 * 更新余额事件触发，此次发生余额变动的余额的modifytime》=updateTime
                 * @param orgId
                 * @param bookTypeId
                 * @param upadateTime
                 */
                updateBal(orgId:long,bookTypeId:long,upadateTime:Date):void;
            }
            type ICFBalCalculator_T = ICFBalCalculator_S & ICFBalCalculator$;
            interface ICFBalCalculator extends ICFBalCalculator_T {
            }
            interface IAcctBalCalculator_S {
                readonly BIZ_CODE:string;
            }
            interface IAcctBalCalculator$ {
                /**
                 * 删除时事件触发，比如
                 * ID startperiod endperiod
                 * 1  120210020   120210040
                 * 2  120210040   120220050
                 * 3  120210050   99999999999 当删除ID为1的数据时，会把对应的余额数据的开始期间和结束期间作为参数传递
                 * @param orgId
                 * @param bookTypeId
                 * @param delDemension 被删除的维度
                 */
                deleteBal(orgId:long,bookTypeId:long,delDemension:$.java.util.List):void;
                /**
                 * 更新余额事件触发，此次发生余额变动的余额的modifytime》=updateTime
                 * @param orgId
                 * @param bookTypeId
                 * @param upadateTime
                 */
                updateBal(orgId:long,bookTypeId:long,upadateTime:Date):void;
            }
            type IAcctBalCalculator_T = IAcctBalCalculator_S & IAcctBalCalculator$;
            interface IAcctBalCalculator extends IAcctBalCalculator_T {
            }
        }
        namespace kd.sdk.fi.gl.extpoint.notice{
            interface INoticeVoucherIdsProvider_S {
                readonly BIZCODE:string;
            }
            interface INoticeVoucherIdsProvider$ {
                /**
                 * 不需要过滤，需要返回参数参入的voucherIds。
                 * @param voucherIds 标准产品需要发送通知单的凭证ids
                 * @return 扩展插件过滤后需要发送通知单的凭证ids
                 * <p>扩展示例如下
                 *    <pre><code>
                 *    package kd.sdk.fi.gl.extpoint.notice;
                 *    import java.util.Set;
                 *    public class NoticeVoucherIdsProviderImpl implements INoticeVoucherIdsProvider{
                 *    @Override
                 *    public Set<Long> customFilterVchIds(Set<Long> voucherIds) {
                 *    //自定义逻辑
                 *    return voucherIds;
                 *    }}
                 *    </code></pre>
                 */
                customFilterVchIds(voucherIds:$.java.util.Set):$.java.util.Set;
            }
            type INoticeVoucherIdsProvider_T = INoticeVoucherIdsProvider_S & INoticeVoucherIdsProvider$;
            interface INoticeVoucherIdsProvider extends INoticeVoucherIdsProvider_T {
            }
            interface INoticeVoucherSourceType_S {
                readonly AUTOTRANS_VALUE:string;
                readonly BIZCODE:string;
                readonly CARRY_OVER:string;
                readonly FROMIMPORT:string;
                readonly HANDCRAFT_VALUE:string;
                readonly MECHANISM_VALUE:string;
                readonly OFFSET:string;
                readonly PERIOD_END_EXCHANGERATE_ADJUSTMENT_VALUE:string;
                readonly PROFIT_AND_LOSS_VALUE:string;
                readonly SCAN_VALUE:string;
                readonly SCHEMA_VALUE:string;
                readonly SYCBOOK:string;
                readonly VOUCHERAMORT_VALUE:string;
                readonly VOUCHER_REF:string;
            }
            interface INoticeVoucherSourceType$ {
                /**
                 * 自定义校验接口
                 * @return 不发送通知单的凭证来源类型集合。目前标准产品结转损益类型的凭证不发通知，无需再控制。
                 * @throws
                 *
                 * <p>扩展示例如下
                 *    <pre><code>
                 *    package kd.sdk.fi.gl.extpoint.notice;
                 *
                 *    import java.util.ArrayList;
                 *    import java.util.List;
                 *
                 *    public class NoticeVoucherSourceTypeCtl implements INoticeVoucherSourceType{
                 *
                 *    @Override
                 *    public List<String> noSendNoticeSourceType() {
                 *    List<String> sourceTypes = new ArrayList<>(6);
                 *    sourceTypes.add(PERIOD_END_EXCHANGERATE_ADJUSTMENT_VALUE);//来源类型为期末调汇的凭证不发通知单。
                 *    return sourceTypes;
                 *    }
                 *    }
                 *    </code></pre>
                 */
                noSendNoticeSourceType():$.java.util.List;
            }
            type INoticeVoucherSourceType_T = INoticeVoucherSourceType_S & INoticeVoucherSourceType$;
            interface INoticeVoucherSourceType extends INoticeVoucherSourceType_T {
            }
            interface INoticeCheck_S {
                readonly BIZCODE:string;
            }
            interface INoticeCheck$ {
                /**
                 * 自定义校验接口
                 * @param sendList 发送通知单列表,receiveList 接收通知单列表
                 * @return 是，检查通过，否，检查不通过
                 * @throws
                 *
                 * <p>扩展示例如下
                 *    <pre><code>
                 *    package hx.fi.gl.extpoint.notice;
                 *    import kd.bos.report.ReportList;
                 *    import kd.sdk.fi.gl.extpoint.notice.INoticeCheck;
                 *
                 *    public class HxNoticeCHeck implements INoticeCheck {
                 *        public boolean extCheck(ReportList sendList, ReportList receiveList) {
                 *            if(sendList ==null||receiveList==null){
                 *                return false;
                 *            }
                 *            ...
                 *            return false;
                 *        }
                 *    }
                 *    </code></pre>
                 */
                extCheck(sendList:$.kd.bos.report.ReportList,receiveList:$.kd.bos.report.ReportList):boolean;
            }
            type INoticeCheck_T = INoticeCheck_S & INoticeCheck$;
            interface INoticeCheck extends INoticeCheck_T {
            }
        }
        namespace kd.sdk.fi.gl.extpoint.report{
            interface IReportQuery_S {
                readonly BIZCODE:string;
            }
            interface IReportQuery$ {
                /**
                 * 往来对账单扩展
                 */
                acCheck(standardDataSet:$.kd.bos.algo.DataSet,reportQueryParam:$.kd.bos.entity.report.ReportQueryParam,selectedObj:any):$.kd.bos.algo.DataSet;
                /**
                 * 多组织辅助明细账扩展
                 */
                auxSubLedger(standardDataSet:$.kd.bos.algo.DataSet,reportQueryParam:$.kd.bos.entity.report.ReportQueryParam,selectedObj:any):$.kd.bos.algo.DataSet;
                /**
                 * 辅助明细账扩展
                 * @param standardDataSet 标准产品报表查询数据集合
                 * @param reportQueryParam 报表查询参数
                 * @param selectedObj 左表选中对象(如有)
                 * @return 扩展处理后数据集合
                 *
                 * <p>扩展示例如下
                 *    <pre><code>
                 *    import kd.bos.algo.DataSet;
                 *    import kd.bos.entity.report.FilterInfo;
                 *    import kd.bos.entity.report.ReportQueryParam;
                 *
                 *    public class ExtReportQuery implements IReportQuery{
                 *
                 *    @Override
                 *    public DataSet subLedger(DataSet standardDataSet, ReportQueryParam reportQueryParam, Object selectedObj) {
                 *            DataSet extDataSet = standardDataSet;
                 *            FilterInfo filter = reportQueryParam.getFilter();
                 *            if(filter.getBoolean("showqty")){
                 *                extDataSet = extDataSet.addField("10L", "cusQty");
                 *            }
                 *            return extDataSet;
                 *        }
                 *
                 *        @Override
                 *        public DataSet auxSubLedger(DataSet standardDataSet, ReportQueryParam reportQueryParam, Object selectedObj) {
                 *            DataSet extDataSet = standardDataSet;
                 *            return extDataSet;
                 *        }
                 *
                 *        @Override
                 *        public DataSet acCheck(DataSet standardDataSet, ReportQueryParam reportQueryParam, Object selectedObj) {
                 *            DataSet extDataSet = standardDataSet;
                 *            return extDataSet;
                 *        }
                 *    }
                 *    </code></pre>
                 */
                subLedger(standardDataSet:$.kd.bos.algo.DataSet,reportQueryParam:$.kd.bos.entity.report.ReportQueryParam,selectedObj:any):$.kd.bos.algo.DataSet;
            }
            type IReportQuery_T = IReportQuery_S & IReportQuery$;
            interface IReportQuery extends IReportQuery_T {
            }
            interface ReportParam_S {
            }
            interface ReportParam_C extends ReportParam_S {
                new(reportType:ReportParam$ReportType,queryParam:$.kd.bos.entity.report.ReportQueryParam):ReportParam;
            }
            interface ReportParam$ {
                /**
                 * @return 报表查询的查询参数
                 */
                getQueryParam():$.kd.bos.entity.report.ReportQueryParam;
                /**
                 * @return 报表类型，用于识别是那张报表
                 */
                getReportType():ReportParam$ReportType;
            }
            type ReportParam_T = ReportParam_S & ReportParam$;
            interface ReportParam extends ReportParam_T {
            }
            enum ReportParam$ReportType {
                UNSUPPORTED,
                SUB_LEDGER,
                SUBSI_DIARY_LEDGER,
                AUX_SUB_LEDGER,
                GENERAL_LEDGER,
                MULTI_COLUMN_ACCOUNT
            }
            interface IReportRowHideSpi_S {
                readonly BIZCODE:string;
            }
            interface IReportRowHideSpi$ {
                /**
                 * @param param 报表查询上下文
                 * @param rowType 行类型
                 * @return 返回Ture则隐藏该报表查询结果集中对应rowType的所有列
                 *
                 * <p>扩展示例如下
                 *    <pre><code>
                 *    package kd.sdk.fi.gl.extpoint.report;
                 *
                 *    import kd.bos.algo.DataSet;
                 *    import kd.bos.entity.report.FilterInfo;
                 *
                 *    public class SummaryFilter implements IReportRowHideSpi {
                 *
                 *        @Override
                 *        public Boolean needHide(ReportParam param, RowType rowType) {
                 *            switch (param.getReportType()) {
                 *                case SUB_LEDGER:
                 *                    FilterInfo filter = param.getQueryParam().getFilter();
                 *                    if(!filter.getBoolean("showsummary")) {
                 *                        //明细分类账过滤本期合计
                 *                        return rowType == RowType.ROW_TYPE_BEGIN;
                 *                    }
                 *                    break;
                 *                case AUX_SUB_LEDGER:
                 *                case SUBSI_DIARY_LEDGER:
                 *                    break;
                 *            }
                 *            return false;
                 *        }
                 *    }
                 *    </code></pre>
                 */
                needHide(param:ReportParam,rowType:RowType):boolean;
            }
            type IReportRowHideSpi_T = IReportRowHideSpi_S & IReportRowHideSpi$;
            interface IReportRowHideSpi extends IReportRowHideSpi_T {
            }
            enum RowType {
                ROW_TYPE_BEGIN,
                ROW_TYPE_LEAF,
                ROW_TYPE_DAILY,
                ROW_TYPE_PERIOD,
                ROW_TYPE_YEAR,
                ROW_TOTAL_SUMMARY
            }
            interface IReportColumnSetting_S {
                readonly BIZCODE:string;
            }
            interface IReportColumnSetting$ {
                /**
                 * 科目余额表
                 * @param columns 报表列集合
                 * @param reportQueryParam 界面查询参数
                 * @return
                 */
                acctBal(columns:$.java.util.List,reportQueryParam:$.kd.bos.entity.report.ReportQueryParam):void;
                /**
                 * 核算维度余额表
                 * @param columns 报表列集合
                 * @param reportQueryParam 界面查询参数
                 * @return
                 */
                assistBal(columns:$.java.util.List,reportQueryParam:$.kd.bos.entity.report.ReportQueryParam):void;
                /**
                 * 总分类账
                 * @param columns 报表列集合
                 * @param reportQueryParam 界面查询参数
                 * @return
                 */
                generalLedger(columns:$.java.util.List,reportQueryParam:$.kd.bos.entity.report.ReportQueryParam):void;
            }
            type IReportColumnSetting_T = IReportColumnSetting_S & IReportColumnSetting$;
            interface IReportColumnSetting extends IReportColumnSetting_T {
            }
        }
        namespace kd.sdk.fi.gl.extpoint.syncbookvch{
            interface AccountAssgrpMappingParam_S {
            }
            interface AccountAssgrpMappingParam_C extends AccountAssgrpMappingParam_S {
                new(srcBookId:long,tarBookId:long):AccountAssgrpMappingParam;
            }
            interface AccountAssgrpMappingParam$ {
                getSrcBookId():long;
                getTarBookId():long;
            }
            type AccountAssgrpMappingParam_T = AccountAssgrpMappingParam_S & AccountAssgrpMappingParam$;
            interface AccountAssgrpMappingParam extends AccountAssgrpMappingParam_T {
            }
            interface IAccountAssgrpMapping_S {
                readonly BIZ_CODE:string;
            }
            interface IAccountAssgrpMapping$ {
                /**
                 * @param param 映射关系表依赖的参数
                 * @return 二开自定义的科目映射关系List
                 */
                dealMapping(param:AccountAssgrpMappingParam):$.java.util.List;
            }
            type IAccountAssgrpMapping_T = IAccountAssgrpMapping_S & IAccountAssgrpMapping$;
            interface IAccountAssgrpMapping extends IAccountAssgrpMapping_T {
            }
        }
    }
}
export {};