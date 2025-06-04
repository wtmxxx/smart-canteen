/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.bos.ext.hr.ruleengine.infos{
            interface RuleConditionInfo_S {
            }
            interface RuleConditionInfo_C extends RuleConditionInfo_S {
                new():RuleConditionInfo;
            }
            interface RuleConditionInfo$ {
                getConditionExpressList():$.java.util.List;
                getConditionExpressStr():string;
                getConditionExpressType():string;
                getConditionList():$.java.util.List;
                setConditionExpressList(arg0:$.java.util.List):void;
                setConditionExpressStr(arg0:string):void;
                setConditionExpressType(arg0:string):void;
                setConditionList(arg0:$.java.util.List):void;
            }
            type RuleConditionInfo_T = RuleConditionInfo_S & RuleConditionInfo$;
            interface RuleConditionInfo extends RuleConditionInfo_T {
            }
        }
        namespace kd.bos.util{
            interface Pair_S {
            }
            type Pair_ST = $.java.io.Serializable & Pair_S;
            interface Pair_C extends Pair_ST {
                new(arg0:any,arg1:any):Pair;
            }
            interface Pair$ {
                getKey():any;
                getValue():any;
            }
            type Pair_T = $.java.io.Serializable & Pair_S & Pair$;
            interface Pair extends Pair_T {
            }
        }
        namespace kd.sdk.wtc.wtabm{
            interface SdkWtcWtabmModule_S {
            }
            type SdkWtcWtabmModule_ST = $.kd.sdk.module.Module & SdkWtcWtabmModule_S;
            interface SdkWtcWtabmModule_C extends SdkWtcWtabmModule_ST {
                new():SdkWtcWtabmModule;
            }
            interface SdkWtcWtabmModule$ {
            }
            type SdkWtcWtabmModule_T = $.kd.sdk.module.Module & SdkWtcWtabmModule_S & SdkWtcWtabmModule$;
            interface SdkWtcWtabmModule extends SdkWtcWtabmModule_T {
            }
        }
        namespace kd.sdk.wtc.wtabm.business.helper{
            interface VaBillEntryEntityDto_S {
            }
            type VaBillEntryEntityDto_ST = $.java.io.Serializable & VaBillEntryEntityDto_S;
            interface VaBillEntryEntityDto_C extends VaBillEntryEntityDto_ST {
                new():VaBillEntryEntityDto;
            }
            interface VaBillEntryEntityDto$ {
                /**
                 * 获取考勤档案BOID
                 * @return  考勤档案BOID
                 */
                getAttFileBoid():long;
                /**
                 * 获取单据编号
                 * @return
                 */
                getBillNo():string;
                /**
                 * 获取结束日期/时间
                 * @return
                 */
                getEndDate():Date;
                /**
                 * 获取结束日休假方式（0-上半天；1-下半天；2-全天；3-自选时段）
                 * @return
                 */
                getEndMethod():string;
                /**
                 * 获取结束日是否off无时段
                 * @return true-是；false-否
                 */
                getEndOffNonPlan():boolean;
                /**
                 * 获取 自选时段归属日期
                 * @return
                 */
                getOwnDate():Date;
                /**
                 * 真实结束时间
                 * 带有到时分秒的时间点，根据班次和休假方式（上/下半天、全天）解析实际的休假时间；
                 * 注意：
                 * 1.OFF班无时段时，该字段值为休假单分录中选择的日期
                 * 2.解析上下半天的分割点为班次中间分割点
                 * @return realEndDate
                 */
                getRealEndDate():Date;
                /**
                 * 真实开始时间
                 * 带有到时分秒的时间点，根据班次和休假方式（上/下半天、全天）解析实际的休假时间；
                 * 注意：
                 * 1.OFF班无时段时，该字段值为休假单分录中选择的日期
                 * 2.解析上下半天的分割点为班次中间分割点
                 *
                 * @return realStartDate
                 */
                getRealStartDate():Date;
                /**
                 * 获取 特殊假休假方式ID
                 * @return
                 */
                getSpVaMethodId():long;
                /**
                 * 获取特殊假扩展信息JSON
                 * @return 特殊假扩展信息JSON
                 */
                getSpecialExtJson():string;
                /**
                 * 获取特殊假休假类型（；A-哺乳假，普通假此字段为空）
                 * @return
                 */
                getSpecialVaType():string;
                /**
                 * 获取开始日期/时间
                 * @return
                 */
                getStartDate():Date;
                /**
                 * 获取开始日休假方式（0-上半天；1-下半天；2-全天；3-自选时段）
                 * @return
                 */
                getStartMethod():string;
                /**
                 * 获取开始日是否off无时段
                 * @return true-是；false-否
                 */
                getStartOffNonPlan():boolean;
                /**
                 * 获取单据已封存至日期
                 * @return 单据已封存至日期
                 */
                getStorageTo():Date;
                /**
                 * 获取休假单子单据体
                 * @return
                 */
                getVaSubEntryVoList():$.java.util.List;
                /**
                 * 设置 考勤档案BOID
                 * @param attFileBoid
                 */
                setAttFileBoid(attFileBoid:long):void;
                /**
                 * 设置 单据编号
                 * @param billNo
                 */
                setBillNo(billNo:string):void;
                /**
                 * 设置 结束日期/时间
                 * @param endDate
                 */
                setEndDate(endDate:Date):void;
                /**
                 * 设置结束日休假方式（0-上半天；1-下半天；2-全天；3-自选时段）
                 * @param endMethod
                 */
                setEndMethod(endMethod:string):void;
                /**
                 * 设置结束日是否off无时段
                 * @param endOffNonPlan
                 */
                setEndOffNonPlan(endOffNonPlan:boolean):void;
                /**
                 * 设置自选时段归属日期
                 * @param ownDate
                 */
                setOwnDate(ownDate:Date):void;
                /**
                 * 设置真实结束时间
                 * @param realEndDate
                 */
                setRealEndDate(realEndDate:Date):void;
                setRealStartDate(realStartDate:Date):void;
                /**
                 * 设置特殊假休假方式ID
                 * @param spVaMethodId 特殊假休假方式ID
                 * @return this
                 */
                setSpVaMethodId(spVaMethodId:long):this;
                /**
                 * 设置特殊假扩展信息JSON
                 * @param specialExtJson 特殊假扩展信息JSON
                 */
                setSpecialExtJson(specialExtJson:string):void;
                /**
                 * 设置特殊假类型
                 * @param specialVaType  特殊假类型
                 * @return this
                 */
                setSpecialVaType(specialVaType:string):this;
                /**
                 * 设置开始日期/时间
                 * @param startDate
                 */
                setStartDate(startDate:Date):void;
                /**
                 * 设置 开始日休假方式（0-上半天；1-下半天；2-全天；3-自选时段）
                 * @param startMethod
                 */
                setStartMethod(startMethod:string):void;
                /**
                 * 设置开始日是否off无时段
                 * @param startOffNonPlan
                 */
                setStartOffNonPlan(startOffNonPlan:boolean):void;
                /**
                 * 设置 单据已封存至日期
                 * @param storageTo 已封存至日期
                 */
                setStorageTo(storageTo:Date):void;
                /**
                 * 设置休假单子单据体
                 * @param vaSubEntryVoList 子单据体
                 * @return this
                 */
                setVaSubEntryVoList(vaSubEntryVoList:$.java.util.List):this;
            }
            type VaBillEntryEntityDto_T = $.java.io.Serializable & VaBillEntryEntityDto_S & VaBillEntryEntityDto$;
            interface VaBillEntryEntityDto extends VaBillEntryEntityDto_T {
            }
            interface WTABMHelper_S {
                /**
                 * 根据考勤档案BOID和休假日期查询对应的休假方案和休假规则
                 * <p>
                 *
                 * @param vaPlanRuleParams 请求参数  考勤档案BOID和日期不能为空，否则返回KDBizException
                 * @return List<VaPlanRuleQuery> 响应参数,返回该考勤档案下对应休假日期的休假方案和休假规则
                 * @throws KDBizException 考勤档案BOID或休假日期为空时
                 */
                getVaPlanAndRule(vaPlanRuleParams:$.java.util.Set):$.java.util.List;
            }
            interface WTABMHelper_C extends WTABMHelper_S {
                new():WTABMHelper;
            }
            interface WTABMHelper$ {
            }
            type WTABMHelper_T = WTABMHelper_S & WTABMHelper$;
            interface WTABMHelper extends WTABMHelper_T {
            }
            interface WtabmVaBillHelper_S {
                /**
                 * 根据考勤人信息和时间范围查询带休假时段的休假单
                 *
                 * @param vaQyeryParam 查询带休假时段的假单入参
                 * @return List<VaBillDto> 单据信息列表
                 */
                getVaBillsWithTime(vaQyeryParam:VaBillsWithTimeInfoParam):$.java.util.List;
            }
            interface WtabmVaBillHelper_C extends WtabmVaBillHelper_S {
                new():WtabmVaBillHelper;
            }
            interface WtabmVaBillHelper$ {
            }
            type WtabmVaBillHelper_T = WtabmVaBillHelper_S & WtabmVaBillHelper$;
            interface WtabmVaBillHelper extends WtabmVaBillHelper_T {
            }
            interface VaBillSubEntryDto_S {
            }
            type VaBillSubEntryDto_ST = $.java.io.Serializable & VaBillSubEntryDto_S;
            interface VaBillSubEntryDto_C extends VaBillSubEntryDto_ST {
                new():VaBillSubEntryDto;
            }
            interface VaBillSubEntryDto$ {
                getDetailId():long;
                /**
                 * 获取结束时间（年月日时分秒）
                 *
                 * @return 结束时间（年月日时分秒）
                 */
                getEndDateTime():Date;
                /**
                 * 获取开始时间（年月日时分秒）
                 * @return 开始时间（年月日时分秒）
                 */
                getStartDateTime():Date;
                /**
                 * 申请时归属日（此值可能因为排班等修改而不准确，建议不使用该值）
                 * @return  申请时归属日
                 */
                getVaEntryDate():Date;
                setDetailId(detailId:long):this;
                /**
                 * 设置结束时间（年月日时分秒）
                 * @param endDateTime  结束时间（年月日时分秒）
                 * @return 当前对象
                 */
                setEndDateTime(endDateTime:Date):this;
                /**
                 * 设置 开始时间（年月日时分秒）
                 * @param startDateTime 开始时间
                 * @return this
                 */
                setStartDateTime(startDateTime:Date):this;
                /**
                 * 设置 申请时归属日
                 * @param vaEntryDate  申请时归属日（此值可能因为排班等修改而不准确，建议不使用该值）
                 * @return 当前对象
                 */
                setVaEntryDate(vaEntryDate:Date):this;
            }
            type VaBillSubEntryDto_T = $.java.io.Serializable & VaBillSubEntryDto_S & VaBillSubEntryDto$;
            interface VaBillSubEntryDto extends VaBillSubEntryDto_T {
            }
            interface VaBillDto_S {
            }
            type VaBillDto_ST = $.java.io.Serializable & VaBillDto_S;
            interface VaBillDto_C extends VaBillDto_ST {
                new():VaBillDto;
            }
            interface VaBillDto$ {
                /**
                 * 获取档案BOID
                 * @return 档案BOID
                 */
                getAttFileBoId():long;
                /**
                 * 获取档案VID
                 * @return 档案VID
                 */
                getAttFileVid():long;
                /**
                 * 获取考勤人ID
                 * @return 考勤人ID
                 */
                getAttPersonId():long;
                /**
                 * 获取单据编号
                 * @return billNo
                 */
                getBillNo():string;
                /**
                 * 获取单据体数据（需要定额处理操作的数据）
                 * @return 单据体数据（需要定额处理操作的数据）
                 */
                getEntryEntities():$.java.util.List;
                /**
                 * 获取单据ID
                 */
                getId():long;
                /**
                 * 获取父单据ID（当本单据为变更单时此值不为0L）
                 * @return 父单据ID（当本单据为变更单时此值不为0L）
                 */
                getParentId():long;
                /**
                 * 获取是否销假单
                 * @return true-是；false-否
                 */
                isNotLeave():boolean;
                /**
                 * 设置档案BOID
                 * @param attFileBoId 档案BOID
                 */
                setAttFileBoId(attFileBoId:long):void;
                /**
                 * 设置档案VID
                 * @param attFileVid 档案VID
                 */
                setAttFileVid(attFileVid:long):void;
                /**
                 * 设置考勤人ID
                 * @param attPersonId 考勤人ID
                 */
                setAttPersonId(attPersonId:long):void;
                /**
                 * 设置单据编号
                 * @param billNo billNo
                 */
                setBillNo(billNo:string):void;
                /**
                 * 设置 单据体数据（需要定额处理操作的数据）
                 * @param entryEntities  单据体数据（需要定额处理操作的数据）
                 */
                setEntryEntities(entryEntities:$.java.util.List):void;
                /**
                 * 设置单据ID
                 * @param id  id
                 */
                setId(id:long):void;
                /**
                 * 设置是否销假单
                 * @param notLeave true-是；false-否
                 */
                setNotLeave(notLeave:boolean):void;
                /**
                 * 设置父单据ID（当本单据为变更单时此值不为0L）
                 * @param parentId 父单据ID（当本单据为变更单时此值不为0L）
                 */
                setParentId(parentId:long):void;
            }
            type VaBillDto_T = $.java.io.Serializable & VaBillDto_S & VaBillDto$;
            interface VaBillDto extends VaBillDto_T {
            }
            interface VaBillsWithTimeInfoParam_S {
            }
            type VaBillsWithTimeInfoParam_ST = $.java.io.Serializable & VaBillsWithTimeInfoParam_S;
            interface VaBillsWithTimeInfoParam_C extends VaBillsWithTimeInfoParam_ST {
                new():VaBillsWithTimeInfoParam;
            }
            interface VaBillsWithTimeInfoParam$ {
                /**
                 * 获取勤档案ID
                 *
                 * @return 勤档案ID（如果不为空此处会参与查询假单条件，建议使用考勤人ID）
                 */
                getAttFileBoId():long;
                /**
                 * 获取考勤人ID
                 *
                 * @return 考勤人ID（和考勤档案ID不可同时为空，推荐使用考勤人ID作为条件查询假单）
                 */
                getAttPersonId():long;
                /**
                 * 获取结束日
                 *
                 * @return 结束日, 可以是班次开始日，也可以是用户选择的真实时间
                 */
                getEndDate():Date;
                /**
                 * 获取 开始日,可以是班次开始日，也可以是用户选择的真实时间
                 *
                 * @return 开始日, 可以是班次开始日，也可以是用户选择的真实时间
                 */
                getStartDate():Date;
                /**
                 * 设置勤档案ID
                 *
                 * @param attFileBoId 勤档案ID（如果不为空此处会参与查询假单条件，建议使用考勤人ID）
                 */
                setAttFileBoId(attFileBoId:long):void;
                /**
                 * 设置考勤人ID
                 *
                 * @param attPersonId 考勤人ID（和考勤档案ID不可同时为空，推荐使用考勤人ID作为条件查询假单）
                 */
                setAttPersonId(attPersonId:long):void;
                /**
                 * 设置结束日
                 *
                 * @param endDate 结束日,可以是班次开始日，也可以是用户选择的真实时间
                 */
                setEndDate(endDate:Date):void;
                /**
                 * 设置 开始日
                 *
                 * @param startDate 开始日,可以是班次开始日，也可以是用户选择的真实时间
                 */
                setStartDate(startDate:Date):void;
            }
            type VaBillsWithTimeInfoParam_T = $.java.io.Serializable & VaBillsWithTimeInfoParam_S & VaBillsWithTimeInfoParam$;
            interface VaBillsWithTimeInfoParam extends VaBillsWithTimeInfoParam_T {
            }
        }
        namespace kd.sdk.wtc.wtabm.business.helper.vaplan{
            interface VaPlanRuleQuery_S {
            }
            type VaPlanRuleQuery_ST = $.java.io.Serializable & VaPlanRuleQuery_S;
            interface VaPlanRuleQuery_C extends VaPlanRuleQuery_ST {
                /**
                 * 构造休假方案规则查询请求参数
                 *
                 * @param attFileBoId 考勤档案BOID, 不可传0
                 * @param targetDate 要查询的日期(yyyy-MM-dd)
                 * @param vaTypeId 休假类型ID，null则不根据类型取匹配休假规则的分录
                 * @param billDy 单据动态对象，如果是创建单据查询休假规则此参数必传
                 * @param entryKey 分录属性标识，如果是创建单据查询休假规则此参数必传
                 * @param entryIndex 分录行号（0开始），如果是创建单据查询休假规则此参数必传
                 */
                new(attFileBoId:long,targetDate:Date,vaTypeId:long,billDy:$.kd.bos.dataentity.entity.DynamicObject,entryKey:string,entryIndex:number):VaPlanRuleQuery;
            }
            interface VaPlanRuleQuery$ {
                /**
                 * 获取考勤档案BOID
                 */
                getAttFileBoId():long;
                /**
                 * 获取要查询的日期(yyyy-MM-dd)
                 */
                getTargetDate():Date;
            }
            type VaPlanRuleQuery_T = $.java.io.Serializable & VaPlanRuleQuery_S & VaPlanRuleQuery$;
            interface VaPlanRuleQuery extends VaPlanRuleQuery_T {
            }
            interface VaPlanRuleResp_S {
            }
            type VaPlanRuleResp_ST = $.java.io.Serializable & VaPlanRuleResp_S;
            interface VaPlanRuleResp_C extends VaPlanRuleResp_ST {
            }
            interface VaPlanRuleResp$ {
                /**
                 * 获取方案的动态对象
                 * @return  休假方案的动态对象
                 */
                getPlanDy():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取方案有效结束时间
                 * @return Date    方案有效结束时间
                 */
                getPlanEffectEnd():Date;
                /**
                 * 获取方案有效开始时间
                 * @return Date    方案有效开始时间
                 */
                getPlanEffectStart():Date;
                /**
                 * 获取 经过限定条件过滤的休假规则分录
                 * @return 经过限定条件过滤的休假规则分录
                 */
                getRuleCalDys():$.java.util.List;
                /**
                 * 获取休假规则的动态对象
                 * @return  休假规则的动态对象
                 */
                getRuleDy():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取规则有效结束时间
                 * @return Date    规则有效结束时间
                 */
                getRuleEffectEnd():Date;
                /**
                 * 获取规则有效开始时间
                 * @return Date    规则有效开始时间
                 */
                getRuleEffectStart():Date;
                /**
                 * 获取 查询对象的引用
                 * @return  查询对象的引用
                 */
                getVaPlanRuleQuery():VaPlanRuleQuery;
                /**
                 * 获取 经过限定条件过滤的休假规则分录、基础配置、变更配置
                 * @return 经过限定条件过滤的休假规则分录、基础配置、变更配置
                 */
                getVaRuleCalInfos():$.java.util.List;
                /**
                 * 设置方案有效结束时间
                 * @param planEffectEnd   设置案有效结束时间
                 */
                setPlanEffectEnd(planEffectEnd:Date):void;
                /**
                 * 设置方案有效开始时间
                 * @param planEffectStart   设置案有效开始时间
                 */
                setPlanEffectStart(planEffectStart:Date):void;
                /**
                 * 设置规则有效结束时间
                 * @param ruleEffectEnd   设置规则有效结束时间
                 */
                setRuleEffectEnd(ruleEffectEnd:Date):void;
                /**
                 * 设置规则有效开始时间
                 * @param ruleEffectStart   设置规则有效开始时间
                 */
                setRuleEffectStart(ruleEffectStart:Date):void;
                /**
                 * 设置休假规则分录、基础配置、变更配置
                 * @param vaRuleCalInfos    VaRuleCalInfo 信息集合
                 */
                setVaRuleCalInfos(vaRuleCalInfos:$.java.util.List):void;
            }
            type VaPlanRuleResp_T = $.java.io.Serializable & VaPlanRuleResp_S & VaPlanRuleResp$;
            interface VaPlanRuleResp extends VaPlanRuleResp_T {
            }
        }
        namespace kd.sdk.wtc.wtabm.business.model{
            interface ShiftParseVoExt_S {
            }
            interface ShiftParseVoExt$ {
                /**
                 * 获取排班结束时间, offNoPlan为null
                 */
                getEndDateTime():Date;
                /**
                 * 获取OFF无时段
                 */
                getOffNoPlan():boolean;
                /**
                 * 获取班次归属日
                 */
                getRosterDate():Date;
                /**
                 * 获取中间分割点时间
                 */
                getShiftMiddleDateTime():Date;
                /**
                 * 获取排班开始时间, offNoPlan为null
                 */
                getStartDateTime():Date;
            }
            type ShiftParseVoExt_T = ShiftParseVoExt_S & ShiftParseVoExt$;
            interface ShiftParseVoExt extends ShiftParseVoExt_T {
            }
            interface VaBillEntryEntityValidVoExt_S {
            }
            interface VaBillEntryEntityValidVoExt$ {
                /**
                 * 获取考勤档案BOID
                 */
                getAttFileBoid():long;
                /**
                 * 获取单据编号
                 */
                getBillNo():string;
                /**
                 * 获取结束日期
                 */
                getEndDate():Date;
                /**
                 * 获取结束时间方式
                 */
                getEndMethod():string;
                /**
                 * 获取分录ID
                 */
                getId():long;
                /**
                 * 获取自选时段归属日期
                 */
                getOwnDate():Date;
                /**
                 * 获取分录总数
                 */
                getRowCount():number;
                /**
                 * 获取分录行号
                 */
                getRowIndex():number;
                /**
                 * 获取特殊假休假方式ID
                 */
                getSpVaMethodId():long;
                /**
                 * 获取特殊假类型；A-哺乳假，普通假此字段为空
                 */
                getSpecialVaType():string;
                /**
                 * 获取开始日期
                 */
                getStartDate():Date;
                /**
                 * 获取开始时间方式
                 */
                getStartMethod():string;
                /**
                 * 获取拆分时段列表
                 */
                getVaEntryValidTimeVoList():$.java.util.List;
                /**
                 * 获取休假类型ID
                 */
                getVaTypeId():long;
            }
            type VaBillEntryEntityValidVoExt_T = VaBillEntryEntityValidVoExt_S & VaBillEntryEntityValidVoExt$;
            interface VaBillEntryEntityValidVoExt extends VaBillEntryEntityValidVoExt_T {
            }
            interface VaBillWithTimeVoExt_S {
            }
            interface VaBillWithTimeVoExt$ {
                /**
                 * 获取档案BOID
                 */
                getAttFileBoId():long;
                /**
                 * 获取档案VID
                 */
                getAttFileVid():long;
                /**
                 * 获取人员ID
                 */
                getAttPersonId():long;
                /**
                 * 获取单据编号
                 */
                getBillNo():string;
                /**
                 * 获取单据体数据
                 */
                getEntryEntities():$.java.util.List;
                /**
                 * 获取单据ID
                 */
                getId():long;
                /**
                 * 获取父单据ID（当本单据为变更单时此值不为0L）
                 */
                getParentId():long;
            }
            type VaBillWithTimeVoExt_T = VaBillWithTimeVoExt_S & VaBillWithTimeVoExt$;
            interface VaBillWithTimeVoExt extends VaBillWithTimeVoExt_T {
            }
            interface VaEntryValidTimeVoExt_S {
            }
            interface VaEntryValidTimeVoExt$ {
                /**
                 * 获取结束时间点
                 */
                getEndDateTime():Date;
                /**
                 * 获取是否OFF班无时段
                 */
                getOffNonPlan():boolean;
                /**
                 * 获取班次解析对象
                 */
                getShiftParseVo():ShiftParseVoExt;
                /**
                 * 获取开始时间点
                 */
                getStartDateTime():Date;
            }
            type VaEntryValidTimeVoExt_T = VaEntryValidTimeVoExt_S & VaEntryValidTimeVoExt$;
            interface VaEntryValidTimeVoExt extends VaEntryValidTimeVoExt_T {
            }
        }
        namespace kd.sdk.wtc.wtabm.business.quota{
            interface OnRenameVaTypeEvent_S {
            }
            interface OnRenameVaTypeEvent_C extends OnRenameVaTypeEvent_S {
                new(source:string,vaTypeDyn:$.kd.bos.dataentity.entity.DynamicObject,quota:string,unit:string,unitName:string):OnRenameVaTypeEvent;
            }
            interface OnRenameVaTypeEvent$ {
                /**
                 * 定额信息
                 *
                 * @return 定额信息
                 */
                getQuota():string;
                /**
                 * 获取 当前调用二开埋点的单据的FormId;如：为他人申请休假-wtabm_vaapply,休假申请-wtabn_vaapplyself
                 * @return 单据的FormId
                 */
                getSource():string;
                /**
                 * 单位的编码（A-天；B-小时）
                 * @return 单位的编码（A-天；B-小时）
                 */
                getUnit():string;
                /**
                 * 单位的名称（天/小时）
                 * @return 单位的名称（天/小时）
                 */
                getUnitName():string;
                /**
                 * 获取休假类型的动态对象;可用属性：id/name/number
                 * @return 休假类型的动态对象
                 */
                getVaTypeDyn():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 重命名的休假类型名称
                 *
                 * @return 重命名的休假类型名称
                 */
                getVaTypeName():string;
                /**
                 * 是否取消重命名
                 * @return  true-是；false-否
                 */
                isCancel():boolean;
                /**
                 * 是否展示额度信息；默认为否
                 * @return 是否展示额度信息；默认为否
                 */
                isShowQuotas():boolean;
                /**
                 *  覆盖标品生成的休假类型名称，如果设置的休假类型名称与基础资料原名称相同则不触发重命名；
                 * @param vaTypeName
                 */
                overrideVaTypeName(vaTypeName:string):void;
                /**
                 * 取消重命名
                 * @param cancel true-取消；false-不取消
                 */
                setCancel(cancel:boolean):void;
                /**
                 * 设置是否展示额度信息，如果不设置，默认为否
                 * @param showQuotas true-展示额度信息；false-不展示额度信息
                 */
                setShowQuotas(showQuotas:boolean):void;
            }
            type OnRenameVaTypeEvent_T = OnRenameVaTypeEvent_S & OnRenameVaTypeEvent$;
            interface OnRenameVaTypeEvent extends OnRenameVaTypeEvent_T {
            }
            interface VaTypeRenamePlugin_S {
            }
            interface VaTypeRenamePlugin$ {
                /**
                 * 前端额度假休假类型重命名时触发的事件
                 * <p>
                 * 1.可以通过 {@link OnRenameVaTypeEvent#setCancel(boolean)} 取消当前事件，取消重命名；
                 * 2.可以通过 {@link OnRenameVaTypeEvent#overrideVaTypeName(String)} 覆盖标品生成的休假类型名称，如果设置的休假类型名称与基础资料原名称相同则不触发重命名；
                 * 3.可以通过 {@link OnRenameVaTypeEvent#setShowQuotas(boolean)} 设置是否展示额度信息，此处设置会默认处理标品的，不设置默认不展示
                 * 上述第2和第3点受到第1点控制
                 *
                 * @param args 额度假休假类型重命名事件
                 */
                onRenameVaTypeName?(args:OnRenameVaTypeEvent):void;
            }
            type VaTypeRenamePlugin_T = VaTypeRenamePlugin_S & VaTypeRenamePlugin$;
            interface VaTypeRenamePlugin extends VaTypeRenamePlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtabm.business.spva{
            interface SpecialVaTimeDto_S {
            }
            interface SpecialVaTimeDto_C extends SpecialVaTimeDto_S {
                /**
                 * 哺乳假休假时间区间构造器。
                 *
                 * @param startDateTime 休假开始时间，不能为null
                 * @param endDateTime   休假结束时间，不能为null
                 * @throws IllegalArgumentException 当休假结束时间早于休假开始时间时抛出异常。
                 */
                new(startDateTime:$.java.time.LocalDateTime,endDateTime:$.java.time.LocalDateTime):SpecialVaTimeDto;
            }
            interface SpecialVaTimeDto$ {
                /**
                 * 休假结束时间
                 *
                 * @return 休假结束时间
                 */
                getEndDateTime():$.java.time.LocalDateTime;
                /**
                 * 休假开始时间
                 *
                 * @return 休假开始时间
                 */
                getStartDateTime():$.java.time.LocalDateTime;
            }
            type SpecialVaTimeDto_T = SpecialVaTimeDto_S & SpecialVaTimeDto$;
            interface SpecialVaTimeDto extends SpecialVaTimeDto_T {
            }
            interface SpecialVaTimeParam_S {
            }
            interface SpecialVaTimeParam_C extends SpecialVaTimeParam_S {
                /**
                 * constroctor
                 */
                new():SpecialVaTimeParam;
            }
            interface SpecialVaTimeParam$ {
                /**
                 * 考勤档案BOID
                 * <p>
                 * 当前申请休假的考勤档案
                 *
                 * @return 考勤档案BOID
                 */
                getAttFileBoId():long;
                /**
                 * 每日可休时长（单位：小时）
                 * <p>
                 * 每天休假总时长不能超过该值
                 *
                 * @return 每日可休时长（单位：小时）
                 */
                getMaxVaTimeInHour():$.java.math.BigDecimal;
                /**
                 * 班次日期
                 *
                 * @return 班次日期
                 */
                getShiftDate():$.java.time.LocalDate;
                /**
                 * 当日班次版本ID
                 * <p>
                 * 班次日期 shiftDate 当天排的班次
                 *
                 * @return 当日班次版本ID
                 */
                getShiftVid():long;
                /**
                 * 哺乳假休假方式
                 * <p>
                 * 特殊假休假方式的动态对象，可以取的属性集为：id、number、name
                 *
                 * @return 哺乳假休假方式
                 */
                getSpecialVaTypeDyn():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 考勤档案BOID
                 * <p>
                 * 当前申请休假的考勤档案
                 *
                 * @param attFileBoId 考勤档案BOID
                 * @return this
                 */
                setAttFileBoId(attFileBoId:long):this;
                /**
                 * 每日可休时长（单位：小时）
                 * <p>
                 * 每天休假总时长不能超过该值
                 *
                 * @param maxVaTimeInHour 每日可休时长（单位：小时）
                 * @return this
                 */
                setMaxVaTimeInHour(maxVaTimeInHour:$.java.math.BigDecimal):this;
                /**
                 * 班次日期
                 *
                 * @param shiftDate 班次日期
                 * @return this
                 */
                setShiftDate(shiftDate:$.java.time.LocalDate):this;
                /**
                 * 当日班次版本ID
                 * <p>
                 * 班次日期 shiftDate 当天排的班次
                 *
                 * @param shiftVid shiftVid 当日班次版本ID
                 * @return this
                 */
                setShiftVid(shiftVid:long):this;
                /**
                 * 哺乳假休假方式
                 * <p>
                 * 特殊假休假方式的动态对象，可以取的属性集为：id、number、name
                 *
                 * @param specialVaTypeDyn 哺乳假休假方式
                 * @return this
                 */
                setSpecialVaTypeDyn(specialVaTypeDyn:$.kd.bos.dataentity.entity.DynamicObject):this;
            }
            type SpecialVaTimeParam_T = SpecialVaTimeParam_S & SpecialVaTimeParam$;
            interface SpecialVaTimeParam extends SpecialVaTimeParam_T {
            }
            interface SpecialVaExpService_S {
            }
            interface SpecialVaExpService$ {
                /**
                 * 自动生成自定义哺乳假休假方式的哺乳假休假时段，系统根据这个时间段
                 *
                 * <p>生成时间段应当在班次时段范围内且和班次内上班时段有时段交集，否则识别出时长会为0
                 * 班次内上班时段和当天生成的总时间范围交集时长不得超过maxVaTime,否则会触发每日可休时长校验导致校验不通过
                 * 生成的开始-结束时间对不允许和多个日期班次的时段范围交集，否则会触发跨班校验导致校验不通过
                 * 接口调用方式为：按日循环调用</p>
                 *
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 * public List<SpecialVaTimeDto> createSubEntry(SpecialVaTimeParam specialVaTimeParam) {
                 *      LocalDateTime startTime = req.getDate().atTime(9, 0, 0, 0);
                 *      LocalDateTime endTime = req.getDate().atTime(11, 30, 0, 0);
                 *      return Lists.newArrayList(new SpecialVaTimeDto(startTime, endTime));
                 * }
                 * </code></pre>
                 *
                 * @param specialVaTimeParam 生成休假明细时间段入参
                 * @return 对应班次开始日的休假明细时间区间
                 */
                createSubEntry(specialVaTimeParam:SpecialVaTimeParam):$.java.util.List;
                /**
                 * 判断特殊假休假方式是否自动生成时段
                 *
                 * <p>当选择哺乳假休假方式之后，如果选中二开扩展的哺乳假休假方式，会调用此扩展点；如果返回true,则系统会继续后续校验，并生成休假时段，对时段计算时长并最终生成休假明细子分录信息
                 * 如果结果为false,则认为需要继续填写页面信息，不会触发后续校验和生成时长等</p>
                 *
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 * public boolean isAutoCreateSubEntry(DynamicObject spvaTypeDyn) {
                 *         String number = spvaTypeDyn.getString("number");
                 *         return StringUtils.equalsAny(number, "1011_S", "1012_s");
                 * }
                 * </code></pre>
                 *
                 * @param spvaTypeDyn 特殊假休假方式的动态对象，可以取的属性集为：id、number、name
                 * @return 如果需要自动生成时段则返回true
                 */
                isAutoCreateSubEntry(spvaTypeDyn:$.kd.bos.dataentity.entity.DynamicObject):boolean;
            }
            type SpecialVaExpService_T = SpecialVaExpService_S & SpecialVaExpService$;
            interface SpecialVaExpService extends SpecialVaExpService_T {
            }
        }
        namespace kd.sdk.wtc.wtabm.business.va{
            interface VaInfoExpService_S {
            }
            interface VaInfoExpService$ {
                /**
                 * 休假信息编辑内容回写休假单据
                 *
                 * <p>休假PC端，在新增或编辑休假信息之后，点击确定按钮回写数据到休假单主页面的分录中，提供此扩展接口，做个性化回写处理</p>
                 *
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 * </code></pre>
                 *
                 * @param callBackParam 参数信息
                 */
                onCallBackVaInfo(callBackParam:VaInfoCallBackParam):void;
            }
            type VaInfoExpService_T = VaInfoExpService_S & VaInfoExpService$;
            interface VaInfoExpService extends VaInfoExpService_T {
            }
            interface OnCheckVaApplyOverlapEvent_S {
            }
            interface OnCheckVaApplyOverlapEvent_C extends OnCheckVaApplyOverlapEvent_S {
                /**
                 * 构造方法
                 */
                new():OnCheckVaApplyOverlapEvent;
            }
            interface OnCheckVaApplyOverlapEvent$ {
                /**
                 * 获取不需要和其他类型校验重叠的单据ID列表
                 * <p>建议提前维护好不参与重叠的休假类型列表，不建议每次调用接口去实时查询<p/>
                 *
                 * @return 不需要和其他类型校验重叠的单据ID列表
                 */
                getNeedNotCheckedOverlapVaTypes():$.java.util.Set;
                /**
                 * 设置不需要和其他类型校验重叠的单据ID列表
                 */
                setNeedNotCheckedOverlapVaTypes(needNotCheckedOverlapVaTypes:$.java.util.Set):void;
            }
            type OnCheckVaApplyOverlapEvent_T = OnCheckVaApplyOverlapEvent_S & OnCheckVaApplyOverlapEvent$;
            interface OnCheckVaApplyOverlapEvent extends OnCheckVaApplyOverlapEvent_T {
            }
            interface OnCalVaApplyTimeEvent_S {
            }
            interface OnCalVaApplyTimeEvent$ {
                /**
                 * 获取考勤档案BOID
                 *
                 * @return 考勤档案BOID
                 */
                getAttFileBoId():long;
                /**
                 * 获取要计算的休假信息
                 *
                 * @return 要计算的分录动态对象, 如果是弹出页，则此处为弹出页的动态对象
                 */
                getBillEntryDyn():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取匹配到的休假基础配置
                 *
                 * @return 匹配到的休假基础配置动态对象
                 */
                getMatchedBaseSet():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取排班信息
                 * @return key-排班的班次开始日；value-班次信息
                 */
                getRosterShiftDtoMap():$.java.util.Map;
                /**
                 * 获取 要计算的哺乳假子分录
                 *
                 * @return 要计算的哺乳假子分录;当计算哺乳假的时长时，此项不为空；如果此分录为空，则认为计算整个休假信息的时长
                 */
                getSpecialVaTimeDto():kd.sdk.wtc.wtabm.business.spva.SpecialVaTimeDto;
                /**
                 * 获取标品计算结果
                 * @return 标品计算结果 标品未计算时会返回null
                 */
                getStandardResult():VaTimeResult;
                /**
                 * 设置是否取消二开插件计算时长
                 *
                 * @param cancel true-使用标品计算结果；false-使用二开插件计算结果(默认为false)
                 */
                setCancel(cancel:boolean):void;
                /**
                 * 设置二开插件计算出的休假时长信息
                 *
                 * @param vaTimeResult 休假时长信息
                 */
                setVaTimeResult(vaTimeResult:VaTimeResult):void;
            }
            type OnCalVaApplyTimeEvent_T = OnCalVaApplyTimeEvent_S & OnCalVaApplyTimeEvent$;
            interface OnCalVaApplyTimeEvent extends OnCalVaApplyTimeEvent_T {
            }
            interface VaApplyTimeCalExtPlugin_S {
            }
            interface VaApplyTimeCalExtPlugin$ {
                /**
                 * 休假申请分录时长计算时调用此接口。
                 * 当前接口会先调用标品时长计算逻辑，然后把标品计算结果放进入参
                 * 当前接口可以重写休假申请时长的计算时间,包括哺乳假的时长计算
                 * <p>示例代码可以参考休假申请时长计算扩展场景示例，扩展场景编码：kd.sdk.wtc.wtabm.business.va.VaApplyTimeCalExtPlugin</p>
                 *
                 * @param onCalVaApplyTimeEvent 休假申请时计算申请时长事件
                 */
                onCalVaApplyTimes(onCalVaApplyTimeEvent:OnCalVaApplyTimeEvent):void;
            }
            type VaApplyTimeCalExtPlugin_T = VaApplyTimeCalExtPlugin_S & VaApplyTimeCalExtPlugin$;
            interface VaApplyTimeCalExtPlugin extends VaApplyTimeCalExtPlugin_T {
            }
            interface VaApplyOverlapCheckExtPlugin_S {
            }
            interface VaApplyOverlapCheckExtPlugin$ {
                /**
                 * 休假申请时判定单据间重叠校验时调用此扩展接口。
                 *
                 * <p>通过该接口可以指定一些休假类型的单据不参与和其他休假类型的重叠校验。比如设置哺乳假不参与重叠校验，那么在同一时段哺乳假和其他类型假可以同时存在</p>
                 * <p>示例代码可以参考休假申请单据重叠判定扩展场景示例，扩展场景编码：kd.sdk.wtc.wtabm.business.va.VaApplyRepeatCheckExtPlugin</p>
                 *
                 * @param onCheckVaApplyOverlapEvent 休假申请判定单据是否重叠时事件
                 */
                onCheckVaApplyOverlapTimePeriod(onCheckVaApplyOverlapEvent:OnCheckVaApplyOverlapEvent):void;
            }
            type VaApplyOverlapCheckExtPlugin_T = VaApplyOverlapCheckExtPlugin_S & VaApplyOverlapCheckExtPlugin$;
            interface VaApplyOverlapCheckExtPlugin extends VaApplyOverlapCheckExtPlugin_T {
            }
            interface VaInfoCallBackParam_S {
            }
            interface VaInfoCallBackParam_C extends VaInfoCallBackParam_S {
                new():VaInfoCallBackParam;
                /**
                 * @param rowIndex 休假信息分录行号
                 * @param vaInfoDyn 休假信息页的动态对象
                 * @param billView  单据页的view对象
                 */
                new(rowIndex:number,vaInfoDyn:$.kd.bos.dataentity.entity.DynamicObject,billView:$.kd.bos.form.IFormView):VaInfoCallBackParam;
            }
            interface VaInfoCallBackParam$ {
                /**
                 * @return 单据页的view对象
                 */
                getBillView():$.kd.bos.form.IFormView;
                /**
                 * @return 休假信息分录行号
                 */
                getRowIndex():number;
                /**
                 * @return 休假信息页的动态对象
                 */
                getVaInfoDyn():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * @param billView 单据页的view对象
                 */
                setBillView(billView:$.kd.bos.form.IFormView):void;
                /**
                 * @param rowIndex 休假信息分录行号
                 */
                setRowIndex(rowIndex:number):void;
                /**
                 * @param vaInfoDyn 休假信息页的动态对象
                 */
                setVaInfoDyn(vaInfoDyn:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type VaInfoCallBackParam_T = VaInfoCallBackParam_S & VaInfoCallBackParam$;
            interface VaInfoCallBackParam extends VaInfoCallBackParam_T {
            }
            interface VaTimeResult_S {
            }
            interface VaTimeResult_C extends VaTimeResult_S {
                /**
                 * 构造类
                 * @param valHour 必须；时长(单位：小时)，标品会默认对时长截取6位小数精度,设置为NULL会被认为是0请不要设置为NULL值
                 * @param valDay 必须；时长（单位：天），标品会默认对时长截取6位小数精度,设置为NULL会被认为是0请不要设置为NULL值
                 */
                new(valHour:$.java.math.BigDecimal,valDay:$.java.math.BigDecimal):VaTimeResult;
            }
            interface VaTimeResult$ {
                /**
                 * 判定结果是否有效(小时数和天数必须>0)
                 * @return true-有效；false-无效
                 */
                checkValid():boolean;
                /**
                 * 获取休假展示的单位（A-天；B-小时）,二次开发时如果有截断精度的需求可以此单位作参考
                 * @return 休假展示的单位（A-天；B-小时）
                 */
                getUnit():string;
                /**
                 * 获取时长(单位：天)
                 * @return 时长(单位：天)
                 */
                getValDay():$.java.math.BigDecimal;
                /**
                 * 获取时长(单位：小时)
                 * @return 时长(单位：小时)
                 */
                getValHour():$.java.math.BigDecimal;
                /**
                 * 设置时长（天为单位），标品会默认对时长截取6位小数精度,设置为NULL会被认为是0请不要设置为NULL值
                 * @param valDay 时长（天为单位）
                 */
                setValDay(valDay:$.java.math.BigDecimal):void;
                /**
                 * 设置时长（小时为单位），标品会默认对时长截取6位小数精度,设置为NULL会被认为是0请不要设置为NULL值
                 *
                 * @param valHour 时长（小时为单位）
                 */
                setValHour(valHour:$.java.math.BigDecimal):void;
            }
            type VaTimeResult_T = VaTimeResult_S & VaTimeResult$;
            interface VaTimeResult extends VaTimeResult_T {
            }
        }
        namespace kd.sdk.wtc.wtam{
            interface SdkWtcWtamModule_S {
            }
            type SdkWtcWtamModule_ST = $.kd.sdk.module.Module & SdkWtcWtamModule_S;
            interface SdkWtcWtamModule_C extends SdkWtcWtamModule_ST {
                new():SdkWtcWtamModule;
            }
            interface SdkWtcWtamModule$ {
            }
            type SdkWtcWtamModule_T = $.kd.sdk.module.Module & SdkWtcWtamModule_S & SdkWtcWtamModule$;
            interface SdkWtcWtamModule extends SdkWtcWtamModule_T {
            }
        }
        namespace kd.sdk.wtc.wtam.business.applytime{
            interface TpApplyTimeCalculateEvent_S {
            }
            interface TpApplyTimeCalculateEvent_C extends TpApplyTimeCalculateEvent_S {
                new(attFileBo:long,entryDy:$.kd.bos.dataentity.entity.DynamicObject,shiftMap:$.java.util.Map,result:kd.sdk.wtc.wtam.business.applytime.bean.TpApplyTimeCalculateResult):TpApplyTimeCalculateEvent;
            }
            interface TpApplyTimeCalculateEvent$ {
                getAttFileBo():long;
                getEntryDy():$.kd.bos.dataentity.entity.DynamicObject;
                getResult():kd.sdk.wtc.wtam.business.applytime.bean.TpApplyTimeCalculateResult;
                getShiftMap():$.java.util.Map;
            }
            type TpApplyTimeCalculateEvent_T = TpApplyTimeCalculateEvent_S & TpApplyTimeCalculateEvent$;
            interface TpApplyTimeCalculateEvent extends TpApplyTimeCalculateEvent_T {
            }
            interface TpApplyTimeCalculateExtPlugin_S {
            }
            interface TpApplyTimeCalculateExtPlugin$ {
                /**
                 * 自选时段申请，计算出差的申请时长
                 *
                 * <p>按自选时段申请时，计算出差的申请时长，该拓展会替换标品计算的出差自选时段申请时长
                 * </p>
                 *
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 * </code></pre>
                 *
                 * @param event 参数信息
                 */
                onCalculateApplyTime(event:TpApplyTimeCalculateEvent):void;
            }
            type TpApplyTimeCalculateExtPlugin_T = TpApplyTimeCalculateExtPlugin_S & TpApplyTimeCalculateExtPlugin$;
            interface TpApplyTimeCalculateExtPlugin extends TpApplyTimeCalculateExtPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtam.business.applytime.bean{
            interface TpApplyTimeCalculateResult_S {
            }
            type TpApplyTimeCalculateResult_ST = $.java.io.Serializable & TpApplyTimeCalculateResult_S;
            interface TpApplyTimeCalculateResult_C extends TpApplyTimeCalculateResult_ST {
                new():TpApplyTimeCalculateResult;
                new(valHour:$.java.math.BigDecimal,valDay:$.java.math.BigDecimal):TpApplyTimeCalculateResult;
            }
            interface TpApplyTimeCalculateResult$ {
                getValDay():$.java.math.BigDecimal;
                getValHour():$.java.math.BigDecimal;
                /**
                 * 添加时长
                 *
                 * @param target 被增加的对象
                 * @return base
                 */
                plus(target:TpApplyTimeCalculateResult):void;
                /**
                 * 添加时长
                 * @param valHour 小时数
                 * @param valDay 天数
                 */
                plus(valHour:$.java.math.BigDecimal,valDay:$.java.math.BigDecimal):void;
                setValDay(valDay:$.java.math.BigDecimal):void;
                setValHour(valHour:$.java.math.BigDecimal):void;
            }
            type TpApplyTimeCalculateResult_T = $.java.io.Serializable & TpApplyTimeCalculateResult_S & TpApplyTimeCalculateResult$;
            interface TpApplyTimeCalculateResult extends TpApplyTimeCalculateResult_T {
            }
        }
        namespace kd.sdk.wtc.wtam.business.tp{
            interface TpInfoExpService_S {
            }
            interface TpInfoExpService$ {
                /**
                 * 出差信息编辑/新增内容回写出差单据
                 *
                 * <p>出差PC端，在新增或编辑出差信息之后，点击确定按钮回写数据到出差单主页面的分录中，提供此扩展接口，做扩展字段回写处理</p>
                 *
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 * </code></pre>
                 *
                 * @param tpInfoParameterParam 参数信息
                 */
                onCallBackTpInfo(tpInfoParameterParam:TpInfoParameterParam):void;
                /**
                 * 本人变更/为他人变更单据页初始化
                 *
                 * <p>出差PC端，在本人列表/为他人列表变更后，变更单页面初始化时，分录数据赋值 ，提供此扩展接口，做扩展字段赋值处理</p>
                 *
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 * </code></pre>
                 *
                 * @param tpInfoParameterParam 参数信息
                 */
                setChangeTpInfoValue(tpInfoParameterParam:TpInfoParameterParam):void;
                /**
                 * 出差信息编辑显示字段值
                 *
                 * <p>出差PC端，在新增或编辑出差信息之后，点击确定按钮回写数据到出差单主页面的分录中，提供此扩展接口，做扩展字段回写处理</p>
                 *
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 * </code></pre>
                 *
                 * @param tpInfoParameterParam 参数信息
                 */
                setTpInfoValue(tpInfoParameterParam:TpInfoParameterParam):void;
            }
            type TpInfoExpService_T = TpInfoExpService_S & TpInfoExpService$;
            interface TpInfoExpService extends TpInfoExpService_T {
            }
            interface WtamHelper_S {
                readonly TRIP_PLAN_RULE_QUERY:string;
                readonly TRIP_SDK_SERVICE:string;
            }
            interface WtamHelper_C extends WtamHelper_S {
                new():WtamHelper;
            }
            interface WtamHelper$ {
                /**
                 * 获取出差规则（包含匹配的计算规则）
                 *
                 * <p>根据获取出差规则（包含匹配的计算规则）</p>
                 *
                 * <pre><code>
                 * </code></pre>
                 *
                 * @param queries 规则参数信息
                 */
                getTripRuleInfo(queries:$.java.util.List):$.java.util.List;
            }
            type WtamHelper_T = WtamHelper_S & WtamHelper$;
            interface WtamHelper extends WtamHelper_T {
            }
            interface TpInfoParameterParam_S {
            }
            interface TpInfoParameterParam_C extends TpInfoParameterParam_S {
                new():TpInfoParameterParam;
                /**
                 * @param view       页面的view对象
                 * @param jsonObject 出差信息
                 */
                new(view:$.kd.bos.form.IFormView,jsonObject:any):TpInfoParameterParam;
                /**
                 * @param view       页面的view对象
                 * @param jsonObject 出差信息
                 */
                new(view:$.kd.bos.form.IFormView,jsonObject:any,rowIndex:number):TpInfoParameterParam;
                /**
                 * @param rowIndex            休假信息分录行号
                 * @param view               页面的view对象
                 * @param closedCallBackEvent 回调事件参数
                 */
                new(rowIndex:number,view:$.kd.bos.form.IFormView,closedCallBackEvent:$.kd.bos.form.events.ClosedCallBackEvent):TpInfoParameterParam;
            }
            interface TpInfoParameterParam$ {
                getClosedCallBackEvent():$.kd.bos.form.events.ClosedCallBackEvent;
                getJsonObject():any;
                getRowIndex():number;
                getView():$.kd.bos.form.IFormView;
                setClosedCallBackEvent(closedCallBackEvent:$.kd.bos.form.events.ClosedCallBackEvent):void;
                setJsonObject(jsonObject:any):void;
                setRowIndex(rowIndex:number):void;
                setView(view:$.kd.bos.form.IFormView):void;
            }
            type TpInfoParameterParam_T = TpInfoParameterParam_S & TpInfoParameterParam$;
            interface TpInfoParameterParam extends TpInfoParameterParam_T {
            }
        }
        namespace kd.sdk.wtc.wtbs{
            interface SdkWtcWtbsModule_S {
            }
            type SdkWtcWtbsModule_ST = $.kd.sdk.module.Module & SdkWtcWtbsModule_S;
            interface SdkWtcWtbsModule_C extends SdkWtcWtbsModule_ST {
                new():SdkWtcWtbsModule;
            }
            interface SdkWtcWtbsModule$ {
            }
            type SdkWtcWtbsModule_T = $.kd.sdk.module.Module & SdkWtcWtbsModule_S & SdkWtcWtbsModule$;
            interface SdkWtcWtbsModule extends SdkWtcWtbsModule_T {
            }
        }
        namespace kd.sdk.wtc.wtbs.business.bill.dutydate{
            interface BillDutyDateExtPlugin_S {
            }
            interface BillDutyDateExtPlugin$ {
                /**
                 * 自选时段申请，自定义归属日期拓展插件。
                 *
                 * <p>按自选时段申请时，会计算自选时段的归属日期，该拓展会替换标准的归属日期进行各校验配置项的获取
                 * </p>
                 *
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 * </code></pre>
                 *
                 * @param onMatchBillDutyDateEvent 假勤单据归属日期事件
                 */
                onMatchBillDutyDate(onMatchBillDutyDateEvent:OnMatchBillDutyDateEvent):void;
            }
            type BillDutyDateExtPlugin_T = BillDutyDateExtPlugin_S & BillDutyDateExtPlugin$;
            interface BillDutyDateExtPlugin extends BillDutyDateExtPlugin_T {
            }
            interface OnMatchBillDutyDateEvent_S {
            }
            interface OnMatchBillDutyDateEvent_C extends OnMatchBillDutyDateEvent_S {
                new(startTime:Date,endTime:Date,standardDate:Date,dutyDateErrorEnum:kd.sdk.wtc.wtbs.common.enums.DutyDateErrorEnum):OnMatchBillDutyDateEvent;
            }
            interface OnMatchBillDutyDateEvent$ {
                /**
                 * 获取计算的标准归属日期的错误枚举
                 * @return 计算的标准日期的错误枚举
                 */
                getDutyDateErrorEnum():kd.sdk.wtc.wtbs.common.enums.DutyDateErrorEnum;
                /**
                 * 获取单据分录结束日期
                 * @return 单据分录结束日期
                 */
                getEndTime():Date;
                /**
                 * 获取标品计算的标准归属日期
                 * @return 计算的标准日期
                 */
                getStandardDate():Date;
                /**
                 * 获取单据分录开始日期
                 * @return 单据分录开始日期
                 */
                getStartTime():Date;
                setDutyDateErrorEnum(dutyDateErrorEnum:kd.sdk.wtc.wtbs.common.enums.DutyDateErrorEnum):void;
                setStandardDate(standardDate:Date):void;
            }
            type OnMatchBillDutyDateEvent_T = OnMatchBillDutyDateEvent_S & OnMatchBillDutyDateEvent$;
            interface OnMatchBillDutyDateEvent extends OnMatchBillDutyDateEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtbs.business.datarange{
            interface OnResolveDateRangeEvent_S {
            }
            interface OnResolveDateRangeEvent_C extends OnResolveDateRangeEvent_S {
                new(tieContextExt:kd.sdk.wtc.wtes.business.tie.core.chain.TieContextExt,timeBucketExt:kd.sdk.wtc.wtes.business.tie.model.timebucket.TimeBucketExt,conditionDtoExt:kd.sdk.wtc.wtbs.common.access.ConditionDtoExt,wtcDateRangeSource:kd.sdk.wtc.wtbs.common.enums.WTCDateRangeSource):OnResolveDateRangeEvent;
            }
            interface OnResolveDateRangeEvent$ {
                /**
                 * 获取条件表达式
                 * @return 条件表达式
                 */
                getConditionDtoExt():kd.sdk.wtc.wtbs.common.access.ConditionDtoExt;
                /**
                 * 获取匹配结果
                 * @return 匹配结果
                 */
                getResult():boolean;
                /**
                 * 获取核算的上下文对象
                 * @return 核算的上下文对象
                 */
                getTieContextExt():kd.sdk.wtc.wtes.business.tie.core.chain.TieContextExt;
                /**
                 * 获取时间对
                 * @return 时间对
                 */
                getTimeBucketExt():kd.sdk.wtc.wtes.business.tie.model.timebucket.TimeBucketExt;
                /**
                 * 获取日期范围扩展来源枚举
                 * @return 日期范围扩展来源枚举
                 */
                getWtcDateRangeSource():kd.sdk.wtc.wtbs.common.enums.WTCDateRangeSource;
                /**
                 * 设置匹配结果
                 * @param result 布尔值
                 */
                setResult(result:boolean):void;
            }
            type OnResolveDateRangeEvent_T = OnResolveDateRangeEvent_S & OnResolveDateRangeEvent$;
            interface OnResolveDateRangeEvent extends OnResolveDateRangeEvent_T {
            }
            interface DateRangeRuleExpPlugin_S {
            }
            interface DateRangeRuleExpPlugin$ {
                /**
                 * 考勤核算触发解析扩展的日期范围条件匹配的条件字段对应的结果的事件
                 * <p>
                 * 日期范围条件匹配的条件字段增加了之后，这些扩展字段的解析结果可以通过实现该接口来处理
                 *
                 * @param onResolveDateRangeEvent      核算触发解析扩展的日期范围事件对象
                 */
                onResolveDateRange(onResolveDateRangeEvent:OnResolveDateRangeEvent):void;
            }
            type DateRangeRuleExpPlugin_T = DateRangeRuleExpPlugin_S & DateRangeRuleExpPlugin$;
            interface DateRangeRuleExpPlugin extends DateRangeRuleExpPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtbs.business.limitcond{
            interface OnLimitConditionExpPlugin_S {
            }
            interface OnLimitConditionExpPlugin$ {
                /**
                 * 提单和核算触发解析 扩展的限定条件匹配的条件字段 对应的结果的事件
                 * <p>
                 * 限定条件匹配的条件字段增加了之后，这些扩展字段的解析结果可以通过实现该接口来处理
                 *
                 * @param onLimitConditionEvent 核算触发解析扩展的限定条件事件对象
                 */
                onLimitConditionEvent(onLimitConditionEvent:OnLimitConditionEvent):void;
            }
            type OnLimitConditionExpPlugin_T = OnLimitConditionExpPlugin_S & OnLimitConditionExpPlugin$;
            interface OnLimitConditionExpPlugin extends OnLimitConditionExpPlugin_T {
            }
            interface OnLimitConditionEvent_S {
            }
            interface OnLimitConditionEvent_C extends OnLimitConditionEvent_S {
                new(limitConditionSource:string,attFileVid:long,preLimitCondition:kd.sdk.wtc.wtes.business.tie.core.chain.PreLimitCondition,conditionDtoExt:kd.sdk.wtc.wtbs.common.access.ConditionDtoExt):OnLimitConditionEvent;
            }
            interface OnLimitConditionEvent$ {
                /**
                 * 获取档案版本ID
                 *
                 * @return
                 */
                getAttFileVid():long;
                /**
                 * 获取条件表达式
                 *
                 * @return 条件表达式
                 */
                getConditionDtoExt():kd.sdk.wtc.wtbs.common.access.ConditionDtoExt;
                /**
                 * 获取限定条件来源单据
                 *
                 * @return
                 */
                getLimitConditionSource():string;
                /**
                 * 获取标品条件值
                 *
                 * @return
                 */
                getPreLimitCondition():kd.sdk.wtc.wtes.business.tie.core.chain.PreLimitCondition;
                /**
                 * 获取匹配结果
                 *
                 * @return 匹配结果
                 */
                getResult():boolean;
                /**
                 * 设置匹配结果
                 *
                 * @param result 布尔值
                 */
                setResult(result:boolean):void;
            }
            type OnLimitConditionEvent_T = OnLimitConditionEvent_S & OnLimitConditionEvent$;
            interface OnLimitConditionEvent extends OnLimitConditionEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtbs.business.mobilescheme{
            interface SchemeIsFullMatchEvent_S {
            }
            interface SchemeIsFullMatchEvent_C extends SchemeIsFullMatchEvent_S {
                new():SchemeIsFullMatchEvent;
            }
            interface SchemeIsFullMatchEvent$ {
                isFull():boolean;
                setFull(full:boolean):void;
            }
            type SchemeIsFullMatchEvent_T = SchemeIsFullMatchEvent_S & SchemeIsFullMatchEvent$;
            interface SchemeIsFullMatchEvent extends SchemeIsFullMatchEvent_T {
            }
            interface SchemeMatchEvent_S {
            }
            interface SchemeMatchEvent_C extends SchemeMatchEvent_S {
                new(attFileSchemes:$.java.util.List,sceneNumber:string):SchemeMatchEvent;
            }
            interface SchemeMatchEvent$ {
                getAttFileSchemes():$.java.util.List;
                getResultSchemeIdMap():$.java.util.Map;
                getSceneNumber():string;
                getSceneValueMaps():string;
                setResultSchemeIdMap(resultSchemeIdMap:$.java.util.Map):void;
            }
            type SchemeMatchEvent_T = SchemeMatchEvent_S & SchemeMatchEvent$;
            interface SchemeMatchEvent extends SchemeMatchEvent_T {
            }
            interface ISchemeMatchPlugin_S {
            }
            interface ISchemeMatchPlugin$ {
                /**
                 * 设置是否完全由当前插件匹配（默认否）
                 *
                 * @param event
                 */
                fullMatch(event:SchemeIsFullMatchEvent):void;
                /**
                 * 匹配
                 *
                 * @param event
                 * @return
                 */
                matchScheme(event:SchemeMatchEvent):void;
            }
            type ISchemeMatchPlugin_T = ISchemeMatchPlugin_S & ISchemeMatchPlugin$;
            interface ISchemeMatchPlugin extends ISchemeMatchPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtbs.common.access{
            interface ConditionDtoExt_S {
            }
            interface ConditionDtoExt$ {
                /**
                 * 获取日期格式化字符串，当条件表达式对应的字段类型是日期类型且这个字段的格式化字符串配置了才有值
                 * @return 返回日期格式化字符串
                 */
                getDateFormat():string;
                /**
                 * 获取条件表达式中字段的显示名称
                 * @return 条件表达式字段的显示名称
                 */
                getDisplayParam():string;
                /**
                 * 获取参数显示值
                 * @return 返回参数显示值
                 */
                getDisplayValue():string;
                /**
                 * 获取条件表达式的序号
                 * @return 条件表达式的序号
                 */
                getIndex():number;
                /**
                 * 获取表达式名称，例如：T01，T02等
                 * @return 表达式名称
                 */
                getName():string;
                /**
                 * 获取冗余行政组织id
                 * @return 返回冗余行政组织id
                 */
                getObjectId():string;
                /**
                 * 获取冗余行政组织编码
                 * @return 返回冗余行政组织编码
                 */
                getObjectNumber():string;
                /**
                 * 操作符跟条件条件表达式的字段类型相关，具体操作符枚举如下：
                 *   <    表示   小于
                 *   >    表示   大于
                 *   <=   表示   小于等于
                 *   >=   表示   大于等于
                 *   ==   表示   等于
                 *   !=   表示    不等于
                 *   is_null   表示   为空
                 *   is_not_null    表示   不为空
                 *   in   表示   在...中
                 *   not_in    表示   不在...中
                 *   contains  表示   包含
                 *   not_contains   表示   不包含
                 *   startsWith     表示   以...开始
                 *   endsWith  表示   以...结束
                 *   0d   表示   今天
                 *   <=0d 表示   小于等于今天
                 *   >=0d 表示   大于等于今天
                 *   -1d  表示   昨天
                 *   1d   表示   明天
                 *   0w   表示   本周
                 *   -1w  表示   上周
                 *   1w   表示   下周
                 *   0m   表示   本月
                 *   -1m  表示   上月
                 *   1m   表示   下月
                 *   -3~0m     表示   过去三个月
                 *   0~3m 表示   未来三个月
                 *   0q   表示   本季度
                 *   -1q  表示   上季度
                 *   1q   表示   下季度
                 *   0y   表示   今年
                 *   -1y  表示   去年
                 *   1y   表示   明年
                 *   is_or_isSub    表示   等于/...的下级
                 *   <dom 表示   小于（日）
                 *   >dom 表示   大于（日）
                 *   <=dom     表示   小于等于（日）
                 *   >=dom     表示   大于等于（日）
                 *
                 * @return 返回操作符
                 */
                getOperators():string;
                /**
                 * 获取条件表达式的编码
                 * @return 返回条件表达式编码
                 */
                getParam():string;
                /**
                 * 条件表达式中字段的类型：
                 * boolean - 布尔值
                 * date - 日期
                 * string - 字符串
                 * number - 数字
                 * enum - 枚举
                 * dynamicObject - 动态对象
                 *
                 * @return 返回条件表达式中字段的类型
                 */
                getParamType():string;
                /**
                 * 是否指标表达式
                 * @return "true" - 是，"false" - 否
                 */
                getTarget():string;
                /**
                 * 获取条件表达式的值
                 * @return 返回条件表达式的值
                 */
                getValue():string;
                /**
                 * 值数据类型
                 */
                getValueDataType():string;
                /**
                 * 日期格式化字符
                 */
                getValueDateFormat():string;
                /**
                 *   获取值类型，1-参数，2-值
                 * @return 返回值的类型
                 */
                getValueType():string;
            }
            type ConditionDtoExt_T = $.java.io.Serializable & ConditionDtoExt_S & ConditionDtoExt$;
            interface ConditionDtoExt extends ConditionDtoExt_T {
            }
        }
        namespace kd.sdk.wtc.wtbs.common.constants{
            interface WTCRuleEngineConstants_S {
                readonly SOURCE_TYPE_BILL:string;
                readonly SOURCE_TYPE_TIE:string;
                readonly SOURCE_TYPE_TIE_PERIOD:string;
                readonly SOURCE_TYPE_TIE_QUOTA:string;
            }
            interface WTCRuleEngineConstants$ {
            }
            type WTCRuleEngineConstants_T = WTCRuleEngineConstants_S & WTCRuleEngineConstants$;
            interface WTCRuleEngineConstants extends WTCRuleEngineConstants_T {
            }
            interface WTCCommonConstants_S {
                readonly APP_ID_WTABM:string;
                readonly APP_ID_WTAM:string;
                readonly APP_ID_WTBS:string;
                readonly APP_ID_WTIS:string;
                readonly APP_ID_WTOM:string;
                readonly APP_ID_WTP:string;
                readonly APP_ID_WTPM:string;
                readonly APP_ID_WTS:string;
                readonly APP_ID_WTTE:string;
                readonly WTC_CLOUD_ID:string;
            }
            interface WTCCommonConstants$ {
            }
            type WTCCommonConstants_T = WTCCommonConstants_S & WTCCommonConstants$;
            interface WTCCommonConstants extends WTCCommonConstants_T {
            }
        }
        namespace kd.sdk.wtc.wtbs.common.enums{
            enum WTCDateRangeSource {
                IDP,
                VP,
                TP,
                OTP,
                EX
            }
            enum DutyDateErrorEnum {
                NOSHIFT,
                OVER_24,
                INSHIFTOT,
                CROSSSHIFT,
                START_END_ERROR,
                EMPTYSTARTDATE,
                UN_KNOW_ERROR
            }
            enum WTCBillType {
                VA,
                OT,
                BU,
                SU,
                SW
            }
            enum WTCApplyType {
                SELF,
                OTHER
            }
            enum RefDateType {
                TODAY,
                NEXT_DAY,
                PREV_DAY
            }
            enum UserModelType {
                PERSON,
                CMP_PERSON,
                EMP_PERSON,
                DEP_PERSON
            }
        }
        namespace kd.sdk.wtc.wtbs.common.model{
            interface Extendable_S {
            }
            interface Extendable$ {
                /**
                 * 获取指定的拓展属性
                 * @param key 属性名称
                 * @return 属性值
                 */
                getExtAttribute(key:string):any;
                /**
                 * 获取所有拓展属性
                 * @return 所有属性
                 */
                getExtAttributes():$.java.util.Map;
                /**
                 * 设置拓展属性
                 *
                 * @param key 属性名称
                 * @param value 属性值
                 */
                setExtAttribute(key:string,value:any):void;
            }
            type Extendable_T = Extendable_S & Extendable$;
            interface Extendable extends Extendable_T {
            }
            interface AbstractExtendableObj_S {
            }
            type AbstractExtendableObj_ST = Extendable_S & AbstractExtendableObj_S;
            interface AbstractExtendableObj_C extends AbstractExtendableObj_ST {
                new():AbstractExtendableObj;
            }
            interface AbstractExtendableObj$ {
            }
            type AbstractExtendableObj_T = Extendable & AbstractExtendableObj_S & AbstractExtendableObj$;
            interface AbstractExtendableObj extends AbstractExtendableObj_T {
            }
        }
        namespace kd.sdk.wtc.wtbs.common.timeseq{
            interface TimeSeqInfoExt_S {
            }
            interface TimeSeqInfoExt$ {
                /**
                 * 生效日期
                 *
                 * @return 生效日期
                 */
                getBSed():$.java.time.LocalDate;
                /**
                 * 业务对象id
                 * 同类对象的唯一标识
                 *
                 * @return 业务对象id
                 */
                getBid():long;
                /**
                 * 失效日期，不包含该日期
                 *
                 * @return 失效日期
                 */
                getBlSed():$.java.time.LocalDate;
                /**
                 * 版本id
                 *
                 * @return 版本id
                 */
                getVid?():long;
            }
            type TimeSeqInfoExt_T = IEntityExt & TimeSeqInfoExt_S & TimeSeqInfoExt$;
            interface TimeSeqInfoExt extends TimeSeqInfoExt_T {
            }
            interface TimeSeqVersionExt_S {
            }
            interface TimeSeqVersionExt$ {
                /**
                 * 获取业务对象id
                 * 如果不是时序性版本，则业务对象id和实体id相同
                 *
                 * @return 业务对象id
                 */
                getBid?():long;
                /**
                 * 获取时序信息
                 * 如果是时序性版本，则该方法不能返回 null
                 *
                 * @return 时序信息
                 */
                getTimeSeqInfo():TimeSeqInfoExt;
                /**
                 * 是否包含时序信息
                 *
                 * @return 如果包含时序信息则返回 true
                 */
                hasTimeSeqInfo?():boolean;
            }
            type TimeSeqVersionExt_T = IEntityExt & TimeSeqVersionExt_S & TimeSeqVersionExt$;
            interface TimeSeqVersionExt extends TimeSeqVersionExt_T {
            }
            interface IEntityExt_S {
            }
            interface IEntityExt$ {
                /**
                 * 实体id，是同类中的唯一标识
                 *
                 * @return 实体id
                 */
                getId():long;
                /**
                 * 实体编码，实体编码可以为null
                 *
                 * @return 实体编码
                 */
                getNumber():string;
            }
            type IEntityExt_T = IEntityExt_S & IEntityExt$;
            interface IEntityExt extends IEntityExt_T {
            }
        }
        namespace kd.sdk.wtc.wtbs.task{
            interface AfterSubTaskEndEvent_S {
            }
            interface AfterSubTaskEndEvent_C extends AfterSubTaskEndEvent_S {
                new(taskId:long,subTaskId:long,category:string):AfterSubTaskEndEvent;
            }
            interface AfterSubTaskEndEvent$ {
                /**
                 * 获取任务类型
                 * 请参考{@link kd.wtc.wtbs.business.task.enums.TaskCategoryEnum}
                 *
                 * @return 任务类型
                 */
                getCategory():string;
                /**
                 * 获取考勤子任务id
                 *
                 * @return 考勤主任务id
                 */
                getSubTaskId():long;
                /**
                 * 获取考勤主任务id
                 *
                 * @return 考勤主任务id
                 */
                getTaskId():long;
            }
            type AfterSubTaskEndEvent_T = AfterSubTaskEndEvent_S & AfterSubTaskEndEvent$;
            interface AfterSubTaskEndEvent extends AfterSubTaskEndEvent_T {
            }
            interface WTCTaskEndExtPlugin_S {
            }
            interface WTCTaskEndExtPlugin$ {
                /**
                 * 考勤主任务结束后处理事件，支持在考勤主任务结束后处理个性化的扩展逻辑。
                 * <p>当标品考勤主任务结束后，调用此扩展，处理个性化的扩展逻辑</p>
                 * <pre><code>
                 *         Long taskId = afterTaskEndEvent.getTaskId();
                 *         String category = afterTaskEndEvent.getCategory();
                 *         // 判断任务类型是考勤核算，TaskCategoryEnum.WTTE_TIE.getCode()
                 *         if (StringUtils.equals(category, "wtte_tie")) {
                 *             // 考勤主任务结束后发送消息或者做其他业务操作
                 *         }
                 * </code></pre>
                 *
                 * @param afterTaskEndEvent 考勤主任务结束后处理事件
                 */
                afterTaskEnd(afterTaskEndEvent:AfterTaskEndEvent):void;
            }
            type WTCTaskEndExtPlugin_T = WTCTaskEndExtPlugin_S & WTCTaskEndExtPlugin$;
            interface WTCTaskEndExtPlugin extends WTCTaskEndExtPlugin_T {
            }
            interface WTCSubTaskEndExtPlugin_S {
            }
            interface WTCSubTaskEndExtPlugin$ {
                /**
                 * 考勤子任务结束后处理事件，支持在考勤子任务结束后处理个性化的扩展逻辑。
                 * <p>当标品考勤子任务结束后，调用此扩展，处理个性化的扩展逻辑</p>
                 * <pre><code>
                 *         Long taskId = afterSubTaskEndEvent.getTaskId();
                 *         Long subTaskId = afterSubTaskEndEvent.getSubTaskId();
                 *         String category = afterSubTaskEndEvent.getCategory();
                 *         // 判断任务类型是考勤核算，TaskCategoryEnum.WTTE_TIE.getCode()
                 *         if (StringUtils.equals(category, "wtte_tie")) {
                 *             // 考勤子任务结束后发送消息或者做其他业务操作
                 *         }
                 * </code></pre>
                 *
                 * @param afterSubTaskEndEvent 考勤子任务结束后处理事件
                 */
                afterSubTaskEnd(afterSubTaskEndEvent:AfterSubTaskEndEvent):void;
            }
            type WTCSubTaskEndExtPlugin_T = WTCSubTaskEndExtPlugin_S & WTCSubTaskEndExtPlugin$;
            interface WTCSubTaskEndExtPlugin extends WTCSubTaskEndExtPlugin_T {
            }
            interface DispatchTaskResp_S {
            }
            interface DispatchTaskResp$ {
                /**
                 * 错误信息
                 * 描述：发起任务失败后的错误信息
                 * 说名：发起任务失败后的错误信息
                 */
                getErrorMsg():string;
                /**
                 * 任务id
                 * 描述：发起任务成功后返回的任务
                 * 说名：成功时返回的任务id
                 */
                getTaskId():long;
                /**
                 * 任务执行发起状态
                 * 描述：任务执行发起状态，true->成功  false->失败
                 * 说名：任务执行发起状态，true->成功  false->失败
                 */
                isSuccess():boolean;
            }
            type DispatchTaskResp_T = DispatchTaskResp_S & DispatchTaskResp$;
            interface DispatchTaskResp extends DispatchTaskResp_T {
            }
            interface AfterTaskEndEvent_S {
            }
            interface AfterTaskEndEvent_C extends AfterTaskEndEvent_S {
                new(taskId:long,category:string):AfterTaskEndEvent;
            }
            interface AfterTaskEndEvent$ {
                /**
                 * 获取任务类型
                 * 请参考{@link kd.wtc.wtbs.business.task.enums.TaskCategoryEnum}
                 *
                 * @return 任务类型
                 */
                getCategory():string;
                /**
                 * 获取考勤主任务id
                 *
                 * @return 考勤主任务id
                 */
                getTaskId():long;
            }
            type AfterTaskEndEvent_T = AfterTaskEndEvent_S & AfterTaskEndEvent$;
            interface AfterTaskEndEvent extends AfterTaskEndEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtes{
            interface SdkWtcWtesModule_S {
            }
            type SdkWtcWtesModule_ST = $.kd.sdk.module.Module & SdkWtcWtesModule_S;
            interface SdkWtcWtesModule_C extends SdkWtcWtesModule_ST {
                new():SdkWtcWtesModule;
            }
            interface SdkWtcWtesModule$ {
            }
            type SdkWtcWtesModule_T = $.kd.sdk.module.Module & SdkWtcWtesModule_S & SdkWtcWtesModule$;
            interface SdkWtcWtesModule extends SdkWtcWtesModule_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.qte{
            interface QteRequest_S {
            }
            interface QteRequest$ {
                /**
                 * 考勤档案BoId列表
                 */
                getAttFileBoIds():$.java.util.List;
                /**
                 * 考勤档案id列表
                 */
                getAttFileIds():$.java.util.List;
                /**
                 * 考勤人id列表
                 */
                getAttPersonIds():$.java.util.List;
                /**
                 * 是否校验权限
                 */
                getCheckAuth():boolean;
                /**
                 * 任务创建时间
                 */
                getCreateTime():$.java.time.LocalDateTime;
                /**
                 * 创建人id
                 */
                getCreateUserId():long;
                /**
                 * 动态定额类型
                 */
                getDyQtTypeIds():$.java.util.List;
                /**
                 * 结束日期
                 */
                getEndDate():$.java.time.LocalDate;
                /**
                 * 核算方案id
                 */
                getPlanId():long;
                /**
                 * 固定定额类型
                 */
                getRegQtTypeIds():$.java.util.List;
                /**
                 * 子任务分片index
                 */
                getShardingIndex():number;
                /**
                 * 开始日期
                 */
                getStartDate():$.java.time.LocalDate;
                /**
                 * 子任务id
                 */
                getSubTaskId():long;
                /**
                 * 主任务id
                 */
                getTaskId():long;
                /**
                 * 计算版本
                 */
                getVersion():string;
            }
            type QteRequest_T = QteRequest_S & QteRequest$;
            interface QteRequest extends QteRequest_T {
            }
            interface QteContextExt_S {
            }
            interface QteContextExt$ {
                /**
                 * 获取当前核算的考勤档案BOID
                 */
                getAttFileBoId():long;
                /**
                 * 获取当前核算的考勤人ID/自然人ID
                 */
                getAttPersonId():long;
                /**
                 * 获取当前核算的日期，定额核算计算日期
                 */
                getCalculateDate():$.java.time.LocalDate;
                /**
                 * 获取二开自定义初始化的数据
                 *
                 * @return 二开自定义的初始化的数据
                 */
                getExtInItData():any;
                /**
                 * 获取初始化信息
                 *
                 * @return 初始化参数
                 */
                getInitMap():$.java.util.Map;
            }
            type QteContextExt_T = QteContextExt_S & QteContextExt$;
            interface QteContextExt extends QteContextExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.qte.executor{
            interface QuotaDetailOverdrawQl_S {
            }
            type QuotaDetailOverdrawQl_ST = QuotaDetail_S & QuotaDetailOverdrawQl_S;
            interface QuotaDetailOverdrawQl_C extends QuotaDetailOverdrawQl_ST {
                new(id:long,attFileVid:long,orgId:long,qtTypeId:long,pCycleId:long,periodNum:number,source:string,genValue:$.java.math.BigDecimal,genStartDate:Date,genEndDate:Date,useStartDate:Date,useEndDate:Date,ownValue:$.java.math.BigDecimal,ownOdValue:$.java.math.BigDecimal,usableValue:$.java.math.BigDecimal,canBeOdValue:$.java.math.BigDecimal,changeSatrt:Date):QuotaDetailOverdrawQl;
            }
            interface QuotaDetailOverdrawQl$ {
                /**
                 * 可透支时长
                 * @param canBeOdValue
                 */
                setCanBeOdValue(canBeOdValue:$.java.math.BigDecimal):void;
                /**
                 * 享有透支时长
                 * @param ownOdValue
                 */
                setOwnOdValue(ownOdValue:$.java.math.BigDecimal):void;
            }
            type QuotaDetailOverdrawQl_T = QuotaDetail & QuotaDetailOverdrawQl_S & QuotaDetailOverdrawQl$;
            interface QuotaDetailOverdrawQl extends QuotaDetailOverdrawQl_T {
            }
            interface QuotaDetailOverdraw_S {
            }
            type QuotaDetailOverdraw_ST = QuotaDetail_S & QuotaDetailOverdraw_S;
            interface QuotaDetailOverdraw_C extends QuotaDetailOverdraw_ST {
                new(id:long,attFileVid:long,orgId:long,qtTypeId:long,pCycleId:long,periodNum:number,source:string,genValue:$.java.math.BigDecimal,genStartDate:Date,genEndDate:Date,useStartDate:Date,useEndDate:Date,ownValue:$.java.math.BigDecimal,ownOdValue:$.java.math.BigDecimal,usableValue:$.java.math.BigDecimal,canBeOdValue:$.java.math.BigDecimal,changeSatrt:Date):QuotaDetailOverdraw;
            }
            interface QuotaDetailOverdraw$ {
                /**
                 * 可透支时长
                 * @param canBeOdValue
                 */
                setCanBeOdValue(canBeOdValue:$.java.math.BigDecimal):void;
                /**
                 * 享有透支时长
                 * @param ownOdValue
                 */
                setOwnOdValue(ownOdValue:$.java.math.BigDecimal):void;
            }
            type QuotaDetailOverdraw_T = QuotaDetail & QuotaDetailOverdraw_S & QuotaDetailOverdraw$;
            interface QuotaDetailOverdraw extends QuotaDetailOverdraw_T {
            }
            interface QuotaDetail_S {
            }
            interface QuotaDetail_C extends QuotaDetail_S {
                new(id:long,attFileVid:long,orgId:long,qtTypeId:long,pCycleId:long,periodNum:number,source:string,genValue:$.java.math.BigDecimal,genStartDate:Date,genEndDate:Date,useStartDate:Date,useEndDate:Date,ownValue:$.java.math.BigDecimal,ownOdValue:$.java.math.BigDecimal,usableValue:$.java.math.BigDecimal,canBeOdValue:$.java.math.BigDecimal,changeSatrt:Date):QuotaDetail;
            }
            interface QuotaDetail$ {
                /**
                 * 考勤档案版本id
                 * @return
                 */
                getAttFileVid():long;
                /**
                 * 享有透支时长
                 * @return
                 */
                getCanBeOdValue():$.java.math.BigDecimal;
                /**
                 * 结转时长
                 * @return
                 */
                getCarryDownedValue():$.java.math.BigDecimal;
                /**
                 * 转薪酬时长
                 * @return
                 */
                getCarryToBusinessValue():$.java.math.BigDecimal;
                /**
                 * 跨组织、跨阶变更开始时间
                 * @return
                 */
                getChangeSatrt():Date;
                /**
                 * 离职时长
                 * @return
                 */
                getDepartCarryValue():$.java.math.BigDecimal;
                /**
                 * 变更描述
                 * @return
                 */
                getDesc():string;
                /**
                 * 生成结束时间
                 * @return
                 */
                getGenEndDate():Date;
                /**
                 * 生成开始时间
                 * @return
                 */
                getGenStartDate():Date;
                /**
                 * 标准时长
                 * @return
                 */
                getGenValue():$.java.math.BigDecimal;
                /**
                 *  定额明细Id
                 * @return
                 */
                getId():long;
                /**
                 * 失效时长
                 * @return
                 */
                getInvalidValue():$.java.math.BigDecimal;
                /**
                 * 考勤组织id
                 * @return
                 */
                getOrgId():long;
                /**
                 * 享有透支时长
                 * @return
                 */
                getOwnOdValue():$.java.math.BigDecimal;
                /**
                 * 享有时长
                 * @return
                 */
                getOwnValue():$.java.math.BigDecimal;
                /**
                 * 期数
                 * @return
                 */
                getPeriodNum():number;
                /**
                 * 定额类型
                 * @return
                 */
                getQtTypeId():long;
                /**
                 * 结算时长
                 * @return
                 */
                getSettlementValue():$.java.math.BigDecimal;
                /**
                 * 来源
                 * 系统生成	DT-000
                 * 往期结转	DT-001
                 * 手动	    DT-002
                 * 往期透支	DT-003
                 * 系统生成失效DT-004
                 * @return
                 */
                getSource():string;
                /**
                 * 可用时长
                 * @return
                 */
                getUsableValue():$.java.math.BigDecimal;
                /**
                 * 使用结束时间
                 * @return
                 */
                getUseEndDate():Date;
                /**
                 * 使用开始时间
                 * @return
                 */
                getUseStartDate():Date;
                /**
                 * 期间循环配置
                 * @return
                 */
                getpCycleId():long;
                /**
                 * 是否发生修改
                 * @return
                 */
                isModify():boolean;
                /**
                 * 设置变更描述
                 * @param desc
                 */
                setDesc(desc:string):void;
            }
            type QuotaDetail_T = QuotaDetail_S & QuotaDetail$;
            interface QuotaDetail extends QuotaDetail_T {
            }
            interface QteGenQTExtPlugin_S {
            }
            interface QteGenQTExtPlugin$ {
                /**
                 * 定额核算"定额生成"-“定额结转”步骤之后会调用改接口。
                 * 可根据入参数据对入参的（QuotaDetailOverdrawQl）quotaDetails中的值进行处理并返回。
                 * 当定额执行结转的步骤时会进入此节点。
                 * 可以通过此节点来修改已结转的数据
                 * 可以通过此节点来修改新增定额结转明细（来源是系统生成的）
                 * <p>
                 * 该接口返回的“结转时长”、“失效时长”、“转业务领域时长”、“结算时长”、“离职时长”如果进行修改，其中一条明细中“结转时长”、“离职时长”、“转业务领域时长”不能同时出现
                 * 则对应步骤中的对应值会进行替换，如果未对对应属性值进行修改，
                 * 则保持原样。
                 * <p>拓展示例：</p>
                 * <pre><code>
                 *  public void afterOverdrawQlGen(AfterQteGenQTEvent afterQteGenQTEvent) {
                 *          List<QuotaDetailCarryDwon> list = (List<QuotaDetailCarryDwon>) afterQteGenQTEvent.getQuotaDetails();
                 *         for (QuotaDetailCarryDwon detail : list) {
                 *             detail.setCarryValue(three, CarryDwonType.CARRY_TO_BUSINESS, Boolean.TRUE);
                 *              detail.setSettlementValue(BigDecimal.ONE);
                 *              detail.setInvalidValue(totleCarryValue);
                 *         }
                 *     }
                 * </code></pre>
                 * @param afterQteGenQTEvent
                 */
                afterCarryDwonQlGen?(afterQteGenQTEvent:AfterQteGenQTEvent):void;
                /**
                 * 定额核算"定额生成"-“入离职折算”步骤之后会调用改接口。
                 * 可根据入参数据对入参的（QuotaDetailInOut）quotaDetails中的值进行处理并返回。
                 * 当当前期间发生跨挂靠组织、跨阶是可能多条QuotaDetailInOut，
                 * 可以通过“跨组织、跨阶变更开始时间”来识别那条是跨阶前数据，
                 * 可以通过“档案版本”、“跨组织、跨阶变更开始时间”来识别那条是跨组织前数据。
                 * <p>
                 * 该接口返回的“享有时长”如果进行修改，
                 * 则对应步骤中的对应值会进行替换，如果未对对应属性值进行修改，
                 * 则保持原样。
                 *
                 * <p>拓展示例：</p>
                 * <pre><code>
                 *         public void afterInOutGen(AfterQteGenQTEvent afterQteGenQTEvent) {
                 *         List<QuotaDetailInOutGen> list = (List<QuotaDetailInOutGen>) afterQteGenQTEvent.getQuotaDetails();
                 *         for (QuotaDetailInOutGen detail : list) {
                 *             detail.setOwnValue(BigDecimal.ONE);
                 *             detail.setDesc("update in or out value");
                 *         }
                 *     }
                 * </code></pre>
                 * @param afterQteGenQTEvent
                 */
                afterInOutGen?(afterQteGenQTEvent:AfterQteGenQTEvent):void;
                /**
                 * 定额核算"定额生成"-“定额标准透支时长”步骤之后会调用改接口。
                 * 可根据入参数据对入参的（QuotaDetailOverdraw）quotaDetails中的值进行处理并返回。
                 * 当当前期间发生跨挂靠组织、跨阶是可能多条QuotaDetailOverdraw，
                 * 可以通过“跨组织、跨阶变更开始时间”来识别那条是跨阶前数据，
                 * 可以通过“档案版本”、“跨组织、跨阶变更开始时间”来识别那条是跨组织前数据。
                 * <p>
                 * 该接口返回的“享有透支时长”、“可透支时长”如果进行修改，
                 * 则对应步骤中的对应值会进行替换，如果未对对应属性值进行修改，
                 * 则保持原样。
                 * <p>拓展示例：</p>
                 * <pre><code>
                 *         public void afterOverdrawGen(AfterQteGenQTEvent afterQteGenQTEvent) {
                 *         List<QuotaDetailOverdrawGen> list = (List<QuotaDetailOverdrawGen>) afterQteGenQTEvent.getQuotaDetails();
                 *         for (QuotaDetailOverdrawGen detail : list) {
                 *             detail.setOwnOdValue(BigDecimal.ONE);
                 *             detail.setCanBeOdValue(BigDecimal.ONE);
                 *             detail.setDesc("update overdraw value");
                 *         }
                 *     }
                 * </code></pre>
                 * @param afterQteGenQTEvent
                 */
                afterOverdrawGen?(afterQteGenQTEvent:AfterQteGenQTEvent):void;
                /**
                 * 定额核算"定额生成"-“透支限定”步骤之后会调用改接口。
                 * 可根据入参数据对入参的（QuotaDetailOverdrawQl）quotaDetails中的值进行处理并返回。
                 * 当当前期间发生跨挂靠组织、跨阶是可能多条QuotaDetailOverdrawQl，
                 * 可以通过“跨组织、跨阶变更开始时间”来识别那条是跨阶前数据，
                 * 可以通过“档案版本”、“跨组织、跨阶变更开始时间”来识别那条是跨组织前数据。
                 * <p>
                 * 该接口返回的“享有透支时长”、“可透支时长”如果进行修改，
                 * 则对应步骤中的对应值会进行替换，如果未对对应属性值进行修改，
                 * 则保持原样。
                 * <p>拓展示例：</p>
                 * <pre><code>
                 *  public void afterOverdrawQlGen(AfterQteGenQTEvent afterQteGenQTEvent) {
                 *         List<QuotaDetailOverdrawQlGen> list = (List<QuotaDetailOverdrawQlGen>) afterQteGenQTEvent.getQuotaDetails();
                 *         for (QuotaDetailOverdrawQlGen detail : list) {
                 *             detail.setOwnOdValue(BigDecimal.ONE);
                 *             detail.setCanBeOdValue(BigDecimal.ONE);
                 *             detail.setDesc("update overdraw  qualification value");
                 *         }
                 *     }
                 * </code></pre>
                 * @param afterQteGenQTEvent
                 */
                afterOverdrawQlGen?(afterQteGenQTEvent:AfterQteGenQTEvent):void;
                /**
                 * 定额核算"定额生成"-“生成限定”步骤之后会调用改接口。
                 * 可根据入参数据对入参的（QuotaDetailQualification）quotaDetails中的值进行处理并返回。
                 * 当当前期间发生跨挂靠组织、跨阶是可能多条QuotaDetailQualification，
                 * 可以通过“跨组织、跨阶变更开始时间”来识别那条是跨阶前数据，
                 * 可以通过“档案版本”、“跨组织、跨阶变更开始时间”来识别那条是跨组织前数据。
                 * <p>
                 * 该接口返回的“享有时长”如果进行修改，
                 * 则对应步骤中的对应值会进行替换，如果未对对应属性值进行修改，
                 * 则保持原样。
                 *
                 * <p>拓展示例：</p>
                 * <pre><code>
                 *         public void afterQualificationGen(AfterQteGenQTEvent afterQteGenQTEvent) {
                 *         List<QuotaDetailQualificationGen> list = (List<QuotaDetailQualificationGen>) afterQteGenQTEvent.getQuotaDetails();
                 *         for (QuotaDetailQualificationGen detail : list) {
                 *             detail.setChange(true);
                 *             detail.setOwnValue(BigDecimal.ONE);
                 *             detail.setDesc("update qualification value");
                 *         }
                 *     }
                 * </code></pre>
                 * @param afterQteGenQTEvent
                 */
                afterQualificationGen?(afterQteGenQTEvent:AfterQteGenQTEvent):void;
                /**
                 * 定额核算"定额生成"-“标准定额生成”步骤之后会调用改接口。
                 * 可根据入参数据对入参的（QuotaDetailStandard）quotaDetails中的值进行处理并返回。
                 * 当当前期间发生跨挂靠组织、跨阶是可能多条QuotaDetailStandard，
                 * 可以通过“跨组织、跨阶变更开始时间”来识别那条是跨阶前数据，
                 * 可以通过“档案版本”、“跨组织、跨阶变更开始时间”来识别那条是跨组织前数据。
                 * <p>
                 * 该接口返回的“标准时长”、“生成开始时间”、“生成结束时间”如果进行修改，
                 * 则对应步骤中的对应值会进行替换，如果未对对应属性值进行修改，
                 * 则保持原样。
                 *
                 * <p>拓展示例：</p>
                 * <pre><code>
                 *       public void afterStandardGen(AfterQteGenQTEvent afterQteGenQTEvent) {
                 *         List<QuotaDetailStandardGen> list = (List<QuotaDetailStandardGen>) afterQteGenQTEvent.getQuotaDetails();
                 *         for (QuotaDetailStandardGen detail : list) {
                 *             detail.setGenValue(BigDecimal.ONE);
                 *             detail.setGenEndDate(new Date());
                 *             detail.setGenStartDate(new Date());
                 *             detail.setDesc("update Standard value");
                 *         }
                 *     }
                 * </code></pre>
                 * @param afterQteGenQTEvent
                 */
                afterStandardGen?(afterQteGenQTEvent:AfterQteGenQTEvent):void;
                /**
                 * 定额核算"定额生成"-“定额可用时间范围”步骤之后会调用改接口。
                 * 可根据入参数据对入参的（QuotaDetailUse）quotaDetails中的值进行处理并返回。
                 * 当当前期间发生跨挂靠组织、跨阶是可能多条QuotaDetailUse，
                 * 可以通过“跨组织、跨阶变更开始时间”来识别那条是跨阶前数据，
                 * 可以通过“档案版本”、“跨组织、跨阶变更开始时间”来识别那条是跨组织前数据。
                 * <p>
                 * 该接口返回的“使用开始时间”、“使用结束时间”如果进行修改，
                 * 则对应步骤中的对应值会进行替换，如果未对对应属性值进行修改，
                 * 则保持原样。
                 *
                 * <p>拓展示例：</p>
                 * <pre><code>
                 *         public void afterUseGen(AfterQteGenQTEvent afterQteGenQTEvent) {
                 *         List<QuotaDetailUseGen> list = (List<QuotaDetailUseGen>) afterQteGenQTEvent.getQuotaDetails();
                 *         for (QuotaDetailUseGen detail : list) {
                 *             detail.setUseEndDate(new Date());
                 *             detail.setUseStartDate(new Date());
                 *             detail.setDesc("update using value");
                 *         }
                 *     }
                 * </code></pre>
                 * @param afterQteGenQTEvent
                 */
                afterUseGen?(afterQteGenQTEvent:AfterQteGenQTEvent):void;
                /**
                 * 定额核算"定额生成"-“使用限定”步骤之后会调用改接口。
                 * 可根据入参数据对入参的（QuotaDetailUseQualification）quotaDetails中的值进行处理并返回。
                 * 当当前期间发生跨挂靠组织、跨阶是可能多条QuotaDetailUseQualification，
                 * 可以通过“跨组织、跨阶变更开始时间”来识别那条是跨阶前数据，
                 * 可以通过“档案版本”、“跨组织、跨阶变更开始时间”来识别那条是跨组织前数据。
                 * <p>
                 * 该接口返回的“享有时长”如果进行修改，
                 * 则对应步骤中的对应值会进行替换，如果未对对应属性值进行修改，
                 * 则保持原样。
                 * <p>拓展示例：</p>
                 * <pre><code>
                 *         public void afterUseQlGen(AfterQteGenQTEvent afterQteGenQTEvent) {
                 *         List<QuotaDetailUseQualificationGen> list = (List<QuotaDetailUseQualificationGen>) afterQteGenQTEvent.getQuotaDetails();
                 *         for (QuotaDetailUseQualificationGen detail : list) {
                 *             detail.setOwnValue(BigDecimal.ONE);
                 *             detail.setDesc("update use qualification value");
                 *         }
                 *     }
                 * </code></pre>
                 * @param afterQteGenQTEvent
                 */
                afterUseQlGen?(afterQteGenQTEvent:AfterQteGenQTEvent):void;
            }
            type QteGenQTExtPlugin_T = QteGenQTExtPlugin_S & QteGenQTExtPlugin$;
            interface QteGenQTExtPlugin extends QteGenQTExtPlugin_T {
            }
            interface QuotaDetailInOut_S {
            }
            type QuotaDetailInOut_ST = QuotaDetail_S & QuotaDetailInOut_S;
            interface QuotaDetailInOut_C extends QuotaDetailInOut_ST {
                new(id:long,attFileVid:long,orgId:long,qtTypeId:long,pCycleId:long,periodNum:number,source:string,genValue:$.java.math.BigDecimal,genStartDate:Date,genEndDate:Date,useStartDate:Date,useEndDate:Date,ownValue:$.java.math.BigDecimal,ownOdValue:$.java.math.BigDecimal,usableValue:$.java.math.BigDecimal,canBeOdValue:$.java.math.BigDecimal,changeSatrt:Date):QuotaDetailInOut;
            }
            interface QuotaDetailInOut$ {
                /**
                 * 享有时长
                 * @param ownValue
                 */
                setOwnValue(ownValue:$.java.math.BigDecimal):void;
            }
            type QuotaDetailInOut_T = QuotaDetail & QuotaDetailInOut_S & QuotaDetailInOut$;
            interface QuotaDetailInOut extends QuotaDetailInOut_T {
            }
            interface QuotaDetailQualification_S {
            }
            type QuotaDetailQualification_ST = QuotaDetail_S & QuotaDetailQualification_S;
            interface QuotaDetailQualification_C extends QuotaDetailQualification_ST {
                new(id:long,attFileVid:long,orgId:long,qtTypeId:long,pCycleId:long,periodNum:number,source:string,genValue:$.java.math.BigDecimal,genStartDate:Date,genEndDate:Date,useStartDate:Date,useEndDate:Date,ownValue:$.java.math.BigDecimal,ownOdValue:$.java.math.BigDecimal,usableValue:$.java.math.BigDecimal,canBeOdValue:$.java.math.BigDecimal,changeSatrt:Date):QuotaDetailQualification;
            }
            interface QuotaDetailQualification$ {
                /**
                 * 享有时间
                 * @param ownValue
                 */
                setOwnValue(ownValue:$.java.math.BigDecimal):void;
            }
            type QuotaDetailQualification_T = QuotaDetail & QuotaDetailQualification_S & QuotaDetailQualification$;
            interface QuotaDetailQualification extends QuotaDetailQualification_T {
            }
            interface QuotaDetailStandard_S {
            }
            type QuotaDetailStandard_ST = QuotaDetail_S & QuotaDetailStandard_S;
            interface QuotaDetailStandard_C extends QuotaDetailStandard_ST {
                new(id:long,attFileVid:long,orgId:long,qtTypeId:long,pCycleId:long,periodNum:number,source:string,genValue:$.java.math.BigDecimal,genStartDate:Date,genEndDate:Date,useStartDate:Date,useEndDate:Date,ownValue:$.java.math.BigDecimal,ownOdValue:$.java.math.BigDecimal,usableValue:$.java.math.BigDecimal,canBeOdValue:$.java.math.BigDecimal,changeSatrt:Date):QuotaDetailStandard;
            }
            interface QuotaDetailStandard$ {
                /**
                 * 生成结束时间
                 * @param genEndDate
                 */
                setGenEndDate(genEndDate:Date):void;
                /**
                 * 生成时间
                 * @param genStartDate
                 */
                setGenStartDate(genStartDate:Date):void;
                /**
                 * 标准时长
                 * @param genValue
                 */
                setGenValue(genValue:$.java.math.BigDecimal):void;
            }
            type QuotaDetailStandard_T = QuotaDetail & QuotaDetailStandard_S & QuotaDetailStandard$;
            interface QuotaDetailStandard extends QuotaDetailStandard_T {
            }
            interface AfterQteGenQTEvent_S {
            }
            interface AfterQteGenQTEvent_C extends AfterQteGenQTEvent_S {
                new(attPersonId:long,calculateDate:$.java.time.LocalDate,matchRule:$.java.util.Map,attFileBid:long,quotaDetails:$.java.util.List,initDataExt:any,initData:$.java.util.Map,lineVar:$.java.util.Map):AfterQteGenQTEvent;
            }
            interface AfterQteGenQTEvent$ {
                /**
                 * 考勤档案BOID
                 * @return
                 */
                getAttFileBid():long;
                /**
                 * 考勤人id
                 * @return
                 */
                getAttPersonId():long;
                /**
                 * 计算日期
                 * @return
                 */
                getCalculateDate():$.java.time.LocalDate;
                /**
                 * 初始化参数
                 * @return
                 */
                getInitData():$.java.util.Map;
                /**
                 * 拓展的初始化参数。
                 * @return
                 */
                getInitDataExt():any;
                /**
                 * 流水线缓存
                 * @return
                 */
                getLineVar():$.java.util.Map;
                /**
                 * 获取匹配规则
                 * @return
                 */
                getMatchRule():$.java.util.Map;
                getQuotaDetails():$.java.util.List;
            }
            type AfterQteGenQTEvent_T = AfterQteGenQTEvent_S & AfterQteGenQTEvent$;
            interface AfterQteGenQTEvent extends AfterQteGenQTEvent_T {
            }
            interface QuotaDetailUseQualification_S {
            }
            type QuotaDetailUseQualification_ST = QuotaDetail_S & QuotaDetailUseQualification_S;
            interface QuotaDetailUseQualification_C extends QuotaDetailUseQualification_ST {
                new(id:long,attFileVid:long,orgId:long,qtTypeId:long,pCycleId:long,periodNum:number,source:string,genValue:$.java.math.BigDecimal,genStartDate:Date,genEndDate:Date,useStartDate:Date,useEndDate:Date,ownValue:$.java.math.BigDecimal,ownOdValue:$.java.math.BigDecimal,usableValue:$.java.math.BigDecimal,canBeOdValue:$.java.math.BigDecimal,changeSatrt:Date):QuotaDetailUseQualification;
            }
            interface QuotaDetailUseQualification$ {
                setOwnValue(ownValue:$.java.math.BigDecimal):void;
            }
            type QuotaDetailUseQualification_T = QuotaDetail & QuotaDetailUseQualification_S & QuotaDetailUseQualification$;
            interface QuotaDetailUseQualification extends QuotaDetailUseQualification_T {
            }
            interface QuotaDetailUse_S {
            }
            type QuotaDetailUse_ST = QuotaDetail_S & QuotaDetailUse_S;
            interface QuotaDetailUse_C extends QuotaDetailUse_ST {
                new(id:long,attFileVid:long,orgId:long,qtTypeId:long,pCycleId:long,periodNum:number,source:string,genValue:$.java.math.BigDecimal,genStartDate:Date,genEndDate:Date,useStartDate:Date,useEndDate:Date,ownValue:$.java.math.BigDecimal,ownOdValue:$.java.math.BigDecimal,usableValue:$.java.math.BigDecimal,canBeOdValue:$.java.math.BigDecimal,changeSatrt:Date):QuotaDetailUse;
            }
            interface QuotaDetailUse$ {
                /**
                 * 使用结束时间
                 * @param useEndDate
                 */
                setUseEndDate(useEndDate:Date):void;
                /**
                 * 使用开始时间
                 * @param useStartDate
                 */
                setUseStartDate(useStartDate:Date):void;
            }
            type QuotaDetailUse_T = QuotaDetail & QuotaDetailUse_S & QuotaDetailUse$;
            interface QuotaDetailUse extends QuotaDetailUse_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.qte.gendate{
            interface AfterQteNoGenDateEvent_S {
            }
            interface AfterQteNoGenDateEvent_C extends AfterQteNoGenDateEvent_S {
                new(attPersonId:long,attFileBoId:long,attFileVid:long,noGenDateType:string,baseDate:$.java.time.LocalDate,noGenDate:Date,initDataExt:any,initData:$.java.util.Map):AfterQteNoGenDateEvent;
            }
            interface AfterQteNoGenDateEvent$ {
                /**
                 * 考勤档案BOID
                 */
                getAttFileBoId():long;
                /**
                 * 考勤档案版本id,当前定额期间所使用的档案版本
                 */
                getAttFileVid():long;
                /**
                 * 考勤人bid
                 */
                getAttPersonId():long;
                /**
                 * 基准日期
                 */
                getBaseDate():$.java.time.LocalDate;
                /**
                 * 初始化参数
                 */
                getInitData():$.java.util.Map;
                /**
                 * 二开拓展的初始化参数。
                 * 值为初始化拓展接口 {@link QteParamInitExtPlugin#afterAllParamInit(AfterQteAllParamInitEvent) QTInitExtPlugin#onInitParamFinish} 的返回值。
                 * 注意：调用该接口时，初始化拓展接口 {@link QteParamInitExtPlugin#afterAllParamInit(AfterQteAllParamInitEvent) QTInitExtPlugin#onInitParamFinish} 可能还未被执行！
                 */
                getInitDataExt():any;
                /**
                 * 特定日期前不生成日期，可能为 null。
                 * 标品解析后的特定日期前不生成日期值，如果是二开扩展的参考日期，其值为null。
                 */
                getNoGenDate():Date;
                /**
                 * 系统想要特定日期前不生成的类型。
                 * 系统可能已经计算出该特定日期前不生成的类型对应的实际日期值并设置在 {@link #getNoGenDate()} 中。
                 */
                getNoGenDateType():string;
                /**
                 * 设置特定日期前不生成日期值.
                 * 二开扩展中通过覆盖该字段，实现扩展
                 *
                 * @param noGenDate 特定日期前不生成日期
                 */
                setNoGenDate(noGenDate:Date):void;
            }
            type AfterQteNoGenDateEvent_T = AfterQteNoGenDateEvent_S & AfterQteNoGenDateEvent$;
            interface AfterQteNoGenDateEvent extends AfterQteNoGenDateEvent_T {
            }
            interface QteNoGenDateResolutionExtPlugin_S {
            }
            interface QteNoGenDateResolutionExtPlugin$ {
                /**
                 * 特定日期前不生成扩展接口，定额核算在解析得出特定日期前不生成de日期后，将会执行该方法。
                 * 可根据入参中的特定日期前不生成类型以及特定日期前不生成日期的值进行特性化处理并返回。
                 * <p>
                 * 该接口所返回的非null特定日期前不生成日期的值将会替换原定额核算出的特定日期前不生成日期的值。
                 * 如果返回null，定额核算将仍然使用原值进行处理。
                 *
                 * <p>拓展示例：</p>
                 * <pre><code>
                 *     public void afterResolveNoGenDate(AfterQteNoGenDateEvent event) {
                 *         Date noGenDate = queryAllExpandNoGenDate(event.getAttPersonId(), event.getNoGenDateType());
                 *         Date resNoGenDate = noGenDate != null ? noGenDate : event.getNoGenDate();
                 *         event.setNoGenDate(resNoGenDate);
                 *     }
                 *     private Date queryAllExpandNoGenDate(long personBid, String noGenDateType) {
                 *         return personBid % 2 == 1 ? null : new Date();
                 *     }
                 * </code></pre>
                 *
                 * @param event 特定日期前不生成
                 */
                afterResolveNoGenDate(event:AfterQteNoGenDateEvent):void;
            }
            type QteNoGenDateResolutionExtPlugin_T = QteNoGenDateResolutionExtPlugin_S & QteNoGenDateResolutionExtPlugin$;
            interface QteNoGenDateResolutionExtPlugin extends QteNoGenDateResolutionExtPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.qte.init{
            interface QteParamInitRequest_S {
            }
            interface QteParamInitRequest_C extends QteParamInitRequest_S {
                new(attPersonIds:$.java.util.List,startDate:$.java.time.LocalDate,endDate:$.java.time.LocalDate,request:QteRequest):QteParamInitRequest;
            }
            interface QteParamInitRequest$ {
                /**
                 * 需要初始化的考勤人id集合
                 */
                getAttPersonIds():$.java.util.List;
                /**
                 * 需要初始化的结束日期
                 */
                getEndDate():$.java.time.LocalDate;
                /**
                 * 定额核算请求
                 */
                getRequest():QteRequest;
                /**
                 * 需要初始化的开始日期
                 */
                getStartDate():$.java.time.LocalDate;
            }
            type QteParamInitRequest_T = QteParamInitRequest_S & QteParamInitRequest$;
            interface QteParamInitRequest extends QteParamInitRequest_T {
            }
            interface BeforeQteCycSetInitEvent_S {
            }
            interface BeforeQteCycSetInitEvent_C extends BeforeQteCycSetInitEvent_S {
                new(attPersonId:long,attFileBoId:long,config:kd.sdk.wtc.wtes.business.qte.init.model.CircleConfig,initData:$.java.util.Map):BeforeQteCycSetInitEvent;
            }
            interface BeforeQteCycSetInitEvent$ {
                /**
                 * 添加期间循环
                 * @param circleRestValue
                 */
                addCircleRestValue(circleRestValue:kd.sdk.wtc.wtes.business.qte.init.model.CircleRest):void;
                getAttFileBoId():long;
                getAttPersonId():long;
                getCircleRestValues():$.java.util.List;
                getConfig():kd.sdk.wtc.wtes.business.qte.init.model.CircleConfig;
                getInitData():$.java.util.Map;
                isEmptyCircleTag():boolean;
                /**
                 * 设置空期间循环(注意如果想生成一个空的区间必须设置空期间，否者标品会根据配置生成期间循环)
                 */
                setEmptyCircleRests():void;
            }
            type BeforeQteCycSetInitEvent_T = BeforeQteCycSetInitEvent_S & BeforeQteCycSetInitEvent$;
            interface BeforeQteCycSetInitEvent extends BeforeQteCycSetInitEvent_T {
            }
            interface QteCycSetInitExtPlugin_S {
            }
            interface QteCycSetInitExtPlugin$ {
                /**
                 * 在定额核算的初始化阶段中，期间循环初始化。
                 * 通过event.getConfig()获取期间循环配置，
                 * 生成期间循环加入到addCircleRestValue中，
                 * 如果生成一个空的期间一定要设置setEmptyCircleRests(),不然标品会根据配置生成期间循环
                 * @param event 期间循环初始化
                 */
                beforeCycsetInit?(event:BeforeQteCycSetInitEvent):void;
            }
            type QteCycSetInitExtPlugin_T = QteCycSetInitExtPlugin_S & QteCycSetInitExtPlugin$;
            interface QteCycSetInitExtPlugin extends QteCycSetInitExtPlugin_T {
            }
            interface AfterQteParamInitEvent_S {
            }
            interface AfterQteParamInitEvent_C extends AfterQteParamInitEvent_S {
                new(category:string,currentInitParam:any,initParamReq:QteParamInitRequest,initData:$.java.util.Map):AfterQteParamInitEvent;
            }
            interface AfterQteParamInitEvent$ {
                /**
                 * 要初始化的参数类型
                 */
                getCategory():string;
                /**
                 * 本次参数初始化执行的结果
                 */
                getCurrentInitParam():any;
                /**
                 * 前置阶段的初始化数据
                 */
                getInitData():$.java.util.Map;
                /**
                 * 参数初始化请求参数
                 */
                getInitParamReq():QteParamInitRequest;
            }
            type AfterQteParamInitEvent_T = AfterQteParamInitEvent_S & AfterQteParamInitEvent$;
            interface AfterQteParamInitEvent extends AfterQteParamInitEvent_T {
            }
            interface QteParamInitExtPlugin_S {
            }
            interface QteParamInitExtPlugin$ {
                /**
                 * 在定额核算中，当初始化阶段完成时，将会执行该方法。
                 * 可通过该方法返回个性化拓展的初始化数据，所返回的个性化初始数据在后续的回调节点都将会被携带。
                 *
                 * @param event 初始化阶段完成事件
                 */
                afterAllParamInit?(event:AfterQteAllParamInitEvent):void;
                /**
                 * 在定额核算的初始化阶段中，当考勤人员初始化完毕后，将会执行该方法。
                 * 可通过该方法拓展初始化的考勤人员数据。
                 *
                 * @param event 考勤人员初始化完毕事件
                 */
                afterParamInit?(event:AfterQteParamInitEvent):void;
            }
            type QteParamInitExtPlugin_T = QteParamInitExtPlugin_S & QteParamInitExtPlugin$;
            interface QteParamInitExtPlugin extends QteParamInitExtPlugin_T {
            }
            interface AfterQteAllParamInitEvent_S {
            }
            interface AfterQteAllParamInitEvent_C extends AfterQteAllParamInitEvent_S {
                new(initRequest:QteRequest,initData:$.java.util.Map):AfterQteAllParamInitEvent;
            }
            interface AfterQteAllParamInitEvent$ {
                /**
                 * 当前定额核算已经初始化的参数
                 */
                getInitData():$.java.util.Map;
                /**
                 * 二开扩展的初始化参数
                 */
                getInitDataExt():any;
                /**
                 * 参数初始化请求参数
                 */
                getInitRequest():QteRequest;
                /**
                 * 设置二开初始化参数
                 *
                 * @param initDataExt 二开初始化参数
                 */
                setInitDataExt(initDataExt:any):void;
            }
            type AfterQteAllParamInitEvent_T = AfterQteAllParamInitEvent_S & AfterQteAllParamInitEvent$;
            interface AfterQteAllParamInitEvent extends AfterQteAllParamInitEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.qte.init.model{
            interface DataPoint_S {
            }
            interface DataPoint_C extends DataPoint_S {
                new():DataPoint;
            }
            interface DataPoint$ {
                getAfterValue():any;
                getBeforeValue():any;
                getDate():Date;
                setAfterValue(afterValue:any):void;
                setBeforeValue(beforeValue:any):void;
                setDate(date:Date):void;
            }
            type DataPoint_T = DataPoint_S & DataPoint$;
            interface DataPoint extends DataPoint_T {
            }
            enum CircleUnitEnum {
                CIRCLE_UNIT_DAY,
                CIRCLE_UNIT_WEEK,
                CIRCLE_UNIT_MONTH,
                CIRCLE_UNIT_YEAR,
                CIRCLE_UNIT_PERIOD
            }
            interface QuotaGenConditionExt_S {
                readonly GEN_CONDITION_INIT_KEY:string;
            }
            interface QuotaGenConditionExt_C extends QuotaGenConditionExt_S {
                /**
                 * @param recordDatas
                 */
                new(recordDatas:$.java.util.Map):QuotaGenConditionExt;
            }
            interface QuotaGenConditionExt$ {
                /**
                 * 获取核算日期时对应的条件值
                 *
                 * @param boid          档案Boid
                 * @param calculateDate 核算时间(yyyy.MM.dd HH:mm:ss)
                 * @return
                 */
                getConditionValue(boid:long,calculateDate:Date):$.java.util.Map;
            }
            type QuotaGenConditionExt_T = QuotaGenConditionExt_S & QuotaGenConditionExt$;
            interface QuotaGenConditionExt extends QuotaGenConditionExt_T {
            }
            interface CircleConfig_S {
            }
            interface CircleConfig_C extends CircleConfig_S {
                new():CircleConfig;
            }
            interface CircleConfig$ {
                getBeginDate():Date;
                getBeginDateId():long;
                getCirValue():$.java.util.List;
                getCircleUnitEnum():CircleUnitEnum;
                getCount():number;
                getDate():number;
                getEndDate():Date;
                getId():long;
                getInterval():$.java.util.List;
                getIntervalStr():string;
                getIntervalUnit():CircleUnitEnum;
                getMonth():number;
                getMonthDate():number;
                getName():string;
                getPerAttPeriods():$.java.util.List;
                getQtCalEndDate():Date;
                getSelDate():Date;
                getWeekDate():number;
                getYearDate():string;
                isAppointDate():boolean;
                isQtCalCall():boolean;
                setAppointDate(appointDate:boolean):void;
                setBeginDate(beginDate:Date):void;
                setBeginDateId(beginDateId:long):void;
                setCirValue(cirValue:$.java.util.List):void;
                setCircleUnitEnum(circleUnitEnum:CircleUnitEnum):void;
                setCount(count:number):void;
                setDate(date:number):void;
                setEndDate(endDate:Date):void;
                setId(id:long):void;
                setInterval(interval:$.java.util.List):void;
                setIntervalStr(intervalStr:string):void;
                setIntervalUnit(intervalUnit:CircleUnitEnum):void;
                setMonth(month:number):void;
                setMonthDate(monthDate:number):void;
                setName(name:string):void;
                setPerAttPeriods(perAttPeriods:$.java.util.List):void;
                setQtCalCall(qtCalCall:boolean):void;
                setQtCalEndDate(qtCalEndDate:Date):void;
                setSelDate(selDate:Date):void;
                setWeekDate(weekDate:number):void;
                setYearDate(yearDate:string):void;
            }
            type CircleConfig_T = CircleConfig_S & CircleConfig$;
            interface CircleConfig extends CircleConfig_T {
            }
            interface CircleRest_S {
            }
            interface CircleRest_C extends CircleRest_S {
                new():CircleRest;
            }
            interface CircleRest$ {
                getCirValue():number;
                getEndDate():Date;
                getIndex():number;
                getInterval():number;
                getStartDate():Date;
                setCirValue(cirValue:number):void;
                setEndDate(endDate:Date):void;
                setIndex(index:number):void;
                setInterval(interval:number):void;
                setStartDate(startDate:Date):void;
            }
            type CircleRest_T = CircleRest_S & CircleRest$;
            interface CircleRest extends CircleRest_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.qte.refdate{
            interface AfterQteResolveRefDateEvent_S {
            }
            interface AfterQteResolveRefDateEvent_C extends AfterQteResolveRefDateEvent_S {
                new(attPersonId:long,attFileBoId:long,attFileVid:long,baseDate:$.java.time.LocalDate,refDateBaseDataId:long,refDate:Date,initDataExt:any,initData:$.java.util.Map):AfterQteResolveRefDateEvent;
            }
            interface AfterQteResolveRefDateEvent$ {
                /**
                 * 考勤档案BOID
                 */
                getAttFileBoId():long;
                /**
                 * 考勤档案版本id,当前定额期间所使用的档案版本
                 */
                getAttFileVid():long;
                /**
                 * 考勤人bid
                 */
                getAttPersonId():long;
                /**
                 * 基准日期
                 */
                getBaseDate():$.java.time.LocalDate;
                /**
                 * 初始化参数
                 */
                getInitData():$.java.util.Map;
                /**
                 * 二开拓展的初始化参数。
                 * 值为初始化拓展接口 {@link QteParamInitExtPlugin#afterAllParamInit(AfterQteAllParamInitEvent) QTInitExtPlugin#onInitParamFinish} 的返回值。
                 * 注意：调用该接口时，初始化拓展接口 {@link QteParamInitExtPlugin#afterAllParamInit(AfterQteAllParamInitEvent) QTInitExtPlugin#onInitParamFinish} 可能还未被执行！
                 */
                getInitDataExt():any;
                /**
                 * 参照日期，可能为 null。
                 * 标品解析后的参考日期值，如果是二开扩展的参考日期，其值为null。
                 */
                getRefDate():Date;
                /**
                 * 系统想要获取的参照日期的id。
                 * 系统可能已经计算出该参照日期id对应的实际日期值并设置在 {@link #getRefDate()} 中。
                 */
                getRefDateBaseDataId():long;
                /**
                 * 设置参考日期值.
                 * 二开扩展中通过覆盖该字段，实现扩展
                 *
                 * @param refDate 参考日期
                 */
                setRefDate(refDate:Date):void;
            }
            type AfterQteResolveRefDateEvent_T = AfterQteResolveRefDateEvent_S & AfterQteResolveRefDateEvent$;
            interface AfterQteResolveRefDateEvent extends AfterQteResolveRefDateEvent_T {
            }
            interface QteRefDateResolutionExtPlugin_S {
            }
            interface QteRefDateResolutionExtPlugin$ {
                /**
                 * 参照日期扩展接口，定额核算在解析得出参照日期后，将会执行该方法。
                 * 可根据入参中的参照日期id以及参照日期的值进行特性化处理并返回。
                 * <p>
                 * 该接口所返回的非null参照日期值将会替换原定额核算出的参照日期值。
                 * 如果返回null，定额核算将仍然使用原值进行处理。
                 *
                 * <p>拓展示例：</p>
                 * <pre><code>
                 *     public void afterResolveRefDate(AfterQteResolveRefDateEvent event) {
                 *         Date refDate = queryAllExpandRefDate(event.getAttPersonId(), event.getRefDateBaseDataId());
                 *         Date resRefDate = refDate != null ? refDate : event.getRefDate();
                 *         event.setRefDate(resRefDate);
                 *     }
                 *     private Date queryAllExpandRefDate(long personBid, long refDateId) {
                 *         return personBid % 2 == 1 ? null : new Date();
                 *     }
                 * </code></pre>
                 *
                 * @param event 参照日期生成参数
                 */
                afterResolveRefDate(event:AfterQteResolveRefDateEvent):void;
            }
            type QteRefDateResolutionExtPlugin_T = QteRefDateResolutionExtPlugin_S & QteRefDateResolutionExtPlugin$;
            interface QteRefDateResolutionExtPlugin extends QteRefDateResolutionExtPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.qte.varcondition{
            interface AfterQteResolveVarConditionEvent_S {
            }
            interface AfterQteResolveVarConditionEvent_C extends AfterQteResolveVarConditionEvent_S {
                new(attPersonId:long,attFileBoId:long,attFileVid:long,baseDate:$.java.time.LocalDate,baseDataIds:$.java.util.Set,varValue:$.java.util.Map,startDay:Date,endDay:Date,initDataExt:any,initData:$.java.util.Map):AfterQteResolveVarConditionEvent;
            }
            interface AfterQteResolveVarConditionEvent$ {
                /**
                 * 考勤档案BOID
                 */
                getAttFileBoId():long;
                /**
                 * 考勤档案版本id,当前定额期间所使用的档案版本
                 */
                getAttFileVid():long;
                /**
                 * 考勤人bid
                 */
                getAttPersonId():long;
                /**
                 * 系统想要获取的参照日期的id。
                 * 系统可能已经计算出该参照日期id对应的实际日期值并设置在 {@link #getVarValue(Long)} 中。
                 */
                getBaseDataIds():$.java.util.Set;
                /**
                 * 基准日期
                 */
                getBaseDate():$.java.time.LocalDate;
                /**
                 * 系统计算变量条件值的结束日期。
                 * 计算变量条件在{@link #getStartDay}与{@link #getEndDay}之间值是多少？
                 */
                getEndDay():Date;
                /**
                 * 初始化参数
                 */
                getInitData():$.java.util.Map;
                /**
                 * 二开拓展的初始化参数。
                 * 值为初始化拓展接口 {@link QteParamInitExtPlugin#afterAllParamInit(AfterQteAllParamInitEvent) QTInitExtPlugin#onInitParamFinish} 的返回值。
                 * 注意：调用该接口时，初始化拓展接口 {@link QteParamInitExtPlugin#afterAllParamInit(AfterQteAllParamInitEvent) QTInitExtPlugin#onInitParamFinish} 可能还未被执行！
                 */
                getInitDataExt():any;
                /**
                 * 系统计算变量条件值的开始日期。
                 * 计算变量条件在{@link #getStartDay()}与{@link #getEndDay()}之间值是多少？
                 */
                getStartDay():Date;
                /**
                 * 变量条件值，可能为 null。
                 * 标品解析后的变量条件值，如果是二开扩展的变量条件，其值为null。
                 */
                getVarValue(baseDataId:long):$.java.math.BigDecimal;
                /**
                 * 设置变量条件值.
                 * 二开扩展中通过覆盖该字段，实现扩展
                 *
                 * @param value 变量条件值
                 */
                setVarValue(baseDataId:long,value:$.java.math.BigDecimal):void;
            }
            type AfterQteResolveVarConditionEvent_T = AfterQteResolveVarConditionEvent_S & AfterQteResolveVarConditionEvent$;
            interface AfterQteResolveVarConditionEvent extends AfterQteResolveVarConditionEvent_T {
            }
            interface QteVarConditionResolutionExtPlugin_S {
            }
            interface QteVarConditionResolutionExtPlugin$ {
                /**
                 * 变量条件扩展接口，定额核算在解析得出变量条件值后，将会执行该方法。
                 * 可根据入参中的变量条件id以及变量条件的值进行特性化处理并返回。
                 * <p>
                 * 该接口所返回的非null变量条件值将会替换原定额核算出的参照日期值。
                 * 如果返回null，定额核算将仍然使用原值进行处理。
                 *
                 * <p>拓展示例：</p>
                 * <pre><code>
                 *    public void afterResolveVarValue(AfterQteResolveVarConditionEvent event) {
                 *         Set<Long> baseDataIds = event.getBaseDataIds();
                 *         for (Long baseDataId : baseDataIds) {
                 *             event.setVarValue(baseDataId, BigDecimal.TEN);
                 *         }
                 *     }
                 * </code></pre>
                 *
                 * @param event 变量条件值生成参数
                 */
                afterResolveVarValue(event:AfterQteResolveVarConditionEvent):void;
            }
            type QteVarConditionResolutionExtPlugin_T = QteVarConditionResolutionExtPlugin_S & QteVarConditionResolutionExtPlugin$;
            interface QteVarConditionResolutionExtPlugin extends QteVarConditionResolutionExtPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.core.chain{
            interface PreLimitCondition_S {
            }
            interface PreLimitCondition$ {
                /**
                 * 年龄
                 */
                getAge():number;
                /**
                 * 参加工作日期
                 */
                getBeginServiceDate():Date;
                /**
                 * 属地员工类别
                 */
                getDependencyType():long;
                /**
                 * 入职日期
                 */
                getEntryDate():Date;
                /**
                 * 性别
                 */
                getGender():long;
                /**
                 * 职等
                 */
                getJobGrade():long;
                /**
                 * 职级
                 */
                getJobLevel():long;
                /**
                 * 用工关系状态
                 */
                getLaborRelStatus():long;
                /**
                 * 职位序列
                 */
                getObSeq():long;
                /**
                 * 转正日期
                 */
                getRegularDate():Date;
                /**
                 * 考勤地点
                 */
                getWorkPlace():long;
            }
            type PreLimitCondition_T = PreLimitCondition_S & PreLimitCondition$;
            interface PreLimitCondition extends PreLimitCondition_T {
            }
            interface TieContentPersistentExt_S {
            }
            interface TieContentPersistentExt$ {
                /**
                 * 根据人和日期获取对应档案
                 *
                 * @param attPersonId 考勤人id
                 * @param inDate      日期 不能为空
                 * @return 考勤档案信息
                 */
                getAttFileByAttPersonIdAndDate(attPersonId:long,inDate:$.java.time.LocalDate):kd.sdk.wtc.wtes.business.tie.model.attfile.AttFileExt;
                /**
                 * 根据boId和日期获取考勤项目
                 *
                 * @param bid       考勤项目boId
                 * @param chainDate 计算日期
                 * @return 考勤项目
                 */
                getAttItemSpecExt(bid:long,chainDate:$.java.time.LocalDate):kd.sdk.wtc.wtes.business.tie.model.attitem.AttItemSpecExt;
                /**
                 * 根据考勤人员ID和日期获取对应的考勤人信息
                 *
                 * @param attPersonId 考勤人员ID
                 * @param chainDate   核算日期
                 * @return 考勤人员ID和日期获取对应的考勤人信息
                 */
                getAttendPersonByAttPersonIdAndDate(attPersonId:long,chainDate:$.java.time.LocalDate):kd.sdk.wtc.wtes.business.tie.model.attenperson.AttendPersonExt;
                /**
                 * 获取二开自定义初始化的数据
                 *
                 * @return 二开自定义的初始化的数据
                 */
                getExtInitData():any;
                /**
                 * 根据人员和日期获取对应的排班
                 *
                 * @param chainDate 日期
                 * @return 排班
                 */
                getRosterExt(attPersonId:long,chainDate:$.java.time.LocalDate):kd.sdk.wtc.wtes.business.tie.model.roster.RosterExt;
            }
            type TieContentPersistentExt_T = TieContentPersistentExt_S & TieContentPersistentExt$;
            interface TieContentPersistentExt extends TieContentPersistentExt_T {
            }
            interface TieContextExt_S {
            }
            interface TieContextExt$ {
                /**
                 * 生成一个考勤项目实例
                 *
                 * @param boId          考勤项目boId
                 * @param itemValue     考勤项目值
                 * @param day           考勤项目值（单位：天）
                 * @param secondDecimal 考勤项目值（单位：秒）
                 * @return 考勤项目实例
                 */
                genAttItemInstanceExt(boId:long,itemValue:$.java.math.BigDecimal,day:$.java.math.BigDecimal,secondDecimal:$.java.math.BigDecimal):kd.sdk.wtc.wtes.business.tie.model.attitem.AttItemInstanceExt;
                /**
                 * 获取当前核算的考勤档案BOID
                 */
                getAttFileBoId():long;
                /**
                 * 根据考勤人和日期获取有效的额考勤档案
                 *
                 * @param attPersonId 考勤人id
                 * @param inDate      版本所在的日期
                 * @return 考勤档案版本
                 */
                getAttFileByAttPersonIdAndDate(attPersonId:long,inDate:$.java.time.LocalDate):kd.sdk.wtc.wtes.business.tie.model.attfile.AttFileExt;
                /**
                 * 根据boId和日期获取有效的考勤项目定义版本
                 *
                 * @param boId   考勤项目boId
                 * @param inDate 版本所在的日期
                 * @return 考勤项目定义
                 */
                getAttItemSpecExt(boId:long,inDate:$.java.time.LocalDate):kd.sdk.wtc.wtes.business.tie.model.attitem.AttItemSpecExt;
                /**
                 * 获取当前核算的考勤人ID/自然人ID
                 */
                getAttPersonId():long;
                /**
                 * 根据考勤人员ID和日期获取对应的考勤人信息
                 *
                 * @param attPersonId 考勤人员ID
                 * @param chainDate   核算日期
                 * @return 考勤人员ID和日期获取对应的考勤人信息
                 */
                getAttendPersonByAttPersonIdAndDate(attPersonId:long,chainDate:$.java.time.LocalDate):kd.sdk.wtc.wtes.business.tie.model.attenperson.AttendPersonExt;
                /**
                 * 获取当前核算的日期，考勤核算归属日期
                 */
                getCalculateDate():$.java.time.LocalDate;
                /**
                 * 获取二开自定义初始化的数据
                 *
                 * @return 二开自定义的初始化的数据
                 */
                getExtInItData():any;
                /**
                 * 获取初始化信息
                 *
                 * @return 初始化参数
                 */
                getInitMap():$.java.util.Map;
                /**
                 * 根据考勤人员ID和日期获取对应的有效卡数据（包含一次卡和多次卡）
                 *
                 * @param attPersonId 考勤人员ID
                 * @param chainDate   核算日期
                 * @return 考勤人员ID和日期获取对应的有效卡数据
                 */
                getLogicCardDataByPersonIdAndDate(attPersonId:long,chainDate:$.java.time.LocalDate):$.java.util.List;
                /**
                 * 根据考勤人员和日期获取对应的人员考勤期间
                 *
                 * @param attPersonId 考勤人员ID
                 * @param inDate      人员考勤所在的日期
                 * @return 人员考勤期间
                 */
                getPerAttPeriodByAttPersonIdAndDate(attPersonId:long,inDate:$.java.time.LocalDate):kd.sdk.wtc.wtes.business.tie.model.perattperiod.PerAttPeriodExt;
                /**
                 * 根据考勤人员ID获取对应的人员考勤期间列表
                 *
                 * @param attPersonId 考勤人员ID
                 * @return 对应考勤期间列表
                 */
                getPerAttPeriodListByAttPerson(attPersonId:long):$.java.util.List;
                /**
                 * 根据日期获取当前核算人对应的排班
                 *
                 * @param shiftDate 排班日期
                 * @return 排班
                 */
                getRosterExt(shiftDate:$.java.time.LocalDate):kd.sdk.wtc.wtes.business.tie.model.roster.RosterExt;
                /**
                 * 根据考勤人和排班日期获取对应的排班
                 *
                 * @param shiftDate 班次日期
                 * @return 排班
                 */
                getRosterExt(attPersonId:long,shiftDate:$.java.time.LocalDate):kd.sdk.wtc.wtes.business.tie.model.roster.RosterExt;
            }
            type TieContextExt_T = TieContextExt_S & TieContextExt$;
            interface TieContextExt extends TieContextExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.core.chain.period{
            interface TieAttPeriodContextExt_S {
            }
            interface TieAttPeriodContextExt$ {
                /**
                 * 根据人员考勤期间数据主键id获取考勤档案信息
                 *
                 * @param primaryId 人员考勤期间数据主键id
                 * @return 考勤档案信息
                 */
                getAttFileByPerAttPeriodId(primaryId:long):kd.sdk.wtc.wtes.business.tie.model.attfile.AttFileExt;
                /**
                 * 根据boId和日期获取考勤项目
                 *
                 * @param bid       考勤项目boId
                 * @param primaryId 人员考勤期间数据主键id
                 * @return 考勤项目
                 */
                getAttItemSpecExt(bid:long,primaryId:long):kd.sdk.wtc.wtes.business.tie.model.attitem.AttItemSpecExt;
                /**
                 * 获取考勤核算主体
                 *
                 * @return 考勤核算主体
                 */
                getAttSubjects():$.java.util.List;
                /**
                 * 根据人员考勤期间数据主键id获取考勤人员信息
                 *
                 * @param primaryId 人员考勤期间数据主键id
                 * @return 考勤人员信息
                 */
                getAttendPersonByPerAttPeriodId(primaryId:long):kd.sdk.wtc.wtes.business.tie.model.attenperson.AttendPersonExt;
                /**
                 * 获取所有要期间汇总的人员考勤期间集合
                 *
                 * @return 所有要期间汇总的人员考勤期间集合
                 */
                getPerAttPeriodList():$.java.util.List;
                /**
                 * 获取考勤核算请求参数
                 *
                 * @return 考勤核算请求参数
                 */
                getTieRequestExt():kd.sdk.wtc.wtes.business.tie.model.init.TieRequestExt;
            }
            type TieAttPeriodContextExt_T = TieAttPeriodContextExt_S & TieAttPeriodContextExt$;
            interface TieAttPeriodContextExt extends TieAttPeriodContextExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.core.init{
            interface AfterTieAllParamInitEvent_S {
            }
            interface AfterTieAllParamInitEvent_C extends AfterTieAllParamInitEvent_S {
                new(initRequest:kd.sdk.wtc.wtes.business.tie.model.init.TieRequestExt,initData:$.java.util.Map):AfterTieAllParamInitEvent;
            }
            interface AfterTieAllParamInitEvent$ {
                /**
                 * 当前考勤核算核算已经初始化的参数
                 */
                getInitData():$.java.util.Map;
                /**
                 * 二开扩展的初始化参数
                 */
                getInitDataExt():any;
                /**
                 * 参数初始化请求参数
                 */
                getInitRequest():kd.sdk.wtc.wtes.business.tie.model.init.TieRequestExt;
                /**
                 * 设置二开初始化参数
                 *
                 * @param initDataExt 二开初始化参数
                 */
                setInitDataExt(initDataExt:any):void;
            }
            type AfterTieAllParamInitEvent_T = AfterTieAllParamInitEvent_S & AfterTieAllParamInitEvent$;
            interface AfterTieAllParamInitEvent extends AfterTieAllParamInitEvent_T {
            }
            interface TieParamInitExtPlugin_S {
            }
            interface TieParamInitExtPlugin$ {
                /**
                 * 在考勤核算中，当初始化阶段完成时，将会执行该方法。
                 *
                 * <p>可通过该方法返回个性化拓展的初始化数据，所返回的个性化初始数据在后续的回调节点都将会被携带。</p>
                 *
                 * <p>扩展示例：请参考业务扩展场景kd.sdk.wtc.wtes.business.tie.core.init.TieParamInitExtPlugin的扩展说明，菜单路径：业务扩展平台->业务扩展场景</p>
                 *
                 * @param event 初始化阶段完成事件
                 */
                afterAllParamInit?(event:AfterTieAllParamInitEvent):void;
            }
            type TieParamInitExtPlugin_T = TieParamInitExtPlugin_S & TieParamInitExtPlugin$;
            interface TieParamInitExtPlugin extends TieParamInitExtPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.exexutor.att{
            interface AttEvaluatorExpService_S {
            }
            interface AttEvaluatorExpService$ {
                /**
                 * 考勤核算的步骤结束前调用此接口。
                 * 当前接口可以生成一些客户二开自定义的考勤项目值，在后续会把生成的考勤项目值加入到明细/汇总项目中
                 * （根据考勤项目类型确定，如果是明细项目，则在考勤记录存储当日的明细项目值，如果是汇总项目，则存储当日汇总项目值，如是明细兼汇总项目，则都会存）
                 *
                 * <p>拓展示例：</p>
                 * <pre><code>
                 *     public void onEvaluateAttendanceEnd(OnEvaluateAttendanceEndEvent endEvent) {
                 *         TieContextExt tieContextExt = endEvent.getTieContextExt();
                 *         LocalDate calculateDate = tieContextExt.getCalculateDate();
                 *         Long bid = 1667665341460901888L; // 此处写要生成考勤记录的考勤项目的BOID,demo使用 节假日加班_转调休 的考勤项目
                 *         AttItemSpecExt attItemSpecExt = tieContextExt.getAttItemSpecExt(bid, calculateDate);
                 *         // 获取当日和次日的排班信息
                 *         RosterExt rosterExt = tieContextExt.getRosterExt(calculateDate);
                 *         ShiftSpecExt shiftSpec = rosterExt.getShiftSpec();
                 *         RosterExt nextDayrosterExt = tieContextExt.getRosterExt(calculateDate.plusDays(1));
                 *
                 *         // 此处为demo，非demo打log请慎重，由于考勤核算时批量执行可能会拖慢系统速度
                 *         // 当天的日期属性
                 *         Long attrId = rosterExt.getDateAttributeId();
                 *         // 第二天的日期属性
                 *         Long nextDayAttrId = nextDayrosterExt.getDateAttributeId();
                 *         // 如果当天和第二天都不是节假日，则直接返回;否则需要处理时间对并重新生成考勤项目时长;1220227377297100800L节假日
                 *         if (!isHolday(nextDayAttrId) && !isHolday(attrId)) {
                 *             return;
                 *         }
                 *
                 *         List<TimeBucketExt> timeBucketExtList = endEvent.getTimeBucketExtList();
                 *         List<AttItemInstanceExt> itemInstanceExtList = Lists.newArrayListWithExpectedSize(timeBucketExtList.size());
                 *
                 *         for (TimeBucketExt timeBucketExt : timeBucketExtList) {
                 *             // 此处为demo，非demo打log请慎重，由于考勤核算时批量执行可能会拖慢系统速度
                 *             LOG.info("timeBucketExt:{}, {}, {}", timeBucketExt.getStartTime(), timeBucketExt.getEndTime(), timeBucketExt.getDateAttribute());
                 *             // 如果当天和第二天都是节假日不处理时间对直接计算；如果当天是节假日第二天不是需要截取时间对的当天时段；如果第二天日期属性是节假日当天不是需要截取时间对的第二天时间段
                 *             LocalDateTime startTime = timeBucketExt.getStartTime();
                 *             LocalDateTime endTime = timeBucketExt.getEndTime();
                 *             if (!isHolday(nextDayAttrId)) {
                 *                 LocalDateTime localDate = calculateDate.plusDays(1).atStartOfDay();
                 *                 endTime = min(endTime, localDate);
                 *             }
                 *             if (!isHolday(attrId)) {
                 *                 LocalDateTime localDate = calculateDate.plusDays(1).atStartOfDay();
                 *                 startTime = max(startTime, localDate);
                 *             }
                 *             // 由于可能会调整开始结束时间，此处先做一下判定，如果不包含节假日时段，执行下一段日期范围
                 *             if (!startTime.isBefore(endTime)) {
                 *                 continue;
                 *             }
                 *             long millis = Duration.between(startTime, endTime).toMillis();
                 *             BigDecimal secondDecimal = BigDecimal.valueOf(millis / 1000.0d).setScale(6, RoundingMode.HALF_UP);
                 *             BigDecimal dayDecimal = shiftSpec.secondsToDays(secondDecimal);
                 *             AttItemInstanceExt instanceExt = new AttItemInstanceExt(attItemSpecExt, secondDecimal, dayDecimal, secondDecimal);
                 *             itemInstanceExtList.add(instanceExt);
                 *         }
                 *         endEvent.setAttItemSpecExtList(itemInstanceExtList);
                 *     }
                 *
                 *     private LocalDateTime max(LocalDateTime... dateTimes) { // 日期求最晚,入参不允许有null
                 *         LocalDateTime max = Arrays.stream(dateTimes).max((d1, d2) -> d1.isAfter(d2) ? 1 : -1).get();
                 *         return max;
                 *     }
                 *
                 *     private LocalDateTime min(LocalDateTime... dateTimes) { // 日期求最早,入参不允许有null
                 *         LocalDateTime min = Arrays.stream(dateTimes).min((d1, d2) -> d1.isAfter(d2) ? 1 : -1).get();
                 *         return min;
                 *     }
                 *
                 *     private boolean isHolday(long dateAttributeId) { // 是否节假日，根据系统预置的节假日日期属性ID判定
                 *         // 系统预置的节假日日期属性ID
                 *         return dateAttributeId == 1220227377297100800L;
                 *     }
                 * </code></pre>
                 *
                 * @param endEvent 考勤核算出勤核算步骤后置事件
                 */
                onEvaluateAttendanceEnd(endEvent:OnEvaluateAttendanceEndEvent):void;
            }
            type AttEvaluatorExpService_T = AttEvaluatorExpService_S & AttEvaluatorExpService$;
            interface AttEvaluatorExpService extends AttEvaluatorExpService_T {
            }
            interface TieExecAttendanceExtPlugin_S {
            }
            interface TieExecAttendanceExtPlugin$ {
                /**
                 * 考勤核算标品步骤执行完成后调用执行扩展
                 * <p>当考勤核算步骤执行完毕，生成标品考勤项目后，调用此扩展，产生个性化考勤项目值</p>
                 * <pre><code>
                 * // 示例方法为：从当前阶段的合并/覆盖结果取考勤项目节假日加班_转调休(ID:1667665341460901888)的考勤项目值，如果考勤项目时长存在不能被1小时整除的时长，则补足一小时；
                 * // 比如时长为3700秒，则新增一个时长为3500秒的该考勤项目
                 * public void afterExecAttendance(AfterExecAttendanceEvent event) {
                 *         LOG.info("【核算步骤扩展】【出勤】，入参：{}", JSON.toJSONString(event));
                 *         AfterExecAttendanceParam param = event.getParam();
                 *         TieContextExt tieContextExt = param.getTieContext();
                 *         Map&lt;Long, AttItemInstanceExt> curStageInstances = param.getCurStageInstanceMap(); // 此处为当前阶段已计算出的考勤项目
                 *         Map&lt;Long, AttItemInstanceExt> curChainInstances = param.getCurChainInstanceMap(); // 此处为当前核算链已计算出的考勤项目
                 *         List&lt;TimeBucketExt> rawTimeBucket = param.getRawTimeBucket(); // 此处为原始时间对
                 *
                 *         Long bid = 1667665341460901888L; // 此处写要生成考勤记录的考勤项目的BOID,demo使用 节假日加班_转调休 的考勤项目
                 *         AttItemInstanceExt attItemInstanceExt = curStageInstances.get(bid);
                 *         AttItemSpecExt attItemSpecExt = tieContextExt.getAttItemSpecExt(bid, tieContextExt.getCalculateDate());
                 *         if (attItemInstanceExt != null && attItemSpecExt != null) {
                 *             BigDecimal sumSecondDecimal = attItemInstanceExt.getSecondDecimal();
                 *             BigDecimal remainder = sumSecondDecimal.remainder(ONE_HOUR_SECONDS);
                 *             if (remainder.compareTo(BigDecimal.ZERO) > 0) {
                 *                 BigDecimal secondDecimal = ONE_HOUR_SECONDS.subtract(remainder);
                 *                 RosterExt rosterExt = tieContextExt.getRosterExt(tieContextExt.getCalculateDate());
                 *                 ShiftSpecExt shiftSpec = rosterExt.getShiftSpec();
                 *                 BigDecimal dayDecimal = shiftSpec.secondsToDays(secondDecimal);
                 *                 AttItemInstanceExt instanceExt = new AttItemInstanceExt(attItemSpecExt, secondDecimal, dayDecimal, secondDecimal);
                 *                 event.setTieDataNodeExtList(Lists.newArrayList(instanceExt));
                 *             }
                 *         }
                 *         LOG.info("【核算步骤扩展】【出勤】，出参：{}", JSON.toJSONString(event.getTieDataNodeExtList()));
                 *     }
                 * </code></pre>
                 *
                 * @param event 出勤计算阶段执行结束时扩展事件
                 */
                afterExecAttendance(event:AfterExecAttendanceEvent):void;
            }
            type TieExecAttendanceExtPlugin_T = TieExecAttendanceExtPlugin_S & TieExecAttendanceExtPlugin$;
            interface TieExecAttendanceExtPlugin extends TieExecAttendanceExtPlugin_T {
            }
            interface AfterExecAttendanceParam_S {
            }
            interface AfterExecAttendanceParam$ {
                /**
                 * 获取出勤规则对象
                 *
                 * @return 出勤规则对象
                 */
                getRuleExt():kd.sdk.wtc.wtes.business.tie.model.attconfig.AttRuleExt;
            }
            type AfterExecAttendanceParam_T = kd.sdk.wtc.wtes.business.tie.exexutor.common.AfterExecDailyChainParam & AfterExecAttendanceParam_S & AfterExecAttendanceParam$;
            interface AfterExecAttendanceParam extends AfterExecAttendanceParam_T {
            }
            interface OnEvaluateAttendanceEndEvent_S {
                readonly ADDALL:string;
                readonly OVERROAD:string;
            }
            interface OnEvaluateAttendanceEndEvent_C extends OnEvaluateAttendanceEndEvent_S {
                /**
                 * 带参构造方法，接口入参会在该方法中声明
                 * @param tieContextExt 二开上下文
                 * @param timeBucketExtList 实际出勤时间对过滤
                 */
                new(tieContextExt:kd.sdk.wtc.wtes.business.tie.core.chain.TieContextExt,timeBucketExtList:$.java.util.List):OnEvaluateAttendanceEndEvent;
            }
            interface OnEvaluateAttendanceEndEvent$ {
                /**
                 * @return 二开生成的”考勤项目实例“列表
                 */
                getAttItemSpecExtList():$.java.util.List;
                /**
                 *  取当前核算链运行到当前阶段产生的考勤项目
                 * @return 当前核算链运行到当前阶段产生的考勤项目
                 */
                getCurrentChainAttItemInstanceExtMap():$.java.util.Map;
                /**
                 * 取当前阶段产生的考勤项目
                 * @return 当前阶段产生的考勤项目
                 */
                getCurrentStageAttItemInstanceExtMap():$.java.util.Map;
                getTieContextExt():kd.sdk.wtc.wtes.business.tie.core.chain.TieContextExt;
                /**
                 * 获取阶段处理结果
                 * @return 0-合并；1-覆盖；当合并时，核算链会把相同考勤项目的时长/项目值做合并处理，当为覆盖时，核算链会把相同考勤项目的时长/项目值使用最后一次产生的结果覆盖
                 */
                getTiePhaseResult():string;
                getTimeBucketExtList():$.java.util.List;
                /**
                 * 设置二开生成的”考勤项目实例“列表
                 *
                 * @param attItemSpecExtList 二开生成的“考勤项目实例“列表
                 */
                setAttItemSpecExtList(attItemSpecExtList:$.java.util.List):void;
            }
            type OnEvaluateAttendanceEndEvent_T = OnEvaluateAttendanceEndEvent_S & OnEvaluateAttendanceEndEvent$;
            interface OnEvaluateAttendanceEndEvent extends OnEvaluateAttendanceEndEvent_T {
            }
            interface AttEvaluatorExpServiceDefault_S {
            }
            type AttEvaluatorExpServiceDefault_ST = AttEvaluatorExpService_S & AttEvaluatorExpServiceDefault_S;
            interface AttEvaluatorExpServiceDefault_C extends AttEvaluatorExpServiceDefault_ST {
                new():AttEvaluatorExpServiceDefault;
            }
            interface AttEvaluatorExpServiceDefault$ {
            }
            type AttEvaluatorExpServiceDefault_T = AttEvaluatorExpService & AttEvaluatorExpServiceDefault_S & AttEvaluatorExpServiceDefault$;
            interface AttEvaluatorExpServiceDefault extends AttEvaluatorExpServiceDefault_T {
            }
            interface AfterExecAttendanceEvent_S {
            }
            interface AfterExecAttendanceEvent_C extends AfterExecAttendanceEvent_S {
                new(param:AfterExecAttendanceParam):AfterExecAttendanceEvent;
            }
            interface AfterExecAttendanceEvent$ {
                /**
                 * @return 核算步骤结束时执行扩展参数
                 */
                getParam():AfterExecAttendanceParam;
                /**
                 * 获取二开生成的考勤实例节点
                 *
                 * @return 二开生成的考勤实例节点
                 */
                getTieDataNodeExtList():$.java.util.List;
                /**
                 * 设置二开生成的考勤实例节点
                 *
                 * @param tieDataNodeExtList 二开生成的考勤实例节点
                 */
                setTieDataNodeExtList(tieDataNodeExtList:$.java.util.List):void;
            }
            type AfterExecAttendanceEvent_T = AfterExecAttendanceEvent_S & AfterExecAttendanceEvent$;
            interface AfterExecAttendanceEvent extends AfterExecAttendanceEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.exexutor.common{
            interface AfterExecDailyChainParam_S {
                readonly COMBINE:string;
                readonly OVERRIDE:string;
            }
            interface AfterExecDailyChainParam$ {
                /**
                 * 阶段处理结果
                 * @return  默认为合并
                 */
                getAttItemResolveMode?():string;
                /**
                 * 当前核算链标品产生的项目值
                 *
                 * @return 当前核算链标品产生的项目值 key- 考勤项目定义的BOID； value- 考勤项目实例
                 */
                getCurChainInstanceMap():$.java.util.Map;
                /**
                 * 当前阶段标品产生的项目值
                 *
                 * @return 当前阶段标品产生的项目值 key- 考勤项目定义的BOID； value- 考勤项目实例
                 */
                getCurStageInstanceMap():$.java.util.Map;
                /**
                 * 获取原始时间对
                 *
                 * @return 当前阶段标品原始时间对
                 */
                getRawTimeBucket():$.java.util.List;
                /**
                 * 获取考勤核算链上下文
                 *
                 * @return 考勤核算链上下文
                 */
                getTieContext():kd.sdk.wtc.wtes.business.tie.core.chain.TieContextExt;
            }
            type AfterExecDailyChainParam_T = AfterExecDailyChainParam_S & AfterExecDailyChainParam$;
            interface AfterExecDailyChainParam extends AfterExecDailyChainParam_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.exexutor.daily{
            interface TieAttDailyEvaluatorExtPlugin_S {
            }
            interface TieAttDailyEvaluatorExtPlugin$ {
                /**
                 *  考勤核算自定义核算步骤
                 *  <p>实现此方法可以在考勤核算链的期间汇总”阶段前添加一个步骤</p>
                 *  <pre><code>
                 *  public void doEvaluate(ExecDailyEvaluatorEvent evaluatorEvent) {
                 *     LOG.info("【核算步骤扩展】【自定义核算步骤】，入参：{}", JSON.toJSONString(evaluatorEvent));
                 *     Map<Long, AttItemInstanceExt> curChainInstanceMap = evaluatorEvent.getCurChainInstanceMap();
                 *     long bid = 1576185320372699136L; // EX_1140_S:旷工天数
                 *     TieContextExt tieContext = evaluatorEvent.getTieContext();
                 *     AttItemSpecExt attItemSpecExt = tieContext.getAttItemSpecExt(bid, tieContext.getCalculateDate());
                 *     RosterExt rosterExt = tieContext.getRosterExt(tieContext.getCalculateDate());
                 *     ShiftSpecExt shiftSpec = rosterExt.getShiftSpec();
                 *     AttItemInstanceExt instanceExt = new AttItemInstanceExt(attItemSpecExt, BigDecimal.ZERO,
                 *             BigDecimal.ONE, shiftSpec.daysToSecondDecimal(BigDecimal.ONE));
                 *     List<AttItemInstanceExt> tieDataNodeList = Lists.newArrayList(instanceExt);
                 *     evaluatorEvent.setTieDataNodeExtList(tieDataNodeList);
                 *     LOG.info("【核算步骤扩展】【自定义核算步骤】，出参：{}", JSON.toJSONString(tieDataNodeList));
                 * }
                 *  </code></pre>
                 *  @param evaluatorEvent 考勤核算自定义核算步骤事件
                 */
                doEvaluate(evaluatorEvent:ExecDailyEvaluatorEvent):void;
            }
            type TieAttDailyEvaluatorExtPlugin_T = TieAttDailyEvaluatorExtPlugin_S & TieAttDailyEvaluatorExtPlugin$;
            interface TieAttDailyEvaluatorExtPlugin extends TieAttDailyEvaluatorExtPlugin_T {
            }
            interface ExecDailyEvaluatorEvent_S {
            }
            interface ExecDailyEvaluatorEvent$ {
                /**
                 * 当前核算链标品产生的项目值
                 *
                 * @return 当前核算链标品产生的项目值 key- 考勤项目定义的BOID； value- 考勤项目实例
                 */
                getCurChainInstanceMap():$.java.util.Map;
                /**
                 * @return 二开上下文
                 */
                getTieContext():kd.sdk.wtc.wtes.business.tie.core.chain.TieContextExt;
                /**
                 * 获取二开生成的考勤实例节点
                 *
                 * @return 二开生成的考勤实例节点
                 */
                getTieDataNodeExtList():$.java.util.List;
                /**
                 * 设置二开生成的考勤实例节点
                 *
                 * @param tieDataNodeExtList 二开生成的考勤实例节点
                 */
                setTieDataNodeExtList(tieDataNodeExtList:$.java.util.List):void;
            }
            type ExecDailyEvaluatorEvent_T = ExecDailyEvaluatorEvent_S & ExecDailyEvaluatorEvent$;
            interface ExecDailyEvaluatorEvent extends ExecDailyEvaluatorEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.exexutor.ex{
            interface ExEvaluatorExpService_S {
            }
            interface ExEvaluatorExpService$ {
                /**
                 * 异常二开接口
                 * @param event
                 */
                extraTimeBucket(event:ExEvaluatorEvent):void;
            }
            type ExEvaluatorExpService_T = ExEvaluatorExpService_S & ExEvaluatorExpService$;
            interface ExEvaluatorExpService extends ExEvaluatorExpService_T {
            }
            interface ExAttItemInstanceExtDTO_S {
            }
            interface ExAttItemInstanceExtDTO_C extends ExAttItemInstanceExtDTO_S {
                /**
                 * 异常考勤项目构造器
                 */
                new():ExAttItemInstanceExtDTO;
                /**
                 * 异常考勤项目构造器
                 *
                 * @param attItemSpecExt 考勤项目定义
                 * @param itemValue      考勤项目值，按考勤项目单位转换后的结果
                 * @param secondDecimal  考勤项目值（单位：秒）
                 */
                new(attItemSpecExt:kd.sdk.wtc.wtes.business.tie.model.attitem.AttItemSpecExt,itemValue:$.java.math.BigDecimal,secondDecimal:$.java.math.BigDecimal):ExAttItemInstanceExtDTO;
            }
            interface ExAttItemInstanceExtDTO$ {
                /**
                 * 获取考勤项目定义
                 *
                 * @return 考勤项目定义
                 */
                getAttItemSpecExt():kd.sdk.wtc.wtes.business.tie.model.attitem.AttItemSpecExt;
                /**
                 * 异常标识
                 *
                 * @return 异常标识
                 */
                getExFilterType():string;
                /**
                 * 获取异常处理方式ID
                 *
                 * @return 异常处理方式ID
                 */
                getExProcessId():long;
                /**
                 * 获取异常类型ID
                 *
                 * @return 异常类型ID
                 */
                getExTypeId():long;
                /**
                 * 获取异常考勤项目值
                 * <p>
                 * 该值是按考勤项目单位转换后的
                 *
                 * @return 异常考勤项目值
                 */
                getItemValue():$.java.math.BigDecimal;
                /**
                 * 获取异常考勤项目值（单位：秒）
                 *
                 * @return 异常考勤项目值
                 */
                getSecondDecimal():$.java.math.BigDecimal;
                /**
                 * 获取班次日期
                 *
                 * @return 班次日期
                 */
                getShiftDate():$.java.time.LocalDate;
                getShiftTimeBucketSeqId():long;
                /**
                 * 获取应打卡对ID
                 *
                 * @return 应打卡对ID
                 */
                getShouldPunchCardSeqId():long;
                /**
                 * 获取应打下班卡点
                 *
                 * @return 应打下班卡点
                 */
                getShouldPunchPointEnd():$.java.time.LocalDateTime;
                /**
                 * 获取应打上班卡点
                 *
                 * @return 应打上班卡点
                 */
                getShouldPunchPointStart():$.java.time.LocalDateTime;
                /**
                 * 考勤项目定义
                 * <p>
                 * 当考勤项目 {@link AttItemSpecExt#dataType()}是次数（“0”）时，
                 * 项目值取{@link #getItemValue()}字段，是时长（“1”）时，项目值取{@link #getSecondDecimal()}。
                 *
                 * @param attItemSpecExt 考勤项目定义
                 */
                setAttItemSpecExt(attItemSpecExt:kd.sdk.wtc.wtes.business.tie.model.attitem.AttItemSpecExt):void;
                /**
                 * 设置异常标识
                 * <p>
                 * 如果没有指定异常标识，则系统自动设置为其他异常（“4”）
                 *
                 * @param exFilterType 异常过滤类型
                 */
                setExFilterType(exFilterType:string):void;
                /**
                 * 设置异常处理方式
                 * <p>
                 * 如果没有指定异常处理方式，则使用标品异常方案中的异常处理方式
                 *
                 * @param exProcessId 异常处理方式
                 */
                setExProcessId(exProcessId:long):void;
                /**
                 * 设置异常类型
                 * <p>
                 * 异常类型必须设置
                 *
                 * @param exTypeId 异常类型ID
                 */
                setExTypeId(exTypeId:long):void;
                /**
                 * 次数类型异常考勤项目的值（单位：次）
                 * <p>
                 * 当异常考勤项目是次数类型时，该字段值不能为null。
                 *
                 * @param itemValue 次数类型异常项目的值（单位：次）
                 */
                setItemValue(itemValue:$.java.math.BigDecimal):void;
                /**
                 * 时长类型异常考勤项目的值（单位：秒）
                 * <p>
                 * 当异常考勤项目是时长类型时，该字段值不能为null，单位不是秒的项目值需要转为秒才能设置该值。
                 *
                 * @param secondDecimal 时长类型异常项目的值（单位：秒）
                 */
                setSecondDecimal(secondDecimal:$.java.math.BigDecimal):void;
                /**
                 * 设置班次日期/排班日期
                 * <p>
                 * 这里的班次日期指发生异常对应的排班日期
                 *
                 * @param shiftDate 班次日期/排班日期
                 */
                setShiftDate(shiftDate:$.java.time.LocalDate):void;
                setShiftTimeBucketSeqId(shiftTimeBucketSeqId:long):void;
                /**
                 * 设置应打卡对ID
                 * <p>
                 * 取应打卡对（“wtbd_punchcardpair”）实体的ID。
                 * 当异常考勤项目制定具体应答对时
                 *
                 * @param shouldPunchCardSeqId 应打卡对ID
                 */
                setShouldPunchCardSeqId(shouldPunchCardSeqId:long):void;
                /**
                 * 设置应打下班卡点
                 * <p>
                 * 需要与应打卡对ID同时设置
                 *
                 * @param shouldPunchPointEnd 应打下班卡点
                 */
                setShouldPunchPointEnd(shouldPunchPointEnd:$.java.time.LocalDateTime):void;
                /**
                 * 设置应打卡上班卡点
                 * <p>
                 * 需要与应打卡对ID同时设置
                 *
                 * @param shouldPunchPointStart 应打卡上班卡点
                 */
                setShouldPunchPointStart(shouldPunchPointStart:$.java.time.LocalDateTime):void;
            }
            type ExAttItemInstanceExtDTO_T = ExAttItemInstanceExtDTO_S & ExAttItemInstanceExtDTO$;
            interface ExAttItemInstanceExtDTO extends ExAttItemInstanceExtDTO_T {
            }
            interface AfterExecExEvent_S {
            }
            interface AfterExecExEvent_C extends AfterExecExEvent_S {
                new(param:AfterExecExParam):AfterExecExEvent;
            }
            interface AfterExecExEvent$ {
                /**
                 * 获取二开生成的异常考勤项目
                 * <p>
                 * 标品通过该方法获取二开生成的异常考勤项目
                 *
                 * @return 异常项目
                 */
                getExAttItemInstances():$.java.util.List;
                /**
                 * 获取异常核算扩展事件参数
                 *
                 * @return 异常核算扩展事件参数
                 */
                getParam():AfterExecExParam;
                /**
                 * 设置二开生成的异常考勤项目
                 *
                 * @param exAttItemInstances 二开生成的异常考勤项目
                 */
                setExAttItemInstances(exAttItemInstances:$.java.util.List):void;
            }
            type AfterExecExEvent_T = AfterExecExEvent_S & AfterExecExEvent$;
            interface AfterExecExEvent extends AfterExecExEvent_T {
            }
            interface TieExecExExtPlugin_S {
            }
            interface TieExecExExtPlugin$ {
                /**
                 * 执行考勤核算异常计算事件扩展方法
                 * <p>
                 * 支持在异常计算中处理扩展逻辑，比如可以新增异常考勤项目来干预标品产生的，如果新增的异常考勤项目与标品的相同，异常考勤项目会合并。
                 * <p>
                 * 示例代码可以参考考勤核算异常计算扩展场景示例，扩展场景编码：kd.sdk.wtc.wtes.business.tie.exexutor.ex.TieExecExExtPlugin
                 * <code><pre>
                 *  public void afterExecEx(AfterExecExEvent event) {
                 *     LOG.info("【核算步骤扩展】【异常】，入参：{}", JSON.toJSONString(event));
                 *     AfterExecExParam param = event.getParam();
                 *     TieContextExt tieContextExt = param.getTieContext();
                 *     List<ExAttItemInstanceExt> exAttItemInstances = param.getExAttItemInstances();
                 *
                 *     // 迟到异常
                 *     Optional<ExAttItemInstanceExt> exAttItemInstanceOpt = exAttItemInstances.stream()
                 *             .filter(exAttItemInstanceExt -> "EX_1010_S".equals(exAttItemInstanceExt.getAttItemSpecExt().getNumber())).findFirst();
                 *
                 *     Long bid = 1576191782905970688L; // 旷工次数 考勤项目的BOID
                 *     AttItemSpecExt attItemSpecExt = tieContextExt.getAttItemSpecExt(bid, tieContextExt.getCalculateDate());
                 *     if (exAttItemInstanceOpt.isPresent() && attItemSpecExt != null) {
                 *         ExAttItemInstanceExt exAttItemInstance = exAttItemInstanceOpt.get();
                 *         BigDecimal secondDecimal = exAttItemInstance.getSecondDecimal();
                 *         if (secondDecimal.compareTo(HALF_HOUR_SECONDS) > 0) {
                 *             ExAttItemInstanceExtDTO instanceExt = new ExAttItemInstanceExtDTO(attItemSpecExt, BigDecimal.ONE, BigDecimal.ZERO);
                 *             instanceExt.setExTypeId(exAttItemInstance.getExTypeId());
                 *             instanceExt.setExProcessId(exAttItemInstance.getExProcessId());
                 *             instanceExt.setShiftDate(exAttItemInstance.getShiftDate());
                 *             instanceExt.setShouldPunchCardSeqId(exAttItemInstance.getShouldPunchCardSeqId());
                 *             instanceExt.setShouldPunchPointStart(exAttItemInstance.getShouldPunchPointStart());
                 *             instanceExt.setShouldPunchPointEnd(exAttItemInstance.getShouldPunchPointEnd());
                 *             instanceExt.setShiftTimeBucketSeqId(exAttItemInstance.getShiftTimeBucketSeqId());
                 *             event.setExAttItemInstances(Lists.newArrayList(instanceExt));
                 *         } else {
                 *             BigDecimal negate = secondDecimal.negate();
                 *             ExAttItemInstanceExtDTO instanceExt = new ExAttItemInstanceExtDTO(exAttItemInstance.getAttItemSpecExt(), negate, negate);
                 *             instanceExt.setExTypeId(exAttItemInstance.getExTypeId());
                 *             instanceExt.setExProcessId(exAttItemInstance.getExProcessId());
                 *             instanceExt.setShiftDate(exAttItemInstance.getShiftDate());
                 *             instanceExt.setShouldPunchCardSeqId(exAttItemInstance.getShouldPunchCardSeqId());
                 *             instanceExt.setShouldPunchPointStart(exAttItemInstance.getShouldPunchPointStart());
                 *             instanceExt.setShouldPunchPointEnd(exAttItemInstance.getShouldPunchPointEnd());
                 *             instanceExt.setShiftTimeBucketSeqId(exAttItemInstance.getShiftTimeBucketSeqId());
                 *             instanceExt.setExFilterType(exAttItemInstance.getExFilterType());
                 *             event.setExAttItemInstances(Lists.newArrayList(instanceExt));
                 *         }
                 *     }
                 *     LOG.info("【核算步骤扩展】【异常】，出参：{}", JSON.toJSONString(event.getExAttItemInstances()));
                 * }
                 * </pre></code>
                 *
                 * @param event 异常计算阶段执行结束时扩展事件
                 */
                afterExecEx(event:AfterExecExEvent):void;
            }
            type TieExecExExtPlugin_T = TieExecExExtPlugin_S & TieExecExExtPlugin$;
            interface TieExecExExtPlugin extends TieExecExExtPlugin_T {
            }
            interface ExEvaluatorEvent_S {
            }
            interface ExEvaluatorEvent_C extends ExEvaluatorEvent_S {
                new():ExEvaluatorEvent;
                new(tieContextExt:kd.sdk.wtc.wtes.business.tie.core.chain.TieContextExt,shiftSessionExts:$.java.util.List,attBillTimeBuckets:$.java.util.List,logicCards:$.java.util.List):ExEvaluatorEvent;
            }
            interface ExEvaluatorEvent$ {
                getAttBillTimeBuckets():$.java.util.List;
                getAttItemSpecExtList():$.java.util.List;
                getLogicCards():$.java.util.List;
                getShiftSessionExts():$.java.util.List;
                getTieContextExt():kd.sdk.wtc.wtes.business.tie.core.chain.TieContextExt;
                setAttBillTimeBuckets(attBillTimeBuckets:$.java.util.List):void;
                setAttItemSpecExtList(attItemSpecExtList:$.java.util.List):void;
                setLogicCards(logicCards:$.java.util.List):void;
                setShiftSessionExts(shiftSessionExts:$.java.util.List):void;
                setTieContextExt(tieContextExt:kd.sdk.wtc.wtes.business.tie.core.chain.TieContextExt):void;
            }
            type ExEvaluatorEvent_T = ExEvaluatorEvent_S & ExEvaluatorEvent$;
            interface ExEvaluatorEvent extends ExEvaluatorEvent_T {
            }
            interface ExEvaluatorExpServiceDefault_S {
            }
            type ExEvaluatorExpServiceDefault_ST = ExEvaluatorExpService_S & ExEvaluatorExpServiceDefault_S;
            interface ExEvaluatorExpServiceDefault_C extends ExEvaluatorExpServiceDefault_ST {
                new():ExEvaluatorExpServiceDefault;
            }
            interface ExEvaluatorExpServiceDefault$ {
            }
            type ExEvaluatorExpServiceDefault_T = ExEvaluatorExpService & ExEvaluatorExpServiceDefault_S & ExEvaluatorExpServiceDefault$;
            interface ExEvaluatorExpServiceDefault extends ExEvaluatorExpServiceDefault_T {
            }
            interface AfterExecExParam_S {
            }
            interface AfterExecExParam$ {
                /**
                 * 获取当前核算链已经生成的异常考勤项目
                 *
                 * @return 异常考勤项目
                 */
                getExAttItemInstances():$.java.util.List;
                /**
                 * 获取出勤规则对象
                 *
                 * @return 出勤规则对象
                 */
                getExRule():kd.sdk.wtc.wtes.business.tie.model.ex.ExRulePackageExt;
            }
            type AfterExecExParam_T = kd.sdk.wtc.wtes.business.tie.exexutor.common.AfterExecDailyChainParam & AfterExecExParam_S & AfterExecExParam$;
            interface AfterExecExParam extends AfterExecExParam_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.exexutor.otcal{
            interface AfterExecOvertimeParam_S {
            }
            interface AfterExecOvertimeParam$ {
                /**
                 * @return 加班规则二开对象
                 */
                getOtRulePackageExt():kd.sdk.wtc.wtes.business.tie.model.otcal.OtRulePackageExt;
            }
            type AfterExecOvertimeParam_T = kd.sdk.wtc.wtes.business.tie.exexutor.common.AfterExecDailyChainParam & AfterExecOvertimeParam_S & AfterExecOvertimeParam$;
            interface AfterExecOvertimeParam extends AfterExecOvertimeParam_T {
            }
            interface TieExecOvertimeExtPlugin_S {
            }
            interface TieExecOvertimeExtPlugin$ {
                /**
                 * 考勤核算标品加班核算执行完成后调用执行扩展
                 * <p>当考勤核算步骤执行完毕，生成标品考勤项目后，调用此扩展，产生个性化考勤项目值</p>
                 * <pre><code>
                 * public void afterExecOvertime(AfterExecOvertimeEvent event) {
                 *     LOG.info("【核算步骤扩展】【加班】，入参：{}", JSON.toJSONString(event));
                 *     AfterExecOvertimeParam param = event.getParam();
                 *     TieContextExt tieContextExt = param.getTieContext();
                 *     Map<Long, AttItemInstanceExt> curChainInstances = param.getCurChainInstanceMap(); // 当前核算链的考勤项目
                 *     Long exBid = 1667650973922881536L; //OT1_1100_S(工作日加班_转调休)
                 *     Long bid = 1667656552783409152L; // OT1_1130_S（工作日加班_转加班费）
                 *     AttItemInstanceExt attItemInstanceExt = curChainInstances.get(exBid);
                 *     AttItemSpecExt attItemSpecExt = tieContextExt.getAttItemSpecExt(bid, tieContextExt.getCalculateDate());
                 *     if (attItemInstanceExt != null && attItemSpecExt != null) {
                 *         AttItemInstanceExt instanceExt = new AttItemInstanceExt(attItemSpecExt, attItemInstanceExt.getSecondDecimal(),
                 *                 attItemInstanceExt.getDay(), attItemInstanceExt.getSecondDecimal());
                 *         event.setTieDataNodeExtList(Lists.newArrayList(instanceExt));
                 *     }
                 *     LOG.info("【核算步骤扩展】【加班】，出参：{}", JSON.toJSONString(event.getTieDataNodeExtList()));
                 * }
                 * </code></pre>
                 *
                 * @param event 加班计算阶段执行结束时扩展事件
                 */
                afterExecOvertime(event:AfterExecOvertimeEvent):void;
            }
            type TieExecOvertimeExtPlugin_T = TieExecOvertimeExtPlugin_S & TieExecOvertimeExtPlugin$;
            interface TieExecOvertimeExtPlugin extends TieExecOvertimeExtPlugin_T {
            }
            interface AfterExecOvertimeEvent_S {
            }
            interface AfterExecOvertimeEvent_C extends AfterExecOvertimeEvent_S {
            }
            interface AfterExecOvertimeEvent$ {
                /**
                 * @return 加班核算步骤结束时执行扩展参数
                 */
                getParam():AfterExecOvertimeParam;
                /**
                 * @return 二开生成的考勤项目
                 */
                getTieDataNodeExtList():$.java.util.List;
                /**
                 * @param tieDataNodeExtList 二开生成的考勤项目
                 */
                setTieDataNodeExtList(tieDataNodeExtList:$.java.util.List):void;
            }
            type AfterExecOvertimeEvent_T = AfterExecOvertimeEvent_S & AfterExecOvertimeEvent$;
            interface AfterExecOvertimeEvent extends AfterExecOvertimeEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.exexutor.period{
            interface TieExecPerPeriodSummaryExtPlugin_S {
            }
            interface TieExecPerPeriodSummaryExtPlugin$ {
                /**
                 * 执行期间汇总核算步骤后置事件方法，支持在标品汇总核算中处理扩展逻辑，比如可以新增额外的汇总记录，但不允许修改/删除标品的汇总记录。
                 * <p>支持在标品汇总核算中处理扩展逻辑，比如可以新增额外的汇总记录，但不允许修改/删除标品的汇总记录。</p>
                 *
                 * <p>扩展示例：请参考业务扩展场景kd.sdk.wtc.wtes.business.tie.exexutor.period.TieExecPerPeriodSummaryExtPlugin扩展说明，菜单路径：业务扩展平台-业务扩展场景</p>
                 *
                 * @param tieAttPeriodContextExt 期间汇总上下文
                 * @param attPeriodItemInstanceMap 期间汇总结果按人员考勤期间分组  key ： 人员考勤期间id，value ： 期间汇总结果列表
                 * @return 期间汇总结果按人员考勤期间分组 key ： 人员考勤期间id 人员考勤期间必须在人员考勤期间列表中，value ： 期间汇总结果列表 ， 考勤项目类型必须是汇总或汇总兼明细考勤项目
                 */
                afterExecPerPeriodSummary(tieAttPeriodContextExt:kd.sdk.wtc.wtes.business.tie.core.chain.period.TieAttPeriodContextExt,attPeriodItemInstanceMap:$.java.util.Map):$.java.util.Map;
            }
            type TieExecPerPeriodSummaryExtPlugin_T = TieExecPerPeriodSummaryExtPlugin_S & TieExecPerPeriodSummaryExtPlugin$;
            interface TieExecPerPeriodSummaryExtPlugin extends TieExecPerPeriodSummaryExtPlugin_T {
            }
            interface TieAttPeriodEvaluatorExt_S {
            }
            interface TieAttPeriodEvaluatorExt$ {
                /**
                 * 执行期间汇总核算步骤后置事件方法
                 *
                 * <p>支持在标品汇总核算步骤结束后处理扩展逻辑，比如可以新增额外的汇总记录，但不允许修改/删除标品的汇总记录/p>
                 *
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 * </code></pre>
                 * @param tieAttPeriodContextExt 期间汇总上下文
                 * @param attPeriodItemInstanceMap 期间汇总结果按人员考勤期间分组  key ： 人员考勤期间id，value ： 期间汇总结果列表
                 * @return 期间汇总结果按人员考勤期间分组 key ： 人员考勤期间id 人员考勤期间必须在人员考勤期间列表中，value ： 期间汇总结果列表 ， 考勤项目类型必须是汇总或汇总兼明细考勤项目
                 */
                doEvaluate(tieAttPeriodContextExt:kd.sdk.wtc.wtes.business.tie.core.chain.period.TieAttPeriodContextExt,attPeriodItemInstanceMap:$.java.util.Map):$.java.util.Map;
            }
            type TieAttPeriodEvaluatorExt_T = TieAttPeriodEvaluatorExt_S & TieAttPeriodEvaluatorExt$;
            interface TieAttPeriodEvaluatorExt extends TieAttPeriodEvaluatorExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.exexutor.tvl{
            interface AfterExecBusinessTripEvent_S {
            }
            interface AfterExecBusinessTripEvent_C extends AfterExecBusinessTripEvent_S {
            }
            interface AfterExecBusinessTripEvent$ {
                /**
                 * @return 出差核算步骤结束时执行扩展参数
                 */
                getParam():AfterExecBusinessTripParam;
                /**
                 * 获取二开生成的考勤实例节点
                 *
                 * @return 二开生成的考勤实例节点
                 */
                getTieDataNodeExtList():$.java.util.List;
                /**
                 * 设置二开生成的考勤实例节点
                 *
                 * @param tieDataNodeExtList 二开生成的考勤实例节点
                 */
                setTieDataNodeExtList(tieDataNodeExtList:$.java.util.List):void;
            }
            type AfterExecBusinessTripEvent_T = AfterExecBusinessTripEvent_S & AfterExecBusinessTripEvent$;
            interface AfterExecBusinessTripEvent extends AfterExecBusinessTripEvent_T {
            }
            interface AfterExecBusinessTripParam_S {
            }
            interface AfterExecBusinessTripParam$ {
                /**
                 * 获取休假规则对象
                 *
                 * @return 休假规则对象
                 */
                getExRuleExt():kd.sdk.wtc.wtes.business.tie.model.tvl.TravelRuleExt;
            }
            type AfterExecBusinessTripParam_T = kd.sdk.wtc.wtes.business.tie.exexutor.common.AfterExecDailyChainParam & AfterExecBusinessTripParam_S & AfterExecBusinessTripParam$;
            interface AfterExecBusinessTripParam extends AfterExecBusinessTripParam_T {
            }
            interface TieExecBusinessTripExtPlugin_S {
            }
            interface TieExecBusinessTripExtPlugin$ {
                /**
                 * 考勤核算标品异常转化步骤执行完成后调用执行扩展
                 * <p>当考勤核算步骤执行完毕，生成标品考勤项目后，调用此扩展，产生个性化考勤项目值</p>
                 * <pre><code>
                 *  // 当前扩展点DEMO功能：
                 *  // 当前核算阶段的考勤项目BT_1040_S（国外出差_结果时长 ID:1610167120157573120），计算其总时长，如果>28800秒（8小时），忘带卡次数（ID:1616554563408645120L）+1
                 * public void afterExecBusinessTrip(AfterExecBusinessTripEvent event) {
                 *     LOG.info("【核算步骤扩展】【出差】，入参：{}", JSON.toJSONString(event));
                 *     AfterExecBusinessTripParam param = event.getParam();
                 *     TieContextExt tieContextExt = param.getTieContext();
                 *     Map<Long, AttItemInstanceExt> curStageInstances = param.getCurStageInstanceMap(); // 当前阶段计算出的项目值
                 *     Map<Long, AttItemInstanceExt> curChainInstances = param.getCurChainInstanceMap(); // 当前核算链计算出的项目值
                 *     List<TimeBucketExt> rawTimebucket = param.getRawTimeBucket(); // 原始时间对
                 *     Long exBid = 1610167120157573120L; // 国内出差_结果时长的BID
                 *     Long bid = 1616554563408645120L; // 此处写要生成考勤记录的考勤项目的BOID,demo使用 忘带卡次数 的考勤项目
                 *     AttItemInstanceExt attItemInstanceExt = curStageInstances.get(exBid);
                 *
                 *     AttItemSpecExt attItemSpecExt = tieContextExt.getAttItemSpecExt(bid, tieContextExt.getCalculateDate());
                 *     if (attItemInstanceExt != null && attItemSpecExt != null) {
                 *         BigDecimal sumDayDecimal = attItemInstanceExt.getDay();
                 *         BigDecimal sumSecondDecimal = attItemInstanceExt.getSecondDecimal();
                 *         if (sumSecondDecimal.compareTo(ONE_HOUR_SECONDS.multiply(BigDecimal.valueOf(8))) > 0) {
                 *             AttItemInstanceExt instanceExt = new AttItemInstanceExt(attItemSpecExt, BigDecimal.ONE, BigDecimal.ZERO, BigDecimal.ZERO);
                 *             event.setTieDataNodeExtList(Lists.newArrayList(instanceExt));
                 *         }
                 *     }
                 *     LOG.info("【核算步骤扩展】【出差】，出参：{}", JSON.toJSONString(event.getTieDataNodeExtList()));
                 * }
                 * </code></pre>
                 *
                 * @param event 出差计算阶段执行结束时扩展事件
                 */
                afterExecBusinessTrip(event:AfterExecBusinessTripEvent):void;
            }
            type TieExecBusinessTripExtPlugin_T = TieExecBusinessTripExtPlugin_S & TieExecBusinessTripExtPlugin$;
            interface TieExecBusinessTripExtPlugin extends TieExecBusinessTripExtPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.exexutor.va{
            interface TieExecVacationExtPlugin_S {
            }
            interface TieExecVacationExtPlugin$ {
                /**
                 * 考勤核算标品休假核算步骤执行完成后调用执行扩展
                 * <p>当考勤核算步骤执行完毕，生成标品考勤项目后，调用此扩展，产生个性化考勤项目值</p>
                 * <pre><code>
                 *  public void afterExecVacation(AfterExecVacationEvent event) {
                 *      LOG.info("【核算步骤扩展】【休假】，入参：{}", JSON.toJSONString(event));
                 *      AfterExecVacationParam param = event.getParam();
                 *      TieContextExt tieContextExt = param.getTieContext();
                 *      Map<Long, AttItemInstanceExt> curStageInstances = param.getCurStageInstanceMap();
                 *      Map<Long, AttItemInstanceExt> curChainInstances = param.getCurChainInstanceMap(); // 当前核算链的时长
                 *      List<TimeBucketExt> rawTimebucket = param.getRawTimeBucket();
                 *
                 *      Long exBid = 1428132636110356480L; // LE_1170_S（事假_结果时长）
                 *      Long bid = 1428132636110356480L; // 此处写要生成考勤记录的考勤项目的BOID,demo使用 旷工时长 的考勤项目
                 *      AttItemInstanceExt attItemInstanceExt = curChainInstances.get(exBid);
                 *
                 *      AttItemSpecExt attItemSpecExt = tieContextExt.getAttItemSpecExt(bid, tieContextExt.getCalculateDate());
                 *      if (attItemInstanceExt != null && attItemSpecExt != null) {
                 *          BigDecimal sumSecondDecimal = attItemInstanceExt.getSecondDecimal();
                 *          if (sumSecondDecimal.compareTo(BigDecimal.ZERO) > 0 && sumSecondDecimal.compareTo(ONE_HOUR_SECONDS) < 0) {
                 *              RosterExt rosterExt = tieContextExt.getRosterExt(tieContextExt.getAttPersonId(), tieContextExt.getCalculateDate());
                 *              ShiftSpecExt shiftSpec = rosterExt.getShiftSpec();
                 *              AttItemInstanceExt instanceExt = new AttItemInstanceExt(attItemSpecExt, ONE_HOUR_SECONDS.subtract(sumSecondDecimal), shiftSpec.secondsToDays(ONE_HOUR_SECONDS.subtract(sumSecondDecimal)), ONE_HOUR_SECONDS.subtract(sumSecondDecimal));
                 *              event.setTieDataNodeExtList(Lists.newArrayList(instanceExt));
                 *          }
                 *      }
                 *      LOG.info("【核算步骤扩展】【休假】，出参：{}", JSON.toJSONString(event.getTieDataNodeExtList()));
                 *  }
                 * </code></pre>
                 *
                 * @param event 休假阶段执行结束时扩展事件
                 */
                afterExecVacation(event:AfterExecVacationEvent):void;
            }
            type TieExecVacationExtPlugin_T = TieExecVacationExtPlugin_S & TieExecVacationExtPlugin$;
            interface TieExecVacationExtPlugin extends TieExecVacationExtPlugin_T {
            }
            interface AfterExecVacationEvent_S {
            }
            interface AfterExecVacationEvent_C extends AfterExecVacationEvent_S {
            }
            interface AfterExecVacationEvent$ {
                /**
                 * @return 休假步骤执行结束时扩展事件参数
                 */
                getParam():AfterExecVacationParam;
                /**
                 * 获取二开生成的考勤实例节点
                 *
                 * @return 二开生成的考勤实例节点
                 */
                getTieDataNodeExtList():$.java.util.List;
                /**
                 * 设置二开生成的考勤实例节点
                 *
                 * @param tieDataNodeExtList 二开生成的考勤实例节点
                 */
                setTieDataNodeExtList(tieDataNodeExtList:$.java.util.List):void;
            }
            type AfterExecVacationEvent_T = AfterExecVacationEvent_S & AfterExecVacationEvent$;
            interface AfterExecVacationEvent extends AfterExecVacationEvent_T {
            }
            interface AfterExecVacationParam_S {
            }
            interface AfterExecVacationParam$ {
                /**
                 * 获取休假规则对象
                 *
                 * @return 休假规则对象
                 */
                getVaRuleExt():kd.sdk.wtc.wtes.business.tie.model.va.VaRulePackageExt;
            }
            type AfterExecVacationParam_T = kd.sdk.wtc.wtes.business.tie.exexutor.common.AfterExecDailyChainParam & AfterExecVacationParam_S & AfterExecVacationParam$;
            interface AfterExecVacationParam extends AfterExecVacationParam_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.init.accountplan{
            interface TieSchemeExtPlugin_S {
            }
            interface TieSchemeExtPlugin$ {
                /**
                 * 支持在所有日明细核算步骤执行后执行扩展步骤，效果相当于在“期间汇总”阶段前增加一个扩展步骤；
                 *
                 * <p>支持在所有日明细核算步骤执行后执行扩展步骤，效果相当于在“期间汇总”阶段前增加一个扩展步骤</p>
                 *
                 * <p>扩展示例：请参考业务扩展场景kd.sdk.wtc.wtes.business.tie.init.accountplan.TieSchemeExtPlugin扩展说明，菜单路径：业务扩展平台-业务扩展场景</p>
                 *
                 * @param tieSchemeExt 核算方案
                 */
                onBuildDailyChain(tieSchemeExt:kd.sdk.wtc.wtes.business.tie.model.accountplan.TieSchemeExt):void;
                /**
                 * 支持在所有汇总核算步骤执行后执行扩展步骤，效果相当于在“期间汇总调整”阶段后增加一个扩展步骤；
                 *
                 * <p>支持在所有日明细核算步骤执行后执行扩展步骤，效果相当于在“期间汇总调整”阶段前增加一个扩展步骤</p>
                 *
                 * <p>扩展示例：请参考业务扩展场景kd.sdk.wtc.wtes.business.tie.init.accountplan.TieSchemeExtPlugin扩展说明，菜单路径：业务扩展平台-业务扩展场景</p>
                 *
                 * @param tieSchemeExt 核算方案
                 */
                onBuildPeriodChain(tieSchemeExt:kd.sdk.wtc.wtes.business.tie.model.accountplan.TieSchemeExt):void;
            }
            type TieSchemeExtPlugin_T = TieSchemeExtPlugin_S & TieSchemeExtPlugin$;
            interface TieSchemeExtPlugin extends TieSchemeExtPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.init.attfile{
            interface OnQueryInitParamOfAttFileEvent_S {
            }
            interface OnQueryInitParamOfAttFileEvent_C extends OnQueryInitParamOfAttFileEvent_S {
                new(attFileQueryParam:AttFileQueryParamExt):OnQueryInitParamOfAttFileEvent;
            }
            interface OnQueryInitParamOfAttFileEvent$ {
                getAttFileQueryParam():AttFileQueryParamExt;
                getExtKeys():$.java.util.Set;
                setExtKeys(extKeys:$.java.util.Set):void;
            }
            type OnQueryInitParamOfAttFileEvent_T = OnQueryInitParamOfAttFileEvent_S & OnQueryInitParamOfAttFileEvent$;
            interface OnQueryInitParamOfAttFileEvent extends OnQueryInitParamOfAttFileEvent_T {
            }
            interface AttFileQueryParamExt_S {
            }
            interface AttFileQueryParamExt$ {
                /**
                 * 获取查询档案的考勤人集合
                 *
                 * @return 要查询的考勤人集合
                 */
                getAttPersonSetIds():$.java.util.Set;
                /**
                 * 获取查询档案的结束时间
                 *
                 * @return 结束时间
                 */
                getEndDate():Date;
                /**
                 * 获取实际实现的实例
                 * @return 实际实例
                 */
                getInstance():any;
                /**
                 * 获取查询档案的开始时间
                 *
                 * @return 开始时间
                 */
                getStartDate():Date;
                /**
                 * 设置查询的考勤人集合，如果设置了会覆盖系统的，如果不设置会走系统的
                 *
                 * @param personSetIds 查询的考勤人集合
                 */
                setAttPersonSetIds(personSetIds:$.java.util.Set):void;
                /**
                 * 设置查询的结束时间，如果设置了会覆盖系统的，如果不设置会走系统的
                 *
                 * @param endDate 结束时间
                 */
                setEndDate(endDate:Date):void;
                /**
                 * 设置其它的查询条件，默认是空的
                 * <pre><code>
                 *     // 举例设置查询档案的数据状态
                 *      QFilter attPersonIdsFilter =  new QFilter(WTCCommonConstants.DATASTATUS, QCP.in, dataStatus)
                 * </code></pre>
                 *
                 * @param qFilter 设置其它的过滤条件
                 */
                setQFilter(qFilter:$.kd.bos.orm.query.QFilter):void;
                /**
                 * 设置查询档案的开始时间，如果设置了会覆盖系统的，如果不设置会走系统的
                 *
                 * @param startDate 开始时间
                 */
                setStartDate(startDate:Date):void;
            }
            type AttFileQueryParamExt_T = AttFileQueryParamExt_S & AttFileQueryParamExt$;
            interface AttFileQueryParamExt extends AttFileQueryParamExt_T {
            }
            interface TieInitAttFileExtPlugin_S {
            }
            interface TieInitAttFileExtPlugin$ {
                /**
                 * 考勤核算考勤档案初始化扩展方法
                 *
                 * <p>考勤核算时，需要先准备数据，本接口适用于考勤档案数据准备的查询条件构建</p>
                 * <pre><code>
                 *      Set<String> extKeys 支持查询时扩展的查询字段，扩展的属性必须是 档案元数据（wtp_attfilebase） 里的扩展属性
                 *      AttFileQueryParamExt  提供查询档案是设置一些查询的条件
                 * </code></pre>
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 *
                 *  public void onQueryAttFile(OnQueryInitParamOfAttFileEvent event) {
                 *      // 查询时增加额外的考勤人查询
                 *      event.getAttFileQueryParam().getAttPersonSetIds().add(1863000118957967360L);
                 *      // 扩展字段增加工号，扩展字段必须来自档案（wtp_attfilebase）
                 *      event.setExtKeys(Sets.newHashSet("extkey01"));
                 *  }
                 *
                 * </code></pre>
                 *
                 * @param event 扩展入参
                 */
                onQueryAttFile(event:OnQueryInitParamOfAttFileEvent):void;
            }
            type TieInitAttFileExtPlugin_T = TieInitAttFileExtPlugin_S & TieInitAttFileExtPlugin$;
            interface TieInitAttFileExtPlugin extends TieInitAttFileExtPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.init.attitemspec{
            interface TieInitAttItemSpecExtPlugin_S {
            }
            interface TieInitAttItemSpecExtPlugin$ {
                /**
                 * 执行查询考勤项目初始化参数前置事件方法，支持修改预置核算参数的新增查询字段
                 *
                 * <p>执行查询考勤项目初始化参数前置事件方法，支持修改预置核算参数的新增查询字段</p>
                 * <pre><code>
                 *      Set<String> extKeys 支持查询时扩展的查询字段，扩展的属性必须是 考勤项目元数据（wtbd_attitem） 里的扩展属性
                 * </code></pre>
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 *    // 设置要增加扩展字段 举例："extkey01"
                 *    event.setExtKeys(Sets.newHashSet("extkey01"));
                 * </code></pre>
                 *
                 * @param event 扩展入参
                 */
                onQueryAttItemSpec(event:OnQueryInitParamOfAttItemSpecEvent):void;
            }
            type TieInitAttItemSpecExtPlugin_T = TieInitAttItemSpecExtPlugin_S & TieInitAttItemSpecExtPlugin$;
            interface TieInitAttItemSpecExtPlugin extends TieInitAttItemSpecExtPlugin_T {
            }
            interface OnQueryInitParamOfAttItemSpecEvent_S {
            }
            interface OnQueryInitParamOfAttItemSpecEvent_C extends OnQueryInitParamOfAttItemSpecEvent_S {
                new():OnQueryInitParamOfAttItemSpecEvent;
            }
            interface OnQueryInitParamOfAttItemSpecEvent$ {
                getExtKeys():$.java.util.Set;
                setExtKeys(extKeys:$.java.util.Set):void;
            }
            type OnQueryInitParamOfAttItemSpecEvent_T = OnQueryInitParamOfAttItemSpecEvent_S & OnQueryInitParamOfAttItemSpecEvent$;
            interface OnQueryInitParamOfAttItemSpecEvent extends OnQueryInitParamOfAttItemSpecEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.init.bill{
            interface VaTimeBucketSplitExtPlugin_S {
            }
            interface VaTimeBucketSplitExtPlugin$ {
                /**
                 * 休假单据时段信息初始化时调用此接口。
                 * 当前接口可以传入标品已拆出的休假单据时间对，对时间对重新调整拆分,会影响到休假的考勤核算和定额核算结果
                 * <p>示例代码可以参考休假申请单据重叠判定扩展场景示例，扩展场景编码：kd.sdk.wtc.wtes.business.tie.init.bill.TieInitializerVaTimeBucketSplitExtPlugin</p>
                 *
                 * @param onSplitVaBillTimeBucketEvent 核算时初始化休假单据拆对事件
                 */
                onSplitVaBillTimeBucket(onSplitVaBillTimeBucketEvent:OnVaBillTimeBucketSplitEvent):void;
            }
            type VaTimeBucketSplitExtPlugin_T = VaTimeBucketSplitExtPlugin_S & VaTimeBucketSplitExtPlugin$;
            interface VaTimeBucketSplitExtPlugin extends VaTimeBucketSplitExtPlugin_T {
            }
            interface OnVaBillTimeBucketSplitEvent_S {
            }
            interface OnVaBillTimeBucketSplitEvent_C extends OnVaBillTimeBucketSplitEvent_S {
            }
            interface OnVaBillTimeBucketSplitEvent$ {
                /**
                 * 获取单据时段信息
                 *
                 * @return 单据时段信息
                 */
                getAttBillTimeBucketExtList():$.java.util.List;
                /**
                 * 获取 排班汇总
                 *
                 * @return 排班汇总
                 */
                getShiftTableExt():kd.sdk.wtc.wtes.business.tie.model.roster.ShiftTableExt;
                /**
                 * 获取查询出的休假单据列表（单据时间对是根据休假单据拆分出来）
                 *
                 * @return 查询出的休假单据列表
                 */
                getVaBillDyns():$.java.util.List;
                /**
                 * 设置 单据时段信息；二开拆对时，把单据时段信息结果复写到此处
                 * @param attBillTimeBucketExtList 单据时段信息
                 */
                setAttBillTimeBucketExtList(attBillTimeBucketExtList:$.java.util.List):void;
                /**
                 * 设置是否取消二开拆对，当取消时，会使用标品拆对结果
                 *
                 * @param cancel true-是;false-否 ;默认false
                 */
                setCancel(cancel:boolean):void;
            }
            type OnVaBillTimeBucketSplitEvent_T = OnVaBillTimeBucketSplitEvent_S & OnVaBillTimeBucketSplitEvent$;
            interface OnVaBillTimeBucketSplitEvent extends OnVaBillTimeBucketSplitEvent_T {
            }
            interface VaBillInitExpService_S {
            }
            interface VaBillInitExpService$ {
                /**
                 * 考勤核算休假单据初始化查询条件扩展方法
                 *
                 * <p>考勤核算时，需要先准备数据，本接口适用于休假单据数据准备的查询条件构建</p>
                 * 系统将会完全使用该方法的返回结果做为查询条件查询休假单； 如果不修改预置条件，则需要在返回时把 {@link qFilters} 带入到返回参数中
                 * presetFilters当前的条件如下：
                 * <pre><code>
                 *      // 在指定考勤人ID列表中，且休假分录时间在给定的开始和结束日期中有交集，且单据状态为已审核，且单据没有被销假
                 *      QFilter attPersonIdsFilter = new QFilter("personid", QFilter.in, attPersonIds);
                 *      QFilter fromDateFilter = new QFilter("entryentity.entrystartdate", QFilter.less_equals, WTCDateUtils.toDate(toDate));
                 *      QFilter toDateDateFilter = new QFilter("entryentity.entrystartdate", QFilter.large_equals, WTCDateUtils.toDate(fromDate));
                 *      QFilter audit = new QFilter(WTCBaseConstants.BILLSTATUS, QFilter.equals, WTCCommonConstants.AUDITSTATUS_AUDITPASS);
                 *      QFilter isNotLeave = new QFilter("isnotleave", QFilter.equals, WTCCommonConstants.STR_ZERO);
                 * </code></pre>
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 *     public void onAddFilters(List<QFilter> qFilters) {
                 *         // 扩展示例：如果单据存在变更单，父单据不参与考勤核算
                 *         isHaveChangeFilter(qFilters);
                 *     }
                 *
                 *     private List<QFilter> isHaveChangeFilter(List<QFilter> presetQFilters) {
                 *         QFilter isHaveChangeFilter = new QFilter(IS_HAVE_CHANGE, QCP.equals, Boolean.FALSE);
                 *         presetQFilters.add(isHaveChangeFilter);
                 *         return presetQFilters;
                 *     }
                 * </code></pre>
                 *
                 * @param qFilters 条件列表
                 * @return 扩展完的查询条件
                 */
                onAddFilters(qFilters:$.java.util.List):void;
            }
            type VaBillInitExpService_T = VaBillInitExpService_S & VaBillInitExpService$;
            interface VaBillInitExpService extends VaBillInitExpService_T {
            }
            interface TieInitTPBillExtPlugin_S {
            }
            interface TieInitTPBillExtPlugin$ {
                /**
                 * 构建出差单查询条件扩展方法
                 *
                 * <p>在考勤核算单初始化时，通过该方法可以修改出差单查询条件</p>
                 * <p>示例：</p>
                 * 1.添加自定义查询条件：
                 * 例如：添加出差时间在‘2020-01-01’之后的查询条件
                 * event.getQFilter().add(new QFilter("entrystartdate",QCP.large_equals,"2020-01-01"));
                 *
                 * @param event 扩展事件参数
                 */
                onBuildQFilter?(event:OnBuildTPQFilterEvent):void;
            }
            type TieInitTPBillExtPlugin_T = TieInitTPBillExtPlugin_S & TieInitTPBillExtPlugin$;
            interface TieInitTPBillExtPlugin extends TieInitTPBillExtPlugin_T {
            }
            interface OnBuildTPQFilterEvent_S {
            }
            interface OnBuildTPQFilterEvent_C extends OnBuildTPQFilterEvent_S {
                new(qFilters:$.java.util.List):OnBuildTPQFilterEvent;
            }
            interface OnBuildTPQFilterEvent$ {
                /**
                 * 获取标品过滤条件
                 *
                 * @return 参与核算初始化加班单据的查询条件
                 */
                getQFilter():$.java.util.List;
            }
            type OnBuildTPQFilterEvent_T = OnBuildTPQFilterEvent_S & OnBuildTPQFilterEvent$;
            interface OnBuildTPQFilterEvent extends OnBuildTPQFilterEvent_T {
            }
            interface OnBuildOTQFilterEvent_S {
            }
            interface OnBuildOTQFilterEvent_C extends OnBuildOTQFilterEvent_S {
                new(qFilters:$.java.util.List):OnBuildOTQFilterEvent;
            }
            interface OnBuildOTQFilterEvent$ {
                /**
                 * 获取标品过滤条件
                 *
                 * @return 参与核算初始化加班单据的查询条件
                 */
                getQFilter():$.java.util.List;
            }
            type OnBuildOTQFilterEvent_T = OnBuildOTQFilterEvent_S & OnBuildOTQFilterEvent$;
            interface OnBuildOTQFilterEvent extends OnBuildOTQFilterEvent_T {
            }
            interface TieInitOTBillExtPlugin_S {
            }
            interface TieInitOTBillExtPlugin$ {
                /**
                 * 构建加班单查询条件扩展方法
                 *
                 * <p>在考勤核算单初始化时，通过该方法可以修改加班单查询条件</p>
                 * <p>示例：</p>
                 * 1.添加自定义查询条件：
                 * 例如：添加加班时间在‘2020-01-01’之后的查询条件
                 * event.getQFilter().add(new QFilter("startdate",QCP.large_equals,"2020-01-01"));
                 *
                 * @param event 扩展事件参数
                 */
                onBuildQFilter?(event:OnBuildOTQFilterEvent):void;
            }
            type TieInitOTBillExtPlugin_T = TieInitOTBillExtPlugin_S & TieInitOTBillExtPlugin$;
            interface TieInitOTBillExtPlugin extends TieInitOTBillExtPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.init.configmix{
            interface TieConfigMixQueryEvent_S {
            }
            interface TieConfigMixQueryEvent_C extends TieConfigMixQueryEvent_S {
                new(fromDate:$.java.time.LocalDate,toDate:$.java.time.LocalDate):TieConfigMixQueryEvent;
            }
            interface TieConfigMixQueryEvent$ {
                /**
                 * 追加自定义的配置组合
                 */
                addConfigMixResult(configMixResult:$.java.util.List):void;
                /**
                 * 获取自定义的配置组合
                 * 返回的结果必须查询出这些配置组合中的属性countryid.number,attitemmap.id,attstsmap.id,tbpcrelcnf.id,entryentity.biztype,entryentity.exattr,entryentity.attendattr,entryentity.datasource
                 *
                 * @return 自定义的配置组合
                 */
                getConfigMixResult():$.java.util.List;
                /**
                 * 获取考勤核算初始的开始日期，包含该日期
                 *
                 * @return 考勤核算初始的开始日期，包含该日期
                 */
                getFromDate():$.java.time.LocalDate;
                /**
                 * 获取考勤核算初始的结束日期，包含该日期
                 *
                 * @return 考勤核算初始的结束日期，包含该日期
                 */
                getToDate():$.java.time.LocalDate;
            }
            type TieConfigMixQueryEvent_T = TieConfigMixQueryEvent_S & TieConfigMixQueryEvent$;
            interface TieConfigMixQueryEvent extends TieConfigMixQueryEvent_T {
            }
            interface ConfigMixInitPluginDemo_S {
            }
            type ConfigMixInitPluginDemo_ST = TieConfigMixInitPlugin_S & ConfigMixInitPluginDemo_S;
            interface ConfigMixInitPluginDemo_C extends ConfigMixInitPluginDemo_ST {
                new():ConfigMixInitPluginDemo;
            }
            interface ConfigMixInitPluginDemo$ {
            }
            type ConfigMixInitPluginDemo_T = TieConfigMixInitPlugin & ConfigMixInitPluginDemo_S & ConfigMixInitPluginDemo$;
            interface ConfigMixInitPluginDemo extends ConfigMixInitPluginDemo_T {
            }
            interface TieConfigMixInitPlugin_S {
            }
            interface TieConfigMixInitPlugin$ {
                onQuery(event:TieConfigMixQueryEvent):void;
            }
            type TieConfigMixInitPlugin_T = TieConfigMixInitPlugin_S & TieConfigMixInitPlugin$;
            interface TieConfigMixInitPlugin extends TieConfigMixInitPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.init.logiccard{
            interface OnQueryInitParamOfLogicCardEvent_S {
            }
            interface OnQueryInitParamOfLogicCardEvent_C extends OnQueryInitParamOfLogicCardEvent_S {
                new(qFilter:$.kd.bos.orm.query.QFilter):OnQueryInitParamOfLogicCardEvent;
            }
            interface OnQueryInitParamOfLogicCardEvent$ {
                getExtKeys():$.java.util.Set;
                getQFilter():$.kd.bos.orm.query.QFilter;
                setExtKeys(extKeys:$.java.util.Set):void;
            }
            type OnQueryInitParamOfLogicCardEvent_T = OnQueryInitParamOfLogicCardEvent_S & OnQueryInitParamOfLogicCardEvent$;
            interface OnQueryInitParamOfLogicCardEvent extends OnQueryInitParamOfLogicCardEvent_T {
            }
            interface TieInitEffectiveCardExtPlugin_S {
            }
            interface TieInitEffectiveCardExtPlugin$ {
                /**
                 * 执行查询有效多次卡初始化参数前置事件方法，支持修改预置核算参数的查询条件和新增查询字段
                 *
                 * <p>考勤核算时，需要先准备数据，本接口适用于初始化多次卡数据的时候扩展</p>
                 * <pre><code>
                 *      Set<String> extKeys 支持查询时扩展的查询字段，扩展的属性必须是 多次卡元数据（wtpm_multicard） 里的扩展属性
                 *      QFilter qFilter  里面已经包含了要查询的条件，系统将会完全使用该方法的返回结果做为查询条件查询多次次卡
                 * </code></pre>
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 *  // 设置要增加扩展字段 举例："extkey01"
                 *  event.setExtKeys(Sets.newHashSet("extkey01"));
                 *  // 修改查询过滤条件 列，增加时区限制 qFilter.and(new QFilter("timezone", QCP.in,320881823238577152L));
                 *  QFilter qFilter = event.getQFilter();
                 *
                 * </code></pre>
                 *
                 * @param event 扩展入参
                 */
                onQueryMultiEffectiveCard?(event:OnQueryInitParamOfLogicCardEvent):void;
                /**
                 * 执行查询有效一次卡初始化参数前置事件方法，支持修改预置核算参数的查询条件和新增查询字段
                 *
                 * <p>考勤核算时，需要先准备数据，本接口适用于初始化一次卡数据的时候扩展</p>
                 * <pre><code>
                 *      Set<String> extKeys 支持查询时扩展的查询字段，扩展的属性必须是 一次卡元数据（wtpm_oncecard） 里的扩展属性
                 *      QFilter qFilter  里面已经包含了要查询的条件，系统将会完全使用该方法的返回结果做为查询条件查询一次卡
                 * </code></pre>
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 *  // 设置要增加扩展字段 举例："extkey01"
                 *  event.setExtKeys(Sets.newHashSet("extkey01"));
                 *  // 修改查询过滤条件 列，增加时区限制 qFilter.and(new QFilter("timezone", QCP.in,320881823238577152L));
                 *  QFilter qFilter = event.getQFilter();
                 *
                 * </code></pre>
                 *
                 * @param event 扩展入参
                 */
                onQueryOnceEffectiveCard?(event:OnQueryInitParamOfLogicCardEvent):void;
            }
            type TieInitEffectiveCardExtPlugin_T = TieInitEffectiveCardExtPlugin_S & TieInitEffectiveCardExtPlugin$;
            interface TieInitEffectiveCardExtPlugin extends TieInitEffectiveCardExtPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.init.perattperiod{
            interface OnQueryInitParamOfPerAttPeriodEvent_S {
            }
            interface OnQueryInitParamOfPerAttPeriodEvent_C extends OnQueryInitParamOfPerAttPeriodEvent_S {
                new(periodQueryParamExt:PerAttPeriodQueryParamExt):OnQueryInitParamOfPerAttPeriodEvent;
            }
            interface OnQueryInitParamOfPerAttPeriodEvent$ {
                getExtKeys():$.java.util.Set;
                getPeriodQueryParamExt():PerAttPeriodQueryParamExt;
                setExtKeys(extKeys:$.java.util.Set):void;
            }
            type OnQueryInitParamOfPerAttPeriodEvent_T = OnQueryInitParamOfPerAttPeriodEvent_S & OnQueryInitParamOfPerAttPeriodEvent$;
            interface OnQueryInitParamOfPerAttPeriodEvent extends OnQueryInitParamOfPerAttPeriodEvent_T {
            }
            interface TieInitAttPeriodExtPlugin_S {
            }
            interface TieInitAttPeriodExtPlugin$ {
                /**
                 * 考勤核算人员考勤期间初始化扩展方法
                 *
                 * <p>考勤核算时，需要先准备数据，本接口适用于人员考勤期间数据准备的查询条件构建</p>
                 * <pre><code>
                 *      Set<String> extKeys 支持查询时扩展的查询字段，扩展的属性必须是 人员考勤期间元数据（wtp_perattperiod） 里的扩展属性
                 *      PerAttPeriodQueryParamExt  提供查询人员考勤期间时设置一些查询的条件
                 * </code></pre>
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 *
                 *  public void onQueryAttPeriod(OnQueryInitParamOfPerAttPeriodEvent event) {
                 *      // 查询时增加额外的考勤人查询
                 *      event.getAttFileQueryParam().getAttPersonSetIds().add(1863000118957967360L);
                 *      // 扩展字段增加总天数，扩展字段必须来自档案（wtp_perattperiod）
                 *      event.setExtKeys(Sets.newHashSet("totaldays"));
                 *  }
                 *
                 * </code></pre>
                 *
                 * @param event 扩展入参
                 */
                onQueryAttPeriod(event:OnQueryInitParamOfPerAttPeriodEvent):void;
            }
            type TieInitAttPeriodExtPlugin_T = TieInitAttPeriodExtPlugin_S & TieInitAttPeriodExtPlugin$;
            interface TieInitAttPeriodExtPlugin extends TieInitAttPeriodExtPlugin_T {
            }
            interface PerAttPeriodQueryParamExt_S {
            }
            interface PerAttPeriodQueryParamExt$ {
                /**
                 * 获取查询档案的考勤人集合
                 *
                 * @return 要查询的考勤人集合
                 */
                getAttPersonSetIds():$.java.util.Set;
                /**
                 * 获取查询结束日期
                 *
                 * @return 结束日期
                 */
                getEndDate():Date;
                /**
                 * 获取实际实现的实例
                 *
                 * @return 实际实例
                 */
                getInstance():any;
                /**
                 * 获取查询开始日期
                 *
                 * @return 开始日期
                 */
                getStartDate():Date;
                /**
                 * 设置查询的考勤人集合，如果设置了会覆盖系统的，如果不设置会走系统的
                 *
                 * @param personSetIds 查询的考勤人集合
                 */
                setAttPersonSetIds(personSetIds:$.java.util.Set):void;
                /**
                 * 设置查询结束日期
                 *
                 * @param endDate 结束日期
                 */
                setEndDate(endDate:Date):void;
                /**
                 * 设置其它的查询条件，默认是空的
                 * <pre><code>
                 *     // 举例设置查询业务状态的数据状态
                 *      QFilter attPersonIdsFilter =  new QFilter(AttConstants.BUSISTATUS, QCP.equals, busiStatus)
                 * </code></pre>
                 *
                 * @param qFilter 设置其它的过滤条件
                 */
                setQFilter(qFilter:$.kd.bos.orm.query.QFilter):void;
                /**
                 * 设置开始日期
                 *
                 * @param startDate 开始日期
                 */
                setStartDate(startDate:Date):void;
            }
            type PerAttPeriodQueryParamExt_T = PerAttPeriodQueryParamExt_S & PerAttPeriodQueryParamExt$;
            interface PerAttPeriodQueryParamExt extends PerAttPeriodQueryParamExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.accountplan{
            interface TieSchemeExt_S {
            }
            interface TieSchemeExt_C extends TieSchemeExt_S {
                new():TieSchemeExt;
            }
            interface TieSchemeExt$ {
                /**
                 * @return 日明细/期间汇总最后一个步骤二开实现类路径
                 */
                getEvaluatorName():string;
                /**
                 * @param evaluatorName 日明细/期间汇总最后一个步骤二开实现类路径
                 */
                setEvaluatorName(evaluatorName:string):void;
            }
            type TieSchemeExt_T = TieSchemeExt_S & TieSchemeExt$;
            interface TieSchemeExt extends TieSchemeExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.attconfig{
            interface AttRuleCalExt_S {
            }
            interface AttRuleCalExt$ {
                /**
                 * 根据日期获取自定义出勤时长分录的时序性数据
                 *
                 * @param chainDate
                 * @return
                 */
                getAttCustomDurations(chainDate:$.java.time.LocalDate):$.java.util.List;
                /**
                 * @return 日期范围过滤json
                 */
                getConditionJson():string;
                /**
                 * @return 限定条件
                 */
                getLimitConditionJson():string;
            }
            type AttRuleCalExt_T = AttRuleCalExt_S & AttRuleCalExt$;
            interface AttRuleCalExt extends AttRuleCalExt_T {
            }
            interface AttRuleExt_S {
            }
            interface AttRuleExt$ {
                /**
                 * 获取出勤规则分录（其他时长分录）
                 *
                 * @return 出勤规则分录（其他时长分录）
                 */
                getAttRuleCal():$.java.util.List;
                /**
                 * 根据日期，获取 应出勤配置对象
                 *
                 * @param chainDate 核算日
                 * @return 应出勤配置对象
                 */
                getAttendConfigTimeSeqBo(chainDate:$.java.time.LocalDate):AttendConfigExt;
                /**
                 * @return 应出勤天数的考勤项目BOID
                 */
                getShouldAttendDay():long;
                /**
                 * @return 应出勤时长的考勤项目BOID
                 */
                getShouldAttendHour():long;
                /**
                 * @return 班内加班时段计入应出勤
                 */
                isContainOverTime():boolean;
            }
            type AttRuleExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & AttRuleExt_S & AttRuleExt$;
            interface AttRuleExt extends AttRuleExt_T {
            }
            interface AttendConfigExt_S {
                readonly ATTENDDAYS_A:string;
                readonly ATTENDDAYS_B:string;
            }
            interface AttendConfigExt$ {
                /**
                 * 获取应出勤天数，当前仅支持按排班 {@link AttendConfigExt#ATTENDDAYS_A}
                 *
                 * @return 应出勤天数
                 */
                getAttendDays():string;
                /**
                 * 获取 班次指标条件json
                 *
                 * @return 班次指标条件json
                 */
                getShiftConditionJsonTag():string;
            }
            type AttendConfigExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & AttendConfigExt_S & AttendConfigExt$;
            interface AttendConfigExt extends AttendConfigExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.attenperson{
            interface PersonExt_S {
            }
            interface PersonExt$ {
                /**
                 * boId
                 */
                getBid():long;
                /**
                 * 头像
                 */
                getHeadSculpture():string;
                /**
                 * 自然人唯一索引id
                 */
                getId():long;
                /**
                 * 名称
                 */
                getName():string;
                /**
                 * 工号
                 */
                getNumber():string;
                /**
                 * 当前表主键
                 */
                getPersonIndexId():long;
                /**
                 * 是否HR创建
                 */
                isHrCreate():boolean;
            }
            type PersonExt_T = PersonExt_S & PersonExt$;
            interface PersonExt extends PersonExt_T {
            }
            interface EmpJobRelExt_S {
            }
            interface EmpJobRelExt$ {
                /**
                 * 部门
                 */
                getAdminOrg():long;
                /**
                 * 公司
                 */
                getCompany():long;
                /**
                 * 结束日期
                 */
                getEndDate():Date;
                /**
                 * 职位所属业务单元
                 */
                getHrBu():long;
                /**
                 * 职位
                 */
                getJob():long;
                /**
                 * 职位类
                 */
                getJobClass():long;
                /**
                 * 职位族
                 */
                getJobFamily():long;
                /**
                 * 职等
                 */
                getJobGrade():long;
                /**
                 * 职位
                 */
                getJobHr():long;
                /**
                 * 职级职等时长
                 */
                getJobLength():long;
                /**
                 * 职级
                 */
                getJobLevel():long;
                /**
                 * 职位序列
                 */
                getJobSeq():long;
                /**
                 * 名称
                 */
                getName():string;
                /**
                 * 岗位
                 */
                getPosition():long;
                /**
                 * 开始日期
                 */
                getStartDate():Date;
            }
            type EmpJobRelExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & EmpJobRelExt_S & EmpJobRelExt$;
            interface EmpJobRelExt extends EmpJobRelExt_T {
            }
            interface EmpEntRelExt_S {
            }
            interface EmpEntRelExt$ {
                /**
                 * 首次用工开始日期
                 */
                getFirstStartDate():Date;
                /**
                 * 用工关系状态
                 */
                getLaborRelStatus():long;
                /**
                 * 前工号
                 */
                getOldEmpNumber():string;
                /**
                 * 用工开始日期
                 */
                getStartDate():Date;
            }
            type EmpEntRelExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & EmpEntRelExt_S & EmpEntRelExt$;
            interface EmpEntRelExt extends EmpEntRelExt_T {
            }
            interface ContrWorkLocExt_S {
            }
            interface ContrWorkLocExt$ {
                /**
                 * 名称
                 */
                getName():string;
            }
            type ContrWorkLocExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & ContrWorkLocExt_S & ContrWorkLocExt$;
            interface ContrWorkLocExt extends ContrWorkLocExt_T {
            }
            interface EmpPosOrgRelExt_S {
            }
            interface EmpPosOrgRelExt$ {
                /**
                 * 工作分配号
                 */
                getAssignNo():string;
                /**
                 * 业务编码
                 */
                getBusiNumber():string;
                /**
                 * 所属管理范围
                 */
                getCmpEmp():long;
                /**
                 * 部门人员
                 */
                getDepEmp():long;
                /**
                 * 任期结束日期
                 */
                getEndDate():Date;
                /**
                 * 是否主任职,0=否，1=是
                 */
                getIsPrimary():string;
                /**
                 * 名称
                 */
                getName():string;
                /**
                 * 任职状态
                 */
                getPosStatus():long;
                /**
                 * 任职类型
                 */
                getPosType():long;
                /**
                 * 流水号
                 */
                getSerialNo():string;
                /**
                 * 任职开始日期
                 */
                getStartDate():Date;
                /**
                 * 系统结束日期
                 */
                getSysEndDate():Date;
                /**
                 * 工作地所在城市
                 */
                getWorkplace():long;
            }
            type EmpPosOrgRelExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & EmpPosOrgRelExt_S & EmpPosOrgRelExt$;
            interface EmpPosOrgRelExt extends EmpPosOrgRelExt_T {
            }
            interface EmployeeExt_S {
            }
            interface EmployeeExt$ {
                /**
                 * 工号
                 */
                getEmpNumber():string;
                /**
                 * 用工结束日期
                 */
                getEndDate():Date;
                /**
                 * 用人单位
                 */
                getEnterPrise():long;
                /**
                 * 用工关系状态
                 */
                getLaborRelStatus():long;
                /**
                 * 用工关系类型
                 */
                getLaborRelType():long;
                /**
                 * 最后工作日
                 */
                getLastWorkDate():Date;
                /**
                 * 用工开始日期
                 */
                getStartDate():Date;
                /**
                 * 系统结束日期
                 */
                getSysEndDate():Date;
            }
            type EmployeeExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & EmployeeExt_S & EmployeeExt$;
            interface EmployeeExt extends EmployeeExt_T {
            }
            interface PerNonTsPropExt_S {
            }
            interface PerNonTsPropExt$ {
                /**
                 * 年龄
                 */
                getAge():number;
                /**
                 * 参加工作日期
                 */
                getBeginServiceDate():Date;
                /**
                 * 当前人年龄
                 */
                getBirthDay():Date;
                /**
                 * 民族
                 */
                getFolk():long;
                /**
                 * 性别
                 */
                getGender():long;
                /**
                 * 当前表主键
                 */
                getId():long;
                /**
                 * 结婚登记日
                 */
                getMarryDate():Date;
                /**
                 * 名称
                 */
                getName():string;
                /**
                 * 国籍
                 */
                getNationality():long;
            }
            type PerNonTsPropExt_T = PerNonTsPropExt_S & PerNonTsPropExt$;
            interface PerNonTsPropExt extends PerNonTsPropExt_T {
            }
            interface AttendPersonExt_S {
            }
            interface AttendPersonExt$ {
                /**
                 * 协议工作地信息
                 */
                getContrWorkLocExt():ContrWorkLocExt;
                /**
                 * 职业信息
                 */
                getEmpEntRelExt():EmpEntRelExt;
                /**
                 * 职级职等信息
                 */
                getEmpJobRelExt():EmpJobRelExt;
                /**
                 * 企业人员信息
                 */
                getEmployeeExt():EmployeeExt;
                /**
                 * 人员时序信息
                 */
                getPerNonTsPropExt():PerNonTsPropExt;
                /**
                 * 人员非时序信息
                 */
                getPersonExt():PersonExt;
                /**
                 * 试用期信息
                 */
                getTrialPeriodExt():TrialPeriodExt;
            }
            type AttendPersonExt_T = AttendPersonExt_S & AttendPersonExt$;
            interface AttendPersonExt extends AttendPersonExt_T {
            }
            interface CmpEmpExt_S {
            }
            interface CmpEmpExt$ {
                /**
                 * 结束日期
                 */
                getEndDate():Date;
                /**
                 * 是否主管理范围,0=否，1=是
                 */
                getIsPrimaryScope():string;
                /**
                 * 最后工作日
                 */
                getLastWorkDate():Date;
                /**
                 * 是否用工前最新记录,0=否，1=是
                 */
                getLateStrecord():string;
                /**
                 * 所属管理范围
                 */
                getManagingScope():long;
                /**
                 * 名称
                 */
                getName():string;
                /**
                 * 开始日期
                 */
                getStartDate():Date;
                /**
                 * 系统结束日期
                 */
                getSysEndDate():Date;
            }
            type CmpEmpExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & CmpEmpExt_S & CmpEmpExt$;
            interface CmpEmpExt extends CmpEmpExt_T {
            }
            interface TrialPeriodExt_S {
            }
            interface TrialPeriodExt$ {
                /**
                 * 入职日期
                 */
                getEntryDate():Date;
                /**
                 * 转正日期
                 */
                getRegularDate():Date;
            }
            type TrialPeriodExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & TrialPeriodExt_S & TrialPeriodExt$;
            interface TrialPeriodExt extends TrialPeriodExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.attfile{
            interface TimeZoneExt_S {
            }
            interface TimeZoneExt$ {
                /**
                 * 时差
                 */
                getTimeDiff():number;
                /**
                 * 时区id
                 */
                getTimeZoneId():long;
            }
            type TimeZoneExt_T = TimeZoneExt_S & TimeZoneExt$;
            interface TimeZoneExt extends TimeZoneExt_T {
            }
            interface AttFileExt_S {
            }
            interface AttFileExt$ {
                /**
                 * 行政组织ID
                 */
                getAdminOrgId():long;
                /**
                 * 挂靠行政组织bid
                 */
                getAffiliateAdminOrgBid():long;
                /**
                 * 挂靠行政组织版本数据
                 */
                getAffiliateAdminOrgVid():$.java.util.List;
                /**
                 * 获取指定日期{@code inDate}所使用的分录数据 考勤卡号
                 *
                 * @param inDate 使用的日期，不能为null
                 * @return 无法获取有效数据将返回null
                 * @throws NullPointerException if inDate is null
                 */
                getAttCard(inDate:$.java.time.LocalDate):string;
                /**
                 * 获取指定日期{@code inDate}所使用的考勤方式
                 *
                 * @param inDate 使用方案的日期，不能为null
                 * @return 考勤方式，如果无法获取有效考勤方式将返回null
                 * @throws NullPointerException if inDate is null
                 */
                getAttMode(inDate:$.java.time.LocalDate):string;
                /**
                 * 考勤人ID
                 */
                getAttPersonId():long;
                /**
                 * 考勤标识
                 */
                getAttTagId():long;
                /**
                 * 所属管理范围id
                 */
                getCmpEmpId():long;
                /**
                 * 公司ID
                 */
                getCompanyId():long;
                /**
                 * 考勤管理属地,这里直接获取的名称(更名为国家地区)
                 */
                getDependency():string;
                /**
                 * 国家地区id
                 */
                getDependencyId():long;
                /**
                 * 属地员工类型id
                 */
                getDependencyType():long;
                /**
                 * 考勤人员组id
                 */
                getEmpGroup():long;
                /**
                 * 任职经历id
                 */
                getEmpPosOrgRelId():long;
                /**
                 * 结束日期
                 */
                getEndDate():$.java.time.LocalDate;
                /**
                 * 职位ID
                 */
                getJobId():long;
                /**
                 * 业务单元ID
                 */
                getOrgId():long;
                /**
                 * 岗位ID
                 */
                getPositionId():long;
                /**
                 * 开始日期
                 */
                getStartDate():$.java.time.LocalDate;
                /**
                 * 工时解析id
                 */
                getTimeResolveId():long;
                /**
                 * 获取指定日期{@code inDate}所使用的分录数据 时区
                 *
                 * @param inDate 使用的日期，不能为null
                 * @return 无法获取有效数据将返回null
                 */
                getTimeZone(inDate:$.java.time.LocalDate):TimeZoneExt;
                /**
                 * 考勤地点
                 */
                getWorkplace():long;
                /**
                 * 代管员工
                 */
                isManaged():boolean;
            }
            type AttFileExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & kd.sdk.wtc.wtes.business.tie.model.common.DataAttributeExtendable & AttFileExt_S & AttFileExt$;
            interface AttFileExt extends AttFileExt_T {
            }
            interface AttFileScheduleEntityExt_S {
            }
            interface AttFileScheduleEntityExt$ {
                /**
                 * 结束时间
                 */
                getEndDate():$.java.time.LocalDate;
                /**
                 * 对象
                 */
                getEntity():any;
                /**
                 * id
                 */
                getId():long;
                /**
                 * 开始时间
                 */
                getStartDate():$.java.time.LocalDate;
            }
            type AttFileScheduleEntityExt_T = AttFileScheduleEntityExt_S & AttFileScheduleEntityExt$;
            interface AttFileScheduleEntityExt extends AttFileScheduleEntityExt_T {
            }
            interface AttStateExt_S {
            }
            interface AttStateExt$ {
                /**
                 * 核算至日期
                 */
                getAccountTo():Date;
                /**
                 * 允许最早重算日期
                 */
                getAllowReAccountTime():Date;
                /**
                 * 异常结束日期
                 */
                getExcEndDate():Date;
                /**
                 * 异常开始日期
                 */
                getExcStartDate():Date;
                /**
                 * 档案BoId
                 */
                getFileBoId():long;
                /**
                 * 冻结范围-冻结结束日期
                 */
                getFrozenEnDate():Date;
                /**
                 * 冻结范围-冻结开始日期
                 */
                getFrozenStartDate():Date;
                /**
                 * id
                 */
                getId():long;
                /**
                 * 锁定至日期
                 */
                getLockTo():Date;
                /**
                 * 考勤人id
                 */
                getPersonId():long;
                /**
                 * 封存至日期
                 */
                getStorageTo():Date;
                /**
                 * 是否有异常
                 */
                isExState():boolean;
            }
            type AttStateExt_T = AttStateExt_S & AttStateExt$;
            interface AttStateExt extends AttStateExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.attitem{
            interface ExAttItemInstanceExt_S {
            }
            type ExAttItemInstanceExt_ST = AttItemInstanceExt_S & ExAttItemInstanceExt_S;
            interface ExAttItemInstanceExt_C extends ExAttItemInstanceExt_ST {
                /**
                 * 异常考勤项目构造器
                 *
                 * @param attItemSpecExt 考勤项目定义
                 * @param itemValue      考勤项目值
                 * @param day            考勤项目值（单位：天）
                 * @param secondDecimal  考勤项目值（单位秒：天）
                 */
                new(attItemSpecExt:AttItemSpecExt,itemValue:$.java.math.BigDecimal,day:$.java.math.BigDecimal,secondDecimal:$.java.math.BigDecimal):ExAttItemInstanceExt;
            }
            interface ExAttItemInstanceExt$ {
                /**
                 * 获取异常标识
                 *
                 * @return 异常标识
                 */
                getExFilterType():string;
                /**
                 * 获取异常处理方式ID
                 *
                 * @return 异常处理方式ID
                 */
                getExProcessId():long;
                /**
                 * 获取异常类型ID
                 *
                 * @return 异常类型ID
                 */
                getExTypeId():long;
                /**
                 * 获取原始考勤项目BOID列表
                 *
                 * @return 原始考勤项目BOID列表
                 */
                getOriginAttItemBoIds():$.java.util.List;
                /**
                 * 获取原始考勤项目值
                 *
                 * @return 原始考勤项目值
                 */
                getOriginAttItemValue():$.java.math.BigDecimal;
                /**
                 * 获取原始考勤项目VID列表
                 *
                 * @return 原始考勤项目VID列表
                 */
                getOriginAttItemVids():$.java.util.List;
                /**
                 * 获取发生的考勤异常班次日期
                 *
                 * @return 班次日期
                 */
                getShiftDate():$.java.time.LocalDate;
                /**
                 * 获取班次时段ID
                 *
                 * @return 班次时段ID
                 */
                getShiftTimeBucketSeqId():long;
                /**
                 * 获取应打卡点ID
                 *
                 * @return 应打卡点ID
                 */
                getShouldPunchCardSeqId():long;
                /**
                 * 获取应打卡下班卡点
                 *
                 * @return 应打卡下班卡点
                 */
                getShouldPunchPointEnd():$.java.time.LocalDateTime;
                /**
                 * 获取应打上班卡点
                 *
                 * @return 应打上班卡点
                 */
                getShouldPunchPointStart():$.java.time.LocalDateTime;
                /**
                 * 是否原始异常
                 *
                 * @return 是否原始异常
                 */
                isOriginEx():boolean;
            }
            type ExAttItemInstanceExt_T = AttItemInstanceExt & ExAttItemInstanceExt_S & ExAttItemInstanceExt$;
            interface ExAttItemInstanceExt extends ExAttItemInstanceExt_T {
            }
            interface AttItemInstanceExt_S {
            }
            interface AttItemInstanceExt_C extends AttItemInstanceExt_S {
                /**
                 * 考勤项目构造器
                 *
                 * @param attItemSpecExt 考勤项目定义
                 * @param itemValue      考勤项目值
                 * @param day            考勤项目值（单位：天）
                 * @param secondDecimal  考勤项目值（单位秒：天）
                 */
                new(attItemSpecExt:AttItemSpecExt,itemValue:$.java.math.BigDecimal,day:$.java.math.BigDecimal,secondDecimal:$.java.math.BigDecimal):AttItemInstanceExt;
            }
            interface AttItemInstanceExt$ {
                /**
                 * 获取考勤项目定义
                 *
                 * @return 考勤项目定义
                 */
                getAttItemSpecExt():AttItemSpecExt;
                /**
                 * 获取考勤项目值（单位：天）
                 *
                 * @return 考勤项目值（单位：天）
                 */
                getDay():$.java.math.BigDecimal;
                /**
                 * 考勤项目值
                 *
                 * @return 考勤项目值
                 */
                getItemValue():$.java.math.BigDecimal;
                /**
                 * 获取考勤项目值（单位：秒）
                 *
                 * @return 考勤项目值（单位：秒）
                 */
                getSecondDecimal():$.java.math.BigDecimal;
            }
            type AttItemInstanceExt_T = AttItemInstanceExt_S & AttItemInstanceExt$;
            interface AttItemInstanceExt extends AttItemInstanceExt_T {
            }
            interface PeriodAttItemInstanceExt_S {
            }
            interface PeriodAttItemInstanceExt_C extends PeriodAttItemInstanceExt_S {
                new(attItemSpecExt:AttItemSpecExt,itemValue:$.java.math.BigDecimal):PeriodAttItemInstanceExt;
            }
            interface PeriodAttItemInstanceExt$ {
                /**
                 * @return 考勤项目
                 */
                getAttItemSpecExt():AttItemSpecExt;
                /**
                 * @return 考勤项目值
                 */
                getItemValue():$.java.math.BigDecimal;
            }
            type PeriodAttItemInstanceExt_T = PeriodAttItemInstanceExt_S & PeriodAttItemInstanceExt$;
            interface PeriodAttItemInstanceExt extends PeriodAttItemInstanceExt_T {
            }
            interface AttItemSpecExt_S {
            }
            interface AttItemSpecExt$ {
                /**
                 * 是否组合
                 */
                combo():boolean;
                /**
                 * 组合项目id
                 */
                comboItemBids():$.java.util.List;
                /**
                 * 数据精度
                 */
                dataAccuracy():number;
                /**
                 * 数据类型
                 */
                dataType():string;
                /**
                 * 获取标品考勤项目实例
                 */
                getInstance():any;
                /**
                 * 可转移方式
                 */
                getTransferType():string;
                /**
                 * 项目类型
                 */
                itemType():string;
                /**
                 * 可转移上一期项目
                 */
                lastTermItemBid():long;
                /**
                 * 可转移下一期项目
                 */
                lastYearItemBid():long;
                /**
                 * 是否原始考勤项目
                 */
                originalItem():boolean;
                /**
                 * 是否落考勤记录明细
                 */
                persistence():boolean;
                /**
                 * 精度尾差处理
                 */
                precisionTail():string;
                /**
                 * 是否薪资项目
                 */
                salaryItem():boolean;
                /**
                 * 单位类型
                 */
                unit():string;
            }
            type AttItemSpecExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & kd.sdk.wtc.wtes.business.tie.model.common.DataAttributeExtendable & AttItemSpecExt_S & AttItemSpecExt$;
            interface AttItemSpecExt extends AttItemSpecExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.card{
            interface LogicCardExt_S {
            }
            interface LogicCardExt$ {
                /**
                 * 考勤人id
                 */
                getAttPersonId():long;
                /**
                 * 应打卡点(档案上的时区)
                 */
                getCardPointSupposed():$.java.time.LocalDateTime;
                /**
                 * 有效卡点,绝对时间(原始卡的时区)
                 */
                getEffectiveCardPoint():$.java.time.LocalDateTime;
                /**
                 * 时差
                 */
                getTimeDiff():number;
                /**
                 * 时区id(原始卡的时区)
                 */
                getTimeZoneId():long;
            }
            type LogicCardExt_T = kd.sdk.wtc.wtes.business.tie.model.common.DataAttributeExtendable & LogicCardExt_S & LogicCardExt$;
            interface LogicCardExt extends LogicCardExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.common{
            interface DataAttributeExtendable_S {
            }
            interface DataAttributeExtendable$ {
                /**
                 * 获取扩展属性的值，如果要获取的扩展字段没有在扩展属性列表中时会抛异常
                 *
                 * @param extKey 扩展属性字段名称
                 * @return 获取扩展属性的值
                 */
                getExtAttribute(extKey:string):any;
                /**
                 * 获取扩展属性字段集合
                 *
                 * @return 扩展属性字段集合
                 */
                getExtKeys():$.java.util.Set;
            }
            type DataAttributeExtendable_T = DataAttributeExtendable_S & DataAttributeExtendable$;
            interface DataAttributeExtendable extends DataAttributeExtendable_T {
            }
            interface TieAttSubjectExt_S {
            }
            interface TieAttSubjectExt$ {
                /**
                 * 获取考勤档案
                 *
                 * @return 考勤档案
                 */
                getAttFileBos():$.java.util.List;
                /**
                 * 获取考勤人ID
                 *
                 * @return 考勤人ID
                 */
                getAttPersonId():long;
                /**
                 * 结束时间
                 *
                 * @return 结束时间
                 */
                getEndDate():$.java.time.LocalDate;
                /**
                 * 开始时间
                 *
                 * @return 开始时间
                 */
                getStartDate():$.java.time.LocalDate;
            }
            type TieAttSubjectExt_T = TieAttSubjectExt_S & TieAttSubjectExt$;
            interface TieAttSubjectExt extends TieAttSubjectExt_T {
            }
            interface TieAttFileBoExt_S {
            }
            interface TieAttFileBoExt$ {
                /**
                 * 档案BoId
                 */
                getAttFileBoId():long;
                /**
                 * 考勤档案版本
                 */
                getAttFileVersions():$.java.util.List;
                /**
                 * 结束时间
                 */
                getEndDate():$.java.time.LocalDate;
                /**
                 * 开始时间
                 */
                getStartDate():$.java.time.LocalDate;
            }
            type TieAttFileBoExt_T = TieAttFileBoExt_S & TieAttFileBoExt$;
            interface TieAttFileBoExt extends TieAttFileBoExt_T {
            }
            interface TieAttFileVersionExt_S {
            }
            interface TieAttFileVersionExt$ {
                /**
                 * 考勤档案版本id
                 */
                getAttFileVid():long;
                /**
                 * 档案结束日期
                 */
                getEndDate():$.java.time.LocalDate;
                /**
                 * 档案开始日期
                 */
                getStartDate():$.java.time.LocalDate;
            }
            type TieAttFileVersionExt_T = TieAttFileVersionExt_S & TieAttFileVersionExt$;
            interface TieAttFileVersionExt extends TieAttFileVersionExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.ex{
            interface ExConfigExt_S {
            }
            interface ExConfigExt$ {
                /**
                 * @return 从conditions json转成的对象
                 */
                getConditionInfo():kd.bos.ext.hr.ruleengine.infos.RuleConditionInfo;
                /**
                 * @return 条件过滤
                 */
                getConditions():string;
                /**
                 * @return 处理方式分录列表
                 */
                getEntryList():$.java.util.List;
                /**
                 * @return 异常类型id
                 */
                getExTypeId():long;
                /**
                 * @return 自定义过滤 时段过滤插件
                 */
                getPeriodFilter():long;
                /**
                 * @return 是否适用所有应打卡对
                 */
                isAllPunchCard():boolean;
                /**
                 * @return 异常类型是否自定义  如果是自定义走客户自定义的插件过滤
                 */
                isCustom():boolean;
                /**
                 * @return 是否弹性出勤时段不记异常
                 */
                isFlexAttendance():boolean;
                /**
                 * @return 是否OFF班不记异常
                 */
                isOff():boolean;
            }
            type ExConfigExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & ExConfigExt_S & ExConfigExt$;
            interface ExConfigExt extends ExConfigExt_T {
            }
            interface ExRulePackageExt_S {
            }
            interface ExRulePackageExt$ {
                /**
                 * 获取异常配置列表
                 *
                 * @return 异常配置列表
                 */
                getConfigList(chainDate:$.java.time.LocalDate):$.java.util.List;
                /**
                 * 获取异常转化分录列表
                 *
                 * @return 异常转化分录列表
                 */
                getEntryPackageList():$.java.util.List;
                /**
                 * 获取处理方式
                 */
                getExProcessId():long;
            }
            type ExRulePackageExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & ExRulePackageExt_S & ExRulePackageExt$;
            interface ExRulePackageExt extends ExRulePackageExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.ex.enums{
            enum ExDealTypeEnumExt {
                DEAL_ERROR,
                DEAL_TYPE_A,
                DEAL_TYPE_B
            }
            enum DurationUnitEnumExt {
                UNIT_SECOND,
                UNIT_MINUTE,
                UNIT_HOUR,
                UNIT_DAY,
                UNIT_ERROR
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.init{
            interface TieRequestBaseExt_S {
            }
            interface TieRequestBaseExt$ {
                /**
                 * 核算子任务
                 * 如果任务没有拆分，子任务和父任务id相同
                 *
                 * @return 核算子任务
                 */
                getSubTaskId?():long;
                /**
                 * 核算任务id
                 *
                 * @return 核算任务id
                 */
                getTaskId?():long;
                /**
                 * 核算版本
                 *
                 * @return 核算版本
                 */
                getVersion?():string;
            }
            type TieRequestBaseExt_T = TieRequestBaseExt_S & TieRequestBaseExt$;
            interface TieRequestBaseExt extends TieRequestBaseExt_T {
            }
            interface TieRequestExt_S {
            }
            interface TieRequestExt$ {
                /**
                 * 获取核算的所有档案的BoId
                 *
                 * @return 核算的所有档案的BoId
                 */
                getAttFileBoIdList():$.java.util.List;
                /**
                 * 获取核算的所有考勤人id
                 *
                 * @return ids
                 */
                getAttPersonIds():$.java.util.List;
                /**
                 * 核算结束日期
                 *
                 * @return endDate
                 */
                getEndDate():$.java.time.LocalDate;
                /**
                 * 核算开始提起
                 *
                 * @return startDate
                 */
                getStartDate():$.java.time.LocalDate;
            }
            type TieRequestExt_T = TieRequestBaseExt & TieRequestExt_S & TieRequestExt$;
            interface TieRequestExt extends TieRequestExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.otcal{
            interface OtRuleCalConfigExt_S {
            }
            interface OtRuleCalConfigExt$ {
                /**
                 * @return 加班时数来源
                 */
                getDataSources():long;
                /**
                 * @return 计算日期范围json
                 */
                getDateRangeCondition():string;
                /**
                 * @return 分录主键
                 */
                getEntryId():long;
                /**
                 * @return 限定条件JSON字符串
                 */
                getLimitScope():string;
                /**
                 * @return 计算规则-补偿方式分录
                 */
                getMatchOtRuleCalCompenConfig():OtRuleCalCompenConfigExt;
                /**
                 * @return 补偿方式
                 * 0 无
                 * 2 加班费
                 * 3 调休
                 * A03 员工自选
                 */
                getOtCompenMode():string;
                /**
                 * @return 补偿方式分录
                 */
                getOtRuleCalCompenConfigs():$.java.util.List;
                /**
                 * @return 加班类型ID
                 */
                getOtType():long;
                /**
                 * 是否员工自选
                 * @return 是否员工自选,true-是;null/false否
                 */
                isEmpChoice():boolean;
            }
            type OtRuleCalConfigExt_T = OtRuleCalConfigExt_S & OtRuleCalConfigExt$;
            interface OtRuleCalConfigExt extends OtRuleCalConfigExt_T {
            }
            interface OtRulePackageExt_S {
            }
            interface OtRulePackageExt$ {
                /**
                 * 加班规则分录
                 *
                 * @return 加班规则分录(unmodifyable)
                 */
                getOtRuleCalConfigList():$.java.util.List;
            }
            type OtRulePackageExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & OtRulePackageExt_S & OtRulePackageExt$;
            interface OtRulePackageExt extends OtRulePackageExt_T {
            }
            interface OtSubTimeItemExt_S {
            }
            interface OtSubTimeItemExt$ {
                /**
                 * @return 开始时间(分钟)
                 */
                getBeginTime():number;
                /**
                 * @return 结束时间(分钟)
                 */
                getEndTime():number;
            }
            type OtSubTimeItemExt_T = OtSubTimeItemExt_S & OtSubTimeItemExt$;
            interface OtSubTimeItemExt extends OtSubTimeItemExt_T {
            }
            interface OtRuleCalCompenConfigExt_S {
            }
            interface OtRuleCalCompenConfigExt$ {
                /**
                 * 获取舍入规则ID
                 *
                 * @return 舍入规则ID
                 */
                getBfRoundingRule():long;
                /**
                 * 获取分录主键
                 *
                 * @return 分录主键
                 */
                getEntryId():long;
                /**
                 * @return 起算时长考勤项目BOID
                 */
                getOriginalCalPrjSet():$.java.util.Set;
                /**
                 * @return 起算时长配置（分钟）
                 */
                getOriginalConf():$.java.math.BigDecimal;
                /**
                 * 原始时长考勤项目BOID
                 *
                 * @return 原始时长考勤项目BOID
                 */
                getOriginalPrjSet():$.java.util.Set;
                /**
                 * 获取补偿方式
                 *
                 * @return 补偿方式
                 */
                getOtCompenMode():long;
                /**
                 * 根据给定核算日期获取扣减配置
                 *
                 * @param chainDate 核算日期
                 * @return 扣减配置
                 */
                getOtSubConfig(chainDate:$.java.time.LocalDate):OtSubConfigExt;
                /**
                 * 获取结果时长考勤项目BOID
                 *
                 * @return 结果时长考勤项目
                 */
                getResultPrjSet():$.java.util.Set;
                /**
                 * 获取扣减时长考勤项目ID集合BOID
                 *
                 * @return 扣减时长考勤项目ID集合
                 */
                getSubPrjSet():$.java.util.Set;
            }
            type OtRuleCalCompenConfigExt_T = OtRuleCalCompenConfigExt_S & OtRuleCalCompenConfigExt$;
            interface OtRuleCalCompenConfigExt extends OtRuleCalCompenConfigExt_T {
            }
            interface OtSubConfigExt_S {
            }
            interface OtSubConfigExt$ {
                /**
                 * @return 指定时长（小时）
                 */
                getDesTimes():$.java.math.BigDecimal;
                /**
                 * 获取扣减固定时长（小时）
                 *
                 * @return 扣减固定时长（小时）
                 */
                getFixTimes():$.java.math.BigDecimal;
                /**
                 * @return 满减扣除
                 */
                getOtDeductSubTimeItemList():$.java.util.List;
                /**
                 * @return 时间段
                 */
                getOtSubTimeItemList():$.java.util.List;
                /**
                 * @return 扣减默认休息时间
                 */
                getSelectSub():string;
                /**
                 * 获取扣减方式
                 *
                 * @return 扣减方式 A: 不扣减 B: 扣除固定时数 C: 扣除默认休息时间 D: 满减扣除 E: 扣除固定时段
                 */
                getSubType():string;
            }
            type OtSubConfigExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & OtSubConfigExt_S & OtSubConfigExt$;
            interface OtSubConfigExt extends OtSubConfigExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.perattperiod{
            interface PerAttPeriodExt_S {
            }
            interface PerAttPeriodExt$ {
                /**
                 * 所属年月
                 */
                getAscriptionYearMonth():string;
                /**
                 * 考勤档案BoId
                 */
                getAttFileBoId():long;
                /**
                 * 考勤档案版本id
                 */
                getAttFileId():long;
                /**
                 * 期间结束时间
                 */
                getAttPeriodEndDate():Date;
                /**
                 * 期间id
                 */
                getAttPeriodId():long;
                /**
                 * 期间开始时间
                 */
                getAttPeriodStartDate():Date;
                /**
                 * 业务人员考勤期间id，组成：人员id+"_"+期间id+人员考勤期间开始时间yyyy-MM-dd
                 */
                getId():string;
                /**
                 * 工时归属规则id
                 */
                getMhsa():long;
                /**
                 * 期间流水号
                 */
                getNumber():string;
                /**
                 * 人员考勤期间开始时间
                 */
                getPerAttBeginDate():Date;
                /**
                 * 人员考勤期间结束时间
                 */
                getPerAttEndDate():Date;
                /**
                 * 人员考勤期间名称
                 */
                getPerAttPeriodName():string;
                /**
                 * 周期Id
                 */
                getPeriodId():long;
                /**
                 * 周期名称
                 */
                getPeriodName():string;
                /**
                 * 主键
                 */
                getPersonId():long;
                /**
                 * 数据主键
                 */
                getPrimaryId():long;
                /**
                 * 最早未封存
                 */
                isFirstNotStorage():boolean;
                /**
                 * 最晚已封存
                 */
                isLastStorage():boolean;
            }
            type PerAttPeriodExt_T = kd.sdk.wtc.wtes.business.tie.model.common.DataAttributeExtendable & PerAttPeriodExt_S & PerAttPeriodExt$;
            interface PerAttPeriodExt extends PerAttPeriodExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.roster{
            interface DateTypeExt_S {
            }
            interface DateTypeExt$ {
                /**
                 * id
                 */
                getId():long;
                /**
                 * 名称
                 */
                getName():string;
                /**
                 * 编码
                 */
                getNumber():string;
            }
            type DateTypeExt_T = DateTypeExt_S & DateTypeExt$;
            interface DateTypeExt extends DateTypeExt_T {
            }
            interface RosterExt_S {
            }
            interface RosterExt$ {
                /**
                 * 日期属性
                 */
                getDateAttributeId():long;
                /**
                 * 日期类型
                 */
                getDateType():DateTypeExt;
                /**
                 * 假期id，多个假期时，逗号分隔
                 */
                getHoliday():string;
                /**
                 * 主键id
                 */
                getId():long;
                /**
                 * 排班日期
                 */
                getRosterDate():$.java.time.LocalDate;
                /**
                 * 排班类型
                 */
                getRosterType():string;
                /**
                 * 班次信息
                 */
                getShiftSpec():ShiftSpecExt;
            }
            type RosterExt_T = RosterExt_S & RosterExt$;
            interface RosterExt extends RosterExt_T {
            }
            interface ShiftTableExt_S {
            }
            interface ShiftTableExt$ {
                shiftTableSingle(personid:long):ShiftTableSingleExt;
            }
            type ShiftTableExt_T = ShiftTableExt_S & ShiftTableExt$;
            interface ShiftTableExt extends ShiftTableExt_T {
            }
            interface ShiftMiddleRuleExt_S {
            }
            interface ShiftMiddleRuleExt$ {
                /**
                 * 班次天数
                 */
                getAllDay():$.java.math.BigDecimal;
                /**
                 * 全天班次时数
                 */
                getAllDayHour():$.java.math.BigDecimal;
                /**
                 * 半天班次天数
                 */
                getHalfDay():$.java.math.BigDecimal;
                /**
                 * 半天班次时数
                 */
                getHalfDayHour():$.java.math.BigDecimal;
                /**
                 * 班次中间分割点
                 */
                getMiddlePoint():number;
                /**
                 * 班次中间分割点参照日
                 */
                getMiddleRefDate():string;
            }
            type ShiftMiddleRuleExt_T = ShiftMiddleRuleExt_S & ShiftMiddleRuleExt$;
            interface ShiftMiddleRuleExt extends ShiftMiddleRuleExt_T {
            }
            interface RosterExtMap_S {
            }
            interface RosterExtMap$ {
                /**
                 * 根据日期获取对应天的排班
                 *
                 * @param localDate 日期
                 * @return 排班
                 */
                getByDate(localDate:$.java.time.LocalDate):RosterExt;
            }
            type RosterExtMap_T = RosterExtMap_S & RosterExtMap$;
            interface RosterExtMap extends RosterExtMap_T {
            }
            interface ShiftSpecExt_S {
                readonly DEFAULT_DIVIDE_SCALE:number;
                readonly SECOND_OF_ONE_HOUR:number;
            }
            interface ShiftSpecExt$ {
                /**
                 * 天转秒
                 *
                 * @param days
                 * @return
                 */
                daysToSecondDecimal(days:$.java.math.BigDecimal):$.java.math.BigDecimal;
                getAllDayHour():$.java.math.BigDecimal;
                /**
                 * 休息时长
                 */
                getBreakTime():number;
                /**
                 * 最早上班时间
                 */
                getEarliestShiftTime():$.java.time.LocalTime;
                /**
                 * 最早上班时间参照日
                 */
                getFirstRefDateType():string;
                /**
                 * 最晚下班时间参照日
                 */
                getLastRefDateType():string;
                /**
                 * 最晚下班时间
                 */
                getLastShiftTime():$.java.time.LocalTime;
                /**
                 * 加班时长
                 */
                getOtTime():number;
                /**
                 * 半天规则相关属性
                 */
                getShiftMiddleRule():ShiftMiddleRuleExt;
                /**
                 * 班次时段信息
                 */
                getShiftSession():$.java.util.List;
                /**
                 * 班次时长
                 */
                getShiftTime():number;
                /**
                 * 班次类型 A- 固定班次; B- 全天弹性班次 C- 核心时段弹性班次 X- 未知(备用值)
                 */
                getShiftType():string;
                /**
                 * 全天班次时数
                 */
                getStandardTime():number;
                /**
                 * 核心时段信息
                 */
                getWorkSession():$.java.util.List;
                /**
                 * 出勤时长
                 */
                getWorkTime():number;
                /**
                 * 是否是off班
                 */
                isOff():boolean;
                /**
                 * 是否是无计划时段
                 */
                isOffNonPlan():boolean;
                /**
                 * 秒转天
                 *
                 * @param seconds
                 * @return
                 */
                secondsToDays(seconds:$.java.math.BigDecimal):$.java.math.BigDecimal;
            }
            type ShiftSpecExt_T = ShiftSpecExt_S & ShiftSpecExt$;
            interface ShiftSpecExt extends ShiftSpecExt_T {
            }
            interface ShiftTableSingleExt_S {
            }
            interface ShiftTableSingleExt$ {
                getRoster(localDate:$.java.time.LocalDate):RosterExt;
            }
            type ShiftTableSingleExt_T = ShiftTableSingleExt_S & ShiftTableSingleExt$;
            interface ShiftTableSingleExt extends ShiftTableSingleExt_T {
            }
            interface ShiftSessionExt_S {
            }
            interface ShiftSessionExt$ {
                /**
                 * 获取绝对下班应打卡时间
                 * @return
                 */
                getAbsoluteShiftEndDate(checkDate:$.java.time.LocalDate):$.java.time.LocalDateTime;
                /**
                 * 获取绝对上班应打卡时间
                 * @return
                 */
                getAbsoluteShiftStartDate(checkDate:$.java.time.LocalDate):$.java.time.LocalDateTime;
                /**
                 * 时段时长（单位秒）
                 * 必须大于0
                 */
                getDurationInSeconds():number;
                /**
                 * 时段结束时间参考日期类型
                 */
                getEndRefDateType():string;
                /**
                 * 时段结束时间
                 */
                getEndTime():$.java.time.LocalTime;
                /**
                 * id
                 */
                getId():long;
                /**
                 * 时段类型
                 */
                getOutWorkType():string;
                /**
                 * 时段开始时间参考日期类型
                 */
                getStartRefDateType():string;
                /**
                 * 时段开始时间
                 */
                getStartTime():$.java.time.LocalTime;
                /**
                 * 时段开始是否需要打卡
                 */
                isRequiredPunchIn():boolean;
                /**
                 * 时段结束是否需要打卡
                 */
                isRequiredPunchOut():boolean;
            }
            type ShiftSessionExt_T = ShiftSessionExt_S & ShiftSessionExt$;
            interface ShiftSessionExt extends ShiftSessionExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.timebucket{
            interface AttBillTimeBucketExt_S {
            }
            interface AttBillTimeBucketExt$ {
                /**
                 * 单据所属考勤人id
                 */
                getAttPersonId():long;
                /**
                 * 单据id
                 */
                getBillId():long;
                /**
                 * 无时段单据类型
                 * 见枚举 {@link kd.wtc.wtes.common.enums.BillNonPlanEnum}
                 */
                getBillNonPlan():string;
                /**
                 * 单据小类，例如休假又分产假、婚假等，加班类型id
                 * 一般这些小类被定义为基础资料或者枚举，字段类型也会不同，这里统一转为长整形，使用时需要区分场景
                 */
                getBillType():long;
                /**
                 * 单据分类（大类），例如加班单、休假单、出差单等
                 * 常量见{@link kd.wtc.wtes.common.constants.AttBillCategoryConst}
                 */
                getBillTypeBig():string;
                /**
                 * 补偿方式
                 */
                getCompenType():number;
                /**
                 * 补偿方式
                 */
                getCompenTypeId():long;
                /**
                 * 无时段单据类型：自定义时长时的秒值
                 */
                getDuration():long;
                /**
                 * 时段结束时间
                 */
                getEndTime():$.java.time.LocalDateTime;
                getEntryRowDy():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 时段id,对于休假申请单据，如果是哺乳假，则存子单据体的ID，否则存分录ID
                 */
                getId():long;
                /**
                 * 单据编码
                 */
                getNumber():string;
                /**
                 * 排班日期
                 * 时段发生的排班日期
                 */
                getRosterDate():$.java.time.LocalDate;
                /**
                 * 时段开始时间
                 */
                getStartTime():$.java.time.LocalDateTime;
                /**
                 * 时段分类
                 * 见枚举{@link kd.wtc.wtes.common.enums.BillTimeBucketType}
                 */
                getType():string;
                newInstanceResetTime(attBillTimeBucketExt:AttBillTimeBucketExt,rosterDate:$.java.time.LocalDate,startTime:$.java.time.LocalDateTime,endTime:$.java.time.LocalDateTime):this;
                /**
                 * 根据新的开始和结束时间，从当前timeBucket中拆分出新的TimeBucket（除开始时间和结束时间外，都是复制自当前对象，注意当前不支持无时段的timebucket拆分）
                 *
                 * @param newStart 新的开始时间
                 * @param newEnd   新的结束时间
                 * @return AttBillTimeBucketExt 新的timeBucket
                 */
                split(newStart:$.java.time.LocalDateTime,newEnd:$.java.time.LocalDateTime):this;
            }
            type AttBillTimeBucketExt_T = AttBillTimeBucketExt_S & AttBillTimeBucketExt$;
            interface AttBillTimeBucketExt extends AttBillTimeBucketExt_T {
            }
            interface TimeBucketExt_S {
            }
            interface TimeBucketExt$ {
                /**
                 * 时间对归属日的日期属性 参考枚举 DateAttribute
                 */
                getDateAttribute():long;
                /**
                 * 结束时间
                 */
                getEndTime():$.java.time.LocalDateTime;
                /**
                 * 开始时间
                 */
                getStartTime():$.java.time.LocalDateTime;
                /**
                 * 开始时间和结束时间的秒
                 */
                getTbSecond():$.java.math.BigDecimal;
            }
            type TimeBucketExt_T = TimeBucketExt_S & TimeBucketExt$;
            interface TimeBucketExt extends TimeBucketExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.tvl{
            interface TravelRuleExt_S {
            }
            interface TravelRuleExt$ {
                /**
                 * 获取出差规则分录
                 *
                 * @return 出差规则分录
                 */
                getEntryPackageList():$.java.util.List;
            }
            type TravelRuleExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & TravelRuleExt_S & TravelRuleExt$;
            interface TravelRuleExt extends TravelRuleExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.model.va{
            interface VaCalculateRuleExt_S {
            }
            interface VaCalculateRuleExt$ {
                /**
                 * 获取计算日期范围JSON字符串
                 *
                 * @return 计算日期范围JSON字符串
                 */
                getCondition():string;
                /**
                 * 获取定额扣减规则BOID
                 *
                 * @return 定额扣减规则BOID
                 */
                getDeductionRuleId():long;
                /**
                 * 获取 限定条件的JSON字符串
                 *
                 * @return 限定条件的JSON字符串
                 */
                getLimitJson():string;
                /**
                 * 获取原始时长项目BOID
                 *
                 * @return 原始时长项目BOID
                 */
                getOriginId():long;
                /**
                 * 获取属性 结果时长考勤项目BOID
                 *
                 * @return 结果时长考勤项目BOID
                 */
                getResultId():long;
                /**
                 * 获取属性 舍入时长项目BOID
                 *
                 * @return 舍入时长项目BOID
                 */
                getRoundAttId():long;
                /**
                 * 获取舍入规则BOID
                 *
                 * @return 舍入规则BOID
                 */
                getRoundRuleId():long;
                /**
                 * 日历天转换时长考勤项目BOID
                 *
                 * @return 班次转换时长考勤项目BOID
                 */
                getTimeByDayItemId():long;
                /**
                 * 班次转换时长考勤项目BOID
                 *
                 * @return 班次转换时长考勤项目BOID
                 */
                getTimeByShiftItemId():long;
                /**
                 * 根据考勤核算日期获取对应日的休假基础配置
                 *
                 * @param chainDate 核算日
                 * @return 休假基础配置
                 */
                getVaBaseSetPackage(chainDate:$.java.time.LocalDate):VaBaseSetPackageExt;
                /**
                 * 获取休假类型ID
                 *
                 * @return 休假类型ID
                 */
                getVaTypeId():long;
                /**
                 * 是否额度假
                 *
                 * @return true-是；false-否
                 */
                isQuota():boolean;
            }
            type VaCalculateRuleExt_T = VaCalculateRuleExt_S & VaCalculateRuleExt$;
            interface VaCalculateRuleExt extends VaCalculateRuleExt_T {
            }
            interface VaBaseSetPackageExt_S {
                readonly HALFDAYTYPE_A:string;
                readonly HALFDAYTYPE_B:string;
                readonly HALFDAYTYPE_C:string;
                readonly TIMECALCTYPE_A:string;
                readonly TIMECALCTYPE_B:string;
            }
            interface VaBaseSetPackageExt$ {
                /**
                 * 获取半天分割方式
                 *
                 * @return A-半天分割方式_半天分割点;B-半天分割方式_班次标准时长/2；C-半天分割方式_全天班次时数/2
                 */
                getHalfDayType():string;
                /**
                 * 获取休假时长计算方式
                 *
                 * @return 休假时长计算方式 A-休假时长计算方式_按班次 B-休假时长计算方式_按日历天
                 */
                getTimeCalcType():string;
                /**
                 * 班内加班是否计入申请时长
                 *
                 * @return true-计入；false-不计入
                 */
                isContainOverTime():boolean;
            }
            type VaBaseSetPackageExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & VaBaseSetPackageExt_S & VaBaseSetPackageExt$;
            interface VaBaseSetPackageExt extends VaBaseSetPackageExt_T {
            }
            interface VaRulePackageExt_S {
            }
            interface VaRulePackageExt$ {
                /**
                 * 获取休假规则分录
                 *
                 * @return 休假规则分录
                 */
                getEntryPackageList():$.java.util.List;
            }
            type VaRulePackageExt_T = kd.sdk.wtc.wtbs.common.timeseq.TimeSeqVersionExt & VaRulePackageExt_S & VaRulePackageExt$;
            interface VaRulePackageExt extends VaRulePackageExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.persistent.clean{
            interface AfterCleanHisDataEvent_S {
            }
            interface AfterCleanHisDataEvent_C extends AfterCleanHisDataEvent_S {
                new(attSubjects:$.java.util.List,version:string):AfterCleanHisDataEvent;
            }
            interface AfterCleanHisDataEvent$ {
                /**
                 * 获取考勤核算主体
                 *
                 * @return 考勤核算主体
                 */
                getAttSubjects():$.java.util.List;
                /**
                 * 获取任务号
                 *
                 * @return 任务号
                 */
                getVersion():string;
            }
            type AfterCleanHisDataEvent_T = AfterCleanHisDataEvent_S & AfterCleanHisDataEvent$;
            interface AfterCleanHisDataEvent extends AfterCleanHisDataEvent_T {
            }
            interface TieCleanExDataExtPlugin_S {
            }
            interface TieCleanExDataExtPlugin$ {
                /**
                 * 清理异常数据后置事件方法，支持清理异常考勤核算结果数据后处理扩展逻辑，比如删除客开的异常考勤核算结果数据。
                 * <p>当标品清理异常数据执行后，调用此扩展，删除个性化的异常考勤核算结果数据</p>
                 * <pre><code>
                 * public void afterCleanExData(AfterCleanExDataEvent afterCleanExDataEvent) {
                 *         try {
                 *             // 获取核算信息集合
                 *             List<AttStateExt> attStateExtList = afterCleanExDataEvent.getAttStateExtList();
                 *             // 页面发起核算请求的考勤档案boId，并非实际核算的
                 *             List<Long> requestAttFileBoIdList = afterCleanExDataEvent.getTieRequestExt().getAttFileBoIdList();
                 *             // 记录有异常的考勤档案boId
                 *             List<Long> attFileBoIdList = new ArrayList<>();
                 *             for (AttStateExt attStateInfoBO : attStateExtList) {
                 *                 // 判断是否有异常
                 *                 if (attStateInfoBO.isExState() != null && !attStateInfoBO.isExState()) {
                 *                     continue;
                 *                 }
                 *                 // 已锁定至
                 *                 Date lockToDate = attStateInfoBO.getLockTo();
                 *                 // 异常开始日期
                 *                 Date exStartDate = attStateInfoBO.getExcStartDate();
                 *                 // 异常结束日期
                 *                 Date exEndDate = attStateInfoBO.getExcEndDate();
                 *                 // 档案BoId
                 *                 Long fileBoId = attStateInfoBO.getFileBoId();
                 *                 if (lockToDate != null && lockToDate.getTime() >= exStartDate.getTime()) {
                 *                     // 不清除
                 *                 } else {
                 *                     attFileBoIdList.add(fileBoId);
                 *                     // 如按考勤档案boId和异常开始日期进行清理
                 *                     // doClearByAttFileBoId(fileBoId, exStartDate);
                 *                 }
                 *             }
                 *         } catch (Exception ex) {
                 *             logger.warn("TieCleanExDataExtPluginDemo.afterCleanExData error", ex);
                 *         }
                 *     }
                 * </code></pre>
                 *
                 * @param afterCleanExDataEvent 清理异常数据后置事件
                 */
                afterCleanExData(afterCleanExDataEvent:AfterCleanExDataEvent):void;
            }
            type TieCleanExDataExtPlugin_T = TieCleanExDataExtPlugin_S & TieCleanExDataExtPlugin$;
            interface TieCleanExDataExtPlugin extends TieCleanExDataExtPlugin_T {
            }
            interface TieCleanHisDataExtPlugin_S {
            }
            interface TieCleanHisDataExtPlugin$ {
                /**
                 * 清理历史数据后置事件方法，支持在清理历史考勤核算结果数据后处理扩展逻辑，比如删除客开的考勤核算结果数据。
                 * <p>当标品清理历史数据执行后，调用此扩展，删除个性化的考勤核算结果数据</p>
                 * <pre><code>
                 *    public void afterCleanHisData(AfterCleanHisDataEvent afterCleanHisDataEvent) {
                 *         try {
                 *             // 考勤核算主体
                 *             List<TieAttSubjectExt> attSubjects = afterCleanHisDataEvent.getAttSubjects();
                 *             // 构造清理请求参数
                 *             List<QFilter> qFilterList = new ArrayList<>();
                 *             QFilter qFilterKey;
                 *             Map<String, Tuple<QFilter, List<Long>>> qFilterListMap = new HashMap<>();
                 *             for (TieAttSubjectExt attSubject : attSubjects) {
                 *                 // attSubject.getStartDate()为开始时间；attSubject.getEndDate()为结束时间；
                 *                 qFilterKey = new QFilter("perperiodbegindate", QCP.less_equals, attSubject.getEndDate())
                 *                         .and("perperiodenddate", QCP.large_equals, attSubject.getStartDate());
                 *                 Tuple<QFilter, List<Long>> personIdList = qFilterListMap.get(qFilterKey.toString());
                 *                 if (personIdList == null) {
                 *                     personIdList = new Tuple<>(qFilterKey, new ArrayList<>());
                 *                 }
                 *
                 *                 for (TieAttFileBoExt attFileBo : attSubject.getAttFileBos()) {
                 *                     // 考勤档案下的考勤答案boId
                 *                     personIdList.getValue().add(attFileBo.getAttFileBoId());
                 *                 }
                 *                 qFilterListMap.put(qFilterKey.toString(), personIdList);
                 *             }
                 *             QFilter result;
                 *             for (Map.Entry<String, Tuple<QFilter, List<Long>>> entry : qFilterListMap.entrySet()) {
                 *                 if (entry.getValue().getValue().size() == 1) {
                 *                     result = new QFilter("attfileid", QCP.equals, entry.getValue().getValue().get(0)).and(entry.getValue().getKey());
                 *                 } else {
                 *                     result = new QFilter("attfileid", QCP.in, entry.getValue().getValue()).and(entry.getValue().getKey());
                 *                 }
                 *                 qFilterList.add(result);
                 *             }
                 *             QFilter qFilter = null;
                 *             // 组装请求参数
                 *             for (QFilter filter : qFilterList) {
                 *                 if (null == qFilter) {
                 *                     qFilter = filter;
                 *                 } else {
                 *                     qFilter.or(filter);
                 *                 }
                 *             }
                 *             // 根据构造的参数清理自己扩展的元数据数据
                 *             // serviceHelper.deleteByFilter(new QFilter[]{qFilter});
                 *         } catch (Exception ex) {
                 *             logger.warn("TieCleanHisDataExtPluginDemo.afterCleanHisData error", ex);
                 *         }
                 *     }
                 * </code></pre>
                 *
                 * @param afterCleanHisDataEvent 清理历史数据后置事件
                 */
                afterCleanHisData(afterCleanHisDataEvent:AfterCleanHisDataEvent):void;
            }
            type TieCleanHisDataExtPlugin_T = TieCleanHisDataExtPlugin_S & TieCleanHisDataExtPlugin$;
            interface TieCleanHisDataExtPlugin extends TieCleanHisDataExtPlugin_T {
            }
            interface AfterCleanExDataEvent_S {
            }
            interface AfterCleanExDataEvent_C extends AfterCleanExDataEvent_S {
                new(attStateExtList:$.java.util.List,tieRequestExt:kd.sdk.wtc.wtes.business.tie.model.init.TieRequestExt):AfterCleanExDataEvent;
            }
            interface AfterCleanExDataEvent$ {
                /**
                 * 获取核算信息集合
                 *
                 * @return 核算信息集合
                 */
                getAttStateExtList():$.java.util.List;
                /**
                 * 获取考勤核算请求参数
                 *
                 * @return 考勤核算请求参数
                 */
                getTieRequestExt():kd.sdk.wtc.wtes.business.tie.model.init.TieRequestExt;
            }
            type AfterCleanExDataEvent_T = AfterCleanExDataEvent_S & AfterCleanExDataEvent$;
            interface AfterCleanExDataEvent extends AfterCleanExDataEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.persistent.daily{
            interface TieSaveDailyDataExtPlugin_S {
            }
            interface TieSaveDailyDataExtPlugin$ {
                /**
                 * 写入考勤核算明细结果数据前置事件方法，支持在考勤明细结果数据中写入扩展字段。
                 * <p>当标品考勤明细结果数据入库前，调用此扩展，在考勤明细结果数据中写入扩展字段</p>
                 * <pre><code>
                 *         public void beforeSaveDailyDataResult(BeforeSaveDailyDataResultEvent beforeSaveDailyDataResultEvent) {
                 *         // 考勤核算上下文 可以获取排班，考勤项目定义，扩展参数，人员信息
                 *         TieContentPersistentExt tieContentPersistentExt = beforeSaveDailyDataResultEvent.getTieContentPersistentExt();
                 *         // 日明细项目主表和日明细项目明细表对应关系集合
                 *         List<TieDataResultRelExt> tieDataResultRelExtList = beforeSaveDailyDataResultEvent.getTieDataResultRelExtList();
                 *         for (int i = 0; i < tieDataResultRelExtList.size(); i++) {
                 *             // 日明细项目主表和日明细项目明细表对应关系
                 *             TieDataResultRelExt tieDataResultRelExt = tieDataResultRelExtList.get(i);
                 *             // tieDataResultRelExt.getMainObject()为日明细项目主表元数据为(wtdtd_attrecordbase)；paramsext1，paramsext2为扩展字段
                 *             // 日明细主表不能覆盖的字段为"createtime", "calculatedate", "reckoner", "personid", "orgid", "owndate", "datetype", "dateattr", "shiftvid", "shiftid", "departmentvid", "companyvid", "positionvid", "jobvid", "mode", "versionid", "perattperiodid", "perperiodenddate", "perperiodbegindate", "attperattperiodid", "managescopevid", "affiliateadminorgvid", "attperattperiodpk", "attfileid", "attfilevid"
                 *             // 通过setExtProperties设置扩展属性的值，返回设置失败的键值对
                 *             Map<String, String> failMap = tieDataResultRelExt.getMainObject().setExtProperties("paramsext1", i);
                 *             tieDataResultRelExt.getMainObject().setExtProperties("paramsext2", tieDataResultRelExt.getDetailObjects().size());
                 *             // tieDataResultRelExt.getDetailObjects()日明细项目明细表元数据为(wtdtd_attrecorddetail)；paramsext1，paramsext2为扩展字段
                 *             // 日明细项目明细表不能覆盖的字段为"owndate", "attitemtype", "attitemvid", "attitemid", "value", "valuesecond", "valuestring", "valuelong", "sourceattitemids", "attmain", "managingscope", "empgroup", "dependency", "dependencytype", "agreedworkplace", "workplace"
                 *             List<TieDataResultExt> detailObjects = tieDataResultRelExt.getDetailObjects();
                 *             for (int j = 0; j < detailObjects.size(); j++) {
                 *                 TieDataResultExt tieDataResultExt = detailObjects.get(j);
                 *                 tieDataResultExt.setExtProperties("paramsext1", i);
                 *                 tieDataResultExt.setExtProperties("paramsext2", j);
                 *             }
                 *         }
                 *     }
                 * </code></pre>
                 *
                 * @param beforeSaveDailyDataResultEvent 写入考勤核算明细结果数据前置事件
                 */
                beforeSaveDailyDataResult(beforeSaveDailyDataResultEvent:BeforeSaveDailyDataResultEvent):void;
            }
            type TieSaveDailyDataExtPlugin_T = TieSaveDailyDataExtPlugin_S & TieSaveDailyDataExtPlugin$;
            interface TieSaveDailyDataExtPlugin extends TieSaveDailyDataExtPlugin_T {
            }
            interface BeforeSaveDailyDataResultEvent_S {
            }
            interface BeforeSaveDailyDataResultEvent_C extends BeforeSaveDailyDataResultEvent_S {
                new(tieDataResultRelExtList:$.java.util.List,tieContentPersistentExt:kd.sdk.wtc.wtes.business.tie.core.chain.TieContentPersistentExt):BeforeSaveDailyDataResultEvent;
            }
            interface BeforeSaveDailyDataResultEvent$ {
                /**
                 * 获取考勤核算构造上下文
                 *
                 * @return 考勤核算构造上下文
                 */
                getTieContentPersistentExt():kd.sdk.wtc.wtes.business.tie.core.chain.TieContentPersistentExt;
                /**
                 * 获取日明细项目主表和日明细项目明细表对应关系集合
                 * 日明细项目主表元数据（wtdtd_attrecordbase）
                 * 日明细项目明细表元数据（wtdtd_attrecorddetail）
                 *
                 * @return 日明细项目主表和日明细项目明细表对应关系集合
                 */
                getTieDataResultRelExtList():$.java.util.List;
            }
            type BeforeSaveDailyDataResultEvent_T = BeforeSaveDailyDataResultEvent_S & BeforeSaveDailyDataResultEvent$;
            interface BeforeSaveDailyDataResultEvent extends BeforeSaveDailyDataResultEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.persistent.period{
            interface TieSavePerPeriodDataExtPlugin_S {
            }
            interface TieSavePerPeriodDataExtPlugin$ {
                /**
                 * 写入考勤核算汇总结果数据前置事件方法，支持在考勤汇总记录结果数据中写入扩展字段。
                 * <p>当标品期间汇总结果数据入库前，调用此扩展，在考勤汇总记录结果数据中写入扩展字段</p>
                 * <pre><code>
                 *     public void beforeSavePerPeriodDataResult(BeforeSavePerPeriodDataResultEvent beforeSavePerPeriodDataResultEvent) {
                 *         // 考勤核算期间汇总上下文，含页面请求参数，实际考勤核算主体，所有要期间汇总的人员考勤期间集合等
                 *         TieAttPeriodContextExt tieAttPeriodContextExt = beforeSavePerPeriodDataResultEvent.getTieAttPeriodContextExt();
                 *         // 期间汇总主表和期间汇总明细表对应关系集合
                 *         List<TieDataResultRelExt> tieDataResultRelExtList = beforeSavePerPeriodDataResultEvent.getTieDataResultRelExtList();
                 *         // 页面请求参数
                 *         TieRequestExt tieRequestExt = beforeSavePerPeriodDataResultEvent.getTieAttPeriodContextExt().getTieRequestExt();
                 *         for (int i = 0; i < tieDataResultRelExtList.size(); i++) {
                 *             // 期间汇总主表和期间汇总明细表对应关系
                 *             TieDataResultRelExt tieDataResultRelExt = tieDataResultRelExtList.get(i);
                 *             // tieDataResultRelExt.getMainObject()为期间汇总主表元数据为(wtctd_atttotalbase)；paramsext1，paramsext2为扩展字段
                 *             // 期间汇总主表不能覆盖的字段为"personid", "orgid", "companyvid", "positionvid", "departmentvid", "jobvid", "modifierfieldname", "createtime", "calculatedate", "versionid", "managescopevid", "affiliateadminorgvid", "reckoner", "attfileid", "attfilevid", "perattperiodid", "attperattperiodid", "perperiodbegindate", "perperiodenddate", "attperattperiodpk"
                 *             // 通过setExtProperties设置扩展属性的值，返回设置失败的键值对
                 *             Map<String, String> failMap = tieDataResultRelExt.getMainObject().setExtProperties("paramsext1", i);
                 *             tieDataResultRelExt.getMainObject().setExtProperties("paramsext2", tieRequestExt.getVersion());
                 *             // tieDataResultRelExt.getDetailObjects()期间汇总明细表元数据为(wtctd_atttotaldetail)；paramsext1，paramsext2为扩展字段
                 *             // 期间汇总明细表不能覆盖的字段为"perattperiodid", "attmain", "attitemtype", "attitemvid", "attitemid", "valuelong", "managingscope", "empgroup", "dependency", "dependencytype", "agreedworkplace", "workplace"
                 *             List<TieDataResultExt> detailObjects = tieDataResultRelExt.getDetailObjects();
                 *             for (int j = 0; j < detailObjects.size(); j++) {
                 *                 TieDataResultExt tieDataResultExt = detailObjects.get(j);
                 *                 tieDataResultExt.setExtProperties("paramsext1", j);
                 *                 tieDataResultExt.setExtProperties("paramsext2", tieRequestExt.getVersion());
                 *             }
                 *         }
                 * </code></pre>
                 *
                 * @param beforeSavePerPeriodDataResultEvent 写入考勤核算汇总结果数据前置事件
                 */
                beforeSavePerPeriodDataResult(beforeSavePerPeriodDataResultEvent:BeforeSavePerPeriodDataResultEvent):void;
            }
            type TieSavePerPeriodDataExtPlugin_T = TieSavePerPeriodDataExtPlugin_S & TieSavePerPeriodDataExtPlugin$;
            interface TieSavePerPeriodDataExtPlugin extends TieSavePerPeriodDataExtPlugin_T {
            }
            interface BeforeSavePerPeriodDataResultEvent_S {
            }
            interface BeforeSavePerPeriodDataResultEvent_C extends BeforeSavePerPeriodDataResultEvent_S {
                new(tieDataResultRelExtList:$.java.util.List,tieAttPeriodContextExt:kd.sdk.wtc.wtes.business.tie.core.chain.period.TieAttPeriodContextExt):BeforeSavePerPeriodDataResultEvent;
            }
            interface BeforeSavePerPeriodDataResultEvent$ {
                /**
                 * 获取考勤核算期间汇总上下文
                 *
                 * @return 考勤核算期间汇总上下文
                 */
                getTieAttPeriodContextExt():kd.sdk.wtc.wtes.business.tie.core.chain.period.TieAttPeriodContextExt;
                /**
                 * 获取期间汇总主表和期间汇总明细表对应关系集合
                 * 期间汇总主表元数据(wtctd_atttotalbase)
                 * 期间汇总明细表元数据(wtctd_atttotaldetail)
                 *
                 * @return 期间汇总主表和期间汇总明细表对应关系集合
                 */
                getTieDataResultRelExtList():$.java.util.List;
            }
            type BeforeSavePerPeriodDataResultEvent_T = BeforeSavePerPeriodDataResultEvent_S & BeforeSavePerPeriodDataResultEvent$;
            interface BeforeSavePerPeriodDataResultEvent extends BeforeSavePerPeriodDataResultEvent_T {
            }
            interface AfterSaveAllPerPeriodDataResultEvent_S {
            }
            interface AfterSaveAllPerPeriodDataResultEvent_C extends AfterSaveAllPerPeriodDataResultEvent_S {
                new(tieDataResultRelExtList:$.java.util.List,tieAttPeriodContextExt:kd.sdk.wtc.wtes.business.tie.core.chain.period.TieAttPeriodContextExt):AfterSaveAllPerPeriodDataResultEvent;
            }
            interface AfterSaveAllPerPeriodDataResultEvent$ {
                /**
                 * 获取考勤核算期间汇总上下文
                 *
                 * @return 考勤核算期间汇总上下文
                 */
                getTieAttPeriodContextExt():kd.sdk.wtc.wtes.business.tie.core.chain.period.TieAttPeriodContextExt;
                /**
                 * 获取期间汇总主表和期间汇总明细表对应关系集合
                 * 期间汇总主表元数据(wtctd_atttotalbase)
                 * 期间汇总明细表元数据(wtctd_atttotaldetail)
                 *
                 * @return 期间汇总主表和期间汇总明细表对应关系集合
                 */
                getTieDataResultRelExtList():$.java.util.List;
            }
            type AfterSaveAllPerPeriodDataResultEvent_T = AfterSaveAllPerPeriodDataResultEvent_S & AfterSaveAllPerPeriodDataResultEvent$;
            interface AfterSaveAllPerPeriodDataResultEvent extends AfterSaveAllPerPeriodDataResultEvent_T {
            }
            interface TieSaveAllAttPeriodDataExtPlugin_S {
            }
            interface TieSaveAllAttPeriodDataExtPlugin$ {
                /**
                 * 写入所有考勤核算汇总结果数据后置事件方法，支持在汇总核算结果数据写入后处理扩展逻辑，比如写入其他期间汇总数据。
                 * <p>当标品期间汇总结果数据入库后，调用此扩展，处理个性化的扩展逻辑，比如写入其他期间汇总数据</p>
                 * <pre><code>
                 *     public void afterSaveAllPerPeriodDataResult(AfterSaveAllPerPeriodDataResultEvent afterSaveAllPerPeriodDataResultEvent) {
                 *         try {
                 *             // 考勤核算期间汇总上下文，含页面请求参数，实际考勤核算主体，所有要期间汇总的人员考勤期间集合等
                 *             TieAttPeriodContextExt tieAttPeriodContextExt = afterSaveAllPerPeriodDataResultEvent.getTieAttPeriodContextExt();
                 *             // 考勤核算的页面请求参数
                 *             TieRequestExt tieRequestExt = tieAttPeriodContextExt.getTieRequestExt();
                 *             // 实际的考勤核算主体
                 *             List<TieAttSubjectExt> attSubjects = tieAttPeriodContextExt.getAttSubjects();
                 *             DynamicObjectCollection dynamicObjects = new DynamicObjectCollection();
                 *             attSubjects.forEach(item -> {
                 *                 // 构建元数据（kdtest_wtctd_atttotal）动态对象
                 *                 DynamicObject ext = BusinessDataServiceHelper.newDynamicObject("kdtest_wtctd_atttotal");
                 *                 ext.set("taskid", tieRequestExt.getTaskId());
                 *                 ext.set("version", tieRequestExt.getVersion());
                 *                 ext.set("totalpersoncount", attSubjects.size());
                 *                 ext.set("personid", item.getAttPersonId());
                 *                 dynamicObjects.add(ext);
                 *             });
                 *             HRBaseServiceHelper serviceHelper = new HRBaseServiceHelper("kdtest_wtctd_atttotal");
                 *             // 数据入库
                 *             serviceHelper.save(dynamicObjects);
                 *         } catch (Exception ex) {
                 *             logger.warn("TieSaveAllAttPeriodDataExtPluginDemo.afterSaveAllPerPeriodDataResult error", ex);
                 *         }
                 *     }
                 * </code></pre>
                 *
                 * @param afterSaveAllPerPeriodDataResultEvent 写入所有考勤核算汇总结果数据后置事件
                 */
                afterSaveAllPerPeriodDataResult(afterSaveAllPerPeriodDataResultEvent:AfterSaveAllPerPeriodDataResultEvent):void;
            }
            type TieSaveAllAttPeriodDataExtPlugin_T = TieSaveAllAttPeriodDataExtPlugin_S & TieSaveAllAttPeriodDataExtPlugin$;
            interface TieSaveAllAttPeriodDataExtPlugin extends TieSaveAllAttPeriodDataExtPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.persistent.utils{
            interface TieDataResultExt_S {
            }
            interface TieDataResultExt_C extends TieDataResultExt_S {
                new(blackList:$.java.util.Set,dynamicObject:$.kd.bos.dataentity.entity.DynamicObject):TieDataResultExt;
            }
            interface TieDataResultExt$ {
                /**
                 * 根据属性名称获取属性值
                 *
                 * @param propertyName 属性名称
                 * @return 属性值
                 */
                getProperty(propertyName:string):any;
                /**
                 * 获取所有的属性和对应值
                 *
                 * @return 键值对
                 */
                getPropertyMap():$.java.util.Map;
                /**
                 * 根据属性键值对设置扩展字段的属性值
                 *
                 * @param propertyMap 属性名称和属性值键值对
                 * @return 返回设置失败的属性和原因
                 */
                setExtProperties(propertyMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 根据数值名称和属性值设置扩展字段的属性值
                 *
                 * @param propertyName 属性名称
                 * @param value        属性值
                 * @return 返回设置失败的属性和原因
                 */
                setExtProperties(propertyName:string,value:any):$.java.util.Map;
            }
            type TieDataResultExt_T = TieDataResultExt_S & TieDataResultExt$;
            interface TieDataResultExt extends TieDataResultExt_T {
            }
            interface TieDataResultRelExt_S {
            }
            interface TieDataResultRelExt_C extends TieDataResultRelExt_S {
                new(mainObject:TieDataResultExt,detailObjects:$.java.util.List):TieDataResultRelExt;
            }
            interface TieDataResultRelExt$ {
                /**
                 * 获取明细表
                 *
                 * @return 明细表
                 */
                getDetailObjects():$.java.util.List;
                /**
                 * 获取主表
                 *
                 * @return 主表
                 */
                getMainObject():TieDataResultExt;
            }
            type TieDataResultRelExt_T = TieDataResultRelExt_S & TieDataResultRelExt$;
            interface TieDataResultRelExt extends TieDataResultRelExt_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.tie.task{
            interface TieTaskEndExtPlugin_S {
            }
            interface TieTaskEndExtPlugin$ {
                /**
                 * 考勤核算分片任务结束后处理事件，支持在考勤核算分片任务结束后处理个性化的扩展逻辑。
                 * <p>当标品考勤核算分片任务结束后，调用此扩展，处理个性化的扩展逻辑</p>
                 * <pre><code>
                 *         Long taskId = afterTieTaskEndEvent.getTaskId();
                 *         Long subTaskId = afterTieTaskEndEvent.getSubTaskId();
                 *         String version = afterTieTaskEndEvent.getVersion();
                 *         Set<Long> attFileBoIds = afterTieTaskEndEvent.getAttFileBoIds();
                 *         logger.info("考勤核算分片任务结束扩展接口taskId={},subTaskId={},version={},attFileBoIds={}", taskId, subTaskId, version, attFileBoIds);
                 * </code></pre>
                 *
                 * @param afterTieTaskEndEvent 考勤核算分片任务结束后处理事件
                 */
                afterTieTaskEnd(afterTieTaskEndEvent:AfterTieTaskEndEvent):void;
            }
            type TieTaskEndExtPlugin_T = TieTaskEndExtPlugin_S & TieTaskEndExtPlugin$;
            interface TieTaskEndExtPlugin extends TieTaskEndExtPlugin_T {
            }
            interface AfterTieTaskEndEvent_S {
            }
            interface AfterTieTaskEndEvent_C extends AfterTieTaskEndEvent_S {
                new(taskId:long,subTaskId:long,version:string,attFileBoIds:$.java.util.Set):AfterTieTaskEndEvent;
            }
            interface AfterTieTaskEndEvent$ {
                /**
                 * 获取考勤核算分片任务中参与核算的考勤档案boId集合
                 * 不参与核算的不在里面
                 *
                 * @return 考勤核算分片任务中参与核算的考勤档案boId集合
                 */
                getAttFileBoIds():$.java.util.Set;
                /**
                 * 获取核算分片任务id
                 *
                 * @return 分片任务id
                 */
                getSubTaskId():long;
                /**
                 * 获取核算主任务id
                 *
                 * @return 主任务id
                 */
                getTaskId():long;
                /**
                 * 获取核算任务号
                 *
                 * @return 核算任务号
                 */
                getVersion():string;
            }
            type AfterTieTaskEndEvent_T = AfterTieTaskEndEvent_S & AfterTieTaskEndEvent$;
            interface AfterTieTaskEndEvent extends AfterTieTaskEndEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtes.business.timecut{
            interface TimeCutMatchExtPlugin_S {
            }
            interface TimeCutMatchExtPlugin$ {
                /**
                 * 核算触发解析 扩展的时段切分条件匹配的条件字段 对应的结果的事件
                 * <p>
                 * 时段切分条件匹配的条件字段增加了之后，这些扩展字段的解析结果可以通过实现该接口来处理
                 *
                 * @param onTimeCutMatchEvent 核算触发解析扩展的时段切分条件事件对象
                 */
                onTimeCutMatch(onTimeCutMatchEvent:OnTimeCutMatchEvent):void;
            }
            type TimeCutMatchExtPlugin_T = TimeCutMatchExtPlugin_S & TimeCutMatchExtPlugin$;
            interface TimeCutMatchExtPlugin extends TimeCutMatchExtPlugin_T {
            }
            interface OnTimeCutMatchEvent_S {
            }
            interface OnTimeCutMatchEvent_C extends OnTimeCutMatchEvent_S {
                new(tieContextExt:kd.sdk.wtc.wtes.business.tie.core.chain.TieContextExt,refDateType:kd.sdk.wtc.wtbs.common.enums.RefDateType,conditionDtoExt:kd.sdk.wtc.wtbs.common.access.ConditionDtoExt,wtcDateRangeSource:kd.sdk.wtc.wtbs.common.enums.WTCDateRangeSource):OnTimeCutMatchEvent;
            }
            interface OnTimeCutMatchEvent$ {
                /**
                 * 获取条件表达式
                 * @return 条件表达式
                 */
                getConditionDtoExt():kd.sdk.wtc.wtbs.common.access.ConditionDtoExt;
                /**
                 * 获取参考日期类型
                 * @return 参考日期类型
                 */
                getRefDateType():kd.sdk.wtc.wtbs.common.enums.RefDateType;
                /**
                 * 获取匹配结果
                 * @return 匹配结果
                 */
                getResult():boolean;
                /**
                 * 获取核算的上下文对象
                 * @return 核算的上下文对象
                 */
                getTieContextExt():kd.sdk.wtc.wtes.business.tie.core.chain.TieContextExt;
                /**
                 * 获取日期范围扩展来源枚举
                 * @return 日期范围扩展来源枚举
                 */
                getWtcDateRangeSource():kd.sdk.wtc.wtbs.common.enums.WTCDateRangeSource;
                /**
                 * 设置匹配结果
                 * @param result 布尔值
                 */
                setResult(result:boolean):void;
            }
            type OnTimeCutMatchEvent_T = OnTimeCutMatchEvent_S & OnTimeCutMatchEvent$;
            interface OnTimeCutMatchEvent extends OnTimeCutMatchEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtis{
            interface SdkWtcWtisModule_S {
            }
            type SdkWtcWtisModule_ST = $.kd.sdk.module.Module & SdkWtcWtisModule_S;
            interface SdkWtcWtisModule_C extends SdkWtcWtisModule_ST {
                new():SdkWtcWtisModule;
            }
            interface SdkWtcWtisModule$ {
            }
            type SdkWtcWtisModule_T = $.kd.sdk.module.Module & SdkWtcWtisModule_S & SdkWtcWtisModule$;
            interface SdkWtcWtisModule extends SdkWtcWtisModule_T {
            }
        }
        namespace kd.sdk.wtc.wtis.business.attdata{
            interface BeforeSavePayAttDataInfoEvent_S {
            }
            interface BeforeSavePayAttDataInfoEvent_C extends BeforeSavePayAttDataInfoEvent_S {
                new(version:string,mainTaskId:long,taskId:long,rule:$.kd.bos.dataentity.entity.DynamicObject,periodInfo:$.kd.bos.dataentity.entity.DynamicObject):BeforeSavePayAttDataInfoEvent;
            }
            interface BeforeSavePayAttDataInfoEvent$ {
                /**
                 * 主任务id
                 * @return 主任务id
                 */
                getMainTaskId():long;
                /**
                 * 生成汇总的项目明细的数据;此集合不支持变更，只能对DynamicObject的属性做变更
                 * @return  生成汇总的项目明细的数据
                 */
                getPayAttDataInfoList():$.java.util.List;
                /**
                 * 期间信息
                 * @return 期间信息
                 */
                getPeriodInfo():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 推送规则
                 *
                 * @return 推送规则
                 */
                getRule():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 子任务id
                 * @return 子任务id
                 */
                getTaskId():long;
                /**
                 * 任务号
                 * @return 任务号
                 */
                getVersion():string;
                /**
                 * 生成汇总的项目明细的数据
                 */
                setPayAttDataInfoList(payAttDataInfoList:$.java.util.List):void;
            }
            type BeforeSavePayAttDataInfoEvent_T = BeforeSavePayAttDataInfoEvent_S & BeforeSavePayAttDataInfoEvent$;
            interface BeforeSavePayAttDataInfoEvent extends BeforeSavePayAttDataInfoEvent_T {
            }
            interface DoSetExtFieldEvent_S {
            }
            interface DoSetExtFieldEvent_C extends DoSetExtFieldEvent_S {
                /**
                 * 构造方法
                 * @param payAttDataInfo 数据库查到的数据 (T_WTIS_PAYATTDATAINFO)
                 * @param restOneData 返回的每行数据,如果有额外增加的字段，按照顺序往 restOneData 里面加入
                 */
                new(payAttDataInfo:$.kd.bos.dataentity.entity.DynamicObject,restOneData:$.java.util.List):DoSetExtFieldEvent;
            }
            interface DoSetExtFieldEvent$ {
                /**
                 * @return 数据库查到的数据 (T_WTIS_PAYATTDATAINFO)
                 */
                getPayAttDataInfo():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * @return 返回的每行数据,如果有额外增加的字段，按照顺序往 restOneData 里面加入
                 */
                getRestOneData():$.java.util.List;
            }
            type DoSetExtFieldEvent_T = DoSetExtFieldEvent_S & DoSetExtFieldEvent$;
            interface DoSetExtFieldEvent extends DoSetExtFieldEvent_T {
            }
            interface PayAttDataInfoExtPluginDemo_S {
            }
            type PayAttDataInfoExtPluginDemo_ST = PayAttDataInfoExtPlugin_S & PayAttDataInfoExtPluginDemo_S;
            interface PayAttDataInfoExtPluginDemo_C extends PayAttDataInfoExtPluginDemo_ST {
                new():PayAttDataInfoExtPluginDemo;
            }
            interface PayAttDataInfoExtPluginDemo$ {
            }
            type PayAttDataInfoExtPluginDemo_T = PayAttDataInfoExtPlugin & PayAttDataInfoExtPluginDemo_S & PayAttDataInfoExtPluginDemo$;
            interface PayAttDataInfoExtPluginDemo extends PayAttDataInfoExtPluginDemo_T {
            }
            interface AttDataPushReq_S {
            }
            type AttDataPushReq_ST = $.java.io.Serializable & AttDataPushReq_S;
            interface AttDataPushReq_C extends AttDataPushReq_ST {
                new():AttDataPushReq;
            }
            interface AttDataPushReq$ {
                /**
                 * 获取推送方式（可选，默认值为1）
                 *
                 * @return 获取推送方式，1：仅推送校验通过的数据，2：全部校验通过后推送数据
                 */
                getPushType():string;
                /**
                 * 获取考勤数据任务批次版本号（必传）
                 *
                 * @return 考勤数据任务批次版本号
                 */
                getVersion():string;
                /**
                 * 获取推送方式
                 *
                 * @param pushType 获取推送方式，1：仅推送校验通过的数据，2：全部校验通过后推送数据
                 */
                setPushType(pushType:string):void;
                /**
                 * 设置考勤数据任务批次版本号
                 *
                 * @param version 考勤数据任务批次版本号
                 */
                setVersion(version:string):void;
            }
            type AttDataPushReq_T = $.java.io.Serializable & AttDataPushReq_S & AttDataPushReq$;
            interface AttDataPushReq extends AttDataPushReq_T {
            }
            interface PayAttDataInfoExtPlugin_S {
            }
            interface PayAttDataInfoExtPlugin$ {
                /**
                 * 获取详情记录时要增加的额外字段
                 *
                 * @return 要增加的额外字段，要按照数据放入返回结果中，后续每行数据处理的方法（doSetExtFieldValue）要和这里的顺序保持一致
                 */
                beforePayAttDataInfoAddExtField():$.java.util.List;
                /**
                 * 仅支持调整计算成功成功的考勤档案的汇总数据明细
                 * 考勤数据生成，此方法是在保存项目明细数据之前会调用
                 *
                 * @param event 包含了生成时的一些参数和要落库的明细详情的数据
                 */
                beforeSavePayAttDataInfo(event:BeforeSavePayAttDataInfoEvent):void;
                /**
                 * 每行详情的数据处理
                 */
                doSetExtFieldValue(event:DoSetExtFieldEvent):void;
            }
            type PayAttDataInfoExtPlugin_T = PayAttDataInfoExtPlugin_S & PayAttDataInfoExtPlugin$;
            interface PayAttDataInfoExtPlugin extends PayAttDataInfoExtPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtis.business.coordination{
            interface AttFileSchemeDto_S {
            }
            interface AttFileSchemeDto_C extends AttFileSchemeDto_S {
                new():AttFileSchemeDto;
            }
            interface AttFileSchemeDto$ {
                getAttMode():kd.sdk.wtc.wtp.business.attfile.AttMode;
                /**
                 * 出勤方案的boId
                 */
                getAttendPlanBoId():long;
                /**
                 * 考勤卡号
                 */
                getCard():string;
                /**
                 * 异常方案的boId
                 */
                getExceptionPlanBoId():long;
                /**
                 * 增减方案的boId
                 */
                getIncAndDecPlanBoId():long;
                /**
                 * 加班方案的boId
                 */
                getOvertimePlanBoId():long;
                /**
                 * 考勤周期的id
                 */
                getPeriodId():long;
                /**
                 * 定额方案的boId
                 */
                getQuotaPlanBoId():long;
                /**
                 * 补签方案的boId
                 */
                getSupplePlanBoId():long;
                /**
                 * 时区的id
                 */
                getTimeZoneId():long;
                /**
                 * 出差方案的boId
                 */
                getTravelPlanBoId():long;
                /**
                 * 休假方案的boId
                 */
                getVacationPlanBoId():long;
                /**
                 * 工作日程表的id
                 */
                getWorkScheduleId():long;
                setAttMode(attMode:kd.sdk.wtc.wtp.business.attfile.AttMode):void;
                /**
                 * 出勤方案的boId
                 */
                setAttendPlanBoId(attendPlanBoId:long):void;
                /**
                 * 考勤卡号
                 */
                setCard(card:string):void;
                /**
                 * 异常方案的boId
                 */
                setExceptionPlanBoId(exceptionPlanBoId:long):void;
                /**
                 * 增减方案的boId
                 */
                setIncAndDecPlanBoId(incAndDecPlanBoId:long):void;
                /**
                 * 加班方案的boId
                 */
                setOvertimePlanBoId(overtimePlanBoId:long):void;
                /**
                 * 考勤周期的id
                 */
                setPeriodId(periodId:long):void;
                /**
                 * 定额方案的boId
                 */
                setQuotaPlanBoId(quotaPlanBoId:long):void;
                /**
                 * 补签方案的boId
                 */
                setSupplePlanBoId(supplePlanBoId:long):void;
                /**
                 * 时区的id
                 */
                setTimeZoneId(timeZoneId:long):void;
                /**
                 * 出差方案的boId
                 */
                setTravelPlanBoId(travelPlanBoId:long):void;
                /**
                 * 休假方案的boId
                 */
                setVacationPlanBoId(vacationPlanBoId:long):void;
                /**
                 * 工作日程表的id
                 */
                setWorkScheduleId(workScheduleId:long):void;
            }
            type AttFileSchemeDto_T = AttFileSchemeDto_S & AttFileSchemeDto$;
            interface AttFileSchemeDto extends AttFileSchemeDto_T {
            }
            interface EntryCoordinationParam_S {
            }
            interface EntryCoordinationParam_C extends EntryCoordinationParam_S {
                new():EntryCoordinationParam;
            }
            interface EntryCoordinationParam$ {
                /**
                 * 任职经历id
                 *
                 * @return 任职经历id
                 */
                getEmpPosOrgRelId():long;
                /**
                 * 协同日志编码
                 *
                 * @return 协同日志编码
                 */
                getLogNo():string;
                /**
                 * 自然人id
                 *
                 * @return 自然人id
                 */
                getPersonId():long;
                /**
                 * 任职经历id
                 *
                 * @param empPosOrgRelId 任职经历id
                 */
                setEmpPosOrgRelId(empPosOrgRelId:long):void;
                /**
                 * 协同日志编码
                 *
                 * @param logNo 协同日志编码
                 */
                setLogNo(logNo:string):void;
                /**
                 * 自然人id
                 *
                 * @param personId 自然人id
                 */
                setPersonId(personId:long):void;
            }
            type EntryCoordinationParam_T = EntryCoordinationParam_S & EntryCoordinationParam$;
            interface EntryCoordinationParam extends EntryCoordinationParam_T {
            }
            interface NewAttFileCoordinationExpService_S {
            }
            interface NewAttFileCoordinationExpService$ {
                /**
                 * 员工入职的时候生成档案的基础方案和规则方案。
                 * <p>
                 * 员工入职的时候，工时假勤会监听到这个事件，通过中台协同生成档案；
                 * 但生成的档案目前默认是没有规则方案和基础方案的，可以通过本接口扩展实现来生成对应的规则方案和基础方案。
                 *
                 * @param entryCoordinationParam 入职协同生成档案的业务对象
                 * @return 档案的基础方案和规则方案的dto，如果无法获取合适的方案规则，则返回null
                 */
                genAttFileSchemeForEntry(entryCoordinationParam:EntryCoordinationParam):AttFileSchemeDto;
            }
            type NewAttFileCoordinationExpService_T = NewAttFileCoordinationExpService_S & NewAttFileCoordinationExpService$;
            interface NewAttFileCoordinationExpService extends NewAttFileCoordinationExpService_T {
            }
        }
        namespace kd.sdk.wtc.wtis.business.helper{
            interface WTISServiceHelper_S {
                /**
                 * 下发考勤数据推送任务
                 *
                 * @param attDataPushReq 考勤数据推送请求体
                 * @return 考勤数据推送响应结果
                 */
                dispatchAttPushTask(attDataPushReq:kd.sdk.wtc.wtis.business.attdata.AttDataPushReq):kd.sdk.wtc.wtbs.task.DispatchTaskResp;
                /**
                 * 考勤数据推送发起汇总任务
                 *
                 * @param attSumTaskReq 发起汇总任务请求体
                 * @return 汇总任务响应结果
                 */
                dispatchAttSumTask(attSumTaskReq:kd.sdk.wtc.wtis.business.task.AttSumTaskReq):kd.sdk.wtc.wtbs.task.DispatchTaskResp;
            }
            interface WTISServiceHelper_C extends WTISServiceHelper_S {
                new():WTISServiceHelper;
            }
            interface WTISServiceHelper$ {
            }
            type WTISServiceHelper_T = WTISServiceHelper_S & WTISServiceHelper$;
            interface WTISServiceHelper extends WTISServiceHelper_T {
            }
        }
        namespace kd.sdk.wtc.wtis.business.task{
            interface AttSumTaskReq_S {
            }
            type AttSumTaskReq_ST = $.java.io.Serializable & AttSumTaskReq_S;
            interface AttSumTaskReq_C extends AttSumTaskReq_ST {
                new():AttSumTaskReq;
            }
            interface AttSumTaskReq$ {
                /**
                 * 行政组织ids
                 */
                getAdminOrgIds():$.java.util.List;
                /**
                 * 考勤档案boId集合
                 */
                getAttFileBoIds():$.java.util.List;
                /**
                 * 考勤期间id
                 *
                 * @return 考勤期间id
                 */
                getAttPeriodId():long;
                /**
                 * 排出档案ids
                 */
                getExtantFileBoIds():$.java.util.List;
                /**
                 * 考勤数据推送规则
                 *
                 * @return 考勤数据推送规则
                 */
                getGenRuleId():long;
                /**
                 * 考勤组织
                 *
                 * @return 考勤组织
                 */
                getOrg():long;
                /**
                 * 设置行政组织集合，会查询设置的行政组织以及下级的行政组织 + 在考勤期间内有生效的档案
                 * 描述：设置行政组织集合
                 * 说名：档案集合和行政组织集合两个的并集取查询档案
                 * @param adminOrgIds 行政组织集合
                 */
                setAdminOrgIds(adminOrgIds:$.java.util.List):void;
                /**
                 * 设置考勤档案boId集合，生成任务时，会保留期间内有生效的档案
                 * 描述：设置考勤档案boId集合
                 * 说名：档案集合和行政组织集合两个的并集取查询档案
                 * @param attFileBoIds 考勤档案boId集合
                 */
                setAttFileBoIds(attFileBoIds:$.java.util.List):void;
                /**
                 * 设置考勤期间
                 * 描述：设置设置考勤期间
                 * 说名：必填，未空或者填错时生成会失败
                 *
                 * @param attPeriodId 考勤期间id
                 */
                setAttPeriodId(attPeriodId:long):void;
                /**
                 * 如果设置了行政组织，想要排出行政组织下的某些档案，就设置要排出生成的档案集合
                 * 描述：行政组织内要排出生成的档案集合
                 * 说名：行政组织内要排出生成的档案集合
                 * @param extantFileBoIds 行政组织内要排出生成的档案集合
                 */
                setExtantFileBoIds(extantFileBoIds:$.java.util.List):void;
                /**
                 * 设置考勤数据推送规则
                 * 描述：设置考勤数据推送规则
                 * 说名：必填，为空或者填错时，任务会失败
                 * @param genRuleId 设置考勤数据推送规则
                 */
                setGenRuleId(genRuleId:long):void;
                /**
                 * 设置考勤组织
                 * 描述：设置汇总的生成任务的考勤组织
                 * 说名：非必填，如果没填取当前用户的考勤组织
                 *
                 * @param org 考勤组织
                 */
                setOrg(org:long):void;
            }
            type AttSumTaskReq_T = $.java.io.Serializable & AttSumTaskReq_S & AttSumTaskReq$;
            interface AttSumTaskReq extends AttSumTaskReq_T {
            }
        }
        namespace kd.sdk.wtc.wtom{
            interface OnMatchOtDutyDateEvent_S {
            }
            interface OnMatchOtDutyDateEvent_C extends OnMatchOtDutyDateEvent_S {
                new():OnMatchOtDutyDateEvent;
            }
            interface OnMatchOtDutyDateEvent$ {
                getOtDutyDateParams():$.java.util.List;
                setOtDutyDateParams(otDutyDateParams:$.java.util.List):void;
            }
            type OnMatchOtDutyDateEvent_T = OnMatchOtDutyDateEvent_S & OnMatchOtDutyDateEvent$;
            interface OnMatchOtDutyDateEvent extends OnMatchOtDutyDateEvent_T {
            }
            interface OtDutyDateParam_S {
            }
            interface OtDutyDateParam_C extends OtDutyDateParam_S {
                new(otBillDy:$.kd.bos.dataentity.entity.DynamicObject,entryDy:$.kd.bos.dataentity.entity.DynamicObject,entryIndex:number,standardDutyDate:Date):OtDutyDateParam;
            }
            interface OtDutyDateParam$ {
                /**
                 * 获取用户自定义的加班日期
                 * @return 用户自定义的加班日期
                 */
                getCustomizedDutyDate():Date;
                /**
                 * 需编辑日期的加班单分录动态对象
                 * @return  分录动态对象
                 */
                getEntryDy():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 需编辑日期的加班单分录行
                 * @return 行号
                 */
                getEntryIndex():number;
                /**
                 * 需编辑日期的加班单动态对象（现支持实体：wtom_overtimeapplybill、wtom_otbillself）
                 * @return 加班单动态对象
                 */
                getOtBillDy():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 标品默认返回的标准日期
                 * @return 标品默认返回的标准日期
                 */
                getStandardDutyDate():Date;
                /**
                 * 设置用户自定义的加班日期
                 * @param customizedDutyDate 用户自定义的加班日期
                 */
                setCustomizedDutyDate(customizedDutyDate:Date):void;
            }
            type OtDutyDateParam_T = OtDutyDateParam_S & OtDutyDateParam$;
            interface OtDutyDateParam extends OtDutyDateParam_T {
            }
            interface SdkWtcWtomModule_S {
            }
            type SdkWtcWtomModule_ST = $.kd.sdk.module.Module & SdkWtcWtomModule_S;
            interface SdkWtcWtomModule_C extends SdkWtcWtomModule_ST {
                new():SdkWtcWtomModule;
            }
            interface SdkWtcWtomModule$ {
            }
            type SdkWtcWtomModule_T = $.kd.sdk.module.Module & SdkWtcWtomModule_S & SdkWtcWtomModule$;
            interface SdkWtcWtomModule extends SdkWtcWtomModule_T {
            }
        }
        namespace kd.sdk.wtc.wtom.business{
            interface OtDutyDateExtPlugin_S {
            }
            interface OtDutyDateExtPlugin$ {
                /**
                 * 时段申请自定义加班时间。
                 *
                 * <p>按时段申请的加班单，会根据该接口的实现，返回用户自定的加班日期到单据上。
                 * OtDutyDateParam 注意：
                 * 1、当标准日期不为空，自定义的加班日期返回不能为空
                 * 2、加班时段如果在班次内不允许调整，如果非班次时段，则允许调整为前后的排班日期为加班日期
                 * 3、自定义加班日期所属的档案必须存在排班
                 * 4、自定义加班日期只能返回零点，如2023-11-06 00:00:00 ,不允许为2023-11-06 16:30:00
                 * </p>
                 *
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 * </code></pre>
                 *
                 * @param onMatchOtDutyDateEvent 加班单加班日期事件
                 */
                onMatchOtDutyDate(onMatchOtDutyDateEvent:OnMatchOtDutyDateEvent):void;
            }
            type OtDutyDateExtPlugin_T = OtDutyDateExtPlugin_S & OtDutyDateExtPlugin$;
            interface OtDutyDateExtPlugin extends OtDutyDateExtPlugin_T {
            }
            interface WtomHelper_S {
            }
            interface WtomHelper_C extends WtomHelper_S {
                new():WtomHelper;
            }
            interface WtomHelper$ {
                /**
                 * 获取加班规则（包含匹配的计算规则）
                 *
                 * <p>根据获取加班规则（包含匹配的计算规则）</p>
                 *
                 * <pre><code>
                 * </code></pre>
                 *
                 * @param otRuleQuery 规则参数信息
                 */
                getOTRuleInfo(otRuleQuery:$.java.util.List):$.java.util.List;
                /**
                 * 获取标准加班日期
                 *
                 * <p>获取标准产品逻辑下的加班日期</p>
                 *
                 * <pre><code>
                 * </code></pre>
                 *
                 * @param standardDutyDateParam 参数信息
                 */
                getStandardDutyDate(standardDutyDateParam:$.java.util.List):$.java.util.List;
                /**
                 *  本人申请、为他人申请加班单校验
                 *
                 *  <pre>
                 *  failCode 校验项
                 *
                 * MUST_INPUT	必录
                 *  	单据信息：id,attfile,attfilebasef7,personid,applytyperadio,ischange,isnewbill,originalid,parent,iscancel,otapplytype,sdottype
                 *  	时段信息：sdottype,otstartdate,otenddate
                 *  	时长信息：scottype,otdate,otdtime
                 *  ATTACHMENT	附件校验
                 *  LARGETZERO	申请时间需要大于0校验
                 *  OVER24INONEBILL	当前单据分录对应的加班日期小于24小时校验
                 *  REPEATINONEBILL	当前单据分录间时段重叠校验
                 *  EACHDATESHIFT	申请的加班时间每天包含排班校验
                 *  EXISTDUTYDATE	加班日期（归属日）存在校验
                 *  SHIFT	加班日期（归属日）排班校验
                 *  INSHIF	申请时段是否在出勤时段内校验
                 *  DUTYAUTH	加班日期（归属日）档案权限校验
                 *  SIMULATION_PERIOD	加班日期（归属日）模拟时段校验
                 *  OVER24	不同单据间24小时校验
                 *  REPEAT	不同单据间时段重复校验
                 *  SUSPEND	加班日期（归属日）暂停考勤校验
                 *  FROZEN	加班日期（归属日）冻结校验
                 *  PLANS	加班日期（归属日）方案存在校验
                 *  RULE	加班日期（归属日）规则存在校验
                 *  BASESET	加班日期（归属日）基础存在配置
                 *  MINOT	加班日期（归属日）符合最小加班时长校验
                 *  ADVANCE_AND_AFTER	加班日期（归属日）符合预提补提校验
                 *  MAX_LIMIT_ADVANCE	加班日期（归属日）符合最大提单范围校验
                 *  REASON	原因必填校验
                 *  SCFLXS	限制弹性班后加班校验
                 *  FLXS	限制弹性班后加班校验
                 *  COMPENSATION	补偿方式正确性校验
                 *  LARGERTIME	结束时间大于开始时间
                 *
                 *  </pre>
                 *
                 *  @param otBillDys 加班单据校验对象，如入参为空，则返回空集合。
                 *  @param appId 应用标识，如 日常考勤（wtam），用于校验档案的权限(默认日常考勤（wtam）)
                 *  @return  加班校验结果集合
                 */
                validateOtBills(otBillDys:$.java.util.List,appId:string):$.java.util.List;
            }
            type WtomHelper_T = WtomHelper_S & WtomHelper$;
            interface WtomHelper extends WtomHelper_T {
            }
        }
        namespace kd.sdk.wtc.wtom.business.applytime{
            interface OtApplyTimeExtPlugin_S {
            }
            interface OtApplyTimeExtPlugin$ {
                /**
                 * 时段申请自定义加班时间。
                 *
                 * <p>扩展示例如下</p>
                 * <pre><code>
                 * </code></pre>
                 *
                 * @param onCalOtApplyTimeEvent 加班单时段申请加班时长设置事件
                 */
                onSetOtApplyTimeEvent(onCalOtApplyTimeEvent:OnCalOtApplyTimeEvent):void;
            }
            type OtApplyTimeExtPlugin_T = OtApplyTimeExtPlugin_S & OtApplyTimeExtPlugin$;
            interface OtApplyTimeExtPlugin extends OtApplyTimeExtPlugin_T {
            }
            interface OnCalOtApplyTimeEvent_S {
            }
            interface OnCalOtApplyTimeEvent_C extends OnCalOtApplyTimeEvent_S {
                new(onSetOtApplyTimeQuery:OnSetOtApplyTimeQuery,applyTimeInSec:number):OnCalOtApplyTimeEvent;
            }
            interface OnCalOtApplyTimeEvent$ {
                getApplyTimeInSec():number;
                getOnSetOtApplyTimeQuery():OnSetOtApplyTimeQuery;
                setApplyTimeInSec(applyTimeInSec:number):void;
            }
            type OnCalOtApplyTimeEvent_T = OnCalOtApplyTimeEvent_S & OnCalOtApplyTimeEvent$;
            interface OnCalOtApplyTimeEvent extends OnCalOtApplyTimeEvent_T {
            }
            interface OnSetOtApplyTimeQuery_S {
            }
            interface OnSetOtApplyTimeQuery_C extends OnSetOtApplyTimeQuery_S {
                new():OnSetOtApplyTimeQuery;
            }
            interface OnSetOtApplyTimeQuery$ {
                getEntryDy():$.kd.bos.dataentity.entity.DynamicObject;
                getEntryIndex():number;
                getOtBillDy():$.kd.bos.dataentity.entity.DynamicObject;
                getShiftDtoMap():$.java.util.Map;
                setEntryDy(entryDy:$.kd.bos.dataentity.entity.DynamicObject):void;
                setEntryIndex(entryIndex:number):void;
                setOtBillDy(otBillDy:$.kd.bos.dataentity.entity.DynamicObject):void;
                setShiftDtoMap(shiftDtoMap:$.java.util.Map):void;
            }
            type OnSetOtApplyTimeQuery_T = OnSetOtApplyTimeQuery_S & OnSetOtApplyTimeQuery$;
            interface OnSetOtApplyTimeQuery extends OnSetOtApplyTimeQuery_T {
            }
        }
        namespace kd.sdk.wtc.wtp{
            interface SdkWtcWtpModule_S {
            }
            type SdkWtcWtpModule_ST = $.kd.sdk.module.Module & SdkWtcWtpModule_S;
            interface SdkWtcWtpModule_C extends SdkWtcWtpModule_ST {
                new():SdkWtcWtpModule;
            }
            interface SdkWtcWtpModule$ {
            }
            type SdkWtcWtpModule_T = $.kd.sdk.module.Module & SdkWtcWtpModule_S & SdkWtcWtpModule$;
            interface SdkWtcWtpModule extends SdkWtcWtpModule_T {
            }
        }
        namespace kd.sdk.wtc.wtp.business.adplan{
            interface AdPlanHelper_S {
            }
            interface AdPlanHelper_C extends AdPlanHelper_S {
                new():AdPlanHelper;
            }
            interface AdPlanHelper$ {
                /**
                 * 根据考勤档案BOID和补签日期查询对应的补签方案和补签规则
                 * <p>
                 * 考勤档案BOID和补签日期是必传项，返回该考勤档案下对应补签日期的补签方案和补签规则
                 *
                 * @param adPlanRuleParams 请求参数
                 * @return List<AdPlanRuleQuery> 响应参数
                 */
                getAdPlanAndRule(adPlanRuleParams:$.java.util.List):$.java.util.List;
            }
            type AdPlanHelper_T = AdPlanHelper_S & AdPlanHelper$;
            interface AdPlanHelper extends AdPlanHelper_T {
            }
            interface AdPlanRuleResp_S {
            }
            type AdPlanRuleResp_ST = $.java.io.Serializable & AdPlanRuleResp_S;
            interface AdPlanRuleResp_C extends AdPlanRuleResp_ST {
                new(adPlanRuleQuery:AdPlanRuleQuery,planDy:$.kd.bos.dataentity.entity.DynamicObject,ruleDy:$.kd.bos.dataentity.entity.DynamicObject):AdPlanRuleResp;
            }
            interface AdPlanRuleResp$ {
                getAdPlanRuleQuery():AdPlanRuleQuery;
                getPlanDy():$.kd.bos.dataentity.entity.DynamicObject;
                getPlanEffectEnd():Date;
                getPlanEffectStart():Date;
                getRuleDy():$.kd.bos.dataentity.entity.DynamicObject;
                getRuleEffectEnd():Date;
                getRuleEffectStart():Date;
                setPlanEffectEnd(planEffectEnd:Date):void;
                setPlanEffectStart(planEffectStart:Date):void;
                setRuleEffectEnd(ruleEffectEnd:Date):void;
                setRuleEffectStart(ruleEffectStart:Date):void;
            }
            type AdPlanRuleResp_T = $.java.io.Serializable & AdPlanRuleResp_S & AdPlanRuleResp$;
            interface AdPlanRuleResp extends AdPlanRuleResp_T {
            }
            interface AdPlanRuleQuery_S {
            }
            type AdPlanRuleQuery_ST = $.java.io.Serializable & AdPlanRuleQuery_S;
            interface AdPlanRuleQuery_C extends AdPlanRuleQuery_ST {
                new(attFileBoId:long,adDate:Date):AdPlanRuleQuery;
            }
            interface AdPlanRuleQuery$ {
                getAdDate():Date;
                getAttFileBoId():long;
            }
            type AdPlanRuleQuery_T = $.java.io.Serializable & AdPlanRuleQuery_S & AdPlanRuleQuery$;
            interface AdPlanRuleQuery extends AdPlanRuleQuery_T {
            }
        }
        namespace kd.sdk.wtc.wtp.business.attfile{
            interface AttFileVersion_S {
            }
            type AttFileVersion_ST = $.java.io.Serializable & AttFileVersion_S;
            interface AttFileVersion_C extends AttFileVersion_ST {
                new():AttFileVersion;
            }
            interface AttFileVersion$ {
                /**
                 * 获取行政组织id
                 * @return 行政组织id
                 */
                getAdminOrg():long;
                /**
                 * 获取挂靠行政组织id
                 * @return 挂靠行政组织id
                 */
                getAffiliateAdminOrg():long;
                /**
                 * 获取协议工作地id
                 * @return 协议工作地id
                 */
                getAgreedLocation():long;
                /**
                 * 获取考勤人id
                 * @return 考勤人id
                 */
                getAttPerson():long;
                /**
                 * 获取考勤标识id
                 * @return 考勤标识id
                 */
                getAttTag():long;
                /**
                 * 获取档案业务主键
                 * @return 档案业务主键
                 */
                getBoId():long;
                /**
                 * 获取生效日期
                 * @return 生效日期
                 */
                getBsed():Date;
                /**
                 * 获取失效日期
                 * @return 失效日期
                 */
                getBsled():Date;
                /**
                 * 获取公司人id
                 * @return 公司人id
                 */
                getCmpEmp():long;
                /**
                 * 获取所属公司id
                 * @return 所属公司id
                 */
                getCompany():long;
                /**
                 * 获取数据版本状态
                 * -2：已删除
                 * -1：已废弃
                 * 0：待生效
                 * 1：生效中
                 * 2：已失效
                 * @return 数据版本状态
                 */
                getDataStatus():string;
                /**
                 * 获取组织人id
                 * @return 组织人id
                 */
                getDepEmp():long;
                /**
                 * 获取国家/地区id
                 * @return 国家/地区id
                 */
                getDependency():long;
                /**
                 * 获取属地员工类别id
                 * @return 属地员工类别id
                 */
                getDependencyType():long;
                /**
                 * 获取考勤人员组id
                 * @return 考勤人员组id
                 */
                getEmpGroup():long;
                /**
                 * 获取考勤任职经历id
                 * @return 考勤任职经历id
                 */
                getEmpPosOrgRel():long;
                /**
                 * 获取企业人id
                 * @return 企业人id
                 */
                getEmployee():long;
                /**
                 * 获取档案结束日期
                 * @return 档案结束日期
                 */
                getEndDate():Date;
                /**
                 * 获取档案id
                 * @return 档案id
                 */
                getId():long;
                /**
                 * 获取职位id
                 * @return 职位id
                 */
                getJob():long;
                /**
                 * 获取所属管理范围id
                 * @return 所属管理范围id
                 */
                getManagingScope():long;
                /**
                 * 获取姓名
                 * @return 姓名
                 */
                getName():string;
                /**
                 * 获取档案编号
                 * @return 档案编号
                 */
                getNumber():string;
                /**
                 * 获取考勤组织id
                 * @return 考勤组织id
                 */
                getOrg():long;
                /**
                 * 获取自然人id
                 * @return 自然人id
                 */
                getPersonId():long;
                /**
                 * 获取岗位id
                 * @return 岗位id
                 */
                getPosition():long;
                /**
                 * 获取档案开始日期
                 * @return 档案开始日期
                 */
                getStartDate():Date;
                /**
                 * 获取档案类型
                 * 1：考勤档案 2：假期档案
                 *
                 * @return 档案类型
                 */
                getType():string;
                /**
                 * 获取考勤地点id
                 * @return 考勤地点id
                 */
                getWorkplace():long;
                /**
                 * 设置行政组织id
                 * @param adminOrg 行政组织id
                 */
                setAdminOrg(adminOrg:long):void;
                /**
                 * 设置挂靠行政组织id
                 * @param affiliateAdminOrg 挂靠行政组织id
                 */
                setAffiliateAdminOrg(affiliateAdminOrg:long):void;
                /**
                 * 设置协议工作地id
                 * @param agreedLocation 协议工作地id
                 */
                setAgreedLocation(agreedLocation:long):void;
                /**
                 * 设置考勤人id
                 * @param attPerson 考勤人id
                 */
                setAttPerson(attPerson:long):void;
                /**
                 * 设置考勤标识id
                 * @param attTag 考勤标识id
                 */
                setAttTag(attTag:long):void;
                /**
                 * 设置档案业务主键
                 * @param boId 档案业务主键
                 */
                setBoId(boId:long):void;
                /**
                 * 设置生效日期
                 * @param bsed 生效日期
                 */
                setBsed(bsed:Date):void;
                /**
                 * 设置失效日期
                 * @param bsled 失效日期
                 */
                setBsled(bsled:Date):void;
                /**
                 * 设置公司人id
                 * @param cmpEmp 公司人id
                 */
                setCmpEmp(cmpEmp:long):void;
                /**
                 * 设置所属公司id
                 * @param company 所属公司id
                 */
                setCompany(company:long):void;
                /**
                 * 设置数据版本状态
                 * -2：已删除
                 * -1：已废弃
                 * 0：待生效
                 * 1：生效中
                 * 2：已失效
                 * @param dataStatus 数据版本状态
                 */
                setDataStatus(dataStatus:string):void;
                /**
                 * 设置组织人id
                 * @param depEmp 组织人id
                 */
                setDepEmp(depEmp:long):void;
                /**
                 * 设置国家/地区id
                 * @param dependency 国家/地区id
                 */
                setDependency(dependency:long):void;
                /**
                 * 设置属地员工类别id
                 * @param dependencyType 属地员工类别id
                 */
                setDependencyType(dependencyType:long):void;
                /**
                 * 设置考勤人员组id
                 * @param empGroup 考勤人员组id
                 */
                setEmpGroup(empGroup:long):void;
                /**
                 * 设置考勤任职经历id
                 *
                 * @param empPosOrgRel 考勤任职经历id
                 */
                setEmpPosOrgRel(empPosOrgRel:long):void;
                /**
                 * 设置企业人id
                 * @param employee 企业人id
                 */
                setEmployee(employee:long):void;
                /**
                 * 设置档案结束日期
                 * @param endDate 档案结束日期
                 */
                setEndDate(endDate:Date):void;
                /**
                 * 设置c
                 * @param id 档案id
                 */
                setId(id:long):void;
                /**
                 * 设置职位id
                 * @param job 职位id
                 */
                setJob(job:long):void;
                /**
                 * 设置所属管理范围
                 * @param managingScope 所属管理范围id
                 */
                setManagingScope(managingScope:long):void;
                /**
                 * 设置姓名
                 * @param name 姓名
                 */
                setName(name:string):void;
                /**
                 * 设置档案编号
                 * @param number 档案编号
                 */
                setNumber(number_arg:string):void;
                /**
                 * 设置考勤组织id
                 * @param org 考勤组织id
                 */
                setOrg(org:long):void;
                /**
                 * 设置自然人id
                 * @param personId 自然人id
                 */
                setPersonId(personId:long):void;
                /**
                 * 设置岗位id
                 * @param position 岗位id
                 */
                setPosition(position:long):void;
                /**
                 * 设置档案开始日期
                 * @param startDate 档案开始日期
                 */
                setStartDate(startDate:Date):void;
                /**
                 * 设置档案类型
                 * @param type 档案类型 1：考勤档案 2：假期档案
                 */
                setType(type_arg:string):void;
                /**
                 * 设置考勤地点id
                 * @param workplace 考勤地点id
                 */
                setWorkplace(workplace:long):void;
            }
            type AttFileVersion_T = $.java.io.Serializable & AttFileVersion_S & AttFileVersion$;
            interface AttFileVersion extends AttFileVersion_T {
            }
            interface WTPAttFileHelper_S {
                /**
                 * 判断档案在指定日期之后是否存在业务数据
                 *
                 * <pre>
                 * 根据考勤档案boId集合，查询localDate（包含localDate当天）及之后存在的业务数据，目前包含以下四种业务数据
                 * signCardData :有效卡
                 * vaBillData :休假单
                 * otBillData :加班单
                 * tpBillData :出差单
                 *
                 * 返回结果示例
                 * {
                 * key:  signCardData, {1452940499953387520,true},
                 * key:  vaBillData, {1452940499953387520,true},
                 * key:  otBillData, {1452940499953387520,true},
                 * key:  tpBillData, {1452940499953387520,true}
                 * }
                 * </pre>
                 *
                 * @param fileBoIds   考勤档案boId集合，为空时返回空的map
                 * @param specialDate 日期，为空时抛出异常
                 * @return Map<业务数据分类 ， Map < 考勤档案boId ， 是否存在业务数据>> 返回的校验结果，如果都不存在业务数据，返回空map，如果存在指定业务数据则存在对应数据分类的校验结果
                 */
                existBusinessData(fileBoIds:$.java.util.Collection,specialDate:$.java.time.LocalDate):$.java.util.Map;
                /**
                 * 通过人员类型，人员id查询某一天的档案版本
                 *
                 * @param localDate 日期
                 * @param userId    人员id
                 * @param userType  人员类型
                 * @return 档案版本信息的业务对象
                 */
                getAttFile(localDate:$.java.time.LocalDate,userId:long,userType:kd.sdk.wtc.wtbs.common.enums.UserModelType):AttFileVersion;
                /**
                 * 查询指定日期范围内的档案版本
                 * <p>
                 * 根据日期范围和指定人员类型的人员id集合，查询存在有交集的有效档案版本，可以指定是否控权
                 *
                 * @param startDate  开始日期，开始日期大于结束日期时，忽略日期过滤
                 * @param endDate    结束日期，开始日期大于结束日期时，忽略日期过滤
                 * @param userIdList 人员id集合
                 * @param userType   人员类型，对参数userIdList的维度说明，比如，当userIdList传入的是自然人的id集合，userType应该为 UserModelType.PERSON
                 * @param checkAuth  是否控权，当checkAuth=true是，会校验当前登录用户有权限的档案版本数据
                 * @return 档案版本信息的业务对象集合，当传入为空的参数时，返回空的List
                 */
                getAttFileList(startDate:$.java.time.LocalDate,endDate:$.java.time.LocalDate,userIdList:$.java.util.Set,userType:kd.sdk.wtc.wtbs.common.enums.UserModelType,checkAuth:boolean):$.java.util.List;
            }
            interface WTPAttFileHelper_C extends WTPAttFileHelper_S {
                new():WTPAttFileHelper;
            }
            interface WTPAttFileHelper$ {
            }
            type WTPAttFileHelper_T = WTPAttFileHelper_S & WTPAttFileHelper$;
            interface WTPAttFileHelper extends WTPAttFileHelper_T {
            }
            enum AttMode {
                MULTI_PUNCH,
                SINGLE_PUNCH,
                NO_PUNCH
            }
            interface IAttFileDiscardExpandService_S {
            }
            interface IAttFileDiscardExpandService$ {
                /**
                 * 返回值说明：<br/>
                 * key:  success 处理成功的数据标识，failed 处理失败的数据标识<br/>
                 * value: 处理成功和失败信息 类型为Map 格式如下<br/>
                 *     key:  档案boId  类型Long 如：1575282784384182272L <br/>
                 *     value: 类型为String 错误信息 如：”档案正在执行更新任务，不可废弃。“
                 *
                 * 例如：
                 * {
                 * "success":{
                 *      1575282784384182272:"档案正在执行更新任务，不可废弃。"
                 *    }
                 * }
                 * @param fileBoIds 需要处理的考勤档案boId
                 * @return Map<String, Map<Long, String>>
                 */
                handleAttFileRelateData(fileBoIds:$.java.util.List):$.java.util.Map;
            }
            type IAttFileDiscardExpandService_T = IAttFileDiscardExpandService_S & IAttFileDiscardExpandService$;
            interface IAttFileDiscardExpandService extends IAttFileDiscardExpandService_T {
            }
        }
        namespace kd.sdk.wtc.wtp.business.attperiod{
            interface PerAttPeriod_S {
            }
            interface PerAttPeriod_C extends PerAttPeriod_S {
                new():PerAttPeriod;
            }
            interface PerAttPeriod$ {
                /**
                 * 获取期间id
                 * @return 期间id
                 */
                getAttPeriodId():long;
                /**
                 * 获取考勤档案boId
                 * @return 考勤档案boId
                 */
                getFileBoId():long;
                /**
                 * 获取考勤档案id
                 * @return 考勤档案id
                 */
                getFileId():long;
                /**
                 * 获取人员考勤期间结束时间
                 * @return 人员考勤期间结束时间
                 */
                getPerAttPeriodEndDate():Date;
                /**
                 * 获取人员考勤期间开始时间
                 * @return 人员考勤期间开始时间
                 */
                getPerAttPeriodStartDate():Date;
                /**
                 * 获取周期Id
                 * @return 周期Id
                 */
                getPeriodId():long;
                /**
                 * 获取周期Id
                 * @return 周期Id
                 */
                getPersonId():long;
                /**
                 * 设置期间id
                 * @param attPeriodId 期间id
                 */
                setAttPeriodId(attPeriodId:long):void;
                /**
                 * 设置考勤档案boId
                 * @param fileBoId 考勤档案boId
                 */
                setFileBoId(fileBoId:long):void;
                /**
                 * 设置考勤档案id
                 * @param fileId 考勤档案id
                 */
                setFileId(fileId:long):void;
                /**
                 * 设置人员考勤期间结束时间
                 * @param perAttPeriodEndDate 人员考勤期间结束时间
                 */
                setPerAttPeriodEndDate(perAttPeriodEndDate:Date):void;
                /**
                 * 设置人员考勤期间开始时间
                 * @param perAttPeriodStartDate 人员考勤期间开始时间
                 */
                setPerAttPeriodStartDate(perAttPeriodStartDate:Date):void;
                /**
                 * 设置周期Id
                 * @param periodId 周期Id
                 */
                setPeriodId(periodId:long):void;
                /**
                 * 设置周期Id
                 * @param personId 周期Id
                 */
                setPersonId(personId:long):void;
            }
            type PerAttPeriod_T = PerAttPeriod_S & PerAttPeriod$;
            interface PerAttPeriod extends PerAttPeriod_T {
            }
            interface PerAttPeriodQueryParam_S {
            }
            interface PerAttPeriodQueryParam_C extends PerAttPeriodQueryParam_S {
                new():PerAttPeriodQueryParam;
            }
            interface PerAttPeriodQueryParam$ {
                getAttFileBoId():long;
                getEndDate():$.java.time.LocalDate;
                getStartDate():$.java.time.LocalDate;
                setAttFileBoId(attFileBoId:long):void;
                setEndDate(endDate:$.java.time.LocalDate):void;
                setStartDate(startDate:$.java.time.LocalDate):void;
            }
            type PerAttPeriodQueryParam_T = PerAttPeriodQueryParam_S & PerAttPeriodQueryParam$;
            interface PerAttPeriodQueryParam extends PerAttPeriodQueryParam_T {
            }
            interface WTPPerAttPeriodHelper_S {
                /**
                 * 查询人员考勤期间
                 * <p>
                 * 查询到的人员考勤的日期范围需包含指定日期 {@code dateInAttPeriod}
                 *
                 * @param attFileBoId     考勤档案BoId
                 * @param dateInAttPeriod 人员考勤期间中的某个日期，查询到的人员考勤期间日期范围包含该日期
                 * @return 人员考勤期间，如果查不到则返回null；attFileBoId == 0 或者 dateInAttPeriod == null 则返回null
                 */
                getPerAttPeriod(attFileBoId:long,dateInAttPeriod:$.java.time.LocalDate):PerAttPeriod;
                /**
                 * 查询人员考勤期间列表
                 * <p>
                 * 查询到的人员考勤期间日期范围与查询条件中的日期范围有交集，查询不到数据返回空集合
                 *
                 * @param perAttPeriodQueryParam 查询请求
                 * @return List<PerAttPeriodDto> 人员考勤期间列表，如果查询不到数据则返回空集合，如果查询条件中 attFileBoId==0或者startDate==null或endDate == null 则返回null
                 */
                getPerAttPeriods(perAttPeriodQueryParam:PerAttPeriodQueryParam):$.java.util.List;
            }
            interface WTPPerAttPeriodHelper_C extends WTPPerAttPeriodHelper_S {
                new():WTPPerAttPeriodHelper;
            }
            interface WTPPerAttPeriodHelper$ {
            }
            type WTPPerAttPeriodHelper_T = WTPPerAttPeriodHelper_S & WTPPerAttPeriodHelper$;
            interface WTPPerAttPeriodHelper extends WTPPerAttPeriodHelper_T {
            }
        }
        namespace kd.sdk.wtc.wtp.business.attperson{
            interface AttPerson_S {
            }
            type AttPerson_ST = $.java.io.Serializable & AttPerson_S;
            interface AttPerson_C extends AttPerson_ST {
                new():AttPerson;
            }
            interface AttPerson$ {
                /**
                 * 获取协议工作地id
                 * @return 协议工作地id
                 */
                getAgreedLocation():long;
                /**
                 * 获取参加工作日期
                 * @return 参加工作日期
                 */
                getBeginServiceDate():Date;
                /**
                 * 获取胎儿出生日期
                 * @return 胎儿出生日期
                 */
                getBirthday():Date;
                /**
                 * 获取本次生育胎儿数
                 * @return 本次生育胎儿数
                 */
                getChildrenNumber():number;
                /**
                 * 获取用人单位id
                 * @return 用人单位id
                 */
                getEnterprise():long;
                /**
                 * 获取入职日期
                 * @return 入职日期
                 */
                getEntryDate():Date;
                /**
                 * 获取首次用工开始日期
                 * @return 首次用工开始日期
                 */
                getFirstStartDate():Date;
                /**
                 * 获取性别id
                 * @return 性别id
                 */
                getGender():long;
                /**
                 * 获取用工结束日期
                 * @return 用工结束日期
                 */
                getHireEndDate():Date;
                /**
                 * 获取用工开始日期
                 * @return 用工开始日期
                 */
                getHireStartDate():Date;
                /**
                 * 获取考勤人id
                 * @return 考勤人id
                 */
                getId():long;
                /**
                 * 获取职位id
                 * @return 职位id
                 */
                getJobHr():long;
                /**
                 * 获取用工关系状态id
                 * @return 用工关系状态id
                 */
                getLaborRelStatus():long;
                /**
                 * 获取用工关系类型id
                 * @return 用工关系类型id
                 */
                getLaborRelType():long;
                /**
                 * 获取最后工作日
                 * @return 最后工作日
                 */
                getLastWorkDate():Date;
                /**
                 * 获取婚姻状况id
                 * @return 婚姻状况id
                 */
                getMarriageStatus():long;
                /**
                 * 获取姓名
                 * @return 姓名
                 */
                getName():string;
                /**
                 * 获取国籍
                 * @return 国籍
                 */
                getNationality():long;
                /**
                 * 获取工号
                 * @return 工号
                 */
                getNumber():string;
                /**
                 * 获取自然人id
                 * @return 自然人id
                 */
                getPerson():long;
                /**
                 * 获取生育方式id
                 * @return 生育方式id
                 */
                getProcreateMode():long;
                /**
                 * 获取转正日期
                 * @return 转正日期
                 */
                getRegularDate():Date;
                /**
                 * 获取离职生效日
                 * @return 离职生效日
                 */
                getResignDate():Date;
                /**
                 * 设置协议工作地id
                 * @param agreedLocation 协议工作地id
                 */
                setAgreedLocation(agreedLocation:long):void;
                /**
                 * 设置参加工作日期
                 * @param beginServiceDate 参加工作日期
                 */
                setBeginServiceDate(beginServiceDate:Date):void;
                /**
                 * 设置胎儿出生日期
                 * @param birthday 胎儿出生日期
                 */
                setBirthday(birthday:Date):void;
                /**
                 * 设置本次生育胎儿数
                 * @param childrenNumber 本次生育胎儿数
                 */
                setChildrenNumber(childrenNumber:number):void;
                /**
                 * 设置用人单位id
                 * @param enterprise 用人单位id
                 */
                setEnterprise(enterprise:long):void;
                /**
                 * 设置入职日期
                 * @param entryDate 入职日期
                 */
                setEntryDate(entryDate:Date):void;
                /**
                 * 设置首次用工开始日期
                 * @param firstStartDate 首次用工开始日期
                 */
                setFirstStartDate(firstStartDate:Date):void;
                /**
                 * 设置性别id
                 * @param gender 性别id
                 */
                setGender(gender:long):void;
                /**
                 * 设置用工结束日期
                 * @param hireEndDate 用工结束日期
                 */
                setHireEndDate(hireEndDate:Date):void;
                /**
                 * 设置用工开始日期
                 * @param hireStartDate 用工开始日期
                 */
                setHireStartDate(hireStartDate:Date):void;
                /**
                 * 设置考勤人id
                 * @param id 考勤人id
                 */
                setId(id:long):void;
                /**
                 * 设置职位id
                 * @param jobHr 职位id
                 */
                setJobHr(jobHr:long):void;
                /**
                 * 设置用工关系状态id
                 * @param laborRelStatus 用工关系状态id
                 */
                setLaborRelStatus(laborRelStatus:long):void;
                /**
                 * 设置用工关系类型id
                 * @param laborRelType 用工关系类型id
                 */
                setLaborRelType(laborRelType:long):void;
                /**
                 * 设置最后工作日
                 * @param lastWorkDate 最后工作日
                 */
                setLastWorkDate(lastWorkDate:Date):void;
                /**
                 * 设置婚姻状况id
                 * @param marriageStatus 婚姻状况id
                 */
                setMarriageStatus(marriageStatus:long):void;
                /**
                 * 设置姓名
                 * @param name 姓名
                 */
                setName(name:string):void;
                /**
                 * 设置国籍
                 * @param nationality 国籍
                 */
                setNationality(nationality:long):void;
                /**
                 * 设置工号
                 * @param number 工号
                 */
                setNumber(number_arg:string):void;
                /**
                 * 设置自然人id
                 * @param person 自然人id
                 */
                setPerson(person:long):void;
                /**
                 * 设置生育方式id
                 * @param procreateMode 生育方式id
                 */
                setProcreateMode(procreateMode:long):void;
                /**
                 * 设置转正日期
                 * @param regularDate 转正日期
                 */
                setRegularDate(regularDate:Date):void;
                /**
                 * 设置离职生效日
                 * @param resignDate 离职生效日
                 */
                setResignDate(resignDate:Date):void;
            }
            type AttPerson_T = $.java.io.Serializable & AttPerson_S & AttPerson$;
            interface AttPerson extends AttPerson_T {
            }
            interface WTPAttPersonHelper_S {
                /**
                 * 通过自然人员id查询人员信息
                 *
                 * @param personId 自然人id
                 * @return 考勤人员信息
                 */
                getAttPerson(personId:long):AttPerson;
            }
            interface WTPAttPersonHelper_C extends WTPAttPersonHelper_S {
                new():WTPAttPersonHelper;
            }
            interface WTPAttPersonHelper$ {
            }
            type WTPAttPersonHelper_T = WTPAttPersonHelper_S & WTPAttPersonHelper$;
            interface WTPAttPersonHelper extends WTPAttPersonHelper_T {
            }
        }
        namespace kd.sdk.wtc.wtp.business.coordination{
            interface AfterCoordinationEvent_S {
            }
            interface AfterCoordinationEvent_C extends AfterCoordinationEvent_S {
                new():AfterCoordinationEvent;
                /**
                 * AfterCoordinationEvent 构造方法
                 *
                 * @param coreCoordinationParam coreCoordinationParam
                 * @param messageDy             messageDy
                 * @param successPkIdMap        successPkIdMap
                 */
                new(coreCoordinationParam:CoreCoordinationParam,messageDy:$.kd.bos.dataentity.entity.DynamicObject,successPkIdMap:$.java.util.Map):AfterCoordinationEvent;
            }
            interface AfterCoordinationEvent$ {
                /**
                 * 获取协同事件核心参数
                 *
                 * @return CoreCoordinationParam
                 */
                getCoreCoordinationParam():CoreCoordinationParam;
                /**
                 * 获取业务事件日志动态对象
                 *
                 * @return DynamicObject
                 */
                getMessageDy():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取成功的数据主键map集合
                 *
                 * @return Map<String, List < Object>>
                 */
                getSuccessPkIdMap():$.java.util.Map;
            }
            type AfterCoordinationEvent_T = AfterCoordinationEvent_S & AfterCoordinationEvent$;
            interface AfterCoordinationEvent extends AfterCoordinationEvent_T {
            }
            interface BeforeCoordinationEvent_S {
            }
            interface BeforeCoordinationEvent_C extends BeforeCoordinationEvent_S {
                new():BeforeCoordinationEvent;
                /**
                 * BeforeCoordinationEvent 构造方法
                 *
                 * @param coreCoordinationParam coreCoordinationParam
                 * @param messageDy             messageDy
                 * @param stopCoordination      stopCoordination
                 */
                new(coreCoordinationParam:CoreCoordinationParam,messageDy:$.kd.bos.dataentity.entity.DynamicObject,stopCoordination:boolean):BeforeCoordinationEvent;
            }
            interface BeforeCoordinationEvent$ {
                /**
                 * 获取协同事件核心参数
                 *
                 * @return CoreCoordinationParam
                 */
                getCoreCoordinationParam():CoreCoordinationParam;
                /**
                 * 获取业务事件日志动态对象
                 *
                 * @return DynamicObject
                 */
                getMessageDy():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取是否停止后续协同操作
                 *
                 * @return boolean
                 */
                isStopCoordination():boolean;
                /**
                 * 设置是否停止后续协同操作，当设置为true时，当前的协同子操作不会继续执行
                 *
                 * @param stopCoordination stopCoordination
                 */
                setStopCoordination(stopCoordination:boolean):void;
            }
            type BeforeCoordinationEvent_T = BeforeCoordinationEvent_S & BeforeCoordinationEvent$;
            interface BeforeCoordinationEvent extends BeforeCoordinationEvent_T {
            }
            interface CoordinationExecuteExtPlugin_S {
            }
            interface CoordinationExecuteExtPlugin$ {
                /**
                 * 协同执行后事件，协同执行后调用此接口，协同后处理和协同中处理的数据是分开的事务，一个协同事件只会执行一次
                 * <p>
                 * 1.通过该接口可以在协同操作后根据协同事件核心参数，和已经协同处理成功的数据，可以自定义处理协同后业务逻辑，比如调动成功后需要修改或者刷新下游部分业务数据；
                 * 2.可以根据业务事件日志对象自定义处理业务事件日志和协作任务中心数据。
                 * </p>
                 * <p>拓展示例：</p>
                 * <pre><code>
                 * 示例代码可以参考人员协同任务执行扩展插件场景示例，扩展场景编码：kd.sdk.wtc.wtp.business.coordination.CoordinationExecuteExtPlugin
                 * </code></pre>
                 *
                 * @param afterCoordinationEvent 协同事件执行后参数
                 */
                afterExecuteCoordination?(afterCoordinationEvent:AfterCoordinationEvent):void;
                /**
                 * 协同执行前事件，协同执行前调用此接口，请注意协同前的数据处理，不会因协同事件失败而回撤，一个协同事件只会执行一次
                 * <p>
                 * 1.可以在协同操作前根据协同事件核心参数前决定是否取消协同操作；
                 * 2.可以自定义处理协同前业务逻辑，比如转正前处理部分业务数据；
                 * 3.可以根据业务事件日志对象自定义处理业务事件日志和协作任务中心数据。
                 * </p>
                 * <p>拓展示例：</p>
                 * <pre><code>
                 * 示例代码可以参考人员协同任务执行扩展插件场景示例，扩展场景编码：kd.sdk.wtc.wtp.business.coordination.CoordinationExecuteExtPlugin
                 * </code></pre>
                 *
                 * @param beforeCoordinationEvent 协同事件执行前参数
                 */
                beforeExecuteCoordination?(beforeCoordinationEvent:BeforeCoordinationEvent):void;
                /**
                 * 协同执行中事件，在协同执行，调用实际的操作op前执行，一个协同事件可能会调用多次op操作，这里可能会执行多次
                 * 1.可以在协同执行中，修改执行的List<DynamicObject> exeOpDyList 动态对象数据，也可以自己自定义操作后，重定向执行新的操作operationKey；
                 * 2.可以根据业务事件日志对象自定义处理业务事件日志和协作任务中心数据。
                 * <p>拓展示例：</p>
                 * <pre><code>
                 * 示例代码可以参考人员协同任务执行扩展插件场景示例，扩展场景编码：kd.sdk.wtc.wtp.business.coordination.CoordinationExecuteExtPlugin
                 * </code></pre>
                 *
                 * @param executingCoordinationEvent 协同事件执行中参数
                 */
                executingCoordination?(executingCoordinationEvent:ExecutingCoordinationEvent):void;
            }
            type CoordinationExecuteExtPlugin_T = CoordinationExecuteExtPlugin_S & CoordinationExecuteExtPlugin$;
            interface CoordinationExecuteExtPlugin extends CoordinationExecuteExtPlugin_T {
            }
            interface CoordinationExpandService_S {
            }
            interface CoordinationExpandService$ {
                /**
                 * 核心人力的人员变动，生成/变更考勤档案。
                 * <p>
                 * 核心人力的人员变动，工时假勤会监听到这个事件，通过中台协同生成/变更档案；
                 * 标品的生成/变更的档案的规则引擎场景不满足需求，可以通过本接口扩展实现来生成对应的规则引擎场景入参。
                 *
                 * @param coordinationExpandParam 协同生成档案的业务对象
                 * @return Map<String, Object> key:拓展的场景输入参数的参数标识，value:拓展的值，类型可以是基础资料，字符串、数值、布尔、日期等类型参数。
                 */
                genCoordinationSceneExpand(coordinationExpandParam:CoordinationExpandParam):$.java.util.Map;
            }
            type CoordinationExpandService_T = CoordinationExpandService_S & CoordinationExpandService$;
            interface CoordinationExpandService extends CoordinationExpandService_T {
            }
            interface CoordinationExpandParam_S {
            }
            interface CoordinationExpandParam_C extends CoordinationExpandParam_S {
                new():CoordinationExpandParam;
            }
            interface CoordinationExpandParam$ {
                /**
                 * 任职经历id
                 *
                 * @return 任职经历id
                 */
                getEmpPosOrgRelId():long;
                /**
                 * 自然人id
                 *
                 * @return 自然人id
                 */
                getPersonId():long;
                /**
                 * 任职经历id
                 *
                 * @param empPosOrgRelId 任职经历id
                 */
                setEmpPosOrgRelId(empPosOrgRelId:long):void;
                /**
                 * 自然人id
                 *
                 * @param personId 自然人id
                 */
                setPersonId(personId:long):void;
            }
            type CoordinationExpandParam_T = CoordinationExpandParam_S & CoordinationExpandParam$;
            interface CoordinationExpandParam extends CoordinationExpandParam_T {
            }
            interface CoreCoordinationParam_S {
            }
            interface CoreCoordinationParam_C extends CoreCoordinationParam_S {
                new():CoreCoordinationParam;
                /**
                 * CoreCoordinationParam 构造方法
                 */
                new(configId:long,msgSubNo:string,personId:long,effectTime:Date):CoreCoordinationParam;
            }
            interface CoreCoordinationParam$ {
                /**
                 * 获取对应的协作配置的id
                 *
                 * @return long
                 */
                getConfigId():long;
                /**
                 * 获取事件生效日期
                 *
                 * @return Date
                 */
                getEffectTime():Date;
                /**
                 * 获取消息订阅号
                 *
                 * @return String
                 */
                getMsgSubNo():string;
                /**
                 * 获取消自然人id
                 *
                 * @return long
                 */
                getPersonId():long;
            }
            type CoreCoordinationParam_T = CoreCoordinationParam_S & CoreCoordinationParam$;
            interface CoreCoordinationParam extends CoreCoordinationParam_T {
            }
            interface ExecutingCoordinationEvent_S {
            }
            interface ExecutingCoordinationEvent_C extends ExecutingCoordinationEvent_S {
                new():ExecutingCoordinationEvent;
                /**
                 * ExecutingCoordinationEvent 构造方法
                 *
                 * @param operationKey operationKey
                 * @param entityNumber entityNumber
                 * @param messageDy    messageDy
                 * @param exeOpDyList  exeOpDyList
                 */
                new(operationKey:string,entityNumber:string,messageDy:$.kd.bos.dataentity.entity.DynamicObject,exeOpDyList:$.java.util.List):ExecutingCoordinationEvent;
                new(operationKey:string,entityNumber:string,coreCoordinationParam:CoreCoordinationParam,messageDy:$.kd.bos.dataentity.entity.DynamicObject,exeOpDyList:$.java.util.List):ExecutingCoordinationEvent;
            }
            interface ExecutingCoordinationEvent$ {
                /**
                 * 获取协同事件核心参数
                 *
                 * @return CoreCoordinationParam
                 */
                getCoreCoordinationParam():CoreCoordinationParam;
                /**
                 * 获取操作数据的元数据实体编码
                 *
                 * @return String
                 */
                getEntityNumber():string;
                /**
                 * 获取需要执行操作的数据的动态对象集合
                 *
                 * @return List<DynamicObject>
                 */
                getExeOpDyList():$.java.util.List;
                /**
                 * 获取业务事件日志动态对象
                 *
                 * @return DynamicObject
                 */
                getMessageDy():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取需要执行操作的 OperationKey
                 *
                 * @return String
                 */
                getOperationKey():string;
                /**
                 * 设置操作数据的元数据实体编码
                 *
                 * @param entityNumber
                 */
                setEntityNumber(entityNumber:string):void;
                /**
                 * 设置需要执行操作的 OperationKey
                 *
                 * @param operationKey
                 */
                setOperationKey(operationKey:string):void;
            }
            type ExecutingCoordinationEvent_T = ExecutingCoordinationEvent_S & ExecutingCoordinationEvent$;
            interface ExecutingCoordinationEvent extends ExecutingCoordinationEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtp.business.formula{
            interface FormulaDataProvideExtPlugin_S {
            }
            interface FormulaDataProvideExtPlugin$ {
                /**
                 * <p>
                 * 执行公式计算元素取数扩展,入参包含了: 1.扩展的计算元素唯一编码(uniqueCode),2.取数要用到的上下文map
                 *
                 * </p>
                 * <p>拓展示例：</p>
                 * <pre><code>
                 * 扩展案例参考：kd.sdk.wtc.wtp.business.formula.FormulaDataProvideExtDemo
                 * </code></pre>
                 * @param onDataProvideEvent 考勤公式扩展取数事件
                 */
                onDataProvide(onDataProvideEvent:OnDataProvideEvent):void;
            }
            type FormulaDataProvideExtPlugin_T = FormulaDataProvideExtPlugin_S & FormulaDataProvideExtPlugin$;
            interface FormulaDataProvideExtPlugin extends FormulaDataProvideExtPlugin_T {
            }
            interface OnDataProvideEvent_S {
            }
            interface OnDataProvideEvent_C extends OnDataProvideEvent_S {
                new(dataProviderKey:string,paramMap:$.java.util.Map):OnDataProvideEvent;
            }
            interface OnDataProvideEvent$ {
                getDataProviderKey():string;
                getParamMap():$.java.util.Map;
                getResult():any;
                setResult(result:any):void;
            }
            type OnDataProvideEvent_T = OnDataProvideEvent_S & OnDataProvideEvent$;
            interface OnDataProvideEvent extends OnDataProvideEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtp.business.quota{
            interface QuotaQueryParam_S {
            }
            interface QuotaQueryParam_C extends QuotaQueryParam_S {
                new():QuotaQueryParam;
            }
            interface QuotaQueryParam$ {
                /**
                 * 人员档案BoId，必填，否则返回空集合。
                 */
                getAttFileBoId():long;
                /**
                 * 时间范围过滤的结束时间，可为 null，为 null 时将直接使用当前时间查询且不考虑 startDate 的值。
                 * <p>
                 * 当 startDate 和 endDate 任一一个为 null 时，将直接认定为使用当前系统日期查询。
                 * 当 startDate 和 endDate 均不为 null 时，要求 startDate 小于等于 endDate，否则返回空列表。
                 */
                getEndDate():Date;
                /**
                 * 需要查询的定额类型，为 null 或者空集合时将查询该人所有类型的额度信息。
                 */
                getQuotaTypeIdList():$.java.util.List;
                /**
                 * 时间范围过滤模式
                 * <p>
                 * 0(仅使用范围过滤),
                 * 1(仅生成范围过滤),
                 * 2(使用范围和生成范围同时过滤),
                 * 3(使用范围或生成范围过滤),
                 * 传入其他则返回空结果集
                 */
                getRangQueryType():number;
                /**
                 * 时间范围过滤的开始时间，可为 null，为 null 时将直接使用当前时间查询且不考虑 endDate 的值。
                 * <p>
                 * 当 startDate 和 endDate 任一一个为 null 时，将直接认定为使用当前系统日期查询。
                 * 当 startDate 和 endDate 均不为 null 时，要求 startDate 小于等于 endDate，否则返回空列表。
                 */
                getStartDate():Date;
                /**
                 * 人员档案BoId，必填，否则返回空集合。
                 */
                setAttFileBoId(attFileBoId:long):void;
                /**
                 * 时间范围过滤的结束时间，可为 null，为 null 时将直接使用当前时间查询且不考虑 startDate 的值。
                 * <p>
                 * 当 startDate 和 endDate 任一一个为 null 时，将直接认定为使用当前系统日期查询。
                 * 当 startDate 和 endDate 均不为 null 时，要求 startDate 小于等于 endDate，否则返回空列表。
                 */
                setEndDate(endDate:Date):void;
                /**
                 * 需要查询的定额类型，为 null 或者空集合时将查询该人所有类型的额度信息。
                 */
                setQuotaTypeIdList(quotaTypeIdList:$.java.util.List):void;
                /**
                 * 时间范围过滤模式：
                 * <p>
                 * 0(仅使用范围过滤),
                 * 1(仅生成范围过滤),
                 * 2(使用范围和生成范围同时过滤),
                 * 3(使用范围或生成范围过滤),
                 * 传入其他则返回空结果集
                 */
                setRangQueryType(rangQueryType:number):void;
                /**
                 * 时间范围过滤的开始时间，可为 null，为 null 时将直接使用当前时间查询且不考虑 endDate 的值。
                 * <p>
                 * 当 startDate 和 endDate 任一一个为 null 时，将直接认定为使用当前系统日期查询。
                 * 当 startDate 和 endDate 均不为 null 时，要求 startDate 小于等于 endDate，否则返回空列表。
                 */
                setStartDate(startDate:Date):void;
            }
            type QuotaQueryParam_T = QuotaQueryParam_S & QuotaQueryParam$;
            interface QuotaQueryParam extends QuotaQueryParam_T {
            }
            interface WTPQuotaHelper_S {
                /**
                 * 根据人员的档案boId查询的定额信息。
                 *
                 * @param queryParam 查询参数
                 * @return 结果集中元素为页面（wtp_qtlinedetail）的动态对象，所查询的字段有：
                 * <pre>
                 * attfilebo（考勤档案bo）,
                 * attfileid（考勤档案版本）,
                 * qttype（定额类型）,
                 * genstartdate（生成开始日期）,
                 * genenddate（生成结束日期）,
                 * usestartdate（使用开始日期）,
                 * useenddate（使用结束日期）,
                 * source（来源）,
                 * ownvalue（享有可用值-自生成后固定）,
                 * ownodvalue（享有透支值-自生成后固定）,
                 * pastvalue（过期值-自生成后固定）,
                 * balance（冲抵值-自生成后固定）,
                 * cdedvalue（已结转值-自生成后固定）,
                 * usablevalue（可用值-随单据的申请变化）,
                 * freezevalue（冻结值-随单据的申请变化）,
                 * usedvalue（已用值-随单据的申请变化）,
                 * canbeodvalue（可透支值-随单据的申请变化）,
                 * useodvalue（已透支值-随单据的申请变化）
                 * </pre>
                 */
                queryQuota(queryParam:QuotaQueryParam):$.java.util.List;
            }
            interface WTPQuotaHelper_C extends WTPQuotaHelper_S {
                new():WTPQuotaHelper;
            }
            interface WTPQuotaHelper$ {
            }
            type WTPQuotaHelper_T = WTPQuotaHelper_S & WTPQuotaHelper$;
            interface WTPQuotaHelper extends WTPQuotaHelper_T {
            }
        }
        namespace kd.sdk.wtc.wtp.business.quota.summary{
            interface QTSummaryExpService_S {
            }
            interface QTSummaryExpService$ {
                query(queryParam:$.kd.bos.entity.report.ReportQueryParam,object_arg:any):$.kd.bos.algo.DataSet;
            }
            type QTSummaryExpService_T = QTSummaryExpService_S & QTSummaryExpService$;
            interface QTSummaryExpService extends QTSummaryExpService_T {
            }
            interface QTSummaryServiceDefault_S {
            }
            type QTSummaryServiceDefault_ST = QTSummaryExpService_S & QTSummaryServiceDefault_S;
            interface QTSummaryServiceDefault_C extends QTSummaryServiceDefault_ST {
                new():QTSummaryServiceDefault;
            }
            interface QTSummaryServiceDefault$ {
                /**
                 * 根据查询参数获取QFilter
                 *
                 * @param queryParam 查询入参
                 * @return 返回QFilter集合
                 */
                getQFilters(queryParam:$.kd.bos.entity.report.ReportQueryParam):$.java.util.List;
                /**
                 * 根据QFilter集合生成分批查询的DataSet
                 *
                 * @param qFilterList QFilter集合
                 * @return 分批查询的DataSet
                 */
                queryDataInBatch(qFilterList:$.java.util.List):$.kd.bos.algo.DataSet;
            }
            type QTSummaryServiceDefault_T = QTSummaryExpService & QTSummaryServiceDefault_S & QTSummaryServiceDefault$;
            interface QTSummaryServiceDefault extends QTSummaryServiceDefault_T {
            }
        }
        namespace kd.sdk.wtc.wtp.business.ruleengine{
            interface OnGenRuleEngineInputParamEvent_S {
            }
            interface OnGenRuleEngineInputParamEvent_C extends OnGenRuleEngineInputParamEvent_S {
                new(source:string,planVersionId:long,inputParamMap:$.java.util.Map,extendKeys:$.java.util.Set,extendMap:$.java.util.Map):OnGenRuleEngineInputParamEvent;
                /**
                 * 适用于单据类调用规则引擎的条件字段二开埋点构造方法
                 */
                new(calDate:Date,source:string,planVersionId:long,inputParamMap:$.java.util.Map,extendKeys:$.java.util.Set,extendMap:$.java.util.Map):OnGenRuleEngineInputParamEvent;
                /**
                 * 适用于定额核算调用规则引擎的条件字段二开埋点构造方法
                 */
                new(calDate:Date,source:string,planVersionId:long,inputParamMap:$.java.util.Map,extendKeys:$.java.util.Set,extendMap:$.java.util.Map,qteContextExt:kd.sdk.wtc.wtes.business.qte.QteContextExt):OnGenRuleEngineInputParamEvent;
                /**
                 * 适用于核算链（期间汇总核算链）调用规则引擎的条件字段二开埋点构造方法
                 */
                new(source:string,planVersionId:long,inputParamMap:$.java.util.Map,extendKeys:$.java.util.Set,extendMap:$.java.util.Map,tieAttPeriodContextExt:kd.sdk.wtc.wtes.business.tie.core.chain.period.TieAttPeriodContextExt,perAttPeriodExt:kd.sdk.wtc.wtes.business.tie.model.perattperiod.PerAttPeriodExt):OnGenRuleEngineInputParamEvent;
                /**
                 * 适用于核算链（单日核算链）调用规则引擎的条件字段二开埋点构造方法
                 */
                new(calDate:Date,source:string,planVersionId:long,inputParamMap:$.java.util.Map,extendKeys:$.java.util.Set,extendMap:$.java.util.Map,tieContextExt:kd.sdk.wtc.wtes.business.tie.core.chain.TieContextExt):OnGenRuleEngineInputParamEvent;
            }
            interface OnGenRuleEngineInputParamEvent$ {
                /**
                 * 获取计算日期
                 *
                 * @return calDate 计算日期
                 */
                getCalDate():Date;
                /**
                 * 获取扩展的入参key
                 *
                 * @return extendKeys 扩展的入参key
                 */
                getExtendKeys():$.java.util.Set;
                /**
                 * 获取扩展的入参字段map
                 *
                 * @return extendMap 扩展的入参字段map
                 */
                getExtendMap():$.java.util.Map;
                /**
                 * 获取规则引擎请求参数map
                 *
                 * @return inputParaMap 规则引擎请求参数map
                 */
                getInputParamMap():$.java.util.Map;
                /**
                 * 获取人员考勤期间对象
                 *
                 * @return perAttPeriodExt 人员考勤期间对象
                 */
                getPerAttPeriodExt():kd.sdk.wtc.wtes.business.tie.model.perattperiod.PerAttPeriodExt;
                /**
                 * 获取方案版本ID
                 *
                 * @return planVersionId 方案版本ID
                 */
                getPlanVersionId():long;
                /**
                 * 获取定额核算链上下文
                 * @return qteContextExt 获取定额核算链上下文
                 */
                getQteContextExt():kd.sdk.wtc.wtes.business.qte.QteContextExt;
                /**
                 * 获取规则引擎场景编码
                 *
                 * @return source 规则引擎场景编码
                 */
                getSource():string;
                /**
                 * 获取扩展来源
                 *
                 * @return type 扩展来源
                 */
                getSourceType():string;
                /**
                 * 获取考勤核算期间汇总上下文
                 *
                 * @return tieAttPeriodContextExt 考勤核算期间汇总上下文
                 */
                getTieAttPeriodContextExt():kd.sdk.wtc.wtes.business.tie.core.chain.period.TieAttPeriodContextExt;
                /**
                 * 获取考勤日明细核算链上下文
                 *
                 * @return tieContextExt 考勤日明细核算链上下文
                 */
                getTieContextExt():kd.sdk.wtc.wtes.business.tie.core.chain.TieContextExt;
                /**
                 * 设置扩展的入参字段map
                 *
                 * @param extendMap 扩展的入参字段map
                 */
                setExtendMap(extendMap:$.java.util.Map):void;
                /**
                 * 设置规则引擎请求参数map
                 *
                 * @param inputParamMap 规则引擎请求参数map
                 */
                setInputParamMap(inputParamMap:$.java.util.Map):void;
            }
            type OnGenRuleEngineInputParamEvent_T = OnGenRuleEngineInputParamEvent_S & OnGenRuleEngineInputParamEvent$;
            interface OnGenRuleEngineInputParamEvent extends OnGenRuleEngineInputParamEvent_T {
            }
            interface RuleEngineInputParamExtPlugin_S {
            }
            interface RuleEngineInputParamExtPlugin$ {
                /**
                 * <p>
                 * wtc_scene_tp_v2 出差场景
                 * wtc_scene_otp_v2 , wtc_scene_otp_v3加班场景
                 * wtc_scene_idp_v2 增减场景
                 * wtc_scene_attendplan_v2 出勤场景
                 * wtc_scene_exception_v2 异常场景
                 * wtc_scene_vacation_v2 休假场景
                 * wtc_scene_ad_v2 补签场景
                 * wtc_scene_quota_v2 定额方案场景
                 * 以上场景使用了规则引擎，且规则方案中输入参数包含了扩展字段，使用该方案的业务（比如考勤核算、休假单据）会调用该接口
                 * </p>
                 * <p>
                 * 入参包含了规则方案版本id、规则引擎条件入参map：inputParamMap、扩展的入参字段map：extendMap,规则场景编码：source、需要扩展的字段集合：extendKeys
                 * 如果扩展了入参标识，标识及对应的值需写入inputParamMap，如果是在inputParamMap里已存在的标识，只在该标识上扩展了业务字段，则更新inputParamMap里的该元素
                 * 无论是扩展新的入参标识还是在当前的入参标识上扩展字段，扩展的内容需写入extendMap，且写入的key需要和extendKeys的元素保持一致，注意：扩展的字段不能超过extendKeys集合的元素限制，否则会抛出异常。
                 * </p>
                 * <p>拓展示例：</p>
                 * <pre><code>
                 * 扩展案例参考：kd.sdk.wtc.wtp.business.ruleengine.demo.RuleEngineInputParamExtPluginDemo
                 * 定额规则扩展案例参考：kd.sdk.wtc.wtp.business.ruleengine.demo.QteRuleEngineInputParamExtPluginDemo
                 * </code></pre>
                 * @param onGenRuleEngineInputParamEvent 构建规则引擎入参扩展事件
                 */
                onGenInputParam(onGenRuleEngineInputParamEvent:OnGenRuleEngineInputParamEvent):void;
            }
            type RuleEngineInputParamExtPlugin_T = RuleEngineInputParamExtPlugin_S & RuleEngineInputParamExtPlugin$;
            interface RuleEngineInputParamExtPlugin extends RuleEngineInputParamExtPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtp.business.tripplan{
            interface TripPlanRuleQuery_S {
            }
            type TripPlanRuleQuery_ST = $.java.io.Serializable & TripPlanRuleQuery_S;
            interface TripPlanRuleQuery_C extends TripPlanRuleQuery_ST {
                /**
                 * 构造出差方案规则查询请求参数
                 *
                 * @param attFileBoId 考勤档案BoId, 不可传0
                 * @param queryDate   要查询的日期(yyyy-MM-dd)
                 * @param tripType    要查询的出差类型
                 */
                new(attFileBoId:long,queryDate:Date,tripType:long):TripPlanRuleQuery;
            }
            interface TripPlanRuleQuery$ {
                /**
                 * 获取考勤档案BoId
                 */
                getAttFileBoId():long;
                getEntryIndex():number;
                /**
                 * 获取要查询的日期(yyyy-MM-dd)
                 */
                getQueryDate():Date;
                getTpBillDy():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取要查询的出差类型（null查询全部类型）
                 */
                getTripType():long;
                setEntryIndex(entryIndex:number):void;
                setTpBillDy(tpBillDy:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type TripPlanRuleQuery_T = $.java.io.Serializable & TripPlanRuleQuery_S & TripPlanRuleQuery$;
            interface TripPlanRuleQuery extends TripPlanRuleQuery_T {
            }
        }
        namespace kd.sdk.wtc.wtpm{
            interface SdkWtcWtpmModule_S {
            }
            type SdkWtcWtpmModule_ST = $.kd.sdk.module.Module & SdkWtcWtpmModule_S;
            interface SdkWtcWtpmModule_C extends SdkWtcWtpmModule_ST {
                new():SdkWtcWtpmModule;
            }
            interface SdkWtcWtpmModule$ {
            }
            type SdkWtcWtpmModule_T = $.kd.sdk.module.Module & SdkWtcWtpmModule_S & SdkWtcWtpmModule$;
            interface SdkWtcWtpmModule extends SdkWtcWtpmModule_T {
            }
        }
        namespace kd.sdk.wtc.wtpm.business{
            interface WTPMSignCardHelper_S {
                /**
                 * 通过自定义的取卡匹配开始、结束日期，可指定的考勤档案BOID集合，执行自定义的取卡匹配任务
                 *
                 * @param cardMatchTaskParam     取卡匹配定时任务入参
                 */
                executeCardMatchTask(cardMatchTaskParam:kd.sdk.wtc.wtpm.business.cardmatch.CardMatchTaskParam):void;
                /**
                 * 通过自定义的取卡匹配开始、结束日期，可指定的考勤档案BOID集合，执行自定义的取卡匹配任务
                 *
                 * @param cardMatchTaskParam     取卡匹配定时任务入参
                 */
                executeCustomCardMatchTask(cardMatchTaskParam:kd.sdk.wtc.wtpm.business.cardmatch.CardMatchTaskParam):$.kd.bos.entity.api.ApiResult;
            }
            interface WTPMSignCardHelper_C extends WTPMSignCardHelper_S {
                new():WTPMSignCardHelper;
            }
            interface WTPMSignCardHelper$ {
            }
            type WTPMSignCardHelper_T = WTPMSignCardHelper_S & WTPMSignCardHelper$;
            interface WTPMSignCardHelper extends WTPMSignCardHelper_T {
            }
        }
        namespace kd.sdk.wtc.wtpm.business.cardmatch{
            interface AfterCardMatchEvent_S {
            }
            interface AfterCardMatchEvent_C extends AfterCardMatchEvent_S {
                new(taskVoExt:kd.sdk.wtc.wtpm.model.cardmatch.CardMatchTaskVoExt):AfterCardMatchEvent;
            }
            interface AfterCardMatchEvent$ {
                /**
                 * 获取需要替换的多次卡map，最外层map的key-vaule:(考勤档案boid-Map),第二层map的key-vaule:(班次日期-MultiCardExt)
                 */
                getMulTiCardExtMap():$.java.util.Map;
                /**
                 * 获取取卡匹配任务上下文信息
                 */
                getTaskVoExt():kd.sdk.wtc.wtpm.model.cardmatch.CardMatchTaskVoExt;
            }
            type AfterCardMatchEvent_T = AfterCardMatchEvent_S & AfterCardMatchEvent$;
            interface AfterCardMatchEvent extends AfterCardMatchEvent_T {
            }
            interface CardMatchIntersectionExtPlugin_S {
            }
            interface CardMatchIntersectionExtPlugin$ {
                /**
                 * 取卡匹配交集取卡前置扩展方法
                 *
                 * <p>
                 * 在交集取卡逻辑执行前，此方法可以取消交集取卡，采用常规的取卡方式取卡。通过设置BeforeCardMatchIntersectionEvent.setNeedIntersection()方法设置是否取消交集取卡。
                 * 进入此方法的前提条件：取卡交集范围外有原始卡
                 *
                 * </p>
                 *
                 * <p>扩展示例：请参考业务扩展场景kd.sdk.wtc.wtpm.business.cardmatch.CardMatchIntersectionExtPlugin的扩展说明，菜单路径：业务扩展平台->业务扩展场景</p>
                 * @param event 交集取卡前置设置事件
                 */
                beforeIntersection?(event:BeforeCardMatchIntersectionEvent):void;
            }
            type CardMatchIntersectionExtPlugin_T = CardMatchIntersectionExtPlugin_S & CardMatchIntersectionExtPlugin$;
            interface CardMatchIntersectionExtPlugin extends CardMatchIntersectionExtPlugin_T {
            }
            interface BeforeCardMatchIntersectionEvent_S {
            }
            interface BeforeCardMatchIntersectionEvent_C extends BeforeCardMatchIntersectionEvent_S {
                new(taskVoExt:kd.sdk.wtc.wtpm.model.cardmatch.CardMatchTaskVoExt,cardMatchVoExt:kd.sdk.wtc.wtpm.model.cardmatch.CardMatchVoExt,signCardExtList:$.java.util.List):BeforeCardMatchIntersectionEvent;
            }
            interface BeforeCardMatchIntersectionEvent$ {
                /**
                 * 获取取卡匹配上下文信息
                 */
                getMatchVoExt():kd.sdk.wtc.wtpm.model.cardmatch.CardMatchVoExt;
                /**
                 * 获取交集范围外的原始卡
                 */
                getSignCardExtList():$.java.util.List;
                /**
                 * 获取取卡匹配任务上下文信息
                 */
                getTaskVoExt():kd.sdk.wtc.wtpm.model.cardmatch.CardMatchTaskVoExt;
                /**
                 * 获取是否需要执行交集取卡逻辑
                 */
                isNeedIntersection():boolean;
                /**
                 * 设置是否需要执行交集取卡逻辑
                 */
                setNeedIntersection(needIntersection:boolean):void;
            }
            type BeforeCardMatchIntersectionEvent_T = BeforeCardMatchIntersectionEvent_S & BeforeCardMatchIntersectionEvent$;
            interface BeforeCardMatchIntersectionEvent extends BeforeCardMatchIntersectionEvent_T {
            }
            interface AfterCardMatchExtPlugin_S {
            }
            interface AfterCardMatchExtPlugin$ {
                /**
                 * 取卡匹配-取卡匹配计算，在匹配逻辑计算完成后，有效卡数据落库前会调用该接口。
                 *
                 * <p>
                 * 该扩展方法适用于有效卡-多次卡记录落库前修改多次卡分录的属性，修改后的数据必须写入AfterCardMatchEvent.getMulTiCardExtMap()，没有变化则不需要写入
                 * AfterCardMatchEvent.getTaskVoExt()方法可获取到取卡匹配逻辑的上下文信息，根据上下文信息修改多次卡分录属性。
                 * </p>
                 *
                 * <p>扩展示例：请参考业务扩展场景kd.sdk.wtc.wtpm.business.cardmatch.AfterCardMatchExtPlugin的扩展说明，菜单路径：业务扩展平台->业务扩展场景</p>
                 * @param event 取卡匹配逻辑计算后置设置事件
                 */
                adjustMultiCard?(event:AfterCardMatchEvent):void;
            }
            type AfterCardMatchExtPlugin_T = AfterCardMatchExtPlugin_S & AfterCardMatchExtPlugin$;
            interface AfterCardMatchExtPlugin extends AfterCardMatchExtPlugin_T {
            }
            interface CardMatchTaskParam_S {
            }
            type CardMatchTaskParam_ST = $.java.io.Serializable & CardMatchTaskParam_S;
            interface CardMatchTaskParam_C extends CardMatchTaskParam_ST {
                new():CardMatchTaskParam;
            }
            interface CardMatchTaskParam$ {
                /**
                 * 取卡匹配指定考勤档案BOID集合
                 *
                 * @return 取卡匹配指定考勤档案BOID集合
                 */
                getAttFileBoIds():$.java.util.Set;
                getAttOrgId():long;
                /**
                 * 获取任务创建人id
                 */
                getCreatorId():long;
                /**
                 * 任务结束日期
                 *
                 * @return 任务结束日期
                 */
                getEndDate():Date;
                /**
                 * 任务开始日期
                 *
                 * @return 任务开始日期
                 */
                getStartDate():Date;
                /**
                 * 取卡匹配任务描述
                 *
                 * @return 取卡匹配任务描述
                 */
                getTaskDesc():string;
                /**
                 * 获取取卡匹配任务类型：1-手动匹配；7-定时任务；8-批量补签
                 */
                getTaskType():string;
                /**
                 * 取卡匹配指定考勤档案BOID集合，不传则执行匹配所有考勤档案BOID（选填）
                 *
                 * @param attFileBoIds 取卡匹配指定考勤档案BOID集合，不传则执行匹配所有考勤档案BOID（选填）
                 */
                setAttFileBoIds(attFileBoIds:$.java.util.Set):void;
                setAttOrgId(attOrgId:long):void;
                /**
                 * 设置任务创建人id（选填）
                 */
                setCreatorId(creatorId:long):void;
                /**
                 * 任务结束日期
                 *
                 * @param endDate 任务结束日期
                 */
                setEndDate(endDate:Date):void;
                /**
                 * 任务开始日期
                 *
                 * @param startDate 任务开始日期
                 */
                setStartDate(startDate:Date):void;
                /**
                 * 取卡匹配任务描述（选填），200以内字符
                 *
                 * @param taskDesc 取卡匹配任务描述（选填），200以内字符
                 */
                setTaskDesc(taskDesc:string):void;
                /**
                 * 设置取卡匹配任务类型：1-手动匹配；7-定时任务；8-批量补签
                 */
                setTaskType(taskType:string):void;
            }
            type CardMatchTaskParam_T = $.java.io.Serializable & CardMatchTaskParam_S & CardMatchTaskParam$;
            interface CardMatchTaskParam extends CardMatchTaskParam_T {
            }
            interface CardMatchOffShiftExtPlugin_S {
            }
            interface CardMatchOffShiftExtPlugin$ {
                /**
                 * 取卡匹配-匹配off班（单档案单天）计算，获取当天off班无时段的取卡规则的取卡范围之后会调用改接口。
                 *
                 * <p>
                 * 可根据入参数据对入参的初始的取卡范围的开始时间秒数（int），取卡范围的结束时间秒数（int）进行处理并返回，支持负数。
                 * 比如人参的匹配日期为2023-10-01，开始时间秒数=7200，结束时间秒数=86399，说明初始的取卡范围为[2023-10-01 02:00:00~2023-10-01 23:59:59]
                 * 修改入参的开始时间秒数=-1200，结束时间秒数=93600。说明拓展后的取卡范围为[2023-09-30 23:40:00~2023-10-02 02:00:00]
                 * 不修改开始结束时间秒数则取卡范围无变化，也可只修改开始结束时间秒数其中之一，也可全修改。
                 * </p>
                 *
                 * <p>拓展示例：</p>
                 * <pre><code>
                 *     public void afterOffShiftTakeCardRange(OffShiftTakeCardRangeEvent event) {
                 *         // 根据入参信息获取匹配日期的取卡范围需要往前往后延多少时间(秒数)
                 *         event.setRangeStartSecords(event.getRangeStartSecords() - 1200);
                 *         event.setRangeEndSecords(event.getRangeEndSecords() + 7200);
                 *     }
                 * </code></pre>
                 * @param event off班无时段班次取卡范围后置设置事件
                 */
                afterOffShiftTakeCardRange?(event:OffShiftTakeCardRangeEvent):void;
            }
            type CardMatchOffShiftExtPlugin_T = CardMatchOffShiftExtPlugin_S & CardMatchOffShiftExtPlugin$;
            interface CardMatchOffShiftExtPlugin extends CardMatchOffShiftExtPlugin_T {
            }
            interface OffShiftTakeCardRangeEvent_S {
            }
            interface OffShiftTakeCardRangeEvent_C extends OffShiftTakeCardRangeEvent_S {
                new(attPersonId:long,matchDate:$.java.time.LocalDate,attFileBoId:long,shiftId:long,rangeStartSecords:number,rangeEndSecords:number):OffShiftTakeCardRangeEvent;
            }
            interface OffShiftTakeCardRangeEvent$ {
                /**
                 * 获取考勤档案BOID
                 */
                getAttFileBoId():long;
                /**
                 * 获取考勤人id
                 */
                getAttPersonId():long;
                /**
                 * 获取匹配日期
                 */
                getMatchDate():$.java.time.LocalDate;
                /**
                 * 获取取卡范围结束时间秒数
                 */
                getRangeEndSecords():number;
                /**
                 * 获取取卡范围开始时间秒数
                 */
                getRangeStartSecords():number;
                /**
                 * 获取班次版本id
                 */
                getShiftId():long;
                /**
                 * 设置考勤档案BOID
                 */
                setAttFileBoId(attFileBoId:long):void;
                /**
                 * 设置考勤人id
                 */
                setAttPersonId(attPersonId:long):void;
                /**
                 * 设置匹配日期
                 */
                setMatchDate(matchDate:$.java.time.LocalDate):void;
                /**
                 * 设置取卡范围结束时间秒数
                 */
                setRangeEndSecords(rangeEndSecords:number):void;
                /**
                 * 设置取卡范围开始时间秒数
                 */
                setRangeStartSecords(rangeStartSecords:number):void;
                /**
                 * 设置班次版本id
                 */
                setShiftId(shiftId:long):void;
            }
            type OffShiftTakeCardRangeEvent_T = OffShiftTakeCardRangeEvent_S & OffShiftTakeCardRangeEvent$;
            interface OffShiftTakeCardRangeEvent extends OffShiftTakeCardRangeEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtpm.business.punchcard{
            interface WTPMPunchCardHelper_S {
                /**
                 * 查询用户某日打卡详情、班次时段
                 *
                 * @param attPersonId 考勤人id
                 * @param startDate   开始日期
                 * @param endDate     结束日期
                 * @return Map<Date, Map < String, Object>> key:班次日期
                 * <pre>
                 * <p>
                 * 多次卡返回结构:
                 * {
                 * "type": "1",    --多次卡考勤方式
                 * "attfileboid" : 123456789L,
                 * "offshift": "true"/"false",
                 * "sign":         --打卡详情
                 * [
                 * {
                 * "mustsignpoint": "2022-05-01 09:00:00" -- 应打卡点(非off班无时段的班次且存在有效卡点才会设值)
                 * "needsignon": "true",   --需要打上班卡
                 * "hassignedon": "true",  --已打上班卡
                 * "signon": "2022-05-01 09:00:02",    --实际上班打卡点
                 * "signonaddress": "深圳金蝶软件园1F",  -- 实际上班打卡位置
                 * "needsignoff": "true",  --需要打下班卡
                 * "hassignedoff": "true", --已打下班卡
                 * "signoff": "2022-05-01 12:01:07",   --实际下班打卡点
                 * "signoffaddress": "深圳金蝶软件园3F"   --实际下班打卡位置
                 * <p>
                 * },
                 * {
                 * "needsignon": "false",  --需要打上班卡
                 * "hassignedon": "false", --已打上班卡
                 * "needsignoff": "true",  --需要打下班卡
                 * "hassignedoff": "false", --已打下班卡
                 * },
                 * {
                 * "needsignon": "false",  --需要打上班卡
                 * "hassignedon": "false", --已打上班卡
                 * "needsignoff": "true",  --需要打下班卡
                 * "hassignedoff": "true", --已打下班卡
                 * "mustsignpoint": "2022-05-01 18:00:00" -- 应打卡点(非off班无时段的班次且存在有效卡点才会设值)
                 * "signoff": "2022-05-02 02:21:45"    --实际下班打卡点
                 * "signoffaddress": "深圳金蝶软件园" --实际下班打卡位置
                 * }
                 * ],
                 * "shift":    --班次详情
                 * [   {
                 * "start": "2022-05-01 09:00:00", --班次时段1的上班卡点
                 * "end": "2022-05-01 12:00:00"    --班次时段1的下班卡点
                 * },
                 * {
                 * "start": "2022-05-01 14:00:00", --班次时段2的上班卡点
                 * "end": "2022-05-01 18:00:00"    --班次时段2的下班卡点
                 * },
                 * {
                 * "start": "2022-05-01 19:00:00", --班次时段3的上班卡点
                 * "end": "2022-05-02 02:00:00"    --班次时段3的下班卡点
                 * }
                 * ]
                 * }
                 * </p>
                 *
                 * <p>
                 * 一次卡返回结构:
                 * {
                 * "type": "2",    --一次卡考勤方式
                 * "attfileboid" : 123456789L,
                 * "offshift": "true"/"false",
                 * "sign": "2022-05-01 09:00:02",    --一次卡打卡点
                 * "signaddress": "深圳金蝶软件园3F",    --一次卡打卡位置
                 * "shift":    --班次详情
                 * [   {
                 * "start": "2022-05-01 09:00:00", --班次时段1的上班卡点
                 * "end": "2022-05-01 12:00:00"    --班次时段1的下班卡点
                 * },
                 * {
                 * "start": "2022-05-01 14:00:00", --班次时段2的上班卡点
                 * "end": "2022-05-01 18:00:00"    --班次时段2的下班卡点
                 * },
                 * {
                 * "start": "2022-05-01 19:00:00", --班次时段3的上班卡点
                 * "end": "2022-05-02 02:00:00"    --班次时段3的下班卡点
                 * }
                 * ]
                 * }
                 * </p>
                 * <p>
                 * 不打卡返回结构:
                 * {
                 * "type": "3",    --考勤方式为不打卡
                 * "attfileboid" : 123456789L,
                 * "offshift": "true"/"false",
                 * "shift":    --班次详情
                 * [   {
                 * "start": "2022-05-01 09:00:00", --班次时段1的上班卡点
                 * "end": "2022-05-01 12:00:00"    --班次时段1的下班卡点
                 * },
                 * {
                 * "start": "2022-05-01 14:00:00", --班次时段2的上班卡点
                 * "end": "2022-05-01 18:00:00"    --班次时段2的下班卡点
                 * },
                 * {
                 * "start": "2022-05-01 19:00:00", --班次时段3的上班卡点
                 * "end": "2022-05-02 02:00:00"    --班次时段3的下班卡点
                 * }]}
                 * </p>
                 * </pre>
                 */
                getPunchCardDetail(attPersonId:long,startDate:Date,endDate:Date):$.java.util.Map;
            }
            interface WTPMPunchCardHelper_C extends WTPMPunchCardHelper_S {
                new():WTPMPunchCardHelper;
            }
            interface WTPMPunchCardHelper$ {
            }
            type WTPMPunchCardHelper_T = WTPMPunchCardHelper_S & WTPMPunchCardHelper$;
            interface WTPMPunchCardHelper extends WTPMPunchCardHelper_T {
            }
        }
        namespace kd.sdk.wtc.wtpm.model.cardmatch{
            interface CardMatchTaskVoExt_S {
            }
            interface CardMatchTaskVoExt$ {
                /**
                 * 获取考勤档案和考勤卡号附表映射关系，key:考勤档案boid-value:考勤卡号list
                 */
                getAttCardMap():$.java.util.Map;
                /**
                 * 获取考勤档案boid集合
                 */
                getAttFileBoIds():$.java.util.Set;
                /**
                 * 获取考勤档案和考勤方式附表映射关系，key:考勤档案boid-value:考勤方式list
                 */
                getAttModeMap():$.java.util.Map;
                /**
                 * 获取考勤人id集合
                 */
                getAttPersonIds():$.java.util.Set;
                /**
                 * 获取取卡匹配任务结束日期
                 */
                getEndDate():Date;
                /**
                 * 获取取卡匹配任务上下文信息
                 */
                getMultiCardSet():$.java.util.Set;
                /**
                 * 获取考勤人和考勤档案映射关系，key:考勤人id-value:考勤档案list
                 */
                getPersonAttFileMap():$.java.util.Map;
                /**
                 * 获取取卡配置历史版本信息，key:取卡配置boid-value:取卡配置历史版本
                 */
                getRuleConfigMap():$.java.util.Map;
                /**
                 * 获取取卡规则历史版本信息，key:取卡规则boid-value:取卡规则历史版本
                 */
                getRuleMap():$.java.util.Map;
                /**
                 * 获取班次历史版本信息，key:班次boid-value:班次历史版本
                 */
                getShiftMap():$.java.util.Map;
                /**
                 * 获取取卡匹配任务开始日期
                 */
                getStartDate():Date;
                /**
                 * 获取取卡匹配切片任务id
                 */
                getSubTaskId():long;
                /**
                 * 获取取卡匹配任务id
                 */
                getTaskId():long;
                /**
                 * 获取考勤档案和时区附表映射关系，key:考勤档案boid-value:时区list
                 */
                getTimeZoneMap():$.java.util.Map;
                /**
                 * 获取休假单信息，key:考勤档案boid
                 */
                getVaBillMap():$.java.util.Map;
            }
            type CardMatchTaskVoExt_T = CardMatchTaskVoExt_S & CardMatchTaskVoExt$;
            interface CardMatchTaskVoExt extends CardMatchTaskVoExt_T {
            }
            interface MultiCardExtStd_S {
            }
            interface MultiCardExtStd$ {
                /**
                 * 获取考勤卡号
                 */
                getAttCard():string;
                /**
                 * 获取考勤档案boid
                 */
                getAttFileBoId():long;
                /**
                 * 获取考勤档案版本id
                 */
                getAttFileId():long;
                /**
                 * 获取考勤档案的时区id
                 */
                getAttFileTimeZoneId():long;
                /**
                 * 获取考勤人
                 */
                getAttPersonId():long;
                /**
                 * 获取日期类型
                 */
                getDateTypeId():long;
                /**
                 * 获取多次卡分录
                 */
                getEntryList():$.java.util.List;
                /**
                 * 获取考勤管理组织
                 */
                getOrgId():long;
                /**
                 * 班次归属日期(短日期)
                 */
                getShiftDate():$.java.time.LocalDate;
                /**
                 * 获取班次id
                 */
                getShiftId():long;
                /**
                 * 获取星期
                 */
                getWeek():string;
                /**
                 * 获取是否无时段
                 */
                isNotPlan():boolean;
                /**
                 * 获取是否off班
                 */
                isOffShift():boolean;
            }
            type MultiCardExtStd_T = MultiCardExtStd_S & MultiCardExtStd$;
            interface MultiCardExtStd extends MultiCardExtStd_T {
            }
            interface MultiCardExt_S {
            }
            interface MultiCardExt_C extends MultiCardExt_S {
                new():MultiCardExt;
            }
            interface MultiCardExt$ {
                /**
                 * 获取考勤卡号
                 */
                getAttCard():string;
                /**
                 * 获取考勤档案boid
                 */
                getAttFileBoId():long;
                /**
                 * 获取考勤档案版本id
                 */
                getAttFileId():long;
                /**
                 * 获取考勤档案的时区id
                 */
                getAttFileTimeZoneId():long;
                /**
                 * 获取考勤人id
                 */
                getAttPersonId():long;
                /**
                 * 获取日期类型
                 */
                getDateTypeId():long;
                /**
                 * 获取多次卡分录
                 */
                getEntryList():$.java.util.List;
                /**
                 * 获取多次卡主键
                 */
                getId():long;
                /**
                 * 获取考勤管理组织
                 */
                getOrgId():long;
                /**
                 * 获取班次归属日期(短日期)
                 */
                getShiftDate():$.java.time.LocalDate;
                /**
                 * 获取班次版本id
                 */
                getShiftId():long;
                /**
                 * 获取星期
                 */
                getWeek():string;
                /**
                 * 获取是否无时段
                 */
                isNotPlan():boolean;
                /**
                 * 获取是否off班
                 */
                isOffShift():boolean;
                /**
                 * 设置考勤卡号
                 */
                setAttCard(attCard:string):void;
                /**
                 * 设置考勤档案boid
                 */
                setAttFileBoId(attFileBoId:long):void;
                /**
                 * 设置考勤档案版本id
                 */
                setAttFileId(attFileId:long):void;
                /**
                 * 设置考勤档案的时区id
                 */
                setAttFileTimeZoneId(attFileTimeZoneId:long):void;
                /**
                 * 设置考勤人id
                 */
                setAttPersonId(attPersonId:long):void;
                /**
                 * 设置日期类型
                 */
                setDateTypeId(dateTypeId:long):void;
                /**
                 * 设置多次卡分录
                 */
                setEntryList(entryList:$.java.util.List):void;
                /**
                 * 设置多次卡主键
                 */
                setId(id:long):void;
                /**
                 * 设置是否无时段
                 */
                setNotPlan(notPlan:boolean):void;
                /**
                 * 设置是否off班
                 */
                setOffShift(offShift:boolean):void;
                /**
                 * 设置考勤管理组织
                 */
                setOrgId(orgId:long):void;
                /**
                 * 设置班次归属日期(短日期)
                 */
                setShiftDate(shiftDate:$.java.time.LocalDate):void;
                /**
                 * 设置班次版本id
                 */
                setShiftId(shiftId:long):void;
                /**
                 * 设置星期
                 */
                setWeek(week:string):void;
            }
            type MultiCardExt_T = MultiCardExt_S & MultiCardExt$;
            interface MultiCardExt extends MultiCardExt_T {
            }
            interface CardMatchVoExt_S {
            }
            interface CardMatchVoExt$ {
                /**
                 * 获取考勤档案boid
                 */
                getAttFileBoId():long;
                /**
                 * 获取考勤档案id
                 */
                getAttFileId():long;
                /**
                 * 获取考勤方式 "1"-多次卡，"2"-一次卡，"3"-不打卡
                 */
                getAttMode():string;
                /**
                 * 获取考勤人id
                 */
                getAttPersonId():long;
                /**
                 * 获取匹配日期
                 */
                getLocalDate():$.java.time.LocalDate;
                /**
                 * 获取匹配日期
                 */
                getMatchDate():Date;
                /**
                 * 获取下个班次第一个应打卡点(0时区)，下个班次为无时段off班时则不赋值
                 */
                getNextShiftMustSignFirst():$.java.time.LocalDateTime;
                /**
                 * 获取后一天时差
                 */
                getNextTimeDiff():number;
                /**
                 * 获取时差
                 */
                getTimeDiff():number;
                /**
                 * 获取时区
                 */
                getTimeZoneId():long;
                /**
                 * 获取下个班次是否为无时段off班
                 */
                nextOffShift():boolean;
            }
            type CardMatchVoExt_T = CardMatchVoExt_S & CardMatchVoExt$;
            interface CardMatchVoExt extends CardMatchVoExt_T {
            }
            interface MultiCardEntryExt_S {
            }
            type MultiCardEntryExt_ST = $.java.io.Serializable & MultiCardEntryExt_S;
            interface MultiCardEntryExt_C extends MultiCardEntryExt_ST {
                new():MultiCardEntryExt;
            }
            interface MultiCardEntryExt$ {
                /**
                 * 获取进出标识
                 */
                getAccessTag():string;
                /**
                 * 获取考勤人id
                 */
                getAttPersonId():long;
                /**
                 * 获取打卡设备
                 */
                getDeviceId():long;
                /**
                 * 获取有效卡点
                 */
                getEffectivePoint():$.java.time.LocalDateTime;
                /**
                 * 获取非标品的扩展字段，key：字段名称，value：字段值
                 */
                getExtFieldMap():$.java.util.Map;
                /**
                 * 获取班次日期
                 */
                getMatchDate():$.java.time.LocalDate;
                /**
                 * 获取有效卡点(0时区)
                 */
                getMultiPointUtc():$.java.time.LocalDateTime;
                /**
                 * 获取应打卡点
                 */
                getMustPoint():$.java.time.LocalDateTime;
                /**
                 * 获取应打卡点(0时区)
                 */
                getMustPointUtc():$.java.time.LocalDateTime;
                /**
                 * 获取卡点说明
                 */
                getPointDescId():long;
                /**
                 * 获取卡点符号标识
                 */
                getPointTag():string;
                /**
                 * 获取预留业务字段1
                 */
                getPresetBiz1():string;
                /**
                 * 获取预留业务字段2
                 */
                getPresetBiz2():string;
                /**
                 * 获取原始卡ID
                 */
                getSignCardId():long;
                /**
                 * 获取打卡来源
                 */
                getSourceId():long;
                /**
                 * 获取时区id
                 */
                getTimeZoneId():long;
                /**
                 * 设置进出标识
                 */
                setAccessTag(accessTag:string):void;
                /**
                 * 设置考勤人id
                 */
                setAttPersonId(attPersonId:long):void;
                /**
                 * 设置打卡设备
                 */
                setDeviceId(deviceId:long):void;
                /**
                 * 设置有效卡点
                 */
                setEffectivePoint(effectivePoint:$.java.time.LocalDateTime):void;
                /**
                 * 设置非标品的扩展字段，key：字段名称，value：字段值
                 */
                setExtFieldMap(extFieldMap:$.java.util.Map):void;
                /**
                 * 设置班次日期
                 */
                setMatchDate(matchDate:$.java.time.LocalDate):void;
                /**
                 * 设置有效卡点(0时区)
                 */
                setMultiPointUtc(multiPointUtc:$.java.time.LocalDateTime):void;
                /**
                 * 设置应打卡点
                 */
                setMustPoint(mustPoint:$.java.time.LocalDateTime):void;
                /**
                 * 设置应打卡点(0时区)
                 */
                setMustPointUtc(mustPointUtc:$.java.time.LocalDateTime):void;
                /**
                 * 设置卡点说明
                 */
                setPointDescId(pointDescId:long):void;
                /**
                 * 设置卡点符号标识
                 */
                setPointTag(pointTag:string):void;
                /**
                 * 设置预留业务字段1
                 */
                setPresetBiz1(presetBiz1:string):void;
                /**
                 * 设置预留业务字段2
                 */
                setPresetBiz2(presetBiz2:string):void;
                /**
                 * 设置原始卡ID
                 */
                setSignCardId(signCardId:long):void;
                /**
                 * 设置打卡来源
                 */
                setSourceId(sourceId:long):void;
                /**
                 * 设置时区id
                 */
                setTimeZoneId(timeZoneId:long):void;
            }
            type MultiCardEntryExt_T = $.java.io.Serializable & MultiCardEntryExt_S & MultiCardEntryExt$;
            interface MultiCardEntryExt extends MultiCardEntryExt_T {
            }
            interface MultiCardEntryExtStd_S {
            }
            interface MultiCardEntryExtStd$ {
                /**
                 * 获取进出标识
                 */
                getAccessTag():string;
                /**
                 * 获取考勤人id
                 */
                getAttPersonId():long;
                /**
                 * 获取打卡设备
                 */
                getDeviceId():long;
                /**
                 * 获取有效卡点
                 */
                getEffectivePoint():$.java.time.LocalDateTime;
                /**
                 * 获取班次日期
                 */
                getMatchDate():$.java.time.LocalDate;
                /**
                 * 获取有效卡点(0时区)
                 */
                getMultiPointUtc():$.java.time.LocalDateTime;
                /**
                 * 获取应打卡点
                 */
                getMustPoint():$.java.time.LocalDateTime;
                /**
                 * 获取应打卡点,(0时区)
                 */
                getMustPointUtc():$.java.time.LocalDateTime;
                /**
                 * 获取卡点说明
                 */
                getPointDescId():long;
                /**
                 * 获取卡点符号标识
                 */
                getPointTag():string;
                /**
                 * 获取预留业务字段1
                 */
                getPresetBiz1():string;
                /**
                 * 获取预留业务字段2
                 */
                getPresetBiz2():string;
                /**
                 * 获取原始卡ID
                 */
                getSignCardId():long;
                /**
                 * 获取打卡来源
                 */
                getSourceId():long;
                /**
                 * 获取时区id
                 */
                getTimeZoneId():long;
            }
            type MultiCardEntryExtStd_T = MultiCardEntryExtStd_S & MultiCardEntryExtStd$;
            interface MultiCardEntryExtStd extends MultiCardEntryExtStd_T {
            }
            interface SignCardExt_S {
            }
            interface SignCardExt$ {
                /**
                 * 获取进出卡 "on"-进 “off”出
                 */
                getAccessTag():string;
                /**
                 * 获取考勤卡号
                 */
                getAttCard():string;
                /**
                 * 获取考勤档案boid
                 */
                getAttFileBoId():long;
                /**
                 * 获取考勤档案id
                 */
                getAttFileId():long;
                /**
                 * 获取考勤人id
                 */
                getAttPersonId():long;
                /**
                 * 获取主键
                 */
                getId():long;
                /**
                 * 获取预留业务字段1
                 */
                getPresetBiz1():string;
                /**
                 * 获取预留业务字段2
                 */
                getPresetBiz2():string;
                /**
                 * 获取打卡时间"yyyy-MM-dd HH:mm:ss"
                 */
                getSignDateTime():Date;
                /**
                 * 获取打卡时间(0时区)"yyyy-MM-dd HH:mm:ss"
                 */
                getSignDateTimeUtc():Date;
                /**
                 * 获取打卡时间"yyyy-MM-dd HH:mm:ss"
                 */
                getSignPoint():$.java.time.LocalDateTime;
                /**
                 * 获取打卡时间(0时区)"yyyy-MM-dd HH:mm:ss"
                 */
                getSignPointUtc():$.java.time.LocalDateTime;
                /**
                 * 获取打卡来源
                 */
                getSource():long;
                /**
                 * 获取时差
                 */
                getTimeDiff():number;
                /**
                 * 获取时区id
                 */
                getTimeZoneId():long;
            }
            type SignCardExt_T = SignCardExt_S & SignCardExt$;
            interface SignCardExt extends SignCardExt_T {
            }
        }
        namespace kd.sdk.wtc.wts{
            interface SdkWtcWtsModule_S {
            }
            type SdkWtcWtsModule_ST = $.kd.sdk.module.Module & SdkWtcWtsModule_S;
            interface SdkWtcWtsModule_C extends SdkWtcWtsModule_ST {
                new():SdkWtcWtsModule;
            }
            interface SdkWtcWtsModule$ {
            }
            type SdkWtcWtsModule_T = $.kd.sdk.module.Module & SdkWtcWtsModule_S & SdkWtcWtsModule$;
            interface SdkWtcWtsModule extends SdkWtcWtsModule_T {
            }
        }
        namespace kd.sdk.wtc.wts.business.roster{
            interface WTSRosterHelper_S {
                /**
                 * 按月询指定考勤档案的人员排班表
                 *
                 * @param attFileBoId 考勤人id
                 * @param startDate  开始日期 格式：yyyy-MM-dd  如：2023-01-01 不允许为空
                 * @param endDate   结束日期 格式：yyyy-MM-dd  如：2023-01-01 不允许为空
                 * @return 返回类型为Map
                 * 返回值说明：<br/>
                 * key:  日期：yyyy-MM-dd  如："2022-05-21"<br/>
                 * value: Map<String, Object><br/>
                 * Map<String, Map<String, Object>> <br/>
                 * key:  日期：yyyy-MM-dd  如："2022-05-21" <br/>
                 * value: Map<String, Object> 内容格式如下：<br/>
                 * <table>
                 *     <tr>
                 *         <th>参数名称</th>
                 *         <th>一级参数</th>
                 *         <th>二级参数</th>
                 *         <th>参数类型</th>
                 *         <th>是否必录</th>
                 *         <th>参数描述</th>
                 *     </tr>
                 *     <tr>
                 *         <td>是否OFF班次</td>
                 *         <td>isoff</td>
                 *         <td>-</td>
                 *         <td>Boolean</td>
                 *         <td>是</td>
                 *         <td>说明：可能的值 false: 非off班 ，true: off班</td>
                 *     </tr>
                 *      <tr>
                 *         <td>节假日名称集合</td>
                 *         <td>holidaynameset</td>
                 *         <td>-</td>
                 *         <td>Set&lt;String&gt;集合</td>
                 *         <td>否</td>
                 *         <td>说明：节假日名称集合，例如：{"劳动节","端午节"}</td>
                 *     </tr>
                 *     <tr>
                 *         <td>节假日id集合</td>
                 *         <td>holidayidset</td>
                 *         <td>-</td>
                 *         <td>Set&lt;Long&gt;集合</td>
                 *         <td>否</td>
                 *         <td>说明：节假日id集合，例如：{1410170658523971584L}</td>
                 *     </tr>
                 *     <tr>
                 *         <td>日期属性名称</td>
                 *         <td>dateattributename</td>
                 *         <td>-</td>
                 *         <td>String</td>
                 *         <td>是</td>
                 *         <td>说明：日期属性名称，例如：工作日</td>
                 *     </tr>
                 *      <tr>
                 *         <td>日期属性编码</td>
                 *         <td>dateattributecode</td>
                 *         <td>-</td>
                 *         <td>String</td>
                 *         <td>是</td>
                 *         <td>说明：日期属性编码，例如：DS-0002 详情参照下面特殊说明</td>
                 *     </tr>
                 *     <tr>
                 *         <td>班次id</td>
                 *         <td>shiftid</td>
                 *         <td>-</td>
                 *         <td>Long</td>
                 *         <td>是</td>
                 *         <td>说明：该日期对应的班次版本id</td>
                 *     </tr>
                 * </table>
                 * 特别说明：日期属性为枚举类型（id,编码，名称），可能的值有以下3种<br/>
                 * 1: OFFDAY(1220227289099276288L,"DS-0002", "休息日")<br/>
                 * 2: HOLIDAY(1220227377297100800L,"DS-0003", "节假日")<br/>
                 * 3: WORKDAY(1220227453272723456L,"DS-0001", "工作日")<br/>
                 */
                queryRosterDataByFileId(attFileBoId:long,startDate:Date,endDate:Date):$.java.util.Map;
                /**
                 * 按月询指定考勤档案的人员排班表
                 *
                 * @param attFileBoIds 考勤档案ids
                 * @param startDate  开始日期 格式：yyyy-MM-dd  如：2023-01-01 不允许为空
                 * @param endDate   结束日期 格式：yyyy-MM-dd  如：2023-01-01 不允许为空
                 * @return 返回类型为Map
                 * 返回值说明：<br/>
                 * key: 档案boid 如：1410170658523971584L <br/>
                 * value: Map<String, Map<String, Object>> 可参考单人<br/>
                 * key:  日期：yyyy-MM-dd  如："2022-05-21"<br/>
                 * value: Map<String, Object><br/>
                 * Map<String, Map<String, Object>> <br/>
                 * key:  日期：yyyy-MM-dd  如："2022-05-21" <br/>
                 * value: Map<String, Object> 内容格式如下：<br/>
                 * <table>
                 *     <tr>
                 *         <th>参数名称</th>
                 *         <th>一级参数</th>
                 *         <th>二级参数</th>
                 *         <th>参数类型</th>
                 *         <th>是否必录</th>
                 *         <th>参数描述</th>
                 *     </tr>
                 *     <tr>
                 *         <td>是否OFF班次</td>
                 *         <td>isoff</td>
                 *         <td>-</td>
                 *         <td>Boolean</td>
                 *         <td>是</td>
                 *         <td>说明：可能的值 false: 非off班 ，true: off班</td>
                 *     </tr>
                 *      <tr>
                 *         <td>节假日名称集合</td>
                 *         <td>holidaynameset</td>
                 *         <td>-</td>
                 *         <td>Set&lt;String&gt;集合</td>
                 *         <td>否</td>
                 *         <td>说明：节假日名称集合，例如：{"劳动节","端午节"}</td>
                 *     </tr>
                 *     <tr>
                 *         <td>节假日id集合</td>
                 *         <td>holidayidset</td>
                 *         <td>-</td>
                 *         <td>Set&lt;Long&gt;集合</td>
                 *         <td>否</td>
                 *         <td>说明：节假日id集合，例如：{1410170658523971584L}</td>
                 *     </tr>
                 *     <tr>
                 *         <td>日期属性名称</td>
                 *         <td>dateattributename</td>
                 *         <td>-</td>
                 *         <td>String</td>
                 *         <td>是</td>
                 *         <td>说明：日期属性名称，例如：工作日</td>
                 *     </tr>
                 *      <tr>
                 *         <td>日期属性编码</td>
                 *         <td>dateattributecode</td>
                 *         <td>-</td>
                 *         <td>String</td>
                 *         <td>是</td>
                 *         <td>说明：日期属性编码，例如：DS-0002 详情参照下面特殊说明</td>
                 *     </tr>
                 *     <tr>
                 *         <td>班次id</td>
                 *         <td>shiftid</td>
                 *         <td>-</td>
                 *         <td>Long</td>
                 *         <td>是</td>
                 *         <td>说明：该日期对应的班次版本id</td>
                 *     </tr>
                 * </table>
                 * 特别说明：日期属性为枚举类型（id,编码，名称），可能的值有以下3种<br/>
                 * 1: OFFDAY(1220227289099276288L,"DS-0002", "休息日")<br/>
                 * 2: HOLIDAY(1220227377297100800L,"DS-0003", "节假日")<br/>
                 * 3: WORKDAY(1220227453272723456L,"DS-0001", "工作日")<br/>
                 */
                queryRosterDataByFileIds(attFileBoIds:$.java.util.List,startDate:Date,endDate:Date):$.java.util.Map;
                /**
                 * 按月询指定考勤人员的人员排班表
                 *
                 * @param personId 考勤人id
                 * @param startDate  开始日期 格式：yyyy-MM-dd  如：2023-01-01 不允许为空
                 * @param endDate   结束日期 格式：yyyy-MM-dd  如：2023-01-01 不允许为空
                 * @return 返回类型为Map
                 * 返回值说明：<br/>
                 * key:  日期：yyyy-MM-dd  如："2022-05-21"<br/>
                 * value: Map<String, Object><br/>
                 * <table>
                 *     <tr>
                 *         <th>参数名称</th>
                 *         <th>一级参数</th>
                 *         <th>二级参数</th>
                 *         <th>参数类型</th>
                 *         <th>是否必录</th>
                 *         <th>参数描述</th>
                 *     </tr>
                 *     <tr>
                 *         <td>是否OFF班次</td>
                 *         <td>isoff</td>
                 *         <td>-</td>
                 *         <td>Boolean</td>
                 *         <td>是</td>
                 *         <td>说明：可能的值 false: 非off班 ，true: off班</td>
                 *     </tr>
                 *      <tr>
                 *         <td>节假日名称集合</td>
                 *         <td>holidaynameset</td>
                 *         <td>-</td>
                 *         <td>Set&lt;String&gt;集合</td>
                 *         <td>否</td>
                 *         <td>说明：节假日名称集合，例如：{"劳动节","端午节"}</td>
                 *     </tr>
                 *     <tr>
                 *         <td>节假日id集合</td>
                 *         <td>holidayidset</td>
                 *         <td>-</td>
                 *         <td>Set&lt;Long&gt;集合</td>
                 *         <td>否</td>
                 *         <td>说明：节假日id集合，例如：{1410170658523971584L}</td>
                 *     </tr>
                 *     <tr>
                 *         <td>日期属性名称</td>
                 *         <td>dateattributename</td>
                 *         <td>-</td>
                 *         <td>String</td>
                 *         <td>是</td>
                 *         <td>说明：日期属性名称，例如：工作日</td>
                 *     </tr>
                 *      <tr>
                 *         <td>日期属性编码</td>
                 *         <td>dateattributecode</td>
                 *         <td>-</td>
                 *         <td>String</td>
                 *         <td>是</td>
                 *         <td>说明： 日期属性编码，详情参照下面特殊说明</td>
                 *     </tr>
                 *     <tr>
                 *         <td>班次id</td>
                 *         <td>shiftid</td>
                 *         <td>-</td>
                 *         <td>Long</td>
                 *         <td>是</td>
                 *         <td>说明：该日期对应的班次版本id</td>
                 *     </tr>
                 * </table>
                 * 特别说明：日期属性为枚举类型（id,编码，名称），可能的值有以下3种<br/>
                 * 1: OFFDAY(1220227289099276288L,"DS-0002", "休息日")<br/>
                 * 2: HOLIDAY(1220227377297100800L,"DS-0003", "节假日")<br/>
                 * 3: WORKDAY(1220227453272723456L,"DS-0001", "工作日")<br/>
                 */
                queryRosterDataByPersonId(personId:long,startDate:Date,endDate:Date):$.java.util.Map;
                /**
                 * 按月询指定考勤人员的人员排班表
                 *
                 * @param personIds 考勤人id
                 * @param startDate  开始日期 格式：yyyy-MM-dd  如：2023-01-01 不允许为空
                 * @param endDate   结束日期 格式：yyyy-MM-dd  如：2023-01-01 不允许为空
                 * @return 返回类型为Map
                 * 返回值说明：<br/>
                 * key: 档案boid 如：1410170658523971584L <br/>
                 * value: Map<String, Map<String, Object>> 可参考单人<br/>
                 * key:  日期：yyyy-MM-dd  如："2022-05-21"<br/>
                 * value: Map<String, Object><br/>
                 * <table>
                 *     <tr>
                 *         <th>参数名称</th>
                 *         <th>一级参数</th>
                 *         <th>二级参数</th>
                 *         <th>参数类型</th>
                 *         <th>是否必录</th>
                 *         <th>参数描述</th>
                 *     </tr>
                 *     <tr>
                 *         <td>是否OFF班次</td>
                 *         <td>isoff</td>
                 *         <td>-</td>
                 *         <td>Boolean</td>
                 *         <td>是</td>
                 *         <td>说明：可能的值 false: 非off班 ，true: off班</td>
                 *     </tr>
                 *      <tr>
                 *         <td>节假日名称集合</td>
                 *         <td>holidaynameset</td>
                 *         <td>-</td>
                 *         <td>Set&lt;String&gt;集合</td>
                 *         <td>否</td>
                 *         <td>说明：节假日名称集合，例如：{"劳动节","端午节"}</td>
                 *     </tr>
                 *     <tr>
                 *         <td>节假日id集合</td>
                 *         <td>holidayidset</td>
                 *         <td>-</td>
                 *         <td>Set&lt;Long&gt;集合</td>
                 *         <td>否</td>
                 *         <td>说明：节假日id集合，例如：{1410170658523971584L}</td>
                 *     </tr>
                 *     <tr>
                 *         <td>日期属性名称</td>
                 *         <td>dateattributename</td>
                 *         <td>-</td>
                 *         <td>String</td>
                 *         <td>是</td>
                 *         <td>说明：日期属性名称，例如：工作日</td>
                 *     </tr>
                 *      <tr>
                 *         <td>日期属性编码</td>
                 *         <td>dateattributecode</td>
                 *         <td>-</td>
                 *         <td>String</td>
                 *         <td>是</td>
                 *         <td>说明： 日期属性编码，详情参照下面特殊说明</td>
                 *     </tr>
                 *     <tr>
                 *         <td>班次id</td>
                 *         <td>shiftid</td>
                 *         <td>-</td>
                 *         <td>Long</td>
                 *         <td>是</td>
                 *         <td>说明：该日期对应的班次版本id</td>
                 *     </tr>
                 * </table>
                 * 特别说明：日期属性为枚举类型（id,编码，名称），可能的值有以下3种<br/>
                 * 1: OFFDAY(1220227289099276288L,"DS-0002", "休息日")<br/>
                 * 2: HOLIDAY(1220227377297100800L,"DS-0003", "节假日")<br/>
                 * 3: WORKDAY(1220227453272723456L,"DS-0001", "工作日")<br/>
                 */
                queryRosterDataByPersonIds(personIds:$.java.util.List,startDate:Date,endDate:Date):$.java.util.Map;
            }
            interface WTSRosterHelper_C extends WTSRosterHelper_S {
                new():WTSRosterHelper;
            }
            interface WTSRosterHelper$ {
            }
            type WTSRosterHelper_T = WTSRosterHelper_S & WTSRosterHelper$;
            interface WTSRosterHelper extends WTSRosterHelper_T {
            }
            interface OnRosterValidatorEvent_S {
            }
            interface OnRosterValidatorEvent_C extends OnRosterValidatorEvent_S {
                new():OnRosterValidatorEvent;
            }
            interface OnRosterValidatorEvent$ {
                getAlreadyExistPersonRosterData():$.kd.bos.dataentity.entity.DynamicObject[];
                getDynamicObjectList():$.java.util.Collection;
                getFileAndRosterDateWithShiftVid():$.java.util.Map;
                getOperateType():string;
                getOriginalRosterData():$.java.util.List;
                getResult():$.java.util.Map;
                getRosterLogId():long;
                setAlreadyExistPersonRosterData(alreadyExistPersonRosterData:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                setDynamicObjectList(dynamicObjectList:$.java.util.Collection):void;
                setFileAndRosterDateWithShiftVid(fileAndRosterDateWithShiftVid:$.java.util.Map):void;
                setOperateType(operateType:string):void;
                setOriginalRosterData(originalRosterData:$.java.util.List):void;
                setResult(result:$.java.util.Map):void;
                setRosterLogId(rosterLogId:long):void;
            }
            type OnRosterValidatorEvent_T = OnRosterValidatorEvent_S & OnRosterValidatorEvent$;
            interface OnRosterValidatorEvent extends OnRosterValidatorEvent_T {
            }
            interface RosterValidatorExtPlugin_S {
                readonly FIELD_ATTFILEBASE:string;
                readonly FIELD_ID:string;
                readonly FIELD_ROSTERDATE:string;
            }
            interface RosterValidatorExtPlugin$ {
                /**
                 * 排班校验扩展接口
                 * <p>示例代码可以参考排班校验扩展场景，扩展场景编码：kd.sdk.wtc.wts.business.roster.RosterValidatorExtPlugin</p>
                 *
                 * @param event 排班校验事件
                 */
                onValidate(event:OnRosterValidatorEvent):void;
            }
            type RosterValidatorExtPlugin_T = RosterValidatorExtPlugin_S & RosterValidatorExtPlugin$;
            interface RosterValidatorExtPlugin extends RosterValidatorExtPlugin_T {
            }
            interface RosterValidatorExt_S {
                readonly ACTUAL:string;
                readonly PLAN:string;
            }
            interface RosterValidatorExt$ {
                /**
                 * 排班校验扩展接口
                 *
                 * @param attFileBoIds 档案boid集合
                 * @param startDate 开始日期
                 * @param endDate 结束日期
                 * @return 返回类型为Map
                 * 返回值说明：<br/>
                 * key:  档案boid 类型为Long 如：1575282784384182272L <br/>
                 * value: 校验失败信息 类型为Map 格式如下<br/>
                 *     key:  日期：yyyy-MM-dd  类型String 如："2023-10-01" <br/>
                 *     value: 类型为Map 格式如下：
                 *         key： 类型为String 可存在值：”plan“,"actual"
                 *         value: 类型为String 错误信息 如：”档案已封存，不可排班。“
                 * 例如：
                 * {
                 * "1575282784384182272":{
                 *      "2022-08-31":{
                 * 		    "actual":"档案已封存，不可排班。",
                 * 		    "plan":"档案已封存，不可排班。"
                 *        }
                 *    }
                 * }
                 */
                onValidate(attFileBoIds:$.java.util.Collection,startDate:Date,endDate:Date):$.java.util.Map;
            }
            type RosterValidatorExt_T = RosterValidatorExt_S & RosterValidatorExt$;
            interface RosterValidatorExt extends RosterValidatorExt_T {
            }
        }
        namespace kd.sdk.wtc.wtss{
            interface SdkWtcWtssModule_S {
            }
            type SdkWtcWtssModule_ST = $.kd.sdk.module.Module & SdkWtcWtssModule_S;
            interface SdkWtcWtssModule_C extends SdkWtcWtssModule_ST {
                new():SdkWtcWtssModule;
            }
            interface SdkWtcWtssModule$ {
            }
            type SdkWtcWtssModule_T = $.kd.sdk.module.Module & SdkWtcWtssModule_S & SdkWtcWtssModule$;
            interface SdkWtcWtssModule extends SdkWtcWtssModule_T {
            }
        }
        namespace kd.sdk.wtc.wtss.business.homepage{
            interface BeforeShowApplyPageEvent_S {
            }
            interface BeforeShowApplyPageEvent_C extends BeforeShowApplyPageEvent_S {
                /**
                 * 打开单据申请页面事件构造器
                 *
                 * @param billType          单据类型
                 * @param applyType         申请类型
                 * @param formShowParameter 表单参数
                 */
                new(billType:kd.sdk.wtc.wtbs.common.enums.WTCBillType,applyType:kd.sdk.wtc.wtbs.common.enums.WTCApplyType,formShowParameter:$.kd.bos.form.FormShowParameter):BeforeShowApplyPageEvent;
            }
            interface BeforeShowApplyPageEvent$ {
                /**
                 * 获取申请类型
                 */
                getApplyType():kd.sdk.wtc.wtbs.common.enums.WTCApplyType;
                /**
                 * 获取单据类型
                 */
                getBillType():kd.sdk.wtc.wtbs.common.enums.WTCBillType;
                /**
                 * 获取表单参数
                 *
                 * @return 表单参数
                 */
                getFormShowParameter():$.kd.bos.form.FormShowParameter;
            }
            type BeforeShowApplyPageEvent_T = BeforeShowApplyPageEvent_S & BeforeShowApplyPageEvent$;
            interface BeforeShowApplyPageEvent extends BeforeShowApplyPageEvent_T {
            }
            interface ISignAddressReplacePlugin_S {
            }
            interface ISignAddressReplacePlugin$ {
                /**
                 * 选择【我的假勤】(PC端、移动端)点击日期时展示的【考勤地点】使用的扩展字段，该扩展字段会作为考勤地点展示
                 *
                 * @param event
                 */
                replaceSignAddress?(event:SignAddressChooseEvent):void;
            }
            type ISignAddressReplacePlugin_T = ISignAddressReplacePlugin_S & ISignAddressReplacePlugin$;
            interface ISignAddressReplacePlugin extends ISignAddressReplacePlugin_T {
            }
            interface BillReplaceExtPlugin_S {
            }
            interface BillReplaceExtPlugin$ {
                /**
                 * PC端或移动端打开单据申请时触发的事件
                 * <p>
                 * 可以通过 {@link BeforeShowApplyPageEvent#getFormShowParameter()} 设置打开替换页面所需要的参数；
                 *
                 * @param event 二开单据申请替换扩展事件
                 */
                beforeShowApplyPage?(event:BeforeShowApplyPageEvent):void;
                /**
                 * PC端或移动端打开单据详情时触发的事件
                 * <p>
                 * 可以通过 {@link BeforeShowApplyPageEvent#getFormShowParameter()} 设置打开替换页面所需要的参数；
                 *
                 * @param event 二开单据申请替换扩展事件
                 */
                beforeShowDetailPage?(event:BeforeShowDetailPageEvent):void;
                /**
                 * 移动端打开单据申请选择面板时触发的事件
                 * <p>
                 * 可以通过 {@link OnFilterMobileBillListEvent#setBillTypeRights(Map)} 设置打开筛选面板时禁用的单据类型
                 *
                 * @param event 二开单据申请替换扩展事件
                 */
                onFilterMobileBillList?(event:OnFilterMobileBillListEvent):void;
                /**
                 * 移动端单据列表查询扩展接口
                 *
                 * @param event 单据列表查询事件
                 */
                onQueryMobileBillList?(event:OnQueryMobileBillListEvent):void;
            }
            type BillReplaceExtPlugin_T = BillReplaceExtPlugin_S & BillReplaceExtPlugin$;
            interface BillReplaceExtPlugin extends BillReplaceExtPlugin_T {
            }
            interface MobileBillListDto_S {
            }
            interface MobileBillListDto_C extends MobileBillListDto_S {
                new():MobileBillListDto;
            }
            interface MobileBillListDto$ {
                getApplyType():string;
                getBillStatus():string;
                getCreatorId():long;
                getCreatorName():string;
                getEndDate():Date;
                getId():long;
                getModifyTime():Date;
                getPersonId():long;
                getPersonName():string;
                getStartDate():Date;
                getSubmitDate():Date;
                setApplyType(applyType:string):void;
                setBillStatus(billStatus:string):void;
                setCreatorId(creatorId:long):void;
                setCreatorName(creatorName:string):void;
                setEndDate(endDate:Date):void;
                setId(id:long):void;
                setModifyTime(modifyTime:Date):void;
                setPersonId(personId:long):void;
                setPersonName(personName:string):void;
                setStartDate(startDate:Date):void;
                setSubmitDate(submitDate:Date):void;
            }
            type MobileBillListDto_T = MobileBillListDto_S & MobileBillListDto$;
            interface MobileBillListDto extends MobileBillListDto_T {
            }
            interface WtssHomepageServiceHelper_S {
                /**
                 * 获取日明细考勤项目中的异常类型，存在多条时，合并返回
                 *
                 * @param mobileSchemeId 考勤方案id
                 * @param workspace      A-个人（现仅支持A）
                 * @return 异常类型配置列表
                 */
                getAbnormalConfig(mobileSchemeId:long,workspace:string):$.java.util.Set;
            }
            interface WtssHomepageServiceHelper_C extends WtssHomepageServiceHelper_S {
                new():WtssHomepageServiceHelper;
            }
            interface WtssHomepageServiceHelper$ {
            }
            type WtssHomepageServiceHelper_T = WtssHomepageServiceHelper_S & WtssHomepageServiceHelper$;
            interface WtssHomepageServiceHelper extends WtssHomepageServiceHelper_T {
            }
            interface OnFilterMobileBillListEvent_S {
            }
            interface OnFilterMobileBillListEvent_C extends OnFilterMobileBillListEvent_S {
                new():OnFilterMobileBillListEvent;
            }
            interface OnFilterMobileBillListEvent$ {
                /**
                 * 设置是否有权限查看对应的单据类型
                 */
                getBillTypeRights():$.java.util.Map;
                /**
                 * 设置是否有权限查看对应的单据类型
                 */
                setBillTypeRights(billTypeRights:$.java.util.Map):void;
            }
            type OnFilterMobileBillListEvent_T = OnFilterMobileBillListEvent_S & OnFilterMobileBillListEvent$;
            interface OnFilterMobileBillListEvent extends OnFilterMobileBillListEvent_T {
            }
            interface OnQueryMobileBillListEvent_S {
            }
            interface OnQueryMobileBillListEvent_C extends OnQueryMobileBillListEvent_S {
                new():OnQueryMobileBillListEvent;
            }
            interface OnQueryMobileBillListEvent$ {
                /**
                 * 当前应用ID，可以用于控权
                 */
                getAppId():string;
                getAttPersonId():long;
                /**
                 * 查询的单据实体
                 */
                getBillData():MobileBillListDto[];
                getBillType():kd.sdk.wtc.wtbs.common.enums.WTCBillType;
                getOrgId():long;
                /**
                 * 页大小
                 */
                getPageSize():number;
                /**
                 * 页开始
                 */
                getPageStart():number;
                /**
                 * 二开扩展查询的总记录数，默认值为-1
                 * <p>
                 * 如果返回-1表示没有正确执行二开扩展接口，系统将执行标品查询
                 */
                getRowCount():number;
                /**
                 * 用户搜索的单据状态编码列表
                 */
                getSearchBillStatus():$.java.util.List;
                /**
                 * 用户搜索的结束日期
                 */
                getSearchEndDate():Date;
                /**
                 * 用户搜索框输入的姓名
                 */
                getSearchPersonName():string;
                /**
                 * 用户搜索的开始日期
                 */
                getSearchStartDate():Date;
                getUserId():long;
                isOnlyCount():boolean;
                /**
                 * 设置分页查询到的单据信息，二开扩展需要调用该方法
                 *
                 * @param billData 分页查询到的单据信息
                 */
                setBillData(billData:MobileBillListDto[]):void;
                /**
                 * 设置查询的总记录数，二开扩展需要调用该方法
                 *
                 * @param rowCount 查询的总记录数
                 */
                setRowCount(rowCount:number):void;
            }
            type OnQueryMobileBillListEvent_T = OnQueryMobileBillListEvent_S & OnQueryMobileBillListEvent$;
            interface OnQueryMobileBillListEvent extends OnQueryMobileBillListEvent_T {
            }
            interface BeforeChooseApplyTypeEvent_S {
            }
            interface BeforeChooseApplyTypeEvent_C extends BeforeChooseApplyTypeEvent_S {
                new(billType:kd.sdk.wtc.wtbs.common.enums.WTCBillType):BeforeChooseApplyTypeEvent;
            }
            interface BeforeChooseApplyTypeEvent$ {
                /**
                 * 获取单据类型
                 */
                getBillType():kd.sdk.wtc.wtbs.common.enums.WTCBillType;
                /**
                 * 获取点击单据申请时是否展示选项面板
                 */
                getShowChoices():boolean;
                /**
                 * 设置点击单据申请时是否展示选项面板
                 */
                setShowChoices(showChoices:boolean):void;
            }
            type BeforeChooseApplyTypeEvent_T = BeforeChooseApplyTypeEvent_S & BeforeChooseApplyTypeEvent$;
            interface BeforeChooseApplyTypeEvent extends BeforeChooseApplyTypeEvent_T {
            }
            enum SignAddressChooseEvent$ChoosePreSetBiz {
                PRESETBIZ1,
                PRESETBIZ2
            }
            interface BeforeShowDetailPageEvent_S {
            }
            type BeforeShowDetailPageEvent_ST = BeforeShowApplyPageEvent_S & BeforeShowDetailPageEvent_S;
            interface BeforeShowDetailPageEvent_C extends BeforeShowDetailPageEvent_ST {
                /**
                 * 打开单据详情页面事件构造器
                 *
                 * @param billType          单据类型
                 * @param applyType         申请类型
                 * @param formShowParameter 表单参数
                 */
                new(billType:kd.sdk.wtc.wtbs.common.enums.WTCBillType,applyType:kd.sdk.wtc.wtbs.common.enums.WTCApplyType,formShowParameter:$.kd.bos.form.FormShowParameter):BeforeShowDetailPageEvent;
            }
            interface BeforeShowDetailPageEvent$ {
            }
            type BeforeShowDetailPageEvent_T = BeforeShowApplyPageEvent & BeforeShowDetailPageEvent_S & BeforeShowDetailPageEvent$;
            interface BeforeShowDetailPageEvent extends BeforeShowDetailPageEvent_T {
            }
            interface SignAddressChooseEvent_S {
            }
            interface SignAddressChooseEvent_C extends SignAddressChooseEvent_S {
                new():SignAddressChooseEvent;
            }
            interface SignAddressChooseEvent$ {
                getUseColumn():SignAddressChooseEvent$ChoosePreSetBiz;
                setUseColumn(useColumn:SignAddressChooseEvent$ChoosePreSetBiz):void;
            }
            type SignAddressChooseEvent_T = SignAddressChooseEvent_S & SignAddressChooseEvent$;
            interface SignAddressChooseEvent extends SignAddressChooseEvent_T {
            }
        }
        namespace kd.sdk.wtc.wtss.business.spi.homepage{
            interface WtssHomepageService_S {
                /**
                 * 获取SchemaServiceSpi的示例对象
                 * @return SchemaServiceSpi的实例对象
                 */
                get():WtssHomepageService;
            }
            interface WtssHomepageService$ {
                /**
                 * 获取日明细考勤项目中的异常类型，存在多条时，合并返回
                 *
                 * @param mobileSchemeId 考勤方案id
                 * @param workspace      A-个人  B-团体
                 * @return 异常类型配置列表
                 */
                getAbnormalConfig(mobileSchemeId:long,workspace:string):$.java.util.Set;
            }
            type WtssHomepageService_T = WtssHomepageService_S & WtssHomepageService$;
            interface WtssHomepageService extends WtssHomepageService_T {
            }
        }
        namespace kd.sdk.wtc.wtss.business.teamhome{
            interface AttStatisticTargetQueryParam_S {
            }
            interface AttStatisticTargetQueryParam_C extends AttStatisticTargetQueryParam_S {
                new():AttStatisticTargetQueryParam;
            }
            interface AttStatisticTargetQueryParam$ {
                /**
                 * 获取挂靠行政组织id
                 *
                 * @return 返回行政组织id
                 */
                getAffiliateAdminOrgId():long;
                /**
                 * 获取档案Map<档案boId,考勤人id>
                 */
                getAttFileMap():$.java.util.Map;
                /**
                 * 获取档案版本id集合
                 *
                 * @return 返回档案版本id集合
                 */
                getFileVidSet():$.java.util.Set;
                /**
                 * 获取期间集合
                 */
                getPeriodEntrySet():$.java.util.Set;
                /**
                 * 获取查询某天
                 */
                getQueryDate():Date;
                /**
                 * 获取查询范围结束
                 */
                getQueryEndDate():Date;
                /**
                 * 获取查询范围开始
                 */
                getQueryStartDate():Date;
                /**
                 * 设置行政组织id
                 *
                 * @param affiliateAdminOrgId 行政组织id
                 */
                setAffiliateAdminOrgId(affiliateAdminOrgId:long):void;
                /**
                 * 设置档案Map<档案boId,考勤人id>
                 */
                setAttFileMap(attFileMap:$.java.util.Map):void;
                /**
                 * 设置档案版本id集合
                 *
                 * @param fileVidSet 档案版本id集合
                 */
                setFileVidSet(fileVidSet:$.java.util.Set):void;
                /**
                 * 设置期间集合
                 */
                setPeriodEntrySet(periodEntrySet:$.java.util.Set):void;
                /**
                 * 设置查询某天
                 */
                setQueryDate(queryDate:Date):void;
                /**
                 * 设置查询范围结束
                 */
                setQueryEndDate(queryEndDate:Date):void;
                /**
                 * 设置查询范围开始
                 */
                setQueryStartDate(queryStartDate:Date):void;
                /**
                 * 获取档案boId SET
                 */
                thenAttFileSet():$.java.util.Set;
            }
            type AttStatisticTargetQueryParam_T = AttStatisticTargetQueryParam_S & AttStatisticTargetQueryParam$;
            interface AttStatisticTargetQueryParam extends AttStatisticTargetQueryParam_T {
            }
            interface AfterInitAttStatisticAdminOrgEvent_S {
            }
            interface AfterInitAttStatisticAdminOrgEvent_C extends AfterInitAttStatisticAdminOrgEvent_S {
                new():AfterInitAttStatisticAdminOrgEvent;
            }
            interface AfterInitAttStatisticAdminOrgEvent$ {
                /**
                 * 获取初始化的可选择查询的行政组织集合
                 *
                 * @return Collection<AttStatisticAdminOrgParam>
                 */
                getAttStatisticAdminOrgParams():$.java.util.Collection;
                /**
                 * 获取当前登录人的自然人id
                 *
                 * @return currentPersonId
                 */
                getCurrentPersonId():long;
                /**
                 * 设置初始化的可选择查询的行政组织集合
                 *
                 * @param attStatisticAdminOrgParams 初始化的可选择查询的行政组织集合
                 */
                setAttStatisticAdminOrgParams(attStatisticAdminOrgParams:$.java.util.Collection):void;
                /**
                 * 设置当前登录人的自然人id
                 *
                 * @param currentPersonId 前登录人的自然人id
                 */
                setCurrentPersonId(currentPersonId:long):void;
            }
            type AfterInitAttStatisticAdminOrgEvent_T = AfterInitAttStatisticAdminOrgEvent_S & AfterInitAttStatisticAdminOrgEvent$;
            interface AfterInitAttStatisticAdminOrgEvent extends AfterInitAttStatisticAdminOrgEvent_T {
            }
            interface AttStatisticQueryExtPlugin_S {
            }
            interface AttStatisticQueryExtPlugin$ {
                /**
                 * 团队假勤初始化可查询的行政组织后置方法
                 * <p>
                 * 可以在团队假勤可查询的行政组织初始化后，调整可查询的行政组织
                 *
                 * @param attStatisticAdminOrgEvent 团队假勤初始化可查询的行政组织参数
                 */
                afterInitAdminOrg?(attStatisticAdminOrgEvent:AfterInitAttStatisticAdminOrgEvent):void;
                /**
                 * 团队假勤查询统计前置事件
                 * <p>
                 * 团队假勤查询统计前调整需要统计的考勤档案版本
                 *
                 * @param beforeQueryAttStatisticEvent 团队假勤查询统计参数
                 */
                beforeAttStatistic?(beforeQueryAttStatisticEvent:BeforeQueryAttStatisticEvent):void;
            }
            type AttStatisticQueryExtPlugin_T = AttStatisticQueryExtPlugin_S & AttStatisticQueryExtPlugin$;
            interface AttStatisticQueryExtPlugin extends AttStatisticQueryExtPlugin_T {
            }
            interface AttStatisticAdminOrgParam_S {
            }
            interface AttStatisticAdminOrgParam_C extends AttStatisticAdminOrgParam_S {
                new():AttStatisticAdminOrgParam;
            }
            interface AttStatisticAdminOrgParam$ {
                /**
                 * 获取行政组织id
                 *
                 * @return id
                 */
                getBoId():long;
                /**
                 * 获取行政组织可查询的结束时间
                 *
                 * @return LocalDate
                 */
                getEndDate():$.java.time.LocalDate;
                /**
                 * 获取行政组织可查询的开始时间
                 *
                 * @return LocalDate
                 */
                getStartDate():$.java.time.LocalDate;
                /**
                 * 设置行政组织id
                 *
                 * @param boId 行政组织id
                 */
                setBoId(boId:long):void;
                /**
                 * 设置行政组织可查询的结束时间
                 *
                 * @param endDate 行政组织可查询的结束时间
                 */
                setEndDate(endDate:$.java.time.LocalDate):void;
                /**
                 * 设置行政组织可查询的开始时间
                 *
                 * @param startDate 政组织可查询的开始时间
                 */
                setStartDate(startDate:$.java.time.LocalDate):void;
            }
            type AttStatisticAdminOrgParam_T = AttStatisticAdminOrgParam_S & AttStatisticAdminOrgParam$;
            interface AttStatisticAdminOrgParam extends AttStatisticAdminOrgParam_T {
            }
            interface BeforeQueryAttStatisticEvent_S {
            }
            interface BeforeQueryAttStatisticEvent_C extends BeforeQueryAttStatisticEvent_S {
                new():BeforeQueryAttStatisticEvent;
            }
            interface BeforeQueryAttStatisticEvent$ {
                /**
                 * 获取待统计的考勤档案版本数据
                 *
                 * @return Collection<AttFileVersion>
                 */
                getAttFileVersions():$.java.util.Collection;
                /**
                 * 获取当前登录人的自然人id
                 *
                 * @return long
                 */
                getCurrentPersonId():long;
                /**
                 * 设置待统计的考勤档案版本数据
                 *
                 * @param attFileVersions 待统计的考勤档案版本数据
                 */
                setAttFileVersions(attFileVersions:$.java.util.Collection):void;
                /**
                 * 设置当前登录人的自然人id
                 * @param currentPersonId 当前登录人的自然人id
                 */
                setCurrentPersonId(currentPersonId:long):void;
            }
            type BeforeQueryAttStatisticEvent_T = BeforeQueryAttStatisticEvent_S & BeforeQueryAttStatisticEvent$;
            interface BeforeQueryAttStatisticEvent extends BeforeQueryAttStatisticEvent_T {
            }
            interface AttTargetQueryExpandService_S {
            }
            interface AttTargetQueryExpandService$ {
                /**
                 * @param queryParam 指标查询参数
                 * @param kpiId      指标id
                 * @return Map<Long, Double>  下钻详情 "header": List<Map<String, String>>对应的列， "body": Map<String, List<Map<String, String>>>  对应的数据
                 */
                getDetailMap(queryParam:AttStatisticTargetQueryParam,kpiId:long):$.java.util.Map;
                /**
                 * @param queryParam 指标查询参数
                 * @param kpiId      指标id
                 * @return Map<Long, Double>  key 档案boId，value 统计值
                 */
                getTargetChartData(queryParam:AttStatisticTargetQueryParam,kpiId:long):$.java.util.Map;
                /**
                 * @param queryParam 指标查询参数
                 * @param kpiId      指标id
                 * @return Pair<String, String>  key 统计值，value 统计单位
                 */
                getTargetStatisticsData(queryParam:AttStatisticTargetQueryParam,kpiId:long):kd.bos.util.Pair;
            }
            type AttTargetQueryExpandService_T = AttTargetQueryExpandService_S & AttTargetQueryExpandService$;
            interface AttTargetQueryExpandService extends AttTargetQueryExpandService_T {
            }
        }
        namespace kd.sdk.wtc.wtte{
            interface SdkWtcWtteModule_S {
            }
            type SdkWtcWtteModule_ST = $.kd.sdk.module.Module & SdkWtcWtteModule_S;
            interface SdkWtcWtteModule_C extends SdkWtcWtteModule_ST {
                new():SdkWtcWtteModule;
            }
            interface SdkWtcWtteModule$ {
            }
            type SdkWtcWtteModule_T = $.kd.sdk.module.Module & SdkWtcWtteModule_S & SdkWtcWtteModule$;
            interface SdkWtcWtteModule extends SdkWtcWtteModule_T {
            }
        }
        namespace kd.sdk.wtc.wtte.business{
            interface WTTEServiceHelper_S {
                /**
                 * 发起考勤结算任务
                 * 描述：此方法支持按期间做结算，结算时需要指定结算类型、考勤期间和考勤档案（挂靠行政组织），当传入的是挂靠行政组织时，会通过挂靠行政组织查询考勤档案
                 *      此方法仅创建分布式任务，创建任务成功后就会返回结果，如果需要在任务执行后做业务处理，请使用分布式任务的埋点
                 *
                 * @param attSettleTaskReq 发起考勤核算请求
                 * @return 考勤结算发起响应结果
                 */
                dispatchAttSettleTask(attSettleTaskReq:kd.sdk.wtc.wtte.business.settle.AttSettleTaskReq):kd.sdk.wtc.wtte.business.settle.AttSettleTaskResp;
            }
            interface WTTEServiceHelper_C extends WTTEServiceHelper_S {
                new():WTTEServiceHelper;
            }
            interface WTTEServiceHelper$ {
            }
            type WTTEServiceHelper_T = WTTEServiceHelper_S & WTTEServiceHelper$;
            interface WTTEServiceHelper extends WTTEServiceHelper_T {
            }
        }
        namespace kd.sdk.wtc.wtte.business.attrecord{
            interface WTTEAttRecordHelper_S {
                /**
                 * 查询条件内人员的考勤项目考勤期间汇总值，接口无值时返回空Map
                 *
                 * @param perAttPeriodId 考勤期间id（必填）
                 * @param attItemSet     考勤项目boId集合（必填）
                 * @param attFileSet     档案boId List（必填）
                 * @return Map<档案boId, Map < 考勤项目boId ， 考勤项目统计值>>
                 */
                getAttItemValueByPeriod(perAttPeriodId:long,attItemSet:$.java.util.Set,attFileSet:$.java.util.Set):$.java.util.Map;
            }
            interface WTTEAttRecordHelper_C extends WTTEAttRecordHelper_S {
                new():WTTEAttRecordHelper;
            }
            interface WTTEAttRecordHelper$ {
            }
            type WTTEAttRecordHelper_T = WTTEAttRecordHelper_S & WTTEAttRecordHelper$;
            interface WTTEAttRecordHelper extends WTTEAttRecordHelper_T {
            }
        }
        namespace kd.sdk.wtc.wtte.business.attrecord.report{
            interface AttRecordDailyItemRptExtPlugin_S {
            }
            interface AttRecordDailyItemRptExtPlugin$ {
            }
            type AttRecordDailyItemRptExtPlugin_T = AttRecordRptExtPlugin & AttRecordDailyItemRptExtPlugin_S & AttRecordDailyItemRptExtPlugin$;
            interface AttRecordDailyItemRptExtPlugin extends AttRecordDailyItemRptExtPlugin_T {
            }
            interface AttRecordPeriodItemRptExtPlugin_S {
            }
            interface AttRecordPeriodItemRptExtPlugin$ {
            }
            type AttRecordPeriodItemRptExtPlugin_T = AttRecordRptExtPlugin & AttRecordPeriodItemRptExtPlugin_S & AttRecordPeriodItemRptExtPlugin$;
            interface AttRecordPeriodItemRptExtPlugin extends AttRecordPeriodItemRptExtPlugin_T {
            }
            interface AttRecordDailyRptExtPlugin_S {
            }
            interface AttRecordDailyRptExtPlugin$ {
            }
            type AttRecordDailyRptExtPlugin_T = AttRecordRptExtPlugin & AttRecordDailyRptExtPlugin_S & AttRecordDailyRptExtPlugin$;
            interface AttRecordDailyRptExtPlugin extends AttRecordDailyRptExtPlugin_T {
            }
            interface OnGetBaseSortEvent_S {
            }
            interface OnGetBaseSortEvent_C extends OnGetBaseSortEvent_S {
                new(defBaseSort:string):OnGetBaseSortEvent;
            }
            interface OnGetBaseSortEvent$ {
                getDefBaseSort():string;
                /**
                 * 设置自定义的排序
                 *
                 * @param defBaseSort 排序方式
                 */
                setDefBaseSort(defBaseSort:string):void;
            }
            type OnGetBaseSortEvent_T = OnGetBaseSortEvent_S & OnGetBaseSortEvent$;
            interface OnGetBaseSortEvent extends OnGetBaseSortEvent_T {
            }
            interface OnGetDetailQFiltersEvent_S {
            }
            interface OnGetDetailQFiltersEvent_C extends OnGetDetailQFiltersEvent_S {
                new(defaultDetailQFilterList:$.java.util.List,reportQueryParam:$.kd.bos.entity.report.ReportQueryParam):OnGetDetailQFiltersEvent;
            }
            interface OnGetDetailQFiltersEvent$ {
                getDefaultDetailQFilterList():$.java.util.List;
                getReportQueryParam():$.kd.bos.entity.report.ReportQueryParam;
                setDefaultDetailQFilterList(defaultDetailQFilterList:$.java.util.List):void;
            }
            type OnGetDetailQFiltersEvent_T = OnGetDetailQFiltersEvent_S & OnGetDetailQFiltersEvent$;
            interface OnGetDetailQFiltersEvent extends OnGetDetailQFiltersEvent_T {
            }
            interface AttRecordRptExtPlugin_S {
            }
            interface AttRecordRptExtPlugin$ {
                getBaseSort?(ongetBaseSortEvent:OnGetBaseSortEvent):void;
                getDetailSort?(onGetDetailSortEvent:OnGetDetailSortEvent):void;
                onGetBaseQFilters?(onGetBaseQFiltersEvent:OnGetBaseQFiltersEvent):void;
                onGetDetailQFilters?(onGetDetailQFiltersEvent:OnGetDetailQFiltersEvent):void;
            }
            type AttRecordRptExtPlugin_T = AttRecordRptExtPlugin_S & AttRecordRptExtPlugin$;
            interface AttRecordRptExtPlugin extends AttRecordRptExtPlugin_T {
            }
            interface OnGetDetailSortEvent_S {
            }
            interface OnGetDetailSortEvent_C extends OnGetDetailSortEvent_S {
                new(defDetailSort:string):OnGetDetailSortEvent;
            }
            interface OnGetDetailSortEvent$ {
                getDefDetailSort():string;
                setDefDetailSort(defDetailSort:string):void;
            }
            type OnGetDetailSortEvent_T = OnGetDetailSortEvent_S & OnGetDetailSortEvent$;
            interface OnGetDetailSortEvent extends OnGetDetailSortEvent_T {
            }
            interface OnGetBaseQFiltersEvent_S {
            }
            interface OnGetBaseQFiltersEvent_C extends OnGetBaseQFiltersEvent_S {
                new(defaultBaseQFilterList:$.java.util.List,reportQueryParam:$.kd.bos.entity.report.ReportQueryParam):OnGetBaseQFiltersEvent;
            }
            interface OnGetBaseQFiltersEvent$ {
                getDefaultBaseQFilterList():$.java.util.List;
                getReportQueryParam():$.kd.bos.entity.report.ReportQueryParam;
                setDefaultBaseQFilterList(defaultBaseQFilterList:$.java.util.List):void;
            }
            type OnGetBaseQFiltersEvent_T = OnGetBaseQFiltersEvent_S & OnGetBaseQFiltersEvent$;
            interface OnGetBaseQFiltersEvent extends OnGetBaseQFiltersEvent_T {
            }
            interface AttRecordPeriodRptExtPlugin_S {
            }
            interface AttRecordPeriodRptExtPlugin$ {
            }
            type AttRecordPeriodRptExtPlugin_T = AttRecordRptExtPlugin & AttRecordPeriodRptExtPlugin_S & AttRecordPeriodRptExtPlugin$;
            interface AttRecordPeriodRptExtPlugin extends AttRecordPeriodRptExtPlugin_T {
            }
        }
        namespace kd.sdk.wtc.wtte.business.exrecord{
            interface WTTEExRecordHelper_S {
                /**
                 * 获取人员在对应归属日期的一个异常信息
                 *
                 * @param personId 考勤人id
                 * @param dutyDay      归属日期 yyyy-MM-dd
                 * @param exRecordIds      异常类型id集合
                 * @return key: 应打卡点 punchcardPoint value 2022-10-01 08:00,2022-10-01 18:00
                 * <pre>
                 * key: 异常类型 exType value 主键id  1320384650887095296
                 * {
                 * 晚走  1320384650887095296
                 * 早到  1320384483332989952
                 * 缺卡  1320384356908327936
                 * 旷工  1320384239123833856
                 * 早退  1320384079815828480
                 * 迟到  1320383951981782016
                 * }
                 * key: 异常处理方式 exProcess value 1452940499953387520,1452940383955717120
                 * {
                 * 休假	1452940499953387520
                 * 加班	1452940383955717120
                 * 出差	1452940620564793344
                 * 补签 1452940872415971328
                 * }
                 * key: 出勤时段 shiftCard value  8:00,12:00,14:00,18:00
                 * </pre>
                 */
                getAttExInfo(personId:long,dutyDay:$.java.time.LocalDate,exRecordIds:$.java.util.Set):$.java.util.List;
            }
            interface WTTEExRecordHelper_C extends WTTEExRecordHelper_S {
                new():WTTEExRecordHelper;
            }
            interface WTTEExRecordHelper$ {
            }
            type WTTEExRecordHelper_T = WTTEExRecordHelper_S & WTTEExRecordHelper$;
            interface WTTEExRecordHelper extends WTTEExRecordHelper_T {
            }
        }
        namespace kd.sdk.wtc.wtte.business.qttask{
            interface QTTaskReq_S {
            }
            type QTTaskReq_ST = $.java.io.Serializable & QTTaskReq_S;
            interface QTTaskReq_C extends QTTaskReq_ST {
                new():QTTaskReq;
            }
            interface QTTaskReq$ {
                /**
                 * 获取考勤档案boid集合
                 */
                getAttFileBoIds():$.java.util.Set;
                /**
                 * 获取核算结束日期
                 */
                getExpectEndDate():Date;
                /**
                 * 获取核算开始日期
                 */
                getExpectStartDate():Date;
                getPlanId():long;
                /**
                 * 获取定额类型id集合
                 */
                getQtTypeIds():$.java.util.Set;
                /**
                 * 获取单据计算的核算方案id
                 */
                getTiePlanId():long;
                /**
                 * 获取是否存储核算步骤
                 */
                isSaveStep():boolean;
                /**
                 * 设置考勤档案boid集合
                 */
                setAttFileBoIds(attFileBoIds:$.java.util.Set):void;
                /**
                 * 设置核算结束日期
                 */
                setExpectEndDate(expectEndDate:Date):void;
                /**
                 * 设置核算开始日期
                 */
                setExpectStartDate(expectStartDate:Date):void;
                setPlanId(planId:long):void;
                /**
                 * 设置定额类型id集合
                 */
                setQtTypeIds(qtTypeIds:$.java.util.Set):void;
                /**
                 * 设置是否存储核算步骤
                 */
                setSaveStep(saveStep:boolean):void;
                /**
                 * 设置单据计算的核算方案id
                 */
                setTiePlanId(tiePlanId:long):void;
            }
            type QTTaskReq_T = $.java.io.Serializable & QTTaskReq_S & QTTaskReq$;
            interface QTTaskReq extends QTTaskReq_T {
            }
            interface QTTaskStartReq_S {
            }
            type QTTaskStartReq_ST = $.java.io.Serializable & QTTaskStartReq_S;
            interface QTTaskStartReq_C extends QTTaskStartReq_ST {
                new():QTTaskStartReq;
            }
            interface QTTaskStartReq$ {
                /**
                 * 获取考勤档案BOID集合，必填
                 */
                getAttFileBoIds():$.java.util.Set;
                /**
                 * 获取核算期间，必填
                 */
                getCalPeriod():string;
                /**
                 * 获取描述，选填
                 */
                getDesc():string;
                /**
                 * 获取生成方式，必填。
                 * 入参：字符串 A 为固定生成，字符串 B 为动态生成。
                 */
                getGenMode():string;
                /**
                 * 获取考勤管理组织BOID，选填
                 */
                getOrgId():long;
                /**
                 * 获取定额核算方案BOID，必填
                 */
                getQtTiePlanId():long;
                /**
                 * 获取定额类型ID，必填。
                 * 入参的定额类型的生成方式必须与{@link #genMode}相同。
                 */
                getQtTypeIds():$.java.util.Set;
                /**
                 * 获取考勤核算方案BOID，必填
                 */
                getTiePlanId():long;
                /**
                 * 获取是否存储核算步骤，必填
                 */
                isSaveStep():boolean;
                /**
                 * 设置考勤档案BOID集合，必填
                 */
                setAttFileBoIds(attFileBoIds:$.java.util.Set):void;
                /**
                 * 设置核算期间，必填
                 */
                setCalPeriod(calPeriod:string):void;
                /**
                 * 设置描述，选填
                 */
                setDesc(desc:string):void;
                /**
                 * 设置生成方式，必填。
                 * 入参：字符串 A 为固定生成，字符串 B 为动态生成。
                 */
                setGenMode(genMode:string):void;
                /**
                 * 设置考勤管理组织BOID，选填
                 */
                setOrgId(orgId:long):void;
                /**
                 * 设置定额核算方案BOID，必填
                 */
                setQtTiePlanId(qtTiePlanId:long):void;
                /**
                 * 设置定额类型ID，必填。
                 * 入参的定额类型的生成方式必须与{@link #genMode}相同。
                 */
                setQtTypeIds(qtTypeIds:$.java.util.Set):void;
                /**
                 * 设置是否存储核算步骤，必填
                 */
                setSaveStep(saveStep:boolean):void;
                /**
                 * 设置考勤核算方案BOID，必填
                 */
                setTiePlanId(tiePlanId:long):void;
            }
            type QTTaskStartReq_T = $.java.io.Serializable & QTTaskStartReq_S & QTTaskStartReq$;
            interface QTTaskStartReq extends QTTaskStartReq_T {
            }
            interface QTTaskStartRes_S {
            }
            type QTTaskStartRes_ST = $.java.io.Serializable & QTTaskStartRes_S;
            interface QTTaskStartRes_C extends QTTaskStartRes_ST {
                new():QTTaskStartRes;
            }
            interface QTTaskStartRes$ {
                /**
                 * 获取错误编码，仅当任务发起失败时才设置该值。
                 */
                getErrCode():string;
                /**
                 * 获取错误信息，仅当任务发起失败时才设置该值。
                 */
                getErrMsg():string;
                /**
                 * 获取任务ID，仅当任务发起成功时才设置该值。
                 */
                getTaskId():long;
                /**
                 * 获取SDK调用状态，"TRUE"或”FALSE”
                 */
                isSuccess():boolean;
                /**
                 * 设置错误编码，仅当任务发起失败时才设置该值。
                 */
                setErrCode(errCode:string):void;
                /**
                 * 设置错误信息，仅当任务发起失败时才设置该值。
                 */
                setErrMsg(errMsg:string):void;
                /**
                 * 设置SDK调用状态，"TRUE"或”FALSE”
                 */
                setSuccess(success:boolean):void;
                /**
                 * 设置任务ID，仅当任务发起成功时才设置该值。
                 */
                setTaskId(taskId:long):void;
            }
            type QTTaskStartRes_T = $.java.io.Serializable & QTTaskStartRes_S & QTTaskStartRes$;
            interface QTTaskStartRes extends QTTaskStartRes_T {
            }
            interface QTTaskHelper_S {
                /**
                 * 发起定额核算任务
                 *
                 * @param req 定额核算任务发起请求
                 * @return 定额核算任务id，如果为 0 则表示发起任务失败
                 */
                startQTTask(req:QTTaskReq):long;
                /**
                 * 发起定额核算任务。
                 *
                 * @param req 定额核算任务发起请求
                 * @return 定额核算任务发起结果。
                 */
                startQTTask(req:QTTaskStartReq):QTTaskStartRes;
            }
            interface QTTaskHelper_C extends QTTaskHelper_S {
                new():QTTaskHelper;
            }
            interface QTTaskHelper$ {
            }
            type QTTaskHelper_T = QTTaskHelper_S & QTTaskHelper$;
            interface QTTaskHelper extends QTTaskHelper_T {
            }
        }
        namespace kd.sdk.wtc.wtte.business.settle{
            interface AttSettleTaskResp_S {
                with():AttSettleTaskResp$Builder;
            }
            type AttSettleTaskResp_ST = kd.sdk.wtc.wtbs.task.DispatchTaskResp_S & $.java.io.Serializable & AttSettleTaskResp_S;
            interface AttSettleTaskResp_C extends AttSettleTaskResp_ST {
                new():AttSettleTaskResp;
            }
            interface AttSettleTaskResp$ {
            }
            type AttSettleTaskResp_T = kd.sdk.wtc.wtbs.task.DispatchTaskResp & $.java.io.Serializable & AttSettleTaskResp_S & AttSettleTaskResp$;
            interface AttSettleTaskResp extends AttSettleTaskResp_T {
            }
            interface AttSettleTaskResp$Builder_S {
            }
            interface AttSettleTaskResp$Builder_C extends AttSettleTaskResp$Builder_S {
                new():AttSettleTaskResp$Builder;
            }
            interface AttSettleTaskResp$Builder$ {
                build():AttSettleTaskResp;
                errorMsg(arg0:string):this;
                status(arg0:boolean):this;
                taskId(arg0:long):this;
            }
            type AttSettleTaskResp$Builder_T = AttSettleTaskResp$Builder_S & AttSettleTaskResp$Builder$;
            interface AttSettleTaskResp$Builder extends AttSettleTaskResp$Builder_T {
            }
            interface AttSettleTaskReq_S {
            }
            interface AttSettleTaskReq_C extends AttSettleTaskReq_S {
                new():AttSettleTaskReq;
            }
            interface AttSettleTaskReq$ {
                /**
                 * 挂靠行政组织，和档案id集合不同时为空
                 * 描述：会根据传入的挂靠行政组织查询考勤档案，将获取到的考勤档案和传入的考勤档案汇总，一起进行结算
                 *      当挂靠行政组织和考勤档案id集合同时为空时，返回SettleTaskResp，其中isSuccess = false，errorMsg=结算考勤档案和行政组织不允许同时为空。，taskId=0
                 * 说明：此字段为haos_adminorg主键
                 */
                getAffiliateAdminOrgIds():$.java.util.Set;
                /**
                 * 档案Id集合，和挂靠行政组织不同时为空
                 * 描述：会将传入的考勤档案和通过挂靠行政组织查询到的考勤档案一一起进行结算
                 *      当挂靠行政组织和考勤档案id集合同时为空时，返回SettleTaskResp，其中isSuccess = false，errorMsg=结算考勤档案和行政组织不允许同时为空。，taskId=0
                 * 说明：此字段为wtp_attfilebase主键
                 */
                getAttFileIds():$.java.util.Set;
                /**
                 * 结算考勤期间id，必填
                 * 描述：本期sdk仅支持按期间进行结算，因此这个字段必填
                 *      当这个字段为空时，返回SettleTaskResp，其中isSuccess = false，errorMsg=结算考勤期间不允许为空。，taskId=0
                 * 说明：这个字段值为考勤周期期间分录的主键
                 */
                getPeriodId():long;
                /**
                 * 考勤结算类型，必填
                 * 描述：用户判断是哪种结算操作
                 *      当这个字段为空时，返回SettleTaskResp，其中isSuccess = false，errorMsg=结算类型不允许为空，taskId=0
                 * 常量说明：1-冻结，2-解冻，3-封存，4-解封，5-锁定，6-解锁
                 */
                getSettleType():string;
                /**
                 * 挂靠行政组织，和档案id集合不同时为空
                 * 描述：会根据传入的挂靠行政组织查询考勤档案，将获取到的考勤档案和传入的考勤档案汇总，一起进行结算
                 *      当挂靠行政组织和考勤档案id集合同时为空时，返回SettleTaskResp，其中isSuccess = false，errorMsg=结算考勤档案和行政组织不允许同时为空。，taskId=0
                 * 说明：此字段为haos_adminorg主键
                 */
                setAffiliateAdminOrgIds(affiliateAdminOrgIds:$.java.util.Set):void;
                /**
                 * 档案Id集合，和挂靠行政组织不同时为空
                 * 描述：会将传入的考勤档案和通过挂靠行政组织查询到的考勤档案一一起进行结算
                 *      当挂靠行政组织和考勤档案id集合同时为空时，返回SettleTaskResp，其中isSuccess = false，errorMsg=结算考勤档案和行政组织不允许同时为空。，taskId=0
                 * 说明：此字段为wtp_attfilebase主键
                 */
                setAttFileIds(attFileIds:$.java.util.Set):void;
                /**
                 * 结算考勤期间id，必填
                 * 描述：本期sdk仅支持按期间进行结算，因此这个字段必填
                 *      当这个字段为空时，返回SettleTaskResp，其中isSuccess = false，errorMsg=结算考勤期间不允许为空。，taskId=0
                 * 说明：这个字段值为考勤周期期间分录的主键
                 */
                setPeriodId(periodId:long):void;
                /**
                 * 考勤结算类型，必填
                 * 描述：用户判断是哪种结算操作
                 *      当这个字段为空时，返回SettleTaskResp，其中isSuccess = false，errorMsg=结算类型不允许为空，taskId=0
                 * 说明：1-冻结，2-解冻，3-封存，4-解封，5-锁定，6-解锁
                 */
                setSettleType(settleType:string):void;
            }
            type AttSettleTaskReq_T = AttSettleTaskReq_S & AttSettleTaskReq$;
            interface AttSettleTaskReq extends AttSettleTaskReq_T {
            }
        }
        namespace kd.sdk.wtc.wtte.business.tietask{
            interface TieTaskReq_S {
            }
            type TieTaskReq_ST = $.java.io.Serializable & TieTaskReq_S;
            interface TieTaskReq_C extends TieTaskReq_ST {
                new():TieTaskReq;
            }
            interface TieTaskReq$ {
                /**
                 * 获取设置的考勤档案boId集合
                 * @return 考勤档案boId集合
                 */
                getAttFileBoIds():$.java.util.List;
                /**
                 * 获取设置的任务描述
                 * @return 任务描述
                 */
                getDesc():string;
                /**
                 * 获取设置的核算结束日期
                 * @return 核算结束日期
                 */
                getExpectEndDate():Date;
                /**
                 * 获取设置的核算开始日期
                 * @return 核算开始日期
                 */
                getExpectStartDate():Date;
                /**
                 * 获取设置的考勤组织
                 * @return 考勤组织
                 */
                getOrg():long;
                /**
                 * 获取设置的考勤核算方案id
                 * @return 考勤核算方案id
                 */
                getTiePlanId():long;
                /**
                 * 获取设置的是否存储核算步骤
                 * @return 是否存储核算步骤
                 */
                isSaveStep():boolean;
                /**
                 * 考勤档案boId集合  必填
                 * @param attFileBoIds 考勤档案boId集合
                 */
                setAttFileBoIds(attFileBoIds:$.java.util.List):void;
                /**
                 * 设置任务描述
                 * @param desc 任务描述
                 */
                setDesc(desc:string):void;
                /**
                 * 设置核算结束日期  必填
                 * @param expectEndDate 核算结束日期
                 */
                setExpectEndDate(expectEndDate:Date):void;
                /**
                 * 设置核算开始日期 非必填
                 * @param expectStartDate 核算开始日期
                 */
                setExpectStartDate(expectStartDate:Date):void;
                /**
                 * 设置考勤组织
                 * @param org 设置考勤组织
                 */
                setOrg(org:long):void;
                /**
                 * 设置是否存储核算步骤
                 * @param saveStep 是否存储核算步骤
                 */
                setSaveStep(saveStep:boolean):void;
                /**
                 * 设置考勤核算方案id
                 * @param tiePlanId 考勤核算方案id
                 */
                setTiePlanId(tiePlanId:long):void;
            }
            type TieTaskReq_T = $.java.io.Serializable & TieTaskReq_S & TieTaskReq$;
            interface TieTaskReq extends TieTaskReq_T {
            }
            interface TieTaskResp_S {
            }
            interface TieTaskResp$ {
                /**
                 * 错误编码
                 */
                getErrorCode():string;
                /**
                 * 错误信息
                 */
                getErrorMsg():string;
                /**
                 * 任务执行发起状态
                 */
                getStatus():boolean;
                /**
                 * 任务id
                 */
                getTaskId():long;
            }
            type TieTaskResp_T = TieTaskResp_S & TieTaskResp$;
            interface TieTaskResp extends TieTaskResp_T {
            }
            interface TieTaskHelper_S {
                /**
                 * 发起考勤核算任务
                 *
                 * @param tieTaskReq 发起考勤核算请求体
                 * @return 考勤核算发起响应结果
                 */
                startTieTask(tieTaskReq:TieTaskReq):TieTaskResp;
            }
            interface TieTaskHelper_C extends TieTaskHelper_S {
                new():TieTaskHelper;
            }
            interface TieTaskHelper$ {
            }
            type TieTaskHelper_T = TieTaskHelper_S & TieTaskHelper$;
            interface TieTaskHelper extends TieTaskHelper_T {
            }
        }
    }
}
export {};