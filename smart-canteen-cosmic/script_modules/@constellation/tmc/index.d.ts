/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.sdk.tmc{
            interface SdkTmcModule_S {
            }
            type SdkTmcModule_ST = $.kd.sdk.module.Module & SdkTmcModule_S;
            interface SdkTmcModule_C extends SdkTmcModule_ST {
                new():SdkTmcModule;
            }
            interface SdkTmcModule$ {
            }
            type SdkTmcModule_T = $.kd.sdk.module.Module & SdkTmcModule_S & SdkTmcModule$;
            interface SdkTmcModule extends SdkTmcModule_T {
            }
        }
        namespace kd.sdk.tmc.am.extpoint.bankacct{
            interface IBankAccountFilter_S {
            }
            interface IBankAccountFilter$ {
                /**
                 * 银行账户增加“是否虚拟账户”字段方法1
                 * @param args  页面的过滤条件
                 * @param formView  页面的参数
                 * @return void
                 *
                 * <p>扩展示例如下
                 *     <pre><code>
                 *     import kd.bos.form.IFormView;
                 *     import kd.bos.form.events.FilterContainerInitArgs;
                 *
                 *     public class BankAccountFilter implements IBankAccountFilter {
                 *
                 *         public void addIFilterColumn(FilterContainerInitArgs args, IFormView formView) {
                 *
                 *         }
                 *     }
                 *     </code></pre>
                 */
                addIFilterColumn?(args:$.kd.bos.form.events.FilterContainerInitArgs,formView:$.kd.bos.form.IFormView):void;
                /**
                 * 银行账户增加“是否虚拟账户”字段方法2
                 * @param e  页面的事件
                 * @param formView  页面的参数
                 * @return void
                 *
                 * <p>扩展示例如下
                 *     <pre><code>
                 *     import kd.bos.form.IFormView;
                 *     import kd.bos.form.events.SetFilterEvent;
                 *
                 *     public class BankAccountFilter implements IBankAccountFilter {
                 *
                 *        public void setIFilters(SetFilterEvent e, IFormView formView) {
                 *
                 *         }
                 *     }
                 *     </code></pre>
                 */
                setIFilters?(e:$.kd.bos.form.events.SetFilterEvent,formView:$.kd.bos.form.IFormView):void;
            }
            type IBankAccountFilter_T = IBankAccountFilter_S & IBankAccountFilter$;
            interface IBankAccountFilter extends IBankAccountFilter_T {
            }
        }
        namespace kd.sdk.tmc.am.extpoint.report{
            interface IDormantFormListFilter_S {
            }
            interface IDormantFormListFilter$ {
                /**
                 * 久悬户查询增加过滤条件可”是否包含虚拟户”
                 * @param qFilters 页面的过滤条件
                 * @param filter 传递的参数
                 * @return void
                 *
                 * <p>扩展示例如下
                 *     <pre><code>
                 *     import kd.bos.entity.report.FilterInfo;
                 *     import kd.bos.orm.query.QFilter;
                 *
                 *     import java.util.List;
                 *
                 *     public class DormantFormListFilter implements IDormantFormListFilter {
                 *
                 *        public void setIFilters(List<QFilter> qFilters, FilterInfo filter) {
                 *            qFilters.add(new QFilter("isinclude", QCP.equals, filter.getString("isinclude")));
                 *            qFilters.add(new QFilter("name", QCP.equals, filter.getString("name")));
                 *        }
                 *     }
                 *     </code></pre>
                 */
                setIFilters?(qFilters:$.java.util.List,filter:$.kd.bos.entity.report.FilterInfo):void;
            }
            type IDormantFormListFilter_T = IDormantFormListFilter_S & IDormantFormListFilter$;
            interface IDormantFormListFilter extends IDormantFormListFilter_T {
            }
        }
        namespace kd.sdk.tmc.bei.extpoint.balance{
            interface IFillBankBalance_S {
            }
            interface IFillBankBalance$ {
                /**
                 * 同步余额增加字段支持二开扩展
                 * @param bankBalance         处理的余额数据
                 * @param balanceString       银企云返回的余额数据
                 *
                 * <p>扩展示例如下
                 * <pre><code>
                 *
                 *  package kd.sdk.tmc.bei.extpoint.balance;
                 *
                 * import com.alibaba.fastjson.JSON;
                 * import com.alibaba.fastjson.JSONObject;
                 * import kd.bos.dataentity.entity.DynamicObject;
                 *
                 * public class FillBankBalanceExt implements IFillBankBalance {
                 *
                 *     public void fillExtBankBalance(DynamicObject bankBalance, String balanceString) {
                 *         JSONObject jsonObject = JSON.parseObject(balanceString);
                 *         bankBalance.set("", jsonObject.getString(""));
                 *     }
                 *
                 * }
                 * </code></pre>
                 */
                fillExtBankBalance(bankBalance:$.kd.bos.dataentity.entity.DynamicObject,balanceString:string):void;
            }
            type IFillBankBalance_T = IFillBankBalance_S & IFillBankBalance$;
            interface IFillBankBalance extends IFillBankBalance_T {
            }
            interface IGenHistoryBalanceInterface_S {
            }
            interface IGenHistoryBalanceInterface$ {
                /**
                 *  用于获取二开可以执行自动计算历史余额的银企直连账户的主键ID
                 *  @return  银企直连账户的主键ID
                 *
                 *  <p>扩展示例如下
                 *  <pre><code>
                 *  package kd.sdk.tmc.bei.extpoint.balance;
                 *
                 * import java.util.HashSet;
                 * import java.util.Set;
                 *
                 * public class GenHistoryBalanceInterfaceExt implements IGenHistoryBalanceInterface {
                 *
                 *     public Set<Long> getExtAccountBankIds() {
                 *         HashSet<Long> bankAccountIds = new HashSet<>();
                 *         // 返回需要扩展处理的银企账户ID
                 *         bankAccountIds.add(1L);
                 *         return bankAccountIds;
                 *     }
                 * }
                 * </code></pre>
                 */
                getExtAccountBankIds():$.java.util.Set;
            }
            type IGenHistoryBalanceInterface_T = IGenHistoryBalanceInterface_S & IGenHistoryBalanceInterface$;
            interface IGenHistoryBalanceInterface extends IGenHistoryBalanceInterface_T {
            }
            interface IBalanceReportInterface_S {
            }
            interface IBalanceReportInterface$ {
                /**
                 * 余额报表添加账户字段扩展点
                 * @return 需要扩展的字段
                 * <p>扩展示例如下
                 *
                 * <pre><code>package kd.sdk.tmc.bei.extpoint.balance;
                 *
                 * import kd.bos.orm.query.QCP;
                 * import kd.bos.orm.query.QFilter;
                 *
                 * public class BalanceReportExt implements IBalanceReportInterface{
                 *
                 *     public String getAccountFields() {
                 *         // 需要查询的字段名，类别扩展增加相同属性名称的列
                 *         return "acctstatus,defaultcurrency";
                 *     }
                 * }</code></pre>
                 */
                getAccountFields():string;
                /**
                 * 余额报表条件过滤扩展点
                 * @param qFilter 查询条件
                 * @return 查询条件
                 *
                 * <p>拓展示例如下
                 * <pre><code>package kd.sdk.tmc.bei.extpoint.balance;
                 *
                 * import kd.bos.orm.query.QCP;
                 * import kd.bos.orm.query.QFilter;
                 *
                 * public class BalanceReportExt implements IBalanceReportInterface{
                 *
                 *     public QFilter getAccountFilter(QFilter qFilter) {
                 *
                 *         // 增加账户过滤内容
                 *         qFilter.and("bankaccountnumber", QCP.equals, "FI-00000000000CNY44");
                 *         return qFilter;
                 *     }
                 * }</code></pre>
                 */
                getAccountFilter(qFilter:$.kd.bos.orm.query.QFilter):$.kd.bos.orm.query.QFilter;
            }
            type IBalanceReportInterface_T = IBalanceReportInterface_S & IBalanceReportInterface$;
            interface IBalanceReportInterface extends IBalanceReportInterface_T {
            }
        }
        namespace kd.sdk.tmc.bei.extpoint.bankpay{
            interface IAfterBankPayQueryExt_S {
            }
            interface IAfterBankPayQueryExt$ {
                /**
                 * 获取银企同步付款状态接口备用字段对应银行付款单二开字段标识
                 *
                 * 银企同步付款状态接口备用字段标识
                 * String reversed1;
                 * String reversed2;
                 * String reversed3;
                 * String reversed4;
                 *
                 * @return Map<String, String>   key: 银企同步付款状态接口备用字段标识   value: 备用字段对应的银行付款单二开字段标识
                 *
                 * <p>扩展示例如下
                 * <pre><code>package kd.sdk.tmc.bei.extpoint.bankpay;
                 *
                 * import java.util.HashMap;
                 * import java.util.Map;
                 * import kd.sdk.tmc.bei.extpoint.bankpay.IAfterBankPayQueryExt;
                 *
                 * public class BankPayQueryServiceExtPlugin implements IAfterBankPayQueryExt {
                 *
                 *     public Map<String, String> getExtReversedFields() {
                 *         Map<String, String> extFieldsMap = new HashMap<>(4);
                 *         extFieldsMap.put("reversed1", "kdext_field1");
                 *         extFieldsMap.put("reversed2", "kdext_field2");
                 *         extFieldsMap.put("reversed3", "kdext_field3");
                 *         extFieldsMap.put("reversed4", "kdext_field4");
                 *         return extFieldsMap;
                 *     }
                 *
                 * }</code></pre>
                 */
                getExtReversedFields?():$.java.util.Map;
            }
            type IAfterBankPayQueryExt_T = IAfterBankPayQueryExt_S & IAfterBankPayQueryExt$;
            interface IAfterBankPayQueryExt extends IAfterBankPayQueryExt_T {
            }
        }
        namespace kd.sdk.tmc.bei.extpoint.claim{
            interface INoticeClaimSchemeInterface_S {
            }
            interface INoticeClaimSchemeInterface$ {
                /**
                 * 取消通知认领对象拓展
                 * “取消通知认领”操作时触发扩展。
                 *
                 * @param noticeObjectMap "billid"  交易明细ID
                 *                        "ruleentryid"  通知规则ID
                 *                        "isneednotice"  是否发送通知，默认为true
                 * @return Map<String, Object> key:"userids", value:userIdList
                 *
                 * <p>拓展示例如下
                 * <pre><code>package kd.tmc.bei.business;
                 *
                 * import kd.sdk.tmc.bei.extpoint.claim.INoticeClaimSchemeInterface;
                 *
                 * import java.util.ArrayList;
                 * import java.util.List;
                 * import java.util.Map;
                 *
                 * public class NoticeClaimSchemesDefaultExt implements INoticeClaimSchemeInterface {
                 *
                 *     public Map<String, Object> cancelNoticeObjectExt(Map<String, Object> noticeObjectMap) {
                 *         // 获取交易明细ID
                 *         Long billId = (Long) noticeObjectMap.get("billid");
                 *         // 获取通知规则分录ID
                 *         Long ruleEntryId = (Long) noticeObjectMap.get("ruleentryid");
                 *
                 *         // 是否发送通知，默认为true
                 *         noticeObjectMap.put("isneednotice", false);
                 *
                 *         return noticeObjectMap;
                 *     }
                 * }</code></pre>
                 */
                cancelNoticeObjectExt?(noticeObjectMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 通知认领对象拓展
                 * 扩展调用时机：“通知认领”操作匹配到通知规则且在【通知规则】界面选择的是“自定义”时触发扩展
                 * 注：当扩展此场景时会覆盖 kd.sdk.fi.cas.extpoint.noticeclaim.INoticeClaimSchemeInterface.noticeObjectExt 扩展场景
                 *
                 * @param noticeObjectMap "billid"  交易明细ID
                 *                        "ruleentryid"  通知规则ID
                 *                        "isneednotice"  是否发送通知，默认为true
                 * @return Map<String, Object> key:"userids", value:userIdList
                 *
                 * <p>拓展示例如下
                 * <pre><code>package kd.tmc.bei.business;
                 *
                 * import kd.sdk.tmc.bei.extpoint.claim.INoticeClaimSchemeInterface;
                 *
                 * import java.util.ArrayList;
                 * import java.util.List;
                 * import java.util.Map;
                 *
                 * public class NoticeClaimSchemesDefaultExt implements INoticeClaimSchemeInterface {
                 *
                 *     public Map<String, Object> noticeObjectExtByRule(Map<String, Object> noticeObjectMap) {
                 *         // 获取交易明细ID
                 *         Long billId = (Long) noticeObjectMap.get("billid");
                 *         // 获取通知规则分录ID
                 *         Long ruleEntryId = (Long) noticeObjectMap.get("ruleentryid");
                 *
                 *         // 自定义通知对象用户ID
                 *         List<Object> userIds = new ArrayList<>(2);
                 *         userIds.add(1540672005563544576L);
                 *         noticeObjectMap.put("userids", userIds);
                 *
                 *         // 是否发送通知，默认为true
                 *         noticeObjectMap.put("isneednotice", false);
                 *
                 *         return noticeObjectMap;
                 *     }
                 * }</code></pre>
                 */
                noticeObjectExtByRule?(noticeObjectMap:$.java.util.Map):$.java.util.Map;
            }
            type INoticeClaimSchemeInterface_T = INoticeClaimSchemeInterface_S & INoticeClaimSchemeInterface$;
            interface INoticeClaimSchemeInterface extends INoticeClaimSchemeInterface_T {
            }
        }
        namespace kd.sdk.tmc.bei.extpoint.receipt{
            interface IAfterReceiptRecognition_S {
            }
            interface IAfterReceiptRecognition$ {
                /**
                 * 基于OCR识别后的已有信息设置客制化规则
                 * @param recognizeDetailJson JsonString 电子回单ocr识别结果序列化对象 kd.tmc.bei.common.constants.ReceiptRecongnizeDetail
                 * @return JsonString 二开处理后的识别结果序列化对象
                 *
                 * 电子回单识别明细对象 - kd.tmc.bei.common.constants.ReceiptRecongnizeDetail
                 *
                 * 对象属性：
                 *
                 * 交易日期
                 * String ftradeDate;
                 * 收款人&付款人银行账户信息
                 * 户名
                 * String fpayeeName;
                 * String fpaymentName;
                 * 银行账号
                 * String fpayeeAccount;
                 * String fpaymentAccount;
                 * 开户行
                 * String fpayeeBank;
                 * String fpaymentBank;
                 * 金额
                 * String famount;
                 * 币别
                 * String fcurrency;
                 * 借贷标记 贷-收 借-付
                 * String ftradeType;
                 * 交易流水号
                 * String ftradeId;
                 * 业务参考号
                 * String ftradeNumber;
                 * String fabstract;
                 *
                 * <p>扩展示例如下
                 * <pre><code>package kd.sdk.tmc.bei.extpoint.receipt;
                 *
                 * import kd.bos.dataentity.serialization.SerializationUtils;
                 * import kd.bos.logging.Log;
                 * import kd.bos.logging.LogFactory;
                 * import kd.bos.util.ExceptionUtils;
                 * import kd.sdk.tmc.bei.extpoint.receipt.IAfterReceiptRecognition;
                 * import kd.tmc.bei.common.constants.ReceiptRecongnizeDetail;
                 * import kd.tmc.bei.common.enums.LendingDirectionEnum;
                 *
                 * public class ReceiptRecognitionResultExtPlugin implements IAfterReceiptRecognition {
                 * private static final Log logger = LogFactory.getLog(ReceiptRecognitionResultExtPlugin.class);
                 *
                 *     public String fillRecognitionResult(String recognizeDetailJson) {
                 *         try {
                 *             //反序列化对象
                 *             ReceiptRecongnizeDetail recognizeDetail = SerializationUtils.fromJsonString(recognizeDetailJson, ReceiptRecongnizeDetail.class);
                 *             recognizeDetail.setFpaymentAccount("ABC777");
                 *             recognizeDetail.setFcurrency("CNY");
                 *             //借贷方向涉及多语言 建议使用枚举赋值
                 *             recognizeDetail.setFtradeType(LendingDirectionEnum.OUT.getDirect());
                 *             //处理后序列化返回
                 *             recognizeDetailJson = SerializationUtils.toJsonString(recognizeDetail);
                 *         } catch (Exception e) {
                 *             logger.warn("电子回单识别 -- 二开处理识别结果反异常：" + ExceptionUtils.getExceptionStackTraceMessage(e));
                 *         }
                 *         return recognizeDetailJson;
                 *     }
                 * }</code></pre>
                 */
                fillRecognitionResult?(recognizeDetailJson:string):string;
            }
            type IAfterReceiptRecognition_T = IAfterReceiptRecognition_S & IAfterReceiptRecognition$;
            interface IAfterReceiptRecognition extends IAfterReceiptRecognition_T {
            }
            interface IReceiptMatchTransDetail_S {
            }
            interface IReceiptMatchTransDetail$ {
                /**
                 * 电子回单匹配交易明细后，电子回单、交易明细赋值逻辑二开扩展
                 * @param matchRel 电子回单：交易明细关系：one-one，one-many，many-one
                 * @param receipts 电子回单单据信息
                 * @param details  交易明细单据信息
                 *
                 * <p>扩展示例如下
                 * <pre><code>package kd.sdk.tmc.bei.extpoint.receipt;
                 *
                 * import kd.bos.dataentity.entity.DynamicObject;
                 * import java.util.List;
                 *
                 * public class ReceiptMatchTransDetail implements IReceiptMatchTransDetail{
                 *
                 *     public void afterMatchFieldValueCover(String matchRel, List<DynamicObject> receipts, List<DynamicObject> details) {
                 *         switch (matchRel){
                 *             case "one-one"://一对一
                 *                 DynamicObject receipt = receipts.get(0);
                 *                 receipt.set("keyField", "value");
                 *                 DynamicObject detail = details.get(0);
                 *                 detail.set("keyField", "value");
                 *                 break;
                 *             case "one-many"://一对多
                 *                 DynamicObject receipt1 = receipts.get(0);
                 *                 receipt1.set("keyField", "value");
                 *                 for (DynamicObject detail1 : details) {
                 *                     detail1.set("keyField", "value");
                 *                 }
                 *                 break;
                 *             case "many-one"://多对一
                 *                 for (DynamicObject receipt2 : receipts) {
                 *                     receipt2.set("keyField", "value");
                 *                 }
                 *                 DynamicObject detail2 = details.get(0);
                 *                 detail2.set("keyField", "value");
                 *                 break;
                 *             default:
                 *                 break;
                 *         }
                 *     }
                 * }
                 * </code></pre>
                 */
                afterMatchFieldValueCover(matchRel:string,receipts:$.java.util.List,details:$.java.util.List):void;
            }
            type IReceiptMatchTransDetail_T = IReceiptMatchTransDetail_S & IReceiptMatchTransDetail$;
            interface IReceiptMatchTransDetail extends IReceiptMatchTransDetail_T {
            }
        }
        namespace kd.sdk.tmc.bei.extpoint.transdetail{
            interface IDeleteTransDetail_S {
            }
            interface IDeleteTransDetail$ {
                /**
                 * 添加允许删除的条件（针对交易明细实体拥有的属性）
                 *
                 * <p>扩展示例如下
                 * <pre><code>package kd.sdk.tmc.bei.extpoint.transdetail;
                 *
                 * import kd.bos.dataentity.entity.DynamicObject;
                 * import kd.bos.orm.query.QFilter;
                 *
                 * public class DeleteTransDetail implements IDeleteTransDetail{
                 *
                 *     public void getQfilterCanDelete() {
                 *         // 在交易明细上做了二开字段作为了业务控制，可以在此处设置限制交易明细哪些能被删除，避免交易明细被标准流程删除
                 *         return new QFilter("二开属性", QFilter.equals, "允许删除的条件");
                 *     }
                 * }</code></pre>
                 */
                getQfilterCanDelete():$.kd.bos.orm.query.QFilter;
            }
            type IDeleteTransDetail_T = IDeleteTransDetail_S & IDeleteTransDetail$;
            interface IDeleteTransDetail extends IDeleteTransDetail_T {
            }
            interface IFillTransDetail_S {
            }
            interface IFillTransDetail$ {
                /**
                 * 提交银企，单据生成银行单据，用于二开字段数据填充
                 * @param info 交易明细
                 * @param extData 交易明细扩展字段信息
                 *
                 * <p>扩展示例如下
                 * <pre><code>package kd.sdk.tmc.bei.extpoint.transdetail;
                 *
                 * import kd.bos.dataentity.entity.DynamicObject;
                 * import com.alibaba.fastjson.JSON;
                 * import com.alibaba.fastjson.JSONObject;
                 *
                 * public class FillTransDetail implements IFillTransDetail{
                 *
                 *     public void fillExtData(DynamicObject info,String extData) {
                 *         JSONObject jsonObject = JSON.parseObject(extData);
                 *         info.setString("",jsonObject.getString(""));
                 *     }
                 * }</code></pre>
                 */
                fillExtData(info:$.kd.bos.dataentity.entity.DynamicObject,extData:string):void;
            }
            type IFillTransDetail_T = IFillTransDetail_S & IFillTransDetail$;
            interface IFillTransDetail extends IFillTransDetail_T {
            }
        }
        namespace kd.sdk.tmc.cfm.extpoint.confirm{
            interface IConfirmListInterface_S {
            }
            interface IConfirmListInterface$ {
                /**
                 * @param dataSource 借款确认=invest, 贷款确认=cfm
                 * @return 二开增加的列名
                 *
                 * <pre>
                 * {@code
                 *     @Override
                 *     public String[] columnsName(String dataSource) {
                 *         if ("cfm".equals(dataSource)) {
                 *             return new String[]{"payintdate"};
                 *         }
                 *         return new String[0];
                 *     }
                 *  }
                 * </pre>
                 */
                columnsName?(dataSource:string):string[];
                /**
                 * @param dataSource 借款确认=invest, 贷款确认=cfm
                 * @param row 查询出来的单据数据
                 * @param objectArr 列表结果对象，根据 objectArr[2] 可判断行数据的业务确认类型
                 *
                 * @return 列表结果对象
                 *
                 * <pre>
                 * {@code
                 *     @Override
                 *     public Object[] resultObject(String dataSource, DynamicObject row, Object[] objectArr) {
                 *         if (!"cfm".equals(dataSource)) {
                 *             return objectArr;
                 *         }
                 *         Object[] objects = Arrays.copyOf(objectArr, objectArr.length+1);
                 *         if ("interest".equals(objects[2])) {
                 *             objects[objectArr.length] = row.get("bizdate");
                 *         } else {
                 *             objects[objectArr.length] = null;
                 *         }
                 *         return objects;
                 *     }
                 *  }
                 * </pre>
                 */
                resultObject?(dataSource:string,row:$.kd.bos.dataentity.entity.DynamicObject,objectArr:any[]):any[];
            }
            type IConfirmListInterface_T = IConfirmListInterface_S & IConfirmListInterface$;
            interface IConfirmListInterface extends IConfirmListInterface_T {
            }
        }
        namespace kd.sdk.tmc.cfm.extpoint.extapply{
            interface IExtApplyBillSecondDevFields_S {
            }
            interface IExtApplyBillSecondDevFields$ {
                /**
                 * @Description: 展期申请支持下推封装二开字段扩展插件 Map<String, Object> 集合中
                 * @param extApplyBill 展期申请单据
                 * @return java.util.Map<java.lang.String,java.lang.Object> 返回封装好的二开字段集合; key:目标单二开字段标识, value: 对应源单二开字段在源单上绑定的值
                 *
                 * <pre>
                 *     <code>
                 *         public class extApplyBillSecondDevFields implements IExtApplyBillSecondDevFields {
                 *
                 *                  public Map< String, Object> extApplyBillSecondDevFields(DynamicObject extApplyBill) {
                 *                  //通过extApplyBill查询对应的字段属性
                 *                  Map< String, Object> fieldMap = new HashMap<>(16);
                 *                  //基本字段
                 *                  fieldMap.put("tarprop", extApplyBill.get("srcprop"));
                 *                  //基础资料
                 *                  fieldMap.put("tarbanksdk", extApplyBill.getDynamicObject("scrbanksdk").getPkValue());
                 *                  //多选基础资料
                 *                  DynamicObjectCollection scrMulSdk = extApplyBill.getDynamicObjectCollection("scrmulsdk");
                 *                  fieldMap.put("tarmulsdk", scrMulSdk.stream().map(o -> o.getDynamicObject("fbasedataid").getPkValue()).collect(Collectors.toList()));
                 *                  return fieldMap;
                 *                  }
                 *              }
                 *     </code>
                 * </pre>
                 */
                extApplyBillSecondDevFields?(extApplyBill:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.Map;
            }
            type IExtApplyBillSecondDevFields_T = IExtApplyBillSecondDevFields_S & IExtApplyBillSecondDevFields$;
            interface IExtApplyBillSecondDevFields extends IExtApplyBillSecondDevFields_T {
            }
        }
        namespace kd.sdk.tmc.cfm.extpoint.init{
            interface IInitBillSecondDevFields_S {
            }
            interface IInitBillSecondDevFields$ {
                /**
                 * @Description: 贷款初始化单据点击结束初始化操作支持二开字段带到合同单据扩展插件
                 * @param initBill 初始化单据
                 * @param targetBill 目标单--合同/债券发行计划单
                 *
                 * <pre>
                 * {@code
                 *    public class InitBillSecondDevFields implements IInitBillSecondDevFields {
                 *
                 *        public void initBillSecondDevFields(DynamicObject initBill, DynamicObject targetBill){
                 *            // 基本字段
                 *            boolean extIsPay = initBill.getBoolean("ext_ispay");
                 *            targetBill.set("ext_ispay", extIsPay);
                 *            // 基础资料
                 *            DynamicObject extPaycurrency = initBill.getDynamicObject("ext_paycurrency");
                 *            targetBill.set("ext_paycurrency", extPaycurrency);
                 *        }
                 *    }
                 *  }
                 * </pre>
                 */
                initBillSecondDevFields?(initBill:$.kd.bos.dataentity.entity.DynamicObject,targetBill:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IInitBillSecondDevFields_T = IInitBillSecondDevFields_S & IInitBillSecondDevFields$;
            interface IInitBillSecondDevFields extends IInitBillSecondDevFields_T {
            }
        }
        namespace kd.sdk.tmc.cfm.extpoint.interestbill{
            interface ILoanIntBillBatchSecondDevFields_S {
            }
            interface ILoanIntBillBatchSecondDevFields$ {
                /**
                 * @Description: 贷款结息处理批量审核场景下二开单据targetIntBill处理
                 * @param batchIntBill 批量结息处理单 - 主单据
                 * @param loanBillEntry 放款处理单 - 分录中的单据
                 * @param targetIntBill 付息单 - 目标单据
                 *
                 * <pre>
                 * {@code
                 *    public class LoanIntBillBatchSecondDevFields implements ILoanIntBillBatchSecondDevFields {
                 *
                 *        public void loanIntBillBatchSecondDevFields(DynamicObject batchIntBill, DynamicObject loanBill, DynamicObject targetIntBill) {
                 *            // 基本字段
                 *            boolean extIsPay = loanBill.getBoolean("ext_ispay");
                 *            targetIntBill.set("ext_ispay", extIsPay);
                 *
                 *            // 基础资料
                 *            DynamicObject extPaycurrency = loanBill.getDynamicObject("ext_paycurrency");
                 *            targetIntBill.set("ext_paycurrency", extPaycurrency);
                 *        }
                 *    }
                 *  }
                 * </pre>
                 */
                loanIntBillBatchSecondDevFields?(batchIntBill:$.kd.bos.dataentity.entity.DynamicObject,loanBillEntry:$.kd.bos.dataentity.entity.DynamicObject,targetIntBill:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type ILoanIntBillBatchSecondDevFields_T = ILoanIntBillBatchSecondDevFields_S & ILoanIntBillBatchSecondDevFields$;
            interface ILoanIntBillBatchSecondDevFields extends ILoanIntBillBatchSecondDevFields_T {
            }
        }
        namespace kd.sdk.tmc.cfm.extpoint.preinst{
            interface IPreIntBillBatchSecondDevFields_S {
            }
            interface IPreIntBillBatchSecondDevFields$ {
                /**
                 * @Description: 利息预提批量处理审核场景下二开单据targetPreIntBill处理
                 * @param batchPreIntBill 利息预提批量处理 - 主单据
                 * @param loanBillEntry 放款处理单 - 分录中的单据
                 * @param targetPreIntBill 预提单 - 目标单据
                 *
                 * <pre>
                 * {@code
                 *    public class PreIntBillBatchSecondDevFields implements IPreIntBillBatchSecondDevFields {
                 *
                 *        public void preIntBillBatchSecondDevFields(DynamicObject batchPreIntBill, DynamicObject loanBill, DynamicObject targetPreIntBill) {
                 *            // 基本字段
                 *            boolean extIsPay = loanBill.getBoolean("ext_ispay");
                 *            targetPreIntBill.set("ext_ispay", extIsPay);
                 *
                 *            // 基础资料
                 *            DynamicObject extPaycurrency = loanBill.getDynamicObject("ext_paycurrency");
                 *            targetPreIntBill.set("ext_paycurrency", extPaycurrency);
                 *        }
                 *    }
                 *  }
                 * </pre>
                 */
                preIntBillBatchSecondDevFields?(batchPreIntBill:$.kd.bos.dataentity.entity.DynamicObject,loanBillEntry:$.kd.bos.dataentity.entity.DynamicObject,targetPreIntBill:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IPreIntBillBatchSecondDevFields_T = IPreIntBillBatchSecondDevFields_S & IPreIntBillBatchSecondDevFields$;
            interface IPreIntBillBatchSecondDevFields extends IPreIntBillBatchSecondDevFields_T {
            }
        }
        namespace kd.sdk.tmc.cfm.extpoint.repay{
            interface IRepayBillSecondDevFields_S {
            }
            interface IRepayBillSecondDevFields$ {
                /**
                 * Description: 还款处理的还本付息场景下二开字段封装到 Map<String, Object> 集合中
                 * @param repayBill 还款单
                 * @return java.util.Map<java.lang.String,java.lang.Object> 返回封装好的二开字段集合; key:目标单二开字段标识, value: 对应源单二开字段在源单上绑定的值
                 *
                 * <pre>
                 *     <code>
                 *         public class RepayBillSecondDevFields implements IRepayBillSecondDevFields {
                 *
                 *                  public Map< String, Object> repayBillSecondDevFields(DynamicObject repayBill) {
                 *                  //通过repayBill查询对应的字段属性
                 *                  Map< String, Object> fieldMap = new HashMap<>(16);
                 *                  //基本字段
                 *                  fieldMap.put("tarprop", repayBill.get("srcprop"));
                 *                  //基础资料
                 *                  fieldMap.put("tarbanksdk", repayBill.getDynamicObject("scrbanksdk").getPkValue());
                 *                  //多选基础资料
                 *                  DynamicObjectCollection scrMulSdk = repayBill.getDynamicObjectCollection("scrmulsdk");
                 *                  fieldMap.put("tarmulsdk", scrMulSdk.stream().map(o -> o.getDynamicObject("fbasedataid").getPkValue()).collect(Collectors.toList()));
                 *                  return fieldMap;
                 *                  }
                 *              }
                 *     </code>
                 * </pre>
                 */
                repayBillSecondDevFields?(repayBill:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.Map;
            }
            type IRepayBillSecondDevFields_T = IRepayBillSecondDevFields_S & IRepayBillSecondDevFields$;
            interface IRepayBillSecondDevFields extends IRepayBillSecondDevFields_T {
            }
        }
        namespace kd.sdk.tmc.cfm.extpoint.repayapply{
            interface IRepayApplyBillSecondDevFields_S {
            }
            interface IRepayApplyBillSecondDevFields$ {
                /**
                 * Description: 还款申请支持下推封装二开字段扩展插件 Map<String, Object> 集合中
                 * @param repayApplyBill 还款申请单据
                 * @return java.util.Map<java.lang.String,java.lang.Object> 返回封装好的二开字段集合; key:目标单二开字段标识, value: 对应源单二开字段在源单上绑定的值
                 *
                 * <pre>
                 *     <code>
                 *         public class repayApplyBillSecondDevFields implements IRepayApplyBillSecondDevFields {
                 *
                 *                  public Map< String, Object> repayApplyBillSecondDevFields(DynamicObject repayApplyBill) {
                 *                  //通过repayApplyBill查询对应的字段属性
                 *                  Map< String, Object> fieldMap = new HashMap<>(16);
                 *                  //基本字段
                 *                  fieldMap.put("tarprop", repayApplyBill.get("srcprop"));
                 *                  //基础资料
                 *                  fieldMap.put("tarbanksdk", repayApplyBill.getDynamicObject("scrbanksdk").getPkValue());
                 *                  //多选基础资料
                 *                  DynamicObjectCollection scrMulSdk = repayApplyBill.getDynamicObjectCollection("scrmulsdk");
                 *                  fieldMap.put("tarmulsdk", scrMulSdk.stream().map(o -> o.getDynamicObject("fbasedataid").getPkValue()).collect(Collectors.toList()));
                 *                  return fieldMap;
                 *                  }
                 *              }
                 *     </code>
                 * </pre>
                 */
                repayApplyBillSecondDevFields?(repayApplyBill:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.Map;
            }
            type IRepayApplyBillSecondDevFields_T = IRepayApplyBillSecondDevFields_S & IRepayApplyBillSecondDevFields$;
            interface IRepayApplyBillSecondDevFields extends IRepayApplyBillSecondDevFields_T {
            }
        }
        namespace kd.sdk.tmc.cfm.util{
            interface FeeCostParam_S {
                getSerialVersionUID():long;
            }
            type FeeCostParam_ST = $.java.io.Serializable & FeeCostParam_S;
            interface FeeCostParam_C extends FeeCostParam_ST {
                new():FeeCostParam;
            }
            interface FeeCostParam$ {
                getAmount():$.java.math.BigDecimal;
                getAmtPrecision():number;
                getBasis():string;
                getEndDate():Date;
                getFeeAmount():$.java.math.BigDecimal;
                getHtRule():string;
                getLoanRate():$.java.math.BigDecimal;
                getShareFrequency():string;
                getShareType():string;
                getStartDate():Date;
                setAmount(amount:$.java.math.BigDecimal):void;
                setAmtPrecision(amtPrecision:number):void;
                setBasis(basis:string):void;
                setEndDate(endDate:Date):void;
                setFeeAmount(feeAmount:$.java.math.BigDecimal):void;
                setHtRule(htRule:string):void;
                setLoanRate(loanRate:$.java.math.BigDecimal):void;
                setShareFrequency(shareFrequency:string):void;
                setShareType(shareType:string):void;
                setStartDate(startDate:Date):void;
            }
            type FeeCostParam_T = $.java.io.Serializable & FeeCostParam_S & FeeCostParam$;
            interface FeeCostParam extends FeeCostParam_T {
            }
            interface CostShareUtil_S {
                /**
                 * 获取摊销明细
                 * @param param 摊销数据对象
                 * @return  摊销明细
                 * @throws KDBizException
                 * <pre>
                 *     <code>
                 *     调用示例:
                 *     FeeCostParam param = new kd.sdk.tmc.cfm.util.FeeCostParam();
                 *     //业务金额
                 *     param.setAmount(amount);
                 *     //业务金额-费用总额（异币别费用，需要按汇率转成业务币别）
                 *     param.setInitCcbAmt(initCcbAmt);
                 *     //息票率
                 *     param.setLoanRate(loanRate);
                 *     //计息基准：默认算头不算尾-headnotail/算尾不算头-noheadtail/算头又算尾-headtail/头尾都不算-noheadnotail
                 *     param.setBasis(basisEnum.getValue());
                 *     //币别精度
                 *     param.setAmtPrecision(amtPrecision);
                 *     //摊销方式：实际利率法-1 直线法-2
                 *     param.setShareType(shareType);
                 *     //头尾规则：默认算头不算尾-headnotail/算尾不算头-noheadtail/算头又算尾-headtail/头尾都不算-noheadnotail
                 *     param.setHtRule("");
                 *     //开始日期
                 *     param.setStartDate(DateUtils.stringToDate("2024-05-29", DateUtils.FORMAT_YMD));
                 *     //结束日期
                 *     param.setEndDate(DateUtils.stringToDate("2026-04-09", DateUtils.FORMAT_YMD));
                 *     //摊销频率：每日-day/每月-month/每季度-quarter/每半年-halfyear/每年-year
                 *     param.setShareFrequency("month");
                 *     List<FeeCostShareInfo> costShareList =  kd.sdk.tmc.cfm.util.CostShareUtil#getCostShareList(param)
                 *     </code>
                 * </pre>
                 */
                getCostShareList(param:FeeCostParam):$.java.util.List;
            }
            interface CostShareUtil_C extends CostShareUtil_S {
                new():CostShareUtil;
            }
            interface CostShareUtil$ {
            }
            type CostShareUtil_T = CostShareUtil_S & CostShareUtil$;
            interface CostShareUtil extends CostShareUtil_T {
            }
        }
        namespace kd.sdk.tmc.cim.extpoint{
            interface IReleasePushDptRevenue_S {
            }
            interface IReleasePushDptRevenue$ {
                /**
                 * 解活单支持下推解活类型的收益单封装二开字段扩展插件 Map<String, Object> 集合中
                 * 在操作中OperateOption option中的key= SecondDevFieldVal，取出后再 Map secondDevFieldVal = JSON.parseObject("SecondDevFieldVal", Map.class)得到此方法返回map
                 * @param releaseBill 解活单
                 * @return 返回封装好的二开字段集合; key:目标单二开字段标识, value: 二开字段在源单上绑定的值
                 *
                 * <pre>
                 *     <code>
                 *           public class DepositReleasePushDptRevenue implements IReleasePushDptRevenue{
                 *               @Override
                 *               public Map<String, Object> getReleaseBillSecondFields(DynamicObject releaseBill) {
                 *                   Map<String, Object> map = new HashMap<>();
                 *                   //基本字段（非基础资料）
                 *                   map.put("ltg_text", releaseBill.get("ltg_text"));
                 *                   //基础资料
                 *                   map.put("ltg_base", releaseBill.getDynamicObject("ltg_base").getPkValue());
                 *                   return map;
                 *               }
                 *           }
                 *     </code>
                 * </pre>
                 */
                getReleaseBillSecondFields?(releaseBill:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.Map;
            }
            type IReleasePushDptRevenue_T = IReleasePushDptRevenue_S & IReleasePushDptRevenue$;
            interface IReleasePushDptRevenue extends IReleasePushDptRevenue_T {
            }
        }
        namespace kd.sdk.tmc.creditm.util.creditlimit{
            interface CreditLimitServiceUtil_S {
                /**
                 * 取消占用授信
                 *
                 * @param info SerializationUtils.toJsonString(CreditLimitInfo.class) 授信对象
                 * @return SerializationUtils.toJsonString(CreditLimitInfo.class) 授信对象
                 * @throws KDBizException 取消占用授信调用异常
                 *
                 *             <pre>
                 * <code>
                 *     调用示例:
                 *     CreditLimitInfo info = new CreditLimitInfo();
                 *     info.setXXX(XXX);
                 *     ...
                 *     kd.sdk.tmc.creditm.util.creditlimit.CreditLimitServiceUtil.cancelCreditLimit(SerializationUtils.toJsonString(info));
                 * </code>
                 *             </pre>
                 */
                cancelCreditLimit(info:string):string;
                /**
                 * 取消返还授信
                 *
                 * @param info SerializationUtils.toJsonString(ReturnCreditLimitInfo.class) 返还授信对象
                 * @return SerializationUtils.toJsonString(ReturnCreditLimitInfo.class) 返还授信对象
                 * @throws KDBizException 取消返还授信调用异常
                 *
                 *             <pre>
                 * <code>
                 *     调用示例:
                 *     ReturnCreditLimitInfo info = new ReturnCreditLimitInfo();
                 *     info.setXXX(XXX);
                 *     ...
                 *     kd.sdk.tmc.creditm.util.creditlimit.CreditLimitServiceUtil.cancelReturnCreditLimit(SerializationUtils.toJsonString(info));
                 * </code>
                 *             </pre>
                 */
                cancelReturnCreditLimit(info:string):string;
                /**
                 * 确认占用授信
                 *
                 * @param  info SerializationUtils.toJsonString(CreditLimitInfo.class) 授信对象
                 * @return SerializationUtils.toJsonString(CreditLimitInfo.class) 授信对象
                 * @throws KDBizException 确认占用授信调用异常
                 *
                 *             <pre>
                 * <code>
                 *     调用示例:
                 *     CreditLimitInfo info = new CreditLimitInfo();
                 *     info.setXXX(XXX);
                 *     ...
                 *     kd.sdk.tmc.creditm.util.creditlimit.CreditLimitServiceUtil.confirmCreditLimit(SerializationUtils.toJsonString(info));
                 * </code>
                 *             </pre>
                 */
                confirmCreditLimit(info:string):string;
                /**
                 * 返还授信
                 *
                 * @param info SerializationUtils.toJsonString(ReturnCreditLimitInfo.class) 返还授信对象
                 * @return SerializationUtils.toJsonString(ReturnCreditLimitInfo.class) 返还授信对象
                 * @throws KDBizException 返还授信调用异常
                 *
                 *             <pre>
                 * <code>
                 *     调用示例:
                 *     ReturnCreditLimitInfo info = new ReturnCreditLimitInfo();
                 *     info.setXXX(XXX);
                 *     ...
                 *     kd.sdk.tmc.creditm.util.creditlimit.CreditLimitServiceUtil.returnCreditLimit(SerializationUtils.toJsonString(info));
                 * </code>
                 *             </pre>
                 */
                returnCreditLimit(info:string):string;
                /**
                 * 释放授信根据指定金额
                 *
                 * @param info SerializationUtils.toJsonString(CreditLimitUseBean.class) 授信对象
                 * @return SerializationUtils.toJsonString(CreditLimitUseBean.class) 授信对象
                 * @throws KDBizException 释放授信根据指定金额调用异常
                 *
                 *             <pre>
                 * <code>
                 *     调用示例:
                 *     CreditLimitUseBean info = new CreditLimitUseBean();
                 *     info.setXXX(XXX);
                 *     ...
                 *     kd.sdk.tmc.creditm.util.creditlimit.CreditLimitServiceUtil.updateCreditLimitUse(SerializationUtils.toJsonString(info));
                 * </code>
                 *             </pre>
                 */
                updateCreditLimitUse(info:string):string;
            }
            interface CreditLimitServiceUtil_C extends CreditLimitServiceUtil_S {
                new():CreditLimitServiceUtil;
            }
            interface CreditLimitServiceUtil$ {
            }
            type CreditLimitServiceUtil_T = CreditLimitServiceUtil_S & CreditLimitServiceUtil$;
            interface CreditLimitServiceUtil extends CreditLimitServiceUtil_T {
            }
        }
        namespace kd.sdk.tmc.ext.extpoint.committobe{
            interface IGenBankBillSDKService_S {
            }
            interface IGenBankBillSDKService$ {
                /**
                 * 提交银企，单据生成银行单据，用于二开字段数据填充
                 * @param entityName 单据实体名
                 * @param billList 单据集合
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
        }
        namespace kd.sdk.tmc.fbp.extpoint{
            interface IFeeDetailSaveAndSubmitAddFields_S {
            }
            interface IFeeDetailSaveAndSubmitAddFields$ {
                /**
                 * @param feeBill 费用明细单据
                 * @param row 费用明细单据的分录行
                 * @param feeDetailRow 业务单据的费用明细页签的要保存的行
                 *
                 * <pre>
                 *      <code>
                 *            public class FeeDetailSecondDevFields implements IFeeDetailSaveAndSubmitAddFields {
                 *
                 *              public void feeDetailSaveAndSubmitAddFields(DynamicObject feeBill,DynamicObject row, DynamicObject feeDetailRow) {
                 *                   //单头
                 *                   feeBill.set("test",feeDetailRow.get("test"));
                 *                  //分录
                 *                  row.set("test",feeDetailRow.get("test"));
                 *              }
                 *            }
                 *      </code>
                 * </pre>
                 */
                feeDetailSaveAndSubmitAddFields?(feeBill:$.kd.bos.dataentity.entity.DynamicObject,row:$.kd.bos.dataentity.entity.DynamicObject,feeDetailRow:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IFeeDetailSaveAndSubmitAddFields_T = IFeeDetailSaveAndSubmitAddFields_S & IFeeDetailSaveAndSubmitAddFields$;
            interface IFeeDetailSaveAndSubmitAddFields extends IFeeDetailSaveAndSubmitAddFields_T {
            }
        }
        namespace kd.sdk.tmc.fca.extpoint{
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
                 *    import kd.sdk.tmc.fca.extpoint.ITranSupBillVoucher;
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
            interface IBalanceService_S {
            }
            interface IBalanceService$ {
                /**
                 * <p>Title: BalanceService.java </p>
                 * <pre>Description: 资金调度计算划拨金额，即时余额二开扩展 </pre>
                 *
                 * @param transferType 划拨类型 UP上划，DOWN 下拨
                 * @param strategyId   划拨策略ID
                 * @param accountId    账户ID
                 * @param currencyId   币别ID
                 * @return 账户余额
                 * <pre>
                 *      <code>
                 *            public class BalanceService implements IBalanceService {
                 *              @Override
                 *              public BigDecimal getBalanceAmount(String transferType, Long strategyId, Long accountId, Long currencyId) {
                 *                   return BigDecimal.ONE
                 *              }
                 *            }
                 *      </code>
                 * </pre>
                 */
                getBalanceAmount(transferType:string,strategyId:long,accountId:long,currencyId:long):$.java.math.BigDecimal;
            }
            type IBalanceService_T = IBalanceService_S & IBalanceService$;
            interface IBalanceService extends IBalanceService_T {
            }
        }
        namespace kd.sdk.tmc.fcs.extpoint.paymonitor{
            interface IRelationShipJob_S {
            }
            interface IRelationShipJob$ {
                /**
                 * @param srcObj 源单查询对象
                 * @param destObj 目标单查询对象：查询自身关系时有值，查询外部关系无值
                 * @param flag 无关联关系结果标签："NotLink"-没有查到searchA的关联数据；"HasLinkButNotFound"-有查到关联数据，但是没有发现searchA与searchB存在关系
                 */
                doExt(srcObj:string,destObj:string,flag:string):void;
            }
            type IRelationShipJob_T = IRelationShipJob_S & IRelationShipJob$;
            interface IRelationShipJob extends IRelationShipJob_T {
            }
        }
        namespace kd.sdk.tmc.ifm.expoint{
            interface IInstBalanceCalcSecondDev_S {
            }
            interface IInstBalanceCalcSecondDev$ {
                /**
                 * 活期计息利息计算余额封装二开处理
                 * @param innerAcct 余额信息列表
                 * @param currency 币别
                 * @param beginDate 开始日期
                 * @param endDate 结束日期
                 *
                 * <pre>
                 * {@code
                 *   public class InstBalanceCalcSecondDev implements IInstBalanceCalcSecondDev {
                 *       @Override
                 *       public List<ExtPlanCallResult> getExtInstBalance(DynamicObject innerAcct, DynamicObject currency,
                 *                                                          Date beginDate, Date endDate) {
                 *           List<ExtPlanCallResult> results = new ArrayList<>();
                 *           results.add(new ExtPlanCallResult(new Date(), new BigDecimal(100)));
                 *           return results;
                 *       }
                 *   }
                 * </pre>
                 */
                getExtInstBalance?(innerAcct:$.kd.bos.dataentity.entity.DynamicObject,currency:$.kd.bos.dataentity.entity.DynamicObject,beginDate:Date,endDate:Date):$.java.util.List;
            }
            type IInstBalanceCalcSecondDev_T = IInstBalanceCalcSecondDev_S & IInstBalanceCalcSecondDev$;
            interface IInstBalanceCalcSecondDev extends IInstBalanceCalcSecondDev_T {
            }
        }
        namespace kd.sdk.tmc.mon.extpoint.mobile{
            interface IMobileSecondaryDevCard_S {
            }
            interface IMobileSecondaryDevCard$ {
                /**
                 * 调整 自定义首页卡片信息
                 *
                 * @param cardMap 调整前卡片信息
                 * @return 调整后卡片 key:卡片元数据标识 value:标题
                 *
                 * <p> 扩展示例如下 </p>
                 * <pre>
                 *     <code>
                 *         public class MonMobileSecondaryDevCardTest implements IMobileSecondaryDevCard {
                 *
                 *              @Override
                 *              public Map<String, String> adjustCard(Map<String, String> cardMap) {
                 *                  cardMap.put("ssc_inte_audit_card_m", "智能审单率卡片");
                 *                  return cardMap;
                 *              }
                 *
                 *        }
                 *     </code>
                 * </pre>
                 */
                adjustCard?(cardMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 调整 卡片权限
                 *
                 * @param permMap 调整前 卡片权限信息
                 * @return 调整后卡片权限信息 key:卡片元数据标识 value:权限项
                 *
                 * <p> 扩展示例如下 </p>
                 * <pre>
                 *     <code>
                 *         public class MonMobileSecondaryDevCardTest implements IMobileSecondaryDevCard {
                 *
                 *                  @Override
                 *                  public Map<String, String> adjustCardPerm(Map<String, String> permMap) {
                 *                      permMap.remove("mon_business_monitoring_m");
                 *                      return permMap;
                 *                  }
                 *
                 *        }
                 *     </code>
                 * </pre>
                 */
                adjustCardPerm?(permMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 调整 主题 卡片
                 *
                 * @param subject 主题标识 @see kd.tmc.mon.formplugin.mobile.card.SubjectEnum
                 * @param cards   卡片集合
                 * @return <p> 扩展示例如下 </p>
                 * <pre>
                 *     <code>
                 *         public class MonMobileSecondaryDevCardTest implements IMobileSecondaryDevCard {
                 *
                 *                      @Override
                 *                      public List<String> adjustSubject(String subject, List<String> cards) {
                 *                          if ("STOCKANALYSIS".equals(subject)) {
                 *                              cards.add("mon_incexprank_card");
                 *                           }
                 *                          return cards;
                 *                      }
                 *
                 *        }
                 *     </code>
                 * </pre>
                 */
                adjustSubject?(subject:string,cards:$.java.util.List):$.java.util.List;
            }
            type IMobileSecondaryDevCard_T = IMobileSecondaryDevCard_S & IMobileSecondaryDevCard$;
            interface IMobileSecondaryDevCard extends IMobileSecondaryDevCard_T {
            }
        }
        namespace kd.sdk.tmc.psd.extpoint{
            interface IPayScheduleSelectBill_S {
            }
            interface IPayScheduleSelectBill$ {
                /**
                 * 排程选票
                 * 选票时机-背书付款：在标品自动排票规则之间加入自定义选票逻辑
                 * 步骤：
                 * 1，结算方式、金额、币别、票据到期日、是否直联票据过滤；
                 * 2，根据1的结果传入selectBills，获取接口返回的结果
                 * 3，根据2的结果进行最后的选票：金额优先/日期优先排序等
                 * @param selectBillParam 选票入参
                 * @return 票据id集合
                 */
                selectBills?(selectBillParam:kd.sdk.tmc.psd.extpoint.param.SelectBillParam):$.java.util.Set;
            }
            type IPayScheduleSelectBill_T = IPayScheduleSelectBill_S & IPayScheduleSelectBill$;
            interface IPayScheduleSelectBill extends IPayScheduleSelectBill_T {
            }
        }
        namespace kd.sdk.tmc.psd.extpoint.param{
            interface SelectBillParam_S {
            }
            type SelectBillParam_ST = $.java.io.Serializable & SelectBillParam_S;
            interface SelectBillParam_C extends SelectBillParam_ST {
                new(payScheduleInfo:PayScheduleInfo):SelectBillParam;
            }
            interface SelectBillParam$ {
                getMergeScheduleList():$.java.util.List;
                getPayScheduleInfo():PayScheduleInfo;
                getSelectBillIds():$.java.util.Set;
                setMergeScheduleList(mergeScheduleList:$.java.util.List):void;
                setPayScheduleInfo(payScheduleInfo:PayScheduleInfo):void;
                setSelectBillIds(selectBillIds:$.java.util.Set):void;
            }
            type SelectBillParam_T = $.java.io.Serializable & SelectBillParam_S & SelectBillParam$;
            interface SelectBillParam extends SelectBillParam_T {
            }
            interface PayScheduleInfo_S {
            }
            type PayScheduleInfo_ST = $.java.io.Serializable & PayScheduleInfo_S;
            interface PayScheduleInfo_C extends PayScheduleInfo_ST {
                new(dataMap:$.java.util.Map):PayScheduleInfo;
            }
            interface PayScheduleInfo$ {
                getCalcProp(scheduleCalcProp:string):PaySchedulePropVal;
                getCalcPropVal(scheduleCalcProp:string):any;
                getDataMap():$.java.util.Map;
            }
            type PayScheduleInfo_T = $.java.io.Serializable & PayScheduleInfo_S & PayScheduleInfo$;
            interface PayScheduleInfo extends PayScheduleInfo_T {
            }
            interface PaySchedulePropVal_S {
            }
            type PaySchedulePropVal_ST = $.java.io.Serializable & PaySchedulePropVal_S;
            interface PaySchedulePropVal_C extends PaySchedulePropVal_ST {
                new():PaySchedulePropVal;
            }
            interface PaySchedulePropVal$ {
                getData():any;
                getPayScheDataSetting():string;
                getScheCalcProp():string;
                getScheProp():string;
                isCombineUnique():boolean;
                isEditable():boolean;
                isVisible():boolean;
                setCombineUnique(combineUnique:boolean):void;
                setData(arg0:any):void;
                setEditable(editable:boolean):void;
                setPayScheDataSetting(payScheDataSetting:string):void;
                setScheCalcProp(scheCalcProp:string):void;
                setScheProp(scheProp:string):void;
                setVisible(visible:boolean):void;
            }
            type PaySchedulePropVal_T = $.java.io.Serializable & PaySchedulePropVal_S & PaySchedulePropVal$;
            interface PaySchedulePropVal extends PaySchedulePropVal_T {
            }
        }
        namespace kd.sdk.tmc.psd.extpoint.task{
            interface IAssemblySecondaryDevFields_S {
            }
            interface IAssemblySecondaryDevFields$ {
                /**
                 * 排程处理单二开字段封装到 Map<String, Object> 集合中
                 * @param schebill 排程处理单动态对象
                 * @return java.util.Map<java.lang.String,java.lang.Object> 返回封装好的二开字段集合; key:二开字段标识, value: 对应二开字段绑定的值
                 *
                 * <p>扩展示例如下
                 *        <pre><code>
                 *        import kd.bos.dataentity.entity.DynamicObject;
                 *        import java.util.HashMap;
                 *        import java.util.Map;
                 *
                 *        public class AssemblySecondaryDevFields_Demo implements IAssemblySecondaryDevFields {
                 *
                 *            public Map<String, Object> assemblySecondaryDevFields(DynamicObject schebill) {
                 *                Map<String, Object> fieldMap = new HashMap<>(16);
                 *                fieldMap.put("a1", schebill.getString("xxxx1"));
                 *                fieldMap.put("a2", schebill.getString("xxxx2"));
                 *                fieldMap.put("a3", schebill.getString("xxxx3"));
                 *                return fieldMap;
                 *            }
                 *        }
                 *
                 *        </code></pre>
                 */
                assemblySecondaryDevFields?(schebill:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.Map;
            }
            type IAssemblySecondaryDevFields_T = IAssemblySecondaryDevFields_S & IAssemblySecondaryDevFields$;
            interface IAssemblySecondaryDevFields extends IAssemblySecondaryDevFields_T {
            }
        }
        namespace kd.sdk.tmc.tda.extpoint.arap{
            interface IArApTopCustSuppInterface_S {
            }
            interface IArApTopCustSuppInterface$ {
                /**
                 * @param propertyName 客户：customername  供应商：suppliername
                 * @return 过滤器
                 * <p>默认拓展示例如下
                 * <pre><code>
                 * package kd.tmc.tda.report.arap.extpoint;
                 *
                 * import kd.bos.algo.FilterFunction;
                 * import kd.bos.algo.Row;
                 * import kd.bos.dataentity.resource.ResManager;
                 * import kd.sdk.tmc.tda.extpoint.arap.IArApTopCustSuppInterface;
                 *
                 * public class ArApTopCustSuppDefaultExt implements IArApTopCustSuppInterface {
                 *
                 *     // 客户名称字段
                 *     private static final String CUSTOMER_FIELD = "customername";
                 *     // 供应商名称字段
                 *     private static final String SUPPLIER_FIELD = "suppliername";
                 *
                 *     public FilterFunction buildExtendFilter(String propertyName) {
                 *         return new FilterFunction() {
                 *
                 *            public boolean test(Row row) {
                 *                 String customerName = row.getString(propertyName);
                 *                 // 剔除包含特殊字符的客户
                 *                 if (customerName != null && CUSTOMER_FIELD.equals(propertyName)) {
                 *                     return !customerName.contains(getSpecialChar0()) && !customerName.contains(getSpecialChar1()) &&
                 *                             !customerName.contains(getSpecialChar2()) && !customerName.contains(getSpecialChar3()) &&
                 *                             !customerName.contains(getSpecialChar5());
                 *                 } else if (customerName != null && SUPPLIER_FIELD.equals(propertyName)) {   // 剔除包含特殊字符的供应商
                 *                     return !customerName.contains(getSpecialChar0()) && !customerName.contains(getSpecialChar1()) &&
                 *                             !customerName.contains(getSpecialChar2()) && !customerName.contains(getSpecialChar3()) &&
                 *                             !customerName.contains(getSpecialChar4());
                 *                 }
                 *                 return false;
                 *             }
                 *         };
                 *     }
                 *
                 *     private String getSpecialChar0() {
                 *         return ResManager.loadKDString("0万", "ArApTopCustSuppDefaultExt_0", "tmc-tda-report");
                 *     }
                 *
                 *     private String getSpecialChar1() {
                 *         return ResManager.loadKDString("其他", "ArApTopCustSuppDefaultExt_1", "tmc-tda-report");
                 *     }
                 *
                 *     private String getSpecialChar2() {
                 *         return ResManager.loadKDString("外部", "ArApTopCustSuppDefaultExt_2", "tmc-tda-report");
                 *     }
                 *
                 *     private String getSpecialChar3() {
                 *         return ResManager.loadKDString("客户", "ArApTopCustSuppDefaultExt_3", "tmc-tda-report");
                 *     }
                 *
                 *     private String getSpecialChar4() {
                 *         return ResManager.loadKDString("供应商", "ArApTopCustSuppDefaultExt_4", "tmc-tda-report");
                 *     }
                 *
                 *     private String getSpecialChar5() {
                 *         return ResManager.loadKDString("收入", "ArApTopCustSuppDefaultExt_5", "tmc-tda-report");
                 *     }
                 *
                 * }
                 *
                 * </pre></code>
                 * </p>
                 */
                buildExtendFilter(propertyName:string):$.kd.bos.algo.FilterFunction;
            }
            type IArApTopCustSuppInterface_T = IArApTopCustSuppInterface_S & IArApTopCustSuppInterface$;
            interface IArApTopCustSuppInterface extends IArApTopCustSuppInterface_T {
            }
        }
        namespace kd.sdk.tmc.tda.extpoint.bankacct{
            interface IBankAcctByBankInterfaceRPA_S {
            }
            interface IBankAcctByBankInterfaceRPA$ {
                /**
                 * 通过银行账户ID查询对应账户绑定RPA个数
                 *
                 * @param param Map<Sting,Object> key：acctIds，value：需要查询的银行账户ID集合
                 * @return DataSet。共两列，列名依次为：acct_id（银行账户ID）、rpa_count（RPA个数）
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.tmc.tda.report.bankacct.extpoint;
                 *
                 * import kd.bos.algo.DataSet;
                 * import kd.bos.orm.query.QCP;
                 * import kd.bos.orm.query.QFilter;
                 * import kd.bos.servicehelper.QueryServiceHelper;
                 * import kd.sdk.tmc.tda.extpoint.bankacct.IBankAcctByBankInterfaceRPA;
                 *
                 * import java.util.List;
                 * import java.util.Map;
                 *
                 * public class BankInterfaceRPATestExt implements IBankAcctByBankInterfaceRPA {
                 *
                 *     public DataSet queryRPADataSet(Map<String, Object> param) {
                 *         List<Long> acctIds = (List<Long>) param.get("acctIds");
                 *
                 *         // 默认通过网银登录信息维护银行账户RPA数据，则查询元数据标识 bcr_bankudset
                 *         DataSet rpaDataSet = QueryServiceHelper.queryDataSet("BankAcctByBankInterfaceSum", "bcr_bankudset",
                 *                 "entry.acctbank acct_id", new QFilter[]{new QFilter("entry.acctbank", QCP.in, acctIds)}, null);
                 *         DataSet rpaCountSet = rpaDataSet.groupBy(new String[]{"acct_id"}).countDistinct(new String[]{"acct_id"}, "rpa_count").finish();
                 *         return rpaCountSet;
                 *     }
                 * }
                 * </pre></code>
                 * </p>
                 */
                queryRPADataSet(param:$.java.util.Map):$.kd.bos.algo.DataSet;
            }
            type IBankAcctByBankInterfaceRPA_T = IBankAcctByBankInterfaceRPA_S & IBankAcctByBankInterfaceRPA$;
            interface IBankAcctByBankInterfaceRPA extends IBankAcctByBankInterfaceRPA_T {
            }
            interface IParentAcctInterface_S {
            }
            interface IParentAcctInterface$ {
                /**
                 * 通过组织视图获取所有母账户id
                 *
                 * @param param Map<Sting,Object> key：orgview，value：组织视图对象
                 * @return List<Long>所有的母账户id集合
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.tmc.tda.report.bankacct.extpoint;
                 *
                 * import java.util.ArrayList;
                 * import java.util.Arrays;
                 * import java.util.Collections;
                 * import java.util.List;
                 * import java.util.Map;
                 * import java.util.stream.Collectors;
                 *
                 * import kd.bos.dataentity.entity.DynamicObject;
                 * import kd.bos.orm.query.QCP;
                 * import kd.bos.orm.query.QFilter;
                 * import kd.tmc.fbp.common.helper.TmcDataServiceHelper;
                 * import kd.tmc.fbp.common.helper.TmcOrgDataHelper;
                 * import kd.tmc.fbp.common.util.EmptyUtil;
                 * import kd.tmc.tda.common.propertys.DecisionAnlsVersionProp;
                 * import kd.sdk.tmc.tda.extpoint.bankacct.IParentAcctInterface;
                 *
                 * public class ParentAcctDefaultExt implements IParentAcctInterface {
                 *
                 * 	public List<Long> getParentAcct(Map<String, Object> paramMap) {
                 * 		List<Long> acctIds = new ArrayList<>();
                 * 		Long orgviewId = ((DynamicObject) paramMap.get(DecisionAnlsVersionProp.ORGVIEW)).getLong("id");
                 *         Long orgId = ((DynamicObject) paramMap.get(DecisionAnlsVersionProp.ORG)).getLong("id");
                 *         List<Long> orgIds =  TmcOrgDataHelper.getAllSubordinateOrgs(orgviewId, Collections.singletonList(orgId), true);
                 * 		QFilter filter = new QFilter("company", QCP.in, orgIds);
                 * 		DynamicObject[] accts = TmcDataServiceHelper.load("fca_acctgroup","id",filter.toArray());
                 * 		if(EmptyUtil.isNoEmpty(accts)) {//查出组织视图下的所有母账户
                 *             acctIds = Arrays.stream(accts).map(p->p.getLong("id")).collect(Collectors.toList());
                 *         }
                 * 		return acctIds;
                 * 	}
                 * }
                 * </pre></code>
                 * </p>
                 */
                getParentAcct(param:$.java.util.Map):$.java.util.List;
            }
            type IParentAcctInterface_T = IParentAcctInterface_S & IParentAcctInterface$;
            interface IParentAcctInterface extends IParentAcctInterface_T {
            }
            interface IBankAcctInterface_S {
            }
            interface IBankAcctInterface$ {
                /**
                 * 账户明细表字段列扩展
                 * 扩展报表列，其中fieldKey与明细DataSet中fieldname相对应；列名称为多语言文本；可根据需要设置列数据类型
                 *
                 * @param fieldColumns
                 * @return 扩展后的明细报表列
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.tmc.tda.report.bankacct.extpoint;
                 *
                 * import kd.bos.algo.DataSet;
                 * import kd.bos.dataentity.entity.LocaleString;
                 * import kd.bos.dataentity.resource.ResManager;
                 * import kd.bos.entity.report.AbstractReportColumn;
                 * import kd.bos.entity.report.ReportColumn;
                 * import kd.bos.orm.query.QCP;
                 * import kd.bos.orm.query.QFilter;
                 * import kd.sdk.tmc.tda.extpoint.bankacct.IBankAcctInterface;
                 *
                 * import java.util.List;
                 *
                 * public class BankAcctInterfaceDefaultExt implements IBankAcctInterface {
                 *
                 *     public List<Object[]> detailColumnItemsExt(List<Object[]> fieldColumns) {
                 *         fieldColumns.add(new Object[]{"fieldKey", ResManager.loadKDString("列名称", "AcctDetailDataListPlugin_20", "tmc-tda-report"), ReportColumn.TYPE_TEXT, false,});
                 *         fieldColumns.add(new Object[]{"fieldKey", ResManager.loadKDString("列名称", "AcctDetailDataListPlugin_20", "tmc-tda-report"), ReportColumn.TYPE_TEXT, false,});
                 *         return fieldColumns;
                 *     }
                 * }
                 * </pre></code>
                 * </p>
                 */
                detailColumnItemsExt?(fieldColumns:$.java.util.List):$.java.util.List;
                /**
                 * 账户运营元数据扩展
                 * 默认查询bd_accountbanks（银行账户），有特殊账户查询场景时需替换元数据标识即可。
                 *
                 * @return 元数据标识字符串
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.tmc.tda.report.bankacct.extpoint;
                 *
                 * import kd.sdk.tmc.tda.extpoint.bankacct.IBankAcctInterface;
                 *
                 * public class BankAcctInterfaceDefaultExt implements IBankAcctInterface {
                 *
                 *      public String metadataSignExt() {
                 *  	    // 账户查询元数据
                 *  	    return am_accountbank;
                 *      }
                 * }
                 * </pre></code>
                 * </p>
                 */
                metadataSignExt?():string;
                /**
                 * 账户查询过滤条件扩展
                 * 在原有QFilter的基础上扩展自定义QFilter
                 *
                 * @param qFilter
                 * @return 扩展后的qFilter
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.tmc.tda.report.bankacct.extpoint;
                 *
                 * import kd.bos.algo.DataSet;
                 * import kd.bos.dataentity.entity.LocaleString;
                 * import kd.bos.dataentity.resource.ResManager;
                 * import kd.bos.entity.report.AbstractReportColumn;
                 * import kd.bos.entity.report.ReportColumn;
                 * import kd.bos.orm.query.QCP;
                 * import kd.bos.orm.query.QFilter;
                 * import kd.sdk.tmc.tda.extpoint.bankacct.IBankAcctInterface;
                 *
                 * import java.util.List;
                 *
                 * public class BankAcctInterfaceDefaultExt implements IBankAcctInterface {
                 *
                 *     public QFilter qFilterExt(QFilter qFilter) {
                 *         return qFilter.and("1", QCP.equals, 1);
                 *     }
                 * }
                 * </pre></code>
                 * </p>
                 */
                qFilterExt?(qFilter:$.kd.bos.orm.query.QFilter):$.kd.bos.orm.query.QFilter;
                /**
                 * 报表列扩展
                 * 用于动态创建报表列，列标识fieldKey与报表数据DataSet中fieldname相对应
                 *
                 * @param columns
                 * @return 扩展后的columns
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.tmc.tda.report.bankacct.extpoint;
                 *
                 * import kd.bos.algo.DataSet;
                 * import kd.bos.dataentity.entity.LocaleString;
                 * import kd.bos.dataentity.resource.ResManager;
                 * import kd.bos.entity.report.AbstractReportColumn;
                 * import kd.bos.entity.report.ReportColumn;
                 * import kd.bos.orm.query.QCP;
                 * import kd.bos.orm.query.QFilter;
                 * import kd.sdk.tmc.tda.extpoint.bankacct.IBankAcctInterface;
                 *
                 * import java.util.List;
                 *
                 * public class BankAcctInterfaceDefaultExt implements IBankAcctInterface {
                 *
                 *     public List<AbstractReportColumn> reportColumnsExt(List<AbstractReportColumn> columns) {
                 *         columns.add(createColumn("fieldKey", "动态测试列", false));
                 *         return columns;
                 *     }
                 *
                 * 	private ReportColumn createColumn(String fieldKey, String caption, boolean isHide) {
                 *         ReportColumn reportColumn = new ReportColumn();
                 *         // 列标识
                 *         reportColumn.setFieldKey(fieldKey);
                 *         // 报表列数据类型
                 *         reportColumn.setFieldType(ReportColumn.TYPE_INTEGER);
                 *         // 列值为0是否显示
                 *         reportColumn.setZeroShow(true);
                 *         // 列名称
                 *         reportColumn.setCaption(new LocaleString(caption));
                 *         // 列是否隐藏
                 *         reportColumn.setHide(isHide);
                 *         return reportColumn;
                 *     }
                 * }
                 * </pre></code>
                 * </p>
                 */
                reportColumnsExt?(columns:$.java.util.List):$.java.util.List;
                /**
                 * @param dataSet
                 * @param queryParam
                 * @return
                 */
                reportDataSetExt?(dataSet:$.kd.bos.algo.DataSet,queryParam:$.kd.bos.entity.report.ReportQueryParam):$.kd.bos.algo.DataSet;
                /**
                 * 账户查询字段扩展
                 * 自定义扩展字段，也可对查询字段重命名，形如：field1 as fd1
                 *
                 * @return 查询字段字符串，以英文逗号分隔
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.tmc.tda.report.bankacct.extpoint;
                 *
                 * import kd.bos.algo.DataSet;
                 * import kd.bos.dataentity.entity.LocaleString;
                 * import kd.bos.dataentity.resource.ResManager;
                 * import kd.bos.entity.report.AbstractReportColumn;
                 * import kd.bos.entity.report.ReportColumn;
                 * import kd.bos.orm.query.QCP;
                 * import kd.bos.orm.query.QFilter;
                 * import kd.sdk.tmc.tda.extpoint.bankacct.IBankAcctInterface;
                 *
                 * import java.util.List;
                 *
                 * public class BankAcctInterfaceDefaultExt implements IBankAcctInterface {
                 *
                 *     public String selectFieldsExt() {
                 *         return "field1 as fd1, field2";
                 *     }
                 * }
                 * </pre></code>
                 * </p>
                 */
                selectFieldsExt?():string;
            }
            type IBankAcctInterface_T = IBankAcctInterface_S & IBankAcctInterface$;
            interface IBankAcctInterface extends IBankAcctInterface_T {
            }
        }
        namespace kd.sdk.tmc.tda.extpoint.credit{
            interface ICreditGetDataInterface_S {
            }
            interface ICreditGetDataInterface$ {
                /**
                 * 查询授信额度自定义条件
                 *
                 * @return 自定义条件
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.tmc.tda.report.credit.extpoint;
                 *
                 * import kd.bos.orm.query.QFilter;
                 * import kd.sdk.tmc.tda.extpoint.credit.ICreditGetDataInterface;
                 *
                 * public class CreditGetDataDefaultExt implements ICreditGetDataInterface {
                 *
                 *     public QFilter getTdaCreditExtendFilter(QFilter qFilter) {
                 *     	 // 返回自定义的QFilter
                 *         return qFilter.and("1", QCP.equals, 1);
                 *     }
                 * }
                 * </pre></code>
                 * </p>
                 */
                getTdaCreditExtendFilter(qFilter:$.kd.bos.orm.query.QFilter):$.kd.bos.orm.query.QFilter;
            }
            type ICreditGetDataInterface_T = ICreditGetDataInterface_S & ICreditGetDataInterface$;
            interface ICreditGetDataInterface extends ICreditGetDataInterface_T {
            }
        }
        namespace kd.sdk.tmc.tda.extpoint.finance{
            interface IFinanceLeaseSourceInterface_S {
            }
            interface IFinanceLeaseSourceInterface$ {
                /**
                 *  决策分析融资租赁取数源表单标识拓展
                 *
                 *  @return String 融资租赁取数表单标识
                 *
                 *  <p>默认扩展示例如下
                 *  <pre><code>
                 * package kd.tmc.tda.common.extpoint;
                 *
                 * import kd.sdk.tmc.tda.extpoint.finance.IFinanceLeaseSourceInterface;
                 *
                 * public class FinanceLeaseSourceDefaultExt implements IFinanceLeaseSourceInterface {
                 *
                 *    public String getFormId() {
                 *        return "fa_lease_contract";
                 *    }
                 *  }
                 *  </pre></code>
                 *  </p>
                 */
                getFormId():string;
            }
            type IFinanceLeaseSourceInterface_T = IFinanceLeaseSourceInterface_S & IFinanceLeaseSourceInterface$;
            interface IFinanceLeaseSourceInterface extends IFinanceLeaseSourceInterface_T {
            }
            interface IFinanceSourceReBuildInterface_S {
            }
            interface IFinanceSourceReBuildInterface$ {
                /**
                 * 决策分析融资分析集团内财务公司数据和融资租赁数据源重新分组扩展接口
                 *
                 * @param sources DataSet[] 第一个DataSet是财务公司数据源，第二个DataSet是融资租赁分组的数据源
                 *
                 * @return DataSet[] 重新分组后结果，第一个是财务公司数据DataSet和第二个是融资租赁数据DataSet
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 *
                 * package kd.sdk.tmc.tda.extpoint.finance;
                 *
                 * import kd.bos.algo.DataSet;
                 *
                 * public class FinanceSourceReBuildDefaultExt implements IFinanceSourceReBuildInterface {
                 *
                 *     public DataSet[] rebuildDataSet(DataSet[] sources) {
                 *         //财务公司
                 *         DataSet finComDataSet = sources[0];
                 *         //融资租赁
                 *         DataSet leaseDataSet = sources[1];
                 *         //将财务公司中要移到招商租赁的数据分割出来 ("billno = '融资租赁单据标号'")这个条件现场自己根据业务写
                 *         DataSet[] splitDataSet = finComDataSet.splitByFilter(new String[]{"billno = '融资租赁单据标号'"}, true);
                 *         //分割出来的融资租赁数据
                 *         DataSet leaseExtDataSet = splitDataSet[0];
                 *         //分割后剩下的财务公司的数据
                 *         DataSet newFinComDataSet = splitDataSet[1];
                 *         //重新合并融资租赁数据
                 *         DataSet newLeaseDataSet = leaseDataSet.union(leaseExtDataSet);
                 *         return new DataSet[]{newFinComDataSet, newLeaseDataSet};
                 *     }
                 * }
                 * </pre></code>
                 * </p>
                 */
                rebuildDataSet(sources:$.kd.bos.algo.DataSet[]):$.kd.bos.algo.DataSet[];
            }
            type IFinanceSourceReBuildInterface_T = IFinanceSourceReBuildInterface_S & IFinanceSourceReBuildInterface$;
            interface IFinanceSourceReBuildInterface extends IFinanceSourceReBuildInterface_T {
            }
            interface IFinanceDataFilter_S {
            }
            interface IFinanceDataFilter$ {
                /**
                 *  决策分析融资统一取数过滤企业借款
                 *
                 *  @return String dataset过滤条件
                 *
                 *  <p>默认扩展示例如下
                 *  <pre><code>
                 * package kd.tmc.tda.common.extpoint;
                 *
                 * import kd.sdk.tmc.tda.extpoint.finance.IFinanceDataFilter;
                 *
                 * public class FinanceDataExcludeCompany implements IFinanceDataFilter {
                 *
                 *    public String getFilter() {
                 *        return "financetype != 2";
                 *    }
                 *  }
                 *  </pre></code>
                 *  </p>
                 */
                getFilter():string;
            }
            type IFinanceDataFilter_T = IFinanceDataFilter_S & IFinanceDataFilter$;
            interface IFinanceDataFilter extends IFinanceDataFilter_T {
            }
        }
        namespace kd.sdk.tmc.tda.extpoint.interloan{
            interface IInterLoanDetailInterface_S {
            }
            interface IInterLoanDetailInterface$ {
                /**
                 * 企业借贷明细报表列扩展
                 * 扩展报表列，其中fieldKey与明细DataSet中fieldname相对应；列名称为多语言文本；可根据需要设置列数据类型
                 *
                 * @param fieldColumns
                 * @return 扩展后的明细报表列
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.sdk.tmc.tda.extpoint.interloan;
                 *
                 * import kd.bos.algo.DataSet;
                 * import kd.bos.algo.Row;
                 * import kd.bos.dataentity.resource.ResManager;
                 * import kd.bos.entity.report.ReportColumn;
                 * import kd.bos.orm.query.QCP;
                 * import kd.bos.orm.query.QFilter;
                 * import kd.bos.servicehelper.QueryServiceHelper;
                 *
                 * import java.util.HashSet;
                 * import java.util.List;
                 * import java.util.Map;
                 * import java.util.Set;
                 *
                 * public class InterLoanInterfaceDefaultExt implements IInterLoanDetailInterface {
                 *
                 *     public List<Object[]> detailColumnItemsExt(List<Object[]> fieldColumns) {
                 *         fieldColumns.add(new Object[]{"billno", ResManager.loadKDString("单据编号", "FinanceDetailDataListPlugin_1", "tmc-tda-report"), ReportColumn.TYPE_TEXT, false});
                 *         fieldColumns.add(new Object[]{"contractno", ResManager.loadKDString("合同编号", "FinanceDetailDataListPlugin_2", "tmc-tda-report"), ReportColumn.TYPE_TEXT, false});
                 *         return fieldColumns;
                 *     }
                 * }
                 * </pre></code>
                 * </p>
                 */
                detailColumnItemsExt?(fieldColumns:$.java.util.List):$.java.util.List;
                /**
                 * @param dataSet
                 * @param paramMap
                 * @return
                 */
                detailDataSetExt?(dataSet:$.kd.bos.algo.DataSet,paramMap:$.java.util.Map):$.kd.bos.algo.DataSet;
            }
            type IInterLoanDetailInterface_T = IInterLoanDetailInterface_S & IInterLoanDetailInterface$;
            interface IInterLoanDetailInterface extends IInterLoanDetailInterface_T {
            }
        }
        namespace kd.sdk.tmc.tda.extpoint.liquidity{
            interface ILiquidityCalculateInterface_S {
            }
            interface ILiquidityCalculateInterface$ {
                /**
                 * 重新设置流动性指标计算公式
                 *
                 * @return 流动性对象
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.sdk.tmc.tda.extpoint.liquidity;
                 *
                 * import kd.bos.dataentity.entity.DynamicObject;
                 * import kd.sdk.tmc.tda.extpoint.liquidity.ILiquidityCalculateInterface;
                 *
                 * import java.math.BigDecimal;
                 * import java.math.RoundingMode;
                 *
                 * public class LiquidityCalculateDefaultExt implements ILiquidityCalculateInterface {
                 *     private final int DEFAULT_SCALE = 10;
                 *
                 *     public DynamicObject resetCalculationFormula(DynamicObject liquidityBill) {
                 *         // 资产
                 *         BigDecimal assetsAmt = liquidityBill.getBigDecimal(LiquidityBillProp.ASSETSAMT);
                 *         // 负债
                 *         BigDecimal debtAmt = liquidityBill.getBigDecimal(LiquidityBillProp.DEBTAMT);
                 *     	   // 有息负债率 = 有息负债/负债
                 *         BigDecimal intDebtRate = EmptyUtil.isEmpty(debtAmt) ? BigDecimal.ZERO : intDebtAmt.divide(debtAmt, DEFAULT_SCALE, RoundingMode.HALF_UP);
                 *         liquidityBill.set(LiquidityBillProp.INTDEBTRATE, intDebtRate);
                 *         return liquidityBill;
                 *     }
                 * }
                 * </pre></code>
                 * </p>
                 */
                resetCalculationFormula(liquidityBill:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
            }
            type ILiquidityCalculateInterface_T = ILiquidityCalculateInterface_S & ILiquidityCalculateInterface$;
            interface ILiquidityCalculateInterface extends ILiquidityCalculateInterface_T {
            }
        }
        namespace kd.sdk.tmc.tda.extpoint.note{
            interface IDraftBillDecisionRptInterface_S {
            }
            interface IDraftBillDecisionRptInterface$ {
                /**
                 * 决策分析票据管理替换标准产品的票据实体
                 *
                 * @param entityName：源票据名称 应收票据：cdm_receivablebill； 应付票据：cdm_payablebill； 业务处理单据：cdm_drafttradebill
                 * @return 二开票据实体名称
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.tmc.tda.report.note.extpoint;
                 *
                 * import kd.sdk.tmc.tda.extpoint.note.IDraftBillDecisionRptInterface;
                 * import kd.tmc.fbp.common.constant.TmcEntityConst;
                 *
                 * public class DraftBillDecisionRptDefaultExt implements IDraftBillDecisionRptInterface {
                 *
                 *      public String getDraftBillEntityName(String entityName) {
                 *          String draftBillEntityName = entityName == null ? "" : entityName;
                 *          switch (draftBillEntityName) {
                 *          case TmcEntityConst.CDM_RECEIVABLEBILL:
                 *               // 收票登记
                 *               draftBillEntityName = TmcEntityConst.CDM_RECEIVABLEBILL;
                 *               break;
                 *          case TmcEntityConst.CDM_PAYABLEBILL:
                 *               // 开票登记
                 *               draftBillEntityName = TmcEntityConst.CDM_PAYABLEBILL;
                 *               break;
                 *          case TmcEntityConst.CDM_DRAFTTRADEBILL:
                 *               // 业务处理
                 *               draftBillEntityName = TmcEntityConst.CDM_DRAFTTRADEBILL;
                 *               break;
                 *           default:
                 *         }
                 *         return draftBillEntityName;
                 *      }
                 * }
                 *
                 * </pre></code>
                 * </p>
                 */
                getDraftBillEntityName(entityName:string):string;
            }
            type IDraftBillDecisionRptInterface_T = IDraftBillDecisionRptInterface_S & IDraftBillDecisionRptInterface$;
            interface IDraftBillDecisionRptInterface extends IDraftBillDecisionRptInterface_T {
            }
        }
        namespace kd.sdk.tmc.tda.extpoint.settle{
            interface IBigAmountDataInterface_S {
            }
            interface IBigAmountDataInterface$ {
                /**
                 * 取交易明细数据自定义条件
                 *
                 * @return 自定义条件
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.tmc.tda.mservice.settle.extpoint;
                 *
                 * import kd.bos.orm.query.QFilter;
                 * import kd.sdk.tmc.tda.extpoint.settle.IBigAmountDataInterface;
                 *
                 * public class BigAmountDataDefaultExt implements IBigAmountDataInterface {
                 *
                 *     public QFilter getExtendFilter() {
                 *     	   // 返回自定义的QFilter
                 *         return QFilter.of("1=1");
                 *     }
                 * }
                 * </pre></code>
                 * </p>
                 */
                getExtendFilter():$.kd.bos.orm.query.QFilter;
            }
            type IBigAmountDataInterface_T = IBigAmountDataInterface_S & IBigAmountDataInterface$;
            interface IBigAmountDataInterface extends IBigAmountDataInterface_T {
            }
        }
        namespace kd.sdk.tmc.tda.extpoint.synthesis{
            interface ISynthesisLoadDataInterface_S {
            }
            interface ISynthesisLoadDataInterface$ {
                /**
                 * 综合分析项目名称二开扩展
                 *
                 * @param projectValue
                 * @return 修改后的项目名称
                 *      FD: 货币资金
                 *      PR: 收益率（年化）
                 *      IDA: 对外有息负债
                 *      FC: 融资成本（年化）
                 *      NA: 净资产
                 *      EA: 其中：权益工具
                 *      ADR: 资产负债率
                 *      IDR: 有息负债率
                 *      IDER: 有息负债率（含权益工具）
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.tmc.tda.mservice.synthesis.extpoint;
                 *
                 * import kd.sdk.tmc.tda.extpoint.synthesis.ISynthesisLoadDataInterface;
                 *
                 * public class SynthesisLoadDataDefaultExt implements ISynthesisLoadDataInterface {
                 *
                 *     public String getExtendProjectName(String projectValue) {
                 *     	   // 修改后的名称，ProjectNameEnum需自己实现
                 *         return ProjectNameEnum.getName(projectValue);
                 *     }
                 * }
                 * </pre></code>
                 * </p>
                 */
                getExtendProjectName(projectValue:string):string;
            }
            type ISynthesisLoadDataInterface_T = ISynthesisLoadDataInterface_S & ISynthesisLoadDataInterface$;
            interface ISynthesisLoadDataInterface extends ISynthesisLoadDataInterface_T {
            }
        }
        namespace kd.sdk.tmc.tda.extpoint.transdetail{
            interface ITransDetailGetDataInterface_S {
            }
            interface ITransDetailGetDataInterface$ {
                /**
                 * 查询交易明细自定义条件
                 *
                 * @return 自定义条件
                 *
                 * <p>默认扩展示例如下
                 * <pre><code>
                 * package kd.tmc.tda.mservice.detail.extpoint;
                 *
                 * import kd.bos.orm.query.QFilter;
                 * import kd.sdk.tmc.tda.extpoint.transdetail.ITransDetailGetDataInterface;
                 *
                 * public class TransDetailGetDataDefaultExt implements ITransDetailGetDataInterface {
                 *
                 *     public QFilter getExtendFilter() {
                 *     	// 返回自定义的QFilter
                 *         return QFilter.of("1=1");
                 *     }
                 * }
                 * </pre></code>
                 * </p>
                 */
                getExtendFilter():$.kd.bos.orm.query.QFilter;
            }
            type ITransDetailGetDataInterface_T = ITransDetailGetDataInterface_S & ITransDetailGetDataInterface$;
            interface ITransDetailGetDataInterface extends ITransDetailGetDataInterface_T {
            }
        }
        namespace kd.sdk.tmc.tmbrm.extpoint{
            interface IFinOrgArchivesAssociatedBillInterface_S {
            }
            interface IFinOrgArchivesAssociatedBillInterface$ {
                /**
                 * 关联业务单据过滤条件拓展
                 * @param associatedOrg 关联组织
                 * @return key-关联业务单据实体标识，value-单据过滤条件
                 */
                getBillQFilter(associatedOrg:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.Map;
                /**
                 * 关联业务单据类型拓展
                 * @return 关联业务单据实体标识集合
                 */
                getBillType():$.java.util.List;
            }
            type IFinOrgArchivesAssociatedBillInterface_T = IFinOrgArchivesAssociatedBillInterface_S & IFinOrgArchivesAssociatedBillInterface$;
            interface IFinOrgArchivesAssociatedBillInterface extends IFinOrgArchivesAssociatedBillInterface_T {
            }
        }
    }
}
export {};