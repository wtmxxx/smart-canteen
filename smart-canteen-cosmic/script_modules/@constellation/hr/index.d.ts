/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.bos.entity.property{
            interface PictureProp_S {
            }
            type PictureProp_ST = kd.bos.mservice.svc.picture.IPictureProp_S & FieldProp_S & PictureProp_S;
            interface PictureProp_C extends PictureProp_ST {
                new():PictureProp;
            }
            interface PictureProp$ {
                getBackgroundImgKey():string;
                getImgSourceNew():number;
                getMaxImgSize():number;
                getThumbnailsParams():$.java.util.List;
                setBackgroundImgKey(arg0:string):void;
                setDefaultImgKey(arg0:string):void;
                setImgSourceNew(arg0:number):void;
                setMaxImgSize(arg0:number):void;
                setThumbnailsParams(arg0:$.java.util.List):void;
            }
            type PictureProp_T = FieldProp & kd.bos.mservice.svc.picture.IPictureProp & PictureProp_S & PictureProp$;
            interface PictureProp extends PictureProp_T {
            }
        }
        namespace kd.bos.form.field{
            interface PictureEdit_S {
            }
            type PictureEdit_ST = FieldEdit_S & $.kd.bos.form.control.events.ISuportClick & PictureEdit_S;
            interface PictureEdit_C extends PictureEdit_ST {
                new():PictureEdit;
            }
            interface PictureEdit$ {
                addWaterMarkListener(arg0:$.kd.bos.form.control.events.WaterMarkListener):void;
                beforeUpload(arg0:$.java.util.List):void;
                click():void;
                getImagePreviewUrl(arg0:$.java.util.List):void;
                getOperationKey():string;
                getOriginalPictrue():string;
                getThumbnailsParams():$.java.util.List;
                getThumbnailsURLs():$.java.util.Map;
                getWaterMarkInfos():void;
                remove(arg0:$.java.util.HashMap):void;
                setOperationKey(arg0:string):void;
                setShowWaterMark(arg0:boolean):void;
                showPic():void;
                uploadResult(arg0:$.java.util.List):void;
            }
            type PictureEdit_T = FieldEdit & $.kd.bos.form.control.events.ISuportClick & PictureEdit_S & PictureEdit$;
            interface PictureEdit extends PictureEdit_T {
            }
        }
        namespace kd.bos.mservice.svc.picture{
            interface IPictureProp_S {
            }
            interface IPictureProp$ {
                getDefaultImgKey?():string;
            }
            type IPictureProp_T = IPictureProp_S & IPictureProp$;
            interface IPictureProp extends IPictureProp_T {
            }
        }
        namespace kd.hr.hbp.business.domain.model.newhismodel{
            interface HisResponse_S {
            }
            interface HisResponse_C extends HisResponse_S {
                new():HisResponse;
            }
            interface HisResponse$ {
                getCode():string;
                getData():any;
                getErrorMessage():string;
                setCode(arg0:string):void;
                setData(arg0:any):void;
                setErrorMessage(arg0:string):void;
            }
            type HisResponse_T = HisResponse_S & HisResponse$;
            interface HisResponse extends HisResponse_T {
            }
        }
        namespace kd.hr.hbp.business.servicehelper{
            interface HRBaseServiceHelper_S {
                create(arg0:string):HRBaseServiceHelper;
            }
            interface HRBaseServiceHelper_C extends HRBaseServiceHelper_S {
                new(arg0:string):HRBaseServiceHelper;
            }
            interface HRBaseServiceHelper$ {
                count(arg0:string,arg1:$.kd.bos.orm.query.QFilter[]):number;
                delete(arg0:any[]):void;
                deleteByFilter(arg0:$.kd.bos.orm.query.QFilter[]):number;
                deleteOne(arg0:any):void;
                genEmptyEntryColl(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:string):any;
                genEmptyEntryCollWithSize(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:string,arg2:number):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                generateDynamicObject(arg0:any,arg1:string):$.kd.bos.dataentity.entity.DynamicObject;
                generateDynamicObject(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:string):$.kd.bos.dataentity.entity.DynamicObject;
                generateDynamicObject(arg0:string,arg1:any,arg2:string):$.kd.bos.dataentity.entity.DynamicObject;
                generateDynamicObject(arg0:string,arg1:$.kd.bos.dataentity.entity.DynamicObject,arg2:string):$.kd.bos.dataentity.entity.DynamicObject;
                generateEmptyDynamicObject():$.kd.bos.dataentity.entity.DynamicObject;
                generateEmptyDynamicObject(arg0:string):$.kd.bos.dataentity.entity.DynamicObject;
                generateEmptyEntryCollection(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:string):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                generateEmptyEntryDynamicObject(arg0:string):$.kd.bos.dataentity.entity.DynamicObject;
                generateEmptyEntryDynamicObject(arg0:string,arg1:string):$.kd.bos.dataentity.entity.DynamicObject;
                getEntityName():string;
                isExists(arg0:any):boolean;
                isExists(arg0:$.kd.bos.orm.query.QFilter[]):boolean;
                isExists(arg0:$.kd.bos.orm.query.QFilter):boolean;
                loadDynamicObject(arg0:$.kd.bos.orm.query.QFilter[]):$.kd.bos.dataentity.entity.DynamicObject;
                loadDynamicObject(arg0:$.kd.bos.orm.query.QFilter):$.kd.bos.dataentity.entity.DynamicObject;
                loadDynamicObjectArray(arg0:$.kd.bos.orm.query.QFilter[]):$.kd.bos.dataentity.entity.DynamicObject[];
                loadDynamicObjectArray(arg0:any[]):$.kd.bos.dataentity.entity.DynamicObject[];
                loadDynamicObjectArray(arg0:string,arg1:$.kd.bos.orm.query.QFilter[]):$.kd.bos.dataentity.entity.DynamicObject[];
                loadDynamicObjectArray(arg0:string,arg1:any[]):$.kd.bos.dataentity.entity.DynamicObject[];
                loadSingle(arg0:any):$.kd.bos.dataentity.entity.DynamicObject;
                loadSingle(arg0:string,arg1:any):$.kd.bos.dataentity.entity.DynamicObject;
                query(arg0:$.kd.bos.orm.query.QFilter[]):$.kd.bos.dataentity.entity.DynamicObject[];
                query(arg0:$.kd.bos.orm.query.QFilter[],arg1:string):$.kd.bos.dataentity.entity.DynamicObject[];
                query(arg0:string,arg1:$.kd.bos.orm.query.QFilter[]):$.kd.bos.dataentity.entity.DynamicObject[];
                query(arg0:string,arg1:$.kd.bos.orm.query.QFilter[],arg2:string):$.kd.bos.dataentity.entity.DynamicObject[];
                query(arg0:string,arg1:$.kd.bos.orm.query.QFilter[],arg2:string,arg3:number):$.kd.bos.dataentity.entity.DynamicObject[];
                queryDataSet(arg0:string,arg1:string):$.kd.bos.algo.DataSet;
                queryDataSet(arg0:string,arg1:string,arg2:$.kd.bos.orm.query.QFilter[]):$.kd.bos.algo.DataSet;
                queryDataSet(arg0:string,arg1:string,arg2:string):$.kd.bos.algo.DataSet;
                queryDataSet(arg0:string,arg1:string,arg2:$.kd.bos.orm.query.QFilter[],arg3:string):$.kd.bos.algo.DataSet;
                queryDataSet(arg0:string,arg1:string,arg2:$.kd.bos.orm.query.QFilter[],arg3:string,arg4:number):$.kd.bos.algo.DataSet;
                queryMultiEntityDataSet(arg0:string,arg1:$.kd.bos.orm.query.QFilter[],arg2:string,arg3:boolean,arg4:number,arg5:number):$.kd.bos.algo.DataSet;
                queryOne(arg0:any):$.kd.bos.dataentity.entity.DynamicObject;
                queryOne(arg0:$.kd.bos.orm.query.QFilter[]):$.kd.bos.dataentity.entity.DynamicObject;
                queryOne(arg0:string,arg1:any):$.kd.bos.dataentity.entity.DynamicObject;
                queryOne(arg0:string,arg1:$.kd.bos.orm.query.QFilter[]):$.kd.bos.dataentity.entity.DynamicObject;
                queryOne(arg0:string,arg1:$.kd.bos.orm.query.QFilter):$.kd.bos.dataentity.entity.DynamicObject;
                queryOne(arg0:string,arg1:$.kd.bos.orm.query.QFilter[],arg2:string):$.kd.bos.dataentity.entity.DynamicObject;
                queryOriginalArray(arg0:string,arg1:$.kd.bos.orm.query.QFilter[]):$.kd.bos.dataentity.entity.DynamicObject[];
                queryOriginalArray(arg0:string,arg1:$.kd.bos.orm.query.QFilter[],arg2:string):$.kd.bos.dataentity.entity.DynamicObject[];
                queryOriginalCollection(arg0:string,arg1:$.kd.bos.orm.query.QFilter[]):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                queryOriginalCollection(arg0:string,arg1:$.kd.bos.orm.query.QFilter[],arg2:string):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                queryOriginalOne(arg0:$.kd.bos.orm.query.QFilter[]):$.kd.bos.dataentity.entity.DynamicObject;
                queryOriginalOne(arg0:$.kd.bos.orm.query.QFilter):$.kd.bos.dataentity.entity.DynamicObject;
                queryOriginalOne(arg0:string,arg1:any):$.kd.bos.dataentity.entity.DynamicObject;
                queryOriginalOne(arg0:string,arg1:$.kd.bos.orm.query.QFilter[]):$.kd.bos.dataentity.entity.DynamicObject;
                queryOriginalOne(arg0:string,arg1:$.kd.bos.orm.query.QFilter):$.kd.bos.dataentity.entity.DynamicObject;
                queryOriginalOne(arg0:string,arg1:$.kd.bos.orm.query.QFilter[],arg2:string):$.kd.bos.dataentity.entity.DynamicObject;
                queryTranPropList(arg0:string,arg1:$.kd.bos.orm.query.QFilter[],arg2:string,arg3:$.java.lang.Class):$.java.util.List;
                save(arg0:$.kd.bos.dataentity.entity.DynamicObject[]):any[];
                save(arg0:$.kd.bos.dataentity.entity.DynamicObjectCollection):any[];
                saveOne(arg0:$.kd.bos.dataentity.entity.DynamicObject):any;
                setEntityName(arg0:string):void;
                update(arg0:$.kd.bos.dataentity.entity.DynamicObject[]):any[];
                updateDataOne(arg0:$.kd.bos.dataentity.entity.DynamicObject):void;
                updateDatas(arg0:$.kd.bos.dataentity.entity.DynamicObject[]):void;
                updateMultDynObjColl(arg0:string,arg1:kd.hr.hbp.common.function_.DynCollHandler,...arg2:string[]):any;
                updateOne(arg0:$.kd.bos.dataentity.entity.DynamicObject):any;
                updateSingleDynObjColl(arg0:string,arg1:string,arg2:kd.hr.hbp.common.function_.DynCollHandler):any;
            }
            type HRBaseServiceHelper_T = HRBaseServiceHelper_S & HRBaseServiceHelper$;
            interface HRBaseServiceHelper extends HRBaseServiceHelper_T {
            }
        }
        namespace kd.hr.hbp.common.function_{
            interface DynCollHandler_S {
                readonly MAIN_ENTITY_PARAMS_KEY:string;
            }
            interface DynCollHandler$ {
                buildDelEntryCollection?(arg0:$.kd.bos.dataentity.entity.DynamicObjectCollection,arg1:$.kd.bos.dataentity.metadata.dynamicobject.DynamicObjectType):void;
                buildEntryCollection?(arg0:$.kd.bos.dataentity.entity.DynamicObjectCollection,arg1:$.kd.bos.dataentity.metadata.dynamicobject.DynamicObjectType,arg2:$.java.util.List):void;
                getParams():any;
                setMainEntityVal?(arg0:$.kd.bos.dataentity.entity.DynamicObject,arg1:$.java.util.List):void;
            }
            type DynCollHandler_T = DynCollHandler_S & DynCollHandler$;
            interface DynCollHandler extends DynCollHandler_T {
            }
        }
        namespace kd.hr.hbp.common.model{
            interface DimValueResult_S {
            }
            type DimValueResult_ST = $.java.io.Serializable & DimValueResult_S;
            interface DimValueResult_C extends DimValueResult_ST {
                new():DimValueResult;
                new(arg0:boolean):DimValueResult;
                new(arg0:boolean,arg1:$.java.util.Set):DimValueResult;
            }
            interface DimValueResult$ {
                getDimValueIds():$.java.util.Set;
                isAll():boolean;
                setAll(arg0:boolean):void;
                setDimValueIds(arg0:$.java.util.Set):void;
            }
            type DimValueResult_T = $.java.io.Serializable & DimValueResult_S & DimValueResult$;
            interface DimValueResult extends DimValueResult_T {
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
        namespace kd.hr.hbp.common.util{
            interface HRDateTimeUtils_S {
                readonly YYYY_MM_DD:string;
                readonly YYYY_MM_DD_HH_MM_SS:string;
                addDate(arg0:Date,arg1:Date):Date;
                addDay(arg0:Date,arg1:long):Date;
                addDays(arg0:number,arg1:Date):Date;
                addDuration(arg0:Date,arg1:number,arg2:number):Date;
                addDuration(arg0:Date,arg1:number,arg2:number,arg3:number):Date;
                addDuration(arg0:Date,arg1:number,arg2:number,arg3:number,arg4:number):Date;
                addDuration(arg0:Date,arg1:number,arg2:number,arg3:number,arg4:number,arg5:number):Date;
                addDuration(arg0:Date,arg1:number,arg2:number,arg3:number,arg4:number,arg5:number,arg6:number):Date;
                addHour(arg0:Date,arg1:long):Date;
                addMinute(arg0:Date,arg1:long):Date;
                addMonth(arg0:Date,arg1:number):Date;
                addSecond(arg0:Date,arg1:long):Date;
                addYear(arg0:Date,arg1:number):Date;
                convertAfter1YearDate(arg0:long):Date;
                convertBefore1YearDate(arg0:long):Date;
                convertBefore365DayDate(arg0:long):Date;
                convertDate(arg0:long):Date;
                curAfter1YearDate():Date;
                curAfter365DayDate():Date;
                curDate():Date;
                curUserDateBos(arg0:long):Date;
                dateDiff(arg0:Date,arg1:Date):long;
                dateDiff(arg0:string,arg1:Date,arg2:Date):long;
                dateFormatDate(arg0:Date):Date;
                dateToGMT(arg0:Date,arg1:string):string;
                dateToSQL(arg0:Date):string;
                dayAfter(arg0:Date,arg1:Date):boolean;
                dayBefore(arg0:Date,arg1:Date):boolean;
                dayEquals(arg0:Date,arg1:Date):boolean;
                daysOfMonth(arg0:number,arg1:number):number;
                defaultDateString(arg0:Date):string;
                defaultDateString(arg0:Date,arg1:$.java.util.TimeZone):string;
                emailDate(arg0:Date):string;
                emailDate(arg0:Date,arg1:$.java.util.TimeZone):string;
                format(arg0:Date):string;
                format(arg0:Date,arg1:string):string;
                format(arg0:Date,arg1:$.java.util.TimeZone):string;
                format(arg0:Date,arg1:string,arg2:$.java.util.TimeZone):string;
                format(arg0:Date,arg1:string,arg2:$.java.util.TimeZone,arg3:$.java.util.Locale):string;
                formatDate(arg0:Date):string;
                formatDate(arg0:Date,arg1:$.java.util.TimeZone):string;
                formatTime(arg0:Date):string;
                formatTime(arg0:Date,arg1:$.java.util.TimeZone):string;
                formatUserSettingFromDate(arg0:Date):string;
                formatUserSettingFromString(arg0:string):string;
                geTimeZoneToday(arg0:$.java.util.TimeZone):Date;
                getBeforeDay(arg0:Date):Date;
                getCoarseDuration(arg0:Date,arg1:Date):string;
                getCurrentMonthDays():number;
                getCurrentQuarterDate():$.java.util.List;
                getCurrentYearDays():number;
                getDateScope(arg0:number,arg1:$.java.util.Calendar,arg2:number,arg3:number):$.java.util.List;
                getDateStrWithoutMin(arg0:Date):string;
                getDateStrWithoutMinTs(arg0:Date):string;
                getDay(arg0:Date):number;
                getDayName(arg0:number):string;
                getDayName(arg0:Date):string;
                getDurationToDatabase(arg0:Date,arg1:Date):long;
                getElapsedTime(arg0:Date,arg1:Date,arg2:Date):number;
                getFirstDayOfCurrentMonth():Date;
                getFirstDayOfCurrentYear():Date;
                getGMTDate():Date;
                getGMTHour():number;
                getGMTOffset(arg0:Date):long;
                getMonth(arg0:Date):number;
                getMonthName(arg0:number):string;
                getMonthName(arg0:Date):string;
                getNextDay(arg0:Date):Date;
                getNowDate():Date;
                getNowDateTime():Date;
                getPreciseDuration(arg0:Date,arg1:Date):string;
                getQuarter(arg0:Date):number;
                getRemainTime(arg0:Date):$.java.util.Map;
                getServerGMTOffset():number;
                getServerTimeZone():string;
                getSysMaxDate():Date;
                getSysTimeZoneToday():Date;
                getTrancateDateFromDate(arg0:Date):string;
                getTrancateDateFromTimestamp(arg0:Date):string;
                getUserSettingFormat():$.java.text.SimpleDateFormat;
                getUserTimeZoneToday():Date;
                getWeek(arg0:Date):number;
                getWeekDay(arg0:Date):number;
                getYear(arg0:Date):number;
                gmtToDate(arg0:string):Date;
                isAfterNow(arg0:Date):boolean;
                isBeforeNow(arg0:Date):boolean;
                isBeforeOrEqualNow(arg0:Date):boolean;
                isLeap(arg0:number):boolean;
                localDate2Date(arg0:$.java.time.LocalDate):Date;
                localDateTime2Date(arg0:$.java.time.LocalDateTime):Date;
                localDateTranDate(arg0:$.java.time.LocalDate):Date;
                parseDate(arg0:string):Date;
                parseDate(arg0:string,arg1:$.java.util.TimeZone):Date;
                parseDate(arg0:string,arg1:string):Date;
                parseDate(arg0:string,arg1:string,arg2:$.java.util.TimeZone):Date;
                parseDate(arg0:string,arg1:string,arg2:$.java.util.TimeZone,arg3:$.java.util.Locale):Date;
                parseDateIncludeZhCN(arg0:string):Date;
                parseDateLocal(arg0:string):Date;
                parseDateLocal(arg0:string,arg1:string):Date;
                parseDateLocal(arg0:string,arg1:string,arg2:$.java.util.TimeZone):Date;
                parseDefaultDate(arg0:string):Date;
                parseEmailDate(arg0:string):Date;
                secondsTo(arg0:long):Date;
                splitYYYY_MM_DD(arg0:Date):Date;
                subDate(arg0:Date,arg1:Date):Date;
                sysDateToUserDate():Date;
                truncateDate(arg0:Date):Date;
            }
            interface HRDateTimeUtils_C extends HRDateTimeUtils_S {
                new():HRDateTimeUtils;
            }
            interface HRDateTimeUtils$ {
            }
            type HRDateTimeUtils_T = HRDateTimeUtils_S & HRDateTimeUtils$;
            interface HRDateTimeUtils extends HRDateTimeUtils_T {
            }
        }
        namespace kd.hr.hbp.formplugin.web{
            interface HRDataBaseEdit_S {
            }
            type HRDataBaseEdit_ST = $.kd.bos.base.AbstractBasePlugIn & HRDataBaseEdit_S;
            interface HRDataBaseEdit_C extends HRDataBaseEdit_ST {
                new():HRDataBaseEdit;
            }
            interface HRDataBaseEdit$ {
                getModelVal(arg0:string):any;
                getModelValStr(arg0:string):string;
                hide(arg0:string):void;
                obtainModel():$.kd.bos.entity.datamodel.IDataModel;
                obtainView():$.kd.bos.form.IFormView;
                setModelEmptyVal(arg0:string):void;
                setModelNullVal(arg0:string):void;
                setModelVal(arg0:string,arg1:any):void;
                setMustInput(arg0:$.kd.bos.form.field.BasedataEdit):void;
                setNotMustInput(arg0:$.kd.bos.form.field.BasedataEdit):void;
                show(arg0:string):void;
            }
            type HRDataBaseEdit_T = $.kd.bos.base.AbstractBasePlugIn & HRDataBaseEdit_S & HRDataBaseEdit$;
            interface HRDataBaseEdit extends HRDataBaseEdit_T {
            }
        }
        namespace kd.sdk.hr.hdm{
            interface SdkHRHdmModule_S {
            }
            type SdkHRHdmModule_ST = $.kd.sdk.module.Module & SdkHRHdmModule_S;
            interface SdkHRHdmModule_C extends SdkHRHdmModule_ST {
                new():SdkHRHdmModule;
            }
            interface SdkHRHdmModule$ {
            }
            type SdkHRHdmModule_T = $.kd.sdk.module.Module & SdkHRHdmModule_S & SdkHRHdmModule$;
            interface SdkHRHdmModule extends SdkHRHdmModule_T {
            }
        }
        namespace kd.sdk.hr.hdm.business.mservice.helper{
            interface HDMTransferServiceHelper_S {
                /**
                 * 人员离职处理
                 *
                 * @param quitInfo 离职参数
                 * @return success true|false ; msg null|"desc ..."
                 */
                dealPersonQuit(quitInfo:$.java.util.Map):$.java.util.Map;
            }
            interface HDMTransferServiceHelper_C extends HDMTransferServiceHelper_S {
                new():HDMTransferServiceHelper;
            }
            interface HDMTransferServiceHelper$ {
            }
            type HDMTransferServiceHelper_T = HDMTransferServiceHelper_S & HDMTransferServiceHelper$;
            interface HDMTransferServiceHelper extends HDMTransferServiceHelper_T {
            }
            interface HDMRegBillServiceHelper_S {
                /**
                 * 离职生效调用RPC接口处理领域内业务
                 * @param personQuitMessage 离职员工信息封装
                 * @return success true|false ; msg null|"desc ..."
                 */
                executePersonQuitEffect(personQuitMessage:$.java.util.Map):$.java.util.Map;
                /**
                 * 根据主键id获取转正单
                 * @param billPKId 单据主键
                 * @return 转正单信息
                 */
                getRegBillById(billPKId:long):$.java.util.Map;
            }
            interface HDMRegBillServiceHelper_C extends HDMRegBillServiceHelper_S {
                new():HDMRegBillServiceHelper;
            }
            interface HDMRegBillServiceHelper$ {
            }
            type HDMRegBillServiceHelper_T = HDMRegBillServiceHelper_S & HDMRegBillServiceHelper$;
            interface HDMRegBillServiceHelper extends HDMRegBillServiceHelper_T {
            }
            interface HDMPartBillServiceHelper_S {
                /**
                 * 查询兼职岗位、标准岗位信息<br/>
                 * <b>兼职申请单中 岗位和职位在1128版本已经切换为带历史版本的基础资料控件 所以取出来的对象是需要用fboid还是直接fid 需要产品给出定义</b>
                 * @since V2022/11/28
                 * @param billPKId 兼职申请单id
                 * @return key -> positiontype(任岗模式：1-岗位，0-标准岗位, 2-职位)，position（兼职岗位），stdposition（兼职标准岗位） . job(兼职职位) adminorg(兼职部门)
                 */
                queryPositionInfoById(billPKId:long):$.java.util.Map;
                /**
                 * 离职通知
                 * @param quitInfo 离职参数
                 * @return success true|false ; msg null|"desc ..."
                 */
                quitNotice(quitInfo:$.java.util.Map):$.java.util.Map;
            }
            interface HDMPartBillServiceHelper_C extends HDMPartBillServiceHelper_S {
                new():HDMPartBillServiceHelper;
            }
            interface HDMPartBillServiceHelper$ {
            }
            type HDMPartBillServiceHelper_T = HDMPartBillServiceHelper_S & HDMPartBillServiceHelper$;
            interface HDMPartBillServiceHelper extends HDMPartBillServiceHelper_T {
            }
            interface HDMTransferQueryHelper_S {
                /**
                 * 根据调动单ID 单条查询调动单
                 *
                 * @param id 调动单ID
                 * @return 调动单信息
                 */
                getTranserBillById(id:long):$.java.util.Map;
                /**
                 * 批量根据id 查询调动单信息
                 *
                 * @param id 调动单ID
                 * @return 批量调动单信息
                 */
                listTranserBillById(ids:$.java.util.List):$.java.util.Map;
            }
            interface HDMTransferQueryHelper_C extends HDMTransferQueryHelper_S {
                new():HDMTransferQueryHelper;
            }
            interface HDMTransferQueryHelper$ {
            }
            type HDMTransferQueryHelper_T = HDMTransferQueryHelper_S & HDMTransferQueryHelper$;
            interface HDMTransferQueryHelper extends HDMTransferQueryHelper_T {
            }
        }
        namespace kd.sdk.hr.hlcm{
            interface SdkHRHlcmModule_S {
            }
            type SdkHRHlcmModule_ST = $.kd.sdk.module.Module & SdkHRHlcmModule_S;
            interface SdkHRHlcmModule_C extends SdkHRHlcmModule_ST {
                new():SdkHRHlcmModule;
            }
            interface SdkHRHlcmModule$ {
            }
            type SdkHRHlcmModule_T = $.kd.sdk.module.Module & SdkHRHlcmModule_S & SdkHRHlcmModule$;
            interface SdkHRHlcmModule extends SdkHRHlcmModule_T {
            }
        }
        namespace kd.sdk.hr.hlcm.business{
            interface SdkHRHlcmModule_S {
            }
            type SdkHRHlcmModule_ST = $.kd.sdk.module.Module & SdkHRHlcmModule_S;
            interface SdkHRHlcmModule_C extends SdkHRHlcmModule_ST {
                new():SdkHRHlcmModule;
            }
            interface SdkHRHlcmModule$ {
            }
            type SdkHRHlcmModule_T = $.kd.sdk.module.Module & SdkHRHlcmModule_S & SdkHRHlcmModule$;
            interface SdkHRHlcmModule extends SdkHRHlcmModule_T {
            }
        }
        namespace kd.sdk.hr.hlcm.business.mservice.helper{
            interface ContractServiceHelper_S {
                /**
                 * 生成档案接口
                 *
                 * @param dynamicObjects
                 */
                generateContract(dynamicObjects:$.java.util.List):$.java.util.Map;
                /**
                 * 合同模板替换的SDK
                 *
                 * @param signBillId      签署单据ID
                 * @param index           模板行数
                 * @param isAlterFileName 是否修改文件名称
                 * @param isToPdf         是否需要将替换后的文件转化的PDF
                 * @return URL 替换后生成的文件的URL
                 */
                replaceKeywordGenFile(signBillId:long,index:number,isAlterFileName:boolean,isToPdf:boolean):$.java.util.Map;
            }
            interface ContractServiceHelper_C extends ContractServiceHelper_S {
                new():ContractServiceHelper;
            }
            interface ContractServiceHelper$ {
            }
            type ContractServiceHelper_T = ContractServiceHelper_S & ContractServiceHelper$;
            interface ContractServiceHelper extends ContractServiceHelper_T {
            }
        }
        namespace kd.sdk.hr.hom{
            interface SdkHRHomModule_S {
            }
            type SdkHRHomModule_ST = $.kd.sdk.module.Module & SdkHRHomModule_S;
            interface SdkHRHomModule_C extends SdkHRHomModule_ST {
                new():SdkHRHomModule;
            }
            interface SdkHRHomModule$ {
            }
            type SdkHRHomModule_T = $.kd.sdk.module.Module & SdkHRHomModule_S & SdkHRHomModule$;
            interface SdkHRHomModule extends SdkHRHomModule_T {
            }
        }
        namespace kd.sdk.hr.hom.business.mservice.helper{
            interface HOMLoginServiceHelper_S {
                /**
                 * 校验用户ID与手机号是否匹配
                 *
                 * @param userId 用户ID（入职对应的是候选人ID）
                 * @param phone  手机号
                 * @return boolean 候选人ID与手机号是否匹配
                 */
                checkUserIdAndPhone(userId:string,phone:string):boolean;
            }
            interface HOMLoginServiceHelper_C extends HOMLoginServiceHelper_S {
                new():HOMLoginServiceHelper;
            }
            interface HOMLoginServiceHelper$ {
            }
            type HOMLoginServiceHelper_T = HOMLoginServiceHelper_S & HOMLoginServiceHelper$;
            interface HOMLoginServiceHelper extends HOMLoginServiceHelper_T {
            }
        }
        namespace kd.sdk.hr.hom.business.onbrd{
            interface IConfirmOnbrdService_S {
            }
            interface IConfirmOnbrdService$ {
                /**
                 * 确认入职之前执行的扩展代码
                 *
                 * @param onbrdIds 入职单
                 * @return boolean
                 */
                beforeConfirmOnbrds(...onbrdIds:any[]):void;
                /**
                 * 自定义确认入职的错误提示信息
                 *
                 * @param errMsglist          错误信息
                 * @param emptyFileds         空字段标识
                 * @param operateKey          操作按钮
                 * @param isMobile            是否移动端
                 * @param onbrdBillDetailInfo 入职单据详情
                 * @return true/false 二开方案默认false
                 */
                tpiInfo(errMsglist:$.java.util.List,emptyFileds:$.java.util.List,operateKey:string,isMobile:boolean,onbrdBillDetailInfo:$.kd.bos.dataentity.entity.DynamicObject):boolean;
            }
            type IConfirmOnbrdService_T = IConfirmOnbrdService_S & IConfirmOnbrdService$;
            interface IConfirmOnbrdService extends IConfirmOnbrdService_T {
            }
            interface IOnbrdService_S {
            }
            interface IOnbrdService$ {
                /**
                 * 多实体导入-实现自定义赋值。如：候选人编号
                 *
                 * @param rowdatas        rowdatas
                 * @param importLoggerMap importLoggerMap
                 * @param optionCode      optionCode
                 */
                beforeWrapOriginalJson(rowdatas:$.java.util.List,importLoggerMap:$.java.util.Map,optionCode:string):void;
                /**
                 * @param dynamicObject 入职单
                 * @param initType      枚举类型InitTypeEnum，初始化类型
                 * @return 工号值
                 */
                setEmployeeNo(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject,initType:string):string;
            }
            type IOnbrdService_T = IOnbrdService_S & IOnbrdService$;
            interface IOnbrdService extends IOnbrdService_T {
            }
            interface IShareTaskService_S {
            }
            interface IShareTaskService$ {
                /**
                 * 处理共享任务
                 *
                 * @param operationType 操作类型  confirm-确认  breakup-终止
                 * @param entityName    实体名称
                 * @param ids           业务IDs
                 */
                dealShareTask(operationType:string,entityName:string,ids:$.java.util.List):void;
            }
            type IShareTaskService_T = IShareTaskService_S & IShareTaskService$;
            interface IShareTaskService extends IShareTaskService_T {
            }
            interface IPerChgBizParam_S {
            }
            interface IPerChgBizParam$ {
                /**
                 * 设置参数
                 *
                 * @param onbrdBillInfo 入职单信息确认入职埋点
                 * @param dataRow       数据信息，key为页面标识，value为数据id
                 */
                setPerChgBizParam(onbrdBillInfo:$.kd.bos.dataentity.entity.DynamicObject,dataRow:$.java.util.Map):void;
            }
            type IPerChgBizParam_T = IPerChgBizParam_S & IPerChgBizParam$;
            interface IPerChgBizParam extends IPerChgBizParam_T {
            }
        }
        namespace kd.sdk.hr.hom.business.personinfo{
            interface IBaseInfoService_S {
            }
            interface IBaseInfoService$ {
            }
            type IBaseInfoService_T = IHcfInfoPageService & IBaseInfoService_S & IBaseInfoService$;
            interface IBaseInfoService extends IBaseInfoService_T {
            }
            interface ILanguageSkillService_S {
            }
            interface ILanguageSkillService$ {
                /**
                 * 设置需要展示所有的字段标识
                 *
                 * @return 字段标识，以逗号区分
                 */
                getExtShowField():string;
            }
            type ILanguageSkillService_T = ITableValueInfoService & ILanguageSkillService_S & ILanguageSkillService$;
            interface ILanguageSkillService extends ILanguageSkillService_T {
            }
            interface IPreviousWorkExpService_S {
            }
            interface IPreviousWorkExpService$ {
            }
            type IPreviousWorkExpService_T = ITableValueInfoService & IPreviousWorkExpService_S & IPreviousWorkExpService$;
            interface IPreviousWorkExpService extends IPreviousWorkExpService_T {
            }
            interface ICertificateInfoService_S {
            }
            interface ICertificateInfoService$ {
                /**
                 * 证件类型扩展字段
                 *
                 * @return 扩展的字段
                 */
                getCertExtProperties():$.java.util.Set;
                /**
                 * 设置不同证件类型展示的字段
                 *
                 * @return String 要查询的属性
                 */
                getExtPropertiesByCertID?():$.java.util.Map;
            }
            type ICertificateInfoService_T = ICertificateInfoService_S & ICertificateInfoService$;
            interface ICertificateInfoService extends ICertificateInfoService_T {
            }
            interface ICancontactService_S {
            }
            interface ICancontactService$ {
            }
            type ICancontactService_T = IBasePeronInfoService & ICancontactService_S & ICancontactService$;
            interface ICancontactService extends ICancontactService_T {
            }
            interface IBasePeronInfoService_S {
            }
            interface IBasePeronInfoService$ {
                /**
                 * 设置需要展示所有的字段标识
                 *
                 * @return 字段标识，以逗号区分
                 */
                getExtProperties():string;
                /**
                 * 设置弹窗值
                 *
                 * @param customParamsmap 变量
                 * @param canFamilyInfo   信息组对象值
                 */
                setCustomParamsMap(customParamsmap:$.java.util.Map,canFamilyInfo:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 设置页面值
                 *
                 * @param personBaseDy 页面实体
                 * @param dataModel    参数值
                 */
                setDataModel(personBaseDy:$.kd.bos.dataentity.entity.DynamicObject,dataModel:$.kd.bos.entity.datamodel.IDataModel):void;
                /**
                 * 设置页面值
                 *
                 * @param dataModel       页面实体
                 * @param customParamsmap 参数值
                 */
                setViewModel(dataModel:$.kd.bos.entity.datamodel.IDataModel,customParamsmap:$.java.util.Map):void;
            }
            type IBasePeronInfoService_T = IBasePeronInfoService_S & IBasePeronInfoService$;
            interface IBasePeronInfoService extends IBasePeronInfoService_T {
            }
            interface IContactInfoService_S {
            }
            interface IContactInfoService$ {
                /**
                 * 获取地址的扩展字段标识集合，多个标识以英文逗号分隔开
                 *
                 * @return String 要查询的属性
                 */
                getExtPropertiesWithAddress():string;
                /**
                 * 初始化页面，给页面的地址信息字段赋值
                 *
                 * @param formView       页面视图
                 * @param hcfAddressList 候选人地址信息
                 */
                initViewWithAddress(formView:$.kd.bos.form.IFormView,hcfAddressList:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
                /**
                 * 在保存之前，给地址信息扩展字段赋值
                 *
                 * @param formView       页面视图
                 * @param hcfAddressList 候选人地址信息
                 */
                setValueBeforeSaveAddress(formView:$.kd.bos.form.IFormView,hcfAddressList:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
            }
            type IContactInfoService_T = IHcfInfoPageService & IContactInfoService_S & IContactInfoService$;
            interface IContactInfoService extends IContactInfoService_T {
            }
            interface IEducationExpService_S {
            }
            interface IEducationExpService$ {
                /**
                 * 获取教育证件的扩展字段标识集合，多个标识以英文逗号分隔
                 *
                 * @return String 要查询的属性
                 */
                getExtPropertiesForCert():string;
                /**
                 * 获取教育经历主体信息的扩展字段标识集合，多个标识以英文逗号分隔
                 *
                 * @return String 要查询的属性
                 */
                getExtPropertiesForExp():string;
                /**
                 * 初始化页面，给页面的扩展字段赋值
                 *
                 * @param formView            页面视图
                 * @param currentEduInfo      教育经历主体信息
                 * @param currentEduCertInfos 教育经历证件信息
                 */
                initViewForExt(formView:$.kd.bos.form.IFormView,currentEduInfo:$.kd.bos.dataentity.entity.DynamicObject,currentEduCertInfos:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
                /**
                 * 在保存之前，给教育证件扩展字段赋值
                 *
                 * @param formView           页面视图
                 * @param eduCertCollectiont 候选人教育证件
                 */
                setValueBeforeSaveEduCert(formView:$.kd.bos.form.IFormView,eduCertCollectiont:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
                /**
                 * 在保存之前，给教育经历主体扩展字段赋值
                 *
                 * @param formView   页面视图
                 * @param eduExpInfo 候选人教育经历主体信息
                 */
                setValueBeforeSaveEduExp(formView:$.kd.bos.form.IFormView,eduExpInfo:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IEducationExpService_T = IEducationExpService_S & IEducationExpService$;
            interface IEducationExpService extends IEducationExpService_T {
            }
            interface ICanFamilyService_S {
            }
            interface ICanFamilyService$ {
                /**
                 * 家庭成员扩展字段
                 *
                 * @return 扩展的字段
                 */
                getCanFamilyExtProperties():string;
            }
            type ICanFamilyService_T = IBasePeronInfoService & ICanFamilyService_S & ICanFamilyService$;
            interface ICanFamilyService extends ICanFamilyService_T {
            }
            interface IBankCardService_S {
            }
            interface IBankCardService$ {
            }
            type IBankCardService_T = IBasePeronInfoService & IBankCardService_S & IBankCardService$;
            interface IBankCardService extends IBankCardService_T {
            }
            interface IHcfInfoPageService_S {
            }
            interface IHcfInfoPageService$ {
                /**
                 * 获取扩展的字段标识集合，多个标识以英文逗号分隔
                 *
                 * @return String 要查询的属性
                 */
                getExtProperties():string;
                /**
                 * 初始化页面，给页面的扩展字段赋值
                 *
                 * @param formView  页面视图
                 * @param hcfInfoDy 候选人信息
                 */
                initViewForExt(formView:$.kd.bos.form.IFormView,hcfInfoDy:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 在保存之前，给扩展字段赋值
                 *
                 * @param formView  页面视图
                 * @param hcfInfoDy 候选人信息
                 */
                setValueBeforeSave(formView:$.kd.bos.form.IFormView,hcfInfoDy:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type IHcfInfoPageService_T = IHcfInfoPageService_S & IHcfInfoPageService$;
            interface IHcfInfoPageService extends IHcfInfoPageService_T {
            }
            interface IRsmpatinvService_S {
            }
            interface IRsmpatinvService$ {
            }
            type IRsmpatinvService_T = ITableValueInfoService & IRsmpatinvService_S & IRsmpatinvService$;
            interface IRsmpatinvService extends IRsmpatinvService_T {
            }
            interface ITableValueInfoService_S {
            }
            interface ITableValueInfoService$ {
                /**
                 * 设置table值
                 *
                 * @param vs            table对象
                 * @param indexRow      角标
                 * @param dynamicObject 对象值
                 */
                setTableValue(vs:$.kd.bos.entity.datamodel.TableValueSetter,indexRow:number,dynamicObject:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            type ITableValueInfoService_T = IBasePeronInfoService & ITableValueInfoService_S & ITableValueInfoService$;
            interface ITableValueInfoService extends ITableValueInfoService_T {
            }
        }
        namespace kd.sdk.hr.hom.mservice.helper{
            interface HOMServiceHelper_S {
                /**
                 * 创建入职单
                 *
                 * @param requestMap 入职单参数
                 * @return 结果
                 */
                createOnboardBill(requestMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 通过候选人id查询入职单
                 *
                 * @param candidateId 候选人id
                 * @return 入职单
                 */
                getOnbrdBillByCandidateId(candidateId:long):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 启动入职
                 *
                 * @param onboardIds 入职单ID
                 * @return 校验结果
                 */
                startOnboardBill(onboardIds:$.java.util.List):$.kd.bos.entity.operate.result.OperationResult;
            }
            interface HOMServiceHelper_C extends HOMServiceHelper_S {
                new():HOMServiceHelper;
            }
            interface HOMServiceHelper$ {
            }
            type HOMServiceHelper_T = HOMServiceHelper_S & HOMServiceHelper$;
            interface HOMServiceHelper extends HOMServiceHelper_T {
            }
        }
        namespace kd.sdk.hr.hom.service{
            interface IHOMLoginService_S {
            }
            interface IHOMLoginService$ {
                /**
                 * 校验用户id和手机号
                 *
                 * @param userId 候选人id
                 * @param phone  手机号
                 * @return 返回结果
                 */
                checkUserIdAndPhone(userId:string,phone:string):boolean;
            }
            type IHOMLoginService_T = IHOMLoginService_S & IHOMLoginService$;
            interface IHOMLoginService extends IHOMLoginService_T {
            }
            interface IOnbrdInfoService_S {
            }
            interface IOnbrdInfoService$ {
                /**
                 * 入职单生成工号
                 *
                 * @param dy         入职单
                 * @param numberList 工号
                 * @param count      计数
                 * @param expectNum  期望数字
                 */
                createCodeRuleHandler(dy:$.kd.bos.dataentity.entity.DynamicObject,numberList:$.java.util.List,count:number,expectNum:number):void;
                /**
                 * 校验字段必填
                 *
                 * @param view 页面view
                 * @return 校验结果
                 */
                validateFieldMandatory(view:$.kd.bos.form.IFormView):$.java.util.Optional;
                /**
                 * 多实体引入校验埋点
                 *
                 * @param entityName       实体名称
                 * @param optionCode       操作编码
                 * @param sheetRowDataList 数据
                 * @param importLogger     日志
                 */
                validateMultiOnbrd?(entityName:string,optionCode:string,sheetRowDataList:$.java.util.List,importLogger:$.kd.bos.entity.plugin.ImportLogger):void;
            }
            type IOnbrdInfoService_T = IOnbrdInfoService_S & IOnbrdInfoService$;
            interface IOnbrdInfoService extends IOnbrdInfoService_T {
            }
        }
        namespace kd.sdk.hr.hpfs{
            interface SdkHRHpfsModule_S {
            }
            type SdkHRHpfsModule_ST = $.kd.sdk.module.Module & SdkHRHpfsModule_S;
            interface SdkHRHpfsModule_C extends SdkHRHpfsModule_ST {
                new():SdkHRHpfsModule;
            }
            interface SdkHRHpfsModule$ {
            }
            type SdkHRHpfsModule_T = $.kd.sdk.module.Module & SdkHRHpfsModule_S & SdkHRHpfsModule$;
            interface SdkHRHpfsModule extends SdkHRHpfsModule_T {
            }
        }
        namespace kd.sdk.hr.hpfs.business.file{
            interface MultiViewTempService_S {
                getInstance():MultiViewTempService;
                /**
                 * 验证权限
                 *
                 * @param entityName 实体名
                 * @param permItemId 权限
                 * @return 是否有权限
                 */
                hasPerm(entityName:string,permItemId:string):boolean;
                /**
                 * 是否是单行附表
                 *
                 * @param pageNumber 元数据标识
                 * @return 是否
                 */
                isSingleRowTpl(pageNumber:string):boolean;
                /**
                 *  是否跳过中间层
                 *
                 * @return 是/否
                 */
                isSkipMiddleLevel():boolean;
            }
            interface MultiViewTempService_C extends MultiViewTempService_S {
                new():MultiViewTempService;
            }
            interface MultiViewTempService$ {
                /**
                 * 右边信息
                 *
                 * @param infoGroupConfig 配置信息
                 * @return flex
                 */
                buildRightPanelAp(infoGroupConfig:$.java.util.Map):$.kd.bos.metadata.form.container.FlexPanelAp;
                /**
                 * 公共form
                 *
                 * @param formShowParameter formShowParameter
                 * @param formId            formId
                 * @param targetKey         目标
                 * @param showType          类型
                 */
                commonForm(formShowParameter:$.kd.bos.form.FormShowParameter,formId:string,targetKey:string,showType:$.kd.bos.form.ShowType):void;
                /**
                 * 动态生成所有面板入口
                 *
                 * @param showParameter   showParameter
                 * @return 面板
                 */
                createMainPanelAp(showParameter:$.kd.bos.form.FormShowParameter):$.kd.bos.metadata.form.container.FlexPanelAp;
                /**
                 * 动态生成所有面板入口
                 *
                 * @param cnfId   配置方案id
                 * @param preView 预览
                 * @return 面板
                 */
                createMainPanelAp(cnfId:long,preView:string):$.kd.bos.metadata.form.container.FlexPanelAp;
                /**
                 * 创建根动态面板
                 *
                 * @param tabList   tabList
                 * @return flex
                 */
                createTabPageInfoPanelAp(tabList:$.java.util.List):$.kd.bos.metadata.form.container.FlexPanelAp;
                /**
                 * 批量调用权限接口
                 * @param infoGroupConfig 多视图信息
                 */
                getInfoGroupAuthList(infoGroupConfig:$.java.util.Map):void;
                /**
                 * 批量调用权限接口
                 * @param infoGroupConfig 多视图信息
                 */
                getInfoGroupAuthListByAppId(infoGroupConfig:$.java.util.Map,formShowParameter:$.kd.bos.form.FormShowParameter):void;
                /**
                 * 设置页签名字
                 *
                 * @param event event
                 * @param pre pre
                 */
                openFormPre(event:$.kd.bos.form.events.PreOpenFormEventArgs,pre:string):void;
                /**
                 * 设公共参数
                 *
                 * @param formShowParameter form
                 * @param view 视图
                 */
                setCommonCustomParam(formShowParameter:$.kd.bos.form.FormShowParameter,view:$.kd.bos.form.IFormView):void;
                /**
                 * 设置标签点击
                 *
                 * @param args     args
                 * @param formView formView
                 * @param plugin   plugin
                 * @param param
                 */
                setLabelClick(args:$.kd.bos.form.events.OnGetControlArgs,formView:$.kd.bos.mvc.form.FormView,plugin:$.kd.bos.form.plugin.AbstractFormPlugin,param:string):void;
                /**
                 * 设置标签事件
                 *
                 * @param args          args
                 * @param formView      视图
                 * @param plugin        插件
                 * @param mainEntryList 数据
                 */
                setLabelEvent(args:$.kd.bos.form.events.OnGetControlArgs,formView:$.kd.bos.mvc.form.FormView,plugin:$.kd.bos.form.plugin.AbstractFormPlugin,mainEntryList:$.java.util.List):void;
                /**
                 * 设置选中的样式
                 *
                 * @param currNumber 选中的
                 * @param view       视图
                 */
                setSelectStyle(currNumber:string,view:$.kd.bos.form.IFormView):void;
                /**
                 * 表单类型
                 *
                 * @param pageType pageType
                 * @return form
                 */
                showFormType(pageType:string):$.kd.bos.form.FormShowParameter;
                /**
                 * show页面
                 *
                 * @param dyFrom        form
                 * @param headEntryList 数据
                 * @param plugin        插件
                 * @param targetKey     模板页
                 * @param view          view
                 */
                showHeadFrom(dyFrom:$.kd.bos.form.FormShowParameter,headEntryList:$.java.util.List,plugin:$.kd.bos.form.plugin.AbstractFormPlugin,targetKey:string,view:$.kd.bos.form.IFormView):void;
            }
            type MultiViewTempService_T = MultiViewTempService_S & MultiViewTempService$;
            interface MultiViewTempService extends MultiViewTempService_T {
            }
        }
        namespace kd.sdk.hr.hpfs.business.mservice.helper{
            interface HPFSPersonChgServiceHelper_S {
                /**
                 * 事务交叉校验主入口
                 *
                 * @param params 参数
                 * @return 交叉校验结果
                 */
                crossValidate(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 批量事务交叉校验接口
                 *
                 * @param params 事务参数
                 * @return 交叉校验结果
                 */
                crossValidateBatch(params:$.java.util.List):$.java.util.Map;
                /**
                 * 操作型事务生效接口
                 *
                 * @param params 生效参数
                 * @return 事务执行结果
                 */
                executeActionPersonalChange(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 操作型事务配置查询接口
                 *
                 * @param params 查询参数
                 * @return 配置结果
                 */
                getActionPersonalChange(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 根据页面标识获取配置的变动操作id集合
                 *
                 * @param entityName 元数据页面标识
                 * @return 变动操作id集合
                 */
                getActionResByBill(entityName:string):$.java.util.Map;
                /**
                 * 根据变动记录id查询变动记录四层人信息
                 *
                 * @param recordId 变动记录id
                 * @return 变动记录四层人信息
                 */
                getChgInfoByRecordId(recordId:long):$.java.util.Map;
                /**
                 * 根据变动记录id查询变动记录详情
                 *
                 * @param recordId 变动记录id
                 * @return 变动记录详情
                 */
                getChgInfoDetailByRecordId(recordId:long):$.java.util.Map;
                /**
                 * 根据变动操作获取变动规则制定字段的数据范围
                 * 目前范围：用工关系类型、用工关系状态、任职类型、任职状态
                 *
                 * @param actionIds 变动操作id集合
                 * @return key->字段，value->固定值或者取值范围
                 */
                getChgRuleByActionIds(actionIds:$.java.util.List):$.java.util.Map;
                /**
                 * 查询事务变动交叉校验单据接口
                 *
                 * @param params 参数
                 * @return 单据信息
                 */
                getCrossValidateBills(params:$.java.util.Map):$.java.util.Map;
            }
            interface HPFSPersonChgServiceHelper_C extends HPFSPersonChgServiceHelper_S {
                new():HPFSPersonChgServiceHelper;
            }
            interface HPFSPersonChgServiceHelper$ {
            }
            type HPFSPersonChgServiceHelper_T = HPFSPersonChgServiceHelper_S & HPFSPersonChgServiceHelper$;
            interface HPFSPersonChgServiceHelper extends HPFSPersonChgServiceHelper_T {
            }
            interface HPFSPersonFlowServiceHelper_S {
                /**
                 * 生成流入流出记录
                 *
                 * @param params params
                 * @return Tuple
                 */
                generatePersonFlow(params:$.java.util.Map):$.kd.bos.dataentity.Tuple;
            }
            interface HPFSPersonFlowServiceHelper_C extends HPFSPersonFlowServiceHelper_S {
                new():HPFSPersonFlowServiceHelper;
            }
            interface HPFSPersonFlowServiceHelper$ {
            }
            type HPFSPersonFlowServiceHelper_T = HPFSPersonFlowServiceHelper_S & HPFSPersonFlowServiceHelper$;
            interface HPFSPersonFlowServiceHelper extends HPFSPersonFlowServiceHelper_T {
            }
        }
        namespace kd.sdk.hr.hpfs.business.perchg.bizentity{
            interface PerChgBizResult_S {
                /**
                 * 返回失败
                 *
                 * @param billId     {@link PerChgBizResult#billId}
                 * @param billSource {@link PerChgBizResult#billSource}
                 * @param errMsg     {@link PerChgBizResult#errMsg}
                 * @return PerChgBizResult
                 */
                fail(billId:long,billSource:string,errMsg:string):PerChgBizResult;
                /**
                 * 返回成功
                 *
                 * @param bizInfo bizInfo
                 * @return PerChgBizResult
                 */
                success(bizInfo:PerChgBizInfo):PerChgBizResult;
                /**
                 * 返回失败
                 *
                 * @param billId     {@link PerChgBizResult#billId}
                 * @param billSource {@link PerChgBizResult#billSource}
                 * @param errMsg     {@link PerChgBizResult#errMsg}
                 * @return PerChgBizResult
                 */
                success(billId:long,billSource:string):PerChgBizResult;
                /**
                 * 返回成功
                 *
                 * @param billId     {@link PerChgBizResult#billId}
                 * @param billSource {@link PerChgBizResult#billSource}
                 * @return PerChgBizResult
                 */
                success(billId:long,billSource:string,recordId:long):PerChgBizResult;
                /**
                 * 返回成功
                 *
                 * @param billId        {@link PerChgBizResult#billId}
                 * @param billSource    {@link PerChgBizResult#billSource}
                 * @param recordId      {@link PerChgBizResult#recordId}
                 * @param newPersonId   {@link PerChgBizResult#newPersonId}
                 * @param newEmployeeId {@link PerChgBizResult#newEmployeeId}
                 * @param newComEmpId   {@link PerChgBizResult#newComEmpId}
                 * @param newDepEmpId   {@link PerChgBizResult#newDepEmpId}
                 * @param newErfileId   {@link PerChgBizResult#newErfileId}
                 * @return PerChgBizResult
                 */
                success(billId:long,billSource:string,recordId:long,newPersonId:long,newEmployeeId:long,newComEmpId:long,newDepEmpId:long,newErfileId:long):PerChgBizResult;
            }
            type PerChgBizResult_ST = $.java.io.Serializable & PerChgBizResult_S;
            interface PerChgBizResult_C extends PerChgBizResult_ST {
                new():PerChgBizResult;
            }
            interface PerChgBizResult$ {
                /**
                 * @return {@link PerChgBizResult#billId}
                 */
                getBillId():long;
                /**
                 * @return {@link PerChgBizResult#billSource}
                 */
                getBillSource():string;
                /**
                 * @return {@link PerChgBizResult#errMsg}
                 */
                getErrMsg():string;
                /**
                 * @return {@link PerChgBizResult#msgSynActionId}
                 */
                getMsgSynActionId():long;
                /**
                 * @return {@link PerChgBizResult#newComEmpId}
                 */
                getNewComEmpId():long;
                /**
                 * @return {@link PerChgBizResult#newDepEmpId}
                 */
                getNewDepEmpId():long;
                /**
                 * @return {@link PerChgBizResult#newEmployeeId}
                 */
                getNewEmployeeId():long;
                /**
                 * @return {@link PerChgBizResult#newErfileId}
                 */
                getNewErfileId():long;
                /**
                 * @return {@link PerChgBizResult#newPersonId}
                 */
                getNewPersonId():long;
                /**
                 * @return {@link PerChgBizResult#recordId}
                 */
                getRecordId():long;
                /**
                 * @return {@link PerChgBizResult#success}
                 */
                getSuccess():boolean;
                /**
                 * @return {@link PerChgBizResult#systemTag}
                 */
                getSystemTag():string;
                /**
                 * @param billId {@link PerChgBizResult#billId}
                 */
                setBillId(billId:long):void;
                /**
                 * @param billSource {@link PerChgBizResult#billSource}
                 */
                setBillSource(billSource:string):void;
                /**
                 * @param errMsg {@link PerChgBizResult#errMsg}
                 */
                setErrMsg(errMsg:string):void;
                /**
                 * @param msgSynActionId {@link PerChgBizResult#msgSynActionId}
                 */
                setMsgSynActionId(msgSynActionId:long):void;
                /**
                 * @param newComEmpId {@link PerChgBizResult#newComEmpId}
                 */
                setNewComEmpId(newComEmpId:long):void;
                /**
                 * @param newDepEmpId {@link PerChgBizResult#newDepEmpId}
                 */
                setNewDepEmpId(newDepEmpId:long):void;
                /**
                 * @param newEmployeeId {@link PerChgBizResult#newEmployeeId}
                 */
                setNewEmployeeId(newEmployeeId:long):void;
                /**
                 * @param newErfileId {@link PerChgBizResult#newErfileId}
                 */
                setNewErfileId(newErfileId:long):void;
                /**
                 * @param newPersonId {@link PerChgBizResult#newPersonId}
                 */
                setNewPersonId(newPersonId:long):void;
                /**
                 * @param recordId {@link PerChgBizResult#recordId}
                 */
                setRecordId(recordId:long):void;
                /**
                 * @param success {@link PerChgBizResult#success}
                 */
                setSuccess(success:boolean):void;
                /**
                 * @param systemTag {@link PerChgBizResult#systemTag}
                 */
                setSystemTag(systemTag:string):void;
            }
            type PerChgBizResult_T = $.java.io.Serializable & PerChgBizResult_S & PerChgBizResult$;
            interface PerChgBizResult extends PerChgBizResult_T {
            }
            interface PerChgAttachment_S {
            }
            type PerChgAttachment_ST = $.java.io.Serializable & PerChgAttachment_S;
            interface PerChgAttachment_C extends PerChgAttachment_ST {
                new():PerChgAttachment;
            }
            interface PerChgAttachment$ {
                /**
                 * getAliasfileName
                 *
                 * @return aliasfileName
                 */
                getAliasfileName():string;
                /**
                 * getAttachmentName
                 *
                 * @return attachmentName
                 */
                getAttachmentName():string;
                /**
                 * getAttachmentPanel
                 *
                 * @return attachmentPanel
                 */
                getAttachmentPanel():string;
                /**
                 * getAttachmentSize
                 *
                 * @return attachmentSize
                 */
                getAttachmentSize():string;
                /**
                 * getBillType
                 *
                 * @return billType
                 */
                getBillType():string;
                /**
                 * getDescription
                 *
                 * @return description
                 */
                getDescription():string;
                /**
                 * getDocVersion
                 *
                 * @return docVersion
                 */
                getDocVersion():string;
                /**
                 * getDocrelativepath
                 *
                 * @return docrelativepath
                 */
                getDocrelativepath():string;
                /**
                 * getExtName
                 *
                 * @return extName
                 */
                getExtName():string;
                /**
                 * getInterId
                 *
                 * @return interId
                 */
                getInterId():string;
                /**
                 * getNumber
                 *
                 * @return number
                 */
                getNumber():string;
                /**
                 * getShare
                 *
                 * @return share
                 */
                getShare():string;
                /**
                 * setAliasfileName
                 *
                 * @param aliasfileName aliasfileName
                 */
                setAliasfileName(aliasfileName:string):void;
                /**
                 * setAttachmentName
                 *
                 * @param attachmentName attachmentName
                 */
                setAttachmentName(attachmentName:string):void;
                /**
                 * setAttachmentPanel
                 *
                 * @param attachmentPanel attachmentPanel
                 */
                setAttachmentPanel(attachmentPanel:string):void;
                /**
                 * setAttachmentSize
                 *
                 * @param attachmentSize attachmentSize
                 */
                setAttachmentSize(attachmentSize:string):void;
                /**
                 * setBillType
                 *
                 * @param billType billType
                 */
                setBillType(billType:string):void;
                /**
                 * setDescription
                 *
                 * @param description description
                 */
                setDescription(description:string):void;
                /**
                 * setDocVersion
                 *
                 * @param docVersion docVersion
                 */
                setDocVersion(docVersion:string):void;
                /**
                 * setDocrelativepath
                 *
                 * @param docrelativepath docrelativepath
                 */
                setDocrelativepath(docrelativepath:string):void;
                /**
                 * setExtName
                 *
                 * @param extName extName
                 */
                setExtName(extName:string):void;
                /**
                 * setInterId
                 *
                 * @param interId interId
                 */
                setInterId(interId:string):void;
                /**
                 * setNumber
                 *
                 * @param number number
                 */
                setNumber(number_arg:string):void;
                /**
                 * setShare
                 *
                 * @param share share
                 */
                setShare(share:string):void;
            }
            type PerChgAttachment_T = $.java.io.Serializable & PerChgAttachment_S & PerChgAttachment$;
            interface PerChgAttachment extends PerChgAttachment_T {
            }
            interface PerChgBizInfo_S {
            }
            type PerChgBizInfo_ST = $.java.io.Serializable & PerChgBizInfo_S;
            interface PerChgBizInfo_C extends PerChgBizInfo_ST {
                new():PerChgBizInfo;
            }
            interface PerChgBizInfo$ {
                addPluginEntry(plugin:$.kd.bos.dataentity.entity.DynamicObject):void;
                addPluginEntry(pluginEntry:$.java.util.List):void;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#actionId}
                 */
                getActionId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#attachmentData}
                 */
                getAttachmentData():$.java.util.Map;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#billId}
                 */
                getBillId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#billNo}
                 */
                getBillNo():string;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#billSource}
                 */
                getBillSource():string;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#bsed}
                 */
                getBsed():Date;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#chgEventId}
                 */
                getChgEventId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#chgRule}
                 */
                getChgRule():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#chgrecordId}
                 */
                getChgrecordId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#customParams}
                 */
                getCustomParams():$.java.util.Map;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#dataRow}
                 */
                getDataRow():$.java.util.Map;
                /**
                 * 获取校验报错需要中断的元数据页面标识
                 * 为防止空指针，在查询的时候如果为null则new一个新的list
                 *
                 * @return entityName2ErrorIfVerificationFail
                 */
                getEntityName2ErrorIfVerificationFail():$.java.util.Set;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#eventEntity}
                 */
                getEventEntity():string;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#eventId}
                 */
                getEventId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#idsRecord}
                 */
                getIdsRecord():$.java.util.Map;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#logEntryMap}
                 */
                getLogEntryMap():$.java.util.Map;
                getNewAppointremoverel():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newComempId}
                 */
                getNewComempId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newDepempId}
                 */
                getNewDepempId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newEmpEntRel}
                 */
                getNewEmpEntRel():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newEmpPosOrgRel}
                 */
                getNewEmpPosOrgRel():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newEmployeeId}
                 */
                getNewEmployeeId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newErfileId}
                 */
                getNewErfileId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newPerNonTSProp}
                 */
                getNewPerNonTSProp():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newPersonId}
                 */
                getNewPersonId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#oldComempId}
                 */
                getOldComempId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#oldDepempId}
                 */
                getOldDepempId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#oldEmployeeId}
                 */
                getOldEmployeeId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#oldErfileId}
                 */
                getOldErfileId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#oldPersonId}
                 */
                getOldPersonId():long;
                /**
                 * 根据元数据页面获取旧的四层人数据
                 *
                 * @param entityName 元数据页面
                 * @return id
                 */
                getOldPersonModelId(entityName:string):long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#perEduExpIds}
                 */
                getPerEduExpIds():$.java.util.Map;
                getPluginEntry():$.java.util.List;
                getPluginResMap():$.java.util.Map;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#ruleId}
                 */
                getRuleId():long;
                /**
                 * @return {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#tacticFlowTypeMap}
                 */
                getTacticFlowTypeMap():$.java.util.Map;
                getValueMap():$.java.util.Map;
                putPluginResMap(pluginNumber:string,errorMsg:string):void;
                /**
                 * @param actionId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#actionId}
                 */
                setActionId(actionId:long):void;
                /**
                 * @param attachmentData {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#attachmentData}
                 */
                setAttachmentData(attachmentData:$.java.util.Map):void;
                /**
                 * @param billId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#billId}
                 */
                setBillId(billId:long):void;
                /**
                 * @param billNo {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#billNo}
                 */
                setBillNo(billNo:string):void;
                /**
                 * @param billSource {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#billSource}
                 */
                setBillSource(billSource:string):void;
                /**
                 * @param bsed {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#bsed}
                 */
                setBsed(bsed:Date):void;
                /**
                 * @param chgEventId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#chgEventId}
                 */
                setChgEventId(chgEventId:long):void;
                /**
                 * @param chgRule {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#chgRule}
                 */
                setChgRule(chgRule:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * @param chgrecordId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#chgrecordId}
                 */
                setChgrecordId(chgrecordId:long):void;
                /**
                 * @param customParams {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#customParams}
                 */
                setCustomParams(customParams:$.java.util.Map):void;
                /**
                 * @param dataRow {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#dataRow}
                 */
                setDataRow(dataRow:$.java.util.Map):void;
                /**
                 * @param entityName2ErrorIfVerificationFail {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#entityName2ErrorIfVerificationFail}
                 */
                setEntityName2ErrorIfVerificationFail(entityName2ErrorIfVerificationFail:$.java.util.Set):void;
                /**
                 * @param eventEntity {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#eventEntity}
                 */
                setEventEntity(eventEntity:string):void;
                /**
                 * @param eventId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#eventId}
                 */
                setEventId(eventId:long):void;
                /**
                 * setIdsRecord
                 *
                 * @param entityName entityName
                 * @param chgRecord  chgRecord
                 */
                setIdsRecord(entityName:string,chgRecord:kd.sdk.hr.hpfs.business.perchg.executor.model.ChgRecordEntryDto):void;
                /**
                 * setLogEntryMap
                 *
                 * @param entityName  entityName
                 * @param id          id
                 * @param chgLogEntry chgLogEntry
                 */
                setLogEntryMap(entityName:string,id:long,chgLogEntry:kd.sdk.hr.hpfs.business.perchg.executor.model.ChgLogEntryDto):void;
                setNewAppointremoverel(newAppointremoverel:long):void;
                /**
                 * @param newComempId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newComempId}
                 */
                setNewComempId(newComempId:long):void;
                /**
                 * @param newDepempId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newDepempId}
                 */
                setNewDepempId(newDepempId:long):void;
                /**
                 * @param newEmpEntRel {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newEmpEntRel}
                 */
                setNewEmpEntRel(newEmpEntRel:long):void;
                /**
                 * @param newEmpPosOrgRel {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newEmpPosOrgRel}
                 */
                setNewEmpPosOrgRel(newEmpPosOrgRel:long):void;
                /**
                 * @param newEmployeeId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newEmployeeId}
                 */
                setNewEmployeeId(newEmployeeId:long):void;
                /**
                 * @param newErfileId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newErfileId}
                 */
                setNewErfileId(newErfileId:long):void;
                /**
                 * @param newPerNonTSProp {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newPerNonTSProp}
                 */
                setNewPerNonTSProp(newPerNonTSProp:long):void;
                /**
                 * @param newPersonId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#newPersonId}
                 */
                setNewPersonId(newPersonId:long):void;
                /**
                 * @param oldComempId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#oldComempId}
                 */
                setOldComempId(oldComempId:long):void;
                /**
                 * @param oldDepempId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#oldDepempId}
                 */
                setOldDepempId(oldDepempId:long):void;
                /**
                 * @param oldEmployeeId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#oldEmployeeId}
                 */
                setOldEmployeeId(oldEmployeeId:long):void;
                /**
                 * @param oldErfileId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#oldErfileId}
                 */
                setOldErfileId(oldErfileId:long):void;
                /**
                 * @param oldPersonId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#oldPersonId}
                 */
                setOldPersonId(oldPersonId:long):void;
                /**
                 * setPerEduExpIds
                 *
                 * @param beforeId beforeId
                 * @param afterId  afterId
                 */
                setPerEduExpIds(beforeId:long,afterId:long):void;
                setPluginEntry(pluginEntry:$.java.util.List):void;
                setPluginResMap(pluginResMap:$.java.util.Map):void;
                /**
                 * @param ruleId {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#ruleId}
                 */
                setRuleId(ruleId:long):void;
                /**
                 * @param tacticFlowTypeMap {@link kd.sdk.hr.hpfs.business.perchg.bizentity.PerChgBizInfo#tacticFlowTypeMap}
                 */
                setTacticFlowTypeMap(tacticFlowTypeMap:$.java.util.Map):void;
                setValueMap(valueMap:$.java.util.Map):void;
            }
            type PerChgBizInfo_T = $.java.io.Serializable & PerChgBizInfo_S & PerChgBizInfo$;
            interface PerChgBizInfo extends PerChgBizInfo_T {
            }
        }
        namespace kd.sdk.hr.hpfs.business.perchg.executor.enums{
            enum ChgLogEntryStatusEnum {
                SUCCESS,
                FAIL,
                SKIP
            }
            enum ChgFlowTypeEnum {
                FLOW_UNRELATED,
                FLOW_IN,
                FLOW_OUT
            }
            enum ChgModeEnum {
                ADD_NEW,
                MODIFY,
                INVALID,
                DELETE,
                UNCHANGED
            }
        }
        namespace kd.sdk.hr.hpfs.business.perchg.executor.model{
            interface ChgRecordEntryDto_S {
                /**
                 * 组装新增的变动记录
                 *
                 * @param idAfter  新生成boid
                 * @param flowType 流动类型 {@link ChgFlowTypeEnum}
                 * @return 新增的变动记录
                 */
                formatNewRecord(idAfter:long,flowType:string):ChgRecordEntryDto;
                /**
                 * 组装新增的变动记录
                 *
                 * @param idAfter  新生成boid
                 * @param flowType 流动类型 {@link ChgFlowTypeEnum}
                 * @return 新增的变动记录
                 */
                formatNewRecord(idAfter:long,flowType:string,dataDy:$.kd.bos.dataentity.entity.DynamicObject):ChgRecordEntryDto;
                /**
                 * 组装变动记录
                 *
                 * @param idBefore  前bois
                 * @param vidBefore 前vid
                 * @param idAfter   后boid
                 * @param vidAfter  后vid
                 * @param chgMode   变动方式 {@link ChgModeEnum}
                 * @param flowType  流动类型 {@link ChgFlowTypeEnum}
                 * @return 变动记录
                 */
                formatRecord(idBefore:long,vidBefore:long,idAfter:long,vidAfter:long,chgMode:string,flowType:string):ChgRecordEntryDto;
                /**
                 * 组装变动记录
                 *
                 * @param idBefore  前bois
                 * @param vidBefore 前vid
                 * @param idAfter   后boid
                 * @param vidAfter  后vid
                 * @param chgMode   变动方式 {@link ChgModeEnum}
                 * @param flowType  流动类型 {@link ChgFlowTypeEnum}
                 * @param dataDy    数据dy
                 * @return 变动记录
                 */
                formatRecord(idBefore:long,vidBefore:long,idAfter:long,vidAfter:long,chgMode:string,flowType:string,dataDy:$.kd.bos.dataentity.entity.DynamicObject):ChgRecordEntryDto;
                /**
                 * dto写入dyn
                 *
                 * @param dynNew     dyn对象
                 * @param entityName 元数据页面标识
                 * @param chgRecord  记录分录dto
                 */
                recordEntrySetValue(dynNew:$.kd.bos.dataentity.entity.DynamicObject,entityName:string,chgRecord:ChgRecordEntryDto):void;
            }
            type ChgRecordEntryDto_ST = $.java.io.Serializable & ChgRecordEntryDto_S;
            interface ChgRecordEntryDto_C extends ChgRecordEntryDto_ST {
                new():ChgRecordEntryDto;
            }
            interface ChgRecordEntryDto$ {
                /**
                 * @return {@link ChgRecordEntryDto#chgMode}
                 */
                getChgMode():string;
                getDataDy():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * @return {@link ChgRecordEntryDto#flowType}
                 */
                getFlowType():string;
                /**
                 * @return {@link ChgRecordEntryDto#idAfter}
                 */
                getIdAfter():long;
                /**
                 * @return {@link ChgRecordEntryDto#idBefore}
                 */
                getIdBefore():long;
                /**
                 * @return {@link ChgRecordEntryDto#vidAfter}
                 */
                getVidAfter():long;
                /**
                 * @return {@link ChgRecordEntryDto#vidBefore}
                 */
                getVidBefore():long;
                /**
                 * @param chgMode {@link ChgRecordEntryDto#chgMode}
                 */
                setChgMode(chgMode:string):void;
                setDataDy(dataDy:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * @param flowType {@link ChgRecordEntryDto#flowType}
                 */
                setFlowType(flowType:string):void;
                /**
                 * @param idAfter {@link ChgRecordEntryDto#idAfter}
                 */
                setIdAfter(idAfter:long):void;
                /**
                 * @param idBefore {@link ChgRecordEntryDto#idBefore}
                 */
                setIdBefore(idBefore:long):void;
                /**
                 * @param vidAfter {@link ChgRecordEntryDto#vidAfter}
                 */
                setVidAfter(vidAfter:long):void;
                /**
                 * @param vidBefore {@link ChgRecordEntryDto#vidBefore}
                 */
                setVidBefore(vidBefore:long):void;
                /**
                 * 返回对象信息
                 *
                 * @return 对象信息
                 */
                toPrintString():string;
            }
            type ChgRecordEntryDto_T = $.java.io.Serializable & ChgRecordEntryDto_S & ChgRecordEntryDto$;
            interface ChgRecordEntryDto extends ChgRecordEntryDto_T {
            }
            interface ChgExternalDataEntryDto_S {
            }
            type ChgExternalDataEntryDto_ST = ChgRecordEntryDto_S & ChgExternalDataEntryDto_S;
            interface ChgExternalDataEntryDto_C extends ChgExternalDataEntryDto_ST {
                new():ChgExternalDataEntryDto;
            }
            interface ChgExternalDataEntryDto$ {
            }
            type ChgExternalDataEntryDto_T = ChgRecordEntryDto & ChgExternalDataEntryDto_S & ChgExternalDataEntryDto$;
            interface ChgExternalDataEntryDto extends ChgExternalDataEntryDto_T {
            }
            interface ChgLogEntryDto_S {
                /**
                 * 创建 ChgLogEntryDto
                 *
                 * @param entityName  元数据页面标识
                 * @param chgTacticId 信息组规则id
                 * @param dataId      数据id
                 * @return ChgLogEntryDto
                 */
                init(entityName:string,chgTacticId:long,dataId:long):ChgLogEntryDto;
            }
            interface ChgLogEntryDto_C extends ChgLogEntryDto_S {
                new():ChgLogEntryDto;
            }
            interface ChgLogEntryDto$ {
                /**
                 * @return {@link ChgLogEntryDto#chgObject}
                 */
                getChgObject():string;
                /**
                 * @return {@link ChgLogEntryDto#chgTacticId}
                 */
                getChgTacticId():long;
                /**
                 * @return {@link ChgLogEntryDto#dataId}
                 */
                getDataId():long;
                /**
                 * @return {@link ChgLogEntryDto#errorMsg}
                 */
                getErrorMsg():string;
                /**
                 * @return {@link ChgLogEntryDto#saveStatus}
                 */
                getSaveStatus():string;
                /**
                 * @return {@link ChgLogEntryDto#validStatus}
                 */
                getValidStatus():string;
                /**
                 * @param chgObject {@link ChgLogEntryDto#chgObject}
                 */
                setChgObject(chgObject:string):void;
                /**
                 * @param chgTacticId {@link ChgLogEntryDto#chgTacticId}
                 */
                setChgTacticId(chgTacticId:long):void;
                /**
                 * @param dataId {@link ChgLogEntryDto#dataId}
                 */
                setDataId(dataId:long):void;
                /**
                 * @param errorMsg {@link ChgLogEntryDto#errorMsg}
                 */
                setErrorMsg(errorMsg:string):void;
                /**
                 * @param saveStatus {@link ChgLogEntryDto#saveStatus}
                 */
                setSaveStatus(saveStatus:string):void;
                /**
                 * @param validStatus {@link ChgLogEntryDto#validStatus}
                 */
                setValidStatus(validStatus:string):void;
            }
            type ChgLogEntryDto_T = ChgLogEntryDto_S & ChgLogEntryDto$;
            interface ChgLogEntryDto extends ChgLogEntryDto_T {
            }
        }
        namespace kd.sdk.hr.hpfs.formplugin.file{
            interface DynFilePagePlugin_S {
            }
            type DynFilePagePlugin_ST = $.kd.bos.form.plugin.AbstractFormPlugin & DynFilePagePlugin_S;
            interface DynFilePagePlugin_C extends DynFilePagePlugin_ST {
                new():DynFilePagePlugin;
            }
            interface DynFilePagePlugin$ {
            }
            type DynFilePagePlugin_T = $.kd.bos.form.plugin.AbstractFormPlugin & DynFilePagePlugin_S & DynFilePagePlugin$;
            interface DynFilePagePlugin extends DynFilePagePlugin_T {
            }
            interface MultiViewTemplatePlugin_S {
            }
            type MultiViewTemplatePlugin_ST = $.kd.bos.form.plugin.AbstractFormPlugin & MultiViewTemplatePlugin_S;
            interface MultiViewTemplatePlugin_C extends MultiViewTemplatePlugin_ST {
                new():MultiViewTemplatePlugin;
            }
            interface MultiViewTemplatePlugin$ {
            }
            type MultiViewTemplatePlugin_T = $.kd.bos.form.plugin.AbstractFormPlugin & MultiViewTemplatePlugin_S & MultiViewTemplatePlugin$;
            interface MultiViewTemplatePlugin extends MultiViewTemplatePlugin_T {
            }
        }
        namespace kd.sdk.hr.hspm{
            interface SdkHRHspmModule_S {
            }
            type SdkHRHspmModule_ST = $.kd.sdk.module.Module & SdkHRHspmModule_S;
            interface SdkHRHspmModule_C extends SdkHRHspmModule_ST {
                new():SdkHRHspmModule;
            }
            interface SdkHRHspmModule$ {
            }
            type SdkHRHspmModule_T = $.kd.sdk.module.Module & SdkHRHspmModule_S & SdkHRHspmModule$;
            interface SdkHRHspmModule extends SdkHRHspmModule_T {
            }
        }
        namespace kd.sdk.hr.hspm.business.helper{
            interface BasedataHelper_S {
                /**
                 * 根据名称 查询带审核的基础资料
                 * @param entityName 基础资料实体
                 * @param name 名称
                 * @return 单个基础资料的数据
                 */
                getAuditBaseDataByName(entityName:string,name:string):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 查询基础资料
                 *
                 * @param entityName 基础资料实体
                 * @param pkId 主键
                 * @return 单个基础资料的数据
                 */
                getBasedataById(entityName:string,pkId:long):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 查询语言证书
                 *
                 * @param languagetypeId 语言种类ID
                 * @return 单个基础资料的数据
                 */
                getLanguagecertByLanguagetype(languagetypeId:long):$.java.util.Map;
                /**
                 * 查询带审核的基础资料的ID集合
                 *
                 * @return 基础资料ID集合
                 */
                queryAudisBasedataIdList(entityName:string):$.java.util.List;
                /**
                 * 增加initstatus初始化状态
                 *
                 * @param desDy 动态对象
                 * @return 对象
                 */
                setInitData(desDy:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
            }
            interface BasedataHelper_C extends BasedataHelper_S {
                new():BasedataHelper;
            }
            interface BasedataHelper$ {
            }
            type BasedataHelper_T = BasedataHelper_S & BasedataHelper$;
            interface BasedataHelper extends BasedataHelper_T {
            }
            interface HpfsChgexternalrecordQueueHelper_S {
                /**
                 * 非时序表删除成功，批量发送消息
                 * 获取人事物变动进行消息同步对象
                 *
                 * @param dataEntities 非时序表删除的实体集合
                 * @param entityNumber 实体编码
                 * @param sourceNumber 操作实体
                 * @return 人事物变动进行消息同步对象
                 */
                createBatchHisNonLineDeleteMsg(dataEntities:$.kd.bos.dataentity.entity.DynamicObject[],entityNumber:string,sourceNumber:string):$.java.util.Map;
                /**
                 * 非时序表更新成功，批量发送消息（定制）
                 * 创建人事物变动进行消息同步对象
                 *
                 * @param personId      自然人ID
                 * @param paramMap      发送保存的入参
                 * @param operateResult 调用历史模型接口返回包装类
                 * @param sourceEntity  实体
                 * @return 人事物变动进行消息同步对象
                 */
                createBatchHisNonLineInsertOrUpdateMsg(personId:long,paramMap:$.java.util.Map,operateResult:kd.sdk.hr.hspm.common.result.HrpiServiceOperateResult,sourceEntity:string):kd.sdk.hr.hspm.common.dto.HpfsChgexternalrecordQueueDto;
                /**
                 * 档案列表的非时序表姓名修改，同步hrpi_person（定制）
                 * 创建人事物变动进行消息同步对象
                 *
                 * @param personId      自然人ID
                 * @param paramMap      发送保存的入参
                 * @param sourceEntity  实体
                 * @return 人事物变动进行消息同步对象
                 */
                createNoPropInsertOrUpdateMsg(personId:long,paramMap:$.java.util.Map,sourceEntity:string):void;
                /**
                 * 初始化报文参数对象
                 *
                 * @param personId     自然人ID
                 * @param sourceNumber 实体
                 * @return 报文参数
                 */
                initHpfsChgexternalrecordQueueDto(personId:long,sourceNumber:string):kd.sdk.hr.hspm.common.dto.HpfsChgexternalrecordQueueDto;
                /**
                 * 教育信息更新或删除完成后，合并报文并发送报文（定制）
                 * 调用人事物变动进行消息同步
                 *
                 * @param pereduexpHpfsChgexternalrecordQueueDtoMap 教育经历更新/删除操作已经产生的报文
                 * @param pereduexpcertBatchHisNonLineDeleteMsg     教育证件删除操作已经产生的报文
                 */
                mergeRecordAndSend(pereduexpHpfsChgexternalrecordQueueDtoMap:$.java.util.Map,pereduexpcertBatchHisNonLineDeleteMsg:$.java.util.Map):void;
                /**
                 * 非时序表删除成功，批量发送消息
                 * 调用人事物变动进行消息同步
                 *
                 * @param dataEntities 非时序表删除的实体集合
                 * @param entityNumber 实体编码
                 * @param sourceNumber 操作实体
                 */
                sendBatchHisNonLineDeleteMsg(dataEntities:$.kd.bos.dataentity.entity.DynamicObject[],entityNumber:string,sourceNumber:string):void;
                /**
                 * 非时序表新增成功，批量发送消息
                 * 调用人事物变动进行消息同步
                 *
                 * @param dataEntities 实体的动态数据对象集
                 * @param entityNumber 实体编码
                 * @param sourceNumber 操作实体
                 */
                sendBatchHisNonLineInsertMsg(dataEntities:$.kd.bos.dataentity.entity.DynamicObject[],entityNumber:string,sourceNumber:string):void;
                /**
                 * 非时序表更新成功，批量发送消息（定制）
                 * 调用人事物变动进行消息同步
                 *
                 * @param personId      自然人ID
                 * @param paramMap      发送保存的入参
                 * @param operateResult 调用历史模型接口返回包装类
                 * @param sourceEntity  实体
                 */
                sendBatchHisNonLineInsertOrUpdateMsg(personId:long,paramMap:$.java.util.Map,operateResult:kd.sdk.hr.hspm.common.result.HrpiServiceOperateResult,sourceEntity:string):void;
                /**
                 * 非时序表更新成功，批量发送消息
                 * 调用人事物变动进行消息同步
                 *
                 * @param dataEntities 实体的动态数据对象集
                 * @param entityNumber 实体编码
                 * @param sourceNumber 操作实体
                 */
                sendBatchHisNonLineUpdateMsg(dataEntities:$.kd.bos.dataentity.entity.DynamicObject[],entityNumber:string,sourceNumber:string):void;
                /**
                 * 教育信息新增成功，发送消息（定制）
                 * 调用人事物变动进行消息同步
                 *
                 * @param personId                  自然人ID
                 * @param paramMap                  发送保存的入参
                 * @param pereduexpcertDyCollection 教育证件表待保存的数据
                 * @param operateResult             调用历史模型接口返回包装类
                 */
                sendCustomerHisNonLineMsgBySavePereduexpinfo(personId:long,paramMap:$.java.util.Map,pereduexpcertDyCollection:$.kd.bos.dataentity.entity.DynamicObjectCollection,operateResult:kd.sdk.hr.hspm.common.result.HrpiServiceOperateResult):void;
                /**
                 * 个人基本信息表更新成功，发送消息（定制）
                 * 调用人事物变动进行消息同步
                 *
                 * @param personId        自然人ID
                 * @param paramMap        发送保存的入参
                 * @param hrpiPertspropDy 时序性表数据保存前的最新记录
                 * @param ermanFileDbMap  存放修改前人事业务档案数据的集合
                 * @param operateResult   调用历史模型接口返回包装类
                 */
                sendCustomerHisNonLineUpdateMsgByPersoninfo(personId:long,paramMap:$.java.util.Map,hrpiPertspropDy:$.kd.bos.dataentity.entity.DynamicObject,ermanFileDbMap:$.java.util.Map,operateResult:kd.sdk.hr.hspm.common.result.HrpiServiceOperateResult):void;
                /**
                 * 非时序表新增成功，发送消息
                 * 调用人事物变动进行消息同步
                 *
                 * @param dataEntity   实体的动态数据对象
                 * @param entityNumber 实体编码
                 * @param sourceNumber 操作实体
                 */
                sendHisNonLineInsertMsg(dataEntity:$.kd.bos.dataentity.entity.DynamicObject,entityNumber:string,sourceNumber:string):void;
                /**
                 * 非时序表更新成功，发送消息
                 * 调用人事物变动进行消息同步
                 *
                 * @param dataEntity   实体的动态数据对象
                 * @param entityNumber 实体编码
                 * @param sourceNumber 操作实体
                 */
                sendHisNonLineUpdateMsg(dataEntity:$.kd.bos.dataentity.entity.DynamicObject,entityNumber:string,sourceNumber:string):void;
                /**
                 * 发送消息
                 *
                 * @param hpfsChgexternalrecordQueueDto 报文参数
                 */
                sendMsg(hpfsChgexternalrecordQueueDto:kd.sdk.hr.hspm.common.dto.HpfsChgexternalrecordQueueDto):void;
            }
            interface HpfsChgexternalrecordQueueHelper_C extends HpfsChgexternalrecordQueueHelper_S {
                new():HpfsChgexternalrecordQueueHelper;
            }
            interface HpfsChgexternalrecordQueueHelper$ {
            }
            type HpfsChgexternalrecordQueueHelper_T = HpfsChgexternalrecordQueueHelper_S & HpfsChgexternalrecordQueueHelper$;
            interface HpfsChgexternalrecordQueueHelper extends HpfsChgexternalrecordQueueHelper_T {
            }
            interface InfoGroupHelper_S {
                /**
                 * SubEntryProp list列表转出map
                 *
                 * @param subEntryProps 子分录
                 * @return map
                 */
                changeToSubEntryPropsMap(subEntryProps:$.java.util.List):$.java.util.Map;
                /**
                 * 关闭指引区域
                 *
                 * @param view 多视图配置视图
                 */
                closeGuideFlex(view:$.kd.bos.form.IFormView):void;
                /**
                 * 删除关联的二级菜单
                 *
                 * @param view    多视图方案view
                 * @param groupId 删除的信息组id
                 */
                delRelationMultiLevelMenu(view:$.kd.bos.form.IFormView,groupId:string):void;
                /**
                 *  是否开启了多级菜单
                 *
                 * @return 是/否
                 */
                enableMultiLevelMenu():boolean;
                /**
                 * 是否有默认行
                 *
                 * @param dynamicObjectCollection 分录数据
                 * @return 是否
                 */
                existDefaultRow(dynamicObjectCollection:$.kd.bos.dataentity.entity.DynamicObjectCollection):boolean;
                /**
                 * 获取业务类型
                 *
                 * @param view 多视图配置视图
                 * @return 业务类型过滤
                 */
                getBusinessTypeFilter(view:$.kd.bos.form.IFormView):$.kd.bos.orm.query.QFilter;
                /**
                 * 获取配置区域
                 *
                 * @param isMainArea 是否是主页区域
                 * @return 配置区域
                 */
                getConfigArea(isMainArea:boolean):kd.sdk.hr.hspm.common.enums.ConfigAreaEnum;
                /**
                 * 获取当前信息组分录名
                 *
                 * @param isMainArea 是否是主页区域
                 * @return 当前信息组分录名
                 */
                getCurrentEntityKey(isMainArea:boolean):string;
                /**
                 * 子组根据选中的字段，确认绑定的组
                 *
                 * @param dynamicObjects 信息组
                 * @param nodeId         节点ID
                 * @return 是/否
                 */
                getCurrentGroup(dynamicObjects:$.kd.bos.dataentity.entity.DynamicObjectCollection,nodeId:string):long;
                /**
                 * 获取子分录属性
                 *
                 * @param properties 属性
                 * @return 子分录
                 */
                getSubEntryProp(properties:$.kd.bos.dataentity.metadata.clr.DataEntityPropertyCollection):$.java.util.List;
                /**
                 * 获取子组id集合
                 *
                 * @param dynamicObjects 分录
                 * @param nodeId         焦点节点
                 * @return 子组id集合
                 */
                getSubGroupIds(dynamicObjects:$.kd.bos.dataentity.entity.DynamicObjectCollection,nodeId:string):$.java.util.List;
                /**
                 * 获取tab的text
                 *
                 * @param tabKey tabkey
                 * @return tab的text
                 */
                getTabText(tabKey:string):string;
                /**
                 * 是否是教育经历
                 *
                 * @param mappingFormId 标识
                 * @return 是/否
                 */
                isEduPage(mappingFormId:string):boolean;
                /**
                 * 是否是员工端
                 *
                 * @return 是否
                 */
                isEmployee(model:$.kd.bos.entity.datamodel.IDataModel):boolean;
                /**
                 * 判断该信息组是否存在字段
                 *
                 * @param group 信息组
                 * @return 是否
                 */
                isExistField(group:$.kd.bos.dataentity.entity.DynamicObject):boolean;
                /**
                 * 根据分录名字判断是否是主页区域
                 *
                 * @param key 名字
                 * @return 是否是主页配置区域
                 */
                isMainArea(key:string):boolean;
                /**
                 * 是否是单行附表
                 *
                 * @param pageNumber 元数据标识
                 * @return 是否
                 */
                isSingleRowTpl(pageNumber:string):boolean;
                /**
                 * 去中台查询提示语
                 *
                 * @param view 多视图配置视图
                 * @param key 控件标识
                 * @return 提示语
                 */
                queryPromptForString(view:$.kd.bos.form.IFormView,key:string):string;
                /**
                 * 如果默认行存在，则删除默认行
                 *
                 * @param dynamicObjectCollection 分录数据
                 */
                removeDefaultRowIFAbsent(dynamicObjectCollection:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
                /**
                 * 设置组操作按钮是否锁定
                 *
                 * @param view 多视图配置视图
                 * @param pageNumber 信息组标识
                 * @param prefix 前缀
                 */
                setGroupOpEnable(view:$.kd.bos.form.IFormView,pageNumber:string,prefix:string):void;
                /**
                 *  提示语
                 *
                 * @param view 多视图配置视图
                 */
                showHint(view:$.kd.bos.form.IFormView):void;
                /**
                 * 预览档案
                 *
                 * @param pkId 配置方案ID
                 * @param view view
                 */
                showPreview(pkId:any,view:$.kd.bos.form.IFormView):void;
            }
            interface InfoGroupHelper_C extends InfoGroupHelper_S {
                new():InfoGroupHelper;
            }
            interface InfoGroupHelper$ {
            }
            type InfoGroupHelper_T = InfoGroupHelper_S & InfoGroupHelper$;
            interface InfoGroupHelper extends InfoGroupHelper_T {
            }
            interface ApprovalHelper_S {
                readonly KEY_APPROVAL_SUMBIT_CALLBACK:string;
                readonly KEY_HOMEPAGE_CLOSE_CALLBACK:string;
                readonly PERM_SUBMIT_ID:string;
                /**
                 * 删除操作时缓存处理
                 *
                 * @param view
                 * @param entityName
                 * @param pk
                 * @param dyArr
                 * @param tabList
                 * @return
                 */
                dealApprovalCacheForDel(view:$.kd.bos.form.IFormView,entityName:string,pk:long,dyArr:$.kd.bos.dataentity.entity.DynamicObject,tabList:$.java.util.Map):boolean;
                /**
                 * @param view
                 * @param entityName
                 * @param pk
                 * @param dyArr
                 * @param tabList
                 * @return
                 */
                dealAuditBeforeDel(view:$.kd.bos.form.IFormView,entityName:string,pk:long,dyArr:$.kd.bos.dataentity.entity.DynamicObject,tabList:$.java.util.Map):boolean;
                /**
                 * 删除缓存
                 *
                 * @param view 视图
                 */
                delCacheData(view:$.kd.bos.form.IFormView):void;
                /**
                 * 是否存在审核信息
                 *
                 * @param view 首页ivew
                 * @return 是否存在审核信息
                 */
                existAuditInfo(view:$.kd.bos.form.IFormView):boolean;
                /**
                 * 获取审核字段信息
                 *
                 * @param view 首页ivew
                 * @return 审核字段信息
                 */
                getAuditFieldMap(view:$.kd.bos.form.IFormView):$.java.util.Map;
                /**
                 * 改变弹窗按钮文字
                 *
                 * @return
                 */
                getChangeBtnNameMaps():$.java.util.HashMap;
                getFullKey(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject):string;
                /**
                 * 在流程中的工作流对应的单据
                 *
                 * @param personId 人员Id
                 * @return 在流程中的工作流对应的单据
                 */
                getInProcessWorkFlowBill(personId:long):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 处理提交审核按钮是否显示
                 *
                 * @param view 移动端首页view
                 */
                handleSubmitButtonVisible(view:$.kd.bos.form.IFormView):void;
                /**
                 * 获取放弃操作的key
                 *
                 * @param entityName 附表名
                 * @param dataId     数据Id
                 * @return
                 */
                hasAbandonButton(view:$.kd.bos.form.IFormView,entityName:string,dataId:long):boolean;
                /**
                 * 是否可以撤销
                 *
                 * @param bill 审批单据
                 * @return 是/否
                 */
                isCanWithDraw(bill:$.kd.bos.dataentity.entity.DynamicObject):boolean;
                /**
                 * 判断是否因为新增驳回而隐藏删除按钮
                 *
                 * @param view
                 * @param dataId
                 * @return
                 */
                isHideDelBtnForAdd(view:$.kd.bos.form.IFormView,dataId:string):boolean;
                /**
                 * 判断是否因为删除驳回隐藏
                 *
                 * @param view
                 * @param dataId
                 * @return
                 */
                isHideDelBtnForDel(view:$.kd.bos.form.IFormView,dataId:string):boolean;
                /**
                 * 该信息组是否有被驳回的字段(isNotPasss两个参数的方法已经被废弃，目前应该还有二开用到这块，为了构建不报错，保留该方法)
                 *
                 * @param view      我的档案首页view
                 * @param regNumber 信息组页面注册编码
                 * @return
                 */
                isNotPasss(view:$.kd.bos.form.IFormView,regNumber:string):boolean;
                /**
                 * 该信息组是否有被驳回的字段
                 *
                 * @param view      我的档案首页view
                 * @param regNumber 信息组页面注册编码
                 * @param groupName 信息组名
                 * @return
                 */
                isNotPasss(view:$.kd.bos.form.IFormView,regNumber:string,groupName:string):boolean;
                /**
                 * 是否不需要审核
                 *
                 * @param view      当前页面
                 * @param pkStr     数据id
                 * @param curEntity 当前页面对应实体
                 * @return
                 */
                noNeedDelAudit(view:$.kd.bos.form.IFormView,pkStr:string,curEntity:string):boolean;
                /**
                 * 删除旧版本缓存数据
                 *
                 * @param view 移动端主页view
                 * @return 是否存在旧版本数据
                 */
                removeOldVersonData(view:$.kd.bos.form.IFormView):boolean;
                /**
                 * 设置提交审核按钮是否显示监听
                 *
                 * @param view     我的档案首页view
                 * @param listener Progresss监听
                 */
                setSubmitButtonVisibleListener(view:$.kd.bos.form.IFormView,listener:$.kd.bos.form.control.events.ProgresssListener):void;
                showConfirmWhenFirstOpen(isClick:boolean,view:$.kd.bos.form.IFormView):void;
                /**
                 * 展示删除操作不通过的信息
                 *
                 * @param view
                 */
                showNoPassInfoForDelOP(view:$.kd.bos.form.IFormView):void;
                /**
                 * 提示不可通过信息
                 *
                 * @param view
                 * @param entityName
                 * @param pkId
                 */
                showNotPassInfoComfirm(view:$.kd.bos.form.IFormView,key:string,entityName:string,pkId:string):void;
                /**
                 * 提交信息信息变更申请
                 *
                 * @param view 首页ivew
                 */
                submit(view:$.kd.bos.form.IFormView):void;
                /**
                 * 提交确认
                 *
                 * @param view 首页ivew
                 */
                submitConfirm(view:$.kd.bos.form.IFormView,formPlugin:$.kd.bos.form.plugin.IFormPlugin):void;
                /**
                 * 持久化首页缓存
                 *
                 * @param view
                 */
                updateSyncCacheToDataBase(view:$.kd.bos.form.IFormView):void;
                /**
                 * 查看审批记录
                 *
                 * @param view 我的档案首页view
                 */
                viewAuditRecord(view:$.kd.bos.form.IFormView):void;
                /**
                 * 查看修改记录
                 *
                 * @param view 移动端首页view
                 */
                viewChangeRecord(view:$.kd.bos.form.IFormView):void;
                /**
                 * 撤销单据
                 *
                 * @param bill 单据信息
                 * @return 是否成功
                 */
                widthDraw(bill:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.Tuple;
            }
            interface ApprovalHelper_C extends ApprovalHelper_S {
                new():ApprovalHelper;
            }
            interface ApprovalHelper$ {
            }
            type ApprovalHelper_T = ApprovalHelper_S & ApprovalHelper$;
            interface ApprovalHelper extends ApprovalHelper_T {
            }
            interface HSPMBusinessDataServiceHelper_S {
                /**
                 * 分页查询，复制平台的分页查询方法，这里做一些优化
                 * {@link BusinessDataServiceHelper#load(String, String, QFilter[], String, int, int)}
                 *
                 * @param entityName       实体名称
                 * @param selectProperties 查询字段
                 * @param filters          查询条件
                 * @param orderBy          查询排序
                 * @param top              分页大小
                 * @return 查询数据
                 */
                load(entityName:string,selectProperties:string,filters:$.kd.bos.orm.query.QFilter[],orderBy:string,top:number):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 分页查询，复制平台的分页查询方法，这里做一些优化
                 * {@link BusinessDataServiceHelper#load(String, String, QFilter[], String, int, int)}
                 *
                 * @param entityName       实体名称
                 * @param selectProperties 查询字段
                 * @param filters          查询条件
                 * @param orderBy          查询排序
                 * @param pageIndex        起始页
                 * @param pagesize         分页大小
                 * @return 查询数据
                 */
                load(entityName:string,selectProperties:string,filters:$.kd.bos.orm.query.QFilter[],orderBy:string,pageIndex:number,pagesize:number):$.kd.bos.dataentity.entity.DynamicObject[];
                loadData(type_arg:$.kd.bos.dataentity.metadata.dynamicobject.DynamicObjectType,idList:$.java.util.List,ds:$.kd.bos.algo.DataSet):$.kd.bos.dataentity.entity.DynamicObject[];
            }
            interface HSPMBusinessDataServiceHelper_C extends HSPMBusinessDataServiceHelper_S {
                new():HSPMBusinessDataServiceHelper;
            }
            interface HSPMBusinessDataServiceHelper$ {
            }
            type HSPMBusinessDataServiceHelper_T = HSPMBusinessDataServiceHelper_S & HSPMBusinessDataServiceHelper$;
            interface HSPMBusinessDataServiceHelper extends HSPMBusinessDataServiceHelper_T {
            }
            interface CommonQFilterHelper_S {
                /**
                 * 获取 主业务档案（含离职主档案,退休档案）的 QFilter
                 *
                 * @param selectProperty 查询列
                 * @return QFilter
                 */
                getAllErfiletypeMainErfiletypeassign(selectProperty:string):$.kd.bos.orm.query.QFilter;
                /**
                 * 获取 初始化档案的 QFilter(主任职和离职)
                 *
                 * @param selectProperty 查询列
                 * @return QFilter
                 */
                getErfiletypeInitErfiletypeassign(selectProperty:string):$.kd.bos.orm.query.QFilter;
                /**
                 * 获取 主业务档案（不含离职主档案）的 QFilter
                 *
                 * @param selectProperty 查询列
                 * @return QFilter
                 */
                getErfiletypeMainErfiletypeassign(selectProperty:string):$.kd.bos.orm.query.QFilter;
                /**
                 * 根据用工关系状态分类查询用工关系状态
                 *
                 * @param selectProperty 查询字段
                 * @param labrelstatusclsList 用工关系状态分类
                 * @return QFilter
                 */
                getLaborrelstatusByClsList(selectProperty:string,labrelstatusclsList:$.java.util.List):$.kd.bos.orm.query.QFilter;
                /**
                 * 获取 在职状态的 QFilter
                 *
                 * @param selectProperty 查询列
                 * @return QFilter
                 */
                getLaborrelstatusWorkingState(selectProperty:string):$.kd.bos.orm.query.QFilter;
                /**
                 * 根据用工关系类型分类查询用工关系类型
                 *
                 * @param selectProperty 查询字段
                 * @param labreltypeclsList 用工关系类型分类
                 * @return QFilter
                 */
                getLaborreltypeByClsList(selectProperty:string,labreltypeclsList:$.java.util.List):$.kd.bos.orm.query.QFilter;
            }
            interface CommonQFilterHelper_C extends CommonQFilterHelper_S {
                new():CommonQFilterHelper;
            }
            interface CommonQFilterHelper$ {
            }
            type CommonQFilterHelper_T = CommonQFilterHelper_S & CommonQFilterHelper$;
            interface CommonQFilterHelper extends CommonQFilterHelper_T {
            }
        }
        namespace kd.sdk.hr.hspm.business.mservice.helper{
            interface HSPMServiceHelper_S {
                /**
                 * 根据用工关系类型分类和用工关系状态分类查询生效的档案总数
                 *
                 * @param labreltypeclsList   用工关系类型分类ID列表（必填）
                 * @param labrelstatusclsList 用工关系状态分类ID列表（必填）
                 * @return 生效的档案总数
                 */
                countErmanFilesByTypeclsAndStatuscls(labreltypeclsList:$.java.util.List,labrelstatusclsList:$.java.util.List):number;
                /**
                 * 获取人员卡片头部信息
                 *
                 * @param ermanfileId 档案id
                 * @return 档案信息
                 */
                getCardFields(ermanfileId:$.java.util.List):$.java.util.List;
                /**
                 * 根据组织人获取档案信息
                 *
                 * @param depempIds 部门人id
                 * @return 档案信息
                 */
                getErmanFileByDepempId(depempIds:$.java.util.List):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 根据任职信息获取档案ID
                 *
                 * @param importList 任职信息
                 * @return 档案信息
                 */
                getErmanFileIdByEmporgRel(importList:$.java.util.List):$.java.util.List;
                /**
                 * 根据档案ID获取档案信息
                 *
                 * @param ermanfileId 档案id
                 * @return 档案信息
                 */
                getErmanfile(ermanfileId:long):$.java.util.Map;
                /**
                 * 获取多视图配置信息
                 *
                 * @param cnfId   配置主键
                 * @param preView 是否预览
                 */
                getInfoGroupConfig(cnfId:long,preView:string):$.java.util.Map;
                /**
                 * 根据自然人ID获取主档案信息
                 *
                 * @param personId 自然人id
                 * @return 主档案信息
                 */
                getPrimaryErmanfFile(personId:long):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 根据规则引擎获取档案多视图方案跳转档案详情
                 *
                 * @param erFileId   档案id
                 * @param listFormId 列表标识
                 * @return formShowParameter
                 */
                jumpErManFileDetail(erFileId:long,listFormId:string):$.java.util.Map;
                /**
                 * 通过批量档案ID获取档案
                 *
                 * @param pkIds 主键
                 * @return 档案信息
                 */
                listErManFilesByPkIds(pkIds:$.java.util.List):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 根据用工关系类型分类和用工关系状态分类查询生效的档案信息
                 *
                 * @param labreltypeclsList   用工关系类型分类ID列表（必填）
                 * @param labrelstatusclsList 用工关系状态分类ID列表（必填）
                 * @param selectProperties    查询字段（必填，参考hspm_ermanfile元数据）
                 * @param id                 ID的大于条件
                 * @param top                 查询条数
                 * @return 生效的档案信息
                 */
                listErmanFilesByTypeclsAndStatuscls(labreltypeclsList:$.java.util.List,labrelstatusclsList:$.java.util.List,selectProperties:string,id:long,top:number):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 根据自然人ID批量获取主档案信息
                 *
                 * @param personIds 自然人Id
                 * @return 档案信息
                 */
                listPrimaryErmanFile(personIds:$.java.util.List):$.java.util.Map;
                /**
                 * 根据工号获取主任职的主档案信息
                 *
                 * @param empnumberList 工号列表
                 * @return 主档案信息
                 */
                listPrimaryErmanFilesByEmpnumber(empnumberList:$.java.util.List):$.kd.bos.dataentity.entity.DynamicObject[];
            }
            interface HSPMServiceHelper_C extends HSPMServiceHelper_S {
                new():HSPMServiceHelper;
            }
            interface HSPMServiceHelper$ {
            }
            type HSPMServiceHelper_T = HSPMServiceHelper_S & HSPMServiceHelper$;
            interface HSPMServiceHelper extends HSPMServiceHelper_T {
            }
        }
        namespace kd.sdk.hr.hspm.business.repository{
            interface ErmanFileRepository_S {
                readonly QUIT_FILETYPE_CLS:long;
                /**
                 * 根据用工关系类型分类和用工关系状态分类查询生效的档案总数
                 *
                 * @param labreltypeclsList   用工关系类型分类ID列表（必填）
                 * @param labrelstatusclsList 用工关系状态分类ID列表（必填）
                 * @return 生效的档案总数
                 */
                countErmanFilesByTypeclsAndStatuscls(labreltypeclsList:$.java.util.List,labrelstatusclsList:$.java.util.List):number;
                generateDynamic():$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 根据任职信息获取（适配劳动合同初始化，引入场景）人员在职人事档案
                 *
                 * @Param [numbers, orgNums, positionNums, stdPositionNums, jobNums] 入参
                 * @return kd.bos.dataentity.entity.DynamicObject[] 人员档案结果
                 */
                getAllErmanFileIdByEmporgRel(numbers:$.java.util.Set,orgNums:$.java.util.Set,positionNums:$.java.util.Set,stdPositionNums:$.java.util.Set,jobNums:$.java.util.Set):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 根据personId获取档案
                 *
                 * @param personId 自然人ID
                 * @return 档案信息
                 */
                getErmanFile(personId:long):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 根据personId获取主档案
                 *
                 * @param personId 自然人id
                 * @return 档案信息
                 */
                getErmanFileByPersonIdAndPostypeId(personId:long,postypeId:long):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 根据任职信息获取
                 */
                getErmanFileIdByEmporgRel(numbers:$.java.util.Set,orgNums:$.java.util.Set,positionNums:$.java.util.Set,stdPositionNums:$.java.util.Set,jobNums:$.java.util.Set):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * @param ermanFileId 档案id
                 * @return 档案信息
                 */
                getErmanfile(ermanFileId:long):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * @param ermanFileId 档案id
                 * @return 档案信息
                 */
                getErmanfileInfo(ermanFileId:long):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取用工状态值
                 *
                 * @return
                 */
                getLaborrelStatus():$.java.util.Map;
                /**
                 * 获取用工类型
                 *
                 * @return
                 */
                getLaborrelType():$.java.util.Map;
                /**
                 * 根据personId获取非时序性
                 *
                 * @param personId 自然人id
                 * @return 非时序信息
                 */
                getNonProp(personId:long):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 根据personId获取主档案
                 *
                 * @param personId 自然人id
                 * @return 档案信息
                 */
                getPrimaryErmanFile(personId:long):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 根据personId获取主档案
                 *
                 * @param employeeId 自然人id
                 * @return 档案信息
                 */
                getPrimaryErmanFileByEmployeeId(employeeId:long):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 根据任职信息获取listEmpposorgrels
                 */
                getPrimaryErmanFileIdByEmployeeId(employeeIdList:$.java.util.List):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 根据主键获取档案
                 *
                 * @param pkIds 主键
                 * @return 档案信息
                 */
                listErManFilesByPkIds(pkIds:$.java.util.List):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 查询档案部门信息
                 *
                 * @param ermanFileIds 档案id
                 * @return 档案信息
                 */
                listErmanDepempfiles(ermanFileIds:$.java.util.List):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 根据组织人获取档案信息
                 *
                 * @param depempIds 组织人id
                 * @return 档案信息
                 */
                listErmanFilesByDepempId(depempIds:$.java.util.List):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 根据用工关系类型分类和用工关系状态分类查询生效的档案信息
                 *
                 * @param labreltypeclsList   用工关系类型分类ID列表（必填）
                 * @param labrelstatusclsList 用工关系状态分类ID列表（必填）
                 * @param selectProperties    查询字段（必填，参考hspm_ermanfile元数据）
                 * @param start               分页条件
                 * @param limit               分页条件
                 * @return 生效的档案信息
                 */
                listErmanFilesByTypeclsAndStatuscls(labreltypeclsList:$.java.util.List,labrelstatusclsList:$.java.util.List,selectProperties:string,start:number,limit:number):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 根据用工关系类型分类和用工关系状态分类查询生效的档案信息
                 *
                 * @param labreltypeclsList   用工关系类型分类ID列表（必填）
                 * @param labrelstatusclsList 用工关系状态分类ID列表（必填）
                 * @param selectProperties    查询字段（必填，参考hspm_ermanfile元数据）
                 * @param id                  查询数据在这个ID后
                 * @param top                 查询数据条件
                 * @return 生效的档案信息
                 */
                listErmanFilesByTypeclsAndStatuscls(labreltypeclsList:$.java.util.List,labrelstatusclsList:$.java.util.List,selectProperties:string,id:long,top:number):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 获取档案信息
                 * @param ermanFileIds 档案id
                 * @return 档案信息
                 */
                listErmanfiles(ermanFileIds:$.java.util.Collection):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 根据工号获取主任职的主档案信息
                 *
                 * @param empnumberList 工号列表
                 * @return 档案信息
                 */
                listPrimaryErmanFilesByEmpnumber(empnumberList:$.java.util.List):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 根据personId获取主档案
                 *
                 * @param personIds 自然人id
                 * @return 档案信息
                 */
                listPrimaryErmanfFile(personIds:$.java.util.List):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 根据employeeIds获取主档案
                 *
                 * @param employeeIds 企业人id集合
                 * @return 档案信息
                 */
                listPrimaryErmanfFileByEmployeeIds(employeeIds:$.java.util.List):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 获取档案信息（不带出基础资料）
                 * @param ermanFileIds 档案id
                 * @return 档案信息
                 */
                loadOriginalErmanfiles(ermanFileIds:$.java.util.Collection):$.kd.bos.dataentity.entity.DynamicObject[];
            }
            interface ErmanFileRepository_C extends ErmanFileRepository_S {
                new():ErmanFileRepository;
            }
            interface ErmanFileRepository$ {
            }
            type ErmanFileRepository_T = ErmanFileRepository_S & ErmanFileRepository$;
            interface ErmanFileRepository extends ErmanFileRepository_T {
            }
        }
        namespace kd.sdk.hr.hspm.business.service{
            interface PageRegConfigService_S {
                /**
                 *  获取多视图方案缓存key
                 *
                 * @param source   客户端类型
                 * @param cnfId    多视图方案id
                 * @param modTime  多视图方案修改时间
                 * @param lang     语言
                 * @return 多视图方案缓存key
                 */
                getConfCacheKey(source:string,cnfId:long,modTime:string,lang:$.kd.bos.lang.Lang):string;
                getInstance():PageRegConfigService;
            }
            interface PageRegConfigService_C extends PageRegConfigService_S {
                new():PageRegConfigService;
            }
            interface PageRegConfigService$ {
                /**
                 * 获取配置方案
                 *
                 * @param cnfId 方案id
                 * @param source 来源
                 * @param preView 预览
                 * @return 方案配置
                 */
                getInfoGroupConfig(cnfId:long,source:string,preView:string):$.java.util.Map;
                /**
                 * 设公共参数
                 *
                 * @param formShowParameter form
                 * @param view 视图
                 */
                setCommonCustomParam(formShowParameter:$.kd.bos.form.FormShowParameter,view:$.kd.bos.form.IFormView):void;
            }
            type PageRegConfigService_T = PageRegConfigService_S & PageRegConfigService$;
            interface PageRegConfigService extends PageRegConfigService_T {
            }
            interface AttacheHandlerService_S {
                /**
                 * 判断页面是否空页面
                 *
                 * @param view        视图
                 * @param contentName 面板名
                 */
                containFlex(view:$.kd.bos.form.IFormView,contentName:string):void;
                getInstance():AttacheHandlerService;
                /**
                 * 调用api是否成功
                 *
                 * @param resultMap api返回结果
                 * @return 是否成功
                 */
                isSuccess(resultMap:$.java.util.Map):boolean;
            }
            interface AttacheHandlerService_C extends AttacheHandlerService_S {
                new():AttacheHandlerService;
            }
            interface AttacheHandlerService$ {
                /**
                 * 改变多实体的页面标识
                 *
                 * @param formShowParameter formShowParameter
                 * @param entityId          实体
                 * @return 修改数据
                 */
                buildUniqueParam(formShowParameter:$.kd.bos.form.FormShowParameter,entityId:string):$.java.util.Map;
                /**
                 * 校验截包的必填性、长度、非法字符 等校验
                 *
                 * @param view
                 * @param model
                 * @param drawFormFields
                 * @param ignoreField    过滤不处理的字段
                 * @param acrossEntity
                 * @return
                 */
                checkIllegalInput(view:$.kd.bos.form.IFormView,model:$.kd.bos.entity.datamodel.IDataModel,drawFormFields:$.java.util.List,ignoreField:$.java.util.Set,acrossEntity:string):string;
                /**
                 * 校验主键
                 *
                 * @param view     视图
                 * @param pKId     传入的主键
                 * @param cacheKey 标识
                 * @return 是否
                 */
                checkPkId(view:$.kd.bos.form.IFormView,pKId:long,cacheKey:string):boolean;
                /**
                 * 关闭页面
                 *
                 * @param view       view
                 * @param resultMap  resultMap
                 * @param parentView parentView
                 */
                closeView(view:$.kd.bos.form.IFormView,resultMap:$.java.util.Map,parentView:$.kd.bos.form.IFormView):void;
                /**
                 * 公共按钮注册
                 *
                 * @param view    view
                 * @param thisObj thisObj
                 */
                commonBtnReg(view:$.kd.bos.form.IFormView,thisObj:kd.hr.hbp.formplugin.web.HRDataBaseEdit):void;
                /**
                 * 职级职等的保存操作处理：调用事务变动操作型事务生效接口
                 *
                 * @return java.util.Map<java.lang.String, java.lang.Object> 出参
                 * @Param [params]  入参
                 */
                executeActionPersonalChange(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 职级职等页面的新增或职级职等调整按钮点击后，显示弹窗前的处理：调用事务变动操作型事务查询接口
                 * 目的：对职级职等弹窗的字段做选择限制
                 *
                 * @return java.util.Map<java.lang.String, java.lang.Object> 配置结果
                 * @Param [params]  入参
                 */
                getActionPersonalChange(params:$.java.util.Map):$.java.util.Map;
                /**
                 * 通过证件类型 获取对应中文
                 *
                 * @param imageStr    图片地址
                 * @param displayName 显示名称
                 * @param type        类型id
                 * @return true
                 */
                getCardCNByEN(imageStr:string,displayName:string,type_arg:long):$.kd.bos.dataentity.Tuple;
                /**
                 * 获取配置id
                 *
                 * @param responseMap responseMap
                 * @param relFormId   relFormId
                 * @param type        类型
                 * @return 是否用默认
                 */
                getCnfId(responseMap:$.java.util.Map,relFormId:string,type_arg:string):$.kd.bos.dataentity.Tuple;
                /**
                 * 循环中使用count方法 无法合理避免 这里使用一个方法嵌套尝试混过去 为了解决sonar的扫描问题
                 *
                 * @return ORM对象
                 */
                getORMHelper():$.kd.bos.orm.ORM;
                /**
                 * 获取配置参数
                 *
                 * @param formShowParameter formShowParameter
                 * @param entityId          entityId
                 * @return map
                 */
                getPageCustomParam(formShowParameter:$.kd.bos.form.FormShowParameter,entityId:string):$.java.util.Map;
                getRealFormId(view:$.kd.bos.form.IFormView,dialogPageNumber:string,viewFlag:boolean):string;
                /**
                 * 获取小数的舍入方式（就是怎么凑整）
                 * @param fieldKey 字段控件编码
                 * @return 舍入方式
                 */
                getRoundingMode(fieldKey:string):$.java.math.RoundingMode;
                /**
                 * 处理规则引擎
                 *
                 * @param view      视图
                 * @param erFileId  档案id
                 * @param erFileDy  档案
                 * @param relFormId 标识
                 * @param type      类型
                 * @param rpcType   rpcType
                 * @return 配置id
                 */
                handleRuleEngine(view:$.kd.bos.form.IFormView,erFileId:long,erFileDy:$.kd.bos.dataentity.entity.DynamicObject,relFormId:string,type_arg:string,rpcMap:$.java.util.Map,rpcType:boolean):$.kd.bos.dataentity.Tuple;
                handlerFieldValueChange(view:$.kd.bos.form.IFormView,attachMap:$.java.util.Map,acrossEntity:string):$.java.util.Map;
                /**
                 * 附件保存
                 *
                 * @param formId        实体名称
                 * @param pkId          主键
                 * @param appId         appid
                 * @param attachmentMap 附件信息
                 * @return
                 */
                invokeAttachment(formId:string,pkId:any,appId:string,attachmentMap:$.java.util.Map):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                /**
                 * 调用院校所在国家/地区的规则引擎
                 *
                 * @param erFileDy       erFileDy
                 * @param collegeCountry 院校所在国家/地区
                 * @param sceneNumber    sceneNumber
                 * @return map
                 */
                invokeCollegeCountryRuleEngine(nonProp:$.kd.bos.dataentity.entity.DynamicObject,erFileDy:$.kd.bos.dataentity.entity.DynamicObject,collegeCountry:$.kd.bos.dataentity.entity.DynamicObject,sceneNumber:string):$.java.util.Map;
                /**
                 * 删除
                 *
                 * @param pkIdList   删除的主键
                 * @param entityName 实体名称
                 * @param delBoFlag  删除历史的需求、根据bo删除、不是只根据fid删
                 * @return 成功或者失败
                 */
                invokeDel(pkIdList:$.java.util.List,entityName:string,delBoFlag:boolean):$.java.util.Map;
                /**
                 * 废弃
                 *
                 * @param attachMap 多个附表BOID
                 * @return 成功或者失败
                 */
                invokeDiscardBO(attachMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 历史模型引入
                 * 引入时需要保证所有的引入数据均在同一个事务组里，因此这里需要传入同一个eventId
                 *
                 * @param attachMap 多个附表数据
                 * @param eventId   事物ID,同一份excel的数据需要传同一个eventId
                 * @return 接口返回结果
                 */
                invokeHisImportDataByBatchEventid(attachMap:$.java.util.Map,eventId:long):$.java.util.Map;
                /**
                 * 非时序性引入
                 *
                 * @param importtype    引入类型
                 * @param importSaveDys 引入数据集
                 * @return 接口返回结果
                 */
                invokeHisNonLineImportData(importtype:string,importSaveDys:$.kd.bos.dataentity.entity.DynamicObject[]):$.java.util.Map;
                /**
                 * 附件删除
                 *
                 * @param formId  实体名称
                 * @param pkId    主键
                 * @param fileUid 应该是删除的附件id
                 */
                invokeRemoveAttachment(formId:string,pkId:any,fileUid:any):void;
                /**
                 * 修订
                 *
                 * @param attachMap 多个附表数据
                 * @return 成功或者失败
                 */
                invokeReviseVersion(attachMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 调用规则引擎
                 *
                 * @param erFileDy    erFileDy
                 * @param source      source
                 * @param sceneNumber sceneNumber
                 * @return map
                 */
                invokeRuleEngine(erFileDy:$.kd.bos.dataentity.entity.DynamicObject,source:string,sceneNumber:string):$.java.util.Map;
                /**
                 * 修订
                 *
                 * @param attachMap 多个附表数据
                 * @return 成功或者失败
                 */
                invokeSaveBatch(attachMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 保存和更新
                 *
                 * @param attachMap 多个附表数据
                 * @return 成功或者失败
                 */
                invokeSaveOrUpdate(attachMap:$.java.util.Map):$.java.util.Map;
                /**
                 * 保存或更新数据
                 *
                 * @param view       view
                 * @param attachMap  附表信息
                 * @param closeView  是否关闭页面
                 * @param entityName 实体名
                 * @param type       -1:目前特指职级职等调整,1:新增, 0:单实体修改,2:跨实体修改
                 * @return 信息
                 */
                invokeSaveOrUpdate(view:$.kd.bos.form.IFormView,attachMap:$.java.util.Map,closeView:boolean,entityName:string,type_arg:string):$.java.util.Map;
                /**
                 * 判断是主页还是侧边栏
                 *
                 * @param formShowParameter form
                 * @return 主页为 true
                 */
                judgeIsMain(formShowParameter:$.kd.bos.form.FormShowParameter):boolean;
                /**
                 * 附件删除
                 *
                 * @param formId 实体名称
                 * @param dataId 附表数据id
                 */
                removeAllAttachment(formId:string,dataId:any):void;
                /**
                 * 保存头像 hrpi_person 和hrpi_pernontsprop表都要保存
                 *
                 * @param personId 人员id
                 * @param newValue 头像图片地址
                 */
                saveHeadsCulpture(personId:string,newValue:any):void;
                /**
                 * 校验字段是否变化，需要调用同步平台（单个），在未入库时候调用
                 *
                 * @param personId 自然人id
                 * @return yes
                 */
                sendChangeInfoSyncToSysUser(personId:$.java.util.List):void;
                /**
                 * 删除插入人事事物变动
                 *
                 * @param dyArr      数据
                 * @param entityName 实体名称
                 * @param formId     操作页面
                 */
                sendHpfsChgDeleteRecord(dyArr:$.kd.bos.dataentity.entity.DynamicObject[],entityName:string,formId:string):void;
                /**
                 * 新增和修改插入人事事物变动记录
                 *
                 * @param attachMap  附表信息
                 * @param updateBoId 更新的boid
                 * @param formId     操作页面
                 */
                sendHpfsChgSaveOrUpdateRecord(attachMap:$.java.util.Map,updateBoId:$.java.util.Set,formId:string):void;
                /**
                 * 设置面板setBorder
                 *
                 * @param mainSubAp 面板
                 * @param top       top
                 * @param bot       bot
                 * @param left      left
                 * @param right     right
                 * @return style
                 */
                setBorder(mainSubAp:$.kd.bos.metadata.form.container.FlexPanelAp,top:string,bot:string,left:string,right:string):$.kd.bos.metadata.form.Style;
                /**
                 * 如果是主页 按钮修改为文字样式
                 *
                 * @param view view
                 */
                setMainPageStyle(view:$.kd.bos.form.IFormView):void;
                /**
                 * 设置面板margin
                 *
                 * @param centerMainAp 面板
                 * @param top          top
                 * @param bot          bot
                 * @param left         left
                 * @param right        right
                 * @return style
                 */
                setMargin(centerMainAp:$.kd.bos.metadata.form.container.FlexPanelAp,top:string,bot:string,left:string,right:string):$.kd.bos.metadata.form.Style;
                /**
                 * 设置面板setPadding
                 *
                 * @param centerMainAp 面板
                 * @param top          top
                 * @param bot          bot
                 * @param left         left
                 * @param right        right
                 * @return style
                 */
                setPadding(centerMainAp:$.kd.bos.metadata.form.container.FlexPanelAp,top:string,bot:string,left:string,right:string):$.kd.bos.metadata.form.Style;
                /**
                 * 公共处理boolea 转中文
                 *
                 * @param beforeCreatVo beforeCreatVo
                 * @return true false
                 */
                transferBoolType(beforeCreatVo:kd.sdk.hr.hspm.common.vo.BeforeCreatVo):boolean;
                /**
                 * 校验字段是否变化，需要调用同步平台（单个），在未入库时候调用
                 *
                 * @param entityName   多行表实体名
                 * @param dataEntities 多行表数据集
                 * @return yes
                 */
                validateSyncFieldsDelChange(entityName:string,dataEntities:$.kd.bos.dataentity.entity.DynamicObject[]):$.java.util.List;
                /**
                 * 校验字段是否变化，需要调用同步平台（单个），在未入库时候调用
                 *
                 * @param entityName    多行表实体名
                 * @param pkPersonIdMap 多行表主键和personId
                 * @return yes
                 */
                validateSyncFieldsDelChange(entityName:string,pkPersonIdMap:$.java.util.Map):$.java.util.List;
                /**
                 * 校验字段是否变化，需要调用同步平台（单个），在未入库时候调用
                 *
                 * @param datas    校验数据 key 实体名称，value 页面数据
                 * @param personId 自然人id
                 * @param validDb  是否校验数据库 false 不校验（暂存新增的时候） true 校验
                 * @return yes
                 */
                validateSyncFieldsUpdateChange(datas:$.java.util.Map,personId:long,validDb:boolean):boolean;
                /**
                 * 校验字段是否变化，需要调用同步平台（单个），在未入库时候调用
                 *
                 * @param entityName   实体对象
                 * @param dataEntities 实体数据
                 * @param personId     自然人id
                 * @return yes
                 */
                validateSyncFieldsUpdateChange(entityName:string,dataEntities:$.kd.bos.dataentity.entity.DynamicObject[],personId:long):boolean;
                /**
                 * 处理规则引擎
                 *
                 * @param view       视图
                 * @param erFileId   档案id
                 * @param listFormId 标识
                 * @param type       类型
                 * @param rpcType    是否为RPC调用
                 * @return formShowParameter
                 */
                wrapHandleRuleEngine(view:$.kd.bos.form.IFormView,erFileId:long,listFormId:string,type_arg:string,rpcType:boolean):$.java.util.Map;
            }
            type AttacheHandlerService_T = AttacheHandlerService_S & AttacheHandlerService$;
            interface AttacheHandlerService extends AttacheHandlerService_T {
            }
            interface MultiViewTemplateService_S {
                getInstance():MultiViewTemplateService;
            }
            interface MultiViewTemplateService_C extends MultiViewTemplateService_S {
                new():MultiViewTemplateService;
            }
            interface MultiViewTemplateService$ {
                /**
                 * 公共form
                 *
                 * @param formShowParameter formShowParameter
                 * @param formId            formId
                 * @param targetKey         目标
                 * @param showType          类型
                 */
                commonForm(formShowParameter:$.kd.bos.form.FormShowParameter,formId:string,targetKey:string,showType:$.kd.bos.form.ShowType):void;
                /**
                 * 设置到页面
                 *
                 * @param contentAp contentAp
                 * @param apStr     apStr
                 * @param view      view
                 */
                setApToView(contentAp:$.kd.bos.metadata.form.container.FlexPanelAp,apStr:string,view:$.kd.bos.form.IFormView):void;
                /**
                 * 设置标签点击
                 *
                 * @param args     args
                 * @param formView formView
                 * @param plugin   plugin
                 * @param param
                 */
                setLabelClick(args:$.kd.bos.form.events.OnGetControlArgs,formView:$.kd.bos.mvc.form.FormView,plugin:$.kd.bos.form.plugin.AbstractFormPlugin,param:string):void;
                /**
                 * 设置标签事件
                 *
                 * @param args          args
                 * @param formView      视图
                 * @param plugin        插件
                 * @param mainEntryList 数据
                 */
                setLabelEvent(args:$.kd.bos.form.events.OnGetControlArgs,formView:$.kd.bos.mvc.form.FormView,plugin:$.kd.bos.form.plugin.AbstractFormPlugin,mainEntryList:$.java.util.List):void;
                /**
                 * 表单类型
                 *
                 * @param pageType pageType
                 * @return form
                 */
                showFormType(pageType:string):$.kd.bos.form.FormShowParameter;
            }
            type MultiViewTemplateService_T = MultiViewTemplateService_S & MultiViewTemplateService$;
            interface MultiViewTemplateService extends MultiViewTemplateService_T {
            }
            interface ErManFileQfilter_S {
                /**
                 * 组织F7控权
                 *
                 * @param entityName 控权实体
                 * @param permEntityName 控权字段
                 * @return AuthorizedOrgResult
                 */
                getAdminOrgAuth(entityName:string,permEntityName:string):kd.hr.hbp.common.model.AuthorizedOrgResult;
                /**
                 * 业务对象维度映射
                 *
                 * @return
                 */
                getFieldMapQFilter(entityName:string,permEntityName:string):kd.hr.hbp.common.model.DimValueResult;
                /**
                 * 人事业务组织F7过滤
                 *
                 * @return
                 */
                getOrgPermQfilter():$.kd.bos.orm.query.QFilter;
                /**
                 * 数据维度过滤
                 *
                 * @return
                 */
                getPermQFilter():$.kd.bos.orm.query.QFilter;
                /**
                 * 是否有业务档案的权限
                 *
                 * @return
                 */
                hasPermission():boolean;
            }
            interface ErManFileQfilter_C extends ErManFileQfilter_S {
                new():ErManFileQfilter;
            }
            interface ErManFileQfilter$ {
            }
            type ErManFileQfilter_T = ErManFileQfilter_S & ErManFileQfilter$;
            interface ErManFileQfilter extends ErManFileQfilter_T {
            }
        }
        namespace kd.sdk.hr.hspm.common.constants{
            interface MultiViewConfigConstants_S {
                readonly ALL_ISAUDIT:string;
                readonly ALL_ISEDIT:string;
                readonly ALL_ISREQUIRED:string;
                readonly BOS_LISTF7:string;
                readonly BTN_PREVIEW:string;
                readonly BUSINESS_TYPE:string;
                readonly CATEGORY:string;
                readonly CONFIGAREA:string;
                readonly CUS_ADDNEW:string;
                readonly CUS_EDIT:string;
                readonly CUS_EXPIRE:string;
                readonly CUS_STAUTS:string;
                readonly CUS_VIEW:string;
                readonly DEFAULT_FIELD:string;
                readonly EMPLOYEE:string;
                readonly ENABLE_MULTILEVELMENU:string;
                readonly ENTITY:string;
                readonly ENTITY_FIELDNAME:string;
                readonly ERFILETYPE:string;
                readonly EXPIRATION_DATE:string;
                readonly FIELD:string;
                readonly FIELD_ISREQUIRED:string;
                readonly FIELD_MAX:string;
                readonly FIELD_MAXCOUNT:string;
                readonly FIELD_MIN:string;
                readonly FIELD_PAGEINFO:string;
                readonly FIELD_PAGEINFONUMBER:string;
                readonly FIELD_PRECISION:string;
                readonly FIELD_SCALE:string;
                readonly FIELD_TYPE:string;
                readonly FILTER_FIELDS:string;
                readonly GROUP_CONCAT_KEY:string;
                readonly GROUP_ENTITY:string;
                readonly GROUP_ID:string;
                readonly GROUP_NAME:string;
                readonly GUIDE_FLEX:string;
                readonly G_ID:string;
                readonly HEAD_ENTITY:string;
                readonly INFOGROUP_NAME:string;
                readonly IS_ALLOW_ADD:string;
                readonly IS_EDIT:string;
                readonly IS_MAINAREA:string;
                readonly IS_NOFIXEDTERM:string;
                readonly KEY_BTNOK:string;
                readonly KEY_CONFIGURABLE:string;
                readonly KEY_FIELDNAME:string;
                readonly KEY_ISTAGSHOW:string;
                readonly KEY_OP:string;
                readonly KEY_SELECTHEADFIELD:string;
                readonly KEY_SELECTINFOGROP:string;
                readonly KEY_SELECTINFOGROPFIELD:string;
                readonly KEY_SELECTINFOGROPFIELD_SIDE:string;
                readonly KEY_SELECTINFOGROP_SIDE:string;
                readonly MAINTAB:string;
                readonly MAIN_CONFIGAREA:string;
                readonly MAIN_ENTITY:string;
                readonly MAIN_FIELDNAMETEXT:string;
                readonly MAIN_ISALLOWADD:string;
                readonly MAIN_ISAUDITTEXT:string;
                readonly MAIN_ISAUDIT_ALL:string;
                readonly MAIN_ISEDITTEXT:string;
                readonly MAIN_ISEDIT_ALL:string;
                readonly MAIN_ISREQUIRED_ALL:string;
                readonly MULTI_LEVELMENU:string;
                readonly MULTI_LEVELMENUENTITY:string;
                readonly MULTI_LEVELMENUFLEX:string;
                readonly MULTI_LEVELMENU_STATUS:string;
                readonly NODE_PARENTID:string;
                readonly NOTEDITABLE_FIELDS:string;
                readonly ONE_LEVELMENU:string;
                readonly OP_KEY:string;
                readonly PAGE_HSPM_ADDSUBINFOGROUP_POP:string;
                readonly PAGE_HSPM_INFOGROUPEDIT_POP:string;
                readonly PAGE_INFOGROUPFIELD:string;
                readonly PARENT_GROUP_ID:string;
                readonly PRE_SET:string;
                readonly REF_FIELD:number;
                readonly REF_KEY:string;
                readonly RELATION:string;
                readonly REQUIRED_FIELDS:string;
                readonly ROOT_TREE:string;
                readonly SIDE_ENTITY:string;
                readonly SIDE_ISALLOWADD:string;
                readonly SIDE_ISAUDIT_ALL:string;
                readonly SIDE_ISEDIT_ALL:string;
                readonly SIDE_ISREQUIRED_ALL:string;
                readonly SIDE_TAB:string;
                readonly SUBGROUPID_PREX:string;
                readonly TABLE_NAME:string;
                readonly TABTOOL_BAR:string;
                readonly TAB_DELETE:string;
                readonly TAB_MOVEDOWN:string;
                readonly TAB_MOVEUP:string;
                readonly TAB:string;
                readonly TBMAIN:string;
                readonly TOTAL_GROUP:string;
                readonly TREEVIEW:string;
                readonly TWO_LEVELMENU:string;
                readonly VIEWLOCATION:string;
            }
            interface MultiViewConfigConstants$ {
            }
            type MultiViewConfigConstants_T = MultiViewConfigConstants_S & MultiViewConfigConstants$;
            interface MultiViewConfigConstants extends MultiViewConfigConstants_T {
            }
            interface MobileDrawConstants_S {
                readonly BRACKET_ROW_TAG:string;
                readonly CARD:string;
                readonly CARDOP_CACHE_PREFIX:string;
                readonly CARD_ADD_SUFFIX:string;
                readonly CARD_CONTENT:string;
                readonly CARD_GROW:string;
                readonly CLICK:string;
                readonly CLICK_DDIT:string;
                readonly CONTENT_FLEX:string;
                readonly CONTENT_ROW:string;
                readonly CUR_TABKEY:string;
                readonly DATA_IDS:string;
                readonly DEL_FLEX:string;
                readonly DEL_OP:string;
                readonly ENABLE_ENTERDETAIL:string;
                readonly FILTER_PARAM:string;
                readonly FIRST_DATAID:string;
                readonly GROUP_NAME:string;
                readonly HAS_ADDOPERATE:string;
                readonly HAS_DELETEOPERATE:string;
                readonly INFO_GROUP_CARD:string;
                readonly LEFTBRACKET_ROW_TAG:string;
                readonly LIMIT_PARAM:string;
                readonly MDG_SUFFIX:string;
                readonly MDV_SUFFIX:string;
                readonly MOBILEHOMEVECTOR_DATA:string;
                readonly MULTITABADDCHECK_MAP:string;
                readonly MULTI_IDS:string;
                readonly RIGHTBRACKET_ROW_TAG:string;
                readonly SELECT_INFOGROUP:string;
                readonly SELECT_INFOGROUPNUMBER:string;
                readonly TAB:string;
                readonly TITLE_ROW:string;
                readonly TITLE_ROW_FIELD:string;
                readonly TITLE_ROW_TAG:string;
                readonly VIEWDETAILOP_PREFIX:string;
            }
            interface MobileDrawConstants$ {
            }
            type MobileDrawConstants_T = MobileDrawConstants_S & MobileDrawConstants$;
            interface MobileDrawConstants extends MobileDrawConstants_T {
            }
            interface ScheduleDrawConstants_S {
                readonly ENTRY_AP_NAME:string;
                readonly FLEX_NAME:string;
                readonly FLEX_NUMBER:string;
                readonly GROUP_AP_NAME:string;
            }
            interface ScheduleDrawConstants$ {
            }
            type ScheduleDrawConstants_T = ScheduleDrawConstants_S & ScheduleDrawConstants$;
            interface ScheduleDrawConstants extends ScheduleDrawConstants_T {
            }
            interface ReportDisplayPageConstants_S {
                readonly CACHE_CHECK:string;
                readonly KEY_ENTRY_ENTITY:string;
                readonly KEY_SHOWNODEID1:string;
                readonly KEY_SYSTEMALIAS1:string;
                readonly KEY_TREEVIEW:string;
                readonly LBL_TOTAL:string;
                readonly OP_ENTRYDEL:string;
                readonly PAGE_EMP_MAIN:string;
                readonly PAGE_EMP_QUERY:string;
                readonly PAGE_QUITEMP_QUERY:string;
                readonly PERSON_NAME:string;
                readonly PERSON_NUMBER:string;
            }
            interface ReportDisplayPageConstants$ {
            }
            type ReportDisplayPageConstants_T = ReportDisplayPageConstants_S & ReportDisplayPageConstants$;
            interface ReportDisplayPageConstants extends ReportDisplayPageConstants_T {
            }
            interface InfoClassifyCommonConstant_S {
                readonly CACHE_TIME:string;
                readonly DATA_NO_CHANGED:string;
                readonly DEFAULT_IMPORT_TYPE:string;
                readonly DEFAULT_LOCK_UIS:string;
                readonly FORM_KEY:string;
                readonly HRPI_EMPPROEXP:string;
                readonly HRPI_EMPTRAINFILE:string;
                readonly HRPI_EMRGCONTACT:string;
                readonly HRPI_FAMILYMEMB:string;
                readonly HRPI_FERTILITYINFO:string;
                readonly HRPI_LANGUAGESKILLS:string;
                readonly HRPI_PERADDRESS:string;
                readonly HRPI_PERCONTACT:string;
                readonly HRPI_PERCRE:string;
                readonly HRPI_PEREDUEXP:string;
                readonly HRPI_PERHOBBY:string;
                readonly HRPI_PERNONTSPROP:string;
                readonly HRPI_PEROCPQUAL:string;
                readonly HRPI_PERPRACTQUAL:string;
                readonly HRPI_PERPROTITLE:string;
                readonly HRPI_PERRPRECORD:string;
                readonly HRPI_PREWORKEXP:string;
                readonly HRPI_RSMPATINV:string;
                readonly HRPI_RSMPROSKL:string;
                readonly HSPM_EMPPROEXP:string;
                readonly HSPM_EMPTRAINFILE:string;
                readonly HSPM_EMRGCONTACT:string;
                readonly HSPM_FAMILYMEMB:string;
                readonly HSPM_FERTILITYINFO:string;
                readonly HSPM_INFOCLASSIFYCNF:string;
                readonly HSPM_LANGUAGESKILLS:string;
                readonly HSPM_PERADDRESS:string;
                readonly HSPM_PERCONTACT:string;
                readonly HSPM_PERCRE:string;
                readonly HSPM_PEREDUEXPINFO:string;
                readonly HSPM_PERHOBBY:string;
                readonly HSPM_PEROCPQUAL:string;
                readonly HSPM_PERPRACTQUAL:string;
                readonly HSPM_PERPROTITLE:string;
                readonly HSPM_PERRPRECORD:string;
                readonly HSPM_PERSONINFO:string;
                readonly HSPM_PREWORKEXP:string;
                readonly HSPM_RSMPATINV:string;
                readonly HSPM_RSMPROSKL:string;
                readonly IMPORT_PLUGIN:string;
                readonly INFO_CACHE_KEY:string;
                readonly LIST_KEY:string;
                readonly LOG_VALIDATE:string;
                readonly QUERY_KEY:string;
                readonly SOURCE_KEY:string;
                readonly SUCCESS_CODE:string;
                readonly TAB_KEY:string;
                readonly TYPE:string;
            }
            interface InfoClassifyCommonConstant$ {
            }
            type InfoClassifyCommonConstant_T = InfoClassifyCommonConstant_S & InfoClassifyCommonConstant$;
            interface InfoClassifyCommonConstant extends InfoClassifyCommonConstant_T {
            }
            interface DynConfigConstants_S {
                readonly ACROSS_ENTITY:string;
                readonly BASE_INFOPANEL:string;
                readonly CNF_ID:string;
                readonly CONGIF_JSON:string;
                readonly CURR_PAGE:string;
                readonly DEFAULT_RULE:string;
                readonly DIALOG_MOBILE:string;
                readonly DIALOG_PAGENUMBER:string;
                readonly DIALOG_PC:string;
                readonly DIA_LOG:string;
                readonly DIS_PLAYNAME:string;
                readonly DYNFILE_HEAD:string;
                readonly DYN_GLOBALPANEL:string;
                readonly DY_VIEW:string;
                readonly DY_VIEW_MOBILE:string;
                readonly DY_VIEW_PC:string;
                readonly EDIT_UPDATE:string;
                readonly ER_FILE_ID:string;
                readonly FIELD:string;
                readonly FIELDS:string;
                readonly FIELD_ENTITY:string;
                readonly FIELD_LIST:string;
                readonly FILE:string;
                readonly FLEX_PANELRELATEINFO:string;
                readonly FLEX_PANEL_RELATEINFO:string;
                readonly FORMID:string;
                readonly GROUPS:string;
                readonly GROUP_NAME:string;
                readonly G_NAME:string;
                readonly HEAD_ENTITY:string;
                readonly HEAD_ENTRY:string;
                readonly HEAD_ENTRY_PARAM:string;
                readonly HEAD_PANELAP:string;
                readonly IS_AUDIT:string;
                readonly IS_DIA:string;
                readonly IS_EDIT:string;
                readonly IS_FIRST:string;
                readonly IS_REQUIRED:string;
                readonly ITEM_MODIFY:string;
                readonly MAIN_ENTRY:string;
                readonly MAIN_PAGEPANEL:string;
                readonly MAIN_TYPE:string;
                readonly MAPPING_FORMID:string;
                readonly MDV_VIEW:string;
                readonly ORIG_FIELD:string;
                readonly PAGE_NUMBER:string;
                readonly PAGE_TYPE:string;
                readonly PANEL_DYNPANELAP:string;
                readonly PARAMS:string;
                readonly PKID:string;
                readonly PNUMBER:string;
                readonly PRE_VIEW:string;
                readonly P_NAME:string;
                readonly REGIONS_SCOPE:string;
                readonly RIGHT_PANELAP:string;
                readonly SEQ:string;
                readonly SINGLE:string;
                readonly SOURCE:string;
                readonly TAB_ENTRY:string;
                readonly TAB_ENTRY_PARAM:string;
                readonly TARGET_KEY:string;
                readonly TYPE:string;
                readonly VIRTURAL_PREVIEW_USER:long;
            }
            interface DynConfigConstants$ {
            }
            type DynConfigConstants_T = DynConfigConstants_S & DynConfigConstants$;
            interface DynConfigConstants extends DynConfigConstants_T {
            }
            interface HSPMFieldConstants_S {
                readonly ADJUST_COM_TIME:string;
                readonly ADJUST_WORK_AGE:string;
                readonly ADJUST_WORK_TIME:string;
                readonly ADMINORG:string;
                readonly ADMINORGID:string;
                readonly ADMINORG_NAME:string;
                readonly AGE:string;
                readonly APOSITIONTYPE:string;
                readonly APOSITIONTYPEDESC:string;
                readonly AWARD_TIME:string;
                readonly BEGIN_SERVICE_DATE:string;
                readonly BIRTHDAY:string;
                readonly BUSINESSSTATUS:string;
                readonly CERT_ISSUE_DATE:string;
                readonly CHILDREN_NUMBER:string;
                readonly CMPEMP:string;
                readonly CMPEMPID:string;
                readonly COMPANY:string;
                readonly CREDENTIALSTYPE:string;
                readonly CREDENTIALSTYPEID:string;
                readonly DARKPOSITION_ID:string;
                readonly DATASTATUS:string;
                readonly DEPEMP:string;
                readonly DEPEMPID:string;
                readonly DESCRIPTION:string;
                readonly EMAIL:string;
                readonly EMPLOYEE:string;
                readonly EMPLOYEEID:string;
                readonly EMPLOYEE_MID:string;
                readonly EMP_NUMBER:string;
                readonly ENDDATE:string;
                readonly END_DATE:string;
                readonly ENTERPRISE:string;
                readonly ENTSERVICELEN:string;
                readonly EXPIRATION_DATE:string;
                readonly FILETYPE:string;
                readonly FILE_BUSINESS_STATUS:string;
                readonly FILE_END_DATE:string;
                readonly FIRST_TIME:string;
                readonly FOLK:string;
                readonly GENDER:string;
                readonly GENDERID:string;
                readonly GET_TIME:string;
                readonly GRADUTION_DATE:string;
                readonly HEADSCULPTURE:string;
                readonly HR_BU:string;
                readonly ISCURRENTVERSION:string;
                readonly ISMANAGED:string;
                readonly ISPRIMARY:string;
                readonly ISSUE_DATE:string;
                readonly IS_IDENTITY:string;
                readonly IS_MAJOR:string;
                readonly IS_UNTIL_NOW:string;
                readonly JOB:string;
                readonly JOBGRADE:string;
                readonly JOBGRADE_SCM:string;
                readonly JOBLEVEL:string;
                readonly JOBLEVEL_SCM:string;
                readonly JOB_CLASS:string;
                readonly JOB_FAMILY:string;
                readonly JOB_SCM:string;
                readonly JOB_SEQ:string;
                readonly JOIN_PARTY_DATE:string;
                readonly JOIN_WORK_TIME:string;
                readonly LABORREL_STATUS:string;
                readonly LABORREL_STATUS_ID:string;
                readonly LABORREL_TYPE:string;
                readonly LABORREL_TYPECLS:string;
                readonly LABORREL_TYPECLS_ID:string;
                readonly LABORREL_TYPECLS_NUMBER:string;
                readonly LABORREL_TYPE_ID:string;
                readonly LABREL_STATUSCLS:string;
                readonly LABREL_STATUSCLS_ID:string;
                readonly LABREL_STATUSCLS_NUMBER:string;
                readonly LABREL_STATUSPRD:string;
                readonly LABREL_STATUSPRD_ID:string;
                readonly LABREL_STATUSPRD_NUMBER:string;
                readonly LASTWORKDATE:string;
                readonly LOCATION:string;
                readonly MAINPEOINCHARGE:string;
                readonly MANAGINGSCOPE:string;
                readonly MARRIAGE_REGIST_DATE:string;
                readonly MID:string;
                readonly NATIONALITY:string;
                readonly ORG:string;
                readonly PEREMAIL:string;
                readonly PERSON:string;
                readonly PERSONID:string;
                readonly PERSONINDEXID:string;
                readonly PERSON_ID:string;
                readonly PERSON_PERSONINDEXID:string;
                readonly PER_EDUEXP:string;
                readonly PHONE:string;
                readonly POSITION:string;
                readonly POSITIONID:string;
                readonly POSITIONNAME:string;
                readonly POSSTATUS:string;
                readonly POSTYPE:string;
                readonly POSTYPEID:string;
                readonly REGISTRATE_DATE:string;
                readonly ROLE:string;
                readonly SECOND_TIME:string;
                readonly SERVICELEN:string;
                readonly SERVICELENGTH:string;
                readonly SERVICE_LEN:string;
                readonly SOCIAL_WORKAGE:string;
                readonly STARTDATE:string;
                readonly START_DATE:string;
                readonly STDPOSITION:string;
                readonly SYSENDDATE:string;
                readonly SYS_END_DATE:string;
                readonly VARIATIONTYPE:string;
                readonly WORK_YEAR:string;
            }
            interface HSPMFieldConstants$ {
            }
            type HSPMFieldConstants_T = HSPMFieldConstants_S & HSPMFieldConstants$;
            interface HSPMFieldConstants extends HSPMFieldConstants_T {
            }
            interface ImportTypeConstant_S {
                readonly IMPORTTYPE:string;
                readonly NEW:string;
                readonly NEW_RADIOFIELD:string;
                readonly ONLY_NEW:$.java.util.List;
                readonly ONLY_OVERRIDE:$.java.util.List;
                readonly ONLY_OVERRIDENEW:$.java.util.List;
                readonly OVERRIDE:string;
                readonly OVERRIDENEW:string;
                readonly OVERRIDENEW_RADIOFIELD:string;
                readonly OVERRIDE_RADIOFIELD:string;
            }
            interface ImportTypeConstant$ {
            }
            type ImportTypeConstant_T = ImportTypeConstant_S & ImportTypeConstant$;
            interface ImportTypeConstant extends ImportTypeConstant_T {
            }
            interface MyErManFileConstants_S {
                readonly ERFILE_ID:string;
                readonly HSSC_APPKEY:string;
            }
            interface MyErManFileConstants$ {
            }
            type MyErManFileConstants_T = MyErManFileConstants_S & MyErManFileConstants$;
            interface MyErManFileConstants extends MyErManFileConstants_T {
            }
            interface AttachConstants_S {
                readonly ATTACH:string;
                readonly ATTACH_NAME:string;
                readonly BACKCOLOR:string;
                readonly BIG_LEFT_SUBPANELAP:string;
                readonly BIZAPP:string;
                readonly BOT_MAIN_PANELAP:string;
                readonly BO_ID:string;
                readonly BUSINESSSTATUS:string;
                readonly BUT_LAB:string;
                readonly BU_NUMBER:string;
                readonly CACHE_IGN_FEILD:string;
                readonly CACHE_IGN_SET:string;
                readonly CARD:string;
                readonly CARD_ENWIDTH:string;
                readonly CARD_WIDTH:string;
                readonly CEN_MAIN_PANELAP:string;
                readonly CHANGE:string;
                readonly CHECK_PK_ID:string;
                readonly CHILDSUB_CONTENT_PANELAP:string;
                readonly CHILD_CONTENT_PANELAP:string;
                readonly CLICK_SAVE:string;
                readonly CODE:string;
                readonly CONTENT:string;
                readonly CONTENT_BIG:string;
                readonly CONTENT_BIGONEAP:string;
                readonly CONTENT_MARGIN:string;
                readonly COUNT_TIMEIN_BUT:string;
                readonly CUS_HEAD:string;
                readonly CUS_LEFT_HEAD:string;
                readonly CUS_RIGHT_HEAD:string;
                readonly CUT:string;
                readonly DATA:string;
                readonly DATASTATUS:string;
                readonly DEFALUR_BU:string;
                readonly DEL:string;
                readonly DELETE_INFO:string;
                readonly DEL_ATTACH:string;
                readonly DEL_ATTACH_FORM:string;
                readonly DETAIL_PANELAP:string;
                readonly DISCARD_BATCH:string;
                readonly DO_ABANDON:string;
                readonly DO_ADD:string;
                readonly DO_DEL:string;
                readonly DO_EDIT:string;
                readonly DO_EXPIRE:string;
                readonly DO_SPLIT:string;
                readonly DO_VIEW_CONTRACT:string;
                readonly DY_FIELD:string;
                readonly EDIT:string;
                readonly EMPNEW_RECORD:string;
                readonly EMPNEW_RECORD_HIND:string;
                readonly EMPTY_DEL:string;
                readonly EMPTY_EDIT:string;
                readonly EMPTY_EXPIRE:string;
                readonly ENDDATE:string;
                readonly ENTRY_ENTITY:string;
                readonly ERROR_MSG:string;
                readonly EXECUTE_ACTION_PERSONAL_CHANGE:string;
                readonly EXPIRE:string;
                readonly FIX_ID:string;
                readonly FIX_TIME_ID:string;
                readonly FORCOLOR:string;
                readonly FORM_ID_SET:string;
                readonly GET_ACTION_PERSONAL_CHANGE:string;
                readonly HEADDY_PANELAP:string;
                readonly HEAD_BUT:string;
                readonly HEAD_LEFT_PANELAP:string;
                readonly HEAD_PANELAP:string;
                readonly HEAD_RIGHT_PANELAP:string;
                readonly HIDE_EIDT:string;
                readonly HPFS_SERVICE:string;
                readonly HRPI_GENERIC_SERVICE:string;
                readonly HRPI_SERVICE:string;
                readonly HSPM_EMPSUPREL_DG:string;
                readonly HSPM_PERCRE_DV:string;
                readonly IDCARD_VIEW:string;
                readonly IMAGE:string;
                readonly IMAGE_TYPE_BACK:string;
                readonly IMAGE_TYPE_FACE:string;
                readonly INIT:string;
                readonly INPUT_PARAMS:string;
                readonly ISCURRENT_VERSION:string;
                readonly ISEXISTPROBATION:string;
                readonly ISLATESTRECORD:string;
                readonly ISPRIMARY:string;
                readonly ISPRIMARYSCOPE:string;
                readonly ITEM_DELETE:string;
                readonly ITEM_EXPIRE:string;
                readonly ITEM_MODIFY:string;
                readonly ITEM_VIEW_CONTRACT:string;
                readonly KD_EDC_BA:string;
                readonly LABORREL_TYPE:string;
                readonly LABORRE_LSTATUS:string;
                readonly LETTER_PIC:string;
                readonly LETTER_PIC_AP:string;
                readonly MAP_NEW_VERSION:string;
                readonly MARGIN_TOP:string;
                readonly MESSAGE:string;
                readonly NAME_FIELD:string;
                readonly NEST:string;
                readonly NEW_FORM_VERSION:string;
                readonly NEW_SPECIAL_CARD:string;
                readonly NEW_SUPERIOR:string;
                readonly NEW_SUPERIOR_1010:string;
                readonly NEW_VERSION:string;
                readonly PATH:string;
                readonly PER_ATTACH:string;
                readonly PER_FIELD:string;
                readonly PER_HALF:string;
                readonly PER_ROOT:string;
                readonly PER_THE:string;
                readonly PER_TWO:string;
                readonly PER_TYPE:string;
                readonly PKID_SET:string;
                readonly PLEAN_WIDTH:string;
                readonly POSTYPE:string;
                readonly POSTYPT_ALL:string;
                readonly POSTYPT_OUT:string;
                readonly POSTYPT_PART:string;
                readonly P_NUMBER:string;
                readonly RECORD_FILTER:string;
                readonly REMOVE_TEMP_ATTACHMENTS:string;
                readonly REPORT_TYPE:string;
                readonly RESET_AP:string;
                readonly RESPONSE_CODE:string;
                readonly RESULT:string;
                readonly REVISE_VERSION_BATCH:string;
                readonly SAVEOR_UPDATEINFO:string;
                readonly SAVE_BATCH:string;
                readonly SAVE_TEMP_ATTACHMENTS:string;
                readonly SCENE_NUMBER:string;
                readonly SCOPE_NON_PRIMARY:long;
                readonly SCOPE_PRIMARY:long;
                readonly SCPNEW_RECORD:string;
                readonly SHAME:string;
                readonly SHOW_CARD_ADD:string;
                readonly SHOW_CARD_CHG:string;
                readonly SHOW_FORM_LOSE:string;
                readonly SIGN:string;
                readonly SIGN_CHAR:string;
                readonly SOLID:string;
                readonly SPACE:string;
                readonly SPECIAL_ATTMENT:string;
                readonly SPECIAL_CARD:string;
                readonly START_DATE:string;
                readonly STR_TWO:string;
                readonly SUCCESS:string;
                readonly SUPERIOR:string;
                readonly SUPERIOR_1010:string;
                readonly SUPERIOR_IMAGE:string;
                readonly SUPERIOR_SUFFIX:string;
                readonly SYS_ENDDATE:string;
                readonly TIME_BUT:string;
                readonly TIME_FLEX:string;
                readonly TIME_FLEX_BUT:string;
                readonly TIME_OUT_BUT:string;
                readonly TOPONE_MAIN_PANELAP:string;
                readonly TOPOP_PANELAP:string;
                readonly TOPTWO_MAIN_PANELAP:string;
                readonly TOP_MAIN_PANELAP:string;
                readonly TYPE_ALL:string;
                readonly TYPE_ATTACH:string;
                readonly TYPE_CONTENT:string;
                readonly TYPE_HEAD:string;
                readonly TYPE_NUMBER:string;
                readonly TYPE_OP:string;
                readonly TYPE_SPICE:string;
                readonly TYPE_TEXT:string;
                readonly TYPE_TIME:string;
                readonly TYPE_TOP:string;
                readonly URL:string;
                readonly VIEW_CONTRACT:string;
                readonly VIEW_MAP_CONTRACT:string;
                readonly VIEW_SHOW_DIALOG:string;
            }
            interface AttachConstants$ {
            }
            type AttachConstants_T = AttachConstants_S & AttachConstants$;
            interface AttachConstants extends AttachConstants_T {
            }
            interface ApprovalConstants_S {
                readonly AUDIT_RECORD:string;
                readonly CHANGE:string;
                readonly CHANGE_RECORD:string;
                readonly DATA_ID:string;
                readonly EDUEXP_NAME:string;
                readonly ENTITY_NAME:string;
                readonly EXTRA_INFO:string;
                readonly FIELD_NAME:string;
                readonly FIELD_TYPE:string;
                readonly FIRST_GROUP:string;
                readonly FIRST_GROUPNUM:string;
                readonly GROUPFIELD_CACHE_ENDS:string;
                readonly GROUP_CONCAT_KEY:string;
                readonly G_ATTACHMENT:string;
                readonly G_TEXT:string;
                readonly HEAD_NUM:string;
                readonly INFOGROUP_SHOW:string;
                readonly IS_DEL:string;
                readonly IS_MYINFOAPPROVAL:string;
                readonly IS_NEW:string;
                readonly IS_NEW_MODIFY:string;
                readonly NEW_VALUE:string;
                readonly OLD_VALUE:string;
                readonly REASON:string;
                readonly RESULT:string;
                readonly SECONDGROUP:string;
                readonly STATUS:string;
                readonly SUBMIT_VERSON:string;
            }
            interface ApprovalConstants$ {
            }
            type ApprovalConstants_T = ApprovalConstants_S & ApprovalConstants$;
            interface ApprovalConstants extends ApprovalConstants_T {
            }
            interface HspmCommonConstants_S {
                readonly ADD_SUPERIOR:string;
                readonly ADJUST_LENGTH:string;
                readonly AFTER:string;
                readonly AMOUNT_PROP:string;
                readonly APP_BUSINESS:string;
                readonly APP_COMMON:string;
                readonly APP_FORMPLUGIN:string;
                readonly APP_ID:string;
                readonly APP_KEY:string;
                readonly APP_OPPLUGIN:string;
                readonly APP_SDK_HR:string;
                readonly ATTACHMENT_PANEL_AP:string;
                readonly ATTACHMENT_PROP:string;
                readonly ATTACH_PARAMS:string;
                readonly ATTACH_VISIBLE_PARAMS:string;
                readonly AUDIT_RECORD_LBL:string;
                readonly AUDIT_RECORD_VEC:string;
                readonly AUTHCERTNUMBER:string;
                readonly BD_CURRENCY:string;
                readonly BEFORE:string;
                readonly BILLSTATUS_WAIT_RESUBMIT:string;
                readonly BILL_STATUS:string;
                readonly BLANK:string;
                readonly BO_ID:string;
                readonly BUSINESSSTATUS_EFFECT:string;
                readonly BUSINESSSTATUS_LOSE:string;
                readonly BUSINESS_STATUS:string;
                readonly BUTTON_ADD:string;
                readonly CERT_TYPE:string;
                readonly CHANGE_RECORD_LBL:string;
                readonly CHANGE_RECORD_VEC:string;
                readonly CHG_EMP_JOB:string;
                readonly CHG_MODE_DEL:string;
                readonly CHG_MODE_NO:string;
                readonly CLOSEPANEL:string;
                readonly CMPEMP:string;
                readonly CMPEMP_ID:string;
                readonly COLLEGE_COUNTRY:string;
                readonly CONFIRM:string;
                readonly CONTACTADDR:string;
                readonly CONTAIN_HRPI:string;
                readonly CONTAIN_HSPM:string;
                readonly COUNTRY:string;
                readonly CREDENTIALS_TYPE:string;
                readonly CURRENCY_VALUE:string;
                readonly DATA_ID:string;
                readonly DEFAULT_EMPTY:string;
                readonly DEFAULT_IMG:string;
                readonly DEFAULT_PREFIX:string;
                readonly DEFAULT_SORT:number;
                readonly DEGREE_CERT:string;
                readonly DEGREE_CERT_ID:long;
                readonly DEGREE_CERT_NUMBER:string;
                readonly DEGREE_CERT_OCR_TEMP_NUMBER:string;
                readonly DEGREE_RECORD_CERT:string;
                readonly DEGREE_RECORD_CERT_ID:long;
                readonly DEGREE_RECORD_CERT_NUMBER:string;
                readonly DEGREE_RECORD_CERT_OCR_TEMP_NUMBER:string;
                readonly DEGREE_REG_CERT:string;
                readonly DEGREE_REG_CERT_ID:long;
                readonly DEGREE_REG_CERT_NUMBER:string;
                readonly DEGREE_REG_CERT_OCR_TEMP_NUMBER:string;
                readonly DEL_SUPERIOR:string;
                readonly DEPEMP:string;
                readonly DEPEMP_ID:string;
                readonly DESCRIPTION:string;
                readonly EMPENTREL:string;
                readonly EMPLOYEE:string;
                readonly EMPLOYEE_ID:string;
                readonly EMPTY:string;
                readonly ENTITY_NAME:string;
                readonly ENTRY_CACHE:string;
                readonly ENTRY_ICON:string;
                readonly ENTRY_NAME:string;
                readonly ERFILEID:string;
                readonly ERMANFILE_MOBILE_SCENE:string;
                readonly ERMANFILE_PC_SCENE:string;
                readonly EXPIRE_SUPERIOR:string;
                readonly EXP_PARAMS:string;
                readonly FACE_IMAGE:string;
                readonly FAMILYMEMBSHIP:string;
                readonly FIELD_EMPPOSREL:string;
                readonly FIELD_NAME:string;
                readonly FIELD_TYPE:string;
                readonly FIRST_GROUPNUM:string;
                readonly FOREIGN_DEGREE_RECORD_CERT:string;
                readonly FOREIGN_DEGREE_RECORD_CERT_ID:long;
                readonly FOREIGN_DEGREE_RECORD_CERT_NUMBER:string;
                readonly FOREIGN_DEGREE_RECORD_CERT_OCR_TEMP_NUMBER:string;
                readonly FULL_PIN_YIN:string;
                readonly GET_PLAINTEXT:string;
                readonly GRADUATE_CERT:string;
                readonly GRADUATE_CERT_ID:long;
                readonly GRADUATE_CERT_NUMBER:string;
                readonly GRADUATE_CERT_OCR_TEMP_NUMBER:string;
                readonly GRADUATE_SCHOOL:string;
                readonly GROUP_NUMBER:string;
                readonly HAS_ATTACH_CHANGE:string;
                readonly HAS_FIELD_CHANGE:string;
                readonly HBPM_POSITIONHR:string;
                readonly HBSS_COLLEGE:string;
                readonly HBSS_DEGREE:string;
                readonly HBSS_DIPLOMA:string;
                readonly HBSS_LABORRELSTATUS:string;
                readonly HBSS_LABORRELTYPE:string;
                readonly HBSS_POSTYPE:string;
                readonly HEADS_CULPTURE:string;
                readonly HEAD_TIPS_PANEL:string;
                readonly HOBBY:string;
                readonly HPFS:string;
                readonly HR:string;
                readonly HRCS_KEY:string;
                readonly HRPI:string;
                readonly HRPI_ATTACHREVISECON:string;
                readonly HRPI_BASELOCATION:string;
                readonly HRPI_CMPEMP:string;
                readonly HRPI_CONTRWORKLOC:string;
                readonly HRPI_DEPEMP:string;
                readonly HRPI_EMPEJOBREL:string;
                readonly HRPI_EMPENTREL:string;
                readonly HRPI_EMPLOYEE:string;
                readonly HRPI_EMPNONENTREL:string;
                readonly HRPI_EMPORGRELALL:string;
                readonly HRPI_EMPPOSORGREL:string;
                readonly HRPI_EMPPROEXP:string;
                readonly HRPI_EMPSUPREL:string;
                readonly HRPI_EMPTRAINFILE:string;
                readonly HRPI_EMPTUTOR:string;
                readonly HRPI_EMRGCONTACT:string;
                readonly HRPI_ERMANFILE:string;
                readonly HRPI_FAMILYMEMB:string;
                readonly HRPI_FERTILITYINFO:string;
                readonly HRPI_LABORRELRECORD:string;
                readonly HRPI_LANGUAGESKILLS:string;
                readonly HRPI_MANAGINGSCOPE:string;
                readonly HRPI_PERADDRESS:string;
                readonly HRPI_PERCONTACT:string;
                readonly HRPI_PERCONTACT_DV:string;
                readonly HRPI_PERCRE:string;
                readonly HRPI_PEREDUEXPCERT:string;
                readonly HRPI_PERHOBBY:string;
                readonly HRPI_PERNONTSPROP:string;
                readonly HRPI_PEROCPQUAL:string;
                readonly HRPI_PERPRACTQUAL:string;
                readonly HRPI_PERPROTITLE:string;
                readonly HRPI_PERREGION:string;
                readonly HRPI_PERRPRECORD:string;
                readonly HRPI_PERSERLEN:string;
                readonly HRPI_PERSON:string;
                readonly HRPI_PERSONENTITYCONF:string;
                readonly HRPI_PERSONF7QUERY:string;
                readonly HRPI_PERSONROLEREL:string;
                readonly HRPI_PERTSPROP:string;
                readonly HRPI_PREWORKEXP:string;
                readonly HRPI_RSMPATINV:string;
                readonly HRPI_RSMPROSKL:string;
                readonly HRPI_TRIALPERIOD:string;
                readonly HRPI_TRIALPERIODRST:string;
                readonly HRPI_WORKCALENREL:string;
                readonly HR_COULD_ID:string;
                readonly HR_HSPM_FORMPLUGIN:string;
                readonly HSPM_APPROVALHEAD:string;
                readonly HSPM_APPROVALSUCCESS:string;
                readonly HSPM_APPROVAL_ATTACHMENT:string;
                readonly HSPM_ATTACHMENTAPPROVAL:string;
                readonly HSPM_BASICINFO:string;
                readonly HSPM_CHANGERECORD:string;
                readonly HSPM_DYNFILEHEAD:string;
                readonly HSPM_DYNFILEPAGE:string;
                readonly HSPM_EMPJOBREL_DG:string;
                readonly HSPM_EMPSUPREL_DV:string;
                readonly HSPM_ERFILEQUERYMULTIVIEW:string;
                readonly HSPM_ERMANFILE:string;
                readonly HSPM_ERMANFILE_OPENDEFAULTORDER:string;
                readonly HSPM_GROUPFIELDAPPROVAL:string;
                readonly HSPM_INFOAPPROVAL:string;
                readonly HSPM_INFOGROUP_FIELD:string;
                readonly HSPM_INFOGROUP_PAGEREG:string;
                readonly HSPM_MOBERHOME:string;
                readonly HSPM_MULTIVIEW_CONFIG:string;
                readonly HSPM_MULTIVIEW_CONFIG_EMP:string;
                readonly HSPM_MYERMANFILE:string;
                readonly HSPM_PERCRE:string;
                readonly HSPM_PEREDUEXP:string;
                readonly HSPM_PEREDUEXP_MDG:string;
                readonly HSPM_RELATEDCONFIG:string;
                readonly HSS_BUSINESSOFFICE:string;
                readonly ID_AND_INDEX_MAP_STR:string;
                readonly IHRPI_WORKROLE_SERVICE:string;
                readonly INITBATCH:string;
                readonly INITSTATUS:string;
                readonly INITSTATUS_FINISH:string;
                readonly INTEREST:string;
                readonly INT_FIVE:number;
                readonly ISAUTHENTICATED:string;
                readonly ISNOFIXEDTERM_AUDIT:string;
                readonly IS_AUDIT:string;
                readonly IS_CURRENTVERSION:string;
                readonly IS_FROM_INIT_OPEN:string;
                readonly IS_FULLTIME:string;
                readonly IS_HIGHEST_DEGREE:string;
                readonly IS_MAINWORK:string;
                readonly IS_NEW:string;
                readonly IS_NO_FIXED_TERM:string;
                readonly IS_OVERSEAS:string;
                readonly IS_PREVIEW:string;
                readonly JOB_ACTION_ID:long;
                readonly KEY_FBASEDATAID:string;
                readonly LABELAP_AUDIT:string;
                readonly LABELAP_AUDIT_VIEW:string;
                readonly LABEL_AP:string;
                readonly LANGUAGE:string;
                readonly LANGUAGECERT:string;
                readonly LANGUAGESKILLS_LANGUAGE:string;
                readonly LETTER:string;
                readonly MOBILEPHONE:string;
                readonly MTOOLBARAP:string;
                readonly NEW_VALUE:string;
                readonly NO:string;
                readonly NOTPASSINFO:string;
                readonly NOTPASSPANEL:string;
                readonly NOT_PASS_VECTOR:string;
                readonly NUMBER:string;
                readonly NUMBER_1010_ID:long;
                readonly NUMBER_1010_S:string;
                readonly NUMBER_1020_ID:long;
                readonly NUMBER_1020_S:string;
                readonly NUMBER_1030_ID:long;
                readonly NUMBER_1030_S:string;
                readonly NUMBER_1040_ID:long;
                readonly NUMBER_1040_S:string;
                readonly NUMBER_1050_ID:long;
                readonly NUMBER_1050_S:string;
                readonly NUMBER_1060_ID:long;
                readonly NUMBER_1060_S:string;
                readonly NUMBER_1070_ID:long;
                readonly NUMBER_1070_S:string;
                readonly NUMBER_1080_ID:long;
                readonly NUMBER_1080_S:string;
                readonly NUMBER_1090_ID:long;
                readonly NUMBER_1090_S:string;
                readonly NUMBER_1100_ID:long;
                readonly NUMBER_1100_S:string;
                readonly NUMBER_1110_ID:long;
                readonly NUMBER_1110_S:string;
                readonly NUMBER_1120_ID:long;
                readonly NUMBER_1120_S:string;
                readonly NUMBER_1130_ID:long;
                readonly NUMBER_1130_S:string;
                readonly NUMBER_1140_ID:long;
                readonly NUMBER_1140_S:string;
                readonly NUMBER_1150_ID:long;
                readonly NUMBER_1150_S:string;
                readonly NUMBER_1190_S:string;
                readonly OLD_DB_DATA:string;
                readonly OLD_HEAD_PIC:string;
                readonly OLD_VALUE:string;
                readonly OPENMOREPANEL:string;
                readonly OP_SAVE:string;
                readonly OTHERLANGUAGECERT:string;
                readonly OTHER_CERT_NUMBER:string;
                readonly OTHER_LANGUAGECERT_ID:long;
                readonly OTHER_SCHOOL_BOID:long;
                readonly PAGETYPE_CARDVIEW:string;
                readonly PAGETYPE_DATABASE:string;
                readonly PAGETYPE_DYBASE:string;
                readonly PAGETYPE_LIST:string;
                readonly PAGE_DISPLAY_CONFIG:string;
                readonly PAGE_DISPLAY_PLAN:string;
                readonly PAGE_DISPLAY_PLAN_CONFIG:string;
                readonly PAGE_EMP_REPORT:string;
                readonly PAGE_HBSS_EDUCERTTYPE:string;
                readonly PAGE_HBSS_LANGUAGECERT:string;
                readonly PAGE_HRPI_PEREDUEXP:string;
                readonly PAGE_HRPI_PEREDUEXPCERT:string;
                readonly PAGE_HSPM_PEREDUEXP_DG:string;
                readonly PAGE_PEREDUEXP_MDG:string;
                readonly PAGE_PEREDUEXP_PDG:string;
                readonly PAGE_QUITEMP_REPORT:string;
                readonly PAGE_QUITREPORT_QUERY:string;
                readonly PAGE_REPORT_PLAN:string;
                readonly PAGE_REPORT_QUERY:string;
                readonly PAGE_TRANSACTION_PLAN:string;
                readonly PAGE_TRANSACTION_REPORT:string;
                readonly PDG:string;
                readonly PDV:string;
                readonly PEREDUEXP:string;
                readonly PERSON:string;
                readonly PERSON_HPFSTOHRMP_ACTION_ID:long;
                readonly PERSON_HPFS_ACTION_ID:long;
                readonly PERSON_ID:string;
                readonly PERSON_ID_REL:string;
                readonly PERSON_MSGPUBNO:string;
                readonly PICTURE_FIELD:string;
                readonly PICTURE_PROP:string;
                readonly POSTYPE:string;
                readonly PREGETTIME:string;
                readonly PRE_MAJOR_ID:string;
                readonly QUERY_FIELDS:string;
                readonly REASON:string;
                readonly REJECTRECORD:string;
                readonly SCHOOL_RECORD:string;
                readonly SCHOOL_RECORD_ID:long;
                readonly SCHOOL_RECORD_NUMBER:string;
                readonly SERVICE_AGE_SCHEME:string;
                readonly SHOW_LIST:string;
                readonly SORT:string;
                readonly SOURCE_VID:string;
                readonly STR_FIVE:string;
                readonly STR_FOUR:string;
                readonly STR_IN_EFFECTIVE:string;
                readonly STR_MINUS_ONE:string;
                readonly STR_NTHREE:string;
                readonly SUCCESS:string;
                readonly SWITCHTOHOME:string;
                readonly TEXT_PROP:string;
                readonly TUTOR:string;
                readonly TUTOR_ID:string;
                readonly UNABLE_DELETE:string;
                readonly UPDATE_SUPERIOR:string;
                readonly VARIATION_TYPE:string;
                readonly VARIATION_TYPE_101240:long;
                readonly WITHDRAW:string;
                readonly WORKUNIT:string;
                readonly YES:string;
                readonly YMD:string;
                readonly YMD_HMS:string;
                readonly label:string;
            }
            interface HspmCommonConstants$ {
            }
            type HspmCommonConstants_T = HspmCommonConstants_S & HspmCommonConstants$;
            interface HspmCommonConstants extends HspmCommonConstants_T {
            }
        }
        namespace kd.sdk.hr.hspm.common.dto{
            interface ChangeDto_S {
            }
            interface ChangeDto_C extends ChangeDto_S {
                new():ChangeDto;
                new(fieldName:string,fieldType:kd.sdk.hr.hspm.common.enums.FieldTypeEnum):ChangeDto;
                new(fieldName:string,fieldType:kd.sdk.hr.hspm.common.enums.FieldTypeEnum,fieldKey:string):ChangeDto;
            }
            interface ChangeDto$ {
                getAfterValue():string;
                getBeforeValue():string;
                getFieldKey():string;
                getFieldName():string;
                getFieldType():kd.sdk.hr.hspm.common.enums.FieldTypeEnum;
                setAfterValue(afterValue:string):void;
                setBeforeValue(beforeValue:string):void;
                setFieldKey(fieldKey:string):void;
                setFieldName(fieldName:string):void;
                setFieldType(fieldType:kd.sdk.hr.hspm.common.enums.FieldTypeEnum):void;
            }
            type ChangeDto_T = ChangeDto_S & ChangeDto$;
            interface ChangeDto extends ChangeDto_T {
            }
            interface HpfsChgexternalrecordQueueDto_S {
                /**
                 * 构造接口传参对象
                 *
                 * @param personId    自然人ID
                 * @param ermanFileDy 人事业务档案动态对象
                 * @return 人员模型对象
                 */
                build(personId:long,ermanFileDy:$.kd.bos.dataentity.entity.DynamicObject):HpfsChgexternalrecordQueueDto;
                /**
                 * 时序性 新增:
                 * "idBefore": 0,
                 * "vidBefore": 0,
                 * "idAfter": 新增接口返回ID=fboid,
                 * "vidAfter": 新增接口返回的历史ID,
                 *
                 * @param idAfter  新增接口返回ID=fboid
                 * @param vidAfter 新增接口返回的历史ID
                 * @return 报文中的datarow中的内容
                 */
                buildDataRowEntityForHisLineInsert(idAfter:long,vidAfter:long):HpfsChgexternalrecordQueueDto$DataRowEntity;
                /**
                 * 时序性 更新:
                 * "idBefore": 当前记录更新前的fboid,
                 * "vidBefore": 当前记录更新前的fsourcevid,
                 * "idAfter": 新增接口返回ID=fboid,
                 * "vidAfter": 新增接口返回的历史ID,
                 *
                 * @param idBefore  当前记录更新前的fboid
                 * @param vidBefore  当前记录更新前的fsourcevid
                 * @param idAfter  新增接口返回ID=fboid
                 * @param vidAfter 新增接口返回的历史ID
                 * @return 报文中的datarow中的内容
                 */
                buildDataRowEntityForHisLineUpdate(idBefore:long,vidBefore:long,idAfter:long,vidAfter:long):HpfsChgexternalrecordQueueDto$DataRowEntity;
                /**
                 * 非时序 删除:
                 * "idBefore": fboid,
                 * "vidBefore": 当前记录删除前的fsourcevid,
                 * "idAfter": 0,
                 * "vidAfter":0,
                 *
                 * @param idBefore  当前记录更新前的fboid
                 * @param vidBefore 当前记录更新前的fsourcevid
                 * @return 报文中的datarow中的内容
                 */
                buildDataRowEntityForHisNonLineDelete(idBefore:long,vidBefore:long):HpfsChgexternalrecordQueueDto$DataRowEntity;
                /**
                 * 非时序 新增:
                 * "idBefore":0,
                 * "vidBefore":0,
                 * "idAfter":新增接口返回ID=fboid,
                 * "vidAfter":0,
                 *
                 * @param idAfter 新增接口返回ID
                 * @return 报文中的datarow中的内容
                 */
                buildDataRowEntityForHisNonLineInsert(idAfter:long):HpfsChgexternalrecordQueueDto$DataRowEntity;
                /**
                 * 非时序 更新:
                 * "idBefore": fboid,
                 * "vidBefore": 当前记录更新前的fsourcevid,
                 * "idAfter": fboid,
                 * "vidAfter":0,
                 *
                 * @param idBefore  当前记录更新前的fboid
                 * @param vidBefore 当前记录更新前的fsourcevid
                 * @param idAfter   fboid
                 * @return 报文中的datarow中的内容
                 */
                buildDataRowEntityForHisNonLineUpdate(idBefore:long,vidBefore:long,idAfter:long):HpfsChgexternalrecordQueueDto$DataRowEntity;
            }
            type HpfsChgexternalrecordQueueDto_ST = $.java.io.Serializable & HpfsChgexternalrecordQueueDto_S;
            interface HpfsChgexternalrecordQueueDto_C extends HpfsChgexternalrecordQueueDto_ST {
                new():HpfsChgexternalrecordQueueDto;
            }
            interface HpfsChgexternalrecordQueueDto$ {
                /**
                 * 添加报文数据行
                 *
                 * @param entityNumber 实体编码
                 * @param consumer 报文数据提供器
                 * @return HpfsChgexternalrecordQueueDto
                 */
                addDataRow(entityNumber:string,consumer1:(t:any)=>void):this;
                getDataRow():$.java.util.List;
                /**
                 * 转换为请求报文JSON
                 *
                 * @return json字符串
                 */
                request():string;
                setBillNo(billNo:string):this;
                setBillSource(billSource:string):this;
                setBsed(bsed:long):this;
                setResultCallBackQueue(resultCallBackQueue:string):this;
            }
            type HpfsChgexternalrecordQueueDto_T = $.java.io.Serializable & HpfsChgexternalrecordQueueDto_S & HpfsChgexternalrecordQueueDto$;
            interface HpfsChgexternalrecordQueueDto extends HpfsChgexternalrecordQueueDto_T {
            }
            interface PereduexpcertDynDto_S {
            }
            interface PereduexpcertDynDto_C extends PereduexpcertDynDto_S {
                new(certtype:long,name:string,certFieldList:$.java.util.List):PereduexpcertDynDto;
            }
            interface PereduexpcertDynDto$ {
                getCertFieldList():$.java.util.List;
                getCerttype():long;
                getName():string;
                setCertFieldList(certFieldList:$.java.util.List):void;
            }
            type PereduexpcertDynDto_T = PereduexpcertDynDto_S & PereduexpcertDynDto$;
            interface PereduexpcertDynDto extends PereduexpcertDynDto_T {
            }
            interface PersonModelDto_S {
                /**
                 * 构造人员模型对象
                 *
                 * @param personId   自然人ID
                 * @param ermanFileDy 人事业务档案动态对象
                 * @return 人员模型对象
                 */
                build(personId:long,ermanFileDy:$.kd.bos.dataentity.entity.DynamicObject):PersonModelDto;
            }
            interface PersonModelDto_C extends PersonModelDto_S {
                new(personId:long):PersonModelDto;
            }
            interface PersonModelDto$ {
                getCmpEmpId():long;
                getDepEmpId():long;
                getEmployeeId():long;
                getPersonId():long;
            }
            type PersonModelDto_T = PersonModelDto_S & PersonModelDto$;
            interface PersonModelDto extends PersonModelDto_T {
            }
            interface DrawFormFieldDto_S {
            }
            type DrawFormFieldDto_ST = $.java.lang.Cloneable & DrawFormFieldDto_S;
            interface DrawFormFieldDto_C extends DrawFormFieldDto_ST {
                new():DrawFormFieldDto;
            }
            interface DrawFormFieldDto$ {
                clone():this;
                getAlias():string;
                getBaseEntityId():string;
                getClassSimpleName():string;
                getComboItemList():$.java.util.List;
                getDisplayStyle():number;
                getField():string;
                getHeight():string;
                getLock():string;
                getMaxCount():number;
                getMaxSize():string;
                getMinSize():string;
                getName():string;
                getOrigPageId():string;
                getPrecision():number;
                getScale():number;
                getTableName():string;
                getWidth():string;
                hasEmptyText():boolean;
                isFireUptEvt():boolean;
                isFullLine():boolean;
                isHidden():boolean;
                isIsAudit():boolean;
                isMustInput():boolean;
                /**
                 * 设置alias
                 *
                 * @param alias alias
                 * @return 当前对象
                 */
                setAlias(alias:string):this;
                /**
                 * 设置baseEntityId
                 *
                 * @param baseEntityId baseEntityId
                 * @return 当前对象
                 */
                setBaseEntityId(baseEntityId:string):this;
                /**
                 * 设置classSimpleName
                 *
                 * @param classSimpleName classSimpleName
                 * @return 当前对象
                 */
                setClassSimpleName(classSimpleName:string):this;
                /**
                 * 设置comboItemList
                 *
                 * @param comboItemList comboItemList
                 * @return 当前对象
                 */
                setComboItemList(comboItemList:$.java.util.List):this;
                /**
                 * 设置displayStyle
                 *
                 * @param displayStyle displayStyle
                 * @return 当前对象
                 */
                setDisplayStyle(displayStyle:number):this;
                /**
                 * 设置field
                 *
                 * @param field field
                 * @return 当前对象
                 */
                setField(field:string):this;
                /**
                 * 设置fireUptEvt
                 *
                 * @param fireUptEvt fireUptEvt
                 * @return 当前对象
                 */
                setFireUptEvt(fireUptEvt:boolean):this;
                /**
                 * 设置fullLine
                 *
                 * @param fullLine fullLine
                 * @return 当前对象
                 */
                setFullLine(fullLine:boolean):this;
                /**
                 * 是否为空提示
                 *
                 * @param hasEmptyText 是否为空提示
                 * @return 当前对象
                 */
                setHasEmptyText(hasEmptyText:boolean):this;
                setHeight(height:string):void;
                /**
                 * 设置hidden
                 *
                 * @param hidden hidden
                 * @return 当前对象
                 */
                setHidden(hidden:boolean):this;
                /**
                 * 是否编辑审核
                 *
                 * @param isAudit 是否
                 * @return 当前对象
                 */
                setIsAudit(isAudit:boolean):this;
                /**
                 * 设置isedit
                 *
                 * @param isedit isedit
                 * @return 当前对象
                 */
                setLock(isedit:boolean):this;
                /**
                 * 设置lock
                 *
                 * @param lock lock
                 * @return 当前对象
                 */
                setLock(lock:string):this;
                /**
                 * 设置maxCount
                 *
                 * @param maxCount maxCount
                 * @return 当前对象
                 */
                setMaxCount(maxCount:number):this;
                /**
                 * 设置maxSize
                 *
                 * @param maxSize maxSize
                 * @return 当前对象
                 */
                setMaxSize(maxSize:string):this;
                /**
                 * 设置minSize
                 *
                 * @param minSize minSize
                 * @return 当前对象
                 */
                setMinSize(minSize:string):this;
                /**
                 * 设置mustInput
                 *
                 * @param mustInput mustInput
                 * @return 当前对象
                 */
                setMustInput(mustInput:boolean):this;
                /**
                 * 设置name
                 *
                 * @param name name
                 * @return 当前对象
                 */
                setName(name:string):this;
                /**
                 * 设置pageId
                 *
                 * @param origPageId pageId
                 * @return 当前对象
                 */
                setOrigPageId(origPageId:string):this;
                /**
                 * 设置precision
                 *
                 * @param precision precision
                 * @return 当前对象
                 */
                setPrecision(precision:number):this;
                /**
                 * 设置scale
                 *
                 * @param scale scale
                 * @return 当前对象
                 */
                setScale(scale:number):this;
                setTableName(tableName:string):this;
                setWidth(width:string):void;
            }
            type DrawFormFieldDto_T = $.java.lang.Cloneable & DrawFormFieldDto_S & DrawFormFieldDto$;
            interface DrawFormFieldDto extends DrawFormFieldDto_T {
            }
            interface InfoClassifyEntityKeyDTO_S {
                /**
                 * 根据 表单标识 查找枚举
                 *
                 * @param formKey 列表标识
                 * @return 枚举对象
                 */
                getEntityKeyEnumByFormKey(formKey:string):InfoClassifyEntityKeyDTO;
                /**
                 * 根据 列表标识 查找枚举
                 *
                 * @param listKey 列表标识
                 * @return 枚举对象
                 */
                getEntityKeyEnumByListKey(listKey:string):InfoClassifyEntityKeyDTO;
                /**
                 * 根据 查询标识 查找枚举
                 *
                 * @param queryKey 查询标识
                 * @return 枚举对象
                 */
                getEntityKeyEnumByQueryKey(queryKey:string):InfoClassifyEntityKeyDTO;
                /**
                 * 初始化缓存
                 */
                initCacheMap():void;
            }
            type InfoClassifyEntityKeyDTO_ST = $.java.io.Serializable & InfoClassifyEntityKeyDTO_S;
            interface InfoClassifyEntityKeyDTO_C extends InfoClassifyEntityKeyDTO_ST {
                new():InfoClassifyEntityKeyDTO;
            }
            interface InfoClassifyEntityKeyDTO$ {
                getDefaultImportType():string;
                getDefaultLockUIs():$.java.util.List;
                getFormKey():string;
                getImportPlugin():string;
                getListKey():string;
                getQueryKey():string;
                getSourceKey():string;
                getTabKey():string;
                setDefaultImportType(defaultImportType:string):void;
                setDefaultLockUIs(defaultLockUIs:$.java.util.List):void;
                setFormKey(formKey:string):void;
                setImportPlugin(importPlugin:string):void;
                setListKey(listKey:string):void;
                setQueryKey(queryKey:string):void;
                setSourceKey(sourceKey:string):void;
                setTabKey(tabKey:string):void;
            }
            type InfoClassifyEntityKeyDTO_T = $.java.io.Serializable & InfoClassifyEntityKeyDTO_S & InfoClassifyEntityKeyDTO$;
            interface InfoClassifyEntityKeyDTO extends InfoClassifyEntityKeyDTO_T {
            }
            interface HpfsChgexternalrecordQueueDto$DataRowEntity_S {
            }
            type HpfsChgexternalrecordQueueDto$DataRowEntity_ST = $.java.io.Serializable & HpfsChgexternalrecordQueueDto$DataRowEntity_S;
            interface HpfsChgexternalrecordQueueDto$DataRowEntity_C extends HpfsChgexternalrecordQueueDto$DataRowEntity_ST {
                new():HpfsChgexternalrecordQueueDto$DataRowEntity;
            }
            interface HpfsChgexternalrecordQueueDto$DataRowEntity$ {
                setChgMode(arg0:string):this;
                setFlowType(arg0:string):this;
                setIdAfter(arg0:long):this;
                setIdBefore(arg0:long):this;
                setVidAfter(arg0:long):this;
                setVidBefore(arg0:long):this;
            }
            type HpfsChgexternalrecordQueueDto$DataRowEntity_T = $.java.io.Serializable & HpfsChgexternalrecordQueueDto$DataRowEntity_S & HpfsChgexternalrecordQueueDto$DataRowEntity$;
            interface HpfsChgexternalrecordQueueDto$DataRowEntity extends HpfsChgexternalrecordQueueDto$DataRowEntity_T {
            }
        }
        namespace kd.sdk.hr.hspm.common.entity{
            interface InfoclassifyPercreField_S {
            }
            type InfoclassifyPercreField_ST = PercreField_S & InfoclassifyPercreField_S;
            interface InfoclassifyPercreField_C extends InfoclassifyPercreField_ST {
                new(faceUrl:string,reverseUrl:string,fieldSet:$.java.util.Set):InfoclassifyPercreField;
            }
            interface InfoclassifyPercreField$ {
            }
            type InfoclassifyPercreField_T = PercreField & InfoclassifyPercreField_S & InfoclassifyPercreField$;
            interface InfoclassifyPercreField extends InfoclassifyPercreField_T {
            }
            interface PercreField_S {
            }
            interface PercreField_C extends PercreField_S {
                new(faceUrl:string,reverseUrl:string,fieldSet:$.java.util.Set):PercreField;
                new(faceUrl:string,reverseUrl:string,mobileFaceUrl:string,mobileReverseUrl:string,fieldSet:$.java.util.Set):PercreField;
            }
            interface PercreField$ {
                getFaceUrl():string;
                getFieldSet():$.java.util.Set;
                getMobileFaceUrl():string;
                getMobileReverseUrl():string;
                getReverseUrl():string;
            }
            type PercreField_T = PercreField_S & PercreField$;
            interface PercreField extends PercreField_T {
            }
        }
        namespace kd.sdk.hr.hspm.common.enums{
            enum BusinessTypeEnum {
                ADMIN,
                EMPLOYEE,
                COMMON
            }
            enum ConfigAreaEnum {
                MAIN,
                SIDE,
                COMMON
            }
            enum InfoClassifyEntityKeyEnum {
                HSPM_PERSONINFO,
                HSPM_PEREDUEXPINFO,
                HSPM_EMPPROEXP,
                HSPM_PREWORKEXP,
                HSPM_EMPTRAINFILE,
                HSPM_PEROCPQUAL,
                HSPM_PERPRACTQUAL,
                HSPM_PERPROTITLE,
                HSPM_LANGUAGESKILLS,
                HSPM_RSMPROSKL,
                HSPM_RSMPATINV,
                HSPM_PERRPRECORD,
                HSPM_PERHOBBY,
                HSPM_PERCONTACT,
                HSPM_PERADDRESS,
                HSPM_FAMILYMEMB,
                HSPM_FERTILITYINFO,
                HSPM_EMRGCONTACT,
                HSPM_PERCRE
            }
            enum InfoGroupFieldCategroyEnum {
                TEXT,
                IMG,
                ATTACH
            }
            enum PereduexpinfoFieldEnum {
                HRPI_PEREDUEXP,
                HRPI_PEREDUEXPCERT
            }
            enum InfoClassifyImportOperateEnum {
                HSPM_PERSONINFO,
                HSPM_PEREDUEXPINFO,
                HSPM_EMPPROEXP,
                HSPM_PREWORKEXP,
                HSPM_EMPTRAINFILE,
                HSPM_PEROCPQUAL,
                HSPM_PERPRACTQUAL,
                HSPM_PERPROTITLE,
                HSPM_LANGUAGESKILLS,
                HSPM_RSMPROSKL,
                HSPM_RSMPATINV,
                HSPM_PERRPRECORD,
                HSPM_PERHOBBY,
                HSPM_PERCONTACT,
                HSPM_PERADDRESS,
                HSPM_FAMILYMEMB,
                HSPM_FERTILITYINFO,
                HSPM_EMRGCONTACT,
                HSPM_PERCRE
            }
            enum FieldTypeEnum {
                MULILANG_TEXT,
                TEXT,
                COMBO,
                DATE,
                CREATE_DATE,
                MODIFY_DATE,
                DATE_TIME,
                BOOLEAN,
                DECIMAL,
                BIG_INT,
                LONG,
                ATTACHMENT_COUNT,
                INTEGER,
                BASE_DATA,
                CREATER,
                MODIFIER,
                PICTURE,
                BILL_STATUS,
                USER,
                CITY,
                ADMIN_DIVISION,
                MAIN_ORG,
                ATTACHMENT,
                TEXTAREA,
                Currency,
                ORGPROP,
                QueryProp,
                I18NNAMEPROP,
                ADDRESSPROP,
                MULBASEDATAPROP,
                MULQUERYPROP,
                AMOUNTPROP,
                HISMODELBASEDATAPROP
            }
            enum PersonModelClassificationEnum {
                PERSONMODEL,
                PERATTACHED,
                EMPATTACHED,
                CMPEMPATTACHED,
                DEPEMPATTACHED
            }
            enum BaseRefEnum {
                CMP_EMP
            }
            enum PereduexpcerttypeFieldEnum {
                GRADUATE_CERT_ID,
                DEGREE_CERT_ID,
                FOREIGN_DEGREE_RECORD_CERT_ID,
                DEGREE_REG_CERT_ID,
                DEGREE_RECORD_CERT_ID,
                OTHER
            }
            enum InfoClassifyFormOperateEnum {
                FORM_BTN_SAVE,
                FORM_BTN_DO_SAVE,
                FORM_BTN_UPDATE,
                FORM_BTN_DELETE,
                FORM_BTN_SAVEIMPORT,
                FORM_BTN_CANCEL,
                FORM_BTN_HISINFO,
                FORM_BTN_IMPORTDATA,
                FORM_BTN_IMPORTDETAILS,
                FORM_BTN_EXPORTLIST_EXPT,
                FORM_BTN_EXPORTLIST,
                FORM_BTN_EXPORTLISTBYSELECTFIELDS,
                FORM_BTN_EXPORTDETAILS
            }
            enum ReportTypeEnum {
                EMP,
                TRANSACTION,
                QUITEMP
            }
            enum ClientTypeEnum {
                PC,
                EMPLOYEE_MOBILE,
                EMPLOYEE_PC
            }
            enum InfoClassifyListOperateEnum {
                LIST_BTN_NEW,
                LIST_BTN_DELETE,
                LIST_BTN_REFRESH,
                LIST_BTN_HISINFO,
                LIST_BTN_IMPORT,
                LIST_BTN_IMPORTDETAILS,
                LIST_BTN_EXPORTLIST_EXPT,
                LIST_BTN_EXPORTLIST,
                LIST_BTN_EXPORTLISTBYSELECTFIELDS,
                LIST_BTN_EXPORTDETAILS,
                LIST_BTN_CLOSE
            }
            enum PersoninfoFieldEnum {
                HRPI_PERNONTSPROP,
                HRPI_PERTSPROP,
                HRPI_PERREGION,
                HRPI_PERSON,
                HSPM_ERMANFILE,
                HRPI_PERSERLEN
            }
        }
        namespace kd.sdk.hr.hspm.common.ext.file{
            interface QuitEmpReportExtColumnDTO_S {
            }
            type QuitEmpReportExtColumnDTO_ST = EmpReportExtColumnDTO_S & QuitEmpReportExtColumnDTO_S;
            interface QuitEmpReportExtColumnDTO_C extends QuitEmpReportExtColumnDTO_ST {
                new():QuitEmpReportExtColumnDTO;
                new(column:$.kd.bos.entity.report.ReportColumn,entityItem:$.kd.bos.metadata.entity.EntityItem,mapKey:string,mapValue:$.kd.bos.dataentity.entity.DynamicObject):QuitEmpReportExtColumnDTO;
            }
            interface QuitEmpReportExtColumnDTO$ {
            }
            type QuitEmpReportExtColumnDTO_T = EmpReportExtColumnDTO & QuitEmpReportExtColumnDTO_S & QuitEmpReportExtColumnDTO$;
            interface QuitEmpReportExtColumnDTO extends QuitEmpReportExtColumnDTO_T {
            }
            interface EmpReportExtColumnDTO_S {
            }
            interface EmpReportExtColumnDTO_C extends EmpReportExtColumnDTO_S {
                new():EmpReportExtColumnDTO;
                new(column:$.kd.bos.entity.report.ReportColumn,entityItem:$.kd.bos.metadata.entity.EntityItem,mapKey:string,mapValue:$.kd.bos.dataentity.entity.DynamicObject):EmpReportExtColumnDTO;
            }
            interface EmpReportExtColumnDTO$ {
                getColumn():$.kd.bos.entity.report.ReportColumn;
                getEntityItem():$.kd.bos.metadata.entity.EntityItem;
                getMapKey():string;
                getMapValue():$.kd.bos.dataentity.entity.DynamicObject;
            }
            type EmpReportExtColumnDTO_T = EmpReportExtColumnDTO_S & EmpReportExtColumnDTO$;
            interface EmpReportExtColumnDTO extends EmpReportExtColumnDTO_T {
            }
            interface EmpSupRelDTO_S {
            }
            interface EmpSupRelDTO_C extends EmpSupRelDTO_S {
                new():EmpSupRelDTO;
                new(delSuperior:$.java.util.Map):EmpSupRelDTO;
            }
            interface EmpSupRelDTO$ {
                getDelSuperior():$.java.util.Map;
                setDelSuperior(delSuperior:$.java.util.Map):void;
            }
            type EmpSupRelDTO_T = EmpSupRelDTO_S & EmpSupRelDTO$;
            interface EmpSupRelDTO extends EmpSupRelDTO_T {
            }
            interface QuitEmpReportExtQueryFieldsDTO_S {
            }
            type QuitEmpReportExtQueryFieldsDTO_ST = EmpReportExtQueryFieldsDTO_S & QuitEmpReportExtQueryFieldsDTO_S;
            interface QuitEmpReportExtQueryFieldsDTO_C extends QuitEmpReportExtQueryFieldsDTO_ST {
                new():QuitEmpReportExtQueryFieldsDTO;
                new(queryFieldSet:$.java.util.Set):QuitEmpReportExtQueryFieldsDTO;
            }
            interface QuitEmpReportExtQueryFieldsDTO$ {
            }
            type QuitEmpReportExtQueryFieldsDTO_T = EmpReportExtQueryFieldsDTO & QuitEmpReportExtQueryFieldsDTO_S & QuitEmpReportExtQueryFieldsDTO$;
            interface QuitEmpReportExtQueryFieldsDTO extends QuitEmpReportExtQueryFieldsDTO_T {
            }
            interface QuitEmpReportExtReletionFilterDTO_S {
            }
            type QuitEmpReportExtReletionFilterDTO_ST = EmpReportExtReletionFilterDTO_S & QuitEmpReportExtReletionFilterDTO_S;
            interface QuitEmpReportExtReletionFilterDTO_C extends QuitEmpReportExtReletionFilterDTO_ST {
                new():QuitEmpReportExtReletionFilterDTO;
                new(filterInfo:$.kd.bos.entity.report.FilterInfo,reletionMap:$.java.util.Map):QuitEmpReportExtReletionFilterDTO;
            }
            interface QuitEmpReportExtReletionFilterDTO$ {
            }
            type QuitEmpReportExtReletionFilterDTO_T = EmpReportExtReletionFilterDTO & QuitEmpReportExtReletionFilterDTO_S & QuitEmpReportExtReletionFilterDTO$;
            interface QuitEmpReportExtReletionFilterDTO extends QuitEmpReportExtReletionFilterDTO_T {
            }
            interface QuitEmpReportExtHisQueryDateDTO_S {
            }
            interface QuitEmpReportExtHisQueryDateDTO_C extends QuitEmpReportExtHisQueryDateDTO_S {
                new():QuitEmpReportExtHisQueryDateDTO;
                new(filterInfo:$.kd.bos.entity.report.FilterInfo):QuitEmpReportExtHisQueryDateDTO;
            }
            interface QuitEmpReportExtHisQueryDateDTO$ {
                /**
                 * 获取查询过滤详细信息
                 *
                 * @return filterInfo
                 */
                getFilterInfo():$.kd.bos.entity.report.FilterInfo;
            }
            type QuitEmpReportExtHisQueryDateDTO_T = QuitEmpReportExtHisQueryDateDTO_S & QuitEmpReportExtHisQueryDateDTO$;
            interface QuitEmpReportExtHisQueryDateDTO extends QuitEmpReportExtHisQueryDateDTO_T {
            }
            interface QuitEmpReportExtQueryFilterDTO_S {
            }
            type QuitEmpReportExtQueryFilterDTO_ST = EmpReportExtQueryFilterDTO_S & QuitEmpReportExtQueryFilterDTO_S;
            interface QuitEmpReportExtQueryFilterDTO_C extends QuitEmpReportExtQueryFilterDTO_ST {
                new():QuitEmpReportExtQueryFilterDTO;
                new(filterInfo:$.kd.bos.entity.report.FilterInfo,filter:$.kd.bos.orm.query.QFilter):QuitEmpReportExtQueryFilterDTO;
            }
            interface QuitEmpReportExtQueryFilterDTO$ {
            }
            type QuitEmpReportExtQueryFilterDTO_T = EmpReportExtQueryFilterDTO & QuitEmpReportExtQueryFilterDTO_S & QuitEmpReportExtQueryFilterDTO$;
            interface QuitEmpReportExtQueryFilterDTO extends QuitEmpReportExtQueryFilterDTO_T {
            }
            interface CardBindDataDTO_S {
            }
            interface CardBindDataDTO_C extends CardBindDataDTO_S {
                new():CardBindDataDTO;
                new(queryDbVo:kd.sdk.hr.hspm.common.vo.QueryDbVo,dataList:$.java.util.List):CardBindDataDTO;
                new(model:$.kd.bos.entity.datamodel.IDataModel,view:$.kd.bos.form.IFormView,afterCreatVo:kd.sdk.hr.hspm.common.vo.AfterCreatVo):CardBindDataDTO;
                new(model:$.kd.bos.entity.datamodel.IDataModel,view:$.kd.bos.form.IFormView,eventObject:$.java.util.EventObject,timeMap:$.java.util.Map):CardBindDataDTO;
                new(model:$.kd.bos.entity.datamodel.IDataModel,view:$.kd.bos.form.IFormView,beforeCreatVo:kd.sdk.hr.hspm.common.vo.BeforeCreatVo,drawFlag:boolean):CardBindDataDTO;
                new(model:$.kd.bos.entity.datamodel.IDataModel,view:$.kd.bos.form.IFormView,eventObject:$.java.util.EventObject,compareVo:kd.sdk.hr.hspm.common.vo.CardViewCompareVo,timeMap:$.java.util.Map):CardBindDataDTO;
                new(model:$.kd.bos.entity.datamodel.IDataModel,view:$.kd.bos.form.IFormView,eventObject:$.java.util.EventObject,compareVo:kd.sdk.hr.hspm.common.vo.CardViewCompareVo,timeMap:$.java.util.Map,queryDbVo:kd.sdk.hr.hspm.common.vo.QueryDbVo):CardBindDataDTO;
                new(model:$.kd.bos.entity.datamodel.IDataModel,view:$.kd.bos.form.IFormView,eventObject:$.java.util.EventObject,compareVo:kd.sdk.hr.hspm.common.vo.CardViewCompareVo,beforeCreatVo:kd.sdk.hr.hspm.common.vo.BeforeCreatVo,afterCreatVo:kd.sdk.hr.hspm.common.vo.AfterCreatVo,drawFlag:boolean,timeMap:$.java.util.Map):CardBindDataDTO;
            }
            interface CardBindDataDTO$ {
                getAfterCreatVo():kd.sdk.hr.hspm.common.vo.AfterCreatVo;
                getBeforeCreatVo():kd.sdk.hr.hspm.common.vo.BeforeCreatVo;
                getCompareVo():kd.sdk.hr.hspm.common.vo.CardViewCompareVo;
                getDataList():$.java.util.List;
                getEventObject():$.java.util.EventObject;
                getModel():$.kd.bos.entity.datamodel.IDataModel;
                getQueryDbVo():kd.sdk.hr.hspm.common.vo.QueryDbVo;
                getTimeMap():$.java.util.Map;
                getTopLeftMainAp():$.kd.bos.metadata.form.container.FlexPanelAp;
                getView():$.kd.bos.form.IFormView;
                isDrawFlag():boolean;
                setAfterCreatVo(afterCreatVo:kd.sdk.hr.hspm.common.vo.AfterCreatVo):void;
                setBeforeCreatVo(beforeCreatVo:kd.sdk.hr.hspm.common.vo.BeforeCreatVo):void;
                setCompareVo(compareVo:kd.sdk.hr.hspm.common.vo.CardViewCompareVo):void;
                setDataList(dataList:$.java.util.List):void;
                setDrawFlag(drawFlag:boolean):void;
                setEventObject(eventObject:$.java.util.EventObject):void;
                setModel(model:$.kd.bos.entity.datamodel.IDataModel):void;
                setQueryDbVo(queryDbVo:kd.sdk.hr.hspm.common.vo.QueryDbVo):void;
                setTimeMap(timeMap:$.java.util.Map):void;
                setTopLeftMainAp(topLeftMainAp:$.kd.bos.metadata.form.container.FlexPanelAp):void;
                setView(view:$.kd.bos.form.IFormView):void;
            }
            type CardBindDataDTO_T = CardBindDataDTO_S & CardBindDataDTO$;
            interface CardBindDataDTO extends CardBindDataDTO_T {
            }
            interface DialogBindDataDTO_S {
            }
            interface DialogBindDataDTO_C extends DialogBindDataDTO_S {
                /**
                 * 无参构造
                 */
                new():DialogBindDataDTO;
                new(view:$.kd.bos.form.IFormView,diffMap:$.java.util.Map,entityId:string):DialogBindDataDTO;
                /**
                 * 有参构造
                 *
                 * @param view view
                 * @param drawFormFieldDto drawFormFieldDto
                 * @param fieldsetPanelAp fieldsetPanelAp
                 * @param diffMap diffMap
                 * @param flexAp flexAp
                 * @param totalFieldsetPanelAp totalFieldsetPanelAp
                 * @param style style
                 * @param padding padding
                 * @param margin margin
                 * @param fieldAp fieldAp
                 */
                new(view:$.kd.bos.form.IFormView,drawFormFieldDto:kd.sdk.hr.hspm.common.dto.DrawFormFieldDto,fieldsetPanelAp:$.kd.bos.metadata.form.container.FlexPanelAp,diffMap:$.java.util.Map,flexAp:$.kd.bos.metadata.form.container.FlexPanelAp,totalFieldsetPanelAp:$.kd.bos.metadata.form.container.FlexPanelAp,style:$.kd.bos.metadata.form.Style,padding:$.kd.bos.metadata.form.Padding,margin:$.kd.bos.metadata.form.Margin,fieldAp:$.kd.bos.metadata.form.control.FieldAp):DialogBindDataDTO;
            }
            interface DialogBindDataDTO$ {
                /**
                 * 获取mmp
                 *
                 * @return map
                 */
                getDiffMap():$.java.util.Map;
                /**
                 * 获取dto
                 *
                 * @return dto
                 */
                getDrawFormFieldDto():kd.sdk.hr.hspm.common.dto.DrawFormFieldDto;
                getEntityId():string;
                /**
                 * 获取FieldAp
                 *
                 * @return FieldAp
                 */
                getFieldAp():$.kd.bos.metadata.form.control.FieldAp;
                /**
                 * 获取面板
                 *
                 * @return 面板
                 */
                getFieldsetPanelAp():$.kd.bos.metadata.form.container.FlexPanelAp;
                /**
                 * 获取面板
                 *
                 * @return 面板
                 */
                getFlexAp():$.kd.bos.metadata.form.container.FlexPanelAp;
                /**
                 * 获取Margin
                 *
                 * @return Margin
                 */
                getMargin():$.kd.bos.metadata.form.Margin;
                /**
                 * 获取Padding
                 *
                 * @return Padding
                 */
                getPadding():$.kd.bos.metadata.form.Padding;
                /**
                 * 获取样式
                 *
                 * @return Style
                 */
                getStyle():$.kd.bos.metadata.form.Style;
                /**
                 * 获取面板
                 *
                 * @return 面板
                 */
                getTotalFieldsetPanelAp():$.kd.bos.metadata.form.container.FlexPanelAp;
                /**
                 * 获取view
                 *
                 * @return view
                 */
                getView():$.kd.bos.form.IFormView;
                /**
                 * 设置map
                 *
                 * @param diffMap diffMap
                 */
                setDiffMap(diffMap:$.java.util.Map):void;
                /**
                 * 设置dto
                 *
                 * @param drawFormFieldDto drawFormFieldDto
                 */
                setDrawFormFieldDto(drawFormFieldDto:kd.sdk.hr.hspm.common.dto.DrawFormFieldDto):void;
                setEntityId(entityId:string):void;
                /**
                 * 设置FieldAp
                 *
                 * @param fieldAp
                 */
                setFieldAp(fieldAp:$.kd.bos.metadata.form.control.FieldAp):void;
                setFieldsetPanelAp(fieldsetPanelAp:$.kd.bos.metadata.form.container.FlexPanelAp):void;
                /**
                 * 设置flexAp
                 *
                 * @param flexAp flexAp
                 */
                setFlexAp(flexAp:$.kd.bos.metadata.form.container.FlexPanelAp):void;
                /**
                 * 设置margin
                 *
                 * @param margin
                 */
                setMargin(margin:$.kd.bos.metadata.form.Margin):void;
                /**
                 * 设置padding
                 *
                 * @param padding
                 */
                setPadding(padding:$.kd.bos.metadata.form.Padding):void;
                /**
                 * 设置style
                 *
                 * @param style
                 */
                setStyle(style:$.kd.bos.metadata.form.Style):void;
                /**
                 * 设置totalFieldsetPanelAp
                 *
                 * @param totalFieldsetPanelAp totalFieldsetPanelAp
                 */
                setTotalFieldsetPanelAp(totalFieldsetPanelAp:$.kd.bos.metadata.form.container.FlexPanelAp):void;
                /**
                 * 设置view
                 * @param view viw
                 */
                setView(view:$.kd.bos.form.IFormView):void;
            }
            type DialogBindDataDTO_T = DialogBindDataDTO_S & DialogBindDataDTO$;
            interface DialogBindDataDTO extends DialogBindDataDTO_T {
            }
            interface EmpReportExtReletionFilterDTO_S {
            }
            interface EmpReportExtReletionFilterDTO_C extends EmpReportExtReletionFilterDTO_S {
                new():EmpReportExtReletionFilterDTO;
                new(filterInfo:$.kd.bos.entity.report.FilterInfo,reletionMap:$.java.util.Map):EmpReportExtReletionFilterDTO;
            }
            interface EmpReportExtReletionFilterDTO$ {
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
            type EmpReportExtReletionFilterDTO_T = EmpReportExtReletionFilterDTO_S & EmpReportExtReletionFilterDTO$;
            interface EmpReportExtReletionFilterDTO extends EmpReportExtReletionFilterDTO_T {
            }
            interface EmpReportExtQueryFieldsDTO_S {
            }
            interface EmpReportExtQueryFieldsDTO_C extends EmpReportExtQueryFieldsDTO_S {
                new():EmpReportExtQueryFieldsDTO;
                new(queryFieldSet:$.java.util.Set):EmpReportExtQueryFieldsDTO;
            }
            interface EmpReportExtQueryFieldsDTO$ {
                /**
                 * 获取查询列
                 *
                 * @return queryFieldSet
                 */
                getQueryFieldSet():$.java.util.Set;
            }
            type EmpReportExtQueryFieldsDTO_T = EmpReportExtQueryFieldsDTO_S & EmpReportExtQueryFieldsDTO$;
            interface EmpReportExtQueryFieldsDTO extends EmpReportExtQueryFieldsDTO_T {
            }
            interface QuitEmpReportExtCalculateDTO_S {
            }
            type QuitEmpReportExtCalculateDTO_ST = EmpReportExtCalculateDTO_S & QuitEmpReportExtCalculateDTO_S;
            interface QuitEmpReportExtCalculateDTO_C extends QuitEmpReportExtCalculateDTO_ST {
                new():QuitEmpReportExtCalculateDTO;
                new(dataSet:$.kd.bos.algo.DataSet,filterInfo:$.kd.bos.entity.report.FilterInfo,queryFieldSet:$.java.util.Set):QuitEmpReportExtCalculateDTO;
            }
            interface QuitEmpReportExtCalculateDTO$ {
            }
            type QuitEmpReportExtCalculateDTO_T = EmpReportExtCalculateDTO & QuitEmpReportExtCalculateDTO_S & QuitEmpReportExtCalculateDTO$;
            interface QuitEmpReportExtCalculateDTO extends QuitEmpReportExtCalculateDTO_T {
            }
            interface MobileHomeVectorDTO_S {
            }
            interface MobileHomeVectorDTO_C extends MobileHomeVectorDTO_S {
                new():MobileHomeVectorDTO;
            }
            interface MobileHomeVectorDTO$ {
                getColorAndSizeMap():$.java.util.Map;
                getDefaultVetor():string;
                getEnable():boolean;
                getVectorMap():$.java.util.Map;
                getVectorStyleMap():$.java.util.Map;
                setColorAndSizeMap(colorAndSizeMap:$.java.util.Map):void;
                setDefaultVetor(defaultVetor:string):void;
                setEnable(enable:boolean):void;
                setVectorMap(vectorMap:$.java.util.Map):void;
                setVectorStyleMap(vectorStyleMap:$.java.util.Map):void;
            }
            type MobileHomeVectorDTO_T = MobileHomeVectorDTO_S & MobileHomeVectorDTO$;
            interface MobileHomeVectorDTO extends MobileHomeVectorDTO_T {
            }
            interface SideBarDataDTO_S {
            }
            interface SideBarDataDTO_C extends SideBarDataDTO_S {
                /**
                 * 无参构造
                 */
                new():SideBarDataDTO;
                new(infoGroupConfig:$.java.util.Map):SideBarDataDTO;
                new(infoGroupConfig:$.java.util.Map,showParameter:$.kd.bos.form.FormShowParameter):SideBarDataDTO;
            }
            interface SideBarDataDTO$ {
                getInfoGroupConfig():$.java.util.Map;
                getShowParameter():$.kd.bos.form.FormShowParameter;
                setInfoGroupConfig(infoGroupConfig:$.java.util.Map):void;
                setShowParameter(showParameter:$.kd.bos.form.FormShowParameter):void;
            }
            type SideBarDataDTO_T = SideBarDataDTO_S & SideBarDataDTO$;
            interface SideBarDataDTO extends SideBarDataDTO_T {
            }
            interface EmpReportExtCalculateDTO_S {
            }
            interface EmpReportExtCalculateDTO_C extends EmpReportExtCalculateDTO_S {
                new():EmpReportExtCalculateDTO;
                new(dataSet:$.kd.bos.algo.DataSet,filterInfo:$.kd.bos.entity.report.FilterInfo,queryFieldSet:$.java.util.Set):EmpReportExtCalculateDTO;
            }
            interface EmpReportExtCalculateDTO$ {
                /**
                 * 获取数据集
                 *
                 * @return dataSet
                 */
                getDataSet():$.kd.bos.algo.DataSet;
                /**
                 * 获取查询过滤详细信息
                 *
                 * @return filterInfo
                 */
                getFilterInfo():$.kd.bos.entity.report.FilterInfo;
                /**
                 * 获取查询列
                 *
                 * @return queryFieldSet
                 */
                getQueryFieldSet():$.java.util.Set;
                /**
                 * 设置新的数据集
                 *
                 * @param dataSet dataSet
                 */
                setDataSet(dataSet:$.kd.bos.algo.DataSet):void;
            }
            type EmpReportExtCalculateDTO_T = EmpReportExtCalculateDTO_S & EmpReportExtCalculateDTO$;
            interface EmpReportExtCalculateDTO extends EmpReportExtCalculateDTO_T {
            }
            interface EmpReportExtQueryFilterDTO_S {
            }
            interface EmpReportExtQueryFilterDTO_C extends EmpReportExtQueryFilterDTO_S {
                new():EmpReportExtQueryFilterDTO;
                new(filterInfo:$.kd.bos.entity.report.FilterInfo,filter:$.kd.bos.orm.query.QFilter):EmpReportExtQueryFilterDTO;
            }
            interface EmpReportExtQueryFilterDTO$ {
                /**
                 * 获取filter
                 *
                 * @return filter
                 */
                getFilter():$.kd.bos.orm.query.QFilter;
                /**
                 * 获取查询过滤详细信息
                 *
                 * @return filterInfo
                 */
                getFilterInfo():$.kd.bos.entity.report.FilterInfo;
            }
            type EmpReportExtQueryFilterDTO_T = EmpReportExtQueryFilterDTO_S & EmpReportExtQueryFilterDTO$;
            interface EmpReportExtQueryFilterDTO extends EmpReportExtQueryFilterDTO_T {
            }
        }
        namespace kd.sdk.hr.hspm.common.model{
            interface FileRelationModel_S {
            }
            interface FileRelationModel_C extends FileRelationModel_S {
                new():FileRelationModel;
                new(superList:$.java.util.List,depChargeInfoList:$.java.util.List):FileRelationModel;
            }
            interface FileRelationModel$ {
                getDepChargeInfoList():$.java.util.List;
                getSuperList():$.java.util.List;
                setDepChargeInfoList(depChargeInfoList:$.java.util.List):void;
                setSuperList(superList:$.java.util.List):void;
            }
            type FileRelationModel_T = FileRelationModel_S & FileRelationModel$;
            interface FileRelationModel extends FileRelationModel_T {
            }
        }
        namespace kd.sdk.hr.hspm.common.result{
            interface HrpiServiceOperateResult_S {
                /**
                 * 构建报文包装对象
                 *
                 * @param resultMap 返回报文
                 * @return 报文包装对象
                 */
                build(resultMap:$.java.util.Map):HrpiServiceOperateResult;
                /**
                 * 构建报文包装对象
                 *
                 * @param success 是否成功
                 * @param message 错误信息
                 * @return 报文包装对象
                 */
                build(success:boolean,message:string):HrpiServiceOperateResult;
                /**
                 * 校验返回报文
                 * 如果返回失败则抛出异常
                 */
                validate(resultMap:$.java.util.Map):void;
                validate(resultMap:$.java.util.Map,errorCode:$.kd.bos.exception.ErrorCode,errorMsg:string):void;
                /**
                 * 校验返回报文
                 * 如果返回失败则抛出异常
                 *
                 * @param resultMap 返回报文
                 * @return 报文包装对象
                 */
                validateAfterBuild(resultMap:$.java.util.Map):HrpiServiceOperateResult;
                /**
                 * 校验返回报文
                 * 如果返回失败则抛出异常
                 *
                 * @param resultMap 返回报文
                 * @param errorCode 异常码
                 * @param errorMsg  异常原因
                 * @return 报文包装对象
                 */
                validateAfterBuild(resultMap:$.java.util.Map,errorCode:$.kd.bos.exception.ErrorCode,errorMsg:string):HrpiServiceOperateResult;
            }
            interface HrpiServiceOperateResult_C extends HrpiServiceOperateResult_S {
                new():HrpiServiceOperateResult;
            }
            interface HrpiServiceOperateResult$ {
                /**
                 * deleteInfo 成功后返回结果
                 *
                 * @return count
                 */
                getCount():number;
                /**
                 * saveOrUpdateInfo 成功后获取接口返回的data对象
                 *
                 * @return data对象
                 */
                getData():$.java.util.List;
                /**
                 * 成功后返回的对象map解析
                 * 默认解析data中的第一个list对象
                 *
                 * @return 解析entitynumber
                 */
                getDataMapForEntitynumber():string;
                /**
                 * 成功后返回的对象map解析
                 *
                 * @param dataMap 对象map
                 * @return 解析entitynumber
                 */
                getDataMapForEntitynumber(dataMap:$.java.util.Map):string;
                /**
                 * 成功后返回的对象map解析
                 *
                 * @param index data对象索引
                 * @return 解析entitynumber
                 */
                getDataMapForEntitynumber(index:number):string;
                /**
                 * 成功后返回的对象map解析
                 * 默认解析data中的第一个list对象
                 *
                 * @return 解析eventid
                 */
                getDataMapForEventid():string;
                /**
                 * 成功后返回的对象map解析
                 *
                 * @param dataMap 对象map
                 * @return 解析eventid
                 */
                getDataMapForEventid(dataMap:$.java.util.Map):string;
                /**
                 * 成功后返回的对象map解析
                 *
                 * @param index data对象索引
                 * @return 解析eventid
                 */
                getDataMapForEventid(index:number):string;
                /**
                 * 成功后返回的对象map解析
                 * 默认解析data中的第一个list对象
                 *
                 * @return 解析ids
                 */
                getDataMapForIds():$.java.util.List;
                /**
                 * 成功后返回的对象map解析
                 *
                 * @param dataMap 对象map
                 * @return 解析ids
                 */
                getDataMapForIds(dataMap:$.java.util.Map):$.java.util.List;
                /**
                 * 成功后返回的对象map解析
                 *
                 * @param index data对象索引
                 * @return 解析ids
                 */
                getDataMapForIds(index:number):$.java.util.List;
                /**
                 * 成功后返回的对象map解析
                 * 默认解析data中的第一个list对象
                 *
                 * @return 解析importtype
                 */
                getDataMapForImporttype():string;
                /**
                 * 成功后返回的对象map解析
                 *
                 * @param dataMap 对象map
                 * @return 解析ids
                 */
                getDataMapForImporttype(dataMap:$.java.util.Map):string;
                /**
                 * 成功后返回的对象map解析
                 *
                 * @param index data对象索引
                 * @return 解析importtype
                 */
                getDataMapForImporttype(index:number):string;
                /**
                 * 返回错误信息
                 *
                 * @return message
                 */
                getMessage():string;
                getSyncPersonIdList():$.java.util.List;
                /**
                 * 是否成功
                 *
                 * @return 是否成功
                 */
                isSuccess():boolean;
                isSyncFlag():boolean;
                /**
                 * 设置错误信息
                 *
                 * @param message
                 */
                setMessage(message:string):void;
                /**
                 * 设置是否成功
                 *
                 * @param success 是否成功
                 */
                setSuccess(success:boolean):void;
                setSyncFlag(syncFlag:boolean):void;
                setSyncPersonIdList(syncPersonIdList:$.java.util.List):void;
            }
            type HrpiServiceOperateResult_T = HrpiServiceOperateResult_S & HrpiServiceOperateResult$;
            interface HrpiServiceOperateResult extends HrpiServiceOperateResult_T {
            }
            interface PerChgSend_S {
                readonly HSPM_CHGEXTERNALRECORD_RESULT_QUEUE:string;
                /**
                 * 发送队列
                 *
                 * @param msg 发送消息
                 */
                sendMsg(msg:string):void;
            }
            interface PerChgSend_C extends PerChgSend_S {
                new():PerChgSend;
            }
            interface PerChgSend$ {
            }
            type PerChgSend_T = PerChgSend_S & PerChgSend$;
            interface PerChgSend extends PerChgSend_T {
            }
            interface HisResponseParse_S {
                getFail(message:string):$.java.util.Map;
                getResult(flag:boolean,message:string,data:any):$.java.util.Map;
                getSuccess(data:any):$.java.util.Map;
                /**
                 * 解析调用批量保存接口的返回数据
                 *
                 * @param response 返回数据
                 * @return 解析结果
                 */
                parseBatchVersionChangeRespData(response:kd.hr.hbp.business.domain.model.newhismodel.HisResponse):$.java.util.Map;
                /**
                 * 解析调用非时序引入接口的返回数据
                 *
                 * @param response 返回数据
                 * @return 解析结果
                 */
                parseImportRespData(response:kd.hr.hbp.business.domain.model.newhismodel.HisResponse):$.java.util.Map;
            }
            interface HisResponseParse_C extends HisResponseParse_S {
                new():HisResponseParse;
            }
            interface HisResponseParse$ {
            }
            type HisResponseParse_T = HisResponseParse_S & HisResponseParse$;
            interface HisResponseParse extends HisResponseParse_T {
            }
        }
        namespace kd.sdk.hr.hspm.common.utils{
            interface InfoGroupApprovalUtil_S {
                /**
                 * 查找相关的审批的字段
                 *
                 * @param dynamicObjects 所有审批字段
                 * @param dataRefId      当前操作的分离ID
                 * @return 审批的字段
                 */
                findDynamicObjects(dynamicObjects:$.kd.bos.dataentity.entity.DynamicObjectCollection,dataRefId:long):$.java.util.List;
                /**
                 * 获取审批结果
                 *
                 * @param status
                 * @return
                 */
                getAuditResult(status:boolean):string;
                /**
                 * 是否是文本字段
                 *
                 * @param dynamicObject 审批字段信息
                 * @return true/false
                 */
                isAttach(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject):boolean;
                /**
                 * 是否是文本字段
                 *
                 * @param dynamicObject 审批字段信息
                 * @return true/false
                 */
                isText(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject):boolean;
            }
            interface InfoGroupApprovalUtil_C extends InfoGroupApprovalUtil_S {
                new():InfoGroupApprovalUtil;
            }
            interface InfoGroupApprovalUtil$ {
            }
            type InfoGroupApprovalUtil_T = InfoGroupApprovalUtil_S & InfoGroupApprovalUtil$;
            interface InfoGroupApprovalUtil extends InfoGroupApprovalUtil_T {
            }
            interface CommonUtil_S {
                /**
                 * 是否相等
                 *
                 * @param obj1 obj
                 * @param obj2 obj
                 * @param dateFormat form
                 * @return 是否
                 * @throws Exception 异常
                 */
                customObjectEquals(obj1:any,obj2:any,dateFormat:string):boolean;
                /**
                 * 是否存在已提交、审批中的单据
                 * @param view
                 * @return
                 */
                existAuditingEntry(view:$.kd.bos.form.IFormView):boolean;
                /**
                 * 返回占整行字段
                 *
                 * @return 占整行字段
                 */
                fullLineField():$.java.util.Set;
                /**
                 * 根据身份证的号码算出当前身份证持有者的年龄
                 *
                 * @param
                 * @return -1(表示异常) 0 (身份证号码为空)
                 * @throws Exception
                 */
                getAgeForIdCard(idcard:string):number;
                /**
                 * 判断字段是否存在，存在则按照输入的字段值算，否则去0
                 *
                 * @param model model
                 * @param key 标识
                 * @return BigDecimal
                 */
                getBigDecimalIfExist(model:$.kd.bos.entity.datamodel.IDataModel,key:string):$.java.math.BigDecimal;
                /**
                 * 判断字段是否存在，存在则按照输入的字段值算，否则去0
                 *
                 * @param model model
                 * @param key 标识
                 * @param personId 人员id
                 * @return BigDecimal
                 */
                getBigDecimalIfExist(model:$.kd.bos.entity.datamodel.IDataModel,key:string,personId:long,selProp:string):$.java.math.BigDecimal;
                /**
                 * 获取出生日期
                 *
                 * @return 返回日期格式
                 */
                getBirthDayFromIdCard(idCard:string):Date;
                /**
                 * 获取用户已提交、已驳回、审批中的单据
                 * @param personId
                 * @return
                 */
                getCurrentEntry(personId:long):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 获取用户已提交、已驳回、审批中的单据
                 * @param view
                 * @return
                 */
                getCurrentEntry(view:$.kd.bos.form.IFormView):$.kd.bos.dataentity.entity.DynamicObject[];
                /**
                 * 判断是否为最大日期
                 *
                 * @param endDate 日期
                 * @return 是否最大
                 */
                getMaxDate(endDate:Date):boolean;
                /**
                 * 获取性别
                 * 0=未知的性别,9=未说明的性别,2=女性,1=男性
                 *
                 * @return int
                 */
                getSexFromIdCard(idCard:string):number;
                /**
                 * 判断用户是否拥有指定实体指定权限项(职能类型/管理视图为HR)
                 *
                 * @param entityName 实体
                 * @param permItemId 权限项ID
                 * @return 验证有权则为true ，否则为false
                 * @description 推荐使用 ，推荐传入指定的应用ID及权限项ID
                 */
                hasPerm(entityName:string,permItemId:string):boolean;
                /**
                 * 判断用户是否拥有指定实体指定权限项(职能类型/管理视图为HR)
                 *
                 * @param entityName 实体
                 * @param permItemId 权限项ID
                 * @param appId      应用ID
                 * @return 验证有权则为true ，否则为false
                 */
                hasPerm(entityName:string,permItemId:string,appId:string):boolean;
                /**
                 * 判断用户是否拥有指定实体指定权限项(职能类型/管理视图为HR)
                 *
                 * @param entityName 实体
                 * @param permItemId 权限项ID
                 * @param appId      如果IFormView能拿到APPID，以拿到的为准，拿不到用appId
                 * @return 验证有权则为true ，否则为false
                 */
                hasPerm(entityName:string,permItemId:string,appId:string,view:$.kd.bos.form.IFormView):boolean;
                /**
                 * 是否是基础数据类型
                 *
                 * @param baseDataClass   基础数据类型
                 * @param classSimpleName 类型简称
                 * @return 是否是基础数据类型
                 */
                isBaseDataType(baseDataClass:$.java.lang.Class,classSimpleName:string):boolean;
                /**
                 * 当前数据是否在流程中
                 *
                 * @param tabList 信息组字段
                 * @param view    页面
                 * @return
                 */
                isCurrentDataExistBill(tabList:$.java.util.Map,view:$.kd.bos.form.IFormView):boolean;
                /**
                 * 用正则表达式判断字符串是否为小数
                 *
                 * @param str
                 * @return
                 */
                isDecimal(str:string):boolean;
                /**
                 * 字段是否存在
                 * @param key
                 * @return boolean
                 */
                isFieldExist(model:$.kd.bos.entity.datamodel.IDataModel,key:string):boolean;
                /**
                 * 用正则表达式判断字符串是否为数字
                 *
                 * @param str
                 * @return
                 */
                isNumeric(str:string):boolean;
                /**
                 * 两个列表是否相等
                 *
                 * @param list1 对象
                 * @param list2 对象
                 * @return 相等
                 */
                listEquals(list1:$.java.util.List,list2:$.java.util.List):boolean;
                /**
                 * list转string
                 *
                 * @param list list
                 * @param separator 分割
                 * @return string
                 */
                listToString(list:$.java.util.List,separator:string):string;
                /**
                 * 对象为空
                 *
                 * @param obj
                 * @return
                 */
                objIsEmpty(obj:any):boolean;
                /**
                 * 判断用户是否拥有指定实体指定权限项(职能类型/管理视图为HR)
                 *
                 * @param view 实体
                 * @param permItemId 权限项ID
                 * @param evt evt
                 * @param currentPage 2：有父页面 1：是当前页面 0 ：没有弹框的当前页面
                 * @return 验证有权则为true ，否则为false
                 */
                permShowClickError(view:$.kd.bos.form.IFormView,permItemId:string,evt:$.kd.bos.form.control.events.BeforeClickEvent,currentPage:string):boolean;
            }
            interface CommonUtil_C extends CommonUtil_S {
                new():CommonUtil;
            }
            interface CommonUtil$ {
            }
            type CommonUtil_T = CommonUtil_S & CommonUtil$;
            interface CommonUtil extends CommonUtil_T {
            }
            interface IDCardUtils_S {
                /**
                 * checkIDCard
                 *
                 * @param idCardNo idCardNo
                 * @return boolean
                 */
                checkIDCard(idCardNo:string):boolean;
                /**
                 * 从18位/17位身份证号算出校验位
                 *
                 * @param idCardNO idCardNO
                 * @return String
                 */
                getCheckDigit18(idCardNO:string):string;
                /**
                 * verify18
                 *
                 * @param idCardNo idCardNo
                 * @return boolean
                 */
                verify18(idCardNo:string):boolean;
            }
            interface IDCardUtils_C extends IDCardUtils_S {
                new():IDCardUtils;
            }
            interface IDCardUtils$ {
            }
            type IDCardUtils_T = IDCardUtils_S & IDCardUtils$;
            interface IDCardUtils extends IDCardUtils_T {
            }
            interface ComboItemUtil_S {
                /**
                 *  ValueMapItem 转成 ComboItem
                 *
                 * @param list ValueMapItem对象集合
                 * @return ComboItem对象集合
                 */
                changeToComboItem(list:$.java.util.List):$.java.util.List;
                /**
                 * 通过value来查找下拉选项
                 * @param pageNumber   页面元素
                 * @param field        字段名
                 * @param value         值
                 * @return
                 */
                findByVaue(pageNumber:string,field:string,value:string):$.kd.bos.metadata.entity.commonfield.ComboItem;
                /**
                 *  获取下拉框的全部值
                 *
                 * @param pageNumber 页面元素
                 * @param field 字段名
                 * @return 下拉值item
                 */
                getComboItem(pageNumber:string,field:string):$.java.util.List;
            }
            interface ComboItemUtil_C extends ComboItemUtil_S {
                new():ComboItemUtil;
            }
            interface ComboItemUtil$ {
            }
            type ComboItemUtil_T = ComboItemUtil_S & ComboItemUtil$;
            interface ComboItemUtil extends ComboItemUtil_T {
            }
            interface PropertyHelper_S {
                /**
                 * 对象是否存在属性
                 *
                 * @param obj obj
                 * @param key key
                 * @return boolean
                 */
                existProperty(obj:$.kd.bos.dataentity.entity.DynamicObject,key:string):boolean;
                /**
                 * 对象是否存在属性
                 *
                 * @param pageNumber 页面标识
                 * @param key key
                 * @return boolean
                 */
                existProperty(pageNumber:string,key:string):boolean;
                /**
                 * 获取原始页面的字段控件
                 *
                 * @param drawFormField 页面绘画字段对象
                 * @return Field原始页面的字段控件
                 */
                getField(drawFormField:kd.sdk.hr.hspm.common.dto.DrawFormFieldDto):$.kd.bos.metadata.entity.commonfield.Field;
                /**
                 * 获取多语言值
                 *
                 * @param dy        动态对象
                 * @param fieldName 字段名
                 * @return
                 */
                getMultiLanguageValue(dy:$.kd.bos.dataentity.entity.DynamicObject,fieldName:string):string;
                /**
                 * 获取值
                 *
                 * @param obj obj
                 * @param key key
                 * @return 值
                 */
                getProperty(obj:$.kd.bos.dataentity.entity.DynamicObject,key:string):any;
                /**
                 * 设置多语言字段
                 *
                 * @param cnfDy 多语言整行数据
                 * @param langDbField 多语言字段
                 * @param langField 多语言字段的名称
                 */
                setLanguage(cnfDy:$.kd.bos.dataentity.entity.DynamicObject,langDbField:string,langField:string):string;
                /**
                 * 设置多语言字段
                 *
                 * @param cnfDy 多语言整行数据
                 * @param langDbField 多语言字段
                 */
                setLanguageField(cnfDy:$.kd.bos.dataentity.entity.DynamicObject,langDbField:string):string;
            }
            interface PropertyHelper_C extends PropertyHelper_S {
                new():PropertyHelper;
            }
            interface PropertyHelper$ {
            }
            type PropertyHelper_T = PropertyHelper_S & PropertyHelper$;
            interface PropertyHelper extends PropertyHelper_T {
            }
            interface HrpiServiceOperateParam_S {
                /**
                 * 拼接新增数据
                 *
                 * @param serviceHelper           实体基础服务帮助类
                 * @param dataEntity              表单数据
                 * @param dynamicObjectCollection 包装数据集
                 */
                getInvokeSave(serviceHelper:kd.hr.hbp.business.servicehelper.HRBaseServiceHelper,dataEntity:$.kd.bos.dataentity.entity.DynamicObject,dynamicObjectCollection:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
                /**
                 * 拼接更新数据
                 *
                 * @param serviceHelper           实体基础服务帮助类
                 * @param dataEntity              表单数据
                 * @param dbDy                    数据库数据
                 * @param dynamicObjectCollection 包装数据集
                 */
                getInvokeUpdate(serviceHelper:kd.hr.hbp.business.servicehelper.HRBaseServiceHelper,dataEntity:$.kd.bos.dataentity.entity.DynamicObject,dbDy:$.kd.bos.dataentity.entity.DynamicObject,dynamicObjectCollection:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
                /**
                 * 构造新增时使用的数据
                 *
                 * @param serviceHelper 实体基础服务帮助类
                 * @param dataEntity    表单数据
                 * @return 实体数据
                 */
                getSaveDy(serviceHelper:kd.hr.hbp.business.servicehelper.HRBaseServiceHelper,dataEntity:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 构造编辑时使用的数据
                 *
                 * @param serviceHelper 实体基础服务帮助类
                 * @param dataEntity    表单数据
                 * @param dbDy          数据库数据
                 * @return 实体数据
                 */
                getUpdateDy(serviceHelper:kd.hr.hbp.business.servicehelper.HRBaseServiceHelper,dataEntity:$.kd.bos.dataentity.entity.DynamicObject,dbDy:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
            }
            interface HrpiServiceOperateParam_C extends HrpiServiceOperateParam_S {
                new():HrpiServiceOperateParam;
            }
            interface HrpiServiceOperateParam$ {
            }
            type HrpiServiceOperateParam_T = HrpiServiceOperateParam_S & HrpiServiceOperateParam$;
            interface HrpiServiceOperateParam extends HrpiServiceOperateParam_T {
            }
            interface BusinessUtils_S {
                /**
                 * 新增非最高学历切换
                 * @param helper
                 * @param personId
                 * @param updateCollection
                 */
                addHighestDegree(helper:kd.hr.hbp.business.servicehelper.HRBaseServiceHelper,personId:long,updateCollection:$.kd.bos.dataentity.entity.DynamicObjectCollection,old:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 新增非主证件
                 * @param helper
                 * @param personId
                 * @param updateCollection
                 */
                addMajorDegree(helper:kd.hr.hbp.business.servicehelper.HRBaseServiceHelper,personId:long,updateCollection:$.kd.bos.dataentity.entity.DynamicObjectCollection,old:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 头像缓存更新
                 *
                 * @param pkId
                 * @param attachKey
                 * @param newValue
                 * @param oldValue
                 * @param collection
                 * @param entityName
                 */
                addMapToCollect(view:$.kd.bos.form.IFormView,pkId:long,attachKey:string,newValue:any,oldValue:any,collection:$.java.util.List,entityName:string):void;
                /**
                 * 根据附件字段数据构造附件面板数据
                 *
                 * @param entityNum 元数据标识
                 * @param attachObj    附件字段数据
                 * @return List<Map < String, Object>> 附件面板数据
                 */
                buildAttachmentDataFromEdit(entityNum:string,attachObj:$.java.util.Map):$.java.util.List;
                /**
                 * 计算年
                 *
                 * @param dateO
                 * @param dateT
                 * @return
                 */
                calcYearsDiff(dateO:Date,dateT:Date):$.java.math.BigDecimal;
                /**
                 * 服务年限：工龄司龄同步
                 * @param dbDy
                 * @param entityName
                 * @param saveOrUpdateMap
                 */
                changeAdjustTime(dbDy:$.kd.bos.dataentity.entity.DynamicObject,entityName:string,saveOrUpdateMap:$.java.util.Map,view:$.kd.bos.form.IFormView,isAdComTimeAudit:boolean,isAdWorkTimeAudit:boolean,isJoinWorkTimeAudit:boolean):void;
                /**
                 * 基本信息：参加工作日期同步
                 * @param dbDy
                 * @param entityName
                 * @param saveOrUpdateMap
                 */
                changeBeginServiceDate(dbDy:$.kd.bos.dataentity.entity.DynamicObject,entityName:string,saveOrUpdateMap:$.java.util.Map,view:$.kd.bos.form.IFormView,audit:boolean):void;
                /**
                 * 基本信息：参加工作日期同步(审批通过后)
                 * @param dbDy 非时序实体数据
                 * @param newDy 非时序实体数据-待更新
                 * @param saveOrUpdateMap
                 * @param field 单据分录行数据
                 */
                changeBeginServiceDateAfterAudit(dbDy:$.kd.bos.dataentity.entity.DynamicObject,newDy:$.kd.bos.dataentity.entity.DynamicObject,saveOrUpdateMap:$.java.util.Map,field:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 校验基本信息生日，处理年龄信息。移动端和PC端通用
                 *
                 * @param view   当前页面
                 * @param setAge 是否同步修改年龄
                 * @return
                 */
                checkBirthday(view:$.kd.bos.form.IFormView,setAge:boolean):boolean;
                checkHeight(view:$.kd.bos.form.IFormView):boolean;
                /**
                 * 校验这个人的用工状态，如果是用工终止，返回true,否则false
                 *
                 * @param personId 人员id
                 * @return
                 */
                checkPersonLabrelstatus(personId:long):boolean;
                checkWorkage(startDateField:string,view:$.kd.bos.form.IFormView):boolean;
                /**
                 * 最高学历切换
                 * @param helper
                 * @param personId
                 * @param updateCollection
                 */
                closeHighestDegree(helper:kd.hr.hbp.business.servicehelper.HRBaseServiceHelper,personId:long,updateCollection:$.kd.bos.dataentity.entity.DynamicObjectCollection,old:$.kd.bos.dataentity.entity.DynamicObject):void;
                /**
                 * 关闭主证件
                 *
                 * @param helper
                 * @param personId
                 * @param updateCollection
                 */
                closeMajor(helper:kd.hr.hbp.business.servicehelper.HRBaseServiceHelper,personId:long,updateCollection:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
                /**
                 * 生成姓名头像
                 *
                 * @param name
                 * @return
                 */
                createAvatar(name:string):string;
                /**
                 * 是否长期有效和有效期至字段联动
                 *
                 * @param view          页面view
                 * @param selectedField 是否长期有效key
                 * @param dateField     有效期至key
                 * @param isEditView    是否编辑查看页面加载时打开
                 */
                dateChangedAfterSelected(view:$.kd.bos.form.IFormView,selectedField:string,dateField:string,isEditView:boolean):void;
                /**
                 * 删除教育证件数据后的处理
                 *
                 * @param entityName 元数据
                 * @param pk         主键
                 * @param view       页面
                 * @return
                 */
                delData(entityName:string,pk:long,view:$.kd.bos.form.IFormView):void;
                /**
                 * 教育经历删除证件时删除审批缓存
                 *
                 * @param entityName 附表名
                 * @param id         数据ID
                 */
                deleteApprovalCache(entityName:string,id:long,view:$.kd.bos.form.IFormView):void;
                /**
                 * 单据分录删除
                 *
                 * @param pkid 主键
                 * @param view 页面
                 */
                deleteEntryEntity(pkid:long,view:$.kd.bos.form.IFormView):void;
                /**
                 * 结束日期字段，并且为锁定态,
                 *
                 * @param drawFormField 绘制对象
                 * @return 是否锁定
                 */
                endDateEditLock(drawFormField:kd.sdk.hr.hspm.common.dto.DrawFormFieldDto):boolean;
                /**
                 * 获取工龄司龄等业务年限的舍入方式
                 * @return 舍入方式
                 */
                getBusiYearRoundingMode():$.java.math.RoundingMode;
                /**
                 * 获取核心人事开发参数配
                 *
                 * @param key 业务主键
                 * @return 返回结果
                 */
                getBusinessValueByKey(key:string):string;
                /**
                 * 获取教育证件id
                 *
                 * @param view
                 * @param pkid
                 * @return
                 */
                getCertIds(view:$.kd.bos.form.IFormView,pkid:long):$.java.util.List;
                /**
                 * 文件临时链接转永久链接
                 *
                 * @param attachObj 附件
                 * @return url
                 */
                getDownUrl(attachObj:$.kd.bos.dataentity.entity.DynamicObject):string;
                /**
                 * 根据教育id获取教育证件ID
                 *
                 * @param eduId 教育经历id
                 * @return
                 */
                getEduCertIdByEduId(eduId:long):$.java.util.List;
                /**
                 * 根据教育id获取教育证件ID
                 *
                 * @param eduIdList 教育经历id集合
                 * @return
                 */
                getEduCertIdByEduId(eduIdList:$.java.util.List):$.java.util.List;
                /**
                 * 根据教育证件id获取教育经历
                 *
                 * @param eduCertId 教育证件id
                 * @return
                 */
                getEduexpByEduCertId(eduCertId:long):long;
                /**
                 * 获取历史集团服务年限，针对再入职场景
                 *
                 * @param personId 人员id
                 * @return
                 */
                getHisComserCount(personId:long):$.java.math.BigDecimal;
                /**
                 * 切换事物变动菜单参数， 0:显示旧的， 1:显示新的， 2:都显示
                 * @return 是否显示
                 */
                getHpfsMenuConfig():string;
                /**
                 * 获取忽略字段
                 *
                 * @return 忽略字段集合
                 */
                getIgnoreField():$.java.util.Set;
                /**
                 * 创建新dy
                 *
                 * @param helper
                 * @param oldDy
                 * @return
                 */
                getNewDynamicObject(helper:kd.hr.hbp.business.servicehelper.HRBaseServiceHelper,oldDy:$.kd.bos.dataentity.entity.DynamicObject):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 查询人员非时序表的社会工龄字段
                 *
                 * @param personId 人员id
                 * @return DynamicObject
                 */
                getPerserlen(personId:long):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取服务年限相关字段
                 *
                 * @param personId personid
                 * @param keyName 获取的字段
                 * @return BigDecimal
                 */
                getPerserlenByPersonId(personId:long,keyName:string):$.java.math.BigDecimal;
                /**
                 * 获取服务年限相关字段
                 *
                 * @param personId personid
                 * @param keyName 获取的字段
                 * @return BigDecimal
                 */
                getPerserlenDateByPersonId(personId:long,keyName:string):Date;
                getReviseButtonVisible(view:$.kd.bos.form.IFormView):boolean;
                /**
                 * 获取人员档案上的修订按钮的显隐
                 * @return 是否显示
                 */
                getReviseButtonVisibleForErmanFile():boolean;
                /**
                 * 离职应用/兼职应用下的档案是否展示修订按钮的参数
                 * @return 是否显示
                 */
                getReviseButtonVisibleInOtherAppId():boolean;
                /**
                 * 修订功能支持的实体
                 *
                 * @return 支持的实体List
                 */
                getReviseSupportEntityNumberList():$.java.util.List;
                /**
                 * 汇报关系提示语
                 *
                 * @return 中台提示语内容
                 */
                getSuperiorHint():string;
                /**
                 * 根据附件字段数据构造附件面板数据
                 *
                 * @param entityNum 元数据标识
                 * @param attachObj    附件字段数据
                 * @return List<Map < String, Object>> 附件面板数据
                 */
                getTempUrl(entityNum:string,attachObj:$.java.util.Map):$.java.util.List;
                /**
                 * 获取当前保存的全部的boid
                 *
                 * @param attachMap 數據
                 * @param genPkId 是否生成主鍵
                 * @return set
                 */
                getUpdateBoIdGenPkId(attachMap:$.java.util.Map,genPkId:boolean):$.java.util.Set;
                /**
                 * 获取人员档案上的修改按钮的显隐
                 * @return 是否显示
                 */
                getUpdateButtonVisibleForErmanFile():boolean;
                /**
                 * 是否允许对用工终止的员工进行信息批量维护
                 * @return
                 */
                isAllowInfoClassifyEdit():boolean;
                /**
                 * 校验邮箱
                 *
                 * @param email 邮箱
                 * @return 成功、失败
                 */
                isEmail(email:string):boolean;
                /**
                 * 字段是否存在
                 *
                 * @param key
                 * @return
                 */
                isFieldExist(view:$.kd.bos.form.IFormView,key:string):boolean;
                /**
                 * 判断页面是否为PC端档案页面
                 *
                 * @param pageId
                 * @return
                 */
                isPCFilePage(pageId:string):boolean;
                /**
                 * 旧的最高学历变成非最高学历
                 * @param helper
                 * @param personId
                 * @param updateCollection
                 */
                openHighestDegree(helper:kd.hr.hbp.business.servicehelper.HRBaseServiceHelper,personId:long,updateCollection:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
                /**
                 * 打开主证件
                 *
                 * @param helper
                 * @param personId
                 * @param updateCollection
                 */
                openMajor(helper:kd.hr.hbp.business.servicehelper.HRBaseServiceHelper,personId:long,updateCollection:$.kd.bos.dataentity.entity.DynamicObjectCollection):void;
                /**
                 * 查询职级职等调整事物变动配置的变动操作id
                 *
                 * @return 配置操作id
                 */
                queryEmpJobRelActionId():long;
                /**
                 * 重置url
                 * @param attachmentFileService attachmentFileService
                 * @param tempFileCache tempFileCache
                 * @param attachment 附件信息
                 */
                reSetAttachmentUrl(attachmentFileService:$.kd.bos.fileservice.FileService,tempFileCache:$.kd.bos.cache.TempFileCache,attachment:$.java.util.Map):void;
                /**
                 * 字段输入限制
                 *
                 * @param field             字段
                 * @param includeCurrentDay 是否包含当前日期
                 * @param isMax             最大日期/最小日期
                 */
                setDateLimit(view:$.kd.bos.form.IFormView,field:string,includeCurrentDay:boolean,isMax:boolean):void;
                /**
                 * 提交到审批单据分录缓存里的value值转换方法
                 *
                 * @param obj
                 * @return
                 */
                typeChange(obj:any):any;
            }
            interface BusinessUtils_C extends BusinessUtils_S {
                new():BusinessUtils;
            }
            interface BusinessUtils$ {
            }
            type BusinessUtils_T = BusinessUtils_S & BusinessUtils$;
            interface BusinessUtils extends BusinessUtils_T {
            }
            interface HspmDateUtils_S {
                /**
                 * 计算传入日期与当前日期的差
                 * 当前日期比传入日期大
                 *
                 * @param date 待计算日期
                 * @return 差值
                 */
                dateDiff(date:Date):$.java.math.BigDecimal;
                /**
                 * 获取当天最后一秒
                 * @return
                 */
                getLastSecond():Date;
                /**
                 * 获取最后一秒
                 * @param date
                 * @return
                 */
                getLastSecond(date:Date):Date;
                /**
                 * 获取结束日期最大值
                 *
                 * @return 结束日期最大值
                 */
                getMaxEndDate():Date;
                /**
                 * 获取当天凌晨日期
                 * @return
                 */
                getMidnight():Date;
                /**
                 * 获取凌晨日期
                 * @param date
                 * @return
                 */
                getMidnight(date:Date):Date;
            }
            type HspmDateUtils_ST = kd.hr.hbp.common.util.HRDateTimeUtils_S & HspmDateUtils_S;
            interface HspmDateUtils_C extends HspmDateUtils_ST {
                new():HspmDateUtils;
            }
            interface HspmDateUtils$ {
            }
            type HspmDateUtils_T = kd.hr.hbp.common.util.HRDateTimeUtils & HspmDateUtils_S & HspmDateUtils$;
            interface HspmDateUtils extends HspmDateUtils_T {
            }
            interface ParamAnalysisUtil_S {
                /**
                 * 信息组是否同时存在某些字段（只支持多行表）
                 *
                 * @param tabList 多视图配置
                 * @param fields   字段（全名）
                 * @return
                 */
                exist(tabList:$.java.util.Map,...fields:string[]):boolean;
                /**
                 * 查询是否存在审批字段
                 *
                 * @param tabList 多视图配置
                 * @return
                 */
                existAuditField(tabList:$.java.util.Map):boolean;
                /**
                 * 查询是否存在审批字段 组合配置情况
                 *
                 * @param tabList    多视图配置
                 * @param entityName 指定元数据
                 * @return
                 */
                existAuditField(tabList:$.java.util.Map,entityName:string):boolean;
                getDialogPageNumber(fields:$.java.util.List):string;
                getFields(group:$.java.util.Map):$.java.util.List;
                /**
                 * 获取全字段名
                 *
                 * @param field 字段信息
                 * @return 全字段名
                 */
                getFullFieldName(field:$.java.util.Map):string;
                /**
                 * 获取信息组名称
                 *
                 * @param group 信息组配置
                 * @return 信息组名称
                 */
                getGroupName(group:$.java.util.Map):string;
                /**
                 * 获取指定附表的子组名
                 *
                 * @param tabList    信息组配置
                 * @param entityName 指定hrpi元数据名
                 * @return 信息组名称
                 */
                getGroupName(tabList:$.java.util.Map,entityName:string):string;
                getGroups(tabList:$.java.util.Map):$.java.util.List;
                /**
                 *  获取映射页面标识
                 *
                 * @param tabList 信息组信息
                 * @return 映射页面标识
                 */
                getMappingFormId(tabList:$.java.util.Map):string;
                getPageNumber(fields:$.java.util.List):string;
                /**
                 *  获取params参数
                 *
                 * @param formShowParameter FormShowParameter
                 * @return
                 */
                getParams(formShowParameter:$.kd.bos.form.FormShowParameter):$.java.util.Map;
                /**
                 * 获取涉及所有原始页面
                 *
                 * @param tabList 信息组信息
                 * @return 原始页面
                 */
                getRelateOriginalPage(tabList:$.java.util.Map):$.java.util.Set;
            }
            interface ParamAnalysisUtil_C extends ParamAnalysisUtil_S {
                new():ParamAnalysisUtil;
            }
            interface ParamAnalysisUtil$ {
            }
            type ParamAnalysisUtil_T = ParamAnalysisUtil_S & ParamAnalysisUtil$;
            interface ParamAnalysisUtil extends ParamAnalysisUtil_T {
            }
            interface DynamicPropUtil_S {
                /**
                 * 从动态对象数据集中获取一个对象，根据修改时间的最大时间
                 *
                 * @param dynamicObjectList 动态对象数据集
                 * @return 创建时间最大的动态对象
                 */
                getByMaxModifytime(dynamicObjectList:$.java.util.List):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 获取实体的查询字段
                 *
                 * @param mainProperties 主实体的字段类型集
                 * @param properties 实体的字段类型集
                 * @return 实体的查询字段
                 */
                getSelectProperties(mainProperties:$.kd.bos.dataentity.metadata.clr.DataEntityPropertyCollection,properties:$.kd.bos.dataentity.metadata.clr.DataEntityPropertyCollection):string;
                /**
                 * 获取非主实体的查询字段
                 *
                 * @param mainProperties 主实体的字段类型集
                 * @param compareProperties 比较实体的字段类型集
                 * @param properties 非主实体的字段类型集
                 * @param extraSelectProperties 额外要查询的字段
                 * @return 非主实体的查询字段
                 */
                getSelectProperties(mainProperties:$.kd.bos.dataentity.metadata.clr.DataEntityPropertyCollection,compareProperties:$.kd.bos.dataentity.metadata.clr.DataEntityPropertyCollection,properties:$.kd.bos.dataentity.metadata.clr.DataEntityPropertyCollection,extraSelectProperties:string):string;
                /**
                 * 获取非主实体的查询字段
                 *
                 * @param mainProperties 主实体的字段类型集
                 * @param compareProperties 比较实体的字段类型集
                 * @param properties 非主实体的字段类型集
                 * @param extraSelectProperties 额外要查询的字段
                 * @param excludeProperties 需要被排除的字段
                 * @return 非主实体的查询字段
                 */
                getSelectProperties(mainProperties:$.kd.bos.dataentity.metadata.clr.DataEntityPropertyCollection,compareProperties:$.kd.bos.dataentity.metadata.clr.DataEntityPropertyCollection,properties:$.kd.bos.dataentity.metadata.clr.DataEntityPropertyCollection,extraSelectProperties:string,excludeProperties:string):string;
                /**
                 * 时序性历史模型特有字段
                 *
                 * @return 时序性历史模型特有字段
                 */
                hisTimeProperties():string;
            }
            interface DynamicPropUtil_C extends DynamicPropUtil_S {
                new():DynamicPropUtil;
            }
            interface DynamicPropUtil$ {
            }
            type DynamicPropUtil_T = DynamicPropUtil_S & DynamicPropUtil$;
            interface DynamicPropUtil extends DynamicPropUtil_T {
            }
            interface DynamicTransformUtil_S {
                /**
                 * 获取实体属性
                 *
                 * @param entityName 实体名称
                 * @return
                 */
                getAllDbPropString(entityName:string):string;
                /**
                 * 获取实体属性
                 *
                 * @param entityName 实体名称
                 * @returne
                 */
                getDynamicPropString(entityName:string):string;
                /**
                 * 获取实体属性
                 *
                 * @param entityName 实体名称
                 * @param ignoreKey  忽略属性
                 * @return
                 */
                getDynamicPropString(entityName:string,ignoreKey:$.java.util.Set):string;
                /**
                 * 设置值
                 *
                 * @param dataEntityType
                 * @param baseInstance
                 * @param keyValue  基础资料ID必须为Long
                 */
                setLocalProp(dataEntityType:$.kd.bos.entity.MainEntityType,baseInstance:$.kd.bos.dataentity.entity.DynamicObject,keyValue:$.java.util.Map$Entry):void;
            }
            interface DynamicTransformUtil_C extends DynamicTransformUtil_S {
                new():DynamicTransformUtil;
            }
            interface DynamicTransformUtil$ {
            }
            type DynamicTransformUtil_T = DynamicTransformUtil_S & DynamicTransformUtil$;
            interface DynamicTransformUtil extends DynamicTransformUtil_T {
            }
            interface InfoClassifyOpenWindowUtil_S {
                /**
                 * 打开中台带历史模型单实体导入模板
                 * 非时序性历史导入
                 */
                openWindowForHisNonLineImportStartPage(view:$.kd.bos.mvc.list.ListView,importPlugin:string):$.kd.bos.form.FormShowParameter;
                /**
                 * 点击列表新增按钮弹出层
                 *
                 * @param infoClassifyEntityKeyDTO 页面标识
                 * @param caption 弹出层标题
                 * @return 弹出层
                 */
                openWindowForListBtnNew(infoClassifyEntityKeyDTO:kd.sdk.hr.hspm.common.dto.InfoClassifyEntityKeyDTO,caption:string):$.kd.bos.form.FormShowParameter;
                /**
                 * 点击列表超链接弹出层 --编辑
                 *
                 * @param pkId 主键ID
                 * @param infoClassifyEntityKeyDTO 页面标识
                 * @param caption 弹出层标题
                 * @return 弹出层
                 */
                openWindowForListHyperLink(pkId:long,infoClassifyEntityKeyDTO:kd.sdk.hr.hspm.common.dto.InfoClassifyEntityKeyDTO,caption:string):$.kd.bos.base.BaseShowParameter;
            }
            interface InfoClassifyOpenWindowUtil_C extends InfoClassifyOpenWindowUtil_S {
                new():InfoClassifyOpenWindowUtil;
            }
            interface InfoClassifyOpenWindowUtil$ {
            }
            type InfoClassifyOpenWindowUtil_T = InfoClassifyOpenWindowUtil_S & InfoClassifyOpenWindowUtil$;
            interface InfoClassifyOpenWindowUtil extends InfoClassifyOpenWindowUtil_T {
            }
            interface InfoClassifyPercreFieldUtil_S {
                readonly DEFAULT_OTHER_FIELD_LIST:$.java.util.List;
                readonly DEFAULT_SHOW:$.java.util.Set;
                readonly DEFAULT_TYPE_FIELD_MAP:$.java.util.Map;
                /**
                 * 实时构建字段集
                 *
                 * @return 字段集
                 */
                buildFieldMap():$.java.util.Map;
                /**
                 * 实时获取其他字段集
                 *
                 * @return 其他字段集
                 */
                buildOtherFieldList():$.java.util.List;
            }
            interface InfoClassifyPercreFieldUtil_C extends InfoClassifyPercreFieldUtil_S {
                new():InfoClassifyPercreFieldUtil;
            }
            interface InfoClassifyPercreFieldUtil$ {
            }
            type InfoClassifyPercreFieldUtil_T = InfoClassifyPercreFieldUtil_S & InfoClassifyPercreFieldUtil$;
            interface InfoClassifyPercreFieldUtil extends InfoClassifyPercreFieldUtil_T {
            }
            interface PermUtil_S {
                /**
                 * 查询主业务组织的权限
                 *
                 * @param userId 用户ID
                 * @param appId appId
                 * @param entityNumber 实体
                 * @param permItemId 权限项ID
                 * @return 查询结果
                 */
                getAllPermOrgs(userId:long,appId:string,entityNumber:string,permItemId:string):$.kd.bos.permission.api.HasPermOrgResult;
                /**
                 * 获取数据权限
                 *
                 * @param userId 用户ID
                 * @param appId appId
                 * @param entityNumber 实体
                 * @param permItemId 权限项ID
                 * @param customParam 自定义参数
                 * @return 查询条件
                 */
                getDataRule(userId:long,appId:string,entityNumber:string,permItemId:string,customParam:$.java.util.Map):$.kd.bos.orm.query.QFilter;
                /**
                 * 验证权限
                 *
                 * @param entityName 实体名
                 * @param permItemId 权限
                 * @return 是否有权限
                 */
                hasPerm(entityName:string,permItemId:string):boolean;
            }
            interface PermUtil_C extends PermUtil_S {
                new():PermUtil;
            }
            interface PermUtil$ {
            }
            type PermUtil_T = PermUtil_S & PermUtil$;
            interface PermUtil extends PermUtil_T {
            }
            interface PageCacheUtils_S {
                /**
                 * 获取员工端首页
                 *
                 *  @param formView 当前页面view
                 *  @return 员工端首页
                 */
                getHomePage(formView:$.kd.bos.form.IFormView):$.kd.bos.form.IFormView;
                /**
                 * 获取员工端首页cache
                 *
                 *  @param formView 当前页面view
                 *  @return 员工端首页cache
                 */
                getHomePageCache(formView:$.kd.bos.form.IFormView):$.kd.bos.form.IPageCache;
                /**
                 * 更新字段缓存
                 *
                 *  @param collection
                 *  @param boid
                 *  @param fieldName
                 */
                removeDataIfNeedUpdate(collection:$.java.util.List,boid:long,fieldName:string,groupNumber:string):void;
                /**
                 * 暂存态的数据刷新
                 *
                 * @param tempInfo   当前暂存数据集合
                 * @param resultMap  当前页面保存响应
                 * @param field      切换依据字段
                 * @param newValue   切换后的值
                 * @param entityName 实体
                 * @param view       当前页面
                 * @param helper     helper
                 */
                updateTempData(tempInfo:$.kd.bos.dataentity.entity.DynamicObject[],resultMap:$.java.util.Map,field:string,newValue:any,entityName:string,view:$.kd.bos.form.IFormView,helper:kd.hr.hbp.business.servicehelper.HRBaseServiceHelper):void;
            }
            interface PageCacheUtils_C extends PageCacheUtils_S {
                new():PageCacheUtils;
            }
            interface PageCacheUtils$ {
            }
            type PageCacheUtils_T = PageCacheUtils_S & PageCacheUtils$;
            interface PageCacheUtils extends PageCacheUtils_T {
            }
            interface ApprovalEntityUtils_S {
                /**
                 * 删除暂存数据
                 *
                 * @param entryIdList 分录id 没分录不用传 目前只有教育经历需要
                 * @param entry 单据
                 * @param pkid  主数据id
                 * @param isFromBill 是否从移动端单据界面调用 true是、false否
                 */
                dealDataAfterDeleteEntry(entryIdList:$.java.util.List,entry:$.kd.bos.dataentity.entity.DynamicObject,pkid:long,isFromBill:boolean):void;
                /**
                 * 初始化审核缓存
                 *
                 * @param view 页面
                 */
                initCacheFromEntry(view:$.kd.bos.form.IFormView,infoGroupConfig:$.java.util.Map):void;
            }
            interface ApprovalEntityUtils_C extends ApprovalEntityUtils_S {
                new():ApprovalEntityUtils;
            }
            interface ApprovalEntityUtils$ {
            }
            type ApprovalEntityUtils_T = ApprovalEntityUtils_S & ApprovalEntityUtils$;
            interface ApprovalEntityUtils extends ApprovalEntityUtils_T {
            }
            interface DynamicPropValidateUtil_S {
                /**
                 * 判断数据是否发生变更
                 *
                 * @param dataEntity 待更新数据
                 * @param dbDy 数据库最新数据
                 * @return 是否改变
                 */
                checkChanged(dataEntity:$.kd.bos.dataentity.entity.DynamicObject,dbDy:$.kd.bos.dataentity.entity.DynamicObject):boolean;
                /**
                 * 判断数据是否发生变更
                 *
                 * @param dataEntity 待更新数据
                 * @param dbDy 数据库最新数据
                 * @param dynamicPropString 匹配是否发生变更的字段集
                 * @return 是否改变
                 */
                checkChanged(dataEntity:$.kd.bos.dataentity.entity.DynamicObject,dbDy:$.kd.bos.dataentity.entity.DynamicObject,dynamicPropString:string):boolean;
                /**
                 * 判断数据是否发生变更,并返回变化和未变化的map集合
                 *
                 * @param dataEntity 待更新数据
                 * @param dbDy 数据库最新数据
                 * @return 变化和未变化的map集合
                 */
                checkChangedPropMap(dataEntity:$.kd.bos.dataentity.entity.DynamicObject,dbDy:$.kd.bos.dataentity.entity.DynamicObject):$.java.util.Map;
                /**
                 * 判断数据是否发生变更
                 *
                 * @param dataEntity 待更新数据
                 * @param dbDy 数据库最新数据
                 * @param dynamicPropString 匹配是否发生变更的字段集
                 * @return 变化和未变化的map集合
                 */
                checkChangedPropMap(dataEntity:$.kd.bos.dataentity.entity.DynamicObject,dbDy:$.kd.bos.dataentity.entity.DynamicObject,dynamicPropString:string):$.java.util.Map;
                /**
                 * 去除首尾空格
                 * 目前去除字符串和多语言字符串的首尾空格
                 *
                 * @param dataEntity 待处理数据集
                 */
                trim(dataEntity:$.kd.bos.dataentity.entity.DynamicObject):void;
            }
            interface DynamicPropValidateUtil_C extends DynamicPropValidateUtil_S {
                new():DynamicPropValidateUtil;
            }
            interface DynamicPropValidateUtil$ {
            }
            type DynamicPropValidateUtil_T = DynamicPropValidateUtil_S & DynamicPropValidateUtil$;
            interface DynamicPropValidateUtil extends DynamicPropValidateUtil_T {
            }
            interface PersonModelUtil_S {
                /**
                 * 获取分类
                 *
                 * @param pageNumber 元数据标识
                 * @return 分类
                 */
                getClassification(pageNumber:string):kd.sdk.hr.hspm.common.enums.PersonModelClassificationEnum;
                /**
                 * 获取附表过滤对象
                 *
                 * @param pageNumber 元数据标识
                 * @param values 值
                 * @return QFilter
                 */
                getQFilter(pageNumber:string,values:$.java.util.Map):$.kd.bos.orm.query.QFilter;
                /**
                 * 获取附表过滤对象
                 *
                 * @param pageNumber 元数据标识
                 * @param values 值
                 * @return QFilter
                 */
                getQFilterForHeadArea(pageNumber:string,values:$.java.util.Map):$.kd.bos.orm.query.QFilter;
                /**
                 * 保存四层人员信息
                 *
                 * @param dynamicObject dy对象
                 * @param values 值
                 */
                setPersonModelValue(dynamicObject:$.kd.bos.dataentity.entity.DynamicObject,values:$.java.util.Map):void;
            }
            interface PersonModelUtil_C extends PersonModelUtil_S {
                new():PersonModelUtil;
            }
            interface PersonModelUtil$ {
            }
            type PersonModelUtil_T = PersonModelUtil_S & PersonModelUtil$;
            interface PersonModelUtil extends PersonModelUtil_T {
            }
        }
        namespace kd.sdk.hr.hspm.common.vo{
            interface DefineSpecialVo_S {
            }
            interface DefineSpecialVo_C extends DefineSpecialVo_S {
                new():DefineSpecialVo;
                new(timeFlag:boolean,timeEdit:string,viewContractBut:string):DefineSpecialVo;
                new(timeFlag:boolean,timeOutBut:boolean,viewContractBut:string,headEdit:string):DefineSpecialVo;
                new(timeFlag:boolean,timeEdit:string,timeDel:string,headEdit:string,headDel:string):DefineSpecialVo;
            }
            interface DefineSpecialVo$ {
                getHeadDel():string;
                getHeadEdit():string;
                getTimeDel():string;
                getTimeEdit():string;
                getTimeFlag():boolean;
                getViewContractBut():string;
                isTimeFlag():boolean;
                isTimeOutBut():boolean;
                setHeadDel(headDel:string):void;
                setHeadEdit(headEdit:string):void;
                setTimeDel(timeDel:string):void;
                setTimeEdit(timeEdit:string):void;
                setTimeFlag(timeFlag:boolean):void;
                setTimeOutBut(timeOutBut:boolean):void;
                setViewContractBut(viewContractBut:string):void;
            }
            type DefineSpecialVo_T = DefineSpecialVo_S & DefineSpecialVo$;
            interface DefineSpecialVo extends DefineSpecialVo_T {
            }
            interface CardViewCompareVo_S {
            }
            interface CardViewCompareVo_C extends CardViewCompareVo_S {
                new():CardViewCompareVo;
                new(headFields:string,textFields:string,contentFields:string):CardViewCompareVo;
                new(timeFields:string,headFields:string,textFields:string,contentFields:string):CardViewCompareVo;
                new(timeFields:string,headFields:string,textFields:string,contentFields:string,attachFields:string):CardViewCompareVo;
            }
            interface CardViewCompareVo$ {
                getAttachFields():string;
                getContentFields():string;
                getHeadFields():string;
                getTextFields():string;
                getTimeFields():string;
                setAttachFields(attachFields:string):void;
                setContentFields(contentFields:string):void;
                setHeadFields(headFields:string):void;
                setTextFields(textFields:string):void;
                setTimeFields(timeFields:string):void;
            }
            type CardViewCompareVo_T = CardViewCompareVo_S & CardViewCompareVo$;
            interface CardViewCompareVo extends CardViewCompareVo_T {
            }
            interface AfterCreatVo_S {
            }
            interface AfterCreatVo_C extends AfterCreatVo_S {
                new():AfterCreatVo;
                new(filedMap:$.java.util.Map,fieldAp:$.kd.bos.metadata.form.control.LabelAp,labType:string,dataMap:$.java.util.Map,mainAp:$.kd.bos.metadata.form.container.FlexPanelAp):AfterCreatVo;
            }
            interface AfterCreatVo$ {
                getDataMap():$.java.util.Map;
                getField():string;
                getFieldAp():$.kd.bos.metadata.form.control.LabelAp;
                getFiledMap():$.java.util.Map;
                getLabType():string;
                getMainAp():$.kd.bos.metadata.form.container.FlexPanelAp;
                getStyle():$.kd.bos.metadata.form.Style;
                setDataMap(dataMap:$.java.util.Map):void;
                setField(field:string):void;
                setFieldAp(fieldAp:$.kd.bos.metadata.form.control.LabelAp):void;
                setFiledMap(filedMap:$.java.util.Map):void;
                setLabType(labType:string):void;
                setMainAp(mainAp:$.kd.bos.metadata.form.container.FlexPanelAp):void;
                setStyle(style:$.kd.bos.metadata.form.Style):void;
            }
            type AfterCreatVo_T = AfterCreatVo_S & AfterCreatVo$;
            interface AfterCreatVo extends AfterCreatVo_T {
            }
            interface QueryDbVo_S {
            }
            interface QueryDbVo_C extends QueryDbVo_S {
                new():QueryDbVo;
                new(filters:$.kd.bos.orm.query.QFilter[],fields:$.java.util.List,entityId:string):QueryDbVo;
                new(filters:$.kd.bos.orm.query.QFilter[],fields:$.java.util.List,entityId:string,setToList:boolean):QueryDbVo;
                new(filters:$.kd.bos.orm.query.QFilter[],fields:$.java.util.List,entityId:string,orderBy:string):QueryDbVo;
            }
            interface QueryDbVo$ {
                getEntityId():string;
                getFields():$.java.util.List;
                getFilters():$.kd.bos.orm.query.QFilter[];
                getOrderBy():string;
                getSetToList():boolean;
                setEntityId(entityId:string):void;
                setFields(fields:$.java.util.List):void;
                setFilters(filters:$.kd.bos.orm.query.QFilter[]):void;
                setOrderBy(orderBy:string):void;
                setSetToList(setToList:boolean):void;
            }
            type QueryDbVo_T = QueryDbVo_S & QueryDbVo$;
            interface QueryDbVo extends QueryDbVo_T {
            }
            interface FieldTransVo_S {
            }
            interface FieldTransVo_C extends FieldTransVo_S {
                new():FieldTransVo;
                new(tabMap:$.java.util.Map,compareVo:CardViewCompareVo):FieldTransVo;
            }
            interface FieldTransVo$ {
                getCompareVo():CardViewCompareVo;
                getTabMap():$.java.util.Map;
                setCompareVo(compareVo:CardViewCompareVo):void;
                setTabMap(tabMap:$.java.util.Map):void;
            }
            type FieldTransVo_T = FieldTransVo_S & FieldTransVo$;
            interface FieldTransVo extends FieldTransVo_T {
            }
            interface TimeApVo_S {
            }
            interface TimeApVo_C extends TimeApVo_S {
                new():TimeApVo;
                new(dataMap:$.java.util.Map,contentAp:$.kd.bos.metadata.form.container.FlexPanelAp,index:number):TimeApVo;
                new(dataMap:$.java.util.Map,contentAp:$.kd.bos.metadata.form.container.FlexPanelAp,index:number,outIndex:number):TimeApVo;
            }
            interface TimeApVo$ {
                getContentAp():$.kd.bos.metadata.form.container.FlexPanelAp;
                getDataMap():$.java.util.Map;
                getIndex():number;
                getOutIndex():number;
                setContentAp(contentAp:$.kd.bos.metadata.form.container.FlexPanelAp):void;
                setDataMap(dataMap:$.java.util.Map):void;
                setIndex(index:number):void;
                setOutIndex(outIndex:number):void;
            }
            type TimeApVo_T = TimeApVo_S & TimeApVo$;
            interface TimeApVo extends TimeApVo_T {
            }
            interface PreBindDataVo_S {
            }
            interface PreBindDataVo_C extends PreBindDataVo_S {
                new():PreBindDataVo;
                new(dataMap:$.java.util.Map,view:$.kd.bos.mvc.form.FormView,formShowParameter:$.kd.bos.form.FormShowParameter):PreBindDataVo;
            }
            interface PreBindDataVo$ {
                getDataMap():$.java.util.Map;
                getFormShowParameter():$.kd.bos.form.FormShowParameter;
                getView():$.kd.bos.mvc.form.FormView;
                setDataMap(dataMap:$.java.util.Map):void;
                setFormShowParameter(formShowParameter:$.kd.bos.form.FormShowParameter):void;
                setView(view:$.kd.bos.mvc.form.FormView):void;
            }
            type PreBindDataVo_T = PreBindDataVo_S & PreBindDataVo$;
            interface PreBindDataVo extends PreBindDataVo_T {
            }
            interface CardViewVo_S {
            }
            interface CardViewVo_C extends CardViewVo_S {
                new():CardViewVo;
                new(timeFields:$.java.util.List,headFields:$.java.util.List,textFields:$.java.util.List,contentFields:$.java.util.List,attachFields:$.java.util.List):CardViewVo;
            }
            interface CardViewVo$ {
                getAttachFields():$.java.util.List;
                getContentFields():$.java.util.List;
                getHeadFields():$.java.util.List;
                getTextFields():$.java.util.List;
                getTimeFields():$.java.util.List;
                /**
                 * 设置字段
                 *
                 * @param attachFields 字段
                 */
                setAttachFields(attachFields:$.java.util.List):void;
                /**
                 * 设置字段
                 *
                 * @param contentFields 字段
                 */
                setContentFields(contentFields:$.java.util.List):void;
                /**
                 * 设置字段
                 *
                 * @param headFields 字段
                 */
                setHeadFields(headFields:$.java.util.List):void;
                /**
                 * 设置字段
                 *
                 * @param textFields 字段
                 */
                setTextFields(textFields:$.java.util.List):void;
                /**
                 * 设置字段
                 *
                 * @param timeFields 字段
                 */
                setTimeFields(timeFields:$.java.util.List):void;
            }
            type CardViewVo_T = CardViewVo_S & CardViewVo$;
            interface CardViewVo extends CardViewVo_T {
            }
            interface TextColorVo_S {
            }
            interface TextColorVo_C extends TextColorVo_S {
                new():TextColorVo;
                new(style:$.kd.bos.metadata.form.Style,labelAp:$.kd.bos.metadata.form.control.LabelAp,forColor:string,backColor:string,radius:string):TextColorVo;
            }
            interface TextColorVo$ {
                getBackColor():string;
                getForColor():string;
                getLabelAp():$.kd.bos.metadata.form.control.LabelAp;
                getRadius():string;
                getStyle():$.kd.bos.metadata.form.Style;
                setBackColor(backColor:string):void;
                setForColor(forColor:string):void;
                setLabelAp(labelAp:$.kd.bos.metadata.form.control.LabelAp):void;
                setRadius(radius:string):void;
                setStyle(style:$.kd.bos.metadata.form.Style):void;
            }
            type TextColorVo_T = TextColorVo_S & TextColorVo$;
            interface TextColorVo extends TextColorVo_T {
            }
            interface ContentApVo_S {
            }
            interface ContentApVo_C extends ContentApVo_S {
                new():ContentApVo;
                new(dataMap:$.java.util.Map,contentAp:$.kd.bos.metadata.form.container.FlexPanelAp,index:number,dataSize:number):ContentApVo;
                new(dataMap:$.java.util.Map,contentAp:$.kd.bos.metadata.form.container.FlexPanelAp,index:number,dataSize:number,outIndex:number):ContentApVo;
            }
            interface ContentApVo$ {
                getContentAp():$.kd.bos.metadata.form.container.FlexPanelAp;
                getDataMap():$.java.util.Map;
                getDataSize():number;
                getFieldPanelAp():$.kd.bos.metadata.form.container.FlexPanelAp;
                getIndex():number;
                getOutIndex():number;
                getSubFieldPanelAp():$.kd.bos.metadata.form.container.FlexPanelAp;
                setContentAp(contentAp:$.kd.bos.metadata.form.container.FlexPanelAp):void;
                setDataMap(dataMap:$.java.util.Map):void;
                setDataSize(dataSize:number):void;
                setFieldPanelAp(fieldPanelAp:$.kd.bos.metadata.form.container.FlexPanelAp):void;
                setIndex(index:number):void;
                setOutIndex(outIndex:number):void;
                setSubFieldPanelAp(subFieldPanelAp:$.kd.bos.metadata.form.container.FlexPanelAp):void;
            }
            type ContentApVo_T = ContentApVo_S & ContentApVo$;
            interface ContentApVo extends ContentApVo_T {
            }
            interface BeforeCreatVo_S {
            }
            interface BeforeCreatVo_C extends BeforeCreatVo_S {
                new():BeforeCreatVo;
                new(labMap:$.java.util.Map,relMap:$.java.util.Map,labType:string,dataMap:$.java.util.Map,index:number):BeforeCreatVo;
                new(labMap:$.java.util.Map,relMap:$.java.util.Map,labType:string,dataMap:$.java.util.Map,index:number,topLeftMainAp:$.kd.bos.metadata.form.container.FlexPanelAp):BeforeCreatVo;
            }
            interface BeforeCreatVo$ {
                getDataMap():$.java.util.Map;
                getIndex():number;
                getLabMap():$.java.util.Map;
                getLabType():string;
                getRelMap():$.java.util.Map;
                getTopLeftMainAp():$.kd.bos.metadata.form.container.FlexPanelAp;
                setDataMap(dataMap:$.java.util.Map):void;
                setIndex(index:number):void;
                setLabMap(labMap:$.java.util.Map):void;
                setLabType(labType:string):void;
                setRelMap(relMap:$.java.util.Map):void;
                setTopLeftMainAp(topLeftMainAp:$.kd.bos.metadata.form.container.FlexPanelAp):void;
            }
            type BeforeCreatVo_T = BeforeCreatVo_S & BeforeCreatVo$;
            interface BeforeCreatVo extends BeforeCreatVo_T {
            }
        }
        namespace kd.sdk.hr.hspm.formplugin.mobile.file.base{
            interface AbstractMobileFormDrawEdit_S {
            }
            type AbstractMobileFormDrawEdit_ST = $.kd.bos.form.plugin.AbstractMobFormPlugin & kd.sdk.hr.hspm.common.constants.DynConfigConstants_S & $.kd.bos.form.field.events.AfterF7SelectListener & kd.sdk.hr.hspm.common.constants.ScheduleDrawConstants_S & $.kd.bos.form.control.events.UploadListener & AbstractMobileFormDrawEdit_S;
            interface AbstractMobileFormDrawEdit_C extends AbstractMobileFormDrawEdit_ST {
                new():AbstractMobileFormDrawEdit;
            }
            interface AbstractMobileFormDrawEdit$ {
                /**
                 * 跨实体保存
                 */
                acrossEntitySaveOrUpdate():void;
                delData(entityName:string,pk:long):$.kd.bos.dataentity.Tuple;
                /**
                 * 多视图传来的信息组字段组装成规定的数据格式
                 *
                 * @param group 信息组
                 * @return 字段列表
                 */
                formatFlexFields(group:$.java.util.Map):$.java.util.List;
                /**
                 * 获取所有字段列表
                 * 用于注册mainType和绑定control
                 *
                 * @param params 字段信息
                 * @return 所有字段列表
                 */
                getAllFieldList(params:string):$.java.util.List;
                /**
                 * 是否是单行表
                 *
                 * @return
                 */
                isSingleTable():boolean;
            }
            type AbstractMobileFormDrawEdit_T = $.kd.bos.form.plugin.AbstractMobFormPlugin & $.kd.bos.form.field.events.AfterF7SelectListener & kd.sdk.hr.hspm.common.constants.DynConfigConstants & kd.sdk.hr.hspm.common.constants.ScheduleDrawConstants & $.kd.bos.form.control.events.UploadListener & AbstractMobileFormDrawEdit_S & AbstractMobileFormDrawEdit$;
            interface AbstractMobileFormDrawEdit extends AbstractMobileFormDrawEdit_T {
            }
        }
        namespace kd.sdk.hr.hspm.formplugin.web.file.ermanfile.base{
            interface AbstractEntryEntityDrawEdit_S {
                readonly GROUP_CONTANIER_SUFFIX:string;
            }
            type AbstractEntryEntityDrawEdit_ST = kd.hr.hbp.formplugin.web.HRDataBaseEdit_S & AbstractEntryEntityDrawEdit_S;
            interface AbstractEntryEntityDrawEdit_C extends AbstractEntryEntityDrawEdit_ST {
                new():AbstractEntryEntityDrawEdit;
            }
            interface AbstractEntryEntityDrawEdit$ {
            }
            type AbstractEntryEntityDrawEdit_T = kd.hr.hbp.formplugin.web.HRDataBaseEdit & AbstractEntryEntityDrawEdit_S & AbstractEntryEntityDrawEdit$;
            interface AbstractEntryEntityDrawEdit extends AbstractEntryEntityDrawEdit_T {
            }
            interface AbstractFormDrawEdit_S {
            }
            type AbstractFormDrawEdit_ST = kd.sdk.hr.hspm.common.constants.DynConfigConstants_S & $.kd.bos.form.field.events.BeforeF7SelectListener & kd.hr.hbp.formplugin.web.HRDataBaseEdit_S & $.kd.bos.form.field.events.AfterF7SelectListener & kd.sdk.hr.hspm.common.constants.ScheduleDrawConstants_S & $.kd.bos.form.control.events.UploadListener & AbstractFormDrawEdit_S;
            interface AbstractFormDrawEdit_C extends AbstractFormDrawEdit_ST {
                new():AbstractFormDrawEdit;
            }
            interface AbstractFormDrawEdit$ {
                /**
                 * 跨实体保存
                 */
                acrossEntitySaveOrUpdate():void;
                /**
                 * 多视图传来的信息组字段组装成规定的数据格式
                 *
                 * @param group   信息组
                 * @param tabList
                 * @return 字段列表
                 */
                formatFlexFields(group:$.java.util.Map,tabList:$.java.util.Map):$.java.util.List;
                /**
                 * 获取所有字段列表
                 * 用于注册mainType和绑定control
                 *
                 * @param params 字段信息
                 * @return 所有字段列表
                 */
                getAllFieldList(params:string):$.java.util.List;
                /**
                 * 查询历史数据
                 *
                 * @param baseEntityName 基础页面
                 * @param employeeId 企业人id
                 * @param queryRevise 是否查询
                 * @return 返回对应的数据
                 */
                getHisVersions(baseEntityName:string,employeeId:long,queryRevise:boolean,containsCurVersion:boolean):$.kd.bos.dataentity.entity.DynamicObject[];
            }
            type AbstractFormDrawEdit_T = kd.hr.hbp.formplugin.web.HRDataBaseEdit & $.kd.bos.form.field.events.AfterF7SelectListener & kd.sdk.hr.hspm.common.constants.DynConfigConstants & kd.sdk.hr.hspm.common.constants.ScheduleDrawConstants & $.kd.bos.form.control.events.UploadListener & $.kd.bos.form.field.events.BeforeF7SelectListener & AbstractFormDrawEdit_S & AbstractFormDrawEdit$;
            interface AbstractFormDrawEdit extends AbstractFormDrawEdit_T {
            }
            interface AbstractCardDrawEdit_S {
            }
            type AbstractCardDrawEdit_ST = kd.sdk.hr.hspm.common.constants.AttachConstants_S & $.kd.bos.form.plugin.AbstractFormPlugin & AbstractCardDrawEdit_S;
            interface AbstractCardDrawEdit_C extends AbstractCardDrawEdit_ST {
                new():AbstractCardDrawEdit;
                new(cardViewVo:kd.sdk.hr.hspm.common.vo.CardViewVo):AbstractCardDrawEdit;
            }
            interface AbstractCardDrawEdit$ {
                /**
                 * 附件信息
                 *
                 * @param index             index
                 * @param attachPanelAp     attachPanelAp
                 * @param attachments       attachments
                 * @param filedMap          filedMap
                 * @param idx               idx
                 * @param isImageAttachment isImageAttachment
                 * @param page              page
                 * @param dataMap           dataMap
                 */
                createAttContentAp(index:number,attachPanelAp:$.kd.bos.metadata.form.container.FlexPanelAp,attachments:$.java.util.List,filedMap:$.java.util.Map,idx:number,isImageAttachment:boolean,page:string,dataMap:$.java.util.Map):void;
                getCardViewVo():kd.sdk.hr.hspm.common.vo.CardViewVo;
                getDataList():$.java.util.List;
                getTimeMap():$.java.util.Map;
                setCardViewVo(cardViewVo:kd.sdk.hr.hspm.common.vo.CardViewVo):void;
                /**
                 * 设置数
                 *
                 * @param dataList data
                 */
                setDataList(dataList:$.java.util.List):void;
                setTimeMap(timeMap:$.java.util.Map):void;
            }
            type AbstractCardDrawEdit_T = $.kd.bos.form.plugin.AbstractFormPlugin & kd.sdk.hr.hspm.common.constants.AttachConstants & AbstractCardDrawEdit_S & AbstractCardDrawEdit$;
            interface AbstractCardDrawEdit extends AbstractCardDrawEdit_T {
            }
            interface CommonSingleFormDrawEdit_S {
            }
            type CommonSingleFormDrawEdit_ST = AbstractFormDrawEdit_S & CommonSingleFormDrawEdit_S;
            interface CommonSingleFormDrawEdit_C extends CommonSingleFormDrawEdit_ST {
                new():CommonSingleFormDrawEdit;
            }
            interface CommonSingleFormDrawEdit$ {
            }
            type CommonSingleFormDrawEdit_T = AbstractFormDrawEdit & CommonSingleFormDrawEdit_S & CommonSingleFormDrawEdit$;
            interface CommonSingleFormDrawEdit extends CommonSingleFormDrawEdit_T {
            }
        }
        namespace kd.sdk.hr.hspm.formplugin.web.file.ermanfile.drawutil{
            interface ApControlService_S {
            }
            interface ApControlService_C extends ApControlService_S {
                new():ApControlService;
            }
            interface ApControlService$ {
                /**
                 * 根据字段类型，创建不同的字段control
                 *
                 * @param drawFormField 字段对象
                 * @return 字段control
                 */
                createField(drawFormField:kd.sdk.hr.hspm.common.dto.DrawFormFieldDto):$.kd.bos.metadata.entity.commonfield.Field;
                /**
                 * 根据字段类型，创建不同的字段control
                 *
                 * @param drawFormField 字段对象
                 * @return 字段control
                 */
                createMobileField(drawFormField:kd.sdk.hr.hspm.common.dto.DrawFormFieldDto):$.kd.bos.metadata.entity.commonfield.Field;
            }
            type ApControlService_T = ApControlService_S & ApControlService$;
            interface ApControlService extends ApControlService_T {
            }
            interface CustomDrawUtils_S {
                /**
                 * 获取对象
                 *
                 * @return 对象
                 */
                getInstance():CustomDrawUtils;
            }
            interface CustomDrawUtils_C extends CustomDrawUtils_S {
                new():CustomDrawUtils;
            }
            interface CustomDrawUtils$ {
                /**
                 * 是否自定义绘制控件
                 *
                 * @param drawFormFieldDto drawFormFieldDto
                 * @return false :由原有逻辑绘制  true:自定义逻辑
                 */
                customDrawField(drawFormFieldDto:kd.sdk.hr.hspm.common.dto.DrawFormFieldDto):$.kd.bos.metadata.entity.commonfield.Field;
                /**
                 * 是否自定义注册 entitytype
                 *
                 * @param drawFormFieldDto drawFormFieldDto
                 * @param mainType mainType
                 * @return false :由原有逻辑绘制  true:自定义逻辑
                 */
                customGetEntityTypeRegProps(drawFormFieldDto:kd.sdk.hr.hspm.common.dto.DrawFormFieldDto,mainType:$.kd.bos.entity.MainEntityType):boolean;
                /**
                 * @param args 事件
                 * @param abstractFormDrawEdit  abstractFormDrawEdit
                 * @param drawFormFieldDto 配置对象
                 * @return false :由原有逻辑绘制  true:自定义逻辑
                 */
                customOnGetControl(args:$.kd.bos.form.events.OnGetControlArgs,abstractFormDrawEdit:$.kd.bos.form.plugin.AbstractFormPlugin,drawFormFieldDto:kd.sdk.hr.hspm.common.dto.DrawFormFieldDto):boolean;
            }
            type CustomDrawUtils_T = CustomDrawUtils_S & CustomDrawUtils$;
            interface CustomDrawUtils extends CustomDrawUtils_T {
            }
            interface TemplateEditUtils_S {
                readonly DRAWFIELD_TL:any;
                /**
                 * 设置多选字基础资料对象
                 *
                 * @param key 字段名
                 * @param plugin plugin
                 * @return 多选
                 */
                MulBasedataEdit(key:string,plugin:$.kd.bos.form.plugin.AbstractFormPlugin):$.kd.bos.form.field.MulBasedataEdit;
                /**
                 * 增加control
                 *
                 * @param key 字段类型
                 * @param field 字段标识
                 * @param args 事件
                 * @param abstractFormDrawEdit 插件页面
                 */
                addGetControl(key:string,field:string,args:$.kd.bos.form.events.OnGetControlArgs,abstractFormDrawEdit:$.kd.bos.form.plugin.AbstractFormPlugin):void;
                /**
                 * 增加control
                 *
                 * @param key                        字段类型
                 * @param field                      字段标识
                 * @param arg                        事件
                 * @param abstractMobileFormDrawEdit 插件页面
                 */
                addGetControlForMobile(key:string,field:string,arg:$.kd.bos.form.events.OnGetControlArgs,abstractMobileFormDrawEdit:kd.sdk.hr.hspm.formplugin.mobile.file.base.AbstractMobileFormDrawEdit):void;
                /**
                 * 设置地址类型控件
                 *
                 * @param key 字段名
                 * @param plugin 插件
                 * @return 基础资料
                 */
                getAddressEdit(key:string,plugin:$.kd.bos.form.plugin.AbstractFormPlugin):$.kd.bos.form.field.AddressEdit;
                /**
                 * 设置行政区划字段控件对象
                 *
                 * @param key 字段名
                 * @param plugin plugin
                 * @return PictureEdit
                 */
                getAdminDivisionEdit(key:string,plugin:$.kd.bos.form.plugin.AbstractFormPlugin):$.kd.bos.form.field.AdminDivisionEdit;
                /**
                 * 行政区划字段属性
                 *
                 * @param displayName 显示名称
                 * @param apKey 字段标识key
                 * @return 字段属性
                 */
                getAdminDivisionProp(displayName:string,apKey:string):$.kd.bos.entity.property.AdminDivisionProp;
                /**
                 * 设置基础资料控件对象
                 *
                 * @param key 字段名
                 * @param plugin 插件
                 * @return 基础资料
                 */
                getBasedataEdit(key:string,plugin:$.kd.bos.form.plugin.AbstractFormPlugin):$.kd.bos.form.field.BasedataEdit;
                /**
                 * 基础资料字段属性
                 *
                 * @param entityProperty  实体属性
                 * @param displayName 显示名称
                 * @param apKey 字段标识key
                 * @return 字段属性
                 */
                getBasedataProp(entityProperty:$.kd.bos.entity.property.BasedataProp,displayName:string,apKey:string):$.kd.bos.entity.property.BasedataProp;
                /**
                 * 长整数字段属性
                 *
                 * @param displayName 显示名称
                 * @param apKey 字段标识key
                 * @return 字段属性
                 */
                getBigIntProp(displayName:string,apKey:string):$.kd.bos.entity.property.BigIntProp;
                /**
                 * 复选框字段属性
                 *
                 * @param displayName 显示名称
                 * @param apKey 字段标识key
                 * @return 字段属性
                 */
                getBooleanProp(displayName:string,apKey:string):$.kd.bos.entity.property.BooleanProp;
                /**
                 * 设置文本字段控件对象
                 *
                 * @param key 字段名
                 * @param plugin plugin
                 * @return 按钮
                 */
                getButtonAp(key:string,plugin:$.kd.bos.form.plugin.AbstractFormPlugin):$.kd.bos.form.control.Button;
                /**
                 * 设置下拉列表字段控件对象
                 *
                 * @param key 字段名
                 * @param plugin plugin
                 * @return PictureEdit
                 */
                getComboEdit(key:string,plugin:$.kd.bos.form.plugin.AbstractFormPlugin):$.kd.bos.form.field.ComboEdit;
                /**
                 * 下拉列表字段属性
                 *
                 * @param displayName 显示名称
                 * @param apKey 字段标识key
                 * @return 字段属性
                 */
                getComboProp(displayName:string,apKey:string):$.kd.bos.entity.property.ComboProp;
                /**
                 * 设置面板控件对象
                 *
                 * @param key 字段名
                 * @param plugin plugin
                 * @return Container
                 */
                getContainer(key:string,plugin:$.kd.bos.form.plugin.AbstractFormPlugin):$.kd.bos.form.container.Container;
                /**
                 * 设置日期字段控件对象
                 *
                 * @param key 字段名
                 * @param plugin plugin
                 * @return PictureEdit
                 */
                getDateEdit(key:string,plugin:$.kd.bos.form.plugin.AbstractFormPlugin):$.kd.bos.form.field.DateEdit;
                /**
                 * 日期字段属性
                 *
                 * @param displayName 显示名称
                 * @param apKey 字段标识key
                 * @return 字段属性
                 */
                getDateProp(displayName:string,apKey:string):$.kd.bos.entity.property.DateProp;
                /**
                 * 设置小数字段控件对象
                 *
                 * @param key 字段名
                 * @param plugin plugin
                 * @return PictureEdit
                 */
                getDecimalEdit(key:string,plugin:$.kd.bos.form.plugin.AbstractFormPlugin):$.kd.bos.form.field.DecimalEdit;
                /**
                 * 设置复选框字段控件对象
                 *
                 * @param key 字段名
                 * @param plugin plugin
                 * @return PictureEdit
                 */
                getFieldEdit(key:string,plugin:$.kd.bos.form.plugin.AbstractFormPlugin):$.kd.bos.form.field.FieldEdit;
                /**
                 * 整数字段属性
                 *
                 * @param displayName 显示名称
                 * @param apKey 字段标识key
                 * @return 字段属性
                 */
                getIntegerProp(displayName:string,apKey:string):$.kd.bos.entity.property.IntegerProp;
                /**
                 * 设置标签控件对象
                 *
                 * @param key 字段名
                 * @param plugin plugin
                 * @return Label
                 */
                getLabel(key:string,plugin:$.kd.bos.form.plugin.AbstractFormPlugin):$.kd.bos.form.control.Label;
                /**
                 * 长整型数字段属性
                 *
                 * @param displayName 显示名称
                 * @param apKey 字段标识key
                 * @return 字段属性
                 */
                getLongProp(displayName:string,apKey:string):$.kd.bos.entity.property.LongProp;
                /**
                 * 多语言字段属性
                 *
                 * @param displayName 显示名称
                 * @param apKey 字段标识key
                 * @return 字段属性
                 */
                getMuliLangTextProp(displayName:string,apKey:string):$.kd.bos.entity.property.MuliLangTextProp;
                /**
                 * 组织
                 *
                 * @param key 字段名
                 * @param plugin plugin
                 * @return OrgEdit
                 */
                getOrgPropEdit(key:string,plugin:$.kd.bos.form.plugin.AbstractFormPlugin):$.kd.bos.form.field.OrgEdit;
                /**
                 * 设置图片字段控件对象
                 *
                 * @param key 字段名
                 * @param plugin plugin
                 * @return PictureEdit
                 */
                getPictureEdit(key:string,plugin:$.kd.bos.form.plugin.AbstractFormPlugin):kd.bos.form.field.PictureEdit;
                /**
                 * 图片字段属性
                 *
                 * @param displayName 显示名称
                 * @param apKey 字段标识key
                 * @return 字段属性
                 */
                getPictureProp(displayName:string,apKey:string):kd.bos.entity.property.PictureProp;
                /**
                 * 设置文本字段控件对象
                 *
                 * @param key 字段名
                 * @param plugin plugin
                 * @return 文本
                 */
                getTextEdit(key:string,plugin:$.kd.bos.form.plugin.AbstractFormPlugin):$.kd.bos.form.field.FieldEdit;
                /**
                 * 文本字段属性
                 *
                 * @param displayName 显示名称
                 * @param apKey 字段标识key
                 * @return 字段属性
                 */
                getTextProp(displayName:string,apKey:string):$.kd.bos.entity.property.TextProp;
            }
            interface TemplateEditUtils_C extends TemplateEditUtils_S {
                new():TemplateEditUtils;
            }
            interface TemplateEditUtils$ {
            }
            type TemplateEditUtils_T = TemplateEditUtils_S & TemplateEditUtils$;
            interface TemplateEditUtils extends TemplateEditUtils_T {
            }
            interface ApCreateUtils_S {
                readonly DRAW_THREAD:any;
                /**
                 * 创建单据体分录字段ap
                 *
                 * @param drawFormField 对象类型
                 * @return 单据体分录字段ap
                 */
                createEntryFieldAp(drawFormField:kd.sdk.hr.hspm.common.dto.DrawFormFieldDto):$.kd.bos.metadata.form.control.EntryFieldAp;
                /**
                 * 创建字段ap
                 *
                 * @param drawFormField 字段对象
                 * @return 字段ap
                 */
                createFieldAp(drawFormField:kd.sdk.hr.hspm.common.dto.DrawFormFieldDto):$.kd.bos.metadata.form.control.FieldAp;
                /**
                 * 创建字段集ap
                 *
                 * @param key ap标识
                 * @return 字段集ap
                 */
                createFieldPanelAp(key:string):$.kd.bos.metadata.form.container.FlexPanelAp;
                /**
                 * 创建面板ap
                 *
                 * @param key 标识
                 * @param name 标识
                 * @return 面板ap
                 */
                createFlexAp(key:string,name:string):$.kd.bos.metadata.form.container.FlexPanelAp;
                /**
                 * 创建标签
                 *
                 * @param labelKey key
                 * @param labelName name
                 * @return 标签
                 */
                createLabelAp(labelKey:string,labelName:string):$.kd.bos.metadata.form.control.LabelAp;
                /**
                 * 创建字段ap
                 *
                 * @param drawFormField 字段对象
                 * @return 字段ap
                 */
                createMobileFieldAp(drawFormField:kd.sdk.hr.hspm.common.dto.DrawFormFieldDto):$.kd.bos.metadata.form.control.FieldAp;
                /**
                 * 创建面板ap
                 *
                 * @param key 标识
                 * @param name 标识
                 * @return 面板ap
                 */
                createNewFlexAp(key:string,name:string):$.kd.bos.metadata.form.container.FlexPanelAp;
                /**
                 * 创建面板ap
                 *
                 * @param key 标识
                 * @param name 标识
                 * @return 面板ap
                 */
                createOriginalFlexAp(key:string,name:string):$.kd.bos.metadata.form.container.FlexPanelAp;
            }
            interface ApCreateUtils_C extends ApCreateUtils_S {
                new():ApCreateUtils;
            }
            interface ApCreateUtils$ {
            }
            type ApCreateUtils_T = ApCreateUtils_S & ApCreateUtils$;
            interface ApCreateUtils extends ApCreateUtils_T {
            }
            interface FieldContainerViewService_S {
                readonly BIG_880_FLEX:$.java.util.Set;
                readonly MIDDLE_554_FLEX:$.java.util.Set;
                readonly MIDDLE_600_FLEX:$.java.util.Set;
                readonly MIDDLE_600_SPEC_FLEX:$.java.util.Set;
            }
            interface FieldContainerViewService_C extends FieldContainerViewService_S {
                new():FieldContainerViewService;
            }
            interface FieldContainerViewService$ {
                drawAttachmentAp(drawFormFieldDto:kd.sdk.hr.hspm.common.dto.DrawFormFieldDto,source:string):$.kd.bos.metadata.form.control.AttachmentPanelAp;
                /**
                 * 组装flex页面
                 *
                 * @param drawFormFieldList 字段列表
                 * @param key 面板标识
                 * @param name name
                 * @param type type
                 * @param diffMap diffMap
                 * @param view 视图
                 * @param fieldsetPanelAp 主页字段面板
                 * @return 面板
                 */
                redrawAdconAp(drawFormFieldList:$.java.util.List,key:string,name:string,type_arg:string,diffMap:$.java.util.Map,view:$.kd.bos.form.IFormView,fieldsetPanelAp:$.kd.bos.metadata.form.container.FlexPanelAp):$.kd.bos.metadata.form.container.FlexPanelAp;
                /**
                 * 组装flex页面
                 *
                 * @param drawFormFieldList 字段列表
                 * @param key 面板标识
                 * @param name name
                 * @param type type
                 * @param diffMap diffMap
                 * @param view 视图
                 * @param fieldsetPanelAp 主页字段面板
                 * @return 面板
                 */
                redrawAdconApForPic(dyArray:$.kd.bos.dataentity.entity.DynamicObject[],drawFormFieldList:$.java.util.List,key:string,name:string,type_arg:string,diffMap:$.java.util.Map,view:$.kd.bos.form.IFormView,fieldsetPanelAp:$.kd.bos.metadata.form.container.FlexPanelAp,dataid:long,groupNumber:string):$.kd.bos.metadata.form.container.FlexPanelAp;
                /**
                 * 组装flex页面
                 *
                 * @param dyArray           单据
                 * @param drawFormFieldList 字段列表
                 * @param key               面板标识
                 * @param groupNumber       信息组编码
                 * @param view              view
                 * @return 面板
                 */
                redrawAdconApMobile(dyArray:$.kd.bos.dataentity.entity.DynamicObject[],view:$.kd.bos.form.IFormView,drawFormFieldList:$.java.util.List,key:string,name:string,type_arg:string,dataid:long,groupNumber:string):$.kd.bos.metadata.form.container.FlexPanelAp;
                /**
                 * 组装flex页面
                 *
                 * @param dyArray 单据
                 * @param drawFormFieldList 字段列表
                 * @param key               面板标识
                 * @return 面板
                 */
                redrawAdconApMobileEdit(dyArray:$.kd.bos.dataentity.entity.DynamicObject[],view:$.kd.bos.form.IFormView,drawFormFieldList:$.java.util.List,key:string,name:string,type_arg:string,dataid:long,groupNumber:string,status:string):$.kd.bos.metadata.form.container.FlexPanelAp;
                /**
                 * 组装flex页面
                 *
                 * @param dyArray 单据
                 * @param drawFormFieldList 字段列表
                 * @param key               面板标识
                 * @return 面板
                 */
                redrawAdconApPCEdit(dyArray:$.kd.bos.dataentity.entity.DynamicObject[],view:$.kd.bos.form.IFormView,drawFormFieldList:$.java.util.List,key:string,name:string,type_arg:string,dataid:long,groupNumber:string,status:string):$.kd.bos.metadata.form.container.FlexPanelAp;
            }
            type FieldContainerViewService_T = FieldContainerViewService_S & FieldContainerViewService$;
            interface FieldContainerViewService extends FieldContainerViewService_T {
            }
            interface DynamicPanelUtils_S {
                /**
                 * 注册
                 *
                 * @param mainType mainType
                 * @param fieldList 字段list
                 */
                registDynamicProps(mainType:$.kd.bos.entity.MainEntityType,fieldList:$.java.util.List):void;
                /**
                 * 注册
                 *
                 * @param mainType mainType
                 * @param fieldList 字段list
                 * @param pageCache 动态对象
                 */
                registMobileDynamicProps(mainType:$.kd.bos.entity.MainEntityType,fieldList:$.java.util.List,pageCache:$.kd.bos.form.IPageCache):void;
            }
            interface DynamicPanelUtils_C extends DynamicPanelUtils_S {
                new():DynamicPanelUtils;
            }
            interface DynamicPanelUtils$ {
            }
            type DynamicPanelUtils_T = DynamicPanelUtils_S & DynamicPanelUtils$;
            interface DynamicPanelUtils extends DynamicPanelUtils_T {
            }
        }
        namespace kd.sdk.hr.hspm.formplugin.web.file.ermanfile.ext.template{
            interface ManagePCFullFormDrawEdit_S {
            }
            type ManagePCFullFormDrawEdit_ST = kd.sdk.hr.hspm.formplugin.web.file.ermanfile.base.AbstractFormDrawEdit_S & ManagePCFullFormDrawEdit_S;
            interface ManagePCFullFormDrawEdit_C extends ManagePCFullFormDrawEdit_ST {
                new():ManagePCFullFormDrawEdit;
            }
            interface ManagePCFullFormDrawEdit$ {
            }
            type ManagePCFullFormDrawEdit_T = kd.sdk.hr.hspm.formplugin.web.file.ermanfile.base.AbstractFormDrawEdit & ManagePCFullFormDrawEdit_S & ManagePCFullFormDrawEdit$;
            interface ManagePCFullFormDrawEdit extends ManagePCFullFormDrawEdit_T {
            }
        }
        namespace kd.sdk.hr.htm{
            interface SdkHRHtmModule_S {
            }
            type SdkHRHtmModule_ST = $.kd.sdk.module.Module & SdkHRHtmModule_S;
            interface SdkHRHtmModule_C extends SdkHRHtmModule_ST {
                new():SdkHRHtmModule;
            }
            interface SdkHRHtmModule$ {
            }
            type SdkHRHtmModule_T = $.kd.sdk.module.Module & SdkHRHtmModule_S & SdkHRHtmModule$;
            interface SdkHRHtmModule extends SdkHRHtmModule_T {
            }
        }
        namespace kd.sdk.hr.htm.business.mservice.helper{
            interface HTMQuitBillServiceHelper_S {
                /**
                 * 创建离职单据
                 *
                 * @param quitBillObjs 离职单据
                 * @return OperationResult
                 */
                createQuitBill(quitBillObjs:$.java.util.List):$.kd.bos.entity.operate.result.OperationResult;
                /**
                 * 通过id查询离职单
                 *
                 * @param billId 单据id
                 * @return 离职单map
                 */
                queryQuitBillById(billId:long):$.java.util.Map;
                /**
                 * 提交并生效离职单据
                 *
                 * @param quitBillObjs 离职单据
                 * @return OperationResult
                 */
                submitEffectiveQuitBill(quitBillObjs:$.java.util.List):$.kd.bos.entity.operate.result.OperationResult;
                /**
                 * 提交离职单据
                 *
                 * @param quitBillObjs 离职单据
                 * @param applyType 0代办申请，2员工申请
                 * @return OperationResult
                 */
                submitQuitBill(quitBillObjs:$.java.util.List,applyType:string):$.kd.bos.entity.operate.result.OperationResult;
            }
            interface HTMQuitBillServiceHelper_C extends HTMQuitBillServiceHelper_S {
                new():HTMQuitBillServiceHelper;
            }
            interface HTMQuitBillServiceHelper$ {
            }
            type HTMQuitBillServiceHelper_T = HTMQuitBillServiceHelper_S & HTMQuitBillServiceHelper$;
            interface HTMQuitBillServiceHelper extends HTMQuitBillServiceHelper_T {
            }
        }
    }
}
export {};