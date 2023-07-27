// 獲取公告表單元素
const announcementForm = document.querySelector('#announcement-form');

// 獲取公告列表元素
const announcementList = document.querySelector('#announcement-list');

// 添加公告的事件監聽器
announcementForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // 獲取表單字段的值
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const date = document.querySelector('#date').value;
    const author = document.querySelector('#author').value;

    // 創建新的公告项
    const announcementItem = document.createElement('li');
    announcementItem.innerHTML = `
    <h3>標題:${title}</h3>
    <p>內容:${content}</p>
    <small>日期：${date}</small>
    <small>作者：${author}</small>
  `;

    // 將公告加到公告列表中
    announcementList.appendChild(announcementItem);

    // 重置表單字段的值
    announcementForm.reset();
});