// Placeholder content shared by all demo pages. In XenForo this comes from the database.
window.OB_DATA = {
  fields: [
    { id: 'mecha', name: 'الميكاترونكس', icon: 'gear', h: 190, topics: '3.1K', posts: '22K', desc: 'الميكانيك والإلكترونيات والتحكم في نظام واحد' },
    { id: 'robot', name: 'الروبوتات', icon: 'bot', h: 265, topics: '2.4K', posts: '17K', desc: 'ROS والملاحة والرؤية الحاسوبية والأذرع' },
    { id: 'embed', name: 'الأنظمة المدمجة', icon: 'chip', h: 38, topics: '5.8K', posts: '41K', desc: 'Arduino و ESP32 و STM32 وأنظمة الزمن الحقيقي' },
    { id: 'soft', name: 'البرمجيات', icon: 'code', h: 220, topics: '4.2K', posts: '29K', desc: 'Python و C++ والذكاء الاصطناعي وتطبيقات الويب' },
    { id: 'mech', name: 'الهندسة الميكانيكية', icon: 'cog', h: 18, topics: '2.9K', posts: '19K', desc: 'CAD والطباعة ثلاثية الأبعاد و CNC والتصنيع' },
    { id: 'elec', name: 'الإلكترونيات والدوائر', icon: 'bolt', h: 150, topics: '3.6K', posts: '25K', desc: 'تصميم PCB ومزودات الطاقة والقياسات' }
  ],
  kinds: { q: 'سؤال', t: 'شرح', d: 'نقاش' },
  threads: [
    { f: 'mecha', k: 'q', title: 'ضبط PID لمحرك DC مع Encoder: القيم لا تستقر', by: 'عمر', r: 3, ago: 'منذ 5 دقائق' },
    { f: 'mecha', k: 'q', title: 'Servo أم Stepper لمشروع تخرج؟', by: 'رنا', r: 0, ago: 'منذ 8 دقائق' },
    { f: 'mecha', k: 't', title: 'كيف تختار بين Servo و Stepper و BLDC؟ دليل عملي', by: 'هالة', r: 12, ago: 'منذ 3 ساعات' },
    { f: 'mecha', k: 'q', title: 'عزم المحرك المناسب لذراع طولها 50 سم', by: 'يوسف', r: 0, ago: 'منذ ساعة' },
    { f: 'mecha', k: 'd', title: 'هل تستحق ماكينة CNC صغيرة للمنزل؟', by: 'كريم', r: 27, ago: 'أمس' },

    { f: 'robot', k: 'q', title: 'خريطة SLAM بـ ROS 2 و LiDAR رخيص: الخريطة تنحرف', by: 'حسن', r: 6, ago: 'منذ 40 دقيقة', s: 1 },
    { f: 'robot', k: 't', title: 'مفهوم الـ Topics والـ Services في ROS 2 ببساطة', by: 'مريم', r: 9, ago: 'اليوم' },
    { f: 'robot', k: 'd', title: 'أفضل منصة روبوت للمبتدئين في 2026', by: 'ليلى', r: 31, ago: 'أمس' },
    { f: 'robot', k: 'q', title: 'كيف أعايِر كاميرا RGB-D مع الذراع الروبوتية؟', by: 'فادي', r: 0, ago: 'منذ ساعتين' },

    { f: 'embed', k: 'q', title: 'قراءة ADC على ESP32 غير دقيقة: هل المشكلة في المعايرة؟', by: 'محمود', r: 2, ago: 'منذ دقيقتين' },
    { f: 'embed', k: 't', title: 'FreeRTOS على STM32 خطوة بخطوة', by: 'طارق', r: 14, ago: 'اليوم' },
    { f: 'embed', k: 'q', title: 'تداخل I2C عند تشغيل المحركات في الوقت نفسه', by: 'أحمد', r: 8, ago: 'منذ ساعة', s: 1 },
    { f: 'embed', k: 'q', title: 'لماذا يعيد ESP32 التشغيل عند تفعيل الواي فاي؟', by: 'نور', r: 0, ago: 'منذ 35 دقيقة' },
    { f: 'embed', k: 'd', title: 'Arduino أم ESP32 لأول مشروع؟', by: 'رنا', r: 44, ago: 'أمس' },

    { f: 'soft', k: 'q', title: 'تشغيل YOLO على Raspberry Pi 5 بسرعة مقبولة', by: 'ليلى', r: 5, ago: 'منذ ساعتين' },
    { f: 'soft', k: 't', title: 'نمط آلة الحالة في C++ للروبوتات', by: 'دينا', r: 7, ago: 'اليوم' },
    { f: 'soft', k: 'd', title: 'Python أم C++ لبرمجة الروبوتات؟', by: 'عمر', r: 52, ago: 'أمس' },
    { f: 'soft', k: 'q', title: 'كيف أنقل بيانات الحساس إلى لوحة ويب مباشرة؟', by: 'هشام', r: 0, ago: 'منذ 3 ساعات' },

    { f: 'mech', k: 'q', title: 'إعدادات طباعة PETG لقطع تتحمل الحرارة', by: 'كريم', r: 4, ago: 'منذ 3 ساعات', s: 1 },
    { f: 'mech', k: 't', title: 'أساسيات التفاوتات في التصميم للطباعة ثلاثية الأبعاد', by: 'هالة', r: 10, ago: 'أمس' },
    { f: 'mech', k: 'd', title: 'Fusion 360 أم SolidWorks؟', by: 'يوسف', r: 36, ago: 'أمس' },
    { f: 'mech', k: 'q', title: 'كيف أختار الحزام والبكرة لمحور CNC؟', by: 'محمود', r: 1, ago: 'منذ 5 ساعات' },

    { f: 'elec', k: 'q', title: 'لماذا يسخن منظم AMS1117 بهذه السرعة؟', by: 'سارة', r: 0, ago: 'منذ 35 دقيقة' },
    { f: 'elec', k: 't', title: 'الترانزستور كمفتاح: من الفكرة إلى الدائرة (1 من 2)', by: 'نور', r: 19, ago: 'اليوم' },
    { f: 'elec', k: 'q', title: 'مراجعة أول تصميم PCB لي بـ KiCad: محول Buck 5V', by: 'مريم', r: 11, ago: 'أمس' },
    { f: 'elec', k: 'd', title: 'أفضل مصادر شراء القطع الإلكترونية في المنطقة', by: 'فادي', r: 23, ago: 'أمس' }
  ],
  projects: [
    { f: 'mecha', title: 'روبوت توازن ذاتي بمحركات Stepper', tags: ['ESP32', 'PID', 'MPU6050'], by: 'محمود', likes: 284, h: 190, st: 'مكتمل', feat: 1 },
    { f: 'mecha', title: 'ذراع ميكاترونية لفرز القطع', tags: ['Servo', 'OpenCV'], by: 'عمر', likes: 98, h: 205, st: 'قيد العمل' },
    { f: 'robot', title: 'روبوت تتبع خط بخوارزمية PID', tags: ['Arduino', 'PID'], by: 'ليلى', likes: 176, h: 265, st: 'مكتمل', feat: 1 },
    { f: 'robot', title: 'مركبة ذاتية صغيرة بـ ROS 2', tags: ['ROS 2', 'LiDAR'], by: 'حسن', likes: 131, h: 285, st: 'قيد العمل' },
    { f: 'embed', title: 'لوحة تطوير STM32 مفتوحة المصدر', tags: ['KiCad', 'STM32'], by: 'عمر', likes: 121, h: 38, st: 'مكتمل', feat: 1 },
    { f: 'embed', title: 'محطة طقس بـ ESP32 و LoRa', tags: ['ESP32', 'LoRa', 'IoT'], by: 'طارق', likes: 88, h: 52, st: 'مكتمل' },
    { f: 'soft', title: 'لوحة تحكم ويب لمراقبة الروبوت', tags: ['WebSocket', 'Python'], by: 'هشام', likes: 109, h: 220, st: 'مكتمل', feat: 1 },
    { f: 'soft', title: 'مصنِّف صور للقطع الإلكترونية', tags: ['YOLO', 'PyTorch'], by: 'ليلى', likes: 142, h: 240, st: 'قيد العمل' },
    { f: 'mech', title: 'ماكينة CNC مكتبية من قطع مطبوعة', tags: ['CNC', 'GRBL', '3D Print'], by: 'كريم', likes: 197, h: 18, st: 'مكتمل', feat: 1 },
    { f: 'mech', title: 'قبضة روبوتية مطبوعة بمفاصل مرنة', tags: ['TPU', 'Fusion 360'], by: 'هالة', likes: 77, h: 8, st: 'مكتمل' },
    { f: 'elec', title: 'نظام ري ذكي يعمل بالطاقة الشمسية', tags: ['PCB', 'LoRa', 'IoT'], by: 'نور', likes: 156, h: 150, st: 'مكتمل', feat: 1 },
    { f: 'elec', title: 'مزود طاقة مخبري قابل للضبط', tags: ['LM317', 'KiCad'], by: 'سارة', likes: 93, h: 165, st: 'قيد العمل' }
  ],
  courses: [
    { f: 'mecha', title: 'أساسيات التحكم PID بالتطبيق', n: 12, level: 'متوسط', by: 'عمر', h: 190 },
    { f: 'robot', title: 'ROS 2 من الصفر', n: 24, level: 'مبتدئ', by: 'حسن', h: 265 },
    { f: 'embed', title: 'STM32 من الصفر إلى RTOS', n: 30, level: 'متوسط', by: 'طارق', h: 38 },
    { f: 'embed', title: 'ESP32 للمبتدئين', n: 16, level: 'مبتدئ', by: 'رنا', h: 50 },
    { f: 'soft', title: 'C++ للأنظمة المدمجة', n: 20, level: 'متوسط', by: 'دينا', h: 220 },
    { f: 'mech', title: 'التصميم للطباعة ثلاثية الأبعاد', n: 14, level: 'مبتدئ', by: 'هالة', h: 18 },
    { f: 'elec', title: 'الإلكترونيات من الأساس', n: 28, level: 'مبتدئ', by: 'نور', h: 150 },
    { f: 'elec', title: 'تصميم PCB بـ KiCad', n: 18, level: 'متوسط', by: 'مريم', h: 165 }
  ],
  video: { title: 'ذراع روبوتية بستة محاور باستخدام ESP32', ago: 'منذ يومين', views: '12K', comments: 146, f: 'robot', h: 265 },
  online: ['سارة', 'محمود', 'عمر', 'ليلى', 'كريم', 'نور', 'حسن', 'رنا', 'يوسف', 'دينا', 'فادي', 'هالة'],
  stats: { members: '18,420', topics: '32,614', projects: '1,284', solved: '9,710', online: 214 },
  extra: [
    { name: 'الإعلانات', n: 48, last: 'مسابقة صمّم روبوت تتبع خط' },
    { name: 'فيديوهات القناة', n: 212, last: 'ذراع روبوتية بستة محاور' },
    { name: 'استراحة المهندسين', n: '1.7K', last: 'شاركنا صورة ورشتك' },
    { name: 'الوظائف والتدريب', n: 640, last: 'مهندس أنظمة مدمجة في عمّان' }
  ]
};
