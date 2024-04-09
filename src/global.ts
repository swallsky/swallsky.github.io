/**
 * 复制代码到粘贴板
 * @param {Event} event 事件对象
 */
function CopyCode(t:any) {
    const code = t.parentNode.querySelector("code").innerText;
    const input = document.createElement('input');
    input.value = code;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('代码已复制到粘贴板');
}
// 导出函数到全局作用域
window["CopyCode"] = CopyCode;