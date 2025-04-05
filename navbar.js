document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    
    // 加载导航栏功能
    function loadNavbar() {
        const navbarContainer = document.getElementById('navbar-container');
        if (!navbarContainer) return;
        
        try {
            // 获取当前页面路径
            const currentPath = window.location.pathname;
            let currentPage = currentPath.split('/').pop();
            
            // 如果是首页或路径为空，设置为index.html
            if (!currentPage || currentPage === '') {
                currentPage = 'index.html';
            }
            
            // 创建导航栏HTML
            const navbarHTML = `
                <nav class="navbar">
                    <div class="nav-container">
                        <div class="nav-logo">
                            <a href="${currentPage === 'index.html' ? '#' : '../index.html'}">津食今忆</a>
                        </div>
                        <div class="nav-toggle" id="nav-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul class="nav-menu" id="nav-menu">
                            <li class="nav-item ${currentPage === 'index.html' ? 'active' : ''}">
                                <a href="${currentPage === 'index.html' ? '#' : '../index.html'}" class="nav-link">首页</a>
                            </li>
                            <li class="nav-item ${currentPage === 'foods.html' ? 'active' : ''}">
                                <a href="${currentPage === 'index.html' ? 'pages/foods.html' : 'foods.html'}" class="nav-link">美食展示</a>
                            </li>
                            <li class="nav-item ${currentPage === 'culture.html' ? 'active' : ''}">
                                <a href="${currentPage === 'index.html' ? 'pages/culture.html' : 'culture.html'}" class="nav-link">美食文化</a>
                            </li>
                            <li class="nav-item ${currentPage === 'message.html' ? 'active' : ''}">
                                <a href="${currentPage === 'index.html' ? 'pages/message.html' : 'message.html'}" class="nav-link">留言板</a>
                            </li>
                            <li class="nav-item ${currentPage === 'about.html' ? 'active' : ''}">
                                <a href="${currentPage === 'index.html' ? 'pages/about.html' : 'about.html'}" class="nav-link">关于我们</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            `;
            
            // 将导航栏添加到页面
            navbarContainer.innerHTML = navbarHTML;
            
            // 移动端菜单切换
            const navToggle = document.getElementById('nav-toggle');
            const navMenu = document.getElementById('nav-menu');
            
            if (navToggle && navMenu) {
                navToggle.addEventListener('click', function() {
                    navToggle.classList.toggle('active');
                    navMenu.classList.toggle('active');
                });
            }
            
            // 点击链接关闭菜单
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
            
            // 添加滚动效果
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // 内页链接滚动动画
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    if (this.getAttribute('href') !== '#') {
                        e.preventDefault();
                        
                        const targetId = this.getAttribute('href');
                        const targetElement = document.querySelector(targetId);
                        
                        if (targetElement) {
                            window.scrollTo({
                                top: targetElement.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });
            
            // 移除加载失败提示（如果存在）
            const errorMessage = document.getElementById('navbar-error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
        } catch (error) {
            console.error('导航栏加载错误:', error);
            
            // 添加错误信息和重试按钮
            if (!document.getElementById('navbar-error-message')) {
                const errorDiv = document.createElement('div');
                errorDiv.id = 'navbar-error-message';
                errorDiv.className = 'navbar-error';
                errorDiv.innerHTML = `
                    <p>导航栏加载失败，请<button id="retry-navbar" class="retry-btn">刷新重试</button></p>
                `;
                navbarContainer.appendChild(errorDiv);
                
                // 添加重试按钮的事件监听
                const retryButton = document.getElementById('retry-navbar');
                if (retryButton) {
                    retryButton.addEventListener('click', function() {
                        loadNavbar();
                    });
                }
                
                // 添加错误样式
                const style = document.createElement('style');
                style.textContent = `
                    .navbar-error {
                        padding: 15px;
                        background-color: #ffebe9;
                        color: #d73a49;
                        border: 1px solid #f9d0d0;
                        border-radius: 4px;
                        margin: 10px 0;
                        text-align: center;
                    }
                    
                    .retry-btn {
                        background-color: #d73a49;
                        color: white;
                        border: none;
                        padding: 5px 10px;
                        border-radius: 4px;
                        cursor: pointer;
                        margin-left: 5px;
                    }
                    
                    .retry-btn:hover {
                        background-color: #cb2431;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    }
    
    // 判断当前页面是否为指定页面
    function isActivePage(page) {
        try {
            const path = window.location.pathname.toLowerCase();
            
            // 如果是首页
            if (page === 'index.html' && (path.endsWith('index.html') || path.endsWith('/') || path.endsWith('/web/'))) {
                return true;
            }
            
            // 对于其他页面，检查路径是否包含页面名称
            return path.includes(page.toLowerCase());
        } catch (error) {
            console.error('活动页面检查错误:', error);
            return false;
        }
    }
    
    // 获取相对路径
    function getRelativePath(targetPath) {
        try {
            // 判断当前页面是否在pages目录下
            const currentPath = window.location.pathname.toLowerCase();
            const inPagesDir = currentPath.includes('/pages/');
            
            // 如果目标是首页
            if (targetPath === 'index.html') {
                return inPagesDir ? '../index.html' : 'index.html';
            }
            
            // 如果目标是pages下的页面
            if (targetPath.startsWith('pages/')) {
                // 如果当前页面也在pages目录下，则使用相对路径
                if (inPagesDir) {
                    return targetPath.replace('pages/', '');
                } else {
                    // 如果当前页面在根目录，直接返回
                    return targetPath;
                }
            }
            
            // 其他情况，直接返回目标路径
            return targetPath;
        } catch (error) {
            console.error('路径计算错误:', error);
            // 发生错误时返回安全的默认路径
            if (targetPath.startsWith('pages/')) {
                return targetPath;
            } else if (targetPath === 'index.html') {
                return '../index.html';
            } else {
                return targetPath;
            }
        }
    }
    
    // 添加自动重试功能
    window.addEventListener('error', function(event) {
        // 检查是否是导航栏相关错误
        if (event.target.tagName === 'SCRIPT' && event.target.src.includes('navbar.js')) {
            console.log('导航栏脚本加载失败，自动重试');
            setTimeout(loadNavbar, 1000); // 1秒后重试
        }
    }, true);
}); 