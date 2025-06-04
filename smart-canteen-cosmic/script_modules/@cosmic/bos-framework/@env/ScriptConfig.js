export const Config = {
    preheat: ['@cosmic/bos-framework/@env/preheat'],
    debug: false,
    logConfig: function () {
        if (this.debug) {
            console.log('启用调试模式运行脚本...');
        }
        else {
            console.log('启用正常模式运行脚本...');
        }
        console.log("引擎预热脚本: ", this.preheat);
    }
};
