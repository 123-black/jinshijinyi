document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    if (!slides.length) return;
    
    // 确保轮播点数量与幻灯片数量一致
    const dotsContainer = document.querySelector('.slider-dots');
    
    // 清除所有现有的点，防止可能的重复
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        
        // 重新创建正确数量的点
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('data-index', i);
            dotsContainer.appendChild(dot);
        }
    }
    
    // 重新获取更新后的点元素
    const updatedDots = document.querySelectorAll('.dot');
    
    // 处理所有图片，为可能缺失的图片添加错误处理
    const slideImages = document.querySelectorAll('.slide img');
    slideImages.forEach(img => {
        img.addEventListener('error', function() {
            // 当图片加载失败时，替换为占位图
            this.src = 'images/placeholder.svg';
            console.log('图片加载失败，已替换为占位图: ' + this.alt);
        });
    });
    
    let currentSlide = 0;
    let slideInterval;
    
    // 显示特定幻灯片
    function showSlide(index) {
        // 处理边界情况
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        
        // 移除所有幻灯片和圆点的active类
        slides.forEach(slide => slide.classList.remove('active'));
        updatedDots.forEach(dot => dot.classList.remove('active'));
        
        // 添加active类到当前幻灯片和圆点
        slides[currentSlide].classList.add('active');
        
        // 确保对应的dot存在
        if (updatedDots[currentSlide]) {
            updatedDots[currentSlide].classList.add('active');
        }
    }
    
    // 切换到下一张幻灯片
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // 切换到上一张幻灯片
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // 初始化轮播
    function initSlider() {
        // 设置点击事件
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                prevSlide();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                nextSlide();
            });
        }
        
        // 圆点点击事件
        updatedDots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-index'));
                showSlide(slideIndex);
            });
        });
        
        // 显示第一张幻灯片
        showSlide(0);
    }
    
    // 初始化轮播图
    initSlider();
}); 