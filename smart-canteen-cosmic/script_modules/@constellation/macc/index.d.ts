/// <reference types="../../@cosmic/bos-script" />
declare global {
    namespace $ {
        namespace kd.sdk.macc.aca.extpoint{
            interface IActCostCalcLvlPlugin_S {
            }
            interface IActCostCalcLvlPlugin$ {
                /**
                 * 层级计算结束前执行
                 *
                 * @param index 层级
                 * @param calcJson 计算参数实体
                 * @param params 业务参数
                 */
                levelCalcAfter(index:number,calcJson:string,params:$.java.util.Map):void;
                /**
                 * 层级计算开始前执行
                 *
                 * @param index 层级
                 * @param calcJson 计算参数实体
                 * @param params 业务参数
                 */
                levelCalcBefore(index:number,calcJson:string,params:$.java.util.Map):void;
            }
            type IActCostCalcLvlPlugin_T = IActCostCalcLvlPlugin_S & IActCostCalcLvlPlugin$;
            interface IActCostCalcLvlPlugin extends IActCostCalcLvlPlugin_T {
            }
            interface IActCostCalcPlugin_S {
            }
            interface IActCostCalcPlugin$ {
                /**
                 * 成本计算结束时执行
                 *
                 * @param calcJson 计算参数实体
                 */
                costCalcAfter(calcJson:string):void;
                /**
                 * 成本计算开始前执行
                 *
                 * @param calcJson 计算参数实体
                 */
                costCalcBefore(calcJson:string):void;
            }
            type IActCostCalcPlugin_T = IActCostCalcPlugin_S & IActCostCalcPlugin$;
            interface IActCostCalcPlugin extends IActCostCalcPlugin_T {
            }
        }
        namespace kd.sdk.macc.cad.extpoint{
            interface IDealMatCostInfoAfterUpdate_S {
            }
            interface IDealMatCostInfoAfterUpdate$ {
                /**
                 * 成本更新后，处理物料成本信息
                 * @param matCostIds 物料成本信息ID集合
                 * @return 返回值为false时，会对本次更新的事务进行回滚，扩展插件处理成功返回true
                 */
                dealMatCostInfoByIds(matCostIds:$.java.util.List):boolean;
            }
            type IDealMatCostInfoAfterUpdate_T = IDealMatCostInfoAfterUpdate_S & IDealMatCostInfoAfterUpdate$;
            interface IDealMatCostInfoAfterUpdate extends IDealMatCostInfoAfterUpdate_T {
            }
        }
    }
}
export {};