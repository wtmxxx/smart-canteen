/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.sdk.mmc.mrp{
            interface IMRPSDKEnv_S {
            }
            interface IMRPSDKEnv$ {
                fetchRow(arg0:number,arg1:kd.sdk.mmc.mrp.framework.res.IResModelDataTable):kd.sdk.mmc.mrp.framework.res.IRowData;
                fetchRow(arg0:$.java.util.Collection,arg1:kd.sdk.mmc.mrp.framework.res.IResModelDataTable):$.java.util.List;
                getMRPContextId():string;
                getPlan():$.kd.bos.dataentity.entity.DynamicObject;
                getPlanId():long;
                getPlanOrgId():long;
                getRunLog():$.kd.bos.dataentity.entity.DynamicObject;
                getRunLogNumber():string;
                getRunMode():string;
            }
            type IMRPSDKEnv_T = IMRPSDKEnv_S & IMRPSDKEnv$;
            interface IMRPSDKEnv extends IMRPSDKEnv_T {
            }
            interface SdkMmcMrpModule_S {
            }
            type SdkMmcMrpModule_ST = $.kd.sdk.module.Module & SdkMmcMrpModule_S;
            interface SdkMmcMrpModule_C extends SdkMmcMrpModule_ST {
                new():SdkMmcMrpModule;
            }
            interface SdkMmcMrpModule$ {
            }
            type SdkMmcMrpModule_T = $.kd.sdk.module.Module & SdkMmcMrpModule_S & SdkMmcMrpModule$;
            interface SdkMmcMrpModule extends SdkMmcMrpModule_T {
            }
        }
        namespace kd.sdk.mmc.mrp.extpoint{
            interface IMRPCalcNetDemandPlugin_S {
            }
            interface IMRPCalcNetDemandPlugin$ {
                afterCalcOrderDate?(arg0:IMRPSDKEnv,arg1:kd.sdk.mmc.mrp.framework.res.IRowData,arg2:$.java.math.BigDecimal):void;
                afterDependRequireDateCalc?(arg0:IMRPSDKEnv,arg1:long,arg2:kd.sdk.mmc.mrp.framework.res.IRowData,arg3:kd.sdk.mmc.mrp.framework.res.IRowData,arg4:kd.sdk.mmc.mrp.framework.res.IRowData,arg5:number):void;
                beforeSingleModifyOccupy?(arg0:IMRPSDKEnv,arg1:kd.sdk.mmc.mrp.framework.res.IRowData):void;
                getRequirePriorityLevel?(arg0:IMRPSDKEnv,arg1:kd.sdk.mmc.mrp.framework.res.IResModelDataTable,arg2:number,arg3:number):number;
                initRequireData?(arg0:IMRPSDKEnv,arg1:kd.sdk.mmc.mrp.framework.res.IRowData):void;
                initSupplyDatas?(arg0:IMRPSDKEnv,arg1:kd.sdk.mmc.mrp.framework.res.IResModelDataTable):void;
                isExceptionRequire?(arg0:IMRPSDKEnv,arg1:kd.sdk.mmc.mrp.framework.res.IRowData,arg2:string[]):boolean;
                isMatchSupply?(arg0:IMRPSDKEnv,arg1:kd.sdk.mmc.mrp.framework.res.IRowData,arg2:kd.sdk.mmc.mrp.framework.res.IRowData):boolean;
                putRequireDetail?(arg0:IMRPSDKEnv,arg1:$.java.util.Map,arg2:kd.sdk.mmc.mrp.framework.res.IRowData,arg3:boolean,arg4:number):void;
                putSupplyDetail?(arg0:IMRPSDKEnv,arg1:$.java.util.Map,arg2:kd.sdk.mmc.mrp.framework.res.IRowData,arg3:number):void;
                reCalcNetDemandQty?(arg0:IMRPSDKEnv,arg1:kd.sdk.mmc.mrp.framework.res.IRowData,arg2:$.java.math.BigDecimal,arg3:$.java.util.List):$.java.math.BigDecimal;
                sortSupplyByRequire?(arg0:IMRPSDKEnv,arg1:kd.sdk.mmc.mrp.framework.res.IResModelDataTable,arg2:$.java.util.List,arg3:kd.sdk.mmc.mrp.framework.res.IRowData):$.java.util.List;
                updateDependRequire?(arg0:IMRPSDKEnv,arg1:kd.sdk.mmc.mrp.framework.res.IRowData,arg2:kd.sdk.mmc.mrp.framework.res.IRowData,arg3:kd.sdk.mmc.mrp.framework.res.IRowData):void;
                updateFabPOEntry?(arg0:IMRPSDKEnv,arg1:$.java.util.Map,arg2:kd.sdk.mmc.mrp.framework.res.IRowData):void;
                updatePoHead?(arg0:IMRPSDKEnv,arg1:$.java.util.Map,arg2:kd.sdk.mmc.mrp.framework.res.IRowData):void;
            }
            type IMRPCalcNetDemandPlugin_T = IMRPCalcNetDemandPlugin_S & IMRPCalcNetDemandPlugin$;
            interface IMRPCalcNetDemandPlugin extends IMRPCalcNetDemandPlugin_T {
            }
            interface IMRPClearHistoryDataPlugin_S {
            }
            interface IMRPClearHistoryDataPlugin$ {
                getCollaborativeOrderClearFilters?(arg0:IMRPSDKEnv,arg1:$.java.util.List):$.kd.bos.orm.query.QFilter[];
                getPlanOrderClearFilters?(arg0:IMRPSDKEnv,arg1:$.java.util.List):$.kd.bos.orm.query.QFilter[];
            }
            type IMRPClearHistoryDataPlugin_T = IMRPClearHistoryDataPlugin_S & IMRPClearHistoryDataPlugin$;
            interface IMRPClearHistoryDataPlugin extends IMRPClearHistoryDataPlugin_T {
            }
            interface IMRPInitBomDataPlugin_S {
            }
            interface IMRPInitBomDataPlugin$ {
                updateBomData(arg0:kd.sdk.mmc.mrp.framework.res.IResModelDataTable):void;
            }
            type IMRPInitBomDataPlugin_T = IMRPInitBomDataPlugin_S & IMRPInitBomDataPlugin$;
            interface IMRPInitBomDataPlugin extends IMRPInitBomDataPlugin_T {
            }
            interface IMRPMaterialPlanPlugin_S {
            }
            interface IMRPMaterialPlanPlugin$ {
                getMaterialPlanExtQueryField():string;
            }
            type IMRPMaterialPlanPlugin_T = IMRPMaterialPlanPlugin_S & IMRPMaterialPlanPlugin$;
            interface IMRPMaterialPlanPlugin extends IMRPMaterialPlanPlugin_T {
            }
        }
        namespace kd.sdk.mmc.mrp.framework.enums{
            enum SdkResType {
                BOM,
                REQUIRE,
                SUPPLY,
                RESERVE
            }
        }
        namespace kd.sdk.mmc.mrp.framework.res{
            interface IResModelDataTable_S {
            }
            interface IResModelDataTable$ {
                fetchRow(arg0:number):IRowData;
                fetchRow(arg0:$.java.util.Collection):$.java.util.List;
                size():number;
                updateValue(arg0:string,arg1:number,arg2:any):void;
            }
            type IResModelDataTable_T = IResModelDataTable_S & IResModelDataTable$;
            interface IResModelDataTable extends IResModelDataTable_T {
            }
            interface IRowData_S {
            }
            interface IRowData$ {
                get(arg0:number):any;
                get(arg0:string):any;
                getBigDecimal(arg0:number):$.java.math.BigDecimal;
                getBigDecimal(arg0:string):$.java.math.BigDecimal;
                getBoolean(arg0:number):boolean;
                getBoolean(arg0:string):boolean;
                getDate(arg0:number):Date;
                getDate(arg0:string):Date;
                getDouble(arg0:number):number;
                getDouble(arg0:string):number;
                getInteger(arg0:number):number;
                getInteger(arg0:string):number;
                getLong(arg0:number):long;
                getLong(arg0:string):long;
                getRowIdx():number;
                getSdkResType():kd.sdk.mmc.mrp.framework.enums.SdkResType;
                getString(arg0:number):string;
                getString(arg0:string):string;
                getTimestamp(arg0:number):Date;
                getTimestamp(arg0:string):Date;
                getValue(arg0:string):any;
                getValues():any[];
                update(arg0:number,arg1:any):void;
                update(arg0:string,arg1:any):void;
                updateAll(arg0:any[]):void;
            }
            type IRowData_T = IRowData_S & IRowData$;
            interface IRowData extends IRowData_T {
            }
        }
    }
}
export {};