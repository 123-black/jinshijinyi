document.addEventListener('DOMContentLoaded', function() {
    // 获取所有美食项目
    const foodItems = document.querySelectorAll('.food-item');
    
    // 获取筛选按钮
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // 获取搜索框和搜索按钮
    const searchInput = document.getElementById('food-search');
    const searchButton = document.getElementById('search-btn');
    
    // 获取无结果提示
    const noResultMessage = document.getElementById('no-result');
    
    // 当前选中的分类
    let currentCategory = 'all';
    
    // 当前搜索关键词
    let currentSearchTerm = '';
    
    // 筛选按钮点击事件
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 添加active类到当前按钮
            this.classList.add('active');
            
            // 更新当前分类
            currentCategory = this.getAttribute('data-category');
            
            // 执行筛选
            filterFoodItems();
        });
    });
    
    // 搜索按钮点击事件
    searchButton.addEventListener('click', function() {
        currentSearchTerm = searchInput.value.trim().toLowerCase();
        filterFoodItems();
    });
    
    // 搜索框回车事件
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            currentSearchTerm = searchInput.value.trim().toLowerCase();
            filterFoodItems();
        }
    });
    
    // 初始显示所有美食
    filterFoodItems();
    
    // 筛选美食项目的函数
    function filterFoodItems() {
        let visibleCount = 0;
        
        foodItems.forEach(item => {
            // 获取分类
            const category = item.getAttribute('data-category');
            
            // 获取标题和描述文本用于搜索
            const title = item.querySelector('h3').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();
            const meta = item.querySelector('.food-meta').textContent.toLowerCase();
            const searchText = title + ' ' + description + ' ' + meta;
            
            // 分类筛选条件
            const matchesCategory = currentCategory === 'all' || category === currentCategory;
            
            // 搜索筛选条件
            const matchesSearch = currentSearchTerm === '' || searchText.includes(currentSearchTerm);
            
            // 同时满足分类和搜索条件
            if (matchesCategory && matchesSearch) {
                item.style.display = 'flex';
                visibleCount++;
                
                // 添加淡入动画
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.transition = 'opacity 0.5s ease';
                    item.style.opacity = '1';
                }, 10);
            } else {
                item.style.display = 'none';
            }
        });
        
        // 显示或隐藏无结果提示
        if (visibleCount === 0) {
            noResultMessage.style.display = 'block';
        } else {
            noResultMessage.style.display = 'none';
        }
    }
    
    // 添加滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // 为每个美食项目添加观察者
    foodItems.forEach(item => {
        // 添加初始隐藏类
        item.classList.add('food-item-hidden');
        observer.observe(item);
    });
    
    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        .food-item-hidden {
            opacity: 0;
            transform: translateY(30px);
        }
        
        .food-item.visible {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
    `;
    document.head.appendChild(style);
}); 