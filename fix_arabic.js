const fs = require('fs');

let content = fs.readFileSync('assets/data.js', 'utf8');

const arSection = `    ar: {
      brand: { subtitle: "وزارة الفلاحة" },
      nav: {
        home: "الرئيسية",
        foundation: "المؤسسة",
        services: "الخدمات",
        news: "المستجدات",
        events: "الأجندة التضامنية",
        contact: "اتصل بنا",
        member: "فضاء المنخرط"
      },
      hero: {
        eyebrow: "نخدم، ندعم، نقرّب",
        title: "مؤسسة اجتماعية في خدمة نساء ورجال وزارة الفلاحة",
        description:
          "تجمع فوس-أكري الخدمات الاجتماعية وشبه الطبية والتعليمية والتضامنية الموجهة لموظفي وزارة الفلاحة وأسرهم.",
        ctaServices: "اكتشف الخدمات",
        ctaContact: "تواصل معنا"
      },
      about: {
        tag: "المؤسسة",
        title: "مواكبة اجتماعية منظمة وقريبة وعلى الصعيد الوطني",
        body:
          "تجمع مؤسسة النهوض بالأعمال الاجتماعية لموظفي وزارة الفلاحة مختلف الخدمات والاتفاقيات والبرامج التضامنية الواردة في النماذج الأولية الحالية.",
        missionTitle: "المهمة",
        missionBody: "خدمة المنخرطين، دعم الأسر، وتقريب الخدمات عبر مختلف جهات المملكة.",
        scopeTitle: "مجالات التدخل",
        scopeBody: "الاحتياط الطبي والاجتماعي، الترفيه، التمدرس، السكن، المشاريع الشخصية، واتفاقيات الشركاء.",
        promiseTitle: "وعدنا",
        promiseBody: "تجربة واضحة، ثنائية اللغة وسهلة الولوج، تبرز الخدمات الأساسية والمعلومات العملية."
      },
      services: {
        tag: "الخدمات",
        title: "منظومة متكاملة للدعم",
        link: "الدخول إلى فضاء المنخرط",
        more: "عرض المزيد"
      },
      news: {
        tag: "المستجدات",
        title: "أخبار فوس-أكري",
        more: "المزيد من الأخبار"
      },
      events: {
        tag: "الأجندة التضامنية",
        title: "حملات ولقاءات ومبادرات ميدانية",
        subtitle: "نماذج لأحداث ومبادرات تم التقاطها من النماذج الأولية."
      },
      stats: {
        tag: "أرقام رئيسية",
        title: "برامج تتجسد على المدى الطويل",
        travel: { label: "رحلات" },
        school: { label: "دعم للتمدرس" }
      },
      testimonials: {
        tag: "شهادة"
      },
      map: {
        tag: "الحضور الوطني",
        title: "شبكة قرب عبر المغرب",
        subtitle: "اختر جهة أو مرر المؤشر فوق مدينة لعرض مندوبية أو نقطة حضور مبرزة في هذه النسخة التجريبية."
      },
      member: {
        memberTag: "فضاء المنخرط",
        memberTitle: "الاطلاع على الإكسترانت والخدمات المخصصة",
        memberBody: "اعثر على الخدمات والاتفاقيات والمعلومات العملية داخل فضاء المنخرط فوس-أكري.",
        memberCta: "الدخول إلى الإكسترانت",
        clubTag: "كلوب أكري",
        clubTitle: "اكتشف الامتيازات والشراكات",
        clubBody: "استكشف الاتفاقيات والامتيازات والفرص المرتبطة بكلوب أكري والشركاء.",
        clubCta: "عرض الشركاء"
      },
      partners: {
        tag: "الشركاء",
        title: "شبكة قوية من الشركاء العموميين والخواص تعزز أثر البرامج"
      },
      contact: {
        tag: "اتصل بنا",
        title: "لنتحدث عن احتياجاتكم",
        subtitle: "بيانات الاتصال مأخوذة من النماذج الأولية لتسهيل التواصل.",
        phone1: "+212 5 37 77 47 48",
        address: "461 شارع الحسن الثاني، أكدال - الرباط",
        formName: "الاسم الكامل",
        formEmail: "البريد الإلكتروني",
        formSubject: "الموضوع",
        formMessage: "الرسالة",
        formSubmit: "إرسال"
      },
      footer: {
        about: "مؤسسة النهوض بالأعمال الاجتماعية لموظفي وزارة الفلاحة.",
        usefulTitle: "روابط مفيدة",
        useful1: "طلبات العروض",
        useful2: "الأسئلة الشائعة",
        useful3: "النشرة الإخبارية",
        quickTitle: "ولوج سريع",
        quick1: "بوابة الموظف",
        quick2: "البرنامج الاجتماعي",
        quick3: "المستجدات",
        contactTitle: "بيانات الاتصال",
        copy: "2026 فوس-أكري - وزارة الفلاحة"
      },
      pages: {
        adherent: {
          kicker: "فضاء المنخرط",
          title: "الاطلاع على الإكسترانت والخدمات المخصصة",
          intro: "اعثر على الخدمات والاتفاقيات والمعلومات العملية داخل فضاء المنخرط فوس-أكري.",
          card1Title: "ولوج سريع",
          card1Body: "ادخل إلى الإكسترانت للاطلاع على الخدمات والمعلومات العملية.",
          card2Title: "الخدمات",
          card2Body: "استكشف الخدمات الاجتماعية وشبه الطبية وآليات المواكبة.",
          card3Title: "الاتفاقيات",
          card3Body: "اعثر على الاتفاقيات والامتيازات المفيدة لك ولأسرتك.",
          cta: "الدخول إلى الإكسترانت",
          back: "العودة إلى الرئيسية"
        },
        club: {
          kicker: "كلوب أكري",
          title: "اكتشف الامتيازات والشراكات",
          intro: "استكشف الاتفاقيات والامتيازات والفرص المرتبطة بكلوب أكري والشركاء.",
          card1Title: "امتيازات",
          card1Body: "اكتشف الامتيازات التي تم التفاوض بشأنها مع الشركاء العموميين والخواص.",
          card2Title: "شراكات",
          card2Body: "اطلع على المؤسسات والعلامات التي تواكب برامج فوس-أكري.",
          card3Title: "مستجدات مفيدة",
          card3Body: "اعثر على الإعلانات والاتفاقيات التي تم إبرازها داخل المنصة.",
          cta: "عرض الشركاء",
          back: "العودة إلى الرئيسية"
        }
      },
      formNotice: "شكرا لكم. هذه النسخة الثابتة لا ترسل الرسائل بعد."
    }`;

