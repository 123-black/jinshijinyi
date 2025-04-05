document.addEventListener('DOMContentLoaded', function() {
    // 处理所有图片加载错误
    handleImageErrors();
    
    // 平滑滚动所有锚链接
    setupSmoothScroll();
    
    // 页面滚动时添加导航栏阴影
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // 图片延迟加载
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.removeAttribute('data-src');
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // 后备方案
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // 动画效果
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if ('IntersectionObserver' in window && animatedElements.length > 0) {
        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(element => {
            animationObserver.observe(element);
        });
    } else {
        // 如果不支持IntersectionObserver，直接添加动画类
        animatedElements.forEach(element => {
            element.classList.add('animated');
        });
    }
});

// 处理图片加载错误，使用默认图片替代
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.onerror = function() {
            // 获取图片的原始路径和格式
            const originalSrc = this.src;
            const isInPagesDir = window.location.pathname.includes('/pages/');
            const basePath = isInPagesDir ? '../images/' : 'images/';
            
            // 尝试不同的图片格式
            const imgName = originalSrc.split('/').pop().split('.')[0];
            const formats = ['jpg', 'png', 'svg', 'gif', 'jpeg', 'webp'];
            
            // 如果当前格式加载失败，尝试其他格式
            const currentFormat = originalSrc.split('.').pop().toLowerCase();
            const otherFormats = formats.filter(f => f !== currentFormat);
            
            // 异步尝试加载其他格式
            let loaded = false;
            
            // 先尝试其他格式
            for (let format of otherFormats) {
                const tempImg = new Image();
                const newSrc = `${basePath}${imgName}.${format}`;
                
                tempImg.onload = () => {
                    if (!loaded) {
                        this.src = newSrc;
                        loaded = true;
                    }
                };
                
                tempImg.src = newSrc;
            }
            
            // 如果所有格式都失败，使用默认占位图
            setTimeout(() => {
                if (!loaded) {
                    this.src = isInPagesDir ? '../images/placeholder.svg' : 'images/placeholder.svg';
                    this.alt = '图片暂时无法加载';
                    this.style.opacity = '0.7';
                }
            }, 1000);
        };
    });
}

// 设置平滑滚动
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // 考虑导航栏高度
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 轮播组件功能（如果存在）
function initSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    const dotsContainer = slider.querySelector('.slider-dots');
    
    let currentSlide = 0;
    
    // 创建点指示器
    if (dotsContainer) {
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }
    
    // 显示指定幻灯片
    function goToSlide(n) {
        // 移除当前活动幻灯片
        slides[currentSlide].classList.remove('active');
        if (dotsContainer) {
            dotsContainer.children[currentSlide].classList.remove('active');
        }
        
        // 设置新的活动幻灯片
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        if (dotsContainer) {
            dotsContainer.children[currentSlide].classList.add('active');
        }
    }
    
    // 下一张幻灯片
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // 上一张幻灯片
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // 添加按钮事件监听
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // 自动轮播
    setInterval(nextSlide, 5000);
}

// 如果页面有轮播组件，初始化它
if (document.querySelector('.slider')) {
    initSlider();
} 