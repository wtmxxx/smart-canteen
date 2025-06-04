/// <reference types="../../@cosmic/bos-script" />
/// <reference types="../../@cosmic/bos-core" />
declare global {
    namespace $ {
        namespace kd.sdk.odc.haos{
            interface SdkOdcHaosModule_S {
            }
            type SdkOdcHaosModule_ST = $.kd.sdk.module.Module & SdkOdcHaosModule_S;
            interface SdkOdcHaosModule_C extends SdkOdcHaosModule_ST {
                new():SdkOdcHaosModule;
            }
            interface SdkOdcHaosModule$ {
            }
            type SdkOdcHaosModule_T = $.kd.sdk.module.Module & SdkOdcHaosModule_S & SdkOdcHaosModule$;
            interface SdkOdcHaosModule extends SdkOdcHaosModule_T {
            }
        }
        namespace kd.sdk.odc.haos.service{
            interface IAdminOrgSDKService_S {
                get():IAdminOrgSDKService;
            }
            interface IAdminOrgSDKService$ {
                AdminOrgMethodDemo(arg0:$.java.util.Set):$.java.util.List;
            }
            type IAdminOrgSDKService_T = IAdminOrgSDKService_S & IAdminOrgSDKService$;
            interface IAdminOrgSDKService extends IAdminOrgSDKService_T {
            }
        }
        namespace kd.sdk.odc.hbpm{
            interface SdkOdcHbpmModule_S {
            }
            type SdkOdcHbpmModule_ST = $.kd.sdk.module.Module & SdkOdcHbpmModule_S;
            interface SdkOdcHbpmModule_C extends SdkOdcHbpmModule_ST {
                new():SdkOdcHbpmModule;
            }
            interface SdkOdcHbpmModule$ {
            }
            type SdkOdcHbpmModule_T = $.kd.sdk.module.Module & SdkOdcHbpmModule_S & SdkOdcHbpmModule$;
            interface SdkOdcHbpmModule extends SdkOdcHbpmModule_T {
            }
        }
        namespace kd.sdk.odc.hbpm.service{
            interface IPositionSDKService_S {
                get():IPositionSDKService;
            }
            interface IPositionSDKService$ {
                positionMethodDemo(arg0:$.java.util.Set):$.java.util.List;
            }
            type IPositionSDKService_T = IPositionSDKService_S & IPositionSDKService$;
            interface IPositionSDKService extends IPositionSDKService_T {
            }
        }
    }
}
export {};