// Replace the corrupted ar: { ... } block in translations
const arStart = content.indexOf('    ar: {');
const arEnd = content.indexOf('  },\n  services:', arStart);
content = content.substring(0, arStart) + arSection + '\n  ' + content.substring(arEnd);

// Fix cities Arabic
const citiesAr = [
    { key: 'rabat', name: 'الرباط', text: 'المقر الرئيسي لفوس-أكري ونقطة تنسيق الاتفاقيات والخدمات الاجتماعية.' },
    { key: 'casa', name: 'الدار البيضاء', text: 'صلة بالشركاء لتقريب الامتيازات وتوجيه المنخرطين.' },
    { key: 'fes', name: 'فاس', text: 'نقطة قرب حول التمدرس والمعلومة والاتفاقيات.' },
    { key: 'marrakech', name: 'مراكش', text: 'صلة ببرامج الدعم والحملات والمبادرات الميدانية.' },
    { key: 'agadir', name: 'أكادير', text: 'تتبع محلي للاتفاقيات الصحية والامتيازات الموجهة للأسر.' },
    { key: 'tanger', name: 'طنجة', text: 'حضور بالشمال للمعلومة والشراكات ومواكبة المنخرطين.' },
    { key: 'oujda', name: 'وجدة', text: 'نقطة استقبال لخدمات القرب بجهة الشرق.' }
];

