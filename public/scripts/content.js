// const article = document.querySelector("input");
// article.value = "neal"

// const surname = document.querySelector("#surname")
// surname.value = "smith"

// const email = document.querySelector("#email")
// email.value = "xxx@outlook.com"




// 监听消息
// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener(function (message) {
    console.log("this is message ", message)
    // 判断消息类型为"inputText"，并且有要输入的字符串值
    if (message.type === "inputText" && message.inputValue) {
        // 查找指定的input元素
        // var inputElement = document.getElementById("myInputId");
        // if (inputElement) {
        //     // 在input元素中输入指定的字符串值
        //     inputElement.value = message.inputValue;
        // }

        const article = document.querySelector("input");
        article.value = message.name

        const surname = document.querySelector("#surname")
        surname.value = message.surname

        const email = document.querySelector("#email")
        email.value = message.email
    }
});
