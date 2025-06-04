/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.sdk.epm.bgmd.util.base{
            interface AbstractUtils_S {
            }
            interface AbstractUtils_C extends AbstractUtils_S {
                new():AbstractUtils;
            }
            interface AbstractUtils$ {
            }
            type AbstractUtils_T = AbstractUtils_S & AbstractUtils$;
            interface AbstractUtils extends AbstractUtils_T {
            }
        }
        namespace kd.sdk.epm.bgmd.util.f7{
            interface F7Utils_S {
                readonly log:$.kd.bos.logging.Log;
                get():F7Utils;
            }
            type F7Utils_ST = kd.sdk.epm.bgmd.util.f7.impl.AbstractUtils_S & kd.sdk.epm.bgmd.util.f7.face.IF7_S & F7Utils_S;
            interface F7Utils_C extends F7Utils_ST {
                new():F7Utils;
            }
            interface F7Utils$ {
            }
            type F7Utils_T = kd.sdk.epm.bgmd.util.f7.impl.AbstractUtils & kd.sdk.epm.bgmd.util.f7.face.IF7 & F7Utils_S & F7Utils$;
            interface F7Utils extends F7Utils_T {
            }
            interface F8Utils_S {
                readonly log:$.kd.bos.logging.Log;
                get():F8Utils;
            }
            type F8Utils_ST = kd.sdk.epm.bgmd.util.f7.impl.AbstractUtils_S & kd.sdk.epm.bgmd.util.f7.face.IF8_S & F8Utils_S;
            interface F8Utils_C extends F8Utils_ST {
                new():F8Utils;
            }
            interface F8Utils$ {
            }
            type F8Utils_T = kd.sdk.epm.bgmd.util.f7.impl.AbstractUtils & kd.sdk.epm.bgmd.util.f7.face.IF8 & F8Utils_S & F8Utils$;
            interface F8Utils extends F8Utils_T {
            }
            interface F7Parameter_S {
            }
            interface F7Parameter_C extends F7Parameter_S {
                new():F7Parameter;
            }
            interface F7Parameter$ {
                getBusModelId():long;
                getCusRange():$.java.util.List;
                getDatasetIds():$.java.util.List;
                getDimensionId():long;
                getFilters():$.java.util.List;
                getModelId():long;
                getRangeType():number;
                getSelectIds():$.java.util.Map;
                isCanSelectRoot():boolean;
                isMultiSelect():boolean;
                isOnlySelLeaf():boolean;
                isVerifyPermission():boolean;
                setBusModelId(busModelId:long):void;
                setCanSelectRoot(canSelectRoot:boolean):void;
                setCusRange(cusRange:$.java.util.List):void;
                setDatasetIds(datasetIds:$.java.util.List):void;
                setDimensionId(dimensionId:long):void;
                setFilters(filters:$.java.util.List):void;
                setModelId(modelId:long):void;
                setMultiSelect(multiSelect:boolean):void;
                setOnlySelLeaf(onlySelLeaf:boolean):void;
                setRangeType(rangeType:number):void;
                setSelectIds(selectIds:$.java.util.Map):void;
                setVerifyPermission(verifyPermission:boolean):void;
            }
            type F7Parameter_T = F7Parameter_S & F7Parameter$;
            interface F7Parameter extends F7Parameter_T {
            }
        }
        namespace kd.sdk.epm.bgmd.util.f7.face{
            interface IF8_S {
            }
            interface IF8$ {
                /**
                 * 描述：打开一个维度成员范围选择界面
                 * @param evt BeforeF7SelectEvent
                 * @param closeCallBack 回调参数
                 * @param f7Param f7参数
                 */
                openF8(evt:$.kd.bos.form.field.events.BeforeF7SelectEvent,closeCallBack:$.kd.bos.form.CloseCallBack,f7Param:F7Parameter):void;
                /**
                 * 描述：打开一个维度成员范围选择界面
                 * @param view formView
                 * @param closeCallBack 回调参数
                 * @param f7Param f7参数
                 */
                openF8(view:$.kd.bos.form.IFormView,closeCallBack:$.kd.bos.form.CloseCallBack,f7Param:F7Parameter):void;
            }
            type IF8_T = IF8_S & IF8$;
            interface IF8 extends IF8_T {
            }
            interface IF7_S {
            }
            interface IF7$ {
                /**
                 * 描述：打开一个单选或者多选的维度成员界面
                 * @param evt BeforeF7SelectEvent
                 * @param closeCallBack 回调参数
                 * @param f7Param f7参数
                 */
                openF7(evt:$.kd.bos.form.field.events.BeforeF7SelectEvent,closeCallBack:$.kd.bos.form.CloseCallBack,f7Param:F7Parameter):void;
                /**
                 * 描述：打开一个单选或者多选的维度成员界面
                 * @param view IFormView
                 * @param closeCallBack 回调参数
                 * @param f7Param f7参数
                 */
                openF7(view:$.kd.bos.form.IFormView,closeCallBack:$.kd.bos.form.CloseCallBack,f7Param:F7Parameter):void;
            }
            type IF7_T = IF7_S & IF7$;
            interface IF7 extends IF7_T {
            }
        }
        namespace kd.sdk.epm.bgmd.util.f7.impl{
            interface AbstractUtils_S {
            }
            interface AbstractUtils_C extends AbstractUtils_S {
                new():AbstractUtils;
            }
            interface AbstractUtils$ {
                getDefault(modelId:long,dimensionId:long,busModelId:long,datasetIds:$.java.util.List):F7Parameter;
                getDefault(modelId:long,dimensionNumber:string,busModelId:long,datasetIds:$.java.util.List):F7Parameter;
            }
            type AbstractUtils_T = AbstractUtils_S & AbstractUtils$;
            interface AbstractUtils extends AbstractUtils_T {
            }
        }
        namespace kd.sdk.epm.bgmd.util.model{
            interface BusinessModelUtils_S {
                readonly BUSINESS_MODEL_ENTITY:string;
                readonly BUSINESS_MODEL_FIELDS:string;
                readonly BUSINESS_MODEL_FIELDS_DIMS:string;
                getBusModel(busModelId:long,fields:string):$.kd.bos.dataentity.entity.DynamicObject;
                getBusModel(modelId:long,busModelNumber:string,fields:string):$.kd.bos.dataentity.entity.DynamicObject;
                getBusModels(modelId:long,fields:string):$.kd.bos.dataentity.entity.DynamicObjectCollection;
            }
            type BusinessModelUtils_ST = kd.sdk.epm.bgmd.util.base.AbstractUtils_S & BusinessModelUtils_S;
            interface BusinessModelUtils_C extends BusinessModelUtils_ST {
                new():BusinessModelUtils;
            }
            interface BusinessModelUtils$ {
            }
            type BusinessModelUtils_T = kd.sdk.epm.bgmd.util.base.AbstractUtils & BusinessModelUtils_S & BusinessModelUtils$;
            interface BusinessModelUtils extends BusinessModelUtils_T {
            }
            interface DimensionUtils_S {
                readonly DIMENSION_ENTITY:string;
                readonly DIMENSION_FIELDS:string;
                /**
                 * 描述：根据预算体系id及维度id返回维度对象
                 * @param modelId 体系id
                 * @param dimensionId 维度Id
                 * @param fields 维度属性字段
                 * @return 维度对象
                 * @Date：2023/7/6
                 * @version：1.0
                 * @Description：根据预算体系id及维度id返回维度对象
                 */
                getDimension(modelId:long,dimensionId:long,fields:string):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 描述：返回指定编码的维度对象
                 * @param modelId 体系id
                 * @param dimensionNumber 维度编码
                 * @param fields 维度属性字段
                 * @return 维度对象
                 * @Date：2023/7/6
                 * @version：1.0
                 * @Description：返回指定编码的维度对象
                 */
                getDimension(modelId:long,dimensionNumber:string,fields:string):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 描述：返回指定编码的维度id（如果查询不到维度则返回null）
                 * @param modelId 体系id
                 * @param dimensionNumber 维度编码
                 * @return 维度id
                 * @Date：2023/7/6
                 * @version：1.0
                 * @Description：根据体系id及维度编码返回维度id
                 */
                getDimensionId(modelId:long,dimensionNumber:string):long;
            }
            type DimensionUtils_ST = kd.sdk.epm.bgmd.util.base.AbstractUtils_S & DimensionUtils_S;
            interface DimensionUtils_C extends DimensionUtils_ST {
                new():DimensionUtils;
            }
            interface DimensionUtils$ {
            }
            type DimensionUtils_T = kd.sdk.epm.bgmd.util.base.AbstractUtils & DimensionUtils_S & DimensionUtils$;
            interface DimensionUtils extends DimensionUtils_T {
            }
            interface DatasetUtils_S {
                readonly DATASET_ENTITY:string;
                readonly DATASET_FIELDS:string;
                getDataset(datasetId:long,fields:string):$.kd.bos.dataentity.entity.DynamicObject;
                getDatasets(modelId:long,busModelId:long,fields:string):$.kd.bos.dataentity.entity.DynamicObjectCollection;
            }
            type DatasetUtils_ST = kd.sdk.epm.bgmd.util.base.AbstractUtils_S & DatasetUtils_S;
            interface DatasetUtils_C extends DatasetUtils_ST {
                new():DatasetUtils;
            }
            interface DatasetUtils$ {
            }
            type DatasetUtils_T = kd.sdk.epm.bgmd.util.base.AbstractUtils & DatasetUtils_S & DatasetUtils$;
            interface DatasetUtils extends DatasetUtils_T {
            }
            interface MemberUtils_S {
                readonly MEMBER_FIELDS:string;
                /**
                 * 描述：根据预算体系Id、维度Id，维度成员编码返回维度成员对象（最大返回5000个维度成员）
                 * @param modelId 预算体系Id
                 * @param dimensionId 维度Id
                 * @param memberNumbers 维度成员编码
                 * @param fields 维度成员属性字段
                 * @return 维度成员对象
                 */
                getMembers(modelId:long,dimensionId:long,memberNumbers:$.java.util.Collection,fields:string):$.kd.bos.dataentity.entity.DynamicObjectCollection;
            }
            type MemberUtils_ST = kd.sdk.epm.bgmd.util.base.AbstractUtils_S & MemberUtils_S;
            interface MemberUtils_C extends MemberUtils_ST {
                new():MemberUtils;
            }
            interface MemberUtils$ {
            }
            type MemberUtils_T = kd.sdk.epm.bgmd.util.base.AbstractUtils & MemberUtils_S & MemberUtils$;
            interface MemberUtils extends MemberUtils_T {
            }
            interface CubeUtils_S {
                readonly MODEL_ENTITY:string;
                readonly MODEL_FIELDS:string;
                readonly log:$.kd.bos.logging.Log;
                /**
                 * 描述：根据预算体系编码返回预算体系对象
                 * @param modelNumbers 预算体系编码
                 * @return 预算体系对象
                 * @Date：2023/7/6
                 * @version：1.0
                 * @Description：预算体系对象
                 */
                getModel(...modelNumbers:string[]):$.kd.bos.dataentity.entity.DynamicObjectCollection;
                /**
                 * 描述：根据预算体系Id返回预算模型对象
                 * @param modelId 预算体系Id
                 * @return 预算体系对象
                 * @Date：2023/7/6
                 * @version：1.0
                 * @Description：预算体系对象
                 */
                getModel(modelId:long,fields:string):$.kd.bos.dataentity.entity.DynamicObject;
                /**
                 * 描述：根据用户返回有权限的体系集合
                 * @param userNumber 用户编码
                 * @return 体系集合
                 */
                getModels(fields:string,userNumber:string):$.kd.bos.dataentity.entity.DynamicObjectCollection;
            }
            type CubeUtils_ST = kd.sdk.epm.bgmd.util.base.AbstractUtils_S & CubeUtils_S;
            interface CubeUtils_C extends CubeUtils_ST {
                new():CubeUtils;
            }
            interface CubeUtils$ {
            }
            type CubeUtils_T = kd.sdk.epm.bgmd.util.base.AbstractUtils & CubeUtils_S & CubeUtils$;
            interface CubeUtils extends CubeUtils_T {
            }
        }
    }
}
export {};