citiesAr.forEach(city => {
    // Find the city block and fix the ar part
    const keyStr = `key: "${city.key}"`;
    const cityIdx = content.indexOf(keyStr);
    if (cityIdx !== -1) {
        const arPattern = /ar: \{ name: "[^"]*", text: "[^"]*" \}/;
        const cityBlock = content.substring(cityIdx, cityIdx + 400);
        const newAr = `ar: { name: "${city.name}", text: "${city.text}" }`;
        const fixed = cityBlock.replace(arPattern, newAr);
        content = content.substring(0, cityIdx) + fixed + content.substring(cityIdx + 400);
    }
});

// Also fix services ar titles which got corrupted
const servicesFixes = [
    { key: 'prevoyance', title: 'الاحتياط الطبي والاجتماعي', description: 'دعم المنخرطين في مواجهة التحديات المرتبطة بالصحة.', detail: 'مركز طبي اجتماعي، برمجة وتخصصات، تأمين صحي تكميلي، مواكبة طبية ونقل صحي، ودعم للأشخاص ذوي الاحتياجات الخاصة.' },
    { key: 'culture', title: 'الثقافة والترفيه والأسفار', description: 'تمكين المنخرطين من خدمات الترفيه والرفاه.', detail: 'برنامج الرحلات، الخرجات الثقافية، الأنشطة الترفيهية والعروض الخاصة بالمنخرطين وأسرهم.' },
    { key: 'formation', title: 'التكوين والتمدرس', description: 'تشجيع التميز الدراسي للأبناء والتكوين المستمر.', detail: 'دعم التمدرس، المواكبة التربوية، وتقوية الكفاءات عبر آليات للتكوين.' },
    { key: 'logement', title: 'ولوج السكن', description: 'مواكبة المنخرطين في إنجاز مشاريعهم السكنية.', detail: 'أيام مفتوحة، اتفاقيات خاصة بالسكن، ومرافقة في البحث عن الفرص المناسبة.' },
    { key: 'projets', title: 'دعم المشاريع الشخصية', description: 'مواكبة المنخرطين في إنجاز مشاريعهم الشخصية.', detail: 'توجيهات وشراكات وآليات مواكبة من أجل إنجاح المشاريع الفردية والأسرية.' },
    { key: 'education', title: 'التربية والثقافة', description: 'تمكين المنخرطين من مختلف الشراكات والاتفاقيات.', detail: 'اتفاقيات تربوية وثقافية، وتوسيع الولوج إلى عروض الشركاء، وتعزيز التطور الشخصي.' }
];

servicesFixes.forEach(svc => {
    const keyIdx = content.indexOf(`key: "${svc.key}"`);
    if (keyIdx !== -1) {
        // find the ar: block for this service
        const arIdx = content.indexOf('      ar: {', keyIdx);
        const arEndIdx = content.indexOf('      }', arIdx) + 7;
        const newArBlock = `      ar: {\n        title: "${svc.title}",\n        description: "${svc.description}",\n        detail:\n          "${svc.detail}"\n      }`;
        content = content.substring(0, arIdx) + newArBlock + content.substring(arEndIdx);
    }
});

