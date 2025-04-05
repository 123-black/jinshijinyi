document.addEventListener('DOMContentLoaded', function() {
    const foodDetailContainer = document.getElementById('food-detail-container');
    
    // 解析URL参数获取美食ID
    const urlParams = new URLSearchParams(window.location.search);
    const foodId = urlParams.get('id');
    
    // 如果没有找到ID，显示错误信息
    if (!foodId) {
        showNotFound();
        return;
    }
    
    // 根据美食ID加载对应的数据
    const foodData = getFoodData(foodId);
    
    // 如果没有找到对应的美食数据，显示错误信息
    if (!foodData) {
        showNotFound();
        return;
    }
    
    // 显示美食详情
    renderFoodDetail(foodData);
    
    // 获取美食数据（模拟数据库）
    function getFoodData(id) {
        const foodDatabase = {
            'goubuli': {
                id: 'goubuli',
                name: '狗不理包子',
                subtitle: '百年老字号，天津特色小吃代表',
                mainImage: '../images/goubuli2.jpg',
                foundYear: '1858年',
                location: '天津市南开区永丰街',
                category: '面点',
                meta: [
                    { label: '创建时间', value: '1858年' },
                    { label: '所在地区', value: '天津市南开区' },
                    { label: '菜系分类', value: '津菜/点心' },
                    { label: '价格区间', value: '¥30-80' }
                ],
                introduction: `
                    <p>狗不理包子是天津著名的传统小吃，始创于清朝咸丰八年（1858年），距今已有160多年历史。创始人高贵友因为专心致志地包包子，顾客问他话他都不理睬，所以人称"狗不理"，包子也被称为"狗不理包子"。</p>
                    <p>狗不理包子以"褶多皮薄馅大"著称，每个包子有最少15个褶，包子皮很薄但不破皮，呈半透明状；馅心鲜嫩多汁，风味独特。</p>
                    <p>狗不理包子的制作工艺精细，选料严格，尤其讲究和面、馅料的制作和包制技法，这些都是狗不理包子的特色所在。</p>
                `,
                history: `
                    <p>1831年（清道光十一年），"狗不理包子"创始人高贵友出生在直隶武清县下朱庄（现天津市武清区）。因其父四十得子，为求平安养子，取其乳名"狗子"，期望他能像小狗一样好养活。</p>
                    <p>高贵友14岁时，到天津南运河边上的刘家蒸吃铺做小伙计。因心灵手巧又勤学好问，加上师傅们的指点，高贵友做包子的手艺不断长进，练就一手好活。</p>
                    <p>三年满师后，高贵友独自开了一家专营包子的小吃铺——"德聚号"。由于高贵友手艺好，做事又十分认真，从不掺假，制作的包子口感柔软，鲜香不腻，形似菊花，色香味形都独具特色，生意十分兴隆。</p>
                    <p>来吃他包子的人越来越多，高贵友忙得顾不上跟顾客说话，这样一来，吃包子的人都戏称他"狗子卖包子，不理人"。久而久之，人们喊顺了嘴，都叫他"狗不理"，把他所经营的包子称作"狗不理包子"，而原店铺字号却渐渐被人们淡忘了。</p>
                `,
                historyImage: '../images/goubuli3.jpg',
                features: `
                    <p><strong>皮薄：</strong>狗不理包子的皮薄如纸，用手捏能看到里面的馅料。</p>
                    <p><strong>褶多：</strong>每个包子至少有15个褶，褶纹均匀整齐，是技艺的体现。</p>
                    <p><strong>馅大：</strong>包子的馅料占比大，且馅料讲究精选上等猪肉和特制的调料。</p>
                    <p><strong>汤多：</strong>咬一口，汤汁丰富，鲜美可口。</p>
                    <p><strong>味正：</strong>不加味精等添加剂，全凭食材本身鲜美。</p>
                `,
                gallery: [
                    {
                        image: '../images/goubuli.jpg',
                        caption: '传统狗不理包子'
                    },
                    {
                        image: '../images/goubuli4.jpg',
                        caption: '狗不理门店'
                    },
                    {
                        image: '../images/goubuli2.jpg',
                        caption: '制作过程'
                    }
                ],
                recommendations: [
                    {
                        id: 'erduoyan',
                        name: '耳朵眼炸糕',
                        image: '../images/erduoyan-shop.jpg',
                        description: '外酥里嫩，甜而不腻，天津传统特色小吃。'
                    },
                    {
                        id: 'mahua',
                        name: '桂发祥十八街麻花',
                        image: '../images/mahua-shop.jpg',
                        description: '香脆可口，甜咸两味，天津著名传统特色小吃。'
                    }
                ]
            },
            'erduoyan': {
                id: 'erduoyan',
                name: '耳朵眼炸糕',
                englishName: 'Erduoyan fried rice cake',
                subtitle: '天津传统特色小吃，外酥里糯，甜咸适口',
                mainImage: '../images/erduoyan-detail.jpg',
                foundYear: '清代',
                location: '天津市河西区马场道',
                category: '糕点',
                meta: [
                    { label: '创建时间', value: '清代' },
                    { label: '所在地区', value: '天津市河西区' },
                    { label: '菜系分类', value: '津菜/小吃' },
                    { label: '价格区间', value: '¥15-30' }
                ],
                introduction: `
                    <p>耳朵眼炸糕是中国天津市的一种传统特色名点，也是天津三绝食品之一，天津市非物质文化遗产。该菜品始创于清朝光绪年间（1900年），旧时因店铺紧靠耳朵眼胡同而得名。</p>
                    <p>耳朵眼炸糕选料精，制作细。成品为在滚油内炸成的金黄色球冠状，色泽金黄爆"刺儿"，口感外焦里嫩、酥皮脆而不硬、馅鲜嫩而不干、细甜爽口、香味芬芳。</p>
                    <p>自1983年以来，耳朵眼炸糕多次被天津市政府、市商委、市烹协、市饮食公司评为优质食品全鼎奖；在1987年天津市群星杯津菜大赛上被授予特别荣誉奖；1994年，在第五届亚太博览会上荣获金牌；1997年被中国烹饪协会命名为中华名小吃；入选第二批天津市非物质文化遗产。</p>
                `,
                history: `
                    <p>耳朵眼炸糕起源于晚清光绪年间，由回民刘万春创制。炸糕选料精、制作细，物美价廉，赢得"炸糕刘"的绰号。附近的富户、百姓过生日、办喜宴，借"糕"字谐音，取步步高之吉利，都购买他的炸糕，生意越做越兴隆。</p>
                    <p>传统的耳朵眼炸糕采用北运河沿岸杨村、河西务和子牙河沿岸文安、霸县产的黄米和江米经水泡涨后用石磨磨成粥状，盛在布袋中。经淋水发酵后兑好碱当作面皮；再用天津出产的朱砂红小豆，制成豆馅，加优质的红糖在锅内熬汁炒成豆沙馅，凉后作馅心，包好后温油(130℃)下锅，勤翻勤转。</p>
                    <p>耳朵眼炸糕店（总店）位于天津红桥区大胡同商业街32号。开放时间周一至周日07:00-19:00。</p>
                `,
                historyImage: '../images/erduoyan-history.jpg',
                features: `
                    <p><strong>外酥内软：</strong>炸糕外皮金黄酥脆，内部松软糯香。</p>
                    <p><strong>形似耳朵：</strong>形状扁平椭圆，状似人耳，中间有小孔，便于炸制时受热均匀。</p>
                    <p><strong>馅料丰富：</strong>传统豆沙馅、芝麻馅为主，现代也有各种创新口味。</p>
                    <p><strong>甜咸适口：</strong>甜度适中，不会过分甜腻，满足各类人群口味。</p>
                    <p><strong>制作精良：</strong>从选料到成型，每一步都精心制作，保证品质。</p>
                `,
                gallery: [
                    {
                        image: '../images/erduoyan-gallery1.jpg',
                        caption: '金黄酥脆的耳朵眼炸糕'
                    },
                    {
                        image: '../images/erduoyan-gallery2.jpg',
                        caption: '耳朵眼炸糕店铺'
                    },
                    {
                        image: '../images/erduoyan-gallery3.jpg',
                        caption: '制作过程展示'
                    }
                ],
                recommendations: [
                    {
                        id: 'goubuli',
                        name: '狗不理包子',
                        image: '../images/goubuli4.jpg',
                        description: '百年老字号，天津特色小吃代表，褶多皮薄馅大。'
                    },
                    {
                        id: 'mahua',
                        name: '桂发祥十八街麻花',
                        image: '../images/mahua-small.jpg',
                        description: '香脆可口，甜咸两味，天津著名传统特色小吃。'
                    }
                ]
            },
            'mahua': {
                id: 'mahua',
                name: '桂发祥十八街麻花',
                subtitle: '香脆可口，甜咸两味，天津著名传统特色小吃',
                mainImage: '../images/mahua-detail.jpg',
                foundYear: '1927年',
                location: '天津市河东区十八街',
                category: '糕点',
                meta: [
                    { label: '创建时间', value: '1927年' },
                    { label: '所在地区', value: '天津市河东区' },
                    { label: '菜系分类', value: '津菜/小吃' },
                    { label: '价格区间', value: '¥20-50' }
                ],
                introduction: `
                    <p>桂发祥十八街麻花是天津著名的传统特色小吃，创建于1927年，因发源于天津市河东区十八街而得名。</p>
                    <p>桂发祥麻花以其"四香一酥"（焦香、麦香、油香、蛋香和酥脆）的独特品质著称，成为天津三绝之一（狗不理包子、耳朵眼炸糕、十八街麻花）。</p>
                    <p>桂发祥麻花采用优质面粉、鸡蛋、白糖等原料，经过和面、搓条、编织、炸制等多道工序精制而成，制作工艺精湛，是中国非物质文化遗产。</p>
                `,
                history: `
                    <p>相传清朝道光年间（1821-1850），一个名叫高金福的年轻人在天津城内十八街开办了一家小食作坊，制作油炸麻花。因其工艺精湛，口味独特，逐渐闻名遐迩。后改名为桂发祥，"桂"字寓意高中桂冠，"发祥"则象征事业兴旺发达。</p>
                    <p>桂发祥麻花自创制以来，经过多代人的传承和创新，不断完善制作工艺，形成了独特的"和、搓、炸、蘸"四道核心工序。其配方和技艺多年来一直秘而不宣，成为天津饮食文化的重要组成部分。</p>
                    <p>1997年，桂发祥麻花被评为"中华老字号"；2008年，制作技艺被列入国家级非物质文化遗产名录，进一步彰显了其文化价值和历史地位。</p>
                    <h4>桂发祥十八街麻花的传统制作工艺</h4>
                    <p>桂发祥麻花的制作工艺精细复杂，需经过多道工序精心制作：</p>
                    <ol>
                        <li>炸制麻花的前一天，用3.5千克面粉加入500克老肥，用4升温水调搅均匀，发酵成为老肥，以备次日使用。</li>
                        <li>用2升水将3.5千克白糖，135克碱面和5克糖精用文火化成糖水备用。</li>
                        <li>取3.5千克面粉，用550-650克热油烫成酥面备用。</li>
                        <li>取750克麻仁，用开水烫好，保持不湿、不干的程度，准备搓麻条用。</li>
                        <li>用烫好的酥面，加入白糖3.25千克，青、红丝各110克，桂花275克，姜片175克和碱面25克，再放入冷水1750毫升搅匀，用500克干面搓手，把面搅和到软硬适用为度。在搓条过程中用铺面1千克。</li>
                        <li>将剩下的干面16千克放入和面机内，然后把前一天发好的老肥掺入，加入化好的糖水，再根据面粉的水分大小，不同季节，倒入适量冷水，和成大面备用。</li>
                        <li>将大面饧好，切成大条，再将大条送入压条机，压成细面条，然后揪成长约35厘米的短条，并将条理顺。一部分作为光条，另一部分揉上麻仁作成麻条。再将和好的酥面作成酥条。按光条、麻条、酥条5:3:1匹配，搓成绳状的麻花。</li>
                        <li>麻花成型后，放进花生油锅里在微火上炸透，再夹上冰糖块，撒上青红丝、瓜条等小料。</li>
                    </ol>
                `,
                historyImage: '../images/mahua-history.jpg',
                features: `
                    <p><strong>四香一酥：</strong>焦香、麦香、油香、蛋香和酥脆是桂发祥麻花的最大特点。</p>
                    <p><strong>精工细作：</strong>从和面到成型，每一道工序都严格把控，保证质量。</p>
                    <p><strong>传统手工：</strong>至今仍保留大量手工制作环节，保持传统工艺的精髓。</p>
                    <p><strong>品种丰富：</strong>除了传统的甜味和咸味，还有芝麻、椒盐、五香等多种口味。</p>
                    <p><strong>色泽金黄：</strong>外表金黄油亮，美观诱人，是天津特色伴手礼的首选。</p>
                `,
                gallery: [
                    {
                        image: '../images/mahua-gallery1.jpg',
                        caption: '香脆可口的桂发祥麻花'
                    },
                    {
                        image: '../images/mahua-gallery2.jpg',
                        caption: '桂发祥十八街店铺'
                    },
                    {
                        image: '../images/mahua-gallery3.jpg',
                        caption: '麻花制作过程'
                    }
                ],
                recommendations: [
                    {
                        id: 'goubuli',
                        name: '狗不理包子',
                        image: '../images/goubuli4.jpg',
                        description: '百年老字号，天津特色小吃代表，褶多皮薄馅大。'
                    },
                    {
                        id: 'erduoyan',
                        name: '耳朵眼炸糕',
                        image: '../images/erduoyan-small.jpg',
                        description: '外酥里嫩，甜而不腻，天津传统特色小吃。'
                    }
                ]
            },
            'bengdou': {
                id: 'bengdou',
                name: '崩豆',
                subtitle: '天津传统特色小吃，酥脆可口，老津门的记忆',
                mainImage: '../images/bengdou.jpg',
                foundYear: '清代',
                location: '天津市河北区',
                category: '小吃',
                meta: [
                    { label: '创建时间', value: '清代' },
                    { label: '所在地区', value: '天津市河北区' },
                    { label: '菜系分类', value: '津菜/小吃' },
                    { label: '价格区间', value: '¥10-30' }
                ],
                introduction: `
                    <p>崩豆是天津传统特色小吃，由黄豆制成，香脆可口，是老天津人喜爱的零食。崩豆历史悠久，距今已有百余年历史，是天津民间传统的休闲小食。</p>
                    <p>崩豆外形金黄，质地酥脆，味道香甜，食用方便，是天津传统的休闲零食，深受老天津人喜爱，尤其在节庆时期更是不可或缺。</p>
                    <p>崩豆制作工艺独特，主要采用优质黄豆经过精选、浸泡、炒制等多道工序加工而成，保留了豆类的营养成分，同时也具有独特的风味。</p>
                `,
                history: `
                    <p>崩豆起源于清代，当时天津作为北方重要的商业口岸，各类小吃百花齐放。崩豆最初是作为普通百姓家中的休闲零食，后来逐渐发展成为颇具地方特色的传统小吃。</p>
                    <p>相传在清末民初，天津城内有一位姓马的小贩，擅长制作崩豆。他制作的崩豆外表金黄、口感酥脆、香气四溢，深受当地居民喜爱。久而久之，他的崩豆制作技艺也逐渐传播开来。</p>
                    <p>在民国时期，崩豆已经成为天津茶馆、戏院等休闲场所必备的小食，也是天津人招待客人的传统零食之一。时至今日，崩豆仍然是天津传统小吃中不可或缺的一部分，承载着老天津人的美食记忆。</p>
                `,
                historyImage: '../images/bengdou-history.jpg',
                features: `
                    <p><strong>外形金黄：</strong>崩豆成品呈现金黄色，色泽诱人，外表有细小的裂纹。</p>
                    <p><strong>口感酥脆：</strong>入口即化，酥脆爽口，有豆香但不腻人。</p>
                    <p><strong>制作独特：</strong>采用传统工艺，包括选豆、浸泡、炒制等多道工序。</p>
                    <p><strong>营养丰富：</strong>保留了黄豆的营养成分，含有丰富的蛋白质和膳食纤维。</p>
                    <p><strong>四季皆宜：</strong>不论春夏秋冬，都适合食用，尤其适合配茶饮用。</p>
                `,
                gallery: [
                    {
                        image: '../images/bengdou.jpg',
                        caption: '传统崩豆'
                    },
                    {
                        image: '../images/bengdou-shop.jpg',
                        caption: '崩豆店铺'
                    },
                    {
                        image: '../images/bengdou-making.jpg',
                        caption: '崩豆制作过程'
                    }
                ],
                recommendations: [
                    {
                        id: 'goubuli',
                        name: '狗不理包子',
                        image: '../images/goubuli4.jpg',
                        description: '百年老字号，天津特色小吃代表，褶多皮薄馅大。'
                    },
                    {
                        id: 'chatang',
                        name: '茶汤',
                        image: '../images/chatang.jpg',
                        description: '天津独特的传统饮品，甜咸适口，有浓厚的津门风味。'
                    }
                ]
            },
            'jianbing': {
                id: 'jianbing',
                name: '煎饼果子',
                subtitle: '天津著名早点，薄脆酥香，天津人的早餐记忆',
                mainImage: '../images/jianbing.jpg',
                foundYear: '民国初期',
                location: '天津全市',
                category: '面点',
                meta: [
                    { label: '创建时间', value: '民国初期' },
                    { label: '所在地区', value: '天津全市' },
                    { label: '菜系分类', value: '津菜/早点' },
                    { label: '价格区间', value: '¥5-15' }
                ],
                introduction: `
                    <p>煎饼果子是天津著名的传统小吃，也是最受欢迎的早点之一。煎饼果子由煎饼、薄脆、鸡蛋和各种调料组成，外酥里嫩，香气四溢，是天津人早餐的首选。</p>
                    <p>正宗的天津煎饼果子讲究"薄如纸，软如绸"的煎饼质感，配以香脆的果子皮（即薄脆），再加上鲜嫩的鸡蛋、特制的酱料和葱花等调味品，层次丰富，风味独特。</p>
                    <p>煎饼果子不仅是天津的地方特色美食，如今已经走向全国，甚至享誉海外，成为展示天津饮食文化的一张名片。</p>
                `,
                history: `
                    <p>煎饼果子的起源可以追溯到民国初期。当时天津作为北方重要的商业城市，各种小吃层出不穷。煎饼作为北方传统食品，在天津得到了创新发展。</p>
                    <p>相传在上世纪20年代，天津城区内有一位叫张福全的小贩，他首创将传统煎饼与薄脆结合，制作出了最初的煎饼果子。这种新式小吃因其美味可口、方便携带，很快就在天津城区内流行开来。</p>
                    <p>随着时间的推移，煎饼果子的制作工艺不断完善，从最初的简单搭配发展到今天的多种馅料、多样口味，成为天津人餐桌上不可或缺的美食之一。如今，无论是街头巷尾的小摊，还是高档商场的专柜，都能看到煎饼果子的身影。</p>
                `,
                historyImage: '../images/jianbing-history.jpg',
                features: `
                    <p><strong>薄如纸：</strong>煎饼要做到薄而均匀，几乎透明，这是考验技艺的关键。</p>
                    <p><strong>脆而香：</strong>果子皮（薄脆）必须香脆可口，是煎饼果子的灵魂。</p>
                    <p><strong>调料丰富：</strong>传统配料包括甜面酱、辣椒酱、葱花、香菜等，味道丰富多样。</p>
                    <p><strong>制作迅速：</strong>一份好的煎饼果子从摊煎饼到包装完成通常只需要1-2分钟。</p>
                    <p><strong>便于携带：</strong>煎饼果子包裹紧凑，方便食用和携带，是理想的街头小吃。</p>
                `,
                gallery: [
                    {
                        image: '../images/jianbing.jpg',
                        caption: '香脆可口的煎饼果子'
                    },
                    {
                        image: '../images/jianbing-making.jpg',
                        caption: '煎饼果子制作过程'
                    },
                    {
                        image: '../images/jianbing-shop.jpg',
                        caption: '煎饼果子小摊'
                    }
                ],
                recommendations: [
                    {
                        id: 'goubuli',
                        name: '狗不理包子',
                        image: '../images/goubuli4.jpg',
                        description: '百年老字号，天津特色小吃代表，褶多皮薄馅大。'
                    },
                    {
                        id: 'gabacai',
                        name: '嘎巴菜',
                        image: '../images/guobacai.jpg',
                        description: '传统家常菜，嘎巴酥脆，配菜鲜美，是天津独特的地方美食。'
                    }
                ]
            },
            'gabacai': {
                id: 'gabacai',
                name: '嘎巴菜',
                subtitle: '天津特色家常菜，嘎巴酥脆，配菜鲜美',
                mainImage: '../images/guobacai.jpg',
                foundYear: '民国时期',
                location: '天津市和平区',
                category: '小吃',
                meta: [
                    { label: '创建时间', value: '民国时期' },
                    { label: '所在地区', value: '天津市和平区' },
                    { label: '菜系分类', value: '津菜/家常菜' },
                    { label: '价格区间', value: '¥20-50' }
                ],
                introduction: `
                    <p>嘎巴菜是天津传统特色家常菜，因其特有的"嘎巴"（锅巴）而得名。嘎巴菜以米饭锅巴为基础，配以各种新鲜蔬菜和肉类，酥脆可口，风味独特。</p>
                    <p>正宗的嘎巴菜讲究锅巴的酥脆程度和配菜的鲜美口感。嘎巴要金黄酥脆，配菜要新鲜多样，汤汁要浓郁可口，三者搭配恰到好处，才能体现嘎巴菜的传统风味。</p>
                    <p>嘎巴菜是天津饮食文化中的重要组成部分，也是天津家家户户经常食用的传统美食之一，承载着浓厚的津门饮食记忆。</p>
                `,
                history: `
                    <p>嘎巴菜起源于民国时期的天津。当时天津作为北方重要的商业和文化中心，饮食文化丰富多样。嘎巴菜最初是天津普通民众的家常菜，后来因其独特的风味逐渐发展成为具有代表性的地方特色菜。</p>
                    <p>传统上，嘎巴菜起源于天津人的勤俭节约传统。过去人们在吃完米饭后，锅底会留下一层金黄酥脆的锅巴，人们不舍得丢弃，就将其取出，配上各种蔬菜和肉类烹制成美味的嘎巴菜。</p>
                    <p>随着时间的推移，嘎巴菜的制作工艺不断完善，从最初的家常做法发展成为独具特色的天津名菜，在各大餐馆中都能见到它的身影。如今，嘎巴菜已经成为展示天津传统饮食文化的重要窗口，受到广大食客的喜爱。</p>
                `,
                historyImage: '../images/guobacai-history.jpg',
                features: `
                    <p><strong>嘎巴酥脆：</strong>米饭锅巴煎至金黄酥脆，是嘎巴菜的灵魂和特色。</p>
                    <p><strong>配菜多样：</strong>传统配菜包括各种蔬菜、肉类，搭配丰富多样。</p>
                    <p><strong>汤汁浓郁：</strong>汤汁鲜美浓郁，浇在嘎巴上，形成酥脆与软嫩的对比。</p>
                    <p><strong>口感丰富：</strong>一道嘎巴菜同时兼具酥脆、软嫩、鲜美等多种口感。</p>
                    <p><strong>营养均衡：</strong>结合了主食和菜肴，营养搭配均衡，一菜多味。</p>
                `,
                gallery: [
                    {
                        image: '../images/guobacai.jpg',
                        caption: '传统嘎巴菜'
                    },
                    {
                        image: '../images/guobacai-making.jpg',
                        caption: '嘎巴菜制作过程'
                    },
                    {
                        image: '../images/guobacai-variety.jpg',
                        caption: '多种口味的嘎巴菜'
                    }
                ],
                recommendations: [
                    {
                        id: 'jianbing',
                        name: '煎饼果子',
                        image: '../images/jianbing.jpg',
                        description: '天津著名小吃，薄脆酥香，是天津人最爱的早点之一。'
                    },
                    {
                        id: 'erduoyan',
                        name: '耳朵眼炸糕',
                        image: '../images/erduoyan-shop.jpg',
                        description: '外酥里嫩，甜而不腻，天津传统特色小吃。'
                    }
                ]
            },
            'chatang': {
                id: 'chatang',
                name: '茶汤',
                subtitle: '天津独特传统饮品，甜咸适口，浓厚津门风味',
                mainImage: '../images/chatang.jpg',
                foundYear: '清代',
                location: '天津市南开区',
                category: '饮品',
                meta: [
                    { label: '创建时间', value: '清代' },
                    { label: '所在地区', value: '天津市南开区' },
                    { label: '菜系分类', value: '津菜/饮品' },
                    { label: '价格区间', value: '¥5-15' }
                ],
                introduction: `
                    <p>茶汤是天津独特的传统饮品，与众不同的是，它既不同于一般的茶水，也不同于普通的汤品，而是兼具二者特点的特色饮品。茶汤味道独特，甜咸适口，有浓厚的津门风味。</p>
                    <p>传统的天津茶汤以大米、小米为主料，辅以红枣、桂圆、花生等配料，熬制成浓稠的米汤，然后加入茶叶提味。成品既有茶的香气，又有米汤的浓稠与甜香，冬暖夏凉，四季皆宜。</p>
                    <p>茶汤在天津有着悠久的历史和广泛的群众基础，是天津饮食文化的重要组成部分，也是展示津门特色的文化名片。</p>
                `,
                history: `
                    <p>茶汤起源于清代的天津。当时天津作为北方重要的商贸港口，商旅往来频繁，各类饮食文化交融互通。茶汤最初是为了满足长途跋涉的商旅补充能量和水分的需求而创制的。</p>
                    <p>相传在清朝光绪年间，天津城内有一家名为"聚顺斋"的茶馆，老板姓李，为了吸引顾客，创新地将茶叶与米汤结合，制作出了独特的茶汤饮品。这种既能解渴又能充饥的饮品很快在天津城内流行开来。</p>
                    <p>随着时间的推移，茶汤的制作工艺不断完善，从最初的简单搭配发展到今天的多种配料、多样口味，成为天津传统饮食文化中不可或缺的一部分。尤其在冬季，一碗热腾腾的茶汤更是天津人御寒的首选。</p>
                `,
                historyImage: '../images/chatang-history.jpg',
                features: `
                    <p><strong>甜咸适口：</strong>茶汤的口味独特，既有甜味，又带有微咸，口感丰富多样。</p>
                    <p><strong>料多实在：</strong>传统茶汤配料丰富，包括大米、小米、红枣、桂圆等多种食材。</p>
                    <p><strong>浓稠可口：</strong>茶汤质地浓稠，不似清茶那般清淡，更具饱腹感。</p>
                    <p><strong>茶香米香：</strong>茶叶的清香与米汤的甜香完美融合，形成独特风味。</p>
                    <p><strong>四季皆宜：</strong>冬天热饮温暖身体，夏天温饮消暑解渴，四季皆可享用。</p>
                `,
                gallery: [
                    {
                        image: '../images/chatang.jpg',
                        caption: '传统天津茶汤'
                    },
                    {
                        image: '../images/chatang-shop.jpg',
                        caption: '茶汤店铺'
                    },
                    {
                        image: '../images/chatang-making.jpg',
                        caption: '茶汤制作过程'
                    }
                ],
                recommendations: [
                    {
                        id: 'bengdou',
                        name: '崩豆',
                        image: '../images/bengdou.jpg',
                        description: '天津传统小吃，由黄豆制成，香脆可口，是老天津人喜爱的零食。'
                    },
                    {
                        id: 'mahua',
                        name: '桂发祥十八街麻花',
                        image: '../images/mahua-shop.jpg',
                        description: '香脆可口，甜咸两味，天津著名传统特色小吃。'
                    }
                ]
            },
            'haihe': {
                id: 'haihe',
                name: '海河牛奶',
                subtitle: '天津特色传统饮品，醇厚香甜，营养丰富',
                mainImage: '../images/haihe.jpg',
                foundYear: '1904年',
                location: '天津市和平区',
                category: '饮品',
                meta: [
                    { label: '创建时间', value: '1904年' },
                    { label: '所在地区', value: '天津市和平区' },
                    { label: '菜系分类', value: '津菜/饮品' },
                    { label: '价格区间', value: '¥10-25' }
                ],
                introduction: `
                    <p>海河牛奶是天津历史悠久的特色饮品，以其纯正的口感和丰富的营养价值闻名。自1904年创立以来，海河牛奶已有百余年历史，是天津饮食文化中的重要代表。</p>
                    <p>海河牛奶选用优质奶源，通过传统工艺精心加工制作，口感醇厚香甜，营养价值高，深受消费者喜爱。作为天津的地方特色品牌，海河牛奶不仅是一种饮品，也是承载着津门历史记忆的文化符号。</p>
                    <p>多年来，海河牛奶坚持传统工艺与现代科技相结合，推陈出新，开发出多种口味和系列产品，满足不同消费群体的需求，成为天津乳制品行业的标杆。</p>
                `,
                history: `
                    <p>海河牛奶的历史可以追溯到1904年，当时天津作为北方重要的通商口岸，西方文化与商品大量涌入。在这一背景下，一位名叫李福田的商人在天津创办了最早的牛奶加工作坊，取名"海河牧场"，专门生产销售鲜牛奶。</p>
                    <p>由于采用优质奶源和精细工艺，海河牛奶很快在天津城内声名鹊起。民国时期，海河牛奶已经成为天津知名的地方品牌，拥有固定的消费群体。新中国成立后，海河牛奶厂进行了技术改造和规模扩大，成为天津乳品行业的骨干企业。</p>
                    <p>改革开放以来，海河牛奶在保持传统特色的同时不断创新，推出了多种系列产品，如纯牛奶、酸奶、奶茶等，满足不同消费者的需求。如今，海河牛奶已经成为天津地区家喻户晓的传统品牌，是天津城市文化的重要组成部分。</p>
                `,
                historyImage: '../images/haihe-history.jpg',
                features: `
                    <p><strong>奶源优质：</strong>精选优质奶牛，保证奶源的纯净和营养。</p>
                    <p><strong>工艺传统：</strong>坚持传统的加工工艺，保持牛奶的原汁原味。</p>
                    <p><strong>口感醇厚：</strong>口感香甜醇厚，不腻人，易于吸收。</p>
                    <p><strong>品种多样：</strong>从传统纯牛奶到多种口味的奶制品，满足不同需求。</p>
                    <p><strong>文化底蕴：</strong>百年品牌，承载着天津城市发展的历史记忆。</p>
                `,
                gallery: [
                    {
                        image: '../images/haihe.jpg',
                        caption: '海河牛奶产品展示'
                    },
                    {
                        image: '../images/haihe-factory.jpg',
                        caption: '海河牛奶生产工厂'
                    },
                    {
                        image: '../images/haihe-variety.jpg',
                        caption: '多种海河牛奶产品'
                    }
                ],
                recommendations: [
                    {
                        id: 'chatang',
                        name: '茶汤',
                        image: '../images/chatang.jpg',
                        description: '天津独特的传统饮品，甜咸适口，有浓厚的津门风味。'
                    },
                    {
                        id: 'mahua',
                        name: '桂发祥十八街麻花',
                        image: '../images/mahua-shop.jpg',
                        description: '香脆可口，甜咸两味，天津著名传统特色小吃。'
                    }
                ]
            },
            'chitu': {
                id: 'chitu',
                name: '赤土扣肉',
                subtitle: '天津传统名菜，色泽红亮，肥而不腻，口感独特',
                mainImage: '../images/chitu.jpg',
                foundYear: '晚清时期',
                location: '天津市东丽区赤土村',
                category: '名菜',
                meta: [
                    { label: '创建时间', value: '晚清时期' },
                    { label: '所在地区', value: '天津市东丽区' },
                    { label: '菜系分类', value: '津菜/名菜' },
                    { label: '价格区间', value: '¥50-100' },
                    { label: '文化遗产', value: '天津市非物质文化遗产' }
                ],
                introduction: `
                    <p>赤土扣肉是天津传统名菜，因其独特的赤土坛子扣制而得名。此菜选用优质五花肉，经过特殊工艺加工，色泽红亮，肥而不腻，口感独特，是天津筵席上的传统名菜。</p>
                    <p>正宗的赤土扣肉讲究火候掌握和调料配比，肉质酥烂，入口即化，汤汁浓郁，肥瘦相间却不腻人，满口留香，是天津菜中的代表作之一。</p>
                    <p>2009年，赤土扣肉技艺和天津著名的三绝（狗不理包子、耳朵眼炸糕、十八街麻花）一起入选天津市第二批非物质文化遗产。同时，赤土扣肉还曾入围首届天津礼物旅游商品大赛，在"天津老字号，国潮新势力"——天津广播第三届"国潮津典"中获得"津门一宝"奖项。</p>
                `,
                history: `
                    <h4>历史起源</h4>
                    <p>相传在清朝末年，慈禧太后过寿，宫廷的御膳房内，香气四溢，御厨们忙碌着准备各种珍馐美味，每道菜肴都由它独特的含义和制作方法。在众多的菜肴中，一道色泽红亮、香气扑鼻的扣肉引起了慈禧太后的注意。这道清代御膳房的大菜"万字扣肉"，就是"赤土扣肉"的前身。</p>
                    
                    <div class="history-image-gallery">
                        <div class="history-image">
                            <img src="../images/chitu-history.jpg" alt="赤土扣肉历史">
                            <p class="image-caption">传统赤土扣肉制作</p>
                        </div>
                        <div class="history-image">
                            <img src="../images/chitu-history2.jpg" alt="赤土扣肉传承历史">
                            <p class="image-caption">赤土扣肉历史传承</p>
                        </div>
                        <div class="history-image">
                            <img src="../images/chitu-history3.jpg" alt="赵成林大师">
                            <p class="image-caption">传承人赵成林</p>
                        </div>
                    </div>
                    
                    <p>清朝灭亡后，宫廷御厨四散流落民间，为讨生计将密不外传的扣肉秘方传于赵成林的师祖张友林用于东丽赤土村民间婚宴流水席主菜。第一代传承人张友林先生把刀型复杂、一刀切出万字的扣肉改为6块方肉以供当时经济萧条少肉年代的百姓取食，第二代传承人绍起先生把6块方肉改成一字横刀扣肉后传于第三代传承人赵成林。</p>
                    <p>赵成林先生将传统"万字扣肉"的制作技艺进行改良，加入天津口味的酱香型调料，在烹饪中创造了"赵成林十八道工序"，使之肥而不腻，味醇肉烂，入口即化，回味无穷……2012年赵成林与其子赵宝峰一赤土扣肉第四代传人投资建厂扩大规模，建设1000平米厂房以供天津市民需求。</p>
                    
                    <h4>传承人介绍：赵成林</h4>
                    <p>天津市东丽区赤土村人，赤土扣肉第三代传人,将传统赤土扣肉技术进行改良，融合了天津饮食习惯，加入天津酱香型调料，在烹饪中创造了"赵成林十八道工序扣肉制作工艺"，使之肥而不腻，味醇肉烂，入口即化，人们食之赞不绝口。</p>
                    
                    <h4>店铺地址</h4>
                    <ul>
                        <li>赵成林赤土扣肉(洞庭路店)：河西区-洞庭路27号A座1层4号底商</li>
                        <li>赵成林赤土扣肉(先锋路店)：东丽区-先锋路45号</li>
                        <li>正宗赤土赵记扣肉饺子馆(紫园店)：东丽区-华明家园紫园28号楼5号底商</li>
                    </ul>
                `,
                historyImage: '../images/chitu-history.jpg',
                features: `
                    <h4>制作过程</h4>
                    <ol>
                        <li><strong>处理猪肉：</strong>选用"一指膘"的精良五花肉，经过简单规整成一字条状，然后反复清洗、用沸水冒去除猪肉中的杂质</li>
                        <li><strong>煮肉：</strong>再放入调料，煮至筷子基本能插进去即火候正好，捞出</li>
                        <li><strong>炸肉：</strong>炸至金黄色、虎皮色</li>
                        <li><strong>定碗：</strong>将葱、姜，蒜，八角，酱汁等加入碗中</li>
                        <li><strong>切肉：</strong>将炸好的肉规整好之后，切成一字横刀</li>
                        <li><strong>浇酱汁</strong></li>
                        <li><strong>蒸肉</strong></li>
                    </ol>
                    
                    <h4>特色特点</h4>
                    <p><strong>色泽红亮：</strong>成菜色泽红亮，油光闪亮，视觉上极具吸引力。</p>
                    <p><strong>肥而不腻：</strong>肥瘦相间，肉质酥烂，入口即化，不油腻。</p>
                    <p><strong>配料考究：</strong>传统工艺中使用多种香料和调味品，味道层次丰富。</p>
                    <p><strong>扣制工艺：</strong>采用特殊的赤土坛子扣制，保持肉质的完整性和香味。</p>
                    <p><strong>汤汁浓郁：</strong>肉汁与调料融合，汤汁浓郁，适合拌饭食用。</p>
                    
                    <h4>荣誉与认可</h4>
                    <p>2009年，赤土扣肉技艺和天津著名的三绝（狗不理包子、耳朵眼炸糕、十八街麻花）一起入选天津市第二批非物质文化遗产。</p>
                    <p>赤土扣肉入围首届天津礼物旅游商品大赛。</p>
                    <p>赤土扣肉在由天津市商务局、天津海河传媒中心联合举办的"天津老字号，国潮新势力"——天津广播第三届"国潮津典"中获得"津门一宝"奖项。</p>
                `,
                gallery: [
                    {
                        image: '../images/chitu.jpg',
                        caption: '传统赤土扣肉'
                    },
                    {
                        image: '../images/chitu-making.jpg',
                        caption: '赤土扣肉制作过程'
                    },
                    {
                        image: '../images/chitu-served.jpg',
                        caption: '赤土扣肉成品展示'
                    }
                ],
                recommendations: [
                    {
                        id: 'goubuli',
                        name: '狗不理包子',
                        image: '../images/goubuli4.jpg',
                        description: '百年老字号，天津特色小吃代表，褶多皮薄馅大。'
                    },
                    {
                        id: 'guoren',
                        name: '果仁张',
                        image: '../images/guoren.jpg',
                        description: '天津传统糕点，香甜可口，果仁丰富，口感独特。'
                    }
                ]
            },
            'guoren': {
                id: 'guoren',
                name: '果仁张',
                subtitle: '天津传统糕点，香甜可口，果仁丰富，口感独特',
                mainImage: '../images/guoren.jpg',
                foundYear: '1927年',
                location: '天津市河东区',
                category: '糕点',
                meta: [
                    { label: '创建时间', value: '1927年' },
                    { label: '所在地区', value: '天津市河东区' },
                    { label: '菜系分类', value: '津菜/糕点' },
                    { label: '价格区间', value: '¥20-60' }
                ],
                introduction: `
                    <p>果仁张是天津著名的传统糕点，创建于1927年，因创始人张氏而得名。果仁张以其丰富的果仁馅料和精湛的制作工艺著称，是天津享有盛名的传统特色小吃。</p>
                    <p>正宗的果仁张选用优质面粉、白糖和多种坚果（如花生、核桃、杏仁等）制作而成，口感酥软香甜，果仁香气浓郁，层次丰富，满口留香，是天津糕点中的精品代表。</p>
                    <p>多年来，果仁张在保持传统特色的同时不断创新，开发出多种口味和品种，满足不同消费者的需求，成为展示天津饮食文化的重要窗口。</p>
                `,
                history: `
                    <p>果仁张的历史始于1927年，当时天津城内的张姓师傅创办了一家小型糕点作坊，专门制作果仁糕点。因其制作的果仁糕点口感独特，果仁丰富，很快在天津城内赢得了良好的口碑，人们习惯称其为"果仁张"。</p>
                    <p>民国时期，果仁张已经成为天津知名的糕点品牌，在城内拥有多家门店。新中国成立后，果仁张的制作技艺继续得到传承和发展，成为天津传统糕点的代表之一。</p>
                    <p>改革开放以来，果仁张在保持传统工艺的同时不断创新，推出了多种系列产品，并将销售网络扩展到全国各地。如今，果仁张已经成为天津传统美食文化的重要组成部分，也是展示天津饮食文化特色的一张名片。</p>
                `,
                historyImage: '../images/guoren-history.jpg',
                features: `
                    <p><strong>果仁丰富：</strong>采用多种坚果，如花生、核桃、杏仁等，果仁含量高，口感丰富。</p>
                    <p><strong>工艺精湛：</strong>传统手工制作，从原料选择到成型烘烤，每一环节都严格把控。</p>
                    <p><strong>口感酥软：</strong>糕体酥软适中，不硬不粉，入口即化。</p>
                    <p><strong>甜度适中：</strong>甜而不腻，老少皆宜，适合各类人群食用。</p>
                    <p><strong>品种多样：</strong>从传统的混合果仁到单一果仁口味，满足不同消费者的需求。</p>
                `,
                gallery: [
                    {
                        image: '../images/guoren.jpg',
                        caption: '传统果仁张糕点'
                    },
                    {
                        image: '../images/guoren-shop.jpg',
                        caption: '果仁张店铺'
                    },
                    {
                        image: '../images/guoren-making.jpg',
                        caption: '果仁张制作过程'
                    }
                ],
                recommendations: [
                    {
                        id: 'mahua',
                        name: '桂发祥十八街麻花',
                        image: '../images/mahua-shop.jpg',
                        description: '香脆可口，甜咸两味，天津著名传统特色小吃。'
                    },
                    {
                        id: 'xianghe',
                        name: '祥禾饽饽铺',
                        image: '../images/xianghe.jpg',
                        description: '天津传统面点，品种繁多，工艺精湛，口感细腻。'
                    }
                ]
            },
            'xianghe': {
                id: 'xianghe',
                name: '祥禾饽饽铺',
                subtitle: '天津传统面点，品种繁多，工艺精湛，口感细腻',
                mainImage: '../images/xianghe.jpg',
                foundYear: '清代',
                location: '天津市和平区',
                category: '面点',
                meta: [
                    { label: '创建时间', value: '清代' },
                    { label: '所在地区', value: '天津市和平区' },
                    { label: '菜系分类', value: '津菜/面点' },
                    { label: '价格区间', value: '¥15-50' }
                ],
                introduction: `
                    <p>祥禾饽饽铺是天津著名的传统面点品牌，创建于清代末期，是天津历史悠久的老字号之一。饽饽铺以其品种繁多的面点、精湛的制作工艺和独特的口味著称，是天津面点文化的重要代表。</p>
                    <p>祥禾饽饽铺的产品种类丰富，包括蒸糕、烧饼、酥点、糕团等多种传统面点，每一种产品都有其独特的配方和制作工艺，口感细腻，风味独特，深受消费者喜爱。</p>
                    <p>多年来，祥禾饽饽铺在保持传统特色的同时不断创新，推出了多种应季和新式面点，满足不同消费者的需求，成为天津饮食文化的重要组成部分。</p>
                `,
                history: `
                    <p>祥禾饽饽铺的历史可以追溯到清代末期。当时天津城内的一位姓王的师傅创办了这家面点铺，取名"祥禾"，寓意五谷丰登、生活祥和。凭借精湛的制作技艺和优质的产品，祥禾饽饽铺很快在天津城内声名鹊起。</p>
                    <p>民国时期，祥禾饽饽铺已经成为天津城内知名的面点品牌，拥有固定的消费群体。新中国成立后，祥禾饽饽铺的制作技艺得到了进一步传承和发展，成为天津传统面点的重要代表。</p>
                    <p>改革开放以来，祥禾饽饽铺在保持传统工艺的同时不断创新，推出了多种新式面点，并将销售网络扩展到天津的各个区域。如今，祥禾饽饽铺已经成为天津饮食文化的重要组成部分，也是展示天津传统手工艺的重要窗口。</p>
                `,
                historyImage: '../images/xianghe-history.jpg',
                features: `
                    <p><strong>品种繁多：</strong>产品种类丰富，包括蒸糕、烧饼、酥点、糕团等多种传统面点。</p>
                    <p><strong>工艺精湛：</strong>秉承传统手工制作工艺，每一道工序都精益求精。</p>
                    <p><strong>选料考究：</strong>精选优质面粉和各种辅料，保证产品的口感和品质。</p>
                    <p><strong>口感细腻：</strong>面点口感细腻，层次分明，咬感舒适。</p>
                    <p><strong>季节更替：</strong>根据不同季节推出应季面点，体现传统饮食文化的季节性特点。</p>
                `,
                gallery: [
                    {
                        image: '../images/xianghe.jpg',
                        caption: '祥禾饽饽铺产品展示'
                    },
                    {
                        image: '../images/xianghe-shop.jpg',
                        caption: '祥禾饽饽铺店铺'
                    },
                    {
                        image: '../images/xianghe-making.jpg',
                        caption: '祥禾饽饽铺制作过程'
                    }
                ],
                recommendations: [
                    {
                        id: 'goubuli',
                        name: '狗不理包子',
                        image: '../images/goubuli4.jpg',
                        description: '百年老字号，天津特色小吃代表，褶多皮薄馅大。'
                    },
                    {
                        id: 'guoren',
                        name: '果仁张',
                        image: '../images/guoren.jpg',
                        description: '天津传统糕点，香甜可口，果仁丰富，口感独特。'
                    }
                ]
            }
        };
        
        return foodDatabase[id] || null;
    }
    
    // 渲染美食详情页面
    function renderFoodDetail(food) {
        let html = `
            <div class="food-detail-header">
                <h1 class="food-detail-title">${food.name}</h1>
                <p class="food-detail-subtitle">${food.subtitle}</p>
            </div>
            
            <img src="${food.mainImage}" alt="${food.name}" class="food-detail-image">
            
            <div class="food-detail-meta">
                ${food.meta.map(item => `
                    <div class="meta-item">
                        <span class="meta-label">${item.label}</span>
                        <span class="meta-value">${item.value}</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="food-detail-section">
                <h2 class="section-title">美食介绍</h2>
                <div class="section-content">
                    ${food.introduction}
                </div>
            </div>
            
            <div class="food-detail-section">
                <h2 class="section-title">历史渊源</h2>
                <div class="food-history">
                    <div class="history-text section-content">
                        ${food.history}
                    </div>
                    ${food.id !== 'chitu' ? `
                    <div class="history-image">
                        <img src="${food.historyImage}" alt="${food.name}历史">
                    </div>` : ''}
                </div>
            </div>
            
            <div class="food-detail-section">
                <h2 class="section-title">特色特点</h2>
                <div class="section-content">
                    ${food.features}
                </div>
            </div>
        `;
        
        // 添加图片库
        if (food.gallery && food.gallery.length) {
            html += `
                <div class="food-detail-section food-gallery">
                    <h2 class="section-title">美食图集</h2>
                    <div class="gallery-images">
                        ${food.gallery.map(item => `
                            <div class="gallery-item">
                                <img src="${item.image}" alt="${item.caption}" title="${item.caption}">
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // 添加推荐美食
        if (food.recommendations && food.recommendations.length) {
            html += `
                <div class="food-detail-section recommendation">
                    <h2 class="section-title">推荐美食</h2>
                    <div class="recommendation-list">
                        ${food.recommendations.map(item => `
                            <div class="recommendation-item">
                                <img src="${item.image}" alt="${item.name}" class="recommendation-image">
                                <div class="recommendation-content">
                                    <h3 class="recommendation-title">${item.name}</h3>
                                    <p class="recommendation-desc">${item.description}</p>
                                    <a href="food-detail.html?id=${item.id}" class="btn">查看详情</a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // 添加返回按钮
        html += `
            <a href="../index.html" class="btn btn-back">返回首页</a>
        `;
        
        // 将内容添加到容器
        foodDetailContainer.innerHTML = html;
    }
    
    // 显示未找到页面
    function showNotFound() {
        const html = `
            <div class="not-found">
                <h2>抱歉，未找到您请求的美食信息</h2>
                <p>您可以返回首页查看其他美食</p>
                <a href="../index.html" class="btn">返回首页</a>
            </div>
        `;
        
        foodDetailContainer.innerHTML = html;
    }
}); 