// بيانات البرامج الاستراتيجية والتنفيذية - خطة التنمية الخمسية الحادية عشرة 2026-2030
// المصدر: قائمة مدراء البرامج التنفيذية بالمحافظة.xlsx + قائمة مدراء البرامج التنفيذية على المستوى المركزي.pdf

const STRATEGIC_GOALS = [
  { id: 1, name: "تعزيز الصحة العامة" },
  { id: 2, name: "التوسع في التغطية الصحية الشاملة" },
  { id: 3, name: "الموارد البشرية من أجل الصحة" },
  { id: 4, name: "حوكمة القطاع الصحي" },
  { id: 5, name: "تعزيز اقتصاد الدواء والأمن الدوائي" },
  { id: 6, name: "تنويع مصادر تمويل النظام الصحي" },
  { id: 7, name: "تمكين الاستراتيجية الوطنية للصحة الرقمية" },
  { id: 8, name: "تطوير نظام الرعاية الصحية في القطاع الخاص" }
];

// 36 برنامج تنفيذي منعكس على مستوى المحافظة (البرامج المنفذة مركزيًا بالكامل غير مدرجة)
const PROGRAMS = [
  // 1. تعزيز الصحة العامة
  { code: "1.1", goalId: 1, name: "برنامج إدارة الكوارث وطوارئ الصحة العامة", govManager: "د. سلطان البوسعيدي", central: { name: "د. محمد البوصافي", title: "مدير المركز الوطني لإدارة الطوارئ والمخاطر الصحية", phone: "99389488", email: "Dr.albusafi@gmail.com" } },
  { code: "1.2", goalId: 1, name: "برنامج الترصد والإنذار المبكر للأمراض", govManager: "د. سلطان البوسعيدي", central: { name: "د. عادل بن سعيد الوهيبي", title: "مدير دائرة الترصد المتكامل", phone: "99425673", email: "Adil.alwahaibi@moh.gov.om" } },
  { code: "1.3", goalId: 1, name: "برنامج الصحة المدرسية والجامعية", govManager: "د. سلطان البوسعيدي", central: { name: "د. نوال الراشدية", title: "مديرة دائرة تعزيز الصحة", phone: "98226391", email: "Nawal.alrashdi@moh.gov.om" } },
  { code: "1.4", goalId: 1, name: "برنامج الوقاية من الأمراض المعدية", govManager: "د. سلطان البوسعيدي", central: { name: "بدر الرواحي", title: "مدير دائرة الوقاية من الأمراض المعدية", phone: "99430689", email: "Bader.alrawahi@moh.gov.om" } },
  { code: "1.5", goalId: 1, name: "برنامج الوقاية من الأمراض غير المعدية", govManager: "د. سلطان البوسعيدي", central: { name: "د. شذى الرئيسية", title: "مديرة دائرة الوقاية من الأمراض غير المعدية", phone: "99866353", email: "Shadha.alraisi@moh.gov.om" } },
  { code: "1.6", goalId: 1, name: "برنامج تعزيز السلامة والأمن الحيوي", govManager: "د. سلطان البوسعيدي", central: { name: "د. حنان الكندية", title: "مديرة دائرة المختبر المركزي للصحة العامة", phone: "99207943", email: "drhananalkindi@gmail.com" } },
  { code: "1.7", goalId: 1, name: "برنامج تعزيز الصحة المهنية والسلامة البيئية", govManager: "د. سلطان البوسعيدي", central: { name: "د. فاطمة الحكمانية", title: "مديرة دائرة الصحة البيئية والمهنية", phone: "98226391", email: "fatma.alhakmani@moh.gov.om" } },

  // 2. التوسع في التغطية الصحية الشاملة
  { code: "2.1", goalId: 2, name: "برنامج تطوير الخدمات التأهيلية والتلطيفية", govManager: "د. فايز الراشدي", central: { name: "د. تركية البوسعيدية", title: "طبيب استشاري أول طب أسرة ومجتمع / مدير دائرة الرعاية التأهيلية والتلطيفية", phone: "99374114", email: "turkiya17@hotmail.com" } },
  { code: "2.2", goalId: 2, name: "برنامج تطوير الخدمات التخصصية", govManager: "د. مصلح المصلحي", central: { name: "د. سعيد المخيني", title: "طبيب استشاري صحة عامة", phone: "99202662", email: "suh.moh.om@gmail.com" } },
  { code: "2.3", goalId: 2, name: "برنامج تعزيز صحة الطفل", govManager: "د. حسناء البلوشية", central: { name: "د. جمانة بنت أحمد العبدواني", title: "مديرة دائرة صحة الطفل", phone: "99333253", email: "Jumana.alabduwani@moh.gov.om" } },
  { code: "2.4", goalId: 2, name: "برنامج خدمات الصحة الافتراضية", govManager: "د. فايز الراشدي", central: { name: "د. أنس الكيمياني", title: "طبيب اختصاصي أول طب أسرة / مدير دائرة الصحة الافتراضية", phone: "95140960", email: "anas.alkamiyani@moh.gov.om" } },
  { code: "2.5", goalId: 2, name: "برنامج خدمات الصحة الإنجابية", govManager: "د. حسناء البلوشية", central: { name: "د. جميلة بنت تيسير العبري", title: "مديرة دائرة الصحة الإنجابية", phone: "99474953", email: "Jamila.alabri@moh.gov.om" } },
  { code: "2.6", goalId: 2, name: "برنامج دعم الرعاية الصحية الأولية", govManager: "د. فايز الراشدي", central: { name: "د. أحمد الوهيبي", title: "طبيب أول استشاري طب أسرة ومجتمع", phone: "99333391", email: "ahmed.H.alwahaibi@moh.gov.om" } },
  { code: "2.7", goalId: 2, name: "برنامج صحة المرأة", govManager: "د. حسناء البلوشية", central: { name: "د. فايزة بنت عبدالحسين الفاضل", title: "مديرة دائرة صحة المرأة", phone: "99369274", email: "Faiza.alfadhil@moh.gov.om" } },
  { code: "2.8", goalId: 2, name: "برنامج صحة المسنين والرعاية المنزلية", govManager: "د. فايز الراشدي", central: { name: "ناهد آل جميل", title: "رئيس قسم الرعاية المنزلية", phone: "92916451", email: "Nahid.ali@moh.gov.om" } },

  // 3. الموارد البشرية من أجل الصحة
  { code: "3.1", goalId: 3, name: "برنامج إدارة الموارد البشرية", govManager: "أحمد سالم الحجري", central: { name: "عمار الحسني", title: "مدير دائرة الموارد البشرية", phone: "92229888", email: "ammar.alhasani@moh.gov.om" } },
  { code: "3.2", goalId: 3, name: "برنامج التدريب والتأهيل", govManager: "أحمد سالم الحجري", central: { name: "محمود البيماني", title: "رئيس مركز المحاكاة والتعلم الرقمي بالندب", phone: "99738019", email: "mbahla86@gmail.com" } },
  { code: "3.3", goalId: 3, name: "برنامج تطوير وتحديث منظومة التعليم الصحي", govManager: "أحمد سالم الحجري", central: { name: "أحلام الرمحي", title: "مدير أكاديمية تنمية الموارد البشرية", phone: "99548470", email: "ahlam.alrumhi@moh.gov.om" } },
  { code: "3.4", goalId: 3, name: "برنامج تنظيم وتخطيط الموارد البشرية", govManager: "أحمد سالم الحجري", central: { name: "بدرية البلوشي", title: "رئيس قسم تخطيط الاحتياج", phone: "96626612", email: "badriya.ali@moh.gov.om" } },

  // 4. حوكمة القطاع الصحي
  { code: "4.1", goalId: 4, name: "برنامج التشريعات والسياسات المعنية بالصحة", govManager: "عائشة الحارثية", central: { name: "د. ناهدة اللواتي", title: "قسم السياسات الصحية ودعم القرارات", phone: "99346944", email: "Nahida.allawati@moh.gov.om" } },
  { code: "4.2", goalId: 4, name: "برنامج الجودة والاعتماد", govManager: "عائشة الحارثية", central: { name: "سامية البلوشي", title: "مديرة دائرة اعتماد المؤسسات الصحية", phone: "95223440", email: "samiyatr@gmail.com" } },
  { code: "4.3", goalId: 4, name: "برنامج تعزيز منظومة اللامركزية", govManager: "عائشة الحارثية", central: { name: "د. يوسف الحسني", title: "قسم تطوير الحوكمة", phone: "96200850", email: "Yousufmh.alhasani@moh.gov.om" } },
  { code: "4.4", goalId: 4, name: "برنامج منظومة الرقابة والتقييم", govManager: "عائشة الحارثية", central: { name: "د. منى اللواتيا", title: "مديرة دائرة تقويم الأداء الإكلينيكي", phone: "99467686", email: "ddc-dgqac@moh.gov.om" } },

  // 5. تعزيز اقتصاد الدواء والأمن الدوائي
  { code: "5.2", goalId: 5, name: "برنامج تعزيز الرعاية الصيدلانية", govManager: "أحمد الجفيلي", central: { name: "الصيدلانية إسراء بنت ألطاف حسين اللواتي", title: "رئيسة قسم خدمات الرعاية الصيدلانية - المديرية العامة للتموين الطبي", phone: "92538528", email: "isra.allawatia@moh.gov.om" } },
  { code: "5.3", goalId: 5, name: "برنامج سلامة الدواء والرقابة الدوائية", govManager: "خميس السعدي", central: { name: "الصيدلي أحمد بن العقاب البلوشي", title: "نقطة ارتكاز التدريب والتطوير - مركز سلامة الدواء", phone: "98830372", email: "ahmed.aalbalushi@moh.gov.om" } },

  // 6. تنويع مصادر تمويل النظام الصحي
  { code: "6.2", goalId: 6, name: "برنامج تعزيز كفاءة الإنفاق الصحي", govManager: "علي العزري", central: { name: "د. زهير الصلتي", title: "مدير المركز الوطني للأبحاث", phone: "99233406", email: "Zuhair.alsulti@moh.gov.om" } },

  // 7. تمكين الاستراتيجية الوطنية للصحة الرقمية (مدير مركزي واحد لكافة البرامج الخمسة)
  { code: "7.1", goalId: 7, name: "البرنامج الإداري", govManager: "محمد الرحبي", central: { name: "خالد البلوشي", title: "مدير دائرة الصحة الرقمية وتطوير النظم", phone: "99880808", email: "Khalidh.albalushi@moh.gov.om" } },
  { code: "7.2", goalId: 7, name: "البرنامج السريري", govManager: "محمد الرحبي", central: { name: "خالد البلوشي", title: "مدير دائرة الصحة الرقمية وتطوير النظم", phone: "99880808", email: "Khalidh.albalushi@moh.gov.om" } },
  { code: "7.3", goalId: 7, name: "برنامج الابتكار والذكاء الاصطناعي", govManager: "محمد الرحبي", central: { name: "خالد البلوشي", title: "مدير دائرة الصحة الرقمية وتطوير النظم", phone: "99880808", email: "Khalidh.albalushi@moh.gov.om" } },
  { code: "7.4", goalId: 7, name: "برنامج الأساس الرقمي للصحة", govManager: "محمد الرحبي", central: { name: "خالد البلوشي", title: "مدير دائرة الصحة الرقمية وتطوير النظم", phone: "99880808", email: "Khalidh.albalushi@moh.gov.om" } },
  { code: "7.5", goalId: 7, name: "برنامج الخدمات الصحية الشخصية", govManager: "محمد الرحبي", central: { name: "خالد البلوشي", title: "مدير دائرة الصحة الرقمية وتطوير النظم", phone: "99880808", email: "Khalidh.albalushi@moh.gov.om" } },

  // 8. تطوير نظام الرعاية الصحية في القطاع الخاص
  // ملاحظة: مطابقة الأسماء المركزية لأسماء البرامج بالمحافظة استُنتجت من التشابه في المحتوى - يُفضّل التحقق منها
  { code: "8.1", goalId: 8, name: "برنامج إطار الشراكة بين القطاع الخاص والعام", govManager: "حسناء الحجرية", central: { name: "د. عادل الأنصاري", title: "مدير عام مساعد - إطار الشراكة بين القطاع الحكومي والقطاع الصحي الخاص", phone: "92828581", email: "asalansari@yahoo.com" } },
  { code: "8.2", goalId: 8, name: "برنامج إطار حوكمة الرعاية الصحية", govManager: "حسناء الحجرية", central: { name: "د. حمد العدوي", title: "مستشار المدير العام - الحوكمة والإشراف والرقابة على القطاع الصحي الخاص", phone: "99367632", email: "aladawihamad@hotmail.com" } },
  { code: "8.3", goalId: 8, name: "برنامج إطار لتخطيط الرعاية الصحية في القطاع الخاص", govManager: "حسناء الحجرية", central: { name: "عايدة الهنائية", title: "رئيسة قسم تصاريح المجمعات والمراكز - تخطيط الرعاية الصحية بالقطاع الخاص", phone: "99338631", email: "faithalhinai@gmail.com" } },
  { code: "8.4", goalId: 8, name: "برنامج البحث العلمي والابتكار في القطاع الخاص", govManager: "حسناء الحجرية", central: { name: "د. منيرة الهاشمي", title: "مدير دائرة تنظيم الطب البديل والتكميلي - البحث العلمي والابتكار بالقطاع الخاص", phone: "99475357", email: "Drmunira.alhashmi@moh.gov.om" } },
  { code: "8.5", goalId: 8, name: "برنامج نظام مراقبة وتقييم أداء الخدمات الصحية في القطاع الخاص", govManager: "حسناء الحجرية", central: { name: "أحمد الراشدي", title: "رئيس قسم تخطيط التفتيش - تنظيم التراخيص والرقابة المهنية المستمرة", phone: "98008003", email: "Ahmedna.alrashdi@moh.gov.om" } }
];

// قائمة مدراء البرامج التنفيذية بالمحافظة (تسجيل الدخول بالاسم فقط)
const GOV_MANAGERS = [...new Set(PROGRAMS.map(p => p.govManager))];

const YEARS = [2026, 2027, 2028, 2029, 2030];

const PLAN_TITLE = "خطة التنمية الخمسية الحادية عشرة 2026 - 2030 لأولوية الصحة";
const ADMIN_NAME = "قسم التخطيط والدراسات";