// Fix news ar
const newsFixes = [
    { date: '14/03/2025', title: 'شراكة بتعريفات تفضيلية للأنشطة الرياضية', excerpt: 'اتفاقية مع Joude Gestion Sport تمنح تخفيضات لفائدة المنخرطين.' },
    { date: '05/03/2025', title: 'اتفاقية مع مختبر بوريكريك للباثولوجيا', excerpt: 'تخفيضات تفضيلية للمنخرطين والأزواج والأبناء بالرباط.' },
    { date: '28/02/2025', title: 'عملية العمرة 2025 - الترتيبات اللوجستيكية', excerpt: 'نشر الترتيبات اللوجستيكية المتعلقة بسير العملية.' },
    { date: '20/02/2025', title: 'برنامج العطل والترفيه 2025', excerpt: 'جدولة الأنشطة وفتح التسجيل لفائدة المنخرطين.' },
    { date: '12/02/2025', title: 'اتفاقية صحية جديدة', excerpt: 'امتيازات حصرية لفائدة المنخرطين وأسرهم.' },
    { date: '30/01/2025', title: 'حملة تواصل جهوية', excerpt: 'لقاءات للقرب حول خدمات واتفاقيات فوس-أكري.' }
];

newsFixes.forEach(item => {
    const dateIdx = content.indexOf(`date: "${item.date}"`);
    if (dateIdx !== -1) {
        const arIdx = content.indexOf('      ar: {', dateIdx);
        const arEndIdx = content.indexOf('      }', arIdx) + 7;
        const newArBlock = `      ar: {\n        title: "${item.title}",\n        excerpt: "${item.excerpt}"\n      }`;
        content = content.substring(0, arIdx) + newArBlock + content.substring(arEndIdx);
    }
});

// Fix events ar
const eventsFixes = [
    { date: '10/01/2026', title: 'حملة للتبرع بالدم', excerpt: 'حملة منظمة بالرباط بالقاعة الكبرى لمركب الدباغ.' },
    { date: '08/12/2025', title: 'أيام الأبواب المفتوحة العمران', excerpt: 'برنامج خاص بالسكن بالقنيطرة وتمارة والرباط.' },
    { date: '06/07/2025', title: 'مخيمات صيفية للأطفال', excerpt: 'فتح التسجيل ومواكبة الأسر المنخرطة.' },
    { date: '22/05/2025', title: 'اتفاقية مع صيدلية', excerpt: 'تخفيضات تفضيلية بأكادير لفائدة المنخرطين وأسرهم.' }
];

eventsFixes.forEach(item => {
    const dateIdx = content.indexOf(`date: "${item.date}"`);
    if (dateIdx !== -1) {
        const arIdx = content.indexOf('      ar: {', dateIdx);
        const arEndIdx = content.indexOf('      }', arIdx) + 7;
        const newArBlock = `      ar: {\n        title: "${item.title}",\n        excerpt: "${item.excerpt}"\n      }`;
        content = content.substring(0, arIdx) + newArBlock + content.substring(arEndIdx);
    }
});

// Fix stats ar
content = content.replace(/\{ value: "700"[^}]+\}/, '{ value: "700", icon: "fa-plane-departure", fr: "Voyages", ar: "رحلات" }');
content = content.replace(/\{ value: "174"[^}]+\}/, '{ value: "174", icon: "fa-masks-theater", fr: "Sorties culturelles", ar: "خرجات ثقافية" }');
content = content.replace(/\{ value: "206"[^}]+\}/, '{ value: "206", icon: "fa-kaaba", fr: "Omra et pelerinage", ar: "العمرة والحج" }');
content = content.replace(/\{ value: "2080"[^}]+\}/, '{ value: "2080", icon: "fa-school", fr: "Appui a la scolarisation", ar: "دعم التمدرس" }');

// Fix testimonials ar
const testIdx = content.indexOf('    ar: {\n      quote:');
if (testIdx !== -1) {
    const testEnd = content.indexOf('    }\n  },\n  regions:', testIdx);
    const newTest = `    ar: {\n      quote: "توضح المنصة الخدمات وتقرب المعلومة العملية لفائدة المنخرطين وأسرهم.",\n      author: "نسخة تجريبية مستلهمة من محتوى فوس-أكري"\n    }`;
    content = content.substring(0, testIdx) + newTest + '\n  ' + content.substring(testEnd);
}

fs.writeFileSync('assets/data.js', content, 'utf8');
console.log('Done! Arabic fixed.');
