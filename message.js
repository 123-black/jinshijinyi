document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('message-form');
    const messageList = document.getElementById('message-list');
    
    // 示例留言数据
    const sampleMessages = [
        {
            author: '张三',
            time: '2023-05-15',
            content: '每次回天津，一定要去吃耳朵眼炸糕，那个味道满满都是童年的回忆！'
        },
        {
            author: '李四',
            time: '2023-05-10',
            content: '上次去天津旅游，尝了正宗的狗不理包子，果然名不虚传，皮薄馅大，吃一口满嘴喷香！'
        },
        {
            author: '王五',
            time: '2023-05-03',
            content: '天津麻花脆香可口，一定要趁热吃，最好配上一杯热茶，绝配！'
        },
        {
            author: '赵六',
            time: '2023-04-28',
            content: '我外婆是天津人，每次她做煎饼果子都特别香，这次去天津专门去吃了正宗的煎饼果子，果然不一样！'
        },
        {
            author: '刘大妈',
            time: '2023-04-20',
            content: '年轻时在天津食品厂工作过，亲手做过桂发祥麻花，现在退休了，看到这个网站特别亲切，希望老字号能一直传承下去。'
        }
    ];
    
    // 添加更多留言到页面
    function addMoreMessages() {
        // 清空留言列表
        messageList.innerHTML = '';
        
        // 添加所有示例留言
        sampleMessages.forEach(message => {
            addMessageToList(message.author, message.time, message.content);
        });
    }
    
    // 添加留言到列表
    function addMessageToList(author, time, content) {
        const messageItem = document.createElement('div');
        messageItem.className = 'message-item';
        
        messageItem.innerHTML = `
            <div class="message-header">
                <span class="message-author">${author}</span>
                <span class="message-time">${time}</span>
            </div>
            <div class="message-content">
                ${content}
            </div>
        `;
        
        // 将新留言添加到列表顶部
        messageList.insertBefore(messageItem, messageList.firstChild);
    }
    
    // 处理表单提交
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // 获取表单数据
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && message) {
            // 获取当前日期
            const now = new Date();
            const formattedDate = now.getFullYear() + '-' + 
                                 ('0' + (now.getMonth() + 1)).slice(-2) + '-' + 
                                 ('0' + now.getDate()).slice(-2);
            
            // 添加新留言到列表
            addMessageToList(name, formattedDate, message);
            
            // 清空表单
            messageForm.reset();
            
            // 显示成功消息
            alert('留言提交成功！');
        }
    });
    
    // 初始化页面时加载更多留言
    addMoreMessages();
    
    // 辅助函数：数字补零
    function padZero(num) {
        return num < 10 ? '0' + num : num;
    }
    
    // 将留言保存到本地存储
    function saveMessage(message) {
        let messages = JSON.parse(localStorage.getItem('tianjinFoodMessages')) || [];
        messages.unshift(message); // 将新消息添加到数组开头
        localStorage.setItem('tianjinFoodMessages', JSON.stringify(messages));
    }
    
    // 从本地存储加载留言
    function loadMessages() {
        // 检查是否有本地存储的留言
        const storedMessages = JSON.parse(localStorage.getItem('tianjinFoodMessages')) || [];
        
        // 如果有存储的留言，清空当前显示的留言并加载存储的留言
        if (storedMessages.length > 0 && messageList) {
            messageList.innerHTML = '';
            storedMessages.forEach(message => {
                addMessageToDOM(message);
            });
        }
    }
    
    // 将留言添加到DOM
    function addMessageToDOM(message) {
        if (!messageList) return;
        
        const messageItem = document.createElement('div');
        messageItem.className = 'message-item';
        
        messageItem.innerHTML = `
            <div class="message-header">
                <span class="message-author">${escapeHTML(message.author)}</span>
                <span class="message-time">${message.time}</span>
            </div>
            <div class="message-content">
                ${escapeHTML(message.content)}
            </div>
        `;
        
        // 如果已经有留言，插入到第一条前面
        if (messageList.firstChild) {
            messageList.insertBefore(messageItem, messageList.firstChild);
        } else {
            messageList.appendChild(messageItem);
        }
        
        // 添加一个淡入动画
        messageItem.style.opacity = '0';
        setTimeout(() => {
            messageItem.style.transition = 'opacity 0.5s ease';
            messageItem.style.opacity = '1';
        }, 10);
    }
    
    // 显示通知
    function showNotification(message) {
        // 创建通知元素
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // 添加到页面
        document.body.appendChild(notification);
        
        // 添加显示类
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // 设置自动移除
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // HTML转义，防止XSS攻击
    function escapeHTML(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
    
    // 添加通知样式
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: -60px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--primary-color);
            color: white;
            padding: 15px 25px;
            border-radius: 4px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            transition: bottom 0.3s ease;
            z-index: 1000;
        }
        
        .notification.show {
            bottom: 20px;
        }
    `;
    document.head.appendChild(style);
}); 