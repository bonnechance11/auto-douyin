//解锁手机，可以通过用判断键盘密码数字位置实现自动解锁（个人手机没有找准无法实现，只能在解锁状态下自动运行）
function unLockPhone() {
    // 保持屏幕常亮
    device.keepScreenOn();

    // 检查屏幕是否已经亮起，若已亮起则跳过锁屏步骤
    if (!device.isScreenOn()) {
        lockScreen();
        sleep(1000);
    }
    // 亮屏+输入密码
    device.wakeUp();
    sleep(1000);

    ];

    for (var i = 0; i < coordinates.length; i++) {
        sleep(500);
        press(coordinates[i].x, coordinates[i].y, 400);
    }
    //---------------------------
    sleep(2000);
}

// 打开抖音
function open_douyin() {
    app.launch("com.ss.android.ugc.aweme");
    sleep(8000);
    // 如果已经在消息页面了，就不点击了，否则点击消息
    if (!text("互动消息").exists()) {
        log("点击消息");
        while (!click("消息"));
    }
    log("已经进入消息页面");
    sleep(2000);
}

function setmess(babyname) {
    // 点击人名
    while (!click(babyname)) {
        log("点击" + babyname + "失败，正在重试...");
        sleep(1000);
    }
    log("点击" + babyname + "成功");
    sleep(1000);

    // 等待输入框
    var a = className("android.widget.EditText").id("msg_et").findOne(5000);
    if (a) {
        log("输入框已加载，开始打字");
        var currentTime = new Date();
        var luckything = [
            "啦啦啦啦啦。",
            "孩子活了。",
            "哈哈哈我是卖报的小行家",
            "有时候我会忘记但是它不会忘"
        ];
        var randomNumber = Math.floor(Math.random() * 4);
        var mes = "续火花test:\n" + luckything[randomNumber] + "\n\n" + "打卡时间：" + String(currentTime) + "💪💪💪";
        a.setText(mes);
        sleep(1000);
    } else {
        log("输入框未加载，尝试重新点击");
        return;  // 如果输入框没有加载出来，直接退出
    }
// 尝试使用描述查找
var sendButton = desc("发送").findOne(5000);  // 等待5秒
if (sendButton && sendButton.clickable()) {
    sendButton.click();
    log("消息已发送");
} else {
    log("发送按钮不可点击");
}
    sleep(2000); // 等待消息发送
   // 左滑的起始和终止位置
   // 从左边缘滑动到右边缘，保持一定时间
   swipe(0, 1000, 1080 - 100, 1000, 1500);  // 从屏幕的左侧（x=100）滑动到右侧（x=屏幕宽度-100），持续1500ms
   sleep(2500);  // 等待返回操作完成
   log("已从左边缘滑动到右边缘");
}


// ------- main -------
device.keepScreenOn();  // 确保屏幕常亮
unLockPhone();
open_douyin();
setmess("朋友名字");
sleep(3000);
home();
sleep(1000);
